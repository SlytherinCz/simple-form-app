SimpleFormApp.controller('adminController', ['$scope', 'PersonService', function ($scope, PersonService) {
    $scope.people = PersonService.query();

}]);