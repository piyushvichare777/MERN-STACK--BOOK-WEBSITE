import React from 'react';
import { Link , useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Mylogin from './Mylogin';
import axios from "axios"
import toast from 'react-hot-toast';

function Mysignup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo ={
      fullname:data.fullname,
      email:data.email,
      password:data.password,
    }
   await axios.post("http://localhost:3000/user/signup",userinfo)
   .then ((res)=>{
    console.log(res.data)
      if(res.data){
        toast.success("signup Successfully")
        navigate(from, { replace: true });
      }
      localStorage.setItem("user",JSON.stringify(res.data.user))
    }).catch((err)=>{
     if (err.response){
      console.log(err)
      toast.error("Error:"+ err.response.data.message )     }
    })
  }


  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="w-[500px]">
        <div className="modal-box border">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close Button */}
            <Link 
              to="/" 
              className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            
            <h3 className="font-bold text-xl text-red-300">Signup</h3>
            
            {/* Name Field */}
            <div className='mt-4 space-y-4'>
              <label>Name</label>
              <br />
              <input 
                type="text"
                placeholder="Enter your name"
                className="w-80 py-1 px-3 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                {...register("fullname", { required: true })}
                autoComplete="name"
              />
              <br />
              {errors.fullname && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Email Field */}
            <div className='mt-4 space-y-4'>
              <label>Email</label>
              <br />
              <input 
                type="email"
                placeholder="Enter your email"
                className="w-80 py-1 px-3 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                {...register("email", { required: true })}
                autoComplete="email"
              />
            <br />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Password Field */}
            <div className='mt-4 space-y-4'>
              <label>Password</label>
              <br />
              <input 
                type="password"
                placeholder="Enter your password"
                className="w-80 py-1 px-3 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                {...register("password", { required: true })}
                autoComplete="current-password"
              />
              <br />
              {errors.password && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Signup Button */}
            <div className='flex justify-around mt-4'>
              <button 
                type="submit"
                className='mt-1 bg-pink-600 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-300'
              >
                Signup
              </button>
              <p className='mt-2'>
                Have an account?{" "}
                <button 
                  type="button" 
                  className='underline text-blue-500 cursor-pointer'
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Ensure Mylogin is not inside the form */}
      <Mylogin />
    </div>
  );
}

export default Mysignup;
