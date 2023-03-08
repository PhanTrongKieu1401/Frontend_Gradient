/**
 * 
 */
const colorBtn = document.getElementById("buttonRandom");
const colorScr = document.querySelector("#screen");
const colorF = document.querySelector("#firstcolor");
const colorS = document.querySelector("#secondcolor");
const textF = document.querySelector("#foottext");

colorBtn.addEventListener("click", function(){
    let rf = Math.floor(Math.random()*256);
    let gf = Math.floor(Math.random()*256);
    let bf = Math.floor(Math.random()*256);
    let colorCodeF = 'rgb(' + rf + ',' + gf + ',' + bf +')';
    let rs = Math.floor(Math.random()*256);
    let gs = Math.floor(Math.random()*256);
    let bs = Math.floor(Math.random()*256);
    let colorCodeS = 'rgb(' + rs + ',' + gs + ',' + bs +')';
    colorF.style.backgroundColor = colorCodeF;
    colorS.style.backgroundColor = colorCodeS;
    textF.innerHTML = "linear-gradient(to right, " + colorCodeF + ", " + colorCodeS + ");";
    colorScr.style.backgroundImage = "linear-gradient(to right, " + colorCodeF + ", " + colorCodeS + ")";
})