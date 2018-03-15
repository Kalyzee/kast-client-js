var Generator = require('../generator');

module.exports = function(socket) {

    this.events = [
        'copy_file',
        'available', 'no_available',
        'download_start', 'download_progress', 'download_end', 'download_error',
        'update_start', 'update_progress', 'update_end', 'update_error',

    ];

    this.actions = [
        Generator.createAction('check'),
        Generator.createAction('start'),
        Generator.createAction('from_usb'),
        Generator.createAction('from_repository'),
    ];

    return Generator.generate(socket, 'update', this.events, this.actions);
}
