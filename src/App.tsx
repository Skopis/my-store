import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import DataTable from './views/DataTable';
import Cart from './views/Cart';
import AppHeader from './cmps/AppHeader';
import './assets/style.css'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <AppHeader />

        <Route path="/cart" ><Cart text='hello' /></Route>
        <Route component={DataTable} exact path="/" />

      </HashRouter>
    </div>
  );
}

export default App;
