const child_process = require('child_process')
// 使用child.js创建子进程
var n = child_process.fork('./child.js')

n.on('message',function (m){
    console.log('父进程得到值',m)
})

n.send({hello:'world'})