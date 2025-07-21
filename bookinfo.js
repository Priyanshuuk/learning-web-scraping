const axios = require('axios');
const cheerio = require('cheerio');
const { error } = require('console');
const fs = require('fs');
const url = 'https://books.toscrape.com/';

async function getBooksDetail(){
   const {data:html} =  await axios.get(url);
  const $= cheerio.load(html);
  let bookName =  $('.product_pod');
 let books = [];
  try{
        for(let i = 0 ; i <bookName.length;i++){
            const book = $(bookName[i]).find('img').attr('alt').trim();
            let prices = $(bookName[i]).find('p.price_color').text().trim();
            let avia = $(bookName[i]).find('p.instock.availability').text().trim();
              console.log(`${i+1} --> Title: ${book} | price: ${prices} | availability: ${avia}`);
            books.push({book ,prices ,avia});

        }
        fs.writeFileSync('books.json', JSON.stringify(books, null,2 ));
        
    }
    catch{
        console.error(error);
    }
    }
    
getBooksDetail();