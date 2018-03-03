SimpleFormApp.controller('formController', ['$scope', 'Person','AgeCategories', function ($scope, Person, AgeCategories) {

    $scope.ageCategories = AgeCategories.query();

    $scope.submitForm = function () {
        var person = new Person();
        person.name = $scope.name;
        person.surname = $scope.surname;
        person.gender = $scope.gender;
        person.$save();
    }
}]);