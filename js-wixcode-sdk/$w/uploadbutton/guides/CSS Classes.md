<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Upload Button CSS Classes

> This feature is not yet available to all users.

You can use the classes listed below
to style your `UploadButton` elements with CSS.

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

## `.upload-button`

Targets upload button elements.
For example:

```css
.upload-button {
  width: 200px;
  cursor: default;
  background-color: #116dff;
}
```

## `.upload-button__icon`

Targets upload button icon images.
For example:

```css
.upload-button__icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 5px 5px 10px;
}
```

## `.upload-button__label`

Targets upload button [label text]($w/uploadbutton/buttonlabel).
For example:

```css
.upload-button__label {
  font-family: sans-serif;
  font-weight: 700;
  text-transform: lowercase;
  color: black;
}
```

## `.upload-button__field-title`

Targets upload button field titles.
For example:

```css
.upload-button__field-title {
  font-family: sans-serif;
  font-weight: 700;
  text-transform: lowercase;
  color: black;
}
```
