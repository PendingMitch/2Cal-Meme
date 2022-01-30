let data = [
    {"name": "scenes", "default": 0, "onclick": 1},
    {"name": "Peaceful Scenes", "default": 0, "onclick": 1}
]
for(let i = 0; i < data.length; i++) {
    new Item(data[i]["name"], data[i]["default"], data[i]["onclick"])
}

function resetData() {
    let items_keys = Object.keys(items)
    for (let i = 0; i < items_keys.length; i++) {
        let index = items_keys[i]
        items[index].reset()
    }

    let upgrades_keys = Object.keys(upgrades)
    for (let i = 0; i < upgrades_keys.length; i++) {
        let index = upgrades_keys[i]
        upgrades[index].reset()
    }

    dataLog('Reset Data')
}




let upgrades_info = [
    {name: "Unnecessary 10-80", price: [{"type":"scenes", price: 10}], description: "Every time you click, you'll get another scene.", "function": "unnecessary1080", displayAt: 0},
    {name: "Priority Status", price: [{"type":"scenes", price: 200}, {"type": "Peaceful Scenes", price: 25}], description: "Every time you click, you'll get another Peaceful Scenes.", "function": "priorityStatus", displayAt: [{"type":"scenes", price: 50}, {"type": "Peaceful Scenes", price: 5}]},
    {name: "Unnecessary Shootout", price: [{"type":"scenes", price: 1000}, {"type": "Peaceful Scenes", price: 50}], description: "Every time you click, you'll get twice as many scenes.", "function": "unnecessaryShootout", displayAt: [{"type":"scenes", price: 200}, {"type": "Peaceful Scenes", price: 50}]},
    {name: "Priority Clear", price: [{"type":"scenes", price: 750}, {"type": "Peaceful Scenes", price: 250}], description: "Get another scene every 10 seconds.", "function": "autoclickerBought", displayAt: [{"type":"scenes", price: 500}, {"type": "Peaceful Scenes", price: 100}]},
    {name: "Josh is in Server", price: [{type:"scenes", price: 5000}, {type: "Peaceful Scenes", price: 2000}], description: "Every 10 seconds get another scene and a Peaceful Scenes.", "function": "autoclickerBought", displayAt: [{type: "scenes", amount: 750}, {type: "Peaceful Scenes", price: 250}]}
]



for(let i = 0; i < upgrades_info.length; i++) {
    new Upgrade(upgrades_info[i]["name"], upgrades_info[i]["price"], upgrades_info[i]["description"], upgrades_info[i]["function"], upgrades_info[i]["displayAt"])
}

let autoclickers_info = [
    {name: "Priority Clear", "function": priorityClear, timeout: 10},
    {name: "Josh is in Server", "function": joshInServer, timeout: 10}
] 

for(let i = 0; i < autoclickers_info.length; i++) {
    new autoClicker(autoclickers_info[i]["name"], autoclickers_info[i]["function"], autoclickers_info[i]["timeout"])
}

dataLog('Setup complete')


