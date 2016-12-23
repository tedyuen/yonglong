yonglongApp.directive("ngFilesModel", [function () {
  return {
    scope: {
      ngFilesModel: "="
    },
    link: function (scope, element, attributes) {
      element.bind("change", function (changeEvent) {
        scope.$apply(function () {
          scope.ngFilesModel = changeEvent.target.files[0];
          // or all selected files:
          // scope.fileread = changeEvent.target.files;
        });
      });
    }
  }
}])

;
