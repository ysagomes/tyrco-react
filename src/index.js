import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from './components/Landing/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactView from './components/Contact/ContactView';
import Menu from './components/Menu/Menu';
import Products from './components/Products/Products';
import {DataProvider} from './context/Dataprovider'
import ProductDetail from './components/Products/ProductDetail';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <DataProvider>
    <BrowserRouter>

    <Menu />
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/contact" element={<ContactView />} />
      <Route exact path='/products' element={<Products />} />
      <Route exact path='/products/:id' element={<ProductDetail />} />
    </Routes>

    </BrowserRouter>
    </DataProvider>
  </React.StrictMode>
);

