SimpleFormApp.directive('inputDropdown',function() {
    return {
        template: "<div class=input-dropdown-wrapper>" +
        "<div class='input-group'>" +
        "<input class='form-control' type='text' ng-model='model' ng-change='filterMethod({userInput:model});listShown = true'>" +
        "<span class='input-group-addon' ng-click='toggleList()'>{{ listShown ? '&#8679;' : '&#8681;'}}</span>" +
        "</div>" +
        "<ul class='list-group' ng-show='listShown'>" +
        "<li class='list-group-item' ng-repeat='suggestion in suggestions track by $index' ng-click='selectSuggestion(suggestion);toggleList()'>{{suggestion.label}}</li>" +
        "</ul>" +
        "</div>",
        controller: "inputDropdownController",
        scope: {
            model: "=ngModel",
            filterMethod: "&",
            suggestions: "="
        }
    }
});