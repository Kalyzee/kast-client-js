var Generator = require('../generator');

module.exports = function(socket) {

    this.events = [
        'started', 'ended',
        'available', 'no_available'
    ];

    this.actions = [
        Generator.createAction('check'),
        Generator.createAction('start'),
        Generator.createAction('from_usb'),
    ];

    return Generator.generate(socket, 'update', this.events, this.actions);
}
