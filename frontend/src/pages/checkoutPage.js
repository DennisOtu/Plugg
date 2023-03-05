import NavBar from "../components/navBar"
import axios from "axios"
import { useQuery } from 'react-query'

function CheckoutPage(props) {

    const getCheckout = () => {
        return axios.get('http://localhost:8000/api/v1/checkout')
    }

    const { data, isLoading } = useQuery('checkoutInfo', getCheckout)
    
    if (data) {
        console.log(data.data)
    }

    return (
        <div>
            <NavBar/>
            <h1>CHECKOUT PAGE</h1>
            {isLoading && <h3>Loading...</h3>}
            {data && <p>ITEMS IN CART { data.data.cartItems }</p>}
        </div>
    )
}

export default CheckoutPage
