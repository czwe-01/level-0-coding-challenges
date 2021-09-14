function findVowels(string) {
  let vowelsToFind = /[aeiou]/gi;
  var length = string.length;
  let vowels = "";
  let eachLetter = string.split("");
  for (let i = 0; i < length; i++) {
    if (eachLetter[i].match(vowelsToFind)) {
      vowels += eachLetter[i] + ", ";
    }
  }

  console.log("Vowels: " + vowels);
}

findVowels("ThUlaSiIzwe");
