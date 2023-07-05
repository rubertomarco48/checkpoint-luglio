function sumOdd(array) {
  const odd = array.filter((element) => element % 2 === 0);
  const sum = odd.reduce((acc, rec) => acc + rec);
  console.log(sum);
}
const x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sumOdd(x);
function pokedex(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((result) => result.json())
    .then((resul)=>{return resul})
    /* .then((element) => console.log(element)); */
}
let y =  pokedex("charmander");
class pokemon {
  constructor(
    ability,
    base_experience,
    forms,
    game_indices,
    height,
    help_items,
    id,
    is_default,
    location_area_encounters,
    moves,
    name,
    order,
    past_types,
    species,
    sprites,
    stats,
    types,
    weight
  ) {
    this.ability = ability;
    this.base_experience = base_experience;
    this.forms = forms;
    this.game_indices=game_indices;
    this.height =height;
    this.help_items= help_items;
    this.id=id;
    this.is_default=is_default;
    this.location_area_encounters=location_area_encounters;
    this.moves=moves;
    this.name= name;
    this.order=order;
    this.past_types=past_types;
    this.species=species;
    this.sprites= sprites;
    this.stats= stats;
    this.types=types;
    this.weight= weight;
  }
  
}

const {abilities,
    base_experience,
    forms,
    game_indices,
    height,
    help_items,
    id,
    is_default,
    location_area_encounters,
    moves,
    name,
    order,
    past_types,
    species,
    sprites,
    stats,
    types,
    weight} = y ;
    console.log(y);
let pok =new pokemon(abilities,
    base_experience,
    forms,
    game_indices,
    height,
    help_items,
    id,
    is_default,
    location_area_encounters,
    moves,
    name,
    order,
    past_types,
    species,
    sprites,
    stats,
    types,
    weight)
    function print() {
    if () {
        
    }
    }