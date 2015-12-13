myModule
    .directive('formField', ['$timeout', function($timeout){
	 return {
		 'restrict' : 'EA',
		 'templateUrl' : 'bundles/contactuser/views/form-field.html',
		 'replace' : true,
		 'scope' : {
			 record : '=',
			 fieldname : '@',
			 live : '@',
			 required : '@',
             fieldtype : '@'
		 },
		 'link' : function($scope, element, attr) {

             /* broadcusted from controller : $scope.$broadcast('record:invalid');*/
             /* $scope.fieldname] is reffer to ng-form property in templateUrl */
			 $scope.$on('record:invalid', function(){
				$scope[$scope.fieldname].$setDirty();
			 });
			 
			 var savetimeout;
			 $scope.update = function(){
				 $timeout.cancel(savetimeout);
				 savetimeout = $timeout($scope.blurupdate, 1000);
				 
			 };

			 // update database
			 $scope.blurupdate = function(){
                 /* $scope.fieldname] is reffer to ng-form property in templateUrl */
				 if($scope.live != 'false'
                    && !$scope[$scope.fieldname].$invalid) {
                         $scope.record.$update(function(updaterecord){
                             $scope.record = updaterecord;
                         })
				 }
			 };

			 /* make field value empty,
			 	not woring properly now,
			 	@TODO : need to work on server side to fixed it.
			  */
			 $scope.remove = function(field){
				 delete $scope.record[field];
				 $scope.blurupdate();
			 }
		 }
	 }
 }]);