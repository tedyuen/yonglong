yonglongApp.directive('shouldShowHeader', ['$templateRequest', '$compile', '$parse','$filter', function($templateRequest, $compile, $parse,$filter) {
  return {
    scope: {
      matchId:'@',
    },
    templateUrl:'template/typeahead/ship_header.html',
    link: function(scope, element, attrs) {
      // console.log('===>  '+scope.matchId);
      if(scope.matchId.indexOf("-option-0") > 0 ){
        console.log('===2> true');

      }else{
        console.log('===2> false');

      }
      scope.show = scope.matchId.indexOf("-option-0") > 0;
    }
  };
}])
