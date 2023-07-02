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

The Reviews API provides functionality for managing your site's reviews, including creating, deleting, querying, and updating reviews.

## Before you begin

To use the Reviews API, import `reviews` from the `wix-reviews.v2` module:

```javascript
    import reviews from 'wix-reviews.v2';   
```

## Terminology

- **Review**: A site visitor's review about an entity, for example, a Wix Stores product with a rating.
- **Rating**: A site visitor can give a rating score between 1 and 5 in addition to a written review.
- **Helpfulness**: How helpful this review was for site visitors.
- **Reply**: A site owner or moderator can reply to a review via the Dashboard.

## Review Authors

Review authors create reviews either as visitors or as contacts. When a review author creates a review as a visitor with [`createReviewAndContact`](https://www.wix.com/velo/reference/wix-reviews-v2/reviews/createReviewAndContact), they're converted to a contact. Once this happens, the author creates reviews using their contact ID with [`createReview`](https://www.wix.com/velo/reference/wix-reviews-v2/reviews/createReview). 

## Integration with Ratings
 
 The Reviews API is integrated with the Ratings API. This means that a rating scale is automatically part of a review page in addition to a review description section. Site owners who add a Reviews app to their site don't need to add Ratings. 