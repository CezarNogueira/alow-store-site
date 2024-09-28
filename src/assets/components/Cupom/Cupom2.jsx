export default function Cupom2() {
    return (
        <div className="cupom-container">
            <img alt="Logo da Samsung" className="cupom-image" src="samsung-logo.png"/>
            <div className="cupom-details">
                <p className='cupom-name'>CUPOM: SAM8</p>
                <p>8% de DESCONTO em todos os produtos Samsung</p>
            </div>
            <div className='cupom-button-wrapper'>
                <button className="cupom-button">USAR</button>
            </div>
        </div>
    )
};