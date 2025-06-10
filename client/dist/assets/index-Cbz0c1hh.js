var Wo=n=>{throw TypeError(n)};var Nt=(n,e,t)=>e.has(n)||Wo("Cannot "+t);var C=(n,e,t)=>(Nt(n,e,"read from private field"),t?t.call(n):e.get(n)),V=(n,e,t)=>e.has(n)?Wo("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),H=(n,e,t,o)=>(Nt(n,e,"write to private field"),o?o.call(n,t):e.set(n,t),t),on=(n,e,t)=>(Nt(n,e,"access private method"),t);var et=(n,e,t,o)=>({set _(r){H(n,e,r,t)},get _(){return C(n,e,o)}});import{r as c,a as yt,R as S,G as Pr,b as $s}from"./react-C0EHPp_L.js";import{X as Us,S as Xs,M as Ks,a as qs,b as Js,c as jr,C as Zs,d as ni,P as ei,F as ti,A as oi,e as ri,f as ai,g as si}from"./lucide-BRJncBXw.js";import{h as ii,E as li}from"./vendor-F7X7SyXM.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var Or={exports:{}},pt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ui=c,di=Symbol.for("react.element"),hi=Symbol.for("react.fragment"),ci=Object.prototype.hasOwnProperty,mi=ui.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fi={key:!0,ref:!0,__self:!0,__source:!0};function Nr(n,e,t){var o,r={},a=null,s=null;t!==void 0&&(a=""+t),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(s=e.ref);for(o in e)ci.call(e,o)&&!fi.hasOwnProperty(o)&&(r[o]=e[o]);if(n&&n.defaultProps)for(o in e=n.defaultProps,e)r[o]===void 0&&(r[o]=e[o]);return{$$typeof:di,type:n,key:a,ref:s,props:r,_owner:mi.current}}pt.Fragment=hi;pt.jsx=Nr;pt.jsxs=Nr;Or.exports=pt;var f=Or.exports,_r,zo=yt;_r=zo.createRoot,zo.hydrateRoot;const gi=1,wi=1e6;let _t=0;function yi(){return _t=(_t+1)%Number.MAX_SAFE_INTEGER,_t.toString()}const Lt=new Map,Qo=n=>{if(Lt.has(n))return;const e=setTimeout(()=>{Lt.delete(n),_e({type:"REMOVE_TOAST",toastId:n})},wi);Lt.set(n,e)},pi=(n,e)=>{switch(e.type){case"ADD_TOAST":return{...n,toasts:[e.toast,...n.toasts].slice(0,gi)};case"UPDATE_TOAST":return{...n,toasts:n.toasts.map(t=>t.id===e.toast.id?{...t,...e.toast}:t)};case"DISMISS_TOAST":{const{toastId:t}=e;return t?Qo(t):n.toasts.forEach(o=>{Qo(o.id)}),{...n,toasts:n.toasts.map(o=>o.id===t||t===void 0?{...o,open:!1}:o)}}case"REMOVE_TOAST":return e.toastId===void 0?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(t=>t.id!==e.toastId)}}},it=[];let lt={toasts:[]};function _e(n){lt=pi(lt,n),it.forEach(e=>{e(lt)})}function bi({...n}){const e=yi(),t=r=>_e({type:"UPDATE_TOAST",toast:{...r,id:e}}),o=()=>_e({type:"DISMISS_TOAST",toastId:e});return _e({type:"ADD_TOAST",toast:{...n,id:e,open:!0,onOpenChange:r=>{r||o()}}}),{id:e,dismiss:o,update:t}}function Ei(){const[n,e]=c.useState(lt);return c.useEffect(()=>(it.push(e),()=>{const t=it.indexOf(e);t>-1&&it.splice(t,1)}),[n]),{...n,toast:bi,dismiss:t=>_e({type:"DISMISS_TOAST",toastId:t})}}function K(n,e,{checkForDefaultPrevented:t=!0}={}){return function(r){if(n==null||n(r),t===!1||!r.defaultPrevented)return e==null?void 0:e(r)}}function vi(n,e){typeof n=="function"?n(e):n!=null&&(n.current=e)}function Lr(...n){return e=>n.forEach(t=>vi(t,e))}function an(...n){return c.useCallback(Lr(...n),n)}function xi(n,e=[]){let t=[];function o(a,s){const i=c.createContext(s),l=t.length;t=[...t,s];function d(h){const{scope:u,children:y,...p}=h,g=(u==null?void 0:u[n][l])||i,w=c.useMemo(()=>p,Object.values(p));return f.jsx(g.Provider,{value:w,children:y})}function m(h,u){const y=(u==null?void 0:u[n][l])||i,p=c.useContext(y);if(p)return p;if(s!==void 0)return s;throw new Error(`\`${h}\` must be used within \`${a}\``)}return d.displayName=a+"Provider",[d,m]}const r=()=>{const a=t.map(s=>c.createContext(s));return function(i){const l=(i==null?void 0:i[n])||a;return c.useMemo(()=>({[`__scope${n}`]:{...i,[n]:l}}),[i,l])}};return r.scopeName=n,[o,Ai(r,...e)]}function Ai(...n){const e=n[0];if(n.length===1)return e;const t=()=>{const o=n.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(a){const s=o.reduce((i,{useScope:l,scopeName:d})=>{const h=l(a)[`__scope${d}`];return{...i,...h}},{});return c.useMemo(()=>({[`__scope${e.scopeName}`]:s}),[s])}};return t.scopeName=e.scopeName,t}var Le=c.forwardRef((n,e)=>{const{children:t,...o}=n,r=c.Children.toArray(t),a=r.find(Ci);if(a){const s=a.props.children,i=r.map(l=>l===a?c.Children.count(s)>1?c.Children.only(null):c.isValidElement(s)?s.props.children:null:l);return f.jsx(Vt,{...o,ref:e,children:c.isValidElement(s)?c.cloneElement(s,void 0,i):null})}return f.jsx(Vt,{...o,ref:e,children:t})});Le.displayName="Slot";var Vt=c.forwardRef((n,e)=>{const{children:t,...o}=n;if(c.isValidElement(t)){const r=Di(t);return c.cloneElement(t,{...Si(o,t.props),ref:e?Lr(e,r):r})}return c.Children.count(t)>1?c.Children.only(null):null});Vt.displayName="SlotClone";var Mr=({children:n})=>f.jsx(f.Fragment,{children:n});function Ci(n){return c.isValidElement(n)&&n.type===Mr}function Si(n,e){const t={...e};for(const o in e){const r=n[o],a=e[o];/^on[A-Z]/.test(o)?r&&a?t[o]=(...i)=>{a(...i),r(...i)}:r&&(t[o]=r):o==="style"?t[o]={...r,...a}:o==="className"&&(t[o]=[r,a].filter(Boolean).join(" "))}return{...n,...t}}function Di(n){var o,r;let e=(o=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:o.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=(r=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:r.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}function Hr(n){const e=n+"CollectionProvider",[t,o]=xi(e),[r,a]=t(e,{collectionRef:{current:null},itemMap:new Map}),s=y=>{const{scope:p,children:g}=y,w=S.useRef(null),b=S.useRef(new Map).current;return f.jsx(r,{scope:p,itemMap:b,collectionRef:w,children:g})};s.displayName=e;const i=n+"CollectionSlot",l=S.forwardRef((y,p)=>{const{scope:g,children:w}=y,b=a(i,g),E=an(p,b.collectionRef);return f.jsx(Le,{ref:E,children:w})});l.displayName=i;const d=n+"CollectionItemSlot",m="data-radix-collection-item",h=S.forwardRef((y,p)=>{const{scope:g,children:w,...b}=y,E=S.useRef(null),v=an(p,E),x=a(d,g);return S.useEffect(()=>(x.itemMap.set(E,{ref:E,...b}),()=>void x.itemMap.delete(E))),f.jsx(Le,{[m]:"",ref:v,children:w})});h.displayName=d;function u(y){const p=a(n+"CollectionConsumer",y);return S.useCallback(()=>{const w=p.collectionRef.current;if(!w)return[];const b=Array.from(w.querySelectorAll(`[${m}]`));return Array.from(p.itemMap.values()).sort((x,A)=>b.indexOf(x.ref.current)-b.indexOf(A.ref.current))},[p.collectionRef,p.itemMap])}return[{Provider:s,Slot:l,ItemSlot:h},u,o]}function mo(n,e=[]){let t=[];function o(a,s){const i=c.createContext(s),l=t.length;t=[...t,s];const d=h=>{var b;const{scope:u,children:y,...p}=h,g=((b=u==null?void 0:u[n])==null?void 0:b[l])||i,w=c.useMemo(()=>p,Object.values(p));return f.jsx(g.Provider,{value:w,children:y})};d.displayName=a+"Provider";function m(h,u){var g;const y=((g=u==null?void 0:u[n])==null?void 0:g[l])||i,p=c.useContext(y);if(p)return p;if(s!==void 0)return s;throw new Error(`\`${h}\` must be used within \`${a}\``)}return[d,m]}const r=()=>{const a=t.map(s=>c.createContext(s));return function(i){const l=(i==null?void 0:i[n])||a;return c.useMemo(()=>({[`__scope${n}`]:{...i,[n]:l}}),[i,l])}};return r.scopeName=n,[o,ki(r,...e)]}function ki(...n){const e=n[0];if(n.length===1)return e;const t=()=>{const o=n.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(a){const s=o.reduce((i,{useScope:l,scopeName:d})=>{const h=l(a)[`__scope${d}`];return{...i,...h}},{});return c.useMemo(()=>({[`__scope${e.scopeName}`]:s}),[s])}};return t.scopeName=e.scopeName,t}var Ii=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],en=Ii.reduce((n,e)=>{const t=c.forwardRef((o,r)=>{const{asChild:a,...s}=o,i=a?Le:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),f.jsx(i,{...s,ref:r})});return t.displayName=`Primitive.${e}`,{...n,[e]:t}},{});function Wr(n,e){n&&yt.flushSync(()=>n.dispatchEvent(e))}function kn(n){const e=c.useRef(n);return c.useEffect(()=>{e.current=n}),c.useMemo(()=>(...t)=>{var o;return(o=e.current)==null?void 0:o.call(e,...t)},[])}function Gi(n,e=globalThis==null?void 0:globalThis.document){const t=kn(n);c.useEffect(()=>{const o=r=>{r.key==="Escape"&&t(r)};return e.addEventListener("keydown",o,{capture:!0}),()=>e.removeEventListener("keydown",o,{capture:!0})},[t,e])}var Bi="DismissableLayer",$t="dismissableLayer.update",Ti="dismissableLayer.pointerDownOutside",Fi="dismissableLayer.focusOutside",Yo,zr=c.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),fo=c.forwardRef((n,e)=>{const{disableOutsidePointerEvents:t=!1,onEscapeKeyDown:o,onPointerDownOutside:r,onFocusOutside:a,onInteractOutside:s,onDismiss:i,...l}=n,d=c.useContext(zr),[m,h]=c.useState(null),u=(m==null?void 0:m.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,y]=c.useState({}),p=an(e,G=>h(G)),g=Array.from(d.layers),[w]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),b=g.indexOf(w),E=m?g.indexOf(m):-1,v=d.layersWithOutsidePointerEventsDisabled.size>0,x=E>=b,A=Pi(G=>{const B=G.target,P=[...d.branches].some(W=>W.contains(B));!x||P||(r==null||r(G),s==null||s(G),G.defaultPrevented||i==null||i())},u),k=ji(G=>{const B=G.target;[...d.branches].some(W=>W.contains(B))||(a==null||a(G),s==null||s(G),G.defaultPrevented||i==null||i())},u);return Gi(G=>{E===d.layers.size-1&&(o==null||o(G),!G.defaultPrevented&&i&&(G.preventDefault(),i()))},u),c.useEffect(()=>{if(m)return t&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(Yo=u.body.style.pointerEvents,u.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(m)),d.layers.add(m),Vo(),()=>{t&&d.layersWithOutsidePointerEventsDisabled.size===1&&(u.body.style.pointerEvents=Yo)}},[m,u,t,d]),c.useEffect(()=>()=>{m&&(d.layers.delete(m),d.layersWithOutsidePointerEventsDisabled.delete(m),Vo())},[m,d]),c.useEffect(()=>{const G=()=>y({});return document.addEventListener($t,G),()=>document.removeEventListener($t,G)},[]),f.jsx(en.div,{...l,ref:p,style:{pointerEvents:v?x?"auto":"none":void 0,...n.style},onFocusCapture:K(n.onFocusCapture,k.onFocusCapture),onBlurCapture:K(n.onBlurCapture,k.onBlurCapture),onPointerDownCapture:K(n.onPointerDownCapture,A.onPointerDownCapture)})});fo.displayName=Bi;var Ri="DismissableLayerBranch",Qr=c.forwardRef((n,e)=>{const t=c.useContext(zr),o=c.useRef(null),r=an(e,o);return c.useEffect(()=>{const a=o.current;if(a)return t.branches.add(a),()=>{t.branches.delete(a)}},[t.branches]),f.jsx(en.div,{...n,ref:r})});Qr.displayName=Ri;function Pi(n,e=globalThis==null?void 0:globalThis.document){const t=kn(n),o=c.useRef(!1),r=c.useRef(()=>{});return c.useEffect(()=>{const a=i=>{if(i.target&&!o.current){let l=function(){Yr(Ti,t,d,{discrete:!0})};const d={originalEvent:i};i.pointerType==="touch"?(e.removeEventListener("click",r.current),r.current=l,e.addEventListener("click",r.current,{once:!0})):l()}else e.removeEventListener("click",r.current);o.current=!1},s=window.setTimeout(()=>{e.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(s),e.removeEventListener("pointerdown",a),e.removeEventListener("click",r.current)}},[e,t]),{onPointerDownCapture:()=>o.current=!0}}function ji(n,e=globalThis==null?void 0:globalThis.document){const t=kn(n),o=c.useRef(!1);return c.useEffect(()=>{const r=a=>{a.target&&!o.current&&Yr(Fi,t,{originalEvent:a},{discrete:!1})};return e.addEventListener("focusin",r),()=>e.removeEventListener("focusin",r)},[e,t]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function Vo(){const n=new CustomEvent($t);document.dispatchEvent(n)}function Yr(n,e,t,{discrete:o}){const r=t.originalEvent.target,a=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:t});e&&r.addEventListener(n,e,{once:!0}),o?Wr(r,a):r.dispatchEvent(a)}var Oi=fo,Ni=Qr,ie=globalThis!=null&&globalThis.document?c.useLayoutEffect:()=>{},_i="Portal",Vr=c.forwardRef((n,e)=>{var i;const{container:t,...o}=n,[r,a]=c.useState(!1);ie(()=>a(!0),[]);const s=t||r&&((i=globalThis==null?void 0:globalThis.document)==null?void 0:i.body);return s?Pr.createPortal(f.jsx(en.div,{...o,ref:e}),s):null});Vr.displayName=_i;function Li(n,e){return c.useReducer((t,o)=>e[t][o]??t,n)}var go=n=>{const{present:e,children:t}=n,o=Mi(e),r=typeof t=="function"?t({present:o.isPresent}):c.Children.only(t),a=an(o.ref,Hi(r));return typeof t=="function"||o.isPresent?c.cloneElement(r,{ref:a}):null};go.displayName="Presence";function Mi(n){const[e,t]=c.useState(),o=c.useRef({}),r=c.useRef(n),a=c.useRef("none"),s=n?"mounted":"unmounted",[i,l]=Li(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return c.useEffect(()=>{const d=tt(o.current);a.current=i==="mounted"?d:"none"},[i]),ie(()=>{const d=o.current,m=r.current;if(m!==n){const u=a.current,y=tt(d);n?l("MOUNT"):y==="none"||(d==null?void 0:d.display)==="none"?l("UNMOUNT"):l(m&&u!==y?"ANIMATION_OUT":"UNMOUNT"),r.current=n}},[n,l]),ie(()=>{if(e){let d;const m=e.ownerDocument.defaultView??window,h=y=>{const g=tt(o.current).includes(y.animationName);if(y.target===e&&g&&(l("ANIMATION_END"),!r.current)){const w=e.style.animationFillMode;e.style.animationFillMode="forwards",d=m.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=w)})}},u=y=>{y.target===e&&(a.current=tt(o.current))};return e.addEventListener("animationstart",u),e.addEventListener("animationcancel",h),e.addEventListener("animationend",h),()=>{m.clearTimeout(d),e.removeEventListener("animationstart",u),e.removeEventListener("animationcancel",h),e.removeEventListener("animationend",h)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:c.useCallback(d=>{d&&(o.current=getComputedStyle(d)),t(d)},[])}}function tt(n){return(n==null?void 0:n.animationName)||"none"}function Hi(n){var o,r;let e=(o=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:o.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=(r=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:r.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}function $r({prop:n,defaultProp:e,onChange:t=()=>{}}){const[o,r]=Wi({defaultProp:e,onChange:t}),a=n!==void 0,s=a?n:o,i=kn(t),l=c.useCallback(d=>{if(a){const h=typeof d=="function"?d(n):d;h!==n&&i(h)}else r(d)},[a,n,r,i]);return[s,l]}function Wi({defaultProp:n,onChange:e}){const t=c.useState(n),[o]=t,r=c.useRef(o),a=kn(e);return c.useEffect(()=>{r.current!==o&&(a(o),r.current=o)},[o,r,a]),t}var zi="VisuallyHidden",bt=c.forwardRef((n,e)=>f.jsx(en.span,{...n,ref:e,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...n.style}}));bt.displayName=zi;var Qi=bt,wo="ToastProvider",[yo,Yi,Vi]=Hr("Toast"),[Ur,fm]=mo("Toast",[Vi]),[$i,Et]=Ur(wo),Xr=n=>{const{__scopeToast:e,label:t="Notification",duration:o=5e3,swipeDirection:r="right",swipeThreshold:a=50,children:s}=n,[i,l]=c.useState(null),[d,m]=c.useState(0),h=c.useRef(!1),u=c.useRef(!1);return t.trim()||console.error(`Invalid prop \`label\` supplied to \`${wo}\`. Expected non-empty \`string\`.`),f.jsx(yo.Provider,{scope:e,children:f.jsx($i,{scope:e,label:t,duration:o,swipeDirection:r,swipeThreshold:a,toastCount:d,viewport:i,onViewportChange:l,onToastAdd:c.useCallback(()=>m(y=>y+1),[]),onToastRemove:c.useCallback(()=>m(y=>y-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:u,children:s})})};Xr.displayName=wo;var Kr="ToastViewport",Ui=["F8"],Ut="toast.viewportPause",Xt="toast.viewportResume",qr=c.forwardRef((n,e)=>{const{__scopeToast:t,hotkey:o=Ui,label:r="Notifications ({hotkey})",...a}=n,s=Et(Kr,t),i=Yi(t),l=c.useRef(null),d=c.useRef(null),m=c.useRef(null),h=c.useRef(null),u=an(e,h,s.onViewportChange),y=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),p=s.toastCount>0;c.useEffect(()=>{const w=b=>{var v;o.length!==0&&o.every(x=>b[x]||b.code===x)&&((v=h.current)==null||v.focus())};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[o]),c.useEffect(()=>{const w=l.current,b=h.current;if(p&&w&&b){const E=()=>{if(!s.isClosePausedRef.current){const k=new CustomEvent(Ut);b.dispatchEvent(k),s.isClosePausedRef.current=!0}},v=()=>{if(s.isClosePausedRef.current){const k=new CustomEvent(Xt);b.dispatchEvent(k),s.isClosePausedRef.current=!1}},x=k=>{!w.contains(k.relatedTarget)&&v()},A=()=>{w.contains(document.activeElement)||v()};return w.addEventListener("focusin",E),w.addEventListener("focusout",x),w.addEventListener("pointermove",E),w.addEventListener("pointerleave",A),window.addEventListener("blur",E),window.addEventListener("focus",v),()=>{w.removeEventListener("focusin",E),w.removeEventListener("focusout",x),w.removeEventListener("pointermove",E),w.removeEventListener("pointerleave",A),window.removeEventListener("blur",E),window.removeEventListener("focus",v)}}},[p,s.isClosePausedRef]);const g=c.useCallback(({tabbingDirection:w})=>{const E=i().map(v=>{const x=v.ref.current,A=[x,...il(x)];return w==="forwards"?A:A.reverse()});return(w==="forwards"?E.reverse():E).flat()},[i]);return c.useEffect(()=>{const w=h.current;if(w){const b=E=>{var A,k,G;const v=E.altKey||E.ctrlKey||E.metaKey;if(E.key==="Tab"&&!v){const B=document.activeElement,P=E.shiftKey;if(E.target===w&&P){(A=d.current)==null||A.focus();return}const T=g({tabbingDirection:P?"backwards":"forwards"}),L=T.findIndex(I=>I===B);Mt(T.slice(L+1))?E.preventDefault():P?(k=d.current)==null||k.focus():(G=m.current)==null||G.focus()}};return w.addEventListener("keydown",b),()=>w.removeEventListener("keydown",b)}},[i,g]),f.jsxs(Ni,{ref:l,role:"region","aria-label":r.replace("{hotkey}",y),tabIndex:-1,style:{pointerEvents:p?void 0:"none"},children:[p&&f.jsx(Kt,{ref:d,onFocusFromOutsideViewport:()=>{const w=g({tabbingDirection:"forwards"});Mt(w)}}),f.jsx(yo.Slot,{scope:t,children:f.jsx(en.ol,{tabIndex:-1,...a,ref:u})}),p&&f.jsx(Kt,{ref:m,onFocusFromOutsideViewport:()=>{const w=g({tabbingDirection:"backwards"});Mt(w)}})]})});qr.displayName=Kr;var Jr="ToastFocusProxy",Kt=c.forwardRef((n,e)=>{const{__scopeToast:t,onFocusFromOutsideViewport:o,...r}=n,a=Et(Jr,t);return f.jsx(bt,{"aria-hidden":!0,tabIndex:0,...r,ref:e,style:{position:"fixed"},onFocus:s=>{var d;const i=s.relatedTarget;!((d=a.viewport)!=null&&d.contains(i))&&o()}})});Kt.displayName=Jr;var vt="Toast",Xi="toast.swipeStart",Ki="toast.swipeMove",qi="toast.swipeCancel",Ji="toast.swipeEnd",Zr=c.forwardRef((n,e)=>{const{forceMount:t,open:o,defaultOpen:r,onOpenChange:a,...s}=n,[i=!0,l]=$r({prop:o,defaultProp:r,onChange:a});return f.jsx(go,{present:t||i,children:f.jsx(el,{open:i,...s,ref:e,onClose:()=>l(!1),onPause:kn(n.onPause),onResume:kn(n.onResume),onSwipeStart:K(n.onSwipeStart,d=>{d.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:K(n.onSwipeMove,d=>{const{x:m,y:h}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","move"),d.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${m}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${h}px`)}),onSwipeCancel:K(n.onSwipeCancel,d=>{d.currentTarget.setAttribute("data-swipe","cancel"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:K(n.onSwipeEnd,d=>{const{x:m,y:h}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","end"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${m}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${h}px`),l(!1)})})})});Zr.displayName=vt;var[Zi,nl]=Ur(vt,{onClose(){}}),el=c.forwardRef((n,e)=>{const{__scopeToast:t,type:o="foreground",duration:r,open:a,onClose:s,onEscapeKeyDown:i,onPause:l,onResume:d,onSwipeStart:m,onSwipeMove:h,onSwipeCancel:u,onSwipeEnd:y,...p}=n,g=Et(vt,t),[w,b]=c.useState(null),E=an(e,I=>b(I)),v=c.useRef(null),x=c.useRef(null),A=r||g.duration,k=c.useRef(0),G=c.useRef(A),B=c.useRef(0),{onToastAdd:P,onToastRemove:W}=g,F=kn(()=>{var z;(w==null?void 0:w.contains(document.activeElement))&&((z=g.viewport)==null||z.focus()),s()}),T=c.useCallback(I=>{!I||I===1/0||(window.clearTimeout(B.current),k.current=new Date().getTime(),B.current=window.setTimeout(F,I))},[F]);c.useEffect(()=>{const I=g.viewport;if(I){const z=()=>{T(G.current),d==null||d()},R=()=>{const M=new Date().getTime()-k.current;G.current=G.current-M,window.clearTimeout(B.current),l==null||l()};return I.addEventListener(Ut,R),I.addEventListener(Xt,z),()=>{I.removeEventListener(Ut,R),I.removeEventListener(Xt,z)}}},[g.viewport,A,l,d,T]),c.useEffect(()=>{a&&!g.isClosePausedRef.current&&T(A)},[a,A,g.isClosePausedRef,T]),c.useEffect(()=>(P(),()=>W()),[P,W]);const L=c.useMemo(()=>w?sa(w):null,[w]);return g.viewport?f.jsxs(f.Fragment,{children:[L&&f.jsx(tl,{__scopeToast:t,role:"status","aria-live":o==="foreground"?"assertive":"polite","aria-atomic":!0,children:L}),f.jsx(Zi,{scope:t,onClose:F,children:yt.createPortal(f.jsx(yo.ItemSlot,{scope:t,children:f.jsx(Oi,{asChild:!0,onEscapeKeyDown:K(i,()=>{g.isFocusedToastEscapeKeyDownRef.current||F(),g.isFocusedToastEscapeKeyDownRef.current=!1}),children:f.jsx(en.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":a?"open":"closed","data-swipe-direction":g.swipeDirection,...p,ref:E,style:{userSelect:"none",touchAction:"none",...n.style},onKeyDown:K(n.onKeyDown,I=>{I.key==="Escape"&&(i==null||i(I.nativeEvent),I.nativeEvent.defaultPrevented||(g.isFocusedToastEscapeKeyDownRef.current=!0,F()))}),onPointerDown:K(n.onPointerDown,I=>{I.button===0&&(v.current={x:I.clientX,y:I.clientY})}),onPointerMove:K(n.onPointerMove,I=>{if(!v.current)return;const z=I.clientX-v.current.x,R=I.clientY-v.current.y,M=!!x.current,D=["left","right"].includes(g.swipeDirection),O=["left","up"].includes(g.swipeDirection)?Math.min:Math.max,nn=D?O(0,z):0,j=D?0:O(0,R),Q=I.pointerType==="touch"?10:2,Y={x:nn,y:j},ln={originalEvent:I,delta:Y};M?(x.current=Y,ot(Ki,h,ln,{discrete:!1})):$o(Y,g.swipeDirection,Q)?(x.current=Y,ot(Xi,m,ln,{discrete:!1}),I.target.setPointerCapture(I.pointerId)):(Math.abs(z)>Q||Math.abs(R)>Q)&&(v.current=null)}),onPointerUp:K(n.onPointerUp,I=>{const z=x.current,R=I.target;if(R.hasPointerCapture(I.pointerId)&&R.releasePointerCapture(I.pointerId),x.current=null,v.current=null,z){const M=I.currentTarget,D={originalEvent:I,delta:z};$o(z,g.swipeDirection,g.swipeThreshold)?ot(Ji,y,D,{discrete:!0}):ot(qi,u,D,{discrete:!0}),M.addEventListener("click",O=>O.preventDefault(),{once:!0})}})})})}),g.viewport)})]}):null}),tl=n=>{const{__scopeToast:e,children:t,...o}=n,r=Et(vt,e),[a,s]=c.useState(!1),[i,l]=c.useState(!1);return al(()=>s(!0)),c.useEffect(()=>{const d=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(d)},[]),i?null:f.jsx(Vr,{asChild:!0,children:f.jsx(bt,{...o,children:a&&f.jsxs(f.Fragment,{children:[r.label," ",t]})})})},ol="ToastTitle",na=c.forwardRef((n,e)=>{const{__scopeToast:t,...o}=n;return f.jsx(en.div,{...o,ref:e})});na.displayName=ol;var rl="ToastDescription",ea=c.forwardRef((n,e)=>{const{__scopeToast:t,...o}=n;return f.jsx(en.div,{...o,ref:e})});ea.displayName=rl;var ta="ToastAction",oa=c.forwardRef((n,e)=>{const{altText:t,...o}=n;return t.trim()?f.jsx(aa,{altText:t,asChild:!0,children:f.jsx(po,{...o,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${ta}\`. Expected non-empty \`string\`.`),null)});oa.displayName=ta;var ra="ToastClose",po=c.forwardRef((n,e)=>{const{__scopeToast:t,...o}=n,r=nl(ra,t);return f.jsx(aa,{asChild:!0,children:f.jsx(en.button,{type:"button",...o,ref:e,onClick:K(n.onClick,r.onClose)})})});po.displayName=ra;var aa=c.forwardRef((n,e)=>{const{__scopeToast:t,altText:o,...r}=n;return f.jsx(en.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":o||void 0,...r,ref:e})});function sa(n){const e=[];return Array.from(n.childNodes).forEach(o=>{if(o.nodeType===o.TEXT_NODE&&o.textContent&&e.push(o.textContent),sl(o)){const r=o.ariaHidden||o.hidden||o.style.display==="none",a=o.dataset.radixToastAnnounceExclude==="";if(!r)if(a){const s=o.dataset.radixToastAnnounceAlt;s&&e.push(s)}else e.push(...sa(o))}}),e}function ot(n,e,t,{discrete:o}){const r=t.originalEvent.currentTarget,a=new CustomEvent(n,{bubbles:!0,cancelable:!0,detail:t});e&&r.addEventListener(n,e,{once:!0}),o?Wr(r,a):r.dispatchEvent(a)}var $o=(n,e,t=0)=>{const o=Math.abs(n.x),r=Math.abs(n.y),a=o>r;return e==="left"||e==="right"?a&&o>t:!a&&r>t};function al(n=()=>{}){const e=kn(n);ie(()=>{let t=0,o=0;return t=window.requestAnimationFrame(()=>o=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(t),window.cancelAnimationFrame(o)}},[e])}function sl(n){return n.nodeType===n.ELEMENT_NODE}function il(n){const e=[],t=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)e.push(t.currentNode);return e}function Mt(n){const e=document.activeElement;return n.some(t=>t===e?!0:(t.focus(),document.activeElement!==e))}var ll=Xr,ia=qr,la=Zr,ua=na,da=ea,ha=oa,ca=po;function ma(n){var e,t,o="";if(typeof n=="string"||typeof n=="number")o+=n;else if(typeof n=="object")if(Array.isArray(n)){var r=n.length;for(e=0;e<r;e++)n[e]&&(t=ma(n[e]))&&(o&&(o+=" "),o+=t)}else for(t in n)n[t]&&(o&&(o+=" "),o+=t);return o}function fa(){for(var n,e,t=0,o="",r=arguments.length;t<r;t++)(n=arguments[t])&&(e=ma(n))&&(o&&(o+=" "),o+=e);return o}const Uo=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,Xo=fa,ga=(n,e)=>t=>{var o;if((e==null?void 0:e.variants)==null)return Xo(n,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:r,defaultVariants:a}=e,s=Object.keys(r).map(d=>{const m=t==null?void 0:t[d],h=a==null?void 0:a[d];if(m===null)return null;const u=Uo(m)||Uo(h);return r[d][u]}),i=t&&Object.entries(t).reduce((d,m)=>{let[h,u]=m;return u===void 0||(d[h]=u),d},{}),l=e==null||(o=e.compoundVariants)===null||o===void 0?void 0:o.reduce((d,m)=>{let{class:h,className:u,...y}=m;return Object.entries(y).every(p=>{let[g,w]=p;return Array.isArray(w)?w.includes({...a,...i}[g]):{...a,...i}[g]===w})?[...d,h,u]:d},[]);return Xo(n,s,l,t==null?void 0:t.class,t==null?void 0:t.className)},bo="-",ul=n=>{const e=hl(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=n;return{getClassGroupId:s=>{const i=s.split(bo);return i[0]===""&&i.length!==1&&i.shift(),wa(i,e)||dl(s)},getConflictingClassGroupIds:(s,i)=>{const l=t[s]||[];return i&&o[s]?[...l,...o[s]]:l}}},wa=(n,e)=>{var s;if(n.length===0)return e.classGroupId;const t=n[0],o=e.nextPart.get(t),r=o?wa(n.slice(1),o):void 0;if(r)return r;if(e.validators.length===0)return;const a=n.join(bo);return(s=e.validators.find(({validator:i})=>i(a)))==null?void 0:s.classGroupId},Ko=/^\[(.+)\]$/,dl=n=>{if(Ko.test(n)){const e=Ko.exec(n)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},hl=n=>{const{theme:e,prefix:t}=n,o={nextPart:new Map,validators:[]};return ml(Object.entries(n.classGroups),t).forEach(([a,s])=>{qt(s,o,a,e)}),o},qt=(n,e,t,o)=>{n.forEach(r=>{if(typeof r=="string"){const a=r===""?e:qo(e,r);a.classGroupId=t;return}if(typeof r=="function"){if(cl(r)){qt(r(o),e,t,o);return}e.validators.push({validator:r,classGroupId:t});return}Object.entries(r).forEach(([a,s])=>{qt(s,qo(e,a),t,o)})})},qo=(n,e)=>{let t=n;return e.split(bo).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t},cl=n=>n.isThemeGetter,ml=(n,e)=>e?n.map(([t,o])=>{const r=o.map(a=>typeof a=="string"?e+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(([s,i])=>[e+s,i])):a);return[t,r]}):n,fl=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,o=new Map;const r=(a,s)=>{t.set(a,s),e++,e>n&&(e=0,o=t,t=new Map)};return{get(a){let s=t.get(a);if(s!==void 0)return s;if((s=o.get(a))!==void 0)return r(a,s),s},set(a,s){t.has(a)?t.set(a,s):r(a,s)}}},ya="!",gl=n=>{const{separator:e,experimentalParseClassName:t}=n,o=e.length===1,r=e[0],a=e.length,s=i=>{const l=[];let d=0,m=0,h;for(let w=0;w<i.length;w++){let b=i[w];if(d===0){if(b===r&&(o||i.slice(w,w+a)===e)){l.push(i.slice(m,w)),m=w+a;continue}if(b==="/"){h=w;continue}}b==="["?d++:b==="]"&&d--}const u=l.length===0?i:i.substring(m),y=u.startsWith(ya),p=y?u.substring(1):u,g=h&&h>m?h-m:void 0;return{modifiers:l,hasImportantModifier:y,baseClassName:p,maybePostfixModifierPosition:g}};return t?i=>t({className:i,parseClassName:s}):s},wl=n=>{if(n.length<=1)return n;const e=[];let t=[];return n.forEach(o=>{o[0]==="["?(e.push(...t.sort(),o),t=[]):t.push(o)}),e.push(...t.sort()),e},yl=n=>({cache:fl(n.cacheSize),parseClassName:gl(n),...ul(n)}),pl=/\s+/,bl=(n,e)=>{const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:r}=e,a=[],s=n.trim().split(pl);let i="";for(let l=s.length-1;l>=0;l-=1){const d=s[l],{modifiers:m,hasImportantModifier:h,baseClassName:u,maybePostfixModifierPosition:y}=t(d);let p=!!y,g=o(p?u.substring(0,y):u);if(!g){if(!p){i=d+(i.length>0?" "+i:i);continue}if(g=o(u),!g){i=d+(i.length>0?" "+i:i);continue}p=!1}const w=wl(m).join(":"),b=h?w+ya:w,E=b+g;if(a.includes(E))continue;a.push(E);const v=r(g,p);for(let x=0;x<v.length;++x){const A=v[x];a.push(b+A)}i=d+(i.length>0?" "+i:i)}return i};function El(){let n=0,e,t,o="";for(;n<arguments.length;)(e=arguments[n++])&&(t=pa(e))&&(o&&(o+=" "),o+=t);return o}const pa=n=>{if(typeof n=="string")return n;let e,t="";for(let o=0;o<n.length;o++)n[o]&&(e=pa(n[o]))&&(t&&(t+=" "),t+=e);return t};function vl(n,...e){let t,o,r,a=s;function s(l){const d=e.reduce((m,h)=>h(m),n());return t=yl(d),o=t.cache.get,r=t.cache.set,a=i,i(l)}function i(l){const d=o(l);if(d)return d;const m=bl(l,t);return r(l,m),m}return function(){return a(El.apply(null,arguments))}}const X=n=>{const e=t=>t[n]||[];return e.isThemeGetter=!0,e},ba=/^\[(?:([a-z-]+):)?(.+)\]$/i,xl=/^\d+\/\d+$/,Al=new Set(["px","full","screen"]),Cl=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Sl=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Dl=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,kl=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Il=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Tn=n=>ye(n)||Al.has(n)||xl.test(n),Mn=n=>Be(n,"length",Ol),ye=n=>!!n&&!Number.isNaN(Number(n)),Ht=n=>Be(n,"number",ye),Oe=n=>!!n&&Number.isInteger(Number(n)),Gl=n=>n.endsWith("%")&&ye(n.slice(0,-1)),_=n=>ba.test(n),Hn=n=>Cl.test(n),Bl=new Set(["length","size","percentage"]),Tl=n=>Be(n,Bl,Ea),Fl=n=>Be(n,"position",Ea),Rl=new Set(["image","url"]),Pl=n=>Be(n,Rl,_l),jl=n=>Be(n,"",Nl),Ne=()=>!0,Be=(n,e,t)=>{const o=ba.exec(n);return o?o[1]?typeof e=="string"?o[1]===e:e.has(o[1]):t(o[2]):!1},Ol=n=>Sl.test(n)&&!Dl.test(n),Ea=()=>!1,Nl=n=>kl.test(n),_l=n=>Il.test(n),Ll=()=>{const n=X("colors"),e=X("spacing"),t=X("blur"),o=X("brightness"),r=X("borderColor"),a=X("borderRadius"),s=X("borderSpacing"),i=X("borderWidth"),l=X("contrast"),d=X("grayscale"),m=X("hueRotate"),h=X("invert"),u=X("gap"),y=X("gradientColorStops"),p=X("gradientColorStopPositions"),g=X("inset"),w=X("margin"),b=X("opacity"),E=X("padding"),v=X("saturate"),x=X("scale"),A=X("sepia"),k=X("skew"),G=X("space"),B=X("translate"),P=()=>["auto","contain","none"],W=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto",_,e],T=()=>[_,e],L=()=>["",Tn,Mn],I=()=>["auto",ye,_],z=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],R=()=>["solid","dashed","dotted","double","none"],M=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],D=()=>["start","end","center","between","around","evenly","stretch"],O=()=>["","0",_],nn=()=>["auto","avoid","all","avoid-page","page","left","right","column"],j=()=>[ye,_];return{cacheSize:500,separator:":",theme:{colors:[Ne],spacing:[Tn,Mn],blur:["none","",Hn,_],brightness:j(),borderColor:[n],borderRadius:["none","","full",Hn,_],borderSpacing:T(),borderWidth:L(),contrast:j(),grayscale:O(),hueRotate:j(),invert:O(),gap:T(),gradientColorStops:[n],gradientColorStopPositions:[Gl,Mn],inset:F(),margin:F(),opacity:j(),padding:T(),saturate:j(),scale:j(),sepia:O(),skew:j(),space:T(),translate:T()},classGroups:{aspect:[{aspect:["auto","square","video",_]}],container:["container"],columns:[{columns:[Hn]}],"break-after":[{"break-after":nn()}],"break-before":[{"break-before":nn()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...z(),_]}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Oe,_]}],basis:[{basis:F()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",_]}],grow:[{grow:O()}],shrink:[{shrink:O()}],order:[{order:["first","last","none",Oe,_]}],"grid-cols":[{"grid-cols":[Ne]}],"col-start-end":[{col:["auto",{span:["full",Oe,_]},_]}],"col-start":[{"col-start":I()}],"col-end":[{"col-end":I()}],"grid-rows":[{"grid-rows":[Ne]}],"row-start-end":[{row:["auto",{span:[Oe,_]},_]}],"row-start":[{"row-start":I()}],"row-end":[{"row-end":I()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",_]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",_]}],gap:[{gap:[u]}],"gap-x":[{"gap-x":[u]}],"gap-y":[{"gap-y":[u]}],"justify-content":[{justify:["normal",...D()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...D(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...D(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[E]}],px:[{px:[E]}],py:[{py:[E]}],ps:[{ps:[E]}],pe:[{pe:[E]}],pt:[{pt:[E]}],pr:[{pr:[E]}],pb:[{pb:[E]}],pl:[{pl:[E]}],m:[{m:[w]}],mx:[{mx:[w]}],my:[{my:[w]}],ms:[{ms:[w]}],me:[{me:[w]}],mt:[{mt:[w]}],mr:[{mr:[w]}],mb:[{mb:[w]}],ml:[{ml:[w]}],"space-x":[{"space-x":[G]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[G]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",_,e]}],"min-w":[{"min-w":[_,e,"min","max","fit"]}],"max-w":[{"max-w":[_,e,"none","full","min","max","fit","prose",{screen:[Hn]},Hn]}],h:[{h:[_,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[_,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[_,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[_,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Hn,Mn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ht]}],"font-family":[{font:[Ne]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",_]}],"line-clamp":[{"line-clamp":["none",ye,Ht]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Tn,_]}],"list-image":[{"list-image":["none",_]}],"list-style-type":[{list:["none","disc","decimal",_]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[b]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[b]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...R(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Tn,Mn]}],"underline-offset":[{"underline-offset":["auto",Tn,_]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:T()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",_]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",_]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[b]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...z(),Fl]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Tl]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Pl]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[p]}],"gradient-via-pos":[{via:[p]}],"gradient-to-pos":[{to:[p]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[b]}],"border-style":[{border:[...R(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[b]}],"divide-style":[{divide:R()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...R()]}],"outline-offset":[{"outline-offset":[Tn,_]}],"outline-w":[{outline:[Tn,Mn]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:L()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[b]}],"ring-offset-w":[{"ring-offset":[Tn,Mn]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",Hn,jl]}],"shadow-color":[{shadow:[Ne]}],opacity:[{opacity:[b]}],"mix-blend":[{"mix-blend":[...M(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":M()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Hn,_]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[h]}],saturate:[{saturate:[v]}],sepia:[{sepia:[A]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[b]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[A]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",_]}],duration:[{duration:j()}],ease:[{ease:["linear","in","out","in-out",_]}],delay:[{delay:j()}],animate:[{animate:["none","spin","ping","pulse","bounce",_]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[Oe,_]}],"translate-x":[{"translate-x":[B]}],"translate-y":[{"translate-y":[B]}],"skew-x":[{"skew-x":[k]}],"skew-y":[{"skew-y":[k]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",_]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",_]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":T()}],"scroll-mx":[{"scroll-mx":T()}],"scroll-my":[{"scroll-my":T()}],"scroll-ms":[{"scroll-ms":T()}],"scroll-me":[{"scroll-me":T()}],"scroll-mt":[{"scroll-mt":T()}],"scroll-mr":[{"scroll-mr":T()}],"scroll-mb":[{"scroll-mb":T()}],"scroll-ml":[{"scroll-ml":T()}],"scroll-p":[{"scroll-p":T()}],"scroll-px":[{"scroll-px":T()}],"scroll-py":[{"scroll-py":T()}],"scroll-ps":[{"scroll-ps":T()}],"scroll-pe":[{"scroll-pe":T()}],"scroll-pt":[{"scroll-pt":T()}],"scroll-pr":[{"scroll-pr":T()}],"scroll-pb":[{"scroll-pb":T()}],"scroll-pl":[{"scroll-pl":T()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",_]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[Tn,Mn,Ht]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Ml=vl(Ll);function sn(...n){return Ml(fa(n))}function Hl(n,e){const t=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"],o=["A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab"],r=p=>p.includes("b")&&!p.includes("maj")&&!p.includes("min");let a=n.charAt(0),s="",i="",l=1;l<n.length&&(n.charAt(l)==="#"||n.charAt(l)==="b")&&(s=n.charAt(l),l++),i=n.substring(l);const d=a+s;let m=r(n)?o:t,h=m.indexOf(d);if(h===-1&&(m=m===t?o:t,h=m.indexOf(d),h===-1))return n;let u=(h+e)%12;return u<0&&(u+=12),m[u]+i}function Wl(n,e){if(!n||e===0)return n;const t=/\b([A-G][#b]?)(maj|min|m|aug|dim|sus[24]?|add\d+|7|9|11|13)?\b/g;return n.replace(t,o=>Hl(o,e))}function va(n,e,t){return e?(e=e.toLowerCase(),n.filter(o=>t.some(r=>{const a=r.split(".").reduce((s,i)=>s==null?void 0:s[i],o);return a==null?void 0:a.toString().toLowerCase().includes(e)}))):n}const zl=ll,xa=c.forwardRef(({className:n,...e},t)=>f.jsx(ia,{ref:t,className:sn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",n),...e}));xa.displayName=ia.displayName;const Ql=ga("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Aa=c.forwardRef(({className:n,variant:e,...t},o)=>f.jsx(la,{ref:o,className:sn(Ql({variant:e}),n),...t}));Aa.displayName=la.displayName;const Yl=c.forwardRef(({className:n,...e},t)=>f.jsx(ha,{ref:t,className:sn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",n),...e}));Yl.displayName=ha.displayName;const Ca=c.forwardRef(({className:n,...e},t)=>f.jsx(ca,{ref:t,className:sn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",n),"toast-close":"",...e,children:f.jsx(Us,{className:"h-4 w-4"})}));Ca.displayName=ca.displayName;const Sa=c.forwardRef(({className:n,...e},t)=>f.jsx(ua,{ref:t,className:sn("text-sm font-semibold",n),...e}));Sa.displayName=ua.displayName;const Da=c.forwardRef(({className:n,...e},t)=>f.jsx(da,{ref:t,className:sn("text-sm opacity-90",n),...e}));Da.displayName=da.displayName;function Vl(){const{toasts:n}=Ei();return f.jsxs(zl,{children:[n.map(function({id:e,title:t,description:o,action:r,...a}){return f.jsxs(Aa,{...a,children:[f.jsxs("div",{className:"grid gap-1",children:[t&&f.jsx(Sa,{children:t}),o&&f.jsx(Da,{children:o})]}),r,f.jsx(Ca,{})]},e)}),f.jsx(xa,{})]})}var Jo=["light","dark"],$l="(prefers-color-scheme: dark)",Ul=c.createContext(void 0),Xl={setTheme:n=>{},themes:[]},Kl=()=>{var n;return(n=c.useContext(Ul))!=null?n:Xl};c.memo(({forcedTheme:n,storageKey:e,attribute:t,enableSystem:o,enableColorScheme:r,defaultTheme:a,value:s,attrs:i,nonce:l})=>{let d=a==="system",m=t==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${i.map(p=>`'${p}'`).join(",")})`};`:`var d=document.documentElement,n='${t}',s='setAttribute';`,h=r?Jo.includes(a)&&a?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",u=(p,g=!1,w=!0)=>{let b=s?s[p]:p,E=g?p+"|| ''":`'${b}'`,v="";return r&&w&&!g&&Jo.includes(p)&&(v+=`d.style.colorScheme = '${p}';`),t==="class"?g||b?v+=`c.add(${E})`:v+="null":b&&(v+=`d[s](n,${E})`),v},y=n?`!function(){${m}${u(n)}}()`:o?`!function(){try{${m}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${d})){var t='${$l}',m=window.matchMedia(t);if(m.media!==t||m.matches){${u("dark")}}else{${u("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${u(s?"x[e]":"e",!0)}}${d?"":"else{"+u(a,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${e}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${u(s?"x[e]":"e",!0)}}else{${u(a,!1,!1)};}${h}}catch(t){}}();`;return c.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:y}})});var ql=n=>{switch(n){case"success":return nu;case"info":return tu;case"warning":return eu;case"error":return ou;default:return null}},Jl=Array(12).fill(0),Zl=({visible:n})=>S.createElement("div",{className:"sonner-loading-wrapper","data-visible":n},S.createElement("div",{className:"sonner-spinner"},Jl.map((e,t)=>S.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${t}`})))),nu=S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},S.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),eu=S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},S.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),tu=S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},S.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),ou=S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},S.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),ru=()=>{let[n,e]=S.useState(document.hidden);return S.useEffect(()=>{let t=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",t),()=>window.removeEventListener("visibilitychange",t)},[]),n},Jt=1,au=class{constructor(){this.subscribe=n=>(this.subscribers.push(n),()=>{let e=this.subscribers.indexOf(n);this.subscribers.splice(e,1)}),this.publish=n=>{this.subscribers.forEach(e=>e(n))},this.addToast=n=>{this.publish(n),this.toasts=[...this.toasts,n]},this.create=n=>{var e;let{message:t,...o}=n,r=typeof(n==null?void 0:n.id)=="number"||((e=n.id)==null?void 0:e.length)>0?n.id:Jt++,a=this.toasts.find(i=>i.id===r),s=n.dismissible===void 0?!0:n.dismissible;return a?this.toasts=this.toasts.map(i=>i.id===r?(this.publish({...i,...n,id:r,title:t}),{...i,...n,id:r,dismissible:s,title:t}):i):this.addToast({title:t,...o,dismissible:s,id:r}),r},this.dismiss=n=>(n||this.toasts.forEach(e=>{this.subscribers.forEach(t=>t({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:n,dismiss:!0})),n),this.message=(n,e)=>this.create({...e,message:n}),this.error=(n,e)=>this.create({...e,message:n,type:"error"}),this.success=(n,e)=>this.create({...e,type:"success",message:n}),this.info=(n,e)=>this.create({...e,type:"info",message:n}),this.warning=(n,e)=>this.create({...e,type:"warning",message:n}),this.loading=(n,e)=>this.create({...e,type:"loading",message:n}),this.promise=(n,e)=>{if(!e)return;let t;e.loading!==void 0&&(t=this.create({...e,promise:n,type:"loading",message:e.loading,description:typeof e.description!="function"?e.description:void 0}));let o=n instanceof Promise?n:n(),r=t!==void 0;return o.then(async a=>{if(iu(a)&&!a.ok){r=!1;let s=typeof e.error=="function"?await e.error(`HTTP error! status: ${a.status}`):e.error,i=typeof e.description=="function"?await e.description(`HTTP error! status: ${a.status}`):e.description;this.create({id:t,type:"error",message:s,description:i})}else if(e.success!==void 0){r=!1;let s=typeof e.success=="function"?await e.success(a):e.success,i=typeof e.description=="function"?await e.description(a):e.description;this.create({id:t,type:"success",message:s,description:i})}}).catch(async a=>{if(e.error!==void 0){r=!1;let s=typeof e.error=="function"?await e.error(a):e.error,i=typeof e.description=="function"?await e.description(a):e.description;this.create({id:t,type:"error",message:s,description:i})}}).finally(()=>{var a;r&&(this.dismiss(t),t=void 0),(a=e.finally)==null||a.call(e)}),t},this.custom=(n,e)=>{let t=(e==null?void 0:e.id)||Jt++;return this.create({jsx:n(t),id:t,...e}),t},this.subscribers=[],this.toasts=[]}},cn=new au,su=(n,e)=>{let t=(e==null?void 0:e.id)||Jt++;return cn.addToast({title:n,...e,id:t}),t},iu=n=>n&&typeof n=="object"&&"ok"in n&&typeof n.ok=="boolean"&&"status"in n&&typeof n.status=="number",lu=su,uu=()=>cn.toasts,wn=Object.assign(lu,{success:cn.success,info:cn.info,warning:cn.warning,error:cn.error,custom:cn.custom,message:cn.message,promise:cn.promise,dismiss:cn.dismiss,loading:cn.loading},{getHistory:uu});function du(n,{insertAt:e}={}){if(typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",e==="top"&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}du(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function rt(n){return n.label!==void 0}var hu=3,cu="32px",mu=4e3,fu=356,gu=14,wu=20,yu=200;function pu(...n){return n.filter(Boolean).join(" ")}var bu=n=>{var e,t,o,r,a,s,i,l,d,m;let{invert:h,toast:u,unstyled:y,interacting:p,setHeights:g,visibleToasts:w,heights:b,index:E,toasts:v,expanded:x,removeToast:A,defaultRichColors:k,closeButton:G,style:B,cancelButtonStyle:P,actionButtonStyle:W,className:F="",descriptionClassName:T="",duration:L,position:I,gap:z,loadingIcon:R,expandByDefault:M,classNames:D,icons:O,closeButtonAriaLabel:nn="Close toast",pauseWhenPageIsHidden:j,cn:Q}=n,[Y,ln]=S.useState(!1),[Bn,J]=S.useState(!1),[he,jn]=S.useState(!1),[On,Nn]=S.useState(!1),[qe,ce]=S.useState(0),[te,je]=S.useState(0),Je=S.useRef(null),_n=S.useRef(null),Rt=E===0,Pt=E+1<=w,tn=u.type,me=u.dismissible!==!1,Ms=u.className||"",Hs=u.descriptionClassName||"",Ze=S.useMemo(()=>b.findIndex(N=>N.toastId===u.id)||0,[b,u.id]),Ws=S.useMemo(()=>{var N;return(N=u.closeButton)!=null?N:G},[u.closeButton,G]),No=S.useMemo(()=>u.duration||L||mu,[u.duration,L]),jt=S.useRef(0),fe=S.useRef(0),_o=S.useRef(0),ge=S.useRef(null),[Lo,zs]=I.split("-"),Mo=S.useMemo(()=>b.reduce((N,U,$)=>$>=Ze?N:N+U.height,0),[b,Ze]),Ho=ru(),Qs=u.invert||h,Ot=tn==="loading";fe.current=S.useMemo(()=>Ze*z+Mo,[Ze,Mo]),S.useEffect(()=>{ln(!0)},[]),S.useLayoutEffect(()=>{if(!Y)return;let N=_n.current,U=N.style.height;N.style.height="auto";let $=N.getBoundingClientRect().height;N.style.height=U,je($),g(xn=>xn.find(An=>An.toastId===u.id)?xn.map(An=>An.toastId===u.id?{...An,height:$}:An):[{toastId:u.id,height:$,position:u.position},...xn])},[Y,u.title,u.description,g,u.id]);let Ln=S.useCallback(()=>{J(!0),ce(fe.current),g(N=>N.filter(U=>U.toastId!==u.id)),setTimeout(()=>{A(u)},yu)},[u,A,g,fe]);S.useEffect(()=>{if(u.promise&&tn==="loading"||u.duration===1/0||u.type==="loading")return;let N,U=No;return x||p||j&&Ho?(()=>{if(_o.current<jt.current){let $=new Date().getTime()-jt.current;U=U-$}_o.current=new Date().getTime()})():U!==1/0&&(jt.current=new Date().getTime(),N=setTimeout(()=>{var $;($=u.onAutoClose)==null||$.call(u,u),Ln()},U)),()=>clearTimeout(N)},[x,p,M,u,No,Ln,u.promise,tn,j,Ho]),S.useEffect(()=>{let N=_n.current;if(N){let U=N.getBoundingClientRect().height;return je(U),g($=>[{toastId:u.id,height:U,position:u.position},...$]),()=>g($=>$.filter(xn=>xn.toastId!==u.id))}},[g,u.id]),S.useEffect(()=>{u.delete&&Ln()},[Ln,u.delete]);function Ys(){return O!=null&&O.loading?S.createElement("div",{className:"sonner-loader","data-visible":tn==="loading"},O.loading):R?S.createElement("div",{className:"sonner-loader","data-visible":tn==="loading"},R):S.createElement(Zl,{visible:tn==="loading"})}return S.createElement("li",{"aria-live":u.important?"assertive":"polite","aria-atomic":"true",role:"status",tabIndex:0,ref:_n,className:Q(F,Ms,D==null?void 0:D.toast,(e=u==null?void 0:u.classNames)==null?void 0:e.toast,D==null?void 0:D.default,D==null?void 0:D[tn],(t=u==null?void 0:u.classNames)==null?void 0:t[tn]),"data-sonner-toast":"","data-rich-colors":(o=u.richColors)!=null?o:k,"data-styled":!(u.jsx||u.unstyled||y),"data-mounted":Y,"data-promise":!!u.promise,"data-removed":Bn,"data-visible":Pt,"data-y-position":Lo,"data-x-position":zs,"data-index":E,"data-front":Rt,"data-swiping":he,"data-dismissible":me,"data-type":tn,"data-invert":Qs,"data-swipe-out":On,"data-expanded":!!(x||M&&Y),style:{"--index":E,"--toasts-before":E,"--z-index":v.length-E,"--offset":`${Bn?qe:fe.current}px`,"--initial-height":M?"auto":`${te}px`,...B,...u.style},onPointerDown:N=>{Ot||!me||(Je.current=new Date,ce(fe.current),N.target.setPointerCapture(N.pointerId),N.target.tagName!=="BUTTON"&&(jn(!0),ge.current={x:N.clientX,y:N.clientY}))},onPointerUp:()=>{var N,U,$,xn;if(On||!me)return;ge.current=null;let An=Number(((N=_n.current)==null?void 0:N.style.getPropertyValue("--swipe-amount").replace("px",""))||0),nt=new Date().getTime()-((U=Je.current)==null?void 0:U.getTime()),Vs=Math.abs(An)/nt;if(Math.abs(An)>=wu||Vs>.11){ce(fe.current),($=u.onDismiss)==null||$.call(u,u),Ln(),Nn(!0);return}(xn=_n.current)==null||xn.style.setProperty("--swipe-amount","0px"),jn(!1)},onPointerMove:N=>{var U;if(!ge.current||!me)return;let $=N.clientY-ge.current.y,xn=N.clientX-ge.current.x,An=(Lo==="top"?Math.min:Math.max)(0,$),nt=N.pointerType==="touch"?10:2;Math.abs(An)>nt?(U=_n.current)==null||U.style.setProperty("--swipe-amount",`${$}px`):Math.abs(xn)>nt&&(ge.current=null)}},Ws&&!u.jsx?S.createElement("button",{"aria-label":nn,"data-disabled":Ot,"data-close-button":!0,onClick:Ot||!me?()=>{}:()=>{var N;Ln(),(N=u.onDismiss)==null||N.call(u,u)},className:Q(D==null?void 0:D.closeButton,(r=u==null?void 0:u.classNames)==null?void 0:r.closeButton)},S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},S.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),S.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))):null,u.jsx||S.isValidElement(u.title)?u.jsx||u.title:S.createElement(S.Fragment,null,tn||u.icon||u.promise?S.createElement("div",{"data-icon":"",className:Q(D==null?void 0:D.icon,(a=u==null?void 0:u.classNames)==null?void 0:a.icon)},u.promise||u.type==="loading"&&!u.icon?u.icon||Ys():null,u.type!=="loading"?u.icon||(O==null?void 0:O[tn])||ql(tn):null):null,S.createElement("div",{"data-content":"",className:Q(D==null?void 0:D.content,(s=u==null?void 0:u.classNames)==null?void 0:s.content)},S.createElement("div",{"data-title":"",className:Q(D==null?void 0:D.title,(i=u==null?void 0:u.classNames)==null?void 0:i.title)},u.title),u.description?S.createElement("div",{"data-description":"",className:Q(T,Hs,D==null?void 0:D.description,(l=u==null?void 0:u.classNames)==null?void 0:l.description)},u.description):null),S.isValidElement(u.cancel)?u.cancel:u.cancel&&rt(u.cancel)?S.createElement("button",{"data-button":!0,"data-cancel":!0,style:u.cancelButtonStyle||P,onClick:N=>{var U,$;rt(u.cancel)&&me&&(($=(U=u.cancel).onClick)==null||$.call(U,N),Ln())},className:Q(D==null?void 0:D.cancelButton,(d=u==null?void 0:u.classNames)==null?void 0:d.cancelButton)},u.cancel.label):null,S.isValidElement(u.action)?u.action:u.action&&rt(u.action)?S.createElement("button",{"data-button":!0,"data-action":!0,style:u.actionButtonStyle||W,onClick:N=>{var U,$;rt(u.action)&&(N.defaultPrevented||(($=(U=u.action).onClick)==null||$.call(U,N),Ln()))},className:Q(D==null?void 0:D.actionButton,(m=u==null?void 0:u.classNames)==null?void 0:m.actionButton)},u.action.label):null))};function Zo(){if(typeof window>"u"||typeof document>"u")return"ltr";let n=document.documentElement.getAttribute("dir");return n==="auto"||!n?window.getComputedStyle(document.documentElement).direction:n}var Eu=n=>{let{invert:e,position:t="bottom-right",hotkey:o=["altKey","KeyT"],expand:r,closeButton:a,className:s,offset:i,theme:l="light",richColors:d,duration:m,style:h,visibleToasts:u=hu,toastOptions:y,dir:p=Zo(),gap:g=gu,loadingIcon:w,icons:b,containerAriaLabel:E="Notifications",pauseWhenPageIsHidden:v,cn:x=pu}=n,[A,k]=S.useState([]),G=S.useMemo(()=>Array.from(new Set([t].concat(A.filter(j=>j.position).map(j=>j.position)))),[A,t]),[B,P]=S.useState([]),[W,F]=S.useState(!1),[T,L]=S.useState(!1),[I,z]=S.useState(l!=="system"?l:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),R=S.useRef(null),M=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),D=S.useRef(null),O=S.useRef(!1),nn=S.useCallback(j=>{var Q;(Q=A.find(Y=>Y.id===j.id))!=null&&Q.delete||cn.dismiss(j.id),k(Y=>Y.filter(({id:ln})=>ln!==j.id))},[A]);return S.useEffect(()=>cn.subscribe(j=>{if(j.dismiss){k(Q=>Q.map(Y=>Y.id===j.id?{...Y,delete:!0}:Y));return}setTimeout(()=>{Pr.flushSync(()=>{k(Q=>{let Y=Q.findIndex(ln=>ln.id===j.id);return Y!==-1?[...Q.slice(0,Y),{...Q[Y],...j},...Q.slice(Y+1)]:[j,...Q]})})})}),[]),S.useEffect(()=>{if(l!=="system"){z(l);return}l==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?z("dark"):z("light")),typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:j})=>{z(j?"dark":"light")})},[l]),S.useEffect(()=>{A.length<=1&&F(!1)},[A]),S.useEffect(()=>{let j=Q=>{var Y,ln;o.every(Bn=>Q[Bn]||Q.code===Bn)&&(F(!0),(Y=R.current)==null||Y.focus()),Q.code==="Escape"&&(document.activeElement===R.current||(ln=R.current)!=null&&ln.contains(document.activeElement))&&F(!1)};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[o]),S.useEffect(()=>{if(R.current)return()=>{D.current&&(D.current.focus({preventScroll:!0}),D.current=null,O.current=!1)}},[R.current]),A.length?S.createElement("section",{"aria-label":`${E} ${M}`,tabIndex:-1},G.map((j,Q)=>{var Y;let[ln,Bn]=j.split("-");return S.createElement("ol",{key:j,dir:p==="auto"?Zo():p,tabIndex:-1,ref:R,className:s,"data-sonner-toaster":!0,"data-theme":I,"data-y-position":ln,"data-x-position":Bn,style:{"--front-toast-height":`${((Y=B[0])==null?void 0:Y.height)||0}px`,"--offset":typeof i=="number"?`${i}px`:i||cu,"--width":`${fu}px`,"--gap":`${g}px`,...h},onBlur:J=>{O.current&&!J.currentTarget.contains(J.relatedTarget)&&(O.current=!1,D.current&&(D.current.focus({preventScroll:!0}),D.current=null))},onFocus:J=>{J.target instanceof HTMLElement&&J.target.dataset.dismissible==="false"||O.current||(O.current=!0,D.current=J.relatedTarget)},onMouseEnter:()=>F(!0),onMouseMove:()=>F(!0),onMouseLeave:()=>{T||F(!1)},onPointerDown:J=>{J.target instanceof HTMLElement&&J.target.dataset.dismissible==="false"||L(!0)},onPointerUp:()=>L(!1)},A.filter(J=>!J.position&&Q===0||J.position===j).map((J,he)=>{var jn,On;return S.createElement(bu,{key:J.id,icons:b,index:he,toast:J,defaultRichColors:d,duration:(jn=y==null?void 0:y.duration)!=null?jn:m,className:y==null?void 0:y.className,descriptionClassName:y==null?void 0:y.descriptionClassName,invert:e,visibleToasts:u,closeButton:(On=y==null?void 0:y.closeButton)!=null?On:a,interacting:T,position:j,style:y==null?void 0:y.style,unstyled:y==null?void 0:y.unstyled,classNames:y==null?void 0:y.classNames,cancelButtonStyle:y==null?void 0:y.cancelButtonStyle,actionButtonStyle:y==null?void 0:y.actionButtonStyle,removeToast:nn,toasts:A.filter(Nn=>Nn.position==J.position),heights:B.filter(Nn=>Nn.position==J.position),setHeights:P,expandByDefault:r,gap:g,loadingIcon:w,expanded:W,pauseWhenPageIsHidden:v,cn:x})}))})):null};const vu=({...n})=>{const{theme:e="system"}=Kl();return f.jsx(Eu,{theme:e,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...n})},xu=["top","right","bottom","left"],Kn=Math.min,fn=Math.max,dt=Math.round,at=Math.floor,qn=n=>({x:n,y:n}),Au={left:"right",right:"left",bottom:"top",top:"bottom"},Cu={start:"end",end:"start"};function Zt(n,e,t){return fn(n,Kn(e,t))}function Rn(n,e){return typeof n=="function"?n(e):n}function Pn(n){return n.split("-")[0]}function Te(n){return n.split("-")[1]}function Eo(n){return n==="x"?"y":"x"}function vo(n){return n==="y"?"height":"width"}function Jn(n){return["top","bottom"].includes(Pn(n))?"y":"x"}function xo(n){return Eo(Jn(n))}function Su(n,e,t){t===void 0&&(t=!1);const o=Te(n),r=xo(n),a=vo(r);let s=r==="x"?o===(t?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[a]>e.floating[a]&&(s=ht(s)),[s,ht(s)]}function Du(n){const e=ht(n);return[no(n),e,no(e)]}function no(n){return n.replace(/start|end/g,e=>Cu[e])}function ku(n,e,t){const o=["left","right"],r=["right","left"],a=["top","bottom"],s=["bottom","top"];switch(n){case"top":case"bottom":return t?e?r:o:e?o:r;case"left":case"right":return e?a:s;default:return[]}}function Iu(n,e,t,o){const r=Te(n);let a=ku(Pn(n),t==="start",o);return r&&(a=a.map(s=>s+"-"+r),e&&(a=a.concat(a.map(no)))),a}function ht(n){return n.replace(/left|right|bottom|top/g,e=>Au[e])}function Gu(n){return{top:0,right:0,bottom:0,left:0,...n}}function ka(n){return typeof n!="number"?Gu(n):{top:n,right:n,bottom:n,left:n}}function ct(n){const{x:e,y:t,width:o,height:r}=n;return{width:o,height:r,top:t,left:e,right:e+o,bottom:t+r,x:e,y:t}}function nr(n,e,t){let{reference:o,floating:r}=n;const a=Jn(e),s=xo(e),i=vo(s),l=Pn(e),d=a==="y",m=o.x+o.width/2-r.width/2,h=o.y+o.height/2-r.height/2,u=o[i]/2-r[i]/2;let y;switch(l){case"top":y={x:m,y:o.y-r.height};break;case"bottom":y={x:m,y:o.y+o.height};break;case"right":y={x:o.x+o.width,y:h};break;case"left":y={x:o.x-r.width,y:h};break;default:y={x:o.x,y:o.y}}switch(Te(e)){case"start":y[s]-=u*(t&&d?-1:1);break;case"end":y[s]+=u*(t&&d?-1:1);break}return y}const Bu=async(n,e,t)=>{const{placement:o="bottom",strategy:r="absolute",middleware:a=[],platform:s}=t,i=a.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let d=await s.getElementRects({reference:n,floating:e,strategy:r}),{x:m,y:h}=nr(d,o,l),u=o,y={},p=0;for(let g=0;g<i.length;g++){const{name:w,fn:b}=i[g],{x:E,y:v,data:x,reset:A}=await b({x:m,y:h,initialPlacement:o,placement:u,strategy:r,middlewareData:y,rects:d,platform:s,elements:{reference:n,floating:e}});m=E??m,h=v??h,y={...y,[w]:{...y[w],...x}},A&&p<=50&&(p++,typeof A=="object"&&(A.placement&&(u=A.placement),A.rects&&(d=A.rects===!0?await s.getElementRects({reference:n,floating:e,strategy:r}):A.rects),{x:m,y:h}=nr(d,u,l)),g=-1)}return{x:m,y:h,placement:u,strategy:r,middlewareData:y}};async function Me(n,e){var t;e===void 0&&(e={});const{x:o,y:r,platform:a,rects:s,elements:i,strategy:l}=n,{boundary:d="clippingAncestors",rootBoundary:m="viewport",elementContext:h="floating",altBoundary:u=!1,padding:y=0}=Rn(e,n),p=ka(y),w=i[u?h==="floating"?"reference":"floating":h],b=ct(await a.getClippingRect({element:(t=await(a.isElement==null?void 0:a.isElement(w)))==null||t?w:w.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(i.floating)),boundary:d,rootBoundary:m,strategy:l})),E=h==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,v=await(a.getOffsetParent==null?void 0:a.getOffsetParent(i.floating)),x=await(a.isElement==null?void 0:a.isElement(v))?await(a.getScale==null?void 0:a.getScale(v))||{x:1,y:1}:{x:1,y:1},A=ct(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:i,rect:E,offsetParent:v,strategy:l}):E);return{top:(b.top-A.top+p.top)/x.y,bottom:(A.bottom-b.bottom+p.bottom)/x.y,left:(b.left-A.left+p.left)/x.x,right:(A.right-b.right+p.right)/x.x}}const Tu=n=>({name:"arrow",options:n,async fn(e){const{x:t,y:o,placement:r,rects:a,platform:s,elements:i,middlewareData:l}=e,{element:d,padding:m=0}=Rn(n,e)||{};if(d==null)return{};const h=ka(m),u={x:t,y:o},y=xo(r),p=vo(y),g=await s.getDimensions(d),w=y==="y",b=w?"top":"left",E=w?"bottom":"right",v=w?"clientHeight":"clientWidth",x=a.reference[p]+a.reference[y]-u[y]-a.floating[p],A=u[y]-a.reference[y],k=await(s.getOffsetParent==null?void 0:s.getOffsetParent(d));let G=k?k[v]:0;(!G||!await(s.isElement==null?void 0:s.isElement(k)))&&(G=i.floating[v]||a.floating[p]);const B=x/2-A/2,P=G/2-g[p]/2-1,W=Kn(h[b],P),F=Kn(h[E],P),T=W,L=G-g[p]-F,I=G/2-g[p]/2+B,z=Zt(T,I,L),R=!l.arrow&&Te(r)!=null&&I!==z&&a.reference[p]/2-(I<T?W:F)-g[p]/2<0,M=R?I<T?I-T:I-L:0;return{[y]:u[y]+M,data:{[y]:z,centerOffset:I-z-M,...R&&{alignmentOffset:M}},reset:R}}}),Fu=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(e){var t,o;const{placement:r,middlewareData:a,rects:s,initialPlacement:i,platform:l,elements:d}=e,{mainAxis:m=!0,crossAxis:h=!0,fallbackPlacements:u,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...w}=Rn(n,e);if((t=a.arrow)!=null&&t.alignmentOffset)return{};const b=Pn(r),E=Jn(i),v=Pn(i)===i,x=await(l.isRTL==null?void 0:l.isRTL(d.floating)),A=u||(v||!g?[ht(i)]:Du(i)),k=p!=="none";!u&&k&&A.push(...Iu(i,g,p,x));const G=[i,...A],B=await Me(e,w),P=[];let W=((o=a.flip)==null?void 0:o.overflows)||[];if(m&&P.push(B[b]),h){const I=Su(r,s,x);P.push(B[I[0]],B[I[1]])}if(W=[...W,{placement:r,overflows:P}],!P.every(I=>I<=0)){var F,T;const I=(((F=a.flip)==null?void 0:F.index)||0)+1,z=G[I];if(z)return{data:{index:I,overflows:W},reset:{placement:z}};let R=(T=W.filter(M=>M.overflows[0]<=0).sort((M,D)=>M.overflows[1]-D.overflows[1])[0])==null?void 0:T.placement;if(!R)switch(y){case"bestFit":{var L;const M=(L=W.filter(D=>{if(k){const O=Jn(D.placement);return O===E||O==="y"}return!0}).map(D=>[D.placement,D.overflows.filter(O=>O>0).reduce((O,nn)=>O+nn,0)]).sort((D,O)=>D[1]-O[1])[0])==null?void 0:L[0];M&&(R=M);break}case"initialPlacement":R=i;break}if(r!==R)return{reset:{placement:R}}}return{}}}};function er(n,e){return{top:n.top-e.height,right:n.right-e.width,bottom:n.bottom-e.height,left:n.left-e.width}}function tr(n){return xu.some(e=>n[e]>=0)}const Ru=function(n){return n===void 0&&(n={}),{name:"hide",options:n,async fn(e){const{rects:t}=e,{strategy:o="referenceHidden",...r}=Rn(n,e);switch(o){case"referenceHidden":{const a=await Me(e,{...r,elementContext:"reference"}),s=er(a,t.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:tr(s)}}}case"escaped":{const a=await Me(e,{...r,altBoundary:!0}),s=er(a,t.floating);return{data:{escapedOffsets:s,escaped:tr(s)}}}default:return{}}}}};async function Pu(n,e){const{placement:t,platform:o,elements:r}=n,a=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=Pn(t),i=Te(t),l=Jn(t)==="y",d=["left","top"].includes(s)?-1:1,m=a&&l?-1:1,h=Rn(e,n);let{mainAxis:u,crossAxis:y,alignmentAxis:p}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return i&&typeof p=="number"&&(y=i==="end"?p*-1:p),l?{x:y*m,y:u*d}:{x:u*d,y:y*m}}const ju=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(e){var t,o;const{x:r,y:a,placement:s,middlewareData:i}=e,l=await Pu(e,n);return s===((t=i.offset)==null?void 0:t.placement)&&(o=i.arrow)!=null&&o.alignmentOffset?{}:{x:r+l.x,y:a+l.y,data:{...l,placement:s}}}}},Ou=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(e){const{x:t,y:o,placement:r}=e,{mainAxis:a=!0,crossAxis:s=!1,limiter:i={fn:w=>{let{x:b,y:E}=w;return{x:b,y:E}}},...l}=Rn(n,e),d={x:t,y:o},m=await Me(e,l),h=Jn(Pn(r)),u=Eo(h);let y=d[u],p=d[h];if(a){const w=u==="y"?"top":"left",b=u==="y"?"bottom":"right",E=y+m[w],v=y-m[b];y=Zt(E,y,v)}if(s){const w=h==="y"?"top":"left",b=h==="y"?"bottom":"right",E=p+m[w],v=p-m[b];p=Zt(E,p,v)}const g=i.fn({...e,[u]:y,[h]:p});return{...g,data:{x:g.x-t,y:g.y-o,enabled:{[u]:a,[h]:s}}}}}},Nu=function(n){return n===void 0&&(n={}),{options:n,fn(e){const{x:t,y:o,placement:r,rects:a,middlewareData:s}=e,{offset:i=0,mainAxis:l=!0,crossAxis:d=!0}=Rn(n,e),m={x:t,y:o},h=Jn(r),u=Eo(h);let y=m[u],p=m[h];const g=Rn(i,e),w=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(l){const v=u==="y"?"height":"width",x=a.reference[u]-a.floating[v]+w.mainAxis,A=a.reference[u]+a.reference[v]-w.mainAxis;y<x?y=x:y>A&&(y=A)}if(d){var b,E;const v=u==="y"?"width":"height",x=["top","left"].includes(Pn(r)),A=a.reference[h]-a.floating[v]+(x&&((b=s.offset)==null?void 0:b[h])||0)+(x?0:w.crossAxis),k=a.reference[h]+a.reference[v]+(x?0:((E=s.offset)==null?void 0:E[h])||0)-(x?w.crossAxis:0);p<A?p=A:p>k&&(p=k)}return{[u]:y,[h]:p}}}},_u=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(e){var t,o;const{placement:r,rects:a,platform:s,elements:i}=e,{apply:l=()=>{},...d}=Rn(n,e),m=await Me(e,d),h=Pn(r),u=Te(r),y=Jn(r)==="y",{width:p,height:g}=a.floating;let w,b;h==="top"||h==="bottom"?(w=h,b=u===(await(s.isRTL==null?void 0:s.isRTL(i.floating))?"start":"end")?"left":"right"):(b=h,w=u==="end"?"top":"bottom");const E=g-m.top-m.bottom,v=p-m.left-m.right,x=Kn(g-m[w],E),A=Kn(p-m[b],v),k=!e.middlewareData.shift;let G=x,B=A;if((t=e.middlewareData.shift)!=null&&t.enabled.x&&(B=v),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(G=E),k&&!u){const W=fn(m.left,0),F=fn(m.right,0),T=fn(m.top,0),L=fn(m.bottom,0);y?B=p-2*(W!==0||F!==0?W+F:fn(m.left,m.right)):G=g-2*(T!==0||L!==0?T+L:fn(m.top,m.bottom))}await l({...e,availableWidth:B,availableHeight:G});const P=await s.getDimensions(i.floating);return p!==P.width||g!==P.height?{reset:{rects:!0}}:{}}}};function xt(){return typeof window<"u"}function Fe(n){return Ia(n)?(n.nodeName||"").toLowerCase():"#document"}function gn(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function Gn(n){var e;return(e=(Ia(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function Ia(n){return xt()?n instanceof Node||n instanceof gn(n).Node:!1}function En(n){return xt()?n instanceof Element||n instanceof gn(n).Element:!1}function In(n){return xt()?n instanceof HTMLElement||n instanceof gn(n).HTMLElement:!1}function or(n){return!xt()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof gn(n).ShadowRoot}function Xe(n){const{overflow:e,overflowX:t,overflowY:o,display:r}=vn(n);return/auto|scroll|overlay|hidden|clip/.test(e+o+t)&&!["inline","contents"].includes(r)}function Lu(n){return["table","td","th"].includes(Fe(n))}function At(n){return[":popover-open",":modal"].some(e=>{try{return n.matches(e)}catch{return!1}})}function Ao(n){const e=Co(),t=En(n)?vn(n):n;return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(t.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(t.contain||"").includes(o))}function Mu(n){let e=Zn(n);for(;In(e)&&!Ie(e);){if(Ao(e))return e;if(At(e))return null;e=Zn(e)}return null}function Co(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ie(n){return["html","body","#document"].includes(Fe(n))}function vn(n){return gn(n).getComputedStyle(n)}function Ct(n){return En(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function Zn(n){if(Fe(n)==="html")return n;const e=n.assignedSlot||n.parentNode||or(n)&&n.host||Gn(n);return or(e)?e.host:e}function Ga(n){const e=Zn(n);return Ie(e)?n.ownerDocument?n.ownerDocument.body:n.body:In(e)&&Xe(e)?e:Ga(e)}function He(n,e,t){var o;e===void 0&&(e=[]),t===void 0&&(t=!0);const r=Ga(n),a=r===((o=n.ownerDocument)==null?void 0:o.body),s=gn(r);if(a){const i=eo(s);return e.concat(s,s.visualViewport||[],Xe(r)?r:[],i&&t?He(i):[])}return e.concat(r,He(r,[],t))}function eo(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function Ba(n){const e=vn(n);let t=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=In(n),a=r?n.offsetWidth:t,s=r?n.offsetHeight:o,i=dt(t)!==a||dt(o)!==s;return i&&(t=a,o=s),{width:t,height:o,$:i}}function So(n){return En(n)?n:n.contextElement}function pe(n){const e=So(n);if(!In(e))return qn(1);const t=e.getBoundingClientRect(),{width:o,height:r,$:a}=Ba(e);let s=(a?dt(t.width):t.width)/o,i=(a?dt(t.height):t.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!i||!Number.isFinite(i))&&(i=1),{x:s,y:i}}const Hu=qn(0);function Ta(n){const e=gn(n);return!Co()||!e.visualViewport?Hu:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Wu(n,e,t){return e===void 0&&(e=!1),!t||e&&t!==gn(n)?!1:e}function le(n,e,t,o){e===void 0&&(e=!1),t===void 0&&(t=!1);const r=n.getBoundingClientRect(),a=So(n);let s=qn(1);e&&(o?En(o)&&(s=pe(o)):s=pe(n));const i=Wu(a,t,o)?Ta(a):qn(0);let l=(r.left+i.x)/s.x,d=(r.top+i.y)/s.y,m=r.width/s.x,h=r.height/s.y;if(a){const u=gn(a),y=o&&En(o)?gn(o):o;let p=u,g=eo(p);for(;g&&o&&y!==p;){const w=pe(g),b=g.getBoundingClientRect(),E=vn(g),v=b.left+(g.clientLeft+parseFloat(E.paddingLeft))*w.x,x=b.top+(g.clientTop+parseFloat(E.paddingTop))*w.y;l*=w.x,d*=w.y,m*=w.x,h*=w.y,l+=v,d+=x,p=gn(g),g=eo(p)}}return ct({width:m,height:h,x:l,y:d})}function zu(n){let{elements:e,rect:t,offsetParent:o,strategy:r}=n;const a=r==="fixed",s=Gn(o),i=e?At(e.floating):!1;if(o===s||i&&a)return t;let l={scrollLeft:0,scrollTop:0},d=qn(1);const m=qn(0),h=In(o);if((h||!h&&!a)&&((Fe(o)!=="body"||Xe(s))&&(l=Ct(o)),In(o))){const u=le(o);d=pe(o),m.x=u.x+o.clientLeft,m.y=u.y+o.clientTop}return{width:t.width*d.x,height:t.height*d.y,x:t.x*d.x-l.scrollLeft*d.x+m.x,y:t.y*d.y-l.scrollTop*d.y+m.y}}function Qu(n){return Array.from(n.getClientRects())}function to(n,e){const t=Ct(n).scrollLeft;return e?e.left+t:le(Gn(n)).left+t}function Yu(n){const e=Gn(n),t=Ct(n),o=n.ownerDocument.body,r=fn(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),a=fn(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-t.scrollLeft+to(n);const i=-t.scrollTop;return vn(o).direction==="rtl"&&(s+=fn(e.clientWidth,o.clientWidth)-r),{width:r,height:a,x:s,y:i}}function Vu(n,e){const t=gn(n),o=Gn(n),r=t.visualViewport;let a=o.clientWidth,s=o.clientHeight,i=0,l=0;if(r){a=r.width,s=r.height;const d=Co();(!d||d&&e==="fixed")&&(i=r.offsetLeft,l=r.offsetTop)}return{width:a,height:s,x:i,y:l}}function $u(n,e){const t=le(n,!0,e==="fixed"),o=t.top+n.clientTop,r=t.left+n.clientLeft,a=In(n)?pe(n):qn(1),s=n.clientWidth*a.x,i=n.clientHeight*a.y,l=r*a.x,d=o*a.y;return{width:s,height:i,x:l,y:d}}function rr(n,e,t){let o;if(e==="viewport")o=Vu(n,t);else if(e==="document")o=Yu(Gn(n));else if(En(e))o=$u(e,t);else{const r=Ta(n);o={...e,x:e.x-r.x,y:e.y-r.y}}return ct(o)}function Fa(n,e){const t=Zn(n);return t===e||!En(t)||Ie(t)?!1:vn(t).position==="fixed"||Fa(t,e)}function Uu(n,e){const t=e.get(n);if(t)return t;let o=He(n,[],!1).filter(i=>En(i)&&Fe(i)!=="body"),r=null;const a=vn(n).position==="fixed";let s=a?Zn(n):n;for(;En(s)&&!Ie(s);){const i=vn(s),l=Ao(s);!l&&i.position==="fixed"&&(r=null),(a?!l&&!r:!l&&i.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||Xe(s)&&!l&&Fa(n,s))?o=o.filter(m=>m!==s):r=i,s=Zn(s)}return e.set(n,o),o}function Xu(n){let{element:e,boundary:t,rootBoundary:o,strategy:r}=n;const s=[...t==="clippingAncestors"?At(e)?[]:Uu(e,this._c):[].concat(t),o],i=s[0],l=s.reduce((d,m)=>{const h=rr(e,m,r);return d.top=fn(h.top,d.top),d.right=Kn(h.right,d.right),d.bottom=Kn(h.bottom,d.bottom),d.left=fn(h.left,d.left),d},rr(e,i,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ku(n){const{width:e,height:t}=Ba(n);return{width:e,height:t}}function qu(n,e,t){const o=In(e),r=Gn(e),a=t==="fixed",s=le(n,!0,a,e);let i={scrollLeft:0,scrollTop:0};const l=qn(0);if(o||!o&&!a)if((Fe(e)!=="body"||Xe(r))&&(i=Ct(e)),o){const y=le(e,!0,a,e);l.x=y.x+e.clientLeft,l.y=y.y+e.clientTop}else r&&(l.x=to(r));let d=0,m=0;if(r&&!o&&!a){const y=r.getBoundingClientRect();m=y.top+i.scrollTop,d=y.left+i.scrollLeft-to(r,y)}const h=s.left+i.scrollLeft-l.x-d,u=s.top+i.scrollTop-l.y-m;return{x:h,y:u,width:s.width,height:s.height}}function Wt(n){return vn(n).position==="static"}function ar(n,e){if(!In(n)||vn(n).position==="fixed")return null;if(e)return e(n);let t=n.offsetParent;return Gn(n)===t&&(t=t.ownerDocument.body),t}function Ra(n,e){const t=gn(n);if(At(n))return t;if(!In(n)){let r=Zn(n);for(;r&&!Ie(r);){if(En(r)&&!Wt(r))return r;r=Zn(r)}return t}let o=ar(n,e);for(;o&&Lu(o)&&Wt(o);)o=ar(o,e);return o&&Ie(o)&&Wt(o)&&!Ao(o)?t:o||Mu(n)||t}const Ju=async function(n){const e=this.getOffsetParent||Ra,t=this.getDimensions,o=await t(n.floating);return{reference:qu(n.reference,await e(n.floating),n.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Zu(n){return vn(n).direction==="rtl"}const nd={convertOffsetParentRelativeRectToViewportRelativeRect:zu,getDocumentElement:Gn,getClippingRect:Xu,getOffsetParent:Ra,getElementRects:Ju,getClientRects:Qu,getDimensions:Ku,getScale:pe,isElement:En,isRTL:Zu};function ed(n,e){let t=null,o;const r=Gn(n);function a(){var i;clearTimeout(o),(i=t)==null||i.disconnect(),t=null}function s(i,l){i===void 0&&(i=!1),l===void 0&&(l=1),a();const{left:d,top:m,width:h,height:u}=n.getBoundingClientRect();if(i||e(),!h||!u)return;const y=at(m),p=at(r.clientWidth-(d+h)),g=at(r.clientHeight-(m+u)),w=at(d),E={rootMargin:-y+"px "+-p+"px "+-g+"px "+-w+"px",threshold:fn(0,Kn(1,l))||1};let v=!0;function x(A){const k=A[0].intersectionRatio;if(k!==l){if(!v)return s();k?s(!1,k):o=setTimeout(()=>{s(!1,1e-7)},1e3)}v=!1}try{t=new IntersectionObserver(x,{...E,root:r.ownerDocument})}catch{t=new IntersectionObserver(x,E)}t.observe(n)}return s(!0),a}function td(n,e,t,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:i=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,d=So(n),m=r||a?[...d?He(d):[],...He(e)]:[];m.forEach(b=>{r&&b.addEventListener("scroll",t,{passive:!0}),a&&b.addEventListener("resize",t)});const h=d&&i?ed(d,t):null;let u=-1,y=null;s&&(y=new ResizeObserver(b=>{let[E]=b;E&&E.target===d&&y&&(y.unobserve(e),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var v;(v=y)==null||v.observe(e)})),t()}),d&&!l&&y.observe(d),y.observe(e));let p,g=l?le(n):null;l&&w();function w(){const b=le(n);g&&(b.x!==g.x||b.y!==g.y||b.width!==g.width||b.height!==g.height)&&t(),g=b,p=requestAnimationFrame(w)}return t(),()=>{var b;m.forEach(E=>{r&&E.removeEventListener("scroll",t),a&&E.removeEventListener("resize",t)}),h==null||h(),(b=y)==null||b.disconnect(),y=null,l&&cancelAnimationFrame(p)}}const od=ju,rd=Ou,ad=Fu,sd=_u,id=Ru,sr=Tu,ld=Nu,ud=(n,e,t)=>{const o=new Map,r={platform:nd,...t},a={...r.platform,_c:o};return Bu(n,e,{...r,platform:a})};var ut=typeof document<"u"?c.useLayoutEffect:c.useEffect;function mt(n,e){if(n===e)return!0;if(typeof n!=typeof e)return!1;if(typeof n=="function"&&n.toString()===e.toString())return!0;let t,o,r;if(n&&e&&typeof n=="object"){if(Array.isArray(n)){if(t=n.length,t!==e.length)return!1;for(o=t;o--!==0;)if(!mt(n[o],e[o]))return!1;return!0}if(r=Object.keys(n),t=r.length,t!==Object.keys(e).length)return!1;for(o=t;o--!==0;)if(!{}.hasOwnProperty.call(e,r[o]))return!1;for(o=t;o--!==0;){const a=r[o];if(!(a==="_owner"&&n.$$typeof)&&!mt(n[a],e[a]))return!1}return!0}return n!==n&&e!==e}function Pa(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function ir(n,e){const t=Pa(n);return Math.round(e*t)/t}function zt(n){const e=c.useRef(n);return ut(()=>{e.current=n}),e}function dd(n){n===void 0&&(n={});const{placement:e="bottom",strategy:t="absolute",middleware:o=[],platform:r,elements:{reference:a,floating:s}={},transform:i=!0,whileElementsMounted:l,open:d}=n,[m,h]=c.useState({x:0,y:0,strategy:t,placement:e,middlewareData:{},isPositioned:!1}),[u,y]=c.useState(o);mt(u,o)||y(o);const[p,g]=c.useState(null),[w,b]=c.useState(null),E=c.useCallback(D=>{D!==k.current&&(k.current=D,g(D))},[]),v=c.useCallback(D=>{D!==G.current&&(G.current=D,b(D))},[]),x=a||p,A=s||w,k=c.useRef(null),G=c.useRef(null),B=c.useRef(m),P=l!=null,W=zt(l),F=zt(r),T=zt(d),L=c.useCallback(()=>{if(!k.current||!G.current)return;const D={placement:e,strategy:t,middleware:u};F.current&&(D.platform=F.current),ud(k.current,G.current,D).then(O=>{const nn={...O,isPositioned:T.current!==!1};I.current&&!mt(B.current,nn)&&(B.current=nn,yt.flushSync(()=>{h(nn)}))})},[u,e,t,F,T]);ut(()=>{d===!1&&B.current.isPositioned&&(B.current.isPositioned=!1,h(D=>({...D,isPositioned:!1})))},[d]);const I=c.useRef(!1);ut(()=>(I.current=!0,()=>{I.current=!1}),[]),ut(()=>{if(x&&(k.current=x),A&&(G.current=A),x&&A){if(W.current)return W.current(x,A,L);L()}},[x,A,L,W,P]);const z=c.useMemo(()=>({reference:k,floating:G,setReference:E,setFloating:v}),[E,v]),R=c.useMemo(()=>({reference:x,floating:A}),[x,A]),M=c.useMemo(()=>{const D={position:t,left:0,top:0};if(!R.floating)return D;const O=ir(R.floating,m.x),nn=ir(R.floating,m.y);return i?{...D,transform:"translate("+O+"px, "+nn+"px)",...Pa(R.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:O,top:nn}},[t,i,R.floating,m.x,m.y]);return c.useMemo(()=>({...m,update:L,refs:z,elements:R,floatingStyles:M}),[m,L,z,R,M])}const hd=n=>{function e(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:n,fn(t){const{element:o,padding:r}=typeof n=="function"?n(t):n;return o&&e(o)?o.current!=null?sr({element:o.current,padding:r}).fn(t):{}:o?sr({element:o,padding:r}).fn(t):{}}}},cd=(n,e)=>({...od(n),options:[n,e]}),md=(n,e)=>({...rd(n),options:[n,e]}),fd=(n,e)=>({...ld(n),options:[n,e]}),gd=(n,e)=>({...ad(n),options:[n,e]}),wd=(n,e)=>({...sd(n),options:[n,e]}),yd=(n,e)=>({...id(n),options:[n,e]}),pd=(n,e)=>({...hd(n),options:[n,e]});var bd="Arrow",ja=c.forwardRef((n,e)=>{const{children:t,width:o=10,height:r=5,...a}=n;return f.jsx(en.svg,{...a,ref:e,width:o,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:n.asChild?t:f.jsx("polygon",{points:"0,0 30,0 15,10"})})});ja.displayName=bd;var Ed=ja;function vd(n,e=[]){let t=[];function o(a,s){const i=c.createContext(s),l=t.length;t=[...t,s];function d(h){const{scope:u,children:y,...p}=h,g=(u==null?void 0:u[n][l])||i,w=c.useMemo(()=>p,Object.values(p));return f.jsx(g.Provider,{value:w,children:y})}function m(h,u){const y=(u==null?void 0:u[n][l])||i,p=c.useContext(y);if(p)return p;if(s!==void 0)return s;throw new Error(`\`${h}\` must be used within \`${a}\``)}return d.displayName=a+"Provider",[d,m]}const r=()=>{const a=t.map(s=>c.createContext(s));return function(i){const l=(i==null?void 0:i[n])||a;return c.useMemo(()=>({[`__scope${n}`]:{...i,[n]:l}}),[i,l])}};return r.scopeName=n,[o,xd(r,...e)]}function xd(...n){const e=n[0];if(n.length===1)return e;const t=()=>{const o=n.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(a){const s=o.reduce((i,{useScope:l,scopeName:d})=>{const h=l(a)[`__scope${d}`];return{...i,...h}},{});return c.useMemo(()=>({[`__scope${e.scopeName}`]:s}),[s])}};return t.scopeName=e.scopeName,t}function Oa(n){const[e,t]=c.useState(void 0);return ie(()=>{if(n){t({width:n.offsetWidth,height:n.offsetHeight});const o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const a=r[0];let s,i;if("borderBoxSize"in a){const l=a.borderBoxSize,d=Array.isArray(l)?l[0]:l;s=d.inlineSize,i=d.blockSize}else s=n.offsetWidth,i=n.offsetHeight;t({width:s,height:i})});return o.observe(n,{box:"border-box"}),()=>o.unobserve(n)}else t(void 0)},[n]),e}var Na="Popper",[_a,La]=vd(Na),[gm,Ma]=_a(Na),Ha="PopperAnchor",Wa=c.forwardRef((n,e)=>{const{__scopePopper:t,virtualRef:o,...r}=n,a=Ma(Ha,t),s=c.useRef(null),i=an(e,s);return c.useEffect(()=>{a.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:f.jsx(en.div,{...r,ref:i})});Wa.displayName=Ha;var Do="PopperContent",[Ad,Cd]=_a(Do),za=c.forwardRef((n,e)=>{var he,jn,On,Nn,qe,ce;const{__scopePopper:t,side:o="bottom",sideOffset:r=0,align:a="center",alignOffset:s=0,arrowPadding:i=0,avoidCollisions:l=!0,collisionBoundary:d=[],collisionPadding:m=0,sticky:h="partial",hideWhenDetached:u=!1,updatePositionStrategy:y="optimized",onPlaced:p,...g}=n,w=Ma(Do,t),[b,E]=c.useState(null),v=an(e,te=>E(te)),[x,A]=c.useState(null),k=Oa(x),G=(k==null?void 0:k.width)??0,B=(k==null?void 0:k.height)??0,P=o+(a!=="center"?"-"+a:""),W=typeof m=="number"?m:{top:0,right:0,bottom:0,left:0,...m},F=Array.isArray(d)?d:[d],T=F.length>0,L={padding:W,boundary:F.filter(Dd),altBoundary:T},{refs:I,floatingStyles:z,placement:R,isPositioned:M,middlewareData:D}=dd({strategy:"fixed",placement:P,whileElementsMounted:(...te)=>td(...te,{animationFrame:y==="always"}),elements:{reference:w.anchor},middleware:[cd({mainAxis:r+B,alignmentAxis:s}),l&&md({mainAxis:!0,crossAxis:!1,limiter:h==="partial"?fd():void 0,...L}),l&&gd({...L}),wd({...L,apply:({elements:te,rects:je,availableWidth:Je,availableHeight:_n})=>{const{width:Rt,height:Pt}=je.reference,tn=te.floating.style;tn.setProperty("--radix-popper-available-width",`${Je}px`),tn.setProperty("--radix-popper-available-height",`${_n}px`),tn.setProperty("--radix-popper-anchor-width",`${Rt}px`),tn.setProperty("--radix-popper-anchor-height",`${Pt}px`)}}),x&&pd({element:x,padding:i}),kd({arrowWidth:G,arrowHeight:B}),u&&yd({strategy:"referenceHidden",...L})]}),[O,nn]=Va(R),j=kn(p);ie(()=>{M&&(j==null||j())},[M,j]);const Q=(he=D.arrow)==null?void 0:he.x,Y=(jn=D.arrow)==null?void 0:jn.y,ln=((On=D.arrow)==null?void 0:On.centerOffset)!==0,[Bn,J]=c.useState();return ie(()=>{b&&J(window.getComputedStyle(b).zIndex)},[b]),f.jsx("div",{ref:I.setFloating,"data-radix-popper-content-wrapper":"",style:{...z,transform:M?z.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Bn,"--radix-popper-transform-origin":[(Nn=D.transformOrigin)==null?void 0:Nn.x,(qe=D.transformOrigin)==null?void 0:qe.y].join(" "),...((ce=D.hide)==null?void 0:ce.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:n.dir,children:f.jsx(Ad,{scope:t,placedSide:O,onArrowChange:A,arrowX:Q,arrowY:Y,shouldHideArrow:ln,children:f.jsx(en.div,{"data-side":O,"data-align":nn,...g,ref:v,style:{...g.style,animation:M?void 0:"none"}})})})});za.displayName=Do;var Qa="PopperArrow",Sd={top:"bottom",right:"left",bottom:"top",left:"right"},Ya=c.forwardRef(function(e,t){const{__scopePopper:o,...r}=e,a=Cd(Qa,o),s=Sd[a.placedSide];return f.jsx("span",{ref:a.onArrowChange,style:{position:"absolute",left:a.arrowX,top:a.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[a.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[a.placedSide],visibility:a.shouldHideArrow?"hidden":void 0},children:f.jsx(Ed,{...r,ref:t,style:{...r.style,display:"block"}})})});Ya.displayName=Qa;function Dd(n){return n!==null}var kd=n=>({name:"transformOrigin",options:n,fn(e){var w,b,E;const{placement:t,rects:o,middlewareData:r}=e,s=((w=r.arrow)==null?void 0:w.centerOffset)!==0,i=s?0:n.arrowWidth,l=s?0:n.arrowHeight,[d,m]=Va(t),h={start:"0%",center:"50%",end:"100%"}[m],u=(((b=r.arrow)==null?void 0:b.x)??0)+i/2,y=(((E=r.arrow)==null?void 0:E.y)??0)+l/2;let p="",g="";return d==="bottom"?(p=s?h:`${u}px`,g=`${-l}px`):d==="top"?(p=s?h:`${u}px`,g=`${o.floating.height+l}px`):d==="right"?(p=`${-l}px`,g=s?h:`${y}px`):d==="left"&&(p=`${o.floating.width+l}px`,g=s?h:`${y}px`),{data:{x:p,y:g}}}});function Va(n){const[e,t="center"]=n.split("-");return[e,t]}var Id=Wa,Gd=za,Bd=Ya,[St,wm]=mo("Tooltip",[La]),ko=La(),$a="TooltipProvider",Td=700,lr="tooltip.open",[Fd,Ua]=St($a),Xa=n=>{const{__scopeTooltip:e,delayDuration:t=Td,skipDelayDuration:o=300,disableHoverableContent:r=!1,children:a}=n,[s,i]=c.useState(!0),l=c.useRef(!1),d=c.useRef(0);return c.useEffect(()=>{const m=d.current;return()=>window.clearTimeout(m)},[]),f.jsx(Fd,{scope:e,isOpenDelayed:s,delayDuration:t,onOpen:c.useCallback(()=>{window.clearTimeout(d.current),i(!1)},[]),onClose:c.useCallback(()=>{window.clearTimeout(d.current),d.current=window.setTimeout(()=>i(!0),o)},[o]),isPointerInTransitRef:l,onPointerInTransitChange:c.useCallback(m=>{l.current=m},[]),disableHoverableContent:r,children:a})};Xa.displayName=$a;var Ka="Tooltip",[ym,Dt]=St(Ka),oo="TooltipTrigger",Rd=c.forwardRef((n,e)=>{const{__scopeTooltip:t,...o}=n,r=Dt(oo,t),a=Ua(oo,t),s=ko(t),i=c.useRef(null),l=an(e,i,r.onTriggerChange),d=c.useRef(!1),m=c.useRef(!1),h=c.useCallback(()=>d.current=!1,[]);return c.useEffect(()=>()=>document.removeEventListener("pointerup",h),[h]),f.jsx(Id,{asChild:!0,...s,children:f.jsx(en.button,{"aria-describedby":r.open?r.contentId:void 0,"data-state":r.stateAttribute,...o,ref:l,onPointerMove:K(n.onPointerMove,u=>{u.pointerType!=="touch"&&!m.current&&!a.isPointerInTransitRef.current&&(r.onTriggerEnter(),m.current=!0)}),onPointerLeave:K(n.onPointerLeave,()=>{r.onTriggerLeave(),m.current=!1}),onPointerDown:K(n.onPointerDown,()=>{d.current=!0,document.addEventListener("pointerup",h,{once:!0})}),onFocus:K(n.onFocus,()=>{d.current||r.onOpen()}),onBlur:K(n.onBlur,r.onClose),onClick:K(n.onClick,r.onClose)})})});Rd.displayName=oo;var Pd="TooltipPortal",[pm,jd]=St(Pd,{forceMount:void 0}),Ge="TooltipContent",qa=c.forwardRef((n,e)=>{const t=jd(Ge,n.__scopeTooltip),{forceMount:o=t.forceMount,side:r="top",...a}=n,s=Dt(Ge,n.__scopeTooltip);return f.jsx(go,{present:o||s.open,children:s.disableHoverableContent?f.jsx(Ja,{side:r,...a,ref:e}):f.jsx(Od,{side:r,...a,ref:e})})}),Od=c.forwardRef((n,e)=>{const t=Dt(Ge,n.__scopeTooltip),o=Ua(Ge,n.__scopeTooltip),r=c.useRef(null),a=an(e,r),[s,i]=c.useState(null),{trigger:l,onClose:d}=t,m=r.current,{onPointerInTransitChange:h}=o,u=c.useCallback(()=>{i(null),h(!1)},[h]),y=c.useCallback((p,g)=>{const w=p.currentTarget,b={x:p.clientX,y:p.clientY},E=Md(b,w.getBoundingClientRect()),v=Hd(b,E),x=Wd(g.getBoundingClientRect()),A=Qd([...v,...x]);i(A),h(!0)},[h]);return c.useEffect(()=>()=>u(),[u]),c.useEffect(()=>{if(l&&m){const p=w=>y(w,m),g=w=>y(w,l);return l.addEventListener("pointerleave",p),m.addEventListener("pointerleave",g),()=>{l.removeEventListener("pointerleave",p),m.removeEventListener("pointerleave",g)}}},[l,m,y,u]),c.useEffect(()=>{if(s){const p=g=>{const w=g.target,b={x:g.clientX,y:g.clientY},E=(l==null?void 0:l.contains(w))||(m==null?void 0:m.contains(w)),v=!zd(b,s);E?u():v&&(u(),d())};return document.addEventListener("pointermove",p),()=>document.removeEventListener("pointermove",p)}},[l,m,s,d,u]),f.jsx(Ja,{...n,ref:a})}),[Nd,_d]=St(Ka,{isInside:!1}),Ja=c.forwardRef((n,e)=>{const{__scopeTooltip:t,children:o,"aria-label":r,onEscapeKeyDown:a,onPointerDownOutside:s,...i}=n,l=Dt(Ge,t),d=ko(t),{onClose:m}=l;return c.useEffect(()=>(document.addEventListener(lr,m),()=>document.removeEventListener(lr,m)),[m]),c.useEffect(()=>{if(l.trigger){const h=u=>{const y=u.target;y!=null&&y.contains(l.trigger)&&m()};return window.addEventListener("scroll",h,{capture:!0}),()=>window.removeEventListener("scroll",h,{capture:!0})}},[l.trigger,m]),f.jsx(fo,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:s,onFocusOutside:h=>h.preventDefault(),onDismiss:m,children:f.jsxs(Gd,{"data-state":l.stateAttribute,...d,...i,ref:e,style:{...i.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[f.jsx(Mr,{children:o}),f.jsx(Nd,{scope:t,isInside:!0,children:f.jsx(Qi,{id:l.contentId,role:"tooltip",children:r||o})})]})})});qa.displayName=Ge;var Za="TooltipArrow",Ld=c.forwardRef((n,e)=>{const{__scopeTooltip:t,...o}=n,r=ko(t);return _d(Za,t).isInside?null:f.jsx(Bd,{...r,...o,ref:e})});Ld.displayName=Za;function Md(n,e){const t=Math.abs(e.top-n.y),o=Math.abs(e.bottom-n.y),r=Math.abs(e.right-n.x),a=Math.abs(e.left-n.x);switch(Math.min(t,o,r,a)){case a:return"left";case r:return"right";case t:return"top";case o:return"bottom";default:throw new Error("unreachable")}}function Hd(n,e,t=5){const o=[];switch(e){case"top":o.push({x:n.x-t,y:n.y+t},{x:n.x+t,y:n.y+t});break;case"bottom":o.push({x:n.x-t,y:n.y-t},{x:n.x+t,y:n.y-t});break;case"left":o.push({x:n.x+t,y:n.y-t},{x:n.x+t,y:n.y+t});break;case"right":o.push({x:n.x-t,y:n.y-t},{x:n.x-t,y:n.y+t});break}return o}function Wd(n){const{top:e,right:t,bottom:o,left:r}=n;return[{x:r,y:e},{x:t,y:e},{x:t,y:o},{x:r,y:o}]}function zd(n,e){const{x:t,y:o}=n;let r=!1;for(let a=0,s=e.length-1;a<e.length;s=a++){const i=e[a].x,l=e[a].y,d=e[s].x,m=e[s].y;l>o!=m>o&&t<(d-i)*(o-l)/(m-l)+i&&(r=!r)}return r}function Qd(n){const e=n.slice();return e.sort((t,o)=>t.x<o.x?-1:t.x>o.x?1:t.y<o.y?-1:t.y>o.y?1:0),Yd(e)}function Yd(n){if(n.length<=1)return n.slice();const e=[];for(let o=0;o<n.length;o++){const r=n[o];for(;e.length>=2;){const a=e[e.length-1],s=e[e.length-2];if((a.x-s.x)*(r.y-s.y)>=(a.y-s.y)*(r.x-s.x))e.pop();else break}e.push(r)}e.pop();const t=[];for(let o=n.length-1;o>=0;o--){const r=n[o];for(;t.length>=2;){const a=t[t.length-1],s=t[t.length-2];if((a.x-s.x)*(r.y-s.y)>=(a.y-s.y)*(r.x-s.x))t.pop();else break}t.push(r)}return t.pop(),e.length===1&&t.length===1&&e[0].x===t[0].x&&e[0].y===t[0].y?e:e.concat(t)}var Vd=Xa,ns=qa;const $d=Vd,Ud=c.forwardRef(({className:n,sideOffset:e=4,...t},o)=>f.jsx(ns,{ref:o,sideOffset:e,className:sn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...t}));Ud.displayName=ns.displayName;var kt=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(n){return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},It=typeof window>"u"||"Deno"in globalThis;function pn(){}function Xd(n,e){return typeof n=="function"?n(e):n}function Kd(n){return typeof n=="number"&&n>=0&&n!==1/0}function qd(n,e){return Math.max(n+(e||0)-Date.now(),0)}function ur(n,e){return typeof n=="function"?n(e):n}function Jd(n,e){return typeof n=="function"?n(e):n}function dr(n,e){const{type:t="all",exact:o,fetchStatus:r,predicate:a,queryKey:s,stale:i}=n;if(s){if(o){if(e.queryHash!==Io(s,e.options))return!1}else if(!ze(e.queryKey,s))return!1}if(t!=="all"){const l=e.isActive();if(t==="active"&&!l||t==="inactive"&&l)return!1}return!(typeof i=="boolean"&&e.isStale()!==i||r&&r!==e.state.fetchStatus||a&&!a(e))}function hr(n,e){const{exact:t,status:o,predicate:r,mutationKey:a}=n;if(a){if(!e.options.mutationKey)return!1;if(t){if(We(e.options.mutationKey)!==We(a))return!1}else if(!ze(e.options.mutationKey,a))return!1}return!(o&&e.state.status!==o||r&&!r(e))}function Io(n,e){return((e==null?void 0:e.queryKeyHashFn)||We)(n)}function We(n){return JSON.stringify(n,(e,t)=>ro(t)?Object.keys(t).sort().reduce((o,r)=>(o[r]=t[r],o),{}):t)}function ze(n,e){return n===e?!0:typeof n!=typeof e?!1:n&&e&&typeof n=="object"&&typeof e=="object"?!Object.keys(e).some(t=>!ze(n[t],e[t])):!1}function es(n,e){if(n===e)return n;const t=cr(n)&&cr(e);if(t||ro(n)&&ro(e)){const o=t?n:Object.keys(n),r=o.length,a=t?e:Object.keys(e),s=a.length,i=t?[]:{};let l=0;for(let d=0;d<s;d++){const m=t?d:a[d];(!t&&o.includes(m)||t)&&n[m]===void 0&&e[m]===void 0?(i[m]=void 0,l++):(i[m]=es(n[m],e[m]),i[m]===n[m]&&n[m]!==void 0&&l++)}return r===s&&l===r?n:i}return e}function cr(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function ro(n){if(!mr(n))return!1;const e=n.constructor;if(e===void 0)return!0;const t=e.prototype;return!(!mr(t)||!t.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(n)!==Object.prototype)}function mr(n){return Object.prototype.toString.call(n)==="[object Object]"}function Zd(n){return new Promise(e=>{setTimeout(e,n)})}function nh(n,e,t){return typeof t.structuralSharing=="function"?t.structuralSharing(n,e):t.structuralSharing!==!1?es(n,e):e}function eh(n,e,t=0){const o=[...n,e];return t&&o.length>t?o.slice(1):o}function th(n,e,t=0){const o=[e,...n];return t&&o.length>t?o.slice(0,-1):o}var Go=Symbol();function ts(n,e){return!n.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!n.queryFn||n.queryFn===Go?()=>Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)):n.queryFn}var oe,zn,be,Dr,oh=(Dr=class extends kt{constructor(){super();V(this,oe);V(this,zn);V(this,be);H(this,be,e=>{if(!It&&window.addEventListener){const t=()=>e();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}})}onSubscribe(){C(this,zn)||this.setEventListener(C(this,be))}onUnsubscribe(){var e;this.hasListeners()||((e=C(this,zn))==null||e.call(this),H(this,zn,void 0))}setEventListener(e){var t;H(this,be,e),(t=C(this,zn))==null||t.call(this),H(this,zn,e(o=>{typeof o=="boolean"?this.setFocused(o):this.onFocus()}))}setFocused(e){C(this,oe)!==e&&(H(this,oe,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){var e;return typeof C(this,oe)=="boolean"?C(this,oe):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},oe=new WeakMap,zn=new WeakMap,be=new WeakMap,Dr),os=new oh,Ee,Qn,ve,kr,rh=(kr=class extends kt{constructor(){super();V(this,Ee,!0);V(this,Qn);V(this,ve);H(this,ve,e=>{if(!It&&window.addEventListener){const t=()=>e(!0),o=()=>e(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",o,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",o)}}})}onSubscribe(){C(this,Qn)||this.setEventListener(C(this,ve))}onUnsubscribe(){var e;this.hasListeners()||((e=C(this,Qn))==null||e.call(this),H(this,Qn,void 0))}setEventListener(e){var t;H(this,ve,e),(t=C(this,Qn))==null||t.call(this),H(this,Qn,e(this.setOnline.bind(this)))}setOnline(e){C(this,Ee)!==e&&(H(this,Ee,e),this.listeners.forEach(o=>{o(e)}))}isOnline(){return C(this,Ee)}},Ee=new WeakMap,Qn=new WeakMap,ve=new WeakMap,kr),ft=new rh;function ah(){let n,e;const t=new Promise((r,a)=>{n=r,e=a});t.status="pending",t.catch(()=>{});function o(r){Object.assign(t,r),delete t.resolve,delete t.reject}return t.resolve=r=>{o({status:"fulfilled",value:r}),n(r)},t.reject=r=>{o({status:"rejected",reason:r}),e(r)},t}function sh(n){return Math.min(1e3*2**n,3e4)}function rs(n){return(n??"online")==="online"?ft.isOnline():!0}var as=class extends Error{constructor(n){super("CancelledError"),this.revert=n==null?void 0:n.revert,this.silent=n==null?void 0:n.silent}};function Qt(n){return n instanceof as}function ss(n){let e=!1,t=0,o=!1,r;const a=ah(),s=g=>{var w;o||(u(new as(g)),(w=n.abort)==null||w.call(n))},i=()=>{e=!0},l=()=>{e=!1},d=()=>os.isFocused()&&(n.networkMode==="always"||ft.isOnline())&&n.canRun(),m=()=>rs(n.networkMode)&&n.canRun(),h=g=>{var w;o||(o=!0,(w=n.onSuccess)==null||w.call(n,g),r==null||r(),a.resolve(g))},u=g=>{var w;o||(o=!0,(w=n.onError)==null||w.call(n,g),r==null||r(),a.reject(g))},y=()=>new Promise(g=>{var w;r=b=>{(o||d())&&g(b)},(w=n.onPause)==null||w.call(n)}).then(()=>{var g;r=void 0,o||(g=n.onContinue)==null||g.call(n)}),p=()=>{if(o)return;let g;const w=t===0?n.initialPromise:void 0;try{g=w??n.fn()}catch(b){g=Promise.reject(b)}Promise.resolve(g).then(h).catch(b=>{var k;if(o)return;const E=n.retry??(It?0:3),v=n.retryDelay??sh,x=typeof v=="function"?v(t,b):v,A=E===!0||typeof E=="number"&&t<E||typeof E=="function"&&E(t,b);if(e||!A){u(b);return}t++,(k=n.onFail)==null||k.call(n,t,b),Zd(x).then(()=>d()?void 0:y()).then(()=>{e?u(b):p()})})};return{promise:a,cancel:s,continue:()=>(r==null||r(),a),cancelRetry:i,continueRetry:l,canStart:m,start:()=>(m()?p():y().then(p),a)}}function ih(){let n=[],e=0,t=i=>{i()},o=i=>{i()},r=i=>setTimeout(i,0);const a=i=>{e?n.push(i):r(()=>{t(i)})},s=()=>{const i=n;n=[],i.length&&r(()=>{o(()=>{i.forEach(l=>{t(l)})})})};return{batch:i=>{let l;e++;try{l=i()}finally{e--,e||s()}return l},batchCalls:i=>(...l)=>{a(()=>{i(...l)})},schedule:a,setNotifyFunction:i=>{t=i},setBatchNotifyFunction:i=>{o=i},setScheduler:i=>{r=i}}}var dn=ih(),re,Ir,is=(Ir=class{constructor(){V(this,re)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Kd(this.gcTime)&&H(this,re,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(n){this.gcTime=Math.max(this.gcTime||0,n??(It?1/0:5*60*1e3))}clearGcTimeout(){C(this,re)&&(clearTimeout(C(this,re)),H(this,re,void 0))}},re=new WeakMap,Ir),xe,Ae,yn,rn,$e,ae,bn,Fn,Gr,lh=(Gr=class extends is{constructor(e){super();V(this,bn);V(this,xe);V(this,Ae);V(this,yn);V(this,rn);V(this,$e);V(this,ae);H(this,ae,!1),H(this,$e,e.defaultOptions),this.setOptions(e.options),this.observers=[],H(this,yn,e.cache),this.queryKey=e.queryKey,this.queryHash=e.queryHash,H(this,xe,dh(this.options)),this.state=e.state??C(this,xe),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=C(this,rn))==null?void 0:e.promise}setOptions(e){this.options={...C(this,$e),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&C(this,yn).remove(this)}setData(e,t){const o=nh(this.state.data,e,this.options);return on(this,bn,Fn).call(this,{data:o,type:"success",dataUpdatedAt:t==null?void 0:t.updatedAt,manual:t==null?void 0:t.manual}),o}setState(e,t){on(this,bn,Fn).call(this,{type:"setState",state:e,setStateOptions:t})}cancel(e){var o,r;const t=(o=C(this,rn))==null?void 0:o.promise;return(r=C(this,rn))==null||r.cancel(e),t?t.then(pn).catch(pn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(C(this,xe))}isActive(){return this.observers.some(e=>Jd(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Go||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!qd(this.state.dataUpdatedAt,e)}onFocus(){var t;const e=this.observers.find(o=>o.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(t=C(this,rn))==null||t.continue()}onOnline(){var t;const e=this.observers.find(o=>o.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(t=C(this,rn))==null||t.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),C(this,yn).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(C(this,rn)&&(C(this,ae)?C(this,rn).cancel({revert:!0}):C(this,rn).cancelRetry()),this.scheduleGc()),C(this,yn).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||on(this,bn,Fn).call(this,{type:"invalidate"})}fetch(e,t){var l,d,m;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(t!=null&&t.cancelRefetch))this.cancel({silent:!0});else if(C(this,rn))return C(this,rn).continueRetry(),C(this,rn).promise}if(e&&this.setOptions(e),!this.options.queryFn){const h=this.observers.find(u=>u.options.queryFn);h&&this.setOptions(h.options)}const o=new AbortController,r=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>(H(this,ae,!0),o.signal)})},a=()=>{const h=ts(this.options,t),u={queryKey:this.queryKey,meta:this.meta};return r(u),H(this,ae,!1),this.options.persister?this.options.persister(h,u,this):h(u)},s={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:a};r(s),(l=this.options.behavior)==null||l.onFetch(s,this),H(this,Ae,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((d=s.fetchOptions)==null?void 0:d.meta))&&on(this,bn,Fn).call(this,{type:"fetch",meta:(m=s.fetchOptions)==null?void 0:m.meta});const i=h=>{var u,y,p,g;Qt(h)&&h.silent||on(this,bn,Fn).call(this,{type:"error",error:h}),Qt(h)||((y=(u=C(this,yn).config).onError)==null||y.call(u,h,this),(g=(p=C(this,yn).config).onSettled)==null||g.call(p,this.state.data,h,this)),this.scheduleGc()};return H(this,rn,ss({initialPromise:t==null?void 0:t.initialPromise,fn:s.fetchFn,abort:o.abort.bind(o),onSuccess:h=>{var u,y,p,g;if(h===void 0){i(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(h)}catch(w){i(w);return}(y=(u=C(this,yn).config).onSuccess)==null||y.call(u,h,this),(g=(p=C(this,yn).config).onSettled)==null||g.call(p,h,this.state.error,this),this.scheduleGc()},onError:i,onFail:(h,u)=>{on(this,bn,Fn).call(this,{type:"failed",failureCount:h,error:u})},onPause:()=>{on(this,bn,Fn).call(this,{type:"pause"})},onContinue:()=>{on(this,bn,Fn).call(this,{type:"continue"})},retry:s.options.retry,retryDelay:s.options.retryDelay,networkMode:s.options.networkMode,canRun:()=>!0})),C(this,rn).start()}},xe=new WeakMap,Ae=new WeakMap,yn=new WeakMap,rn=new WeakMap,$e=new WeakMap,ae=new WeakMap,bn=new WeakSet,Fn=function(e){const t=o=>{switch(e.type){case"failed":return{...o,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...o,fetchStatus:"paused"};case"continue":return{...o,fetchStatus:"fetching"};case"fetch":return{...o,...uh(o.data,this.options),fetchMeta:e.meta??null};case"success":return{...o,data:e.data,dataUpdateCount:o.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const r=e.error;return Qt(r)&&r.revert&&C(this,Ae)?{...C(this,Ae),fetchStatus:"idle"}:{...o,error:r,errorUpdateCount:o.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:o.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...o,isInvalidated:!0};case"setState":return{...o,...e.state}}};this.state=t(this.state),dn.batch(()=>{this.observers.forEach(o=>{o.onQueryUpdate()}),C(this,yn).notify({query:this,type:"updated",action:e})})},Gr);function uh(n,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:rs(e.networkMode)?"fetching":"paused",...n===void 0&&{error:null,status:"pending"}}}function dh(n){const e=typeof n.initialData=="function"?n.initialData():n.initialData,t=e!==void 0,o=t?typeof n.initialDataUpdatedAt=="function"?n.initialDataUpdatedAt():n.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:t?o??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:t?"success":"pending",fetchStatus:"idle"}}var Cn,Br,hh=(Br=class extends kt{constructor(e={}){super();V(this,Cn);this.config=e,H(this,Cn,new Map)}build(e,t,o){const r=t.queryKey,a=t.queryHash??Io(r,t);let s=this.get(a);return s||(s=new lh({cache:this,queryKey:r,queryHash:a,options:e.defaultQueryOptions(t),state:o,defaultOptions:e.getQueryDefaults(r)}),this.add(s)),s}add(e){C(this,Cn).has(e.queryHash)||(C(this,Cn).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const t=C(this,Cn).get(e.queryHash);t&&(e.destroy(),t===e&&C(this,Cn).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){dn.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return C(this,Cn).get(e)}getAll(){return[...C(this,Cn).values()]}find(e){const t={exact:!0,...e};return this.getAll().find(o=>dr(t,o))}findAll(e={}){const t=this.getAll();return Object.keys(e).length>0?t.filter(o=>dr(e,o)):t}notify(e){dn.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){dn.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){dn.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Cn=new WeakMap,Br),Sn,un,se,Dn,Wn,Tr,ch=(Tr=class extends is{constructor(e){super();V(this,Dn);V(this,Sn);V(this,un);V(this,se);this.mutationId=e.mutationId,H(this,un,e.mutationCache),H(this,Sn,[]),this.state=e.state||mh(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){C(this,Sn).includes(e)||(C(this,Sn).push(e),this.clearGcTimeout(),C(this,un).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){H(this,Sn,C(this,Sn).filter(t=>t!==e)),this.scheduleGc(),C(this,un).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){C(this,Sn).length||(this.state.status==="pending"?this.scheduleGc():C(this,un).remove(this))}continue(){var e;return((e=C(this,se))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var r,a,s,i,l,d,m,h,u,y,p,g,w,b,E,v,x,A,k,G;H(this,se,ss({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(B,P)=>{on(this,Dn,Wn).call(this,{type:"failed",failureCount:B,error:P})},onPause:()=>{on(this,Dn,Wn).call(this,{type:"pause"})},onContinue:()=>{on(this,Dn,Wn).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>C(this,un).canRun(this)}));const t=this.state.status==="pending",o=!C(this,se).canStart();try{if(!t){on(this,Dn,Wn).call(this,{type:"pending",variables:e,isPaused:o}),await((a=(r=C(this,un).config).onMutate)==null?void 0:a.call(r,e,this));const P=await((i=(s=this.options).onMutate)==null?void 0:i.call(s,e));P!==this.state.context&&on(this,Dn,Wn).call(this,{type:"pending",context:P,variables:e,isPaused:o})}const B=await C(this,se).start();return await((d=(l=C(this,un).config).onSuccess)==null?void 0:d.call(l,B,e,this.state.context,this)),await((h=(m=this.options).onSuccess)==null?void 0:h.call(m,B,e,this.state.context)),await((y=(u=C(this,un).config).onSettled)==null?void 0:y.call(u,B,null,this.state.variables,this.state.context,this)),await((g=(p=this.options).onSettled)==null?void 0:g.call(p,B,null,e,this.state.context)),on(this,Dn,Wn).call(this,{type:"success",data:B}),B}catch(B){try{throw await((b=(w=C(this,un).config).onError)==null?void 0:b.call(w,B,e,this.state.context,this)),await((v=(E=this.options).onError)==null?void 0:v.call(E,B,e,this.state.context)),await((A=(x=C(this,un).config).onSettled)==null?void 0:A.call(x,void 0,B,this.state.variables,this.state.context,this)),await((G=(k=this.options).onSettled)==null?void 0:G.call(k,void 0,B,e,this.state.context)),B}finally{on(this,Dn,Wn).call(this,{type:"error",error:B})}}finally{C(this,un).runNext(this)}}},Sn=new WeakMap,un=new WeakMap,se=new WeakMap,Dn=new WeakSet,Wn=function(e){const t=o=>{switch(e.type){case"failed":return{...o,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...o,isPaused:!0};case"continue":return{...o,isPaused:!1};case"pending":return{...o,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...o,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...o,data:void 0,error:e.error,failureCount:o.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=t(this.state),dn.batch(()=>{C(this,Sn).forEach(o=>{o.onMutationUpdate(e)}),C(this,un).notify({mutation:this,type:"updated",action:e})})},Tr);function mh(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var hn,Ue,Fr,fh=(Fr=class extends kt{constructor(e={}){super();V(this,hn);V(this,Ue);this.config=e,H(this,hn,new Map),H(this,Ue,Date.now())}build(e,t,o){const r=new ch({mutationCache:this,mutationId:++et(this,Ue)._,options:e.defaultMutationOptions(t),state:o});return this.add(r),r}add(e){const t=st(e),o=C(this,hn).get(t)??[];o.push(e),C(this,hn).set(t,o),this.notify({type:"added",mutation:e})}remove(e){var o;const t=st(e);if(C(this,hn).has(t)){const r=(o=C(this,hn).get(t))==null?void 0:o.filter(a=>a!==e);r&&(r.length===0?C(this,hn).delete(t):C(this,hn).set(t,r))}this.notify({type:"removed",mutation:e})}canRun(e){var o;const t=(o=C(this,hn).get(st(e)))==null?void 0:o.find(r=>r.state.status==="pending");return!t||t===e}runNext(e){var o;const t=(o=C(this,hn).get(st(e)))==null?void 0:o.find(r=>r!==e&&r.state.isPaused);return(t==null?void 0:t.continue())??Promise.resolve()}clear(){dn.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...C(this,hn).values()].flat()}find(e){const t={exact:!0,...e};return this.getAll().find(o=>hr(t,o))}findAll(e={}){return this.getAll().filter(t=>hr(e,t))}notify(e){dn.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){const e=this.getAll().filter(t=>t.state.isPaused);return dn.batch(()=>Promise.all(e.map(t=>t.continue().catch(pn))))}},hn=new WeakMap,Ue=new WeakMap,Fr);function st(n){var e;return((e=n.options.scope)==null?void 0:e.id)??String(n.mutationId)}function fr(n){return{onFetch:(e,t)=>{var m,h,u,y,p;const o=e.options,r=(u=(h=(m=e.fetchOptions)==null?void 0:m.meta)==null?void 0:h.fetchMore)==null?void 0:u.direction,a=((y=e.state.data)==null?void 0:y.pages)||[],s=((p=e.state.data)==null?void 0:p.pageParams)||[];let i={pages:[],pageParams:[]},l=0;const d=async()=>{let g=!1;const w=v=>{Object.defineProperty(v,"signal",{enumerable:!0,get:()=>(e.signal.aborted?g=!0:e.signal.addEventListener("abort",()=>{g=!0}),e.signal)})},b=ts(e.options,e.fetchOptions),E=async(v,x,A)=>{if(g)return Promise.reject();if(x==null&&v.pages.length)return Promise.resolve(v);const k={queryKey:e.queryKey,pageParam:x,direction:A?"backward":"forward",meta:e.options.meta};w(k);const G=await b(k),{maxPages:B}=e.options,P=A?th:eh;return{pages:P(v.pages,G,B),pageParams:P(v.pageParams,x,B)}};if(r&&a.length){const v=r==="backward",x=v?gh:gr,A={pages:a,pageParams:s},k=x(o,A);i=await E(A,k,v)}else{const v=n??a.length;do{const x=l===0?s[0]??o.initialPageParam:gr(o,i);if(l>0&&x==null)break;i=await E(i,x),l++}while(l<v)}return i};e.options.persister?e.fetchFn=()=>{var g,w;return(w=(g=e.options).persister)==null?void 0:w.call(g,d,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},t)}:e.fetchFn=d}}}function gr(n,{pages:e,pageParams:t}){const o=e.length-1;return e.length>0?n.getNextPageParam(e[o],e,t[o],t):void 0}function gh(n,{pages:e,pageParams:t}){var o;return e.length>0?(o=n.getPreviousPageParam)==null?void 0:o.call(n,e[0],e,t[0],t):void 0}var q,Yn,Vn,Ce,Se,$n,De,ke,Rr,wh=(Rr=class{constructor(n={}){V(this,q);V(this,Yn);V(this,Vn);V(this,Ce);V(this,Se);V(this,$n);V(this,De);V(this,ke);H(this,q,n.queryCache||new hh),H(this,Yn,n.mutationCache||new fh),H(this,Vn,n.defaultOptions||{}),H(this,Ce,new Map),H(this,Se,new Map),H(this,$n,0)}mount(){et(this,$n)._++,C(this,$n)===1&&(H(this,De,os.subscribe(async n=>{n&&(await this.resumePausedMutations(),C(this,q).onFocus())})),H(this,ke,ft.subscribe(async n=>{n&&(await this.resumePausedMutations(),C(this,q).onOnline())})))}unmount(){var n,e;et(this,$n)._--,C(this,$n)===0&&((n=C(this,De))==null||n.call(this),H(this,De,void 0),(e=C(this,ke))==null||e.call(this),H(this,ke,void 0))}isFetching(n){return C(this,q).findAll({...n,fetchStatus:"fetching"}).length}isMutating(n){return C(this,Yn).findAll({...n,status:"pending"}).length}getQueryData(n){var t;const e=this.defaultQueryOptions({queryKey:n});return(t=C(this,q).get(e.queryHash))==null?void 0:t.state.data}ensureQueryData(n){const e=this.getQueryData(n.queryKey);if(e===void 0)return this.fetchQuery(n);{const t=this.defaultQueryOptions(n),o=C(this,q).build(this,t);return n.revalidateIfStale&&o.isStaleByTime(ur(t.staleTime,o))&&this.prefetchQuery(t),Promise.resolve(e)}}getQueriesData(n){return C(this,q).findAll(n).map(({queryKey:e,state:t})=>{const o=t.data;return[e,o]})}setQueryData(n,e,t){const o=this.defaultQueryOptions({queryKey:n}),r=C(this,q).get(o.queryHash),a=r==null?void 0:r.state.data,s=Xd(e,a);if(s!==void 0)return C(this,q).build(this,o).setData(s,{...t,manual:!0})}setQueriesData(n,e,t){return dn.batch(()=>C(this,q).findAll(n).map(({queryKey:o})=>[o,this.setQueryData(o,e,t)]))}getQueryState(n){var t;const e=this.defaultQueryOptions({queryKey:n});return(t=C(this,q).get(e.queryHash))==null?void 0:t.state}removeQueries(n){const e=C(this,q);dn.batch(()=>{e.findAll(n).forEach(t=>{e.remove(t)})})}resetQueries(n,e){const t=C(this,q),o={type:"active",...n};return dn.batch(()=>(t.findAll(n).forEach(r=>{r.reset()}),this.refetchQueries(o,e)))}cancelQueries(n={},e={}){const t={revert:!0,...e},o=dn.batch(()=>C(this,q).findAll(n).map(r=>r.cancel(t)));return Promise.all(o).then(pn).catch(pn)}invalidateQueries(n={},e={}){return dn.batch(()=>{if(C(this,q).findAll(n).forEach(o=>{o.invalidate()}),n.refetchType==="none")return Promise.resolve();const t={...n,type:n.refetchType??n.type??"active"};return this.refetchQueries(t,e)})}refetchQueries(n={},e){const t={...e,cancelRefetch:(e==null?void 0:e.cancelRefetch)??!0},o=dn.batch(()=>C(this,q).findAll(n).filter(r=>!r.isDisabled()).map(r=>{let a=r.fetch(void 0,t);return t.throwOnError||(a=a.catch(pn)),r.state.fetchStatus==="paused"?Promise.resolve():a}));return Promise.all(o).then(pn)}fetchQuery(n){const e=this.defaultQueryOptions(n);e.retry===void 0&&(e.retry=!1);const t=C(this,q).build(this,e);return t.isStaleByTime(ur(e.staleTime,t))?t.fetch(e):Promise.resolve(t.state.data)}prefetchQuery(n){return this.fetchQuery(n).then(pn).catch(pn)}fetchInfiniteQuery(n){return n.behavior=fr(n.pages),this.fetchQuery(n)}prefetchInfiniteQuery(n){return this.fetchInfiniteQuery(n).then(pn).catch(pn)}ensureInfiniteQueryData(n){return n.behavior=fr(n.pages),this.ensureQueryData(n)}resumePausedMutations(){return ft.isOnline()?C(this,Yn).resumePausedMutations():Promise.resolve()}getQueryCache(){return C(this,q)}getMutationCache(){return C(this,Yn)}getDefaultOptions(){return C(this,Vn)}setDefaultOptions(n){H(this,Vn,n)}setQueryDefaults(n,e){C(this,Ce).set(We(n),{queryKey:n,defaultOptions:e})}getQueryDefaults(n){const e=[...C(this,Ce).values()];let t={};return e.forEach(o=>{ze(n,o.queryKey)&&(t={...t,...o.defaultOptions})}),t}setMutationDefaults(n,e){C(this,Se).set(We(n),{mutationKey:n,defaultOptions:e})}getMutationDefaults(n){const e=[...C(this,Se).values()];let t={};return e.forEach(o=>{ze(n,o.mutationKey)&&(t={...t,...o.defaultOptions})}),t}defaultQueryOptions(n){if(n._defaulted)return n;const e={...C(this,Vn).queries,...this.getQueryDefaults(n.queryKey),...n,_defaulted:!0};return e.queryHash||(e.queryHash=Io(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.enabled!==!0&&e.queryFn===Go&&(e.enabled=!1),e}defaultMutationOptions(n){return n!=null&&n._defaulted?n:{...C(this,Vn).mutations,...(n==null?void 0:n.mutationKey)&&this.getMutationDefaults(n.mutationKey),...n,_defaulted:!0}}clear(){C(this,q).clear(),C(this,Yn).clear()}},q=new WeakMap,Yn=new WeakMap,Vn=new WeakMap,Ce=new WeakMap,Se=new WeakMap,$n=new WeakMap,De=new WeakMap,ke=new WeakMap,Rr),yh=c.createContext(void 0),ph=({client:n,children:e})=>(c.useEffect(()=>(n.mount(),()=>{n.unmount()}),[n]),f.jsx(yh.Provider,{value:n,children:e}));/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qe(){return Qe=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},Qe.apply(this,arguments)}var Un;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Un||(Un={}));const wr="popstate";function bh(n){n===void 0&&(n={});function e(o,r){let{pathname:a,search:s,hash:i}=o.location;return ao("",{pathname:a,search:s,hash:i},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(o,r){return typeof r=="string"?r:gt(r)}return vh(e,t,null,n)}function Z(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ls(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Eh(){return Math.random().toString(36).substr(2,8)}function yr(n,e){return{usr:n.state,key:n.key,idx:e}}function ao(n,e,t,o){return t===void 0&&(t=null),Qe({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Re(e):e,{state:t,key:e&&e.key||o||Eh()})}function gt(n){let{pathname:e="/",search:t="",hash:o=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),o&&o!=="#"&&(e+=o.charAt(0)==="#"?o:"#"+o),e}function Re(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let o=n.indexOf("?");o>=0&&(e.search=n.substr(o),n=n.substr(0,o)),n&&(e.pathname=n)}return e}function vh(n,e,t,o){o===void 0&&(o={});let{window:r=document.defaultView,v5Compat:a=!1}=o,s=r.history,i=Un.Pop,l=null,d=m();d==null&&(d=0,s.replaceState(Qe({},s.state,{idx:d}),""));function m(){return(s.state||{idx:null}).idx}function h(){i=Un.Pop;let w=m(),b=w==null?null:w-d;d=w,l&&l({action:i,location:g.location,delta:b})}function u(w,b){i=Un.Push;let E=ao(g.location,w,b);d=m()+1;let v=yr(E,d),x=g.createHref(E);try{s.pushState(v,"",x)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;r.location.assign(x)}a&&l&&l({action:i,location:g.location,delta:1})}function y(w,b){i=Un.Replace;let E=ao(g.location,w,b);d=m();let v=yr(E,d),x=g.createHref(E);s.replaceState(v,"",x),a&&l&&l({action:i,location:g.location,delta:0})}function p(w){let b=r.location.origin!=="null"?r.location.origin:r.location.href,E=typeof w=="string"?w:gt(w);return E=E.replace(/ $/,"%20"),Z(b,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,b)}let g={get action(){return i},get location(){return n(r,s)},listen(w){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(wr,h),l=w,()=>{r.removeEventListener(wr,h),l=null}},createHref(w){return e(r,w)},createURL:p,encodeLocation(w){let b=p(w);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:u,replace:y,go(w){return s.go(w)}};return g}var pr;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(pr||(pr={}));function xh(n,e,t){return t===void 0&&(t="/"),Ah(n,e,t,!1)}function Ah(n,e,t,o){let r=typeof e=="string"?Re(e):e,a=Bo(r.pathname||"/",t);if(a==null)return null;let s=us(n);Ch(s);let i=null;for(let l=0;i==null&&l<s.length;++l){let d=jh(a);i=Rh(s[l],d,o)}return i}function us(n,e,t,o){e===void 0&&(e=[]),t===void 0&&(t=[]),o===void 0&&(o="");let r=(a,s,i)=>{let l={relativePath:i===void 0?a.path||"":i,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};l.relativePath.startsWith("/")&&(Z(l.relativePath.startsWith(o),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(o.length));let d=Xn([o,l.relativePath]),m=t.concat(l);a.children&&a.children.length>0&&(Z(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),us(a.children,e,m,d)),!(a.path==null&&!a.index)&&e.push({path:d,score:Th(d,a.index),routesMeta:m})};return n.forEach((a,s)=>{var i;if(a.path===""||!((i=a.path)!=null&&i.includes("?")))r(a,s);else for(let l of ds(a.path))r(a,s,l)}),e}function ds(n){let e=n.split("/");if(e.length===0)return[];let[t,...o]=e,r=t.endsWith("?"),a=t.replace(/\?$/,"");if(o.length===0)return r?[a,""]:[a];let s=ds(o.join("/")),i=[];return i.push(...s.map(l=>l===""?a:[a,l].join("/"))),r&&i.push(...s),i.map(l=>n.startsWith("/")&&l===""?"/":l)}function Ch(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:Fh(e.routesMeta.map(o=>o.childrenIndex),t.routesMeta.map(o=>o.childrenIndex)))}const Sh=/^:[\w-]+$/,Dh=3,kh=2,Ih=1,Gh=10,Bh=-2,br=n=>n==="*";function Th(n,e){let t=n.split("/"),o=t.length;return t.some(br)&&(o+=Bh),e&&(o+=kh),t.filter(r=>!br(r)).reduce((r,a)=>r+(Sh.test(a)?Dh:a===""?Ih:Gh),o)}function Fh(n,e){return n.length===e.length&&n.slice(0,-1).every((o,r)=>o===e[r])?n[n.length-1]-e[e.length-1]:0}function Rh(n,e,t){let{routesMeta:o}=n,r={},a="/",s=[];for(let i=0;i<o.length;++i){let l=o[i],d=i===o.length-1,m=a==="/"?e:e.slice(a.length)||"/",h=Er({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},m),u=l.route;if(!h&&d&&t&&!o[o.length-1].route.index&&(h=Er({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},m)),!h)return null;Object.assign(r,h.params),s.push({params:r,pathname:Xn([a,h.pathname]),pathnameBase:Lh(Xn([a,h.pathnameBase])),route:u}),h.pathnameBase!=="/"&&(a=Xn([a,h.pathnameBase]))}return s}function Er(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,o]=Ph(n.path,n.caseSensitive,n.end),r=e.match(t);if(!r)return null;let a=r[0],s=a.replace(/(.)\/+$/,"$1"),i=r.slice(1);return{params:o.reduce((d,m,h)=>{let{paramName:u,isOptional:y}=m;if(u==="*"){let g=i[h]||"";s=a.slice(0,a.length-g.length).replace(/(.)\/+$/,"$1")}const p=i[h];return y&&!p?d[u]=void 0:d[u]=(p||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:s,pattern:n}}function Ph(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),ls(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let o=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,i,l)=>(o.push({paramName:i,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(o.push({paramName:"*"}),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),o]}function jh(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ls(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Bo(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,o=n.charAt(t);return o&&o!=="/"?null:n.slice(t)||"/"}function Oh(n,e){e===void 0&&(e="/");let{pathname:t,search:o="",hash:r=""}=typeof n=="string"?Re(n):n;return{pathname:t?t.startsWith("/")?t:Nh(t,e):e,search:Mh(o),hash:Hh(r)}}function Nh(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function Yt(n,e,t,o){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _h(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function hs(n,e){let t=_h(n);return e?t.map((o,r)=>r===t.length-1?o.pathname:o.pathnameBase):t.map(o=>o.pathnameBase)}function cs(n,e,t,o){o===void 0&&(o=!1);let r;typeof n=="string"?r=Re(n):(r=Qe({},n),Z(!r.pathname||!r.pathname.includes("?"),Yt("?","pathname","search",r)),Z(!r.pathname||!r.pathname.includes("#"),Yt("#","pathname","hash",r)),Z(!r.search||!r.search.includes("#"),Yt("#","search","hash",r)));let a=n===""||r.pathname==="",s=a?"/":r.pathname,i;if(s==null)i=t;else{let h=e.length-1;if(!o&&s.startsWith("..")){let u=s.split("/");for(;u[0]==="..";)u.shift(),h-=1;r.pathname=u.join("/")}i=h>=0?e[h]:"/"}let l=Oh(r,i),d=s&&s!=="/"&&s.endsWith("/"),m=(a||s===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(d||m)&&(l.pathname+="/"),l}const Xn=n=>n.join("/").replace(/\/\/+/g,"/"),Lh=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Mh=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Hh=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Wh(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const ms=["post","put","patch","delete"];new Set(ms);const zh=["get",...ms];new Set(zh);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ye(){return Ye=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},Ye.apply(this,arguments)}const To=c.createContext(null),Qh=c.createContext(null),de=c.createContext(null),Gt=c.createContext(null),ne=c.createContext({outlet:null,matches:[],isDataRoute:!1}),fs=c.createContext(null);function Yh(n,e){let{relative:t}=e===void 0?{}:e;Ke()||Z(!1);let{basename:o,navigator:r}=c.useContext(de),{hash:a,pathname:s,search:i}=ps(n,{relative:t}),l=s;return o!=="/"&&(l=s==="/"?o:Xn([o,s])),r.createHref({pathname:l,search:i,hash:a})}function Ke(){return c.useContext(Gt)!=null}function Bt(){return Ke()||Z(!1),c.useContext(Gt).location}function gs(n){c.useContext(de).static||c.useLayoutEffect(n)}function ws(){let{isDataRoute:n}=c.useContext(ne);return n?rc():Vh()}function Vh(){Ke()||Z(!1);let n=c.useContext(To),{basename:e,future:t,navigator:o}=c.useContext(de),{matches:r}=c.useContext(ne),{pathname:a}=Bt(),s=JSON.stringify(hs(r,t.v7_relativeSplatPath)),i=c.useRef(!1);return gs(()=>{i.current=!0}),c.useCallback(function(d,m){if(m===void 0&&(m={}),!i.current)return;if(typeof d=="number"){o.go(d);return}let h=cs(d,JSON.parse(s),a,m.relative==="path");n==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Xn([e,h.pathname])),(m.replace?o.replace:o.push)(h,m.state,m)},[e,o,s,a,n])}function ys(){let{matches:n}=c.useContext(ne),e=n[n.length-1];return e?e.params:{}}function ps(n,e){let{relative:t}=e===void 0?{}:e,{future:o}=c.useContext(de),{matches:r}=c.useContext(ne),{pathname:a}=Bt(),s=JSON.stringify(hs(r,o.v7_relativeSplatPath));return c.useMemo(()=>cs(n,JSON.parse(s),a,t==="path"),[n,s,a,t])}function $h(n,e){return Uh(n,e)}function Uh(n,e,t,o){Ke()||Z(!1);let{navigator:r}=c.useContext(de),{matches:a}=c.useContext(ne),s=a[a.length-1],i=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let d=Bt(),m;if(e){var h;let w=typeof e=="string"?Re(e):e;l==="/"||(h=w.pathname)!=null&&h.startsWith(l)||Z(!1),m=w}else m=d;let u=m.pathname||"/",y=u;if(l!=="/"){let w=l.replace(/^\//,"").split("/");y="/"+u.replace(/^\//,"").split("/").slice(w.length).join("/")}let p=xh(n,{pathname:y}),g=Zh(p&&p.map(w=>Object.assign({},w,{params:Object.assign({},i,w.params),pathname:Xn([l,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Xn([l,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),a,t,o);return e&&g?c.createElement(Gt.Provider,{value:{location:Ye({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Un.Pop}},g):g}function Xh(){let n=oc(),e=Wh(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return c.createElement(c.Fragment,null,c.createElement("h2",null,"Unexpected Application Error!"),c.createElement("h3",{style:{fontStyle:"italic"}},e),t?c.createElement("pre",{style:r},t):null,null)}const Kh=c.createElement(Xh,null);class qh extends c.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?c.createElement(ne.Provider,{value:this.props.routeContext},c.createElement(fs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Jh(n){let{routeContext:e,match:t,children:o}=n,r=c.useContext(To);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),c.createElement(ne.Provider,{value:e},o)}function Zh(n,e,t,o){var r;if(e===void 0&&(e=[]),t===void 0&&(t=null),o===void 0&&(o=null),n==null){var a;if(!t)return null;if(t.errors)n=t.matches;else if((a=o)!=null&&a.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let s=n,i=(r=t)==null?void 0:r.errors;if(i!=null){let m=s.findIndex(h=>h.route.id&&(i==null?void 0:i[h.route.id])!==void 0);m>=0||Z(!1),s=s.slice(0,Math.min(s.length,m+1))}let l=!1,d=-1;if(t&&o&&o.v7_partialHydration)for(let m=0;m<s.length;m++){let h=s[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=m),h.route.id){let{loaderData:u,errors:y}=t,p=h.route.loader&&u[h.route.id]===void 0&&(!y||y[h.route.id]===void 0);if(h.route.lazy||p){l=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((m,h,u)=>{let y,p=!1,g=null,w=null;t&&(y=i&&h.route.id?i[h.route.id]:void 0,g=h.route.errorElement||Kh,l&&(d<0&&u===0?(p=!0,w=null):d===u&&(p=!0,w=h.route.hydrateFallbackElement||null)));let b=e.concat(s.slice(0,u+1)),E=()=>{let v;return y?v=g:p?v=w:h.route.Component?v=c.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=m,c.createElement(Jh,{match:h,routeContext:{outlet:m,matches:b,isDataRoute:t!=null},children:v})};return t&&(h.route.ErrorBoundary||h.route.errorElement||u===0)?c.createElement(qh,{location:t.location,revalidation:t.revalidation,component:g,error:y,children:E(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):E()},null)}var bs=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(bs||{}),wt=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(wt||{});function nc(n){let e=c.useContext(To);return e||Z(!1),e}function ec(n){let e=c.useContext(Qh);return e||Z(!1),e}function tc(n){let e=c.useContext(ne);return e||Z(!1),e}function Es(n){let e=tc(),t=e.matches[e.matches.length-1];return t.route.id||Z(!1),t.route.id}function oc(){var n;let e=c.useContext(fs),t=ec(wt.UseRouteError),o=Es(wt.UseRouteError);return e!==void 0?e:(n=t.errors)==null?void 0:n[o]}function rc(){let{router:n}=nc(bs.UseNavigateStable),e=Es(wt.UseNavigateStable),t=c.useRef(!1);return gs(()=>{t.current=!0}),c.useCallback(function(r,a){a===void 0&&(a={}),t.current&&(typeof r=="number"?n.navigate(r):n.navigate(r,Ye({fromRouteId:e},a)))},[n,e])}function we(n){Z(!1)}function ac(n){let{basename:e="/",children:t=null,location:o,navigationType:r=Un.Pop,navigator:a,static:s=!1,future:i}=n;Ke()&&Z(!1);let l=e.replace(/^\/*/,"/"),d=c.useMemo(()=>({basename:l,navigator:a,static:s,future:Ye({v7_relativeSplatPath:!1},i)}),[l,i,a,s]);typeof o=="string"&&(o=Re(o));let{pathname:m="/",search:h="",hash:u="",state:y=null,key:p="default"}=o,g=c.useMemo(()=>{let w=Bo(m,l);return w==null?null:{location:{pathname:w,search:h,hash:u,state:y,key:p},navigationType:r}},[l,m,h,u,y,p,r]);return g==null?null:c.createElement(de.Provider,{value:d},c.createElement(Gt.Provider,{children:t,value:g}))}function sc(n){let{children:e,location:t}=n;return $h(so(e),t)}new Promise(()=>{});function so(n,e){e===void 0&&(e=[]);let t=[];return c.Children.forEach(n,(o,r)=>{if(!c.isValidElement(o))return;let a=[...e,r];if(o.type===c.Fragment){t.push.apply(t,so(o.props.children,a));return}o.type!==we&&Z(!1),!o.props.index||!o.props.children||Z(!1);let s={id:o.props.id||a.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(s.children=so(o.props.children,a)),t.push(s)}),t}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function io(){return io=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},io.apply(this,arguments)}function ic(n,e){if(n==null)return{};var t={},o=Object.keys(n),r,a;for(a=0;a<o.length;a++)r=o[a],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function lc(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function uc(n,e){return n.button===0&&(!e||e==="_self")&&!lc(n)}const dc=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],hc="6";try{window.__reactRouterVersion=hc}catch{}const cc="startTransition",vr=$s[cc];function mc(n){let{basename:e,children:t,future:o,window:r}=n,a=c.useRef();a.current==null&&(a.current=bh({window:r,v5Compat:!0}));let s=a.current,[i,l]=c.useState({action:s.action,location:s.location}),{v7_startTransition:d}=o||{},m=c.useCallback(h=>{d&&vr?vr(()=>l(h)):l(h)},[l,d]);return c.useLayoutEffect(()=>s.listen(m),[s,m]),c.createElement(ac,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:s,future:o})}const fc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ve=c.forwardRef(function(e,t){let{onClick:o,relative:r,reloadDocument:a,replace:s,state:i,target:l,to:d,preventScrollReset:m,viewTransition:h}=e,u=ic(e,dc),{basename:y}=c.useContext(de),p,g=!1;if(typeof d=="string"&&gc.test(d)&&(p=d,fc))try{let v=new URL(window.location.href),x=d.startsWith("//")?new URL(v.protocol+d):new URL(d),A=Bo(x.pathname,y);x.origin===v.origin&&A!=null?d=A+x.search+x.hash:g=!0}catch{}let w=Yh(d,{relative:r}),b=wc(d,{replace:s,state:i,target:l,preventScrollReset:m,relative:r,viewTransition:h});function E(v){o&&o(v),v.defaultPrevented||b(v)}return c.createElement("a",io({},u,{href:p||w,onClick:g||a?o:E,ref:t,target:l}))});var xr;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(xr||(xr={}));var Ar;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Ar||(Ar={}));function wc(n,e){let{target:t,replace:o,state:r,preventScrollReset:a,relative:s,viewTransition:i}=e===void 0?{}:e,l=ws(),d=Bt(),m=ps(n,{relative:s});return c.useCallback(h=>{if(uc(h,t)){h.preventDefault();let u=o!==void 0?o:gt(d)===gt(m);l(n,{replace:u,state:r,preventScrollReset:a,relative:s,viewTransition:i})}},[d,l,m,o,r,t,n,a,s,i])}const Cr=n=>{let e;const t=new Set,o=(d,m)=>{const h=typeof d=="function"?d(e):d;if(!Object.is(h,e)){const u=e;e=m??(typeof h!="object"||h===null)?h:Object.assign({},e,h),t.forEach(y=>y(e,u))}},r=()=>e,i={setState:o,getState:r,getInitialState:()=>l,subscribe:d=>(t.add(d),()=>t.delete(d))},l=e=n(o,r,i);return i},yc=n=>n?Cr(n):Cr,pc=n=>n;function bc(n,e=pc){const t=S.useSyncExternalStore(n.subscribe,()=>e(n.getState()),()=>e(n.getInitialState()));return S.useDebugValue(t),t}const Ec=n=>{const e=yc(n),t=o=>bc(e,o);return Object.assign(t,e),t},vc=n=>Ec;function xc(n,e){let t;try{t=n()}catch{return}return{getItem:r=>{var a;const s=l=>l===null?null:JSON.parse(l,void 0),i=(a=t.getItem(r))!=null?a:null;return i instanceof Promise?i.then(s):s(i)},setItem:(r,a)=>t.setItem(r,JSON.stringify(a,void 0)),removeItem:r=>t.removeItem(r)}}const lo=n=>e=>{try{const t=n(e);return t instanceof Promise?t:{then(o){return lo(o)(t)},catch(o){return this}}}catch(t){return{then(o){return this},catch(o){return lo(o)(t)}}}},Ac=(n,e)=>(t,o,r)=>{let a={storage:xc(()=>localStorage),partialize:g=>g,version:0,merge:(g,w)=>({...w,...g}),...e},s=!1;const i=new Set,l=new Set;let d=a.storage;if(!d)return n((...g)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),t(...g)},o,r);const m=()=>{const g=a.partialize({...o()});return d.setItem(a.name,{state:g,version:a.version})},h=r.setState;r.setState=(g,w)=>{h(g,w),m()};const u=n((...g)=>{t(...g),m()},o,r);r.getInitialState=()=>u;let y;const p=()=>{var g,w;if(!d)return;s=!1,i.forEach(E=>{var v;return E((v=o())!=null?v:u)});const b=((w=a.onRehydrateStorage)==null?void 0:w.call(a,(g=o())!=null?g:u))||void 0;return lo(d.getItem.bind(d))(a.name).then(E=>{if(E)if(typeof E.version=="number"&&E.version!==a.version){if(a.migrate){const v=a.migrate(E.state,E.version);return v instanceof Promise?v.then(x=>[!0,x]):[!0,v]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,E.state];return[!1,void 0]}).then(E=>{var v;const[x,A]=E;if(y=a.merge(A,(v=o())!=null?v:u),t(y,!0),x)return m()}).then(()=>{b==null||b(y,void 0),y=o(),s=!0,l.forEach(E=>E(y))}).catch(E=>{b==null||b(void 0,E)})};return r.persist={setOptions:g=>{a={...a,...g},g.storage&&(d=g.storage)},clearStorage:()=>{d==null||d.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>p(),hasHydrated:()=>s,onHydrate:g=>(i.add(g),()=>{i.delete(g)}),onFinishHydration:g=>(l.add(g),()=>{l.delete(g)})},a.skipHydration||p(),y||u},Cc=Ac,ee=vc()(Cc((n,e)=>({theme:"light",setTheme:t=>n({theme:t}),favorites:[],addFavorite:(t,o)=>{const r=e().favorites;e().isFavorite(t,o)||n({favorites:[...r,{artistName:t,songTitle:o}]})},removeFavorite:(t,o)=>{n({favorites:e().favorites.filter(r=>!(r.artistName===t&&r.songTitle===o))})},isFavorite:(t,o)=>e().favorites.some(r=>r.artistName===t&&r.songTitle===o),currentTransposition:0,setTransposition:t=>n({currentTransposition:t}),autoscrollSpeed:1,isAutoscrolling:!1,setAutoscrollSpeed:t=>n({autoscrollSpeed:t}),setIsAutoscrolling:t=>n({isAutoscrolling:t}),searchQuery:"",setSearchQuery:t=>n({searchQuery:t})}),{name:"chordverse-storage"})),Sc=ga("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),mn=c.forwardRef(({className:n,variant:e,size:t,asChild:o=!1,...r},a)=>{const s=o?Le:"button";return f.jsx(s,{className:sn(Sc({variant:e,size:t,className:n})),ref:a,...r})});mn.displayName="Button";function Dc(){const{theme:n,setTheme:e}=ee();c.useEffect(()=>{const o=window.document.documentElement;o.classList.remove("light","dark"),o.classList.add(n)},[n]);const t=()=>{e(n==="light"?"dark":"light")};return f.jsx(mn,{variant:"outline",size:"icon",onClick:t,className:"rounded-full","aria-label":"Toggle theme",children:n==="light"?f.jsx(Xs,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"}):f.jsx(Ks,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"})})}const vs=c.forwardRef(({className:n,type:e,...t},o)=>f.jsx("input",{type:e,className:sn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",n),ref:o,...t}));vs.displayName="Input";function Sr(){const{searchQuery:n,setSearchQuery:e}=ee(),[t,o]=c.useState(n);c.useEffect(()=>{const a=setTimeout(()=>{e(t)},300);return()=>clearTimeout(a)},[t,e]);const r=()=>{o(""),e("")};return f.jsxs("div",{className:"relative w-full",children:[f.jsx(qs,{className:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),f.jsx(vs,{type:"text",placeholder:"Search artists or songs...",value:t,onChange:a=>o(a.target.value),className:"pl-9 pr-8 w-full"}),t&&f.jsx("button",{className:"absolute right-2.5 top-2.5 h-5 w-5 text-muted-foreground hover:text-foreground",onClick:r,"aria-label":"Clear search",children:f.jsx(Js,{className:"h-4 w-4"})})]})}function ue({children:n}){return f.jsxs("div",{className:"min-h-screen flex flex-col",children:[f.jsxs("header",{className:"sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",children:[f.jsxs("div",{className:"container mx-auto flex h-14 items-center justify-between",children:[f.jsx(Ve,{to:"/",className:"flex items-center space-x-2",children:f.jsx("span",{className:"text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent",children:"ChordVerse"})}),f.jsxs("div",{className:"flex items-center space-x-4",children:[f.jsx("div",{className:"hidden sm:block w-[200px]",children:f.jsx(Sr,{})}),f.jsx(Ve,{to:"/favorites",className:"text-sm font-medium transition-colors hover:text-primary",children:"Favorites"}),f.jsx(Dc,{})]})]}),f.jsx("div",{className:"container mx-auto py-2 sm:hidden",children:f.jsx(Sr,{})})]}),f.jsx("main",{className:"flex-1 container mx-auto py-6 px-4",children:n}),f.jsx("footer",{className:"border-t py-4",children:f.jsx("div",{className:"container mx-auto text-center text-sm text-muted-foreground",children:f.jsxs("p",{children:["© ",new Date().getFullYear()," ChordVerse. All rights reserved."]})})})]})}const Fo=c.forwardRef(({className:n,...e},t)=>f.jsx("div",{ref:t,className:sn("rounded-lg border bg-card text-card-foreground shadow-sm",n),...e}));Fo.displayName="Card";const Ro=c.forwardRef(({className:n,...e},t)=>f.jsx("div",{ref:t,className:sn("flex flex-col space-y-1.5 p-6",n),...e}));Ro.displayName="CardHeader";const Po=c.forwardRef(({className:n,...e},t)=>f.jsx("h3",{ref:t,className:sn("text-2xl font-semibold leading-none tracking-tight",n),...e}));Po.displayName="CardTitle";const kc=c.forwardRef(({className:n,...e},t)=>f.jsx("p",{ref:t,className:sn("text-sm text-muted-foreground",n),...e}));kc.displayName="CardDescription";const jo=c.forwardRef(({className:n,...e},t)=>f.jsx("div",{ref:t,className:sn("p-6 pt-0",n),...e}));jo.displayName="CardContent";const Ic=c.forwardRef(({className:n,...e},t)=>f.jsx("div",{ref:t,className:sn("flex items-center p-6 pt-0",n),...e}));Ic.displayName="CardFooter";function Gc({artist:n}){return f.jsx(Ve,{to:`/artist/${encodeURIComponent(n.name)}`,children:f.jsxs(Fo,{className:"cursor-pointer transition-shadow hover:shadow-md",children:[f.jsx(Ro,{children:f.jsx(Po,{children:n.name})}),f.jsx(jo,{children:f.jsxs("p",{className:"text-sm text-muted-foreground",children:[n.songs.length," song",n.songs.length!==1?"s":""]})})]})})}const Bc=[{name:"1000 Stars (2009)",songs:[{title:"1000 Stars",chords:`[A] [D5]  


 [A]I'm Breathing


 In Pieces


 [D5]Just Tasting


 The Feeling


 [A]All Open


 Suggestions


 [D5]Unspoken Within


 


 And It T[A]akes Me To Another Place


 The Universe, The Endless Space A[D5]bove, Above


 And The Wo[A]rld Is Like A Mirror Ball


 I'm Spinning In The After-Glow Of L[F#m]ove[E]


 


 [D5]1000 Stars, 1[E]000 Breaths, 1[F#m]000 Voi[E]ces Singin'


 [D5]1000 He[E]artbeats Under My S[F#m]kin


 This Is W[E]here We B[D5]egin,


 Right Here


 


 [A]Skin Diving, Slow Motion


 [D5]The Colours, Are Running


 [A]You Call Me, I'm coming


 [D5]I'm taking it in


 


 And It Takes Me To Another Place


 The Universe, The Endless Space Above, Above


 And The World Is Like A Mirror Ball


 I'm Spinning In The After-Glow Of Love


 


 1000 Stars, 1000 Breaths, 1000 Voices Singin'


 1000 Heartbeats Under My Skin


 This Is Where We Begin,


 Right Here


 


 [Bm]Come[D5] On In... (Repeat X 9)


 [Bm]Come On [D5]In Cl[E]oser


 


 1000 Stars, 1000 Breaths, 1000 Voices Singin'


 1000 Heartbeats Under My Skin


 This Is Where We Begin,


 Right Here


 (Repeat)


 


 http://www.natbassingthwaighte.com/`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/n/natalie_bassingthwaighte/1000_stars_crd.html"}]},{name:"b (2004)",songs:[{title:"Lauch",chords:`Hier meine ersten Chords, ich hoffe sie stimmen. Aber ich denke schon. :-)


 


 [A]Ich hatte bock zu kochen,


 [E]es sollt mal was anderes sein,


 [D]also fragte ich en Freund


 und zum Essen lud ich eine Freundin e[E]in.


 


 [A]Mein Freund sagte mir: Ich hab ne Idee!


 [E]Du k�nntest was mit Lauch machen.


 [D]Ich fragte: Ist das nicht langweilig?


 Da sagte er: Nein, da gibt es spannende [E]Sachen.


 


 [D]Also kaufte ich Lauch ein und kochte


 [A]und es klingelte an der T�r.


 [D]Es war die erw�hnte Bekanntschaft


 und sie war wirklich nett zu [E]mir.[D] [E]


 


 [A]Wir fingen an zu essen


 [E]und der Lauch schmeckte ganz OK.


 [D]Aber l�ngst nicht so gut wie behauptet,


 sondern wirklich nur irgendwie [E]OK.


 


 [A]Und auf einmal fragte die Freundin:


 [E]Willst du mit mir ins Bett?


 [D]Ich blinzelte kurz und bejate,


 denn sie war wirklich h�bsch und [E]nett.


 ( Tab from: http://www.guitartabs.cc/tabs/b/basta/lauch_crd.html )


 [D]Doch als wir so grade dabei warn,


 [A]fand ichs net aber auch nicht viel mehr


 [D]und mir kam da ein Gedanke,


 der [E]besch�ftigte mich [D]sehr.[E] [D] [E]


 


 [A]Sex, wird [E]�bersch�tzt. [D]Lauch [F]auch.


 [A]Sex, wird [E]�bersch�tzt. [D]Lauch [F]auch.


 


 [A]Als es vorbei war wollte ich aufstehn,


 [E]doch ich machte das Licht nicht an.


 [D]Es war ja im Dunkeln schon doof genug,


 da wollt ich uns nen Rest Romantik bew[E]ahrn.


 


 [A]Ich stand auf und tappe durchs Zimmer,


 [E]ich konnte fast gar nichts sehn.


 [D]Aber es war ja schlie�lich meines,


 da kammern auch mal ohne Licht durch[E]gehn.


 


 [D]Pl�tzlich sah ich am Boden die Weinflasche stehn,


 [A]ich wich aus und sah das Glas.


 [D]Mit blutendem Fu� fiel ich in das Regal.


 Als es [E]runterkommt war mir so [D]klar.[E] [D] [E]


 [A]Sex, wird [E]�bersch�tzt. [D]Licht [F]nicht.


 [A]Sex, wird [E]�bersch�tzt. [D]Licht [F]nicht.[A]`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/b/basta/lauch_crd.html"},{title:"Deutsche",chords:`[Dbm] [B] [A] [B]  


 [Dbm]Deutsche werden [B]Helden uber [A]Nacht[B]


 [A]Deutsche lassen [B]auch mal [A]Frauen an die [B]Macht


 [Dbm]Deutsche sind zwar [B]blond, aber nicht [A]doof[B]


 [A]Deutsche lieben [B]Zaune und [A]jagen sich vom [B]Hof


 


 [Dbm]Deutsche waren [B]gern Ameri[A]kaner[B]


 [A]Deutsche sind nicht [B]so, [A]sie sind viel [B]humaner


 [Dbm]Deutsche Wohnzim[B]merschranke sind [A]schwedisch[B]


 [A]Deutsche wollen's fran[B]zosisch und [A]essen ital[B]ienisch


 


 [F#m]Deutsche reden [A]auch in Spanien [B]deutsch


 [F#m]Deutsche sind nicht [E]deutsch, das ist [A]ty[B]pisch [E]deutsch


 


 [Ebm]Wir [Dbm]sind, wie wir [B]sind, [Dbm]weil wir Deutsche [B]sind


 [A]Deutsche waren wir schon [B]als [Dbm]Kind


 [E]Unser [Dbm]Land ist [B]klein, doch es [Dbm]passen viele [B]rein


 Nicht [A]alle mussen [B]Deutsche [Dbm]sein


 [E]Wir sind [Dbm]Deutsche[B] [A] [B]


 


 [Dbm]Deutsche rechnen [B]noch in deutscher [A]Mark[B]


 [A]Deutsche fluchen [B]ubers [A]Wetter jeden [B]Tag


 [Dbm]Deutsche zahlen [B]Steuern wie die [A]Pest[B]


 [A]Deutsche mogen [B]niemand, [A]der das Land ver[B]lasst


 


 [F#m]Deutsche fordern [A]alles jetzt und [B]heut


 [F#m]Deutsche wollen nicht [E]warten, das ist [A]ty[B]pisch [E]deutsch


 


 [Ebm]Wir [Dbm]sind, wie wir [B]sind, [Dbm]weil wir Deutsche [B]sind


 [A]Deutsche waren wir schon [B]als [Dbm]Kind


 [E]Unser [Dbm]Land ist [B]klein, doch es [Dbm]passen viele [B]rein


 Nicht [A]alle mussen [B]Deutsche [Dbm]sein


 [E]Wir sind [Dbm]Deutsche[B] [A] [B]


 


 [Dbm]Deutsche schlafen [B]vor der Glotze [Dbm]ein[B]


 Fur "[A]Wer wird MIllio[B]nar" [A]gehen sie auch da [B]rein


 [Dbm]Wir sind Goethe, [B]Schiller und Beet[Dbm]hoven[B]


 Auch [A]Drafi war ein [B]Deutscher - [A]alle sind schon [B]oben


 


 [F#m]Deutsche reden [A]auch in Spanien [B]deutsch


 [F#m]Deutsche sind nicht [E]deutsch, das ist [A]ty[B]pisch [E]deutsch


 


 [Ebm]Wir [Dbm]sind, wie wir [B]sind, [Dbm]weil wir Deutsche [B]sind


 [A]Deutsche waren wir schon [B]als [Dbm]Kind


 [E]Unser [Dbm]Land ist [B]klein, doch es [Dbm]passen viele [B]rein


 Nicht [A]alle mussen [B]Deutsche [Dbm]sein


 [E]Wir sind [Dbm]Deutsche [B] [A] [B] [Dbm]`,url:"https://www.chordie.com/chord.pere/www.azchords.com/b/basta-tabs-52182/deutsche1-tabs-879565.html"}]},{name:"Next Stop Armageddon (2004)",songs:[{title:"Power Animal",chords:`Song:Power Animal


 Artist:The God Awfuls


 Album:Next Stop, Armageddon


 Tab by:Miller McLean 9/22/07


 


 INTRO pt 1


 


 [E]  

 
 e|---------------------------------------------------------------------|
 B|---------------------------------------------------------------------|
 G|--9999-11111111-13131313-14141414-16161616-14141414-13131313-11111111| x2
 D|--xxxx--x x x x x x x x--x x x x--x x x x--x x x x--x x x x--x x x x-|
 A|--7777--9 9 9 9-11111111-12121212-14141414-12121212-11111111-9 9 9 9-|
 E|---------------------------------------------------------------------|

 


 


 INTRO pt 2


 [E] [A] [B] [E]  

 
 e|----------------------------|
 B|----------------------------|
 G|--9999-11-13-14141414-16-13-| x2
 D|--xxxx-x--x--x x x x--x--x--|
 A|--7777-9--11-12121212-14-11-|
 E|----------------------------|

 


 


 VERSE


 [E]we've been twelve years down so they rallied all around


 


 [A]and they [B]offered up the boys to [E]die


 


 [E]trading blood for money, selling flags and spining lies


 


 and [A]business getting [B]better was the [E]battle cry


 


 [B]its got nothing to do with you


 


 [B]its not a happy story


 


 [B]you wont see em running the numbers


 


 [B]but you'll see who gets the fucking glory


 


 [E] [A] [B] [E]  


 [E]urban epidemics always seem much more severe


 


 when [A]problems turn from [B]black to [E]white


 


 [E]and candle-coated vigils always seeming to sincere


 


 [A]atleast until the [B]end of the [E]night


 


 [B]its got nothing to do with you


 


 [B]its not a happy story


 


 [B]you wont see em running the numbers


 


 [B]but you'll see who gets the fucking glory


 


 CHORUS (I'm not 100% sure about the lyrics, but you can figure it out)


 


 [E]There's always something to say


 


 When there [A]ain't no fucking [B]price to [E]pay


 


 [E]Locked and loaded piling in the back


 


 [A]Curbside [B]patri[E]ots


 


 SOLO


 


 [F#]  


 


 

 
 e|---------------------------------|
 B|---------------------------------|
 G|--11-14-13-9-11111111-9-11111111-| x2
 D|--x--x--x--x-x x x x--x-x x x x--|
 A|--9--12-11-7-9 9 9 9--7-9 9 9 9--|
 E|---------------------------------|
 e|------------------------------------------------------|
 B|-12b-12b-10----10------------------12b-12b-12b-12b-12b|
 G|------------12----12---10-12-10-12--------------------|
 D|------------------------------------------------------|
 A|------------------------------------------------------|
 E|------------------------------------------------------|

 


 


 


 [D]they're selling flags and spinning [Db]lies


 


 while [D]sending someone elses son's to [Db]die


 


 [E]There's always something to say


 


 When there [A]ain't no fucking [B]price to [E]pay


 


 [E]Locked and loaded piling in the back


 


 [A]Curbside [B]patri[E]ots (second time thru, play INTRO pt 2 over)


 


 OUTRO


 [E]  

 
 e|---------------------------------------------------------------------|
 B|---------------------------------------------------------------------|
 G|--9999-11111111-13131313-14141414-16161616-14141414-13131313-11111111| x2
 D|--xxxx--x x x x x x x x--x x x x--x x x x--x x x x--x x x x--x x x x-|
 A|--7777--9 9 9 9-11111111-12121212-14141414-12121212-11111111-9 9 9 9-|
 E|---------------------------------------------------------------------|`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/t/the-god-awfuls/96473.html"}]},{name:"Don’t Feed da Animals (2009)",songs:[{title:"Echo",chords:`The entire song appears to be just F, C, G...you can play this along with the actual song.


 


 Excerpt:


 


 Capo 4


 


 [F]It started off g[C]reat, but who was to [G]know


 That love that is lost can not be let[F] go


 You say it's my f[C]ault--ok, then I'll [G]go


 


 It's better to know


 Now there's nobody to [F]argue with, cause [C]I'm not home...


 


 ......and so on`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/g/gorilla-zoe/336280.html"}]},{name:"Outta Here (1992)",songs:[{title:"There But for the Grace of God Go I",chords:`e ----------------------------------|
 B ----------------------------------|
 G -----------2-4-4^-4---4-2-4-2-----|
 D -4---4-2-4--------------------4-2-|
 A ----------------------------------|
 E ----------------------------------|`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/t/the-gories/373260.html"}]},{name:"Midnight Hour (2014)",songs:[{title:"Running Away",chords:`-------------------------------------------------------------------------------

 


 Running Away - Midnight Hour


 http://www.midnighthourmusic.com


 

 
 -------------------------------------------------------------------------------

 


 


 Tabbed by: Gran Gizmo


 Email: gran.gizmo@gmail.com


 


 Tuning: Standard


 


 Chords:


 [Eb] [Ebsus2] [Ab] [Bb] [Gm]  

 
 e|----6-------6--------4------6------3------|
 B|----8-------6--------4------6------3------|
 G|----8-------8--------5------7------3------|
 D|----8-------8--------6------8------5------|
 A|----6-------6--------6------8------5------|
 E|---------------------4------6------3------|

 


 


 


 Piano Intro:


 [Eb] [Ab] [Eb]  


 [Eb]Don't lie and say that it's O[Ab]K.


 [Eb]It's alright here, there's nothing more to sa[Ab]y.


 So [Cm]I'm running away.[Ab]


 I'm leaving this pl[Eb]ace.[Ebsus2]


 Yeah,[Cm] I'm running aw[Ab]ay.


 I'm running awa[Eb]y.[Ebsus2]


 


 [Eb]Don't tell me, I don't want to pl[Ab]ay.


 [Eb]It's too late for you to make me s[Ab]tay.


 


 No, I won't stay.


 So [Cm]I'm running awa[Ab]y.


 I'm leaving this pl[Eb]ace.[Ebsus2]


 Yeah,[Cm] I'm running awa[Ab]y.


 I'm running awa[Eb]y.[Ebsus2]


 


 And fa[Gm]ster than you can follow [Ab]me from this lonely pl[Eb]ace.


 And fa[Gm]rther than you can find me, I'm le[Ab]aving


 Yeah I'm le[Bb]aving today.


 


 And[Eb] I, I'll never let you find me.


 I'm leaving you beh[Cm]ind with the past


 


 No, I won't look back.


 And [Ab]I don't want to hear your reasons.


 Don't want to hear you t[Bb]ell me why I should stay.


 


 And [Eb]try, and try to understand me


 And try to unders[Cm]tand what I say when I say I can't stay


 [Ab]I, I'm moving on from this place


 I'm leaving and I w[Bb]on't quit running away.


 


 [Eb]I'm running away.


 I'm leaving this p[Cm]lace.


 Yeah, [Ab]I'm running away.


 I'm running awa[Bb]y.[Eb]


 


 Please mail any comments to gran.gizmo@gmail.com.`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/m/midnight_hour/running_away_crd.html"}]},{name:"Maps (2010)",songs:[{title:"Maps",chords:`Intro:


 


 [E]You don't [G#]know why I [A]say these things, [B]but it's o[E]k


 I'm just [G#]tired, and [A]stressed over [B]back in the [E]day


 She said [G#]don't you ever [A]miss those days?[B]


 I just [E]miss those records [G#]shops, and the [A]nights I got to [B]stay, but it's ok


 


 [A]It's [B]what I [E]need


 Don't forget me


 [A]You [B]fall in [E]love, too easily


 [A]So I'll just [B]forget the [E]world


 [A]So I'll just [B]forget the [E]world


 


 [E]I sur[G#]render, this [A]feeling of [B]regret


 Cause I [E]really think I'd [G#]rather look a[A]head and just for[B]get


 I'm just [E]full of [G#]problems that [A]make you feel a[B]lone


 And you [E]know I like to [G#]talk, but I'll just [A]take the long way [B]home


 


 (there's some lead part here I haven't figured out yet)


 [E]It's not [G#]hard to re[A]mind yourself [B]why you tried


 [E]This open [G#]road and a [A]song to sit [B]by your side


 [E]I'm just [G#]scared of the [A]doubt, but I [B]wont let it [E]last,[G#]


 Yeah I'll for[A]get about [B]that


 


 [A]It's [B]what I [E]need


 Don't forget [A]me


 You [B]fall in [E]love, too easily


 [A]So I'll just [B]forget the [E]world


 [A]So I'll just [B]forget the [E]world`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/m/mixtapes/327593.html"},{title:"Sunrise",chords:`http://www.youtube.com/watch?v=HbaDtYQmpfo


 


 (Strum once-ish here)


 [E]When did my [F#]friends start [A]doing cocaine and


 comp[E]laining [F#]I'm not comp[A]laining


 [E]I'm feeling [F#]better but I [A]can't explain why it's


 [E]fadin[F#]g, but it's [A]fading


 


 Through [E]sunsets and [F#]sunrise can [A]you see in my eyes


 The [E]sunset and s[F#]unrise, [A]yeah yeah yeah yeah


 


 [E]I [F#]just [A]figured out the reason


 But [E]I [F#]won't [A]ever say a word


 And the [E]side[F#]walk's [A]leading me today


 So I [E]guess I'm gonna [F#]be o[A]kay


 


 Through [E]sunrise and [F#]sunsets we [A]piss under bridges


 I [E]appreci[F#]ate all the [A]small things I'm fine


 When we're [E]walking and [F#]talking through [A]playgrounds and downtown


 [E]Laughing and [F#]smiling at least [A]most of the time


 Through s[A]unsets and sunrise`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/m/mixtapes/327594.html"}]},{name:"King of the Distant Forest (1998)",songs:[{title:"From the Frozen Plains",chords:`E-------------------------------------
 B-------------------------------------
 G--3p2~3~--3p2-3-5~~8-7-5---0-2-3~~p0-
 D-------------------------3-----------
 A-------------------------------------
 E-------------------------------------

 


 


 Guitar 2


 


 

 
 E---------------------------------------
 B---------------------------------------
 G---------------------------5~~5-5----2-
 D--5~~5-5-5-5~~5-5-5-5~~5-5-5~~5-5-3~-2-
 A--5~~5-5-5-5~~5-5-5-5~~5-5-3~~3-3-3~-0-
 E--3~~3-3-3-3~~3-3-3-3~~3-3--------1~---

 


 pm ..... ..... ... ...


 


 =======================================================================SECOND PART========================


 


 Guitar 1:


 p.h


 

 
 E-------------------------------------
 B-------------------------------------
 G--3p2~3~--3p2-3-5~~8-7-5---0-2-3~~p0-
 D-------------------------3-----------
 A-------------------------------------
 E-------------------------------------

 


 


 Guitar 2:


 


 

 
 E------------------------------------
 B--3p1~3--3p1-3-4~~8-6-4---1-3-4~~p1-
 G------------------------3-----------
 D------------------------------------
 A------------------------------------
 E------------------------------------

 


 


 =======================================================================VERSE 3x EACH TIME (REPEAT AFTER MAIN RIFF)================


 


 Guitar 1 (Tremolo):


 


 

 
 E-------------------------------------------------------------
 B-------------------------------------------------------------
 G-----------------------------------------------------77-55-77
 D--555555555555------------------5555555555555555-8888--------
 A--------------666-888-5555555555-----------------------------
 E-------------------------------------------------------------
 E------------------------------------------------------------------
 B------------------------------------------------------------------
 G------------------------------------------------------------------
 D--55555555555-----------------------------------------------------
 A-------------666-888-5555-33-55-66-55-33-33-55-66-55-33-888-101010
 E----------------------------------------6-------------------------

 


 


 Guitar 2 (Tremolo):


 


 

 
 E-----------------------------------------------------------------
 B-----------------------------------------------------------------
 G----7777-55-7777--------------555555--777-555-777-8888-777-55-777
 D--55------------8888-7777-8888------55---------------------------
 A-----------------------------------------------------------------
 E-----------------------------------------------------------------
 E---------------------------------------------------------------------------
 B-----------------------------------------------------------------888-101010
 G----7777-55-7777--------------55555-88888-77-55----55-77-88-77-55----------
 D--55------------8888-7777-8888-----------------8888------------------------
 A---------------------------------------------------------------------------
 E---------------------------------------------------------------------------

 


 


 ======================================================================MAIN RIFF (REPEAT 2x)======================================


 


 Guitar 1:


 p.h


 

 
 E-------------------------------------
 B-------------------------------------
 G--3p2~3~--3p2-3-5~~8-7-5---0-2-3~~p0-
 D-------------------------3-----------
 A-------------------------------------
 E-------------------------------------

 


 


 Guitar 2


 


 

 
 E---------------------------------------
 B---------------------------------------
 G---------------------------5~~5-5----2-
 D--5~~5-5-5-5~~5-5-5-5~~5-5-5~~5-5-3~-2-
 A--5~~5-5-5-5~~5-5-5-5~~5-5-3~~3-3-3~-0-
 E--3~~3-3-3-3~~3-3-3-3~~3-3--------1~---

 


 pm ..... ..... ... ...


 


 Repeat 2x then:


 


 Guitar 1:


 p.h


 

 
 E-------------------------------------
 B-------------------------------------
 G--3p2~3~--3p2-3-5~~8-7-5---0-2-3~~p0-
 D-------------------------3-----------
 A-------------------------------------
 E-------------------------------------

 


 


 Guitar 2:


 


 

 
 E------------------------------------
 B--3p1~3--3p1-3-4~~8-6-4---1-3-4~~p1-
 G------------------------3-----------
 D------------------------------------
 A------------------------------------
 E------------------------------------

 


 


 =======================================================================INTERLUDE AFTER BASS PART=====================================


 


 Both Guitars (Tremolo) 2x:


 


 

 
 E--------------------------------------------------------------------------
 B--------------------------------------------------------------------------
 G--33333333-222-00000-2222222-3333333-7777777-8-8-8-8-8-8-8--10101010101010
 D--55555555-333-11111-3333333-5555555-8888888-10101010101010-12121212121212
 A--------------------------------------------------------------------------
 E--------------------------------------------------------------------------

 


 


 Then immediately after second time:


 


 Guitar 1 (Tremolo):


 (This is supposed to be constant till the end of the riff, yet Guitar 2 changes.)


 


 

 
 E-------------------------------------------------------------------------------------
 B-------------------------------------------------------------------------------------
 G-----------------5555555-7777777-8888888-12121212121212-10101010101010-8888888-777777
 D--5555555-8888888--------------------------------------------------------------------
 A-------------------------------------------------------------------------------------
 E-------------------------------------------------------------------------------------
 E---------------------------------------
 B---------------------------------------
 G--5555555------------------------------
 D---------8888888-7777777-88888888888888
 A---------------------------------------
 E---------------------------------------

 


 


 Guitar 2 (Tremolo):


 (First time)


 


 

 
 E-------------------------------------------------------------------------------------------------
 B-------------------------------------------------------------------------------------------------
 G--------------------------555555555555555555555555-----------------------------------------------

 


 [D--55555555555555555555555-555555555555555555555555-5555555555555555555555-33333333333333333333333]  


 [A--55555555555555555555555-333333333333333333333333-5555555555555555555555-33333333333333333333333]  


 

 
 E--33333333333333333333333--------------------------3333333333333333333333-11111111111111111111111

 


 


 Guitar 2 (Tremolo):


 (Second time)


 


 

 
 E--------------------------------------------------------------------------------------------
 B--------------------------------------------------------------------------------------------
 G--7777777-12121212121212-10101010101010-8888888-10-8-10101010-88-77-55-77-88-7777777-5555555
 D--------------------------------------------------------------------------------------------
 A--------------------------------------------------------------------------------------------
 E--------------------------------------------------------------------------------------------
 E----------------------------------
 B----------------------------------
 G-------------------------7777-5555
 D--8888888-7777777-8888888---------
 A----------------------------------
 E----------------------------------

 


 


 Guitar 2 (Tremolo):


 (Third time) P.s. The "111111" are eleven's (11-11-11-10-10-10)


 


 

 
 E--------------------------------------------------------------------------------------------------------------------
 B---------------------------------------------------------------------------------------------------------11111101010
 G-----------------------------------------------------------------777-555---555-888-777-555-777-101010-888-----------
 D--888-777-555-777-888-777-555-777-888-777-555-777-888-777-555-777-------888-----------------------------------------
 A--------------------------------------------------------------------------------------------------------------------
 E--------------------------------------------------------------------------------------------------------------------
 E-------------------------
 B-------------------------

 


 G--/12~~-/12~~-/12~~-/12~~


 

 
 D-------------------------
 A-------------------------
 E-------------------------

 


 


 =====================================================================GUITARS AND KEYBOARD PART (Repeat 4x)===================


 


 Guitar 1 (Tremolo):


 


 

 
 E-----------------------------------------------------------------------------------------------------
 B--------------------------------------------8--------------------------------------------------------
 G--------------------77----55-88-77-88-55-88---8-------------------33-55----77-1010-77----------------
 D--55-88-77-88-55-88----88-----------------------33-77-55-77-33-77-------77------------1010-88-77h8p77
 A-----------------------------------------------------------------------------------------------------
 E-----------------------------------------------------------------------------------------------------

 


 


 Guitar 2 (Tremolo)


 


 

 
 E-----------------------------------------------------------------------------------------------------
 B-----------------------------------------------------------------------------------------------------
 G--------------------------555555555555555555555------------------------------------------------------

 


 [D--55555555555555555555555-555555555555555555555-33333333333333333333333-77777777777777777777777777777]  


 [A--55555555555555555555555-333333333333333333333-33333333333333333333333-55555555555555555555555555555]  


 

 
 E--33333333333333333333333-----------------------11111111111111111111111-55555555555555555555555555555

 


 


 ======================================================================VERSE==================================================


 


 Guitar 1 (Tremolo):


 


 

 
 E-------------------------------------------------------------
 B-------------------------------------------------------------
 G-----------------------------------------------------77-55-77
 D--555555555555------------------5555555555555555-8888--------
 A--------------666-888-5555555555-----------------------------
 E-------------------------------------------------------------
 E------------------------------------------------------------------
 B------------------------------------------------------------------
 G------------------------------------------------------------------
 D--55555555555-----------------------------------------------------
 A-------------666-888-5555-33-55-66-55-33-33-55-66-55-33-888-101010
 E----------------------------------------6-------------------------

 


 


 Guitar 2 (Tremolo):


 


 

 
 E-----------------------------------------------------------------
 B-----------------------------------------------------------------
 G----7777-55-7777--------------555555--777-555-777-8888-777-55-777
 D--55------------8888-7777-8888------55---------------------------
 A-----------------------------------------------------------------
 E-----------------------------------------------------------------
 E---------------------------------------------------------------------------
 B-----------------------------------------------------------------888-101010
 G----7777-55-7777--------------55555-88888-77-55----55-77-88-77-55----------
 D--55------------8888-7777-8888-----------------8888------------------------
 A---------------------------------------------------------------------------
 E---------------------------------------------------------------------------

 


 


 ======================================================================OUTRO============================================


 


 Repeat 2x:


 


 Guitar 1:


 


 

 
 E-------------------------------------------------
 B-------------------------------------------------
 G--0-2-3~~-0-2-3-5-3~~-0-2-3~~---0-2~-3-5-2h3p2p-0
 D------------------------------3------------------
 A-------------------------------------------------
 E-------------------------------------------------

 


 


 Guitar 2:


 


 

 
 E-------------------------------------------------
 B-------------------------------------------------
 G-------------------------------------------------
 D--5~----5~----------5~------3~-------------------
 A--5~----5~----------5~------3~-------------------
 E--3~----3~----------3~------1~-------------------

 


 


 Then 6x (Only Guitar 2 changes):


 


 Guitar 1 (Slight p.h. in all notes):


 


 

 
 E-------------------------------------------------
 B-------------------------------------------------
 G--0-2-3~~---0-2-3-2~~-0-2-3~~---0-2~-3-5-2h3p2p-0
 D----------3-------------------3------------------
 A-------------------------------------------------
 E-------------------------------------------------

 


 


 Guitar 2 (First and Second):


 


 

 
 E-------------------------------------------------
 B-------------------------------------------------
 G-------------------------------------------------
 D--5~----5~----------7~------3~-------------------
 A--5~----5~----------5~------3~-------------------
 E--3~----3~----------5~------1~-------------------

 


 


 Guitar 2 (Third and Fourth):


 


 

 
 E--------------------------------------------------------------------
 B--------------------------------------------------------------------
 G--------------------------------------------------------------------
 D--5-----------5--------------------5-------------3------------------
 A--5-----------5--------------------5-------------3------------------
 E--3-3-3-3-333-3-3-3-3-333-333-333--3-3-3-3-333---1-1-1-1-111-111-111

 


 pm ......... ................. ......... .................


 


 Guitar 2 (Fifth and Sixth):


 


 

 
 E--------------------------------------------------------------------
 B--------------------------------------------------------------------
 G--------------------------------------------------------------------
 D--5-----------5--------------------7-------------3------------------
 A--5-----------5--------------------5-------------3------------------
 E--3-3-3-3-333-3-3-3-3-333-333-333--5-5-5-5-555---1-1-1-1-111-111-111

 


 pm ......... ................. ......... .................


 


 =============================================================================REPEAT 4x===========================================


 


 Guitar 1 (Tremolo):


 


 

 
 E-----------------------------------------------------------------------------------------------------
 B--------------------------------------------8--------------------------------------------------------
 G--------------------77----55-88-77-88-55-88---8-------------------33-55----77-1010-77----------------
 D--55-88-77-88-55-88----88-----------------------33-77-55-77-33-77-------77------------1010-88-77h8p77
 A-----------------------------------------------------------------------------------------------------
 E-----------------------------------------------------------------------------------------------------

 


 


 Guitar 2 (Tremolo)


 


 

 
 E-----------------------------------------------------------------------------------------------------
 B-----------------------------------------------------------------------------------------------------
 G--------------------------555555555555555555555------------------------------------------------------

 


 [D--55555555555555555555555-555555555555555555555-33333333333333333333333-77777777777777777777777777777]  


 [A--55555555555555555555555-333333333333333333333-33333333333333333333333-55555555555555555555555555555]  


 

 
 E--33333333333333333333333-----------------------11111111111111111111111-55555555555555555555555555555

 


 


 ===========================================================================FINAL RIFF======================================


 


 Both Guitars (Tremolo notes between the chords):


 


 

 
 E------------------------------------------
 B------------------------------------------
 G-----------------5-7-5-----3-3-3-3-2~-12~~
 D--5-5-5-5-5~-5-8-------8-7-5-5-5-5-3~-----
 A--5-5-5-5-5~------------------------------
 E--3-3-3-3-3~------------------------------`,url:"https://www.chordie.com/chord.pere/www.xguitar.com/guitar-tabs/mithotyn/king_of_the_distant_forest/from_the_frozen_plains.txt"}]},{name:`Other Songs
`,songs:[{title:"Crying Clown (failed - reindex)",chords:`Starts off with just single strums (E is strummed backwards)


 


 [Em]I catch my breath finally


 [G]She keeps me calm and suddenly


 [B]A relapse on old tricks tryna make a new


 


 [Em]In his car she finally


 [G]Tampers with her sexuality


 [B]Scratching at each others minds til their in the nude


 


 [Em]As for me, my loyalty


 [G]Is only sold illegally


 


 (Multiple strumming now)


 


 [B]To the pantomime crying clown


 [G]Cry for me whilst


 [Em]Upside down


 [B]Salivating, bloody mouth


 [G]Or passionately


 [Em]Bloody mouth


 


 [B]And graveyard girls swinging a bag like a pendulum


 


 

 
 E---------------------------------------------|
 B---------------------------------------------|
 G---------------------------------------------|
 D---------------------------------------------|
 A--------------3-2-----------------3-2--------|
 E--0---0-2-3-0-----3-2-0---0-2-3-0-----3-2----| x2

 


 


 (Single strumming again)


 


 [Em]For the static rustling


 [G]Plug me in, the record spins


 [B]And treat me like I wasn't someone that you knew


 


 [Em]Annabelle she reads my dreams


 [G]Surrounding me in casualties


 [B]But I don't get mad cos I know its what you do


 


 [Em]Over-priced phonologies


 [G]Brittle man he dress like me


 


 [B]Like the pantomime crying clown


 [G]Cry for me whilst


 [Em]Upside down


 [B]Salivating, bloody mouth


 [G]Or passionately


 [Em]Bloody mouth


 


 [B]And graveyard girls swinging a bag like a pendulum


 [G]She creates it


 [Em]For her own


 


 [B]Her perfect body


 [G]She is perfectly


 [Em]Lonely


 


 Like a pendulum


 


 

 
 E---------------------------------------------|
 B---------------------------------------------|
 G---------------------------------------------|
 D---------------------------------------------|
 A--------------3-2-----------------3-2--------|
 E--0---0-2-3-0-----3-2-0---0-2-3-0-----3-2----| x2`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/t/the-wytches/385722.html"},{title:"Nasze reggae",chords:`AUTHOR: SZTYWNY PAL AZJI


 TITLE: NASZE REGGAE


 TRANSCRIPTION: PATRYK "PAZI" MAZUREK


 E-MAIL: pazee@poczta.fm


 COMMENTS: APPRECIATED :)))


 KIND OF TAB: CHORDS


 


 INTRO:


 


 

 
 E|----------------------|
 B|----------------------|
 G|----------------------| X3
 D|---------5-5-6--------|
 A|-5-5-8-8--------------|
 E|---------------5------|
 E|------------5--6/1--3-|
 B|------------5--6/1--3-|
 G|------------6--7/2--4-|
 D|---------5--7--8/3--5-|
 A|-5-5-8-8----7--8/3--5-|
 E|------------5--6/1--3-|

 


 


 d B g a


 Jest wiosna


 d B g a


 Robotnicy wychodz? z fabryk


 d B g a


 Wychodz? z fabryk, patrz? w niebo


 [d]Leci bocian


 B g a


 Leci bocian, spada Ikar


 


 [F]Nie wolno [F]wznosi? si? za wys[a]oko[C]


 [F]Nie wolno [F]wznosi? si? za wys[a]oko[C]


 [F]Nie wolno [F]wznosi? si? za wys[a]oko[C]


 [F]Nie wolno [F]wznosi? si? za wys[a]oko[C]


 


 d B g


 Nadchodzi noc


 [a] Robotnicy w sw[d]oich domach[B]


 g a d


 W swoich domach ogl?daj? telewizj?, rozmawiaj?


 B g


 Rozmawiaj? o swoich k?opotach


 [a] I pij? w?dk?


 d B g


 Bo dobrze wiedz?,


 [a] ?e


 


 [F]Nie wolno [F]wznosi? si? za wys[a]oko[C]


 [F]Nie wolno [F]wznosi? si? za wys[a]oko[C]


 [F]Nie wolno [F]wznosi? si? za wys[a]oko[C]


 [F]Nie wolno [F]wznosi? si? za wys[a]oko[C]


 


 [F]Nie wolno [F]wznosi? si? za wys[a]oko[C]


 [F]Nie wolno [F]wznosi? si? za wys[a]oko[C]


 [F]Nie wolno [F]wznosi? si? za wys[a]oko[C]


 [F]Nie wolno [F]wznosi? si? za wys[a]oko[C]


 [F]Nie wolno [F]wznosi? si? za wys[a]oko[C]


 [F]Nie wolno [F]wznosi? si? za wys[a]oko[C]


 [F]Nie wolno [F]wznosi? si? za wys[a]oko[C]


 [F]Nie wolno [F]wznosi? si? za wys[a]oko[C]


 


 G G h D


 Nie wolno wznosi? si? za wysoko


 G G h D


 Nie wolno wznosi? si? za wysoko


 G G h D


 Nie wolno wznosi? si? za wysoko


 G G h D


 Nie wolno wznosi? si? za wysoko`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/s/sztywny-pal-azji/44488.html"},{title:"Like Nothing Ever Happened",chords:`Written by: ?


 Note: Taped it off the radio. If any one knows the album name and the


 writers please E mail. Thanks.


 


 Just Like Nothing Ever Happened Sylvia


 


 Intro


 


 [Eb]We meet on the s[Bb]treet You int[Ab]roduce her to [Eb]me


 And my heart sinks in[Bb]side as I [Ab]say to her it's nice to m[Bb]eet you.


 [Eb]You call me an old fr[Bb]iend Gu[Ab]ess that's the way you look at it.


 [Bb]Just l[Eb]ike n[Bb]oth[Ab]ing e[Bb]ver happ[Eb]ened.


 


 CHORUS:


 [Bb] Like no[Eb]thing ever happened be[Ab]tween you and me [Bb]you forget easily


 Like n[Eb]othing ever happened th[Ab]ere's no look in your eye


 [Bb]No feelings to hide


 [Ab]Here I am fa[Eb]lling apart fo[Ab]rcing a smile while t[Eb]here you [Ab]are


 Bb Eb Ab Bb Eb REPEAT INTRO


 Act-ing like nothing ever happened


 


 I t[Eb]hink about the t[Bb]imes I [Ab]lay by your s[Eb]ide


 You held me in your a[Bb]rms You [Ab]said to me, "I'll always l[Bb]ove you."


 [Eb]Now here we s[Bb]tand [Ab]her hand in your hand


 [Bb]Just l[Eb]ike n[Bb]othi[Ab]ng e[Bb]ver ha[Eb]ppened.


 


 go to chorus, then lead, then to ending


 


 ENDING:


 [Ab]Here I am fa[Eb]lling apart fo[Ab]rcing a smile while t[Eb]here you are


 Walking a[Ab]way like no[Bb]thing ever ha[Eb]ppened.


 


 Intro to end. Ooooh Oooohhh Oooohh`,url:"https://www.chordie.com/chord.pere/www.allcountrytabs.com/tabs/sylvia/like-nothing-ever-happened-1549.html"},{title:"Nobody",chords:`Written by: Kye Fleming and Dennis W. Morgan


 


 


 Nobody recorded by Sylvia


 


 Intro chords C Am C Am


 


 S[C]itting in a restaurant; she walked by I [Am]seem to recall that certain look


 her eye


 I a[Dm]sked "who's that"? You said with a smile, "oh n[G]obody, [F] nob[Em]ody"[G]


 W[C]ell, maybe that explains that last two weeks You ca[Am]lled me up dead on your feet


 "Working l[Dm]ate again"? I asked, "who with?" You said, "No[G]body,[F] no[Em]body."[G]


 


 Chorus:


 Well your no[Dm]body ca[G]lled today s[C]he hung [Em]up when I a[Am]sked her name


 Well I won-[Dm]der d[G]oes she think she's being cl[C]ev-er. [F]OH[C] OH [F]OH [C]OH


 You [Dm]say nobody's a[G]fter you t[C]he fact is [Em]what you [Am]say is true


 But I can l[Dm]ove you like nobody c[G]an even bet[C]ter


 


 1.) Am C Am 2.)G Oh oh oh repeat chorus


 


 La[C]te last night we went for a drive


 You were m[Am]iles away I asked "who's on your mind?"


 You said, "N[Dm]obody, who do you ask?"


 Aw h[G]er again [F] I could have t[Em]old you [G]that


 We c[C]ame back home got ready for bed


 I [Am]said to myself, " I've got one shot left."


 You[Dm]'re still mine and I won't stand in line behind no[G]body [F] n[Em]obody.[G]


 


 go to chorus, repeat chorus to fade.`,url:"https://www.chordie.com/chord.pere/www.allcountrytabs.com/tabs/sylvia/nobody-1548.html"},{title:"Counting the Beat",chords:`=================


 Counting The Beat


 =================


 


 = harmonic


 Throughout this song u can simply play Power Chords or Barre chords.


 


 INTRO 1:


 


 

 
 e|----x-x-x-x---x-x-x-x---x-x-x-x----------------------------------------|
 B|----x-x-x-x---x-x-x-x---x-x-x-x----------------------------------------|
 G|----x-x-x-x---x-x-x-x---x-x-x-x----------------------------------------|
 D|----x-x-x-x---x-x-x-x---x-x-x-x----------------------------------------|
 A|----x-x-x-x---x-x-x-x---x-x-x-x----------------------------------------|
 E|----x-x-x-x---x-x-x-x---x-x-x-x----------------------------------------|

 


 


 INTRO 2: during the intro there is a little riff sounding thing. Its not actually a


 


 riff...


 instead it is a Bm chord....being played with teh 3 hight pitched strings.


 


 Just his this chord a few times......


 

 
 e|---7------|
 B|---7------|
 G|---7------|
 D|----------|
 A|----------|
 E|----------|

 


 


 And occasionally add this in.....


 

 
 e|------7-----------|
 B|-----------7------|
 G|-7--------------7-|
 D|------------------|
 A|------------------|
 E|------------------|

 


 


 [E]Look at the [B]sun[A]ris[E]e


 


 I look at it [B]bur[A]n[E]


 


 I look into [B]your [A]eyes[E]


 


 Don't know where to[B] tu[A]rn[E]


 


 I'm gonna [B]drift in[A]to that [E]void


 


 I'm flying through [B]space, I'm an[A] aster[E]oid


 


 Time doesn't take [A]place when you're[A] paran[E]oid


 


 I'm thinking about [E]you, and[F#] not[D]hing [B]else


 


 (hold the B) A


 Thinking about you, you're thinking about me


 


 (hold the A) E


 Thinking about you, I'm counting the beat


 


 [B]Thinking about[A] you[E]


 


 [B]Thinking about[A] me[E]


 


 [B]Thinking about[A],[E]


 


 (hold the E)


 just you and me, la da de de, there ain't no place I'd rather be


 


 [B]La da de da, la da de da[A], la da de d[D]a, la da de da


 


 [B]La da de da, la da de da[A], la da de d[D]a, la da de da


 


 [B]La da de da, la da de da[A], la da de d[D]a, la da de da


 


 [B]Oh, oh, [A]oh, oh, [E]oh, oh, oh!


 


 I'm bleeding to [B]deat[A]h[E]


 


 On a cloudless [B]day[A] [E]


 


 A three, a four [B]heartbeat[A] [E]


 


 A waltzin' a[B]way...[A] [E]


 


 [B]Oooh [A]ooh, [E]oo oo


 


 [B]Oooh [A]ooh, [E]oo oo


 


 [B]Oooh [A]ooh, [E]oo oo


 


 [B]Oooh [A]ooh, [E]oo oo


 


 [B] [A] [E] [B] 


 I'[A]m co[E]unting the beat 2 3 4 5, I'm feeling the heat to be alive


 


 I'm counting the b[B]eat 6 7[A] 8 [E]9, I'm wishing that [E]you,


 


 [E]That [F#]you [D]were [B]mine


 


 (hold the B) A


 Thinking about you, you're thinking about me


 


 (hold the A) E


 Thinking about you and counting the beat


 


 [B]Thinking about [A]you[E]


 


 [B]Thinking about[A] me[E]


 


 [B]Thinking about [E]you...


 


 Thinking about [F#]me...


 


 Thinking about [G]you.....[E]


 


 (hold the E)


 Thinking about, Just you and me, la da de de, there ain't no place I'd rather be


 


 [B]La da de da, la da de da[A], la da de d[D]a, la da de da


 


 [B]La da de da, la da de da[A], la da de d[D]a, la da de da


 


 [B]La da de da, la da de da[A], la da de d[D]a, la da de da


 


 [B]La da de da, la da de da[A], la da de d[D]a, la da de da


 


 [B]La da de da, la da de da[A], la da de d[D]a, la da de da


 


 [B]La da de da, la da de da[A], la da de d[D]a, la da de da


 


 [B]La da de da, la da de da[A], la da de d[D]a, la da de da


 


 [B]La da de da, la da de da[A], la da de d[D]a, la da de da


 


 [B]La da de da, la da de da[A], la da de d[D]a, la da de da


 


 Suggestions or questions email me at mgs2anime@hotmail.com


 tabbed out by BassMan Ben


 www.myspace.com/bassmanben`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/t/the-swingers/84905.html"}]},{name:"Fluorescent (1993)",songs:[{title:"Silence Is Your Only Friend",chords:`&lt;br/&gt;
 From: "Vebjoern Braathen" &lt;br/&gt;
 Subject: w/wynn_steve/silence_is_your_only_friend.crd&lt;br/&gt;
 Date: Sat, 23 May 1998 01:10:24 CEST&lt;br/&gt;
 &lt;br/&gt;
 SILENCE IS YOUR ONLY FRIEND&lt;br/&gt;
 (Written and performed by Steve Wynn)&lt;br/&gt;
 (Album: Melting in the dark)&lt;br/&gt;
 &lt;br/&gt;
 Visit one of the best fan sites around:&lt;br/&gt;
 http://www.stevewynn.net&lt;br/&gt;
 &lt;br/&gt;
 A good rocking little diddy.&lt;br/&gt;
 ---------------------------------------------&lt;br/&gt;
 [Nice fingerpicking]&lt;br/&gt;
 D              G             D&lt;br/&gt;
 Day breaks the night in tiny pieces&lt;br/&gt;
 D              G               D      [Prepare for guitarattack]&lt;br/&gt;
 Pounds on the light and then increases&lt;br/&gt;
 C[Play hard]    G                D&lt;br/&gt;
 I don't want to have to face the day&lt;br/&gt;
 C          G               D     C   [Let the guitarchord fade away]&lt;br/&gt;
 Landslide, falls aside and fades away&lt;br/&gt;
 [Over to nice fingerpicking again]&lt;br/&gt;
 D               G&lt;br/&gt;
 Silence is your only friend.&lt;br/&gt;
 &lt;br/&gt;
 &lt;br/&gt;
 ----------------------------------------------&lt;br/&gt;
 Tabbed by Vebjørn Bråthen (vebjorn@stones.com)&lt;br/&gt;
 Check me up: &lt;br/&gt;
 http://www.geocities.com/BourbonStreet/Delta/6188/index.html&lt;br/&gt;
 
 &lt;/div&gt;
 &lt;/div&gt;
 &lt;div class="breadcrumbs"&gt;`,url:"https://www.chordie.com/chord.pere/chordiearchive.chordie.com/chord.pere/tabfu.thudspace.net/w/wynn_steve/silence_is_your_only_friend.crd"},{title:"Follow Me",chords:`[G#m]If you feel like going down[F#], so do I. Stick around.


 [E]Follow me, [F#]follow me[G#m], follow me


 Verse:


 [G#m]If you see a shooting star or a [F#]broken taillight on an old blue car


 [E]Follow me, [F#]follow me[G#m], follow me


 Verse:


 [G#m]If you're looking for a sign, I [F#]sure hope it's mine.


 [E]Follow me, [F#]follow me[G#m], follow me


 Bridge:


 [A]Sometimes ench[E]anting [A]


 [A]Sometimes [F#] reprimanding.


 Verse:


 [G#m]If you'd like to be a child or [F#]lose yourself for a little while,


 [E]Follow me, [F#]follow me[G#m], follow me


 Bridge:


 What are yout expectations ?


 I'll leave it tu your imagination.


 Verse:


 If you feel like going down, so do I. Stick around.


 Follow me, follow me, follow me.


 

 
 ----------------------------------------------

 


 Tabbed by Vebj?rn Br?then (vebjorn@stones.com)


 Check me up:


 http://www.geocities.com/BourbonStreet/Delta/6188/index.html


 easy-to-remember-adress:http://come.to/vebjorn


 Visit one of the best fan sites around:


 http://www.stevewynn.net


 

 
 ----------------------------------------------------`,url:"https://www.chordie.com/chord.pere/chordiearchive.chordie.com/chord.pere/www.guitaretab.com/w/wynn-steve/21093.html"}]},{name:"In Ghostlike Fading (2012)",songs:[{title:"One Velvet Day",chords:`[---]  


 "One Velvet Day" by MY BEST FIEND


 


 Tabbed by Alexander Power


 


 [---]  


 


 [G] I think I see an orange [C]light in the sky[Am]


 


 It's the refl[C]ection of a hous[G]e, set on fire


 


 Like pulling thread through the pin[C]holes of your eyes[Am]


 


 It's gonna [C]be a perfect[G] time


 


 


 And maybe I'm not trying my[D] best


 


 Seems like I can hardly [Am]bother at all


 


 Think the proof of how it's the [C]distance you fall


 


 [Am] But I'd be h[C]appy to be[G] wrong


 


 


 [G] [C] [Am] [C] [G]  


 


 I think I see those flashing [C]lights start to shine[Am]


 


 And provi[C]dence comes from the [G]satellites


 


 Control the action through the [C]holes of your smile[Am]


 


 It's gonna [C]be a perfect[G] time


 


 


 The one now they t[Am]ake (One perfect day)


 


 Me and all my fr[C]iends thinking we've got it made


 


 Thinking we can o[Am]utrun our mist[C]akes


 


 It's gonna be a perfect[G] day


 


 


 [G] [C] [Am] [C] [G]  


 


 [G] It's gonna be a perfect[D] time


 


 It's gonna be a perfect[G] time


 


 It's gonna feel perfectly[D] fine


 


 It's gonna be a perfect[G] time


 


 


 [G] I think I see an orange [C]light in the sky[Am]


 


 It's the refl[C]ection of a hous[G]e, set on fire


 


 Like pulling thread through the pin[C]holes of your eyes[Am]


 


 It's gonna [C]be a perfect[G] time


 


 [---]  


 http://www.mybestfiend.com


 


 [---]`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/m/my-best-fiend/338182.html"}]},{name:"Peace in a Time of War (2003)",songs:[{title:"Peace in a Time of War",chords:`Tuning: standard


 


 

 
 e|--------------------------------------------------------------------------|
 B|--------------------------------------------------------------------------|
 G|---7/8/7--5-3-5/8-7-5-3---3------5/8/7-5-3-5/8/7---8-8-7-5----------------|
 D|-5----------------------5------------------------8------------------------|
 A|--------------------------------------------------------------------------|
 E|--------------------------------------------------------------------------|

 


 [A#] [Am] [Gm] [F]  

 
 e|-----------------6---5---3---1------------|
 B|-----------7-6---6---5---3---1------------|
 G|-7/8/7-5-3-------7---5---3---2------------|
 D|-----------------8---7---5---3------------|
 A|-----------------8---7---5---3------------|
 E|-----------------6---5---3---1------------|

 


 [Gm] [Cm]  

 
 e|--3---3--------|
 B|--3---4--------|
 G|--3---5--------| Verse
 D|--5---5--------|
 A|--5---3--------|
 E|--3---x--------|

 


 


 Chorus- Gm Cm A# Am`,url:"https://www.chordie.com/chord.pere/www.azchords.com/s/soja-tabs-45133/peaceinatimeofwar-tabs-421352.html"},{title:"Rasta Courage",chords:`My first tab :)


 


 Play the song using barre chords


 


 [Bb]Try and remember now just what h[F]as been done.


 


 [Gm]Enslavement, displacement of ev[Eb]ery nation


 


 And now to one nation, everyone hold their grudge.


 Kind of makes me wonder about which side I'm on.


 I don't defend white, and I don't defend black.


 I defend truth and rights and all of that.


 I work on situations where I'm at


 Hold my position and never fall of track.


 


 Chorus


 Nah give up my faith!


 Though Babylon rage,


 I and I will strive until


 the end of my days.


 go against society, Rasta courage.


 


 I never give no good vibes


 and I never give up no truth.


 Never trade my sanity for living in Babylon crew.


 Vanity will never drive this man insane.


 This man will walk alongside Jah again.


 We see all of the pressure to conform today,


 And I may sometimes bend,


 but only as not to break.


 �¯Cause a life of iniquity for laziness' sake


 Is a deal with the devil Rasta just can't make.


 


 Chorus


 


 Looking back now upon all of the evidence


 400 years and what those years have


 really done, we talk of peace but at the


 first sign of war. Bredren and bredren and


 sistren ain't sistren no more. Without forgiveness


 how will any war cease, while the heathen rage


 Rastaman sitting at ease. No one will move a


 muscle for some moral justice and with no justice they won't live.`,url:"https://www.chordie.com/chord.pere/www.azchords.com/s/soja-tabs-45133/rastacourage1-tabs-421346.html"}]},{name:"Science Will Figure You Out (1999)",songs:[{title:"Communist Love Song",chords:`G D Em C*1


 


 C*1


 

 
 E---------------------------------- |
 B-3-----3-------3---5-------5--- |
 G----2-------2-----------4------- |
 D----------0-----------0--------- |
 A--------------------------------- |
 E--------------------------------- |

 


 


 C*


 

 
 E---------------------------------- |
 B-3-----3-------3---5------5--- |
 G----2-------2----------4------- |
 D----------0------------------0- |
 A--------------------------------- |
 E--------------------------------- |

 


 


 G D Em C*


 It was well conceived in theory but it doesn't work in life


 G D Em C*


 Comrade has to wonder: ?Is it ever worth the effort??


 G D Em C*


 Well I don't know, but I've been told not to hang on to my hope


 G D Em C* 45 5450


 Well I don't know, but I've been told and I've been listening all my life


 


 [G]If you're ever l[D]ess than certain [Em]about the world


 C*323023 5450


 Please don't let the worry make its way into your work


 And [G]if you would stick [D]up for me in the [Em]face of some adversity


 C*323023 5450


 Know that I would only do the same


 


 Cuz it was w[G]ell conceived in [D]theory but it [Em]doesn't work in [Em]life[C] [C] [D]


 But [G]me I will not [D]write it off not e[Em]ver having [Em]tried[C] [C] [D]


 Well I don't [G]know, but I've [D]told not to [Em]hang on to my [Em]hope[C] [C] [D]


 Well I don't [G]know, but I've [D]told that these are [Em]lies and they get [Em]old[C] [C] [D]


 


 So l[G]ook me in the [D]eyes under e[Em]xpanding winter s[Em]kies


 You'll find a f[C]eeling there that [Em]never knows the c[D]old


 [G]Look me in the [D]eyes and the [Em]skeptic in me [Em]dies


 The [C]skeptic is a [Em]fool, we are ex[D]ceptions to the [D]rule


 


 Cuz this is [G]our land


 This is o[D]ur land


 I will c[Em]ross it holding y[Em]our hand


 From K[C]ursk ____ to Mo[Em]scow we will n[D]ot be turned a[D]way


 


 This is o[G]ur land


 This is o[D]ur land


 I will c[Em]ross it holding your hand


 In cr[C]ooked streets of [Em]Petersburg


 [D]We are all the same[D] [D] [D]


 


 So [G]if you're ever l[D]ess than certain a[Em]bout the world


 [C]Please don't let the [Em]worry make its [D]way into your [D]work


 And i[G]f you would stick [D]up for me in the [Em]face of great adversity


 [C]Know that I would [Em]do the same


 [D]Know we are the same


 


 [G]If you would stick [D]up for me


 Speak k[Em]indly and p[C]oetically


 [C]You can be my [Em]personal a[D]mbassador to the [D]world


 And [G]if you're ever [D]less than certain


 [Em]I will be your I[C]ron Curtain


 [C]I will be your B[Em]erlin Wall


 And [D]I will never f[G]all[G] [G/E]`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/s/soltero/87945.html"},{title:"Laundrydaydreams",chords:`laundrydaydreams - Soltero


 


 


 [C#m]I want to be [G#]drunk on important occ[A]asions - I'll hit a rep[E]orter for you.


 


 [C#m]I want to be [G#]mad when it matters the l[A]east,


 


 So we can [E]laugh about it later.


 


 [C#m]Sometimes [G#]some folks [A]die of [E]small dreams.


 


 [C#m]Sometimes [G#]I'm glad [A]I've only got one [B]goal...


 


 [E]If the d[B]elay was long,[C#m] you've got my co[G#]ntinuing apologies -


 


 [A]I'm sorry, [Am]but it was worth it, if [E]I could bring you to [B]bring me to--


 


 if [E]we were in a movie, I'd [G#]tell you my name,


 


 and [C#m]then you would smile and[E] tell me the same.


 


 If [A]we were in a movie I'd be [E]happy to see you sm[A]iling frame by [B]frame


 


 please don't w[E]ake me, I'm only dre[G#]aming,


 


 You [C#m]never even told me [E]your lines.


 


 [A]Two weeks is [Am]too long for [E]two people to w[B]ait...


 


 I [C#m]want to be witty when the n[G#]ewspaper calls;


 


 I [A]hope you're still pretty when the dy[E]nasty falls.


 


 [C#m]Pick an add[G#]iction that's easy to t[A]reat, so we can l[E]augh about it later.


 


 [C#m]Sometimes [G#]some folks [A]die of [E]small dreams.


 


 C#m G# A E~


 Someday real soon you'll bring me to me knees.`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/soltero/laundrydaydreams_crd.html"}]},{name:"Jill Sobule (1995)",songs:[{title:"Resistance Song",chords:`Jill Sobule - Resistance Song


 


 Tabbed by S. Smith for UltimateGuitar.com


 


 For the end of the chorus "...no tomorrow",


 something like this is played:


 


 [F] [F/E] [D] [C/B] [C] [C/B] [Am]  


 

 
 |-(1)--------------0---0---0------|
 |-(1)------3-------1---1---1-1-1--|
 |--2---2---2-------0---0---0-0-2--|
 |--3---3---0------2----2---2---2--|
 |--3---3-------2--3----3---3-2-0--|
 |--1---0--------------------------|

 


 


 


 


 [Am] [Am/G]  


 [Am]I had this dream we were in the resisitance


 


 [G]Somewhere in France fighting traitors and facists


 


 [Am]You were my mistress, yes you were a woman


 


 [G]But I knew it was you by the shape of your mouth


 


 [Dm]You called me Maurice and I had a small moustache


 


 Played clarinet in a [G]decadent band, till we


 


 [C]Hid in the bushes


 


 [F]We shot from the bushes


 


 [C]Made love in the bushes


 


 [F]Like there was no[C] tomorrow


 


 [Am] [Am/G]  


 


 [Am]But in my real life I'm a cocktail waitress


 


 [G]Dodging mens' hands instead of bullets


 


 [Am]and you're a bass player in the band that got a deal


 


 [G]Dealing with assholes instead of explosives


 


 [Dm]Still we're grateful to be alive


 


 Together fighting [G]side by side, as we


 


 [C]Hide in the bushes


 


 [F]We shoot from the bushes


 


 [C]We love in the bushes


 


 [F]Like there's no tomorrow


 


 [C]Drink from the bushes


 


 [F]We'll hide in the bushes


 


 [C]We'll love in the bushes


 


 [F]Like there was no [C]tomorrow


 


 Am G x2


 


 Dm (softly)


 We promised if one of us left or died


 


 We'd meet again in [G]another life, and we'll


 


 


 [C]Hide in the bushes


 


 [F]We'll shoot from the bushes


 


 [C]Make love in the buses


 


 [F]Like there's no tomorrow


 


 [C]We'll hide in the bushes


 


 [F]We'll shoot from the bushes


 


 [C]Make love in the bushes


 


 [F]Like there is no [C]tomor[Am]row`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/j/jill-sobule/252279.html"},{title:"I Kissed a Girl",chords:`Jill Sobule is a singer/songwriter with a flair for lyrics and


 arrangments. Her self-titled debut is out on Lava/Atlantic. I recommend it


 highly! Here's her first single off the album, also playing as a music


 video right now.


 


 -- Ali.


 


 

 
 --------------------------------------------

 


 


 I KISSED A GIRL


 (Jill Sobule, Robin Eaton (c) 1994)


 reprinted without permission


 


 VERSE:


 [G]Genny came over and told me about Fred


 He's [C]such a hairy behemoth she said


 And [Am]dumb as a box of hammers


 But he's [G]such a handsome guy


 And I [G]opened up and told her about Larry


 And[C] yesterday how he asked me to marry


 I'm[Am] not giving him an answer yet


 I [G]think I can do better


 


 CHORUS:


 So we[Em] laughed, com[Am]pared notes


 We [Em]had a drink, we had a smoke


 [Am]She took off [C]her overcoat


 I kissed [G]a gi[C]rl[Em] [A]


 I kissed [G]a gi[C]rl[Em] [A]


 


 VERSE:


 So she called home to say she'd be late


 He said, he worried but now he'd feel safe


 I'm glad you're with your girlfriend,


 Tell her "Hi" for me


 So I looked at you, you had guilt in your eyes


 But it only lasted a little while


 And then I felt your hand upon my knee


 


 CHORUS:


 And we [Em]laughed at the [Am]world


 [Em]They can have their diamonds


 And [Am]we'll have our [C]pearls


 I kissed [G]a gi[C]rl[Em] [A]


 I kissed [G]a gi[C]rl[Em] [A]


 


 BRIDGE:


 I [F]kissed a girl, her lips were sweet


 [C]She was just like kissing me


 I [D]kissed a girl, won't change the world


 


 But I'm so glad


 I kissed [G]a girl


 


 (GUITAR SOLO)


 


 And we laughed at the world


 They can have their diamonds


 And we'll have our pearls


 I kissed a girl (for the first time)


 I kissed a girl (and I may do it again)


 I kissed a girl


 I kissed a girl


 


 I kissed a girl, her lips were sweet


 She was just like kissing me (but better)


 I kissed a girl


 


 I kissed a girl, won't change the world


 But I'm so glad


 I kissed a girl (for the first time)


 I kissed a girl (won't be the last time)


 I kissed a girl


 I kissed a girl


 


 [--]  

 
 GAT d H+ s !g p1 !au a- w+&gt;++ v++(-) C++&gt;++++ U !P L- 3--------------=- E+ N++ K+++

 


 !W M++ !V -po+ Y+ t !5 j++&gt;$ R G' tv+ b+++ D+ B-- e++&gt;+++ u**


 h- f+ r++&gt;+++ !n x+`,url:"https://www.chordie.com/chord.pere/www.azchords.com/j/jillsobule-tabs-40424/ikissedagirl-tabs-331428.html"}]},{name:"Garota moderna (2002)",songs:[{title:"Maria moita",chords:`I present you this wonderful song.


 the first version is more easy to play, with a great bass riff.


 


 Rosalia de Souza version:


 


 [G6] [G6/F#] [G6/F] [G6/E] [Eb9] [D7/9#] [G7] 


 [G7] [C9/G]  


 


 


 Original version of Carlos Lyra:


 ( Tab from: http://www.guitartabs.cc/tabs/r/rosalia_de_souza/maria_moita_crd.html )


 [A6] [G#6/5#] [C6/G] [F#6/5#] [F7] [E] [A7] [D7] 


 [A7] [D9/A]  


 


 G#6/5# chord position


 

 
 1|-|-|-|-|-|-|-|-|-|-
 2|-|-|-|-|4|-|-|-|-|-
 3|-|-|-|-|3|-|-|-|-|-
 4|-|-|1|-|-|-|-|-|-|-
 5|-|-|-|-|-|-|-|-|-|-
 6|-|-|-|2|-|-|-|-|-|-

 


 


 [1] [2] [3] [4] [5] [6] [7]`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/r/rosalia_de_souza/maria_moita_crd.html"}]},{name:"A Year at the Movies (2004)",songs:[{title:"Gone Away",chords:`A Year At The Movies


 2004


 Submitted by: paramore_fans@yahoo.com


 


 Tuning: Standard EADGBe


 


 Key: G


 


 Chords used:


 G 320033


 D xx0232


 Em 022000


 C x32010


 [F#]D/F# [244322]2x023x


 Bm x24432


 


 Intro: Em D Em D Em D Em G x3, Em D Em D C


 


 Verse 1:


 [Em] Today's another [D/F#]day


 Not missing [C]you


 [Em] I had to see it


 From a [D/F#]different


 point of [C]view


 cause its [Em]over [D/F#]now[C]


 You're just a


 [Em]face in the [D/F#]crowd[C]


 


 Chorus 1:


 [G]Gone gone a[D]way


 I've [Em]wasted so


 much time on you


 Good[C]bye it's time


 for something new


 cause I'm


 [G]Gone gone a[D]way


 There's [Em]nothing


 more that you can say


 You [C]said your last


 words yesterday


 C(hold)


 I'm gone


 


 Verse 2:


 [Em] I never thought I'd


 [D/F#]see this side of [C]you


 [Em] Colder than the [D/F#]dark


 side of the [C]moon


 I'm so [Em]happy [D/F#]now[C]


 You're just a [Em]face


 D/F# C(hold)


 in the crowd


 


 Chorus 2:


 [G]Gone gone a[D]way


 I've [Em]wasted so


 much time on you


 Good[C]bye it's time


 for something new


 cause I'm


 [G]Gone gone a[D]way


 There's [Em]nothing


 more that you can say


 You [C]said your last


 words yesterday


 I'm [Em]gone[G] [F#] [Bm] [Em]


 


 Bridge:


 [C] Some things are


 better left un[Em]said[G] [F#] [Em] [D]


 but [C]I can't hold it in


 


 Verse 3:


 a[Em]way [D]I'm [Em]gone


 [G]away[Em] [D]I'm [Em]gone [G]away


 [D]you're [Em]gone


 G Em D Em(hold)


 away I'm gone


 FUCK [Em]YOU![D]!![Em]![D] [Em] [D] [Em] [G]


 [Em] [D]you [Em]rui[D]ned [Em]eve[D]ry[G]thing!!!!


 Em D Em D Em D Em G , Em D Em D C


 You!!!!!


 


 Chorus 3:


 [G]Gone gone a[D]way


 Em(hold)


 I've wasted so


 C(hold)


 much time on you


 gone apart!!!!


 [G]Gone gone a[D]way


 There's [Em]nothing


 more that you can say


 You [C]said your last


 words yesterday


 


 Chorus 4:


 [G]Gone gone a[D]way


 Em(hold)


 I've wasted so


 much time on you


 C(hold)


 Goodbye it's time


 for something new`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/s/social-code/282542.html"},{title:"Beautiful",chords:`A Year At The Movies


 2004


 Submitted by: paramore_fans@yahoo.com


 


 Key: G#


 


 Tuning: Standard EADGBe


 


 Chords used:


 [Fm]C# [133111]x46664


 [G#]Eb [466544]x68886


 Bbm x13321


 


 Intro:


 


 Basslines: Fm x4


 


 Distortion: Fm C# G# Eb x2


 


 Verse 1:


 [C#] People always try


 and [Fm]put me [G#]down


 But [C#]I, I don't ever give


 a [Fm]fuck what [G#]people [C#]say


 


 I try and listen to


 the [Fm]voice in[G#]side my [C#]head


 I try, I [Fm]try, I [G#]try


 


 ( Tab from: http://www.guitartabs.cc/tabs/s/social_code/beautiful_crd.html )


 Chorus:


 [Fm] I feel so [C#]Beautiful to[G#]day


 [Eb]  


 [bababababadababa]  


 [Fm] You're just so [C#]typical


 [G#]You can't [Eb]break me


 


 Verse 2:


 [C#] I'm not ever gonna [Fm]fall in [G#]line


 cause [C#]I, I don't wanna be


 a[Fm]nother [G#]plastic [C#]mind


 I try to listen to the


 [Fm]voice in[G#]side my [C#]head


 I try, I [Fm]try, I [G#]try


 


 (Repeat Chorus Twice)


 


 Bridge:


 [Bbm] [G#] [C#] [G#] [Eb] You're just like everybody


 Bbm G# C# G# Eb Fm (microphone speaks)


 Why would I wanna be like you?


 1,2,3,4


 


 (Repeat Chorus twice)


 


 Outro: Fm x4, Fm(hold)`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/social_code/beautiful_crd.html"}]},{name:"You Are Not Alone (2010)",songs:[{title:"Sow Good Seeds",chords:`Sow good seeds / Everybod[C]y[C]


 Sow good [C]seeds / Every[G]body


 On the [C]mountain / Down in the [F]valley


 You gonna [C]reap [G]/ Just what you [C]sow


 


 Sow by [C]walking / Sow by [C]talking


 Sow by [C]every- / -thing you [G]do


 Don't mind [C]no one / Keep on [F]sowing


 You gonna [C]reap [G]/ Just what you [C]sow


 


 Sow good [C]seeds / Every[C]body


 Sow good [C]seeds / Every[G]body


 On the [C]mountain / Down in the [F]valley


 You gonna [C]reap [G]/ Just what you [C]sow


 


 Hark the [C]voice of / Jesus [C]calling


 Who will [C]come and / Wake the [G]dead


 Tombs of [C]mercy / Harvest [F]waitin'


 Here am [C]I [G]/ Oh mercy [C]me


 


 instrumental verse)


 


 They'll talk a[C]bout you / They'll vili[C]fy you


 Call you [C]everything / 'cept child of [G]God


 Pay no [C]mind to / What they're [F]sayin'


 They gonna [C]reap [G]/ Just what they [C]sow


 


 Sow good [C]seeds / Every[C]body


 Sow good [C]seeds / Every[G]body


 On the [C]mountain / In the [F]valley


 You gonna [C]reap [G]/ Just what you [C]sow


 


 Sow good [C]seeds / Every[C]body


 Sow good [C]seeds / Every[G]body


 On the [C]mountain / In the [F]valley


 You gonna [C]reap [G]/ Just what you [C]sow`,url:"https://www.chordie.com/chord.pere/www.azchords.com/m/mavisstaples-tabs-56019/sowgoodseeds1-tabs-824674.html"},{title:"Wrote a Song for Everyone",chords:`-----------------------------------------------------------------------------

 


 Wrote A Song For Everyone - Mavis Staples


 

 
 -----------------------------------------------------------------------------

 


 Tabbed by: Magic Bear


 E-mail: sfloody17@bellsouth.net


 


 Tuning: Down a Whole Step, DGCFAD


 


 Intro Riff:


 


 

 
 e|-----3--3--------0---0---0-------2----------------------------------------|
 B|-----3--3--------1---1---1-------3----------------------------------------|
 G|-----0--0--------0---0---0-------2----------------------------------------|
 D|-----0--0--------2---2---2-------0----------------------------------------|
 A|-----2--2---2-2--3---3---3------------------------------------------------|
 E|-----3--3-----------------------------------------------------------------|

 


 


 Intro x2


 


 Verse 1:


 [G]Met myself a c[D]omin' co[C]unty welfare l[G]ine.


 


 [G]I was feelin' st[C]rung out, Hu[G]ng out on the l[D]ine.


 


 [G]Saw myself a g[D]oin', do[Em]wn to war in J[C]une.


 


 [G]I want, All[D] I want is to [C]write myself a [G]tune.


 


 *For the Chorus, Change From the *G* to the *C* in the same style as the Intro Riff*


 


 CHORUS:


 [C]Wrote A Song For E[G]v'ryone,


 


 [C]Wrote a song for [G]truth.


 


 [C]Wrote A Song For E[G]v'ryone[Em]


 


 And I c[C]ouldn't even talk to yo[G]u.


 


 


 Intro Riff


 


 Verse 2:


 Got myself arrested, Wound me up in jail.


 Richmond 'bout to blow up, Communication failed.


 If you see the answer, now's the time to say.


 All I want, All I want is to get you down to pray.


 


 CHORUS


 


 *Guitar Solo*


 Use Verse Chords


 


 CHORUS


 


 Saw the people standin' thousand years in chains.


 Somebody said it's diff'rent now, look, it's just the same.


 Pharaohs spin the message, round and round the truth.


 They could have saved a million people, How can I tell you?


 


 CHORUS


 CHORUS


 CHORUS


 


 There Are a couple of weird rhythms in the song, just listen to it a couple of times and


 play around with your strumming patter and you'll get it.


 


 Email me with any questions


 


 -The Magic Bear`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/m/mavis-staples/325805.html"}]},{name:"Squirtgun (1995)",songs:[{title:"Another Sunny Afternoon",chords:`-- Artist: Squirtgun


 -- Song: Another sunny afternoon


 -- Tabbed by Fabio Berlusconi


 -- Email: bjfabiobebe@virgilio.it


 Riff 1 - Intro


 

 
 e|-------------------------------------------------------------------|
 B|-------------------------------------------------------------------|
 G|---7---5-4-4h5p4---7---5-4-4h5p4---7---5-4-4h5p4-----7-7-7-7-7-7-7-|
 D|-5---5-----------5---5-----------5---5-----------5---7-7-7-7-7-7-7-|
 A|-----------------------------------------------------5-5-5-5-5-5-5-|
 E|-------------------------------------------------------------------|

 


 


 Riff 2 - Chorus


 [G] [C] [G] [C]  

 
 e|-------------------------------------------------------------------|
 B|-------------------------------------------------------------------|
 G|-----------------5-5-5-5-5-5-5-5------------------5-5-5-5-5-5-5-5--|
 D|-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5--5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5--|
 A|-5-5-5-5-5-5-5-5-3-3-3-3-3-3-3-3--5-5-5-5-5-5-5-5-3-3-3-3-3-3-3-3--|
 E|-3-3-3-3-3-3-3-3------------------3-3-3-3-3-3-3-3------------------|

 


 [G] [C] [G] [D]  

 
 e|-------------------------------------------------------------------|
 B|-------------------------------------------------------------------|
 G|-----------------5-5-5-5-5-5-5-5--------------------7-7-7-7-7-7-7--|
 D|-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5--5-5-5-5-5-5-5-X---7-7-7-7-7-7-7--|
 A|-5-5-5-5-5-5-5-5-3-3-3-3-3-3-3-3--5-5-5-5-5-5-5-X---5-5-5-5-5-5-5--|
 E|-3-3-3-3-3-3-3-3------------------3-3-3-3-3-3-3-X------------------|

 


 Riff 3 - Verse


 [Bm] [E] [Bm] [Am]  

 
 e|-2-2-x-2-2-2-2-2-0-0-x-0-0-0-0-0--2-2-x-2-2-2-2-2-5-5-x-5-5-5-5-5--|
 B|-3-3-x-3-3-3-3-3-0-0-x-0-0-0-0-0--3-3-x-3-3-3-3-3-5-5-x-5-5-5-5-5--|
 G|-4-4-X-4-4-4-4-4-1-1-x-1-1-1-1-1--4-4-X-4-4-4-4-4-5-5-x-5-5-5-5-5--|
 D|-4-4-X-4-4-4-4-4-2-2-X-2-2-2-2-2--4-4-X-4-4-4-4-4-7-7-X-7-7-7-7-7--|
 A|-2-2-X-2-2-2-2-2-2-2-X-2-2-2-2-2--2-2-X-2-2-2-2-2-7-7-X-7-7-7-7-7--|
 E|-2-2-x-2-2-2-2-2-0-0-X-0-0-0-0-0--2-2-x-2-2-2-2-2-5-5-X-5-5-5-5-5--|

 


 [Bm] [E] [C] [D]  

 
 e|-2-2-x-2-2-2-2-2-0-0-x-0-0-0-0-0-----------------------------------|
 B|-3-3-x-3-3-3-3-3-0-0-x-0-0-0-0-0-----------------------------------|
 G|-4-4-X-4-4-4-4-4-1-1-x-1-1-1-1-1--5-5-5-5-5-5-5-5-7-7-7-7-7-7-7-7--|
 D|-4-4-X-4-4-4-4-4-2-2-X-2-2-2-2-2--5-5-5-5-5-5-5-5-7-7-7-7-7-7-7-7--|
 A|-2-2-X-2-2-2-2-2-2-2-X-2-2-2-2-2--3-3-3-3-3-3-3-3-5-5-5-5-5-5-5-5--|
 E|-2-2-x-2-2-2-2-2-0-0-X-0-0-0-0-0-----------------------------------|

 


 


 Riff 4 - Outro


 [D] [G]  

 
 e|----------------------------------|
 B|----------------------------------|
 G|---7-7-7-7-7-7-7------------------|
 D|---7-7-7-7-7-7-7-5-5-5-5-5-5-5-x--|
 A|---5-5-5-5-5-5-5-5-5-5-5-5-5-5-x--|
 E|-----------------3-3-3-3-3-3-3-x--| last time let ring on G

 


 


 riff 1


 riff 2 x2


 riff 3 x2


 riff 2 x2


 riff 3 x2


 riff 1


 riff 2 x2


 riff 4 x3`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/s/squirtgun/25031.html"},{title:"Social",chords:`Song: Social


 Artist: Squirtgun


 Tabbed By: Bob Briggs


 Email: b_riggs23@yahoo.com for corrections, comments or anything else.


 




 This is my own interpretation of the song.


 


 Intro: Bass Line- x's 1


 then - G D C D x's 3


 


 A [G]skeleton in a [D]suit and tie,


 [C]tells us what we [D]all should buy.


 A [G]bag of coke and a [D]nuclear heart,


 s[C]upport your conscience, [D]that's a start.


 If you [G]win the game, some [D]have to lose,


 the [C]fun part is that [D]you can't choose.


 You're [G]born into a [D]social class,


 you're [C]stuck there, it is [D]hard to pass


 


 Refrain:


 


 Their [G]social norms and [C]social rules,


 We're [G]social scum and they're [C]social fools.


 They [G]tell us all their [C]social lies,


 ign[G]oring all our [C]social cries.


 


 Pre-Chorus:


 


 We'll [D]lose the game before we start


 They [C]watch us dance as we fall apart


 


 Chorus:


 


 Well let's [G]be ourselves, and never be [C]social


 We'll [G]play their game, but never be [C]social


 


 [G] [D] [C] [D] [-] [G] [D] [C] [D]  


 Verse 2:


 ( Tab from: http://www.guitartabs.cc/tabs/s/squirtgun/social_crd_ver_2.html )


 [G]Ken and Barb in G[D]reek fatigues,


 [C]tell us what we [D]ought to be.


 The [G]cars to drive, and [D]what to drink,


 [C]ignorant bliss, no [D]need to think.


 As [G]Barb cakes fetus [D]on her face,


 [C]Ken sucks blood at [D]his workplace.


 They [G]take from you, they [D]take from me,


 s[C]ocieties an[D]omalies.


 


 Refrain:


 


 Their [G]social norms, and [C]social rules,


 We're [G]social scum, they're [C]social fools.


 They [G]tell us all their [C]social lies,


 ign[G]oring all our [C]social cries.


 


 Pre-Chorus:


 


 We'll [D]lose the game before we start


 They [C]watch us dance as we fall apart


 


 Chorus:


 


 Well let's [G]be ourselves, and never be [C]social


 We'll [G]play their game, but never be [C]social.


 


 Woah woooooaaahhh!!!


 


 Solo / G D C D - x's 2


 


 Refrain:


 


 Their [G]social norms, and [C]social rules,


 We're [G]social scum and they're [C]social fools.


 They [G]tell us all our [C]social lies,


 ign[G]oring all our [C]social tries.


 


 Pre-Chorus:


 


 We'll [D]lose the game before we start


 They [C]watch us dance, we fall apart


 


 Chorus:


 


 Well let's [G]be ourselves, and never be [C]social


 We'll [G]play their game, but never be [C]social,


 


 Woah woah woooaaaahhhhhhhhhhhhhhhh.........


 


 END`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/squirtgun/social_crd_ver_2.html"}]},{name:"Laurel & Sunset (2008)",songs:[{title:"Moving in Slow Motion",chords:`[Intro] 


 [G] [D] [Em] [C]  


 [G] [D] [Em] [C]  


 


 [Verse 1] 


 [G]Oh, when you're g[D]one


 The n[Em]ight is cold as it is l[C]ong


 And the h[G]urt that made you humble wanna w[D]rite about


 Is the l[Em]ove that made you crumble from the in[C]side out


 


 [Cborus] 


 And I beli[G]eve in a n[D]ew day to come, that is


 [Em]Always darkest bef[C]ore the dawn


 [D]Moving in s[G]low motion b[C]aby


 D* G C


 Still I'm moving on, yeah, yeah


 D G C*


 Moving in slow motion baby


 Still I'm moving [G]on[D] [Em] [C]


 


 [Verse 2] 


 [G]Oh, I can s[D]ee


 [Em]Ain't no magic words to set you f[C]ree


 [G]Still I'm hoping you are gonna t[D]ake me as I am


 Em C*


 Even though I am a fool and such a stubborn man


 


 [Cborus] 


 And I beli[G]eve in a n[D]ew day to come, that is


 [Em]Always darkest bef[C]ore the dawn


 D G C*


 Moving in slow motion baby


 Still I'm moving [G]on, yeah, y[C]eah


 D G C*


 Moving in slow motion baby


 Still I'm moving [G]on[C7]


 


 [Bridge] 


 [Am]I left New England for the c[D]ity life


 C* G* D


 Oh, I got songs I wanna sing


 [Am]Went down Virginia, got a co[D]untry wife


 C* G D


 I gave that country girl my ring


 Am C D Am* C* D


 Yeah, I gave her my grandma's diamond ring


 


 [Solo] 


 [G] [D] [Em] [C]  


 [G] [D] [Em] [C]  


 


 [Verse 3] 


 G*


 Oh, I can see


 N.C.


 Ain't no magic words to set you free


 N.C.


 Still I'm hoping you are gonna take me as I am


 N.C.


 Even though I am a fool and such a stubborn man


 


 [Cborus] 


 And I beli[G]eve in a n[D]ew day to come, that is


 [Em]Always darkest bef[C]ore the dawn


 [D]Moving in s[G]low motion b[C]aby


 [D]Still I'm moving [G]on, yeah, y[C]eah


 D G C*


 Moving in slow motion baby


 G*


 Still I'm moving on`,url:"https://www.chordie.com/chord.pere/www.azchords.com/t/thesweetremains-tabs-57448/movinginslowmotion-tabs-914698.html"},{title:"Dance With Me",chords:`This old house i[A]s cracke[E]d and worn[F#m]


 The walls are fa[D]ded and the curtains to[A]rn


 Sometimes it fee[E]ls we keep running just to k[F#m]eep from falling be[D]hind


 [A]The day is done[E] and won�??t you come


 [F#m]Leave the dishes turn the TV o[D]ff


 [A]I built a fi[E]re, whoa[F#m] and the fire is warm[D]


 


 [E]Don�??t know where but I hear the beat of a dr[D]um


 [E]Somewhere I swear I hear the strain of a song[D]


 


 [A]Dance with me[E] to this song


 [F#m]Dance now darling [D]let your hair run d[A]own


 Dance with me[E] all night lo[F#m]ng


 Dance now da[D]rling to this so[A]ng[(E-F#m-D)]


 


 [A]Come to me darlin[E]g put your hand in mine


 L[F#m]ay your head down on my shoul[D]der


 Give me your lips (sweet like wi[A]ne)


 [A]If a kiss is j[E]ust a kiss


 [F#m]I don�??t know what t[D]o make of this


 


 [E]Although the radio plays only a [D]storm


 [E]Still somewhere I swear I hear the down[D]beat of a drum


 


 [A]Dance with me[E] to this song


 [F#m]Dance now darling [D]let your hair run d[A]own


 Dance with me[E] all night lo[F#m]ng


 Dance now da[D]rling to this so[A]ng[(E-F#m-D)]


 


 [F#m]So... So l[E]et the long hand ru[A]n


 Don�??t [E]let the time w[F#m]orry us


 �??Cause when you�[E]??re in [A]my arms


 I still he[E]ar that same sweet [D]song


 And I wanna get lost in this song[Dm]


 A[Dm]nd I wanna get lost in this song


 -- SOLO--


 


 [A]The room�??s in a spin;[E] kaleidescope of light


 [F#m]Feels just like I�??m upside down


 [D]Darlin�?? don�??t you set me right


 [A]You got me lost i[E]n a feeling


 And I don�??[F#m]t wanna be[D] found


 


 [E]Don�??t know where but I hear th[D]e beat of a drum


 [E]Somewhere I swear I hear the str[D]ain of a song


 


 [A]Dance with me[E] to this song


 [F#m]Dance now darling [D]let your hair run d[A]own


 Dance with me[E] all night lo[F#m]ng


 Dance now da[D]rling to this so[A]ng [(E-F#m-D)]`,url:"https://www.chordie.com/chord.pere/www.azchords.com/t/thesweetremains-tabs-57448/dancewithme1-tabs-828745.html"}]},{name:"Beat Based / Song Centered / Spirit Led (2010)",songs:[{title:"You Said Run",chords:`[D] [Dmaj7/C#] [Am/C] [G]  

 
 2-------2-------0-------3-|
 3-------2-------1-------3-|
 2-------2-------2-------0-|
 0-------0-------2-------0-|
 x-------4-------3-------2-|
 x-------x-------x-------3-|

 


 


 [Gm] [D/A] [E] [Em]  

 
 3-------2-------0-------0-|
 3-------3-------0-------0-|
 0-------2-------1-------0-|
 0-------0-------2-------2-|
 1-------0-------2-------2-|
 3-------x-------0-------0-|

 


 


 [Asus4] [A] [D] [D]  

 
 0-------0-------2-------2-|
 3-------2-------3-------3-|
 2-------2-------2-------2-|
 2-------2-------0-------0-|
 0-------0-------x-------x-|
 x-------x-------x-------x-|

 


 


 Verse 1:


 The[G]y're closing down the old pa[D]vilion


 The[G]y're pouring c[Em]oncrete on the g[Asus4]rass[A]


 Wel[G]l I don't mind the way it ch[D]anges[D/C#]


 An[Bm]d I don't c[E]ry for times of pas[Asus4]t[A]


 


 C[G]ause I have done my share of cha[D]nging


 I[G] did my b[Em]est to satis[Asus4]fy[A]


 A[G]nd though I never really m[D]ade it[D/C#]


 Y[Bm]ou can't cl[E]aim I didn't [Asus4]try[A]


 


 Chorus:


 You said [D]run and I [Dmaj7/C#]ran


 You said s[Am/C]ing and I [G]sang


 I've [Gm]done what I [D/A]can


 But I'm l[E]eaving now


 I'm j[Em]ust the r[Asus4]ambling k[D]ind


 


 Verse 2:


 N[G]ow I see snow among the ru[D]ins


 T[G]he cranes like [Em]birds against the [Asus4]sky[A]


 W[G]ell I'm not back I won't be [D]staying[D/C#]


 I[Bm] was [E]only passing [Asus4]by[A]


 


 A[G]nd I don't care much for nos[D]talgia


 A[G]nd I won't [Em]miss you when I'm [Asus4]gone[A]


 B[G]ut I wanted so to t[D]hank you[D/C#]


 D[Bm]on't think you k[E]now the good you've [Asus4]done[A]


 


 Chorus:


 You said [D]run and I [Dmaj7/C#]ran


 You said s[Am/C]ing and I [G]sang


 You've [Gm]done what you [D/A]can


 But I'm l[E]eaving now


 I've [Em]got someone [Asus4]else to m[D]ind


 And it'[Dmaj7/C#]s me


 If you [Am/C]look you will [G]see


 That I'm [Gm]gone and I'm [D/A]free


 And I'm [E]nowhere bound


 But s[Em]till the ra[Asus4]mbling k[Bm]ind


 


 Bridge:


 A[Bm]nd when I got [Bm/Bb]away


 I celebrate that [Bm/A]day


 To finally be [E]alone[Em]


 And when I reached the [Asus4]road


 It felt like coming [D]home


 


 Chorus:


 and I [Dmaj7/C#]ran


 You said [Am/C]sing and I [G]sang


 I've [Gm]done what I [D/A]can


 But I'm [E]leaving now


 I've [Em]got someone e[Asus4]lse to m[D]ind


 And it's[Dmaj7/C#] me


 If you [Am/C]look you will [G]see


 That I'm [Gm]gone and I'm [D/A]free


 I'm [E]nowhere bound


 But [Em]still the [Asus4]rambling [G]kind[F] [Eb]


 S[Em]till the r[Asus4]ambling k[D]ind`,url:"https://www.chordie.com/chord.pere/www.azchords.com/s/sweetchariots-tabs-61116/yousaidrun1-tabs-853087.html"}]},{name:"Drama Kids (2002)",songs:[{title:"Dear Claudia",chords:`Dear Claudia by SouthFM


 Tabbed by: Brian Jenkins


 


 Em7(omit3) x798xx


 E5 02xxxx or x799xx


 A5 x02xxx or 46xxxx


 G#5 57xxxx


 B5 79xxxx


 Am x02210


 G(5) 320033 or 355xxx


 [F] [133211]  


 Intro Riff (x4):


 


 [Em7] [E5]  

 
 e|-----------------|
 B|-----------------|
 G|-8-8-8-9-9-9-9-9-|
 D|-9-9-9-9-9-9-9-9-|
 A|-7-7-7-7-7-7-7-7-|
 E|-----------------|

 


 


 1st Verse: (intro riff)


 


 [Em7] Dear [E5]Claudia,


 [Em7] you should [E5]try not to [Em7]sleep with your [E5]best friend's [Em7]boyfriend[E5] [Em7]


 You've [E5]come so [Em7]far since that [E5]time when you [Em7]let


 your first [E5]boy in[Em7] [E5]


 


 [E5] [A5]  

 
 e|-----------------------------------------------------------------|
 B|-----------------------------------------------------------------|
 G|-----------------------------------------------------------------|
 D|---------------------------------2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-|
 A|-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-|
 E|-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0---------------------------------|

 


 


 And you [E5]do it so carelessly,[A5]


 [E5]as if you had no self esteem[A5]


 [E5]A victim of apathy[A5]


 but you don't [E5]care what people say about you[A5]


 


 Pre-Chorus:


 


 [G#5] [A5] [B5]  

 
 e|----------------------------|
 B|----------------------------|
 G|----------------------------|
 D|----------------------------|
 A|-6-6-6-6-6-6-6-6-7-7-7-7-9~-|
 E|-4-4-4-4-4-4-4-4-5-5-5-5-7~-|

 


 [G#5]I will let you [A5]in before you break your[B5]self


 


 Chorus: (intro riff)


 


 [Em7] It's [E5]true that [Em7]you [E5]like to sleep [Em7]around,


 [E5]enjoy it [Em7]with your [E5]backside on the [Em7]ground


 [E5]but you should [Em7]know [E5]that it's not your [Em7]fault


 your father [E5]killed him[Em7]self[E5]


 


 2nd Verse: (intro riff, transitional riff)


 


 [Em7]Dear [E5]Claudia,


 [Em7]you leave [E5]pieces of you [Em7]in each [E5]bed you [Em7]lay in[E5]


 [Em7]and [E5]when you're done


 [Em7]there will be [E5]somebody else [Em7]wearing your [E5]skin[Em7] [E5]


 


 And you [E5]do it so carelessly,[A5]


 [E5]as if you had no self esteem[A5]


 [E5]A victim of apathy[A5]


 but you don't [E5]care what people say about you[A5]


 


 Pre-Chorus:


 


 [G#5]I will let you [A5]in before you break your[B5]self


 


 Chorus:


 


 [Em7] It's [E5]true that [Em7]you [E5]like to sleep [Em7]around


 [E5]enjoy it [Em7]with your [E5]backside on the [Em7]ground


 [E5]but you should [Em7]know [E5]that it's not your [Em7]fault


 your father [E5]killed him[Em7]self[E5]


 


 Bridge:


 


 [Am]I will lay your fears [G]right here next to [F]mine


 Am G F (hold)


 and when we close our eyes, we'll be entwined


 


 


 Extended 3rd Verse: (intro riff, transitional riff)


 


 [Em7] Dear [E5]Claudia,


 [Em7] you should [E5]try not to [Em7]sleep with your [E5]best friend's [Em7]boyfriend[E5] [Em7]


 You've [E5]come so [Em7]far since that [E5]time when you [Em7]let


 your first [E5]boy in[Em7] [E5]


 


 And you [E5]do it so carelessly[A5]


 as [E5]if you had no self esteem[A5]


 [E5]A victim of apathy[A5]


 but you don't care what people [E5]say about you[A5]


 


 [E5]Little Claudia,[A5]


 [E5]you must find another way[A5]


 [E5]You must forgive yourself[A5]


 [E5]cause it's not your fault [A5]I killed my--


 


 Pre-Chorus:


 


 [G#5]I will let you [A5]in before you break your[B5]self


 


 Chorus/Outro:


 


 [Em7] It's [E5]true that [Em7]you [E5]like to sleep [Em7]around


 [E5]enjoy it [Em7]with your [E5]backside on the [Em7]ground


 [E5]but you should [Em7]know [E5]that it's not your [Em7]fault


 your father [E5]killed him[Em7]self[E5] [Em7] [E5]


 


 [Em7]Little [E5]Claudia,[Em7] [E5] [Em7] [E5] [Em7] [E5]


 Em7 E5 Em7 E5 Em7 E5 E5 (hold)


 I will forgive you`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/s/southfm/249499.html"},{title:"My Sanity",chords:`Transcribed from the Letters That Were Never Sent (Circa Drama Kids) (album?).


 


 Tuned Down a half Step


 


 This song is very easy and only uses 4 chords.


 

 
 e--0--0--0--0--]
 b--0--0--0--0--]
 g--1--2--4--5--]
 d--2--2--4--5--]
 a--2--0--2--3--]
 E--0--x--x--x--]

 


 [E] [A] [B] [C]  


 So let me have my [E]sanity, because I'm not the same.


 Since I lost my [A]mind and from this moment on


 we will talk in [E]turns. We will walk in lines,


 we will bide our [A]time. Making ourselves well


 just across the [E]sky. Underneath the waves,


 in between the hours of our darkest days.


 We will greet the [C]space[B] in arms of loving [A]grac[E]e.


 Can I get through to [E]you? In my silent [A]way.


 Before you lose your mind, before you become me.


 Before we become one,[A] before we lose the sun,[E]


 in the silent calm.[A] Because I'm not the sa[E]me.


 And you will never kno[E]w.`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/southfm/my_sanity_crd.html"}]},{name:"Kichinga! (2011)",songs:[{title:"Guided",chords:`http://systersol.se/


 


 Chorus


 [Cm]Ooooooooooooo yay [Gm]no need to worry love


 [Am]Ooooooooooooo caus[Fm]e I know that I am guided


 [Cm]Ooooooooooooo yay [Gm]wipe of those lonely tears


 [Am]Ooooooooooooo caus[Fm]e I know that I?m guided


 


 Verse


 [Cm]Ever since the morning when I woke up,


 [Gm]and realized I?d been making a fuzz


 [G#]Of my life so much crying?


 I saw that it w[Fm]as all your love I?d been denying cause


 No one else provide my strength like you do,


 Nothing in this world could ever make me feel so true


 like the way that you do


 that why me sing this a song yea


 


 Chorus


 


 Verse


 


 Sometimes when I get blinded out in doubt ey


 So alone and no doors to lead my out yea


 You come shining in with your unconditional love


 painting all bright and leaving light in my eye sight


 Tearing down my walls burning obstacles around me


 helping me see how life is ﬁlled with wicked ironi


 Allowing me to be letting me be me


 showing me that life is meant to live in as free


 


 Chorus


 


 Verse


 Sweet is your love when I?m caught up in my mind


 Giving me the power that I need to go along


 Leading me, loving me, holding my hand


 So I give thanks and praises to you everyday


 Praying for your love to ﬁll me up in every way


 All over and in and through and again and again.


 GuidedChorus


 For your guidance I thank you


 For your protection I praise you


 For your lovin? I thank you


 For your presence I praise you


 You?re all I need to get by.


 So I give thanks and praises to you everyday


 Praying for your love to ﬁll me up in every way


 All over and in and through again and again`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/s/syster-sol/379515.html"}]},{name:"Essentials (2011)",songs:[{title:"Creep",chords:`IT IS JUST A GUIDE ENJOY


 


 INTRO


 


 G E Am D G E Am ''''''


 


 vOICE


 


 [G] [B] [C] [Cm] [Cm9] [F6]  


 [G] [C#dim] [B7] [Dm7] [G7]  


 [C] [Adim] [A7] [Cm9] [F6]  


 [G] [B] [C] [C9] [Cm9] [F]  


 play around I love a lot to improvise in chords


 


 When you were here before,


 Couldn't look you in the eye


 You're just like an angel,


 Your skin makes me cry


 You float like a feather


 In a beautiful world


 I wish I was special


 You're so very special


 But I'm a creep,


 I'm a weirdo


 What the hell am I doin' here?


 I don't belong here


 I don't care if it hurts,


 I wanna have control


 I want a perfect body


 I want a perfect soul


 I want you to notice


 when I'm not around


 You're so very special


 I wish I was special


 But I'm a creep


 I'm a weirdo


 What the hell am I doin' here?


 I don't belong here, ohhhh, ohhhh


 She's running out again


 She's running


 She runs runs runs runs...


 runs...


 Whatever makes you happy


 Whatever you want


 You're so very special


 I wish I was special


 But I'm a creep,


 I'm a weirdo


 What the hell am I doin' here?


 I don't belong here


 I don't belong here...`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/k/karen-souza/343977.html"}]},{name:"Gish (1991)",songs:[{title:"Siva",chords:`Chord Fingerings:


 E| [Em7]3 [G5]x [A5]x [B5]x [E5]x [E]0 [D]2 [Badd#5]x


 B| 3 x x x x 0 3 0


 G| 0 x x x x 1 3 0


 D| 2 5 7 9 2 2 0 4


 A| 2 5 7 9 2 2 x 2


 E| 0 3 5 7 0 0 x x


 


 Fig1


 

 
 |------------------------------|
 |------------------------------|
 |------------------------------|
 |------------------------------|
 |--12-14--14-14--12--14-14-14--|
 |--0--0---0--0---0---0--0--0---|

 


 


 Fig2


 

 
 |-------------------------|
 |-------------------------|
 |-------------------------|
 |-------------------------|
 |-5-7--7-7--5--7--7-7--7--|
 |-0-0--0-0--0--0--0-0--0--|

 


 


 Figs3,4 (Add these Figs at the end of Figs 1 &amp; 2 where appropriate)


 

 
 |-----------| |-----------|
 |-----------| |-----------|
 |-----------| |-----------|
 |---9-9-7---| |---5-5-7---|
 |---9-9-7---| |---5-5-7---|
 |-0-7-7-5---| |-0-3-3-5---|

 


 


 Fig5


 

 
 |-12-10-----------------------------------12-10------------|
 |-------12-10-------12-10--12-11-10-------------12-10------|
 |-------------12-9-------------------12---------------12-9-|
 |----------------------------------------------------------|
 |----------------------------------------------------------|
 |----------------------------------------------------------|
 |----------------------------------------------------------------------------|
 |-10-11-10------------7--10-11-10-------10-11-10------10-11-10-----------7---|
 |----------12-9--7-9--------------12-9-------------------------12-9--7-9-----|
 |-------------------------------------------------12-------------------------|
 |----------------------------------------------------------------------------|
 |----------------------------------------------------------------------------|

 


 


 Fig6


 [G5] [A5] [E5] [G5] [A5] [E5]  

 
 |-----------------------|
 |-----------------------|
 |-----------------------|
 |--5--7---2---5--7---2--|
 |--5--7---2---5--7---2--|
 |--3--5---0---3--5---0--|

 


 ( Tab from: http://www.guitartabs.cc/tabs/s/smashing_pumpkins/siva_tab_ver_4.html )


 Fig7


 

 
 |-------------------------------|
 |---12-10-----------------------|
 |-9-------12---9--7---12-9-9-7--|
 |-------------------------------|
 |-------------------------------|
 |-------------------------------|

 


 


 Fig8


 [A5] [Em7] [A5] [E5]  

 
 |----------------------3--------------------------|
 |----------------------3--------------------------|
 |--2--2----------------0----2--2------------------|
 |--2--2----------------2----2--2---------------2--|
 |--0--0--5-3-------5---2----0--0--5-3-------5--2--|
 |------------5-4-3-----0--------------5-4-3----0--|

 


 


 Fig9


 

 
 |--------------------------------------|
 |--------------------------------------|
 |-----------------------------------2--|
 |-----------------------------------2--|
 |--2-0------2-0------2-0------------0--|
 |------3-0------3-0------3-0--3-0-3----|

 


 


 Fig10


 

 
 |------------------|
 |--7-----9----10-9-|
 |--7-----9----9--9-|
 |------------------|
 |------------------|
 |------------------|

 


 


 (guitars only)


 Fig1,2&gt;4x


 [(band]Fig1,2[in)]&gt;4x


 


 Fig1,2


 I spin off and lose my head


 Fig1,2


 Throwing stray a spark instead


 Fig1,2


 Gather strength down in my heel


 Fig1,2


 And dig it in the world I peel


 


 Fig5 over:


 |Em7 G5 A5 |Em7 B5 A5 |


 |Em7 G5 A5 |Em7 |&gt;2x


 


 Fig1,2


 Way down deep within my heart


 Fig1,2


 Lies a soul that's torn apart


 Fig1,2


 Tell me, tell me what you're after


 [E5]I just want to get there faster


 


 Fig6&gt;4x


 Fig6 Fig6


 I don't live - I inhale


 Fig6 Fig6


 I don't give - I unveil


 (add Fig 7)


 Fig6 Fig6


 Don't want to live in your misery


 Fig6 Fig6


 I don't live - I inhale


 


 Fig8


 


 [E]Sprinkle all my kisses on your [D]head


 [E]Stars full of wishes fill our [D]beds


 She [E]said, "I'm dead"


 


 Solo over:


 Fig6&gt;8x


 Fig9&gt;2x


 


 Bass &amp; Drums&gt;8x


 Fig10&gt;3x


 


 [Badd#5]All this pain smothers me


 [Badd#5]Like a bomb that you can't see


 [Badd#5]Tell me, tell me what you're after


 I just want to get there faster


 


 |Em7 |&gt;4x


 


 Fig6&gt;4x


 Fig6 Fig6


 I don't live - I inhale


 Fig6 Fig6


 I don't give - I unveil


 Fig6 Fig6


 I don't live - I inhale


 Fig6


 I don't live`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/smashing_pumpkins/siva_tab_ver_4.html"},{title:"I Am One",chords:`e---------------------------------------------------------------0----------
 B------------------0------------------------------------0------------------
 G--------------3------------------------------------3----------------------
 D--------------------------------------------------------------------------
 A----------4------------------------------------4--------------------------
 E--2-2-2--------------------------------2-2-2------------------------------

 


 


 Riff 1


 

 
 ------------------------2---2---------------------------2---4--------------
 4---2-3-4---2-4---4-2-4-2---2---4---2-3-4---2-4---4-2-4-2---4--------------
 4---2-3-4---2-4---4-2-4-0---0---4---2-3-4---2-4---4-2-4-0---2--------------
 2---0-1-2---0-2---2-0-2---------2---0-1-2---0-2---2-0-2--------------------

 


 


 Riff 2 (Those are frets 11, 12, and 14, not frets 1 and then 2)


 

 
 ----------------------------11---11-------------------------------12---14--
 0-12-0-0-12-0-0-12-0-12-0-0-----------0-12-0-0-12-0-0-12-0-12-0-0----------

 


 


 Bridge (That ' means a bend up and the 3532 is a pulled triplet)


 

 
 ------------------------------------------------------
 ----3-2-----3---5---7-5---3532-3-2---3-0-----2--------
 2----------------------------------------------2------
 2-----------------------------------------------------
 0-----------------------------------------------------
 ------------------------------------------------------
 ------------------------------------------------------
 ----3-2-----3---5---7-5---3532-3-5---7-5-----7---7'---
 2-----------------------------------------------------
 2-----------------------------------------------------
 0-----------------------------------------------------
 ------------------------------------------------------

 


 


 End of solo (The , is just a slide down)


 

 
 12---10---9------------------------------------------------------------------
 --------------12---10---9----------------------------------------------------
 ----------------------------11---9---7---6-----------------------------------
 ---------------------------------------------9---7---6-----------------------
 ---------------------------------------------------------9---7---4-----------`,url:"https://www.chordie.com/chord.pere/www.azchords.com/s/smashingpumpkins-tabs-3648/iamone1-tabs-38371.html"}]},{name:"My American Heart (2004)",songs:[{title:"Search and Rescue",chords:`e|---------------------------------------------------------------------xxx--|
 B|--------------------5~------------------------------5~---------------xxx--|
 G|--------------------5~------------------------------5~---------------xxx--|
 D|x0~---0-2-3-0-5-3-0-3~----------------0-2-3-0-5-3-0-3~---------------xxx--|
 A|x0~---0-2-3-0-5-3-0-3~----------------0-2-3-0-5-3-0-3~---------------xxx--|
 d|x0~---0-2-3-0-5-3-0-3~----------------0-2-3-0-5-3-0-3~---------------xxx--|

 


 a dozen city lights... its bitter cold tonight.


 


 

 
 e|--------------------------------------------------------------------------|
 B|--------------------------------------------------------------------------|
 G|--------------------------------------------------------------------------|
 D|-7-7--9--9--9--9---9---9--------9-9-9--9--9--9---9-----------x0~----------|
 A|-7-7--7--7--7--10--10--8/7------7-7-7--7--7--10--10----------x0~----------|
 d|-7-7--7--7--7--7---7---7--------7-7-7--7--7--7---9-----------x0~----------|
 e|--------------------------------------------------------------------------|
 B|---------------5~------------------------------5~-------------------------|
 G|---------------5~------------------------------5~-------------------------|
 D|-0-2-3-0-5-3-0-3~----------------0-2-3-0-5-3-0-3~-------------------------|
 A|-0-2-3-0-5-3-0-3~----------------0-2-3-0-5-3-0-3~-------------------------|
 d|-0-2-3-0-5-3-0-3~----------------0-2-3-0-5-3-0-3~-------------------------|
 e|--------------------------------------------------------------------------|
 B|--------------------------------------------------------------------------|
 G|--------------------------------------------------------------------------|
 D|-7-7--9--9--9--9---9---9--------9-9-9--9--9---9---------------------------|
 A|-7-7--7--7--7--10--10--8/7------7-7-7--7--7---8---------------------------|
 d|-7-7--7--7--7--7---7---7--------7-7-7--7--7---7---------------------------|

 


 im not satisfied... (just complicated.)


 


 VERSE:


 

 
 e|---------------------------------xxx---------------------------------------|
 B|---------------------------------xxx-----------5-5-5-----------------------|
 G|---------------------------------xxx-----------5-5-5---4-4-4---2-2-2---xxx-|
 D|-3-3-3---5-5-5---3-3-3---5-5-5---xxx---0-0-0---0-0-0---5-5-5---3-3-3---xxx-|
 A|-3-3-3---3-3-3---3-3-3---3-3-3---xxx---0-0-0---0-0-0---0-0-0---0-0-0---xxx-|
 d|-3-3-3---3-3-3---3-3-3---3-3-3---xxx---0-0-0---0-0-0---0-0-0---0-0-0---xxx-|

 


 so go and we'll jet this..


 


 

 
 e|-----------------------------------------xxxxx------------------------------|
 B|-----------------------------------------xxxxx----------5-5-5---------------|
 G|-----------------------------------------xxxxx----------5-5-5---4-4-4-2-2-2-|
 D|-3-3-xx-xx--3-3-x-xxxxx-3-3-xx-xx--3-3-3-xxxxx5-0-0-0---0-0-0---5-5-5-3-3-3-|
 A|-3-3-xx-xx--3-3-x-xxxxx-3-3-xx-xx--3-3-3-xxxxx--0-0-0---0-0-0---0-0-0-0-0-0-|
 d|-3-3-xx-xx--3-3-x-xxxxx-3-3-xx-xx--3-3-3-xxxxx--0-0-0---0-0-0---0-0-0-0-0-0-|

 


 


 CHORUS:


 

 
 e|--------------------------------------------------------------------------|
 B|--------------------------------------------------------------------------|
 G|--------------------------------------------------------------------------|
 D|--3-5-5-&gt;--0-2-2-&gt;----9-99-9-99-9-99-9-99---5/7/5------[repeat 3x]--------|
 A|--3-3-3-&gt;--0-0-0-&gt;----7-77-7-77-7-77-7-77---5/7/5-------------------------|
 d|--3-3-3-&gt;--0-0-0-&gt;----7-77-7-77-7-77-7-77---5/7/5-------------------------|

 


 if forever.. then theres no..


 


 

 
 e|--------------------------------------------------------------------------|
 B|--------------------------------------------------------------------------|
 G|--------------------------------------------------------------------------|
 D|--3-5-5-&gt;--0-2-2-&gt;----9-9-xx--9-9-9-9-------------------------------------|
 A|--3-3-3-&gt;--0-0-0-&gt;----7-7-xx--7-7-7-7-------------------------------------|
 d|--3-3-3-&gt;--0-0-0-&gt;----7-7-xx--7-7-7-7-------------------------------------|

 


 


 CHORUS PART II:


 


 

 
 e|--------------------------------------------------------------------------|
 B|--------------------------------------------------------------------------|
 G|--------------------------------------------------------------------------|
 D|--5/7-7-7-7-77--5-5-5-5--555-5-5-5-5-5-5-5~-------------------------------|
 A|--5/7-7-7-7-77--3-3-3-3--222-2-3-3-3-3-5-5~-------------------------------|
 d|--5/7-7-7-7-77-----------222-2-3-3-3-3-5-5~-------------------------------|

 


 


 lets go somewhere far now...


 


 

 
 e|--------------------------------------------------------------------------|
 B|--------------------------------------------------------------------------|
 G|--------------------------------------------------------------------------|
 D|--5/7-7-7-7-77--5-5-5-5------5-5-5-5-5-555~-------------------------------|
 A|--5/7-7-7-7-77--3-3-3-3--000-3-3-3-3-3-555~-------------------------------|
 d|--5/7-7-7-7-77-----------000-3-3-3-3-3-555~-------------------------------|

 


 


 we'll dissapate our fears..


 


 (lead)


 

 
 e|---------------------------------------------------------------------------|
 B|-----------------------------5/0-------5/0---------------------------------|
 G|---------------------------------5/0-------5/0--4/5/4/0--------------------|
 D|---------------------------------------------------------------------------|
 A|---------------------------------------------------------------------------|
 d|---------------------------------------------------------------------------|
 e|--------------------------------------------------------------------------|
 B|--------------------------------------------------------------------------|
 G|--------------------------------------------------------------------------|
 D|--5/7-7-7-7-77--5-5-5-5--555-5-5-5-5-5-5-5~-------------------------------|
 A|--5/7-7-7-7-77--3-3-3-3--222-2-3-3-3-3-5-5~-------------------------------|
 d|--5/7-7-7-7-77-----------222-2-3-3-3-3-5-5~-------------------------------|

 


 


 your saying..


 


 (lead)


 

 
 e|--------------------------------------------------------------------------|
 B|--------------------------------------------------------------------------|
 G|------------------------------7-77/9-9-9/7-7--7/5-------------------------|
 D|--------------------------------------------------------------------------|
 A|------------------------------5-55/7-7-7/5-5--5/3-------------------------|
 d|--------------------------------------------------------------------------|
 e|--------------------------------------------------------------------------|
 B|--------------------------------------------------------------------------|
 G|--------------------------------------------------------------------------|
 D|---5/7-7-7-7-77--5-5-5-5----------3~--------------------------------------|
 A|---5/7-7-7-7-77--3-3-3-3---2222---3~--------------------------------------|
 d|---5/7-7-7-7-77------------2222---3~--------------------------------------|

 


 xxx


 but she doesnt know. ill never...


 


 INTRO:


 


 

 
 e|--------------------------------------------------------------------------|
 B|---------------5~------------------------------5~-------------------------|
 G|---------------5~------------------------------5~-------------------------|
 D|-0-2-3-0-5-3-0-3~----------------0-2-3-0-5-3-0-3~----5--7~---9.~----------|
 A|-0-2-3-0-5-3-0-3~----------------0-2-3-0-5-3-0-3~----5--7~---7~-----------|
 d|-0-2-3-0-5-3-0-3~----------------0-2-3-0-5-3-0-3~----5--7~---7~-----------|

 


 a lover..


 


 VERSE:


 


 

 
 e|--------------------------------------------------------------------------|
 B|--------------------------------------------------------------------------|
 G|-----555--444--444---5--444--555--444--4----------------------------------|
 D|--2--555--555--555---5--555--555--555--5----------------------------------|
 A|--2--333--333--333---3--333--333--333--3----------------------------------|
 d|--2--333--333--333---3--333--333--333--3----------------------------------|

 


 so ill wait forever but she's already


 


 

 
 e|--------------------------------------------------------------------------|
 B|--------------------------------------------------------------------------|
 G|--------------------------------------------------------------------------|
 D|-7-7--9--9--9--9---9---9--------9-9-9--9--9--9---9---9-----xxx------------|
 A|-7-7--7--7--7--10--10--8/7------7-7-7--7--7--10--10--8/7---xxx------------|
 d|-7-7--7--7--7--7---7---7--------7-7-7--7--7--7---7---7-----xxx------------|

 


 mine.. my heart. search &amp;


 


 

 
 e|-------------------xxxxx--------------------------------------------------|
 B|-------------------xxxxx--------------------------------------------------|
 G|---555----444--444-xxxxx--5--444--5---------------------------------------|
 D|---555----555--555-xxxxx--5--555--5---------------------------------------|
 A|---333----333--333-xxxxx--3--333--3---------------------------------------|
 d|---333----333--333-xxxxx--3--333--3---------------------------------------|

 


 rescue but ive...


 


 CHORUS:


 


 

 
 e|--------------------------------------------------------------------------|
 B|--------------------------------------------------------------------------|
 G|--------------------------------------------------------------------------|
 D|--5/7-7-7-7-77--5-5-5-5--555-5-5-5-5-5-5-5~-------------------------------|
 A|--5/7-7-7-7-77--3-3-3-3--222-2-3-3-3-3-5-5~-------------------------------|
 d|--5/7-7-7-7-77-----------222-2-3-3-3-3-5-5~-------------------------------|
 e|--------------------------------------------------------------------------|
 B|--------------------------------------------------------------------------|
 G|--------------------------------------------------------------------------|
 D|--5/7-7-7-7-77--5-5-5-5------5-5-5-5-5-555~-------------------------------|
 A|--5/7-7-7-7-77--3-3-3-3--000-3-3-3-3-3-555~-------------------------------|
 d|--5/7-7-7-7-77-----------000-3-3-3-3-3-555~-------------------------------|
 e|--------------------------------------------------------------------------|
 B|--------------------------------------------------------------------------|
 G|--------------------------------------------------------------------------|
 D|--5/7-7-7-7-77--5-5-5-5--555-5-5-5-5-5-5-5~-------------------------------|
 A|--5/7-7-7-7-77--3-3-3-3--222-2-3-3-3-3-5-5~-------------------------------|
 d|--5/7-7-7-7-77-----------222-2-3-3-3-3-5-5~-------------------------------|
 e|--------------------------------------------------------------------------|
 B|--------------------------------------------------------------------------|
 G|--------------------------------------------------------------------------|
 D|---5/7-7-7-7-77--5-5-5-5-----2--3~----0~-----7~-------9~-----9------------|
 A|---5/7-7-7-7-77--3-3-3-3---2-2--3~----0~-----7~-------8~-----8------------|
 d|---5/7-7-7-7-77------------2-2--3~----0~-----7~-------7~-----7------------|

 


 but she doesnt know...


 


 

 
 e|--------------------------------------------------------------------------|
 B|--------------------------------------------------------------------------|
 G|--------------------------------------------------------------------------|
 D|------3~----0~----7~------------------x0----------------------------------|
 A|------3~----0~----7~----77777777------x0----------------------------------|
 d|------3~----0~----7~----77777777------x0----------------------------------|

 


 xxxxxxxx


 


 

 
 e|--------------------------------------------------------------------------|
 B|----------12-12-12------------12-12-12------------------------------------|
 G|----------15-15-15------------15-15-15---9-9-9-9-9-9-9-9------------------|
 D|-----------------------------------------8-8-8-8-8-8-8-8-----[x3]---------|
 A|----3-3-3-----------0-00-0-0-------------7-7-7-7-7-7-7-7------------------|
 d|----3-3-3-----------0-00-0-0-------------7-7-7-7-7-7-7-7------------------|

 


 but hey (wonderful) isnt she (beautiful) goodnight....


 


 

 
 e|--------------------------------------------------------------------------|
 B|-----------12-12-12----------12-12-12-------------------------------------|
 G|-----------15-15-15----------15-15-15----9-9-9-9-9-9-9-9----xx0-----------|
 D|-----------------------------------------8-8-8-8-8-8-8-8----xx0-----------|
 A|----3-3-3-----------0-00-0-0-------------7-7-7-7-7-7-7-7----xx0-----------|
 d|----3-3-3-----------0-00-0-0-------------7-7-7-7-7-7-7-7----xx0-----------|

 


 but hey (wonderful) isnt she (beautiful) goodnight....


 


 

 
 e|--------------------------------------------------------------------------|
 B|--------------------------------------------------------------------------|
 G|--------------------------------------------------------------------------|
 D|----33--33--00--00--0-0---77--77--55--55--5-5------[x2]-------------------|
 A|----33--33--00--00--0-0---77--77--55--55--5-5-----------------------------|
 d|----33--33--00--00--0-0---77--77--55--55--5-5-----------------------------|
 e|--------------------------------------------------------------------------|
 B|--------------------------------------------------------------------------|
 G|--------------------------------------------------------------------------|
 D|---3333--00000000--7777777--5555555-------[x2]----------------------------|
 A|---3333--00000000--7777777--5555555---------------------------------------|
 d|---3333--00000000--7777777--5555555---------------------------------------|

 


 (goodnight) goodnight...


 


 

 
 e|--------------------------------------------------------------------------|
 B|--------------------------------------------------------------------------|
 G|--------------------------------------------------------------------------|
 D|--5/7-7-7-7-77--5-5-5-5--555-5--5~----------------------------------------|
 A|--5/7-7-7-7-77--3-3-3-3--222-2--3~----------------------------------------|
 d|--5/7-7-7-7-77-----------222-2--3~----------------------------------------|

 


 xxx x


 ending lead:


 

 
 e|--------------------------------------------------------------------------|
 B|--------------------------------------------------------------------------|
 G|-------------------------------5/7~/5~------------------------------------|
 D|-------------------------------x/x~/x~------------------------------------|
 A|-------------------------------3/5~/3~------------------------------------|
 E|--------------------------------------------------------------------------|`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/m/my-american-heart/56527.html"},{title:"Miles Behind Us",chords:`blahh.


 


 i have no clue why im tabbing this.


 i have everything down NOW. but im trying to do it


 on guitar pro.


 but ill give you this.


 


 [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E]  

 
 E||---------------------------|-----------------------------|
 B||-----7--------10--------7--|--------10--------7h--8p--7--|
 G||--------7---------7--------|--7---------7----------------|
 D||--9--------9---------9-----|-----9---------9-------------|
 A||---------------------------|-----------------------------|
 D||---------------------------|-----------------------------|

 


 


 [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E]  

 
 ---------------------------|-----------------------------|
 -----7--------10--------7--|--------10--------7h--8p--7--|
 --------7---------7--------|--7---------7----------------|
 --9--------9---------9-----|-----9---------9-------------|
 ---------------------------|-----------------------------|
 ---------------------------|-----------------------------|

 


 


 [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E]  

 
 ---------------------------|-----------------------------|
 -----7--------10--------7--|--------10--------7h--8p--7--|
 --------7---------7--------|--7---------7----------------|
 --9--------9---------9-----|-----9---------9-------------|
 ---------------------------|-----------------------------|
 ---------------------------|-----------------------------|

 


 


 [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E]  

 
 ---------------------------|-----------------------------|
 -----7--------10--------7--|--------10--------7h--8p--7--|
 --------7---------7--------|--7---------7----------------|
 --9--------9---------9-----|-----9---------9-------------|
 ---------------------------|-----------------------------|
 ---------------------------|-----------------------------|

 


 


 [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E]  

 
 ---------------------------|-----------------------------|-----|-----||
 -----7--------10--------7--|--------10--------7h--8p--7--|-----|-----||
 --------7---------7--------|--7---------7----------------|-----|-----||
 --9--------9---------9-----|-----9---------9-------------|-----|-----||
 ---------------------------|-----------------------------|-----|-----||
 ---------------------------|-----------------------------|-----|-----||`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/m/my-american-heart/102858.html"}]},{name:"Ignorance & Vision (2008)",songs:[{title:"Bubblebath",chords:`This is my first Tab, so there are maybe some mistakes in it...


 


 


 Verse1:


 [D]I?m taking a bubblebath in your heartache


 


 I?m washing away my sins


 


 I?m taking a bubblebath in your heartache


 Let?s go there where it all[G] began


 


 [D]You were the goddes of hell fire


 


 i was a Baron of a lake


 


 I ain?t got damn I was lost in your fire


 You got damn I was lost in this[G] fake


 


 Pre Chorus:


 [(G)]I?m still hugging you like a [Bm]friend


 [G]I?m still fucking you like a O[A]ne-Night-[C]Stand


 


 Chorus:


 [Em]I?m washing away my[G] sins


 [Em]I?m washing away my[G] sins


 [Em]I?m washing away my[G] sins


 [Em]I?m washing away my[G] sins


 


 Verse 2:


 [D]I?m taking a bubblebath in your heartache


 


 I?m washing away my sins


 


 I?m taking a bubblebath in your heartache


 I?m washing away my [D]sins


 


 [D]You were the goddes of hell fire


 


 I was a Baron of a Lake


 


 I ain?t got damn I was lost in this fire


 You got damn I was lost in this f[G]ake


 


 [(G)]I?m still hugging you like a [Bm]friend


 [G]I?m still fucking you like a [A]One-Night[C]-Stand


 


 Repeat Chorus


 


 Verse 3:


 [D]I?m taking a bubblebath in your heartache


 


 I?m washing away my sins


 


 I?m taking a bubblebath in your heartache


 I?m washing away my si[D]ns


 


 Repeat Pre Chorus


 


 Repeat Chorus twice


 


 End:


 [Em]I?m washing away my[G] sins


 [Em]I?m washing away my[G] sins


 


 


 http://www.mbwteyp.com/`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/m/my_baby_wants_to_eat_your_pussy/bubblebath_crd.html"}]},{name:"Planisphærium (2003)",songs:[{title:"Pulses in Rhombus Forms",chords:`|---------------|
 |---------------|
 |---------------|
 |---------------|
 |-7---7---5--4--|
 |-5-0-5-0-3--2--|

 


 . .


 


 [Riff 1 (x2)] 


 

 
 |---------------------------------|---------------------------------|
 |---------------------------------|---------------------------------|
 |---------------------------------|---------------------------------|
 |---------------------------------|-----------------6---------------|
 |-7---7---4---7---8---8---5---8---|-7---7---4---7---4-2-4-5-4---3---|
 |-5-0-5-0-2-0-5-0-6-0-6-0-3-0-6-0-|-5-0-5-0-2-0-5-0---0-2-3-2-0-1-0-|

 


 . . . . . . . .


 


 [Riff 2] 


 

 
 |-----------------|-----------------|-----------------|-
 |-----------------|-----------------|-----------------|-
 |-----------------|-----------------|-----------------|-
 |-6---------------|-6---------------|-----------------|-
 |-4-2-4-5-4---3---|-4-2-4-5-4---3---|-------3-2-1-----|-
 |---0-2-3-2-0-1-0-|---0-2-3-2-0-1-0-|-3-2-1-------2-1-|-

 


 . . . . . . . . . . . . . . . . . . . . . . . .


 


 

 
 -|-----------------|-----------------|-----------------|-
 -|-----------------|-----------------|-----------------|-
 -|-----------------|-----------------|-----------------|-
 -|-----------------|-----------------|-6---------------|-
 -|---------------3-|-2-1-------------|-4-2-4-5-4---3---|-
 -|-3-2-1-2-3-2-1---|-----2-1-3-2-1-2-|---0-2-3-2-0-1-0-|-

 


 . . . . . . . . . . . . . . . . . . . . . . . .


 


 

 
 -|-----------------|--------------------[x2]-|
 -|-----------------|-------------------------|
 -|-----------------|-------------------------|
 -|-6---------------|-------------------------|
 -|-4-2-4-5-4---3---|-3-2-1h4p1h4-3-2-2h5p2h5-|
 -|---0-2-3-2-0-1-0-|-1-0---------1-0---------|

 


 


 [Outro A] 


 

 
 |----------|---------------------------------|-----------|-
 |----------|---------------------------------|-----------|-
 |----------|---------------------------------|-----------|-
 |----------|---------------------------------|-----------|-
 |-2--------|-5-4-6-5-2-5-4-3-2-3-6-5-2-5-4-2-|-3-------6-|-
 |-0--------|-3-2-4-3-0-3-2-1-0-1-4-3-0-3-2-0-|-1-------4-|-

 


 . . . . . . . . . . . . . . . . . . .


 


 

 
 -|-----------------|-----------------|----------|--------|
 -|-----------------|-----------------|----------|--------|
 -|-----------------|-----------------|----------|--------|
 -|-----------------|-----------------|----------|--------|
 -|-5-4-6-5-2-5-4-3-|-2-3-6-5-2-5-4-2-|-3--------|-3--2---|
 -|-3-2-4-3-0-3-2-1-|-0-1-4-3-0-3-2-0-|-1--------|-1--0---|

 


 . . . . . . . . . . . . . . . . . . .


 


 [Riff 3 (x4)] /quickly!!!/


 

 
 |-----------------------------|
 |-----------------------------|
 |-------------------------^-^-|
 |-------------------------4\\3-|
 |-----------------------------|
 |-2-1-0-1-4-3-2-3-2-1-0-1-----|

 


 . . . . . . . . . . . .


 


 [Riff 4] 


 

 
 |-----------------|-----------------|------------[x3]-|-----------------|
 |-----------------|-----------------|-----------------|-----------------|
 |-----------------|-----------------|-----------------|-----------------|
 |---5-4---5-4-6-5-|---5-4---5-4-6-5-|---5-4---5-4-6-5-|---5-4---5-4-6-5-|
 |-4-3-2-4-3-2-4-3-|-4-3-2-4-3-2-4-3-|-4-3-2-4-3-2-4-3-|-4-3-2-4-3-2-4-3-|
 |-2-----2---------|-2-----2---------|-2-----2---------|-2-----2---------|

 


 | | | | . . . . . . . . |


 

 
 |-----------------|-----------------|-----------------|-----------------|
 |-----------------|-----------------|-----------------|-----------------|
 |-----------------|-----------------|-----------------|-----------------|
 |-----------------|---------5-4-6-5-|---5-4---5-4-6-5-|---5-4---5-4-6-5-|
 |-----------------|-4-----4-3-2-4-3-|-4-3-2-4-3-2-4-3-|-4-3-2-4-3-2-4-3-|
 |-----------------|-2-----2---------|-2-----2---------|-2-----2---------|

 


 . . . . . . . . . .


 


 

 
 -|-----------------|-----------------|-------------[x2]-|
 -|-----------------|-----------------|------------------|
 -|-----------------|-----------------|------------------|
 -|---5-4---5-4-6-5-|---5-4---5-4-6-5-|---5-4---5-4-6-5--|
 -|-4-3-2-4-3-2-4-3-|-4-3-2-4-3-2-4-3-|-4-3-2-4-3-2-4-3--|
 -|-2-----2---------|-2-----2---------|-2-----2----------|

 


 | | . . . . . . . . | |


 

 
 -|-----------------|-----------------|-------------[x2]-|
 -|-----------------|-----------------|------------------|
 -|-----------------|-----------------|------------------|
 -|---5-4---5-4-6-5-|---5-4---5-4-6-5-|---5-4---5-4-6-5--|
 -|-4-3-2-4-3-2-4-3-|-4-3-2-4-3-2-4-3-|-4-3-2-4-3-2-4-3--|
 -|-2-----2---------|-2-----2---------|-2-----2----------|

 


 . . . . . . . .


 


 [Riff 5] 


 

 
 |------------------------------------|------------------------------------|-
 |------------------------------------|------------------------------------|-
 |------------------------------------|------------------------------------|-
 |------------------------------------|------------------------------------|-
 |------------------------------------|------------------------------------|-
 |-3"..........-2"-3"................-|-3"..........-2"-3"................-|-

 


 | | |


 

 
 |------------------------------------|------------------------------------|-
 |------------------------------------|------------------------------------|-
 |------------------------------------|------------------------------------|-
 |------------------------------------|------------------------------------|-
 |------------------------------------|-2"..........-1"-4"................-|-
 |-3"..........-2"-3"................-|------------------------------------|-
 -|------------------------------------|------------------------------------|
 -|------------------------------------|------------------------------------|
 -|------------------------------------|------------------------------------|
 -|------------------------------------|-5"..........-4"-5"................-|
 -|------------------------------------|------------------------------------|
 -|-3"..........-2"-3"................-|------------------------------------|

 


 | | |


 

 
 -|------------------------------------|------------------------------------|
 -|------------------------------------|------------------------------------|
 -|------------------------------------|-----------------6"................-|
 -|-5"..........-4"-5"................-|-9"..........-8"--------------------|
 -|------------------------------------|------------------------------------|
 -|------------------------------------|------------------------------------|

 


 


 [Riff 6 (x2)] 


 

 
 |------------------------------|------------------------------|
 |------------------------------|------------------------------|
 |-6"..........................-|------------------------------|
 |------------------------------|------------------------------|
 |------------------------------|------------------------------|
 |------------------------------|-3"..........................-|

 


 | | |


 

 
 |------------------------------|------------------------------|
 |------------------------------|------------------------------|
 |------------------------------|------------------------------|

 


 |-4"..........................-|-5"..........................-|


 

 
 |------------------------------|------------------------------|
 |------------------------------|------------------------------|

 


 


 [Riff 7 (x4)] 


 

 
 |---------------------------------|
 |---------------------------------|
 |---------------------------------|
 |---------------------------------|
 |-4-3-3-6-5-4-5-4-2-3-------------|
 |-2-1-1-4-3-2-3-2-0-1-------------|

 


 . . . . . . . . . .


 


 [Riff 8 (x8)] 


 

 
 |-----------------------|
 |-----------------------|
 |-----------------------|
 |-----------------------|
 |-3----2----3--3/5~~----|
 |-1----0----1---------5-|

 


 . . .


 


 [Riff 9] 


 

 
 |--------------------[x2]-|-------------------------|-------------
 |-------------------------|-------------------------|-------------
 |-------------------------|-------------------------|-------------
 |----5"----6"----5"----4"-|----5"----6"----5"----4"-|----5"----6"-
 |-4"----4"----4"----3"----|-4"----4"----4"----3"----|-4"----4"----
 |-------------------------|-------------------------|-------------

 


 | | |


 

 
 |--------------------[x2]-|-------------------------|-------------
 |-------------------------|-------------------------|-------------
 |-------------------------|-------------------------|-------------
 |-------------------------|-6-----------------------|-------------
 |-------------------------|-4-----------------------|-------------
 |-------------------------|-------------------------|-------------

 


 


 [BREAK] 


 


 [Riff 10] 


 

 
 |-------------------------------------|-------------------------------------|-
 |-------------------------------------|-------------------------------------|-
 |-------------------------------------|-------------------------------------|-
 |----------------------------5--3-----|----------------------------5\\-3-----|-
 |-4--3--2--6--4--3--4--3--2--3--1--2--|-4--3--2--6--4--3--4--3--2--3\\-1\\-2--|-
 |-2--1--0--4--2--1--2--1--0--3--1--0--|-2--1--0--4--2--1--2--1--0--3\\-1\\-0--|-

 


 . . . . . . . . . . . . . . . . . . . . .


 


 

 
 -|-------------------------------------|-------------------------------------|
 -|-------------------------------------|-------------------------------------|
 -|-------------------------------------|-------------------------------------|
 -|----------------------------5--3-----|----------------------------5\\-3-----|
 -|-4--3--2--6--4--3--4--3--2--3--1--2--|-4--3--2--6--4--3--4--3--2--3\\-1\\-2--|
 -|-2--1--0--4--2--1--2--1--0--3--1--0--|-2--1--0--4--2--1--2--1--0--3\\-1\\-0--|

 


 . . . . . . . . . . . .


 


 [Riff 11] 


 

 
 |----------------------------[x2]-|----------------------------[x2]-|
 |---------------------------------|---------------------------------|
 |---------------------------------|---------------------------------|
 |-4-5-4-7-6---4-5-4-5-4-3-4-3-2-3-|---------------------------------|
 |-2-3-2-5-4---2-3-2-3-2-1-2-1-0-1-|-4-5-4-7-6---4-5-4-5-4-3-4-3-2-3-|
 |-----------0---------------------|-2-3-2-5-4-0-2-3-2-3-2-1-2-1-0-1-|

 


 


 [Riff 12 (x2)] 


 

 
 |-------------------------------------------------------------|
 |-------------------------------------------------------------|
 |-------------------------------------------------------------|
 |-------------------------------------------------------------|
 |-6"------3"----------------------6"------3"------4--3--2--3--|
 |-----5"------3"--2"--3"--5"--3"------5"------3"--2--1--0--1--|

 


 . . . .


 


 [Riff 13] 


 

 
 |--------|----------------------------------------------[x2]-|
 |--------|---------------------------------------------------|
 |--------|---------------------------------------------------|
 |--------|---------------------------------------------6\\5/7-|
 |-2------|----4"----2"----2"----------4"----2"---------4\\3/5-|
 |-0------|-3"----3"----3"----2"-1"-3"----3"----2"-1"-0-------|

 


 .


 


 [Riff 14 (x4)] 


 

 
 |--------------------|
 |--------------------|
 |--------------------|
 |--------------------|
 |-3-2-5/6----3-2-6-5-|
 |-1-0-3/4-x3-1-0-4-3-|

 


 . . . . . .


 


 [Outro B] 


 

 
 |---------------------------------|
 |---------------------------------|
 |---------------------------------|
 |---------------------------------|
 |-3-2-3/6-3-2-3/6-3-2-3/6-3-2-6-5-|
 |-1-0-1/4-1-0-1/4-1-0-1/4-1-0-4-3-|

 


 | . . . . . . . . . . |


 

 
 |---------------------------------|
 |---------------------------------|
 |---------------------------------|
 |---------------------------------|
 |-----3-6-----3-6-----3-6-3-2-6-5-|
 |-----1-4-----1-4-----1-4-1-0-4-3-|

 


 . . . . . . . . . .


 


 [Riff 15 (x2)] /quickly!!!/


 

 
 |-------------------------|---------------------|
 |-------------------------|---------------------|
 |-------------------------|---------------------|
 |-------------------------|---------------------|
 |----------------------3"-|-------------3-2-3-6-|
 |-0"-2"-1"-0"-3"-2"-1"----|-0"-2"-1"-0"-1-0-1-4-|

 


 . . . .


 


 [Riff 16 (x2)] 


 

 
 |--------------------|--------------------|
 |--------------------|--------------------|
 |--------------------|--------------------|
 |---------3-3--------|-----333---5-4-3----|
 |-2---5-4-1-1--5-3---|-5-4-111-3-3-2-1----|
 |-0---3-2------3-1---|-3-2-----1-------x2-|

 


 . . . . . . . . . ... . . . .


 


 [Riff 17] 


 

 
 |-------------------[x3]-|-------------------|
 |------------------------|-------------------|
 |------------------------|-------------------|
 |------------------------|----------4--3-----|
 |-------------2"--1"-----|-2--4--3--2--1--5--|
 |-0"--2"--1"----------3"-|-0--2--1--------3--|`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/w/wormed/208785.html"},{title:"Tunnel of Ions",chords:`--- W O R M E D ---

 


 "Tunnel Of Ions"


 From album: "Planisphaerium"


 Copyright Macabre Mementos 2003 ©


 Transcribed by: Yura Kowalchuk


 Contact:[yura@grindcore.net]


 [yura_kowalcbuk@mail.ru] 


 http://brutaltabs.musica.mustdie.ru


 http://www.blood-scrapes.nm.ru


 


 TABULATURE LEGEND:


 " - tremolo h - hammer on


 ~ - vibrato \\ - slide down


 p - pull off / - slide down


 tr - tremolo picking ^ - pinch harmonics


 = - sustained note b - bend string


 p.m. - palm muting t - tapping


 - natural harmonic


 TUNING: B [B, E, A, D, F#, B]


 


 Comment: The guitar production on this release is very dirty. Its very hard to


 transcribe this song absolutly correct. So this is only how I play this song.


 


 "" - natural harmonic


 


 [Intro] 


 

 
 |------------------------------------------------
 |------------------------------------------------
 |------------------------------------------------
 |---------------------------------------------------------
 |------3"----------2"-------------3"----------------------
 |---------2"-1"-0"----2"-1"-0"-1"----2"-1"-0"-1"----------
 -------------------------------------------|-
 -------------------------------------------|-
 -------------------------------------------|-
 -------------------------------------------------|-
 -3"----------2"----------------------3"----------|-
 ----2"-1"-0"----2"-1"-0"-0---------0----2"-1"-0"-|-
 |-----------------------------------------------------------
 |-----------------------------------------------------------
 |-----------------------------------------------------------
 |-5-------4--------5-----------------5-------4------------------5-------
 |-3-4-3-2-2-4-3-2--3-4-3-2-3---------3-4-3-2-2-4-3-2------------3-4-3-2-
 |---2-1-0---2-1-0----2-1-0-1-----------2-1-0---2-1-0----------0---2-1-0-

 


 


 [...continue] 


 

 
 |-------------------------------------|---------------------|-
 |-------------------------------------|---------------------|-
 |-------------------------------------|---------------------|-
 |-------------------6"----------------|---5---7-6---7-6-----|-
 |----5"-6"-5"----------5"----5"-6"-5"-|-5-3-4-5-4-5-5-4-----|-
 |-4"----------4"-0"-------4"----------|-3---2-----3---------|-
 -|--------------------------------|
 -|--------------------------------|
 -|--------^---------------^-------|
 -|--------2~------^-------5~------|
 -|----------------4~--------------|
 -|-000000----0000----0000----0000-|

 


 ...... .... .... ....


 


 [Riff 1a (x4)] 


 

 
 ||----------------------------||
 ||o--------------------------o||
 ||----------------------------||
 ||----5---7-6---7-6-----------||
 ||o-5-3-4-5-4-5-5-4-2-5-5-5--o||
 ||--3---2-----3-----0-3-3-3---||

 


 . . .


 


 [Outro 1] 


 

 
 |--------|---------------------------------|
 |--------|---------------------------------|
 |--------|---------------------------------|
 |--------|---------------------------------|
 |-10\\----|-2-3------3-2-----3-2-----2-2----|
 |--8\\----|-0-1------1-0-----1-0-----0-0----|

 


 . . . . . . . .


 


 [Riff 2 (x2)] 


 

 
 ||-----------------------------------|-
 ||o----------------------------------|-
 ||-----------------------------------|-
 ||-----------------------------------|-
 ||o-5-2-3---5-2-3---5-2-3---5-2-2-3--|-
 ||--3-0-1---3-0-1---3-0-1---3-0-0-1--|-

 


 . . . . . . . . . . . . .


 


 

 
 -|-------------------|----------------------||
 -|-------------------|---------------------o||
 -|-------------------|----------------------||
 -|-------------------|----------------------||
 -|-5-2-2-3--5-2-2-3--|-5-2-2-3--5-2-2-3-3--o||
 -|-3-0-0-1--3-0-0-1--|-3-0-0-1--3-0-0-1-1---||

 


 . . . . . . . . . . . . . . . . .


 


 [Outro 2] 


 

 
 |-----------------------------------|---------------------------------
 |-----------------------------------|---------------------------------
 |-----------------------------------|---------------------------------
 |-----------------------------------|---------------------------------------
 |-5-2-3---5-2-3----5-2-3---5-2-2-3--|-------------------7"..------8"..------
 |-3-0-1---3-0-1----3-0-1---3-0-0-1--|-----0000-----0000------3"..------3"..-

 


 . . . . . . . . . . . . . .... ....


 


 

 
 ---------------|
 ---------------|
 ---------------|
 ---------------|
 ---------------|
 -0"......------|

 


 


 [Riff 3 (x2)] [ending 1] 


 

 
 ||--------------------------|-------------------------|------------------||
 ||o-------------------------|-------------------------|-----------------o||
 ||--------------------------|-------------------------|------------------||
 ||------5-4-----5-4---------|-----5-4-----5-4---------|-----5-4----------||
 ||o-4-5-3-2-4-5-3-2-4-5-2-3-|-4-5-3-2-4-5-3-2-4-5-2-3-|-4-5-3-2-4-4-----o||
 ||--2-3-----2-3-----2-3-0-1-|-2-3-----2-3-----2-3-0-1-|-2-3-----2-2------||

 


 | | | |


 

 
 ||--------------------------|-------------------------|------------------||
 ||o-------------------------|-------------------------|-----------------o||
 ||--------------------------|-------------------------|------------------||
 ||------5-4-----5-4---------|-----5-4-----5-4---------|-----5-4----------||
 ||o-4-5-3-2-4-5-3-2-4-5-2-3-|-4-5-3-2-4-5-3-2-4-5-2-3-|-4-5-3-2-4-4-----o||
 ||--2-3-----2-3-----2-3-0-1-|-2-3-----2-3-----2-3-0-1-|-2-3-----2-2------||

 


 


 [ending 2] 


 

 
 |-------------|--------------------------------|
 |-------------|--------------------------------|
 |-------------|--------------------------------|
 |-----5-4-----|--------------------------------|
 |-4-5-3-2-4-4-|---------7~~--------------------|
 |-2-3-----2-2-|-0-0-0-0-8~~-0-0-0-0-0-0--------|

 


 | | |


 

 
 |-------------|--------------------------------|
 |-------------|--------------------------------|
 |-------------|--------------------------------|
 |-----5-4-----|--------------------------------|
 |-4-5-3-2-4-4-|--------------------------------|
 |-2-3-----2-2-|-------------0-0-0-0-0-0--------|

 


 


 [Riff 4 (x2)] [out] 


 

 
 ||---------------------------------||-----------------
 ||o-------------------------------o||-----------------
 ||---------------------------------||-----------------
 ||---------------------------------||-----------------
 ||o---------7~~-------------------o||---------7-------
 ||--0-0-0-0-8~~-0-0-0-0-0-0--------||-0-0-0-0-8-------

 


 


 [RIFF 4 (x8)] [RIFF 1 (x2)] 


 


 [RIFF 2 /first abr only!!!!!!/] 


 


 [Riff 5] /slow/


 

 
 |-----|------------------------------|------------------------------|
 |-----|------------------------------|------------------------------|
 |-----|------------------------------|------------------------------|
 |-----|------------------------------|------------------4---1-------|
 |-1/2-|-2--3/4-2-1-2--2--3/4-2-1-4-2-|-2--3/4-2-1-2---3---3---2-1-2-|
 |-2/3-|-0--1/2-0-2-3--0--1/2-0-2-5-3-|-0--1/2-0-2-3-2-----------2-3-|

 


 . . . . . . . . . . . .


 


 [Outro 2] break


 

 
 |--------------------------|-----------------------------|-----|
 |--------------------------|-----------------------------|-----|
 |--------------------------|-----------------------------|-----|
 |--------------------------|-----------------------------|-----|
 |-2--3/4-2-1-2--2--3/4-2-1-|-2-3-4-2-3-2-1-2-2-3-4-2-2-3-|-----|
 |-0--1/2-0-2-3--0--1/2-0-2-|-0-1-2-2-3-2-1-2-0-1-2-2-0-1-|-----|

 


 . . . . . . . . . . . . . . . . .


 


 [Riff 6 (x4)] 


 

 
 ||-----------------------------------||
 ||o---------------------------------o||
 ||-----------------------------------||
 ||-----------------------------------||
 ||o-2-3-4-2-3-2-1-2-2-3-4-2-2-3-7-8-o||
 ||--0-1-2-2-3-2-1-2-0-1-2-0-2-3-5-6--||

 


 . . . . . . . . . . . . . . . .


 


 [Outro 3] 


 

 
 |------------------------------------------------------|
 |------------------------------------------------------|
 |------------------------------------------------------|
 |-5/6---------------------3\\2-----5/6------------------|
 |-4/5-----8\\7-----4/5-----2\\1-----4/5-----8\\7----------|
 |-----0-0-6\\5-0-0-2/3-0-0-----0-0-----0-0-6\\5-0-0------|

 


 . . . . . . . . . . . .


 


 [Riff 7] 


 

 
 ||------------------------------[x6]-||------------------|
 ||o---------------------------------o||------------------|
 ||-----------------------------------||------------------|
 ||--5/6---------------------3\\2------||-5/6--------------|
 ||o-4/5-----8\\7-----4/5-----2\\1-----o||-4/5-----8\\7------|
 ||------0-0-6\\5-0-0-2/3-0-0-----0-0--||-----0-0-6\\5-0-0--|

 


 . . . . . . . . . . . .


 


 [RIFF 2 /second bar only/] 


 


 [Outro 4] 


 

 
 |-----------------------------------------|-
 |-----------------------------------------|-
 |-----------------------------------------|-
 |-5/6---------------------3\\2-----5/6-----|-
 |-4/5-----8\\7-----4/5-----2\\1-----4/5-----|-
 |-----0-0-6\\5-0-0-2/3-0-0-----0-0-----0-0-|-

 


 . . . . . . . . . .


 


 

 
 -|-------------------------|-------------------------|
 -|-------------------------|-------2-2-2-------2-2-2-|
 -|-------3-3-3-------3-3-3-|-------0-0-0-------0-0-0-|
 -|-0-0-0-0-0-0-0-0-0-0-0-0-|-0-0-0-------0-0-0-------|
 -|-5-5-5-------5-5-5-------|-5-5-5-------5-5-5-------|
 -|-3-3-3-------3-3-3-------|-3-3-3-------3-3-3-------|

 


 . . . . . . . . . . . . . . . . . . . . . . . .


 


 [Outro 5] /udner bass/


 

 
 |-------------|------------|-------------------------|-
 |-------------|------------|-------------------------|-
 |-------------|------------|-------------------------|-
 |-------------|------------|---5---7-6---7-6---------|-
 |-------5-5-5-|-------2-2--|-5-3-4-5-4-5-5-4-2-5-5-5-|-
 |-------3-3-3-|-------0-0--|-3---2-----3-----0-3-3-3-|-

 


 . . . . . . . . .


 


 

 
 -|---------------------------|-
 -|---------------------------|-
 -|---------------------------|-
 -|---5---7-6---7-6-----------|-
 -|-5-3-4-5-4-5-5-4-2-5-5--5--|-
 -|-3---2-----3-----0-3-3--3--|-

 


 . . . .


 


 

 
 |-----------------------|--------------------|
 |-----------------------|--------------------|
 |-----------------------|--------------------|
 |---5---7-6---7-6-------|---5---7-6---7-6----|
 |-5-3-4-5-4-5-5-4-2-5-5-|-5-3-4-5-4-5-5-4-2--|
 |-3---2-----3-----0-3-3-|-3---2-----3-----0--|

 


 . . . .


 


 [Riff 8] 


 

 
 ||------------------------------[x4]-||-||----------------------[x2]-||-
 ||o---------------------------------o||-||o-------------------------o||-
 ||-----------------------------------||-||---------------------------||-
 ||-----------------------------------||-||----------6-7--------------||-
 ||o-5-------------------------------o||-||o-5-5-7-7-----------------o||-
 ||--3-0-0-0-4-0-0-0-2-0-0-0-4-0-0-0--||-||--------------5-7-5-7-4-6--||-

 


 . . . . . . . . . . . . . . . . . . . . . . . . . . . .


 


 

 
 -|---------------------------------||--------------[x2]-||-------------|
 -|---------------------------------||o-----------------o||-------------|
 -|---------------------------------||-------------------||-------------|
 -|---------------------------------||----5-6-5-4--------||-------------|
 -|-5-------------------------------||o-2-3-4-3-2-6-5-4-o||-------------|
 -|-3-0-0-0-4-0-0-0-2-0-0-0-4-0-0-0-||--0---------4-3-2--||-3-3-3-2-----|

 


 . . . . . . . . . . . . . . . . . . . .


 


 [Riff 9] 


 

 
 |-------||----------------------[x2]-||-------------|-
 |-------||o-------------------------o||-------------|-
 |-------||---------------------------||-------------|-
 |-------||--4-----4-----4-----4------||-4-----4-----|-
 |-6-5-4-||o-2-5-4-2-5-4-2-5-4-2-5-4-o||-2-5-4-2-5-4-|-
 |-4-3-2-||----3-2---3-2---3-2---3-2--||---3-2---3-2-|-

 


 


 break


 

 
 -|--------------------------------|-----|
 -|--------------------------------|-----|
 -|--------------------------------|-----|
 -|---5-6-5-4---------5-6-5-4------|-----|
 -|-2-3-4-3-2-6-5-4-2-3-4-3-2-6-5--|-----|
 -|-0---------4-3-2-0---------4-3--|-----|

 


 


 [Outro 6] 


 

 
 |-----|----------------------------|---------------|
 |-----|----------------------------|---------------|
 |-----|----------------------------|---------------|
 |-----|----------------------------|---------------|
 |-1/2-|-2--3/4-2-1-2--2--3/4-2-1---|-2--3/4-2-1-2--|
 |-2/3-|-0--1/2-0-2-3--0--1/2-0-2---|-0--1/2-0-2-3--|

 


 . . . .


 


 [Riff 10 (x2)] 


 

 
 ||---------------------||
 ||o-------------------o||
 ||---------------------||
 ||--------4"-----------||
 ||o----3"----3"-1"----o||
 ||--2"-------------2"--||`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/w/wormed/341255.html"}]},{name:"Rubberband (2013)",songs:[{title:"Want Me Too",chords:`Love this new one by Charlie worsham, this seems to be the best tab so far (since there aren't any yet)


 Easy tab, E A progression through the entire song.


 


 Verse I


 


 [E]You got a lock on your heart, it's chained in [A]the dark


 [E]Somehow you lost the key[A]


 [E]You said you tried everything to get love back again[A]


 [E]But baby you ain't tried me[A]


 Bet I could break o[D]n through


 [A]If you want me to


 


 [E]Tell me what it takes to put a smile on your f[A]ace


 [E]And leave your lonely days behind[A]


 [E]I can take it from there, get you floatin' on a[A]ir


 [E]Girl, if you just give me a sign[A]


 That you want me[D] to


 Do you want m[A]e to?


 


 Corus


 [E]My heart's skippin' like a stone on the[A] water


 [E]Tell me wha[A]t do I gotta do[E]


 [A]To make you want me too[E]


 The way [E]I feel, couldn't fall any far[A]ther


 [E]Help me, what [A]do I gotta do[E]


 [A]To make you want me


 [E]To make you want me


 [A]To make you want me too[E]


 


 Verse II


 Out of all the million things that I might dream for


 I can only think of one


 And it's me and you sailin' under the blue


 Underneath the golden sun


 All I want is you


 Do you want me too?


 


 Chorus


 My heart's skippin' like a stone on the water


 Tell me what do I gotta do


 To make you want me too


 The way I feel, couldn't fall any farther


 Help me, what do I gotta do


 To make you want me


 To make you want me


 To make you want me too


 


 


 Outro


 My heart's skippin' like a stone on the water


 Tell me what do I gotta do


 To make you want me too


 The way I feel, couldn't fall any farther


 Help me, what do I gotta do


 To make you want me


 To make you want me


 To make you want me too`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/c/charlie-worsham/387916.html"},{title:"Could It Be",chords:`Charlie Worsham, "Could it Be"


 http://www.charlieworsham.com/


 


 (intro)


 [E] I'm finally holdin' what I've been hopin' for


 


 (verse)


 [E]We had a few drinks


 [E]some laughs at the bar


 [E]Stayed out too late


 And went a [A]little too far


 Oh but [E]wakin' up


 [E]With you on my chest


 I had a [E]pounding heart, and [B]achin' head, and [A]no regrets


 


 (chorus)


 [B] Who knows, we might go down in [E]flames


 [B] But then again I might just change your [A]name


 Could it be [E]I'm finally holding


 What [A]I've been hoping [E]for


 Could it be the [E]end of just friends


 The star[B]t of something more


 Oh the [E]way I'm feeling now


 It's worth [A]sticking around to see


 Is this [E]love[B]


 Or could it [E]be


 


 (verse)


 [E]Rule number one


 [E]Friends don't break


 [E]We could write it off


 As a [A]sweet mistake


 Only [E]time will tell


 [E]If we were wrong or right


 All I [E]know is I don't [B]want to be [A]alone tonight


 


 (chorus)


 [B] Who knows, we might go down in [E]flames


 [B] But then again I might just change your [A]name


 Could it be [E]I'm finally holding


 What [A]I've been hoping [E]for


 Could it be the [E]end of just friends


 The star[B]t of something more


 Oh the [E]way I'm feeling now


 It's worth [A]sticking around to see


 Is this [E]love[B]


 Or could it [E]be


 


 (instrumental-bridge)


 E A E,E B,E A,E B E


 


 [B] We wound up here so natural[E]ly


 [B] Me and you baby you and [A]me, Could it be(could it be), Could it be(could it be)


 


 (chorus-out)


 [E]I'm finally holding


 What [A]I've been hoping for


 Could it be the [E]end of just friends


 And the [B]start of something more


 Oh the [E]way I'm feeling now


 It's worth [A]sticking around to see


 Is this [E]love[B]


 Or could it [C#]be[B] [A]


 Is this [E]love[B]


 Or could it be[E]`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/c/charlie-worsham/346968.html"}]},{name:"Mundo Lite (2003)",songs:[{title:"Sin motor",chords:`Bueno, esta rolita est� bastante buena,


 me lati� un buen, es mi Primer Transcripci�n


 y parece ser que est� correcta, espero que les guste,


 alguna duda sugerencia o queja a mi correo


 egss888@hotmail.com


 


 Aleks Syntek


 Sin Motor


 M�todos de Placer Instant�neo


 


 Intro


 [F#] [C#] [Ebm] [B]  

 
 e--------------6---------|------------|----6------9---7--6-----|
 A----7------------7--6---|---6-7-7----|-------7-------------7--|
 D-----------6------------|-6----------|--6---------------------|
 G------------------------|------------|------------------------|
 B------------------------|------------|------------------------|
 E-------------------------------------|------------------------|

 


 


 D[F#]e tanto pensar, de tanto hablar por si desapar[G#]ezco.


 [F#]De tanto a�orar una vez mas derramo el pensam[G#]iento


 [F#]Soy un idealista en banca rota,con expecta[G#]tivas


 [F#]Un ingenuo so�ador que sin pudor se te entre[G#]go sin mas ni mas


 


 [B] Yo he [Bb]visto tu rostro en la [A#]luna


 [B] Yo se q[Bb]ue como tu nin[A#]guna


 [B] Oja[Bb]l� no te vayas n[A#]unca.


 


 No qui[Ebm]ero ,que me[C#] dejes sin mot[B]or..aaah!


 No qui[Ebm]ero , que v[C#]ayas sin comprens[B]ion...


 Dispuesto estoy [F#]yo, a morir por [C#]ti


 a verte fel[Ebm]iz, piensalo b[B]ien.


 


 A partir de aqui se repiten los acordes...


 


 Que tan tonto soy ,que no me doy yo nunca por vencido


 Es mi necedad mi arma mortal que siempre me ha servido


 Soy un impostor un hablador , que por estar perdido


 un ingenuo so�ador que sin pudor se te entreg� sin mas ni mas


 


 Yo he visto tu rostro en la luna


 yo se que tu como ninguna


 ojala no te vayas nunca


 


 No quiero que me dejes sin motor!!aaa!


 No quiero que vayas sin comprension


 Dispuesto estoy yo a morir por ti...


 a verte feliz , piensalo bien....


 


 No quiero que me dejes sin motor!!aaa!


 No quiero que vayas sin comprension


 


 Dispuesto estoy yo a morir por ti...


 a verte feliz , piensalo bien....


 


 Piensalo bieen......


 EGSS88


 EGSS*


 egss888@hotmail.com`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/a/aleks-syntek/258840.html"},{title:"Duele el amor",chords:`Revisado y arreglado por:


 July/27/2010


 


 Standard Tuning


 Tone D


 


 


 Duele El Amor,


 Sin Ti,


 Duele Hasta Matar.


 


 

 
 e----0-----| Esto se repite en toda la cancion,
 B--3---2-0-| menos en los coros.
 G----------|
 D----------|
 A----------|
 E----------|
 e-----------7-10---12-7--7-9-7------------------|
 B----7-9-10--------------------10-7--------10-7-|
 G--------------------------------------9-9------|
 D-----------------------------------------------|
 A-----------------------------------------------|
 E-----------------------------------------------|
 e-----------7-10---12-7--7-9-7------------7-----|
 B----7-9-10--------------------10-7---------10--|
 G----------------------------------------9------|
 D-----------------------------------------------|
 A-----------------------------------------------|
 E-----------------------------------------------|

 


 


 [D]Siento La Humedad[E], En Mí,


 


 [C#m]De Verte Llorar,[F#m] Y Hablar,


 


 [D]Si Es Que Tu Te Va[E]s, De Aqui


 


 [C#m]Creo Que A Mi Me Har[F#m]a, Sufrir.


 


 [D]Hoy Quisiera Deten[E]er El Tiempo


 


 [F#m]Y La Distancia Entre Los Dos


 


 [D]Pero Se Apago La [E]Luz Del Cielo


 


 [F#m]Ya No Sale mas El Sol.


 


 


 [D]Soy Fragilidad[E], Sin Ti


 


 [F#m]Como Superar,[C#m] El Fin


 


 [D]Cosas Que Dañ[E]e, No Se


 


 [F#m]Y El Recuperar,[E] Se Fue


 


 


 [D]Ni Tu Ni Yo Somos Culpables,


 


 [F#m]Pero Somos Vulnerables,


 


 [D]Son Las Cosas De La Vida


 


 [E]Que Me Queda por Vivir


 


 coro:


 Duele El Am[D]or, Sin [E]Ti


 


 [C#m]Duele Hasta Moj[F#m]ar


 


 Duele El Am[D]or, Sin [E]Ti


 


 [C#m]Duele Hasta Mat[F#m]ar


 


 Duele El Am[D]or, Sin [E]Ti


 


 [C#m]Todo Esta Tan Gr[F#m]is.


 


 


 [D]Hoy Quisiera Deten[E]er El Tiempo


 


 [F#m]Y La Distancia Entre Los Dos


 


 [D]Pero Se Apago La [E]Luz Del Cielo


 


 [F#m]Ya No Sale mas El Sol.


 


 [D]Soy Fragilidad[E], Sin Ti


 


 [F#m]Como Superar,[C#m] El Fin


 


 [D]Cosas Que Dañ[E]e, No Se


 


 [F#m]Y El Recuperar,[E] Se Fue


 


 [D]Ni Tu Ni Yo Somos Culpables,


 


 [F#m]Pero Somos Vulnerables,


 


 [D]Son Las Cosas De La Vida


 


 [E]Que Me Queda por Vivir.


 


 Coro:


 Duele El Am[D]or, Sin [E]Ti


 


 [C#m]Duele Hasta Moj[F#m]ar


 


 Duele El Am[D]or, Sin [E]Ti


 


 [C#m]Duele Hasta Mat[F#m]ar


 


 Duele El Am[D]or, Sin [E]Ti


 


 [C#m]Todo Esta Tan Gr[F#m]is.


 


 


 [D]// Siento La Hume[E]dad, En Mí,


 


 [C#m]De Verte Llorar,[F#m] Y Hablar,


 


 [D]Si Es Que Tu Te Va[E]s, De Aqui


 


 [C#m]Creo Que A Mi Me Har[F#m]a, Sufrir.//


 


 


 Coro:


 Duele El Am[D]or, Sin [E]Ti


 


 [C#m]Duele Hasta Moj[F#m]ar


 


 Duele El Am[D]or, Sin [E]Ti


 


 [C#m]Duele Hasta Mat[F#m]ar


 


 Duele El Am[D]or, Sin [E]Ti


 


 [C#m]Todo Esta Tan Gr[F#m]is.`,url:"https://www.chordie.com/chord.pere/www.azchords.com/a/alekssyntek-tabs-36340/dueleelamor-tabs-300984.html"}]},{name:"Symphony X (1994)",songs:[{title:"The Damnation Game",chords:`------------------------

 


 \\ / : slide


 h : hammer


 p : pull-off


 b : bend


 br : bend and release


 ~ : vibrato


 pm : palm muting


 a.h : artificial harmonic


 


 Tune down 1 step : D G C F A D


 


 Intro rythm:


 


 

 
 |-------------------------------------------------------------------------------|
 |-------------------------------------------------------------------------------|
 |-------------------------------------------------------------------------------|
 |-------4----------------4------------------------------------------------------|
 |-2-----2-2--------2-----2-2-------2-----5-----5-5------4~-2-4-5----------------|
 |-0-------0--------0-------0---------5-2-3-----3-3---------------0-1-3-5---/-\\--|

 


 


 (X2)


 

 
 ||-----------------------------------------------------------------||
 ||-----------------------------------------------------------------||
 ||-----------------------------------------------------------------||
 ||-----------------------------------------------------------------||
 ||-0-0-0-0-0-0-0-0-7-7-7-7-5-5-5-5-3-3-3-3-0-0-0-0-7-7-7-7-7-7-7-7-||
 ||-----------------------------------------------------------------||

 


 pm...............................................................


 


 

 
 |---------------------------------------------------------------------------|
 |---------------------------------------------------------------------------|
 |---------------------------------------------------------------------------|
 |---------------------------------2-----------------------------------------|
 |-3-3-3-3-3-3-3-3-2-2-2-2-2-2-2~--0----5------------------------------------|
 |--------------------------------------3----1-1-1-1-1-1-1-1-0-0-0-0-0-0-0---|

 


 pm.......................... ...........................


 


 

 
 |------------------------------------------------------------|
 |------------------------------------------------------------|
 |---------------6-7-9-7-6------------------------------------|
 |--------5-7-8-------------8-7-5-----------------------------|
 |-5-7-8---------------------------8-7-5-7-5-4----------------|
 |----------------------------------------------6-5-3-5-------|Intro :

 


 (X7)


 

 
 ||-------12-15-12----------------11-14-11----------||
 ||-------------------------------------------------||
 ||-12-16----------16-12-16-11-14----------14-11-14-||
 ||-------------------------------------------------||
 ||-------------------------------------------------||
 ||-------------------------------------------------||
 |--------------------------------------------------|
 |--------------------------------------------------|
 |-/16----------14----------------------------------|
 |-----17-14-17----16-13-16-17-14----14-16-12----12-|
 |--------------------------------14----------15----|
 |--------------------------------------------------|

 


 


 (X3)


 

 
 ||-------------------10-15/17p14-------------------||
 ||----------------11-------------15----------------||
 ||----------11h12-------------------14-------------||
 ||-------12----------------------------16----------||
 ||-10-13----------------------------------17-15-17-||
 ||-------------------------------------------------||
 |-------------------10-15/17p14-----------|
 |----------------11-------------15--------|
 |----------11h12-------------------14-----|
 |-------12----------------------------16\\-|
 |-10-13-----------------------------------|
 |-----------------------------------------|

 


 


 semi-harm


 

 
 |--------------------------------------------|
 |--------------------------------------------|
 |--------------------------------------------|
 |-11-----9--11--11/12\\------------6/7--------|
 |-------------------------7-8-10-------------|
 |--------------------------------------------||----------------------------------------------------------12-17-12-----------------------|
 |-------------------------------------17-15-------------------------15-13-15-13-12--------|
 |----------------17-16-------------16-------17-16-17-14-17-------------------------14-13--|
 |----------14-19-------19-18-14-18------------------------------------------------------15|
 |-15----15--------------------------------------------------------------------------------|
 |----17-----------------------------------------------------------------------------------|
 |--------------------------------------------------------------12-17-12-------------------|
 |-----------------------------------------17-15-------------------------15-13-15-13-------|
 |---------------------17-16-------------16------17-16-17-14-17----------------------14-13~|
 |14-------------14-19-------19-18-14-18---------------------------------------------------|
 |---17-15----15---------------------------------------------------------------------------|
 |---------17------------------------------------------------------------------------------|

 


 


 T T T T


 

 
 |-------------------17-15----------------------------------------------12h15h17p15h17p15-|
 |-17-18-17-15-17----------18-17-15-14-15-17-15-14-15-------------------------------------|
 |-------------------------------------------------------------12h14h17-------------------|
 |----------------------------------------------------------------------------------------|
 |-------------------------------------------------------12h19----------------------------|
 |----------------------------------------------------------------------------------------|

 


 | |


 | |


 

 
 |----------------------------------------------------------------------------------------|
 |----------------------------------------------------------------------------------------|
 |--5-9-5---5-9-5---5-9-5---5-9-5---4-7-4---4-7-4---4-7-4---------------------------------|
 |-7------7-------7-------7-------6-------6-------6-------6~------------------------------|
 |----------------------------------------------------------------------------------------|
 |----------------------------------------------------------------------------------------|

 


 


 T


 

 
 |-p12\\-15p12p9------------------------------------10--8----------------------------------|
 |-------------10------------10--11--10--8--10-----------11--10--8--7--8--10--8--7--8~----|
 |---------------9------------------------------------------------------------------------|
 |----------------11--11------------------------------------------------------------------|
 |------------------12--12----------------------------------------------------------------|
 |----------------------------------------------------------------------------------------|

 


 | |


 | |


 

 
 |----------------------------------------------------------------------------------------|
 |----------------------------------------------------------------------------------------|
 |----------------------10-14-10--10-14-10--10-14-10--10-14-10--9-12-9--9-12-9--9-12-9----|
 |--------------------12--------12--------12--------12--------11------11------11------11~-|
 |----------------------------------------------------------------------------------------|
 |----------------------------------------------------------------------------------------||----------------9-10-12-10-9--------------------------------|
 |--------8-10-11--------------11-10-8------------------------|
 |-7-9-10------------------------------10-9-7-9-7-6-----------|
 |--------------------------------------------------8-7-5-7---|
 |------------------------------------------------------------|
 |------------------------------------------------------------|

 


 | |


 | |


 

 
 |------------------------------------------------------------|
 |------------------------------------------------------------|
 |---------------6-7-9-7-6------------------------------------|
 |--------5-7-8-------------8-7-5-----------------------------|
 |-5-7-8---------------------------8-7-5-7-5-4----------------|
 |----------------------------------------------6-5-3-5-------|

 


 


 Verse :


 


 

 
 |---------------------------------------------------------------------------------|
 |---------------------------------------------------------------------------------|
 |---------------------------------------------------------------------------------|
 |-7------------------------------------------------------------------7-8-5-7-8-5--|
 |-5--5-5-5-5-repeat--------------------------------------------------5-----5------|
 |---------------------------------------------------------------------------------|

 


 pm........................................................... let ring


 


 

 
 |---------------------------------------------------------------------------------|
 |---------------------------------------------------------------------------------|
 |---------------------------------------------------------------------------------|
 |-7-------------------------------------------------------------------------------|
 |-5--5-5-5-5-repeat------------------------------------------------------2--------|
 |------------------------------------------------------------------------0--------|

 


 pm..............................................................


 


 Pré-chorus:


 a.h a.h a.h


 

 
 |---------------------------------------------------------------------------------------|
 |---------------------------------------------------------------------------------------|
 |---------------------------------------------------------------------------------------|
 |------------------------------------------------------------------------------6-4-3----|
 |-3--------3-3---3-3~-------3-3---3-3~--------3-3---3---------------------5-4-2-------5-|
 |-1--0-1-1-1-1p0h1----0-1-1-1-1p0h1-----0-1-1-1-1p0h1/2-1~--0-1---1-4-2-1---------------|

 


 pm... .... ..... ............................


 


 (X3)


 

 
 ||---------------------||
 ||---------------------||
 ||---------------------||
 ||-6----------6--------||
 ||-4--4-4--4--4--3-4-6-||
 ||---------------------||

 


 pm.... .....


 


 a.h........


 

 
 |--------------------------------|
 |--------------------------------|
 |--------------------------------|
 |-6----------6-------------------|
 |-4--4-4--4--4--3-4~-----------3-|
 |--------------------5p4--4p2----|

 


 pm....


 


 Chorus: (with pm)


 


 

 
 |-----------------------------------------------------------------------------------|
 |-----------------------------------------------------------------------------------|
 |-------------------------------------4-8-4---4-8-4---------------------------------|
 |---6-10-6---6-10-6---5-8-5---5-8-5-6-------6---------4-8-4---4-8-4---3-6-3---3-6-3-|
 |-8--------8--------7-------7-----------------------6-------6-------5-------5-------|
 |-----------------------------------------------------------------------------------|
 |-------------------------------------------|
 |-------------------------------------------|
 |-------------------------------------------|
 |---4-8-4---4-8---10-7----------------8-----|
 |-6-------6------------9-6-9-6--------------|
 |------------------------------8-5-6--------|
 |-----------------------------------------------------------------------------------|
 |-----------------------------------------------------------------------------------|
 |-------------------------------------4-8-4---4-8-4---------------------------------|
 |---6-10-6---6-10-6---5-8-5---5-8-5-6-------6---------4-8-4---4-8-4---3-6-3---3-6-3-|
 |-8--------8--------7-------7-----------------------6-------6-------5-------5-------|
 |-----------------------------------------------------------------------------------|

 


 


 |2nd chorus only|


 

 
 |------------------------------------------------------------|---------------|
 |------------------------------------------------------------|---------------|
 |------------------------------------------------------------|--/4-----------|
 |---4-8-4---4-8---10-7-------7-10-7-/11--9--8------8--9--8~--|---------6-----|
 |-6-------6------------9-6-9-------------------11------------|---------------|
 |------------------------------------------------------------|---------------|
 |-----------------------------------------------------------------------|
 |-----------------------------------------------------------------------|
 |-----------------------------------------------------------------------|
 |-----------------------------------------------------------------------|
 |-4-4-4-4----4-4-4-4----4-4-4-4----4-4-4-4----4-4-4-4----4-4-4-4-4-4----|
 |-2-2-2-2----2-2-2-2----2-2-2-2----2-2-2-2----2-2-2-2----2-2-2-2-2-2----|
 |-----------------------------------------------------------------------------|
 |-----------------------------------------------------------------------------|
 |-----------------------------------------------------------------------------|
 |----------------------------------------------2---/5--3----------------------|
 |-4-4-4-4----4-4-4-4----4-4-4-4----4-4-4-4-----0----------4-5-0----1---6---0--|
 |-2-2-2-2----2-2-2-2----2-2-2-2----2-2-2-2--4~--------------------------------|

 


 


 Verse


 Pré-chorus


 Chorus


 


 Solos rythm :


 


 (X8)


 

 
 ||--------------------------||
 ||--------------------------||
 ||--------------------------||
 ||--------------------------||
 ||-2--2--2--3----3----------||
 ||-0--0--0--1----1--0-1-0-0-||

 


 pm..... .......


 


 (X8)


 

 
 ||--------------------------||
 ||--------------------------||
 ||--------------------------||
 ||-4--4--4--5----5----------||
 ||-2--2--2--3----3--2-3-2-0-||
 ||--------------------------||

 


 pm..... ........


 


 (X7) (harmony guitar)


 

 
 ||--------------------------|| |--------------------------|
 ||--------------------------|| |--------------------------|
 ||--------------------------|| |-(1)----------------------|
 ||--------------------------|| |--2---(3)--(2)--(0)-------|
 ||-2--2--2--3----3----------|| |-------5----3----2--------|
 ||-0--0--0--1----1--0-1-0-0-|| |--------------------------|

 


 


 pm..... .......


 


 

 
 |-----------------------------------------------------------------------------------|
 |-----------------------------------------------------------------------------------|
 |-----------------------------------------------------------------------------------|
 |-------------------------------------------------5--3--2----------------------7--5-|
 |-0-0-0-0---------------4-5-5-5-5-4-4-0-2-3-3-3-3----------5--4--5------------------|
 |---------4-4-0-2-3-3-3---------------------------------------------1--3--5---------|

 


 pm.............................................


 


 Solo 1:


 T T T T


 

 
 |----------------------------------------------------------------------------------|
 |----------------------------------------------------------------------------------|
 |----------------------------------------------------------------------------------|
 |--------------------------------------------------------------7h9h10h12p9h10h12p10|
 |-/-\\-7-8-7-5-7~----------------------5h7h8p5h7h8h11p8p7p5h7h8---------------------|
 |------------------5h7h8h10p8p7p5h7h8----------------------------------------------|

 


 


 T T


 

 
 |--------------------------------------------------------------------------10h12|
 |-------------------------------------/10h12h13p12p10h12h13h15p13p12p10h13------|
 |---------7h9h10p7h9h10h13p10p9p7h9h10------------------------------------------|
 |-p9p7h10-----------------------------------------------------------------------|
 |-------------------------------------------------------------------------------|
 |-------------------------------------------------------------------------------|

 


 


 T T T T 1/2 1/2 1 bar


 

 
 |-h13h16p13p12p10h13h16/-22p20h22p20p19p17h19b--19b-rb-19b------------------------|
 |-----------------------------------------------------------18-22-20bp18h21p18\\17-|
 |---------------------------------------------------------------------------------|
 |---------------------------------------------------------------------------------|
 |---------------------------------------------------------------------------------|
 |---------------------------------------------------------------------------------|

 


 


 bar


 

 
 |---------------------------------------------------------16-17----16-19-17-16----|
 |-/16p13h16p13\\-/13-12p10h12------------------------15-18-------18-------------18-|
 |-----------------------------13-10\\7-10p9p7h9~-----------------------------------|
 |---------------------------------------------------------------------------------|
 |---------------------------------------------------------------------------------|
 |---------------------------------------------------------------------------------|
 |---------------------------------------------|
 |-17-15---------------------------------------|
 |-------17-16-14-16-14-13---------------------|
 |-------------------------15-14-12------------|
 |----------------------------------15-12-14~--|
 |---------------------------------------------|

 


 


 Solo 2:


 [1] [1] [1]  

 
 |------------7-12-7-/16-12-/20p17--------------------22b-rb-22b-22b----/20p17----|
 |----------9----------------------18------------------------------------------18-|
 |--------9---------------------------17------------------------------------------|
 |------9--------------------------------19---------------------------------------|
 |-7-11-------------------------------------20-19~--------------------------------|
 |--------------------------------------------------------------------------------|
 |--------------------------------------------------------------------------|
 |--------------------------------------------------------18-17-15-18-17-15-|
 |-14\\13--------------------------------------------------------------------|
 |-------15p14--------------------------15-14-12-15-14-12-------------------|
 |-------------12-11~--8h11p8h11p8-7~---------------------------------------|
 |--------------------------------------------------------------------------|
 |-------------------20-19-17-20-19-17-16-19-13-16---------------------------------|
 |-------------------------------------------------15-18-12-15---------------------|
 |-17-16-14-17-16-14-------------------------------------------13-16-10-13-7-10p9p7|
 |---------------------------------------------------------------------------------|
 |---------------------------------------------------------------------------------|
 |---------------------------------------------------------------------------------|

 


 


 a.h 1/w.bar


 

 
 |----------------------------------------------------------------------------|
 |----------------------------------------------------------------------------|
 |-9~-7-10p9p7----------------------6h9p6h9p6\\3h6p3h6p3\\2h3p2h3\\2p0h2p0---7\\--|
 |-------------10p7-b-rb------------------------------------------------------|
 |-----------------------8p7p5h7~---------------------------------------------|
 |----------------------------------------------------------------------------|
 |------------------------------------------5-------------------------------------|
 |--------------------------5-----------------8-6-5-------------------------------|
 |----------------------------7-5-7-6---6-9---------------------------------------|
 |---------7-10-9-7-6---6-9-----------7-------------------------12-15-14-12-11----|
 |-------7------------7--------------------------------------12----------------12-|
 |-8-5-8--------------------------------------------13-10-13----------------------|
 |-------------------------------10-----------------------------------------------|
 |-------10-------------------------13-11-10-11---10------------------------------|
 |----------12-10-12-11----11-14-----------------------12---10---12p10\\9---10-----|
 |-11-14----------------12--------------------------------------------------------|
 |--------------------------------------------------------------------------------|
 |--------------------------------------------------------------------------------|

 


 


 trill(10/12)............


 

 
 |-------------------------------------|
 |-------------------------------------|
 |-7-9-10h12p10-------------------\\9---|
 |-------------------------------------|
 |-------------------------------------|
 |-------------------------------------|

 


 


 Chorus


 


 Ending riff :


 


 (X4)


 

 
 |------------------------------------------------------------------------------|
 |------------------------------------------------------------------------------|
 |------------------------------------------------------------------------------|
 |------------------------------------------------------------------------------|
 |-2-2-2-2----2-2-2-2----2-2-2-2----2-2-2-2----2-2-2-2----2-2-2-2----2-2-2-2----|
 |-0-0-0-0----0-0-0-0----0-0-0-0----0-0-0-0----0-0-0-0----0-0-0-0----0-0-0-0----|

 


 pm........................................................................


 


 

 
 |----------------------------------------|
 |----------------------------------------|
 |----------------------------------------|
 |-----------------------------------3----|
 |-2-2-2-2----2-2-2-2----2-2-2-2-----1----|
 |-0-0-0-0----0-0-0-0----0-0-0-0----------|`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/s/symphony-x/43869.html"},{title:"Thorns of Sorrow",chords:`As recorded by Symphony X


 (From the 1994 Album SYMPHONY X)


 


 Transcribed by Linus "Mr.Gul" Abrahamson


 


 Words and Music by Romeo, Miller, Pinnella, Tyler and Rullo


 


 Gtr I (D G C F A D) - 'Rhythm'


 Gtr II (D G C F A D) - 'Lead'


 


 Intro


 Moderate Rock Q=136


 [E5F#5] [Em] [Gm] 


 [4/4] Gtr I[3/4]


 

 
 PM----| ~ PM----| ~

 


 S S E E E E E Q q H q H E E E E Q q H q H


 

 
 |------------------|---------|---------||------------|---------|---------|
 |------------------|---------|---------||------------|---------|---------|
 |------------------|---------|---------||------------|---------|---------|
 |-2-4---2-1-2-4-5--|-2-------|-4-------||------------|---------|---------|
 |-2-4--------------|---------|---------||------------|---------|---------|
 |-0-2--------------|---------|---------||-3-2-3-5-6--|-3-------|-5-------|

 


 


 ~~~ [Dm]PM----| ~


 H Q E E E E Q q H q H


 

 
 |-----------||------------|---------|---------||
 |-----------||------------|---------|---------||
 |-----------||------------|---------|---------||
 |-----------||------------|---------|---------||
 |-[1]-------||-5-4-5-7-8--|-5-------|-7-------||
 |-----------||------------|---------|---------||

 


 


 [Fm] [Ab5]  


 [4/4] ~~~~~~~~~~~~~~~


 H Q W +H. Q


 

 
 |---------|----------|---------------||
 |---------|----------|---------------||
 |---------|----------|---------------||
 |-3----5--|-6--------|-(6)------6\\---||
 |---------|----------|----------6\\---||
 |---------|----------|---------------||

 


 


 Riff


 [BbA5BbA5]  

 
 PM--------|

 


 |-3-|


 S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S


 

 
 |---------------------------------|------------------------------------|
 |---------------------------------|------------------------------------|
 |---------------------------------|-----------------6h7p6--------------|
 |-----7-----8-----5h7-----8s7-8s7-|-----7-----8-----------8-7-5--------|
 |-0-0---0-0---0-0-----0-0-8s7-8s7-|-0-0---0-0---0-0-------------8-7-5--|
 |---------------------------------|------------------------------------|

 


 


 [BbA5BbA5]  

 
 PM----------| PM----|

 


 S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S


 

 
 |---------------------------------|---------------------------------|
 |---------------------------------|---------------------------------|
 |---------------------------------|---------6---7-6-9-7-6-----------|
 |-----7-----8-----5h7-----8s7-8s7-|-7-5-8-7---8-----------8-7-5-----|
 |-0-0---0-0---0-0-----0-0-8s7-8s7-|-----------------------------8-7-|
 |---------------------------------|---------------------------------|

 


 


 [BbA5BbA5]  

 
 PM--------|

 


 |-3-|


 S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S


 

 
 ||----------------------------------|-----------------------------------|
 ||o---------------------------------|-----------------------------------|
 ||----------------------------------|-----------------6h7p6-------------|
 ||------7-----8-----5h7-----8s7-8s7-|-----7-----8-----------8-7-5-------|
 ||o-0-0---0-0---0-0-----0-0-8s7-8s7-|-0-0---0-0---0-0-------------8-7-5-|
 ||----------------------------------|-----------------------------------|

 


 


 [BbA5BbA5]  

 
 PM----------| PM----|

 


 S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S


 

 
 |---------------------------------|----------------------------------||
 |---------------------------------|---------------------------------o||
 |---------------------------------|---------6---7-6-9-7-6------------||
 |-----7-----8-----5h7-----8s7-8s7-|-7-5-8-7---8-----------8-7-5------||
 |-0-0---0-0---0-0-----0-0-8s7-8s7-|-----------------------------8-7-o||
 |---------------------------------|----------------------------------||

 


 


 Verse 1


 [Em]  

 
 PM----------------------| PM----------------------------|

 


 S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S 8x


 

 
 |---------------------------------||------------------------------------||
 |---------------------------------||o----------------------------------o||
 |---------------------------------||------------------------------------||
 |-------6---7-6-9-7-6-------------||------------------------------------||
 |-5-8-7---8-----------8-7-5-------||o----------------------------------o||
 |---------------------------8-7-5-||--0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0---||

 


 


 Pre-Chorus


 1. 2.


 [C#5] [B5] [A5] [A5] [A5] 


 [3/4] H. H. H. H. +H.


 

 
 ||----------|---------|----------||---------|--------||
 ||o---------|---------|---------o||---------|--------||
 ||--6-------|-4-------|-2--------||-2-------|-(2)----||
 ||--6-------|-4-------|-2--------||-2-------|-(2)----||
 ||o-4-------|-2-------|-0-------o||-0-------|-(0)----||
 ||----------|---------|----------||---------|--------||

 


 


 Chorus


 [Gm/D] [Gm/BbC5] [G/B] [Fmadd9] [Gm/D] [Gm/BbC5] [F5] [G5AbG5GbF5] 


 [4/4]  

 
 PM----------|

 


 Q E Q E Q E Q E E E E E Q E Q E Q E E E E E E E E


 

 
 |--------------|----------------|--------------|-----------------|
 |--------------|----------------|--------------|-----------------|
 |----0----0----|-0----0---0-----|----0----0-5--|-----------------|
 |-0------------|----------------|-0---------5--|---3-3-5-6-5-4-3-|
 |------1----3--|---2------------|------1----3--|---3-3-5-6-5-4-3-|
 |--------------|--------1---4-3-|--------------|---1-1-3-4-3-2-1-|

 


 


 [Gm/D]Q E [Gm/BbC5]Q E Q [G/B]E Q E [Fmadd9]E E E E [D5]H. [Bb5]Q [Bb5]+W


 

 
 |--------------|----------------|------------|--------||
 |--------------|----------------|-3----------|--------||
 |----0----0----|-0----0---0-----|-2-------3--|-(3)----||
 |-0------------|----------------|-0-------3--|-(3)----||
 |------1----3--|---2------------|---------1--|-(1)----||
 |--------------|--------1---4-3-|------------|--------||

 


 


 Riff


 [BbA5BbA5]  

 
 PM--------|

 


 |-3-|


 S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S


 

 
 |---------------------------------|------------------------------------|
 |---------------------------------|------------------------------------|
 |---------------------------------|-----------------6h7p6--------------|
 |-----7-----8-----5h7-----8s7-8s7-|-----7-----8-----------8-7-5--------|
 |-0-0---0-0---0-0-----0-0-8s7-8s7-|-0-0---0-0---0-0-------------8-7-5--|
 |---------------------------------|------------------------------------|

 


 


 [BbA5BbA5]  

 
 PM----------| PM----|

 


 S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S


 

 
 |---------------------------------|---------------------------------|
 |---------------------------------|---------------------------------|
 |---------------------------------|---------6---7-6-9-7-6-----------|
 |-----7-----8-----5h7-----8s7-8s7-|-7-5-8-7---8-----------8-7-5-----|
 |-0-0---0-0---0-0-----0-0-8s7-8s7-|-----------------------------8-7-|
 |---------------------------------|---------------------------------|
 PM----------------------|

 


 S S S S S S S S S S S S S S S S


 

 
 |---------------------------------|
 |---------------------------------|
 |---------------------------------|
 |-------6---7-6-9-7-6-------------|
 |-5-8-7---8-----------8-7-5-------|
 |---------------------------8-7-5-|

 


 


 Verse 2


 [Em] [E5]  

 
 PM----------------------------|

 


 S S S S S S S S S S S S S S S S 7x q Q H


 

 
 ||-----------------------------------||------------||
 ||o---------------------------------o||------------||
 ||-----------------------------------||------------||
 ||-----------------------------------||-2----------||
 ||o---------------------------------o||-2----------||
 ||--0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0--||-0----------||

 


 


 Pre-Chorus


 1. 2.


 [C#5] [B5] [A5] [A5] [A5] 


 [3/4] H. H. H. H. +H.


 

 
 ||----------|---------|----------||---------|--------||
 ||o---------|---------|---------o||---------|--------||
 ||--6-------|-4-------|-2--------||-2-------|-(2)----||
 ||--6-------|-4-------|-2--------||-2-------|-(2)----||
 ||o-4-------|-2-------|-0-------o||-0-------|-(0)----||
 ||----------|---------|----------||---------|--------||

 


 


 Chorus


 $


 [Gm/D] [Gm/BbC5] [G/B] [Fmadd9] [Gm/D] [Gm/BbC5] [F5] [G5AbG5GbF5] 


 [4/4]  

 
 PM----------|

 


 Q E Q E Q E Q E E E E E Q E Q E Q E E E E E E E E


 

 
 ||---------------|----------------|--------------|------------------|
 ||o--------------|----------------|--------------|------------------|
 ||-----0----0----|-0----0---0-----|----0----0-5--|------------------|
 ||--0------------|----------------|-0---------5--|---3-3-5-6-5-4-3--|
 ||o------1----3--|---2------------|------1----3--|---3-3-5-6-5-4-3--|
 ||---------------|--------1---4-3-|--------------|---1-1-3-4-3-2-1--|

 


 


 To Coda


 [Gm/D]Q E [Gm/BbC5]Q E Q E [G/B]Q E [Fmadd9]E E E E [D5]H. [Bb5]Q [Bb5]+W [Bb5]+W


 

 
 |--------------|----------------|------------|-------------||---------||
 |--------------|----------------|-3----------|------------o||---------||
 |----0----0----|-0----0---0-----|-2-------3--|-(3)---------||-(3)-----||
 |-0------------|----------------|-0-------3--|-(3)---------||-(3)-----||
 |------1----3--|---2------------|---------1--|-(1)--------o||-(1)-----||
 |--------------|--------1---4-3-|------------|-------------||---------||

 


 


 Interlude


 W W W W


 

 
 |----------|----------|----------|----------|
 |----------|----------|----------|----------|
 |----------|----------|----------|----------|
 |----------|----------|----------|----------|
 |-6--------|-4--------|----------|----------|
 |----------|----------|-7--------|-6--------|

 


 


 W W [C#5]W +H +H


 

 
 |----------|----------|----------|----------------||
 |----------|----------|----------|----------------||
 |----------|----------|-6--------|-(6)----(6)\\----||
 |----------|----------|-6--------|-(6)----(6)\\----||
 |----------|----------|-4--------|-(4)----(4)\\----||
 |-4--------|-4--------|----------|----------------||

 


 


 Guitar Solo 1


 [F]Gtr II


 ~~~~~ ~~~~~


 Q. S S E +S S S S E


 

 
 |--------------------------------------------------|
 |-15b18-----------11-14-13b14r==(13)p11-10h11-10---|
 |--------------------------------------------------|
 |--------------------------------------------------|
 |--------------------------------------------------|
 |--------------------------------------------------|

 


 |


 | Gtr I


 

 
 | PM-----------------------------------------------

 


 | S S S S S S S S S S S S S S S S


 

 
 |--------------------------------------------------|
 |--------------------------------------------------|
 |--------------------------------------------------|
 |--------------------------------------------------|
 |--------------------------------------------------|
 |--1----1-1-1-1-1--1--1--1----1---1---1--1--1--1-1-|

 


 


 ~[F]~~~~~


 

 
 |-----------5-----------|

 


 +E S S S S S S S S T T T T S S S +S +S


 

 
 |-------------------------------------------------------------------------|
 |-(10)------10----10----10----10------------------------------------------|
 |--------11----10---------------------------------------------------------|
 |--------------------13----11----10h11p10----10---------------------------|
 |-----------------------------------------13----13---12---(12)b13r==(12)--|
 |-------------------------------------------------------------------------|

 


 |


 

 
 |-----------------------------------------------------------------|

 


 | S S S S S S S S S S S S S S S S


 

 
 |-------------------------------------------------------------------------|
 |-------------------------------------------------------------------------|
 |-------------------------------------------------------------------------|
 |-------------------------------------------------------------------------|
 |-------------------------------------------------------------------------|
 |---1--1--1--1--1--1--1--1--1--1--1-----1-----1----1----1---------1-------|

 


 


 [F] T T T T T T T


 

 
 |-------5-------| |----------7----------| |----------7----------| |----------7----------|

 


 +S S S S S S S S S S S S S S S S S S S S S S S S S S


 

 
 |------------------------------------------------------------------------------------------------|
 |------------------------------------------------------------------------------------------------|
 |------------------------8h==11h14p==11p8---------------------8h11h==14p11p8---------------------|
 |------------------------------------------------------------------------------------------------|
 |-(12)-9---8---9h==12-15--------------------15p12p9h==12-15--------------------15p12p==9h12h==15-|
 |------------------------------------------------------------------------------------------------|

 


 |


 

 
 | PM--------------------------------------------------------------------------------------|

 


 | S S S S S S S S S S S S S S S S


 

 
 |------------------------------------------------------------------------------------------------|
 |------------------------------------------------------------------------------------------------|
 |------------------------------------------------------------------------------------------------|
 |------------------------------------------------------------------------------------------------|
 |------------------------------------------------------------------------------------------------|
 |---1----1---1---1-----1---1-------1------1-----1---1-------1------1-----1---1-------1------1----|

 


 


 [F] T T T T T T T


 

 
 |--------7---------| |---------7----------| |--------7---------|

 


 S S S S S S S S S S S S S S S S S S S S S T E..


 

 
 |-------------------------------------------------------17p14p11-------------------||
 |-10h13h16p13p10---------------10h13h==16p13p10------------------------------------||
 |------------------------------------------------------------------17p14p=11\\------||
 |----------------------------------------------------------------------------------||
 |----------------15p==9h12h=15------------------15p12-9----------------------------||
 |----------------------------------------------------------------------------------||

 


 |


 | E. S +E E E. S +E E


 

 
 |----------------------------------------------------------------------------------||
 |----------------------------------------------------------------------------------||
 |----------------------------------------------------------------------------------||
 |----------------------------------------------------------------------------------||
 |----------------------------------------------------------------------------------||
 |--1----------------2---(2)----------5-----------6---------------5----(5)------2---||

 


 


 Keyboard Solo 1


 [F]W [F]W


 

 
 |---------------------------------|---------------------------------|
 |---------------------------------|---------------------------------|
 |---------------------------------|---------------------------------|
 |---------------------------------|---------------------------------|
 |---------------------------------|---------------------------------|
 |---------------------------------|---------------------------------|

 


 |


 

 
 | PM--------------------------------------------------------------|

 


 | S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S


 

 
 |---------------------------------|---------------------------------|
 |---------------------------------|---------------------------------|
 |---------------------------------|---------------------------------|
 |---------------------------------|---------------------------------|
 |---------------------------------|---------------------------------|
 |-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-|-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-|

 


 


 [F] [F] |--3--|


 W H.. S S S


 

 
 |---------------------------------|--------------------------11-13--||
 |---------------------------------|----------------------/14--------||
 |---------------------------------|---------------------------------||
 |---------------------------------|---------------------------------||
 |---------------------------------|---------------------------------||
 |---------------------------------|---------------------------------||

 


 |


 

 
 | PM----------------------------|

 


 | S S S S S S S S S S S S S S S S E. S +E E E. S +E E


 

 
 |---------------------------------|---------------------------------||
 |---------------------------------|---------------------------------||
 |---------------------------------|---------------------------------||
 |---------------------------------|---------------------------------||
 |---------------------------------|---------------------------------||
 |-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-|-1---2-(2)-5-6--5-(5)---2--------||

 


 


 Guitar Solo 2


 [F] T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T


 

 
 |-14-13-11----13-11-------11----------------11-13-14-13-11----13-11-------11----------------11-13-|
 |----------14-------14-13----14-13-11-13-14----------------14-------14-13----14-13-11-13-14-------|
 |-------------------------------------------------------------------------------------------------|
 |-------------------------------------------------------------------------------------------------|
 |-------------------------------------------------------------------------------------------------|
 |-------------------------------------------------------------------------------------------------|

 


 |


 

 
 | PM---------------------------------------------------------------------------------------|

 


 | S S S S S S S S S S S S S S S S


 

 
 |-------------------------------------------------------------------------------------------------|
 |-------------------------------------------------------------------------------------------------|
 |-------------------------------------------------------------------------------------------------|
 |-------------------------------------------------------------------------------------------------|
 |-------------------------------------------------------------------------------------------------|
 |--1-----1-----1-----1-----1-----1-----1-----1-----1-----1-----1-----1-----1-----1-----1-----1----|

 


 


 [F] T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T


 

 
 |-14-13-11----13-11-------11---------------------------------------------------------------------|
 |----------14-------14-13----14-13-11-14-13-11-10-13-11-10----11-10-------10---------------------|
 |----------------------------------------------------------13-------13-11----13-11-10-13-11-10-8-|
 |------------------------------------------------------------------------------------------------|
 |------------------------------------------------------------------------------------------------|
 |------------------------------------------------------------------------------------------------|

 


 |


 

 
 | PM---------------------------------------------------------------------------------------|

 


 | S S S S S S S S S S S S S S S S


 

 
 |------------------------------------------------------------------------------------------------|
 |------------------------------------------------------------------------------------------------|
 |------------------------------------------------------------------------------------------------|
 |------------------------------------------------------------------------------------------------|
 |------------------------------------------------------------------------------------------------|
 |--1-----1-----1-----1-----1-----1-----1-----1-----1-----1-----1-----1-----1-----1-----1-----1---|

 


 


 [F] ~~~~~~~~


 T T T T T T T T T T T T E +Q +E E


 

 
 |----------------------------------------------------------|
 |----------------------------------------------------------|
 |-11-10-8----10-8-------8----------------------------------|
 |---------11------11-10---11-10-8-7---(7)-------(7)\\-------|
 |----------------------------------------------------------|
 |----------------------------------------------------------|

 


 |


 

 
 | PM----------------------------------------------------|

 


 | S S S S S S S S S S S S S S S S


 

 
 |----------------------------------------------------------|
 |----------------------------------------------------------|
 |----------------------------------------------------------|
 |----------------------------------------------------------|
 |----------------------------------------------------------|
 |--1----1-----1----1----1-----1---1-1--1--1-1-1--1---1-1-1-|

 


 


 [F]E. S +E E E. S +E E


 

 
 |------------------------||
 |---------------7-(7)-4--||
 |-2--3-(3)-5-6-----------||
 |------------------------||
 |------------------------||
 |------------------------||

 


 |


 | E. S +E E E. S +E E


 

 
 |------------------------||
 |------------------------||
 |------------------------||
 |------------------------||
 |------------------------||
 |-1--2-(2)-5-6--5-(5)-2--||

 


 


 Keyboard Solo 2


 [F] Q Q H [F]W


 

 
 |------------------------------------|---------------------------------|
 |-[6]\\-------------------------------|---------------------------------|
 |------------------------------------|---------------------------------|
 |------------------------------------|---------------------------------|
 |------------------------------------|---------------------------------|
 |------------------------------------|---------------------------------|

 


 |


 

 
 | PM----------------------------------------------------------------|

 


 | S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S


 

 
 |------------------------------------|---------------------------------|
 |------------------------------------|---------------------------------|
 |------------------------------------|---------------------------------|
 |------------------------------------|---------------------------------|
 |------------------------------------|---------------------------------|
 |--1---1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-|-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-|

 


 


 [F]W


 

 
 |---------------------------------|
 |---------------------------------|
 |---------------------------------|
 |---------------------------------|
 |---------------------------------|
 |---------------------------------|

 


 |


 

 
 | PM----------------------------|

 


 | S S S S S S S S S S S S S S S S


 

 
 |---------------------------------|
 |---------------------------------|
 |---------------------------------|
 |---------------------------------|
 |---------------------------------|
 |-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-|

 


 


 D.S. al Coda


 [F] [Gb] [AmBbmAm] [Gb] [F] [Gb] [AmBbm] ~~~~


 E. S +E E E. S +E E E. S +E E Q Q


 

 
 |-----------------------|----------------------||
 |-----------------------|----------------------||
 |-2--3-(3)-5-6--5-(5)-3-|-2--3-(3)-5-[6]\\------||
 |-----------------------|----------------------||
 |-----------------------|----------------------||
 |-----------------------|----------------------||

 


 |


 | E. S +E E E. S +E E E. S +E E q Q


 

 
 |-----------------------|----------------------||
 |-----------------------|----------------------||
 |-----------------------|----------------------||
 |-----------------------|----------------------||
 |-----------------------|----------------------||
 |-1--2-(2)-5-6--5-(5)-2-|-1--2-(2)-5--6--------||

 


 


 Outro


 &amp;


 Gtr I[BbA5BbA5]


 

 
 PM----------| PM----|

 


 S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S S


 

 
 |---------------------------------|---------------------------------|
 |---------------------------------|---------------------------------|
 |---------------------------------|---------6---7-6-9-7-6-----------|
 |-----7-----8-----5h7-----8s7-8s7-|-7-5-8-7---8-----------8-7-5-----|
 |-0-0---0-0---0-0-----0-0-8s7-8s7-|-----------------------------8-7-|
 |---------------------------------|---------------------------------|

 


 


 [D5]Q. E [E5] Q. E [A5]W [A5]+W [A5]+W


 

 
 |----------------|----------|------------|--------*|
 |----------------|----------|------------|--------*|
 |-7\\------9\\-----|-2--------|-(2)--------|-(2)----*|
 |-7\\------9\\-----|-2--------|-(2)--------|-(2)----*|
 |-5\\------7\\-----|-0--------|-(0)--------|-(0)----*|
 |---------7\\-----|----------|------------|--------*|

 


 


 


 Duration Legend


 

 
 ---------------
 W - whole; H - half; Q - quarter; E - 8th; S - 16th; T - 32nd; X - 64th; a - acciaccatura

 


 + - note tied to previous; . - note dotted; .. - note double dotted


 Uncapitalized letters represent notes that are staccato (1/2 duration)


 Irregular groupings are notated above the duration line


 Duration letters will always appear directly above the note/fret number it represents the


 duration for. Duration letters with no fret number below them represent rests. Multi-


 bar rests are notated in the form Wxn, where n is the number of bars to rest for. Low


 melody durations appear below the staff


 


 Tablature Legend


 

 
 ----------------

 


 h - hammer-on


 p - pull-off


 b - bend


 pb - pre-bend


 r - bend release (if no number after the r, then release immediately)


 /\\ - slide into or out of (from/to "nowhere")


 s - legato slide


 S - shift slide


 - natural harmonic


 (n) - artificial harmonic


 n(n) - tapped harmonic


 ~ - vibrato


 tr - trill


 T - tap


 TP - trem. picking


 PM - palm muting


 \\n/ - tremolo bar dip; n = amount to dip


 \\n - tremolo bar down


 n/ - tremolo bar up


 /n\\ - tremolo bar inverted dip


 = - hold bend; also acts as connecting device for hammers/pulls


 - volume swell (louder/softer)


 x - on rhythm slash represents muted slash


 o - on rhythm slash represents single note slash


 


 Misc Legend


 

 
 -----------

 


 | - bar


 || - double bar


 ||o - repeat start


 o|| - repeat end


 *| - double bar (ending)


 : - bar (freetime)


 $ - Segno


 &amp; - Coda


 Tempo markers - = BPM(8/16=s8/s16), where s8 = swing 8ths, s16 = swing 16ths`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/s/symphony-x/113530.html"}]},{name:"Little Girl (1966)",songs:[{title:"Little Girl",chords:`Another one-hit wonder (hey, what's Andrew's Ace Archives for?), the


 Syndicate of Sound, took this to #8 in July, 1966. For more than you


 probably care to know about the history of the band, check out _Cream


 Puff War_ #2, available from Sundazed. -- AWR


 


 "Little Girl"


 (Bob Gonzales - Don Baskin)


 


 Intro [electric 12-string]:


 


 v v v v v v v v


 

 
 ---0---0---0---0-|---0---0---0---0-|
 --0---0---0---0--|--0---0---0---0--|
 -4---2---1---2---|-4---2---1---2---|
 -----------------|-----------------|
 -----------------|-----------------|
 -----------------|-----------------|

 


 


 Main riff [electric 12-string, tremolo-picked; 2X]:


 


 [A]v v [D]v v [G]v v [C]v v [G]v v v v v v v v


 

 
 -9-----10----|-7-----8-----|-7-----------|-------------|
 -10----10----|-8-----8-----|-8-----------|-------------|
 -------------|-------------|-------------|-------------|
 -------------|-------------|-------------|-------------|
 -------------|-------------|-------------|-------------|
 -------------|-------------|-------------|-------------|

 


 


 Verse 1:


 


 [E]Hey, little g[A]irl, you don't h[D]ave to hide n[G]othin' no m[A]ore


 [E]You didn't do n[A]othin' that h[D]adn't been d[G]one bef[A]ore


 


 [main riff, 2X] 


 


 Verse 2:


 


 Little girl thought she wouldn't get caught, you see


 She thought she'd get away with goin' out on me, yeah


 


 [main riff, 2X] 


 


 Verse 3:


 


 Other girls did it, you didn't think of nothin' new


 You went out on me, so other girls did it too


 


 [main riff, 2X] 


 


 [repeat intro, w/drums] 


 


 [main riff, 2X] 


 


 Break:


 


 [E7]v v [A7]v v [D7]v v [G7]v v


 

 
 -------------3---|-2-----------1---|
 -----3---2-------|-----1---0-------|
 -1---------------|-----------------|
 -----------------|-----------------|
 -----------------|-----------------|
 -----------------|-----------------|

 


 


 Verse 4:


 


 You can leave, little girl, I don't want you 'round no more


 If you come knockin', you won't get past my door... yeah!


 


 [main riff, 2X] 


 


 Verse 5:


 


 You got nothin' to hide and everybody knows it's true


 Too bad, little girl, it's all over for you... ha-ha-ha-ha


 


 [main riff, 2X] 


 


 [repeat break riff; end cold on A] 


 


 -- another ace 60's tab from Andrew Rogers`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/s/syndicate-of-sound/18896.html"}]},{name:"One Day at a Time (1997)",songs:[{title:"Fairweather Friend",chords:`Symposium , Fairweather friend


 


 Tabbed


 By Mike McConnell (Mike.McConnell@web-farm.aha.ru)


 


 Intro


 


 [G] [Am] [C] [D]  


 Verse 1


 [G]When it's raining you're wet


 [C]Yo[Am]u k[D]now where to be seen


 [G]When it dries out again, you bet


 [C]Yo[Am]u'r[D]e right back on the scene


 [G]And when the clouds begin to fall


 [C]Yo[Am]u'r[D]e always hiding from the rain


 [G]And when the sun begins to shine


 [C]Yo[Am]u'r[D]e always first in line again


 Pre Chorus 1


 


 [Em]It [B]wo[C]ul[G]d be nice if you could just make up your mind


 [Em]It [B]wo[C]ul[D]d [D]be nice if you could stop wasting my time


 


 Chorus 1


 [G]My[Am] fa[C]irweather friend


 [D]Ba[G]ck[Am] he[C]re[D] again until the end


 [G]My[Am] fa[C]irweather friend


 [D]Back here again


 Verse 2


 Never do it yourself, when someone else could do it for you.


 Never put yourself out when something less will do.


 SO WHEN THE BENEFITS OUT WEIGH THE WORK STAY RIGHT PUT


 AND WHEN THE GOING GETS A LITTLE ROUGH DO THE ONLY THING


 YOU KNOW YOU SHOULD


 


 Pre Chorus 2


 Chorus


 Solo


 E G# A B (x2)


 F# A# B C# (x2)


 Bridge


 (No chords)


 Chorus`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/s/symposium/26445.html"},{title:"Fizzy",chords:`Symposium , Fizzy


 Mike McConnell


 Fizzy Tabbed by Mike McConnell


 This song is cool especially when the gang did it with Suggs at Reading'99 . Looking forward to the new album . This song is cool played Electric or acoustic . If your playing electric play it as it is but if your playing acoustic suplement G for this in the verses .


 320010


 as it gives it a slight edge . See you at the gigs .


 Mike


 


 Intro Am


 


 [Am]And once more I'm feeling sore the room is spi[C]nning round me [G]


 [Am]Too much drink the night before at least I sle[C]pt soundly[G]


 [G]Mothers in the kitchen p[D]eeling carrotts by the light of [Am]one bare bulb[C]


 [G]Daddy's in the dark outs[D]ide he's had too much to drink a[Am]gain tonight [C]


 


 [Am]You again I'm back again sitting on his sofa [C] [G]


 [Am]Nothing's on the tee-vee tonight why don't you[C] come over? [G]


 [G]Meet you by John Menzies[D] we'll go down beside the river [Am]Thames this even[C]ing


 [G]I'll drink what I always[D] drink and we'll talk about thin[Am]gs which have No[C] meaning


 


 [C]We're always looki[G]ng for something to ho[D]ld on to [Am]


 [C]We're with our fri[G]ends they're the best [D]things we can fi[Am]nd


 [C]We don't belong he[G]re but where else can [D]we go to? [Am]


 [C]It's far too late [G]now to stop [D] [Am]


 


 [Am]Haft past ten same again and we'll be going ho[C]me soon[G]


 [Am]Don't know why I feel so high maybe it's the f[C]ull moon [G]


 [G]Walking down this street[D] again this street I've walked t[Am]en thousand time[C]s before


 [G]Wind is at my back again[D] good night my friends I'm back [Am]indoors again [C]


 


 [C]We're always looki[G]ng for something to ho[D]ld on to [Am]


 [C]We're with our fri[G]ends they're the best [D]things we can fi[Am]nd


 [C]We don't belong he[G]re but where else can [D]we go to? [Am]


 [C]It's far too late [G]now to stop [D] [Am]


 


 Repeat intro


 


 [G]Meet you by John Menzies[D] we'll go down beside the river [Am]Thames this even[C]ing


 [G]I'll drink what I always[D] drink and we'll talk about thin[Am]gs which have n[C]o meaning`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/symposium/fizzy_crd.html"}]},{name:"Meccano Mind (2003)",songs:[{title:"Destiny",chords:`|-------------------------|-------------------------|
 |-------------------------|-------------------------|
 |-------------------------|-------------------------|
 |-0-x-0-x-x-x-0-x-0-x-x-x-|-0-x-0-x-x-x-0-x-0-1-x-4-|

 


 


 [1] [2] 


 


 The guitars starts playing later in the song


 


 Guitar riff 1:


 


 

 
 |--------------------------------|
 |--------------------------------|
 |--------------------------------|
 |-9-9-9--10-10-10-9-9-9--7-7-7---|
 |-7-7-7--7--7--7--7-7-7--7-7-7---|
 |--------------------------------|

 


 


 Guitar riff 2:


 


 

 
 |-----------------------------------------|
 |-12-12-12--13-13-13--12-12-12--10-10-10--|
 |-----------------------------------------|
 |-9--9--9---10-10-10--9--9--9---7--7--7---|
 |-----------------------------------------|
 |-----------------------------------------|`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/s/syntax/201462.html"},{title:"Message",chords:`[F] [C] [D#] [Bb]  


 I [F]heard these words in my head


 Made me [C]think about love instead


 Made me [D#]think about what could be


 Made me [Bb]shake a little now I'm free


 I was [F]in a world so blue


 With only [C]visions of me and you


 It [D#]could have cost me my soul


 I [Bb]could have lost all control


 I was [F]in a shaky state


 I was [C]losing my grip on time


 [D#]Here all over the place


 The [Bb]walls of my mind I climb


 


 [F]Here I go again


 [C]Feelings I can not describe


 [D#] How did I get here?


 The [Bb]walls of my mind I climb


 [F]Here I am again


 [C]Faces I don't recognize


 [D#]I got a message[Bb]


 


 Now I [F]got me searching for my goal


 I got me [C]dreaming of rock and roll


 Feels [D#]like i'm falling free in the sky


 Feels l[Bb]ike i'm learning now how to fly


 Now I [F]got to tear down these walls


 Got to [C]run to her when she calls


 Got to [D#]stand up and be a man


 Got to [Bb]do it 'cause I know I can


 I was [F]in a shaky state


 I was [C]losing my grip on time


 [D#]Here all over the place


 The [Bb]walls of my mind I climb


 


 


 [F]Here I go again


 [C]Feelings I can not describe


 [D#] How did I get here?


 The [Bb]walls of my mind I climb


 [F]Here I am again


 [C]Faces I don't recognize


 [D#]I got a message[Bb]


 


 [F] [C] [D#] [Bb]  


 So the [F]journey was full of event


 I met [C]you, I met her, I met them


 But [D#]how could I ever prevent


 The [Bb]escape to my own minds den


 I was [F]in a shaky state


 I was [C]losing my grip on time


 [D#]Here all over the place


 The [Bb]walls of my mind I climb


 


 [F]Here I go again


 [C]Feelings I can not describe


 [D#] How did I get here?


 The [Bb]walls of my mind I climb


 [F]Here I am again


 [C]Faces I don't recognize


 [D#]I got a message[Bb]`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/syntax/message_acoustic_crd_ver_3.html"}]},{name:"Secrets of the Beehive (1987)",songs:[{title:"When Poets Dreamed of Angels",chords:`When Poets Dreamed Of Angels (David Sylvian)


 


 Tuning: standard (EADGHE)


 


 I found some live version of the song so I got the chords for the song figured out quite


 There might still be a few mistakes though.


 


 Chords used:


 


 [Fmaj7-5] [Em] [A] [Am] [Bm] [F] [G] [Edim7] [Gm7] [Am(2)] [Bbmaj7] [Fm7] [G#] [A#] [Dsus2] 


 

 
 --0------0--0--0--2--1--3--3-----3---5-----1------1---4--6---0-----|
 --0------0--2--1--3--1--3--2-----3---5-----3------1---4--6---3-----|
 --2------0--2--2--4--2--0--3-----3---5-----2------1---5--7---2-----|
 --3------2--2--2--4--3--0--2-----3---7-----3------1---6--8---0-----|
 --3------2--0--0--2--3--2--------5---7-----1------3---6--8---------|
 --1------0-----------1--3--------3---5------------1---4--6---------|

 


 


 Well here's how I play the intro part of the song. At some point a second guitar comes


 to mix it up, but here's my one-guitar version.


 


 Intro:


 


 

 
 ---------------------------------------------------------------------|
 -(12)-(7)-15-15-15p12------------------------------------------------|
 -(12)-(7)-------------11-11h12p11----11-12-14-11---------------------|
 -(12)-(7)-------------------------14-------------12----12/14---------|
 -(12)-----------------------------------------------14---------------|
 -(12)----------------------------------------------------------------|
 ----------------(7)--------------------------------------------------|
 ----------------(7)-------------(7)----------------------------------|
 ----------------(7)--------------------------------------------------|
 -10p9-------9-7-------------(5)---------5---10-10-10p9-7-5-7/9-7-----|
 ------10h12-------------(5)-----------9------------------------------|
 --------------------(7)-------------7-----8--------------------------|
 ---------------------------------------------------------------------|
 -------------------------------------------------(5)-----------------|
 ---------------------------7h9-9-------------(5)---------------------|
 -9-------------------7/9-----------------(5)-------------------------|
 ---10-9---9-10-9---------------------(5)-----------------------------|
 --------7--------7---------------(7)---------------------------------|

 


 


 And then:


 


 Em, Fmaj7-5, Em, Fmaj7-5, Em, A


 


 Verse:


 


 [Fmaj7-5]She rises early from [Em]bed, [Fmaj7-5]runs to the mirror.


 The [Em]bruises [A]inflicted in [Am]moments of [Bm]fury.[Em]


 [Fmaj7-5]He kneels beside her once [Em]more, [Fmaj7-5]whispers of promise


 [Em]"Next time I'll [A]break every [Am]bone in your [Bm]body.".[Em]


 [F]And the well-wishers [G]let the devil in.[A]


 And if the [F]river ran dry they'd [G]deny it happening.[A]


 


 Bridge:


 


 [Edim]As the card players [F]steal their hands from the [Edim]bottom of the [F]deck.


 [Am]Row upon row of [G]feudal houses [Gm7]blown away.[Am]


 [Bbmaj7]Medicine for the [Fm7]popular com[Gm7]plaint.[G#] [A#]


 


 Chorus:


 


 [Em]When the poets dreamed of [Fmaj7-5]angels, [Em]what did they see?


 [A]History lined [Am]up in a [Dsus2]flash on their [Fmaj7-5]backs.


 [Em]When the poets dreamed of [Fmaj7-5]angels, [Em]what did they see?


 The [A]Bishops and [Am]knights well [Dsus2]placed to [Fmaj7-5]attack.


 


 Now it should be quite close to how it's played. At least this is how he played the


 at one live show I watched. Not completely sure about the Bm there, but I think it is it.


 


 Tabbed by Kari K��nt�`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/d/david-sylvian/70061.html"},{title:"Orpheus",chords:`Tuning:Standard


 


 |[Eadd9] /_/_/ /_/_/ | /_/_/ /_/_/ |[Cmaj7] /_/_/ /_/_/ |[Cmaj7/E] /_/_/ /_/_/ |


 


 | [A]/_/_/ /_/_/ | /_/_/ /_/_/ |[Fmaj7] /_/_/ /_/_/ | /_/_/ /_/_/ |


 


 [E] Standing firm on this...stony ground, the [Cmaj7]wind blows hard,


 Pulls these clothes around, I..[A]. harbour all the same worries as most,


 The temp - t[Fmaj7]ations to leave, or to give up the ghost,


 [D] I wrestle with an o[Bm/F#]utlook on life [Bm/A]that sh[G]ifts between darkness,


 G6(type2) Fmaj7


 And shadowy light, I struggle with words, for fear that they'll hear,


 But Or[Gm7]pheus sleeps on his back, still dead to the [Amaj7]world!


 


 [E] Sunlight falls, my wings open wide, there's a [Cmaj7]beauty here, I cannot deny,


 And bot[A]tles that tumble, and crash on the stairs,


 Are just[Fmaj7] so many people I knew never cared, [D] down below, on the [Bm/F#]wreck of the ship,


 Bm/A G G6(type2)


 Are a stronghold of pleasures I couldn't regret,


 But the b[Fmaj7]aggage is swallowed up by the tide


 As Or[Gm7]pheus keeps to his promise, and stays by my [Amaj7]side!


 


 [Fmaj7] [Fmaj9] [Fmaj7] Tell me, [G6] [Gadd9] I've still a [G6]lot to learn,


 [Fmaj7] I u[Fmaj9]nderstand,[Fmaj7] [G6] [Gadd9]these fires n[G6]ever stop,


 [Fmaj7] Be - [Fmaj9]lieve-[Fmaj7]- me, [G6] when [Gadd9]this joke is t[G6]ired of laughing,


 [Fmaj7] I will-[Fmaj9]---- hear.[Fmaj7]... the pr[G6]omise of my Or[Bb]pheus [Asus4]sing!


 


 |[Eadd9] /_/_/ /_/_/ | /_/_/ /_/_/ |[Cmaj7] /_/_/ /_/_/ |[Cmaj7/E] /_/_/ /_/_/ |


 


 | [A]/_/_/ /_/_/ | /_/_/ /_/_/ |[Fmaj7] /_/_/ /_/_/ | /_/_/ /_/_/ |


 


 [E] Sleepers sleep, while we... row the boat,


 Just[Cmaj7] you, the weather, and I gave up hope,


 But a[A]ll of the hurdles that fell in our laps...


 ...was [Fmaj7]fuel for the fire, and straw for our backs,


 [D] Still the voices have s[Bm/F#]tories to tell...


 Bm/A G G6(type2)


 Of the power struggles in heaven &amp; hell,


 But[Fmaj7] we feel secure against such might dreams,


 As O[Gm7]rpheus sings of the promise tomorrow may... [Amaj7]bring!


 


 |[Fmaj7] /_/_/ [Fmaj9] /_/_/ |[Fmaj7] /_/_/ /_/_/ | [G6]/_/_/ [Gadd9] /_/_/ | [G6]/_/_/ /_/_/ |(twice)


 


 [Fmaj7] [Fmaj9] [Fmaj7] Tell me, [G6] [Gadd9] I've still a [G6]lot to learn,


 [Fmaj7] I u[Fmaj9]nderstand,[Fmaj7] [G6] [Gadd9]these fires n[G6]ever stop,


 [Fmaj7] Be - [Fmaj9]lieve-[Fmaj7]- me, [G6] when [Gadd9]this joke is t[G6]ired of laughing,


 [Fmaj7] I will-[Fmaj9]---- hear.[Fmaj7]... the pr[G6]omise of my Or[Bb]pheus [Asus4]sing!


 ************************************


 


 Eadd9 = 024100


 Cmaj7 = x32000


 Cmaj7/E = xx0231


 A = x02220


 E = 022100


 D = xx0232


 Bm/F# = 224432


 Bm/A = x04432


 G = 355433


 G6(type2) = 355400


 Gm7 = 353333


 Amaj7 = x02120


 Fmaj7 = xx3210


 Fmaj9 = xx3010


 G6 = 320000


 Gadd9 = 320200


 Bb = 113331


 Asus4 = x02230`,url:"https://www.chordie.com/chord.pere/www.azchords.com/d/davidsylvian-tabs-23009/orpheus2-tabs-457013.html"}]},{name:"Chances (2001)",songs:[{title:"Shallow Water",chords:`Hello,


 I've been trying to search the internet for this ass kickin' ballad chords but couldn't


 find them. That is why I've come up with an idea to figure out the chords on my own. The


 song is pretty easy to play. I am not saying it's the best version but it definately


 sounds alike the original. The whole song is based on THREE chords: B(or POLISH H) D A


 (regular tuning)


 


 VERSE I


 


 Si[B]tting he[D]re


 no answ[A]ers near


 al[B]l I kn[D]ow


 before the [A]curtain dropped


 you left [A]the show


 


 VERSE II


 ( Tab from: http://www.guitartabs.cc/tabs/s/sylver/shallow_water_crd_ver_2.html )


 Ly[B]ing h[D]ere


 future [A]unclear


 al[B]l I kn[D]ow


 before the c[A]urtain dropped


 you left [A]the show


 


 CHORUS


 Shallow[B] water


 rippled[D] by tears


 shallow[A] water


 mirrors[A] my fears


 silent [B]raindrops


 soothen[D] my skin


 still t[A]he answers


 stay lo[A]cked down within


 


 YOU JUST HAVE TO PLAY ALONG WITH THE SONG and you'll surely figure out the rhythm!!!


 


 enjoy


 


 any comments, questions, words of criticism?: shogun@kn.home.pl`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/sylver/shallow_water_crd_ver_2.html"},{title:"Forever in Love",chords:`G D Em C x3


 


 [G]There's a new [D]star in my sky [Em] [C]


 [G] I've only known[D] you for a while [Em] [C]


 [G] But my heart seems to surrender to y[D]our love [C]


 [G] I'm a vi[D]ctim of your smi[Em]le [C]


 


 [G] Forever in love [D]


 You and I [Em]


 Forever in love [C]


 We both know why [G]


 There's a place unknown, there's just one thin[D]g i know


 [Em]We have to give it a try [C]


 


 Cupid's arrow struck my heart


 But I don't feel anything


 In the end there's nothing to win or nothing to lose


 In this foolish lover's game


 


 (3x)Forever in love


 You and I


 Forever in love


 We both know why


 There's a place unknown, there's just one thing I know


 We have to give it a try


 


 By Jan. Note: My first tab! :D Tell me what you think abt it.


 PS: I would have logged in, but I have probs :P ;)`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/sylver/forever_in_love_crd.html"}]},{name:"Skinhead Moonstomp (1970)",songs:[{title:"Skin Flint",chords:`-------------------------------------------------------------------------------

 


 SKIN FLINT - Symarip


 

 
 -------------------------------------------------------------------------------

 


 Tabbed by: DPL


 Email: nizibian@gmail.com


 


 Official band website: http://www.symarip.com/ or http://www.myspace.com/mrsymarip1


 


 Tuning: Standard (EADGBe)


 


 These are the only two chord progressions in this song, play them ska-style with a


 downward stroke mute on the downbeat and and upward stroke chord on the upbeat:


 


 [B] [E] [G#m]  

 
 e|--x7x7x7x7--------x4x4x4x4x4x4x4x4-----------------------------------------|
 B|--x7x7x7x7x9x9x9x9x4x4x4x4x4x4x4x4-----------------------------------------|
 G|--x8x8x8x8x9x9x9x9x4x4x4x4x4x4x4x4-----------------------------------------|
 D|--x9x9x9x9x9x9x9x9x6x6x6x6x6x6x6x6-----------------------------------------|
 A|--x9x9x9x9x7x7x7x7x6x6x6x6x6x6x6x6-----------------------------------------|
 E|--x7x7x7x7--------x4x4x4x4x4x4x4x4-----------------------------------------|

 


 


 [B] [G#m]  

 
 e|--x7x7x7x7x7x7x7x7x4x4x4x4x4x4x4x4-----------------------------------------|
 B|--x7x7x7x7x7x7x7x7x4x4x4x4x4x4x4x4-----------------------------------------|
 G|--x8x8x8x8x8x8x8x8x4x4x4x4x4x4x4x4-----------------------------------------|
 D|--x9x9x9x9x9x9x9x9x6x6x6x6x6x6x6x6-----------------------------------------|
 A|--x9x9x9x9x9x9x9x9x6x6x6x6x6x6x6x6-----------------------------------------|
 E|--x7x7x7x7x7x7x7x7x4x4x4x4x4x4x4x4-----------------------------------------|

 


 


 Listen to the song to get the timing right and listen for palm mutes, especially


 on the lower notes.


 


 


 [B] [E] [G#m]  

 
 e|---------------------------------------------------------------------------|
 B|---------------------------------------------------------------------------|
 G|-----------------------9---------------------------------------------------|
 D|-----------9-------6-9-------------6-----------6---------------------------|
 A|-------6-9---7-7-7---------------6-----------6-----------------------------|
 E|-7-7-7-------------------4-4-4-7-----4-4-4-7-------------------------------|

 


 


 [B] [E] [G#m]  

 
 e|---------------------------------------------------------------------------|
 B|---------------------------------------------------------------------------|
 G|-----------------------9---------------------------------------------------|
 D|-----------9-------6-9-------------6-----------6---------------------------|
 A|-------6-9---7-7-7---------------6-----------6-----------------------------|
 E|-7-7-7-------------------4-444-7-----4-444-7-------------------------------|

 


 


 [B] [E] [G#m]  

 
 e|---------------------------------------------------------------------------|
 B|-----------------------------------9-----------9---------------------------|
 G|-----------------------9---------8-----------8-----------------------------|
 D|-----------9-------6-9---6-666-9-----6-666-9-------------------------------|
 A|-------6-9---7-777---------------------------------------------------------|
 E|-7-777---------------------------------------------------------------------|

 


 


 [B] [E] [G#m]  

 
 e|---------------------------------------------------------------------------|
 B|---------------------------------------------------------------------------|
 G|-----------------------9---------------------------------------------------|
 D|-----------9-------6-9-------------6-----------6---------------------------|
 A|-------6-9---7-777---------------6-----------6-----------------------------|
 E|-7-777-------------------4-444-7-----4-444-7-------------------------------|

 


 


 [B] [E] [G#m]  

 
 e|-------------------------------------4-4-4-4--6/-7-------------------------|
 B|-------------------------------------4-4-4-4--6/-7-------------------------|
 G|-----------------------9-------------4-4-4-4--7/-8-------------------------|
 D|-----------9-------6-9---------------6-6-6-6--8/-9-------------------------|
 A|-------6-9---7-777---------------6-----------------------------------------|
 E|-7-777-------------------4-444-7-------------------------------------------|

 


 


 [B] [G#m]  

 
 e|-7-------------------------------------------------------------------------|
 B|-7-------------------------------------------------------------------------|
 G|-8-------------------------------------------------------------------------|
 D|-9--------9------------9---------------66-6--------------------------------|
 A|------6-9----------6-9---------------6-----6-------------------------------|
 E|-------------7-777-----------4-444-7--------7------------------------------|

 


 


 [B] [G#m]  

 
 e|---------------------------------------------------------------------------|
 B|---------------------------------------------------------------------------|
 G|---------------------------------------------------------------------------|
 D|---------------------------------------------------------------------------|
 A|------6-6p4-----6-6p4---------6------5/64----------------------------------|
 E|-7-777-----7-7-7-----7-444447---7-4------74--------------------------------|

 


 


 [B] [G#m]  

 
 e|---------------------------------------4-4-4-4-----------------------------|
 B|---------------------------------------4-4-4-4-----------------------------|
 G|---------------------------------------4-4-4-4-----------------------------|
 D|---------------------------------------6-6-6-6-----------------------------|
 A|---------6-4---------------------6-----------------------------------------|
 E|-7-777-7----7-7-777-7-7-6-4-444-7--7-4-------------------------------------|

 


 


 [B] [E] [G#m]  

 
 e|----------------------------------4-4-4-7\\\\--------------------------------|
 B|------------8/9--9----------------4-4-4------------------------------------|
 G|------------8/9--9--9-------------4-4-4------------------------------------|
 D|------------8/9--9---------------6-----------------------------------------|
 A|---------6-4-------------------6-----------7\\\\-----------------------------|
 E|-7-777-7---------------4-444-7---------------------------------------------|

 


 


 [B] [E] [G#m]  

 
 e|---------------------------------------------------------------------------|
 B|---------------------------------------------------------------------------|
 G|-----------------------9---------------------------------------------------|
 D|-----------9-------6-9------------6-----------6----------------------------|
 A|-------6-9---7-777--------------6---6--------6-----------------------------|
 E|-7-7-7-------------------444447------44444-7-------------------------------|

 


 


 [B] [E] [G#m]  

 
 e|------------------------------------7\\\\--11\\\\------------------------------|
 B|------------------------------------9\\\\--12\\\\------------------------------|
 G|-----------------------9---------8-----------------------------------------|
 D|-----------9-------6-9--9-6-666-9------------------------------------------|
 A|-------6-9---7-777---------------------------------------------------------|
 E|-7-777---------------------------------------------------------------------|

 


 


 [B] [E] [G#m]  

 
 e|---------------------------------------------------------------------------|
 B|---------------------------------------------------------------------------|
 G|-------------------------9-------------------------------------------------|
 D|---------------------6-9-------------6-----------6-------------------------|
 A|-------6-9-9---77777---------------6-----------6---------------------------|
 E|-7-7-7---------------------44444-7-----44444-7-----------------------------|

 


 


 [B] [E] [G#m]  

 
 e|-------------------------------------/4-4-4-4-4----------------------------|
 B|-------------------------------------/4-4-4-4-4----------------------------|
 G|-----------------------9-------------/4-4-4-4-4----------------------------|
 D|-----------9-------6-9--9----------6---------------------------------------|
 A|-------6-9---77777---------------6-----------------------------------------|
 E|-77777-------------------4-444-7-------------------------------------------|

 


 


 [B] [G#m] [B] [G#m]  

 
 e|--------------------------------------------------------7-7-7-7-7\\-------------------------|
 B|----------------------------------------------------12--7-7-7-7-7\\-------------------------|
 G|--------------------------------------------------8-----8-8-8-8-8\\-------------------------|
 D|----------9-----------------------6-6-666677779-9-------9-9-9-9-9\\-----------6-----------6-|
 A|------6-9-----------------------6------------------------------------------6-----------6---|
 E|-77777------7777-7-222333444447------------------------------------44444-7-----44444-7-----|

 


 


 [B] [G#m]  

 
 e|---------------------------------------------------------------------------|
 B|---------------------------------------------------------------------------|
 G|---------------------------------------------------------------------------|
 D|-----------9-----------------------6---------------------------------------|
 A|-------6-9---------6-----------6-4-----------------------------------------|
 E|-7-7-7-------77777---7-6--4444------4444-4-4444-6666-----------------------|

 


 


 [B] [G#m]  

 
 e|---------------------------------------------------------------------------|
 B|---------------------------------------------------------------------------|
 G|---------------------------------------------------------------------------|
 D|-----------9-----------9-----------6-----------6---------------------------|
 A|-------6-9---------6-9-----------6-----------6-----------------------------|
 E|-7-7-7-------7-7-7-------44444-7-----44444-7-------------------------------|

 


 


 [B] [E] [G#m]  

 
 e|---------------------------------------------------------------------------|
 B|---------------------------------------------------------------------------|
 G|-----------------------9---------------------------------------------------|
 D|-----------9-------6-9-------------6-----------6---------------------------|
 A|-------6-9---77777---------------6-----------6-----------------------------|
 E|-77777-------------------44444-7-----44444-7-------------------------------|

 


 


 [B] [E] [G#m]  

 
 e|---------------------------------------------------------------------------|
 B|---------------------------------------------------------------------------|
 G|------------------------9--------------------------------------------------|
 D|-----------9--------6-9-------------6------------6-------------------------|
 A|-------6-9---7-7--7---------------6------------6---------------------------|
 E|-77777-------------------4-4--4-7-----4-4--4-7-----------------------------|

 


 


 [B] [E] [G#m]  

 
 e|--------6/7-----1212-//16--16-16-//16-//16-//16----------------------------|
 B|--------8/9-----1212-//16--16-16-//16-//16-//16----------------------------|
 G|--------8/9----------------------------------------------------------------|
 D|---------------------------------------------------------------------------|
 A|-----6-------------------------------------------11\\\\----------------------|
 E|-7-7--7--------------------------------------------------------------------|

 


 


 [B] [E] [G#m]  

 
 e|---------------3/4-4-----7-7-7-7-7-7-7-------------------------------------|
 B|---------------3/4-4-----7-7-7-7-7-7-7-------------------------------------|
 G|------------------------------------------FADE OUT-------------------------|
 D|-----------9---------------------------------------------------------------|
 A|-------6-9-----------------------------------------------------------------|
 E|-77777---------------------------------------------------------------------|

 


 


 


 ************************************


 


 | / slide up


 | \\ slide down


 | h hammer-on


 | p pull-off


 | ~ vibrato


 | + harmonic


 | x Mute note


 | B Bend


 | pb Pre-bend


 | br Bend release


 | pbr Pre-bend release


 | brb Bend release bend


 


 ************************************`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/symarip/skin_flint_tab.html"}]},{name:"Posthumous Silence (2006)",songs:[{title:"One Step Beyond",chords:`Artist - Sylvan


 *****************


 Song - One Step Beyond


 ************************


 Album - Presets


 *****************


 Tabbed By - Ayreon77


 **********************


 


 


 INTRO


 ******


 [Eb] [Gm7]  


 

 
 ---------------------------------------------------

 


 VERSE 1


 ********


 [Gm7]My resistance is broken


 I can not even lift my head


 Left myself too wide open


 Now I pull back myself instead


 


 Is it true that although I'm numb it's burning


 Is it true that outside the world keeps turning


 


 

 
 ---------------------------------------------------

 


 CHORUS


 *******


 And then it's[Cm] you - you rouse in me the [Bb]fire I need


 And it's [Ab]true - you show me how to [F]put me at ease


 And when [Cm]you soothe you reach to pull me [Bb]out from the deep


 What a [Ab]fool - because you should be the [Bb]one I relieve


 


 For when you [Eb]rise and carry on and [Bb]take me one step beyond


 You [Ab]find the words that I'd never search for


 You [Eb]try to make me strong and [Bb]take me one step beyond


 You [Ab]win the thoughts that I can not fight for


 


 [Eb] [Gm7]  


 

 
 ---------------------------------------------------

 


 VERSE 2


 ********


 [Gm7]My resistance gets weaker


 How to breathe when the air is gone


 Can one lose what one lived for


 How to end - How to carry on?


 


 

 
 ---------------------------------------------------

 


 CHORUS


 *******


 

 
 ---------------------------------------------------

 


 


 Chords through guitar part


 ***************************


 [Cm] [Ab]  


 

 
 ---------------------------------------------------

 


 BRIDGE


 *******


 [Cm]Soaking up the moonlight remorsefully - picking up the dirt devotedly


 How to [Ab]keep on, to keep on


 [Cm]Exchanging a dime for misery - relinquishing hopes reluctantly


 How to [Ab]keep on, to keep on


 


 [Cm]  


 

 
 ---------------------------------------------------

 


 Repeat VERSE 1


 ***************


 


 

 
 ---------------------------------------------------

 


 CHORUS repeat to end


 *******


 


 ENJOY..........`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/s/sylvan/386390.html"},{title:"Posthumous Silence",chords:`-----------------

 


 Song - Posthumous Silence


 

 
 ---------------------------

 


 Album - Posthumous Silence


 

 
 ---------------------------- 

 


 


 Guitar Solo


 


 01:58


 

 
 [------s--------s----------------------------------------------------------|
 [----10\\12-10-12\\13-12---s-------------------------------------------h-----|
 [--9--------------------9\\11-14--------s-------------------------9--11-12--|
 [--------------------------------12-10-\\14----p----------p-----------------|
 [-------------------------------------------14-12-14---14-12-14------------|
 [--------------------------------------------------------------------------|
 [------s--------s------|---s----------------------------------|
 [----10\\12-10-12\\13-12-|-13\\15-13-12----------s-------s-------|
 [--9-------------------|-------------11-12--12\\14---14\\16-12--|
 [----------------------|--------------------------------------|
 [----------------------|--------------------------------------|
 [----------------------|--------------------------------------|

 


 


 h h b p p


 

 
 [-------------h--h---12-14-15--15--|--15-14------14-12-----|
 [----h--h---12-14-15---------------|--------14---------12--|
 [--12-14-15------------------------|-----------------------|
 [----------------------------------|-----------------------|
 [----------------------------------|-----------------------|
 [----------------------------------|-----------------------|

 


 


 h h h h b


 

 
 [----s-------------------------|---h--h---12-14-15--12-14-15--17--17-15-14-|
 [--13\\15-13-12-----------------|-12-14-15----------------------------------|
 [--------------11-12--14-16-12-|-------------------------------------------|
 [------------------------------|-------------------------------------------|
 [------------------------------|-------------------------------------------|
 [------------------------------|-------------------------------------------|

 


 


 [b] [s] [s]  

 
 [----s------17--17-15-14------12-|--15\\19-17-19\\20-19--14-17-15-14------br-|
 [--15\\17-15--------------15-12---|----------------------------------15--15-|
 [--------------------------------|-----------------------------------------|
 [--------------------------------|-----------------------------------------|
 [--------------------------------|-----------------------------------------|
 [--------------------------------|-----------------------------------------|
 [-----------------|----s--------s------------|---s-------------------------|
 [---s-------------|--10\\12-10-12\\13-12-------|-13\\15-13-12---h------h------|
 [-11\\14-12-11--9--|--------------------11-12-|-------------11-12--12-14-11-|
 [-----------------|--------------------------|-----------------------------|
 [-----------------|--------------------------|-----------------------------|
 [-----------------|--------------------------|-----------------------------|

 


 


 vocals come back in, solos in between.


 03:05 03:15


 

 
 [-------------s----------|---br-----|--------------------------|
 [-----------13\\15-10-12--|--15--15--|----s---------------------|
 [-9-11-12----------------|----------|--12\\15-12-11---------h---|
 [------------------------|----------|--------------12----12-14-|
 [------------------------|----------|-----------------14-------|
 [------------------------|----------|--------------------------|

 


 


 03:26 b 03:35


 

 
 [----h---10----10--|----------------------------------|--------------------|
 [--10-12----12-----|----------------------------------|--------------------|
 [------------------|---h-p----------------------------|----14-11--12-14-16-|
 [------------------|--4-5-4------2---s--s-------------|-14-----------------|
 [------------------|--------5-2--2--2\\10\\9--10-12-14--|--------------------|
 [------------------|-------------0-----------------------------------------|

 


 


 br


 

 
 [---br-----|----------------------------s-------|-15-14-15-14------s----s--|
 [--15------|--------------------------13\\15-12--|-------------15-15\\17--\\--|
 [------14--|--12-11------------11-12------------|--------------------------|
 [----------|--------12---s--14------------------|--------------------------|
 [----------|-----------12\\14--------------------|--------------------------|
 [----------|------------------------------------|--------------------------|

 


 


 03:58


 

 
 [-----------------|-----------------|--------------|--------------|
 [----s------------|----s------------|----------s---|----h--p------|
 [--12\\14-12-11----|--12\\14-12-11----|--11-12-12\\14-|--11-12-11-9--|
 [--------------12-|--------------14-|--------------|--------------|
 [-----------------|-----------------|--------------|--------------|
 [-----------------|-----------------|--------------|--------------|
 [-----------------|-----------------|--------------|--------------|

 


 


 [s] [s] [b]  

 
 [----s--------s----------p---------------12-14\\15--15\\17--17--22---|
 [--10\\12-10-12\\13-12---12-10-12--10-12-----------------------------|
 [------------------------------------------------------------------|
 [------------------------------------------------------------------|
 [------------------------------------------------------------------|
 [------------------------------------------------------------------|`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/sylvan/posthumous_silence_tab.html"}]},{name:"Terror Australis (2010)",songs:[{title:"Dirty Windscreens",chords:`Intro is the same as the chorus.


 


 [G]The record keeps skipping through dirty windscreens


 [Am]And it's one never ending c[C]liche highway scene


 and the [G]visit's too s[F/G]hort and the jo[Em]urneys too long


 [C]It feels like we're trapped in some d[D]amn burnouts song


 [C]But no tool belts or steel caps just drums and guitars


 [D]And we don't work in mines we just sing songs in bars


 


 


 Chorus:


 [C]It's a broken down dream but we [D]call it a life


 Like a c[G]ircus per[F/G]former who s[Em]wallows the knife


 [C]Just to spit out the handle and choke on the blood


 It's a [D]broken a broken down dream but we pray it's enough


 


 


 [G]I'd give the devil my soul for a good show tonight


 [Am]Just a glimpse just a sign I'm not w[C]asting my life


 Give me he[G]llfire et[F/G]ernal when I'm d[Em]one with this earth


 [C]And Satan one more thing please l[D]et them buy merch


 [C]Cause the van is sure thirsty we've got a long way to drive


 [D]And we better get going or we won't make it on time


 


 Chorus:


 [C]It's a broken down dream but we [D]call it a life


 Like a c[G]ircus per[F/G]former who s[Em]wallows the knife


 [C]Just to spit out the handle and choke on the blood


 It's a [D]broken a broken down dream but we pray it's enough


 


 C D x4


 


 [Am]And the stranded bored and stagnant they point to their chains


 [C]And in hushed tortured voices ask how dare we complain


 [Am]They think the damnationon it comes standing still


 [C]But we know all too well it's this distance that kills


 [Am]All the flowers and crosses that haunt these roadsides


 [C]And we swear sometimes it's like s[D]wallowing knives


 


 


 Chorus:


 [C]It's a broken down dream but we [D]call it a life


 Like a c[G]ircus per[F/G]former who s[Em]wallows the knife


 [C]Just to spit out the handle and choke on the blood


 It's a [D]broken a broken down dream but we pray it's enough


 


 http://www.myspace.com/sydneycitytrash`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/s/sydney-city-trash/225549.html"}]},{name:"Unfinished Business (2016)",songs:[{title:"Famous",chords:`[Intro] 


 [A] [F#m] [D] [E]  


 [Verse 1] 


 [A] I really believe in love[F#m]


 I really believe in love that won'[D]t die


 But no matter how hard I [E]try


 I just can't make you real[A]ize


 I've been here all al[F#m]one


 When it comes to me and you, no spotlight on[D]


 Cause you always think that you can do [E]better, better, better


 


 [Cborus] 


 But will you [A]call [C#m]me when I'm [F#m]famous?


 When I'm [D]famous


 Would you call my [E]name?


 Will you [A]call [C#m]me when I'm [F#m]famous?


 When I'm [D]famous


 Would you call my [E]name?


 When I'm fam[A]ous


 


 [Verse 2] 


 What's a man gotta [C#m]do to make you [F#m]happy?


 Is it all about the fortune and [D]fame?


 Would you care if they scream my [E]name?


 If they did I would still feel the [A]same


 I've been here all al[F#m]one


 When it comes to me and you, no spotlight on[D]


 Cause you always think that you can do [E]better, better, better


 


 [Cborus] 


 But will you [A]call [C#m]me when I'm [F#m]famous?


 When I'm [D]famous


 Would you call my [E]name?


 Will you [A]call [C#m]me when I'm [F#m]famous?


 When I'm [D]famous


 Would you call my [E]name?


 


 [Bridge] 


 [D] If I told you honestly


 [Bm] Honestly, I don't believe


 [C#m] You would take the diamond rings


 [F#] Things that only fade overn[D]ight


 I would rather you and me[Bm]


 Living on another dream[C#m]


 Make it a reality, and h[C#m]opefully


 


 You won't only [A]call [C#m]me when I'm [F#m]famous baby


 When I'm [D]famous


 Would you call my [E]name?


 Will you [A]call me[C#m] when I'm [F#m]famous, baby?


 Oh, when I'm [D]famous


 Will you call my [E]name?


 Now, [A]will [A]you [A]call [C#m]me?


 [F#m]Will [F#m]you [F#m]call [C#m]me?


 Now [D]will [D]you [D]call?


 You'll [D]call my [E]name


 [A]Will [A]you [A]call [C#m]me?


 [F#m]Will [F#m]you [F#m]call [C#m]me?


 [D]Will [D]you [D]call?


 You'll [D]call my [E]name


 


 [Outro] 


 [A] Cause I really believe in love


 [F#m] I really believe in love that won't [D]die


 And it can only get [E]better, better, better


 When I'm [A]famous`,url:"https://www.chordie.com/chord.pere/www.azchords.com/n/nathansykes-tabs-56618/famous-tabs-886163.html"},{title:"Kiss Me Quick",chords:`[Gmaj7]  


 Baby I've been searching


 [Gmaj7] Searching through these crowds


 [A]To maybe find someone who knows what I'm about


 All these[F#m7] excuses, too young to settle down[Am7-D-Gmaj7]


 [Gmaj7] So it's crazy what you g[A]ot me doing now


 Hold up [F#m7]baby[Am7-D-Gmaj7]


 [Gmaj7] You know you drive me crazy


 And [F#m7]I want everybody to know


 [Bbmaj7] [D11] [Gmaj7]  


 I'm down


 Nobo[Gmaj7]dy's looking right now


 Ain't no time for messi[F#m7]ng around


 But it won't take a minute[Bm7]


 


 Baby come kiss me quick


 [B]Let's act [Bsus2-B]out feelin[Gmaj7]g right here


 Make this unforgettable yeah[F#m7]


 Baby come kiss [Bm7]me quick


 [B] [Bsus2-B] [Gmaj7]  


 No we don't know what tomorrow's gonna bring


 [Gmaj7] So don't put the pause o[A]n giving everything


 You got m[F#m7]e hooked on your PDA[Am7-D-Gmaj7]


 [Gmaj7] Wait a minute, wait a minut[A]e


 [F#m7] Before you go away, baby


 [Am7-D-Gmaj7]  


 Hold up baby


 [Gmaj7] You know you drive me crazy


 And [F#m7]I want everybody to know


 [Bbmaj7] [D11] [Gmaj7]  


 I'm down


 Nobo[Gmaj7]dy's looking right now


 Ain't no time for messi[F#m7]ng around


 But it won't take a minute[Bm7]


 


 Baby come kiss me quick


 [B]Let's act [Bsus2-B]out feeling[Gmaj7] right here


 Make this unforgettable yeah[F#m7]


 Baby come kiss [Bm7]me quick


 [B] [Bsus2-B] [Gmaj7]  


 


 Kiss me quick baby


 Kiss me quick baby


 [F#m7] Kiss me quick baby


 [Bm7] Baby come kiss me quick


 [B] [Bsus2-B] [Gmaj7]  


 put your lips right here


 Then your body will follow


 [F#m7] Put your hands on my face


 [Am7] Don't worry about tomorrow


 [D11] Make sure you're feel[D11-D]ing that magic


 [Gmaj7] Before you disappear


 [F#m7] You got me baby


 [Bm7] You got me baby uhhhh


 I'm down[Gmaj7]


 Nobo[Gmaj7]dy's looking right now


 Ain't no time for messi[F#m7]ng around


 But it won't take a minute[Bm7]


 


 Baby come kiss me quick


 [B]Let's act [Bsus2-B]out feeling[Gmaj7] right here


 Make this unforgettable yeah[F#m7]


 Baby come kiss [Bm7]me quick


 [B] [Bsus2-B] [Gmaj7]  


 


 Kiss me quick baby


 Kiss me quick baby


 [F#m7] Kiss me quick baby


 [Bm7] Baby come kiss me quick


 [B] [Bsus2-B] [Gmaj7]`,url:"https://www.chordie.com/chord.pere/www.azchords.com/n/nathansykes-tabs-56618/kissmequick1-tabs-869571.html"}]},{name:"Semua Karena Cinta (2012)",songs:[{title:"Kau Yang Memilih Aku",chords:`(Intro) G# D# G# A# Cm


 


 cin[Cm]ta tak pernah se[Fm]sakit ini


 cin[A#]ta tak pernah sepe[D#]rih i[G]ni


 yang a[Fm]ku min[G]ta tulus [Cm]ha-[A#]-ti[G#]mu[Gm]


 bu[C#]kan kau curangi [G]aku


 


 ra[Cm]sa yang ada di da[Fm]lam hati


 tan[A#]gis yang ada saat [D#]ku sendi[G]ri


 ini[Fm]lah ak[G]hir kisah [Cm]cin[A#]-ta[G#]ku[Gm]


 kisah [C#]bersama[G]mu


 


 (Chorus)


 kau yang telah [Fm]memilih a[A#]ku


 kau juga yang [G]sakiti a[Cm]ku


 [A#]kau putar [G#]cerita se[A#]hingga aku [D#]yang salah


 kau selalu perma[Fm]inkan wani[A#]ta


 kau ciptakan la[G]gu tentang cin[Cm]ta


 [A#]hingga semu[G#]a tahu kau [A#]makhluk sempur[Cm]na


 


 mung[Cm]kinkah semua mere[Fm]ka tahu


 sa[A#]at hatiku luluh [D#]kepada[G]mu


 kau per[Fm]gi de[G]ngan kisah [Cm]yang[A#] ba[G#]ru[Gm]


 dan ku sim[C#]pan di ketulusan ha[G]ti


 


 (Chorus)


 kau yang telah [Fm]memilih a[A#]ku


 kau juga yang [G]sakiti a[Cm]ku


 [A#]kau putar [G#]cerita se[A#]hingga aku [D#]yang salah


 kau selalu perma[Fm]inkan wani[A#]ta


 kau ciptakan la[G]gu tentang cin[Cm]ta


 [A#]hingga semu[G#]a tahu kau [A#]makhluk sempur[Cm]na


 


 hoo u[Fm]o.. u[A#]o.. ([G]kau yang memi[Cm]lih [A#]aku[G#])


 kau yang memi[F]lih a[A#]ku (kau yang memi[G]lih a[Cm]ku)[C#] [G]


 


 (Chorus)


 kau yang telah [Fm]memilih a[A#]ku


 kau juga yang [G]sakiti a[Cm]ku


 [A#]kau putar [G#]cerita se[A#]hingga aku [D#]yang salah


 kau selalu perma[Fm]inkan wani[A#]ta


 kau ciptakan la[G]gu tentang cin[Cm]ta


 [A#]hingga semu[G#]a tahu kau [A#]makhluk sempur[Cm]na


 


 kau yang telah [Fm]memilih a[A#]ku


 kau juga yang [G]sakiti a[Cm]ku


 [A#]kau putar [G#]cerita se[A#]hingga aku [D#]yang salah


 kau selalu perma[Fm]inkan wani[A#]ta


 kau ciptakan la[G]gu tentang cin[Cm]ta


 [A#]hingga semu[G#]a tahu kau [A#]makhluk semp[Cm]urna`,url:"https://www.chordie.com/chord.pere/www.azchords.com/s/syahrini-tabs-56463/kauyangmemilihaku1-tabs-825239.html"},{title:"Sesuatu",chords:`(Intro) Am Em Dm


 


 [Am] kau melihatku sampai terdengar bunyi


 [E/G#]dagdigdug dagdigdug detak jantungku


 [Dm] kau rayu aku[E] sampai aku jadi ma[Am]lu[Dm] [E]


 


 [Am] kau sentuh aku sampai ke mata tubuh


 [E/G#]dari rambut sampai di ujung kaki


 [Dm] aku terpaku[E] merasakan sesua[Am]tu


 


 [F] peluklah aku[Dm] di pelukanmu


 [F] agar aku rin[E]du


 [F] sentuhan itu[Dm] membuat diriku


 [F] membayangkan sesua[E]tu


 


 [Am] sesuatu yang ada di hatiku


 [Em] sesuatu[Dm] yang ada di hatimu


 [Am] sesuatu yang ada di benakku


 [Em] sesuatu ju[Dm]ga ada dalam benak[F]mu[E]


 


 (Intro) Am Dm Am Dm


 


 [Am] kau sentuh aku sampai ke mata tubuh


 [E/G#]dari rambut sampai di ujung kaki


 [Dm] aku terpaku[E] merasakan sesua[F]tu o[E]oh


 


 (Interlude) Am Dm Am E


 [Am] [Dm] [F] [E]  


 [F] peluklah aku[Dm] di pelukanmu


 [F] agar aku rin[E]du


 [F] sentuhan itu[Dm] membuat diriku


 [F] membayangkan sesua[E]tu


 


 [Am] sesuatu yang ada di hatiku


 [Em] sesuatu[Dm] yang ada di hatimu


 [Am] sesuatu yang ada di benakku


 [Em] sesuatu ju[Dm]ga ada dalam benakmu


 


 [Am] sesuatu yang ada di hatiku


 [Em] sesuatu[Dm] yang ada di hatimu


 [Am] sesuatu yang ada di benakku


 [Em] sesuatu ju[Dm]ga ada dalam benakmu


 


 [Am] sesuatu yang ada di hatiku


 [Em] sesuatu[Dm] yang ada di hatimu


 [Am] sesuatu yang ada di benakku


 [Em] sesuatu ju[Dm]ga ada dalam benak[F]mu[E]


 


 (Coda) Am Dm Am Dm


 [Am] [Dm] [Am] [Dm] [Am]`,url:"https://www.chordie.com/chord.pere/www.azchords.com/s/syahrini-tabs-56463/sesuatu1-tabs-825237.html"}]},{name:"20th Century (1997)",songs:[{title:"Cautionary Warning",chords:`e)---|--------------------------------------------------------------|
 B)---|--------------------------------------------------------------|
 G)---|--------------------------------------------------------------|
 D)---|--------------------------------------------------------------|
 A)---|----77-1010-77---------1010-99-----77-1010-77---------1010-99-|
 D)-5-|-77------------77-1010----------77------------99-1010---------|
 e)--------------------------------------------------------------|
 B)--------------------------------------------------------------|
 G)--------------------------------------------------------------|
 D)--------------------------------------------------------------|
 A)----77-1010-77---------1010-99-----77-1010-77---------1010-99-|
 D)-77------------77-1010----------77------------99-1010---------|

 


 /\\


 / \\


 lead guitar pickslides G,B,e strings


 from bridge down to nut


 


 Chorus:


 Rhythm:


 

 
 e)------------------------------------------------------------------------|
 B)------------------------------------------------------------------------|
 G)------------------------------------------------------7--777777777777---|
 D)-3--3333333333333--0--0000000000000--7--777777777777--7--777777777777---|
 A)-3--3333333333333--0--0000000000000--7--777777777777--5--555555555555---|
 D)-3--3333333333333--0--0000000000000--7--777777777777--------------------|

 


 ************* ************* ************ ************


 

 
 e)------------------------------------------------------------------------|
 B)------------------------------------------------------------------------|
 G)------------------------------------------------------7--777777777777---|
 D)-3--3333333333333--0--0000000000000--7--777777777777--7--777777777777---|
 A)-3--3333333333333--0--0000000000000--7--777777777777--5--555555555555---|
 D)-3--3333333333333--0--0000000000000--7--777777777777--------------------|

 


 ************* ************* ************ ************


 


 

 
 e)------------------------------------------|
 B)------------------------------------------|
 G)------------------------------------------|
 D)-0-2-3r--33333333333333-5r-55555555555555-|
 A)-0-2-3r--33333333333333-5r-55555555555555-|
 D)-0-2-3r--33333333333333-5r-55555555555555-|

 


 ************** **************


 Interlude(same as intro)


 Rhythm:


 

 
 e)------------------------------------------------------------------|
 B)------------------------------------------------------------------|
 G)------------------------------------------------------------------|
 D)------------------------------------------------------------------|
 A)----77-1010-77---------1010-99-----77-1010-77---------1010-99-----|
 D)-77------------77-1010----------77------------99-1010-------------|

 


 [/] 


 [/]  

 
 lead: e)------------| preferably pinch
 B)------------| (or forced) harmonics

 


 G)-(9)v--(7)v-|


 

 
 D)------------|
 A)------------|
 E)------------|

 


 


 Verse:


 

 
 e)---------------------------------------------------------------------|
 B)---------------------------------------------------------------------|
 G)---------------------------------------------------------------------|
 D)-7-77777777777-7-7-9-99999999999-9-9-10-1010101010101010101010-10-10-|
 A)-7-77777777777-7-7-9-99999999999-9-9-10-1010101010101010101010-10-10-|
 D)-7-77777777777-7-7-9-99999999999-9-9-10-1010101010101010101010-10-10-|

 


 *********** * * *********** * * * * * * * * * * * * * * *


 

 
 e)-------------------------------------------------------------|
 B)-------------------------------------------------------------|
 G)-11--11-11-11-11-11-11--10-----------------------------------|
 D)-11--11-11-11-11-11-11--10-----------------------------------|
 A)--9---9--9--9--9--9--9---8-----------------------------------|
 D)-------------------------------------------------------------|

 


 * * * * * *


 


 

 
 e)---------------------------------------------------------------------|
 B)---------------------------------------------------------------------|
 G)---------------------------------------------------------------------|
 D)-7-77777777777-7-7-9-99999999999-9-9-10-1010101010101010101010-10-10-|
 A)-7-77777777777-7-7-9-99999999999-9-9-10-1010101010101010101010-10-10-|
 D)-7-77777777777-7-7-9-99999999999-9-9-10-1010101010101010101010-10-10-|

 


 *********** * * *********** * * * * * * * * * * * * * * *


 

 
 e)-------------------------------------------------------------|
 B)-------------------------------------------------------------|
 G)-11--11-11-11-11-11-11--10-----------------------------------|
 D)-11--11-11-11-11-11-11--10-----------------------------------|
 A)--9---9--9--9--9--9--9---8-----------------------------------|
 D)-------------------------------------------------------------|

 


 * * * * * *


 


 lead guitar pickslides G,B,e from bridge to nut


 


 Chorus:


 Rhythm:


 

 
 e)------------------------------------------------------------------------|
 B)------------------------------------------------------------------------|
 G)------------------------------------------------------7--777777777777---|
 D)-3--3333333333333--0--0000000000000--7--777777777777--7--777777777777---|
 A)-3--3333333333333--0--0000000000000--7--777777777777--5--555555555555---|
 D)-3--3333333333333--0--0000000000000--7--777777777777--------------------|

 


 ************* ************* ************ ************


 

 
 e)------------------------------------------------------------------------|
 B)------------------------------------------------------------------------|
 G)------------------------------------------------------7--777777777777---|
 D)-3--3333333333333--0--0000000000000--7--777777777777--7--777777777777---|
 A)-3--3333333333333--0--0000000000000--7--777777777777--5--555555555555---|
 D)-3--3333333333333--0--0000000000000--7--777777777777--------------------|

 


 ************* ************* ************ ************


 


 

 
 e)-----------------|
 B)-----------------|
 G)-----------------|
 D)-0-2-3r---333-5r-|
 A)-0-2-3r---333-5r-|
 D)-0-2-3r---333-5r-|

 


 ***


 


 Solo: Will post when I get it. I'm not very good with scales and solos, so it will take


 friend a while to figure it out. But you're probably better off making up your own solo


 Just improvise over F harmonic minor. Its sounds cool.


 


 Chorus:


 


 Rhythm:


 

 
 e)------------------------------------------------------------------------|
 B)------------------------------------------------------------------------|
 G)------------------------------------------------------7--777777777777---|
 D)-3--3333333333333--0--0000000000000--7--777777777777--7--777777777777---|
 A)-3--3333333333333--0--0000000000000--7--777777777777--5--555555555555---|
 D)-3--3333333333333--0--0000000000000--7--777777777777--------------------|

 


 ************* ************* ************ ************


 

 
 e)------------------------------------------------------------------------|
 B)------------------------------------------------------------------------|
 G)------------------------------------------------------7--777777777777---|
 D)-3--3333333333333--0--0000000000000--7--777777777777--7--777777777777---|
 A)-3--3333333333333--0--0000000000000--7--777777777777--5--555555555555---|
 D)-3--3333333333333--0--0000000000000--7--777777777777--------------------|

 


 ************* ************* ************ ************


 


 

 
 e)------------------------------------------|
 B)------------------------------------------|
 G)------------------------------------------|
 D)-0-2-3r--33333333333333-5r-55555555555555-|
 A)-0-2-3r--33333333333333-5r-55555555555555-|
 D)-0-2-3r--33333333333333-5r-55555555555555-|

 


 ************** **************


 


 Interlude(same as intro)


 Rhythm:


 

 
 e)------------------------------------------------------------------|
 B)------------------------------------------------------------------|
 G)------------------------------------------------------------------|
 D)------------------------------------------------------------------|
 A)----77-1010-77---------1010-99-----77-1010-77---------1010-99-----|
 D)-77------------77-1010----------77------------99-1010-------------|

 


 [/] 


 [/]  

 
 lead: e)------------|
 B)------------|

 


 G)-(9)v--(7)v-|


 

 
 D)------------|
 A)------------|
 E)------------|

 


 


 Verse:


 Rhythm:


 

 
 e)---------------------------------------------------------------------|
 B)---------------------------------------------------------------------|
 G)---------------------------------------------------------------------|
 D)-7-77777777777-7-7-9-99999999999-9-9-10-1010101010101010101010-10-10-|
 A)-7-77777777777-7-7-9-99999999999-9-9-10-1010101010101010101010-10-10-|
 D)-7-77777777777-7-7-9-99999999999-9-9-10-1010101010101010101010-10-10-|

 


 *********** * * *********** * * * * * * * * * * * * * * *


 

 
 e)-------------------------------------------------------------|
 B)-------------------------------------------------------------|
 G)-11--11-11-11-11-11-11--10-----------------------------------|
 D)-11--11-11-11-11-11-11--10-----------------------------------|
 A)--9---9--9--9--9--9--9---8-----------------------------------|
 D)-------------------------------------------------------------|

 


 * * * * * *


 


 

 
 e)---------------------------------------------------------------------|
 B)---------------------------------------------------------------------|
 G)---------------------------------------------------------------------|
 D)-7-77777777777-7-7-9-99999999999-9-9-10-1010101010101010101010-10-10-|
 A)-7-77777777777-7-7-9-99999999999-9-9-10-1010101010101010101010-10-10-|
 D)-7-77777777777-7-7-9-99999999999-9-9-10-1010101010101010101010-10-10-|

 


 *********** * * *********** * * * * * * * * * * * * * * *


 

 
 e)-------------------------------------------------------------|
 B)-------------------------------------------------------------|
 G)-11--11-11-11-11-11-11--10-----------------------------------|
 D)-11--11-11-11-11-11-11--10-----------------------------------|
 A)--9---9--9--9--9--9--9---8-----------------------------------|
 D)-------------------------------------------------------------|

 


 * * * * * *


 


 lead guitar pickslides G,B,e from bridge to nut


 


 Chorus:


 Rhythm:


 

 
 e)------------------------------------------------------------------------|
 B)------------------------------------------------------------------------|
 G)------------------------------------------------------7--777777777777---|
 D)-3--3333333333333--0--0000000000000--7--777777777777--7--777777777777---|
 A)-3--3333333333333--0--0000000000000--7--777777777777--5--555555555555---|
 D)-3--3333333333333--0--0000000000000--7--777777777777--------------------|

 


 ************* ************* ************ ************


 

 
 e)------------------------------------------------------------------------|
 B)------------------------------------------------------------------------|
 G)------------------------------------------------------7--777777777777---|
 D)-3--3333333333333--0--0000000000000--7--777777777777--7--777777777777---|
 A)-3--3333333333333--0--0000000000000--7--777777777777--5--555555555555---|
 D)-3--3333333333333--0--0000000000000--7--777777777777--------------------|

 


 ************* ************* ************ ************


 


 

 
 e)------------------------------------------|
 B)------------------------------------------|
 G)------------------------------------------|
 D)-0-2-3r--33333333333333-5r-55555555555555-|
 A)-0-2-3r--33333333333333-5r-55555555555555-|
 D)-0-2-3r--33333333333333-5r-55555555555555-|

 


 ************** **************


 


 Outro(chorus):


 Rhythm:


 

 
 e)------------------------------------------------------------------------|
 B)------------------------------------------------------------------------|
 G)------------------------------------------------------7--777777777777---|
 D)-3--3333333333333--0--0000000000000--7--777777777777--7--777777777777---|
 A)-3--3333333333333--0--0000000000000--7--777777777777--5--555555555555---|
 D)-3--3333333333333--0--0000000000000--7--777777777777--------------------|

 


 ************* ************* ************ ************


 

 
 e)------------------------------------------------------------------------|
 B)------------------------------------------------------------------------|
 G)------------------------------------------------------7--777777777777---|
 D)-3--3333333333333--0--0000000000000--7--777777777777--7--777777777777---|
 A)-3--3333333333333--0--0000000000000--7--777777777777--5--555555555555---|
 D)-3--3333333333333--0--0000000000000--7--777777777777--------------------|

 


 ************* ************* ************ ************


 


 Rhythm:


 

 
 e)-----------------------------------------------------------------------|
 B)-----------------------------------------------------------------------|
 G)------------------------------------------------------7-77777--9-999999|
 D)-3--3333333333333--0--0000000000000--7--777777777777--7-77777--9-999999|
 A)-3--3333333333333--0--0000000000000--7--777777777777--5-55555--7-777777|
 D)-3--3333333333333--0--0000000000000--7--777777777777-------------------|

 


 ************* ************* ************


 

 
 e)-----------------------------------------------------------------------|
 B)-----------------------------------------------------------------------|
 G)------------------------------------------------------7-777777-9-999999|
 D)-3--3333333333333--0--0000000000000--7--777777777777--7-777777-9-999999|
 A)-3--3333333333333--0--0000000000000--7--777777777777--5-555555-7-777777|
 D)-3--3333333333333--0--0000000000000--7--777777777777-------------------|

 


 ************* ************* ***********


 Rhythm:


 

 
 e)-----------------------------------------------------------------------|
 B)-----------------------------------------------------------------------|
 G)------------------------------------------------------7-77777--9-999999|
 D)-3--3333333333333--0--0000000000000--7--777777777777--7-77777--9-999999|
 A)-3--3333333333333--0--0000000000000--7--777777777777--5-55555--7-777777|
 D)-3--3333333333333--0--0000000000000--7--777777777777-------------------|

 


 ************* ************* ************


 

 
 e)-----------------------------------------------------------------------|
 B)-----------------------------------------------------------------------|
 G)------------------------------------------------------7-777777-9-999999|
 D)-3--3333333333333--0--0000000000000--7--777777777777--7-777777-9-999999|
 A)-3--3333333333333--0--0000000000000--7--777777777777--5-555555-7-777777|
 D)-3--3333333333333--0--0000000000000--7--777777777777-------------------|

 


 ************* ************* ***********


 Fade Out.


 


 Note:


 Here is a cool ending(have lead guitar solo over the whole outro and ending).


 


 Outro(chorus):


 Rhythm:


 

 
 e)------------------------------------------------------------------------|
 B)------------------------------------------------------------------------|
 G)------------------------------------------------------7--777777777777---|
 D)-3--3333333333333--0--0000000000000--7--777777777777--7--777777777777---|
 A)-3--3333333333333--0--0000000000000--7--777777777777--5--555555555555---|
 D)-3--3333333333333--0--0000000000000--7--777777777777--------------------|

 


 ************* ************* ************ ************


 

 
 e)-----------------------------------------------------------------------|
 B)-----------------------------------------------------------------------|
 G)------------------------------------------------------7-777777-9-999999|
 D)-3--3333333333333--0--0000000000000--7--777777777777--7-777777-9-999999|
 A)-3--3333333333333--0--0000000000000--7--777777777777--5-555555-7-777777|
 D)-3--3333333333333--0--0000000000000--7--777777777777-------------------|

 


 ************* ************* ***********


 

 
 e)-----------------------------------------------------------------------|
 B)-----------------------------------------------------------------------|
 G)------------------------------------------------------7-77777--9-999999|
 D)-3--3333333333333--0--0000000000000--7--777777777777--7-77777--9-999999|
 A)-3--3333333333333--0--0000000000000--7--777777777777--5-55555--7-777777|
 D)-3--3333333333333--0--0000000000000--7--777777777777-------------------|

 


 ************* ************* ************


 

 
 e)-----------------------------------------------------------------------|
 B)-----------------------------------------------------------------------|
 G)------------------------------------------------------7-777777-9-999999|
 D)-3--3333333333333--0--0000000000000--7--777777777777--7-777777-9-999999|
 A)-3--3333333333333--0--0000000000000--7--777777777777--5-555555-7-777777|
 D)-3--3333333333333--0--0000000000000--7--777777777777-------------------|

 


 ************* ************* ***********


 

 
 e)-----------------------------------------------------------------------|
 B)-----------------------------------------------------------------------|
 G)------------------------------------------------------7-77777--9-999999|
 D)-3--3333333333333--0--0000000000000--7--777777777777--7-77777--9-999999|
 A)-3--3333333333333--0--0000000000000--7--777777777777--5-55555--7-777777|
 D)-3--3333333333333--0--0000000000000--7--777777777777-------------------|

 


 ************* ************* ************


 


 Rhythm:


 

 
 e)------------------------------------------------------------------|
 B)------------------------------------------------------------------|
 G)------------------------------------------------------------------|
 D)------------------------------------------------------------------|
 A)----77-1010-77---------1010-99-----77-1010-77---------1010-99-----|
 D)-77------------77-1010----------77------------99-1010-------------|
 e)------------------------------------------------------------------|
 B)------------------------------------------------------------------|
 G)------------------------------------------------------------------|
 D)--------------------------------------------------------------7\\--|
 A)----77-1010-77---------1010-99-----77-1010-77---------1010-99-7\\--|
 D)-77------------77-1010----------77------------99-1010---------7\\--|`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/j/john-sykes/78430.html"}]},{name:"Someday We Will Foresee Obstacles (2005)",songs:[{title:"To All of You",chords:`Intro:


 Part I (2x)


 Am7 (sometimes he plugs 2nd string on 1 fret but it's not really important)


 

 
 e|------------------------------------|
 B|------------------------------------|
 G|-0h4---0-----2------2p0---0-----0---|
 D|-----2-----2---2--------2-----2---2-|
 A|-0------------------0---------------|
 E|------------------------------------|

 


 


 Part II


 [C]  

 
 e|---------------------------------------------------------------------------|
 B|---------------------------------------------------------------------------|
 G|-0p4-----0----0-----2p0----0---0--------0h4----0---0----2p0----0----0------|
 D|--------2----2------------2----2--------------2---2-----------0----0-------|
 A|-3------------------3-------------------3----------------------------------|
 E|--------------------------------------------------------2------------------|

 


 


 Part III (2x)


 [G]  

 
 e|-------------------------------------|
 B|-------------------------------------|
 G|-0h4---0---0---2p0---0---0-----------|
 D|------0---0---------0---0------------|
 A|-------------------------------------|
 E|-3-------------3---------------------|

 


 


 Then Part I (2x), Part II and part III (2x)


 


 To al[G]l of you, American girls, it's s[Am7]ad to


 Imagine a world withou[G]t you


 American girls I'd li[Am7]ke to


 Be part of the world aro[G]und you


 Driving a car by the sea[Am7]side


 Watching the world from the bright sid[Em]e


 


 Then Part I (2x), Part II and Part III (2x)


 


 To al[G]l of you, American girls in the movi[Am7]es


 No one can tell where your he[G]art is


 American girls like doll[Am7]ies


 With shiniest smiles and plastic bo[Em]dies


 I wish I had[Am7] an Amer[C]ican gir[G]lfriend


 


 Part I (2x)


 [Am7]  

 
 e|------------------------------------|
 B|------------------------------------|
 G|-0h4---0-----2------2p0---0-----0---|
 D|-----2-----2---2--------2-----2---2-|
 A|-0------------------0---------------|
 E|------------------------------------|

 


 


 Part II


 [C]  

 
 e|---------------------------------------------------------------------------|
 B|---------------------------------------------------------------------------|
 G|-0p4-----0----0-----2p0----0----0-------0h4----0---0----2p0----0----0------|
 D|--------2----2------------2----2--------------2---2-----------0----0-------|
 A|-3------------------3-------------------3----------------------------------|
 E|--------------------------------------------------------2------------------|

 


 


 Part III (2x)


 [G]  

 
 e|-------------------------------------|
 B|-------------------------------------|
 G|-0h4---0---0---2p0---0---0-----------|
 D|------0---0---------0---0------------|
 A|-------------------------------------|
 E|-3-------------3---------------------|

 


 


 Then Part I(2x), Part II


 


 


 I c[G]ry sometimes walking around my own pl[Am7]ace


 Wondering why she cries sometim[G]es


 Talking about her own pla[Am7]ce


 Somewhere around the mount[G]ains


 No one could dry her founta[Am7]in


 Till she got tired to compla[Em]in


 That's when I f[Am7]ly to the w[C]ildland, to y[G]our land`,url:"https://www.chordie.com/chord.pere/www.azchords.com/s/sydmatters-tabs-54834/toallofyou-tabs-832771.html"},{title:"Obstacles",chords:`Am:


 

 
 e|---------0-----------0-----------|
 B|-----1-------1---3p1---3---3---3-|
 G|---2---2---2---2-------------2---|
 D|-2-------------------------------|
 A|---------------------------------|
 E|---------------------------------|

 


 


 [C]  

 
 e|---------0-----------0-----------|
 B|-----1-------1---3p1---3---3---3-|
 G|---0---0---0---0-------------0---|
 D|-2-------------------------------|
 A|---------------------------------|
 E|---------------------------------|

 


 


 [Dm]  

 
 e|---------1-----------0-----------|
 B|-----3-------3---3p1---3---3---3-|
 G|---2---2---2---2-------------2---|
 D|-0-------------------------------|
 A|---------------------------------|
 E|---------------------------------|

 


 


 Or


 


 [Am]  

 
 e|---------0-------|
 B|-----1-------1---|
 G|---2---2---2---2-| x2
 D|-2---------------|
 A|-----------------|
 E|-----------------|

 


 


 [C]  

 
 e|---------0-------|
 B|-----1-------1---|
 G|---0---0---0---0-| x2
 D|-2---------------|
 A|-----------------|
 E|-----------------|

 


 


 [Dm]  

 
 e|---------1-------|
 B|-----3-------3---|
 G|---2---2---2---2-| x2
 D|-0---------------|
 A|-----------------|
 E|-----------------|

 


 


 ************************************


 | p pull-off


 ************************************


 


 Intro:


 [Am] [C] [Am] [C] [Am] [C] [Am] [C]  


 [Am]Lets say sunshine for [C]everyone


 But as far as [Am]I can remember[C]


 [Am]We've been migratory [C]animals


 Living under[Am] changing weather[C]


 [Am]Some day we will foresee [C]obstacles


 Through the blizzard[Am], through the blizzard[C]


 [Am]Today we will sell our [C]uniform


 Live together[Am], live together[C]


 


 [Am]Blizzard blizzard blizzard blizzard [C]blizzard blizzard blizzard blizzard


 [Am]Blizzard blizzard blizzard blizzard [C]blizzard blizzard blizzard blizzard


 


 [C]We played hide and seek in [Am]waterfalls


 We were younger[Dm], we were younger[Am]


 [C]We played hide and seek in [Am]waterfalls


 We were younger[Dm], we were younger[Am]


 [C]We played hide and seek in [Am]waterfalls


 We were younger[Dm], we were younger[Am]


 [C]We played hide and seek in [Am]waterfalls


 We were younger[Dm], we were younger[Am]


 


 [Am]Some day we will foresee [C]obstacles


 Through the blizzard,[Am] through the blizzard[C]


 


 (Strum the last C once)`,url:"https://www.chordie.com/chord.pere/www.azchords.com/s/sydmatters-tabs-54834/obstacles-tabs-869365.html"}]},{name:"Sylvan Esso (2014)",songs:[{title:"Hey Mami",chords:`Hey mami, I know[D] what you want, mami[Bm]


 [D]Hey mami, I know what you [Bm]want, mami


 [D]Hey mami, I know what you [Bm]want, mami


 [D]Hey mami, I know what you [Bm]want, mami


 


 She walking so [D]fast, she walking so fast,[Bm] she walking so fast


 [D]Oh our lady she don't [Bm]know how she go


 She [D]walking so fast, she walking so [Bm]fast, she walk like a [D]babe, hey


 Her [Bm]image it lasts and I [D]know,


 She floats along as she [Bm]goes


 She owns the eyes as she [D]flies right through the sound


 [Bm]Moving her body all around [D]town


 Hey, hey mami[Bm], hey, hey mami


 I [D]know what you want, I know what you [Bm]want, I know what you want


 


 [D]Sooner or later the dudes at bodegas will [Bm]hold their lips and own this sh*t


 [D]Curlin their toes on a [Bm]shivery tip


 But out [D]here oh she don't know the [Bm]gravity she owns


 As she [D]pulls on the eyeballs of [Bm]all the kids standing tall


 


 [D]Hey mami, I know what you [Bm]want, mami


 [D]Hey mami, I know what you [Bm]want, mami


 [D]Hey mami, I know what you [Bm]want, mami


 [D]Hey mami, I know what you [Bm]want, mami


 


 She walking so [D]fast, she walking so fast[Bm], she walking so fast


 [D]Oh our lady she don't [Bm]know how she go


 She [D]walking so fast, she walking so [Bm]fast, she walk like a [D]babe, hey


 [Bm]Look at that ass and I [D]know


 She floats along as she [Bm]goes


 She owns the eyes as she [D]flies right through the sound


 [Bm]Moving her body all around [D]town


 Hey, hey mami[Bm], hey, hey mami


 I [D]know what you want, I know what you [Bm]want, I know what you want


 


 [D]Sooner or later the dudes at bodegas will [Bm]hold their lips and own this sh*t


 [D]Curlin their toes on a [Bm]shivery tip


 But out [D]here oh she don't know the [Bm]gravity she owns


 As she [D]pulls on the eyeballs of [Bm]all the kids standing tall


 


 [D]Hey mami, I know what you [Bm]want, mami


 [D]Hey mami, I know what you [Bm]want, mami


 [D]Hey mami, I know what you [Bm]want, mami


 [D]Hey mami, I know what you [Bm]want, mami


 


 [D]Hey mami, I know what you [Bm]want, mami


 [D]Hey mami, I know what you [Bm]want, mami


 [D]Hey mami, I know what you [Bm]want, mami


 [D]Hey mami, I know what you [Bm]want, I know what you want


 


 [D] I know what you want,[D] I know what you want


 [D] I know what you want,[D] I know what you want


 [Bm] I know what you want,[Bm] I know what you want


 [Bm] I know what you want,[Bm] I know what you want [D]`,url:"https://www.chordie.com/chord.pere/www.azchords.com/s/sylvanesso-tabs-54635/heymami-tabs-813975.html"},{title:"Wolf",chords:`The modern wolf, he's kinder[E] [B] [C#m]


 But saying [E]we, it's a rem[B]in[C#m]der


 Don't wear no [E]suits, we're talking [B]t-[C#m]shirts


 See how he l[E]ies, makes women s[B]hi[C#m]ver


 


 A[E]ho[F#m]oooo[C#m]oooo[A]o, A[E]ho[F#m]oooo[C#m]oooo[A]o


 


 He ain't no dr[E]ag, his voice is sm[B]oo[C#m]ther


 Been bending n[E]otes, just like his f[B]at[C#m]her


 


 A[E]ho[F#m]oooo[C#m]oooo[A]o, A[E]ho[F#m]oooo[C#m]oooo[A]o


 


 But no b[A]irds nor beast does he eat


 He only w[C#m]ants the tenderest m[B]eat


 And all the s[A]ounds he makes em speak


 Under [C#m]all different patt[B]erns of sheets


 Colors bl[A]ind, oh, dopamine


 And she l[C#m]ooked so good when th[B]ey were last seen


 


 A[E]ho[F#m]oooo[C#m]oooo[A]o, A[E]ho[F#m]oooo[C#m]oooo[A]o


 


 The modern w[A]olf, the modern [C#m]wolf


 Drippin' in [E]all the lies that he t[B]ook


 He's going h[A]ome, try to wash them [C#m]off


 But when he sh[B]aves, he hears them call


 


 A[E]ho[F#m]oooo[C#m]oooo[A]o, A[E]ho[F#m]oooo[C#m]oooo[A]o`,url:"https://www.chordie.com/chord.pere/www.azchords.com/s/sylvanesso-tabs-54635/wolf1-tabs-857680.html"}]},{name:"System of a Down (1998)",songs:[{title:"Sugar",chords:`Tabbed by DiscipleOfKoRn


 Email me at ZacHarford@yahoo.com


 


 Tuned down to


 [F]  


 [C]  


 [G]  


 [C]  


 Chorus:


 

 
 |-----------------------------------------|
 |-----------------------------------------|
 |-----------------------------------------|
 |-0765-0765-0765-0765-0765-0765-0765-0765-|
 |-----------------------------------------|
 |-----------------------------------------|
 |-----------------------------------------|
 |-0765-0765-0765-0765-0765-0765-0765-0765-|

 


 


 Interlude


 


 

 
 |-----------------------------------------|
 |-----------------------------------------|
 |-----------------------------------------|
 |-0765-0765-0765-0765-0765-0765-0765-0765-|
 |-----------------------------------------|
 |-----------------------------------------|
 |-----------------------------------------|
 |-0765-0765-0765-0765-0765-0765-0765-0765-|

 


 


 Verse:


 


 

 
 |-----------------------------------------|
 |-----------------------------------------|
 |-----------------------------------------|
 |-0765-0765-0765-0765-0765-0765-0765-0765-|
 |-----------------------------------------|
 |-----------------------------------------|
 |-----------------------------------------|
 |-0765-0765-0765-0765-0765-0765-0765-0765-|
 |-----------------------------------------|
 |-----------------------------------------|
 |-----------------------------------------|
 |-0765-0765-0765-0765-0765-0765-0765-0765-|

 


 


 Chorus:


 


 

 
 |-----------------------------------------|
 |-----------------------------------------|
 |-----------------------------------------|
 |-0765-0765-0765-0765-0765-0765-0765-0765-|

 


 ( Tab from: http://www.guitartabs.cc/tabs/s/system_of_a_down/sugar_btab_ver_6.html )


 

 
 |-----------------------------------------|
 |-----------------------------------------|
 |-----------------------------------------|
 |-0765-0765-0765-0765-0765-0765-0765-0765-|

 


 


 Interlude:


 


 

 
 |----------------------|
 |----------------------|
 |----------------------|

 


 |-0765-0765-0765-07665-|


 


 Verse:


 


 

 
 |-----------------------------------------|
 |-----------------------------------------|
 |-----------------------------------------|
 |-0765-0765-0765-0765-0765-0765-0765-0765-|
 |-----------------------------------------|
 |-----------------------------------------|
 |-----------------------------------------|
 |-0765-0765-0765-0765-0765-0765-0765-0765-|
 |-----------------------------------------|
 |-----------------------------------------|
 |-----------------------------------------|
 |-0765-0765-0765-0765-0765-0765-0765-0765-|

 


 


 Chorus:


 

 
 |-----------------------------------------|
 |-----------------------------------------|
 |-----------------------------------------|
 |-0765-0765-0765-0765-0765-0765-0765-0765-|
 |-----------------------------------------|
 |-----------------------------------------|
 |-----------------------------------------|
 |-0765-0765-0765-0765-0765-0765-0765-0765-|

 


 


 Interlude:


 


 

 
 |---------------------|
 |---------------------|
 |---------------------|
 |-8-87-8-87-8-87-8-87-|

 


 


 Faster...


 6x


 

 
 |---------------------------------|
 |---------------------------------|
 |---------------------------------|
 |-8-8h77778-8h7777-8h77778-8h7777-|

 


 


 Outro:


 4x


 

 
 |-----------------------|
 |-----------------------|
 |-----------------------|
 |-0765-0765-0765-0765-0-|

 


 


 So bassically it's about the same for the whole song. Have fun!


 Go Shavo!`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/system_of_a_down/sugar_btab_ver_6.html"},{title:"Suggestions",chords:`Drop C:


 [C] [G] [C] [F] [A] [D]  


 Intro: x2


 


 Riff A: gtr. 1 (acoustic)


 


 

 
 d----------------------------------------------
 a-------0----------0----------0----------0-----
 f----16---16----16---16----16---16----16---16--
 c-14---------14---------14---------14----------
 g----------------------------------------------
 c----------------------------------------------

 


 


 gtr. 2 (dist.)


 


 

 
 d----------------------------------------------
 a-------0----------0----------0----------0-----
 f-----4----------4----------4----------4-------
 c----------------------------------------------
 g----------------------------------------------
 c----------------------------------------------

 


 


 Riff A cont.


 


 

 
 d----------------------------------------------
 a-------0----------0----------0----------0-----
 f----16---16----16---16----16---16----16---16--
 c-15---------15---------15---------15----------
 g----------------------------------------------
 c----------------------------------------------

 


 


 gtr. 2


 


 

 
 d----------------------------------------------
 a-------0----------0----------0----------0-----
 f-----4----------4----------4----------4-------
 c----------------------------------------------
 g----------------------------------------------
 c----------------------------------------------

 


 


 gtr. 2 (2nd time)


 


 

 
 d------------------------------------0-0-0-0-0-
 a-------0----------0----------0----0-0-0-0-0-0-
 f-----4----------4----------4----4-------------
 c----------------------------------------------
 g----------------------------------------------
 c----------------------------------------------

 


 


 Verses: pm


 


 

 
 d-----------------------------------------------------------------
 a-----------------------------------------------------------------
 f-----------------------------------------------------------------
 c---9---9-9-9---9---9---9---9---9---9---9---9---9---9---9---9---9-
 g-7---0---7---0---7---0---7---0---8---0---8---0---8---0---8---0---
 c-----------------------------------------------------------------

 


 


 Riff B:


 


 x2


 

 
 d-----------------------------------------------------------------
 a-----------------------------------------------------------------
 f-----------------------------------------------------------------
 c---9---9---9---9---9---9---9---9---9---9---9---9---9---9---9---9-
 g-7---0---7---0---7---0---7---0---8---0---8---0---8---0---8---0---
 c-----------------------------------------------------------------

 


 


 then,


 


 

 
 d-----------------------------------------------------------------
 a-----------------------------------------------------------------
 f-----------------------------------------------------------------
 c---9---9---9---9---9---9---9---9---9---9---9---9---9---9-9-9-0-0-
 g-7---0---7---0---7---0---7---0---8---0---8---0---8---0---8-8-----
 c-----------------------------------------------------------------

 


 


 Chorus:


 


 Fig. 1


 


 

 
 d-----------------------------------------------------------------
 a-----------------------------------------------------------------
 f-----------------------------------------------------------------
 c-----------------------------------------------------------------
 g-2-2-2-2-2-2-2-----2-2-2-2---2-2-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3---
 c-2-2-2-2-2-2-2-----2-2-2-2---2-2-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-2-

 


 


 before Interlude:


 


 

 
 d-----------------------------------------------------------------
 a-----------------------------------------------------------------
 f-----------------------------------------------------------------
 c-----------------------------------------------------------------
 g-2-2-2-2-2-2-2-----2-2-2-2---2-2-3-3-3-3-3-3-3----3-3-3-3-3---0--
 c-2-2-2-2-2-2-2-----2-2-2-2---2-2-3-3-3-3-3-3-3----3-3-3-3-3---0--

 


 


 Interlude:


 


 

 
 d-----------------------------------------------------------------
 a-----------------------------------------------------------------
 f-8------8-----8-8-8-8-8-8-8-8-8-11-11-11-11-11-11-11-11-11-11-11-
 c-x------x-----x-x-x-x-x-x-x-x-x--x--x--x--x--x--x--x--x--x--x--x-
 g-7----7-7---7-7-7-7-7-7-7-7-7-7-10-10-10-10-10-10-10-10-10-10-10-
 c-----------------------------------------------------------------
 d-----------------------------------------------------------------
 a-----------------------------------------------------------------
 f-8------8-----8-----8-----8-8-8/11-11-11----11-----11-11----11-0-
 c-x------x-----x-----x-----x-x-x--x--x--x-----x------x--x-----x---
 g-7----7-7---7-7---7-7---7-7-7-7/10-10-10-10-10--10-10-10-10-10---
 c-----------------------------------------------------------------

 


 


 gtr. 1 w/ Riff A


 


 gtr. 2


 


 x2


 

 
 d-----------------------------------------------------------------
 a-----0-------0-------0-------0-------0-------0-------0-------0---
 f---4---4---4---4---4---4---4---4---4---4---4---4---4---4---4---4-
 c-2-------2-------2-------2-------3-------3-------3-------3-------
 g-----------------------------------------------------------------
 c-----------------------------------------------------------------
 d----0-----
 a---0------
 f--4-------
 c-5--------
 g----------
 c----------

 


 


 Interlude:


 x2


 

 
 d-----------------------------------------------------------------
 a-----------------------------------------------------------------
 f-----------------------------------------------------------------
 c-----------------------------------------------------------------
 g-2-------2---2-----2--2---2-2-2-2-3-------3---3-----3--3-----3/5-
 c-2-------2---2-----2--2---2-2-2-2-3-------3---3-----3--3-----3/5-

 


 


 pm


 

 
 d-----------------------------------------------------------------
 a-----------------------------------------------------------------
 f-----------------------------------------------------------------
 c-----------------------------9-------------------------10-----10-
 g-7-7-7-7-7-7-7-7-7-7-7-7-7-7----8-8-8-8-8-8-8-8-8-8-8-8-8-8-8----
 c-----------------------------------------------------------------
 d-----------------------------------------------------------------
 a-----------------------------------------------------------------
 f-----------------------------------------------------------------
 c-----------------9-9---------9-----1010101010101010101010--------
 g-7-7-7-7-7-7-7-7-7-7-7-7-7-7----8-8-8-8-8-8-8-8-8-8-8-8-8--------
 c-----------------------------------------------------------------

 


 


 Outro:


 


 

 
 d-----------------------------------------------------------------
 a-----------------------------------------------------------------
 f-8------8-----8-8-8-8-8-8-8-8-8-11-11-11-11-11-11-11-11-11-11-11-
 c-x------x-----x-x-x-x-x-x-x-x-x--x--x--x--x--x--x--x--x--x--x--x-
 g-7----7-7---7-7-7-7-7-7-7-7-7-7-10-10-10-10-10-10-10-10-10-10-10-
 c-----------------------------------------------------------------
 d-----------------------------------------------------------------
 a-----------------------------------------------------------------
 f-8------8-----8-----8-----8-8-8/11-11-11----11-----11-11----11-0-
 c-x------x-----x-----x-----x-x-x--x--x--x-----x------x--x-----x---
 g-7----7-7---7-7---7-7---7-7-7-7/10-10-10-10-10--10-10-10-10-10---
 c-----------------------------------------------------------------
 d-----------------------------------------------------------------
 a-----------------------------------------------------------------
 f-----------------------------------------------------------------
 c-----------------------------------------------------------------
 g-2---------------------------------------------------------------
 c-2---------------------------------------------------------------

 


 


 that?s all


 


 trevor jones


 timmy91199@yahoo.ca`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/system_of_a_down/suggestions_tab_ver_7.html"}]},{name:"Somewhere in Between (2001)",songs:[{title:"Jane Doe",chords:`D[------------------------]
 A[------------------3h555-]
 E[---------------3h5------]
 B[-00003330-0-3-0---------]

 


 


 0:45


 Bridge1


 

 
 D[-----------------------][-LAST TIME THROUGH-]
 A[-----------------------][------(1:03)-------]
 E[-----------------------][-------------------]
 B[-00000002h3--3333333p0-][-XXXXXX------------]

 


 "Watch what you wish for, they might come for more"


 


 Does this look familiar at all *cough*INTRO*cough* If You Masterd it then you can


 rock this whole damn song.


 1:04


 chourse


 

 
 D[------------------------]
 A[------------------3h555-]
 E[---------------3h5------]
 B[-00003330-0-3-0---------]

 


 "Oh you know the wicked will come, picking, scratching, tearing you away"


 


 The rest of the song is the same ol' same ol' beyond this point.


 1:23


 

 
 D[------------------------]
 A[------------------3h555-]
 E[---------------3h5------]
 B[-00003330-0-3-0---------]

 


 "Hey Jane, you fucked your way to number one, Jane you'll pay the price for what


 you've done"


 


 bridge1


 1:48


 

 
 D[-----------------------][-LAST TIME THROUGH-]
 A[-----------------------][------(2:05)-------]
 E[-----------------------][-------------------]
 B[-00000002h3--3333333p0-][-XXXXXX------------]

 


 "Watch what you wish for, they might come for more"


 


 chourse


 2:06


 

 
 D[------------------------]
 A[------------------3h555-]
 E[---------------3h5------]
 B[-00003330-0-3-0---------]

 


 "Oh you know the wicked will come, picking, scratching, tearing you away"


 


 This is where the song FINALLY changes a bit


 Bridge2


 2:23


 

 
 D[-------------]
 A[---------3h5-]
 E[------3h5----]
 B[-0-3-0-------]

 


 "Jane, now the wicked will come"


 


 2:41


 

 
 D[------------------------]
 A[------------------3h555-]
 E[---------------3h5------]
 B[-00003330-0-3-0---------]

 


 "Hey Jane, when will you find what you want?"


 


 Chourse


 3:09


 

 
 D[------------------------]
 A[------------------3h555-]
 E[---------------3h5------]
 B[-00003330-0-3-0---------]`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/systematic/jane_doe_btab.html"},{title:"Somewhere in Between",chords:`C-----------------------------------------------------------------|
 G------11-------9------7-----6-----4h6----------------------------|
 Eb--------------------------------------------3-------------------|
 Bb----------------------------------------------------------------|
 F-----------------------------------------------------------------|
 Bb----------------------------------------------------------------| 

 


 


 


 ( Fill )


 Strum 8 times then bend a 1/2 step and release


 Repeat 4 times and on the 4th time don't bend but play the last part


 

 
 C-----------------------------------------------------------------------------|
 G-----------------------------------------------------------------------------|
 Eb------8------------8br-------------------------12--------------12-----------|
 Bb------8------------8br--------------X----------11-------X------11-----------|
 F-------6------------6br--------------X----------10-------X------10-----------|
 Bb------------------------------------X-------------------X-------------------| 

 


 


 Verse


 


 

 
 ------[Bass plays while pick is scr*ped every now and then up the 6th string]------ 

 


 


 


 ( Fill )


 


 

 
 C-----------------------------------------------------------------------------|
 G-----------------------------------------------------------------------------|
 Eb------8------------8br--------------------------12---------------12---------|
 Bb------8------------8br---------------X----------11-------X-------11---------|
 F-------6------------6br---------------X----------10-------X-------10---------|
 Bb-------------------------------------X-------------------X------------------| 

 


 


 


 Verse


 


 

 
 -----[Bass and drums]----

 


 do this at the end of the verse


 


 

 
 C---------------------------------------------------------------------|
 G---------------------------------------------------------------------|
 Eb--------------------------------------------------------------------|
 Bb------X----X--------------------------------------------------------|
 F-------X----X--------------------------------------------------------|
 Bb------X----X--------------------------------------------------------| 

 


 


 


 pre-chorus


 


 

 
 C-----------------------------------------------------------------|
 G-----------------------------------------------------------------|
 Eb------8------------8br------------------------------------------|
 Bb------8------------8br------------------------------------------|
 F-------6------------6br------------------------------------------|
 Bb----------------------------------------------------------------| 

 


 


 


 Chorus


 Repeat all of chorus once


 

 
 C--------------------------------------------------------------------------|
 G--------------------------------------------------------------------------|
 Eb----------4-----------------4------------------4---------4---------------|
 Bb-------4-----------------------4-------------------------4-------1-------|
 F------2-------------------2------------------2------------2-------1-------|
 Bb-------------2------------------------2-------------2------------1-------|
 C----------------------------------------------------------------------------------|
 G----------------------------------------------------------------------------------|
 Eb--------4--4--4--4--4--4--4--4---------------------------------------------------|
 Bb--------4--4--4--4--4--4--4--4----------1----3----4-----------X--X---------------|
 F---------2--2--2--2--2--2--2--2----------1----3----4-----------X--X---------------|
 Bb----------------------------------------1----3----4-----------X--X---------------| 

 


 


 ~~ = let ring out


 

 
 C----------------------------------------------------------------------------------|
 G----------------------------------------------------------------------------------|
 Eb----------4-----------------4------------------4---------4------------2~~--------|
 Bb-------4-----------------------4-------------------------4-------1----2~~--6~~---|
 F------2-------------------2------------------2------------2-------1----0~~--6~~---|
 Bb-------------2------------------------2-------------2------------1---------6~~---|
 C-----------------------------------------------------------------------------|
 G-----------------------------------------------------------------------------|
 Eb------8------------8br-------------------------12--------------12-----------|
 Bb------8------------8br--------------X----------11-------X------11-----------|
 F-------6------------6br--------------X----------10-------X------10-----------|
 Bb------------------------------------X-------------------X-------------------| 

 


 


 


 Verse


 


 

 
 -----[Bass and drums]----

 


 


 Do this somewhere around in the verse


 &lt;&gt;=Harmonics.......[put your finger on the string above the 4th fret, but dont press down


 just lay your finger litely on the string and strum it witht he pick and the same with the 5th]


 

 
 C------------------------------------------------------------------------------|
 G------------------------------------------------------------------------------|
 Eb---------------------------------------------------------------------6-------|
 Bb------&lt;4&gt;---&lt;4&gt;-------&lt;4&gt;--------------------------------------------X-------|
 F------------------------------------------&lt;5&gt;----&lt;5&gt;-------&lt;5&gt;--------4-------|
 Bb-----------------------------------------------------------------------------|
 -------[After that start the chorus again]-----

 


 


 


 


 Solo


 Repeat (v=vibrato)


 

 
 C--------------------------------------------------------------------------------|
 G-----7v----7v----7v--7v-----9v--9v--9v----11v--11v--11v-11v--12v---11v---11v----|
 Eb-------------------------------------------------------------------------------|
 Bb-------------------------------------------------------------------------------|
 F--------------------------------------------------------------------------------|
 Bb-------------------------------------------------------------------------------|
 C---------------------------------------------------------------------------|
 G-7v--7v--7v--7v--9v--9v--9v---11v--11v--11v-11v--12v---11v---11v---12v-11v-|
 Eb--------------------------------------------------------------------------|
 Bb--------------------------------------------------------------------------|
 F---------------------------------------------------------------------------|
 Bb--------------------------------------------------------------------------|
 C---------------------------------------------------------------------------------|
 G-----7v----7v----7v--7v-----9v--9v--9v----11v--11v--11v-11v--12v---11v---11v-----|
 Eb--------------------------------------------------------------------------------|
 Bb--------------------------------------------------------------------------------|
 F---------------------------------------------------------------------------------|
 Bb--------------------------------------------------------------------------------|
 C----------------------------------------------------------------------------------|
 G-----7v----7v----7v--7v-----9v--9v--9v--------------------------------------------|
 Eb---------------------------------------------------------------------------------|
 Bb---------------------------------------------------------------------------------|
 F----------------------------------------------------------------------------------|
 Bb---------------------------------------------------------------------------------|
 C---------------------------------------------------------------------------------|
 G---------------------------------------------------------------------------------|
 Eb-------------------------------------------------------------------------8~~----|
 Bb------4----4--4--4--4--4--4--4--4--4---6----6--6--6-----7----7--7--------8~~----|
 F-------4----4--4--4--4--4--4--4--4--4---6----6--6--6-----7----7--7--------6~~----|
 Bb------4----4--4--4--4--4--4--4--4--4---6----6--6--6-----7----7--7---------------|

 


 p.m.[_________________________] [______] [___]


 


 


 strum this and let it ring out a couple times


 


 

 
 C---------------------------------------------------|
 G---------------------------------------------------|
 Eb----8~~-------------------------------------------|
 Bb----8~~-------------------------------------------|
 F-----6~~-------------------------------------------|
 Bb--------------------------------------------------|
 C--------------------------------------------------------------------|
 G------11-------9------7-----6-----4h6-------------------------------|
 Eb------------------------------------------3------------------------|
 Bb-------------------------------------------------------------------|
 F--------------------------------------------------------------------|
 Bb-------------------------------------------------------------------| 

 


 


 


 Along with that another guitar does this(listen to the song to get the number of palm mutes)


 

 
 C-----------------------------------------------------------------|
 G--------------------------------------------------------18v------|
 Eb----------------------------------------------------------------|
 Bb-----4----------------------------------------------------------|
 F------4----------------------------------------------------------|
 Bb-----4----------------------------------------------------------| 

 


 p.m.


 


 


 

 
 C------------------------------------------------|
 G------------------------------------------------|
 Eb-----------------2-----------------------------|
 Bb---9------5------2-------2---------------------|
 F----9------5------0-------2---------------------|
 Bb---9------5--------------2---------------------|
 -------[ Do the chorus TWICE here]--------

 


 


 


 keep repeating form 4:38 and let it ring out at 6:06


 

 
 C-----------------------------------------------------------------|
 G-----------------------------------------------------------------|
 Eb------8------------8br------------------------------------------|
 Bb------8------------8br------------------------------------------|
 F-------6------------6br------------------------------------------|
 Bb----------------------------------------------------------------| 

 


 


 


 At 5:18 the other guitar comes in with this and keeps playing until the song is over


 

 
 C------------------------------------------------------------------|
 G------11-------9------7-----6-----4h6-----------------------------|
 Eb--------------------------------------------3--------------------|
 Bb-----------------------------------------------------------------|
 F------------------------------------------------------------------|
 Bb-----------------------------------------------------------------|`,url:"https://www.chordie.com/chord.pere/www.azchords.com/s/systematic-tabs-3934/somewhereinbetween-tabs-41468.html"}]},{name:"It’s About Time (1992)",songs:[{title:"Weak",chords:`SWV Weak chords


 Tabbed by Mia Herbalmix


 


 [F/A] [Gm] [Bb] [C] [F]  


 


 [F/A]I don'[Bb]t know what it is that you've done to me...


 [F/A]but it[Bb]'s caused me to act in such a crazy way.


 [F/A]Whatev[Bb]er it is that you do when you do what you're doing...


 [F/A]it's a[Bb] fee[C]ling I don't understand.


 


 [Cm]'Cause my heart starts beating triple time[F],


 [Bb]with thoughts of loving you on my mind.


 [Cm]I can't figure out just what to do,[F]


 [F]when the cause and cure is you.[C]


 


 [Am]I get so weak in the knees I can hardly speak.[Dm]


 [Gm]I lose all control and som[C]ething takes over me.


 [A]In a daze and it's so amazing, it's not a pha[Dm]se.


 [Gm]I want you to stay with me[C], by my s[Am]ide.


 I [Dm]swallow my pride, your love is[Gm] so sweet.


 It[Em] knocks me right off [Am]of my feet.[Dm] [Em]


 [F]I can[Gm]'t e[Bb]xpl[C]ai[F]n why your loving makes me weak.


 


 [F/A]It's T[Bb]ime after time after time I've tried to fight it.


 [F/A]But yo[Bb]ur love is strong it keeps on holding on.


 [F/A]Resist[Bb]ance is down when you're around, starts fading.


 [F/A]In my [Bb]condit[C]ion I don't want to be alone.


 


 


 


 [Gm] [Am] I try hard to fight it.


 [Bb] [C] No way can I deny it.


 [Gm] [Am] Your love's so sweet.


 [Bb] [C] It knocks me off my feet.


 


 


 * From here onward it's one whole note up *


 


 I get so weak...


 Blood starts racing through my veins


 I get so weak...


 Boy it's something I can't explain.


 I get so weak...


 Something 'bout the way you do


 the things you do ooh ooh, it...


 knocks me right off of my feet,


 off of my feet.


 Can't explain why your loving makes me weak.`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/s/swv/166166.html"},{title:"Right Here",chords:`Right Here - SWV


 


 I assume it's in the key there. I play it with a capo so I can sing in my own range so


 don't know if the key is correct. Use the fingering relative to the capo/nut.


 


 This is my interpretation of this song. It sounds good any way. of course you can use


 fingering you like.


 Chords I used are:


 


 [F]F*[(133211)](xx3211)


 [G]Gm[(355433)](xx0333)


 


 [F]Lately there[G] seems to be


 [Gm]Some insec[Gm]urities


 [F]About the [G]way I feel


 [Gm]Where I wanna [F]be


 [F]Boy, you know is with[G] you


 [Gm]No one can [F]do


 [F]The things you [G]do


 [Gm]To me[F]...


 


 (it pretty much goes on like that through the whole song even the chorus)


 


 Never to be mistaken


 Long as it's love we're making


 There's gonna be some rain


 Gonna beat the pain


 But as long as I know


 Boy, time will show


 Our love will grow


 And I know


 


 (CHORUS:)


 Love will be right here


 Be right here


 Right here


 Be right here


 No fear


 Have no fear


 No tears


 Love is here


 


 True love some don't believe in


 That's just what I'm givin'


 I'm gonna keep it strong


 I'll be holdin' on


 To you


 No one can do


 Me like you do


 It's true


 


 Sure as the sun is shining


 Our love will keep on climbing


 There's gonna be some rain


 Gonna beat the pain


 But as long as I know


 Boy, time will show


 Our love will grow


 And I know


 (CHORUS repeat til end)


 


 Enjoy!`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/swv/right_here_crd.html"}]},{name:"Ask Anybody (1998)",songs:[{title:"Okay",chords:`Date: March 8, 2003


 Artist: Swirl 360


 Song: Okay


 Album: Van Wilder Soundtrack


 Tabbed by: Ravi Kapoor (ravikapoor@earthlink.net)


 


 This song actually has two guitars in it, however, I'm tabbing the prominent


 chords used in the song (basically the 2nd guitar w/ the intro). You can put


 the intro in at various parts in the song, like after the first time through


 the chorus and at the end of the song. If the chords sound a bit off, it's


 because the bass actually leads a lot of the song, the guitars are somewhat


 in the background. It's all below...


 


 Tuning 1/2 step down:


 


 Chords used in verse and chorus:


 (names as if in standard tuning i.e. G is really F#)


 


 [G] [A] [Bm1] [Bm2] [D]  


 

 
 eb |-3--5---2---7---5-|
 Bb |-3--5---3---7---7-|
 F# |-4--6---4---7---7-|
 C# |-5--7---4---9---7-|
 G# |-5--7---2---9---5-|
 Eb |-3--5---2---7---5-|

 


 


 Intro:


 (the slide is to simulate the effect of the bass)


 (use thumb for slide)


 (guitar2 strums a "D" while guitar1 plays the intro)


 


 

 
 eb |--------9--9--9----2-2-2--|
 Bb |--------10-10-10---3-3-3--|
 F# |--------9--9--9----2-2-2--| x4
 C# |--------0--0--0----0-0-0--|
 G# |--------0--0--0----0-0-0--|
 Eb |-0/10---10-10-10---0-0-0--|

 


 


 Verses:


 


 Bm1 D X2


 


 G (3 times quickly) Bm2 A x3


 


 


 Chorus:


 


 G A Bm1 D x3


 


 G A D x1


 


 Interlude:


 


 Bm1 A Bm1 D x2


 


 outro:


 


 after chorus, play intro x3


 


 


 just listen to the song to hear the changes along with the lyrics. it's a little hard


 to hear (at least for me) but the chord changes aren't anything tricky. that's it.`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/s/swirl-360/33207.html"},{title:"Candy in the Sun",chords:`T1: Neil Jalaldeen, cosmik@biogate.com, Swirl 360, Candy in the sun, N/A


 


 S1: Rather new song.... from the soundtrack of never been kissed i think. Its a


 rare tab and very accurate chordinG!, =====================


 = CoSMiK Guitar Tab =


 =====================


 


 

 
 -----------------------------------------------------------------------------------

 


 


 Song: Candy in the Sun


 By: Swirl 360


 Last Updated: 12/06/99


 

 
 -----------------------------------------------------------------------------------

 


 


 Chords used: Ab, Bb, C, C#, Eb, Eb/G, F, F/A


 


 Recommended chord postitions:


 [Ab] - 466544


 [Bb] - 688766 or x13331


 [C] - x32010 or x35553


 [C#] - x46664


 [Eb] - x65343 or x68886


 [Eb/G] - 365343


 [F] - 133211


 [F/A] - 587565


 


 Styles:


 - Fingerpicking/Strumming


 Not a song with alot of noticable guitar, but nonetheless, go ahead and strum


 to it! Pack some light distortion into it.


 - Beat


 Very fast... about 140... i dunno...


 - Effects


 Verse: Chorus/Flanger or AutoWah Effect


 Bridge: Chorus/Flanger w/ Distortion or just plain distortion


 Chorus: Distorion


 


 Notes:


 - This song was pretty hard to get. I got the basic pattern, my dad helped me


 get the quick complicated parts! What a beautiful song to listen to and play.


 

 
 -----------------------------------------------------------------------------------

 


 


 ===== Intro =====


 [Drums] [Drums] 


 [Drums] [Drums] 


 


 ===== Verse 1 =====


 [Bb] [C] 


 Going on a field trip just like school


 [C#] [Ab] [Bb] 


 Gonna go somewhere that's really cool


 [Bb] [C] 


 Destination: Vacation


 [C#] [Ab] [Bb] 


 traveling around the nation


 ===================


 


 ====== Bridge 1 ======


 [Bb] [Eb] [Bb] 


 Hey Hey Hey Hey Hey


 [Bb] [Eb] [Bb] 


 Hey Hey Hey Hey Hey


 [Bb] [Bb] 


 The time is now to start the show


 [Bb] [Eb] [Bb] 


 Hey Hey Hey Hey Hey


 [Bb] [Eb] [Bb] 


 Hey Hey Hey Hey Hey


 [Bb] [Bb] [Eb] [Eb] 


 Rev it up and let it go


 ======================


 


 ======= Chorus =======


 [Bb] [F/A] [Eb/G] 


 Cos I know a place where the sun is


 [F] 


 always shining


 [Bb] [F/A] 


 And I won't forget the face


 [Eb/G] [F] 


 The one that's gonna keep me smiling


 


 [Eb] [F] 


 You're like candy in the sun


 [Bb] [Eb] 


 You're my angel on the run


 [Eb] [F] 


 You're like candy in the sun


 [Bb] [C#] [Eb] [Eb] 


 Hey Hey Hey, Hey, Hey


 [Bb] [C#] [Eb] [Eb] 


 Hey Hey Hey, Hey, Hey


 =====================


 


 ======= Verse 2 =======


 [Bb] 


 Speedin' down the highway


 [C] 


 With the top down


 [C#] [Ab] [Bb] 


 We're gonna get out of this one way town


 [Bb] 


 Kick it into motion


 [C] 


 Got a notion


 [C#] [Ab] [Bb] 


 We're gonna drive all the way to the ocean,


 yeah


 ========================


 


 ======= Bridge 2 =======


 [Bb] [Eb] [Bb] 


 Hey Hey Hey Hey Hey


 [Bb] [Eb] [Bb] 


 Hey Hey Hey Hey Hey


 [Bb] [Bb] 


 Rev it up and let it go


 [Bb] [Eb] [Bb] 


 Hey Hey Hey Hey Hey


 [Bb] [Eb] [Bb] 


 Hey Hey Hey Hey Hey


 [Bb] [Bb] [Eb] [Eb] 


 Crankin' up the radio


 ========================


 


 ======= Chorus ========


 [Bb] [F/A] [Eb/G] 


 Cos I know a place where the sun is


 [F] 


 always shining


 [Bb] [F/A] 


 And I won't forget the face


 [Eb/G] [F] 


 The one that's gonna keep me smiling


 


 [Eb] [F] 


 You're like candy in the sun


 [Bb] [Eb] 


 You're my angel on the run


 [Eb] [F] 


 You're like candy in the sun


 [Bb] [C#] [Eb] [Eb] 


 Hey Hey Hey, Hey, Hey


 [Bb] [C#] [Eb] [Eb] 


 Hey Hey Hey, Hey, Hey


 =======================


 


 ======= Coda =======


 [Eb] 


 It's time to take a chance


 [Ab] 


 You know it's true


 [Eb] 


 Come on let's break away


 [Ab] 


 Just me and you


 ====================


 


 ======= Final Chorus Combo =======


 [Bb] [F/A] [Eb/G] 


 Cos I know a place where the sun is


 [F] 


 always shining


 [Bb] [F/A] 


 And I won't forget the face the one


 [Eb/G] [F] 


 That's gonna keep me smiling


 [Eb] [F] 


 You're like candy in the sun


 [Eb] [F] 


 You're like candy in the sun


 [Eb] [F] 


 You're like candy in the sun


 


 

 
 ----x---- 

 


 


 [Bb] [F/A] [Eb/G] 


 Cos I know a place where the sun is


 [F] 


 always shining


 [Bb] [F/A] 


 And I won't forget the face the one


 [Eb/G] [F] 


 That's gonna keep me smiling


 [Eb] [F] 


 You're like candy in the sun


 [Eb] [F] 


 You're like candy in the sun


 [Eb] [F] 


 You're like candy in the sun


 [Bb] [C#] [Eb] [Eb] 


 Everyday, ayy, ayyy


 [Bb] [C#] [Eb] [Eb] 


 Hey Hey Hey, Hey, Hey


 [Bb] [C#] [Eb] [Eb] 


 Hey Hey Hey, Hey, Hey


 [Bb] [C#] [Eb] [Eb] 


 Hey Hey Hey, Hey, Hey


 


 - End on [Bb]


 ==================================


 


 

 
 -----------------------------------------------------------------------------------

 


 


 Neil "CoSMiK" Jalaldeen - 1999


 email: cosmik@biogate.com


 icq: 19078792


 homepage: http://cosmik.home.dhs.org`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/swirl_360/candy_in_the_sun_crd.html"}]},{name:"Swiss Lips (2015)",songs:[{title:"Honey",chords:`If you want more[Am] love t[Em]hen you gotta l[G]et it in baby[Am]


 [Em]if you want my soul [G]then you gotta turn it [Am]on


 [Em]If the sun come first [G]let it dry it out and fad[Am]e it


 [Em]So tonight I need to [G]find you in my bo[Am]nes


 


 [Em]You know I couldn�??t live it[Am], though it�??s only for a minute


 [D]I�??m the wild wild rebe[Bm]l in the wild wild world


 [C]oh oh oh oh


 [D]oh oh oh oh


 [Em]Getting high till the morning, [Am]though we'll never hear the warning


 [D]but the sun keeps climbing [Bm]and our hearts keep falling


 [C]oh oh oh oh


 [D]only now we know that we were born the[Em] same


 


 [Em]Honey Honey


 [G]I won�??t let yo[C]u get hurt


 [C]Honey Honey


 [G]I won�??t let it get[Em] inside you


 [Em]Honey Honey


 [G]I won�??t let yo[C]u get hurt


 [C]Honey Honey


 [G]I won�??t let i[Em]t define you


 


 [G] [Am] [Em] [G]  


 C (single strum)


 Ahhh ahhh ahh


 


 [Am]Have you [Em]lost more love [G]than you could ever give b[Am]aby


 [Em]Have you lost my soul [G]now you�??ve had to turn i[Am]t on


 [Em]If the fire comes first [G]we�??ll be wishing we were b[Am]urning


 [Em]In the light I find you [G]resting in my b[Am]ones


 [Em]You know I couldn�??t live i[Am]t for it�??s only for a minute


 [D]I�??m the wild wild rebe[Bm]l in the wild wild world


 [C]oh oh oh oh


 [D]oh oh oh oh


 [Em]Getting high till the morning, [Am]though we'll never hear the warning


 b[D]ut the sun keeps climbing and [Bm]our hearts keep falling


 [C]oh oh oh oh


 [D]only now we know that we were born the[Em] same


 


 [Em]Honey Honey


 [G]I won�??t let yo[C]u get hurt


 [C]Honey Honey


 [G]I won�??t let it get[Em] inside you


 [Em]Honey Honey


 [G]I won�??t let yo[C]u get hurt


 [C]Honey Honey


 [G]I won�??t let i[Em]t define you


 


 (Single strum on next 7 chords played)


 [C]I feel the he[Em]art stop kicking


 [G]I feel the he[D]art stop kicking


 [C]I feel the he[Em]art stop kicking


 [G]Now that we know [D]that were born the [Em]same


 


 [Em]Honey Honey


 [G]I won�??t let yo[C]u get hurt


 [C]Honey Honey


 [G]I won�??t let it ge[Em]t inside you


 [Em]Honey Honey


 [G]I won�??t let yo[C]u get hurt


 [C]Honey Honey


 [G]I won�??t let i[Em]t define you


 [Em]We learn our lessons [G]from the earth oh [C]no


 [C]So starts [Am]into the night and light [Em]a flame


 [Em]But in the end a [G]holy dust is all we [C]are


 [C]Only then [G]we'll know that we were born [Em]the same


 [Em]Honey Honey [G]honey honey [C]honey


 [C]Honey Honey [G]honey honey [Em]honey


 [Em]Honey Honey [G]honey honey [C]honey


 [C]Honey Honey [G]Honey`,url:"https://www.chordie.com/chord.pere/www.azchords.com/s/swisslips-tabs-56646/honey1-tabs-834811.html"},{title:"Books",chords:`Intro: E Am C G Em Am C G


 


 [E]Hip shoot, [Am]make me feel bad,


 [C]heres the love, [G]come and fill it with your motion.


 [E]wild eyed [Am]kids understand,


 [C]when you're alone [G]you're a river not an ocean


 [C]when the sun [G]needs a sacrifice,


 [A]she'll be there with a fool to offer up,


 [C]gotta make it to a paradise,


 [A]for our own survival, own survival


 


 [E]set fire [D]to the books that [Am]you read, I wanna see 'em burning up


 [Em]let go of the [D]dreams that you [Am]had. Ohh ohh ohhh


 [E]set fire [D]to the books that [Am]you read, I wanna see 'em burning up


 [Em]let go of the [D]dreams that you [Am]had. Ohh ohh ohhh[E] [Am]


 


 [C]Set fire [G]to the books that read[Em] [Am] [C] [G]


 


 [E]milk teeth, [Am]paint me in rags


 [C]gimme soul [G]from the rhythm of your beatings


 [E]wild eyed [A]kids understand,


 [C]when you're alone [G]nothings easy to believe in


 [C]when it calls [G]it'll come to you,


 [Am]it'll come when it's you that's [C]calling up


 when it falls it'll fall to you


 [A]for your own survival own survival


 


 [E]set fire t[D]o the books that [Am]you read, I wanna see 'em burning up


 [Em]let go of the [D]dreams that [Am]you had. Ohh ohh ohhh


 [E]set fire t[D]o the books that [Am]you read, I wanna see 'em burning up


 [Em]let go of the [D]dreams that you [Am]had. Ohh ohh ohhh[Em]


 [D]Ohhh oh oh


 [Am]Set Fire to the books that you [Em]read


 [D]Ohhh oh oh


 Ohhh [A]oh oh[E]


 [D]Ohhh oh oh


 [Am]Set Fire to the books that you [Em]read


 [D]Ohhh oh oh


 Ohhh [A]oh oh[C]


 [G]overflowing futures[Am],


 [Em]dying in a distant dream[C],


 [G]if only I could move ya[Am],


 [Em]we could make it feel so real[C]


 [G]and if we're killing all of our friends[Am],


 [Em]to make another TV show[G],


 [C]ya know that [G]holy rivers [Am]don't end,


 we've gotta let the fires grow.


 


 [E]set fire [D]to the books that [Am]you read, I wanna see 'em burning up


 [Em]let go of the [D]dreams that you [Am]had. Ohh ohh ohhh


 [E]set fire [D]to the books that [Am]you read, I wanna see 'em burning up


 [Em]let go of the [D]dreams that you [Am]had. Ohh ohh ohhh


 [Em]Ohhh [D]oh oh[A]


 [A]Set Fire to the books that you re[Em]ad


 [D]Ohhh o[A]h oh


 [A]Set Fire to the books that you re[Em]ad


 [D]Ohhh [A]oh oh


 [A]Ohhh oh o[Em]h


 [D]Ohhh o[A]h oh


 [A]Ohhh oh oh[Em]


 [D]Ohhh o[A]h oh


 [A]Ohhh oh oh[Em]


 [D]Ohhh [A]oh oh


 [A]Ohhh oh o[Em]h


 [D]Ohhh [A]oh oh`,url:"https://www.chordie.com/chord.pere/www.azchords.com/s/swisslips-tabs-56646/books1-tabs-825650.html"}]},{name:"Serpentine Gallery (1995)",songs:[{title:"Invisible",chords:`"Invisible" By: switchblade symphony


 Performed by: Jon Mohr


 Tabbed by: Heather Foslund


 --This is an easy tab, but it's kinda hard to get the rythm down--


 


 *******************************************************************


 Intro:


 (Feel.....Feel)


 


 [G]  


 [D]  


 [A]  

 
 E--0-0-0-0---0-0---0-0-0-0---0-0

 


 


 ( Tab from: http://www.guitartabs.cc/tabs/s/switchblade_symphony/invisible_btab.html )


 Chorus:


 ("If you leave....")


 


 [G]  


 [D]  


 [A]  

 
 E-0-0--0-0-0-0-1---0-0---0-0---0-0-0-0-1

 


 


 Bridge:


 ("Gods and devils...")


 


 [G]  

 
 D--------9-8-0-0

 


 A (Play till Tina says ("Get in position to multiply")


 E-0-0-0


 


 


 structure :


 


 Intro


 verse


 chorus


 verse2


 chorus


 bridge


 Intro


 chorus`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/switchblade_symphony/invisible_btab.html"},{title:"Bad Trash",chords:`Date: Mon, 30 Mar 1998 20:08:18 PST


 From: noah anthony


 Subject: TAB: bad trash by switchblade symphony


 


 switchblade symphony-bad trash


 by noah anthony


 


 intro- A F A G


 verse- A F A F A F


 drum part


 intro


 verse


 keyboard part


 


 the end notes are practicaly all A's too.


 


 before the 2nd verse the bass is doing this:


 [A] [B] [F] [G] [A] [B] [F] [G]  


 lilies may grow,even thru snow


 the sun will rise and sparkle your eyes sparkle your eyes


 the wind shall blow bad trash away when anguish is near


 


 somebody please polish the stars for their skin is dull


 somebody please awaken the sun and never let it fall


 somebody please stir up the sky emotionally so it must cry`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/switchblade_symphony/bad_trash_crd_ver_2.html"}]},{name:"Heart Tuned to D.E.A.D. (2007)",songs:[{title:"Drama Queen",chords:`Load up the drugs we'll let the demons come in


 [Eb]Bring all the kids they won't know where to begin


 [C]Shoot 'em a line they'll lock you up in the pen


 [Eb]If you're rating my life give it t[C]en


 Chorus-


 But it rema[Ab]ins to be seen if you[Eb]'ve got what it takes [F]to be Quee[C]n


 Just get your ass t[Ab]hrough my door and don't ask for[Eb] the chance[F]


 [C]Drama Queen - ar[Eb]e you cl[Ab]ean?


 


 [C]Get in your head invite me down for a dream


 [Eb]Slip on a tie and take it out on the scene


 [C]Tell all your friends to meet the girl that I choose


 [Eb]If they cancel your face cut em [C]loose


 


 Repeat Chorus


 


 [C]You turn up you tune in, strike a pose start again


 [Eb]You turn up you tune in, strike [G]a pose start again


 check yo[G]ur pulse?


 


 Repeat Chorus


 


 ( Tab from: https://www.guitartabs.cc/tabs/s/switches/drama_queen_crd.html )`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/switches/drama_queen_crd.html"},{title:"Lay Down the Law",chords:`This is my first tab, so be gentle *wince*


 And the presentation may be a bit off, but I'm sure you can look past my crappy tabbing


 work out the bad bits yourself.


 


 / - Slide


 H - Hammer on


 B - Bend


 


 Intro: Fading B flat along with drum beat.


 


 MAIN RIFF:


 

 
 E------------------------------------------|
 B--8-6-------------------------------------|
 G------7--------7-7-5/3---3----------------|
 D--------8--------------5----5-------------|
 A------------------------------------------|
 E------------------------------------------|
 E------------------------------------------|
 B--8-6-------------------------------------|
 G------7--------7-7-5/3--------------------|
 D--------8--------------5-5----------------|
 A------------------------------------------|
 E------------------------------------------|

 


 


 CHORDS: (OFF BEAT)


 [Gm] [Gm] [Gm] [Gm] [Dm] [Dm] [Gm] [Gm]  


 [Bb] [Bb] [Bb] [Bb] [Dm] [Dm] [Gm] [Gm]  


 AFTER CHORUS: (X2)


 

 
 E-------------------------------------------|
 B---------8--------8---------6----------8---|
 G-------------------------------------------|
 D----5h6------5h6------5h6--------5h6-------|
 A-------------------------------------------|
 E-------------------------------------------|
 E-------------------------------------------|
 B----------9-------9---------6--------------|
 G-----6h7-----6h7-------5h6---7--5/3--------|
 D-------------------------------------5-----|
 A-------------------------------------------|
 E-------------------------------------------|

 


 


 On the first part of the second verse, the chords are played on keyboard.


 


 CHORDS :(SECOND VERSE)


 [Gm] [Dm] [Gm]  


 [Bb] [Dm] [Gm]  


 BRIDGE:


 

 
 E------------------------------------------------|
 B----8-------(X7)--------------------------------|
 G------7--3--------------------------------------|
 D-----------5------------------------------------|
 A----------------------5-5--4-4--3-3-------------|
 E-------------------------------------6-6--5-3---|

 


 


 BRIDGE CHORDS:


 Em | Eb | Cm | Gm


 Em | Eb | Cm | Gm


 


 On the second round of the chorus after the bridge, the chords are played ON the beat.


 The 3rd and 4th time the chorus plays after the bridge, the chords return to an OFF beat.


 


 When the after chorus is played after the last chorus, the end note changes, and is a bend.


 


 LAST NOTE:


 

 
 E------|
 B------|
 G------|

 


 [D---3b-]  

 
 A------|
 E------|

 


 


 And I think that's about it.


 I won't put down the order, when one could just listen to the song.


 


 Any questions, suggestions, insults and congratulations can go to:


 harrington007@hotmail.co.uk`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/s/switches/88582.html"}]},{name:"Water Colours (2011)",songs:[{title:"Diplomat",chords:`My first tab! I was looking for chords and couldn't find them anywhere so I tried


 playing a few and they seemed to work! This is completely by ear so it's probably not 100%


 correct, but it sounds right when I play it. Enjoy!


 


 No Capo, standard tuning (EADGBe).


 


 Intro:


 G D Am C D (x2)


 


 Verse 1:


 


 [G]Live to work, work to live


 [D]No time left to spend or give


 [Am]Walking like a [Am7]bureaucrat


 [C]Talking like a [D]diplomat


 


 Verse 2:


 


 [G]Always look into their eyes


 [D]Firm handshakes, quick replies


 [Am]Push the product, [Am7]sell the crop


 [C]Climb that ladder [D]to the top


 


 Verse 3:


 


 [G]But what if it's not meant for me?


 [D]I can't stand the symmetry


 [Am]My head is stuck [Am7]inside the clouds


 [C]But I can see [Csus2]clearly now


 


 Chorus:


 


 [G]I'm trying to find the [D]means to living more [Am]passionat[Am7]ely


 [C]Cause I'm not who [Csus2]I wanna [G]be


 Buried in rou[D]tines, I don't care what [Am]happens to [Am7]me


 [C]I just [Csus2]gotta get [G]free


 


 [G] [D] [Am] [C] [D]  


 Verse 4:


 ( Tab from: http://www.guitartabs.cc/tabs/s/swimming_with_dolphins/diplomat_crd.html )


 [G]I am no proprietor


 [D]Tell that that to my dear father


 [Am]Taught me everything [Am7]he knew


 [C]About nothing that I [D]wanna do


 


 Verse 5:


 


 [G]Earned awards, honors, degrees


 [D]I couldn't find myself in these


 [Am]So I took my car keys [Am7]and ID's


 [C]And threw them in the oc[D]ean


 


 Bridge:


 


 [Em]Now, all of the [D]world is laying [Am7]right be[D]fore my [C]eyes


 [Am] [D7] [G] [D] 


 [Am7]I wo[C]nde[G]r why the hell it took so long for me to recognize


 (recognieieiiize)


 [D] [C] [Em] [Am7] [G] [D] [Csus2]  


 [Am7] [C] [D]  


 


 [G]I'm trying to find the [D]means to living more [C]passionately


 [Am]Cause I'm not who [Am7]I wanna [G]be


 Buried in rou[D]tines, I don't care what [C]happens to m[Am7]e


 


 Chorus:


 


 I said [G]I'm trying to find the [D]means to living more [Am]passionat[Am7]ely


 [C]Cause I'm not who [Csus2]I wanna [G]be


 Buried in rou[D]tines, I don't care what [Am]happens to [Am7]me


 [C]I just [Csus2]gotta get [G]free


 


 [G] [D] [Am] [C]  


 I just [Csus2]gotta get [G]free


 


 G D Am C D (Repeat and fade)`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/swimming_with_dolphins/diplomat_crd.html"},{title:"Easy",chords:`No Capo


 


 


 [C]Tell me when it's over,


 I will begin [Am]pulling the boards from my front door once it is [F]safer then,


 I'll show my [G]face again


 


 [C]Yeah I want you closer,


 I've been livin', [Am]just like a ghost for the most part I'm feeling [F]dissonant,


 And you're in[G]different


 


 But, you're [F]still not sure


 Yeah you're [Am]still not sure


 Let me make it [F]easier


 


 You don't have to [F]call,


 You don't have to say, [Am]"I love you" again,


 If you want a love that's [Fmaj7]easy


 Then I would [G]rather have nothing


 


 [C]Maybe when we're older it'll sink in


 [Am]Cause heaven knows this ain't blowin' over any[F]time too fast,


 But every[G]thing will pass


 


 [C]Yeah I'm getting bolder with my thinking


 [Am]You've got me wrong for so long I can't even [F]turn my back


 Without you [G]falling off track


 But, you're [F]still not sure


 Yeah you're [Am]still not sure


 Let me make it [F]easier


 


 You don't have to [F]call,


 [Fmaj7]You don't have to say, [Am]"I love you" again,


 If you want a love that's [F]easy


 [Fmaj7]Then I would [G]rather have nothing


 


 [F]Never been so clear as now


 [Am]Never been so clear as now


 


 So if you're [F]still not sure


 If you're [Am]still not sure


 Let me make it [F]easier`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/swimming_with_dolphins/easy_crd.html"}]},{name:"Cole Swindell (2014)",songs:[{title:"Hope You Get Lonely Tonight",chords:`Tuning: Standard


 Capo 1


 


 Intro: A, E, F#m, D


 


 [A]I could go for a tipsy tailgate kiss


 [E]Baby taste the moonshinin off of your lips


 [F#m]I wanna see that want ya smile


 [D]Still got me hooked been hooked for a while


 [A]If you got a bottle you ain't opened yet


 [E]Or an empty spot beside you in your bed


 [F#m]If you got some room for a little regret


 [D]Let me know girl I've already left yeah


 


 (CHORUS)


 [A]If you're feelin what I'm feelin let's mix it up


 [E]You got my number baby hit me up


 [F#m]If you need a little late night pick me up


 [D]I hope you get lonely tonight


 [A]We ain't gotta make up just kiss me


 [E]We can straight up blame it on the whiskey


 [F#m]You ain't gotta wake up and miss me, [D]no


 


 I hope you get lonely tonight


 


 [A]I don't care if you're spinnin in the neon


 [E]Or burnin up the sheets with my tee on


 [F#m]Either way the thought is turnin me on


 [D]I can't shake it, girl I'm wide awake so..


 


 (CHORUS)


 [A]If you're feelin what I'm feelin let's mix it up


 [E]You got my number baby hit me up


 [F#m]If you need a little late night pick me up


 [D]I hope you get lonely tonight


 [A]We ain't gotta make up just kiss me


 [E]We can straight up blame it on the whiskey


 [F#m]You ain't gotta wake up and miss me, [D]no


 


 I hope you get lonely tonight


 


 [A]Hope you get lonely


 [E]Hope you get lonely


 [F#m]Hope you get lonely ton[D]ight


 (No Chord)


 Girl,


 


 (CHORUS)


 [A]If you're feelin what I'm feelin let's mix it up


 [E]You got my number baby hit me up


 [F#m]If you need a little late night pick me up


 [D]I hope you get lonely tonight


 [A]We ain't gotta make up just kiss me


 [E]We can straight up blame it on the whiskey


 [F#m]You ain't gotta wake up and miss me, [D]no


 I hope you get lonely toni[A]ght


 Lonely to[E]night, lonely to[F#m]night


 [D]Yeah girl I hope you get lonely ton[A]ight`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/c/cole-swindell/383808.html"},{title:"Chillinâ?? It",chords:`Chillin' It  Cole Swindell






 


 http://www.reverbnation.com/coleswindell


 


 Capo 2


 *=Strum once, and let chord ring out


 


 I got my shades on (C*) top back, (G*) rollin' with the music jacked


 (D*) one on the wheel one (Em*) around you baby


 


 [(C)] [(G)] [(D)] [(Em)] [(D)]  


 Verse 1


 (C) Little sunset (G) burning up the blue sky


 (D) shinin' off the cross hangin' (Em) from the mirror (D) of my ride


 (C) Breeze blowin' in (G) your hair blowin' 'round,


 (D) you're scannin' through the stations (Em) lookin' for that (D) country sound


 (C) The good stuff iced (G) up in the back seat,


 (D) nowhere to go, (Em) nowhere to (D) be


 


 Chorus


 I got my (C) shades on, top back, (G) rollin' with the music jacked


 (D) one on the wheel, (Em) one around you baby (D)


 (C) Sunset, I bet (G) there's a chance we can get


 (D)sure enough, tangled up, (Em) laid back and lazy (D)


 (C) Pour it on easy now, (G) don't spill a bit


 (D) nothin' but time tonight, (Em) let's get to killin' it (D)


 (C) Long as I'm rockin' with (G) you girl you know I'm (D) cool with just chillin' it


 


 Verse 2


 (C) Nothin' but two lane (G) country on up ahead


 (D) girl you so fine, I wouldn't (Em) mind if this is (D) all we did


 (C) You got me high on kisses (G) you got me missin' signs


 (D) Hard lookin' left when my (Em) world is on my (D) right


 


 Chorus


 I got my (C) shades on, top back, (G) rollin' with the music jacked


 (D) one on the wheel, (Em) one around you baby (D)


 (C) Sunset, I bet (G) there's a chance we can get


 (D)sure enough, tangled up, (Em) laid back and lazy (D)


 (C) Pour it on easy now, (G) don't spill a bit


 (D) nothin' but time tonight, (Em) let's get to killin' it (D)


 (C) Long as I'm rockin' with (G) you girl you know I'm (D) cool with just chillin' it


 


 Bridge


 (C) Nothin' like a little (G) you and me low key,


 (D) right now I'm right (Em) where I wanna (D) be


 


 Chorus


 I got my (C) shades on, top back, (G) rollin' with the music jacked


 (D) one on the wheel, (Em) one around you baby (D)


 (C) Sunset, I bet (G) there's a chance we can get


 (D)sure enough, tangled up, (Em) laid back and lazy (D)


 (C) Pour it on easy now, (G) don't spill a bit


 (D) nothin' but time tonight, (Em) let's get to killin' it (D)


 (C) Long as I'm rockin' with (G) you girl you know I'm (D) cool with just chillin' it


 


 (C) (G) Yeah I love rocking with you girl, (D) we're just chillin' it







    
    
    

        
            
            
            
        
    
    

    

    

    VIEW
       
        FONT
        SCROLL
        
            PRINT
        
        
            SEARCH
        
    

                     
                    x
                    

                        Normal
                        Lyrics
                        Chords
                        Tabs
                                                                ChordPro
                    
                
                
                    x
                    

                        Small
                        Medium
                        Large
                    
                
                
                    x
                    

                        Pause
                        Start
                        
                        1
                        2
                        3
                        4
                        5
                        6
                        7
                        
                    
                
                
                    x
                    

                        
                                        
                        
                        Text color:
                        
                        Chord color:
                        
                        
                        Chord grids:Images No Images
                        
                        
                        Font size:XS S M L XL
                        
                        
                        Page size:A4 Letter
                        
                        

                        
                        Save settings
                        Print Preview
                    
                

                            
                            
            
                            
                      
                    
        

                                        
            
    variations - click chord images`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/c/cole_swindell/chillin_it_crd.html"}]},{name:"It’s Better to Travel (1987)",songs:[{title:"Am I the Same Girl",chords:`Am I the Same Girl? (Record and Sanders)


 This is the Swing Out Sister Version although I took the Key (Bb) from Dusty


 Springfield?s version. The song started out with a Vocal by Barbara Acklin, before


 being turned into an instrumental called Soulful Strut by the Young Holt


 Unlimited. It was used in the film The Parent Trap, in which Lindsay Lohan (like


 Hayley Mills in the original), played both twins, hence the joke of using this song.


 


 Intro F Gm7 Bb BbBbBbBb F Gm7 Bb BbBbBbBb


 


 Main Sequence (carries on through song in Bb and then C)


 Notes (F[Bbmaj7],G,G#,AA, AAA) (F,[Cm7]G,A,Bb[(Cm9/F)]Bb, DD Bb[Cm7/F])


 


 (Oooh, oooh, ooh, ooh) x 2


 


 Unison Riff Notes (FG Bb C DC FG Bb C D F)


 


 Why don't you s[Bbmaj7]top , And look me over , (l[Cm7]ook me ov[Cm7/F]er).


 Am I the same gi[Bbmaj7]rl you used to know?[Cm7] [Cm7/F]


 Why don't you stop , And think it over, (think it over).


 Am I the same girl who knew her soul?


 Im the one you want , (Im the one you want ), and Im the one you need.


 Im the one you love, (Im the one you love ), Im the one you used to meet


 Around the corner, everyday, we would meet and slip away.


 


 Bridge


 But we were much t[Ebmaj7]oo young, to[Dm7] love each o[Cm7]ther this way.[Cm7/F]


 


 Main Sequence


 Am I the same girl? (Yes I am, yes I am) Am I the same girl? (Yes I am, yes I am)


 


 Unison Riff Notes (FG Bb C DC FG Bb C D F)


 


 Main Sequence


 Oooh, oooh, ooh, ooh) x 2


 


 Why don't you stop and look me over (look me over).


 Am I the same girl you used to know?


 Why don't you stop and think it over (think it over).


 Am I the same girl who knew your soul?


 Im the one you hurt, (Im the one you hurt) and I'm the one you need


 I'm the one who cried, (Im the one who cried). Im the one you used to meet


 But you are pretending you don t care, but the fire is still there.


 


 Bridge


 Now we are no longe[Ebmaj7]r too young [Dm7]to love each[Cm7] other th[Cm7/F]is way.


 


 Main Sequence


 


 Am I the same girl? (Yes I am, yes I am)


 Am I the same girl? (Yes I am, yes I am)


 Am I the same girl? (Yes I am, yes I am)


 Am I the same girl? (Yes I am, yes I am)


 


 Unison Riff Notes (FG Bb C DC) second time changed. (GA Bb C E G)


 


 Other syncopated bit (Key change Cmaj7 Dm7 Dm9/G Dm7/G)


 


 Notes (G,A,A#,Bb, BBB) (G,A,B,CC, EE C)


 


 Have you ever felt the need for something more,


 when every week comes scratching at your door?


 Have you ever stopped and wonder what it is you're searching for?


 Push your luck too far with me, but if you push it any further you won't have any.


 


 Organ Solo (over Main Sequence in C)


 


 Am I the same girl? Am I the same girl? (Yes I am, yes I am) etc`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/s/swing-out-sister/216988.html"},{title:"Breakout",chords:`Breakout (Connell /Drewery/ Jackson)


 


 Intro


 E Cmaj7 Bm7 E Cmaj7 F#m7 Fm7 / B Bass (= B11 ) E


 


 Breakout!


 Riff Number 1


 [(]Ri[E]ff[E] N[E/G#]umber[Bass] 2[E/G#] [Bass] [F#m7/A] [Bass] [B] [)]


 [(]Ri[E]ff[E] N[E/G#]umber[Bass] 3[E/G#] [Bass] [F#m7/A] [Bass] [A/C#] [Bass] [B] [)]


 [(] [C#m7] [E/G#] [Bass] [F#m7/A] [Bass] [A/C#] [Bass] [B] [)] 


 Pre-Verse


 


 Riff 1 Riff 2 Riff 1 Riff 3


 


 Verse


 Riff 1 Riff 2 Riff 1 Riff 3


 When explanations make no sense, when every answer's wrong.


 Riff 1 Riff 2 Riff 1 Riff 2


 you're fighting with lost confidence all expectations gone.


 Riff 1 Riff 2 Riff 1 Riff 3


 The time has come to make or break, move on don't hesitate.


 Hold on the E


 - breakout !


 


 Chorus


 Don't[F#m7] stop to [C#m7]ask, now you've found a [Amaj7]break to make it[G#m7] last


 F#m7 F#m7 / B Bass (= B11 )


 you've got to find a way, say what you want to say.


 E Riff 1 Riff 2


 - breakout !


 


 Verse 2


 Riff 1 Riff 2 Riff 1 Riff 3


 When situations never change, tomorrow looks unsure.


 Riff 1 Riff 2 Riff 1 Riff 2


 Don't leave your destiny to chance, what are you waiting for?


 Riff 1 Riff 3


 The time has come to make or break


 Hold on the E


 - breakout !


 


 Chorus


 Don't stop to ask, now you've found a break to make it last


 you've got to find a way, say what you want to say, breakout!


 


 Riff 1 Riff 2 etc


 


 Chorus


 Don't stop to ask, now you've found a break to make it last


 you've got to find a way, say what you want to say, breakout!


 


 Bridge


 [C]Some pe[D]ople stop at not[E]hing,


 if y[C]ou're sea[D]rching for s[E]omething


 [C]lay down the law, shout out for more,


 F#m7 F#m7/B Bass ( = B11 )


 breakout and shout, day in and day out


 [E]- breakout


 


 Riff 1 Riff 2 Riff 1 Riff 2


 


 Chorus


 


 Don[F#m7]'t stop to [C#m7]ask, now you've found [Amaj7]a break to make it [G#m7]last


 F#m7 F#m7 / B Bass (= B11 )


 you've got to find a way, say what you want to say.


 E Riffs modulate into A#m7/D# Bass ( = D#11)


 - breakout !


 Key change up two steps to F#


 Chorus


 Don'[G#m7]t stop to[D#m7] ask, now you've fou[Bmaj7]nd a break to make it [A#m7]last


 G#m7 G#m7 / C# Bass (= C#11 )


 you've got to find a way, say what you want to say,


 A#m7/D# Bass ( = D#11)


 Breakout!


 


 Chorus again (same as the last one)


 Don't stop to ask, now you've found a break to make it last


 you've got to find a way, say what you want to say, breakout!


 


 Vocal over


 lay down the law, shout out for more, etc`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/s/swing-out-sister/217744.html"}]},{name:"The Swift ()",songs:[{title:"Come On",chords:`By The Swift


 Transcribed by Elyk --&gt; zelphie826@juno.com


 


 INTRO: C B Bb C (4x)


 


 VERSE 1:


 [C] [G]  


 [C] [G]  


 [Am] [E] [C] [E] [Am] [E]  


 [C] [G] [C]  


 VERSE 2:


 [C] [G]  


 [C] [G]  


 [Am] [E] [C] [E] [Am] [E]  


 [C] [G] [C]  


 CHORUS:


 C B Bb C (4x)


 


 INSTRUMENTAL: Am E Am/G D F G


 


 VERSE 3:


 [C] [G]  


 [C] [G]  


 [Am] [E] [C] [E] [Am] [E]  


 [C] [G]  


 [C] [G]  


 [C] [G] [C]  


 ENDING: C B Bb C (4x)


 


 This is an awesome song! I just got this cd yesterday, and i wanted to play


 this song, so i figured the only way to learn how to play it was to figure


 it out myself! Well, that's partly true, 'cuz my dad helped me, but still,


 i wanted to play it. I hope you have a good time playing it also! If you have


 any questions, (like what the lyrics are, etc.) feel free to email me about it,


 ok? Alrighty, have fun!


 song,`,url:"https://www.chordie.com/chord.pere/www.christianguitar.org/csong9522/-Come-On"},{title:"I Need You",chords:`Verse 1:


 


 [F]My heart is restless in me


 My wings are[Bb] all worn out


 [Dm]I'm walking in the wilderness


 And I can[Bb]not get out


 [C]I need You, oh I need You


 Blessed Savio[Dm]r come[Bb]


 [C]I need You, oh I need You


 Fill the every[Bb] longing of my soul[C]


 


 Chorus:


 


 [F]Oh how I need You Lord


 I need Your p[C]erfect word


 [Dm]With tearful eyes I see


 The sin that I[Bb] afford[Dm] [C]


 [F]I need to weep and pray


 For all the t[C]housand ways


 [Dm]That I have failed You just today[Bb] [Dm] [C]


 


 Verse 2:


 


 [F]And my bed is soaked with sadness


 My sadness has [Bb]no end


 [Dm]A downward spiral of despair


 That I keep[Bb] falling in


 [C]I need You, oh I need You


 To You my soul[Dm] shall fly[Bb]


 [C]I need You, oh I need You


 Yahweh how I [Bb]love you more than l[C]ife


 


 (Chorus)


 


 Bridge:


 ( Tab from: http://www.guitartabs.cc/tabs/s/swift/i_need_you_crd.html )


 [Dm]Your silence is[Bb] like death to me[F]


 So w[C]on'[Dm]t You hear my desp[Bb]erate plea[F] [C]


 


 Verse 3:


 


 [F]Today my soul is soaring


 Way over m[Bb]ountains high


 [Dm]Though I can see the valleys


 They are all [Bb]just passing by


 [C]It's not that I am stronger


 Look at my[Dm] feeble wings[Bb]


 [C]But I've been lifted higher


 Yahweh's lif[Bb]ted me in His own str[C]ength


 


 Chorus:


 [F]Oh how I love You Lord


 I lo[C]ve your perfect word


 [Dm]With tearful eyes I see


 The God who alw[Bb]ays will endure


 [F]Now I will celebrate


 For all [C]the thousand ways


 [Dm]That you have shown me grace


 And made my heart in g[Bb]race to stay[C]


 You made [Bb]my heart in grace to stay


 Lord, make my heart in gr[Bb]ace to stay[C]


 [F]I need You, oh I need You [F]`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/swift/i_need_you_crd.html"}]},{name:"Where the Heaven Are We (2013)",songs:[{title:"King City",chords:`Hey guys, this is my first tab and it seems like its 100% accurate (not sure) anyway


 great song, and there isn't any descent tab for it anywhere, so here it is!


 


 No Capo


 


 KING CITY SWIM DEEP


 


 Verse 1:


 [D#]I wanna be ever[B]ything that I'm not


 [F#]I wanna be rich[C#], I wanna show off


 [D#]Just a desperad[B]o, with a sour twist


 [F#]It'll all come [C#]sweet on your lips


 


 [D#]'Cause I'm in love, [B]so old


 [F#]Put your flowers down[C#], it's too cold


 [D#]F*** your romance,[B] I wanna pretend


 [F#]That Jenny Lee Lindberg is [C#]my girlfriend


 


 Chorus:


 


 [D#] [B] [F#] With the sun on my back it's[C#] a nice day


 [D#] [B] [F#] I will never to cho[C#]ose any other way


 [D#] [B] [F#] With the sun on my back it's[C#] a nice day


 [D#] [B] [F#] I will never to cho[C#]ose any other way


 


 Verse 2:


 


 I need to come home to see my friends


 I need to come down to feel insane


 I know I'm not cool right now


 I'm as high as a fool, I'm outta sight now


 


 'Cause I'm in love, so old


 Put your flowers down, it's too cold


 F*** your romance, I wanna pretend


 That Jenny Lee Lindberg is my girlfriend


 With the sun on my back it's a nice day


 I will never to choose any other way


 


 Chorus:


 


 With the sun on my back it's a nice day


 I will never to choose any other way


 With the sun on my back it's a nice day


 I will never to choose any other way


 With the sun on my back it's a nice day


 I will never to choose any other way


 


 Thanks for reading !`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/s/swim-deep/341204.html"},{title:"Francisco",chords:`Francisco


 by Swim Deep


 


 intro


 


 

 
 e|-----12----12----12----12----12----12--|
 B|--13----13----13----13----13----13-----|
 G|---------------------------------------|
 D|---------------------------------------|
 A|---------------------------------------|
 E|---------------------------------------|

 


 


 [C] [F] [C]  


 One, two, three, four


 


 [C] [F] [C]  


 [C]It's time to wake[F] up, isn't it[C]?


 'Cau[C]se yeah I've been aw[F]ay, just visitin[C]g


 I've had my [C]hopes up, baby[F]


 When I was [C]under


 I got my [C]hopes up lately[F]


 When I was [C]under


 


 Yeah[G]


 There's nothing le[F]ft


 But time in the wo[G]rld


 A second g[F]uess


 Looks fine to me [G]girl


 I just wanna [F]know


 


 Was it a d[C]ay?[F]


 Or was it for[C]ever?


 'Cause I've found the pl[C]ace[F]


 The sun shines for[C]ever


 


 [C]Sweet dreams unti[F]l you wake up[C]


 [C]Eyes closed with vi[F]sions you make up[C]


 Oh I had my ho[C]pes up, baby[F]


 When I was [C]under


 I've had my h[C]opes up, Daisy[F]


 When I was u[C]nder


 


 Yeah[G]


 There's nothing le[F]ft


 But time in the wo[G]rld


 A second g[F]uess


 Looks fine to me [G]girl


 I just wanna [F]know


 


 Was it a d[C]ay?[F]


 Or was it for[C]ever?


 'Cause I've found the pl[C]ace[F]


 The sun shines for[C]ever


 


 Was it a d[C]ay?[F]


 Or was it for[C]ever?


 'Cause I've found the pl[C]ace[F]


 The sun shines for[C]ever[C]


 [F] Shines for[C]ever


 I've found the pl[C]ace[F]


 The sun shines for[C]ever`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/s/swim-deep/380339.html"}]},{name:"A Trip to Marineville (1979)",songs:[{title:"Midget Submarines",chords:`Tabbed by:Go Back To Go


 Email:mycubiclerocks@hotmail.com


 


 Tuning: EADGBe


 


 Verses:


 

 
 e|-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-|
 B|-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-|
 G|-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-|
 D|-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-|
 A|-2-2-2-2-0-0-0-0-2-2-2-2-0-0-0-0-|
 e|-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-|

 


 


 Chorus:


 [G] [F#] [G] [A] [Ab]  


 Enjoy this great song!`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/swell_maps/midget_submarines_tab.html"}]},{name:"Mezcal Head (1993)",songs:[{title:"Duress",chords:`Duress (Swervedriver)


 


 General Notes:


 Tuned from low to high as GCDGCD. Adapted from an Adam Franklin acoustic live bootleg


 The Fez, NY City). Standard 4/4 time. Adam sings the intro guitar solo that is normally


 with the wah pedal.


 


 Chord Diagrams:


 


 Because of the alternate tuning, I will show the chord diagrams for the chords used in


 song, and give them somewhat arbitrary names. Note that some chords are high up the neck.


 have indicated in bold the fret number at the top of the chord diagram whenever it is


 the end of the neck.


 


 [Bb] [G#] [C]  

 
 ------0-----0--- ---0-----0--0--- ---0--------0--0

 


 | | | | | | 1 | 2 | | 3 5 1 | 2 3 | |


 

 
 ---------------- ---------------- ----------------

 


 | 1 | | | | | | | | | | | | | | | |


 

 
 ---------------- ---------------- ----------------

 


 2 | | 3 | 4 | | | | | | | | | | | |


 

 
 ---------------- ---------------- ----------------

 


 | | | | | | | | | | | | | | | | | |


 


 [Eb] [C4]  

 
 ---------0--0--- ---0------------

 


 6 | | | | | | 3 | | | | 1 1 Note here that


 

 
 ---------------- ---------------- Adam sometimes

 


 | 1 | | | | | | | | | | hammers down


 

 
 ---------------- ---------------- the pinky (4)

 


 2 | 3 | | 4 T | 2 3 4 | to get two


 

 
 ---------------- ---------------- sounds from

 


 | | | | | | | | | | | | this chord


 


 Intro:


 


 Strum the chords as follows, one bar each for the first two chords in each line, then


 bars for the last chord in each line.


 


 [Bb] [C] [G#]  


 [Bb] [C] [Eb]  


 [Ba] [Ba] [Ba] [Ba] [Ba]  


 [Bb] [C] [G#]  


 [Ba] [Ba] [Ba] [Ba] [Ba]  


 [Bb] [C] [Eb]  


 [Ba] [Ba] [Ba] [Ba] [Ba]  


 Bb G# C4 (repeat this chord for 3 bars)


 [Ba] [Ba] [Ba] [Ba] [Ba]  


 Verses:


 


 Note that the strumming pattern from above continues the same exact way, i.e. the G# and


 chords are strummed for two bars.


 


 [C4] And when the dawn begins to [Bb]creep,


 


 Sunlight finds you in a [C]heap,


 


 And how you wish that you could [G#]sleep,


 


 Forget the lies that you?ve been [Bb]told,


 


 Think you?re setting free your [C]soul,


 


 But you?re really getting [Eb]old.


 


 You?ve dreamt of divin? in the [Bb]sea,


 


 Your outstretched hand in front of [C]me,


 


 And how you wished that you could [G#]breathe.


 


 In the grip of ecsta[Bb]sy,


 


 When the shadows follow [C]me,


 


 And the night won?t [Eb]set you free.


 


 You wish someone could love you [Bb]less,


 


 G# (this is just one bar)


 Longing for that one caress,


 


 I see you sink under [C4]Duress.


 


 Outro:


 


 Play the C4 chord for three bars, then in this version of the song, Adam sings some


 lyrics over the C4 chord, I am not 100% sure, but I believe that they go like this:


 


 Don?t let me hear your safe life


 takin? you over, Angel


 


 On ?Angel? it switches to the Bb chord, and Adam plays the entire into section again to


 the song, finishing on the C4 chord.`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/swervedriver/duress_crd.html"},{title:"Last Train to Satansville",chords:`Last Train to Satansville (Swervedriver)


 


 General Notes:


 Standard Tuning. Adapted from a live bootleg of Adam playing acoustic guitar


 Copenhagen). Standard 4/4 time. For the Copenhagen version, Adam uses a Capo on the 2nd fret, but


 another live acoustic version he does not use a Capo, so your choice.


 


 Intro:


 


 Repeat the below pattern once without singing, and then sing the rest of the lines.


 Em rep. 5X


 

 
 E||----0---0---0---0---0---0---0---0-||
 B||----0---0---0---0---0---0---0---0-||
 G||.---0---0---0---0---0---0---0---0.||
 D||.-2---2---2---2---2---2---2---2--.||
 A||--2---2---2---2---2---2---2---2---||
 E||--0---3---0---3---0---3---0---3---||

 


 1 &amp; 2 &amp; 3 &amp; 4 &amp; 1 &amp; 2 &amp; 3 &amp; 4 &amp;


 Ooh ooh oo-ooh ooh oo-ooh


 Ooh oo-ooh


 Ooh ooh oo-ooh ooh oo-ooh


 Ooh You


 


 Verse:


 


 [G] [Em]  

 
 E|-3---3-3-----------0---0---0---0--|
 B|-3---3-3-----------0---0---0---0--|
 G|-0---0-0-----------0---0---0---0--|
 D|-0---0-0---------2---2---2---2----|
 A|-2---2-2---------2---2---2---2----|
 E|-3---3-3---------0---3---0---3----|

 


 1 &amp; 2 &amp; 3 &amp; 4 &amp; 1 &amp; 2 &amp; 3 &amp; 4 &amp;


 look like you?ve been losing sleep said a


 


 [G] [Em] [G]  

 
 E|-3---3-3-----------0---0---0---0-3---3-3----------|
 B|-3---3-3-----------0---0---0---0-3---3-3----------|
 G|-0---0-0-----------0---0---0---0-0---0-0----------|
 D|-0---0-0---------2---2---2---2---0---0-0----------|
 A|-2---2-2---------2---2---2---2---2---2-2----------|
 E|-3---3-3---------0---3---0---3---3---3-3----------|

 


 1 &amp; 2 &amp; 3 &amp; 4 &amp; 1 &amp; 2 &amp; 3 &amp; 4 &amp; 1 &amp; 2 &amp; 3 &amp; 4 &amp;


 stranger on a train I fixed him with an


 


 [Em] [C] [Em]  

 
 E|---0---0---0---0-0---0-0---0-0-0---0---0---0---0--|
 B|---0---0---0---0-1---1-1---1-1-1---0---0---0---0--|
 G|---0---0---0---0-0---0-0---0-0-0---0---0---0---0--|
 D|-2---3---2---2---2---2-2---2-2-2-2---2---2---2----|
 A|-2---2---2---2---3---3-3---3-3-3-2---2---2---2----|
 E|-0---3---0---3-------------------0---3---0---3----|

 


 1 &amp; 2 &amp; 3 &amp; 4 &amp; 1 &amp; 2 &amp; 3 &amp; 4 &amp; 1 &amp; 2 &amp; 3 &amp; 4 &amp;


 ice cold stare and said I?ve been having those dreams again


 


 Every verse is basically played the same, but sometimes Adam throws in a C chord for the


 two beats of the 1st or 2nd line of each verse, instead of just the Em riff. He also


 an extra bar of the Em riff after some of the verses. I have indicated this below.


 


 In [G]one dream there's this [Em]girl I love


 


 And we [G]dance every wakin' [Em]breath[C]


 


 And in the [G]other they've thrown me [Em]in a cell


 


 C Em X2


 And they're tryin' me for her death


 


 I'm [G]only young and [Em]young in love


 


 As I [G]hold that girl [Em]today[C]


 


 But I'm [G]old and tired and [Em]in the cell


 


 C Em X2


 And I've nigh on withered away


 


 Bridge:


 


 Play the intro again, but skip the first time through, so you only play it 4X, all with


 ?Ooh?s. Note that the first words of the next verse below (?Y?see my?) fall on the last


 and a half of the bridge.


 


 Verse:


 


 Y'see my [G]baby' gone a[Em]way too long


 


 And I'm [G]chokin' back the [Em]tears[C]


 


 Di[G]sheveled star in a [Em]burnt out bar


 And I'm [C]talkin' in my [Em]drink


 


 She [G]promised me the [Em]world and more


 


 How [G]could she do this [Em]to me?[C]


 


 And [G]now mine's tumblin' [Em]down around


 


 But at [C]least my eyes can [Em]see, And those


 


 C C* Em X2


 stars in the sky are for me


 


 *Note that for this one version of the verse, there is an extra line, which contains two


 of the C chord.


 


 So [G]as this fagged-out [Em]tinsel town


 


 Waves [G]so-long to the [Em]sun[C]


 


 I [G]lay here calmly [Em]on my bed


 


 And the [C]trigger of my [Em]gun


 


 And [G]should that no good [Em]woman show up


 


 [G]Dancin' from a [Em]dream[C]


 


 I'll [G]squeeze it twice and [Em]not think twice


 


 And [C]relish every [Em]scream


 


 Outro:


 


 On the last line of the last verse, Adam sings ?scream? an octave higher, and moves


 into the falsetto ?Ooh?s like in the Intro. ?Scream? replaces the first ?Ooh ooh?, so it


 like this:


 


 1 &amp; 2 &amp; 3 &amp; 4 &amp; 1 &amp; 2 &amp; 3 &amp; 4 &amp;


 Scre- eam oo-ooh ooh oo-ooh


 Ooh oo-ooh


 Ooh ooh oo-ooh ooh oo-ooh


 Ooh ooh ooh ooh


 ooh


 


 Gradually slow down the last few bars until the end.`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/swervedriver/last_train_to_satansville_crd.html"}]},{name:"Strict Joy (2009)",songs:[{title:"Feeling the Pull",chords:`[C] [C/B] [Am] [G] [F]  

 
 |--3---3---3---3---3--|
 |--1---1---1---1---1--|
 |--0---0---2---0---2--|
 |--2---0---2---0---3--|
 |--3---2---0---2---0--|
 |--x---x---x---3---1--|

 


 


 Intro: C C/B Am G F G F G x2


 


 Verse:


 Well I'm [C]heading back to [C/B]pack a bag


 To [Am]head out on the r[G]oad


 To take a[F]way what I know [G]is mine[F] [G]


 And I'm [C]running down and [C/B]past the yellow h[Am]ouse


 With Joe i[G]nto the breeze where [F]no one seems to care[G] [F] [G]


 


 Chorus:


 


 Am G C Hammer on D string second fret


 And I'm feeling the pull


 Dragging me off[Am] again[G] [C]


 And I'm feeling s[Am]o small[G] [C]


 Against the sky[Am] tonigh[G]t[C]


 


 Verse:


 


 Well [C]stories of an [C/B]open light


 And [Am]every time we [G]work ourselves [F]up into a ra[G]ge[F] [G]


 We [C]smash and grab


 And [C/B]pull the handle[Am] no one says but [G]everybody


 [F]Wants to be the one[G] just c[F]limbing out[G]


 


 And I'm feeling th[Am]e pull[G] [C]


 Dragging me off[Am] again[G] [C]


 And I'm feeling so [Am]small [G] [C]


 Against the big [Am]sky ton[G]ight[C]


 Tonight, yeah[Am] [G] [C]


 


 Instrumental Verse Chords


 


 And I'm feeling the[Am] pull[G] [C]


 Dragging me o[Am]ff agai[G]n[C]


 And I'm feeling[Am] so sma[G]ll[C]


 Against the big [Am]sky ton[G]ight[C]


 


 And I'm feeling the [Am]pull[G] [C]


 Dragging me on[Am] again[G] [C]


 And I'm feeling so[Am] small[G] [C]


 Against the big moon sk[Am]y tonig[G]ht[C]


 Tonight, o[Am]h[G] [C]`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/t/the-swell-season/378475.html"},{title:"Low Rising",chords:`-------------------------------------------------------------------------------

 


 LOW RISING - The Swell Season


 

 
 -------------------------------------------------------------------------------

 


 Tabbed by: Anonymous


 


 Tuning: Standard


 


 Intro:


 

 
 e|---------------------------------------------------------------------------|
 B|---------------------------------------------------------------------------|
 G|---------------------------------------------------------------------------|
 D|--------9h11p9------9-------9h11p9------9----------------------------------|
 A|-9/11-----------11-----9/11-----------11-----------------------------------|
 E|---------------------------------------------------------------------------|
 e|---------------------------------------------------------------------------|
 B|---------------------------------------------------------------------------|
 G|---------------------------------------------------------------------------|
 D|-----2h4p2------2-------2h4p9------2---------------------------------------|
 A|-2/4-----------4-----2/4-----------4---------------------------------------|
 E|---------------------------------------------------------------------------|

 


 


 Verse 1:


 [E]I wanna sit you down and talk


 


 I wanna pull back the veils


 And [C#m]find out what it is I've done wrong


 [E]I wanna tear these curtains down


 I want you to meet me somew[C#m]here


 


 Tonight in this old tourist town


 


 And we'll go


 


 Chorus:


 [A]Low risi[C#m]ng[E]


 


 [E]'Cause we've gotta come up


 


 [E]We've gotta come up


 [A]Low ris[C#m]ing[E]


 


 [E]'Cause I fear we've had enough


 


 [A]Low ris[C#m]ing[E]


 


 [E]'Cause there's no further for us to fall


 


 [A]Low r[C#m]ising


 


 [F#m]Oh, for the love of you[E]


 


 Verse 2:


 [E]I wanna take you to the rock


 


 [E]I wanna jump right in


 


 And see [C#m]what that big ocean's got


 


 [E]I wanna turn this thing around


 


 [E]I wanna drink with you


 


 All [C#m]night, till we both fall down


 


 Till we go


 


 Chorus:


 [A]Low risi[C#m]ng[E]


 


 [E]'Cause we've gotta come up


 


 [E]We've gotta come up


 


 [A]Low ris[C#m]ing[E]


 


 [E]'Cause there's no further for us to fall


 


 [A]Low ris[C#m]ing[E]


 


 [E]'Cause I fear we've had enough


 


 [A]Low r[C#m]ising


 


 [F#m]Oh, for the love of you[E]


 


 [E]Low Rising


 


 (solo)


 (keep playing E and C#m)


 


 [A]Low risi[C#m]ng[E]


 


 [E]'Cause we've gotta come up


 


 [E]We've gotta come up


 [A]Low ris[C#m]ing[E]


 


 [E]'Cause I fear we've had enough


 


 [A]Low ris[C#m]ing[E]


 


 [E]'Cause there's no further for us to fall


 


 [A]Low r[C#m]ising


 


 [F#m]Oh, for the love of you[E]


 


 [(]  


 For the love of you[E]


 For the love of you[C#m]


 Low rising, low rising[E]


 I wanna sit you down and talk[C#m]


 I wanna sit you down and talk about it now [E]


 


 E, C#m, E, C#m, E, C#m, E`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/t/the-swell-season/231812.html"}]},{name:"My Everest (2007)",songs:[{title:"Keep Looking Where Your Eyes Are Looking Now",chords:`I'm still a little iffy on the intro, but I do think I have most of it. You might


 need to tweak it here and there to make it how you would like it, but if not, play


 it how I do. I also made some "chords" you can play with the song so check them out first.


 


 A5 (577000)


 F#m (044000)


 AG (046600)


 B (024400)


 E (079900)


 B1 (799000)


 


 Intro


 

 
 ------------------------------------------------0--|
 2~----------------------------------------------0--|
 ---2~1----2-4-4/6~4-2~4-6-6p4/2-4/6/1-2-4-2---2-0--|
 -------4------------------------------------4---7--|
 0~----------------------------------------------7--|
 ------------------------------------------------5--|

 


 ( Tab from: http://www.guitartabs.cc/tabs/t/the_swellers/keep_looking_where_your_eyes_are_looking_now_tab.html )


 [A5]Six of us pac[F#m]k, in the c[AG]ar and stare out at the stars[A5]


 Wonderi[B]ng if you're up t[E]here[B1]


 [A5]When I heard the ne[B]ws, I went n[E]umb, at first in denial[A5]


 but someh[B]ow, I kn[E]ew


 Don't look [A5]down, set yourself up for f[E]alling


 Don't look b[A5]ack, the past is n[AG]ever good enou[B]gh


 Don't look [A5]up, you won't find [AG]answers in the c[B]louds


 Keep l[A5]ooking where your e[B1]yes are looking,[A5] now`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/t/the_swellers/keep_looking_where_your_eyes_are_looking_now_tab.html"},{title:"Stars",chords:`-------------------------------------------------------------------------------

 


 Stars - The Swellers


 

 
 -------------------------------------------------------------------------------

 


 Tabbed by: santiago


 Email: chagoaz@hotmail.com


 


 Tuning: half step down


 


 You can use this video as a guide:


 http://www.alterthepress.com/2010/05/atp-acoustic-session-swellers.html


 


 On the intro after G play a slide on the E string from the third


 fret to the fifth fret.


 


 On the chorus from G to Em you should do like a walkdown from third fret, second fret, third fret.


 


 Intro


 [G] [Bm] [G] [Bm] [C] [D] [G] [Bm] [C]  


 Verse:


 [G]I've got these [Bm]chords[G]


 I can't play anym[F#m]ore


 cause they're al[C]l that I've k[D]nown for so lo[G]ng.


 Now they [Bm]ruin all the [C]songs.


 


 T[G]his one's for [Bm]you.


 [G]Yeah, this one's for y[Bm]ou.


 [C]The old songs must be [D]hard to beli[G]eve.


 I've rui[Bm]ned everything.


 


 Chorus:


 [C]You'll be someone [D]I,


 

 
 G Em --------------- walkdown

 


 I can learn from.


 [Am]And over your vo[D]ice,


 ( Tab from: http://www.guitartabs.cc/tabs/t/the_swellers/stars_crd_ver_2.html )


 I'm screaming,


 [G]"Love, it takes [D]time, it takes t[Em]ime."


 I wish [C]I could take my tim[D]e and your worries a[Em]way.[G] [C]


 I'll take my [D]time and your worries aw[G]ay.


 


 Intro


 


 Verse


 [G]I'll be okay[Bm] [G]


 cause I've got the s[Bm]tars


 And you [C]said you've been f[D]ree for some t[G]ime


 and you pr[Bm]ove it with the sc[C]ars.


 [G]This one�s for y[Bm]ou.[G]


 Yeah, this one's for [Bm]you.


 If I'm l[C]ost before you h[D]ear all of thi[G]s[Bm] [C]


 


 Chorus:


 [C]You'll be someone [D]I,


 

 
 G Em --------------- walkdown

 


 I can learn from.


 [Am]And over your vo[D]ice,


 


 I'm screaming,


 [G]"Love, it takes [D]time, it takes t[Em]ime."


 I wish [C]I could take my tim[D]e and your worries a[Em]way.[G] [C]


 I'll take my [D]time and your worries aw[G]ay.


 


 Bridge:


 [G]This one's for y[Bm]ou.[G]


 Bm (this part is played louder)


 This one's for you.


 


 Chorus Chords for the solo:


 [C] [D] [G] [Em] [Am] [D] [G] [D] [Em] [C] [D] [Em] [G] [C] [D] [G]  


 [G]I'll be ok[Bm]ay[G]


 

 
 Bm -----------end here

 


 cause I've got the stars.


 


 :)`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/t/the_swellers/stars_crd_ver_2.html"}]},{name:"Stalled Out in the Doorway (2006)",songs:[{title:"Sorry Again",chords:`http://www.tomiswickmusic.com/


 


 

 
 ----------------------------------------------------------------------------

 


 Sorry Again - Tomi Swick


 

 
 ----------------------------------------------------------------------------

 


 


 Tabbed by: Kevin Fortier


 Email: hey_man2000@hotmail.com


 


 Tuning: EADGBe


 


 C/G (x32013)


 Fadd9 (x03213)


 G/C (320013)


 G (320003) Make sure it's that and not (320033) which is also G.


 G6 (320000)


 Cadd9/F (x32031)


 Am (x02210)


 Em (022000)


 * means half beat


 


 Intro


 C/G - Fadd9 - G/C - G* - G/C* x2


 


 Verse


 C/G Fadd9 G/C G* G/C*


 In this serious debate I�m,


 [Fadd9] [G/C]Caught low and d[C/G]isarmed,[Cadd9/F]


 C/G Fadd9 G/C G* G/C*


 And I never mean to make you cry,


 [Fadd9] But this s[G/C]moke rings al[C/G]arms,[Cadd9/F]


 


 ( Tab from: http://www.guitartabs.cc/tabs/t/tomi_swick/sorry_again_crd.html )


 Chorus


 Am Em F F* G6*


 �Cause I would walk straight into the thundering,


 Am Em F F* G6*


 Just to prove that I am still a man,


 C/G Fadd9 G/C G* G/C*


 In this serious debate I�m,


 [Fadd9] Well I�m [G/C]sorry agai[C/G]n,[Cadd9/F]


 


 C/G - Fadd9 - G/C - G* - G/C* x2


 


 C/G Fadd9 G/C G* G/C*


 Yeah, you�re just the same the likes of you,


 C/G Fadd9 G/C G* G/C*


 Oh I�ve set it off again now,


 C/G Fadd9 G/C G* G/C*


 Maybe my mistake for judging you,


 [Fadd9] Maybe n[G/C]ow I�ll say I�m w[C/G]rong. y[Cadd9/F]eah.


 


 Am Em F F* G6*


 �Cause I would walk straight into the thundering,


 Am Em F F* G6*


 Just to prove that I am still a man,


 C/G Fadd9 G/C G* G/C*


 In this serious debate I�m,


 [Fadd9] Well I�m [G/C]sorry agai[C/G]n,[Cadd9/F]


 [Fadd9] Well I�m [G/C]sorry agai[C/G]n,[Cadd9/F]


 [Fadd9] Well I�m [G/C]soorrryy a[C/G]gain,[Cadd9/F]


 


 C/G x 4


 


 Hope you enjoy! Any comments/questions email me.`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/t/tomi_swick/sorry_again_crd.html"},{title:"Still in the Light",chords:`Song: Still In The Light


 Artist: Tomi Swick


 Album: Stalled Out In The Doorway


 Tabbed: Ryan Lloyd rdlloyd@hotmail.com


 


 


 Chords Used:


 


 [D] [Em7] [G] [A]  

 
 e|---2----3----3----0---|
 B|---3----3----3----2---|
 G|---2----0----0----2---|
 D|---0----2----0----2---|
 A|--------2----2----0---|
 E|-------------3--------|

 


 


 


 Intro and 1st Verse


 


 

 
 e|-------3---2-------------------3---2--------------|
 B|-----3---3-----3--2--2-3-----3---3-----3--2--2-3--|
 G|--------------------------------------------------|
 D|--0-----------------------2-----------------------|
 A|--------------------------------------------------|
 E|--------------------------------------------------|
 e|-------3---2-------------------3---2--------------|
 B|-----3---3-----3--2--2-3-----3---3-----3--2--2-3--|
 G|--------------------------------------------------|
 D|--------------------------------------------------|
 A|--------------------------0-----------------------|
 E|--3-----------------------------------------------|

 


 


 Am I mistaken


 Or maybe just high?


 To miss your sad face


 To see you walk by


 See I'm busy but I


 I don't bat an eye


 Tell you now though


 Maybe I'll try


 


 


 Chorus:


 


 You're still in the [G]light


 You're still in my [Em7]eyes


 So don't say [D]goodbye [A]love


 You see me in[G]side


 Don't try to [A]hide away


 


 


 Verse 2:


 


 [D]Am I mistaken[Em7]


 Or maybe just [G]high?[A]


 [D]Kiss your sad face[Em7]


 To stop you from [G]crying[A]


 [D]See I'm busy but I[Em7]


 I don't bat an e[G]ye[A]


 [D]Tell you now though [Em]


 Maybe I'll [G]try [A]


 


 Chorus:


 


 You're still in the [G]light


 You're still in my [Em7]eyes


 So don't say [D]goodbye [A]love


 You see me in[G]side


 Don't try to [A]hide away


 


 Bridge:


 


 [G]I'm [D]sure you [A]don't ex[Em]pect it


 [G]I [D]can be [A]unex[Em]pected oh


 [G]I'd [D]shut the [A]whole world [Em]down


 [Em]just to tell you


 [A]just to say I see you now.


 


 [D] [Em7] [G] [A]  


 [D] [Em7] [G] [A]  


 


 Chorus:


 


 You're still in the [G]light


 You're still in my [Em7]eyes


 So don't say [D]goodbye [A]love


 You see me inside[G]


 Dont try to hide[Em7]


 Just stay a w[D]hile[A]


 You're still in the [G]light


 You're still in my [Em7]eyes


 So don't say [D]goodbye [A]love


 You see me in[G]side


 Don't try to [A]hide away


 


 [D]Am I mistaken[Em7]


 Or maybe just [G]high?[A]


 


 


 questions or comments to rdlloyd@hotmail.com`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/t/tomi-swick/97142.html"}]},{name:"Taylor Swift (2006)",songs:[{title:"Tim McGraw",chords:`Tabbed for 3 guitars.


 


 I compiled this of tabs and chords i found and put it together in an arrangement


 for 3 guitars. Thanks to everyone whose spot-on tabs helped me put this together.


 All credit goes to you.


 


 Tim McGraw - Taylor Swift


 


 Guitar 1 - standard tuning - finger picking followed by the same chords as guitar 2


 Guitar 2 - standard tuning - chords used C,Am,FG


 Guitar 3 - capo 5 - chords used G, Em7, Cadd9, D/Dsus4/Dsus2


 


 

 
 ---intro---

 


 


 [G] [Em7] [Cadd9] 


 [C] [Am] [F]  

 
 e-----------------------------------------------------------------|
 b---3^5^3-----------5------3^5^3-------------3^5^3------3---------|
 g-------------5---------------------5---2-------------5-----------|
 d-----------------------------------------------------------------|
 a-----------------------------------------------------------------|
 E-----------------------------------------------------------------|

 


 


 [Dsus4]  


 [G]  

 
 e---------------------------------------------------------------|
 b---3^5^3--------3----3^1--1--1--1^0^1--------------------------|
 g-----------5---------------------------------------------------|
 d---------------------------------------------------------------|
 a---------------------------------------------------------------|
 E---------------------------------------------------------------|
 ---Verse---

 


 


 [G] [Em7]  


 [C] He said the way my b[Am]lue eyes shined


 [Cadd9]  


 Put those Georgia[F] stars to shame that night


 [Dsus4] [D]  


 I said, that?s[G] a lie


 [G] [Em7]  


 [C] Just a boy in a[Am] Chevy truck that had a tendency


 [Cadd9] [Dsus4] [D] 


 Of get[F]ting stuck on back roads [G]at night


 [Dsus2] [Cadd9] [Dsus4] [D] [Dsus2] 


 And I was right[F] there beside him all summe[C]r long


 [Cadd9] [Em7] [Cadd9] [D] 


 And [F]then the time we woke up to find that summer gone, but[G]


 


 Chorus:


 


 [G] [Em7] 


 When you think [C]Tim McGraw, I hope you think my f[Am]avorite song


 [Cadd9]  


 The one we danced to all[F] night long


 [Dsus4] [D] [Dsus2]  


 The moon like a spot[G]light on the lake


 [G] [Em7] 


 When you think [C]happiness, I hope you think that li[Am]ttle black dress


 [Cadd9] [Dsus4] [D] 


 Think of my he[F]ad on your chest and my old faded blue jeans,[G]


 [Dsus2] [Cadd9] [D] [G] 


 When you think Tim Mc[F]Graw ... I hope you think of me[C]


 


 [G] [Em7]  


 [C] September saw a month of tea[Am]rs and thanking God


 [Cadd9] [Dsus4] [D] 


 That you wer[F]en?t here, to see me like that[G]


 [G] [Em7] [Cadd9] 


 [C] But in a box beneath my bed [Am]is a letter that you n[F]ever read


 [Dsus4] [D]  


 From three summers back[G]


 [Cadd9] [Dsus4] [D] [Dsus2] 


 [F] It?s hard not to find it all a little bitterswee[C]t


 [Cadd9] [Em7]  


 And loo[F]king back on all of that


 [Cadd9] [D]  


 It?s nice[G] to believe


 


 [G] [Em7] 


 When you think[C] Tim McGraw, I hope you think my favo[Am]rite song


 [Cadd9]  


 The one we danced to all [F]night long


 [Dsus4] [D] [Dsus2]  


 The moon like a spotlight on the l[G]ake


 [G] [Em7] 


 When you think[C] happiness, I hope you think that lit[Am]tle black dress


 [Cadd9] [Dsus4] [D] 


 Think of my head[F] on your chest and my old faded blue jeans[G],


 [Dsus2] [Cadd9] [D] [G] 


 When you think Tim Mc[F]Graw ... I hope you think of me[C]


 


 [Cadd9]  


 And I?m back[F] for the first time since then


 [Dsus4] [D] [Dsus2]  


 I?m stan[G]ding on your street,


 [Cadd9] [Em7]  


 And there?s a lett[F]er left on your doorstep


 [Cadd9] [Dsus4] [D] 


 And the first[G] thing that you?ll read...


 


 [G] [Em7] 


 When you think [C]Tim McGraw, I hope you think my [Am]favorite song


 [Cadd9]  


 Someday you?ll turn your r[F]adio on


 [Dsus4] [D]  


 I hope it takes [G]you back to that place


 [G] [Em7] 


 When you think h[C]appiness, I hope you think that li[Am]ttle black dress


 [Cadd9] [Dsus4] [D] 


 Think of my head[F] on your chest and my old faded[G] blue jeans,


 [Dsus2] [Cadd9] [D] [G] 


 When you think Tim Mc [F]Graw ... I hope you think of me[C]


 [Em7] [Cadd9]  


 Oh, think of [Am]me. Oooh.


 


 [G] [Em7]  


 [C] He said the way my blue eyes shin[Am]ed


 [Cadd9]  


 Put those Georgia stars to shame[F] that night


 [Dsus4] [D] [G]  


 I said, that?s a lie[G]`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/t/taylor_swift/tim_mcgraw_tab_ver_3.html"},{title:"Picture to Burn",chords:`-------------------------------------------------------------------------------

 


 PICTURE TO BURN � Taylor Swift


 

 
 -------------------------------------------------------------------------------

 


 Tabbed by: Krista


 Email: leavethepieces@gmail.com


 


 Tuning: Standard


 


 [G] [Am] [C] [D] [Cmaj9]  

 
 e|---3---0---0---2---0---|
 B|---3---1---1---3---1---|
 G|---0---2---0---2---0---|
 D|---0---2---2---0---0---|
 A|---2---0---3---x---2---|
 E|---3---0---0---x---3---|

 


 


 G Am C D x2


 


 [G] State the [Am]obvious, I [C]didn�t get my [D]perfect fantasy


 [G] I rea[Am]lize you love your[C]self more than you could [D]ever love me


 [G] So go and [Am]tell your fr[C]iends that I�m ob[D]sessive and [G]crazy


 That�s [Am]fine; I�ll tell [C]mine you�re [D]gay


 And by the [C]way...


 


 I hate that [G]stupid old [Am]pickup truck


 You [C]never let me [D]drive


 You�re a [G]redneck, [Am]heartbreak


 Who�s [C]really bad at [D]lying


 [G]So watch me [Am]strike a [C]match


 On all my [D]wasted time


 As [C]far as I�m concerned you�re


 [D]Just another picture to burn


 


 [G]( [Am]Tab[C] f[D]rom: http://www.guitartabs.cc/tabs/t/taylor_swift/picture_to_burn_crd.html )


 [G] There�s no [Am]time for tears,


 I�m just [C]sitting here [D]planning my revenge


 [G] There�s nothing [Am]stopping me


 From [C]going out with [D]all of your best friends


 [G] And if you [Am]come aro[C]und saying [D]sorry to me


 My [G]daddy�s gonna [Am]show you how [C]sorry you�ll [D]be


 


 Cause I hate that [G]stupid old [Am]pickup truck


 You [C]never let me [D]drive


 You�re a [G]redneck, [Am]heartbreak


 Who�s [C]really bad at [D]lying


 [G]So watch me [Am]strike a [C]match


 On all my [D]wasted time


 In [C]case you haven�t heard, you�re


 [D]Just another picture to burn


 


 [G] [Am] [C] [D]  


 And [C]if you�re missing me,


 You�d better [D]keep it to yourself


 Cause [C]coming back around [Cmaj9]here


 Would be [D]bad for your health...


 


 Cause I hate that [G]stupid old [Am]pickup truck


 You [C]never let [D]me drive


 You�re a [G]redneck, [Am]heartbreak


 Who�s [C]really bad at [D]lying


 [G]So watch me [Am]strike a [C]match


 On all my [D]wasted time


 In [C]case you haven't heard


 I [D]really really hate that


 


 [G]Stupid old [Am]pickup truck


 You [C]never let me [D]drive


 You�re a [G]redneck, [Am]heartbreak


 Who�s [C]really bad at [D]lying


 [G]So watch me [Am]strike a [C]match


 On all my [D]wasted time


 As [C]far as I�m concerned you�re


 [D]Just another picture to burn[G] [Am]


 


 [C]Burn, burn, [D]burn, baby, [G]burn[Am]


 You�re [C]just another [D]picture to [G]burn[Am] [C]


 [D] Baby, [G]burn...`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/t/taylor_swift/picture_to_burn_crd.html"}]},{name:"Blue Jeans a’Swinging (1964)",songs:[{title:"Ol'Man Mose",chords:`Intro:


 Am Bm Cm Bm Am 3x


 break


 Am Bm Cm Bm Am 3x


 


 [Am]Once there lived an old man


 And he had a very funny nose


 He lived in a little log hut


 Called him [E]ol' man [Am]Mose


 [Am]Well I went down to his cabin


 And I look down through the door


 Well there I saw a little ol' man


 Lying [E]on the [Am]floor


 Well wether if was dead or not


 I really don't know


 But one thing that I'm certain of


 Ain't gonna [E]do it no [Am]more


 


 [Am]Because I found out o[E]l' man


 [Am]All about o[E]l' man


 You k[Am]now I found out [E]ol' man


 [E]That ol' man Mose is [Am]dead


 


 [C]We believe Mose kicked the bucket


 [G]We believe oh Mose kicked the bucket


 [C]We believe yeah Mose kicked the bucket


 And [E]we believe is [Am]dead


 


 Repeat above 3 times then:


 


 And [E]we believe is [Am]dead


 


 Written by Louis Armstrong.


 This version by The Swinging Blue Jeans.http://www.youtube.com/watch?v=gQ3n1lKdhtM


 


 Patricia Norman's version where the first time ever the word "fuck" is being used on a recording.


 At least that's what it sounds like since the recording.


 Listen at 1:08


 http://www.youtube.com/watch?v=GbDKNHMDrEU`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/s/swinging-blue-jeans/345126.html"},{title:"All I Want Is You",chords:`Intro:


 [E] [B7]  


 [E] [B7]  


 [E]I?m more than satis[B7]fied


 [E]When you?re by my [F#m]side


 [Am]No one else will [B7]do


 All I want is [E]you


 


 [E]I tried to let you [B7]know


 [E]Though my feelings [F#m]show


 [Am]Tell me what to [B7]do


 All I want is [E]you


 


 [Am]Whenever we?re apart


 I k[G#m]now just what to [E7]say


 [Am]Whenever you are near


 [F#]Words won?t come my [B7]way


 


 [E]My dreams are yours to [B7]share


 [E]Show me that you [F#m]care


 [Am]Say you love me [B7]too


 All I want is [E]you


 


 Solo


 [E] [B7]  


 [E] [F#m]  


 [Am] [B7]  


 [E] [E7]  


 [Am]Whenever we?re apart


 I k[G#m]now just what to [E7]say


 [Am]Whenever you are near


 [F#]Words won?t come my [B7]way


 


 [E]My dreams are yours to [B7]share


 [E]Show me that you [F#m]care


 [Am]Say you love me [B7]too


 All I want is [E]you[B7]


 All I want is [E]you[B7]


 All I want is [E]you


 


 http://www.allmusic.com/album/blue-jeans-a-swinging-mw0000851680`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/swinging_blue_jeans/all_i_want_is_you_crd.html"}]},{name:"Through a Fogged Glass (2011)",songs:[{title:"Sleeping Moon",chords:`Capo V


 


 Intro


 [Am] [C] [G]  


 [Am]You are a [C]sleeping [G]moon


 [Am]And I am a [C]blade of [G]grass


 [Am]You are the [C]fog that [G]lives


 [F]And we are a [C]river that [G]runs x3


 


 [Am] [C] [G]  


 [Am]You are a [C]drifting [G]sound


 [Am]And I am a [C]veil of [G]glass


 [Am]You are the [C]sea that [G]sings


 [F]And we are a [C]river that [G]runs x3


 


 [F] [C] [G]`,url:"https://www.chordie.com/chord.pere/www.azchords.com/w/wesswing-tabs-62788/sleepingmoon1-tabs-864801.html"}]},{name:"Subject to Change (2002)",songs:[{title:"Walk Away",chords:`[----0-----0-----0-----0-----0-----0---------|
 [--------------------------------------------|
 [--------------------------------------------| play 2X
 [2-----0-----2-----3-----7-----6-----2-0-2-3-|
 [--------------------------------------------|
 [--------------------------------------------|

 


 


 Verse:


 

 
 [----0-----0-----0-----0-----0-----0---------|
 [--------------------------------------------|
 [--------------------------------------------| play 4X
 [2-----0-----2-----3-----7-----6-----2-0-2-3-|
 [--------------------------------------------|
 [--------------------------------------------|

 


 


 Second guitar plays this 3rd and 4th time palm muted (distortion)


 

 
 [--------------------------------------------|
 [--------------------------------------------|
 [--------------------------------------------|
 [--------------------------------------------|
 [--------------------------------------------|
 [2-2-2-0-0-0-2-2-2-3-3-3-7-7-7-6-6-6-2-0-2-3-|

 


 


 Pre-chorus (distortion):


 

 
 [------------------------x-x-|
 [------------------------x-x-|
 [------------------------x-x-|
 [2-----2-----2-----2-----x-x-|
 [2-----2-----2-----2-----x-x-|
 [2-----2-----2-----2-----x-x-|
 [---------------------------------|
 [---------------------------------|
 [---------------------------------|
 [5-5-5-5-5-5-5-5-5-5-5-5-5-7/9-0--|
 [5-5-5-5-5-5-5-5-5-5-5-5-5-5/7-0--|
 [5-5-5-5-5-5-5-5-5-5-5-5-5-----0--|

 


 


 Chorus (distortion):


 

 
 [--------------------------------|
 [--------------------------------|
 [--------------------------------|
 [2-2-2-2-2-2-2-2-5-5-5-5-5-5-5-5-|
 [2-2-2-2-2-2-2-2-5-5-5-5-5-5-5-5-|
 [2-2-2-2-2-2-2-2-5-5-5-5-5-5-5-5-|
 [--------------------------------|
 [--------------------------------|
 [--------------------------------|
 [2-2-2-2-2-2-2-2-5-5-5-5-5-7/9-0-|
 [2-2-2-2-2-2-2-2-5-5-5-5-5-5/7-0-|
 [2-2-2-2-2-2-2-2-5-5-5-5-5-----0-|
 [--------------------------------|
 [--------------------------------|
 [--------------------------------|
 [2-2-2-2-2-2-2-2-7-7-7-7-7-7-7-7-|
 [2-2-2-2-2-2-2-2-7-7-7-7-7-7-7-7-|
 [2-2-2-2-2-2-2-2-7-7-7-7-7-7-7-7-|
 [--------------------------------|
 [--------------------------------|
 [--------------------------------|
 [3-3-3-3-3-3-3-3-5-5-5-5-5-------|
 [3-3-3-3-3-3-3-3-5-5-5-5-5-------|
 [3-3-3-3-3-3-3-3-5-5-5-5-5-------|

 


 


 Verse


 


 Pre-chorus


 


 Chorus


 


 Bridge (distortion):


 

 
 [--------------------|
 [--------------------|
 [--------------------|
 [2-0-----------------|
 [----2-1-0-----------|
 [----------5-2-----0-|
 [----------------------------|
 [----------------------------|
 [----------------------------|play 3X (1st and 2nd time palm muted)
 [------------2---3-----------|
 [----------------------------|
 [2-2-2-0-0-0---------0---2-3-|
 [------------------------------------------------|
 [------------------------------------------------|
 [------------------------------------------------|
 [------------2---3---3-3-3-3-3-3-3-3-3-3-3-3-3-3-|
 [--------------------3-3-3-3-3-3-3-3-3-3-3-3-3-3-|
 [2-2-2-0-0-0---------3-3-3-3-3-3-3-3-3-3-3-3-3-3-|

 


 


 chorus


 (add this after chorus) (distortion)


 

 
 [--------------------------------|
 [--------------------------------|
 [--------------------------------|
 [3-3-3-3-3-3-3-3-5-5-5-5-5-5-5-5-|
 [3-3-3-3-3-3-3-3-5-5-5-5-5-5-5-5-|
 [3-3-3-3-3-3-3-3-5-5-5-5-5-5-5-5-|

 


 


 Ending (distortion):


 

 
 [--------------------------------------------|
 [--------------------------------------------|
 [--------------------------------------------| play 2X
 [2-2-2-0-0-0-2-2-2-3-3-3-7-7-7-6-6-6-2-0-2-3-|
 [2-2-2-0-0-0-2-2-2-3-3-3-7-7-7-6-6-6-2-0-2-3-|
 [2-2-2-0-0-0-2-2-2-3-3-3-7-7-7-6-6-6-2-0-2-3-|
 [----------------------|
 [----------------------|
 [----------------------|
 [--2-0-----------------|
 [------2-1-0---------0-|
 [2-----------5-2-----0-|`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/switched/walk_away_tab.html"},{title:"Inside",chords:`[--------------------------------------------
 [--------------------------------------------
 [10-10-10-----10----10-10-10-10-10-----8-----
 [10-10-10-----10----10-10-10-10-10-----8----- 4X
 [-8--8--8------8-----8--8--8--8--8-----6-----
 [--------------------------------------------

 


 


 regular distortion


 

 
 [--------------------------------
 [--------------------------------
 [--------------------------------
 [3-3-3-----3---3-3-3-3-3---1----- 3X
 [3-3-3-----3---3-3-3-3-3---1-----
 [3-3-3-----3---3-3-3-3-3---1-----
 [--------------------------------
 [--------------------------------
 [--------------------------------
 [3-3-3-----3---3-3-1-0-----------
 [3-3-3-----3---3-3-----1-0-------
 [3-3-3-----3---3-3---------3-1---

 


 


 pause- âBreak my frustration...â


 


 (distortion, palm muted)


 

 
 [----------
 [----------
 [----------
 [----------
 [3---------
 [3---1-3-1-

 


 


 Verse (distortion, palm muted):


 

 
 [------------------------------------------------
 [------------------------------------------------
 [------------------------------------------------
 [------------------------------------------------ 2X
 [--------------------------------------1---0-----
 [3-3-5-5-1-1---3---1-3-1-3-3-5-5-1-1---------3-1-

 


 


 Pre-chorus (distortion, palm muted):


 

 
 [------------------------------------------------
 [------------------------------------------------
 [------------------------------------------------
 [3-3-5-5-1-1---3---1-3-1-3-3-5-5-1-1-------------
 [--------------------------------------1---0-----
 [--------------------------------------------3---

 


 


 pause


 


 Chorus (distortion):


 

 
 [--------------------------------
 [--------------------------------
 [--------------------------------
 [3-------3-------3--------------- 3X
 [3-------3-------3---------------
 [3-------3-------3---------1-----
 [--------------------------------
 [--------------------------------
 [--------------------------------
 [3-------3-------3-1-0-----------
 [3-------3-------3-----1-0-------
 [3-------3-------3---------3-1---
 [--------------------------------
 [--------------------------------
 [--------------------------------
 [3-------3-------3--------------- 3X
 [3-------3-------3---------------
 [3-------3-------3---------1-----
 [--------------------------------
 [--------------------------------
 [--------------------------------
 [3-------3-3-3-----3-3-----------
 [3-------3-3-3-------------8-8---
 [3-------3-3-3-4-------6---------

 


 end of chorus


 


 (no distortion)


 

 
 [-----------
 [-----------
 [-----------
 [3----------
 [3----------
 [3----------

 


 


 verse


 


 Post-verse (distortion)


 

 
 [------------------------------------------------
 [------------------------------------------------
 [------------------------------------------------
 [3-3-5-5-1-1---3---1-3-1-3-3-5-5-1-1-------------
 [3-3-5-5-1-1---3---1-3-1-3-3-5-5-1-1---1---0-----
 [3-3-5-5-1-1---3---1-3-1-3-3-5-5-1-1---------3-1-
 [------------------------------------------------
 [------------------------------------------------
 [------------------------------------------------
 [3-3-5-5-1-1---3---1-3-1-3-3-5-5-1-1-------------
 [3-3-5-5-1-1---3---1-3-1-3-3-5-5-1-1---1---0-----
 [3-3-5-5-1-1---3---1-3-1-3-3-5-5-1-1---------3---

 


 


 chorus


 


 Bridge (distortion with low bass/high treble):


 

 
 [--------------------------------------------
 [--------------------------------------------
 [10-10-10-----10----10-10-10-10-10-----8-----
 [10-10-10-----10----10-10-10-10-10-----8----- 3X
 [-8--8--8------8-----8--8--8--8--8-----6-----
 [--------------------------------------------

 


 [ Tab from: bttp://www.guitartabs.cc/tabs/s/sw1tcbed/inside_tab.btml ] 


 

 
 [--------------------------------------------
 [--------------------------------------------
 [10-10-10-----10----10-10-10-10-10-----------
 [10-10-10-----10----10-10-10-10-10-----1----- 4X
 [-8--8--8------8-----8--8--8--8--8-----1-----
 [--------------------------------------1-----

 


 ^enter distortion here


 


 play this 2X


 

 
 [----------------------bend this note--------------------------
 [------------------------|-------------------------------------
 [------------------------|-------------------------------------
 [------------------------V-------------------------------------
 [--------------------------------------------------------------
 [1---3-1-3-3-------------7---------------1-3-1-----3-1---3-1---
 [--------------------------------
 [--------------------------------
 [--------------------------------
 [3-3-3-----3---3-3-3-3-3---1----- 4X
 [3-3-3-----3---3-3-3-3-3---1-----
 [3-3-3-----3---3-3-3-3-3---1-----
 [------------------------------------------------
 [------------------------------------------------
 [------------------------------------------------
 [3-3-5-5-1-1---3---1-3-1-3-3-5-5-1-1---3---1-3-1-
 [3-3-5-5-1-1---3---1-3-1-3-3-5-5-1-1---3---1-3-1-
 [3-3-5-5-1-1---3---1-3-1-3-3-5-5-1-1---3---1-3-1-
 [------------------------------------------------
 [------------------------------------------------
 [------------------------------------------------
 [3-3-5-5-1-1---3---1-3-1-3-3-5-5-1-1-------------
 [3-3-5-5-1-1---3---1-3-1-3-3-5-5-1-1---1---0-----
 [3-3-5-5-1-1---3---1-3-1-3-3-5-5-1-1---------3---

 


 


 Pre-Ending (distortion with low bass/high treble):


 

 
 [--------------------------------
 [------------------2-2-2-2-2-2-2-
 [------------------1-1-1-1-1-1-1-
 [3-3-3-4-4-4-1-1-1-0-0-0-0-0-0-0-
 [--------------------------------
 [--------------------------------

 


 ^palm muted until here


 


 chorus


 


 Odd chorus:


 

 
 [--------------------------------
 [--------------------------------
 [--------------------------------
 [3-----------------------1-------
 [3-----------------------1-------
 [3-----------------------1-------
 [--------------------------------
 [--------------------------------
 [--------------------------------
 [--------------------------1-----
 [--------------------------1-----
 [--------------------------1-----
 [--------------------------------
 [--------------------------------
 [--------------------------------
 [3-------3-------3---------1-----
 [3-------3-------3---------1-----
 [3-------3-------3---------1-----
 [--------------------------------
 [--------------------------------
 [--------------------------------
 [3-------3-3-3-----3-3-----------
 [3-------3-3-3-------------8-8---
 [3-------3-3-3-4-------6---------

 


 


 Ending (distortion):


 

 
 [--------------------------------
 [--------------------------------
 [--------------------------------
 [------3---3---3-------3---3---3-
 [--------------------------------\\
 [1-1-1-----------3-3-3----------- \\

 


 play 4X


 

 
 [-------------------------------- /
 [--------------------------------/
 [--------------------------------
 [------3---3-----------8---------
 [------------------8-------8-----
 [4-4-4---------6-6---------------
 [--------------------------------
 [--------------------------------
 [--------------------------------
 [1-----1-----1-----1-----1---1---
 [1-----1-----1-----1-----1---1---
 [1-----1-----1-----1-----1---1---
 [--------------------------------
 [--------------------------------
 [--------------------------------
 [3-3-3-----3---3-3-3-3-----1-----
 [3-3-3-----3---3-3-3-3-----1-----
 [3-3-3-----3---3-3-3-3-----1-----`,url:"https://www.chordie.com/chord.pere/www.guitartabs.cc/tabs/s/sw1tched/inside_tab.html"}]},{name:"The Swon Brothers (2014)",songs:[{title:"Same Old Highway",chords:`Intro: Cadd9 G D Cadd9 G D


 


 [Cadd9]Well, I'm gassed up and lead foot and rol[G]ling.


 I [Cadd9]know these roads like the back of my ha[D]nd.


 Th[Cadd9]is not knowing where you're going.


 Has got me [G]going just as fast as I c[D]an.


 


 [Cadd9]Down the same old highwa[G]y.


 [Em]Same ditches, s[D]ame exits, s[Cadd9]ame lines.


 [Cadd9]But if it's the same old hig[G]hway.


 [Em]Oh, why can't I [D]find you to[G]night?


 


 [Cadd9] [G] [D] [Cadd9] [G] [D]  


 


 [Cadd9]I'm tired of hitting these dead ends for not[G]hing.


 I[Cadd9] thought I had found you by n[D]ow.


 A[Cadd9]nd I'm guessing you're helping


 On gettin[G]g on out of this to[D]wn.


 


 But the only way out is.


 


 [Cadd9]Down the same old highwa[G]y.


 [Em]Same ditches, s[D]ame exits, s[Cadd9]ame lines.


 [Cadd9]But if it's the same old hig[G]hway.


 [Em]Oh, why can't I [D]find you to[G]night?(Come on)


 


 [Cadd9] [G] [D] [Cadd9] [G] [D] [Cadd9] [G] [D] [Cadd9] [G] [D] 


 [Em]I wish the way that you loved me always stayed the s[D]ame.


 [G]I never would have changed like the lines in these [Cadd9]lanes.


 


 [Cadd9]The same old hig[G]hway.


 [Em]Same ditches, s[D]ame exits, s[Cadd9]ame lines.


 [Cadd9]But if it's the same old hi[G]ghway.


 [Em]Oh, why can't I f[D]ind you ton[G]ight?


 [Em]Oh, why can't I f[D]ind you ton[G]ight?


 


 [Cadd9] [G] [D] [Cadd9] [G] [D] [Cadd9] [G] [D] [Cadd9] [G] [D]`,url:"https://www.chordie.com/chord.pere/www.azchords.com/t/theswonbrothers-tabs-61261/sameoldhighway1-tabs-854277.html"},{title:"Pray for You",chords:`no capo version


 


 intro:


 


 [A] [Asus]  

 
 -----------------------------------------------------------------------------|
 --------2--------2---------2---------3---------3---------3---------3---------|
 ---2--------2---------2---------2---------2---------2---------2---------2----|
 -----------------------------------------------------------------------------|
 0----0----0----0----0----0----0----0----0----0----0----0----0----0----0------|
 -----------------------------------------------------------------------------|

 


 


 verse:


 Well [F#m]i have been where you've bee[E]n my friend, i felt[D] the rain fall sideway[A]s.


 Hell [F#m]on wheels in the fast [E]lane down the cro[D]oked highway[A].


 And i[F#m]'ve been though that [E]perfect storm my [D]heart was wrecked my so[A]ul was torn.


 and [F#m]i know, i know, i kno[E]w,


 D (strum)


 and i know, i know, i know,


 


 chorus:


 Som[A]etimes yo[D]u need mo[E]re than wiske[A]y,[(F#m)]


 Som[A]etimes wi[D]shdom jus[E]t won't do[A],


 And[D] i aint gonna judge you i[E]'m just gonna l[A]ove you,


 Ton[A]ight im g[D]onne pray[E] for yo[A]u.


 


 mid play:


 


 [A]  

 
 -----0------0------0--------------0------0------0-----------------------------------------------------|
 2-s3---2-s3---2-s3---3-s2----2-s3---2-s3---2-s3---3s2-3s2---------------------------------------------|
 2------2------2-----------2--2------2------2--------------2-------------------------------------------|
 2------2------0--------------2------2------0----------------------------------------------------------|
 0------0---------------------0------0-----------------------------------------------------------------|
 ------------------------------------------------------------------------------------------------------|

 


 


 verse 2:


 your moma's cry your daddy's tried your friend have all but left you


 You had an angel in your arms but you let her go i bet ya


 i've tried my best to number her


 Sometimes you cant get peace on earth


 and i know, i know, i know,


 but i know, i know, i know,


 


 chorus:


 Sometimes you need more than wiskey


 Sometimes wishdom just wont do


 well i aint gonna judge you


 im just gonna love you


 tonight im gonna pray for you F#m


 


 solo


 

 
 --------12-h14----------------------------------------------------|
 12-h14----------12--14~s10--10--12--10--12b--10--12--10-----------|
 ---------------------------------------------------------9--9-----|
 ---------------------------------------------------------------11-|
 ------------------------------------------------------------------|
 ------------------------------------------------------------------|
 --------------------------------------------|
 -----------------------------10--10--10--10-|
 -9--9--9--9--11--11--11--11-----------------|
 --------------------------------------------|
 --------------------------------------------|
 --------------------------------------------|
 ---------------------9--12--14--17--------------|
 -12--12--12--12--10-----------------------------|
 ------------------------------------------------|
 ------------------------------------------------|
 ------------------------------------------------|
 ------------------------------------------------|

 


 


 and [F#m]i know, i know, i kn[E]ow


 some[D]body prayed for m[A]e


 and [F#m]i know, i know i kno[E]w


 heav[D]ens is listening[A]


 an i[F#m] know i know i kno[E]w


 that[D] you dont know my n[E]ame


 and [F#m]i know i know i kno[E]w


 and [D]i know i know i know


 


 chorus:


 Sometimes you need more than wiskey


 Sometimes wishdom just wont do


 well i aint gonna judge you


 im just gonna love you


 tonight im gonna pray for yo[F#m]u


 [F#m]tonight im gon[D]na pray[E] for you [A]


 


 outro:


 im gonna pray


 im gonna pray


 im gonna pray, for you


 pray for you`,url:"https://www.chordie.com/chord.pere/www.azchords.com/s/swonbrothers-tabs-58302/prayforyou1-tabs-830236.html"}]},{name:"The Legend of Chin (1997)",songs:[{title:"Bomb",chords:`Here's Bomb by Switchfoot, pretty simple once you add Jon's effects and


 once you learn the main chords. It's in Drop D, but that really shouldn't


 be a problem.


 


 Intro:


 Bass line


 

 
 G -----------------------------
 D -----------010-----------0-1-
 A 030-------1---3-030---30-----
 D ---1113103---------1-2--2----

 


 


 Guitar Riff Intro:


 

 
 e --------------------------------
 B -----5-------4--------5---------
 G ---54-45----5-5-----54-45-------
 D --5-----5--6---6---5-----5--6--5
 A -3--------6-----6-3--------6--5-
 D ---------6----------------6--5--

 


 


 Verse:


 Power Chords


 [A] [D#] [D] [C]  


 [A] [D#] [D] [F]  


 [A] [D#] [D] [C]  


 [A] [D#] [D] [F]  


 Chorus:


 [F] [A] [G#] [G] [F]  


 [A] [G#] [G] [F]  


 Post Chorus:


 A# B C 2x


 


 Verse again, but different chords follow:


 [A]th[G#]e c[G]ho[F]rd[G] before the chorus this time is


 [E]The ending is the same as the intro, except for it ends on power chord C


 


 Any questions,comments or requests? E-mail me at switchfootrocks@msn.com


 


 =Bek from The Jamesfever=`,url:"https://www.chordie.com/chord.pere/www.christianguitar.org/csong10307/-Bomb"},{title:"Chem 6A",chords:`Song: Chem 6 a


 By: Switchfoot


 


 Ok, so this is a great song and I know that the solos of the other


 ones are a little off so here is my version


 


 


 Intro


 

 
 e--------------------------------------------------------------------
 B---------------------------------------------XXX--------------------
 G-----4^------4^------3^------2-h4-2p0------4-XXX-----4^------3^-----
 D-------------------------0-0-----------------XXX---------------0-0--
 A---------2-2-----3-3-------------------------XXX-2-2-----3-3--------
 E-3-3-----------------------------------3-3-------------------------- 

 


 


 Verse


 

 
 e----------------------------------------------------------------------
 B-------XXX-------------------------------------XXX--------------------
 G-----4-XXX-----4^------3^------2-h4-2p0------4-XXX-----4^------3^-----
 D-------XXX-----------------0-0-----------------XXX---------------0-0--
 A-------XXX-2-2-----3-3-------------------------XXX-2-2-----3-3--------
 E-3-3------------------------------------3-3--------------------------- 

 


 


 I'm not positive about the chorus so


 if you know a different way to play it add it on


 


 Chorus:


 [Em] [G] [Em] [D] [C]  


 [Em] [G] [Em] [C]  


 1st Bridge:


 

 
 B----------------------------
 G---7~----7-4--0-2-3-0-2-0---
 D----------------------------
 B------------------------------------------------
 G---7~----7-7-7-7-7-7--7/12--12-14-15-12-14-12---
 D---------7-7-7-7-7-7----------------------------
 B------------------ This is another part
 G---7-7-7-7-7-7-7-- that I'm not sure about
 D---5-5-5-5-5-5-5--
 B--------------------------------
 G---12-14--14-15--12--12-14--12--
 D-------------------------------- 

 


 


 2nd Verse:


 G C D repeat lightly 4x till he goes back into the verse


 


 End riff


 

 
 B---------10-----10h12-10-------10-------------------------
 G--9/12-----12---------------12-----12-12--12-12-11-9--11--
 e------------------------------------------------------
 B------10----10h12-10---12---11------------------------
 G--12----12-----------------------12--12-12-11-9-11-12- 

 


 


 Ok that is it have fun with it.


 


 And the chords are:


 [Em]x [G]x [D]x [C]x


 x x x x


 x x 7 5


 [2] [4] [7] [5]  


 [2]0 [4]2 [5]x [3]x`,url:"https://www.chordie.com/chord.pere/www.christianguitar.org/csong15017/-Chem-6A"}]},{name:"Age of Winters (2006)",songs:[{title:"Seriously Mysterious",chords:`[Ebm7] [Dbsus2] [Ab7] [GbM7]  

 
 Eb|--0------0------0------2---|
 Db|--3------3------2------3---|
 Gb|--0------2------0------0---|
 Db|--2------0------2------0---|
 Ab|--2-------------0------2---|
 Eb|--0--------------------3---|

 


 


 


 (Intro)


 x4


 

 
 Eb|--------------------|
 Db|--------------------|
 Gb|------0-------------|
 Db|0h2-----2-0h2---2---|
 Ab|--------------------|
 Eb|----0---------0---0-|

 


 


 (Verse)


 


 

 
 Eb|--------------------|--------------------|--------------------|--------------------|
 Db|--------------------|--------------------|------3---------3---|--------------------|
 Gb|------0-------------|------0-------------|0h2-----2-0h2-----2-|------0-------------|
 Db|0h2-----2-0h2---2---|0h2-----2-0h2---2---|----0---------0-----|0h2-----2-0h2---2---|
 Ab|--------------------|--------------------|--------------------|--------------------|
 Eb|----0---------0---0-|----0---------0---0-|--------------------|----0---------0---0-|
 Eb|--------------------|--------------------|--------------------|--------------------|
 Db|--------------------|------3---------3---|--------------------|--------------------|
 Gb|------0-------------|0h2-----2-0h2-----2-|------2---------2---|------0-------------|
 Db|0h2-----2-0h2---2---|----0---------0-----|--------2-----------|0h2-----2-0h2---2---|
 Ab|--------------------|--------------------|3p0-0-----3p0-0-----|--------------------|
 Eb|----0---------0---0-|--------------------|-----------------3b4|----0---------0---0-|
 Eb|--------------------|--------------------|--------------------|--------------------|
 Db|------0---------0---|------0---------0---|--------------------|--------------------|
 Gb|--------------------|--------------------|------2---------2---|------2--------2----|
 Db|----4---4-----4---4-|----4---4-----4-----|--------2---------2-|--------2-----------|
 Ab|0h2-------0h2-------|0h2-------0h2-------|----0---------0-----|----0---------0-----|
 Eb|--------------------|-----------------3b4|0h3-------0h3-------|0h3-------0h3----3b4|

 


 


 x2


 

 
 Eb|--------------------|
 Db|--------------------|
 Gb|------0-------------|
 Db|0h2-----2-0h2---2---|
 Ab|--------------------|
 Eb|----0---------0---0-|

 


 


 (Chorus)


 [Ebm7] [Dbsus2] [Ebm7] [Ab7]  

 
 Eb|--------------------|----------------------|---------------------|-----------------------|
 Db|--------------------|-------3---------3----|---------------------|-----------------------|
 Gb|------0-------------|-0h2-----2-0h2-----2--|-------0-------------|-------2---------2-----|
 Db|0h2-----2-0h2---2---|-----0---------0------|-0h2-----2-0h2---2---|---------2-------------|
 Ab|--------------------|----------------------|---------------------|-3p0-0-----3p0-0-------|
 Eb|----0---------0---0-|----------------------|-----0---------0---0-|-------------------3b4-|

 


 


 [Ebm7] [Dbsus2] [GbM7] [Ab7]  

 
 Eb|--------------------|----------------------|---------------------|-----------------------|
 Db|--------------------|-------3---------3----|---------------------|-----------------------|
 Gb|------0-------------|-0h2-----2-0h2-----2--|-------0---------0---|-------2---------2-----|
 Db|0h2-----2-0h2---2---|-----0---------0------|---------0---------0-|---------2-------------|
 Ab|--------------------|----------------------|-----2---------2-----|-3p0-0-----3p0-0-------|
 Eb|----0---------0---0-|----------------------|-0h3-------0h3-------|-------------------3b4-|

 


 


 x4


 

 
 Eb|--------------------|
 Db|--------------------|
 Gb|------0-------------|
 Db|0h2-----2-0h2---2---|
 Ab|--------------------|
 Eb|----0---------0---0-|

 


 


 (Verse)


 


 

 
 Eb|--------------------|--------------------|--------------------|--------------------|
 Db|--------------------|--------------------|------3---------3---|--------------------|
 Gb|------0-------------|------0-------------|0h2-----2-0h2-----2-|------0-------------|
 Db|0h2-----2-0h2---2---|0h2-----2-0h2---2---|----0---------0-----|0h2-----2-0h2---2---|
 Ab|--------------------|--------------------|--------------------|--------------------|
 Eb|----0---------0---0-|----0---------0---0-|--------------------|----0---------0---0-|
 Eb|--------------------|--------------------|--------------------|--------------------|
 Db|--------------------|------3---------3---|--------------------|--------------------|
 Gb|------0-------------|0h2-----2-0h2-----2-|------2---------2---|------0-------------|
 Db|0h2-----2-0h2---2---|----0---------0-----|--------2-----------|0h2-----2-0h2---2---|
 Ab|--------------------|--------------------|3p0-0-----3p0-0-----|--------------------|
 Eb|----0---------0---0-|--------------------|-----------------3b4|----0---------0---0-|
 Eb|--------------------|--------------------|--------------------|--------------------|
 Db|------0---------0---|------0---------0---|--------------------|--------------------|
 Gb|--------------------|--------------------|------2---------2---|------2--------2----|
 Db|----4---4-----4---4-|----4---4-----4-----|--------2---------2-|--------2-----------|
 Ab|0h2-------0h2-------|0h2-------0h2-------|----0---------0-----|----0---------0-----|
 Eb|--------------------|-----------------3b4|0h3-------0h3-------|0h3-------0h3----3b4|

 


 


 x2


 

 
 Eb|--------------------|
 Db|--------------------|
 Gb|------0-------------|
 Db|0h2-----2-0h2---2---|
 Ab|--------------------|
 Eb|----0---------0---0-|

 


 


 (Chorus)


 [Em7] [Dsus2] [Em7] [A7]  

 
 Eb|--------------------|----------------------|---------------------|-----------------------|
 Db|--------------------|-------3---------3----|---------------------|-----------------------|
 Gb|------0-------------|-0h2-----2-0h2-----2--|-------0-------------|-------2---------2-----|
 Db|0h2-----2-0h2---2---|-----0---------0------|-0h2-----2-0h2---2---|---------2-------------|
 Ab|--------------------|----------------------|---------------------|-3p0-0-----3p0-0-------|
 Eb|----0---------0---0-|----------------------|-----0---------0---0-|-------------------3b4-|

 


 


 [Em7] [Dsus2] [G] [A7]  

 
 Eb|--------------------|----------------------|---------------------|-----------------------|
 Db|--------------------|-------3---------3----|---------------------|-----------------------|
 Gb|------0-------------|-0h2-----2-0h2-----2--|-------0---------0---|-------2---------2-----|
 Db|0h2-----2-0h2---2---|-----0---------0------|---------0---------0-|---------2-------------|
 Ab|--------------------|----------------------|-----2---------2-----|-3p0-0-----3p0-0-------|
 Eb|----0---------0---0-|----------------------|-0h3-------0h3-------|-------------------3b4-|`,url:"https://www.chordie.com/chord.pere/www.azchords.com/t/thesword-tabs-33607/seriouslymysteriousacoustic-tabs-910661.html"},{title:"Winter's Wolves",chords:`Winter's Wolves


 


 The Sword


 Rhythm Guitar


 


 


 

 
 |---3--| |---3--| |--3-| |-3-| 

 


 E E E H. 5x E E E Q E E Q Q


 

 
 C ||---------------------------||----------------------------------|
 G ||---------------------------||----------------------------------|
 D#||*-------------------------*||----------------------------------|
 A#||*-------------------------*||--------------------7S--9----9----|
 F ||---------------------------||--------------------5S--7----7----|
 C ||---1p--0--0--0-------------||--1p--0--0--0----0----------------|
 |---3--| |---3--| |--3-| |-3-| |--3-| 

 


 E E E H. 3x E E E Q E E Q Q E


 

 
 |---------------------------||-------------------------------------|
 |---------------------------||-------------------------------------|
 |*-------------------------*||-------------------------------------|
 |*-------------------------*||--------------------7S--9----9-------|
 |---------------------------||--------------------5S--7----7-------|
 |---1p--0--0--0-------------||--1p--0--0--0----0----------------0--|
 |-3-| |--3-| |---3--| 

 


 E Q Q E E E E H. 3x


 

 
 -------------------||---------------------------||
 -------------------||---------------------------||
 -------------------||*-------------------------*||
 --7S--9----9-------||*-------------------------*||
 --5S--7----7-------||---------------------------||
 ----------------0--||---1p--0--0--0-------------||
 |---3--| |--3-| |-3-| |--3-| |-3-| |--3-| 

 


 E E E Q E E Q Q E E Q Q E 9x


 

 
 -------------------------------------||---------------------||
 -------------------------------------||---------------------||
 -------------------------------------||*-------------------*||
 --------------------7S--9----9-------||*--7S--9----9-------*||
 --------------------5S--7----7-------||---5S--7----7--------||
 --1p--0--0--0----0----------------0--||-----------------0---||
 |-3-| |--3-| |-3-| |--3-| 3 |-3| 3 

 


 E Q Q E E Q Q Q E Q Q E Q E


 

 
 -----------------------------------|---------------------------------|
 -----------------------------------|---------------------------------|
 -----------------------------------|---------------------------------|
 --7S--9----9-------7S--9-----------|----------7S----9-------7S----9--|
 --5S--7----7-------5S--7-----------|----------5S----7-------5S----7--|
 ----------------0-----------12\\----|--0----0-------------0-----------|
 |--3-| 3 3 |--3-| 3 |-3| 3 

 


 Q E Q Q E Q Q E Q Q E Q E


 

 
 -----------------------------|---------------------------------|
 -----------------------------|---------------------------------|
 -----------------------------|---------------------------------|
 --L-------7S----9-------9----|----------7S----9-------7S----9--|
 --L-------5S----7-------7----|----------5S----7-------5S----7--|
 -------0-------------0-------|--0----0-------------0-----------|
 |--3--| 3 3 |--3-| 3 |-3| 3 

 


 E E E Q Q E Q Q E Q Q E Q E


 

 
 ------------------------------|---------------------------------|
 ------------------------------|---------------------------------|
 ------------------------------|---------------------------------|
 --L--L-----9S----7-------7----|----------7S----9-------7S----9--|
 --L--L-----7S----5-------5----|----------5S----7-------5S----7--|
 --------0-------------0-------|--0----0-------------0-----------|
 |--3-| 3 3 |--3-| 3 |-3| 3 

 


 Q E Q Q E Q Q E Q Q E Q E


 

 
 -----------------------------|--------------------------------|
 -----------------------------|--------------------------------|
 -----------------------------|--------------------------------|
 --L-------7S----9-------9----|----------7S----9-------9----7--|
 --L-------5S----7-------7----|----------5S----7-------7----5--|
 -------0-------------0-------|--0----0-------------0----------|
 |--3--| |----3----| |--3-| |-3| |--3-| |-3| 

 


 E E E Q Q Q Q Q E E Q Q E E Q 4x


 

 
 -------------------------------||------------------------------------||
 -------------------------------||------------------------------------||
 -------------------------------||*----------------------------------*||
 --L--L-------------------------||*----------------------------------*||
 --L--L-------------------------||------------------------------------||
 --------0--3----0----L----L----||---0----0--0--0----0----0--0--0-----||
 |--3-| |-3| |--3-| |-3| |--3-| |-3| |--3-| |-3| 

 


 Q E E Q Q E E Q Q E E Q Q E E Q


 

 
 -----------------------------------|----------------------------------|
 -----------------------------------|----------------------------------|
 *----------------------------------|----------------------------------|
 *----------------------------------|----------------------------------|
 -----------------------------------|----------------------------------|
 ---0----0--0--0----0----0--0--0----|--0----0--0--0----0----0--0--0----|
 |--3-| |-3| |--3-| |-3| |-3| |--3-| |--3-| 

 


 Q E E Q Q E E Q E Q Q E Q E Q


 

 
 ----------------------------------|--------------------------------||
 ----------------------------------|--------------------------------||
 ----------------------------------|-------------------------------*||
 ----------------------------------|--9--8----8--------------------*||
 ----------------------------------|--7--6----6---------------------||
 --0----0--0--0----0----0--0--0----|---------------0--6----0--6-----||
 |--3-| |--3-| |--3-| |--3-| |--3-| |--3-| |--3-| |--3-| 

 


 Q E Q E Q E Q E Q E Q E Q E Q E


 

 
 -----------------------------------|----------------------------------|
 -----------------------------------|----------------------------------|
 *----------------------------------|----------------------------------|
 *--9----9--9----9--9----9--9----9--|--9----9--9----9--9----9--9----9--|
 ---7----7--7----7--7----7--7----7--|--7----7--7----7--7----7--7----7--|
 ---0----0--0----0--0----0--0----0--|--0----0--0----0--0----0--0----0--|
 |--3--| |--3--| |--3--| |--3-| |--3-| |-3| 

 


 E E E Q E E E Q E E E Q E Q E E Q


 

 
 ------------------------------|------------------------------------||
 ------------------------------|------------------------------------||
 ------------------------------|-----------------------------------*||
 --9--9--9--9----9--9--9--9----|--8--8--8--8-----------------------*||
 --7--7--7--7----7--7--7--7----|--6--6--6--6------------------------||
 ------------------------------|----------------0--6----0--6--L-----||
 |--3-| |--3-| |--3-| |--3-| |--3-| |--3-| |--3-| |--3-| 

 


 Q E Q E Q E Q E Q E Q E Q E Q E


 

 
 ----------------------------------|----------------------------------|
 ----------------------------------|----------------------------------|
 ----------------------------------|----------------------------------|
 ----------------------------------|----------------------------------|
 --7---------------L-------8----7--|------------------L-------8----7--|
 --5----L--L----L--L----0--6----5--|--L----L--L----L--L----0--6----5--|
 |--3--| |--3-| |--3-| |--3-| |3| 

 


 E E E Q E Q E Q E Q. S E Q Q


 

 
 -----------------------------------|------------------------|
 -----------------------------------|------------------------|
 -----------------------------------|------------------------|
 -----------------------------------|--------------8----8----|
 -------------------L-------8----7--|---------L----6----6----|
 --L--L--L--L----L--L----0--6----5--|--L------L-0------------|
 |--3-| |--3-| |--3-| |--3-| |--3-| |--3-| |--3-| |--3-| 

 


 Q E Q E Q E Q E Q E Q E Q E Q E


 

 
 ----------------------------------|----------------------------------|
 ----------------------------------|----------------------------------|
 ----------------------------------|----------------------------------|
 ----------------------------------|----------------------------------|
 --7---------------L-------8----7--|------------------L-------8----7--|
 --5----L--L----L--L----0--6----5--|--L----L--L----L--L----0--6----5--|
 |--3--| |--3-| |--3-| |--3-| |3| 

 


 E E E Q E Q E Q E Q. S E Q Q


 

 
 -----------------------------------|------------------------|
 -----------------------------------|------------------------|
 -----------------------------------|------------------------|
 -----------------------------------|------------------------|
 -------------------L-------8----7--|--L-----------3----3----|
 --L--L--L--L----L--L----0--6----5--|--L------L-0--1----1----|
 |--3--| |--3--| |--3--| |--3--| |--3--| |--3--| |--3--| |--3--| 

 


 [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E]  

 
 --------------------------------------||---------------------------------------|
 --------------------------------------||---------------------------------------|
 --------------------------------------||*--------------------------------------|
 --------------------------------------||*--------------------------------------|
 --------------------------------------||---------------------------------------|
 --0--0--0--0--0--0--0--0--0--0--0--0--||---1--0--0--0--0--0--0--0--0--0--0--0--|
 |---3--| |--3--| |--3--| |--3--| |--3--| |--3--| |--3--| |--3--| 

 


 [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E]  

 
 ---------------------------------------|--------------------------------------|
 ---------------------------------------|--------------------------------------|
 ---------------------------------------|--------------------------------------|
 ---------------------------------------|--------------------------------------|
 ---------------------------------------|--------------------------------------|
 --2b--0--0--0--0--0--0--0--0--0--0--0--|--6--4--6--4--6--4--6--4--6--4--6--4--|
 |---3--| |--3--| |--3--| |--3--| 

 


 E E E E E E E E E E E E 3x


 

 
 ----------------------------------------||
 ----------------------------------------||
 ---------------------------------------*||
 ---------------------------------------*||
 ----------------------------------------||
 --6b--0--0--0--0--0--0--0--0--0--0--0---||
 |--3--| |--3--| |--3--| |--3--| |---3--| |--3--| |--3--| |--3--| 

 


 [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E]  

 
 --------------------------------------|---------------------------------------|
 --------------------------------------|---------------------------------------|
 --------------------------------------|---------------------------------------|
 --------------------------------------|---------------------------------------|
 --------------------------------------|---------------------------------------|
 --1--0--0--0--0--0--0--0--0--0--0--0--|--2b--0--0--0--0--0--0--0--0--0--0--0--|
 |--3--| |--3--| |--3--| |--3--| |--3--| |--3--| |--3--| 

 


 E E E E E E E E E E E E Q E E E E E E E E E


 

 
 --------------------------------------||-----------------------------------|
 --------------------------------------||-----------------------------------|
 --------------------------------------||*----------------------------------|
 --------------------------------------||*--9----------------------------7--|
 --------------------------------------||---7----------------------------5--|
 --6--4--6--4--6--4--6--4--6--4--6--4--||--------0--0--0--0--0--0--0--0-----|
 |--3--| |--3--| |--3--| |--3--| |--3--| |--3--| 

 


 Q E E E E E E E E E Q E E E E E E E E E


 

 
 ----------------------------------|----------------------------------|
 ----------------------------------|----------------------------------|
 ----------------------------------|----------------------------------|
 --9----------------------------7--|--9-------------------------------|
 --7----------------------------5--|--7-------------------------------|
 -------0--0--0--0--0--0--0--0-----|-------0--0--0--0--0--0--0--0--0--|
 |--3--| |--3--| |--3--| |--3--| |--3--| |--3--| |--3--| 

 


 E E E E E E E E E E E E Q E E E E E E E E E


 

 
 --------------------------------------|----------------------------------|
 --------------------------------------|----------------------------------|
 --------------------------------------|----------------------------------|
 --------------------------------------|--9----------------------------7--|
 --5--4--5--4--5--4--5--4--5--4--5--4--|--7----------------------------5--|
 --------------------------------------|-------0--0--0--0--0--0--0--0-----|
 |--3--| |--3--| |--3--| |--3--| |--3--| |--3--| 

 


 Q E E E E E E E E E Q E E E E E E E E E


 

 
 ----------------------------------|----------------------------------|
 ----------------------------------|----------------------------------|
 ----------------------------------|----------------------------------|
 --9----------------------------7--|--9-------------------------------|
 --7----------------------------5--|--7-------------------------------|
 -------0--0--0--0--0--0--0--0-----|-------0--0--0--0--0--0--0--0--0--|
 |--3--| |--3--| |--3--| |--3--| |--3-| |--3--| |--3--| |--3--| 

 


 E E E E E E E E E E E E Q E E E E E E E E E E


 

 
 ---------------------------------------||-------------------------------------|
 ---------------------------------------||-------------------------------------|
 --------------------------------------*||-------------------------------------|
 --------------------------------------*||--9----9--9--9--9--9--9--9--9--9--7--|
 --7--5--7--5--7--5--7--5--7--8--7--5---||--7----7--7--7--7--7--7--7--7--7--5--|
 ---------------------------------------||-------------------------------------|
 |--3-| |--3--| |--3--| |--3--| |--3-| |--3--| |--3--| |--3--| 

 


 Q E E E E E E E E E E Q E E E E E E E E E E


 

 
 -------------------------------------|-------------------------------------|
 -------------------------------------|-------------------------------------|
 -------------------------------------|-------------------------------------|
 --9----9--9--9--9--9--9--9--9--9--7--|--9----9--9--9--9--9--9--9--9--9--7--|
 --7----7--7--7--7--7--7--7--7--7--5--|--7----7--7--7--7--7--7--7--7--7--5--|
 -------------------------------------|-------------------------------------|
 |--3--| |--3--| |--3-| |--3-| |--3-| |--3--| |--3--| |--3--| 

 


 E E E E E E Q E Q E Q E E E E E E E E E E


 

 
 ------------------------------------|-------------------------------------|
 ------------------------------------|-------------------------------------|
 ------------------------------------|-------------------------------------|
 --7--7--7--7--7--7--7----6--7----6--|--9----9--9--9--9--9--9--9--9--9--7--|
 --5--5--5--5--5--5--5----4--5----4--|--7----7--7--7--7--7--7--7--7--7--5--|
 ------------------------------------|-------------------------------------|
 |--3-| |--3--| |--3--| |--3--| |--3-| |--3--| |--3--| |--3--| 

 


 Q E E E E E E E E E E Q E E E E E E E E E E


 

 
 -------------------------------------|-------------------------------------|
 -------------------------------------|-------------------------------------|
 -------------------------------------|-------------------------------------|
 --9----9--9--9--9--9--9--9--9--9--7--|--9----9--9--9--9--9--9--9--9--9--7--|
 --7----7--7--7--7--7--7--7--7--7--5--|--7----7--7--7--7--7--7--7--7--7--5--|
 -------------------------------------|-------------------------------------|
 |--3--| |---3---| |--3--| |--3--| |--3--| |--3--| 

 


 E E E Q E E E Q E E E E E E E E E E E E


 

 
 ----------------------------------||---------------------------------------|
 ----------------------------------||---------------------------------------|
 ----------------------------------||*--------------------------------------|
 --7--7--7--7----10--10--10--10----||*--------------------------------------|
 --5--5--5--5-----8---8---8---8----||---------------------------------------|
 ----------------------------------||---0--0--0--1--1--1--4--4--4--3--3--3--|
 |-3-| |--3-| |-3-| |--3-| 

 


 E Q Q E E Q Q E


 

 
 -------------------------------------||
 -------------------------------------||
 ------------------------------------*||
 --7S--9----9-------7S--9----9-------*||
 --5S--7----7-------5S--7----7--------||
 ----------------0----------------0---||
 |--3--| |--3--| |---3---| |---3---| 

 


 [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E] [E]  

 
 ---------------------------------------------|
 ---------------------------------------------|
 *--------------------------------------------|
 *--------------------------------------------|
 ---7--7--7--8--8--8--11--11--11--10--10--10--|
 ---------------------------------------------|
 |-3-| |--3-| |-3-| |--3-| |-3-| |--3-| |-3-| |--3-| 

 


 E Q Q E E Q Q E E Q Q E E Q Q E 4x


 

 
 -------------------------------------||--------------------------------------||
 -------------------------------------||--------------------------------------||
 ------------------------------------*||*------------------------------------*||
 --7S--9----9-------7S--9----9-------*||*--7S--9----9-------7S--9----9-------*||
 --5S--7----7-------5S--7----7--------||---5S--7----7-------5S--7----7--------||
 ----------------0----------------0---||-----------------0----------------0---||
 |-3-| |--3-| |-3-| |--3-| 3 |-3| 3 

 


 E Q Q E E Q Q Q E Q Q E Q E


 

 
 -----------------------------------||--------------------------------|
 -----------------------------------||--------------------------------|
 -----------------------------------||*-------------------------------|
 --7S--9----9-------7S--9-----------||*----------7----9-------7----9--|
 --5S--7----7-------5S--7-----------||-----------5----7-------5----7--|
 ----------------0-----------12\\----||---0----0------------0----------|
 |--3-| 3 3 |--3-| 3 |-3| 3 

 


 Q E Q Q E Q Q E Q Q E Q E


 

 
 ----------------------------|-------------------------------|
 ----------------------------|-------------------------------|
 ----------------------------|-------------------------------|
 --L-------7----9-------9----|----------7----9-------7----9--|
 --L-------5----7-------7----|----------5----7-------5----7--|
 -------0------------0-------|--0----0------------0----------|
 |--3--| 3 3 |--3-| 3 |-3| 3 

 


 E E E Q Q E Q Q E Q Q E Q E


 

 
 -----------------------------|-------------------------------|
 -----------------------------|-------------------------------|
 -----------------------------|-------------------------------|
 --L--L-----9----7-------7----|----------7----9-------7----9--|
 --L--L-----7----5-------5----|----------5----7-------5----7--|
 --------0------------0-------|--0----0------------0----------|
 |--3-| 3 3 |--3-| 3 |-3| 3 

 


 Q E Q Q E Q Q E Q Q E Q E


 

 
 ----------------------------|-------------------------------|
 ----------------------------|-------------------------------|
 ----------------------------|-------------------------------|
 --L-------7----9-------9----|----------7----9-------9----7--|
 --L-------5----7-------7----|----------5----7-------7----5--|
 -------0------------0-------|--0----0------------0----------|
 |--3--| |----3----| |---3--| 

 


 E E E Q Q Q Q E E E H. 7x


 

 
 --------------------------------||---------------------------||
 --------------------------------||---------------------------||
 -------------------------------*||*-------------------------*||
 --L--L-------------------------*||*-------------------------*||
 --L--L--------------------------||---------------------------||
 --------0--3----0----L----L-----||---1p--0--0--0-------------||
 |---3--| |--3-| |-3-| |--3-| |---3--| 

 


 E E E Q E E Q Q E E E E H. 3x


 

 
 -------------------------------------||---------------------------||
 -------------------------------------||---------------------------||
 -------------------------------------||*-------------------------*||
 --------------------9S--7----7-------||*-------------------------*||
 --------------------7S--5----5-------||---------------------------||
 --1p--0--0--0----0----------------0--||---1p--0--0--0-------------||
 |---3--| |--3-| |--3-| |---3--| 

 


 E E E Q E Q E Q E E E H. 3x


 

 
 ---------------------------------||---------------------------||
 ---------------------------------||---------------------------||
 ---------------------------------||*-------------------------*||
 ---------------------------------||*-------------------------*||
 -----------------7--8----8--5----||---------------------------||
 --1p--0--0--0----5--6----6--3----||---1p--0--0--0-------------||
 |---3--| |--3-| |-3-| |--3-| |---3--| 

 


 E E E Q E E Q Q E E E E H. 3x


 

 
 -------------------------------------||---------------------------||
 -------------------------------------||---------------------------||
 -------------------------------------||*-------------------------*||
 --------------------9S--7----7-------||*-------------------------*||
 --------------------7S--5----5-------||---------------------------||
 --1p--0--0--0----0----------------0--||---1p--0--0--0-------------||
 |---3--| |--3-| |--3-| |---3--| 

 


 E E E Q E Q E Q E E E H. 3x


 

 
 ----------------------------------||---------------------------||
 ----------------------------------||---------------------------||
 ----------------------------------||*-------------------------*||
 ----------------------------------||*-------------------------*||
 -----------------7S--8----8--5----||---------------------------||
 --1p--0--0--0----5S--6----6--3----||---1p--0--0--0-------------||
 |---3--| |--3-| |--3-| 

 


 E E E Q E Q E Q W W


 

 
 ---------------------------------|-------------------|-------------------||
 ---------------------------------|-------------------|-------------------||
 ---------------------------------|-------------------|-------------------||
 -----------------7--9----9--7----|--L----------------|--L----------------||
 -----------------5--7----7--5----|--L----------------|--L----------------||
 --1p--0--0--0--------------------|-------------------|-------------------||

 


 


 


 Duration Legend


 

 
 ---------------

 


 W - whole


 H - half


 Q - quarter


 E - 8th


 S - 16th


 T - 32nd


 X - 64th


 . - note dotted


 |-n-| - n-tuplets


 


 Tablature Legend


 

 
 ----------------

 


 L - tied note


 x - dead note


 g - grace note


 (n) - ghost note


 &gt; - accentuded note


 NH - natural harmonic


 AH - artificial harmonic


 TH - tapped harmonic


 SH - semi harmonic


 PH - pitch harmonic


 h - hammer on


 p - pull off


 b - bend


 br - bendRelease


 pb - preBend


 pbr - preBendRelease


 brb - bendReleaseBend


 \\n/ - tremolo bar dip


 \\n - tremolo bar dive


 -/n - tremolo bar Release up


 /n\\ - tremolo bar inverted dip


 /n - tremolo bar return


 -\\n - tremolo bar Release down


 S - shift slide


 s - legato slide


 / - slide into from below or out of upwards


 \\ - slide into from above or out of downwards


 ~ - vibrato


 W - wide vibrato


 tr - trill


 TP - tremolo picking


 T - tapping


 S - slap


 P - pop


 &lt; - fade in


 ^ - brush up


 v - brush down`,url:"https://www.chordie.com/chord.pere/www.guitaretab.com/t/the-sword/80321.html"}]}],Tt={artists:Bc};function Tc(){const{searchQuery:n}=ee(),[e,t]=c.useState([]);return c.useEffect(()=>{const o=Tt.artists;if(n&&n.trim()!==""){const r=va(o,n,["name","songs.title"]);t(r)}else t(o)},[n]),f.jsx(ue,{children:f.jsxs("div",{className:"space-y-6",children:[f.jsx("h1",{className:"text-3xl font-bold",children:n?"Search Results":"Artists"}),e.length===0?f.jsx("p",{className:"text-center py-12 text-muted-foreground",children:n?"No artists or songs found matching your search.":"No artists available."}):f.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:e.map(o=>f.jsx(Gc,{artist:o},o.name))})]})})}function Fc(){return f.jsx(ue,{children:f.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center",children:[f.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Page Not Found"}),f.jsx("p",{className:"text-muted-foreground mb-8",children:"The page you are looking for doesn't exist or has been moved."}),f.jsx(mn,{asChild:!0,children:f.jsx(Ve,{to:"/",children:"Return to Home"})})]})})}function xs({song:n,artistName:e}){const{addFavorite:t,removeFavorite:o,isFavorite:r}=ee(),a=r(e,n.title),s=i=>{i.preventDefault(),i.stopPropagation(),a?o(e,n.title):t(e,n.title)};return f.jsx(Ve,{to:`/artist/${encodeURIComponent(e)}/song/${encodeURIComponent(n.title)}`,children:f.jsxs(Fo,{className:"cursor-pointer transition-shadow hover:shadow-md",children:[f.jsxs(Ro,{className:"flex flex-row items-center justify-between pb-2",children:[f.jsx(Po,{className:"text-lg font-bold",children:n.title}),f.jsx(mn,{variant:"ghost",size:"icon",className:"h-8 w-8",onClick:s,children:f.jsx(jr,{className:`h-4 w-4 ${a?"fill-yellow-400 text-yellow-400":""}`})})]}),f.jsx(jo,{children:f.jsxs("div",{className:"flex items-center space-x-2 text-sm",children:[f.jsxs("div",{className:"rounded bg-secondary px-2 py-1",children:["Key: ",n.key]}),n.difficulty&&f.jsx("div",{className:"rounded bg-secondary px-2 py-1",children:n.difficulty.charAt(0).toUpperCase()+n.difficulty.slice(1)})]})})]})})}function Rc(){const{artist:n}=ys(),{searchQuery:e}=ee(),[t,o]=c.useState(null),[r,a]=c.useState([]);return c.useEffect(()=>{if(n){const s=decodeURIComponent(n),i=Tt.artists.find(l=>l.name.toLowerCase()===s.toLowerCase());if(i)if(o(i),e&&e.trim()!==""){const l=va(i.songs,e,["title"]);a(l)}else a(i.songs)}},[n,e]),t?f.jsx(ue,{children:f.jsxs("div",{className:"space-y-6",children:[f.jsx("h1",{className:"text-3xl font-bold",children:t.name}),r.length===0?f.jsx("p",{className:"text-center py-12 text-muted-foreground",children:e?"No songs found matching your search.":"No songs available for this artist."}):f.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",children:r.map(s=>f.jsx(xs,{song:s,artistName:t.name},s.title))})]})}):f.jsx(ue,{children:f.jsx("div",{className:"flex items-center justify-center h-[50vh]",children:f.jsx("p",{className:"text-lg text-muted-foreground",children:"Artist not found"})})})}const Pc={C:{name:"C",positions:[0,1,0,2,3,0],fingering:[0,1,0,2,3,0],frets:3},D:{name:"D",positions:[-1,-1,0,2,3,2],fingering:[0,0,0,1,3,2],frets:3},E:{name:"E",positions:[0,2,2,1,0,0],fingering:[0,2,3,1,0,0],frets:3},F:{name:"F",positions:[1,1,3,3,2,1],fingering:[1,1,3,4,2,1],frets:3},G:{name:"G",positions:[3,2,0,0,3,3],fingering:[3,2,0,0,3,4],frets:3},A:{name:"A",positions:[-1,0,2,2,2,0],fingering:[0,0,1,2,3,0],frets:3},B:{name:"B",positions:[-1,2,4,4,4,2],fingering:[0,1,3,4,4,1],frets:4},Am:{name:"Am",positions:[-1,0,2,2,1,0],fingering:[0,0,2,3,1,0],frets:3},Bm:{name:"Bm",positions:[-1,2,4,4,3,2],fingering:[0,1,3,4,2,1],frets:4},Cm:{name:"Cm",positions:[-1,3,5,5,4,3],fingering:[0,1,3,4,2,1],frets:5},Dm:{name:"Dm",positions:[-1,-1,0,2,3,1],fingering:[0,0,0,2,3,1],frets:3},Em:{name:"Em",positions:[0,2,2,0,0,0],fingering:[0,2,3,0,0,0],frets:3},Fm:{name:"Fm",positions:[1,1,3,3,2,1],fingering:[1,1,3,4,2,1],frets:3},Gm:{name:"Gm",positions:[3,5,5,3,3,3],fingering:[1,3,4,1,1,1],frets:5},C7:{name:"C7",positions:[0,1,0,2,1,0],fingering:[0,1,0,2,1,0],frets:3},D7:{name:"D7",positions:[-1,-1,0,2,1,2],fingering:[0,0,0,2,1,3],frets:3},E7:{name:"E7",positions:[0,2,0,1,0,0],fingering:[0,2,0,1,0,0],frets:3},F7:{name:"F7",positions:[1,1,3,2,1,1],fingering:[1,1,3,2,1,1],frets:3},G7:{name:"G7",positions:[3,2,0,0,0,1],fingering:[3,2,0,0,0,1],frets:3},A7:{name:"A7",positions:[-1,0,2,0,2,0],fingering:[0,0,2,0,3,0],frets:3},B7:{name:"B7",positions:[-1,2,1,2,0,2],fingering:[0,2,1,3,0,4],frets:3},Bb:{name:"Bb",positions:[-1,1,3,3,3,1],fingering:[0,1,2,3,4,1],frets:3}},jc=({chord:n,diagram:e})=>{const{positions:t,fingering:o,frets:r}=e,a=6,s=Math.max(r,4),i=120,l=140,d=16,m=20,h=20,u=30;return f.jsxs("div",{className:"bg-white border border-gray-300 rounded-lg p-3 shadow-lg",children:[f.jsx("div",{className:"text-center font-bold text-sm mb-2 text-gray-800",children:n}),f.jsxs("svg",{width:i,height:l,viewBox:`0 0 ${i} ${l}`,children:[f.jsx("line",{x1:h,y1:u,x2:h+(a-1)*d,y2:u,stroke:"#333",strokeWidth:3}),Array.from({length:s},(y,p)=>f.jsx("line",{x1:h,y1:u+(p+1)*m,x2:h+(a-1)*d,y2:u+(p+1)*m,stroke:"#666",strokeWidth:1},`fret-${p+1}`)),Array.from({length:a},(y,p)=>f.jsx("line",{x1:h+p*d,y1:u,x2:h+p*d,y2:u+s*m,stroke:"#333",strokeWidth:1},`string-${p}`)),t.map((y,p)=>y===-1?f.jsxs("g",{children:[f.jsx("line",{x1:h+p*d-4,y1:u-15,x2:h+p*d+4,y2:u-7,stroke:"#d63031",strokeWidth:2}),f.jsx("line",{x1:h+p*d+4,y1:u-15,x2:h+p*d-4,y2:u-7,stroke:"#d63031",strokeWidth:2})]},`muted-${p}`):y===0?f.jsx("circle",{cx:h+p*d,cy:u-11,r:4,fill:"none",stroke:"#00b894",strokeWidth:2},`open-${p}`):f.jsx("circle",{cx:h+p*d,cy:u+(y-.5)*m,r:6,fill:"#2d3436"},`fret-${p}`)),Array.from({length:s},(y,p)=>f.jsx("text",{x:h-10,y:u+(p+.5)*m+3,fontSize:"10",fill:"#666",textAnchor:"middle",children:p+1},`fret-num-${p}`)),["E","A","D","G","B","E"].map((y,p)=>f.jsx("text",{x:h+p*d,y:u+s*m+15,fontSize:"8",fill:"#999",textAnchor:"middle",children:y},`string-label-${p}`))]})]})},Oc=({chord:n,children:e})=>{const[t,o]=c.useState(!1),[r,a]=c.useState({x:0,y:0}),s=c.useRef(null),i=c.useRef(),l=n.replace(/[\/\(\)]/g,"").split(/[\/\(\)]/)[0],d=Pc[l],m=u=>{if(i.current&&clearTimeout(i.current),d){const y=u.target.getBoundingClientRect();a({x:y.left+y.width/2,y:y.top-10}),i.current=setTimeout(()=>{o(!0)},300)}},h=()=>{i.current&&clearTimeout(i.current),o(!1)};return c.useEffect(()=>{if(t&&s.current){const u=s.current,y=u.getBoundingClientRect();let p=r.x-y.width/2,g=r.y-y.height-10;p<10&&(p=10),p+y.width>window.innerWidth-10&&(p=window.innerWidth-y.width-10),g<10&&(g=r.y+30),u.style.left=`${p}px`,u.style.top=`${g}px`}},[t,r]),c.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]),d?f.jsxs(f.Fragment,{children:[f.jsx("span",{onMouseEnter:m,onMouseLeave:h,className:"cursor-help",children:e}),t&&f.jsx("div",{ref:s,className:"fixed z-50 pointer-events-none animate-in fade-in-0 zoom-in-95 duration-200",style:{left:r.x,top:r.y},children:f.jsx(jc,{chord:n,diagram:d})})]}):f.jsx(f.Fragment,{children:e})},As=c.forwardRef(({chordsText:n,originalKey:e},t)=>{const{currentTransposition:o,isAutoscrolling:r,autoscrollSpeed:a}=ee(),s=c.useRef(null),i=c.useRef(),[l,d]=c.useState(n),[m,h]=c.useState([]);return c.useEffect(()=>{d(Wl(n,o))},[n,o]),c.useEffect(()=>{h((y=>{const p=y.split(`
`),g=[];return p.forEach((w,b)=>{const E=/\b([A-G][#b]?(?:maj|min|m|M|sus|add|dim|aug|°|ø)?[0-9]*(?:\/[A-G][#b]?)?)\b/g;let v=0;const x=[];let A;if(w.match(/^\[(.*?)\]$/)){g.push(f.jsx("div",{className:"font-bold text-lg text-blue-700 mt-4 mb-2",children:w},b));return}if(w.trim()===""){g.push(f.jsx("div",{className:"h-4"},b));return}for(;(A=E.exec(w))!==null;)A.index>v&&x.push(f.jsx("span",{children:w.slice(v,A.index)},`text-${b}-${v}`)),x.push(f.jsx(Oc,{chord:A[1],children:f.jsx("span",{className:"font-bold text-blue-600 hover:bg-blue-100 hover:text-blue-800 px-1 py-0.5 rounded transition-all duration-200 cursor-help select-none",children:A[1]})},`chord-${b}-${A.index}`)),v=A.index+A[0].length;v<w.length&&x.push(f.jsx("span",{children:w.slice(v)},`text-${b}-${v}`)),g.push(f.jsx("div",{className:"whitespace-pre leading-relaxed",children:x.length>0?x:w},b))}),g})(l))},[l]),c.useEffect(()=>{if(i.current&&(cancelAnimationFrame(i.current),i.current=void 0),!r||!s.current)return;const u=s.current,y=()=>{u&&r&&(u.scrollTop+u.clientHeight>=u.scrollHeight-5?u.scrollTop=0:u.scrollTop+=a*1.5,r&&(i.current=requestAnimationFrame(y)))};return i.current=requestAnimationFrame(y),()=>{i.current&&(cancelAnimationFrame(i.current),i.current=void 0)}},[r,a]),f.jsx("div",{ref:u=>{s.current=u,typeof t=="function"?t(u):t&&(t.current=u)},id:"chords-section",className:"relative h-full w-full max-w-full overflow-y-auto rounded-lg bg-card p-6",style:{maxHeight:"70vh"},children:f.jsx("div",{className:"font-mono text-base leading-relaxed",children:m})})});As.displayName="ChordDisplay";function Cs(n,[e,t]){return Math.min(t,Math.max(e,n))}var Nc=c.createContext(void 0);function _c(n){const e=c.useContext(Nc);return n||e||"ltr"}function Lc(n){const e=c.useRef({value:n,previous:n});return c.useMemo(()=>(e.current.value!==n&&(e.current.previous=e.current.value,e.current.value=n),e.current.previous),[n])}var Ss=["PageUp","PageDown"],Ds=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],ks={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},Pe="Slider",[uo,Mc,Hc]=Hr(Pe),[Is,bm]=mo(Pe,[Hc]),[Wc,Ft]=Is(Pe),Gs=c.forwardRef((n,e)=>{const{name:t,min:o=0,max:r=100,step:a=1,orientation:s="horizontal",disabled:i=!1,minStepsBetweenThumbs:l=0,defaultValue:d=[o],value:m,onValueChange:h=()=>{},onValueCommit:u=()=>{},inverted:y=!1,form:p,...g}=n,w=c.useRef(new Set),b=c.useRef(0),v=s==="horizontal"?zc:Qc,[x=[],A]=$r({prop:m,defaultProp:d,onChange:F=>{var L;(L=[...w.current][b.current])==null||L.focus(),h(F)}}),k=c.useRef(x);function G(F){const T=Xc(x,F);W(F,T)}function B(F){W(F,b.current)}function P(){const F=k.current[b.current];x[b.current]!==F&&u(x)}function W(F,T,{commit:L}={commit:!1}){const I=Zc(a),z=nm(Math.round((F-o)/a)*a+o,I),R=Cs(z,[o,r]);A((M=[])=>{const D=$c(M,R,T);if(Jc(D,l*a)){b.current=D.indexOf(R);const O=String(D)!==String(M);return O&&L&&u(D),O?D:M}else return M})}return f.jsx(Wc,{scope:n.__scopeSlider,name:t,disabled:i,min:o,max:r,valueIndexToChangeRef:b,thumbs:w.current,values:x,orientation:s,form:p,children:f.jsx(uo.Provider,{scope:n.__scopeSlider,children:f.jsx(uo.Slot,{scope:n.__scopeSlider,children:f.jsx(v,{"aria-disabled":i,"data-disabled":i?"":void 0,...g,ref:e,onPointerDown:K(g.onPointerDown,()=>{i||(k.current=x)}),min:o,max:r,inverted:y,onSlideStart:i?void 0:G,onSlideMove:i?void 0:B,onSlideEnd:i?void 0:P,onHomeKeyDown:()=>!i&&W(o,0,{commit:!0}),onEndKeyDown:()=>!i&&W(r,x.length-1,{commit:!0}),onStepKeyDown:({event:F,direction:T})=>{if(!i){const z=Ss.includes(F.key)||F.shiftKey&&Ds.includes(F.key)?10:1,R=b.current,M=x[R],D=a*z*T;W(M+D,R,{commit:!0})}}})})})})});Gs.displayName=Pe;var[Bs,Ts]=Is(Pe,{startEdge:"left",endEdge:"right",size:"width",direction:1}),zc=c.forwardRef((n,e)=>{const{min:t,max:o,dir:r,inverted:a,onSlideStart:s,onSlideMove:i,onSlideEnd:l,onStepKeyDown:d,...m}=n,[h,u]=c.useState(null),y=an(e,v=>u(v)),p=c.useRef(),g=_c(r),w=g==="ltr",b=w&&!a||!w&&a;function E(v){const x=p.current||h.getBoundingClientRect(),A=[0,x.width],G=Oo(A,b?[t,o]:[o,t]);return p.current=x,G(v-x.left)}return f.jsx(Bs,{scope:n.__scopeSlider,startEdge:b?"left":"right",endEdge:b?"right":"left",direction:b?1:-1,size:"width",children:f.jsx(Fs,{dir:g,"data-orientation":"horizontal",...m,ref:y,style:{...m.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:v=>{const x=E(v.clientX);s==null||s(x)},onSlideMove:v=>{const x=E(v.clientX);i==null||i(x)},onSlideEnd:()=>{p.current=void 0,l==null||l()},onStepKeyDown:v=>{const A=ks[b?"from-left":"from-right"].includes(v.key);d==null||d({event:v,direction:A?-1:1})}})})}),Qc=c.forwardRef((n,e)=>{const{min:t,max:o,inverted:r,onSlideStart:a,onSlideMove:s,onSlideEnd:i,onStepKeyDown:l,...d}=n,m=c.useRef(null),h=an(e,m),u=c.useRef(),y=!r;function p(g){const w=u.current||m.current.getBoundingClientRect(),b=[0,w.height],v=Oo(b,y?[o,t]:[t,o]);return u.current=w,v(g-w.top)}return f.jsx(Bs,{scope:n.__scopeSlider,startEdge:y?"bottom":"top",endEdge:y?"top":"bottom",size:"height",direction:y?1:-1,children:f.jsx(Fs,{"data-orientation":"vertical",...d,ref:h,style:{...d.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:g=>{const w=p(g.clientY);a==null||a(w)},onSlideMove:g=>{const w=p(g.clientY);s==null||s(w)},onSlideEnd:()=>{u.current=void 0,i==null||i()},onStepKeyDown:g=>{const b=ks[y?"from-bottom":"from-top"].includes(g.key);l==null||l({event:g,direction:b?-1:1})}})})}),Fs=c.forwardRef((n,e)=>{const{__scopeSlider:t,onSlideStart:o,onSlideMove:r,onSlideEnd:a,onHomeKeyDown:s,onEndKeyDown:i,onStepKeyDown:l,...d}=n,m=Ft(Pe,t);return f.jsx(en.span,{...d,ref:e,onKeyDown:K(n.onKeyDown,h=>{h.key==="Home"?(s(h),h.preventDefault()):h.key==="End"?(i(h),h.preventDefault()):Ss.concat(Ds).includes(h.key)&&(l(h),h.preventDefault())}),onPointerDown:K(n.onPointerDown,h=>{const u=h.target;u.setPointerCapture(h.pointerId),h.preventDefault(),m.thumbs.has(u)?u.focus():o(h)}),onPointerMove:K(n.onPointerMove,h=>{h.target.hasPointerCapture(h.pointerId)&&r(h)}),onPointerUp:K(n.onPointerUp,h=>{const u=h.target;u.hasPointerCapture(h.pointerId)&&(u.releasePointerCapture(h.pointerId),a(h))})})}),Rs="SliderTrack",Ps=c.forwardRef((n,e)=>{const{__scopeSlider:t,...o}=n,r=Ft(Rs,t);return f.jsx(en.span,{"data-disabled":r.disabled?"":void 0,"data-orientation":r.orientation,...o,ref:e})});Ps.displayName=Rs;var ho="SliderRange",js=c.forwardRef((n,e)=>{const{__scopeSlider:t,...o}=n,r=Ft(ho,t),a=Ts(ho,t),s=c.useRef(null),i=an(e,s),l=r.values.length,d=r.values.map(u=>Ns(u,r.min,r.max)),m=l>1?Math.min(...d):0,h=100-Math.max(...d);return f.jsx(en.span,{"data-orientation":r.orientation,"data-disabled":r.disabled?"":void 0,...o,ref:i,style:{...n.style,[a.startEdge]:m+"%",[a.endEdge]:h+"%"}})});js.displayName=ho;var co="SliderThumb",Os=c.forwardRef((n,e)=>{const t=Mc(n.__scopeSlider),[o,r]=c.useState(null),a=an(e,i=>r(i)),s=c.useMemo(()=>o?t().findIndex(i=>i.ref.current===o):-1,[t,o]);return f.jsx(Yc,{...n,ref:a,index:s})}),Yc=c.forwardRef((n,e)=>{const{__scopeSlider:t,index:o,name:r,...a}=n,s=Ft(co,t),i=Ts(co,t),[l,d]=c.useState(null),m=an(e,E=>d(E)),h=l?s.form||!!l.closest("form"):!0,u=Oa(l),y=s.values[o],p=y===void 0?0:Ns(y,s.min,s.max),g=Uc(o,s.values.length),w=u==null?void 0:u[i.size],b=w?Kc(w,p,i.direction):0;return c.useEffect(()=>{if(l)return s.thumbs.add(l),()=>{s.thumbs.delete(l)}},[l,s.thumbs]),f.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[i.startEdge]:`calc(${p}% + ${b}px)`},children:[f.jsx(uo.ItemSlot,{scope:n.__scopeSlider,children:f.jsx(en.span,{role:"slider","aria-label":n["aria-label"]||g,"aria-valuemin":s.min,"aria-valuenow":y,"aria-valuemax":s.max,"aria-orientation":s.orientation,"data-orientation":s.orientation,"data-disabled":s.disabled?"":void 0,tabIndex:s.disabled?void 0:0,...a,ref:m,style:y===void 0?{display:"none"}:n.style,onFocus:K(n.onFocus,()=>{s.valueIndexToChangeRef.current=o})})}),h&&f.jsx(Vc,{name:r??(s.name?s.name+(s.values.length>1?"[]":""):void 0),form:s.form,value:y},o)]})});Os.displayName=co;var Vc=n=>{const{value:e,...t}=n,o=c.useRef(null),r=Lc(e);return c.useEffect(()=>{const a=o.current,s=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(s,"value").set;if(r!==e&&l){const d=new Event("input",{bubbles:!0});l.call(a,e),a.dispatchEvent(d)}},[r,e]),f.jsx("input",{style:{display:"none"},...t,ref:o,defaultValue:e})};function $c(n=[],e,t){const o=[...n];return o[t]=e,o.sort((r,a)=>r-a)}function Ns(n,e,t){const a=100/(t-e)*(n-e);return Cs(a,[0,100])}function Uc(n,e){return e>2?`Value ${n+1} of ${e}`:e===2?["Minimum","Maximum"][n]:void 0}function Xc(n,e){if(n.length===1)return 0;const t=n.map(r=>Math.abs(r-e)),o=Math.min(...t);return t.indexOf(o)}function Kc(n,e,t){const o=n/2,a=Oo([0,50],[0,o]);return(o-a(e)*t)*t}function qc(n){return n.slice(0,-1).map((e,t)=>n[t+1]-e)}function Jc(n,e){if(e>0){const t=qc(n);return Math.min(...t)>=e}return!0}function Oo(n,e){return t=>{if(n[0]===n[1]||e[0]===e[1])return e[0];const o=(e[1]-e[0])/(n[1]-n[0]);return e[0]+o*(t-n[0])}}function Zc(n){return(String(n).split(".")[1]||"").length}function nm(n,e){const t=Math.pow(10,e);return Math.round(n*t)/t}var _s=Gs,em=Ps,tm=js,om=Os;const Ls=c.forwardRef(({className:n,...e},t)=>f.jsxs(_s,{ref:t,className:sn("relative flex w-full touch-none select-none items-center",n),...e,children:[f.jsx(em,{className:"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",children:f.jsx(tm,{className:"absolute h-full bg-primary"})}),f.jsx(om,{className:"block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"})]}));Ls.displayName=_s.displayName;async function rm(n,e,t,o){if(!n.current){wn.error("Unable to generate PDF. Please try again.");return}try{const r=n.current,a=r.cloneNode(!0);a.style.position="absolute",a.style.left="-9999px",a.style.top="0",a.style.width=r.offsetWidth+"px",a.style.height="auto",a.style.maxHeight="none",a.style.overflow="visible",a.style.backgroundColor="white",a.style.color="black",a.style.padding="20px";const s=document.createElement("div");s.innerHTML=`
      <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 8px; color: black;">${e}</h1>
      <p style="font-size: 18px; margin-bottom: 20px; color: #666;">by ${t}</p>
      ${o!==0?`<p style="font-size: 14px; margin-bottom: 15px; color: #888;">Transposed: ${o>0?"+":""}${o}</p>`:""}
    `,a.insertBefore(s,a.firstChild),document.body.appendChild(a);const i=await ii(a,{scale:2,useCORS:!0,backgroundColor:"#ffffff",logging:!1,width:a.scrollWidth,height:a.scrollHeight});document.body.removeChild(a);const l=i.toDataURL("image/png"),d=new li("p","mm","a4"),m=d.internal.pageSize.getWidth(),h=d.internal.pageSize.getHeight(),u=i.width,y=i.height,p=Math.min(m/(u*.264583),h/(y*.264583)),g=u*.264583*p,w=y*.264583*p,b=(m-g)/2,E=(h-w)/2;d.addImage(l,"PNG",b,E,g,w);const v=`${e.replace(/[^a-z0-9]/gi,"_").toLowerCase()}_chords.pdf`;d.save(v),wn.success("PDF generated successfully!")}catch(r){console.error("Error generating PDF:",r),wn.error("Failed to generate PDF. Please try again.")}}function am({artistName:n,songTitle:e,chordsText:t,chordsRef:o}){const{currentTransposition:r,setTransposition:a,isAutoscrolling:s,setIsAutoscrolling:i,autoscrollSpeed:l,setAutoscrollSpeed:d,addFavorite:m,removeFavorite:h,isFavorite:u}=ee(),[y,p]=c.useState(!1),g=u(n,e),w=B=>{B.preventDefault(),B.stopPropagation(),g?(h(n,e),wn.success("Removed from favorites")):(m(n,e),wn.success("Added to favorites"))},b=()=>{a(r+1)},E=()=>{a(r-1)},v=()=>{try{navigator.clipboard.writeText(t),wn.success("Copied to clipboard")}catch{wn.error("Failed to copy. Try again.")}},x=async()=>{const B=window.location.href;try{navigator.share?(await navigator.share({title:`${e} by ${n}`,text:`Check out the chords for "${e}" by ${n}`,url:B}),wn.success("Shared successfully")):(navigator.clipboard.writeText(B),wn.success("Link copied to clipboard"))}catch(P){P.name!=="AbortError"&&wn.error("Failed to share")}},A=()=>{window.print()},k=async()=>{p(!0),await rm(o,e,n,r),p(!1)},G=()=>{i(!s),s?wn.info("Auto-scroll paused"):wn.success("Auto-scroll started")};return f.jsxs("div",{className:"flex flex-col gap-4 p-4 bg-card rounded-lg shadow-sm border",children:[f.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:[f.jsxs(mn,{variant:"secondary",size:"sm",onClick:w,className:"flex items-center gap-1",children:[f.jsx(jr,{className:`h-4 w-4 ${g?"fill-yellow-400 text-yellow-400":""}`}),g?"Favorited":"Favorite"]}),f.jsxs(mn,{variant:"secondary",size:"sm",onClick:v,className:"flex items-center gap-1",children:[f.jsx(Zs,{className:"h-4 w-4"}),"Copy"]}),f.jsxs(mn,{variant:"secondary",size:"sm",onClick:x,className:"flex items-center gap-1",children:[f.jsx(ni,{className:"h-4 w-4"}),"Share"]}),f.jsxs("div",{className:"sm:col-span-1 flex gap-1",children:[f.jsx(mn,{variant:"outline",size:"sm",onClick:A,className:"flex-1",children:f.jsx(ei,{className:"h-4 w-4"})}),f.jsx(mn,{variant:"outline",size:"sm",onClick:k,className:"flex-1",id:"pdf-btn",children:f.jsx(ti,{className:"h-4 w-4"})})]})]}),f.jsx("div",{className:"space-y-2",children:f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("span",{className:"text-sm font-medium",children:["Transpose (",r>0?`+${r}`:r,")"]}),f.jsxs("div",{className:"flex gap-1",children:[f.jsx(mn,{variant:"outline",size:"sm",onClick:E,className:"h-8 w-8 p-0",children:f.jsx(oi,{className:"h-4 w-4"})}),f.jsx(mn,{variant:"outline",size:"sm",onClick:()=>a(0),className:"h-8",children:"Reset"}),f.jsx(mn,{variant:"outline",size:"sm",onClick:b,className:"h-8 w-8 p-0",children:f.jsx(ri,{className:"h-4 w-4"})})]})]})}),f.jsxs("div",{className:"space-y-2",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-sm font-medium",children:"Auto-scroll"}),f.jsx(mn,{variant:s?"default":"outline",size:"sm",onClick:G,className:"h-8",children:s?f.jsxs(f.Fragment,{children:[f.jsx(ai,{className:"h-4 w-4 mr-1"}),"Pause"]}):f.jsxs(f.Fragment,{children:[f.jsx(si,{className:"h-4 w-4 mr-1"}),"Play"]})})]}),s&&f.jsxs("div",{className:"pt-2",children:[f.jsxs("span",{className:"text-xs text-muted-foreground mb-1 block",children:["Speed: ",l.toFixed(1),"x"]}),f.jsx(Ls,{min:.5,max:1.5,step:.1,value:[l],onValueChange:B=>d(B[0])})]})]})]})}function sm(){const{artist:n,song:e}=ys(),t=ws(),[o,r]=c.useState(null),a=c.useRef(null);if(c.useEffect(()=>{if(n&&e){const l=decodeURIComponent(n),d=decodeURIComponent(e),m=Tt.artists.find(h=>h.name.toLowerCase()===l.toLowerCase());if(m){const h=m.songs.find(u=>u.title.toLowerCase()===d.toLowerCase());h?(r({song:h,artistName:m.name}),document.title=`${h.title} by ${m.name} | ChordVerse`):t(`/artist/${encodeURIComponent(l)}`)}else t("/")}},[n,e,t]),!o)return f.jsx(ue,{children:f.jsx("div",{className:"flex items-center justify-center h-[50vh]",children:f.jsx("p",{className:"text-lg text-muted-foreground",children:"Loading song..."})})});const{song:s,artistName:i}=o;return f.jsx(ue,{children:f.jsxs("div",{className:"space-y-6",children:[f.jsxs("div",{children:[f.jsx("h1",{className:"text-3xl font-bold",children:s.title}),f.jsxs("p",{className:"text-lg text-muted-foreground",children:["by ",i]})]}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[f.jsx("div",{className:"md:col-span-3 order-2 md:order-1",children:f.jsx("div",{className:"min-h-[70vh] bg-card/50 rounded-lg shadow-sm",children:f.jsx(As,{ref:a,chordsText:s.chords,originalKey:s.key})})}),f.jsx("div",{className:"md:col-span-1 order-1 md:order-2",children:f.jsx(am,{chordsRef:a,artistName:i,songTitle:s.title,chordsText:s.chords})})]})]})})}function im(){const{favorites:n}=ee(),[e,t]=c.useState([]);return c.useEffect(()=>{const o=Tt.artists,r=n.map(a=>{const s=o.find(l=>l.name===a.artistName),i=s==null?void 0:s.songs.find(l=>l.title===a.songTitle);return s&&i?{song:i,artistName:s.name}:null}).filter(Boolean);t(r)},[n]),f.jsx(ue,{children:f.jsxs("div",{className:"space-y-6",children:[f.jsx("h1",{className:"text-3xl font-bold",children:"Favorite Songs"}),e.length===0?f.jsxs("div",{className:"text-center py-12",children:[f.jsx("p",{className:"text-muted-foreground mb-4",children:"You haven't added any favorites yet."}),f.jsx("p",{children:"Browse songs and click the star icon to add them to your favorites."})]}):f.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",children:e.map(({song:o,artistName:r})=>f.jsx(xs,{song:o,artistName:r},`${r}-${o.title}`))})]})})}const lm=new wh,um=()=>f.jsx(ph,{client:lm,children:f.jsxs($d,{children:[f.jsx(Vl,{}),f.jsx(vu,{}),f.jsx(mc,{children:f.jsxs(sc,{children:[f.jsx(we,{path:"/",element:f.jsx(Tc,{})}),f.jsx(we,{path:"/favorites",element:f.jsx(im,{})}),f.jsx(we,{path:"/artist/:artist",element:f.jsx(Rc,{})}),f.jsx(we,{path:"/artist/:artist/song/:song",element:f.jsx(sm,{})}),f.jsx(we,{path:"*",element:f.jsx(Fc,{})})]})})]})});_r(document.getElementById("root")).render(f.jsx(um,{}));
