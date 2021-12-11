import React from 'react';
import ReactDOM from 'react-dom';

// llamamos a react-router-dom para trabajar con las rutas
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// importamos bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Nosotros from './routes/Nosotros';
import Carrito from './routes/Carrito';
import Home from './routes/Home';
import Error from './routes/Error';

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>

      <Routes>
        {/* llamamos a route para especificar las rutas con las que vamos a trabajar */}
          {/* route recibe el dos cosas importantes: el path que es la url y tambien recibe el elemento que se va a pintar */}
          {/* para no perder el navbar en cada una de las pestañas trabajo con rutas anidadas */}
        <Route path='/' element = {<App />}>
              {/* en este caso la ruta home va a contener al nosotros y al carrito */}
              {/* una ruta que contiene a otras rutas anidadas puede tener un index */}
              <Route index element={<Home />}/> {/*ruta que se va a pintar cuando estemos en la ruta raiz */}
              <Route path = 'Nosotros' element = {<Nosotros />} />
              <Route path = 'Carrito' element = {<Carrito />} />

              {/* colocamos el error 404 en caso de que no encuentre la seccion o este mal escrita */}
              <Route path='*' element = {<Error />} />
        </Route>
      </Routes>

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

