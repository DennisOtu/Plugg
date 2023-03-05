import NavBar from '../components/navBar'
import CategoriesList from '../components/categoriesList'
import ImageCarousel from '../components/imageCarousel'
import ProductsList from '../components/productsList'
import DealsList from '../components/dealsList'
import Footer from '../components/footer'

function HomePage(props) {

    return (
        <div>
            <NavBar />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                height: '50vh',
                marginTop: 'var(--navBarHeight)',
                padding: '1px'
            }}>
                <CategoriesList />
                <ImageCarousel />
            </div>

            <DealsList />

            <ProductsList />

            <Footer />
        </div>
    )
}

export default HomePage

