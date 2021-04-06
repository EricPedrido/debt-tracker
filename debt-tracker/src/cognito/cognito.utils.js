import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "ap-southeast-2_zm1Juk8zH",
  ClientId: "6i0mtktogmak7182inbre2hafi",
};

const UserPool = new CognitoUserPool(poolData);

export const cognitoSignUp = async (email, password) =>
  await new Promise((resolve, reject) => {
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

export const cognitoAuthenticateUser = async (Username, Password) =>
  await new Promise((resolve, reject) => {
    const user = new CognitoUser({
      Username,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username,
      Password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        resolve(data);
      },
      onFailure: (err) => {
        reject(err);
      },
      newPasswordRequired: (data) => {
        resolve(data);
      },
    });
  });

export const getCurrentUserSession = async () =>
  await new Promise((resolve, reject) => {
    const user = UserPool.getCurrentUser();

    if (user) {
      user.getSession((err, session) => {
        if (err) {
          reject(err);
        } else {
          resolve(session);
        }
      });
    } else {
      reject();
    }
  });

export const cognitoSignOut = () => {
  const user = UserPool.getCurrentUser();

  if (user) {
    user.signOut();
  }
};
