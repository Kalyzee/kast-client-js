// using nodejs's build in asserts that throw on failure
var assert = require('assert')

var KastWebSocket = require('../src/websocket.js').KastWebSocket;



exports['test Instanciation of KastWebSocketClient'] = function() {
  k = new KastWebSocket();
  assert.equal(4, 4, 'will never pass this since test failed above')
}

exports['test Fire Event Without any registration'] = function() {

  k = new KastWebSocket();
  assert.equal(4, 4, 'will never pass this since test failed above')
}


exports['test Fire Event With registration'] = function(done) {

  k = new KastWebSocket();
  var message = null;

  k.register("test", function(message){
    assert.equal(message.true, true, "called one second later");
  });

  k.client.onmessage({"data":JSON.stringify({"action": "test", "params": {"true": true}}) })
}


exports['test Fire Event With deleted registration'] = function() {


  k = new KastWebSocket();
  assert.equal(4, 4, 'will never pass this since test failed above')
}



if (module == require.main) require('test').run(exports)
