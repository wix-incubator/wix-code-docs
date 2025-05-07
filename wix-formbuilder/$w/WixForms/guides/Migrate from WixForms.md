# Migrate from `WixForms` to `WixFormsV2`
As of April 2025, [`WixForms`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/introduction) is deprecated and any new forms created will only work with [`WixFormsV2`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms-v2/introduction). You can access the functionality of [`WixForms`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/introduction) using [`WixFormsV2`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms-v2/introduction).

Old forms will only work with the old APIs: [`WixForms`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/introduction), [`WixFormSubmitEvent`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-form-submit-event/wix-form-fields), [`WixFormSubmittedErrorEvent`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-form-submitted-error-event/code), and [`WixFormSubmittedEvent`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-form-submitted-event/wix-form-field). You can see which forms are old forms and which are new forms by looking at the forms and submissions page in a site dashboard, where there's a tab for each.

Below is a list of the deprecated [`WixForms`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/introduction) components and functions and their alternatives in `WixFormsV2`.

### [`collapsed`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/collapsed)
Instead of `collapsed` from [`WixForms`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/collapsed), use [`collapsed`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms-v2/collapsed) from `WixFormsV2`.

### [`hidden`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/hidden)
Instead of `hidden` from [`WixForms`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/hidden), use [`hidden`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms-v2/hidden) from `WixFormsV2`.


### [`isVisible`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/is-visible)
Instead of `isVisible` from [`WixForms`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/is-visible), use [`isVisible`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms-v2/is-visible) from `WixFormsV2`.

### [`onWixFormSubmit()`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/on-wix-form-submit)
Instead of adding `onWixFormSubmit()` from [`WixForms`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/on-wix-form-submit) to run when a site visitor starts to submit a Wix Form yet before the form is actually submitted and sent to the server, use [`onSubmit()`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms-v2/on-submit) from `WixFormsV2`.

### [`onWixFormSubmitted()`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/on-wix-form-submitted)
Instead of adding `onWixFormSubmitted()` from [`WixForms`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/on-wix-form-submitted) to run when a site visitor submits a Wix Form and it is successfully received by the server, use [`onSubmitSuccess()`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms-v2/on-submit-success) from `WixFormsV2`.

### [`onWixFormSubmittedError()`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/on-wix-form-submitted-error)
Instead of adding `onWixFormSubmittedError()` from [`WixForms`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/on-wix-form-submitted-error) to run when a site visitor is not able to successfully submit a Wix Form to the server, use [`onSubmitFailure()`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms-v2/on-submit-failure) from `WixFormsV2`.

### [`collapse()`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/collapse)
Instead of calling `collapse()` from [`WixForms`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/collapse) to collapse an element and sets its `collapsed` property to `true`, use [`collapse()`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms-v2/collapse) from `WixFormsV2`.

### [`expand()`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/expand)
Instead of calling `expand()` from [`WixForms`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/expand) to expand an element and sets its `collapsed` property to `false`, use [`expand()`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms-v2/expand) from `WixFormsV2`.


### [`hide()`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/hide)
Instead of calling `hide()` from [`WixForms`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/hide) to hide an element and sets its `hidden` property to `true`, use [`hide()`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms-v2/hide) from `WixFormsV2`.

### [`show()`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/show)
Instead of calling `show()` from [`WixForms`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms/show) to show an element and sets its `hidden` property to `false`, use [`show()`](https://dev.wix.com/docs/velo/velo-only-apis/$w/wix-forms-v2/show) from `WixFormsV2`.
