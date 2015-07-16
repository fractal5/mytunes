// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  //a subclass of Songs collection

  //will house SongModel models

  initialize: function(){
    this.on('add', function() {
       // If we just added the first item to the queue,
      // trigger it to play.
      if (this.length === 1) {
        console.log('length is 1');
        this.playFirst();
      }
    }, this);
    
    this.on('ended', function() {
      this.dequeue();
    }, this);
  },

  enqueue: function (song) {

      this.add(song);
      // this.add(song.clone()); ?
  },

  dequeue: function() {
    console.log("SongQueue dequeue ...");
    this.shift();
    this.playFirst();
  },

  playFirst: function() {
    if (this.length > 0) {
      this.at(0).play();
    }
  }

});