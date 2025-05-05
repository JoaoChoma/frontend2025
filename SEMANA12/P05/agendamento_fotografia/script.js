document.getElementById("formFoto").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const sessao = document.getElementById("sessao").value;
  const participantes = parseInt(document.getElementById("participantes").value);
  const maquiagem = document.querySelector('input[name="maquiagem"]:checked').value;

  let valor = 0;
  let tipoSessao = "";

  if (sessao === "individual") {
    valor = 150;
    tipoSessao = "Ensaio individual";
  } else if (sessao === "casal") {
    valor = 250;
    tipoSessao = "Ensaio de casal";
  } else if (sessao === "familia") {
    valor = 300;
    tipoSessao = "Ensaio em família";
    if (participantes > 4) {
      valor += (participantes - 4) * 30;
    }
  }

  if (maquiagem === "sim") {
    valor += 50;
  }

  const resumo = `
    <strong>Simulação de orçamento:</strong><br/>
    Cliente: ${nome}<br/>
    E-mail: ${email}<br/>
    Sessão: ${tipoSessao}<br/>
    Participantes: ${participantes}<br/>
    Maquiagem: ${maquiagem === "sim" ? "Sim" : "Não"}<br/>
    <strong>Total estimado: R$ ${valor.toFixed(2).replace('.', ',')}</strong>
  `;

  document.getElementById("resumo").innerHTML = resumo;
});
