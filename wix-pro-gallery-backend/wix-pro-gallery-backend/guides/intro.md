---
title: Introduction
---

# Introduction

Use the Pro Gallery backend API to create and manage pro galleries in your site's backend. To enable pro gallery backend API functionality for your site, [add a Pro Gallery to your site](https://support.wix.com/en/article/wix-pro-gallery-adding-and-setting-up-your-gallery). 


You can use the Pro Gallery backend API to do the following:
+ Create a pro gallery from scratch or clone an existing pro gallery in your site's backend.
+ Get, update, and delete an existing pro gallery.
+ Create, get, update, and delete a pro gallery item. 
+ List pro galleries and list media items in a specific pro gallery. 


### How the API Works

**Pro galleries on your live site are synced with your site's backend.**
Changes made to your pro gallery component are reflected in your site's backend. For example, when you add a pro gallery component to your site using the UI, the gallery is automatically added to your site's backend once your site is published. The same applies for updating, adding, or deleting an item from a pro gallery component. You can see the gallery in your site's backend in the [listGalleries()](listgalleries) function returns. From there you can get the gallery's ID, and use it to manage the gallery component from your site's backend. Changes made to the gallery in your site's backend are reflected on your live site. For example, when you update the gallery and its items in your site's backend, the changes are reflected on your live site. The same applies for adding or deleting an item from the gallery in your site's backend. 

**Pro galleries in your site's backend are NOT necessarily synced with your live site.**
Changes made to a pro gallery in your site's backend are not necessarily reflected on your live site. For example, when you create a pro gallery on your site's backend, the pro gallery component doesn't automatically appear on your live site. This is because you can use this API just to store multiple galleries on your site's backend. You may want to do this, for example, if you have a page with a pro gallery component where you want to display different galleries for each site member. You can use this API to store the galleries in the backend instead of overloading the frontend. Then, for each site member you can export the relevant gallery from the backend, import it to your page code, and sync it with a particular gallery component on your site. 

To sync a pro gallery in your site's backend with a pro gallery component on your live site, import the [`createGallery()`](#creategallery) function to your page code and write code to convert the backend gallery object to the frontend gallery object. Once converted, the newly created backend gallery is synced with the gallery component, and is visible on your live site. You can then manage the gallery component from your site's backend. Changes made to the gallery in your site's backend are now reflected on your live site. To learn more, see [Displaying a Pro Gallery on Your Site Using the Pro Gallery Backend API](https://support.wix.com/en/article/velo-tutorial-displaying-a-pro-gallery-on-your-site-using-the-pro-gallery-backend-api).

>**Note:** You currently can't convert backend `text` items to the frontend, as there are no `text` items in the [$w.Gallery()](https://www.wix.com/velo/reference/$w/gallery/currentitem) object. If you want to display a backend gallery with `text` items on your live site, connect the gallery to a gallery component first before adding the `text` items. 


### Cloning a Pro Gallery
When creating a new gallery, you can choose to create a new gallery from an exisiting gallery by passing the `cloneFromGalleryId` parameter in the `createGallery()` function. When a gallery is cloned, the newly-created gallery includes the same properties as the existing gallery except for the gallery and item IDs, sort order, and created and updated dates.


>**Note:** 
+ To work with the Pro Gallery Backend API, publish your site. 

