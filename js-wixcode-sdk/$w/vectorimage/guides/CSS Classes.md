<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# VectorImage CSS Classes

> **Note:** This feature is only available to Wix Studio users.

You can use the classes listed below
to style your `VectorImage` elements with CSS.

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

## `.vector-image`

Targets vector image elements.
For example:

```css
.vector-image {
  stroke: black;
  stroke-width: 2px;
  filter: hue-rotate(45deg) opacity(0.65);
  width: 150px;
}
```