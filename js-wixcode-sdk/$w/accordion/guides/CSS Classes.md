<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Accordion CSS Classes

> This feature is not yet available to all users.

You can use the classes listed below
to style your `Accordion` elements with CSS.

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

## `.accordion`

Targets accordion elements.
For example:

```css
.accordion {
  opacity: 75%;
  display: flex;
}
```

## `.accordion__title`

Targets accordion title elements.
For example:

```css
.accordion__title {
  text-transform: uppercase;
  font-weight: 700;
}
```

## `.accordion__container`

Targets accordion container elements.
For example:

```css
.accordion__container {
  background-color: #a2a2fc;
}
```

## `.accordion__item`

Targets accordion item elements.
For example:

```css
.accordion__item {
  padding: 5px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}
```

## `.accordion__icon`

Targets accordion icon elements.
For example:

```css
.accordion__icon {
  fill: #FF0000;
}
```
