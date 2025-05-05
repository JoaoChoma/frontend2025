document.getElementById("formOrcamento").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const placa = document.getElementById("placa").value.trim().toUpperCase();
  const servico = document.getElementById("servico").value;
  const prioridade = document.querySelector('input[name="prioridade"]:checked').value;

  let valor = 0;
  let servicoTexto = "";

  if (servico === "oleo") {
    valor = 120;
    servicoTexto = "Troca de óleo";
  } else if (servico === "alinhamento") {
    valor = 180;
    servicoTexto = "Alinhamento e balanceamento";
  } else if (servico === "revisao") {
    valor = 300;
    servicoTexto = "Revisão completa";
  }

  if (prioridade === "sim") {
    valor *= 1.2;
  }

  const resultado = `
    <strong>Orçamento gerado:</strong><br/>
    Cliente: ${nome}<br/>
    Placa: ${placa}<br/>
    Serviço: ${servicoTexto}<br/>
    Atendimento prioritário: ${prioridade === "sim" ? "Sim" : "Não"}<br/>
    Valor total: R$${valor.toFixed(2).replace('.', ',')}
  `;

  document.getElementById("resultado").innerHTML = resultado;
});
