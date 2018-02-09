const ReconnectingWebSocket = require('reconnecting-websocket');

const webSocketOptions = {
    maxReconnectionDelay: 3000,
    minReconnectionDelay: 500,
    connectionTimeout: 5000
};

(function () {
    var KastWebSocket = function (url = "ws://localhost:8000") {
        var _this = this;

        this.events = {};
        this.eventsOnOpen = [];
        this.eventsOnClose = [];
        this.eventsOnError = [];
        this.waitActionList = [];

        /* Websocket Events Callbacks */
        this.onmessage = function (event) {
            const jsdata = JSON.parse(event.data);
            _this.fireEvent(jsdata.action, jsdata.params);
        };
        this.onopen = function () {
            if (_this.waitActionList.lenght > 0) {
                _this.waitActionList.forEach(function (action) {
                    _this.send(action.route, action.data);
                });
                _this.waitActionList = [];
            }

            _this.eventsOnOpen.forEach(function (cbObj) {
                const ctxCb = cbObj.cb.bind(cbObj.ctx || _this);
                ctxCb();
            });
        };
        this.onclose = function () {
            _this.eventsOnClose.forEach(function (cbObj) {
                const ctxCb = cbObj.cb.bind(cbObj.ctx || _this);
                ctxCb();
            });
        };
        this.onerror = function (error) {
            _this.eventsOnError.forEach(function (cbObj) {
                const ctxCb = cbObj.cb.bind(cbObj.ctx || _this);
                ctxCb(error.message);
            });
        }

        this.connect = function () {

            if (this.client && this.client.readyState < 2) {
                console.log("Closing old connection")
                this.close(true)
            }

            this.client = new ReconnectingWebSocket(url, [], webSocketOptions);
            this.client.onmessage = this.onmessage
            this.client.onopen = this.onopen
            this.client.onclose = this.onclose
            this.client.onerror = this.onerror
        }

        this.fireEvent = function (eventName, params) {
            if (this.events[eventName]) {
                this.events[eventName].forEach(function (cbObj) {
                    const ctxCb = cbObj.cb.bind(cbObj.ctx || _this);
                    ctxCb(params);
                });
            }
        };

        this.register = function (eventName, callback, ctx) {
            if (!this.events[eventName]) {
                this.events[eventName] = [];
            }

            this.events[eventName].push({
                cb: callback,
                ctx: ctx
            });
        };

        this.registerOnOpen = function (callback, ctx) {
            this.eventsOnOpen.push({
                cb: callback,
                ctx: ctx
            });
        };

        this.registerOnClose = function (callback, ctx) {
            this.eventsOnClose.push({
                cb: callback,
                ctx: ctx
            });
        };

        this.registerOnError = function (callback, ctx) {
            this.eventsOnError.push({
                cb: callback,
                ctx: ctx
            });
        }

        this.unregister = function (eventName, callback) {
            var id_del = -1;
            this.events[eventName].forEach(function (cbObj, index) {
                if (cbObj.cb === callback) {
                    id_del = index;
                }
            });

            if (id_del >= 0)
                delete this.events[eventName][id_del];
        };


        this.send = function (route, data) {
            if (this.client.readyState === 1) {
                if (typeof data !== 'undefined') {
                    this.client.send(JSON.stringify({ "action": route, "params": data }));
                } else {
                    this.client.send(JSON.stringify({ "action": route }));
                };
            } else {
                this.waitActionList.push({ "route": route, "data": data });
            };
        };

        this.close = function (keepClosed = false) {
            this.client.close(1000, '', { keepClosed: keepClosed, fastClose: true, delay: 0 });
            this.waitActionList = [];
        };

        this.getClient = function () {
            return this.client;
        };


        // Creating websocket automatically (TODO)
        this.connect()
    };

    module.exports.KastWebSocket = KastWebSocket;

})();