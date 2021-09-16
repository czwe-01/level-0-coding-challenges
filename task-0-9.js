function findVowels(string) {
  let vowelsToFind = /[aeiou]/gi;
  var length = string.length;
  let vowels = new Array();
  let eachLetter = string.split("");
  for (let i = 0; i < length; i++) {
    if (
      eachLetter[i].match(vowelsToFind) &&
      vowels.indexOf(eachLetter[i].toLowerCase()) === -1
    ) {
      vowels.push(eachLetter[i].toLowerCase());
    }
  }

  console.log("Vowels: " + vowels);
}

findVowels("Umuzi");
