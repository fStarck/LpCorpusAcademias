import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { ImWhatsapp, ImLocation } from "react-icons/im";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import ScreenWidthBox from "./ScreenWidthBox";

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
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalPoliticaSeguranca, setModalPoliticaSeguranca] = useState(false);
  const [isModalTermosServico, setModalTermosServico] = useState(false);
  const [isModalConfiguracaoCookies, setModalConfiguracaoCookies] = useState(false);
  const [isModalAgendeAulaOpen, setModalAgendeAulaOpen] = useState(false);

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
    { question: "Quais são os horários de funcionamento das unidades?", answer: "Nas unidades de Capela e Araçoiaba, o funcionamento é de segunda a sexta-feira, das 6h às 22h, e aos sábados, das 8h às 13h. <br/>Na unidade do Distrito do Porto, o horário é de segunda a sexta-feira, das 6h às 11h e das 15h às 21h, e aos sábados, das 8h às 12h." },
    { question: "Vocês aceitam Gympass?", answer: "Não aceitamos Gympass, apenas Totalpass. Maiores informações na recepção da unidade." },
    { question: "Tem aula experimental?", answer: "Sim, oferecemos aulas experimentais! Consulte a recepção para agendar a sua." },
    { question: "Há aulas de funcional ou jump?", answer: "Sim, temos diversas aulas como funcional, jump e muito mais. Consulte nossa grade de horários." },
    { question: "Vocês oferecem planos familiares ou com desconto para casais?", answer: "Sim, temos planos familiares e opções de desconto para quem treina em conjunto. Consulte a recepção para mais detalhes." },
    { question: "Posso transferir meu plano para outra pessoa?", answer: "Sim, permitimos a transferência de planos. Consulte as condições na recepção." },
    { question: "Quem já foi aluno precisa pagar a taxa de matrícula novamente?", answer: "Depende do tempo de inatividade. Verifique as condições na recepção." },
    { question: "Há desconto para mais de uma pessoa treinando junta?", answer: "Sim, oferecemos descontos para grupos e famílias. Consulte as condições na recepção." },
    { question: "Quero marcar uma avaliação, como faço?", answer: "É fácil! Basta entrar em contato com a recepção ou agendar pelo aplicativo." },
    { question: "Qual é o benefício do Clube +?", answer: "Com o Clube +, você tem acesso a vantagens exclusivas como descontos em produtos e serviços. Consulte a recepção para mais detalhes." }
  ];

  const calendarAracoiaba = {
    headers: ["Horários", "Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
    rows: [
      { time: "7h00", days: ["", "", "<strong>Jump</strong><br/>Danilo", "", "<strong>Jump</strong><br/>Danilo"] },
      { time: "8h00", days: ["<strong>Zumba</strong><br/>Lú Bianchi", "<strong>Pilates Solo</strong><br/>Sari", "<strong>Melhor Idade</strong><br/>Danilo", "<strong>Funcional</strong><br/>Danilo", "<strong>Melhor Idade</strong><br/>Danilo"] },
      { time: "9h00", days: ["", "", "", "<strong>Pilates Solo</strong><br/>Sari", ""] },
      { time: "18h00", days: ["<strong>Zumba</strong><br/>Lú Bianchi", "<strong>Jump</strong><br/>Lú Bianchi", "<strong>Step</strong><br/>Tainara", "", ""] },
      { time: "19h00", days: ["<strong>Ritmos</strong><br/>Preto", "", "<strong>Ritmos</strong><br/>Preto", "<strong>Jump</strong><br/>Danilo", "<strong>Zumba</strong><br/>Lú Bianchi"] },
    ],
  };

  const calendarCapela = {
    headers: ["Horários", "Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
    rows: [
      { time: "7h00", days: ["<strong>Jump</strong><br/>Danilo", "<strong>Funcional</strong><br/>Duda", "<strong>Abdominal</strong><br/>Duda", "<strong>Jump</strong><br/>Lú Bianchi", ""] },
      { time: "8h00", days: ["<strong>Alongamento</strong><br/>Danilo", "", "", "", "<strong>Alongamento</strong><br/>Duda"] },
      { time: "19h00", days: ["<strong>Jump</strong><br/>Danilo", "<strong>Localizada</strong><br/>Danilo", "<strong>Abdominal</strong><br/>Íthalo", "", ""] },
    ],
  };


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

  //Tratamento para tirar elemento da renderização do github pages
  useEffect(() => {
    const unwantedElement = document.getElementById('loom-companion-mv3');
    if (unwantedElement) {
      unwantedElement.remove();
    }
  }, []);

  const ScheduleTable = ({ data }) => {
    return (
      <table>
        <thead>
          <tr>
            {data.headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row.time}</td>
              {row.days.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  dangerouslySetInnerHTML={{ __html: cell }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };



  const openModalPoliticaSeguranca = () => setModalPoliticaSeguranca(true);
  const closeModalPoliticaSeguranca = () => setModalPoliticaSeguranca(false);
  const openModalTermosServico = () => setModalTermosServico(true);
  const closeModalTermosServico = () => setModalTermosServico(false);
  const openModalConfiguracaoCookies = () => setModalConfiguracaoCookies(true);
  const closeModalConfiguracaoCookies = () => setModalConfiguracaoCookies(false);
  const openModalAgendeAulaOpen = () => setModalAgendeAulaOpen(true);
  const closeModalAgendeAulaOpen = () => setModalAgendeAulaOpen(false);

  return (
    <div className="App">
      <nav className="menu">
        <ul>
          <li><a href="#nossas-unidades">Nossas Unidades</a></li>
          <li><a href="#aulas-e-treinos">Aulas e Treinos</a></li>
          <li><a href="#aplicativo">Aplicativo</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#trabalhe-conosco">Trabalhe Conosco</a></li>
          <li><button onClick={() => setModalOpen(true)}>Contato</button></li>
        </ul>
      </nav>

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
            id="agende-sua-aula"
            src="img/agende-sua-aula.png"
            alt="Faixa com a imagem 'Agende sua aula grátis'"
          />
          <button onClick={openModalAgendeAulaOpen}>Agende Agora</button>
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
                  href="https://wa.me/5515997580128"
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
                <p>Aula divertida que combina exercícios aeróbicos com um mini trampolim, proporcionando um treino de baixo impacto que melhora a resistência cardiovascular e tonifica os músculos.</p>
              </div>
            </div>

            {/* Card 2: Localizada */}
            <div className="card-aulas">
              <img src="img/Aula2.png" alt="Localizada" className="card-image" />
              <div className="card-content">
                <h3>Localizada</h3>
                <p>Aula focada no fortalecimento muscular, trabalhando regiões específicas do corpo através de exercícios com pesos e resistência, ideal para quem busca definir e tonificar a silhueta.</p>
              </div>
            </div>

            {/* Card 3: Funcional */}
            <div className="card-aulas">
              <img src="img/Aula3.png" alt="Funcional" className="card-image" />
              <div className="card-content">
                <h3>Funcional</h3>
                <p>Treino que utiliza movimentos do dia a dia para desenvolver força, equilíbrio e flexibilidade. Ideal para melhorar a performance nas atividades cotidianas e prevenir lesões.</p>
              </div>
            </div>

            {/* Card 4: Alongamento */}
            <div className="card-aulas">
              <img src="img/Aula4.png" alt="Alongamento" className="card-image" />
              <div className="card-content">
                <h3>Alongamento</h3>
                <p>Sessão dedicada a melhorar a flexibilidade e relaxar a musculatura. O alongamento é essencial para a recuperação muscular e pode ajudar a aliviar tensões e reduzir o risco de lesões.</p>
              </div>
            </div>

            {/* Card 5: Abdominal */}
            <div className="card-aulas">
              <img src="img/Aula5.png" alt="Abdominal" className="card-image" />
              <div className="card-content">
                <h3>Abdominal</h3>
                <p>Aula focada no fortalecimento da musculatura do abdômen, utilizando diferentes exercícios para trabalhar tanto a parte superior quanto inferior do abdômen, contribuindo para uma melhor postura e estabilidade do core.</p>
              </div>
            </div>

            {/* Card 6: Ritmos */}
            <div className="card-aulas">
              <img src="img/Aula6.png" alt="Ritmos" className="card-image" />
              <div className="card-content">
                <h3>Ritmos</h3>
                <p>Aula de dança que combina diferentes estilos musicais, proporcionando um treino divertido e dinâmico. Além de queimar calorias, melhora a coordenação e a resistência cardiovascular.</p>
              </div>
            </div>

            {/* Card 7: Step */}
            <div className="card-aulas">
              <img src="img/Aula7.png" alt="Step" className="card-image" />
              <div className="card-content">
                <h3>Step</h3>
                <p>Aula que utiliza uma plataforma elevada para realizar uma variedade de movimentos, promovendo um excelente treino cardiovascular e fortalecimento das pernas. Ideal para quem gosta de ritmo e energia.</p>
              </div>
            </div>

            {/* Card 8: Cross Power */}
            <div className="card-aulas">
              <img src="img/Aula8.png" alt="Cross Power" className="card-image" />
              <div className="card-content">
                <h3>Cross Power</h3>
                <p>Treino intenso que combina exercícios de força e resistência, utilizando pesos, kettlebells e movimentos funcionais. Ideal para quem busca desafiar o corpo e aumentar a capacidade física de forma rápida e eficiente.</p>
              </div>
            </div>

            {/* Card 9: Melhor Idade */}
            <div className="card-aulas">
              <img src="img/Aula9.png" alt="Melhor Idade" className="card-image" />
              <div className="card-content">
                <h3>Melhor Idade</h3>
                <p>Aula adaptada para pessoas na melhor idade, focando em exercícios que melhoram a força, equilíbrio e flexibilidade, garantindo um envelhecimento ativo e saudável.</p>
              </div>
            </div>
          </Slider>

          <div className="calendarios">
            <div class="calendario">
              <h2>Araçoiaba da Serra</h2>
              <ScheduleTable data={calendarAracoiaba} />
            </div>
            <div class="calendario">
              <h2>Capela do Alto</h2>
              <ScheduleTable data={calendarCapela} />
            </div>
          </div>
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
              <img src="img/app.png" alt="Imagem do APP" className="app-image-mobile" />

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
                <span className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`}>
                  <FaAngleDown />
                </span>
              </div>
              {activeIndex === index && (
                <p
                  className="faq-answer"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              )}
              <hr className="faq-divider" /> {/* Linha divisória */}
            </div>
          ))}
        </div>
      </section>

      {/* Trabalhe Conosco */}
      <section id="trabalhe-conosco" className="trabalhe-conosco">
        <div className="container">
          <div className="conteudo">
            <div className="beneficios">
              <h2 className="titulo">Trabalhe Conosco</h2>
              <p className="descricao">
                Junte-se à nossa equipe e faça parte de um ambiente colaborativo onde você pode crescer e desenvolver suas habilidades.
              </p>

              <div className="beneficio">
                <h3>Ambiente Inovador</h3>
                <p>Trabalhe com as últimas tecnologias e participe de projetos desafiadores.</p>
              </div>
              <div className="beneficio">
                <h3>Crescimento de Carreira</h3>
                <p>Planos de carreira estruturados e oportunidades para você se desenvolver dentro da empresa.</p>
              </div>
              <div className="beneficio">
                <h3>Cultura Inclusiva</h3>
                <p>Um ambiente de trabalho diverso e acolhedor, onde todos são valorizados.</p>
              </div>

              <div>
                <a href="mailto:contato@corpusacademias.com.br?subject=Candidatura&body=Olá, gostaria de enviar meu currículo para a vaga." className="botao-candidatura">
                  Envie seu Currículo
                </a>
              </div>

            </div>

            <div className="imagem-trabalhe-conosco">
              <img src="img/trabalhe-conosco.png" alt="Equipe de trabalho" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer">
          <img src="img/corpusorange.png" alt="Jump" className="logo-image" />
          <div className="footer-columns">

            <div className="footer-menu">
              <ul>
                <li><a href="slider">Início</a></li>
                <li><a href="#nossas-unidades">Unidades</a></li>
                <li><a href="#aulas-e-treinos">Aulas e Treinos</a></li>
                <li><a href="#aplicativo">Aplicativo</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#trabalhe-conosco">Trabalhe Conosco</a></li>
              </ul>
            </div>

            <div className="footer-location">
              <div className="location">
                <strong>Araçoiaba da Serra</strong>
                <p>Av. Ângelo Pupin, 158</p>
                <p>Seg a Sex: 6h às 22h<br />Sáb: 8h às 13h</p>
                <a href="https://wa.me/5515997580128" className="cta-button" target="_blank" rel="noopener noreferrer"><ImWhatsapp /> (15) 9.9758-0128</a>
              </div>
              <div className="location">
                <strong>Capela do Alto</strong>
                <p>R. João Felipe, 125</p>
                <p>Seg a Sex: 6h às 22h<br />Sáb: 8h às 13h</p>
                <a href="https://wa.me/5515999196909" className="cta-button" target="_blank" rel="noopener noreferrer"><ImWhatsapp /> (15) 9.9196-9092</a>
              </div>
              <div className="location">
                <strong>Distrito do Porto</strong>
                <p>Av. Bom Jesus, 41</p>
                <p>Seg a Sex: 6h às 11h e 15h às 21h<br />Sáb: 8h às 12h</p>
                <a href="https://wa.me/5515998886915" className="cta-button" target="_blank" rel="noopener noreferrer"><ImWhatsapp /> (15) 9.9888-6915</a>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="footer-socials">
            <a href="https://www.facebook.com/Corpusacademias" target="_blank" rel="noopener noreferrer" className="social-button"><FaFacebookSquare /></a>
            <a href="https://www.instagram.com/corpusacademias/" target="_blank" rel="noopener noreferrer" className="social-button"><FaInstagram /></a>
            <a href="mailto:contato@corpusacademias.com.br" target="_blank" rel="noopener noreferrer" className="social-button"><CiMail /></a>
          </div>

          {/* Legal Footer */}
          <div class="legal-footer">
            <p>© 2024 Academia Corpus. Todos os direitos reservados. Desenvolvido por <a href="https://starck.dev.br" target="_blank" rel="noopener noreferrer">starck.dev</a></p>
            <button onClick={openModalPoliticaSeguranca} className="termos-button">Políticas de Segurança</button>
            <button onClick={openModalTermosServico} className="termos-button">Termos de Serviço</button>
            <button onClick={openModalConfiguracaoCookies} className="termos-button">Configurações de cookies</button>
          </div>
        </div>
      </footer>

      {/* Modal de Contato */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content-contato" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setModalOpen(false)}>&times;</button>
            <h2>Contato</h2>
            <hr className="faq-divider" /> {/* Linha divisória */}

            <div className="contact-locations">
              <div className="contact-location">
                <strong>Araçoiaba da Serra</strong>
                <p>Seg a Sex: 6h às 22h<br />Sáb: 8h às 13h</p>
                <a
                  href="https://wa.me/5515997580128"
                  className="cta-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImWhatsapp /> (15) 9.9758-0128
                </a>
              </div>
              <div className="contact-location">
                <strong>Capela do Alto</strong>
                <p>Seg a Sex: 6h às 22h<br />Sáb: 8h às 13h</p>
                <a
                  href="https://wa.me/5515999196909"
                  className="cta-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImWhatsapp /> (15) 9.9196-9092
                </a>
              </div>
              <div className="contact-location">
                <strong>Distrito do Porto</strong>
                <p>Seg a Sex: 6h às 11h e 15h às 21h<br />Sáb: 8h às 12h</p>
                <a
                  href="https://wa.me/5515998886915"
                  className="cta-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImWhatsapp /> (15) 9.9888-6915
                </a>
              </div>
            </div>
            <p><strong>Email:</strong> contato@academiacorpus.com</p>
          </div>
        </div>
      )}

      {/* Modal Agende uma Aula */}
      {isModalAgendeAulaOpen && (
        <div className="modal-overlay" onClick={closeModalAgendeAulaOpen}>
          <div className="modal-content-schedule" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-schedule">
              <h2>Escolha uma Unidade</h2>
              <span className="modal-close-button" onClick={closeModalAgendeAulaOpen}>&times;</span>
            </div>
            <div className="modal-buttons-schedule">
              <a
                href="https://wa.me/5515997580128"
                className="schedule-modal-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImWhatsapp /> Araçoiaba da Serra
              </a>
              <a
                href="https://wa.me/5515999196909"
                className="schedule-modal-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImWhatsapp /> Capela do Alto
              </a>
              <a
                href="https://wa.me/5515998886915"
                className="schedule-modal-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImWhatsapp /> Distrito do Porto
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Modal para Políticas de Segurança */}
      {isModalPoliticaSeguranca && (
        <div className="modal-overlay" onClick={closeModalPoliticaSeguranca}>
          <div className="modal-content-termos" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModalPoliticaSeguranca}>&times;</button>

            <h2>Políticas de Segurança</h2>
            <p>
              Sua segurança é nossa prioridade. Utilizamos SSL e HTTPS para proteger
              as informações transmitidas entre seu navegador e nosso site. Isso garante
              que os dados sejam criptografados e permaneçam seguros durante a comunicação.
            </p>
            <p>
              Este site não coleta nem armazena nenhum tipo de dados pessoais. Todos os
              botões disponíveis redirecionam os usuários para o WhatsApp, Instagram e
              Facebook, ou para o e-mail da empresa, sem armazenar informações adicionais.
            </p>
          </div>
        </div>
      )}

      {/* Modal para Termos de Serviço */}
      {isModalTermosServico && (
        <div className="modal-overlay" onClick={closeModalTermosServico}>
          <div className="modal-content-termos" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModalTermosServico}>&times;</button>

            <h2>Termos de Serviço</h2>
            <p>
              Os serviços oferecidos por nossa empresa são realizados em local físico,
              com um contrato de prestação de serviço que garante qualidade e segurança para você.
              Este site é apenas uma landing page e não realiza qualquer tipo de serviço ou coleta de dados.
            </p>
            <p>
              Ao navegar em nossa página, você é redirecionado para canais oficiais como
              WhatsApp, redes sociais e e-mail, onde poderá contatar a equipe diretamente para informações.
              Não nos responsabilizamos por qualquer conteúdo fora dos nossos links oficiais.
            </p>
          </div>
        </div>
      )}

      {/* Modal de Configurações de Cookies */}
      {isModalConfiguracaoCookies && (
        <div className="modal-overlay" onClick={closeModalConfiguracaoCookies}>
          <div className="modal-content-termos" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModalConfiguracaoCookies}>&times;</button>

            <h2>Configurações de Cookies</h2>
            <p>Atualmente, não utilizamos cookies em nosso site. Nenhum dado de navegação é coletado ou armazenado.</p>

            <p>Para mais informações sobre como gerenciamos dados, consulte nossa <a href="#politica-seguranca" onClick={openModalPoliticaSeguranca}>Política de Segurança</a>.</p>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
