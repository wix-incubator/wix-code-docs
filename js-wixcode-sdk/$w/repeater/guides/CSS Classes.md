<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Repeater CSS Classes

> This feature is not yet available to all users.

You can use the classes listed below
to style your `Repeater` elements with CSS.

For more information on styling your elements with CSS, see
[Styling Elements with CSS]($w/styling-elements-with-css) and the
[MDN CSS reference docs](https://developer.mozilla.org/en-US/docs/Learn/CSS).

> **Note:** If the component has media background set up in the design panel, for example an image or color, then CSS properties will not apply to it. To apply CSS properties, first remove images from the component and set the opacity in the panel to 0.

<blockquote class="important">

__Important:__
Element structure and undocumented class names
may change without advance warning.
To avoid unintended style changes to your site,
select elements with the documented class names only.

</blockquote>

## `.repeater`

Targets repeater elements.
For example:

```css
.repeater {
  opacity: 50%;
}
```
