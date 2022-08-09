export const reducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      state = {...state, name: action.payload};
      break;
    case "LOC":
      state = {...state, loc: action.payload};
      break;
    default:
      state = {...state};
  }
  console.log(state, "updatedState");
  return state;
};
