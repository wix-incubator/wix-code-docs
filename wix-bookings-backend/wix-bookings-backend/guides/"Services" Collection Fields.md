

# "Services" Collection Fields







To use the Services collection in code, refer to it as `"Bookings/Services"`.

```javascript
wixData.query("Bookings/Services")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

This document describes the properties and fields in your Services collection.

### Permissions 

The Services collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Anyone 
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the Services collection's permissions. 

### Fields 

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default.

#### ID (\_id) 

**Description**: The service ID that was created by the server. This is a system field and is hidden by default.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Service Name (serviceName) 

**Description**: The name of the service.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Service Type (serviceType) 

**Description**: The type of service offered (Appointment, Class, Course).  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Service Image (imageURL) 

**Description**: Displays the photo for this service as it appears in the Booking Manager.  
**Type**: Image  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Service Description (description) 

**Description**: The service description.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Service Tagline (tagLine) 

**Description**: The service tagline.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Slug (slug) 

**Description**: The service's slug, which is its URL-friendly name that is unique across the site.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: Yes  
**Read-only**: Yes

#### Service Page URL (servicePageURL) 

**Description**: The link to the service's page on your site.  
**Type**: URL  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Booking Flow Entry URL (bookingFlowEntryURL) 

**Description**: The link to the service's calendar page for appointments & classes, or to the service's page for courses.  
**Type**: URL  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Price Summary (priceSummary) 

**Description**: The price summary, as follows:
-   For paid bookings, displays "Amount + Currency".
-   For free bookings, displays "Free" or any custom text specified.
 
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Payment Type (paymentType) 

**Description**: The payment method defined for this service.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Part of Pricing Plan (partOfPricingPlan) 

**Description**: Indicates whether the service is associated with a pricing plan, such as a membership deal.  
**Type**: Boolean  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Price Amount (priceAmount) 

**Description**: The cost of a single session of this service.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Deposit Amount (depositAmount) 

**Description**: The deposit required to book this service, if any.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Currency (currency) 

**Description**: The currency for this service.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Max Session Capacity (maxSessionCapacity) 

**Description**: The maximum number of participants that can be booked for a single session of this service. For appointments, this value is always one.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Max Number Of Participants Per Reservation (maxNumberOfParticipantsPerReservation) 

**Description**: The number of participants a single customer can sign up for one session of this service. For example, you can define that one customer can book up to 3 participants for a given session. For appointments, this value is always one.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Form Fields (form) 

**Description**: List of additional values needed for booking a session of the service.  
**Type**: Reference  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

```json
{  
  "fields":[  
    {  
      "id":"20657271-c55f-43d6-adfd-39b7acc38e11",
      "type":"text",
      "label":"Name",
      "constraints":{  
        "required":true
      }
    },
    {  
      "id":"87edd4e0-42b1-4802-8766-584f3eeb6436",
      "type":"email",
      "label":"Email",
      "constraints":{  
        "required":true
      }
    },
    {  
      "id":"78bdd186-648e-420d-b8c7-59ebbadb6a4b",
      "type":"tel",
      "label":"Phone Number",
      "constraints":{  
        "required":false
      }
    },
    {  
      "id":"2f37d76d-3462-466f-b1f2-e05ebf1889ad",
      "type":"text",
      "label":"Add Your Message",
      "constraints":{  
        "required":false
      }
    },
    {  
      "id":"61997cef-9fa2-4f67-9773-67ade57f8754",
      "type":"text",
      "label":"Street",
      "constraints":{  
        "required":true
      }
    },
    {  
      "id":"1a4d2b86-bb03-4f3a-ac18-3055e284066b",
      "type":"text",
      "label":"Apt. / Floor No.",
      "constraints":{  
        "required":false
      }
    },
    {  
      "id":"cf34b269-ddd7-4290-aa2e-5b535f5e9fbe",
      "type":"text",
      "label":"City",
      "constraints":{  
        "required":true
      }
    }
  ]
}
```