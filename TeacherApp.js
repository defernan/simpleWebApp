
var teacherApp = angular.module('teacherApp', []);

teacherApp.controller('ListController', ['$scope', function($scope){


	$scope.student = {name: 'willis', grade:'45'};
	$scope.student2 = {name: 'willis', grade:'45'};
	$scope.student3 = {name: 'willis', grade:'45'};
	$scope.studentList= [$scope.student, $scope.student2, $scope.student3];
	$scope.studentCopy = {};
	$scope.editing = {};
	$scope.editing[0] = false;
	$scope.editing[1] = false;
	$scope.editing[2] = false;
	$scope.edit = function(student, index){
		console.log(index);
		$scope.editing[index] = true;
		$scope.studentCopy = angular.copy(student)
	};
	$scope.done = function(index){
		$scope.editing[index] = false;
	}

	$scope.delete = function(index){
		console.log(index);
		$scope.studentList.splice(index,1);
	};

	$scope.enterPressed = function (index, keyPressed){
		console.log(keyPressed);
		if(keyPressed.keyCode == 13){
			$scope.editing[index] = false;
		}
	}
	//try with directives
	// teacherApp.directive('Enter', function(){
	// 	return function()
	// })
}]);
