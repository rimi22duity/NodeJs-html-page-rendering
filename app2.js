const http = require('http');
const fileSystem = require('fs');

http.createServer((req, res) => {
    if (req.url === '/') {
        fileSystem.readFile('./homepage.html', (err, html) => {
            if (err) {
                throw err;
            }

            res.writeHeader(200, {'content-type' : 'text/html'});
            res.write(html);
            res.end();
        });
    }

    if (req.url === '/register') {
        fileSystem.readFile('./registerpage.html', (err, html) => {
            if (err) {
                throw err;
            }

            res.writeHeader(200, {'content-type' : 'text/html'});
            res.write(html);
            res.end();
        });
    }
}).listen(3000);

console.log('Listening to port 3000...');