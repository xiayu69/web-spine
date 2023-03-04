System.register("chunks:///_virtual/Define.ts",["cc"],(function(E){"use strict";var n;return{setters:[function(E){n=E.cclegacy}],execute:function(){var e,N;E("EventType",void 0),n._RF.push({},"ab0d5Ig2d9CvIOYQDmI8H/n","Define",void 0),function(E){E[E.NONE=0]="NONE",E[E.REFRESH_SKELETON=1]="REFRESH_SKELETON",E[E.CHANGE_SPINE=2]="CHANGE_SPINE",E[E.CHANGE_SPINE_ANIMATION=3]="CHANGE_SPINE_ANIMATION",E[E.UPDATE_SPINE_SKIN=4]="UPDATE_SPINE_SKIN",E[E.OPENOROFF_DEBUG=5]="OPENOROFF_DEBUG",E[E.CHANGE_SPINE_LOOP=6]="CHANGE_SPINE_LOOP",E[E.UPDATE_SCALE=7]="UPDATE_SCALE"}(e||(e=E("EventType",{}))),function(E){E[E.none=0]="none",E[E.Spine_view=1]="Spine_view",E[E.Animation_view=2]="Animation_view",E[E.Skin_viwe=3]="Skin_viwe"}(N||(N={}));E("EventData",(function(){this.eventType=e.NONE,this.param=null}));n._RF.pop()}}}));

System.register("chunks:///_virtual/Drag.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,o,r,i,a,s,c,u,p,h,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){i=e.cclegacy,a=e._decorator,s=e.Camera,c=e.find,u=e.Node,p=e.Vec3,h=e.UITransform,l=e.Component}],execute:function(){var d,v,f,T,y;i._RF.push({},"d1deehH4W1JQJWFbWpuKrnz","Drag",void 0);var g=a.ccclass,m=a.property;e("Drag",(d=g("Drag"),v=m(s),d((y=t((T=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return t=e.call.apply(e,[this].concat(i))||this,o(t,"Camera3D",y,r(t)),t._distance=0,t}n(t,e);var i=t.prototype;return i.start=function(){c("Canvas");this.node.on(u.EventType.TOUCH_START,this.onTouchStart,this),this.node.on(u.EventType.TOUCH_MOVE,this.onTouchMove,this),this._distance=.5},i.onTouchStart=function(e){},i.onTouchMove=function(e){this.moveBox(e.getLocation())},i.moveBox=function(e){var t=this.Camera3D.screenToWorld(new p(e.x,e.y,this._distance));this.node.position=this.node.parent.getComponent(h).convertToNodeSpaceAR(t)},t}(l)).prototype,"Camera3D",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=T))||f));i._RF.pop()}}}));

System.register("chunks:///_virtual/EventManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./SingletonMgr.ts"],(function(t){"use strict";var n,e,i,o;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,i=t.EventTarget},function(t){o=t.default}],execute:function(){e._RF.push({},"8c5bbdDMY1BdJ4WpqLWzUM1","EventManager",void 0);t("default",function(t){function e(){var n;return(n=t.call(this)||this).event=null,n.initialize(),n}n(e,t);var o=e.prototype;return o.initialize=function(){this.event=new i},o.emit=function(t,n){this.event.emit(t,n)},o.on=function(t,n,e){this.event.on(t,n,e)},o.off=function(t,n,e){this.off(t,n,e)},e}(o));e._RF.pop()}}}));

