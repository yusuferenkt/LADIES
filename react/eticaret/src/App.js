import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import {Router,Routes, Route} from 'react-router-dom';
import Giris from './pages/Giris';
import Kayit from './pages/Kayit';
import ProductPage from './pages/ProductPage';
import Kisisel from './pages/Kisisel';
import İletisim from './pages/İletisim';
import Cart from './components/Cart';
import Favorite from './components/Favorite';
import Search from './pages/Search';
import Odeme from './pages/Odeme';
import Siparis from './pages/Siparis';

function App() {
  const [routes, setRoutes] = useState([]);
  useEffect(() => {
    document.title = "LADIES ≡ Kozmetik Markaları ve Kozmetik Ürünleri";
    fetch('http://localhost:3001/api/get/routes').then(response => response.json()).then(data => {setRoutes(data);}).catch(error => {console.error(error)});
  },[]);
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/giris-yap' element={<Giris/>}/>
        <Route path='/kayit-ol' element={<Kayit/>}/>
        <Route path='/kisisel-bilgiler' element={<Kisisel/>}/>
        <Route path='/iletisim-sikayet' element={<İletisim/>}/>
        <Route path='/odeme' element={<Odeme/>}/>
        <Route path="/siparislerim" element={<Siparis/>}/>
        {/* <Route path='*' element={<Main/>}/> */}
        {
          routes.map((route, index) => (
            // alert(route.product_route)
            <Route key={index} path={`${route.product_route}`} element={<ProductPage route={route.product_route}/>}/>
          ))
        }
        <Route path='/arama/:keyword' element={<Search />} />
      </Routes>
      <Cart/>
      <Favorite/>
    </div>
  );
}

export default App;
