//ici on veut creer un compte utilisateur
//etape 1: creation d'une fonction qui sera declenchee APRES la creation du compte

function afterCreation(name) {
  console.log(`Le compte de ${name} a bien été créé !`);
}

//etape 2: une fonction pour creer le compte utilisateur

function createAccount(name, callback) {
  console.log(`le compte de ${name} est en cours de creation`);
  callback(name); // ici, le callback est le nom donnee au deuxieme parametre de la fonction.
  //elle represente la fonction afterCreation
}

//etape 3: on execute la fonction createAccount pour lancer la creation du compte en transmettant les bons arguments

createAccount("Xavier", afterCreation);

//ici avec une fonction anonyme :
createAccount("Fatima", function (name) {
  console.log(`le compte de ${name} est creeeyyy`);
});

//ou alors la fonction anonyme ecrit en fonction flechee :
createAccount("Solene", (name) => {
  console.log(`le compte de ${name} est validay `);
});

// on a alors remplacé la fonction afterCreation par une fonction anonyme que l'on a directement integré en deuxieme argument de la fonction