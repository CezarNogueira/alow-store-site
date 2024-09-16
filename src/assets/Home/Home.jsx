import './Home.css';
import Carousel from '../Carousel/Carousel.jsx';
import Banner from '../Banner(Home)/Banner.jsx';
import Colection from '../Colection/Colection.jsx';
import Brands from '../Brands/Brands.jsx';

export default function Home() {
    return (
        <div className='main-container'>
            <section>
                <div className='carousel-wrapper'>
                    <Carousel />
                </div>
                <div className='colection-wrapper'>
                    <Colection />                  
                </div>
                <div className='banner-wrapper'>
                    <Banner />
                </div>
                <div className='brands-wrapper'>
                    <Brands />
                </div>
            </section>
        </div>
    );
}