<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Menu Container CSS Classes

> This feature is not yet available to all users.

You can use the classes listed below
to style your `MenuContainer` elements with CSS.

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

## `.mobile-menu__icon`

Targets the mobile menu show/hide icon.
For example:

```css
.mobile-menu__icon {
  fill: #840292;
}
```

## `.mobile-menu`

Targets the mobile menu container element.
For example:

```css
.mobile-menu {
  width: 90%;
  height: 90%;
  border: 2px solid black;
  border-radius: 32px;
}
```
