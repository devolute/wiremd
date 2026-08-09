import { describe, it, expect } from 'vitest';
import { parse } from '../src/parser/index.js';
import { renderToHTML } from '../src/renderer/index.js';

describe('bottom-nav', () => {
  it('parses nested nav items with icons and active marker', () => {
    const ast = parse(`::: bottom-nav
[[ :home: Feed* | :search: Themen | :user: Profil ]]
:::
`);
    const nav = ast.children[0] as any;
    expect(nav.type).toBe('container');
    expect(nav.containerType).toBe('bottom-nav');
    expect(nav.children[0].type).toBe('nav');
    const items = nav.children[0].children;
    expect(items).toHaveLength(3);
    expect(items[0].props?.classes).toContain('active');
    expect(items[1].props?.classes || []).not.toContain('active');
  });

  it('renders a sticky bottom nav with active item', () => {
    const html = renderToHTML(
      parse(`::: bottom-nav
[[ :home: Feed* | :search: Themen | :user: Profil ]]
:::
`),
      { style: 'clean' },
    );
    expect(html).toContain('wmd-container-bottom-nav');
    expect(html).toContain('aria-label="Bottom navigation"');
    expect(html).toContain('wmd-bottom-nav-content');
    expect(html).toContain('wmd-active');
    expect(html).toContain('Feed');
    expect(html).toContain('Themen');
  });
});

describe('chips', () => {
  it('parses static and removable chips', () => {
    const ast = parse('|React|{.chip} |Design ×|{.chip}');
    const para = ast.children[0] as any;
    expect(para.type).toBe('paragraph');
    const badges = (para.children || []).filter((c: any) => c.type === 'badge');
    expect(badges).toHaveLength(2);
    expect(badges[0].content).toBe('React');
    expect(badges[0].props.classes).toContain('chip');
    expect(badges[1].content).toBe('Design ×');
  });

  it('renders removable chip with dismiss control', () => {
    const html = renderToHTML(parse('|Hitze ×|{.chip}'), { style: 'clean' });
    expect(html).toContain('wmd-chip');
    expect(html).toContain('wmd-chip-removable');
    expect(html).toContain('wmd-chip-dismiss');
    expect(html).toContain('Hitze');
    expect(html).toContain('aria-label="Remove Hitze"');
  });
});

describe('toggle-group', () => {
  it('applies toggle-group class on row', () => {
    const ast = parse(`::: row {.toggle-group}
[List]* [Grid] [Map]
:::
`);
    const row = ast.children[0] as any;
    expect(row.type).toBe('row');
    expect(row.props.classes).toContain('toggle-group');
  });

  it('emits segmented-control structural CSS', () => {
    const html = renderToHTML(
      parse(`::: row {.toggle-group}
[List]* [Grid]
:::
`),
      { style: 'clean' },
    );
    expect(html).toContain('wmd-toggle-group');
    expect(html).toContain('.wmd-row.wmd-toggle-group');
  });
});
