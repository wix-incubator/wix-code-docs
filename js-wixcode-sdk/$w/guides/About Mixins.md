<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->



# About Mixins





### What Is a Mixin? 

A [mixin](https://javascript.info/mixins#:~:text=In%20JavaScript%20we%20can%20only%20inherit%20from%20a%20single%20object.&text=There's%20a%20concept%20that%20can,need%20to%20inherit%20from%20it.) is a class that exists solely to provide properties and functions to other classes. Using mixins, you can simulate inheritance between classes. 

For example, I might have different classes for various elements, such as buttons, menus, datePickers, and dropdowns. Each of these elements are clickable. Instead of defining similar functions for each of them, I can "mix" the `ClickableMixin`into each each of these classes. Each class then has access to the same functionality.

Velo comes with several mixins that many of its APIs use. Velo mixins are Wix Editor Elements (`$w`).

This article describes and links to each mixin in the Velo Reference.

### Which Functions and Properties Are From Mixins? 

When looking at the [Velo Reference](/api-overview/introduction), mixin functions and properties are described along with any  functions and properties that are unique to the class. This gives you a complete list of any functions and properties you can use with the API, regardless of their source.

After an API's summary of functions and properties, before its Introduction, referenced mixins are listed. 

Click one of the links to see which functions and properties come from a mixin and not the current API you are viewing.

> **Note:** 
> Mixins can comprise other mixins. For example, the `HiddenCollapsedMixin` is a superset of the `HiddenMixin` and the `CollapsedMixin`.

### Velo Mixins 





The table below presents each mixin. Click its link to see its functions and properties.



| Mixin | Description |
| --- | --- |
| [CheckedMixin](/$w/checked-mixin) | Provides functionality for elements that can be be checked. |
| [ClickableMixin](/$w/clickable-mixin) | Provides functionality for elements that can be clicked. |
| [CollapsedMixin](/$w/collapsed-mixin) | Provides functionality for elements that can be collapsed. |
| [ContainableMixin](/$w/containable-mixin) | Provides functionality for elements that can contain other elements. |
| [DisabledMixin](/$w/disabled-mixin) | Provides functionality for elements that can be disabled. |
| [Effects](/$w/effects) | Provides functionality for displaying an element's defined effects. |
| [EffectsMixin](/$w/effects-mixin) | Provides functionality for elements with defined effects. |
| [Element](/$w/element) | Provides basic functionality for elements. |
| [Event](/$w/event) | Provides properties for events that are fired when certain actions occur to elements. |
| [FocusMixin](/$w/focus-mixin) | Provides functionality for elements that can set and lose focus. |
| [FormElement](/$w/form-element) | Provides functionality related to user input elements. |
| [HiddenCollapsedMixin](/$w/hidden-collapsed-mixin) | Provides functionality for all elements that can be hidden or collapsed. |
| [HiddenMixin](/$w/hidden-mixin) | Provides functionality for elements that can be hidden. |
| [LabelMixin](/$w/label-mixin) | Provides functionality for elements that have a label. |
| [LinkableMixin](/$w/linkable-mixin) | Provides functionality for elements that can act as links. |
| [Node](/$w/node) | Provides functionality for all Wix objects, including objects that are not [elements](https://www.wix.com/corvid/reference/$w/element). |
| [PlayableMixin](/$w/playable-mixin) | Provides functionality for elements that can be played. |
| [ReadOnlyMixin](/$w/readonly-mixin) | Provides functionality for input elements that support readonly mode. |
| [RequiredMixin](/$w/required-mixin) | Provides functionality for input elements that can be required to have a value. |
| [Style](/$w/style) | Provides an object representing an element's styles. |
| [StyleMixin](/$w/style-mixin) | Provides functionality for elements that can be styled. |
| [TextInputMixin](/$w/text-input-mixin) | Provides functionality for elements that accept text as input. |
| [ValidatableMixin](/$w/validatable-mixin) | Provides functionality for elements that can be validated. |
| [ValueMixin](/$w/value-mixin) | Adds the value property to elements. |
| [ViewportMixin](/$w/viewport-mixin) | Provides functionality for elements that can be scrolled into and out of view. |
