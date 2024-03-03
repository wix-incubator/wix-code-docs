<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Hamburger Open Button CSS Classes

> This feature is only available to Wix Studio users.

You can use the classes listed below
to style your `HamburgerOpen` elements with CSS.

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

## `.hamburger-open-button`

Targets `hamburgerOpenButton` element.
For example:

```css
.hamburger-open-button {
  width: 90%;
  cursor: default;
  background-color: #116dff;
}
```
## `.hamburger-open-button__label`

Targets `hamburgerOpenButton` [label text]($w/button/label).
For example:

```css
.hamburger-open-button__label {
  font-family: sans-serif;
  font-weight: 700;
  text-transform: lowercase;
  color: black;
}
```

## `.hamburger-open-button__icon `

Targets `hamburgerOpenButton` [icon images]($w/button/icon).
For example:

```css
.hamburger-open-button__icon {
  width: 20px;
  height: 40px;
  border-radius: 20%;
  box-shadow: 5px 5px 5px;
}
```
