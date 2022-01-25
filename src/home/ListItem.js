import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ListItem = (props) => (
  <div className='list-card-item'>
    <FontAwesomeIcon icon={props.icon} size='sm' />
    <p>{props.text}</p>
  </div>
)

export default ListItem;