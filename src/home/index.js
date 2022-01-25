import React from 'react';


import './styles.css';
import NewList from './NewList';
import List from './List';

const Home = () => (
  <div className="page-container">
    <NewList />
    <List />
  </div>
)

export default Home;