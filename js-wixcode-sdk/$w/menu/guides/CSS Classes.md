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

## Horizontal menu classes

### `.horizontal-menu`

Targets horizontal menu elements.
For example:

```css
.horizontal-menu {
  width: 100%;
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

### `.horizontal-menu__submenu-item`

Targets horizontal submenu items.
For example:

```css
.horizontal-menu__submenu-item {
  padding: 2px;
}
```

<!-- TODO - no idea what submenu title is

### `.horizontal-menu__submenu-title`

Targets xx
For example:

```css
.horizontal-menu__submenu-title {

}
``` -->

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

## Mobile menu classes

### `.mobile-menu__icon`

Targets the mobile menu show/hide icon.
For example:

```css
.mobile-menu__icon {
  fill: #840292;
}
```

### `.mobile-menu`

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
