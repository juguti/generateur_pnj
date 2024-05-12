var image_tete = document.getElementById("tete");
var n_tetes = 20
var index_tete = 1

var code_p = document.getElementById("code_pnj");
function code(){
    code_p.innerText = "Code: " + String(index_tete) +","+ String(index_yeux)+","+ String(index_cheveux)+","+ String(index_habits)+","+ String(index_pantalon)+","+ String(index_pilosite)+","+ String(index_accessoire)+","+ String(index_chaussures)
}

function change_tete(i) {
    index_tete = Math.abs((index_tete + i) % n_tetes);
    if (index_tete == 0){index_tete = n_tetes}  
    image_tete.src =  "Generateur/Générateur/peau_Front/Tête"+index_tete+".png";
    code()
}

var image_yeux = document.getElementById("yeux");
var n_yeux = 16
var index_yeux = 1

function change_yeux(i) {
    index_yeux = Math.abs((index_yeux + i) % n_yeux); 
    if (index_yeux == 0){index_yeux = n_yeux} 
    image_yeux.src =  "Generateur/Générateur/yeux_Front/yeux"+index_yeux+".png";
    code()
}

var image_cheveux = document.getElementById("cheveux");
var n_cheveux = 60
var index_cheveux = 1

function change_cheveux(i) {
    index_cheveux = Math.abs((index_cheveux + i) % n_cheveux);
    if (index_cheveux == 0){index_cheveux = n_cheveux}  
    image_cheveux.src =  "Generateur/Générateur/cheveux_Front/cheveux"+index_cheveux+".png";
    code()
}

var image_habits = document.getElementById("habits");
var n_habits = 30
var index_habits = 1

function change_habits(i) {
    index_habits = Math.abs((index_habits + i) % n_habits);
    if (index_habits == 0){index_habits = n_habits} 
    image_habits.src =  "Generateur/Générateur/habits_Front/habits"+index_habits+".png";
    code()
}

var image_pantalon = document.getElementById("pantalon");
var n_pantalon = 12
var index_pantalon = 1

function change_pantalon(i) {
    index_pantalon = Math.abs((index_pantalon + i) % n_pantalon);
    if (index_pantalon == 0){index_pantalon = n_pantalon}  
    image_pantalon.src =  "Generateur/Générateur/pantalon_Front/pantalon"+index_pantalon+".png";
    code()
}

var image_pilosite = document.getElementById("pilosite");
var n_pilosite = 26
var index_pilosite = 1

function change_pilosite(i) {
    index_pilosite = Math.abs((index_pilosite + i) % n_pilosite);
    if (index_pilosite == 0){index_pilosite = n_pilosite}  
    image_pilosite.src =  "Generateur/Générateur/pilosité_Front/pilosité"+index_pilosite+".png";
    code()
}

var image_accessoire = document.getElementById("accessoire");
var n_accessoire = 15
var index_accessoire = 15

function change_accessoire(i) {
    index_accessoire = Math.abs((index_accessoire + i) % n_accessoire);
    if (index_accessoire == 0){index_accessoire = n_accessoire}  
    image_accessoire.src =  "Generateur/Générateur/accessoire_Front/accessoire"+index_accessoire+".png";
    code()
}

var image_chaussures = document.getElementById("chaussures");
var n_chaussures = 15
var index_chaussures = 15

function change_chaussures(i) {
    index_chaussures = Math.abs((index_chaussures + i) % n_chaussures);
    if (index_chaussures == 0){index_chaussures = n_chaussures}  
    image_chaussures.src =  "Generateur/Générateur/chaussures_Front/chaussures"+index_chaussures+".png";
    code()
}

function randint(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

function alea() {
    image_tete.src =  "Generateur/Générateur/peau_Front/Tête"+randint(1,n_tetes)+".png";
    image_yeux.src =  "Generateur/Générateur/yeux_Front/yeux"+randint(1,n_yeux)+".png";
    image_cheveux.src =  "Generateur/Générateur/cheveux_Front/cheveux"+randint(1,n_cheveux)+".png";
    image_habits.src =  "Generateur/Générateur/habits_Front/habits"+randint(1,n_habits)+".png";
    image_pantalon.src =  "Generateur/Générateur/pantalon_Front/pantalon"+randint(1,n_pantalon)+".png";
    image_pilosite.src =  "Generateur/Générateur/pilosité_Front/pilosité"+randint(1,n_pilosite)+".png";
    image_accessoire.src =  "Generateur/Générateur/accessoire_Front/accessoire"+randint(1,n_accessoire)+".png";
    image_chaussures.src =  "Generateur/Générateur/chaussures_Front/chaussures"+randint(1,n_chaussures)+".png";
    code()
}
alea()






code()