(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesB-vip-vip_share"],{"1f13":function(t,e,a){"use strict";a.r(e);var i=a("f8da"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},2184:function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"relative"},[a("heads",{attrs:{title:t.title}}),a("div",{style:"top: "+t.top+"px",attrs:{id:"copyshare"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveImg.apply(void 0,arguments)}}},[t._v("保存")])],1),a("div",{staticClass:"canvas"},[a("img",{attrs:{src:t.canvas}})])])},o=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}))},"43a0":function(t,e,a){"use strict";a.r(e);var i=a("7b01"),n=a("be76");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("bdc9");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"4b3c7e46",null,!1,i["a"],r);e["default"]=c.exports},"59fb":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".border[data-v-4b3c7e46]{border-bottom:0 solid #eee!important}.head[data-v-4b3c7e46]{position:fixed;left:0;top:0;background-color:#fff!important;width:100%;z-index:9999}.head .white[data-v-4b3c7e46]{background:#fff}.header[data-v-4b3c7e46]{background-color:#fff;width:100%;height:%?88?%;border-bottom:1px solid #eee;color:#020202;font-size:%?40?%}.header img[data-v-4b3c7e46]{position:absolute;top:%?26?%;left:%?20?%;width:%?24?%;height:%?36?%}.header a[data-v-4b3c7e46]{position:absolute;width:%?36?%;height:%?36?%;border-radius:50%}.header_img[data-v-4b3c7e46]{top:%?46?%!important;left:%?10?%!important;width:%?64?%!important;height:%?64?%!important}.header p[data-v-4b3c7e46]{text-align:center;width:100%;height:100%;line-height:%?88?%;color:#020202;font-size:%?32?%}.header>div[data-v-4b3c7e46]{height:%?88?%;width:%?160?%;position:absolute;z-index:9999}.head_w[data-v-4b3c7e46]{background:transparent;border-bottom:0}.title_w[data-v-4b3c7e46]{color:#fff!important}",""]),t.exports=e},"5c0b":function(t,e,a){"use strict";a.r(e);var i=a("2184"),n=a("1f13");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("ee9d");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"6fc90d9f",null,!1,i["a"],r);e["default"]=c.exports},"5e82":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".canvas[data-v-6fc90d9f]{position:relative;width:100%;padding:%?30?%}.canvas>img[data-v-6fc90d9f]{width:100%;height:%?1120?%}#copyshare[data-v-6fc90d9f]{position:absolute;height:%?88?%;line-height:%?88?%;padding:0 %?26?%;right:0;z-index:9999;font-size:%?26?%}#copyshare1[data-v-6fc90d9f]{height:%?66?%;line-height:%?66?%;width:100%;font-size:%?26?%;z-index:100;text-align:right;color:#242424;padding-right:%?30?%}",""]),t.exports=e},"77e9":function(t,e,a){"use strict";var i=a("ee27");a("a9e3"),a("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("f3f3")),o=a("2f62"),r=a("83c3"),s={data:function(){return{flag:!0,bback:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/bback.png",back:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png"}},computed:{halfWidth:function(){var t=(0,r.getStorage)("data_height")?(0,r.getStorage)("data_height"):this.$store.state.data_height,e=parseInt(t);return e+"px"},BoxHeight:function(){var t=(0,r.getStorage)("data_height")?(0,r.getStorage)("data_height"):this.$store.state.data_height,e=0,a=parseInt(t)+uni.upx2px(88);return e=a&&a>0?a:uni.upx2px(88),e+"px"}},onLoad:function(t){console.log("header"),console.log(this.returnR)},props:["title","returnR","navWhite","returnFlag","border","ishead_w"],methods:(0,n.default)({},(0,o.mapMutations)({status:"data_height"}),{_back:function(){this.flag=!1,console.log(this.returnR)},_back1:function(){switch(this.flag=!1,Number(this.returnR)){case 1:uni.navigateBack({delta:2});break;case 2:uni.switchTab({url:"../tabBar/shoppingCart"});break;case 3:uni.redirectTo({url:"../login/login.vue"});break;case 4:uni.navigateBack({delta:3});break;case 5:uni.redirectTo({url:"../order/myOrder"});break;case 6:uni.switchTab({url:"../../pages/tabBar/home"});break;case 7:uni.switchTab({url:"../../pages/tabBar/my"});break;case 8:uni.switchTab({url:"../tabBar/my"});break;case 9:uni.redirectTo({url:"/pagesA/myStore/myStore"});break;default:getCurrentPages().length>1?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/tabBar/home"})}this.flag=!0}})};e.default=s},"7b01":function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:"display:flex;height:"+t.BoxHeight},[a("div",{staticClass:"head",class:{head_w:"1"==t.ishead_w,border:1==t.border}},[a("div",{class:{white:!t.navWhite},style:{height:t.halfWidth}}),a("div",{staticClass:"header"},[t.flag&&!t.returnFlag?a("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._back1.apply(void 0,arguments)}}},["1"==t.ishead_w?a("img",{attrs:{src:t.back1}}):a("img",{attrs:{src:t.back}})]):t._e(),t.flag||t.returnFlag?t._e():a("img",{staticClass:"header_img",attrs:{src:t.bback},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._back1.apply(void 0,arguments)}}}),a("p",{class:{title_w:"1"==t.ishead_w}},[t._v(t._s(t.title))])])])])},o=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}))},"83c3":function(t,e,a){"use strict";function i(t,e){uni.setStorage({key:t,data:e,success:function(){console.log("setSuccess")}})}function n(t){var e;return uni.getStorage({key:t,success:function(t){e=t.data,console.log("getSuccess")}}),e}function o(t){uni.removeStorage({key:t,success:function(t){console.log("removeSuccess")}})}Object.defineProperty(e,"__esModule",{value:!0}),e.setStorage=i,e.getStorage=n,e.removeStorage=o},"8db7":function(t,e,a){var i=a("5e82");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("64f812d2",i,!0,{sourceMap:!1,shadowMode:!1})},bdc9:function(t,e,a){"use strict";var i=a("f1f0"),n=a.n(i);n.a},be76:function(t,e,a){"use strict";a.r(e);var i=a("77e9"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},ee9d:function(t,e,a){"use strict";var i=a("8db7"),n=a.n(i);n.a},f1f0:function(t,e,a){var i=a("59fb");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("28b2ad60",i,!0,{sourceMap:!1,shadowMode:!1})},f8da:function(t,e,a){"use strict";var i=a("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("43a0")),o={data:function(){return{title:"会员分享",canvas:"",top:"0",saveImgFlag:!0}},components:{Heads:n.default},onLoad:function(){},onShow:function(){this.access_id=uni.getStorageSync("access_id")?uni.getStorageSync("access_id"):this.$store.state.access_id,this._axios()},methods:{_axios:function(){var t,e=this,a={access_id:e.access_id,module:"app",action:"recharge",app:"share",store_type:t};uni.request({data:a,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){200==t.data.code&&(e.canvas=t.data.imgUrl)},error:function(t){console.log(t)}})},saveImg:function(){if(this.saveImgFlag){this.saveImgFlag=!1;var t=this;uni.getImageInfo({src:t.canvas,success:function(e){e.path&&uni.saveImageToPhotosAlbum({filePath:e.path,success:function(){uni.showToast({icon:"none",title:"保存成功"})},complete:function(){t.saveImgFlag=!0}})}})}}}};e.default=o}}]);