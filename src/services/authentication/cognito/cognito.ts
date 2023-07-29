import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser,
} from "amazon-cognito-identity-js";
import { CognitoConfig } from "./cognito.types";

export const DEFAULT_COGNITO_CONFIG: CognitoConfig = {
  UserPoolId: "us-east-1_CNgGG4ONJ",
  ClientId: "3d0l56j0gp422qhof3as06abgk",
};

class Cognito {
  poolData: CognitoConfig;
  userPool: CognitoUserPool;

  constructor(config: CognitoConfig = DEFAULT_COGNITO_CONFIG) {
    console.log(config.UserPoolId, config.ClientId);
    this.poolData = config;
    this.userPool = new CognitoUserPool(this.poolData);
  }

  // REGISTER USER
  async register(userData: { email: string; password: string }) {
    this.userPool.signUp(
      userData.email,
      userData.password,
      [],
      [],
      function (err: { message: string }, result: { user: any }) {
        if (err) {
          alert(err.message || JSON.stringify(err));
          return;
        }
        const cognitoUser = result.user;
        console.log("user name is " + cognitoUser.getUsername());
      }
    );
  }

  // CONFIRM REGISTRATION
  async confirmRegistration() {
    const userData = {
      Username: "username",
      Pool: this.userPool,
    };

    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration("123456", true, function (err, result) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log("call result: " + result);
    });
  }

  // RESEND CONFIRMATION
  async resendConfirmationCode() {
    const userData = {
      Username: "username",
      Pool: this.userPool,
    };

    const cognitoUser = new CognitoUser(userData);
    cognitoUser.resendConfirmationCode(function (err, result) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log("call result: " + result);
    });
  }

  // LOGIN USER
  async login(credentials: {
    username: string;
    password: string;
  }): Promise<any> {
    console.log(credentials.username, credentials.password);
    return new Promise((resolve, reject) => {
      const authenticationData = {
        Username: credentials.username,
        Password: credentials.password,
      };
      const authenticationDetails = new AuthenticationDetails(
        authenticationData
      );

      const userData = {
        Username: credentials.username,
        Pool: this.userPool,
      };

      const cognitoUser = new CognitoUser(userData);
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          const accessToken = result.getAccessToken().getJwtToken();
          resolve(accessToken);
          // POTENTIAL: Region needs to be set if not already set previously elsewhere.
          // AWS.config.region = "<region>"

          // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          //   IdentityPoolId: "...", // your identity pool id here
          //   Logins: {
          //     // Change the key below according to the specific region your user pool is in.
          //     "cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID>": result
          //       .getIdToken()
          //       .getJwtToken(),
          //   },
          // })

          // //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
          // AWS.config.credentials.refresh((error) => {
          //   if (error) {
          //     console.error(error)
          //   } else {
          //     // Instantiate aws sdk service objects now that the credentials have been updated.
          //     // example: var s3 = new AWS.S3();
          //     console.log("Successfully logged!")
          //   }
          // })
        },

        onFailure: function (err) {
          alert(err.message || JSON.stringify(err));
          reject(JSON.stringify(err));
        },
      });
    });
  }

  // CHANGE PASSWORD
  async changePassword() {
    const userData = {
      Username: "username",
      Pool: this.userPool,
    };

    const cognitoUser = new CognitoUser(userData);
    cognitoUser.changePassword(
      "oldPassword",
      "newPassword",
      function (err, result) {
        if (err) {
          alert(err.message || JSON.stringify(err));
          return;
        }
        console.log("call result: " + result);
      }
    );
  }

  // LOGOUT
  async logout() {
    const userData = {
      Username: "username",
      Pool: this.userPool,
    };

    const cognitoUser = new CognitoUser(userData);
    cognitoUser.signOut();
  }
}

export const cognito = new Cognito();
