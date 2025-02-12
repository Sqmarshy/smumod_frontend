import { CognitoUser, AuthenticationDetails, CognitoUserSession } from 'amazon-cognito-identity-js';
import { userPool } from './congnitoConfig.ts';
  
export const authenticateUser = (email: string, password: string): Promise<CognitoUserSession> => {
return new Promise((resolve, reject) => {
    const user = new CognitoUser({
    Username: email,
    Pool: userPool
    });

    const authDetails = new AuthenticationDetails({
    Username: email,
    Password: password
    });

    user.authenticateUser(authDetails, {
    onSuccess: (session) => {
        resolve(session);
    },
    onFailure: (err) => {
        reject(err);
    },
    newPasswordRequired: (userAttributes, requiredAttributes) => {
        // Handle new password required scenario
        reject(new Error('New password required'));
    }
    });
});
};