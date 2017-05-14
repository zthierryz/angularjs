(function(){
  'use strict';

    angular.module('check',[])
      .controller('checkController', function($scope){
        $scope.mealList = "cassoulet";
        $scope.mealNumber = 1;
        $scope.message =" ";
        $scope.displayNumberOfMeals = function(){
          var totalMealsNumber = computeNumberOfMeals(mealList);
          $scope.mealNumber= totalMealsNumber;
        };
      });

      function computeNumberOfMeals(string) {
        var myArray = string.split(',');
        return myArray.length;
      };

      function checkIfTooMuch(number){
        if (number >3)
          return "This is too much!"
        else
          return "Allright."
      };

})();
