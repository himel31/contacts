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
			 
			 $scope.blurupdate = function(){
                 /* $scope.fieldname] is reffer to ng-form property in templateUrl */
				 if($scope.live !== 'FALSE'
                    && !$scope[$scope.fieldname].$invalid) {
                         $scope.record.$update(function(updaterecord){
                             $scope.record = updaterecord;
                         })
				 }
			 };
			 
			 $scope.remove = function(field){
				 delete $scope.record[field];
				 $scope.blurupdate();
			 }
		 }
	 }
 }]);