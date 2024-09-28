import './Header.css';
import { MdFavoriteBorder } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header-container'>
            <div className='header-wrapper'>
                <div className='header-content'>
                    <div className='header-element--hamburger'>
                        <GiHamburgerMenu />
                    </div>

                    <div className='header-element--logo'>
                        <Link to='/'>
                            <img className='header-logo--img' src="alow_logo.svg" alt="Logo"/>
                        </Link>
                    </div>

                    <div className='header-elements--searchbar'>
                        <form className='header-searchbar--form' action="">
                            <input className='searchbar-form--input' placeholder='Buscar' type="text" />
                        </form>
                    </div>
                    <div className="header-elements--buttons">
                        <div className='header-element--favorite'>   
                            <button className='header-favorite--button'>
                                <MdFavoriteBorder/>
                            </button>
                        </div>

                        <div className='header-element--support'>
                            <button className='header-support--button'>
                                <MdSupportAgent />
                            </button>
                        </div>

                        <div className='header-element--cart'>
                            <button className='header-cart--button'>
                                <MdOutlineShoppingCart />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='header-elements--searchbar-mobile'>
                    <form className='header-searchbar--form' action="">
                        <input className='searchbar-form--input' placeholder='Buscar' type="text" />
                    </form>
                </div>
            </div>
        </div>
    );
}