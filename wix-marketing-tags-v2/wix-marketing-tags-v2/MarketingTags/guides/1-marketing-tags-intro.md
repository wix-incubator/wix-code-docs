---
title: Introduction
---

# Introduction

&nbsp;

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

&nbsp;

> __Note__: This module is [universal](https://support.wix.com/https://www.wix.com/velo/reference/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.

With Wix Marketing Tags, you can embed marketing tags in your website. The supported marketing tags are:

* [**Google Ads Conversion tag**](https://support.google.com/tagmanager/answer/6105160?hl=en&ref_topic=6334091)
    > **Note:** The **Google Ads Conversion tag** was previously called **Google AdWords tag**.
* [**Google Analytics tag**](https://support.google.com/tagmanager/topic/6333310?hl=en&ref_topic=3002579)
    > **Note:** Both [**Google Universal Analytics tags**](https://support.google.com/tagmanager/answer/6107124?hl=en&ref_topic=6333310) and [**Google Analytics 4 tags**](https://support.google.com/tagmanager/answer/9442095?hl=en&ref_topic=6333310) are supported.
* [**Yandex Metrica tag**](https://yandex.com/support/metrica/index.html)
* [**Facebook Pixel tag**](https://developers.facebook.com/docs/facebook-pixel/)
* [**Google tag**](https://support.google.com/tagmanager/answer/6102821?hl=en&ref_topic=3441530)

These marketing tags enable you to track user activity, ad conversion rates, and more.

> **Note:** Only one marketing tag of each type is supported per Wix site.

The Marketing Tags API allows you to:

* List marketing tags
* Create and update marketing tags
* Delete marketing tags

## Import statement

To use Wix Marketing Tags,
import `{ marketingTags }` from the `wix-marketing-tags.v2` module:

```js
import { marketingTags } from 'wix-marketing-tags.v2';
```

## Terminology

* **Domain:** Specifies which website is associated with the marketing tag.
    > **Note:** When you change the domain of a Wix site, the embedded marketing tags won’t load anymore. To update the domain use the [Upsert Marketing Tag](https://www.wix.com/velo/reference/wix-marketing-tags-v2/upsert-marketing-tag) function. 
* **Tracking ID:** Specifies your external tracking ID. Learn more about each tracking ID in the corresponding object description. These are the supported external IDs:

    | Marketing Tag | External ID Name | ID Format| 
    |-|-|-|
    | Google Ads Conversion tag | Conversion ID | AW-123456789 |
    | Google Universal Analytics tag | Analytics ID | UA-12345-1 |
    | Google Analytics 4 tag | Measurement ID | G-12345  |
    | Yandex Metrica tag | Tag number | 123456789 |
    | Facebook Pixel tag | Pixel ID  | 123456789  |
    | Google tag | Tag Manager Container ID | GTM-12345 |