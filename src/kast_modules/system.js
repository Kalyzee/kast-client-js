var Generator = require('../generator');

module.exports = function(socket) {

    this.events = [
        'notification_success', 'notification_error',, 'notification_alert',
        'long_process', 'long_process_ended',
        'success', 'error', 'free_space', 'about'
    ];

    this.actions = [
        Generator.createAction('get_free_space'),
        Generator.createAction('shutdown'),
        Generator.createAction('reboot'),
        Generator.createAction('about'),
        Generator.createAction('set_time'),
        Generator.createAction('factory_reset')
    ];

    return Generator.generate(socket, 'system', this.events, this.actions);
}
