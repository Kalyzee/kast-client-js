var Generator = require('../generator');

module.exports = function(socket) {

    this.events = [
        'tmp_from_usb',
        'available', 'no_available',
        'update_copy_start', 'update_copy_progress', 'update_copy_end', 'update_copy_error',
        'download_start', 'download_progress', 'download_end', 'download_error',
        'update_start', 'update_progress', 'update_end', 'update_error',

    ];

    this.actions = [
        Generator.createAction('check'),
        Generator.createAction('from_usb'),
        Generator.createAction('from_repository'),
    ];

    return Generator.generate(socket, 'update', this.events, this.actions);
}