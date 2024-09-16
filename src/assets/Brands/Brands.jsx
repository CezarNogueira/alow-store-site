import './Brands.css';

export default function Brands() {
    return (
        <div className='brands-container'>
            <div className='brands-content'>
                <div className='brands-title'>
                    <p>MARCAS</p>
                </div>
                <div className='brands-elements'>
                    <div className='brand-card'>
                        <img src="jbl-logo.svg" alt="Logo da JBL" />
                    </div>
                    <div className='brand-card'>
                        <img src="samsung-logo.png" alt="Logo da Samsung" />
                    </div>
                    <div className='brand-card'>
                        <img src="razer-logo.svg" alt="Logo da Razer" />
                    </div>
                    <div className='brand-card'>
                        <img src="hering-logo.svg" alt="Logo da Hering" />
                    </div>
                </div>
            </div>
        </div>
    );
}