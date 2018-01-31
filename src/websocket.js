(function () {

    /**
    *
    */

    var KastWebSocket = function (url, _WebSocket) {

        if (typeof (_WebSocket) == "function")
            WebSocket = _WebSocket

        var _this = this;
        _this.url = typeof url !== 'undefined' ? url : 'ws://localhost:8000';

        _this.events = {};
        _this.eventsOnOpen = [];
        _this.eventsOnClose = [];
        _this.waitActionList = [];

        _this.client = undefined;

        _this.connectIfNeeded = function () {

            if (!_this.client) {

                // Cleaning old one
                if (_this.client) {
                    _this.client.onopen = function() {}
                    _this.client.onClose = function() {}
                    _this.client.close()
                }

                // Creating new one
                _this.client = new WebSocket(_this.url);

                _this.client.onmessage = function (event) {
                    const jsdata = JSON.parse(event.data);
                    _this.fireEvent(jsdata.action, jsdata.params);
                };

                _this.client.onopen = () => {
                    _this.waitActionList.forEach(function (action) {
                        _this.send(action.route, action.data);
                    });
                    _this.waitActionList.splice(0, _this.waitActionList.length - 1);

                    _this.eventsOnOpen.forEach(function (cbObj) {
                        const ctxCb = cbObj.cb.bind(cbObj.ctx || this);
                        ctxCb();
                    });
                };

                _this.client.onclose = () => {
                    _this.eventsOnClose.forEach(function (cbObj) {
                        const ctxCb = cbObj.cb.bind(cbObj.ctx || this);
                        ctxCb();
                    });
                };

                _this.client.onError = (error) => {
                    console.log('WS Error :', error)
                }

                setTimeout(() => {
                    if (_this.client.readyState !== 1) {
                        _this.client.close();
                        _this.client = undefined;
                        _this.connectIfNeeded();
                    }
                }, 2000);
            }
        };

        _this.fireEvent = function (eventName, params) {
            if (_this.events[eventName]) {
                _this.events[eventName].forEach(function (cbObj) {
                    const ctxCb = cbObj.cb.bind(cbObj.ctx || this);
                    ctxCb(params);
                });
            }
        };

        _this.register = function (eventName, callback, ctx) {
            if (!_this.events[eventName]) {
                _this.events[eventName] = [];
            }

            _this.events[eventName].push({
                cb: callback,
                ctx: ctx
            });
        };

        _this.registerOnOpen = function (callback, ctx) {
            _this.eventsOnOpen.push({
                cb: callback,
                ctx: ctx
            });
        };

        _this.registerOnClose = function (callback, ctx) {
            _this.eventsOnClose.push({
                cb: callback,
                ctx: ctx
            });
        };

        _this.unregister = function (eventName, callback) {
            var id_del = -1;
            _this.events[eventName].forEach(function (cbObj, index) {
                if (cbObj.cb === callback) {
                    id_del = index;
                }
            });
            if (id_del >= 0) delete _this.events[eventName][id_del];
        };


        _this.send = function (route, data) {
            if (_this.readyState() === 1) {
                if (typeof data !== 'undefined') {
                    _this.client.send(JSON.stringify({ "action": route, "params": data }));
                } else {
                    _this.client.send(JSON.stringify({ "action": route }));
                };
            } else {
                var action = {
                    route: route,
                    data, data
                };
                _this.waitActionList.push(action);
            };
        };

        _this.close = function () {
            if (_this.readyState() == 1) {
                _this.client.close();
                _this.client = undefined;
            }
        };

        _this.readyState = function () {
            return _this.client.readyState;
        };

        _this.getClient = function () {
            return _this.client;
        };
    };

    module.exports.KastWebSocket = KastWebSocket;

})();