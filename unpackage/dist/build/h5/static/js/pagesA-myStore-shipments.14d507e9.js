(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-myStore-shipments"],{"281e":function(i,e,t){var n=t("36d16");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var a=t("4f06").default;a("09f412c4",n,!0,{sourceMap:!1,shadowMode:!1})},"36d16":function(i,e,t){var n=t("24fb");e=n(!1),e.push([i.i,".container[data-v-6ecbd736]{min-height:100vh;background-color:#f4f4f4;padding-bottom:%?98?%;box-sizing:border-box}.list[data-v-6ecbd736]{background-color:#fff}.list_li[data-v-6ecbd736]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?180?%;margin-left:%?30?%;padding:%?30?% %?30?% %?30?% 0;box-sizing:border-box}.list .list_li[data-v-6ecbd736]:not(:last-child){border-bottom:1px solid #e6e6e6}.list_li .image[data-v-6ecbd736]{width:%?120?%;height:%?120?%;margin-right:%?20?%}.xuanze[data-v-6ecbd736],.xuanze_i[data-v-6ecbd736]{width:%?34?%;height:%?34?%;border-radius:%?34?%;margin-right:%?30?%}.xuanze_i[data-v-6ecbd736]{box-sizing:border-box;border:1px solid #b8b8b8}.list_li .right[data-v-6ecbd736]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.list_li .right .view[data-v-6ecbd736]{color:#020202;font-size:%?24?%;line-height:%?28?%;margin-bottom:%?20?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis}.list_li .right .text[data-v-6ecbd736]{display:inline-block;color:#999;font-size:%?22?%;line-height:%?22?%}.bottom[data-v-6ecbd736]{display:-webkit-box;display:-webkit-flex;display:flex;position:fixed;bottom:0;left:0;right:0;height:%?98?%}.bottom .xuanze[data-v-6ecbd736],.bottom .xuanze_i[data-v-6ecbd736]{margin-right:%?12?%}.bottom>uni-view[data-v-6ecbd736]:first-child{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?30?%;background:#fff}.bottom>uni-view[data-v-6ecbd736]:last-child{width:%?240?%;height:100%;background:#000;color:#fff;font-size:%?30?%;line-height:%?98?%;text-align:center}.jiantou[data-v-6ecbd736]{width:%?15?%;height:%?27?%}._ul[data-v-6ecbd736]{background-color:#fff;padding-left:%?30?%}._li[data-v-6ecbd736]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?90?%;padding-right:%?30?%;box-sizing:border-box}._ul>._li[data-v-6ecbd736]:not(:last-child){border-bottom:1px solid #e6e6e6}._li uni-text[data-v-6ecbd736]{color:#020202;font-size:%?28?%}._li uni-input[data-v-6ecbd736]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:%?60?%;font-size:%?28?%}.bottom_ship[data-v-6ecbd736]{position:fixed;left:0;right:0;bottom:0;height:%?98?%;line-height:%?98?%;text-align:center;font-size:%?30?%;color:#fff;background-color:#020202}",""]),i.exports=e},"3cd4":function(i,e,t){"use strict";t.r(e);var n=t("cd29"),a=t.n(n);for(var o in n)"default"!==o&&function(i){t.d(e,i,(function(){return n[i]}))}(o);e["default"]=a.a},7020:function(i,e,t){"use strict";var n,a=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("v-uni-view",{staticClass:"container"},[t("lktauthorize",{ref:"lktAuthorizeComp"}),t("heads",{attrs:{title:i.title}}),"选择商品"==i.title?[t("v-uni-view",{staticClass:"list"},i._l(i.list.list,(function(e,n){return 1==e.r_status?t("v-uni-view",{key:n,staticClass:"list_li",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i._choose(e)}}},[e.chooseMe?t("v-uni-image",{staticClass:"xuanze",attrs:{src:i.xuanze}}):t("v-uni-view",{staticClass:"xuanze_i"}),t("v-uni-image",{staticClass:"image",attrs:{src:e.imgurl}}),t("v-uni-view",{staticClass:"right"},[t("v-uni-view",{staticClass:"view"},[i._v(i._s(e.p_name))]),t("v-uni-view",{staticClass:"text"},[i._v(i._s(e.size))])],1)],1):i._e()})),1),t("v-uni-view",{staticClass:"bottom"},[t("v-uni-view",{on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i._chooseQ.apply(void 0,arguments)}}},[i.quanxuan?t("v-uni-image",{staticClass:"xuanze",attrs:{src:i.xuanze}}):t("v-uni-view",{staticClass:"xuanze_i"}),i._v("全选")],1),t("v-uni-view",{on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i._shipments.apply(void 0,arguments)}}},[i._v("发货")])],1)]:[t("v-uni-view",{staticClass:"_ul"},[t("v-uni-view",{staticClass:"_li"},[t("v-uni-text",[i._v("快递公司")]),t("v-uni-input",{attrs:{type:"text",disabled:!0,placeholder:"请选择快递公司"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.showSinglePicker.apply(void 0,arguments)}},model:{value:i.company,callback:function(e){i.company=e},expression:"company"}}),t("v-uni-image",{staticClass:"jiantou",attrs:{src:i.jiantou},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.showSinglePicker.apply(void 0,arguments)}}})],1),t("v-uni-view",{staticClass:"_li"},[t("v-uni-text",[i._v("快递单号")]),t("v-uni-input",{attrs:{type:"text",placeholder:"请填写快递单号"},model:{value:i.courier_num,callback:function(e){i.courier_num=e},expression:"courier_num"}})],1)],1),t("v-uni-view",{staticClass:"bottom_ship",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i._shipments1.apply(void 0,arguments)}}},[i._v("确定")]),t("mpvue-picker",{directives:[{name:"show",rawName:"v-show",value:i.show,expression:"show"}],ref:"mpvuePicker",attrs:{themeColor:i.themeColor,mode:i.mode,deepLength:i.deepLength,pickerValueDefault:i.pickerValueDefault,pickerValueArray:i.pickerValueArray},on:{onConfirm:function(e){arguments[0]=e=i.$handleEvent(e),i.onConfirm.apply(void 0,arguments)}}})]],2)},o=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return n}))},"8c8a":function(i,e,t){"use strict";var n=t("281e"),a=t.n(n);a.a},cd29:function(i,e,t){"use strict";var n=t("ee27");t("a15b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(t("43a0")),o=(t("83c3"),n(t("3bec"))),s={data:function(){return{title:"选择商品",access_id:"",list:"",xuanze:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/xuanze_hd.png",jiantou:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/jiantou2x.png",quanxuan:!1,courier_num:"",company:"",orderList_id:"",sNo:"",shop_id:"",kuaidiList:[],express_id:"",show:!1,themeColor:"#007AFF",mode:"",deepLength:1,pickerValueDefault:[0],pickerValueArray:[]}},computed:{},onLoad:function(i){var e=this;e.access_id=uni.getStorageSync("access_id")?uni.getStorageSync("access_id"):e.$store.state.access_id,e.shop_id=uni.getStorageSync("shop_id")?uni.getStorageSync("shop_id"):e.$store.state.shop_id,e.list=JSON.parse(i.shops),console.log(e.list)},onShow:function(){},methods:{_choose:function(i){this.$set(i,"chooseMe",!i.chooseMe);for(var e=this.list.list,t=!0,n=0;n<e.length;n++)if(!e[n].chooseMe){t=!1;break}this.quanxuan=t},_chooseQ:function(){this.quanxuan=!this.quanxuan;for(var i=this.list.list,e=0;e<i.length;e++)this.$set(i[e],"chooseMe",this.quanxuan)},_shipments:function(){var i=this;i.orderList_id=[];for(var e=i.list.list,t=0;t<e.length;t++)e[t].chooseMe&&1==e[t].r_status&&i.orderList_id.push(e[t].id);i.sNo=i.list.sNo,0!=i.orderList_id.length?(uni.showLoading({title:"加载中..."}),uni.request({url:uni.getStorageSync("url"),data:{access_id:i.access_id,shop_id:i.shop_id,module:"app",action:"mch",m:"into_send"},header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){if(uni.hideLoading(),200==e.data.code){var t=[];for(var n in i.kuaidiList=e.data.list,e.data.list)t.push(e.data.list[n].kuaidi_name);i.pickerValueArray=t,i.title="填写物流信息"}else 404==e.data.code?(uni.showToast({title:e.data.message,duration:1500,icon:"none"}),setTimeout((function(){uni.navigateTo({url:"../../pages/login/login?landing_code=1"})}),1500)):uni.showToast({title:e.data.message,duration:1500,icon:"none"})}})):uni.showToast({title:"请选择发货商品",duration:1500,icon:"none"})},_shipments1:function(){var i=this,e={access_id:i.access_id,shop_id:i.shop_id,module:"app",action:"mch",m:"send",sNo:i.sNo,express_id:i.express_id,courier_num:i.courier_num,orderList_id:i.orderList_id.join(",")};uni.request({url:uni.getStorageSync("url"),data:e,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(i){200==i.data.code?(uni.showToast({title:"发货成功",duration:1500,icon:"none"}),setTimeout((function(){uni.navigateBack({delta:1})}),1500)):404==i.data.code?(uni.showToast({title:i.data.message,duration:1500,icon:"none"}),setTimeout((function(){uni.navigateTo({url:"../../pages/login/login?landing_code=1"})}),1500)):uni.showToast({title:i.data.message,duration:1500,icon:"none"})},error:function(i){}})},showSinglePicker:function(){this.show=!0,this.mode="selector",this.deepLength=1,this.pickerValueDefault=[0],this.$refs.mpvuePicker.show()},onConfirm:function(i){this.company=i.label,this.show=!1,this.express_id=this.kuaidiList[i.index[0]].id}},components:{heads:a.default,mpvuePicker:o.default}};e.default=s},fda4:function(i,e,t){"use strict";t.r(e);var n=t("7020"),a=t("3cd4");for(var o in a)"default"!==o&&function(i){t.d(e,i,(function(){return a[i]}))}(o);t("8c8a");var s,l=t("f0c5"),c=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"6ecbd736",null,!1,n["a"],s);e["default"]=c.exports}}]);