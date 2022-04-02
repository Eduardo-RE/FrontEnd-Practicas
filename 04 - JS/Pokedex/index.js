let pokemon = "pikachu";
let pokeImg = document.getElementById("poke-img");
let pokename = document.getElementById("poke-name");
let pokeTipo = document.getElementById("poke-tipo");
let hab1 = document.getElementById("hab1");
let hab2 = document.getElementById("hab2");
let hab3 = document.getElementById("hab3");

function getVal() {
  const val = document.querySelector("input").value;
  pokemon = val;
}

const fetchPokemon = async () => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );

    const data = await response.json();
    console.log(data);
    pokeImg.src = data.sprites.front_default;
    pokename.innerHTML = data.name;
    if (data.moves.length == 1) {
      hab1.innerHTML = "Habilidad 1: " + data.moves[0].move.name;
    } else {
      hab1.innerHTML = "Habilidad 1: " + data.moves[0].move.name;
      hab2.innerHTML = "Habilidad 2: " + data.moves[1].move.name;
      hab3.innerHTML = "Habilidad 3: " + data.moves[2].move.name;
    }

    data.types.map((types) => {
      //render all types
      pokeTipo.innerHTML += `<span > ${types.type.name}  </span>`;
    });

    // data.type.map((pokemon) => {
    //   pokeTipo.innerHTML = "Tipo: " + pokemon.name;
    // });
    document.querySelector("input").value = "";
  } catch (error) {
    alert(error);
    document.querySelector("input").value = "";
  }
};
