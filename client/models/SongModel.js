// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    numPlays: 0
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    // console.log("SongModel play triggered");
    this.trigger('play', this);
    this.set('numPlays', this.get('numPlays') + 1);
  },

  enqueue: function() {
    // console.log("SongModel enqueue triggered.");
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    // console.log("SongModel dequeue triggered.");
    this.trigger('dequeue', this);
  },

  ended: function() {
    // console.log("SongModel ended triggered");
    this.trigger('ended', this);
  },

  unqueue: function() {
    this.trigger('unqueue', this);
  }, 

  stopPlay: function() {
    this.trigger('stopPlay', this);
  }

});
