let question_est_ouverte_1 = false;
let question_est_ouverte_2 = false;
let question_est_ouverte_3 = false;

function displayReponse_1() {
    //si (question est ouvert) alors 
    if (question_est_ouverte_1) {
        
    //fermer la question
    console.log("la question est ouvert");
    document.getElementById("btnplus_1").innerHTML = "+";
    document.getElementById("reponse_1").style.display = "none";
    question_est_ouverte_1 = false;
    //sinon
} else {
    //ovrir la question
    document.getElementById("btnplus_1").innerHTML = "-";
    document.getElementById("reponse_1").style.display = "block";
    question_est_ouverte_1 = true;
    //
 }
}

function displayReponse_2() {
    //si (question est ouvert) alors 
    if (question_est_ouverte_2) {
        
    //fermer la question
    console.log("la question est ouvert");
    document.getElementById("btnplus_2").innerHTML = "+";
    document.getElementById("reponse_2").style.display = "none";
    question_est_ouverte_2 = false;
    //sinon
} else {
    //ovrir la question
    document.getElementById("btnplus_2").innerHTML = "-";
    document.getElementById("reponse_2").style.display = "block";
    question_est_ouverte_2 = true;
    //
 }
}

function displayReponse_3() {
    //si (question est ouvert) alors 
    if (question_est_ouverte_3) {
        
    //fermer la question
    console.log("la question est ouvert");
    document.getElementById("btnplus_3").innerHTML = "+";
    document.getElementById("reponse_3").style.display = "none";
    question_est_ouverte_3 = false;
    //sinon
} else {
    //ovrir la question
    document.getElementById("btnplus_3").innerHTML = "-";
    document.getElementById("reponse_3").style.display = "block";
    question_est_ouverte_3 = true;
    //
 }
}


document.getElementById("btnplus_1").addEventListener("click",displayReponse_1);
document.getElementById("btnplus_2").addEventListener("click",displayReponse_2);
document.getElementById("btnplus_3").addEventListener("click",displayReponse_3);