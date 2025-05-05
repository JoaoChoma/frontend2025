document.getElementById("formOrcamento").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const area = parseFloat(document.getElementById("area").value);
  const tipoServico = document.getElementById("tipo").value;
  const manutencao = document.querySelector('input[name="manutencao"]:checked').value;

  let precoBase = 10;
  let acrescimo = 0;

  if (tipoServico === "plantio") {
    acrescimo = precoBase * 0.2;
  } else if (tipoServico === "manutencao") {
    acrescimo = precoBase * 0.5;
  }

  let precoFinal = (precoBase + acrescimo) * area;

  if (manutencao === "sim") {
    precoFinal += 100;
  }

  let servicoTexto = "";

  if (tipoServico === "poda") {
    servicoTexto = "Poda";
  } else if (tipoServico === "plantio") {
    servicoTexto = "Plantio";
  } else {
    servicoTexto = "Manutenção Completa";
  }


  const resultado = `
    <strong>Orçamento para ${nome}:</strong><br/>
    Tipo de serviço: ${servicoTexto}<br/>
    Área: ${area}m²<br/>
    Manutenção mensal: ${manutencao === "sim" ? "Sim" : "Não"}<br/>
    <strong>Total estimado: R$${precoFinal.toFixed(2).replace('.', ',')}</strong>
  `;

  document.getElementById("resultado").innerHTML = resultado;
});
