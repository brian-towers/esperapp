import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
} from "amazon-cognito-identity-js";

const poolData = {
//CREDENTIALS
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
