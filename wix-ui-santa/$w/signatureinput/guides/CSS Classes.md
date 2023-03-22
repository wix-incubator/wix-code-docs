<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Signature Input CSS Classes

> This feature is not yet available to all users.

You can use the classes listed below
to style your `SignatureInput` elements with CSS.

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

## `.signature-input`

Targets signature input elements.
For example:

```css
.signature-input {
  display: block;
  position: relative;
  padding-left: 50px;
}
```

## `.signature-input__label`

Targets signature input [label text]($w/signatureinput/label).
For example:

```css
.signature-input__label {
  font-family: sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  color: black;
}
```

## `.signature-input__button`

Targets signature input buttons.
For example:

```css
.signature-input__button {
  width: 200px;
  cursor: default;
  background-color: #116dff;
}
```

## `.signature-input__input`

Targets signature input boxes.
For example:

```css
.signature-input__input {
  border: none;
  border-bottom: 2px solid #840292;
  background-color: #dfd2f4;
  font-family: monospace;
}
```
