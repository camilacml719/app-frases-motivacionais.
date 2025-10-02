const frases = [
  "Você é mais forte do que imagina.",
  "Acredite no seu potencial.",
  "Cada passo conta, não desista.",
  "A vida é feita de recomeços.",
  "O hoje é a oportunidade de criar um amanhã melhor.",
  "O sucesso é a soma de pequenos esforços repetidos todos os dias.",
  "Ser corajoso não é não ter medo, é avançar apesar dele.",
  "A felicidade não é um destino, é uma jornada.",
  "Você é capaz de coisas incríveis.",
  "Nunca subestime o poder de um sorriso.",
  "A chave é levantar uma vez mais.",
  "Não pare até sentir orgulho de si mesmo.",
  "Transforme seus sonhos em planos e seus planos em ações.",
  "A vida é 10% o que acontece com você e 90% como você reage a isso.",
  "O único limite para a realização do amanhã são as dúvidas de hoje.",
  "A persistência é o caminho do êxito.",
  "Grandes coisas nunca vêm de zonas de conforto.",
  "Acredite em si mesmo e todo o resto virá naturalmente.",
  "O melhor ainda está por vir.",
  "Você é o autor da sua própria história, faça dela uma grande aventura.",
  "Cada dia é uma nova chance para mudar sua vida.",
  "A vida começa quando você sai da zona de conforto.",
  "As quedas não te definem, mas sim as vezes que você se levanta.",
  "Acredite em si mesmo e em tudo o que você é. Saiba que existe algo dentro de você que é maior do que qualquer obstáculo.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Acredite que você pode, assim você já está no meio do caminho.",
  "A vida é 10% o que acontece com você e 90% como você reage a isso.",
  "Não importa o quão devagar você vá, desde que você não pare.",
  "A única maneira de fazer um excelente trabalho é amar o que você faz.",
  "O futuro pertence àqueles que acreditam na beleza dos seus sonhos.",
  "A jornada de mil milhas começa com um único passo.",
  "Você nunca é velho demais para definir outro objetivo ou sonhar um novo sonho.",
  "Acredite em si mesmo e todo o resto virá naturalmente.",
  "O melhor ainda está por vir.",
  "Você é o autor da sua própria história, faça dela uma grande aventura.",
  "Cada dia é uma nova chance para mudar sua vida.",
  "A vida começa quando você sai da zona de conforto.",
  "As quedas não te definem, mas sim as vezes que você se levanta.",
  "Acredite em si mesmo e em tudo o que você é. Saiba que existe algo dentro de você que é maior do que qualquer obstáculo.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Acredite que você pode, assim você já está no meio do caminho.",
  "A vida é 10% o que acontece com você e 90% como você reage a isso.",
  "Não importa o quão devagar você vá, desde que você não pare.",
  "A única maneira de fazer um excelente trabalho é amar o que você faz.",
  "O futuro pertence àqueles que acreditam na beleza dos seus sonhos.",
  "A jornada de mil milhas começa com um único passo.",
  "Você nunca é velho demais para definir outro objetivo ou sonhar um novo sonho."

];

function novaFrase() {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  document.getElementById("frase").innerText = frase;
}

// Sistema de comentários local
document.getElementById("comentarioForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;

  if (nome && mensagem) {
    const comentario = { nome, mensagem, data: new Date().toLocaleString() };
    salvarComentario(comentario);
    mostrarComentarios();
    document.getElementById("comentarioForm").reset();
  }
});

function salvarComentario(comentario) {
  let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
  comentarios.push(comentario);
  localStorage.setItem("comentarios", JSON.stringify(comentarios));
}

function mostrarComentarios() {
  let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
  const lista = document.getElementById("listaComentarios");
  lista.innerHTML = "";
  comentarios.forEach(c => {
    const div = document.createElement("div");
    div.classList.add("comentario");
    div.innerHTML = "<strong>" + c.nome + "</strong> (" + c.data + ")<br>" + c.mensagem;
    lista.appendChild(div);
  });
}

// Mostrar ao carregar
mostrarComentarios();