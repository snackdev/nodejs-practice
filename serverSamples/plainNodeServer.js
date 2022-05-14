const http = require('http')

const server = http.createServer((req, res) => {
    // we can access HTTP headers
    let data = '';
    req.on('data', chunk => {
        console.log(`Data chunk available: ${chunk}`);
        data+= chunk;
    });
    req.on('end', () => {
        // end of data
        console.log('hello',data)
    });
});

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})