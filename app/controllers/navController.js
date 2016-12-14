app.controller('navController', function($scope) {

    $scope.addWaitlist = function () {
        console.log('in');
        $scope.modal = true;
        $scope.test = true;
    }
    $scope.closeWaitlist = function () {
        console.log('out');
        $scope.modal = false;
        $scope.test = false;
    }

    $scope.show = function () {
        $scope.modal = true;
        $scope.hey = true;
    };
    $scope.hide = function () {
        $scope.modal = false;
        $scope.hey = false;
    }

});
