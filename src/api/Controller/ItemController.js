const Items = require('../../Module/lib/Items')
const items = new Items()

const getItem = async (req, reply) => {
  items.getItem(decodeURIComponent(req.params.name).replace(/\+/g,' ')).then(r => {
    reply.send(r)
  })
}


module.exports ={
  getItem,
}
