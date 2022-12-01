import HTTP from "services/index";
import { useDispatch } from "react-redux";
import { setToken } from "../reducer/userStateSlice";

const dispatch = useDispatch;

export const login = (payload) =>
  HTTP.post("/api/v1/login/", {
    username: payload.username,
    password: payload.password,
  })
    .then(function (response) {
      if (response.data.token) {
        dispatch(
          setToken({ token: response.data.token, username: payload.username })
        );
        window.location.href = "/#/backstage/product";
        alert("登入成功！");
      }
    })
    .catch(function (error) {
      alert("帳號或密碼錯誤！");
    });

export const register = (payload) =>
  HTTP.post("/api/v1/register/", {
    username: payload.username,
    email: payload.email,
    password: payload.password,
  })
    .then(function (response) {
      if (response.data.token) {
        dispatch(
          setToken({ token: response.data.token, username: payload.username })
        );
        window.location.href = "/#/backstage/product";
        alert("註冊成功！");
      }
    })
    .catch(function (error) {
      console.log(error);
    });

export const getProductList = () =>
  HTTP.get("/api/v1/productList/")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

export const addProduct = (formData) =>
  HTTP.post("/api/v1/product/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

export const editProduct = (formData) =>
  HTTP.post("/api/v1/productEdit/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
