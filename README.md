* [1. 指令服务及帮助类使用](#directive)
  * [1.1 日期控件](#datePicker)
  * [1.2 文件上传控件](#dropify)
  * [1.3 ajax请求及接口服务](#httpServer)
  * [1.4 loading插件](#loading)
  * [1.5 alert控件](#alert)
  * [1.6 toast控件](#toast)
  * [1.7 ellipsis插件](#ellipsis)
  * [1.8 mock数据模拟](#mock)
* [2. 插件配置](#interfaceConfig)




<h2 id="directive">1. 指令服务及帮助类使用</h2>

<h3 id="datePicker">1.1 日期控件</h3>

* 注入 <code>showDatePickerProvider</code>
* html标签内存在mydatepicker的class，如下:
```html
<div class="form-group">
        <div class="input-group">
            <span class="input-group-addon">装箱日期</span>
            <input type="text" class="form-control mydatepicker" placeholder="yyyy-mm-dd" ng-model="queryData.shippingDate">
            <span class="input-group-addon"><i class="icon-calender"></i></span>
        </div>
</div>
```

* 在controller第一行添加以下代码:
```javascript
showDatePickerProvider.showDatePicker();
```

<h3 id="dropify">1.2 文件上传控件</h3>

* 注入 <code>dropifyProvider</code>
* html标签如下:
```html
<div class="form-group">
      <label for="id1">身份证(正面)</label>
      <input type="file" id="id1" class="dropify" data-allowed-file-extensions="jpg png jpeg" data-max-file-size="2M" data-default-file="{{reg.nameCard}}" ng-files-model="regfile1.file"/>
</div>
```

* controller中调用:
```javascript
dropifyProvider.dropify();
```

* 如果存在在线原始图片，即有data-default-file属性，则需要在获取在线图片路径后(ajax请求成功后)再调用 <code>dropify()</code> 方法,如下:
```javascript
$timeout(function () {
        dropifyProvider.dropify();
},10);
```

* <code>$scope</code> 获取文件时，使用如下方式(多个文件也适用):
```javascript
$scope.regfile1 = {
        name: 'nameCardFile',
        file: '',
};
var files = [$scope.regfile1];
```


<h3 id="httpServer">1.3 ajax请求服务</h3>

* controller中注入 <code>interfaceService</code>
* 待续

<h3 id="loading">1.4 loading插件</h3>

* 注入 <code>loadingService</code>
* 调用方法，参数 <code>str</code> 为loading中显示的文字,并在需要结束的地方关闭。如:
```javascript
loadingService.showLoading("请稍后...");
loadingService.closeLoading();
```

* 在调用ajax接口前如需要loading，则无需注入 <code>loadingService</code> ，可以直接调用 <code>interfaceService</code> 的 <code>showLoading(str)</code> 方法，并且无需关闭loading。如:
```javascript
interfaceService.showLoading("请稍后...");
```

<h3 id="alert">1.5 alert控件</h3>

* 使用[SweetAlert](http://t4t5.github.io/sweetalert/)插件。具体使用方法请参考官方文档。例子如下:


<h3 id="toast">1.6 toast控件</h3>

* 注入 <code>toastService</code>
* 提供了2个类型的toast，<code>success</code> <code>warning</code>。使用方法如下:
```javascript
toastService.toastSuccess({
        heading: '发送成功',
        text: '验证码发送成功,请查看您的短信收件箱，输入有效验证码，并完成表单。',
});
toastService.toastWarning({
        heading: '发送失败',
        text: '验证码发送失败,请查看您的网络设置并重试。',
});
```

* 如需要自定义，可以在 <code>toastService.js</code> 中自行添加样式。


<h3 id="ellipsis">1.7 ellipsis插件</h3>

* 如若需要将返回的文字进行缩略，需要在ajax返回后调用，如下:
```javascript
$timeout(function () {
        $('.news-note').ellipsis({
            row:2
        });
        $('.news-title').ellipsis({
            row:1
        });
},20);
```

* 使用[jQuery Ellipsis](https://github.com/STAR-ZERO/jquery-ellipsis),具体方法参考官方文档。


<h3 id="mock">1.8 mock数据模拟</h3>

* 使用[mock.js](http://mockjs.com/)
* <code>main.js</code> 中打开以下代码:
```javascript
var Mock = require('mockjs');
```

* 在 <code>module/test</code> 中创建自己的mock文件，并在 <code>gulpfile.js</code> 中的jsArr数组中添加路径。


<h2 id="interfaceConfig">2. 插件配置</h2>

1. 初始化npm
```bash
npm init
```

2. 添加.editorconfig文件
3. 添加.gitattributes文件
4. 添加.gitignore文件
5. 安装构建插件
```bash
// gulp
// gulp-browserify
// del
// gulp-clean-css
// gulp-concat
// gulp-obfuscate
// gulp-rename
// gulp-sass
// gulp-uglify
// gulp-babel babel-preset-es2015
sudo npm install --save-dev gulp gulp-browserify del gulp-clean-css gulp-concat gulp-obfuscate gulp-rename gulp-sass gulp-uglify gulp-babel babel-preset-es2015
```

6. 安装项目插件
```bash
// angular
// jquery 
// bootstrap 
// angular-route
// angular-ui-router
// angular-animate
// bootstrap-datepicker
// jquery-toast-plugin
// metismenu
// jquery-slimscroll
// angular-baidu-map
// dropify
// mockjs
// sweetalert
// angular-cookies
// waypoints
sudo npm install --save angular jquery bootstrap angular-route angular-ui-router angular-animate bootstrap-datepicker jquery-toast-plugin metismenu jquery-slimscroll angular-baidu-map dropify mockjs sweetalert angular-cookies waypoints
```

7. npm 设置淘宝镜像
```bash
npm config set registry http://registry.npm.taobao.org
```

8. 接口文档
http://120.26.65.65:8280/admin/doc/index.html

