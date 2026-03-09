
// declaration des variables
const form = document.querySelector('#age-form');
const year = document.getElementById('year');
const month = document.getElementById('month');
const day = document.getElementById('day');
const calcul_years = document.getElementById('years');


year.addEventListener("click", function() {
    input_click(year);
})

month.addEventListener("click", function() {
    input_click(month);
})

day.addEventListener("click", function() {
    input_click(day);
})

function input_click(input1) {
    input1.placeholder = "";
    const label = input1.parentElement.querySelector('label');
    label.style.color = "green";
}

form.addEventListener("submit", function(event) {
    // empeche le rechargement de la page
    event.preventDefault();
    const valeur_year = year.value;
    const anne_actuelle = (new Date().getFullYear());
    const calcul_age = (anne_actuelle - valeur_year);

    if(calcul_age >= 0) {

        calcul_years.textContent = calcul_age;
    }
    else {
        year.style.border = "1px solid red";
        const label2 = year.parentElement.querySelector('label');
        label2.style.color = "red";
        
    }
})