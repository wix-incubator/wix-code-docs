<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Styling Elements with CSS

> This feature is not yet available to all users.

<!-- Outline:

- about the feature
- how to use it (UI)
  - in the styling panel
  - in the code panel
- brief explanation of constructing semantic class names
- ~~list of supported elements~~
- ~~see MDN for full CSS documentation~~ -->

CSS allows you to customize the appearance of your website, from colors and fonts to sizes and positions 
of different elements. For additional information on CSS styling options, refer to the 
[MDN CSS reference docs](https://developer.mozilla.org/en-US/docs/Learn/CSS).

To get started, <strong>add a global.css</strong> file in the <strong>CSS</strong> section of your Page Code. 
In that file select a class name to style. Class names correspond to the name of the component as it's used in Velo.  
For example, to change the background color of all buttons to red:
```css
.button {
  background-color: red;
}
```

Use inner classes to style specific elements of a component class. 
For example, use `.button__label` to style only the labels of button elements.

## Supported elements

See which global classes are available for any element on your site by selecting the element and viewing <strong>CSS Classes</strong> in 
your code panel:
![CSS Classes in code panel](images/css_classes_code_panel.png "CSS Classes in code panel")

Or reference this list of supported elements:
- [Accordion]($w/element/css-classes#accordion)
- [Anchor menu]($w/menu/css-classes#anchor-menu)
- [Audio player]($w/audioplayer/css-classes)
- [Box]($w/box/css-classes)
- [Breadcrumbs]($w/breadcrumbs/css-classes)
- [Button]($w/button/css-classes)
- [Captcha]($w/captcha/css-classes)
- [Checkbox]($w/checkbox/css-classes)
- [Checkbox group]($w/checkboxgroup/css-classes)
- [Collapsible text]($w/collapsibletext/css-classes)
- [Column strip]($w/columnstrip/css-classes)
- [Date picker]($w/datepicker/css-classes)
- [Dropdown input]($w/dropdown/css-classes)
- [Dropdown menu]($w/menu/css-classes#dropdown-menu)
- [Footer]($w/footer/css-classes)
- [Form]($w/form/css-classes)
- [Google map]($w/googlemap/css-classes)
- [Header]($w/header/css-classes)
- [Horizontal line]($w/element/css-classes#horizontal-line)
- [Horizontal menu]($w/menu/css-classes#horizontal-menu)
- [Image]($w/image/css-classes)
- [Image button]($w/element/css-classes#image-button)
- [Language menu]($w/element/css-classes#language-menu)
- [Lightbox]($w/element/css-classes#lightbox)
- [Menu]($w/menu/css-classes)
- [Menu container]($w/menucontainer/css-classes)
- [Multi-state box]($w/multistatebox/css-classes)
- [Page]($w/page/css-classes)
- [Progress bar]($w/progress-bar/css-classes)
- [Radio button group]($w/radiobuttongroup/css-classes)
- [Ratings display]($w/ratingsdisplay/css-classes)
- [Ratings input]($w/ratingsinput/css-classes)
- [Repeater]($w/repeater/css-classes)
- [Rich text box]($w/richtextbox/css-classes)
- [Search bar]($w/element/css-classes#search-bar)
- [Section]($w/section/css-classes)
- [Selection tags]($w/selectiontags/css-classes)
- [Signature input]($w/signatureinput/css-classes)
- [Slideshow]($w/slideshow/css-classes)
- [Switch]($w/switch/css-classes)
- [Table]($w/table/css-classes)
- [Tabs]($w/tabs/css-classes)
- [Text]($w/text/css-classes)
- [Text box]($w/textbox/css-classes)
- [Text input]($w/textinput/css-classes)
- [Time picker]($w/timepicker/css-classes)
- [Upload button]($w/uploadbutton/css-classes)
- [Vector image]($w/vectorimage/css-classes)
- [Vertical line]($w/element/css-classes#vertical-line)
- [Vertical menu]($w/menu/css-classes#vertical-menu)
- [Video box]($w/videobox/css-classes)
- [Video player]($w/videoplayer/css-classes)
