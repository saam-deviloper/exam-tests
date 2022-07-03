import axios from "axios";

const userRequest = () => {
  return { type: "USER_REQUEST" };
};
const requestSuccess = (users) => {
  return {
    type: "REQUEST_SUCCESS",
    payload: users,
  };
};
const requestFailure = (error) => {
  return {
    type: "REQUEST_FAILURE",
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(userRequest());
   
    axios.get(process.env.REACT_APP_BASE_USERS_URL)
    .then(response => {
        const data = response.data
        dispatch(requestSuccess(data))
    }
    ).catch(error =>{dispatch(requestFailure(error.message))})
  };
};
