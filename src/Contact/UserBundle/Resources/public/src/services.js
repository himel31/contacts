myModule
    .service('CommonService', ['$location', function ($location) {
        this.backToList = function() {
            $location.url('/contacts');
        }
}]);