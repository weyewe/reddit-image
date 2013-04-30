// # app/assets/javascripts/angular/controllers/episodes_ctrl.js.coffee
// 
// @EpisodesCtrl = @app.controller 'EpisodesCtrl', [
// 	"$scope", "$http", ($scope, $http) ->
//   $scope.episodes = []
// 
//   loadEpisodes = ->
//     $http.get("/episodes.json").success((data, status, headers, config) ->
//       angular.forEach data, (value) ->
//         $scope.episodes.push value.episode
//     )
// 
//   loadEpisodes()
// 	
// 	
// ]

angular.module( 'AngularCasts').controller('SubRedditsCtrl', [ '$scope', '$http', '$rootScope',
		function($scope, $http, $rootScope){
	$scope.subReddits = [] ;
	$scope.selectedSubReddit = null ;  
	
	
	
	$scope.showPosts = function(subReddit){
		// console.log(" showEpisode is called");
		$scope.selectedSubReddit = subReddit; 
	};
 
	
	$scope.isSelected = function(subReddit){
		if( $scope.selectedSubReddit == subReddit ){
			return 'active' ;
		}
	};
	
	$scope.$watch("selectedSubReddit", function(newValue, oldValue) { 
		if( ( newValue !== oldValue) && (newValue !== null)){
			console.log("Gonna load the posts");
			$rootScope.$broadcast('subRedditSelected', { subReddit: newValue});
		}
	});
	
	
	loadSubReddits = function(){
		$http.get("/sub_reddits.json").success( function(data,status,headers, config){
			// console.log("The data: " + data);
			angular.forEach( data, function(value){
				// $scope.episodes.push( value.episode ) ;
				$scope.subReddits.push( value );
				// console.log( value ) ;
			});
		});
	};
	 
	
	loadSubReddits(); 
}]);

