import React from 'react'
//import { useNavigate } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

const Signup = () => {
  //const navigate=useNavigate();
  /*const handleClick=()=>{
    navigate('/')
  }*/
  return (
    <div className='container'>
     <form >
     <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" name="name" aria-describedby="namedivision"/>
   
  </div>
     <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" name="password" id="password"/>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" name="password" id="cpassword"/>
  </div>
   <div className='button2'>
  <button type="submit" class="btn btn-primary" ><Link to='/'>Sign in </Link></button>
  </div>
</form>

    </div>
  )
}

export default Signup
