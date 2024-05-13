var image_tete = document.getElementById("tete");
var n_tetes = 20
var index_tete = 1

var code_p = document.getElementById("code_pnj");
function code(){
    var code_acc = String(index_accessoire)
    if (image_accessoire.style.display == "none"){code_acc="none"}
    var code_pilo = String(index_pilosite)
    if (image_pilosite.style.display == "none"){code_pilo="none"}
    var code_chev = String(index_cheveux)
    if (image_cheveux.style.display == "none"){code_chev="none"}
    code_p.innerText = "Code: " + String(index_tete) +","+ String(index_yeux)+","+ code_chev+","+ String(index_habits)+","+ String(index_pantalon)+","+ code_pilo+","+ code_acc+","+ String(index_chaussures)
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
    index_tete = randint(1,n_tetes)
    index_yeux = randint(1,n_yeux)
    index_cheveux = randint(1,n_cheveux)
    index_habits =randint(1,n_habits)
    index_pantalon = randint(1,n_pantalon)
    index_pilosite = randint(1,n_pilosite)
    index_accessoire =randint(1,n_accessoire)
    index_chaussures =randint(1,n_chaussures)
    image_tete.src =  "Generateur/Générateur/peau_Front/Tête"+index_tete+".png";
    image_yeux.src =  "Generateur/Générateur/yeux_Front/yeux"+index_yeux+".png";
    image_cheveux.src =  "Generateur/Générateur/cheveux_Front/cheveux"+index_cheveux+".png";
    image_habits.src =  "Generateur/Générateur/habits_Front/habits"+index_habits+".png";
    image_pantalon.src =  "Generateur/Générateur/pantalon_Front/pantalon"+index_pantalon+".png";
    image_pilosite.src =  "Generateur/Générateur/pilosité_Front/pilosité"+index_pilosite+".png";
    image_accessoire.src =  "Generateur/Générateur/accessoire_Front/accessoire"+index_accessoire+".png";
    image_chaussures.src =  "Generateur/Générateur/chaussures_Front/chaussures"+index_chaussures+".png";
    code()
}
alea()

function plus_de_cheveux() {
    if (image_cheveux.style.display != "none" || image_cheveux.style.display == "block"){
        image_cheveux.style.display = "none"}
    else{image_cheveux.style.display = "block"}
    code()
}
function plus_de_accessoire() {
    if (image_accessoire.style.display != "none" || image_accessoire.style.display == "block"){
        image_accessoire.style.display = "none"}
    else{image_accessoire.style.display = "block"}
    code()
}
function plus_de_pilosite() {
    if (image_pilosite.style.display != "none" || image_pilosite.style.display == "block"){
        image_pilosite.style.display = "none"}
    else{image_pilosite.style.display = "block"}
    code()
}
    




code()