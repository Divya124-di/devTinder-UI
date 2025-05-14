import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { base_url } from '../utils/constant';

const Login = () => {
  const[emailId, setEmailId] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState(" ");
   const [firstName, setFirstName] = useState("");
   const [lastName, setlastName] = useState("");
   const [isLogin, setIsLogin] = useState(true);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleLogin = async ()=>{
    try{
   const res = await axios.post(base_url+ '/login', {
     emailId,
     password
      }, {withCredentials: true});
     dispatch(addUser(res.data));
     return navigate("/");
    }catch(err){
      setError(err?.response?.data || "Something went wrong");
      console.error(err);
    }
   }


   const handleSignUp = async ()=>{
    try{
      const res = await axios.post(base_url + "/signup", {
        firstName,
        lastName,
        emailId,
        password
      }, {withCredentials: true})
      console.log(res.data);
      
      dispatch(addUser(res.data.data));
      return navigate("/");
    }catch(err){
      setError(err?.response?.data || "Something went wrong");
      console.error(err);
    }
   }

  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <div className="flex flex-col items-center">
            {!isLogin && (
              <>
                <label className="form-control  w-full max-w-xs my-2">
                  <div className="label my-2">
                    <span className="label-text"> First Name</span>
                  </div>
                  <input
                    type="text"
                    value={firstName}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>

                <label className="form-control  w-full max-w-xs my-2">
                  <div className="label my-2">
                    <span className="label-text">Last Name</span>
                  </div>
                  <input
                    type="text"
                    value={lastName}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setlastName(e.target.value)}
                  />
                </label>
              </>
            )}

            <label className="form-control  w-full max-w-xs my-2">
              <div className="label my-2">
                <span className="label-text"> Email ID</span>
              </div>
              <input
                type="text"
                value={emailId}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>

            <label className="form-control w-full max-w-xs my-2">
              <div className="label my-2">
                <span className="label-text"> Password</span>
              </div>
              <input
                type="password"
                value={password}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center">
            <button onClick={isLogin? handleLogin : handleSignUp} className="btn btn-primary">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </div>

          <p className="m-auto cursor-pointer  " onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "New User? Sign up here" : "Existing user? Login here"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login