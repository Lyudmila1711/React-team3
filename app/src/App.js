import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MainContent from './components/MainPage/MainContent'
import Catalog from './components/Catalog/Catalog'
import Cart from './components/Cart/Cart'
import CatalogItem from "./components/Catalog/CatalogItem"
import './app.css'

function App() {

  return (
    <div className='main-box'>
      <div>
        <Header/>
      </div>
      <div className='content'>
      <Routes>
        <Route path='/' element={<MainContent/>}/>
        <Route path='/catalog' element={<Catalog/>} />
        <Route path='/catalog/:id' element={<CatalogItem/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      </div>
      <div>
        <Footer className='footer-content'/>
      </div>
    </div>
  );
}

export default App;