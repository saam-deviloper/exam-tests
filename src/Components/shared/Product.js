import React from "react";
import { Link, useNavigate } from "react-router-dom";
import shortenTitle from "../helper/shortenTitle";

export default function Product({data}) {
    const {id,title,price,image,rating,category,description} = data;
    const navigate = useNavigate();
    const gotoRouteId= (id)=>{
      navigate(`/${id}`)
    }
  return (
    <>
      <div>
      <div className="ui doubling Stackable aligned cards">
        <div className="ui card justified centered aligned" 
        style={{height:"340px",marginLeft:"5px",marginBottom:'35px'}}
        onClick={()=>{gotoRouteId(id)}}
        >
          <div className="ui raised segment">
          <a class="ui blue label">{price} $</a>
          <img
            src={image}
            loading='lazy'
            style={{width:'130px',height:'130px',padding:'0px'}}
            className='ui image centered'
            alt="productPic"
          />
        </div>
          <div className="content" style={{marginTop:"-14px"}}>
            <div className="header">{shortenTitle(title)}</div>
            <div className="meta ">{category}</div>
          </div>
          <div className="extra content" style={{padding:'5px'}}>
            <button className="ui button left floated ">Delete</button>
            <button className="ui primary button right floated ">Add to card</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
