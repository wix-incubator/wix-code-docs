# Introduction

With the Site API, you can retrieve the relevant URLs for the published site, including translated pages. 


## Use cases
- Redirect site visitors to a translated version of the site.

## Terminology
- **Primary URL**: Site contributors can connect an unlimited number of domains (URLs) to a single Wix site. The primary URL is the domain that they connect directly to the site and is the site's main URL.
- **Secondary URL**: When site contributors connect additional domains/URLs to a site, they are considered secondary URLs, and will redirect visitors to the primary URL.
- **Wix Multilingual**: A Wix product that manages site translation. Read more about [Wix Multilingual](https://support.wix.com/en/article/wix-multilingual-adding-and-setting-up-wix-multilingual).

## Import statement
To use the wix-urls.v2 API,
import `site` from wix-urls.v2:

```js
import { site } from 'wix-urls.v2';
```
