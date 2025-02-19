import React, { useState } from 'react'
import logo from '../images/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import image from "../images/authPageSide.png";
import { api_base_url } from '../helper';

const Login = () => {

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const navigate = useNavigate();
    const [error, setError] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        fetch(api_base_url + "/login", {
          mode: "cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email,
            password: pwd
          })
        }).then((res)=>res.json()).then((data)=>{
          if(data.success === true){
            localStorage.setItem("token", data.token);
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("userId", data.userId);
            navigate("/")
          }
          else{
            setError(data.message);
          }
        })
    }

  return (
    <>
      <div className=" w-screen min-h-screen flex items-center justify-around">
        <div className='left w-[35%]'>
            <img className='w-[200px]' src={logo} alt="" />
            <form onSubmit={submitForm} className='w-full mt-[60px]' action="">
                <div className="inputBox">
                    <input required onChange={(e)=>{setEmail(e.target.value)}} value={email} type='email' placeholder='Email'/>
                </div>

                <div className="inputBox">
                    <input required onChange={(e)=>{setPwd(e.target.value)}} value={pwd} type='password' placeholder='Password'/>
                </div>

                <p className='text-[gray]'>Dont have account <Link to="/signUp" className='text-[#00AEEF]'>Sign Up</Link></p>
                <p className='text-red-500 text-[14px] my-2'>{error}</p>

                <button className="btnBlue w-full mt-[20px]">Login</button>
            </form>
        </div>
        <div className=' w-[45%]'>
            <img className='h-[100vh] w-[100%] object-cover' src={image} alt="" />
        </div>
      </div>
    </>
  )
}

export default Login