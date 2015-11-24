function fight(attacker, defender) {
  var effectivenessMult = effectiveness(attacker.type, defender.type);
  var damage = 50 * (attacker.attack/defender.defense) * effectivenessMult;
  subtractHealth(defender, damage);
  return;
}

function subtractHealth(name, damage) {
  name.health -= damage;
  return;
}

function effectiveness(attackerType, defenderType) {
  if (attackerType === "earth") {
    if (defenderType === "earth") {
      return 1;
    }
    else if (defenderType === "wind") {
      return .5;
    }
    else if (defenderType === "water") {
      return .5;
    }
    else {
      return 2;
    }
  }
  else if (attackerType === "wind") {
    if (defenderType === "earth") {
      return .5;
    }
    else if (defenderType === "wind") {
      return 1;
    }
    else if (defenderType === "water") {
      return 2;
    }
    else {
      return 2;
    }
  }
  else if (attackerType === "water") {
    if (defenderType === "earth") {
      return 2;
    }
    else if (defenderType === "wind") {
      return .5;
    }
    else if (defenderType === "water") {
      return 1;
    }
    else {
      return 2;
    }
  }
  else {
    if (defenderType === "earth") {
      return .5;
    }
    else if (defenderType === "wind") {
      return .5;
    }
    else if (defenderType === "water") {
      return .5;
    }
    else {
      return 1;
    }
  }
}
