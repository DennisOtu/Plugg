import NavBar from '../components/navBar'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useParams } from "react-router-dom"
import Footer from '../components/footer'

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
            <h1 style={{marginTop: 'var(--navBarHeight)'}}>PRODUCT INFO FOR PRODUCT {productID}</h1>
            {isLoading && <h3>Loading...</h3>}
            {data &&
            	<>
	                <div>
	                	<img className="productDetailImg" src={ data.data.image_url }/>
	                </div>

	             	<h2>PRODCUT NAME = {data.data.name} </h2>
            	</>

         	}

         	<Footer />
        </div>
    )
}

export default ProductInfoPage;