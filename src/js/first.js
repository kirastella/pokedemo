document.addEventListener("DOMContentLoaded", function(){
    const pokelistElm = document.querySelector(".pokelist");
    fetch("http://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
})