// Esimerkki: Node.js-skripti

// Datasetti 1: käyttäjät
const users = [
  { id: 1, name: "Anna", cityId: 101 },
  { id: 2, name: "Mikko", cityId: 102 },
  { id: 3, name: "Laura", cityId: 103 },
  { id: 4, name: "Jari", cityId: 102 },
  { id: 5, name: "Jari", cityId: 104 },
];

// Datasetti 2: kaupungit
const cities = [
  { id: 101, name: "Helsinki", population: 650000 },
  { id: 102, name: "Tampere", population: 240000 },
  { id: 103, name: "Turku", population: 190000 },
];

// 1 Suodatetaan käyttäjät – esimerkiksi vain ne, joiden kaupunki-id on 102
const filteredUsers = users.filter(user => user.cityId === 102);

// 2 Liitetään (mapataan) käyttäjät kaupunkeihin cityId:n perusteella
//b. map käy jokaisen käyttäjän läpi ja etsii vastaavan kaupungin 
// cities.find(...)

const usersWithCity = filteredUsers.map(user => {
  const city = cities.find(c => c.id === user.cityId);
  return {
    ...user,
    cityName: city ? city.name : "Tuntematon",
    cityPopulation: city ? city.population : "N/A"
  };
});

// 3. Tulostetaan tulokset
console.log("Suodatetut ja yhdistetyt käyttäjät:");
console.table(usersWithCity);
