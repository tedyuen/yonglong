yonglongApp.directive('showShipHeader', ['$templateRequest', '$compile', '$parse','$filter', function($templateRequest, $compile, $parse,$filter) {
  return {
    scope: {
      matchId:'@',
    },
    templateUrl:'template/typeahead/ship_header.html',
    link: function(scope, element, attrs) {
      scope.show = scope.matchId.indexOf("-option-0") > 0;
    }
  };
}]);
//
yonglongApp.directive('showCustomsHeader', ['$templateRequest', '$compile', '$parse','$filter', function($templateRequest, $compile, $parse,$filter) {
  return {
    scope: {
      matchId:'@',
    },
    templateUrl:'template/typeahead/customs_header.html',
    link: function(scope, element, attrs) {
      scope.show = scope.matchId.indexOf("-option-0") > 0;
    }
  };
}]);
yonglongApp.directive('showBoxoperatorHeader', ['$templateRequest', '$compile', '$parse','$filter', function($templateRequest, $compile, $parse,$filter) {
  return {
    scope: {
      matchId:'@',
    },
    templateUrl:'template/typeahead/boxoperator_header.html',
    link: function(scope, element, attrs) {
      scope.show = scope.matchId.indexOf("-option-0") > 0;
    }
  };
}]);



