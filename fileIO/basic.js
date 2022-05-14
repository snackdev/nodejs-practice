const fs = require('fs');

const f = fs.open('fileIO/resources/Hello.txt', 'r', (err, fd) => {
    // fd is our file descriptor
    console.log(err, fd);
});

console.log('open()',f);

try {
    const fd = fs.openSync('fileIO/resources/Hello.txt', 'r');
    console.log('openSync()', fd);
} catch (err) {
    console.error(err);
}

const nodeVserion = process.version;
console.log('Node Version : ', nodeVserion)
const fsPromise = nodeVserion.startsWith('v14') ? require('fs/promises') : require('fs').promises;
async function example() {
    let filehandle;
    try {
        filehandle = await fsPromise.open('fileIO/resources/Hello.txt', 'r');
        console.log('promise', filehandle.fd);
        console.log('promise', await filehandle.readFile({ encoding: 'utf8' }));
    } finally {
        await filehandle.close();
    }
}
example();
