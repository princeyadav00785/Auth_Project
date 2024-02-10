import React,{useState} from 'react'
import {Link , useNavigate } from "react-router-dom"
function SignIn() {
  const [formData, setformData]= useState({});
  const handleChange=(e)=>{
     setformData({...formData,[e.target.id]:e.target.value});
  }
  const [loading,setloading]=useState(false);
  const [Error,setError]=useState(false);
  const Navigate = useNavigate();
  const handleSubmit=async(e) => {
   e.preventDefault();
   try {
    setloading(true);
    setError(false);
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
    // console.log(data);
    setloading(false);
    Navigate('/')
  if(data.error){
    setError(true);
    return ;
  }
    alert('LoggedIn successfully !!')
    
   } catch (error) {
    setloading(false);
    setError(true);
  
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
      </form>
      <p className='my-4'>
        Dont have an Account?
        <Link to='/sign-Up'>
        <span className="ml-3 text-blue-400">SignUp</span>
        </Link>
      </p>
      <div>
        <p className='text-red-700 mt-5' >{Error &&"Something went wrong !!"}</p>
      </div>
    </div>
  )
}

export default SignIn