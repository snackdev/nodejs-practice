

const doSometing = async (...args) => {
    console.log(args);
    if (args[0] === 0){
        throw Error();
    }
    return args
}

doSometing(1)
.then(args => doSometing(2, args))
.then(args => doSometing(0, args))
.catch(err => console.log("ERR", err))