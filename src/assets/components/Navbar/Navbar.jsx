import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <div className='navbar-wrapper'>
                <div className='navbar-content'>
                    <div className='navbar-text'>
                        <p>CATEGORIAS</p>
                    </div>
                
                    <div className='navbar-div'></div>
                    <div className='navbar-text'>
                        <Link className='NavLink' to='/day-sales'>OFERTAS DO DIA</Link>
                    </div>

                    <div className='navbar-div'></div>
                    <div className='navbar-text'>
                        <Link className='NavLink' to='/cupons'>CUPONS</Link>
                    </div>

                    <div className='navbar-div'></div>
                    <div className='navbar-text'>
                        <p>INFORMATICA</p>
                    </div>

                    <div className='navbar-div'></div>
                    <div className='navbar-text'>
                        <p>NOVIDADES</p>
                    </div>

                    <div className='navbar-div'></div>
                    <div className='navbar-text'>
                        <p>ACESSÓRIOS</p>
                    </div>

                    <div className='navbar-div'></div>
                    <div className='navbar-text'>
                        <p>MÚSICA</p>
                    </div>

                    <div className='navbar-div'></div>
                    <div className='navbar-text'>
                        <p>MODA</p>
                    </div>

                    <div className='navbar-div'></div>
                    <div className='navbar-text'>
                        <p>ATENDIMENTO</p>
                    </div>
                </div>
            </div>
        </div>
    );
}