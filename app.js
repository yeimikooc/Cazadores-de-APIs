async function buscar() {

let nombre = document.getElementById("nombre").value.toLowerCase();
let resultado = document.getElementById("resultado");
if (nombre === "") {
resultado.innerHTML = "Escribe un Pokémon";
return;
}

try {

let res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
let data = await res.json();

resultado.innerHTML = `
<h2>${data.name}</h2>
<img src="${data.sprites.front_default}">
<p>Tipo: ${data.types[0].type.name}</p>
`;

} catch {
resultado.innerHTML = "No encontrado ";
}

}
