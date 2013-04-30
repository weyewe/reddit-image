
angular.module( 'AngularCasts').controller('PostViewerCtrl', [ '$scope', '$http', '$resource', 
 			function($scope, $http, $resource, $rootScope){
	$scope.pictureArray = null ;
	$scope.selectedPost = null  
	
	
	$scope.$on('showPictures', function (event, args) {
		if( $scope.selectedPost !== args.post ){
			$scope.selectedPost = args.post;
			$scope.pictureArray = args.pictures; 
		}
 		
		
	});
	
	 
}]);

