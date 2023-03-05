function ImageCarousel(props) {
    
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

        function moveToSlide(track, currentSlide, targetSlide) {
            track.style.transform = `translateX(-${targetSlide.style.left})`
            currentSlide.classList.remove('activeSlide')
            targetSlide.classList.add('activeSlide')
        }

        nextBtn.addEventListener('click', e => {
            const currentSlide = track.querySelector('.activeSlide')
            const nextSlide = currentSlide.nextElementSibling
            
            moveToSlide(track, currentSlide, nextSlide)
        })

        previousBtn.addEventListener('click', e => {
            const currentSlide = track.querySelector('.activeSlide')
            const prevSlide = currentSlide.previousElementSibling

            moveToSlide(track, currentSlide, prevSlide)
        })
    }
    
    return (
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

    )
}



export default ImageCarousel


