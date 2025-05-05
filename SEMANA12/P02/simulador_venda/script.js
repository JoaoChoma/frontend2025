document.getElementById("submit").addEventListener("click", function () {

  const produto = document.getElementById("produto").value;
  const preco = parseFloat(document.getElementById("preco").value);
  const quantidade = parseInt(document.getElementById("quantidade").value);
  const cupom = document.getElementById("cupom").value.toUpperCase();

  let descontoPercentual = 0;

  if (cupom === "CUPOM10") {
    descontoPercentual = 10;
  } else if (cupom === "CUPOM20") {
    descontoPercentual = 20;
  }

  const totalBruto = preco * quantidade;
  const descontoValor = (descontoPercentual / 100) * totalBruto;
  const totalFinal = totalBruto - descontoValor;

  const resultado = `
    <strong>Produto:</strong> ${produto}<br/>
    <strong>Quantidade:</strong> ${quantidade}<br/>
    <strong>Preço unitário:</strong> R$${preco.toFixed(2).replace('.', ',')}<br/>
    <strong>Desconto aplicado:</strong> ${descontoPercentual}%<br/>
    <strong>Total com desconto:</strong> R$${totalFinal.toFixed(2).replace('.', ',')}
  `;

  document.getElementById("resultado").innerHTML = resultado;
});
