const timeConvert = (num) => {
  let seconds = Math.floor(num % 60);
  let minutes = Math.floor(num / 60) % 60;
  let hours = Math.floor(num / 3600);

  if (hours.toString().length === 1) {
    hours = "0" + hours;
  }
  if (minutes.toString().length === 1) {
    minutes = "0" + minutes;
  }
  if (seconds.toString().length === 1) {
    seconds = "0" + seconds;
  }

  let total = hours + ":" + minutes + ":" + seconds;
  return total;
};

console.log(timeConvert(126)); // Affichera "00:02:06"
console.log(timeConvert(4804)); // Affichera "01:20:04"
