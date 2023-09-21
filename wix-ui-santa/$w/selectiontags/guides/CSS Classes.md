<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Selection Tags CSS Classes

> This feature is not yet available to all users.

You can use the classes listed below
to style your `SelectionTags` elements with CSS.

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

## `.selection-tags`

Targets selection tags elements.
For example:

```css
.selection-tags {
  display: block;
  padding-left: 50px;
}
```

## `.selection-tags__options`

Targets selection tags [options]($w/selectiontags/options).
For example:

```css
.selection-tags__options {
  font-family: sans-serif;
  font-weight: 700;
  text-transform: capitalize;
  color: black;
}
```
