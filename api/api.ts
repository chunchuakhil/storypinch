import axios, { type AxiosError } from 'axios';

import {
  handle1xxErrors,
  handle3xxErrors,
  handle4xxErrors,
  handle5xxErrors,
  handleUnknownErrors,
} from './errorHandler';

// TODO : need to move inside .env
// const AUTH_API = 'https://dummyjson.com/auth/login';
const QUIZ_API = 'https://opentdb.com';
// const STORY_API = '';

export const api = axios.create({
  baseURL: QUIZ_API,
  timeout: 2000,
});

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  async function (error) {
    // Do something with request error
    return await Promise.reject(error);
  },
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error: AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const statusCode = error?.response?.status;

    switch (true) {
      case statusCode !== undefined:
        if (statusCode >= 100 && statusCode <= 199) {
          handle1xxErrors(error);
        } else if (statusCode >= 300 && statusCode <= 399) {
          handle3xxErrors(error);
        } else if (statusCode >= 400 && statusCode <= 499) {
          handle4xxErrors(error);
        } else if (statusCode >= 500 && statusCode <= 599) {
          handle5xxErrors(error);
        } else {
          handleUnknownErrors(error);
        }
        break;
      default:
        // Handle any other unhandled errors
        handleUnknownErrors(error);
        break;
    }

    return await Promise.reject(error);
  },
);
