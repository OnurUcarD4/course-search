import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserToken } = userSlice.actions;

export default userSlice.reducer;
