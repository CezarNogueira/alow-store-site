import './Cupons.css';
import Cupom from '../../components/Cupom/Cupom';
import Cupom2 from '../../components/Cupom/Cupom2';
import Avaliable_cupom from '../../components/Cupom/Avaliable_cupom';

export default function Cupons() {
    return (
        <div className='main-container'>
            <section>
                <div className='cupons-wrapper'>
                    <div className='yours-cupons-wrapper'>
                        <div className='cupons-title'>
                            <h3>Seus Cupons</h3>
                        </div>
                        <div className='cupom-wrapper'>
                            <Cupom />
                            <Cupom2 />
                        </div>
                    </div>
                    <div className='available-cupons-wrapper'>
                        <div className='cupons-title'>
                            <h3>Cupons Disponiveis</h3>
                        </div>
                        <div className='cupom-wrapper'>
                            <Avaliable_cupom />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}