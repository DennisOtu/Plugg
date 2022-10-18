import NavBar from './navBar'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'

function HomePage(props) {

    const getAll = () => {
        return axios.get('http://localhost:8000/api/v1/product/all')
    }

    const { data, isLoading } = useQuery('allProducts', getAll)

    if (data) {
        console.log(data.data)
    }

    return (
        <div>
            <NavBar />

            <div className="d-flex flex-row" style={{height: '60vh', marginTop: 'var(--navBarHieght)', padding: '0.4rem'}}>
                <div className="categoriesDiv">
                    <div>Electronics</div>
                    <div>Fashion</div>
                    <div>Food</div>
                    <div>Health</div>
                </div>
                <div className="heroDiv">
                    <div className="heroCarousel">
                        <div style={{ backgroundImage: 'url("https://source.unsplash.com/_3Q3tsJ01nc/1000x400")', backgroundSize: 'cover' }}
                            className="activeSlide">
                            <h1 style={{backgroundColor: 'rgba(0, 0, 0, 0.671)'}}>Slide 1</h1>
                        </div>
                        <div style={{backgroundImage: 'url("https://source.unsplash.com/eD1RNYzzUxc/1000x400")', backgroundSize: 'cover'}}>
                            <h1 style={{backgroundColor: 'rgba(0, 0, 0, 0.671)'}}>Slide 2</h1>
                        </div>
                        <div style={{backgroundImage: 'url("https://source.unsplash.com/FK81rxilUXg/1000x400")', backgroundSize: 'cover'}}>
                            <h1 style={{backgroundColor: 'rgba(0, 0, 0, 0.671)'}}>Slide 3</h1>
                        </div>
                    </div>
                    <button className="carouselPrev">prev</button>
                    <button className="carouselNext">next</button>
                </div>
            </div>
            <div className="dealsDiv">
                <h1>DEALS DIV</h1>
            </div>
            <div className='row p-4'>
                {isLoading && <h3>Loading...</h3>}
                {data && data.data.map(product => 
                    <div className="prodCard">
                        <Link > 
                            <div>
                                <img className="prodImg" src={ product.image }/>
                            </div>
                            <div className="prodCardInfo">
                                <p style={{fontFamily: 'var(--fontHead)', fontSize: '14px', textAlign: 'center'}}>{ product.name }</p>
                                <p style={{fontWeight: 'bold', marginBlock: '0'}}>${ product.price }</p>

                            </div>
                        </Link>
                        <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: '8px'}}>
                            <button data-product="{{ product.id }}" data-action="add" className="btnPill add-btn update-cart">
                                <i className="fas fa-plus"></i><i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

const track = document.querySelector('.heroCarousel')
    // HERO CAROUSEL FUNCTIONALITY
if (track) {
    const slides = Array.from(track.children)
    const nextBtn = document.querySelector('.carouselNext')
    const previousBtn = document.querySelector('.carouselPrev')
    // stack slides next to each other horizontally
    slides.forEach((slide, index) => {
        const slideWidth = slide.getBoundingClientRect().width
        slide.style.left = `${slideWidth * index}px`
    })

    function moveToSlide(track, currentSlide, targetSlide){
        track.style.transform = `translateX(-${targetSlide.style.left})`
        currentSlide.classList.remove('activeSlide')
        targetSlide.classList.add('activeSlide')
    }
    
    nextBtn.addEventListener('click', e =>{
        const currentSlide = track.querySelector('.activeSlide')
        const nextSlide = currentSlide.nextElementSibling
        
        moveToSlide(track, currentSlide, nextSlide)
    })
    
    previousBtn.addEventListener('click', e =>{
        const currentSlide = track.querySelector('.activeSlide')
        const prevSlide = currentSlide.previousElementSibling
    
        moveToSlide(track, currentSlide, prevSlide)
    })
}

export default HomePage

