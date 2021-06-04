var $car = document.querySelector('.car');

var moveBoolean = false;

var direction = 'e';
var x = 0;
var y = 0;

setInterval(moveCar, 16);

function moveCar(event) {
  if (moveBoolean === true) {
    if (direction === 'e') {
      x += 4;
      $car.style.left = x + 'px';
    } else if (direction === 'w') {
      x -= 4;
      $car.style.left = x + 'px';
    } else if (direction === 'n') {
      y -= 4;
      $car.style.top = y + 'px';
    } else if (direction === 's') {
      y += 4;
      $car.style.top = y + 'px';
    }
  }
}

function rotateCar() {
  if (direction === 's') {
    $car.style.transform = 'rotate(90deg)';

  } else if (direction === 'w') {
    $car.style.transform = 'rotate(180deg)';

  } else if (direction === 'n') {
    $car.style.transform = 'rotate(270deg)';

  } else if (direction === 'e') {
    $car.style.transform = 'rotate(0deg)';

  }
}

document.addEventListener('keydown', function (event) {
  if (`${event.code}` === 'Space') {
    moveBoolean = !moveBoolean;
  } else if (`${event.code}` === 'ArrowRight') {
    direction = 'e';
  } else if (`${event.code}` === 'ArrowLeft') {
    direction = 'w';
  } else if (`${event.code}` === 'ArrowUp') {
    direction = 'n';
  } else if (`${event.code}` === 'ArrowDown') {
    direction = 's';
  }
  rotateCar();
});
