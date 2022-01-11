## Animation Helpers

> **Example Site**  
> To see a live example, click [here](https://www.wix.com/velo/example/animation-helpers).

The Animation Helpers package provides you with the ability to easily add popular animations to your site elements. 

To see an example site that demonstrates how to use this package, click [here](https://www.wix.com/velo/example/animation-helpers). 

### Setup 

This package does not require any initial setup.


### Package Content

The following public file is included in the package.


#### animation-helpers.js 

The code in this file contains all the functions for adding popular animations to your site. The functions in this file can be used in your page/public code by importing them with the following syntax: 


```js
import { <functionName> } from '@velo/wix-animation-helpers'
```


Note that only exported functions that you can use in your site are listed here.



*   **spin(props)**

    Infinitely spins an element or an array of elements with a specified [timeline](https://www.wix.com/velo/reference/wix-animations/timeline) action: pause/play/reverse. Optional parameters include direction, duration, easing, and pause. 

    Calling the function without specifying parameters infinitely spins the element(s) clockwise for 1 second with easeLinear easing (default). Note that the animation is set to play as the ‘pause’ parameter defaults to false.


    ```js
    function spin(elements, { duration = 1000, direction = 'cw', easing = 'easeLinear', pause = false } = {})
    ```


*   **zoom(props)**

    Zooms in to an element or a list of elements with a specified [timeline](https://www.wix.com/velo/reference/wix-animations/timeline) action: pause/play/reverse. Optional parameters include scale, duration, easing, and pause. The extent of the zoom is determined by setting an element’s scale (zoom level) at the start and end of the animation using the 'from' and 'to' parameters. A scale of 1 represents the element’s full size, with no zoom effect. Values larger than 1 enlarges elements, while values between 0 and 1 shrink elements.

    Calling the function without specifying parameters zooms in to the element at a scale of 2, doubling its size (default). Note that the animation is set to play as the ‘pause’ parameter defaults to false.


    ```js
    function zoom(elements, { duration = 1000, from = 1, to = 2, easing = 'easeInOutSine', pause = false } = {})
    ```


*   **float(props)**

    Floats an element or a list of elements with a specified [timeline](https://www.wix.com/velo/reference/wix-animations/timeline) action: pause/play/reverse. Optional parameters include direction, duration, distance, easing, and pause.

    Calling the function without specifying parameters infinitely floats the element horizontally with a distance of 100px, duration of 1 second, and easeInOutSine easing (default). Note that the animation is set to play as the ‘pause’ parameter defaults to false. 


    ```js
    function float(elements, { duration = 1000, distance = 100, direction = 'horizontal', easing = 'easeInOutSine', pause = false } = {})
    ```


*   **stagger(props)**

    Runs an animation function in constant intervals over elements in an array. Parameters include the list of elements to perform the animation on, the function, and the offset of the time intervals. If the function provided is not an animation function, pass a `dummyElement` as a fourth parameter. 


    ```js
    function stagger(list, fn, offset = 500, dummyElement)
    ```



##### Parameters 

*   **`duration`:** Animation duration in milliseconds. Defaults to 1000. 
*   **`direction`:** Animation direction. For the `spin()` animation it’s either `cw` (clockwise), or `ccw` (counterclockwise). Defaults to `cw`. For the `float()` animation it’s either `horizontal`, or `vertical`. Defaults to `horizontal`.
*   **`from`:** Zoom level of an element at the start of the animation where values larger than 1 enlarge elements, 1 will have no zoom effect, and values between 1 and 0 will shrink the elements. Defaults to 1.
*   **`to`:** Zoom level of an element at the end of the animation where values larger than 1 enlarge elements, 1 will have no zoom effect, and values between 1 and 0 will shrink the elements. Defaults to 2.
*   **`distance`:** The distance to which to float the element horizontally or vertically. Defaults to 100px.
*   **`pause`:** Animation timeline action. Either `false` to play the animation timeline forward, or `true` to pause the animation. Defaults to `false`.
*   **`offset`:** The time interval in milliseconds between each function run. Defaults to 500.
*   **`fn`:** Function to run on each iteration.
*   **`list`:** An array, or a list of elements to run the specified function (`fn`) on. 
*   **`dummyElement`:** An element that includes the [HiddenMixin](https://www.wix.com/velo/reference/$w/hiddenmixin) (animation capabilities). For example, a text element.


Note that the elements you want to animate must include the [HiddenMixin](https://www.wix.com/velo/reference/$w/hiddenmixin) (have animation capabilities). 


### How to Use the Package   

This section demonstrates how you can work with the package, and the different options for using the package functions. There are 4 main use cases you can implement with this package:



*   Spin elements
*   Zoom elements
*   Float elements
*   Stagger elements (perform overlapping animations, or one after another, similar to a domino effect on a list of elements). 


#### Spin Elements  

The following describes how you can use this package to spin multiple elements at the same time, and spin elements on hover.


##### Spin multiple elements at the same time 



1. Add multiple vector image elements to your site.

  ![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/04/25/a0c723d0-05a2-4e18-99a9-0c792da2f60b/500fc48d-3a2b-4cf2-98d4-e657ee0178df.png "image_spin_multiple_images")

2. Import the `spin` function from the package to your page. 
 
  ```js
  import { spin } from '@velo/wix-animation-helpers';
  ```

3. Run your code in the `$w.onReady()` function.
4. To spin multiple elements of the same type, use a [type selector](https://www.wix.com/velo/reference/$w/$w) and call the `spin()` function using this selector. We will call ours ‘VectorImage’. The spin function will spin all elements with the ‘VectorImage’ type selector clockwise for 1 second according to the default values. Note that when the function is called, the animation will play by default.  

    ```js
    spin('VectorImage');
    ```

##### Spin elements on hover  
To demonstrate how to spin elements on hover, we’ll use a roulette wheel. Follow the steps to make the wheel spin on hover. 


1. Add the following to your site: 
    *   An image of a roulette wheel.
    *   A box element representing the picker. 

    ![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/04/25/f5d29bd3-1421-4b20-aa5a-3947dc7ae7a2/bcfbded1-9aa2-4a8d-b4a4-fbccde92d1f3.png "image_spin_roulette_wheel")


2. Import the `spin` function from the package to your page. 


    ```js
    import { spin } from '@velo/wix-animation-helpers';
    ```


3. Run your code in the `$w.onReady()` function.
4. To spin the roulette wheel on hover, we first need to stop the animation function from playing by default. To do this, call the `spin()` function with the roulette image and change the default value of the `pause` parameter from `false` to `true`. We will also change the roulette to spin counterclockwise for a duration of 5 seconds.  

    ```js
    const roulette = $w('#roulette');
    const rouletteSpin = spin(roulette, { duration: 5000, direction: 'ccw', pause: true });
    ```

5. Add the `onMouseIn()` event handler to the roulette image element. This function will run when you hover over the image element. Call the `rouletteSpin.play()` function in the event handler to play the animation on hover.   
   Add the `onMouseOut()` event handler to the roulette image element. Call the `rouletteSpin.pause()` function in the event handler to pause the animation when you are no longer hovering over the image. 

    ```js
    roulette.onMouseIn(() => rouletteSpin.play());
    roulette.onMouseOut(() => rouletteSpin.pause());
    ```

#### Zoom Elements 

The following describes how you can use this package to zoom in to elements.


##### Simple zoom 



1. Add an image element to your site.
2. Import the `zoom()` function from the package to your page. 

  ```js 
  import { zoom } from '@velo/wix-animation-helpers';
  ```

3. Run your code in the `$w.onReady()` function.
4. Call the `zoom()` function to zoom in to the image element with the default parameters.  

    ```js
    zoom('Image');
    ```


##### Zoom multiple elements 



1. Add multiple vector image elements to your site.
2. Import the `zoom` function from the package to your page. 

```js
import { zoom } from '@velo/wix-animation-helpers';
```

3. Run your code in the `$w.onReady()` function.
4. To zoom in to multiple elements of the same type, use a [type selector](https://www.wix.com/velo/reference/$w/$w) and call the `zoom()` function using this selector. We will call ours ‘VectorImage’. The zoom function will zoom in to all elements with the ‘VectorImage’ type selector. We will also set the animation to zoom in to the image elements from a scale of 1 to 2, and for a duration of 2 seconds.  


    ```js
    zoom('VectorImage', { duration: 2000, from: 1, to: 2 });
    ```


##### Zoom an element on hover 



1. Add a text element to your site. 
2. Import the `zoom` function from the package to your page. 

    ```js
    import { zoom } from '@velo/wix-animation-helpers';
    ```


3. Run your code in the `$w.onReady()` function.
4. To zoom in to the text element on hover, we first need to stop the animation function from playing by default. To do this, call the `zoom()` function with the text element and change the default value of the `pause` parameter from `false` to `true`. We will also change the text element to zoom in for a duration of .5 seconds.  

    ```js
    const text = $w('#zoomText');
    const textZoomTimeLine = zoom(text, { duration: 500, pause: true });
    ```

5. Add the `onMouseIn()` event handler to the text element. This function will run when you hover over the text element. Call the `textZoomTimeLine.play()` function in the event handler to play the animation on hover .   
Add the `onMouseOut()` event handler to the text element. Call the `textZoomTimeLine.reverse()` function in the event handler to reverse the animation when you are no longer hovering over the text. 

```js
text.onMouseIn(() => textZoomTimeLine.play());
text.onMouseOut(() => textZoomTimeLine.reverse());
```

#### Float Elements 

The following describes how you can use this package to create a float effect on your elements.


##### Simple float 

1. Add 2 image elements to your site.
2. Import the `float` function from the package to your page. 
 
```js
import { float } from '@velo/wix-animation-helpers';
```

3. Run your code in the `$w.onReady()` function.
4. To spin multiple elements of the same type, use a [type selector](https://www.wix.com/velo/reference/$w/$w) and call the `float()` function using this selector. We will call ours ‘VectorImage’. The float function will float all elements with the ‘VectorImage’ type selector horizontally for 1 second according to the default values. Note that when the function is called, the animation will play by default.  

    ```js
    float($w('VectorImage'));
    ```


##### Float an element on hover  

1. Add a text element to your site. 
2. Import the `float` function from the package to your page. 

    ```js
    import { float } from '@velo/wix-animation-helpers';
    ```

3. Run your code in the `$w.onReady()` function.
4. To float the text element on hover, we first need to stop the animation function from playing by default. To do this, call the `float()` function with the text element and change the default value of the `pause` parameter from `false` to `true`. We will also change the text element to float for a duration of 3 seconds.  

      ```js
     const floatingText = $w('#floatingText');
     const textFloatTimeLine = float(floatingText, { duration: 3000, direction: 'horizontal', pause: true });
      ```



5. Add the `onMouseIn()` event handler to the text element. This function will run when you hover over the text element. Call the `textFloatTimeLine.play()` function in the event handler to play the animation on hover.  
Add the `onMouseOut()` event handler to the text element. Call the `textFloatTimeLine.pause()` function in the event handler to pause the animation when you are no longer hovering over the text. 

  ```js
 floatingText.onMouseIn(() => {
     textFloatTimeLine.play();
 });
 floatingText.onMouseOut(() => {
     textFloatTimeLine.pause();
 });
```


##### Float elements in a pattern  

Elements can float horizontally, vertically, or both. To demonstrate this, we’ll add multiple 

elements to our site and float them in a pattern. We’ll first float the elements vertically at the same distance and duration, and then horizontally at a random distance and duration.  


1. Add multiple box elements to your site. 
2. Import the `float` function from the package to your page. 

    ```js
    import { float } from '@velo/wix-animation-helpers';
    ```

3. Run your code in the `$w.onReady()` function.
4. Call the `float()` function with the box elements and change the direction from the default (`horizontal`) to `vertical`, and with a distance of 40. Then for each box element, float them horizontally at specific ranges (a random number between two specified numbers) for both the duration and distance. This will float the box elements at a specific vertical distance, but at different horizontal durations and distances. 

   ```js
   const boxes = $w('Box');
   // Float boxes vertically with a distance of 40.
   float(boxes, { distance: 40, direction: 'vertical' })
   // Float boxes horizontally at a random distance and duration. Note that we can have 2 timelines on the same elements because vertical and horizontal floats affect different values.
   boxes.forEach(box => float(box, {
       duration: range(1000, 1500),
       distance: range(50, 150)
   }));
   ```

#### Stagger Elements 

The following describes how you can use this package to stagger elements. This Stagger animation will perform overlapping animations, or one after another (similar to a domino effect) on a list of elements.  
 
##### Stagger elements with the zoom animation 

The following demonstrates how you can use the stagger() function to perform the [zoom animation](#zoom-elements) on multiple elements in constant time intervals. Note that the zoom animation will run with its default parameters.  


1. Add the following page elements to your site:
*   1 container box
*   Multiple vector images in the container box  

2. Import the `stagger` and `zoom` functions from the package to your page.


    ```js
    import { stagger, zoom } from '@velo/wix-animation-helpers';
    ```

3. Run your code in the `$w.onReady()` function as shown below. 
4. Select the vector images in your container box using the [container.children](https://www.wix.com/velo/reference/$w/box/children) property, and then store the container box and its children in a variable called ‘box1’.
5. Call the stagger function with ‘box1’ as the ‘list’ parameter, and the ‘zoom’ animation function as the ‘fn’ parameter.  
 
     ```js
     const box1 = $w('#box1').children;
     stagger(box1, zoom);
     ```

##### Stagger elements with the spin animation 

The following demonstrates how you can use the stagger() function to perform the [spin animation](#spin-elements) on multiple elements in constant time intervals. In this case we will also change the duration and direction parameters of the spin animation function.  


1. Add the following page elements to your site:
*   1 container box
*   Multiple vector images in the container box  

2. Import the `stagger` and `spin` functions from the package to your page.

   ```js
    import { stagger, spin } from '@velo/wix-animation-helpers';
   ```

3. Run your code in the `$w.onReady()` function as shown below. 
4. Select the vector images in your container box using the [container.children](https://www.wix.com/velo/reference/$w/box/children) property, and then store the container box and its children in a variable called ‘box2’.
5. Call the stagger function with ‘box2’ as the ‘list’ parameter, and the ‘spin’ function with its specific duration and direction parameters as the ‘fn’ parameter. 

    
    ```js
    const box2 = $w('#box2').children;
    stagger(box2, comp => spin(comp, { duration: 2000, direction: 'cw' }));
    ```

##### Stagger letters (stagger effect using a non-animation function) 

The following demonstrates how you can use the stagger() function to create a stagger effect for letters, where the letters will appear one after the other on your page. We will use a regular, non-animation function to create this stagger effect on the letters in constant time intervals. Note that since we are not passing an animation function in the stagger() function parameter, we will need to create a `dummyElement` with animation capabilities, and use that as the parameter.  



1. Add a textbox to your site. 
Import the `stagger` function from the package to your page.

  ```js
  import { stagger } from '@velo/wix-animation-helpers';
  ```

2. Run your code in the `$w.onReady()` function as shown below. 
3. Store the textbox in a variable called `selfWrittenText`. Since we want the letters to appear one after the other, we need to first clear its contents.  
 
    ```js 
    const selfWrittenText = $w('#selfWrittenText');
    selfWrittenText.text = ''; 
    ```


4. Call the stagger function with the following pros described below:  
 
    ```js 
    stagger('I WRITE MYSELF!'.split(''), letters => { selfWrittenText.text += letters }, 200, selfWrittenText);
    ```

*   **list:** Include the words you want to stagger and split them into single letters, creating a liist of chars. For example, `'I WRITE MYSELF!'.split(' ')` will create a list of chars, ["I", " ", "W", "R", "I", "T", "E", " ", "M", "Y", "S", "E", "L", "F", "!"].
*   **fn:** Use the non-animation function to add a letter to the text element each time this function is called.
*   **offset:** Change the time interval between each function to 200.
*   **dummyELement:** Use the textbox, `selfWrittenText`.

 
                                                                                                                                                    

### Release Notes 
**1.7**


### Tags 
animation, spin, float, zoom, stagger, hover