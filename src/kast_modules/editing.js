var Generator = require('../generator');
var Constants = require('../constants');

module.exports = function (socket) {

    this.events = [
        'context'
    ];

    this.actions = [
        Generator.createAction('switch_monospeaker'),
        Generator.createAction('switch_multispeaker'),
        Generator.createAction('switch_mediumspeaker')
    ];

    var editingModule = Generator.generate(socket, 'editing', this.events, this.actions);

    editingModule.switchViewWithTracking = function(view) {
        switch (view) {
            case Constants.views.SPEAKER:
                this.switchMonospeaker();
                break;
            case Constants.views.FULL:
                this.switchMultispeaker();
                break;
            case Constants.views.MEDIUM:
                this.switchMediumspeaker();
                break;
            default:
                break;
        }
    }

    return editingModule;
}