import { createSlice } from "@reduxjs/toolkit";

export const userStateSlice = createSlice({
  name: "userState",
  initialState: {
    value: {
      data: sessionStorage.getItem("token"),
      username: sessionStorage.getItem("username"),
    },
  },
  reducers: {
    removeToken: (state) => {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("username");
      state.value.data = sessionStorage.getItem("token");
      state.value.username = sessionStorage.getItem("username");
      window.location.href = "/#/";
      window.location.reload();
    },
  },
});

export const { removeToken } = userStateSlice.actions;

export default userStateSlice.reducer;
