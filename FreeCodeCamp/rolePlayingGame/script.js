import { getElement } from './functions.js'

const xpText  = getElement("#xpText");
const healthText = getElement("#healthText");
const goldText = getElement("#goldText");

const btn1 = getElement("#btn1");
const btn2 = getElement("#btn2");
const btn3 = getElement("#btn3");

const monsterBar = getElement("#monsterBar");
const monsterNameText = getElement("#monsterNameText");
const monsterHealthText = getElement("#monsterHealthText");

const messageText = getElement("#message");

let xp, health, gold, inventory = [], currentWeapon;
let healthCost = 10, weaponCost = 30;
let monsterHealth, monsterName, gameOn = false;

//

const weapons = [
    {
        name: "stick",
        power: 5
    },
    {
        name: "dagger",
        power: 30
    },
    {
        name: "claw hammer",
        power: 50
    },
    {
        name: "sword",
        power: 100
    }
]

const locations = {
    town: {
        name: "Town Square",
        btnTexts: ["Go to store", "Go to cave", "Fight dragon"],
        btnFunctions: [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"."
    },
    store: {
        name: "Store",
        btnTexts: ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        btnFunctions: [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
    },
    cave: {
        name: "Cave",
        btnTexts: ["Fight slime", "Fight fanged beast", "Go to town square"],
        btnFunctions: [fightSlime, fightBeast, goTown],
        text: "You enter the cave. You see some monsters."
    },
    monster: {
        name: "monster",
        btnTexts: ["Attack", "Dodge", "Run"],
        btnFunctions: [attack, dodge, run],
        text: "You are fighting a monster."
    }
}

// actions
function initializeGame() {
    btn1.onclick = goStore;
    btn2.onclick = goCave;
    btn3.onclick = fightDragon;

    xp = 0, health = 100, gold = 50;
    updateStats();

    goTown();

    currentWeapon = 0;
    inventory = ["stick"];

    gameOn = true;
}

function setValues(textValues, functionValues, message) {
     // set text
     [btn1.innerText, btn2.innerText, btn3.innerText] = [textValues[0], textValues[1], textValues[2]];
 
     // set functions
     [btn1.onclick, btn2.onclick, btn3.onclick] = [functionValues[0], functionValues[1], functionValues[2]];

     // set message text
     messageText.innerText = message;
}

function allTown()
{
    btn1.innerText=  btn2.innerText = btn3.innerText = "Go to Town";
    btn1.onclick = btn2.onclick = btn3.onclick = run;
}

function hideMonsterBar() {
    monsterBar.style.display = "none";
}

function updateStats() {
    xpText.innerText = xp;
    healthText.innerText = health;
    goldText.innerText = gold;
}

function updateMonsterStats() {
    monsterNameText.innerText = monsterName;
    monsterHealthText.innerText = monsterHealth;
}

function goTown() {
    let town = locations.town;
    setValues(town.btnTexts, town.btnFunctions, town.text)
}

function goStore() {
    let store = locations.store;
    setValues(store.btnTexts, store.btnFunctions, store.text);
}

function goCave() {
    let cave = locations.cave;
    setValues(cave.btnTexts, cave.btnFunctions, cave.text)
}

function buyHealth() {
    if (gold >= healthCost)
    {
        gold -= healthCost;
        health += 10;
        
        updateStats();
    }
    else messageText.innerText = "You do not have enough gold to buy health.";
}

function buyWeapon() {
    if (gold >= weaponCost)
    {
        currentWeapon++;
        gold -= weaponCost;
        updateStats();
        inventory.push(weapons[currentWeapon].name)
        messageText.innerText = `You now have a ${weapons[currentWeapon].name}. In your inventory you have ${inventory}`
    }
    else messageText.innerText = "You do not have enough gold to buy weapon.";
}


function fightSlime() {
    monsterName = "slime";
    monsterHealth = 15;
    updateMonsterStats();
    
    let monster = locations.monster;
    setValues(monster.btnTexts, monster.btnFunctions, monster.text)
    monsterBar.style.display = "block";


}

function fightBeast() {
    monsterName = "fanged beast";
    monsterHealth = 60;
    updateMonsterStats();
    
    let monster = locations.monster;
    setValues(monster.btnTexts, monster.btnFunctions, monster.text)
    monsterBar.style.display = "block";
}

function fightDragon() {
    monsterName = "Dragon";
    monsterHealth = 300;
    updateMonsterStats();
    
    let monster = locations.monster;
    setValues(monster.btnTexts, monster.btnFunctions, monster.text)
    monsterBar.style.display = "block";
}

let i = 0, mh;
function attack() {
    if (mh == undefined) mh = monsterHealth;
    let textContent = [`You attack ${monsterName} with ${weapons[currentWeapon].name}`, 'You miss', 'You attack again']
    monsterHealth -= weapons[currentWeapon].power;
    health -= (mh - weapons[currentWeapon].power) < 0 ? -(mh - weapons[currentWeapon].power) : (mh - weapons[currentWeapon].power);
    updateMonsterStats();
    updateStats();
    if (monsterHealth <= 0) {
        messageText.innerText = `${monsterName} dies. You gain experience and gold.`;
        gold += Math.floor(mh / 2);
        updateStats();
        mh = undefined;
        allTown();
        return;
    }
    else if (health <= 0) {
        messageText.innerText = "You die. ";
        btn1.innerText =  btn2.innerText = btn3.innerText = "Restart Game";
        btn1.onclick = btn2.onclick = btn3.onclick = initializeGame;
    }

    
}

function dodge() {
    return;
}

function run() {
    monsterBar.style.display = "none";
    goTown();
}

initializeGame();