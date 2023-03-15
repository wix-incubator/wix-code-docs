---
title: Tutorial: Display a Pro Gallery on Your Site
---

# Tutorial: Displaying a Pro Gallery on Your Site Using the Pro Gallery Backend API

The [Velo Pro Gallery Backend API](https://www.wix.com/velo/reference/wix-paid-plans.html) allows you to create and manage pro galleries on your site's backend. When you add a pro gallery element to your site, a corresponding pro gallery is automatically created on your site's backend. However, when you use the Pro Gallery backend API to create a pro gallery on your site's backend, you need to do a few steps to display it on your site. 

  
You may want to display a pro gallery from your site's backend on your site, for example, if you have a page with a pro gallery element where you want to display different galleries for each site member who logs in to your site. You can use this API to store the pro galleries in the backend instead of overloading the frontend. Then for each site member who logs in, you can export the relevant gallery from the backend.   
  
This article describes how you can choose an existing pro gallery on your site's backend, connect it to a pro gallery element on your page, and display it on your site.   
  
We start by calling the [listGalleries()](https://www.wix.com/velo/reference/wix-pro-gallery-backend/progallery/listgalleries) function to get a list of all the pro galleries on our site's backend. Then we choose the pro gallery we want to display on our live site. To export the gallery we want from our site's backend, we call the [getGallery()](https://www.wix.com/velo/reference/wix-pro-gallery-backend/progallery/getgallery) function with the ID of the pro gallery that we chose. To use the exported backend gallery on our frontend, we need to first write code to convert the backend gallery items to the frontend [$w() Gallery](https://www.wix.com/velo/reference/$w/gallery/currentitem) items format. This is because currently the backend gallery API and the frontend $w() Gallery API have different formats. Last, we import our converted items to our page code, and set the items to a particular gallery element on our page. This temporarily overrides the frontend gallery element's items with the converted backend gallery items. Once the site is published, the converted pro gallery items are visible on our live site.

>**Note:** This example assumes you used the [createGallery()](https://www.wix.com/velo/reference/wix-pro-gallery-backend/progallery/creategallery) API to create one or more pro galleries in site's your backend. 

## Before You Start

Before you start working with the Wix pro gallery in code, make sure to [add a Pro Gallery to your site](https://support.wix.com/en/article/wix-pro-gallery-adding-and-setting-up-your-gallery#step-1-add-wix-pro-gallery-to-your-site). In the steps below, we'll first take a look at the code piece by piece to understand what it's doing.

<blockquote class="important">

__Important:__
Note the following limitations when converting backend gallery items to the frontend [$w() Gallery](https://www.wix.com/velo/reference/$w/gallery/currentitem) items format:  

* Backend galleries that contain text items can't be imported to your page code. Trying to do so throws an error, and breaks the gallery on your live site. This is because text items can't be converted to the frontend gallery items format, as the frontend [$w() Gallery](https://www.wix.com/velo/reference/$w/gallery/currentitem) items currently only support image and video types.
* Backend galleries items that contain a link with text don't appear on your site. This is because the text property in the item's link object can't be converted to the frontend gallery items format, as the frontend [$w() Gallery](https://www.wix.com/velo/reference/$w/gallery/currentitem) items object doesn't contain a link with text property.

</blockquote>

## Step 1: List All Pro Galleries on the Backend 

In our example, we import the Pro Gallery API from the wix-pro-gallery-backend module. We then call the [listGalleries()](https://www.wix.com/velo/reference/wix-pro-gallery-backend/progallery/listgalleries) function to get a list of all existing galleries in our site's backend. 

Here is sample backend code that we put in a **web module** (.jsw file):

```
import { proGallery } from 'wix-pro-gallery-backend';

export async function myListGalleriesFunction() {
  try {
    let galleryList = await proGallery.listGalleries();
    return galleryList;
    
  } catch (error) {
    console.error(error);
    // Handle the error
  }
}
```

**Line 1**: First, we import the pro gallery API from the wix-pro-gallery-backend module. 

**Lines 3-6**: Next we create and export the myListGalleriesFunction() that awaits and returns the listGalleries() function. 

**Lines 7-11**: We catch and handle any potential errors.

<blockquote class="important">

__Important:__
The function in this web module is used for functional testing only. If you don't want to expose all your backend gallery contents, [change the function's permissions to "Admin"](https://support.wix.com/en/article/velo-about-web-module-permissions). 
</blockquote>

## Step 2: Select a Gallery to Display on Live Site

Next we use [functional testing](https://support.wix.com/en/article/velo-about-functional-testing-in-the-backend) to run the code above. The code returns list of backend galleries. We then select the gallery we want to display on our live site, recording its ID to be able to identify it in a later step. In our case, we want the ID shown below. Your list of backend galleries should look something like this: 

  
![](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2022/10/31/87aa5fc6-861e-42bb-b905-1fcb989bb259/65a851c3-3f24-4cf7-9f3f-059850a646d8.png)

Now that we know which gallery we want to use, we create a new function. This function calls the getGallery() function with the ID of the gallery that we chose. It then returns the gallery object that we selected. 

```
export async function mySelectGalleryFunction() {
  const selectedGalleryId = "63ffd8e7-101b-49be-9498-00c2e6f5b65c";
  try {
    const selectedGallery = await proGallery.getGallery(selectedGalleryId);
    
    // Function continues below
```

**Line 1**: We create and export the mySelectGalleryFunction() that awaits the getGallery() function. **Lines 2-6**: We declare the gallery ID that we chose in step 1 as a variable, and pass it as a parameter in the getGallery() function.

## Step 3: Convert Backend Gallery Items to Frontend Format

We need to take the backend gallery that we chose, and convert the items to the frontend [$w() Gallery](https://www.wix.com/velo/reference/$w/gallery/currentitem) items.

```
    // Function continued from above

 // Convert the selected backend gallery's items to the frontend gallery items format.
    const convertedItems = selectedGallery.items.map(item => convertToFrontend(item));
 
    return convertedItems;

  } catch (error) {
    console.error(error);
    // Handle the error
  }
}

function convertToFrontend(item) {
  return {
    slug: item._id,
    type: item.type,
    src: item.image ? item.image.imageInfo : item.video.videoInfo,
    description: item.description,
    title: item.title,
    link: item.link ? item.link.url : undefined
  }
}
```

**Lines 1-6**: We map the selected backend gallery object's items to the frontend gallery object's items. We do this by calling the convertToFrontend() function that we create later on. Then we return these converted items. 

**Lines 7-12**: We catch and handle any potential errors.

**Lines 13-23**: We create a function to convert the backend gallery items to the frontend gallery items. Note that the src is either image or video only, as the frontend $w() Gallery object doesn't support text items.

## Step 4: Import Converted Gallery Items to our Page Code

To bring the converted gallery items to the frontend, we need to import the mySelectGalleryFunction function to our page code. We add a button element to our page, and call the imported mySelectGalleryFunction() function on button click. Then we set the frontend gallery element's items to the converted gallery items. 

We add the following code to our **page code**: 

```
import { mySelectGalleryFunction } from 'backend/myWebModuleFile';

$w('#galleryButton').onClick(async () => {
  try {
    // Call the mySelectGalleryFunction function to select the backend gallery and convert the backend gallery's items to the frontend items format. 
    const newlyConvertedGalleryItems = await mySelectGalleryFunction();
 
    // Set the frontend gallery element's items to the converted backend gallery items. 
    $w("#myGalleryElement").items = newlyConvertedGalleryItems; 
   
  } catch (error) {
    // Gallery not created
    console.error(error);
  }
});
```

**Line 1**: First, we import the mySelectGalleryFunction function from our module (myWebModuleFile.jsw file). 

**Line 2-6**: We add an onClick() event handler to the button element on our page. In the event handler, we call the mySelectGalleryFunction() function.

**Lines 7-9**: Still in the event handler, we set the frontend gallery element's items to the newly converted gallery. This occurs when the button is triggered. 

**Lines 10-15**: We then catch and handle any potential errors.

<blockquote class="important">

__Important:__
Setting the frontend gallery element's items to the converted gallery items temporarily overrides the frontend gallery element's items with the converted backend gallery items. However, the pro gallery element's ID remains the same. For example, if you call the [getGallery()](https://www.wix.com/velo/reference/wix-pro-gallery-backend/progallery/getgallery) function with the gallery element's ID, the original gallery element's items are returned, and not the converted backend gallery items.
</blockquote>

## All The Code

Here is the complete **backend code** (.jsw file) for this example:

```
import { proGallery } from 'wix-pro-gallery-backend';

export async function myListGalleriesFunction() {
  try {
    let galleryList = await proGallery.listGalleries();
    return galleryList;
    
  } catch (error) {
    console.error(error);
    // Handle the error
  }
}

export async function mySelectGalleryFunction() {
  const selectedGalleryId = "63ffd8e7-101b-49be-9498-00c2e6f5b65c";
  try {
    const selectedGallery = await proGallery.getGallery(selectedGalleryId);
    });
    
    // Convert the selected backend gallery's items to the frontend gallery items format.
    const convertedItems = selectedGallery.items.map(item => convertToFrontend(item));
 
    return convertedItems;

  } catch (error) {
    console.error(error);
    // Handle the error
  }
}

function convertToFrontend(item) {
  return {
    slug: item._id,
    type: item.type,
    src: item.image ? item.image.imageInfo : item.video.videoInfo,
    description: item.description,
    title: item.title,
    link: item.link ? item.link.url : undefined
  }
}
```

Here is the complete **page code** for this example:

```
import { mySelectGalleryFunction } from 'backend/myWebModuleFile';

$w('#galleryButton').onClick(async () => {
  try {
    // Call the mySelectGalleryFunction function to select the backend gallery and convert the backend gallery's items to the frontend items format. 
    const newlyConvertedGalleryItems = await mySelectGalleryFunction();
 
    // Set the frontend gallery element's items to the converted backend gallery items. 
    $w("#myGalleryElement").items = newlyConvertedGalleryItems; 
   
  } catch (error) {
    // Gallery not created
    console.error(error);
  }
});
```