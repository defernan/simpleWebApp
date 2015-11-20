
var teacherApp = angular.module('teacherApp', []);

teacherApp.controller('ListController', ['$scope', function($scope){


	$scope.student = {name: 'willis', grade: 45};
	$scope.student2 = {name: 'willis', grade: 45};
	$scope.student3 = {name: 'willis', grade: 45};
	$scope.studentList= [$scope.student, $scope.student2, $scope.student3];
	$scope.studentCopy = {};
	$scope.editing = {};
	$scope.editing[0] = false;
	$scope.editing[1] = false;
	$scope.editing[2] = false;
	$scope.newStudentGrade = 0;
	$scope.newStudentName = "";
	//number calculations
	$scope.min = function(){

	};
	
	$scope.max = function(){

	};
	
	$scope.avg = function(){

	};
	//helpers
	$scope.notValidStudent = function(){
		if($scope.newStudentName == "" || $scope.newStudentGrade > 100 || $scope.newStudentGrade < 0){
			return true;
		}
		return false;
	};
	//insert helpers
	$scope.addStudent = function(){
		$scope.studentList.push({
			name: $scope.newStudentName,
			grade: $scope.newStudentGrade
		});
		$scope.newStudentName = "";
		$scope.newStudentGrade = 0;
	}
	//update helpers
	$scope.edit = function(student, index){
		console.log(index);
		$scope.editing[index] = true;
		$scope.studentCopy = angular.copy(student)
	};
	$scope.doneEditing = function(index){
		$scope.editing[index] = false;
	}
	$scope.enterPressed = function (index, keyPressed){
		if(keyPressed.keyCode == 13){
			$scope.editing[index] = false;
		}
	}
	//delete helpers
	$scope.delete = function(index){
		console.log(index);
		$scope.studentList.splice(index,1);
	};
	//try with directives
	// teacherApp.directive('Enter', function(){
	// 	return function()
	// })
}]);
