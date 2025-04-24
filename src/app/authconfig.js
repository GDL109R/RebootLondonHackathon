export const msalConfig = {
    auth: {
      clientId: "8bbfe0d0-f3ed-44f0-8b80-92be28ad0d51", // Application (client) ID
      authority: "https://login.microsoftonline.com/53e0b897-97cd-48e2-8d7e-4540fd39d742", // Directory (tenant) ID
      redirectUri: "https://lloydslink2.delightfulsky-983f0008.westus2.azurecontainerapps.io/", // or your deployed URL
    },
    cache: {
      cacheLocation: "sessionStorage", // Can also use "localStorage"
      storeAuthStateInCookie: false,   // Recommended for single-page apps
    }
  };
  
  // Scope format for calling AI Foundry backend with app ID URI (needs to be registered in "Expose an API")
  export const loginRequest = {
    scopes: ["api://8bbfe0d0-f3ed-44f0-8b80-92be28ad0d51/access_as_user"]
  };
  