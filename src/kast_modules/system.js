(function () {

    module.exports = function (socket) {

        this.socket = socket

        this.onLongProcess = (callback) => {
            this.socket.register("system/long_process", (message) => {
                callback(message)
            })
        }

        this.onLongProcessEnd = (callback) => {
            this.socket.register("system/long_process_ended", (message) => {
                callback(message)
            })
        }

        this.onSuccess = (callback) => {
            this.socket.register("system/notification_success", (message) => {
                callback(message)
            })
        }

        this.onError = (callback) => {
            this.socket.register("system/error", (message) => {
                callback(message)
            })
        }
    }
})()