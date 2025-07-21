const axios = require('axios');
const cheerio = require('cheerio');
const { error } = require('console');

const url = 'https://books.toscrape.com/';

async function fetchCost(){
    const {data:html} = await axios.get(url);
    const $ = cheerio.load(html);
    
    try{
      let pricesarray =  $('.product_price');
        for(let i = 0 ; i <pricesarray.length;i++){
            let prices = $(pricesarray[i]).find('p.price_color').text().trim();
            let avia = $(pricesarray[i]).find('p.instock.availability').text().trim();
              console.log(`price: ${prices} | availability: ${avia}`);

        }
    }
    catch{
        console.error(error);
    }
}

fetchCost();