import axios from "axios";

const HTTP = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? window.location.origin
      : process.env.REACT_APP_URL,
  timeout: 30000,
});

export default HTTP;
