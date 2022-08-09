---
title: Introduction
---

# Introduction

Use the Pro Gallery Backend API to create and manage your pro gallery in your site's backend. To enable pro gallery backend API functionality for your site, [add a Pro Gallery to your site](https://support.wix.com/en/article/wix-pro-gallery-adding-and-setting-up-your-gallery). 

You can use the Pro Gallery Backend API to do the following:
+ Create a pro gallery from scratch, or clone an existing pro gallery in your site's backend.
+ Get, update, and delete an existing pro gallery in your site's backend.
+ Create, get, update, and delete a pro gallery item in your site's backend 
+ List pro galleries and list media items in a specific pro gallery in your site's backend. 


### Cloning a Pro Gallery
When creating a new gallery, you can choose to create a new gallery from an exisiting gallery by passing the `cloneFromGalleryId` parameter in the `createGallery()` function. When a gallery is cloned, the newly-created gallery includes the same properties as the existing gallery except for the gallery and item IDs, sort order, and created and updated dates.


### Deleting a Pro Gallery or a Pro Gallery Item
The following applies to both pro galleries and pro gallery items:

+ When a pro gallery on your site's backend is deleted, the deleted gallery is no longer returned when calling the [`listGalleries()`](#listGalleries) function.
+ If you're displaying a pro gallery from your site's backend on your live site, and then delete the backend gallery, the deleted gallery will appear as an empty widget on your live site. 


## List functions up to 10 galleries but info is still there

## sortOrder for gallery & item 

## media items are images, video, and text- need to be uploaded into media manager first 


>**Notes:** 
+ These galleries are only available on your backend, and don't appear on your live site. To display your backend gallery on your live site, see [Displaying a Pro Gallery on Your Site Using the Pro Gallery Backend API](https://support.wix.com/en/article/velo-tutorial-displaying-a-pro-gallery-on-your-site-using-the-pro-gallery-backend-api).
+ To work with the Pro Gallery Backend API, publish your site. 

