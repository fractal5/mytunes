// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td>Played: <%= numPlays %></td>'),

  events: {
    'click': function() {
      

      // TODO: figure out when to trigger the playing
      // when queue was empty; 
      this.model.enqueue();

      // enabling below passes spec test but ruins functionality
      // this.model.play();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
