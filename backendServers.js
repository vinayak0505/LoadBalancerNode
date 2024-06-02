const http = require('http');
const serverConfig = require('./config.json').servers;

const createServer = (host, port) => {
    http.createServer((req, res) => {
        res.writeHead(200)
        res.end(`Server reponse from port: ${port}`)
    }).listen(port, host, ()=> {
        console.log(`Server running at http://${host}:${port}/`);
    })
}

serverConfig.forEach((server) => {
    const {host, port} = server
    createServer(host, port)
})