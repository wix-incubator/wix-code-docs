<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Menu CSS Classes

> This feature is not yet available to all users.

You can use the classes listed below
to style your `Menu` elements with CSS.

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

## Anchor menu classes

### `.anchor-menu`

Targets anchor menu elements.
For example:

```css
.anchor-menu {
  background-color: #e6e6e6;
  padding: 10px;
  border-radius: 10px;
}
```

### `.anchor-menu__item`

Targets anchor menu list item elements.
For example:

```css
.anchor-menu__item {
  margin-left: 35px;
  padding-top: 5px;
  padding-bottom: 5px;
}
```

### `.anchor-menu__label`

Targets anchor menu list item text.
For example:

```css
.anchor-menu__label {
  font-family: sans-serif;
  font-weight: 700;
  font-size: .8em;
  color: black;
}
```

## Dropdown menu classes

### `.dropdown-menu`

Targets dropdown menu elements.
For example:

```css
.dropdown-menu {
  width: 100%;
  border: none;
  border-bottom: 2px solid black;
}
```

### `.dropdown-menu__item`

Targets dropdown menu items.
For example:

```css
.dropdown-menu__item {
  padding: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
```

### `.dropdown-menu__submenu`

Targets dropdown submenu containers.
For example:

```css
.dropdown-menu__submenu {
  background-color: #a2a2fc;
}
```

## Horizontal menu classes

### `.horizontal-menu`

Targets horizontal menu elements.
For example:

```css
.horizontal-menu {
  border: none;
  border-bottom: 2px solid black;
}
```

### `.horizontal-menu__item`

Targets horizontal menu items.
For example:

```css
.horizontal-menu__item {
  padding: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
```

### `.horizontal-menu__item-label`

Targets horizontal menu item labels.
For example:

```css
.horizontal-menu__item-label {
  font-family: sans-serif;
  font-weight: 700;
  text-transform: lowercase;
  color: black;
}
```

### `.horizontal-menu__submenu-container`

<!-- TODO - should be horizontal-menu__submenu.
  update when team confirms they're making the change. -->

Targets horizontal submenu containers.
For example:

```css
.horizontal-menu__submenu-container {
  background-color: #a2a2fc;
}
```

### `.horizontal-menu__submenu-title`

Targets the `menuItem` that opens the submenu.
For example:

```css
.horizontal-menu__submenu-title {
  text-transform: uppercase;
  margin: 0;
  padding: 0;
}
```

### `.horizontal-menu__submenu-title-label`

Targets the label of the `menuItem` that opens the submenu.
For example:

```css
.horizontal-menu__submenu-title-label {
  font-family: sans-serif;
  text-transform: capitalize;
  color: #5A5A5A;
}
```

### `.horizontal-menu__submenu-item`

Targets horizontal submenu items.
For example:

```css
.horizontal-menu__submenu-item {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
```

### `.horizontal-menu__submenu-item-label`

Targets horizontal submenu item labels.
For example:

```css
.horizontal-menu__submenu-item-label {
  font-family: sans-serif;
  text-transform: capitalize;
  background-color: #5A5A5A;
  color: #FFFFFF;
}
```

## Vertical menu classes

### `.vertical-menu`

Targets vertical menu elements.
For example:

```css
.vertical-menu {
  width: 100%;
  border: none;
  border-left: 2px solid black;
}
```

### `.vertical-menu__item`

Targets vertical menu items.
For example:

```css
.vertical-menu__item {
  padding: 5px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}
```

### `.vertical-menu__item-label`

Targets vertical menu item labels.
For example:

```css
.vertical-menu__item-label {
  font-family: sans-serif;
  font-weight: 700;
  text-transform: lowercase;
  color: black;
}
```

### `.vertical-menu__submenu`

Targets vertical submenu containers.
For example:

```css
.vertical-menu__submenu {
  background-color: #a2a2fc;
}
```

### `.vertical-menu__arrow`

Targets vertical menu expand/collapse icons.
For example:

```css
.vertical-menu__arrow {
  fill: #840292;
}
```
