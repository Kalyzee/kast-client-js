var Generator = require('../generator');
var Constants = require('../constants');

module.exports = function(socket) {

    this.events = [
        'device_added', 'device_removed',
        'device_list', 'device_dir_list',
        'copy_template', // NOT READY YET SERVER SIDE
        'copy_background', // NOT READY YET SERVER SIDE
        'copy_progress'
    ];

    this.actions = [
        Generator.createAction('device_list'),
        Generator.createAction('device_dir_list'),

        Generator.createAction('copy_template'),
        Generator.createAction('copy_background'),
        Generator.createAction('copy_video')
    ];

    return Generator.generate(socket, 'usbdevice', this.events, this.actions);
}