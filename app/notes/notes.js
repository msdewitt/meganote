angular.module('meganote.notes',[
  'ui.router'
])
.config(function($stateProvider) {
  $stateProvider

    .state('notes', {
      url: '/notes',
      template: '<h1>MegaNote</h1><p>{{ message }}</p>',
      controller: function($scope) {
        $scope.message = "Welcome to Notely!";
      }
    });
    .state('notes.form',{
      url:'/:noteId',
      templateURL : 'notes/notes-form.html';
    });
}
.controller('NotesController',function(){
});
