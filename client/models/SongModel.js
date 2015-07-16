// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    console.log("SongModel play triggered");
    this.trigger('play', this);
  },

  enqueue: function() {
    console.log("SongModel enqueue triggered.");
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    console.log("SongModel ended triggered");
    this.trigger('ended', this);
  }

});
