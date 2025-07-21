const request = require('request');
const cheerio = require('cheerio')

request('https://www.worldometers.info/coronavirus/#countries',function(error , response, html){
    if(error){
        console.error('error : ', error);
    }
    
else if (response && response.statusCode === 200) { 
            const $ = cheerio.load(html);
        //maincounter-wrap
        let arr = $('.maincounter-number >span')

        for(let i = 0 ; i < arr.length;i++){
           let data = $(arr[i]).text();
           console.log("data : ", data);
        }
    }
});



