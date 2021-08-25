const Character = require('../../Module/lib/Character')
const character = new Character()

const getCharacter = async (req, reply) => {
  character.getCharacter(req.params.name).then(r => {
    reply.send(r)
  })
}


module.exports ={
  getCharacter,
}
