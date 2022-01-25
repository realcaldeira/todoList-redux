import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons';

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