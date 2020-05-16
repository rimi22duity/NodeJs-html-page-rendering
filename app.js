const http = require('http');
const fileSystem = require('fs');

fileSystem.readFile('./homepage.html', (err, html) => {
    if (err) {
        throw err;
    }

    http.createServer((req, res) => {
        res.writeHeader(200, {'content-type' : 'text/html'});
        res.write(html);
        res.end();
    }).listen(3000);

    console.log('Listening to port 3000... ');
});