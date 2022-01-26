import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

import './CustomCard.css';

const CustomCard = (props) => (
  <div className={props.containerClass}>
    <Link to={props.link}>
      <Card className='card'>
        <CardActionArea className='card-content-area'>
          {props.image &&
            <CardMedia
              component='img'
              className='card-img'
              height='100'
              image={props.image}
              title='image'
            />
          }
          <CardContent className='card-content'>
            {props.children}
          </CardContent>
        </CardActionArea>
        {props.footer && (
          <div>
            <Divider />
            <CardActions className="card-footer">
              {props.footer}
            </CardActions>
          </div>
        )}
      </Card>
    </Link>
  </div>

)

export default CustomCard;