/**
 * Created by tedyuen on 16-12-17.
 */
var serverUrl = 'http://192.168.0.25:8080/admin/api/data';

//创建订单
Mock.mock(serverUrl+'/company_create_order', {"data":{"bargainTime":0,"bargainTimeStr":"","busMemberId":0,"busMemberMobile":"","busMemberName":"","busMemberType":0,"confirmTime":0,"confirmTimeStr":"","containerNo":"","containerSType":2,"containerVType":1,"containerVol":100,"createTime":1482113080499,"createTimeStr":"2016-12-19 10:04:40","destPort":"Prince","extraFee":400,"goodsDesc":"","goodsMemberId":0,"goodsMemberMobile":"","goodsMemberName":"","goodsMemberType":0,"goodsPackage":"","grossWeight":200,"id":1192,"isOpen":1,"items":0,"lastAccess":1482113080499,"loadingPort":"Gomez","mark":"","moneyPaid":0,"netWeight":0,"note":"Garner","orderAmount":0,"orderCreditRank":0,"orderFlag":0,"orderSn":"20161219100436165","orderStatus":1,"orderType":0,"originPort":"Simon","payStatus":0,"referenceShippingFee":500,"returnPort":"Henderson","sealNo":"","shippingDate":1612886400000,"shippingDateStr":"2021-02-10","shippingFee":300,"shippingName":"Workman","shippingSn":"Huffman","shippingStatus":0,"sizeDesc":"","transitPort":"Vincent","version":1},"method":"company_create_order","rescode":"0000","resdesc":"正确返回"});
