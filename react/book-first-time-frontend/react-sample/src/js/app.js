import hello from './hello';
import React from 'react'
import ReactDOM from 'react-dom'
import style from '../css/style.css'

hello();

ReactDOM.render(
  <h1>Hello, Frontend Engineer!</h1>,
  document.getElementById('root')
)