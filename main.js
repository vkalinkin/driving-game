var $car = document.querySelector('.car');

var moveBoolean = false;

var currentDirection = 'e';
var previousDirection = 'n';
var x = 0;
var y = 0;
var speed = 4;

setInterval(moveCar, 16);

function moveCar(event) {
  if (moveBoolean === true) {
    if (currentDirection === 'e') {
      x += speed;
      $car.style.left = x + 'px';
    } else if (currentDirection === 'w') {
      x -= speed;
      $car.style.left = x + 'px';
    } else if (currentDirection === 'n') {
      y -= speed;
      $car.style.top = y + 'px';
    } else if (currentDirection === 's') {
      y += speed;
      $car.style.top = y + 'px';
    }
  }
}

function rotateCar() {
  if (currentDirection === 's') {
    $car.style.transform = 'rotate(90deg)';

  } else if (currentDirection === 'w') {
    $car.style.transform = 'rotate(180deg)';

  } else if (currentDirection === 'n') {
    if (previousDirection === 'e') {
      $car.style.transform = 'rotate(-90deg)';
    } else {
      $car.style.transform = 'rotate(270deg)';
    }

  } else if (currentDirection === 'e') {
    if (previousDirection === 'n') {
      $car.style.transform = 'rotate(-0deg)';
    } else {
      $car.style.transform = 'rotate(0deg)';
    }

  }
}

document.addEventListener('keydown', function (event) {
  if (`${event.code}` === 'Space') {
    moveBoolean = !moveBoolean;
  } else if (`${event.code}` === 'KeyX' && speed < 25) {
    speed++;
  } else if (`${event.code}` === 'KeyZ' && speed > 1) {
    speed--;
  } else if (`${event.code}` === 'ArrowRight' || `${event.code}` === 'ArrowLeft' || `${event.code}` === 'ArrowUp' || `${event.code}` === 'ArrowDown') {
    previousDirection = currentDirection;
    if (`${event.code}` === 'ArrowRight') {
      currentDirection = 'e';
    } else if (`${event.code}` === 'ArrowLeft') {
      currentDirection = 'w';
    } else if (`${event.code}` === 'ArrowUp') {
      currentDirection = 'n';
    } else if (`${event.code}` === 'ArrowDown') {
      currentDirection = 's';
    }
  }
  rotateCar();
});
