var money = 3000000;
let s340 = 0;
let d84 = 0;
let b737 = 0;
let b787 = 0;
// Counter
let s340C = 0;
let d84C = 0;
let b737C = 0;
let b787C = 0;

document.getElementById("money").innerHTML = "Money: $" + money;

function buyS340() {
    if (money >= 2000000) {
        d84C = 0;
        b737C = 0;
        b787C = 0;
        money = money - 2000000;
        s340 = s340 + 1;
        document.getElementById("money").innerHTML = "Money: $" + money;
        document.getElementById("s340").innerHTML = "Saab 340 Aircraft: " + s340;
        s340C = s340C + 1
        document.getElementById("message").innerHTML = "Bought " + s340C + " Saab 340";
    }
    else {
        document.getElementById("message").innerHTML = "Not enough money";
        s340C = 0;
        d84C = 0;
        b737C = 0;
        b787C = 0;
    }
}
function buyD84() {
    if (money >= 25000000) {
        s340C = 0;
        b737C = 0;
        b787C = 0;
        money = money - 25000000;
        d84 = d84 + 1;
        document.getElementById("money").innerHTML = "Money: $" + money;
        document.getElementById("d84").innerHTML = "Dash-8-400 Aircraft: " + d84;
        d84C = d84C + 1
        document.getElementById("message").innerHTML = "Bought " + d84C + " Dash-8-400";
        
    }
    else {
        document.getElementById("message").innerHTML = "Not enough money";
        s340C = 0;
        d84C = 0;
        b737C = 0;
        b787C = 0;
    }
}
function buy737() {
    if (money >= 150000000) {
        s340C = 0;
        d84C = 0;
        b787C = 0;
        money = money - 150000000;
        b737 = b737 + 1;
        b737C = b737C + 1;
        document.getElementById("money").innerHTML = "Money: $" + money;
        document.getElementById("737").innerHTML = "737 Aircraft: " + b737;
        document.getElementById("message").innerHTML = "Bought " + b737C +  " 737";
    }
    else {
        document.getElementById("message").innerHTML = "Not enough money";
        s340C = 0;
        d84C = 0;
        b737C = 0;
        b787C = 0;
    }
}
function buy787() {
    if (money >= 300000000) {
        s340C = 0;
        d84C = 0;
        b737C = 0;
        money = money - 300000000;
        b787 = b787 + 1;
        b787C = b787C + 1
        document.getElementById("money").innerHTML = "Money: $" + money;
        document.getElementById("787").innerHTML = "787 Aircraft: " + b787;
        document.getElementById("message").innerHTML = "Bought " + b787C + " 787";
    }
    else {
        document.getElementById("message").innerHTML = "Not enough money";
        s340C = 0;
        d84C = 0;
        b737C = 0;
        b787C = 0;
    }
}

function freemoney() {
money = money + 300000000;
document.getElementById("money").innerHTML = "Money: $" + money;
}