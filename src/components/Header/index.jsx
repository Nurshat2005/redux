import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
 const {open}=useSelector((o)=>o)
 const dispatch=useDispatch()
    return (
        <div className=''>
     <button onClick={()=>dispatch({type:"OPEN"})}>Open</button>
        </div>
    );
};

export default Header;