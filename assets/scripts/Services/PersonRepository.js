SimpleFormApp.service('personRepository', ['$localStorage', '$q', 'uuid', function ($localStorage, $q, uuid) {
    this.getRecords = function() {
        var records = $localStorage.records;
        if (typeof(records) === 'undefined') {
            return {};
        }
        return JSON.parse(records);
    };

    this.saveRecords = function(records) {
        $localStorage.records = JSON.stringify(records);
    };

    return {
        list: function () {
            return this.getRecords();
        }.bind(this),
        load: function (data) {

        }.bind(this),
        save: function (data) {
            var records = this.getRecords();
            records[uuid.v4()] = data;
            this.saveRecords(records);
        }.bind(this),
        update: function (data) {

        }.bind(this),
        delete: function (data) {

        }.bind(this)
    };
}]);