const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

let current = 0;

const roundRobin = (servers, req, res) => {
    const target = servers[current];
    console.log(`Proxying request ${req.url} to ${target.host}:${target.port}`);
    current = (current + 1) % servers.length;

    proxy.web(req, res, {target: {host: target.host, port: target.port}});
}

module.exports = roundRobin