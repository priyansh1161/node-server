 var http = require('http');
var fs = require('fs');
var dir = __dirname  + '/Tribute page/';
 http.createServer(function(req,res){
   console.log(req.url);
   if(req.url == '/'){
     res.writeHead( 200 ,{'content-type' : 'text/html' });
     var html = fs.readFileSync(dir + 'index.html');
     res.write(html);
     res.end();
   }
    // if(req.url.indexOf('.css') != -1){
    //
    //  res.writeHead(200 , { 'content-type' : 'text/css'});
    //  var main = dir + 'main.css';
    //  var mf = fs.readFileSync(main);
    //  res.write(mf);
    //    console.log("asdaa");
    //     res.end();
    // // res.write(dir + 'css/bootstrap.css');
    // }
  //   if(req.url.indexOf('app.js') != -1){
   //
  //    res.writeHead(200 , {'content-type' : 'text/javscript'});
  //    var ht = fs.readFileSync(dir +'app.js' );
  //     console.log("ads");
  //    res.write(ht);
  //    res.end();
  //   // res.write(dir + 'js/jquery-2.2.3.js');
  //  }

 }).listen(1337 , '127.0.0.1');
