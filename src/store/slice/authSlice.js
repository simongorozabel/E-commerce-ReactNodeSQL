import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../services/auth/login";

const initialState = {
  id: "",
  token: "",
  fullName: "",
  email: "",
  isLogged: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserData(state, action) {
      const newUserData = action.payload;

      state.id = newUserData.id;
      state.fullName = newUserData.fullName;
      state.email = newUserData.email;
    },
    updateToken(state, action) {
      const newToken = action.payload;

      state.token = newToken;
    },
    startSession(state) {
      state.isLogged = true;
    },
    reset() {
      return initialState;
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
      id: sessionData.user,
      fullName: `${sessionData.user.firstName} ${sessionData.user.lastName}`,
      email: sessionData.user.email,
    };

    dispatch(updateUserData(userData));
    dispatch(updateToken(sessionData.token));
    dispatch(startSession());
  };

export default authSlice.reducer;
