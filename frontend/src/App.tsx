import React from 'react';
import './App.css';
import Layout from './HOC/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home';
import Playlist from './containers/Playlist/Playlist';

function App() {

  return (
    <div className="">
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/playlist/:id/:slug' element={<Playlist />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
