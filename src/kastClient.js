let socket = require('./websocket')
let Camera = require('./kast_modules/camera')
let Mixer = require('./kast_modules/mixer')
let Audio = require('./kast_modules/audioManagement')
let Usb = require('./kast_modules/usbManagement')
let Logo = require('./kast_modules/logo')
let Background = require('./kast_modules/background')
let Video = require('./kast_modules/video')
let Network = require('./kast_modules/network')
let Update = require('./kast_modules/update')
let System = require('./kast_modules/system')
let Context = require('./kast_modules/context')


module.exports = function (url) {

    this.socket = new socket.KastWebSocket(url)

    this.camera = new Camera(this.socket)
    this.mixer = new Mixer(this.socket)
    this.audio = new Audio(this.socket)
    this.usb = new Usb(this.socket)
    this.logo = new Logo(this.socket)
    this.background = new Background(this.socket)
    this.video = new Video(this.socket)
    this.network = new Network(this.socket)
    this.update = new Update(this.socket)
    this.system = new System(this.socket)
    this.context = new Context(this.socket)
}

