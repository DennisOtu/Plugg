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
            {isLoading && <h3>Loading...</h3>}
		    {data &&
	            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', margin: 'var(--navBarHeight)' }}>
	            	<div style={{ width: '60%', paddingInline: '1rem'}}>
		                <div style={{ display: 'flex', flexDirection: 'row'}}>
		                	<img className="productDetailImg" src={ data.data.color_1_image }/>

		                </div>

		             	<h5 style={{ textAlign: 'center'}}> {data.data.name} </h5>

		             	<h3 style={{ textAlign: 'center', marginTop: '1rem'}}> DESCRIPTION </h3>

		             	<p> 
			             	Aenean bibendum vehicula nunc. Quisque id nisl ut metus fringilla tristique imperdiet ac diam. 
			             	Suspendisse potenti. Phasellus sed auctor urna. Nulla in dolor a ante pulvinar eleifend. 
			             	Proin eleifend libero eu malesuada rhoncus. Donec id massa congue, tristique neque et. 
		             	</p>
	            	</div>

	            	<div style={{ width: '30%', display: 'flex', 
		            	flexDirection: 'column', alignItems: 'center', 
		            	justifyContent: 'center', textAlign: 'center'}}
	            	>
	                	<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', 
	                		justifyContent: 'center', width: '40%'}}>
	                		<h3 style={{ fontFamily: 'var(--fontHead)', color: 'var(--pluggRed)' }}>
	                			Variant
	                		</h3>

	                		<p style={{ fontSize: '14px'}}>{ data.data.color_1 }</p>

	                		<p style={{ fontSize: '14px'}}>{ data.data.color_2 }</p>

	                	</div>

		             	<h1 style={{ color: 'var(--pluggRed)'}}> ${ data.data.price }</h1>

		             	<h5>  <span style={{ color: 'var(--pluggRed)'}}> { data.data.likes_count} </span> people like this product</h5>
		             	
	                    <button className="btnPill" data-product="{{ product.id }}" data-action="add">ADD TO CART
		                    <i className="fas fa-plus"></i><i class="fas fa-shopping-cart"></i>
	                	</button>

	               

	            	</div>
	            </div>
        	}
         	<Footer />
        </div>
    )
}

export default ProductInfoPage;