var app = angular.module('portfolio', ['ui.router']);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){

		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/template/home.tpl.html',
			controller: 'MainCtrl'
		})
		.state('about', {
			url: '/about',
			templateUrl: '/template/about.tpl.html',
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
	function($scope){ //, $state){
		//$scope.Model = $scope.Model || {Name : "xxx"};
		//$scope.title = 'Port';
		// $scope.$state = $state;
		//alert($state)
//		$('.main.home').css('height', $(window).height() + 'px');
		$('.main.home').css('height', window.innerHeight + 'px'); 
		$('.main').css('padding-top', $('.header').height() + 'px')
		$(window).resize(function(){
			$('.main.home').css('height', window.innerHeight + 'px'); 
			$('.main').css('padding-top', $('.header').height() + 'px')
		});
		$scope.portItem = [
			{
				name: "Poloroid",
				img: 'https://placehold.it/400x400',
				tagline: 'Lorem Ipsum one sodle set amut adbo aleime ao'
			},
			{
				name: "11Poloroid",
				img: 'https://placehold.it/400x400',
				tagline: '1111Lorem Ipsum one sodle set amut adbo aleime ao'
			},
			{
				name: "22121Poloroid",
				img: 'https://placehold.it/400x400',
				tagline: '2222Lorem Ipsum one sodle set amut adbo aleime ao'
			},
			{
				name: "333Poloroid",
				img: 'https://placehold.it/400x400',
				tagline: '33333Lorem Ipsum one sodle set amut adbo aleime ao'
			},

		];
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