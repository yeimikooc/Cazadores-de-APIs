async function buscar() {

let nombre = document.getElementById("nombre").value
.toLowerCase()
.trim()
.replace(" ", "-"); // para nombres como mr mime

let resultado = document.getElementById("resultado");

if (nombre === "") {
resultado.innerHTML = "Escribe un Pokémon";
return;
}

try {

let res = await fetch("https://pokeapi.co/api/v2/pokemon/&quot; + nombre);

if (!res.ok) {
throw new Error("No encontrado");
}

let data = await res.json();

resultado.innerHTML = `
<h2>${data.name.toUpperCase()}</h2>
<img src="${data.sprites.front_default}">
<p>Tipo: ${data.types.map(t => t.type.name).join(", ")}</p>
<p>ID: ${data.id}</p>
`;

} catch {
resultado.innerHTML = "No encontrado ";
}

}
