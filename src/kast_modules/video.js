var Generator = require('../generator');

module.exports = function(socket) {

    this.events = [
        'list',
        'current_session',
        'live_error'
    ];

    this.actions = [
        Generator.createAction('list'),
        Generator.createAction('remove'),
        Generator.createAction('update'),
        Generator.createAction('start_record'),
        Generator.createAction('stop_record'),
        Generator.createAction('current_session'),
        Generator.createAction('set_session_title'),
        Generator.createAction('set_session_speaker'),
        Generator.createAction('usb_copy'),
        Generator.createAction('connector_copy'),
        Generator.createAction('dev/get_live_error'),
        Generator.createAction('save_record'),
    ];

    return Generator.generate(socket, 'video', this.events, this.actions);
}