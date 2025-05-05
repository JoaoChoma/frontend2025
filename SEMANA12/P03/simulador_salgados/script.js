document.getElementById("formSalgados").addEventListener("submit", function (e) {
  e.preventDefault();

  const cliente = document.getElementById("cliente").value.trim();
  const preco = parseFloat(document.getElementById("preco").value);
  const quantidade = parseInt(document.getElementById("quantidade").value);

  let descontoPercentual = 0;

  if (quantidade > 10 && quantidade <= 20) {
    descontoPercentual = 5;
  } else if (quantidade > 20) {
    descontoPercentual = 10;
  }

  const totalBruto = preco * quantidade;
  const descontoValor = (descontoPercentual / 100) * totalBruto;
  const totalFinal = totalBruto - descontoValor;

  const resultado = `
    <strong>Cliente:</strong> ${cliente}<br/>
    <strong>Quantidade:</strong> ${quantidade}<br/>
    <strong>Preço unitário:</strong> R$${preco.toFixed(2).replace('.', ',')}<br/>
    <strong>Desconto aplicado:</strong> ${descontoPercentual}%<br/>
    <strong>Total com desconto:</strong> R$${totalFinal.toFixed(2).replace('.', ',')}
  `;

  document.getElementById("resultado").innerHTML = resultado;
});
