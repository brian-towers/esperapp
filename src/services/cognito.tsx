import AWS from "aws-sdk";
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_CNgGG4ONJ", // Your user pool id here
  ClientId: "302r6iec4v0gtpj6jbv04mja47", // Your client id here
};

const userPool = new CognitoUserPool(poolData);

export function signUp(email: string, password: string) {
  console.log("hola");
}
