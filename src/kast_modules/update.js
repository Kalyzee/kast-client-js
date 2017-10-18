var Generator = require('../generator');

module.exports = function(socket) {

    this.events = [
        'start',
        'update_available', 'no_update_available'
    ];

    this.actions = [
        Generator.createAction('check')
    ];

    return Generator.generate(socket, 'update', this.events, this.actions);
}
