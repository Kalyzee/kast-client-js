(function () {

    module.exports = function (socket) {

        this.socket = socket;

        this.onOpen = (callback, ctx) => {
            this.socket.registerOnOpen(callback, ctx)
        };

        this.onClose = (callback, ctx) => {
            this.socket.registerOnClose(callback, ctx)
        };

        this.onError = (callback, ctx) => {
            this.socket.registerOnError(callback, ctx)
        };
    }
})()