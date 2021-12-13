var Generator = require('../generator');

module.exports = function(socket) {

    this.events = [
        'context'
    ];

    this.actions = [
        Generator.createAction('context'),

        Generator.createAction('set_input_gain'),
        Generator.createAction('set_input_toggled'),

        Generator.createAction('set_child_level'),

        Generator.createAction('set_output_volume'),
        Generator.createAction('set_output_toggled'),

        Generator.createAction('set_input_to_output'),

        // Legacy :
        Generator.createAction('volume_up'),
        Generator.createAction('volume_down'),
        Generator.createAction('boost_up'),
        Generator.createAction('boost_down'),
        Generator.createAction('set_source'),
        Generator.createAction('toggle_mute'),
        Generator.createAction('set_volume'),
        Generator.createAction('save_volume'),
    ];

    return Generator.generate(socket, 'audio', this.events, this.actions);
}