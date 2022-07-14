## Find Visitor Location Integration

The Find Visitor Location Integration package provides you with the ability to get your visitor’s address in a human-readable format. This is done by integrating the LocationIQ geocoding service into your site.

### Setup

Before using the package, set up the following:

#### LocationIQ Platform

1. Create a LocationIQ [account](https://locationiq.com/register), or login to your existing account.
2. In the LocationIQ Dashboard, select **API Access Tokens**.
3. Copy your **Access Token**.

#### Wix Platform

1. Open the [Wix Secrets Manager](https://support.wix.com/en/article/corvid-about-the-secrets-manager). 
2. Store your **Access Token** in a new secret with the name `locationIQ`. 

### Package Content

The following files are included in the package. Note that only exported package functions that you can use in your site are listed here.

#### Backend File

This package contains the following backend file:

##### location-api.jsw

The code in this file contains an unexposed function which calls the LocationIQ API to retrieve the visitor’s human-readable location information.


#### Public File

This package contains the following public file:

##### visitor-location.js

The code in this file contains a function which returns the visitor’s human-readable address.

To use the function below in your code, import it with the following syntax:

```js
import {getVisitorAddress} from '@velo/visitor-location-iq-integration';
```


The file contains the following function:

* **getVisitorAddress()**
    
    Gets the current geolocation of the visitor and retrieves a human-readable address from LocationIQ’s geocoding service.

    **Syntax:**
    ```js
    export async function getVisitorAddress() : Promise<Object>
    ```
    **Returns:**
    
    A promise that resolves to a JSON containing the full address.

    Example return object:


```
{ 
	"place_id": "331252545579", 
	"osm_type": "node", 
	"osm_id": "2715447806",
	"licence": "https:\/\/locationiq.com\/attribution",
	"lat": "40.757995",
	"lon": "-73.969405",
	"display_name": "876, 3rd Avenue, Midtown East, New York, New York County,    New York, 10022, USA",
	"boundingbox": ["40.757995", "40.757995", "-73.969405", "-73.969405"],
	"importance": 0.225,
	"address": {
		"house_number": "876",
		"road": "3rd Avenue",
		"neighbourhood": "Midtown East",
		"city": "New York",
		"county": "New York County",
		"state": "New York",
		"postcode": "10022",
		"country": "United States of America",
		"country_code": "us"
	}
}
```

### Release Notes

1.0 Initial version.

### Tags

location, geocoding, LocationIQ, fetch
