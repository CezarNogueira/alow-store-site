import React from 'react';
import './Footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


export default function Footer() {

    return (
        <div className='footer-container'>
            <div className='newsletter-wrapper'>
                <div className='newsletter-content'>
                    <div className='newsletter-content--title'>
                        <h3>NEWS</h3>
                        <p>Receba ofertas</p>
                    </div>
                    <div className='newsletter-content--form'>
                        <form className='newsletter-form' action="">
                            <div className='newsletter-form--inputs'>
                                <input id='newsletter_name' className='newsletter-form--input' placeholder='Digite seu Nome' type="text" />
                                <input id='newsletter_email' className='newsletter-form--input' placeholder='Digite seu Email' type="email" />
                            </div>
                            <div className='newsletter-form--button'>
                                <button>CADASTRAR</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='footer-wrapper'>
                <div className='footer-content'>
                    <div className='footer-content--categorias'>
                        <h3>Categorias</h3>
                        <p>Moda Masculina</p>
                        <p>Moda Feminina</p>
                        <p>Smartphones</p>
                        <p>Notbooks</p>
                        <p>Monitores e TVs</p>
                        <p>Caixas de Som</p>
                        <p>Headphones e Headsets</p>
                    </div>
                    <div className='footer-content--acessibilidade'>
                        <h3>Acessibilidade</h3>
                        <p>Tradutor em Libras</p>
                    </div>
                    <div className='footer-content--redes_sociais'>
                        <h3>Redes Sociais</h3>
                        <div className='redes-sociais--icons'>
                            <FaFacebookF />
                            <FaInstagram />
                            <FaTiktok />
                        </div>
                    </div>
                    <div className='footer-content--pagamento'>
                        <h3>Pagamento</h3>
                        <p>Cartão de Debito</p>
                        <p>Cartão de Credito</p>
                        <p>Boleto</p>
                        <p>Pix</p>
                    </div>
                    <div className='fototer-content--faq'>
                        <h3>FAQ</h3>
                        <p>Orientações</p>
                    </div>
                    <div className='footer-content--atendimento'>
                        <h3>Atendimento</h3>
                        <p>
                        Horário de atendimento:
                        08:00 às 20:00 -
                        Segunda a Sexta,
                        09:00 às 15:00 -
                        Sabado,
                        horário de Brasília
                        (Exceto domingo e feriados)
                        </p>
                    </div>
                </div>
            </div>
            <div className='copyright-wrapper'>
                <div className='copyright-text'>
                    <p>© Todos os Direitos Reservados</p>
                </div>
            </div>
        </div>
    )
}