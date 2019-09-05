var Generator = require('../generator');
var Constants = require('../constants');

module.exports = function(socket) {

    this.events = [
        'get_alpha_rgb', 'get_alpha_angle', 'get_alpha_bw', 'get_watermark_enabled', 'get_display_output',
        'get_mixed_layout_mode', 'get_half_layout_mode', 'get_resolution', 'get_fps'
    ];

    this.actions = [
        Generator.createAction('switch_scene', ['scene_id']),
        
        Generator.createAction('get_alpha_rgb'),
        Generator.createAction('set_alpha_rgb'),
        Generator.createAction('save_alpha_rgb'),

        Generator.createAction('get_alpha_angle'),
        Generator.createAction('set_alpha_angle'),
        Generator.createAction('save_alpha_angle'),

        Generator.createAction('get_alpha_bw'),
        Generator.createAction('set_alpha_bw'),
        Generator.createAction('save_alpha_bw'),

        Generator.createAction('set_watermark_enabled'),
        Generator.createAction('get_watermark_enabled'),
        
        Generator.createAction('set_display_output'),
        Generator.createAction('get_display_output'),

        Generator.createAction('set_mixed_layout_mode'),
        Generator.createAction('get_mixed_layout_mode'),

        Generator.createAction('set_half_layout_mode'),
        Generator.createAction('get_half_layout_mode'),        

        Generator.createAction('set_resolution'),
        Generator.createAction('get_resolution'),                
        
        Generator.createAction('set_fps'),
        Generator.createAction('get_fps')
    ];

    var MixerModule = Generator.generate(socket, 'mixer', this.events, this.actions);
    MixerModule.scenes = Constants.scenes;

    return MixerModule;
}