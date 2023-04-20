---
title: Upload API
---

# Upload API
This article demonstrates how to use the `uploadUrl` response from the [Generate File Upload Url](https://www.wix.com/velo/reference/wix-media-v2/files/generatefileuploadurl) endpoint to upload a file to a site's Media Manager. 

>**Note:** Due to limits on the size and duration of files that you can upload, we recommend using the [`importFile()`](https://www.wix.com/velo/reference/wix-media-v2/files/importfile) function. See [Wix Media: Supported Media File Types and File Sizes](https://support.wix.com/en/article/wix-media-supported-media-file-types-and-file-sizes) for more details.

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
        "image": {
          "id": "2acbb8_86485e224dd84143ba2f228777217bb7~mv2.jpeg",
          "url": "https://static.wixstatic.com/media/2acbb8_86485e224dd84143ba2f228777217bb7~mv2.jpeg",
          "height": 226,
          "width": 370,
          "filename": "myfilename.jpg",
          "sizeInBytes": "15359"
        },
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
        

