var Person = SimpleFormApp.service('Person',['$resource','API_BASE_HREF',function($resource,API_BASE_HREF){
    return $resource(API_BASE_HREF + '/person/:id');
}]);