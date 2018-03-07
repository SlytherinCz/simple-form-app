SimpleFormApp.constant('API_BASE_HREF', '/api/1.0');
SimpleFormApp.constant('HOBBIES_REGEXP', new RegExp(/\/api\/1\.0\/age-category\/(\d+?)\/hobbies/));
SimpleFormApp.constant('PERSON_REGEXP', new RegExp(/\/api\/1\.0\/person\/(\w+?)/));
SimpleFormApp.constant('AGE_CATEGORIES', [
    {label: "Do 18ti let", value: 1},
    {label: "18-27 let", value: 2},
    {label: "28-45 let", value: 3},
    {label: "nad 45 let", value: 4}
]);
SimpleFormApp.constant('HOBBIES', [
    {label: "Počítačové hry",  suggestedFor: 1},
    {label: "Sport",  suggestedFor: 1},
    {label: "Diskotéky",  suggestedFor: 1},
    {label: "Procházky",  suggestedFor: 1},

    {label: "Studium hry",  suggestedFor: 2},
    {label: "Seriály",  suggestedFor: 2},
    {label: "Cestování",  suggestedFor: 2},
    {label: "Řízení auta",  suggestedFor: 2},
    {label: "Koncerty",  suggestedFor: 2},

    {label: "Zaměstnání",  suggestedFor: 3},
    {label: "Cyklistika",  suggestedFor: 3},
    {label: "Výlety s dětmi",  suggestedFor: 3},
    {label: "Pivo s přáteli",  suggestedFor: 3},
    {label: "Venčení psa",  suggestedFor: 3},

    {label: "Zahradničení",  suggestedFor: 4},
    {label: "Venčení psa",  suggestedFor: 4},
    {label: "Pivo s přáteli",  suggestedFor: 4},
    {label: "Sledování TV",  suggestedFor: 4},
    {label: "Údržba dom",  suggestedFor: 4}
]);

SimpleFormApp.run(['$httpBackend', 'API_BASE_HREF', 'HOBBIES_REGEXP', 'PERSON_REGEXP', 'AGE_CATEGORIES', 'HOBBIES', 'personRepository',
    function ($httpBackend, API_BASE_HREF, HOBBIES_REGEXP, PERSON_REGEXP, AGE_CATEGORIES, HOBBIES, personRepository) {
        $httpBackend.whenPOST(API_BASE_HREF + '/person').respond(function (method, url, data) {
            console.log('mocking ' + method);
            personRepository.save(data);
            return [200, null, {}];
        });

        $httpBackend.whenGET(API_BASE_HREF + '/age-category').respond(function (method, url, data) {
            console.log('mocking ' + method);
            return [200, JSON.stringify(AGE_CATEGORIES), {}];
        });

        $httpBackend.whenGET(HOBBIES_REGEXP).respond(function (method, url, data) {
            console.log('mocking ' + method);
            // I'm not going to create any reasonable objects here, this should reside on a server
            var ageCategoryId = parseInt(url.match(HOBBIES_REGEXP)[1]);
            var suggestedHobbies = HOBBIES.filter(function (element) {
                return element.suggestedFor === ageCategoryId;
            });
            console.log(suggestedHobbies);
            return [200, JSON.stringify(suggestedHobbies), {}];
        });

    }]);