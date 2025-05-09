document.getElementById("cadastroForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const login = document.getElementById("login").value.trim();
    const senha = document.getElementById("senha").value;
  
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
    const existente = usuarios.find(u => u.login === login);
    if (existente) {
      document.getElementById("mensagem").textContent = "Login já cadastrado.";
      return;
    }
  
    usuarios.push({ login, senha });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  
    document.getElementById("mensagem").textContent = "Usuário cadastrado com sucesso!";
    document.getElementById("cadastroForm").reset();
  });
  