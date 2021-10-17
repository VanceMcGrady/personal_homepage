function greet() {
  const todaysDate = new Date();
  const currentTime = todaysDate.getHours();
  const yourName = "Vance";
  let greeting = document.getElementById("greeting").textContent;

  console.log(todaysDate);
  console.log(currentTime);
  console.log(yourName);

  if (currentTime > 5) {
    greeting = "You should get some sleep, " + yourName;
  } else if (currentTime > 5 && currentTime < 12) {
    greeting = "Good morning, " + yourName;
  } else if (currentTime >= 12 && currentTime < 18) {
    greeting = "Good afternoon, " + yourName;
  } else {
    greeting = "Good evening, " + yourName;
  }

  console.log(greeting);
}

greet();
