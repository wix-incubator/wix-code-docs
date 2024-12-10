---
title: Upload API
---

# Upload API
This article demonstrates how to use the `uploadUrl` response from [`generateFileUploadUrl()`](wix-media-v2/files/generatefileuploadurl) to upload a file to a site's Media Manager. 

>**Note:** Due to limits on the size and duration of files that you can upload, we recommend using [`importFile()`](wix-media-v2/files/importfile). See [Wix Media: Supported Media File Types and File Sizes](https://support.wix.com/en/article/wix-media-supported-media-file-types-and-file-sizes) for more details.

## Authorization
This endpoint uses the upload token included in the url for authorization.
No additional authorization is needed.
                                   

## Syntax
```html
PUT {{generateFileUploadUrlResponse.uploadUrl}}
```

[//]: # (## Path Params)

[//]: # (| Name     | Type   | Optional | Description                                                                                                                             |)

[//]: # (|----------|--------|:--------:|-----------------------------------------------------------------------------------------------------------------------------------------|)

[//]: # (| filename | string |    no    | File name that appears in the Media Manager. Include the file's extension in its name to prevent potential errors. |)


## Headers Params
| Name         | Type   | Optional | Description                                                                     |
|--------------|--------|:--------:|---------------------------------------------------------------------------------|
| Content-Type | string |    no    | File content type. For example, "image/jpeg" for a jpg file. |


## Query Params
| Name      | Type    | Optional   | Description                                                                                                                             |
|-----------|---------|:----------:|-----------------------------------------------------------------------------------------------------------------------------------------|
| filename  | string  |     no     | File name that appears in the media manager. Include the file's extension in the name to prevent potential errors. |


>**Note:** In case of failure due to incorrect `mimeType`, include the file's extension in the `filename` parameter and set the `Content-Type` to 'application/octet-stream'. Doing this allows Wix servers to detect the correct content type of the file.

## Request
```typescript
async function uploadMyFile(uploadUrl, fileContent) {
  const params = {'filename':'my-audo-track.mp3'};
  const headers = {
    'Content-Type': 'application/octet-stream'
  }      

  const uploadResponse = await httpClient.put( uploadUrl, fileContent, { headers, params } );
  return uploadResponse;
}
```



## Response
```json
{
  "file": {
    "id": "2acbb8_86485e224dd84143ba2f228777217bb7~mv2.jpeg",
    "displayName": "file.jpg",
    "url": "https://static.wixstatic.com/media/2acbb8_86485e224dd84143ba2f228777217bb7~mv2.jpeg",
    "parentFolderId": "media-root",
    "hash": "cf96f0567ed967f02bc9580ab8db86be",
    "sizeInBytes": "15359",
    "private": false,
    "mediaType": "IMAGE",
    "media": {
      "image": {
        "image": "wix:image://v1/0abec0_b291a9349a0b4da59067f76287e386fb~mv2.jpg/leon.jpg#originWidth=3024&originHeight=4032",
        "faces": []
      }
    },
    "operationStatus": "READY",
    "thumbnailUrl": "https://static.wixstatic.com/media/2acbb8_86485e224dd84143ba2f228777217bb7~mv2.jpeg",
    "labels": [],
    "createdDate": "2022-09-11T15:13:24.000Z",
    "updatedDate": "2022-09-11T15:13:24.000Z"
  }
}
```

## Status/Error Codes
Errors from this endpoint will include an HTTP status code.

### Use uploaded media on your site
After making the REST HTTP request, you can either display the media on your site directly from the [Media Manager](https://support.wix.com/en/article/wix-media-about-the-media-manager#accessing-the-media-manager-1), or you can set the uploaded media to `$w` frontend elements.

To display the media files on the frontend of your site with code, you first need to retrieve the file's Media Manager URL.

To retrieve the Media Manager URL:
1.  Call [`getFileDescriptor()`](https://www.wix.com/velo/reference/wix-media-v2/files/getfiledescriptor), passing in `file.id` from the Upload API's [response object](#Response) as its only parameter. 
2. Retrieve the valid Media Manager URL from the `media` property in the `FileDescriptor` object that was returned in the previous step.
3. To use the media in a `$w` element, set the value of the associated `media` property to the element's `src` property. 