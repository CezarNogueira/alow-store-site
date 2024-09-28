import './Day_sales.css';
import Product_sale from '../../components/Product-sale/Product_sale';
import Product_sale2 from '../../components/Product-sale/Product_sale2';

export default function Day_sales() {
    return (
        <div className='main-container'>
            <section>
                <div className='product-sale-wrapper'>
                    <Product_sale />
                    <Product_sale2 />
                </div>
            </section>
        </div>
    );
}