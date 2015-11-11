myModule
    .factory('ContactFactory', ['$resource', function ($resource) {
        return $resource('/app_dev.php/api/users/:id',
						 {id : '@id'}, 
						 {'update': {method : 'PUT'}
		});	 
 }]);