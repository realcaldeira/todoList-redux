import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.css'
import Form from './Form';
import ListItem from './ListItem';
import { Creators as ListActions } from '../store/actions/list';


function CreateList(props) {
  return (
    <div className='page-container'>
      <Form />

      <div className='list-items-container'>
        {props.list.items.map((item) =>
          <ListItem
            item={item}
            deleteProduct={props.deleteProduct}
            key={item.id}
          />
        )}
      </div>

    </div>
  );
}

const mapStateToProps = state => ({
  list: state.list
})

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);