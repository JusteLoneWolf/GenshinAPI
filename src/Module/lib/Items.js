const fs = require('fs/promises')
class Character {
  constructor() {
    this.lang = "fr"
  }


  async getItem(name){
    let data = require(`../../assets/fr/Items/items.json`)
    return data[name.toLowerCase()]
  }
}

module.exports = Character
