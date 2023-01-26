// ici panda est un objet qui possède pls caractéristiques (nom, espece,age...)

const panda = {
  name: "Yuan Zi", // "l'élement"=name --> la "clé"= Yuan Zi
  species: "Panda Geant",
  gender: "male",
  weight: 110,
  zoo: "Beauval",
  birth: {
    // objet dans un objet qui detaille la naissance
    date: "2008-09-06",
    place: "Chengdu, Chine",
  },
  photo: [
    // tableau dans un objet qui liste les photoS
    "https://s3.eu-central-1.amazonaws.com/zooparc/assets/pandas/panda_yuan_zi_photo_identite.jpg",
    "https://s3.eu-central-1.amazonaws.com/zooparc/assets/pandas/panda_yuan_zi_400x400_001.jpg",
    "https://s3.eu-central-1.amazonaws.com/zooparc/assets/pandas/panda_yuan_zi_400x400_002.jpg",
  ],
};
console.log(panda.name); // Affichera `Yuan Zi`
console.log(panda.birth.date); // Affichera `2008-09-06`
console.log(panda.photos[0]); // Affichera `https://s3.eu-central-1.amazonaws.com/zooparc/assets/pandas/panda_yuan_zi_photo_identite.jpg`
// Source : https://www.zoobeauval.com/pandas/yuan-zi

