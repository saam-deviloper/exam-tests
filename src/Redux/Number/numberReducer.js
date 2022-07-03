const initialState = {
    number: 0,
  };
  const numberReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREASE_NUMBER":
        return {
          ...state,
          number: state.number + action.payload,
        };
      case "DECREASE_NUMBER":
        return {
          ...state,
          number: state.number - action.payload,
        };
      default:
        return state;
    }
  };
  
  export default numberReducer;
  