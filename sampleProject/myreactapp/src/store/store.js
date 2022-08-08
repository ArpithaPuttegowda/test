import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "../Reducers/reducer";
import {myReducerC} from "../Reducers/myReducerC";
import {colorReducer} from "../Reducers/colorReducer";
import mySliceReducer from "../Reducers/mySlice";

const rootReducer = {
  reducer: reducer,
  reducerC: myReducerC,
  colorReducer,
  mySliceReducer
};

const store = configureStore({
  reducer: rootReducer
});

export default store;
