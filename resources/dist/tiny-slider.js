var Ei=window,Oe=Ei.requestAnimationFrame||Ei.webkitRequestAnimationFrame||Ei.mozRequestAnimationFrame||Ei.msRequestAnimationFrame||function(t){return setTimeout(t,16)};var bn=window,Mi=bn.cancelAnimationFrame||bn.mozCancelAnimationFrame||function(t){clearTimeout(t)};function Ai(){for(var t,f,a,u=arguments[0]||{},o=1,g=arguments.length;o<g;o++)if((t=arguments[o])!==null)for(f in t)a=t[f],u!==a&&a!==void 0&&(u[f]=a);return u}function ve(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function pe(t,f,a,u){if(u)try{t.setItem(f,a)}catch{}return a}function wn(){var t=window.tnsId;return window.tnsId=t?t+1:1,"tns"+window.tnsId}function Ie(){var t=document,f=t.body;return f||(f=t.createElement("body"),f.fake=!0),f}var lt=document.documentElement;function Ue(t){var f="";return t.fake&&(f=lt.style.overflow,t.style.background="",t.style.overflow=lt.style.overflow="hidden",lt.appendChild(t)),f}function Ge(t,f){t.fake&&(t.remove(),lt.style.overflow=f,lt.offsetHeight)}function xn(){var t=document,f=Ie(),a=Ue(f),u=t.createElement("div"),o=!1;f.appendChild(u);try{for(var g="(10px * 10)",q=["calc"+g,"-moz-calc"+g,"-webkit-calc"+g],P,z=0;z<3;z++)if(P=q[z],u.style.width=P,u.offsetWidth===100){o=P.replace(g,"");break}}catch{}return f.fake?Ge(f,a):u.remove(),o}function Tn(){var t=document,f=Ie(),a=Ue(f),u=t.createElement("div"),o=t.createElement("div"),g="",q=70,P=3,z=!1;u.className="tns-t-subp2",o.className="tns-t-ct";for(var ye=0;ye<q;ye++)g+="<div></div>";return o.innerHTML=g,u.appendChild(o),f.appendChild(u),z=Math.abs(u.getBoundingClientRect().left-o.children[q-P].getBoundingClientRect().left)<2,f.fake?Ge(f,a):u.remove(),z}function En(){if(window.matchMedia||window.msMatchMedia)return!0;var t=document,f=Ie(),a=Ue(f),u=t.createElement("div"),o=t.createElement("style"),g="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",q;return o.type="text/css",u.className="tns-mq-test",f.appendChild(o),f.appendChild(u),o.styleSheet?o.styleSheet.cssText=g:o.appendChild(t.createTextNode(g)),q=window.getComputedStyle?window.getComputedStyle(u).position:u.currentStyle.position,f.fake?Ge(f,a):u.remove(),q==="absolute"}function Mn(t,f){var a=document.createElement("style");return t&&a.setAttribute("media",t),f&&a.setAttribute("nonce",f),document.querySelector("head").appendChild(a),a.sheet?a.sheet:a.styleSheet}function Ce(t,f,a,u){"insertRule"in t?t.insertRule(f+"{"+a+"}",u):t.addRule(f,a,u)}function An(t,f){"deleteRule"in t?t.deleteRule(f):t.removeRule(f)}function be(t){var f="insertRule"in t?t.cssRules:t.rules;return f.length}function Sn(t,f){return Math.atan2(t,f)*(180/Math.PI)}function Ln(t,f){var a=!1,u=Math.abs(90-Math.abs(t));return u>=90-f?a="horizontal":u<=f&&(a="vertical"),a}function Re(t,f,a){for(var u=0,o=t.length;u<o;u++)f.call(a,t[u],u)}var bt="classList"in document.createElement("_");var ke=bt?function(t,f){return t.classList.contains(f)}:function(t,f){return t.className.indexOf(f)>=0};var k=bt?function(t,f){ke(t,f)||t.classList.add(f)}:function(t,f){ke(t,f)||(t.className+=" "+f)};var ee=bt?function(t,f){ke(t,f)&&t.classList.remove(f)}:function(t,f){ke(t,f)&&(t.className=t.className.replace(f,""))};function wt(t,f){return t.hasAttribute(f)}function Xt(t,f){return t.getAttribute(f)}function Si(t){return typeof t.item<"u"}function fe(t,f){if(t=Si(t)||t instanceof Array?t:[t],Object.prototype.toString.call(f)==="[object Object]")for(var a=t.length;a--;)for(var u in f)t[a].setAttribute(u,f[u])}function ze(t,f){t=Si(t)||t instanceof Array?t:[t],f=f instanceof Array?f:[f];for(var a=f.length,u=t.length;u--;)for(var o=a;o--;)t[u].removeAttribute(f[o])}function cr(t){for(var f=[],a=0,u=t.length;a<u;a++)f.push(t[a]);return f}function ae(t,f){t.style.display!=="none"&&(t.style.display="none")}function oe(t,f){t.style.display==="none"&&(t.style.display="")}function dr(t){return window.getComputedStyle(t).display!=="none"}function xt(t){if(typeof t=="string"){var f=[t],a=t.charAt(0).toUpperCase()+t.substr(1),u=["Webkit","Moz","ms","O"];u.forEach(function(z){(z!=="ms"||t==="transform")&&f.push(z+a)}),t=f}for(var o=document.createElement("fakeelement"),g=t.length,q=0;q<t.length;q++){var P=t[q];if(o.style[P]!==void 0)return P}return!1}function Cn(t){if(!t||!window.getComputedStyle)return!1;var f=document,a=Ie(),u=Ue(a),o=f.createElement("p"),g,q=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return q+="transform",a.insertBefore(o,null),o.style[t]="translate3d(1px,1px,1px)",g=window.getComputedStyle(o).getPropertyValue(q),a.fake?Ge(a,u):o.remove(),g!==void 0&&g.length>0&&g!=="none"}function hr(t,f){var a=!1;return/^Webkit/.test(t)?a="webkit"+f+"End":/^O/.test(t)?a="o"+f+"End":t&&(a=f.toLowerCase()+"end"),a}var Dn=!1;try{Nn=Object.defineProperty({},"passive",{get:function(){Dn=!0}}),window.addEventListener("test",null,Nn)}catch{}var Nn,Li=Dn?{passive:!0}:!1;function R(t,f,a){for(var u in f){var o=["touchstart","touchmove"].indexOf(u)>=0&&!a?Li:!1;t.addEventListener(u,f[u],o)}}function Y(t,f){for(var a in f){var u=["touchstart","touchmove"].indexOf(a)>=0?Li:!1;t.removeEventListener(a,f[a],u)}}function On(){return{topics:{},on:function(t,f){this.topics[t]=this.topics[t]||[],this.topics[t].push(f)},off:function(t,f){if(this.topics[t]){for(var a=0;a<this.topics[t].length;a++)if(this.topics[t][a]===f){this.topics[t].splice(a,1);break}}},emit:function(t,f){f.type=t,this.topics[t]&&this.topics[t].forEach(function(a){a(f,t)})}}}function Rn(t,f,a,u,ye,g,q){var P=Math.min(g,10),z=ye.indexOf("%")>=0?"%":"px",ye=ye.replace(z,""),we=Number(t.style[f].replace(a,"").replace(u,"").replace(z,"")),Je=(ye-we)/g*P,vr;setTimeout(V,P);function V(){g-=P,we+=Je,t.style[f]=a+we+z+u,g>0?setTimeout(V,P):q()}}Object.keys||(Object.keys=function(t){var f=[];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&f.push(a);return f});"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var mr=function(t){t=Ai({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var f=document,a=window,u={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},o={},g=t.useLocalStorage;if(g){var q=navigator.userAgent,P=new Date;try{o=a.localStorage,o?(o.setItem(P,P),g=o.getItem(P)==P,o.removeItem(P)):g=!1,g||(o={})}catch{g=!1}g&&(o.tnsApp&&o.tnsApp!==q&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(e){o.removeItem(e)}),localStorage.tnsApp=q)}var z=o.tC?ve(o.tC):pe(o,"tC",xn(),g),ye=o.tPL?ve(o.tPL):pe(o,"tPL",Tn(),g),we=o.tMQ?ve(o.tMQ):pe(o,"tMQ",En(),g),Je=o.tTf?ve(o.tTf):pe(o,"tTf",xt("transform"),g),vr=o.t3D?ve(o.t3D):pe(o,"t3D",Cn(Je),g),V=o.tTDu?ve(o.tTDu):pe(o,"tTDu",xt("transitionDuration"),g),Zt=o.tTDe?ve(o.tTDe):pe(o,"tTDe",xt("transitionDelay"),g),_t=o.tADu?ve(o.tADu):pe(o,"tADu",xt("animationDuration"),g),Ci=o.tADe?ve(o.tADe):pe(o,"tADe",xt("animationDelay"),g),$e=o.tTE?ve(o.tTE):pe(o,"tTE",hr(V,"Transition"),g),pr=o.tAE?ve(o.tAE):pe(o,"tAE",hr(_t,"Animation"),g),yr=a.console&&typeof a.console.warn=="function",Ni=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],gr={};if(Ni.forEach(function(e){if(typeof t[e]=="string"){var i=t[e],r=f.querySelector(i);if(gr[e]=i,r&&r.nodeName)t[e]=r;else{yr&&console.warn("Can't find",t[e]);return}}}),t.container.children.length<1){yr&&console.warn("No slides found in",t.container);return}var C=t.responsive,st=t.nested,c=t.mode==="carousel";if(C){0 in C&&(t=Ai(t,C[0]),delete C[0]);var Di={};for(var br in C){var Tt=C[br];Tt=typeof Tt=="number"?{items:Tt}:Tt,Di[br]=Tt}C=Di,Di=null}function wr(e){for(var i in e)c||(i==="slideBy"&&(e[i]="page"),i==="edgePadding"&&(e[i]=!1),i==="autoHeight"&&(e[i]=!1)),i==="responsive"&&wr(e[i])}if(c||wr(t),!c){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var He=t.animateIn,It=t.animateOut,Oi=t.animateDelay,xe=t.animateNormal}var M=t.axis==="horizontal",$=f.createElement("div"),B=f.createElement("div"),te,m=t.container,Ri=m.parentNode,xr=m.outerHTML,T=m.children,v=T.length,Et,Ut=kr(),Mt=!1;C&&Xr(),c&&(m.className+=" tns-vpfix");var y=t.autoWidth,d=p("fixedWidth"),D=p("edgePadding"),x=p("gutter"),K=Hr(),Z=p("center"),b=y?1:Math.floor(p("items")),ut=p("slideBy"),ki=t.viewportMax||t.fixedWidthViewportWidth,We=p("arrowKeys"),ce=p("speed"),At=t.rewind,_=At?!1:t.loop,ie=p("autoHeight"),Te=p("controls"),Fe=p("controlsText"),Ee=p("nav"),qe=p("touch"),Pe=p("mouseDrag"),G=p("autoplay"),zi=p("autoplayTimeout"),Ve=p("autoplayText"),Ke=p("autoplayHoverPause"),je=p("autoplayResetOnVisibility"),A=Mn(null,p("nonce")),St=t.lazyload,kn=t.lazyloadSelector,H,ct=[],Q=_?Vn():0,E=c?v+Q*2:v+Q,Tr=!!((d||y)&&!_),dt=d?Bi():null,Hi=!c||!_,Be=M?"left":"top",Ye="",ht="",Lt=function(){return d?function(){return Z&&!_?v-1:Math.ceil(-dt/(d+x))}:y?function(){for(var e=0;e<E;e++)if(H[e]>=-dt)return e}:function(){return Z&&c&&!_?v-1:_||c?Math.max(0,E-Math.ceil(b)):E-1}}(),l=Or(p("startIndex")),Qe=l,bf=Dr(),Me=0,le=y?null:Lt(),zn,Gt=t.preventActionWhenRunning,Jt=t.swipeAngle,Ae=Jt?"?":!0,Xe=!1,Wi=t.onInit,j=new On,Ze=" tns-slider tns-"+t.mode,N=m.id||wn(),re=p("disable"),Ct=!1,$t=t.freezable,de=$t&&!y?Zi():!1,Nt=!1,Dt={click:_e,keydown:sf},Fi={click:tf,keydown:uf},Ot={mouseover:af,mouseout:of},Rt={visibilitychange:ff},kt={keydown:lf},zt={touchstart:mn,touchmove:vn,touchend:Ti,touchcancel:Ti},Ht={mousedown:mn,mousemove:vn,mouseup:Ti,mouseleave:Ti},Bt=Ne("controls"),qi=Ne("nav"),Wt=y?!0:t.navAsThumbnails,Pi=Ne("autoplay"),Er=Ne("touch"),Mr=Ne("mouseDrag"),Vi="tns-slide-active",Ar="tns-slide-cloned",ei="tns-complete",ti={load:_n,error:In},Ki,ji,Ft=t.preventScrollOnTouch==="force";if(Bt)var W=t.controlsContainer,Sr=t.controlsContainer?t.controlsContainer.outerHTML:"",S=t.prevButton,L=t.nextButton,Hn=t.prevButton?t.prevButton.outerHTML:"",Wn=t.nextButton?t.nextButton.outerHTML:"",qt,Pt;if(qi)var I=t.navContainer,Lr=t.navContainer?t.navContainer.outerHTML:"",se,he=y?v:yn(),et=0,tt=-1,ue=Rr(),mt=ue,ii="tns-nav-active",vt="Carousel Page ",Yi=" (Current Slide)";if(Pi)var Cr=t.autoplayDirection==="forward"?1:-1,O=t.autoplayButton,Nr=t.autoplayButton?t.autoplayButton.outerHTML:"",Vt=["<span class='tns-visually-hidden'>"," animation</span>"],ri,ne,ni,pt,fi;if(Er||Mr)var it={},ge={},ai,Fn,qn,rt=!1,me,Qi=M?function(e,i){return e.x-i.x}:function(e,i){return e.y-i.y};y||oi(re||de),Je&&(Be=Je,Ye="translate",vr?(Ye+=M?"3d(":"3d(0px, ",ht=M?", 0px, 0px)":", 0px)"):(Ye+=M?"X(":"Y(",ht=")")),c&&(m.className=m.className.replace("tns-vpfix","")),jn(),Yn(),qr();function oi(e){e&&(Te=Ee=qe=Pe=We=G=Ke=je=!1)}function Dr(){for(var e=c?l-Q:l;e<0;)e+=v;return e%v+1}function Or(e){return e=e?Math.max(0,Math.min(_?v-1:v-b,e)):0,c?e+Q:e}function li(e){for(e==null&&(e=l),c&&(e-=Q);e<0;)e+=v;return Math.floor(e%v)}function Rr(){var e=li(),i;return i=Wt?e:d||y?Math.ceil((e+1)*he/v-1):Math.floor(e/b),!_&&c&&l===le&&(i=he-1),i}function Pn(){if(y||d&&!ki)return v-1;var e=d?"fixedWidth":"items",i=[];if((d||t[e]<v)&&i.push(t[e]),C)for(var r in C){var n=C[r][e];n&&(d||n<v)&&i.push(n)}return i.length||i.push(0),Math.ceil(d?ki/Math.min.apply(null,i):Math.max.apply(null,i))}function Vn(){var e=Pn(),i=c?Math.ceil((e*5-v)/2):e*4-v;return i=Math.max(e,i),Ne("edgePadding")?i+1:i}function kr(){return a.innerWidth||f.documentElement.clientWidth||f.body.clientWidth}function Xi(e){return e==="top"?"afterbegin":"beforeend"}function zr(e){if(e!=null){var i=f.createElement("div"),r,n;return e.appendChild(i),r=i.getBoundingClientRect(),n=r.right-r.left,i.remove(),n||zr(e.parentNode)}}function Hr(){var e=D?D*2-x:0;return zr(Ri)-e}function Ne(e){if(t[e])return!0;if(C){for(var i in C)if(C[i][e])return!0}return!1}function p(e,i){if(i==null&&(i=Ut),e==="items"&&d)return Math.floor((K+x)/(d+x))||1;var r=t[e];if(C)for(var n in C)i>=parseInt(n)&&e in C[n]&&(r=C[n][e]);return e==="slideBy"&&r==="page"&&(r=p("items")),!c&&(e==="slideBy"||e==="items")&&(r=Math.floor(r)),r}function Kn(e){return z?z+"("+e*100+"% / "+E+")":e*100/E+"%"}function si(e,i,r,n,s){var h="";if(e!==void 0){var w=e;i&&(w-=i),h=M?"margin: 0 "+w+"px 0 "+e+"px;":"margin: "+e+"px 0 "+w+"px 0;"}else if(i&&!r){var U="-"+i+"px",F=M?U+" 0 0":"0 "+U+" 0";h="margin: 0 "+F+";"}return!c&&s&&V&&n&&(h+=nt(n)),h}function ui(e,i,r){return e?(e+i)*E+"px":z?z+"("+E*100+"% / "+r+")":E*100/r+"%"}function ci(e,i,r){var n;if(e)n=e+i+"px";else{c||(r=Math.floor(r));var s=c?E:r;n=z?z+"(100% / "+s+")":100/s+"%"}return n="width:"+n,st!=="inner"?n+";":n+" !important;"}function di(e){var i="";if(e!==!1){var r=M?"padding-":"margin-",n=M?"right":"bottom";i=r+n+": "+e+"px;"}return i}function Wr(e,i){var r=e.substring(0,e.length-i).toLowerCase();return r&&(r="-"+r+"-"),r}function nt(e){return Wr(V,18)+"transition-duration:"+e/1e3+"s;"}function Fr(e){return Wr(_t,17)+"animation-duration:"+e/1e3+"s;"}function jn(){var e="tns-outer",i="tns-inner",r=Ne("gutter");if($.className=e,B.className=i,$.id=N+"-ow",B.id=N+"-iw",m.id===""&&(m.id=N),Ze+=ye||y?" tns-subpixel":" tns-no-subpixel",Ze+=z?" tns-calc":" tns-no-calc",y&&(Ze+=" tns-autowidth"),Ze+=" tns-"+t.axis,m.className+=Ze,c?(te=f.createElement("div"),te.id=N+"-mw",te.className="tns-ovh",$.appendChild(te),te.appendChild(B)):$.appendChild(B),ie){var n=te||B;n.className+=" tns-ah"}if(Ri.insertBefore($,m),B.appendChild(m),Re(T,function(Le,at){k(Le,"tns-item"),Le.id||(Le.id=N+"-item"+at),!c&&xe&&k(Le,xe),fe(Le,{"aria-hidden":"true",tabindex:"-1"})}),Q){for(var s=f.createDocumentFragment(),h=f.createDocumentFragment(),w=Q;w--;){var U=w%v,F=T[U].cloneNode(!0);if(k(F,Ar),ze(F,"id"),h.insertBefore(F,h.firstChild),c){var X=T[v-1-U].cloneNode(!0);k(X,Ar),ze(X,"id"),s.appendChild(X)}}m.insertBefore(s,m.firstChild),m.appendChild(h),T=m.children}}function qr(){if(Ne("autoHeight")||y||!M){var e=m.querySelectorAll("img");Re(e,function(i){var r=i.src;St||(r&&r.indexOf("data:image")<0?(i.src="",R(i,ti),k(i,"loading"),i.src=r):Jr(i))}),Oe(function(){vi(cr(e),function(){Ki=!0})}),Ne("autoHeight")&&(e=Ji(l,Math.min(l+b-1,E-1))),St?Pr():Oe(function(){vi(cr(e),Pr)})}else c&&jt(),Kr(),jr()}function Pr(){if(y&&v>1){var e=_?l:v-1;(function i(){var r=T[e].getBoundingClientRect().left,n=T[e-1].getBoundingClientRect().right;Math.abs(r-n)<=1?Vr():setTimeout(function(){i()},16)})()}else Vr()}function Vr(){(!M||y)&&(tn(),y?(dt=Bi(),$t&&(de=Zi()),le=Lt(),oi(re||de)):ir()),c&&jt(),Kr(),jr()}function Yn(){if(!c)for(var e=l,i=l+Math.min(v,b);e<i;e++){var r=T[e];r.style.left=(e-l)*100/b+"%",k(r,He),ee(r,xe)}if(M&&(ye||y?(Ce(A,"#"+N+" > .tns-item","font-size:"+a.getComputedStyle(T[0]).fontSize+";",be(A)),Ce(A,"#"+N,"font-size:0;",be(A))):c&&Re(T,function(ar,or){ar.style.marginLeft=Kn(or)})),we){if(V){var n=te&&t.autoHeight?nt(t.speed):"";Ce(A,"#"+N+"-mw",n,be(A))}n=si(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),Ce(A,"#"+N+"-iw",n,be(A)),c&&(n=M&&!y?"width:"+ui(t.fixedWidth,t.gutter,t.items)+";":"",V&&(n+=nt(ce)),Ce(A,"#"+N,n,be(A))),n=M&&!y?ci(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(n+=di(t.gutter)),c||(V&&(n+=nt(ce)),_t&&(n+=Fr(ce))),n&&Ce(A,"#"+N+" > .tns-item",n,be(A))}else{Gn(),B.style.cssText=si(D,x,d,ie),c&&M&&!y&&(m.style.width=ui(d,x,b));var n=M&&!y?ci(d,x,b):"";x&&(n+=di(x)),n&&Ce(A,"#"+N+" > .tns-item",n,be(A))}if(C&&we)for(var s in C){s=parseInt(s);var h=C[s],n="",w="",U="",F="",X="",Le=y?null:p("items",s),at=p("fixedWidth",s),ot=p("speed",s),nr=p("edgePadding",s),fr=p("autoHeight",s),gt=p("gutter",s);V&&te&&p("autoHeight",s)&&"speed"in h&&(w="#"+N+"-mw{"+nt(ot)+"}"),("edgePadding"in h||"gutter"in h)&&(U="#"+N+"-iw{"+si(nr,gt,at,ot,fr)+"}"),c&&M&&!y&&("fixedWidth"in h||"items"in h||d&&"gutter"in h)&&(F="width:"+ui(at,gt,Le)+";"),V&&"speed"in h&&(F+=nt(ot)),F&&(F="#"+N+"{"+F+"}"),("fixedWidth"in h||d&&"gutter"in h||!c&&"items"in h)&&(X+=ci(at,gt,Le)),"gutter"in h&&(X+=di(gt)),!c&&"speed"in h&&(V&&(X+=nt(ot)),_t&&(X+=Fr(ot))),X&&(X="#"+N+" > .tns-item{"+X+"}"),n=w+U+F+X,n&&A.insertRule("@media (min-width: "+s/16+"em) {"+n+"}",A.cssRules.length)}}function Kr(){if($i(),$.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+Gr()+"</span>  of "+v+"</div>"),ji=$.querySelector(".tns-liveregion .current"),Pi){var e=G?"stop":"start";O?fe(O,{"data-action":e}):t.autoplayButtonOutput&&($.insertAdjacentHTML(Xi(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+Vt[0]+e+Vt[1]+Ve[0]+"</button>"),O=$.querySelector("[data-action]")),O&&R(O,{click:un}),G&&(xi(),Ke&&R(m,Ot),je&&R(m,Rt))}if(qi){var i=c?Q:0;if(I)fe(I,{"aria-label":"Carousel Pagination"}),se=I.children,Re(se,function(U,F){fe(U,{"data-nav":F,tabindex:"-1","aria-label":vt+(F+1),"aria-controls":N})});else{for(var r="",n=Wt?"":'style="display:none"',s=0;s<v;s++)r+='<button type="button" data-nav="'+s+'" tabindex="-1" aria-controls="'+N+'" '+n+' aria-label="'+vt+(s+1)+'"></button>';r='<div class="tns-nav" aria-label="Carousel Pagination">'+r+"</div>",$.insertAdjacentHTML(Xi(t.navPosition),r),I=$.querySelector(".tns-nav"),se=I.children}if(rr(),V){var h=V.substring(0,V.length-18).toLowerCase(),w="transition: all "+ce/1e3+"s";h&&(w="-"+h+"-"+w),Ce(A,"[aria-controls^="+N+"-item]",w,be(A))}fe(se[ue],{"aria-label":vt+(ue+1)+Yi}),ze(se[ue],"tabindex"),k(se[ue],ii),R(I,Fi)}Bt&&(!W&&(!S||!L)&&($.insertAdjacentHTML(Xi(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+N+'">'+Fe[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+N+'">'+Fe[1]+"</button></div>"),W=$.querySelector(".tns-controls")),(!S||!L)&&(S=W.children[0],L=W.children[1]),t.controlsContainer&&fe(W,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&fe([S,L],{"aria-controls":N,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(fe(S,{"data-controls":"prev"}),fe(L,{"data-controls":"next"})),qt=nn(S),Pt=nn(L),an(),W?R(W,Dt):(R(S,Dt),R(L,Dt))),Ii()}function jr(){if(c&&$e){var e={};e[$e]=Se,R(m,e)}qe&&R(m,zt,t.preventScrollOnTouch),Pe&&R(m,Ht),We&&R(f,kt),st==="inner"?j.on("outerResized",function(){Qr(),j.emit("innerLoaded",J())}):(C||d||y||ie||!M)&&R(a,{resize:Yr}),ie&&(st==="outer"?j.on("innerLoaded",mi):re||mi()),Ui(),re?Ir():de&&_r(),j.on("indexChanged",$r),st==="inner"&&j.emit("innerLoaded",J()),typeof Wi=="function"&&Wi(J()),Mt=!0}function Qn(){if(A.disabled=!0,A.ownerNode&&A.ownerNode.remove(),Y(a,{resize:Yr}),We&&Y(f,kt),W&&Y(W,Dt),I&&Y(I,Fi),Y(m,Ot),Y(m,Rt),O&&Y(O,{click:un}),G&&clearInterval(ri),c&&$e){var e={};e[$e]=Se,Y(m,e)}qe&&Y(m,zt),Pe&&Y(m,Ht);var i=[xr,Sr,Hn,Wn,Lr,Nr];Ni.forEach(function(n,s){var h=n==="container"?$:t[n];if(typeof h=="object"&&h){var w=h.previousElementSibling?h.previousElementSibling:!1,U=h.parentNode;h.outerHTML=i[s],t[n]=w?w.nextElementSibling:U.firstElementChild}}),Ni=He=It=Oi=xe=M=$=B=m=Ri=xr=T=v=Et=Ut=y=d=D=x=K=b=ut=ki=We=ce=At=_=ie=A=St=H=ct=Q=E=Tr=dt=Hi=Be=Ye=ht=Lt=l=Qe=Me=le=zn=Jt=Ae=Xe=Wi=j=Ze=N=re=Ct=$t=de=Nt=Dt=Fi=Ot=Rt=kt=zt=Ht=Bt=qi=Wt=Pi=Er=Mr=Vi=ei=ti=Ki=Te=Fe=W=Sr=S=L=qt=Pt=Ee=I=Lr=se=he=et=tt=ue=mt=ii=vt=Yi=G=zi=Cr=Ve=Ke=O=Nr=je=Vt=ri=ne=ni=pt=fi=it=ge=ai=Fn=qn=rt=me=Qi=qe=Pe=null;for(var r in this)r!=="rebuild"&&(this[r]=null);Mt=!1}function Yr(e){Oe(function(){Qr(De(e))})}function Qr(e){if(Mt){st==="outer"&&j.emit("outerResized",J(e)),Ut=kr();var i,r=Et,n=!1;C&&(Xr(),i=r!==Et,i&&j.emit("newBreakpointStart",J(e)));var s,h,w=b,U=re,F=de,X=We,Le=Te,at=Ee,ot=qe,nr=Pe,fr=G,gt=Ke,ar=je,or=l;if(i){var cf=d,df=ie,hf=Fe,mf=Z,lr=Ve;if(!we)var vf=x,pf=D}if(We=p("arrowKeys"),Te=p("controls"),Ee=p("nav"),qe=p("touch"),Z=p("center"),Pe=p("mouseDrag"),G=p("autoplay"),Ke=p("autoplayHoverPause"),je=p("autoplayResetOnVisibility"),i&&(re=p("disable"),d=p("fixedWidth"),ce=p("speed"),ie=p("autoHeight"),Fe=p("controlsText"),Ve=p("autoplayText"),zi=p("autoplayTimeout"),we||(D=p("edgePadding"),x=p("gutter"))),oi(re),K=Hr(),(!M||y)&&!re&&(tn(),M||(ir(),n=!0)),(d||y)&&(dt=Bi(),le=Lt()),(i||d)&&(b=p("items"),ut=p("slideBy"),h=b!==w,h&&(!d&&!y&&(le=Lt()),_i())),i&&re!==U&&(re?Ir():Zn()),$t&&(i||d||y)&&(de=Zi(),de!==F&&(de?(er(gi(Or(0))),_r()):(Xn(),n=!0))),oi(re||de),G||(Ke=je=!1),We!==X&&(We?R(f,kt):Y(f,kt)),Te!==Le&&(Te?W?oe(W):(S&&oe(S),L&&oe(L)):W?ae(W):(S&&ae(S),L&&ae(L))),Ee!==at&&(Ee?(oe(I),rr()):ae(I)),qe!==ot&&(qe?R(m,zt,t.preventScrollOnTouch):Y(m,zt)),Pe!==nr&&(Pe?R(m,Ht):Y(m,Ht)),G!==fr&&(G?(O&&oe(O),!ne&&!pt&&xi()):(O&&ae(O),ne&&Qt())),Ke!==gt&&(Ke?R(m,Ot):Y(m,Ot)),je!==ar&&(je?R(f,Rt):Y(f,Rt)),i){if((d!==cf||Z!==mf)&&(n=!0),ie!==df&&(ie||(B.style.height="")),Te&&Fe!==hf&&(S.innerHTML=Fe[0],L.innerHTML=Fe[1]),O&&Ve!==lr){var sr=G?1:0,ur=O.innerHTML,gn=ur.length-lr[sr].length;ur.substring(gn)===lr[sr]&&(O.innerHTML=ur.substring(0,gn)+Ve[sr])}}else Z&&(d||y)&&(n=!0);if((h||d&&!y)&&(he=yn(),rr()),s=l!==or,s?(j.emit("indexChanged",J()),n=!0):h?s||$r():(d||y)&&(Ui(),$i(),Ur()),h&&!c&&Jn(),!re&&!de){if(i&&!we&&((D!==pf||x!==vf)&&(B.style.cssText=si(D,x,d,ce,ie)),M)){c&&(m.style.width=ui(d,x,b));var yf=ci(d,x,b)+di(x);An(A,be(A)-1),Ce(A,"#"+N+" > .tns-item",yf,be(A))}ie&&mi(),n&&(jt(),Qe=l)}i&&j.emit("newBreakpointEnd",J(e))}}function Zi(){if(!d&&!y){var e=Z?b-(b-1)/2:b;return v<=e}var i=d?(d+x)*v:H[v],r=D?K+D*2:K+x;return Z&&(r-=d?(K-d)/2:(K-(H[l+1]-H[l]-x))/2),i<=r}function Xr(){Et=0;for(var e in C)e=parseInt(e),Ut>=e&&(Et=e)}var _i=function(){return _?c?function(){var e=Me,i=le;e+=ut,i-=ut,D?(e+=1,i-=1):d&&(K+x)%(d+x)&&(i-=1),Q&&(l>i?l-=v:l<e&&(l+=v))}:function(){if(l>le)for(;l>=Me+v;)l-=v;else if(l<Me)for(;l<=le-v;)l+=v}:function(){l=Math.max(Me,Math.min(le,l))}}();function Ii(){!G&&O&&ae(O),!Ee&&I&&ae(I),Te||(W?ae(W):(S&&ae(S),L&&ae(L)))}function Zr(){G&&O&&oe(O),Ee&&I&&oe(I),Te&&(W?oe(W):(S&&oe(S),L&&oe(L)))}function _r(){if(!Nt){if(D&&(B.style.margin="0px"),Q)for(var e="tns-transparent",i=Q;i--;)c&&k(T[i],e),k(T[E-i-1],e);Ii(),Nt=!0}}function Xn(){if(Nt){if(D&&we&&(B.style.margin=""),Q)for(var e="tns-transparent",i=Q;i--;)c&&ee(T[i],e),ee(T[E-i-1],e);Zr(),Nt=!1}}function Ir(){if(!Ct){if(A.disabled=!0,m.className=m.className.replace(Ze.substring(1),""),ze(m,["style"]),_)for(var e=Q;e--;)c&&ae(T[e]),ae(T[E-e-1]);if((!M||!c)&&ze(B,["style"]),!c)for(var i=l,r=l+v;i<r;i++){var n=T[i];ze(n,["style"]),ee(n,He),ee(n,xe)}Ii(),Ct=!0}}function Zn(){if(Ct){if(A.disabled=!1,m.className+=Ze,jt(),_)for(var e=Q;e--;)c&&oe(T[e]),oe(T[E-e-1]);if(!c)for(var i=l,r=l+v;i<r;i++){var n=T[i],s=i<l+b?He:xe;n.style.left=(i-l)*100/b+"%",k(n,s)}Zr(),Ct=!1}}function Ur(){var e=Gr();ji.innerHTML!==e&&(ji.innerHTML=e)}function Gr(){var e=hi(),i=e[0]+1,r=e[1]+1;return i===r?i+"":i+" to "+r}function hi(e){e==null&&(e=gi());var i=l,r,n,s;if(Z||D?(y||d)&&(n=-(parseFloat(e)+D),s=n+K+D*2):y&&(n=H[l],s=n+K),y)H.forEach(function(F,X){X<E&&((Z||D)&&F<=n+.5&&(i=X),s-F>=.5&&(r=X))});else{if(d){var h=d+x;Z||D?(i=Math.floor(n/h),r=Math.ceil(s/h-1)):r=i+Math.ceil(K/h)-1}else if(Z||D){var w=b-1;if(Z?(i-=w/2,r=l+w/2):r=l+w,D){var U=D*b/K;i-=U,r+=U}i=Math.floor(i),r=Math.ceil(r)}else r=i+b-1;i=Math.max(i,0),r=Math.min(r,E-1)}return[i,r]}function Ui(){if(St&&!re){var e=hi();e.push(kn),Ji.apply(null,e).forEach(function(i){if(!ke(i,ei)){var r={};r[$e]=function(s){s.stopPropagation()},R(i,r),R(i,ti),i.src=Xt(i,"data-src");var n=Xt(i,"data-srcset");n&&(i.srcset=n),k(i,"loading")}})}}function _n(e){Jr(yt(e))}function In(e){Un(yt(e))}function Jr(e){k(e,"loaded"),Gi(e)}function Un(e){k(e,"failed"),Gi(e)}function Gi(e){k(e,ei),ee(e,"loading"),Y(e,ti)}function Ji(e,i,r){var n=[];for(r||(r="img");e<=i;)Re(T[e].querySelectorAll(r),function(s){n.push(s)}),e++;return n}function mi(){var e=Ji.apply(null,hi());Oe(function(){vi(e,en)})}function vi(e,i){if(Ki||(e.forEach(function(r,n){!St&&r.complete&&Gi(r),ke(r,ei)&&e.splice(n,1)}),!e.length))return i();Oe(function(){vi(e,i)})}function $r(){Ui(),$i(),Ur(),an(),$n()}function Gn(){c&&ie&&(te.style[V]=ce/1e3+"s")}function Br(e,i){for(var r=[],n=e,s=Math.min(e+i,E);n<s;n++)r.push(T[n].offsetHeight);return Math.max.apply(null,r)}function en(){var e=ie?Br(l,b):Br(Q,v),i=te||B;i.style.height!==e&&(i.style.height=e+"px")}function tn(){H=[0];var e=M?"left":"top",i=M?"right":"bottom",r=T[0].getBoundingClientRect()[e];Re(T,function(n,s){s&&H.push(n.getBoundingClientRect()[e]-r),s===E-1&&H.push(n.getBoundingClientRect()[i]-r)})}function $i(){var e=hi(),i=e[0],r=e[1];Re(T,function(n,s){s>=i&&s<=r?wt(n,"aria-hidden")&&(ze(n,["aria-hidden","tabindex"]),k(n,Vi)):wt(n,"aria-hidden")||(fe(n,{"aria-hidden":"true",tabindex:"-1"}),ee(n,Vi))})}function Jn(){for(var e=l+Math.min(v,b),i=E;i--;){var r=T[i];i>=l&&i<e?(k(r,"tns-moving"),r.style.left=(i-l)*100/b+"%",k(r,He),ee(r,xe)):r.style.left&&(r.style.left="",k(r,xe),ee(r,He)),ee(r,It)}setTimeout(function(){Re(T,function(n){ee(n,"tns-moving")})},300)}function $n(){if(Ee&&(ue=tt>=0?tt:Rr(),tt=-1,ue!==mt)){var e=se[mt],i=se[ue];fe(e,{tabindex:"-1","aria-label":vt+(mt+1)}),ee(e,ii),fe(i,{"aria-label":vt+(ue+1)+Yi}),ze(i,"tabindex"),k(i,ii),mt=ue}}function rn(e){return e.nodeName.toLowerCase()}function nn(e){return rn(e)==="button"}function fn(e){return e.getAttribute("aria-disabled")==="true"}function pi(e,i,r){e?i.disabled=r:i.setAttribute("aria-disabled",r.toString())}function an(){if(!(!Te||At||_)){var e=qt?S.disabled:fn(S),i=Pt?L.disabled:fn(L),r=l<=Me,n=!At&&l>=le;r&&!e&&pi(qt,S,!0),!r&&e&&pi(qt,S,!1),n&&!i&&pi(Pt,L,!0),!n&&i&&pi(Pt,L,!1)}}function yi(e,i){V&&(e.style[V]=i)}function Bn(){return d?(d+x)*E:H[E]}function Kt(e){e==null&&(e=l);var i=D?x:0;return y?(K-i-(H[e+1]-H[e]-x))/2:d?(K-d)/2:(b-1)/2}function Bi(){var e=D?x:0,i=K+e-Bn();return Z&&!_&&(i=d?-(d+x)*(E-1)-Kt():Kt(E-1)-H[E-1]),i>0&&(i=0),i}function gi(e){e==null&&(e=l);var i;if(M&&!y)if(d)i=-(d+x)*e,Z&&(i+=Kt());else{var r=Je?E:b;Z&&(e-=Kt()),i=-e*100/r}else i=-H[e],Z&&y&&(i+=Kt());return Tr&&(i=Math.max(i,dt)),i+=M&&!y&&!d?"%":"px",i}function jt(e){yi(m,"0s"),er(e)}function er(e){e==null&&(e=gi()),m.style[Be]=Ye+e+ht}function on(e,i,r,n){var s=e+b;_||(s=Math.min(s,E));for(var h=e;h<s;h++){var w=T[h];n||(w.style.left=(h-l)*100/b+"%"),Oi&&Zt&&(w.style[Zt]=w.style[Ci]=Oi*(h-e)/1e3+"s"),ee(w,i),k(w,r),n&&ct.push(w)}}var ef=function(){return c?function(){yi(m,""),V||!ce?(er(),(!ce||!dr(m))&&Se()):Rn(m,Be,Ye,ht,gi(),ce,Se),M||ir()}:function(){ct=[];var e={};e[$e]=e[pr]=Se,Y(T[Qe],e),R(T[l],e),on(Qe,He,It,!0),on(l,xe,He),(!$e||!pr||!ce||!dr(m))&&Se()}}();function tr(e,i){Hi&&_i(),(l!==Qe||i)&&(j.emit("indexChanged",J()),j.emit("transitionStart",J()),ie&&mi(),ne&&e&&["click","keydown"].indexOf(e.type)>=0&&Qt(),Xe=!0,ef())}function ln(e){return e.toLowerCase().replace(/-/g,"")}function Se(e){if(c||Xe){if(j.emit("transitionEnd",J(e)),!c&&ct.length>0)for(var i=0;i<ct.length;i++){var r=ct[i];r.style.left="",Ci&&Zt&&(r.style[Ci]="",r.style[Zt]=""),ee(r,It),k(r,xe)}if(!e||!c&&e.target.parentNode===m||e.target===m&&ln(e.propertyName)===ln(Be)){if(!Hi){var n=l;_i(),l!==n&&(j.emit("indexChanged",J()),jt())}st==="inner"&&j.emit("innerLoaded",J()),Xe=!1,Qe=l}}}function Yt(e,i){if(!de)if(e==="prev")_e(i,-1);else if(e==="next")_e(i,1);else{if(Xe){if(Gt)return;Se()}var r=li(),n=0;if(e==="first"?n=-r:e==="last"?n=c?v-b-r:v-1-r:(typeof e!="number"&&(e=parseInt(e)),isNaN(e)||(i||(e=Math.max(0,Math.min(v-1,e))),n=e-r)),!c&&n&&Math.abs(n)<b){var s=n>0?1:-1;n+=l+n-v>=Me?v*s:v*2*s*-1}l+=n,c&&_&&(l<Me&&(l+=v),l>le&&(l-=v)),li(l)!==li(Qe)&&tr(i)}}function _e(e,i){if(Xe){if(Gt)return;Se()}var r;if(!i){e=De(e);for(var n=yt(e);n!==W&&[S,L].indexOf(n)<0;)n=n.parentNode;var s=[S,L].indexOf(n);s>=0&&(r=!0,i=s===0?-1:1)}if(At){if(l===Me&&i===-1){Yt("last",e);return}else if(l===le&&i===1){Yt("first",e);return}}i&&(l+=ut*i,y&&(l=Math.floor(l)),tr(r||e&&e.type==="keydown"?e:null))}function tf(e){if(Xe){if(Gt)return;Se()}e=De(e);for(var i=yt(e),r;i!==I&&!wt(i,"data-nav");)i=i.parentNode;if(wt(i,"data-nav")){var r=tt=Number(Xt(i,"data-nav")),n=d||y?r*v/he:r*b,s=Wt?r:Math.min(Math.ceil(n),v-1);Yt(s,e),ue===r&&(ne&&Qt(),tt=-1)}}function bi(){ri=setInterval(function(){_e(null,Cr)},zi),ne=!0}function wi(){clearInterval(ri),ne=!1}function sn(e,i){fe(O,{"data-action":e}),O.innerHTML=Vt[0]+e+Vt[1]+i}function xi(){bi(),O&&sn("stop",Ve[1])}function Qt(){wi(),O&&sn("start",Ve[0])}function rf(){G&&!ne&&(xi(),pt=!1)}function nf(){ne&&(Qt(),pt=!0)}function un(){ne?(Qt(),pt=!0):(xi(),pt=!1)}function ff(){f.hidden?ne&&(wi(),fi=!0):fi&&(bi(),fi=!1)}function af(){ne&&(wi(),ni=!0)}function of(){ni&&(bi(),ni=!1)}function lf(e){e=De(e);var i=[u.LEFT,u.RIGHT].indexOf(e.keyCode);i>=0&&_e(e,i===0?-1:1)}function sf(e){e=De(e);var i=[u.LEFT,u.RIGHT].indexOf(e.keyCode);i>=0&&(i===0?S.disabled||_e(e,-1):L.disabled||_e(e,1))}function cn(e){e.focus()}function uf(e){e=De(e);var i=f.activeElement;if(wt(i,"data-nav")){var r=[u.LEFT,u.RIGHT,u.ENTER,u.SPACE].indexOf(e.keyCode),n=Number(Xt(i,"data-nav"));r>=0&&(r===0?n>0&&cn(se[n-1]):r===1?n<he-1&&cn(se[n+1]):(tt=n,Yt(n,e)))}}function De(e){return e=e||a.event,ft(e)?e.changedTouches[0]:e}function yt(e){return e.target||a.event.srcElement}function ft(e){return e.type.indexOf("touch")>=0}function dn(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function hn(){return Ln(Sn(ge.y-it.y,ge.x-it.x),Jt)===t.axis}function mn(e){if(Xe){if(Gt)return;Se()}G&&ne&&wi(),rt=!0,me&&(Mi(me),me=null);var i=De(e);j.emit(ft(e)?"touchStart":"dragStart",J(e)),!ft(e)&&["img","a"].indexOf(rn(yt(e)))>=0&&dn(e),ge.x=it.x=i.clientX,ge.y=it.y=i.clientY,c&&(ai=parseFloat(m.style[Be].replace(Ye,"")),yi(m,"0s"))}function vn(e){if(rt){var i=De(e);ge.x=i.clientX,ge.y=i.clientY,c?me||(me=Oe(function(){pn(e)})):(Ae==="?"&&(Ae=hn()),Ae&&(Ft=!0)),(typeof e.cancelable!="boolean"||e.cancelable)&&Ft&&e.preventDefault()}}function pn(e){if(!Ae){rt=!1;return}if(Mi(me),rt&&(me=Oe(function(){pn(e)})),Ae==="?"&&(Ae=hn()),Ae){!Ft&&ft(e)&&(Ft=!0);try{e.type&&j.emit(ft(e)?"touchMove":"dragMove",J(e))}catch{}var i=ai,r=Qi(ge,it);if(!M||d||y)i+=r,i+="px";else{var n=Je?r*b*100/((K+x)*E):r*100/(K+x);i+=n,i+="%"}m.style[Be]=Ye+i+ht}}function Ti(e){if(rt){me&&(Mi(me),me=null),c&&yi(m,""),rt=!1;var i=De(e);ge.x=i.clientX,ge.y=i.clientY;var r=Qi(ge,it);if(Math.abs(r)){if(!ft(e)){var n=yt(e);R(n,{click:function s(h){dn(h),Y(n,{click:s})}})}c?me=Oe(function(){if(M&&!y){var s=-r*b/(K+x);s=r>0?Math.floor(s):Math.ceil(s),l+=s}else{var h=-(ai+r);if(h<=0)l=Me;else if(h>=H[E-1])l=le;else for(var w=0;w<E&&h>=H[w];)l=w,h>H[w]&&r<0&&(l+=1),w++}tr(e,r),j.emit(ft(e)?"touchEnd":"dragEnd",J(e))}):Ae&&_e(e,r>0?-1:1)}}t.preventScrollOnTouch==="auto"&&(Ft=!1),Jt&&(Ae="?"),G&&!ne&&bi()}function ir(){var e=te||B;e.style.height=H[l+b]-H[l]+"px"}function yn(){var e=d?(d+x)*v/K:v/b;return Math.min(Math.ceil(e),v)}function rr(){if(!(!Ee||Wt)&&he!==et){var e=et,i=he,r=oe;for(et>he&&(e=he,i=et,r=ae);e<i;)r(se[e]),e++;et=he}}function J(e){return{container:m,slideItems:T,navContainer:I,navItems:se,controlsContainer:W,hasControls:Bt,prevButton:S,nextButton:L,items:b,slideBy:ut,cloneCount:Q,slideCount:v,slideCountNew:E,index:l,indexCached:Qe,displayIndex:Dr(),navCurrentIndex:ue,navCurrentIndexCached:mt,pages:he,pagesCached:et,sheet:A,isOn:Mt,event:e||{}}}return{version:"2.9.4",getInfo:J,events:j,goTo:Yt,play:rf,pause:nf,isOn:Mt,updateSliderHeight:en,refresh:qr,destroy:Qn,rebuild:function(){return mr(Ai(t,gr))}}};function gf({options:t={},onInit:f=()=>{},onTransitionEndCallback:a=()=>{},offTransitionEndCallback:u=()=>{}}){return{init(){let o=mr({container:this.$refs.tinySlider,onInit:f,...t});o.events.on("transitionEnd",a),o.events.off("transitionEnd",u)}}}export{gf as default};
