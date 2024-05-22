// ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// ativar items do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// FAQ

// const openButtons = document.querySelectorAll(".perguntas button");
// const respostas = document.querySelectorAll("dd");

// openButtons.forEach((button) => {
//   button.addEventListener("click", () => openAnswer(button));
// });

// function openAnswer(button) {
//   const answerElement = button.parentElement.nextElementSibling;
//   const isHidden = answerElement.classList.contains("esconder-resposta");

//   respostas.forEach((resposta) => {
//     resposta.classList.add("esconder-resposta");
//   });

//   openButtons.forEach((but) => {
//     but.classList.remove("botao-ativo");
//   });

//   if (isHidden) {
//     answerElement.classList.remove("esconder-resposta");
//     button.classList.add("botao-ativo");
//   }
// }

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

perguntas.forEach((pergunta) =>
  pergunta.addEventListener("click", ativarPergunta)
);

// galeria imagens

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(e) {
  const img = e.currentTarget;
  const media = matchMedia("(min-width: 460px)").matches;
  media && galeriaContainer.prepend(img);
}

galeria.forEach((img) => {
  // img.style.cursor = "pointer";
  img.addEventListener("click", trocarImagem);
});

// animacao
window.SimpleAnime && new SimpleAnime();
