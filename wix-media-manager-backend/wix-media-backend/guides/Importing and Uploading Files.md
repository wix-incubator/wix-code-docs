# Importing and Uploading Files

When you [import](/wix-media-backend/media-manager/import-file) or [upload](/wix-media-backend/media-manager/upload) a file, it's not immediately available, meaning you can't manage or use the file straight away. Files can take time to import or upload and be processed. This is true even though the function used to import or upload a file returns a successful response.

To run code when a file finishes processing successfully, use the [`onFileUploaded()`](wix-media-backend/events/on-file-uploaded) event. For audio or video files, use [`onAudioTranscoded()`](/wix-media-backend/events/on-audio-transcoded) and [`onVideoTranscoded()`](/wix-media-backend/events/on-video-transcoded), respectively.

## Using `context`

The [`import()`](/wix-media-backend/media-manager/import-file), [`upload()`](/wix-media-backend/media-manager/upload), and [`getUploadUrl()`](/wix-media-backend/media-manager/get-upload-url) functions have a parameter called `context`. 
Arguments passed to this parameter are included only in the `wix-media-backend` event bodies. 

Use `context` to pass information to the event that isn't contained in the file descriptor object.

### `context` use case

Here is a sample flow to show how you could use `context` effectively.

There is a form on a site that sends site visitors a confirmation email with the details they submitted in the form. One of the form fields is an image URL.
In the email, we want to send a Wix download URL for the image, not the original image URL. This means we can only send the email when the image file is ready to download.

To implement this, we use the following flow:
1. When the user submits the form, send the form information to a [data collection](/wix-data/introductionn), getting back the form data's `_id`.
1. Use [`import()`](/wix-media-backend/media-manager/import-file) to upload the image to the Media Manager. Include the `context` parameter as follows:
    ```json
    {
      "context": {
        "origin": "formBuilder",
        "externalIds": ["_id"]
      }
    }
    ```
1. Add the [`onFileUploaded()`](wix-media-backend/events/on-file-uploaded) event in your **events.js** file, and implement the following steps to handle the event:
    1. Check that the value for `context.origin` is `formBuilder`. We don't want to run this code if media was added from a different source.
    1. Use the `_id` to [retrieve the form details](data-items/save-data-item) from the CMS.
    1. [Get a download URL](/wix-media-backend/media-manager/get-download-url) for the image.
    1. Send the confirmation email with the form details and the download URL.