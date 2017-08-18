(function () {

    /**
    *
    */

    var KastWebSocket = function (url, _WebSocket) {

        if (typeof (_WebSocket) == "function")
            WebSocket = _WebSocket

        var _this = this;
        _this.url = typeof url !== 'undefined' ? url : 'ws://localhost:8000';
        _this.client = new WebSocket(_this.url);
        _this.events = {};
        _this.waitActionList = [];

        _this.client.onmessage = function (event) {
            /**
            *	Method called when WS Server send a message
            *	Examples :
            *             - Changes in scenes
            *			  - Changes in camera mode
            *	Format :
            *			{ type: 'message-type', params : {} }
            */
            //var message = event.data;

            /** Cases :
            1 - type : "scene-changed"
            2 -
        */
            var jsdata = JSON.parse(event.data);
            _this.fireEvent(jsdata.action, jsdata.params);
        };

        _this.fireEvent = function (eventName, params) {
            if (_this.events[eventName]) {

                this.events[eventName].forEach(function (cb) {
                    cb(params);
                });
            }
        };

        _this.register = function (eventName, callback) {
            if (!this.events[eventName]) {
                this.events[eventName] = [];
            }
            this.events[eventName].push(callback);
        };

        _this.unregister = function (eventName, callback) {

            var id_del = -1;
            this.events[eventName].forEach(function (cb, index) {
                if (cb === callback) id_del = index;
            });
            if (id_del >= 0) delete this.events[eventName][id_del];

        };


        _this.send = function (route, data) {

            if (this.client.readyState == 1) {
                if (typeof data !== 'undefined') {
                    this.client.send(JSON.stringify({ "action": route, "params": data }));
                } else {
                    this.client.send(JSON.stringify({ "action": route }));
                };
            }
            else {
                var action = {
                    route: route,
                    data, data
                };
                this.waitActionList.push(action)
            };
        };

        _this.close = function () {
            this.client.close();
        };

        _this.readyState = function () {
            return this.client.readyState;
        };


        _this.client.onopen = () => {
            _this.waitActionList.forEach(function (action) {
                _this.send(action.route, action.data)
            })
            delete _this.waitActionList
        };
    };

    module.exports.KastWebSocket = KastWebSocket;

})();