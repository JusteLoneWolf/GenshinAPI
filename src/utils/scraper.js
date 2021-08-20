const axios = require('axios')
const cheerio = require('cheerio');
axios.get('https://genshin.honeyhunterworld.com/db/char/amber/?lang=FR').then((res) => {
  const $ = cheerio.load(res.data);

  $('table.item_main_table').text('Hello there!');
  $('h2').addClass('welcome');
  const content = $('div[id="live_data"]')
  if ( content.length !== 0 ) {
    const table = $('table[class="item_main_table"]')
    console.log(table.text())

    table.find().each(function(i, elem) {
      let data = $(this)
      console.log(data)

      let dataLinkClasse = data.find('td').text()
    })
  }
})
