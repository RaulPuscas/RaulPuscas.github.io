function AddExpandCollapse() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
                document.getElementById("arrow").setAttribute("src", "ExpandDown.png");
            } else {
                panel.style.display = "block";
                document.getElementById("arrow").setAttribute("src", "ContractUp.png");
            }
        });
    }
}

function ExpandCollapse2() {
        var panel = document.getElementsByName('panelTwo');
        if (panel[0].style.display === "block") {
            panel[0].style.display = "none";
            document.getElementById("arrow1").setAttribute("src", "ExpandDown.png");
        } else {
            panel[0].style.display = "block";
            document.getElementById("arrow1").setAttribute("src", "ContractUp.png");
        }
}


function calculeazaIMC() {
    var greutate = document.getElementById("greutate").value;
    if (isNaN(greutate) || greutate == "") {
        alert("Nu ati introdus o greutate corecta!")
        return;
    }
    var inaltime = document.getElementById("inaltime").value;
    if (isNaN(inaltime) || inaltime == "") {
        alert("Nu ati introdus o inaltime corecta!")
        return;
    }
    inaltime = inaltime / 100;
    var imc = greutate / (inaltime * inaltime);
    document.getElementsByClassName("value")[0].value = Math.floor(imc);
}

function calculeazaBFP() {
    var greutate = document.getElementById("greutate").value;
    if (isNaN(greutate) || greutate == "") {
        alert("Nu ati introdus o greutate corecta!")
        return;
    }
    var inaltime = document.getElementById("inaltime").value;
    if (isNaN(inaltime) || inaltime == "") {
        alert("Nu ati introdus o inaltime corecta!")
        return;
    }
    var varsta = document.getElementById("varsta").value;
    if (isNaN(varsta) || varsta == "") {
        alert("Nu ati introdus o varsta corecta!")
        return;
    }
    inaltime = inaltime / 100;
    var imc = Math.floor(greutate / (inaltime * inaltime));
    var bfp;
    if (document.getElementById("masculin").checked) {
        if (varsta > 14) {
            bfp = (1.2 * imc) + (0.23 * varsta) - 10.8 - 5.4;
        }
        else {
            bfp = (1.51 * imc) + (0.7 * varsta) - 3.6 + 1.4;
        }
    }
    else {
        if (varsta > 14) {
            bfp = (1.2 * imc) + (0.23 * varsta) - 5.4;
        }
        else {
            bfp = (1.51 * imc) + (0.7 * varsta) + 1.4;
        }
    }
    document.getElementsByClassName("value")[0].value = bfp + "%";
}

function calculeazaCN() {
    var greutate = document.getElementById("greutate").value;
    if (isNaN(greutate) || greutate == "") {
        alert("Nu ati introdus o greutate corecta!")
        return;
    }
    var inaltime = document.getElementById("inaltime").value;
    if (isNaN(inaltime) || inaltime == "") {
        alert("Nu ati introdus o inaltime corecta!")
        return;
    }
    var varsta = document.getElementById("varsta").value;
    if (isNaN(varsta) || varsta == "") {
        alert("Nu ati introdus o varsta corecta!")
        return;
    }
    var activityType = document.getElementById("activity");
    var userActivity = activityType.options[activityType.selectedIndex].value;
    var rmb;
    if (document.getElementById("masculin").checked) {
        rmb = 66 + (13.7 * greutate) + (5 * inaltime) - (6.8 * varsta);
    }
    else {
        rmb = 655 + (9.5 * greutate) + (1.8 * inaltime) - (4.7 * varsta);
    }

    switch (userActivity) {
        case "sedentar":
            rmb = 1.2 * rmb;
            break;
        case "usor":
            rmb = 1.375 * rmb;
            break;
        case "moderat":
            rmb = 1.55 * rmb;
            break;
        case "intens":
            rmb = 1.725 * rmb;
            break;
        case "foarteintens":
            rmb = 1.9 * rmb;
            break;
    }
    document.getElementsByClassName("value")[0].value = rmb;

}

function calculeazaNutritie() {
    var calorii = document.getElementById("necesarCaloric").value;
    if (isNaN(calorii) || calorii == "") {
        alert("Nu ati introdus corect necesarul caloric!")
        return;
    }
    var minCarboC = calorii * 0.45;
    var maxCarboC = calorii * 0.65;
    var minProtC = calorii * 0.1;
    var maxProtC = calorii * 0.35;
    var minFatsC = calorii * 0.2;
    var maxFatsC = calorii * 0.35;

    var minCarboG = Math.floor(minCarboC * 0.25);
    var maxCarboG = Math.floor(maxCarboC * 0.25);
    var minProtG = Math.floor(minProtC * 0.25);
    var maxProtG = Math.floor(maxProtC * 0.25);
    var minFatsG = Math.floor(minFatsC * 0.1125);
    var maxFatsG = Math.floor(maxFatsC * 0.1125);

    document.getElementById("carboG").innerHTML = minCarboG + "-" + maxCarboG;
    document.getElementById("protG").innerHTML = minProtG + "-" + maxProtG;
    document.getElementById("fatsG").innerHTML = minFatsG + "-" + maxFatsG;

    document.getElementById("carboC").innerHTML = minCarboC + "-" + maxCarboC;
    document.getElementById("protC").innerHTML = minProtC + "-" + maxProtC;
    document.getElementById("fatsC").innerHTML = minFatsC + "-" + maxFatsC;
}