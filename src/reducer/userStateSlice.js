import { createSlice } from "@reduxjs/toolkit";

export const userStateSlice = createSlice({
  name: "userState",
  initialState: {
    value: {
      data: sessionStorage.getItem("token"),
      username: "",
    },
  },
  reducers: {
    setToken: (state, action) => {
      sessionStorage.setItem("token", action.payload.token);
      state.value.data = sessionStorage.getItem("token");
      state.value.username = action.payload.username;
    },
    removeToken: (state) => {
      sessionStorage.removeItem("token");
      state.value.data = sessionStorage.getItem("token");
      state.value.username = "";
    },
  },
});

export const { setToken, removeToken } = userStateSlice.actions;

export default userStateSlice.reducer;
