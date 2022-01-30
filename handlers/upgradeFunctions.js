function displayBroke() {
    let brokeInfo = document.getElementById('brokeInfo')
    upgradeLog('You don\'t have enough items')
    brokeInfo.style.display = "flex"

    setTimeout(() => brokeInfo.style.display = "none", 1000)
}

function increaseAmountBought(name) {
    upgrades[name].bought()
    upgradeLog("Bought a new " + name)
}

function queryAfford(price) {
    for (let i = 0; i < price.length; i++) {
        if(!(items[price[i].type].value() >= price[i].price)) {
            return false
        }
    }
    return true
}

function spendCost(cost) {
    for (let i = 0; i < cost.length; i++) {
        let current_item = items[cost.type]

        items[cost[i].type].setValue(items[cost[i].type].value() - cost[i].price)
    }
} 

function autoclickerBought(name, price) {
    if (queryAfford(price)) {
        spendCost(price)
        increaseAmountBought(name)
    } else {
        displayBroke()
    }
}

function upgradeBuying(name, price) {
    if (queryAfford(price)) {
        spendCost(price)
        increaseAmountBought(name)
        return true
    }
    displayBroke()
    return false
}

///////////////////////////////////////////////////////////////////////////


function unnecessary1080(name, price) {
    if (upgradeBuying(name, price)) {
        items["scenes"].setClickAmount(items["scenes"].getClickAmount() + 1)
    }
}

function priorityStatus(name, price) {
    if (upgradeBuying(name, price)) {
        items["Peaceful Scenes"].setClickAmount(items["Peaceful Scenes"].getClickAmount() + 1)
    }
}

function unnecessaryShootout(name, price) {
    if (upgradeBuying(name, price)) {
        items["scenes"].setClickAmount(items["scenes"].getClickAmount() * 2)
    }
}