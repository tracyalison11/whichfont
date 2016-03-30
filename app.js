
var radioForm = angular.module('radioForm', []);

    radioForm.controller('fontController', function($scope){
        $scope.formData = {
        };

        $scope.changeRadio = function() {
            switch ($scope.formData.font){
                case "fairytales":
                    $('input[type=text], textarea').css('font-family', 'fairytales');
                    break;
                case "stump-closed":
                    $('input[type=text], textarea').css('font-family', 'stump-closed');
                    break;
                case "amelia":
                    $('input[type=text], textarea').css('font-family', 'Amelia-script');
                    break;
                case "brixton-lt":
                    $('input[type=text], textarea').css('font-family', 'brixton-lt');
                    break;
                case "grounday":
                    $('input[type=text], textarea').css('font-family', 'brixton-lt');
                    break;
                default:
                    $('input[type=text], textarea').css('font-family', 'sans-serif');

            }
        };

    });