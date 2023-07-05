<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->



# "Posts" Collection Fields







This document describes the permissions and fields in your Posts collection. 

### Permissions 

The Posts collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Anyone
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the Posts collection's permissions. 

### Fields 

> **Note:**
> This app collection contains read-only fields that cannot be managed from the collection. You can update the fields from the relevant app in your site’s [dashboard](https://support.wix.com/en/article/accessing-your-sites-dashboard).

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default.

#### ID (\_id) 

**Description**: The post ID.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne, hasSome  
**Read-only**: Yes

#### Category ID (categoryId) 

**Description**: Post category ID.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne  
**Read-only**: Yes

#### Owner ID (ownerId) 

**Description**: Post owner's ID.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne  
**Read-only**: Yes

#### Title (title) 

**Description**: Post title.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: No  
**Can be filtered**: eq, ne, contains, startsWith, hasSome  
**Read-only**: Yes

#### Plain Content (plainContent) 

**Description**: Plain content of the forum post.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: contains, startsWith, hasAll  
**Read-only**: Yes  

#### Best Answer Comment ID (bestAnswerCommentId) 

**Description**: ID of the comment marked as the best answer.  
**Type**: String  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne  
**Read-only**: Yes

#### Pinned (pinned) 

**Description**: Whether the post is pinned.  
**Type**: Boolean  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne  
**Read-only**: Yes

#### Commenting Disabled (commentingDisabled) 

**Description**: Whether comments are disabled for the post.  
**Type**: Boolean  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne  
**Read-only**: Yes

#### Comment Count (commentCount) 

**Description**: Number of comments on the post.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, lt, lte, gt, gte  
**Read-only**: Yes

#### Like Count (likeCount) 

**Description**: Number of likes on the post.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, lt, lte, gt, gte  
**Read-only**: Yes

#### View Count (viewCount) 

**Description**: Number of times the post has been viewed.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, lt, lte, gt, gte  
**Read-only**: Yes

#### Created Date (\_createdDate) 

**Description**: Date and time the post was created.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, lt, lte, gt, gte  
**Read-only**: Yes

#### Edited Date (\_editedDate) 

**Description**: Date and time the post was last edited.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne, lt, lte, gt, gte  
**Read-only**: Yes

#### Last Activity Date (lastActivityDate) 

**Description**: Date and time of the last activity performed on the post.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, lt, lte, gt, gte  
**Read-only**: Yes

#### Page URL (pageUrl) 

**Description**: URL of the post page.  
**Type**: URL  
**Can connect to data**: Yes, can connect as a button click action.  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Slug (slug) 

**Description**: The post's slug, which is its URL-friendly name that is unique across the forum.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: No  
**Can be filtered**: Yes  
**Read-only**: Yes

#### Post Type (postType) 

**Description**: Type of post.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne  
**Read-only**: Yes  
**Notes**: Either "DISCUSSION" or "QUESTION"