
var teacherApp = angular.module('teacherApp', ['ngStorage']);

teacherApp.controller('ListController', ['$scope', '$localStorage', function($scope, $localStorage){


	$scope.student = {name: 'Tim Brady', grade: 45};
	$scope.student2 = {name: 'Aaron Rodgers', grade: 90};
	$scope.student3 = {name: 'Cam Newton', grade: 95};
	$scope.$storage= $localStorage.$default({list: [$scope.student, $scope.student2, $scope.student3]});
	$scope.studentList = $scope.$storage.list;
	$scope.studentCopy = {};
	$scope.editing = {};
	$scope.editing[0] = false;
	$scope.editing[1] = false;
	$scope.editing[2] = false;
	$scope.newStudentGrade = 0;
	$scope.newStudentName = "";
	//number calculations
	$scope.min = function(){
		if($scope.studentList.length > 0){
			min = $scope.studentList[0].grade;
			for(var i = 0; i < $scope.studentList.length; i++){
				if($scope.studentList[i].grade < min){
					min = $scope.studentList[i].grade;
				}	
			}
		}
		return min;
	};
	
	$scope.max = function(){

		if($scope.studentList.length > 0){
			max = $scope.studentList[0].grade;
			for( var i = 0; i < $scope.studentList.length; i++){
				if($scope.studentList[i].grade > max){
					max = $scope.studentList[i].grade;
				}	
			}
		}
		return max;
	};
	
	$scope.avg = function(){

		if($scope.studentList.length > 0){
			sum = 0;
			count = 0;
			for(var i = 0; i < $scope.studentList.length; i++){
				sum += $scope.studentList[i].grade;
				count += 1;	
			}
		}
		return sum/count;
	};
	//indicates failing students
	$scope.failingStudent - function(student){
		if(student.grade < 65){
			return "danger";
		}
		return "";
	}

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
		$scope.studentList.splice(index,1);
	};
	//try with directives
	// teacherApp.directive('Enter', function(){
	// 	return function()
	// })
}]);
