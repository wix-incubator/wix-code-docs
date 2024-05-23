# New Members

When a new member registers for an account on your site, they can't immediately login. They must be approved as a member (which can be set to automatic), and you may wish to have them verify their email.

You can edit these settings in your site's [dashboard](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fmember-permissions/signup-login-settings).

## Email verification
You may want to check that a new member is using their own email address, not using someone else's or a fake email address.

To run this check, require members to verify their email address once they've signed up in one of the following ways:
- In your site's [dashboard](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fmember-permissions/signup-login-settings), under **Ask new members to confirm their email**.
- Using code. [This example](https://www.wix.com/velo/example/members-area) includes email verification through code.


## Manual vs automatic approval
The [register function](https://dev.wix.com/docs/velo/api-reference/wix-members-frontend/authentication/register) behaves differently depending on your [site's member signup settings](https://dev.wix.com/docs/develop-websites/articles/code-tutorials/wix-members/enabling-custom-site-registration).

### Manual approval
When manual approval is enabled, everyone who signs up must then be approved. Immediately after signing up, a new member's `status` is `"PENDING"`.

You can approve a new member by:
- Passing the returned `approvalToken` to [`approveByToken()`](https://dev.wix.com/docs/velo/api-reference/wix-members-backend/authentication/approve-by-token) from wix-members-backend.
- Calling [`approveByEmail()`](https://dev.wix.com/docs/velo/api-reference/wix-members-backend/authentication/approve-by-email) from wix-members-backend.
- Navigating to your [site members list](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fmember-permissions/members) in your dashboard and approving the new member there.

>**Note:** If you need the `member` object, use [`register()`](https://dev.wix.com/docs/velo/api-reference/wix-members-backend/authentication/register) from wix-members-backend.

### Automatic approval
When automatic approval is enabled, everyone who signs up is approved. Immediately after signing up, a new member's `status` is `"ACTIVE"`.

The member is immediately logged in to the site.