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

        this.getLiveData = () => {
            this.socket.send("publication/get_live_data", {});
        }

        this.setLiveData = (liveData) => {
            this.socket.send("publication/set_live_data", liveData);
        }

        this.onLiveData = (callback) => {
            this.socket.register("publication/get_live_data", (params) => {
                callback(params)
            })
        }
    }
})()