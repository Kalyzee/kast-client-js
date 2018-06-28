var Generator = require('../generator');

module.exports = function(socket) {

    this.events = [
        'enable', 'disable',
        'message_add', 'message_add_many', 'message_remove',
        'messages_list_get',
        'twitter_get_query'
    ];

    this.actions = [
        Generator.createAction('enable'),
        Generator.createAction('disable'),
        Generator.createAction('message_add'),
        Generator.createAction('message_add_many'),
        Generator.createAction('message_remove'),
        Generator.createAction('messages_list_get'),
        Generator.createAction('twitter_get_query'),
        Generator.createAction('twitter_set_query'),
    ];

    return Generator.generate(socket, 'webkit', this.events, this.actions);
}