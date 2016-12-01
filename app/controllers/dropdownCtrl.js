app.controller('dropdownCtrl',
  function ($scope, $http) {
    // When the user selects a Section from the DropDownList, the following variable will get set.
    $scope.selectedSection = null;
    // When the user selects a Table from the DropDownList, the following variable will get set.
    $scope.selectedTable = null;
    // When we first load our Controller, we'll call our API, which fetchs a list of all the Section and table records.
   var config = {
     headers: {'partner-token': 'Team1',
               'user-token': 'blablabla'}
    };
    $http.get('http://67.182.6.162/YBIYNI/GeekWise.dll/AllSection',config)
        .success(function (data) {
            console.log('AllSection data ' + JSON.stringify(data));
            $scope.listOfSections = data.section;
        })
        .error(function (data, status, headers, config) {
            $scope.errorMessage = "Couldn't load the list of Sections, error # " + status;
        });
    $http.get('http://67.182.6.162/YBIYNI/GeekWise.dll/AllTable',config)
        .success(function (data) {
            console.log('AllTable data ' + JSON.stringify(data));
            $scope.listOfTables = data.tables;
        })
        .error(function (data, status, headers, config) {
            $scope.errorMessage = "Couldn't load the list of Tables, error # " + status;
        });
});
