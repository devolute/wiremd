import { describe, it, expect } from 'vitest';
import { parse } from '../src/parser/index.js';
import { renderToHTML } from '../src/renderer/index.js';
import { extractCallouts } from '../src/renderer/html-renderer.js';

describe('anchors {#id}', () => {
  it('parses #id on a dropdown and emits HTML id', () => {
    const ast = parse('[Q1 How does org…___________v]{#question}');
    const select = ast.children[0] as any;
    expect(select.type).toBe('select');
    expect(select.props.id).toBe('question');

    const html = renderToHTML(ast, { style: 'clean' });
    expect(html).toContain('id="question"');
  });

  it('parses #id on a checkbox', () => {
    const ast = parse('[x] Show evidence only{#evidence}');
    const box = ast.children[0] as any;
    expect(box.type).toBe('checkbox');
    expect(box.props.id).toBe('evidence');
    expect(renderToHTML(ast, { style: 'clean' })).toContain('id="evidence"');
  });

  it('parses #id on a card container', () => {
    const ast = parse(`::: card {#chunk-3}
Chunk 3
:::
`);
    const card = ast.children[0] as any;
    expect(card.type).toBe('container');
    expect(card.containerType).toBe('card');
    expect(card.props.id).toBe('chunk-3');
    expect(renderToHTML(ast, { style: 'clean' })).toContain('id="chunk-3"');
  });
});

describe('::: callout', () => {
  it('parses for and side attributes', () => {
    const ast = parse(`::: callout {for:question side:left}
question select
:::
`);
    const node = ast.children[0] as any;
    expect(node.type).toBe('container');
    expect(node.containerType).toBe('callout');
    expect(node.props.for).toBe('question');
    expect(node.props.side).toBe('left');
  });

  it('renders an aside with leader-line hooks', () => {
    const html = renderToHTML(
      parse(`[Q1 How does org…___________v]{#question}

::: callout {for:question side:left}
question select
:::
`),
      { style: 'sketch' },
    );
    expect(html).toContain('id="question"');
    expect(html).toContain('wmd-callout');
    expect(html).toContain('wmd-callout-left');
    expect(html).toContain('data-callout-for="question"');
    expect(html).toContain('data-callout-side="left"');
    expect(html).toContain('question select');
    expect(html).toContain('wmd-callout-leaders');
    expect(html).toContain('wmd-annotated');
    expect(html).toContain('__wmdCalloutsInit');
  });

  it('hoists nested callouts out of cards', () => {
    const ast = parse(`::: card
[x] Show evidence only{#evidence}

::: callout {for:evidence side:left}
evidence filter
:::
:::
`);
    const { body, callouts } = extractCallouts(ast.children);
    expect(callouts).toHaveLength(1);
    expect((callouts[0] as any).containerType).toBe('callout');
    expect(body.some((n: any) => n.containerType === 'callout')).toBe(false);

    const html = renderToHTML(ast, { style: 'clean' });
    const cardStart = html.indexOf('wmd-container-card');
    const cardInner = html.slice(cardStart, html.indexOf('wmd-callout'));
    expect(cardInner).not.toContain('data-callout-for');
    expect(html).toContain('data-callout-for="evidence"');
  });

  it('does not wrap pages that have no callouts', () => {
    const html = renderToHTML(parse('## Hello\n[Submit]*'), { style: 'clean' });
    expect(html).not.toContain('wmd-has-callouts');
    expect(html).not.toContain('class="wmd-annotated"');
    expect(html).not.toContain('__wmdCalloutsInit');
  });
});

describe('document annotation classes', () => {
  it('emits retrieved and evidence box CSS', () => {
    const html = renderToHTML(
      parse(`::: card {.evidence #cite}
quoted passage
:::
`),
      { style: 'sketch' },
    );
    expect(html).toContain('id="cite"');
    expect(html).toContain('wmd-evidence');
    expect(html).toContain('.wmd-retrieved');
    expect(html).toContain('.wmd-document');
    expect(html).toContain('#c8e6c9');
  });

  it('builds a two-column grid from ### headings', () => {
    const html = renderToHTML(
      parse(`::: grid-2 {.start}

### Chunks
list

### PDF Viewer
page

:::
`),
      { style: 'sketch' },
    );
    expect(html).toContain('wmd-grid-2');
    expect(html).toContain('wmd-start');
    expect(html).toContain('Chunks');
    expect(html).toContain('PDF Viewer');
  });
});
