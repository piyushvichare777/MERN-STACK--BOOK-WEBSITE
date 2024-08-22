import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Mylogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo ={
      email:data.email,
      password:data.password,
    }
   await axios.post("http://localhost:3000/user/login",userinfo)
   .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Loggedin Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box [w-500]">
          <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
            {/* Close button */}
            <Link 
              to="/" 
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
            
            <h3 className="font-bold text-xl text-red-300">Login</h3>
            
            {/* Email field */}
            <div className='mt-4 space-y-4'>
              <label>Email</label>
              <br />
              <input 
                type="email"
                placeholder='Enter your email'
                className="w-80 py-1 px-3 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                {...register("email", { required: true })}
                autoComplete="email"
              />
              <br />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            
            {/* Password field */}
            <div className='mt-4 space-y-4'>
              <label>Password</label>
              <br />
              <input 
                type="password"
                placeholder='Enter your password'
                className="w-80 py-1 px-3 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                {...register("password", { required: true })}
                autoComplete="current-password"
              />
              <br />
              {errors.password && <span className="text-red-500">This field is required</span>}
            </div>
            
            {/* Submit button */}
            <div className='flex justify-around mt-4'>
              <button 
                type="submit"
                className='mt-1 bg-pink-600 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-300'
              >
                Login
              </button>
              <p className='mt-2'>
                Not registered? {" "} 
                <Link to="/Mysignup" className='underline text-blue-500 cursor-pointer'>Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Mylogin;
