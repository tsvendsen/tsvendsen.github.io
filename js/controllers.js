'use strict';

/* Controllers */

angular.module('myApp.controllers', []).

    controller('CVController', ["$scope", "cv", "skillset", function ($scope, cv, skillset) {

        $scope.cv = cv;

        $scope.getRating = function (tech) {

            return skillset.getRating(tech) || 2;

        };

        $scope.getProfficiency = function (tech) {
            console.log()
            var rate = skillset.getRating(tech);
            if(!rate){
                return "Unrated";
            }
            return rate > 3 ? "High" : rate === 3 ? "Medium" : "Low";
        };


    }])
;