import React, { useEffect } from 'react'
import { base_url } from '../utils/constant'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utils/connectionsSlice';

const Connections = () => {
    const dispatch = useDispatch();
    const connections = useSelector((store)=> store.connections);

const fetchConnections = async()=> {
    try{
        const res = await axios.get(base_url + "/user/connections",{withCredentials: true});
        console.log(res.data.data);
        dispatch(addConnections(res.data.data));
    }
    catch(err){
        console.error(err?.response.data);
    }
    
}
useEffect(()=>{
    fetchConnections();
},[])


  return (
    <div className="text-center my-10">
      <h1 className="text-2xl font-bold">Connections</h1>

      <p className="text-sm my-3">
        You have {connections && connections.length} connections
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {connections &&
          connections.map((connection) => (
            <div
              key={connection.id}
              className="flex bg-base-200 rounded-lg shadow-sm"
            >
              <figure className="flex justify-center items-center mx-2">
                <img
                  className="w-20 h-20 rounded-full"
                  src={connection.photoUrl}
                  alt="Photos"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title flex ">
                  {connection.firstName + " " + connection.lastName}
                </h2>
                {connection.age && connection.gender && (
                  <p className="text-sm">
                    {connection.age} + ", " + {connection.gender}
                  </p>
                )}
                <p>{connection.about}</p>
                {/* <div className="card-actions justify-center my-6">
                                <button className="btn btn-primary">Message</button>
                                <button className="btn btn-secondary">Unmatch</button>
                            </div> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Connections