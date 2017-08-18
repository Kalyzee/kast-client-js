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

        this.set = (logo) => {
            this.socket.send("logo/set", {"logo": logo})
        }

        this.remove = (logo) => {
            this.socket.send("logo/remove", {"logo": logo })
        }
    }
})()