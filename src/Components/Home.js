import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/Product/productAction";
import Product from "./shared/Product";
export default function Home() {
  // const[data,setData]=useState();
  //dispatch users
  useEffect(() => {
    dispatchH(fetchProducts());
  }, []);

  //dispatch hooks
  const dispatchH = useDispatch();
  const Data = useSelector((state) => state.productData);
  if (Data.loading) {
    return (
      <div class="ui active centered inline loader" style={{marginTop:'20%'}}></div>
    );
  }
  return (
    <div>
      <div className="ui divier" style={{ marginBottom: "50px" }}></div>
      {/* <h3 className="ui ">Home</h3> */}
      <div style={{ marginTop: "85px" }}>
        <div className="ui grid center aligned ">
        {Data.products.map((item) => <Product key={item.id} data={item} />)}
        </div>
      </div>
    </div>
  );
}
