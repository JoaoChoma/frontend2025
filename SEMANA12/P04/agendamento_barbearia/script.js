document.getElementById("formAgendamento").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const servico = document.getElementById("servico").value;
  const data = document.getElementById("data").value;
  const quinzenal = document.querySelector('input[name="quinzenal"]:checked').value;

  let preco = 0;
  let servicoTexto = "";

  if (servico === "cabelo") {
    preco = 40;
    servicoTexto = "Corte de cabelo";
  } else if (servico === "completo") {
    preco = 60;
    servicoTexto = "Corte + barba";
  } else if (servico === "barba") {
    preco = 30;
    servicoTexto = "Barba";
  }

  if (quinzenal === "sim") {
    preco *= 0.9; // 10% de desconto
  }

  const resumo = `
    <strong>Atendimento confirmado!</strong><br/>
    Nome: ${nome}<br/>
    CPF: ${cpf}<br/>
    Serviço: ${servicoTexto}<br/>
    Data: ${data.split("-").reverse().join("/")}<br/>
    Atendimento quinzenal: ${quinzenal === "sim" ? "Sim" : "Não"}<br/>
    Valor ${quinzenal === "sim" ? "com desconto" : "final"}: R$ ${preco.toFixed(2).replace('.', ',')}
  `;

  document.getElementById("resumo").innerHTML = resumo;
});
