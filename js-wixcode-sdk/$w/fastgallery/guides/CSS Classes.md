# Fast Gallery CSS Classes

> **Note:** This feature is only available to Wix Studio users.

The `FastGallery` element uses a nested container hierarchy. You can use the classes listed below
to style your fast gallery with CSS.

For more information on styling your elements with CSS, see
[Styling Elements with CSS]($w/styling-elements-with-css) and the
[MDN CSS reference docs](https://developer.mozilla.org/en-US/docs/Learn/CSS).

<blockquote class="important">

**Important:**
Element structure and undocumented class names
may change without advance warning.
To avoid unintended style changes to your site,
select elements with the documented class names only.

</blockquote>

## `.fast-gallery`

Targets the fast gallery root element.
For example:

```css
.fast-gallery {
  background-color: rgb(235, 248, 254);
  border: 1px solid rgb(0, 0, 0);
  padding: 50px;
}
```

## `.fast-gallery__container`

Targets the fast gallery container.
For example:

```css
.fast-gallery__container {
  background-color: rgb(169, 227, 225);
  border: 2px solid rgb(47, 79, 79);
  padding: 40px;
}
```

## `.fast-gallery__item`

Targets the item containers nested in the fast gallery container.
For example:

```css
.fast-gallery__item {
  background-color: rgb(169, 255, 208);
  border: 4px, solid, rgb(60, 111, 157);
  border-radius: 3%;
  color: #ff1493;
  padding: 30px;
}
```

## `.fast-gallery__content`

Targets the content container nested in the item containers.
For example:

```css
.fast-gallery__content {
  background-color: rgb(237, 153, 153);
  padding: 20px;
}
```

## `.fast-gallery__media`

Targets the media container nested in the content container.
For example:

```css
.fast-gallery__media {
  background-color: rgb(255, 215, 0);
  padding: 10px;
}
```

## `.fast-gallery__overlay`

Targets the overlay of the media container.
For example:

```css
.fast-gallery__overlay:hover {
  background-color: rgba(244, 244, 191, 0.3);
  border-radius: 6px;
}
```

## `.fast-gallery__image`

Targets the image container nested in the media container.
For example:

```css
.fast-gallery__image {
  background-color: #228b22;
  padding: 5px;
}
```

## `.fast-gallery__info`

Targets the info container nested in the content container.
For example:

```css
.fast-gallery__info {
  font-size: 12px;
  font-family: monospace;
  letter-spacing: 0.5px;
  color: rgb(9, 39, 67);
}
```
