import axios from "axios";

const Api = () => {
  const defaultOptions = {
    baseURL: process.env.REACT_APP_URL_API_CHECKOUT,
    headers: {
      "Content-Type": "application/json",
    },
  };

  let instance = axios.create(defaultOptions);

  instance.interceptors.request.use(
    async (config) => {
      const token_mock =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token_mock}`,
      };

      return config;
    },
    (error) => Promise.reject(error)
  );

  return instance;
};

export default Api();
