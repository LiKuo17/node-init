const http = require("http");
const querystring = require("querystring")

const server = http.createServer((req, res)=>{
    //  GET请求
    // const method = req.method;
    // console.log('method',method);
    // const url = req.url;
    // console.log('url',url);
    // req.query = querystring.parse(url.split('?')[1]);
    // console.log('req.query',req.query);
    // res.end(
    //     JSON.stringify(req.query)
    // )

    //POST请求
    if(req.method === 'POST'){
        let postData = '';
        req.on('data', chunk => {
            postData += chunk.toString();
        })

        req.on('end', ()=>{
            console.log('postData',postData);
            res.end('数据接收完毕')
        })
        console.log('post data content type', req.headers['content-type']);
    }
})

server.listen(5000,()=>{
    console.log('server running at port 5000');
})