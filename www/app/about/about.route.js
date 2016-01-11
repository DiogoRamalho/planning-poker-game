(function () {
  'use strict';

  angular
    .module('app.about')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('about', {
        cache: true,
        url: '/about',
        templateUrl: 'app/about/about.html'
      });
  }

})();