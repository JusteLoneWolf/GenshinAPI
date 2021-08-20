const GenshinAPI = require('../src/main')


const Character = new GenshinAPI.Character()


Character.getCharacter('amber').then(r => console.log(r))
