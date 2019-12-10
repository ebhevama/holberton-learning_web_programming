// //Task3's solution: answer file 3-grading_system.js
//Using "node" in the command line console: node file.js parameter
//Then "enter" to execute the order

      let x = process.argv[2];        //Creating variables

      if(x<=65) {
        console.log("You received a D");
      } else if (x<=74) {
          console.log("You received a C");
      } else if (x<=79) {
          console.log("You received a C+");
      } else if (x<=84) {
          console.log("You received a B");
      } else if (x<=89) {
          console.log("You received a B+");
      } else if (x<=94) {
          console.log("You received a A");
      } else {
          console.log("You received a A+");
      }

// >> The value is greater than 5           //console's output if x>5***
// >> The value is equal to 5 or lower      //console's output if x<=5***
