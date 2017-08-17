(function() {

    module.exports = function(socket) {

        this.socket = socket

        this.get = () => {
            this.socket.send("background/get")
        }

        this.getCurrent = () => {
            this.socket.send("background/get_current")
        }

        this.set = () => {
            this.socket.send("background/set")
        }

        this.remove = () => {
            this.socket.send("background/remove")
        }
    }
})()