(function () {

    module.exports = function(socket) {

        this.socket = socket

        this.deviceList = () => {
            this.socket.send("usbdevice/device_list")
        }

        this.copyVideo = () => {
            this.socket.send("usbdevice/copy_video")
        }

        this.deviceDirList = () => {
            this.socket.send("usbdevice/device_dir_list")
        }

        this.copyTemplate = () => {
            this.socket.send("usbdevice/copy_template")
        }

        this.copyBackground = () => {
            this.socket.send("usbdevice/copy_background")
        }
    }
})()