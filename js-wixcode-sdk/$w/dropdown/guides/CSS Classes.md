# Dropdown CSS Classes

> This feature is not yet available to all users.

You can use the classes listed below
to style your `Dropdown` elements with CSS.

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

## `.dropdown`

Targets dropdown elements.
For example:

```css
.dropdown {
  width: 500px;
  display: flex;
  flex-direction: row;
}
```

## `.dropdown__label`

Targets dropdown [label text]($w/dropdown/label).
For example:

```css
.dropdown__label {
  font-family: sans-serif;
  font-weight: 700;
  text-transform: lowercase;
  color: black;
}
```

## `.dropdown__icon`

Targets dropdown icons.
For example:

```css
.dropdown__icon {
  fill: #840292;
}
```

## `.dropdown__input`

Targets dropdown input boxes.
For example:

```css
.dropdown__input {
  border: none;
  border-bottom: 2px solid #840292;
  background-color: #dfd2f4;
  font-family: monospace;
}
```

## `.dropdown__list`

```css
.dropdown__list {
  background-color: #dfd2f4;
  font-family: monospace;
}
```
