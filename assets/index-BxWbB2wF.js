(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function lS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var lh={exports:{}},No={};var I0;function cS(){if(I0)return No;I0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return No.Fragment=t,No.jsx=i,No.jsxs=i,No}var F0;function uS(){return F0||(F0=1,lh.exports=cS()),lh.exports}var S=uS(),ch={exports:{}},se={};var H0;function fS(){if(H0)return se;H0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function M(z){return z===null||typeof z!="object"?null:(z=x&&z[x]||z["@@iterator"],typeof z=="function"?z:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function v(z,st,Et){this.props=z,this.context=st,this.refs=E,this.updater=Et||T}v.prototype.isReactComponent={},v.prototype.setState=function(z,st){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,st,"setState")},v.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function H(){}H.prototype=v.prototype;function N(z,st,Et){this.props=z,this.context=st,this.refs=E,this.updater=Et||T}var C=N.prototype=new H;C.constructor=N,w(C,v.prototype),C.isPureReactComponent=!0;var G=Array.isArray;function k(){}var B={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function D(z,st,Et){var Ct=Et.ref;return{$$typeof:r,type:z,key:st,ref:Ct!==void 0?Ct:null,props:Et}}function U(z,st){return D(z.type,st,z.props)}function I(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function ot(z){var st={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Et){return st[Et]})}var $=/\/+/g;function L(z,st){return typeof z=="object"&&z!==null&&z.key!=null?ot(""+z.key):st.toString(36)}function ct(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(k,k):(z.status="pending",z.then(function(st){z.status==="pending"&&(z.status="fulfilled",z.value=st)},function(st){z.status==="pending"&&(z.status="rejected",z.reason=st)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function O(z,st,Et,Ct,tt){var vt=typeof z;(vt==="undefined"||vt==="boolean")&&(z=null);var _t=!1;if(z===null)_t=!0;else switch(vt){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(z.$$typeof){case r:case t:_t=!0;break;case g:return _t=z._init,O(_t(z._payload),st,Et,Ct,tt)}}if(_t)return tt=tt(z),_t=Ct===""?"."+L(z,0):Ct,G(tt)?(Et="",_t!=null&&(Et=_t.replace($,"$&/")+"/"),O(tt,st,Et,"",function(ne){return ne})):tt!=null&&(I(tt)&&(tt=U(tt,Et+(tt.key==null||z&&z.key===tt.key?"":(""+tt.key).replace($,"$&/")+"/")+_t)),st.push(tt)),1;_t=0;var Ht=Ct===""?".":Ct+":";if(G(z))for(var Pt=0;Pt<z.length;Pt++)Ct=z[Pt],vt=Ht+L(Ct,Pt),_t+=O(Ct,st,Et,vt,tt);else if(Pt=M(z),typeof Pt=="function")for(z=Pt.call(z),Pt=0;!(Ct=z.next()).done;)Ct=Ct.value,vt=Ht+L(Ct,Pt++),_t+=O(Ct,st,Et,vt,tt);else if(vt==="object"){if(typeof z.then=="function")return O(ct(z),st,Et,Ct,tt);throw st=String(z),Error("Objects are not valid as a React child (found: "+(st==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":st)+"). If you meant to render a collection of children, use an array instead.")}return _t}function X(z,st,Et){if(z==null)return z;var Ct=[],tt=0;return O(z,Ct,"","",function(vt){return st.call(Et,vt,tt++)}),Ct}function Z(z){if(z._status===-1){var st=z._result;st=st(),st.then(function(Et){(z._status===0||z._status===-1)&&(z._status=1,z._result=Et)},function(Et){(z._status===0||z._status===-1)&&(z._status=2,z._result=Et)}),z._status===-1&&(z._status=0,z._result=st)}if(z._status===1)return z._result.default;throw z._result}var yt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var st=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(st))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Tt={map:X,forEach:function(z,st,Et){X(z,function(){st.apply(this,arguments)},Et)},count:function(z){var st=0;return X(z,function(){st++}),st},toArray:function(z){return X(z,function(st){return st})||[]},only:function(z){if(!I(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return se.Activity=_,se.Children=Tt,se.Component=v,se.Fragment=i,se.Profiler=l,se.PureComponent=N,se.StrictMode=s,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,se.__COMPILER_RUNTIME={__proto__:null,c:function(z){return B.H.useMemoCache(z)}},se.cache=function(z){return function(){return z.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(z,st,Et){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Ct=w({},z.props),tt=z.key;if(st!=null)for(vt in st.key!==void 0&&(tt=""+st.key),st)!W.call(st,vt)||vt==="key"||vt==="__self"||vt==="__source"||vt==="ref"&&st.ref===void 0||(Ct[vt]=st[vt]);var vt=arguments.length-2;if(vt===1)Ct.children=Et;else if(1<vt){for(var _t=Array(vt),Ht=0;Ht<vt;Ht++)_t[Ht]=arguments[Ht+2];Ct.children=_t}return D(z.type,tt,Ct)},se.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},se.createElement=function(z,st,Et){var Ct,tt={},vt=null;if(st!=null)for(Ct in st.key!==void 0&&(vt=""+st.key),st)W.call(st,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(tt[Ct]=st[Ct]);var _t=arguments.length-2;if(_t===1)tt.children=Et;else if(1<_t){for(var Ht=Array(_t),Pt=0;Pt<_t;Pt++)Ht[Pt]=arguments[Pt+2];tt.children=Ht}if(z&&z.defaultProps)for(Ct in _t=z.defaultProps,_t)tt[Ct]===void 0&&(tt[Ct]=_t[Ct]);return D(z,vt,tt)},se.createRef=function(){return{current:null}},se.forwardRef=function(z){return{$$typeof:d,render:z}},se.isValidElement=I,se.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:Z}},se.memo=function(z,st){return{$$typeof:p,type:z,compare:st===void 0?null:st}},se.startTransition=function(z){var st=B.T,Et={};B.T=Et;try{var Ct=z(),tt=B.S;tt!==null&&tt(Et,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(k,yt)}catch(vt){yt(vt)}finally{st!==null&&Et.types!==null&&(st.types=Et.types),B.T=st}},se.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},se.use=function(z){return B.H.use(z)},se.useActionState=function(z,st,Et){return B.H.useActionState(z,st,Et)},se.useCallback=function(z,st){return B.H.useCallback(z,st)},se.useContext=function(z){return B.H.useContext(z)},se.useDebugValue=function(){},se.useDeferredValue=function(z,st){return B.H.useDeferredValue(z,st)},se.useEffect=function(z,st){return B.H.useEffect(z,st)},se.useEffectEvent=function(z){return B.H.useEffectEvent(z)},se.useId=function(){return B.H.useId()},se.useImperativeHandle=function(z,st,Et){return B.H.useImperativeHandle(z,st,Et)},se.useInsertionEffect=function(z,st){return B.H.useInsertionEffect(z,st)},se.useLayoutEffect=function(z,st){return B.H.useLayoutEffect(z,st)},se.useMemo=function(z,st){return B.H.useMemo(z,st)},se.useOptimistic=function(z,st){return B.H.useOptimistic(z,st)},se.useReducer=function(z,st,Et){return B.H.useReducer(z,st,Et)},se.useRef=function(z){return B.H.useRef(z)},se.useState=function(z){return B.H.useState(z)},se.useSyncExternalStore=function(z,st,Et){return B.H.useSyncExternalStore(z,st,Et)},se.useTransition=function(){return B.H.useTransition()},se.version="19.2.7",se}var G0;function Hd(){return G0||(G0=1,ch.exports=fS()),ch.exports}var we=Hd();const J_=lS(we);var uh={exports:{}},Lo={},fh={exports:{}},hh={};var V0;function hS(){return V0||(V0=1,(function(r){function t(O,X){var Z=O.length;O.push(X);t:for(;0<Z;){var yt=Z-1>>>1,Tt=O[yt];if(0<l(Tt,X))O[yt]=X,O[Z]=Tt,Z=yt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var X=O[0],Z=O.pop();if(Z!==X){O[0]=Z;t:for(var yt=0,Tt=O.length,z=Tt>>>1;yt<z;){var st=2*(yt+1)-1,Et=O[st],Ct=st+1,tt=O[Ct];if(0>l(Et,Z))Ct<Tt&&0>l(tt,Et)?(O[yt]=tt,O[Ct]=Z,yt=Ct):(O[yt]=Et,O[st]=Z,yt=st);else if(Ct<Tt&&0>l(tt,Z))O[yt]=tt,O[Ct]=Z,yt=Ct;else break t}}return X}function l(O,X){var Z=O.sortIndex-X.sortIndex;return Z!==0?Z:O.id-X.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,_=null,x=3,M=!1,T=!1,w=!1,E=!1,v=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function C(O){for(var X=i(p);X!==null;){if(X.callback===null)s(p);else if(X.startTime<=O)s(p),X.sortIndex=X.expirationTime,t(m,X);else break;X=i(p)}}function G(O){if(w=!1,C(O),!T)if(i(m)!==null)T=!0,k||(k=!0,ot());else{var X=i(p);X!==null&&ct(G,X.startTime-O)}}var k=!1,B=-1,W=5,D=-1;function U(){return E?!0:!(r.unstable_now()-D<W)}function I(){if(E=!1,k){var O=r.unstable_now();D=O;var X=!0;try{t:{T=!1,w&&(w=!1,H(B),B=-1),M=!0;var Z=x;try{e:{for(C(O),_=i(m);_!==null&&!(_.expirationTime>O&&U());){var yt=_.callback;if(typeof yt=="function"){_.callback=null,x=_.priorityLevel;var Tt=yt(_.expirationTime<=O);if(O=r.unstable_now(),typeof Tt=="function"){_.callback=Tt,C(O),X=!0;break e}_===i(m)&&s(m),C(O)}else s(m);_=i(m)}if(_!==null)X=!0;else{var z=i(p);z!==null&&ct(G,z.startTime-O),X=!1}}break t}finally{_=null,x=Z,M=!1}X=void 0}}finally{X?ot():k=!1}}}var ot;if(typeof N=="function")ot=function(){N(I)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,L=$.port2;$.port1.onmessage=I,ot=function(){L.postMessage(null)}}else ot=function(){v(I,0)};function ct(O,X){B=v(function(){O(r.unstable_now())},X)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(O){switch(x){case 1:case 2:case 3:var X=3;break;default:X=x}var Z=x;x=X;try{return O()}finally{x=Z}},r.unstable_requestPaint=function(){E=!0},r.unstable_runWithPriority=function(O,X){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Z=x;x=O;try{return X()}finally{x=Z}},r.unstable_scheduleCallback=function(O,X,Z){var yt=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?yt+Z:yt):Z=yt,O){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=Z+Tt,O={id:g++,callback:X,priorityLevel:O,startTime:Z,expirationTime:Tt,sortIndex:-1},Z>yt?(O.sortIndex=Z,t(p,O),i(m)===null&&O===i(p)&&(w?(H(B),B=-1):w=!0,ct(G,Z-yt))):(O.sortIndex=Tt,t(m,O),T||M||(T=!0,k||(k=!0,ot()))),O},r.unstable_shouldYield=U,r.unstable_wrapCallback=function(O){var X=x;return function(){var Z=x;x=X;try{return O.apply(this,arguments)}finally{x=Z}}}})(hh)),hh}var k0;function dS(){return k0||(k0=1,fh.exports=hS()),fh.exports}var dh={exports:{}},Rn={};var j0;function pS(){if(j0)return Rn;j0=1;var r=Hd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Rn.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Rn.requestFormReset=function(m){s.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Rn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Rn.version="19.2.7",Rn}var X0;function mS(){if(X0)return dh.exports;X0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),dh.exports=pS(),dh.exports}var q0;function gS(){if(q0)return Lo;q0=1;var r=dS(),t=Hd(),i=mS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var y=!1,A=u.child;A;){if(A===a){y=!0,a=u,o=h;break}if(A===o){y=!0,o=u,a=h;break}A=A.sibling}if(!y){for(A=h.child;A;){if(A===a){y=!0,a=h,o=u;break}if(A===o){y=!0,o=h,a=u;break}A=A.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),N=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function ot(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function L(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case v:return"Profiler";case E:return"StrictMode";case G:return"Suspense";case k:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case N:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:L(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return L(e(n))}catch{}}return null}var ct=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},yt=[],Tt=-1;function z(e){return{current:e}}function st(e){0>Tt||(e.current=yt[Tt],yt[Tt]=null,Tt--)}function Et(e,n){Tt++,yt[Tt]=e.current,e.current=n}var Ct=z(null),tt=z(null),vt=z(null),_t=z(null);function Ht(e,n){switch(Et(vt,n),Et(tt,e),Et(Ct,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?o0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=o0(n),e=l0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}st(Ct),Et(Ct,e)}function Pt(){st(Ct),st(tt),st(vt)}function ne(e){e.memoizedState!==null&&Et(_t,e);var n=Ct.current,a=l0(n,e.type);n!==a&&(Et(tt,e),Et(Ct,a))}function Xe(e){tt.current===e&&(st(Ct),st(tt)),_t.current===e&&(st(_t),Ro._currentValue=Z)}var de,V;function Te(e){if(de===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);de=n&&n[1]||"",V=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+de+e+V}var $t=!1;function Me(e,n){if(!e||$t)return"";$t=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ut){var at=ut}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(ut){at=ut}e.call(mt.prototype)}}else{try{throw Error()}catch(ut){at=ut}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ut){if(ut&&at&&typeof ut.stack=="string")return[ut.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),y=h[0],A=h[1];if(y&&A){var F=y.split(`
`),nt=A.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===nt.length)for(o=F.length-1,u=nt.length-1;1<=o&&0<=u&&F[o]!==nt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==nt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==nt[u]){var ht=`
`+F[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{$t=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Te(a):""}function Qt(e,n){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te("Lazy");case 13:return e.child!==n&&n!==null?Te("Suspense Fallback"):Te("Suspense");case 19:return Te("SuspenseList");case 0:case 15:return Me(e.type,!1);case 11:return Me(e.type.render,!1);case 1:return Me(e.type,!0);case 31:return Te("Activity");default:return""}}function Ve(e){try{var n="",a=null;do n+=Qt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var It=Object.prototype.hasOwnProperty,re=r.unstable_scheduleCallback,$e=r.unstable_cancelCallback,Qe=r.unstable_shouldYield,P=r.unstable_requestPaint,b=r.unstable_now,it=r.unstable_getCurrentPriorityLevel,dt=r.unstable_ImmediatePriority,St=r.unstable_UserBlockingPriority,ft=r.unstable_NormalPriority,Yt=r.unstable_LowPriority,Rt=r.unstable_IdlePriority,Xt=r.log,qt=r.unstable_setDisableYieldValue,bt=null,wt=null;function Zt(e){if(typeof Xt=="function"&&qt(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(bt,e)}catch{}}var zt=Math.clz32?Math.clz32:q,Ut=Math.log,oe=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(Ut(e)/oe|0)|0}var At=256,Dt=262144,Bt=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?u=Mt(o):(y&=A,y!==0?u=Mt(y):a||(a=A&~e,a!==0&&(u=Mt(a))))):(A=o&~h,A!==0?u=Mt(A):y!==0?u=Mt(y):a||(a=o&~e,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Ft(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pe(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function be(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ii(e,n,a,o,u,h){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,F=e.expirationTimes,nt=e.hiddenUpdates;for(a=y&~a;0<a;){var ht=31-zt(a),mt=1<<ht;A[ht]=0,F[ht]=-1;var at=nt[ht];if(at!==null)for(nt[ht]=null,ht=0;ht<at.length;ht++){var ut=at[ht];ut!==null&&(ut.lane&=-536870913)}a&=~mt}o!==0&&Gr(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(y&~n))}function Gr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function bi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-zt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Us(e,n){var a=n&-n;return a=(a&42)!==0?1:Ns(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ns(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ls(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qa(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:U0(e.type))}function Vr(e,n){var a=X.p;try{return X.p=e,n()}finally{X.p=a}}var Xn=Math.random().toString(36).slice(2),ln="__reactFiber$"+Xn,Sn="__reactProps$"+Xn,pa="__reactContainer$"+Xn,kr="__reactEvents$"+Xn,eu="__reactListeners$"+Xn,nu="__reactHandles$"+Xn,rl="__reactResources$"+Xn,Ka="__reactMarker$"+Xn;function R(e){delete e[ln],delete e[Sn],delete e[kr],delete e[eu],delete e[nu]}function Y(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[pa]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=m0(e);e!==null;){if(a=e[ln])return a;e=m0(e)}return n}e=a,a=e.parentNode}return null}function rt(e){if(e=e[ln]||e[pa]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function lt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Q(e){var n=e[rl];return n||(n=e[rl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function xt(e){e[Ka]=!0}var Nt=new Set,Vt={};function Ot(e,n){Kt(e,n),Kt(e+"Capture",n)}function Kt(e,n){for(Vt[e]=n,e=0;e<n.length;e++)Nt.add(n[e])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},he={};function Le(e){return It.call(he,e)?!0:It.call(Jt,e)?!1:ie.test(e)?he[e]=!0:(Jt[e]=!0,!1)}function ke(e,n,a){if(Le(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Oe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function pe(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function kt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ae(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,h.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Mn(e){if(!e._valueTracker){var n=qe(e)?"checked":"value";e._valueTracker=Ae(e,n,""+e[n])}}function Hi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=qe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function vn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ja=/[\n"\\]/g;function ve(e){return e.replace(Ja,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Cn(e,n,a,o,u,h,y,A){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+kt(n)):e.value!==""+kt(n)&&(e.value=""+kt(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?pn(e,y,kt(n)):a!=null?pn(e,y,kt(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+kt(A):e.removeAttribute("name")}function Ln(e,n,a,o,u,h,y,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Mn(e);return}a=a!=null?""+kt(a):"",n=n!=null?""+kt(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Mn(e)}function pn(e,n,a){n==="number"&&vn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function sn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+kt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Os(e,n,a){if(n!=null&&(n=""+kt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+kt(a):""}function Ai(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ct(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=kt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Mn(e)}function Ps(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ix=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ap(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||ix.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function sp(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&ap(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&ap(e,h,n[h])}function iu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ax=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ol(e){return sx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gi(){}var au=null;function su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zs=null,Bs=null;function rp(e){var n=rt(e);if(n&&(e=n.stateNode)){var a=e[Sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Cn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Sn]||null;if(!u)throw Error(s(90));Cn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Hi(o)}break t;case"textarea":Os(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&sn(e,!!a.multiple,n,!1)}}}var ru=!1;function op(e,n,a){if(ru)return e(n,a);ru=!0;try{var o=e(n);return o}finally{if(ru=!1,(zs!==null||Bs!==null)&&(Yl(),zs&&(n=zs,e=Bs,Bs=zs=null,rp(n),e)))for(n=0;n<e.length;n++)rp(e[n])}}function jr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Sn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=!1;if(Vi)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){ou=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{ou=!1}var ma=null,lu=null,ll=null;function lp(){if(ll)return ll;var e,n=lu,a=n.length,o,u="value"in ma?ma.value:ma.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[h-o];o++);return ll=u.slice(e,1<o?1-o:void 0)}function cl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ul(){return!0}function cp(){return!1}function zn(e){function n(a,o,u,h,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ul:cp,this.isPropagationStopped=cp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),n}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=zn($a),qr=_({},$a,{view:0,detail:0}),rx=zn(qr),cu,uu,Wr,hl=_({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wr&&(Wr&&e.type==="mousemove"?(cu=e.screenX-Wr.screenX,uu=e.screenY-Wr.screenY):uu=cu=0,Wr=e),cu)},movementY:function(e){return"movementY"in e?e.movementY:uu}}),up=zn(hl),ox=_({},hl,{dataTransfer:0}),lx=zn(ox),cx=_({},qr,{relatedTarget:0}),fu=zn(cx),ux=_({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),fx=zn(ux),hx=_({},$a,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dx=zn(hx),px=_({},$a,{data:0}),fp=zn(px),mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_x={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=_x[e])?!!n[e]:!1}function hu(){return vx}var xx=_({},qr,{key:function(e){if(e.key){var n=mx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=cl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(e){return e.type==="keypress"?cl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yx=zn(xx),Sx=_({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=zn(Sx),Mx=_({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),Ex=zn(Mx),Tx=_({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),bx=zn(Tx),Ax=_({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cx=zn(Ax),Rx=_({},$a,{newState:0,oldState:0}),wx=zn(Rx),Dx=[9,13,27,32],du=Vi&&"CompositionEvent"in window,Yr=null;Vi&&"documentMode"in document&&(Yr=document.documentMode);var Ux=Vi&&"TextEvent"in window&&!Yr,dp=Vi&&(!du||Yr&&8<Yr&&11>=Yr),pp=" ",mp=!1;function gp(e,n){switch(e){case"keyup":return Dx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _p(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Is=!1;function Nx(e,n){switch(e){case"compositionend":return _p(n);case"keypress":return n.which!==32?null:(mp=!0,pp);case"textInput":return e=n.data,e===pp&&mp?null:e;default:return null}}function Lx(e,n){if(Is)return e==="compositionend"||!du&&gp(e,n)?(e=lp(),ll=lu=ma=null,Is=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dp&&n.locale!=="ko"?null:n.data;default:return null}}var Ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ox[e.type]:n==="textarea"}function xp(e,n,a,o){zs?Bs?Bs.push(o):Bs=[o]:zs=o,n=ec(n,"onChange"),0<n.length&&(a=new fl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Zr=null,Qr=null;function Px(e){e0(e,0)}function dl(e){var n=lt(e);if(Hi(n))return e}function yp(e,n){if(e==="change")return n}var Sp=!1;if(Vi){var pu;if(Vi){var mu="oninput"in document;if(!mu){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),mu=typeof Mp.oninput=="function"}pu=mu}else pu=!1;Sp=pu&&(!document.documentMode||9<document.documentMode)}function Ep(){Zr&&(Zr.detachEvent("onpropertychange",Tp),Qr=Zr=null)}function Tp(e){if(e.propertyName==="value"&&dl(Qr)){var n=[];xp(n,Qr,e,su(e)),op(Px,n)}}function zx(e,n,a){e==="focusin"?(Ep(),Zr=n,Qr=a,Zr.attachEvent("onpropertychange",Tp)):e==="focusout"&&Ep()}function Bx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl(Qr)}function Ix(e,n){if(e==="click")return dl(n)}function Fx(e,n){if(e==="input"||e==="change")return dl(n)}function Hx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:Hx;function Kr(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!It.call(n,u)||!qn(e[u],n[u]))return!1}return!0}function bp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ap(e,n){var a=bp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=bp(a)}}function Cp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Cp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Rp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=vn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=vn(e.document)}return n}function gu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Gx=Vi&&"documentMode"in document&&11>=document.documentMode,Fs=null,_u=null,Jr=null,vu=!1;function wp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vu||Fs==null||Fs!==vn(o)||(o=Fs,"selectionStart"in o&&gu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Jr&&Kr(Jr,o)||(Jr=o,o=ec(_u,"onSelect"),0<o.length&&(n=new fl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Fs)))}function ts(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Hs={animationend:ts("Animation","AnimationEnd"),animationiteration:ts("Animation","AnimationIteration"),animationstart:ts("Animation","AnimationStart"),transitionrun:ts("Transition","TransitionRun"),transitionstart:ts("Transition","TransitionStart"),transitioncancel:ts("Transition","TransitionCancel"),transitionend:ts("Transition","TransitionEnd")},xu={},Dp={};Vi&&(Dp=document.createElement("div").style,"AnimationEvent"in window||(delete Hs.animationend.animation,delete Hs.animationiteration.animation,delete Hs.animationstart.animation),"TransitionEvent"in window||delete Hs.transitionend.transition);function es(e){if(xu[e])return xu[e];if(!Hs[e])return e;var n=Hs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Dp)return xu[e]=n[a];return e}var Up=es("animationend"),Np=es("animationiteration"),Lp=es("animationstart"),Vx=es("transitionrun"),kx=es("transitionstart"),jx=es("transitioncancel"),Op=es("transitionend"),Pp=new Map,yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yu.push("scrollEnd");function gi(e,n){Pp.set(e,n),Ot(n,[e])}var pl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ai=[],Gs=0,Su=0;function ml(){for(var e=Gs,n=Su=Gs=0;n<e;){var a=ai[n];ai[n++]=null;var o=ai[n];ai[n++]=null;var u=ai[n];ai[n++]=null;var h=ai[n];if(ai[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}h!==0&&zp(a,u,h)}}function gl(e,n,a,o){ai[Gs++]=e,ai[Gs++]=n,ai[Gs++]=a,ai[Gs++]=o,Su|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Mu(e,n,a,o){return gl(e,n,a,o),_l(e)}function ns(e,n){return gl(e,null,null,n),_l(e)}function zp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-zt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function _l(e){if(50<So)throw So=0,Nf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Vs={};function Xx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(e,n,a,o){return new Xx(e,n,a,o)}function Eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ki(e,n){var a=e.alternate;return a===null?(a=Wn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Bp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function vl(e,n,a,o,u,h){var y=0;if(o=e,typeof e=="function")Eu(e)&&(y=1);else if(typeof e=="string")y=Qy(e,a,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Wn(31,a,n,u),e.elementType=D,e.lanes=h,e;case w:return is(a.children,u,h,n);case E:y=8,u|=24;break;case v:return e=Wn(12,a,n,u|2),e.elementType=v,e.lanes=h,e;case G:return e=Wn(13,a,n,u),e.elementType=G,e.lanes=h,e;case k:return e=Wn(19,a,n,u),e.elementType=k,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:y=10;break t;case H:y=9;break t;case C:y=11;break t;case B:y=14;break t;case W:y=16,o=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Wn(y,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function is(e,n,a,o){return e=Wn(7,e,o,n),e.lanes=a,e}function Tu(e,n,a){return e=Wn(6,e,null,n),e.lanes=a,e}function Ip(e){var n=Wn(18,null,null,0);return n.stateNode=e,n}function bu(e,n,a){return n=Wn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Fp=new WeakMap;function si(e,n){if(typeof e=="object"&&e!==null){var a=Fp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ve(n)},Fp.set(e,n),n)}return{value:e,source:n,stack:Ve(n)}}var ks=[],js=0,xl=null,$r=0,ri=[],oi=0,ga=null,Ci=1,Ri="";function ji(e,n){ks[js++]=$r,ks[js++]=xl,xl=e,$r=n}function Hp(e,n,a){ri[oi++]=Ci,ri[oi++]=Ri,ri[oi++]=ga,ga=e;var o=Ci;e=Ri;var u=32-zt(o)-1;o&=~(1<<u),a+=1;var h=32-zt(n)+u;if(30<h){var y=u-u%5;h=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Ci=1<<32-zt(n)+u|a<<u|o,Ri=h+e}else Ci=1<<h|a<<u|o,Ri=e}function Au(e){e.return!==null&&(ji(e,1),Hp(e,1,0))}function Cu(e){for(;e===xl;)xl=ks[--js],ks[js]=null,$r=ks[--js],ks[js]=null;for(;e===ga;)ga=ri[--oi],ri[oi]=null,Ri=ri[--oi],ri[oi]=null,Ci=ri[--oi],ri[oi]=null}function Gp(e,n){ri[oi++]=Ci,ri[oi++]=Ri,ri[oi++]=ga,Ci=n.id,Ri=n.overflow,ga=e}var En=null,We=null,Ee=!1,_a=null,li=!1,Ru=Error(s(519));function va(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw to(si(n,e)),Ru}function Vp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[Sn]=o,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<Eo.length;a++)ge(Eo[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Ln(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Ai(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||s0(n.textContent,a)?(o.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),o.onScroll!=null&&ge("scroll",n),o.onScrollEnd!=null&&ge("scrollend",n),o.onClick!=null&&(n.onclick=Gi),n=!0):n=!1,n||va(e,!0)}function kp(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:En=En.return}}function Xs(e){if(e!==En)return!1;if(!Ee)return kp(e),Ee=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Wf(e.type,e.memoizedProps)),a=!a),a&&We&&va(e),kp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));We=p0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));We=p0(e)}else n===27?(n=We,Na(e.type)?(e=Jf,Jf=null,We=e):We=n):We=En?ui(e.stateNode.nextSibling):null;return!0}function as(){We=En=null,Ee=!1}function wu(){var e=_a;return e!==null&&(Hn===null?Hn=e:Hn.push.apply(Hn,e),_a=null),e}function to(e){_a===null?_a=[e]:_a.push(e)}var Du=z(null),ss=null,Xi=null;function xa(e,n,a){Et(Du,n._currentValue),n._currentValue=a}function qi(e){e._currentValue=Du.current,st(Du)}function Uu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Nu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var y=u.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=u;for(var F=0;F<n.length;F++)if(A.context===n[F]){h.lanes|=a,A=h.alternate,A!==null&&(A.lanes|=a),Uu(h.return,a,e),o||(y=null);break t}h=A.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,h=y.alternate,h!==null&&(h.lanes|=a),Uu(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function qs(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var A=u.type;qn(u.pendingProps.value,y.value)||(e!==null?e.push(A):e=[A])}}else if(u===_t.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ro):e=[Ro])}u=u.return}e!==null&&Nu(n,e,a,o),n.flags|=262144}function yl(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function rs(e){ss=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return jp(ss,e)}function Sl(e,n){return ss===null&&rs(e),jp(e,n)}function jp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xi===null){if(e===null)throw Error(s(308));Xi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Xi=Xi.next=n;return a}var qx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Wx=r.unstable_scheduleCallback,Yx=r.unstable_NormalPriority,cn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lu(){return{controller:new qx,data:new Map,refCount:0}}function eo(e){e.refCount--,e.refCount===0&&Wx(Yx,function(){e.controller.abort()})}var no=null,Ou=0,Ws=0,Ys=null;function Zx(e,n){if(no===null){var a=no=[];Ou=0,Ws=If(),Ys={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ou++,n.then(Xp,Xp),n}function Xp(){if(--Ou===0&&no!==null){Ys!==null&&(Ys.status="fulfilled");var e=no;no=null,Ws=0,Ys=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Qx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var qp=O.S;O.S=function(e,n){wg=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Zx(e,n),qp!==null&&qp(e,n)};var os=z(null);function Pu(){var e=os.current;return e!==null?e:je.pooledCache}function Ml(e,n){n===null?Et(os,os.current):Et(os,n.pool)}function Wp(){var e=Pu();return e===null?null:{parent:cn._currentValue,pool:e}}var Zs=Error(s(460)),zu=Error(s(474)),El=Error(s(542)),Tl={then:function(){}};function Yp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Zp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Gi,Gi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Kp(e),e;default:if(typeof n.status=="string")n.then(Gi,Gi);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Kp(e),e}throw cs=n,Zs}}function ls(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(cs=a,Zs):a}}var cs=null;function Qp(){if(cs===null)throw Error(s(459));var e=cs;return cs=null,e}function Kp(e){if(e===Zs||e===El)throw Error(s(483))}var Qs=null,io=0;function bl(e){var n=io;return io+=1,Qs===null&&(Qs=[]),Zp(Qs,e,n)}function ao(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Al(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Jp(e){function n(K,j){if(e){var et=K.deletions;et===null?(K.deletions=[j],K.flags|=16):et.push(j)}}function a(K,j){if(!e)return null;for(;j!==null;)n(K,j),j=j.sibling;return null}function o(K){for(var j=new Map;K!==null;)K.key!==null?j.set(K.key,K):j.set(K.index,K),K=K.sibling;return j}function u(K,j){return K=ki(K,j),K.index=0,K.sibling=null,K}function h(K,j,et){return K.index=et,e?(et=K.alternate,et!==null?(et=et.index,et<j?(K.flags|=67108866,j):et):(K.flags|=67108866,j)):(K.flags|=1048576,j)}function y(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function A(K,j,et,pt){return j===null||j.tag!==6?(j=Tu(et,K.mode,pt),j.return=K,j):(j=u(j,et),j.return=K,j)}function F(K,j,et,pt){var te=et.type;return te===w?ht(K,j,et.props.children,pt,et.key):j!==null&&(j.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===W&&ls(te)===j.type)?(j=u(j,et.props),ao(j,et),j.return=K,j):(j=vl(et.type,et.key,et.props,null,K.mode,pt),ao(j,et),j.return=K,j)}function nt(K,j,et,pt){return j===null||j.tag!==4||j.stateNode.containerInfo!==et.containerInfo||j.stateNode.implementation!==et.implementation?(j=bu(et,K.mode,pt),j.return=K,j):(j=u(j,et.children||[]),j.return=K,j)}function ht(K,j,et,pt,te){return j===null||j.tag!==7?(j=is(et,K.mode,pt,te),j.return=K,j):(j=u(j,et),j.return=K,j)}function mt(K,j,et){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Tu(""+j,K.mode,et),j.return=K,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case M:return et=vl(j.type,j.key,j.props,null,K.mode,et),ao(et,j),et.return=K,et;case T:return j=bu(j,K.mode,et),j.return=K,j;case W:return j=ls(j),mt(K,j,et)}if(ct(j)||ot(j))return j=is(j,K.mode,et,null),j.return=K,j;if(typeof j.then=="function")return mt(K,bl(j),et);if(j.$$typeof===N)return mt(K,Sl(K,j),et);Al(K,j)}return null}function at(K,j,et,pt){var te=j!==null?j.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return te!==null?null:A(K,j,""+et,pt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case M:return et.key===te?F(K,j,et,pt):null;case T:return et.key===te?nt(K,j,et,pt):null;case W:return et=ls(et),at(K,j,et,pt)}if(ct(et)||ot(et))return te!==null?null:ht(K,j,et,pt,null);if(typeof et.then=="function")return at(K,j,bl(et),pt);if(et.$$typeof===N)return at(K,j,Sl(K,et),pt);Al(K,et)}return null}function ut(K,j,et,pt,te){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return K=K.get(et)||null,A(j,K,""+pt,te);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case M:return K=K.get(pt.key===null?et:pt.key)||null,F(j,K,pt,te);case T:return K=K.get(pt.key===null?et:pt.key)||null,nt(j,K,pt,te);case W:return pt=ls(pt),ut(K,j,et,pt,te)}if(ct(pt)||ot(pt))return K=K.get(et)||null,ht(j,K,pt,te,null);if(typeof pt.then=="function")return ut(K,j,et,bl(pt),te);if(pt.$$typeof===N)return ut(K,j,et,Sl(j,pt),te);Al(j,pt)}return null}function Gt(K,j,et,pt){for(var te=null,Ce=null,jt=j,ce=j=0,ye=null;jt!==null&&ce<et.length;ce++){jt.index>ce?(ye=jt,jt=null):ye=jt.sibling;var Re=at(K,jt,et[ce],pt);if(Re===null){jt===null&&(jt=ye);break}e&&jt&&Re.alternate===null&&n(K,jt),j=h(Re,j,ce),Ce===null?te=Re:Ce.sibling=Re,Ce=Re,jt=ye}if(ce===et.length)return a(K,jt),Ee&&ji(K,ce),te;if(jt===null){for(;ce<et.length;ce++)jt=mt(K,et[ce],pt),jt!==null&&(j=h(jt,j,ce),Ce===null?te=jt:Ce.sibling=jt,Ce=jt);return Ee&&ji(K,ce),te}for(jt=o(jt);ce<et.length;ce++)ye=ut(jt,K,ce,et[ce],pt),ye!==null&&(e&&ye.alternate!==null&&jt.delete(ye.key===null?ce:ye.key),j=h(ye,j,ce),Ce===null?te=ye:Ce.sibling=ye,Ce=ye);return e&&jt.forEach(function(Ba){return n(K,Ba)}),Ee&&ji(K,ce),te}function ee(K,j,et,pt){if(et==null)throw Error(s(151));for(var te=null,Ce=null,jt=j,ce=j=0,ye=null,Re=et.next();jt!==null&&!Re.done;ce++,Re=et.next()){jt.index>ce?(ye=jt,jt=null):ye=jt.sibling;var Ba=at(K,jt,Re.value,pt);if(Ba===null){jt===null&&(jt=ye);break}e&&jt&&Ba.alternate===null&&n(K,jt),j=h(Ba,j,ce),Ce===null?te=Ba:Ce.sibling=Ba,Ce=Ba,jt=ye}if(Re.done)return a(K,jt),Ee&&ji(K,ce),te;if(jt===null){for(;!Re.done;ce++,Re=et.next())Re=mt(K,Re.value,pt),Re!==null&&(j=h(Re,j,ce),Ce===null?te=Re:Ce.sibling=Re,Ce=Re);return Ee&&ji(K,ce),te}for(jt=o(jt);!Re.done;ce++,Re=et.next())Re=ut(jt,K,ce,Re.value,pt),Re!==null&&(e&&Re.alternate!==null&&jt.delete(Re.key===null?ce:Re.key),j=h(Re,j,ce),Ce===null?te=Re:Ce.sibling=Re,Ce=Re);return e&&jt.forEach(function(oS){return n(K,oS)}),Ee&&ji(K,ce),te}function He(K,j,et,pt){if(typeof et=="object"&&et!==null&&et.type===w&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case M:t:{for(var te=et.key;j!==null;){if(j.key===te){if(te=et.type,te===w){if(j.tag===7){a(K,j.sibling),pt=u(j,et.props.children),pt.return=K,K=pt;break t}}else if(j.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===W&&ls(te)===j.type){a(K,j.sibling),pt=u(j,et.props),ao(pt,et),pt.return=K,K=pt;break t}a(K,j);break}else n(K,j);j=j.sibling}et.type===w?(pt=is(et.props.children,K.mode,pt,et.key),pt.return=K,K=pt):(pt=vl(et.type,et.key,et.props,null,K.mode,pt),ao(pt,et),pt.return=K,K=pt)}return y(K);case T:t:{for(te=et.key;j!==null;){if(j.key===te)if(j.tag===4&&j.stateNode.containerInfo===et.containerInfo&&j.stateNode.implementation===et.implementation){a(K,j.sibling),pt=u(j,et.children||[]),pt.return=K,K=pt;break t}else{a(K,j);break}else n(K,j);j=j.sibling}pt=bu(et,K.mode,pt),pt.return=K,K=pt}return y(K);case W:return et=ls(et),He(K,j,et,pt)}if(ct(et))return Gt(K,j,et,pt);if(ot(et)){if(te=ot(et),typeof te!="function")throw Error(s(150));return et=te.call(et),ee(K,j,et,pt)}if(typeof et.then=="function")return He(K,j,bl(et),pt);if(et.$$typeof===N)return He(K,j,Sl(K,et),pt);Al(K,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,j!==null&&j.tag===6?(a(K,j.sibling),pt=u(j,et),pt.return=K,K=pt):(a(K,j),pt=Tu(et,K.mode,pt),pt.return=K,K=pt),y(K)):a(K,j)}return function(K,j,et,pt){try{io=0;var te=He(K,j,et,pt);return Qs=null,te}catch(jt){if(jt===Zs||jt===El)throw jt;var Ce=Wn(29,jt,null,K.mode);return Ce.lanes=pt,Ce.return=K,Ce}}}var us=Jp(!0),$p=Jp(!1),ya=!1;function Bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Iu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ma(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ue&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=_l(e),zp(e,null,a),n}return gl(e,o,n,a),_l(e)}function so(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,bi(e,a)}}function Fu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=y:h=h.next=y,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Hu=!1;function ro(){if(Hu){var e=Ys;if(e!==null)throw e}}function oo(e,n,a,o){Hu=!1;var u=e.updateQueue;ya=!1;var h=u.firstBaseUpdate,y=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var F=A,nt=F.next;F.next=null,y===null?h=nt:y.next=nt,y=F;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,A=ht.lastBaseUpdate,A!==y&&(A===null?ht.firstBaseUpdate=nt:A.next=nt,ht.lastBaseUpdate=F))}if(h!==null){var mt=u.baseState;y=0,ht=nt=F=null,A=h;do{var at=A.lane&-536870913,ut=at!==A.lane;if(ut?(xe&at)===at:(o&at)===at){at!==0&&at===Ws&&(Hu=!0),ht!==null&&(ht=ht.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Gt=e,ee=A;at=n;var He=a;switch(ee.tag){case 1:if(Gt=ee.payload,typeof Gt=="function"){mt=Gt.call(He,mt,at);break t}mt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=ee.payload,at=typeof Gt=="function"?Gt.call(He,mt,at):Gt,at==null)break t;mt=_({},mt,at);break t;case 2:ya=!0}}at=A.callback,at!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[at]:ut.push(at))}else ut={lane:at,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ht===null?(nt=ht=ut,F=mt):ht=ht.next=ut,y|=at;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ut=A,A=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);ht===null&&(F=mt),u.baseState=F,u.firstBaseUpdate=nt,u.lastBaseUpdate=ht,h===null&&(u.shared.lanes=0),Ca|=y,e.lanes=y,e.memoizedState=mt}}function tm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function em(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)tm(a[e],n)}var Ks=z(null),Cl=z(0);function nm(e,n){e=ea,Et(Cl,e),Et(Ks,n),ea=e|n.baseLanes}function Gu(){Et(Cl,ea),Et(Ks,Ks.current)}function Vu(){ea=Cl.current,st(Ks),st(Cl)}var Yn=z(null),ci=null;function Ea(e){var n=e.alternate;Et(rn,rn.current&1),Et(Yn,e),ci===null&&(n===null||Ks.current!==null||n.memoizedState!==null)&&(ci=e)}function ku(e){Et(rn,rn.current),Et(Yn,e),ci===null&&(ci=e)}function im(e){e.tag===22?(Et(rn,rn.current),Et(Yn,e),ci===null&&(ci=e)):Ta()}function Ta(){Et(rn,rn.current),Et(Yn,Yn.current)}function Zn(e){st(Yn),ci===e&&(ci=null),st(rn)}var rn=z(0);function Rl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Qf(a)||Kf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Wi=0,le=null,Ie=null,un=null,wl=!1,Js=!1,fs=!1,Dl=0,lo=0,$s=null,Kx=0;function tn(){throw Error(s(321))}function ju(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function Xu(e,n,a,o,u,h){return Wi=h,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Hm:of,fs=!1,h=a(o,u),fs=!1,Js&&(h=sm(n,a,o,u)),am(e),h}function am(e){O.H=fo;var n=Ie!==null&&Ie.next!==null;if(Wi=0,un=Ie=le=null,wl=!1,lo=0,$s=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&yl(e)&&(fn=!0))}function sm(e,n,a,o){le=e;var u=0;do{if(Js&&($s=null),lo=0,Js=!1,25<=u)throw Error(s(301));if(u+=1,un=Ie=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}O.H=Gm,h=n(a,o)}while(Js);return h}function Jx(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?co(n):n,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(le.flags|=1024),n}function qu(){var e=Dl!==0;return Dl=0,e}function Wu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Yu(e){if(wl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}wl=!1}Wi=0,un=Ie=le=null,Js=!1,lo=Dl=0,$s=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?le.memoizedState=un=e:un=un.next=e,un}function on(){if(Ie===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=un===null?le.memoizedState:un.next;if(n!==null)un=n,Ie=e;else{if(e===null)throw le.alternate===null?Error(s(467)):Error(s(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},un===null?le.memoizedState=un=e:un=un.next=e}return un}function Ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(e){var n=lo;return lo+=1,$s===null&&($s=[]),e=Zp($s,e,n),n=le,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Hm:of),e}function Nl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return co(e);if(e.$$typeof===N)return Tn(e)}throw Error(s(438,String(e)))}function Zu(e){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ul(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=U;return n.index++,a}function Yi(e,n){return typeof n=="function"?n(e):n}function Ll(e){var n=on();return Qu(n,Ie,e)}function Qu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var y=u.next;u.next=h.next,h.next=y}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var A=y=null,F=null,nt=n,ht=!1;do{var mt=nt.lane&-536870913;if(mt!==nt.lane?(xe&mt)===mt:(Wi&mt)===mt){var at=nt.revertLane;if(at===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),mt===Ws&&(ht=!0);else if((Wi&at)===at){nt=nt.next,at===Ws&&(ht=!0);continue}else mt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},F===null?(A=F=mt,y=h):F=F.next=mt,le.lanes|=at,Ca|=at;mt=nt.action,fs&&a(h,mt),h=nt.hasEagerState?nt.eagerState:a(h,mt)}else at={lane:mt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},F===null?(A=F=at,y=h):F=F.next=at,le.lanes|=mt,Ca|=mt;nt=nt.next}while(nt!==null&&nt!==n);if(F===null?y=h:F.next=A,!qn(h,e.memoizedState)&&(fn=!0,ht&&(a=Ys,a!==null)))throw a;e.memoizedState=h,e.baseState=y,e.baseQueue=F,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ku(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do h=e(h,y.action),y=y.next;while(y!==u);qn(h,n.memoizedState)||(fn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function rm(e,n,a){var o=le,u=on(),h=Ee;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!qn((Ie||u).memoizedState,a);if(y&&(u.memoizedState=a,fn=!0),u=u.queue,tf(cm.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,tr(9,{destroy:void 0},lm.bind(null,o,u,a,n),null),je===null)throw Error(s(349));h||(Wi&127)!==0||om(o,n,a)}return a}function om(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Ul(),le.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function lm(e,n,a,o){n.value=a,n.getSnapshot=o,um(n)&&fm(e)}function cm(e,n,a){return a(function(){um(n)&&fm(e)})}function um(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function fm(e){var n=ns(e,2);n!==null&&Gn(n,e,2)}function Ju(e){var n=On();if(typeof e=="function"){var a=e;if(e=a(),fs){Zt(!0);try{a()}finally{Zt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:e},n}function hm(e,n,a,o){return e.baseState=a,Qu(e,Ie,typeof o=="function"?o:Yi)}function $x(e,n,a,o,u){if(zl(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};O.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,dm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function dm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=O.T,y={};O.T=y;try{var A=a(u,o),F=O.S;F!==null&&F(y,A),pm(e,n,A)}catch(nt){$u(e,n,nt)}finally{h!==null&&y.types!==null&&(h.types=y.types),O.T=h}}else try{h=a(u,o),pm(e,n,h)}catch(nt){$u(e,n,nt)}}function pm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){mm(e,n,o)},function(o){return $u(e,n,o)}):mm(e,n,a)}function mm(e,n,a){n.status="fulfilled",n.value=a,gm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,dm(e,a)))}function $u(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,gm(n),n=n.next;while(n!==o)}e.action=null}function gm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function _m(e,n){return n}function vm(e,n){if(Ee){var a=je.formState;if(a!==null){t:{var o=le;if(Ee){if(We){e:{for(var u=We,h=li;u.nodeType!==8;){if(!h){u=null;break e}if(u=ui(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){We=ui(u.nextSibling),o=u.data==="F!";break t}}va(o)}o=!1}o&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_m,lastRenderedState:n},a.queue=o,a=Bm.bind(null,le,o),o.dispatch=a,o=Ju(!1),h=rf.bind(null,le,!1,o.queue),o=On(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=$x.bind(null,le,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function xm(e){var n=on();return ym(n,Ie,e)}function ym(e,n,a){if(n=Qu(e,n,_m)[0],e=Ll(Yi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=co(n)}catch(y){throw y===Zs?El:y}else o=n;n=on();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(le.flags|=2048,tr(9,{destroy:void 0},ty.bind(null,u,a),null)),[o,h,e]}function ty(e,n){e.action=n}function Sm(e){var n=on(),a=Ie;if(a!==null)return ym(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function tr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=le.updateQueue,n===null&&(n=Ul(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Mm(){return on().memoizedState}function Ol(e,n,a,o){var u=On();le.flags|=e,u.memoizedState=tr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Pl(e,n,a,o){var u=on();o=o===void 0?null:o;var h=u.memoizedState.inst;Ie!==null&&o!==null&&ju(o,Ie.memoizedState.deps)?u.memoizedState=tr(n,h,a,o):(le.flags|=e,u.memoizedState=tr(1|n,h,a,o))}function Em(e,n){Ol(8390656,8,e,n)}function tf(e,n){Pl(2048,8,e,n)}function ey(e){le.flags|=4;var n=le.updateQueue;if(n===null)n=Ul(),le.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Tm(e){var n=on().memoizedState;return ey({ref:n,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function bm(e,n){return Pl(4,2,e,n)}function Am(e,n){return Pl(4,4,e,n)}function Cm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Rm(e,n,a){a=a!=null?a.concat([e]):null,Pl(4,4,Cm.bind(null,n,e),a)}function ef(){}function wm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ju(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Dm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ju(n,o[1]))return o[0];if(o=e(),fs){Zt(!0);try{e()}finally{Zt(!1)}}return a.memoizedState=[o,n],o}function nf(e,n,a){return a===void 0||(Wi&1073741824)!==0&&(xe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Ug(),le.lanes|=e,Ca|=e,a)}function Um(e,n,a,o){return qn(a,n)?a:Ks.current!==null?(e=nf(e,a,o),qn(e,n)||(fn=!0),e):(Wi&42)===0||(Wi&1073741824)!==0&&(xe&261930)===0?(fn=!0,e.memoizedState=a):(e=Ug(),le.lanes|=e,Ca|=e,n)}function Nm(e,n,a,o,u){var h=X.p;X.p=h!==0&&8>h?h:8;var y=O.T,A={};O.T=A,rf(e,!1,n,a);try{var F=u(),nt=O.S;if(nt!==null&&nt(A,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ht=Qx(F,o);uo(e,n,ht,Jn(e))}else uo(e,n,o,Jn(e))}catch(mt){uo(e,n,{then:function(){},status:"rejected",reason:mt},Jn())}finally{X.p=h,y!==null&&A.types!==null&&(y.types=A.types),O.T=y}}function ny(){}function af(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Lm(e).queue;Nm(e,u,n,Z,a===null?ny:function(){return Om(e),a(o)})}function Lm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Om(e){var n=Lm(e);n.next===null&&(n=e.alternate.memoizedState),uo(e,n.next.queue,{},Jn())}function sf(){return Tn(Ro)}function Pm(){return on().memoizedState}function zm(){return on().memoizedState}function iy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=Sa(a);var o=Ma(n,e,a);o!==null&&(Gn(o,n,a),so(o,n,a)),n={cache:Lu()},e.payload=n;return}n=n.return}}function ay(e,n,a){var o=Jn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zl(e)?Im(n,a):(a=Mu(e,n,a,o),a!==null&&(Gn(a,e,o),Fm(a,n,o)))}function Bm(e,n,a){var o=Jn();uo(e,n,a,o)}function uo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(e))Im(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,A=h(y,a);if(u.hasEagerState=!0,u.eagerState=A,qn(A,y))return gl(e,n,u,0),je===null&&ml(),!1}catch{}if(a=Mu(e,n,u,o),a!==null)return Gn(a,e,o),Fm(a,n,o),!0}return!1}function rf(e,n,a,o){if(o={lane:2,revertLane:If(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},zl(e)){if(n)throw Error(s(479))}else n=Mu(e,a,o,2),n!==null&&Gn(n,e,2)}function zl(e){var n=e.alternate;return e===le||n!==null&&n===le}function Im(e,n){Js=wl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Fm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,bi(e,a)}}var fo={readContext:Tn,use:Nl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};fo.useEffectEvent=tn;var Hm={readContext:Tn,use:Nl,useCallback:function(e,n){return On().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:Em,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ol(4194308,4,Cm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ol(4194308,4,e,n)},useInsertionEffect:function(e,n){Ol(4,2,e,n)},useMemo:function(e,n){var a=On();n=n===void 0?null:n;var o=e();if(fs){Zt(!0);try{e()}finally{Zt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=On();if(a!==void 0){var u=a(n);if(fs){Zt(!0);try{a(n)}finally{Zt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=ay.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var n=On();return e={current:e},n.memoizedState=e},useState:function(e){e=Ju(e);var n=e.queue,a=Bm.bind(null,le,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ef,useDeferredValue:function(e,n){var a=On();return nf(a,e,n)},useTransition:function(){var e=Ju(!1);return e=Nm.bind(null,le,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=le,u=On();if(Ee){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),je===null)throw Error(s(349));(xe&127)!==0||om(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Em(cm.bind(null,o,h,e),[e]),o.flags|=2048,tr(9,{destroy:void 0},lm.bind(null,o,h,a,n),null),a},useId:function(){var e=On(),n=je.identifierPrefix;if(Ee){var a=Ri,o=Ci;a=(o&~(1<<32-zt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Dl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Kx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:sf,useFormState:vm,useActionState:vm,useOptimistic:function(e){var n=On();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=rf.bind(null,le,!0,a),a.dispatch=n,[e,n]},useMemoCache:Zu,useCacheRefresh:function(){return On().memoizedState=iy.bind(null,le)},useEffectEvent:function(e){var n=On(),a={impl:e};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},of={readContext:Tn,use:Nl,useCallback:wm,useContext:Tn,useEffect:tf,useImperativeHandle:Rm,useInsertionEffect:bm,useLayoutEffect:Am,useMemo:Dm,useReducer:Ll,useRef:Mm,useState:function(){return Ll(Yi)},useDebugValue:ef,useDeferredValue:function(e,n){var a=on();return Um(a,Ie.memoizedState,e,n)},useTransition:function(){var e=Ll(Yi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:rm,useId:Pm,useHostTransitionStatus:sf,useFormState:xm,useActionState:xm,useOptimistic:function(e,n){var a=on();return hm(a,Ie,e,n)},useMemoCache:Zu,useCacheRefresh:zm};of.useEffectEvent=Tm;var Gm={readContext:Tn,use:Nl,useCallback:wm,useContext:Tn,useEffect:tf,useImperativeHandle:Rm,useInsertionEffect:bm,useLayoutEffect:Am,useMemo:Dm,useReducer:Ku,useRef:Mm,useState:function(){return Ku(Yi)},useDebugValue:ef,useDeferredValue:function(e,n){var a=on();return Ie===null?nf(a,e,n):Um(a,Ie.memoizedState,e,n)},useTransition:function(){var e=Ku(Yi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:rm,useId:Pm,useHostTransitionStatus:sf,useFormState:Sm,useActionState:Sm,useOptimistic:function(e,n){var a=on();return Ie!==null?hm(a,Ie,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Zu,useCacheRefresh:zm};Gm.useEffectEvent=Tm;function lf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var cf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Jn(),u=Sa(o);u.payload=n,a!=null&&(u.callback=a),n=Ma(e,u,o),n!==null&&(Gn(n,e,o),so(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Jn(),u=Sa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ma(e,u,o),n!==null&&(Gn(n,e,o),so(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),o=Sa(a);o.tag=2,n!=null&&(o.callback=n),n=Ma(e,o,a),n!==null&&(Gn(n,e,a),so(n,e,a))}};function Vm(e,n,a,o,u,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,y):n.prototype&&n.prototype.isPureReactComponent?!Kr(a,o)||!Kr(u,h):!0}function km(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&cf.enqueueReplaceState(n,n.state,null)}function hs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function jm(e){pl(e)}function Xm(e){console.error(e)}function qm(e){pl(e)}function Bl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Wm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function uf(e,n,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){Bl(e,n)},a}function Ym(e){return e=Sa(e),e.tag=3,e}function Zm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Wm(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Wm(n,a,o),typeof u!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function sy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&qs(n,a,u,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Zl():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Pf(e,o,u)),!1;case 22:return a.flags|=65536,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Pf(e,o,u)),!1}throw Error(s(435,a.tag))}return Pf(e,o,u),Zl(),!1}if(Ee)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ru&&(e=Error(s(422),{cause:o}),to(si(e,a)))):(o!==Ru&&(n=Error(s(423),{cause:o}),to(si(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=si(o,a),u=uf(e.stateNode,o,u),Fu(e,u),en!==4&&(en=2)),!1;var h=Error(s(520),{cause:o});if(h=si(h,a),yo===null?yo=[h]:yo.push(h),en!==4&&(en=2),n===null)return!0;o=si(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=uf(a.stateNode,o,e),Fu(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ra===null||!Ra.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Ym(u),Zm(u,e,a,o),Fu(a,u),!1}a=a.return}while(a!==null);return!1}var ff=Error(s(461)),fn=!1;function bn(e,n,a,o){n.child=e===null?$p(n,null,a,o):us(n,e.child,a,o)}function Qm(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var y={};for(var A in o)A!=="ref"&&(y[A]=o[A])}else y=o;return rs(n),o=Xu(e,n,a,y,h,u),A=qu(),e!==null&&!fn?(Wu(e,n,u),Zi(e,n,u)):(Ee&&A&&Au(n),n.flags|=1,bn(e,n,o,u),n.child)}function Km(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Eu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Jm(e,n,h,o,u)):(e=vl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!xf(e,u)){var y=h.memoizedProps;if(a=a.compare,a=a!==null?a:Kr,a(y,o)&&e.ref===n.ref)return Zi(e,n,u)}return n.flags|=1,e=ki(h,o),e.ref=n.ref,e.return=n,n.child=e}function Jm(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(Kr(h,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=h,xf(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,Zi(e,n,u)}return hf(e,n,a,o,u)}function $m(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return tg(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ml(n,h!==null?h.cachePool:null),h!==null?nm(n,h):Gu(),im(n);else return o=n.lanes=536870912,tg(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Ml(n,h.cachePool),nm(n,h),Ta(),n.memoizedState=null):(e!==null&&Ml(n,null),Gu(),Ta());return bn(e,n,u,a),n.child}function ho(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function tg(e,n,a,o,u){var h=Pu();return h=h===null?null:{parent:cn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Ml(n,null),Gu(),im(n),e!==null&&qs(e,n,o,!0),n.childLanes=u,null}function Il(e,n){return n=Hl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function eg(e,n,a){return us(n,e.child,null,a),e=Il(n,n.pendingProps),e.flags|=2,Zn(n),n.memoizedState=null,e}function ry(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(o.mode==="hidden")return e=Il(n,o),n.lanes=536870912,ho(null,e);if(ku(n),(e=We)?(e=d0(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Ci,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=Ip(e),a.return=n,n.child=a,En=n,We=null)):e=null,e===null)throw va(n);return n.lanes=536870912,null}return Il(n,o)}var h=e.memoizedState;if(h!==null){var y=h.dehydrated;if(ku(n),u)if(n.flags&256)n.flags&=-257,n=eg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||qs(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(o=je,o!==null&&(y=Us(o,a),y!==0&&y!==h.retryLane))throw h.retryLane=y,ns(e,y),Gn(o,e,y),ff;Zl(),n=eg(e,n,a)}else e=h.treeContext,We=ui(y.nextSibling),En=n,Ee=!0,_a=null,li=!1,e!==null&&Gp(n,e),n=Il(n,o),n.flags|=4096;return n}return e=ki(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Fl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function hf(e,n,a,o,u){return rs(n),a=Xu(e,n,a,o,void 0,u),o=qu(),e!==null&&!fn?(Wu(e,n,u),Zi(e,n,u)):(Ee&&o&&Au(n),n.flags|=1,bn(e,n,a,u),n.child)}function ng(e,n,a,o,u,h){return rs(n),n.updateQueue=null,a=sm(n,o,a,u),am(e),o=qu(),e!==null&&!fn?(Wu(e,n,h),Zi(e,n,h)):(Ee&&o&&Au(n),n.flags|=1,bn(e,n,a,h),n.child)}function ig(e,n,a,o,u){if(rs(n),n.stateNode===null){var h=Vs,y=a.contextType;typeof y=="object"&&y!==null&&(h=Tn(y)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=cf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Bu(n),y=a.contextType,h.context=typeof y=="object"&&y!==null?Tn(y):Vs,h.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(lf(n,a,y,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&cf.enqueueReplaceState(h,h.state,null),oo(n,o,h,u),ro(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var A=n.memoizedProps,F=hs(a,A);h.props=F;var nt=h.context,ht=a.contextType;y=Vs,typeof ht=="object"&&ht!==null&&(y=Tn(ht));var mt=a.getDerivedStateFromProps;ht=typeof mt=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ht||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||nt!==y)&&km(n,h,o,y),ya=!1;var at=n.memoizedState;h.state=at,oo(n,o,h,u),ro(),nt=n.memoizedState,A||at!==nt||ya?(typeof mt=="function"&&(lf(n,a,mt,o),nt=n.memoizedState),(F=ya||Vm(n,a,F,o,at,nt,y))?(ht||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=nt),h.props=o,h.state=nt,h.context=y,o=F):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Iu(e,n),y=n.memoizedProps,ht=hs(a,y),h.props=ht,mt=n.pendingProps,at=h.context,nt=a.contextType,F=Vs,typeof nt=="object"&&nt!==null&&(F=Tn(nt)),A=a.getDerivedStateFromProps,(nt=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==mt||at!==F)&&km(n,h,o,F),ya=!1,at=n.memoizedState,h.state=at,oo(n,o,h,u),ro();var ut=n.memoizedState;y!==mt||at!==ut||ya||e!==null&&e.dependencies!==null&&yl(e.dependencies)?(typeof A=="function"&&(lf(n,a,A,o),ut=n.memoizedState),(ht=ya||Vm(n,a,ht,o,at,ut,F)||e!==null&&e.dependencies!==null&&yl(e.dependencies))?(nt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ut,F),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ut,F)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),h.props=o,h.state=ut,h.context=F,o=ht):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Fl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=us(n,e.child,null,u),n.child=us(n,null,a,u)):bn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=Zi(e,n,u),e}function ag(e,n,a,o){return as(),n.flags|=256,bn(e,n,a,o),n.child}var df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pf(e){return{baseLanes:e,cachePool:Wp()}}function mf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Kn),e}function sg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,y;if((y=h)||(y=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(u?Ea(n):Ta(),(e=We)?(e=d0(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Ci,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=Ip(e),a.return=n,n.child=a,En=n,We=null)):e=null,e===null)throw va(n);return Kf(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ta(),u=n.mode,A=Hl({mode:"hidden",children:A},u),o=is(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=pf(a),o.childLanes=mf(e,y,a),n.memoizedState=df,ho(null,o)):(Ea(n),gf(n,A))}var F=e.memoizedState;if(F!==null&&(A=F.dehydrated,A!==null)){if(h)n.flags&256?(Ea(n),n.flags&=-257,n=_f(e,n,a)):n.memoizedState!==null?(Ta(),n.child=e.child,n.flags|=128,n=null):(Ta(),A=o.fallback,u=n.mode,o=Hl({mode:"visible",children:o.children},u),A=is(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,us(n,e.child,null,a),o=n.child,o.memoizedState=pf(a),o.childLanes=mf(e,y,a),n.memoizedState=df,n=ho(null,o));else if(Ea(n),Kf(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var nt=y.dgst;y=nt,o=Error(s(419)),o.stack="",o.digest=y,to({value:o,source:null,stack:null}),n=_f(e,n,a)}else if(fn||qs(e,n,a,!1),y=(a&e.childLanes)!==0,fn||y){if(y=je,y!==null&&(o=Us(y,a),o!==0&&o!==F.retryLane))throw F.retryLane=o,ns(e,o),Gn(y,e,o),ff;Qf(A)||Zl(),n=_f(e,n,a)}else Qf(A)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,We=ui(A.nextSibling),En=n,Ee=!0,_a=null,li=!1,e!==null&&Gp(n,e),n=gf(n,o.children),n.flags|=4096);return n}return u?(Ta(),A=o.fallback,u=n.mode,F=e.child,nt=F.sibling,o=ki(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,nt!==null?A=ki(nt,A):(A=is(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,ho(null,o),o=n.child,A=e.child.memoizedState,A===null?A=pf(a):(u=A.cachePool,u!==null?(F=cn._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=Wp(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=mf(e,y,a),n.memoizedState=df,ho(e.child,o)):(Ea(n),a=e.child,e=a.sibling,a=ki(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function gf(e,n){return n=Hl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Hl(e,n){return e=Wn(22,e,null,n),e.lanes=0,e}function _f(e,n,a){return us(n,e.child,null,a),e=gf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function rg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Uu(e.return,n,a)}function vf(e,n,a,o,u,h){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=h)}function og(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var y=rn.current,A=(y&2)!==0;if(A?(y=y&1|2,n.flags|=128):y&=1,Et(rn,y),bn(e,n,o,a),o=Ee?$r:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rg(e,a,n);else if(e.tag===19)rg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Rl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),vf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Rl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}vf(n,!0,a,null,h,o);break;case"together":vf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Zi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ca|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(qs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ki(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ki(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function xf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&yl(e)))}function oy(e,n,a){switch(n.tag){case 3:Ht(n,n.stateNode.containerInfo),xa(n,cn,e.memoizedState.cache),as();break;case 27:case 5:ne(n);break;case 4:Ht(n,n.stateNode.containerInfo);break;case 10:xa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ku(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ea(n),n.flags|=128,null):(a&n.child.childLanes)!==0?sg(e,n,a):(Ea(n),e=Zi(e,n,a),e!==null?e.sibling:null);Ea(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(qs(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return og(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Et(rn,rn.current),o)break;return null;case 22:return n.lanes=0,$m(e,n,a,n.pendingProps);case 24:xa(n,cn,e.memoizedState.cache)}return Zi(e,n,a)}function lg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!xf(e,a)&&(n.flags&128)===0)return fn=!1,oy(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Ee&&(n.flags&1048576)!==0&&Hp(n,$r,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=ls(n.elementType),n.type=e,typeof e=="function")Eu(e)?(o=hs(e,o),n.tag=1,n=ig(null,n,e,o,a)):(n.tag=0,n=hf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===C){n.tag=11,n=Qm(null,n,e,o,a);break t}else if(u===B){n.tag=14,n=Km(null,n,e,o,a);break t}}throw n=L(e)||e,Error(s(306,n,""))}}return n;case 0:return hf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=hs(o,n.pendingProps),ig(e,n,o,u,a);case 3:t:{if(Ht(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Iu(e,n),oo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,xa(n,cn,o),o!==h.cache&&Nu(n,[cn],a,!0),ro(),o=y.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=ag(e,n,o,a);break t}else if(o!==u){u=si(Error(s(424)),n),to(u),n=ag(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,We=ui(e.firstChild),En=n,Ee=!0,_a=null,li=!0,a=$p(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(as(),o===u){n=Zi(e,n,a);break t}bn(e,n,o,a)}n=n.child}return n;case 26:return Fl(e,n),e===null?(a=x0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,e=n.pendingProps,o=nc(vt.current).createElement(a),o[ln]=n,o[Sn]=e,An(o,a,e),xt(o),n.stateNode=o):n.memoizedState=x0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ne(n),e===null&&Ee&&(o=n.stateNode=g0(n.type,n.pendingProps,vt.current),En=n,li=!0,u=We,Na(n.type)?(Jf=u,We=ui(o.firstChild)):We=u),bn(e,n,n.pendingProps.children,a),Fl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((u=o=We)&&(o=By(o,n.type,n.pendingProps,li),o!==null?(n.stateNode=o,En=n,We=ui(o.firstChild),li=!1,u=!0):u=!1),u||va(n)),ne(n),u=n.type,h=n.pendingProps,y=e!==null?e.memoizedProps:null,o=h.children,Wf(u,h)?o=null:y!==null&&Wf(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Xu(e,n,Jx,null,null,a),Ro._currentValue=u),Fl(e,n),bn(e,n,o,a),n.child;case 6:return e===null&&Ee&&((e=a=We)&&(a=Iy(a,n.pendingProps,li),a!==null?(n.stateNode=a,En=n,We=null,e=!0):e=!1),e||va(n)),null;case 13:return sg(e,n,a);case 4:return Ht(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=us(n,null,o,a):bn(e,n,o,a),n.child;case 11:return Qm(e,n,n.type,n.pendingProps,a);case 7:return bn(e,n,n.pendingProps,a),n.child;case 8:return bn(e,n,n.pendingProps.children,a),n.child;case 12:return bn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,xa(n,n.type,o.value),bn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,rs(n),u=Tn(u),o=o(u),n.flags|=1,bn(e,n,o,a),n.child;case 14:return Km(e,n,n.type,n.pendingProps,a);case 15:return Jm(e,n,n.type,n.pendingProps,a);case 19:return og(e,n,a);case 31:return ry(e,n,a);case 22:return $m(e,n,a,n.pendingProps);case 24:return rs(n),o=Tn(cn),e===null?(u=Pu(),u===null&&(u=je,h=Lu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Bu(n),xa(n,cn,u)):((e.lanes&a)!==0&&(Iu(e,n),oo(n,null,null,a),ro()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),xa(n,cn,o)):(o=h.cache,xa(n,cn,o),o!==u.cache&&Nu(n,[cn],a,!0))),bn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Qi(e){e.flags|=4}function yf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Pg())e.flags|=8192;else throw cs=Tl,zu}else e.flags&=-16777217}function cg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!T0(n))if(Pg())e.flags|=8192;else throw cs=Tl,zu}function Gl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pe():536870912,e.lanes|=n,ar|=n)}function po(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function ly(e,n,a){var o=n.pendingProps;switch(Cu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),qi(cn),Pt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Xs(n)?Qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,wu())),Ye(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(Qi(n),h!==null?(Ye(n),cg(n,h)):(Ye(n),yf(n,u,null,o,a))):h?h!==e.memoizedState?(Qi(n),Ye(n),cg(n,h)):(Ye(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Qi(n),Ye(n),yf(n,u,e,o,a)),null;case 27:if(Xe(n),a=vt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Qi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}e=Ct.current,Xs(n)?Vp(n):(e=g0(u,o,a),n.stateNode=e,Qi(n))}return Ye(n),null;case 5:if(Xe(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Qi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}if(h=Ct.current,Xs(n))Vp(n);else{var y=nc(vt.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}h[ln]=n,h[Sn]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=h;t:switch(An(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Qi(n)}}return Ye(n),yf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Qi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=vt.current,Xs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=En,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||s0(e.nodeValue,a)),e||va(n,!0)}else e=nc(e).createTextNode(o),e[ln]=n,n.stateNode=e}return Ye(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Xs(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else as(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),e=!1}else a=wu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ye(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Xs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else as(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),u=!1}else u=wu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Gl(n,n.updateQueue),Ye(n),null);case 4:return Pt(),e===null&&Vf(n.stateNode.containerInfo),Ye(n),null;case 10:return qi(n.type),Ye(n),null;case 19:if(st(rn),o=n.memoizedState,o===null)return Ye(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)po(o,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Rl(e),h!==null){for(n.flags|=128,po(o,!1),e=h.updateQueue,n.updateQueue=e,Gl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Bp(a,e),a=a.sibling;return Et(rn,rn.current&1|2),Ee&&ji(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>ql&&(n.flags|=128,u=!0,po(o,!1),n.lanes=4194304)}else{if(!u)if(e=Rl(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Gl(n,e),po(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ee)return Ye(n),null}else 2*b()-o.renderingStartTime>ql&&a!==536870912&&(n.flags|=128,u=!0,po(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=rn.current,Et(rn,u?a&1|2:a&1),Ee&&ji(n,o.treeForkCount),e):(Ye(n),null);case 22:case 23:return Zn(n),Vu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&Gl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&st(os),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),qi(cn),Ye(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function cy(e,n){switch(Cu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return qi(cn),Pt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Xe(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(s(340));as()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Zn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));as()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return st(rn),null;case 4:return Pt(),null;case 10:return qi(n.type),null;case 22:case 23:return Zn(n),Vu(),e!==null&&st(os),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return qi(cn),null;case 25:return null;default:return null}}function ug(e,n){switch(Cu(n),n.tag){case 3:qi(cn),Pt();break;case 26:case 27:case 5:Xe(n);break;case 4:Pt();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:st(rn);break;case 10:qi(n.type);break;case 22:case 23:Zn(n),Vu(),e!==null&&st(os);break;case 24:qi(cn)}}function mo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,y=a.inst;o=h(),y.destroy=o}a=a.next}while(a!==u)}}catch(A){Be(n,n.return,A)}}function ba(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var y=o.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,u=n;var F=a,nt=A;try{nt()}catch(ht){Be(u,F,ht)}}}o=o.next}while(o!==h)}}catch(ht){Be(n,n.return,ht)}}function fg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{em(n,a)}catch(o){Be(e,e.return,o)}}}function hg(e,n,a){a.props=hs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function go(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Be(e,n,u)}}function wi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,n,u)}else a.current=null}function dg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function Sf(e,n,a){try{var o=e.stateNode;Uy(o,e.type,a,n),o[Sn]=n}catch(u){Be(e,e.return,u)}}function pg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Na(e.type)||e.tag===4}function Mf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||pg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Na(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ef(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Gi));else if(o!==4&&(o===27&&Na(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Ef(e,n,a),e=e.sibling;e!==null;)Ef(e,n,a),e=e.sibling}function Vl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Na(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Vl(e,n,a),e=e.sibling;e!==null;)Vl(e,n,a),e=e.sibling}function mg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,o,a),n[ln]=e,n[Sn]=a}catch(h){Be(e,e.return,h)}}var Ki=!1,hn=!1,Tf=!1,gg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function uy(e,n){if(e=e.containerInfo,Xf=cc,e=Rp(e),gu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var y=0,A=-1,F=-1,nt=0,ht=0,mt=e,at=null;e:for(;;){for(var ut;mt!==a||u!==0&&mt.nodeType!==3||(A=y+u),mt!==h||o!==0&&mt.nodeType!==3||(F=y+o),mt.nodeType===3&&(y+=mt.nodeValue.length),(ut=mt.firstChild)!==null;)at=mt,mt=ut;for(;;){if(mt===e)break e;if(at===a&&++nt===u&&(A=y),at===h&&++ht===o&&(F=y),(ut=mt.nextSibling)!==null)break;mt=at,at=mt.parentNode}mt=ut}a=A===-1||F===-1?null:{start:A,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(qf={focusedElem:e,selectionRange:a},cc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Gt=hs(a.type,u);e=o.getSnapshotBeforeUpdate(Gt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Be(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Zf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Zf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function _g(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:$i(e,a),o&4&&mo(5,a);break;case 1:if($i(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Be(a,a.return,y)}else{var u=hs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Be(a,a.return,y)}}o&64&&fg(a),o&512&&go(a,a.return);break;case 3:if($i(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{em(e,n)}catch(y){Be(a,a.return,y)}}break;case 27:n===null&&o&4&&mg(a);case 26:case 5:$i(e,a),n===null&&o&4&&dg(a),o&512&&go(a,a.return);break;case 12:$i(e,a);break;case 31:$i(e,a),o&4&&yg(e,a);break;case 13:$i(e,a),o&4&&Sg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=xy.bind(null,a),Fy(e,a))));break;case 22:if(o=a.memoizedState!==null||Ki,!o){n=n!==null&&n.memoizedState!==null||hn,u=Ki;var h=hn;Ki=o,(hn=n)&&!h?ta(e,a,(a.subtreeFlags&8772)!==0):$i(e,a),Ki=u,hn=h}break;case 30:break;default:$i(e,a)}}function vg(e){var n=e.alternate;n!==null&&(e.alternate=null,vg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&R(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,Bn=!1;function Ji(e,n,a){for(a=a.child;a!==null;)xg(e,n,a),a=a.sibling}function xg(e,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:hn||wi(a,n),Ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||wi(a,n);var o=Ze,u=Bn;Na(a.type)&&(Ze=a.stateNode,Bn=!1),Ji(e,n,a),bo(a.stateNode),Ze=o,Bn=u;break;case 5:hn||wi(a,n);case 6:if(o=Ze,u=Bn,Ze=null,Ji(e,n,a),Ze=o,Bn=u,Ze!==null)if(Bn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(h){Be(a,n,h)}else try{Ze.removeChild(a.stateNode)}catch(h){Be(a,n,h)}break;case 18:Ze!==null&&(Bn?(e=Ze,f0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),hr(e)):f0(Ze,a.stateNode));break;case 4:o=Ze,u=Bn,Ze=a.stateNode.containerInfo,Bn=!0,Ji(e,n,a),Ze=o,Bn=u;break;case 0:case 11:case 14:case 15:ba(2,a,n),hn||ba(4,a,n),Ji(e,n,a);break;case 1:hn||(wi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&hg(a,n,o)),Ji(e,n,a);break;case 21:Ji(e,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,Ji(e,n,a),hn=o;break;default:Ji(e,n,a)}}function yg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{hr(e)}catch(a){Be(n,n.return,a)}}}function Sg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hr(e)}catch(a){Be(n,n.return,a)}}function fy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new gg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new gg),n;default:throw Error(s(435,e.tag))}}function kl(e,n){var a=fy(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=yy.bind(null,e,o);o.then(u,u)}})}function In(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,y=n,A=y;t:for(;A!==null;){switch(A.tag){case 27:if(Na(A.type)){Ze=A.stateNode,Bn=!1;break t}break;case 5:Ze=A.stateNode,Bn=!1;break t;case 3:case 4:Ze=A.stateNode.containerInfo,Bn=!0;break t}A=A.return}if(Ze===null)throw Error(s(160));xg(h,y,u),Ze=null,Bn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Mg(n,e),n=n.sibling}var _i=null;function Mg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:In(n,e),Fn(e),o&4&&(ba(3,e,e.return),mo(3,e),ba(5,e,e.return));break;case 1:In(n,e),Fn(e),o&512&&(hn||a===null||wi(a,a.return)),o&64&&Ki&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=_i;if(In(n,e),Fn(e),o&512&&(hn||a===null||wi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Ka]||h[ln]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),An(h,o,a),h[ln]=e,xt(h),o=h;break t;case"link":var y=M0("link","href",u).get(o+(a.href||""));if(y){for(var A=0;A<y.length;A++)if(h=y[A],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(A,1);break e}}h=u.createElement(o),An(h,o,a),u.head.appendChild(h);break;case"meta":if(y=M0("meta","content",u).get(o+(a.content||""))){for(A=0;A<y.length;A++)if(h=y[A],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(A,1);break e}}h=u.createElement(o),An(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[ln]=e,xt(h),o=h}e.stateNode=o}else E0(u,e.type,e.stateNode);else e.stateNode=S0(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?E0(u,e.type,e.stateNode):S0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Sf(e,e.memoizedProps,a.memoizedProps)}break;case 27:In(n,e),Fn(e),o&512&&(hn||a===null||wi(a,a.return)),a!==null&&o&4&&Sf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(In(n,e),Fn(e),o&512&&(hn||a===null||wi(a,a.return)),e.flags&32){u=e.stateNode;try{Ps(u,"")}catch(Gt){Be(e,e.return,Gt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Sf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Tf=!0);break;case 6:if(In(n,e),Fn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Gt){Be(e,e.return,Gt)}}break;case 3:if(sc=null,u=_i,_i=ic(n.containerInfo),In(n,e),_i=u,Fn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{hr(n.containerInfo)}catch(Gt){Be(e,e.return,Gt)}Tf&&(Tf=!1,Eg(e));break;case 4:o=_i,_i=ic(e.stateNode.containerInfo),In(n,e),Fn(e),_i=o;break;case 12:In(n,e),Fn(e);break;case 31:In(n,e),Fn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 13:In(n,e),Fn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xl=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 22:u=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,nt=Ki,ht=hn;if(Ki=nt||u,hn=ht||F,In(n,e),hn=ht,Ki=nt,Fn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||Ki||hn||ds(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(h=F.stateNode,u)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=F.stateNode;var mt=F.memoizedProps.style,at=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;A.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(Gt){Be(F,F.return,Gt)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(Gt){Be(F,F.return,Gt)}}}else if(n.tag===18){if(a===null){F=n;try{var ut=F.stateNode;u?h0(ut,!0):h0(F.stateNode,!1)}catch(Gt){Be(F,F.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,kl(e,a))));break;case 19:In(n,e),Fn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 30:break;case 21:break;default:In(n,e),Fn(e)}}function Fn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(pg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Mf(e);Vl(e,h,u);break;case 5:var y=a.stateNode;a.flags&32&&(Ps(y,""),a.flags&=-33);var A=Mf(e);Vl(e,A,y);break;case 3:case 4:var F=a.stateNode.containerInfo,nt=Mf(e);Ef(e,nt,F);break;default:throw Error(s(161))}}catch(ht){Be(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Eg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Eg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function $i(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)_g(e,n.alternate,n),n=n.sibling}function ds(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ba(4,n,n.return),ds(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&hg(n,n.return,a),ds(n);break;case 27:bo(n.stateNode);case 26:case 5:wi(n,n.return),ds(n);break;case 22:n.memoizedState===null&&ds(n);break;case 30:ds(n);break;default:ds(n)}e=e.sibling}}function ta(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,y=h.flags;switch(h.tag){case 0:case 11:case 15:ta(u,h,a),mo(4,h);break;case 1:if(ta(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Be(o,o.return,nt)}if(o=h,u=o.updateQueue,u!==null){var A=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)tm(F[u],A)}catch(nt){Be(o,o.return,nt)}}a&&y&64&&fg(h),go(h,h.return);break;case 27:mg(h);case 26:case 5:ta(u,h,a),a&&o===null&&y&4&&dg(h),go(h,h.return);break;case 12:ta(u,h,a);break;case 31:ta(u,h,a),a&&y&4&&yg(u,h);break;case 13:ta(u,h,a),a&&y&4&&Sg(u,h);break;case 22:h.memoizedState===null&&ta(u,h,a),go(h,h.return);break;case 30:break;default:ta(u,h,a)}n=n.sibling}}function bf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&eo(a))}function Af(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e))}function vi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Tg(e,n,a,o),n=n.sibling}function Tg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:vi(e,n,a,o),u&2048&&mo(9,n);break;case 1:vi(e,n,a,o);break;case 3:vi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e)));break;case 12:if(u&2048){vi(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,y=h.id,A=h.onPostCommit;typeof A=="function"&&A(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Be(n,n.return,F)}}else vi(e,n,a,o);break;case 31:vi(e,n,a,o);break;case 13:vi(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,y=n.alternate,n.memoizedState!==null?h._visibility&2?vi(e,n,a,o):_o(e,n):h._visibility&2?vi(e,n,a,o):(h._visibility|=2,er(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&bf(y,n);break;case 24:vi(e,n,a,o),u&2048&&Af(n.alternate,n);break;default:vi(e,n,a,o)}}function er(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,y=n,A=a,F=o,nt=y.flags;switch(y.tag){case 0:case 11:case 15:er(h,y,A,F,u),mo(8,y);break;case 23:break;case 22:var ht=y.stateNode;y.memoizedState!==null?ht._visibility&2?er(h,y,A,F,u):_o(h,y):(ht._visibility|=2,er(h,y,A,F,u)),u&&nt&2048&&bf(y.alternate,y);break;case 24:er(h,y,A,F,u),u&&nt&2048&&Af(y.alternate,y);break;default:er(h,y,A,F,u)}n=n.sibling}}function _o(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:_o(a,o),u&2048&&bf(o.alternate,o);break;case 24:_o(a,o),u&2048&&Af(o.alternate,o);break;default:_o(a,o)}n=n.sibling}}var vo=8192;function nr(e,n,a){if(e.subtreeFlags&vo)for(e=e.child;e!==null;)bg(e,n,a),e=e.sibling}function bg(e,n,a){switch(e.tag){case 26:nr(e,n,a),e.flags&vo&&e.memoizedState!==null&&Ky(a,_i,e.memoizedState,e.memoizedProps);break;case 5:nr(e,n,a);break;case 3:case 4:var o=_i;_i=ic(e.stateNode.containerInfo),nr(e,n,a),_i=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=vo,vo=16777216,nr(e,n,a),vo=o):nr(e,n,a));break;default:nr(e,n,a)}}function Ag(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function xo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,Rg(o,e)}Ag(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cg(e),e=e.sibling}function Cg(e){switch(e.tag){case 0:case 11:case 15:xo(e),e.flags&2048&&ba(9,e,e.return);break;case 3:xo(e);break;case 12:xo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,jl(e)):xo(e);break;default:xo(e)}}function jl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,Rg(o,e)}Ag(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ba(8,n,n.return),jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,jl(n));break;default:jl(n)}e=e.sibling}}function Rg(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:eo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else t:for(a=e;xn!==null;){o=xn;var u=o.sibling,h=o.return;if(vg(o),o===a){xn=null;break t}if(u!==null){u.return=h,xn=u;break t}xn=h}}}var hy={getCacheForType:function(e){var n=Tn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Tn(cn).controller.signal}},dy=typeof WeakMap=="function"?WeakMap:Map,Ue=0,je=null,me=null,xe=0,ze=0,Qn=null,Aa=!1,ir=!1,Cf=!1,ea=0,en=0,Ca=0,ps=0,Rf=0,Kn=0,ar=0,yo=null,Hn=null,wf=!1,Xl=0,wg=0,ql=1/0,Wl=null,Ra=null,mn=0,wa=null,sr=null,na=0,Df=0,Uf=null,Dg=null,So=0,Nf=null;function Jn(){return(Ue&2)!==0&&xe!==0?xe&-xe:O.T!==null?If():Qa()}function Ug(){if(Kn===0)if((xe&536870912)===0||Ee){var e=Dt;Dt<<=1,(Dt&3932160)===0&&(Dt=262144),Kn=e}else Kn=536870912;return e=Yn.current,e!==null&&(e.flags|=32),Kn}function Gn(e,n,a){(e===je&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(rr(e,0),Da(e,xe,Kn,!1)),Nn(e,a),((Ue&2)===0||e!==je)&&(e===je&&((Ue&2)===0&&(ps|=a),en===4&&Da(e,xe,Kn,!1)),Di(e))}function Ng(e,n,a){if((Ue&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ft(e,n),u=o?gy(e,n):Of(e,n,!0),h=o;do{if(u===0){ir&&!o&&Da(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!py(a)){u=Of(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var A=e;u=yo;var F=A.current.memoizedState.isDehydrated;if(F&&(rr(A,y).flags|=256),y=Of(A,y,!1),y!==2){if(Cf&&!F){A.errorRecoveryDisabledLanes|=h,ps|=h,u=4;break t}h=Hn,Hn=u,h!==null&&(Hn===null?Hn=h:Hn.push.apply(Hn,h))}u=y}if(h=!1,u!==2)continue}}if(u===1){rr(e,0),Da(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Da(o,n,Kn,!Aa);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Xl+300-b(),10<u)){if(Da(o,n,Kn,!Aa),gt(o,0,!0)!==0)break t;na=n,o.timeoutHandle=c0(Lg.bind(null,o,a,Hn,Wl,wf,n,Kn,ps,ar,Aa,h,"Throttled",-0,0),u);break t}Lg(o,a,Hn,Wl,wf,n,Kn,ps,ar,Aa,h,null,-0,0)}}break}while(!0);Di(e)}function Lg(e,n,a,o,u,h,y,A,F,nt,ht,mt,at,ut){if(e.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gi},bg(n,h,mt);var Gt=(h&62914560)===h?Xl-b():(h&4194048)===h?wg-b():0;if(Gt=Jy(mt,Gt),Gt!==null){na=h,e.cancelPendingCommit=Gt(Gg.bind(null,e,n,h,a,o,u,y,A,F,ht,mt,null,at,ut)),Da(e,h,y,!nt);return}}Gg(e,n,h,a,o,u,y,A,F)}function py(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!qn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Da(e,n,a,o){n&=~Rf,n&=~ps,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-zt(u),y=1<<h;o[h]=-1,u&=~y}a!==0&&Gr(e,a,n)}function Yl(){return(Ue&6)===0?(Mo(0),!1):!0}function Lf(){if(me!==null){if(ze===0)var e=me.return;else e=me,Xi=ss=null,Yu(e),Qs=null,io=0,e=me;for(;e!==null;)ug(e.alternate,e),e=e.return;me=null}}function rr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Oy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),na=0,Lf(),je=e,me=a=ki(e.current,null),xe=n,ze=0,Qn=null,Aa=!1,ir=Ft(e,n),Cf=!1,ar=Kn=Rf=ps=Ca=en=0,Hn=yo=null,wf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-zt(o),h=1<<u;n|=e[u],o&=~h}return ea=n,ml(),a}function Og(e,n){le=null,O.H=fo,n===Zs||n===El?(n=Qp(),ze=3):n===zu?(n=Qp(),ze=4):ze=n===ff?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,me===null&&(en=1,Bl(e,si(n,e.current)))}function Pg(){var e=Yn.current;return e===null?!0:(xe&4194048)===xe?ci===null:(xe&62914560)===xe||(xe&536870912)!==0?e===ci:!1}function zg(){var e=O.H;return O.H=fo,e===null?fo:e}function Bg(){var e=O.A;return O.A=hy,e}function Zl(){en=4,Aa||(xe&4194048)!==xe&&Yn.current!==null||(ir=!0),(Ca&134217727)===0&&(ps&134217727)===0||je===null||Da(je,xe,Kn,!1)}function Of(e,n,a){var o=Ue;Ue|=2;var u=zg(),h=Bg();(je!==e||xe!==n)&&(Wl=null,rr(e,n)),n=!1;var y=en;t:do try{if(ze!==0&&me!==null){var A=me,F=Qn;switch(ze){case 8:Lf(),y=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var nt=ze;if(ze=0,Qn=null,or(e,A,F,nt),a&&ir){y=0;break t}break;default:nt=ze,ze=0,Qn=null,or(e,A,F,nt)}}my(),y=en;break}catch(ht){Og(e,ht)}while(!0);return n&&e.shellSuspendCounter++,Xi=ss=null,Ue=o,O.H=u,O.A=h,me===null&&(je=null,xe=0,ml()),y}function my(){for(;me!==null;)Ig(me)}function gy(e,n){var a=Ue;Ue|=2;var o=zg(),u=Bg();je!==e||xe!==n?(Wl=null,ql=b()+500,rr(e,n)):ir=Ft(e,n);t:do try{if(ze!==0&&me!==null){n=me;var h=Qn;e:switch(ze){case 1:ze=0,Qn=null,or(e,n,h,1);break;case 2:case 9:if(Yp(h)){ze=0,Qn=null,Fg(n);break}n=function(){ze!==2&&ze!==9||je!==e||(ze=7),Di(e)},h.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Yp(h)?(ze=0,Qn=null,Fg(n)):(ze=0,Qn=null,or(e,n,h,7));break;case 5:var y=null;switch(me.tag){case 26:y=me.memoizedState;case 5:case 27:var A=me;if(y?T0(y):A.stateNode.complete){ze=0,Qn=null;var F=A.sibling;if(F!==null)me=F;else{var nt=A.return;nt!==null?(me=nt,Ql(nt)):me=null}break e}}ze=0,Qn=null,or(e,n,h,5);break;case 6:ze=0,Qn=null,or(e,n,h,6);break;case 8:Lf(),en=6;break t;default:throw Error(s(462))}}_y();break}catch(ht){Og(e,ht)}while(!0);return Xi=ss=null,O.H=o,O.A=u,Ue=a,me!==null?0:(je=null,xe=0,ml(),en)}function _y(){for(;me!==null&&!Qe();)Ig(me)}function Ig(e){var n=lg(e.alternate,e,ea);e.memoizedProps=e.pendingProps,n===null?Ql(e):me=n}function Fg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=ng(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=ng(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:Yu(n);default:ug(a,n),n=me=Bp(n,ea),n=lg(a,n,ea)}e.memoizedProps=e.pendingProps,n===null?Ql(e):me=n}function or(e,n,a,o){Xi=ss=null,Yu(n),Qs=null,io=0;var u=n.return;try{if(sy(e,u,n,a,xe)){en=1,Bl(e,si(a,e.current)),me=null;return}}catch(h){if(u!==null)throw me=u,h;en=1,Bl(e,si(a,e.current)),me=null;return}n.flags&32768?(Ee||o===1?e=!0:ir||(xe&536870912)!==0?e=!1:(Aa=e=!0,(o===2||o===9||o===3||o===6)&&(o=Yn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Hg(n,e)):Ql(n)}function Ql(e){var n=e;do{if((n.flags&32768)!==0){Hg(n,Aa);return}e=n.return;var a=ly(n.alternate,n,ea);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);en===0&&(en=5)}function Hg(e,n){do{var a=cy(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);en=6,me=null}function Gg(e,n,a,o,u,h,y,A,F){e.cancelPendingCommit=null;do Kl();while(mn!==0);if((Ue&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Su,ii(e,a,h,y,A,F),e===je&&(me=je=null,xe=0),sr=n,wa=e,na=a,Df=h,Uf=u,Dg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Sy(ft,function(){return qg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=X.p,X.p=2,y=Ue,Ue|=4;try{uy(e,n,a)}finally{Ue=y,X.p=u,O.T=o}}mn=1,Vg(),kg(),jg()}}function Vg(){if(mn===1){mn=0;var e=wa,n=sr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=X.p;X.p=2;var u=Ue;Ue|=4;try{Mg(n,e);var h=qf,y=Rp(e.containerInfo),A=h.focusedElem,F=h.selectionRange;if(y!==A&&A&&A.ownerDocument&&Cp(A.ownerDocument.documentElement,A)){if(F!==null&&gu(A)){var nt=F.start,ht=F.end;if(ht===void 0&&(ht=nt),"selectionStart"in A)A.selectionStart=nt,A.selectionEnd=Math.min(ht,A.value.length);else{var mt=A.ownerDocument||document,at=mt&&mt.defaultView||window;if(at.getSelection){var ut=at.getSelection(),Gt=A.textContent.length,ee=Math.min(F.start,Gt),He=F.end===void 0?ee:Math.min(F.end,Gt);!ut.extend&&ee>He&&(y=He,He=ee,ee=y);var K=Ap(A,ee),j=Ap(A,He);if(K&&j&&(ut.rangeCount!==1||ut.anchorNode!==K.node||ut.anchorOffset!==K.offset||ut.focusNode!==j.node||ut.focusOffset!==j.offset)){var et=mt.createRange();et.setStart(K.node,K.offset),ut.removeAllRanges(),ee>He?(ut.addRange(et),ut.extend(j.node,j.offset)):(et.setEnd(j.node,j.offset),ut.addRange(et))}}}}for(mt=[],ut=A;ut=ut.parentNode;)ut.nodeType===1&&mt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<mt.length;A++){var pt=mt[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}cc=!!Xf,qf=Xf=null}finally{Ue=u,X.p=o,O.T=a}}e.current=n,mn=2}}function kg(){if(mn===2){mn=0;var e=wa,n=sr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=X.p;X.p=2;var u=Ue;Ue|=4;try{_g(e,n.alternate,n)}finally{Ue=u,X.p=o,O.T=a}}mn=3}}function jg(){if(mn===4||mn===3){mn=0,P();var e=wa,n=sr,a=na,o=Dg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,sr=wa=null,Xg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ra=null),Ls(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=X.p,X.p=2,O.T=null;try{for(var h=e.onRecoverableError,y=0;y<o.length;y++){var A=o[y];h(A.value,{componentStack:A.stack})}}finally{O.T=n,X.p=u}}(na&3)!==0&&Kl(),Di(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Nf?So++:(So=0,Nf=e):So=0,Mo(0)}}function Xg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,eo(n)))}function Kl(){return Vg(),kg(),jg(),qg()}function qg(){if(mn!==5)return!1;var e=wa,n=Df;Df=0;var a=Ls(na),o=O.T,u=X.p;try{X.p=32>a?32:a,O.T=null,a=Uf,Uf=null;var h=wa,y=na;if(mn=0,sr=wa=null,na=0,(Ue&6)!==0)throw Error(s(331));var A=Ue;if(Ue|=4,Cg(h.current),Tg(h,h.current,y,a),Ue=A,Mo(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(bt,h)}catch{}return!0}finally{X.p=u,O.T=o,Xg(e,n)}}function Wg(e,n,a){n=si(a,n),n=uf(e.stateNode,n,2),e=Ma(e,n,2),e!==null&&(Nn(e,2),Di(e))}function Be(e,n,a){if(e.tag===3)Wg(e,e,a);else for(;n!==null;){if(n.tag===3){Wg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ra===null||!Ra.has(o))){e=si(a,e),a=Ym(2),o=Ma(n,a,2),o!==null&&(Zm(a,o,n,e),Nn(o,2),Di(o));break}}n=n.return}}function Pf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new dy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Cf=!0,u.add(a),e=vy.bind(null,e,n,a),n.then(e,e))}function vy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(xe&a)===a&&(en===4||en===3&&(xe&62914560)===xe&&300>b()-Xl?(Ue&2)===0&&rr(e,0):Rf|=a,ar===xe&&(ar=0)),Di(e)}function Yg(e,n){n===0&&(n=Pe()),e=ns(e,n),e!==null&&(Nn(e,n),Di(e))}function xy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Yg(e,a)}function yy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Yg(e,a)}function Sy(e,n){return re(e,n)}var Jl=null,lr=null,zf=!1,$l=!1,Bf=!1,Ua=0;function Di(e){e!==lr&&e.next===null&&(lr===null?Jl=lr=e:lr=lr.next=e),$l=!0,zf||(zf=!0,Ey())}function Mo(e,n){if(!Bf&&$l){Bf=!0;do for(var a=!1,o=Jl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var y=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-zt(42|e)+1)-1,h&=u&~(y&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Jg(o,h))}else h=xe,h=gt(o,o===je?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ft(o,h)||(a=!0,Jg(o,h));o=o.next}while(a);Bf=!1}}function My(){Zg()}function Zg(){$l=zf=!1;var e=0;Ua!==0&&Ly()&&(e=Ua);for(var n=b(),a=null,o=Jl;o!==null;){var u=o.next,h=Qg(o,n);h===0?(o.next=null,a===null?Jl=u:a.next=u,u===null&&(lr=a)):(a=o,(e!==0||(h&3)!==0)&&($l=!0)),o=u}mn!==0&&mn!==5||Mo(e),Ua!==0&&(Ua=0)}function Qg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var y=31-zt(h),A=1<<y,F=u[y];F===-1?((A&a)===0||(A&o)!==0)&&(u[y]=ae(A,n)):F<=n&&(e.expiredLanes|=A),h&=~A}if(n=je,a=xe,a=gt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&$e(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ft(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&$e(o),Ls(a)){case 2:case 8:a=St;break;case 32:a=ft;break;case 268435456:a=Rt;break;default:a=ft}return o=Kg.bind(null,e),a=re(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&$e(o),e.callbackPriority=2,e.callbackNode=null,2}function Kg(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Kl()&&e.callbackNode!==a)return null;var o=xe;return o=gt(e,e===je?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Ng(e,o,n),Qg(e,b()),e.callbackNode!=null&&e.callbackNode===a?Kg.bind(null,e):null)}function Jg(e,n){if(Kl())return null;Ng(e,n,!0)}function Ey(){Py(function(){(Ue&6)!==0?re(dt,My):Zg()})}function If(){if(Ua===0){var e=Ws;e===0&&(e=At,At<<=1,(At&261888)===0&&(At=256)),Ua=e}return Ua}function $g(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ol(""+e)}function t0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ty(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=$g((u[Sn]||null).action),y=o.submitter;y&&(n=(n=y[Sn]||null)?$g(n.formAction):y.getAttribute("formAction"),n!==null&&(h=n,y=null));var A=new fl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ua!==0){var F=y?t0(u,y):new FormData(u);af(a,{pending:!0,data:F,method:u.method,action:h},null,F)}}else typeof h=="function"&&(A.preventDefault(),F=y?t0(u,y):new FormData(u),af(a,{pending:!0,data:F,method:u.method,action:h},h,F))},currentTarget:u}]})}}for(var Ff=0;Ff<yu.length;Ff++){var Hf=yu[Ff],by=Hf.toLowerCase(),Ay=Hf[0].toUpperCase()+Hf.slice(1);gi(by,"on"+Ay)}gi(Up,"onAnimationEnd"),gi(Np,"onAnimationIteration"),gi(Lp,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(Vx,"onTransitionRun"),gi(kx,"onTransitionStart"),gi(jx,"onTransitionCancel"),gi(Op,"onTransitionEnd"),Kt("onMouseEnter",["mouseout","mouseover"]),Kt("onMouseLeave",["mouseout","mouseover"]),Kt("onPointerEnter",["pointerout","pointerover"]),Kt("onPointerLeave",["pointerout","pointerover"]),Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function e0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var y=o.length-1;0<=y;y--){var A=o[y],F=A.instance,nt=A.currentTarget;if(A=A.listener,F!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=nt;try{h(u)}catch(ht){pl(ht)}u.currentTarget=null,h=F}else for(y=0;y<o.length;y++){if(A=o[y],F=A.instance,nt=A.currentTarget,A=A.listener,F!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=nt;try{h(u)}catch(ht){pl(ht)}u.currentTarget=null,h=F}}}}function ge(e,n){var a=n[kr];a===void 0&&(a=n[kr]=new Set);var o=e+"__bubble";a.has(o)||(n0(n,e,2,!1),a.add(o))}function Gf(e,n,a){var o=0;n&&(o|=4),n0(a,e,o,n)}var tc="_reactListening"+Math.random().toString(36).slice(2);function Vf(e){if(!e[tc]){e[tc]=!0,Nt.forEach(function(a){a!=="selectionchange"&&(Cy.has(a)||Gf(a,!1,e),Gf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[tc]||(n[tc]=!0,Gf("selectionchange",!1,n))}}function n0(e,n,a,o){switch(U0(n)){case 2:var u=eS;break;case 8:u=nS;break;default:u=ih}a=u.bind(null,n,a,e),u=void 0,!ou||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function kf(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var A=o.stateNode.containerInfo;if(A===u)break;if(y===4)for(y=o.return;y!==null;){var F=y.tag;if((F===3||F===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;A!==null;){if(y=Y(A),y===null)return;if(F=y.tag,F===5||F===6||F===26||F===27){o=h=y;continue t}A=A.parentNode}}o=o.return}op(function(){var nt=h,ht=su(a),mt=[];t:{var at=Pp.get(e);if(at!==void 0){var ut=fl,Gt=e;switch(e){case"keypress":if(cl(a)===0)break t;case"keydown":case"keyup":ut=yx;break;case"focusin":Gt="focus",ut=fu;break;case"focusout":Gt="blur",ut=fu;break;case"beforeblur":case"afterblur":ut=fu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Ex;break;case Up:case Np:case Lp:ut=fx;break;case Op:ut=bx;break;case"scroll":case"scrollend":ut=rx;break;case"wheel":ut=Cx;break;case"copy":case"cut":case"paste":ut=dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=hp;break;case"toggle":case"beforetoggle":ut=wx}var ee=(n&4)!==0,He=!ee&&(e==="scroll"||e==="scrollend"),K=ee?at!==null?at+"Capture":null:at;ee=[];for(var j=nt,et;j!==null;){var pt=j;if(et=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||et===null||K===null||(pt=jr(j,K),pt!=null&&ee.push(To(j,pt,et))),He)break;j=j.return}0<ee.length&&(at=new ut(at,Gt,null,a,ht),mt.push({event:at,listeners:ee}))}}if((n&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",at&&a!==au&&(Gt=a.relatedTarget||a.fromElement)&&(Y(Gt)||Gt[pa]))break t;if((ut||at)&&(at=ht.window===ht?ht:(at=ht.ownerDocument)?at.defaultView||at.parentWindow:window,ut?(Gt=a.relatedTarget||a.toElement,ut=nt,Gt=Gt?Y(Gt):null,Gt!==null&&(He=c(Gt),ee=Gt.tag,Gt!==He||ee!==5&&ee!==27&&ee!==6)&&(Gt=null)):(ut=null,Gt=nt),ut!==Gt)){if(ee=up,pt="onMouseLeave",K="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ee=hp,pt="onPointerLeave",K="onPointerEnter",j="pointer"),He=ut==null?at:lt(ut),et=Gt==null?at:lt(Gt),at=new ee(pt,j+"leave",ut,a,ht),at.target=He,at.relatedTarget=et,pt=null,Y(ht)===nt&&(ee=new ee(K,j+"enter",Gt,a,ht),ee.target=et,ee.relatedTarget=He,pt=ee),He=pt,ut&&Gt)e:{for(ee=Ry,K=ut,j=Gt,et=0,pt=K;pt;pt=ee(pt))et++;pt=0;for(var te=j;te;te=ee(te))pt++;for(;0<et-pt;)K=ee(K),et--;for(;0<pt-et;)j=ee(j),pt--;for(;et--;){if(K===j||j!==null&&K===j.alternate){ee=K;break e}K=ee(K),j=ee(j)}ee=null}else ee=null;ut!==null&&i0(mt,at,ut,ee,!1),Gt!==null&&He!==null&&i0(mt,He,Gt,ee,!0)}}t:{if(at=nt?lt(nt):window,ut=at.nodeName&&at.nodeName.toLowerCase(),ut==="select"||ut==="input"&&at.type==="file")var Ce=yp;else if(vp(at))if(Sp)Ce=Fx;else{Ce=Bx;var jt=zx}else ut=at.nodeName,!ut||ut.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?nt&&iu(nt.elementType)&&(Ce=yp):Ce=Ix;if(Ce&&(Ce=Ce(e,nt))){xp(mt,Ce,a,ht);break t}jt&&jt(e,at,nt),e==="focusout"&&nt&&at.type==="number"&&nt.memoizedProps.value!=null&&pn(at,"number",at.value)}switch(jt=nt?lt(nt):window,e){case"focusin":(vp(jt)||jt.contentEditable==="true")&&(Fs=jt,_u=nt,Jr=null);break;case"focusout":Jr=_u=Fs=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,wp(mt,a,ht);break;case"selectionchange":if(Gx)break;case"keydown":case"keyup":wp(mt,a,ht)}var ce;if(du)t:{switch(e){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else Is?gp(e,a)&&(ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(dp&&a.locale!=="ko"&&(Is||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Is&&(ce=lp()):(ma=ht,lu="value"in ma?ma.value:ma.textContent,Is=!0)),jt=ec(nt,ye),0<jt.length&&(ye=new fp(ye,e,null,a,ht),mt.push({event:ye,listeners:jt}),ce?ye.data=ce:(ce=_p(a),ce!==null&&(ye.data=ce)))),(ce=Ux?Nx(e,a):Lx(e,a))&&(ye=ec(nt,"onBeforeInput"),0<ye.length&&(jt=new fp("onBeforeInput","beforeinput",null,a,ht),mt.push({event:jt,listeners:ye}),jt.data=ce)),Ty(mt,e,nt,a,ht)}e0(mt,n)})}function To(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ec(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=jr(e,a),u!=null&&o.unshift(To(e,u,h)),u=jr(e,n),u!=null&&o.push(To(e,u,h))),e.tag===3)return o;e=e.return}return[]}function Ry(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function i0(e,n,a,o,u){for(var h=n._reactName,y=[];a!==null&&a!==o;){var A=a,F=A.alternate,nt=A.stateNode;if(A=A.tag,F!==null&&F===o)break;A!==5&&A!==26&&A!==27||nt===null||(F=nt,u?(nt=jr(a,h),nt!=null&&y.unshift(To(a,nt,F))):u||(nt=jr(a,h),nt!=null&&y.push(To(a,nt,F)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var wy=/\r\n?/g,Dy=/\u0000|\uFFFD/g;function a0(e){return(typeof e=="string"?e:""+e).replace(wy,`
`).replace(Dy,"")}function s0(e,n){return n=a0(n),a0(e)===n}function Fe(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ps(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ps(e,""+o);break;case"className":Oe(e,"class",o);break;case"tabIndex":Oe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Oe(e,a,o);break;case"style":sp(e,o,h);break;case"data":if(n!=="object"){Oe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ol(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Fe(e,n,"name",u.name,u,null),Fe(e,n,"formEncType",u.formEncType,u,null),Fe(e,n,"formMethod",u.formMethod,u,null),Fe(e,n,"formTarget",u.formTarget,u,null)):(Fe(e,n,"encType",u.encType,u,null),Fe(e,n,"method",u.method,u,null),Fe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ol(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Gi);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ol(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),ke(e,"popover",o);break;case"xlinkActuate":pe(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":pe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":pe(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":pe(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":pe(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":pe(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":pe(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":pe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":pe(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ke(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ax.get(a)||a,ke(e,a,o))}}function jf(e,n,a,o,u,h){switch(a){case"style":sp(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ps(e,o):(typeof o=="number"||typeof o=="bigint")&&Ps(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Gi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[Sn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ke(e,a,o)}}}function An(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var y=a[h];if(y!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Fe(e,n,h,y,a,null)}}u&&Fe(e,n,"srcSet",a.srcSet,a,null),o&&Fe(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var A=h=y=u=null,F=null,nt=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":y=ht;break;case"checked":F=ht;break;case"defaultChecked":nt=ht;break;case"value":h=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:Fe(e,n,o,ht,a,null)}}Ln(e,h,A,F,nt,y,u,!1);return;case"select":ge("invalid",e),o=y=h=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":h=A;break;case"defaultValue":y=A;break;case"multiple":o=A;default:Fe(e,n,u,A,a,null)}n=h,a=y,e.multiple=!!o,n!=null?sn(e,!!o,n,!1):a!=null&&sn(e,!!o,a,!0);return;case"textarea":ge("invalid",e),h=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(A=a[y],A!=null))switch(y){case"value":o=A;break;case"defaultValue":u=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Fe(e,n,y,A,a,null)}Ai(e,o,u,h);return;case"option":for(F in a)a.hasOwnProperty(F)&&(o=a[F],o!=null)&&(F==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Fe(e,n,F,o,a,null));return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<Eo.length;o++)ge(Eo[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(o=a[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Fe(e,n,nt,o,a,null)}return;default:if(iu(n)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&jf(e,n,ht,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Fe(e,n,A,o,a,null))}function Uy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,y=null,A=null,F=null,nt=null,ht=null;for(ut in a){var mt=a[ut];if(a.hasOwnProperty(ut)&&mt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":F=mt;default:o.hasOwnProperty(ut)||Fe(e,n,ut,null,o,mt)}}for(var at in o){var ut=o[at];if(mt=a[at],o.hasOwnProperty(at)&&(ut!=null||mt!=null))switch(at){case"type":h=ut;break;case"name":u=ut;break;case"checked":nt=ut;break;case"defaultChecked":ht=ut;break;case"value":y=ut;break;case"defaultValue":A=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==mt&&Fe(e,n,at,ut,o,mt)}}Cn(e,y,A,F,nt,ht,h,u);return;case"select":ut=y=A=at=null;for(h in a)if(F=a[h],a.hasOwnProperty(h)&&F!=null)switch(h){case"value":break;case"multiple":ut=F;default:o.hasOwnProperty(h)||Fe(e,n,h,null,o,F)}for(u in o)if(h=o[u],F=a[u],o.hasOwnProperty(u)&&(h!=null||F!=null))switch(u){case"value":at=h;break;case"defaultValue":A=h;break;case"multiple":y=h;default:h!==F&&Fe(e,n,u,h,o,F)}n=A,a=y,o=ut,at!=null?sn(e,!!a,at,!1):!!o!=!!a&&(n!=null?sn(e,!!a,n,!0):sn(e,!!a,a?[]:"",!1));return;case"textarea":ut=at=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Fe(e,n,A,null,o,u)}for(y in o)if(u=o[y],h=a[y],o.hasOwnProperty(y)&&(u!=null||h!=null))switch(y){case"value":at=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Fe(e,n,y,u,o,h)}Os(e,at,ut);return;case"option":for(var Gt in a)at=a[Gt],a.hasOwnProperty(Gt)&&at!=null&&!o.hasOwnProperty(Gt)&&(Gt==="selected"?e.selected=!1:Fe(e,n,Gt,null,o,at));for(F in o)at=o[F],ut=a[F],o.hasOwnProperty(F)&&at!==ut&&(at!=null||ut!=null)&&(F==="selected"?e.selected=at&&typeof at!="function"&&typeof at!="symbol":Fe(e,n,F,at,o,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)at=a[ee],a.hasOwnProperty(ee)&&at!=null&&!o.hasOwnProperty(ee)&&Fe(e,n,ee,null,o,at);for(nt in o)if(at=o[nt],ut=a[nt],o.hasOwnProperty(nt)&&at!==ut&&(at!=null||ut!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:Fe(e,n,nt,at,o,ut)}return;default:if(iu(n)){for(var He in a)at=a[He],a.hasOwnProperty(He)&&at!==void 0&&!o.hasOwnProperty(He)&&jf(e,n,He,void 0,o,at);for(ht in o)at=o[ht],ut=a[ht],!o.hasOwnProperty(ht)||at===ut||at===void 0&&ut===void 0||jf(e,n,ht,at,o,ut);return}}for(var K in a)at=a[K],a.hasOwnProperty(K)&&at!=null&&!o.hasOwnProperty(K)&&Fe(e,n,K,null,o,at);for(mt in o)at=o[mt],ut=a[mt],!o.hasOwnProperty(mt)||at===ut||at==null&&ut==null||Fe(e,n,mt,at,o,ut)}function r0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ny(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,y=u.initiatorType,A=u.duration;if(h&&A&&r0(y)){for(y=0,A=u.responseEnd,o+=1;o<a.length;o++){var F=a[o],nt=F.startTime;if(nt>A)break;var ht=F.transferSize,mt=F.initiatorType;ht&&r0(mt)&&(F=F.responseEnd,y+=ht*(F<A?1:(A-nt)/(F-nt)))}if(--o,n+=8*(h+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Xf=null,qf=null;function nc(e){return e.nodeType===9?e:e.ownerDocument}function o0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function l0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Wf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yf=null;function Ly(){var e=window.event;return e&&e.type==="popstate"?e===Yf?!1:(Yf=e,!0):(Yf=null,!1)}var c0=typeof setTimeout=="function"?setTimeout:void 0,Oy=typeof clearTimeout=="function"?clearTimeout:void 0,u0=typeof Promise=="function"?Promise:void 0,Py=typeof queueMicrotask=="function"?queueMicrotask:typeof u0<"u"?function(e){return u0.resolve(null).then(e).catch(zy)}:c0;function zy(e){setTimeout(function(){throw e})}function Na(e){return e==="head"}function f0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),hr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")bo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,bo(a);for(var h=a.firstChild;h;){var y=h.nextSibling,A=h.nodeName;h[Ka]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=y}}else a==="body"&&bo(e.ownerDocument.body);a=u}while(a);hr(n)}function h0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Zf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zf(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function By(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ka])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function Iy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function d0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function Qf(e){return e.data==="$?"||e.data==="$~"}function Kf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Fy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Jf=null;function p0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function m0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function g0(e,n,a){switch(n=nc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function bo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);R(e)}var fi=new Map,_0=new Set;function ic(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ia=X.d;X.d={f:Hy,r:Gy,D:Vy,C:ky,L:jy,m:Xy,X:Wy,S:qy,M:Yy};function Hy(){var e=ia.f(),n=Yl();return e||n}function Gy(e){var n=rt(e);n!==null&&n.tag===5&&n.type==="form"?Om(n):ia.r(e)}var cr=typeof document>"u"?null:document;function v0(e,n,a){var o=cr;if(o&&typeof n=="string"&&n){var u=ve(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),_0.has(u)||(_0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),An(n,"link",e),xt(n),o.head.appendChild(n)))}}function Vy(e){ia.D(e),v0("dns-prefetch",e,null)}function ky(e,n){ia.C(e,n),v0("preconnect",e,n)}function jy(e,n,a){ia.L(e,n,a);var o=cr;if(o&&e&&n){var u='link[rel="preload"][as="'+ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ve(a.imageSizes)+'"]')):u+='[href="'+ve(e)+'"]';var h=u;switch(n){case"style":h=ur(e);break;case"script":h=fr(e)}fi.has(h)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ao(h))||n==="script"&&o.querySelector(Co(h))||(n=o.createElement("link"),An(n,"link",e),xt(n),o.head.appendChild(n)))}}function Xy(e,n){ia.m(e,n);var a=cr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ve(o)+'"][href="'+ve(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=fr(e)}if(!fi.has(h)&&(e=_({rel:"modulepreload",href:e},n),fi.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Co(h)))return}o=a.createElement("link"),An(o,"link",e),xt(o),a.head.appendChild(o)}}}function qy(e,n,a){ia.S(e,n,a);var o=cr;if(o&&e){var u=Q(o).hoistableStyles,h=ur(e);n=n||"default";var y=u.get(h);if(!y){var A={loading:0,preload:null};if(y=o.querySelector(Ao(h)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(h))&&$f(e,a);var F=y=o.createElement("link");xt(F),An(F,"link",e),F._p=new Promise(function(nt,ht){F.onload=nt,F.onerror=ht}),F.addEventListener("load",function(){A.loading|=1}),F.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ac(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:A},u.set(h,y)}}}function Wy(e,n){ia.X(e,n);var a=cr;if(a&&e){var o=Q(a).hoistableScripts,u=fr(e),h=o.get(u);h||(h=a.querySelector(Co(u)),h||(e=_({src:e,async:!0},n),(n=fi.get(u))&&th(e,n),h=a.createElement("script"),xt(h),An(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Yy(e,n){ia.M(e,n);var a=cr;if(a&&e){var o=Q(a).hoistableScripts,u=fr(e),h=o.get(u);h||(h=a.querySelector(Co(u)),h||(e=_({src:e,async:!0,type:"module"},n),(n=fi.get(u))&&th(e,n),h=a.createElement("script"),xt(h),An(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function x0(e,n,a,o){var u=(u=vt.current)?ic(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ur(a.href),a=Q(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ur(a.href);var h=Q(u).hoistableStyles,y=h.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,y),(h=u.querySelector(Ao(e)))&&!h._p&&(y.instance=h,y.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),h||Zy(u,e,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fr(a),a=Q(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ur(e){return'href="'+ve(e)+'"'}function Ao(e){return'link[rel="stylesheet"]['+e+"]"}function y0(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Zy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),An(n,"link",a),xt(n),e.head.appendChild(n))}function fr(e){return'[src="'+ve(e)+'"]'}function Co(e){return"script[async]"+e}function S0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ve(a.href)+'"]');if(o)return n.instance=o,xt(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),xt(o),An(o,"style",u),ac(o,a.precedence,e),n.instance=o;case"stylesheet":u=ur(a.href);var h=e.querySelector(Ao(u));if(h)return n.state.loading|=4,n.instance=h,xt(h),h;o=y0(a),(u=fi.get(u))&&$f(o,u),h=(e.ownerDocument||e).createElement("link"),xt(h);var y=h;return y._p=new Promise(function(A,F){y.onload=A,y.onerror=F}),An(h,"link",o),n.state.loading|=4,ac(h,a.precedence,e),n.instance=h;case"script":return h=fr(a.src),(u=e.querySelector(Co(h)))?(n.instance=u,xt(u),u):(o=a,(u=fi.get(h))&&(o=_({},a),th(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),xt(u),An(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ac(o,a.precedence,e));return n.instance}function ac(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,y=0;y<o.length;y++){var A=o[y];if(A.dataset.precedence===n)h=A;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function $f(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function th(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var sc=null;function M0(e,n,a){if(sc===null){var o=new Map,u=sc=new Map;u.set(a,o)}else u=sc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Ka]||h[ln]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(n)||"";y=e+y;var A=o.get(y);A?A.push(h):o.set(y,[h])}}return o}function E0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Qy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function T0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ky(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ur(o.href),h=n.querySelector(Ao(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=rc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,xt(h);return}h=n.ownerDocument||n,o=y0(o),(u=fi.get(u))&&$f(o,u),h=h.createElement("link"),xt(h);var y=h;y._p=new Promise(function(A,F){y.onload=A,y.onerror=F}),An(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=rc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var eh=0;function Jy(e,n){return e.stylesheets&&e.count===0&&lc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&lc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&eh===0&&(eh=62500*Ny());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>eh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function rc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var oc=null;function lc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,oc=new Map,n.forEach($y,e),oc=null,rc.call(e))}function $y(e,n){if(!(n.state.loading&4)){var a=oc.get(e);if(a)var o=a.get(null);else{a=new Map,oc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var y=u[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),h=a.get(y)||o,h===o&&a.set(null,u),a.set(y,u),this.count++,o=rc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ro={$$typeof:N,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function tS(e,n,a,o,u,h,y,A,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=be(0),this.hiddenUpdates=be(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function b0(e,n,a,o,u,h,y,A,F,nt,ht,mt){return e=new tS(e,n,a,y,F,nt,ht,mt,A),n=1,h===!0&&(n|=24),h=Wn(3,null,null,n),e.current=h,h.stateNode=e,n=Lu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Bu(h),e}function A0(e){return e?(e=Vs,e):Vs}function C0(e,n,a,o,u,h){u=A0(u),o.context===null?o.context=u:o.pendingContext=u,o=Sa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ma(e,o,n),a!==null&&(Gn(a,e,n),so(a,e,n))}function R0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function nh(e,n){R0(e,n),(e=e.alternate)&&R0(e,n)}function w0(e){if(e.tag===13||e.tag===31){var n=ns(e,67108864);n!==null&&Gn(n,e,67108864),nh(e,67108864)}}function D0(e){if(e.tag===13||e.tag===31){var n=Jn();n=Ns(n);var a=ns(e,n);a!==null&&Gn(a,e,n),nh(e,n)}}var cc=!0;function eS(e,n,a,o){var u=O.T;O.T=null;var h=X.p;try{X.p=2,ih(e,n,a,o)}finally{X.p=h,O.T=u}}function nS(e,n,a,o){var u=O.T;O.T=null;var h=X.p;try{X.p=8,ih(e,n,a,o)}finally{X.p=h,O.T=u}}function ih(e,n,a,o){if(cc){var u=ah(o);if(u===null)kf(e,n,o,uc,a),N0(e,o);else if(aS(u,e,n,a,o))o.stopPropagation();else if(N0(e,o),n&4&&-1<iS.indexOf(e)){for(;u!==null;){var h=rt(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=Mt(h.pendingLanes);if(y!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var F=1<<31-zt(y);A.entanglements[1]|=F,y&=~F}Di(h),(Ue&6)===0&&(ql=b()+500,Mo(0))}}break;case 31:case 13:A=ns(h,2),A!==null&&Gn(A,h,2),Yl(),nh(h,2)}if(h=ah(o),h===null&&kf(e,n,o,uc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else kf(e,n,o,null,a)}}function ah(e){return e=su(e),sh(e)}var uc=null;function sh(e){if(uc=null,e=Y(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return uc=e,null}function U0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(it()){case dt:return 2;case St:return 8;case ft:case Yt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var rh=!1,La=null,Oa=null,Pa=null,wo=new Map,Do=new Map,za=[],iS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function N0(e,n){switch(e){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=rt(n),n!==null&&w0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function aS(e,n,a,o,u){switch(n){case"focusin":return La=Uo(La,e,n,a,o,u),!0;case"dragenter":return Oa=Uo(Oa,e,n,a,o,u),!0;case"mouseover":return Pa=Uo(Pa,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return wo.set(h,Uo(wo.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Do.set(h,Uo(Do.get(h)||null,e,n,a,o,u)),!0}return!1}function L0(e){var n=Y(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Vr(e.priority,function(){D0(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Vr(e.priority,function(){D0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ah(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);au=o,a.target.dispatchEvent(o),au=null}else return n=rt(a),n!==null&&w0(n),e.blockedOn=a,!1;n.shift()}return!0}function O0(e,n,a){fc(e)&&a.delete(n)}function sS(){rh=!1,La!==null&&fc(La)&&(La=null),Oa!==null&&fc(Oa)&&(Oa=null),Pa!==null&&fc(Pa)&&(Pa=null),wo.forEach(O0),Do.forEach(O0)}function hc(e,n){e.blockedOn===n&&(e.blockedOn=null,rh||(rh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,sS)))}var dc=null;function P0(e){dc!==e&&(dc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){dc===e&&(dc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(sh(o||a)===null)continue;break}var h=rt(a);h!==null&&(e.splice(n,3),n-=3,af(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function hr(e){function n(F){return hc(F,e)}La!==null&&hc(La,e),Oa!==null&&hc(Oa,e),Pa!==null&&hc(Pa,e),wo.forEach(n),Do.forEach(n);for(var a=0;a<za.length;a++){var o=za[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)L0(a),a.blockedOn===null&&za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],y=u[Sn]||null;if(typeof h=="function")y||P0(a);else if(y){var A=null;if(h&&h.hasAttribute("formAction")){if(u=h,y=h[Sn]||null)A=y.formAction;else if(sh(u)!==null)continue}else A=y.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),P0(a)}}}function z0(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function oh(e){this._internalRoot=e}pc.prototype.render=oh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Jn();C0(a,o,e,n,null,null)},pc.prototype.unmount=oh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;C0(e.current,2,null,e,null,null),Yl(),n[pa]=null}};function pc(e){this._internalRoot=e}pc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Qa();e={blockedOn:null,target:e,priority:n};for(var a=0;a<za.length&&n!==0&&n<za[a].priority;a++);za.splice(a,0,e),a===0&&L0(e)}};var B0=t.version;if(B0!=="19.2.7")throw Error(s(527,B0,"19.2.7"));X.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var rS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{bt=mc.inject(rS),wt=mc}catch{}}return Lo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=jm,h=Xm,y=qm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=b0(e,1,!1,null,null,a,o,null,u,h,y,z0),e[pa]=n.current,Vf(e),new oh(n)},Lo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=jm,y=Xm,A=qm,F=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=b0(e,1,!0,n,a??null,o,u,F,h,y,A,z0),n.context=A0(null),a=n.current,o=Jn(),o=Ns(o),u=Sa(o),u.callback=null,Ma(a,u,o),a=o,n.current.lanes=a,Nn(n,a),Di(n),e[pa]=n.current,Vf(e),new pc(n)},Lo.version="19.2.7",Lo}var W0;function _S(){if(W0)return uh.exports;W0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),uh.exports=gS(),uh.exports}var vS=_S();const Gd="179",xS=0,Y0=1,yS=2,$_=1,SS=2,ca=3,Ya=0,kn=1,ua=2,Xa=0,Rr=1,Z0=2,Q0=3,K0=4,MS=5,Es=100,ES=101,TS=102,bS=103,AS=104,CS=200,RS=201,wS=202,DS=203,Zh=204,Qh=205,US=206,NS=207,LS=208,OS=209,PS=210,zS=211,BS=212,IS=213,FS=214,Kh=0,Jh=1,$h=2,Nr=3,td=4,ed=5,nd=6,id=7,tv=0,HS=1,GS=2,qa=0,VS=1,kS=2,jS=3,XS=4,qS=5,WS=6,YS=7,ev=300,Lr=301,Or=302,ad=303,sd=304,Kc=306,rd=1e3,bs=1001,od=1002,Ti=1003,ZS=1004,gc=1005,Oi=1006,ph=1007,As=1008,Bi=1009,nv=1010,iv=1011,Wo=1012,Vd=1013,Rs=1014,fa=1015,el=1016,kd=1017,jd=1018,Yo=1020,av=35902,sv=1021,rv=1022,Ei=1023,Zo=1026,Qo=1027,ov=1028,Xd=1029,lv=1030,qd=1031,Wd=1033,Hc=33776,Gc=33777,Vc=33778,kc=33779,ld=35840,cd=35841,ud=35842,fd=35843,hd=36196,dd=37492,pd=37496,md=37808,gd=37809,_d=37810,vd=37811,xd=37812,yd=37813,Sd=37814,Md=37815,Ed=37816,Td=37817,bd=37818,Ad=37819,Cd=37820,Rd=37821,jc=36492,wd=36494,Dd=36495,cv=36283,Ud=36284,Nd=36285,Ld=36286,QS=3200,KS=3201,uv=0,JS=1,ja="",di="srgb",Pr="srgb-linear",Wc="linear",Ge="srgb",dr=7680,J0=519,$S=512,tM=513,eM=514,fv=515,nM=516,iM=517,aM=518,sM=519,$0=35044,t_="300 es",Pi=2e3,Yc=2001;class Ir{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mh=Math.PI/180,Od=180/Math.PI;function Fr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function _e(r,t,i){return Math.max(t,Math.min(i,r))}function rM(r,t){return(r%t+t)%t}function gh(r,t,i){return(1-i)*r+i*t}function Oo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Vn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Wt{constructor(t=0,i=0){Wt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nl{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3];const x=c[f+0],M=c[f+1],T=c[f+2],w=c[f+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=T,t[i+3]=w;return}if(_!==w||m!==x||p!==M||g!==T){let E=1-d;const v=m*x+p*M+g*T+_*w,H=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const G=Math.sqrt(N),k=Math.atan2(G,v*H);E=Math.sin(E*k)/G,d=Math.sin(d*k)/G}const C=d*H;if(m=m*E+x*C,p=p*E+M*C,g=g*E+T*C,_=_*E+w*C,E===1-d){const G=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=G,p*=G,g*=G,_*=G}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[f],x=c[f+1],M=c[f+2],T=c[f+3];return t[i]=d*T+g*_+m*M-p*x,t[i+1]=m*T+g*x+p*_-d*M,t[i+2]=p*T+g*M+d*x-m*_,t[i+3]=g*T-d*_-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(c/2),x=m(s/2),M=m(l/2),T=m(c/2);switch(f){case"XYZ":this._x=x*g*_+p*M*T,this._y=p*M*_-x*g*T,this._z=p*g*T+x*M*_,this._w=p*g*_-x*M*T;break;case"YXZ":this._x=x*g*_+p*M*T,this._y=p*M*_-x*g*T,this._z=p*g*T-x*M*_,this._w=p*g*_+x*M*T;break;case"ZXY":this._x=x*g*_-p*M*T,this._y=p*M*_+x*g*T,this._z=p*g*T+x*M*_,this._w=p*g*_-x*M*T;break;case"ZYX":this._x=x*g*_-p*M*T,this._y=p*M*_+x*g*T,this._z=p*g*T-x*M*_,this._w=p*g*_+x*M*T;break;case"YZX":this._x=x*g*_+p*M*T,this._y=p*M*_+x*g*T,this._z=p*g*T-x*M*_,this._w=p*g*_-x*M*T;break;case"XZY":this._x=x*g*_-p*M*T,this._y=p*M*_-x*g*T,this._z=p*g*T+x*M*_,this._w=p*g*_+x*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=s+d+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(s>d&&s>_){const M=2*Math.sqrt(1+s-d-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-s-_);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-s-d);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+f*d+l*p-c*m,this._y=l*g+f*m+c*d-s*p,this._z=c*g+f*p+s*m-l*d,this._w=f*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*f+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),_=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=f*_+this._w*x,this._x=s*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,s=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(e_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(e_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),g=2*(d*i-c*l),_=2*(c*s-f*i);return this.x=i+m*p+f*_-d*g,this.y=s+m*g+d*p-c*_,this.z=l+m*_+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return _h.copy(this).projectOnVector(t),this.sub(_h)}reflect(t){return this.sub(_h.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _h=new J,e_=new nl;class ue{constructor(t,i,s,l,c,f,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p)}set(t,i,s,l,c,f,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],x=s[2],M=s[5],T=s[8],w=l[0],E=l[3],v=l[6],H=l[1],N=l[4],C=l[7],G=l[2],k=l[5],B=l[8];return c[0]=f*w+d*H+m*G,c[3]=f*E+d*N+m*k,c[6]=f*v+d*C+m*B,c[1]=p*w+g*H+_*G,c[4]=p*E+g*N+_*k,c[7]=p*v+g*C+_*B,c[2]=x*w+M*H+T*G,c[5]=x*E+M*N+T*k,c[8]=x*v+M*C+T*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*d*p-s*c*g+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*f-d*p,x=d*m-g*c,M=p*c-f*m,T=i*_+s*x+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=_*w,t[1]=(l*p-g*s)*w,t[2]=(d*s-l*f)*w,t[3]=x*w,t[4]=(g*i-l*m)*w,t[5]=(l*c-d*i)*w,t[6]=M*w,t[7]=(s*m-p*i)*w,t[8]=(f*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(vh.makeScale(t,i)),this}rotate(t){return this.premultiply(vh.makeRotation(-t)),this}translate(t,i){return this.premultiply(vh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vh=new ue;function hv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Zc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function oM(){const r=Zc("canvas");return r.style.display="block",r}const n_={};function wr(r){r in n_||(n_[r]=!0,console.warn(r))}function lM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const i_=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),a_=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cM(){const r={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ge&&(l.r=ha(l.r),l.g=ha(l.g),l.b=ha(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ge&&(l.r=Dr(l.r),l.g=Dr(l.g),l.b=Dr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ja?Wc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return wr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return wr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Pr]:{primaries:t,whitePoint:s,transfer:Wc,toXYZ:i_,fromXYZ:a_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:t,whitePoint:s,transfer:Ge,toXYZ:i_,fromXYZ:a_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),r}const De=cM();function ha(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Dr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let pr;class uM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{pr===void 0&&(pr=Zc("canvas")),pr.width=t.width,pr.height=t.height;const l=pr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=pr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Zc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ha(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ha(i[s]/255)*255):i[s]=ha(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fM=0;class Yd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Fr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(xh(l[f].image)):c.push(xh(l[f]))}else c=xh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function xh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?uM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hM=0;const yh=new J;class jn extends Ir{constructor(t=jn.DEFAULT_IMAGE,i=jn.DEFAULT_MAPPING,s=bs,l=bs,c=Oi,f=As,d=Ei,m=Bi,p=jn.DEFAULT_ANISOTROPY,g=ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=Fr(),this.name="",this.source=new Yd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yh).x}get height(){return this.source.getSize(yh).y}get depth(){return this.source.getSize(yh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ev)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rd:t.x=t.x-Math.floor(t.x);break;case bs:t.x=t.x<0?0:1;break;case od:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rd:t.y=t.y-Math.floor(t.y);break;case bs:t.y=t.y<0?0:1;break;case od:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=ev;jn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,i=0,s=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],x=m[1],M=m[5],T=m[9],w=m[2],E=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-w)<.01&&Math.abs(T-E)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+w)<.1&&Math.abs(T+E)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,C=(M+1)/2,G=(v+1)/2,k=(g+x)/4,B=(_+w)/4,W=(T+E)/4;return N>C&&N>G?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=k/s,c=B/s):C>G?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=k/l,c=W/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=B/c,l=W/c),this.set(s,l,c,i),this}let H=Math.sqrt((E-T)*(E-T)+(_-w)*(_-w)+(x-g)*(x-g));return Math.abs(H)<.001&&(H=1),this.x=(E-T)/H,this.y=(_-w)/H,this.z=(x-g)/H,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this.w=_e(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this.w=_e(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dM extends Ir{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new jn(l);this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Oi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Yd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ws extends dM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class dv extends jn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pM extends jn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class il{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(xi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(xi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=xi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,xi):xi.fromBufferAttribute(c,f),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_c.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),_c.copy(s.boundingBox)),_c.applyMatrix4(t.matrixWorld),this.union(_c)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),vc.subVectors(this.max,Po),mr.subVectors(t.a,Po),gr.subVectors(t.b,Po),_r.subVectors(t.c,Po),Ia.subVectors(gr,mr),Fa.subVectors(_r,gr),ms.subVectors(mr,_r);let i=[0,-Ia.z,Ia.y,0,-Fa.z,Fa.y,0,-ms.z,ms.y,Ia.z,0,-Ia.x,Fa.z,0,-Fa.x,ms.z,0,-ms.x,-Ia.y,Ia.x,0,-Fa.y,Fa.x,0,-ms.y,ms.x,0];return!Sh(i,mr,gr,_r,vc)||(i=[1,0,0,0,1,0,0,0,1],!Sh(i,mr,gr,_r,vc))?!1:(xc.crossVectors(Ia,Fa),i=[xc.x,xc.y,xc.z],Sh(i,mr,gr,_r,vc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(aa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const aa=[new J,new J,new J,new J,new J,new J,new J,new J],xi=new J,_c=new il,mr=new J,gr=new J,_r=new J,Ia=new J,Fa=new J,ms=new J,Po=new J,vc=new J,xc=new J,gs=new J;function Sh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){gs.fromArray(r,c);const d=l.x*Math.abs(gs.x)+l.y*Math.abs(gs.y)+l.z*Math.abs(gs.z),m=t.dot(gs),p=i.dot(gs),g=s.dot(gs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const mM=new il,zo=new J,Mh=new J;class Zd{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):mM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);const i=zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(zo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(Mh)),this.expandByPoint(zo.copy(t.center).sub(Mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const sa=new J,Eh=new J,yc=new J,Ha=new J,Th=new J,Sc=new J,bh=new J;class gM{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=sa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(sa.copy(this.origin).addScaledVector(this.direction,i),sa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Eh.copy(t).add(i).multiplyScalar(.5),yc.copy(i).sub(t).normalize(),Ha.copy(this.origin).sub(Eh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(yc),d=Ha.dot(this.direction),m=-Ha.dot(yc),p=Ha.lengthSq(),g=Math.abs(1-f*f);let _,x,M,T;if(g>0)if(_=f*m-d,x=f*d-m,T=c*g,_>=0)if(x>=-T)if(x<=T){const w=1/g;_*=w,x*=w,M=_*(_+f*x+2*d)+x*(f*_+x+2*m)+p}else x=c,_=Math.max(0,-(f*x+d)),M=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(f*x+d)),M=-_*_+x*(x+2*m)+p;else x<=-T?(_=Math.max(0,-(-f*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+p):x<=T?(_=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(_=Math.max(0,-(f*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+p);else x=f>0?-c:c,_=Math.max(0,-(f*x+d)),M=-_*_+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Eh).addScaledVector(yc,x),M}intersectSphere(t,i){sa.subVectors(t.center,this.origin);const s=sa.dot(this.direction),l=sa.dot(sa)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(d=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,sa)!==null}intersectTriangle(t,i,s,l,c){Th.subVectors(i,t),Sc.subVectors(s,t),bh.crossVectors(Th,Sc);let f=this.direction.dot(bh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Ha.subVectors(this.origin,t);const m=d*this.direction.dot(Sc.crossVectors(Ha,Sc));if(m<0)return null;const p=d*this.direction.dot(Th.cross(Ha));if(p<0||m+p>f)return null;const g=-d*Ha.dot(bh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(t,i,s,l,c,f,d,m,p,g,_,x,M,T,w,E){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p,g,_,x,M,T,w,E)}set(t,i,s,l,c,f,d,m,p,g,_,x,M,T,w,E){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=M,v[7]=T,v[11]=w,v[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/vr.setFromMatrixColumn(t,0).length(),c=1/vr.setFromMatrixColumn(t,1).length(),f=1/vr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=f*g,M=f*_,T=d*g,w=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=M+T*p,i[5]=x-w*p,i[9]=-d*m,i[2]=w-x*p,i[6]=T+M*p,i[10]=f*m}else if(t.order==="YXZ"){const x=m*g,M=m*_,T=p*g,w=p*_;i[0]=x+w*d,i[4]=T*d-M,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=M*d-T,i[6]=w+x*d,i[10]=f*m}else if(t.order==="ZXY"){const x=m*g,M=m*_,T=p*g,w=p*_;i[0]=x-w*d,i[4]=-f*_,i[8]=T+M*d,i[1]=M+T*d,i[5]=f*g,i[9]=w-x*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const x=f*g,M=f*_,T=d*g,w=d*_;i[0]=m*g,i[4]=T*p-M,i[8]=x*p+w,i[1]=m*_,i[5]=w*p+x,i[9]=M*p-T,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const x=f*m,M=f*p,T=d*m,w=d*p;i[0]=m*g,i[4]=w-x*_,i[8]=T*_+M,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*_+T,i[10]=x-w*_}else if(t.order==="XZY"){const x=f*m,M=f*p,T=d*m,w=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+w,i[5]=f*g,i[9]=M*_-T,i[2]=T*_-M,i[6]=d*g,i[10]=w*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_M,t,vM)}lookAt(t,i,s){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ga.crossVectors(s,$n),Ga.lengthSq()===0&&(Math.abs(s.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ga.crossVectors(s,$n)),Ga.normalize(),Mc.crossVectors($n,Ga),l[0]=Ga.x,l[4]=Mc.x,l[8]=$n.x,l[1]=Ga.y,l[5]=Mc.y,l[9]=$n.y,l[2]=Ga.z,l[6]=Mc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],x=s[9],M=s[13],T=s[2],w=s[6],E=s[10],v=s[14],H=s[3],N=s[7],C=s[11],G=s[15],k=l[0],B=l[4],W=l[8],D=l[12],U=l[1],I=l[5],ot=l[9],$=l[13],L=l[2],ct=l[6],O=l[10],X=l[14],Z=l[3],yt=l[7],Tt=l[11],z=l[15];return c[0]=f*k+d*U+m*L+p*Z,c[4]=f*B+d*I+m*ct+p*yt,c[8]=f*W+d*ot+m*O+p*Tt,c[12]=f*D+d*$+m*X+p*z,c[1]=g*k+_*U+x*L+M*Z,c[5]=g*B+_*I+x*ct+M*yt,c[9]=g*W+_*ot+x*O+M*Tt,c[13]=g*D+_*$+x*X+M*z,c[2]=T*k+w*U+E*L+v*Z,c[6]=T*B+w*I+E*ct+v*yt,c[10]=T*W+w*ot+E*O+v*Tt,c[14]=T*D+w*$+E*X+v*z,c[3]=H*k+N*U+C*L+G*Z,c[7]=H*B+N*I+C*ct+G*yt,c[11]=H*W+N*ot+C*O+G*Tt,c[15]=H*D+N*$+C*X+G*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],x=t[10],M=t[14],T=t[3],w=t[7],E=t[11],v=t[15];return T*(+c*m*_-l*p*_-c*d*x+s*p*x+l*d*M-s*m*M)+w*(+i*m*M-i*p*x+c*f*x-l*f*M+l*p*g-c*m*g)+E*(+i*p*_-i*d*M-c*f*_+s*f*M+c*d*g-s*p*g)+v*(-l*d*g-i*m*_+i*d*x+l*f*_-s*f*x+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],x=t[10],M=t[11],T=t[12],w=t[13],E=t[14],v=t[15],H=_*E*p-w*x*p+w*m*M-d*E*M-_*m*v+d*x*v,N=T*x*p-g*E*p-T*m*M+f*E*M+g*m*v-f*x*v,C=g*w*p-T*_*p+T*d*M-f*w*M-g*d*v+f*_*v,G=T*_*m-g*w*m-T*d*x+f*w*x+g*d*E-f*_*E,k=i*H+s*N+l*C+c*G;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/k;return t[0]=H*B,t[1]=(w*x*c-_*E*c-w*l*M+s*E*M+_*l*v-s*x*v)*B,t[2]=(d*E*c-w*m*c+w*l*p-s*E*p-d*l*v+s*m*v)*B,t[3]=(_*m*c-d*x*c-_*l*p+s*x*p+d*l*M-s*m*M)*B,t[4]=N*B,t[5]=(g*E*c-T*x*c+T*l*M-i*E*M-g*l*v+i*x*v)*B,t[6]=(T*m*c-f*E*c-T*l*p+i*E*p+f*l*v-i*m*v)*B,t[7]=(f*x*c-g*m*c+g*l*p-i*x*p-f*l*M+i*m*M)*B,t[8]=C*B,t[9]=(T*_*c-g*w*c-T*s*M+i*w*M+g*s*v-i*_*v)*B,t[10]=(f*w*c-T*d*c+T*s*p-i*w*p-f*s*v+i*d*v)*B,t[11]=(g*d*c-f*_*c-g*s*p+i*_*p+f*s*M-i*d*M)*B,t[12]=G*B,t[13]=(g*w*l-T*_*l+T*s*x-i*w*x-g*s*E+i*_*E)*B,t[14]=(T*d*l-f*w*l-T*s*m+i*w*m+f*s*E-i*d*E)*B,t[15]=(f*_*l-g*d*l+g*s*m-i*_*m-f*s*x+i*d*x)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,g=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*f,0,p*m-l*d,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,g=f+f,_=d+d,x=c*p,M=c*g,T=c*_,w=f*g,E=f*_,v=d*_,H=m*p,N=m*g,C=m*_,G=s.x,k=s.y,B=s.z;return l[0]=(1-(w+v))*G,l[1]=(M+C)*G,l[2]=(T-N)*G,l[3]=0,l[4]=(M-C)*k,l[5]=(1-(x+v))*k,l[6]=(E+H)*k,l[7]=0,l[8]=(T+N)*B,l[9]=(E-H)*B,l[10]=(1-(x+w))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=vr.set(l[0],l[1],l[2]).length();const f=vr.set(l[4],l[5],l[6]).length(),d=vr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],yi.copy(this);const p=1/c,g=1/f,_=1/d;return yi.elements[0]*=p,yi.elements[1]*=p,yi.elements[2]*=p,yi.elements[4]*=g,yi.elements[5]*=g,yi.elements[6]*=g,yi.elements[8]*=_,yi.elements[9]*=_,yi.elements[10]*=_,i.setFromRotationMatrix(yi),s.x=c,s.y=f,s.z=d,this}makePerspective(t,i,s,l,c,f,d=Pi,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(s-l),x=(i+t)/(i-t),M=(s+l)/(s-l);let T,w;if(m)T=c/(f-c),w=f*c/(f-c);else if(d===Pi)T=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(d===Yc)T=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=Pi,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-l),x=-(i+t)/(i-t),M=-(s+l)/(s-l);let T,w;if(m)T=1/(f-c),w=f/(f-c);else if(d===Pi)T=-2/(f-c),w=-(f+c)/(f-c);else if(d===Yc)T=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const vr=new J,yi=new an,_M=new J(0,0,0),vM=new J(1,1,1),Ga=new J,Mc=new J,$n=new J,s_=new an,r_=new nl;class Ii{constructor(t=0,i=0,s=0,l=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(_e(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-_e(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-_e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return s_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(s_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return r_.setFromEuler(this),this.setFromQuaternion(r_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class pv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xM=0;const o_=new J,xr=new nl,ra=new an,Ec=new J,Bo=new J,yM=new J,SM=new nl,l_=new J(1,0,0),c_=new J(0,1,0),u_=new J(0,0,1),f_={type:"added"},MM={type:"removed"},yr={type:"childadded",child:null},Ah={type:"childremoved",child:null};class Un extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const t=new J,i=new Ii,s=new nl,l=new J(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new ue}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return xr.setFromAxisAngle(t,i),this.quaternion.multiply(xr),this}rotateOnWorldAxis(t,i){return xr.setFromAxisAngle(t,i),this.quaternion.premultiply(xr),this}rotateX(t){return this.rotateOnAxis(l_,t)}rotateY(t){return this.rotateOnAxis(c_,t)}rotateZ(t){return this.rotateOnAxis(u_,t)}translateOnAxis(t,i){return o_.copy(t).applyQuaternion(this.quaternion),this.position.add(o_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(l_,t)}translateY(t){return this.translateOnAxis(c_,t)}translateZ(t){return this.translateOnAxis(u_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ra.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Ec.copy(t):Ec.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ra.lookAt(Bo,Ec,this.up):ra.lookAt(Ec,Bo,this.up),this.quaternion.setFromRotationMatrix(ra),l&&(ra.extractRotation(l.matrixWorld),xr.setFromRotationMatrix(ra),this.quaternion.premultiply(xr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(f_),yr.child=t,this.dispatchEvent(yr),yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(MM),Ah.child=t,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ra.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ra.multiply(t.parent.matrixWorld)),t.applyMatrix4(ra),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(f_),yr.child=t,this.dispatchEvent(yr),yr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,yM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,SM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),x=f(t.skeletons),M=f(t.animations),T=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Un.DEFAULT_UP=new J(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new J,oa=new J,Ch=new J,la=new J,Sr=new J,Mr=new J,h_=new J,Rh=new J,wh=new J,Dh=new J,Uh=new nn,Nh=new nn,Lh=new nn;class Mi{constructor(t=new J,i=new J,s=new J){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Si.subVectors(t,i),l.cross(Si);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Si.subVectors(l,i),oa.subVectors(s,i),Ch.subVectors(t,i);const f=Si.dot(Si),d=Si.dot(oa),m=Si.dot(Ch),p=oa.dot(oa),g=oa.dot(Ch),_=f*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(p*m-d*g)*x,T=(f*g-d*m)*x;return c.set(1-M-T,T,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,la)===null?!1:la.x>=0&&la.y>=0&&la.x+la.y<=1}static getInterpolation(t,i,s,l,c,f,d,m){return this.getBarycoord(t,i,s,l,la)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,la.x),m.addScaledVector(f,la.y),m.addScaledVector(d,la.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Uh.setScalar(0),Nh.setScalar(0),Lh.setScalar(0),Uh.fromBufferAttribute(t,i),Nh.fromBufferAttribute(t,s),Lh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Uh,c.x),f.addScaledVector(Nh,c.y),f.addScaledVector(Lh,c.z),f}static isFrontFacing(t,i,s,l){return Si.subVectors(s,i),oa.subVectors(t,i),Si.cross(oa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),oa.subVectors(this.a,this.b),Si.cross(oa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Mi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;Sr.subVectors(l,s),Mr.subVectors(c,s),Rh.subVectors(t,s);const m=Sr.dot(Rh),p=Mr.dot(Rh);if(m<=0&&p<=0)return i.copy(s);wh.subVectors(t,l);const g=Sr.dot(wh),_=Mr.dot(wh);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Sr,f);Dh.subVectors(t,c);const M=Sr.dot(Dh),T=Mr.dot(Dh);if(T>=0&&M<=T)return i.copy(c);const w=M*p-m*T;if(w<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(Mr,d);const E=g*T-M*_;if(E<=0&&_-g>=0&&M-T>=0)return h_.subVectors(c,l),d=(_-g)/(_-g+(M-T)),i.copy(l).addScaledVector(h_,d);const v=1/(E+w+x);return f=w*v,d=x*v,i.copy(s).addScaledVector(Sr,f).addScaledVector(Mr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Va={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function Oh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Ne{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=s,De.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=De.workingColorSpace){if(t=rM(t,1),i=_e(i,0,1),s=_e(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Oh(f,c,t+1/3),this.g=Oh(f,c,t),this.b=Oh(f,c,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=di){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=di){const s=mv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ha(t.r),this.g=ha(t.g),this.b=ha(t.b),this}copyLinearToSRGB(t){return this.r=Dr(t.r),this.g=Dr(t.g),this.b=Dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return De.workingToColorSpace(Dn.copy(this),t),Math.round(_e(Dn.r*255,0,255))*65536+Math.round(_e(Dn.g*255,0,255))*256+Math.round(_e(Dn.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(Dn.copy(this),i);const s=Dn.r,l=Dn.g,c=Dn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const _=f-d;switch(p=g<=.5?_/(f+d):_/(2-f-d),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=di){De.workingToColorSpace(Dn.copy(this),t);const i=Dn.r,s=Dn.g,l=Dn.b;return t!==di?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Va),this.setHSL(Va.h+t,Va.s+i,Va.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Va),t.getHSL(Tc);const s=gh(Va.h,Tc.h,i),l=gh(Va.s,Tc.s,i),c=gh(Va.l,Tc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Ne;Ne.NAMES=mv;let EM=0;class al extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=Fr(),this.name="",this.type="Material",this.blending=Rr,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zh,this.blendDst=Qh,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=J0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(s.blending=this.blending),this.side!==Ya&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Zh&&(s.blendSrc=this.blendSrc),this.blendDst!==Qh&&(s.blendDst=this.blendDst),this.blendEquation!==Es&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==J0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==dr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==dr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==dr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class gv extends al{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=tv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new J,bc=new Wt;let TM=0;class zi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=$0,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)bc.fromBufferAttribute(this,i),bc.applyMatrix3(t),this.setXY(i,bc.x,bc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Oo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Oo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Oo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Oo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Oo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),c=Vn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$0&&(t.usage=this.usage),t}}class _v extends zi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class vv extends zi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ni extends zi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let bM=0;const hi=new an,Ph=new Un,Er=new J,ti=new il,Io=new il,yn=new J;class da extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=Fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hv(t)?vv:_v)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ue().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,i,s){return hi.makeTranslation(t,i,s),this.applyMatrix4(hi),this}scale(t,i,s){return hi.makeScale(t,i,s),this.applyMatrix4(hi),this}lookAt(t){return Ph.lookAt(t),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ni(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Io.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ti.min,Io.min),ti.expandByPoint(yn),yn.addVectors(ti.max,Io.max),ti.expandByPoint(yn)):(ti.expandByPoint(Io.min),ti.expandByPoint(Io.max))}ti.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)yn.fromBufferAttribute(d,p),m&&(Er.fromBufferAttribute(t,p),yn.add(Er)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let W=0;W<s.count;W++)d[W]=new J,m[W]=new J;const p=new J,g=new J,_=new J,x=new Wt,M=new Wt,T=new Wt,w=new J,E=new J;function v(W,D,U){p.fromBufferAttribute(s,W),g.fromBufferAttribute(s,D),_.fromBufferAttribute(s,U),x.fromBufferAttribute(c,W),M.fromBufferAttribute(c,D),T.fromBufferAttribute(c,U),g.sub(p),_.sub(p),M.sub(x),T.sub(x);const I=1/(M.x*T.y-T.x*M.y);isFinite(I)&&(w.copy(g).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(I),E.copy(_).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(I),d[W].add(w),d[D].add(w),d[U].add(w),m[W].add(E),m[D].add(E),m[U].add(E))}let H=this.groups;H.length===0&&(H=[{start:0,count:t.count}]);for(let W=0,D=H.length;W<D;++W){const U=H[W],I=U.start,ot=U.count;for(let $=I,L=I+ot;$<L;$+=3)v(t.getX($+0),t.getX($+1),t.getX($+2))}const N=new J,C=new J,G=new J,k=new J;function B(W){G.fromBufferAttribute(l,W),k.copy(G);const D=d[W];N.copy(D),N.sub(G.multiplyScalar(G.dot(D))).normalize(),C.crossVectors(k,D);const I=C.dot(m[W])<0?-1:1;f.setXYZW(W,N.x,N.y,N.z,I)}for(let W=0,D=H.length;W<D;++W){const U=H[W],I=U.start,ot=U.count;for(let $=I,L=I+ot;$<L;$+=3)B(t.getX($+0)),B(t.getX($+1)),B(t.getX($+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new zi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new J,c=new J,f=new J,d=new J,m=new J,p=new J,g=new J,_=new J;if(t)for(let x=0,M=t.count;x<M;x+=3){const T=t.getX(x+0),w=t.getX(x+1),E=t.getX(x+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,E),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,E),d.add(g),m.add(g),p.add(g),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(E,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(m.length*g);let M=0,T=0;for(let w=0,E=m.length;w<E;w++){d.isInterleavedBufferAttribute?M=m[w]*d.data.stride+d.offset:M=m[w]*g;for(let v=0;v<g;v++)x[T++]=p[M++]}return new zi(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new da,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],M=t(x,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const M=p[_];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,M=_.length;x<M;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const d_=new an,_s=new gM,Ac=new Zd,p_=new J,Cc=new J,Rc=new J,wc=new J,zh=new J,Dc=new J,m_=new J,Uc=new J;class mi extends Un{constructor(t=new da,i=new gv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Dc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(zh.fromBufferAttribute(_,t),f?Dc.addScaledVector(zh,g):Dc.addScaledVector(zh.sub(i),g))}i.add(Dc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ac.copy(s.boundingSphere),Ac.applyMatrix4(c),_s.copy(t.ray).recast(t.near),!(Ac.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Ac,p_)===null||_s.origin.distanceToSquared(p_)>(t.far-t.near)**2))&&(d_.copy(c).invert(),_s.copy(t.ray).applyMatrix4(d_),!(s.boundingBox!==null&&_s.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,_s)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,w=x.length;T<w;T++){const E=x[T],v=f[E.materialIndex],H=Math.max(E.start,M.start),N=Math.min(d.count,Math.min(E.start+E.count,M.start+M.count));for(let C=H,G=N;C<G;C+=3){const k=d.getX(C),B=d.getX(C+1),W=d.getX(C+2);l=Nc(this,v,t,s,p,g,_,k,B,W),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let E=T,v=w;E<v;E+=3){const H=d.getX(E),N=d.getX(E+1),C=d.getX(E+2);l=Nc(this,f,t,s,p,g,_,H,N,C),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,w=x.length;T<w;T++){const E=x[T],v=f[E.materialIndex],H=Math.max(E.start,M.start),N=Math.min(m.count,Math.min(E.start+E.count,M.start+M.count));for(let C=H,G=N;C<G;C+=3){const k=C,B=C+1,W=C+2;l=Nc(this,v,t,s,p,g,_,k,B,W),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let E=T,v=w;E<v;E+=3){const H=E,N=E+1,C=E+2;l=Nc(this,f,t,s,p,g,_,H,N,C),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}}}function AM(r,t,i,s,l,c,f,d){let m;if(t.side===kn?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===Ya,d),m===null)return null;Uc.copy(d),Uc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Uc);return p<i.near||p>i.far?null:{distance:p,point:Uc.clone(),object:r}}function Nc(r,t,i,s,l,c,f,d,m,p){r.getVertexPosition(d,Cc),r.getVertexPosition(m,Rc),r.getVertexPosition(p,wc);const g=AM(r,t,i,s,Cc,Rc,wc,m_);if(g){const _=new J;Mi.getBarycoord(m_,Cc,Rc,wc,_),l&&(g.uv=Mi.getInterpolatedAttribute(l,d,m,p,_,new Wt)),c&&(g.uv1=Mi.getInterpolatedAttribute(c,d,m,p,_,new Wt)),f&&(g.normal=Mi.getInterpolatedAttribute(f,d,m,p,_,new J),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new J,materialIndex:0};Mi.getNormal(Cc,Rc,wc,x.normal),g.face=x,g.barycoord=_}return g}class sl extends da{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let x=0,M=0;T("z","y","x",-1,-1,s,i,t,f,c,0),T("z","y","x",1,-1,s,i,-t,f,c,1),T("x","z","y",1,1,t,s,i,l,f,2),T("x","z","y",1,-1,t,s,-i,l,f,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ni(p,3)),this.setAttribute("normal",new ni(g,3)),this.setAttribute("uv",new ni(_,2));function T(w,E,v,H,N,C,G,k,B,W,D){const U=C/B,I=G/W,ot=C/2,$=G/2,L=k/2,ct=B+1,O=W+1;let X=0,Z=0;const yt=new J;for(let Tt=0;Tt<O;Tt++){const z=Tt*I-$;for(let st=0;st<ct;st++){const Et=st*U-ot;yt[w]=Et*H,yt[E]=z*N,yt[v]=L,p.push(yt.x,yt.y,yt.z),yt[w]=0,yt[E]=0,yt[v]=k>0?1:-1,g.push(yt.x,yt.y,yt.z),_.push(st/B),_.push(1-Tt/W),X+=1}}for(let Tt=0;Tt<W;Tt++)for(let z=0;z<B;z++){const st=x+z+ct*Tt,Et=x+z+ct*(Tt+1),Ct=x+(z+1)+ct*(Tt+1),tt=x+(z+1)+ct*Tt;m.push(st,Et,tt),m.push(Et,Ct,tt),Z+=6}d.addGroup(M,Z,D),M+=Z,x+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Pn(r){const t={};for(let i=0;i<r.length;i++){const s=zr(r[i]);for(const l in s)t[l]=s[l]}return t}function CM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function xv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const RM={clone:zr,merge:Pn};var wM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Za extends al{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wM,this.fragmentShader=DM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zr(t.uniforms),this.uniformsGroups=CM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class yv extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ka=new J,g_=new Wt,__=new Wt;class pi extends yv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Od*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Od*2*Math.atan(Math.tan(mh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ka.x,ka.y).multiplyScalar(-t/ka.z),ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ka.x,ka.y).multiplyScalar(-t/ka.z)}getViewSize(t,i){return this.getViewBounds(t,g_,__),i.subVectors(__,g_)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(mh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Tr=-90,br=1;class UM extends Un{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(Tr,br,t,i);l.layers=this.layers,this.add(l);const c=new pi(Tr,br,t,i);c.layers=this.layers,this.add(c);const f=new pi(Tr,br,t,i);f.layers=this.layers,this.add(f);const d=new pi(Tr,br,t,i);d.layers=this.layers,this.add(d);const m=new pi(Tr,br,t,i);m.layers=this.layers,this.add(m);const p=new pi(Tr,br,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===Pi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Yc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,x,M),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class Sv extends jn{constructor(t=[],i=Lr,s,l,c,f,d,m,p,g){super(t,i,s,l,c,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class NM extends ws{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Sv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new sl(5,5,5),c=new Za({name:"CubemapFromEquirect",uniforms:zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:Xa});c.uniforms.tEquirect.value=i;const f=new mi(l,c),d=i.minFilter;return i.minFilter===As&&(i.minFilter=Oi),new UM(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class Ho extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LM={type:"move"};class Bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const w of t.hand.values()){const E=i.getJointPose(w,s),v=this._getHandJoint(p,w);E!==null&&(v.matrix.fromArray(E.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=E.radius),v.visible=E!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),M=.02,T=.005;p.inputState.pinching&&x>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(LM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ho;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class OM extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ih=new J,PM=new J,zM=new ue;class Ss{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Ih.subVectors(s,i).cross(PM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Ih),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||zM.getNormalMatrix(t),l=this.coplanarPoint(Ih).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new Zd,BM=new Wt(.5,.5),Lc=new J;class Qd{constructor(t=new Ss,i=new Ss,s=new Ss,l=new Ss,c=new Ss,f=new Ss){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Pi,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],x=c[6],M=c[7],T=c[8],w=c[9],E=c[10],v=c[11],H=c[12],N=c[13],C=c[14],G=c[15];if(l[0].setComponents(p-f,M-g,v-T,G-H).normalize(),l[1].setComponents(p+f,M+g,v+T,G+H).normalize(),l[2].setComponents(p+d,M+_,v+w,G+N).normalize(),l[3].setComponents(p-d,M-_,v-w,G-N).normalize(),s)l[4].setComponents(m,x,E,C).normalize(),l[5].setComponents(p-m,M-x,v-E,G-C).normalize();else if(l[4].setComponents(p-m,M-x,v-E,G-C).normalize(),i===Pi)l[5].setComponents(p+m,M+x,v+E,G+C).normalize();else if(i===Yc)l[5].setComponents(m,x,E,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),vs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){vs.center.set(0,0,0);const i=BM.distanceTo(t.center);return vs.radius=.7071067811865476+i,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Lc.x=l.normal.x>0?t.max.x:t.min.x,Lc.y=l.normal.y>0?t.max.y:t.min.y,Lc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mv extends jn{constructor(t,i,s=Rs,l,c,f,d=Ti,m=Ti,p,g=Zo,_=1){if(g!==Zo&&g!==Qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,f,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Qc extends da{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],x=[],M=[];let T=0;const w=[],E=s/2;let v=0;H(),f===!1&&(t>0&&N(!0),i>0&&N(!1)),this.setIndex(g),this.setAttribute("position",new ni(_,3)),this.setAttribute("normal",new ni(x,3)),this.setAttribute("uv",new ni(M,2));function H(){const C=new J,G=new J;let k=0;const B=(i-t)/s;for(let W=0;W<=c;W++){const D=[],U=W/c,I=U*(i-t)+t;for(let ot=0;ot<=l;ot++){const $=ot/l,L=$*m+d,ct=Math.sin(L),O=Math.cos(L);G.x=I*ct,G.y=-U*s+E,G.z=I*O,_.push(G.x,G.y,G.z),C.set(ct,B,O).normalize(),x.push(C.x,C.y,C.z),M.push($,1-U),D.push(T++)}w.push(D)}for(let W=0;W<l;W++)for(let D=0;D<c;D++){const U=w[D][W],I=w[D+1][W],ot=w[D+1][W+1],$=w[D][W+1];(t>0||D!==0)&&(g.push(U,I,$),k+=3),(i>0||D!==c-1)&&(g.push(I,ot,$),k+=3)}p.addGroup(v,k,0),v+=k}function N(C){const G=T,k=new Wt,B=new J;let W=0;const D=C===!0?t:i,U=C===!0?1:-1;for(let ot=1;ot<=l;ot++)_.push(0,E*U,0),x.push(0,U,0),M.push(.5,.5),T++;const I=T;for(let ot=0;ot<=l;ot++){const L=ot/l*m+d,ct=Math.cos(L),O=Math.sin(L);B.x=D*O,B.y=E*U,B.z=D*ct,_.push(B.x,B.y,B.z),x.push(0,U,0),k.x=ct*.5+.5,k.y=O*.5*U+.5,M.push(k.x,k.y),T++}for(let ot=0;ot<l;ot++){const $=G+ot,L=I+ot;C===!0?g.push(L,L+1,$):g.push(L+1,L,$),W+=3}p.addGroup(v,W,C===!0?1:2),v+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-f,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const g=s[l],x=s[l+1]-g,M=(f-g)/x;return(l+M)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),m=i||(f.isVector2?new Wt:new J);return m.copy(d).sub(f).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new J,l=[],c=[],f=[],d=new J,m=new an;for(let M=0;M<=t;M++){const T=M/t;l[M]=this.getTangentAt(T,new J)}c[0]=new J,f[0]=new J;let p=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),x=Math.abs(l[0].z);g<=p&&(p=g,s.set(1,0,0)),_<=p&&(p=_,s.set(0,1,0)),x<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let M=1;M<=t;M++){if(c[M]=c[M-1].clone(),f[M]=f[M-1].clone(),d.crossVectors(l[M-1],l[M]),d.length()>Number.EPSILON){d.normalize();const T=Math.acos(_e(l[M-1].dot(l[M]),-1,1));c[M].applyMatrix4(m.makeRotationAxis(d,T))}f[M].crossVectors(l[M],c[M])}if(i===!0){let M=Math.acos(_e(c[0].dot(c[t]),-1,1));M/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(M=-M);for(let T=1;T<=t;T++)c[T].applyMatrix4(m.makeRotationAxis(l[T],M*T)),f[T].crossVectors(l[T],c[T])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Kd extends Fi{constructor(t=0,i=0,s=1,l=1,c=0,f=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new Wt){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),x=m-this.aX,M=p-this.aY;m=x*g-M*_+this.aX,p=x*_+M*g+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class IM extends Kd{constructor(t,i,s,l,c,f){super(t,i,s,s,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Jd(){let r=0,t=0,i=0,s=0;function l(c,f,d,m){r=c,t=d,i=-3*c+3*f-2*d-m,s=2*c-2*f+d+m}return{initCatmullRom:function(c,f,d,m,p){l(f,d,p*(d-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,d,m,p,g,_){let x=(f-c)/p-(d-c)/(p+g)+(d-f)/g,M=(d-f)/g-(m-f)/(g+_)+(m-d)/_;x*=g,M*=g,l(f,d,x,M)},calc:function(c){const f=c*c,d=f*c;return r+t*c+i*f+s*d}}}const Oc=new J,Fh=new Jd,Hh=new Jd,Gh=new Jd;class FM extends Fi{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new J){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),m=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,g;this.closed||d>0?p=l[(d-1)%c]:(Oc.subVectors(l[0],l[1]).add(l[0]),p=Oc);const _=l[d%c],x=l[(d+1)%c];if(this.closed||d+2<c?g=l[(d+2)%c]:(Oc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Oc),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let T=Math.pow(p.distanceToSquared(_),M),w=Math.pow(_.distanceToSquared(x),M),E=Math.pow(x.distanceToSquared(g),M);w<1e-4&&(w=1),T<1e-4&&(T=w),E<1e-4&&(E=w),Fh.initNonuniformCatmullRom(p.x,_.x,x.x,g.x,T,w,E),Hh.initNonuniformCatmullRom(p.y,_.y,x.y,g.y,T,w,E),Gh.initNonuniformCatmullRom(p.z,_.z,x.z,g.z,T,w,E)}else this.curveType==="catmullrom"&&(Fh.initCatmullRom(p.x,_.x,x.x,g.x,this.tension),Hh.initCatmullRom(p.y,_.y,x.y,g.y,this.tension),Gh.initCatmullRom(p.z,_.z,x.z,g.z,this.tension));return s.set(Fh.calc(m),Hh.calc(m),Gh.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new J().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function v_(r,t,i,s,l){const c=(s-t)*.5,f=(l-i)*.5,d=r*r,m=r*d;return(2*i-2*s+c+f)*m+(-3*i+3*s-2*c-f)*d+c*r+i}function HM(r,t){const i=1-r;return i*i*t}function GM(r,t){return 2*(1-r)*r*t}function VM(r,t){return r*r*t}function ko(r,t,i,s){return HM(r,t)+GM(r,i)+VM(r,s)}function kM(r,t){const i=1-r;return i*i*i*t}function jM(r,t){const i=1-r;return 3*i*i*r*t}function XM(r,t){return 3*(1-r)*r*r*t}function qM(r,t){return r*r*r*t}function jo(r,t,i,s,l){return kM(r,t)+jM(r,i)+XM(r,s)+qM(r,l)}class Ev extends Fi{constructor(t=new Wt,i=new Wt,s=new Wt,l=new Wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Wt){const s=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(jo(t,l.x,c.x,f.x,d.x),jo(t,l.y,c.y,f.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class WM extends Fi{constructor(t=new J,i=new J,s=new J,l=new J){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new J){const s=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(jo(t,l.x,c.x,f.x,d.x),jo(t,l.y,c.y,f.y,d.y),jo(t,l.z,c.z,f.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tv extends Fi{constructor(t=new Wt,i=new Wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Wt){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Wt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class YM extends Fi{constructor(t=new J,i=new J){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new J){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new J){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bv extends Fi{constructor(t=new Wt,i=new Wt,s=new Wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Wt){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(ko(t,l.x,c.x,f.x),ko(t,l.y,c.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ZM extends Fi{constructor(t=new J,i=new J,s=new J){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new J){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(ko(t,l.x,c.x,f.x),ko(t,l.y,c.y,f.y),ko(t,l.z,c.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Av extends Fi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Wt){const s=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),d=c-f,m=l[f===0?f:f-1],p=l[f],g=l[f>l.length-2?l.length-1:f+1],_=l[f>l.length-3?l.length-1:f+2];return s.set(v_(d,m.x,p.x,g.x,_.x),v_(d,m.y,p.y,g.y,_.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Wt().fromArray(l))}return this}}var x_=Object.freeze({__proto__:null,ArcCurve:IM,CatmullRomCurve3:FM,CubicBezierCurve:Ev,CubicBezierCurve3:WM,EllipseCurve:Kd,LineCurve:Tv,LineCurve3:YM,QuadraticBezierCurve:bv,QuadraticBezierCurve3:ZM,SplineCurve:Av});class QM extends Fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new x_[s](i,t))}return this}getPoint(t,i){const s=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=s){const f=l[c]-s,d=this.curves[c],m=d.getLength(),p=m===0?0:1-f/m;return d.getPointAt(p,i)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let s=0,l=this.curves.length;s<l;s++)i+=this.curves[s].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let s;for(let l=0,c=this.curves;l<c.length;l++){const f=c[l],d=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,m=f.getPoints(d);for(let p=0;p<m.length;p++){const g=m[p];s&&s.equals(g)||(i.push(g),s=g)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,s=this.curves.length;i<s;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(new x_[l.type]().fromJSON(l))}return this}}class y_ extends QM{constructor(t){super(),this.type="Path",this.currentPoint=new Wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,s=t.length;i<s;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const s=new Tv(this.currentPoint.clone(),new Wt(t,i));return this.curves.push(s),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,s,l){const c=new bv(this.currentPoint.clone(),new Wt(t,i),new Wt(s,l));return this.curves.push(c),this.currentPoint.set(s,l),this}bezierCurveTo(t,i,s,l,c,f){const d=new Ev(this.currentPoint.clone(),new Wt(t,i),new Wt(s,l),new Wt(c,f));return this.curves.push(d),this.currentPoint.set(c,f),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),s=new Av(i);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,s,l,c,f){const d=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+d,i+m,s,l,c,f),this}absarc(t,i,s,l,c,f){return this.absellipse(t,i,s,s,l,c,f),this}ellipse(t,i,s,l,c,f,d,m){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+p,i+g,s,l,c,f,d,m),this}absellipse(t,i,s,l,c,f,d,m){const p=new Kd(t,i,s,l,c,f,d,m);if(this.curves.length>0){const _=p.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Cv extends y_{constructor(t){super(t),this.uuid=Fr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const i=[];for(let s=0,l=this.holes.length;s<l;s++)i[s]=this.holes[s].getPoints(t);return i}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let i=0,s=this.holes.length;i<s;i++){const l=this.holes[i];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(new y_().fromJSON(l))}return this}}function KM(r,t,i=2){const s=t&&t.length,l=s?t[0]*i:r.length;let c=Rv(r,0,l,i,!0);const f=[];if(!c||c.next===c.prev)return f;let d,m,p;if(s&&(c=n1(r,t,c,i)),r.length>80*i){d=1/0,m=1/0;let g=-1/0,_=-1/0;for(let x=i;x<l;x+=i){const M=r[x],T=r[x+1];M<d&&(d=M),T<m&&(m=T),M>g&&(g=M),T>_&&(_=T)}p=Math.max(g-d,_-m),p=p!==0?32767/p:0}return Ko(c,f,i,d,m,p,0),f}function Rv(r,t,i,s,l){let c;if(l===d1(r,t,i,s)>0)for(let f=t;f<i;f+=s)c=S_(f/s|0,r[f],r[f+1],c);else for(let f=i-s;f>=t;f-=s)c=S_(f/s|0,r[f],r[f+1],c);return c&&Br(c,c.next)&&($o(c),c=c.next),c}function Ds(r,t){if(!r)return r;t||(t=r);let i=r,s;do if(s=!1,!i.steiner&&(Br(i,i.next)||Je(i.prev,i,i.next)===0)){if($o(i),i=t=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==t);return t}function Ko(r,t,i,s,l,c,f){if(!r)return;!f&&c&&o1(r,s,l,c);let d=r;for(;r.prev!==r.next;){const m=r.prev,p=r.next;if(c?$M(r,s,l,c):JM(r)){t.push(m.i,r.i,p.i),$o(r),r=p.next,d=p.next;continue}if(r=p,r===d){f?f===1?(r=t1(Ds(r),t),Ko(r,t,i,s,l,c,2)):f===2&&e1(r,t,i,s,l,c):Ko(Ds(r),t,i,s,l,c,1);break}}}function JM(r){const t=r.prev,i=r,s=r.next;if(Je(t,i,s)>=0)return!1;const l=t.x,c=i.x,f=s.x,d=t.y,m=i.y,p=s.y,g=Math.min(l,c,f),_=Math.min(d,m,p),x=Math.max(l,c,f),M=Math.max(d,m,p);let T=s.next;for(;T!==t;){if(T.x>=g&&T.x<=x&&T.y>=_&&T.y<=M&&Go(l,d,c,m,f,p,T.x,T.y)&&Je(T.prev,T,T.next)>=0)return!1;T=T.next}return!0}function $M(r,t,i,s){const l=r.prev,c=r,f=r.next;if(Je(l,c,f)>=0)return!1;const d=l.x,m=c.x,p=f.x,g=l.y,_=c.y,x=f.y,M=Math.min(d,m,p),T=Math.min(g,_,x),w=Math.max(d,m,p),E=Math.max(g,_,x),v=Pd(M,T,t,i,s),H=Pd(w,E,t,i,s);let N=r.prevZ,C=r.nextZ;for(;N&&N.z>=v&&C&&C.z<=H;){if(N.x>=M&&N.x<=w&&N.y>=T&&N.y<=E&&N!==l&&N!==f&&Go(d,g,m,_,p,x,N.x,N.y)&&Je(N.prev,N,N.next)>=0||(N=N.prevZ,C.x>=M&&C.x<=w&&C.y>=T&&C.y<=E&&C!==l&&C!==f&&Go(d,g,m,_,p,x,C.x,C.y)&&Je(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;N&&N.z>=v;){if(N.x>=M&&N.x<=w&&N.y>=T&&N.y<=E&&N!==l&&N!==f&&Go(d,g,m,_,p,x,N.x,N.y)&&Je(N.prev,N,N.next)>=0)return!1;N=N.prevZ}for(;C&&C.z<=H;){if(C.x>=M&&C.x<=w&&C.y>=T&&C.y<=E&&C!==l&&C!==f&&Go(d,g,m,_,p,x,C.x,C.y)&&Je(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function t1(r,t){let i=r;do{const s=i.prev,l=i.next.next;!Br(s,l)&&Dv(s,i,i.next,l)&&Jo(s,l)&&Jo(l,s)&&(t.push(s.i,i.i,l.i),$o(i),$o(i.next),i=r=l),i=i.next}while(i!==r);return Ds(i)}function e1(r,t,i,s,l,c){let f=r;do{let d=f.next.next;for(;d!==f.prev;){if(f.i!==d.i&&u1(f,d)){let m=Uv(f,d);f=Ds(f,f.next),m=Ds(m,m.next),Ko(f,t,i,s,l,c,0),Ko(m,t,i,s,l,c,0);return}d=d.next}f=f.next}while(f!==r)}function n1(r,t,i,s){const l=[];for(let c=0,f=t.length;c<f;c++){const d=t[c]*s,m=c<f-1?t[c+1]*s:r.length,p=Rv(r,d,m,s,!1);p===p.next&&(p.steiner=!0),l.push(c1(p))}l.sort(i1);for(let c=0;c<l.length;c++)i=a1(l[c],i);return i}function i1(r,t){let i=r.x-t.x;if(i===0&&(i=r.y-t.y,i===0)){const s=(r.next.y-r.y)/(r.next.x-r.x),l=(t.next.y-t.y)/(t.next.x-t.x);i=s-l}return i}function a1(r,t){const i=s1(r,t);if(!i)return t;const s=Uv(i,r);return Ds(s,s.next),Ds(i,i.next)}function s1(r,t){let i=t;const s=r.x,l=r.y;let c=-1/0,f;if(Br(r,i))return i;do{if(Br(r,i.next))return i.next;if(l<=i.y&&l>=i.next.y&&i.next.y!==i.y){const _=i.x+(l-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(_<=s&&_>c&&(c=_,f=i.x<i.next.x?i:i.next,_===s))return f}i=i.next}while(i!==t);if(!f)return null;const d=f,m=f.x,p=f.y;let g=1/0;i=f;do{if(s>=i.x&&i.x>=m&&s!==i.x&&wv(l<p?s:c,l,m,p,l<p?c:s,l,i.x,i.y)){const _=Math.abs(l-i.y)/(s-i.x);Jo(i,r)&&(_<g||_===g&&(i.x>f.x||i.x===f.x&&r1(f,i)))&&(f=i,g=_)}i=i.next}while(i!==d);return f}function r1(r,t){return Je(r.prev,r,t.prev)<0&&Je(t.next,r,r.next)<0}function o1(r,t,i,s){let l=r;do l.z===0&&(l.z=Pd(l.x,l.y,t,i,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,l1(l)}function l1(r){let t,i=1;do{let s=r,l;r=null;let c=null;for(t=0;s;){t++;let f=s,d=0;for(let p=0;p<i&&(d++,f=f.nextZ,!!f);p++);let m=i;for(;d>0||m>0&&f;)d!==0&&(m===0||!f||s.z<=f.z)?(l=s,s=s.nextZ,d--):(l=f,f=f.nextZ,m--),c?c.nextZ=l:r=l,l.prevZ=c,c=l;s=f}c.nextZ=null,i*=2}while(t>1);return r}function Pd(r,t,i,s,l){return r=(r-i)*l|0,t=(t-s)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function c1(r){let t=r,i=r;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==r);return i}function wv(r,t,i,s,l,c,f,d){return(l-f)*(t-d)>=(r-f)*(c-d)&&(r-f)*(s-d)>=(i-f)*(t-d)&&(i-f)*(c-d)>=(l-f)*(s-d)}function Go(r,t,i,s,l,c,f,d){return!(r===f&&t===d)&&wv(r,t,i,s,l,c,f,d)}function u1(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!f1(r,t)&&(Jo(r,t)&&Jo(t,r)&&h1(r,t)&&(Je(r.prev,r,t.prev)||Je(r,t.prev,t))||Br(r,t)&&Je(r.prev,r,r.next)>0&&Je(t.prev,t,t.next)>0)}function Je(r,t,i){return(t.y-r.y)*(i.x-t.x)-(t.x-r.x)*(i.y-t.y)}function Br(r,t){return r.x===t.x&&r.y===t.y}function Dv(r,t,i,s){const l=zc(Je(r,t,i)),c=zc(Je(r,t,s)),f=zc(Je(i,s,r)),d=zc(Je(i,s,t));return!!(l!==c&&f!==d||l===0&&Pc(r,i,t)||c===0&&Pc(r,s,t)||f===0&&Pc(i,r,s)||d===0&&Pc(i,t,s))}function Pc(r,t,i){return t.x<=Math.max(r.x,i.x)&&t.x>=Math.min(r.x,i.x)&&t.y<=Math.max(r.y,i.y)&&t.y>=Math.min(r.y,i.y)}function zc(r){return r>0?1:r<0?-1:0}function f1(r,t){let i=r;do{if(i.i!==r.i&&i.next.i!==r.i&&i.i!==t.i&&i.next.i!==t.i&&Dv(i,i.next,r,t))return!0;i=i.next}while(i!==r);return!1}function Jo(r,t){return Je(r.prev,r,r.next)<0?Je(r,t,r.next)>=0&&Je(r,r.prev,t)>=0:Je(r,t,r.prev)<0||Je(r,r.next,t)<0}function h1(r,t){let i=r,s=!1;const l=(r.x+t.x)/2,c=(r.y+t.y)/2;do i.y>c!=i.next.y>c&&i.next.y!==i.y&&l<(i.next.x-i.x)*(c-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==r);return s}function Uv(r,t){const i=zd(r.i,r.x,r.y),s=zd(t.i,t.x,t.y),l=r.next,c=t.prev;return r.next=t,t.prev=r,i.next=l,l.prev=i,s.next=i,i.prev=s,c.next=s,s.prev=c,s}function S_(r,t,i,s){const l=zd(r,t,i);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function $o(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function zd(r,t,i){return{i:r,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function d1(r,t,i,s){let l=0;for(let c=t,f=i-s;c<i;c+=s)l+=(r[f]-r[c])*(r[c+1]+r[f+1]),f=c;return l}class p1{static triangulate(t,i,s=2){return KM(t,i,s)}}class Xo{static area(t){const i=t.length;let s=0;for(let l=i-1,c=0;c<i;l=c++)s+=t[l].x*t[c].y-t[c].x*t[l].y;return s*.5}static isClockWise(t){return Xo.area(t)<0}static triangulateShape(t,i){const s=[],l=[],c=[];M_(t),E_(s,t);let f=t.length;i.forEach(M_);for(let m=0;m<i.length;m++)l.push(f),f+=i[m].length,E_(s,i[m]);const d=p1.triangulate(s,l);for(let m=0;m<d.length;m+=3)c.push(d.slice(m,m+3));return c}}function M_(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function E_(r,t){for(let i=0;i<t.length;i++)r.push(t[i].x),r.push(t[i].y)}class Jc extends da{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=t/d,x=i/m,M=[],T=[],w=[],E=[];for(let v=0;v<g;v++){const H=v*x-f;for(let N=0;N<p;N++){const C=N*_-c;T.push(C,-H,0),w.push(0,0,1),E.push(N/d),E.push(1-v/m)}}for(let v=0;v<m;v++)for(let H=0;H<d;H++){const N=H+p*v,C=H+p*(v+1),G=H+1+p*(v+1),k=H+1+p*v;M.push(N,C,k),M.push(C,G,k)}this.setIndex(M),this.setAttribute("position",new ni(T,3)),this.setAttribute("normal",new ni(w,3)),this.setAttribute("uv",new ni(E,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jc(t.width,t.height,t.widthSegments,t.heightSegments)}}class $d extends da{constructor(t=new Cv([new Wt(0,.5),new Wt(-.5,-.5),new Wt(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};const s=[],l=[],c=[],f=[];let d=0,m=0;if(Array.isArray(t)===!1)p(t);else for(let g=0;g<t.length;g++)p(t[g]),this.addGroup(d,m,g),d+=m,m=0;this.setIndex(s),this.setAttribute("position",new ni(l,3)),this.setAttribute("normal",new ni(c,3)),this.setAttribute("uv",new ni(f,2));function p(g){const _=l.length/3,x=g.extractPoints(i);let M=x.shape;const T=x.holes;Xo.isClockWise(M)===!1&&(M=M.reverse());for(let E=0,v=T.length;E<v;E++){const H=T[E];Xo.isClockWise(H)===!0&&(T[E]=H.reverse())}const w=Xo.triangulateShape(M,T);for(let E=0,v=T.length;E<v;E++){const H=T[E];M=M.concat(H)}for(let E=0,v=M.length;E<v;E++){const H=M[E];l.push(H.x,H.y,0),c.push(0,0,1),f.push(H.x,H.y)}for(let E=0,v=w.length;E<v;E++){const H=w[E],N=H[0]+_,C=H[1]+_,G=H[2]+_;s.push(N,C,G),m+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes;return m1(i,t)}static fromJSON(t,i){const s=[];for(let l=0,c=t.shapes.length;l<c;l++){const f=i[t.shapes[l]];s.push(f)}return new $d(s,t.curveSegments)}}function m1(r,t){if(t.shapes=[],Array.isArray(r))for(let i=0,s=r.length;i<s;i++){const l=r[i];t.shapes.push(l.uuid)}else t.shapes.push(r.uuid);return t}class Fo extends al{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uv,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class g1 extends al{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _1 extends al{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Nv extends Un{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Vh=new an,T_=new J,b_=new J;class v1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=Bi,this.map=null,this.mapPass=null,this.matrix=new an,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qd,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;T_.setFromMatrixPosition(t.matrixWorld),i.position.copy(T_),b_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(b_),i.updateMatrixWorld(),Vh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Vh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Lv extends yv{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class x1 extends v1{constructor(){super(new Lv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class y1 extends Nv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new x1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class S1 extends Nv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class M1 extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function A_(r,t,i,s){const l=E1(s);switch(i){case sv:return r*t;case ov:return r*t/l.components*l.byteLength;case Xd:return r*t/l.components*l.byteLength;case lv:return r*t*2/l.components*l.byteLength;case qd:return r*t*2/l.components*l.byteLength;case rv:return r*t*3/l.components*l.byteLength;case Ei:return r*t*4/l.components*l.byteLength;case Wd:return r*t*4/l.components*l.byteLength;case Hc:case Gc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Vc:case kc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case cd:case fd:return Math.max(r,16)*Math.max(t,8)/4;case ld:case ud:return Math.max(r,8)*Math.max(t,8)/2;case hd:case dd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case pd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case md:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case gd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case _d:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case vd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case xd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case yd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Sd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Md:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ed:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Td:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case bd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ad:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Cd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Rd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case jc:case wd:case Dd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case cv:case Ud:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Nd:case Ld:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function E1(r){switch(r){case Bi:case nv:return{byteLength:1,components:1};case Wo:case iv:case el:return{byteLength:2,components:1};case kd:case jd:return{byteLength:2,components:4};case Rs:case Vd:case fa:return{byteLength:4,components:1};case av:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gd);function Ov(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function T1(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<_.length;M++){const T=_[x],w=_[M];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++x,_[x]=w)}_.length=x+1;for(let M=0,T=_.length;M<T;M++){const w=_[M];r.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var b1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,C1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,D1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,N1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,O1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,P1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,I1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,F1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,W1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Y1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Z1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Q1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,K1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eE="gl_FragColor = linearToOutputTexel( gl_FragColor );",nE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,aE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_E=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ME=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,EE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,OE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,GE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,YE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$E=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,oT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_T=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ST=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ET=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,UT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,NT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,LT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,OT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,FT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,XT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ZT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$T=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ib=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:b1,alphahash_pars_fragment:A1,alphamap_fragment:C1,alphamap_pars_fragment:R1,alphatest_fragment:w1,alphatest_pars_fragment:D1,aomap_fragment:U1,aomap_pars_fragment:N1,batching_pars_vertex:L1,batching_vertex:O1,begin_vertex:P1,beginnormal_vertex:z1,bsdfs:B1,iridescence_fragment:I1,bumpmap_pars_fragment:F1,clipping_planes_fragment:H1,clipping_planes_pars_fragment:G1,clipping_planes_pars_vertex:V1,clipping_planes_vertex:k1,color_fragment:j1,color_pars_fragment:X1,color_pars_vertex:q1,color_vertex:W1,common:Y1,cube_uv_reflection_fragment:Z1,defaultnormal_vertex:Q1,displacementmap_pars_vertex:K1,displacementmap_vertex:J1,emissivemap_fragment:$1,emissivemap_pars_fragment:tE,colorspace_fragment:eE,colorspace_pars_fragment:nE,envmap_fragment:iE,envmap_common_pars_fragment:aE,envmap_pars_fragment:sE,envmap_pars_vertex:rE,envmap_physical_pars_fragment:_E,envmap_vertex:oE,fog_vertex:lE,fog_pars_vertex:cE,fog_fragment:uE,fog_pars_fragment:fE,gradientmap_pars_fragment:hE,lightmap_pars_fragment:dE,lights_lambert_fragment:pE,lights_lambert_pars_fragment:mE,lights_pars_begin:gE,lights_toon_fragment:vE,lights_toon_pars_fragment:xE,lights_phong_fragment:yE,lights_phong_pars_fragment:SE,lights_physical_fragment:ME,lights_physical_pars_fragment:EE,lights_fragment_begin:TE,lights_fragment_maps:bE,lights_fragment_end:AE,logdepthbuf_fragment:CE,logdepthbuf_pars_fragment:RE,logdepthbuf_pars_vertex:wE,logdepthbuf_vertex:DE,map_fragment:UE,map_pars_fragment:NE,map_particle_fragment:LE,map_particle_pars_fragment:OE,metalnessmap_fragment:PE,metalnessmap_pars_fragment:zE,morphinstance_vertex:BE,morphcolor_vertex:IE,morphnormal_vertex:FE,morphtarget_pars_vertex:HE,morphtarget_vertex:GE,normal_fragment_begin:VE,normal_fragment_maps:kE,normal_pars_fragment:jE,normal_pars_vertex:XE,normal_vertex:qE,normalmap_pars_fragment:WE,clearcoat_normal_fragment_begin:YE,clearcoat_normal_fragment_maps:ZE,clearcoat_pars_fragment:QE,iridescence_pars_fragment:KE,opaque_fragment:JE,packing:$E,premultiplied_alpha_fragment:tT,project_vertex:eT,dithering_fragment:nT,dithering_pars_fragment:iT,roughnessmap_fragment:aT,roughnessmap_pars_fragment:sT,shadowmap_pars_fragment:rT,shadowmap_pars_vertex:oT,shadowmap_vertex:lT,shadowmask_pars_fragment:cT,skinbase_vertex:uT,skinning_pars_vertex:fT,skinning_vertex:hT,skinnormal_vertex:dT,specularmap_fragment:pT,specularmap_pars_fragment:mT,tonemapping_fragment:gT,tonemapping_pars_fragment:_T,transmission_fragment:vT,transmission_pars_fragment:xT,uv_pars_fragment:yT,uv_pars_vertex:ST,uv_vertex:MT,worldpos_vertex:ET,background_vert:TT,background_frag:bT,backgroundCube_vert:AT,backgroundCube_frag:CT,cube_vert:RT,cube_frag:wT,depth_vert:DT,depth_frag:UT,distanceRGBA_vert:NT,distanceRGBA_frag:LT,equirect_vert:OT,equirect_frag:PT,linedashed_vert:zT,linedashed_frag:BT,meshbasic_vert:IT,meshbasic_frag:FT,meshlambert_vert:HT,meshlambert_frag:GT,meshmatcap_vert:VT,meshmatcap_frag:kT,meshnormal_vert:jT,meshnormal_frag:XT,meshphong_vert:qT,meshphong_frag:WT,meshphysical_vert:YT,meshphysical_frag:ZT,meshtoon_vert:QT,meshtoon_frag:KT,points_vert:JT,points_frag:$T,shadow_vert:tb,shadow_frag:eb,sprite_vert:nb,sprite_frag:ib},Lt={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Ui={basic:{uniforms:Pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ne(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Pn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Pn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Ne(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Pn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Pn([Lt.points,Lt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Pn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Pn([Lt.common,Lt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Pn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Pn([Lt.sprite,Lt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Pn([Lt.common,Lt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Pn([Lt.lights,Lt.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Ui.physical={uniforms:Pn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Bc={r:0,b:0,g:0},xs=new Ii,ab=new an;function sb(r,t,i,s,l,c,f){const d=new Ne(0);let m=c===!0?0:1,p,g,_=null,x=0,M=null;function T(N){let C=N.isScene===!0?N.background:null;return C&&C.isTexture&&(C=(N.backgroundBlurriness>0?i:t).get(C)),C}function w(N){let C=!1;const G=T(N);G===null?v(d,m):G&&G.isColor&&(v(G,1),C=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?s.buffers.color.setClear(0,0,0,1,f):k==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function E(N,C){const G=T(C);G&&(G.isCubeTexture||G.mapping===Kc)?(g===void 0&&(g=new mi(new sl(1,1,1),new Za({name:"BackgroundCubeMaterial",uniforms:zr(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,B,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),xs.copy(C.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(ab.makeRotationFromEuler(xs)),g.material.toneMapped=De.getTransfer(G.colorSpace)!==Ge,(_!==G||x!==G.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,_=G,x=G.version,M=r.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new mi(new Jc(2,2),new Za({name:"BackgroundMaterial",uniforms:zr(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=De.getTransfer(G.colorSpace)!==Ge,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(_!==G||x!==G.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,_=G,x=G.version,M=r.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function v(N,C){N.getRGB(Bc,xv(r)),s.buffers.color.setClear(Bc.r,Bc.g,Bc.b,C,f)}function H(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,C=1){d.set(N),m=C,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,v(d,m)},render:w,addToRenderList:E,dispose:H}}function rb(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function d(U,I,ot,$,L){let ct=!1;const O=_($,ot,I);c!==O&&(c=O,p(c.object)),ct=M(U,$,ot,L),ct&&T(U,$,ot,L),L!==null&&t.update(L,r.ELEMENT_ARRAY_BUFFER),(ct||f)&&(f=!1,C(U,I,ot,$),L!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function m(){return r.createVertexArray()}function p(U){return r.bindVertexArray(U)}function g(U){return r.deleteVertexArray(U)}function _(U,I,ot){const $=ot.wireframe===!0;let L=s[U.id];L===void 0&&(L={},s[U.id]=L);let ct=L[I.id];ct===void 0&&(ct={},L[I.id]=ct);let O=ct[$];return O===void 0&&(O=x(m()),ct[$]=O),O}function x(U){const I=[],ot=[],$=[];for(let L=0;L<i;L++)I[L]=0,ot[L]=0,$[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:ot,attributeDivisors:$,object:U,attributes:{},index:null}}function M(U,I,ot,$){const L=c.attributes,ct=I.attributes;let O=0;const X=ot.getAttributes();for(const Z in X)if(X[Z].location>=0){const Tt=L[Z];let z=ct[Z];if(z===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(z=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(z=U.instanceColor)),Tt===void 0||Tt.attribute!==z||z&&Tt.data!==z.data)return!0;O++}return c.attributesNum!==O||c.index!==$}function T(U,I,ot,$){const L={},ct=I.attributes;let O=0;const X=ot.getAttributes();for(const Z in X)if(X[Z].location>=0){let Tt=ct[Z];Tt===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(Tt=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(Tt=U.instanceColor));const z={};z.attribute=Tt,Tt&&Tt.data&&(z.data=Tt.data),L[Z]=z,O++}c.attributes=L,c.attributesNum=O,c.index=$}function w(){const U=c.newAttributes;for(let I=0,ot=U.length;I<ot;I++)U[I]=0}function E(U){v(U,0)}function v(U,I){const ot=c.newAttributes,$=c.enabledAttributes,L=c.attributeDivisors;ot[U]=1,$[U]===0&&(r.enableVertexAttribArray(U),$[U]=1),L[U]!==I&&(r.vertexAttribDivisor(U,I),L[U]=I)}function H(){const U=c.newAttributes,I=c.enabledAttributes;for(let ot=0,$=I.length;ot<$;ot++)I[ot]!==U[ot]&&(r.disableVertexAttribArray(ot),I[ot]=0)}function N(U,I,ot,$,L,ct,O){O===!0?r.vertexAttribIPointer(U,I,ot,L,ct):r.vertexAttribPointer(U,I,ot,$,L,ct)}function C(U,I,ot,$){w();const L=$.attributes,ct=ot.getAttributes(),O=I.defaultAttributeValues;for(const X in ct){const Z=ct[X];if(Z.location>=0){let yt=L[X];if(yt===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(yt=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(yt=U.instanceColor)),yt!==void 0){const Tt=yt.normalized,z=yt.itemSize,st=t.get(yt);if(st===void 0)continue;const Et=st.buffer,Ct=st.type,tt=st.bytesPerElement,vt=Ct===r.INT||Ct===r.UNSIGNED_INT||yt.gpuType===Vd;if(yt.isInterleavedBufferAttribute){const _t=yt.data,Ht=_t.stride,Pt=yt.offset;if(_t.isInstancedInterleavedBuffer){for(let ne=0;ne<Z.locationSize;ne++)v(Z.location+ne,_t.meshPerAttribute);U.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let ne=0;ne<Z.locationSize;ne++)E(Z.location+ne);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let ne=0;ne<Z.locationSize;ne++)N(Z.location+ne,z/Z.locationSize,Ct,Tt,Ht*tt,(Pt+z/Z.locationSize*ne)*tt,vt)}else{if(yt.isInstancedBufferAttribute){for(let _t=0;_t<Z.locationSize;_t++)v(Z.location+_t,yt.meshPerAttribute);U.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let _t=0;_t<Z.locationSize;_t++)E(Z.location+_t);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let _t=0;_t<Z.locationSize;_t++)N(Z.location+_t,z/Z.locationSize,Ct,Tt,z*tt,z/Z.locationSize*_t*tt,vt)}}else if(O!==void 0){const Tt=O[X];if(Tt!==void 0)switch(Tt.length){case 2:r.vertexAttrib2fv(Z.location,Tt);break;case 3:r.vertexAttrib3fv(Z.location,Tt);break;case 4:r.vertexAttrib4fv(Z.location,Tt);break;default:r.vertexAttrib1fv(Z.location,Tt)}}}}H()}function G(){W();for(const U in s){const I=s[U];for(const ot in I){const $=I[ot];for(const L in $)g($[L].object),delete $[L];delete I[ot]}delete s[U]}}function k(U){if(s[U.id]===void 0)return;const I=s[U.id];for(const ot in I){const $=I[ot];for(const L in $)g($[L].object),delete $[L];delete I[ot]}delete s[U.id]}function B(U){for(const I in s){const ot=s[I];if(ot[U.id]===void 0)continue;const $=ot[U.id];for(const L in $)g($[L].object),delete $[L];delete ot[U.id]}}function W(){D(),f=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:D,dispose:G,releaseStatesOfGeometry:k,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:E,disableUnusedAttributes:H}}function ob(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function f(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let M=0;for(let T=0;T<_;T++)M+=g[T];i.update(M,s,1)}function m(p,g,_,x){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)f(p[T],g[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,_);let T=0;for(let w=0;w<_;w++)T+=g[w]*x[w];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function lb(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Ei&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const W=B===el&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Bi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==fa&&!W)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),E=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),H=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=T>0,k=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:E,maxAttributes:v,maxVertexUniforms:H,maxVaryings:N,maxFragmentUniforms:C,vertexTextures:G,maxSamples:k}}function cb(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Ss,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||s!==0||l;return l=x,s=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,M){const T=_.clippingPlanes,w=_.clipIntersection,E=_.clipShadows,v=r.get(_);if(!l||T===null||T.length===0||c&&!E)c?g(null):p();else{const H=c?0:s,N=H*4;let C=v.clippingState||null;m.value=C,C=g(T,x,N,M);for(let G=0;G!==N;++G)C[G]=i[G];v.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=H}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,x,M,T){const w=_!==null?_.length:0;let E=null;if(w!==0){if(E=m.value,T!==!0||E===null){const v=M+w*4,H=x.matrixWorldInverse;d.getNormalMatrix(H),(E===null||E.length<v)&&(E=new Float32Array(v));for(let N=0,C=M;N!==w;++N,C+=4)f.copy(_[N]).applyMatrix4(H,d),f.normal.toArray(E,C),E[C+3]=f.constant}m.value=E,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,E}}function ub(r){let t=new WeakMap;function i(f,d){return d===ad?f.mapping=Lr:d===sd&&(f.mapping=Or),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===ad||d===sd)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new NM(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Cr=4,C_=[.125,.215,.35,.446,.526,.582],Ts=20,kh=new Lv,R_=new Ne;let jh=null,Xh=0,qh=0,Wh=!1;const Ms=(1+Math.sqrt(5))/2,Ar=1/Ms,w_=[new J(-Ms,Ar,0),new J(Ms,Ar,0),new J(-Ar,0,Ms),new J(Ar,0,Ms),new J(0,Ms,-Ar),new J(0,Ms,Ar),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],fb=new J;class D_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=fb}=c;jh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=N_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jh,Xh,qh),this._renderer.xr.enabled=Wh,t.scissorTest=!1,Ic(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Lr||t.mapping===Or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Oi,minFilter:Oi,generateMipmaps:!1,type:el,format:Ei,colorSpace:Pr,depthBuffer:!1},l=U_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=U_(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hb(c)),this._blurMaterial=db(c,t,i)}return l}_compileMaterial(t){const i=new mi(this._lodPlanes[0],t);this._renderer.compile(i,kh)}_sceneToCubeUV(t,i,s,l,c){const m=new pi(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(R_),_.toneMapping=qa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const w=new gv({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),E=new mi(new sl,w);let v=!1;const H=t.background;H?H.isColor&&(w.color.copy(H),t.background=null,v=!0):(w.color.copy(R_),v=!0);for(let N=0;N<6;N++){const C=N%3;C===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[N],c.y,c.z)):C===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[N]));const G=this._cubeSize;Ic(l,C*G,N>2?G:0,G,G),_.setRenderTarget(l),v&&_.render(E,m),_.render(t,m)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=M,_.autoClear=x,t.background=H}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Lr||t.mapping===Or;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=L_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=N_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new mi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Ic(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,kh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=w_[(l-c-1)%w_.length];this._blur(t,c-1,c,f,d)}i.autoClear=s}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new mi(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ts-1),w=c/T,E=isFinite(c)?1+Math.floor(g*w):Ts;E>Ts&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Ts}`);const v=[];let H=0;for(let B=0;B<Ts;++B){const W=B/w,D=Math.exp(-W*W/2);v.push(D),B===0?H+=D:B<E&&(H+=2*D)}for(let B=0;B<v.length;B++)v[B]=v[B]/H;x.envMap.value=t.texture,x.samples.value=E,x.weights.value=v,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=T,x.mipInt.value=N-s;const C=this._sizeLods[l],G=3*C*(l>N-Cr?l-N+Cr:0),k=4*(this._cubeSize-C);Ic(i,G,k,3*C,2*C),m.setRenderTarget(i),m.render(_,kh)}}function hb(r){const t=[],i=[],s=[];let l=r;const c=r-Cr+1+C_.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>r-Cr?m=C_[f-r+Cr-1]:f===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,T=6,w=3,E=2,v=1,H=new Float32Array(w*T*M),N=new Float32Array(E*T*M),C=new Float32Array(v*T*M);for(let k=0;k<M;k++){const B=k%3*2/3-1,W=k>2?0:-1,D=[B,W,0,B+2/3,W,0,B+2/3,W+1,0,B,W,0,B+2/3,W+1,0,B,W+1,0];H.set(D,w*T*k),N.set(x,E*T*k);const U=[k,k,k,k,k,k];C.set(U,v*T*k)}const G=new da;G.setAttribute("position",new zi(H,w)),G.setAttribute("uv",new zi(N,E)),G.setAttribute("faceIndex",new zi(C,v)),t.push(G),l>Cr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function U_(r,t,i){const s=new ws(r,t,i);return s.texture.mapping=Kc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ic(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function db(r,t,i){const s=new Float32Array(Ts),l=new J(0,1,0);return new Za({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function N_(){return new Za({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function L_(){return new Za({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function tp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pb(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===ad||m===sd,g=m===Lr||m===Or;if(p||g){let _=t.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new D_(r)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new D_(r)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function mb(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&wr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function gb(r,t,i,s){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const T in x.attributes)t.remove(x.attributes[T]);x.removeEventListener("dispose",f),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const M in x)t.update(x[M],r.ARRAY_BUFFER)}function p(_){const x=[],M=_.index,T=_.attributes.position;let w=0;if(M!==null){const H=M.array;w=M.version;for(let N=0,C=H.length;N<C;N+=3){const G=H[N+0],k=H[N+1],B=H[N+2];x.push(G,k,k,B,B,G)}}else if(T!==void 0){const H=T.array;w=T.version;for(let N=0,C=H.length/3-1;N<C;N+=3){const G=N+0,k=N+1,B=N+2;x.push(G,k,k,B,B,G)}}else return;const E=new(hv(x)?vv:_v)(x,1);E.version=w;const v=c.get(_);v&&t.remove(v),c.set(_,E)}function g(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function _b(r,t,i){let s;function l(x){s=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function m(x,M){r.drawElements(s,M,c,x*f),i.update(M,s,1)}function p(x,M,T){T!==0&&(r.drawElementsInstanced(s,M,c,x*f,T),i.update(M,s,T))}function g(x,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,x,0,T);let E=0;for(let v=0;v<T;v++)E+=M[v];i.update(E,s,1)}function _(x,M,T,w){if(T===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let v=0;v<x.length;v++)p(x[v]/f,M[v],w[v]);else{E.multiDrawElementsInstancedWEBGL(s,M,0,c,x,0,w,0,T);let v=0;for(let H=0;H<T;H++)v+=M[H]*w[H];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function vb(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function xb(r,t,i){const s=new WeakMap,l=new nn;function c(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==_){let U=function(){W.dispose(),s.delete(d),d.removeEventListener("dispose",U)};var M=U;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,E=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],H=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let C=0;T===!0&&(C=1),w===!0&&(C=2),E===!0&&(C=3);let G=d.attributes.position.count*C,k=1;G>t.maxTextureSize&&(k=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const B=new Float32Array(G*k*4*_),W=new dv(B,G,k,_);W.type=fa,W.needsUpdate=!0;const D=C*4;for(let I=0;I<_;I++){const ot=v[I],$=H[I],L=N[I],ct=G*k*4*I;for(let O=0;O<ot.count;O++){const X=O*D;T===!0&&(l.fromBufferAttribute(ot,O),B[ct+X+0]=l.x,B[ct+X+1]=l.y,B[ct+X+2]=l.z,B[ct+X+3]=0),w===!0&&(l.fromBufferAttribute($,O),B[ct+X+4]=l.x,B[ct+X+5]=l.y,B[ct+X+6]=l.z,B[ct+X+7]=0),E===!0&&(l.fromBufferAttribute(L,O),B[ct+X+8]=l.x,B[ct+X+9]=l.y,B[ct+X+10]=l.z,B[ct+X+11]=L.itemSize===4?l.w:1)}}x={count:_,texture:W,size:new Wt(G,k)},s.set(d,x),d.addEventListener("dispose",U)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let T=0;for(let E=0;E<p.length;E++)T+=p[E];const w=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function yb(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const Pv=new jn,O_=new Mv(1,1),zv=new dv,Bv=new pM,Iv=new Sv,P_=[],z_=[],B_=new Float32Array(16),I_=new Float32Array(9),F_=new Float32Array(4);function Hr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=P_[l];if(c===void 0&&(c=new Float32Array(l),P_[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function gn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function _n(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function $c(r,t){let i=z_[t];i===void 0&&(i=new Int32Array(t),z_[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function Sb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function Mb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2fv(this.addr,t),_n(i,t)}}function Eb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;r.uniform3fv(this.addr,t),_n(i,t)}}function Tb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4fv(this.addr,t),_n(i,t)}}function bb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;F_.set(s),r.uniformMatrix2fv(this.addr,!1,F_),_n(i,s)}}function Ab(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;I_.set(s),r.uniformMatrix3fv(this.addr,!1,I_),_n(i,s)}}function Cb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;B_.set(s),r.uniformMatrix4fv(this.addr,!1,B_),_n(i,s)}}function Rb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function wb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2iv(this.addr,t),_n(i,t)}}function Db(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;r.uniform3iv(this.addr,t),_n(i,t)}}function Ub(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4iv(this.addr,t),_n(i,t)}}function Nb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function Lb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2uiv(this.addr,t),_n(i,t)}}function Ob(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;r.uniform3uiv(this.addr,t),_n(i,t)}}function Pb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4uiv(this.addr,t),_n(i,t)}}function zb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(O_.compareFunction=fv,c=O_):c=Pv,i.setTexture2D(t||c,l)}function Bb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Bv,l)}function Ib(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Iv,l)}function Fb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||zv,l)}function Hb(r){switch(r){case 5126:return Sb;case 35664:return Mb;case 35665:return Eb;case 35666:return Tb;case 35674:return bb;case 35675:return Ab;case 35676:return Cb;case 5124:case 35670:return Rb;case 35667:case 35671:return wb;case 35668:case 35672:return Db;case 35669:case 35673:return Ub;case 5125:return Nb;case 36294:return Lb;case 36295:return Ob;case 36296:return Pb;case 35678:case 36198:case 36298:case 36306:case 35682:return zb;case 35679:case 36299:case 36307:return Bb;case 35680:case 36300:case 36308:case 36293:return Ib;case 36289:case 36303:case 36311:case 36292:return Fb}}function Gb(r,t){r.uniform1fv(this.addr,t)}function Vb(r,t){const i=Hr(t,this.size,2);r.uniform2fv(this.addr,i)}function kb(r,t){const i=Hr(t,this.size,3);r.uniform3fv(this.addr,i)}function jb(r,t){const i=Hr(t,this.size,4);r.uniform4fv(this.addr,i)}function Xb(r,t){const i=Hr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function qb(r,t){const i=Hr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function Wb(r,t){const i=Hr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function Yb(r,t){r.uniform1iv(this.addr,t)}function Zb(r,t){r.uniform2iv(this.addr,t)}function Qb(r,t){r.uniform3iv(this.addr,t)}function Kb(r,t){r.uniform4iv(this.addr,t)}function Jb(r,t){r.uniform1uiv(this.addr,t)}function $b(r,t){r.uniform2uiv(this.addr,t)}function tA(r,t){r.uniform3uiv(this.addr,t)}function eA(r,t){r.uniform4uiv(this.addr,t)}function nA(r,t,i){const s=this.cache,l=t.length,c=$c(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||Pv,c[f])}function iA(r,t,i){const s=this.cache,l=t.length,c=$c(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Bv,c[f])}function aA(r,t,i){const s=this.cache,l=t.length,c=$c(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Iv,c[f])}function sA(r,t,i){const s=this.cache,l=t.length,c=$c(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||zv,c[f])}function rA(r){switch(r){case 5126:return Gb;case 35664:return Vb;case 35665:return kb;case 35666:return jb;case 35674:return Xb;case 35675:return qb;case 35676:return Wb;case 5124:case 35670:return Yb;case 35667:case 35671:return Zb;case 35668:case 35672:return Qb;case 35669:case 35673:return Kb;case 5125:return Jb;case 36294:return $b;case 36295:return tA;case 36296:return eA;case 35678:case 36198:case 36298:case 36306:case 35682:return nA;case 35679:case 36299:case 36307:return iA;case 35680:case 36300:case 36308:case 36293:return aA;case 36289:case 36303:case 36311:case 36292:return sA}}class oA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Hb(i.type)}}class lA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=rA(i.type)}}class cA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Yh=/(\w+)(\])?(\[|\.)?/g;function H_(r,t){r.seq.push(t),r.map[t.id]=t}function uA(r,t,i){const s=r.name,l=s.length;for(Yh.lastIndex=0;;){const c=Yh.exec(s),f=Yh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){H_(i,p===void 0?new oA(d,r,t):new lA(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new cA(d),H_(i,_)),i=_}}}class Xc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);uA(c,f,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function G_(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const fA=37297;let hA=0;function dA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const V_=new ue;function pA(r){De._getMatrix(V_,De.workingColorSpace,r);const t=`mat3( ${V_.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(r)){case Wc:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function k_(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+dA(r.getShaderSource(t),d)}else return c}function mA(r,t){const i=pA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function gA(r,t){let i;switch(t){case VS:i="Linear";break;case kS:i="Reinhard";break;case jS:i="Cineon";break;case XS:i="ACESFilmic";break;case WS:i="AgX";break;case YS:i="Neutral";break;case qS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Fc=new J;function _A(){De.getLuminanceCoefficients(Fc);const r=Fc.x.toFixed(4),t=Fc.y.toFixed(4),i=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function xA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function yA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function Vo(r){return r!==""}function j_(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function X_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const SA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bd(r){return r.replace(SA,EA)}const MA=new Map;function EA(r,t){let i=fe[t];if(i===void 0){const s=MA.get(t);if(s!==void 0)i=fe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Bd(i)}const TA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q_(r){return r.replace(TA,bA)}function bA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function W_(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function AA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===$_?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===SS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ca&&(t="SHADOWMAP_TYPE_VSM"),t}function CA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Lr:case Or:t="ENVMAP_TYPE_CUBE";break;case Kc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function RA(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Or&&(t="ENVMAP_MODE_REFRACTION"),t}function wA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case tv:t="ENVMAP_BLENDING_MULTIPLY";break;case HS:t="ENVMAP_BLENDING_MIX";break;case GS:t="ENVMAP_BLENDING_ADD";break}return t}function DA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function UA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=AA(i),p=CA(i),g=RA(i),_=wA(i),x=DA(i),M=vA(i),T=xA(c),w=l.createProgram();let E,v,H=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Vo).join(`
`),E.length>0&&(E+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Vo).join(`
`),v.length>0&&(v+=`
`)):(E=[W_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),v=[W_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?fe.tonemapping_pars_fragment:"",i.toneMapping!==qa?gA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,mA("linearToOutputTexel",i.outputColorSpace),_A(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vo).join(`
`)),f=Bd(f),f=j_(f,i),f=X_(f,i),d=Bd(d),d=j_(d,i),d=X_(d,i),f=q_(f),d=q_(d),i.isRawShaderMaterial!==!0&&(H=`#version 300 es
`,E=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,v=["#define varying in",i.glslVersion===t_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===t_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=H+E+f,C=H+v+d,G=G_(l,l.VERTEX_SHADER,N),k=G_(l,l.FRAGMENT_SHADER,C);l.attachShader(w,G),l.attachShader(w,k),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function B(I){if(r.debug.checkShaderErrors){const ot=l.getProgramInfoLog(w)||"",$=l.getShaderInfoLog(G)||"",L=l.getShaderInfoLog(k)||"",ct=ot.trim(),O=$.trim(),X=L.trim();let Z=!0,yt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,G,k);else{const Tt=k_(l,G,"vertex"),z=k_(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+ct+`
`+Tt+`
`+z)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(O===""||X==="")&&(yt=!1);yt&&(I.diagnostics={runnable:Z,programLog:ct,vertexShader:{log:O,prefix:E},fragmentShader:{log:X,prefix:v}})}l.deleteShader(G),l.deleteShader(k),W=new Xc(l,w),D=yA(l,w)}let W;this.getUniforms=function(){return W===void 0&&B(this),W};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=l.getProgramParameter(w,fA)),U},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=hA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=G,this.fragmentShader=k,this}let NA=0;class LA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new OA(t),i.set(t,s)),s}}class OA{constructor(t){this.id=NA++,this.code=t,this.usedTimes=0}}function PA(r,t,i,s,l,c,f){const d=new pv,m=new LA,p=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(D){return p.add(D),D===0?"uv":`uv${D}`}function E(D,U,I,ot,$){const L=ot.fog,ct=$.geometry,O=D.isMeshStandardMaterial?ot.environment:null,X=(D.isMeshStandardMaterial?i:t).get(D.envMap||O),Z=X&&X.mapping===Kc?X.image.height:null,yt=T[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const Tt=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,z=Tt!==void 0?Tt.length:0;let st=0;ct.morphAttributes.position!==void 0&&(st=1),ct.morphAttributes.normal!==void 0&&(st=2),ct.morphAttributes.color!==void 0&&(st=3);let Et,Ct,tt,vt;if(yt){const be=Ui[yt];Et=be.vertexShader,Ct=be.fragmentShader}else Et=D.vertexShader,Ct=D.fragmentShader,m.update(D),tt=m.getVertexShaderID(D),vt=m.getFragmentShaderID(D);const _t=r.getRenderTarget(),Ht=r.state.buffers.depth.getReversed(),Pt=$.isInstancedMesh===!0,ne=$.isBatchedMesh===!0,Xe=!!D.map,de=!!D.matcap,V=!!X,Te=!!D.aoMap,$t=!!D.lightMap,Me=!!D.bumpMap,Qt=!!D.normalMap,Ve=!!D.displacementMap,It=!!D.emissiveMap,re=!!D.metalnessMap,$e=!!D.roughnessMap,Qe=D.anisotropy>0,P=D.clearcoat>0,b=D.dispersion>0,it=D.iridescence>0,dt=D.sheen>0,St=D.transmission>0,ft=Qe&&!!D.anisotropyMap,Yt=P&&!!D.clearcoatMap,Rt=P&&!!D.clearcoatNormalMap,Xt=P&&!!D.clearcoatRoughnessMap,qt=it&&!!D.iridescenceMap,bt=it&&!!D.iridescenceThicknessMap,wt=dt&&!!D.sheenColorMap,Zt=dt&&!!D.sheenRoughnessMap,zt=!!D.specularMap,Ut=!!D.specularColorMap,oe=!!D.specularIntensityMap,q=St&&!!D.transmissionMap,At=St&&!!D.thicknessMap,Dt=!!D.gradientMap,Bt=!!D.alphaMap,Mt=D.alphaTest>0,gt=!!D.alphaHash,Ft=!!D.extensions;let ae=qa;D.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ae=r.toneMapping);const Pe={shaderID:yt,shaderType:D.type,shaderName:D.name,vertexShader:Et,fragmentShader:Ct,defines:D.defines,customVertexShaderID:tt,customFragmentShaderID:vt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:ne,batchingColor:ne&&$._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&$.instanceColor!==null,instancingMorph:Pt&&$.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:_t===null?r.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Pr,alphaToCoverage:!!D.alphaToCoverage,map:Xe,matcap:de,envMap:V,envMapMode:V&&X.mapping,envMapCubeUVHeight:Z,aoMap:Te,lightMap:$t,bumpMap:Me,normalMap:Qt,displacementMap:x&&Ve,emissiveMap:It,normalMapObjectSpace:Qt&&D.normalMapType===JS,normalMapTangentSpace:Qt&&D.normalMapType===uv,metalnessMap:re,roughnessMap:$e,anisotropy:Qe,anisotropyMap:ft,clearcoat:P,clearcoatMap:Yt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:b,iridescence:it,iridescenceMap:qt,iridescenceThicknessMap:bt,sheen:dt,sheenColorMap:wt,sheenRoughnessMap:Zt,specularMap:zt,specularColorMap:Ut,specularIntensityMap:oe,transmission:St,transmissionMap:q,thicknessMap:At,gradientMap:Dt,opaque:D.transparent===!1&&D.blending===Rr&&D.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Mt,alphaHash:gt,combine:D.combine,mapUv:Xe&&w(D.map.channel),aoMapUv:Te&&w(D.aoMap.channel),lightMapUv:$t&&w(D.lightMap.channel),bumpMapUv:Me&&w(D.bumpMap.channel),normalMapUv:Qt&&w(D.normalMap.channel),displacementMapUv:Ve&&w(D.displacementMap.channel),emissiveMapUv:It&&w(D.emissiveMap.channel),metalnessMapUv:re&&w(D.metalnessMap.channel),roughnessMapUv:$e&&w(D.roughnessMap.channel),anisotropyMapUv:ft&&w(D.anisotropyMap.channel),clearcoatMapUv:Yt&&w(D.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&w(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&w(D.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&w(D.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&w(D.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&w(D.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&w(D.sheenRoughnessMap.channel),specularMapUv:zt&&w(D.specularMap.channel),specularColorMapUv:Ut&&w(D.specularColorMap.channel),specularIntensityMapUv:oe&&w(D.specularIntensityMap.channel),transmissionMapUv:q&&w(D.transmissionMap.channel),thicknessMapUv:At&&w(D.thicknessMap.channel),alphaMapUv:Bt&&w(D.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(Qt||Qe),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ct.attributes.uv&&(Xe||Bt),fog:!!L,useFog:D.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ht,skinning:$.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:st,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:ae,decodeVideoTexture:Xe&&D.map.isVideoTexture===!0&&De.getTransfer(D.map.colorSpace)===Ge,decodeVideoTextureEmissive:It&&D.emissiveMap.isVideoTexture===!0&&De.getTransfer(D.emissiveMap.colorSpace)===Ge,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ua,flipSided:D.side===kn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ft&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&D.extensions.multiDraw===!0||ne)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Pe.vertexUv1s=p.has(1),Pe.vertexUv2s=p.has(2),Pe.vertexUv3s=p.has(3),p.clear(),Pe}function v(D){const U=[];if(D.shaderID?U.push(D.shaderID):(U.push(D.customVertexShaderID),U.push(D.customFragmentShaderID)),D.defines!==void 0)for(const I in D.defines)U.push(I),U.push(D.defines[I]);return D.isRawShaderMaterial===!1&&(H(U,D),N(U,D),U.push(r.outputColorSpace)),U.push(D.customProgramCacheKey),U.join()}function H(D,U){D.push(U.precision),D.push(U.outputColorSpace),D.push(U.envMapMode),D.push(U.envMapCubeUVHeight),D.push(U.mapUv),D.push(U.alphaMapUv),D.push(U.lightMapUv),D.push(U.aoMapUv),D.push(U.bumpMapUv),D.push(U.normalMapUv),D.push(U.displacementMapUv),D.push(U.emissiveMapUv),D.push(U.metalnessMapUv),D.push(U.roughnessMapUv),D.push(U.anisotropyMapUv),D.push(U.clearcoatMapUv),D.push(U.clearcoatNormalMapUv),D.push(U.clearcoatRoughnessMapUv),D.push(U.iridescenceMapUv),D.push(U.iridescenceThicknessMapUv),D.push(U.sheenColorMapUv),D.push(U.sheenRoughnessMapUv),D.push(U.specularMapUv),D.push(U.specularColorMapUv),D.push(U.specularIntensityMapUv),D.push(U.transmissionMapUv),D.push(U.thicknessMapUv),D.push(U.combine),D.push(U.fogExp2),D.push(U.sizeAttenuation),D.push(U.morphTargetsCount),D.push(U.morphAttributeCount),D.push(U.numDirLights),D.push(U.numPointLights),D.push(U.numSpotLights),D.push(U.numSpotLightMaps),D.push(U.numHemiLights),D.push(U.numRectAreaLights),D.push(U.numDirLightShadows),D.push(U.numPointLightShadows),D.push(U.numSpotLightShadows),D.push(U.numSpotLightShadowsWithMaps),D.push(U.numLightProbes),D.push(U.shadowMapType),D.push(U.toneMapping),D.push(U.numClippingPlanes),D.push(U.numClipIntersection),D.push(U.depthPacking)}function N(D,U){d.disableAll(),U.supportsVertexTextures&&d.enable(0),U.instancing&&d.enable(1),U.instancingColor&&d.enable(2),U.instancingMorph&&d.enable(3),U.matcap&&d.enable(4),U.envMap&&d.enable(5),U.normalMapObjectSpace&&d.enable(6),U.normalMapTangentSpace&&d.enable(7),U.clearcoat&&d.enable(8),U.iridescence&&d.enable(9),U.alphaTest&&d.enable(10),U.vertexColors&&d.enable(11),U.vertexAlphas&&d.enable(12),U.vertexUv1s&&d.enable(13),U.vertexUv2s&&d.enable(14),U.vertexUv3s&&d.enable(15),U.vertexTangents&&d.enable(16),U.anisotropy&&d.enable(17),U.alphaHash&&d.enable(18),U.batching&&d.enable(19),U.dispersion&&d.enable(20),U.batchingColor&&d.enable(21),U.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),D.push(d.mask)}function C(D){const U=T[D.type];let I;if(U){const ot=Ui[U];I=RM.clone(ot.uniforms)}else I=D.uniforms;return I}function G(D,U){let I;for(let ot=0,$=g.length;ot<$;ot++){const L=g[ot];if(L.cacheKey===U){I=L,++I.usedTimes;break}}return I===void 0&&(I=new UA(r,U,D,c),g.push(I)),I}function k(D){if(--D.usedTimes===0){const U=g.indexOf(D);g[U]=g[g.length-1],g.pop(),D.destroy()}}function B(D){m.remove(D)}function W(){m.dispose()}return{getParameters:E,getProgramCacheKey:v,getUniforms:C,acquireProgram:G,releaseProgram:k,releaseShaderCache:B,programs:g,dispose:W}}function zA(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function BA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Y_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Z_(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(_,x,M,T,w,E){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:M,groupOrder:T,renderOrder:_.renderOrder,z:w,group:E},r[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=M,v.groupOrder=T,v.renderOrder=_.renderOrder,v.z=w,v.group=E),t++,v}function d(_,x,M,T,w,E){const v=f(_,x,M,T,w,E);M.transmission>0?s.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(_,x,M,T,w,E){const v=f(_,x,M,T,w,E);M.transmission>0?s.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,x){i.length>1&&i.sort(_||BA),s.length>1&&s.sort(x||Y_),l.length>1&&l.sort(x||Y_)}function g(){for(let _=t,x=r.length;_<x;_++){const M=r[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function IA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Z_,r.set(s,[f])):l>=c.length?(f=new Z_,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function FA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new Ne};break;case"SpotLight":i={position:new J,direction:new J,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":i={color:new Ne,position:new J,halfWidth:new J,halfHeight:new J};break}return r[t.id]=i,i}}}function HA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let GA=0;function VA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function kA(r){const t=new FA,i=HA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const l=new J,c=new an,f=new an;function d(p){let g=0,_=0,x=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,T=0,w=0,E=0,v=0,H=0,N=0,C=0,G=0,k=0,B=0;p.sort(VA);for(let D=0,U=p.length;D<U;D++){const I=p[D],ot=I.color,$=I.intensity,L=I.distance,ct=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)g+=ot.r*$,_+=ot.g*$,x+=ot.b*$;else if(I.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(I.sh.coefficients[O],$);B++}else if(I.isDirectionalLight){const O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const X=I.shadow,Z=i.get(I);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,s.directionalShadow[M]=Z,s.directionalShadowMap[M]=ct,s.directionalShadowMatrix[M]=I.shadow.matrix,H++}s.directional[M]=O,M++}else if(I.isSpotLight){const O=t.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(ot).multiplyScalar($),O.distance=L,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,s.spot[w]=O;const X=I.shadow;if(I.map&&(s.spotLightMap[G]=I.map,G++,X.updateMatrices(I),I.castShadow&&k++),s.spotLightMatrix[w]=X.matrix,I.castShadow){const Z=i.get(I);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,s.spotShadow[w]=Z,s.spotShadowMap[w]=ct,C++}w++}else if(I.isRectAreaLight){const O=t.get(I);O.color.copy(ot).multiplyScalar($),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),s.rectArea[E]=O,E++}else if(I.isPointLight){const O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),O.distance=I.distance,O.decay=I.decay,I.castShadow){const X=I.shadow,Z=i.get(I);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,Z.shadowCameraNear=X.camera.near,Z.shadowCameraFar=X.camera.far,s.pointShadow[T]=Z,s.pointShadowMap[T]=ct,s.pointShadowMatrix[T]=I.shadow.matrix,N++}s.point[T]=O,T++}else if(I.isHemisphereLight){const O=t.get(I);O.skyColor.copy(I.color).multiplyScalar($),O.groundColor.copy(I.groundColor).multiplyScalar($),s.hemi[v]=O,v++}}E>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const W=s.hash;(W.directionalLength!==M||W.pointLength!==T||W.spotLength!==w||W.rectAreaLength!==E||W.hemiLength!==v||W.numDirectionalShadows!==H||W.numPointShadows!==N||W.numSpotShadows!==C||W.numSpotMaps!==G||W.numLightProbes!==B)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=E,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=H,s.directionalShadowMap.length=H,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=H,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=C+G-k,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=B,W.directionalLength=M,W.pointLength=T,W.spotLength=w,W.rectAreaLength=E,W.hemiLength=v,W.numDirectionalShadows=H,W.numPointShadows=N,W.numSpotShadows=C,W.numSpotMaps=G,W.numLightProbes=B,s.version=GA++)}function m(p,g){let _=0,x=0,M=0,T=0,w=0;const E=g.matrixWorldInverse;for(let v=0,H=p.length;v<H;v++){const N=p[v];if(N.isDirectionalLight){const C=s.directional[_];C.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(E),_++}else if(N.isSpotLight){const C=s.spot[M];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(E),C.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(E),M++}else if(N.isRectAreaLight){const C=s.rectArea[T];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(E),f.identity(),c.copy(N.matrixWorld),c.premultiply(E),f.extractRotation(c),C.halfWidth.set(N.width*.5,0,0),C.halfHeight.set(0,N.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),T++}else if(N.isPointLight){const C=s.point[x];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(E),x++}else if(N.isHemisphereLight){const C=s.hemi[w];C.direction.setFromMatrixPosition(N.matrixWorld),C.direction.transformDirection(E),w++}}}return{setup:d,setupView:m,state:s}}function Q_(r){const t=new kA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function jA(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new Q_(r),t.set(l,[d])):c>=f.length?(d=new Q_(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const XA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WA(r,t,i){let s=new Qd;const l=new Wt,c=new Wt,f=new nn,d=new g1({depthPacking:KS}),m=new _1,p={},g=i.maxTextureSize,_={[Ya]:kn,[kn]:Ya,[ua]:ua},x=new Za({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:XA,fragmentShader:qA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new da;T.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new mi(T,x),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$_;let v=this.type;this.render=function(k,B,W){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||k.length===0)return;const D=r.getRenderTarget(),U=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),ot=r.state;ot.setBlending(Xa),ot.buffers.depth.getReversed()?ot.buffers.color.setClear(0,0,0,0):ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const $=v!==ca&&this.type===ca,L=v===ca&&this.type!==ca;for(let ct=0,O=k.length;ct<O;ct++){const X=k[ct],Z=X.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const yt=Z.getFrameExtents();if(l.multiply(yt),c.copy(Z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/yt.x),l.x=c.x*yt.x,Z.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/yt.y),l.y=c.y*yt.y,Z.mapSize.y=c.y)),Z.map===null||$===!0||L===!0){const z=this.type!==ca?{minFilter:Ti,magFilter:Ti}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ws(l.x,l.y,z),Z.map.texture.name=X.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const Tt=Z.getViewportCount();for(let z=0;z<Tt;z++){const st=Z.getViewport(z);f.set(c.x*st.x,c.y*st.y,c.x*st.z,c.y*st.w),ot.viewport(f),Z.updateMatrices(X,z),s=Z.getFrustum(),C(B,W,Z.camera,X,this.type)}Z.isPointLightShadow!==!0&&this.type===ca&&H(Z,W),Z.needsUpdate=!1}v=this.type,E.needsUpdate=!1,r.setRenderTarget(D,U,I)};function H(k,B){const W=t.update(w);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new ws(l.x,l.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,r.setRenderTarget(k.mapPass),r.clear(),r.renderBufferDirect(B,null,W,x,w,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,r.setRenderTarget(k.map),r.clear(),r.renderBufferDirect(B,null,W,M,w,null)}function N(k,B,W,D){let U=null;const I=W.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(I!==void 0)U=I;else if(U=W.isPointLight===!0?m:d,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const ot=U.uuid,$=B.uuid;let L=p[ot];L===void 0&&(L={},p[ot]=L);let ct=L[$];ct===void 0&&(ct=U.clone(),L[$]=ct,B.addEventListener("dispose",G)),U=ct}if(U.visible=B.visible,U.wireframe=B.wireframe,D===ca?U.side=B.shadowSide!==null?B.shadowSide:B.side:U.side=B.shadowSide!==null?B.shadowSide:_[B.side],U.alphaMap=B.alphaMap,U.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,U.map=B.map,U.clipShadows=B.clipShadows,U.clippingPlanes=B.clippingPlanes,U.clipIntersection=B.clipIntersection,U.displacementMap=B.displacementMap,U.displacementScale=B.displacementScale,U.displacementBias=B.displacementBias,U.wireframeLinewidth=B.wireframeLinewidth,U.linewidth=B.linewidth,W.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const ot=r.properties.get(U);ot.light=W}return U}function C(k,B,W,D,U){if(k.visible===!1)return;if(k.layers.test(B.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&U===ca)&&(!k.frustumCulled||s.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,k.matrixWorld);const $=t.update(k),L=k.material;if(Array.isArray(L)){const ct=$.groups;for(let O=0,X=ct.length;O<X;O++){const Z=ct[O],yt=L[Z.materialIndex];if(yt&&yt.visible){const Tt=N(k,yt,D,U);k.onBeforeShadow(r,k,B,W,$,Tt,Z),r.renderBufferDirect(W,null,$,Tt,k,Z),k.onAfterShadow(r,k,B,W,$,Tt,Z)}}}else if(L.visible){const ct=N(k,L,D,U);k.onBeforeShadow(r,k,B,W,$,ct,null),r.renderBufferDirect(W,null,$,ct,k,null),k.onAfterShadow(r,k,B,W,$,ct,null)}}const ot=k.children;for(let $=0,L=ot.length;$<L;$++)C(ot[$],B,W,D,U)}function G(k){k.target.removeEventListener("dispose",G);for(const W in p){const D=p[W],U=k.target.uuid;U in D&&(D[U].dispose(),delete D[U])}}}const YA={[Kh]:Jh,[$h]:nd,[td]:id,[Nr]:ed,[Jh]:Kh,[nd]:$h,[id]:td,[ed]:Nr};function ZA(r,t){function i(){let q=!1;const At=new nn;let Dt=null;const Bt=new nn(0,0,0,0);return{setMask:function(Mt){Dt!==Mt&&!q&&(r.colorMask(Mt,Mt,Mt,Mt),Dt=Mt)},setLocked:function(Mt){q=Mt},setClear:function(Mt,gt,Ft,ae,Pe){Pe===!0&&(Mt*=ae,gt*=ae,Ft*=ae),At.set(Mt,gt,Ft,ae),Bt.equals(At)===!1&&(r.clearColor(Mt,gt,Ft,ae),Bt.copy(At))},reset:function(){q=!1,Dt=null,Bt.set(-1,0,0,0)}}}function s(){let q=!1,At=!1,Dt=null,Bt=null,Mt=null;return{setReversed:function(gt){if(At!==gt){const Ft=t.get("EXT_clip_control");gt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),At=gt;const ae=Mt;Mt=null,this.setClear(ae)}},getReversed:function(){return At},setTest:function(gt){gt?_t(r.DEPTH_TEST):Ht(r.DEPTH_TEST)},setMask:function(gt){Dt!==gt&&!q&&(r.depthMask(gt),Dt=gt)},setFunc:function(gt){if(At&&(gt=YA[gt]),Bt!==gt){switch(gt){case Kh:r.depthFunc(r.NEVER);break;case Jh:r.depthFunc(r.ALWAYS);break;case $h:r.depthFunc(r.LESS);break;case Nr:r.depthFunc(r.LEQUAL);break;case td:r.depthFunc(r.EQUAL);break;case ed:r.depthFunc(r.GEQUAL);break;case nd:r.depthFunc(r.GREATER);break;case id:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=gt}},setLocked:function(gt){q=gt},setClear:function(gt){Mt!==gt&&(At&&(gt=1-gt),r.clearDepth(gt),Mt=gt)},reset:function(){q=!1,Dt=null,Bt=null,Mt=null,At=!1}}}function l(){let q=!1,At=null,Dt=null,Bt=null,Mt=null,gt=null,Ft=null,ae=null,Pe=null;return{setTest:function(be){q||(be?_t(r.STENCIL_TEST):Ht(r.STENCIL_TEST))},setMask:function(be){At!==be&&!q&&(r.stencilMask(be),At=be)},setFunc:function(be,Nn,ii){(Dt!==be||Bt!==Nn||Mt!==ii)&&(r.stencilFunc(be,Nn,ii),Dt=be,Bt=Nn,Mt=ii)},setOp:function(be,Nn,ii){(gt!==be||Ft!==Nn||ae!==ii)&&(r.stencilOp(be,Nn,ii),gt=be,Ft=Nn,ae=ii)},setLocked:function(be){q=be},setClear:function(be){Pe!==be&&(r.clearStencil(be),Pe=be)},reset:function(){q=!1,At=null,Dt=null,Bt=null,Mt=null,gt=null,Ft=null,ae=null,Pe=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,M=[],T=null,w=!1,E=null,v=null,H=null,N=null,C=null,G=null,k=null,B=new Ne(0,0,0),W=0,D=!1,U=null,I=null,ot=null,$=null,L=null;const ct=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,X=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Z)[1]),O=X>=1):Z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),O=X>=2);let yt=null,Tt={};const z=r.getParameter(r.SCISSOR_BOX),st=r.getParameter(r.VIEWPORT),Et=new nn().fromArray(z),Ct=new nn().fromArray(st);function tt(q,At,Dt,Bt){const Mt=new Uint8Array(4),gt=r.createTexture();r.bindTexture(q,gt),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ft=0;Ft<Dt;Ft++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(At,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,Mt):r.texImage2D(At+Ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Mt);return gt}const vt={};vt[r.TEXTURE_2D]=tt(r.TEXTURE_2D,r.TEXTURE_2D,1),vt[r.TEXTURE_CUBE_MAP]=tt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[r.TEXTURE_2D_ARRAY]=tt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),vt[r.TEXTURE_3D]=tt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),_t(r.DEPTH_TEST),f.setFunc(Nr),Me(!1),Qt(Y0),_t(r.CULL_FACE),Te(Xa);function _t(q){g[q]!==!0&&(r.enable(q),g[q]=!0)}function Ht(q){g[q]!==!1&&(r.disable(q),g[q]=!1)}function Pt(q,At){return _[q]!==At?(r.bindFramebuffer(q,At),_[q]=At,q===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=At),q===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=At),!0):!1}function ne(q,At){let Dt=M,Bt=!1;if(q){Dt=x.get(At),Dt===void 0&&(Dt=[],x.set(At,Dt));const Mt=q.textures;if(Dt.length!==Mt.length||Dt[0]!==r.COLOR_ATTACHMENT0){for(let gt=0,Ft=Mt.length;gt<Ft;gt++)Dt[gt]=r.COLOR_ATTACHMENT0+gt;Dt.length=Mt.length,Bt=!0}}else Dt[0]!==r.BACK&&(Dt[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(Dt)}function Xe(q){return T!==q?(r.useProgram(q),T=q,!0):!1}const de={[Es]:r.FUNC_ADD,[ES]:r.FUNC_SUBTRACT,[TS]:r.FUNC_REVERSE_SUBTRACT};de[bS]=r.MIN,de[AS]=r.MAX;const V={[CS]:r.ZERO,[RS]:r.ONE,[wS]:r.SRC_COLOR,[Zh]:r.SRC_ALPHA,[PS]:r.SRC_ALPHA_SATURATE,[LS]:r.DST_COLOR,[US]:r.DST_ALPHA,[DS]:r.ONE_MINUS_SRC_COLOR,[Qh]:r.ONE_MINUS_SRC_ALPHA,[OS]:r.ONE_MINUS_DST_COLOR,[NS]:r.ONE_MINUS_DST_ALPHA,[zS]:r.CONSTANT_COLOR,[BS]:r.ONE_MINUS_CONSTANT_COLOR,[IS]:r.CONSTANT_ALPHA,[FS]:r.ONE_MINUS_CONSTANT_ALPHA};function Te(q,At,Dt,Bt,Mt,gt,Ft,ae,Pe,be){if(q===Xa){w===!0&&(Ht(r.BLEND),w=!1);return}if(w===!1&&(_t(r.BLEND),w=!0),q!==MS){if(q!==E||be!==D){if((v!==Es||C!==Es)&&(r.blendEquation(r.FUNC_ADD),v=Es,C=Es),be)switch(q){case Rr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Z0:r.blendFunc(r.ONE,r.ONE);break;case Q0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case K0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Rr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Z0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Q0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case K0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}H=null,N=null,G=null,k=null,B.set(0,0,0),W=0,E=q,D=be}return}Mt=Mt||At,gt=gt||Dt,Ft=Ft||Bt,(At!==v||Mt!==C)&&(r.blendEquationSeparate(de[At],de[Mt]),v=At,C=Mt),(Dt!==H||Bt!==N||gt!==G||Ft!==k)&&(r.blendFuncSeparate(V[Dt],V[Bt],V[gt],V[Ft]),H=Dt,N=Bt,G=gt,k=Ft),(ae.equals(B)===!1||Pe!==W)&&(r.blendColor(ae.r,ae.g,ae.b,Pe),B.copy(ae),W=Pe),E=q,D=!1}function $t(q,At){q.side===ua?Ht(r.CULL_FACE):_t(r.CULL_FACE);let Dt=q.side===kn;At&&(Dt=!Dt),Me(Dt),q.blending===Rr&&q.transparent===!1?Te(Xa):Te(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const Bt=q.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),It(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?_t(r.SAMPLE_ALPHA_TO_COVERAGE):Ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function Me(q){U!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),U=q)}function Qt(q){q!==xS?(_t(r.CULL_FACE),q!==I&&(q===Y0?r.cullFace(r.BACK):q===yS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ht(r.CULL_FACE),I=q}function Ve(q){q!==ot&&(O&&r.lineWidth(q),ot=q)}function It(q,At,Dt){q?(_t(r.POLYGON_OFFSET_FILL),($!==At||L!==Dt)&&(r.polygonOffset(At,Dt),$=At,L=Dt)):Ht(r.POLYGON_OFFSET_FILL)}function re(q){q?_t(r.SCISSOR_TEST):Ht(r.SCISSOR_TEST)}function $e(q){q===void 0&&(q=r.TEXTURE0+ct-1),yt!==q&&(r.activeTexture(q),yt=q)}function Qe(q,At,Dt){Dt===void 0&&(yt===null?Dt=r.TEXTURE0+ct-1:Dt=yt);let Bt=Tt[Dt];Bt===void 0&&(Bt={type:void 0,texture:void 0},Tt[Dt]=Bt),(Bt.type!==q||Bt.texture!==At)&&(yt!==Dt&&(r.activeTexture(Dt),yt=Dt),r.bindTexture(q,At||vt[q]),Bt.type=q,Bt.texture=At)}function P(){const q=Tt[yt];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function it(){try{r.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function dt(){try{r.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function St(){try{r.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ft(){try{r.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Yt(){try{r.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Rt(){try{r.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Xt(){try{r.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function qt(){try{r.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function bt(){try{r.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function wt(q){Et.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),Et.copy(q))}function Zt(q){Ct.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),Ct.copy(q))}function zt(q,At){let Dt=p.get(At);Dt===void 0&&(Dt=new WeakMap,p.set(At,Dt));let Bt=Dt.get(q);Bt===void 0&&(Bt=r.getUniformBlockIndex(At,q.name),Dt.set(q,Bt))}function Ut(q,At){const Bt=p.get(At).get(q);m.get(At)!==Bt&&(r.uniformBlockBinding(At,Bt,q.__bindingPointIndex),m.set(At,Bt))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},yt=null,Tt={},_={},x=new WeakMap,M=[],T=null,w=!1,E=null,v=null,H=null,N=null,C=null,G=null,k=null,B=new Ne(0,0,0),W=0,D=!1,U=null,I=null,ot=null,$=null,L=null,Et.set(0,0,r.canvas.width,r.canvas.height),Ct.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:_t,disable:Ht,bindFramebuffer:Pt,drawBuffers:ne,useProgram:Xe,setBlending:Te,setMaterial:$t,setFlipSided:Me,setCullFace:Qt,setLineWidth:Ve,setPolygonOffset:It,setScissorTest:re,activeTexture:$e,bindTexture:Qe,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:it,texImage2D:qt,texImage3D:bt,updateUBOMapping:zt,uniformBlockBinding:Ut,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:dt,texSubImage3D:St,compressedTexSubImage2D:ft,compressedTexSubImage3D:Yt,scissor:wt,viewport:Zt,reset:oe}}function QA(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Wt,g=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,b){return M?new OffscreenCanvas(P,b):Zc("canvas")}function w(P,b,it){let dt=1;const St=Qe(P);if((St.width>it||St.height>it)&&(dt=it/Math.max(St.width,St.height)),dt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ft=Math.floor(dt*St.width),Yt=Math.floor(dt*St.height);_===void 0&&(_=T(ft,Yt));const Rt=b?T(ft,Yt):_;return Rt.width=ft,Rt.height=Yt,Rt.getContext("2d").drawImage(P,0,0,ft,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ft+"x"+Yt+")."),Rt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),P;return P}function E(P){return P.generateMipmaps}function v(P){r.generateMipmap(P)}function H(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(P,b,it,dt,St=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ft=b;if(b===r.RED&&(it===r.FLOAT&&(ft=r.R32F),it===r.HALF_FLOAT&&(ft=r.R16F),it===r.UNSIGNED_BYTE&&(ft=r.R8)),b===r.RED_INTEGER&&(it===r.UNSIGNED_BYTE&&(ft=r.R8UI),it===r.UNSIGNED_SHORT&&(ft=r.R16UI),it===r.UNSIGNED_INT&&(ft=r.R32UI),it===r.BYTE&&(ft=r.R8I),it===r.SHORT&&(ft=r.R16I),it===r.INT&&(ft=r.R32I)),b===r.RG&&(it===r.FLOAT&&(ft=r.RG32F),it===r.HALF_FLOAT&&(ft=r.RG16F),it===r.UNSIGNED_BYTE&&(ft=r.RG8)),b===r.RG_INTEGER&&(it===r.UNSIGNED_BYTE&&(ft=r.RG8UI),it===r.UNSIGNED_SHORT&&(ft=r.RG16UI),it===r.UNSIGNED_INT&&(ft=r.RG32UI),it===r.BYTE&&(ft=r.RG8I),it===r.SHORT&&(ft=r.RG16I),it===r.INT&&(ft=r.RG32I)),b===r.RGB_INTEGER&&(it===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),it===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),it===r.UNSIGNED_INT&&(ft=r.RGB32UI),it===r.BYTE&&(ft=r.RGB8I),it===r.SHORT&&(ft=r.RGB16I),it===r.INT&&(ft=r.RGB32I)),b===r.RGBA_INTEGER&&(it===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),it===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),it===r.UNSIGNED_INT&&(ft=r.RGBA32UI),it===r.BYTE&&(ft=r.RGBA8I),it===r.SHORT&&(ft=r.RGBA16I),it===r.INT&&(ft=r.RGBA32I)),b===r.RGB&&it===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),b===r.RGBA){const Yt=St?Wc:De.getTransfer(dt);it===r.FLOAT&&(ft=r.RGBA32F),it===r.HALF_FLOAT&&(ft=r.RGBA16F),it===r.UNSIGNED_BYTE&&(ft=Yt===Ge?r.SRGB8_ALPHA8:r.RGBA8),it===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),it===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function C(P,b){let it;return P?b===null||b===Rs||b===Yo?it=r.DEPTH24_STENCIL8:b===fa?it=r.DEPTH32F_STENCIL8:b===Wo&&(it=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Rs||b===Yo?it=r.DEPTH_COMPONENT24:b===fa?it=r.DEPTH_COMPONENT32F:b===Wo&&(it=r.DEPTH_COMPONENT16),it}function G(P,b){return E(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ti&&P.minFilter!==Oi?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function k(P){const b=P.target;b.removeEventListener("dispose",k),W(b),b.isVideoTexture&&g.delete(b)}function B(P){const b=P.target;b.removeEventListener("dispose",B),U(b)}function W(P){const b=s.get(P);if(b.__webglInit===void 0)return;const it=P.source,dt=x.get(it);if(dt){const St=dt[b.__cacheKey];St.usedTimes--,St.usedTimes===0&&D(P),Object.keys(dt).length===0&&x.delete(it)}s.remove(P)}function D(P){const b=s.get(P);r.deleteTexture(b.__webglTexture);const it=P.source,dt=x.get(it);delete dt[b.__cacheKey],f.memory.textures--}function U(P){const b=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(b.__webglFramebuffer[dt]))for(let St=0;St<b.__webglFramebuffer[dt].length;St++)r.deleteFramebuffer(b.__webglFramebuffer[dt][St]);else r.deleteFramebuffer(b.__webglFramebuffer[dt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[dt])}else{if(Array.isArray(b.__webglFramebuffer))for(let dt=0;dt<b.__webglFramebuffer.length;dt++)r.deleteFramebuffer(b.__webglFramebuffer[dt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let dt=0;dt<b.__webglColorRenderbuffer.length;dt++)b.__webglColorRenderbuffer[dt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[dt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const it=P.textures;for(let dt=0,St=it.length;dt<St;dt++){const ft=s.get(it[dt]);ft.__webglTexture&&(r.deleteTexture(ft.__webglTexture),f.memory.textures--),s.remove(it[dt])}s.remove(P)}let I=0;function ot(){I=0}function $(){const P=I;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),I+=1,P}function L(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function ct(P,b){const it=s.get(P);if(P.isVideoTexture&&re(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&it.__version!==P.version){const dt=P.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{vt(it,P,b);return}}else P.isExternalTexture&&(it.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,it.__webglTexture,r.TEXTURE0+b)}function O(P,b){const it=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&it.__version!==P.version){vt(it,P,b);return}i.bindTexture(r.TEXTURE_2D_ARRAY,it.__webglTexture,r.TEXTURE0+b)}function X(P,b){const it=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&it.__version!==P.version){vt(it,P,b);return}i.bindTexture(r.TEXTURE_3D,it.__webglTexture,r.TEXTURE0+b)}function Z(P,b){const it=s.get(P);if(P.version>0&&it.__version!==P.version){_t(it,P,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture,r.TEXTURE0+b)}const yt={[rd]:r.REPEAT,[bs]:r.CLAMP_TO_EDGE,[od]:r.MIRRORED_REPEAT},Tt={[Ti]:r.NEAREST,[ZS]:r.NEAREST_MIPMAP_NEAREST,[gc]:r.NEAREST_MIPMAP_LINEAR,[Oi]:r.LINEAR,[ph]:r.LINEAR_MIPMAP_NEAREST,[As]:r.LINEAR_MIPMAP_LINEAR},z={[$S]:r.NEVER,[sM]:r.ALWAYS,[tM]:r.LESS,[fv]:r.LEQUAL,[eM]:r.EQUAL,[aM]:r.GEQUAL,[nM]:r.GREATER,[iM]:r.NOTEQUAL};function st(P,b){if(b.type===fa&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Oi||b.magFilter===ph||b.magFilter===gc||b.magFilter===As||b.minFilter===Oi||b.minFilter===ph||b.minFilter===gc||b.minFilter===As)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,yt[b.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,yt[b.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,yt[b.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Tt[b.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Tt[b.minFilter]),b.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,z[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ti||b.minFilter!==gc&&b.minFilter!==As||b.type===fa&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function Et(P,b){let it=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",k));const dt=b.source;let St=x.get(dt);St===void 0&&(St={},x.set(dt,St));const ft=L(b);if(ft!==P.__cacheKey){St[ft]===void 0&&(St[ft]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,it=!0),St[ft].usedTimes++;const Yt=St[P.__cacheKey];Yt!==void 0&&(St[P.__cacheKey].usedTimes--,Yt.usedTimes===0&&D(b)),P.__cacheKey=ft,P.__webglTexture=St[ft].texture}return it}function Ct(P,b,it){return Math.floor(Math.floor(P/it)/b)}function tt(P,b,it,dt){const ft=P.updateRanges;if(ft.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,it,dt,b.data);else{ft.sort((bt,wt)=>bt.start-wt.start);let Yt=0;for(let bt=1;bt<ft.length;bt++){const wt=ft[Yt],Zt=ft[bt],zt=wt.start+wt.count,Ut=Ct(Zt.start,b.width,4),oe=Ct(wt.start,b.width,4);Zt.start<=zt+1&&Ut===oe&&Ct(Zt.start+Zt.count-1,b.width,4)===Ut?wt.count=Math.max(wt.count,Zt.start+Zt.count-wt.start):(++Yt,ft[Yt]=Zt)}ft.length=Yt+1;const Rt=r.getParameter(r.UNPACK_ROW_LENGTH),Xt=r.getParameter(r.UNPACK_SKIP_PIXELS),qt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let bt=0,wt=ft.length;bt<wt;bt++){const Zt=ft[bt],zt=Math.floor(Zt.start/4),Ut=Math.ceil(Zt.count/4),oe=zt%b.width,q=Math.floor(zt/b.width),At=Ut,Dt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,oe),r.pixelStorei(r.UNPACK_SKIP_ROWS,q),i.texSubImage2D(r.TEXTURE_2D,0,oe,q,At,Dt,it,dt,b.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Rt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xt),r.pixelStorei(r.UNPACK_SKIP_ROWS,qt)}}function vt(P,b,it){let dt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(dt=r.TEXTURE_3D);const St=Et(P,b),ft=b.source;i.bindTexture(dt,P.__webglTexture,r.TEXTURE0+it);const Yt=s.get(ft);if(ft.version!==Yt.__version||St===!0){i.activeTexture(r.TEXTURE0+it);const Rt=De.getPrimaries(De.workingColorSpace),Xt=b.colorSpace===ja?null:De.getPrimaries(b.colorSpace),qt=b.colorSpace===ja||Rt===Xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let bt=w(b.image,!1,l.maxTextureSize);bt=$e(b,bt);const wt=c.convert(b.format,b.colorSpace),Zt=c.convert(b.type);let zt=N(b.internalFormat,wt,Zt,b.colorSpace,b.isVideoTexture);st(dt,b);let Ut;const oe=b.mipmaps,q=b.isVideoTexture!==!0,At=Yt.__version===void 0||St===!0,Dt=ft.dataReady,Bt=G(b,bt);if(b.isDepthTexture)zt=C(b.format===Qo,b.type),At&&(q?i.texStorage2D(r.TEXTURE_2D,1,zt,bt.width,bt.height):i.texImage2D(r.TEXTURE_2D,0,zt,bt.width,bt.height,0,wt,Zt,null));else if(b.isDataTexture)if(oe.length>0){q&&At&&i.texStorage2D(r.TEXTURE_2D,Bt,zt,oe[0].width,oe[0].height);for(let Mt=0,gt=oe.length;Mt<gt;Mt++)Ut=oe[Mt],q?Dt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,wt,Zt,Ut.data):i.texImage2D(r.TEXTURE_2D,Mt,zt,Ut.width,Ut.height,0,wt,Zt,Ut.data);b.generateMipmaps=!1}else q?(At&&i.texStorage2D(r.TEXTURE_2D,Bt,zt,bt.width,bt.height),Dt&&tt(b,bt,wt,Zt)):i.texImage2D(r.TEXTURE_2D,0,zt,bt.width,bt.height,0,wt,Zt,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){q&&At&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,zt,oe[0].width,oe[0].height,bt.depth);for(let Mt=0,gt=oe.length;Mt<gt;Mt++)if(Ut=oe[Mt],b.format!==Ei)if(wt!==null)if(q){if(Dt)if(b.layerUpdates.size>0){const Ft=A_(Ut.width,Ut.height,b.format,b.type);for(const ae of b.layerUpdates){const Pe=Ut.data.subarray(ae*Ft/Ut.data.BYTES_PER_ELEMENT,(ae+1)*Ft/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,ae,Ut.width,Ut.height,1,wt,Pe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,bt.depth,wt,Ut.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Mt,zt,Ut.width,Ut.height,bt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Dt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,bt.depth,wt,Zt,Ut.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Mt,zt,Ut.width,Ut.height,bt.depth,0,wt,Zt,Ut.data)}else{q&&At&&i.texStorage2D(r.TEXTURE_2D,Bt,zt,oe[0].width,oe[0].height);for(let Mt=0,gt=oe.length;Mt<gt;Mt++)Ut=oe[Mt],b.format!==Ei?wt!==null?q?Dt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,wt,Ut.data):i.compressedTexImage2D(r.TEXTURE_2D,Mt,zt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Dt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,wt,Zt,Ut.data):i.texImage2D(r.TEXTURE_2D,Mt,zt,Ut.width,Ut.height,0,wt,Zt,Ut.data)}else if(b.isDataArrayTexture)if(q){if(At&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,zt,bt.width,bt.height,bt.depth),Dt)if(b.layerUpdates.size>0){const Mt=A_(bt.width,bt.height,b.format,b.type);for(const gt of b.layerUpdates){const Ft=bt.data.subarray(gt*Mt/bt.data.BYTES_PER_ELEMENT,(gt+1)*Mt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,gt,bt.width,bt.height,1,wt,Zt,Ft)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,wt,Zt,bt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,zt,bt.width,bt.height,bt.depth,0,wt,Zt,bt.data);else if(b.isData3DTexture)q?(At&&i.texStorage3D(r.TEXTURE_3D,Bt,zt,bt.width,bt.height,bt.depth),Dt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,wt,Zt,bt.data)):i.texImage3D(r.TEXTURE_3D,0,zt,bt.width,bt.height,bt.depth,0,wt,Zt,bt.data);else if(b.isFramebufferTexture){if(At)if(q)i.texStorage2D(r.TEXTURE_2D,Bt,zt,bt.width,bt.height);else{let Mt=bt.width,gt=bt.height;for(let Ft=0;Ft<Bt;Ft++)i.texImage2D(r.TEXTURE_2D,Ft,zt,Mt,gt,0,wt,Zt,null),Mt>>=1,gt>>=1}}else if(oe.length>0){if(q&&At){const Mt=Qe(oe[0]);i.texStorage2D(r.TEXTURE_2D,Bt,zt,Mt.width,Mt.height)}for(let Mt=0,gt=oe.length;Mt<gt;Mt++)Ut=oe[Mt],q?Dt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,wt,Zt,Ut):i.texImage2D(r.TEXTURE_2D,Mt,zt,wt,Zt,Ut);b.generateMipmaps=!1}else if(q){if(At){const Mt=Qe(bt);i.texStorage2D(r.TEXTURE_2D,Bt,zt,Mt.width,Mt.height)}Dt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,wt,Zt,bt)}else i.texImage2D(r.TEXTURE_2D,0,zt,wt,Zt,bt);E(b)&&v(dt),Yt.__version=ft.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function _t(P,b,it){if(b.image.length!==6)return;const dt=Et(P,b),St=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+it);const ft=s.get(St);if(St.version!==ft.__version||dt===!0){i.activeTexture(r.TEXTURE0+it);const Yt=De.getPrimaries(De.workingColorSpace),Rt=b.colorSpace===ja?null:De.getPrimaries(b.colorSpace),Xt=b.colorSpace===ja||Yt===Rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const qt=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,wt=[];for(let gt=0;gt<6;gt++)!qt&&!bt?wt[gt]=w(b.image[gt],!0,l.maxCubemapSize):wt[gt]=bt?b.image[gt].image:b.image[gt],wt[gt]=$e(b,wt[gt]);const Zt=wt[0],zt=c.convert(b.format,b.colorSpace),Ut=c.convert(b.type),oe=N(b.internalFormat,zt,Ut,b.colorSpace),q=b.isVideoTexture!==!0,At=ft.__version===void 0||dt===!0,Dt=St.dataReady;let Bt=G(b,Zt);st(r.TEXTURE_CUBE_MAP,b);let Mt;if(qt){q&&At&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,oe,Zt.width,Zt.height);for(let gt=0;gt<6;gt++){Mt=wt[gt].mipmaps;for(let Ft=0;Ft<Mt.length;Ft++){const ae=Mt[Ft];b.format!==Ei?zt!==null?q?Dt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,0,0,ae.width,ae.height,zt,ae.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,oe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,0,0,ae.width,ae.height,zt,Ut,ae.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,oe,ae.width,ae.height,0,zt,Ut,ae.data)}}}else{if(Mt=b.mipmaps,q&&At){Mt.length>0&&Bt++;const gt=Qe(wt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,oe,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(bt){q?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,wt[gt].width,wt[gt].height,zt,Ut,wt[gt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,oe,wt[gt].width,wt[gt].height,0,zt,Ut,wt[gt].data);for(let Ft=0;Ft<Mt.length;Ft++){const Pe=Mt[Ft].image[gt].image;q?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,0,0,Pe.width,Pe.height,zt,Ut,Pe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,oe,Pe.width,Pe.height,0,zt,Ut,Pe.data)}}else{q?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,zt,Ut,wt[gt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,oe,zt,Ut,wt[gt]);for(let Ft=0;Ft<Mt.length;Ft++){const ae=Mt[Ft];q?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,0,0,zt,Ut,ae.image[gt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,oe,zt,Ut,ae.image[gt])}}}E(b)&&v(r.TEXTURE_CUBE_MAP),ft.__version=St.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Ht(P,b,it,dt,St,ft){const Yt=c.convert(it.format,it.colorSpace),Rt=c.convert(it.type),Xt=N(it.internalFormat,Yt,Rt,it.colorSpace),qt=s.get(b),bt=s.get(it);if(bt.__renderTarget=b,!qt.__hasExternalTextures){const wt=Math.max(1,b.width>>ft),Zt=Math.max(1,b.height>>ft);St===r.TEXTURE_3D||St===r.TEXTURE_2D_ARRAY?i.texImage3D(St,ft,Xt,wt,Zt,b.depth,0,Yt,Rt,null):i.texImage2D(St,ft,Xt,wt,Zt,0,Yt,Rt,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),It(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,St,bt.__webglTexture,0,Ve(b)):(St===r.TEXTURE_2D||St>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,dt,St,bt.__webglTexture,ft),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Pt(P,b,it){if(r.bindRenderbuffer(r.RENDERBUFFER,P),b.depthBuffer){const dt=b.depthTexture,St=dt&&dt.isDepthTexture?dt.type:null,ft=C(b.stencilBuffer,St),Yt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=Ve(b);It(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt,ft,b.width,b.height):it?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,ft,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ft,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Yt,r.RENDERBUFFER,P)}else{const dt=b.textures;for(let St=0;St<dt.length;St++){const ft=dt[St],Yt=c.convert(ft.format,ft.colorSpace),Rt=c.convert(ft.type),Xt=N(ft.internalFormat,Yt,Rt,ft.colorSpace),qt=Ve(b);it&&It(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,Xt,b.width,b.height):It(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt,Xt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Xt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ne(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(b.depthTexture);dt.__renderTarget=b,(!dt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ct(b.depthTexture,0);const St=dt.__webglTexture,ft=Ve(b);if(b.depthTexture.format===Zo)It(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,St,0,ft):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,St,0);else if(b.depthTexture.format===Qo)It(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,St,0,ft):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function Xe(P){const b=s.get(P),it=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const dt=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),dt){const St=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,dt.removeEventListener("dispose",St)};dt.addEventListener("dispose",St),b.__depthDisposeCallback=St}b.__boundDepthTexture=dt}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");const dt=P.texture.mipmaps;dt&&dt.length>0?ne(b.__webglFramebuffer[0],P):ne(b.__webglFramebuffer,P)}else if(it){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]===void 0)b.__webglDepthbuffer[dt]=r.createRenderbuffer(),Pt(b.__webglDepthbuffer[dt],P,!1);else{const St=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer[dt];r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ft)}}else{const dt=P.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Pt(b.__webglDepthbuffer,P,!1);else{const St=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ft)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function de(P,b,it){const dt=s.get(P);b!==void 0&&Ht(dt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),it!==void 0&&Xe(P)}function V(P){const b=P.texture,it=s.get(P),dt=s.get(b);P.addEventListener("dispose",B);const St=P.textures,ft=P.isWebGLCubeRenderTarget===!0,Yt=St.length>1;if(Yt||(dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture()),dt.__version=b.version,f.memory.textures++),ft){it.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){it.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<b.mipmaps.length;Xt++)it.__webglFramebuffer[Rt][Xt]=r.createFramebuffer()}else it.__webglFramebuffer[Rt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){it.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)it.__webglFramebuffer[Rt]=r.createFramebuffer()}else it.__webglFramebuffer=r.createFramebuffer();if(Yt)for(let Rt=0,Xt=St.length;Rt<Xt;Rt++){const qt=s.get(St[Rt]);qt.__webglTexture===void 0&&(qt.__webglTexture=r.createTexture(),f.memory.textures++)}if(P.samples>0&&It(P)===!1){it.__webglMultisampledFramebuffer=r.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Rt=0;Rt<St.length;Rt++){const Xt=St[Rt];it.__webglColorRenderbuffer[Rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,it.__webglColorRenderbuffer[Rt]);const qt=c.convert(Xt.format,Xt.colorSpace),bt=c.convert(Xt.type),wt=N(Xt.internalFormat,qt,bt,Xt.colorSpace,P.isXRRenderTarget===!0),Zt=Ve(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,wt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,it.__webglColorRenderbuffer[Rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(it.__webglDepthRenderbuffer=r.createRenderbuffer(),Pt(it.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ft){i.bindTexture(r.TEXTURE_CUBE_MAP,dt.__webglTexture),st(r.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Xt=0;Xt<b.mipmaps.length;Xt++)Ht(it.__webglFramebuffer[Rt][Xt],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else Ht(it.__webglFramebuffer[Rt],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);E(b)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Yt){for(let Rt=0,Xt=St.length;Rt<Xt;Rt++){const qt=St[Rt],bt=s.get(qt);let wt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(wt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(wt,bt.__webglTexture),st(wt,qt),Ht(it.__webglFramebuffer,P,qt,r.COLOR_ATTACHMENT0+Rt,wt,0),E(qt)&&v(wt)}i.unbindTexture()}else{let Rt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Rt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Rt,dt.__webglTexture),st(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let Xt=0;Xt<b.mipmaps.length;Xt++)Ht(it.__webglFramebuffer[Xt],P,b,r.COLOR_ATTACHMENT0,Rt,Xt);else Ht(it.__webglFramebuffer,P,b,r.COLOR_ATTACHMENT0,Rt,0);E(b)&&v(Rt),i.unbindTexture()}P.depthBuffer&&Xe(P)}function Te(P){const b=P.textures;for(let it=0,dt=b.length;it<dt;it++){const St=b[it];if(E(St)){const ft=H(P),Yt=s.get(St).__webglTexture;i.bindTexture(ft,Yt),v(ft),i.unbindTexture()}}}const $t=[],Me=[];function Qt(P){if(P.samples>0){if(It(P)===!1){const b=P.textures,it=P.width,dt=P.height;let St=r.COLOR_BUFFER_BIT;const ft=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Yt=s.get(P),Rt=b.length>1;if(Rt)for(let qt=0;qt<b.length;qt++)i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer);const Xt=P.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let qt=0;qt<b.length;qt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(St|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(St|=r.STENCIL_BUFFER_BIT)),Rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Yt.__webglColorRenderbuffer[qt]);const bt=s.get(b[qt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,bt,0)}r.blitFramebuffer(0,0,it,dt,0,0,it,dt,St,r.NEAREST),m===!0&&($t.length=0,Me.length=0,$t.push(r.COLOR_ATTACHMENT0+qt),P.depthBuffer&&P.resolveDepthBuffer===!1&&($t.push(ft),Me.push(ft),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Me)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,$t))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Rt)for(let qt=0;qt<b.length;qt++){i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.RENDERBUFFER,Yt.__webglColorRenderbuffer[qt]);const bt=s.get(b[qt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.TEXTURE_2D,bt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const b=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Ve(P){return Math.min(l.maxSamples,P.samples)}function It(P){const b=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function re(P){const b=f.render.frame;g.get(P)!==b&&(g.set(P,b),P.update())}function $e(P,b){const it=P.colorSpace,dt=P.format,St=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||it!==Pr&&it!==ja&&(De.getTransfer(it)===Ge?(dt!==Ei||St!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),b}function Qe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=$,this.resetTextureUnits=ot,this.setTexture2D=ct,this.setTexture2DArray=O,this.setTexture3D=X,this.setTextureCube=Z,this.rebindTextures=de,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Ht,this.useMultisampledRTT=It}function KA(r,t){function i(s,l=ja){let c;const f=De.getTransfer(l);if(s===Bi)return r.UNSIGNED_BYTE;if(s===kd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===jd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===av)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===nv)return r.BYTE;if(s===iv)return r.SHORT;if(s===Wo)return r.UNSIGNED_SHORT;if(s===Vd)return r.INT;if(s===Rs)return r.UNSIGNED_INT;if(s===fa)return r.FLOAT;if(s===el)return r.HALF_FLOAT;if(s===sv)return r.ALPHA;if(s===rv)return r.RGB;if(s===Ei)return r.RGBA;if(s===Zo)return r.DEPTH_COMPONENT;if(s===Qo)return r.DEPTH_STENCIL;if(s===ov)return r.RED;if(s===Xd)return r.RED_INTEGER;if(s===lv)return r.RG;if(s===qd)return r.RG_INTEGER;if(s===Wd)return r.RGBA_INTEGER;if(s===Hc||s===Gc||s===Vc||s===kc)if(f===Ge)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Hc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Hc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ld||s===cd||s===ud||s===fd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ld)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ud)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hd||s===dd||s===pd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===hd||s===dd)return f===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===pd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===md||s===gd||s===_d||s===vd||s===xd||s===yd||s===Sd||s===Md||s===Ed||s===Td||s===bd||s===Ad||s===Cd||s===Rd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===md)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_d)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Sd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Md)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ed)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Td)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ad)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Cd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Rd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jc||s===wd||s===Dd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===jc)return f===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===wd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Dd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cv||s===Ud||s===Nd||s===Ld)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===jc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ud)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Nd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ld)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Yo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}class Fv extends jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const JA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$A=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class t2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Fv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Za({vertexShader:JA,fragmentShader:$A,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new mi(new Jc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e2 extends Ir{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,g=null,_=null,x=null,M=null,T=null;const w=new t2,E={},v=i.getContextAttributes();let H=null,N=null;const C=[],G=[],k=new Wt;let B=null;const W=new pi;W.viewport=new nn;const D=new pi;D.viewport=new nn;const U=[W,D],I=new M1;let ot=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let vt=C[tt];return vt===void 0&&(vt=new Bh,C[tt]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(tt){let vt=C[tt];return vt===void 0&&(vt=new Bh,C[tt]=vt),vt.getGripSpace()},this.getHand=function(tt){let vt=C[tt];return vt===void 0&&(vt=new Bh,C[tt]=vt),vt.getHandSpace()};function L(tt){const vt=G.indexOf(tt.inputSource);if(vt===-1)return;const _t=C[vt];_t!==void 0&&(_t.update(tt.inputSource,tt.frame,p||f),_t.dispatchEvent({type:tt.type,data:tt.inputSource}))}function ct(){l.removeEventListener("select",L),l.removeEventListener("selectstart",L),l.removeEventListener("selectend",L),l.removeEventListener("squeeze",L),l.removeEventListener("squeezestart",L),l.removeEventListener("squeezeend",L),l.removeEventListener("end",ct),l.removeEventListener("inputsourceschange",O);for(let tt=0;tt<C.length;tt++){const vt=G[tt];vt!==null&&(G[tt]=null,C[tt].disconnect(vt))}ot=null,$=null,w.reset();for(const tt in E)delete E[tt];t.setRenderTarget(H),M=null,x=null,_=null,l=null,N=null,Ct.stop(),s.isPresenting=!1,t.setPixelRatio(B),t.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(H=t.getRenderTarget(),l.addEventListener("select",L),l.addEventListener("selectstart",L),l.addEventListener("selectend",L),l.addEventListener("squeeze",L),l.addEventListener("squeezestart",L),l.addEventListener("squeezeend",L),l.addEventListener("end",ct),l.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await i.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(k),typeof XRWebGLBinding<"u"&&(_=new XRWebGLBinding(l,i)),_!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Ht=null,Pt=null;v.depth&&(Pt=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_t=v.stencil?Qo:Zo,Ht=v.stencil?Yo:Rs);const ne={colorFormat:i.RGBA8,depthFormat:Pt,scaleFactor:c};x=_.createProjectionLayer(ne),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),N=new ws(x.textureWidth,x.textureHeight,{format:Ei,type:Bi,depthTexture:new Mv(x.textureWidth,x.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const _t={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,_t),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new ws(M.framebufferWidth,M.framebufferHeight,{format:Ei,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Ct.setContext(l),Ct.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function O(tt){for(let vt=0;vt<tt.removed.length;vt++){const _t=tt.removed[vt],Ht=G.indexOf(_t);Ht>=0&&(G[Ht]=null,C[Ht].disconnect(_t))}for(let vt=0;vt<tt.added.length;vt++){const _t=tt.added[vt];let Ht=G.indexOf(_t);if(Ht===-1){for(let ne=0;ne<C.length;ne++)if(ne>=G.length){G.push(_t),Ht=ne;break}else if(G[ne]===null){G[ne]=_t,Ht=ne;break}if(Ht===-1)break}const Pt=C[Ht];Pt&&Pt.connect(_t)}}const X=new J,Z=new J;function yt(tt,vt,_t){X.setFromMatrixPosition(vt.matrixWorld),Z.setFromMatrixPosition(_t.matrixWorld);const Ht=X.distanceTo(Z),Pt=vt.projectionMatrix.elements,ne=_t.projectionMatrix.elements,Xe=Pt[14]/(Pt[10]-1),de=Pt[14]/(Pt[10]+1),V=(Pt[9]+1)/Pt[5],Te=(Pt[9]-1)/Pt[5],$t=(Pt[8]-1)/Pt[0],Me=(ne[8]+1)/ne[0],Qt=Xe*$t,Ve=Xe*Me,It=Ht/(-$t+Me),re=It*-$t;if(vt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(re),tt.translateZ(It),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Pt[10]===-1)tt.projectionMatrix.copy(vt.projectionMatrix),tt.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const $e=Xe+It,Qe=de+It,P=Qt-re,b=Ve+(Ht-re),it=V*de/Qe*$e,dt=Te*de/Qe*$e;tt.projectionMatrix.makePerspective(P,b,it,dt,$e,Qe),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function Tt(tt,vt){vt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(vt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let vt=tt.near,_t=tt.far;w.texture!==null&&(w.depthNear>0&&(vt=w.depthNear),w.depthFar>0&&(_t=w.depthFar)),I.near=D.near=W.near=vt,I.far=D.far=W.far=_t,(ot!==I.near||$!==I.far)&&(l.updateRenderState({depthNear:I.near,depthFar:I.far}),ot=I.near,$=I.far),I.layers.mask=tt.layers.mask|6,W.layers.mask=I.layers.mask&3,D.layers.mask=I.layers.mask&5;const Ht=tt.parent,Pt=I.cameras;Tt(I,Ht);for(let ne=0;ne<Pt.length;ne++)Tt(Pt[ne],Ht);Pt.length===2?yt(I,W,D):I.projectionMatrix.copy(W.projectionMatrix),z(tt,I,Ht)};function z(tt,vt,_t){_t===null?tt.matrix.copy(vt.matrixWorld):(tt.matrix.copy(_t.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(vt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(vt.projectionMatrix),tt.projectionMatrixInverse.copy(vt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Od*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(tt){m=tt,x!==null&&(x.fixedFoveation=tt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=tt)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(I)},this.getCameraTexture=function(tt){return E[tt]};let st=null;function Et(tt,vt){if(g=vt.getViewerPose(p||f),T=vt,g!==null){const _t=g.views;M!==null&&(t.setRenderTargetFramebuffer(N,M.framebuffer),t.setRenderTarget(N));let Ht=!1;_t.length!==I.cameras.length&&(I.cameras.length=0,Ht=!0);for(let de=0;de<_t.length;de++){const V=_t[de];let Te=null;if(M!==null)Te=M.getViewport(V);else{const Me=_.getViewSubImage(x,V);Te=Me.viewport,de===0&&(t.setRenderTargetTextures(N,Me.colorTexture,Me.depthStencilTexture),t.setRenderTarget(N))}let $t=U[de];$t===void 0&&($t=new pi,$t.layers.enable(de),$t.viewport=new nn,U[de]=$t),$t.matrix.fromArray(V.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(V.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(Te.x,Te.y,Te.width,Te.height),de===0&&(I.matrix.copy($t.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ht===!0&&I.cameras.push($t)}const Pt=l.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const de=_.getDepthInformation(_t[0]);de&&de.isValid&&de.texture&&w.init(de,l.renderState)}if(Pt&&Pt.includes("camera-access")&&(t.state.unbindTexture(),_))for(let de=0;de<_t.length;de++){const V=_t[de].camera;if(V){let Te=E[V];Te||(Te=new Fv,E[V]=Te);const $t=_.getCameraImage(V);Te.sourceTexture=$t}}}for(let _t=0;_t<C.length;_t++){const Ht=G[_t],Pt=C[_t];Ht!==null&&Pt!==void 0&&Pt.update(Ht,vt,p||f)}st&&st(tt,vt),vt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:vt}),T=null}const Ct=new Ov;Ct.setAnimationLoop(Et),this.setAnimationLoop=function(tt){st=tt},this.dispose=function(){}}}const ys=new Ii,n2=new an;function i2(r,t){function i(E,v){E.matrixAutoUpdate===!0&&E.updateMatrix(),v.value.copy(E.matrix)}function s(E,v){v.color.getRGB(E.fogColor.value,xv(r)),v.isFog?(E.fogNear.value=v.near,E.fogFar.value=v.far):v.isFogExp2&&(E.fogDensity.value=v.density)}function l(E,v,H,N,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(E,v):v.isMeshToonMaterial?(c(E,v),_(E,v)):v.isMeshPhongMaterial?(c(E,v),g(E,v)):v.isMeshStandardMaterial?(c(E,v),x(E,v),v.isMeshPhysicalMaterial&&M(E,v,C)):v.isMeshMatcapMaterial?(c(E,v),T(E,v)):v.isMeshDepthMaterial?c(E,v):v.isMeshDistanceMaterial?(c(E,v),w(E,v)):v.isMeshNormalMaterial?c(E,v):v.isLineBasicMaterial?(f(E,v),v.isLineDashedMaterial&&d(E,v)):v.isPointsMaterial?m(E,v,H,N):v.isSpriteMaterial?p(E,v):v.isShadowMaterial?(E.color.value.copy(v.color),E.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(E,v){E.opacity.value=v.opacity,v.color&&E.diffuse.value.copy(v.color),v.emissive&&E.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(E.map.value=v.map,i(v.map,E.mapTransform)),v.alphaMap&&(E.alphaMap.value=v.alphaMap,i(v.alphaMap,E.alphaMapTransform)),v.bumpMap&&(E.bumpMap.value=v.bumpMap,i(v.bumpMap,E.bumpMapTransform),E.bumpScale.value=v.bumpScale,v.side===kn&&(E.bumpScale.value*=-1)),v.normalMap&&(E.normalMap.value=v.normalMap,i(v.normalMap,E.normalMapTransform),E.normalScale.value.copy(v.normalScale),v.side===kn&&E.normalScale.value.negate()),v.displacementMap&&(E.displacementMap.value=v.displacementMap,i(v.displacementMap,E.displacementMapTransform),E.displacementScale.value=v.displacementScale,E.displacementBias.value=v.displacementBias),v.emissiveMap&&(E.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,E.emissiveMapTransform)),v.specularMap&&(E.specularMap.value=v.specularMap,i(v.specularMap,E.specularMapTransform)),v.alphaTest>0&&(E.alphaTest.value=v.alphaTest);const H=t.get(v),N=H.envMap,C=H.envMapRotation;N&&(E.envMap.value=N,ys.copy(C),ys.x*=-1,ys.y*=-1,ys.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),E.envMapRotation.value.setFromMatrix4(n2.makeRotationFromEuler(ys)),E.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=v.reflectivity,E.ior.value=v.ior,E.refractionRatio.value=v.refractionRatio),v.lightMap&&(E.lightMap.value=v.lightMap,E.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,E.lightMapTransform)),v.aoMap&&(E.aoMap.value=v.aoMap,E.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,E.aoMapTransform))}function f(E,v){E.diffuse.value.copy(v.color),E.opacity.value=v.opacity,v.map&&(E.map.value=v.map,i(v.map,E.mapTransform))}function d(E,v){E.dashSize.value=v.dashSize,E.totalSize.value=v.dashSize+v.gapSize,E.scale.value=v.scale}function m(E,v,H,N){E.diffuse.value.copy(v.color),E.opacity.value=v.opacity,E.size.value=v.size*H,E.scale.value=N*.5,v.map&&(E.map.value=v.map,i(v.map,E.uvTransform)),v.alphaMap&&(E.alphaMap.value=v.alphaMap,i(v.alphaMap,E.alphaMapTransform)),v.alphaTest>0&&(E.alphaTest.value=v.alphaTest)}function p(E,v){E.diffuse.value.copy(v.color),E.opacity.value=v.opacity,E.rotation.value=v.rotation,v.map&&(E.map.value=v.map,i(v.map,E.mapTransform)),v.alphaMap&&(E.alphaMap.value=v.alphaMap,i(v.alphaMap,E.alphaMapTransform)),v.alphaTest>0&&(E.alphaTest.value=v.alphaTest)}function g(E,v){E.specular.value.copy(v.specular),E.shininess.value=Math.max(v.shininess,1e-4)}function _(E,v){v.gradientMap&&(E.gradientMap.value=v.gradientMap)}function x(E,v){E.metalness.value=v.metalness,v.metalnessMap&&(E.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,E.metalnessMapTransform)),E.roughness.value=v.roughness,v.roughnessMap&&(E.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,E.roughnessMapTransform)),v.envMap&&(E.envMapIntensity.value=v.envMapIntensity)}function M(E,v,H){E.ior.value=v.ior,v.sheen>0&&(E.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),E.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(E.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,E.sheenColorMapTransform)),v.sheenRoughnessMap&&(E.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,E.sheenRoughnessMapTransform))),v.clearcoat>0&&(E.clearcoat.value=v.clearcoat,E.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(E.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,E.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(E.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===kn&&E.clearcoatNormalScale.value.negate())),v.dispersion>0&&(E.dispersion.value=v.dispersion),v.iridescence>0&&(E.iridescence.value=v.iridescence,E.iridescenceIOR.value=v.iridescenceIOR,E.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(E.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,E.iridescenceMapTransform)),v.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),v.transmission>0&&(E.transmission.value=v.transmission,E.transmissionSamplerMap.value=H.texture,E.transmissionSamplerSize.value.set(H.width,H.height),v.transmissionMap&&(E.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,E.transmissionMapTransform)),E.thickness.value=v.thickness,v.thicknessMap&&(E.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=v.attenuationDistance,E.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(E.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(E.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=v.specularIntensity,E.specularColor.value.copy(v.specularColor),v.specularColorMap&&(E.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,E.specularColorMapTransform)),v.specularIntensityMap&&(E.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,E.specularIntensityMapTransform))}function T(E,v){v.matcap&&(E.matcap.value=v.matcap)}function w(E,v){const H=t.get(v).light;E.referencePosition.value.setFromMatrixPosition(H.matrixWorld),E.nearDistance.value=H.shadow.camera.near,E.farDistance.value=H.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function a2(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(H,N){const C=N.program;s.uniformBlockBinding(H,C)}function p(H,N){let C=l[H.id];C===void 0&&(T(H),C=g(H),l[H.id]=C,H.addEventListener("dispose",E));const G=N.program;s.updateUBOMapping(H,G);const k=t.render.frame;c[H.id]!==k&&(x(H),c[H.id]=k)}function g(H){const N=_();H.__bindingPointIndex=N;const C=r.createBuffer(),G=H.__size,k=H.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,G,k),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,C),C}function _(){for(let H=0;H<d;H++)if(f.indexOf(H)===-1)return f.push(H),H;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(H){const N=l[H.id],C=H.uniforms,G=H.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let k=0,B=C.length;k<B;k++){const W=Array.isArray(C[k])?C[k]:[C[k]];for(let D=0,U=W.length;D<U;D++){const I=W[D];if(M(I,k,D,G)===!0){const ot=I.__offset,$=Array.isArray(I.value)?I.value:[I.value];let L=0;for(let ct=0;ct<$.length;ct++){const O=$[ct],X=w(O);typeof O=="number"||typeof O=="boolean"?(I.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,ot+L,I.__data)):O.isMatrix3?(I.__data[0]=O.elements[0],I.__data[1]=O.elements[1],I.__data[2]=O.elements[2],I.__data[3]=0,I.__data[4]=O.elements[3],I.__data[5]=O.elements[4],I.__data[6]=O.elements[5],I.__data[7]=0,I.__data[8]=O.elements[6],I.__data[9]=O.elements[7],I.__data[10]=O.elements[8],I.__data[11]=0):(O.toArray(I.__data,L),L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ot,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(H,N,C,G){const k=H.value,B=N+"_"+C;if(G[B]===void 0)return typeof k=="number"||typeof k=="boolean"?G[B]=k:G[B]=k.clone(),!0;{const W=G[B];if(typeof k=="number"||typeof k=="boolean"){if(W!==k)return G[B]=k,!0}else if(W.equals(k)===!1)return W.copy(k),!0}return!1}function T(H){const N=H.uniforms;let C=0;const G=16;for(let B=0,W=N.length;B<W;B++){const D=Array.isArray(N[B])?N[B]:[N[B]];for(let U=0,I=D.length;U<I;U++){const ot=D[U],$=Array.isArray(ot.value)?ot.value:[ot.value];for(let L=0,ct=$.length;L<ct;L++){const O=$[L],X=w(O),Z=C%G,yt=Z%X.boundary,Tt=Z+yt;C+=yt,Tt!==0&&G-Tt<X.storage&&(C+=G-Tt),ot.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=C,C+=X.storage}}}const k=C%G;return k>0&&(C+=G-k),H.__size=C,H.__cache={},this}function w(H){const N={boundary:0,storage:0};return typeof H=="number"||typeof H=="boolean"?(N.boundary=4,N.storage=4):H.isVector2?(N.boundary=8,N.storage=8):H.isVector3||H.isColor?(N.boundary=16,N.storage=12):H.isVector4?(N.boundary=16,N.storage=16):H.isMatrix3?(N.boundary=48,N.storage=48):H.isMatrix4?(N.boundary=64,N.storage=64):H.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",H),N}function E(H){const N=H.target;N.removeEventListener("dispose",E);const C=f.indexOf(N.__bindingPointIndex);f.splice(C,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function v(){for(const H in l)r.deleteBuffer(l[H]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}class s2{constructor(t={}){const{canvas:i=oM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=f;const T=new Uint32Array(4),w=new Int32Array(4);let E=null,v=null;const H=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let G=!1;this._outputColorSpace=di;let k=0,B=0,W=null,D=-1,U=null;const I=new nn,ot=new nn;let $=null;const L=new Ne(0);let ct=0,O=i.width,X=i.height,Z=1,yt=null,Tt=null;const z=new nn(0,0,O,X),st=new nn(0,0,O,X);let Et=!1;const Ct=new Qd;let tt=!1,vt=!1;const _t=new an,Ht=new J,Pt=new nn,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function de(){return W===null?Z:1}let V=s;function Te(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Gd}`),i.addEventListener("webglcontextlost",Dt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),V===null){const Y="webgl2";if(V=Te(Y,R),V===null)throw Te(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let $t,Me,Qt,Ve,It,re,$e,Qe,P,b,it,dt,St,ft,Yt,Rt,Xt,qt,bt,wt,Zt,zt,Ut,oe;function q(){$t=new mb(V),$t.init(),zt=new KA(V,$t),Me=new lb(V,$t,t,zt),Qt=new ZA(V,$t),Me.reversedDepthBuffer&&x&&Qt.buffers.depth.setReversed(!0),Ve=new vb(V),It=new zA,re=new QA(V,$t,Qt,It,Me,zt,Ve),$e=new ub(C),Qe=new pb(C),P=new T1(V),Ut=new rb(V,P),b=new gb(V,P,Ve,Ut),it=new yb(V,b,P,Ve),bt=new xb(V,Me,re),Rt=new cb(It),dt=new PA(C,$e,Qe,$t,Me,Ut,Rt),St=new i2(C,It),ft=new IA,Yt=new jA($t),qt=new sb(C,$e,Qe,Qt,it,M,m),Xt=new WA(C,it,Me),oe=new a2(V,Ve,Me,Qt),wt=new ob(V,$t,Ve),Zt=new _b(V,$t,Ve),Ve.programs=dt.programs,C.capabilities=Me,C.extensions=$t,C.properties=It,C.renderLists=ft,C.shadowMap=Xt,C.state=Qt,C.info=Ve}q();const At=new e2(C,V);this.xr=At,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=$t.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=$t.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(O,X,!1))},this.getSize=function(R){return R.set(O,X)},this.setSize=function(R,Y,rt=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,X=Y,i.width=Math.floor(R*Z),i.height=Math.floor(Y*Z),rt===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(O*Z,X*Z).floor()},this.setDrawingBufferSize=function(R,Y,rt){O=R,X=Y,Z=rt,i.width=Math.floor(R*rt),i.height=Math.floor(Y*rt),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(z)},this.setViewport=function(R,Y,rt,lt){R.isVector4?z.set(R.x,R.y,R.z,R.w):z.set(R,Y,rt,lt),Qt.viewport(I.copy(z).multiplyScalar(Z).round())},this.getScissor=function(R){return R.copy(st)},this.setScissor=function(R,Y,rt,lt){R.isVector4?st.set(R.x,R.y,R.z,R.w):st.set(R,Y,rt,lt),Qt.scissor(ot.copy(st).multiplyScalar(Z).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(R){Qt.setScissorTest(Et=R)},this.setOpaqueSort=function(R){yt=R},this.setTransparentSort=function(R){Tt=R},this.getClearColor=function(R){return R.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,rt=!0){let lt=0;if(R){let Q=!1;if(W!==null){const xt=W.texture.format;Q=xt===Wd||xt===qd||xt===Xd}if(Q){const xt=W.texture.type,Nt=xt===Bi||xt===Rs||xt===Wo||xt===Yo||xt===kd||xt===jd,Vt=qt.getClearColor(),Ot=qt.getClearAlpha(),Kt=Vt.r,ie=Vt.g,Jt=Vt.b;Nt?(T[0]=Kt,T[1]=ie,T[2]=Jt,T[3]=Ot,V.clearBufferuiv(V.COLOR,0,T)):(w[0]=Kt,w[1]=ie,w[2]=Jt,w[3]=Ot,V.clearBufferiv(V.COLOR,0,w))}else lt|=V.COLOR_BUFFER_BIT}Y&&(lt|=V.DEPTH_BUFFER_BIT),rt&&(lt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),qt.dispose(),ft.dispose(),Yt.dispose(),It.dispose(),$e.dispose(),Qe.dispose(),it.dispose(),Ut.dispose(),oe.dispose(),dt.dispose(),At.dispose(),At.removeEventListener("sessionstart",ii),At.removeEventListener("sessionend",Gr),bi.stop()};function Dt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const R=Ve.autoReset,Y=Xt.enabled,rt=Xt.autoUpdate,lt=Xt.needsUpdate,Q=Xt.type;q(),Ve.autoReset=R,Xt.enabled=Y,Xt.autoUpdate=rt,Xt.needsUpdate=lt,Xt.type=Q}function Mt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function gt(R){const Y=R.target;Y.removeEventListener("dispose",gt),Ft(Y)}function Ft(R){ae(R),It.remove(R)}function ae(R){const Y=It.get(R).programs;Y!==void 0&&(Y.forEach(function(rt){dt.releaseProgram(rt)}),R.isShaderMaterial&&dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,rt,lt,Q,xt){Y===null&&(Y=ne);const Nt=Q.isMesh&&Q.matrixWorld.determinant()<0,Vt=pa(R,Y,rt,lt,Q);Qt.setMaterial(lt,Nt);let Ot=rt.index,Kt=1;if(lt.wireframe===!0){if(Ot=b.getWireframeAttribute(rt),Ot===void 0)return;Kt=2}const ie=rt.drawRange,Jt=rt.attributes.position;let he=ie.start*Kt,Le=(ie.start+ie.count)*Kt;xt!==null&&(he=Math.max(he,xt.start*Kt),Le=Math.min(Le,(xt.start+xt.count)*Kt)),Ot!==null?(he=Math.max(he,0),Le=Math.min(Le,Ot.count)):Jt!=null&&(he=Math.max(he,0),Le=Math.min(Le,Jt.count));const ke=Le-he;if(ke<0||ke===1/0)return;Ut.setup(Q,lt,Vt,rt,Ot);let Oe,pe=wt;if(Ot!==null&&(Oe=P.get(Ot),pe=Zt,pe.setIndex(Oe)),Q.isMesh)lt.wireframe===!0?(Qt.setLineWidth(lt.wireframeLinewidth*de()),pe.setMode(V.LINES)):pe.setMode(V.TRIANGLES);else if(Q.isLine){let kt=lt.linewidth;kt===void 0&&(kt=1),Qt.setLineWidth(kt*de()),Q.isLineSegments?pe.setMode(V.LINES):Q.isLineLoop?pe.setMode(V.LINE_LOOP):pe.setMode(V.LINE_STRIP)}else Q.isPoints?pe.setMode(V.POINTS):Q.isSprite&&pe.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)wr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))pe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const kt=Q._multiDrawStarts,qe=Q._multiDrawCounts,Ae=Q._multiDrawCount,Mn=Ot?P.get(Ot).bytesPerElement:1,Hi=It.get(lt).currentProgram.getUniforms();for(let vn=0;vn<Ae;vn++)Hi.setValue(V,"_gl_DrawID",vn),pe.render(kt[vn]/Mn,qe[vn])}else if(Q.isInstancedMesh)pe.renderInstances(he,ke,Q.count);else if(rt.isInstancedBufferGeometry){const kt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,qe=Math.min(rt.instanceCount,kt);pe.renderInstances(he,ke,qe)}else pe.render(he,ke)};function Pe(R,Y,rt){R.transparent===!0&&R.side===ua&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,Xn(R,Y,rt),R.side=Ya,R.needsUpdate=!0,Xn(R,Y,rt),R.side=ua):Xn(R,Y,rt)}this.compile=function(R,Y,rt=null){rt===null&&(rt=R),v=Yt.get(rt),v.init(Y),N.push(v),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(v.pushLight(Q),Q.castShadow&&v.pushShadow(Q))}),R!==rt&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(v.pushLight(Q),Q.castShadow&&v.pushShadow(Q))}),v.setupLights();const lt=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const xt=Q.material;if(xt)if(Array.isArray(xt))for(let Nt=0;Nt<xt.length;Nt++){const Vt=xt[Nt];Pe(Vt,rt,Q),lt.add(Vt)}else Pe(xt,rt,Q),lt.add(xt)}),v=N.pop(),lt},this.compileAsync=function(R,Y,rt=null){const lt=this.compile(R,Y,rt);return new Promise(Q=>{function xt(){if(lt.forEach(function(Nt){It.get(Nt).currentProgram.isReady()&&lt.delete(Nt)}),lt.size===0){Q(R);return}setTimeout(xt,10)}$t.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let be=null;function Nn(R){be&&be(R)}function ii(){bi.stop()}function Gr(){bi.start()}const bi=new Ov;bi.setAnimationLoop(Nn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(R){be=R,At.setAnimationLoop(R),R===null?bi.stop():bi.start()},At.addEventListener("sessionstart",ii),At.addEventListener("sessionend",Gr),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(Y),Y=At.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Y,W),v=Yt.get(R,N.length),v.init(Y),N.push(v),_t.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ct.setFromProjectionMatrix(_t,Pi,Y.reversedDepth),vt=this.localClippingEnabled,tt=Rt.init(this.clippingPlanes,vt),E=ft.get(R,H.length),E.init(),H.push(E),At.enabled===!0&&At.isPresenting===!0){const xt=C.xr.getDepthSensingMesh();xt!==null&&Us(xt,Y,-1/0,C.sortObjects)}Us(R,Y,0,C.sortObjects),E.finish(),C.sortObjects===!0&&E.sort(yt,Tt),Xe=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Xe&&qt.addToRenderList(E,R),this.info.render.frame++,tt===!0&&Rt.beginShadows();const rt=v.state.shadowsArray;Xt.render(rt,R,Y),tt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=E.opaque,Q=E.transmissive;if(v.setupLights(),Y.isArrayCamera){const xt=Y.cameras;if(Q.length>0)for(let Nt=0,Vt=xt.length;Nt<Vt;Nt++){const Ot=xt[Nt];Ls(lt,Q,R,Ot)}Xe&&qt.render(R);for(let Nt=0,Vt=xt.length;Nt<Vt;Nt++){const Ot=xt[Nt];Ns(E,R,Ot,Ot.viewport)}}else Q.length>0&&Ls(lt,Q,R,Y),Xe&&qt.render(R),Ns(E,R,Y);W!==null&&B===0&&(re.updateMultisampleRenderTarget(W),re.updateRenderTargetMipmap(W)),R.isScene===!0&&R.onAfterRender(C,R,Y),Ut.resetDefaultState(),D=-1,U=null,N.pop(),N.length>0?(v=N[N.length-1],tt===!0&&Rt.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,H.pop(),H.length>0?E=H[H.length-1]:E=null};function Us(R,Y,rt,lt){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ct.intersectsSprite(R)){lt&&Pt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(_t);const Nt=it.update(R),Vt=R.material;Vt.visible&&E.push(R,Nt,Vt,rt,Pt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ct.intersectsObject(R))){const Nt=it.update(R),Vt=R.material;if(lt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Pt.copy(R.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Pt.copy(Nt.boundingSphere.center)),Pt.applyMatrix4(R.matrixWorld).applyMatrix4(_t)),Array.isArray(Vt)){const Ot=Nt.groups;for(let Kt=0,ie=Ot.length;Kt<ie;Kt++){const Jt=Ot[Kt],he=Vt[Jt.materialIndex];he&&he.visible&&E.push(R,Nt,he,rt,Pt.z,Jt)}}else Vt.visible&&E.push(R,Nt,Vt,rt,Pt.z,null)}}const xt=R.children;for(let Nt=0,Vt=xt.length;Nt<Vt;Nt++)Us(xt[Nt],Y,rt,lt)}function Ns(R,Y,rt,lt){const Q=R.opaque,xt=R.transmissive,Nt=R.transparent;v.setupLightsView(rt),tt===!0&&Rt.setGlobalState(C.clippingPlanes,rt),lt&&Qt.viewport(I.copy(lt)),Q.length>0&&Qa(Q,Y,rt),xt.length>0&&Qa(xt,Y,rt),Nt.length>0&&Qa(Nt,Y,rt),Qt.buffers.depth.setTest(!0),Qt.buffers.depth.setMask(!0),Qt.buffers.color.setMask(!0),Qt.setPolygonOffset(!1)}function Ls(R,Y,rt,lt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[lt.id]===void 0&&(v.state.transmissionRenderTarget[lt.id]=new ws(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?el:Bi,minFilter:As,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const xt=v.state.transmissionRenderTarget[lt.id],Nt=lt.viewport||I;xt.setSize(Nt.z*C.transmissionResolutionScale,Nt.w*C.transmissionResolutionScale);const Vt=C.getRenderTarget(),Ot=C.getActiveCubeFace(),Kt=C.getActiveMipmapLevel();C.setRenderTarget(xt),C.getClearColor(L),ct=C.getClearAlpha(),ct<1&&C.setClearColor(16777215,.5),C.clear(),Xe&&qt.render(rt);const ie=C.toneMapping;C.toneMapping=qa;const Jt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),v.setupLightsView(lt),tt===!0&&Rt.setGlobalState(C.clippingPlanes,lt),Qa(R,rt,lt),re.updateMultisampleRenderTarget(xt),re.updateRenderTargetMipmap(xt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let Le=0,ke=Y.length;Le<ke;Le++){const Oe=Y[Le],pe=Oe.object,kt=Oe.geometry,qe=Oe.material,Ae=Oe.group;if(qe.side===ua&&pe.layers.test(lt.layers)){const Mn=qe.side;qe.side=kn,qe.needsUpdate=!0,Vr(pe,rt,lt,kt,qe,Ae),qe.side=Mn,qe.needsUpdate=!0,he=!0}}he===!0&&(re.updateMultisampleRenderTarget(xt),re.updateRenderTargetMipmap(xt))}C.setRenderTarget(Vt,Ot,Kt),C.setClearColor(L,ct),Jt!==void 0&&(lt.viewport=Jt),C.toneMapping=ie}function Qa(R,Y,rt){const lt=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,xt=R.length;Q<xt;Q++){const Nt=R[Q],Vt=Nt.object,Ot=Nt.geometry,Kt=Nt.group;let ie=Nt.material;ie.allowOverride===!0&&lt!==null&&(ie=lt),Vt.layers.test(rt.layers)&&Vr(Vt,Y,rt,Ot,ie,Kt)}}function Vr(R,Y,rt,lt,Q,xt){R.onBeforeRender(C,Y,rt,lt,Q,xt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(C,Y,rt,lt,R,xt),Q.transparent===!0&&Q.side===ua&&Q.forceSinglePass===!1?(Q.side=kn,Q.needsUpdate=!0,C.renderBufferDirect(rt,Y,lt,Q,R,xt),Q.side=Ya,Q.needsUpdate=!0,C.renderBufferDirect(rt,Y,lt,Q,R,xt),Q.side=ua):C.renderBufferDirect(rt,Y,lt,Q,R,xt),R.onAfterRender(C,Y,rt,lt,Q,xt)}function Xn(R,Y,rt){Y.isScene!==!0&&(Y=ne);const lt=It.get(R),Q=v.state.lights,xt=v.state.shadowsArray,Nt=Q.state.version,Vt=dt.getParameters(R,Q.state,xt,Y,rt),Ot=dt.getProgramCacheKey(Vt);let Kt=lt.programs;lt.environment=R.isMeshStandardMaterial?Y.environment:null,lt.fog=Y.fog,lt.envMap=(R.isMeshStandardMaterial?Qe:$e).get(R.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Kt===void 0&&(R.addEventListener("dispose",gt),Kt=new Map,lt.programs=Kt);let ie=Kt.get(Ot);if(ie!==void 0){if(lt.currentProgram===ie&&lt.lightsStateVersion===Nt)return Sn(R,Vt),ie}else Vt.uniforms=dt.getUniforms(R),R.onBeforeCompile(Vt,C),ie=dt.acquireProgram(Vt,Ot),Kt.set(Ot,ie),lt.uniforms=Vt.uniforms;const Jt=lt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Jt.clippingPlanes=Rt.uniform),Sn(R,Vt),lt.needsLights=eu(R),lt.lightsStateVersion=Nt,lt.needsLights&&(Jt.ambientLightColor.value=Q.state.ambient,Jt.lightProbe.value=Q.state.probe,Jt.directionalLights.value=Q.state.directional,Jt.directionalLightShadows.value=Q.state.directionalShadow,Jt.spotLights.value=Q.state.spot,Jt.spotLightShadows.value=Q.state.spotShadow,Jt.rectAreaLights.value=Q.state.rectArea,Jt.ltc_1.value=Q.state.rectAreaLTC1,Jt.ltc_2.value=Q.state.rectAreaLTC2,Jt.pointLights.value=Q.state.point,Jt.pointLightShadows.value=Q.state.pointShadow,Jt.hemisphereLights.value=Q.state.hemi,Jt.directionalShadowMap.value=Q.state.directionalShadowMap,Jt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Jt.spotShadowMap.value=Q.state.spotShadowMap,Jt.spotLightMatrix.value=Q.state.spotLightMatrix,Jt.spotLightMap.value=Q.state.spotLightMap,Jt.pointShadowMap.value=Q.state.pointShadowMap,Jt.pointShadowMatrix.value=Q.state.pointShadowMatrix),lt.currentProgram=ie,lt.uniformsList=null,ie}function ln(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Xc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Sn(R,Y){const rt=It.get(R);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function pa(R,Y,rt,lt,Q){Y.isScene!==!0&&(Y=ne),re.resetTextureUnits();const xt=Y.fog,Nt=lt.isMeshStandardMaterial?Y.environment:null,Vt=W===null?C.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Pr,Ot=(lt.isMeshStandardMaterial?Qe:$e).get(lt.envMap||Nt),Kt=lt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ie=!!rt.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Jt=!!rt.morphAttributes.position,he=!!rt.morphAttributes.normal,Le=!!rt.morphAttributes.color;let ke=qa;lt.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(ke=C.toneMapping);const Oe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,pe=Oe!==void 0?Oe.length:0,kt=It.get(lt),qe=v.state.lights;if(tt===!0&&(vt===!0||R!==U)){const pn=R===U&&lt.id===D;Rt.setState(lt,R,pn)}let Ae=!1;lt.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==qe.state.version||kt.outputColorSpace!==Vt||Q.isBatchedMesh&&kt.batching===!1||!Q.isBatchedMesh&&kt.batching===!0||Q.isBatchedMesh&&kt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&kt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&kt.instancing===!1||!Q.isInstancedMesh&&kt.instancing===!0||Q.isSkinnedMesh&&kt.skinning===!1||!Q.isSkinnedMesh&&kt.skinning===!0||Q.isInstancedMesh&&kt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&kt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&kt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&kt.instancingMorph===!1&&Q.morphTexture!==null||kt.envMap!==Ot||lt.fog===!0&&kt.fog!==xt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Rt.numPlanes||kt.numIntersection!==Rt.numIntersection)||kt.vertexAlphas!==Kt||kt.vertexTangents!==ie||kt.morphTargets!==Jt||kt.morphNormals!==he||kt.morphColors!==Le||kt.toneMapping!==ke||kt.morphTargetsCount!==pe)&&(Ae=!0):(Ae=!0,kt.__version=lt.version);let Mn=kt.currentProgram;Ae===!0&&(Mn=Xn(lt,Y,Q));let Hi=!1,vn=!1,Ja=!1;const ve=Mn.getUniforms(),Cn=kt.uniforms;if(Qt.useProgram(Mn.program)&&(Hi=!0,vn=!0,Ja=!0),lt.id!==D&&(D=lt.id,vn=!0),Hi||U!==R){Qt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ve.setValue(V,"projectionMatrix",R.projectionMatrix),ve.setValue(V,"viewMatrix",R.matrixWorldInverse);const sn=ve.map.cameraPosition;sn!==void 0&&sn.setValue(V,Ht.setFromMatrixPosition(R.matrixWorld)),Me.logarithmicDepthBuffer&&ve.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&ve.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),U!==R&&(U=R,vn=!0,Ja=!0)}if(Q.isSkinnedMesh){ve.setOptional(V,Q,"bindMatrix"),ve.setOptional(V,Q,"bindMatrixInverse");const pn=Q.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),ve.setValue(V,"boneTexture",pn.boneTexture,re))}Q.isBatchedMesh&&(ve.setOptional(V,Q,"batchingTexture"),ve.setValue(V,"batchingTexture",Q._matricesTexture,re),ve.setOptional(V,Q,"batchingIdTexture"),ve.setValue(V,"batchingIdTexture",Q._indirectTexture,re),ve.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ve.setValue(V,"batchingColorTexture",Q._colorsTexture,re));const Ln=rt.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&bt.update(Q,rt,Mn),(vn||kt.receiveShadow!==Q.receiveShadow)&&(kt.receiveShadow=Q.receiveShadow,ve.setValue(V,"receiveShadow",Q.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Cn.envMap.value=Ot,Cn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&Y.environment!==null&&(Cn.envMapIntensity.value=Y.environmentIntensity),vn&&(ve.setValue(V,"toneMappingExposure",C.toneMappingExposure),kt.needsLights&&kr(Cn,Ja),xt&&lt.fog===!0&&St.refreshFogUniforms(Cn,xt),St.refreshMaterialUniforms(Cn,lt,Z,X,v.state.transmissionRenderTarget[R.id]),Xc.upload(V,ln(kt),Cn,re)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Xc.upload(V,ln(kt),Cn,re),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&ve.setValue(V,"center",Q.center),ve.setValue(V,"modelViewMatrix",Q.modelViewMatrix),ve.setValue(V,"normalMatrix",Q.normalMatrix),ve.setValue(V,"modelMatrix",Q.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const pn=lt.uniformsGroups;for(let sn=0,Os=pn.length;sn<Os;sn++){const Ai=pn[sn];oe.update(Ai,Mn),oe.bind(Ai,Mn)}}return Mn}function kr(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function eu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,Y,rt){const lt=It.get(R);lt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),It.get(R.texture).__webglTexture=Y,It.get(R.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:rt,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const rt=It.get(R);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0};const nu=V.createFramebuffer();this.setRenderTarget=function(R,Y=0,rt=0){W=R,k=Y,B=rt;let lt=!0,Q=null,xt=!1,Nt=!1;if(R){const Ot=It.get(R);if(Ot.__useDefaultFramebuffer!==void 0)Qt.bindFramebuffer(V.FRAMEBUFFER,null),lt=!1;else if(Ot.__webglFramebuffer===void 0)re.setupRenderTarget(R);else if(Ot.__hasExternalTextures)re.rebindTextures(R,It.get(R.texture).__webglTexture,It.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Jt=R.depthTexture;if(Ot.__boundDepthTexture!==Jt){if(Jt!==null&&It.has(Jt)&&(R.width!==Jt.image.width||R.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(R)}}const Kt=R.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Nt=!0);const ie=It.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ie[Y])?Q=ie[Y][rt]:Q=ie[Y],xt=!0):R.samples>0&&re.useMultisampledRTT(R)===!1?Q=It.get(R).__webglMultisampledFramebuffer:Array.isArray(ie)?Q=ie[rt]:Q=ie,I.copy(R.viewport),ot.copy(R.scissor),$=R.scissorTest}else I.copy(z).multiplyScalar(Z).floor(),ot.copy(st).multiplyScalar(Z).floor(),$=Et;if(rt!==0&&(Q=nu),Qt.bindFramebuffer(V.FRAMEBUFFER,Q)&&lt&&Qt.drawBuffers(R,Q),Qt.viewport(I),Qt.scissor(ot),Qt.setScissorTest($),xt){const Ot=It.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ot.__webglTexture,rt)}else if(Nt){const Ot=Y;for(let Kt=0;Kt<R.textures.length;Kt++){const ie=It.get(R.textures[Kt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Kt,ie.__webglTexture,rt,Ot)}}else if(R!==null&&rt!==0){const Ot=It.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ot.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(R,Y,rt,lt,Q,xt,Nt,Vt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ot=Ot[Nt]),Ot){Qt.bindFramebuffer(V.FRAMEBUFFER,Ot);try{const Kt=R.textures[Vt],ie=Kt.format,Jt=Kt.type;if(!Me.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-lt&&rt>=0&&rt<=R.height-Q&&(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Vt),V.readPixels(Y,rt,lt,Q,zt.convert(ie),zt.convert(Jt),xt))}finally{const Kt=W!==null?It.get(W).__webglFramebuffer:null;Qt.bindFramebuffer(V.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(R,Y,rt,lt,Q,xt,Nt,Vt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ot=Ot[Nt]),Ot)if(Y>=0&&Y<=R.width-lt&&rt>=0&&rt<=R.height-Q){Qt.bindFramebuffer(V.FRAMEBUFFER,Ot);const Kt=R.textures[Vt],ie=Kt.format,Jt=Kt.type;if(!Me.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,he),V.bufferData(V.PIXEL_PACK_BUFFER,xt.byteLength,V.STREAM_READ),R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Vt),V.readPixels(Y,rt,lt,Q,zt.convert(ie),zt.convert(Jt),0);const Le=W!==null?It.get(W).__webglFramebuffer:null;Qt.bindFramebuffer(V.FRAMEBUFFER,Le);const ke=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await lM(V,ke,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,he),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,xt),V.deleteBuffer(he),V.deleteSync(ke),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,rt=0){const lt=Math.pow(2,-rt),Q=Math.floor(R.image.width*lt),xt=Math.floor(R.image.height*lt),Nt=Y!==null?Y.x:0,Vt=Y!==null?Y.y:0;re.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,rt,0,0,Nt,Vt,Q,xt),Qt.unbindTexture()};const rl=V.createFramebuffer(),Ka=V.createFramebuffer();this.copyTextureToTexture=function(R,Y,rt=null,lt=null,Q=0,xt=null){xt===null&&(Q!==0?(wr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=Q,Q=0):xt=0);let Nt,Vt,Ot,Kt,ie,Jt,he,Le,ke;const Oe=R.isCompressedTexture?R.mipmaps[xt]:R.image;if(rt!==null)Nt=rt.max.x-rt.min.x,Vt=rt.max.y-rt.min.y,Ot=rt.isBox3?rt.max.z-rt.min.z:1,Kt=rt.min.x,ie=rt.min.y,Jt=rt.isBox3?rt.min.z:0;else{const Ln=Math.pow(2,-Q);Nt=Math.floor(Oe.width*Ln),Vt=Math.floor(Oe.height*Ln),R.isDataArrayTexture?Ot=Oe.depth:R.isData3DTexture?Ot=Math.floor(Oe.depth*Ln):Ot=1,Kt=0,ie=0,Jt=0}lt!==null?(he=lt.x,Le=lt.y,ke=lt.z):(he=0,Le=0,ke=0);const pe=zt.convert(Y.format),kt=zt.convert(Y.type);let qe;Y.isData3DTexture?(re.setTexture3D(Y,0),qe=V.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(re.setTexture2DArray(Y,0),qe=V.TEXTURE_2D_ARRAY):(re.setTexture2D(Y,0),qe=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ae=V.getParameter(V.UNPACK_ROW_LENGTH),Mn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Hi=V.getParameter(V.UNPACK_SKIP_PIXELS),vn=V.getParameter(V.UNPACK_SKIP_ROWS),Ja=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Oe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Oe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Kt),V.pixelStorei(V.UNPACK_SKIP_ROWS,ie),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Jt);const ve=R.isDataArrayTexture||R.isData3DTexture,Cn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const Ln=It.get(R),pn=It.get(Y),sn=It.get(Ln.__renderTarget),Os=It.get(pn.__renderTarget);Qt.bindFramebuffer(V.READ_FRAMEBUFFER,sn.__webglFramebuffer),Qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Os.__webglFramebuffer);for(let Ai=0;Ai<Ot;Ai++)ve&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,It.get(R).__webglTexture,Q,Jt+Ai),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,It.get(Y).__webglTexture,xt,ke+Ai)),V.blitFramebuffer(Kt,ie,Nt,Vt,he,Le,Nt,Vt,V.DEPTH_BUFFER_BIT,V.NEAREST);Qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||It.has(R)){const Ln=It.get(R),pn=It.get(Y);Qt.bindFramebuffer(V.READ_FRAMEBUFFER,rl),Qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ka);for(let sn=0;sn<Ot;sn++)ve?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ln.__webglTexture,Q,Jt+sn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ln.__webglTexture,Q),Cn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,pn.__webglTexture,xt,ke+sn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,pn.__webglTexture,xt),Q!==0?V.blitFramebuffer(Kt,ie,Nt,Vt,he,Le,Nt,Vt,V.COLOR_BUFFER_BIT,V.NEAREST):Cn?V.copyTexSubImage3D(qe,xt,he,Le,ke+sn,Kt,ie,Nt,Vt):V.copyTexSubImage2D(qe,xt,he,Le,Kt,ie,Nt,Vt);Qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Cn?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(qe,xt,he,Le,ke,Nt,Vt,Ot,pe,kt,Oe.data):Y.isCompressedArrayTexture?V.compressedTexSubImage3D(qe,xt,he,Le,ke,Nt,Vt,Ot,pe,Oe.data):V.texSubImage3D(qe,xt,he,Le,ke,Nt,Vt,Ot,pe,kt,Oe):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,xt,he,Le,Nt,Vt,pe,kt,Oe.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,xt,he,Le,Oe.width,Oe.height,pe,Oe.data):V.texSubImage2D(V.TEXTURE_2D,xt,he,Le,Nt,Vt,pe,kt,Oe);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ae),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Mn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Hi),V.pixelStorei(V.UNPACK_SKIP_ROWS,vn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ja),xt===0&&Y.generateMipmaps&&V.generateMipmap(qe),Qt.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,rt=null,lt=null,Q=0){return wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,rt,lt,Q)},this.initRenderTarget=function(R){It.get(R).__webglFramebuffer===void 0&&re.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?re.setTextureCube(R,0):R.isData3DTexture?re.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?re.setTexture2DArray(R,0):re.setTexture2D(R,0),Qt.unbindTexture()},this.resetState=function(){k=0,B=0,W=null,Qt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}const r2=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hv=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();var o2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const l2=we.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...d},m)=>we.createElement("svg",{ref:m,...o2,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:Hv("lucide",l),...d},[...f.map(([p,g])=>we.createElement(p,g)),...Array.isArray(c)?c:[c]]));const Se=(r,t)=>{const i=we.forwardRef(({className:s,...l},c)=>we.createElement(l2,{ref:c,iconNode:t,className:Hv(`lucide-${r2(r)}`,s),...l}));return i.displayName=`${r}`,i};const c2=Se("BadgeDollarSign",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);const u2=Se("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);const f2=Se("Bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);const h2=Se("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);const Gv=Se("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);const d2=Se("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);const p2=Se("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const m2=Se("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);const g2=Se("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);const tl=Se("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);const ep=Se("FileOutput",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]]);const tu=Se("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);const _2=Se("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);const v2=Se("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);const Vv=Se("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);const x2=Se("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);const y2=Se("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);const S2=Se("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const M2=Se("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);const E2=Se("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);const qo=Se("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);const Ur=Se("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);const T2=Se("RadioTower",[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9",key:"s0qx1y"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",key:"1idnkw"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47",key:"ojru2q"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1",key:"rhi7fg"}],["path",{d:"M9.5 18h5",key:"mfy3pd"}],["path",{d:"m8 22 4-11 4 11",key:"25yftu"}]]);const kv=Se("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);const b2=Se("ScanBarcode",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 7v10",key:"23sfjj"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M17 7v10",key:"578dap"}]]);const jv=Se("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);const Xv=Se("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);const np=Se("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);const A2=Se("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);const C2=Se("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);const R2=Se("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]]);const qv=Se("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);const w2=Se("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);const D2=Se("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);const U2=Se("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);const N2=Se("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),Cs=["Facebook","TikTok","Viber","Phone"],L2=["All","Indoor","Outdoor","Succulent","Cactus","Flowers","Decorative","Garden Center","Landscaping"],Wv=["Paid","Pending","Partial"],ip=["Indoor","Outdoor","Succulent","Cactus","Flowers","Decorative","Garden Center","Landscaping"],Id=[{id:1,plant_code:"PZ-IN-101",plant_name:"Monstera Deliciosa",plant_type:"Indoor",size:"M",quantity:24,unit_price:28e3,ws_price:18500,low_stock_limit:6,image:"https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80"},{id:2,plant_code:"PZ-OUT-044",plant_name:"Bougainvillea Basket",plant_type:"Outdoor",size:"L",quantity:16,unit_price:22e3,ws_price:14e3,low_stock_limit:5,image:"https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=800&q=80"},{id:3,plant_code:"PZ-SUC-018",plant_name:"Echeveria Rosette",plant_type:"Succulent",size:"S",quantity:38,unit_price:8500,ws_price:4200,low_stock_limit:10,image:"https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=80"},{id:4,plant_code:"PZ-CAC-032",plant_name:"Golden Barrel Cactus",plant_type:"Cactus",size:"M",quantity:11,unit_price:18e3,ws_price:9500,low_stock_limit:6,image:"https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?auto=format&fit=crop&w=800&q=80"},{id:5,plant_code:"PZ-FLW-205",plant_name:"Peace Lily Bloom",plant_type:"Flowers",size:"M",quantity:20,unit_price:26e3,ws_price:15500,low_stock_limit:7,image:"https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&w=800&q=80"},{id:6,plant_code:"PZ-DEC-076",plant_name:"Lucky Bamboo Vase",plant_type:"Decorative",size:"S",quantity:8,unit_price:32e3,ws_price:21e3,low_stock_limit:8,image:"https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80"},{id:7,plant_code:"PZ-GDN-112",plant_name:"Ceramic Pot Set",plant_type:"Garden Center",size:"Set",quantity:42,unit_price:12e3,ws_price:7300,low_stock_limit:12,image:"https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80"},{id:8,plant_code:"PZ-LND-010",plant_name:"Patio Landscaping Package",plant_type:"Landscaping",size:"Order",quantity:9,unit_price:18e4,ws_price:122e3,low_stock_limit:3,image:"https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800&q=80"}],Fd=[{id:1,cus_name:"Daw Hnin",cus_ph:"+95 9 420 111 204",cus_address:"Pyay downtown",source:"Facebook",created_at:"2026-07-02",updated_at:"2026-07-02"},{id:2,cus_name:"Ko Min",cus_ph:"+95 9 752 190 334",cus_address:"Nawaday Road",source:"Viber",created_at:"2026-07-05",updated_at:"2026-07-05"}],O2=[{id:1,invoice_no:"PZ-20260708-001",customer:Fd[0],sale_date:"2026-07-08",payment_status:"Paid",payment_method:"Cash",subtotal:56e3,wholesale_total:37e3,profit_total:19e3,sale_amount:56e3,items:[{...Id[0],quantity:2,sale_amount:56e3,profit_amount:19e3}]},{id:2,invoice_no:"PZ-20260707-002",customer:Fd[1],sale_date:"2026-07-07",payment_status:"Pending",payment_method:"Mobile Pay",subtotal:32e3,wholesale_total:21e3,profit_total:11e3,sale_amount:32e3,items:[{...Id[5],quantity:1,sale_amount:32e3,profit_amount:11e3}]}],Yv=[{id:"pos",label:"POS Sale",icon:b2,group:"Selling"},{id:"invoices",label:"Invoices",icon:kv,group:"Selling"},{id:"stock",label:"Plant Stock",icon:Vv,group:"Selling"},{id:"customers",label:"Customers",icon:N2,group:"Selling"},{id:"daily",label:"Daily Data",icon:Gv,group:"Reports"},{id:"monthly",label:"Monthly Data",icon:d2,group:"Reports"},{id:"export",label:"Export Center",icon:ep,group:"Reports"},{id:"settings",label:"Settings",icon:np,group:"Reports"}],Ke=r=>`${Number(r||0).toLocaleString()} Ks`,ei=()=>new Date().toISOString().slice(0,10),Zv=()=>new Date().toISOString().slice(0,7),Ni=r=>String(r??"").toLowerCase();function qc(r,t){const[i,s]=we.useState(()=>{try{const l=localStorage.getItem(r);return l?JSON.parse(l):t}catch{return t}});return we.useEffect(()=>{localStorage.setItem(r,JSON.stringify(i))},[r,i]),[i,s]}function P2(){const r=we.useRef(null);return we.useEffect(()=>{const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=r.current;if(!i||t)return;const s=new OM,l=new pi(45,1,.1,100);l.position.set(0,0,8);const c=new s2({alpha:!0,antialias:!0});c.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(c.domElement);const f=new S1(16777215,.7);s.add(f);const d=new y1(16777215,1.6);d.position.set(2,4,5),s.add(d);const m=new Ho;s.add(m);const p=new Cv;p.moveTo(0,0),p.bezierCurveTo(.55,.25,.55,1.1,0,1.55),p.bezierCurveTo(-.55,1.1,-.55,.25,0,0);const g=[new Fo({color:"#2E7D32",roughness:.65,metalness:.02}),new Fo({color:"#6B8E23",roughness:.75,metalness:.01}),new Fo({color:"#A7C957",roughness:.7,metalness:.01})];Array.from({length:18}).forEach((E,v)=>{const H=new $d(p),N=new mi(H,g[v%g.length]);N.position.set((Math.random()-.5)*9,(Math.random()-.5)*3.8,(Math.random()-.5)*2),N.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const C=.22+Math.random()*.22;N.scale.set(C,C,C),N.userData={speed:.003+Math.random()*.007,drift:Math.random()*Math.PI*2},m.add(N)});const _=new mi(new Qc(.035,.045,4.4,16),new Fo({color:"#355E3B",roughness:.8}));_.rotation.z=.55,_.position.set(-1.8,-.15,-.4),m.add(_);const x=new mi(new Qc(.65,.82,.75,32),new Fo({color:"#EFE7DA",roughness:.55}));x.position.set(-2.3,-1.45,.1),m.add(x);const M=()=>{const{clientWidth:E,clientHeight:v}=i;l.aspect=Math.max(E,1)/Math.max(v,1),l.updateProjectionMatrix(),c.setSize(E,v)};M(),window.addEventListener("resize",M);let T;const w=()=>{T=requestAnimationFrame(w),m.rotation.y+=.002,m.children.forEach(E=>{E.userData.speed&&(E.rotation.z+=E.userData.speed,E.position.y+=Math.sin(Date.now()*E.userData.speed*.25+E.userData.drift)*.0018)}),c.render(s,l)};return w(),()=>{cancelAnimationFrame(T),window.removeEventListener("resize",M),c.dispose(),g.forEach(E=>E.dispose()),m.traverse(E=>{E.geometry&&E.geometry.dispose()}),i.removeChild(c.domElement)}},[]),S.jsx("div",{ref:r,className:"botanical-scene","aria-hidden":"true"})}function z2(){const[r,t]=we.useState("pos"),[i,s]=we.useState(!1),[l,c]=qc("plant-zone-plants",Id),[f,d]=qc("plant-zone-customers",Fd),[m,p]=qc("plant-zone-invoices",O2),[g,_]=we.useState([]),[x,M]=we.useState(""),[T,w]=we.useState("All"),[E,v]=we.useState({cus_name:"",cus_address:"",cus_ph:"",source:"Facebook"}),[H,N]=we.useState({payment_status:"Paid",payment_method:"Cash"}),C=we.useMemo(()=>$v(m),[m]),G=we.useMemo(()=>{const $=ei().replaceAll("-",""),L=m.filter(ct=>ct.invoice_no.includes($)).length+1;return`PZ-${$}-${String(L).padStart(3,"0")}`},[m]),k=we.useMemo(()=>g.reduce(($,L)=>($.subtotal+=L.unit_price*L.cartQty,$.wholesale+=L.ws_price*L.cartQty,$.profit+=(L.unit_price-L.ws_price)*L.cartQty,$),{subtotal:0,wholesale:0,profit:0}),[g]),B=$=>{$.quantity<=0||_(L=>L.find(O=>O.id===$.id)?L.map(O=>O.id===$.id?{...O,cartQty:Math.min(O.cartQty+1,$.quantity)}:O):[...L,{...$,cartQty:1}])},W=($,L)=>{_(ct=>ct.map(O=>O.id===$?{...O,cartQty:Math.max(0,Math.min(O.cartQty+L,O.quantity))}:O).filter(O=>O.cartQty>0))},D=()=>{if(!g.length||!E.cus_name.trim())return;const L={id:Date.now(),...E,created_at:ei(),updated_at:ei()},ct=g.map(X=>({plant_id:X.id,plant_name:X.plant_name,plant_code:X.plant_code,plant_type:X.plant_type,size:X.size,quantity:X.cartQty,unit_price:X.unit_price,ws_price:X.ws_price,sale_amount:X.unit_price*X.cartQty,profit_amount:(X.unit_price-X.ws_price)*X.cartQty})),O={id:Date.now(),invoice_no:G,customer:L,sale_date:ei(),payment_status:H.payment_status,payment_method:H.payment_method,subtotal:k.subtotal,wholesale_total:k.wholesale,profit_total:k.profit,sale_amount:k.subtotal,items:ct,created_at:new Date().toISOString()};p(X=>[O,...X]),d(X=>Z2(X,L)),c(X=>X.map(Z=>{const yt=g.find(Tt=>Tt.id===Z.id);return yt?{...Z,quantity:Math.max(0,Z.quantity-yt.cartQty),updated_at:ei()}:Z})),_([]),v({cus_name:"",cus_address:"",cus_ph:"",source:E.source})},U=!g.length||!E.cus_name.trim(),I=we.useMemo(()=>C.filter($=>$.date===ei()),[C]),ot=we.useMemo(()=>C.filter($=>$.date.startsWith(Zv())),[C]);return S.jsxs("div",{className:"app-shell",children:[S.jsxs("aside",{className:`sidebar ${i?"open":""}`,children:[S.jsxs("div",{className:"brand",children:[S.jsx("span",{className:"brand-mark",children:S.jsx(C2,{size:24})}),S.jsxs("div",{children:[S.jsx("strong",{children:"Plant Zone POS"}),S.jsx("small",{children:"Garden Center | Pyay"})]})]}),S.jsxs("div",{className:"profile-mini",children:[S.jsx("div",{className:"profile-cover"}),S.jsxs("div",{className:"profile-body",children:[S.jsx("p",{children:"Indoor plants, outdoor plants, cactus, flowers, delivery, reservations, and landscaping service."}),S.jsxs("span",{children:[S.jsx(B2,{})," +95 9 756 040646"]}),S.jsxs("span",{children:[S.jsx(x2,{size:15})," Pyay, Bago Region"]}),S.jsxs("span",{children:[S.jsx(m2,{size:15})," Always open"]})]})]}),S.jsx("nav",{className:"nav-list","aria-label":"Main navigation",children:["Selling","Reports"].map($=>S.jsxs(J_.Fragment,{children:[S.jsx("div",{className:"nav-label",children:$}),Yv.filter(L=>L.group===$).map(L=>{const ct=L.icon;return S.jsxs("button",{className:`nav-item ${r===L.id?"active":""}`,onClick:()=>{t(L.id),s(!1)},children:[S.jsx(ct,{size:18}),S.jsx("span",{children:L.label})]},L.id)})]},$))})]}),S.jsx("div",{className:"mobile-backdrop",hidden:!i,onClick:()=>s(!1)}),S.jsxs("main",{className:"main-content",children:[S.jsx(I2,{activePage:r,onMenu:()=>s(!0)}),r==="pos"&&S.jsx(F2,{plants:l,rows:I,invoices:m,monthlyRows:ot,query:x,setQuery:M,category:T,setCategory:w,addToCart:B,cart:g,updateCartQty:W,customerDraft:E,setCustomerDraft:v,paymentDraft:H,setPaymentDraft:N,cartTotals:k,invoiceNo:G,completeSale:D,completeSaleDisabled:U}),r==="invoices"&&S.jsx(H2,{invoices:m,setInvoices:p}),r==="stock"&&S.jsx(V2,{plants:l,setPlants:c}),r==="customers"&&S.jsx(k2,{customers:f,invoices:m}),r==="daily"&&S.jsx(j2,{rows:C}),r==="monthly"&&S.jsx(X2,{rows:C,invoices:m}),r==="export"&&S.jsx(q2,{rows:C,invoices:m}),r==="settings"&&S.jsx(W2,{})]})]})}function B2(){return S.jsx("span",{className:"phone-dot","aria-hidden":"true",children:"09"})}function I2({activePage:r,onMenu:t}){const i=Yv.find(s=>s.id===r);return S.jsxs(S.Fragment,{children:[S.jsxs("header",{className:"topbar",children:[S.jsx("button",{className:"icon-button mobile-menu",onClick:t,"aria-label":"Open navigation",children:S.jsx(S2,{size:20})}),S.jsxs("label",{className:"top-search",children:[S.jsx(jv,{size:18}),S.jsx("input",{placeholder:"Search plant code, plant name, invoice, customer phone..."})]}),S.jsxs("button",{className:"soft-button",children:[S.jsx(R2,{size:17})," Plant Zone Main"]}),S.jsxs("button",{className:"soft-button",children:[S.jsx(Gv,{size:17})," 08 Jul 2026"]}),S.jsx("button",{className:"icon-button","aria-label":"Notifications",children:S.jsx(f2,{size:18})})]}),S.jsxs("section",{className:"hero",children:[S.jsx(P2,{}),S.jsx("div",{className:"hero-content",children:S.jsxs("div",{children:[S.jsx("p",{className:"eyebrow",children:"Plant Zone Garden Center"}),S.jsx("h1",{children:r==="pos"?"Plant Zone Garden Center POS":i?.label||"POS Sale"}),S.jsx("p",{className:"hero-copy",children:"A modern POS for plant sales, social media customers, delivery orders, reservations, landscaping service, invoices, and export-ready daily/monthly data."}),S.jsxs("div",{className:"hero-actions",children:[S.jsxs("button",{className:"primary-button",children:[S.jsx(qo,{size:17})," New Invoice"]}),S.jsxs("button",{className:"soft-button",children:[S.jsx(tu,{size:17})," Export Today"]}),S.jsxs("button",{className:"soft-button",children:[S.jsx(U2,{size:17})," Delivery Order"]})]})]})})]})]})}function F2({plants:r,rows:t,invoices:i,monthlyRows:s,query:l,setQuery:c,category:f,setCategory:d,addToCart:m,cart:p,updateCartQty:g,customerDraft:_,setCustomerDraft:x,paymentDraft:M,setPaymentDraft:T,cartTotals:w,invoiceNo:E,completeSale:v,completeSaleDisabled:H}){const N=we.useMemo(()=>r.filter(L=>{const ct=[L.plant_name,L.plant_code,L.plant_type].some(X=>Ni(X).includes(Ni(l))),O=f==="All"||L.plant_type===f;return ct&&O}),[r,l,f]),[C,G]=we.useState({plant_code:"",plant_name:"",plant_type:"Indoor",size:"M",quantity:1,unit_price:0,ws_price:0,source:"Facebook"}),k=t.reduce((L,ct)=>L+ct.sale_amount,0),B=s.reduce((L,ct)=>L+ct.sale_amount,0),W=t.reduce((L,ct)=>L+ct.profit,0),D=r.filter(L=>L.quantity<=L.low_stock_limit).length,U=nx(t.length?t:s,"customer_source")||"Facebook",I=Cs.map(L=>({source:L,total:t.filter(ct=>ct.customer_source===L).reduce((ct,O)=>ct+O.sale_amount,0)})),ot=Math.max(1,...I.map(L=>L.total)),$=()=>{const L=r.find(ct=>Ni(ct.plant_code)===Ni(C.plant_code)||Ni(ct.plant_name)===Ni(C.plant_name));L&&m(L)};return S.jsxs("section",{className:"pos-dashboard",children:[S.jsxs("div",{className:"summary-grid reveal",children:[S.jsx(Li,{icon:S.jsx(u2,{size:18}),label:"Today Sales",value:Ke(k),detail:`${new Set(t.map(L=>L.invoice_no)).size} invoices`}),S.jsx(Li,{icon:S.jsx(w2,{size:18}),label:"Monthly Sales",value:Ke(B),detail:"July 2026"}),S.jsx(Li,{icon:S.jsx(c2,{size:18}),label:"Profit",value:Ke(W),detail:"WS price tracked"}),S.jsx(Li,{icon:S.jsx(D2,{size:18}),label:"Low Stock",value:D,detail:"need refill"}),S.jsx(Li,{icon:S.jsx(y2,{size:18}),label:"Top Source",value:U,detail:"social order mix"})]}),S.jsxs("div",{className:"page-grid pos-grid workbench",children:[S.jsxs("div",{className:"panel reveal catalog-panel",children:[S.jsxs("div",{className:"panel-title-row",children:[S.jsxs("div",{className:"panel-title",children:[S.jsx(A2,{size:20}),S.jsxs("div",{children:[S.jsx("h2",{children:"Smart Sale Entry"}),S.jsx("p",{children:"Use exact plant, customer, source, price, and invoice data in one screen."})]})]}),S.jsx("button",{className:"icon-button","aria-label":"Filter catalog",children:S.jsx(v2,{size:18})})]}),S.jsxs("div",{className:"sale-layout",children:[S.jsxs("div",{className:"entry-form",children:[S.jsxs("div",{className:"form-grid",children:[S.jsxs("label",{children:["Plant Code",S.jsx("input",{value:C.plant_code,onChange:L=>G({...C,plant_code:L.target.value}),placeholder:"PZ-IN-101"})]}),S.jsxs("label",{children:["Quantity",S.jsx("input",{type:"number",value:C.quantity,onChange:L=>G({...C,quantity:Number(L.target.value)})})]}),S.jsxs("label",{className:"span-2",children:["Plant Name",S.jsx("input",{value:C.plant_name,onChange:L=>G({...C,plant_name:L.target.value}),placeholder:"Monstera Deliciosa"})]}),S.jsxs("label",{children:["Plant Type",S.jsx("select",{value:C.plant_type,onChange:L=>G({...C,plant_type:L.target.value}),children:ip.map(L=>S.jsx("option",{children:L},L))})]}),S.jsxs("label",{children:["Size",S.jsx("select",{value:C.size,onChange:L=>G({...C,size:L.target.value}),children:["XS","S","M","L","Set","Order"].map(L=>S.jsx("option",{children:L},L))})]}),S.jsxs("label",{children:["Unit Price",S.jsx("input",{type:"number",value:C.unit_price,onChange:L=>G({...C,unit_price:Number(L.target.value)})})]}),S.jsxs("label",{children:["WS Price",S.jsx("input",{type:"number",value:C.ws_price,onChange:L=>G({...C,ws_price:Number(L.target.value)})})]}),S.jsxs("label",{className:"span-2",children:["Customer Source",S.jsx("select",{value:C.source,onChange:L=>{G({...C,source:L.target.value}),x({..._,source:L.target.value})},children:Cs.map(L=>S.jsx("option",{children:L},L))})]})]}),S.jsxs("button",{className:"primary-button wide",type:"button",onClick:$,children:[S.jsx(qo,{size:17})," Add To Invoice"]})]}),S.jsxs("div",{className:"catalog-area",children:[S.jsxs("div",{className:"toolbar",children:[S.jsxs("label",{className:"search-field",children:[S.jsx(jv,{size:17}),S.jsx("input",{value:l,onChange:L=>c(L.target.value),placeholder:"Search Monstera or PZ-IN-101"})]}),S.jsx("div",{className:"category-scroll",children:L2.map(L=>S.jsx("button",{className:`chip ${f===L?"active":""}`,onClick:()=>d(L),children:L},L))})]}),S.jsx("div",{className:"plant-grid",children:N.map(L=>S.jsxs("article",{className:"plant-card",children:[S.jsx("img",{src:L.image,alt:L.plant_name,loading:"lazy",onError:ct=>{ct.currentTarget.src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80"}}),S.jsxs("div",{className:"plant-card-body",children:[S.jsxs("div",{children:[S.jsx("strong",{children:L.plant_name}),S.jsx("span",{children:L.plant_code})]}),S.jsxs("dl",{className:"plant-meta",children:[S.jsxs("div",{children:[S.jsx("dt",{children:"Type"}),S.jsx("dd",{children:L.plant_type})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"Size"}),S.jsx("dd",{children:L.size})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"Qty"}),S.jsx("dd",{className:L.quantity<=L.low_stock_limit?"danger-text":"",children:L.quantity})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"Price"}),S.jsx("dd",{children:Ke(L.unit_price)})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"WS"}),S.jsx("dd",{children:Ke(L.ws_price)})]})]}),S.jsx("button",{className:"mini-button",onClick:()=>m(L),disabled:L.quantity<=0,"aria-label":`Add ${L.plant_name}`,children:S.jsx(qo,{size:17})})]})]},L.id))})]})]})]}),S.jsxs("aside",{className:"panel reveal invoice-builder",children:[S.jsx("div",{className:"panel-title-row",children:S.jsxs("div",{className:"panel-title",children:[S.jsx(kv,{size:20}),S.jsxs("div",{children:[S.jsx("h2",{children:"Live Invoice"}),S.jsx("p",{children:"Print, PDF, or share after sale."})]})]})}),S.jsxs("div",{className:"invoice-paper",children:[S.jsxs("div",{className:"invoice-top",children:[S.jsxs("div",{children:[S.jsx("strong",{children:"Plant Zone"}),S.jsx("span",{children:"Pyay, Bago Region"}),S.jsx("span",{children:"+95 9 756 040646"})]}),S.jsxs("div",{className:"invoice-no",children:[E,S.jsx("span",{children:ei()})]})]}),S.jsxs("div",{className:"form-grid",children:[S.jsxs("label",{children:["Customer name",S.jsx("input",{required:!0,value:_.cus_name,onChange:L=>x({..._,cus_name:L.target.value})})]}),S.jsxs("label",{children:["Phone",S.jsx("input",{value:_.cus_ph,onChange:L=>x({..._,cus_ph:L.target.value})})]}),S.jsxs("label",{className:"span-2",children:["Address",S.jsx("input",{value:_.cus_address,onChange:L=>x({..._,cus_address:L.target.value})})]}),S.jsxs("label",{children:["Source",S.jsx("select",{value:_.source,onChange:L=>x({..._,source:L.target.value}),children:Cs.map(L=>S.jsx("option",{children:L},L))})]}),S.jsxs("label",{children:["Status",S.jsx("select",{value:M.payment_status,onChange:L=>T({...M,payment_status:L.target.value}),children:Wv.map(L=>S.jsx("option",{children:L},L))})]}),S.jsxs("label",{className:"span-2",children:["Payment method",S.jsx("input",{value:M.payment_method,onChange:L=>T({...M,payment_method:L.target.value})})]})]}),S.jsxs("div",{className:"cart-list",children:[p.length===0&&S.jsx("div",{className:"empty-state",children:"Cart is ready for the next plant sale."}),p.map(L=>S.jsxs("div",{className:"cart-row",children:[S.jsxs("div",{children:[S.jsx("strong",{children:L.plant_name}),S.jsxs("span",{children:[L.plant_code," - ",Ke(L.unit_price)]})]}),S.jsxs("div",{className:"stepper",children:[S.jsx("button",{onClick:()=>g(L.id,-1),"aria-label":`Decrease ${L.plant_name}`,children:S.jsx(M2,{size:15})}),S.jsx("span",{children:L.cartQty}),S.jsx("button",{onClick:()=>g(L.id,1),"aria-label":`Increase ${L.plant_name}`,children:S.jsx(qo,{size:15})})]})]},L.id))]}),S.jsx(Qv,{totals:w})]}),S.jsxs("div",{className:"action-row",children:[S.jsxs("button",{className:"primary-button wide",disabled:H,onClick:v,children:[S.jsx(p2,{size:18})," Complete sale"]}),S.jsxs("button",{className:"ghost-button",onClick:()=>window.print(),children:[S.jsx(Ur,{size:17})," Print"]}),S.jsxs("button",{className:"ghost-button",onClick:()=>ex(`${E} sale amount ${Ke(w.subtotal)}`),children:[S.jsx(Xv,{size:17})," Share"]})]})]})]}),S.jsxs("div",{className:"data-sections",children:[S.jsxs("div",{className:"panel reveal",children:[S.jsxs("div",{className:"panel-title-row",children:[S.jsxs("div",{className:"panel-title",children:[S.jsx(g2,{size:20}),S.jsxs("div",{children:[S.jsx("h2",{children:"Daily Sales Data List"}),S.jsx("p",{children:"All requested sale fields, ready for export."})]})]}),S.jsxs("div",{className:"export-actions",children:[S.jsxs("button",{className:"ghost-button",onClick:()=>Wa("plant-zone-today",t,"xls"),children:[S.jsx(tu,{size:17})," Excel"]}),S.jsxs("button",{className:"ghost-button",onClick:()=>window.print(),children:[S.jsx(Ur,{size:17})," Print"]})]})]}),S.jsx(Jv,{rows:t.slice(0,8)})]}),S.jsxs("aside",{className:"insight-stack",children:[S.jsxs("section",{className:"insight-card",children:[S.jsxs("h3",{children:[S.jsx(T2,{size:18})," Customer Source"]}),I.map(L=>S.jsxs("div",{className:"source-row",children:[S.jsx("span",{children:L.source}),S.jsx("div",{className:"bar",children:S.jsx("i",{style:{width:`${Math.max(8,Math.round(L.total/ot*100))}%`}})}),S.jsx("b",{children:Ke(L.total)})]},L.source))]}),S.jsxs("section",{className:"insight-card",children:[S.jsxs("h3",{children:[S.jsx(h2,{size:18})," Data Structure"]}),["Plants: name, code, type, size, qty, unit, WS","Customers: name, phone, address, source","Invoices: invoice no, date, payment, sale amount","Reports: daily list, monthly list, source totals"].map(L=>S.jsxs("div",{className:"data-pill",children:[S.jsx(Vv,{size:17}),S.jsx("span",{children:L})]},L))]}),S.jsxs("section",{className:"insight-card",children:[S.jsxs("h3",{children:[S.jsx(ep,{size:18})," Extract Functions"]}),S.jsxs("div",{className:"export-grid",children:[S.jsxs("button",{className:"export-button",onClick:()=>Wa("plant-zone-daily-data",t,"xls"),children:[S.jsxs("span",{children:[S.jsx("strong",{children:"Daily Excel"}),S.jsx("small",{children:"Selected day rows"})]}),S.jsx(tl,{size:16})]}),S.jsxs("button",{className:"export-button",onClick:()=>Wa("plant-zone-monthly-data",s,"xls"),children:[S.jsxs("span",{children:[S.jsx("strong",{children:"Monthly Excel"}),S.jsx("small",{children:"Grouped report rows"})]}),S.jsx(tl,{size:16})]}),S.jsxs("button",{className:"export-button",onClick:()=>window.print(),children:[S.jsxs("span",{children:[S.jsx("strong",{children:"Invoice PDF"}),S.jsx("small",{children:"Print or share"})]}),S.jsx(Ur,{size:16})]})]})]})]})]})]})}function Qv({totals:r}){return S.jsxs("div",{className:"totals",children:[S.jsxs("div",{children:[S.jsx("span",{children:"Subtotal"}),S.jsx("strong",{children:Ke(r.subtotal)})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Wholesale cost"}),S.jsx("strong",{children:Ke(r.wholesale)})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Estimated profit"}),S.jsx("strong",{children:Ke(r.profit)})]}),S.jsxs("div",{className:"grand-total",children:[S.jsx("span",{children:"Sale amount"}),S.jsx("strong",{children:Ke(r.subtotal)})]})]})}function H2({invoices:r,setInvoices:t}){const[i,s]=we.useState({date:"",customer:"",status:"",source:""}),[l,c]=we.useState(r[0]?.id??null),f=r.find(m=>m.id===l)||r[0],d=r.filter(m=>(!i.date||m.sale_date===i.date)&&(!i.customer||Ni(m.customer.cus_name).includes(Ni(i.customer)))&&(!i.status||m.payment_status===i.status)&&(!i.source||m.customer.source===i.source));return we.useEffect(()=>{!l&&r[0]&&c(r[0].id)},[r,l]),S.jsxs("section",{className:"page-grid invoice-page-grid",children:[S.jsxs("div",{className:"panel reveal",children:[S.jsxs("div",{className:"panel-title-row",children:[S.jsxs("div",{children:[S.jsx("h2",{children:"Invoices"}),S.jsx("p",{children:"Filter by date, customer, status, and source."})]}),S.jsxs("button",{className:"ghost-button",onClick:()=>Wa("plant-zone-invoices",$v(d),"csv"),children:[S.jsx(tl,{size:17})," CSV"]})]}),S.jsxs("div",{className:"filter-grid",children:[S.jsxs("label",{children:["Date",S.jsx("input",{type:"date",value:i.date,onChange:m=>s({...i,date:m.target.value})})]}),S.jsxs("label",{children:["Customer",S.jsx("input",{value:i.customer,onChange:m=>s({...i,customer:m.target.value}),placeholder:"Customer name"})]}),S.jsxs("label",{children:["Status",S.jsxs("select",{value:i.status,onChange:m=>s({...i,status:m.target.value}),children:[S.jsx("option",{value:"",children:"All"}),Wv.map(m=>S.jsx("option",{children:m},m))]})]}),S.jsxs("label",{children:["Source",S.jsxs("select",{value:i.source,onChange:m=>s({...i,source:m.target.value}),children:[S.jsx("option",{value:"",children:"All"}),Cs.map(m=>S.jsx("option",{children:m},m))]})]})]}),S.jsx("div",{className:"list-stack",children:d.map(m=>S.jsxs("button",{className:`invoice-row ${f?.id===m.id?"active":""}`,onClick:()=>c(m.id),children:[S.jsxs("span",{children:[S.jsx("strong",{children:m.invoice_no}),S.jsxs("small",{children:[m.customer.cus_name," - ",m.customer.source]})]}),S.jsxs("span",{children:[S.jsx("strong",{children:Ke(m.sale_amount)}),S.jsx("small",{children:m.payment_status})]})]},m.id))})]}),S.jsx(G2,{invoice:f,onDelete:m=>t(p=>p.filter(g=>g.id!==m))})]})}function G2({invoice:r,onDelete:t}){return r?S.jsxs("aside",{className:"panel reveal invoice-detail printable",children:[S.jsxs("div",{className:"panel-title-row",children:[S.jsxs("div",{children:[S.jsx("h2",{children:r.invoice_no}),S.jsxs("p",{children:[r.sale_date," - ",r.payment_method]})]}),S.jsxs("div",{className:"icon-actions",children:[S.jsx("button",{className:"icon-button",onClick:()=>window.print(),"aria-label":"Print invoice",children:S.jsx(Ur,{size:18})}),S.jsx("button",{className:"icon-button",onClick:()=>Y2(),"aria-label":"Export invoice PDF",children:S.jsx(_2,{size:18})}),S.jsx("button",{className:"icon-button",onClick:()=>ex(`${r.invoice_no} - ${r.customer.cus_name} - ${Ke(r.sale_amount)}`),"aria-label":"Share invoice",children:S.jsx(Xv,{size:18})}),S.jsx("button",{className:"icon-button danger",onClick:()=>t(r.id),"aria-label":"Delete invoice",children:S.jsx(qv,{size:18})})]})]}),S.jsxs("div",{className:"customer-summary",children:[S.jsx("strong",{children:r.customer.cus_name}),S.jsx("span",{children:r.customer.cus_ph}),S.jsx("span",{children:r.customer.cus_address}),S.jsxs("small",{children:[r.customer.source," - ",r.payment_status]})]}),S.jsx("div",{className:"table-wrap",children:S.jsxs("table",{children:[S.jsx("thead",{children:S.jsxs("tr",{children:[S.jsx("th",{children:"Plant"}),S.jsx("th",{children:"Code"}),S.jsx("th",{children:"Qty"}),S.jsx("th",{children:"Unit"}),S.jsx("th",{children:"Total"})]})}),S.jsx("tbody",{children:r.items.map(i=>S.jsxs("tr",{children:[S.jsx("td",{children:i.plant_name}),S.jsx("td",{children:i.plant_code}),S.jsx("td",{children:i.quantity}),S.jsx("td",{children:Ke(i.unit_price)}),S.jsx("td",{children:Ke(i.sale_amount)})]},`${r.id}-${i.plant_code}`))})]})}),S.jsx(Qv,{totals:{subtotal:r.subtotal,wholesale:r.wholesale_total,profit:r.profit_total}})]}):S.jsx("div",{className:"panel empty-state",children:"No invoices yet."})}function V2({plants:r,setPlants:t}){const i={plant_name:"",plant_code:"",plant_type:"Indoor",size:"M",quantity:0,unit_price:0,ws_price:0,low_stock_limit:5,image:"https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80"},[s,l]=we.useState(i),[c,f]=we.useState(null),[d,m]=qc("plant-zone-stock-history",[{id:1,date:"2026-07-08",plant_name:"Monstera Deliciosa",type:"Stock out",quantity:2},{id:2,date:"2026-07-06",plant_name:"Ceramic Pot Set",type:"Stock in",quantity:20}]),p=()=>{!s.plant_name||!s.plant_code||(t(c?g=>g.map(_=>_.id===c?{...s,id:c,updated_at:ei()}:_):g=>[{...s,id:Date.now(),created_at:ei(),updated_at:ei()},...g]),m(g=>[{id:Date.now(),date:ei(),plant_name:s.plant_name,type:c?"Edit":"Stock in",quantity:Number(s.quantity)},...g]),l(i),f(null))};return S.jsxs("section",{className:"page-grid stock-grid",children:[S.jsxs("div",{className:"panel reveal",children:[S.jsxs("div",{className:"panel-title-row",children:[S.jsxs("div",{children:[S.jsx("h2",{children:"Plant Stock"}),S.jsx("p",{children:"Add, edit, delete, and watch low-stock plants."})]}),S.jsx(np,{size:20})]}),S.jsxs("div",{className:"form-grid stock-form",children:[S.jsxs("label",{children:["Plant name",S.jsx("input",{value:s.plant_name,onChange:g=>l({...s,plant_name:g.target.value})})]}),S.jsxs("label",{children:["Plant code",S.jsx("input",{value:s.plant_code,onChange:g=>l({...s,plant_code:g.target.value})})]}),S.jsxs("label",{children:["Type",S.jsx("select",{value:s.plant_type,onChange:g=>l({...s,plant_type:g.target.value}),children:ip.map(g=>S.jsx("option",{children:g},g))})]}),S.jsxs("label",{children:["Size",S.jsx("input",{value:s.size,onChange:g=>l({...s,size:g.target.value})})]}),S.jsxs("label",{children:["Quantity",S.jsx("input",{type:"number",value:s.quantity,onChange:g=>l({...s,quantity:Number(g.target.value)})})]}),S.jsxs("label",{children:["Unit price",S.jsx("input",{type:"number",value:s.unit_price,onChange:g=>l({...s,unit_price:Number(g.target.value)})})]}),S.jsxs("label",{children:["WS price",S.jsx("input",{type:"number",value:s.ws_price,onChange:g=>l({...s,ws_price:Number(g.target.value)})})]}),S.jsxs("label",{children:["Low stock limit",S.jsx("input",{type:"number",value:s.low_stock_limit,onChange:g=>l({...s,low_stock_limit:Number(g.target.value)})})]}),S.jsxs("button",{className:"primary-button span-2",onClick:p,children:[S.jsx(qo,{size:17})," ",c?"Update plant":"Add plant"]})]})]}),S.jsxs("div",{className:"panel reveal",children:[S.jsx("div",{className:"table-wrap",children:S.jsxs("table",{children:[S.jsx("thead",{children:S.jsxs("tr",{children:[S.jsx("th",{children:"Name"}),S.jsx("th",{children:"Code"}),S.jsx("th",{children:"Type"}),S.jsx("th",{children:"Size"}),S.jsx("th",{children:"Qty"}),S.jsx("th",{children:"Unit"}),S.jsx("th",{children:"WS"}),S.jsx("th",{children:"Actions"})]})}),S.jsx("tbody",{children:r.map(g=>S.jsxs("tr",{className:g.quantity<=g.low_stock_limit?"low-stock":"",children:[S.jsx("td",{children:g.plant_name}),S.jsx("td",{children:g.plant_code}),S.jsx("td",{children:g.plant_type}),S.jsx("td",{children:g.size}),S.jsx("td",{children:g.quantity}),S.jsx("td",{children:Ke(g.unit_price)}),S.jsx("td",{children:Ke(g.ws_price)}),S.jsx("td",{children:S.jsxs("div",{className:"icon-actions",children:[S.jsx("button",{className:"icon-button",onClick:()=>{l(g),f(g.id)},"aria-label":`Edit ${g.plant_name}`,children:S.jsx(E2,{size:16})}),S.jsx("button",{className:"icon-button danger",onClick:()=>t(_=>_.filter(x=>x.id!==g.id)),"aria-label":`Delete ${g.plant_name}`,children:S.jsx(qv,{size:16})})]})})]},g.id))})]})}),S.jsx("h3",{children:"Stock in/out history"}),S.jsx("div",{className:"mini-history",children:d.map(g=>S.jsxs("span",{children:[g.date," - ",g.type," - ",g.plant_name," - ",g.quantity]},g.id))})]})]})}function k2({customers:r,invoices:t}){const[i,s]=we.useState(""),l=i?r.filter(c=>c.source===i):r;return S.jsxs("section",{className:"panel reveal",children:[S.jsxs("div",{className:"panel-title-row",children:[S.jsxs("div",{children:[S.jsx("h2",{children:"Customers"}),S.jsx("p",{children:"Saved automatically from completed sales."})]}),S.jsxs("label",{className:"compact-select",children:["Source ",S.jsxs("select",{value:i,onChange:c=>s(c.target.value),children:[S.jsx("option",{value:"",children:"All"}),Cs.map(c=>S.jsx("option",{children:c},c))]})]})]}),S.jsx("div",{className:"customer-grid",children:l.map(c=>{const f=t.filter(p=>p.customer.cus_ph===c.cus_ph||p.customer.cus_name===c.cus_name),d=f.reduce((p,g)=>p+g.sale_amount,0),m=f.map(p=>p.sale_date).sort().at(-1)||c.updated_at;return S.jsxs("article",{className:"customer-card",children:[S.jsx("div",{className:"avatar",children:c.cus_name.slice(0,1).toUpperCase()}),S.jsx("strong",{children:c.cus_name}),S.jsx("span",{children:c.cus_ph}),S.jsx("small",{children:c.cus_address}),S.jsxs("div",{className:"customer-metrics",children:[S.jsxs("div",{children:[S.jsx("span",{children:"Total purchases"}),S.jsx("strong",{children:Ke(d)})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Last purchase"}),S.jsx("strong",{children:m})]})]}),S.jsx("span",{className:"source-pill",children:c.source})]},c.id)})})]})}function j2({rows:r}){const[t,i]=we.useState({date:ei(),type:"",source:"",search:""}),s=tx(r,t,"day");return S.jsx(Kv,{title:"Daily Data List",description:"All sale rows for the selected day.",rows:s,filters:t,setFilters:i,mode:"day",filename:"plant-zone-daily-data"})}function X2({rows:r,invoices:t}){const[i,s]=we.useState({month:Zv(),type:"",source:"",search:""}),l=tx(r,i,"month"),c=new Set(l.map(x=>x.invoice_no)),f=Cs.map(x=>({source:x,total:l.filter(M=>M.customer_source===x).reduce((M,T)=>M+T.sale_amount,0)})),d=nx(l,"plant_name"),m=f.slice().sort((x,M)=>M.total-x.total)[0]?.source||"-",p=l.reduce((x,M)=>x+M.sale_amount,0),g=l.reduce((x,M)=>x+M.profit,0),_=t.filter(x=>x.sale_date.startsWith(i.month));return S.jsxs("section",{className:"report-layout",children:[S.jsxs("div",{className:"summary-grid reveal",children:[S.jsx(Li,{label:"Total sales",value:Ke(p)}),S.jsx(Li,{label:"Total profit",value:Ke(g)}),S.jsx(Li,{label:"Invoice count",value:c.size||_.length}),S.jsx(Li,{label:"Best-selling plant",value:d||"-"}),S.jsx(Li,{label:"Top source",value:m})]}),S.jsxs("div",{className:"panel reveal source-breakdown",children:[S.jsx("div",{className:"panel-title-row",children:S.jsxs("div",{children:[S.jsx("h2",{children:"Source Breakdown"}),S.jsx("p",{children:"Monthly source report for Facebook, TikTok, Viber, and Phone."})]})}),S.jsx("div",{className:"source-bars",children:f.map(x=>{const M=p?Math.round(x.total/p*100):0;return S.jsxs("div",{className:"source-bar",children:[S.jsx("span",{children:x.source}),S.jsx("div",{children:S.jsx("i",{style:{width:`${M}%`}})}),S.jsx("strong",{children:Ke(x.total)})]},x.source)})})]}),S.jsx(Kv,{title:"Monthly Data List",description:"A separate monthly report page for permission-based navigation later.",rows:l,filters:i,setFilters:s,mode:"month",filename:"plant-zone-monthly-data"})]})}function Kv({title:r,description:t,rows:i,filters:s,setFilters:l,mode:c,filename:f}){return S.jsxs("section",{className:"panel reveal",children:[S.jsxs("div",{className:"panel-title-row report-title-row",children:[S.jsxs("div",{children:[S.jsx("h2",{children:r}),S.jsx("p",{children:t})]}),S.jsxs("div",{className:"export-actions",children:[S.jsxs("button",{className:"ghost-button",onClick:()=>Wa(f,i,"csv"),children:[S.jsx(tl,{size:17})," CSV"]}),S.jsxs("button",{className:"ghost-button",onClick:()=>Wa(f,i,"xls"),children:[S.jsx(tu,{size:17})," Excel"]}),S.jsxs("button",{className:"ghost-button",onClick:()=>window.print(),children:[S.jsx(Ur,{size:17})," PDF"]})]})]}),S.jsxs("div",{className:"filter-grid",children:[c==="day"?S.jsxs("label",{children:["Date",S.jsx("input",{type:"date",value:s.date,onChange:d=>l({...s,date:d.target.value})})]}):S.jsxs("label",{children:["Month",S.jsx("input",{type:"month",value:s.month,onChange:d=>l({...s,month:d.target.value})})]}),S.jsxs("label",{children:["Plant type",S.jsxs("select",{value:s.type,onChange:d=>l({...s,type:d.target.value}),children:[S.jsx("option",{value:"",children:"All"}),ip.map(d=>S.jsx("option",{children:d},d))]})]}),S.jsxs("label",{children:["Source",S.jsxs("select",{value:s.source,onChange:d=>l({...s,source:d.target.value}),children:[S.jsx("option",{value:"",children:"All"}),Cs.map(d=>S.jsx("option",{children:d},d))]})]}),S.jsxs("label",{children:["Keyword",S.jsx("input",{value:s.search,onChange:d=>l({...s,search:d.target.value}),placeholder:"Plant, code, customer"})]})]}),S.jsx(Jv,{rows:i})]})}function Jv({rows:r}){const t=[["date","Date"],["invoice_no","Invoice"],["plant_name","Plant name"],["plant_code","Code"],["plant_type","Type"],["size","Size"],["quantity","Qty"],["unit_price","Unit price"],["ws_price","WS price"],["customer_name","Customer"],["customer_phone","Phone"],["customer_address","Address"],["customer_source","Source"],["sale_amount","Sale amount"],["profit","Profit"]];return S.jsxs("div",{className:"table-wrap report-table",children:[S.jsxs("table",{children:[S.jsx("thead",{children:S.jsx("tr",{children:t.map(([,i])=>S.jsx("th",{children:i},i))})}),S.jsx("tbody",{children:r.map((i,s)=>S.jsx("tr",{children:t.map(([l])=>S.jsx("td",{children:["unit_price","ws_price","sale_amount","profit"].includes(l)?Ke(i[l]):i[l]},l))},`${i.invoice_no}-${i.plant_code}-${s}`))})]}),!r.length&&S.jsx("div",{className:"empty-state",children:"No rows match the current filters."})]})}function Li({icon:r,label:t,value:i,detail:s}){return S.jsxs("article",{className:"metric-card",children:[S.jsxs("span",{className:"metric-label",children:[t,r]}),S.jsx("strong",{children:i}),s&&S.jsx("small",{children:s})]})}function q2({rows:r,invoices:t}){return S.jsxs("section",{className:"panel reveal export-center",children:[S.jsx("div",{className:"panel-title-row",children:S.jsxs("div",{className:"panel-title",children:[S.jsx(ep,{size:20}),S.jsxs("div",{children:[S.jsx("h2",{children:"Export Center"}),S.jsx("p",{children:"Fast exports for cashier handoff, daily books, and monthly review."})]})]})}),S.jsxs("div",{className:"export-tile-grid",children:[S.jsxs("button",{className:"export-tile",onClick:()=>Wa("plant-zone-all-sales",r,"xls"),children:[S.jsx(tu,{size:22}),S.jsx("strong",{children:"All Sales Excel"}),S.jsxs("span",{children:[r.length," item rows"]})]}),S.jsxs("button",{className:"export-tile",onClick:()=>Wa("plant-zone-all-sales",r,"csv"),children:[S.jsx(tl,{size:22}),S.jsx("strong",{children:"All Sales CSV"}),S.jsx("span",{children:"Spreadsheet-ready CSV"})]}),S.jsxs("button",{className:"export-tile",onClick:()=>window.print(),children:[S.jsx(Ur,{size:22}),S.jsx("strong",{children:"PDF / Print"}),S.jsxs("span",{children:[t.length," invoice records"]})]})]})]})}function W2(){return S.jsxs("section",{className:"panel reveal settings-page",children:[S.jsx("div",{className:"panel-title-row",children:S.jsxs("div",{className:"panel-title",children:[S.jsx(np,{size:20}),S.jsxs("div",{children:[S.jsx("h2",{children:"Settings"}),S.jsx("p",{children:"Plant Zone business defaults for future database and permission setup."})]})]})}),S.jsxs("div",{className:"settings-grid",children:[S.jsxs("label",{children:["Business name",S.jsx("input",{value:"Plant Zone",readOnly:!0})]}),S.jsxs("label",{children:["Business type",S.jsx("input",{value:"Garden Center",readOnly:!0})]}),S.jsxs("label",{children:["Location",S.jsx("input",{value:"Pyay, Bago Region, Myanmar",readOnly:!0})]}),S.jsxs("label",{children:["Phone",S.jsx("input",{value:"+95 9 756 040646",readOnly:!0})]}),S.jsxs("label",{children:["Default payment method",S.jsx("input",{value:"Cash",readOnly:!0})]}),S.jsxs("label",{children:["Monthly report permission",S.jsx("input",{value:"Separate navigation page",readOnly:!0})]})]})]})}function $v(r){return r.flatMap(t=>t.items.map(i=>({date:t.sale_date,invoice_no:t.invoice_no,plant_name:i.plant_name,plant_code:i.plant_code,plant_type:i.plant_type,size:i.size,quantity:i.quantity,unit_price:i.unit_price,ws_price:i.ws_price,customer_name:t.customer.cus_name,customer_phone:t.customer.cus_ph,customer_address:t.customer.cus_address,customer_source:t.customer.source,sale_amount:i.sale_amount,profit:i.profit_amount})))}function tx(r,t,i){return r.filter(s=>{const l=i==="day"?s.date===t.date:s.date.startsWith(t.month),c=!t.type||s.plant_type===t.type,f=!t.source||s.customer_source===t.source,d=!t.search||[s.plant_name,s.plant_code,s.customer_name,s.customer_phone].some(m=>Ni(m).includes(Ni(t.search)));return l&&c&&f&&d})}function Wa(r,t,i){const s=["date","invoice_no","plant_name","plant_code","plant_type","size","quantity","unit_price","ws_price","customer_name","customer_phone","customer_address","customer_source","sale_amount","profit"];if(i==="xls"){const c=t.map(f=>`<tr>${s.map(d=>`<td>${f[d]??""}</td>`).join("")}</tr>`).join("");K_(`${r}.xls`,"application/vnd.ms-excel",`<table><thead><tr>${s.map(f=>`<th>${f}</th>`).join("")}</tr></thead><tbody>${c}</tbody></table>`);return}const l=[s.join(","),...t.map(c=>s.map(f=>`"${String(c[f]??"").replaceAll('"','""')}"`).join(","))].join(`
`);K_(`${r}.csv`,"text/csv;charset=utf-8",l)}function K_(r,t,i){const s=new Blob([i],{type:t}),l=URL.createObjectURL(s),c=document.createElement("a");c.href=l,c.download=r,c.click(),URL.revokeObjectURL(l)}function ex(r){navigator.share?navigator.share({title:"Plant Zone POS",text:r}).catch(()=>{}):(navigator.clipboard?.writeText(r),alert("Invoice record copied for sharing."))}function Y2(){window.print()}function Z2(r,t){const i=r.find(s=>s.cus_ph&&s.cus_ph===t.cus_ph);return i?r.map(s=>s.id===i.id?{...s,...t,id:i.id,updated_at:ei()}:s):[t,...r]}function nx(r,t){const i=r.reduce((s,l)=>(s[l[t]]=(s[l[t]]||0)+Number(l.quantity||1),s),{});return Object.entries(i).sort((s,l)=>l[1]-s[1])[0]?.[0]}vS.createRoot(document.getElementById("root")).render(S.jsx(J_.StrictMode,{children:S.jsx(z2,{})}));
