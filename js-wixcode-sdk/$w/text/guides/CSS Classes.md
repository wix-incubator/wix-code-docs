<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Text CSS Classes

> This feature is not yet available to all users.

You can use the classes listed below to style your `Text` elements with CSS.
Note that the class for text elements is `rich-text`.

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

## `.rich-text`

Targets text elements.

Text elements contain multiple text nodes,
each of which is wrapped in an HTML paragraph or heading tag.
You can select the entire text element with the `.rich-text` class.
For example:

```css
.rich-text {
  font-family: serif;
  color: orange;
}
```

## `.rich-text__text`

Targets the html text in text elements.
For example:

```css
.rich-text__text {
  font-family: sans-serif;
  color: black;
  font-size: 14pt;
}
```
