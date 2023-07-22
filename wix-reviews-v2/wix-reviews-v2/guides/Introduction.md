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

The Reviews API provides functionality for managing your site's reviews, including creating, deleting, querying, and updating reviews. 


## Permissions information

The following functions in the Reviews API are restricted and only run if you elevate permissions
using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate)
function:

[updateReviews](https://www.wix.com/velo/reference/wix-reviews-v2/reviews/updatereview)

<blockquote class='warning'>
<p>
<strong>Warning:</strong>
Elevating a function allows it to be called by any site visitor.
Exercise caution to prevent security vulnerabilities.
</p>
</blockquote>

## Before you begin

To use the Reviews API, import `reviews` from the `wix-reviews.v2` module:

```javascript
    import reviews from 'wix-reviews.v2';   
```

It's important to note the following points before starting to code:
- A [`contactId`](https://www.wix.com/velo/reference/wix-crm-v2/contacts) is required to create a review. If the author is already listed as a contact, use [Create Review](https://www.wix.com/velo/reference/wix-reviews-v2/reviews/create-review). If the author is not yet a site contact, use [Create Review and Contact](https://www.wix.com/velo/reference/wix-reviews-v2/reviews/create-review-and-contact). 
- A review author is limited to one review per entity. Duplicate reviews receive an error response.
- Moderation for reviews is available only in the [Dashboard](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Freviews/published), not through the API. Learn more about [managing reviews](https://support.wix.com/en/article/wix-stores-managing-wix-reviews).
- Replying to a review is available only in the [Dashboard](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Freviews/pending). 

## Moderation of Reviews

You can adjust moderation settings so that reviews aren't immediately published to your site. Moderation can be set as required if a review contains any of the following:
- Images or video.
- One or more specified spam words.
- Specific ratings scores, for example, to moderate all reviews that are rated 1 or 2. 

## Terminology

| Term | Definition |
|---------------|-------------------------|
| Entity | The entity to review. For example, a Wix Stores product. |
| Namespace | The Wix module that the Reviews API is integrated with. Currently only Wix Stores. |
| Rating | An author can give a rating score between 1 and 5. The rating is displayed with the site review. |
| Helpfulness | Site visitors can indicate whether a review was helpful or not. `helpfulness` is calculated by subtracting `foundUnhelpful` from `foundHelpful`. |
| Reply | A direct reply to a review that was left on the site. The reply is displayed with the review. |
