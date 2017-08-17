(function() {

    module.exports = function(socket) {
        
        this.socket = socket

        this.onGetAlphaRGB = (callback) => {
            this.socket.register("mixer/get_alpha_rgb", (rgb) => {
                callback(rgb)
            })
        }

        this.onGetAlphaAngle = (callback) => {
            this.socket.register("mixer/get_alpha_angle", (angle) => {
                callback(angle)
            })
        }

        this.onGetAlphaBW = (callback) => {
            this.socket.register("mixer/get_alpha_bw", (bw) => {
                callback(bw)
            })
        }

        this.switchScene = () => {
            this.socket.send("mixer/switch_scene")
        }

        this.getAlphaRGB = () => {
            this.socket.send("mixer/get_alpha_rgb")
        }

        this.setAlphaRGB = () => {
            this.socket.send("mixer/set_alpha_rgb")
        }

        this.getAlphaAngle = () => {
            this.socket.send("mixer/get_alpha_angle")
        }

        this.setAlphaAngle = () => {
            this.socket.send("mixer/set_alpha_angle")
        }

        this.getAlphaBW = () => {
            this.socket.send("mixer/get_alpha_bw")
        }

        this.setAlphaBW = () => {
            this.socket.send("mixer/set_alpha_bw")
        }

        this.onSwitchSceneAction = (callback) => {
            this.socket.register('context/updated', (params) => {
                callback(params)
            })
        }
    }
})()