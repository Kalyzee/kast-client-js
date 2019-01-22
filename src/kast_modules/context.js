var Generator = require('../generator');

module.exports = function (socket) {

    this.events = ['updated'];
    this.actions = [Generator.createAction('get')];

    return Generator.generate(socket, 'context', this.events, this.actions);
}