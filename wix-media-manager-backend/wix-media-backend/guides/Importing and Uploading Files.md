# Importing and Uploading Files

When you [import](/wix-media-backend/media-manager/import-file) or [upload](/wix-media-backend/media-manager/upload) a file, it is not immediately available. Files can take time to import or upload, but the function will send a response once it has started the importing process.

To run code when a file finishes importing or uploading successfully, use the [`onFileUploaded()`](wix-media-backend/events/on-file-uploaded) event. For audio or video files, use [`onAudioTranscoded()`](/wix-media-backend/events/on-audio-transcoded) and [`onVideoTranscoded()`](/wix-media-backend/events/on-video-transcoded), respectively.

## Using `context`

The [`import()`](/wix-media-backend/media-manager/import-file), [`upload()`](/wix-media-backend/media-manager/upload), and [`getUploadUrl()`](/wix-media-backend/media-manager/get-upload-url) functions have a parameter called `context`. 
This parameter affects only the body in the events response.

Use `context` to pass information to the event that isn't contained in the file descriptor object.

### `context` use case

There is a form on a site that sends a confirmation email with the details of the form. One of the form fields is an image URL.
We want to send a download URL for the image, not the original image URL, so we'll send the email only when the image file is ready.

To implement this, we use the following flow:
1. When the user submits the form, send the form information to a [CMS table](/wix-data/introductionn), getting back the form data's `row-id`.
1. Use [`import()`](/wix-media-backend/media-manager/import-file) to upload the image to the Media Manager. Include the `context` parameter as follows:
    ```json
    {
      "context": {
        "origin": "formBuilder",
        "externalIds": ["row-id"]
      }
    }
    ```
1. Add the [`onFileUploaded()`](wix-media-backend/events/on-file-uploaded) event in your **events.js** file, and implement the following steps in the event:
    1. Check that the `origin` is `formBuilder`. We don't want to run this code if media has been added in a different way.
    1. Use the `row-id` to retrieve the form details from the CMS.
    1. [Get a download URL](/wix-media-backend/media-manager/get-download-url) for the image.
    1. Send the confirmation email with the form details and the download URL.