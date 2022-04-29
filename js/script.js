

//let pokemon = document.getElementById("pokemon");

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


//búsqueda

function buscarPokemones() {

  cardPokemon.innerHTML = ""

  const buscarPokemon= document.getElementById("busqueda").value;

  const nombrePokemon = buscarPokemon.toLowerCase();


  const filtrarPokemones = listaPokemon.filter(elemento => {
      const nuevoNombre = elemento.name
      const transformarNombre = nuevoNombre.toLowerCase();
      console.log(transformarNombre)

    return transformarNombre == "" ?  lista(listaPokemon) : transformarNombre.includes(nombrePokemon);
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

  })
}


//validación del input

function validacion() {
  const inputBusqueda = document.getElementById('busqueda').value;
  console.log(typeof(inputBusqueda))

  if(inputBusqueda==parseFloat(inputBusqueda)){
    alert('por favor, ingresa un nombre de pokémon válido');
    inputBusqueda ="";
  }

}



//loading pokebola


function myFunction() {
  var myVar;
  myVar = setTimeout(showPage, 2000);
}
myFunction()

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}





//ABpro 5

const listaABpro = async () => {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts")
    const datosLorem = await respuesta.json()
   
    const datosTodos = datosLorem
  
    const filtroDatos = datosTodos.slice(0, 20)
    

    loremSlice = filtroDatos
    listaLorem = datosTodos

    recorrerLorem()
    recorrerTitulos()

  } catch (error) {
    console.log(error.message)
  }
}
listaABpro()

let loremSlice = [];

let listaLorem = [];



const cardLorem = document.getElementById('cardLorem');

function recorrerLorem(){

  cardLorem.innerHTML="";

  listaLorem.forEach(elemento => {

    const template = `<div class="card  mb-2 ml-2" style="width: 18rem;">
        <img class="card-img-top" style="width:150px; display:block;margin:auto;" src="">
        <div class="card-body text-center">
          <h5 class="card-title">${elemento.title}</h5>
          <p class="card-text">Tipo: ${elemento.body}</p>
          <button type="button" class="btn btn-primary mb-3" data-toggle="modal" data-target="#exampleModal" onclick="info(${elemento.id})">Ver detalles</button>
        </div>
      </div>`;
      cardLorem.innerHTML += template;

  })
};

//Modal con los detalles
const infoModal = async (id) =>{ 
  try{
    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    
    const data = await respuesta.json()
    return data

  }catch (error) {
    console.log(error.message)
}}

const info  = async (id) =>{
  //debugger
  let userId = document.querySelector('.userId');
  
  const object = await infoModal(id)

  userId.innerHTML = (`ID: ${object.id}`);

}


//CARD de los primeros 20 títulos

const cardTitulos  = document.getElementById('cardTitulos');

function recorrerTitulos(){

  cardTitulos.innerHTML="";

  loremSlice.forEach(elemento => {

    const template = `<div class="card  mb-2 ml-2" style="width: 18rem;">
        <img class="card-img-top" style="width:150px; display:block;margin:auto;" src="">
        <div class="card-body text-center">
          <h5 class="card-title">${elemento.title}</h5>
        </div>
      </div>`;
      cardTitulos.innerHTML += template;

  })
};


//const delay = time => new Promise(resolveCallback => setTimeout(resolveCallback, time));

const delay = new Promise ((resolve) => {
  setTimeout(()=>{
    resolve('información enviada')
  }, 3000) 
});


const mensaje = async () =>{
  const response = await delay
  const data = await response
  console.log(data)
}
mensaje()






