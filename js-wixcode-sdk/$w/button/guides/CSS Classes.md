# Button CSS Classes

You can use the classes listed below
to style your `Button` elements with CSS.

For more information on styling your elements with CSS, see
[Styling Elements with CSS]($w/styling-elements-with-css) and the
[MDN CSS reference docs](https://developer.mozilla.org/en-US/docs/Learn/CSS).

<blockquote class="important">

__Important:__
Element structure and unlisted class names may change in the future.
To avoid unintended style changes to your site,
select elements with only the officially supported class names.

</blockquote>

## `.button`

Targets button elements.
For example:

```css
.button {
  width: 200px;
  cursor: default;
  background-color: #116dff;
}
```

## `.button__label`

Targets button [label text]($w/button/label).
For example:

```css
.button__label {
  font-family: sans-serif;
  font-weight: 700;
  text-transform: lowercase;
  color: black;
}
```

## `.button__icon`

Targets button [icon images]($w/button/icon).
For example:

```css
.button__icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 5px 5px 10px;
}
```
