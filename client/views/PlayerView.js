// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay/>',

  initialize: function() {
    this.$el.prop('volume', 0.1);
    this.$el.prop('currentTime', 268);
    var context = this;
    this.$el.on('ended', function() {
      context.model.ended();
    });
    
  },

  setSong: function(song){
    this.model = song;
    // console.log("PlayerView setSong, this.model: ", this.model); 
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
