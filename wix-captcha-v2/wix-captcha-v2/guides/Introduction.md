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

Functions in the Resources API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>

The reCAPTCHA element allows you to present a challenge-response test to site visitors to determine whether they are human or a bot. Use the reCAPTCHA element to verify that site visitors are human before allowing them perform restricted operations.

For more information on working with your reCAPTCHA element, click [here](https://support.wix.com/en/article/velo-tutorial-using-recaptcha-to-protect-data-submission).

To use the Captcha API, import `captcha` from the `wix-captcha.v2` module:

```javascript
    import captcha from 'wix-captcha.v2';   
```