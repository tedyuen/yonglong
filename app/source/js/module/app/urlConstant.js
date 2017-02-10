/**
 * Created by tedyuen on 16-12-17.
 */
yonglongApp.constant('URL_CONS', {

  // server: 'http://www.56elutong.com/',
  // server: 'http://120.26.65.65:8285/',

  serverUrl: 'http://120.26.65.65:8285/api/data',
  serverFileUrl: 'http://120.26.65.65:8285/api/file',
  exportReport : 'http://120.26.65.65:8285/execl/exportReport.do',
  exportReportOfOrder : 'http://120.26.65.65:8285/execl/exportReportOfOrder.do',
  exportReportOfFriend : 'http://120.26.65.65:8285/execl/exportReportOfFriend.do',
  exportRefund : 'http://120.26.65.65:8285/execl/exportRefund.do',

  // serverUrl: 'http://www.56elutong.com/api/data',
  // serverFileUrl: 'http://www.56elutong.com/api/file',
  // exportReport : 'http://www.56elutong.com/execl/exportReport.do',
  // exportReportOfOrder : 'http://www.56elutong.com/execl/exportReportOfOrder.do',
  // exportReportOfFriend : 'http://www.56elutong.com/execl/exportReportOfFriend.do',
  // exportRefund : 'http://www.56elutong.com/execl/exportRefund.do',


  companyRegister: 'company_register',
  companyCreateOrder: 'company_create_order',
  companyOrderList: 'company_list_order',
  companyListMyorder: 'company_list_myorder',
  companyPublishOrder: 'company_publish_order',
  createImportOrder: 'createImportOrder',
  importOrderList: 'importOrderList',
  companyListGetorder: 'company_list_getorder',
  deleteOrder: 'company_delete_order',
  companyUserinfo: 'company_userinfo',
  companyUserDetail: 'company_user_detail',
  companyUpdateinfo: 'company_updateinfo',
  busUserDetail: 'bus_user_detail',
  fleetTakeOfferOrder: 'fleetTakeOfferOrder',
  cancelOrder: 'userCancelOfferOrder',
  fleetDispatchOrder: 'fleetDispatchOrder',
  companyListFriend: 'company_list_friend',
  companyListBusowners: 'company_list_busowners',
  companyAddFriend: 'company_add_friend',
  companyDelFriend: 'company_del_friend',
  accountInfo: 'account_info',
  addBankCard: 'addBankCard',
  listBankCard: 'listBankCard',
  delBankCard: 'delBankCard',
  listRefundApply: 'listRefundApply',
  addRefundApply: 'addRefundApply',
  cashList: 'cashList',
  goodsUserDetailByFriend: 'getGoodsUserDetailbyFriend',
  reportList: 'report_list',
  alipay: 'alipay',
  alipayDispatchOrder: 'alipayDispatchOrder',
  alipayDispatch: 'alipayDispatch',
  alipayImportOrder: 'alipayImportOrder',

  companyUpdateOrder: 'company_update_order',
  companyDetailOrder: 'company_detail_order',

  // 以下是user接口
  userListGetorder: 'user_list_getorder',
  userListMyorder: 'user_list_myorder',
  userListDispatchorder: 'user_list_dispatchorder',
  userRegister: 'user_register',
  userUserinfo: 'user_userinfo',
  userUpdateInfo: 'user_updateinfo',
  userTakeOfferOrder: 'userTakeOfferOrder',
  userOverOfferOrder: 'userOverOfferOrder',
  userListFriend: 'user_list_friend',
  userEditFriend: 'user_edit_friend',

  userDispatchList: 'user_dispatchList',

  // 以下是admin接口
  adminLogin: 'admin_login',
  adminGetOrderList: 'admin_getOrderList',
  adminListSysRefund: 'admin_listSysRefund',
  adminAuditSysRefund: 'admin_auditSysRefund',
  adminGetBusUserList: 'admin_getBusUserlist',
  adminGetGoodsUserList: 'admin_getGoodsUserlist',
  adminAuditSysMember: 'admin_auditSysMember',

  articleEdit: 'article_edit',
  articleList: 'article_list',
  articleDelete: 'article_delete',
  articleDetail: 'article_detail',

  updatePassword: 'update_password',
  resetPassword: 'reset_password',
  sendcode: 'sendcode',


  reportFriendList: 'report_friend_list',
  reportOrderList: 'report_order_list',
});
