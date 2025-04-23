import React, { useEffect } from 'react'
import { base_url } from '../utils/constant';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard';

const Feed = () => {
  const dispatch = useDispatch(); 
 const Feed = useSelector((store) => store.feed);
   const getFeed = async () => {
     try {
      if(Feed && Feed.length>0) return;
      const res = await axios.get(base_url + "/feed", {withCredentials: true});
      dispatch(addFeed(res?.data));
     }catch (err) {
       console.error(err);
     }
   };

   useEffect(() => {
     getFeed();
   }, []);

  return (Feed && (
    <div className='flex flex-wrap justify-center gap-4 mt-4'> 
      <UserCard user={Feed[0]}/>
    </div>

    // <div className="flex flex-wrap justify-center gap-4">
    //   {Feed.map((feed) => (
    //     <UserCard key={feed._id} feed={feed} />
    //   ))}
    // </div>
  ));
}

export default Feed