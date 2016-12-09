
// var parties = [];

// function party(name,phone,section,size){
// 	this.name = name;
// 	this.phone = phone;
// 	this.section = section;
// 	this.size = size;
// }

// app.controller('groupController', function($scope, $http) {
	
// 			$scope.createParty = function() {

// 			    var party = {};
// 			    	party.WAITLISTSEQ = 0;
// 			    	party.NAME = $scope.name;
// 			    	party.PHONE = $scope.phone;
// 			    	party.SECTIONSEQ = $scope.section;
// 			    	party.SEATS = $scope.size;
// 			    	var data = party;
// 				// var data = new party($scope.name, $scope.phone, $scope.section, $scope.size);
// 							    console.log(data);
// 				var config = { 
// 								headers : {

// 									'partner-token': 'Team1', 
// 								'user-token': '1231'
// 								}
// 							}
// 				$http.post('http://67.182.6.162/YBIYNI/GeekWise.dll/PostWaitlist', data, config)
// 						   .success(function(data){
// 						   		console.log(data);
// 						   	  // $scope.NAME = data.waitlist.NAME;
// 						   	  // $scope.SEATS = data.waitlist.SIZE;
// 						   	  // $scope.SECTIONSEQ = data.waitlist.SECTION;
// 						   	  // $scope.PHONE = data.waitlist.PHONE;

// 						    })
// 						   .error(function (data, status, headers, config){
						   	
// 				});
			   

// 				$scope.name = '';
// 				$scope.phone = '';
// 				$scope.section = '';
// 				$scope.size = '';



// 			};
// });

app.controller('groupController', function($scope) {
  return $scope.showDialog = function(evt) {
    return $mdDialog.show({
      controller: function($scope) {
        return angular.extend($scope, {
          user: {
            name: 'Developer',
            phone: '123456789',
            section: '',
            size: ''
          },
          closeDialog: function() {
            return $mdDialog.hide();
          },
        });
      },
      templateUrl: 'app/directives/formDirective.html',
      targetEvent: evt
    });
  };
});


