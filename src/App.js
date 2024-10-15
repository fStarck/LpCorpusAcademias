import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { useEffect } from 'react';
import { ImWhatsapp } from "react-icons/im";

function App() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false
  };

  useEffect(() => {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("openModalBtn");
    const span = document.getElementsByClassName("close")[0];

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
  }, []);



  return (
    <div className="App">
      {/* Hero Section - Carrossel de Imagens */}
      <Slider {...settings} >
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
        <div class="container">
          <img
            src="img/faixa-agende-sua-aula.png"
            alt="Faixa com a imagem 'Agende sua aula grátis'"
          />
          <p>Garanta sua aula experimental grátis!</p>
          <button id="openModalBtn">Agende Agora</button>
        </div>
      </section>


      <div id="myModal" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <h2>Escolha uma Unidade</h2>
            <span class="close">&times;</span>
          </div>
          <div class="modal-buttons">
            <a href="https://wa.me/5515997580128" class="modal-btn" target="_blank" rel="noopener noreferrer"><ImWhatsapp /> Araçoiaba da Serra</a>
            <a href="https://wa.me/5515991969092" class="modal-btn" target="_blank" rel="noopener noreferrer"><ImWhatsapp /> Capela do Alto</a>
            <a href="https://wa.me/5515998886915" class="modal-btn" target="_blank" rel="noopener noreferrer"><ImWhatsapp /> Distrito do Porto</a>
          </div>
        </div>
      </div>


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
          <h3>Araçoiaba da Serra</h3>
          <p>Endereço: Rua Exemplo, 123, Araçoiaba da Serra</p>
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
          <h3>Capela do Alto</h3>
          <p>Endereço: Avenida Exemplo, 456, Capela do Alto</p>
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
          <h3>Distrito do Porto</h3>
          <p>Endereço: Estrada Exemplo, 789, Distrito do Porto</p>
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
          {/* Adicione uma lista ou cards de aulas e treinos */}
        </div>
      </section>

      {/* Aplicativo */}
      <section id="aplicativo">
        <div className="app-info">
          <h2>Nosso Aplicativo</h2>
          <p>Tenha a Academia Corpus na palma da sua mão. Baixe nosso app!</p>
          {/* Adicione informações sobre o aplicativo */}
          <button>Baixar Aplicativo</button>
        </div>
      </section>

      {/* Instalações */}
      <section id="instalacoes">
        <div className="instalacoes">
          <h2>Instalações</h2>
          <p>Conheça nossas modernas instalações, feitas para o seu conforto e performance!</p>
          {/* Adicione imagens ou informações sobre as instalações */}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="faq">
          <h2>Perguntas Frequentes (FAQ)</h2>
          {/* Adicione uma lista de perguntas frequentes e respostas */}
          <div className="faq-item">
            <h4>Como agendar uma aula experimental?</h4>
            <p>Você pode agendar pelo nosso site ou pelo aplicativo.</p>
          </div>
          <div className="faq-item">
            <h4>Quais modalidades estão disponíveis?</h4>
            <p>Oferecemos várias modalidades, como musculação, crossfit, funcional e mais.</p>
          </div>
          {/* Adicione mais FAQs conforme necessário */}
        </div>
      </section>

      {/* Faça Parte do Time */}
      <section id="faca-parte-do-time">
        <div className="time">
          <h2>Faça Parte do Time Corpus</h2>
          <p>Venha treinar com os melhores! Junte-se à nossa equipe de alunos.</p>
          <button>Inscreva-se Agora</button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer">
          <p>© 2024 Academia Corpus. Todos os direitos reservados.</p>
          {/* Adicione links de redes sociais, política de privacidade, etc. */}
        </div>
      </footer>
    </div>
  );
}

export default App;
