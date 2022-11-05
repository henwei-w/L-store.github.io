import axios from "axios";

const HTTP = axios.create({
  baseURL: "https://71bc-2001-b011-4009-1098-f4fe-a51c-1312-8ae3.jp.ngrok.io/",
  timeout: 30000
});

export default HTTP;