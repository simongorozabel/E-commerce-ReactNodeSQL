import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../services/auth/login";

export const emptyState = {
  id: "",
  token: "",
  fullName: "",
  email: "",
  isLogged: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: localStorage.getItem("sessionData")
    ? JSON.parse(localStorage.getItem("sessionData"))
    : emptyState,
  reducers: {
    updateUserData(state, action) {
      const newUserData = action.payload;

      state.id = newUserData.id;
      state.fullName = newUserData.fullName;
      state.email = newUserData.email;

      const noProxyCopyState = { ...state };
      localStorage.setItem("sessionData", JSON.stringify(noProxyCopyState));
    },
    updateToken(state, action) {
      const newToken = action.payload;

      state.token = newToken;

      const noProxyCopyState = { ...state };
      localStorage.setItem("sessionData", JSON.stringify(noProxyCopyState));
    },
    startSession(state) {
      state.isLogged = true;

      const noProxyCopyState = { ...state };
      localStorage.setItem("sessionData", JSON.stringify(noProxyCopyState));
    },
    reset() {
      localStorage.removeItem("sessionData");

      return emptyState;
    },
  },
});

export const { updateUserData, updateToken, startSession, reset } =
  authSlice.actions;

export const startSessionThunk =
  ({ email, password }) =>
  async (dispatch) => {
    const sessionData = await login({ email, password });

    const userData = {
      id: sessionData.user.id,
      fullName: `${sessionData.user.firstName} ${sessionData.user.lastName}`,
      email: sessionData.user.email,
    };

    dispatch(updateUserData(userData));
    dispatch(updateToken(sessionData.token));
    dispatch(startSession());
  };

export default authSlice.reducer;
