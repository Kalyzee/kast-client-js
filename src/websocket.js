const ReconnectingWebSocket = require('reconnecting-websocket');

let webSocketOptions = {
    maxReconnectionDelay: 2000,
    minReconnectionDelay: 1000,
    reconnectionDelayGrowFactor: 1,
    connectionTimeout: 1000,
    debug: false
};

(function () {
    var KastWebSocket = function (url = "ws://localhost:8000", webSocketConstructor) {
        var _this = this;

        if (webSocketConstructor)
            webSocketOptions.constructor = webSocketConstructor

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
            _this.isConnected = true
            if (_this.waitActionList.length > 0) {
                _this.waitActionList.forEach(function (action) {
                    _this.send(action.route, action.data);
                });
                _this.waitActionList.splice(0, _this.waitActionList.length);
            }

            _this.eventsOnOpen.forEach(function (cbObj) {
                const ctxCb = cbObj.cb.bind(cbObj.ctx || _this);
                ctxCb();
            });
        };

        this.onclose = function () {
            if (_this.isConnected) {
                _this.isConnected = false
                _this.eventsOnClose.forEach(function (cbObj) {
                    const ctxCb = cbObj.cb.bind(cbObj.ctx || _this);
                    ctxCb();
                });
            } else {
                // connection attempt failed
            }
        };

        this.onerror = function (error) {
            _this.eventsOnError.forEach(function (cbObj) {
                const ctxCb = cbObj.cb.bind(cbObj.ctx || _this);
                ctxCb(error.message);
            });
        };

        this.connect = function () {

            if (this.client && this.client.readyState < 2) {
                this.close(true);
            }

            this.client = new ReconnectingWebSocket(url, null, webSocketOptions);
            this.isConnected = false;
            this.client.onmessage = this.onmessage;
            this.client.onopen = this.onopen;
            this.client.onclose = this.onclose;
            this.client.onerror = this.onerror;
        };

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
            if (!this.client || this.client.readyState !== 1) {
                this.waitActionList.push({ "route": route, "data": data });
            } else {
                if (typeof data !== 'undefined') {
                    this.client.send(JSON.stringify({ "action": route, "params": data }));
                } else {
                    this.client.send(JSON.stringify({ "action": route }));
                };
            }
        };

        this.close = function (keepClosed = false) {
            this.client.close(1000, '', { keepClosed: keepClosed, fastClose: true, delay: 0 });
            if (_this.isConnected)
                this.waitActionList = [];
        };

        this.getClient = function () {
            return this.client;
        };

        // Creating websocket automatically (TODO)
        this.connect();
    };

    module.exports.KastWebSocket = KastWebSocket;
})();