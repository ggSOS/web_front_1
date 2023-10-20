let cities = ["São Paulo", "Rio de Janeiro", "Minas Gerais"];
let upperCaseCities = [];

for (let z = 0; z<3; z++){
    upperCaseCities[z] = cities[z].toUpperCase();
}

for (let z = 0; z<3; z++){
    console.log(upperCaseCities[z]);
}