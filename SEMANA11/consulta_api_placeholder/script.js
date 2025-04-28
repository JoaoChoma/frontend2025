// script.js

// Função para buscar posts
function carregarPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar dados');
            }
            return response.json();
        })
        .then(posts => {
            const container = document.getElementById('posts-container');

            posts.forEach(post => {
                const postCard = document.createElement('div');
                postCard.className = 'post-card';

                const postTitle = document.createElement('div');
                postTitle.className = 'post-title';
                postTitle.textContent = post.title;

                const postBody = document.createElement('div');
                postBody.className = 'post-body';
                postBody.textContent = post.body;

                postCard.appendChild(postTitle);
                postCard.appendChild(postBody);
                container.appendChild(postCard);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os posts:', error);
        });
}

// Chamar a função quando a página carregar
document.addEventListener('DOMContentLoaded', carregarPosts);
