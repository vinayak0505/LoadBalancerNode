const http = require('http');
const roundRobin = require('./Algo/roundRobin');
const serverConfig = require('./config.json').servers;

const servers = serverConfig.map((server) => ({
    ...server
}))

const loadBalancingAlgorithm = 'roundRobin';

const server = http.createServer((req, res) => {
    switch (loadBalancingAlgorithm) {
        case 'roundRobin':
            roundRobin(servers, req, res);
            break;

        default:
            res.writeHead(500);
            res.end('Invalid load balancing algorithm');
            break;
    }
})

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
