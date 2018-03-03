var Person = SimpleFormApp.service('AgeCategories',['$resource','API_BASE_HREF',function($resource,API_BASE_HREF){
    return $resource(API_BASE_HREF + '/age-category');
}]);