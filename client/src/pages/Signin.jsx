import React,{useState} from 'react'
import {Link , useNavigate } from "react-router-dom"
import { signInStart,signInSucess,signInFailure } from '../redux/user/userSlice';
import {useDispatch, useSelector} from "react-redux";
import Oauth from '../components/Oauth';



function SignIn() {
  const [formData, setformData]= useState({});
  const handleChange=(e)=>{
     setformData({...formData,[e.target.id]:e.target.value});
  }
  // const [loading,setloading]=useState(false);
  // const [error,setError]=useState(false);
  const {error,loading}= useSelector((state)=>state.user);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit=async(e) => {
   e.preventDefault();
   try {
    // setloading(true);
    // setError(false);
    dispatch(signInStart());
    const res= await fetch ('/api/auth/signin',
    {
     method :'POST',
     headers:{
       'Content-type':'application/json',
     },
     body :JSON.stringify(formData),
    }
    );

    const data = await  res.json();
    if(data.success===false){
      // setError(true);
      // setloading(false);
      dispatch(signInFailure(data.message));
      return ;
    }
    // console.log(data);
    // setloading(false);
    dispatch(signInSucess(data));
    Navigate('/');
    alert('LoggedIn successfully !!')
    
   } catch (error) {
    dispatch(signInFailure(error));
    // setloading(false);
    // setError(true);
  
   }
 

  }
  // console.log(formData);
  return (
    <div className='max-w-xl mx-auto p-3'>
      <h1 className='text-3xl text-center my-10 font-semibold'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
    <input type='email' id='email' placeholder='Email' className='bg-slate-100 rounded-lg p-3'onChange={handleChange}></input>    
      <input type='password' id='password' placeholder='Password' className='bg-slate-100 rounded-lg p-3'onChange={handleChange}></input>
      <button disabled={loading} className='bg-slate-700 text-white rounded-lg hover:opacity-95 p-3 uppercase disabled:opacity-80'>  {loading?"Loading...":"Sign In"}</button>
      <Oauth/>
      </form>
      <p className='my-4'>
        Dont have an Account?
        <Link to='/sign-Up'>
        <span className="ml-3 text-blue-400">SignUp</span>
        </Link>
      </p>
      <div>
        <p className='text-red-700 mt-5' >{error ?error.message||"Something went wrong !!" :""}</p>
      </div>
    </div>
  )
}

export default SignIn