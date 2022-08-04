import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "../Reducers/reducer";

const myReducer = {
  reducer: reducer
};

const store = configureStore({
  reducer: myReducer
});

export default store;
