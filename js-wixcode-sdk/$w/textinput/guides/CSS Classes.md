# Text Input CSS Classes

> This feature is not yet available to all users.

You can use the classes listed below
to style your `TextInput` elements with CSS.

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

## `text-input`

Targets text input elements.
For example:

```css
text-input {
  width: 500px;
  display: flex;
  flex-direction: row;
}
```

## `text-input__label`

Targets text input [label text]($w/textinput/label).
For example:

```css
text-input__label {
  font-family: sans-serif;
  font-weight: 700;
  text-transform: lowercase;
  color: black;
}
```

## `text-input__input`

Targets text input boxes.
For example:

```css
text-input__input {
  border: none;
  border-bottom: 2px solid #840292;
  background-color: #dfd2f4;
  font-family: monospace;
}
```
