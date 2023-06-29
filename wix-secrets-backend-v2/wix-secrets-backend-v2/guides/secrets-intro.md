---
title: Introduction
---

# About the Wix Secrets API
&nbsp;

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

&nbsp;
&nbsp;

The Wix Secrets Backend v2 API contains functionality for managing secrets on your site. Secrets managed by this API are available in the [Secrets Manager](https://support.wix.com/en/article/velo-working-with-the-secrets-manager) section of your site's dashboard. You can securely store API keys and other secrets on your site. Each secret's value is encrypted, and assigned a name of your choice and an ID. You can then use the name or ID to refer to the secret in your backend code rather than hardcoding its value.

Learn more [about Velo's Secrets Manager](https://support.wix.com/en/article/velo-about-the-secrets-manager).


With the Secrets API, you can safely:

- [Create](wix-secrets-backend-v2/secrets/createsecret) a secret.
- [Delete](wix-secrets-backend-v2/secrets/deletesecret) a secret.
- [Update](wix-secrets-backend-v2/secrets/updatesecret) a secret.
- [Retrieve](wix-secrets-backend-v2/secrets/getsecretvalue) a secret value.
- [Retrieve other information](wix-secrets-backend-v2/secrets/listsecretinfo) about your secrets, such as their names and descriptions.

To use the Secrets API, import `{ secrets }` from the `wix-secrets-backend.v2` module:
```javascript
import { secrets } from 'wix-secrets-backend.v2';
```

Learn more about the Wix Secrets API in [Secrets Manager](/getting-started/integration-with-third-party-services_secrets-manager) in the Velo API Reference, and on [Wix Learn](https://www.wix.com/learn/online-course/coding-with-velo/velo-backend#secure-api-keys).

## Before you begin
It's important to note the following:

- You must set up a [Members Area](https://support.wix.com/en/article/site-members-adding-and-setting-up-a-members-area), before you can create or manage secrets with the Secrets API. The Members Area isn't required to retrieve secrets with [`getSecretValue()`](wix-secrets-backend-v2/secrets/getsecretvalue).
- Deleting a secret, or modifying a secret's name or value, breaks all code using the secret.
- You can't create or rename a secret with a name that's already in use.

**Security considerations**
- If you currently use private keys in your code, we recommend removing them. You can either create a secret with the Secrets API or the [Functional Testing](https://support.wix.com/en/article/velo-functional-testing-in-the-backend) tool.
- To prevent malicious users from accessing the values of your secrets, use them only in backend code. Avoid using secret values in frontend code.
- Do not use [`listSecretInfo()`](#wix-secrets-backend-v2/secrets/listsecretinfo) in a **.jsw** file with anonymous permissions. This is a serious security risk which exposes your secrets to potential leaks. To prevent this, implement `listSecretInfo()` in a separate **.js** file to block frontend access. If you must include `listSecretInfo()` in a **.jsw** file, make sure the exported function has [permissions set](https://support.wix.com/en/article/velo-about-web-module-permissions) to **Admin**. ",


## Permissions information

The following functions in Secrets are restricted and only run if you elevate permissions
using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate)
function:

- [`deleteSecret()`](wix-secrets-backend-v2/secrets/deletesecret)
- [`getSecretValue()`](wix-secrets-backend-v2/secrets/getsecretvalue)
- [`listSecretInfo()`](wix-secrets-backend-v2/secrets/listsecretinfo)
- [`updateSecret()`](wix-secrets-backend-v2/secrets/updatesecret)


<blockquote class='warning'>
<p>
<strong>Warning:</strong>
Elevating a function allows it to be called by any site visitor.
Exercise caution to prevent security vulnerabilities.
</p>
</blockquote>


## Terminology
- **Secret**: Secrets are values that you don’t want to be publicly accessible, such as login credentials or API keys.
- **API key**: An API (Application Programming Interface) key is a unique code used to authenticate a user or program when making a call to an API. 