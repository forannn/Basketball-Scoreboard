let homePoint = document.getElementById("home-point");
let guestPoint = document.getElementById("guest-point");

let hPoint = 0;
let gPoint = 0;

const container = document.querySelector(".container");
container.addEventListener("click", function (event) {
  if (event.target.id === "increase-one") {
    hPoint += 1;
    homePoint.textContent = hPoint;
  } else if (event.target.id === "increase-two") {
    hPoint += 2;
    homePoint.textContent = hPoint;
  } else if (event.target.id === "increase-three") {
    hPoint += 3;
    homePoint.textContent = hPoint;
  } else if (event.target.id === "guest-increase-one") {
    gPoint += 1;
    guestPoint.textContent = gPoint;
  } else if (event.target.id === "guest-increase-two") {
    gPoint += 2;
    guestPoint.textContent = gPoint;
  } else if (event.target.id === "guest-increase-three") {
    gPoint += 3;
    guestPoint.textContent = gPoint;
  } else {
    console.log(100);
  }
});
