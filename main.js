var $car = document.querySelector('.car');

var moveBoolean = false;

// var direction = 'e'
var x = 0;
// var y = 0;

// var moveInterval = setInterval(moveCar, 16);
setInterval(moveCar, 16);

function moveCar(event) {
  if (moveBoolean === true) {
    x += 2;
    $car.style.left = x + 'px';
  }
}

// document.addEventListener('keydown', function (event) {
//   if (`${event.code}` === 'Space') {
//     moveBoolean = true;
//   } else if (`${event.code}` === 'ArrowRight'){
//     direction = 'e';
//   } else if (`${event.code}` === 'ArrowLeft'){
//     direction = 'w';
//   } else if (`${event.code}` === 'ArrowUp'){
//     direction = 'n';
//   } else if (`${event.code}` === 'ArrowDown'){
//     direction = 's';
//   }
//   // console.log('direction:', direction);
// });
