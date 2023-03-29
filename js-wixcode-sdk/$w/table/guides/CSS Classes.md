<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Table CSS Classes

> This feature is not yet available to all users.

You can use the classes listed below
to style your `Table` elements with CSS.

For more information on styling your elements with CSS, see
[Styling Elements with CSS]($w/styling-elements-with-css) and the
[MDN CSS reference docs](https://developer.mozilla.org/en-US/docs/Learn/CSS).

<blockquote class="important">

__Important:__
Element structure and undocumented class names
may change without advance warning.
To avoid unintended style changes to your site,
select elements with the documented class names only.

</blockquote>

## `.table`

Targets table elements.
For example:

```css
.table {
  table-layout: fixed;
  width: 100%;
  border: 3px solid purple;
}
```

## `.table__row`

Targets table [rows]($w/table/rows).
For example:

```css
.table__row {
  text-transform: capitalize;
  letter-spacing: 2px;
}
```

## `.table__header`

Targets table headers.
For example:

```css
.table__header {
  margin-bottom: 25px;
  padding: 100px;
  border-bottom: 5px solid black;
  text-transform: uppercase;
}
```

## `.table__cell`

Targets table cells.
For example:

```css
.table__cell {
  border: none;
  border-bottom: 2px solid #840292;
  background-color: #dfd2f4;
  font-family: monospace;
}
```

## `.table__body`

Targets table body elements.
For example:

```css
.table__body {
  opacity: 75%
}
```

## `.table__pagination`

Targets table pagination elements.
For example:

```css
.table__pagination {
  fill: #FF0000;
}
```
