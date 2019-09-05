const express = require('express');
const app = express();
const superagent = require('superagent');
require('superagent-charset')(superagent)
const iconv = require('iconv-lite');

let server = app.listen(3000,'localhost', function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Your App is running at http://%s:%s', host, port);
});
app.get('/product/list', function (req, response) {
  let content = ''
  new Promise((resolve,reject)=>{
    superagent
    .get('http://nc.mofcom.gov.cn/nc/js/data/get_base_mark_list.jsp')
    .charset()
    .buffer(true)
    .end((err, res) => {
      if (err) {
        console.log(`抓取失败 - ${err}`)
      } else {
        content =  res.text.substring(res.text.indexOf('['),res.text.lastIndexOf(']')+1)
        resolve(eval(content))
      }
    });
  }).then((content)=>{
    console.log(content)
    response.json({
      ststus:200,
      data:content,
      meg:'请求成功'
    });
  })
});
app.get('/market/list', function (req, response) {
  let content = ''
  new Promise((resolve,reject)=>{
    superagent
    .get('http://nc.mofcom.gov.cn/nc/js/data/get_mark_list.jsp')
    .charset()
    .buffer(true)
    .end((err, res) => {
      if (err) {
        console.log(`抓取失败 - ${err}`)
      } else {
        content =  res.text.substring(res.text.indexOf('['),res.text.lastIndexOf(']')+1)
        resolve(eval(content))
      }
    });
  }).then((content)=>{
    console.log(content)
    response.json({
      ststus:200,
      data:content,
      meg:'请求成功'
    });
  })
});