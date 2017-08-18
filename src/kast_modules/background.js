(function () {

    module.exports = function (socket) {

        this.socket = socket

        this.get = () => {
            this.socket.send("background/get")
        }

        this.getCurrent = () => {
            this.socket.send("background/get_current")
        }

        this.set = (logo) => {
            this.socket.send("background/set", {"background": logo})
        }

        this.remove = (logo) => {
            this.socket.send("background/remove", { "background": logo })
        }
    }
})()