const { getItem} = require('../Controller/ItemController')
async function routes(fastify, options) {
  fastify.get("/items/:name", getItem);
}
module.exports = routes;
