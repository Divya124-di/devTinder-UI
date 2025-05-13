import axios from "axios";
import React from "react";
import { base_url } from "../utils/constant";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  console.log(user);
  const dispatch = useDispatch();
  const { _id, firstName, lastName, age, gender, about, photoUrl, skills } =
    user;

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        base_url + "/request/send/" + status + "/" + userId,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeFeed(userId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card grid-rows-1 bg-base-300 w-96 shadow-xl p-3">
      <figure>
        <img src={photoUrl} alt="photoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
        {skills && skills.length > 0 && (
          <div>
            <h3 className="font-semibold">Skills:</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-200 text-blue-700 px-2 py-1 rounded-lg text-sm"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="card-actions justify-center my-4">
          <button
            className="btn btn-accent"
            onClick={() => {
              handleSendRequest("ignored", _id);
            }}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              handleSendRequest("interested", _id);
            }}
          >
            Intrested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
