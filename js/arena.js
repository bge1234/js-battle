//Todo:
  // Use HTML forms to add new characters to the arena
  // Have buttons that can initiate attacks
  // Take attack input from user each turn
  // Have images to represent characters (incl. stats) and attacks
  // Use CSS to have the arena look like a Gameboy (screen, A button, B button, Start, and numpad)

var fightButton =  document.getElementById("fight");
fightButton.addEventListener("click", start);

function start() {
  reset();
  fight(zilla,kong);
  return;
}

function reset() {
  zilla.health = 2500;
  kong.health = 2000;

  var node = document.getElementById("fightOutput");
  while (node.firstChild) {
    node.removeChild(node.firstChild);
}
}

function fight(attacker, defender) {
  attacker.role = attacker;
  defender.role = defender;

  paster("Fight: " + attacker.name + " vs. " + defender.name);

  var attackType = selectAttack(attacker);
  var damage = damageCalc(attacker, defender, attackType);
  subtractHealth(defender, damage);

  if (defender.health === 0) {
    paster(attacker.name + " says, \"" + attacker.last_words_win + "\"");
    paster(defender.name + " says, \"" + defender.last_words_loss + "\"");
  }
  else {
    newSection();
    fight(defender,attacker);
  }

  return;
}

function selectAttack(attacker) {
  if (Math.random() <= .4) {
    paster(attacker.name + " used " + attacker.attack1.name);
    return "one";
  }
  else if (Math.random() > .4 && Math.random() <= .95) {
    paster(attacker.name + " used " + attacker.attack2.name);
    return "two";
  }
  else {
    paster(attacker.name + " used " + attacker.special_attack.name);
    return "special";
  }
}

function damageCalc(attacker, defender, attackType) {
  var damage = 0;
  var effectivenessMult = effectiveness(attacker.type, defender.type);

  if (attackType === "one")
    damage = (attacker.attack1.power - defender.defense) * effectivenessMult;
  else if (attackType === "two")
    damage = (attacker.attack2.power - defender.defense) * effectivenessMult;
  else
    damage = (attacker.special_attack.power - defender.defense) * effectivenessMult;

  paster(damage + " damage was done to " + defender.name);
  return damage;
}

function subtractHealth(name, damage) {
  if (damage > name.health) {
    name.health = 0;
    paster(name.name + " is dead!");
  }
  else {
    name.health -= damage;
    paster(name.name + "'s remaining health is " + name.health);
  }
  return;
}

function effectiveness(attackerType, defenderType) {
  if (attackerType === "earth") {
    if (defenderType === "earth") {
      paster("Earth has normal effectiveness against earth");
      return 1;
    }
    else if (defenderType === "wind") {
      paster("Earth has low effectiveness against wind");
      return .5;
    }
    else if (defenderType === "water") {
      paster("Earth has low effectiveness against water");
      return .5;
    }
    else {
      paster("Earth has high effectiveness against fire");
      return 2;
    }
  }
  else if (attackerType === "wind") {
    if (defenderType === "earth") {
      paster("Wind has low effectiveness against earth");
      return .5;
    }
    else if (defenderType === "wind") {
      paster("Wind has normal effectiveness against wind");
      return 1;
    }
    else if (defenderType === "water") {
      paster("Wind has high effectiveness against water");
      return 2;
    }
    else {
      paster("Wind has high effectiveness against fire");
      return 2;
    }
  }
  else if (attackerType === "water") {
    if (defenderType === "earth") {
      paster("Water has high effectiveness against earth");
      return 2;
    }
    else if (defenderType === "wind") {
      paster("Water has low effectiveness against wind");
      return .5;
    }
    else if (defenderType === "water") {
      paster("Water has normal effectiveness against water");
      return 1;
    }
    else {
      paster("Water has high effectiveness against fire");
      return 2;
    }
  }
  else {
    if (defenderType === "earth") {
      paster("Fire has low effectiveness against earth");
      return .5;
    }
    else if (defenderType === "wind") {
      paster("Fire has low effectiveness against wind");
      return .5;
    }
    else if (defenderType === "water") {
      paster("Fire has low effectiveness against water");
      return .5;
    }
    else {
      paster("Fire has normal effectiveness against fire");
      return 1;
    }
  }
}

function paster(nextItem) {
	var node = document.createElement("li");
	var textnode = document.createTextNode(nextItem);
	node.appendChild(textnode);
	document.getElementById("fightOutput").appendChild(node);

	var node = document.createElement("br");
	document.getElementById("fightOutput").appendChild(node);
};

function newSection() {
	var node = document.createElement("li");
	var textnode = document.createTextNode("===================================");
	node.appendChild(textnode);
	document.getElementById("fightOutput").appendChild(node);

	var node = document.createElement("br");
	document.getElementById("fightOutput").appendChild(node);
};