---
title: Introduction
---

# Introduction

Use the Pro Gallery backend API to create and manage pro galleries on your site's backend. To enable pro gallery backend API functionality for your site, [add a Pro Gallery to your site](https://support.wix.com/en/article/wix-pro-gallery-adding-and-setting-up-your-gallery). 


You can use the Pro Gallery backend API to do the following:

+ Create a pro gallery from scratch or clone an existing pro gallery on your site's backend.
+ Get, update, and delete an existing pro gallery on your site's backend.
+ Create, get, update, and delete a pro gallery item on your site's backend. 
+ List pro galleries and list media items in a specific pro gallery on your site's backend. 


### How the API Works

When you add a pro gallery element to your site and click publish, a corresponding pro gallery is automatically created on your site's backend. These 2 galleries are synced. Any changes to the pro gallery element displayed on your published site affect the corresponding pro gallery on your site's backend, and any changes to the pro gallery on your site's backend affect the corresponding pro gallery element displayed on your published site. 

Conversely, when you use the Pro Gallery backend API to create a pro gallery on your site's backend, a corresponding pro gallery element isn't automatically displayed on your published site. If you want to create a pro gallery on your site's backend and display it on your live site, first use the [`createGallery()`](https://www.wix.com/velo/reference/wix-pro-gallery-backend/progallery/creategallery) API to create a pro gallery on your site's backend, and then follow the instructions in this article [Displaying a Pro Gallery on Your Site Using the Pro Gallery Backend API](https://support.wix.com/en/article/velo-tutorial-displaying-a-pro-gallery-on-your-site-using-the-pro-gallery-backend-api). You may want to display a pro gallery from your site's backend on your live site, for example, if you have a page with a pro gallery element where you want to display different galleries for each site member. You can use this API to store the pro galleries in the backend instead of overloading the frontend. Then, for each site member you can export the relevant gallery from the backend. To use the exported backend gallery on your frontend, you need to first write code to convert the backend gallery items to the frontend gallery items format (currently the backend gallery API and [$w() Gallery API](https://www.wix.com/velo/reference/$w/gallery/currentitem) have different formats). Then import the converted items to your page code, and set the items to a particular gallery in your site's UI. See the article above for step by step instructions.

<blockquote class="important">

__Important:__
You currently can't convert `text` items in your backend gallery to the frontend, as there are no `text` items in the frontend [$w.Gallery()](https://www.wix.com/velo/reference/$w/gallery/currentitem) object. If you want to display a backend gallery with `text` items on your live site, connect the gallery to a gallery component first, and then add the `text` items using the UI. 

</blockquote>

### Cloning a Pro Gallery
When creating a new gallery, you can choose to create a new gallery from an exisiting gallery by passing the `cloneFromGalleryId` parameter in the `createGallery()` function. When a gallery is cloned, the newly-created gallery includes the same properties as the existing gallery except for the gallery and item IDs, sort order, and created and updated dates.


>**Notes:** 
> + To work with the Pro Gallery Backend API, publish your site. 
> + Only [site admins](https://support.wix.com/en/article/roles-permissions-overview) can create, delete, and update a gallery or gallery items. You can override the permissions with the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.

