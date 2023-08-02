<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Element CSS Classes

> This feature is not yet available to all users.

You can use the classes listed below
to style your elements with CSS.

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

## Image button classes

### `.image-button`

Targets image button elements.
For example:

```css
.image-button {
  background-color: #e6e6e6;
  padding: 10px;
  border-radius: 10px;
}
```

## Language menu classes

### `.language-menu`

Targets language menu elements.
For example:

```css
.language-menu {
  background-color: #e6e6e6;
  padding: 10px;
  border-radius: 10px;
}
```

### `.language-menu__option`

Targets language menu option elements.
For example:

```css
.language-menu__option {
  background-color: #dfd2f4;
  font-family: monospace;
}
```

## Lightbox classes

### `.lightbox`

Targets lightbox elements.
For example:

```css
.lightbox {
  border: 5px solid #d1a917;
  border-radius: 6px;
  filter: drop-shadow(2px 4px 6px black);
}
```

### `.lightbox__close-button`

Targets lightbox close buttons.
For example:

```css
.lightbox__close-button {
  width: 10px;
}
```

## Line classes

### `.horizontal-line`

Targets horizontal line elements.
For example:

```css
.horizontal-line {
  border-top: 6px dotted orange;
}
```

### `.vertical-line`

Targets vertical line elements.
For example:

```css
.vertical-line {
  border-left: 12px dashed pink;
}
```

## Search bar classes

### `.search-bar`

Targets search bar elements.
For example:

```css
.search-bar {
  width: 500px;
  display: flex;
  flex-direction: row;
}
```

### `.search-bar__icon`

Targets search bar icons.
For example:

```css
.search-bar__icon {
  fill: #840292;
}
```

### `.search-bar__input`

Targets search bar input boxes.
For example:

```css
.search-bar__input {
  border: none;
  border-bottom: 2px solid #840292;
  background-color: #dfd2f4;
  font-family: monospace;
}
```
