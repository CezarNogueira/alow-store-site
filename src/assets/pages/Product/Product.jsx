import './Product.css';

export default function Product() {
  return (
    <div className='main-container'>
        <section>
            <div className="product-wrapper">
                <div className='product-name-title'>
                    <h1 className="product-name">JBL Partybox 100 Caixa De Som Bluetooth Portátil Preta</h1>
                </div>
                <div className='product-info'>
                    <div className="product-image">
                        <img src="https://imgs.extra.com.br/55042591/1g.jpg" alt="JBL Partybox 100" />
                    </div>

                    <div className="product-details">
                        <div className='delivery-info'>
                            <p>Vendido e entregue por: Alow | <span>Em estoque</span></p>
                        </div>
                        <div className='shipping-info'>
                            <p>Frete Grátis</p>
                        </div>
                        <div className='price-info'>
                            <p class="original-price">R$ 2.657,68</p>
                            <p className="discounted-price">R$ 1.912,72</p>
                            <p class="discount-details">À vista no PIX com até 5% OFF</p>
                        </div>
                        <div class="installment-info">
                        R$ 2.185,94
                        Em até 10x de R$ 218,60 sem juros no cartão ou em 1x no cartão com até 5% OFF
                        </div>
                        <div className="product-buttons">
                            <button className="buy-button">COMPRAR</button>
                            <button className="add-to-cart-button"><img src="add_shopping_cart.svg" alt="adicionar ao carrinho" /></button>
                        </div>
                    </div>
                </div>
            

                <div className="product-description">
                    <h2>Descrição do Produto</h2>
                    <p>
                    Uma caixa de som projetada para trazer um som potente e animar festas com qualidade de áudio e recursos especiais. Ela possui um design robusto e moderno, com uma grade frontal que destaca as luzes LED que piscam ao ritmo da música, criando um efeito visual envolvente.
                    </p>
                    <h3>ESPECIFICAÇÕES</h3>
                    <ul>
                    <li>Marca: JBL</li>
                    <li>Modelo: PartyBox 100</li>
                    <li>Voltagem: Bivolt</li>
                    <li>Potência: 160W</li>
                    </ul>
                    <h3>CARACTERÍSTICAS</h3>
                    <ul>
                    <li>Versão do Bluetooth: 4.2</li>
                    <li>Bateria Recarregável: Sim</li>
                    <li>
                        Autonomia da Bateria: 12 horas (Possivel com uma forte predefinida de musicas, show de luzes desligado, volume no nivel 7 e transmitido
                        via Bluetooth)
                    </li>
                    <li>Tempo de Carregamento: 6,5 horas</li>
                    <li>Capacidade da Bateria (mAh): 2500mAh</li>
                    <li>Tipo de Bateria: Íon de lítio</li>
                    <li>Voltagem da Bateria: 14.4V</li>
                    <li>Entrada: Porta USB, entrada auxiliar de 3,5 mm para microfone/guitarra/violão com controle de volume</li>
                    <li>Terminais de saída: Saída auxiliar</li>
                    <li>Função Show de Luzes: Sim</li>
                    <li>True Wireless Stereo: Sim</li>
                    </ul>
                    <h3>DIMENSÕES E PESO</h3>
                    <ul>
                    <li>Altura: 55.1 cm</li>
                    <li>Largura: 28.8 cm</li>
                    <li>Profundidade: 29 cm</li>
                    <li>Peso: 8.7 kg</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
  );
};