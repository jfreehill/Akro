'use strict';

/**
 * @ngdoc service
 * @name akroApp.categories
 * @description Returns a randomly selected category
 * # categories
 * Factory in the akroApp.
 */
angular.module('akroApp')
.factory('CategoryService', function () {
    var categories = [
        "Cooking",
        "The Kitchen",
        "Americana",
        "Fruit",
        "Toys",
        "The Beach",
        "Summertime",
        "Rock'n'Roll",
        "The Zoo",
        "Movies",
        "Baseball",
        "Football",
        "Basketball",
        "Softball",
        "Winter Sports",
        "The Olympics",
        "Pick Your Own",
        "Cars",
        "Alcohol",
        "Desserts"
    ];

// Public API here
    return {
        getCategory: function () {
            return categories[Math.ceil(Math.random()*categories.length-1)];
        }
    };
});
