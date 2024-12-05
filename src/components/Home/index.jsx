import React from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const {modal,color,redcolor,openClose}=useSelector((s)=>s)
    const dispatch=useDispatch()
  return (
  <>
 
     <div id="home" style={{
      display: `${openClose? 'block' : 'none'}`
     }} >
      <div className="container">
       <center>
       <div className="home"
       style={{
        display:open ?"block":'none',
       }}
       >
      <a 
      onClick={()=>dispatch({type:"MODAL"})}> <IoClose /></a>

          <button
         
          style={{
            background:color?"green":""
          }}
           onClick={()=>dispatch({type:"ADD_MONEY", payload:10})}>+</button>
          <h1>{modal}</h1>
          <button 
          style={{
            background:redcolor? "red":""
          }}
          onClick={()=>dispatch({type:"TAKE_MONEY",payload:10})}>-</button>
          
        </div>
     
       </center>
      </div>
    </div>

  </>
  );
};

export default Home;
