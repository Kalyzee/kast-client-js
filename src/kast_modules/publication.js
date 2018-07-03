var Generator = require('../generator');
var Constants = require('../constants');

module.exports = function(socket) {

    this.events = [
        'get_live_data',

        'get_connector_types',
        'get_vod_connector_types',
        'get_live_connector_types',
        
        'get_connectors',
        'get_vod_connectors',
        'get_live_connectors',

        'save', 'remove',

        'get_is_valid',
        'get_live_connector',
        'validation_data'
    ];

    this.actions = [
        Generator.createAction('get_live_data'),
        Generator.createAction('set_live_data'),

        Generator.createAction('get_connector_types'),
        Generator.createAction('get_vod_connector_types'),
        Generator.createAction('get_live_connector_types'),
        
        Generator.createAction('get_connectors'),
        Generator.createAction('get_vod_connectors'),
        Generator.createAction('get_live_connectors'),

        Generator.createAction('get_field'),
        Generator.createAction('save'),
        Generator.createAction('remove'),
        Generator.createAction('get_live_connector'),
        Generator.createAction('set_live_connector'),
        Generator.createAction('get_is_valid'),
        Generator.createAction('validate'),
    ];

    return Generator.generate(socket, 'publication', this.events, this.actions);
}