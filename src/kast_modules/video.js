var Generator = require('../generator');

module.exports = function(socket) {

    this.events = [
        'list',
        'current_session',
        'live_error',
        'sdp_offer',
        'ice_candidate'
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
        Generator.createAction('start_preview'),
        Generator.createAction('send_sdp_answer'),
        Generator.createAction('send_ice_candidate'),
        Generator.createAction('stop_preview')
    ];

    return Generator.generate(socket, 'video', this.events, this.actions);
}