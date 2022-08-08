import {initDataForFunction} from "../Utils/init";

export const colorReducer = (state = initDataForFunction, action) => {
  if (action.type === "COLOR") {
    state = {...state, color: action.payload};
  }
  return state;
};
