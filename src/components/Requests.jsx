import React, { useEffect } from 'react'
import { base_url } from '../utils/constant';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addRequests, removeRequest } from '../utils/requestsSlice';

const Requests = () => {
    const dispatch = useDispatch();
    const requests = useSelector((store)=> store.requests);

    const reviewRequest = async (status, _id) => {
      try {
        const res = await axios.post(
          base_url + "/request/review" + "/" + status + "/" + _id,
          {},
          { withCredentials: true }
        );
        dispatch(removeRequest(_id));
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRequests = async()=>{
        try{
            const res = await axios.get(base_url + "/user/request/received",{withCredentials: true});
            console.log(res.data.data);
            dispatch(addRequests(res.data.data));
            console.log(res.data.data);
            
 
        }catch(err){
            console.log(err?.response.data);
            
        } 
    }
    useEffect(()=>{
        fetchRequests();
    }, []);

 if(!requests){return}
    if(requests.length === 0){
        return (
            <div className="text-center my-10">
                <p className="text-sm my-3">You have no requests yet.</p>
            </div>
        )
    }
  return (
    <div className='text-center my-10'>
        <h1 className='text-bold text-white text-3xl items-center'>Connection Requests</h1>
        {requests && requests.map((request) => {
            const { _id, firstName, lastName, photoUrl, age, gender, about } =
              request.fromUserId; 
            return (
              <div
                key={_id}
                className="flex justify-between  items-center m-4 p-4 bg-base-300 rounded-lg shadow-sm my-4  w-1/3 mx-auto"
              >
                <div>
                  <img
                    className="w-20 h-20 rounded-b-full"
                    src={photoUrl}
                    alt="photo"
                  />
                </div>
                <div className="text-left mx-4">
                  <h2 className="text-xl">{firstName + " " + lastName}</h2>
                  {age && gender && <p>{age + " " + gender}</p>}
                  {about && <p>{about}</p>}
                </div>
                <div className="card-actions justify-end  ">
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => reviewRequest("accepted", request._id)}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => reviewRequest("rejected", request._id)}
                  >
                    Reject
                  </button>
                </div>
              </div>
            );
        })}

    </div>
  )
}

export default Requests