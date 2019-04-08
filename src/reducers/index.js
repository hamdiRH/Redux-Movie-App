import arr from "./filmlist";
const initialState = {
  arr: arr,
  Findbyrating: 1,
  Findbyname: ""
};
function rootReducer(state = initialState, action) {
  if (action.type === "ADD_FILM") {
    return Object.assign({}, state, {
      arr: state.arr.concat(action.payload)
    });
  }
  if (action.type === "FIND_Name") {
    return Object.assign({}, state, {
      Findbyname: action.payload
    });
  }
  if (action.type === "FIND_RATING") {
    return Object.assign({}, state, {
      Findbyrating: action.payload
    });
  }
  return state;
}
export default rootReducer;
