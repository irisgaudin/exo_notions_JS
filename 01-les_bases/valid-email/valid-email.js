const email = "iris@@mail.com";
let valid = false;
//verifier si la string email contient un @
//si c'est le cas, changer la valeur de valid en true
if (email.includes("@")) {
  valid = true;
}

console.log(valid);
