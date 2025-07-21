const request = require('request');
const cheerio = require('cheerio');

const url = 'https://books.toscrape.com/';

request(url ,cb);

function cb(error ,response , html){
    if(error){
        console.error("Error" , error);
    }
    else{
      const $=  cheerio.load(html);
      let data = $('.image_container');

      for(let i = 0 ; i < data.length;i++){
       let img = $(data[i]).find('img');
            let title = img.attr('alt');
            console.log(title);
      }
    }
}