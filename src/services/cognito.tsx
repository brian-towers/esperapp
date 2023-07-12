import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: import.meta.env.VITE_USERPOOLID, // Your user pool id here
  ClientId: import.meta.env.VITE_CLIENTID, // Your client id here
};

const userPool = new CognitoUserPool(poolData);

export function signUp(email: string, password: string) {
  const attributes = [
    new CognitoUserAttribute({
      Name: "email",
      Value: email,
    }),
  ];
  return new Promise(function (resolve, reject) {
    userPool.signUp(email, password, attributes, [], function (err, result) {
      if (err) {
        reject(err);
        return;
      }
      const User = result?.user;
      resolve(User);
      return;
    });
  });
}

export function signIn(email: string, password: string) {
  var userData = {
    Username: email,
    Pool: userPool,
  };

  var authenticationData = {
    Username: email,
    Password: password,
  };
  var authenticationDetails = new AuthenticationDetails(authenticationData);

  var cognitoUser = new CognitoUser(userData);

  return new Promise(function (resolve, reject) {
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        var accessToken = result.getAccessToken().getJwtToken();

        console.log(accessToken);

        // //POTENTIAL: Region needs to be set if not already set previously elsewhere.
        // AWS.config.region = "<region>";

        // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        //   IdentityPoolId: "...", // your identity pool id here
        //   Logins: {
        //     // Change the key below according to the specific region your user pool is in.
        //     "cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID>": result
        //       .getIdToken()
        //       .getJwtToken(),
        //   },
        // });

        // //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
        // AWS.config.credentials.refresh((error) => {
        //   if (error) {
        //     console.error(error);
        //   } else {
        //     // Instantiate aws sdk service objects now that the credentials have been updated.
        //     // example: var s3 = new AWS.S3();
        //     console.log("Successfully logged!");
        //   }
        // });
      },

      onFailure: function (err) {
        alert(err.message || JSON.stringify(err));
      },
    });
  });
}
