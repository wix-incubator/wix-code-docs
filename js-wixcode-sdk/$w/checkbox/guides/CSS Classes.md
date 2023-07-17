<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Checkbox CSS Classes

> This feature is not yet available to all users.

You can use the classes listed below
to style your `Checkbox` elements with CSS.

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

## `.checkbox`

Targets checkbox elements.
For example:

```css
.checkbox {
  display: block;
  padding-left: 50px;
}
```

## `.checkbox__label`

Targets checkbox [label text]($w/checkbox/label).
For example:

```css
.checkbox__label {
  font-family: sans-serif;
  font-weight: 700;
  text-transform: lowercase;
  color: black;
}
```

## `.checkbox__icon`

Targets checkbox icons.
For example:

```css
.checkbox__icon {
  fill: #FF0000;
}
```

## `.checkbox__input`

Targets checkbox input boxes.
For example:

```css
.checkbox__input {
  border: none;
  border-bottom: 2px solid #840292;
  background-color: #dfd2f4;
  font-family: monospace;
}
```
