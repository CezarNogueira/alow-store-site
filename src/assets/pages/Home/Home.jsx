import './Home.css';
import Carousel from '../../components/Carousel/Carousel.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import Colection from '../../components/Colection/Colection.jsx';
import Brands from '../../components/Brands/Brands.jsx';

export default function Home() {
    return (
        <div className='home-container'>
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