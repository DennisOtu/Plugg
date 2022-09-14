import { useParams } from "react-router-dom"



const ProductInfoPage = () => {
    const {productID} = useParams()

    return (
        <div>
            <h1>PRODUCT INFO FOR {productID}</h1>
        </div>
    )
}

export default ProductInfoPage;