import axios from "axios"

const productRequest = ()=>{
    return {
        type:'REQUEST_PRODUCTS'
    }
}
const requstSuccess = (products)=>{
    return {
        type:"REQUEST_SUCCESS",
        payload:products
    }
}
const requestFailure =(error)=>{
    return{
        type:"REQUEST_FAILURE",
        payload:error.message
    }
}
export const fetchProducts=()=>{
    return (dispatch)=>{
        dispatch(productRequest());
        axios.get(process.env.REACT_APP_BASE_PRODUCTS_URL)
        .then(response=>dispatch(requstSuccess(response.data)))
        .catch(error=>dispatch(requestFailure(error)))
    }
}