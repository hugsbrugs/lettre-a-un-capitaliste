(function(g){var window=this;var cva=function(a,b){var c=[];g.Cl(b,function(a){try{var b=g.jD.prototype.o.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.t(b)?g.iD(b)&&c.push(a):c.push(a)},a);
return c},dva=function(a,b){var c=cva(a,b);
(0,g.H)(c,function(a){g.jD.prototype.remove.call(this,a)},a)},j9=function(a,b){g.Q0.call(this,g.T("YTP_MDX_TITLE"),0,a,b);
this.Y=a;this.F={};this.U(a,"onMdxReceiversChange",this.H);this.U(a,"presentingplayerstatechange",this.H);this.H()},eva=function(a){return a.H?a.F+((0,g.G)()-a.A)/1E3:a.F},fva=function(){var a=g.EG;
dva(a,a.g.Od(!0))},k9=function(a){g.gH.call(this,"ScreenServiceProxy");
this.Wc=a;this.o=[];this.o.push(this.Wc.$_s("screenChange",(0,g.B)(this.FQ,this)));this.o.push(this.Wc.$_s("onlineScreenChange",(0,g.B)(this.VM,this)))},l9=function(a){g.UG("cloudview",a)},gva=function(a){l9("setApiReady_ "+a);
g.u("yt.mdx.remote.cloudview.apiReady_",a,void 0)},m9=function(){return g.w("yt.mdx.remote.cloudview.instance_")},hva=function(a){g.XF[a]&&(a=g.XF[a],(0,g.H)(a,function(a){g.VF[a]&&delete g.VF[a]}),a.length=0)},n9=function(){return g.w("yt.mdx.remote.connection_")},o9=function(a){g.u("yt.mdx.remote.connectData_",a,void 0)},iva=function(a){g.u("yt.mdx.remote.currentScreenId_",a,void 0)},p9=function(){return g.w("yt.mdx.remote.currentScreenId_")},r9=function(){if(!q9){var a=g.w("yt.mdx.remote.screenService_");
q9=a?new k9(a):null}return q9},s9=function(a){g.u("yt.mdx.remote.cloudview.initializing_",a,void 0)},t9=function(){return!!g.w("yt.mdx.remote.cloudview.apiReady_")},u9=function(a){l9("setCastInstalled_ "+a);
g.GG("yt-remote-cast-installed",a)},v9=function(a){g.UG("cloudview",a)},jva=function(a,b){m9().init(a,b)},w9=function(){return!!g.HG("yt-remote-cast-installed")},kva=function(){l9("dispose");
var a=m9();a&&a.dispose();g.u("yt.mdx.remote.cloudview.instance_",null,void 0);gva(!1);g.ZF(x9);x9.length=0},lva=function(){var a=window.document.createElement("a");
g.Nd(a,"https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Ra(a)},mva=function(a,b){var c=window.document.createElement("script");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
c.src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js";var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},nva=function(a){var b=g.UF();
if(b)if(b.clear(a),a)hva(a);else for(var c in g.XF)hva(c)},y9=function(){return g.w("yt.mdx.remote.channelParams_")||{}},A9=function(a){var b=n9();
o9(null);a||iva("");g.u("yt.mdx.remote.connection_",a,void 0);z9&&((0,g.H)(z9,function(b){b(a)}),z9.length=0);
b&&!a?g.bG("yt-remote-connection-change",!1):!b&&a&&g.bG("yt-remote-connection-change",!0)},ova=function(){return g.w("yt.mdx.remote.connectData_")},B9=function(){var a=p9();
if(!a)return null;var b=r9().Td();return g.fH(b,a)},pva=function(a,b){u9(!0);
s9(!1);jva(a,function(a){a?(gva(!0),g.$F("yt-remote-cast2-api-ready")):(v9("Failed to initialize cast API."),u9(!1),g.IG("yt-remote-cast-available"),g.IG("yt-remote-cast-receiver"),kva());b(a)})},qva=function(){return w9()?m9()?m9().getCastSession():(v9("getCastSelector: Cast is not initialized."),null):(v9("getCastSelector: Cast API is not installed!"),null)},rva=function(){var a=lva(),b=window.document.getElementById(a),c=b&&g.jF(b,"loaded");
c||b&&!c||(b=mva(a,function(){g.jF(b,"loaded")||(g.kF(b,"loaded","true"),g.$F(a),g.rE(g.ya(nva,a),0))}))},sva=function(a){return(0,g.I)(a,function(a){return{key:a.id,
name:a.name}})},tva=function(){if(g.roa){var a=2,b=g.Dh(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;g.Ih("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",g.Fh,c)}},D9=function(a,b){p9();
B9()&&B9();iva(a.id);var c=new g.kI(C9,a,y9());c.connect(b,ova());c.subscribe("beforeDisconnect",function(a){g.bG("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){n9()&&(n9(),A9(null))});
A9(c)},E9=function(){var a=g.lH();
if(!a)return null;var b=r9().Td();return g.fH(b,a)},F9=function(a){g.UG("remote",a)},G9=function(){var a=n9();
return!!a&&3!=a.getProxyState()},H9=function(){t9()?m9().stopSession():v9("stopSession called before API ready.");
var a=n9();a&&(a.disconnect(1),A9(null))},uva=function(){var a=r9().Wc.$_gos();
var b=B9();b&&n9()&&(g.eH(a,b)||a.push(b));return sva(a)},J9=function(a,b){g.KF.call(this);
this.g=0;this.B=a;this.D=[];this.C=new g.xB;this.A=this.o=null;this.H=(0,g.B)(this.bL,this);this.F=(0,g.B)(this.Bk,this);this.G=(0,g.B)(this.aL,this);this.J=(0,g.B)(this.oL,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.xt,this),vva(this))):c=3;0!=c&&(b?this.xt(c):g.rE((0,g.B)(function(){this.xt(c)},this),0));
var d=qva();d&&I9(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},K9=function(a){return new g.$H(a.B.getPlayerContextData())},wva=function(a,b,c,d,e){var f=K9(a),k=e||f.listId;
d=d||0;var l={videoId:b,currentIndex:d};g.dI(f,b,d);g.t(c)&&(g.bI(f,c),l.currentTime=c);g.t(k)&&(l.listId=k);L9(a,"setPlaylist",l);e||M9(a,f)},vva=function(a){(0,g.H)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.D.push(this.B.subscribe(a,g.ya(this.pN,a),this))},a)},xva=function(a){(0,g.H)(a.D,function(a){this.B.unsubscribeByKey(a)},a);
a.D.length=0},N9=function(a,b){50>a.C.Hc()&&g.zB(a.C,b)},O9=function(a,b,c){var d=K9(a);
g.bI(d,c);-1E3!=d.g&&(d.g=b);M9(a,d)},L9=function(a,b,c){a.B.sendMessage(b,c)},M9=function(a,b){xva(a);
a.B.setPlayerContextData(g.eI(b));vva(a)},I9=function(a,b){a.A&&(a.A.removeUpdateListener(a.H),a.A.removeMediaListener(a.F),a.Bk(null));
a.A=b;a.A&&(P9("Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.H),a.A.addMediaListener(a.F),a.A.media.length&&a.Bk(a.A.media[0]))},yva=function(a){var b=a.o.media,c=a.o.customData;
if(b&&c){var d=K9(a);b.contentId!=d.videoId&&P9("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;g.bI(d,a.o.getEstimatedTime());M9(a,d)}else P9("No cast media video. Ignoring state update.")},P9=function(a){g.UG("CP",a)},Q9=function(a,b,c){return(0,g.B)(function(a){this.kc("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.kc("Retrying "+b+" using MDx browser channel."),L9(this,b,c))},a)},zva=function(a){var b=!1;
m9()||(a=new g.UH(a),a.subscribe("yt-remote-cast2-availability-change",function(a){g.GG("yt-remote-cast-available",a);g.bG("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){l9("onReceiverSelected: "+a.friendlyName);
g.GG("yt-remote-cast-receiver",a);g.bG("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){l9("onReceiverResumed: "+a.friendlyName);
g.GG("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){l9("onSessionChange: "+g.bH(a));
a||g.IG("yt-remote-cast-receiver");g.bG("yt-remote-cast2-session-change",a)}),g.u("yt.mdx.remote.cloudview.instance_",a,void 0),b=!0);
l9("cloudview.createSingleton_: "+b);return b},Ava=function(){var a=0<=g.Fb.search(/\ (CrMo|Chrome|CriOS)\//);
return g.OE||a},R9=function(a,b){t9()?m9().setConnectedScreenStatus(a,b):v9("setConnectedScreenStatus called before ready.")},Bva=function(){l9("clearCurrentReceiver");
g.IG("yt-remote-cast-receiver")},Cva=function(){if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
if(a){tva();a({command:"cast.sender.init"});return}}if(window.chrome)if(tva(),a=window.navigator.userAgent,0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")&&window.navigator.presentation){var a="",b=g.Bh();55<=b?a="55":50<=b&&(a="50");g.Ih("//www.gstatic.com/eureka/clank"+a+g.Gh,g.Fh)}else g.Jh(0);else g.Fh()},Dva=function(a){a?(g.GG("yt-remote-session-app",a.app),g.GG("yt-remote-session-name",a.name)):(g.IG("yt-remote-session-app"),g.IG("yt-remote-session-name"));
g.u("yt.mdx.remote.channelParams_",a,void 0)},Eva=function(){var a=y9();
if(g.Sb(a)){var a=g.kH(),b=g.HG("yt-remote-session-name")||"",c=g.HG("yt-remote-session-app")||"",a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};g.u("yt.mdx.remote.channelParams_",a,void 0)}},Fva=function(){var a=E9();
a?(F9("Resume connection to: "+g.bH(a)),D9(a,0)):(g.tH(),Bva(),F9("Skipping connecting because no session screen found."))},Gva=function(a){F9("remote.onCastSessionChange_: "+g.bH(a));
if(a){var b=B9();b&&b.id==a.id?R9(b.id,"YouTube TV"):(b&&H9(),D9(a,1))}else n9()&&H9()},Hva=function(){var a=uva(),b=B9();
b||(b=E9());return g.Za(a,function(a){return b&&g.ZG(b,a.key)?!0:!1})},Iva=function(){var a=g.HG("yt-remote-cast-receiver");
return a?a.friendlyName:null},Jva=function(a,b,c,d){Ava()?zva(b)&&(s9(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?pva(a,c):(window.__onGCastApiAvailable=function(b,d){b?pva(a,c):(v9("Failed to load cast API: "+d),u9(!1),s9(!1),g.IG("yt-remote-cast-available"),g.IG("yt-remote-cast-receiver"),kva(),c(!1))},d?window.spf?window.spf.script.load("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):rva():Cva())):l9("Cannot initialize because not running Chrome")},
Kva=function(a){this.port=this.A="";
this.g="/api/lounge";this.o=!0;a=a||window.document.location.href;var b=g.vg(a)||"";b&&(this.port=":"+b);this.A=g.ug(a)||"";a=g.Fb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Qa(a,"10.0")&&(this.o=!1))},S9=function(){var a=Hva();
!a&&w9()&&Iva()&&(a={key:"cast-selector-receiver",name:Iva()});return a},Lva=function(){var a=uva();
w9()&&g.HG("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},Mva=function(a){var b={device:"Desktop",
app:"youtube-desktop"};g.EG&&fva();g.nH();C9||(C9=new Kva,g.vH()&&(C9.g="/api/loungedev"));z9||(z9=g.w("yt.mdx.remote.deferredProxies_")||[],g.u("yt.mdx.remote.deferredProxies_",z9,void 0));Eva();var c=r9();if(!c){var d=new g.GH(C9);g.u("yt.mdx.remote.screenService_",d,void 0);c=r9();Jva(a,d,function(a){a?p9()&&R9(p9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){g.bG("yt-remote-receiver-availability-change")})},!(!b||!b.loadCastApiSetupScript))}b&&!g.w("yt.mdx.remote.initialized_")&&
(g.u("yt.mdx.remote.initialized_",!0,void 0),F9("Initializing: "+g.Lc(b)),T9.push(g.YF("yt-remote-cast2-availability-change",function(){g.bG("yt-remote-receiver-availability-change")})),T9.push(g.YF("yt-remote-cast2-receiver-selected",function(){o9(null);
g.bG("yt-remote-auto-connect","cast-selector-receiver")})),T9.push(g.YF("yt-remote-cast2-receiver-resumed",function(){g.bG("yt-remote-receiver-resumed","cast-selector-receiver")})),T9.push(g.YF("yt-remote-cast2-session-change",Gva)),T9.push(g.YF("yt-remote-connection-change",function(a){a?R9(p9(),"YouTube TV"):E9()||(R9(null,null),Bva())})),a=y9(),b.isAuto&&(a.id+="#dial"),g.QF("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,F9(" -- with channel params: "+g.Lc(a)),
Dva(a),c.start(),p9()||Fva())},U9=function(){w9()?m9()?t9()?(l9("Requesting cast selector."),m9().requestSession()):(l9("Wait for cast API to be ready to request the session."),x9.push(g.YF("yt-remote-cast2-api-ready",U9))):v9("requestCastSelector: Cast is not initialized."):v9("requestCastSelector: Cast API is not installed!")},V9=function(a,b,c){g.M.call(this);
this.J=a;this.Y=b;this.o=new g.yL(this);g.N(this,this.o);this.o.U(b,"onCaptionsTrackListChanged",this.oM);this.o.U(b,"captionschanged",this.ZK);this.o.U(b,"captionssettingschanged",this.UA);this.o.U(b,"videoplayerreset",this.Dn);this.o.U(b,"mdxautoplaycancel",this.yF);this.M=this.o.U(b,"onVolumeChange",this.uz);this.D=!1;this.g=c;c.subscribe("proxyStateChange",this.Fz,this);c.subscribe("remotePlayerChange",this.Dk,this);c.subscribe("remoteQueueChange",this.Dn,this);c.subscribe("autoplayUpNext",this.fz,
this);c.subscribe("previousNextChange",this.Cz,this);c.subscribe("nowAutoplaying",this.vz,this);c.subscribe("autoplayDismissed",this.ez,this);this.suggestion=null;this.F=new g.JQ(64);this.A=new g.mt(this.PA,500,this);g.N(this,this.A);this.B=new g.mt(this.QA,1E3,this);g.N(this,this.B);this.C={};this.H=new g.mt(this.eB,1E3,this);g.N(this,this.H);this.G=new g.bk(this.AS,1E3,this);g.N(this,this.G);this.L=g.y;this.UA();this.Dn();this.Dk()},W9=function(a,b){var c=a.J,d=a.Y.ha().lengthSeconds;
c.H=b||0;c.g.V("progresssync",b,d)},Nva=function(a){W9(a,0);
a.A.stop();X9(a,new g.JQ(64))},$9=function(a,b){if(Y9(a)&&!a.D){var c=null;
b&&(c={style:a.Y.dl()},g.Zb(c,b));a.g.JA(Z9(a),c);a.C=K9(a.g).o}},a$=function(a,b){var c=a.Y.Uf();
c?wva(a.g,Z9(a),b,c.Rd(),c.listId.toString()):wva(a.g,Z9(a),b);X9(a,new g.JQ(1))},Ova=function(a,b){if(b){var c=a.Y.Zc("captions","tracklist",{xx:1});
c&&c.length?(a.Y.Ie("captions","track",b),a.D=!1):(a.Y.Yk("captions"),a.D=!0)}else a.Y.Ie("captions","track",{})},Y9=function(a){return K9(a.g).videoId==Z9(a)},Z9=function(a){return a.Y.ha().videoId},X9=function(a,b){a.B.stop();
var c=a.F;if(!g.PQ(c,b)){var d=g.V(b,2);if(d!=g.V(a.F,2)){var e=a.Y;(e=g.XU(e.app,e.playerType||1))&&g.UT(e,d)}a.F=b;Pva(a.J,c,b)}},b$=function(a){g.W.call(this,{K:"div",
X:"ytp-remote",O:[{K:"div",X:"ytp-remote-display-status",O:[{K:"div",X:"ytp-remote-display-status-icon",O:[g.OD()]},{K:"div",X:"ytp-remote-display-status-text",O:["{{statustext}}"]}]}]});this.g=new g.KV(this,250);g.N(this,this.g);this.A=a;this.U(a,"presentingplayerstatechange",this.B);Qva(this,g.YU(a))},Qva=function(a,b){if(3==a.A.Za()){var c={RECEIVER_NAME:a.A.Zc("remote","currentReceiver").name},c=g.V(b,128)?g.T("YTP_MDX_STATUS_ERROR_2",c):b.vb()||g.V(b,4)?g.T("YTP_MDX_STATUS_PLAYING_2",c):g.T("YTP_MDX_STATUS_CONNECTED_2",
c);
a.Ca("statustext",c);a.g.show()}else g.MV(a.g)},c$=function(a){g.zV.call(this,a);
this.A={key:g.dH(),name:g.T("YTP_MDX_MY_COMPUTER")};this.C=null;this.D=[];this.J=this.o=null;this.G=[this.A];this.B=this.A;this.F=new g.JQ(64);this.H=0;var b=g.RU(a).D;b&&(b=b.A&&b.A.g)&&(b=new j9(a,b),g.N(this,b));b=new b$(a);g.N(this,b);g.oV(a,b.element,5)},Pva=function(a,b,c){a.F=c;
a.g.V("presentingplayerstatechange",new g.KT(c,b))},d$=function(a,b){if(b.key!=a.B.key)if(b.key==a.A.key)H9();
else{a.B=b;var c=a.g.getPlaylistId();var d=a.g.ha().videoId;if(c||d){var e=a.g.Uf();if(e){var f=[];for(var k=0;k<e.getLength();k++)f[k]=e.gc(k).videoId}else f=[a.g.ha().videoId];c={videoIds:f,listId:c,videoId:d,index:Math.max(a.g.AB(),0),currentTime:a.g.getCurrentTime()}}else c=null;F9("Connecting to: "+g.Lc(b));"cast-selector-receiver"==b.key?(o9(c||null),c=c||null,t9()?m9().setLaunchParams(c):v9("setLaunchParams called before ready.")):!c&&G9()&&p9()==b.key?g.bG("yt-remote-connection-change",!0):
(H9(),o9(c||null),c=r9().Td(),(c=g.fH(c,b.key))&&D9(c,1))}};
g.p(j9,g.Q0);j9.prototype.H=function(){var a=this.Y.Zc("remote","receivers");a&&1<a.length&&!this.Y.Zc("remote","quickCast")?(this.F=g.Ab(a,this.B,this),g.S0(this,(0,g.I)(a,this.B)),a=this.Y.Zc("remote","currentReceiver"),g.R0(this,this.B(a)),this.enable(!0)):this.enable(!1)};
j9.prototype.B=function(a){return a.key};
j9.prototype.Oe=function(a){return"cast-selector-receiver"==a?g.T("YTP_MDX_CAST_SELECTOR"):this.F[a].name};
j9.prototype.hd=function(a){g.Q0.prototype.hd.call(this,a);this.Y.Ie("remote","currentReceiver",this.F[a]);this.A.Yb()};
g.C(k9,g.gH);g.h=k9.prototype;g.h.Td=function(a){return this.Wc.$_gs(a)};
g.h.contains=function(a){return!!this.Wc.$_c(a)};
g.h.get=function(a){return this.Wc.$_g(a)};
g.h.start=function(){this.Wc.$_st()};
g.h.vo=function(a,b,c){this.Wc.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Wc.$_r(a,b,c)};
g.h.jo=function(a,b,c,d){this.Wc.$_un(a,b,c,d)};
g.h.P=function(){for(var a=0,b=this.o.length;a<b;++a)this.Wc.$_ubk(this.o[a]);this.o.length=0;this.Wc=null;k9.R.P.call(this)};
g.h.FQ=function(){this.V("screenChange")};
g.h.VM=function(){this.V("onlineScreenChange")};
var q9=null,x9=[],z9=null,C9=null;g.C(J9,g.KF);g.h=J9.prototype;g.h.play=function(){1==this.g?(this.o?this.o.play(null,g.y,Q9(this,"play")):L9(this,"play"),O9(this,1,g.cI(K9(this))),this.V("remotePlayerChange")):N9(this,this.play)};
g.h.pause=function(){1==this.g?(this.o?this.o.pause(null,g.y,Q9(this,"pause")):L9(this,"pause"),O9(this,2,g.cI(K9(this))),this.V("remotePlayerChange")):N9(this,this.pause)};
g.h.oB=function(a){if(1==this.g){if(this.o){var b=K9(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.vb()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.o.seek(c,g.y,Q9(this,"seekTo",{newTime:a}))}else L9(this,"seekTo",{newTime:a});O9(this,3,a);this.V("remotePlayerChange")}else N9(this,g.ya(this.oB,a))};
g.h.stop=function(){if(1==this.g){this.o?this.o.stop(null,g.y,Q9(this,"stopVideo")):L9(this,"stopVideo");var a=K9(this);a.index=-1;a.videoId="";g.aI(a);M9(this,a);this.V("remotePlayerChange")}else N9(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=K9(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.B)(function(){P9("set receiver volume: "+d)},this),(0,g.B)(function(){this.kc("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.B)(function(){P9("set receiver muted: "+b)},this),(0,g.B)(function(){this.kc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);L9(this,"setVolume",e)}c.muted=b;c.volume=a;M9(this,c)}else N9(this,g.ya(this.setVolume,a,b))};
g.h.JA=function(a,b){if(1==this.g){var c=K9(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.Lc(b.style),g.Zb(d,c.o));L9(this,"setSubtitlesTrack",d);M9(this,c)}else N9(this,g.ya(this.JA,a,b))};
g.h.wt=function(a,b){if(1==this.g){L9(this,"setAudioTrack",{videoId:a,audioTrackId:b.Nc.id});var c=K9(this);c.audioTrackId=b.Nc.id;M9(this,c)}else N9(this,g.ya(this.wt,a,b))};
g.h.nB=function(a,b){if(1==this.g){if(a&&b){var c=K9(this);g.dI(c,a,b);M9(this,c)}L9(this,"previous")}else N9(this,g.ya(this.nB,a,b))};
g.h.mB=function(a,b){if(1==this.g){if(a&&b){var c=K9(this);g.dI(c,a,b);M9(this,c)}L9(this,"next")}else N9(this,g.ya(this.mB,a,b))};
g.h.Sv=function(){1==this.g?L9(this,"dismissAutoplay"):N9(this,this.Sv)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.V("proxyStateChange",a,this.g)}J9.R.dispose.call(this)};
g.h.P=function(){xva(this);this.B=null;this.C.clear();I9(this,null);J9.R.P.call(this)};
g.h.xt=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.V("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)g.AB(this.C).apply(this);else 3==a&&this.dispose()}};
g.h.pN=function(a,b){this.V(a,b)};
g.h.bL=function(a){if(!a)this.Bk(null),I9(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=K9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)P9("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,M9(this,b)}};
g.h.Bk=function(a){P9("Cast media: "+!!a);this.o&&this.o.removeUpdateListener(this.G);if(this.o=a)this.o.addUpdateListener(this.G),yva(this),this.V("remotePlayerChange")};
g.h.aL=function(a){a?(yva(this),this.V("remotePlayerChange")):this.Bk(null)};
g.h.oL=function(){var a=qva();a&&I9(this,a)};
g.h.kc=function(a){g.UG("CP",a)};
var T9=[];g.h=Kva.prototype;g.h.Ih=function(a,b,c){var d=this.g;if(g.t(c)?c:this.o)d="https://"+this.A+this.port+this.g;return g.Eg(d+a,b||{})};
g.h.vt=function(a,b,c,d){c={format:"JSON",method:"POST",context:this,timeout:5E3,withCredentials:!1,Mb:g.ya(this.AQ,c,!0),onError:g.ya(this.zQ,d),Xc:g.ya(this.BQ,d)};b&&(c.Rb=b,c.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.EE(a,c)};
g.h.AQ=function(a,b,c,d){b?a(d):a({text:c.responseText})};
g.h.zQ=function(a,b){a(Error("Request error: "+b.status))};
g.h.BQ=function(a){a(Error("request timed out"))};
g.C(V9,g.M);g.h=V9.prototype;g.h.P=function(){V9.R.P.call(this);this.A.stop();this.B.stop();this.L();this.g.unsubscribe("proxyStateChange",this.Fz,this);this.g.unsubscribe("remotePlayerChange",this.Dk,this);this.g.unsubscribe("remoteQueueChange",this.Dn,this);this.g.unsubscribe("autoplayUpNext",this.fz,this);this.g.unsubscribe("previousNextChange",this.Cz,this);this.g.unsubscribe("nowAutoplaying",this.vz,this);this.g.unsubscribe("autoplayDismissed",this.ez,this);this.g=this.J=null};
g.h.ZB=function(a,b){2==this.g.g||(Y9(this)?this.KG.apply(this,arguments):this.GG.apply(this,arguments))};
g.h.ZK=function(a){this.ZB("control_subtitles_set_track",g.Sb(a)?null:a)};
g.h.UA=function(){var a=this.Y.Zc("captions","track");g.Sb(a)||$9(this,a)};
g.h.GG=function(a,b){var c=Array.prototype.slice.call(arguments,1);switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":a$(this,this.Y.getCurrentTime());break;case "control_seek":a$(this,c[0]);break;case "control_subtitles_set_track":$9(this,c[0]);break;case "control_set_audio_track":c=c[0],Y9(this)&&this.g.wt(Z9(this),c)}};
g.h.KG=function(a,b){if(1081!=K9(this.g).g||"control_seek"!=a){var c=Array.prototype.slice.call(arguments,1);switch(a){case "control_toggle_play_pause":K9(this.g).vb()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.G.Pi(c[0],c[1]);break;case "control_subtitles_set_track":$9(this,c[0]);break;case "control_set_audio_track":c=c[0],Y9(this)&&this.g.wt(Z9(this),c)}}};
g.h.uz=function(a){if(Y9(this)){this.g.unsubscribe("remotePlayerChange",this.Dk,this);var b=Math.round(a.volume);a=!!a.muted;var c=K9(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.H.start();this.g.subscribe("remotePlayerChange",this.Dk,this)}};
g.h.oM=function(){g.Sb(this.C)||Ova(this,this.C);this.D=!1};
g.h.Fz=function(a,b){this.B.stop();2==b&&this.QA()};
g.h.Dk=function(){if(Y9(this)){this.A.stop();var a=K9(this.g);switch(a.g){case 1081:X9(this,new g.JQ(8));break;case 1:this.PA();X9(this,new g.JQ(8));break;case 1083:case 3:X9(this,new g.JQ(9));break;case 0:X9(this,new g.JQ(2));this.G.stop();W9(this,this.Y.ha().lengthSeconds);break;case 1082:X9(this,new g.JQ(4));break;case 2:X9(this,new g.JQ(4));W9(this,g.cI(a));break;case -1:X9(this,new g.JQ(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.T("YTP_MDX_PLAYER_ERROR")},X9(this,new g.JQ(128,
a))}var a=K9(this.g).o,b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.C=a,Ova(this,a));a=K9(this.g);-1==a.volume||Math.round(this.Y.getVolume())==a.volume&&this.Y.Ge()==a.muted||this.H.isActive()||this.eB()}else Nva(this)};
g.h.Cz=function(){this.Y.V("mdxpreviousnextchange")};
g.h.Dn=function(){Y9(this)||Nva(this)};
g.h.yF=function(){this.g.Sv()};
g.h.fz=function(a){a&&(a=g.EE("/watch_queue_ajax",{method:"GET",Rc:{action_get_watch_queue_item:1,video_id:a},Mb:(0,g.B)(this.qO,this)}))&&(this.L=(0,g.B)(a.abort,a))};
g.h.qO=function(a,b){var c=new g.aQ({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.Y.V("mdxautoplayupnext",c)};
g.h.vz=function(a){(0,window.isNaN)(a)||this.Y.V("mdxnowautoplaying",a)};
g.h.ez=function(){this.Y.V("mdxautoplaycanceled")};
g.h.AS=function(a,b){-1==K9(this.g).g?a$(this,a):b&&this.g.oB(a)};
g.h.eB=function(){if(Y9(this)){var a=K9(this.g);this.o.Ba(this.M);a.muted?this.Y.mute():this.Y.xg();this.Y.setVolume(a.volume);this.M=this.o.U(this.Y,"onVolumeChange",this.uz)}};
g.h.PA=function(){this.A.stop();if(!this.g.ma()){var a=K9(this.g);a.vb()&&X9(this,new g.JQ(8));W9(this,g.cI(a));this.A.start()}};
g.h.QA=function(){this.B.stop();this.A.stop();var a=this.g.B.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.B.start()};g.p(b$,g.W);b$.prototype.B=function(a){Qva(this,a.state)};g.C(c$,g.zV);g.h=c$.prototype;g.h.create=function(){Mva("embedded"==g.X(this.g).g);this.D.push(g.YF("yt-remote-before-disconnect",this.WK,this));this.D.push(g.YF("yt-remote-connection-change",this.zN,this));this.D.push(g.YF("yt-remote-receiver-availability-change",this.Dz,this));this.D.push(g.YF("yt-remote-auto-connect",this.xN,this));this.D.push(g.YF("yt-remote-receiver-resumed",this.wN,this));this.Dz()};
g.h.load=function(){this.g.Gp();c$.R.load.call(this);this.C=new V9(this,this.g,this.o);var a=(a=ova())?a.currentTime:0;var b=G9()?new J9(n9(),void 0):null;0==a&&b&&(a=g.cI(K9(b)));0!=a&&(this.H=a||0,this.g.V("progresssync",a,void 0));Pva(this,this.F,this.F);g.g2(this.g.app,6)};
g.h.unload=function(){this.g.V("mdxautoplaycanceled");this.B=this.A;g.Se(this.C,this.o);this.o=this.C=null;c$.R.unload.call(this);g.g2(this.g.app,5)};
g.h.P=function(){g.ZF(this.D);c$.R.P.call(this)};
g.h.jl=function(a,b){this.loaded&&this.C.ZB.apply(this.C,arguments)};
g.h.lG=function(){return this.loaded?this.C.suggestion:null};
g.h.Af=function(){return this.o?K9(this.o).Af:!1};
g.h.hasNext=function(){return this.o?K9(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.H};
g.h.fS=function(){var a=K9(this.o),b=this.g.ha(),c=this.g.Ed(),d=b.clipEnd,b=b.clipStart,e=this.getCurrentTime(),f=a.getDuration();var k=a.H?a.B+((0,g.G)()-a.A)/1E3:a.B;var l=1>=eva(a)-this.getCurrentTime(),m=a.J,n=eva(a),a=0<a.C?a.C+((0,g.G)()-a.A)/1E3:a.C;return{allowSeeking:c,clipEnd:d,clipStart:b,current:e,displayedStart:-1,duration:f,ingestionTime:k,isPeggedToLive:l,loaded:m,seekableEnd:n,seekableStart:a}};
g.h.gS=function(){this.o&&this.o.mB()};
g.h.hS=function(){this.o&&this.o.nB()};
g.h.WK=function(a){1==a&&(this.J=this.o?K9(this.o):null)};
g.h.zN=function(){var a=G9()?new J9(n9(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.J=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.Re(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.J)&&a.videoId==this.g.ha().videoId&&this.g.xB(a.videoId,g.cI(a)));this.g.V("videodatachange","newdata",this.g.ha(),3)};
g.h.Dz=function(){this.G=[this.A].concat(Lva());var a=S9()||this.A;d$(this,a);this.g.ya("onMdxReceiversChange")};
g.h.xN=function(){var a=S9();d$(this,a)};
g.h.wN=function(){this.B=S9()};
g.h.eS=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.G;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?U9():d$(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.G.length&&"cast-selector-receiver"==this.G[1].key?(b&&U9(),!0):!1}};
g.h.iS=function(){L9(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Jd=function(){return!1};window._exportCheck==g.Aa&&g.u("ytmod.player.remote",c$,void 0);})(_yt_player);
