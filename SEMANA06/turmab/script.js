function ligar(){
    let lampada = document.getElementById('lampada');
    // a variavel lampada será a tag img
    lampada.src = 'imagens/ligada.avif';
}

function desligar(){
    document.getElementById('lampada').src = 'imagens/desligada.avif';
}