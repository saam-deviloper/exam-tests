const initialState = {
  loading: false,
  products: [],
  error: null,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_PRODUCTS":
      return {
        loading: true,
      };
    case "REQUEST_SUCCESS":
      return {
        loading: false,
        error: null,
        products:action.payload
      };
    case "REQUEST_FAILURE":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return{
          ...state
      }
  }
};
export default productReducer;