import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  Loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.Loading = true;
    },
    sigInSuccess: (state, action) => {
      state.Loading = false;
      state.currentUser = action.payload;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.Loading = false;
    },
    signOutStart: (state) => {
      state.Loading = true;
    },
    signOutSuccess: (state) => {
      state.Loading = false;
      state.currentUser = null;
    },
    signOutFailure: (state, action) => {
      state.Loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  signOutFailure,
  signOutStart,
  signOutSuccess,
  signInStart,
  signInFailure,
  singInSuccess,
} = userSlice.actions;
export default userSlice.reducer;
