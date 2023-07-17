<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Pagination CSS Classes

> This feature is not yet available to all users.

You can use the classes listed below
to style your `Pagination` elements with CSS.

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

## `.pagination`

Targets pagination elements.
For example:

```css
.pagination {
  padding-left: 50px;
}
```

## `.pagination__current-page`

Targets pagination [current page]($w/pagination/currentPage) element.
For example:

```css
.pagination__current-page {
  font-family: sans-serif;
  color: green;
}
```

## `.pagination__page-number`

Targets pagination page number element.
For example:

```css
.pagination__page-number {
  font-family: sans-serif;
  color: green;
}
```

## `.pagination__total-pages`

Targets pagination [total pages]($w/pagination/totalPages) element.
For example:

```css
.pagination__total-pages {
  font-family: sans-serif;
  color: black;
}
```

## `.pagination__navigation-button`

Targets pagination navigation buttons.
For example:

```css
.pagination__navigation-button {
  width: 200px;
  cursor: default;
  background-color: #116dff;
}
```

## `.pagination__input-field`

Targets pagination input fields.
For example:

```css
.pagination__input-field {
  border: none;
  border-bottom: 2px solid #840292;
  background-color: #dfd2f4;
  font-family: monospace;
}
```
