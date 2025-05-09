document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const login = document.getElementById("login").value.trim();
    const senha = document.getElementById("senha").value;
  
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
    const usuario = usuarios.find(u => u.login === login && u.senha === senha);
  
    if (usuario) {
      localStorage.setItem("usuarioLogado", login);
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("mensagem").textContent = "Login ou senha incorretos.";
    }
  });
  