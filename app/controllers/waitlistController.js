app.controller('waitlistController', function ($scope, $http) {

    $scope.send = true;

    $scope.waitlist = function () {
        $scope.wait = true
        $scope.res = false
    };
    $scope.reslist = function () {
        $scope.wait = false;
        $scope.res = true;
    };


    $scope.seatParty = function (id) {

        for(var i = 0; i<$scope.listOfWaitlist.length; i++){
            if ($scope.listOfWaitlist[i].WAITLISTSEQ == id) {
                alert(JSON.stringify($scope.listOfWaitlist[i].NAME +'  '+ id));

            };
        };

    };

    $scope.contact = function (id) {

        for(var i = 0; i<$scope.listOfWaitlist.length; i++){
            if ($scope.listOfWaitlist[i].WAITLISTSEQ == id) {
                $scope.partyName  = JSON.stringify($scope.listOfWaitlist[i].NAME);
                $scope.sent = true;
                $scope.send = false;
            }
        };

        // document.getElementsByID(id).classList.remove('show');
        // document.getElementsByID(id).classList.add('hide');


        $scope.modal = true;
        $scope.contactTest = true;

    };
    $scope.closeContact = function () {
        $scope.modal = false;
        $scope.contactTest = false;
    }

    $scope.confirmRemove = function(){
        $scope.modal = true;
        $scope.removeConfirm = true;
    }
    $scope.removeParty = function() {
        $scope.modal = false;
        $scope.removeConfirm = false;
    }
    $scope.leaveParty = function() {
        $scope.modal = false;
        $scope.removeConfirm = false;
    }


    var array = [
        {id: 1, name: 'John Smith', partySize: 2, date:'Mar 12 2016 10:00:00 AM'},
        {id: 2, name: 'Jane Doe', partySize: 6, date:'Mar 14 2016 08:00:00 AM'},
        {id: 3, name: 'Amilia Erheart', partySize: 4, date:'Mar 7 2016 08:00:00 AM'},
        {id: 4, name: 'Jim Grecko', partySize: 12, date:'Mar 7 2016 09:00:00 AM'}
    ];

    array.sort(function(a,b){
    var c = new Date(a.date);
    var d = new Date(b.date);
    return c-d;
    });

    $scope.arrays = array;


    var config = {
      headers: {'partner-token': 'Team1',
                'user-token': 'blablbbabla'}
     };

    $http.get('http://67.182.6.162/YBIYNI/GeekWise.dll/AllWaitlist',config)
        .success(function (data) {
            console.log('AllWaitlist data ' + JSON.stringify(data));
            $scope.listOfWaitlist = data.waitlist;

        })
        .error(function (data, status, headers, config) {
            $scope.errorMessage = "Couldn't load the Waitlist, error # " + status;
        });



    $http.get('http://67.182.6.162/YBIYNI/GeekWise.dll/AllWaitlist',config)
        .success(function (data) {
            console.log('AllReservtions data ' + JSON.stringify(data));
            $scope.listOfReservations = data.waitlist;

        })
        .error(function (data, status, headers, config) {
            $scope.errorMessage = "Couldn't load the Reservations, error # " + status;
        });

});
