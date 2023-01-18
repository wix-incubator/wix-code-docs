


# API Versions


As we update and expand the Velo APIs, new versions are released. Here's what you need to know about versions:

* **Versioning by module**  
  New versions are released at the module level, not for the entire Velo platform. For example, while the latest version of `wix-crm` might be V2, the latest version of `wix-bookings` might be V3.
* **Continuing usability**  
  Older versions of the API are still available. This means that you can continue to use older versions of modules even as new versions are released. However, we recommend that you upgrade to the latest version of a module as soon as possible.

## About module names 

The meanings of module names can change between versions. Use this guide to understand the different module names:

> Version 2 modules include `.v2` at the ends of their names.

| Module name | Version 1| Version 2 and up |
| ----------- | --------- | --------- |
| `wix-{module}`| A module that only works with frontend code. <br/> Exceptions: `wix-data`, `wix-fetch`, `wix-router` | A [universal module](#universal-modules). |
| `wix-{module}-backend`| A module that only works with backend code. | A module that only works with backend code. |
| `wix-{module}-frontend`| N/A | A module that only works with frontend code. |

## Universal modules 

In the first version of the API, modules were mostly divided between frontend and backend functionality. Frontend modules could only be imported directly into public and page code, and backend modules could only be imported into backend code files. This meant that in order to expose backend functionality in frontend code, you had to create a [web module](https://support.wix.com/en/article/velo-web-modules-calling-backend-code-from-the-frontend) and export functions from it, which could then be imported into frontend code.

From version 2 and up, modules support universal functionality. Universal modules simplify coding by allowing you to import modules directly into any code file on your site. You can identify universal modules by looking for a `.v2` or higher suffix in the module name. If the module name doesn't indicate that it's specifically for frontend or backend code, it's a universal module.

Within universal modules, some functions may still be limited to backend use only. These functions are indicated by the following notation in the API Reference:  
`
This function is not a universal function and only runs on the backend.
`

