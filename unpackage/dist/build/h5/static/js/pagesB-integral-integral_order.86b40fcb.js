(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesB-integral-integral_order"],{2843:function(t,e,i){"use strict";var a=i("ee27");i("a9e3"),i("b680"),i("d3b7"),i("acd8"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("f3f3")),n=a(i("43a0")),s=a(i("8db8")),d=a(i("0826")),r=a(i("7ce2")),l=i("7855"),c=(i("83c3"),i("2f62")),h={data:function(){return{afhalen:!1,afhalen_translateX:"0",order_no:"",bargain_id:"",isDistribution:!1,order_list:"",integral_hui:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/integral_hui.png",integral_hei:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/integral_hei.png",integral_hong:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/integral.png",jiantou:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/jiantou2x.png",storeImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/store.png",guanbiImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/close2x.png",pay_y:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/yuezhifu2x.png",pay_z:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/zhifubaozhifu2x.png",pay_w:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/weixinzhifu2x.png",pay_b:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/lALPBb.png",quan_hui:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/xuanzehui2x.png",quan_hei:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/xuanzehei2x.png",zfb:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/zhifubaozhifu2x.png",wx:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/weixinzhifu2x.png",yezf:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/yuezhifu2x.png",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/back2x.png",loadGif:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/5-121204193R7.gif",showPayWay1:!1,showPayWay:!1,makeOrd:!1,load:!0,ycoupon_name:"",notWallte:!1,useWallte:!1,value:"",value2:"",cpId:"",title:"确认订单信息",adds:"",adds_f:"",price:"",price1:this.products_total+this.freight-this.coupon_name-Number(this.reduce_money),price2:"",remarks:"",_isopen:!0,products_total:"",reduce_money:"",is_subtraction:1,reduce_name:"",pro:"",user_money:"",user_score:"",needpay:"",ishide:0,canpay:!1,mask_value:"",orde_id:"",addre_id:"",or_id:"",sNo:"",num:"",access_id:"",digits:["","","","","",""],msg:"",msgLength:0,page:0,pay_display:!1,password_status:"",password_display:!1,use_coupon:!1,freight:"",freightt:"",name:"",channel:"",erroTime:0,enterless:!0,cart_id:"",address_id:"",focus:!0,providerList:"",address:"",aliPayStatue:!1,wxPayStatue:!1,fastTap:!0,total:"",h5_content:"",code:"",myappid:"",firstFlag:!0,head:!0,can_pay:!0,oldheight:"",buy_again:"",shop_status:"",shop_address_id:"",shop_list:[],jifen_id:"",payTop:""}},onLoad:function(t){this.afhalen_translateX=uni.upx2px(2);var e=this;uni.getSystemInfo({success:function(t){e.payTop=t.windowHeight-uni.upx2px(100)}}),e.jifen_id=t.id,e.$store.state.address_id=e.$store.state.address_id_def,e.access_id=uni.getStorageSync("access_id")?uni.getStorageSync("access_id"):this.$store.state.access_id,e.$nextTick((function(){e.$refs.lktAuthorizeComp.handleAfterAuth(e,"../login/login?landing_code=1",(function(){e._axios()}))}))},onShow:function(){var t=this;t.$nextTick((function(){t.$refs.lktAuthorizeComp.handleAfterAuth(t,"../login/login?landing_code=1",(function(){t._axios("onshow>>")}))})),t.address_id=t.$store.state.address_id},methods:(0,o.default)({iptFoucs:function(){this.payPosition="initial"},iptBlur:function(){this.payPosition="fixed"},changeLoginStatus:function(){var t=this;t.access_id=uni.getStorageSync("access_id"),t._axios("==")},_hide:function(){this.ishide=1},_show:function(){this.ishide=0,0==this.value.length&&(this.value=0)},_back:function(){uni.navigateBack({delta:1})},toUrl:function(){this.laikepay.toUrl(this)},replaceInput:function(t){this.value=Math.abs(t.detail.value),this._usyue()},_usyue:function(){(0,l.laikeUseyue)(this)},payThree:function(){(0,l.laikePayThree)(this)},_showPayWay:function(){var t=this;this.showPayWay1=!0,setTimeout((function(){t.showPayWay=!1,t.showPayWay1=!1}),500)},forgetPW:function(){uni.navigateTo({url:"../../pagesB/setUp/paymentPassword"})},chooseWay:function(t){(0,l.laikeChooseWay)(this,t)},switchChange:function(t){(0,l.laikeSwitchChange)(t,this)},_uni_navigateTo:function(t){uni.navigateTo({url:t})},getOrderInfo:function(t){return this.laikepay.getOrderInfo(this,t)},weixinPay:function(){this.laikepay.weixin_minipay(this)},pay_wx:function(t){this.laikepay.laikePayMain(this,t)},_coupon:function(){(0,l.laikeShowCoupon)(this)},_closeCoupon:function(){(0,l.laikeCloseCoupon)(this)},in_array:function(t,e){for(var i=0;i<e.length;i++){var a=e[i].toString();if(a==t)return!0}return!1},_coupon_use:function(t,e,i){(0,l.laikeChooseCoupon)(this,t,e,i)},focust:function(){this.focus=!0}},(0,c.mapMutations)({order_id:"SET_ORDER_ID",status:"SET_STATUS",h_content:"SET_H_CONTENT"}),{_pay_style:function(){var t=this;t.adds_f?parseFloat(t.user_money)<parseFloat(t.pro.money)?uni.showToast({title:"余额不足，无法兑换！",icon:"none"}):parseFloat(t.user_score)<parseFloat(t.pro.integral)?uni.showToast({title:"积分不足，无法兑换！",icon:"none"}):"1"==t.password_status?t.pay_display=!0:t.password_display=!0:uni.showToast({title:"请完善收货地址！",icon:"none"})},_confirm:function(){var t=this;if(t.fastTap)if(t.fastTap=!1,t.enterless)if(uni.showLoading({title:"支付中...",mask:!0}),6==t.msg.length){var e={module:"app",action:"user",app:"payment_password",access_id:t.access_id,password:t.msg,endTime:""};uni.request({data:e,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){var i=e.data,a=i.code,o=(i.message,i.enterless);200==a?(t.pay_display=!1,t.fastTap=!0,t._payAxios()):o?(uni.hideLoading(),t.msg="",uni.showToast({title:"您输入密码错误,请重新输入",duration:1e3,icon:"none"}),t.enterless=o,t.fastTap=!0):o||(uni.hideLoading(),uni.showToast({title:"你输入的错误次数已达当日上限，请使用其它支付方式进行付款",duration:1e3,icon:"none"}),t.pay_display=!1,t.enterless=!1,t.fastTap=!0)},error:function(e){uni.hideLoading(),uni.showToast({title:"网络错误，请稍后再试",duration:1e3,icon:"none"}),t.pay_display=!1,t.fastTap=!0}})}else uni.hideLoading(),t.fastTap=!0,uni.showToast({title:"请输入完整密码！",duration:1e3,icon:"none"});else t.fastTap=!0,uni.showToast({title:"您的密码输入错误次数已达当日上限！",duration:1e3,icon:"none"}),t.pay_display=!1},confirm:function(t){this.msg=t,this._confirm()},_cancel:function(){this.pay_display=!1},_payAxios:function(){var t=this;if(t.fastTap){t.fastTap=!1;var e={module:"app",action:"integral",app:"payment",access_id:t.access_id,address_id:t.address_id?t.address_id:t.addre_id,jifen_id:t.jifen_id,store_type:2};uni.request({data:e,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){console.log("--------------------paysuccess"),console.log(e),t.fastTap=!0,uni.hideLoading(),200==e.data.code?(uni.showToast({title:"支付成功",icon:"none"}),t.order_list=e.data,setTimeout((function(){uni.setStorageSync("payRes",t.order_list),uni.redirectTo({url:"../../pages/pay/payResult?is_jifen=true"})}),1e3)):110==e.data.code?uni.showToast({title:e.data.message,duration:1500,icon:"none"}):uni.showToast({title:"兑换失败，请重试！",duration:1500,icon:"none"})},error:function(e){console.log("--------------------payerr"),console.log(e),t.fastTap=!0,uni.hideLoading()}})}},_password_status:function(){uni.navigateTo({url:"../../pagesB/setUp/payment"}),this.password_display=!1},_mask_value:function(t){this.mask_value=t,"确认"==t&&3==this.pay_style&&this._deduction()},_axios:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t=this,e={module:"app",action:"integral",app:"integral_axios",access_id:this.access_id,id:t.jifen_id,address_id:t.address_id};uni.request({data:e,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){if(200!=e.data.code)return t.load=!1,void uni.showToast({title:"交易异常",icon:"none"});var i=e.data,a=(i.addemt,i.address),o=i.freight,n=i.password_status,s=i.products,d=i.total,r=i.user_money,l=i.user_score,c=i.enterless;console.log("==============load============"),t.address=a,t.price=d,t.total=d,t.pro=s,t.pro.money=parseFloat(t.pro.money),t.user_money=r,t.user_score=l,t.addre_id=a.id,t.$store.state.address_id_def||(t.$store.state.address_id_def=a.id),t.password_status=n,t.enterless=c,t.user_money>t.total&&(t.canpay=!0),t.address&&(0!=t.address.length?t.adds_f=!0:t.adds_f=!1),e.data.shop_status&&e.data.shop_list&&(t.shop_status=e.data.shop_status,t.shop_list=e.data.shop_list,0==e.data.shop_list.length?(t.shop_address_id="",uni.setStorageSync("shop_address_id","")):(t.shop_address_id=e.data.shop_list.id,uni.setStorageSync("shop_address_id",e.data.shop_list.id))),t.freightt=parseFloat(o),t.freight=o,t.load=!1,console.log("==============load over============")},error:function(t){console.log(t)}})},changeValue:function(t,e){var i=this;(0,l.laikeChangeValue)(i,t,e)}}),components:{heads:n.default,Maskm:s.default,wxParse:d.default,paymodel:r.default},watch:{address_id:function(t,e){e&&this._axios("address")},msg:function(t){this.msgLength=t.length},page:{handler:function(t,e){0==e&&1==t&&(this.timer=setTimeout((function(){}),500))},deep:!0},freight:function(){var t=this;t.price1=t.products_total*t.discount*t.grade_rate+t.freight-t.coupon_name-t.reduce_money,t.price2=t.price1.toFixed(2),console.log("当前运费为："+t.freight),console.log("当前user_money为："+t.user_money),console.log("当前所有计算金额为："+t.products_total+"==="+t.discount+"==="+t.freight+"==="+t.coupon_name+"==="+t.reduce_money),console.log("当前price2为："+t.price2),t.useWallte&&(Number(t.user_money)>Number(t.price2)?(console.log("me.value11111111111111111"),console.log(t.value),t.value=t.price2,console.log(t.value)):t.needpay=t.price2-t.value),t.price2<0&&(t.price2=.01);var e=this.products_total*this.grade_rate+this.freight-this.coupon_name-this.reduce_money;console.log(e),e<0&&(uni.showToast({title:"异常交易",icon:"none",duration:1500}),uni.navigateBack({delta:1})),t.needpay=t.price2-t.value},coupon_name:function(t,e){this.changeValue(t,e)},value:function(t,e){this.changeValue(t,e)},price1:function(t,e){var i=this;this.$nextTick((function(){i.price1=i.products_total*i.discount*i.grade_rate+i.freight-i.coupon_name-i.reduce_money-i.value,i.price1=Number(i.price1).toFixed(2),i.needpay=i.price1}))}}};e.default=h},"46cb":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.storeLi[data-v-5e240895]{font-size:%?28?%;color:#666;margin-left:%?40?%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #eee}.btn1[data-v-5e240895]{margin-left:%?11?%;color:#9d9d9d}.btn2[data-v-5e240895]{margin-left:%?11?%;color:red}.hide[data-v-5e240895]{display:none!important}.payBtn[data-v-5e240895]{position:absolute;bottom:0;left:0;width:100%;border-bottom-left-radius:%?20?%;border-bottom-right-radius:%?20?%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#fff;background-color:#000;font-size:%?28?%}.maskTitle[data-v-5e240895]{text-align:center;font-size:%?28?%;position:relative}.guanbiImg[data-v-5e240895]{width:%?30?%;height:%?30?%;position:absolute;top:%?20?%;right:%?40?%;z-index:999999}.animate[data-v-5e240895]{width:80%;left:10%;margin:0 auto;position:fixed;height:350px;border-radius:%?20?%;padding:%?20?%;padding-top:%?60?%;background-color:#fff;-webkit-animation:myPay-data-v-5e240895 .5s 1;animation:myPay-data-v-5e240895 .5s 1;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.animate1[data-v-5e240895]{width:80%;left:10%;margin:0 auto;position:fixed;height:350px;border-radius:%?20?%;padding:%?20?%;padding-top:%?60?%;background-color:#fff;-webkit-animation:myPay1-data-v-5e240895 .5s 1;animation:myPay1-data-v-5e240895 .5s 1;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes myPay-data-v-5e240895{from{bottom:%?-1300?%}to{bottom:%?300?%}}@keyframes myPay-data-v-5e240895{from{bottom:%?-1300?%}to{bottom:%?300?%}}@-webkit-keyframes myPay1-data-v-5e240895{from{bottom:%?300?%}to{bottom:%?-1300?%}}@keyframes myPay1-data-v-5e240895{from{bottom:%?300?%}to{bottom:%?-1300?%}}uni-input div uni-input[data-v-5e240895]{color:#000!important}.deco[data-v-5e240895]{width:100%;height:100%;color:#9d9d9d;margin-top:%?20?%;border-top:1px solid #eee;padding-top:%?30?%;\r\n\t/* padding-left: 30upx; */display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.cart_f[data-v-5e240895]{\r\n\t/* min-height: 100vh; */}.address_one[data-v-5e240895],\r\n.goods[data-v-5e240895],\r\n.goods_right>div[data-v-5e240895],\r\n.foot[data-v-5e240895],\r\n.format[data-v-5e240895],\r\n.coupon_sue[data-v-5e240895],\r\n.order_coupon[data-v-5e240895]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.address_one[data-v-5e240895]{padding:%?30?%;font-size:%?28?%;color:#020202}.address_one p[data-v-5e240895]{font-size:%?24?%;color:#9d9d9d;margin-top:%?20?%}.address_two[data-v-5e240895]{height:%?90?%;text-align:center;line-height:%?90?%;font-size:%?30?%;color:#888}.goods[data-v-5e240895]:last-child{border:none}.goods[data-v-5e240895]{padding:%?30?% %?30?% %?30?% 0;border-bottom:1px solid #eee;margin-left:%?30?%}.goods>img[data-v-5e240895]{width:%?120?%;height:%?120?%;margin-right:%?20?%;vertical-align:sub}.goods_right[data-v-5e240895]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:80%;height:%?120?%}.goods_right>p[data-v-5e240895]{font-size:%?24?%;color:#020202;margin-bottom:auto}.goods_bottom p[data-v-5e240895]{font-size:%?26?%;color:#020202;font-weight:700}.format>p[data-v-5e240895]{font-size:%?24?%;color:#333}.format>p[data-v-5e240895]:first-child{font-size:%?20?%;color:#9d9d9d;margin-right:%?30?%}.foot[data-v-5e240895]{height:%?98?%;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?30?%;color:#020202;border:1px solid #eee;position:fixed;left:0;bottom:0;z-index:20;background-color:#fff;padding-left:%?30?%}.foot>p[data-v-5e240895]{width:%?240?%;background-color:#020202;color:#fff;line-height:%?98?%;text-align:center;margin-left:%?30?%}\r\n\r\n/*余额支付密码框*/.payment_pass[data-v-5e240895],\r\n.copon_div[data-v-5e240895]{height:100vh;width:100%;background-color:rgba(0,0,0,.5);position:fixed;top:0;left:0;z-index:45;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.payment_c[data-v-5e240895]{width:%?550?%;height:%?400?%;background-color:#fff;text-align:center;font-size:%?30?%;border-radius:%?23?%;position:relative}.payment_tt[data-v-5e240895]{border-top:1px solid #eee;width:100%;font-size:%?34?%;color:#005edf;height:%?94?%;position:absolute;bottom:0;left:0}.cancel[data-v-5e240895]{border-right:1px solid #eee;color:#999}.confirm[data-v-5e240895]{color:#020202}.cancel[data-v-5e240895],\r\n.confirm[data-v-5e240895]{width:50%;float:left;height:100%;line-height:%?98?%}.payment_c>p[data-v-5e240895]{line-height:%?160?%;font-size:%?30?%;color:#020202}.pwd-wrap[data-v-5e240895],\r\n.pwd-wrap li[data-v-5e240895]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.xian_d[data-v-5e240895]{width:100%}.pwd-wrap li[data-v-5e240895]{width:%?80?%;height:%?80?%;border:1px solid #eee;border-right:none;text-align:center;position:relative}.pwd-wrap li[data-v-5e240895]:last-child{border-right:1px solid #eee}.masd[data-v-5e240895]{width:%?80?%;height:%?80?%;padding:0;position:absolute;top:0;left:0;border:0;text-align:center}.payment_ww[data-v-5e240895]{font-size:%?32?%;color:#020202;margin-top:%?120?%}.payment_boo[data-v-5e240895]{line-height:%?94?%}.copon_div[data-v-5e240895]{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.coupon_sue[data-v-5e240895],\r\n.order_coupon[data-v-5e240895]{padding:%?30?%;color:#020202;font-size:%?28?%}.order_coupon span[data-v-5e240895]{font-size:%?28?%}.coupon_sue[data-v-5e240895]{border-bottom:1px solid #eee}.coupon_ul[data-v-5e240895]{height:45%;background-color:#fff;position:relative;padding:0;overflow:hidden;overflow-y:auto;margin-bottom:%?100?%}.copou_close[data-v-5e240895]{padding:%?30?%;color:#020202;font-size:%?30?%;border-top:1px solid #ddd;position:absolute;bottom:0;left:0;width:100%;text-align:center;z-index:45;background-color:#020202;color:#fff}.order_coupon[data-v-5e240895]{border-bottom:1px solid #eee}.pay_yue[data-v-5e240895]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.head[data-v-5e240895],\r\n.order_header[data-v-5e240895]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.head[data-v-5e240895]{height:%?88?%;padding:0 %?30?%;border-bottom:1px solid #eee;font-size:%?40?%;color:#242424}.head_img[data-v-5e240895]{width:%?24?%;height:%?36?%}.head_search[data-v-5e240895]{width:%?40?%;height:%?40?%;visibility:hidden}.order_header[data-v-5e240895]{-webkit-justify-content:space-around;justify-content:space-around;width:100%;border-bottom:1px solid #d2d2d2}.header_li[data-v-5e240895]{width:25%;text-align:center;height:%?84?%;line-height:%?84?%;border-bottom:1px solid #eee;font-size:%?30?%;color:#9d9d9d}.header_border[data-v-5e240895]{color:#020202;font-weight:700;position:relative}.header_border[data-v-5e240895]:after{border-bottom:%?5?% solid #020202;position:absolute;bottom:0;width:50%;content:"";left:25%}.last_right>div[data-v-5e240895]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.position_head[data-v-5e240895]{position:fixed;left:0;top:0;width:100%;background-color:#fff;z-index:35}.receiving[data-v-5e240895]{width:100%}.afhalen_box[data-v-5e240895]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;padding:%?30?%;color:#020202;font-size:%?28?%}.afhalen_box uni-input[data-v-5e240895]{height:%?60?%;font-size:%?26?%;color:#242424}.switch-box[data-v-5e240895]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?24?%;position:relative;width:%?144?%;height:%?60?%;border-radius:%?30?%;color:#fff;background-color:#4cd864}.switch-item[data-v-5e240895]{position:absolute;top:%?2?%;left:0;width:%?72?%;height:%?56?%;border-radius:%?28?%;background:#fff;box-shadow:-1px 5px 5px 0 rgba(13,4,8,.15);transition:-webkit-transform .3s;-webkit-transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.afhalen_shop img[data-v-5e240895]{width:%?15?%;height:%?27?%}\r\n\r\n/* 优化 */.yh-afhalen_box[data-v-5e240895]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;padding:%?20?% %?30?%}.yh-afhalen-inputa[data-v-5e240895]{width:%?130?%;text-overflow:ellipsis}.yh-afhalen-inputb[data-v-5e240895]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.yh-address_two[data-v-5e240895]{text-align:left;padding-left:15px}.yh-one-box[data-v-5e240895]{width:90%}.yh-one-spana[data-v-5e240895]{margin-right:%?30?%;font-weight:700}.yh-one-spanb[data-v-5e240895]{font-weight:700}.yh-line[data-v-5e240895]{width:100%;height:%?10?%;background-color:#f4f4f4}.yh-storeLi-imga[data-v-5e240895]{width:%?30?%;height:%?30?%;margin-right:%?20?%}.yh-jiantou-img[data-v-5e240895]{width:%?15?%;height:%?30?%;margin-left:%?20?%}.yh-goods_bottom-span[data-v-5e240895]{font-size:%?22?%}.yh-format[data-v-5e240895]{clear:both}.yh-format-p[data-v-5e240895]{font-weight:500}.yh-format-pa[data-v-5e240895]{font-weight:500;color:#020202}.yh-items[data-v-5e240895]{width:100%;height:%?20?%;background-color:#f4f4f4}.yh-order_coupon-spana[data-v-5e240895]{width:70%;text-align:right}.yh-order_coupon-spanb[data-v-5e240895]{font-size:%?30?%;font-weight:700}.yh-order_coupon-spanc[data-v-5e240895]{font-size:%?28?%;color:#020202}.yh-order_coupon-fonta[data-v-5e240895]{color:red;font-size:%?30?%;font-weight:700}.yh-pay-div[data-v-5e240895]{width:100%}.yh-pay_yue[data-v-5e240895]{position:relative;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.yh-pay_yue-div[data-v-5e240895]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.yh-pay_yue-p[data-v-5e240895]{width:%?400?%}.yh-pay_yue-p-font[data-v-5e240895]{font-size:%?28?%;font-weight:700}.yh-deco-num[data-v-5e240895]{color:#020202;font-size:%?28?%;width:%?150?%}.yh-deco-je[data-v-5e240895]{border:%?2?% #b8b8b8 solid;padding:%?10?% %?10?% %?10?% 0;width:%?200?%;border-radius:%?6?%}.yh-deco-je-input[data-v-5e240895]{text-align:right;font-size:%?28?%;color:#000}.yh-pay[data-v-5e240895]{width:100%}.yh-pay-wx-d[data-v-5e240895]{position:relative;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.yh-pay-s[data-v-5e240895]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.yh-pay_div[data-v-5e240895]{margin-left:%?30?%}.yh-pay_div-p[data-v-5e240895]{width:%?400?%}.yh-pay-ye[data-v-5e240895]{font-size:%?30?%;font-weight:600;color:#020202}.yh-wx-pay[data-v-5e240895]{height:%?106?%;width:100%}.yh-pay-numbera[data-v-5e240895]{position:absolute;z-index:222;width:100%;height:%?88?%;opacity:0;-webkit-text-security:disc;text-security:disc}.yh-pay-numberb[data-v-5e240895]{position:absolute;z-index:222;width:100%;height:%?88?%;opacity:0;-webkit-text-security:disc;text-security:disc}.yh-forget[data-v-5e240895]{color:#0080ff;font-size:%?28?%;text-align:right;margin-top:%?10?%;margin-right:%?40?%}.yh-img-s[data-v-5e240895]{width:%?34?%;height:%?34?%}\r\n\r\n/* 优化 */.foot[data-v-5e240895]{\r\n\t/* padding: 0; */}.gopay[data-v-5e240895]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#000;color:#fff;width:100%;height:%?100?%}.yh-mp[data-v-5e240895]{height:%?178?%;position:fixed;background:#fff;z-index:999}.yh-mps[data-v-5e240895]{width:100%;height:%?88?%}.yh-mp-p[data-v-5e240895]{font-size:%?32?%}.yh-address[data-v-5e240895]{width:90%}.yh-address-name[data-v-5e240895]{margin-right:%?30?%;font-weight:700}.yh-address-tel[data-v-5e240895]{font-weight:700}.yh-line[data-v-5e240895]{width:100%;height:%?20?%;background-color:#f4f4f4}.yh-storeLi[data-v-5e240895]{border-bottom:1px solid #eee;color:#666}.yh-storeImg[data-v-5e240895]{width:%?30?%;height:%?30?%;margin-right:%?20?%}.yh-jiantou[data-v-5e240895]{width:%?15?%;height:%?30?%;margin-left:%?20?%}.yh-money[data-v-5e240895]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.yh-money-span[data-v-5e240895]{font-size:%?22?%}.yh-integral[data-v-5e240895]{height:%?26?%;width:%?26?%;margin-right:3px}.yh-format-p1[data-v-5e240895]{font-weight:500}.yh-format-p2[data-v-5e240895]{font-weight:500;color:#020202}.yh-format[data-v-5e240895]{clear:both}.yh-integral_hui[data-v-5e240895]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.yh-integral-color[data-v-5e240895]{color:#999}.yh-user_score[data-v-5e240895]{height:%?26?%;width:%?26?%;margin-right:3px}.yh-freightt[data-v-5e240895]{color:red;font-size:%?30?%;font-weight:700}.yh-heji[data-v-5e240895]{font-size:%?32?%;font-weight:700}.yh-integral_hong[data-v-5e240895]{height:%?26?%;width:%?26?%;margin-right:%?6?%;margin-top:%?6?%}.yh-integral_hongs[data-v-5e240895]{height:%?26?%;width:%?26?%;margin-right:3px}.yh-font[data-v-5e240895]{color:red;font-size:%?30?%;font-weight:700}.yh-mpwx[data-v-5e240895]{position:absolute;z-index:222;width:100%;height:%?88?%;opacity:0;-webkit-text-security:disc;text-security:disc;margin-left:-100%;padding-right:100%}.yh-mpwxs[data-v-5e240895]{position:absolute;z-index:222;width:100%;height:%?88?%;opacity:0;-webkit-text-security:disc;text-security:disc}.yh-wjmi[data-v-5e240895]{color:#0080ff;font-size:%?28?%;text-align:right;margin-top:%?10?%;margin-right:%?40?%}\r\n\r\n/* 上面用的是公共的CSS */#foot[data-v-5e240895]{bottom:0;border:0;height:auto;padding-left:0}.gopay[data-v-5e240895]{border:0;height:%?100?%}',""]),t.exports=e},5315:function(t,e,i){"use strict";var a=i("8951"),o=i.n(a);o.a},"78b6":function(t,e,i){"use strict";var a,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"cart",staticClass:"cart_f"},[i("lktauthorize",{ref:"lktAuthorizeComp",on:{pChangeLoginStatus:function(e){arguments[0]=e=t.$handleEvent(e),t.changeLoginStatus.apply(void 0,arguments)}}}),i("heads",{attrs:{title:t.title}}),t.load?i("div",{staticClass:"load"},[i("div",[i("img",{attrs:{src:t.loadGif}}),i("p",[t._v("加载中")])])]):i("div",{staticClass:"order_detail"},[t.afhalen_translateX<=5&&t.adds_f?i("div",{staticClass:"address_one",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._uni_navigateTo("../../pages/address/receivingAddress?state_manage=1&addre_id="+t.address.id)}}},[i("div",{staticClass:"yh-address"},[i("span",{staticClass:"yh-address-name"},[t._v(t._s(t.address.name))]),i("span",{staticClass:"yh-address-tel"},[t._v(t._s(t.address.tel))]),i("p",[t._v(t._s(t.address.address_xq))])]),i("img",{staticClass:"arrow",attrs:{src:t.jiantou}})]):t._e(),t.afhalen_translateX<=5&&!t.adds_f?i("div",{staticClass:"address_two",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._uni_navigateTo("../../pages/address/addAddress?state_addre=1&addNum=0")}}},[i("span",[t._v("+")]),i("span",[t._v("点击添加地址")])]):t._e(),i("div",{staticClass:"yh-line"}),i("div",[i("ul",[t.pro.mch_id>0?i("li",{staticClass:"storeLi yh-storeLi"},[i("img",{staticClass:"yh-storeImg",attrs:{src:t.storeImg}}),t._v(t._s(t.pro.shop_name)),i("img",{staticClass:"yh-jiantou",attrs:{src:t.jiantou}})]):t._e(),i("li",{staticClass:"goods"},[i("img",{attrs:{src:t.pro.imgurl}}),i("div",{staticClass:"goods_right"},[i("p",[t._v(t._s(t.pro.product_title))]),i("div",{staticClass:"goods_bottom"},[t.pro.money>0?i("p",{staticClass:"yh-money"},[i("span",{staticClass:"yh-money-span"},[t._v("￥")]),t._v(t._s(t.pro.money)+"+"),i("img",{staticClass:"yh-integral",attrs:{src:t.integral_hei}}),t._v(t._s(t.pro.integral))]):i("p",[i("img",{staticClass:"yh-integral",attrs:{src:t.integral_hei}}),t._v(t._s(t.pro.integral))]),i("div",{staticClass:"format yh-format"},[i("p",{staticClass:"yh-format-p1"},[t._v("规格："+t._s(t.pro.attribute))]),i("p",{staticClass:"yh-format-p2"},[t._v("x1")])])])])]),i("div",{staticClass:"yh-line"})])]),i("ul",[i("li",{staticClass:"order_coupon"},[i("span",[t._v("商品金额"),i("v-uni-text",{staticClass:"yh-integral-color"},[t._v("（余额￥"+t._s(t.user_money)+"）")])],1),i("span",[t._v("￥"+t._s(t.pro.money))])]),i("li",{staticClass:"order_coupon"},[i("v-uni-view",{staticClass:"yh-integral_hui"},[t._v("积分总额"),i("v-uni-view",{staticClass:"yh-integral_hui yh-integral-color"},[t._v("（积分"),i("img",{staticClass:"yh-user_score",attrs:{src:t.integral_hui}}),t._v(t._s(t.user_score)+"）")])],1),i("v-uni-view",{staticClass:"yh-integral_hui"},[i("img",{staticClass:"yh-user_score",attrs:{src:t.integral_hei}}),t._v(t._s(t.pro.integral))])],1),i("li",{staticClass:"order_coupon"},[i("span",[t._v("运费")]),0==t.freightt?i("span",[t._v("包邮")]):i("span",[t._v("￥"+t._s(t.freightt))])]),i("li",{staticClass:"order_coupon"},[i("span",{staticClass:"yh-heji"},[t._v("合计：")]),i("span",[t.pro.money>0||t.freightt>0?i("v-uni-view",{staticClass:"yh-integral_hui yh-freightt"},[t._v("￥"+t._s(t.pro.money+t.freightt)+"+"),i("img",{staticClass:"yh-integral_hong",attrs:{src:t.integral_hong}}),t._v(t._s(t.pro.integral))]):i("v-uni-text",{staticClass:"yh-font"},[i("img",{staticClass:"yh-integral_hongs",attrs:{src:t.integral_hong}}),t._v(t._s(t.pro.integral))])],1)])]),i("div",{staticClass:"foot",attrs:{id:"foot"}},[i("span",{staticClass:"gopay",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._pay_style()}}},[t._v("确认兑换")])])]),t.password_display?i("div",{staticClass:"payment_pass"},[i("div",{staticClass:"payment_c"},[i("div",{staticClass:"payment_ww"},[t._v("无支付密码，前往设置！")]),i("div",{staticClass:"payment_tt payment_boo",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._password_status.apply(void 0,arguments)}}},[t._v("去设置")])])]):t._e(),i("paymodel",{on:{success:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)},cancel:function(e){arguments[0]=e=t.$handleEvent(e),t._cancel.apply(void 0,arguments)}},model:{value:t.pay_display,callback:function(e){t.pay_display=e},expression:"pay_display"}})],1)},n=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},8951:function(t,e,i){var a=i("46cb");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("0f4b54a4",a,!0,{sourceMap:!1,shadowMode:!1})},"9e05":function(t,e,i){"use strict";i.r(e);var a=i("2843"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},b041d:function(t,e,i){"use strict";i.r(e);var a=i("78b6"),o=i("9e05");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("5315");var s,d=i("f0c5"),r=Object(d["a"])(o["default"],a["b"],a["c"],!1,null,"5e240895",null,!1,a["a"],s);e["default"]=r.exports}}]);