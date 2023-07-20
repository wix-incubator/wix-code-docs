<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Date Picker CSS Classes

> This feature is not yet available to all users.

You can use the classes listed below
to style your `DatePicker` elements with CSS.

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

## `.date-picker`

Targets date picker elements.
For example:

```css
.date-picker {
  border: #ffff00;
  border-style: dotted;
}
```

## `.date-picker__label`

Targets date picker [label text]($w/datepicker/label).
For example:

```css
.date-picker__label {
  font-family: sans-serif;
  font-weight: 700;
  text-transform: lowercase;
  color: black;
}
```

## `.date-picker__input`

Targets date picker input boxes.
For example:

```css
.date-picker__input {
  border: none;
  border-bottom: 2px solid #840292;
  background-color: #dfd2f4;
  font-family: monospace;
}
```

## `.date-picker__icon`

Targets date picker icons.
For example:  

```css
.date-picker__icon {
  fill: #5babef;
}
```

## `.date-picker__header`

Targets date picker header elements.
For example:

```css
.date-picker__.header {
  margin-bottom: 25px;
  padding: 100px;
  border-bottom: 5px solid black;
}
```
