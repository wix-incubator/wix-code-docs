---
title: Resumable Upload API
---

# Resumable Upload API
This article demonstrates how to use the response object from [`generateFileResumableUploadUrl()`](wix-media-v2/files/generatefileresumableuploadurl) to upload a file to a site's Media Manager. 

>**Note:** Due to limits on the size and duration of files that you can upload, we recommend using [`importFile()`](wix-media-v2/files/importfile). See [Wix Media: Supported Media File Types and File Sizes](https://support.wix.com/en/article/wix-media-supported-media-file-types-and-file-sizes) for more details. 

## Authorization
This endpoint uses the `uploadToken` from the response for authorization.
No additional authorization is needed.
                      
## Syntax

```html
PUT {{generateFileResumableUploadUrlResponse.uploadUrl}}/{{generateFileResumableUploadUrlResponse.uploadToken}}
```

## Query Params
| Name      | Type    | Optional   | Description                                                                                                                             |
|-----------|---------|:----------:|-----------------------------------------------------------------------------------------------------------------------------------------|
| filename  | string  |     no     | File name that appears in the Media Manager. Include the file's extension in the name to prevent potential errors. |

## Example
### Implement a Resumable Upload Client using TUS Protocol
In this example we use [tus-js-client](https://github.com/tus/tus-js-client/) to implement a resumable upload using the TUS protocol. 

### Request
```typescript
async function resumableFileUpload(resumableUploadUrlResponse: GenerateFileResumableUploadUrlResponse): Upload {
  // get the file content to upload
  const fileName = 'imageExample.jpg';
  const fileContent = await fs.createReadStream(path.join(__dirname, '..', 'files', fileName));

  const mimeType = 'image/jpeg';

  const params = {
    filename: fileName,
    contentType: mimeType,
    token: resumableUploadUrlResponse.uploadToken
  };

  // Wrap the resumable upload session in a promise to wait for the upload to finish.
  await new Promise(async (resolve, reject) => {
    // Create a new TUS upload.
    const upload = new tus.Upload(fileContent, {
      // Use the uploadUrl from the response of the generate URL endpoint.
      endpoint: resumableUploadUrlResponse.uploadUrl,
      // Enable tus-js-client to automatically retry on errors.
      retryDelays: [0, 3000, 5000, 10000, 20000],
      // TSend parameters to the upload server to indentify the file and authentication token.
      metadata: {
        filename: fileName,
        contentType: mimeType,
        token: resumableUploadUrlResponse.uploadToken
      },
      // Callback for errors that can't be fixed using retries.
      onError: function (error) {
        console.log('Failed because: ' + error);
        reject(error);
      },
      // Callback for reporting upload progress.
      onProgress: function (bytesUploaded, bytesTotal) {
        var percentage = (bytesUploaded / bytesTotal * 100).toFixed(2);
        console.log(bytesUploaded, bytesTotal, percentage + '%');
      },
      // Callback for once the upload is completed.
      onSuccess: function () {
        console.log('Download %s from %s', fileName, upload.url);
        resolve(true);
      }
    });

    upload.start();
  });

  // PUT request to finalize the upload.
  // Note that we concatenate the URL and token of the resumable upload response.
  const result = await httpClient.put(
    `${resumableUploadUrlResponse.uploadUrl}/${resumableUploadUrlResponse.uploadToken}`,
    {}, { params: { filename: fileName } }
  );
}
```


### Response
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
