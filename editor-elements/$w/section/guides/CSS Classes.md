<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Section CSS Classes

> This feature is not yet available to all users.

You can use the classes listed below
to style your `Section` elements with CSS.

For more information on styling your elements with CSS, see
[Styling Elements with CSS]($w/styling-elements-with-css) and the
[MDN CSS reference docs](https://developer.mozilla.org/en-US/docs/Learn/CSS).

> **Note:** If the component has Media set up in the Background of the design panel, then CSS properties will not apply to it. To apply CSS properties, first toggle off the `Media & pattern` switch in the Background section of the design panel.

<blockquote class="important">

__Important:__
Element structure and undocumented class names
may change without advance warning.
To avoid unintended style changes to your site,
select elements with the documented class names only.

</blockquote>

## `.section`

Targets section elements.
For example:

```css
.section {
  width: 90%;
  border-top: 5px solid black;
  padding-top: 2rem;
  margin-top: 2rem;
}
```
