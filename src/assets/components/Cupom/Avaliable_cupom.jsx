export default function Avaliable_cupom() {
    return (
        <div className="cupom-container">
            <img alt="Logo da JBL" className="cupom-image" src="jbl-logo.svg"/>
            <div className="cupom-details">
                <p className='cupom-name'>CUPOM: JBL200</p>
                <p>10% de DESCONTO em todos os produtos JBL</p>
            </div>
            <div className='cupom-button-wrapper'>
                <button className="cupom-button">RESGATAR</button>
            </div>
        </div>
    )
};