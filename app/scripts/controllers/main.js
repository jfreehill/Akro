'use strict';

/**
 * @ngdoc function
 * @name akroApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the akroApp
 */
angular.module('akroApp')
.controller('MainCtrl', ['$scope', 'LetterService', 'CategoryService', function ($scope, LetterService, CategoryService) {

    $scope.letterCount = 3;
    $scope.category = CategoryService.getCategory();

    // retrieve a new category from Category Service
    $scope.newCategory = function() {
        $scope.category = CategoryService.getCategory();
    };
    // retrieve new letter(s) from Letter Service
    $scope.newLetters = function() {
        $scope.letters = LetterService.getLetters($scope.letterCount);
    };
    // Renew both category and letters
    $scope.newRound = function() {
        $scope.newCategory();
        $scope.newLetters();
    };


    $scope.$watch('letterCount', function(newVal, oldVal) {
        var diff = newVal - oldVal;
        // if letter count is lower than before
        if (diff < 0) {
            // turn negative number to positive
            diff /= -1;
            while (diff) {
                $scope.letters = LetterService.removeLetter();
                diff--;
            }
        // if letter count is higher than before
        } else if (diff > 0) {
            while (diff) {
                $scope.letters = LetterService.addLetter();
                diff--;
            }
        // if letter count is initialized or unchanged
        } else {
            $scope.letters = LetterService.getLetters($scope.letterCount);
        }
    });
}]);
