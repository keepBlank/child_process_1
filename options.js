const child_process = require('child_process')
const { execFile } = child_process

const userInput = '.'

execFile('ls',['-la',userInput],{
    cwd: 'C:\\'
},(error,stdout)=>{
    console.log(error)
    console.log(stdout)
})
