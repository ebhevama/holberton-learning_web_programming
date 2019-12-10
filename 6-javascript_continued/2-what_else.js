// //Task2's solution: answer file 2-what_else.js
//Using "node" in the command line console: node file.js parameter
//Then "enter" to execute the order

      let x = process.argv[2];        //Creating variables

      if(x>5) {
        console.log("The value is greater than 5");
      } else {
        console.log("The value is equal to 5 or lower");
      }

// >> The value is greater than 5           //console's output if x>5***
// >> The value is equal to 5 or lower      //console's output if x<=5***
