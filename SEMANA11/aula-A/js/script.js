const nome = document.getElementById('nome');
const telefone = document.getElementById('telefone');
const botao = document.getElementById('botao');
const conteudo = document.getElementById('conteudo');

botao.addEventListener('click',
    function () {

        let obj = {
            nome: nome.value,
            telefone: telefone.value
        };

        impressao(obj);
    }
);

function impressao(obj) {
    console.log(obj);

    const jsonObj = JSON.stringify(obj);

    let p = document.createElement('p');
    p.textContent = jsonObj;

    conteudo.appendChild(p);

}

