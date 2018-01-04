/*
var result = [];
var count = 3;
function a(name){
    result.push(name);
    next();
}
function b(age){
    result.push(age);
    next();
}
function c(job){
    result.push(job);
    next();
}
function next(){
    count--;
    if (count===0)d();
}
function d() {
    console.log(result);
}
b(18);
a("Emily");
c('student');
function wait(fn,cl){
    var count = fn.length;
    var result =[];
    fn.forEach(function(f){
        f(next);
    });
    function next(r){
        result.push(r);
        count--;
        if(count===0)cl(result);
    }
}
wait([
    function (next) {
        $.get('url1', function (data) {
            next(data);
        });
    },
    function (next) {
        $.get('url2', function (data) {
            next(data);
        });
    },
    function (next) {
        $.get('url3', function (data) {
            next(data);
        });
    }
],
    function (result) {
        //處理result
        console.log(result);
    });
*/

var request = require("request");
/*
//version 1: Normal,
function google(next = () => {}) {
  request("https://www.google.com").on("response", function(err, body) {
    console.warn("google arrive");
    next();
  });
}
function yahoo(next = () => {}) {
  request.get("https://www.yahoo.com").on("response", function(err, body) {
    console.warn("yahoo arrive");
    next();
  });
}

google(() => {
  yahoo(() => {
    google();
  });
});
*/
/*
//Version 2: Promise,
function google(next = () => {}) {
  return new Promise(function(resolve, reject) {
    request("https://www.google.com").on("response", function(err, body) {
      console.warn("google arrive");
      next();
      resolve();
    });
  });
}
function yahoo(next = () => {}) {
  return new Promise(function(resolve, reject) {
    request.get("https://www.yahoo.com").on("response", function(err, body) {
      console.warn("yahoo arrive");
      next();
      resolve();
    });
  });
}
google()
  .then(() => {
    return yahoo();
  })
  .then(() => {
    return google();
  });
*/

//Version 2: await
function google(next = () => {}) {
  return new Promise(function(resolve, reject) {
    request("https://www.google.com").on("response", function(err, body) {
      console.warn("google arrive");
      next();
      resolve();
    });
  });
}

function yahoo(next = () => {}) {
  return new Promise(function(resolve, reject) {
    request.get("https://www.yahoo.com").on("response", function(err, body) {
      console.warn("yahoo arrive");
      next();
      resolve();
    });
  });
}

async function seq() {
  await google();
  await google();
  await yahoo();
}

seq();
