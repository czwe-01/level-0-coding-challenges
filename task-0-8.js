function numberToHours(number) {
  let hours = Math.round(number / 60);
  let minutes = number % 60;

  console.log(hours);
  console.log(minutes);

  let time = hours + " hours" + " : " + minutes + " minutes";

  if (hours > 1 && minutes > 1) {
    console.log(time);
  } else if (hours > 1 && minutes <= 1) {
    time = hours + " hours" + " : " + minutes + " minute";
    console.log(time);
  } else if (hours <= 1 && minutes > 1) {
    time = hours + " hour" + " : " + minutes + " minutes";
    console.log(time);
  } else {
    time = hours + " hour " + " : " + minutes + " minute";
    console.log(time);
  }

  console.log;
}

numberToHours(133);
