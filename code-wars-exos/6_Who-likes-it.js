//if arr.length >= 4 then "and "+ num "others like it"
//if arr.length===0 then "no one likes this "
// arr[0]+arr[1] likes it

function likes(name) {
  switch (name.length) {
    case 0:
      return "no one likes this";
    case 1:
      return name[0] + " likes this";
    case 2:
      return name[0] + " and " + name[1] + " like this";
    case 3:
      return name[0] + ", " + name[1] + " and " + name[2] + " like this";
    case 4:
      return (
        name[0] +
        ", " +
        name[1] +
        " and " +
        (name.length - 2) +
        " others like this"
      );
  }
}

console.log(likes([])); // no one likes this
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Iris", "Salome"]));