System.register("chunks:///_virtual/FileOper.ts",["./rollupPluginModLoBabelHelpers.js","cc","./EventManager.ts","./Html5.ts","./SpineData.ts","./SkeletManager.ts","./Define.ts"],(function(t){"use strict";var e,a,n,s,i,o,l,r,_,h,u,c;return{setters:[function(t){e=t.inheritsLoose,a=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,s=t._decorator,i=t.sp,o=t.Component},function(t){l=t.default},function(t){r=t.Html5},function(t){_=t.SpineData},function(t){h=t.SkeletManager},function(t){u=t.EventData,c=t.EventType}],execute:function(){var p;n._RF.push({},"5b2a9oF91RJjYIyEwttaok5","FileOper",void 0);var D=s.ccclass;s.property,t("FileOper",D("FileOper")(p=function(t){function n(){for(var e,a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))||this)._bComplete=!1,e._bBinary=!1,e._bJson=!1,e._jsonData=null,e._atlasData=null,e._skeletData=null,e._textureData=null,e._pngName="defa",e._url="",e._key="",e._nativeUrl="",e}e(n,t);var s=n.prototype;return s.rest=function(){this._bComplete=!1,this._bBinary=!1,this._bJson=!1,this._jsonData=null,this._atlasData=null,this._skeletData=null,this._textureData=null,this._pngName="defa",this._url="",this._key="",this._nativeUrl="",this.node.active=!1},s.checkComplect=function(){this._atlasData&&this._textureData&&(this._jsonData||this._skeletData)&&(console.log("[FileOper]:数据读取完成"),this._bComplete=!0,this._bJson=!!this._jsonData,this._bBinary=!!this._skeletData),this._bComplete&&this.addSkeletonData()},s.addSkeletonData=function(){var t,e,n=new i.SkeletonData;this._bJson?(n.skeletonJson=this._jsonData,n.atlasText=this._atlasData,n.textures=[this._textureData],n.textureNames=[this._pngName]):(n._nativeAsset=this._skeletData,n.atlasText=this._atlasData,n.textures=[this._textureData],n.textureNames=[this._pngName],n._uuid=this._pngName+"skel_spine",n._nativeUrl=this._nativeUrl);var s=new _;s.bJson=this._bJson,s.bBinary=this._bBinary,s.name=this._pngName,s.url=this._url,s.key=this._key,s._jsonData=this._jsonData,s._atlasData=this._atlasData,s._skeletData=this._skeletData,s._textureData=this._textureData,s.skeletonData=n,n.skeletonJson&&n.skeletonJson.skeleton&&(s.width=n.skeletonJson.skeleton.width,s.height=n.skeletonJson.skeleton.height,s.version=n.skeletonJson.skeleton.spine);var o=n.skeletonJson||new Object,r=o.animations||[],p=o.skins||[],D=o.events||{};for(var k in s.bones=null==(t=o.bones)?void 0:t.length,s.slots=null==(e=o.slots)?void 0:e.length,r)s.animations.push(k);if(p instanceof Array)for(var v,f=a(p);!(v=f()).done;){var m=v.value;s.skins.push(m.name)}else s.skins.push("default");for(var d in D)s.events.push(d);s.defanimation=s.animations[0],h.getInstance().add(s);var g=new u;g.eventType=c.REFRESH_SKELETON,g.param=s,l.getInstance().emit("machine",g),this.rest()},s.onPng=function(){var t=this;r.readTexture2d((function(e,a,n){t._textureData=n,t._pngName=e,t._url=a,t.checkComplect()}))},s.onJsonData=function(){var t=this;r.readLocalFile((function(e,a){t._jsonData=a,t.checkComplect()}))},s.onAtlasData=function(){var t=this;r.readLocalFile((function(e,a){t._atlasData=a,t._key=e.split(".")[0],t.checkComplect()}))},s.onSkelData=function(){var t=this;r.readLocalFile((function(e,a,n){t._nativeUrl=n,t._skeletData=a,t.checkComplect()}),3)},n}(o))||p);n._RF.pop()}}}));

System.register("chunks:///_virtual/FileTools.ts",["cc"],(function(e){"use strict";var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){var t;n._RF.push({},"a33bf+zzulEgafshba+BHy+","FileTools",void 0),function(e){e[e.DATA_URL=0]="DATA_URL",e[e.TEXT=1]="TEXT",e[e.BINARY=2]="BINARY",e[e.ARRAYBUFFER=3]="ARRAYBUFFER"}(t||(t={})),e("default",function(){function e(){}e.getInstance=function(){return e._instance||(e._instance=new e),e._instance};var n=e.prototype;return n.readLocalFile=function(e,n,a){if(e){var i=new FileReader;i.onload=function(e){var n=null;i.readyState==FileReader.DONE&&(n=i.result),a&&a(n)},n==t.DATA_URL?i.readAsDataURL(e):n==t.TEXT?i.readAsText(e):n==t.BINARY?i.readAsBinaryString(e):n==t.ARRAYBUFFER&&i.readAsArrayBuffer(e)}else console.log("readLocalFile_ file:null!!")},n.saveData=function(e,n){var t=new Blob([e],{type:"application/json"}),a=document.createElement("a");a.download=n,a.innerHTML="Download File",null!=window.webkitURL?a.href=window.webkitURL.createObjectURL(t):(a.href=window.URL.createObjectURL(t),a.style.display="none",document.body.appendChild(a)),a.click()},e}())._instance=null,n._RF.pop()}}}));

