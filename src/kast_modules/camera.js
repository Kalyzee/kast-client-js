(function () {

    module.exports = function(socket) {
        this.socket = socket

        this.zoomIn = () => {
            this.socket.send("camera/zoom_in")
        }

        this.zoomOut = () => {
            this.socket.send("camera/zoom_out")
        }

        this.zoomStop = () => {
            this.socket.send("camera/zoom_stop")
        }

        this.up = () => {
            this.socket.send("camera/up")
        }

        this.down = () => {
            this.socket.send("camera/down")
        }

        this.left = () => {
            this; socket.send("camera/left")
        }

        this.right = () => {
            this.socket.send("camera/right")
        }

        this.startUp = () => {
            this.socket.send("camera/start_up")
        }

        this.startDown = () => {
            this.socket.send("camera/start_down")
        }

        this.startLeft = () => {
            this.socket.send("camera/start_left")
        }

        this.startRight = () => {
            this.socket.send("camera/start_right")
        }

        this.stop = () => {
            this.socket.send("camera/stop")
        }

        this.bigUp = () => {
            this.socket.send("camera/big_up")
        }

        this.bigDown = () => {
            this.socket.send("camera/big_down")
        }

        this.bigLeft = () => {
            this.socket.send("camera/big_left")
        }

        this.bigRight = () => {
            this.socket.send("camera/big_right")
        }

        this.setSpeakerView = () => {
            this.socket.send("camera/set_speaker_view")
        }

        this.goToSpeakerView = () => {
            this.socket.send("camera/go_to_speaker_view")
        }

        this.setFullView = () => {
            this.socket.send("camera/set_full_view")
        }

        this.goToFullView = () => {
            this.socket.send("camera/go_to_full_view")
        }

        this.setMediumView = () => {
            this.socket.send("camera/set_medium_view")
        }

        this.goToMediumView = () => {
            this.socket.send("camera/go_to_medium_view")
        }

        this.setTrackingZone = () => {
            this.socket.send("camera/set_tracking_zone")
        }

        this.endSettingTrackingZone = () => {
            this.socket.send("camera/end_setting_tracking_zone")
        }

        this.startTracking = () => {
            this.socket.send("camera/start_tracking")
        }

        this.stopTracking = () => {
            this.socket.send("camera/stop_tracking")
        }

        this.mouseUp = () => {
            this.socket.send("camera/mouse_up")
        }

        this.mouseDown = () => {
            this.socket.send("camera/mouse_down")
        }

        this.mousePosition = (x, y) => {
            this.socket.send("camera/mouse_position", {'posX': x, 'posY': y})
        }

        this.createRoom = (name) => {
            this.socket.send("camera/create_room", name)
        }

        this.deleteRoom = (name) => {
            this.socket.send("camera/delete_room", name)
        }

        this.setRoom = (name) => {
            this.socket.send("camera/set_room", name)
        }

        this.onSetRoom = (callback) => {
            this.socket.register("camera/set_room", (room) => {
                callback(room)
            })
        }

        this.getRoomList = () => {
            this.socket.send("camera/get_room_list")
        }

        this.onGetRoomList = (callback) => {
            this.socket.register("camera/get_room_list", (roomList) => {
                callback(roomList)
            })
        }

        this.getCurrentRoom = () => {
            this.socket.send("camera/get_current_room")
        }

        this.onGetCurrentRoom = (callback) => {
            this.socket.register("camera/get_current_room", (currentRoom) => {
                callback(currentRoom)
            })
        }
    }
})()




