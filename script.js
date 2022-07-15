const container = document.getElementById('card__info');
const divNotFound = document.getElementById('not__found');
divNotFound.style.display = 'none';

const form = document.querySelector('.search');

form.addEventListener('submit', async(event) => {
    event.preventDefault();
    const githubUser = document.getElementById('searchInput').value;
    
    if (githubUser) {
        try {
            const url = `https://api.github.com/users/${githubUser}`;
            const result = await fetch(url);
            if(result.ok) {
                const data = await result.json();
                container.innerHTML = info(data);
            } else {
                container.style.display = 'none';
                divNotFound.style.display = "flex";
                divNotFound.style.flexDirection = "column";
                divNotFound.innerHTML = userNotFound();
            }
        }
        catch(err) {
            console.error("Usuário não encontrado" + err);
          }
    } else {
        alert('Digite algum usuário válido');
    }
})

const info = (user) => {
    const { name, avatar_url, bio, public_repos, login, followers } = user
        return `
            <img class="img_github" src="${avatar_url}" alt="minha foto do github" />
            <div class="card_title">
             <h2 class="name"> ${name}</h2>
             <p class="user"> ${login}</p>
            </div>
            <div class="card_bio">
             <p> ${bio ? bio : ''}</p>
            </div>
            <div class="card_icon">
             <div class="icons">
                <img class="icon1" src="./images/people_outline.png"/>
                <p class="public-repos">${public_repos}</p>
             </div>
             <div class="icons">
                <img class="icon2" src="./images/Vector.png"/>
                <p class="followers">${followers}</p> 
             </div>
            </div>
        `
} 

const userNotFound =  () => {
    return `
        <div class="notfound_user">
            <h1> Usuário não encontrado </h1>
            <p> Pesquise novamente </p>
            <img class="img_notfound" src="./images/notfound.png" />
        </div>
    `
}