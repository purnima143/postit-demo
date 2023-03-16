import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Profile, Feed, FavouritePost } from "../components/index";
function Home() {
  return (
    <div className="home">
      <Header />
      <div className="pt-4 container">
        <Routes>
          <Route path="/userprofile/:userId" element={<Profile />} />
          <Route path="/*" element={<Feed />} />
          <Route path="/favouritepost" element={<FavouritePost />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
