function fight(attacker, defender) {
  console.log(attacker.name + " vs. " + defender.name);
  var effectivenessMult = effectiveness(attacker.type, defender.type);
  var damage = 50 * (attacker.attack/defender.defense) * effectivenessMult;
  console.log(damage + " damage was done to " + defender.name);
  subtractHealth(defender, damage);
  return;
}

function subtractHealth(name, damage) {
  if (damage > name.health) {
    name.health = 0;
    console.log(name.name + " is dead!");
  }
  else {
    console.log(name.name + "'s remaining health is " + name.health);
    name.health -= damage;
  }
  return;
}

function effectiveness(attackerType, defenderType) {
  if (attackerType === "earth") {
    if (defenderType === "earth") {
      console.log("earth has normal effectiveness against earth");
      return 1;
    }
    else if (defenderType === "wind") {
      console.log("earth has low effectiveness against wind");
      return .5;
    }
    else if (defenderType === "water") {
      console.log("earth has low effectiveness against water");
      return .5;
    }
    else {
      console.log("earth has high effectiveness against fire");
      return 2;
    }
  }
  else if (attackerType === "wind") {
    if (defenderType === "earth") {
      console.log("wind has low effectiveness against earth");
      return .5;
    }
    else if (defenderType === "wind") {
      console.log("wind has normal effectiveness against wind");
      return 1;
    }
    else if (defenderType === "water") {
      console.log("wind has high effectiveness against water");
      return 2;
    }
    else {
      console.log("wind has high effectiveness against fire");
      return 2;
    }
  }
  else if (attackerType === "water") {
    if (defenderType === "earth") {
      console.log("water has high effectiveness against earth");
      return 2;
    }
    else if (defenderType === "wind") {
      console.log("water has low effectiveness against wind");
      return .5;
    }
    else if (defenderType === "water") {
      console.log("water has normal effectiveness against water");
      return 1;
    }
    else {
      console.log("water has high effectiveness against fire");
      return 2;
    }
  }
  else {
    if (defenderType === "earth") {
      console.log("fire has low effectiveness against earth");
      return .5;
    }
    else if (defenderType === "wind") {
      console.log("fire has low effectiveness against wind");
      return .5;
    }
    else if (defenderType === "water") {
      console.log("fire has low effectiveness against water");
      return .5;
    }
    else {
      console.log("fire has normal effectiveness against fire");
      return 1;
    }
  }
}
