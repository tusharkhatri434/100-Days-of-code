const input = document.getElementById("movie-search");
const card = document.querySelector(".card");
const btn = document.querySelector(".btn");
const apiKey = "adff2bf8";

btn.addEventListener("click",()=>{
   getData(input.value);
console.log(input.value);
},)

let movieData = {};
async function getData (query){
    const data = await fetch(
      `https://www.omdbapi.com/?t=${query}&apikey=${apiKey}`);
    const json = await data.json();
        console.log(json);
        showCard(json);
}

function showCard (data) {
    card.innerHTML = `
    <img width="330" src=${data.Poster}>
            <ul>
                <li> Name - ${data.Title}</li>
                <li>Year - ${data.Year}</li>
                <li>Gener - ${data.Genre}</li>
                <li>Director - ${data.Director}</li>
                <li>Language - ${data.Language}</li>
                <li>Ratings - ${data.Ratings[0].Value}</li>
            </ul>
    `;
}
