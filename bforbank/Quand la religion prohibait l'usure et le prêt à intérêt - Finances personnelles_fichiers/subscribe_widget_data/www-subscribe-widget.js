(function(){var k,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ca(a,b){if(b){for(var c=ba,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&aa(c,d,{configurable:!0,writable:!0,value:f})}}
ca("Reflect.apply",function(a){if(a)return a;var b=Function.prototype.apply;return function(a,d,e){return b.call(a,d,e)}});
ca("Reflect.construct",function(a){return a?a:function(a,c,d){void 0===d&&(d=a);d=Object.create(d.prototype||Object.prototype);return Reflect.apply(a,d,c)||d}});
var m=this;function da(a){return void 0!==a}
function p(a){a=a.split(".");for(var b=m,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function ea(){}
function fa(a){a.X=void 0;a.u=function(){return a.X?a.X:a.X=new a}}
function ga(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ha(a){var b=ga(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function q(a){return"string"==typeof a}
function ia(a){return"number"==typeof a}
function ja(a){return"function"==ga(a)}
function ka(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function la(a){return a[na]||(a[na]=++oa)}
var na="closure_uid_"+(1E9*Math.random()>>>0),oa=0;function pa(a,b,c){return a.call.apply(a.bind,arguments)}
function qa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t=pa:t=qa;return t.apply(null,arguments)}
var ra=Date.now||function(){return+new Date};
function u(a,b){var c=a.split("."),d=m;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&da(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function v(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Jb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function sa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,sa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
v(sa,Error);sa.prototype.name="CustomError";var ta;var ua=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},va=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function wa(a){a=da(void 0)?a.toFixed(void 0):String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return va("0",Math.max(0,2-b))+a}
function xa(a,b){return a<b?-1:a>b?1:0}
function ya(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function za(a){var b=q(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;var Aa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},w=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ba=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=q(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];
b.call(c,l,h,a)&&(e[f++]=l)}return e},Ca=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},Da=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function Ea(a,b){a:{var c=a.length;for(var d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:q(a)?a.charAt(c):a[c]}
function Fa(a,b){return 0<=Aa(a,b)}
function Ga(a){return Array.prototype.concat.apply([],arguments)}
function Ha(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ia(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ha(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Ja(a,b,c,d){return Array.prototype.splice.apply(a,Ka(arguments,1))}
function Ka(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function La(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if("array"==ga(d))for(var e=0;e<d.length;e+=8192)for(var f=La.apply(null,Ka(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
;function Ma(a,b,c){this.l=c;this.h=a;this.m=b;this.f=0;this.b=null}
Ma.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.h();return a};
function Na(a,b){a.m(b);a.f<a.l&&(a.f++,b.next=a.b,a.b=b)}
;var Oa;a:{var Pa=m.navigator;if(Pa){var Qa=Pa.userAgent;if(Qa){Oa=Qa;break a}}Oa=""}function x(a){return-1!=Oa.indexOf(a)}
;function Ra(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Sa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Ta(a){var b=Ua,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
var Va="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Va.length;f++)c=Va[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Xa(a){m.setTimeout(function(){throw a;},0)}
var Ya;
function Za(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!x("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=t(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!x("Trident")&&!x("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(da(c.next)){c=c.next;var a=c.ga;c.ga=null;a()}};
return function(a){d.next={ga:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function $a(){this.f=this.b=null}
var bb=new Ma(function(){return new ab},function(a){a.reset()},100);
$a.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function ab(){this.next=this.scope=this.b=null}
ab.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
ab.prototype.reset=function(){this.next=this.scope=this.b=null};function cb(a,b){db||eb();fb||(db(),fb=!0);var c=gb,d=bb.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var db;function eb(){if(-1!=String(m.Promise).indexOf("[native code]")){var a=m.Promise.resolve(void 0);db=function(){a.then(hb)}}else db=function(){var a=hb;
!ja(m.setImmediate)||m.Window&&m.Window.prototype&&!x("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(Ya||(Ya=Za()),Ya(a)):m.setImmediate(a)}}
var fb=!1,gb=new $a;function hb(){for(var a;a=gb.remove();){try{a.b.call(a.scope)}catch(b){Xa(b)}Na(bb,a)}fb=!1}
;function ib(a){ib[" "](a);return a}
ib[" "]=ea;function jb(a,b){var c=kb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var lb=x("Opera"),y=x("Trident")||x("MSIE"),mb=x("Edge"),nb=mb||y,ob=x("Gecko")&&!(-1!=Oa.toLowerCase().indexOf("webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),pb=-1!=Oa.toLowerCase().indexOf("webkit")&&!x("Edge"),qb=x("Windows");function rb(){var a=m.document;return a?a.documentMode:void 0}
var sb;a:{var tb="",ub=function(){var a=Oa;if(ob)return/rv\:([^\);]+)(\)|;)/.exec(a);if(mb)return/Edge\/([\d\.]+)/.exec(a);if(y)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(pb)return/WebKit\/(\S+)/.exec(a);if(lb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ub&&(tb=ub?ub[1]:"");if(y){var vb=rb();if(null!=vb&&vb>parseFloat(tb)){sb=String(vb);break a}}sb=tb}var wb=sb,kb={};
function xb(a){return jb(a,function(){for(var b=0,c=ua(String(wb)).split("."),d=ua(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=xa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||xa(0==g[2].length,0==h[2].length)||xa(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var yb;var zb=m.document;yb=zb&&y?rb()||("CSS1Compat"==zb.compatMode?parseInt(wb,10):5):void 0;function Ab(a,b,c){ia(a)?(this.date=Bb(a,b||0,c||1),Cb(this,c||1)):ka(a)?(this.date=Bb(a.getFullYear(),a.getMonth(),a.getDate()),Cb(this,a.getDate())):(this.date=new Date(ra()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Cb(this,a))}
function Bb(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}
k=Ab.prototype;k.getFullYear=function(){return this.date.getFullYear()};
k.getMonth=function(){return this.date.getMonth()};
k.getDate=function(){return this.date.getDate()};
k.getTime=function(){return this.date.getTime()};
function Db(a){a=a.date.getTimezoneOffset();if(0==a)a="Z";else{var b=Math.abs(a)/60,c=Math.floor(b),b=60*(b-c);a=(0<a?"-":"+")+wa(c)+":"+wa(b)}return a}
k.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
k.R=function(a,b){return[this.getFullYear(),wa(this.getMonth()+1),wa(this.getDate())].join(a?"-":"")+(b?Db(this):"")};
k.equals=function(a){return!(!a||this.getFullYear()!=a.getFullYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
k.toString=function(){return this.R()};
function Cb(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))}
k.valueOf=function(){return this.date.valueOf()};
function Eb(a,b,c,d,e,f,g){this.date=ia(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,g||0):new Date(a&&a.getTime?a.getTime():ra())}
v(Eb,Ab);Eb.prototype.R=function(a,b){var c=Ab.prototype.R.call(this,a);return a?c+" "+wa(this.date.getHours())+":"+wa(this.date.getMinutes())+":"+wa(this.date.getSeconds())+(b?Db(this):""):c+"T"+wa(this.date.getHours())+wa(this.date.getMinutes())+wa(this.date.getSeconds())+(b?Db(this):"")};
Eb.prototype.equals=function(a){return this.getTime()==a.getTime()};
Eb.prototype.toString=function(){return this.R()};function Fb(){this.h=this.h;this.l=this.l}
Fb.prototype.h=!1;Fb.prototype.O=function(){return this.h};
Fb.prototype.dispose=function(){this.h||(this.h=!0,this.U())};
Fb.prototype.U=function(){if(this.l)for(;this.l.length;)this.l.shift()()};
function Gb(a){a&&"function"==typeof a.dispose&&a.dispose()}
;var Hb=!ob&&!y||y&&9<=Number(yb)||ob&&xb("1.9.1"),Ib=y&&!xb("9");function Jb(a){if(a.classList)return a.classList;a=a.className;return q(a)&&a.match(/\S+/g)||[]}
function A(a,b){return a.classList?a.classList.contains(b):Fa(Jb(a),b)}
function B(a,b){a.classList?a.classList.add(b):A(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Kb(a,b){if(a.classList)w(b,function(b){B(a,b)});
else{var c={};w(Jb(a),function(a){c[a]=!0});
w(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function C(a,b){a.classList?a.classList.remove(b):A(a,b)&&(a.className=Ba(Jb(a),function(a){return a!=b}).join(" "))}
function Lb(a,b){a.classList?w(b,function(b){C(a,b)}):a.className=Ba(Jb(a),function(a){return!Fa(b,a)}).join(" ")}
function D(a,b,c){c?B(a,b):C(a,b)}
function Mb(a,b,c){A(a,b)&&(C(a,b),B(a,c))}
function Nb(a,b){var c=!A(a,b);D(a,b,c)}
;var Ob=!y&&!(x("Safari")&&!((x("Chrome")||x("CriOS"))&&!x("Edge")||x("Coast")||x("Opera")||x("Edge")||x("Silk")||x("Android")));function Pb(a,b){return Ob&&a.dataset?b in a.dataset?a.dataset[b]:null:a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;function Qb(){this.b="";this.f=Rb}
Qb.prototype.W=!0;Qb.prototype.V=function(){return this.b};
var Sb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,Rb={};function Tb(a){var b=new Qb;b.b=a;return b}
Tb("about:blank");function Ub(){this.b="";this.f=Vb}
Ub.prototype.W=!0;Ub.prototype.V=function(){return this.b};
function Wb(a){if(a instanceof Ub&&a.constructor===Ub&&a.f===Vb)return a.b;ga(a);return"type_error:SafeHtml"}
var Vb={};function Xb(a){var b=new Ub;b.b=a;return b}
Xb("<!DOCTYPE html>");Xb("");Xb("<br>");function E(a,b){this.i=da(a)?a:0;this.j=da(b)?b:0}
E.prototype.equals=function(a){return a instanceof E&&(this==a?!0:this&&a?this.i==a.i&&this.j==a.j:!1)};
function Yb(a,b){return new E(a.i-b.i,a.j-b.j)}
E.prototype.ceil=function(){this.i=Math.ceil(this.i);this.j=Math.ceil(this.j);return this};
E.prototype.floor=function(){this.i=Math.floor(this.i);this.j=Math.floor(this.j);return this};
E.prototype.round=function(){this.i=Math.round(this.i);this.j=Math.round(this.j);return this};function Zb(a,b){this.width=a;this.height=b}
k=Zb.prototype;k.Xa=function(){return this.width*this.height};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!this.Xa()};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function $b(a){return a?new ac(bc(a)):ta||(ta=new ac)}
function F(a){return q(a)?document.getElementById(a):a}
function cc(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):dc("*",a,b)}
function G(a,b){var c=b||document,d=null;c.getElementsByClassName?d=c.getElementsByClassName(a)[0]:c.querySelectorAll&&c.querySelector?d=c.querySelector("."+a):d=dc("*",a,b)[0];return d||null}
function dc(a,b,c){var d=document;c=c||d;var e=a&&"*"!=a?String(a).toUpperCase():"";if(c.querySelectorAll&&c.querySelector&&(e||b))return c.querySelectorAll(e+(b?"."+b:""));if(b&&c.getElementsByClassName){d=c.getElementsByClassName(b);if(e){c={};for(var f=a=0,g;g=d[f];f++)e==g.nodeName&&(c[a++]=g);c.length=a;return c}return d}d=c.getElementsByTagName(e||"*");if(b){c={};for(f=a=0;g=d[f];f++)e=g.className,"function"==typeof e.split&&Fa(e.split(/\s+/),b)&&(c[a++]=g);c.length=a;return c}return d}
function ec(a,b){Ra(b,function(b,d){b&&b.W&&(b=b.V());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:fc.hasOwnProperty(d)?a.setAttribute(fc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var fc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function gc(a){a=a.document;a=hc(a)?a.documentElement:a.body;return new Zb(a.clientWidth,a.clientHeight)}
function ic(a){var b=jc(a);a=kc(a);return y&&xb("10")&&a.pageYOffset!=b.scrollTop?new E(b.scrollLeft,b.scrollTop):new E(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function jc(a){return a.scrollingElement?a.scrollingElement:!pb&&hc(a)?a.documentElement:a.body||a.documentElement}
function kc(a){return a.parentWindow||a.defaultView}
function hc(a){return"CSS1Compat"==a.compatMode}
function lc(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function mc(a){return Hb&&void 0!=a.children?a.children:Ba(a.childNodes,function(a){return 1==a.nodeType})}
function nc(a){return ka(a)&&1==a.nodeType}
function oc(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function bc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function pc(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(bc(a).createTextNode(String(b)))}}
function qc(a,b){var c=[];return rc(a,b,c,!0)?c[0]:void 0}
function rc(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||rc(a,b,c,d))return!0;a=a.nextSibling}return!1}
var sc={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},tc={IMG:" ",BR:"\n"};function uc(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!vc(a)||wc(a)):vc(a)&&wc(a))&&y){var c;!ja(a.getBoundingClientRect)||y&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function vc(a){return y&&!xb("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function wc(a){a=a.tabIndex;return ia(a)&&0<=a&&32768>a}
function xc(a){if(Ib&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];yc(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Ib||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function yc(a,b,c){if(!(a.nodeName in sc))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in tc)b.push(tc[a.nodeName]);else for(a=a.firstChild;a;)yc(a,b,c),a=a.nextSibling}
function zc(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Ac(a,function(a){return(!e||a.nodeName==e)&&(!c||q(a.className)&&Fa(a.className.split(/\s+/),c))},!0,d)}
function H(a,b){return zc(a,null,b,void 0)}
function Ac(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function ac(a){this.b=a||m.document||document}
ac.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
ac.prototype.createElement=function(a){return this.b.createElement(String(a))};
ac.prototype.appendChild=function(a,b){a.appendChild(b)};
ac.prototype.isElement=nc;var Bc="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function Cc(){}
Cc.prototype.next=function(){throw Bc;};
Cc.prototype.M=function(){return this};
function Dc(a){if(a instanceof Cc)return a;if("function"==typeof a.M)return a.M(!1);if(ha(a)){var b=0,c=new Cc;c.next=function(){for(;;){if(b>=a.length)throw Bc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Ec(a,b){if(ha(a))try{w(a,b,void 0)}catch(c){if(c!==Bc)throw c;}else{a=Dc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Bc)throw c;}}}
function Fc(a){if(ha(a))return Ha(a);a=Dc(a);var b=[];Ec(a,function(a){b.push(a)});
return b}
;function Gc(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
Gc.prototype.getHeight=function(){return this.bottom-this.top};
Gc.prototype.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
Gc.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
Gc.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Hc(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
Hc.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
Hc.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
Hc.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ic(a,b,c){if(q(b))(b=Jc(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Jc(c,d);f&&(c.style[f]=e)}}
var Kc={};function Jc(a,b){var c=Kc[b];if(!c){var d=ya(b),c=d;void 0===a.style[d]&&(d=(pb?"Webkit":ob?"Moz":y?"ms":lb?"O":null)+za(d),void 0!==a.style[d]&&(c=d));Kc[b]=c}return c}
function Lc(a,b){var c=bc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Mc(a,b){return Lc(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Nc(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}y&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Oc(a){if(y&&!(8<=Number(yb)))return a.offsetParent;var b=bc(a),c=Mc(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Mc(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Pc(a){for(var b=new Gc(0,Infinity,Infinity,0),c=$b(a),d=c.b.body,e=c.b.documentElement,f=jc(c.b);a=Oc(a);)if(!(y&&0==a.clientWidth||pb&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=Mc(a,"overflow")){var g=Qc(a),h=new E(a.clientLeft,a.clientTop);g.i+=h.i;g.j+=h.j;b.top=Math.max(b.top,g.j);b.right=Math.min(b.right,g.i+a.clientWidth);b.bottom=Math.min(b.bottom,g.j+a.clientHeight);b.left=Math.max(b.left,g.i)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
gc(kc(c.b)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Qc(a){var b=bc(a),c=new E(0,0);var d=b?bc(b):document;d=!y||9<=Number(yb)||hc($b(d).b)?d.documentElement:d.body;if(a==d)return c;a=Nc(a);b=ic($b(b).b);c.i=a.left+b.i;c.j=a.top+b.j;return c}
function Rc(a){a=Nc(a);return new E(a.left,a.top)}
function Sc(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Tc(a){var b=Uc;if("none"!=Mc(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Uc(a){var b=a.offsetWidth,c=a.offsetHeight,d=pb&&!b&&!c;return da(b)&&!d||!a.getBoundingClientRect?new Zb(b,c):(a=Nc(a),new Zb(a.right-a.left,a.bottom-a.top))}
function Vc(a){var b=Qc(a);a=Tc(a);return new Hc(b.i,b.j,a.width,a.height)}
function Wc(a){return"rtl"==Mc(a,"direction")}
function Xc(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Yc(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Xc(a,c):0}
var Zc={thin:2,medium:4,thick:6};function $c(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Zc?Zc[c]:Xc(a,c)}
;function ad(a,b,c,d,e,f,g){var h;if(h=c.offsetParent){var l="HTML"==h.tagName||"BODY"==h.tagName;if(!l||"static"!=Mc(h,"position")){var n=Qc(h);l||(l=(l=Wc(h))&&ob?-h.scrollLeft:!l||nb&&xb("8")||"visible"==Mc(h,"overflowX")?h.scrollLeft:h.scrollWidth-h.clientWidth-h.scrollLeft,n=Yb(n,new E(l,h.scrollTop)))}}h=n||new E;n=Vc(a);if(l=Pc(a)){var r=new Hc(l.left,l.top,l.right-l.left,l.bottom-l.top),l=Math.max(n.left,r.left),R=Math.min(n.left+n.width,r.left+r.width);if(l<=R){var z=Math.max(n.top,r.top),
r=Math.min(n.top+n.height,r.top+r.height);z<=r&&(n.left=l,n.top=z,n.width=R-l,n.height=r-z)}}l=$b(a);z=$b(c);if(l.b!=z.b){var R=l.b.body;var z=kc(z.b),r=new E(0,0);var O=(O=bc(R))?kc(O):window;b:{try{ib(O.parent);var L=!0;break b}catch(Ch){}L=!1}if(L){L=R;do{var me=O==z?Qc(L):Rc(L);r.i+=me.i;r.j+=me.j}while(O&&O!=z&&O!=O.parent&&(L=O.frameElement)&&(O=O.parent))}L=Yb(r,Qc(R));!y||9<=Number(yb)||hc(l.b)||(L=Yb(L,ic(l.b)));n.left+=L.i;n.top+=L.j}a=bd(a,b);b=n.left;a&4?b+=n.width:a&2&&(b+=n.width/2);
b=new E(b,n.top+(a&1?n.height:0));b=Yb(b,h);e&&(b.i+=(a&4?-1:1)*e.i,b.j+=(a&1?-1:1)*e.j);var ma;g&&(ma=Pc(c))&&(ma.top-=h.j,ma.right-=h.i,ma.bottom-=h.j,ma.left-=h.i);return cd(b,c,d,f,ma,g,void 0)}
function cd(a,b,c,d,e,f,g){a=new E(a.i,a.j);var h=bd(b,c);c=Tc(b);g=g?new Zb(g.width,g.height):new Zb(c.width,c.height);a=new E(a.i,a.j);g=new Zb(g.width,g.height);var l=0;if(d||0!=h)h&4?a.i-=g.width+(d?d.right:0):h&2?a.i-=g.width/2:d&&(a.i+=d.left),h&1?a.j-=g.height+(d?d.bottom:0):d&&(a.j+=d.top);if(f){if(e){d=a;h=g;l=0;65==(f&65)&&(d.i<e.left||d.i>=e.right)&&(f&=-2);132==(f&132)&&(d.j<e.top||d.j>=e.bottom)&&(f&=-5);d.i<e.left&&f&1&&(d.i=e.left,l|=1);if(f&16){var n=d.i;d.i<e.left&&(d.i=e.left,l|=
4);d.i+h.width>e.right&&(h.width=Math.min(e.right-d.i,n+h.width-e.left),h.width=Math.max(h.width,0),l|=4)}d.i+h.width>e.right&&f&1&&(d.i=Math.max(e.right-h.width,e.left),l|=1);f&2&&(l|=(d.i<e.left?16:0)|(d.i+h.width>e.right?32:0));d.j<e.top&&f&4&&(d.j=e.top,l|=2);f&32&&(n=d.j,d.j<e.top&&(d.j=e.top,l|=8),d.j+h.height>e.bottom&&(h.height=Math.min(e.bottom-d.j,n+h.height-e.top),h.height=Math.max(h.height,0),l|=8));d.j+h.height>e.bottom&&f&4&&(d.j=Math.max(e.bottom-h.height,e.top),l|=2);f&8&&(l|=(d.j<
e.top?64:0)|(d.j+h.height>e.bottom?128:0));e=l}else e=256;l=e}f=new Hc(0,0,0,0);f.left=a.i;f.top=a.j;f.width=g.width;f.height=g.height;e=l;if(e&496)return e;g=new E(f.left,f.top);g instanceof E?(a=g.i,g=g.j):(a=g,g=void 0);b.style.left=Sc(a,!1);b.style.top=Sc(g,!1);g=new Zb(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,g=hc($b(bc(b)).b),!y||xb("10")||g&&xb("8")?(b=b.style,ob?b.MozBoxSizing="border-box":pb?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,
0)+"px",b.height=Math.max(c.height,0)+"px"):(a=b.style,g?(y?(h=Yc(b,"paddingLeft"),d=Yc(b,"paddingRight"),f=Yc(b,"paddingTop"),g=Yc(b,"paddingBottom"),g=new Gc(f,d,g,h)):(h=Lc(b,"paddingLeft"),d=Lc(b,"paddingRight"),f=Lc(b,"paddingTop"),g=Lc(b,"paddingBottom"),g=new Gc(parseFloat(f),parseFloat(d),parseFloat(g),parseFloat(h))),!y||9<=Number(yb)?(h=Lc(b,"borderLeftWidth"),d=Lc(b,"borderRightWidth"),f=Lc(b,"borderTopWidth"),b=Lc(b,"borderBottomWidth"),b=new Gc(parseFloat(f),parseFloat(d),parseFloat(b),
parseFloat(h))):(h=$c(b,"borderLeft"),d=$c(b,"borderRight"),f=$c(b,"borderTop"),b=$c(b,"borderBottom"),b=new Gc(f,d,b,h)),a.pixelWidth=c.width-b.left-g.left-g.right-b.right,a.pixelHeight=c.height-b.top-g.top-g.bottom-b.bottom):(a.pixelWidth=c.width,a.pixelHeight=c.height)));return e}
function bd(a,b){return(b&8&&Wc(a)?b^4:b)&-9}
;function dd(a,b){this.b=0;this.v=void 0;this.l=this.f=this.h=null;this.m=this.o=!1;if(a!=ea)try{var c=this;a.call(b,function(a){ed(c,2,a)},function(a){ed(c,3,a)})}catch(d){ed(this,3,d)}}
function fd(){this.next=this.context=this.f=this.h=this.b=null;this.l=!1}
fd.prototype.reset=function(){this.context=this.f=this.h=this.b=null;this.l=!1};
var gd=new Ma(function(){return new fd},function(a){a.reset()},100);
function hd(a,b,c){var d=gd.get();d.h=a;d.f=b;d.context=c;return d}
dd.prototype.then=function(a,b,c){return id(this,ja(a)?a:null,ja(b)?b:null,c)};
dd.prototype.then=dd.prototype.then;dd.prototype.$goog_Thenable=!0;dd.prototype.cancel=function(a){0==this.b&&cb(function(){var b=new jd(a);kd(this,b)},this)};
function kd(a,b){if(0==a.b)if(a.h){var c=a.h;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.l||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?kd(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):ld(c),md(c,e,3,b)))}a.h=null}else ed(a,3,b)}
function nd(a,b){a.f||2!=a.b&&3!=a.b||od(a);a.l?a.l.next=b:a.f=b;a.l=b}
function id(a,b,c,d){var e=hd(null,null,null);e.b=new dd(function(a,g){e.h=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){g(n)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!da(e)&&b instanceof jd?g(b):a(e)}catch(n){g(n)}}:g});
e.b.h=a;nd(a,e);return e.b}
dd.prototype.F=function(a){this.b=0;ed(this,2,a)};
dd.prototype.T=function(a){this.b=0;ed(this,3,a)};
function ed(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.F,f=a.T;if(d instanceof dd){nd(d,hd(e||ea,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(n){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(ka(d))try{var l=d.then;if(ja(l)){pd(d,l,e,f,a);g=!0;break a}}catch(n){f.call(a,n);g=!0;break a}g=!1}}}g||(a.v=c,a.b=b,a.h=null,od(a),3!=b||c instanceof jd||qd(a,c))}}
function pd(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function od(a){a.o||(a.o=!0,cb(a.B,a))}
function ld(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.l=null);return b}
dd.prototype.B=function(){for(var a;a=ld(this);)md(this,a,this.b,this.v);this.o=!1};
function md(a,b,c,d){if(3==c&&b.f&&!b.l)for(;a&&a.m;a=a.h)a.m=!1;if(b.b)b.b.h=null,rd(b,c,d);else try{b.l?b.h.call(b.context):rd(b,c,d)}catch(e){sd.call(null,e)}Na(gd,b)}
function rd(a,b,c){2==b?a.h.call(a.context,c):a.f&&a.f.call(a.context,c)}
function qd(a,b){a.m=!0;cb(function(){a.m&&sd.call(null,b)})}
var sd=Xa;function jd(a){sa.call(this,a)}
v(jd,sa);jd.prototype.name="cancel";function I(a){Fb.call(this);this.v=1;this.m=[];this.o=0;this.b=[];this.f={};this.B=!!a}
v(I,Fb);k=I.prototype;k.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.v;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.v=e+3;d.push(e);return e};
function td(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.L(d),b.apply(void 0,arguments))},a)}
function ud(a,b,c){if(b=a.f[b]){var d=a.b;(b=Ea(b,function(a){return d[a+1]==c&&void 0==d[a+2]}))&&a.L(b)}}
k.L=function(a){var b=this.b[a];if(b){var c=this.f[b];if(0!=this.o)this.m.push(a),this.b[a+1]=ea;else{if(c){var d=Aa(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.b[a];delete this.b[a+1];delete this.b[a+2]}}return!!b};
k.D=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];vd(this.b[g+1],this.b[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.o--,0<this.m.length&&0==this.o)for(;g=this.m.pop();)this.L(g)}}return 0!=e}return!1};
function vd(a,b,c){cb(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.f[a];b&&(w(b,this.L,this),delete this.f[a])}else this.b.length=0,this.f={}};
function wd(a,b){if(b){var c=a.f[b];return c?c.length:0}var c=0,d;for(d in a.f)c+=wd(a,d);return c}
k.U=function(){I.A.U.call(this);this.clear();this.m.length=0};function xd(){}
;function yd(){}
v(yd,xd);yd.prototype.clear=function(){var a=Fc(this.M(!0)),b=this;w(a,function(a){b.remove(a)})};function zd(a){this.b=a}
v(zd,yd);k=zd.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!q(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.M=function(a){var b=0,c=this.b,d=new Cc;d.next=function(){if(b>=c.length)throw Bc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!q(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function Ad(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
v(Ad,zd);function Bd(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
v(Bd,zd);var Cd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Dd(a){return a?decodeURI(a):a}
function Ed(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Fd(a,b,c){if("array"==ga(b))for(var d=0;d<b.length;d++)Fd(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Gd(a,b,c){for(c=c||0;c<b.length;c+=2)Fd(b[c],b[c+1],a);return a}
function Hd(a,b){for(var c in b)Fd(c,b[c],a);return a}
function Id(a,b){return Ed(2==arguments.length?Gd([a],arguments[1],0):Gd([a],arguments,1))}
;var Jd=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",Jd);function Kd(a){var b=arguments;if(1<b.length)Jd[b[0]]=b[1];else{var b=b[0],c;for(c in b)Jd[c]=b[c]}}
function J(a,b){return a in Jd?Jd[a]:b}
;function Ld(a){var b=p("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=J("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),Kd("ERRORS",b))}
function Md(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ld(b)}}:a}
;function K(a,b){ja(a)&&(a=Md(a));return window.setTimeout(a,b)}
;var Nd=p("ytPubsubPubsubInstance")||new I;I.prototype.subscribe=I.prototype.subscribe;I.prototype.unsubscribeByKey=I.prototype.L;I.prototype.publish=I.prototype.D;I.prototype.clear=I.prototype.clear;u("ytPubsubPubsubInstance",Nd);var Od=p("ytPubsubPubsubSubscribedKeys")||{};u("ytPubsubPubsubSubscribedKeys",Od);var Pd=p("ytPubsubPubsubTopicToKeys")||{};u("ytPubsubPubsubTopicToKeys",Pd);var Qd=p("ytPubsubPubsubIsSynchronous")||{};u("ytPubsubPubsubIsSynchronous",Qd);
function Rd(a,b,c){var d=Sd();if(d){var e=d.subscribe(a,function(){var d=arguments;var g=function(){Od[e]&&b.apply(c||window,d)};
try{Qd[a]?g():K(g,0)}catch(h){Ld(h)}},c);
Od[e]=!0;Pd[a]||(Pd[a]=[]);Pd[a].push(e);return e}return 0}
function Sd(){return p("ytPubsubPubsubInstance")}
function M(a,b){var c=Sd();return c?c.publish.apply(c,arguments):!1}
function Td(a,b){Qd[a]=!0;var c=Sd();c&&c.publish.apply(c,arguments);Qd[a]=!1}
function Ud(a){var b=Sd();b&&(ia(a)?a=[a]:q(a)&&(a=[parseInt(a,10)]),w(a,function(a){b.unsubscribeByKey(a);delete Od[a]}))}
;function Vd(a,b){return a?a.dataset?a.dataset[Wd(b)]:a.getAttribute("data-"+b):null}
var Xd={};function Wd(a){return Xd[a]||(Xd[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
function Yd(a,b){a&&(a.dataset?delete a.dataset[Wd(b)]:a.removeAttribute("data-"+b))}
function N(a,b,c){a&&(a.dataset?a.dataset[Wd(b)]=String(c):a.setAttribute("data-"+b,c))}
;function P(a,b){this.version=a;this.args=b}
;function Q(a,b){this.topic=a;this.b=b}
Q.prototype.toString=function(){return this.topic};function Zd(a){var b=void 0;isNaN(b)&&(b=void 0);var c=p("yt.scheduler.instance.addJob");c?c(a,1,b):void 0===b?a():K(a,b||0)}
;var $d=p("ytPubsub2Pubsub2Instance")||new I;I.prototype.subscribe=I.prototype.subscribe;I.prototype.unsubscribeByKey=I.prototype.L;I.prototype.publish=I.prototype.D;I.prototype.clear=I.prototype.clear;u("ytPubsub2Pubsub2Instance",$d);var ae=p("ytPubsub2Pubsub2SubscribedKeys")||{};u("ytPubsub2Pubsub2SubscribedKeys",ae);var be=p("ytPubsub2Pubsub2TopicToKeys")||{};u("ytPubsub2Pubsub2TopicToKeys",be);var ce=p("ytPubsub2Pubsub2IsAsync")||{};u("ytPubsub2Pubsub2IsAsync",ce);
u("ytPubsub2Pubsub2SkipSubKey",null);function S(a,b){var c=de();c&&c.publish.call(c,a.toString(),a,b)}
function ee(a,b,c){var d=de();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){var f=p("ytPubsub2Pubsub2SkipSubKey");f&&f==e||(f=function(){if(ae[e])try{if(g&&a instanceof Q&&a!=d)try{var f=a.b,h=g;if(!h.args||!h.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!f.Da){var r=new f;f.Da=r.version}var R=f.Da}catch(z){}if(!R||h.version!=R)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{g=Reflect.construct(f,
Ha(h.args))}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+z.message,z;}b.call(c||window,g)}catch(z){Ld(z)}},ce[a.toString()]?p("yt.scheduler.instance")?Zd(f):K(f,0):f())});
ae[e]=!0;be[a.toString()]||(be[a.toString()]=[]);be[a.toString()].push(e);return e}
function de(){return p("ytPubsub2Pubsub2Instance")}
function fe(a){var b=de();b&&(ia(a)&&(a=[a]),w(a,function(a){b.unsubscribeByKey(a);delete ae[a]}))}
;var ge=0;function he(a,b){var c=dc(a,null,b);return c.length?c[0]:null}
var ie=p("ytDomDomGetNextId")||function(){return++ge};
u("ytDomDomGetNextId",ie);function je(){var a=document,b;Da(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function ke(a){var b=a.__yt_uid_key;b||(b=ie(),a.__yt_uid_key=b);return b}
function le(a,b){a=F(a);b=F(b);return!!Ac(a,function(a){return a===b},!0,void 0)}
function ne(){D(document.body,"hide-players",!1);w(cc("preserve-players"),function(a){C(a,"preserve-players")})}
;var oe={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function pe(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in oe||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
pe.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
pe.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
pe.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ua=p("ytEventsEventsListeners")||{};u("ytEventsEventsListeners",Ua);var qe=p("ytEventsEventsCounter")||{count:0};u("ytEventsEventsCounter",qe);function re(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ta(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function T(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=re(a,b,c,d);if(e)return e;var e=++qe.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new pe(d);if(!Ac(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new pe(b);
b.currentTarget=a;return c.call(a,b)};
g=Md(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Ua[e]=[a,b,c,g,d];return e}
function se(a,b,c){var d=a||document;return T(d,"click",function(a){var e=Ac(a.target,function(a){return a===d||c(a)},!0);
e&&e!==d&&!e.disabled&&(a.currentTarget=e,b.call(e,a))})}
function te(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
function ue(a,b,c){return se(a,b,function(a){return A(a,c)})}
function ve(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function U(a){a&&("string"==typeof a&&(a=[a]),w(a,function(a){if(a in Ua){var b=Ua[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Ua[a]}}))}
;var we={},xe="ontouchstart"in document;function ye(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return Ac(c,function(a){return A(a,b)},!0,d)}
function V(a){var b;var c="mouseover"==a.type&&"mouseenter"in we||"mouseout"==a.type&&"mouseleave"in we;var d=a.type in we||c;if("HTML"!=a.target.tagName&&d){if(c){c="mouseover"==a.type?"mouseenter":"mouseleave";var d=we[c],e;for(e in d.f)(b=ye(c,e,a.target))&&!Ac(a.relatedTarget,function(a){return a==b},!0)&&d.D(e,b,c,a)}if(c=we[a.type])for(e in c.f)(b=ye(a.type,e,a.target))&&c.D(e,b,a.type,a)}}
T(document,"blur",V,!0);T(document,"change",V,!0);T(document,"click",V);T(document,"focus",V,!0);T(document,"mouseover",V);T(document,"mouseout",V);T(document,"mousedown",V);T(document,"keydown",V);T(document,"keyup",V);T(document,"keypress",V);T(document,"cut",V);T(document,"paste",V);xe&&(T(document,"touchstart",V),T(document,"touchend",V),T(document,"touchcancel",V));function W(a){this.m=a;this.v={};this.F=[];this.B=[]}
k=W.prototype;k.w=function(a){return H(a,X(this))};
function X(a,b){return"yt-uix"+(a.m?"-"+a.m:"")+(b?"-"+b:"")}
k.unregister=function(){Ud(this.F);this.F.length=0;fe(this.B);this.B.length=0};
k.init=ea;k.dispose=ea;function ze(a,b,c){a.F.push(Rd(b,c,a))}
function Ae(a,b,c){a.B.push(ee(b,c,a))}
function Y(a,b,c,d){d=X(a,d);var e=t(c,a);b in we||(we[b]=new I);we[b].subscribe(d,e);a.v[c]=e}
function Z(a,b,c,d){if(b in we){var e=we[b];ud(e,X(a,d),a.v[c]);0>=wd(e)&&(e.dispose(),delete we[b])}delete a.v[c]}
k.J=function(a,b,c){var d=this.g(a,b);if(d&&(d=p(d))){var e=Ka(arguments,2);Ja(e,0,0,a);d.apply(null,e)}};
k.g=function(a,b){return Vd(a,b)};
function Be(a,b){N(a,"tooltip-text",b)}
;var Ce=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};u("yt.uix.widgets_",Ce);ra();var De=da(XMLHttpRequest)?function(){return new XMLHttpRequest}:da(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Ee(){if(!De)return null;var a=De();return"open"in a?a:null}
;function Fe(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==ga(b[f])?Ia(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Ge(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Fe(d[1]||""),e;for(e in b)d[e]=b[e];return Ed(Hd([a],d))+c}
function He(a){a=Hd([],a);a[0]="";return a.join("")}
;var Ie={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};
function Je(a,b){b=void 0===b?{}:b;var c=void 0;c=window.location.href;var d=a.match(Cd)[1]||null,e=Dd(a.match(Cd)[3]||null);d&&e?(d=c,c=a.match(Cd),d=d.match(Cd),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Dd(c.match(Cd)[3]||null)==e&&(Number(c.match(Cd)[4]||null)||null)==(Number(a.match(Cd)[4]||null)||null):!0;for(var f in Ie){if((e=d=J(Ie[f]))&&!(e=c)){var g=a,e=f,h=J("CORS_HEADER_WHITELIST")||{};e=(g=Dd(g.match(Cd)[3]||null))?(h=h[g])?Fa(h,e):!1:!0}e&&(b[f]=d)}return b}
function Ke(a,b){var c=J("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Lb&&(!Dd(a.match(Cd)[3]||null)||b.withCredentials||Dd(a.match(Cd)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.H&&b.H[c])}
function Le(a,b){var c=b.format||"JSON";b.Mb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=J("XSRF_FIELD_NAME",void 0),e=J("XSRF_TOKEN",void 0),f=b.Ba;f&&(f[d]&&delete f[d],a=Ge(a,f||{}));var g=b.postBody||"",f=b.H;Ke(a,b)&&(f||(f={}),f[d]=e);f&&q(g)&&(d=Fe(g),Wa(d,f),g=b.ub&&"JSON"==b.ub?JSON.stringify(d):He(d));var h=!1,l,n=Me(a,function(a){if(!h){h=!0;l&&window.clearTimeout(l);a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var d=
!0;break a;default:d=!1}var e=null;if(d||400<=a.status&&500>a.status)e=Ne(c,a,b.Kb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||m;d?b.K&&b.K.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Y&&b.Y.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.rb&&0<b.timeout&&(l=K(function(){h||(h=!0,n.abort(),window.clearTimeout(l),b.rb.call(b.context||m,n))},b.timeout))}
function Ne(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Oe(b):null)d={},w(b.getElementsByTagName("*"),function(a){d[a.tagName]=Pe(a)})}c&&Qe(d);
return d}
function Qe(a){if(ka(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Xb(a[b]);a[c]=d}else Qe(a[b])}}
function Oe(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Pe(a){var b="";w(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Me(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Md(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=Ee();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c;if(e=Je(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;var Re={},Se=0;function Te(a){var b=new Image,c=""+Se++;Re[c]=b;b.onload=b.onerror=function(){delete Re[c]};
b.src=a}
;function Ue(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&(J("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?Me(c,void 0):Te(c))}}
;function Ve(a){P.call(this,1,arguments);this.b=a}
v(Ve,P);function We(a){P.call(this,1,arguments);this.b=a}
v(We,P);function Xe(a,b,c){P.call(this,3,arguments);this.h=a;this.f=b;this.b=null!=c?!!c:null}
v(Xe,P);function Ye(a,b,c,d,e){P.call(this,2,arguments);this.f=a;this.b=b;this.l=c||null;this.h=d||null;this.source=e||null}
v(Ye,P);function Ze(a,b,c){P.call(this,1,arguments);this.b=a;this.f=b}
v(Ze,P);function $e(a,b,c,d,e,f,g){P.call(this,1,arguments);this.f=a;this.m=b;this.b=c;this.o=d||null;this.l=e||null;this.h=f||null;this.source=g||null}
v($e,P);
var af=new Q("subscription-batch-subscribe",Ve),bf=new Q("subscription-batch-unsubscribe",Ve),cf=new Q("subscription-subscribe",Ye),df=new Q("subscription-subscribe-loading",We),ef=new Q("subscription-subscribe-loaded",We),ff=new Q("subscription-subscribe-success",Ze),gf=new Q("subscription-subscribe-external",Ye),hf=new Q("subscription-unsubscribe",$e),jf=new Q("subscription-unsubscirbe-loading",We),kf=new Q("subscription-unsubscribe-loaded",We),lf=new Q("subscription-unsubscribe-success",We),mf=
new Q("subscription-external-unsubscribe",$e),nf=new Q("subscription-enable-ypc",We),of=new Q("subscription-disable-ypc",We),pf=new Q("subscription-prefs",Xe),qf=new Q("subscription-prefs-success",Xe),rf=new Q("subscription-prefs-failure",Xe);function sf(a){P.call(this,1,arguments)}
v(sf,P);function tf(a,b){P.call(this,2,arguments);this.f=a;this.b=b}
v(tf,P);function uf(a,b,c,d){P.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
v(uf,P);function vf(a,b){P.call(this,1,arguments);this.f=a;this.b=b||null}
v(vf,P);function wf(a){P.call(this,1,arguments)}
v(wf,P);var xf=new Q("ypc-core-load",sf),yf=new Q("ypc-guide-sync-success",tf),zf=new Q("ypc-purchase-success",uf),Af=new Q("ypc-subscription-cancel",wf),Bf=new Q("ypc-subscription-cancel-success",vf),Cf=new Q("ypc-init-subscription",wf);var Df=!1,Ef=[];function Ff(a){a.b?Df?S(gf,a):S(xf,new sf(function(){S(Cf,new wf(a.b))})):Gf(a.f,a.l,a.h,a.source)}
function Hf(a){a.b?Df?S(mf,a):S(xf,new sf(function(){S(Af,new wf(a.b))})):If(a.f,a.m,a.l,a.h,a.source)}
function Jf(a){Kf(Ha(a.b))}
function Lf(a){Mf(Ha(a.b))}
function Nf(a){Of(a.h,a.f,a.b)}
function Pf(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&S(ff,new Ze(b,c,a.b.channelInfo))}
function Qf(a){var b=a.b;Ra(a.f,function(a,d){S(ff,new Ze(d,a,b[d]))})}
function Rf(a){S(lf,new We(a.f.itemId));a.b&&a.b.length&&(Sf(a.b,lf),Sf(a.b,nf))}
function Gf(a,b,c,d){var e=new We(a);S(df,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=J("PLAYBACK_ID"))&&(c.plid=d);(d=J("EVENT_ID"))&&(c.ei=d);b&&Tf(b,c);Le("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Ba:f,H:c,K:function(b,c){var d=c.response;S(ff,new Ze(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&M("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&Ue(d.actions)},
Y:function(){S(ef,e)}})}
function If(a,b,c,d,e){var f=new We(a);S(jf,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=J("PLAYBACK_ID"))&&(d.plid=a);(a=J("EVENT_ID"))&&(d.ei=a);c&&Tf(c,d);Le("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Ba:g,H:d,K:function(a,b){var c=b.response;S(lf,f);c.actions&&Ue(c.actions)},
Y:function(){S(kf,f)}})}
function Of(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new Xe(a,b,c);Le("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",H:d,onError:function(){S(rf,e)},
K:function(){S(qf,e)}})}}
function Kf(a){if(a.length){var b=Ja(a,0,40);S("subscription-batch-subscribe-loading");Sf(b,df);var c={};c.a=b.join(",");var d=function(){S("subscription-batch-subscribe-loaded");Sf(b,ef)};
Le("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",H:c,K:function(c,f){d();var e=f.response,h=e.id;if("array"==ga(h)&&h.length==b.length){var l=e.channel_info_map;w(h,function(a,c){var d=b[c];S(ff,new Ze(d,a,l[d]))});
a.length?Kf(a):S("subscription-batch-subscribe-finished")}},
onError:function(){d();S("subscription-batch-subscribe-failure")}})}}
function Mf(a){if(a.length){var b=Ja(a,0,40);S("subscription-batch-unsubscribe-loading");Sf(b,jf);var c={};c.c=b.join(",");var d=function(){S("subscription-batch-unsubscribe-loaded");Sf(b,kf)};
Le("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",H:c,K:function(){d();Sf(b,lf);a.length&&Mf(a)},
onError:function(){d()}})}}
function Sf(a,b){w(a,function(a){S(b,new We(a))})}
function Tf(a,b){var c=Fe(a),d;for(d in c)b[d]=c[d]}
;function Uf(){var a=je();return a?a:null}
;function Vf(a,b){(a=F(a))&&a.style&&(a.style.display=b?"":"none",D(a,"hid",!b))}
function Wf(a){return(a=F(a))?"none"!=a.style.display&&!A(a,"hid"):!1}
function Xf(a){w(arguments,function(a){!ha(a)||a instanceof Element?Vf(a,!0):w(a,function(a){Xf(a)})})}
function Yf(a){w(arguments,function(a){!ha(a)||a instanceof Element?Vf(a,!1):w(a,function(a){Yf(a)})})}
;function Zf(){W.call(this,"tooltip");this.b=0;this.f={}}
v(Zf,W);fa(Zf);k=Zf.prototype;k.register=function(){Y(this,"mouseover",this.P);Y(this,"mouseout",this.G);Y(this,"focus",this.ka);Y(this,"blur",this.fa);Y(this,"click",this.G);Y(this,"touchstart",this.Aa);Y(this,"touchend",this.S);Y(this,"touchcancel",this.S)};
k.unregister=function(){Z(this,"mouseover",this.P);Z(this,"mouseout",this.G);Z(this,"focus",this.ka);Z(this,"blur",this.fa);Z(this,"click",this.G);Z(this,"touchstart",this.Aa);Z(this,"touchend",this.S);Z(this,"touchcancel",this.S);this.dispose();Zf.A.unregister.call(this)};
k.dispose=function(){for(var a in this.f)this.G(this.f[a]);this.f={}};
k.P=function(a){if(!(this.b&&1E3>ra()-this.b)){var b=parseInt(this.g(a,"tooltip-hide-timer"),10);b&&(Yd(a,"tooltip-hide-timer"),window.clearTimeout(b));var b=t(function(){$f(this,a);Yd(a,"tooltip-show-timer")},this),c=parseInt(this.g(a,"tooltip-show-delay"),10)||0,b=K(b,c);
N(a,"tooltip-show-timer",b.toString());a.title&&(Be(a,ag(this,a)),a.title="");b=la(a).toString();this.f[b]=a}};
k.G=function(a){var b=parseInt(this.g(a,"tooltip-show-timer"),10);b&&(window.clearTimeout(b),Yd(a,"tooltip-show-timer"));b=t(function(){if(a){var b=F(bg(this,a));b&&(cg(b),lc(b),Yd(a,"content-id"));b=F(bg(this,a,"arialabel"));lc(b)}Yd(a,"tooltip-hide-timer")},this);
b=K(b,50);N(a,"tooltip-hide-timer",b.toString());if(b=this.g(a,"tooltip-text"))a.title=b;b=la(a).toString();delete this.f[b]};
k.ka=function(a){this.b=0;this.P(a)};
k.fa=function(a){this.b=0;this.G(a)};
k.Aa=function(a,b,c){c.changedTouches&&(this.b=0,(a=ye(b,X(this),c.changedTouches[0].target))&&this.P(a))};
k.S=function(a,b,c){c.changedTouches&&(this.b=ra(),(a=ye(b,X(this),c.changedTouches[0].target))&&this.G(a))};
function dg(a,b,c){Be(b,c);a=a.g(b,"content-id");(a=F(a))&&pc(a,c)}
function ag(a,b){return a.g(b,"tooltip-text")||b.title}
function $f(a,b){if(b){var c=ag(a,b);if(c){var d=F(bg(a,b));if(!d){d=document.createElement("div");d.id=bg(a,b);d.className=X(a,"tip");var e=document.createElement("div");e.className=X(a,"tip-body");var f=document.createElement("div");f.className=X(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=X(a,"tip-content");var h=eg(a,b),l=bg(a,b,"content");g.id=l;N(b,"content-id",l);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);var n=
xc(b);l=bg(a,b,"arialabel");f=document.createElement("div");B(f,X(a,"arialabel"));f.id=l;n=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+n:n+" "+c;pc(f,n);b.setAttribute("aria-labelledby",l);l=Uf()||document.body;l.appendChild(f);l.appendChild(d);dg(a,b,c);(c=parseInt(a.g(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",B(g,X(a,"normal-wrap")));g=A(b,X(a,"reverse"));fg(a,b,d,e,h,g)||fg(a,b,d,e,h,!g);var r=X(a,"tip-visible");
K(function(){B(d,r)},0)}}}}
function fg(a,b,c,d,e,f){D(c,X(a,"tip-reverse"),f);var g=0;f&&(g=1);var h=Tc(b);f=new E((h.width-10)/2,f?h.height:0);var l=Qc(b);cd(new E(l.i+f.i,l.j+f.j),c,g);f=gc(window);if(1==c.nodeType)var n=Rc(c);else c=c.changedTouches?c.changedTouches[0]:c,n=new E(c.clientX,c.clientY);c=Tc(d);var r=Math.floor(c.width/2),g=!!(f.height<n.j+h.height),h=!!(n.j<h.height),l=!!(n.i<r);f=!!(f.width<n.i+r);n=(c.width+3)/-2- -5;a=a.g(b,"force-tooltip-direction");if("left"==a||l)n=-5;else if("right"==a||f)n=20-c.width-
3;a=Math.floor(n)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||h)}
function bg(a,b,c){a=X(a)+ke(b);c&&(a+="-"+c);return a}
function eg(a,b){var c=null;qb&&A(b,X(a,"masked"))&&((c=F("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Xf(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=X(a,"tip-mask")));return c}
function cg(a){var b=F("yt-uix-tooltip-shared-mask"),c=b&&Ac(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Yf(b),document.body.appendChild(b))}
;function gg(a){var b=document.location.protocol+"//"+document.domain+"/post_login",b=Id(b,"mode","subscribe"),b=Id("/signin?context=popup","next",b),b=Id(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=Rd("LOGGED_IN",function(b){Ud(J("LOGGED_IN_PUBSUB_KEY",void 0));Kd("LOGGED_IN",!0);a(b)});
Kd("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
u("yt.pubsub.publish",M);var hg=p("ytLoggingTransportLogPayloadsQueue_")||{};u("ytLoggingTransportLogPayloadsQueue_",hg);var ig=p("ytLoggingTransportTokensToCttTargetIds_")||{};u("ytLoggingTransportTokensToCttTargetIds_",ig);(new Ad).isAvailable();(new Bd).isAvailable();function jg(){W.call(this,"button");this.b=null;this.h=[];this.f={}}
v(jg,W);fa(jg);k=jg.prototype;k.register=function(){Y(this,"click",this.Fa);Y(this,"keydown",this.oa);Y(this,"keypress",this.pa);ze(this,"page-scroll",this.eb)};
k.unregister=function(){Z(this,"click",this.Fa);Z(this,"keydown",this.oa);Z(this,"keypress",this.pa);kg(this);this.f={};jg.A.unregister.call(this)};
k.Fa=function(a){a&&!a.disabled&&(lg(this,a),this.click(a))};
k.oa=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey)&&(b=mg(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=qc(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.lb;else"table"==e&&(f=this.kb);f&&ng(this,a,b,c,t(f,this))}}};
k.eb=function(){var a=this.f,b=0;for(d in a)b++;if(0!=b)for(var c in a){b=a[c];var d=H(b.activeButtonNode||b.parentNode,X(this));if(void 0==d||void 0==b)break;og(this,d,b,!0)}};
function ng(a,b,c,d,e){var f=Wf(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=pg(a,c)){if(da(d.firstElementChild))b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;if("a"==b.tagName.toLowerCase()){var h=void 0===h?{}:h;var l=void 0===l?"":l;var n=void 0===n?window:n;n=n.location;h=Ed(Hd([b.href],h))+l;h instanceof Qb||h instanceof Qb||(h=h.W?h.V():String(h),Sb.test(h)||(h="about:invalid#zClosurez"),h=Tb(h));h instanceof Qb&&h.constructor===Qb&&h.f===Rb?h=
h.b:(ga(h),h="type_error:SafeUrl");n.href=h}else ve(b)}else g&&qg(a,b);else f?27==d.keyCode?(pg(a,c),qg(a,b)):e(b,c,d):(h=A(b,X(a,"reverse"))?38:40,d.keyCode==h&&(ve(b),d.preventDefault()))}
k.pa=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||(a=mg(this,a),Wf(a)&&c.preventDefault())};
function pg(a,b){var c=X(a,"menu-item-highlight"),d=G(c,b);d&&C(d,c);return d}
function rg(a,b,c){B(c,X(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=X(a,"item-id-"+la(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
k.kb=function(a,b,c){var d=pg(this,b);if(d){var e=he("table",b);b=dc("td",null,e);d=sg(d,b,dc("td",null,he("tr",e)).length,c);-1!=d&&(rg(this,a,b[d]),c.preventDefault())}};
k.lb=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=pg(this,b);d&&(b=Ba(dc("li",null,b),Wf),rg(this,a,b[sg(d,b,1,c)]),c.preventDefault())}};
function sg(a,b,c,d){var e=b.length;a=Aa(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function tg(a,b){var c=b.iframeMask;c||(c=document.createElement("iframe"),c.src='javascript:""',c.className=X(a,"menu-mask"),Yf(c),b.iframeMask=c);return c}
function og(a,b,c,d){var e=H(b,X(a,"group")),f=!!a.g(b,"button-menu-ignore-group"),e=e&&!f?e:b,f=9,g=8,h=Vc(b);if(A(b,X(a,"reverse"))){f=8;g=9;h=h.top+"px";try{c.style.maxHeight=h}catch(r){}}A(b,"flip")&&(A(b,X(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.g(b,"button-has-sibling-menu")?l=Oc(e):a.g(b,"button-menu-root-container")&&(l=ug(a,b));y&&!xb("8")&&(l=null);if(l){var n=Vc(l);n=new Gc(-n.top,n.left,n.top,-n.left)}l=new E(0,1);A(b,X(a,"center-menu"))&&(l.i-=Math.round((Tc(c).width-Tc(b).width)/
2));d&&(l.j+=ic(document).j);if(a=tg(a,b))b=Tc(c),a.style.width=b.width+"px",a.style.height=b.height+"px",ad(e,f,a,g,l,n,197),d&&Ic(a,"position","fixed");ad(e,f,c,g,l,n,197)}
function ug(a,b){if(a.g(b,"button-menu-root-container")){var c=a.g(b,"button-menu-root-container");return H(b,c)}return document.body}
k.Ha=function(a){if(a){var b=mg(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.g(a,"button-has-sibling-menu")?c=a.parentNode:c=ug(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=tg(this,a);d&&c.appendChild(d);(c=!!this.g(a,"button-menu-fixed"))&&(this.f[ke(a).toString()]=b);og(this,a,b,c);Td("yt-uix-button-menu-before-show",a,b);Xf(b);d&&Xf(d);
this.J(a,"button-menu-action",!0);B(a,X(this,"active"));b=t(this.Ga,this,a,!1);d=t(this.Ga,this,a,!0);c=t(this.wb,this,a,void 0);this.b&&mg(this,this.b)==mg(this,a)||kg(this);M("yt-uix-button-menu-show",a);U(this.h);this.h=[T(document,"click",d),T(document,"contextmenu",b),T(window,"resize",c)];this.b=a}}};
function qg(a,b){if(b){var c=mg(a,b);if(c){a.b=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");Yf(c);a.J(b,"button-menu-action",!1);var d=tg(a,b),e=ke(c).toString();delete a.f[e];K(function(){d&&d.parentNode&&(Yf(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}var e=H(b,X(a,"group")),f=[X(a,"active")];
e&&f.push(X(a,"group-active"));Lb(b,f);M("yt-uix-button-menu-hide",b);U(a.h);a.h.length=0}}
k.wb=function(a,b){var c=mg(this,a);if(c){b&&(b instanceof Ub?c.innerHTML=Wb(b):pc(c,b));var d=!!this.g(a,"button-menu-fixed");og(this,a,c,d)}};
k.Ga=function(a,b,c){c=te(c);var d=H(c,X(this));if(d){var d=mg(this,d),e=mg(this,a);if(d==e)return}var d=H(c,X(this,"menu")),e=d==mg(this,a),f=A(c,X(this,"menu-item")),g=A(c,X(this,"menu-close"));if(!d||e&&(f||g))qg(this,a),d&&b&&this.g(a,"button-menu-indicate-selected")&&((a=G(X(this,"content"),a))&&pc(a,xc(c)),vg(this,d,c))};
function vg(a,b,c){var d=X(a,"menu-item-selected");w(cc(d,b),function(a){C(a,d)});
B(c.parentNode,d)}
function mg(a,b){if(!b.widgetMenu){var c=a.g(b,"button-menu-id"),c=c&&F(c),d=X(a,"menu");c?Kb(c,[d,X(a,"menu-external")]):c=G(d,b);b.widgetMenu=c}return b.widgetMenu}
k.isToggled=function(a){return A(a,X(this,"toggled"))};
function lg(a,b){if(a.g(b,"button-toggle")){var c=H(b,X(a,"group")),d=X(a,"toggled"),e=A(b,d);if(c&&a.g(c,"button-toggle-group")){var f=a.g(c,"button-toggle-group");w(cc(X(a),c),function(a){a!=b||"optional"==f&&e?(C(a,d),a.removeAttribute("aria-pressed")):(B(b,d),a.setAttribute("aria-pressed","true"))})}else e?b.removeAttribute("aria-pressed"):b.setAttribute("aria-pressed","true"),Nb(b,d)}}
k.click=function(a){if(mg(this,a)){var b=mg(this,a);if(b){var c=H(b.activeButtonNode||b.parentNode,X(this));c&&c!=a?(qg(this,c),K(t(this.Ha,this,a),1)):Wf(b)?qg(this,a):this.Ha(a)}a.focus()}this.J(a,"button-action")};
function kg(a){a.b&&qg(a,a.b)}
;function wg(a){W.call(this,a);this.h=null}
v(wg,W);k=wg.prototype;k.w=function(a){var b=W.prototype.w.call(this,a);return b?b:a};
k.register=function(){ze(this,"yt-uix-kbd-nav-move-out-done",this.C)};
k.dispose=function(){wg.A.dispose.call(this);xg(this)};
k.g=function(a,b){var c=wg.A.g.call(this,a,b);return c?c:(c=wg.A.g.call(this,a,"card-config"))&&(c=p(c))&&c[b]?c[b]:null};
k.show=function(a){var b=this.w(a);if(b){B(b,X(this,"active"));var c=yg(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;zg(this,a,c);var d=X(this,"card-visible"),e=this.g(a,"card-delegate-show")&&this.g(b,"card-action");this.J(b,"card-action",a);this.h=a;Yf(c);K(t(function(){e||(Xf(c),M("yt-uix-card-show",b,a,c));Ag(c);B(c,d);M("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function yg(a,b,c){var d=c||b,e=X(a,"card");c=Bg(a,d);var f=F(X(a,"card")+ke(d));if(f)return a=G(X(a,"card-body"),f),oc(a,c)||(lc(c),a.appendChild(c)),f;f=document.createElement("div");f.id=X(a,"card")+ke(d);f.className=e;(d=a.g(d,"card-class"))&&Kb(f,d.split(/\s+/));d=document.createElement("div");d.className=X(a,"card-border");b=a.g(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");
g.className=X(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;lc(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function zg(a,b,c){var d=a.g(b,"orientation")||"horizontal",e=G(X(a,"anchor"),b)||b,f=a.g(b,"position"),g=!!a.g(b,"force-position"),h=a.g(b,"position-fixed"),d="horizontal"==d,l="bottomright"==f||"bottomleft"==f,n="topright"==f||"bottomright"==f;if(n&&l){var r=13;var R=8}else n&&!l?(r=12,R=9):!n&&l?(r=9,R=12):(r=8,R=13);var z=Wc(document.body),f=Wc(b);z!=f&&(r^=4);if(d){f=b.offsetHeight/2-12;var O=new E(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,O=new E(b.offsetWidth+6,-12);var L=Tc(c),f=Math.min(f,
(d?L.height:L.width)-24-6);6>f&&(f=6,d?O.j+=12-b.offsetHeight/2:O.i+=12-b.offsetWidth/2);L=null;g||(L=10);b=X(a,"card-flip");a=X(a,"card-reverse");D(c,b,n);D(c,a,l);L=ad(e,r,c,R,O,null,L);!g&&L&&(L&48&&(n=!n,r^=4,R^=4),L&192&&(l=!l,r^=1,R^=1),D(c,b,n),D(c,a,l),ad(e,r,c,R,O));h&&(e=parseInt(c.style.top,10),g=ic(document).j,Ic(c,"position","fixed"),Ic(c,"top",e-g+"px"));z&&(c.style.right="",e=Vc(c),e.left=e.left||parseInt(c.style.left,10),g=gc(window),c.style.left="",c.style.right=g.width-e.left-e.width+
"px");e=G("yt-uix-card-body-arrow",c);g=G("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!z&&n||z&&!n?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=G("yt-uix-card-arrow",c);n=G("yt-uix-card-arrow-background",c);l&&n&&(c="right"==d?Tc(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",n.style.marginLeft=-f+"px",n.style.marginTop=f+"px")}
k.C=function(a){if(a=this.w(a)){var b=F(X(this,"card")+ke(a));b&&(C(a,X(this,"active")),C(b,X(this,"card-visible")),Yf(b),this.h=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(lc(b.cardMask),b.cardMask=null))}};
function xg(a){a.h&&a.C(a.h)}
k.vb=function(a,b){var c=this.w(a);if(c){if(b){var d=Bg(this,c);if(!d)return;b instanceof Ub?d.innerHTML=Wb(b):pc(d,b)}A(c,X(this,"active"))&&(c=yg(this,a,c),zg(this,a,c),Xf(c),Ag(c))}};
k.isActive=function(a){return(a=this.w(a))?A(a,X(this,"active")):!1};
function Bg(a,b){var c=b.cardContentNode;if(!c){var d=X(a,"content"),e=X(a,"card-content");(c=(c=a.g(b,"card-id"))?F(c):G(d,b))||(c=document.createElement("div"));var f=c;C(f,d);B(f,e);b.cardContentNode=c}return c}
function Ag(a){var b=a.cardMask;b||(b=document.createElement("iframe"),b.src='javascript:""',Kb(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function Cg(){W.call(this,"kbd-nav")}
var Dg;v(Cg,W);fa(Cg);k=Cg.prototype;k.register=function(){Y(this,"keydown",this.ma);ze(this,"yt-uix-kbd-nav-move-in",this.ua);ze(this,"yt-uix-kbd-nav-move-in-to",this.mb);ze(this,"yt-uix-kbd-move-next",this.va);ze(this,"yt-uix-kbd-nav-move-to",this.N)};
k.unregister=function(){Z(this,"keydown",this.ma);U(Dg)};
k.ma=function(a,b,c){var d=c.keyCode;if(a=H(a,X(this)))switch(d){case 13:case 32:this.ua(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=Pb(a,"kbdNavMoveOut");!c;){c=H(a.parentElement,X(this));if(!c)break a;c=Pb(c,"kbdNavMoveOut")}c=F(c);this.N(c);M("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&A(a,X(this,"list")))switch(d){case 40:this.va(b,a);break;case 38:d=document.activeElement==a,a=Eg(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+b-
1)%a.length,a[b].focus(),Fg(this,a[b]))}c.preventDefault()}};
k.ua=function(a){var b=Pb(a,"kbdNavMoveIn"),b=F(b);Gg(this,a,b);this.N(b)};
k.mb=function(a){a:{var b=document;try{var c=b&&b.activeElement;break a}catch(d){}c=null}Gg(this,c,a);this.N(a)};
k.N=function(a){if(a)if(uc(a))a.focus();else{var b=qc(a,function(a){return nc(a)?uc(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function Gg(a,b,c){b&&c&&(B(c,X(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Ob&&c.dataset?c.dataset.kbdNavMoveOut=b:c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b))}
k.va=function(a,b){var c=document.activeElement==b,d=Eg(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),Fg(this,d[c]))};
function Fg(a,b){if(b){var c=zc(b,"LI");c&&(B(c,X(a,"highlight")),Dg=T(b,"blur",t(function(a){C(a,X(this,"highlight"));U(Dg)},a,c)))}}
function Eg(a){if("UL"!=a.tagName.toUpperCase())return[];a=Ba(mc(a),function(a){return"LI"==a.tagName.toUpperCase()});
return Ba(Ca(a,function(a){return Wf(a)?qc(a,function(a){return nc(a)?uc(a):!1}):!1}),function(a){return!!a})}
;function Hg(){W.call(this,"menu");this.f=this.b=null;this.h={};this.o={};this.l=null}
v(Hg,W);fa(Hg);function Ig(a){var b=Hg.u();if(A(a,X(b)))return a;var c=b.w(a);return c?c:H(a,X(b,"content"))==b.b?b.f:null}
k=Hg.prototype;k.register=function(){Y(this,"click",this.la);Y(this,"mouseenter",this.bb);ze(this,"page-scroll",this.fb);ze(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.w(a);Jg(this,a)});
this.l=new I};
k.unregister=function(){Z(this,"click",this.la);this.f=this.b=null;U(La(Sa(this.h)));this.h={};Ra(this.o,function(a){lc(a)},this);
this.o={};Gb(this.l);this.l=null;Hg.A.unregister.call(this)};
k.la=function(a,b,c){a&&(b=Kg(this,a),!b.disabled&&le(c.target,b)&&Lg(this,a))};
k.bb=function(a,b,c){a&&A(a,X(this,"hover"))&&le(c.target,Kg(this,a))&&Lg(this,a,!0)};
k.fb=function(){this.b&&this.f&&Mg(this,this.f,this.b)};
function Mg(a,b,c){var d=Ng(a,b);if(d){var e=Tc(c);if(e instanceof Zb){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Sc(e,!0);d.style.height=Sc(f,!0)}c==a.b&&(e=9,f=8,A(b,X(a,"reversed"))&&(e^=1,f^=1),A(b,X(a,"flipped"))&&(e^=4,f^=4),a=new E(0,1),d&&ad(b,e,d,f,a,null,197),ad(b,e,c,f,a,null,197))}
function Lg(a,b,c){Og(a,b)&&!c?Jg(a,b):(Pg(a,b),!a.b||le(b,a.b)?a.Ia(b):td(a.l,t(a.Ia,a,b)))}
k.Ia=function(a){if(a){var b=Qg(this,a);if(b){Td("yt-uix-menu-before-show",a,b);this.b?le(a,this.b)||Jg(this,this.f):(this.f=a,this.b=b,A(a,X(this,"sibling-content"))||(lc(b),document.body.appendChild(b)),b.style.minWidth=Kg(this,a).offsetWidth-2+"px");var c=Ng(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);C(b,X(this,"content-hidden"));Mg(this,a,b);Kb(Kg(this,a),[X(this,"trigger-selected"),"yt-uix-button-toggled"]);M("yt-uix-menu-show",a);Rg(b);Sg(this,a);M("yt-uix-kbd-nav-move-in-to",
b);var d=t(this.yb,this,a),e=t(this.ib,this,a),c=la(a).toString();this.h[c]=[T(b,"click",e),T(document,"click",d)];A(a,X(this,"indicate-selected"))&&(d=t(this.jb,this,a),this.h[c].push(T(b,"click",d)));A(a,X(this,"hover"))&&(a=t(this.cb,this,a),this.h[c].push(T(document,"mousemove",a)))}}};
k.cb=function(a,b){var c=te(b);c&&(le(c,Kg(this,a))||Tg(this,c)||Ug(this,a))};
k.yb=function(a,b){var c;if(c=te(b)){if(Tg(this,c)){var d=H(c,X(this,"content"));var e=zc(c,"LI");e&&d&&oc(d,e)&&Td("yt-uix-menu-item-clicked",c);c=H(c,X(this,"close-on-select"));if(!c)return;d=Ig(c)}Jg(this,d||a)}};
function Pg(a,b){if(b){var c=H(b,X(a,"content"));c&&w(cc(X(a),c),function(a){!le(a,b)&&Og(this,a)&&Ug(this,a)},a)}}
function Jg(a,b){if(b){var c=[];c.push(b);var d=Qg(a,b);d&&(d=cc(X(a),d),d=Ha(d),c=c.concat(d),w(c,function(a){Og(this,a)&&Ug(this,a)},a))}}
function Ug(a,b){if(b){var c=Qg(a,b);Lb(Kg(a,b),[X(a,"trigger-selected"),"yt-uix-button-toggled"]);B(c,X(a,"content-hidden"));var d=Qg(a,b);d&&ec(d,{"aria-expanded":"false"});(d=Ng(a,b))&&d.parentNode&&lc(d);c&&c==a.b&&(a.f.appendChild(c),a.b=null,a.f=null,a.l&&a.l.D("ROOT_MENU_REMOVED"));M("yt-uix-menu-hide",b);c=la(b).toString();U(a.h[c]);delete a.h[c]}}
k.ib=function(a,b){var c=te(b);c&&Vg(this,a,c)};
k.jb=function(a,b){var c=te(b);if(c){var d=Kg(this,a);if(d&&(c=zc(c,"LI")))if(c=xc(c).trim(),d.hasChildNodes()){var e=jg.u();(d=G(X(e,"content"),d))&&pc(d,c)}else pc(d,c)}};
function Sg(a,b){var c=Qg(a,b);if(c){w(c.children,function(a){"LI"==a.tagName&&ec(a,{role:"menuitem"})});
ec(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+la(c),c.id=d);(c=Kg(a,b))&&ec(c,{"aria-controls":d})}}
function Vg(a,b,c){var d=Qg(a,b);d&&A(b,X(a,"checked"))&&(a=zc(c,"LI"))&&(a=G("yt-ui-menu-item-checked-hid",a))&&(w(cc("yt-ui-menu-item-checked",d),function(a){Mb(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Mb(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function Og(a,b){var c=Qg(a,b);return c?!A(c,X(a,"content-hidden")):!1}
function Rg(a){w(dc("UL",null,a),function(a){a.tabIndex=0;var b=Cg.u();Kb(a,[X(b),X(b,"list")])})}
function Qg(a,b){var c=Vd(b,"menu-content-id");return c&&(c=F(c))?(Kb(c,[X(a,"content"),X(a,"content-external")]),c):b==a.f?a.b:G(X(a,"content"),b)}
function Ng(a,b){var c=la(b).toString(),d=a.o[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[X(a,"mask")];w(Jb(b),function(a){e.push(a+"-mask")});
Kb(d,e);a.o[c]=d}return d||null}
function Kg(a,b){return G(X(a,"trigger"),b)}
function Tg(a,b){return le(b,a.b)||le(b,a.f)}
;function Wg(){wg.call(this,"clickcard");this.b={};this.f={}}
v(Wg,wg);fa(Wg);k=Wg.prototype;k.register=function(){Wg.A.register.call(this);Y(this,"click",this.ia,"target");Y(this,"click",this.ha,"close")};
k.unregister=function(){Wg.A.unregister.call(this);Z(this,"click",this.ia,"target");Z(this,"click",this.ha,"close");for(var a in this.b)U(this.b[a]);this.b={};for(a in this.f)U(this.f[a]);this.f={}};
k.ia=function(a,b,c){c.preventDefault();b=zc(c.target,"button");if(!b||!b.disabled){if(b=this.g(a,"card-target"))a=document,a=q(b)?a.getElementById(b):b;b=this.w(a);this.g(b,"disabled")||(A(b,X(this,"active"))?(this.C(a),C(b,X(this,"active"))):(this.show(a),B(b,X(this,"active"))))}};
k.show=function(a){Wg.A.show.call(this,a);var b=this.w(a),c=la(a).toString();if(!Vd(b,"click-outside-persists")){if(this.b[c])return;var b=T(document,"click",t(this.ja,this,a)),d=T(window,"blur",t(this.ja,this,a));this.b[c]=[b,d]}a=T(window,"resize",t(this.vb,this,a,void 0));this.f[c]=a};
k.C=function(a){Wg.A.C.call(this,a);a=la(a).toString();var b=this.b[a];b&&(U(b),this.b[a]=null);if(b=this.f[a])U(b),delete this.f[a]};
k.ja=function(a,b){var c="yt-uix"+(this.m?"-"+this.m:"")+"-card",d=null;b.target&&(d=H(b.target,c)||H(Ig(b.target),c));(d=d||H(document.activeElement,c)||H(Ig(document.activeElement),c))||this.C(a)};
k.ha=function(a){(a=H(a,X(this,"card")))&&(a=a.cardTargetNode)&&this.C(a)};function Xg(){wg.call(this,"hovercard")}
v(Xg,wg);fa(Xg);k=Xg.prototype;k.register=function(){Y(this,"mouseenter",this.qa,"target");Y(this,"mouseleave",this.sa,"target");Y(this,"mouseenter",this.ra,"card");Y(this,"mouseleave",this.ta,"card")};
k.unregister=function(){Z(this,"mouseenter",this.qa,"target");Z(this,"mouseleave",this.sa,"target");Z(this,"mouseenter",this.ra,"card");Z(this,"mouseleave",this.ta,"card")};
k.qa=function(a){if(Yg!=a){Yg&&(this.C(Yg),Yg=null);var b=t(this.show,this,a),c=parseInt(this.g(a,"delay-show"),10),b=K(b,-1<c?c:200);N(a,"card-timer",b.toString());Yg=a;a.alt&&(N(a,"card-alt",a.alt),a.alt="");a.title&&(N(a,"card-title",a.title),a.title="")}};
k.sa=function(a){var b=parseInt(this.g(a,"card-timer"),10);window.clearTimeout(b);this.w(a).isCardHidable=!0;b=parseInt(this.g(a,"delay-hide"),10);b=-1<b?b:200;K(t(this.gb,this,a),b);if(b=this.g(a,"card-alt"))a.alt=b;if(b=this.g(a,"card-title"))a.title=b};
k.gb=function(a){this.w(a).isCardHidable&&(this.C(a),Yg=null)};
k.ra=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
k.ta=function(a){a&&this.C(a.cardTargetNode)};
var Yg=null;function Zg(a,b,c,d,e,f){this.b=a;this.v=null;this.h=G("yt-dialog-fg",this.b)||this.b;if(a=G("yt-dialog-title",this.h)){var g="yt-dialog-title-"+la(this.h);a.setAttribute("id",g);this.h.setAttribute("aria-labelledby",g)}this.h.setAttribute("tabindex","-1");this.T=G("yt-dialog-focus-trap",this.b);this.Ca=!1;this.l=new I;this.B=[];this.B.push(ue(this.b,t(this.nb,this),"yt-dialog-dismiss"));this.B.push(T(this.T,"focus",t(this.ab,this),!0));$g(this);this.xb=b;this.Ka=c;this.Ja=d;this.F=e;this.Na=f;this.o=
this.m=null}
var ah={LOADING:"loading",Bb:"content",Ib:"working"};function bh(a,b){a.O()||a.l.subscribe("post-all",b)}
function $g(a){a=G("yt-dialog-fg-content",a.b);var b=[];Ra(ah,function(a){b.push("yt-dialog-show-"+a)});
Lb(a,b);B(a,"yt-dialog-show-content")}
k=Zg.prototype;
k.show=function(){if(!this.O()){this.v=document.activeElement;if(!this.Ja){this.f||(this.f=F("yt-dialog-bg"),this.f||(this.f=document.createElement("div"),this.f.id="yt-dialog-bg",this.f.className="yt-dialog-bg",document.body.appendChild(this.f)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=gc(a).height,hc(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{var b=d.scrollHeight,e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=
c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}else c=0}this.f.style.height=c+"px";Xf(this.f)}this.na();c=ch(this);dh(c);this.m=T(document,"keydown",t(this.hb,this));c=this.b;d=Rd("player-added",this.na,this);N(c,"player-ready-pubsub-key",d);this.Ka&&(this.o=T(document,"click",t(this.tb,this)));Xf(this.b);this.h.setAttribute("tabindex","0");eh(this);this.F||B(document.body,"yt-dialog-active");kg(jg.u());xg(Wg.u());xg(Xg.u());M("yt-ui-dialog-show-complete",this)}};
function fh(){return Da(cc("yt-dialog"),function(a){return Wf(a)})}
k.na=function(){if(!this.Na){var a=this.b;D(document.body,"hide-players",!0);a&&D(a,"preserve-players",!0)}};
function ch(a){var b=dc("iframe",null,a.b);w(b,function(a){var b=Vd(a,"onload");b&&(b=p(b))&&T(a,"load",b);if(b=Vd(a,"src"))a.src=b},a);
return Ha(b)}
function dh(a){w(document.getElementsByTagName("iframe"),function(b){-1==Aa(a,b)&&B(b,"iframe-hid")})}
function gh(){w(cc("iframe-hid"),function(a){C(a,"iframe-hid")})}
k.nb=function(a){a=a.currentTarget;a.disabled||(a=Vd(a,"action")||"",this.dismiss(a))};
k.dismiss=function(a){if(!this.O()){this.l.D("pre-all");this.l.D("pre-"+a);Yf(this.b);xg(Wg.u());xg(Xg.u());this.h.setAttribute("tabindex","-1");fh()||(Yf(this.f),this.F||C(document.body,"yt-dialog-active"),ne(),gh());this.m&&(U(this.m),this.m=null);this.o&&(U(this.o),this.o=null);var b=this.b;if(b){var c=Vd(b,"player-ready-pubsub-key");c&&(Ud(c),Yd(b,"player-ready-pubsub-key"))}this.l.D("post-all");M("yt-ui-dialog-hide-complete",this);"cancel"==a&&M("yt-ui-dialog-cancelled",this);this.l&&this.l.D("post-"+
a);this.v&&this.v.focus()}};
k.setTitle=function(a){pc(G("yt-dialog-title",this.b),a)};
k.hb=function(a){K(t(function(){this.xb||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&A(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
k.tb=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
k.O=function(){return this.Ca};
k.dispose=function(){Wf(this.b)&&this.dismiss("dispose");U(this.B);this.B.length=0;K(t(function(){this.v=null},this),0);
this.T=this.h=null;this.l.dispose();this.l=null;this.Ca=!0};
k.ab=function(a){a.stopPropagation();eh(this)};
function eh(a){K(t(function(){this.h&&this.h.focus()},a),0)}
u("yt.ui.Dialog",Zg);function hh(){W.call(this,"overlay");this.l=this.f=this.h=this.b=null}
v(hh,W);fa(hh);k=hh.prototype;k.register=function(){Y(this,"click",this.Z,"target");Y(this,"click",this.Ea,"close");ih(this)};
k.unregister=function(){hh.A.unregister.call(this);Z(this,"click",this.Z,"target");Z(this,"click",this.Ea,"close");this.l&&(Ud(this.l),this.l=null);this.f&&(U(this.f),this.f=null)};
k.Z=function(a){if(!this.b||!Wf(this.b.b)){var b=this.w(a);a=jh(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.g(b,"disable-shortcuts")||!1,d=!!this.g(b,"disable-outside-click-dismiss")||!1;this.b=new Zg(a,c);this.h=b;var e=G("yt-dialog-fg",a);if(e){var f=this.g(b,"overlay-class")||"",g=this.g(b,"overlay-style")||"default",h=this.g(b,"overlay-shape")||"default",f=f?f.split(" "):[];f.push(X(this,g));f.push(X(this,h));Kb(e,f)}this.b.show();M("yt-uix-kbd-nav-move-to",e||a);ih(this);c||
d||(c=t(function(a){A(a.target,"yt-dialog-base")&&kh(this)},this),this.f=T(G("yt-dialog-base",a),"click",c));
this.J(b,"overlay-shown");M("yt-uix-overlay-shown",b)}}};
function ih(a){a.l||(a.l=Rd("yt-uix-overlay-hide",lh));a.b&&bh(a.b,function(){var a=hh.u();a.h=null;a.b.dispose();a.b=null})}
function kh(a){if(a.b){var b=a.h;a.b.dismiss("overlayhide");b&&a.J(b,"overlay-hidden");a.h=null;a.f&&(U(a.f),a.f=null);a.b=null}}
function jh(a,b){var c;if(a)if(c=G("yt-dialog",a)){var d=F("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=H(b,"yt-dialog"));return c}
function mh(){var a=hh.u();if(a.h)a=G("yt-dialog-fg-content",a.h.overlayContentNode);else a:{if(a=cc("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=H(a[b],"yt-dialog");if(Wf(c)){a=a[b];break a}}a=null}return a}
k.Ea=function(a){a&&a.disabled||M("yt-uix-overlay-hide")};
function lh(){kh(hh.u())}
k.show=function(a){this.Z(a)};var nh={},oh=[];function ph(a){a=H(a,"yt-uix-button-subscription-container");return G("yt-dialog",G("unsubscribe-confirmation-overlay-container",a))}
function qh(a,b){U(oh);oh.length=0;nh[b]||(nh[b]=ph(a));hh.u().show(nh[b]);var c=mh();return new dd(function(a){oh.push(ue(c,function(){a()},"overlay-confirmation-unsubscribe-button"))})}
;function rh(){var a=J("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!J("SESSION_INDEX")&&!J("LOGGED_IN"))}
;function sh(){W.call(this,"subscription-button")}
v(sh,W);fa(sh);sh.prototype.register=function(){Y(this,"click",this.aa);Ae(this,df,this.xa);Ae(this,ef,this.wa);Ae(this,ff,this.qb);Ae(this,jf,this.xa);Ae(this,kf,this.wa);Ae(this,lf,this.sb);Ae(this,nf,this.pb);Ae(this,of,this.ob)};
sh.prototype.unregister=function(){Z(this,"click",this.aa);sh.A.unregister.call(this)};
var th={ba:"hover-enabled",La:"yt-uix-button-subscribe",Ma:"yt-uix-button-subscribed",zb:"ypc-enabled",Oa:"yt-uix-button-subscription-container",Pa:"yt-subscription-button-disabled-mask-container"},uh={Ab:"channel-external-id",Qa:"subscriber-count-show-when-subscribed",Ra:"subscriber-count-tooltip",Sa:"subscriber-count-title",Cb:"href",Db:"insecure",ca:"is-subscribed",Eb:"parent-url",Fb:"clicktracking",Ta:"show-unsub-confirm-dialog",Gb:"show-unsub-confirm-time-frame",Ua:"style-type",da:"subscribed-timestamp",
ea:"subscription-id",Hb:"target",Va:"ypc-enabled"};k=sh.prototype;k.aa=function(a){var b=this.g(a,"href"),c=this.g(a,"insecure"),d=rh(),c=c&&!0;if(b)a=this.g(a,"target")||"_self",window.open(b,a);else if(!c)if(d){var b=this.g(a,"channel-external-id"),d=this.g(a,"clicktracking"),c=vh(this,a),e=this.g(a,"parent-url");if(this.g(a,"is-subscribed")){var f=this.g(a,"subscription-id"),g=new $e(b,f,c,a,d,e);wh(this,a)?qh(a,b).then(function(){S(hf,g)}):S(hf,g)}else S(cf,new Ye(b,c,d,e))}else xh(this,a)};
k.xa=function(a){this.I(a.b,this.ya,!0)};
k.wa=function(a){this.I(a.b,this.ya,!1)};
k.qb=function(a){this.I(a.b,this.za,!0,a.f)};
k.sb=function(a){this.I(a.b,this.za,!1)};
k.pb=function(a){this.I(a.b,this.Za)};
k.ob=function(a){this.I(a.b,this.Ya)};
k.za=function(a,b,c){b?(N(a,uh.ca,"true"),c&&N(a,uh.ea,c),this.g(a,uh.Ta)&&(b=new Eb,N(a,uh.da,(b.getTime()/1E3).toString()))):(Yd(a,uh.ca),Yd(a,uh.da),Yd(a,uh.ea));yh(this,a)};
function vh(a,b){if(!a.g(b,"ypc-enabled"))return null;var c=a.g(b,"ypc-item-type"),d=a.g(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
k.ya=function(a,b){var c=H(a,th.Oa);D(c,th.Pa,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function yh(a,b){var c=a.g(b,uh.Ua),d=!!a.g(b,"is-subscribed"),c="-"+c,e=th.Ma+c;D(b,th.La+c,!d);D(b,e,d);a.g(b,uh.Ra)&&!a.g(b,uh.Qa)&&(c=X(Zf.u()),D(b,c,!d),b.title=d?"":a.g(b,uh.Sa));d?K(function(){B(b,th.ba)},1E3):C(b,th.ba)}
k.Za=function(a){var b=!!this.g(a,"ypc-item-type"),c=!!this.g(a,"ypc-item-id");!this.g(a,"ypc-enabled")&&b&&c&&(B(a,"ypc-enabled"),N(a,uh.Va,"true"))};
k.Ya=function(a){this.g(a,"ypc-enabled")&&(C(a,"ypc-enabled"),Yd(a,"ypc-enabled"))};
function zh(a,b){return Ba(cc(X(a)),function(a){return b==this.g(a,"channel-external-id")},a)}
k.Wa=function(a,b,c){var d=Ka(arguments,2);w(a,function(a){b.apply(this,Ga(a,d))},this)};
k.I=function(a,b,c){var d=zh(this,a);this.Wa.apply(this,Ga([d],Ka(arguments,1)))};
function xh(a,b){var c=t(function(a){a.discoverable_subscriptions&&Kd("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.aa(b)},a);
gg(c)}
function wh(a,b){if(!a.g(b,"show-unsub-confirm-dialog"))return!1;var c=a.g(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=parseInt(a.g(b,"subscribed-timestamp"),10),(new Eb).getTime()<1E3*(c+600))?!0:!1}
;Df=!0;Ef.push(ee(cf,Ff),ee(hf,Hf));Df||Ef.push(ee(gf,Ff),ee(mf,Hf),ee(af,Jf),ee(bf,Lf),ee(pf,Nf),ee(zf,Pf),ee(Bf,Rf),ee(yf,Qf));var Ah=sh.u(),Bh=X(Ah);Bh in Ce||(Ah.register(),ze(Ah,"yt-uix-init-"+Bh,Ah.init),ze(Ah,"yt-uix-dispose-"+Bh,Ah.dispose),Ce[Bh]=Ah);u("yt.setConfig",Kd);u("yt.config.set",Kd);}).call(this);
