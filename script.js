var popularity = 1
var funds = 0
var money = 0
var phase = 0
var year = 1
document.getElementById("Popularity").style.display = "none";
document.getElementById("Projects").style.display = "none";
document.getElementById("RD").style.display = "none";
function NextYear() {
    if (phase != 0) {
        NextYear1();
    };
    if (phase === 0) {
        NextYear0();
    };
};
function NextYear0() {
    money = money + (1000000*popularity)
    funds = money / 1000000
    year = year + 1
    funds = "Funds: $" + new Intl.NumberFormat('en-US', { maximumSignificantDigits: 6 }).format(funds) + "M";
    document.getElementById("Funds").innerHTML = funds;
    document.getElementById("Money").innerHTML = "Total Funds: " + new Intl.NumberFormat('en-US').format(money);
    document.getElementById("Year").innerHTML = "Year " + year;
    if (money >= 10000000) {
        Phase1();
    }
};
function NextYear1() {
    money = money + (1000000*popularity)
    funds = money / 1000000
    year = year + 1
    funds = "Funds: $" + new Intl.NumberFormat('en-US', { maximumSignificantDigits: 6 }).format(funds) + "M";
    document.getElementById("Funds").innerHTML = funds;
    document.getElementById("Money").innerHTML = "Total Funds: " + new Intl.NumberFormat('en-US').format(money);
    document.getElementById("Year").innerHTML = "Year " + year;
};
function Phase1() {
    document.getElementById("Projects").style.display = "block";
    phase = 1;
};
function Phase2() {
    document.getElementById("RD").style.display = "block";
    phase = 2;
}
function P1() {
    if (money >= 25000000) {
        document.getElementById("P1").style.display = "none";
        Phase2();
    }
}