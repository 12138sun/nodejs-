const express = require('express');
const app  = express();
const UrlValue = {};

    // 生成
    app.get('/encode',(req,res)=>{
        let link = req.query['link'];
        let key = Math.random().toString(36).substr(6);
        UrlValue[key] = link;
        res.send({shortUrl:key});
    });
    // 解析
    app.get('/decode',(req,res)=>{
        let key = req.query['link'];
        let shortUrl = UrlValue[key] || '不存在该地址';
        res.send({shortUrl});
    })

const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});