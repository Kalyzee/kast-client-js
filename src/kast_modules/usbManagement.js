var Generator = require('../generator');
var Constants = require('../constants');

module.exports = function (socket) {

    this.events = [
        'device_added', 'device_removed',
        'device_list', 'device_dir_list',
        'copy_template', 'copy_background',
        'copy_task_created', 'copy_task_progress',
        'copy_task_ended', 'copy_task_error'
    ];

    this.actions = [
        Generator.createAction('device_list'),
        Generator.createAction('device_dir_list'),
        Generator.createAction('copy_tasks')
    ];

    return Generator.generate(socket, 'usbdevice', this.events, this.actions);
}