// const fs  = require('fs');

// const textWrite = fs.writeFileSync('one.txt' , 'hello viren');
// console.log(textWrite);
// const textRead = fs.readFileSync('one.txt', 'utf-8');
// console.log(textRead);
// --------------------------------------------------------------------------------------------

// var http = require('http');

// const hostname = '127.0.0.1';
// const port = 8080;

// const server = http.createServer(function (req, res) {
//     res.writeHead(200 , {'content-type' : 'text/html'});
//     res.write('Hello v  ');
//     res.end();
//   });

// server.listen(port, hostname, () => {
//   console.log(`http://${hostname}:${port}`);
// });
// -------------------------------------------------------------------------------------------------
// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
// -------------------------------------------------------------------------------------------------
// var fs = require('fs');
// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });
// -------------------------------------------------------------------------------------------------
// var fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'Hello V', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
// -------------------------------------------------------------------------------------------------
// var fs = require('fs');

// fs.unlink('two.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });
// -------------------------------------------------------------------------------------------------
// var fs = require('fs');

// fs.rename('myrenamedfile.txt', 'mynewfile1.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });
// -----------------------for static file html , json  ------------------------------------------------

// var http = require('http');
// const fs = require('fs');

// const hostname = '127.0.0.1';
// const port = 8080;

// // const index = fs.readFileSync('./index.html');
// const json = fs.readFileSync('./index.json');

// const server = http.createServer(function (req, res) {

//     url = req.url;
//     // console.log(req.url);
//     res.statusCode = 200;
//   res.setHeader( 'content-type' , 'text/json' );
// //   res.end(index);
// res. end(json);
// });

// server.listen(port, hostname, () => {
//   console.log(`http://${hostname}:${port}`);
// });
// -----------------------------run html , json files using  Swich Case ---------------------------------------------
// var http = require('http');
// const fs = require('fs');

// const hostname = '127.0.0.1';
// const port = 8080;

// const index = fs.readFileSync('./index.html');
// const json = fs.readFileSync('./index.json');

// const server = http.createServer((req, res) => {
//   console.log(req.url);

//   switch (req.url) {
//     case '/':
//       res.setHeader('content-type', 'text/json');
//       res.end(index);
//       break;

//     case '/api':
//       res.setHeader('content-type', 'text/json');
//       res.end(json);
//       break;

//     default:
//       res.writeHead(404);
//       res.end();
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`http://${hostname}:${port}`);
// });
// -------------------------------------------------------------------------------------------------
// var http = require('http');
// const fs = require('fs');

// const hostname = '127.0.0.1';
// const port = 8080;

// const index = fs.readFileSync('./index.html');
// const json = JSON.parse(fs.readFileSync('./index.json'));
// const product = json.products[1];  

// const server = http.createServer((req, res) => {
//   console.log(req.url);

//   switch (req.url) {
//     case '/':
//       res.setHeader('content-type', 'text/json');
//       res.end(index);
//       break;
 
//     case '/api':
//       res.setHeader('content-type', 'text/json');
//       res.end(JSON.stringify(json));
//       break;

//     case '/product': 
//       res.setHeader('content-type', 'text/html');
//       let modifyIndex = index.replace('**phoneName**', product.title);
//       res.end(modifyIndex);
//       console.log(product.title);
//       break;

//     default:
//       res.writeHead(404);
//       res.end();
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`http://${hostname}:${port}`);
// });
// -------------------------------------------------------------------------------------------------
var http = require('http');
const fs = require('fs');
var formidable = require('formidable');
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      var newpath = 'C:/Users/Your Name/' + files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
})
  server.listen(port, hostname, () => {
  console.log(`http://${hostname}:${port}`);
});
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
