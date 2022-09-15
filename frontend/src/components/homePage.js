import NavBar from './navBar'
import { useQuery } from 'react-query'
import axios from 'axios'

function HomePage(props) {

    const getAll = () => {
        return axios.get('http://localhost:8000/api/v1/product/all')
    }

    const { data, isLoading } = useQuery('allProducts', getAll)

    if (data) {
        console.log(data.data);
    }

    return (
        <div>
            <NavBar/>
            <h1>WELCOME TO PLUGG</h1>
            <h3>PRODUCTS:</h3>
            {isLoading && <h3>Loading Products...</h3>}
            {data && data.data.map(product => 
                <p>{product.name}</p>
            )}
        </div>
    )
}

export default HomePage;

