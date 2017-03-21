angular
  .module("meanReviews", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .factory("MeanReviewsFactory", [
    "$resource",
    MeanReviewsFactory
  ])
  .controller("indexController", [
    "$state",
    "MeanReviewsFactory",
    IndexControllerFunction
  ])


  function RouterFunction ($stateProvider) {
    $stateProvider
    .$state("index", {
      url: "/mean_reviews",
      templateUrl: "/assets/js/ng-views/index.html",
      controller: "indexController",
      controllerAs: "vm"
    })
  }

  function MeanReviewsFactory ($resource) {
    return $resource("/api/mean_reviews/:name", {}, {
      update: {method: "PUT"}
    })
  }

  function IndexControllerFunction ($state, MeanReviewsFactory ) {
    this.meanReviews = MeanReviews.query()
  }
