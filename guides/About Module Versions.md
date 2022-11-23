# Velo: About Module Versions



## Universal Modules

Version 2 modules include universal functionality. The first version modules were divided between frontend and backend. Frontend modules could only be imported directly into public and page code, and backend modules could only be imported into backend code files. This meant that in order to expose backend functionality to frontend code, you would have to create a [web module]() in the backend and export functions from it, which could then be imported into frontend code. Universal modules simplify this process by allowing you to import modules directly into any code file on your site. You can identify universal modules by looking for a `.v2` or higher suffix in the module name. If the module name doesn't indicate that it's specifically for frontend or backend code, it's a universal module.

Within universal modules, some functions may still be limited to backend use only. These functions are indicated by the following notation in the API Reference:
![Backend-only function text]()

