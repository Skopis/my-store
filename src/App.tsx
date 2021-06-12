import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import ProductList from './views/ProductList';
import Cart from './views/Cart';
import AppHeader from './cmps/AppHeader';
import './assets/style.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getProductList } from './store/actions/index'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('useEffect')
    dispatch(getProductList())
  }, [])
  const productListFromAPI = useSelector((state: any) => state.productList)

  return (
    <div className="App">
      <HashRouter>
        <AppHeader />

        <Route path="/cart" >
          <Cart text='hello' />
        </Route>

        <Route exact path="/" >
          <ProductList products={productListFromAPI} />
        </Route>

      </HashRouter>
    </div>
  );
}

export default App;