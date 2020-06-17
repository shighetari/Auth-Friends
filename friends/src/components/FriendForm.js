import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialState = {
  name: "",
  age: "",
  email: "",
};
// using props for setFriend from FL component
const FriendForm = (props) => {
  const [addFriend, setAddFriend] = useState(initialState);

  const handleChange = (e) => {
    setAddFriend({
      ...addFriend,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", addFriend)
      .then((res) => {
        props.setFriends(res.data);
      })
      .catch((err) => {
        debugger;
      });
    setAddFriend(initialState);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={handleChange}
        value={addFriend.name}
        required
      />
      <input
        type="text"
        placeholder="age"
        name="age"
        onChange={handleChange}
        value={addFriend.age}
        required
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        onChange={handleChange}
        value={addFriend.email}
        required
      />
      <button> Add Friend</button>
    </form>
  );
};
export default FriendForm;
