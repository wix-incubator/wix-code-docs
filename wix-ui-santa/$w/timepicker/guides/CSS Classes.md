<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Time Picker CSS Classes

> This feature is not yet available to all users.

You can use the classes listed below
to style your `TimePicker` elements with CSS.

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

## `.time-picker`

Targets time picker elements.
For example:

```css
.time-picker {
  border: #ffff00;
  border-style: dotted;
}
```

## `.time-picker__label`

Targets time picker [label text]($w/timepicker/label).
For example:

```css
.time-picker__label {
  font-family: sans-serif;
  font-weight: 700;
  text-transform: lowercase;
  color: black;
}
```

## `.time-picker__input`

Targets time picker inputs.
For example:

```css
.time-picker__input {
  border: none;
  border-bottom: 2px solid #840292;
  background-color: #dfd2f4;
  font-family: monospace;
}
```

## `.time-picker__icon`

Targets time picker icons.
For example:  

```css
.time-picker__icon {
  fill: #5babef;
}
```
