SimpleFormApp.constant('API_BASE_HREF', '/api/1.0');
SimpleFormApp.constant('AGE_CATEGORIES', [
    {label: "Do 18ti let", value: 1},
    {label: "18-27 let", value: 2},
    {label: "28-45 let", value: 3},
    {label: "nad 45 let", value: 4}
]);
SimpleFormApp.constant('HOBBIES', [
    {label:"Počítačové hry",value:"pc gaming",suggestedFor:1},
    {label:"Sport",value:"sport",suggestedFor:1},
    {label:"Diskotéky",value:"clubbing",suggestedFor:1},
    {label:"Procházky",value:"hiking",suggestedFor:1},
]);

SimpleFormApp.run(['$httpBackend', 'API_BASE_HREF', 'AGE_CATEGORIES', 'personRepository', function ($httpBackend, API_BASE_HREF, AGE_CATEGORIES, personRepository) {

    $httpBackend.whenGET(API_BASE_HREF + '/person').respond(function (method, url, data) {
        console.log('mocking ' + method);
        return [200, null, {}];
    });

    $httpBackend.whenPOST(API_BASE_HREF + '/person').respond(function (method, url, data) {
        console.log('mocking ' + method);
        personRepository.save(data);
        return [200, null, {}];
    });

    $httpBackend.whenDELETE(API_BASE_HREF + '/person/:id').respond(function (method, url, data) {
        console.log('mocking ' + method);
        return [200, null, {}];
    });

    $httpBackend.whenPUT(API_BASE_HREF + '/person/:id').respond(function (method, url, data) {
        console.log('mocking ' + method);
        return [200, null, {}];
    });


    $httpBackend.whenGET(API_BASE_HREF + '/age-category').respond(function (method, url, data) {
        console.log('mocking ' + method);
        return [200, JSON.stringify(AGE_CATEGORIES), {}];
    });

    $httpBackend.whenGET(API_BASE_HREF + '/hobby/:age').respond(function (method, url, data) {
        console.log('mocking ' + method);
        return [200, JSON.stringify(AGE_CATEGORIES), {}];
    });

}]);