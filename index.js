var amt_q400 = 1;
var amt_a320 = 0;
var amt_a350 = 0;
var amt_747 = 0;
var maintenanceM = 1.5;
var maintainCost = 0;
var income = 0;
var airlineName = "Airline Manager";
var timeMult = 1;
var upgradeMult = 1;
var airportCost = 5000000;
var airportIndex = 0;
var aircraftAmt = 1;
var currentEvent = 0


// Upgrades:
var pre_eco = false;
var businessC = false;
var firstC = false;
var jetBridge = false;
var booking = false;
var isAlliance = false;
var isWeekend = false


const q400_cost = 27000000;
const a320_cost = 100000000;
const a350_cost = 366000000;
const b747_cost = 418000000;

var money = 2500000000;

window.onload = function() {
    setTimeout(startLimitedEvent, 7000)
}

function buyPrompt(code, amt = 0) {
    code = prompt("ENTER AIRCRAFT CODE:");
    code = code.toUpperCase()
    switch(code) {
        case "Q400":
            amt = prompt("How many?");
            if (money >= q400_cost*amt) {
            alert(amt + " Q400 bought!");
            amt = Number(amt)
            amt_q400 += amt
            money -= q400_cost*amt
            update()
            break;}
            else {
                alert("Err. Low funds")
                break;
            }
        case "A320":
            amt = prompt("How many?");
            if (money >= a320_cost*amt) {
            alert(amt + " A320 bought");
            amt = Number(amt)
            amt_a320 += amt
            money -= a320_cost*amt
            update()
            break;}
            else {
                alert("Err. Low funds")
                break;
            }
        case "A350":
            amt = prompt("How many?");
            if (money >= a350_cost*amt) {
            alert(amt + " A350 bought!");
            amt = Number(amt)
            amt_a350 += amt
            money -= a350_cost*amt
            update()
            break;}
            else {
                alert("Err. Low funds")
                break;
            }
        case "B747":
            amt = prompt("How many?");
            if (money >= b747_cost*amt) {
            alert(amt + " 747 bought!");
            amt = Number(amt)
            amt_747 += amt
            money -= b747_cost*amt
            update()
            break;}
            else {
                alert("Err. Low funds")
                break;
            }
        default:
            alert("Err. Aircraft code not found")
    }
}

setInterval(flyQ400, 2500*timeMult);
setInterval(flyA320, 7500*timeMult);
setInterval(fly747, 15000*timeMult);
setInterval(flyA350, 25000*timeMult);
setInterval(maintenance, 30000*timeMult)
setInterval(randEvent, 60000*timeMult)
setInterval(allianceEvent, 30000*timeMult)

function flyQ400() {
    money += amt_q400 * 500000 * maintenanceM * upgradeMult
    update()
}

function flyA320() {
    money += amt_a320 * 2000000  * maintenanceM * upgradeMult
    update()
}

function fly747() {
    money += amt_747 * 50000000  * maintenanceM * upgradeMult
    update()
}
function flyA350() {
    money += amt_a350 * 100000000  * maintenanceM * upgradeMult
    update()
}

function maintenance() {
    maintenanceM -= 0.05
    maintenanceM = Math.round(maintenanceM * 100) / 100
    update()
}


function update() {
    aircraftAmt = amt_q400 + amt_a320 + amt_a350 + amt_747
    maintainCost = (amt_q400 * 10000) + (amt_a320 * 20000) + (amt_a350 * 50000) + (amt_747 * 50000000 * maintenanceM * 4)
    income = (amt_q400 * 500000 * maintenanceM * 24 * upgradeMult) + (amt_a320 * 200000 * maintenanceM * 8 * upgradeMult) + (amt_a350 * 1000000 * 2  * upgradeMult) + (amt_747 * 50000000 * 2.4  * upgradeMult)
    upgradeMult = Math.round(upgradeMult * 100) / 100
    document.getElementById("money").innerHTML = "$" + money.toLocaleString() + money.toString().slice(money.toString().indexOf('.'))
    document.getElementById("q400").innerHTML = "Q400: " +  amt_q400
    document.getElementById("a320").innerHTML = "A320:" + amt_a320
    document.getElementById("a350").innerHTML = "A350: "+ amt_a350
    document.getElementById("747").innerHTML = "747: " + amt_747
    document.getElementById("maintainCost").innerHTML = "$" + maintainCost.toLocaleString() + maintainCost.toString().slice(maintainCost.toString().indexOf('.'))
    document.getElementById("multDisplay").innerHTML = maintenanceM + "x"
    document.getElementById("income").innerHTML = "$" + (income.toLocaleString() + income.toString().slice(income.toString().indexOf('.')) + "/min")
    document.getElementById("mult").innerHTML = upgradeMult + "x"
    document.getElementById("airportcost").innerHTML = "$" + airportCost.toLocaleString() + airportCost.toString().slice(airportCost.toString().indexOf('.'))
    document.getElementById("time").innerHTML = timeMult + "x"
}

