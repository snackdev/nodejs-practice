
// $ node plainJSsamples/args.js name=Steve

process.argv.forEach((val, idx) => {
    console.log(`${val} : [${idx}]`)
})