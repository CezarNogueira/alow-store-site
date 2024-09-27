import './Day_sales.css';
import Product_sale from '../../components/Product-sale/Product_sale';

export default function Day_sales() {
    return (
        <div className='main-container'>
            <section>
                <div className='product-sale-wrapper'>
                    <Product_sale />
                </div>
            </section>
        </div>
    );
}