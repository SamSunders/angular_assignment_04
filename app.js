var app = angular.module('yourApp', []);

app.controller('TwitterController', function($scope, $http, AdvectiveService, NunService){
    $scope.tenTwitters = [];
    for(var i = 0; i< 10; i++){
        $scope.tenTwitters.push(AdvectiveService.advectiveMaver() + NunService.nunMaver());

    }
    console.log($scope.tenTwitters);
});



app.factory('AdvectiveService', function(){
    var advectiveArray = ['scary', 'hyper', 'livid', 'grumpy', 'hungry', 'alphabetical', 'non-parenthetical', 'greedy', 'sleepy', 'handy'];
    //private
    //var advectiveMaver = function(){
    //    var index = randomNumber(0, advectiveArray.length -1);
    //    return advectiveArray[index];
    //};


    //public
    var publicApi = {
        advectiveMaver: function(){
            var index = randomNumber(0, advectiveArray.length -1);
            return advectiveArray[index];
        }
    };
    return publicApi;

});

app.factory('NunService', function(){
    var nunArray = ['sewage','lady', 'curmudgeon', 'kaiser', 'principality', 'tramp', 'stamp', 'receptacle', 'brains', 'ventilation', 'noun'];

    var publicApi = {
        nunMaver: function(){
            var index = randomNumber(0, nunArray.length -1);
            return nunArray[index];
        }
    };
    return publicApi;

});

function randomNumber(min, max){
    return Math.round(Math.random() * (max - min) + min);
}