System.register("chunks:///_virtual/Html5.ts",["cc","./FileTools.ts"],(function(e){"use strict";var t,n,i,o;return{setters:[function(e){t=e.cclegacy,n=e.ImageAsset,i=e.Texture2D},function(e){o=e.default}],execute:function(){t._RF.push({},"d1c44NJG8BNAYuZrqD/fcjV","Html5",void 0);var l={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",bmp:"image/bmp"},c=function(e){if(e){var t,n=e.type;return n||(n=l[e.name.match(/\.([^\.]+)$/i)[1]]),t=e,null!=window.URL?window.URL.createObjectURL(t):window.webkitURL.createObjectURL(t)}console.log("SelectFile error!")};e("Html5",function(){function e(){}return e.HtmlFileInput=function(e){var t=document.getElementById("file_input");t||((t=document.createElement("input")).id="file_input",t.setAttribute("id","file"),t.setAttribute("type","file"),t.setAttribute("class","fileToUpload"),t.style.opacity="0",t.style.position="absolute",t.setAttribute("left","-999px"),document.body.appendChild(t)),t.setAttribute("accept","*"),t.onchange=function(n){var i=t.files;if(i&&i.length>0){var o=i[0];e&&e(o),t.remove()}},t.click()},e.LoadImage=function(e,t,o){var l=c(e),a=document.getElementById("divCreator");a||(a=document.createElement("div"),document.body.appendChild(a),a.style.position="absolute",a.id="divCreator",a.style.backgroundColor="#ffffcc"),a.innerHTML="<img id=imghead>";var u=document.getElementById("imghead");u.src=l,u.onload=function(){console.log("=========LoadImage.image.onload"),console.log("width:",this.width),console.log("width:",this.height);var e=u.currentSrc,t=new n(u),l=new i;l.image=t,console.log(l),o&&o(e,l)},a.style.display="none",a.style.visibility="hidden"},e.readLocalFile=function(t,n){void 0===n&&(n=1),e.HtmlFileInput((function(e){o.getInstance().readLocalFile(e,n,(function(n){var i=c(e);t&&t(e.name,n,i)}))}))},e.readTexture2d=function(t){e.HtmlFileInput((function(n){e.LoadImage(n,null,(function(e,i){t&&t(n.name,e,i)}))}))},e}());t._RF.pop()}}}));

System.register("chunks:///_virtual/ItemOption.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,i,n,c,r,o,a,l,s;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,c=t.assertThisInitialized,r=t.createClass},function(t){o=t.cclegacy,a=t._decorator,l=t.Label,s=t.Component}],execute:function(){var u,p,f,m,h;o._RF.push({},"ce578Lep1RG5o9P2gT7hkjd","ItemOption",void 0);var b=a.ccclass,_=a.property;t("ItemOption",(u=b("ItemOption"),p=_(l),u((h=e((m=function(t){function e(){for(var e,i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r))||this,n(e,"label",h,c(e)),e._itemName="",e._cbClickfunc=void 0,e}i(e,t);var o=e.prototype;return o.updateLabel=function(){this.label.string=this._itemName},o.onclick=function(){var t=this.itemName.split("*")[0];this._cbClickfunc&&this._cbClickfunc(t)},r(e,[{key:"itemName",get:function(){return this._itemName},set:function(t){this._itemName=t,this.updateLabel()}},{key:"clickFunc",get:function(){return this._cbClickfunc},set:function(t){this._cbClickfunc=t}}]),e}(s)).prototype,"label",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=m))||f));o._RF.pop()}}}));

System.register("chunks:///_virtual/Machine.ts",["./rollupPluginModLoBabelHelpers.js","cc","./EventManager.ts","./Define.ts","./SkeletManager.ts"],(function(e){"use strict";var n,t,a,i,r,l,o,s,u,p,c,b,f;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,a=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){r=e.cclegacy,l=e._decorator,o=e.Sprite,s=e.sp,u=e.Label,p=e.Component},function(e){c=e.default},function(e){b=e.EventType},function(e){f=e.SkeletManager}],execute:function(){var h,g,m,v,L,y,E,d,k,I,S,_,D,M,z,N,w;r._RF.push({},"c3a9fybJtdLx4tCl3ZVxMrH","Machine",void 0);var A=l.ccclass,P=l.property;e("Machine",(h=A("Machine"),g=P(o),m=P(s.Skeleton),v=P(u),L=P(u),y=P(u),E=P(u),d=P(u),h((S=n((I=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];return n=e.call.apply(e,[this].concat(r))||this,a(n,"sp",S,i(n)),a(n,"skeleton",_,i(n)),a(n,"fpsLaebl",D,i(n)),a(n,"szLaebl",M,i(n)),a(n,"versionLaebl",z,i(n)),a(n,"bonesLaebl",N,i(n)),a(n,"slotsLaebl",w,i(n)),n.spineJson=null,n.spineAtlas=null,n.spineTexture=null,n}t(n,e);var r=n.prototype;return r.start=function(){c.getInstance().on("machine",this.onEvent,this)},r.onEvent=function(e){console.log("[Machine]收到了事件消息_type:",e.eventType);var n=e.eventType,t=this.skeleton;if(n==b.REFRESH_SKELETON)t.skeletonData=e.param.skeletonData,t.animation=e.param.defanimation,e.param.bBinary&&(e.param.parse(e.param.skeletonData._skeletonCache),t.animation=e.param.defanimation),this.updateUI();else if(n==b.CHANGE_SPINE){console.log("切换角色");var a=e.param,i=f.getInstance().get(a);i&&(t.skeletonData=i.skeletonData,t.animation=i.defanimation,f.getInstance().skelet=i,this.updateUI())}else n==b.CHANGE_SPINE_ANIMATION?t.animation=e.param:n==b.UPDATE_SPINE_SKIN?t.setSkin(e.param):n==b.OPENOROFF_DEBUG||(n==b.CHANGE_SPINE_LOOP?t.loop=e.param:n==b.UPDATE_SCALE&&t.node.setScale(e.param,e.param,1))},r.updateUI=function(){var e=f.getInstance().skelet;this.fpsLaebl.string="fps:"+(0==e.fps?30:e.fps).toString(),this.szLaebl.string="width:"+Math.ceil(e.width)+" height:"+Math.ceil(e.height),this.versionLaebl.string="version:"+e.version,this.bonesLaebl.string="bones:"+e.bones,this.slotsLaebl.string="slots:"+e.slots},r.onDisable=function(){c.getInstance().off("machine",this.onEvent,this)},n}(p)).prototype,"sp",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=n(I.prototype,"skeleton",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=n(I.prototype,"fpsLaebl",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=n(I.prototype,"szLaebl",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=n(I.prototype,"versionLaebl",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=n(I.prototype,"bonesLaebl",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=n(I.prototype,"slotsLaebl",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=I))||k));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./SkeletManager.ts","./SpineData.ts","./Define.ts","./Drag.ts","./EventManager.ts","./Machine.ts","./FileOper.ts","./ItemOption.ts","./Menu.ts","./OptionScrollview.ts","./SingletonMgr.ts","./FileTools.ts","./Html5.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Menu.ts",["./rollupPluginModLoBabelHelpers.js","cc","./SkeletManager.ts","./OptionScrollview.ts","./Define.ts","./EventManager.ts"],(function(e){"use strict";var n,t,i,a,o,l,r,s,u,c,p,v,f,h;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,a=e.assertThisInitialized,o=e.createForOfIteratorHelperLoose},function(e){l=e.cclegacy,r=e._decorator,s=e.Node,u=e.Component},function(e){c=e.SkeletManager},function(e){p=e.OptionScrollview},function(e){v=e.EventData,f=e.EventType},function(e){h=e.default}],execute:function(){var P,g,m,E,I,k,O,S,N,M,b,y,d;l._RF.push({},"88d4fTaC9pOSLwHQGdxrl1o","Menu",void 0);var A,T=r.ccclass,L=r.property;!function(e){e[e.FILE=0]="FILE",e[e.SKEL=1]="SKEL",e[e.ANIMATION=2]="ANIMATION",e[e.SKIN=3]="SKIN",e[e.EVENT=4]="EVENT",e[e.MAX=255]="MAX"}(A||(A={}));e("Menu",(P=T("Menu"),g=L(s),m=L(s),E=L(s),I=L(s),k=L(s),P((N=n((S=function(e){function n(){for(var n,t=arguments.length,o=new Array(t),l=0;l<t;l++)o[l]=arguments[l];return n=e.call.apply(e,[this].concat(o))||this,i(n,"fileOperPanel",N,a(n)),i(n,"animationPanel",M,a(n)),i(n,"skinPanel",b,a(n)),i(n,"skeletonPanel",y,a(n)),i(n,"eventPanel",d,a(n)),n._loop=!0,n}t(n,e);var l=n.prototype;return l.start=function(){},l.updateOperPanle=function(e,n){this.fileOperPanel.active=e==A.FILE&&n,this.animationPanel.active=e==A.ANIMATION&&n,this.skinPanel.active=e==A.SKIN&&n,this.skeletonPanel.active=e==A.SKEL&&n,this.eventPanel.active=e==A.EVENT&&n},l.onFileMenu=function(){var e=this.fileOperPanel.active;this.fileOperPanel.active=!e,this.updateOperPanle(A.FILE,!e)},l.onSkeleron=function(){var e=this.skeletonPanel.active;if(this.skeletonPanel.active=!e,this.updateOperPanle(A.SKEL,!e),!e){var n=c.getInstance().skeletons;if(!n)return console.log("[Menu]:not SpineData!!");for(var t,i=[],a=o(n);!(t=a()).done;){var l=t.value;l.key&&i.push(l.key)}i.length<1&&(i.push("没有Spine!"),i.push("嘻嘻")),this.skeletonPanel.getComponent(p).setData(1,i)}},l.onAnimation=function(){var e=this.animationPanel.active;if(this.animationPanel.active=!e,this.updateOperPanle(A.ANIMATION,!e),!e){var n=c.getInstance().skelet;if(!n)return console.log("[Menu]:not SpineData!!");var t=n.animations||[];t.length<1&&(t.push("没有时间线!"),t.push("嘻嘻")),this.animationPanel.getComponent(p).setData(2,t)}},l.onSkin=function(){var e=this.skinPanel.active;if(this.skinPanel.active=!e,this.updateOperPanle(A.SKIN,!e),!e){var n=c.getInstance().skelet;if(!n)return console.log("[Menu]:not SpineData!!");var t=n.skins||[];t.length<1&&(t.push("没有皮肤!"),t.push("哈哈")),this.skinPanel.getComponent(p).setData(3,t)}},l.onEvent=function(){var e=this.eventPanel.active;if(this.eventPanel.active=!e,this.updateOperPanle(A.EVENT,!e),!e){var n=[],t=c.getInstance().skelet;t&&(n=t.events),n.length<1&&(n.push("没有事件!"),n.push("哈哈")),this.eventPanel.getComponent(p).setData(4,n)}},l.onToggleDebug=function(){this.updateOperPanle(A.MAX,!1)},l.onToggleLoop=function(){this._loop=!this._loop;var e=new v;e.eventType=f.CHANGE_SPINE_LOOP,e.param=this._loop,h.getInstance().emit("machine",e)},l.inputEvent=function(e){var n=Number(e.string);console.log("========输入完成!",n);var t=new v;t.eventType=f.UPDATE_SCALE,t.param=n,h.getInstance().emit("machine",t)},n}(u)).prototype,"fileOperPanel",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=n(S.prototype,"animationPanel",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=n(S.prototype,"skinPanel",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=n(S.prototype,"skeletonPanel",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=n(S.prototype,"eventPanel",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=S))||O));l._RF.pop()}}}));

System.register("chunks:///_virtual/OptionScrollview.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemOption.ts","./Define.ts","./EventManager.ts"],(function(e){"use strict";var i,t,n,o,r,a,s,c,l,p,u,v,h,f;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,s=e.Prefab,c=e.ScrollView,l=e.instantiate,p=e.Component},function(e){u=e.ItemOption},function(e){v=e.EventType,h=e.EventData},function(e){f=e.default}],execute:function(){var w,_,m,y,d,S,A;r._RF.push({},"4793bJ9a+lDepO/Pw2B7BAX","OptionScrollview",void 0);var N,g=a.ccclass,C=a.property;!function(e){e[e.none=0]="none",e[e.Spine_view=1]="Spine_view",e[e.Animation_view=2]="Animation_view",e[e.Skin_viwe=3]="Skin_viwe",e[e.Event_view=4]="Event_view",e[e.MAX=255]="MAX"}(N||(N={}));e("OptionScrollview",(w=g("OptionScrollview"),_=C(s),m=C(Number),w((S=i((d=function(e){function i(){for(var i,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return i=e.call.apply(e,[this].concat(r))||this,n(i,"itemOption",S,o(i)),n(i,"viewType",A,o(i)),i._data=null,i._curChooseName="",i}t(i,e);var r=i.prototype;return r.start=function(){},r.skeletons=function(e){this._data=e,e&&e instanceof Array&&this.loadLisit(e)},r.setData=function(e,i){this.viewType=e,this._data=i,i&&i instanceof Array&&this.loadLisit(i)},r.loadLisit=function(e){var i=this.getComponent(c).content;i.removeAllChildren();for(var t=0;t<e.length;t++){var n=l(this.itemOption);i.addChild(n);var o=n.getComponent(u);o.itemName=e[t],o.clickFunc=function(e){this.viewType!=N.Event_view&&this.choose(e)}.bind(this)}},r.choose=function(e){console.log("choose:",e,this._curChooseName),this._curChooseName!=e&&(this._curChooseName=e,this.notify())},r.notify=function(){var e=0;this.viewType==N.Spine_view?e=v.CHANGE_SPINE:this.viewType==N.Animation_view?e=v.CHANGE_SPINE_ANIMATION:this.viewType==N.Skin_viwe&&(e=v.UPDATE_SPINE_SKIN);var i=new h;i.eventType=e,i.param=this._curChooseName,f.getInstance().emit("machine",i)},i}(p)).prototype,"itemOption",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=i(d.prototype,"viewType",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),y=d))||y));r._RF.pop()}}}));

System.register("chunks:///_virtual/SingletonMgr.ts",["cc"],(function(n){"use strict";var t;return{setters:[function(n){t=n.cclegacy}],execute:function(){t._RF.push({},"fd699lVqk1H54q8mG0S3gjd","SingletonMgr",void 0);n("default",function(){function n(){}return n.getInstance=function(){return this.__instance||(this.__instance=new this),this.__instance},n.destroyInstance=function(){this.__instance&&(this.__instance=null)},n}());t._RF.pop()}}}));

System.register("chunks:///_virtual/SkeletManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,s;return{setters:[function(e){t=e.createForOfIteratorHelperLoose,n=e.createClass},function(e){s=e.cclegacy}],execute:function(){s._RF.push({},"ec798MJuCRGSYoLR6kiN9Ed","SkeletManager",void 0),e("SkeletManager",function(){function e(){this._skeletons=[],this._map=new Map,this._curskeleton=null}e.getInstance=function(){return e._instance||(e._instance=new e),e._instance};var s=e.prototype;return s.add=function(e){this._map.has(e.key)||(this._map.set(e.key,e),this._skeletons.push(e),this.skelet=e)},s.get=function(e){return this._map.get(e)},s.find=function(e){for(var n,s=null,r=t(this._skeletons);!(n=r()).done;){var i=n.value;if(i.key==e){s=i;break}}return s},s.destroy=function(){this._map=null},n(e,[{key:"skeletons",get:function(){return this._skeletons}},{key:"skelet",get:function(){return this._curskeleton},set:function(e){this._curskeleton=e}},{key:"count",get:function(){return this._map.size}}]),e}())._instance=null,s._RF.pop()}}}));

System.register("chunks:///_virtual/SpineData.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var s,i;return{setters:[function(t){s=t.createForOfIteratorHelperLoose},function(t){i=t.cclegacy}],execute:function(){i._RF.push({},"5485205nv9FqKEEOqNEBmMP","SpineData",void 0);t("SpineData",function(){function t(){this.bJson=!1,this.bBinary=!1,this.name="",this.key="",this.url="",this.version="0.0.0",this.defanimation="",this._jsonData=null,this._atlasData=null,this._skeletData=null,this._textureData=null,this.width=0,this.height=0,this.fps=0,this.bones=0,this.slots=0,this.meshs=0,this.skeletonData=null,this.events=new Array,this.skins=new Array,this.animations=[]}return t.prototype.parse=function(t){var i,n;this.width=t.width,this.height=t.height,this.version=t.version,this.fps=t.fps;var e=t.animations||[],a=t.skins||[],h=t.events||[];this.bones=null==(i=t.bones)?void 0:i.length,this.slots=null==(n=t.slots)?void 0:n.length;for(var o,r=s(e);!(o=r()).done;){var l=o.value,u=l.name;l.duration>=0&&(u=u+"*"+(l.duration>0?l.duration:0).toString()),this.animations.push(u)}if(a instanceof Array)for(var v,p=s(a);!(v=p()).done;){var f=v.value;this.skins.push(f.name)}else this.skins.push("default");for(var c,d=s(h);!(c=d()).done;){var m=c.value;this.events.push(m.name||"error")}this.defanimation=this.animations[0].split("*")[0]},t}());i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});