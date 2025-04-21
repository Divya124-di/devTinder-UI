import React, { useEffect } from 'react'
import { base_url } from '../utils/constant';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';

const Feed = () => {
  const dispatch = useDispatch(); 
 const Feed = useSelector((store) => store.feed);
   const getFeed = async () => {
     try {
      if(Feed) return;
      const res = await axios.get(base_url + "/feed", {withCredentials: true});
      dispatch(addFeed(res?.data));
     }catch (err) {
       console.error(err);
     }
   };

   useEffect(() => {
     getFeed();
   }, []);

  return (
    <div>Feed</div>
  )
}

export default Feed