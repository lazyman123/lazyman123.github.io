import{v as Dt,x as lt,d as Pt,p as me,a8 as Ue,h as Ct,q as Ae,o as Ye,c as ze,j as Ge,r as Ke,K as Je,W as Qe,k as Ze,G as Bt,w as $t,a as jt,t as Rt,e as St,T as Lt}from"./framework.DgvnYVAR.js";import{a as Wt,b as ke,r as Mt}from"./Icon.vue_vue_type_script_setup_true_lang.Bf9H3ce0.js";var Nt=/\s/;function Ht(e){for(var t=e.length;t--&&Nt.test(e.charAt(t)););return t}var Vt=/^\s+/;function It(e){return e&&e.slice(0,Ht(e)+1).replace(Vt,"")}var _e=NaN,Ft=/^[-+]0x[0-9a-f]+$/i,qt=/^0b[01]+$/i,Xt=/^0o[0-7]+$/i,Ut=parseInt;function et(e){if(typeof e=="number")return e;if(Wt(e))return _e;if(ke(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ke(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=It(e);var r=qt.test(e);return r||Xt.test(e)?Ut(e.slice(2),r?2:8):Ft.test(e)?_e:+e}var Te=function(){return Mt.Date.now()},Yt="Expected a function",zt=Math.max,Gt=Math.min;function tt(e,t,r){var n,a,o,c,i,s,u=0,f=!1,m=!1,b=!0;if(typeof e!="function")throw new TypeError(Yt);t=et(t)||0,ke(r)&&(f=!!r.leading,m="maxWait"in r,o=m?zt(et(r.maxWait)||0,t):o,b="trailing"in r?!!r.trailing:b);function p(l){var d=n,O=a;return n=a=void 0,u=l,c=e.apply(O,d),c}function x(l){return u=l,i=setTimeout(w,t),f?p(l):c}function y(l){var d=l-s,O=l-u,T=t-d;return m?Gt(T,o-O):T}function h(l){var d=l-s,O=l-u;return s===void 0||d>=t||d<0||m&&O>=o}function w(){var l=Te();if(h(l))return E(l);i=setTimeout(w,y(l))}function E(l){return i=void 0,b&&n?p(l):(n=a=void 0,c)}function A(){i!==void 0&&clearTimeout(i),u=0,n=s=a=i=void 0}function v(){return i===void 0?c:E(Te())}function g(){var l=Te(),d=h(l);if(n=arguments,a=this,s=l,d){if(i===void 0)return x(s);if(m)return clearTimeout(i),i=setTimeout(w,t),p(s)}return i===void 0&&(i=setTimeout(w,t)),c}return g.cancel=A,g.flush=v,g}var C="top",S="bottom",L="right",B="left",Ce="auto",fe=[C,S,L,B],Q="start",oe="end",Kt="clippingParents",pt="viewport",ne="popper",Jt="reference",rt=fe.reduce(function(e,t){return e.concat([t+"-"+Q,t+"-"+oe])},[]),vt=[].concat(fe,[Ce]).reduce(function(e,t){return e.concat([t,t+"-"+Q,t+"-"+oe])},[]),Qt="beforeRead",Zt="read",_t="afterRead",er="beforeMain",tr="main",rr="afterMain",nr="beforeWrite",ar="write",ir="afterWrite",or=[Qt,Zt,_t,er,tr,rr,nr,ar,ir];function H(e){return e?(e.nodeName||"").toLowerCase():null}function j(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function K(e){var t=j(e).Element;return e instanceof t||e instanceof Element}function R(e){var t=j(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Be(e){if(typeof ShadowRoot>"u")return!1;var t=j(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function sr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},a=t.attributes[r]||{},o=t.elements[r];!R(o)||!H(o)||(Object.assign(o.style,n),Object.keys(a).forEach(function(c){var i=a[c];i===!1?o.removeAttribute(c):o.setAttribute(c,i===!0?"":i)}))})}function fr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var a=t.elements[n],o=t.attributes[n]||{},c=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),i=c.reduce(function(s,u){return s[u]="",s},{});!R(a)||!H(a)||(Object.assign(a.style,i),Object.keys(o).forEach(function(s){a.removeAttribute(s)}))})}}const cr={name:"applyStyles",enabled:!0,phase:"write",fn:sr,effect:fr,requires:["computeStyles"]};function N(e){return e.split("-")[0]}var G=Math.max,ye=Math.min,Z=Math.round;function De(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function dt(){return!/^((?!chrome|android).)*safari/i.test(De())}function _(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),a=1,o=1;t&&R(e)&&(a=e.offsetWidth>0&&Z(n.width)/e.offsetWidth||1,o=e.offsetHeight>0&&Z(n.height)/e.offsetHeight||1);var c=K(e)?j(e):window,i=c.visualViewport,s=!dt()&&r,u=(n.left+(s&&i?i.offsetLeft:0))/a,f=(n.top+(s&&i?i.offsetTop:0))/o,m=n.width/a,b=n.height/o;return{width:m,height:b,top:f,right:u+m,bottom:f+b,left:u,x:u,y:f}}function $e(e){var t=_(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function mt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Be(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function V(e){return j(e).getComputedStyle(e)}function ur(e){return["table","td","th"].indexOf(H(e))>=0}function F(e){return((K(e)?e.ownerDocument:e.document)||window.document).documentElement}function be(e){return H(e)==="html"?e:e.assignedSlot||e.parentNode||(Be(e)?e.host:null)||F(e)}function nt(e){return!R(e)||V(e).position==="fixed"?null:e.offsetParent}function lr(e){var t=/firefox/i.test(De()),r=/Trident/i.test(De());if(r&&R(e)){var n=V(e);if(n.position==="fixed")return null}var a=be(e);for(Be(a)&&(a=a.host);R(a)&&["html","body"].indexOf(H(a))<0;){var o=V(a);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return a;a=a.parentNode}return null}function ce(e){for(var t=j(e),r=nt(e);r&&ur(r)&&V(r).position==="static";)r=nt(r);return r&&(H(r)==="html"||H(r)==="body"&&V(r).position==="static")?t:r||lr(e)||t}function je(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ae(e,t,r){return G(e,ye(t,r))}function pr(e,t,r){var n=ae(e,t,r);return n>r?r:n}function ht(){return{top:0,right:0,bottom:0,left:0}}function gt(e){return Object.assign({},ht(),e)}function yt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var vr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,gt(typeof t!="number"?t:yt(t,fe))};function dr(e){var t,r=e.state,n=e.name,a=e.options,o=r.elements.arrow,c=r.modifiersData.popperOffsets,i=N(r.placement),s=je(i),u=[B,L].indexOf(i)>=0,f=u?"height":"width";if(!(!o||!c)){var m=vr(a.padding,r),b=$e(o),p=s==="y"?C:B,x=s==="y"?S:L,y=r.rects.reference[f]+r.rects.reference[s]-c[s]-r.rects.popper[f],h=c[s]-r.rects.reference[s],w=ce(o),E=w?s==="y"?w.clientHeight||0:w.clientWidth||0:0,A=y/2-h/2,v=m[p],g=E-b[f]-m[x],l=E/2-b[f]/2+A,d=ae(v,l,g),O=s;r.modifiersData[n]=(t={},t[O]=d,t.centerOffset=d-l,t)}}function mr(e){var t=e.state,r=e.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=t.elements.popper.querySelector(a),!a)||mt(t.elements.popper,a)&&(t.elements.arrow=a))}const hr={name:"arrow",enabled:!0,phase:"main",fn:dr,effect:mr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ee(e){return e.split("-")[1]}var gr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function yr(e,t){var r=e.x,n=e.y,a=t.devicePixelRatio||1;return{x:Z(r*a)/a||0,y:Z(n*a)/a||0}}function at(e){var t,r=e.popper,n=e.popperRect,a=e.placement,o=e.variation,c=e.offsets,i=e.position,s=e.gpuAcceleration,u=e.adaptive,f=e.roundOffsets,m=e.isFixed,b=c.x,p=b===void 0?0:b,x=c.y,y=x===void 0?0:x,h=typeof f=="function"?f({x:p,y}):{x:p,y};p=h.x,y=h.y;var w=c.hasOwnProperty("x"),E=c.hasOwnProperty("y"),A=B,v=C,g=window;if(u){var l=ce(r),d="clientHeight",O="clientWidth";if(l===j(r)&&(l=F(r),V(l).position!=="static"&&i==="absolute"&&(d="scrollHeight",O="scrollWidth")),l=l,a===C||(a===B||a===L)&&o===oe){v=S;var T=m&&l===g&&g.visualViewport?g.visualViewport.height:l[d];y-=T-n.height,y*=s?1:-1}if(a===B||(a===C||a===S)&&o===oe){A=L;var k=m&&l===g&&g.visualViewport?g.visualViewport.width:l[O];p-=k-n.width,p*=s?1:-1}}var D=Object.assign({position:i},u&&gr),W=f===!0?yr({x:p,y},j(r)):{x:p,y};if(p=W.x,y=W.y,s){var P;return Object.assign({},D,(P={},P[v]=E?"0":"",P[A]=w?"0":"",P.transform=(g.devicePixelRatio||1)<=1?"translate("+p+"px, "+y+"px)":"translate3d("+p+"px, "+y+"px, 0)",P))}return Object.assign({},D,(t={},t[v]=E?y+"px":"",t[A]=w?p+"px":"",t.transform="",t))}function br(e){var t=e.state,r=e.options,n=r.gpuAcceleration,a=n===void 0?!0:n,o=r.adaptive,c=o===void 0?!0:o,i=r.roundOffsets,s=i===void 0?!0:i,u={placement:N(t.placement),variation:ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,at(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:c,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,at(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const wr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:br,data:{}};var he={passive:!0};function xr(e){var t=e.state,r=e.instance,n=e.options,a=n.scroll,o=a===void 0?!0:a,c=n.resize,i=c===void 0?!0:c,s=j(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&u.forEach(function(f){f.addEventListener("scroll",r.update,he)}),i&&s.addEventListener("resize",r.update,he),function(){o&&u.forEach(function(f){f.removeEventListener("scroll",r.update,he)}),i&&s.removeEventListener("resize",r.update,he)}}const Or={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:xr,data:{}};var Er={left:"right",right:"left",bottom:"top",top:"bottom"};function ge(e){return e.replace(/left|right|bottom|top/g,function(t){return Er[t]})}var Ar={start:"end",end:"start"};function it(e){return e.replace(/start|end/g,function(t){return Ar[t]})}function Re(e){var t=j(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Se(e){return _(F(e)).left+Re(e).scrollLeft}function Tr(e,t){var r=j(e),n=F(e),a=r.visualViewport,o=n.clientWidth,c=n.clientHeight,i=0,s=0;if(a){o=a.width,c=a.height;var u=dt();(u||!u&&t==="fixed")&&(i=a.offsetLeft,s=a.offsetTop)}return{width:o,height:c,x:i+Se(e),y:s}}function kr(e){var t,r=F(e),n=Re(e),a=(t=e.ownerDocument)==null?void 0:t.body,o=G(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),c=G(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),i=-n.scrollLeft+Se(e),s=-n.scrollTop;return V(a||r).direction==="rtl"&&(i+=G(r.clientWidth,a?a.clientWidth:0)-o),{width:o,height:c,x:i,y:s}}function Le(e){var t=V(e),r=t.overflow,n=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function bt(e){return["html","body","#document"].indexOf(H(e))>=0?e.ownerDocument.body:R(e)&&Le(e)?e:bt(be(e))}function ie(e,t){var r;t===void 0&&(t=[]);var n=bt(e),a=n===((r=e.ownerDocument)==null?void 0:r.body),o=j(n),c=a?[o].concat(o.visualViewport||[],Le(n)?n:[]):n,i=t.concat(c);return a?i:i.concat(ie(be(c)))}function Pe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Dr(e,t){var r=_(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function ot(e,t,r){return t===pt?Pe(Tr(e,r)):K(t)?Dr(t,r):Pe(kr(F(e)))}function Pr(e){var t=ie(be(e)),r=["absolute","fixed"].indexOf(V(e).position)>=0,n=r&&R(e)?ce(e):e;return K(n)?t.filter(function(a){return K(a)&&mt(a,n)&&H(a)!=="body"}):[]}function Cr(e,t,r,n){var a=t==="clippingParents"?Pr(e):[].concat(t),o=[].concat(a,[r]),c=o[0],i=o.reduce(function(s,u){var f=ot(e,u,n);return s.top=G(f.top,s.top),s.right=ye(f.right,s.right),s.bottom=ye(f.bottom,s.bottom),s.left=G(f.left,s.left),s},ot(e,c,n));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function wt(e){var t=e.reference,r=e.element,n=e.placement,a=n?N(n):null,o=n?ee(n):null,c=t.x+t.width/2-r.width/2,i=t.y+t.height/2-r.height/2,s;switch(a){case C:s={x:c,y:t.y-r.height};break;case S:s={x:c,y:t.y+t.height};break;case L:s={x:t.x+t.width,y:i};break;case B:s={x:t.x-r.width,y:i};break;default:s={x:t.x,y:t.y}}var u=a?je(a):null;if(u!=null){var f=u==="y"?"height":"width";switch(o){case Q:s[u]=s[u]-(t[f]/2-r[f]/2);break;case oe:s[u]=s[u]+(t[f]/2-r[f]/2);break}}return s}function se(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=n===void 0?e.placement:n,o=r.strategy,c=o===void 0?e.strategy:o,i=r.boundary,s=i===void 0?Kt:i,u=r.rootBoundary,f=u===void 0?pt:u,m=r.elementContext,b=m===void 0?ne:m,p=r.altBoundary,x=p===void 0?!1:p,y=r.padding,h=y===void 0?0:y,w=gt(typeof h!="number"?h:yt(h,fe)),E=b===ne?Jt:ne,A=e.rects.popper,v=e.elements[x?E:b],g=Cr(K(v)?v:v.contextElement||F(e.elements.popper),s,f,c),l=_(e.elements.reference),d=wt({reference:l,element:A,strategy:"absolute",placement:a}),O=Pe(Object.assign({},A,d)),T=b===ne?O:l,k={top:g.top-T.top+w.top,bottom:T.bottom-g.bottom+w.bottom,left:g.left-T.left+w.left,right:T.right-g.right+w.right},D=e.modifiersData.offset;if(b===ne&&D){var W=D[a];Object.keys(k).forEach(function(P){var q=[L,S].indexOf(P)>=0?1:-1,X=[C,S].indexOf(P)>=0?"y":"x";k[P]+=W[X]*q})}return k}function Br(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=r.boundary,o=r.rootBoundary,c=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,u=s===void 0?vt:s,f=ee(n),m=f?i?rt:rt.filter(function(x){return ee(x)===f}):fe,b=m.filter(function(x){return u.indexOf(x)>=0});b.length===0&&(b=m);var p=b.reduce(function(x,y){return x[y]=se(e,{placement:y,boundary:a,rootBoundary:o,padding:c})[N(y)],x},{});return Object.keys(p).sort(function(x,y){return p[x]-p[y]})}function $r(e){if(N(e)===Ce)return[];var t=ge(e);return[it(e),t,it(t)]}function jr(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var a=r.mainAxis,o=a===void 0?!0:a,c=r.altAxis,i=c===void 0?!0:c,s=r.fallbackPlacements,u=r.padding,f=r.boundary,m=r.rootBoundary,b=r.altBoundary,p=r.flipVariations,x=p===void 0?!0:p,y=r.allowedAutoPlacements,h=t.options.placement,w=N(h),E=w===h,A=s||(E||!x?[ge(h)]:$r(h)),v=[h].concat(A).reduce(function(J,I){return J.concat(N(I)===Ce?Br(t,{placement:I,boundary:f,rootBoundary:m,padding:u,flipVariations:x,allowedAutoPlacements:y}):I)},[]),g=t.rects.reference,l=t.rects.popper,d=new Map,O=!0,T=v[0],k=0;k<v.length;k++){var D=v[k],W=N(D),P=ee(D)===Q,q=[C,S].indexOf(W)>=0,X=q?"width":"height",$=se(t,{placement:D,boundary:f,rootBoundary:m,altBoundary:b,padding:u}),M=q?P?L:B:P?S:C;g[X]>l[X]&&(M=ge(M));var ue=ge(M),U=[];if(o&&U.push($[W]<=0),i&&U.push($[M]<=0,$[ue]<=0),U.every(function(J){return J})){T=D,O=!1;break}d.set(D,U)}if(O)for(var le=x?3:1,we=function(I){var re=v.find(function(ve){var Y=d.get(ve);if(Y)return Y.slice(0,I).every(function(xe){return xe})});if(re)return T=re,"break"},te=le;te>0;te--){var pe=we(te);if(pe==="break")break}t.placement!==T&&(t.modifiersData[n]._skip=!0,t.placement=T,t.reset=!0)}}const Rr={name:"flip",enabled:!0,phase:"main",fn:jr,requiresIfExists:["offset"],data:{_skip:!1}};function st(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function ft(e){return[C,L,S,B].some(function(t){return e[t]>=0})}function Sr(e){var t=e.state,r=e.name,n=t.rects.reference,a=t.rects.popper,o=t.modifiersData.preventOverflow,c=se(t,{elementContext:"reference"}),i=se(t,{altBoundary:!0}),s=st(c,n),u=st(i,a,o),f=ft(s),m=ft(u);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":m})}const Lr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Sr};function Wr(e,t,r){var n=N(e),a=[B,C].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,c=o[0],i=o[1];return c=c||0,i=(i||0)*a,[B,L].indexOf(n)>=0?{x:i,y:c}:{x:c,y:i}}function Mr(e){var t=e.state,r=e.options,n=e.name,a=r.offset,o=a===void 0?[0,0]:a,c=vt.reduce(function(f,m){return f[m]=Wr(m,t.rects,o),f},{}),i=c[t.placement],s=i.x,u=i.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=u),t.modifiersData[n]=c}const Nr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Mr};function Hr(e){var t=e.state,r=e.name;t.modifiersData[r]=wt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Vr={name:"popperOffsets",enabled:!0,phase:"read",fn:Hr,data:{}};function Ir(e){return e==="x"?"y":"x"}function Fr(e){var t=e.state,r=e.options,n=e.name,a=r.mainAxis,o=a===void 0?!0:a,c=r.altAxis,i=c===void 0?!1:c,s=r.boundary,u=r.rootBoundary,f=r.altBoundary,m=r.padding,b=r.tether,p=b===void 0?!0:b,x=r.tetherOffset,y=x===void 0?0:x,h=se(t,{boundary:s,rootBoundary:u,padding:m,altBoundary:f}),w=N(t.placement),E=ee(t.placement),A=!E,v=je(w),g=Ir(v),l=t.modifiersData.popperOffsets,d=t.rects.reference,O=t.rects.popper,T=typeof y=="function"?y(Object.assign({},t.rects,{placement:t.placement})):y,k=typeof T=="number"?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,W={x:0,y:0};if(l){if(o){var P,q=v==="y"?C:B,X=v==="y"?S:L,$=v==="y"?"height":"width",M=l[v],ue=M+h[q],U=M-h[X],le=p?-O[$]/2:0,we=E===Q?d[$]:O[$],te=E===Q?-O[$]:-d[$],pe=t.elements.arrow,J=p&&pe?$e(pe):{width:0,height:0},I=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ht(),re=I[q],ve=I[X],Y=ae(0,d[$],J[$]),xe=A?d[$]/2-le-Y-re-k.mainAxis:we-Y-re-k.mainAxis,xt=A?-d[$]/2+le+Y+ve+k.mainAxis:te+Y+ve+k.mainAxis,Oe=t.elements.arrow&&ce(t.elements.arrow),Ot=Oe?v==="y"?Oe.clientTop||0:Oe.clientLeft||0:0,We=(P=D==null?void 0:D[v])!=null?P:0,Et=M+xe-We-Ot,At=M+xt-We,Me=ae(p?ye(ue,Et):ue,M,p?G(U,At):U);l[v]=Me,W[v]=Me-M}if(i){var Ne,Tt=v==="x"?C:B,kt=v==="x"?S:L,z=l[g],de=g==="y"?"height":"width",He=z+h[Tt],Ve=z-h[kt],Ee=[C,B].indexOf(w)!==-1,Ie=(Ne=D==null?void 0:D[g])!=null?Ne:0,Fe=Ee?He:z-d[de]-O[de]-Ie+k.altAxis,qe=Ee?z+d[de]+O[de]-Ie-k.altAxis:Ve,Xe=p&&Ee?pr(Fe,z,qe):ae(p?Fe:He,z,p?qe:Ve);l[g]=Xe,W[g]=Xe-z}t.modifiersData[n]=W}}const qr={name:"preventOverflow",enabled:!0,phase:"main",fn:Fr,requiresIfExists:["offset"]};function Xr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ur(e){return e===j(e)||!R(e)?Re(e):Xr(e)}function Yr(e){var t=e.getBoundingClientRect(),r=Z(t.width)/e.offsetWidth||1,n=Z(t.height)/e.offsetHeight||1;return r!==1||n!==1}function zr(e,t,r){r===void 0&&(r=!1);var n=R(t),a=R(t)&&Yr(t),o=F(t),c=_(e,a,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((H(t)!=="body"||Le(o))&&(i=Ur(t)),R(t)?(s=_(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):o&&(s.x=Se(o))),{x:c.left+i.scrollLeft-s.x,y:c.top+i.scrollTop-s.y,width:c.width,height:c.height}}function Gr(e){var t=new Map,r=new Set,n=[];e.forEach(function(o){t.set(o.name,o)});function a(o){r.add(o.name);var c=[].concat(o.requires||[],o.requiresIfExists||[]);c.forEach(function(i){if(!r.has(i)){var s=t.get(i);s&&a(s)}}),n.push(o)}return e.forEach(function(o){r.has(o.name)||a(o)}),n}function Kr(e){var t=Gr(e);return or.reduce(function(r,n){return r.concat(t.filter(function(a){return a.phase===n}))},[])}function Jr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Qr(e){var t=e.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var ct={placement:"bottom",modifiers:[],strategy:"absolute"};function ut(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Zr(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,a=t.defaultOptions,o=a===void 0?ct:a;return function(i,s,u){u===void 0&&(u=o);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},ct,o),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},m=[],b=!1,p={state:f,setOptions:function(w){var E=typeof w=="function"?w(f.options):w;y(),f.options=Object.assign({},o,f.options,E),f.scrollParents={reference:K(i)?ie(i):i.contextElement?ie(i.contextElement):[],popper:ie(s)};var A=Kr(Qr([].concat(n,f.options.modifiers)));return f.orderedModifiers=A.filter(function(v){return v.enabled}),x(),p.update()},forceUpdate:function(){if(!b){var w=f.elements,E=w.reference,A=w.popper;if(ut(E,A)){f.rects={reference:zr(E,ce(A),f.options.strategy==="fixed"),popper:$e(A)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(k){return f.modifiersData[k.name]=Object.assign({},k.data)});for(var v=0;v<f.orderedModifiers.length;v++){if(f.reset===!0){f.reset=!1,v=-1;continue}var g=f.orderedModifiers[v],l=g.fn,d=g.options,O=d===void 0?{}:d,T=g.name;typeof l=="function"&&(f=l({state:f,options:O,name:T,instance:p})||f)}}}},update:Jr(function(){return new Promise(function(h){p.forceUpdate(),h(f)})}),destroy:function(){y(),b=!0}};if(!ut(i,s))return p;p.setOptions(u).then(function(h){!b&&u.onFirstUpdate&&u.onFirstUpdate(h)});function x(){f.orderedModifiers.forEach(function(h){var w=h.name,E=h.options,A=E===void 0?{}:E,v=h.effect;if(typeof v=="function"){var g=v({state:f,name:w,instance:p,options:A}),l=function(){};m.push(g||l)}})}function y(){m.forEach(function(h){return h()}),m=[]}return p}}var _r=[Or,Vr,wr,cr,Nr,Rr,qr,hr,Lr],en=Zr({defaultModifiers:_r});const tn=(e,t)=>{const r=n=>{e.value&&n.target&&(e.value.contains(n.target)||t(n))};Dt(()=>{document.addEventListener("click",r)}),lt(()=>{document.removeEventListener("click",r)})},an=Pt({name:"XTooltip",__name:"Tooltip",props:{content:{},trigger:{default:"hover"},placement:{default:"bottom"},manual:{type:Boolean},popperOptions:{},transition:{default:"fade"},openDelay:{default:0},closeDelay:{default:0}},emits:["visible-change","click-outside"],setup(e,{expose:t,emit:r}){const n=e,a=r,o=me(!1),c=me(),i=me(),s=me();let u=null,f=Ue({}),m=Ue({}),b=0,p=0;const x=Ct(()=>({placement:n.placement,modifiers:[{name:"offset",options:{offset:[0,9]}}],...n.popperOptions})),y=()=>{o.value?g():v()},h=()=>{b++,console.log("openTimes",b),o.value=!0,a("visible-change",!0)},w=()=>{p++,console.log("closeTimes",p),o.value=!1,a("visible-change",!1)},E=tt(h,n.openDelay),A=tt(w,n.closeDelay),v=()=>{A.cancel(),E()},g=()=>{E.cancel(),A()},l=()=>{n.trigger==="hover"?(f.mouseenter=v,m.mouseleave=g):n.trigger==="click"&&(f.click=y)};return tn(s,()=>{n.trigger==="click"&&o.value&&!n.manual&&g(),o.value&&a("click-outside",!0)}),n.manual||l(),Ae(()=>n.manual,d=>{d?(f={},m={}):l()}),Ae(()=>n.trigger,(d,O)=>{d!==O&&(f={},m={},l())}),Ae(o,d=>{d&&(i.value&&c.value?u=en(i.value,c.value,x.value):u==null||u.destroy())},{flush:"post"}),lt(()=>{u==null||u.destroy()}),t({show:v,hide:g}),(d,O)=>(Ye(),ze("div",Je({class:"x-tooltip"},Qe(Ze(m),!0),{ref_key:"popperContainerNode",ref:s}),[Ge("div",Je({class:"x-tooltip__trigger",ref_key:"triggerNode",ref:i},Qe(Ze(f),!0)),[Ke(d.$slots,"default")],16),Bt(Lt,{name:"fade"},{default:$t(()=>[o.value?(Ye(),ze("div",{key:0,class:"x-tooltip__popper",ref_key:"popperNode",ref:c},[Ke(d.$slots,"content",{},()=>[jt(Rt(d.content),1)]),O[0]||(O[0]=Ge("div",{id:"arrow","data-popper-arrow":""},null,-1))],512)):St("",!0)]),_:3})],16))}});export{an as _};
