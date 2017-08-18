(function () {

    module.exports = function (socket) {

        this.socket = socket

        this.onContext = (callback) => {
            this.socket.register("audio/context", (context) => {
                callback(context)
            })
        }

        this.context = () => {
            this.socket.send("audio/context", {})
        }
    
        this.volumeUp = () => {
            this.socket.send("audio/volume_up", {})
        }

        this.volumeDown = () => {
            this.socket.send("audio/volume_down", {})
        }

        this.boostUp = () => {
            this.socket.send("audio/boost_up", {})
        }

        this.boostDown = () => {
            this.socket.send("audio/boost_down", {})
        }

        this.setSource = (source) => {
            this.socket.send("audio/set_source",{"source":source})
        }

        this.toggleMute = () => {
            this.socket.send("audio/toggle_mute")
        }
    }
})()