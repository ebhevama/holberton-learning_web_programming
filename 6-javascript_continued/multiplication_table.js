// //Task5's solution: answer file multiplication_table.js
// <!DOCTYPE html>
// <html lang="en" dir="ltr">
//   <head>
//     <meta charset="utf-8">
//     // <!-- adding Bootstrap to my web page -->
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
//     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
//     <link rel="stylesheet" href="style.css">  <!-- for external css stylesheet file -->
//     // <!-- displaying webs correctly on mobile devices*** -->
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//     <title>multiplication table with nested loops</title>
//   </head>
//   <body>
//     <script type="text/javascript">
      for(var x = 1; x <= 12; x++) {
	      for(var y = 1; y <=12; y++) {
	      	// document.writeln(x*y + "<br>");
          console.log(x*y)                  //Print command in console
          if (y==12) {"<br>";}
	      }
      }
//     </script>
//   </body>
// </html>
