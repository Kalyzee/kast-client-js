var Generator = require('../generator');

module.exports = function(socket) {

    this.events = [
        'copy_file', 'started', 'ended',
        'available', 'no_available',
        'update_progress'
    ];

    this.actions = [
        Generator.createAction('check'),
        Generator.createAction('start'),
        Generator.createAction('from_usb'),
        Generator.createAction('from_repository'),
    ];

    return Generator.generate(socket, 'update', this.events, this.actions);
}
