function HomeConfig($stateProvider) {
  "ngbind";

  $stateProvider.state("home", {
    url: "",

    controller: "HomeCtrl",
    controllerAs: "$ctrl",
    templateUrl: "home/home.html",
    replace: "true",
    restrict: "M"
  });
}

export default HomeConfig;
