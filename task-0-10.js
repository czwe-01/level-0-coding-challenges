function findCommonChars(string1, string2) {
  let stringLength = 0;
  let stringChars = "";
  if (string1.length >= string2.length) {
    stringLength = string1.length;
    regex = "/" + "[" + string2 + "]" + "/gi";
    stringChars = string1.split("");
  } else {
    stringLength = string2.length;
    regex = "/" + "[" + string1 + "]" + "/gi";
    stringChars = string2;
  }
  console.log("length: " + stringLength);
  console.log("stringChars: " + stringChars);
  console.log("regex: " + regex);

  for (let i = 0; i < stringLength; i++) {
    if (stringChars.includes(regex[i])) {
      console.log(regex[i]);
    }
  }
}

findCommonChars("ThulasizweNambule", "sizwe Nkabinde");
