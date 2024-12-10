<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Menu CSS Classes

> **Note:** This feature is only available to Wix Studio users.

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

## Dropdown menu classes (Deprecated)

<blockquote class='warning'>

__Deprecation Notice:__

The drop-down menu component has been deprecated. It will continue to work, but can no longer be added in the editor.

</blockquote>

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
