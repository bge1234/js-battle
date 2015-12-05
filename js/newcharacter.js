var button = document.getElementById("send");
button.addEventListener("click", addNewCharacter);

function addNewCharacter() {

  var newCharacterName = document.getElementById("name");

  if(localStorage.getItem(newCharacterName.value) !== null)
    alert("A character with this name already exists. Please choose a different name and try again.");
  else {
    var newCharacter = {
      name: "",
      type: "",
      attack1: {
        type: "one",
        name: "",
        power: 0,
        chance: .7,
      },
      attack2: {
        type: "two",
        name: "",
        power: 0,
        chance: .25,
      },
      special_attack: {
        type: "special",
        name: "",
        power: 5000,
        chance: .05,
      },
      defense: 0,
      health: 0,
      last_words_win: "",
      last_words_loss: "",
      role: "none"
    };

    //Next line moved up ahead of If.
    //var newCharacterName = document.getElementById("name");
    var newCharacterType = document.getElementById("type");
    var newCharacterAttack1Name = document.getElementById("attack1name");
    var newCharacterAttack1Power = document.getElementById("attack1power");
    var newCharacterAttack2Name = document.getElementById("attack2name");
    var newCharacterAttack2Power = document.getElementById("attack2power");
    var newCharacterSpecialAttackName = document.getElementById("specialattackname");
    var newCharacterDefense = document.getElementById("defense");
    var newCharacterHealth = document.getElementById("health");
    var newCharacterLastWordsWin = document.getElementById("lastwordswin");
    var newCharacterLastWordsLoss = document.getElementById("lastwordsloss");

    newCharacter.name = newCharacterName.value;
    newCharacter.type = newCharacterType.value;
    newCharacter.attack1.name = newCharacterAttack1Name.value;
    newCharacter.attack1.power = newCharacterAttack1Power.value;
    newCharacter.attack2.name = newCharacterAttack2Name.value;
    newCharacter.attack2.power = newCharacterAttack2Power.value;
    newCharacter.special_attack.name = newCharacterSpecialAttackName.value;
    newCharacter.defense = newCharacterDefense.value;
    newCharacter.health = newCharacterHealth.value;
    newCharacter.last_words_win = newCharacterLastWordsWin.value;
    newCharacter.last_words_loss = newCharacterLastWordsLoss.value;
    localStorage.setItem(newCharacterName.value, JSON.stringify(newCharacter));
    window.open ("index.html");
  }
};
