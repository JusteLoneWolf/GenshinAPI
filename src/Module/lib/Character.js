const fs = require('fs/promises')
class Character {
    constructor() {
        this.lang = "fr"
    }


    async getCharacter(name){
        let data = require(`../../assets/fr/characters/${name}.json`)
        let levels = data.characters[name.toLowerCase()].ascension.levels
        for(const level of levels){
            for ( const item of level.items) {
                if ( require('../../assets/fr/Items/items.json')[item.name.toLowerCase()] ) {
                    const {rarity,icon,lootBy,droppedBy,recipe} = require('../../assets/fr/Items/items.json')[item.name.toLowerCase()]
                    Object.assign(item, {
                        data: {
                            rarity,
                            icon,
                            lootBy,
                            droppedBy,
                            recipe
                        }
                    })
                }
            }
        }
        return data.characters[name.toLowerCase()]


        //})
    }
}

module.exports = Character
