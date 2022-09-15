import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/homePage'
import ProductInfoPage from './components/productInfoPage'
import CartPage from './components/cartPage'
import CheckoutPage from './components/checkoutPage'
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
    <QueryClientProvider client={queryClient}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='product/:productID' element={<ProductInfoPage/>} />
          <Route path='cart' element={<CartPage/>} />
          <Route path='checkout' element={<CheckoutPage/>} />

        </Routes>
      </BrowserRouter>
        
      <ReactQueryDevtools initialIsOpen={false} />
        
    </QueryClientProvider>

    </div>
  );
}

export default App;
