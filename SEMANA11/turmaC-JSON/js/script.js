
const botao = document.getElementById('registrar');

botao.addEventListener('click',
    function () {
        const login = {
            login: document.getElementById('usuario').value,
            senha: document.getElementById('senha').value
        };
        console.log(login);
        converterEmJson(login);
    }
);

function converterEmJson(obj) {
    const json = JSON.stringify(obj);
    imprimirJson(json);
}

function imprimirJson(json) {
    const impressao = document.getElementById('impressao');

    let h2 = document.createElement('h2');
    h2.textContent = json;

    impressao.appendChild(h2);
}

