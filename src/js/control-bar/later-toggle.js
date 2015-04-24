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
  }
});

vjs.LaterToggle.prototype.buttonText = 'See Later';

vjs.LaterToggle.prototype.buildCSSClass = function(){
  return 'vjs-later-off-button ' + vjs.Button.prototype.buildCSSClass.call(this);
};

vjs.LaterToggle.prototype.onClick = function(){

  var token = '';

  alert( this.player_.isLaterOn() );

  if (this.player_.isLaterOn() === false ){

    $.ajax({
      method: 'POST',
      url: '/playlistprogram/create',
      data: { program_id: this.player_.programUid_, user_id: this.player_.uuid_, playlist_id: 2, token: token }
    }).done(function() {
      this.player_.isLaterOn(true);
      this.addClass( 'vjs-later-on-button' );
      this.removeClass( 'vjs-later-off-button' );
    });

    return this.language_;
  }else{
    this.player_.isLaterOn(false);
  }
};

/**
 * is the later button in on
 * @type {Boolean}
 * @private
 */
vjs.Player.prototype.isLaterOn_ = true;

vjs.Player.prototype.isLaterOn = function(isLO){
  if (isLO !== undefined) {
    this.isLaterOn_ = !!isLO;
    return this;
  }
  return this.isLaterOn_;
};

/**
 * The player's language code
 * @param  {String} languageCode  The locale string
 * @return {String}             The locale string when getting
 * @return {vjs.Player}         self, when setting
 */
vjs.Player.prototype.language = function (languageCode) {
  if (languageCode === undefined) {
    return this.language_;
  }

  this.language_ = languageCode;
  return this;
};


/*
        data: { program_id: <% $program->id %>, user_id: <% $authUserId %>, playlist_id: 2, token: token }
 */


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
