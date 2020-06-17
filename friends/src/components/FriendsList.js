import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendForm from "./FriendForm";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    //   const getData = () => {
    // add token to the authorization header
    // const token = window.localStorage.setItem("token"); - token not needed
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteFriend = (id) => {
    axiosWithAuth()
      .delete(`/api/friends/${id}`)
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        debugger;
      });
  };
  return (
    <div>
      <FriendForm friends={friends} setFriends={setFriends} />
      {/* basic map */}
      {friends.map((friend) => {
        return (
          <div key={friend.id}>
            {/* <div>{friend.id}</div> */}
            <div>Name: {friend.name}</div>
            <div>Age: {friend.age}</div>
            <div>Email: {friend.email}</div>
            <button onClick={()=> {deleteFriend(friend.id)}}> Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;
