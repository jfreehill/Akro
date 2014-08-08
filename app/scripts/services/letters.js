'use strict';

/**
 * @ngdoc service
 * @name akroApp.letters
 * @description Responsible for managing the app letters selection.
 * # letters
 * Factory in the akroApp.
 */
angular.module('akroApp')
  .factory('LetterService', function () {
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var selectedLetters = '';

    // Public API here
    return {
        selectedLetters: selectedLetters,
        // get randomly selected numbers based on number parameter or defaults to 1
        getLetters: function (number) {
            var n = number || 1;
            selectedLetters = '';
            while (n) {
                // set random number based on length of alphabet
                var index = Math.ceil(Math.random()*alphabet.length-1);
                var selectedLetter = alphabet[index];
                selectedLetters += selectedLetter;
                n--;
            }
            return selectedLetters;
        },
        // remove 1 letter from current letter selection
        removeLetter: function() {
            if (selectedLetters.length === 1) {
                return selectedLetters;
            }
            // split existing letters selection into an array
            var letterArray = selectedLetters.split('');
            // remove last value
            letterArray.pop();
            // re-set selected letters to popped array
            selectedLetters = letterArray.join('');
            return selectedLetters;
        },
        // add 1 letter to current letter selection
        addLetter: function() {
            selectedLetters += this.getLetters(1);
            return selectedLetters;
        }
    };
  });
