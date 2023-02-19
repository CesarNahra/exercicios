const myName = document.querySelector("#name");
const avatar = document.querySelector("#photo");


let url = "https://api.github.com/users/CesarNahra"

async function search() {
    const response = await fetch(url);
    const data =  await response.json();
    myName.innerHTML = data.login;
    avatar.innerHTML = `<img src="https://avatars.githubusercontent.com/u/105174608?v=4">`
}

search();