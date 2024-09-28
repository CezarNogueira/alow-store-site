import './Product_sale.css';

export default function Product_sale() {
    return (
        <div className="product-sale-container">
            <img alt="JBL Party Box 100" className="product-sale-image" src="jbl-product-sale.svg"/>
            <div className="product-sale-details">
                <span className="discount">39%</span>
                <span className="price">R$ 1.912,72</span>
            </div>
            <div className='buy-button-wrapper'>
                <button className="buy-button">COMPRE AGORA!</button>
            </div>
        </div>
    )
};