

# "Categories" Collection Fields







This document describes the permissions and fields in your Categories collection. 

### Permissions 

The Categories collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Anyone
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the Categories collection's permissions. 

### Fields 

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default.

#### ID (\_id) 

**Description**: The category ID.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne, hasSome  
**Read-only**: Yes

#### Parent ID (parentId) 

**Description**: ID of the parent category (for subcategories).  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne  
**Read-only**: Yes

#### Name (name) 

**Description**: Category name.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: No  
**Can be filtered**: eq, ne, contains, startsWith, hasSome  
**Read-only**: Yes

#### Header Title (headerTitle) 

**Description**: Title in the category header.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: No  
**Can be filtered**: eq, ne, contains, startsWith, hasSome  
**Read-only**: Yes

#### Description (description) 

**Description**: Description in the category header.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: contains, startsWith, hasAll  
**Read-only**: Yes

#### Header Type (headerType) 

**Description**: Type of category header.  
**Type**: String  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne  
**Read-only**: Yes  
**Notes**: Either "COLOR" or "IMAGE".

#### Header Image (headerImage) 

**Description**: Header Image.  
**Type**: Image  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Header Image Overlay Color (headerImageOverlayColor) 

**Description**: Header image overlay color.  
**Type**: Text  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Header Background Color (headerBackgroundColor) 

**Description**: Header background color.  
**Type**: Text  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Header Text Color (headerTextColor) 

**Description**: Header text color.  
**Type**: No  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Rank (rank) 

**Description**: Category order, where 0 indicates the first category.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, lt, lte, gt, gte  
**Read-only**: Yes

#### Post Count (postCount) 

**Description**: Number of posts in the category.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, lt, lte, gt, gte  
**Read-only**: Yes

#### Post View Count (postViewCount) 

**Description**: Number of times the posts in the category have been viewed.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, lt, lte, gt, gte  
**Read-only**: Yes

#### Write Protection 

**Description**:   
**Type**: Boolean  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No   
**Can be filtered**: No   
**Read-only**: Yes

#### Page URL (pageUrl) 

**Description**: URL of the category page.  
**Type**: URL  
**Can connect to data**: Yes, can connect as a button click action.  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Slug (slug) 

**Description**: The category's slug, which is its URL-friendly name that is unique across the forum.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: No  
**Can be filtered**: Yes  
**Read-only**: Yes