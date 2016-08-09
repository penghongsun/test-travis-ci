var app = require('../app');
// var supertest = require('supertest');
// // 得到得request对象可以直接按照supertest的API进行调用
// var request = supertest(app);
// var should = require('should');
// describe('test/app.test.js', function(){
//     it('should return 55 when n is 10', function(done){
//     // 之所以这个测试的 function 要接受一个 done 函数，是因为我们的测试内容
//     // 涉及了异步调用，而 mocha 是无法感知异步调用完成的。所以我们主动接受它提供
//     // 的 done 函数，在测试完毕时，自行调用一下，以示结束。
//     // mocha 可以感知到我们的测试函数是否接受 done 参数。js 中，function
//     // 对象是有长度的，它的长度由它的参数数量决定
//     // (function (a, b, c, d) {}).length === 4
//     // 所以 mocha 通过我们测试函数的长度就可以确定我们是否是异步测试。
//         request.get('/fib').query({n: 10}).end(function(err, res){
//             res.text.should.equal('55');
//             done(err);
//         })
//     })
//     // 为了测试一下边界值，我们抽象出来一个方法
//     var testFib = function(n, statusCode, expect, done){
//         request.get('/fib').query({n: n}).expect(statusCode).end(function(err, res){
//             res.text.should.equal(expect);
//             done(err);
//         })
//     }
//     it('should return 0 when n === 0', function (done) {
//         testFib(0, 200, '0', done);
//     });

//     it('should equal 1 when n === 1', function (done) {
//         testFib(1, 200, '1', done);
//     });

//     it('should equal 55 when n === 10', function (done) {
//         testFib(10, 200, '55', done);
//     });

//     it('should throw when n > 10', function (done) {
//         testFib(11, 500, 'n should <= 10', done);
//     });

//     it('should throw when n < 0', function (done) {
//         testFib(-1, 500, 'n should >= 0', done);
//     });

//     it('should throw when n isnt Number', function (done) {
//         testFib('good', 500, 'n should be a Number', done);
//     });
//     // 单独测试一下返回码 500
//     it('should status 500 when error', function (done) {
//         request.get('/fib')
//             .query({n: 100})
//             .expect(500)
//             .end(function (err, res) {
//                 done(err);
//             });
//     });

// })

var supertest = require('supertest');
var agent     = supertest.agent(app);

describe('login', function () {
  it('should login superadmin', function(done) {
    agent
      .post('/login')
      .type('form')
      .send({ username: 'username' })
      .send({ password: 'password' })
      .expect(302)
      .expect('Location', '/')
      .expect('set-cookie', /connect.sid/)
      .end(function(err, res) {
        if (err) return done(err);
        agent.saveCookies(res);
        return done();
      });
  });
});