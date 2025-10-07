
/*
  names on määritelty ensin päätasolla ja sitten varjostettu 
  for-lohkon sisällä rivillä 16. Viimeisellä rivillä sen arvo
  on "Alkuperäinen arvo"
*/

let names = ['Matti', 'Minna', 'Iines', 'Joni', 'Mikko', 'Leena']

let name = "Alkuperäinen arvo"

for (let i = 0; i < names.length; i++) {
  let name = names[i]
  console.log(name)
}
//Name-muuttujan arvo on sama kuin viimeksi TÄSSÄ lohkossa sijoitettu arvo.
//for-silmukka on omassa lohkossaan.
console.log(`Nimet loppuivat. Name muuttujan arvo nyt: ${name}`)




