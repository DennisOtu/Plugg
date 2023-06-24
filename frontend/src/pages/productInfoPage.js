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
	            	<div style={{ width: '25%', paddingInline: '1rem', marginTop: '3rem'}}>
		                <div style={{ display: 'flex', flexDirection: 'column'}}>
		                	<img className="productDetailImg" src={ data.data.color_1_image }/>
		                	<div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
		                		<img className='productDetailThumbnail' src={ data.data.color_1_thumbnail} />
		                		<img className='productDetailThumbnail' src={ data.data.color_2_thumbnail} />
		                	</div>
		                </div>
	            	</div>
	            	
	            	<div style={{ width: '50%', paddingInline: '1rem', paddingTop: '3rem'}}>
	            		<h6 style={{ textAlign: 'center', marginBottom: '2rem'}}>{data.data.name}</h6>
	            		<p>Visit the shop </p>
	            		<p>Ratings(Number of stars)</p>
		             	<p style={{ fontWeight: 'bold', color: 'black'}}> ${ data.data.price }</p>
		            	<p style={{ fontSize: '12px'}}><span style={{ color: 'var(--pluggRed)', fontWeight: 'bold'}}>{ data.data.likes_count} </span>
		            	  people like this product
		            	</p>
	            		<p>Variant </p>
	            		<p>Material</p>
	            		<p>Dimensions</p>
	            		<p>Weight</p>
	            		<p>Shipping Time</p>
		             	<h6 style={{ textAlign: 'center', marginTop: '1rem', fontWeight: 'bold'}}>DESCRIPTION</h6>
		             	<ul style={{ fontSize: '14px'}}>
		             	  <li>Aenean bibendum vehicula nunc. Quisque id nisl ut metus fringilla tristique imperdiet ac diam. 
			             	Suspendisse potenti. Phasellus sed auctor urna.
			              </li>
		             	  <li>Aenean bibendum vehicula nunc. Quisque id nisl ut metus fringilla tristique imperdiet ac diam. 
			             	Suspendisse potenti. Phasellus sed auctor urna. Nulla in dolor a ante pulvinar eleifend. 
			             	Proin eleifend libero eu malesuada rhoncus. Donec id massa congue, tristique neque et</li>
		             	  <li>Aenean bibendum vehicula nunc. Quisque id nisl ut metus fringilla tristique imperdiet ac diam. 
			             	Suspendisse potenti.
			              </li>
		             	  <li>Aenean bibendum vehicula nunc.</li>
		             	  <li>Aenean bibendum vehicula nunc. Quisque id nisl ut metus fringilla tristique imperdiet ac diam. 
			             	Suspendisse potenti. Phasellus sed auctor urna. Nulla in dolor a ante.
			              </li>
		             	</ul>
		             	<p>Ratings</p>
	            		<p>Reviews</p>
	            	</div>

	            	<div style={{ width: '20%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4rem'}}
	            	>
	                	{/*<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', 
	                		justifyContent: 'center', width: '40%'}}>
	                		<h3 style={{ fontFamily: 'var(--fontHead)', color: 'var(--pluggRed)' }}>
	                			Variant
	                		</h3>

	                		<p style={{ fontSize: '14px'}}>{ data.data.color_1 }</p>

	                		<p style={{ fontSize: '14px'}}>{ data.data.color_2 }</p>

	                	</div>*/}

		             	<h6 style={{ color: 'var(--pluggRed)', fontWeight: 'bold'}}> ${ data.data.price }</h6>
		             	<p>Shiping and import cost</p>
		             	<p>Delivery date</p>
		             	<p>In Stock or Not</p>
		             	<p>Quantity left</p>		             	
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