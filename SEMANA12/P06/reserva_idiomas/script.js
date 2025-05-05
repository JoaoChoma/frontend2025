document.getElementById("formReserva").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const idioma = document.getElementById("idioma").value;
  const duracao = parseInt(document.getElementById("duracao").value);
  const frequencia = document.querySelector('input[name="frequencia"]:checked').value;

  let precoMinuto = 0;
  let nomeIdioma = "";

  if (idioma === "ingles") {
    precoMinuto = 2.5;
    nomeIdioma = "Inglês";
  } else if (idioma === "espanhol") {
    precoMinuto = 2.0;
    nomeIdioma = "Espanhol";
  } else if (idioma === "frances") {
    precoMinuto = 3.0;
    nomeIdioma = "Francês";
  }

  let total = precoMinuto * duracao;
  let descontoTexto = "0%";

  if (frequencia === "semanal") {
    total *= 0.85;  // Aplica 15% de desconto
    descontoTexto = "15%";
  }

  const resumo = `
    <strong>Reserva confirmada!</strong><br/>
    Aluno: ${nome}<br/>
    Idioma: ${nomeIdioma}<br/>
    Duração: ${duracao} minutos<br/>
    Frequência: ${frequencia === "semanal" ? "Aula semanal" : "Aula única"}<br/>
    Desconto aplicado: ${descontoTexto}<br/>
    Valor total: R$${total.toFixed(2).replace('.', ',')}
  `;

  document.getElementById("resumo").innerHTML = resumo;
});
