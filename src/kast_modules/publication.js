var Generator = require('../generator');
var Constants = require('../constants');

module.exports = function(socket) {

    this.events = [
        'get_live_data'
    ];

    this.actions = [
        Generator.createAction('get_live_data'),
        Generator.createAction('set_live_data'),
    ];

    return Generator.generate(socket, 'publication', this.events, this.actions);
}