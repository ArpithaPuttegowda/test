import {createSlice} from "@reduxjs/toolkit";

const initData = {
  name: "",
  location: ""
};

const myInfo = createSlice({
  initialState: initData,
  name: "MYINFO",
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setLoc: (state, action) => {
      state.location = action.payload;
    }
  }
});

export const {setName, setLoc} = myInfo.actions;

export default myInfo.reducer;
