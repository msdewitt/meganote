(function(){
angular.module('meganote.notes')
  .service('NotesService', NotesService);

  NotesService.$inject= ['$http'];
  function NotesService($http){
    var service = this;


    service.getNotes = function(){
      var notesPromise = $http.get('https://meganote.herokuapp.com/notes');

      notesPromise.then(function(res){
        service.notes = res.data;
      });
      return notesPromise;
    }
  };
})();
