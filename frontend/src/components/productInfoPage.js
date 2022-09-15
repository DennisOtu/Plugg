import NavBar from './navBar'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useParams } from "react-router-dom"

const ProductInfoPage = () => {
    const { productID } = useParams()
    
    const getOne = () => {
        return axios.get(`http://localhost:8000/api/v1/product/${productID}`)
    }

    const { data, isLoading } = useQuery('productInfo', getOne)

    if (data) {
        console.log(data.data);
    }
    
    return (
        <div>
            <NavBar/>
            <h1>PRODUCT INFO FOR PRODUCT {productID}</h1>
            {isLoading && <h3>Loading...</h3>}
            {data && <h2>PRODCUT NAME = {data.data.name} </h2>}
        </div>
    )
}

export default ProductInfoPage;