SimpleFormApp.controller('formController', ['$scope', 'Person', 'AgeCategories', 'Hobbies', '$q', function ($scope, Person, AgeCategories, Hobbies, $q) {

    $scope.ageCategories = AgeCategories.query();
    $scope.availableHobbySuggestions = Hobbies.query({id: 1});
    $scope.suggestedHobbies = $scope.availableHobbySuggestions;

    $scope.selectedHobby = null;
    $scope.selectedAgeCategory = null;

    $scope.filterSuggestedHobbies = function (userInput) {
        console.log(userInput);

        if(userInput.length < 1) {
            return $scope.suggestedHobbies = $scope.availableHobbySuggestions;
        }
        var filtered = [];
        angular.forEach($scope.availableHobbySuggestions, function (hobby, key) {
            if (hobby.label.toLowerCase().indexOf(userInput.toLowerCase()) !== -1) {
                filtered.push(hobby);
            }
        });
        $scope.suggestedHobbies = filtered;
    };

    $scope.selectHobby = function (item) {
        $scope.selectedHobby = item;
    };

    $scope.selectAgeCategory = function () {
        console.log($scope.ageCategories);
        console.log($scope.selectedAgeCategory.value);
        $scope.suggestedHobbies = Hobbies.query({id: $scope.selectedAgeCategory.value});
    };


    $scope.submitForm = function () {
        var person = new Person();
        person.name = $scope.name;
        person.surname = $scope.surname;
        person.gender = $scope.gender;
        person.ageCategory = $scope.selectedAgeCategory.value;
        person.hobby = $scope.selectedHobby;
        person.$save();
    }
}]);