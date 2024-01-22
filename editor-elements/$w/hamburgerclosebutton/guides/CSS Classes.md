<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Hamburger Close Button CSS Classes

> This feature is only available to Wix Studio users.

You can use the classes listed below
to style your `HamburgerCloseButton` elements with CSS.

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

## `.hamburger-close-button`

Targets `hamburgerCloseButton` elements.
For example:

```css
.hamburger-close-button {
  width: 90%;
  cursor: default;
  background-color: #116dff;
}
```

## `.hamburger-close-button__label`

Targets `hamburgerCloseButton` [label text]($w/button/label).
For example:

```css
.hamburger-close-button__label {
  font-family: sans-serif;
  font-weight: 700;
  text-transform: lowercase;
  color: black;
}
```

## `.hamburger-close-button__icon`

Targets `hamburgerCloseButton` [icon images]($w/button/icon).
For example:

```css
.hamburger-close-button__icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 5px 5px 10px;
}
```