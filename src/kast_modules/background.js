(function () {

    module.exports = function (socket) {

        this.socket = socket

        this.onBackgroundList = (callback) => {
            this.socket.register("background/list", (bgList) => {
                callback(bgList)
            })
        }

        this.onCurrentBackground = (callback) => {
            this.socket.register("background/get_current", (currentBg) => {
                callback(currentBg)
            })
        }

        this.onSetBackground = (callback) => {
            this.socket.register("background/set", (params) => {
                callback(params)
            })
        }

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