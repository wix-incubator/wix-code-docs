
 
# Sample Flow
 

 
Follow this general procedure for working with API keys or other secrets using the Secrets Manager:
 
1. Get private information such as an API key from a 3rd-party service.
2. Store the private information as a new secret in the [Secrets Manager](https://support.wix.com/en/article/velo-working-with-the-secrets-manager) in your site's dashboard or with the [`createSecret()`](/wix-secrets-backend/createsecret) function. Assign a name to the secret.
3. In your backend code, instead of hardcoding the API key, use the [`getSecret()`](/wix-secrets-backend/getsecret) function with the secret name assigned in the Secrets Manager. When the code runs, the value of the secret is extracted from the Secrets Manager.
