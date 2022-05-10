

function printer(message) {
    console.log(message)
}

printer(1)
setTimeout(() => printer(9), 1000)
setTimeout(() => printer(8), 0)
new Promise(resolve => resolve(5)).then((resolve) => printer(resolve))
printer(2)
setImmediate(() => printer(6))
process.nextTick(() => printer(4))
setImmediate(() => printer(7))
printer(3)