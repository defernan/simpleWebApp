
var teacherApp = angular.module('teacherApp', ['ngStorage']);

teacherApp.controller('ListController', ['$scope', '$localStorage', function($scope, $localStorage){

	//start with a pre populated list
	$scope.student = {name: 'Tim Brady', grade: 45};
	$scope.student2 = {name: 'Aaron Rodgers', grade: 90};
	$scope.student3 = {name: 'Cam Newton', grade: 95};
	//local storage
	$scope.$storage= $localStorage.$default({list: [$scope.student, $scope.student2, $scope.student3]});
	$scope.studentList = $scope.$storage.list;
	//used for adding new student
	$scope.newStudentGrade = 0;
	$scope.newStudentName = "";
	//used for update ops
	$scope.editing = {};

	//nothing is being edited when page opens
	$scope.initializeEditingList = function(){
		for(var i = 0; i < $scope.studentList.length; i++){
			$scope.editing[i] = false;
		}
	}

	$scope.initializeEditingList(); 
	//number calculations
	$scope.min = function(){

		if($scope.studentList.length > 0){
			min = $scope.studentList[0].grade;
			for(var i = 0; i < $scope.studentList.length; i++){
				if($scope.studentList[i].grade < min){
					min = $scope.studentList[i].grade;
				}	
			}
		}else{
			min = 0;
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
		}else{
			max = 0;
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
		}else{
			return 0;
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

}]);
