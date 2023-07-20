<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Switch CSS Classes

> This feature is not yet available to all users.

You can use the classes listed below
to style your `Switch` elements with CSS.

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

## `.switch`

Targets switch elements.
For example:

```css
.switch {
  display: block;
  position: relative;
  transition: .5s;
}
```

## `.switch__label`

Targets switch label text.
For example:

```css
.switch__label {
  font-family: sans-serif;
  font-weight: 700;
  text-transform: lowercase;
  color: black;
}
```

## `.switch__track`

Targets switch track elements.
For example:

```css
.switch__track {
  background-color: #dfd2f4;
  box-shadow: 0 0 1px #2196F3;
}
```

## `.switch__handle`

Targets switch handle elements.
For example:

```css
.switch__handle {
  background-color: white;
}
```
