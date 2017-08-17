(function() {

    module.exports = function(socket) {

        this.socket = socket

        this.onUpdateStart = (callback) => {
            this.socket.register("update/start", () => {
                callback()
            })
        }

        this.onUpdateAvailable = (callback) => {
            this.socket.register("update/update_available", () => {
                callback()
            })
        }

        this.onNoUpdateAvailable = (callback) => {
            this.socket.register("update/no_update_available", () => {
                callback()
            })
        }

        this.onCheckupdate = (callback) => {
            this.socket.register("update/")
        }

        this.check = () => {
            this.socket.send("update/check")
        }
    }
})()