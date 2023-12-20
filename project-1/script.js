const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello Bhai band karo natak"
/*Conditionals */
let myVariable = 3;
let result = !(myVariable === 3);
document.write(result.textContent = "Hello Bhai nahi hai barabar ");

/*Functions*/
/*
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
document.write(multiply(4,7));
*/


/*Events: anonymous function*/
/*
document.querySelector(".one").addEventListener("click",function ()
{
    alert("Ouch! Green");
});


document.querySelector(".two").addEventListener("click",function ()
{
    alert("Ouch! Red");
});


document.querySelector(".three").addEventListener("click",function ()
{
    alert("Ouch! Black");
});


document.querySelector(".four").addEventListener("click",function ()
{
    alert("Ouch! Yellow");
});
*/

/*Events: arrow function*/
/*
document.querySelector("html").addEventListener("click", ()=>{
    alert("ouch! this is arrow function");
});
*/

/*Adding Image Changer*/
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};



