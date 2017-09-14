(function () {

    module.exports = function (socket) {

        this.socket = socket

        this.onOpen = (callback) => {
            this.socket.getClient().onopen = (openData) => {
                callback(openData)
            }
        }

        this.onClose = (callback) => {
            this.socket.getClient().onclose = (closeData) => {
                callback(closeData)
            }
        }
    }
})()