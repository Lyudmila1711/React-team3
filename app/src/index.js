import React from 'react'
import ReactDOM from 'react-dom';
import HeaderBlock from "./header";
import './header.css'
import Navigation from './navPanel';

ReactDOM.render(
    <div className='main'>
      <Navigation />
      <HeaderBlock />,
    </div>,
    document.getElementById('root')
  );
