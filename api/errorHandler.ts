import { type AxiosError } from 'axios';

export const handle1xxErrors = (error: AxiosError): void => {
  console.log(error.message);
};

export const handle3xxErrors = (error: AxiosError): void => {
  console.log(error.message);
};

export const handle4xxErrors = (error: AxiosError): void => {
  console.log(error.message);
};

export const handle5xxErrors = (error: AxiosError): void => {
  console.log(error.message);
};

export const handleUnknownErrors = (error: AxiosError): void => {
  console.log(error);
};
