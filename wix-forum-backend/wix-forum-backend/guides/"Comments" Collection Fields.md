

# "Comments" Collection Fields







This document describes the permissions and fields in your Comments collection. 

### Permissions 

The Comments collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Anyone
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the Comments collection's permissions. 

### Fields 

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default.

#### ID (\_id) 

**Description**: The comment ID.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne, hasSome, contains  
**Read-only**: Yes

#### Parent ID (parentId) 

**Description**: ID of the parent comment (for replies).  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne  
**Read-only**: Yes

#### Post ID (postId) 

**Description**: ID of the post that the comment is commenting on.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne  
**Read-only**: Yes

#### Owner ID (ownerId) 

**Description**: ID of the comment owner.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: Yes  
**Read-only**: Yes

#### Plain Content (plainContent) 

**Description**: Plain content of the comment.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Reply Count (replyCount) 

**Description**: Number of replies to the comment.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, lt, lte, gt, gte  
**Read-only**: Yes

#### Like Count (likeCount) 

**Description**: Number of likes on the comment.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, lt, lte, gt, gte  
**Read-only**: Yes

#### Created Date (\_createdDate) 

**Description**: Date and time the comment was created.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, lt, lte, gt, gte  
**Read-only**: Yes

#### Edited Date (\_editedDate) 

**Description**: Date and time the comment was last edited.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne, lt, lte, gt, gte  
**Read-only**: Yes

#### Last Activity Date (lastActivityDate) 

**Description**: Date and time of the last activity on the comment.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, lt, lte, gt, gte  
**Read-only**: Yes

#### Page URL (pageUrl) 

**Description**: URL of the comment page.  
**Type**: URL  
**Can connect to data**: Yes, can connect as a button click action.  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Upvote Count (upvoteCount) 

**Description**: Number of upvotes on the comment.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne, lt, lte, gt, gte  
**Read-only**: Yes

#### Downvote Count (downvoteCount) 

**Description**: Number of downvotes on the comment.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne, lt, lte, gt, gte  
**Read-only**: Yes

#### Score (score) 

**Description**: Number of upvotes minus the number of downvotes.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, lt, lte, gt, gte  
**Read-only**: Yes