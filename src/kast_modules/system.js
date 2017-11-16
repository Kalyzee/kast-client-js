var Generator = require('../generator');

module.exports = function(socket) {

    this.events = [
        'notification_success', 'notification_error',
        'long_process', 'long_process_ended',
        'success', 'error', 'free_space'
    ];

    this.actions = [
        Generator.createAction('get_free_space'),
    ];

    return Generator.generate(socket, 'system', this.events, this.actions);
}
