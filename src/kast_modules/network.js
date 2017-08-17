(function () {

    module.exports = function(socket) {

        this.socket = socket

        this.onUpdated = (callback) => {
            this.socket.register("network/updated", (params) => {
                callback(params)
            })
        }

        this.getInfo = () => {
            this.socket.send("network/get")
        }

        this.setInfo = (networkInfo) => {
            this.socket.send("network/set", networkInfo)
        }

        this.restart = () => {
            this.socket.send("network/restart")
        }
    }
})()