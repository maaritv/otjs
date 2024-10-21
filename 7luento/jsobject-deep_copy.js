
const misse = {name: 'Misse', owner: 'Maija', parent: {mother: 'Molli'}}

//luodaan syväkopio
const otherMisse = JSON.parse(JSON.stringify(misse));


misse.name="Muutettu"
misse.owner="Eri omistaja"
misse.parent.mother="Duuri"
console.log(misse)

//vaikka missen kaikki attribuutit muutetaan, othermisse säilyttää
//kaikki omat arvonsa. misse ja other misse ovat siis nyt
//täysin erilliset.
console.log(otherMisse)
