import axios from 'axios';


const BACKEND_URL = 'https://7.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
};

const token = localStorage.getItem('token') ?? '';

export const createAPI = (onUnauthorized, notFound) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });

  const onSuccess = (response) => {
    if (response.data.token) {
      api.defaults.headers = {'x-token': response.data.token};
    }

    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    }

    if (!response.ok && response.status !== HttpCode.UNAUTHORIZED) {
      notFound();
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
