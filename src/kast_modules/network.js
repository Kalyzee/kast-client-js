(function () {

    module.exports = function(socket) {

        this.socket = socket

        this.onUpdated = (callback) => {
            this.socket.register("network/updated", (params) => {
                callback(params)
            })
        }

        this.get = () => {
            this.socket.send("network/get")
        }

        this.set = () => {
            this.socket.send("network/set")
        }

        this.restart = () => {
            this.socket.send("network/restart")
        }
    }
})()