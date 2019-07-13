import RCTNetworking from 'RCTNetworking';

import {
  baseAPI,
  setHeaders,
} from './helpers';

export const createSession = ({ email, password }) =>
  baseAPI.post('/sessions', {
    email,
    password,
  });

export const userAuth = async ({ authToken, userType, token }) => {
  RCTNetworking.clearCookies(() => {});

  await setHeaders({
    authToken,
    userType,
  });

  return baseAPI.get(`/users/${token}`);
};
