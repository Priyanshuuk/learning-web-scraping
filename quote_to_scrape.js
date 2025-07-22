const axios = require('axios');
const cheerio = require('cheerio');
const { error } = require('console');

const base_url = 'https://quotes.toscrape.com/page/'
async function quotes(){
    try{
        let page = 1;
       while(true){
        const {data:html} = await axios.get(`${base_url}${page}/`);
        const $ = cheerio.load(html);
        
            let quotes_of_day =$('.quote');
            if(quotes_of_day.length ==0){
                break;
            }
            for(let j = 0 ; j <quotes_of_day.length;j++ ){
                let text_of_quote = $(quotes_of_day[j]).find('.text').text();
                let said_by = $(quotes_of_day[j]).find('.author').text();
                console.log( `${page*(j+1)} qoute is ${text_of_quote} by ${said_by}`);
               
                
            }
             page++;
        }
    }
        catch(error){
            console.error(error);
        }
        }
quotes();