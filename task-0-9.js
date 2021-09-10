function findVowels(string) {
  let vowelsToFind = /[aeiou]/gi;

  var length = string.length;
  console.log(length);

  let eachLetter = string.split("");
  console.log(eachLetter);

  for (let i = 0; i < length; i++) {
    if (eachLetter[i].match(vowelsToFind)) {
      console.log(eachLetter[i]);
    }
  }
}

findVowels("ThUlaSiIzwe");
