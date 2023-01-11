console.log("Connected..")
const btnObj = document.getElementsByTagName("button");

function showtime() {
    const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
  document.getElementById("date").innerHTML = d.toLocaleDateString();
  }
function clr(){
    document.getElementById("time").innerHTML = ` `; 
}
// function showtime() {
//     const d = new Date();
//   document.getElementById("time").innerHTML = d.toLocaleDateString();
//   }
btnObj[0].addEventListener("click",showtime);
btnObj[1].addEventListener("click",clr);
