var Generator = require('../generator');
var Constants = require('../constants');

module.exports = function(socket) {

    this.events = [
        'console_log',
        'get_auth_url',
        'get_upload_user',
        'get_pod_users',
        'get_user',
        'get_users',
        'remove_user',
        'start_modification',
        'update_pod_server',

        'get_live_data',
        'get_upload_data',

        'get_connector_types',
        'get_vod_connector_types',
        'get_live_connector_types',
        'get_facebook_pages',
        
        'get_connectors',
        'get_vod_connectors',
        'get_live_connectors',

        'save', 'remove',

        'get_is_valid',
        'get_live_connector',
        'validation_data',

        'start_upload',
        'finish_upload',
        'cancel_upload',
        'uploading',
    ];

    this.actions = [
        Generator.createAction('console_log'),

        Generator.createAction('get_auth_url', ['provider_id']),
        Generator.createAction('get_token', ['provider_id', 'code', 'name']),
        Generator.createAction('add_noauth_user', []),
        
        Generator.createAction('add_publish_session'),
        Generator.createAction('get_upload_user'),
        Generator.createAction('get_user'),
        Generator.createAction('get_pod_users'),
        Generator.createAction('get_users'),
        Generator.createAction('remove_user'),
        Generator.createAction('get_facebook_pages'),
        Generator.createAction('start_modification'),
        Generator.createAction('fetch_modification'),
        Generator.createAction('update_pod_server', ['token', 'server']),

        Generator.createAction('get_live_data'),
        Generator.createAction('set_live_data'),
        Generator.createAction('set_upload_data'),
        Generator.createAction('get_upload_data'),

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