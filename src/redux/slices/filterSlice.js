import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  copyData: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setCopyData: (state, action) => {
      state.copyData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData, setCopyData } = filterSlice.actions;

export default filterSlice.reducer;
