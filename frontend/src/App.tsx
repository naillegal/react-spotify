import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './HOC/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home';

function App() {
  return (
    <div className="">
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
