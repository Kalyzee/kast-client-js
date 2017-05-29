exports['test webservices'] = require("./webservice-test.js");
exports['test websockets'] = require("./websocket-test.js");
exports['test client'] = require("./client-test.js");


if (require.main === module)
    require("test").run(exports);
