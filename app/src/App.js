import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import Home from './components/MainPage/mainContent'
import './app.css'

function App() {
  return (
    <div className='main-box'>
      <div>
        <Header/>
      </div>
      <div className='content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;