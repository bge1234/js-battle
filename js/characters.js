var builtinCharacters = [
  {
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
  },
  {
    name: "King Kong",
    type: "earth",
    attack1: {
      type: "one",
      name: "Bite",
      power: 30,
      chance: .7,
    },
    attack2: {
      type: "two",
      name: "Pound",
      power: 80,
      chance: .2,
    },
    special_attack: {
      type: "special",
      name: "Body Slam",
      power: 5000,
      chance: .05,
    },
    defense: 8,
    health: 2000,
    last_words_win: "Kong win!",
    last_words_loss: "How did Kong lose?!",
    role: "none"
  }
];

for(var i = 0; i < builtinCharacters.length; i++) {
  localStorage.setItem(builtinCharacters[i]["name"], JSON.stringify(builtinCharacters[i]));
}
