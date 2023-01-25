//EX 00 :
const product = {
  name: "iPhone Xs",
  price: 1255,
};
console.log(product);
//EX 02 :
const user = {
  name: "Farid",
  "date of birth": "1987-02-14",
};
console.log(user["date of birth"]);
//EX 03 :
const message = {
  text: "Hello how are you",
  date: "2019-01-11",
};
const keyName = "text";
console.log(message[keyName]);
//EX 04:
const item = {
  id: 94676,
  title: "Playstation 4",
  brand: "sony",
  price: 150,
  seller: {
    id: 14249,
    name: "Sofiane",
  },
};
console.log(item.seller.name);
//EX 07:
const countries = [
  { name: "France" },
  { name: "Japon" },
  { name: "Colombie" },
  { name: "Canada" },
  { name: "Italie" },
];
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]["name"]);
}
//EX 08: 
const user2 ={
    name:"Iris",
}
if (user2==undefined){
    console.log(user2.age)
}else{
    console.log("L'age n'a pas été défini")
}
