/**
 * Toggle later button video
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @class
 * @extends vjs.Button
 */
vjs.LaterToggle = vjs.Button.extend({
  /**
   * @constructor
   * @memberof vjs.LaterToggle
   * @instance
   */
  init: function(player, options){
    vjs.Button.call(this, player, options);
    this.on('click', this.onClick);
  }
});

vjs.LaterToggle.prototype.buttonText = 'See Later';

vjs.LaterToggle.prototype.buildCSSClass = function(){
  return 'vjs-later-off-button ' + vjs.Button.prototype.buildCSSClass.call(this);
};

vjs.LaterToggle.prototype.onClick = function(){
  this.addClass( 'vjs-later-on-button' );
  this.removeClass( 'vjs-later-off-button' );
};



/*
    // Note that we're not doing this in prototype.createEl() because
    // it won't be called by Component.init (due to name obfuscation).
    var createLaterButton = function() {
      var props = {
          className: 'vjs-later-off-button  vjs-menu-button vjs-control',
          innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">' + ('Later') + '</span></div>',
          role: 'button',
          'aria-live': 'polite', // let the screen reader user know that the text of the button may change
          tabIndex: 0
        };
      return videojs.Component.prototype.createEl(null, props);
    };

 */
