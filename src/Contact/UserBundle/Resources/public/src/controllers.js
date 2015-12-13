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
        $scope.newContact = function(_id) {
            $location.url('/contact/new');
        }
    }])
    .controller('NewController', [ '$scope', '$location', 'ContactFactory', 'CommonService', function($scope, $location, ContactFactory, CommonService){

        //empty object of contact
        $scope.contact = new ContactFactory({
            "first_name" : "",
            "last_name" :  "",
			"email" : "",
            "phone" :  "",
			"web" :  ""
        });

        //action of create button
        $scope.create = function(_id) {
            if($scope.newContact.$invalid) {
                $scope.$broadcast('record:invalid');
            } else {
                $scope.contact.$save();
                $location.url('/contacts');
            }
        }

        $scope.backToList = function() {
            CommonService.backToList();
        }

    }])
    .controller('SingleController', [ '$scope', '$location', 'ContactFactory', 'CommonService', '$routeParams', function($scope, $location, ContactFactory, CommonService, $routeParams) {

        //fetch contact by id, following by promise
         fetchedContact = ContactFactory.get({id: parseInt($routeParams.id, 10)},
            function() {//success
                $scope.contact = fetchedContact;
            },
            function() {//failed to get contact
                $location.url('/contacts');
            }
        );

        //action of delete button
        $scope.delete = function () {
            if(confirm('Do you realy want to delete ?')) {
                $scope.contact.$delete();
                $location.url('/contacts');
            }

        }

        $scope.backToList = function() {
            CommonService.backToList();
        }
    }])
;

    