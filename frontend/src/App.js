import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import ProductInfoPage from './pages/productInfoPage'
import CartPage from './pages/cartPage'
import CheckoutPage from './pages/checkoutPage'
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools'
//import 'bootstrap/dist/css/bootstrap.min.css'

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
