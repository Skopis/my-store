import { Route, HashRouter } from 'react-router-dom';
//cmps
import ProductList from './views/ProductList';
import Cart from './views/Cart';
import AppHeader from './cmps/AppHeader';
//styles
import './assets/style.css'


function App() {

  return (
      <div className="App">
        <HashRouter>
          <AppHeader />

          <Route component={Cart} path="/cart" />
          <Route component={ProductList} exact path="/" />

        </HashRouter>
      </div>
  );
}

export default App;