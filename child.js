
process.on('message',function (m){
    console.log('子进程得到了主进程传过来的数据',m)
})
setTimeout(()=>{
    process.send({foo: 'bar'})
},2000)