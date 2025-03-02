# Add a Custom Element

[Custom elements](https://dev.wix.com/docs/develop-websites/articles/wix-editor-elements/custom-elements/about-custom-elements) allow you to create advanced web components that extend beyond the standard editor elements. You can add a custom element to your site, either hosted externally or by Wix. This article guides you through the process of adding a custom element to your site.

## Wix-hosted custom element

To add a Wix-hosted custom element to your site:

1. In the editor or your local IDE, create a file in the `public/custom-elements/` directory.
1. Code the custom element according to [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) standards:
    * Define the element using class syntax.
    * Register it with `customElements.define()`.
    * Handle events and exchange data using attributes.
1. Open the editor and go to the left menu:
   * **Wix Studio**: Select **Add Elements** > **Embed & Social** > **Custom Element**.
   * **Wix Editor**: Select **Add Elements** > **Embed** > **Popular Embeds** > **Custom Element**.
1. Select the element, click **Choose Source**, and select **Velo file**.
    > **Note:** When you select **Velo file**, a `wix-default-custom-element.js` file with a sample custom element is created in your `public` files.
1. From the dropdown, select the relevant Velo file. If you don't see your file, make sure that it's located in the `public/custom-elements` directory.
1. Enter the **Tag Name** exactly as it appears in `customElements.define()`.
1. (Optional) Select the element in the editor, and click **Set Attributes** to add any attributes for handling events and data.

Your custom element is now ready to be used on your site.

## Externally hosted custom element

To add an externally hosted custom element:

1. Code the custom element according to [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) standards:
    * Define the element using class syntax.
    * Register it with `customElements.define()`.
    * Handle events and exchange data using attributes.
1. Bundle, minify, and serve your custom element with a hosting provider.
    > **Note**: Ensure the bundled JavaScript file is served over HTTPS, as Wix only accepts secure script URLs.
1. Open the editor and go to the left menu:
   * **Wix Studio**: Select **Add Elements** > **Embed & Social** > **Custom Element**.
   * **Wix Editor**: Select **Add Elements** > **Embed** > **Popular Embeds** > **Custom Element**.
1. Select the element, click **Choose Source**, and select **Server URL**.
1. Enter the full URL to the bundled JavaScript file.
1. Enter the **Tag Name** exactly as it appears in `customElements.define()`.
1. (Optional) Select the element in the editor, and click **Set Attributes** to add any attributes for handling events and data.

Your custom element is now ready to be used on your site.
