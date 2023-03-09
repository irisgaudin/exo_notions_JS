// Etape 1 : Declaration d'une fonction simple :

/* const whatIsYourName =()=> {
    console.log("mon nom est personne.")
}

//execution de la fonction 
whatIsYourName() */

//ajoutons un argument :

/* const whatIsYourName = (name) => {
  console.log(`mon nom est ${name}`);
};

whatIsYourName("Xavier");
 */
//ajoutons un callback en argument :

const whatIsYourName = (name, cb) => {
  cb(name); // ici j'execute ma fonction callback (cb) en lui donnant name comme argument
};

//ajoutons le callback en fonction anonyme dans l'APPEL DE LA FONCTION !

whatIsYourName("penelope", (toto) => {
  console.log(`mon nom est ${toto}`);
});

