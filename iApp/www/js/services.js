angular.module('starter.services', [])
.factory('Camera', ['$q', function($q) {

  return {
    getPicture: function(source) {
      var q = $q.defer();
      var source;
      if (source == "LIBRARY") source = Camera.PictureSourceType.PHOTOLIBRARY;
      else source = Camera.PictureSourceType.CAMERA;

      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      },
      {
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: source
      }
      );

      return q.promise;
    }
  }
}])
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Jim Staub',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Algert Sula',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
