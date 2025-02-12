import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: "ap-southeast-2_9lGZ65bFS", // Replace with your User Pool ID
  ClientId: '2iu5bgohf8rv8dhldkginhggvv'// Replace with your Client ID
};

export const userPool = new CognitoUserPool(poolData);