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
var growth = 1.01;
document.getElementById("Popularity").style.display = "none";
document.getElementById("Projects").style.display = "none";
document.getElementById("RD").style.display = "none";
document.getElementById("P2").style.display = "none";
document.getElementById("R2").style.display = "none";
document.getElementById("Growth").style.display = "none";
window.onload = function() {
    window.setInterval(CheckProjects, 1);
    window.setInterval(CheckResearch, 1);
  }
function NextYear() {
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
    phase = 3;
}
function P1() {
    if (money >= 25000000) {
        document.getElementById("P1").style.display = "none";
        money = money - 25000000
        funds = money / 1000000;
        UpdateMoney();
        Phase2();
    }
}
function P2() {
    if (money >= P2_Cost) {
        researchers = researchers + 1
        money = Math.round(money - P2_Cost)
        funds = money / 1000000;
        P2_Cost = P2_Cost * 1.2
        UpdateMoney();
        document.getElementById("Researchers").innerHTML = "Researchers: " + researchers;
        document.getElementById("P2_Cost").innerHTML = "$" + new Intl.NumberFormat('en-US', { maximumSignificantDigits: 4 }).format(P2_Cost/1000000) + "M";
    }
}
function R1() {
    if (rp >= 1000) {
        document.getElementById("R1").style.display = "none";
        rp = rp - 1000
        UpdateResearch();
        Phase3();
    }
}
function R2() {
    if (rp >= R2_Cost) {
        growth = growth + 0.01
        rp = rp - R2_Cost
        R2_Cost = Math.round(R2_Cost * 1.5)
        UpdateResearch();
        document.getElementById("Growth").innerHTML = "Growth Rate: " + Math.round(growth * 100) + "%";
        document.getElementById("R2_Cost").innerHTML = new Intl.NumberFormat('en-US', { maximumSignificantDigits: 4 }).format(R2_Cost) + "RP";
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
    document.getElementById("Popularity").innerHTML = "Popularity: " + new Intl.NumberFormat('en-US').format(Math.round(popularity * 100) / 100);
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
}