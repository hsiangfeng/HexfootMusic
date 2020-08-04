(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5453552b"],{"25c7":function(t,e,r){},"3d1d":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"game-section"},[r("Loading",{attrs:{isLoading:t.isLoading}}),t.score.status?r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 text-center"},[r("h3",[t._v("總題數為 "+t._s(t.musicPlay.kkboxMusic.length/4)+" 題")])]),r("div",{staticClass:"col-md-6 col-6 text-center h4"},[t._v("您目前答對 "+t._s(t.score.answerNum)+" 題")]),r("div",{staticClass:"col-md-6 col-6 text-center h4"},[t._v("您目前答錯 "+t._s(t.score.wrongNum)+" 題")]),r("div",{staticClass:"col-md-12"},[t._v("您的分數為 "+t._s(t.score.total-4*t.score.wrongNum))])])]):r("div",{staticClass:"container"},[t.playStatus?r("div",{staticClass:"srart-bg d-flex justify-content-center align-items-center flex-column"},[r("p",{staticClass:"h3 text-primary z-index-1"},[t._v("點擊 開始挑戰 後將會播放歌曲 30 秒。")]),r("div",{staticClass:"music-start z-index-1"},[r("button",{staticClass:"btn btn-outline-primary btn-lg",attrs:{type:"button"},on:{click:t.initGame}},[t._v("開始挑戰")])])]):t._e(),t.musicPlay.status?r("div",{staticClass:"srart-bg d-flex justify-content-center align-items-center flex-column w-100"},[r("radial-progress-bar",{staticClass:"position-relative text-white",attrs:{diameter:t.progressOption.diameter,"completed-steps":t.progressOption.completedSteps,"total-steps":t.progressOption.totalSteps}},[r("div",{staticClass:"play-bg"}),r("div",{staticClass:"play-title"},[t.musicPlay.status?r("font-awesome-icon",{staticClass:"my-5",attrs:{icon:["fas","sync"],size:"3x",spin:""}}):r("font-awesome-icon",{staticClass:"my-5",attrs:{icon:["fas","stop"],size:"3x"}}),r("p",[t._v("現正播放第 "+t._s(t.musicPlay.number)+" 首")]),t.progressOption.completedSteps<10?r("p",[t._v("00:0"+t._s(t.progressOption.completedSteps))]):r("p",[t._v("00:"+t._s(t.progressOption.completedSteps))])],1)]),r("p",{staticClass:"sub-title text-white z-index-1"},[t._v("請在音樂播放完畢後選出答案")])],1):t.playStatus||t.musicPlay.status?t._e():r("div",[t._m(0),r("div",{staticClass:"row"},t._l(t.filterData,(function(e){return r("div",{staticClass:"col-md-6 col-6 py-2"},[r("a",{staticClass:"btn-answer",attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.resetGame(e)}}},[t._v(t._s(e.name))])])})),0)])]),t._m(1)],1)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"answer-bg"},[r("h3",{staticClass:"text-primary z-index-1"},[t._v("請問您剛剛聽到的歌曲名稱是?")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"iframe d-none"},[r("iframe",{attrs:{src:"https://widget.kkbox.com/v1/?id=SoKONLgs1DbhbrbMq3&type=song&terr=TW&lang=TC",frameBorder:"0",id:"iframeID"}})])}],n=(r("a4d3"),r("99af"),r("4de4"),r("4160"),r("fb6a"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("159b"),r("96cf"),r("2fa7")),a=r("2f62"),o=r("531a"),c=r.n(o),u=r("50eb");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={data:function(){return{challengeID:"",progressOption:{completedSteps:0,totalSteps:30,diameter:300,setInter:null,setTime:null},playStatus:!0,musicPlay:{number:1,status:!1,kkboxMusic:[],startNum:0,endNum:4},nowPlayMusic:{id:"SoKONLgs1DbhbrbMq3"},score:{total:100,wrongNum:0,answerNum:0,result:0,status:!1}}},metaInfo:function(){return{title:this.metaTitle||"HexfootMusic"}},methods:d({getMusic:function(){var t=this;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return this.$store.commit("LOADING",!0),e.next=3,regeneratorRuntime.awrap(this.$http.get("".concat("https://api.kkbox.com/v1.1","/charts/").concat(this.challengeID,"/tracks?territory=TW&limit=100"),this.AJAXConfig).then((function(e){t.musicPlay.kkboxMusic=e.data.data,t.$store.commit("LOADING",!1)})));case 3:case"end":return e.stop()}}),null,this)},initGame:function(){var t=this;this.$store.commit("LOADING",!0),this.playStatus=!1;var e=this.getRandom(0,4);this.nowPlayMusic=this.filterData[e];var r=document.getElementById("iframeID");r.src="https://widget.kkbox.com/v1/?id=".concat(this.nowPlayMusic.id,"&type=song&terr=TW&lang=TC&autoplay=true"),r.setAttribute("allow","autoplay"),r.onload=function(){t.musicPlay.status=!0,t.progressOption.setInter=setInterval((function(){t.progressOption.completedSteps+=1}),1e3),t.progressOption.setTime=setTimeout((function(){t.musicPlay.status=!1,t.musicPlay.number+=1,t.musicPlay.title="音樂播放結束，請猜題。",clearInterval(t.progressOption.setInter)}),3e4),t.$store.commit("LOADING",!1)}},getRandom:function(t,e){return Math.floor(Math.random()*e)+t},resetGame:function(t){clearTimeout(this.progressOption.setTime),clearInterval(this.progressOption.setInter),t.id===this.nowPlayMusic.id?this.score.answerNum+=1:this.score.wrongNum+=1,this.score.answerNum+this.score.wrongNum!==25?(this.musicPlay.startNum+=4,this.musicPlay.endNum+=4,this.progressOption.completedSteps=0,this.initGame()):this.score.status=!0},getTitle:function(){this.$store.dispatch("getMetaTitle",this.$route.meta.title)}},Object(a["b"])(["getToken"])),components:{Loading:u["a"],RadialProgressBar:c.a},computed:d({filterData:function(){return this.musicPlay.kkboxMusic.slice(this.musicPlay.startNum,this.musicPlay.endNum)}},Object(a["c"])(["isLoading","AJAXConfig","metaTitle"])),created:function(){this.getTitle()},mounted:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.getToken());case 2:return this.challengeID=this.$route.params.id,t.next=5,regeneratorRuntime.awrap(this.getMusic());case 5:case"end":return t.stop()}}),null,this)}},p=f,h=(r("a407"),r("2877")),m=Object(h["a"])(p,i,s,!1,null,"d4f8c082",null);e["default"]=m.exports},"531a":function(t,e,r){t.exports=r("bb56")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var i=r("1d80"),s=r("5899"),n="["+s+"]",a=RegExp("^"+n+n+"*"),o=RegExp(n+n+"*$"),c=function(t){return function(e){var r=String(i(e));return 1&t&&(r=r.replace(a,"")),2&t&&(r=r.replace(o,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},"6b97":function(t,e,r){},7156:function(t,e,r){var i=r("861d"),s=r("d2bb");t.exports=function(t,e,r){var n,a;return s&&"function"==typeof(n=e.constructor)&&n!==r&&i(a=n.prototype)&&a!==r.prototype&&s(t,a),t}},"85bf":function(t,e,r){"use strict";var i=r("6b97"),s=r.n(i);s.a},a407:function(t,e,r){"use strict";var i=r("25c7"),s=r.n(i);s.a},a9e3:function(t,e,r){"use strict";var i=r("83ab"),s=r("da84"),n=r("94ca"),a=r("6eeb"),o=r("5135"),c=r("c6b6"),u=r("7156"),l=r("c04e"),d=r("d039"),f=r("7c73"),p=r("241c").f,h=r("06cf").f,m=r("9bf2").f,g=r("58a8").trim,y="Number",b=s[y],v=b.prototype,x=c(f(v))==y,S=function(t){var e,r,i,s,n,a,o,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=g(u),e=u.charCodeAt(0),43===e||45===e){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:i=2,s=49;break;case 79:case 111:i=8,s=55;break;default:return+u}for(n=u.slice(2),a=n.length,o=0;o<a;o++)if(c=n.charCodeAt(o),c<48||c>s)return NaN;return parseInt(n,i)}return+u};if(n(y,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var w,C=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof C&&(x?d((function(){v.valueOf.call(r)})):c(r)!=y)?u(new b(S(e)),r,C):S(e)},P=i?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;P.length>k;k++)o(b,w=P[k])&&!o(C,w)&&m(C,w,h(b,w));C.prototype=v,v.constructor=C,a(s,y,C)}},bb56:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"radial-progress-container",style:t.containerStyle},[r("div",{staticClass:"radial-progress-inner",style:t.innerCircleStyle},[t._t("default")],2),r("svg",{staticClass:"radial-progress-bar",attrs:{width:t.diameter,height:t.diameter,version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[r("defs",[r("radialGradient",{attrs:{id:"radial-gradient"+t._uid,fx:t.gradient.fx,fy:t.gradient.fy,cx:t.gradient.cx,cy:t.gradient.cy,r:t.gradient.r}},[r("stop",{attrs:{offset:"30%","stop-color":t.startColor}}),r("stop",{attrs:{offset:"100%","stop-color":t.stopColor}})],1)],1),r("circle",{style:t.strokeStyle,attrs:{r:t.innerCircleRadius,cx:t.radius,cy:t.radius,fill:"transparent",stroke:t.innerStrokeColor,"stroke-dasharray":t.circumference,"stroke-dashoffset":"0","stroke-linecap":"round"}}),r("circle",{style:t.progressStyle,attrs:{transform:"rotate(270, "+t.radius+","+t.radius+")",r:t.innerCircleRadius,cx:t.radius,cy:t.radius,fill:"transparent",stroke:"url(#radial-gradient"+t._uid+")","stroke-dasharray":t.circumference,"stroke-dashoffset":t.circumference,"stroke-linecap":"round"}})])])},s=[],n=(r("99af"),r("a9e3"),{props:{diameter:{type:Number,required:!1,default:200},totalSteps:{type:Number,required:!0,default:10},completedSteps:{type:Number,required:!0,default:0},startColor:{type:String,required:!1,default:"#bbff42"},stopColor:{type:String,required:!1,default:"#429321"},strokeWidth:{type:Number,required:!1,default:10},animateSpeed:{type:Number,required:!1,default:1e3},innerStrokeColor:{type:String,required:!1,default:"#323232"},fps:{type:Number,required:!1,default:60},timingFunc:{type:String,required:!1,default:"linear"}},data:function(){return{gradient:{fx:.99,fy:.5,cx:.5,cy:.5,r:.65},gradientAnimation:null,currentAngle:0,strokeDashoffset:0}},computed:{radius:function(){return this.diameter/2},circumference:function(){return Math.PI*this.innerCircleDiameter},stepSize:function(){return 0===this.totalSteps?0:100/this.totalSteps},finishedPercentage:function(){return this.stepSize*this.completedSteps},circleSlice:function(){return 2*Math.PI/this.totalSteps},animateSlice:function(){return this.circleSlice/this.totalPoints},innerCircleDiameter:function(){return this.diameter-2*this.strokeWidth},innerCircleRadius:function(){return this.innerCircleDiameter/2},totalPoints:function(){return this.animateSpeed/this.animationIncrements},animationIncrements:function(){return 1e3/this.fps},hasGradient:function(){return this.startColor!==this.stopColor},containerStyle:function(){return{height:"".concat(this.diameter,"px"),width:"".concat(this.diameter,"px")}},progressStyle:function(){return{height:"".concat(this.diameter,"px"),width:"".concat(this.diameter,"px"),strokeWidth:"".concat(this.strokeWidth,"px"),strokeDashoffset:this.strokeDashoffset,transition:"stroke-dashoffset ".concat(this.animateSpeed,"ms ").concat(this.timingFunc)}},strokeStyle:function(){return{height:"".concat(this.diameter,"px"),width:"".concat(this.diameter,"px"),strokeWidth:"".concat(this.strokeWidth,"px")}},innerCircleStyle:function(){return{width:"".concat(this.innerCircleDiameter,"px")}}},methods:{getStopPointsOfCircle:function(t){for(var e=[],r=0;r<t;r++){var i=this.circleSlice*r;e.push(this.getPointOfCircle(i))}return e},getPointOfCircle:function(t){var e=.5,r=e+e*Math.cos(t),i=e+e*Math.sin(t);return{x:r,y:i}},gotoPoint:function(){var t=this.getPointOfCircle(this.currentAngle);this.gradient.fx=t.x,this.gradient.fy=t.y},changeProgress:function(t){var e=this,r=t.isAnimate,i=void 0===r||r;if(this.strokeDashoffset=(100-this.finishedPercentage)/100*this.circumference,this.gradientAnimation&&clearInterval(this.gradientAnimation),i){var s=(this.completedSteps-1)*this.circleSlice,n=(this.currentAngle-s)/this.animateSlice,a=Math.abs(n-this.totalPoints)/this.totalPoints,o=n<this.totalPoints;this.gradientAnimation=setInterval((function(){o&&n>=e.totalPoints||!o&&n<e.totalPoints?clearInterval(e.gradientAnimation):(e.currentAngle=s+e.animateSlice*n,e.gotoPoint(),n+=o?a:-a)}),this.animationIncrements)}else this.gotoNextStep()},gotoNextStep:function(){this.currentAngle=this.completedSteps*this.circleSlice,this.gotoPoint()}},watch:{totalSteps:function(){this.changeProgress({isAnimate:!0})},completedSteps:function(){this.changeProgress({isAnimate:!0})},diameter:function(){this.changeProgress({isAnimate:!0})},strokeWidth:function(){this.changeProgress({isAnimate:!0})}},created:function(){this.changeProgress({isAnimate:!1})}}),a=n,o=(r("85bf"),r("2877")),c=Object(o["a"])(a,i,s,!1,null,null,null);e["default"]=c.exports},fb6a:function(t,e,r){"use strict";var i=r("23e7"),s=r("861d"),n=r("e8b5"),a=r("23cb"),o=r("50c4"),c=r("fc6a"),u=r("8418"),l=r("1dde"),d=r("b622"),f=d("species"),p=[].slice,h=Math.max;i({target:"Array",proto:!0,forced:!l("slice")},{slice:function(t,e){var r,i,l,d=c(this),m=o(d.length),g=a(t,m),y=a(void 0===e?m:e,m);if(n(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?s(r)&&(r=r[f],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(d,g,y);for(i=new(void 0===r?Array:r)(h(y-g,0)),l=0;g<y;g++,l++)g in d&&u(i,l,d[g]);return i.length=l,i}})}}]);
//# sourceMappingURL=chunk-5453552b.eee883ba.js.map