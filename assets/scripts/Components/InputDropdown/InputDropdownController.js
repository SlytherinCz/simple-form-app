SimpleFormApp.controller('inputDropdownController', ['$scope', function ($scope) {
    $scope.listShown = false;
    $scope.toggleList = function(){
        $scope.listShown = !$scope.listShown;
    };
    $scope.selectSuggestion = function(suggestion){
        $scope.model = suggestion.label;
    };
}]);