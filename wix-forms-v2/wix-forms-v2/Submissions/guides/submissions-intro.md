---
title: Introduction
---

# Introduction

<!--
> **Note:**
> This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.
--> 

The Submissions API allows you to create and manage the submissions made on a form. 

With the Submissions API, you can:
- [Query](wix-forms-v2/submissions/querysubmissionsbynamespace) and [manage](wix-forms-v2/submissions/createsubmission) a submission.
- [Retrieve](wix-forms-v2/submissions/countsubmission) the total number of submissions per form.
- [Confirm](wix-forms-v2/submissions/confirmsubmission) a submission or [mark](wix-forms-v2/submissions/bulkmarksubmissionsasseen) submissions as seen. 
- Retrieve a [media upload file](wix-forms-v2/submissions/getmediauploadurl) URL to use in a submission for forms that include a field for uploading files. 

## Submission lifecycle

When submitting a form:

1. Call the [`createSubmission()`](https://www.wix.com/velo/reference/wix-forms-v2/submissions/createsubmission) function and pass the form field values of a particular form.
1. `createSubmission()` forwards the form field values to the server.
1. The server proceeds to validate the submission:
    If the validation is successful:
    1. `createSubmission()` submits the form.
    1. Records the submission into the WixForms collection.
    If the validation fails:
    1. The server throws an error, which is then passed to the API.
    1. The submission process is aborted.
 
## Before you begin

It’s important to note the following points before starting to code:
- The Submissions API is only available in Wix Studio and Editor X.
- There are several apps that use forms:
    - Wix Forms: site visitors can submit their contact information to send message to a company, or to subscribe to a newsletter.
    - Wix Pricing Plans: forms can be used for online orders, site visitors can submit their contact info and address during the checkout.
    - Wix Online Programs: forms can be used as quizzes.
- You must first have a form on your site in order to manage Submissions.
- To use the Submissions API, import `{ submissions }` from the `wix-forms.v2` module. 

```javascript
import { submissions } from 'wix-forms.v2';
```


## Terminology

- **Submission:** Data received when a form is submitted by a site visitor. 
- **Submissions Table:** A table in the dashboard that records submissions to a form. 
- **Media Upload URL:** A URL used to upload a file to a form. 
