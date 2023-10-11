function displayReponse_1() {
    document.getElementById("reponse_1").style.display = "block";
   
}
function displayReponse_2() {
    document.getElementById("reponse_2").style.display = "block";
}
function displayReponse_3() {
    document.getElementById("reponse_3").style.display = "block";
}
document.getElementById("btn1").addEventListener("click",displayReponse_1);
document.getElementById("btn2").addEventListener("click",displayReponse_2);
document.getElementById("btn3").addEventListener("click",displayReponse_3);