# About Pro Gallery Backend API

With Wix Pro Gallery Backend API, you can manage your Pro Galleries.

Before working with the ProGallery API, you'll need to add at least one Gallery - for more information see [here](https://support.wix.com/en/article/wix-pro-gallery-about-the-wix-pro-gallery).

The Pro Gallery API allow you to:

*   Create, get, update, and delete Pro Galleries
*   Create, get, update, and delete media items

> **Note**: To work with the ProGallery API, you need to publish your site. APIs working on public data only.

## Terminology
+ **Pro Gallery:** A responsive, and customizable gallery that displays media items.
+ **Media Items:** Images, videos, and text files uploaded to a Pro Gallery. You can read more about [supported media](https://support.wix.com/en/article/wix-pro-gallery-adding-media-to-the-gallery).

## Sort Order
In order to preserve a defined order of galleries/items, Wix uses the sortOrder field.

* You can update the `sortOrder` field using your own logic using the relevant **Update** endpoint.
* If sortOrder is not given on creation, the `sortOrder` field will automatically be populated with the current timestamp ([Epoch time](https://en.wikipedia.org/wiki/Unix_time)).
* In order to prevent updating the all previous/next items when reordering a single item, the Wix UI uses the following calculation:  
  `new_sortOrder = (next_item.sortOrder + previous_item.sortOrder)/2`

> **Note**: You can choose other forms of logic to reorder items.

## Using the API
To use the ProGallery API, import proGallery from the wix-pro-gallery-backend module:
```javascript 
import {proGallery} from 'wix-pro-gallery-backend';
```

## Convertion example between pro-gallery and pro-gallery backend APIs
Image Item - 
```javascript 
function convertBackendToVeloItem(item) {
  return {
    slug: item._id,
    type: item.type,
    src: item.image.imageInfo,
    description: item.description,
    title: item.title,
    link: item.link ? item.link.url : undefined
  }
}

function convertVeloToBackendItem(veloItem) {
  return {
    _id: veloItem.slug,
    type: veloItem.type,
    description: veloItem.description,
    title: veloItem.title,
    link: {
      url: item.link
    }
    image: {
      type: "WIX_MEDIA" // or External
      imageInfo: veloItem.src
    }
  }
}
```

Video Item - 
```javascript 
function convertBackendToVeloItem(item) {
  return {
    slug: item._id,
    type: item.type,
    src: item.video.videoInfo,
    description: item.description,
    title: item.title,
    link: item.link ? item.link.url : undefined
  }
}

function convertVeloToBackendItem(veloItem) {
  return {
    _id: veloItem.slug,
    type: veloItem.type,
    description: veloItem.description,
    title: veloItem.title,
    link: {
      url: item.link
    }
    video: {
      type: "WIX_MEDIA" // or External
      videoInfo: veloItem.src
    }
  }
}
```


## Limitations
+ Item can be from type Image, Video or Text.
+ Create & Delete Gallery affect the Galleries saved on server and not the site UI (see these methods notes).
+ The [onGalleryCreated()](https://www.wix.com/velo/reference/wix-pro-gallery-backend/events/ongallerycreated) and [onGalleryUpdated()](https://www.wix.com/velo/reference/wix-pro-gallery-backend/events/ongalleryupdated) events don't return the media items included in the gallery. To retrieve these items or their IDs you need to listen to the [onGalleryItemCreated()](https://www.wix.com/velo/reference/wix-pro-gallery-backend/events/ongalleryitemcreated) and [onGalleryItemUpdated()](https://www.wix.com/velo/reference/wix-pro-gallery-backend/events/ongalleryitemupdated) events in addition.



