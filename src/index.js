import React from 'react';
import ReactDOM from 'react-dom';

// llamamos a react-router-dom para trabajar con las rutas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./style/body.scss"

// importamos bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Carrito from './routes/Carrito';
// import Home from './routes/Home';
import Error from './routes/Error';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

ReactDOM.render(
  <React.StrictMode>

    

    <BrowserRouter>

      <Routes>
        <Route path='/' element = {<App />}>
              <Route index element={<ItemListContainer/>}/> 
              <Route path = 'Item/:id' element = {<ItemDetailContainer/>} />
              <Route path = 'Carrito' element = {<Carrito />} />

              <Route path='*' element = {<Error />} />
        </Route>
      </Routes>

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

