// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'x883leht9d'



export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-hp2a8-2o.us.auth0.com',            // Auth0 domain
          // Auth0 client id
  clientId: '2nJmygTUV0EwlDsSBHDI2I8O7rTlqRAx',
  callbackUrl: 'http://localhost:3000/callback'
}
