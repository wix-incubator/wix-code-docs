---
title: Introduction
---

# About the Data Collections API

&nbsp;

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

&nbsp;

The Data Collections API enables you to create, delete, and modify the structure of data collections in a Wix site.

## Data collections and their structure
Wix sites store data in collections.
A collection determines the structure of the data to be stored, defining the fields each item should contain and the data type of each field.
You can [create and modify collections](https://support.wix.com/en/article/content-manager-creating-a-collection) for a site using the Content Manager.
With the Data Collections API, you can also use code to create, modify, and delete collections in a Wix site.
You can then store and retrieve data in these collections using [`wix-data`](https://www.wix.com/velo/reference/wix-data).

**Note:**
The structure you define for a data collection isn't enforced. This means that if you add or update an item containing a field or data type that doesn't match the collection's structure, your data is stored anyway.

## Permissions

Access to a data collection is controlled by its permissions. These permissions are defined in the collection object and they specify which types of user can perform actions on the data contained in the collection.

Wix Data recognizes 4 roles: 
* `ADMIN`: The site owner.
* `SITE_MEMBER_AUTHOR`: A signed-in user who has added content to the collection.
* `SITE MEMBER`: Any signed-in user.
* `ANYONE`: Any site visitor.

For each of the 4 basic actions (inserting, updating, removing, and reading content) the minimal role required must be set. For example, if you want to allow only site members to view data, and only the site owner to insert, update, and remove data, declare your permissions as follows:
* `insert`: `ADMIN`
* `update`: `ADMIN`
* `remove`: `ADMIN`
* `read`: `SITE_MEMBER`