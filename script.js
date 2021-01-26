var popularity = 1;
var funds = 0;
var money = 0;
var phase = 0;
var year = 1;
var researchers = 1;
var rp = 0;
var P2_Cost = 10000000;
var R2_Cost = 500;
var R_500 = false;
var growth = 1.001;
var parts = 0;
document.getElementById("Popularity").style.display = "none";
document.getElementById("Projects").style.display = "none";
document.getElementById("RD").style.display = "none";
document.getElementById("SC").style.display = "none";
document.getElementById("VAB").style.display = "none";
document.getElementById("P2").style.display = "none";
document.getElementById("P3").style.display = "none";
document.getElementById("P4").style.display = "none";
document.getElementById("R2").style.display = "none";
document.getElementById("R3").style.display = "none";
document.getElementById("R4").style.display = "none";
document.getElementById("Growth").style.display = "none";
window.onload = function() {
    window.setInterval(CheckProjects, 1);
    window.setInterval(CheckResearch, 1);
}
function NextYear() {
    if (phase === 6) {
        NextYear3();
    }
    if (phase === 5) {
        NextYear3();
    }
    if (phase === 4) {
        NextYear3();
    }
    if (phase === 3) {
        NextYear3();
    }
    if (phase === 2) {
        NextYear2();
    }
    if (phase === 1) {
        NextYear1();
    }
    if (phase === 0) {
        NextYear0();
    }
}
function NextYear0() {
    money = money + (1000000*popularity);
    funds = money / 1000000;
    year = year + 1;
    UpdateMoney();
    if (money >= 10000000) {
        Phase1();
    }
}
function NextYear1() {
    money = money + (1000000*popularity);
    funds = money / 1000000;
    year = year + 1;
    UpdateMoney();
}
function NextYear2() {
    money = money + (1000000*popularity);
    funds = money / 1000000;
    rp = rp + researchers;
    year = year + 1;
    UpdateMoney();
    UpdateResearch();
    if (R_500 === false) {
        if (rp >= 500) {
            R_500 = true;

        }
    }
}
function NextYear3() {
    money = money + (Math.round(1000000*popularity));
    funds = money / 1000000;
    rp = rp + researchers;
    year = year + 1;
    popularity = popularity * growth;
    if (popularity > phase * 5) {
        popularity = phase * 5;
    }
    UpdateMoney();
    UpdateResearch();
    UpdatePopularity();
}
function Phase1() {
    document.getElementById("Projects").style.display = "block";
    phase = 1;
}
function Phase2() {
    document.getElementById("RD").style.display = "block";
    document.getElementById("P2").style.display = "inline";
    phase = 2;
}
function Phase3() {
    document.getElementById("Popularity").style.display = "block";
    document.getElementById("Growth").style.display = "block";
    document.getElementById("R2").style.display = "inline";
    document.getElementById("R3").style.display = "inline";
    phase = 3;
}
function Phase4() {
    document.getElementById("P3").style.display = "inline";
    phase = 4;
}
function Phase5() {
    document.getElementById("SC").style.display = "block";
    document.getElementById("R4").style.display = "inline";
    document.getElementById("P4").style.display = "inline";
    phase = 5;
}
function Phase6() {
    document.getElementById("VAB").style.display = "block";
    phase = 6;
}
function P1() {
    if (money >= 25000000) {
        document.getElementById("P1").style.display = "none";
        money = money - 25000000;
        funds = money / 1000000;
        UpdateMoney();
        Phase2();
    }
}
function P2() {
    if (money >= P2_Cost) {
        researchers = researchers + 1;
        money = Math.round(money - P2_Cost);
        funds = money / 1000000;
        P2_Cost = P2_Cost * 1.2;
        UpdateMoney();
        document.getElementById("Researchers").innerHTML = "Researchers: " + researchers;
        document.getElementById("P2_Cost").innerHTML = "$" + new Intl.NumberFormat('en-US', { maximumSignificantDigits: 4 }).format(P2_Cost/1000000) + "M";
    }
}
function P3() {
    if (money >= 500000000) {
        money = money - 500000000;
        funds = money / 1000000;
        UpdateMoney();
        document.getElementById("P3").style.display = "none";
        Phase5();
    }
}
function P4() {
    if (money >= 2000000000) {
        money = money - 2000000000;
        funds = money / 1000000;
        UpdateMoney();
        document.getElementById("P4").style.display = "none";
        Phase6();
    }
}
function R1() {
    if (rp >= 1000) {
        document.getElementById("R1").style.display = "none";
        rp = rp - 1000;
        UpdateResearch();
        Phase3();
    }
}
function R2() {
    if (rp >= R2_Cost) {
        growth = growth + 0.001;
        rp = rp - R2_Cost;
        R2_Cost = Math.round(R2_Cost * 2);
        UpdateResearch();
        document.getElementById("Growth").innerHTML = "Growth Rate: " + new Intl.NumberFormat('en-US', { maximumSignificantDigits: 4 }).format(growth * 100) + "%";
        document.getElementById("R2_Cost").innerHTML = new Intl.NumberFormat('en-US', { maximumSignificantDigits: 4 }).format(R2_Cost) + "RP";
    }
}
function R3() {
    if (rp >= 2500) {
        rp = rp - 2500;
        document.getElementById("R3").style.display = "none";
        UpdateResearch();
        Phase4();
    }
}
function MP() {
    if (money >= 200000000) {
        money = money - 200000000;
        funds = money/1000000
        UpdateMoney();
        parts = parts + 1;
        UpdateParts();
    }
}
function UpdateMoney() {
    funds = "Funds: $" + new Intl.NumberFormat('en-US', { maximumSignificantDigits: 6 }).format(funds) + "M";
    document.getElementById("Funds").innerHTML = funds;
    document.getElementById("Money").innerHTML = "Total Funds: " + new Intl.NumberFormat('en-US').format(money);
    document.getElementById("Year").innerHTML = "Month " + year;
}
function UpdateResearch() {
    document.getElementById("RP").innerHTML = "RP: " + new Intl.NumberFormat('en-US').format(rp);
}
function UpdatePopularity() {
    document.getElementById("Popularity").innerHTML = "Popularity: " + new Intl.NumberFormat('en-US', { maximumSignificantDigits: 4}).format((popularity * 100) / 100);
}
function UpdateParts() {
    document.getElementById("Parts").innerHTML = "Rocket Parts: " + Math.round(parts);
}
function CheckProjects() {
    if (money < 25000000) {
        document.getElementById("P1").disabled = true;
    } else {
        document.getElementById("P1").disabled = false;
    }
    if (money < P2_Cost) {
        document.getElementById("P2").disabled = true;
    } else {
        document.getElementById("P2").disabled = false;
    }
    if (money < 500000000) {
        document.getElementById("P3").disabled = true;
    } else {
        document.getElementById("P3").disabled = false;
    }
    if (money < 2000000000) {
        document.getElementById("P4").disabled = true;
    } else {
        document.getElementById("P4").disabled = false;
    }
    if (money < 200000000) {
        document.getElementById("MP").disabled = true;
    } else {
        document.getElementById("MP").disabled = false;
    }
}
function CheckResearch() {
    if (rp < 1000) {
        document.getElementById("R1").disabled = true;
    } else {
        document.getElementById("R1").disabled = false;
    }
    if (rp < R2_Cost) {
        document.getElementById("R2").disabled = true;
    } else {
        document.getElementById("R2").disabled = false;
    }
    if (rp < 2500) {
        document.getElementById("R3").disabled = true;
    } else {
        document.getElementById("R3").disabled = false;
    }
    if (rp < 10000) {
        document.getElementById("R4").disabled = true;
    } else {
        document.getElementById("R4").disabled = false;
    }
}