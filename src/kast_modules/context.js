(function() {

    module.exports = function(socket) {

        this.socket = socket

        this.onUpdated = (callback) => {
            this.socket.register("context/updated", (message) => {
                callback(message)
            })
        }
    }


})()