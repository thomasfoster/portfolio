var app = angular.module('portfolio', ['ui.router']);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){

		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/home.html',
			controller: 'MainCtrl'
		})
		.state('about', {
			url: '/about',
			templateUrl: '/about.html',
			controller: 'MainCtrl'
		});
		// .state('rocket', {
		// 	url: '/rocket',
		// 	templateUrl: '/rocket.html',
		// 	controller: 'MainCtrl'
		// });

		$urlRouterProvider.otherwise('home');
	}
]);

app.controller('MainCtrl', [
	'$scope', 
	function($scope){
		//$scope.title = 'Port';


	}
]);


// app.controller('MainCtrl', [
// 	'$scope', 
// 	'posts', 
// 	function($scope, posts){
// 		$scope.test = 'hello world';
// 		$scope.posts = [
// 			{title: 'Post 1', upvotes: 5},
// 			{title: 'Post 2', upvotes: 2},
// 			{title: 'Post 3', upvotes: 9},
// 			{title: 'Post 4', upvotes: 12},
// 			{title: 'Post 5', upvotes: 4}
// 		];
// 		$scope.addPost = function(){
// 			if(!$scope.title || $scope.title === '') { return; }
// 			$scope.posts.push({
// 				title: $scope.title,
// 				link: $scope.link, 
// 				upvotes: 0,
// 				comments: [
// 				{author: 'Joe', body: 'Cool Post!', upvotes: 0},
// 				{author: 'Terry', body: 'Great idea but the main point is wrong!', upvotes: 0}]
// 			});
// 			$scope.title = '';
// 			$scope.link = '';
// 		}
// 		$scope.incrementUpvotes = function(post){
// 			post.upvotes += 1;
// 		}

// 		$scope.posts = posts.posts;
// 	}
// ]);

// app.controller('PostsCtrl', [
// 	'$scope',
// 	'$stateParams',
// 	'posts',
// 	function($scope, $stateParams, posts){
// 		$scope.post = posts.posts[$stateParams.id]
// 		$scope.addComment = function(){
// 			if ($scope.body === '') {return;}
// 			$scope.post.comments.push({
// 				body: $scope.body,
// 				author: 'user',
// 				upvotes: 0
// 			});
// 			$scope.body = '';
// 		}
// 	}
// ]);

// app.factory('posts', [function(){
// 	var o = {
// 		posts: []
// 	};
// 	return o;
// }]);