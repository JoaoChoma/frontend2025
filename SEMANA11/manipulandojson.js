fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())  // Aqui já faz o JSON.parse()
  .then(data => console.log(data));


  const pessoa = {
    nome: "Ana",
    idade: 25,
    email: "ana@email.com"
};

// Gerar JSON (string)
const jsonPessoa = JSON.stringify(pessoa);

console.log(jsonPessoa);


const jsonTexto = '{"nome":"Ana","idade":25,"email":"ana@email.com"}';

const objetoPessoa = JSON.parse(jsonTexto);

console.log(objetoPessoa.nome);   // Resultado: Ana
console.log(objetoPessoa.idade);  // Resultado: 25
console.log(objetoPessoa.email);  // Resultado: ana@email.com
