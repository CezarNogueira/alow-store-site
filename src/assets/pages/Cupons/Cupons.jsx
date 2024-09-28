import './Cupons.css';

export default function Cupons() {
    return (
        <div className='main-container'>
            <section>
                <div className='cupons-wrapper'>
                    <div className='yours-cupons-wrapper'>
                        <h3>Seus Cupons</h3>
                    </div>
                    <div className='available-cupons-wrapper'>
                        <h3>Cupons Disponiveis</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}