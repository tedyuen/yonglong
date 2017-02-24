yonglongApp.controller('prerecordNewController',['$scope','$state','$location','showDatePickerProvider','interfaceService','rescode','alipayService','baseDataService',
  function ($scope,$state,$location,showDatePickerProvider,interfaceService,rescode,alipayService,baseDataService) {
    showDatePickerProvider.showDatePicker();

    $scope.temperatureUnit = baseDataService.getTemperatureUnit();


    var backurl = "shell.html#!/main/companyinner/prerecord";
    if($location.url()=='/main/userinner/prerecord'){
      backurl = "shell.html#!/main/userinner/prerecord";
    }else if($location.url()=='/main/admin/prerecord'){
      backurl = "shell.html#!/main/admin/prerecord";
    }



    $scope.orderDetail = {
      "backurl":backurl,

      "temperature": "",
      "temperatureunit": "C",
      "loadingport": "",
      "dangerousgrade": "",
      "boxno": "",
      "shippname": "",
      "loadingportcode": "",
      "transitportcode": "",
      "destport": "",
      "destportcode": "",
      "flashpoint": "",
      "unnumber": 0,
      "imdgpage": "",
      "inletwharf": "",
      "sizetype": "",
      "statusinfo": "",
      "boxoperatorcode": "",
      "customscode": "",
      "callno": "",
      "calltype": "",
      "callman": "",
      "shiptype": "",
      "shippingdate": "",
      "packman": "",
      "licensenumber": "",
      "smokebox": "",
      "equipmentorder": "",
      "detailaddress": "",
      "remark": "",

      "billList":[{"ordersn":"","deliverycode":"","deliveryport":"","cargono":0,"items":0,"packagecode":"","packagetype":"","weight":0,"size":0,"cargodesc":"","mark":"","cargocode":0,"dangerousgrade":"","imdgpage":"","unnumber":0,"flashpoint":0,"dangerouslabel":"","emergencyno":"","firstaidno":"","marinepollution":""}],
    }

    //提交表单
    $scope.onSubmit = function($valid,form){
      console.log('--->'+$valid);
      console.log($scope.orderDetail.orderStatus);
      if($valid){
        swal({
          title: "确定预录吗?",
          text: "您即将预录一条信息!",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的,确定!",
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
          animation: "slide-from-top",
        }, function(){
          interfaceService.createImportOrder($scope.orderDetail,function (data,headers,config) {
            console.log(JSON.stringify(data));
            if(data.rescode==rescode.SUCCESS){
              swal({
                title:"创建成功！",
                text:"2秒后自动跳转付款。",
                type:"success",
                timer:2000,
                showConfirmButton: false
              },function () {
                // $state.go('main.companyinner.query_order');
                alipayService.alipayImportOrder(data.data.id);
              });
              // $scope.reset(form);
            }else{
              swal({
                title:"预录失败！",
                text:data.resdesc,
                type:"error",
                confirmButtonText:"确定"
              });
            }
          });
        });

      }else{
        // console.log("$valid:"+$valid);
      }
    };

    $scope.reset = function (theForm) {
      $scope.orderDetail ={
        "backurl":backurl,

        "temperature": "",
        "temperatureunit": "C",
        "loadingport": "",
        "dangerousgrade": "",
        "boxno": "",
        "shippname": "",
        "loadingportcode": "",
        "transitportcode": "",
        "destport": "",
        "destportcode": "",
        "flashpoint": "",
        "unnumber": 0,
        "imdgpage": "",
        "inletwharf": "",
        "sizetype": "",
        "statusinfo": "",
        "boxoperatorcode": "",
        "customscode": "",
        "callno": "",
        "calltype": "",
        "callman": "",
        "shiptype": "",
        "shippingdate": "",
        "packman": "",
        "licensenumber": "",
        "smokebox": "",
        "equipmentorder": "",
        "detailaddress": "",
        "remark": "",

        "billList":[{"ordersn":"","deliverycode":"","deliveryport":"","cargono":0,"items":0,"packagecode":"","packagetype":"","weight":0,"size":0,"cargodesc":"","mark":"","cargocode":0,"dangerousgrade":"","imdgpage":"","unnumber":0,"flashpoint":0,"dangerouslabel":"","emergencyno":"","firstaidno":"","marinepollution":""}],

      }

      theForm.$setPristine();
      theForm.$setUntouched();
    }

    $.typeahead({
      input: '.shippname-typeahead',
      order: "desc",
      source: {
        data: [
          "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
          "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
          "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia",
          "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma",
          "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad",
          "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the",
          "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
          "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador",
          "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
          "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea",
          "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India",
          "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
          "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos",
          "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
          "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
          "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco",
          "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
          "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru",
          "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino",
          "Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone",
          "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain",
          "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan",
          "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
          "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
          "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
        ]
      },
      callback: {
        onInit: function (node) {
          console.log('Typeahead Initiated on ' + node.selector);
        }
      }
    });



  }]);
