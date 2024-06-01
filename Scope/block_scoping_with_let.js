// function start() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }

//   // console.log(i); // i is not defined
// }

// start();

function start() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
    /*
        0
        1
        2
        3
        4
    */
  }

  console.log(i); // 5

}

start();

// var => function scoped
// ES6 (ES2015); let, const => block-scoped
