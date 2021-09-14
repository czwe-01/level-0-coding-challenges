function maximum() {
  let max = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

maximum(2, 551, 1, 60, 67, 33, 109);
