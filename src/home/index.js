import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import './styles.css';

const Home = (props) => (
  <div className="page-container">

    <div className='new-list-container'>
      <Card className='card'>
        <CardActionArea className='card-content-area'>
          <CardContent className='card-content'>
            <div>
              <p className='title'>Adicionar Novas Listas</p>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>

  </div>
)

export default Home;