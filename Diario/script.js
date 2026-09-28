const campoTitulo = document.getElementById("titulo");

const campoTexto = document.getElementById("texto");

const botaoSalvar = document.getElementById("botaoSalvar");

const listaEntradas = document.getElementById("listaEntradas");



// carrega as entradas salvas (ou lista vazia na primeira vez)

let entradas = JSON.parse(localStorage.getItem("entradas")) || [];



// guarda a lista no navegador (como texto)

function salvarNoNavegador() {

 localStorage.setItem("entradas", JSON.stringify(entradas));

}



// desenha as entradas na tela

function mostrarEntradas() {

 listaEntradas.innerHTML = ""; // limpa para não repetir



 // se não há entradas, mostra um aviso; senão, desenha cada uma

 if (entradas.length === 0) {

  listaEntradas.innerHTML = "<p class='vazio'>Nenhuma entrada ainda.</p>";

 } else {

  entradas.forEach(function (entrada, posicao) {

   const div = document.createElement("div");

   div.className = "entrada";

   div.innerHTML = `

    <h3></h3>

    <small>${entrada.data}</small>

    <p></p>

    <button onclick="excluirEntrada(${posicao})">Excluir</button>

   `;

   // textContent insere como texto puro (mais seguro)

   div.querySelector("h3").textContent = entrada.titulo;

   div.querySelector("p").textContent = entrada.texto;



   listaEntradas.appendChild(div);

  });

 }

}



// cria uma nova entrada

function adicionarEntrada() {

 const titulo = campoTitulo.value.trim();

 const texto = campoTexto.value.trim();



 // se algum campo estiver vazio, avisa; senão, salva a entrada

 if (titulo === "" || texto === "") {

  alert("Preencha o título e o texto!");

 } else {

  const novaEntrada = {

   titulo: titulo,

   texto: texto,

   data: new Date().toLocaleString("pt-BR")

  };



  entradas.unshift(novaEntrada); // coloca no início da lista

  salvarNoNavegador();

  mostrarEntradas();



  campoTitulo.value = "";

  campoTexto.value = "";

 }

}



// remove uma entrada pela posição

function excluirEntrada(posicao) {

 entradas.splice(posicao, 1);

 salvarNoNavegador();

 mostrarEntradas();

}



botaoSalvar.addEventListener("click", adicionarEntrada);



mostrarEntradas();