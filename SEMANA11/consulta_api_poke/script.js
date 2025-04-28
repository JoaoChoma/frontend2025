// script.js

// Função que cria o card do Pokémon
function criarPokemonCard(pokemon) {
    const card = document.createElement('div');
    card.className = 'pokemon-card';

    const nome = document.createElement('h2');
    nome.textContent = pokemon.name.toUpperCase();

    const imagem = document.createElement('img');
    imagem.src = pokemon.sprites.front_default;
    imagem.alt = pokemon.name;

    const tipos = document.createElement('p');
    tipos.textContent = 'Tipo: ' + pokemon.types.map(typeInfo => typeInfo.type.name).join(', ');

    card.appendChild(nome);
    card.appendChild(imagem);
    card.appendChild(tipos);

    return card;
}

// Função que busca o Pokémon na API
function buscarPokemon(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    const input = document.getElementById('pokemon-input');
    const nomePokemon = input.value.toLowerCase(); // Converter para minúsculo para evitar erro

    const url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`;

    fetch(url)
        .then(resultado => {
            if (!resultado.ok) {
                throw new Error('Pokémon não encontrado!');
            }
            console.log(resultado);
            return resultado.json();
        })
        .then(pokemon => {
            const container = document.getElementById('pokemon-container');
            container.innerHTML = ''; // Limpa resultados anteriores
            const card = criarPokemonCard(pokemon);
            container.appendChild(card);
        })
        .catch(error => {
            const container = document.getElementById('pokemon-container');
            container.innerHTML = `<p style="color:red;">${error.message}</p>`;
        });
}

// Escutar o envio do formulário
document.getElementById('pokemon-form').addEventListener('submit', buscarPokemon);
