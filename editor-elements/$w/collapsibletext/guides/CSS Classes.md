<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Collapsible Text CSS Classes

> This feature is not yet available to all users.

You can use the classes listed below
to style your `CollapsibleText` elements with CSS.

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

## `.collapsible-text`

Targets collapsible text elements.
For example:

```css
.collapsible-text {
  display: flex;
  flex-flow: column-reverse;
}
```

## `.collapsible-text__button`

Targets collapsible text button elements.
For example:

```css
.collapsible-text__button {
  width: 200px;
  cursor: default;
  background-color: #116dff;
}
```

## `.collapsible-text__text`

Targets text in collapsible text elements.
For example:

```css
.collapsible-text__text {
  font-family: sans-serif;
  font-weight: 700;
  color: black;
}
```
