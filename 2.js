const child_process = require('child_process')
const { execFile } = child_process

const userInput = '.'

// execFile('ls',['-la',userInput],(error,stdout)=>{
//     console.log(stdout)
//     console.log(error)
// })

const streams = execFile('ls',['-la',userInput])
streams.stdout.on('data',(chunk)=>{
    console.log(chunk)
})