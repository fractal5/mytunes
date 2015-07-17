// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  //a subclass of Songs collection

  //will house SongModel models

  initialize: function(){
    this.on('add', function() {
       // If we just added the first item to the queue,
      // trigger it to play.
      if (this.length === 1) {
        // console.log('length is 1');
        this.playFirst();
      }
    }, this);

    this.on('play', function(song) {
      // console.log('songQueue has heard a play event');
    }, this);

    this.on('enqueue', function(song) {
      // this.enqueue(song);
    }, this);
    
    this.on('ended', function() {
      this.dequeue();
    }, this);

    this.on('dequeue', function() {
      this.dequeue();
    }, this);

    this.on('unqueue', function(song) {
      this.unqueue(song);
    }, this);
  },

  enqueue: function (song) {
    console.log("SongQueue enqueue ...");
    this.add(song);

    // if (this.length === 1) {
    //   this.playFirst();
    // }
    // this.add(song.clone()); ?
  },

  dequeue: function() {
    // console.log("SongQueue dequeue ...");
    this.remove(this.first());
    if(this.length > 0) {
      this.playFirst();
    }
  },

  unqueue: function(song) {
    var isFirst = (song === this.first());

    this.remove(song);

    if (isFirst) {
      if (this.length > 0) {
        this.playFirst()
      } else {
        // removed last song, so stop playing
        song.stopPlay();
      }
    }
    
  },

  playFirst: function() {
    this.at(0).play();
  },

  stopPlay: function(song) {

  }

});



