
const misse = {name: 'Misse', owner: 'Maija', parent: {mother: 'Molli'}}
//Luodaan kevytkopio käyttäen spread-syntaksia.
const otherMisse = {...misse}


misse.name="Muutettu"
misse.owner="Eri omistaja"
misse.parent.mother="Duuri"
console.log(misse)
//other misse säilyttää name- ja owner -attribuuttien arvonsa
//mutta parent-objektista ei nyt muodostu uutta ilmentymää 
//vaan other misse jakaa sen edelleen missen kanssa.
console.log(otherMisse)
