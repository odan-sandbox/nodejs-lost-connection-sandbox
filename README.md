# nodejs-lost-connection-sandbox


```bash
$ yarn --silent start
[Server] [1586191813773] start listen
[client] [1586191814762] request
[Server] [1586191814772] on request
[Server] [1586191814772] counter: 1
[Server] [1586191815075] counter: 2
[Server] [1586191815377] counter: 3
[Server] [1586191815680] counter: 4
[client] [1586191815773] timeout
[Server] [1586191815775] request close
Error: socket hang up
    at connResetException (internal/errors.js:561:14)
    at Socket.socketCloseListener (_http_client.js:380:25)
    at Socket.emit (events.js:215:7)
    at Socket.EventEmitter.emit (domain.js:476:20)
    at TCP.<anonymous> (net.js:658:12)
[Server] [1586191815984] counter: 5
[Server] [1586191816285] counter: 6
[Server] [1586191816590] counter: 7
[Server] [1586191816893] counter: 8
[Server] [1586191817197] counter: 9
[Server] [1586191817498] counter: 10
```

## Reference
http://hylom.net/node-http-request-get-and-timeout