app.controller('tableButtonController', function ($scope, $http) {

        var config = {
          headers: {'partner-token': 'Team1',
                    'user-token': 'blablbbabla'}
         };

         $scope.updateTable = function (tableObject) {
           console.log('Save tables clicked');
           $http.post('http://67.182.6.162/YBIYNI/GeekWise.dll/PostTable',tableObject,config)
               .success(function (data) {
                   console.log('Post Table data ' + JSON.stringify(data));


               })
               .error(function (data, status, headers, config) {
                   $scope.errorMessage = "Couldn't Post the Table ' + tableObj.ID + ', error # " + status;
               });
           };


    $scope.twoTop = function () {
        var section = document.getElementById('section');
        var sectionSeq = section.options[section.selectedIndex].value;
        var table = {
            TABLESSEQ: 0,
            SECTIONSEQ: 2,
            ID: '100',
            SEATS: 2,
            IMAGE: 'two-top.jpg',
            TEAMSEQ: 1
        }

        console.log('this section is '+sectionSeq);

        $scope.updateTable(JSON.stringify(table));

        //  setTimeout(function(){location.reload; }, 3000);

    };
    $scope.fourTop = function () {
        var section = document.getElementById('section');
        var sectionSeq = section.options[section.selectedIndex].value;
        var table = {
            TABLESSEQ: 0,
            SECTIONSEQ: 2,
            ID: '100',
            SEATS: 4,
            IMAGE: 'four-top.jpg',
            TEAMSEQ: 1
        }

        console.log('this section is '+sectionSeq);

        $scope.updateTable(JSON.stringify(table));

    };
    $scope.sixTop = function () {
        var section = document.getElementById('section');
        var sectionSeq = section.options[section.selectedIndex].value;
        var table = {
            TABLESSEQ: 0,
            SECTIONSEQ: 2,
            ID: '100',
            SEATS: 6,
            IMAGE: 'six-top.jpg',
            TEAMSEQ: 1
        }

        console.log('this section is '+sectionSeq);

        $scope.updateTable(JSON.stringify(table));
    };
    $scope.eightTop = function () {
        var section = document.getElementById('section');
        var sectionSeq = section.options[section.selectedIndex].value;
        var table = {
            TABLESSEQ: 0,
            SECTIONSEQ: 2,
            ID: '100',
            SEATS: 8,
            IMAGE: 'eight-top.jpg',
            TEAMSEQ: 1
        }

        console.log('this section is '+sectionSeq);

        $scope.updateTable(JSON.stringify(table));
    };
    $scope.booth = function () {
        alert('NO BOOTH FOR YOU!')
    };

});
