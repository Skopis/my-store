import { Route, HashRouter } from 'react-router-dom';
import ProductList from './views/ProductList';
import Cart from './views/Cart';
import AppHeader from './cmps/AppHeader';
import './assets/style.css'


function App() {

  return (
    <div className="App">
      <HashRouter>
        <AppHeader />

        <Route path="/cart" >
          <Cart text='hello' />
        </Route>

        <Route exact path="/" >
          <ProductList />
        </Route>

      </HashRouter>
    </div>
  );
}

export default App;