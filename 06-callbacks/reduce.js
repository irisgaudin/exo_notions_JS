//.reduce () permet d'iterer sur chaque element en y appliquant un callback en transformant l'objet

const reduce = (tab, val) => {
  return tab.reduce(val);
};

const result = reduce([0, 1, 2, 3, 4], (previousValue, currentValue) => {
  return previousValue + currentValue;
});

console.log(result); //returns '10'
