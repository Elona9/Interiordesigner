document.addEventListener("DOMContentLoaded"),
function(ngjarja) {
const BtnSubmit = document.getElementById('submit-btn');
}

const validate = (ngjarja) => {
ngjarja.preventDefault();}

const perdoruesi = document.getElementById('userid');


const fjalkalimi = document.getElementById('pass');


const emrin = document.getElementById('emri');


const emailin = document.getElementById('adresaEmailit');


    if (perdoruesi.value === "") {
alert("Ju lutem shtoni perdoruesin.");
perdoruesi.focus();
return false;
}
    if (fjalkalimi.value === "") {
alert("Ju lutem shtoni Fjalkalimin.");
fjalkalimi.focus();
return false;
}
    if (emrin.value === "") {
alert("Ju lutem shtoni emrin e Plote.");
emrin.focus();
return false;
}
    if (emailin.value === "") {
alert("Ju lutem shtoni email'in.");
emailin.focus();
return false;
    }

