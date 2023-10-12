<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->



# "Schedule" Collection Fields







To use the Schedule collection in code, refer to it as `"Bookings/Schedule"`.

```javascript
wixData.query("Bookings/Schedule")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

This document describes the permissions and fields in your Schedule collection. 

### Permissions 

The Schedule collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Anyone 
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the Schedule collection's permissions. 

### Fields 

> **Note:**
> This app collection contains read-only fields that cannot be managed from the collection. You can update the fields from the relevant app in your site’s [dashboard](https://support.wix.com/en/article/accessing-your-sites-dashboard).

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default.

> **Note**
> You cannot create a dynamic page based on the Schedule collection.

#### ID (\_id) 

**Description**: Displays the service name from the Services collection.  
**Type**: Reference  
**Can connect to data**: Yes  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Service Schedule (serviceSchedule) 

**Description**: A JSON object that represents the schedule that has been defined for this service.  
**Type**: Reference  
**Can connect to data**: Yes  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

```json
{
  "mon":
    [
      {
        "staffid": "7b14c662-ef34-439a-45a6-8g43b8e15ba7",
        "startTime": "10:00:00:000",
        "endTime": "11:30:00:000"
      }
      ...
    ],
  "tue": [],
   ...                    
}
```

#### Service Duration in Minutes (serviceDurationInMinutes) 

**Description**: The duration of this service, in minutes. For example, if your class lasts an hour and a half, this field displays 90.  
**Type**: Number  
**Can connect to data**: Yes  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Repeats Every X Weeks (repeatsEveryXWeeks) 

**Description**: How often this service recurs. For example, if the sessions repeat every 2 weeks, this field displays 2.  
**Type**: Number  
**Can connect to data**: Yes  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes