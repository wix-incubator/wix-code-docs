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

<!--
> **Note:**
> This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.
--> 

The Form Submissions API allows you to create and manage the submissions made on a form. 

With the Form Submissions API, you can:
- [Query](wix-forms-v2/submissions/querysubmissionsbynamespace) and [manage](wix-forms-v2/submissions/createsubmission) a submission.
- [Retrieve](wix-forms-v2/submissions/countsubmission) the total number of submissions per form.
- [Confirm](wix-forms-v2/submissions/confirmsubmission) a submission or [mark](wix-forms-v2/submissions/bulkmarksubmissionsasseen) submissions as seen. 
- Retrieve a [media upload file](wix-forms-v2/submissions/getmediauploadurl) URL to use in a submission for forms that include a field for uploading files. 


To use the Form Submissions API, import `{ submissions }` from the `wix-forms.v2` module. 

```javascript
import { submissions } from 'wix-forms.v2';
```

## Before you begin

It’s important to note the following points before starting to code:
- You must first have a form on your site in order to manage form submissions.  


## Terminology

- **Submission:** Data received when a form is submitted by a site visitor. 
- **Submissions Table:** A table in the dashboard that records submissions to a form. 
- **Media Upload URL:** A URL used to upload a file to a form. 
