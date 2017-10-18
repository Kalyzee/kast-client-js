var Generator = require('../generator');

module.exports = function(socket) {

    this.events = [
        'notification_success', 'notification_error',
        'long_process', 'long_process_ended',
        'success', 'error'
    ];

    this.actions = [];

    return Generator.generate(socket, 'system', this.events, this.actions);
}
