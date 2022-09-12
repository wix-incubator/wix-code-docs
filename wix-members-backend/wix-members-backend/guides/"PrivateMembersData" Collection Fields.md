

# "PrivateMembersData" Collection Fields







To use the PrivateMembersData collection in code, refer to it as `"Members/PrivateMembersData"`.

```javascript
wixData.query("Members/PrivateMembersData")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

This document describes the permissions and fields in your PrivateMembersData collection. 

> **Note:**
> You manage your Members in the [Site Members](https://support.wix.com/en/article/viewing-your-member-list) section of your dashboard.

### Permissions 

The PrivateMembersData collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Site member author
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the PrivateMembersData collection permissions.

### Fields 

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default. 

#### ID (\_id) 

**Description**: The member ID that was created by the server. This is a system field and is hidden by default.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes   
**Can be filtered**: Yes  
**Read-only**: Yes

#### Login Email (loginEmail) 

**Description**: The email address the member uses to log in to your site. This is the address they supplied when they signed up. This is the Main field.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: Yes  
**Read-only**: Yes

#### Name (name) 

**Description**: The member's full name. This information is concatenated from the "First Name" and "Last Name" fields.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: Yes  
**Read-only**: Yes

#### First Name (firstName) 

**Description**: The member's first name.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: Yes  
**Read-only**: Yes

#### Last Name (lastName) 

**Description**: The member's last name.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: Yes  
**Read-only**: Yes

#### Picture (picture) 

**Description**: Displays the image the member uploaded to their profile, if any.  
**Type**: Image  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Nickname (nickname) 

**Description**: Displays the name the member specified on their profile.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: Yes  
**Read-only**: Yes

#### Slug (slug) 

**Description**: The member's URL-friendly name that is unique across your site. Typically this is made up of the member's email prefix.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: Yes  
**Read-only**: Yes

#### Language (language) 

**Description**: Displays the member's locale based on their last login.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: Yes  
**Read-only**: Yes

#### Status (status) 

**Description**: Indicates the member's current status:

-   Applicant: The member is waiting to be approved
-   Active: The member is approved and can access your site
-   Blocked: The member has been blocked and can no longer log in to your site

**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: Yes  
**Read-only**: Yes

#### Created Date (\_createdDate) 

**Description**: Displays the date and time the member registered to the site.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: Yes  
**Read-only**: Yes

#### Updated Date (\_updatedDate) 

**Description**: Displays the last date and time the member's details were updated.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: Yes  
**Read-only**: Yes

#### Last Login Date (lastLogin) 

**Description**: Displays the date and time when the member last logged in.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: Yes  
**Read-only**: Yes

#### Emails (emails) 

**Description**: Displays all the member's email addresses in an array.  
**Type**: No  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

```json
["email1", "email2", ...]
```

#### Main Phone (mainPhone) 

**Description**: Displays the member's main phone number.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Phones (phones) 

**Description**: Displays all the member's phone numbers in an array.  
**Type**: Text  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

```json
["phone1", "phone2" ...]
```