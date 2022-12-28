# Text CSS Classes

> This feature is not yet available to all users.

You can use the classes listed below
to style your `Text` elements with CSS.

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

## `.text`

Targets text elements.

Text elements contain multiple text nodes,
each of which is wrapped in an HTML paragraph or heading tag.
You can select the entire text element with the `.text` class,
or you can select specific tags
with the standard selector (`p`, or `h1` through `h6`).

For example:

```css
.text h1, .text h2, .text h3, .text h4, .text h5, .text h6 {
  font-family: serif;
}

.text p {
  font-family: sans-serif;
  color: black;
  font-size: 14pt;
}

.text h1, .text h2, .text h3 {
  color: orange;
  font-weight: 600;
  border-bottom: 1px solid;
  margin-top: 1.5em;
  margin-bottom: 1em;
}

.text h1 {
  font-size: 26pt;
}

.text h2 {
  font-size: 22pt;
}

.text h3 {
  font-size: 18pt;
}
```
