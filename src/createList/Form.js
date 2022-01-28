import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useDispatch, getState } from 'react-redux';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Creators as ListActions } from '../store/actions/list';

import './styles.css'

const units = ['Kilos', 'Litros', 'Unidades'];


function Form() {
  const [list, setList] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('kg');
  const [price, setPrice] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  function handleSubmit(props) {
    if (!list || !product || !quantity) {
      setError(true)
    } else {

      const data = { product, quantity, unit, price }
      dispatch({ type: 'ADD_PRODUCT', product: data, list })
      setProduct('')
      setQuantity('')
      setUnit('')
      setError(false)
    }
  }

  return (
    <form className='form-container'>
      <div className='form-row'>
        <TextField
          label="Lista"
          name='list'
          value={list}
          onChange={(e) => setList(e.target.value)}
          required
          error={!list && error}
        />
        <Button variant='outlined' onClick={handleSubmit} color='secondary'> Adicionar</Button>
      </div>
      <div className='form-row'>
        <TextField
          label="Produto"
          name='product'
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
          error={!product && error}
        />
        <TextField
          label="Quantidade"
          name='quantity'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          error={!quantity && error}
        />
        <TextField
          select
          // defaultValue="kg"
          label="Unidade"
          autoFocus={true}
          name='unit'
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          required
        >
          {units.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Preço"
          name='price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start">R$</InputAdornment>
          }}
        />
      </div>

    </form>
  )
}


export default Form;