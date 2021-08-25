const { getCharacter} = require('../Controller/CharacterController')
async function routes(fastify, options) {
  fastify.get("/characters/:name", getCharacter);
}
module.exports = routes;
