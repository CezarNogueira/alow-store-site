import './Cupom.css';

export default function Cupom() {
    return (
        <div className="cupom-container">
            <img alt="Logo da JBL" className="cupom-image" src="jbl-logo.svg"/>
            <div className="cupom-details">
                <p className='cupom-name'>CUPOM: JBL100</p>
                <p>5% de DESCONTO em todos os produtos JBL</p>
            </div>
            <div className='cupom-button-wrapper'>
                <button className="cupom-button">USAR</button>
            </div>
        </div>
    )
};