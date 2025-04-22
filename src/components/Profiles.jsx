import React from 'react'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'
import UserCard from './UserCard';

const Profiles = () => {
  const user =useSelector((store)=> store.user);
  return ( user && (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      <EditProfile user={user}/>
      <UserCard user={user}/>
      </div>
  ))
}

export default Profiles