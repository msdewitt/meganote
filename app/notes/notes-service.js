(function(){
angular.module('meganote.notes')
  .service('NotesService', NotesService);

  NotesService.$inject= ['$http'];
  function NotesService($http){
    var service = this;


    service.getNotes = function(){
      $http.get('https://meganote.herokuapp.com/notes')
      .then(function(notes){
        console.log(notes);
      });
    }
  };
})();
