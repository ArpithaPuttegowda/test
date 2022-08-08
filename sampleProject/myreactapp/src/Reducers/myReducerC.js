import {initDataC} from "../Utils/init";

export const myReducerC = (state = initDataC, action) => {
  switch (action.type) {
    case "NAMEC":
      state = {...state, name: action.payload};
      break;
    case "LOCC":
      state = {...state, loc: action.loc};
      break;
    default:
      break;
  }
  console.log(state, "myStore");
  return state;
};
