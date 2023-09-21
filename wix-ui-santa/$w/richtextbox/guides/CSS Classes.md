<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Rich Text Box CSS Classes

> This feature is not yet available to all users.

You can use the classes listed below
to style your `RichTextBox` elements with CSS.

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

## `.rich-text-box`

Targets rich text box elements.
For example:

```css
.rich-text-box {
  display: block;
  padding-left: 50px;
}
```

## `.rich-text-box__input`

Targets rich text box input boxes.
For example:

```css
.rich-text-box__input {
  font-family: sans-serif;
  font-weight: 700;
  color: black;
}
```

## `.rich-text-box__toolbar`

Targets rich text box toolbars.
For example:

```css
.rich-text-box__toolbar {
  fill: #FF0000;
}
```

## `.rich-text-box__icon`

Targets rich text box icons.
For example:

```css
.rich-text-box__icon {
  border-radius: 50%;
  box-shadow: 5px 5px 10px;
}
```
