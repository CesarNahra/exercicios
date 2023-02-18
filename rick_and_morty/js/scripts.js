let url = "https://rickandmortyapi.com/api/character/1"

async function search() {
    const response = await fetch(url);
    const data =  await response.json();
    console.log(data);
}

search();