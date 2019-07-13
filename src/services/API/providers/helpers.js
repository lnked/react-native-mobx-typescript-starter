import { create } from 'apisauce';

import {
  apiUrl,
  stagingUrl,
} from '@/configs/env.json';

const BASE_URL = __DEV__ ? stagingUrl : apiUrl;

const baseConfig = {
  withCredentials: false,
};

export const baseAPI = create({
  baseURL: BASE_URL,
  ...baseConfig,
});

export const providers = [
  baseAPI,
];

providers.forEach(endpoint => endpoint.addMonitor(response => {
  const LogError = (error) => {

  };

  const wrappers = [
    LogError,
  ];

  wrappers.map(wrapper => wrapper(response));
}));


export const setHeaders = ({ authToken, userType }) =>
  providers.forEach(endpoint => endpoint.setHeaders({
    Authorization: `Token token=${authToken},user_type=${userType}`,
  }));
