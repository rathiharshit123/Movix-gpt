import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    logoutUser: (state, action) => {
      return null;
    },
  },
});

export default userSlice.reducer;

export const { addUser, logoutUser } = userSlice.actions;
