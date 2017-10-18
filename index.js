let socket = require('./src/websocket');

let Camera = require('./src/kast_modules/camera');
let Editing = require('./src/kast_modules/editing');
let Mixer = require('./src/kast_modules/mixer');
let Audio = require('./src/kast_modules/audioManagement');
let Usb = require('./src/kast_modules/usbManagement');
let Logo = require('./src/kast_modules/logo');
let Background = require('./src/kast_modules/background');
let Video = require('./src/kast_modules/video');
let Publication = require('./src/kast_modules/publication');
let Network = require('./src/kast_modules/network');
let Update = require('./src/kast_modules/update');
let Context = require('./src/kast_modules/context');
let System = require('./src/kast_modules/system');
let Connection = require('./src/kast_modules/connection');

module.exports = function (url, websocket) {

    this.socket = new socket.KastWebSocket(url, websocket);
    
    this.camera = new Camera(this.socket);
    this.editing = new Editing(this.socket);
    this.mixer = new Mixer(this.socket);
    this.audio = new Audio(this.socket);
    this.usb = new Usb(this.socket);
    this.logo = new Logo(this.socket);
    this.background = new Background(this.socket);
    this.video = new Video(this.socket);
    this.publication = new Publication(this.socket);
    this.network = new Network(this.socket);
    this.update = new Update(this.socket);
    this.context = new Context(this.socket);
    this.system = new System(this.socket);
    this.connection = new Connection(this.socket);
};