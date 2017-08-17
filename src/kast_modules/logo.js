(function () {

    module.exports = function(socket) {

        this.socket = socket

        this.onLogoList = (callback) => {
            this.socket.register("logo/list", (logoList) => {
                callback(logoList)
            })
        }

        this.onCurrentLogo = (callback) => {
            this.socket.register("logo/get_current", (currentLogo) => {
                callback(currentLogo)
            })
        }

        this.onSetLogo = (callback) => {
            this.socket.register("logo/set", (params) => {
                callback(params)
            })
        }

        this.get = () => {
            this.socket.send("logo/get")
        }
        
        this.getCurrent = () => {
            this.socket.send("logo/get_current")
        }

        this.set = () => {
            this.socket.send("logo/set")
        }

        this.remove = () => {
            this.socket.send("logo/remove")
        }
    }
})()