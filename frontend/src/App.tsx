import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./HOC/Layout";
import Home from "./containers/Home/Home";
import Playlist from "./containers/Playlist/Playlist";
import Search from "./containers/Search/Search";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Profile from "./containers/Profile/Profile";
import './App.css'

function App() {
  const token = useSelector((state: any) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div className="">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlist/:id/:slug" element={<Playlist />} />
          <Route path="/search/" element={<Search />} />
          <Route path="/register/" element={<Register />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/profile/:id/" element={<Profile />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
