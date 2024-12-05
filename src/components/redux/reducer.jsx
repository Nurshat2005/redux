
const obj = {
  modal: 0,
  color: false,
  redcolor: false,
  openClose: false,
};
export const Reducer = (state = obj, action) => {
  switch (action.type) {
    case "ADD_MONEY":
      return {
        ...state,
        modal: state.modal + action.payload,
        color: true,
        redcolor: false,
      };
    case "TAKE_MONEY":
      return {
        ...state,
        modal: state.modal > 0 ? state.modal - action.payload : 0,
        redcolor: true,
        color: false,
      };
    case "MODAL":
      return { ...state, openClose: false };
    case "OPEN":
      return { ...state, openClose: true };
    default:
      return state;
  }
};
