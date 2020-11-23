 
 function randomint(){
 Math.random() 
 Math.floor(Math.random()* 100)
 }
 document.getElementById("knapp").onclick = randomint()
alert (randomint())