---
title: Introduction
---

# Introduction

Use the Pro Gallery backend API to create and manage pro galleries on your site's backend. To enable pro gallery backend API functionality for your site, [add a Pro Gallery to your site](https://support.wix.com/en/article/wix-pro-gallery-adding-and-setting-up-your-gallery). 


With the Pro Gallery backend API, you can:

+ Create a pro gallery from scratch or clone an existing pro gallery on your site's backend.
+ Get, update, and delete an existing pro gallery on your site's backend.
+ Create, get, update, and delete a pro gallery item on your site's backend. 
+ List pro galleries and list media items in a specific pro gallery on your site's backend. 


### Before you begin 

Before you begin, read the following to understand how the API works:

**Getting a Pro Gallery ID**

You can get a pro gallery's ID in 2 ways:

1. Call the [`listGalleries()`](#listGalleries) function to get a list of all pro galleries and their IDs, and search for the one you want. 
2. Get a pro gallery element's ID by clicking the element in the Editor. Click **Settings > Support**. Scroll all the way down to the **Gallery Info** to see the ID. [GalleryID](get-id.png)

**Typical Scenario**

When you add a pro gallery element to your site using the **Add Panel**, a corresponding pro gallery is automatically created on your site's backend. These 2 galleries are synced, and have the same gallery ID. Changes to the pro gallery element in the UI affect the corresponding pro gallery on your site's backend, and changes to the pro gallery on your site's backend affect the corresponding pro gallery element on your site. 


**Complex Scenario**

When you create a pro gallery on your site's backend, it is a standalone gallery as there isn't a corresponding pro gallery element. However, you may want to display a pro gallery from your site's backend to your site. For example, let's say you have a site with a pro gallery element and you want to display different galleries for each site member who logs in to your site. You can use this API to store the pro galleries in the backend instead of overloading the frontend. Then you can export the relevant pro gallery from your site's backend for each site member who logs in. To display the exported pro gallery on your site, you need to first write code to connect the exported gallery to a pro gallery element on your site. Currently the backend gallery API and the [$w() Gallery API](https://www.wix.com/velo/reference/$w/gallery/currentitem) have different formats, so you need to convert the backend gallery items to the frontend gallery items format. However, there are limitations to this method described in the limitations section below. Next import the converted items to your page code and set the converted items to the items of a particular gallery element on your site. This temporarily overrides the gallery element's items with the converted items. However, the pro gallery element's ID remains the same. For example, if you call the [`getGallery()`](#getGallery) function with the gallery element's ID, the original gallery element's items are returned, and not the converted items. To learn more, see the article on [Displaying a Pro Gallery on Your Site Using the Pro Gallery Backend API](https://support.wix.com/en/article/velo-tutorial-displaying-a-pro-gallery-on-your-site-using-the-pro-gallery-backend-api). 


### Limitations

The following are limitations to the complex scenario above. To avoid these limitations, use the typical scenario instead.

+ `text` items in your backend gallery won't appear on your site. This is because `text` items can't be converted to the frontend gallery items format, as there aren't `text` items in the frontend [$w.Gallery()](https://www.wix.com/velo/reference/$w/gallery/currentitem) object. 
+ Items in your backend gallery that contain a link with text won't appear on your site. This is because the `text` property in the item's `link` object can't be converted to the frontend gallery items format, as there isn't a `text` property in the item's `link` object in the frontend $w.Gallery() object. 


### Cloning a Pro Gallery
When creating a new gallery, you can choose to create a new gallery from an exisiting gallery by passing the `cloneFromGalleryId` parameter in the `createGallery()` function. When a gallery is cloned, the newly-created gallery includes the same properties as the existing gallery except for the gallery and item IDs, sort order, and created and updated dates.


>**Notes:** 
> + To work with the Pro Gallery Backend API, publish your site. 
> + Only [site admins](https://support.wix.com/en/article/roles-permissions-overview) can create, delete, and update a gallery or gallery items. You can override the permissions with the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.

