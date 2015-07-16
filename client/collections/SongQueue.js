// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  //a subclass of Songs collection

  //will house SongModel models

  initialize: function(){
  },

  enqueue: function (song) {
      this.add(song);
      // console.log("SongQueue: ", this);
  }

});