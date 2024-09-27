import './Colection.css';

export default function Colection() {
    return (
        <div className='colection-container'>
            <div className='colection-content'>
                <div className='product-card'>
                    <div className='product-image'>
                        <img src="https://imgs.casasbahia.com.br/55065309/1g.jpg" alt="Produto 1" />
                    </div>
                    <div className='product-name'>
                        <p>Apple Iphone 15 (128Gb)</p>
                    </div>
                    <div className='product-price'>
                        <p>R$ 4.762,90</p>
                    </div>
                </div>
                <div className='product-card'>
                    <div className='product-image'>
                        <img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/588696/Notebook-Gamer-Dell-G15-i1300-m75p-RTX-4050-13-Gera-o-Intel-Core-I7-16GB-SSD-1TB-Nvidia-WINDOWS-1115-6-FULL-HD_1719950047_gg.jpg" alt="Produto 2" />
                    </div>
                    <div className='product-name'>
                        <p>Notbook Gamer Dell</p>
                    </div>
                    <div className='product-price'>
                        <p>R$ 9.262,12</p>
                    </div>
                </div>
                <div className='product-card'>
                    <div className='product-image'>
                        <img src="https://imgs.extra.com.br/55042591/1g.jpg" alt="Produto 3" />
                    </div>
                    <div className='product-name'>
                        <p>Jbl Party Box 110</p>
                    </div>
                    <div className='product-price'>
                        <p>R$ 2.112,72</p>
                    </div>
                </div>
                <div className='product-card'>
                    <div className='product-image'>
                        <img src="https://cdn.sistemawbuy.com.br/arquivos/152c149c9b4766fac54690f0c1ca4308/produtos/643d9d63a542f/blusa-moletom-bege-2-667efda7653e1.jpg" alt="Produto 4" />
                    </div>
                    <div className='product-name'>
                        <p>Blusa Moletom Canguru</p>
                    </div>
                    <div className='product-price'>
                        <p>R$ 102,10</p>
                    </div>
                </div>
            </div>
        </div>
    );
}