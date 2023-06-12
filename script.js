let y;
let margin = 0;

function start() {
  y = setInterval(run, 100);

  function run() {
    if (margin >= 1000) {
      clearInterval(y);
    } else {
      margin += 9;
      const car = document.getElementById("car");
      car.style.marginRight = margin + "px";
    }
  }
}

function stop() {
  clearInterval(y);
}
