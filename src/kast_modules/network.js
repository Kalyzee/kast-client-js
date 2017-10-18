var Generator = require('../generator');
var Constants = require('../constants');

module.exports = function(socket) {

    this.events = [
        'get_live_data', 'updated'
    ];

    this.actions = [
        Generator.createAction('switch_scene', ['scene_id']),

        Generator.createAction('get'),
        Generator.createAction('set'),
        Generator.createAction('restart'),
    ];

    return Generator.generate(socket, 'network', this.events, this.actions);
}