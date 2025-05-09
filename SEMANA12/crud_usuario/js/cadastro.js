function carregarUsuarios() {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const tabela = document.getElementById("listaUsuarios");
  tabela.innerHTML = "";

  usuarios.forEach((usuario, index) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
        <td>${usuario.login}</td>
        <td>
          <button class="btnEditar" onclick="editarUsuario(${index})">Editar</button>
          <button class="btnExcluir" onclick="excluirUsuario(${index})">Excluir</button>
        </td>
      `;
    tabela.appendChild(linha);
  });
}

document.getElementById("cadastroForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const login = document.getElementById("login").value.trim();
  const senha = document.getElementById("senha").value;
  const indexEditando = document.getElementById("indexEditando").value;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (indexEditando !== "") {
    // Atualizar
    usuarios[indexEditando] = { login, senha };
    document.getElementById("indexEditando").value = "";
  } else {
    // Criar
    if (usuarios.some(u => u.login === login)) {
      alert("Login já cadastrado.");
      return;
    }
    usuarios.push({ login, senha });
  }

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  document.getElementById("cadastroForm").reset();
  carregarUsuarios();
});

function editarUsuario(index) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuario = usuarios[index];
  document.getElementById("login").value = usuario.login;
  document.getElementById("senha").value = usuario.senha;
  document.getElementById("indexEditando").value = index;
}

function excluirUsuario(index) {
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  if (confirm("Deseja realmente excluir este usuário?")) {
    usuarios.splice(index, 1);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    carregarUsuarios();
  }
}

// Inicializa a lista ao carregar a página
carregarUsuarios();
