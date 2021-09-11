function findCommonChars(string1, string2) {
  let stringChars = "";
  if (string1.length >= string2.length) {
    regex = "/" + "[" + string2 + "]" + "/gi";
    stringChars = string1.split("");
  } else {
    regex = "/" + "[" + string1 + "]" + "/gi";
    stringChars = string2.split("");
  }

  let commonChars = "";

  for (let i = 0; i < string2.length + string1.length; i++) {
    if (stringChars.includes(regex[i]) && !commonChars.includes(regex[i])) {
      commonChars += regex[i];
    }
  }
  console.log(commonChars);
}

findCommonChars("outer", "compuuuutttereer");
findCommonChars("zink", "compuuuutttereer");
findCommonChars("computer", "house");
