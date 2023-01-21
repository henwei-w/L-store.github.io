import HTTP from "services/index";

export const login = (payload) =>
  HTTP.post("/api/v1/login/", {
    username: payload.username,
    password: payload.password,
  })
    .then(function (response) {
      if (response.data.token) {
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("username", payload.username);
        window.location.href = "/#/backstage/product";
        window.location.reload();
      }
    })
    .catch(function (error) {
      payload.error();
    });

export const register = (payload) =>
  HTTP.post("/api/v1/register/", {
    username: payload.username,
    email: payload.email,
    password: payload.password,
  })
    .then(function (response) {
      if (response.data.token) {
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("username", payload.username);
        window.location.href = "/#/backstage/product";
        window.location.reload();
      }
    })
    .catch(function (error) {
      payload.error();
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
