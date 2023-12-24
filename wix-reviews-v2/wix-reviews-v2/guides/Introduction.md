---
title: Introduction
---

# About the Reviews API

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

With the Reviews API you can manage reviews for a site's services, content, or products. The review object holds the content of the review, a rating score, images or video media, and information about the author. Learn more about [Wix Reviews](https://support.wix.com/en/article/wix-stores-adding-and-setting-up-wix-reviews).

The Wix Reviews API allows the site to:

- Import reviews from other sites and export reviews to other sites.
- Retrieve and display positive review data. Use the [Media API](https://www.wix.com/velo/reference/wix-media-v2) to retrieve associated review media.
- Retrieve negative review data enabling site owners to respond effectively.

## Moderation

If moderation is turned on, reviews are checked for content that requires moderation. If moderation is required, the review remains pending until the site owner rejects or approves it in the site's [Dashboard](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Freviews/pending). 
The site owner can configure moderation settings in the site's [Dashboard](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Freviews/settings/moderation).  Learn more about [managing reviews](https://support.wix.com/en/article/wix-stores-managing-wix-reviews).

## Before you begin
It’s important to note the following points before starting to code:

- Every review needs a contact.
- A review author is limited to one review per entity. Duplicate reviews receive an error response.
- Replying to a review is available only in the site owner's [Dashboard](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Freviews/pending).

To use the Reviews API, import `{ reviews }` from the `wix-reviews.v2` module:

```js
import { reviews } from `wix-reviews.v2`; 
```

## Terminology

- **Entity**: The entity to review. For example, a Wix Stores product.  
- **Namespace**: The Wix module that the Reviews API is integrated with. Currently only Wix Stores.
- **Rating**: The rating score for the review item. An author can give a rating score between 1 and 5. The rating is displayed with the site review.  
- **Helpfulness**: Helpfulness is the overall helpfulness score calculated by subtracting Found Unhelpful from Found Helpful. Site visitors can indicate whether a review was helpful or not.  
- **Reply**: A direct reply to a review that was left on the site. The reply is displayed with the review.  