function maintain() {
    maintenanceM = 1.5
    money -= maintainCost
    update()
}

function changeName(){
    airlineName = prompt("Airline Name?")
    document.getElementById("name").innerHTML = airlineName
}

function jetbridge() {
    if (money >= 25000000) {
        money -= 25000000
        jetBridge = true
        timeMult -= 0.2
        alert("Jetbridge Bought!")
        document.getElementById("jetbridge").remove()
        update()
    }
    else {
        alert("Err. Low funds");
    }
}

function premium() {
    if (money >= 10000000) {
        money -= 10000000
        pre_eco = true
        upgradeMult += 0.2
        alert("Premium Economy Bought!")
        document.getElementById("premium").remove()
        update()
    }
    else {
        alert("Err. Low funds");
    }
}

function business() {
    if (money >= 50000000) {
        money -= 50000000
        businessC = true
        upgradeMult += 0.4
        alert("Business Class Bought!")
        document.getElementById("business").remove()
        update()
    }
    else {
        alert("Err. Low funds");
    }
}

function first() {
    if (money >= 80000000) {
        money -= 80000000
        firstC = true
        upgradeMult += 0.6
        alert("First Class Bought!")
        document.getElementById("first").remove()
        update()
    }
    else {
        alert("Err. Low funds");
    }
}

function airport() {
    if (money >= airportCost) {
        money -= airportCost
        airportIndex += 1;
        upgradeMult += 0.1
        airportCost = airportCost*2
        alert("New airport unlocked!")
        update()
    }
}

function bookingSys() {
    if (money >= 50000000) {
        alert("Better booking system bought!")
        money -= 50000000
        timeMult -= 0.1
        document.getElementById("booking").remove()
        update()
    }
}

function alliance() {
    if (money >= 250000000) {
        alert("Alliance joined!");
        timeMult -= 0.1;
        upgradeMult += 0.2;
        isAlliance = true
        document.getElementById("alliance").remove()
    }
}

function randEvent(event) {
event = Math.floor(Math.random() * 10);
switch (event) {
    case 1:
        alert("Event: Charter flight request");
        alert("+$" + aircraftAmt * 2000000)
        money += aircraftAmt * 2000000
        update()
        break;
    case 2:
        alert("Event: An aircraft had a tailstrike!")
        alert("-$4,000,000")
        money -= 4000000
        update()
        break;
    case 3:
        alert("Event: Another aircraft wing clipped your aircraft's fuselage")
        alert("-$8,000,000")
        money -= 8000000
        update()
        break;
    case 4:
        alert("Event: Mass delays, compensation required")
        alert("-$" + aircraftAmt * 2000000)
        money -= aircraftAmt * 2000000
        update()
        break;
    case 5:
        alert("Event: High demand!")
        alert("+$" + (8000000 * upgradeMult * aircraftAmt))
        money += 8000000 * upgradeMult * aircraftAmt
        update()
        break;
    default:
        break;
}
}

function allianceEvent(event) {
if (isAlliance == true) {
    event = Math.floor(Math.random() * 3);
    switch (event) {
        case 1:
            alert("Alliance Fees! -$" + aircraftAmt * 2000000);
            money -= aircraftAmt * 1000000;
            update();
            break;
        case 2:
            alert("Alliance bookings! +$" + aircraftAmt * 2000000);
            update();
            break;
    }
}
}

function startLimitedEvent() {
            alert("Long weekend! 1.5x income for 1 minute");
            window.setTimeout(endLimitedEvent, 60000);
            upgradeMult += 0.5;
            update()
}

function endLimitedEvent() {
    upgradeMult -= 0.5;
    alert("Event ended!")
    window.setTimeout(startLimitedEvent, 120000)
}
