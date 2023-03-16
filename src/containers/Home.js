import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Profile, Feed, SavePost } from "../components/index";
function Home() {
  return (
    <div className="home">
      <Header />
      <div className="pt-4 container">
        <Routes>
          <Route path="/userprofile/:userId" element={<Profile />} />
          <Route path="/*" element={<Feed />} />
          <Route path="/savepost" element={<SavePost />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
