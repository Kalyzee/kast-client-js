(function () {

    module.exports = function (socket) {

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

        this.switchScene = (scene_id) => {
            this.socket.send("mixer/switch_scene", { "scene_id": scene_id })
        }

        this.getAlphaRGB = () => {
            this.socket.send("mixer/get_alpha_rgb")
        }

        this.setAlphaRGB = (r, g, b) => {
            this.socket.send("mixer/set_alpha_rgb", { "r": r, "g": g, "b": b })
        }

        this.getAlphaAngle = () => {
            this.socket.send("mixer/get_alpha_angle")
        }

        this.setAlphaAngle = (angle) => {
            this.socket.send("mixer/set_alpha_angle", { "angle": angle })
        }

        this.getAlphaBW = () => {
            this.socket.send("mixer/get_alpha_bw")
        }

        this.setAlphaBW = (black, white) => {
            this.socket.send("mixer/set_alpha_bw", { "black": black, "white": white })
        }
    }
})()