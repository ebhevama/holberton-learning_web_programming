//Task5's solution: answer file 101-function.js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>defining and calling js functions</title>
</head>
<body>
    <script>
    // Defining function
    function hw() {                     //function to print hello world
      document.write("hello world");
    }

    function showdoublef(p1) {          //function to double any given value
      var showdoublev = 2*p1;
      // return 2*p1;                   //returns 2*p1. Not working+++???
      document.write(showdoublev);
    }

    // Calling functions
    hw();                                //Prints: hello world
    document.write("<br>");
    showdoublef(4);     //Give here any number you want, it'll print doubled: 8*
  </script>             //still missing put text "The double of (p1) is (2*p1)"
</body>
</html>
