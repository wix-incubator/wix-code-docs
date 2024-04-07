# Introduction

With the Editor API, you can retrieve the relevant URLs to manage redirects to the site editor and the editor preview. 
Changes made to the site's editor aren't visible to site visitors until they are published.  

Wix supports 3 editors for their sites:
- **Wix Editor**: The classic Wix editor.
- **Wix Studio**: Wix's editor built for agencies and enterprises.
- **Editor X**: Deprecated, sunset expected by July 1, 2024.

## Before you begin
It’s important to note the following points before starting to code:

- If an app that includes an embedded script extension is installed on the site, it won't be displayed in the preview.

## Use cases
- Redirect to the site editor.
- Redirect to preview the latest changes to the site before publishing.

## Import statement
To use the wix-urls.v2 API,
import `editor` from wix-urls.v2:

```js
import { editor } from 'wix-urls.v2';
```
