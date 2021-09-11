function findCommonCharacters(string1, string2) {
  let stringChars = "";
  if (string1.length >= string2.length) {
    regex = "/" + "[" + string2 + "]" + "/gi";
    stringChars = string1.split("");
  } else {
    regex = "/" + "[" + string1 + "]" + "/gi";
    stringChars = string2.split("");
  }

  let commonCharacters = "";

  for (let i = 0; i < string2.length + string1.length; i++) {
    if (
      stringChars.includes(regex[i]) &&
      !commonCharacters.includes(regex[i])
    ) {
      //This if executes if the character is not already in the commonCharacters
      commonCharacters += regex[i];
    }
  }
  console.log(commonCharacters);
}

findCommonCharacters("outer", "compuuuutttereer");
findCommonCharacters("zink", "compuuuutttereer");
findCommonCharacters("computer", "house");
