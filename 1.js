const child_process = require('child_process')
const { exec } = child_process
const util = require('util')

const  exec2 = util.promisify(exec)
const userInput = '. && pwd'

exec2(`ls ${userInput}`).then(data =>{
    console.log(data.stdout)
})

exec2('ls ../')
    .then((data)=>{
        console.log(data.stdout)
    })
// exec('ls ../',(error,stdout,stderr)=>{
//     console.log(error)
//     console.log(stdout)
//     console.log(stderr)
// })

// const streams = exec('ls -l ../')
// streams.stdout.on('data',(chunk)=>{
//     console.log(chunk)
// })
// streams.stderr.on('data')
