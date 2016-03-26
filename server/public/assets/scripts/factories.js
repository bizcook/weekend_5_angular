myApp.factory("PetService", ["$http", function($http){
    var data = {};
    var greeting = function(){
      console.log("Works");
    };

    var getData = function(){
       $http.get("/pets").then(function(response){
          data.results = response.data;
          return data.results;
       });
    };

    var postData = function(data){
       $http.post("/pets", data).then(function(response){
          console.log(response.data);
       });
    };

    return {
      //this is public, and an object.
      postData: postData,
      getData: getData,
      greeting : greeting,
      data : data

    };
}]);
