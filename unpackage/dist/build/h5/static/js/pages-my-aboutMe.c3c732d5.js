(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-aboutMe"],{"0352":function(e,t,a){"use strict";a.r(t);var n=a("e29a"),i=a("ce98");for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("5aa4");var o,c=a("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"760eb09a",null,!1,n["a"],o);t["default"]=s.exports},"11f8":function(e,t,a){"use strict";a.r(t);var n=a("c4ae"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},1716:function(e,t,a){var n=a("f7ae");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("27324188",n,!0,{sourceMap:!1,shadowMode:!1})},"396f":function(e,t,a){"use strict";var n,i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"us-all"},[a("heads",{attrs:{title:e.title}}),a("toload",{attrs:{load:e.load}},[a("v-uni-rich-text",{staticClass:"yh-contentNodes",attrs:{nodes:e.contentNodes}})],1)],1)},r=[];a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}))},"3e79":function(e,t,a){"use strict";a("c975"),a("13d5"),a("4d63"),a("ac1f"),a("25f0"),a("466d"),a("5319"),a("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,i=/^<\/([-A-Za-z0-9_]+)[^>]*>/,r=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,o=h("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),c=h("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),s=h("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),d=h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),l=h("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),u=h("script,style");function f(e,t){var a,f,h,b=[],g=e;b.last=function(){return this[this.length-1]};while(e){if(f=!0,b.last()&&u[b.last()])e=e.replace(new RegExp("([\\s\\S]*?)</"+b.last()+"[^>]*>"),(function(e,a){return a=a.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),t.chars&&t.chars(a),""})),m("",b.last());else if(0==e.indexOf("\x3c!--")?(a=e.indexOf("--\x3e"),a>=0&&(t.comment&&t.comment(e.substring(4,a)),e=e.substring(a+3),f=!1)):0==e.indexOf("</")?(h=e.match(i),h&&(e=e.substring(h[0].length),h[0].replace(i,m),f=!1)):0==e.indexOf("<")&&(h=e.match(n),h&&(e=e.substring(h[0].length),h[0].replace(n,v),f=!1)),f){a=e.indexOf("<");var p=a<0?e:e.substring(0,a);e=a<0?"":e.substring(a),t.chars&&t.chars(p)}if(e==g)throw"Parse Error: "+e;g=e}function v(e,a,n,i){if(a=a.toLowerCase(),c[a])while(b.last()&&s[b.last()])m("",b.last());if(d[a]&&b.last()==a&&m("",a),i=o[a]||!!i,i||b.push(a),t.start){var u=[];n.replace(r,(function(e,t){var a=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:l[t]?t:"";u.push({name:t,value:a,escaped:a.replace(/(^|[^\\])"/g,'$1\\"')})})),t.start&&t.start(a,u,i)}}function m(e,a){if(a){for(n=b.length-1;n>=0;n--)if(b[n]==a)break}else var n=0;if(n>=0){for(var i=b.length-1;i>=n;i--)t.end&&t.end(b[i]);b.length=n}}m()}function h(e){for(var t={},a=e.split(","),n=0;n<a.length;n++)t[a[n]]=!0;return t}function b(e){return e.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}function g(e){return e.reduce((function(e,t){var a=t.value,n=t.name;return e[n]?e[n]=e[n]+" "+a:e[n]=a,e}),{})}function p(e){e=b(e);var t=[],a={node:"root",children:[]};return f(e,{start:function(e,n,i){var r={name:e};if(0!==n.length&&(r.attrs=g(n)),i){var o=t[0]||a;o.children||(o.children=[]),o.children.push(r)}else t.unshift(r)},end:function(e){var n=t.shift();if(n.name!==e&&console.error("invalid state: mismatch end tag"),0===t.length)a.children.push(n);else{var i=t[0];i.children||(i.children=[]),i.children.push(n)}},chars:function(e){var n={type:"text",text:e};if(0===t.length)a.children.push(n);else{var i=t[0];i.children||(i.children=[]),i.children.push(n)}},comment:function(e){var a={node:"comment",text:e},n=t[0];n.children||(n.children=[]),n.children.push(a)}}),a.children}var v=p;t.default=v},"43a0":function(e,t,a){"use strict";a.r(t);var n=a("7b01"),i=a("be76");for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("bdc9");var o,c=a("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"4b3c7e46",null,!1,n["a"],o);t["default"]=s.exports},"44d5":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{loadGif:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/loading.gif"}},props:["load"]};t.default=n},"59fb":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".border[data-v-4b3c7e46]{border-bottom:0 solid #eee!important}.head[data-v-4b3c7e46]{position:fixed;left:0;top:0;background-color:#fff!important;width:100%;z-index:9999}.head .white[data-v-4b3c7e46]{background:#fff}.header[data-v-4b3c7e46]{background-color:#fff;width:100%;height:%?88?%;border-bottom:1px solid #eee;color:#020202;font-size:%?40?%}.header img[data-v-4b3c7e46]{position:absolute;top:%?26?%;left:%?20?%;width:%?24?%;height:%?36?%}.header a[data-v-4b3c7e46]{position:absolute;width:%?36?%;height:%?36?%;border-radius:50%}.header_img[data-v-4b3c7e46]{top:%?46?%!important;left:%?10?%!important;width:%?64?%!important;height:%?64?%!important}.header p[data-v-4b3c7e46]{text-align:center;width:100%;height:100%;line-height:%?88?%;color:#020202;font-size:%?32?%}.header>div[data-v-4b3c7e46]{height:%?88?%;width:%?160?%;position:absolute;z-index:9999}.head_w[data-v-4b3c7e46]{background:transparent;border-bottom:0}.title_w[data-v-4b3c7e46]{color:#fff!important}",""]),e.exports=t},"5aa4":function(e,t,a){"use strict";var n=a("1716"),i=a.n(n);i.a},6907:function(e,t,a){"use strict";var n=a("fcd3"),i=a.n(n);i.a},"77e9":function(e,t,a){"use strict";var n=a("ee27");a("a9e3"),a("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("f3f3")),r=a("2f62"),o=a("83c3"),c={data:function(){return{flag:!0,bback:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/bback.png",back:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png"}},computed:{halfWidth:function(){var e=(0,o.getStorage)("data_height")?(0,o.getStorage)("data_height"):this.$store.state.data_height,t=parseInt(e);return t+"px"},BoxHeight:function(){var e=(0,o.getStorage)("data_height")?(0,o.getStorage)("data_height"):this.$store.state.data_height,t=0,a=parseInt(e)+uni.upx2px(88);return t=a&&a>0?a:uni.upx2px(88),t+"px"}},onLoad:function(e){console.log("header"),console.log(this.returnR)},props:["title","returnR","navWhite","returnFlag","border","ishead_w"],methods:(0,i.default)({},(0,r.mapMutations)({status:"data_height"}),{_back:function(){this.flag=!1,console.log(this.returnR)},_back1:function(){switch(this.flag=!1,Number(this.returnR)){case 1:uni.navigateBack({delta:2});break;case 2:uni.switchTab({url:"../tabBar/shoppingCart"});break;case 3:uni.redirectTo({url:"../login/login.vue"});break;case 4:uni.navigateBack({delta:3});break;case 5:uni.redirectTo({url:"../order/myOrder"});break;case 6:uni.switchTab({url:"../../pages/tabBar/home"});break;case 7:uni.switchTab({url:"../../pages/tabBar/my"});break;case 8:uni.switchTab({url:"../tabBar/my"});break;case 9:uni.redirectTo({url:"/pagesA/myStore/myStore"});break;default:getCurrentPages().length>1?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/tabBar/home"})}this.flag=!0}})};t.default=c},"79c2":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".us-all[data-v-64015b9a]{height:100vh;background-color:#fff}.logo[data-v-64015b9a]{margin:%?60?% 0 %?100?% 0;text-align:center;position:relative;padding:0 %?30?%}.logo img[data-v-64015b9a]{width:%?320?%;height:%?128?%}.about-us[data-v-64015b9a]{margin:0 %?20?%;color:#020202;font-size:%?24?%;margin-bottom:%?20?%}.about-us p[data-v-64015b9a]:first-child{font-size:%?34?%;margin-bottom:%?30?%}.margin_b[data-v-64015b9a]{margin-bottom:%?10?%}\r\n\r\n/* 优化 */.yh-contentNodes[data-v-64015b9a]{font-size:14px;padding:%?8?%}",""]),e.exports=t},"7b01":function(e,t,a){"use strict";var n,i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:"display:flex;height:"+e.BoxHeight},[a("div",{staticClass:"head",class:{head_w:"1"==e.ishead_w,border:1==e.border}},[a("div",{class:{white:!e.navWhite},style:{height:e.halfWidth}}),a("div",{staticClass:"header"},[e.flag&&!e.returnFlag?a("div",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._back1.apply(void 0,arguments)}}},["1"==e.ishead_w?a("img",{attrs:{src:e.back1}}):a("img",{attrs:{src:e.back}})]):e._e(),e.flag||e.returnFlag?e._e():a("img",{staticClass:"header_img",attrs:{src:e.bback},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._back1.apply(void 0,arguments)}}}),a("p",{class:{title_w:"1"==e.ishead_w}},[e._v(e._s(e.title))])])])])},r=[];a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}))},"7dff":function(e,t,a){"use strict";a.r(t);var n=a("396f"),i=a("11f8");for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("6907");var o,c=a("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"64015b9a",null,!1,n["a"],o);t["default"]=s.exports},"83c3":function(e,t,a){"use strict";function n(e,t){uni.setStorage({key:e,data:t,success:function(){console.log("setSuccess")}})}function i(e){var t;return uni.getStorage({key:e,success:function(e){t=e.data,console.log("getSuccess")}}),t}function r(e){uni.removeStorage({key:e,success:function(e){console.log("removeSuccess")}})}Object.defineProperty(t,"__esModule",{value:!0}),t.setStorage=n,t.getStorage=i,t.removeStorage=r},bdc9:function(e,t,a){"use strict";var n=a("f1f0"),i=a.n(n);i.a},be76:function(e,t,a){"use strict";a.r(t);var n=a("77e9"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},c4ae:function(e,t,a){"use strict";var n=a("ee27");a("4d63"),a("ac1f"),a("25f0"),a("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("43a0")),r=n(a("3e79")),o=n(a("0352")),c={data:function(){return{title:"关于我们",log:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/15306155488.png",content:"",contentNodes:[],load:!1}},onLoad:function(){var e=this;uni.request({data:{module:"app",action:"user",app:"about_us"},url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){if(200==t.data.code){e.load=!0,e.content="<div style='padding-left:8px;padding-right:8px;'>"+t.data.aboutus.replace(new RegExp("<view","gm"),"<p").replace(new RegExp("</view>","gm"),"</p>")+"</div>";var a=e.content.replace(/\\/g,"").replace(/<img/g,"<img  style='width:318px;height:230px;margin-left:-5px;' ");e.contentNodes=(0,r.default)(a)}else uni.showToast({title:t.data.message,duration:1500,icon:"none"})}})},components:{Heads:i.default,toload:o.default}};t.default=c},ce98:function(e,t,a){"use strict";a.r(t);var n=a("44d5"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},e29a:function(e,t,a){"use strict";var n,i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"toload"},[e.load?e._t("default"):a("v-uni-view",{staticClass:"t-h"},[a("v-uni-view",{staticClass:"loadbox"},[a("v-uni-image",{staticClass:"loadbox-img",attrs:{src:e.loadGif,mode:""}}),a("v-uni-view",{staticClass:"loadbox-text"},[e._v("加载中…")])],1)],1)],2)},r=[];a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}))},f1f0:function(e,t,a){var n=a("59fb");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("28b2ad60",n,!0,{sourceMap:!1,shadowMode:!1})},f7ae:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".toload[data-v-760eb09a]{\n\t/* min-height: calc(100vh - 90rpx); */}.t-h[data-v-760eb09a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;min-height:calc(100vh - %?200?%)}.loadbox[data-v-760eb09a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?200?%;height:%?200?%;border-radius:%?10?%;background-color:rgba(0,0,0,.6);margin:0 auto}.loadbox-img[data-v-760eb09a]{width:%?40?%;height:%?40?%;margin:%?50?% 0 %?20?% 0}.loadbox-text[data-v-760eb09a]{margin-top:%?20?%;color:#fff}",""]),e.exports=t},fcd3:function(e,t,a){var n=a("79c2");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("33adc7e0",n,!0,{sourceMap:!1,shadowMode:!1})}}]);