

let pokemon = document.getElementById("pokemon");

function getlistaPokemon(){
  fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
  .then(resultadoPokemon => resultadoPokemon.json())
  .then(response => {

    listaPokemon = response.pokemon
    recorrerPokemon()
    addToFavClicked(id)
    recorreFav(favoritos)

  })

}
let listaPokemon = [];

let favoritos = [];



const cardPokemon = document.getElementById('cardPokemon');

function recorrerPokemon(){

  cardPokemon.innerHTML="";

  listaPokemon.forEach(elemento => {

    const content = `<div class="card  mb-2 ml-2" style="width: 18rem;">
        <img class="card-img-top" style="width:150px; display:block;margin:auto;" src="${elemento.img}">
        <div class="card-body text-center">
          <h5 class="card-title">${elemento.name}</h5>
          <p class="card-text">Tipo: ${elemento.type}</p>
          <button type="button" class="btn btn-primary mb-3" data-toggle="modal" data-target="#exampleModal" onclick="detalles(${elemento.id})">Ver detalles</button>

          <a href="#" class="card-button btn btn-primary" onclick="addToFavClicked(${elemento.id})">Añadir a favoritos</a>

        </div>
      </div>`;
      cardPokemon.innerHTML += content;

  })
};

//Modal con los detalles de los pokemones

function detalles(id){

  let modalTitle = document.querySelector('.modal-title');
  let height = document.querySelector('.height');
  let weight = document.querySelector('.weight');
  let weaknesses = document.querySelector('.weaknesses');
  //let evolution = document.querySelector('.evolution');

  const object = listaPokemon.find(pokemon=>pokemon.id==id);

  modalTitle.innerHTML = object.name;
  height.innerHTML = (`altura: ${object.height}`);
  weight.innerHTML = (`peso: ${object.weight}`);
  weaknesses.innerHTML = (`debilidades: ${object.weaknesses}`);
  //evolution.innerHTML += object.next_evolution.map(elemento => `${elemento.name} `) ;

  console.log (object)


  console.log(id)
}



//sección de FAVORITOS
function addToFavClicked(id){

  const encontrar= listaPokemon.find(listaPokemon=>listaPokemon.id==id);

  const boolean= favoritos.some(listaPokemon=>listaPokemon.id==id);
  console.log(boolean)
  if (boolean){
    encontrar.num += 1;



  }else{
      favoritos.push(encontrar);


  }
}

function recorreFav(){

  cardPokemon.innerHTML="";

  favoritos.forEach(elemento => {

    const content = `<div class="card mb-2 ml-2" style="width: 18rem;">
        <img class="card-img-top" style="width:150px; display:block;margin:auto;" src="${elemento.img}">
        <div class="card-body text-center">
          <h5 class="card-title">${elemento.name}</h5>
          <p class="card-text">Tipo: ${elemento.type}</p>
          <button type="button" class="btn btn-primary mb-3" data-toggle="modal" data-target="#exampleModal" onclick="detalles(${elemento.id})">Ver detalles</button>

          <a href="#" class="card-button btn btn-primary" onclick="addFavoritos(${elemento.id})">Añadir a favoritos</a>

        </div>
      </div>`;
      cardPokemon.innerHTML += content;

  })
}


//busqueda

function buscarPokemones() {

  cardPokemon.innerHTML = ""

  const buscarPokemon= document.getElementById("busqueda").value;

  const nombrePokemon = buscarPokemon.toLowerCase();


  const filtrarPokemones = listaPokemon.filter(elemento => {
      const nuevoNombre = elemento.name
      const transformarNombre = nuevoNombre.toLowerCase();
      console.log(transformarNombre)

      return transformarNombre == "" ?  lista(listaPokemon) : transformarNombre.includes(nombrePokemon);

      /* if (transformarNombre == ""){
        return lista(listaPokemon); 
      }else if (transformarNombre !== ""){
        return transformarNombre.includes(nombrePokemon);
      }*/


  })

  filtrarPokemones.forEach(function(elemento) {

      const content = `<div class="card mb-2 ml-2" style="width: 18rem;">
      <img class="card-img-top" style="width:150px; display:block;margin:auto;" src="${elemento.img}"  alt="...">
      <div class="card-body text-center">
        <h5 class="card-title">${elemento.name}</h5>
        <p class="card-text">${elemento.type}</p>
        <button type="button" class="btn btn-primary mb-3" data-toggle="modal" data-target="#exampleModal" onclick="detalles(${elemento.id})">Ver detalles</button>
        <a href="#" class="card-button btn btn-primary" onclick="addToFavClicked(${elemento.id})">Añadir a favoritos</a>
      </div>
    </div>`;
    cardPokemon.innerHTML += content;

  }
  )

}

//loading pokebola


function myFunction() {
  var myVar;
  myVar = setTimeout(showPage, 3000);
}
myFunction()

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


















/*
function recorrerPokemon(datosPokemon){
  document.getElementById("cardPokemon").innerHTML = "";

    datosPokemon.pokemon.forEach(function (elemento) {
       document.getElementById("cardPokemon").innerHTML += `
       <div class="card col-3 ml-1 mb-3 text-center">
        <img class="card-img-top" src="${elemento.img}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${elemento.name}</h5>
          <p class="precio">$${elemento.type}</p>
          <btn class="btn btn-primary" onclick="agregarCarrito(${elemento.id})" >Añadir a favoritos</btn>
        </div>
      </div>`;
     });
}
recorrerPokemon(datosPokemon)
*/



//Prueba lista
/*
function recorrerPokemon(datosPokemon) {
  pokemon.innerHTML = "";
  datosPokemon.pokemon.forEach((elemento) => {
    pokemon.innerHTML += `
        <tr>
            <td scope="row">${elemento.num}</td>
            <td><img src="${elemento.img}" alt="elemento.name"></td>
            <td>${elemento.name}</td>
            <td>${elemento.type}</td>
        </tr>
        `;
  });
}

function borrarTabla(){
    contenido.innerHTML = ""
}
*/