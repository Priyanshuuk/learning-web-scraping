const axios = require('axios');
const cheerio =require('cheerio');


const base_url = 'https://books.toscrape.com/catalogue/page-';


async function pageination(){
            for(let it = 1 ; it < 51;it++){
            const{data:html} =await  axios.get(`${base_url}${it}.html`)
            const $ = cheerio.load(html);
            let books = $('.product_pod');

            for(let i = 0 ; i < books.length;i++){
              let  bookname = $(books[i]).find('img').attr('alt');
                console.log(bookname);
            }


            }
}
pageination();