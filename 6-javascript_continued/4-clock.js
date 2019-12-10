// //Task4's solution: answer file 4-clock.js
//Using "node" in the command line console: node file.js

  var h = 0;                          //defining variable: h (hour), m (minute)

  while(h<24) {
    console.log(h)                    //Print command in console
    for (var m = 0; m<=59; m++) {
      // console.log(h,m)             //Print command in console
      console.log(m)                  //Print command in console
    }
    h++;
  }
