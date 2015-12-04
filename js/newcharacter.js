var button = document.getElementById("send");
button.addEventListener("click", addNewCharacter);

function addNewCharacter() {
  var newCharacter = {
    name: "Godzilla",
    type: "water",
    attack1: {
      type: "one",
      name: "Tail Whip",
      power: 40,
      chance: .7,
    },
    attack2: {
      type: "two",
      name: "Fire Breath",
      power: 80,
      chance: .25,
    },
    special_attack: {
      type: "special",
      name: "Tidal Wave",
      power: 5000,
      chance: .05,
    },
    defense: 6,
    health: 2500,
    last_words_win: "That's what I'm talking about!",
    last_words_loss: "Nooo!",
    role: "none"
  };

  var newCharacterName = document.getElementById("name");
  var newCharacterType = document.getElementById("type");
  var newCharacterAttack1Name = document.getElementById("attack1name");
  var newCharacterAttack1Power = document.getElementById("attack1power");
  var newCharacterAttack2Name = document.getElementById("attack2name");
  var newCharacterAttack2Power = document.getElementById("attack2power");
  var newCharacterSpecialAttackName = document.getElementById("specialattackname");
  var newCharacterSpecialAttackPower = document.getElementById("specialattackpower");
  var newCharacterDefense = document.getElementById("defense");
  var newCharacterHealth = document.getElementById("health");
  var newCharacterLastWordsWin = document.getElementById("lastwordswin");
  var newCharacterLastWordsLoss = document.getElementById("lastwordsloss");

  newCharacter.name = newCharacterName.value;
  newCharacter.type = newCharacterType.value;
  newCharacter.attack1.type = "one";
  newCharacter.attack1.name = newCharacterAttack1Name.value;
  newCharacter.attack1.power = newCharacterAttack1Power.value;
  newCharacter.attack2.type = "two";
  newCharacter.attack2.name = newCharacterAttack2Name.value;
  newCharacter.attack2.power = newCharacterAttack2Power.value;
  newCharacter.special_attack.type = "special";
  newCharacter.special_attack.name = newCharacterSpecialAttackName.value;
  newCharacter.special_attack.power = newCharacterSpecialAttackPower.value;
  newCharacter.defense = newCharacterDefense.value;
  newCharacter.health = newCharacterHealth.value;
  newCharacter.last_words_win = newCharacterLastWordsWin.value;
  newCharacter.last_words_loss = newCharacterLastWordsLoss.value;
  newCharacter.role = "none";
  window.open ("index.html");
  localStorage.setItem(newCharacterName.value, JSON.stringify(newCharacter));
  //Todo:
    //Check that character doesn't exist before trying to add it.
    //Modify fight function to allow choosing of characters who will fight. First need to modify it to point to local storage instead of characters.js.
};
