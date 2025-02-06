//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const participantes = [];
let sorteados = [];

function adicionarParticipante() {
  const nomeInput = document.getElementById("nome");
  const nome = nomeInput.value.trim();

  if (nome !== "") {
    participantes.push(nome);
    atualizarListaParticipantes();
    nomeInput.value = ""; 
  }
}

function atualizarListaParticipantes() {
    const listaParticipantes = document.getElementById("listaParticipantes").querySelector("ul");
    listaParticipantes.innerHTML = "";
  
    participantes.forEach(participante => {
      const item = document.createElement("li");
      item.textContent = participante;
      listaParticipantes.appendChild(item);
    });
  }
  
  function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function sortearAmigoSecreto(participantes) {
    const sorteio = {};
  
    for (let i = 0; i < participantes.length; i++) {
      const participante = participantes[i];
      let amigoSecreto;
  
      if (i === participantes.length - 1) {
        amigoSecreto = participantes[0];
      } else {
        amigoSecreto = participantes[i + 1];
      }
  
      sorteio[participante] = amigoSecreto;
    }
  
    return sorteio;
  }
  
  function sortearUm() {
    if (participantes.length === 0) {
      alert("Não há participantes para sortear.");
      return;
    }
  
    const participantesNaoSorteados = participantes.filter(p => !sorteados.includes(p));
  
    if (participantesNaoSorteados.length === 0) {
      alert("Todos os participantes já foram sorteados!");
      return;
    }
  
    const indiceAleatorio = Math.floor(Math.random() * participantesNaoSorteados.length);
    const participanteSorteado = participantesNaoSorteados[indiceAleatorio];
  
    sorteados.push(participanteSorteado);
  
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<p> O participante sorteado foi o(a): ${participanteSorteado}</p>`;
  }
  
  function sortearTodos() {
    if (participantes.length < 2) {
      alert("É necessário adicionar pelo menos dois participantes para realizar o sorteio.");
      return;
    }
  
    embaralhar(participantes);
    const resultado = sortearAmigoSecreto(participantes);
  
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";
  
    for (const participante in resultado) {
      resultadoDiv.innerHTML += `<p>${participante} tirou ${resultado[participante]}</p>`;
    }
  }