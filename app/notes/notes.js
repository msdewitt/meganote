(function(){
  angular
    .module('meganote.notes',['ui.router'])
    .config(notesConfig)
    .controller('NotesController', NotesController);

  notesConfig.$inject = ['$stateProvider'];
  function notesConfig($stateProvider){
    $stateProvider

        .state('notes', {
          url: '/notes',
          templateUrl:'notes/notes.html' ,
          controller: 'NotesController'
        })
        .state('notes.form',{
          url:'/:noteId', //noteId is a varaiable so this says: .../noteId
          templateUrl : 'notes/notes-form.html'
        });
  }

  NotesController.$inject =['$state', '$scope', 'NotesService'];
  function NotesController($state, $scope, NotesService){
    $state.go('notes.form');
    NotesService.getNotes()
        .then(function(){
          $scope.notes = NotesService.notes;
        });

    $scope.notes = [];
    $scope.note = {title:'', body:''};
    $scope.save = function(){
      NotesService.create($scope.note);
      $scope.notes.push($scope.note);
      $scope.note ={title:'', body:''};
    };
    $scope.editNote = function(note){
      $scope.note = note;
    };
  }
})();
