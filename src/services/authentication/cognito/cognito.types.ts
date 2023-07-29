/**
 * The options used to configure Cognito.
 */
export interface CognitoConfig {
  /**
   * The User Pool
   */
  UserPoolId: string;

  /**
   * The ClientId
   */
  ClientId: string;
}
