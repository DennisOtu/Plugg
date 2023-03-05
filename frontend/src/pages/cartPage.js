import NavBar from "../components/navBar"
import axios from "axios"
import { useQuery } from 'react-query'

function CartPage(props) {
    
    const getCart = () => {
        return axios.get('http://localhost:8000/api/v1/cart')
    }

    const { data, isLoading } = useQuery('cartInfo', getCart)
    
    if (data) {
        console.log(data.data)
    }

    return (
        <div>
            <NavBar/>
            <h1 style={{ marginTop:'55px'}}>CART PAGE</h1>
            {isLoading && <h3>Loading...</h3>}
            {data && <p>ITEMS IN CART = { data.data.cartItems }</p>}
        </div>
    )
}

export default CartPage

