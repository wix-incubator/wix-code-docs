<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Search Button CSS Classes

> **Note:** This feature is only available to Wix Studio users.

You can use the classes listed below
to style your `SearchButton` elements with CSS.

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

## `.search-button`

Targets search button elements.
For example:

```css
.search-button {
  width: 200px;
  cursor: default;
  background-color: #116dff;
}
```

## `.search-button__label`

Targets search button [label text](https://dev.wix.com/docs/velo/velo-only-apis/$w/search-button/label).
For example:

```css
.search-button__label {
  font-family: sans-serif;
  font-weight: 700;
  text-transform: lowercase;
  color: black;
}
```

## `.search-button__icon`

Targets search button [icon images](https://dev.wix.com/docs/velo/velo-only-apis/$w/search-button/icon).
For example:

```css
.search-button__icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 5px 5px 10px;
}
```
