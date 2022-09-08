

# "Tasks" Collection Fields







To use the Tasks collection in code, refer to it as `"CRM/Tasks"`.

```javascript
wixData.query("CRM/Tasks")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

This document describes the permissions and fields in your Tasks collection. 

### Permissions 

The Tasks collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Admin and Back Office Manager
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the Tasks collection's permissions. 

### Fields 

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default.

#### Title (title) 

**Description**: The name of the task.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, contains  
**Read-only**: Yes

#### ID (\_id) 

**Description**: The task ID (GUID) that was created by the server. This is a system field and is hidden by default.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Version (version) 

**Description**: Running task version number. Each time an action is performed on a task, its version number is incremented.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Completed (isCompleted) 

**Description**: Indicates whether the task has been completed.  
**Type**: Boolean  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq  
**Read-only**: Yes

#### Contact ID (contactId) 

**Description**: Unique identifier of the site contact the task is linked to.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq  
**Read-only**: Yes

#### Assignee ID (assigneeId) 

**Description**: Unique identifier of the [contributor](https://support.wix.com/en/article/about-roles-permissions-contributors) assigned to the task.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq  
**Read-only**: Yes

#### Due Date (dueAt) 

**Description**: Date the task is scheduled to be completed by.  
**Type**: Date  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: lt, gt  
**Read-only**: Yes

#### Creator Type (creatorType) 

**Description**: Type of the task's creator. One of the following:

-   **USER:** The task was created from the site's dashboard. 
-   **APP:** The task was created by a Wix application or using the [createTask( )](https://www.wix.com/corvid/reference/wix-crm-backend.tasks.html#createTask) function.

**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### User ID (userId) 

**Description**: Unique identifier of the user who created the task in the dashboard. Only present if the Creator Type is USER.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Application ID (ApplicationId) 

**Description**: Unique identifier of the application that created the task. Only present if the Creator Type is APP.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

### APIs

Use the following APIs to work with data from the Tasks collection:

-   [wix-crm-backend.tasks](https://www.wix.com/corvid/reference/wix-crm-backend.tasks.html)
-   [wix-data](https://www.wix.com/corvid/reference/wix-data.html)
-   [wix-dataset](https://www.wix.com/corvid/reference/wix-dataset.html)