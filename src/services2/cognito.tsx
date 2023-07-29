import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: import.meta.env.VITE_USERPOOL_ID,
  ClientId: import.meta.env.VITE_CLIENT_ID,
};

const userPool = new CognitoUserPool(poolData);

/**
 *
 * @param email
 * @param password
 * @returns
 */
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
      alert(JSON.stringify(User));
      resolve(User);
      return;
    });
  });
}

/**
 *
 * @param email
 * @param password
 * @returns
 */
export function signIn(email: string, password: string) {
  const authenticationData = {
    Username: email,
    Password: password,
  };
  const authenticationDetails = new AuthenticationDetails(authenticationData);

  const userPool = new CognitoUserPool(poolData);
  const userData = {
    Username: email,
    Pool: userPool,
  };
  const cognitoUser = new CognitoUser(userData);
  return new Promise(function (resolve, reject) {
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        const accessToken = result.getAccessToken().getJwtToken();
        resolve(accessToken);
        console.log(accessToken);
      },
      onFailure: function (err) {
        alert(err.message || JSON.stringify(err));
        reject(err.message);
      },
    });
  });
}

/**
 *
 * @param email
 * @param code
 */
export function confirmRegistration(email: string, code: string) {
  const userData = {
    Username: email,
    Pool: userPool,
  };
  const cognitoUser = new CognitoUser(userData);
  cognitoUser.confirmRegistration(code, true, function (err, result) {
    if (err) {
      alert(err.message || JSON.stringify(err));
      return;
    }
    console.log("call result: " + result);
  });
}
