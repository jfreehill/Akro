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
        "Girls' Toys",
        "Boys' Toys",
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
        "Desserts",
        "The Circus",
        "Phobias",
        "The Gym",
        "Working Out",
        "Drugs",
        "Household Cleaning",
        "Pick Your Own",
        "City Living",
        "Southern Livin'",
        "Desserts",
        "Illegal Activities",
        "Superstitions",
        "Disney Movies",
        "Cowboys",
        "Gameshows",
        "The Office",
        "Tropical Locations",
        "Actors",
        "Chemicals",
        "Acresses",
        "The Garage",
        "Itchy Things",
        "Video Games"
    ];

// Public API here
    return {
        getCategory: function () {
            return categories[Math.ceil(Math.random()*categories.length-1)];
        }
    };
});
