var Generator = require('../generator');

module.exports = function(socket) {

    this.events = [
        'context'
    ];

    this.actions = [
        Generator.createAction('context'),
        Generator.createAction('volume_up'),
        Generator.createAction('volume_down'),
        Generator.createAction('boost_up'),
        Generator.createAction('boost_down'),
        Generator.createAction('set_source'),
        Generator.createAction('toggle_mute')
    ];

    return Generator.generate(socket, 'audio', this.events, this.actions);
}