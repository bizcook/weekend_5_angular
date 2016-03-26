myApp.controller("AddController", ["$scope", "PetService", function($scope, PetService){
    var petObject = {};
    var petService = PetService;

    //POST HERE
    $scope.submit = function(data){
      petService.postData(data);
    };
}]);
                                              //PetService is a factory
myApp.controller("ShowController", ["$scope", "PetService", function($scope, PetService){
    var petService = PetService;


    //GET HERE
    petService.getData();
    $scope.animalArray = petService.data;
    console.log("OBJECT: ", petService.data);
}]);
