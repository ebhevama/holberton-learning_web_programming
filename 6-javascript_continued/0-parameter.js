//Task0's solution: answer file 0-parameter.js
//Using "node" in the command line console: node file.js parameter
//Then "enter" to execute the order

//Store a value passed by the user to the script in the variable my_parameter.
//Note it takes the 2nd element corresponding to the 1st parameter. Third
//element would correspond to second parameter
  let my_parameter = process.argv[2];

  console.log("Here is the first passed parameter: " + my_parameter) // Print "my_parameter" variable

// >> Here is the first passed parameter: [my_parameter]        //console's output
