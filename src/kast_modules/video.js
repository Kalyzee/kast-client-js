(function () {

    module.exports = function (socket) {

        this.socket = socket

        this.onGetList = (callback) => {
            this.socket.register("video/list", (list) => {
                callback(list)
            })
        }

        this.onCurrentSession = (callback) => {
            this.socket.register("video/current_session", (session) => {
                callback(session)
            })
        }

        this.getList = () => {
            this.socket.send("video/list")
        }

        this.remove = (id) => {
            this.socket.send("video/remove", id)
        }

        this.update = (id, title) => {
            this.socket.send("video/update", {"id": id, "title": title})
        }
        
        this.startRecord = () => {
            this.socket.send("video/start_record")
        }

        this.stopRecord = () => {
            this.socket.send("video/stop_record")
        }

        this.currentSession = () => {
            this.socket.send("video/current_session")
        }

        this.setSessionTitle = () => {
            this.socket.send("video/set_session_title")
        }

        this.setSessionSpeaker = () => {
            this.socket.send("video/set_session_speaker")
        }
    }
})()