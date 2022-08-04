import {initData} from "../Utils/init";
export const reducer = (state = initData, action) => {
  if (action.type === "NAME") {
    state = {...state, name: action.payload};
  }
  if (action.type === "LOC") {
    state = {...state, loc: action.payload};
  }
  console.log(state, "updated state");
  return state;
};
