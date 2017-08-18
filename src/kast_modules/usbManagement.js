(function () {

    module.exports = function(socket) {

        this.socket = socket

        this.deviceList = () => {
            this.socket.send("usbdevice/device_list")
        }

        this.copyVideo = () => {
            this.socket.send("usbdevice/copy_video")
        }

        this.deviceDirList = (id, path) => {
            this.socket.send("usbdevice/device_dir_list", {"device_id": id, "path": path})
        }

        this.copyTemplate = (id, path) => {
            this.socket.send("usbdevice/copy_template", {"device_id": id, "path": path})
        }

        this.copyBackground = (id, path) => {
            this.socket.send("usbdevice/copy_background", {"device_id": id, "path": path})
        }
    }
})()