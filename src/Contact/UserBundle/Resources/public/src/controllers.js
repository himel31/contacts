myModule
    .controller ('ListController',  ['$scope', '$location', 'ContactFactory', '$routeParams', function ($scope, $location, ContactFactory, $routeParams) {

    var fetchedContacts = ContactFactory.query(function() {
            $scope.contacts = fetchedContacts;
          });

        $scope.fields = ['first_name','last_name'];
        
        $scope.sort = function (_field) {
            $scope.sort.field = _field;
            $scope.sort.order = !$scope.sort.order;            
        };
        $scope.sort.field = 'first_name';
        $scope.sort.order = false;
	
		$scope.show = function(_id) {
			$location.url('/contact/' + _id);	
		}
    }])
    .controller('NewController', [ '$scope', '$location', 'ContactFactory', function($scope, $location, ContactFactory){

        $scope.contact = new ContactFactory({
            "first_name" : "",
            "last_name" :  "",
			"email" : "",
            "phone" :  "",
			"web" :  ""
        });
        $scope.create = function(_id) {
            if($scope.newContact.$invalid) {
                $scope.$broadcast('record:invalid');
            } else {
                $scope.contact.$save();
                $location.url('/contacts');
            }
        }
    }])
    .controller('SingleController', [ '$scope', '$location', 'ContactFactory', '$routeParams', function($scope, $location, ContactFactory, $routeParams) {
        $scope.contact = ContactFactory.get({id: parseInt($routeParams.id, 10)});

        $scope.delete = function () {
            $scope.contact.$delete();
            $location.url('/contacts');
        }
    }])
;

    