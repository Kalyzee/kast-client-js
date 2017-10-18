var Generator = require('../generator');
var Constants = require('../constants');

module.exports = function (socket) {

    this.events = [
        'set_room', 'get_room_list', 'get_current_room'
    ];

    this.actions = [
        Generator.createAction('zoom_in'),
        Generator.createAction('zoom_out'),
        Generator.createAction('zoom_stop'),

        Generator.createAction('up'),
        Generator.createAction('down'),
        Generator.createAction('left'),
        Generator.createAction('right'),

        Generator.createAction('start_up'),
        Generator.createAction('start_down'),
        Generator.createAction('start_left'),
        Generator.createAction('start_right'),
        Generator.createAction('stop'),

        Generator.createAction('big_up'),
        Generator.createAction('big_down'),
        Generator.createAction('big_left'),
        Generator.createAction('big_right'),

        Generator.createAction('set_speaker_view'),
        Generator.createAction('set_full_view'),
        Generator.createAction('set_medium_view'),

        Generator.createAction('set_speaker_view'),
        Generator.createAction('set_full_view'),
        Generator.createAction('set_medium_view'),

        Generator.createAction('go_to_speaker_view'),
        Generator.createAction('go_to_full_view'),
        Generator.createAction('go_to_medium_view'),

        Generator.createAction('set_tracking_zone'),
        Generator.createAction('mouse_down'),
        Generator.createAction('mouse_position'),
        Generator.createAction('mouse_up'),
        Generator.createAction('end_setting_tracking_zone'),

        Generator.createAction('start_track'),
        Generator.createAction('stop_track'),

        Generator.createAction('create_room'),
        Generator.createAction('delete_room'),
        Generator.createAction('set_room'),
        Generator.createAction('get_room_list'),
        Generator.createAction('get_current_room'),
    ];

    var cameraModule = Generator.generate(socket, 'camera', this.events, this.actions);

    cameraModule.saveView = function(view) {
        switch (view) {
            case Constants.views.SPEAKER:
                this.setSpeakerView()
                break;
            case Constants.views.FULL:
                this.setFullView()
                break;
            case Constants.views.MEDIUM:
                this.setMediumView()
                break;
            default:
                break;
        }
    }

    cameraModule.switchView = function(view) {
        switch (view) {
            case Constants.views.SPEAKER:
                this.goToSpeakerView()
                break;
            case Constants.views.FULL:
                this.goToFullView()
                break;
            case Constants.views.MEDIUM:
                this.goToMediumView()
                break;
            default:
                break;
        }
    }

    return cameraModule;
}
