---
title: File and Folder IDs
---

# File ID
A file's ID is its unique identifier. It is a read-only property.

It's good practice to save all of a file's properties in your code when you retrieve them.

A file's ID must be retrieved programmatically. It can't be retrieved through the editor or media manager. There are several functions that include `fileId` in their response:
* [`bulkImportFiles()`](/files/bulkimportfiles)
* [`importFile()`](/files/importfile)
* [`listDeletedFiles`](/files/listdeletedfiles)
* [`listFiles()`](/files/listfiles)
* [`searchFiles()`](/files/searchfiles)

# Folder ID
A folder's ID is its unique identifier. It is a read-only property.

A folder's ID must be retrieved programmatically. It can't be retrieved through the editor or media manager. There are several functions that include `folderId` in their response:
* [`createFolder()`](/folders/createfolder)
* [`getFolder()`](/folders/getfolder)
* [`listDeletedFolders`](/folders/listdeletedfolders)
* [`listFolders()`](/folders/listfolders)
* [`searchFolders()`](/folders/searchfolders)
* [`updateFolder()`](/folders/updatefolder)

## Parent Folder ID
A file's or folder's parent folder ID tells us in which folder it is located. Usually, a parent folder ID will be a string of random letters and number, for example `'7984b3c5454e4371aqbd4f4eedde96bc'`. However, there are 3 parent folders whose IDs look different (these are their IDs):
* `'media-root'` - this folder contains all files and folders in the root level of the **Site Files** tab in the media manager.
* `'visitor-uploads'` - this folder contains all files and folders in the root level of the **Visitor Uploads** tab in the media manager.
* `'trash-root'` - this folder contains all files and folders in the root level of the **Trash** tab in the media manager.