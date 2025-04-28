
// script.js

// Função que cria o card de um cão
function criarDogCard(dog) {
    const card = document.createElement('div');
    card.className = 'dog-card';

    const nome = document.createElement('h2');
    nome.textContent = dog.name;

    const imagem = document.createElement('img');
    imagem.src = dog.image?.url || 'https://via.placeholder.com/200?text=No+Image';
    imagem.alt = dog.name;

    const temperamento = document.createElement('p');
    temperamento.textContent = dog.temperament ? `Temperamento: ${dog.temperament}` : 'Temperamento: N/A';

    card.appendChild(nome);
    card.appendChild(imagem);
    card.appendChild(temperamento);

    return card;
}

// Função que busca as raças de cães
function carregarDogs() {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar as raças');
            }
            return response.json();
        })
        .then(dogs => {
            const container = document.getElementById('dogs-container');
            container.innerHTML = ''; // Limpar anteriores

            dogs.forEach(dog => {
                const card = criarDogCard(dog);
                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}

// Escuta o clique do botão
document.getElementById('carregar-btn').addEventListener('click', carregarDogs);
