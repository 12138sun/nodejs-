const express = require('express');
const app = express();

const codec ={
    getShortUrlMap:{},
    getLongUrlMap:{},
    encode:(longUrl)=>{
      let shortUrl = codec.getShortUrlMap[longUrl];
      if(codec.getShortUrlMap[longUrl]==null){
        shortUrl = 'http://short.est/'+Math.random().toString(36).substr(2);
          codec.getShortUrlMap[longUrl]=shortUrl;
          codec.getLongUrlMap[shortUrl]=longUrl;
      }
      return shortUrl;
    },
    decode:(shortUrl)=>{
      return codec.getLongUrlMap[shortUrl];
    }
  }
let a = codec.encode('sss');
let b = codec.decode(a);
console.log(a);
console.log(b);
const port = 5000;


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});