const initialState = {
    loading:false,
    users:[],
    error:false
}
const usersReducer = (state=initialState,action)=>{
switch (action.type) {
    case 'USER_REQUEST':
        return{
            ...state,
            loading:true
        }
    case 'REQUEST_SUCCESS':
        return{
            loading:false,
            users:action.payload
        }
    case "REQUEST_FAILURE":
        return{
            loading:false,
            error:action.payload
        }
    default:
        return{
            ...state
        };
}
}
export default usersReducer;