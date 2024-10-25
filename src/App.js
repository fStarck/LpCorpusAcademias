import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { ImWhatsapp, ImLocation } from "react-icons/im";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa6";

function App() {
  // Configuração para o slider do hero
  const heroSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // Configuração para o slider de cards
  const cardSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Para telas menores que 768px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [activeIndex, setActiveIndex] = useState(null);

  // Função para alternar o estado de exibição da resposta
  const toggleFAQ = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null); // Fecha a resposta se já estiver aberta
    } else {
      setActiveIndex(index); // Abre a resposta da pergunta clicada
    }
  };

  const faqData = [
    { question: "Qual é o valor da mensalidade?", answer: "A partir de R$99,90 no Clube de Vantagens. Maiores informações na recepção da unidade." },
    { question: "Qual o horário de funcionamento das unidades de Capela e Araçoiaba?", answer: "De segunda a sexta-feira, das 6h às 22h, e aos sábados, das 8h às 13h." },
    { question: "Qual o horário de funcionamento da unidade do Distrito do Porto?", answer: "De segunda a sexta-feira, das 6h às 11h e das 15h às 21h, e aos sábados, das 8h às 12h." },
    { question: "Vocês aceitam Gympass?", answer: "Não aceitamos Gympass, apenas Totalpass. Maiores informações na recepção da unidade." },
    { question: "Quais planos estão disponíveis?", answer: "Oferecemos uma variedade de planos, incluindo opções no Clube de Vantagens. Para mais detalhes, consulte a recepção." },
    { question: "Tem aula experimental?", answer: "Sim, oferecemos aulas experimentais! Consulte a recepção para agendar a sua." },
    { question: "Há aulas de funcional ou jump?", answer: "Sim, temos diversas aulas como funcional, jump e muito mais. Consulte nossa grade de horários." },
    { question: "Vocês oferecem planos familiares ou com desconto para casais?", answer: "Sim, temos planos familiares e opções de desconto para quem treina em conjunto. Consulte a recepção para mais detalhes." },
    { question: "Posso transferir meu plano para outra pessoa?", answer: "Sim, permitimos a transferência de planos. Consulte as condições na recepção." },
    { question: "Quem já foi aluno precisa pagar a taxa de matrícula novamente?", answer: "Depende do tempo de inatividade. Verifique as condições na recepção." },
    { question: "Qual é a forma de pagamento dos planos?", answer: "Os planos podem ser pagos no cartão de crédito. Consulte a recepção para outras opções." },
    { question: "Há desconto para mais de uma pessoa treinando junta?", answer: "Sim, oferecemos descontos para grupos e famílias. Consulte as condições na recepção." },
    { question: "Quero marcar uma avaliação, como faço?", answer: "É fácil! Basta entrar em contato com a recepção ou agendar pelo aplicativo." },
    { question: "Qual é o benefício do Clube +?", answer: "Com o Clube +, você tem acesso a vantagens exclusivas como descontos em produtos e serviços. Consulte a recepção para mais detalhes." }
  ];

  useEffect(() => {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("openModalBtn");
    const span = document.getElementsByClassName("close")[0];

    if (modal && btn && span) {
      btn.onclick = function () {
        modal.style.display = "block";
      };

      span.onclick = function () {
        modal.style.display = "none";
      };

      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      };
    }
  }, []);

  // Função para detectar o sistema operacional
  const detectOS = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Detectar iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }

    // Detectar Android
    if (/android/i.test(userAgent)) {
      return "Android";
    }

    // Caso seja PC ou outro sistema
    return "PC";
  };

  // Função que será chamada quando o botão for clicado
  const handleDownloadClick = () => {
    const os = detectOS();

    if (os === "iOS") {
      // Link para a App Store
      window.location.href = "https://apps.apple.com/br/app/corpus-app";
    } else if (os === "Android") {
      // Link para o Google Play
      window.location.href = "https://play.google.com/store/apps/details?id=corpus.app";
    } else {
      // Ação para PC (podemos redirecionar para uma página ou mostrar uma mensagem)
      alert("Para baixar o aplicativo, visite nossa página oficial em seu dispositivo móvel!");
    }
  };

  return (
    <div className="App">
      {/* Hero Section - Carrossel de Imagens */}
      <Slider {...heroSettings}>
        <div>
          <img
            src="img/banner-hero-1.png"
            alt="Imagem 1"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="img/banner-hero-2.png"
            alt="Imagem 2"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="img/banner-hero-3.png"
            alt="Imagem 3"
            className="carousel-image"
          />
        </div>
      </Slider>

      {/* Banner Aula Grátis */}
      <section id="banner-aula-gratis">
        <div className="container">
          <img
            src="img/faixa-agende-sua-aula.png"
            alt="Faixa com a imagem 'Agende sua aula grátis'"
          />
          <p>Garanta sua aula experimental grátis!</p>
          <button id="openModalBtn">Agende Agora</button>
        </div>
      </section>

      {/* Conheça Nossas Unidades */}
      <section id="nossas-unidades">
        <div className="unidades">
          <h2>Conheça Nossas Unidades</h2>
          <p>Contamos com unidades em diferentes regiões. Venha nos conhecer!</p>

          <div className="card-container">
            {/* Card 1: Araçoiaba da Serra */}
            <div className="card">
              <img src="img/fachada-aracoiaba.png" alt="Araçoiaba da Serra" className="card-image" />
              <div className="card-content">
                <h3><GiWeightLiftingUp /> Araçoiaba da Serra <GiWeightLiftingUp /></h3>
                <p><ImLocation /> Av. Ângelo Pupin, 158 <br /> Jardim Primavera</p>
                <a
                  href="https://wa.me/551597580128"
                  className="cta-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImWhatsapp /> (15) 9.9758-0128
                </a>
              </div>
            </div>

            {/* Card 2: Capela do Alto */}
            <div className="card">
              <img src="img/fachada-capela.png" alt="Capela do Alto" className="card-image" />
              <div className="card-content">
                <h3><GiWeightLiftingUp /> Capela do Alto <GiWeightLiftingUp /></h3>
                <p><ImLocation /> R. João Felipe, 125 <br /> Centro</p>
                <a
                  href="https://wa.me/55159991969092"
                  className="cta-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImWhatsapp /> (15) 9.9196-9092
                </a>
              </div>
            </div>

            {/* Card 3: Distrito do Porto */}
            <div className="card">
              <img src="img/fachada-porto.png" alt="Distrito do Porto" className="card-image" />
              <div className="card-content">
                <h3><GiWeightLiftingUp /> Distrito do Porto <GiWeightLiftingUp /></h3>
                <p><ImLocation /> Av. Bom Jesus, 41 <br /> Distrito do Porto</p>
                <a
                  href="https://wa.me/55159998886915"
                  className="cta-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImWhatsapp /> (15) 9.9888-6915
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aulas e Treinos */}
      <section id="aulas-e-treinos">
        <div className="aulas">
          <h2>Aulas e Treinos</h2>
          <p>Descubra nossas modalidades de treino e escolha a que mais combina com você!</p>

          {/* Slider de Cards */}
          <Slider {...cardSettings} className="card-slider">

            {/* Card 1: Jump */}
            <div className="card-aulas">
              <img src="img/Aula1.png" alt="Jump" className="card-image" />
              <div className="card-content">
                <h3>Jump</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laboriosam nesciunt voluptates ea architecto obcaecati!</p>
              </div>
            </div>

            {/* Card 2: Localizada */}
            <div className="card-aulas">
              <img src="img/Aula2.png" alt="Localizada" className="card-image" />
              <div className="card-content">
                <h3>Localizada</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, exercitationem vitae aut cum asperiores harum natus aliquam minima?</p>
              </div>
            </div>

            {/* Card 3: Funcional */}
            <div className="card-aulas">
              <img src="img/Aula3.png" alt="Funcional" className="card-image" />
              <div className="card-content">
                <h3>Funcional</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestiae nam quisquam illum?</p>
              </div>
            </div>

            {/* Card 4: Alongamento */}
            <div className="card-aulas">
              <img src="img/Aula4.png" alt="Alongamento" className="card-image" />
              <div className="card-content">
                <h3>Alongamento</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe repellendus debitis unde veniam illo possimus voluptatibus reiciendis.</p>
              </div>
            </div>

            {/* Card 5: Abdominal */}
            <div className="card-aulas">
              <img src="img/Aula5.png" alt="Abdominal" className="card-image" />
              <div className="card-content">
                <h3>Abdominal</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi facilis a eveniet autem repellendus. Minima.</p>
              </div>
            </div>

            {/* Card 6: Ritmos */}
            <div className="card-aulas">
              <img src="img/Aula6.png" alt="Ritmos" className="card-image" />
              <div className="card-content">
                <h3>Ritmos</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, voluptate.</p>
              </div>
            </div>

            {/* Card 7: Step */}
            <div className="card-aulas">
              <img src="img/Aula7.png" alt="Step" className="card-image" />
              <div className="card-content">
                <h3>Step</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam tenetur repellendus esse impedit ad ipsam culpa dolor itaque enim expedita.</p>
              </div>
            </div>

            {/* Card 8: Cross Power */}
            <div className="card-aulas">
              <img src="img/Aula8.png" alt="Cross Power" className="card-image" />
              <div className="card-content">
                <h3>Cross Power</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nobis enim!</p>
              </div>
            </div>

            {/* Card 9: Melhor Idade */}
            <div className="card-aulas">
              <img src="img/Aula9.png" alt="Melhor Idade" className="card-image" />
              <div className="card-content">
                <h3>Melhor Idade</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptas.</p>
              </div>
            </div>
          </Slider>

        </div>
      </section>

      {/* Aplicativo */}
      <section id="aplicativo" className="app-section">
        <div className="app-info">
          <h2 className="app-title">Nosso Aplicativo</h2>
          <p className="app-description">Tenha a Academia Corpus na palma da sua mão. Baixe nosso app!</p>
          <div className="app-content">
            <div className="app-text">
              <h3 className="app-subtitle">Corpus App:<br /> Treinos e Resultados na Palma da Mão!</h3>
              <p className="app-details">
                Com o Corpus App, você tem todo o suporte que precisa para alcançar suas metas de forma prática e eficiente:
              </p>
              <ul className="app-features">
                <li>Acompanhe seu treino personalizado</li>
                <li>Veja vídeos demonstrativos dos exercícios</li>
                <li>Monitore o progresso das suas cargas e desempenho</li>
                <li>Acesse a nossa agenda de aulas e novidades</li>
                <li>Faça upgrades de plano ou renovações direto pelo app</li>
              </ul>
              <p className="app-call-to-action">
                Tudo isso sem custo adicional! Baixe agora o Corpus App e tenha a experiência completa da Corpus sempre com você!
              </p>
            </div>
            <img src="img/app.png" alt="Imagem do APP" className="app-image" />
          </div>
          <button className="app-button" onClick={handleDownloadClick}>Baixar Aplicativo</button>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="faq">
          <h2>Perguntas Frequentes (FAQ)</h2>
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question-container" onClick={() => toggleFAQ(index)}>
                <h4 className="faq-question">
                  {faq.question}
                </h4>
                <span className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`}><FaAngleDown /></span>
              </div>
              {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
              <hr className="faq-divider" /> {/* Linha divisória */}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer">
          <p>© 2024 Academia Corpus. Todos os direitos reservados.</p>
        </div>
      </footer>


{/* Modais */}
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Escolha uma Unidade</h2>
            <span className="close">&times;</span>
          </div>
          <div className="modal-buttons">
            <a href="https://wa.me/5515997580128" className="modal-btn" target="_blank" rel="noopener noreferrer">
              <ImWhatsapp /> Araçoiaba da Serra
            </a>
            <a href="https://wa.me/5515991969092" className="modal-btn" target="_blank" rel="noopener noreferrer">
              <ImWhatsapp /> Capela do Alto
            </a>
            <a href="https://wa.me/5515998886915" className="modal-btn" target="_blank" rel="noopener noreferrer">
              <ImWhatsapp /> Distrito do Porto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
