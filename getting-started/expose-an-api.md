# Expose an API

With Velo, you can choose to expose some of your site's functionality as an API for other systems to consume. You expose an API by creating HTTP functions.

You might want to use HTTP functions to:

-   Integrate your site with an automation tool, such as [Zapier](https://zapier.com/) or [IFTTT](https://ifttt.com/).
-   Receive notifications and information from external webhooks. 
-   Access your site's backend from a native mobile application.

## Creating an HTTP Function

For each API endpoint you want to create you need to define an HTTP function. An HTTP function is a backend function that conforms to certain conventions. 

### Location

First off, the implementation of your HTTP functions must be in the root **backend** folder in a file named **http-functions.js**. 

### Naming

Within the **http-functions.js** file, your code needs to conform to the following conventions:

-   Each endpoint you want to expose is implemented in an exported function.
-   The function name begins with a prefix that determines the HTTP method (`get`, `post`, `push`, or `delete`) it handles followed by an underscore (`_`). Catch all functions that handle multiple HTTP methods begin with the prefix `use`.
-   The remainder of the function name is the name of your endpoint.

For example, an endpoint named **myFunction** that handles GET requests, looks like this:

```javascript
// In backend/http-functions.js

export function get_myFunction(request) {
    // endpoint implementation goes here
}
```

### Implementation

Of course, you can implement your HTTP function to do whatever you like. But there are still a couple of things you need to know about how requests are received and how you respond to those requests.

#### Requests

Requests to an HTTP function are passed to the function in the `request` parameter. The request often contains information the consumer of your API is sending to you. You usually define your API so this information is sent in the path, query, or body.

A function which expects an ID in the path may contain some code like this to retrieve the ID:

```javascript
export function get_myFunction(request) {  
  
    // ...

    const id = request.path[0];

    // ...
}
```

A function which expects an ID in the query string may contain some code like this to retrieve the ID:

```javascript
export function get_myFunction(request) {  
  
    // ...

    const id = request.query.id;

    // ...
}
```

A function which expects an ID in the body may contain some code like this to retrieve the ID:

```javascript
export function post_myFunction(request) {  
  
    // ...

    const {id, update} = await request.body.json();

    // ...
}
```

Sometimes you also want to check the headers sent with the request or the IP address that the request is coming from. See the API Reference for detailed information about the [request object](https://www.wix.com/velo/reference/wix-http-functions/wixhttpfunctionrequest-obj).

#### Responses

To send a response to the caller of your HTTP function, you typically use one of the functions listed below, like `ok()` or `notFound()`, to build the most common response types.

For example this GET endpoint searches for an item in a database collection and returns an OK response with the item if it was found or a Not Found response if the requested item does not exist in the collection.

```javascript
// In backend/http-functions.js

import {ok, notFound} from 'wix-http-functions';
import wixData from 'wix-data';

export async function get_myFunction(request) {
    const id = request.path[0];

    const {items} = await wixData.get('MyCollection', id);
    if (items.length > 0) {
        return ok(items[0]);
    }
    else {
        return notFound({message: `${id} does not exist`});
    }
}
```

You can also create a response not covered by the built-in functions using the generic `response()` function. The responses can contain headers and a body if needed.

The following is a list of the response functions you can use:

| Response function | HTTP Status Code | Typical Use |
| --- | --- | --- |
| ok( ) | 200 (OK) | Request was successful. |
| created( ) | 201 (Created) | Request was successful and a new resource has been created. |
| badRequest( ) | 400 (Bad Request) | Request was unsuccessful because of a client error, such as a request using the incorrect syntax. |
| forbidden( ) | 403 (Forbidden) | Request was valid but the server is refusing to process it, usually because the client does not have the necessary permissions for the requested resource. |
| notFound( ) | 404 (Not Found) | Requested resource was not found at the current time. |
| serverError( )  | 500 (Internal Server Error) | Request was unsuccessful because of an unexpected error on the server. |
| response( ) | Any | Response does not fit any of the above scenarios. |

Once your response is built, you return it from your HTTP function to send it back to the client that called the function.

### Security

When you open up an API to the outside world, keep in mind that you might be exposing sensitive operations and information. For example, you might be allowing consumers of your API to write data to your database collections.

If there are functions that you only want to be called by specific consumers, make sure you authenticate the function caller or use some other means to ensure only authorized parties are able to access information that you don't want everyone to have access to. 

### Example

Let's take a look at an example HTTP function to see how it handles requests and returns responses.

This example, handles GET requests which retrieve items from a database collection based on the data sent in the path. The data is encoded as two path parameters. The first parameter is the first name of the user to retrieve and the second is the last name. If the user is not found or there is a problem reaching the database, an appropriate error is returned.

```javascript
import {ok, notFound, serverError} from 'wix-http-functions';
import wixData from 'wix-data';

export function get_myFunction(request) {  
    let options = {
        "headers": {
            "Content-Type": "application/json"
        }
    };

    const firstName = request.path[0];
    const lastName = request.path[1];

    // query a collection to find matching items
    return wixData.query("myUserCollection")
        .eq("firstName", firstName)
        .eq("lastName", lastName)
        .find()
        .then( (results) => {
            // matching items were found
            if(results.items.length > 0) {
                options.body = {
                    "items": results.items
                };
                return ok(options);
            }
            // no matching items found
            options.body = {
                "error": `'${firstName} ${lastName}' was not found`
            };
            return notFound(options);
        } )
        // something went wrong
        .catch( (error) => {
            options.body = {
                "error": error.message
            };
            return serverError(options);
        } );
}
```

The code begins by importing several response functions and the data module for performing queries.

```javascript
import {ok, notFound, serverError} from 'wix-http-functions';
import wixData from 'wix-data';
```

Next, we define the function header so that the function handles GET requests to the **myFunction** endpoint. 

```javascript
export function get_myFunction(request) {
    // Implementation goes here
}
```

Then, we define some headers that will be used later when we create the proper response.

```javascript
let options = {
    "headers": {
        "Content-Type": "application/json"
    }
};
```

After that, we read the path parameters and store them in variables.

```javascript
const firstName = request.path[0];
const lastName = request.path[1];
```

Finally, we query a collection and return the appropriate response. 

-   If matching items are found, we add the query results to the response body and return an OK response. 
-   If no matching items are found, we add an error message to the response body and return a Not Found response. 
-   If there is an error performing the query, we add the error to the response body and return an Internal Server Error response.

```javascript
return wixData.query("myUserCollection")
    .eq("firstName", firstName)
    .eq("lastName", lastName)
    .find()
    .then( (results) => {
        // matching items were found
        if(results.items.length > 0) {
            options.body = {
                "items": results.items
            };
            return ok(options);
        }
        // no matching items found
        options.body = {
            "error": `'${firstName} ${lastName}' was not found`
        };
        return notFound(options);
    } )
    // something went wrong
    .catch( (error) => {
        options.body = {
            "error": error
        };
        return serverError(options);
    } );
}
```

### Calling

Now that you know how to create an HTTP function, let's see how the API you expose is consumed by others. 

Each function you write creates a testing endpoint and a production endpoint. You need to publish your site at least once before using both the testing and production endpoints. 

After that:

-   Save your site after making changes to update your testing endpoints
-   Publish your site after making changes to update your production endpoints.

The URL of the testing endpoint follows this pattern:

-   For premium sites:   
    Pattern: https://www.{user\_domain}/\_functions-dev/<functionName>  
    Example: https://www.mysite.com/\_functions-dev/myFunction
-   For free sites:  
    Pattern: https://{user\_name}.wixsite.com/{site\_name}/\_functions-dev/<functionName>  
    Example: https://user123.wixsite.com/mysite/\_functions-dev/myFunction

The URL of the production endpoint follows this pattern:

-   For premium sites:  
    Pattern: https://www.{user\_domain}/\_functions/<functionName>  
    Example: https://www.mysite.com/\_functions/myFunction
-   For free sites:  
    Pattern: https://{user\_name}.wixsite.com/{site\_name}/\_functions/<functionName>  
    Example: https://user123.wixsite.com/mysite/\_functions/myFunction