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

* 注入showDatePickerProvider
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

* 注入dropifyProvider
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


<h3 id="httpServer">1.3 ajax请求服务</h3>

<h3 id="loading">1.4 loading插件</h3>

<h3 id="alert">1.5 alert控件</h3>

<h3 id="toast">1.6 toast控件</h3>

<h3 id="ellipsis">1.7 ellipsis插件</h3>

<h3 id="mock">1.8 mock数据模拟</h3>



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









