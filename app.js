var express = require('express');
// // 与之前一样
// var fibonacci = function (n) {
//   // typeof NaN === 'number' 是成立的，所以要判断 NaN
//   if (typeof n !== 'number' || isNaN(n)) {
//     throw new Error('n should be a Number');
//   }
//   if (n < 0) {
//     throw new Error('n should >= 0')
//   }
//   if (n > 10) {
//     throw new Error('n should <= 10');
//   }
//   if (n === 0) {
//     return 0;
//   }
//   if (n === 1) {
//     return 1;
//   }

//   return fibonacci(n-1) + fibonacci(n-2);
// };
// var app = express();
// app.get('/fib', function(req, res){
//     // http 传来的东西默认都是没有类型的，都是 String，所以我们要手动转换类型
//     var n = Number(req.query.n);
//     try {
//         // 为何使用 String 做类型转换，是因为如果你直接给个数字给 res.send 的话，
//         // 它会当成是你给了它一个 http 状态码，所以我们明确给 String
//         res.send(String(fibonacci(n)));
//     } catch (e){
//         // 如果 fibonacci 抛错的话，错误信息会记录在 err 对象的 .message 属性中。
//         // 拓展阅读：https://www.joyent.com/developers/node/design/errors
//         res
//             .status(500)
//             .send(e.message);

//     }
// })
// // 暴露 app 出去。module.exports 与 exports 的区别请看《深入浅出 Node.js》
// module.exports = app;
// app.listen(3000, function(req, res){
//     console.log('You have successed！App is listening at port 3000');
// })


var bodyParser = require('body-parser');
var app = new express();

//app.use(express.limit('1mb'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
//app.use(express.methodOverride());
app.get('/login',function(req,res){
  res.send('<form method="post" action="/">'+
    'your name: <input type="text" name="username"/>'+
    'your pwd: <input type="password" name="password"/>'+
    '<input type="submit"  value="submit"/>' +
    '</form>'
  );
});
app.post("/login",function(req,res){
  res.send('welcome'+req.body.username);
});
module.exports = app;
app.listen(3000, function(req, res){
    console.log('You have successed！App is listening at port 3000');
})