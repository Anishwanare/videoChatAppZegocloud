import React, { useState } from "react";
import Hero from "./Hero";
import {useNavigate } from "react-router-dom";

const Home = () => {
    const navigateTo = useNavigate()
  const [value, setValue] = useState("");
  const handleJoinMeeting = ()=>{
    navigateTo(`/room/${value}`)
  }
  return (
    <div>
      <Hero />
      <div className="container">
        <h1>Join Meeting</h1>
        <div className="">
          <input
            type="text"
            placeholder="Genererate meeting id"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
          />
          <button type="button" disabled={!value} onClick={handleJoinMeeting}> Join Meeting</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
