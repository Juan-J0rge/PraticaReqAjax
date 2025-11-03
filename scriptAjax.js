document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.querySelector('#avatar');
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const repositorios = document.querySelector('#repositorios')
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const botao = document.querySelector('#link');

    //fetch vai fazer uma requisição http e retornar um promisse (uma promessa de retorno).
fetch('https://api.github.com/users/Juan-J0rge')
    //tem vai executar uma função, com o promisse resolvido (resposta), que vai estar carregando
    //os dados do fetch que contem informações da requisição.
    .then(function(resposta) {
        console.log(resposta);
        return resposta.json();
    })

    .then(function(json) {
        name.innerText = json.name;
        username.innerText = json.login;
        avatar.src = json.avatar_url;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        repositorios.innerText = json.public_repos;
        botao.href = json.html_url;
        botao.innerText = "Ver perfil no GitHub";

})

});



    

