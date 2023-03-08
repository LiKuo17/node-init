const http = require("http")
const querystring = require('querystring')

const server = http.createServer((req,res)=>{
    
    const url = req.url;
    const method = req.method ;
    const path = url.split('?')[0];
    const query = querystring.parse(url.split('?')[1]);

    //响应数据
    const responseData = {
        method,
        path,
        url,
        query,
    }

    res.setHeader('Content-Type','application/json')

    if(method === 'GET') {
        res.end(
            JSON.stringify(responseData)
        )
    }
    if(method === 'POST'){
        let postData = '';
        req.on('data', chunk => {
            postData += chunk.toString();
        })
        req.on('end', ()=>{
            responseData.postData = postData;
            res.end(JSON.stringify(responseData))
        })
    }
})

server.listen(3002,()=>{
    console.log('启动成功');
})