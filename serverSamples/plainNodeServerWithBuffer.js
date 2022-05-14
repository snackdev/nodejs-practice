const http = require('http')

const server = http.createServer(async (req, res) => {
    const buffers = [];

    for await (const chunk of req) {
        buffers.push(chunk);
    }
    const data = Buffer.concat(buffers).toString();
    console.log(data);
    res.end();
});

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})