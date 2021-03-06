var Generator = require('../generator');

module.exports = function(socket) {

    this.events = [
        'list', 'get_current', 'set'
    ];

    this.actions = [
        Generator.createAction('get'),
        Generator.createAction('get_current'),
        Generator.createAction('set'),
        Generator.createAction('remove'),
        Generator.createAction('usb_copy')
    ];

    return Generator.generate(socket, 'watermark', this.events, this.actions);
}