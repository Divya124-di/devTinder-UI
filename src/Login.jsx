import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addUser } from './utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const[emailId, setEmailId] = useState("priya@example.com");
   const [password, setPassword] = useState("Priya123@");
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleLogin = async ()=>{
    try{
   const res = await axios.post('http://localhost:7777/login', {
     emailId,
    password
    },{withCredentials: true});
    dispatch(addUser(res.data));
    return navigate("/");
    }catch(err){
      console.error(err);
    }
   }

  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div className="flex flex-col items-center">
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
          <div className="card-actions justify-center">
            <button  onClick={handleLogin} className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login