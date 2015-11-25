function resetHealth() {
  zilla.health = 2500;
  kong.health = 2000;
}

function fight(attacker, defender) {
  attacker.role = attacker;
  defender.role = defender;

  console.log("Fight: " + attacker.name + " vs. " + defender.name);

  var attackType = selectAttack(attacker);
  var damage = damageCalc(attacker, defender, attackType);
  subtractHealth(defender, damage);

  if (defender.health === 0) {
    console.log(attacker.name + " says, \"" + attacker.last_words_win + "\"")
    console.log(defender.name + " says, \"" + defender.last_words_loss + "\"")
  }
  else
    fight(defender,attacker);

  return;
}

function selectAttack(attacker) {
  if (Math.random() <= .4) {
    console.log(attacker.name + " used " + attacker.attack1.name);
    return "one";
  }
  else if (Math.random() > .4 && Math.random() <= .95) {
    console.log(attacker.name + " used " + attacker.attack2.name);
    return "two";
  }
  else {
    console.log(attacker.name + " used " + attacker.special_attack.name);
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

  console.log(damage + " damage was done to " + defender.name);
  return damage;
}

function subtractHealth(name, damage) {
  if (damage > name.health) {
    name.health = 0;
    console.log(name.name + " is dead!");
  }
  else {
    name.health -= damage;
    console.log(name.name + "'s remaining health is " + name.health);
  }
  return;
}

function effectiveness(attackerType, defenderType) {
  if (attackerType === "earth") {
    if (defenderType === "earth") {
      console.log("Earth has normal effectiveness against earth");
      return 1;
    }
    else if (defenderType === "wind") {
      console.log("Earth has low effectiveness against wind");
      return .5;
    }
    else if (defenderType === "water") {
      console.log("Earth has low effectiveness against water");
      return .5;
    }
    else {
      console.log("Earth has high effectiveness against fire");
      return 2;
    }
  }
  else if (attackerType === "wind") {
    if (defenderType === "earth") {
      console.log("Wind has low effectiveness against earth");
      return .5;
    }
    else if (defenderType === "wind") {
      console.log("Wind has normal effectiveness against wind");
      return 1;
    }
    else if (defenderType === "water") {
      console.log("Wind has high effectiveness against water");
      return 2;
    }
    else {
      console.log("Wind has high effectiveness against fire");
      return 2;
    }
  }
  else if (attackerType === "water") {
    if (defenderType === "earth") {
      console.log("Water has high effectiveness against earth");
      return 2;
    }
    else if (defenderType === "wind") {
      console.log("Water has low effectiveness against wind");
      return .5;
    }
    else if (defenderType === "water") {
      console.log("Water has normal effectiveness against water");
      return 1;
    }
    else {
      console.log("Water has high effectiveness against fire");
      return 2;
    }
  }
  else {
    if (defenderType === "earth") {
      console.log("Fire has low effectiveness against earth");
      return .5;
    }
    else if (defenderType === "wind") {
      console.log("Fire has low effectiveness against wind");
      return .5;
    }
    else if (defenderType === "water") {
      console.log("Fire has low effectiveness against water");
      return .5;
    }
    else {
      console.log("Fire has normal effectiveness against fire");
      return 1;
    }
  }
}
