function snakeToCamel(event) {
    var snaked = '';
    for (var i = 0; i < event.length; i++) {
        var char = event.charAt(i);
        var previousChar = event.charAt(i - 1);

        if (previousChar === '_')
            snaked += char.toUpperCase();

        else if (char !== '_')
            snaked += char;
    }

    return snaked;
}

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

module.exports = {
    generate: function (socket, prefix, events, actions) {
        var ModuleClass = {};
        var routeSeparator = '/';

        // Events handling
        for (var i = 0; i < events.length; i++) {
            const event = events[i];
            const route = [prefix, event].join(routeSeparator);

            // onEvent... | Registering
            ModuleClass[snakeToCamel('on_' + event)] = function (callback, ctx) {
                socket.register(route, callback, ctx);
            };

            // offEvent... | Unregistering
            ModuleClass[snakeToCamel('off_' + event)] = function (callback) {
                socket.unregister(route, callback);
            };
        }

        // Actions handling
        for (var i = 0; i < actions.length; i++) {

            const action = actions[i];
            const route = [prefix, action.name].join(routeSeparator);

            let routePrefixes = action.name.split('/');

            // Creating sub-children (ex : Module.dev.func())
            let currentRoute = ModuleClass;

            while (routePrefixes.length > 1) {
                const routePrefix = routePrefixes.shift();
                if (!currentRoute[routePrefix])
                    currentRoute[routePrefix] = {};

                currentRoute = currentRoute[routePrefix];
            }

            const actionName = snakeToCamel(routePrefixes[0]);
            currentRoute[actionName] = function () {
                this.route = route;
                socket.send(route, arguments[0] || {});
            };
        }

        return ModuleClass;
    },

    createAction: function (name, args) {
        return {
            name: name,
            args: args || []
        };
    }
};