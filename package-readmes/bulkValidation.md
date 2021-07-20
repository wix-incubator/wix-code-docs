## Bulk Validation

The Bulk Validation package allows you to validate a group of input elements. The package functions check a group of input elements and make sure that each individual input element is validated according to its specified validation type.

When adding or removing input elements on your site, you don’t need to change the code that validates your inputs. You can simply add the new input element to the group, or remove the unwanted input element from the group. 

**Note:** This package is for user input frontend validations only, and should not be used as a replacement for backend validation or authentication of sensitive data.


### Setup 

Before using the package, set up the following:



1. Add input elements to your site. 
2. For each input element, click the element’s **Settings**. Here you can set the validation for the individual input element. This defines what type or pattern of input is valid for that specific input. [Learn more about working with user input validation in the settings panel](https://support.wix.com/en/article/working-with-user-input-validation-in-the-settings-panel).
3. [Group all input elements](https://support.wix.com/en/article/wix-editor-grouping-elements), or add all input elements to a parent element, such as a container. 


### Package Content

The following public files are included in the package:


#### const.js

This file contains an array with all supported input types to be validated by the package. You can see a [list of all input types here](https://www.wix.com/velo/reference/$w/textinput/type). 

Note that the input elements below are not supported for this package since they have no inherent validity indicator, and can’t be checked for validity. 



*   $w.Switch
*   $w.Slider
*   $w.Captcha

The $w.RichTextBox element is also not supported for this package.


#### validation-functions.js 

This file contains a function for validating all input elements in a group or a parent container element. The function in this file can be used in your backend/page/public code by importing it with the following syntax:

```js 
import { validateInputs } from '@velo/wix-bulk-validation' 
```

Note that only exported functions that you can use in your site are listed here.



*   **validateInputs()** 
 
    Recursively loops through each child (input element) of a group or parent container and checks whether the inputs are valid. The function logs each input element's status and returns an object with the validation results. 

    ```js 
    async function validateInputs(parent, inputTypesToValidate)
    ```

    ##### Parameters: 
    *   **`parent`**: A [group](https://support.wix.com/en/article/wix-editor-grouping-elements) of input elements, or a parent container element that contains children input elements.
    *   **`inputTypesToValidate`**: Supported validation input element types.

    ##### Returns: 
    The status of the bulk input validation, as well as the status and error messages of the individual input components. If all inputs in the group or parent container element are valid, the bulk input validation is valid. If one input in the group or parent container element is invalid, the bulk input validation is invalid. 


### How to Use the Package 

This section demonstrates how to use the package functions to implement a bulk input validation on multiple inputs when a user clicks a submit button.



1. Follow the steps in the [Setup](#setup) section. 
2. Add a submit button element to your site. 
3. Import the validateInputs() function from the package: 
 
    ```js
    import { validateInputs } from '@velo/wix-bulk-input-validation; 
    ```

4. Add an [onClick()](https://www.wix.com/velo/reference/$w/clickablemixin/onclick) event handler to your submit button. Use the async function to wait for the validation result object to return. In the event handler, call the `validateInputs()`** **function with the parent element, and log the result object. \
 
    ```js 
    $w('#submitButton').onClick(async () => { 
	  let result = await validateInputs($w('#inputElementGroup')); 
	  console.log(result);
    }) 
    ``` 


5. Check to see if the validation result object is valid.


### Release Notes 

**1.1** 


### Tags 

input, userInput, validity, validation, bulkValidation
