---
title: File ID
---

# File ID
A file's ID is its unique identifier. It is a read-only property.

It's good practice to save all of a file's properties in your code when you retrieve them.

A file's ID must be retrieved programmatically, it can't be retrieved through the site builder. There are several functions that include `fileId` in their response:
* [`bulkImportFiles()`](https://www.wix.com/velo/reference/wix-media-v2/files/bulkimportfiles)
* [`importFile()`](https://www.wix.com/velo/reference/wix-media-v2/files/importfile)
* [`listDeletedFiles`](https://www.wix.com/velo/reference/wix-media-v2/files/listdeletedfiles)
* [`listFiles()`](https://www.wix.com/velo/reference/wix-media-v2/files/listfiles)
* [`searchFiles()`](https://www.wix.com/velo/reference/wix-media-v2/files/searchfiles)