::: layout {.sidebar-main}

![[_sidebar.md]]

::: main

# Callouts

Leader-line labels that sit in the margin and point at a control. Use them for paper figures and annotated mockups — not as in-product tooltips.

## Anchors

Give the target an id with `{#id}`:

::: demo
Question
[Q1 How does org…___________v]{#question}
:::

`{#id}` works on inputs, selects, checkboxes, buttons, headings, and `:::` containers.

## Callout container

Point at that id with `::: callout`. `for` is the target id; `side` is `left`, `right`, `top`, or `bottom` (default `left`).

::: demo
Question
[Q1 How does org…___________v]{#question}

[x] Show evidence only{#evidence}

::: callout {for:question side:left}
question select
:::

::: callout {for:evidence side:left}
evidence filter
:::
:::

## Syntax

```
[Control___________v]{#target-id}

::: callout {for:target-id side:left}
label text
:::
```

| Attribute | Meaning |
|-----------|---------|
| `for` | Id of the target (`{#that-id}`) |
| `side` | `left` (default), `right`, `top`, or `bottom` |

Callouts are pulled out of the layout so they do not take flow space. Put them as **siblings** of the annotated UI (after a card or `::: grid-2`), not nested inside the grid. Two-column screens use `::: grid-2` with `###` headings as cells.

For PDF mockups: `{.document}` is a page frame; `{.retrieved}` is a white overlay box; `{.evidence}` is a green cited span. HTML export draws dashed SVG leaders after layout.

Blockquotes (`> note`) stay document notes. Do not use them as pointers.

:::

:::
