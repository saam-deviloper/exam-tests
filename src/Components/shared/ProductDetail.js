import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchProducts } from "../../Redux/Product/productAction";
import { useParams } from "react-router";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const data = useSelector(state=>state.productData);

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  const param = useParams();
  console.log(param)
  return (
    <div className="ui container" style={{marginTop:'80px'}}>
      <p>details</p>
      {data.loading?'Loading':data.error?'error occured': data.products.filter(item=>item.id=== +param.id).map(item=>item.title) }
    </div>
  );
}
