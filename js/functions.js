let vysledek = document.getElementById("vysledek");
let tlacitko = document.getElementById("tlacitko");

function vypocetVykonu() {
    let prace = document.getElementById("prace").value;
    let cas = document.getElementById("cas").value;
    if (isNaN(prace)) {
        alert('Nebyla zadána číselná hodnota!');
        return 0;
    }
    if (isNaN(cas)) {
        alert('Nebyla zadána číselná hodnota!');
        return 0;
    }
    if (prace <= 0|| cas <= 0) {
        alert("Byla zadána nulová nebo záporná hodnota!!");
        return 0;
    }
    let vykon = parseFloat(prace) / parseFloat(cas);
    return Math.round(vykon * 100) / 100;
}

tlacitko.addEventListener('click', function () {
    console.log(vypocetVykonu());
    vysledek.innerText = vypocetVykonu();
    vysledek.style.color = 'red';
    vysledek.style.fontWeight = 'bold';
})
