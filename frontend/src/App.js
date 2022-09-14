import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/homePage'
import NavBar from './components/navBar'
import ProductInfoPage from './components/productInfoPage'
import CartPage from './components/cartPage'
import CheckoutPage from './components/checkoutPage'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='product/:productID' element={<ProductInfoPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='checkout' element={<CheckoutPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
