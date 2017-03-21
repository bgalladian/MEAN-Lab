console.log("hi")
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
  .controller("showController", [
    "$state",
    "$stateParams",
    "MeanReviewsFactory",
    ShowControllerFunction
  ])

  function RouterFunction ($stateProvider) {
    $stateProvider
    .state("index", {
      url: "/mean_reviews",
      templateUrl: "/assets/js/ng-views/index.html",
      controller: "indexController",
      controllerAs: "vm"
    })
    .state("show", {
      url: "/mean_reviews/:name",
      templateUrl: "/assets/js/ng-views/show.html",
      controller: "showController",
      controllerAs: "vm"
    })
  }


  function MeanReviewsFactory ($resource) {
    return $resource("http://localhost:3001/api/mean_reviews/:name", {}, {
      update: {method: "PUT"}
    })
  }

  function IndexControllerFunction ($state, MeanReviewsFactory ) {
    this.reviews = MeanReviewsFactory.query()
    this.newReview = new MeanReviewsFactory()
    this.create = function() {
      this.newReview.$save().then((review) => {
        $state.go("show", {name: review.name})
      })
    }
  }

  function ShowControllerFunction($state, $stateParams ,MeanReviewsFactory) {
    this.review = MeanReviewsFactory.get({ name: $stateParams.name })
    this.update = () => {
      this.review.$update({ name: $stateParams.name })
    }
    // console.log(this);
    this.destroy = () => {
      this.review.$delete({name: $stateParams.name}).then(() => {
        $state.go("index")
      })
    }
  }
