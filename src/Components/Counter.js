import { useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { api } from "../Api/api";
import { increase,decrease } from "../Redux/Counter/counterAction";
import { numberAction } from "../Redux/Number/numberAction";
import { fetchUsers } from "../Redux/Users/usersAction";

//use props for oldschool 
const Counter = () => {

  //steps of decrease and increase
  const [value,setValue] = useState(1);
  
  //main data from API calls when component did mount
  useEffect(() => {
    // const appi = async ()=>{
    //   // let result = await api();
    //   // console.log(result)
    // }
    // appi();
    dispatchCounter(fetchUsers())

    
  },[]);

  const rangeHandler = (event)=>{
    let val= event.target.value;
    setValue(val);
  }
  //********************************************************* */
  //new school way to use state and dispatch via react-redux hooks
  //********************************************************* */

  const stateCounter=  useSelector(state=>state.counter.counter);
  const stateNumber=  useSelector(state=>state.number.number);
  const stateUsers=  useSelector(state=>state.usersData);


  const dispatchCounter = useDispatch();
  return (
    <div style={{margin:'50px'}}>
      <h3>Counter:{stateCounter}</h3>
      <button className="ui button red " onClick={()=>(dispatchCounter(decrease()))}>-</button>
      <button className="ui button green " onClick={()=>(dispatchCounter(increase()))}>+</button>
      <hr/>
      <h3>Counter:{stateNumber}</h3>
      <div className="ui buttons">
      <button className="ui button red" onClick={()=>(dispatchCounter(numberAction(+value).decrease))}>-</button>
      <div className="or" data-text='ya'/>
      <button className="ui button green" onClick={()=>(dispatchCounter(numberAction(+value).increase))}>+</button>
      </div>
      <br/>
      <input className="ui " type='range' min='1' max='10' step='1' value={value} onChange={rangeHandler}
      />
        <span>{value}</span>
      <section>
        <h2>Users</h2>
        <ul>{stateUsers.users.map(user=> <li>{user.name}</li> )}</ul>
      </section>  
    </div>
  );
};


//********************************************************* */
//oldschool way to use state and dipatch to use in components
//********************************************************* */


// const mapSateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease())
//   };
// };
// export default connect(mapSateToProps,mapDispatchToProps)(Counter);
export default Counter;
