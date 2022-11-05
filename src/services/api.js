import HTTP from "services/index";

export const login = (payload) =>
  HTTP.post(
    "/api/v1/login/",
    {
      username: payload.username,
      password: payload.password,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

export const register = (payload) =>
  HTTP.post(
    "/register/",
    JSON.stringify({
      username: payload.username,
      email: payload.email,
      password: payload.password,
    })
  )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
