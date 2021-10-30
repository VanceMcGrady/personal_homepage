function greet() {
  const todaysDate = new Date();
  const currentTime = todaysDate.getHours();
  const yourName = "Vance.";
  let greeting = document.getElementById("greeting");

  if (currentTime < 5) {
    greeting.innerHTML = "You should get some sleep, " + yourName;
  } else if (currentTime > 5 && currentTime < 12) {
    greeting.innerHTML = "Good morning, " + yourName;
  } else if (currentTime >= 12 && currentTime < 18) {
    greeting.innerHTML = "Good afternoon, " + yourName;
  } else {
    greeting.innerHTML = "Good evening, " + yourName;
  }
}

greet();
