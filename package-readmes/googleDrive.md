## Google Drive Integration

The Google Drive Integration package provides you with the ability to easily manage files stored in Google Drive from a Wix site. You can perform the following actions with this package:

*   **Get**: Download metadata for existing Google Drive files to a Wix site.
*   **Upload**: Upload files from a Wix site to Google Drive.
*   **List**: List metadata for existing Google Drive files on a Wix site.
*   **Delete**: Delete files on Google Drive.
*   **Manage permissions**: Manage permissions for files on Google Drive. 

### Setup

Before using the package, set up the following:

#### Google Cloud Platform

1. Go to the Google [developer site](https://console.developers.google.com/) and create a new project or choose an existing one.
2. In the left sidebar, click **Library**. Search for **Google Drive API** and enable that API in your project.
3. On the left sidebar, click **Credentials**. On the top menu, click **Create Credentials** and select **Service Account**. Provide the needed information and finish all steps.
4. On the **Credentials** main page, you should see a new entry in the **Service Accounts** table. Click the entry’s **edit icon**.
5. Choose **Keys** and click **Add Key > Create New key** and select **JSON**. This will cause a file to download.
6. Open the downloaded file and copy the **client_email** value.
7. Create a new folder in your Google Drive, or use an existing one that you want to use for your site. Keep the folder tab open. You will need it later. Share the new folder with the copied **client_email** value.
8. Copy the contents of the downloaded file. You’ll need it for the **Wix Secrets Manager** in the next section.

#### Wix Platform

##### Secrets Manager

1. Open the [Wix Secrets Manager](https://support.wix.com/en/article/velo-about-the-secrets-manager) and store the contents of the downloaded file as a new secret in the **Secrets Manager** with the name `velo-google-drive-credentials`. 
2. Go to the tab with your Google Drive folder. Notice the URL. It contains your folder ID: `https://drive.google.com/drive/u/0/folders/{YOUR_FOLDER_ID}`
3. Copy your folder ID and store it as a new secret in the **Secrets Manager** with the name `folderId`.

### Package Content

The following backend files are included in the package. Note that only exported functions that you can use in your site are listed here.

**Note**: If you want to use the package in your page or site code, use a [web module](https://support.wix.com/en/article/velo-about-web-module-permissions) (.jsw) file instead of a backend (.js) file to avoid exposing the package functions to unauthorized visitors.

#### googledrive.js

The code in this file contains functions for accessing and working with files in Google Drive from your site.

To use the functions below in your backend code, import them with the following syntax:

```js
import { <functionName> } from '@velo/google-drive-integration-backend';
```

The file contains the following functions:

*   **uploadFileByUrl()**

    Creates and uploads a file by specifying its URL and the Google Drive folder to upload to. The URL can be either an absolute `https://` link or a link in the Velo URL format, such as: `image://`, `video://`, `audio://` 

    **Syntax:**

    ```js
    function uploadFileByUrl(folderId: string, options: object): Promise<fileMetadata: object>
    ```

    **Parameters:** 

    The ID of the file and a `file` object containing options to use when uploading the file.

    * `folderId:` String containing the ID of the shared folder to upload to. Required.
    * `options:` An object that contains file metadata needed to upload the file. Required.
       *   `url:` File URL. Required. Can be either an absolute `https://` link or a link in the Velo URL format, such as: `image://`, `video://`, `audio://`
       *   `name?:` Optional file name.
       *   `description?:` Optional file description.

    **Returns:** 

    A promise that, if successful, resolves to an object containing metadata of the uploaded file: 

    *   `id:` String containing the [ID](https://docs.meiro.io/books/meiro-integrations/page/where-can-i-find-the-file-id-on-google-drive) of the uploaded file. 
    *   `kind:` String containing the kind of the uploaded file, typically the string `drive#file`.
    *   `mimeType:` String containing the [mime type](https://developers.google.com/drive/api/v3/ref-export-formats) of the uploaded file, such as `image/png` or `image/jpeg`.
    *   `name:` String containing the name of the uploaded file.

    **Example:**

    ```js
    import { getSecret } from 'wix-secrets-backend';
    import { uploadFileByUrl } from '@velo/google-drive-integration-backend';

    async function uploadImage() {
      const folderId = await getSecret('folderId');
    
      await uploadFileByUrl(folderId, {
        url: 'image://v1/68d3a9_1de7529c444b4c9eb38401f8efe0cad2.jpg/flowers.jpg',
        name: 'My image',
        description: 'My description',
      });
    }
    ```

*   **getFileById()**

    Gets a file's metadata by specifying the file’s ID. You can choose which metadata fields to return. 

    **Syntax:**

    ```js
    function getFileById(fileId: string; fields?: string): Promise<fileMetadata: object>
    ```

    **Parameters:**

    *   `fileId:` String containing the file [ID](https://docs.meiro.io/books/meiro-integrations/page/where-can-i-find-the-file-id-on-google-drive). Required.
    *   `fields?:` An optional [string](https://developers.google.com/drive/api/v3/fields-parameter) specifying the metadata [fields](https://developers.google.com/drive/api/v3/reference/files) to include in the returned object, in addition to the following default fields that are always returned: ` id`, `name`, `mimeType`, `size`, `createdTime`, and `modifiedTime.` Separate the fields in the string with commas.

    **Returns:**

    A promise that, if successful, resolves to an object containing metadata of the uploaded file. The fields returned are those specified using the `fields` parameter.

    **Example:**

    ```js
    import { getFileById } from '@velo/google-drive-integration-backend';

    // Fill in the file ID
    const fileId = '...';
    
    // Returns the name and webViewLink
    const fields = 'name, webViewLink';

    getFileById(fileId, fields)
      .then((file) => {
        const name = file.name;
        const viewLink = file.webViewLink;
      })
      .catch((error) => {
        console.log(error);
      });
    ```

*   **deleteFileById()** 

    Permanently deletes a file, bypassing the trash bin. If the file belongs to a shared drive, you must have organizer permissions for the parent-level folder. If deleting a folder, all child files that you own are also deleted.

    **Syntax:**

    ```js
    function deleteFileById(fileId: string): Promise<boolean>
    ```

    **Parameters:**

    *  `fileId:` String containing the [ID](https://docs.meiro.io/books/meiro-integrations/page/where-can-i-find-the-file-id-on-google-drive) of the file you want to delete. Required.

    **Returns:**
    
    A promise that, if successful, resolves to `true` if the file is deleted successfully.

    **Example:**

    ```js
    import { deleteFileById } from '@velo/google-drive-integration-backend';

    // Fill in the file ID
    const fileId = '...';

    deleteFileById(fileId)
      .then(() => {
        console.log('File removed');
      })
      .catch((error) => {
        console.log(error);
      });
    ```

*   **listFiles()**
 
    Gets the metadata of a list of files located in your Google Drive. You can set which files to list by sending a query as a string, and you can also set which metadata fields to return.

     **Note**: The `listFiles()` function lists files of all users, provided that they match the specified query. We advise you to return only relevant files/fields to the frontend.

    **Syntax:**

    ```js
    function listFiles(query?: string, fields?: string): Promise<fileMetadata: object>
    ```

    **Parameters:**

    *   `query?:` An optional string containing a [query](https://developers.google.com/drive/api/v3/ref-search-terms) for filtering the file metadata results. [Query string examples](https://developers.google.com/drive/api/v3/search-files#query_string_examples)
    *   `fields?:` An optional [string](https://developers.google.com/drive/api/v3/fields-parameter) specifying which metadata [fields](https://developers.google.com/drive/api/v3/reference/files) to include in the returned object, in addition to the following default fields that are always returned: `id`, `name`, `mimeType`, `size`, `createdTime`, and `modifiedTime.` Separate the fields in the string with commas.
    
        **Note:** File properties are [nested](https://developers.google.com/drive/api/v3/fields-parameter) under `files`, so when listing the field names, wrap them between the `( )`'s of `files`. See the example below.

    **Returns:**

    A promise that, if successful, resolves to an array of objects containing the metadata of the queried files, according to the specified fields.

    **Example:**

    ```js
    import { listFiles } from '@velo/google-drive-integration-backend';
    
    // Finds files with a PNG 
    // or JPEG mimetype
    const query = 'mimeType = "image/png" or mimeType = "image/jpeg"';

    // Returns the name and webViewLink
    const fields = 'files(name, webViewLink)';

    listFiles(query, fields)
      .then((data) => {
        if (data.files.length > 0) {
          const image = data.files[0];
          const name = image.name;
          const viewLink = image.webViewLink;
        }
      })
      .catch((error) => {
        console.log(error);
      });
    ```

*   **createPermissions()** 

    Creates a [permission for a file](https://developers.google.com/drive/api/v3/reference/permissions). Permissions enable file/folder access to others. Access can be granted to a user, group, domain, or anyone else.

    ```js
    function createPermissions(fileId: string, permissionInfo: object): Promise<permission: object>
    ```

    **Parameters:**

    The ID of the file and an object with permission options.

    *   `fileId:` String containing the [ID](https://docs.meiro.io/books/meiro-integrations/page/where-can-i-find-the-file-id-on-google-drive) of the file you want to set permissions for. Required.
    *   `permissionInfo`: Object containing the information needed to create the permission. Required.
        *  `role:` The role granted by this [permission](https://developers.google.com/drive/api/v3/reference/permissions/create). Required. One of: `owner, organizer, fileOrganizer, writer, commenter, reader`
        * `type:` Who is being granted the [permission](https://developers.google.com/drive/api/v3/reference/permissions/create). Required. One of: `user, group, domain, anyone`
        * `domain?:` If `type` is `domain`, a string containing the domain being granted the permission. Otherwise, optional.

    **Returns:** 

    A promise that, if successful, resolves to an object defining the [permission](https://developers.google.com/drive/api/v3/reference/permissions/create) that was created for the file:

    *   `id:` String containing the [ID](https://docs.meiro.io/books/meiro-integrations/page/where-can-i-find-the-file-id-on-google-drive) of the file you set permissions for.
    *   `kind:` String containing the resource kind, typically the string `"drive#file"`.
    *   `role:` String containing the role granted by this [permission](https://developers.google.com/drive/api/v3/reference/permissions/create). One of: `owner, organizer, fileOrganizer, writer, commenter, reader`
    *   `type:` String containing who is being granted the [permission](https://developers.google.com/drive/api/v3/reference/permissions/create). One of: `user, group, domain, anyone`
    *   `allowFileDiscovery:` Boolean indicating whether the file is discoverable. 

    **Example:**

    ```js
    import { createPermissions } from '@velo/google-drive-integration-backend';

    // Fill in the file ID
    const fileId = '...';

    // Set the permission so that 
    // anybody can read this file
    createPermissions(fileId, {
        role: 'reader',
        type: 'anyone',
      })
      .then(() => {
        console.log('Permission created');
      })
      .catch((error) => {
        console.log(error);
      });
    ```

### npm Packages

This Velo package uses the following npm package. To view the npm license, see the npm readme.

*   [googleapis](https://www.npmjs.com/package/googleapis)

### Release Notes

1.0 Initial version.

### Tags

google, googleapis, drive
