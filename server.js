const http = require('http');

let app = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end('on.\n');
});


app.listen(3000);
console.log('on');
