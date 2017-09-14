(function () {

    module.exports = function (socket) {
        this.socket = socket

        // Mixer constants
        this.scenes = {
            FULL: 0,
            SPEAKER: 1,
            SCREEN: 2,
            SPEAKER_SCREEN: 3,
            CHROMA_TEST: 4
        }

        this.onGetAlphaRGB = (callback) => {
            this.socket.register("mixer/get_alpha_rgb", (rgb) => {
                callback(rgb)
            })
        }

        // Chromatic
        this.onGetAlphaAngle = (callback) => {
            this.socket.register("mixer/get_alpha_angle", (angle) => {
                callback(angle)
            })
        }

        // Lightness
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

        this.saveAlphaRGB = (r, g, b) => {
            this.socket.send("mixer/save_alpha_rgb", { "r": r, "g": g, "b": b })
        }

        this.getAlphaAngle = () => {
            this.socket.send("mixer/get_alpha_angle")
        }

        this.setAlphaAngle = (angle) => {
            this.socket.send("mixer/set_alpha_angle", { "angle": angle })
        }

        this.saveAlphaAngle = (angle) => {
            this.socket.send("mixer/save_alpha_angle", { "angle": angle })
        }

        this.getAlphaBW = () => {
            this.socket.send("mixer/get_alpha_bw")
        }

        this.setAlphaBW = (black, white) => {
            this.socket.send("mixer/set_alpha_bw", { "black": black, "white": white })
        }

        this.saveAlphaBW = (black, white) => {
            this.socket.send("mixer/save_alpha_bw", { "black": black, "white": white })
        }
    }
})()