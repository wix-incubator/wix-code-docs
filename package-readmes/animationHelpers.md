## Animation Helpers

The Animation Helpers package provides you with the ability to easily add popular animations to your site elements. 


### Setup 

This package does not require any initial setup.

### Package Content 

The following public file is included in the package. 


#### animation-helpers.js 

The code in this file contains all the functions for adding popular animations to your site. The functions in this file can be used in your page/public code by importing them with the following syntax:  

`import { <functionName> } from '@velo/wix-animation-helpers'`

Note that only exported functions that you can use in your site are listed here.

* **autoSpin(props)**

  Rotates an element in the specified direction for a specified duration. Note that the timeline is set to repeat infinitely, `timeline({ repeat: -1 })`.

    ```
  function autoSpin({ elements = [], options: { duration, direction } });
    ```  


* **initZoomIn(props)**

  Creates an animation that zooms in on an element at a specified scale and rotation for a specified duration. 

    ```
  function initZoomIn({ elements = {}, options: { scale, rotate, duration } });
    ```


* **runZoomIn(props)**

  Runs the **Zoom In** animation on an element with a specified [timeline](https://www.wix.com/velo/reference/wix-animations/timeline-obj) action: play/reverse. 

    ```
  function runZoomIn({ element, action });
    ```


* **initRepeaterAnimation(props)**

  Creates an animation for repeater items that changes their specified scale and opacity for a specified duration. 

    ```
  function initRepeaterAnimation({ repeaters: [{ self, itemImage, itemBtn}], options: { imageScale, imageOpacity, duration } });
    ```


* **runRepeaterAnimation(props)**

  Runs the **Repeater Animation** on the specified items in the repeater with a specified timeline action: play/reverse.  

    ```
  function runRepeaterAnimation({ itemImage, itemBtn, action });
    ```


* **autoSlide(props)**

  Slides an element in the specified direction for a specified duration. Note that the timeline is set to repeat infinitely. 

    ```
  function autoSlide({ elements = {}, options: { duration, direction }});
    ```

##### Parameters 

*   **`duration`:** Animation duration in milliseconds. Default is zero. 
*   **`direction`:** Animation direction. Either left to right, `‘LTR’`, or right to left ,`‘RTL’`. Default is `‘LTR’`.  
*   **`scale`:** Target scale of the animated element or elements, where 1 is the original size.
*   **`rotate`:** The target degree to rotate to, where a complete rotation is 360 degrees.
*   **`action`:** Animation timeline attribute. Either [`play`](https://www.wix.com/velo/reference/wix-animations/timeline-obj/play) to play the animation timeline forward or [`reverse`](https://www.wix.com/velo/reference/wix-animations/timeline-obj/reverse) to play the timeline in reverse.
*   **`self`:** The repeater on which the animation runs. 
*   **`itemImage`:** The repeater item’s image. 
*   **`itemBtn`:** The repeater item’s button.
*   **`imageScale`:** The scale of the repeater item’s image. 
*   **`imageOpacity`:** The opacity of the repeater item’s image.


### How to Use the Package  

This section demonstrates how you can work with the package, and the different options for using the package functions. There are 4 main use cases you can implement with this package:

*   Spin elements
*   Zoom in to elements on hover
*   Animate repeater items on hover
*   Create a marquee (auto slider)


#### Spin Elements 

The following describes how you can use this package to spin 1 element from right to left and 2 elements from left to right.

  ![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/02/10/2c8a96ba-9bb8-4a16-8ef7-36185c48c91b/386694be-a198-487b-b824-75b03782258a.png 'image_spin_elements')

1. Add the following page elements to your site:
    +   2 shape elements with the same size and color. 
    +   1 shape element with the same color but smaller size. 
  
2. Import the `autoSpin()` function from the package to your page.
  
    ```
    import { autoSpin } from '@velo/wix-animation-helpers';
    ```

3. To spin your elements automatically when the page loads, run your code in the `$w.onReady()` function. 

4. Build a properties object for the `autoSpin()` function to spin the 2 of the shape elements from left to right for 15 seconds. 

    ```js
    const autoSpinLTRProps = {
      elements: [$w('#vectorImageLTR1'), $w('#vectorImageLTR2')],
      options: {
        duration: 15000,
        direction: 'LTR'
      }
    };
    ```

5. Call the `autoSpin()` function with the property object you created.

    ```
    autoSpin(autoSpinLTRProps);
    ```

6. Build a property object for the `autoSpin()` function to spin the remaining shape element from right to left for 15 seconds. 

    ```js
    const autoSpinRTLProps = {
      elements: [$w('#vectorImageRTL')],
      options: {
        duration: 15000,
        direction: 'RTL'
      }
    }
    ```

7. Call the `autoSpin()` function with the property object you created.

    ```
    autoSpin(autoSpinRTLProps);
    ```

    Note that the `autoSpin()` function’s animation timeline is set to repeat infinitely. If you want to change the number of times the timeline repeats after it finishes playing all the animations in the timeline once, change the `repeat` property in the timeline: `timeline({ repeat: -1 })` in the `autoSpin(props)` function.


#### Zoom In to Elements on Hover 

The following describes how you can use this package to zoom in to an image when hovering over it, and when hovering over a container box (card) that holds an image: 

![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/02/10/5c0e1155-1145-4f23-8d98-4617fabb4335/dbb959c0-4ec0-48b7-9a9a-da5845cffe3f.png 'image_hover_elements')



1. Add the following page elements to your site:
    +   1 image element
    +   1 container box element (card) holding an image

2. Import the `initZoomIn` and `runZoomIn` functions from the package to your page. 

    ```
    import { initZoomIn, runZoomIn } from '@velo/wix-animation-helpers';
    ```

3. Run your code in the `$w.onReady()` function as shown below. 
4. Build a property object for the `initZoomIn()` function to zoom in to both the image element and image in the card in for 0.4 seconds. 

    ```js
    const zoomInProps = {
      elements: [$w('#image'), $w('#cardImage')],
      options: {
        scale: 1.2,
        rotate: 5,
        duration: 400
      }
    };
    ```

5. Call the `initZoomIn()` function with the property object you created.

    ```
    initZoomIn(zoomInProps);
    ```


6. Add the `onMouseIn()` event handler to the image element. This function will run when you hover over the image element. Call the `runZoomIn` function with the image element and the `play` parameter in the event handler to zoom in to the image element on hover.

    ```js
    // ZoomIn is controlled by element itself
    $w('#image').onMouseIn(() => {
      runZoomIn({ element: $w('#image'), action: 'play' });
    });
    ```

7. Add the `onMouseOut()` event handler to the image element. Call the `runZoomIn` function with the image element and the `reverse` parameter in the event handler to return the image element to its normal state.

    ```js
    $w('#image').onMouseOut(() => {
      runZoomIn({ element: $w('#image'), action: 'reverse' });
    });
    ```

8. Add the `onMouseIn()` event handler to the card holding the image. This function will run when you hover on any area of the card. Call the `runZoomIn` function with the image in the card, and the `play` parameter in the event handler to zoom in to the image in the card on hover. 

    ```js
    // ZoomIn is controlled by the card
    $w('#card').onMouseIn(() => {
      runZoomIn({ element: $w('#cardImage'), action: 'play' });
    });
    ```

9. Add the `onMouseOut()` event handler to the card holding the image. Call the `runZoomIn` function with the image in the card, and the `reverse` parameter in the event handler to return the image in the card to its normal state.

    ```js
    $w('#card').onMouseOut(() => {
      runZoomIn({ element: $w('#cardImage'), action: 'reverse' });
    });
    ```

#### Animate Repeater Items on Hover 

The following describes how you can use this package to animate repeater items such as an image and button on hover:



![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/02/10/6f816214-66b0-403d-a239-98e11f295a18/182c62a1-0016-46c5-a4fd-ed9d51d25175.png 'image_repeater_element_1_image_and_button')


![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/02/10/fcc4da39-d42a-4abc-acb2-8dfdb7880898/d709405c-5e42-4714-b986-30cf4d4fc84c.png 'image_repeater_element_2_image_only')


![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/02/10/9c2585c7-2b6a-4a31-b37c-4b24ee0adc53/776825b7-7a0d-4f4c-914a-089190e9915e.png 'image_repeater_element_2_button_only')



1. Add the following page elements to your site:
    +  3 repeaters. Each repeater item contains an image and a button. 

2. Import the `initRepeaterAnimation` and `runRepeaterAnimation` functions from the package to your page.

    ```
    import { initRepeaterAnimation, runRepeaterAnimation } from '@velo/wix-animation-helpers';
    ```

3. Run your code in the `$w.onReady()` function as shown below. 

4. For each repeater, build a property object to define the repeater and the items in the repeater you want to animate: 

    +   Repeater 1: The `repeaterImageButton` property object defines the repeater and the image and button items you want to animate.  

        ```js
        const repeaterImageButton = {
          self: $w('#repeaterImageButton'),
          itemImage: $w('#itemImage'),
          itemBtn: $w('#itemBtn'),
        };
        ```

    +   Repeater 2: The `repeaterImageOnly` property object defines the repeater and the image item you want to animate.  

        ```js
        const repeaterImageOnly = {
          self: $w('#repeaterImageOnly'),
          itemImage: $w('#itemImageOnly')
        };
        ```

    +  Repeater 3: The `repeaterBtnOnly` property object defines the repeater and the button item you want to animate.  

        ```js
        const repeaterBtnOnly = {
          self: $w('#repeaterBtnOnly'),
          itemBtn: $w('#itemBtnOnly')
        };
        ```

5. Build a property object for the `initRepeaterAnimation()` function to enable animation of each of the 3 repeaters for 0.3 seconds.

    ```js
    const repeatersAnimationProps = {
      repeaters: [repeaterImageButton, repeaterImageOnly, repeaterBtnOnly],
      options: {
        imageScale: 1.1,
        imageOpacity: 0.7,
        duration: 300
      }
    };
    ```

6. Call the `initRepeaterAnimation()` function with the property object you created.

    ```
    initRepeaterAnimation(repeatersAnimationProps);
    ```


7. For each item in the `repeaterImageButton` repeater, add the `onMouseIn()` event handler to the repeater’s container box. Then call the `runRepeaterAnimation` function with the items in the repeater you want to animate and the `play` parameter in the event handler to animate the repeater items on hover. 

    ```js
    $w('#repeaterImageButton').forEachItem(($item) => {
      $item('#containerImageBtn').onMouseIn(() => {
        runRepeaterAnimation({ itemImage: $item('#itemImage'), itemBtn: $item('#itemBtn'), action: 'play' })
      });
    ```

8. Add the `onMouseOut()` event handler to the repeater’s container box. Call the `runRepeaterAnimation` function with the items in the repeater you want to animate and the `reverse` parameter in the event handler to return the repeater items to their normal state.

    ```js
      $item('#containerImageBtn').onMouseOut(() => {
        runRepeaterAnimation({ itemImage: $item('#itemImage'), itemBtn: $item('#itemBtn'), action: 'reverse' })
      });
    });
    ```

9. Repeat steps 7 and 8 for the other 2 repeaters. 

    ```js
    $w('#repeaterImageOnly').forEachItem(($item) => {
      $item('#containerImageOnly').onMouseIn(() => {
        runRepeaterAnimation({ itemImage: $item('#itemImageOnly'), action: 'play' })
      });

      $item('#containerImageOnly').onMouseOut(() => {
        runRepeaterAnimation({ itemImage: $item('#itemImageOnly'), action: 'reverse' })
      });
    });

    $w('#repeaterBtnOnly').forEachItem(($item) => {
      $item('#containerBtnOnly').onMouseIn(() => {
        runRepeaterAnimation({ itemBtn: $item('#itemBtnOnly'), action: 'play' })
      });

      $item('#containerBtnOnly').onMouseOut(() => {
        runRepeaterAnimation({ itemBtn: $item('#itemBtnOnly'), action: 'reverse' })
      });
    });
    ```

#### Create a Marquee (Auto Slider)

The following describes how you can use this package to create one marquee with a single repeater, and one marquee with multiple repeaters. Both marquees will slide horizontally from right to left. 


![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/02/10/436e15e6-c585-4826-b709-0a249131cd41/a1c6a519-31a2-4584-b55d-f16fba207084.png 'image_marquee_1_slide_single')



![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/02/10/9cc3d3bb-a00f-4730-a1c2-1f58415df573/c9a76ebd-e24e-490a-8ec4-5d7b8b2366fb.png 'image_marquee_2_slide_multiple')



1. Add a slideshow element to your site. 
    
    ![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/02/10/129025b2-5fd4-4665-8f93-82463ab7107d/17520805-58ea-4b09-adb6-fc95c88d3d4a.png 'image_slideshow_element')


2. Go to the [**Slideshow Settings**]( https://support.wix.com/en/article/wix-editor-elements-hanging-over-the-edge-of-your-slideshow) and turn on the button to ‘Hide Content Outside Frame’. 

    ![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/02/10/73d3bd93-ea7e-4587-8574-15ef01e968c8/6c4ad3b7-e8ab-4e2d-a706-f1f715742d6f.png 'image_slideshow_settings')

    **Note:** If you are using Editor X, you can use any container element that allows for an overflow in place of a slideshow. 

3. Add a repeater with text in the slideshow.  

    ![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/02/10/88c0588d-2db9-4c14-813a-fd4b4c41f5fe/bccfca7d-6cb6-41b6-ae76-db4f8fcec086.png 'image_repeater_in_slideshow')


4. To create another marquee with multiple items, repeat steps 1-2. Then add 3 repeaters with text, and layer them on top of each other in the slideshow.

    **Note:** This package adds a delay in between each sliding repeater, creating a space between each repeater as shown in the second image [here](#create-a-marquee). 

5. Import the `autoSlide` function from the package to your page.

    ```
    import { autoSlide } from '@velo/wix-animation-helpers';
    ```


6. To start the marquees automatically when the page loads, run your code in the `$w.onReady()` function as shown below. 
7. Declare variables for the repeaters in each slideshow. 

    ```js
    const element1Slides = [$w('#repeater1')];
    const element2Slides = [$w('#repeater2'), $w('#repeater3'), $w('#repeater4')];
    ```

8. Build a property object for the `autoSlide()` function to slide the repeaters in both Slideshows 1 and 2 from right to left for 15 seconds. Note that if you want the repeaters to slide from left to right, change the direction to ‘LTR’.

    ```js
    autoSlideRTLProps = {
      elements: [element1Slides, element2Slides],
      options: {
        duration: 15000,
        direction: 'RTL'
      }
    }
    ```

9. Call the `autoSlide()` function with the properties object you created.

    ```
	autoSlide(autoSlideRTLProps);`
    ```

    Note that the `autoSlide()` function’s animation timeline is set to repeat infinitely. If you want to change the number of times the timeline repeats after it finishes playing all the animations in the timeline once, change the `repeat` property in the timeline: `timeline({ repeat: -1 })` in the `autoSlide(props)` function.

                                                                                                              

### Release Notes 

**1.0** Initial version.


### Tags 

animation, marquee, spin, slide, zoomIn, repeaterAnimations, onHover
