var Generator = require('../generator');

module.exports = function(socket) {

    this.events = [
        'list',
        'current_session'
    ];

    this.actions = [
        Generator.createAction('list'),
        Generator.createAction('remove'),
        Generator.createAction('update'),
        Generator.createAction('start_record'),
        Generator.createAction('stop_record'),
        Generator.createAction('current_session'),
        Generator.createAction('set_session_title'),
        Generator.createAction('set_session_speaker')
    ];

    return Generator.generate(socket, 'video', this.events, this.actions);
}