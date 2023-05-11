---
title: Introduction
---

# About the External Database Connections API

The External Database Connections API enables you to connect an external database to a Wix project or site.

## Internal vs. external databases

Wix provides a comprehensive platform with integrated database capabilities. You can use the [Data Collections API](https://www.wix.com/velo/reference/wix-data-v2/collections) to create, modify, and delete data collections in a Wix project or site, and you can use the [Data Items API](https://www.wix.com/velo/reference/wix-data-v2/items) to access and manage data within those collections.

Wix's database capabilities cover a wide range of use cases for apps that need to store data. However, certain projects have very specific requirements that make it necessary to use an external database. For example, you may need to access existing data that is already stored on an external service, or you may need your data to be stored in a relational database.

Once the connection between an external database and a Wix project or site is established, you can access the collection using Wix Data APIs, including the [Data Items API](https://www.wix.com/velo/reference/wix-data-v2/items), in the same way you would with a native collection. You can also access the collection through the Content Manager.

For more information on connecting external databases with a Wix site, see [Integrating External Databases with Your Wix Site](https://support.wix.com/en/article/velo-integrating-external-databases-with-your-wix-site).

## Preparing an external database

Before the External Database Connections API can connect a Wix project or site with an external database, you need to prepare the external database by creating an [external database adaptor](https://support.wix.com/en/article/velo-integrating-external-databases-with-your-wix-site#what-is-an-external-database-adaptor).

An external database adaptor is a server that translates Wix data requests from a Wix project or site into an external database's protocol, and translates the response back into a format that Wix APIs can read. This enables Wix APIs, projects, and sites to treat the external database exactly as if it was an internal data collection.

If your database is hosted on one of the major cloud platforms, you can consult one of our tutorials for instructions on how to [deploy an external database adaptor](https://support.wix.com/en/article/velo-integrating-external-databases-with-your-wix-site#deploy-an-external-database-adaptor).

Otherwise, for details on the required specifications for an external database adaptor, see the [External Database Collections SPI](https://www.wix.com/velo/reference/spis/external-database-collections).

## Ensuring read-write access

If you want to enable read-write access to your external database using the [Data Items API](https://www.wix.com/velo/reference/wix-data-v2/items), ensure your external database's table or schema includes the following fields:
* `_id`
* `_createdDate`
* `_updatedDate`
* `_owner`
If these fields are absent, access to the external database is read-only. You may prefer this option for data that your app only needs to retrieve and doesn't need to manage.

## Supported databases

The External Database Connections API works with several kinds of databases. For a full list, see [Supported Databases](https://support.wix.com/en/article/velo-integrating-external-databases-with-your-wix-site#supported-databases).
