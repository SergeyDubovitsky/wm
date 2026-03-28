import{r as bt,p as yt,d as Qn,j as ct}from"./vendors-CwlMtw8m.js";const cc="modulepreload",dc=function(e){return"/"+e},di={},Bt=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){let s=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=i?.nonce||i?.getAttribute("nonce");o=s(n.map(c=>{if(c=dc(c),c in di)return;di[c]=!0;const d=c.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":cc,d||(u.as="script"),u.crossOrigin="",u.href=c,a&&u.setAttribute("nonce",a),document.head.appendChild(u),d)return new Promise((h,p)=>{u.addEventListener("load",h),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function l(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return o.then(i=>{for(const a of i||[])a.status==="rejected"&&l(a.reason);return t().catch(l)})};let Oe=[],ot=0,qn=0;const Co=e=>{let t=[],n={get(){return n.lc||n.listen(()=>{})(),n.value},lc:0,listen(r){return n.lc=t.push(r),()=>{for(let l=ot+4;l<Oe.length;)Oe[l]===r?Oe.splice(l,4):l+=4;let o=t.indexOf(r);~o&&(t.splice(o,1),--n.lc||n.off())}},notify(r,o){qn++;let l=!Oe.length;for(let i of t)Oe.push(i,n.value,r,o);if(l){for(ot=0;ot<Oe.length;ot+=4)Oe[ot](Oe[ot+1],Oe[ot+2],Oe[ot+3]);Oe.length=0}},off(){},set(r){let o=n.value;o!==r&&(n.value=r,n.notify(o))},subscribe(r){let o=n.listen(r);return r(n.value),o},value:e};return n};let fc=(e,t,n,r)=>(e.events=e.events||{},e.events[n+10]||(e.events[n+10]=r(o=>{e.events[n].reduceRight((l,i)=>(i(l),l),{shared:{},...o})})),e.events[n]=e.events[n]||[],e.events[n].push(t),()=>{let o=e.events[n],l=o.indexOf(t);o.splice(l,1),o.length||(delete e.events[n],e.events[n+10](),delete e.events[n+10])}),uc=(e,t)=>fc(e,r=>{let o=t(r);o&&e.events[6].push(o)},5,r=>{let o=e.listen;e.listen=(...i)=>(!e.lc&&!e.active&&(e.active=!0,r()),o(...i));let l=e.off;return e.events[6]=[],e.off=()=>{l(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let i of e.events[6])i();e.events[6]=[]}},1e3)},()=>{e.listen=o,e.off=l}}),hc=(e,t,n)=>{Array.isArray(e)||(e=[e]);let r,o,l=()=>{if(o===qn)return;o=qn;let c=e.map(d=>d.get());if(!r||c.some((d,f)=>d!==r[f])){r=c;let d=t(...c);d&&d.then&&d.t?d.then(f=>{r===c&&i.set(f)}):(i.set(d),o=qn)}},i=Co(void 0),a=i.get;i.get=()=>(l(),a());let s=l;return uc(i,()=>{let c=e.map(d=>d.listen(s));return l(),()=>{for(let d of c)d()}}),i};const fi=(e,t)=>hc(e,t);function pc(e,t,n){let r=new Set(t).add(void 0);return e.listen((o,l,i)=>{r.has(i)&&n(o,l,i)})}let vr=(e,t)=>n=>{e.current!==n&&(e.current=n,t())};function ro(e,{keys:t,deps:n=[e,t]}={}){let r=bt.useRef();r.current=e.get();let o=bt.useCallback(i=>(vr(r,i)(e.value),t?.length>0?pc(e,t,vr(r,i)):e.listen(vr(r,i))),n),l=()=>r.current;return bt.useSyncExternalStore(o,l,l)}Math.random.bind(Math);function mc(e,t,n){let r=o=>e(o,...t);return n===void 0?r:Object.assign(r,{lazy:n,lazyArgs:t})}function Sl(e,t,n){let r=e.length-t.length;if(r===0)return e(...t);if(r===1)return mc(e,t,n);throw Error("Wrong number of arguments")}function ui(...e){return Sl(Tn,e)}function Tn(e,t){if(e===t||Object.is(e,t))return!0;if(typeof e!="object"||typeof t!="object"||e===null||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;if(Array.isArray(e))return gc(e,t);if(e instanceof Map)return yc(e,t);if(e instanceof Set)return xc(e,t);if(e instanceof Date)return e.getTime()===t.getTime();if(e instanceof RegExp)return e.toString()===t.toString();if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let[n,r]of Object.entries(e))if(!(n in t)||!Tn(r,t[n]))return!1;return!0}function gc(e,t){if(e.length!==t.length)return!1;for(let[n,r]of e.entries())if(!Tn(r,t[n]))return!1;return!0}function yc(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e.entries())if(!t.has(n)||!Tn(r,t.get(n)))return!1;return!0}function xc(e,t){if(e.size!==t.size)return!1;let n=[...t];for(let r of e){let o=!1;for(let[l,i]of n.entries())if(Tn(r,i)){o=!0,n.splice(l,1);break}if(!o)return!1}return!0}function bc(...e){return Sl(Tc,e)}function Tc(e,t){let n={};for(let[r,o]of Object.entries(e))n[r]=t(o,r,e);return n}[...`	.
.\v.\f.\r. .. . . . . . . . . . . . . .\u2028.\u2029. . .　.\uFEFF`.split(".")];function kr(e){if(typeof e!="object"||!e)return!1;let t=Object.getPrototypeOf(e);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in e?!1:Symbol.toStringTag in e?Object.prototype.toString.call(e)==="[object Module]":!0}function oo(e,t,n=".",r){if(!kr(t))return oo(e,{},n);let o=Object.assign({},t);for(let l in e){if(l==="__proto__"||l==="constructor")continue;let i=e[l];i!=null&&(Array.isArray(i)&&Array.isArray(o[l])?o[l]=[...i,...o[l]]:kr(i)&&kr(o[l])?o[l]=oo(i,o[l],(n?`${n}.`:"")+l.toString()):o[l]=i)}return o}function vc(e){return(...t)=>t.reduce((n,r)=>oo(n,r,""),{})}const Pl=vc();function kc(e,t,n){let r=o=>e(o,...t);return n===void 0?r:Object.assign(r,{lazy:n,lazyArgs:t})}function se(e,t,n){let r=e.length-t.length;if(r===0)return e(...t);if(r===1)return kc(e,t,n);throw Error("Wrong number of arguments")}function wc(...e){return se(Bc,e)}const Bc=(e,t)=>t.every(n=>n(e));function Ec(...e){return se(Dc,e)}const Dc=(e,t)=>t.some(n=>n(e)),ar={done:!1,hasNext:!1},Ac=e=>({hasNext:!0,next:e,done:!1});function Me(e,...t){let n=e,r=t.map(l=>"lazy"in l?Fc(l):void 0),o=0;for(;o<t.length;){if(r[o]===void 0||!Nc(n)){let s=t[o];n=s(n),o+=1;continue}let l=[];for(let s=o;s<t.length;s++){let c=r[s];if(c===void 0||(l.push(c),c.isSingle))break}let i=[];for(let s of n)if(zl(s,i,l))break;let{isSingle:a}=l.at(-1);n=a?i[0]:i,o+=l.length}return n}function zl(e,t,n){if(n.length===0)return t.push(e),!1;let r=e,o=ar,l=!1;for(let[i,a]of n.entries()){let{index:s,items:c}=a;if(c.push(r),o=a(r,s,c),a.index+=1,o.hasNext){if(o.hasMany??!1){for(let d of o.next)if(zl(d,t,n.slice(i+1)))return!0;return l}r=o.next}if(!o.hasNext)break;o.done&&(l=!0)}return o.hasNext&&t.push(r),l}function Fc(e){let{lazy:t,lazyArgs:n}=e,r=t(...n);return Object.assign(r,{isSingle:t.single??!1,index:0,items:[]})}function Nc(e){return typeof e=="string"||typeof e=="object"&&!!e&&Symbol.iterator in e}function Oc(e,t){let n=t.length-e.length;if(n===1){let[r,...o]=t;return Me(r,{lazy:e,lazyArgs:o})}if(n===0){let r={lazy:e,lazyArgs:t};return Object.assign(o=>Me(o,r),r)}throw Error("Wrong number of arguments")}function Lc(...e){return se(Rc,e,Cc)}const Rc=(e,t)=>t<0?[...e]:e.slice(t);function Cc(e){if(e<=0)return Ac;let t=e;return n=>t>0?(--t,ar):{done:!1,hasNext:!0,next:n}}function Xe(...e){return se(Ic,e)}const Ic=(e,t)=>e.length>=t,Ml={asc:(e,t)=>e>t,desc:(e,t)=>e<t};function Sc(e,t){let[n,...r]=t;if(!Pc(n))return e(n,io(...r));let o=io(n,...r);return l=>e(l,o)}function io(e,t,...n){let r=typeof e=="function"?e:e[0],o=typeof e=="function"?"asc":e[1],{[o]:l}=Ml,i=t===void 0?void 0:io(t,...n);return(a,s)=>{let c=r(a),d=r(s);return l(c,d)?1:l(d,c)?-1:i?.(a,s)??0}}function Pc(e){if(hi(e))return!0;if(typeof e!="object"||!Array.isArray(e))return!1;let[t,n,...r]=e;return hi(t)&&typeof n=="string"&&n in Ml&&r.length===0}const hi=e=>typeof e=="function"&&e.length===1;function cn(...e){return se(Object.entries,e)}function Gl(...e){return se(zc,e,Mc)}const zc=(e,t)=>e.filter(t),Mc=e=>(t,n,r)=>e(t,n,r)?{done:!1,hasNext:!0,next:t}:ar;function pi(...e){return se(Gc,e,qc)}const Gc=(e,t)=>e.flatMap(t),qc=e=>(t,n,r)=>{let o=e(t,n,r);return Array.isArray(o)?{done:!1,hasNext:!0,hasMany:!0,next:o}:{done:!1,hasNext:!0,next:o}};function wr(...e){return se(Kc,e)}const Kc=(e,t)=>{let n=Object.create(null);for(let r=0;r<e.length;r++){let o=e[r],l=t(o,r,e);if(l!==void 0){let i=n[l];i===void 0?n[l]=[o]:i.push(o)}}return Object.setPrototypeOf(n,Object.prototype),n};function Yn(...e){return se(vn,e)}function vn(e,t){if(e===t||Object.is(e,t))return!0;if(typeof e!="object"||typeof t!="object"||e===null||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;if(Array.isArray(e))return Xc(e,t);if(e instanceof Map)return jc(e,t);if(e instanceof Set)return Wc(e,t);if(e instanceof Date)return e.getTime()===t.getTime();if(e instanceof RegExp)return e.toString()===t.toString();if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let[n,r]of Object.entries(e))if(!(n in t)||!vn(r,t[n]))return!1;return!0}function Xc(e,t){if(e.length!==t.length)return!1;for(let[n,r]of e.entries())if(!vn(r,t[n]))return!1;return!0}function jc(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e.entries())if(!t.has(n)||!vn(r,t.get(n)))return!1;return!0}function Wc(e,t){if(e.size!==t.size)return!1;let n=[...t];for(let r of e){let o=!1;for(let[l,i]of n.entries())if(vn(r,i)){o=!0,n.splice(l,1);break}if(!o)return!1}return!0}function kn(e){return e===""||e===void 0?!0:Array.isArray(e)?e.length===0:Object.keys(e).length===0}function qt(e){if(e==null||e==="")return!0;if(typeof e!="object")return!1;if("length"in e&&typeof e.length=="number")return e.length===0;if("size"in e&&typeof e.size=="number")return e.size===0;for(let t in e)return!1;return Object.getOwnPropertySymbols(e).length===0}const sr=e=>typeof e=="function";function Zc(e){return e!=null}function ql(e){return t=>!e(t)}function ne(e){return e==null}function Uc(e){return typeof e=="number"&&!Number.isNaN(e)}function Io(...e){return se(Hc,e)}function Hc(e,t){if(e===t||Object.is(e,t))return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;if(e instanceof Map&&t instanceof Map)return $c(e,t);if(e instanceof Set&&t instanceof Set)return Vc(e,t);let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let r of n){if(!Object.hasOwn(t,r))return!1;let{[r]:o}=e,{[r]:l}=t;if(o!==l||!Object.is(o,l))return!1}return!0}function $c(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e){let o=t.get(n);if(r!==o||!Object.is(r,o))return!1}return!0}function Vc(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function Ce(e){return typeof e=="string"}function Se(e){return!!e}function Qc(...e){return se(Yc,e)}const Yc=e=>e.at(-1);function pn(...e){return se(Jc,e,_c)}const Jc=(e,t)=>e.map(t),_c=e=>(t,n,r)=>({done:!1,hasNext:!0,next:e(t,n,r)});function Br(...e){return se(ed,e)}function ed(e,t){let n={};for(let[r,o]of Object.entries(e))n[r]=t(o,r,e);return n}function td(...e){return se(nd,e)}function nd(e,t){let n={...e};for(let[r,o]of Object.entries(n))t(o,r,e)&&delete n[r];return n}function rd(e){let t=!1,n;return()=>(t||=(n=e(),!0),n)}function mi(...e){return se(od,e)}function od(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function Er(...e){return t=>Me(t,...e)}function mt(e,...t){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"?n=>gi(n,e,...t):gi(e,...t)}function gi(e,...t){let n=e;for(let r of t){if(n==null)return;n=n[r]}return n}function id(e,t){let n=Math.ceil(e),r=Math.floor(t);if(r<n)throw RangeError(`randomInteger: The range [${e.toString()},${t.toString()}] contains no integer`);return Math.floor(Math.random()*(r-n+1)+n)}function ld(...e){return se(ad,e)}const ad=(e,t,n)=>e.reduce(t,n);function Dr(...e){return se(sd,e)}function sd(e,t){let n=[...e];return n.sort(t),n}function Kl(...e){return Sc(cd,e)}const cd=(e,t)=>[...e].sort(t);function yi(e,t,n){return typeof t=="number"||t===void 0?r=>r.split(e,t):e.split(t,n)}[...`	.
.\v.\f.\r. .. . . . . . . . . . . . . .\u2028.\u2029. . .　.\uFEFF`.split(".")];function cr(...e){return Oc(dd,e)}function dd(){let e=new Set;return t=>e.has(t)?ar:(e.add(t),{done:!1,hasNext:!0,next:t})}function Jn(...e){return se(Object.values,e)}function fd(...e){return se(ud,e,hd)}const ud=(e,t)=>e.length<t.length?e.map((n,r)=>[n,t[r]]):t.map((n,r)=>[e[r],n]),hd=e=>(t,n)=>({hasNext:!0,next:[t,e[n]],done:n>=e.length-1});var pd=Object.create,_n=Object.defineProperty,md=Object.getOwnPropertyDescriptor,gd=Object.getOwnPropertyNames,yd=Object.getPrototypeOf,xd=Object.prototype.hasOwnProperty,re=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),wn=(e,t)=>{let n={};for(var r in e)_n(n,r,{get:e[r],enumerable:!0});return _n(n,Symbol.toStringTag,{value:"Module"}),n},bd=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(var o=gd(t),l=0,i=o.length,a;l<i;l++)a=o[l],!xd.call(e,a)&&a!==n&&_n(e,a,{get:(s=>t[s]).bind(null,a),enumerable:!(r=md(t,a))||r.enumerable});return e},je=(e,t,n)=>(n=e==null?{}:pd(yd(e)),bd(_n(n,"default",{value:e,enumerable:!0}),e)),Td=re((e=>{e.ARRAY_BUFFER_SUPPORT=typeof ArrayBuffer<"u",e.SYMBOL_SUPPORT=typeof Symbol<"u"})),_e=re(((e,t)=>{var n=Td(),r=n.ARRAY_BUFFER_SUPPORT,o=n.SYMBOL_SUPPORT;t.exports=function(i,a){var s,c,d,f,u;if(!i)throw Error("obliterator/forEach: invalid iterable.");if(typeof a!="function")throw Error("obliterator/forEach: expecting a callback.");if(Array.isArray(i)||r&&ArrayBuffer.isView(i)||typeof i=="string"||i.toString()==="[object Arguments]"){for(d=0,f=i.length;d<f;d++)a(i[d],d);return}if(typeof i.forEach=="function"){i.forEach(a);return}if(o&&Symbol.iterator in i&&typeof i.next!="function"&&(i=i[Symbol.iterator]()),typeof i.next=="function"){for(s=i,d=0;u=s.next(),u.done!==!0;)a(u.value,d),d++;return}for(c in i)i.hasOwnProperty(c)&&a(i[c],c)}})),Ut=re(((e,t)=>{function n(r){if(typeof r!="function")throw Error("obliterator/iterator: expecting a function!");this.next=r}typeof Symbol<"u"&&(n.prototype[Symbol.iterator]=function(){return this}),n.of=function(){var r=arguments,o=r.length,l=0;return new n(function(){return l>=o?{done:!0}:{done:!1,value:r[l++]}})},n.empty=function(){return new n(function(){return{done:!0}})},n.fromSequence=function(r){var o=0,l=r.length;return new n(function(){return o>=l?{done:!0}:{done:!1,value:r[o++]}})},n.is=function(r){return r instanceof n?!0:typeof r=="object"&&!!r&&typeof r.next=="function"},t.exports=n})),dr=re((e=>{var t=255,n=2**16-1,r=2**32-1,o=2**7-1,l=2**15-1,i=2**31-1;e.getPointerArray=function(s){var c=s-1;if(c<=t)return Uint8Array;if(c<=n)return Uint16Array;if(c<=r)return Uint32Array;throw Error("mnemonist: Pointer Array of size > 4294967295 is not supported.")},e.getSignedPointerArray=function(s){var c=s-1;return c<=o?Int8Array:c<=l?Int16Array:c<=i?Int32Array:Float64Array},e.getNumberType=function(s){return s===(s|0)?Math.sign(s)===-1?s<=127&&s>=-128?Int8Array:s<=32767&&s>=-32768?Int16Array:Int32Array:s<=255?Uint8Array:s<=65535?Uint16Array:Uint32Array:Float64Array};var a={Uint8Array:1,Int8Array:2,Uint16Array:3,Int16Array:4,Uint32Array:5,Int32Array:6,Float32Array:7,Float64Array:8};e.getMinimalRepresentation=function(s,c){var d=null,f=0,u,h,p,T,b;for(T=0,b=s.length;T<b;T++)p=c?c(s[T]):s[T],h=e.getNumberType(p),u=a[h.name],u>f&&(f=u,d=h);return d},e.isTypedArray=function(s){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView(s)},e.concat=function(){var s=0,c,d,f;for(c=0,f=arguments.length;c<f;c++)s+=arguments[c].length;var u=new arguments[0].constructor(s);for(c=0,d=0;c<f;c++)u.set(arguments[c],d),d+=arguments[c].length;return u},e.indices=function(s){for(var c=new(e.getPointerArray(s))(s),d=0;d<s;d++)c[d]=d;return c}})),fr=re((e=>{var t=_e(),n=dr();function r(a){return Array.isArray(a)||n.isTypedArray(a)}function o(a){if(typeof a.length=="number")return a.length;if(typeof a.size=="number")return a.size}function l(a){var s=o(a),c=typeof s=="number"?Array(s):[],d=0;return t(a,function(f){c[d++]=f}),c}function i(a){var s=o(a),c=typeof s=="number"?n.getPointerArray(s):Array,d=typeof s=="number"?Array(s):[],f=typeof s=="number"?new c(s):[],u=0;return t(a,function(h){d[u]=h,f[u]=u++}),[d,f]}e.isArrayLike=r,e.guessLength=o,e.toArray=l,e.toArrayWithIndices=i})),Xl=re(((e,t)=>{t.exports=function(r){return typeof r=="object"&&!!r&&typeof r.addUndirectedEdgeWithKey=="function"&&typeof r.dropNode=="function"&&typeof r.multi=="boolean"}})),vd=re(((e,t)=>{var n=fr(),r=Ut();function o(l,i){if(arguments.length<2)throw Error("mnemonist/fixed-deque: expecting an Array class and a capacity.");if(typeof i!="number"||i<=0)throw Error("mnemonist/fixed-deque: `capacity` should be a positive number.");this.ArrayClass=l,this.capacity=i,this.items=new l(this.capacity),this.clear()}o.prototype.clear=function(){this.start=0,this.size=0},o.prototype.push=function(l){if(this.size===this.capacity)throw Error("mnemonist/fixed-deque.push: deque capacity ("+this.capacity+") exceeded!");var i=this.start+this.size;return i>=this.capacity&&(i-=this.capacity),this.items[i]=l,++this.size},o.prototype.unshift=function(l){if(this.size===this.capacity)throw Error("mnemonist/fixed-deque.unshift: deque capacity ("+this.capacity+") exceeded!");var i=this.start-1;return this.start===0&&(i=this.capacity-1),this.items[i]=l,this.start=i,++this.size},o.prototype.pop=function(){if(this.size!==0){this.size--;var l=this.start+this.size;return l>=this.capacity&&(l-=this.capacity),this.items[l]}},o.prototype.shift=function(){if(this.size!==0){var l=this.start;return this.size--,this.start++,this.start===this.capacity&&(this.start=0),this.items[l]}},o.prototype.peekFirst=function(){if(this.size!==0)return this.items[this.start]},o.prototype.peekLast=function(){if(this.size!==0){var l=this.start+this.size-1;return l>=this.capacity&&(l-=this.capacity),this.items[l]}},o.prototype.get=function(l){if(!(this.size===0||l>=this.capacity))return l=this.start+l,l>=this.capacity&&(l-=this.capacity),this.items[l]},o.prototype.forEach=function(l,i){i=arguments.length>1?i:this;for(var a=this.capacity,s=this.size,c=this.start,d=0;d<s;)l.call(i,this.items[c],d,this),c++,d++,c===a&&(c=0)},o.prototype.toArray=function(){var l=this.start+this.size;if(l<this.capacity)return this.items.slice(this.start,l);for(var i=new this.ArrayClass(this.size),a=this.capacity,s=this.size,c=this.start,d=0;d<s;)i[d]=this.items[c],c++,d++,c===a&&(c=0);return i},o.prototype.values=function(){var l=this.items,i=this.capacity,a=this.size,s=this.start,c=0;return new r(function(){if(c>=a)return{done:!0};var d=l[s];return s++,c++,s===i&&(s=0),{value:d,done:!1}})},o.prototype.entries=function(){var l=this.items,i=this.capacity,a=this.size,s=this.start,c=0;return new r(function(){if(c>=a)return{done:!0};var d=l[s];return s++,s===i&&(s=0),{value:[c++,d],done:!1}})},typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.values),o.prototype.inspect=function(){var l=this.toArray();return l.type=this.ArrayClass.name,l.capacity=this.capacity,Object.defineProperty(l,"constructor",{value:o,enumerable:!1}),l},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),o.from=function(l,i,a){if(arguments.length<3&&(a=n.guessLength(l),typeof a!="number"))throw Error("mnemonist/fixed-deque.from: could not guess iterable length. Please provide desired capacity as last argument.");var s=new o(i,a);if(n.isArrayLike(l)){var c,d;for(c=0,d=l.length;c<d;c++)s.items[c]=l[c];return s.size=d,s}return n.forEach(l,function(f){s.push(f)}),s},t.exports=o})),kd=re((e=>{let t=Xl(),n=vd();function r(i,a){let s=0;return i.forEachInNeighbor(a,()=>{s++}),s}function o(i,a){if(!t(i))throw Error("graphology-dag/topological-sort: the given graph is not a valid graphology instance.");if(i.type==="undirected"||i.undirectedSize!==0)throw Error("graphology-dag/topological-sort: cannot work if graph is not directed.");if(i.order===0)return;let s=new n(Array,i.order),c={},d=0;i.forEachNode((h,p)=>{let T=i.multi?r(i,h):i.inDegree(h);T===0?s.push([h,p,0]):(c[h]=T,d+=T)});let f=0;function u(h,p){let T=--c[h];d--,T===0&&s.push([h,p,f+1]),c[h]=T}for(;s.size!==0;){let[h,p,T]=s.shift();f=T,a(h,p,T),i.forEachOutNeighbor(h,u)}if(d!==0)throw Error("graphology-dag/topological-sort: given graph is not acyclic.")}function l(i){if(!t(i))throw Error("graphology-dag/topological-sort: the given graph is not a valid graphology instance.");let a=Array(i.order),s=0;return o(i,c=>{a[s++]=c}),a}e.topologicalSort=l})),wd=re(((e,t)=>{let n=Xl();t.exports=function(o,l,i){if(!n(o))throw Error("graphology-dag/will-create-cycle: the given graph is not a valid graphology instance.");if(l=""+l,i=""+i,l===i)return!0;if(!o.hasNode(l)||!o.hasNode(i)||o.hasDirectedEdge(l,i))return!1;if(o.hasDirectedEdge(i,l))return!0;let a=o.outNeighbors(i);function s(c){a.push(c)}for(;a.length!==0;){let c=a.pop();if(c===l)return!0;o.forEachOutNeighbor(c,s)}return!1}})),Bd=re(((e,t)=>{var n=_e();function r(s){this.size=0,this.items=new Map,this.inverse=s}function o(){this.size=0,this.items=new Map,this.inverse=new r(this)}function l(){this.size=0,this.items.clear(),this.inverse.items.clear()}o.prototype.clear=l,r.prototype.clear=l;function i(s,c){if(this.items.has(s)){var d=this.items.get(s);if(d===c)return this;this.inverse.items.delete(d)}if(this.inverse.items.has(c)){var f=this.inverse.items.get(c);if(f===s)return this;this.items.delete(f)}return this.items.set(s,c),this.inverse.items.set(c,s),this.size=this.items.size,this.inverse.size=this.inverse.items.size,this}o.prototype.set=i,r.prototype.set=i;function a(s){if(this.items.has(s)){var c=this.items.get(s);return this.items.delete(s),this.inverse.items.delete(c),this.size=this.items.size,this.inverse.size=this.inverse.items.size,!0}return!1}o.prototype.delete=a,r.prototype.delete=a,["has","get","forEach","keys","values","entries"].forEach(function(s){o.prototype[s]=r.prototype[s]=function(){return Map.prototype[s].apply(this.items,arguments)}}),typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.entries,r.prototype[Symbol.iterator]=r.prototype.entries),o.prototype.inspect=function(){var s={left:this.items,right:this.inverse.items};return Object.defineProperty(s,"constructor",{value:o,enumerable:!1}),s},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),r.prototype.inspect=function(){var s={left:this.inverse.items,right:this.items};return Object.defineProperty(s,"constructor",{value:r,enumerable:!1}),s},typeof Symbol<"u"&&(r.prototype[Symbol.for("nodejs.util.inspect.custom")]=r.prototype.inspect),o.from=function(s){var c=new o;return n(s,function(d,f){c.set(f,d)}),c},t.exports=o})),Ed=re(((e,t)=>{function n(r){if(typeof r!="function")throw Error("mnemonist/DefaultMap.constructor: expecting a function.");this.items=new Map,this.factory=r,this.size=0}n.prototype.clear=function(){this.items.clear(),this.size=0},n.prototype.get=function(r){var o=this.items.get(r);return o===void 0&&(o=this.factory(r,this.size),this.items.set(r,o),this.size++),o},n.prototype.peek=function(r){return this.items.get(r)},n.prototype.set=function(r,o){return this.items.set(r,o),this.size=this.items.size,this},n.prototype.has=function(r){return this.items.has(r)},n.prototype.delete=function(r){var o=this.items.delete(r);return this.size=this.items.size,o},n.prototype.forEach=function(r,o){o=arguments.length>1?o:this,this.items.forEach(r,o)},n.prototype.entries=function(){return this.items.entries()},n.prototype.keys=function(){return this.items.keys()},n.prototype.values=function(){return this.items.values()},typeof Symbol<"u"&&(n.prototype[Symbol.iterator]=n.prototype.entries),n.prototype.inspect=function(){return this.items},typeof Symbol<"u"&&(n.prototype[Symbol.for("nodejs.util.inspect.custom")]=n.prototype.inspect),n.autoIncrement=function(){var r=0;return function(){return r++}},t.exports=n})),Dd=re(((e,t)=>{function n(r){if(typeof r!="function")throw Error("mnemonist/DefaultWeakMap.constructor: expecting a function.");this.items=new WeakMap,this.factory=r}n.prototype.clear=function(){this.items=new WeakMap},n.prototype.get=function(r){var o=this.items.get(r);return o===void 0&&(o=this.factory(r),this.items.set(r,o)),o},n.prototype.peek=function(r){return this.items.get(r)},n.prototype.set=function(r,o){return this.items.set(r,o),this},n.prototype.has=function(r){return this.items.has(r)},n.prototype.delete=function(r){return this.items.delete(r)},n.prototype.inspect=function(){return this.items},typeof Symbol<"u"&&(n.prototype[Symbol.for("nodejs.util.inspect.custom")]=n.prototype.inspect),t.exports=n})),Ad=re(((e,t)=>{var n=Ut(),r=_e();function o(){this.clear()}o.prototype.clear=function(){this.head=null,this.tail=null,this.size=0},o.prototype.first=function(){return this.head?this.head.item:void 0},o.prototype.peek=o.prototype.first,o.prototype.last=function(){return this.tail?this.tail.item:void 0},o.prototype.push=function(l){var i={item:l,next:null};return this.head?(this.tail.next=i,this.tail=i):(this.head=i,this.tail=i),this.size++,this.size},o.prototype.unshift=function(l){var i={item:l,next:null};return this.head?(this.head.next||(this.tail=this.head),i.next=this.head,this.head=i):(this.head=i,this.tail=i),this.size++,this.size},o.prototype.shift=function(){if(this.size){var l=this.head;return this.head=l.next,this.size--,l.item}},o.prototype.forEach=function(l,i){if(this.size){i=arguments.length>1?i:this;for(var a=this.head,s=0;a;)l.call(i,a.item,s,this),a=a.next,s++}},o.prototype.toArray=function(){if(!this.size)return[];for(var l=Array(this.size),i=0,a=this.size,s=this.head;i<a;i++)l[i]=s.item,s=s.next;return l},o.prototype.values=function(){var l=this.head;return new n(function(){if(!l)return{done:!0};var i=l.item;return l=l.next,{value:i,done:!1}})},o.prototype.entries=function(){var l=this.head,i=0;return new n(function(){if(!l)return{done:!0};var a=l.item;return l=l.next,i++,{value:[i-1,a],done:!1}})},typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.values),o.prototype.toString=function(){return this.toArray().join(",")},o.prototype.toJSON=function(){return this.toArray()},o.prototype.inspect=function(){var l=this.toArray();return Object.defineProperty(l,"constructor",{value:o,enumerable:!1}),l},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),o.from=function(l){var i=new o;return r(l,function(a){i.push(a)}),i},t.exports=o})),Fd=re(((e,t)=>{var n=Ut(),r=_e();function o(l){this.Container=l||Array,this.items=new Map,this.clear(),Object.defineProperty(this.items,"constructor",{value:o,enumerable:!1})}o.prototype.clear=function(){this.size=0,this.dimension=0,this.items.clear()},o.prototype.set=function(l,i){var a=this.items.get(l),s;return a||(this.dimension++,a=new this.Container,this.items.set(l,a)),this.Container===Set?(s=a.size,a.add(i),s<a.size&&this.size++):(a.push(i),this.size++),this},o.prototype.delete=function(l){var i=this.items.get(l);return i?(this.size-=this.Container===Set?i.size:i.length,this.dimension--,this.items.delete(l),!0):!1},o.prototype.remove=function(l,i){var a=this.items.get(l),s,c;return a?this.Container===Set?(s=a.delete(i),s&&this.size--,a.size===0&&(this.items.delete(l),this.dimension--),s):(c=a.indexOf(i),c===-1?!1:(this.size--,a.length===1?(this.items.delete(l),this.dimension--,!0):(a.splice(c,1),!0))):!1},o.prototype.has=function(l){return this.items.has(l)},o.prototype.get=function(l){return this.items.get(l)},o.prototype.multiplicity=function(l){var i=this.items.get(l);return i===void 0?0:this.Container===Set?i.size:i.length},o.prototype.count=o.prototype.multiplicity,o.prototype.forEach=function(l,i){i=arguments.length>1?i:this;var a;function s(c){l.call(i,c,a)}this.items.forEach(function(c,d){a=d,c.forEach(s)})},o.prototype.forEachAssociation=function(l,i){i=arguments.length>1?i:this,this.items.forEach(l,i)},o.prototype.keys=function(){return this.items.keys()},o.prototype.values=function(){var l=this.items.values(),i=!1,a,s,c,d;return this.Container===Set?new n(function f(){if(!i){if(s=l.next(),s.done)return{done:!0};i=!0,a=s.value.values()}return s=a.next(),s.done?(i=!1,f()):{done:!1,value:s.value}}):new n(function f(){if(!i){if(s=l.next(),s.done)return{done:!0};i=!0,a=s.value,c=0,d=a.length}return c>=d?(i=!1,f()):{done:!1,value:a[c++]}})},o.prototype.entries=function(){var l=this.items.entries(),i=!1,a,s,c,d,f;return this.Container===Set?new n(function u(){if(!i){if(s=l.next(),s.done)return{done:!0};i=!0,c=s.value[0],a=s.value[1].values()}return s=a.next(),s.done?(i=!1,u()):{done:!1,value:[c,s.value]}}):new n(function u(){if(!i){if(s=l.next(),s.done)return{done:!0};i=!0,c=s.value[0],a=s.value[1],d=0,f=a.length}return d>=f?(i=!1,u()):{done:!1,value:[c,a[d++]]}})},o.prototype.containers=function(){return this.items.values()},o.prototype.associations=function(){return this.items.entries()},typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.entries),o.prototype.inspect=function(){return this.items},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),o.prototype.toJSON=function(){return this.items},o.from=function(l,i){var a=new o(i);return r(l,function(s,c){a.set(c,s)}),a},t.exports=o})),Nd=re(((e,t)=>{var n=Ut(),r=_e();function o(){this.clear()}o.prototype.clear=function(){this.items=[],this.offset=0,this.size=0},o.prototype.enqueue=function(l){return this.items.push(l),++this.size},o.prototype.dequeue=function(){if(this.size){var l=this.items[this.offset];return++this.offset*2>=this.items.length&&(this.items=this.items.slice(this.offset),this.offset=0),this.size--,l}},o.prototype.peek=function(){if(this.size)return this.items[this.offset]},o.prototype.forEach=function(l,i){i=arguments.length>1?i:this;for(var a=this.offset,s=0,c=this.items.length;a<c;a++,s++)l.call(i,this.items[a],s,this)},o.prototype.toArray=function(){return this.items.slice(this.offset)},o.prototype.values=function(){var l=this.items,i=this.offset;return new n(function(){if(i>=l.length)return{done:!0};var a=l[i];return i++,{value:a,done:!1}})},o.prototype.entries=function(){var l=this.items,i=this.offset,a=0;return new n(function(){if(i>=l.length)return{done:!0};var s=l[i];return i++,{value:[a++,s],done:!1}})},typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.values),o.prototype.toString=function(){return this.toArray().join(",")},o.prototype.toJSON=function(){return this.toArray()},o.prototype.inspect=function(){var l=this.toArray();return Object.defineProperty(l,"constructor",{value:o,enumerable:!1}),l},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),o.from=function(l){var i=new o;return r(l,function(a){i.enqueue(a)}),i},o.of=function(){return o.from(arguments)},t.exports=o})),Od=re(((e,t)=>{var n=Ut(),r=_e(),o=dr(),l=fr();function i(a,s,c){if(arguments.length<2&&(c=a,a=null,s=null),this.capacity=c,typeof this.capacity!="number"||this.capacity<=0)throw Error("mnemonist/lru-cache: capacity should be positive number.");if(!isFinite(this.capacity)||Math.floor(this.capacity)!==this.capacity)throw Error("mnemonist/lru-cache: capacity should be a finite positive integer.");var d=o.getPointerArray(c);this.forward=new d(c),this.backward=new d(c),this.K=typeof a=="function"?new a(c):Array(c),this.V=typeof s=="function"?new s(c):Array(c),this.size=0,this.head=0,this.tail=0,this.items={}}i.prototype.clear=function(){this.size=0,this.head=0,this.tail=0,this.items={}},i.prototype.splayOnTop=function(a){var s=this.head;if(this.head===a)return this;var c=this.backward[a],d=this.forward[a];return this.tail===a?this.tail=c:this.backward[d]=c,this.forward[c]=d,this.backward[s]=a,this.head=a,this.forward[a]=s,this},i.prototype.set=function(a,s){var c=this.items[a];if(c!==void 0){this.splayOnTop(c),this.V[c]=s;return}this.size<this.capacity?c=this.size++:(c=this.tail,this.tail=this.backward[c],delete this.items[this.K[c]]),this.items[a]=c,this.K[c]=a,this.V[c]=s,this.forward[c]=this.head,this.backward[this.head]=c,this.head=c},i.prototype.setpop=function(a,s){var c=null,d=null,f=this.items[a];return f===void 0?(this.size<this.capacity?f=this.size++:(f=this.tail,this.tail=this.backward[f],c=this.V[f],d=this.K[f],delete this.items[d]),this.items[a]=f,this.K[f]=a,this.V[f]=s,this.forward[f]=this.head,this.backward[this.head]=f,this.head=f,d?{evicted:!0,key:d,value:c}:null):(this.splayOnTop(f),c=this.V[f],this.V[f]=s,{evicted:!1,key:a,value:c})},i.prototype.has=function(a){return a in this.items},i.prototype.get=function(a){var s=this.items[a];if(s!==void 0)return this.splayOnTop(s),this.V[s]},i.prototype.peek=function(a){var s=this.items[a];if(s!==void 0)return this.V[s]},i.prototype.forEach=function(a,s){s=arguments.length>1?s:this;for(var c=0,d=this.size,f=this.head,u=this.K,h=this.V,p=this.forward;c<d;)a.call(s,h[f],u[f],this),f=p[f],c++},i.prototype.keys=function(){var a=0,s=this.size,c=this.head,d=this.K,f=this.forward;return new n(function(){if(a>=s)return{done:!0};var u=d[c];return a++,a<s&&(c=f[c]),{done:!1,value:u}})},i.prototype.values=function(){var a=0,s=this.size,c=this.head,d=this.V,f=this.forward;return new n(function(){if(a>=s)return{done:!0};var u=d[c];return a++,a<s&&(c=f[c]),{done:!1,value:u}})},i.prototype.entries=function(){var a=0,s=this.size,c=this.head,d=this.K,f=this.V,u=this.forward;return new n(function(){if(a>=s)return{done:!0};var h=d[c],p=f[c];return a++,a<s&&(c=u[c]),{done:!1,value:[h,p]}})},typeof Symbol<"u"&&(i.prototype[Symbol.iterator]=i.prototype.entries),i.prototype.inspect=function(){for(var a=new Map,s=this.entries(),c;c=s.next(),!c.done;)a.set(c.value[0],c.value[1]);return Object.defineProperty(a,"constructor",{value:i,enumerable:!1}),a},typeof Symbol<"u"&&(i.prototype[Symbol.for("nodejs.util.inspect.custom")]=i.prototype.inspect),i.from=function(a,s,c,d){if(arguments.length<2){if(d=l.guessLength(a),typeof d!="number")throw Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.")}else arguments.length===2&&(d=s,s=null,c=null);var f=new i(s,c,d);return r(a,function(u,h){f.set(h,u)}),f},t.exports=i})),jl=re(((e,t)=>{var n=Od(),r=_e(),o=dr(),l=fr();function i(a,s,c){if(arguments.length<2&&(c=a,a=null,s=null),this.capacity=c,typeof this.capacity!="number"||this.capacity<=0)throw Error("mnemonist/lru-map: capacity should be positive number.");if(!isFinite(this.capacity)||Math.floor(this.capacity)!==this.capacity)throw Error("mnemonist/lru-map: capacity should be a finite positive integer.");var d=o.getPointerArray(c);this.forward=new d(c),this.backward=new d(c),this.K=typeof a=="function"?new a(c):Array(c),this.V=typeof s=="function"?new s(c):Array(c),this.size=0,this.head=0,this.tail=0,this.items=new Map}i.prototype.clear=function(){this.size=0,this.head=0,this.tail=0,this.items.clear()},i.prototype.set=function(a,s){var c=this.items.get(a);if(c!==void 0){this.splayOnTop(c),this.V[c]=s;return}this.size<this.capacity?c=this.size++:(c=this.tail,this.tail=this.backward[c],this.items.delete(this.K[c])),this.items.set(a,c),this.K[c]=a,this.V[c]=s,this.forward[c]=this.head,this.backward[this.head]=c,this.head=c},i.prototype.setpop=function(a,s){var c=null,d=null,f=this.items.get(a);return f===void 0?(this.size<this.capacity?f=this.size++:(f=this.tail,this.tail=this.backward[f],c=this.V[f],d=this.K[f],this.items.delete(d)),this.items.set(a,f),this.K[f]=a,this.V[f]=s,this.forward[f]=this.head,this.backward[this.head]=f,this.head=f,d?{evicted:!0,key:d,value:c}:null):(this.splayOnTop(f),c=this.V[f],this.V[f]=s,{evicted:!1,key:a,value:c})},i.prototype.has=function(a){return this.items.has(a)},i.prototype.get=function(a){var s=this.items.get(a);if(s!==void 0)return this.splayOnTop(s),this.V[s]},i.prototype.peek=function(a){var s=this.items.get(a);if(s!==void 0)return this.V[s]},i.prototype.splayOnTop=n.prototype.splayOnTop,i.prototype.forEach=n.prototype.forEach,i.prototype.keys=n.prototype.keys,i.prototype.values=n.prototype.values,i.prototype.entries=n.prototype.entries,typeof Symbol<"u"&&(i.prototype[Symbol.iterator]=i.prototype.entries),i.prototype.inspect=n.prototype.inspect,i.from=function(a,s,c,d){if(arguments.length<2){if(d=l.guessLength(a),typeof d!="number")throw Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.")}else arguments.length===2&&(d=s,s=null,c=null);var f=new i(s,c,d);return r(a,function(u,h){f.set(h,u)}),f},t.exports=i})),Ld=re(((e,t)=>{var n=jl(),r=_e(),o=dr(),l=fr();function i(s,c,d){arguments.length<2?n.call(this,s):n.call(this,s,c,d),this.deleted=new(o.getPointerArray(this.capacity))(this.capacity),this.deletedSize=0}for(var a in n.prototype)i.prototype[a]=n.prototype[a];typeof Symbol<"u"&&(i.prototype[Symbol.iterator]=n.prototype[Symbol.iterator]),i.prototype.clear=function(){n.prototype.clear.call(this),this.deletedSize=0},i.prototype.set=function(s,c){var d=this.items.get(s);if(d!==void 0){this.splayOnTop(d),this.V[d]=c;return}this.size<this.capacity?(d=this.deletedSize>0?this.deleted[--this.deletedSize]:this.size,this.size++):(d=this.tail,this.tail=this.backward[d],this.items.delete(this.K[d])),this.items.set(s,d),this.K[d]=s,this.V[d]=c,this.forward[d]=this.head,this.backward[this.head]=d,this.head=d},i.prototype.setpop=function(s,c){var d=null,f=null,u=this.items.get(s);return u===void 0?(this.size<this.capacity?(u=this.deletedSize>0?this.deleted[--this.deletedSize]:this.size,this.size++):(u=this.tail,this.tail=this.backward[u],d=this.V[u],f=this.K[u],this.items.delete(f)),this.items.set(s,u),this.K[u]=s,this.V[u]=c,this.forward[u]=this.head,this.backward[this.head]=u,this.head=u,f?{evicted:!0,key:f,value:d}:null):(this.splayOnTop(u),d=this.V[u],this.V[u]=c,{evicted:!1,key:s,value:d})},i.prototype.delete=function(s){var c=this.items.get(s);if(c===void 0)return!1;if(this.items.delete(s),this.size===1)return this.size=0,this.head=0,this.tail=0,this.deletedSize=0,!0;var d=this.backward[c],f=this.forward[c];return this.head===c&&(this.head=f),this.tail===c&&(this.tail=d),this.forward[d]=f,this.backward[f]=d,this.size--,this.deleted[this.deletedSize++]=c,!0},i.prototype.remove=function(s,c=void 0){var d=this.items.get(s);if(d===void 0)return c;var f=this.V[d];if(this.items.delete(s),this.size===1)return this.size=0,this.head=0,this.tail=0,this.deletedSize=0,f;var u=this.backward[d],h=this.forward[d];return this.head===d&&(this.head=h),this.tail===d&&(this.tail=u),this.forward[u]=h,this.backward[h]=u,this.size--,this.deleted[this.deletedSize++]=d,f},i.from=function(s,c,d,f){if(arguments.length<2){if(f=l.guessLength(s),typeof f!="number")throw Error("mnemonist/lru-map.from: could not guess iterable length. Please provide desired capacity as last argument.")}else arguments.length===2&&(f=c,c=null,d=null);var u=new i(c,d,f);return r(s,function(h,p){u.set(p,h)}),u},t.exports=i})),Rd=re((e=>{e.intersection=function(){if(arguments.length<2)throw Error("mnemonist/Set.intersection: needs at least two arguments.");var t=new Set,n=1/0,r=null,o,l,i=arguments.length;for(l=0;l<i;l++){if(o=arguments[l],o.size===0)return t;o.size<n&&(n=o.size,r=o)}for(var a=r.values(),s,c,d,f;s=a.next(),!s.done;){for(c=s.value,d=!0,l=0;l<i;l++)if(f=arguments[l],f!==r&&!f.has(c)){d=!1;break}d&&t.add(c)}return t},e.union=function(){if(arguments.length<2)throw Error("mnemonist/Set.union: needs at least two arguments.");var t=new Set,n,r=arguments.length,o,l;for(n=0;n<r;n++)for(o=arguments[n].values();l=o.next(),!l.done;)t.add(l.value);return t},e.difference=function(t,n){if(!t.size)return new Set;if(!n.size)return new Set(t);for(var r=new Set,o=t.values(),l;l=o.next(),!l.done;)n.has(l.value)||r.add(l.value);return r},e.symmetricDifference=function(t,n){for(var r=new Set,o=t.values(),l;l=o.next(),!l.done;)n.has(l.value)||r.add(l.value);for(o=n.values();l=o.next(),!l.done;)t.has(l.value)||r.add(l.value);return r},e.isSubset=function(t,n){var r=t.values(),o;if(t===n)return!0;if(t.size>n.size)return!1;for(;o=r.next(),!o.done;)if(!n.has(o.value))return!1;return!0},e.isSuperset=function(t,n){return e.isSubset(n,t)},e.add=function(t,n){for(var r=n.values(),o;o=r.next(),!o.done;)t.add(o.value)},e.subtract=function(t,n){for(var r=n.values(),o;o=r.next(),!o.done;)t.delete(o.value)},e.intersect=function(t,n){for(var r=t.values(),o;o=r.next(),!o.done;)n.has(o.value)||t.delete(o.value)},e.disjunct=function(t,n){for(var r=t.values(),o,l=[];o=r.next(),!o.done;)n.has(o.value)&&l.push(o.value);for(r=n.values();o=r.next(),!o.done;)t.has(o.value)||t.add(o.value);for(var i=0,a=l.length;i<a;i++)t.delete(l[i])},e.intersectionSize=function(t,n){var r;if(t.size>n.size&&(r=t,t=n,n=r),t.size===0)return 0;if(t===n)return t.size;for(var o=t.values(),l,i=0;l=o.next(),!l.done;)n.has(l.value)&&i++;return i},e.unionSize=function(t,n){var r=e.intersectionSize(t,n);return t.size+n.size-r},e.jaccard=function(t,n){var r=e.intersectionSize(t,n);return r===0?0:r/(t.size+n.size-r)},e.overlap=function(t,n){var r=e.intersectionSize(t,n);return r===0?0:r/Math.min(t.size,n.size)}})),Cd=re(((e,t)=>{var n=Ut(),r=_e();function o(){this.clear()}o.prototype.clear=function(){this.items=[],this.size=0},o.prototype.push=function(l){return this.items.push(l),++this.size},o.prototype.pop=function(){if(this.size!==0)return this.size--,this.items.pop()},o.prototype.peek=function(){return this.items[this.size-1]},o.prototype.forEach=function(l,i){i=arguments.length>1?i:this;for(var a=0,s=this.items.length;a<s;a++)l.call(i,this.items[s-a-1],a,this)},o.prototype.toArray=function(){for(var l=Array(this.size),i=this.size-1,a=this.size;a--;)l[a]=this.items[i-a];return l},o.prototype.values=function(){var l=this.items,i=l.length,a=0;return new n(function(){if(a>=i)return{done:!0};var s=l[i-a-1];return a++,{value:s,done:!1}})},o.prototype.entries=function(){var l=this.items,i=l.length,a=0;return new n(function(){if(a>=i)return{done:!0};var s=l[i-a-1];return{value:[a++,s],done:!1}})},typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.values),o.prototype.toString=function(){return this.toArray().join(",")},o.prototype.toJSON=function(){return this.toArray()},o.prototype.inspect=function(){var l=this.toArray();return Object.defineProperty(l,"constructor",{value:o,enumerable:!1}),l},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),o.from=function(l){var i=new o;return r(l,function(a){i.push(a)}),i},o.of=function(){return o.from(arguments)},t.exports=o}));Bd();var de=je(Ed()),So=je(Dd()),Wl=je(Ad()),Zl=je(Fd()),Ul=je(Nd()),xi=je(jl());Ld();var Hl=Rd(),Id=je(Cd()),Sd=re(((e,t)=>{var n=function(r,o){var l,i,a=1,s=0,c=0,d=String.alphabet;function f(u,h,p){if(p){for(l=h;p=f(u,l),p<76&&p>65;)++l;return+u.slice(h-1,l)}return p=d&&d.indexOf(u.charAt(h)),p>-1?p+76:(p=u.charCodeAt(h)||0,p<45||p>127?p:p<46?65:p<48?p-1:p<58?p+18:p<65?p-11:p<91?p+11:p<97?p-37:p<123?p+5:p-63)}if((r+="")!=(o+="")){for(;a;)if(i=f(r,s++),a=f(o,c++),i<76&&a<76&&i>66&&a>66&&(i=f(r,s,s),a=f(o,c,s=l),c=l),i!=a)return i<a?-1:1}return 0};try{t.exports=n}catch{String.naturalCompare=n}}));function Pd(e){return typeof e=="string"?`'${e}'`:new zd().serialize(e)}const zd=(function(){class e{#e=new Map;compare(n,r){let o=typeof n,l=typeof r;return o==="string"&&l==="string"?n.localeCompare(r):o==="number"&&l==="number"?n-r:String.prototype.localeCompare.call(this.serialize(n,!0),this.serialize(r,!0))}serialize(n,r){if(n===null)return"null";switch(typeof n){case"string":return r?n:`'${n}'`;case"bigint":return`${n}n`;case"object":return this.$object(n);case"function":return this.$function(n)}return String(n)}serializeObject(n){let r=Object.prototype.toString.call(n);if(r!=="[object Object]")return this.serializeBuiltInType(r.length<10?`unknown:${r}`:r.slice(8,-1),n);let o=n.constructor,l=o===Object||o===void 0?"":o.name;if(l!==""&&globalThis[l]===o)return this.serializeBuiltInType(l,n);if(typeof n.toJSON=="function"){let i=n.toJSON();return l+(typeof i=="object"&&i?this.$object(i):`(${this.serialize(i)})`)}return this.serializeObjectEntries(l,Object.entries(n))}serializeBuiltInType(n,r){let o=this["$"+n];if(o)return o.call(this,r);if(typeof r?.entries=="function")return this.serializeObjectEntries(n,r.entries());throw Error(`Cannot serialize ${n}`)}serializeObjectEntries(n,r){let o=Array.from(r).sort((i,a)=>this.compare(i[0],a[0])),l=`${n}{`;for(let i=0;i<o.length;i++){let[a,s]=o[i];l+=`${this.serialize(a,!0)}:${this.serialize(s)}`,i<o.length-1&&(l+=",")}return l+"}"}$object(n){let r=this.#e.get(n);return r===void 0&&(this.#e.set(n,`#${this.#e.size}`),r=this.serializeObject(n),this.#e.set(n,r)),r}$function(n){let r=Function.prototype.toString.call(n);return r.slice(-15)==="[native code] }"?`${n.name||""}()[native]`:`${n.name}(${n.length})${r.replace(/\s*\n\s*/g,"")}`}$Array(n){let r="[";for(let o=0;o<n.length;o++)r+=this.serialize(n[o]),o<n.length-1&&(r+=",");return r+"]"}$Date(n){try{return`Date(${n.toISOString()})`}catch{return"Date(null)"}}$ArrayBuffer(n){return`ArrayBuffer[${new Uint8Array(n).join(",")}]`}$Set(n){return`Set${this.$Array(Array.from(n).sort((r,o)=>this.compare(r,o)))}`}$Map(n){return this.serializeObjectEntries("Map",n.entries())}}for(let t of["Error","RegExp","URL"])e.prototype["$"+t]=function(n){return`${t}(${n})`};for(let t of["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])e.prototype["$"+t]=function(n){return`${t}[${n.join(",")}]`};for(let t of["BigInt64Array","BigUint64Array"])e.prototype["$"+t]=function(n){return`${t}[${n.join("n,")}${n.length>0?"n":""}]`};return e})(),Md=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Gd=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],ut=[];var qd=class{_data=new Fn;_hash=new Fn([...Md]);_nDataBytes=0;_minBufferSize=0;finalize(t){t&&this._append(t);let n=this._nDataBytes*8,r=this._data.sigBytes*8;return this._data.words[r>>>5]|=128<<24-r%32,this._data.words[(r+64>>>9<<4)+14]=Math.floor(n/4294967296),this._data.words[(r+64>>>9<<4)+15]=n,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}_doProcessBlock(t,n){let r=this._hash.words,o=r[0],l=r[1],i=r[2],a=r[3],s=r[4],c=r[5],d=r[6],f=r[7];for(let u=0;u<64;u++){if(u<16)ut[u]=t[n+u]|0;else{let B=ut[u-15],R=(B<<25|B>>>7)^(B<<14|B>>>18)^B>>>3,S=ut[u-2],w=(S<<15|S>>>17)^(S<<13|S>>>19)^S>>>10;ut[u]=R+ut[u-7]+w+ut[u-16]}let h=s&c^~s&d,p=o&l^o&i^l&i,T=(o<<30|o>>>2)^(o<<19|o>>>13)^(o<<10|o>>>22),b=(s<<26|s>>>6)^(s<<21|s>>>11)^(s<<7|s>>>25),y=f+b+h+Gd[u]+ut[u],F=T+p;f=d,d=c,c=s,s=a+y|0,a=i,i=l,l=o,o=y+F|0}r[0]=r[0]+o|0,r[1]=r[1]+l|0,r[2]=r[2]+i|0,r[3]=r[3]+a|0,r[4]=r[4]+s|0,r[5]=r[5]+c|0,r[6]=r[6]+d|0,r[7]=r[7]+f|0}_append(t){typeof t=="string"&&(t=Fn.fromUtf8(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes}_process(t){let n,r=this._data.sigBytes/64;r=t?Math.ceil(r):Math.max((r|0)-this._minBufferSize,0);let o=r*16,l=Math.min(o*4,this._data.sigBytes);if(o){for(let i=0;i<o;i+=16)this._doProcessBlock(this._data.words,i);n=this._data.words.splice(0,o),this._data.sigBytes-=l}return new Fn(n,l)}},Fn=class $l{words;sigBytes;constructor(t,n){t=this.words=t||[],this.sigBytes=n===void 0?t.length*4:n}static fromUtf8(t){let n=unescape(encodeURIComponent(t)),r=n.length,o=[];for(let l=0;l<r;l++)o[l>>>2]|=(n.charCodeAt(l)&255)<<24-l%4*8;return new $l(o,r)}toBase64(){let t=[];for(let n=0;n<this.sigBytes;n+=3){let r=this.words[n>>>2]>>>24-n%4*8&255,o=this.words[n+1>>>2]>>>24-(n+1)%4*8&255,l=this.words[n+2>>>2]>>>24-(n+2)%4*8&255,i=r<<16|o<<8|l;for(let a=0;a<4&&n*8+a*6<this.sigBytes*8;a++)t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(i>>>6*(3-a)&63))}return t.join("")}concat(t){if(this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4),this.sigBytes%4)for(let n=0;n<t.sigBytes;n++){let r=t.words[n>>>2]>>>24-n%4*8&255;this.words[this.sigBytes+n>>>2]|=r<<24-(this.sigBytes+n)%4*8}else for(let n=0;n<t.sigBytes;n+=4)this.words[this.sigBytes+n>>>2]=t.words[n>>>2];this.sigBytes+=t.sigBytes}};function Kd(e){return new qd().finalize(e).toBase64()}function Xd(e){return Kd(Pd(e))}const bi=typeof self=="object"?self:globalThis,jd=(e,t)=>{let n=(o,l)=>(e.set(l,o),o),r=o=>{if(e.has(o))return e.get(o);let[l,i]=t[o];switch(l){case 0:case-1:return n(i,o);case 1:{let a=n([],o);for(let s of i)a.push(r(s));return a}case 2:{let a=n({},o);for(let[s,c]of i)a[r(s)]=r(c);return a}case 3:return n(new Date(i),o);case 4:{let{source:a,flags:s}=i;return n(new RegExp(a,s),o)}case 5:{let a=n(new Map,o);for(let[s,c]of i)a.set(r(s),r(c));return a}case 6:{let a=n(new Set,o);for(let s of i)a.add(r(s));return a}case 7:{let{name:a,message:s}=i;return n(new bi[a](s),o)}case 8:return n(BigInt(i),o);case"BigInt":return n(Object(BigInt(i)),o);case"ArrayBuffer":return n(new Uint8Array(i).buffer,i);case"DataView":{let{buffer:a}=new Uint8Array(i);return n(new DataView(a),i)}}return n(new bi[l](i),o)};return r},Ti=e=>jd(new Map,e)(0),{toString:Wd}={},{keys:Zd}=Object,tn=e=>{let t=typeof e;if(t!=="object"||!e)return[0,t];let n=Wd.call(e).slice(8,-1);switch(n){case"Array":return[1,""];case"Object":return[2,""];case"Date":return[3,""];case"RegExp":return[4,""];case"Map":return[5,""];case"Set":return[6,""];case"DataView":return[1,n]}return n.includes("Array")?[1,n]:n.includes("Error")?[7,n]:[2,n]},Nn=([e,t])=>e===0&&(t==="function"||t==="symbol"),Ud=(e,t,n,r)=>{let o=(i,a)=>{let s=r.push(i)-1;return n.set(a,s),s},l=i=>{if(n.has(i))return n.get(i);let[a,s]=tn(i);switch(a){case 0:{let d=i;switch(s){case"bigint":a=8,d=i.toString();break;case"function":case"symbol":if(e)throw TypeError("unable to serialize "+s);d=null;break;case"undefined":return o([-1],i)}return o([a,d],i)}case 1:{if(s){let u=i;return s==="DataView"?u=new Uint8Array(i.buffer):s==="ArrayBuffer"&&(u=new Uint8Array(i)),o([s,[...u]],i)}let d=[],f=o([a,d],i);for(let u of i)d.push(l(u));return f}case 2:{if(s)switch(s){case"BigInt":return o([s,i.toString()],i);case"Boolean":case"Number":case"String":return o([s,i.valueOf()],i)}if(t&&"toJSON"in i)return l(i.toJSON());let d=[],f=o([a,d],i);for(let u of Zd(i))(e||!Nn(tn(i[u])))&&d.push([l(u),l(i[u])]);return f}case 3:return o([a,i.toISOString()],i);case 4:{let{source:d,flags:f}=i;return o([a,{source:d,flags:f}],i)}case 5:{let d=[],f=o([a,d],i);for(let[u,h]of i)(e||!(Nn(tn(u))||Nn(tn(h))))&&d.push([l(u),l(h)]);return f}case 6:{let d=[],f=o([a,d],i);for(let u of i)(e||!Nn(tn(u)))&&d.push(l(u));return f}}let{message:c}=i;return o([a,{name:s,message:c}],i)};return l},vi=(e,{json:t,lossy:n}={})=>{let r=[];return Ud(!(t||n),!!t,new Map,r)(e),r};var mn=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Ti(vi(e,t)):structuredClone(e):(e,t)=>Ti(vi(e,t));const Vl=Yl("end"),Ql=Yl("start");function Yl(e){return t;function t(n){let r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Jl(e){let t=Ql(e),n=Vl(e);if(t&&n)return{start:t,end:n}}const ht=["ariaDescribedBy","ariaLabel","ariaLabelledBy"],lo={ancestors:{tbody:["table"],td:["table"],th:["table"],thead:["table"],tfoot:["table"],tr:["table"]},attributes:{a:[...ht,"dataFootnoteBackref","dataFootnoteRef",["className","data-footnote-backref"],"href"],blockquote:["cite"],code:[["className",/^language-./]],del:["cite"],div:["itemScope","itemType"],dl:[...ht],h2:[["className","sr-only"]],img:[...ht,"longDesc","src"],input:[["disabled",!0],["type","checkbox"]],ins:["cite"],li:[["className","task-list-item"]],ol:[...ht,["className","contains-task-list"]],q:["cite"],section:["dataFootnotes",["className","footnotes"]],source:["srcSet"],summary:[...ht],table:[...ht],ul:[...ht,["className","contains-task-list"]],"*":"abbr.accept.acceptCharset.accessKey.action.align.alt.axis.border.cellPadding.cellSpacing.char.charOff.charSet.checked.clear.colSpan.color.cols.compact.coords.dateTime.dir.encType.frame.hSpace.headers.height.hrefLang.htmlFor.id.isMap.itemProp.label.lang.maxLength.media.method.multiple.name.noHref.noShade.noWrap.open.prompt.readOnly.rev.rowSpan.rows.rules.scope.selected.shape.size.span.start.summary.tabIndex.title.useMap.vAlign.value.width".split(".")},clobber:["ariaDescribedBy","ariaLabelledBy","id","name"],clobberPrefix:"user-content-",protocols:{cite:["http","https"],href:["http","https","irc","ircs","mailto","xmpp"],longDesc:["http","https"],src:["http","https"]},required:{input:{disabled:!0,type:"checkbox"}},strip:["script"],tagNames:"a.b.blockquote.br.code.dd.del.details.div.dl.dt.em.h1.h2.h3.h4.h5.h6.hr.i.img.input.ins.kbd.li.ol.p.picture.pre.q.rp.rt.ruby.s.samp.section.source.span.strike.strong.sub.summary.sup.table.tbody.td.tfoot.th.thead.tr.tt.ul.var".split(".")},st={}.hasOwnProperty;function Hd(e,t){let n={type:"root",children:[]},r=_l({schema:t?{...lo,...t}:lo,stack:[]},e);return r&&(Array.isArray(r)?r.length===1?n=r[0]:n.children=r:n=r),n}function _l(e,t){if(t&&typeof t=="object"){let n=t;switch(typeof n.type=="string"?n.type:""){case"comment":return $d(e,n);case"doctype":return Vd(e,n);case"element":return Qd(e,n);case"root":return Yd(e,n);case"text":return Jd(e,n)}}}function $d(e,t){if(e.schema.allowComments){let n=typeof t.value=="string"?t.value:"",r=n.indexOf("-->"),o={type:"comment",value:r<0?n:n.slice(0,r)};return Bn(o,t),o}}function Vd(e,t){if(e.schema.allowDoctypes){let n={type:"doctype"};return Bn(n,t),n}}function Qd(e,t){let n=typeof t.tagName=="string"?t.tagName:"";e.stack.push(n);let r=ea(e,t.children),o=_d(e,t.properties);e.stack.pop();let l=!1;if(n&&n!=="*"&&(!e.schema.tagNames||e.schema.tagNames.includes(n))&&(l=!0,e.schema.ancestors&&st.call(e.schema.ancestors,n))){let a=e.schema.ancestors[n],s=-1;for(l=!1;++s<a.length;)e.stack.includes(a[s])&&(l=!0)}if(!l)return e.schema.strip&&!e.schema.strip.includes(n)?r:void 0;let i={type:"element",tagName:n,properties:o,children:r};return Bn(i,t),i}function Yd(e,t){let n={type:"root",children:ea(e,t.children)};return Bn(n,t),n}function Jd(e,t){let n={type:"text",value:typeof t.value=="string"?t.value:""};return Bn(n,t),n}function ea(e,t){let n=[];if(Array.isArray(t)){let r=t,o=-1;for(;++o<r.length;){let l=_l(e,r[o]);l&&(Array.isArray(l)?n.push(...l):n.push(l))}}return n}function _d(e,t){let n=e.stack[e.stack.length-1],r=e.schema.attributes,o=e.schema.required,l=r&&st.call(r,n)?r[n]:void 0,i=r&&st.call(r,"*")?r["*"]:void 0,a=t&&typeof t=="object"?t:{},s={},c;for(c in a)if(st.call(a,c)){let d=a[c],f=ki(e,wi(l,c),c,d);f??=ki(e,wi(i,c),c,d),f!=null&&(s[c]=f)}if(o&&st.call(o,n)){let d=o[n];for(c in d)st.call(d,c)&&!st.call(s,c)&&(s[c]=d[c])}return s}function ki(e,t,n,r){return t?Array.isArray(r)?ef(e,t,n,r):ta(e,t,n,r):void 0}function ef(e,t,n,r){let o=-1,l=[];for(;++o<r.length;){let i=ta(e,t,n,r[o]);(typeof i=="number"||typeof i=="string")&&l.push(i)}return l}function ta(e,t,n,r){if(!(typeof r!="boolean"&&typeof r!="number"&&typeof r!="string")&&tf(e,n,r)){if(typeof t=="object"&&t.length>1){let o=!1,l=0;for(;++l<t.length;){let i=t[l];if(i&&typeof i=="object"&&"flags"in i){if(i.test(String(r))){o=!0;break}}else if(i===r){o=!0;break}}if(!o)return}return e.schema.clobber&&e.schema.clobberPrefix&&e.schema.clobber.includes(n)?e.schema.clobberPrefix+r:r}}function tf(e,t,n){let r=e.schema.protocols&&st.call(e.schema.protocols,t)?e.schema.protocols[t]:void 0;if(!r||r.length===0)return!0;let o=String(n),l=o.indexOf(":"),i=o.indexOf("?"),a=o.indexOf("#"),s=o.indexOf("/");if(l<0||s>-1&&l>s||i>-1&&l>i||a>-1&&l>a)return!0;let c=-1;for(;++c<r.length;){let d=r[c];if(l===d.length&&o.slice(0,d.length)===d)return!0}return!1}function Bn(e,t){let n=Jl(t);t.data&&(e.data=mn(t.data)),n&&(e.position=n)}function wi(e,t){let n,r=-1;if(e)for(;++r<e.length;){let o=e[r],l=typeof o=="string"?o:o[0];if(l===t)return o;l==="data*"&&(n=o)}if(t.length>4&&t.slice(0,4).toLowerCase()==="data")return n}function nf(e){return function(t){return Hd(t,e)}}const rf="AElig.AMP.Aacute.Acirc.Agrave.Aring.Atilde.Auml.COPY.Ccedil.ETH.Eacute.Ecirc.Egrave.Euml.GT.Iacute.Icirc.Igrave.Iuml.LT.Ntilde.Oacute.Ocirc.Ograve.Oslash.Otilde.Ouml.QUOT.REG.THORN.Uacute.Ucirc.Ugrave.Uuml.Yacute.aacute.acirc.acute.aelig.agrave.amp.aring.atilde.auml.brvbar.ccedil.cedil.cent.copy.curren.deg.divide.eacute.ecirc.egrave.eth.euml.frac12.frac14.frac34.gt.iacute.icirc.iexcl.igrave.iquest.iuml.laquo.lt.macr.micro.middot.nbsp.not.ntilde.oacute.ocirc.ograve.ordf.ordm.oslash.otilde.ouml.para.plusmn.pound.quot.raquo.reg.sect.shy.sup1.sup2.sup3.szlig.thorn.times.uacute.ucirc.ugrave.uml.uuml.yacute.yen.yuml".split("."),Ar={nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",fnof:"ƒ",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",bull:"•",hellip:"…",prime:"′",Prime:"″",oline:"‾",frasl:"⁄",weierp:"℘",image:"ℑ",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",quot:'"',amp:"&",lt:"<",gt:">",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",permil:"‰",lsaquo:"‹",rsaquo:"›",euro:"€"};function er(e,t){let n=String(e);if(typeof t!="string")throw TypeError("Expected character");let r=0,o=n.indexOf(t);for(;o!==-1;)r++,o=n.indexOf(t,o+t.length);return r}function of(e,t){let n=t||{};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const lf=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"];var dn=class{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}};dn.prototype.normal={},dn.prototype.property={},dn.prototype.space=void 0;function na(e,t){let n={},r={};for(let o of e)Object.assign(n,o.property),Object.assign(r,o.normal);return new dn(n,r,t)}function ao(e){return e.toLowerCase()}var Te=class{constructor(t,n){this.attribute=n,this.property=t}};Te.prototype.attribute="",Te.prototype.booleanish=!1,Te.prototype.boolean=!1,Te.prototype.commaOrSpaceSeparated=!1,Te.prototype.commaSeparated=!1,Te.prototype.defined=!1,Te.prototype.mustUseProperty=!1,Te.prototype.number=!1,Te.prototype.overloadedBoolean=!1,Te.prototype.property="",Te.prototype.spaceSeparated=!1,Te.prototype.space=void 0;var so=wn({boolean:()=>G,booleanish:()=>le,commaOrSpaceSeparated:()=>Be,commaSeparated:()=>zt,number:()=>A,overloadedBoolean:()=>ra,spaceSeparated:()=>Y});let af=0;const G=Et(),le=Et(),ra=Et(),A=Et(),Y=Et(),zt=Et(),Be=Et();function Et(){return 2**++af}const Fr=Object.keys(so);var Po=class extends Te{constructor(t,n,r,o){let l=-1;if(super(t,n),Bi(this,"space",o),typeof r=="number")for(;++l<Fr.length;){let i=Fr[l];Bi(this,Fr[l],(r&so[i])===so[i])}}};Po.prototype.defined=!0;function Bi(e,t,n){n&&(e[t]=n)}function Ht(e){let t={},n={};for(let[r,o]of Object.entries(e.properties)){let l=new Po(r,e.transform(e.attributes||{},r),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(l.mustUseProperty=!0),t[r]=l,n[ao(r)]=r,n[ao(l.attribute)]=r}return new dn(t,n,e.space)}const oa=Ht({properties:{ariaActiveDescendant:null,ariaAtomic:le,ariaAutoComplete:null,ariaBusy:le,ariaChecked:le,ariaColCount:A,ariaColIndex:A,ariaColSpan:A,ariaControls:Y,ariaCurrent:null,ariaDescribedBy:Y,ariaDetails:null,ariaDisabled:le,ariaDropEffect:Y,ariaErrorMessage:null,ariaExpanded:le,ariaFlowTo:Y,ariaGrabbed:le,ariaHasPopup:null,ariaHidden:le,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Y,ariaLevel:A,ariaLive:null,ariaModal:le,ariaMultiLine:le,ariaMultiSelectable:le,ariaOrientation:null,ariaOwns:Y,ariaPlaceholder:null,ariaPosInSet:A,ariaPressed:le,ariaReadOnly:le,ariaRelevant:null,ariaRequired:le,ariaRoleDescription:Y,ariaRowCount:A,ariaRowIndex:A,ariaRowSpan:A,ariaSelected:le,ariaSetSize:A,ariaSort:null,ariaValueMax:A,ariaValueMin:A,ariaValueNow:A,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function ia(e,t){return t in e?e[t]:t}function la(e,t){return ia(e,t.toLowerCase())}const sf=Ht({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:zt,acceptCharset:Y,accessKey:Y,action:null,allow:null,allowFullScreen:G,allowPaymentRequest:G,allowUserMedia:G,alt:null,as:null,async:G,autoCapitalize:null,autoComplete:Y,autoFocus:G,autoPlay:G,blocking:Y,capture:null,charSet:null,checked:G,cite:null,className:Y,cols:A,colSpan:null,content:null,contentEditable:le,controls:G,controlsList:Y,coords:A|zt,crossOrigin:null,data:null,dateTime:null,decoding:null,default:G,defer:G,dir:null,dirName:null,disabled:G,download:ra,draggable:le,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:G,formTarget:null,headers:Y,height:A,hidden:G,high:A,href:null,hrefLang:null,htmlFor:Y,httpEquiv:Y,id:null,imageSizes:null,imageSrcSet:null,inert:G,inputMode:null,integrity:null,is:null,isMap:G,itemId:null,itemProp:Y,itemRef:Y,itemScope:G,itemType:Y,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:G,low:A,manifest:null,max:null,maxLength:A,media:null,method:null,min:null,minLength:A,multiple:G,muted:G,name:null,nonce:null,noModule:G,noValidate:G,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:G,optimum:A,pattern:null,ping:Y,placeholder:null,playsInline:G,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:G,referrerPolicy:null,rel:Y,required:G,reversed:G,rows:A,rowSpan:A,sandbox:Y,scope:null,scoped:G,seamless:G,selected:G,shadowRootClonable:G,shadowRootDelegatesFocus:G,shadowRootMode:null,shape:null,size:A,sizes:null,slot:null,span:A,spellCheck:le,src:null,srcDoc:null,srcLang:null,srcSet:null,start:A,step:null,style:null,tabIndex:A,target:null,title:null,translate:null,type:null,typeMustMatch:G,useMap:null,value:le,width:A,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Y,axis:null,background:null,bgColor:null,border:A,borderColor:null,bottomMargin:A,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:G,declare:G,event:null,face:null,frame:null,frameBorder:null,hSpace:A,leftMargin:A,link:null,longDesc:null,lowSrc:null,marginHeight:A,marginWidth:A,noResize:G,noHref:G,noShade:G,noWrap:G,object:null,profile:null,prompt:null,rev:null,rightMargin:A,rules:null,scheme:null,scrolling:le,standby:null,summary:null,text:null,topMargin:A,valueType:null,version:null,vAlign:null,vLink:null,vSpace:A,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:G,disableRemotePlayback:G,prefix:null,property:null,results:A,security:null,unselectable:null},space:"html",transform:la}),cf=Ht({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Be,accentHeight:A,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:A,amplitude:A,arabicForm:null,ascent:A,attributeName:null,attributeType:null,azimuth:A,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:A,by:null,calcMode:null,capHeight:A,className:Y,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:A,diffuseConstant:A,direction:null,display:null,dur:null,divisor:A,dominantBaseline:null,download:G,dx:null,dy:null,edgeMode:null,editable:null,elevation:A,enableBackground:null,end:null,event:null,exponent:A,externalResourcesRequired:null,fill:null,fillOpacity:A,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:zt,g2:zt,glyphName:zt,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:A,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:A,horizOriginX:A,horizOriginY:A,id:null,ideographic:A,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:A,k:A,k1:A,k2:A,k3:A,k4:A,kernelMatrix:Be,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:A,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:A,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:A,overlineThickness:A,paintOrder:null,panose1:null,path:null,pathLength:A,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Y,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:A,pointsAtY:A,pointsAtZ:A,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Be,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Be,rev:Be,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Be,requiredFeatures:Be,requiredFonts:Be,requiredFormats:Be,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:A,specularExponent:A,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:A,strikethroughThickness:A,string:null,stroke:null,strokeDashArray:Be,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:A,strokeOpacity:A,strokeWidth:null,style:null,surfaceScale:A,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Be,tabIndex:A,tableValues:null,target:null,targetX:A,targetY:A,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Be,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:A,underlineThickness:A,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:A,values:null,vAlphabetic:A,vMathematical:A,vectorEffect:null,vHanging:A,vIdeographic:A,version:null,vertAdvY:A,vertOriginX:A,vertOriginY:A,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:A,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:ia}),aa=Ht({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),sa=Ht({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:la}),ca=Ht({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),df=/[A-Z]/g,Ei=/-[a-z]/g,ff=/^data[-\w.:]+$/i;function uf(e,t){let n=ao(t),r=t,o=Te;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&ff.test(t)){if(t.charAt(4)==="-"){let l=t.slice(5).replace(Ei,pf);r="data"+l.charAt(0).toUpperCase()+l.slice(1)}else{let l=t.slice(4);if(!Ei.test(l)){let i=l.replace(df,hf);i.charAt(0)!=="-"&&(i="-"+i),t="data"+i}}o=Po}return new o(r,t)}function hf(e){return"-"+e.toLowerCase()}function pf(e){return e.charAt(1).toUpperCase()}const mf=na([oa,sf,aa,sa,ca],"html"),da=na([oa,cf,aa,sa,ca],"svg"),Di={}.hasOwnProperty;function gf(e,t){let n=t||{};function r(o,...l){let i=r.invalid,a=r.handlers;if(o&&Di.call(o,e)){let s=String(o[e]);i=Di.call(a,s)?a[s]:r.unknown}if(i)return i.call(this,o,...l)}return r.handlers=n.handlers||{},r.invalid=n.invalid,r.unknown=n.unknown,r}const yf=/["&'<>`]/g,xf=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,bf=/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,Tf=/[|\\{}()[\]^$+*?.]/g,Ai=new WeakMap;function vf(e,t){if(e=e.replace(t.subset?kf(t.subset):yf,r),t.subset||t.escapeOnly)return e;return e.replace(xf,n).replace(bf,r);function n(o,l,i){return t.format((o.charCodeAt(0)-55296)*1024+o.charCodeAt(1)-56320+65536,i.charCodeAt(l+2),t)}function r(o,l,i){return t.format(o.charCodeAt(0),i.charCodeAt(l+1),t)}}function kf(e){let t=Ai.get(e);return t||(t=wf(e),Ai.set(e,t)),t}function wf(e){let t=[],n=-1;for(;++n<e.length;)t.push(e[n].replace(Tf,"\\$&"));return RegExp("(?:"+t.join("|")+")","g")}const Bf=/[\dA-Fa-f]/;function Ef(e,t,n){let r="&#x"+e.toString(16).toUpperCase();return n&&t&&!Bf.test(String.fromCharCode(t))?r:r+";"}const Df=/\d/;function Af(e,t,n){let r="&#"+String(e);return n&&t&&!Df.test(String.fromCharCode(t))?r:r+";"}const Ff=["cent","copy","divide","gt","lt","not","para","times"],fa={}.hasOwnProperty,co={};let On;for(On in Ar)fa.call(Ar,On)&&(co[Ar[On]]=On);const Nf=/[^\dA-Za-z]/;function Of(e,t,n,r){let o=String.fromCharCode(e);if(fa.call(co,o)){let l=co[o],i="&"+l;return n&&rf.includes(l)&&!Ff.includes(l)&&(!r||t&&t!==61&&Nf.test(String.fromCharCode(t)))?i:i+";"}return""}function Lf(e,t,n){let r=Ef(e,t,n.omitOptionalSemicolons),o;if((n.useNamedReferences||n.useShortestReferences)&&(o=Of(e,t,n.omitOptionalSemicolons,n.attribute)),(n.useShortestReferences||!o)&&n.useShortestReferences){let l=Af(e,t,n.omitOptionalSemicolons);l.length<r.length&&(r=l)}return o&&(!n.useShortestReferences||o.length<r.length)?o:r}function Mt(e,t){return vf(e,Object.assign({format:Lf},t))}const Rf=/^>|^->|<!--|-->|--!>|<!-$/g,Cf=[">"],If=["<",">"];function Sf(e,t,n,r){return r.settings.bogusComments?"<?"+Mt(e.value,Object.assign({},r.settings.characterReferences,{subset:Cf}))+">":"<!--"+e.value.replace(Rf,o)+"-->";function o(l){return Mt(l,Object.assign({},r.settings.characterReferences,{subset:If}))}}function Pf(e,t,n,r){return"<!"+(r.settings.upperDoctype?"DOCTYPE":"doctype")+(r.settings.tightDoctype?"":" ")+"html>"}function zf(e){return e.join(" ").trim()}const Mf=/[ \t\n\f\r]/g;function zo(e){return typeof e=="object"?e.type==="text"?Fi(e.value):!1:Fi(e)}function Fi(e){return e.replace(Mf,"")===""}const ce=ha(1),ua=ha(-1),Gf=[];function ha(e){return t;function t(n,r,o){let l=n?n.children:Gf,i=(r||0)+e,a=l[i];if(!o)for(;a&&zo(a);)i+=e,a=l[i];return a}}const qf={}.hasOwnProperty;function pa(e){return t;function t(n,r,o){return qf.call(e,n.tagName)&&e[n.tagName](n,r,o)}}const Mo=pa({body:Xf,caption:Nr,colgroup:Nr,dd:Uf,dt:Zf,head:Nr,html:Kf,li:Wf,optgroup:Hf,option:$f,p:jf,rp:Ni,rt:Ni,tbody:Qf,td:Oi,tfoot:Yf,th:Oi,thead:Vf,tr:Jf});function Nr(e,t,n){let r=ce(n,t,!0);return!r||r.type!=="comment"&&!(r.type==="text"&&zo(r.value.charAt(0)))}function Kf(e,t,n){let r=ce(n,t);return!r||r.type!=="comment"}function Xf(e,t,n){let r=ce(n,t);return!r||r.type!=="comment"}function jf(e,t,n){let r=ce(n,t);return r?r.type==="element"&&(r.tagName==="address"||r.tagName==="article"||r.tagName==="aside"||r.tagName==="blockquote"||r.tagName==="details"||r.tagName==="div"||r.tagName==="dl"||r.tagName==="fieldset"||r.tagName==="figcaption"||r.tagName==="figure"||r.tagName==="footer"||r.tagName==="form"||r.tagName==="h1"||r.tagName==="h2"||r.tagName==="h3"||r.tagName==="h4"||r.tagName==="h5"||r.tagName==="h6"||r.tagName==="header"||r.tagName==="hgroup"||r.tagName==="hr"||r.tagName==="main"||r.tagName==="menu"||r.tagName==="nav"||r.tagName==="ol"||r.tagName==="p"||r.tagName==="pre"||r.tagName==="section"||r.tagName==="table"||r.tagName==="ul"):!n||!(n.type==="element"&&(n.tagName==="a"||n.tagName==="audio"||n.tagName==="del"||n.tagName==="ins"||n.tagName==="map"||n.tagName==="noscript"||n.tagName==="video"))}function Wf(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&r.tagName==="li"}function Zf(e,t,n){let r=ce(n,t);return!!(r&&r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd"))}function Uf(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd")}function Ni(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&(r.tagName==="rp"||r.tagName==="rt")}function Hf(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&r.tagName==="optgroup"}function $f(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&(r.tagName==="option"||r.tagName==="optgroup")}function Vf(e,t,n){let r=ce(n,t);return!!(r&&r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot"))}function Qf(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot")}function Yf(e,t,n){return!ce(n,t)}function Jf(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&r.tagName==="tr"}function Oi(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&(r.tagName==="td"||r.tagName==="th")}const _f=pa({body:nu,colgroup:ru,head:tu,html:eu,tbody:ou});function eu(e){let t=ce(e,-1);return!t||t.type!=="comment"}function tu(e){let t=new Set;for(let r of e.children)if(r.type==="element"&&(r.tagName==="base"||r.tagName==="title")){if(t.has(r.tagName))return!1;t.add(r.tagName)}let n=e.children[0];return!n||n.type==="element"}function nu(e){let t=ce(e,-1,!0);return!t||t.type!=="comment"&&!(t.type==="text"&&zo(t.value.charAt(0)))&&!(t.type==="element"&&(t.tagName==="meta"||t.tagName==="link"||t.tagName==="script"||t.tagName==="style"||t.tagName==="template"))}function ru(e,t,n){let r=ua(n,t),o=ce(e,-1,!0);return n&&r&&r.type==="element"&&r.tagName==="colgroup"&&Mo(r,n.children.indexOf(r),n)?!1:!!(o&&o.type==="element"&&o.tagName==="col")}function ou(e,t,n){let r=ua(n,t),o=ce(e,-1);return n&&r&&r.type==="element"&&(r.tagName==="thead"||r.tagName==="tbody")&&Mo(r,n.children.indexOf(r),n)?!1:!!(o&&o.type==="element"&&o.tagName==="tr")}const Ln={name:[[`	
\f\r &/=>`.split(""),`	
\f\r "&'/=>\``.split("")],[`\0	
\f\r "&'/<=>`.split(""),`\0	
\f\r "&'/<=>\``.split("")]],unquoted:[[`	
\f\r &>`.split(""),`\0	
\f\r "&'<=>\``.split("")],[`\0	
\f\r "&'<=>\``.split(""),`\0	
\f\r "&'<=>\``.split("")]],single:[["&'".split(""),"\"&'`".split("")],["\0&'".split(""),"\0\"&'`".split("")]],double:[['"&'.split(""),"\"&'`".split("")],['\0"&'.split(""),"\0\"&'`".split("")]]};function iu(e,t,n,r){let o=r.schema,l=o.space==="svg"?!1:r.settings.omitOptionalTags,i=o.space==="svg"?r.settings.closeEmptyElements:r.settings.voids.includes(e.tagName.toLowerCase()),a=[],s;o.space==="html"&&e.tagName==="svg"&&(r.schema=da);let c=lu(r,e.properties),d=r.all(o.space==="html"&&e.tagName==="template"?e.content:e);return r.schema=o,d&&(i=!1),(c||!l||!_f(e,t,n))&&(a.push("<",e.tagName,c?" "+c:""),i&&(o.space==="svg"||r.settings.closeSelfClosing)&&(s=c.charAt(c.length-1),(!r.settings.tightSelfClosing||s==="/"||s&&s!=='"'&&s!=="'")&&a.push(" "),a.push("/")),a.push(">")),a.push(d),!i&&(!l||!Mo(e,t,n))&&a.push("</"+e.tagName+">"),a.join("")}function lu(e,t){let n=[],r=-1,o;if(t){for(o in t)if(t[o]!==null&&t[o]!==void 0){let l=au(e,o,t[o]);l&&n.push(l)}}for(;++r<n.length;){let l=e.settings.tightAttributes?n[r].charAt(n[r].length-1):void 0;r!==n.length-1&&l!=='"'&&l!=="'"&&(n[r]+=" ")}return n.join("")}function au(e,t,n){let r=uf(e.schema,t),o=e.settings.allowParseErrors&&e.schema.space==="html"?0:1,l=e.settings.allowDangerousCharacters?0:1,i=e.quote,a;if(r.overloadedBoolean&&(n===r.attribute||n==="")?n=!0:(r.boolean||r.overloadedBoolean)&&(typeof n!="string"||n===r.attribute||n==="")&&(n=!!n),n==null||n===!1||typeof n=="number"&&Number.isNaN(n))return"";let s=Mt(r.attribute,Object.assign({},e.settings.characterReferences,{subset:Ln.name[o][l]}));return n===!0||(n=Array.isArray(n)?(r.commaSeparated?of:zf)(n,{padLeft:!e.settings.tightCommaSeparatedLists}):String(n),e.settings.collapseEmptyAttributes&&!n)?s:(e.settings.preferUnquoted&&(a=Mt(n,Object.assign({},e.settings.characterReferences,{attribute:!0,subset:Ln.unquoted[o][l]}))),a!==n&&(e.settings.quoteSmart&&er(n,i)>er(n,e.alternative)&&(i=e.alternative),a=i+Mt(n,Object.assign({},e.settings.characterReferences,{subset:(i==="'"?Ln.single:Ln.double)[o][l],attribute:!0}))+i),s+(a&&"="+a))}const su=["<","&"];function ma(e,t,n,r){return n&&n.type==="element"&&(n.tagName==="script"||n.tagName==="style")?e.value:Mt(e.value,Object.assign({},r.settings.characterReferences,{subset:su}))}function cu(e,t,n,r){return r.settings.allowDangerousHtml?e.value:ma(e,t,n,r)}function du(e,t,n,r){return r.all(e)}const fu=gf("type",{invalid:uu,unknown:hu,handlers:{comment:Sf,doctype:Pf,element:iu,raw:cu,root:du,text:ma}});function uu(e){throw Error("Expected node, not `"+e+"`")}function hu(e){throw Error("Cannot compile unknown node `"+e.type+"`")}const pu={},mu={},gu=[];function yu(e,t){let n=t||pu,r=n.quote||'"',o=r==='"'?"'":'"';if(r!=='"'&&r!=="'")throw Error("Invalid quote `"+r+"`, expected `'` or `\"`");return{one:xu,all:bu,settings:{omitOptionalTags:n.omitOptionalTags||!1,allowParseErrors:n.allowParseErrors||!1,allowDangerousCharacters:n.allowDangerousCharacters||!1,quoteSmart:n.quoteSmart||!1,preferUnquoted:n.preferUnquoted||!1,tightAttributes:n.tightAttributes||!1,upperDoctype:n.upperDoctype||!1,tightDoctype:n.tightDoctype||!1,bogusComments:n.bogusComments||!1,tightCommaSeparatedLists:n.tightCommaSeparatedLists||!1,tightSelfClosing:n.tightSelfClosing||!1,collapseEmptyAttributes:n.collapseEmptyAttributes||!1,allowDangerousHtml:n.allowDangerousHtml||!1,voids:n.voids||lf,characterReferences:n.characterReferences||mu,closeSelfClosing:n.closeSelfClosing||!1,closeEmptyElements:n.closeEmptyElements||!1},schema:n.space==="svg"?da:mf,quote:r,alternative:o}.one(Array.isArray(e)?{type:"root",children:e}:e,void 0,void 0)}function xu(e,t,n){return fu(e,t,n,this)}function bu(e){let t=[],n=e&&e.children||gu,r=-1;for(;++r<n.length;)t[r]=this.one(n[r],r,e);return t.join("")}function Tu(e){let t=this,n={...t.data("settings"),...e};t.compiler=r;function r(o){return yu(o,n)}}const Li={AElig:"Æ",AMP:"&",Aacute:"Á",Abreve:"Ă",Acirc:"Â",Acy:"А",Afr:"𝔄",Agrave:"À",Alpha:"Α",Amacr:"Ā",And:"⩓",Aogon:"Ą",Aopf:"𝔸",ApplyFunction:"⁡",Aring:"Å",Ascr:"𝒜",Assign:"≔",Atilde:"Ã",Auml:"Ä",Backslash:"∖",Barv:"⫧",Barwed:"⌆",Bcy:"Б",Because:"∵",Bernoullis:"ℬ",Beta:"Β",Bfr:"𝔅",Bopf:"𝔹",Breve:"˘",Bscr:"ℬ",Bumpeq:"≎",CHcy:"Ч",COPY:"©",Cacute:"Ć",Cap:"⋒",CapitalDifferentialD:"ⅅ",Cayleys:"ℭ",Ccaron:"Č",Ccedil:"Ç",Ccirc:"Ĉ",Cconint:"∰",Cdot:"Ċ",Cedilla:"¸",CenterDot:"·",Cfr:"ℭ",Chi:"Χ",CircleDot:"⊙",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",Colon:"∷",Colone:"⩴",Congruent:"≡",Conint:"∯",ContourIntegral:"∮",Copf:"ℂ",Coproduct:"∐",CounterClockwiseContourIntegral:"∳",Cross:"⨯",Cscr:"𝒞",Cup:"⋓",CupCap:"≍",DD:"ⅅ",DDotrahd:"⤑",DJcy:"Ђ",DScy:"Ѕ",DZcy:"Џ",Dagger:"‡",Darr:"↡",Dashv:"⫤",Dcaron:"Ď",Dcy:"Д",Del:"∇",Delta:"Δ",Dfr:"𝔇",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",Diamond:"⋄",DifferentialD:"ⅆ",Dopf:"𝔻",Dot:"¨",DotDot:"⃜",DotEqual:"≐",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",DownArrow:"↓",DownArrowBar:"⤓",DownArrowUpArrow:"⇵",DownBreve:"̑",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVector:"↽",DownLeftVectorBar:"⥖",DownRightTeeVector:"⥟",DownRightVector:"⇁",DownRightVectorBar:"⥗",DownTee:"⊤",DownTeeArrow:"↧",Downarrow:"⇓",Dscr:"𝒟",Dstrok:"Đ",ENG:"Ŋ",ETH:"Ð",Eacute:"É",Ecaron:"Ě",Ecirc:"Ê",Ecy:"Э",Edot:"Ė",Efr:"𝔈",Egrave:"È",Element:"∈",Emacr:"Ē",EmptySmallSquare:"◻",EmptyVerySmallSquare:"▫",Eogon:"Ę",Eopf:"𝔼",Epsilon:"Ε",Equal:"⩵",EqualTilde:"≂",Equilibrium:"⇌",Escr:"ℰ",Esim:"⩳",Eta:"Η",Euml:"Ë",Exists:"∃",ExponentialE:"ⅇ",Fcy:"Ф",Ffr:"𝔉",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",Fopf:"𝔽",ForAll:"∀",Fouriertrf:"ℱ",Fscr:"ℱ",GJcy:"Ѓ",GT:">",Gamma:"Γ",Gammad:"Ϝ",Gbreve:"Ğ",Gcedil:"Ģ",Gcirc:"Ĝ",Gcy:"Г",Gdot:"Ġ",Gfr:"𝔊",Gg:"⋙",Gopf:"𝔾",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",Gscr:"𝒢",Gt:"≫",HARDcy:"Ъ",Hacek:"ˇ",Hat:"^",Hcirc:"Ĥ",Hfr:"ℌ",HilbertSpace:"ℋ",Hopf:"ℍ",HorizontalLine:"─",Hscr:"ℋ",Hstrok:"Ħ",HumpDownHump:"≎",HumpEqual:"≏",IEcy:"Е",IJlig:"Ĳ",IOcy:"Ё",Iacute:"Í",Icirc:"Î",Icy:"И",Idot:"İ",Ifr:"ℑ",Igrave:"Ì",Im:"ℑ",Imacr:"Ī",ImaginaryI:"ⅈ",Implies:"⇒",Int:"∬",Integral:"∫",Intersection:"⋂",InvisibleComma:"⁣",InvisibleTimes:"⁢",Iogon:"Į",Iopf:"𝕀",Iota:"Ι",Iscr:"ℐ",Itilde:"Ĩ",Iukcy:"І",Iuml:"Ï",Jcirc:"Ĵ",Jcy:"Й",Jfr:"𝔍",Jopf:"𝕁",Jscr:"𝒥",Jsercy:"Ј",Jukcy:"Є",KHcy:"Х",KJcy:"Ќ",Kappa:"Κ",Kcedil:"Ķ",Kcy:"К",Kfr:"𝔎",Kopf:"𝕂",Kscr:"𝒦",LJcy:"Љ",LT:"<",Lacute:"Ĺ",Lambda:"Λ",Lang:"⟪",Laplacetrf:"ℒ",Larr:"↞",Lcaron:"Ľ",Lcedil:"Ļ",Lcy:"Л",LeftAngleBracket:"⟨",LeftArrow:"←",LeftArrowBar:"⇤",LeftArrowRightArrow:"⇆",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVector:"⇃",LeftDownVectorBar:"⥙",LeftFloor:"⌊",LeftRightArrow:"↔",LeftRightVector:"⥎",LeftTee:"⊣",LeftTeeArrow:"↤",LeftTeeVector:"⥚",LeftTriangle:"⊲",LeftTriangleBar:"⧏",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVector:"↿",LeftUpVectorBar:"⥘",LeftVector:"↼",LeftVectorBar:"⥒",Leftarrow:"⇐",Leftrightarrow:"⇔",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",LessLess:"⪡",LessSlantEqual:"⩽",LessTilde:"≲",Lfr:"𝔏",Ll:"⋘",Lleftarrow:"⇚",Lmidot:"Ŀ",LongLeftArrow:"⟵",LongLeftRightArrow:"⟷",LongRightArrow:"⟶",Longleftarrow:"⟸",Longleftrightarrow:"⟺",Longrightarrow:"⟹",Lopf:"𝕃",LowerLeftArrow:"↙",LowerRightArrow:"↘",Lscr:"ℒ",Lsh:"↰",Lstrok:"Ł",Lt:"≪",Map:"⤅",Mcy:"М",MediumSpace:" ",Mellintrf:"ℳ",Mfr:"𝔐",MinusPlus:"∓",Mopf:"𝕄",Mscr:"ℳ",Mu:"Μ",NJcy:"Њ",Nacute:"Ń",Ncaron:"Ň",Ncedil:"Ņ",Ncy:"Н",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:`
`,Nfr:"𝔑",NoBreak:"⁠",NonBreakingSpace:" ",Nopf:"ℕ",Not:"⫬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",NotLeftTriangle:"⋪",NotLeftTriangleBar:"⧏̸",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangle:"⋫",NotRightTriangleBar:"⧐̸",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",Nscr:"𝒩",Ntilde:"Ñ",Nu:"Ν",OElig:"Œ",Oacute:"Ó",Ocirc:"Ô",Ocy:"О",Odblac:"Ő",Ofr:"𝔒",Ograve:"Ò",Omacr:"Ō",Omega:"Ω",Omicron:"Ο",Oopf:"𝕆",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",Or:"⩔",Oscr:"𝒪",Oslash:"Ø",Otilde:"Õ",Otimes:"⨷",Ouml:"Ö",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",PartialD:"∂",Pcy:"П",Pfr:"𝔓",Phi:"Φ",Pi:"Π",PlusMinus:"±",Poincareplane:"ℌ",Popf:"ℙ",Pr:"⪻",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",Prime:"″",Product:"∏",Proportion:"∷",Proportional:"∝",Pscr:"𝒫",Psi:"Ψ",QUOT:'"',Qfr:"𝔔",Qopf:"ℚ",Qscr:"𝒬",RBarr:"⤐",REG:"®",Racute:"Ŕ",Rang:"⟫",Rarr:"↠",Rarrtl:"⤖",Rcaron:"Ř",Rcedil:"Ŗ",Rcy:"Р",Re:"ℜ",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",Rfr:"ℜ",Rho:"Ρ",RightAngleBracket:"⟩",RightArrow:"→",RightArrowBar:"⇥",RightArrowLeftArrow:"⇄",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVector:"⇂",RightDownVectorBar:"⥕",RightFloor:"⌋",RightTee:"⊢",RightTeeArrow:"↦",RightTeeVector:"⥛",RightTriangle:"⊳",RightTriangleBar:"⧐",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVector:"↾",RightUpVectorBar:"⥔",RightVector:"⇀",RightVectorBar:"⥓",Rightarrow:"⇒",Ropf:"ℝ",RoundImplies:"⥰",Rrightarrow:"⇛",Rscr:"ℛ",Rsh:"↱",RuleDelayed:"⧴",SHCHcy:"Щ",SHcy:"Ш",SOFTcy:"Ь",Sacute:"Ś",Sc:"⪼",Scaron:"Š",Scedil:"Ş",Scirc:"Ŝ",Scy:"С",Sfr:"𝔖",ShortDownArrow:"↓",ShortLeftArrow:"←",ShortRightArrow:"→",ShortUpArrow:"↑",Sigma:"Σ",SmallCircle:"∘",Sopf:"𝕊",Sqrt:"√",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",Sscr:"𝒮",Star:"⋆",Sub:"⋐",Subset:"⋐",SubsetEqual:"⊆",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",SuchThat:"∋",Sum:"∑",Sup:"⋑",Superset:"⊃",SupersetEqual:"⊇",Supset:"⋑",THORN:"Þ",TRADE:"™",TSHcy:"Ћ",TScy:"Ц",Tab:"	",Tau:"Τ",Tcaron:"Ť",Tcedil:"Ţ",Tcy:"Т",Tfr:"𝔗",Therefore:"∴",Theta:"Θ",ThickSpace:"  ",ThinSpace:" ",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",Topf:"𝕋",TripleDot:"⃛",Tscr:"𝒯",Tstrok:"Ŧ",Uacute:"Ú",Uarr:"↟",Uarrocir:"⥉",Ubrcy:"Ў",Ubreve:"Ŭ",Ucirc:"Û",Ucy:"У",Udblac:"Ű",Ufr:"𝔘",Ugrave:"Ù",Umacr:"Ū",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",Uogon:"Ų",Uopf:"𝕌",UpArrow:"↑",UpArrowBar:"⤒",UpArrowDownArrow:"⇅",UpDownArrow:"↕",UpEquilibrium:"⥮",UpTee:"⊥",UpTeeArrow:"↥",Uparrow:"⇑",Updownarrow:"⇕",UpperLeftArrow:"↖",UpperRightArrow:"↗",Upsi:"ϒ",Upsilon:"Υ",Uring:"Ů",Uscr:"𝒰",Utilde:"Ũ",Uuml:"Ü",VDash:"⊫",Vbar:"⫫",Vcy:"В",Vdash:"⊩",Vdashl:"⫦",Vee:"⋁",Verbar:"‖",Vert:"‖",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",Vfr:"𝔙",Vopf:"𝕍",Vscr:"𝒱",Vvdash:"⊪",Wcirc:"Ŵ",Wedge:"⋀",Wfr:"𝔚",Wopf:"𝕎",Wscr:"𝒲",Xfr:"𝔛",Xi:"Ξ",Xopf:"𝕏",Xscr:"𝒳",YAcy:"Я",YIcy:"Ї",YUcy:"Ю",Yacute:"Ý",Ycirc:"Ŷ",Ycy:"Ы",Yfr:"𝔜",Yopf:"𝕐",Yscr:"𝒴",Yuml:"Ÿ",ZHcy:"Ж",Zacute:"Ź",Zcaron:"Ž",Zcy:"З",Zdot:"Ż",ZeroWidthSpace:"​",Zeta:"Ζ",Zfr:"ℨ",Zopf:"ℤ",Zscr:"𝒵",aacute:"á",abreve:"ă",ac:"∾",acE:"∾̳",acd:"∿",acirc:"â",acute:"´",acy:"а",aelig:"æ",af:"⁡",afr:"𝔞",agrave:"à",alefsym:"ℵ",aleph:"ℵ",alpha:"α",amacr:"ā",amalg:"⨿",amp:"&",and:"∧",andand:"⩕",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsd:"∡",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",aogon:"ą",aopf:"𝕒",ap:"≈",apE:"⩰",apacir:"⩯",ape:"≊",apid:"≋",apos:"'",approx:"≈",approxeq:"≊",aring:"å",ascr:"𝒶",ast:"*",asymp:"≈",asympeq:"≍",atilde:"ã",auml:"ä",awconint:"∳",awint:"⨑",bNot:"⫭",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",barvee:"⊽",barwed:"⌅",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",bcy:"б",bdquo:"„",becaus:"∵",because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",beta:"β",beth:"ℶ",between:"≬",bfr:"𝔟",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bnot:"⌐",bopf:"𝕓",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxDL:"╗",boxDR:"╔",boxDl:"╖",boxDr:"╓",boxH:"═",boxHD:"╦",boxHU:"╩",boxHd:"╤",boxHu:"╧",boxUL:"╝",boxUR:"╚",boxUl:"╜",boxUr:"╙",boxV:"║",boxVH:"╬",boxVL:"╣",boxVR:"╠",boxVh:"╫",boxVl:"╢",boxVr:"╟",boxbox:"⧉",boxdL:"╕",boxdR:"╒",boxdl:"┐",boxdr:"┌",boxh:"─",boxhD:"╥",boxhU:"╨",boxhd:"┬",boxhu:"┴",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxuL:"╛",boxuR:"╘",boxul:"┘",boxur:"└",boxv:"│",boxvH:"╪",boxvL:"╡",boxvR:"╞",boxvh:"┼",boxvl:"┤",boxvr:"├",bprime:"‵",breve:"˘",brvbar:"¦",bscr:"𝒷",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsol:"\\",bsolb:"⧅",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpE:"⪮",bumpe:"≏",bumpeq:"≏",cacute:"ć",cap:"∩",capand:"⩄",capbrcup:"⩉",capcap:"⩋",capcup:"⩇",capdot:"⩀",caps:"∩︀",caret:"⁁",caron:"ˇ",ccaps:"⩍",ccaron:"č",ccedil:"ç",ccirc:"ĉ",ccups:"⩌",ccupssm:"⩐",cdot:"ċ",cedil:"¸",cemptyv:"⦲",cent:"¢",centerdot:"·",cfr:"𝔠",chcy:"ч",check:"✓",checkmark:"✓",chi:"χ",cir:"○",cirE:"⧃",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledR:"®",circledS:"Ⓢ",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",cire:"≗",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",clubs:"♣",clubsuit:"♣",colon:":",colone:"≔",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",conint:"∮",copf:"𝕔",coprod:"∐",copy:"©",copysr:"℗",crarr:"↵",cross:"✗",cscr:"𝒸",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",cup:"∪",cupbrcap:"⩈",cupcap:"⩆",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",dArr:"⇓",dHar:"⥥",dagger:"†",daleth:"ℸ",darr:"↓",dash:"‐",dashv:"⊣",dbkarow:"⤏",dblac:"˝",dcaron:"ď",dcy:"д",dd:"ⅆ",ddagger:"‡",ddarr:"⇊",ddotseq:"⩷",deg:"°",delta:"δ",demptyv:"⦱",dfisht:"⥿",dfr:"𝔡",dharl:"⇃",dharr:"⇂",diam:"⋄",diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",digamma:"ϝ",disin:"⋲",div:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",djcy:"ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",dopf:"𝕕",dot:"˙",doteq:"≐",doteqdot:"≑",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",downarrow:"↓",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",dscr:"𝒹",dscy:"ѕ",dsol:"⧶",dstrok:"đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",dzcy:"џ",dzigrarr:"⟿",eDDot:"⩷",eDot:"≑",eacute:"é",easter:"⩮",ecaron:"ě",ecir:"≖",ecirc:"ê",ecolon:"≕",ecy:"э",edot:"ė",ee:"ⅇ",efDot:"≒",efr:"𝔢",eg:"⪚",egrave:"è",egs:"⪖",egsdot:"⪘",el:"⪙",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",emacr:"ē",empty:"∅",emptyset:"∅",emptyv:"∅",emsp13:" ",emsp14:" ",emsp:" ",eng:"ŋ",ensp:" ",eogon:"ę",eopf:"𝕖",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",epsilon:"ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",equals:"=",equest:"≟",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erDot:"≓",erarr:"⥱",escr:"ℯ",esdot:"≐",esim:"≂",eta:"η",eth:"ð",euml:"ë",euro:"€",excl:"!",exist:"∃",expectation:"ℰ",exponentiale:"ⅇ",fallingdotseq:"≒",fcy:"ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",ffr:"𝔣",filig:"ﬁ",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",fopf:"𝕗",forall:"∀",fork:"⋔",forkv:"⫙",fpartint:"⨍",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",fscr:"𝒻",gE:"≧",gEl:"⪌",gacute:"ǵ",gamma:"γ",gammad:"ϝ",gap:"⪆",gbreve:"ğ",gcirc:"ĝ",gcy:"г",gdot:"ġ",ge:"≥",gel:"⋛",geq:"≥",geqq:"≧",geqslant:"⩾",ges:"⩾",gescc:"⪩",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",gfr:"𝔤",gg:"≫",ggg:"⋙",gimel:"ℷ",gjcy:"ѓ",gl:"≷",glE:"⪒",gla:"⪥",glj:"⪤",gnE:"≩",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gneq:"⪈",gneqq:"≩",gnsim:"⋧",gopf:"𝕘",grave:"`",gscr:"ℊ",gsim:"≳",gsime:"⪎",gsiml:"⪐",gt:">",gtcc:"⪧",gtcir:"⩺",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",hArr:"⇔",hairsp:" ",half:"½",hamilt:"ℋ",hardcy:"ъ",harr:"↔",harrcir:"⥈",harrw:"↭",hbar:"ℏ",hcirc:"ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",hfr:"𝔥",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",hopf:"𝕙",horbar:"―",hscr:"𝒽",hslash:"ℏ",hstrok:"ħ",hybull:"⁃",hyphen:"‐",iacute:"í",ic:"⁣",icirc:"î",icy:"и",iecy:"е",iexcl:"¡",iff:"⇔",ifr:"𝔦",igrave:"ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",ijlig:"ĳ",imacr:"ī",image:"ℑ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",imof:"⊷",imped:"Ƶ",in:"∈",incare:"℅",infin:"∞",infintie:"⧝",inodot:"ı",int:"∫",intcal:"⊺",integers:"ℤ",intercal:"⊺",intlarhk:"⨗",intprod:"⨼",iocy:"ё",iogon:"į",iopf:"𝕚",iota:"ι",iprod:"⨼",iquest:"¿",iscr:"𝒾",isin:"∈",isinE:"⋹",isindot:"⋵",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",itilde:"ĩ",iukcy:"і",iuml:"ï",jcirc:"ĵ",jcy:"й",jfr:"𝔧",jmath:"ȷ",jopf:"𝕛",jscr:"𝒿",jsercy:"ј",jukcy:"є",kappa:"κ",kappav:"ϰ",kcedil:"ķ",kcy:"к",kfr:"𝔨",kgreen:"ĸ",khcy:"х",kjcy:"ќ",kopf:"𝕜",kscr:"𝓀",lAarr:"⇚",lArr:"⇐",lAtail:"⤛",lBarr:"⤎",lE:"≦",lEg:"⪋",lHar:"⥢",lacute:"ĺ",laemptyv:"⦴",lagran:"ℒ",lambda:"λ",lang:"⟨",langd:"⦑",langle:"⟨",lap:"⪅",laquo:"«",larr:"←",larrb:"⇤",larrbfs:"⤟",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",lat:"⪫",latail:"⤙",late:"⪭",lates:"⪭︀",lbarr:"⤌",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",lcaron:"ľ",lcedil:"ļ",lceil:"⌈",lcub:"{",lcy:"л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",leftarrow:"←",leftarrowtail:"↢",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",leftrightarrow:"↔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",leftthreetimes:"⋋",leg:"⋚",leq:"≤",leqq:"≦",leqslant:"⩽",les:"⩽",lescc:"⪨",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",lessgtr:"≶",lesssim:"≲",lfisht:"⥼",lfloor:"⌊",lfr:"𝔩",lg:"≶",lgE:"⪑",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",ljcy:"љ",ll:"≪",llarr:"⇇",llcorner:"⌞",llhard:"⥫",lltri:"◺",lmidot:"ŀ",lmoust:"⎰",lmoustache:"⎰",lnE:"≨",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",longleftarrow:"⟵",longleftrightarrow:"⟷",longmapsto:"⟼",longrightarrow:"⟶",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",lopf:"𝕝",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"𝓁",lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",lstrok:"ł",lt:"<",ltcc:"⪦",ltcir:"⩹",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltrPar:"⦖",ltri:"◃",ltrie:"⊴",ltrif:"◂",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",mDDot:"∺",macr:"¯",male:"♂",malt:"✠",maltese:"✠",map:"↦",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",mcy:"м",mdash:"—",measuredangle:"∡",mfr:"𝔪",mho:"℧",micro:"µ",mid:"∣",midast:"*",midcir:"⫰",middot:"·",minus:"−",minusb:"⊟",minusd:"∸",minusdu:"⨪",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",mopf:"𝕞",mp:"∓",mscr:"𝓂",mstpos:"∾",mu:"μ",multimap:"⊸",mumap:"⊸",nGg:"⋙̸",nGt:"≫⃒",nGtv:"≫̸",nLeftarrow:"⇍",nLeftrightarrow:"⇎",nLl:"⋘̸",nLt:"≪⃒",nLtv:"≪̸",nRightarrow:"⇏",nVDash:"⊯",nVdash:"⊮",nabla:"∇",nacute:"ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natur:"♮",natural:"♮",naturals:"ℕ",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",ncaron:"ň",ncedil:"ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",ncy:"н",ndash:"–",ne:"≠",neArr:"⇗",nearhk:"⤤",nearr:"↗",nearrow:"↗",nedot:"≐̸",nequiv:"≢",nesear:"⤨",nesim:"≂̸",nexist:"∄",nexists:"∄",nfr:"𝔫",ngE:"≧̸",nge:"≱",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",ngsim:"≵",ngt:"≯",ngtr:"≯",nhArr:"⇎",nharr:"↮",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",njcy:"њ",nlArr:"⇍",nlE:"≦̸",nlarr:"↚",nldr:"‥",nle:"≰",nleftarrow:"↚",nleftrightarrow:"↮",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nlsim:"≴",nlt:"≮",nltri:"⋪",nltrie:"⋬",nmid:"∤",nopf:"𝕟",not:"¬",notin:"∉",notinE:"⋹̸",notindot:"⋵̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",npar:"∦",nparallel:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",npre:"⪯̸",nprec:"⊀",npreceq:"⪯̸",nrArr:"⇏",nrarr:"↛",nrarrc:"⤳̸",nrarrw:"↝̸",nrightarrow:"↛",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",nscr:"𝓃",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsubE:"⫅̸",nsube:"⊈",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupE:"⫆̸",nsupe:"⊉",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",ntilde:"ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",nu:"ν",num:"#",numero:"№",numsp:" ",nvDash:"⊭",nvHarr:"⤄",nvap:"≍⃒",nvdash:"⊬",nvge:"≥⃒",nvgt:">⃒",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwArr:"⇖",nwarhk:"⤣",nwarr:"↖",nwarrow:"↖",nwnear:"⤧",oS:"Ⓢ",oacute:"ó",oast:"⊛",ocir:"⊚",ocirc:"ô",ocy:"о",odash:"⊝",odblac:"ő",odiv:"⨸",odot:"⊙",odsold:"⦼",oelig:"œ",ofcir:"⦿",ofr:"𝔬",ogon:"˛",ograve:"ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",omacr:"ō",omega:"ω",omicron:"ο",omid:"⦶",ominus:"⊖",oopf:"𝕠",opar:"⦷",operp:"⦹",oplus:"⊕",or:"∨",orarr:"↻",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oscr:"ℴ",oslash:"ø",osol:"⊘",otilde:"õ",otimes:"⊗",otimesas:"⨶",ouml:"ö",ovbar:"⌽",par:"∥",para:"¶",parallel:"∥",parsim:"⫳",parsl:"⫽",part:"∂",pcy:"п",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",pfr:"𝔭",phi:"φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",pi:"π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plus:"+",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plusdo:"∔",plusdu:"⨥",pluse:"⩲",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",pointint:"⨕",popf:"𝕡",pound:"£",pr:"≺",prE:"⪳",prap:"⪷",prcue:"≼",pre:"⪯",prec:"≺",precapprox:"⪷",preccurlyeq:"≼",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",precsim:"≾",prime:"′",primes:"ℙ",prnE:"⪵",prnap:"⪹",prnsim:"⋨",prod:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",propto:"∝",prsim:"≾",prurel:"⊰",pscr:"𝓅",psi:"ψ",puncsp:" ",qfr:"𝔮",qint:"⨌",qopf:"𝕢",qprime:"⁗",qscr:"𝓆",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",quot:'"',rAarr:"⇛",rArr:"⇒",rAtail:"⤜",rBarr:"⤏",rHar:"⥤",race:"∽̱",racute:"ŕ",radic:"√",raemptyv:"⦳",rang:"⟩",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"»",rarr:"→",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",rarrtl:"↣",rarrw:"↝",ratail:"⤚",ratio:"∶",rationals:"ℚ",rbarr:"⤍",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",rcaron:"ř",rcedil:"ŗ",rceil:"⌉",rcub:"}",rcy:"р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",rect:"▭",reg:"®",rfisht:"⥽",rfloor:"⌋",rfr:"𝔯",rhard:"⇁",rharu:"⇀",rharul:"⥬",rho:"ρ",rhov:"ϱ",rightarrow:"→",rightarrowtail:"↣",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",rightthreetimes:"⋌",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoust:"⎱",rmoustache:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",ropf:"𝕣",roplus:"⨮",rotimes:"⨵",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",rsaquo:"›",rscr:"𝓇",rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",ruluhar:"⥨",rx:"℞",sacute:"ś",sbquo:"‚",sc:"≻",scE:"⪴",scap:"⪸",scaron:"š",sccue:"≽",sce:"⪰",scedil:"ş",scirc:"ŝ",scnE:"⪶",scnap:"⪺",scnsim:"⋩",scpolint:"⨓",scsim:"≿",scy:"с",sdot:"⋅",sdotb:"⊡",sdote:"⩦",seArr:"⇘",searhk:"⤥",searr:"↘",searrow:"↘",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",sfr:"𝔰",sfrown:"⌢",sharp:"♯",shchcy:"щ",shcy:"ш",shortmid:"∣",shortparallel:"∥",shy:"­",sigma:"σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",softcy:"ь",sol:"/",solb:"⧄",solbar:"⌿",sopf:"𝕤",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",squ:"□",square:"□",squarf:"▪",squf:"▪",srarr:"→",sscr:"𝓈",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",star:"☆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",sub:"⊂",subE:"⫅",subdot:"⪽",sube:"⊆",subedot:"⫃",submult:"⫁",subnE:"⫋",subne:"⊊",subplus:"⪿",subrarr:"⥹",subset:"⊂",subseteq:"⊆",subseteqq:"⫅",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succ:"≻",succapprox:"⪸",succcurlyeq:"≽",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",sum:"∑",sung:"♪",sup1:"¹",sup2:"²",sup3:"³",sup:"⊃",supE:"⫆",supdot:"⪾",supdsub:"⫘",supe:"⊇",supedot:"⫄",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supnE:"⫌",supne:"⊋",supplus:"⫀",supset:"⊃",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swArr:"⇙",swarhk:"⤦",swarr:"↙",swarrow:"↙",swnwar:"⤪",szlig:"ß",target:"⌖",tau:"τ",tbrk:"⎴",tcaron:"ť",tcedil:"ţ",tcy:"т",tdot:"⃛",telrec:"⌕",tfr:"𝔱",there4:"∴",therefore:"∴",theta:"θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",thinsp:" ",thkap:"≈",thksim:"∼",thorn:"þ",tilde:"˜",times:"×",timesb:"⊠",timesbar:"⨱",timesd:"⨰",tint:"∭",toea:"⤨",top:"⊤",topbot:"⌶",topcir:"⫱",topf:"𝕥",topfork:"⫚",tosa:"⤩",tprime:"‴",trade:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",tscr:"𝓉",tscy:"ц",tshcy:"ћ",tstrok:"ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",uArr:"⇑",uHar:"⥣",uacute:"ú",uarr:"↑",ubrcy:"ў",ubreve:"ŭ",ucirc:"û",ucy:"у",udarr:"⇅",udblac:"ű",udhar:"⥮",ufisht:"⥾",ufr:"𝔲",ugrave:"ù",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",umacr:"ū",uml:"¨",uogon:"ų",uopf:"𝕦",uparrow:"↑",updownarrow:"↕",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",upsi:"υ",upsih:"ϒ",upsilon:"υ",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",uring:"ů",urtri:"◹",uscr:"𝓊",utdot:"⋰",utilde:"ũ",utri:"▵",utrif:"▴",uuarr:"⇈",uuml:"ü",uwangle:"⦧",vArr:"⇕",vBar:"⫨",vBarv:"⫩",vDash:"⊨",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",varr:"↕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",vcy:"в",vdash:"⊢",vee:"∨",veebar:"⊻",veeeq:"≚",vellip:"⋮",verbar:"|",vert:"|",vfr:"𝔳",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",vopf:"𝕧",vprop:"∝",vrtri:"⊳",vscr:"𝓋",vsubnE:"⫋︀",vsubne:"⊊︀",vsupnE:"⫌︀",vsupne:"⊋︀",vzigzag:"⦚",wcirc:"ŵ",wedbar:"⩟",wedge:"∧",wedgeq:"≙",weierp:"℘",wfr:"𝔴",wopf:"𝕨",wp:"℘",wr:"≀",wreath:"≀",wscr:"𝓌",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",xfr:"𝔵",xhArr:"⟺",xharr:"⟷",xi:"ξ",xlArr:"⟸",xlarr:"⟵",xmap:"⟼",xnis:"⋻",xodot:"⨀",xopf:"𝕩",xoplus:"⨁",xotime:"⨂",xrArr:"⟹",xrarr:"⟶",xscr:"𝓍",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",yacute:"ý",yacy:"я",ycirc:"ŷ",ycy:"ы",yen:"¥",yfr:"𝔶",yicy:"ї",yopf:"𝕪",yscr:"𝓎",yucy:"ю",yuml:"ÿ",zacute:"ź",zcaron:"ž",zcy:"з",zdot:"ż",zeetrf:"ℨ",zeta:"ζ",zfr:"𝔷",zhcy:"ж",zigrarr:"⇝",zopf:"𝕫",zscr:"𝓏",zwj:"‍",zwnj:"‌"},vu={}.hasOwnProperty;function Go(e){return vu.call(Li,e)?Li[e]:!1}const ye=dt(/[A-Za-z]/),he=dt(/[\dA-Za-z]/),ku=dt(/[#-'*+\--9=?A-Z^-~]/);function tr(e){return e!==null&&(e<32||e===127)}const fo=dt(/\d/),wu=dt(/[\dA-Fa-f]/),Bu=dt(/[!-/:-@[-`{-~]/);function P(e){return e!==null&&e<-2}function Q(e){return e!==null&&(e<0||e===32)}function Z(e){return e===-2||e===-1||e===32}const ur=dt(new RegExp("\\p{P}|\\p{S}","u")),kt=dt(/\s/);function dt(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Pe(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}function Kt(e){if(e===null||Q(e)||kt(e))return 1;if(ur(e))return 2}const Eu={};function hr(e,t){let n=t||Eu;return ga(e,typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,typeof n.includeHtml=="boolean"?n.includeHtml:!0)}function ga(e,t,n){if(Du(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Ri(e.children,t,n)}return Array.isArray(e)?Ri(e,t,n):""}function Ri(e,t,n){let r=[],o=-1;for(;++o<e.length;)r[o]=ga(e[o],t,n);return r.join("")}function Du(e){return!!(e&&typeof e=="object")}function ya(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)==65535||(n&65535)==65534||n>1114111?"�":String.fromCodePoint(n)}const Au=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Fu(e){return e.replace(Au,Nu)}function Nu(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let r=n.charCodeAt(1),o=r===120||r===88;return ya(n.slice(o?2:1),o?16:10)}return Go(n)||e}function De(e,t,n,r){let o=e.length,l=0,i;if(t=t<0?-t>o?0:o+t:t>o?o:t,n=n>0?n:0,r.length<1e4)i=Array.from(r),i.unshift(t,n),e.splice(...i);else for(n&&e.splice(t,n);l<r.length;)i=r.slice(l,l+1e4),i.unshift(t,0),e.splice(...i),l+=1e4,t+=1e4}function Ae(e,t){return e.length>0?(De(e,e.length,0,t),e):t}const Ci={}.hasOwnProperty;function xa(e){let t={},n=-1;for(;++n<e.length;)Ou(t,e[n]);return t}function Ou(e,t){let n;for(n in t){let r=(Ci.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n],l;if(o)for(l in o){Ci.call(r,l)||(r[l]=[]);let i=o[l];Lu(r[l],Array.isArray(i)?i:i?[i]:[])}}}function Lu(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);De(e,0,0,r)}function $t(e){let t=[],n=-1,r=0,o=0;for(;++n<e.length;){let l=e.charCodeAt(n),i="";if(l===37&&he(e.charCodeAt(n+1))&&he(e.charCodeAt(n+2)))o=2;else if(l<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l))||(i=String.fromCharCode(l));else if(l>55295&&l<57344){let a=e.charCodeAt(n+1);l<56320&&a>56319&&a<57344?(i=String.fromCharCode(l,a),o=1):i="�"}else i=String.fromCharCode(l);i&&=(t.push(e.slice(r,n),encodeURIComponent(i)),r=n+o+1,""),o&&=(n+=o,0)}return t.join("")+e.slice(r)}function pr(e,t,n){let r=[],o=-1;for(;++o<e.length;){let l=e[o].resolveAll;l&&!r.includes(l)&&(t=l(t,n),r.push(l))}return t}const uo={name:"attention",resolveAll:Ru,tokenize:Cu};function Ru(e,t){let n=-1,r,o,l,i,a,s,c,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let f={...e[r][1].end},u={...e[n][1].start};Ii(f,-s),Ii(u,s),i={type:s>1?"strongSequence":"emphasisSequence",start:f,end:{...e[r][1].end}},a={type:s>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:u},l={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},o={type:s>1?"strong":"emphasis",start:{...i.start},end:{...a.end}},e[r][1].end={...i.start},e[n][1].start={...a.end},c=[],e[r][1].end.offset-e[r][1].start.offset&&(c=Ae(c,[["enter",e[r][1],t],["exit",e[r][1],t]])),c=Ae(c,[["enter",o,t],["enter",i,t],["exit",i,t],["enter",l,t]]),c=Ae(c,pr(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),c=Ae(c,[["exit",l,t],["enter",a,t],["exit",a,t],["exit",o,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,c=Ae(c,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,De(e,r-1,n-r+3,c),n=r+c.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Cu(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,o=Kt(r),l;return i;function i(s){return l=s,e.enter("attentionSequence"),a(s)}function a(s){if(s===l)return e.consume(s),a;let c=e.exit("attentionSequence"),d=Kt(s),f=!d||d===2&&o||n.includes(s),u=!o||o===2&&d||n.includes(r);return c._open=!!(l===42?f:f&&(o||!u)),c._close=!!(l===42?u:u&&(d||!f)),t(s)}}function Ii(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Iu={name:"autolink",tokenize:Su};function Su(e,t,n){let r=0;return o;function o(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),l}function l(h){return ye(h)?(e.consume(h),i):h===64?n(h):c(h)}function i(h){return h===43||h===45||h===46||he(h)?(r=1,a(h)):c(h)}function a(h){return h===58?(e.consume(h),r=0,s):(h===43||h===45||h===46||he(h))&&r++<32?(e.consume(h),a):(r=0,c(h))}function s(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||tr(h)?n(h):(e.consume(h),s)}function c(h){return h===64?(e.consume(h),d):ku(h)?(e.consume(h),c):n(h)}function d(h){return he(h)?f(h):n(h)}function f(h){return h===46?(e.consume(h),r=0,d):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):u(h)}function u(h){if((h===45||he(h))&&r++<63){let p=h===45?u:f;return e.consume(h),p}return n(h)}}function H(e,t,n,r){let o=r?r-1:1/0,l=0;return i;function i(s){return Z(s)?(e.enter(n),a(s)):t(s)}function a(s){return Z(s)&&l++<o?(e.consume(s),a):(e.exit(n),t(s))}}const En={partial:!0,tokenize:Pu};function Pu(e,t,n){return r;function r(l){return Z(l)?H(e,o,"linePrefix")(l):o(l)}function o(l){return l===null||P(l)?t(l):n(l)}}const ba={continuation:{tokenize:Mu},exit:Gu,name:"blockQuote",tokenize:zu};function zu(e,t,n){let r=this;return o;function o(i){if(i===62){let a=r.containerState;return a.open||=(e.enter("blockQuote",{_container:!0}),!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(i),e.exit("blockQuoteMarker"),l}return n(i)}function l(i){return Z(i)?(e.enter("blockQuotePrefixWhitespace"),e.consume(i),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(i))}}function Mu(e,t,n){let r=this;return o;function o(i){return Z(i)?H(e,l,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(i):l(i)}function l(i){return e.attempt(ba,t,n)(i)}}function Gu(e){e.exit("blockQuote")}const Ta={name:"characterEscape",tokenize:qu};function qu(e,t,n){return r;function r(l){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(l),e.exit("escapeMarker"),o}function o(l){return Bu(l)?(e.enter("characterEscapeValue"),e.consume(l),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(l)}}const va={name:"characterReference",tokenize:Ku};function Ku(e,t,n){let r=this,o=0,l,i;return a;function a(f){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),s}function s(f){return f===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(f),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),l=31,i=he,d(f))}function c(f){return f===88||f===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(f),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),l=6,i=wu,d):(e.enter("characterReferenceValue"),l=7,i=fo,d(f))}function d(f){if(f===59&&o){let u=e.exit("characterReferenceValue");return i===he&&!Go(r.sliceSerialize(u))?n(f):(e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return i(f)&&o++<l?(e.consume(f),d):n(f)}}const Si={partial:!0,tokenize:ju},Pi={concrete:!0,name:"codeFenced",tokenize:Xu};function Xu(e,t,n){let r=this,o={partial:!0,tokenize:S},l=0,i=0,a;return s;function s(w){return c(w)}function c(w){let C=r.events[r.events.length-1];return l=C&&C[1].type==="linePrefix"?C[2].sliceSerialize(C[1],!0).length:0,a=w,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(w)}function d(w){return w===a?(i++,e.consume(w),d):i<3?n(w):(e.exit("codeFencedFenceSequence"),Z(w)?H(e,f,"whitespace")(w):f(w))}function f(w){return w===null||P(w)?(e.exit("codeFencedFence"),r.interrupt?t(w):e.check(Si,T,R)(w)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),u(w))}function u(w){return w===null||P(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),f(w)):Z(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),H(e,h,"whitespace")(w)):w===96&&w===a?n(w):(e.consume(w),u)}function h(w){return w===null||P(w)?f(w):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),p(w))}function p(w){return w===null||P(w)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),f(w)):w===96&&w===a?n(w):(e.consume(w),p)}function T(w){return e.attempt(o,R,b)(w)}function b(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),y}function y(w){return l>0&&Z(w)?H(e,F,"linePrefix",l+1)(w):F(w)}function F(w){return w===null||P(w)?e.check(Si,T,R)(w):(e.enter("codeFlowValue"),B(w))}function B(w){return w===null||P(w)?(e.exit("codeFlowValue"),F(w)):(e.consume(w),B)}function R(w){return e.exit("codeFenced"),t(w)}function S(w,C,v){let L=0;return x;function x(X){return w.enter("lineEnding"),w.consume(X),w.exit("lineEnding"),E}function E(X){return w.enter("codeFencedFence"),Z(X)?H(w,N,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(X):N(X)}function N(X){return X===a?(w.enter("codeFencedFenceSequence"),I(X)):v(X)}function I(X){return X===a?(L++,w.consume(X),I):L>=i?(w.exit("codeFencedFenceSequence"),Z(X)?H(w,j,"whitespace")(X):j(X)):v(X)}function j(X){return X===null||P(X)?(w.exit("codeFencedFence"),C(X)):v(X)}}}function ju(e,t,n){let r=this;return o;function o(i){return i===null?n(i):(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),l)}function l(i){return r.parser.lazy[r.now().line]?n(i):t(i)}}const Or={name:"codeIndented",tokenize:Zu},Wu={partial:!0,tokenize:Uu};function Zu(e,t,n){let r=this;return o;function o(c){return e.enter("codeIndented"),H(e,l,"linePrefix",5)(c)}function l(c){let d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?i(c):n(c)}function i(c){return c===null?s(c):P(c)?e.attempt(Wu,i,s)(c):(e.enter("codeFlowValue"),a(c))}function a(c){return c===null||P(c)?(e.exit("codeFlowValue"),i(c)):(e.consume(c),a)}function s(c){return e.exit("codeIndented"),t(c)}}function Uu(e,t,n){let r=this;return o;function o(i){return r.parser.lazy[r.now().line]?n(i):P(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),o):H(e,l,"linePrefix",5)(i)}function l(i){let a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):P(i)?o(i):n(i)}}const Hu={name:"codeText",previous:Vu,resolve:$u,tokenize:Qu};function $u(e){let t=e.length-4,n=3,r,o;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)o===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(o=r):(r===t||e[r][1].type==="lineEnding")&&(e[o][1].type="codeTextData",r!==o+2&&(e[o][1].end=e[r-1][1].end,e.splice(o+2,r-o-2),t-=r-o-2,r=o+2),o=void 0);return e}function Vu(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Qu(e,t,n){let r=0,o,l;return i;function i(f){return e.enter("codeText"),e.enter("codeTextSequence"),a(f)}function a(f){return f===96?(e.consume(f),r++,a):(e.exit("codeTextSequence"),s(f))}function s(f){return f===null?n(f):f===32?(e.enter("space"),e.consume(f),e.exit("space"),s):f===96?(l=e.enter("codeTextSequence"),o=0,d(f)):P(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),s):(e.enter("codeTextData"),c(f))}function c(f){return f===null||f===32||f===96||P(f)?(e.exit("codeTextData"),s(f)):(e.consume(f),c)}function d(f){return f===96?(e.consume(f),o++,d):o===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(f)):(l.type="codeTextData",c(f))}}var Yu=class{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){let r=n??1/0;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){let o=n||0;this.setCursor(Math.trunc(t));let l=this.right.splice(this.right.length-o,1/0);return r&&nn(this.left,r),l.reverse()}pop(){return this.setCursor(1/0),this.left.pop()}push(t){this.setCursor(1/0),this.left.push(t)}pushMany(t){this.setCursor(1/0),nn(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),nn(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){let n=this.left.splice(t,1/0);nn(this.right,n.reverse())}else{let n=this.right.splice(this.left.length+this.right.length-t,1/0);nn(this.left,n.reverse())}}};function nn(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function ka(e){let t={},n=-1,r,o,l,i,a,s,c,d=new Yu(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,l=0,l<s.length&&s[l][1].type==="lineEndingBlank"&&(l+=2),l<s.length&&s[l][1].type==="content"))for(;++l<s.length&&s[l][1].type!=="content";)s[l][1].type==="chunkText"&&(s[l][1]._isInFirstContentOfListItem=!0,l++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Ju(d,n)),n=t[n],c=!0);else if(r[1]._container){for(l=n,o=void 0;l--;)if(i=d.get(l),i[1].type==="lineEnding"||i[1].type==="lineEndingBlank")i[0]==="enter"&&(o&&(d.get(o)[1].type="lineEndingBlank"),i[1].type="lineEnding",o=l);else if(!(i[1].type==="linePrefix"||i[1].type==="listItemIndent"))break;o&&(r[1].end={...d.get(o)[1].start},a=d.slice(o,n),a.unshift(r),d.splice(o,n-o+1,a))}}return De(e,0,1/0,d.slice(0)),!c}function Ju(e,t){let n=e.get(t)[1],r=e.get(t)[2],o=t-1,l=[],i=n._tokenizer;i||(i=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(i._contentTypeTextTrailing=!0));let a=i.events,s=[],c={},d,f,u=-1,h=n,p=0,T=0,b=[T];for(;h;){for(;e.get(++o)[1]!==h;);l.push(o),h._tokenizer||(d=r.sliceStream(h),h.next||d.push(null),f&&i.defineSkip(h.start),h._isInFirstContentOfListItem&&(i._gfmTasklistFirstContentOfListItem=!0),i.write(d),h._isInFirstContentOfListItem&&(i._gfmTasklistFirstContentOfListItem=void 0)),f=h,h=h.next}for(h=n;++u<a.length;)a[u][0]==="exit"&&a[u-1][0]==="enter"&&a[u][1].type===a[u-1][1].type&&a[u][1].start.line!==a[u][1].end.line&&(T=u+1,b.push(T),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(i.events=[],h?(h._tokenizer=void 0,h.previous=void 0):b.pop(),u=b.length;u--;){let y=a.slice(b[u],b[u+1]),F=l.pop();s.push([F,F+y.length-1]),e.splice(F,2,y)}for(s.reverse(),u=-1;++u<s.length;)c[p+s[u][0]]=p+s[u][1],p+=s[u][1]-s[u][0]-1;return c}const _u={resolve:t1,tokenize:n1},e1={partial:!0,tokenize:r1};function t1(e){return ka(e),e}function n1(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),o(a)}function o(a){return a===null?l(a):P(a)?e.check(e1,i,l)(a):(e.consume(a),o)}function l(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function i(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,o}}function r1(e,t,n){let r=this;return o;function o(i){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),H(e,l,"linePrefix")}function l(i){if(i===null||P(i))return n(i);let a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}function wa(e,t,n,r,o,l,i,a,s){let c=s||1/0,d=0;return f;function f(y){return y===60?(e.enter(r),e.enter(o),e.enter(l),e.consume(y),e.exit(l),u):y===null||y===32||y===41||tr(y)?n(y):(e.enter(r),e.enter(i),e.enter(a),e.enter("chunkString",{contentType:"string"}),T(y))}function u(y){return y===62?(e.enter(l),e.consume(y),e.exit(l),e.exit(o),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),h(y))}function h(y){return y===62?(e.exit("chunkString"),e.exit(a),u(y)):y===null||y===60||P(y)?n(y):(e.consume(y),y===92?p:h)}function p(y){return y===60||y===62||y===92?(e.consume(y),h):h(y)}function T(y){return!d&&(y===null||y===41||Q(y))?(e.exit("chunkString"),e.exit(a),e.exit(i),e.exit(r),t(y)):d<c&&y===40?(e.consume(y),d++,T):y===41?(e.consume(y),d--,T):y===null||y===32||y===40||tr(y)?n(y):(e.consume(y),y===92?b:T)}function b(y){return y===40||y===41||y===92?(e.consume(y),T):T(y)}}function Ba(e,t,n,r,o,l){let i=this,a=0,s;return c;function c(h){return e.enter(r),e.enter(o),e.consume(h),e.exit(o),e.enter(l),d}function d(h){return a>999||h===null||h===91||h===93&&!s||h===94&&!a&&"_hiddenFootnoteSupport"in i.parser.constructs?n(h):h===93?(e.exit(l),e.enter(o),e.consume(h),e.exit(o),e.exit(r),t):P(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),f(h))}function f(h){return h===null||h===91||h===93||P(h)||a++>999?(e.exit("chunkString"),d(h)):(e.consume(h),s||=!Z(h),h===92?u:f)}function u(h){return h===91||h===92||h===93?(e.consume(h),a++,f):f(h)}}function Ea(e,t,n,r,o,l){let i;return a;function a(u){return u===34||u===39||u===40?(e.enter(r),e.enter(o),e.consume(u),e.exit(o),i=u===40?41:u,s):n(u)}function s(u){return u===i?(e.enter(o),e.consume(u),e.exit(o),e.exit(r),t):(e.enter(l),c(u))}function c(u){return u===i?(e.exit(l),s(i)):u===null?n(u):P(u)?(e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),H(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(u))}function d(u){return u===i||u===null||P(u)?(e.exit("chunkString"),c(u)):(e.consume(u),u===92?f:d)}function f(u){return u===i||u===92?(e.consume(u),d):d(u)}}function fn(e,t){let n;return r;function r(o){return P(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),n=!0,r):Z(o)?H(e,r,n?"linePrefix":"lineSuffix")(o):t(o)}}const o1={name:"definition",tokenize:l1},i1={partial:!0,tokenize:a1};function l1(e,t,n){let r=this,o;return l;function l(h){return e.enter("definition"),i(h)}function i(h){return Ba.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function a(h){return o=Pe(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),s):n(h)}function s(h){return Q(h)?fn(e,c)(h):c(h)}function c(h){return wa(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function d(h){return e.attempt(i1,f,f)(h)}function f(h){return Z(h)?H(e,u,"whitespace")(h):u(h)}function u(h){return h===null||P(h)?(e.exit("definition"),r.parser.defined.push(o),t(h)):n(h)}}function a1(e,t,n){return r;function r(a){return Q(a)?fn(e,o)(a):n(a)}function o(a){return Ea(e,l,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function l(a){return Z(a)?H(e,i,"whitespace")(a):i(a)}function i(a){return a===null||P(a)?t(a):n(a)}}const s1={name:"hardBreakEscape",tokenize:c1};function c1(e,t,n){return r;function r(l){return e.enter("hardBreakEscape"),e.consume(l),o}function o(l){return P(l)?(e.exit("hardBreakEscape"),t(l)):n(l)}}const d1={name:"headingAtx",resolve:f1,tokenize:u1};function f1(e,t){let n=e.length-2,r=3,o,l;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(o={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},l={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},De(e,r,n-r+1,[["enter",o,t],["enter",l,t],["exit",l,t],["exit",o,t]])),e}function u1(e,t,n){let r=0;return o;function o(d){return e.enter("atxHeading"),l(d)}function l(d){return e.enter("atxHeadingSequence"),i(d)}function i(d){return d===35&&r++<6?(e.consume(d),i):d===null||Q(d)?(e.exit("atxHeadingSequence"),a(d)):n(d)}function a(d){return d===35?(e.enter("atxHeadingSequence"),s(d)):d===null||P(d)?(e.exit("atxHeading"),t(d)):Z(d)?H(e,a,"whitespace")(d):(e.enter("atxHeadingText"),c(d))}function s(d){return d===35?(e.consume(d),s):(e.exit("atxHeadingSequence"),a(d))}function c(d){return d===null||d===35||Q(d)?(e.exit("atxHeadingText"),a(d)):(e.consume(d),c)}}const h1="address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."),zi=["pre","script","style","textarea"],p1={concrete:!0,name:"htmlFlow",resolveTo:y1,tokenize:x1},m1={partial:!0,tokenize:T1},g1={partial:!0,tokenize:b1};function y1(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function x1(e,t,n){let r=this,o,l,i,a,s;return c;function c(g){return d(g)}function d(g){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(g),f}function f(g){return g===33?(e.consume(g),u):g===47?(e.consume(g),l=!0,T):g===63?(e.consume(g),o=3,r.interrupt?t:m):ye(g)?(e.consume(g),i=String.fromCharCode(g),b):n(g)}function u(g){return g===45?(e.consume(g),o=2,h):g===91?(e.consume(g),o=5,a=0,p):ye(g)?(e.consume(g),o=4,r.interrupt?t:m):n(g)}function h(g){return g===45?(e.consume(g),r.interrupt?t:m):n(g)}function p(g){return g==="CDATA[".charCodeAt(a++)?(e.consume(g),a===6?r.interrupt?t:N:p):n(g)}function T(g){return ye(g)?(e.consume(g),i=String.fromCharCode(g),b):n(g)}function b(g){if(g===null||g===47||g===62||Q(g)){let tt=g===47,ft=i.toLowerCase();return!tt&&!l&&zi.includes(ft)?(o=1,r.interrupt?t(g):N(g)):h1.includes(i.toLowerCase())?(o=6,tt?(e.consume(g),y):r.interrupt?t(g):N(g)):(o=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(g):l?F(g):B(g))}return g===45||he(g)?(e.consume(g),i+=String.fromCharCode(g),b):n(g)}function y(g){return g===62?(e.consume(g),r.interrupt?t:N):n(g)}function F(g){return Z(g)?(e.consume(g),F):x(g)}function B(g){return g===47?(e.consume(g),x):g===58||g===95||ye(g)?(e.consume(g),R):Z(g)?(e.consume(g),B):x(g)}function R(g){return g===45||g===46||g===58||g===95||he(g)?(e.consume(g),R):S(g)}function S(g){return g===61?(e.consume(g),w):Z(g)?(e.consume(g),S):B(g)}function w(g){return g===null||g===60||g===61||g===62||g===96?n(g):g===34||g===39?(e.consume(g),s=g,C):Z(g)?(e.consume(g),w):v(g)}function C(g){return g===s?(e.consume(g),s=null,L):g===null||P(g)?n(g):(e.consume(g),C)}function v(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||Q(g)?S(g):(e.consume(g),v)}function L(g){return g===47||g===62||Z(g)?B(g):n(g)}function x(g){return g===62?(e.consume(g),E):n(g)}function E(g){return g===null||P(g)?N(g):Z(g)?(e.consume(g),E):n(g)}function N(g){return g===45&&o===2?(e.consume(g),ee):g===60&&o===1?(e.consume(g),te):g===62&&o===4?(e.consume(g),et):g===63&&o===3?(e.consume(g),m):g===93&&o===5?(e.consume(g),ke):P(g)&&(o===6||o===7)?(e.exit("htmlFlowData"),e.check(m1,We,I)(g)):g===null||P(g)?(e.exit("htmlFlowData"),I(g)):(e.consume(g),N)}function I(g){return e.check(g1,j,We)(g)}function j(g){return e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),X}function X(g){return g===null||P(g)?I(g):(e.enter("htmlFlowData"),N(g))}function ee(g){return g===45?(e.consume(g),m):N(g)}function te(g){return g===47?(e.consume(g),i="",me):N(g)}function me(g){if(g===62){let tt=i.toLowerCase();return zi.includes(tt)?(e.consume(g),et):N(g)}return ye(g)&&i.length<8?(e.consume(g),i+=String.fromCharCode(g),me):N(g)}function ke(g){return g===93?(e.consume(g),m):N(g)}function m(g){return g===62?(e.consume(g),et):g===45&&o===2?(e.consume(g),m):N(g)}function et(g){return g===null||P(g)?(e.exit("htmlFlowData"),We(g)):(e.consume(g),et)}function We(g){return e.exit("htmlFlow"),t(g)}}function b1(e,t,n){let r=this;return o;function o(i){return P(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),l):n(i)}function l(i){return r.parser.lazy[r.now().line]?n(i):t(i)}}function T1(e,t,n){return r;function r(o){return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),e.attempt(En,t,n)}}const v1={name:"htmlText",tokenize:k1};function k1(e,t,n){let r=this,o,l,i;return a;function a(m){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(m),s}function s(m){return m===33?(e.consume(m),c):m===47?(e.consume(m),S):m===63?(e.consume(m),B):ye(m)?(e.consume(m),v):n(m)}function c(m){return m===45?(e.consume(m),d):m===91?(e.consume(m),l=0,p):ye(m)?(e.consume(m),F):n(m)}function d(m){return m===45?(e.consume(m),h):n(m)}function f(m){return m===null?n(m):m===45?(e.consume(m),u):P(m)?(i=f,te(m)):(e.consume(m),f)}function u(m){return m===45?(e.consume(m),h):f(m)}function h(m){return m===62?ee(m):m===45?u(m):f(m)}function p(m){return m==="CDATA[".charCodeAt(l++)?(e.consume(m),l===6?T:p):n(m)}function T(m){return m===null?n(m):m===93?(e.consume(m),b):P(m)?(i=T,te(m)):(e.consume(m),T)}function b(m){return m===93?(e.consume(m),y):T(m)}function y(m){return m===62?ee(m):m===93?(e.consume(m),y):T(m)}function F(m){return m===null||m===62?ee(m):P(m)?(i=F,te(m)):(e.consume(m),F)}function B(m){return m===null?n(m):m===63?(e.consume(m),R):P(m)?(i=B,te(m)):(e.consume(m),B)}function R(m){return m===62?ee(m):B(m)}function S(m){return ye(m)?(e.consume(m),w):n(m)}function w(m){return m===45||he(m)?(e.consume(m),w):C(m)}function C(m){return P(m)?(i=C,te(m)):Z(m)?(e.consume(m),C):ee(m)}function v(m){return m===45||he(m)?(e.consume(m),v):m===47||m===62||Q(m)?L(m):n(m)}function L(m){return m===47?(e.consume(m),ee):m===58||m===95||ye(m)?(e.consume(m),x):P(m)?(i=L,te(m)):Z(m)?(e.consume(m),L):ee(m)}function x(m){return m===45||m===46||m===58||m===95||he(m)?(e.consume(m),x):E(m)}function E(m){return m===61?(e.consume(m),N):P(m)?(i=E,te(m)):Z(m)?(e.consume(m),E):L(m)}function N(m){return m===null||m===60||m===61||m===62||m===96?n(m):m===34||m===39?(e.consume(m),o=m,I):P(m)?(i=N,te(m)):Z(m)?(e.consume(m),N):(e.consume(m),j)}function I(m){return m===o?(e.consume(m),o=void 0,X):m===null?n(m):P(m)?(i=I,te(m)):(e.consume(m),I)}function j(m){return m===null||m===34||m===39||m===60||m===61||m===96?n(m):m===47||m===62||Q(m)?L(m):(e.consume(m),j)}function X(m){return m===47||m===62||Q(m)?L(m):n(m)}function ee(m){return m===62?(e.consume(m),e.exit("htmlTextData"),e.exit("htmlText"),t):n(m)}function te(m){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),me}function me(m){return Z(m)?H(e,ke,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(m):ke(m)}function ke(m){return e.enter("htmlTextData"),i(m)}}const qo={name:"labelEnd",resolveAll:D1,resolveTo:A1,tokenize:F1},w1={tokenize:N1},B1={tokenize:O1},E1={tokenize:L1};function D1(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){let o=r.type==="labelImage"?4:2;r.type="data",t+=o}}return e.length!==n.length&&De(e,0,e.length,n),e}function A1(e,t){let n=e.length,r=0,o,l,i,a;for(;n--;)if(o=e[n][1],l){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;e[n][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(i){if(e[n][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(l=n,o.type!=="labelLink")){r=2;break}}else o.type==="labelEnd"&&(i=n);let s={type:e[l][1].type==="labelLink"?"link":"image",start:{...e[l][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[l][1].start},end:{...e[i][1].end}},d={type:"labelText",start:{...e[l+r+2][1].end},end:{...e[i-2][1].start}};return a=[["enter",s,t],["enter",c,t]],a=Ae(a,e.slice(l+1,l+r+3)),a=Ae(a,[["enter",d,t]]),a=Ae(a,pr(t.parser.constructs.insideSpan.null,e.slice(l+r+4,i-3),t)),a=Ae(a,[["exit",d,t],e[i-2],e[i-1],["exit",c,t]]),a=Ae(a,e.slice(i+1)),a=Ae(a,[["exit",s,t]]),De(e,l,e.length,a),e}function F1(e,t,n){let r=this,o=r.events.length,l,i;for(;o--;)if((r.events[o][1].type==="labelImage"||r.events[o][1].type==="labelLink")&&!r.events[o][1]._balanced){l=r.events[o][1];break}return a;function a(u){return l?l._inactive?f(u):(i=r.parser.defined.includes(Pe(r.sliceSerialize({start:l.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(u),e.exit("labelMarker"),e.exit("labelEnd"),s):n(u)}function s(u){return u===40?e.attempt(w1,d,i?d:f)(u):u===91?e.attempt(B1,d,i?c:f)(u):i?d(u):f(u)}function c(u){return e.attempt(E1,d,f)(u)}function d(u){return t(u)}function f(u){return l._balanced=!0,n(u)}}function N1(e,t,n){return r;function r(f){return e.enter("resource"),e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),o}function o(f){return Q(f)?fn(e,l)(f):l(f)}function l(f){return f===41?d(f):wa(e,i,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function i(f){return Q(f)?fn(e,s)(f):d(f)}function a(f){return n(f)}function s(f){return f===34||f===39||f===40?Ea(e,c,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):d(f)}function c(f){return Q(f)?fn(e,d)(f):d(f)}function d(f){return f===41?(e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),e.exit("resource"),t):n(f)}}function O1(e,t,n){let r=this;return o;function o(a){return Ba.call(r,e,l,i,"reference","referenceMarker","referenceString")(a)}function l(a){return r.parser.defined.includes(Pe(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function i(a){return n(a)}}function L1(e,t,n){return r;function r(l){return e.enter("reference"),e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),o}function o(l){return l===93?(e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),e.exit("reference"),t):n(l)}}const R1={name:"labelStartImage",resolveAll:qo.resolveAll,tokenize:C1};function C1(e,t,n){let r=this;return o;function o(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),l}function l(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),i):n(a)}function i(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const I1={name:"labelStartLink",resolveAll:qo.resolveAll,tokenize:S1};function S1(e,t,n){let r=this;return o;function o(i){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(i),e.exit("labelMarker"),e.exit("labelLink"),l}function l(i){return i===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(i):t(i)}}const Lr={name:"lineEnding",tokenize:P1};function P1(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),H(e,t,"linePrefix")}}const Kn={name:"thematicBreak",tokenize:z1};function z1(e,t,n){let r=0,o;return l;function l(c){return e.enter("thematicBreak"),i(c)}function i(c){return o=c,a(c)}function a(c){return c===o?(e.enter("thematicBreakSequence"),s(c)):r>=3&&(c===null||P(c))?(e.exit("thematicBreak"),t(c)):n(c)}function s(c){return c===o?(e.consume(c),r++,s):(e.exit("thematicBreakSequence"),Z(c)?H(e,a,"whitespace")(c):a(c))}}const xe={continuation:{tokenize:K1},exit:j1,name:"list",tokenize:q1},M1={partial:!0,tokenize:W1},G1={partial:!0,tokenize:X1};function q1(e,t,n){let r=this,o=r.events[r.events.length-1],l=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,i=0;return a;function a(h){let p=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(p==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:fo(h)){if(r.containerState.type||(r.containerState.type=p,e.enter(p,{_container:!0})),p==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(Kn,n,c)(h):c(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(h)}return n(h)}function s(h){return fo(h)&&++i<10?(e.consume(h),s):(!r.interrupt||i<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),c(h)):n(h)}function c(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(En,r.interrupt?n:d,e.attempt(M1,u,f))}function d(h){return r.containerState.initialBlankLine=!0,l++,u(h)}function f(h){return Z(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),u):n(h)}function u(h){return r.containerState.size=l+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function K1(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(En,o,l);function o(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,H(e,t,"listItemIndent",r.containerState.size+1)(a)}function l(a){return r.containerState.furtherBlankLines||!Z(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,i(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(G1,t,i)(a))}function i(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,H(e,e.attempt(xe,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function X1(e,t,n){let r=this;return H(e,o,"listItemIndent",r.containerState.size+1);function o(l){let i=r.events[r.events.length-1];return i&&i[1].type==="listItemIndent"&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(l):n(l)}}function j1(e){e.exit(this.containerState.type)}function W1(e,t,n){let r=this;return H(e,o,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function o(l){let i=r.events[r.events.length-1];return!Z(l)&&i&&i[1].type==="listItemPrefixWhitespace"?t(l):n(l)}}const Mi={name:"setextUnderline",resolveTo:Z1,tokenize:U1};function Z1(e,t){let n=e.length,r,o,l;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(o=n)}else e[n][1].type==="content"&&e.splice(n,1),!l&&e[n][1].type==="definition"&&(l=n);let i={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[o][1].type="setextHeadingText",l?(e.splice(o,0,["enter",i,t]),e.splice(l+1,0,["exit",e[r][1],t]),e[r][1].end={...e[l][1].end}):e[r][1]=i,e.push(["exit",i,t]),e}function U1(e,t,n){let r=this,o;return l;function l(c){let d=r.events.length,f;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){f=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||f)?(e.enter("setextHeadingLine"),o=c,i(c)):n(c)}function i(c){return e.enter("setextHeadingLineSequence"),a(c)}function a(c){return c===o?(e.consume(c),a):(e.exit("setextHeadingLineSequence"),Z(c)?H(e,s,"lineSuffix")(c):s(c))}function s(c){return c===null||P(c)?(e.exit("setextHeadingLine"),t(c)):n(c)}}const H1={tokenize:$1};function $1(e){let t=e.attempt(this.parser.constructs.contentInitial,r,o),n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),H(e,t,"linePrefix")}function o(a){return e.enter("paragraph"),l(a)}function l(a){let s=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,i(a)}function i(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return P(a)?(e.consume(a),e.exit("chunkText"),l):(e.consume(a),i)}}const V1={tokenize:Q1},Gi={tokenize:Y1};function Q1(e){let t=this,n=[],r=0,o,l,i;return a;function a(B){if(r<n.length){let R=n[r];return t.containerState=R[1],e.attempt(R[0].continuation,s,c)(B)}return c(B)}function s(B){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,o&&F();let R=t.events.length,S=R,w;for(;S--;)if(t.events[S][0]==="exit"&&t.events[S][1].type==="chunkFlow"){w=t.events[S][1].end;break}y(r);let C=R;for(;C<t.events.length;)t.events[C][1].end={...w},C++;return De(t.events,S+1,0,t.events.slice(R)),t.events.length=C,c(B)}return a(B)}function c(B){if(r===n.length){if(!o)return u(B);if(o.currentConstruct&&o.currentConstruct.concrete)return p(B);t.interrupt=!!(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Gi,d,f)(B)}function d(B){return o&&F(),y(r),u(B)}function f(B){return t.parser.lazy[t.now().line]=r!==n.length,i=t.now().offset,p(B)}function u(B){return t.containerState={},e.attempt(Gi,h,p)(B)}function h(B){return r++,n.push([t.currentConstruct,t.containerState]),u(B)}function p(B){if(B===null){o&&F(),y(0),e.consume(B);return}return o||=t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:o,contentType:"flow",previous:l}),T(B)}function T(B){if(B===null){b(e.exit("chunkFlow"),!0),y(0),e.consume(B);return}return P(B)?(e.consume(B),b(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(B),T)}function b(B,R){let S=t.sliceStream(B);if(R&&S.push(null),B.previous=l,l&&(l.next=B),l=B,o.defineSkip(B.start),o.write(S),t.parser.lazy[B.start.line]){let w=o.events.length;for(;w--;)if(o.events[w][1].start.offset<i&&(!o.events[w][1].end||o.events[w][1].end.offset>i))return;let C=t.events.length,v=C,L,x;for(;v--;)if(t.events[v][0]==="exit"&&t.events[v][1].type==="chunkFlow"){if(L){x=t.events[v][1].end;break}L=!0}for(y(r),w=C;w<t.events.length;)t.events[w][1].end={...x},w++;De(t.events,v+1,0,t.events.slice(C)),t.events.length=w}}function y(B){let R=n.length;for(;R-- >B;){let S=n[R];t.containerState=S[1],S[0].exit.call(t,e)}n.length=B}function F(){o.write([null]),l=void 0,o=void 0,t.containerState._closeFlow=void 0}}function Y1(e,t,n){return H(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}const J1={tokenize:_1};function _1(e){let t=this,n=e.attempt(En,r,e.attempt(this.parser.constructs.flowInitial,o,H(e,e.attempt(this.parser.constructs.flow,o,e.attempt(_u,o)),"linePrefix")));return n;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEndingBlank"),e.consume(l),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function o(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const eh={resolveAll:Aa()},th=Da("string"),nh=Da("text");function Da(e){return{resolveAll:Aa(e==="text"?rh:void 0),tokenize:t};function t(n){let r=this,o=this.parser.constructs[e],l=n.attempt(o,i,a);return i;function i(d){return c(d)?l(d):a(d)}function a(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),s}function s(d){return c(d)?(n.exit("data"),l(d)):(n.consume(d),s)}function c(d){if(d===null)return!0;let f=o[d],u=-1;if(f)for(;++u<f.length;){let h=f[u];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function Aa(e){return t;function t(n,r){let o=-1,l;for(;++o<=n.length;)l===void 0?n[o]&&n[o][1].type==="data"&&(l=o,o++):(!n[o]||n[o][1].type!=="data")&&(o!==l+2&&(n[l][1].end=n[o-1][1].end,n.splice(l+2,o-l-2),o=l+2),l=void 0);return e?e(n,r):n}}function rh(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){let r=e[n-1][1],o=t.sliceStream(r),l=o.length,i=-1,a=0,s;for(;l--;){let c=o[l];if(typeof c=="string"){for(i=c.length;c.charCodeAt(i-1)===32;)a++,i--;if(i)break;i=-1}else if(c===-2)s=!0,a++;else if(c!==-1){l++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){let c={type:n===e.length||s||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:l?i:r.start._bufferIndex+i,_index:r.start._index+l,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...c.start},r.start.offset===r.end.offset?Object.assign(r,c):(e.splice(n,0,["enter",c,t],["exit",c,t]),n+=2)}n++}return e}var oh=wn({attentionMarkers:()=>uh,contentInitial:()=>lh,disable:()=>hh,document:()=>ih,flow:()=>sh,flowInitial:()=>ah,insideSpan:()=>fh,string:()=>ch,text:()=>dh});const ih={42:xe,43:xe,45:xe,48:xe,49:xe,50:xe,51:xe,52:xe,53:xe,54:xe,55:xe,56:xe,57:xe,62:ba},lh={91:o1},ah={[-2]:Or,[-1]:Or,32:Or},sh={35:d1,42:Kn,45:[Mi,Kn],60:p1,61:Mi,95:Kn,96:Pi,126:Pi},ch={38:va,92:Ta},dh={[-5]:Lr,[-4]:Lr,[-3]:Lr,33:R1,38:va,42:uo,60:[Iu,v1],91:I1,92:[s1,Ta],93:qo,95:uo,96:Hu},fh={null:[uo,eh]},uh={null:[42,95]},hh={null:[]};function ph(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},o={},l=[],i=[],a=[],s={attempt:C(S),check:C(w),consume:F,enter:B,exit:R,interrupt:C(w,{interrupt:!0})},c={code:null,containerState:{},defineSkip:T,events:[],now:p,parser:e,previous:null,sliceSerialize:u,sliceStream:h,write:f},d=t.tokenize.call(c,s);return t.resolveAll&&l.push(t),c;function f(E){return i=Ae(i,E),b(),i[i.length-1]===null?(v(t,0),c.events=pr(l,c.events,c),c.events):[]}function u(E,N){return gh(h(E),N)}function h(E){return mh(i,E)}function p(){let{_bufferIndex:E,_index:N,line:I,column:j,offset:X}=r;return{_bufferIndex:E,_index:N,line:I,column:j,offset:X}}function T(E){o[E.line]=E.column,x()}function b(){let E;for(;r._index<i.length;){let N=i[r._index];if(typeof N=="string")for(E=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===E&&r._bufferIndex<N.length;)y(N.charCodeAt(r._bufferIndex));else y(N)}}function y(E){d=d(E)}function F(E){P(E)?(r.line++,r.column=1,r.offset+=E===-3?2:1,x()):E!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===i[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=E}function B(E,N){let I=N||{};return I.type=E,I.start=p(),c.events.push(["enter",I,c]),a.push(I),I}function R(E){let N=a.pop();return N.end=p(),c.events.push(["exit",N,c]),N}function S(E,N){v(E,N.from)}function w(E,N){N.restore()}function C(E,N){return I;function I(j,X,ee){let te,me,ke,m;return Array.isArray(j)?We(j):"tokenize"in j?We([j]):et(j);function et(fe){return Jt;function Jt(nt){let Dt=nt!==null&&fe[nt],At=nt!==null&&fe.null;return We([...Array.isArray(Dt)?Dt:Dt?[Dt]:[],...Array.isArray(At)?At:At?[At]:[]])(nt)}}function We(fe){return te=fe,me=0,fe.length===0?ee:g(fe[me])}function g(fe){return Jt;function Jt(nt){return m=L(),ke=fe,fe.partial||(c.currentConstruct=fe),fe.name&&c.parser.constructs.disable.null.includes(fe.name)?ft():fe.tokenize.call(N?Object.assign(Object.create(c),N):c,s,tt,ft)(nt)}}function tt(fe){return E(ke,m),X}function ft(fe){return m.restore(),++me<te.length?g(te[me]):ee}}}function v(E,N){E.resolveAll&&!l.includes(E)&&l.push(E),E.resolve&&De(c.events,N,c.events.length-N,E.resolve(c.events.slice(N),c)),E.resolveTo&&(c.events=E.resolveTo(c.events,c))}function L(){let E=p(),N=c.previous,I=c.currentConstruct,j=c.events.length,X=Array.from(a);return{from:j,restore:ee};function ee(){r=E,c.previous=N,c.currentConstruct=I,c.events.length=j,a=X,x()}}function x(){r.line in o&&r.column<2&&(r.column=o[r.line],r.offset+=o[r.line]-1)}}function mh(e,t){let n=t.start._index,r=t.start._bufferIndex,o=t.end._index,l=t.end._bufferIndex,i;if(n===o)i=[e[n].slice(r,l)];else{if(i=e.slice(n,o),r>-1){let a=i[0];typeof a=="string"?i[0]=a.slice(r):i.shift()}l>0&&i.push(e[o].slice(0,l))}return i}function gh(e,t){let n=-1,r=[],o;for(;++n<e.length;){let l=e[n],i;if(typeof l=="string")i=l;else switch(l){case-5:i="\r";break;case-4:i=`
`;break;case-3:i=`\r
`;break;case-2:i=t?" ":"	";break;case-1:if(!t&&o)continue;i=" ";break;default:i=String.fromCharCode(l)}o=l===-2,r.push(i)}return r.join("")}function yh(e){let t={constructs:xa([oh,...(e||{}).extensions||[]]),content:n(H1),defined:[],document:n(V1),flow:n(J1),lazy:{},string:n(th),text:n(nh)};return t;function n(r){return o;function o(l){return ph(t,r,l)}}}function xh(e){for(;!ka(e););return e}const qi=/[\0\t\n\r]/g;function bh(){let e=1,t="",n=!0,r;return o;function o(l,i,a){let s=[],c,d,f,u,h;for(l=t+(typeof l=="string"?l.toString():new TextDecoder(i||void 0).decode(l)),f=0,t="",n&&=(l.charCodeAt(0)===65279&&f++,void 0);f<l.length;){if(qi.lastIndex=f,c=qi.exec(l),u=c&&c.index!==void 0?c.index:l.length,h=l.charCodeAt(u),!c){t=l.slice(f);break}if(h===10&&f===u&&r)s.push(-3),r=void 0;else switch(r&&=(s.push(-5),void 0),f<u&&(s.push(l.slice(f,u)),e+=u-f),h){case 0:s.push(65533),e++;break;case 9:for(d=Math.ceil(e/4)*4,s.push(-2);e++<d;)s.push(-1);break;case 10:s.push(-4),e=1;break;default:r=!0,e=1}f=u+1}return a&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}function un(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Ki(e.position):"start"in e||"end"in e?Ki(e):"line"in e||"column"in e?ho(e):""}function ho(e){return Xi(e&&e.line)+":"+Xi(e&&e.column)}function Ki(e){return ho(e&&e.start)+"-"+ho(e&&e.end)}function Xi(e){return e&&typeof e=="number"?e:1}const Fa={}.hasOwnProperty;function Na(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),Th(n)(xh(yh(n).document().write(bh()(e,t,!0))))}function Th(e){let t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:l(si),autolinkProtocol:L,autolinkEmail:L,atxHeading:l(ii),blockQuote:l(At),characterEscape:L,characterReference:L,codeFenced:l(oi),codeFencedFenceInfo:i,codeFencedFenceMeta:i,codeIndented:l(oi,i),codeText:l(ec,i),codeTextData:L,data:L,codeFlowValue:L,definition:l(tc),definitionDestinationString:i,definitionLabelString:i,definitionTitleString:i,emphasis:l(nc),hardBreakEscape:l(li),hardBreakTrailing:l(li),htmlFlow:l(ai,i),htmlFlowData:L,htmlText:l(ai,i),htmlTextData:L,image:l(rc),label:i,link:l(si),listItem:l(oc),listItemValue:u,listOrdered:l(ci,f),listUnordered:l(ci),paragraph:l(ic),reference:g,referenceString:i,resourceDestinationString:i,resourceTitleString:i,setextHeading:l(ii),strong:l(lc),thematicBreak:l(sc)},exit:{atxHeading:s(),atxHeadingSequence:S,autolink:s(),autolinkEmail:Dt,autolinkProtocol:nt,blockQuote:s(),characterEscapeValue:x,characterReferenceMarkerHexadecimal:ft,characterReferenceMarkerNumeric:ft,characterReferenceValue:fe,characterReference:Jt,codeFenced:s(b),codeFencedFence:T,codeFencedFenceInfo:h,codeFencedFenceMeta:p,codeFlowValue:x,codeIndented:s(y),codeText:s(X),codeTextData:x,data:x,definition:s(),definitionDestinationString:R,definitionLabelString:F,definitionTitleString:B,emphasis:s(),hardBreakEscape:s(N),hardBreakTrailing:s(N),htmlFlow:s(I),htmlFlowData:x,htmlText:s(j),htmlTextData:x,image:s(te),label:ke,labelText:me,lineEnding:E,link:s(ee),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:tt,resourceDestinationString:m,resourceTitleString:et,resource:We,setextHeading:s(v),setextHeadingLineSequence:C,setextHeadingText:w,strong:s(),thematicBreak:s()}};Oa(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(k){let O={type:"root",children:[]},M={stack:[O],tokenStack:[],config:t,enter:a,exit:c,buffer:i,resume:d,data:n},J=[],_=-1;for(;++_<k.length;)(k[_][1].type==="listOrdered"||k[_][1].type==="listUnordered")&&(k[_][0]==="enter"?J.push(_):_=o(k,J.pop(),_));for(_=-1;++_<k.length;){let rt=t[k[_][0]];Fa.call(rt,k[_][1].type)&&rt[k[_][1].type].call(Object.assign({sliceSerialize:k[_][2].sliceSerialize},M),k[_][1])}if(M.tokenStack.length>0){let rt=M.tokenStack[M.tokenStack.length-1];(rt[1]||ji).call(M,void 0,rt[0])}for(O.position={start:it(k.length>0?k[0][1].start:{line:1,column:1,offset:0}),end:it(k.length>0?k[k.length-2][1].end:{line:1,column:1,offset:0})},_=-1;++_<t.transforms.length;)O=t.transforms[_](O)||O;return O}function o(k,O,M){let J=O-1,_=-1,rt=!1,Ft,Ze,_t,en;for(;++J<=M;){let we=k[J];switch(we[1].type){case"listUnordered":case"listOrdered":case"blockQuote":we[0]==="enter"?_++:_--,en=void 0;break;case"lineEndingBlank":we[0]==="enter"&&(Ft&&!en&&!_&&!_t&&(_t=J),en=void 0);break;case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:en=void 0}if(!_&&we[0]==="enter"&&we[1].type==="listItemPrefix"||_===-1&&we[0]==="exit"&&(we[1].type==="listUnordered"||we[1].type==="listOrdered")){if(Ft){let Nt=J;for(Ze=void 0;Nt--;){let Ue=k[Nt];if(Ue[1].type==="lineEnding"||Ue[1].type==="lineEndingBlank"){if(Ue[0]==="exit")continue;Ze&&(k[Ze][1].type="lineEndingBlank",rt=!0),Ue[1].type="lineEnding",Ze=Nt}else if(!(Ue[1].type==="linePrefix"||Ue[1].type==="blockQuotePrefix"||Ue[1].type==="blockQuotePrefixWhitespace"||Ue[1].type==="blockQuoteMarker"||Ue[1].type==="listItemIndent"))break}_t&&(!Ze||_t<Ze)&&(Ft._spread=!0),Ft.end=Object.assign({},Ze?k[Ze][1].start:we[1].end),k.splice(Ze||J,0,["exit",Ft,we[2]]),J++,M++}if(we[1].type==="listItemPrefix"){let Nt={type:"listItem",_spread:!1,start:Object.assign({},we[1].start),end:void 0};Ft=Nt,k.splice(J,0,["enter",Nt,we[2]]),J++,M++,_t=void 0,en=!0}}}return k[O][1]._spread=rt,M}function l(k,O){return M;function M(J){a.call(this,k(J),J),O&&O.call(this,J)}}function i(){this.stack.push({type:"fragment",children:[]})}function a(k,O,M){this.stack[this.stack.length-1].children.push(k),this.stack.push(k),this.tokenStack.push([O,M||void 0]),k.position={start:it(O.start),end:void 0}}function s(k){return O;function O(M){k&&k.call(this,M),c.call(this,M)}}function c(k,O){let M=this.stack.pop(),J=this.tokenStack.pop();if(J)J[0].type!==k.type&&(O?O.call(this,k,J[0]):(J[1]||ji).call(this,k,J[0]));else throw Error("Cannot close `"+k.type+"` ("+un({start:k.start,end:k.end})+"): it’s not open");M.position.end=it(k.end)}function d(){return hr(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=!0}function u(k){if(this.data.expectingFirstListItemValue){let O=this.stack[this.stack.length-2];O.start=Number.parseInt(this.sliceSerialize(k),10),this.data.expectingFirstListItemValue=void 0}}function h(){let k=this.resume(),O=this.stack[this.stack.length-1];O.lang=k}function p(){let k=this.resume(),O=this.stack[this.stack.length-1];O.meta=k}function T(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function b(){let k=this.resume(),O=this.stack[this.stack.length-1];O.value=k.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function y(){let k=this.resume(),O=this.stack[this.stack.length-1];O.value=k.replace(/(\r?\n|\r)$/g,"")}function F(k){let O=this.resume(),M=this.stack[this.stack.length-1];M.label=O,M.identifier=Pe(this.sliceSerialize(k)).toLowerCase()}function B(){let k=this.resume(),O=this.stack[this.stack.length-1];O.title=k}function R(){let k=this.resume(),O=this.stack[this.stack.length-1];O.url=k}function S(k){let O=this.stack[this.stack.length-1];O.depth||=this.sliceSerialize(k).length}function w(){this.data.setextHeadingSlurpLineEnding=!0}function C(k){let O=this.stack[this.stack.length-1];O.depth=this.sliceSerialize(k).codePointAt(0)===61?1:2}function v(){this.data.setextHeadingSlurpLineEnding=void 0}function L(k){let O=this.stack[this.stack.length-1].children,M=O[O.length-1];(!M||M.type!=="text")&&(M=ac(),M.position={start:it(k.start),end:void 0},O.push(M)),this.stack.push(M)}function x(k){let O=this.stack.pop();O.value+=this.sliceSerialize(k),O.position.end=it(k.end)}function E(k){let O=this.stack[this.stack.length-1];if(this.data.atHardBreak){let M=O.children[O.children.length-1];M.position.end=it(k.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(O.type)&&(L.call(this,k),x.call(this,k))}function N(){this.data.atHardBreak=!0}function I(){let k=this.resume(),O=this.stack[this.stack.length-1];O.value=k}function j(){let k=this.resume(),O=this.stack[this.stack.length-1];O.value=k}function X(){let k=this.resume(),O=this.stack[this.stack.length-1];O.value=k}function ee(){let k=this.stack[this.stack.length-1];if(this.data.inReference){let O=this.data.referenceType||"shortcut";k.type+="Reference",k.referenceType=O,delete k.url,delete k.title}else delete k.identifier,delete k.label;this.data.referenceType=void 0}function te(){let k=this.stack[this.stack.length-1];if(this.data.inReference){let O=this.data.referenceType||"shortcut";k.type+="Reference",k.referenceType=O,delete k.url,delete k.title}else delete k.identifier,delete k.label;this.data.referenceType=void 0}function me(k){let O=this.sliceSerialize(k),M=this.stack[this.stack.length-2];M.label=Fu(O),M.identifier=Pe(O).toLowerCase()}function ke(){let k=this.stack[this.stack.length-1],O=this.resume(),M=this.stack[this.stack.length-1];this.data.inReference=!0,M.type==="link"?M.children=k.children:M.alt=O}function m(){let k=this.resume(),O=this.stack[this.stack.length-1];O.url=k}function et(){let k=this.resume(),O=this.stack[this.stack.length-1];O.title=k}function We(){this.data.inReference=void 0}function g(){this.data.referenceType="collapsed"}function tt(k){let O=this.resume(),M=this.stack[this.stack.length-1];M.label=O,M.identifier=Pe(this.sliceSerialize(k)).toLowerCase(),this.data.referenceType="full"}function ft(k){this.data.characterReferenceType=k.type}function fe(k){let O=this.sliceSerialize(k),M=this.data.characterReferenceType,J;M?(J=ya(O,M==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):J=Go(O);let _=this.stack[this.stack.length-1];_.value+=J}function Jt(k){let O=this.stack.pop();O.position.end=it(k.end)}function nt(k){x.call(this,k);let O=this.stack[this.stack.length-1];O.url=this.sliceSerialize(k)}function Dt(k){x.call(this,k);let O=this.stack[this.stack.length-1];O.url="mailto:"+this.sliceSerialize(k)}function At(){return{type:"blockquote",children:[]}}function oi(){return{type:"code",lang:null,meta:null,value:""}}function ec(){return{type:"inlineCode",value:""}}function tc(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function nc(){return{type:"emphasis",children:[]}}function ii(){return{type:"heading",depth:0,children:[]}}function li(){return{type:"break"}}function ai(){return{type:"html",value:""}}function rc(){return{type:"image",title:null,url:"",alt:null}}function si(){return{type:"link",title:null,url:"",children:[]}}function ci(k){return{type:"list",ordered:k.type==="listOrdered",start:null,spread:k._spread,children:[]}}function oc(k){return{type:"listItem",spread:k._spread,checked:null,children:[]}}function ic(){return{type:"paragraph",children:[]}}function lc(){return{type:"strong",children:[]}}function ac(){return{type:"text",value:""}}function sc(){return{type:"thematicBreak"}}}function it(e){return{line:e.line,column:e.column,offset:e.offset}}function Oa(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?Oa(e,r):vh(e,r)}}function vh(e,t){let n;for(n in t)if(Fa.call(t,n))switch(n){case"canContainEols":{let r=t[n];r&&e[n].push(...r);break}case"transforms":{let r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{let r=t[n];r&&Object.assign(e[n],r);break}}}function ji(e,t){throw Error(e?"Cannot close `"+e.type+"` ("+un({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+un({start:t.start,end:t.end})+") is open":"Cannot close document, a token (`"+t.type+"`, "+un({start:t.start,end:t.end})+") is still open")}function kh(e){if(typeof e!="string")throw TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}const mr=(function(e){if(e==null)return Dh;if(typeof e=="function")return gr(e);if(typeof e=="object")return Array.isArray(e)?wh(e):Bh(e);if(typeof e=="string")return Eh(e);throw Error("Expected function, string, or object as test")});function wh(e){let t=[],n=-1;for(;++n<e.length;)t[n]=mr(e[n]);return gr(r);function r(...o){let l=-1;for(;++l<t.length;)if(t[l].apply(this,o))return!0;return!1}}function Bh(e){let t=e;return gr(n);function n(r){let o=r,l;for(l in e)if(o[l]!==t[l])return!1;return!0}}function Eh(e){return gr(t);function t(n){return n&&n.type===e}}function gr(e){return t;function t(n,r,o){return!!(Ah(n)&&e.call(this,n,typeof r=="number"?r:void 0,o||void 0))}}function Dh(){return!0}function Ah(e){return typeof e=="object"&&!!e&&"type"in e}const La=[],Fh=!1;function Ra(e,t,n,r){let o;typeof t=="function"&&typeof n!="function"?(r=n,n=t):o=t;let l=mr(o),i=r?-1:1;a(e,void 0,[])();function a(s,c,d){let f=s&&typeof s=="object"?s:{};if(typeof f.type=="string"){let h=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(u,"name",{value:"node ("+(s.type+(h?"<"+h+">":""))+")"})}return u;function u(){let h=La,p,T,b;if((!t||l(s,c,d[d.length-1]||void 0))&&(h=Nh(n(s,d)),h[0]===!1))return h;if("children"in s&&s.children){let y=s;if(y.children&&h[0]!=="skip")for(T=(r?y.children.length:-1)+i,b=d.concat(y);T>-1&&T<y.children.length;){let F=y.children[T];if(p=a(F,T,b)(),p[0]===!1)return p;T=typeof p[1]=="number"?p[1]:T+i}}return h}}}function Nh(e){return Array.isArray(e)?e:typeof e=="number"?[!0,e]:e==null?La:[e]}function Oh(e,t,n){let r=mr((n||{}).ignore||[]),o=Lh(t),l=-1;for(;++l<o.length;)Ra(e,"text",i);function i(s,c){let d=-1,f;for(;++d<c.length;){let u=c[d],h=f?f.children:void 0;if(r(u,h?h.indexOf(u):void 0,f))return;f=u}if(f)return a(s,c)}function a(s,c){let d=c[c.length-1],f=o[l][0],u=o[l][1],h=0,p=d.children.indexOf(s),T=!1,b=[];f.lastIndex=0;let y=f.exec(s.value);for(;y;){let F=y.index,B={index:y.index,input:y.input,stack:[...c,s]},R=u(...y,B);if(typeof R=="string"&&(R=R.length>0?{type:"text",value:R}:void 0),R===!1?f.lastIndex=F+1:(h!==F&&b.push({type:"text",value:s.value.slice(h,F)}),Array.isArray(R)?b.push(...R):R&&b.push(R),h=F+y[0].length,T=!0),!f.global)break;y=f.exec(s.value)}return T?(h<s.value.length&&b.push({type:"text",value:s.value.slice(h)}),d.children.splice(p,1,...b)):b=[s],p+b.length}}function Lh(e){let t=[];if(!Array.isArray(e))throw TypeError("Expected find and replace tuple or list of tuples");let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let o=n[r];t.push([Rh(o[0]),Ch(o[1])])}return t}function Rh(e){return typeof e=="string"?new RegExp(kh(e),"g"):e}function Ch(e){return typeof e=="function"?e:function(){return e}}function Ih(e){return e.length}function Sh(e,t){let n=t||{},r=(n.align||[]).concat(),o=n.stringLength||Ih,l=[],i=[],a=[],s=[],c=0,d=-1;for(;++d<e.length;){let T=[],b=[],y=-1;for(e[d].length>c&&(c=e[d].length);++y<e[d].length;){let F=Ph(e[d][y]);if(n.alignDelimiters!==!1){let B=o(F);b[y]=B,(s[y]===void 0||B>s[y])&&(s[y]=B)}T.push(F)}i[d]=T,a[d]=b}let f=-1;if(typeof r=="object"&&"length"in r)for(;++f<c;)l[f]=Wi(r[f]);else{let T=Wi(r);for(;++f<c;)l[f]=T}f=-1;let u=[],h=[];for(;++f<c;){let T=l[f],b="",y="";T===99?(b=":",y=":"):T===108?b=":":T===114&&(y=":");let F=n.alignDelimiters===!1?1:Math.max(1,s[f]-b.length-y.length),B=b+"-".repeat(F)+y;n.alignDelimiters!==!1&&(F=b.length+F+y.length,F>s[f]&&(s[f]=F),h[f]=F),u[f]=B}i.splice(1,0,u),a.splice(1,0,h),d=-1;let p=[];for(;++d<i.length;){let T=i[d],b=a[d];f=-1;let y=[];for(;++f<c;){let F=T[f]||"",B="",R="";if(n.alignDelimiters!==!1){let S=s[f]-(b[f]||0),w=l[f];w===114?B=" ".repeat(S):w===99?S%2?(B=" ".repeat(S/2+.5),R=" ".repeat(S/2-.5)):(B=" ".repeat(S/2),R=B):R=" ".repeat(S)}n.delimiterStart!==!1&&!f&&y.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&F==="")&&(n.delimiterStart!==!1||f)&&y.push(" "),n.alignDelimiters!==!1&&y.push(B),y.push(F),n.alignDelimiters!==!1&&y.push(R),n.padding!==!1&&y.push(" "),(n.delimiterEnd!==!1||f!==c-1)&&y.push("|")}p.push(n.delimiterEnd===!1?y.join("").replace(/ +$/,""):y.join(""))}return p.join(`
`)}function Ph(e){return e==null?"":String(e)}function Wi(e){let t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function zh(e,t){let n=String(e),r=n.indexOf(t),o=r,l=0,i=0;if(typeof t!="string")throw TypeError("Expected substring");for(;r!==-1;)r===o?++l>i&&(i=l):l=1,o=r+t.length,r=n.indexOf(t,o);return i}const Rr="phrasing",Cr=["autolink","link","image","label"];function Mh(){return{transforms:[Zh],enter:{literalAutolink:qh,literalAutolinkEmail:Ir,literalAutolinkHttp:Ir,literalAutolinkWww:Ir},exit:{literalAutolink:Wh,literalAutolinkEmail:jh,literalAutolinkHttp:Kh,literalAutolinkWww:Xh}}}function Gh(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Rr,notInConstruct:Cr},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Rr,notInConstruct:Cr},{character:":",before:"[ps]",after:"\\/",inConstruct:Rr,notInConstruct:Cr}]}}function qh(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Ir(e){this.config.enter.autolinkProtocol.call(this,e)}function Kh(e){this.config.exit.autolinkProtocol.call(this,e)}function Xh(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function jh(e){this.config.exit.autolinkEmail.call(this,e)}function Wh(e){this.exit(e)}function Zh(e){Oh(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Uh],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),Hh]],{ignore:["link","linkReference"]})}function Uh(e,t,n,r,o){let l="";if(!Ca(o)||(/^w/i.test(t)&&(n=t+n,t="",l="http://"),!$h(n)))return!1;let i=Vh(n+r);if(!i[0])return!1;let a={type:"link",title:null,url:l+t+i[0],children:[{type:"text",value:t+i[0]}]};return i[1]?[a,{type:"text",value:i[1]}]:a}function Hh(e,t,n,r){return!Ca(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function $h(e){let t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Vh(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")"),o=er(e,"("),l=er(e,")");for(;r!==-1&&o>l;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),l++;return[e,n]}function Ca(e,t){let n=e.input.charCodeAt(e.index-1);return(e.index===0||kt(n)||ur(n))&&(!t||n!==47)}Ia.peek=op;function Qh(){this.buffer()}function Yh(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function Jh(){this.buffer()}function _h(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function ep(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Pe(this.sliceSerialize(e)).toLowerCase(),n.label=t}function tp(e){this.exit(e)}function np(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Pe(this.sliceSerialize(e)).toLowerCase(),n.label=t}function rp(e){this.exit(e)}function op(){return"["}function Ia(e,t,n,r){let o=n.createTracker(r),l=o.move("[^"),i=n.enter("footnoteReference"),a=n.enter("reference");return l+=o.move(n.safe(n.associationId(e),{after:"]",before:l})),a(),i(),l+=o.move("]"),l}function ip(){return{enter:{gfmFootnoteCallString:Qh,gfmFootnoteCall:Yh,gfmFootnoteDefinitionLabelString:Jh,gfmFootnoteDefinition:_h},exit:{gfmFootnoteCallString:ep,gfmFootnoteCall:tp,gfmFootnoteDefinitionLabelString:np,gfmFootnoteDefinition:rp}}}function lp(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:Ia},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,o,l,i){let a=l.createTracker(i),s=a.move("[^"),c=l.enter("footnoteDefinition"),d=l.enter("label");return s+=a.move(l.safe(l.associationId(r),{before:s,after:"]"})),d(),s+=a.move("]:"),r.children&&r.children.length>0&&(a.shift(4),s+=a.move((t?`
`:" ")+l.indentLines(l.containerFlow(r,a.current()),t?Sa:ap))),c(),s}}function ap(e,t,n){return t===0?e:Sa(e,t,n)}function Sa(e,t,n){return(n?"":"    ")+e}const sp=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Pa.peek=hp;function cp(){return{canContainEols:["delete"],enter:{strikethrough:fp},exit:{strikethrough:up}}}function dp(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:sp}],handlers:{delete:Pa}}}function fp(e){this.enter({type:"delete",children:[]},e)}function up(e){this.exit(e)}function Pa(e,t,n,r){let o=n.createTracker(r),l=n.enter("strikethrough"),i=o.move("~~");return i+=n.containerPhrasing(e,{...o.current(),before:i,after:"~"}),i+=o.move("~~"),l(),i}function hp(){return"~"}function pp(e,t,n,r){let o=n.enter("blockquote"),l=n.createTracker(r);l.move("> "),l.shift(2);let i=n.indentLines(n.containerFlow(e,l.current()),mp);return o(),i}function mp(e,t,n){return">"+(n?"":" ")+e}function gp(e,t){return Zi(e,t.inConstruct,!0)&&!Zi(e,t.notInConstruct,!1)}function Zi(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function Ui(e,t,n,r){let o=-1;for(;++o<n.unsafe.length;)if(n.unsafe[o].character===`
`&&gp(n.stack,n.unsafe[o]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function yp(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function xp(e){let t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function bp(e,t,n,r){let o=xp(n),l=e.value||"",i=o==="`"?"GraveAccent":"Tilde";if(yp(e,n)){let f=n.enter("codeIndented"),u=n.indentLines(l,Tp);return f(),u}let a=n.createTracker(r),s=o.repeat(Math.max(zh(l,o)+1,3)),c=n.enter("codeFenced"),d=a.move(s);if(e.lang){let f=n.enter(`codeFencedLang${i}`);d+=a.move(n.safe(e.lang,{before:d,after:" ",encode:["`"],...a.current()})),f()}if(e.lang&&e.meta){let f=n.enter(`codeFencedMeta${i}`);d+=a.move(" "),d+=a.move(n.safe(e.meta,{before:d,after:`
`,encode:["`"],...a.current()})),f()}return d+=a.move(`
`),l&&(d+=a.move(l+`
`)),d+=a.move(s),c(),d}function Tp(e,t,n){return(n?"":"    ")+e}function Ko(e){let t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function vp(e,t,n,r){let o=Ko(n),l=o==='"'?"Quote":"Apostrophe",i=n.enter("definition"),a=n.enter("label"),s=n.createTracker(r),c=s.move("[");return c+=s.move(n.safe(n.associationId(e),{before:c,after:"]",...s.current()})),c+=s.move("]: "),a(),!e.url||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),c+=s.move("<"),c+=s.move(n.safe(e.url,{before:c,after:">",...s.current()})),c+=s.move(">")):(a=n.enter("destinationRaw"),c+=s.move(n.safe(e.url,{before:c,after:e.title?" ":`
`,...s.current()}))),a(),e.title&&(a=n.enter(`title${l}`),c+=s.move(" "+o),c+=s.move(n.safe(e.title,{before:c,after:o,...s.current()})),c+=s.move(o),a()),i(),c}function kp(e){let t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function gn(e){return"&#x"+e.toString(16).toUpperCase()+";"}function nr(e,t,n){let r=Kt(e),o=Kt(t);return r===void 0?o===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:o===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?o===void 0?{inside:!1,outside:!1}:o===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:o===void 0?{inside:!1,outside:!1}:o===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}za.peek=wp;function za(e,t,n,r){let o=kp(n),l=n.enter("emphasis"),i=n.createTracker(r),a=i.move(o),s=i.move(n.containerPhrasing(e,{after:o,before:a,...i.current()})),c=s.charCodeAt(0),d=nr(r.before.charCodeAt(r.before.length-1),c,o);d.inside&&(s=gn(c)+s.slice(1));let f=s.charCodeAt(s.length-1),u=nr(r.after.charCodeAt(0),f,o);u.inside&&(s=s.slice(0,-1)+gn(f));let h=i.move(o);return l(),n.attentionEncodeSurroundingInfo={after:u.outside,before:d.outside},a+s+h}function wp(e,t,n){return n.options.emphasis||"*"}function Xo(e,t,n,r){let o,l,i;typeof t=="function"&&typeof n!="function"?(l=void 0,i=t,o=n):(l=t,i=n,o=r),Ra(e,l,a,o);function a(s,c){let d=c[c.length-1],f=d?d.children.indexOf(s):void 0;return i(s,f,d)}}function Bp(e,t){let n=!1;return Xo(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,Fh}),!!((!e.depth||e.depth<3)&&hr(e)&&(t.options.setext||n))}function Ep(e,t,n,r){let o=Math.max(Math.min(6,e.depth||1),1),l=n.createTracker(r);if(Bp(e,n)){let d=n.enter("headingSetext"),f=n.enter("phrasing"),u=n.containerPhrasing(e,{...l.current(),before:`
`,after:`
`});return f(),d(),u+`
`+(o===1?"=":"-").repeat(u.length-(Math.max(u.lastIndexOf("\r"),u.lastIndexOf(`
`))+1))}let i="#".repeat(o),a=n.enter("headingAtx"),s=n.enter("phrasing");l.move(i+" ");let c=n.containerPhrasing(e,{before:"# ",after:`
`,...l.current()});return/^[\t ]/.test(c)&&(c=gn(c.charCodeAt(0))+c.slice(1)),c=c?i+" "+c:i,n.options.closeAtx&&(c+=" "+i),s(),a(),c}Ma.peek=Dp;function Ma(e){return e.value||""}function Dp(){return"<"}Ga.peek=Ap;function Ga(e,t,n,r){let o=Ko(n),l=o==='"'?"Quote":"Apostrophe",i=n.enter("image"),a=n.enter("label"),s=n.createTracker(r),c=s.move("![");return c+=s.move(n.safe(e.alt,{before:c,after:"]",...s.current()})),c+=s.move("]("),a(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),c+=s.move("<"),c+=s.move(n.safe(e.url,{before:c,after:">",...s.current()})),c+=s.move(">")):(a=n.enter("destinationRaw"),c+=s.move(n.safe(e.url,{before:c,after:e.title?" ":")",...s.current()}))),a(),e.title&&(a=n.enter(`title${l}`),c+=s.move(" "+o),c+=s.move(n.safe(e.title,{before:c,after:o,...s.current()})),c+=s.move(o),a()),c+=s.move(")"),i(),c}function Ap(){return"!"}qa.peek=Fp;function qa(e,t,n,r){let o=e.referenceType,l=n.enter("imageReference"),i=n.enter("label"),a=n.createTracker(r),s=a.move("!["),c=n.safe(e.alt,{before:s,after:"]",...a.current()});s+=a.move(c+"]["),i();let d=n.stack;n.stack=[],i=n.enter("reference");let f=n.safe(n.associationId(e),{before:s,after:"]",...a.current()});return i(),n.stack=d,l(),o==="full"||!c||c!==f?s+=a.move(f+"]"):o==="shortcut"?s=s.slice(0,-1):s+=a.move("]"),s}function Fp(){return"!"}Ka.peek=Np;function Ka(e,t,n){let r=e.value||"",o="`",l=-1;for(;RegExp("(^|[^`])"+o+"([^`]|$)").test(r);)o+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++l<n.unsafe.length;){let i=n.unsafe[l],a=n.compilePattern(i),s;if(i.atBreak)for(;s=a.exec(r);){let c=s.index;r.charCodeAt(c)===10&&r.charCodeAt(c-1)===13&&c--,r=r.slice(0,c)+" "+r.slice(s.index+1)}}return o+r+o}function Np(){return"`"}function Xa(e,t){let n=hr(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}ja.peek=Op;function ja(e,t,n,r){let o=Ko(n),l=o==='"'?"Quote":"Apostrophe",i=n.createTracker(r),a,s;if(Xa(e,n)){let d=n.stack;n.stack=[],a=n.enter("autolink");let f=i.move("<");return f+=i.move(n.containerPhrasing(e,{before:f,after:">",...i.current()})),f+=i.move(">"),a(),n.stack=d,f}a=n.enter("link"),s=n.enter("label");let c=i.move("[");return c+=i.move(n.containerPhrasing(e,{before:c,after:"](",...i.current()})),c+=i.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),c+=i.move("<"),c+=i.move(n.safe(e.url,{before:c,after:">",...i.current()})),c+=i.move(">")):(s=n.enter("destinationRaw"),c+=i.move(n.safe(e.url,{before:c,after:e.title?" ":")",...i.current()}))),s(),e.title&&(s=n.enter(`title${l}`),c+=i.move(" "+o),c+=i.move(n.safe(e.title,{before:c,after:o,...i.current()})),c+=i.move(o),s()),c+=i.move(")"),a(),c}function Op(e,t,n){return Xa(e,n)?"<":"["}Wa.peek=Lp;function Wa(e,t,n,r){let o=e.referenceType,l=n.enter("linkReference"),i=n.enter("label"),a=n.createTracker(r),s=a.move("["),c=n.containerPhrasing(e,{before:s,after:"]",...a.current()});s+=a.move(c+"]["),i();let d=n.stack;n.stack=[],i=n.enter("reference");let f=n.safe(n.associationId(e),{before:s,after:"]",...a.current()});return i(),n.stack=d,l(),o==="full"||!c||c!==f?s+=a.move(f+"]"):o==="shortcut"?s=s.slice(0,-1):s+=a.move("]"),s}function Lp(){return"["}function jo(e){let t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function Rp(e){let t=jo(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function Cp(e){let t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function Za(e){let t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function Ip(e,t,n,r){let o=n.enter("list"),l=n.bulletCurrent,i=e.ordered?Cp(n):jo(n),a=e.ordered?i==="."?")":".":Rp(n),s=t&&n.bulletLastUsed?i===n.bulletLastUsed:!1;if(!e.ordered){let d=e.children?e.children[0]:void 0;if((i==="*"||i==="-")&&d&&(!d.children||!d.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(s=!0),Za(n)===i&&d){let f=-1;for(;++f<e.children.length;){let u=e.children[f];if(u&&u.type==="listItem"&&u.children&&u.children[0]&&u.children[0].type==="thematicBreak"){s=!0;break}}}}s&&(i=a),n.bulletCurrent=i;let c=n.containerFlow(e,r);return n.bulletLastUsed=i,n.bulletCurrent=l,o(),c}function Sp(e){let t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function Pp(e,t,n,r){let o=Sp(n),l=n.bulletCurrent||jo(n);t&&t.type==="list"&&t.ordered&&(l=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+l);let i=l.length+1;(o==="tab"||o==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(i=Math.ceil(i/4)*4);let a=n.createTracker(r);a.move(l+" ".repeat(i-l.length)),a.shift(i);let s=n.enter("listItem"),c=n.indentLines(n.containerFlow(e,a.current()),d);return s(),c;function d(f,u,h){return u?(h?"":" ".repeat(i))+f:(h?l:l+" ".repeat(i-l.length))+f}}function zp(e,t,n,r){let o=n.enter("paragraph"),l=n.enter("phrasing"),i=n.containerPhrasing(e,r);return l(),o(),i}const Mp=mr(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function Gp(e,t,n,r){return(e.children.some(function(o){return Mp(o)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function qp(e){let t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Ua.peek=Kp;function Ua(e,t,n,r){let o=qp(n),l=n.enter("strong"),i=n.createTracker(r),a=i.move(o+o),s=i.move(n.containerPhrasing(e,{after:o,before:a,...i.current()})),c=s.charCodeAt(0),d=nr(r.before.charCodeAt(r.before.length-1),c,o);d.inside&&(s=gn(c)+s.slice(1));let f=s.charCodeAt(s.length-1),u=nr(r.after.charCodeAt(0),f,o);u.inside&&(s=s.slice(0,-1)+gn(f));let h=i.move(o+o);return l(),n.attentionEncodeSurroundingInfo={after:u.outside,before:d.outside},a+s+h}function Kp(e,t,n){return n.options.strong||"*"}function Xp(e,t,n,r){return n.safe(e.value,r)}function jp(e){let t=e.options.ruleRepetition||3;if(t<3)throw Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function Wp(e,t,n){let r=(Za(n)+(n.options.ruleSpaces?" ":"")).repeat(jp(n));return n.options.ruleSpaces?r.slice(0,-1):r}const Ha={blockquote:pp,break:Ui,code:bp,definition:vp,emphasis:za,hardBreak:Ui,heading:Ep,html:Ma,image:Ga,imageReference:qa,inlineCode:Ka,link:ja,linkReference:Wa,list:Ip,listItem:Pp,paragraph:zp,root:Gp,strong:Ua,text:Xp,thematicBreak:Wp};function Zp(){return{enter:{table:Up,tableData:Hi,tableHeader:Hi,tableRow:$p},exit:{codeText:Vp,table:Hp,tableData:Sr,tableHeader:Sr,tableRow:Sr}}}function Up(e){let t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function Hp(e){this.exit(e),this.data.inTable=void 0}function $p(e){this.enter({type:"tableRow",children:[]},e)}function Sr(e){this.exit(e)}function Hi(e){this.enter({type:"tableCell",children:[]},e)}function Vp(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,Qp));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function Qp(e,t){return t==="|"?t:e}function Yp(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,o=t.stringLength,l=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:u,table:i,tableCell:s,tableRow:a}};function i(h,p,T,b){return c(d(h,T,b),h.align)}function a(h,p,T,b){let y=c([f(h,T,b)]);return y.slice(0,y.indexOf(`
`))}function s(h,p,T,b){let y=T.enter("tableCell"),F=T.enter("phrasing"),B=T.containerPhrasing(h,{...b,before:l,after:l});return F(),y(),B}function c(h,p){return Sh(h,{align:p,alignDelimiters:r,padding:n,stringLength:o})}function d(h,p,T){let b=h.children,y=-1,F=[],B=p.enter("table");for(;++y<b.length;)F[y]=f(b[y],p,T);return B(),F}function f(h,p,T){let b=h.children,y=-1,F=[],B=p.enter("tableRow");for(;++y<b.length;)F[y]=s(b[y],h,p,T);return B(),F}function u(h,p,T){let b=Ha.inlineCode(h,p,T);return T.stack.includes("tableCell")&&(b=b.replace(/\|/g,"\\$&")),b}}function Jp(){return{exit:{taskListCheckValueChecked:$i,taskListCheckValueUnchecked:$i,paragraph:em}}}function _p(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:tm}}}function $i(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function em(e){let t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){let n=this.stack[this.stack.length-1];n.type;let r=n.children[0];if(r&&r.type==="text"){let o=t.children,l=-1,i;for(;++l<o.length;){let a=o[l];if(a.type==="paragraph"){i=a;break}}i===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function tm(e,t,n,r){let o=e.children[0],l=typeof e.checked=="boolean"&&o&&o.type==="paragraph",i="["+(e.checked?"x":" ")+"] ",a=n.createTracker(r);l&&a.move(i);let s=Ha.listItem(e,t,n,{...r,...a.current()});return l&&(s=s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,c)),s;function c(d){return d+i}}function nm(){return[Mh(),ip(),cp(),Zp(),Jp()]}function rm(e){return{extensions:[Gh(),lp(e),dp(),Yp(e),_p()]}}const om={tokenize:dm,partial:!0},$a={tokenize:fm,partial:!0},Va={tokenize:um,partial:!0},Qa={tokenize:hm,partial:!0},im={tokenize:pm,partial:!0},Vi={name:"wwwAutolink",tokenize:sm,previous:Ya},Qi={name:"protocolAutolink",tokenize:cm,previous:Ja},$e={name:"emailAutolink",tokenize:am,previous:_a},Ge={};function lm(){return{text:Ge}}let pt=48;for(;pt<123;)Ge[pt]=$e,pt++,pt===58?pt=65:pt===91&&(pt=97);Ge[43]=$e,Ge[45]=$e,Ge[46]=$e,Ge[95]=$e,Ge[72]=[$e,Qi],Ge[104]=[$e,Qi],Ge[87]=[$e,Vi],Ge[119]=[$e,Vi];function am(e,t,n){let r=this,o,l;return i;function i(f){return!po(f)||!_a.call(r,r.previous)||Wo(r.events)?n(f):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),a(f))}function a(f){return po(f)?(e.consume(f),a):f===64?(e.consume(f),s):n(f)}function s(f){return f===46?e.check(im,d,c)(f):f===45||f===95||he(f)?(l=!0,e.consume(f),s):d(f)}function c(f){return e.consume(f),o=!0,s}function d(f){return l&&o&&ye(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(f)):n(f)}}function sm(e,t,n){let r=this;return o;function o(i){return i!==87&&i!==119||!Ya.call(r,r.previous)||Wo(r.events)?n(i):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(om,e.attempt($a,e.attempt(Va,l),n),n)(i))}function l(i){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(i)}}function cm(e,t,n){let r=this,o="",l=!1;return i;function i(f){return(f===72||f===104)&&Ja.call(r,r.previous)&&!Wo(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),o+=String.fromCodePoint(f),e.consume(f),a):n(f)}function a(f){if(ye(f)&&o.length<5)return o+=String.fromCodePoint(f),e.consume(f),a;if(f===58){let u=o.toLowerCase();if(u==="http"||u==="https")return e.consume(f),s}return n(f)}function s(f){return f===47?(e.consume(f),l?c:(l=!0,s)):n(f)}function c(f){return f===null||tr(f)||Q(f)||kt(f)||ur(f)?n(f):e.attempt($a,e.attempt(Va,d),n)(f)}function d(f){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(f)}}function dm(e,t,n){let r=0;return o;function o(i){return(i===87||i===119)&&r<3?(r++,e.consume(i),o):i===46&&r===3?(e.consume(i),l):n(i)}function l(i){return i===null?n(i):t(i)}}function fm(e,t,n){let r,o,l;return i;function i(c){return c===46||c===95?e.check(Qa,s,a)(c):c===null||Q(c)||kt(c)||c!==45&&ur(c)?s(c):(l=!0,e.consume(c),i)}function a(c){return c===95?r=!0:(o=r,r=void 0),e.consume(c),i}function s(c){return o||r||!l?n(c):t(c)}}function um(e,t){let n=0,r=0;return o;function o(i){return i===40?(n++,e.consume(i),o):i===41&&r<n?l(i):i===33||i===34||i===38||i===39||i===41||i===42||i===44||i===46||i===58||i===59||i===60||i===63||i===93||i===95||i===126?e.check(Qa,t,l)(i):i===null||Q(i)||kt(i)?t(i):(e.consume(i),o)}function l(i){return i===41&&r++,e.consume(i),o}}function hm(e,t,n){return r;function r(a){return a===33||a===34||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===63||a===95||a===126?(e.consume(a),r):a===38?(e.consume(a),l):a===93?(e.consume(a),o):a===60||a===null||Q(a)||kt(a)?t(a):n(a)}function o(a){return a===null||a===40||a===91||Q(a)||kt(a)?t(a):r(a)}function l(a){return ye(a)?i(a):n(a)}function i(a){return a===59?(e.consume(a),r):ye(a)?(e.consume(a),i):n(a)}}function pm(e,t,n){return r;function r(l){return e.consume(l),o}function o(l){return he(l)?n(l):t(l)}}function Ya(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||Q(e)}function Ja(e){return!ye(e)}function _a(e){return!(e===47||po(e))}function po(e){return e===43||e===45||e===46||e===95||he(e)}function Wo(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const mm={tokenize:wm,partial:!0};function gm(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:Tm,continuation:{tokenize:vm},exit:km}},text:{91:{name:"gfmFootnoteCall",tokenize:bm},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:ym,resolveTo:xm}}}}function ym(e,t,n){let r=this,o=r.events.length,l=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),i;for(;o--;){let s=r.events[o][1];if(s.type==="labelImage"){i=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return a;function a(s){if(!i||!i._balanced)return n(s);let c=Pe(r.sliceSerialize({start:i.end,end:r.now()}));return c.codePointAt(0)!==94||!l.includes(c.slice(1))?n(s):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),t(s))}}function xm(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";let r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},o={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};o.end.column++,o.end.offset++,o.end._bufferIndex++;let l={type:"gfmFootnoteCallString",start:Object.assign({},o.end),end:Object.assign({},e[e.length-1][1].start)},i={type:"chunkString",contentType:"string",start:Object.assign({},l.start),end:Object.assign({},l.end)},a=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",o,t],["exit",o,t],["enter",l,t],["enter",i,t],["exit",i,t],["exit",l,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...a),e}function bm(e,t,n){let r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),l=0,i;return a;function a(f){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),s}function s(f){return f===94?(e.enter("gfmFootnoteCallMarker"),e.consume(f),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",c):n(f)}function c(f){if(l>999||f===93&&!i||f===null||f===91||Q(f))return n(f);if(f===93){e.exit("chunkString");let u=e.exit("gfmFootnoteCallString");return o.includes(Pe(r.sliceSerialize(u)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(f)}return Q(f)||(i=!0),l++,e.consume(f),f===92?d:c}function d(f){return f===91||f===92||f===93?(e.consume(f),l++,c):c(f)}}function Tm(e,t,n){let r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),l,i=0,a;return s;function s(p){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(p),e.exit("gfmFootnoteDefinitionLabelMarker"),c}function c(p){return p===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(p),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",d):n(p)}function d(p){if(i>999||p===93&&!a||p===null||p===91||Q(p))return n(p);if(p===93){e.exit("chunkString");let T=e.exit("gfmFootnoteDefinitionLabelString");return l=Pe(r.sliceSerialize(T)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(p),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),u}return Q(p)||(a=!0),i++,e.consume(p),p===92?f:d}function f(p){return p===91||p===92||p===93?(e.consume(p),i++,d):d(p)}function u(p){return p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),o.includes(l)||o.push(l),H(e,h,"gfmFootnoteDefinitionWhitespace")):n(p)}function h(p){return t(p)}}function vm(e,t,n){return e.check(En,t,e.attempt(mm,t,n))}function km(e){e.exit("gfmFootnoteDefinition")}function wm(e,t,n){let r=this;return H(e,o,"gfmFootnoteDefinitionIndent",5);function o(l){let i=r.events[r.events.length-1];return i&&i[1].type==="gfmFootnoteDefinitionIndent"&&i[2].sliceSerialize(i[1],!0).length===4?t(l):n(l)}}function Bm(e){let t=(e||{}).singleTilde,n={name:"strikethrough",tokenize:o,resolveAll:r};return t??=!0,{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}};function r(l,i){let a=-1;for(;++a<l.length;)if(l[a][0]==="enter"&&l[a][1].type==="strikethroughSequenceTemporary"&&l[a][1]._close){let s=a;for(;s--;)if(l[s][0]==="exit"&&l[s][1].type==="strikethroughSequenceTemporary"&&l[s][1]._open&&l[a][1].end.offset-l[a][1].start.offset===l[s][1].end.offset-l[s][1].start.offset){l[a][1].type="strikethroughSequence",l[s][1].type="strikethroughSequence";let c={type:"strikethrough",start:Object.assign({},l[s][1].start),end:Object.assign({},l[a][1].end)},d={type:"strikethroughText",start:Object.assign({},l[s][1].end),end:Object.assign({},l[a][1].start)},f=[["enter",c,i],["enter",l[s][1],i],["exit",l[s][1],i],["enter",d,i]],u=i.parser.constructs.insideSpan.null;u&&De(f,f.length,0,pr(u,l.slice(s+1,a),i)),De(f,f.length,0,[["exit",d,i],["enter",l[a][1],i],["exit",l[a][1],i],["exit",c,i]]),De(l,s-1,a-s+3,f),a=s+f.length-2;break}}for(a=-1;++a<l.length;)l[a][1].type==="strikethroughSequenceTemporary"&&(l[a][1].type="data");return l}function o(l,i,a){let s=this.previous,c=this.events,d=0;return f;function f(h){return s===126&&c[c.length-1][1].type!=="characterEscape"?a(h):(l.enter("strikethroughSequenceTemporary"),u(h))}function u(h){let p=Kt(s);if(h===126)return d>1?a(h):(l.consume(h),d++,u);if(d<2&&!t)return a(h);let T=l.exit("strikethroughSequenceTemporary"),b=Kt(h);return T._open=!b||b===2&&!!p,T._close=!p||p===2&&!!b,i(h)}}}var Em=class{constructor(){this.map=[]}add(t,n,r){Dm(this,t,n,r)}consume(t){if(this.map.sort(function(l,i){return l[0]-i[0]}),this.map.length===0)return;let n=this.map.length,r=[];for(;n>0;)--n,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let o=r.pop();for(;o;){for(let l of o)t.push(l);o=r.pop()}this.map.length=0}};function Dm(e,t,n,r){let o=0;if(!(n===0&&r.length===0)){for(;o<e.map.length;){if(e.map[o][0]===t){e.map[o][1]+=n,e.map[o][2].push(...r);return}o+=1}e.map.push([t,n,r])}}function Am(e,t){let n=!1,r=[];for(;t<e.length;){let o=e[t];if(n){if(o[0]==="enter")o[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(o[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){let l=r.length-1;r[l]=r[l]==="left"?"center":"right"}}else if(o[1].type==="tableDelimiterRow")break}else o[0]==="enter"&&o[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function Fm(){return{flow:{null:{name:"table",tokenize:Nm,resolveAll:Om}}}}function Nm(e,t,n){let r=this,o=0,l=0,i;return a;function a(x){let E=r.events.length-1;for(;E>-1;){let j=r.events[E][1].type;if(j==="lineEnding"||j==="linePrefix")E--;else break}let N=E>-1?r.events[E][1].type:null,I=N==="tableHead"||N==="tableRow"?w:s;return I===w&&r.parser.lazy[r.now().line]?n(x):I(x)}function s(x){return e.enter("tableHead"),e.enter("tableRow"),c(x)}function c(x){return x===124||(i=!0,l+=1),d(x)}function d(x){return x===null?n(x):P(x)?l>1?(l=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),h):n(x):Z(x)?H(e,d,"whitespace")(x):(l+=1,i&&(i=!1,o+=1),x===124?(e.enter("tableCellDivider"),e.consume(x),e.exit("tableCellDivider"),i=!0,d):(e.enter("data"),f(x)))}function f(x){return x===null||x===124||Q(x)?(e.exit("data"),d(x)):(e.consume(x),x===92?u:f)}function u(x){return x===92||x===124?(e.consume(x),f):f(x)}function h(x){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(x):(e.enter("tableDelimiterRow"),i=!1,Z(x)?H(e,p,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(x):p(x))}function p(x){return x===45||x===58?b(x):x===124?(i=!0,e.enter("tableCellDivider"),e.consume(x),e.exit("tableCellDivider"),T):S(x)}function T(x){return Z(x)?H(e,b,"whitespace")(x):b(x)}function b(x){return x===58?(l+=1,i=!0,e.enter("tableDelimiterMarker"),e.consume(x),e.exit("tableDelimiterMarker"),y):x===45?(l+=1,y(x)):x===null||P(x)?R(x):S(x)}function y(x){return x===45?(e.enter("tableDelimiterFiller"),F(x)):S(x)}function F(x){return x===45?(e.consume(x),F):x===58?(i=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(x),e.exit("tableDelimiterMarker"),B):(e.exit("tableDelimiterFiller"),B(x))}function B(x){return Z(x)?H(e,R,"whitespace")(x):R(x)}function R(x){return x===124?p(x):x===null||P(x)?!i||o!==l?S(x):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(x)):S(x)}function S(x){return n(x)}function w(x){return e.enter("tableRow"),C(x)}function C(x){return x===124?(e.enter("tableCellDivider"),e.consume(x),e.exit("tableCellDivider"),C):x===null||P(x)?(e.exit("tableRow"),t(x)):Z(x)?H(e,C,"whitespace")(x):(e.enter("data"),v(x))}function v(x){return x===null||x===124||Q(x)?(e.exit("data"),C(x)):(e.consume(x),x===92?L:v)}function L(x){return x===92||x===124?(e.consume(x),v):v(x)}}function Om(e,t){let n=-1,r=!0,o=0,l=[0,0,0,0],i=[0,0,0,0],a=!1,s=0,c,d,f,u=new Em;for(;++n<e.length;){let h=e[n],p=h[1];h[0]==="enter"?p.type==="tableHead"?(a=!1,s!==0&&(Yi(u,t,s,c,d),d=void 0,s=0),c={type:"table",start:Object.assign({},p.start),end:Object.assign({},p.end)},u.add(n,0,[["enter",c,t]])):p.type==="tableRow"||p.type==="tableDelimiterRow"?(r=!0,f=void 0,l=[0,0,0,0],i=[0,n+1,0,0],a&&(a=!1,d={type:"tableBody",start:Object.assign({},p.start),end:Object.assign({},p.end)},u.add(n,0,[["enter",d,t]])),o=p.type==="tableDelimiterRow"?2:d?3:1):o&&(p.type==="data"||p.type==="tableDelimiterMarker"||p.type==="tableDelimiterFiller")?(r=!1,i[2]===0&&(l[1]!==0&&(i[0]=i[1],f=Rn(u,t,l,o,void 0,f),l=[0,0,0,0]),i[2]=n)):p.type==="tableCellDivider"&&(r?r=!1:(l[1]!==0&&(i[0]=i[1],f=Rn(u,t,l,o,void 0,f)),l=i,i=[l[1],n,0,0])):p.type==="tableHead"?(a=!0,s=n):p.type==="tableRow"||p.type==="tableDelimiterRow"?(s=n,l[1]===0?i[1]!==0&&(f=Rn(u,t,i,o,n,f)):(i[0]=i[1],f=Rn(u,t,l,o,n,f)),o=0):o&&(p.type==="data"||p.type==="tableDelimiterMarker"||p.type==="tableDelimiterFiller")&&(i[3]=n)}for(s!==0&&Yi(u,t,s,c,d),u.consume(t.events),n=-1;++n<t.events.length;){let h=t.events[n];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=Am(t.events,n))}return e}function Rn(e,t,n,r,o,l){let i=r===1?"tableHeader":r===2?"tableDelimiter":"tableData";n[0]!==0&&(l.end=Object.assign({},Ct(t.events,n[0])),e.add(n[0],0,[["exit",l,t]]));let a=Ct(t.events,n[1]);if(l={type:i,start:Object.assign({},a),end:Object.assign({},a)},e.add(n[1],0,[["enter",l,t]]),n[2]!==0){let s=Ct(t.events,n[2]),c=Ct(t.events,n[3]),d={type:"tableContent",start:Object.assign({},s),end:Object.assign({},c)};if(e.add(n[2],0,[["enter",d,t]]),r!==2){let f=t.events[n[2]],u=t.events[n[3]];if(f[1].end=Object.assign({},u[1].end),f[1].type="chunkText",f[1].contentType="text",n[3]>n[2]+1){let h=n[2]+1,p=n[3]-n[2]-1;e.add(h,p,[])}}e.add(n[3]+1,0,[["exit",d,t]])}return o!==void 0&&(l.end=Object.assign({},Ct(t.events,o)),e.add(o,0,[["exit",l,t]]),l=void 0),l}function Yi(e,t,n,r,o){let l=[],i=Ct(t.events,n);o&&(o.end=Object.assign({},i),l.push(["exit",o,t])),r.end=Object.assign({},i),l.push(["exit",r,t]),e.add(n+1,0,l)}function Ct(e,t){let n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const Lm={name:"tasklistCheck",tokenize:Cm};function Rm(){return{text:{91:Lm}}}function Cm(e,t,n){let r=this;return o;function o(s){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(s):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),l)}function l(s){return Q(s)?(e.enter("taskListCheckValueUnchecked"),e.consume(s),e.exit("taskListCheckValueUnchecked"),i):s===88||s===120?(e.enter("taskListCheckValueChecked"),e.consume(s),e.exit("taskListCheckValueChecked"),i):n(s)}function i(s){return s===93?(e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),a):n(s)}function a(s){return P(s)?t(s):Z(s)?e.check({tokenize:Im},t,n)(s):n(s)}}function Im(e,t,n){return H(e,r,"whitespace");function r(o){return o===null?n(o):t(o)}}function Sm(e){return xa([lm(),gm(),Bm(e),Fm(),Rm()])}const Pm={};function zm(e){let t=this,n=e||Pm,r=t.data(),o=r.micromarkExtensions||=[],l=r.fromMarkdownExtensions||=[],i=r.toMarkdownExtensions||=[];o.push(Sm(n)),l.push(nm()),i.push(rm(n))}const Mm=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/i,Gm=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)(\/.*)?\]/i,qm=({legacyTitle:e=!1,tagName:t="div"}={})=>n=>{Xo(n,"blockquote",(r,o,l)=>{let i="",a="",s=!0,c=r.children.map(d=>{if(s&&d.type==="paragraph"){let f=d.children[0],u=f.type==="text"?f.value:"",h=e?Gm:Mm,p=u.match(h);if(p&&(s=!1,i=p[1].toLocaleLowerCase(),a=e&&p[2]||i.toLocaleUpperCase(),u.includes(`
`)&&(d.children[0]={type:"text",value:u.replace(h,"").replace(/^\n+/,"")}),!u.includes(`
`))){let T=[];d.children.forEach((b,y)=>{y!=0&&(y==1&&b.type==="break"||T.push(b))}),d.children=[...T]}}return d});i&&(r.data={hName:t,hProperties:{className:["markdown-alert",`markdown-alert-${i}`],dir:"auto"}},c.unshift({type:"paragraph",children:[Km(i),{type:"text",value:a.replace(/^\//,"")}],data:{hProperties:{className:"markdown-alert-title",dir:"auto"}}})),r.children=[...c]})};function Km(e){return{type:"emphasis",data:{hName:"svg",hProperties:{className:["octicon"],viewBox:"0 0 16 16",width:"16",height:"16",ariaHidden:"true"}},children:[{type:"emphasis",data:{hName:"path",hProperties:{d:Xm[e]??""}},children:[]}]}}const Xm={note:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",tip:"M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z",important:"M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",warning:"M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",caution:"M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"};function jm(e){let t=this;t.parser=n;function n(r){return Na(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function Wm(e,t){let n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Zm(e,t){let n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function Um(e,t){let n=t.value?t.value+`
`:"",r={},o=t.lang?t.lang.split(/\s+/):[];o.length>0&&(r.className=["language-"+o[0]]);let l={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(l.data={meta:t.meta}),e.patch(t,l),l=e.applyData(t,l),l={type:"element",tagName:"pre",properties:{},children:[l]},e.patch(t,l),l}function Hm(e,t){let n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function $m(e,t){let n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Vm(e,t){let n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),o=$t(r.toLowerCase()),l=e.footnoteOrder.indexOf(r),i,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),i=e.footnoteOrder.length):i=l+1,a+=1,e.footnoteCounts.set(r,a);let s={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+o,id:n+"fnref-"+o+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(i)}]};e.patch(t,s);let c={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,c),e.applyData(t,c)}function Qm(e,t){let n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ym(e,t){if(e.options.allowDangerousHtml){let n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function es(e,t){let n=t.referenceType,r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];let o=e.all(t),l=o[0];l&&l.type==="text"?l.value="["+l.value:o.unshift({type:"text",value:"["});let i=o[o.length-1];return i&&i.type==="text"?i.value+=r:o.push({type:"text",value:r}),o}function Jm(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return es(e,t);let o={src:$t(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(o.title=r.title);let l={type:"element",tagName:"img",properties:o,children:[]};return e.patch(t,l),e.applyData(t,l)}function _m(e,t){let n={src:$t(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function e2(e,t){let n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);let r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function t2(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return es(e,t);let o={href:$t(r.url||"")};r.title!==null&&r.title!==void 0&&(o.title=r.title);let l={type:"element",tagName:"a",properties:o,children:e.all(t)};return e.patch(t,l),e.applyData(t,l)}function n2(e,t){let n={href:$t(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function r2(e,t,n){let r=e.all(t),o=n?o2(n):ts(t),l={},i=[];if(typeof t.checked=="boolean"){let d=r[0],f;d&&d.type==="element"&&d.tagName==="p"?f=d:(f={type:"element",tagName:"p",properties:{},children:[]},r.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),l.className=["task-list-item"]}let a=-1;for(;++a<r.length;){let d=r[a];(o||a!==0||d.type!=="element"||d.tagName!=="p")&&i.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!o?i.push(...d.children):i.push(d)}let s=r[r.length-1];s&&(o||s.type!=="element"||s.tagName!=="p")&&i.push({type:"text",value:`
`});let c={type:"element",tagName:"li",properties:l,children:i};return e.patch(t,c),e.applyData(t,c)}function o2(e){let t=!1;if(e.type==="list"){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=ts(n[r])}return t}function ts(e){return e.spread??e.children.length>1}function i2(e,t){let n={},r=e.all(t),o=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++o<r.length;){let i=r[o];if(i.type==="element"&&i.tagName==="li"&&i.properties&&Array.isArray(i.properties.className)&&i.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}let l={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,l),e.applyData(t,l)}function l2(e,t){let n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function a2(e,t){let n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function s2(e,t){let n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function c2(e,t){let n=e.all(t),r=n.shift(),o=[];if(r){let i={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],i),o.push(i)}if(n.length>0){let i={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=Ql(t.children[1]),s=Vl(t.children[t.children.length-1]);a&&s&&(i.position={start:a,end:s}),o.push(i)}let l={type:"element",tagName:"table",properties:{},children:e.wrap(o,!0)};return e.patch(t,l),e.applyData(t,l)}function d2(e,t,n){let r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,i=l?l.length:t.children.length,a=-1,s=[];for(;++a<i;){let d=t.children[a],f={},u=l?l[a]:void 0;u&&(f.align=u);let h={type:"element",tagName:o,properties:f,children:[]};d&&(h.children=e.all(d),e.patch(d,h),h=e.applyData(d,h)),s.push(h)}let c={type:"element",tagName:"tr",properties:{},children:e.wrap(s,!0)};return e.patch(t,c),e.applyData(t,c)}function f2(e,t){let n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function u2(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),o=0,l=[];for(;r;)l.push(Ji(t.slice(o,r.index),o>0,!0),r[0]),o=r.index+r[0].length,r=n.exec(t);return l.push(Ji(t.slice(o),o>0,!1)),l.join("")}function Ji(e,t,n){let r=0,o=e.length;if(t){let l=e.codePointAt(r);for(;l===9||l===32;)r++,l=e.codePointAt(r)}if(n){let l=e.codePointAt(o-1);for(;l===9||l===32;)o--,l=e.codePointAt(o-1)}return o>r?e.slice(r,o):""}function h2(e,t){let n={type:"text",value:u2(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function p2(e,t){let n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const m2={blockquote:Wm,break:Zm,code:Um,delete:Hm,emphasis:$m,footnoteReference:Vm,heading:Qm,html:Ym,imageReference:Jm,image:_m,inlineCode:e2,linkReference:t2,link:n2,listItem:r2,list:i2,paragraph:l2,root:a2,strong:s2,table:c2,tableCell:f2,tableRow:d2,text:h2,thematicBreak:p2,toml:Cn,yaml:Cn,definition:Cn,footnoteDefinition:Cn};function Cn(){}function g2(e,t){let n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function y2(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function x2(e){let t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||g2,r=e.options.footnoteBackLabel||y2,o=e.options.footnoteLabel||"Footnotes",l=e.options.footnoteLabelTagName||"h2",i=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[],s=-1;for(;++s<e.footnoteOrder.length;){let c=e.footnoteById.get(e.footnoteOrder[s]);if(!c)continue;let d=e.all(c),f=String(c.identifier).toUpperCase(),u=$t(f.toLowerCase()),h=0,p=[],T=e.footnoteCounts.get(f);for(;T!==void 0&&++h<=T;){p.length>0&&p.push({type:"text",value:" "});let F=typeof n=="string"?n:n(s,h);typeof F=="string"&&(F={type:"text",value:F}),p.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+u+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,h),className:["data-footnote-backref"]},children:Array.isArray(F)?F:[F]})}let b=d[d.length-1];if(b&&b.type==="element"&&b.tagName==="p"){let F=b.children[b.children.length-1];F&&F.type==="text"?F.value+=" ":b.children.push({type:"text",value:" "}),b.children.push(...p)}else d.push(...p);let y={type:"element",tagName:"li",properties:{id:t+"fn-"+u},children:e.wrap(d,!0)};e.patch(c,y),a.push(y)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:l,properties:{...mn(i),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const mo={}.hasOwnProperty,b2={};function T2(e,t){let n=t||b2,r=new Map,o=new Map,l={all:a,applyData:k2,definitionById:r,footnoteById:o,footnoteCounts:new Map,footnoteOrder:[],handlers:{...m2,...n.handlers},one:i,options:n,patch:v2,wrap:B2};return Xo(e,function(s){if(s.type==="definition"||s.type==="footnoteDefinition"){let c=s.type==="definition"?r:o,d=String(s.identifier).toUpperCase();c.has(d)||c.set(d,s)}}),l;function i(s,c){let d=s.type,f=l.handlers[d];if(mo.call(l.handlers,d)&&f)return f(l,s,c);if(l.options.passThrough&&l.options.passThrough.includes(d)){if("children"in s){let{children:u,...h}=s,p=mn(h);return p.children=l.all(s),p}return mn(s)}return(l.options.unknownHandler||w2)(l,s,c)}function a(s){let c=[];if("children"in s){let d=s.children,f=-1;for(;++f<d.length;){let u=l.one(d[f],s);if(u){if(f&&d[f-1].type==="break"&&(!Array.isArray(u)&&u.type==="text"&&(u.value=_i(u.value)),!Array.isArray(u)&&u.type==="element")){let h=u.children[0];h&&h.type==="text"&&(h.value=_i(h.value))}Array.isArray(u)?c.push(...u):c.push(u)}}}return c}}function v2(e,t){e.position&&(t.position=Jl(e))}function k2(e,t){let n=t;if(e&&e.data){let r=e.data.hName,o=e.data.hChildren,l=e.data.hProperties;typeof r=="string"&&(n.type==="element"?n.tagName=r:n={type:"element",tagName:r,properties:{},children:"children"in n?n.children:[n]}),n.type==="element"&&l&&Object.assign(n.properties,mn(l)),"children"in n&&n.children&&o!=null&&(n.children=o)}return n}function w2(e,t){let n=t.data||{},r="value"in t&&!(mo.call(n,"hProperties")||mo.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function B2(e,t){let n=[],r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function _i(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function el(e,t){let n=T2(e,t),r=n.one(e,void 0),o=x2(n),l=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return o&&l.children.push({type:"text",value:`
`},o),l}function E2(e,t){return e&&"run"in e?async function(n,r){let o=el(n,{file:r,...t});await e.run(o,r)}:function(n,r){return el(n,{file:r,...e||t})}}function tl(e){if(e)throw e}var D2=re(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,o=Object.defineProperty,l=Object.getOwnPropertyDescriptor,i=function(f){return typeof Array.isArray=="function"?Array.isArray(f):r.call(f)==="[object Array]"},a=function(f){if(!f||r.call(f)!=="[object Object]")return!1;var u=n.call(f,"constructor"),h=f.constructor&&f.constructor.prototype&&n.call(f.constructor.prototype,"isPrototypeOf");if(f.constructor&&!u&&!h)return!1;for(var p in f);return p===void 0||n.call(f,p)},s=function(f,u){o&&u.name==="__proto__"?o(f,u.name,{enumerable:!0,configurable:!0,value:u.newValue,writable:!0}):f[u.name]=u.newValue},c=function(f,u){if(u==="__proto__"){if(!n.call(f,u))return;if(l)return l(f,u).value}return f[u]};t.exports=function d(){var f,u,h,p,T,b,y=arguments[0],F=1,B=arguments.length,R=!1;for(typeof y=="boolean"&&(R=y,y=arguments[1]||{},F=2),(y==null||typeof y!="object"&&typeof y!="function")&&(y={});F<B;++F)if(f=arguments[F],f!=null)for(u in f)h=c(y,u),p=c(f,u),y!==p&&(R&&p&&(a(p)||(T=i(p)))?(T?(T=!1,b=h&&i(h)?h:[]):b=h&&a(h)?h:{},s(y,{name:u,newValue:d(R,b,p)})):p!==void 0&&s(y,{name:u,newValue:p}));return y}}));function go(e){if(typeof e!="object"||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function A2(){let e=[],t={run:n,use:r};return t;function n(...o){let l=-1,i=o.pop();if(typeof i!="function")throw TypeError("Expected function as last argument, not "+i);a(null,...o);function a(s,...c){let d=e[++l],f=-1;if(s){i(s);return}for(;++f<o.length;)(c[f]===null||c[f]===void 0)&&(c[f]=o[f]);o=c,d?F2(d,a)(...c):i(null,...c)}}function r(o){if(typeof o!="function")throw TypeError("Expected `middelware` to be a function, not "+o);return e.push(o),t}}function F2(e,t){let n;return r;function r(...i){let a=e.length>i.length,s;a&&i.push(o);try{s=e.apply(this,i)}catch(c){let d=c;if(a&&n)throw d;return o(d)}a||(s&&s.then&&typeof s.then=="function"?s.then(l,o):s instanceof Error?o(s):l(s))}function o(i,...a){n||(n=!0,t(i,...a))}function l(i){o(null,i)}}var be=class extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let o="",l={},i=!1;if(n&&(l="line"in n&&"column"in n||"start"in n&&"end"in n?{place:n}:"type"in n?{ancestors:[n],place:n.position}:{...n}),typeof t=="string"?o=t:!l.cause&&t&&(i=!0,o=t.message,l.cause=t),!l.ruleId&&!l.source&&typeof r=="string"){let s=r.indexOf(":");s===-1?l.ruleId=r:(l.source=r.slice(0,s),l.ruleId=r.slice(s+1))}if(!l.place&&l.ancestors&&l.ancestors){let s=l.ancestors[l.ancestors.length-1];s&&(l.place=s.position)}let a=l.place&&"start"in l.place?l.place.start:l.place;this.ancestors=l.ancestors||void 0,this.cause=l.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file,this.message=o,this.line=a?a.line:void 0,this.name=un(l.place)||"1:1",this.place=l.place||void 0,this.reason=this.message,this.ruleId=l.ruleId||void 0,this.source=l.source||void 0,this.stack=i&&l.cause&&typeof l.cause.stack=="string"?l.cause.stack:"",this.actual,this.expected,this.note,this.url}};be.prototype.file="",be.prototype.name="",be.prototype.reason="",be.prototype.message="",be.prototype.stack="",be.prototype.column=void 0,be.prototype.line=void 0,be.prototype.ancestors=void 0,be.prototype.cause=void 0,be.prototype.fatal=void 0,be.prototype.place=void 0,be.prototype.ruleId=void 0,be.prototype.source=void 0;const qe={basename:N2,dirname:O2,extname:L2,join:R2,sep:"/"};function N2(e,t){if(t!==void 0&&typeof t!="string")throw TypeError('"ext" argument must be a string');Dn(e);let n=0,r=-1,o=e.length,l;if(t===void 0||t.length===0||t.length>e.length){for(;o--;)if(e.codePointAt(o)===47){if(l){n=o+1;break}}else r<0&&(l=!0,r=o+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let i=-1,a=t.length-1;for(;o--;)if(e.codePointAt(o)===47){if(l){n=o+1;break}}else i<0&&(l=!0,i=o+1),a>-1&&(e.codePointAt(o)===t.codePointAt(a--)?a<0&&(r=o):(a=-1,r=i));return n===r?r=i:r<0&&(r=e.length),e.slice(n,r)}function O2(e){if(Dn(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||=!0;return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function L2(e){Dn(e);let t=e.length,n=-1,r=0,o=-1,l=0,i;for(;t--;){let a=e.codePointAt(t);if(a===47){if(i){r=t+1;break}continue}n<0&&(i=!0,n=t+1),a===46?o<0?o=t:l!==1&&(l=1):o>-1&&(l=-1)}return o<0||n<0||l===0||l===1&&o===n-1&&o===r+1?"":e.slice(o,n)}function R2(...e){let t=-1,n;for(;++t<e.length;)Dn(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":C2(n)}function C2(e){Dn(e);let t=e.codePointAt(0)===47,n=I2(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function I2(e,t){let n="",r=0,o=-1,l=0,i=-1,a,s;for(;++i<=e.length;){if(i<e.length)a=e.codePointAt(i);else{if(a===47)break;a=47}if(a===47){if(!(o===i-1||l===1))if(o!==i-1&&l===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(s=n.lastIndexOf("/"),s!==n.length-1){s<0?(n="",r=0):(n=n.slice(0,s),r=n.length-1-n.lastIndexOf("/")),o=i,l=0;continue}}else if(n.length>0){n="",r=0,o=i,l=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(o+1,i):n=e.slice(o+1,i),r=i-o-1;o=i,l=0}else a===46&&l>-1?l++:l=-1}return n}function Dn(e){if(typeof e!="string")throw TypeError("Path must be a string. Received "+JSON.stringify(e))}const S2={cwd:P2};function P2(){return"/"}function yo(e){return!!(typeof e=="object"&&e&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function z2(e){if(typeof e=="string")e=new URL(e);else if(!yo(e)){let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){let t=TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return M2(e)}function M2(e){if(e.hostname!==""){let r=TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let r=t.codePointAt(n+2);if(r===70||r===102){let o=TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(t)}const Pr=["history","path","basename","stem","extname","dirname"];var G2=class{constructor(t){let n;n=t?yo(t)?{path:t}:typeof t=="string"||q2(t)?{value:t}:t:{},this.cwd="cwd"in n?"":S2.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Pr.length;){let l=Pr[r];l in n&&n[l]!==void 0&&n[l]!==null&&(this[l]=l==="history"?[...n[l]]:n[l])}let o;for(o in n)Pr.includes(o)||(this[o]=n[o])}get basename(){return typeof this.path=="string"?qe.basename(this.path):void 0}set basename(t){Mr(t,"basename"),zr(t,"basename"),this.path=qe.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?qe.dirname(this.path):void 0}set dirname(t){nl(this.basename,"dirname"),this.path=qe.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?qe.extname(this.path):void 0}set extname(t){if(zr(t,"extname"),nl(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw Error("`extname` must start with `.`");if(t.includes(".",1))throw Error("`extname` cannot contain multiple dots")}this.path=qe.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){yo(t)&&(t=z2(t)),Mr(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?qe.basename(this.path,this.extname):void 0}set stem(t){Mr(t,"stem"),zr(t,"stem"),this.path=qe.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){let o=this.message(t,n,r);throw o.fatal=!0,o}info(t,n,r){let o=this.message(t,n,r);return o.fatal=void 0,o}message(t,n,r){let o=new be(t,n,r);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}};function zr(e,t){if(e&&e.includes(qe.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+qe.sep+"`")}function Mr(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function nl(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}function q2(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const K2=(function(e){let t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r});var Gr=je(D2());const X2={}.hasOwnProperty,j2=new class ns extends K2{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=A2()}copy(){let t=new ns,n=-1;for(;++n<this.attachers.length;){let r=this.attachers[n];t.use(...r)}return t.data((0,Gr.default)(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Xr("data",this.frozen),this.namespace[t]=n,this):X2.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Xr("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;let t=this;for(;++this.freezeIndex<this.attachers.length;){let[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);let o=n.call(t,...r);typeof o=="function"&&this.transformers.use(o)}return this.frozen=!0,this.freezeIndex=1/0,this}parse(t){this.freeze();let n=In(t),r=this.parser||this.Parser;return qr("parse",r),r(String(n),n)}process(t,n){let r=this;return this.freeze(),qr("process",this.parser||this.Parser),Kr("process",this.compiler||this.Compiler),n?o(void 0,n):new Promise(o);function o(l,i){let a=In(t),s=r.parse(a);r.run(s,a,function(d,f,u){if(d||!f||!u)return c(d);let h=f,p=r.stringify(h,u);Z2(p)?u.value=p:u.result=p,c(d,u)});function c(d,f){d||!f?i(d):l?l(f):n(void 0,f)}}}processSync(t){let n=!1,r;return this.freeze(),qr("processSync",this.parser||this.Parser),Kr("processSync",this.compiler||this.Compiler),this.process(t,o),ol("processSync","process",n),r;function o(l,i){n=!0,tl(l),r=i}}run(t,n,r){rl(t),this.freeze();let o=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?l(void 0,r):new Promise(l);function l(i,a){let s=In(n);o.run(t,s,c);function c(d,f,u){let h=f||t;d?a(d):i?i(h):r(void 0,h,u)}}}runSync(t,n){let r=!1,o;return this.run(t,n,l),ol("runSync","run",r),o;function l(i,a){tl(i),o=a,r=!0}}stringify(t,n){this.freeze();let r=In(n),o=this.compiler||this.Compiler;return Kr("stringify",o),rl(t),o(t,r)}use(t,...n){let r=this.attachers,o=this.namespace;if(Xr("use",this.frozen),t!=null)if(typeof t=="function")s(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):i(t);else throw TypeError("Expected usable value, not `"+t+"`");return this;function l(c){if(typeof c=="function")s(c,[]);else if(typeof c=="object")if(Array.isArray(c)){let[d,...f]=c;s(d,f)}else i(c);else throw TypeError("Expected usable value, not `"+c+"`")}function i(c){if(!("plugins"in c)&&!("settings"in c))throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(c.plugins),c.settings&&(o.settings=(0,Gr.default)(!0,o.settings,c.settings))}function a(c){let d=-1;if(c!=null)if(Array.isArray(c))for(;++d<c.length;){let f=c[d];l(f)}else throw TypeError("Expected a list of plugins, not `"+c+"`")}function s(c,d){let f=-1,u=-1;for(;++f<r.length;)if(r[f][0]===c){u=f;break}if(u===-1)r.push([c,...d]);else if(d.length>0){let[h,...p]=d,T=r[u][1];go(T)&&go(h)&&(h=(0,Gr.default)(!0,T,h)),r[u]=[c,h,...p]}}}}().freeze();function qr(e,t){if(typeof t!="function")throw TypeError("Cannot `"+e+"` without `parser`")}function Kr(e,t){if(typeof t!="function")throw TypeError("Cannot `"+e+"` without `compiler`")}function Xr(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function rl(e){if(!go(e)||typeof e.type!="string")throw TypeError("Expected node, got `"+e+"`")}function ol(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function In(e){return W2(e)?e:new G2(e)}function W2(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Z2(e){return typeof e=="string"||U2(e)}function U2(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}function Ie(e,t){if(e===void 0||e==null){let n=typeof t=="function"?t():t;throw Error(n??`Expected defined value, but received ${e}`)}return e}function z(e,t){if(!e)throw Error(t??"Invariant failed")}function rs(e){throw Error(`NonExhaustive value: ${e}`)}var os=je(Sd());function xo(e,t){return e===t?0:Ce(e)?Ce(t)?(0,os.default)(e,t):1:Ce(t)?-1:0}function H2(e=".",t=!1){return(n,r)=>{if(n===r)return 0;if(!n)return-1;if(!r)return 1;let o=n.split(e),l=r.split(e),i=Math.min(o.length,l.length);for(let s=0;s<i;s++){let c=o[s],d=l[s],f=(0,os.default)(c,d);if(f!==0)return f}let a=o.length-l.length;return t?-1*a:a}}function Zo(e){return e!=null&&typeof e=="string"}function T5(e){return!!e&&Array.isArray(e)&&e.length>0}function is(e,t){return z(typeof t=="string","Path must be string"),typeof e=="object"&&!!e&&e[t]!=null}function $2(e){return t=>is(t,e)}function v5(...e){if(e.length===1&&typeof e[0]=="string")return $2(e[0]);let[t,n]=e;return is(t,n)}function Xn(e){let t=e.lastIndexOf(".");return t>0?e.slice(0,t):null}function ls(e){let t=e.lastIndexOf(".");return t>0?e.slice(t+1):e}const hn=e=>Zo(e)?e:e.id;function Ee(e,t){let n=hn(e);return t?hn(t).startsWith(n+"."):r=>{let o=hn(r);return n.startsWith(o+".")}}function Uo(e,t){if(!t)return o=>Uo(e,o);let n=hn(e),r=hn(t);return n===r||r.startsWith(n+".")||n.startsWith(r+".")}function as(e,t){return n=>Ee(e,n)}function rr(e){return(Zo(e)?e:e.id).split(".").length}function An(e,t){let n=e.split(".");if(n.length<2)return null;let r=t.split(".");if(r.length<2)return null;let o=[];for(let l=0;l<Math.min(n.length,r.length)-1&&n[l]===r[l];l++)o.push(n[l]);return o.length===0?null:o.join(".")}function Gt(e){let t=e.split(".");if(t.pop(),!Xe(t,2))return t;for(let n=1;n<t.length;n++)t[n]=t[n-1]+"."+t[n];return t.reverse()}function V2(e,t){let n=t;for(let r of e)r!==n&&Ee(r,n)&&(n=r);return n===t?null:n}function yn(e){let t=[],n=[...e],r;for(;r=n.shift();){let o;for(;o=V2(n,r);)t.push(...n.splice(n.indexOf(o),1));t.push(r)}return t}function ss(e,t){if(!e||Zo(e)){let r=e??"asc";return o=>ss(o,r)}let n=t==="desc"?-1:1;return e.map(r=>({item:r,fqn:r.id.split(".")})).sort((r,o)=>{if(r.fqn.length!==o.fqn.length)return(r.fqn.length-o.fqn.length)*n;for(let l=0;l<r.fqn.length;l++){let i=xo(r.fqn[l],o.fqn[l]);if(i!==0)return i}return 0}).map(({item:r})=>r)}function Q2(e,t,n){let r=e.get(t);return r||(r=n(t),e.set(t,r)),r}function Tt(e,t){let n=t??e;z(sr(n));function*r(o){for(let l of o)n(l)&&(yield l)}return t?r(e):r}function Y2(e,t){let n=t??e;z(sr(n));function r(o){for(let l of o)if(n(l))return l}return t?r(e):r}function k5(e,t){let n=e;z(n>=0,"Count must be a non-negative number");function*r(o){let l=0;for(let i of o){if(l>=n)break;yield i,l++}}return t===void 0?o=>r(o):r(e)}function xn(e){return e?il(e):il}function il(e){let{value:t}=e[Symbol.iterator]().next();return t}function J2(e,t){let n=e;z(sr(n));function*r(o){for(let l of o)yield n(l)}return t?r(e):r}function _2(e,t){let n=t??e;z(sr(n));function r(o){for(let l of o)if(n(l))return!0;return!1}return t?r(e):r}function ll(e){return e?Array.from(e):t=>Array.from(t)}function eg(e){return e?new Set(e):t=>new Set(t)}function $(e,t,n){let r=typeof t=="symbol"?t:Symbol.for(t);return e.hasOwnProperty(r)||Object.defineProperty(e,r,{enumerable:!1,writable:!1,value:n()}),e[r]}function w5(...e){let t=100;return e.length===2?t=id(e[0],e[1]):e.length===1&&(t=e[0]),new Promise(n=>{setTimeout(()=>{n("LIKEC4_DELAY")},t??100)})}function bo(...e){let t=new Set;for(let n of e)for(let r of n)t.add(r);return t}function Xt(e,...t){let n=new Set;if(e.size===0)return n;let r=Xe(t,2)?(0,Hl.intersection)(...t):t[0];if(r.size===0)return n;for(let o of e)r.has(o)&&n.add(o);return n}function To(e,t){if(e.size===0)return new Set;if(t.size===0)return new Set(e);let n=new Set;for(let r of e)t.has(r)||n.add(r);return n}function vo(e,t){return e.size===t.size&&[...e].every(n=>t.has(n))}function tg(e,t){return(0,Hl.symmetricDifference)(e,t)}function ng(e){return z(typeof e=="object"&&Zc(e),"objectHash: value must be an object"),Xd(e)}function cs(e){let t=5381,n=e.length;z(n>0,"stringHash: empty string");for(let r=0;r<n;r++)t=t*33^e.charCodeAt(r);return(t>>>0).toString(36)}function rg(){return j2().use(jm).use(zm).use(qm).use(E2,{allowDangerousHtml:!0}).use(nf,Pl({attributes:{"*":["className"],svg:["width","height","viewBox","fill","ariaHidden"],path:["d","fill","stroke","strokeWidth","strokeLinecap","strokeLinejoin"]},tagNames:["svg","g","path","div"]},lo)).use(Tu,{allowDangerousHtml:!0})}function og(e){return(""+rg().processSync(e)).trim()}function ig(e){return hr(Na(e),{includeHtml:!1,includeImageAlt:!1})}const lg={tomato9:"#e54d2e"},ag={red9:"#e5484d"},sg={ruby9:"#e54666"},cg={crimson9:"#e93d82"},dg={pink9:"#d6409f"},fg={purple9:"#8e4ec6"},ug={violet9:"#6e56cf"},hg={indigo9:"#3e63dd"},pg={blue9:"#0090ff"},mg={teal9:"#12a594"},gg={grass9:"#46a758"},yg={lime9:"#bdee63"},xg={yellow9:"#ffe629"},bg={amber9:"#ffc53d"},Tg={orange9:"#f76b15"},{min:vg,max:kg}=Math;var vt=(e,t=0,n=1)=>vg(kg(t,e),n),Ho=e=>{e._clipped=!1,e._unclipped=e.slice(0);for(let t=0;t<=3;t++)t<3?((e[t]<0||e[t]>255)&&(e._clipped=!0),e[t]=vt(e[t],0,255)):t===3&&(e[t]=vt(e[t],0,1));return e};const ds={};for(let e of["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"])ds[`[object ${e}]`]=e.toLowerCase();function W(e){return ds[Object.prototype.toString.call(e)]||"object"}var K=(e,t=null)=>e.length>=3?Array.prototype.slice.call(e):W(e[0])=="object"&&t?t.split("").filter(n=>e[0][n]!==void 0).map(n=>e[0][n]):e[0].slice(0),Vt=e=>{if(e.length<2)return null;let t=e.length-1;return W(e[t])=="string"?e[t].toLowerCase():null};const{PI:yr,min:fs,max:us}=Math,Ne=e=>Math.round(e*100)/100,ko=e=>Math.round(e*100)/100,Qe=yr*2,jr=yr/3,wg=yr/180,Bg=180/yr;function hs(e){return[...e.slice(0,3).reverse(),...e.slice(3)]}var q={format:{},autodetect:[]},D=class{constructor(...t){let n=this;if(W(t[0])==="object"&&t[0].constructor&&t[0].constructor===this.constructor)return t[0];let r=Vt(t),o=!1;if(!r){o=!0,q.sorted||=(q.autodetect=q.autodetect.sort((l,i)=>i.p-l.p),!0);for(let l of q.autodetect)if(r=l.test(...t),r)break}if(q.format[r])n._rgb=Ho(q.format[r].apply(null,o?t:t.slice(0,-1)));else throw Error("unknown format: "+t);n._rgb.length===3&&n._rgb.push(1)}toString(){return W(this.hex)=="function"?this.hex():`[${this._rgb.join(",")}]`}};const U=(...e)=>new D(...e);U.version="3.2.0";const It={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},Eg=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,Dg=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,ps=e=>{if(e.match(Eg)){(e.length===4||e.length===7)&&(e=e.substr(1)),e.length===3&&(e=e.split(""),e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);let t=parseInt(e,16);return[t>>16,t>>8&255,t&255,1]}if(e.match(Dg)){(e.length===5||e.length===9)&&(e=e.substr(1)),e.length===4&&(e=e.split(""),e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);let t=parseInt(e,16);return[t>>24&255,t>>16&255,t>>8&255,Math.round((t&255)/255*100)/100]}throw Error(`unknown hex color: ${e}`)},{round:Sn}=Math,ms=(...e)=>{let[t,n,r,o]=K(e,"rgba"),l=Vt(e)||"auto";o===void 0&&(o=1),l==="auto"&&(l=o<1?"rgba":"rgb"),t=Sn(t),n=Sn(n),r=Sn(r);let i="000000"+(t<<16|n<<8|r).toString(16);i=i.substr(i.length-6);let a="0"+Sn(o*255).toString(16);switch(a=a.substr(a.length-2),l.toLowerCase()){case"rgba":return`#${i}${a}`;case"argb":return`#${a}${i}`;default:return`#${i}`}};D.prototype.name=function(){let e=ms(this._rgb,"rgb");for(let t of Object.keys(It))if(It[t]===e)return t.toLowerCase();return e},q.format.named=e=>{if(e=e.toLowerCase(),It[e])return ps(It[e]);throw Error("unknown color name: "+e)},q.autodetect.push({p:5,test:(e,...t)=>{if(!t.length&&W(e)==="string"&&It[e.toLowerCase()])return"named"}}),D.prototype.alpha=function(e,t=!1){return e!==void 0&&W(e)==="number"?t?(this._rgb[3]=e,this):new D([this._rgb[0],this._rgb[1],this._rgb[2],e],"rgb"):this._rgb[3]},D.prototype.clipped=function(){return this._rgb._clipped||!1};const Ke={Kn:18,labWhitePoint:"d65",Xn:.95047,Yn:1,Zn:1.08883,kE:216/24389,kKE:8,kK:24389/27,RefWhiteRGB:{X:.95047,Y:1,Z:1.08883},MtxRGB2XYZ:{m00:.4124564390896922,m01:.21267285140562253,m02:.0193338955823293,m10:.357576077643909,m11:.715152155287818,m12:.11919202588130297,m20:.18043748326639894,m21:.07217499330655958,m22:.9503040785363679},MtxXYZ2RGB:{m00:3.2404541621141045,m01:-.9692660305051868,m02:.055643430959114726,m10:-1.5371385127977166,m11:1.8760108454466942,m12:-.2040259135167538,m20:-.498531409556016,m21:.041556017530349834,m22:1.0572251882231791},As:.9414285350000001,Bs:1.040417467,Cs:1.089532651,MtxAdaptMa:{m00:.8951,m01:-.7502,m02:.0389,m10:.2664,m11:1.7135,m12:-.0685,m20:-.1614,m21:.0367,m22:1.0296},MtxAdaptMaI:{m00:.9869929054667123,m01:.43230526972339456,m02:-.008528664575177328,m10:-.14705425642099013,m11:.5183602715367776,m12:.04004282165408487,m20:.15996265166373125,m21:.0492912282128556,m22:.9684866957875502}},Ag=new Map([["a",[1.0985,.35585]],["b",[1.0985,.35585]],["c",[.98074,1.18232]],["d50",[.96422,.82521]],["d55",[.95682,.92149]],["d65",[.95047,1.08883]],["e",[1,1,1]],["f2",[.99186,.67393]],["f7",[.95041,1.08747]],["f11",[1.00962,.6435]],["icc",[.96422,.82521]]]);function Ye(e){let t=Ag.get(String(e).toLowerCase());if(!t)throw Error("unknown Lab illuminant "+e);Ke.labWhitePoint=e,Ke.Xn=t[0],Ke.Zn=t[1]}function bn(){return Ke.labWhitePoint}const $o=(...e)=>{e=K(e,"lab");let[t,n,r]=e,[o,l,i]=Fg(t,n,r),[a,s,c]=gs(o,l,i);return[a,s,c,e.length>3?e[3]:1]},Fg=(e,t,n)=>{let{kE:r,kK:o,kKE:l,Xn:i,Yn:a,Zn:s}=Ke,c=(e+16)/116,d=.002*t+c,f=c-.005*n,u=d*d*d,h=f*f*f,p=u>r?u:(116*d-16)/o,T=e>l?((e+16)/116)**3:e/o,b=h>r?h:(116*f-16)/o;return[p*i,T*a,b*s]},Wr=e=>{let t=Math.sign(e);return e=Math.abs(e),(e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055)*t},gs=(e,t,n)=>{let{MtxAdaptMa:r,MtxAdaptMaI:o,MtxXYZ2RGB:l,RefWhiteRGB:i,Xn:a,Yn:s,Zn:c}=Ke,d=a*r.m00+s*r.m10+c*r.m20,f=a*r.m01+s*r.m11+c*r.m21,u=a*r.m02+s*r.m12+c*r.m22,h=i.X*r.m00+i.Y*r.m10+i.Z*r.m20,p=i.X*r.m01+i.Y*r.m11+i.Z*r.m21,T=i.X*r.m02+i.Y*r.m12+i.Z*r.m22,b=(e*r.m00+t*r.m10+n*r.m20)*(h/d),y=(e*r.m01+t*r.m11+n*r.m21)*(p/f),F=(e*r.m02+t*r.m12+n*r.m22)*(T/u),B=b*o.m00+y*o.m10+F*o.m20,R=b*o.m01+y*o.m11+F*o.m21,S=b*o.m02+y*o.m12+F*o.m22,w=Wr(B*l.m00+R*l.m10+S*l.m20),C=Wr(B*l.m01+R*l.m11+S*l.m21),v=Wr(B*l.m02+R*l.m12+S*l.m22);return[w*255,C*255,v*255]},Vo=(...e)=>{let[t,n,r,...o]=K(e,"rgb"),[l,i,a]=ys(t,n,r),[s,c,d]=Ng(l,i,a);return[s,c,d,...o.length>0&&o[0]<1?[o[0]]:[]]};function Ng(e,t,n){let{Xn:r,Yn:o,Zn:l,kE:i,kK:a}=Ke,s=e/r,c=t/o,d=n/l,f=s>i?s**(1/3):(a*s+16)/116,u=c>i?c**(1/3):(a*c+16)/116,h=d>i?d**(1/3):(a*d+16)/116;return[116*u-16,500*(f-u),200*(u-h)]}function Zr(e){let t=Math.sign(e);return e=Math.abs(e),(e<=.04045?e/12.92:((e+.055)/1.055)**2.4)*t}const ys=(e,t,n)=>{e=Zr(e/255),t=Zr(t/255),n=Zr(n/255);let{MtxRGB2XYZ:r,MtxAdaptMa:o,MtxAdaptMaI:l,Xn:i,Yn:a,Zn:s,As:c,Bs:d,Cs:f}=Ke,u=e*r.m00+t*r.m10+n*r.m20,h=e*r.m01+t*r.m11+n*r.m21,p=e*r.m02+t*r.m12+n*r.m22,T=i*o.m00+a*o.m10+s*o.m20,b=i*o.m01+a*o.m11+s*o.m21,y=i*o.m02+a*o.m12+s*o.m22,F=u*o.m00+h*o.m10+p*o.m20,B=u*o.m01+h*o.m11+p*o.m21,R=u*o.m02+h*o.m12+p*o.m22;return F*=T/c,B*=b/d,R*=y/f,u=F*l.m00+B*l.m10+R*l.m20,h=F*l.m01+B*l.m11+R*l.m21,p=F*l.m02+B*l.m12+R*l.m22,[u,h,p]};D.prototype.lab=function(){return Vo(this._rgb)};const Og=(...e)=>new D(...e,"lab");Object.assign(U,{lab:Og,getLabWhitePoint:bn,setLabWhitePoint:Ye}),q.format.lab=$o,q.autodetect.push({p:2,test:(...e)=>{if(e=K(e,"lab"),W(e)==="array"&&e.length===3)return"lab"}}),D.prototype.darken=function(e=1){let t=this,n=t.lab();return n[0]-=Ke.Kn*e,new D(n,"lab").alpha(t.alpha(),!0)},D.prototype.brighten=function(e=1){return this.darken(-e)},D.prototype.darker=D.prototype.darken,D.prototype.brighter=D.prototype.brighten,D.prototype.get=function(e){let[t,n]=e.split("."),r=this[t]();if(n){let o=t.indexOf(n)-(t.substr(0,2)==="ok"?2:0);if(o>-1)return r[o];throw Error(`unknown channel ${n} in mode ${t}`)}else return r};const{pow:Lg}=Math;D.prototype.luminance=function(e,t="rgb"){if(e!==void 0&&W(e)==="number"){if(e===0)return new D([0,0,0,this._rgb[3]],"rgb");if(e===1)return new D([255,255,255,this._rgb[3]],"rgb");let n=this.luminance(),r=20,o=(l,i)=>{let a=l.interpolate(i,.5,t),s=a.luminance();return Math.abs(e-s)<1e-7||!r--?a:s>e?o(l,a):o(a,i)};return new D([...(n>e?o(new D([0,0,0]),this):o(this,new D([255,255,255]))).rgb(),this._rgb[3]])}return Rg(...this._rgb.slice(0,3))};const Rg=(e,t,n)=>(e=Ur(e),t=Ur(t),n=Ur(n),.2126*e+.7152*t+.0722*n),Ur=e=>(e/=255,e<=.03928?e/12.92:Lg((e+.055)/1.055,2.4));var pe={},jt=(e,t,n=.5,...r)=>{let o=r[0]||"lrgb";if(!pe[o]&&!r.length&&(o=Object.keys(pe)[0]),!pe[o])throw Error(`interpolation mode ${o} is not defined`);return W(e)!=="object"&&(e=new D(e)),W(t)!=="object"&&(t=new D(t)),pe[o](e,t,n).alpha(e.alpha()+n*(t.alpha()-e.alpha()))};D.prototype.mix=D.prototype.interpolate=function(e,t=.5,...n){return jt(this,e,t,...n)},D.prototype.premultiply=function(e=!1){let t=this._rgb,n=t[3];return e?(this._rgb=[t[0]*n,t[1]*n,t[2]*n,n],this):new D([t[0]*n,t[1]*n,t[2]*n,n],"rgb")};const{sin:Cg,cos:Ig}=Math,xs=(...e)=>{let[t,n,r]=K(e,"lch");return isNaN(r)&&(r=0),r*=wg,[t,Ig(r)*n,Cg(r)*n]},Qo=(...e)=>{e=K(e,"lch");let[t,n,r]=e,[o,l,i]=xs(t,n,r),[a,s,c]=$o(o,l,i);return[a,s,c,e.length>3?e[3]:1]},Sg=(...e)=>Qo(...hs(K(e,"hcl"))),{sqrt:Pg,atan2:zg,round:Mg}=Math,bs=(...e)=>{let[t,n,r]=K(e,"lab"),o=Pg(n*n+r*r),l=(zg(r,n)*Bg+360)%360;return Mg(o*1e4)===0&&(l=NaN),[t,o,l]},wo=(...e)=>{let[t,n,r,...o]=K(e,"rgb"),[l,i,a]=Vo(t,n,r),[s,c,d]=bs(l,i,a);return[s,c,d,...o.length>0&&o[0]<1?[o[0]]:[]]};D.prototype.lch=function(){return wo(this._rgb)},D.prototype.hcl=function(){return hs(wo(this._rgb))};const Gg=(...e)=>new D(...e,"lch"),qg=(...e)=>new D(...e,"hcl");Object.assign(U,{lch:Gg,hcl:qg}),q.format.lch=Qo,q.format.hcl=Sg,["lch","hcl"].forEach(e=>q.autodetect.push({p:2,test:(...t)=>{if(t=K(t,e),W(t)==="array"&&t.length===3)return e}})),D.prototype.saturate=function(e=1){let t=this,n=t.lch();return n[1]+=Ke.Kn*e,n[1]<0&&(n[1]=0),new D(n,"lch").alpha(t.alpha(),!0)},D.prototype.desaturate=function(e=1){return this.saturate(-e)},D.prototype.set=function(e,t,n=!1){let[r,o]=e.split("."),l=this[r]();if(o){let i=r.indexOf(o)-(r.substr(0,2)==="ok"?2:0);if(i>-1){if(W(t)=="string")switch(t.charAt(0)){case"+":l[i]+=+t;break;case"-":l[i]+=+t;break;case"*":l[i]*=+t.substr(1);break;case"/":l[i]/=+t.substr(1);break;default:l[i]=+t}else if(W(t)==="number")l[i]=t;else throw Error("unsupported value for Color.set");let a=new D(l,r);return n?(this._rgb=a._rgb,this):a}throw Error(`unknown channel ${o} in mode ${r}`)}else return l},D.prototype.tint=function(e=.5,...t){return jt(this,"white",e,...t)},D.prototype.shade=function(e=.5,...t){return jt(this,"black",e,...t)};const Kg=(e,t,n)=>{let r=e._rgb,o=t._rgb;return new D(r[0]+n*(o[0]-r[0]),r[1]+n*(o[1]-r[1]),r[2]+n*(o[2]-r[2]),"rgb")};pe.rgb=Kg;const{sqrt:Hr,pow:Ot}=Math,Xg=(e,t,n)=>{let[r,o,l]=e._rgb,[i,a,s]=t._rgb;return new D(Hr(Ot(r,2)*(1-n)+Ot(i,2)*n),Hr(Ot(o,2)*(1-n)+Ot(a,2)*n),Hr(Ot(l,2)*(1-n)+Ot(s,2)*n),"rgb")};pe.lrgb=Xg;const jg=(e,t,n)=>{let r=e.lab(),o=t.lab();return new D(r[0]+n*(o[0]-r[0]),r[1]+n*(o[1]-r[1]),r[2]+n*(o[2]-r[2]),"lab")};pe.lab=jg;var Qt=(e,t,n,r)=>{let o,l;r==="hsl"?(o=e.hsl(),l=t.hsl()):r==="hsv"?(o=e.hsv(),l=t.hsv()):r==="hcg"?(o=e.hcg(),l=t.hcg()):r==="hsi"?(o=e.hsi(),l=t.hsi()):r==="lch"||r==="hcl"?(r="hcl",o=e.hcl(),l=t.hcl()):r==="oklch"&&(o=e.oklch().reverse(),l=t.oklch().reverse());let i,a,s,c,d,f;(r.substr(0,1)==="h"||r==="oklch")&&([i,s,d]=o,[a,c,f]=l);let u,h,p,T;return!isNaN(i)&&!isNaN(a)?(T=a>i&&a-i>180?a-(i+360):a<i&&i-a>180?a+360-i:a-i,h=i+n*T):isNaN(i)?isNaN(a)?h=NaN:(h=a,(d==1||d==0)&&r!="hsv"&&(u=c)):(h=i,(f==1||f==0)&&r!="hsv"&&(u=s)),u===void 0&&(u=s+n*(c-s)),p=d+n*(f-d),r==="oklch"?new D([p,u,h],r):new D([h,u,p],r)};const al=(e,t,n)=>Qt(e,t,n,"lch");pe.lch=al,pe.hcl=al;const Wg=e=>{if(W(e)=="number"&&e>=0&&e<=16777215)return[e>>16,e>>8&255,e&255,1];throw Error("unknown num color: "+e)},Zg=(...e)=>{let[t,n,r]=K(e,"rgb");return(t<<16)+(n<<8)+r};D.prototype.num=function(){return Zg(this._rgb)};const Ug=(...e)=>new D(...e,"num");Object.assign(U,{num:Ug}),q.format.num=Wg,q.autodetect.push({p:5,test:(...e)=>{if(e.length===1&&W(e[0])==="number"&&e[0]>=0&&e[0]<=16777215)return"num"}});const Hg=(e,t,n)=>{let r=e.num();return new D(r+n*(t.num()-r),"num")};pe.num=Hg;const{floor:$g}=Math,Vg=(...e)=>{e=K(e,"hcg");let[t,n,r]=e,o,l,i;r*=255;let a=n*255;if(n===0)o=l=i=r;else{t===360&&(t=0),t>360&&(t-=360),t<0&&(t+=360),t/=60;let s=$g(t),c=t-s,d=r*(1-n),f=d+a*(1-c),u=d+a*c,h=d+a;switch(s){case 0:[o,l,i]=[h,u,d];break;case 1:[o,l,i]=[f,h,d];break;case 2:[o,l,i]=[d,h,u];break;case 3:[o,l,i]=[d,f,h];break;case 4:[o,l,i]=[u,d,h];break;case 5:[o,l,i]=[h,d,f];break}}return[o,l,i,e.length>3?e[3]:1]},Qg=(...e)=>{let[t,n,r]=K(e,"rgb"),o=fs(t,n,r),l=us(t,n,r),i=l-o,a=i*100/255,s=o/(255-i)*100,c;return i===0?c=NaN:(t===l&&(c=(n-r)/i),n===l&&(c=2+(r-t)/i),r===l&&(c=4+(t-n)/i),c*=60,c<0&&(c+=360)),[c,a,s]};D.prototype.hcg=function(){return Qg(this._rgb)};const Yg=(...e)=>new D(...e,"hcg");U.hcg=Yg,q.format.hcg=Vg,q.autodetect.push({p:1,test:(...e)=>{if(e=K(e,"hcg"),W(e)==="array"&&e.length===3)return"hcg"}});const Jg=(e,t,n)=>Qt(e,t,n,"hcg");pe.hcg=Jg;const{cos:Lt}=Math,_g=(...e)=>{e=K(e,"hsi");let[t,n,r]=e,o,l,i;return isNaN(t)&&(t=0),isNaN(n)&&(n=0),t>360&&(t-=360),t<0&&(t+=360),t/=360,t<1/3?(i=(1-n)/3,o=(1+n*Lt(Qe*t)/Lt(jr-Qe*t))/3,l=1-(i+o)):t<2/3?(t-=1/3,o=(1-n)/3,l=(1+n*Lt(Qe*t)/Lt(jr-Qe*t))/3,i=1-(o+l)):(t-=2/3,l=(1-n)/3,i=(1+n*Lt(Qe*t)/Lt(jr-Qe*t))/3,o=1-(l+i)),o=vt(r*o*3),l=vt(r*l*3),i=vt(r*i*3),[o*255,l*255,i*255,e.length>3?e[3]:1]},{min:e0,sqrt:t0,acos:n0}=Math,r0=(...e)=>{let[t,n,r]=K(e,"rgb");t/=255,n/=255,r/=255;let o,l=e0(t,n,r),i=(t+n+r)/3,a=i>0?1-l/i:0;return a===0?o=NaN:(o=(t-n+(t-r))/2,o/=t0((t-n)*(t-n)+(t-r)*(n-r)),o=n0(o),r>n&&(o=Qe-o),o/=Qe),[o*360,a,i]};D.prototype.hsi=function(){return r0(this._rgb)};const o0=(...e)=>new D(...e,"hsi");U.hsi=o0,q.format.hsi=_g,q.autodetect.push({p:2,test:(...e)=>{if(e=K(e,"hsi"),W(e)==="array"&&e.length===3)return"hsi"}});const i0=(e,t,n)=>Qt(e,t,n,"hsi");pe.hsi=i0;const Bo=(...e)=>{e=K(e,"hsl");let[t,n,r]=e,o,l,i;if(n===0)o=l=i=r*255;else{let a=[0,0,0],s=[0,0,0],c=r<.5?r*(1+n):r+n-r*n,d=2*r-c,f=t/360;a[0]=f+1/3,a[1]=f,a[2]=f-1/3;for(let u=0;u<3;u++)a[u]<0&&(a[u]+=1),a[u]>1&&--a[u],6*a[u]<1?s[u]=d+(c-d)*6*a[u]:2*a[u]<1?s[u]=c:3*a[u]<2?s[u]=d+(c-d)*(2/3-a[u])*6:s[u]=d;[o,l,i]=[s[0]*255,s[1]*255,s[2]*255]}return e.length>3?[o,l,i,e[3]]:[o,l,i,1]},Ts=(...e)=>{e=K(e,"rgba");let[t,n,r]=e;t/=255,n/=255,r/=255;let o=fs(t,n,r),l=us(t,n,r),i=(l+o)/2,a,s;return l===o?(a=0,s=NaN):a=i<.5?(l-o)/(l+o):(l-o)/(2-l-o),t==l?s=(n-r)/(l-o):n==l?s=2+(r-t)/(l-o):r==l&&(s=4+(t-n)/(l-o)),s*=60,s<0&&(s+=360),e.length>3&&e[3]!==void 0?[s,a,i,e[3]]:[s,a,i]};D.prototype.hsl=function(){return Ts(this._rgb)};const l0=(...e)=>new D(...e,"hsl");U.hsl=l0,q.format.hsl=Bo,q.autodetect.push({p:2,test:(...e)=>{if(e=K(e,"hsl"),W(e)==="array"&&e.length===3)return"hsl"}});const a0=(e,t,n)=>Qt(e,t,n,"hsl");pe.hsl=a0;const{floor:s0}=Math,c0=(...e)=>{e=K(e,"hsv");let[t,n,r]=e,o,l,i;if(r*=255,n===0)o=l=i=r;else{t===360&&(t=0),t>360&&(t-=360),t<0&&(t+=360),t/=60;let a=s0(t),s=t-a,c=r*(1-n),d=r*(1-n*s),f=r*(1-n*(1-s));switch(a){case 0:[o,l,i]=[r,f,c];break;case 1:[o,l,i]=[d,r,c];break;case 2:[o,l,i]=[c,r,f];break;case 3:[o,l,i]=[c,d,r];break;case 4:[o,l,i]=[f,c,r];break;case 5:[o,l,i]=[r,c,d];break}}return[o,l,i,e.length>3?e[3]:1]},{min:d0,max:f0}=Math,u0=(...e)=>{e=K(e,"rgb");let[t,n,r]=e,o=d0(t,n,r),l=f0(t,n,r),i=l-o,a,s,c;return c=l/255,l===0?(a=NaN,s=0):(s=i/l,t===l&&(a=(n-r)/i),n===l&&(a=2+(r-t)/i),r===l&&(a=4+(t-n)/i),a*=60,a<0&&(a+=360)),[a,s,c]};D.prototype.hsv=function(){return u0(this._rgb)};const h0=(...e)=>new D(...e,"hsv");U.hsv=h0,q.format.hsv=c0,q.autodetect.push({p:2,test:(...e)=>{if(e=K(e,"hsv"),W(e)==="array"&&e.length===3)return"hsv"}});const p0=(e,t,n)=>Qt(e,t,n,"hsv");pe.hsv=p0;function or(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(i=>[i]));let r=t[0].length,o=t[0].map((i,a)=>t.map(s=>s[a])),l=e.map(i=>o.map(a=>Array.isArray(i)?i.reduce((s,c,d)=>s+c*(a[d]||0),0):a.reduce((s,c)=>s+c*i,0)));return n===1&&(l=l[0]),r===1?l.map(i=>i[0]):l}const Yo=(...e)=>{e=K(e,"lab");let[t,n,r,...o]=e,[l,i,a]=m0([t,n,r]),[s,c,d]=gs(l,i,a);return[s,c,d,...o.length>0&&o[0]<1?[o[0]]:[]]};function m0(e){return or([[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],or([[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],e).map(t=>t**3))}const Jo=(...e)=>{let[t,n,r,...o]=K(e,"rgb");return[...g0(ys(t,n,r)),...o.length>0&&o[0]<1?[o[0]]:[]]};function g0(e){return or([[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],or([[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],e).map(t=>Math.cbrt(t)))}D.prototype.oklab=function(){return Jo(this._rgb)};const y0=(...e)=>new D(...e,"oklab");Object.assign(U,{oklab:y0}),q.format.oklab=Yo,q.autodetect.push({p:2,test:(...e)=>{if(e=K(e,"oklab"),W(e)==="array"&&e.length===3)return"oklab"}});const x0=(e,t,n)=>{let r=e.oklab(),o=t.oklab();return new D(r[0]+n*(o[0]-r[0]),r[1]+n*(o[1]-r[1]),r[2]+n*(o[2]-r[2]),"oklab")};pe.oklab=x0;const b0=(e,t,n)=>Qt(e,t,n,"oklch");pe.oklch=b0;const{pow:$r,sqrt:Vr,PI:Qr,cos:sl,sin:cl,atan2:T0}=Math;var v0=(e,t="lrgb",n=null)=>{let r=e.length;n||=Array.from(Array(r)).map(()=>1);let o=r/n.reduce(function(f,u){return f+u});if(n.forEach((f,u)=>{n[u]*=o}),e=e.map(f=>new D(f)),t==="lrgb")return k0(e,n);let l=e.shift(),i=l.get(t),a=[],s=0,c=0;for(let f=0;f<i.length;f++)if(i[f]=(i[f]||0)*n[0],a.push(isNaN(i[f])?0:n[0]),t.charAt(f)==="h"&&!isNaN(i[f])){let u=i[f]/180*Qr;s+=sl(u)*n[0],c+=cl(u)*n[0]}let d=l.alpha()*n[0];e.forEach((f,u)=>{let h=f.get(t);d+=f.alpha()*n[u+1];for(let p=0;p<i.length;p++)if(!isNaN(h[p]))if(a[p]+=n[u+1],t.charAt(p)==="h"){let T=h[p]/180*Qr;s+=sl(T)*n[u+1],c+=cl(T)*n[u+1]}else i[p]+=h[p]*n[u+1]});for(let f=0;f<i.length;f++)if(t.charAt(f)==="h"){let u=T0(c/a[f],s/a[f])/Qr*180;for(;u<0;)u+=360;for(;u>=360;)u-=360;i[f]=u}else i[f]=i[f]/a[f];return d/=r,new D(i,t).alpha(d>.99999?1:d,!0)};const k0=(e,t)=>{let n=e.length,r=[0,0,0,0];for(let o=0;o<e.length;o++){let l=e[o],i=t[o]/n,a=l._rgb;r[0]+=$r(a[0],2)*i,r[1]+=$r(a[1],2)*i,r[2]+=$r(a[2],2)*i,r[3]+=a[3]*i}return r[0]=Vr(r[0]),r[1]=Vr(r[1]),r[2]=Vr(r[2]),r[3]>.9999999&&(r[3]=1),new D(Ho(r))},{pow:w0}=Math;function ir(e){let t="rgb",n=U("#ccc"),r=0,o=[0,1],l=[0,1],i=[],a=[0,0],s=!1,c=[],d=!1,f=0,u=1,h=!1,p={},T=!0,b=1,y=function(v){if(v||=["#fff","#000"],v&&W(v)==="string"&&U.brewer&&U.brewer[v.toLowerCase()]&&(v=U.brewer[v.toLowerCase()]),W(v)==="array"){v.length===1&&(v=[v[0],v[0]]),v=v.slice(0);for(let L=0;L<v.length;L++)v[L]=U(v[L]);i.length=0;for(let L=0;L<v.length;L++)i.push(L/(v.length-1))}return w(),c=v},F=function(v){if(s!=null){let L=s.length-1,x=0;for(;x<L&&v>=s[x];)x++;return x-1}return 0},B=v=>v,R=v=>v,S=function(v,L){let x,E;if(L??=!1,isNaN(v)||v===null)return n;E=L?v:s&&s.length>2?F(v)/(s.length-2):u===f?1:(v-f)/(u-f),E=R(E),L||(E=B(E)),b!==1&&(E=w0(E,b)),E=a[0]+E*(1-a[0]-a[1]),E=vt(E,0,1);let N=Math.floor(E*1e4);if(T&&p[N])x=p[N];else{if(W(c)==="array")for(let I=0;I<i.length;I++){let j=i[I];if(E<=j){x=c[I];break}if(E>=j&&I===i.length-1){x=c[I];break}if(E>j&&E<i[I+1]){E=(E-j)/(i[I+1]-j),x=U.interpolate(c[I],c[I+1],E,t);break}}else W(c)==="function"&&(x=c(E));T&&(p[N]=x)}return x};var w=()=>p={};y(e);let C=function(v){let L=U(S(v));return d&&L[d]?L[d]():L};return C.classes=function(v){if(v!=null){if(W(v)==="array")s=v,o=[v[0],v[v.length-1]];else{let L=U.analyze(o);s=v===0?[L.min,L.max]:U.limits(L,"e",v)}return C}return s},C.domain=function(v){if(!arguments.length)return l;l=v.slice(0),f=v[0],u=v[v.length-1],i=[];let L=c.length;if(v.length===L&&f!==u)for(let x of Array.from(v))i.push((x-f)/(u-f));else{for(let x=0;x<L;x++)i.push(x/(L-1));if(v.length>2){let x=v.map((N,I)=>I/(v.length-1)),E=v.map(N=>(N-f)/(u-f));E.every((N,I)=>x[I]===N)||(R=N=>{if(N<=0||N>=1)return N;let I=0;for(;N>=E[I+1];)I++;let j=(N-E[I])/(E[I+1]-E[I]);return x[I]+j*(x[I+1]-x[I])})}}return o=[f,u],C},C.mode=function(v){return arguments.length?(t=v,w(),C):t},C.range=function(v,L){return y(v),C},C.out=function(v){return d=v,C},C.spread=function(v){return arguments.length?(r=v,C):r},C.correctLightness=function(v){return v??=!0,h=v,w(),B=h?function(L){let x=S(0,!0).lab()[0],E=S(1,!0).lab()[0],N=x>E,I=S(L,!0).lab()[0],j=x+(E-x)*L,X=I-j,ee=0,te=1,me=20;for(;Math.abs(X)>.01&&me-- >0;)(function(){return N&&(X*=-1),X<0?(ee=L,L+=(te-L)*.5):(te=L,L+=(ee-L)*.5),I=S(L,!0).lab()[0],X=I-j})();return L}:L=>L,C},C.padding=function(v){return v==null?a:(W(v)==="number"&&(v=[v,v]),a=v,C)},C.colors=function(v,L){arguments.length<2&&(L="hex");let x=[];if(arguments.length===0)x=c.slice(0);else if(v===1)x=[C(.5)];else if(v>1){let E=o[0],N=o[1]-E;x=B0(0,v).map(I=>C(E+I/(v-1)*N))}else{e=[];let E=[];if(s&&s.length>2)for(let N=1,I=s.length,j=1<=I;j?N<I:N>I;j?N++:N--)E.push((s[N-1]+s[N])*.5);else E=o;x=E.map(N=>C(N))}return U[L]&&(x=x.map(E=>E[L]())),x},C.cache=function(v){return v==null?T:(T=v,C)},C.gamma=function(v){return v==null?b:(b=v,C)},C.nodata=function(v){return v==null?n:(n=U(v),C)},C}function B0(e,t,n){let r=[],o=e<t,l=t;for(let i=e;o?i<l:i>l;o?i++:i--)r.push(i);return r}const E0=function(e){let t=[1,1];for(let n=1;n<e;n++){let r=[1];for(let o=1;o<=t.length;o++)r[o]=(t[o]||0)+t[o-1];t=r}return t},D0=function(e){let t,n,r,o;if(e=e.map(l=>new D(l)),e.length===2)[n,r]=e.map(l=>l.lab()),t=function(l){return new D([0,1,2].map(i=>n[i]+l*(r[i]-n[i])),"lab")};else if(e.length===3)[n,r,o]=e.map(l=>l.lab()),t=function(l){return new D([0,1,2].map(i=>(1-l)*(1-l)*n[i]+2*(1-l)*l*r[i]+l*l*o[i]),"lab")};else if(e.length===4){let l;[n,r,o,l]=e.map(i=>i.lab()),t=function(i){return new D([0,1,2].map(a=>(1-i)*(1-i)*(1-i)*n[a]+3*(1-i)*(1-i)*i*r[a]+3*(1-i)*i*i*o[a]+i*i*i*l[a]),"lab")}}else if(e.length>=5){let l,i,a;l=e.map(s=>s.lab()),a=e.length-1,i=E0(a),t=function(s){let c=1-s;return new D([0,1,2].map(d=>l.reduce((f,u,h)=>f+i[h]*c**(a-h)*s**h*u[d],0)),"lab")}}else throw RangeError("No point in running bezier with only one color.");return t};var A0=e=>{let t=D0(e);return t.scale=()=>ir(t),t};const{round:dl}=Math;D.prototype.rgb=function(e=!0){return e===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(dl)},D.prototype.rgba=function(e=!0){return this._rgb.slice(0,4).map((t,n)=>n<3?e===!1?t:dl(t):t)};const F0=(...e)=>new D(...e,"rgb");Object.assign(U,{rgb:F0}),q.format.rgb=(...e)=>{let t=K(e,"rgba");return t[3]===void 0&&(t[3]=1),t},q.autodetect.push({p:3,test:(...e)=>{if(e=K(e,"rgba"),W(e)==="array"&&(e.length===3||e.length===4&&W(e[3])=="number"&&e[3]>=0&&e[3]<=1))return"rgb"}});const Re=(e,t,n)=>{if(!Re[n])throw Error("unknown blend mode "+n);return Re[n](e,t)},lt=e=>(t,n)=>{let r=U(n).rgb(),o=U(t).rgb();return U.rgb(e(r,o))},at=e=>(t,n)=>{let r=[];return r[0]=e(t[0],n[0]),r[1]=e(t[1],n[1]),r[2]=e(t[2],n[2]),r},N0=e=>e,O0=(e,t)=>e*t/255,L0=(e,t)=>e>t?t:e,R0=(e,t)=>e>t?e:t,C0=(e,t)=>255*(1-(1-e/255)*(1-t/255)),I0=(e,t)=>t<128?2*e*t/255:255*(1-2*(1-e/255)*(1-t/255)),S0=(e,t)=>255*(1-(1-t/255)/(e/255)),P0=(e,t)=>e===255?255:(e=t/255*255/(1-e/255),e>255?255:e);Re.normal=lt(at(N0)),Re.multiply=lt(at(O0)),Re.screen=lt(at(C0)),Re.overlay=lt(at(I0)),Re.darken=lt(at(L0)),Re.lighten=lt(at(R0)),Re.dodge=lt(at(P0)),Re.burn=lt(at(S0));const{pow:z0,sin:M0,cos:G0}=Math;function q0(e=300,t=-1.5,n=1,r=1,o=[0,1]){let l=0,i;W(o)==="array"?i=o[1]-o[0]:(i=0,o=[o,o]);let a=function(s){let c=Qe*((e+120)/360+t*s),d=z0(o[0]+i*s,r),f=(l===0?n:n[0]+s*l)*d*(1-d)/2,u=G0(c),h=M0(c),p=d+f*(-.14861*u+1.78277*h),T=d+f*(-.29227*u-.90649*h),b=d+1.97294*u*f;return U(Ho([p*255,T*255,b*255,1]))};return a.start=function(s){return s==null?e:(e=s,a)},a.rotations=function(s){return s==null?t:(t=s,a)},a.gamma=function(s){return s==null?r:(r=s,a)},a.hue=function(s){return s==null?n:(n=s,W(n)==="array"?(l=n[1]-n[0],l===0&&(n=n[1])):l=0,a)},a.lightness=function(s){return s==null?o:(W(s)==="array"?(o=s,i=s[1]-s[0]):(o=[s,s],i=0),a)},a.scale=()=>U.scale(a),a.hue(n),a}const{floor:K0,random:X0}=Math;var j0=(e=X0)=>{let t="#";for(let n=0;n<6;n++)t+="0123456789abcdef".charAt(K0(e()*16));return new D(t,"hex")};const{log:fl,pow:W0,floor:Z0,abs:U0}=Math;function vs(e,t=null){let n={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return W(e)==="object"&&(e=Object.values(e)),e.forEach(r=>{t&&W(r)==="object"&&(r=r[t]),r!=null&&!isNaN(r)&&(n.values.push(r),n.sum+=r,r<n.min&&(n.min=r),r>n.max&&(n.max=r),n.count+=1)}),n.domain=[n.min,n.max],n.limits=(r,o)=>ks(n,r,o),n}function ks(e,t="equal",n=7){W(e)=="array"&&(e=vs(e));let{min:r,max:o}=e,l=e.values.sort((a,s)=>a-s);if(n===1)return[r,o];let i=[];if(t.substr(0,1)==="c"&&(i.push(r),i.push(o)),t.substr(0,1)==="e"){i.push(r);for(let a=1;a<n;a++)i.push(r+a/n*(o-r));i.push(o)}else if(t.substr(0,1)==="l"){if(r<=0)throw Error("Logarithmic scales are only possible for values > 0");let a=Math.LOG10E*fl(r),s=Math.LOG10E*fl(o);i.push(r);for(let c=1;c<n;c++)i.push(W0(10,a+c/n*(s-a)));i.push(o)}else if(t.substr(0,1)==="q"){i.push(r);for(let a=1;a<n;a++){let s=(l.length-1)*a/n,c=Z0(s);if(c===s)i.push(l[c]);else{let d=s-c;i.push(l[c]*(1-d)+l[c+1]*d)}}i.push(o)}else if(t.substr(0,1)==="k"){let a,s=l.length,c=Array(s),d=Array(n),f=!0,u=0,h=null;h=[],h.push(r);for(let b=1;b<n;b++)h.push(r+b/n*(o-r));for(h.push(o);f;){for(let y=0;y<n;y++)d[y]=0;for(let y=0;y<s;y++){let F=l[y],B=Number.MAX_VALUE,R;for(let S=0;S<n;S++){let w=U0(h[S]-F);w<B&&(B=w,R=S),d[R]++,c[y]=R}}let b=Array(n);for(let y=0;y<n;y++)b[y]=null;for(let y=0;y<s;y++)a=c[y],b[a]===null?b[a]=l[y]:b[a]+=l[y];for(let y=0;y<n;y++)b[y]*=1/d[y];f=!1;for(let y=0;y<n;y++)if(b[y]!==h[y]){f=!0;break}h=b,u++,u>200&&(f=!1)}let p={};for(let b=0;b<n;b++)p[b]=[];for(let b=0;b<s;b++)a=c[b],p[a].push(l[b]);let T=[];for(let b=0;b<n;b++)T.push(p[b][0]),T.push(p[b][p[b].length-1]);T=T.sort((b,y)=>b-y),i.push(T[0]);for(let b=1;b<T.length;b+=2){let y=T[b];!isNaN(y)&&i.indexOf(y)===-1&&i.push(y)}}return i}var H0=(e,t)=>{e=new D(e),t=new D(t);let n=e.luminance(),r=t.luminance();return n>r?(n+.05)/(r+.05):(r+.05)/(n+.05)};const ul=.027,hl=1.14,Pn=.022;var $0=(e,t)=>{e=new D(e),t=new D(t),e.alpha()<1&&(e=jt(t,e,e.alpha(),"rgb"));let n=pl(...e.rgb()),r=pl(...t.rgb()),o=n>=Pn?n:n+(Pn-n)**1.414,l=r>=Pn?r:r+(Pn-r)**1.414,i=l**.56-o**.57,a=l**.65-o**.62,s=Math.abs(l-o)<5e-4?0:o<l?i*hl:a*hl;return(Math.abs(s)<.1?0:s>0?s-ul:s+ul)*100};function pl(e,t,n){return .2126729*(e/255)**2.4+.7151522*(t/255)**2.4+.072175*(n/255)**2.4}const{sqrt:He,pow:oe,min:V0,max:Q0,atan2:ml,abs:gl,cos:zn,sin:yl,exp:Y0,PI:xl}=Math;function J0(e,t,n=1,r=1,o=1){var l=function(ke){return 360*ke/(2*xl)},i=function(ke){return 2*xl*ke/360};e=new D(e),t=new D(t);let[a,s,c]=Array.from(e.lab()),[d,f,u]=Array.from(t.lab()),h=(a+d)/2,p=(He(oe(s,2)+oe(c,2))+He(oe(f,2)+oe(u,2)))/2,T=.5*(1-He(oe(p,7)/(oe(p,7)+oe(25,7)))),b=s*(1+T),y=f*(1+T),F=He(oe(b,2)+oe(c,2)),B=He(oe(y,2)+oe(u,2)),R=(F+B)/2,S=l(ml(c,b)),w=l(ml(u,y)),C=S>=0?S:S+360,v=w>=0?w:w+360,L=gl(C-v)>180?(C+v+360)/2:(C+v)/2,x=1-.17*zn(i(L-30))+.24*zn(i(2*L))+.32*zn(i(3*L+6))-.2*zn(i(4*L-63)),E=v-C;E=gl(E)<=180?E:v<=C?E+360:E-360,E=2*He(F*B)*yl(i(E)/2);let N=d-a,I=B-F,j=1+.015*oe(h-50,2)/He(20+oe(h-50,2)),X=1+.045*R,ee=1+.015*R*x,te=30*Y0(-oe((L-275)/25,2)),me=-(2*He(oe(R,7)/(oe(R,7)+oe(25,7))))*yl(2*i(te));return Q0(0,V0(100,He(oe(N/(n*j),2)+oe(I/(r*X),2)+oe(E/(o*ee),2)+me*(I/(r*X))*(E/(o*ee)))))}function _0(e,t,n="lab"){e=new D(e),t=new D(t);let r=e.get(n),o=t.get(n),l=0;for(let i in r){let a=(r[i]||0)-(o[i]||0);l+=a*a}return Math.sqrt(l)}var ey=(...e)=>{try{return new D(...e),!0}catch{return!1}},ty={cool(){return ir([U.hsl(180,1,.9),U.hsl(250,.7,.4)])},hot(){return ir(["#000","#f00","#ff0","#fff"]).mode("rgb")}};const Eo={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},ws=Object.keys(Eo),bl=new Map(ws.map(e=>[e.toLowerCase(),e])),ny=typeof Proxy=="function"?new Proxy(Eo,{get(e,t){let n=t.toLowerCase();if(bl.has(n))return e[bl.get(n)]},getOwnPropertyNames(){return Object.getOwnPropertyNames(ws)}}):Eo,ry=(...e)=>{e=K(e,"cmyk");let[t,n,r,o]=e,l=e.length>4?e[4]:1;return o===1?[0,0,0,l]:[t>=1?0:255*(1-t)*(1-o),n>=1?0:255*(1-n)*(1-o),r>=1?0:255*(1-r)*(1-o),l]},{max:Tl}=Math,oy=(...e)=>{let[t,n,r]=K(e,"rgb");t/=255,n/=255,r/=255;let o=1-Tl(t,Tl(n,r)),l=o<1?1/(1-o):0;return[(1-t-o)*l,(1-n-o)*l,(1-r-o)*l,o]};D.prototype.cmyk=function(){return oy(this._rgb)};const iy=(...e)=>new D(...e,"cmyk");Object.assign(U,{cmyk:iy}),q.format.cmyk=ry,q.autodetect.push({p:2,test:(...e)=>{if(e=K(e,"cmyk"),W(e)==="array"&&e.length===4)return"cmyk"}});const ly=(...e)=>{let t=K(e,"hsla"),n=Vt(e)||"lsa";return t[0]=Ne(t[0]||0)+"deg",t[1]=Ne(t[1]*100)+"%",t[2]=Ne(t[2]*100)+"%",n==="hsla"||t.length>3&&t[3]<1?(t[3]="/ "+(t.length>3?t[3]:1),n="hsla"):t.length=3,`${n.substr(0,3)}(${t.join(" ")})`},ay=(...e)=>{let t=K(e,"lab"),n=Vt(e)||"lab";return t[0]=Ne(t[0])+"%",t[1]=Ne(t[1]),t[2]=Ne(t[2]),n==="laba"||t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`lab(${t.join(" ")})`},sy=(...e)=>{let t=K(e,"lch"),n=Vt(e)||"lab";return t[0]=Ne(t[0])+"%",t[1]=Ne(t[1]),t[2]=isNaN(t[2])?"none":Ne(t[2])+"deg",n==="lcha"||t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`lch(${t.join(" ")})`},cy=(...e)=>{let t=K(e,"lab");return t[0]=Ne(t[0]*100)+"%",t[1]=ko(t[1]),t[2]=ko(t[2]),t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`oklab(${t.join(" ")})`},Bs=(...e)=>{let[t,n,r,...o]=K(e,"rgb"),[l,i,a]=Jo(t,n,r),[s,c,d]=bs(l,i,a);return[s,c,d,...o.length>0&&o[0]<1?[o[0]]:[]]},dy=(...e)=>{let t=K(e,"lch");return t[0]=Ne(t[0]*100)+"%",t[1]=ko(t[1]),t[2]=isNaN(t[2])?"none":Ne(t[2])+"deg",t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`oklch(${t.join(" ")})`},{round:Yr}=Math,fy=(...e)=>{let t=K(e,"rgba"),n=Vt(e)||"rgb";if(n.substr(0,3)==="hsl")return ly(Ts(t),n);if(n.substr(0,3)==="lab"){let r=bn();Ye("d50");let o=ay(Vo(t),n);return Ye(r),o}if(n.substr(0,3)==="lch"){let r=bn();Ye("d50");let o=sy(wo(t),n);return Ye(r),o}return n.substr(0,5)==="oklab"?cy(Jo(t)):n.substr(0,5)==="oklch"?dy(Bs(t)):(t[0]=Yr(t[0]),t[1]=Yr(t[1]),t[2]=Yr(t[2]),(n==="rgba"||t.length>3&&t[3]<1)&&(t[3]="/ "+(t.length>3?t[3]:1),n="rgba"),`${n.substr(0,3)}(${t.slice(0,n==="rgb"?3:4).join(" ")})`)},Es=(...e)=>{e=K(e,"lch");let[t,n,r,...o]=e,[l,i,a]=xs(t,n,r),[s,c,d]=Yo(l,i,a);return[s,c,d,...o.length>0&&o[0]<1?[o[0]]:[]]},Je="((?:-?\\d+)|(?:-?\\d+(?:\\.\\d+)?)%|none)",ze="((?:-?(?:\\d+(?:\\.\\d*)?|\\.\\d+)%?)|none)",lr="((?:-?(?:\\d+(?:\\.\\d*)?|\\.\\d+)%)|none)",_o="\\s*,\\s*",xr="((?:-?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:deg)?)|none)",Yt="\\s*(?:\\/\\s*((?:[01]|[01]?\\.\\d+)|\\d+(?:\\.\\d+)?%))?",Ds=RegExp("^rgba?\\(\\s*"+[Je,Je,Je].join("\\s+")+Yt+"\\)$"),As=RegExp("^rgb\\(\\s*"+[Je,Je,Je].join(_o)+"\\s*\\)$"),Fs=RegExp("^rgba\\(\\s*"+[Je,Je,Je,ze].join(_o)+"\\s*\\)$"),Ns=RegExp("^hsla?\\(\\s*"+[xr,lr,lr].join("\\s+")+Yt+"\\)$"),Os=RegExp("^hsl?\\(\\s*"+[xr,lr,lr].join(_o)+"\\s*\\)$"),Ls=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Rs=RegExp("^lab\\(\\s*"+[ze,ze,ze].join("\\s+")+Yt+"\\)$"),Cs=RegExp("^lch\\(\\s*"+[ze,ze,xr].join("\\s+")+Yt+"\\)$"),Is=RegExp("^oklab\\(\\s*"+[ze,ze,ze].join("\\s+")+Yt+"\\)$"),Ss=RegExp("^oklch\\(\\s*"+[ze,ze,xr].join("\\s+")+Yt+"\\)$"),{round:Ps}=Math,Rt=e=>e.map((t,n)=>n<=2?vt(Ps(t),0,255):t),ie=(e,t=0,n=100,r=!1)=>(typeof e=="string"&&e.endsWith("%")&&(e=parseFloat(e.substring(0,e.length-1))/100,e=r?t+(e+1)*.5*(n-t):t+e*(n-t)),+e),ge=(e,t)=>e==="none"?t:e,Do=e=>{if(e=e.toLowerCase().trim(),e==="transparent")return[0,0,0,0];let t;if(q.format.named)try{return q.format.named(e)}catch{}if((t=e.match(Ds))||(t=e.match(As))){let n=t.slice(1,4);for(let o=0;o<3;o++)n[o]=+ie(ge(n[o],0),0,255);n=Rt(n);let r=t[4]===void 0?1:+ie(t[4],0,1);return n[3]=r,n}if(t=e.match(Fs)){let n=t.slice(1,5);for(let r=0;r<4;r++)n[r]=+ie(n[r],0,255);return n}if((t=e.match(Ns))||(t=e.match(Os))){let n=t.slice(1,4);n[0]=+ge(n[0].replace("deg",""),0),n[1]=ie(ge(n[1],0),0,100)*.01,n[2]=ie(ge(n[2],0),0,100)*.01;let r=Rt(Bo(n));return r[3]=t[4]===void 0?1:+ie(t[4],0,1),r}if(t=e.match(Ls)){let n=t.slice(1,4);n[1]*=.01,n[2]*=.01;let r=Bo(n);for(let o=0;o<3;o++)r[o]=Ps(r[o]);return r[3]=+t[4],r}if(t=e.match(Rs)){let n=t.slice(1,4);n[0]=ie(ge(n[0],0),0,100),n[1]=ie(ge(n[1],0),-125,125,!0),n[2]=ie(ge(n[2],0),-125,125,!0);let r=bn();Ye("d50");let o=Rt($o(n));return Ye(r),o[3]=t[4]===void 0?1:+ie(t[4],0,1),o}if(t=e.match(Cs)){let n=t.slice(1,4);n[0]=ie(n[0],0,100),n[1]=ie(ge(n[1],0),0,150,!1),n[2]=+ge(n[2].replace("deg",""),0);let r=bn();Ye("d50");let o=Rt(Qo(n));return Ye(r),o[3]=t[4]===void 0?1:+ie(t[4],0,1),o}if(t=e.match(Is)){let n=t.slice(1,4);n[0]=ie(ge(n[0],0),0,1),n[1]=ie(ge(n[1],0),-.4,.4,!0),n[2]=ie(ge(n[2],0),-.4,.4,!0);let r=Rt(Yo(n));return r[3]=t[4]===void 0?1:+ie(t[4],0,1),r}if(t=e.match(Ss)){let n=t.slice(1,4);n[0]=ie(ge(n[0],0),0,1),n[1]=ie(ge(n[1],0),0,.4,!1),n[2]=+ge(n[2].replace("deg",""),0);let r=Rt(Es(n));return r[3]=t[4]===void 0?1:+ie(t[4],0,1),r}};Do.test=e=>Ds.test(e)||Ns.test(e)||Rs.test(e)||Cs.test(e)||Is.test(e)||Ss.test(e)||As.test(e)||Fs.test(e)||Os.test(e)||Ls.test(e)||e==="transparent",D.prototype.css=function(e){return fy(this._rgb,e)};const uy=(...e)=>new D(...e,"css");U.css=uy,q.format.css=Do,q.autodetect.push({p:5,test:(e,...t)=>{if(!t.length&&W(e)==="string"&&Do.test(e))return"css"}}),q.format.gl=(...e)=>{let t=K(e,"rgba");return t[0]*=255,t[1]*=255,t[2]*=255,t};const hy=(...e)=>new D(...e,"gl");U.gl=hy,D.prototype.gl=function(){let e=this._rgb;return[e[0]/255,e[1]/255,e[2]/255,e[3]]},D.prototype.hex=function(e){return ms(this._rgb,e)};const py=(...e)=>new D(...e,"hex");U.hex=py,q.format.hex=ps,q.autodetect.push({p:4,test:(e,...t)=>{if(!t.length&&W(e)==="string"&&[3,4,5,6,7,8,9].indexOf(e.length)>=0)return"hex"}});const{log:Mn}=Math,zs=e=>{let t=e/100,n,r,o;return t<66?(n=255,r=t<6?0:-155.25485562709179-.44596950469579133*(r=t-2)+104.49216199393888*Mn(r),o=t<20?0:-254.76935184120902+.8274096064007395*(o=t-10)+115.67994401066147*Mn(o)):(n=351.97690566805693+.114206453784165*(n=t-55)-40.25366309332127*Mn(n),r=325.4494125711974+.07943456536662342*(r=t-50)-28.0852963507957*Mn(r),o=255),[n,r,o,1]},{round:my}=Math,gy=(...e)=>{let t=K(e,"rgb"),n=t[0],r=t[2],o=1e3,l=4e4,i;for(;l-o>.4;){i=(l+o)*.5;let a=zs(i);a[2]/a[0]>=r/n?l=i:o=i}return my(i)};D.prototype.temp=D.prototype.kelvin=D.prototype.temperature=function(){return gy(this._rgb)};const Jr=(...e)=>new D(...e,"temp");Object.assign(U,{temp:Jr,kelvin:Jr,temperature:Jr}),q.format.temp=q.format.kelvin=q.format.temperature=zs,D.prototype.oklch=function(){return Bs(this._rgb)};const yy=(...e)=>new D(...e,"oklch");Object.assign(U,{oklch:yy}),q.format.oklch=Es,q.autodetect.push({p:2,test:(...e)=>{if(e=K(e,"oklch"),W(e)==="array"&&e.length===3)return"oklch"}}),Object.assign(U,{analyze:vs,average:v0,bezier:A0,blend:Re,brewer:ny,Color:D,colors:It,contrast:H0,contrastAPCA:$0,cubehelix:q0,deltaE:J0,distance:_0,input:q,interpolate:jt,limits:ks,mix:jt,random:j0,scale:ir,scales:ty,valid:ey});var Fe=U;const Ao=[.96,.907,.805,.697,.605,.547,.518,.445,.395,.34],vl=[.32,.16,.08,.04,0,0,.04,.08,.16,.32];function xy(e){let t=e.get("hsl.l");return Ao.reduce((n,r)=>Math.abs(r-t)<Math.abs(n-t)?r:n)}function by(e){let t=Fe(e),n=xy(t),r=Ao.findIndex(l=>l===n),o=Ao.map(l=>t.set("hsl.l",l)).map(l=>Fe(l)).map((l,i)=>{let a=vl[i]-vl[r];return a>=0?l.saturate(a):l.desaturate(a*-1)});return o[r]=Fe(e),{baseColorIndex:r,colors:o}}function Ty(e){return by(e).colors.map(t=>t.hex())}function ei(e){return td(e,t=>t===void 0)}function Wt(e){return e.summary??e.description}function Zt(e){return e.description??e.summary}function kl(e,t){return e[xt]===t}const xt="_stage",rn="_type",Fo="_layout";wn({DeploymentFqn:()=>Dy,EdgeId:()=>Oy,Fqn:()=>Ey,GlobalFqn:()=>ti,GroupElementKind:()=>Ms,MarkdownOrString:()=>ky,NodeId:()=>Ny,NoneIcon:()=>By,ProjectId:()=>vy,RelationId:()=>Fy,StepEdgeKind:()=>Ry,ViewId:()=>Ay,extractStep:()=>Xs,flattenMarkdownOrString:()=>wy,isGlobalFqn:()=>qs,isGroupElementKind:()=>Gs,isStepEdgeId:()=>br,splitGlobalFqn:()=>Ks,stepEdgeId:()=>Ly});function vy(e){return e}function ky(e){return typeof e=="string"?{txt:e}:e}function wy(e){if(qt(e))return null;let t=Ce(e)?e:e.txt??e.md;return Se(t?.trim())?t:null}const By="none";function Ey(e,t){return t?t+"."+e:e}const Ms="@group";function Gs(e){return e.kind===Ms}function Dy(e,t){return t?t+"."+e:e}function Ay(e){return e}function Fy(e){return e}function ti(e,t){return z(typeof e=="string"&&e!=""),"@"+e+"."+t}function qs(e){return e.startsWith("@")}function Ks(e){if(!e.startsWith("@"))return[null,e];let t=e.indexOf(".");if(t<2)throw Error("Invalid global FQN");return[e.slice(1,t),e.slice(t+1)]}function Ny(e){return e}function Oy(e){return e}function Ly(e,t){let n=`step-${String(e).padStart(2,"0")}`;return t?`${n}.${t}`:n}const Ry="@step";function br(e){return e.startsWith("step-")}function Xs(e){if(!br(e))throw Error(`Invalid step edge id: ${e}`);return parseFloat(e.slice(5))}let wt;(function(e){function t(s){return"model"in s&&!("project"in s)}e.isElementRef=t;function n(s){return"project"in s&&"model"in s}e.isImportRef=n;function r(s){if(Ce(s))throw Error(`Expected FqnRef, got: "${s}"`);if(n(s))return ti(s.project,s.model);if(t(s))return s.model;throw Error("Expected FqnRef.ModelRef or FqnRef.ImportRef")}e.flatten=r;function o(s){return t(s)||n(s)}e.isModelRef=o;function l(s){return"deployment"in s&&"element"in s}e.isInsideInstanceRef=l;function i(s){return"deployment"in s&&!("element"in s)}e.isDeploymentElementRef=i;function a(s){return i(s)||l(s)}e.isDeploymentRef=a})(wt||={});let on;(function(e){function t(d){return"wildcard"in d&&d.wildcard===!0}e.isWildcard=t;function n(d){return"ref"in d&&wt.isModelRef(d.ref)}e.isModelRef=n;function r(d){return"ref"in d&&wt.isDeploymentRef(d.ref)}e.isDeploymentRef=r;function o(d){return"elementKind"in d&&"isEqual"in d}e.isElementKindExpr=o;function l(d){return"elementTag"in d&&"isEqual"in d}e.isElementTagExpr=l;function i(d){return"where"in d&&s(d.where.expr)}e.isWhere=i;function a(d){return"custom"in d&&(s(d.custom.expr)||i(d.custom.expr))}e.isCustom=a;function s(d){return t(d)||n(d)||r(d)||o(d)||l(d)}e.is=s;function c(d){return a(d)&&(d=d.custom.expr),i(d)&&(d=d.where.expr),d}e.unwrap=c})(on||={});let ln;(function(e){function t(c){return"source"in c&&"target"in c}e.isDirect=t;function n(c){return"incoming"in c}e.isIncoming=n;function r(c){return"outgoing"in c}e.isOutgoing=r;function o(c){return"inout"in c}e.isInOut=o;function l(c){return"where"in c&&(t(c.where.expr)||n(c.where.expr)||r(c.where.expr)||o(c.where.expr))}e.isWhere=l;function i(c){return"customRelation"in c}e.isCustom=i;function a(c){return t(c)||n(c)||r(c)||o(c)}e.is=a;function s(c){return i(c)&&(c=c.customRelation.expr),l(c)&&(c=c.where.expr),c}e.unwrap=s})(ln||={});let Cy;(function(e){function t(i){return"where"in i}e.isWhere=t;function n(i){return ln.isWhere(i)}e.isRelationWhere=n;function r(i){return on.isWhere(i)}e.isFqnExprWhere=r;function o(i){return on.is(i)||on.isWhere(i)||on.isCustom(i)}e.isFqnExpr=o;function l(i){return ln.is(i)||ln.isWhere(i)||ln.isCustom(i)}e.isRelation=l})(Cy||={});let an;(function(e){function t(c){return"wildcard"in c&&c.wildcard===!0}e.isWildcard=t;function n(c){return"ref"in c&&wt.isModelRef(c.ref)}e.isModelRef=n;function r(c){return"elementKind"in c&&"isEqual"in c}e.isElementKindExpr=r;function o(c){return"elementTag"in c&&"isEqual"in c}e.isElementTagExpr=o;function l(c){return"where"in c&&a(c.where.expr)}e.isWhere=l;function i(c){return"custom"in c&&(a(c.custom.expr)||l(c.custom.expr))}e.isCustom=i;function a(c){return t(c)||n(c)||r(c)||o(c)}e.is=a;function s(c){return i(c)&&(c=c.custom.expr),l(c)&&(c=c.where.expr),c}e.unwrap=s})(an||={});let sn;(function(e){function t(c){return"source"in c&&"target"in c}e.isDirect=t;function n(c){return"incoming"in c}e.isIncoming=n;function r(c){return"outgoing"in c}e.isOutgoing=r;function o(c){return"inout"in c}e.isInOut=o;function l(c){return"where"in c&&(t(c.where.expr)||n(c.where.expr)||r(c.where.expr)||o(c.where.expr))}e.isWhere=l;function i(c){return"customRelation"in c}e.isCustom=i;function a(c){return t(c)||n(c)||r(c)||o(c)}e.is=a;function s(c){return i(c)&&(c=c.customRelation.expr),l(c)&&(c=c.where.expr),c}e.unwrap=s})(sn||={});let Iy;(function(e){function t(i){return"where"in i}e.isWhere=t;function n(i){return sn.isWhere(i)}e.isRelationWhere=n;function r(i){return an.isWhere(i)}e.isFqnExprWhere=r;function o(i){return an.is(i)||an.isWhere(i)||an.isCustom(i)}e.isFqnExpr=o;function l(i){return sn.is(i)||sn.isWhere(i)||sn.isCustom(i)}e.isRelationExpr=l})(Iy||={});function Sy(e){return Se(e.kind)&&!Se(e.element)}const wl={fill:"#3b82f6",stroke:"#2563eb",hiContrast:"#eff6ff",loContrast:"#bfdbfe"},Bl={fill:"#0284c7",stroke:"#0369a1",hiContrast:"#f0f9ff",loContrast:"#B6ECF7"},El={fill:"#64748b",stroke:"#475569",hiContrast:"#f8fafc",loContrast:"#cbd5e1"},Py={primary:wl,blue:wl,secondary:Bl,sky:Bl,muted:El,slate:El,gray:{fill:"#737373",stroke:"#525252",hiContrast:"#fafafa",loContrast:"#d4d4d4"},red:{fill:"#AC4D39",stroke:"#853A2D",hiContrast:"#FBD3CB",loContrast:"#f5b2a3"},green:{fill:"#428a4f",stroke:"#2d5d39",hiContrast:"#f8fafc",loContrast:"#c2f0c2"},amber:{fill:"#A35829",stroke:"#7E451D",hiContrast:"#FFE0C2",loContrast:"#f9b27c"},indigo:{fill:"#6366f1",stroke:"#4f46e5",hiContrast:"#eef2ff",loContrast:"#c7d2fe"}},zy={line:"#8D8D8D",labelBg:"#18191B",label:"#C9C9C9"},Dl={line:"#64748b",labelBg:"#0f172a",label:"#cbd5e1"},Al={line:"#3b82f6",labelBg:"#172554",label:"#60a5fa"},Fl={line:"#0ea5e9",labelBg:"#082f49",label:"#38bdf8"},My={amber:{line:"#b45309",labelBg:"#78350f",label:"#FFE0C2"},blue:Al,gray:zy,green:{line:"#15803d",labelBg:"#052e16",label:"#22c55e"},indigo:{line:"#6366f1",labelBg:"#1e1b4b",label:"#818cf8"},muted:Dl,primary:Al,red:{line:"#AC4D39",labelBg:"#b91c1c",label:"#f5b2a3"},secondary:Fl,sky:Fl,slate:Dl},Gy={sizes:{xs:{width:180,height:100},sm:{width:240,height:135},md:{width:320,height:180},lg:{width:420,height:234},xl:{width:520,height:290}},spacing:{xs:8,sm:10,md:16,lg:24,xl:32},textSizes:{xs:13.33,sm:16,md:19.2,lg:23.04,xl:27.65},iconSizes:{xs:24,sm:36,md:60,lg:82,xl:90}},E5=["rectangle","person","browser","mobile","cylinder","storage","queue","bucket","document","component"],qy=["amber","blue","gray","slate","green","indigo","muted","primary","red","secondary","sky"],D5=["tomato","grass","blue","ruby","orange","indigo","pink","teal","purple","amber","crimson","red","lime","yellow","violet"],js={tomato:lg.tomato9,grass:gg.grass9,blue:pg.blue9,ruby:sg.ruby9,orange:Tg.orange9,indigo:hg.indigo9,pink:dg.pink9,teal:mg.teal9,purple:fg.purple9,amber:bg.amber9,crimson:cg.crimson9,red:ag.red9,lime:yg.lime9,yellow:xg.yellow9,violet:ug.violet9};function Ky(e){return e in js}const Xy={colors:qy.reduce((e,t)=>(e[t]={elements:Py[t],relationships:My[t]},e),{}),...Gy};function jy(e){z(Fe.valid(e),`Invalid color: ${e}`);let t=Ty(e),n=t[6],r=Wy(n);return{elements:{fill:n,stroke:t[7],...r},relationships:{line:t[4],label:t[3],labelBg:t[9]}}}function Wy(e){let t=Fe(e),n=t.brighten(2),r=t.darken(2),o,l,i,a;do o=n,l=r,n=n.brighten(1),r=r.darken(1),i=Fe.contrastAPCA(t,n),a=Fe.contrastAPCA(t,r);while(Math.abs(i)<60&&Math.abs(a)<60&&(!Yn(n,o)||!Yn(r,l)));return Math.abs(i)>Math.abs(a)?{hiContrast:n.brighten(.4).hex(),loContrast:n.hex()}:{hiContrast:r.darken(.4).hex(),loContrast:r.hex()}}function Zy(e,t){let n=t??6,r=Fe(e.fill),o=Fe(e.stroke),l=r.luminance()>.8,i=Me(fd(Fe.scale(l?[r.darken(.02).desaturate(.05),r.darken(.1).desaturate(.1)]:[r.shade(.12,"lch").desaturate(.05),r.shade(.35,"lch").desaturate(.4)]).mode("oklch").correctLightness().colors(n,null),Fe.scale(l?[o.darken(.04).desaturate(.05),o.darken(.12).desaturate(.1)]:[o.shade(.15,"lch").desaturate(.08),o.shade(.4,"lch").desaturate(.4)]).mode("oklch").correctLightness().colors(n,null)),pn(([a,s])=>({...e,fill:a.hex(),stroke:s.hex()})));return z(i.length===n,`Expected ${n} colors, got ${i.length}`),i}const Uy={color:"primary",size:"md",opacity:15,shape:"rectangle",group:{opacity:15,border:"dashed"},relationship:{color:"gray",line:"dashed",arrow:"normal"}},Hy=Xy,jn={theme:Hy,defaults:Uy};var $y=class No{theme;defaults;static DEFAULT=new No(jn);static from(t,n){if(!t&&!n)return this.DEFAULT;let{customCss:r,theme:o,defaults:l}={...t},i=Pl({theme:o},{defaults:{...l}},{theme:{colors:{...n}}},jn);return qt(r?.content)&&Yn(i,jn)?this.DEFAULT:new No(i,r)}constructor(t,n){this.config=t,this.customCss=n,this.theme=t.theme,this.defaults=t.defaults}get fingerprint(){return $(this,"fingerprint",()=>ng({config:this.config,customCss:this.customCss}))}get elementColors(){return this.theme.colors[this.defaults.color].elements}get relationshipColors(){return this.theme.colors[this.defaults.relationship.color].relationships}get groupColors(){let t=this.defaults.group?.color;if(!t)return this.elementColors;if(!this.isThemeColor(t))throw Error(`Default group color not found in theme: ${t}`);return $(this,"defaultGroup",()=>({...this.elementColors,...this.theme.colors[t].elements}))}isDefaultColor(t){return t===this.defaults.color}colors(t){return this.computeFrom(t??this.defaults.color)}compoundColorsCache=new So.default(t=>new de.default(n=>Zy(t,n)));colorsForCompounds(t,n){return this.compoundColorsCache.get(t).get(n??6)}fontSize(t){return t??=this.defaults.text??this.defaults.size,this.theme.textSizes[t]}padding(t){return t??=this.defaults.padding??this.defaults.size,this.theme.spacing[t]}iconSize(t){return t??=this.defaults.size,this.theme.iconSizes[t]}isThemeColor(t){return t in this.theme.colors}nodeSizes(t){let n=Vy(t,this.defaults.size);return{sizes:n,values:{sizes:this.theme.sizes[n.size],padding:this.padding(n.padding),textSize:this.fontSize(n.textSize),iconSize:this.iconSize(n.iconSize)}}}computeFrom(t){if(this.isThemeColor(t))return this.theme.colors[t];if(!Fe.valid(t))throw Error(`Invalid color value: "${t}" (not a theme color and not a valid CSS color)`);return jy(t)}equals(t){return t===this?!0:this.constructor===t.constructor?this.fingerprint===t.fingerprint:!1}tagColor(t){return this.isThemeColor(t)?this.theme.colors[t].elements:Ky(t)?this.computeFrom(js[t]).elements:this.computeFrom(t).elements}};function Vy({size:e,padding:t,textSize:n,iconSize:r,...o},l=jn.defaults.size){return e??=l,n??=e,t??=e,r??=e,{...o,size:e,padding:t,textSize:n,iconSize:r}}function A5(e){let t=typeof e=="string"?e:e.color;return t.startsWith("#")||t.startsWith("rgb")}function Qy(e){return"tag"in e}function Yy(e){return"kind"in e}function Jy(e){return"metadata"in e}function _y(e){return"participant"in e}function e4(e){return"not"in e}function t4(e){return"and"in e}function n4(e){return"or"in e}function Pt(e){switch(!0){case _y(e):{let t=e.participant;return r4(t,Pt(e.operator))}case Qy(e):{if(Ce(e.tag)||"eq"in e.tag){let n=Ce(e.tag)?e.tag:e.tag.eq;return r=>Array.isArray(r.tags)&&r.tags.includes(n)}let t=e.tag.neq;return n=>!Array.isArray(n.tags)||!n.tags.includes(t)}case Yy(e):{if(Ce(e.kind)||"eq"in e.kind){let n=Ce(e.kind)?e.kind:e.kind.eq;return r=>r.kind===n}let t=e.kind.neq;return n=>ne(n.kind)||n.kind!==t}case Jy(e):{let{key:t,value:n}=e.metadata;if(n===void 0)return o=>o.metadata!=null&&t in o.metadata&&o.metadata[t]!=null;if(Ce(n)||"eq"in n){let o=Ce(n)?n:n.eq;return l=>{if(!l.metadata)return!1;let i=l.metadata[t];return Array.isArray(i)?i.includes(o):i===o}}let r=n.neq;return o=>{if(!o.metadata)return!0;let l=o.metadata[t];return l==null?!0:Array.isArray(l)?!l.includes(r):l!==r}}case e4(e):return ql(Pt(e.not));case t4(e):return wc(e.and.map(Pt));case n4(e):return Ec(e.or.map(Pt));default:rs(e)}}function r4(e,t){return n=>{if(!n.source||!n.target)return!1;switch(e){case"source":return t(n.source);case"target":return t(n.target)}}}function o4(e){return e._type==="element"}function i4(e){return e._type==="dynamic"}function F5(e){return br(e)&&e.includes(".")?e.slice(0,e.indexOf(".")+1):null}const l4=Symbol.for("text"),a4=Symbol.for("html");var ve=class ue{static mdcache=new xi.default(500);static txtcache=new xi.default(500);static getOrCreateFromText(t){if(t=t.trimEnd(),t==="")return ue.EMPTY;let n=ue.txtcache.get(t);return n||(n=new ue({txt:t}),ue.txtcache.set(t,n),n)}static getOrCreateFromMarkdown(t){if(t=t.trimEnd(),t==="")return ue.EMPTY;let n=ue.mdcache.get(t);return n||(n=new ue({md:t}),ue.mdcache.set(t,n),n)}static memoize(t,n,r){return $(t,n,()=>ue.from(r))}static from(t){return t==null||t===ue.EMPTY?ue.EMPTY:t instanceof ue?t:typeof t=="string"?this.getOrCreateFromText(t):"isEmpty"in t&&t.isEmpty?ue.EMPTY:"md"in t?this.getOrCreateFromMarkdown(t.md):this.getOrCreateFromText(t.txt)}static EMPTY=new class extends ue{isEmpty=!0;nonEmpty=!1;isMarkdown=!1;$source=null;constructor(){super({txt:""})}get text(){return null}get md(){return null}get html(){return null}};$source;isEmpty;nonEmpty;isMarkdown;constructor(t){this.isMarkdown=!1,typeof t=="string"?(this.$source={txt:t},this.isEmpty=t.trim()===""):(this.$source=t,this.isEmpty=!0,"md"in t?(this.isEmpty=t.md==="",this.isMarkdown=!0):this.isEmpty=t.txt===""),this.nonEmpty=!this.isEmpty}get text(){if(this.isEmpty||this.$source===null)return"";let t=this.$source;return"txt"in t?t.txt:$(this,l4,()=>ig(t.md))}get md(){if(this.isEmpty||this.$source===null)return"";let t=this.$source;if("md"in t)return t.md;if("txt"in t)return t.txt;rs(t)}get html(){if(this.isEmpty||this.$source===null)return"";let t=this.$source;return"txt"in t?t.txt:$(this,a4,()=>og(t.md))}equals(t){return this===t?!0:t instanceof ue?this.isEmpty&&t.isEmpty?!0:this.isEmpty!==t.isEmpty||this.isMarkdown!==t.isMarkdown?!1:this.isMarkdown?this.$source?.md===t.$source?.md:this.$source?.txt===t.$source?.txt:!1}};function s4(e){return Array.isArray(e)&&e.length===2&&typeof e[0]=="number"&&typeof e[1]=="number"}function N5(e){return s4(e)?{x:e[0],y:e[1]}:[e.x,e.y]}const O5={center({x:e,y:t,width:n,height:r}){return{x:e+n/2,y:t+r/2}},toPoints({x:e,y:t,width:n,height:r}){return[{x:e,y:t},{x:e+n,y:t},{x:e+n,y:t+r},{x:e,y:t+r}]},fromPoints(e){let{x1:t,y1:n,x2:r,y2:o}=c4.fromPoints(e);return{x:t,y:n,width:r-t,height:o-n}},merge(...e){if(z(Xe(e,1),"No boxes provided"),e.length===1)return e[0];let t=e[0].x,n=e[0].y,r=e[0].x+e[0].width,o=e[0].y+e[0].height;for(let l=1;l<e.length;l++){let i=e[l];t=Math.min(t,i.x),n=Math.min(n,i.y),r=Math.max(r,i.x+i.width),o=Math.max(o,i.y+i.height)}return{x:Math.floor(t),y:Math.floor(n),width:Math.round(r-t),height:Math.round(o-n)}},fromRectBox(e){return{x:Math.min(e.x1,e.x2),y:Math.min(e.y1,e.y2),width:Math.abs(e.x2-e.x1),height:Math.abs(e.y2-e.y1)}},toRectBox(e){return{x1:e.x,y1:e.y,x2:e.x+e.width,y2:e.y+e.height}},expand(e,t){return t===0?e:{x:e.x-t,y:e.y-t,width:e.width+t*2,height:e.height+t*2}},shrink(e,t){return t===0?e:{x:e.x+t,y:e.y+t,width:e.width-t*2,height:e.height-t*2}},includes(e,t){return e===t?!0:e.x<=t.x&&e.y<=t.y&&e.x+e.width>=t.x+t.width&&e.y+e.height>=t.y+t.height}},c4={center({x1:e,y1:t,x2:n,y2:r}){return{x:(e+n)/2,y:(t+r)/2}},fromPoints(e){z(e.length>0,"At least one point is required");let t=1/0,n=1/0,r=-1/0,o=-1/0;for(let[l,i]of e)t=Math.min(t,l),n=Math.min(n,i),r=Math.max(r,l),o=Math.max(o,i);return{x1:t,y1:n,x2:r,y2:o}},merge(...e){z(e.length>0,"No boxes provided");let t=1/0,n=1/0,r=-1/0,o=-1/0;for(let l of e)t=Math.min(t,l.x1),n=Math.min(n,l.y1),r=Math.max(r,l.x2),o=Math.max(o,l.y2);return{x1:t,y1:n,x2:r,y2:o}},toBBox(e){return{x:e.x1,y:e.y1,width:e.x2-e.x1,height:e.y2-e.y1}},includes(e,t){return e===t?!0:e.x1<=t.x1&&e.y1<=t.y1&&e.x2>=t.x2&&e.y2>=t.y2}};var _r=class Le{constructor(t,n){this.x=t,this.y=n,z(typeof t=="number"&&!isNaN(t)&&isFinite(t)&&typeof n=="number"&&!isNaN(n)&&isFinite(n),`Invalid arguments for Vector: (${t}, ${n})`)}static create(...t){return t.length===2?new Le(t[0],t[1]):new Le(t[0].x,t[0].y)}static add(t,n){return{x:t.x+n.x,y:t.y+n.y}}static subtract(t,n){return{x:t.x-n.x,y:t.y-n.y}}static multiply(t,n){return{x:t.x*n,y:t.y*n}}static divide(t,n){return{x:t.x/n,y:t.y/n}}static dot(t,n){return t.x*n.x+t.y*n.y}add(t){return new Le(this.x+t.x,this.y+t.y)}subtract(t){return new Le(this.x-t.x,this.y-t.y)}multiply(t){return new Le(this.x*t,this.y*t)}divide(t){return new Le(this.x/t,this.y/t)}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}length(){return this.x===0&&this.y===0?0:Math.sqrt(this.x**2+this.y**2)}normalize(){let t=this.length();return t===0?new Le(0,0):new Le(this.x/t,this.y/t)}round(){return new Le(Math.round(this.x),Math.round(this.y))}trunc(){return new Le(Math.trunc(this.x),Math.trunc(this.y))}toObject(){return{x:this.x,y:this.y}}};function L5(...e){return e.length===1&&e[0]instanceof _r?e[0]:e.length===2?new _r(e[0],e[1]):new _r(e[0].x,e[0].y)}function d4(e){return Me(e,Gl(t=>!!t.notation),wr(mt("notation")),Br(Er(wr(mt("shape")),Br(Er(wr(mt("color")),Br(Er(pn(mt("kind")),cr())),cn(),pn(([t,n])=>({kinds:n,color:t})))),cn(),pi(([t,n])=>n.map(({color:r,kinds:o})=>({shape:t,color:r,kinds:o}))))),cn(),pi(([t,n])=>n.map(({shape:r,color:o,kinds:l})=>({title:t,shape:r,color:o,kinds:l}))),Kl(mt("shape"),mt("title"),[t=>t.kinds.length,"desc"]))}const ae=(e,t)=>e===t||ne(e)&&ne(t)?!1:!Yn(e,t);function f4(e,t){e.color=t.color,e.kind=t.kind,e.navigateTo=t.navigateTo??null,e.links=t.links?[...t.links]:null,e.tags=[...t.tags],ne(t.style.border)?delete e.style.border:e.style.border=t.style.border,Uc(t.style.opacity)?e.style.opacity=t.style.opacity:delete e.style.opacity,ne(t.style.multiple)?delete e.style.multiple:e.style.multiple=t.style.multiple}function u4(e,t,n){if(ae(t.icon??"none",e.icon??"none")){let r=Se(e.icon)&&e.icon!=="none";switch(!0){case(r&&Se(t.icon)&&t.icon!=="none"):return e.icon=t.icon,!0;case(r&&(ne(t.icon)||t.icon==="none")):return e.icon="none",!0;case(!r&&Se(t.icon)&&t.icon!=="none"):return n?(e.icon=t.icon,!0):!1}}return!0}function h4(e,t,n){let r=!0;return ae(e.style.iconColor,t.style.iconColor)&&(ne(t.style.iconColor)?delete e.style.iconColor:e.style.iconColor=t.style.iconColor),ae(e.style.iconSize,t.style.iconSize)&&(n?ne(t.style.iconSize)?delete e.style.iconSize:e.style.iconSize=t.style.iconSize:r=!1),ae(e.style.iconPosition,t.style.iconPosition)&&(n?ne(t.style.iconPosition)?delete e.style.iconPosition:e.style.iconPosition=t.style.iconPosition:r=!1),r}function Tr(e,t){return e?"md"in t?(e.md=t.md,delete e.txt,e):("txt"in t&&(e.txt=t.txt,delete e.md),e):t}function p4(e,t,n){let r=!0;return ae(e.title,t.title)&&(n?e.title=t.title:r=!1),ae(e.description,t.description)&&(ne(t.description)?delete e.description:n?e.description=Tr(e.description,t.description):r=!1),ae(e.technology,t.technology)&&(ne(t.technology)?delete e.technology:n?e.technology=t.technology:r=!1),r}function m4(e,t,n){return e.title=t.title,ne(t.description)?delete e.description:e.description=Tr(e.description,t.description),ne(t.technology)?delete e.technology:e.technology=t.technology,!0}function Ws(e,t){z(e.id===t.id,"applyManualLayout: view ids do not match"),z(e._stage==="layouted","applyManualLayout: expected layouted view"),z(t._stage==="layouted","applyManualLayout: expected layouted snapshot"),z(e._layout!=="manual","applyManualLayout: expected auto-layouted view");let n=new Set;e._type!==t._type&&n.add("type-changed");let r=g4(t.nodes,e.nodes,n),o=y4(t.edges,e.edges,n),l=d4(r);return yt(t,i=>{i.title=e.title??t.title,i.description=e.description??t.description,i.tags=e.tags?[...e.tags]:null,i.links=e.links?[...e.links]:null,i.sourcePath=e.sourcePath,i[Fo]="manual",l&&l.length>0?i.notation={nodes:l}:delete i.notation,i.nodes=Qn(r),i.edges=Qn(o),i4(e)&&i._type==="dynamic"&&(i.variant=e.variant),o4(e)&&i._type==="element"&&(e.viewOf?i.viewOf=e.viewOf:delete i.viewOf,e.extends?i.extends=e.extends:delete i.extends);let a=[...n];Xe(a,1)?i.drifts=a:(i.hash=e.hash,delete i.drifts)})}function g4(e,t,n){let r=new Map(t.map(l=>[l.id,l])),o=e.map(l=>{let i=r.get(l.id);return i?(r.delete(i.id),yt(l,a=>{f4(a,i);let s=new Set,c=l.children.length>0,d=i.children.length>0;(ae(a.modelRef,i.modelRef)||ae(a.deploymentRef,i.deploymentRef))&&s.add("modelRef-changed"),d&&!c&&s.add("became-compound"),!d&&c&&s.add("became-leaf"),ae(a.parent,i.parent)&&s.add("parent-changed");let f=a.width+5>=i.width&&a.height+5>=i.height;ae(a.shape,i.shape)&&(f?a.shape=i.shape:s.add("shape-changed")),h4(a,i,f)||s.add("label-changed"),u4(a,i,f&&d===c)||s.add("label-changed"),(c?m4:p4)(a,i,f)||s.add("label-changed"),ae(a.notes,i.notes)&&(ne(i.notes)?delete a.notes:a.notes=Tr(a.notes,i.notes)),ae(l.notation,i.notation)&&(a.notation=i.notation??null),c&&d&&tg(new Set(l.children),new Set(i.children)).size>0&&s.add("children-changed");let u=[...s];Xe(u,1)?(n.add("nodes-drift"),a.drifts=u):delete a.drifts})):(n.add("nodes-removed"),{...l,drifts:["removed"]})});return r.size>0&&n.add("nodes-added"),o}function y4(e,t,n){let r=new Map(t.map(l=>[l.id,l])),o=e.map(l=>{let i=r.get(l.id)??Me(r.values(),Tt(a=>a.source===l.source&&a.target===l.target),xn());return i&&r.delete(i.id),yt(l,a=>{if(!i){a.drifts=["removed"],n.add("edges-removed");return}let s=new Set,c=l.id===i.id;switch(!0){case(c&&l.source==i.source&&l.target==i.target):ae(a.dir??"forward",i.dir??"forward")&&s.add("direction-changed");break;case(c&&l.source==i.target&&l.target==i.source):l.source!==l.target&&s.add("direction-changed");break;case c:l.source!=i.source&&s.add("source-changed"),l.target!=i.target&&s.add("target-changed");break;default:z(l.id!=i.id,"Unexpected case in edge drift detection, ids should not match"),z(l.source==i.source,"Unexpected case in edge drift detection, sources should match"),z(l.target==i.target,"Unexpected case in edge drift detection, targets should match"),ae(a.dir??"forward",i.dir??"forward")&&s.add("direction-changed");break}if(a.color=i.color,a.line=i.line,a.navigateTo=i.navigateTo??null,a.tags=i.tags?[...i.tags]:null,ae(l.notes,i.notes)&&(ne(l.notes)!==ne(i.notes)&&s.add("notes-changed"),a.notes=i.notes??l.notes),i.astPath?a.astPath=i.astPath:delete a.astPath,ae(mi(l,["label","description","technology","labelBBox"]),mi(i,["label","description","technology","labelBBox"])))switch(!0){case(i.labelBBox&&!l.labelBBox):s.add("label-added");break;case(l.labelBBox&&!i.labelBBox):s.add("label-removed");break;case(!!l.labelBBox&&!!i.labelBBox):i.labelBBox.width*i.labelBBox.height>(l.labelBBox.width+5)*(l.labelBBox.height+5)&&(a.labelBBox.width=Math.round(i.labelBBox.width),a.labelBBox.height=Math.round(i.labelBBox.height)),ae(l.label,i.label)&&(ne(i.label)!==ne(l.label)&&s.add("label-changed"),a.label=i.label??l.label),ae(l.description,i.description)&&(ne(i.description)!==ne(l.description)&&s.add("label-changed"),i.description&&(a.description=Tr(l.description,i.description))),ae(l.technology,i.technology)&&(ne(i.technology)!==ne(l.technology)&&s.add("label-changed"),a.technology=i.technology??l.technology??null);break;default:z(!l.labelBBox,"Unexpected case in edge labelBBox drift detection"),z(!i.labelBBox,"Unexpected case in next labelBBox drift detection");break}let d=[...s];Xe(d,1)?(n.add("edges-drift"),a.drifts=d):delete a.drifts})});return r.size>0&&n.add("edges-added"),o}function x4(e,t){let{drifts:n,...r}=Ws(e,t);if(!n||n.length===0)return yt(e,d=>{delete d.drifts,d[Fo]="auto"});let o=new Set;n.includes("type-changed")&&o.add("type-changed");let l=new Map(r.nodes.map(d=>[d.id,d])),i=new Map(r.edges.map(d=>[d.id,d])),a=e.nodes.map(d=>{let f=l.get(d.id);return f&&l.delete(f.id),yt(d,u=>{if(!f){o.add("nodes-added"),u.drifts=["added"];return}f.drifts?(o.add("nodes-drift"),u.drifts=[...f.drifts]):delete u.drifts})});l.size>0&&o.add("nodes-removed");let s=e.edges.map(d=>{let f=i.get(d.id)??Me(i.values(),Tt(u=>u.source===d.source&&u.target===d.target),xn());return f&&i.delete(f.id),yt(d,u=>{if(!f){o.add("edges-added"),u.drifts=["added"];return}f.drifts?(o.add("edges-drift"),u.drifts=[...f.drifts]):delete u.drifts})});i.size>0&&o.add("edges-removed");let c=[...o];return yt(e,d=>{Xe(c,1)?d.drifts=c:delete d.drifts,d.nodes=Qn(a),d.edges=Qn(s),d[Fo]="auto"})}var Gn=class{Aux;id;_literalId;hierarchyLevel;imported;constructor(e,t){this.$model=e,this.$element=t,this.id=this.$element.id,this._literalId=this.$element.id;let[n,r]=Ks(this.id);n?(this.imported={from:n,fqn:r},this.hierarchyLevel=rr(r)):(this.imported=null,this.hierarchyLevel=rr(this.id))}get name(){return ls(this.id)}get parent(){return this.$model.parent(this)}get kind(){return this.$element.kind}get shape(){return this.style.shape}get color(){return this.style.color}get icon(){return this.style.icon??null}get tags(){return $(this,Symbol.for("tags"),()=>cr([...this.$element.tags??[],...this.$model.specification.elements[this.$element.kind]?.tags??[]]))}get metadata(){return this.$element.metadata??{}}get title(){return this.$element.title}get hasSummary(){return!!this.$element.summary&&!!this.$element.description&&!Io(this.$element.summary,this.$element.description)}get summary(){return ve.memoize(this,"summary",Wt(this.$element))}get description(){return ve.memoize(this,"description",Zt(this.$element))}get technology(){return this.$element.technology??null}get links(){return this.$element.links??[]}get defaultView(){return $(this,Symbol.for("defaultView"),()=>xn(this.scopedViews())??null)}get isRoot(){return this.parent===null}get style(){return $(this,"style",()=>ei({shape:this.$model.$styles.defaults.shape,color:this.$model.$styles.defaults.color,border:this.$model.$styles.defaults.border,opacity:this.$model.$styles.defaults.opacity,size:this.$model.$styles.defaults.size,padding:this.$model.$styles.defaults.padding,textSize:this.$model.$styles.defaults.text,iconPosition:this.$model.$styles.defaults.iconPosition,...this.$element.style}))}get projectId(){return this.imported?.from??this.$model.projectId}isAncestorOf(e){return Ee(this,e)}isDescendantOf(e){return Ee(e,this)}ancestors(){return this.$model.ancestors(this)}commonAncestor(e){let t=An(this.id,e.id);return t?this.$model.element(t):null}children(){return this.$model.children(this)}descendants(e){return e?ss([...this.$model.descendants(this)],e)[Symbol.iterator]():this.$model.descendants(this)}siblings(){return this.$model.siblings(this)}*ascendingSiblings(){yield*this.siblings();for(let e of this.ancestors())yield*e.siblings()}*descendingSiblings(){for(let e of[...this.ancestors()].reverse())yield*e.siblings();yield*this.siblings()}incoming(e="all"){return this.$model.incoming(this,e)}*incomers(e="all"){let t=new Set;for(let n of this.incoming(e))t.has(n.source.id)||(t.add(n.source.id),yield n.source)}outgoing(e="all"){return this.$model.outgoing(this,e)}*outgoers(e="all"){let t=new Set;for(let n of this.outgoing(e))t.has(n.target.id)||(t.add(n.target.id),yield n.target)}get allOutgoing(){return $(this,Symbol.for("allOutgoing"),()=>new Set(this.outgoing()))}get allIncoming(){return $(this,Symbol.for("allIncoming"),()=>new Set(this.incoming()))}views(){return $(this,Symbol.for("views"),()=>{let e=new Set;for(let t of this.$model.views())t.includesElement(this.id)&&e.add(t);return e})}scopedViews(){return $(this,Symbol.for("scopedViews"),()=>{let e=new Set;for(let t of this.$model.views())t.isScopedElementView()&&t.viewOf.id===this.id&&e.add(t);return e})}isDeployed(){return Se(xn(this.deployments()))}deployments(){return this.$model.deployment.instancesOf(this)}hasMetadata(){return!!this.$element.metadata&&!kn(this.$element.metadata)}getMetadata(e){return e?this.$element.metadata?.[e]:this.$element.metadata??{}}isTagged(e){return this.tags.includes(e)}},Zs=class{Aux;get style(){return $(this,"style",()=>ei({shape:this.$model.$styles.defaults.shape,color:this.$model.$styles.defaults.color,border:this.$model.$styles.defaults.border,opacity:this.$model.$styles.defaults.opacity,size:this.$model.$styles.defaults.size,padding:this.$model.$styles.defaults.padding,textSize:this.$model.$styles.defaults.text,iconPosition:this.$model.$styles.defaults.iconPosition,...this.$node.style}))}get name(){return ls(this.id)}get shape(){return this.style.shape}get color(){return this.style.color}get icon(){return this.style.icon??null}get summary(){return ve.memoize(this,"summary",Wt(this.$node))}get description(){return ve.memoize(this,"description",Zt(this.$node))}get technology(){return this.$node.technology??null}get links(){return this.$node.links??[]}ancestors(){return this.$model.ancestors(this)}commonAncestor(e){let t=An(this.id,e.id);return t?this.$model.node(t):null}siblings(){return this.$model.siblings(this)}isSibling(e){return this.parent===e.parent}*ascendingSiblings(){yield*this.siblings();for(let e of this.ancestors())yield*e.siblings()}*descendingSiblings(){for(let e of[...this.ancestors()].reverse())yield*e.siblings();yield*this.siblings()}incoming(e="all"){return this.$model.incoming(this,e)}outgoing(e="all"){return this.$model.outgoing(this,e)}*incomers(e="all"){let t=new Set;for(let n of this.incoming(e))t.has(n.source.id)||(t.add(n.source.id),yield n.source)}*outgoers(e="all"){let t=new Set;for(let n of this.outgoing(e))t.has(n.target.id)||(t.add(n.target.id),yield n.target)}*views(){for(let e of this.$model.views())e._type==="deployment"&&e.includesDeployment(this.id)&&(yield e)}isDeploymentNode(){return!1}isInstance(){return!1}get allOutgoing(){return $(this,Symbol.for("allOutgoing"),()=>Oo.from(new Set(this.outgoingModelRelationships()),new Set(this.outgoing())))}get allIncoming(){return $(this,Symbol.for("allIncoming"),()=>Oo.from(new Set(this.incomingModelRelationships()),new Set(this.incoming())))}hasMetadata(){return!!this.$node.metadata&&!kn(this.$node.metadata)}getMetadata(e){return e?this.$node.metadata?.[e]:this.$node.metadata??{}}isTagged(e){return this.tags.includes(e)}},Nl=class extends Zs{id;_literalId;title;hierarchyLevel;constructor(e,t){super(),this.$model=e,this.$node=t,this.id=t.id,this._literalId=t.id,this.title=t.title,this.hierarchyLevel=rr(t.id)}get parent(){return this.$model.parent(this)}get kind(){return this.$node.kind}get metadata(){return this.$node.metadata??{}}get tags(){return $(this,Symbol.for("tags"),()=>cr([...this.$node.tags??[],...this.$model.$model.specification.deployments[this.kind]?.tags??[]]))}children(){return this.$model.children(this)}descendants(e="desc"){return this.$model.descendants(this,e)}isDeploymentNode(){return!0}*instances(){for(let e of this.descendants("desc"))e.isInstance()&&(yield e)}onlyOneInstance(){let e=this.children();if(e.size!==1)return null;let t=xn(e);return t?t.isInstance()?t:t.onlyOneInstance():null}_relationshipsFromInstances=null;relationshipsFromInstances(){if(this._relationshipsFromInstances)return this._relationshipsFromInstances;let{outgoing:e,incoming:t}=this._relationshipsFromInstances={outgoing:new Set,incoming:new Set};for(let n of this.instances()){for(let r of n.element.outgoing())e.add(r);for(let r of n.element.incoming())t.add(r)}return this._relationshipsFromInstances}outgoingModelRelationships(){return this.relationshipsFromInstances().outgoing.values()}incomingModelRelationships(){return this.relationshipsFromInstances().incoming.values()}internalModelRelationships(){let{outgoing:e,incoming:t}=this.relationshipsFromInstances();return Xt(t,e)}},Ol=class extends Zs{id;_literalId;title;hierarchyLevel;constructor(e,t,n){super(),this.$model=e,this.$instance=t,this.element=n,this.id=t.id,this._literalId=t.id,this.title=t.title??n.title,this.hierarchyLevel=rr(t.id)}get $node(){return this.$instance}get parent(){return Ie(this.$model.parent(this),`Parent of ${this.id} not found`)}get style(){return $(this,"style",()=>ei({shape:this.$model.$styles.defaults.shape,color:this.$model.$styles.defaults.color,border:this.$model.$styles.defaults.border,opacity:this.$model.$styles.defaults.opacity,size:this.$model.$styles.defaults.size,padding:this.$model.$styles.defaults.padding,textSize:this.$model.$styles.defaults.text,iconPosition:this.$model.$styles.defaults.iconPosition,...this.element.$element.style,...this.$instance.style}))}get tags(){return $(this,Symbol.for("tags"),()=>cr([...this.$instance.tags??[],...this.element.tags]))}get kind(){return this.element.kind}get metadata(){return this.$instance.metadata??this.element.metadata??{}}get summary(){return ve.memoize(this,"summary",Wt(this.$instance)??Wt(this.element.$element))}get description(){return ve.memoize(this,"description",Zt(this.$instance)??Zt(this.element.$element))}get technology(){return this.$instance.technology??this.element.technology??null}get links(){return this.$instance.links??this.element.links}isInstance(){return!0}outgoingModelRelationships(){return this.element.outgoing()}incomingModelRelationships(){return this.element.incoming()}*views(){for(let e of this.$model.views())if(e._type==="deployment"){if(e.includesDeployment(this.id)){yield e;continue}e.includesDeployment(this.parent.id)&&this.parent.onlyOneInstance()&&(yield e)}}},b4=class{constructor(e,t){this.instance=e,this.element=t}get id(){return this.instance.id}get _literalId(){return this.instance.id}get style(){return $(this,"style ",()=>({shape:this.element.shape,color:this.element.color,...this.element.$element.style}))}get shape(){return this.element.shape}get color(){return this.element.color}get title(){return this.element.title}get summary(){return this.element.summary}get description(){return this.element.description}get technology(){return this.element.technology}isDeploymentNode(){return!1}isInstance(){return!1}},T4=class{boundary;source;target;constructor(e,t){this.$model=e,this.$relationship=t,this.source=e.deploymentRef(t.source),this.target=e.deploymentRef(t.target);let n=An(this.source.id,this.target.id);this.boundary=n?this.$model.node(n):null}get id(){return this.$relationship.id}get expression(){return`${this.source.id} -> ${this.target.id}`}get title(){return Se(this.$relationship.title)?this.$relationship.title:null}get technology(){return qt(this.$relationship.technology)?(this.kind&&this.$model.specification.relationships[this.kind])?.technology??null:this.$relationship.technology}get hasSummary(){return!!this.$relationship.summary&&!!this.$relationship.description&&!Io(this.$relationship.summary,this.$relationship.description)}get summary(){return ve.memoize(this,"summary",Wt(this.$relationship))}get description(){return ve.memoize(this,"description",Zt(this.$relationship))}get tags(){return this.$relationship.tags??[]}get kind(){return this.$relationship.kind??null}get metadata(){return this.$relationship.metadata??{}}get navigateTo(){return this.$relationship.navigateTo?this.$model.$model.view(this.$relationship.navigateTo):null}get links(){return this.$relationship.links??[]}get color(){return this.$relationship.color??this.$model.$styles.defaults.relationship.color}get line(){return this.$relationship.line??this.$model.$styles.defaults.relationship.line}get head(){return this.$relationship.head??this.$model.$styles.defaults.relationship.arrow}get tail(){return this.$relationship.tail}*views(){for(let e of this.$model.views())e.includesRelation(this.id)&&(yield e)}isDeploymentRelation(){return!0}isModelRelation(){return!1}hasMetadata(){return!!this.$relationship.metadata&&!kn(this.$relationship.metadata)}getMetadata(e){return e?this.$relationship.metadata?.[e]:this.$relationship.metadata??{}}isTagged(e){return this.tags.includes(e)}},Oo=class St{static empty(){return new St}static from(t,n){return new St(new Set(t),new Set(n))}constructor(t=new Set,n=new Set){this.model=t,this.deployment=n}get isEmpty(){return this.model.size===0&&this.deployment.size===0}get nonEmpty(){return this.model.size>0||this.deployment.size>0}get size(){return this.model.size+this.deployment.size}intersect(t){return St.from(Xt(this.model,t.model),Xt(this.deployment,t.deployment))}difference(t){return St.from(To(this.model,t.model),To(this.deployment,t.deployment))}union(t){return St.from(bo(this.model,t.model),bo(this.deployment,t.deployment))}};const V=e=>typeof e=="string"?e:e.id,R5="/",ni=e=>{if(z(!e.includes(`
`),"View title cannot contain newlines"),e.includes("/")){let t=e.split("/").map(n=>n.trim()).filter(n=>n.length>0);return Xe(t,1)?t:[""]}return[e.trim()]},Us=e=>ni(e).join("/"),v4=e=>{let t=ni(e);return Xe(t,2)?t.slice(0,-1).join("/"):null},k4=e=>e.includes("/")?ni(e).pop()??e:e.trim();var w4=class{#e=new Map;#l=new Map;#t=new de.default(()=>new Set);#n=new de.default(()=>new Set);#a=new Set;#r=new Map;#s=new de.default(()=>new Set);#i=new de.default(()=>new Set);#o=new de.default(()=>new Set);#c=new de.default(()=>new Set);#d=new Map;$deployments;constructor(e){this.$model=e;let t=this.$deployments=e.$data.deployments,n=Jn(t.elements);for(let r of yn(n)){let o=this.addElement(r);for(let l of o.tags)this.#c.get(l).add(o);o.isInstance()&&this.#n.get(o.element.id).add(o)}for(let r of Jn(t.relations)){let o=this.addRelation(r);for(let l of o.tags)this.#c.get(l).add(o)}}get $styles(){return this.$model.$styles}get projectId(){return this.$model.projectId}get project(){return this.$model.project}get specification(){return this.$model.specification}element(e){if(e instanceof Nl||e instanceof Ol)return e;let t=V(e);return Ie(this.#e.get(t),`Element ${t} not found`)}findElement(e){return this.#e.get(e)??null}node(e){let t=this.element(e);return z(t.isDeploymentNode(),`Element ${t.id} is not a deployment node`),t}findNode(e){let t=this.findElement(e);return t?(z(t.isDeploymentNode(),`Element ${t?.id} is not a deployment node`),t):null}instance(e){let t=this.element(e);return z(t.isInstance(),`Element ${t.id} is not a deployed instance`),t}findInstance(e){let t=this.findElement(e);return t?(z(t.isInstance(),`Element ${t?.id} is not a deployed instance`),t):null}roots(){return this.#a.values()}elements(){return this.#e.values()}*nodes(){for(let e of this.#e.values())e.isDeploymentNode()&&(yield e)}*nodesOfKind(e){for(let t of this.#e.values())t.isDeploymentNode()&&t.kind===e&&(yield t)}*instances(){for(let e of this.#e.values())e.isInstance()&&(yield e)}*instancesOf(e){let t=V(e),n=this.#n.get(t);n&&(yield*n)}deploymentRef(e){if(wt.isInsideInstanceRef(e)){let{deployment:t,element:n}=e;return Q2(this.#d,`${t}@${n}`,()=>new b4(this.instance(t),this.$model.element(n)))}return this.element(e.deployment)}relationships(){return this.#r.values()}relationship(e){let t=V(e);return Ie(this.#r.get(t),`DeploymentRelationModel ${t} not found`)}findRelationship(e){return this.#r.get(e)??null}*views(){for(let e of this.$model.views())e.isDeploymentView()&&(yield e)}parent(e){let t=V(e);return this.#l.get(t)||null}children(e){let t=V(e);return this.#t.get(t)}*siblings(e){let t=V(e),n=this.parent(e)?.children()??this.roots();for(let r of n)r.id!==t&&(yield r)}*ancestors(e){let t=V(e),n;for(;n=this.#l.get(t);)yield n,t=n.id}*descendants(e,t="desc"){for(let n of this.children(e))t==="asc"?(yield n,yield*this.descendants(n.id)):(yield*this.descendants(n.id),yield n)}*incoming(e,t="all"){let n=V(e);for(let r of this.#s.get(n))switch(!0){case t==="all":case(t==="direct"&&r.target.id===n):case(t==="to-descendants"&&r.target.id!==n):yield r;break}}*outgoing(e,t="all"){let n=V(e);for(let r of this.#i.get(n))switch(!0){case t==="all":case(t==="direct"&&r.source.id===n):case(t==="from-descendants"&&r.source.id!==n):yield r;break}}addElement(e){if(this.#e.has(e.id))throw Error(`Element ${e.id} already exists`);let t=Sy(e)?new Nl(this,Object.freeze(e)):new Ol(this,Object.freeze(e),this.$model.element(e.element));this.#e.set(t.id,t);let n=Xn(t.id);return n?(z(this.#e.has(n),`Parent ${n} of ${t.id} not found`),this.#l.set(t.id,this.node(n)),this.#t.get(n).add(t)):(z(t.isDeploymentNode(),`Root element ${t.id} is not a deployment node`),this.#a.add(t)),t}addRelation(e){if(this.#r.has(e.id))throw Error(`Relation ${e.id} already exists`);let t=new T4(this,Object.freeze(e));this.#r.set(t.id,t),this.#s.get(t.target.id).add(t),this.#i.get(t.source.id).add(t);let n=t.boundary?.id??null;if(n)for(let r of[n,...Gt(n)])this.#o.get(r).add(t);for(let r of Gt(t.source.id)){if(r===n)break;this.#i.get(r).add(t)}for(let r of Gt(t.target.id)){if(r===n)break;this.#s.get(r).add(t)}return t}},Ll=class{source;target;boundary;constructor(e,t){this.model=e,this.$relationship=t,this.source=e.element(wt.flatten(t.source)),this.target=e.element(wt.flatten(t.target));let n=An(this.source.id,this.target.id);this.boundary=n?this.model.element(n):null}get id(){return this.$relationship.id}get expression(){return`${this.source.id} -> ${this.target.id}`}get title(){return qt(this.$relationship.title)?null:this.$relationship.title}get technology(){return qt(this.$relationship.technology)?(this.kind&&this.model.specification.relationships[this.kind])?.technology??null:this.$relationship.technology}get hasSummary(){return!!this.$relationship.summary&&!!this.$relationship.description&&!Io(this.$relationship.summary,this.$relationship.description)}get summary(){return ve.memoize(this,"summary",Wt(this.$relationship))}get description(){return ve.memoize(this,"description",Zt(this.$relationship))}get navigateTo(){return this.$relationship.navigateTo?this.model.view(this.$relationship.navigateTo):null}get tags(){return this.$relationship.tags??[]}get kind(){return this.$relationship.kind??null}get metadata(){return this.$relationship.metadata??{}}get links(){return this.$relationship.links??[]}get color(){return this.$relationship.color??this.model.$styles.defaults.relationship.color}get line(){return this.$relationship.line??this.model.$styles.defaults.relationship.line}get head(){return this.$relationship.head??this.model.$styles.defaults.relationship.arrow}get tail(){return this.$relationship.tail}*views(){for(let e of this.model.views())e.includesRelation(this.id)&&(yield e)}isDeploymentRelation(){return!1}isModelRelation(){return!0}hasMetadata(){return!!this.$relationship.metadata&&!kn(this.$relationship.metadata)}getMetadata(e){return e?this.$relationship.metadata?.[e]:this.$relationship.metadata??{}}isTagged(e){return this.tags.includes(e)}},B4=class{Aux;$viewModel;$view;$edge;constructor(e,t,n,r){this.source=n,this.target=r,this.$viewModel=e,this.$view=e.$view,this.$edge=t}get id(){return this.$edge.id}get parent(){return this.$edge.parent?this.$viewModel.node(this.$edge.parent):null}get label(){return this.$edge.label??null}get description(){return ve.memoize(this,"description",this.$edge.description)}get technology(){return this.$edge.technology??null}hasParent(){return this.$edge.parent!==null}get tags(){return this.$edge.tags??[]}get stepNumber(){return this.isStep()?Xs(this.id):null}get navigateTo(){return this.$edge.navigateTo?this.$viewModel.$model.view(this.$edge.navigateTo):null}get color(){return this.$edge.color}get line(){return this.$edge.line??this.$viewModel.$styles.defaults.relationship.line}get head(){return this.$edge.head??this.$viewModel.$styles.defaults.relationship.arrow}get tail(){return this.$edge.tail}isStep(){return br(this.id)}*relationships(e){for(let t of this.$edge.relations)if(e){let n=this.$viewModel.$model.findRelationship(t,e);n&&(yield n)}else yield this.$viewModel.$model.relationship(t)}includesRelation(e){let t=typeof e=="string"?e:e.id;return this.$edge.relations.includes(t)}isTagged(e){return this.tags.includes(e)}},E4=class{Aux;$viewModel;$view;$node;constructor(e,t){this.$viewModel=e,this.$view=e.$view,this.$node=t}get id(){return this.$node.id}get title(){return this.$node.title}get kind(){return this.$node.kind}get description(){return ve.memoize(this,"description",this.$node.description)}get technology(){return this.$node.technology??null}get notes(){return ve.memoize(this,"notes",this.$node.notes)}get parent(){return this.$node.parent?this.$viewModel.node(this.$node.parent):null}get element(){let e=this.$node.modelRef;return e?this.$viewModel.$model.element(e):null}get deployment(){let e=this.$node.deploymentRef;return e?this.$viewModel.$model.deployment.element(e):null}get shape(){return this.$node.shape}get color(){return this.$node.color}get icon(){return this.$node.icon??null}get tags(){return this.$node.tags}get links(){return this.$node.links??[]}get navigateTo(){return this.$node.navigateTo?this.$viewModel.$model.view(this.$node.navigateTo):null}get style(){return this.$node.style}get x(){return"x"in this.$node?this.$node.x:void 0}get y(){return"y"in this.$node?this.$node.y:void 0}get width(){return"width"in this.$node?this.$node.width:void 0}get height(){return"height"in this.$node?this.$node.height:void 0}children(){return $(this,"children",()=>new Set(this.$node.children.map(e=>this.$viewModel.node(e))))}*ancestors(){let e=this.parent;for(;e;)yield e,e=e.parent}*siblings(){let e=this.parent?.children()??this.$viewModel.roots();for(let t of e)t.id!==this.id&&(yield t)}*incoming(e="all"){for(let t of this.$node.inEdges){let n=this.$viewModel.edge(t);switch(!0){case e==="all":case(e==="direct"&&n.target.id===this.id):case(e==="to-descendants"&&n.target.id!==this.id):yield n;break}}}*incomers(e="all"){let t=new Set;for(let n of this.incoming(e))t.has(n.source.id)||(t.add(n.source.id),yield n.source)}*outgoing(e="all"){for(let t of this.$node.outEdges){let n=this.$viewModel.edge(t);switch(!0){case e==="all":case(e==="direct"&&n.source.id===this.id):case(e==="from-descendants"&&n.source.id!==this.id):yield n;break}}}*outgoers(e="all"){let t=new Set;for(let n of this.outgoing(e))t.has(n.target.id)||(t.add(n.target.id),yield n.target)}isLayouted(){return"width"in this.$node&&"height"in this.$node}hasChildren(){return this.$node.children.length>0}hasParent(){return this.$node.parent!==null}hasElement(){return Se(this.$node.modelRef)}hasDeployment(){return Se(this.$node.deploymentRef)}hasDeployedInstance(){return this.hasElement()&&this.hasDeployment()}isGroup(){return Gs(this.$node)}isTagged(e){return this.tags.includes(e)}},Lo=class{Aux;#e;#l=new Set;#t=new Map;#n=new Map;#a=new Set;#r=new Set;#s=new Set;#i=new de.default(e=>new Set);#o;id;$model;title;folder;viewPath;constructor(e,t,n,r){this.$model=e,this.#e=n,this.id=n.id,this.folder=t,this.#o=r;for(let o of this.#e.nodes){let l=new E4(this,Object.freeze(o));this.#t.set(o.id,l),o.parent||this.#l.add(l),o.deploymentRef&&this.#r.add(o.deploymentRef),o.modelRef&&this.#a.add(o.modelRef);for(let i of l.tags)this.#i.get(i).add(l)}for(let o of this.#e.edges){let l=new B4(this,Object.freeze(o),this.node(o.source),this.node(o.target));for(let i of l.tags)this.#i.get(i).add(l);for(let i of o.relations)this.#s.add(i);this.#n.set(o.id,l)}this.title=n.title?k4(n.title):null,this.viewPath=n.title?Us(n.title):n.id}get $styles(){return this.$model.$styles}get _type(){return this.#e[rn]}get stage(){return this.#e[xt]}get bounds(){if("bounds"in this.#e)return this.#e.bounds;if(this.#o)return this.#o.bounds;throw Error("View is not layouted")}get titleOrId(){return this.title??this.viewOf?.title??this.id}get titleOrUntitled(){return this.title??"Untitled"}get breadcrumbs(){return $(this,"breadcrumbs",()=>this.folder.isRoot?[this]:[...this.folder.breadcrumbs,this])}get description(){return ve.memoize(this,"description",this.#e.description)}get tags(){return this.#e.tags??[]}get links(){return this.#e.links??[]}get viewOf(){if(this.isElementView()){let e=this.#e.viewOf;return e?this.$model.element(e):null}return null}get mode(){return this.isDynamicView()?this.#e.variant??"diagram":null}get includedTags(){return[...this.#i.keys()]}get $view(){if(!this.isLayouted()||"drifts"in this.#e)return this.#e;let e=this.#o;return e?$(this,"withDriftReasons",()=>x4(this.#e,e)):this.#e}get $layouted(){if(!this.isLayouted())throw Error("View is not layouted");return this.$manual??this.#e}get hasManualLayout(){return this.#o!==void 0}get hasLayoutDrifts(){if(!this.isLayouted())return!1;let e=this.$manual;return!!e?.drifts&&e.drifts.length>0}get $manual(){if(!this.isLayouted())return null;let e=this.#o;return e?$(this,"snapshotWithManualLayout",()=>Ws(this.#e,e)):null}get projectId(){return this.$model.projectId}roots(){return this.#l.values()}*compounds(){for(let e of this.#t.values())e.hasChildren()&&(yield e)}node(e){let t=V(e);return Ie(this.#t.get(t),`Node ${t} not found in view ${this.#e.id}`)}findNode(e){return this.#t.get(V(e))??null}findNodeWithElement(e){let t=V(e);return this.#a.has(t)?Y2(this.#t.values(),n=>n.hasElement()&&n.element.id===t)??null:null}nodes(){return this.#t.values()}edge(e){let t=V(e);return Ie(this.#n.get(t),`Edge ${t} not found in view ${this.#e.id}`)}findEdge(e){return this.#n.get(V(e))??null}edges(){return this.#n.values()}*edgesWithRelation(e){for(let t of this.#n.values())t.includesRelation(e)&&(yield t)}*elements(){for(let e of this.#t.values())e.hasElement()&&(yield e)}isTagged(e){return this.tags.includes(e)}includesElement(e){return this.#a.has(V(e))}includesDeployment(e){return this.#r.has(V(e))}includesRelation(e){return this.#s.has(V(e))}isComputed(){return this.#e[xt]==="computed"}isLayouted(){return this.#e[xt]==="layouted"}isDiagram(){return this.#e[xt]==="layouted"}isElementView(){return this.#e[rn]==="element"}isScopedElementView(){return this.#e[rn]==="element"&&Se(this.#e.viewOf)}isDeploymentView(){return this.#e[rn]==="deployment"}isDynamicView(){return this.#e[rn]==="dynamic"}},Rl=class Hs{$model;path;title;isRoot;parentPath;defaultViewId;constructor(t,n,r){this.$model=t,this.path=n.join("/"),this.isRoot=this.path==="",this.title=Qc(n),this.isRoot?this.parentPath=void 0:this.parentPath=n.slice(0,-1).join("/"),this.defaultViewId=r}get defaultView(){return this.defaultViewId?this.$model.view(this.defaultViewId):null}get breadcrumbs(){return z(!this.isRoot,"Root view folder has no breadcrumbs"),$(this,"breadcrumbs",()=>{let t=this.parent;return t?t.isRoot?[t,this]:[...t.breadcrumbs,this]:[this]})}get parent(){return z(!this.isRoot,"Root view folder has no parent"),qt(this.parentPath)?null:this.$model.viewFolder(this.parentPath)}get children(){return this.$model.viewFolderItems(this.path)}get folders(){return $(this,"folders",()=>{let t=[];for(let n of this.children)n instanceof Hs&&t.push(n);return t})}get views(){return $(this,"views",()=>{let t=[];for(let n of this.children)n instanceof Lo&&t.push(n);return t})}},Ro=class Wn{Aux;_elements=new Map;_parents=new Map;_children=new de.default(()=>new Set);_rootElements=new Set;_relations=new Map;_incoming=new de.default(()=>new Set);_outgoing=new de.default(()=>new Set);_internal=new de.default(()=>new Set);_views=new Map;_rootViewFolder;_viewFolders=new Map;_viewFolderItems=new de.default(()=>new Set);_allTags=new de.default(()=>new Set);static fromParsed(t){return new Wn(t)}static create(t){return new Wn(t)}static fromDump(t){let{_stage:n="layouted",projectId:r="unknown",project:o,globals:l,imports:i,deployments:a,views:s,relations:c,elements:d,specification:f}=t;return new Wn({[xt]:n,projectId:r,project:o,globals:{predicates:l?.predicates??{},dynamicPredicates:l?.dynamicPredicates??{},styles:l?.styles??{}},imports:i??{},deployments:{elements:a?.elements??{},relations:a?.relations??{}},views:s??{},relations:c??{},elements:d??{},specification:f})}deployment;$data;constructor(t){this.$data=t;for(let[,n]of cn(t.elements)){let r=this.addElement(n);for(let o of r.tags)this._allTags.get(o).add(r)}for(let[n,r]of cn(t.imports??{}))for(let o of yn(r)){let l=this.addImportedElement(n,o);for(let i of l.tags)this._allTags.get(i).add(l)}for(let n of Jn(t.relations)){let r=this.addRelation(n);for(let o of r.tags)this._allTags.get(o).add(r)}if(this.deployment=new w4(this),kl(t,"computed")||kl(t,"layouted")){let n=H2("/"),r=Me(Jn(t.views),pn(l=>({view:l,path:Us(l.title??l.id),folderPath:l.title&&v4(l.title)||""})),Dr((l,i)=>n(l.folderPath,i.folderPath))),o=l=>{let i=this._viewFolders.get(l);if(!i){let a=yi(l,"/");z(Xe(a,1),`View group path "${l}" must have at least one element`);let s;s=l===""?r.find(c=>c.view.id==="index"):r.find(c=>c.path===l),i=new Rl(this,a,s?.view.id),this._viewFolders.set(l,i)}return i};this._rootViewFolder=o("");for(let{folderPath:l}of r)this._viewFolders.has(l)||yi(l,"/").reduce((i,a)=>{let s=i.join("/"),c=o(kn(s)?a:s+"/"+a);return this._viewFolderItems.get(s).add(c),i.push(a),i},[]);for(let{view:l,folderPath:i}of r){let a=new Lo(this,o(i),l,t.manualLayouts?.[l.id]);this._viewFolderItems.get(i).add(a),this._views.set(l.id,a);for(let s of a.tags)this._allTags.get(s).add(a)}}else this._rootViewFolder=new Rl(this,[""],void 0),this._viewFolders.set(this._rootViewFolder.path,this._rootViewFolder)}get asParsed(){return this}get asComputed(){return this}get asLayouted(){return this}get $styles(){return $(this,"styles",()=>$y.from(this.project.styles,this.specification.customColors))}isParsed(){return this.stage==="parsed"}isLayouted(){return this.stage==="layouted"}isComputed(){return this.stage==="computed"}get $model(){return this.$data}get stage(){return this.$data[xt]}get projectId(){return this.$data.projectId??"default"}get project(){return this.$data.project??$(this,Symbol.for("project"),()=>({id:this.projectId,styles:{},manualLayouts:{}}))}get specification(){return this.$data.specification}get globals(){return $(this,Symbol.for("globals"),()=>({predicates:{...this.$data.globals?.predicates},dynamicPredicates:{...this.$data.globals?.dynamicPredicates},styles:{...this.$data.globals?.styles}}))}element(t){if(t instanceof Gn)return t;let n=V(t);return Ie(this._elements.get(n),`Element ${n} not found`)}findElement(t){return this._elements.get(V(t))??null}roots(){return this._rootElements.values()}elements(){return this._elements.values()}relationships(){return this._relations.values()}relationship(t,n){if(n==="deployment")return this.deployment.relationship(t);let r=V(t),o=this._relations.get(r)??null;return o||n==="model"?Ie(o,`Model relation ${r} not found`):Ie(this.deployment.findRelationship(r),`No model/deployment relation ${r} not found`)}findRelationship(t,n){if(n==="deployment")return this.deployment.findRelationship(t);let r=this._relations.get(V(t))??null;return r||n==="model"?r:this.deployment.findRelationship(t)}views(){return this._views.values()}view(t){let n=V(t);return Ie(this._views.get(n),`View ${n} not found`)}findView(t){return this._views.get(t)??null}findManualLayout(t){return"manualLayouts"in this.$data?this.$data.manualLayouts?.[t]??null:null}viewFolder(t){return Ie(this._viewFolders.get(t),`View folder ${t} not found`)}get rootViewFolder(){return this._rootViewFolder}get hasViewFolders(){return this._viewFolders.size>1}viewFolderItems(t){return z(this._viewFolders.has(t),`View folder ${t} not found`),this._viewFolderItems.get(t)}parent(t){let n=V(t);return this._parents.get(n)||null}children(t){let n=V(t);return this._children.get(n)}*siblings(t){let n=V(t),r=this._parents.get(n),o=r?this._children.get(r.id).values():this.roots();for(let l of o)l.id!==n&&(yield l)}*ancestors(t){let n=V(t),r;for(;r=this._parents.get(n);)yield r,n=r.id}*descendants(t){for(let n of this.children(t))yield n,yield*this.descendants(n.id)}*incoming(t,n="all"){let r=V(t);for(let o of this._incoming.get(r))switch(!0){case n==="all":case(n==="direct"&&o.target.id===r):case(n==="to-descendants"&&o.target.id!==r):yield o;break}}*outgoing(t,n="all"){let r=V(t);for(let o of this._outgoing.get(r))switch(!0){case n==="all":case(n==="direct"&&o.source.id===r):case(n==="from-descendants"&&o.source.id!==r):yield o;break}}get tags(){return $(this,"tags",()=>Dr([...this._allTags.keys()],xo))}get tagsSortedByUsage(){return $(this,"tagsSortedByUsage",()=>Me([...this._allTags.entries()],pn(([t,n])=>({tag:t,count:n.size,tagged:n})),Dr((t,n)=>xo(t.tag,n.tag)),Kl([mt("count"),"desc"])))}findByTag(t,n){return Tt(this._allTags.get(t),r=>n==="elements"?r instanceof Gn:n==="views"?r instanceof Lo:n==="relationships"?r instanceof Ll:!0)}*elementsOfKind(t){for(let n of this._elements.values())n.kind===t&&(yield n)}*elementsWhere(t){let n=Pt(t);for(let r of this._elements.values())n(r)&&(yield r)}*relationshipsWhere(t){let n=Pt(t);for(let r of this._relations.values())n(r)&&(yield r)}addElement(t){if(this._elements.has(t.id))throw Error(`Element ${t.id} already exists`);let n=new Gn(this,Object.freeze(t));this._elements.set(n.id,n);let r=Xn(n.id);return r?(z(this._elements.has(r),`Parent ${r} of ${n.id} not found`),this._parents.set(n.id,this.element(r)),this._children.get(r).add(n)):this._rootElements.add(n),n}addImportedElement(t,n){z(!qs(n.id),"Imported element already has global FQN");let r=ti(t,n.id);if(this._elements.has(r))throw Error(`Element ${r} already exists`);let o=new Gn(this,Object.freeze({...n,id:r}));this._elements.set(o.id,o);let l=Xn(o.id);for(;l;){if(l.includes(".")&&this._elements.has(l))return this._parents.set(o.id,this.element(l)),this._children.get(l).add(o),o;l=Xn(l)}return this._rootElements.add(o),o}addRelation(t){if(this._relations.has(t.id))throw Error(`Relation ${t.id} already exists`);let n=new Ll(this,Object.freeze(t)),{source:r,target:o}=n;this._relations.set(n.id,n),this._incoming.get(o.id).add(n),this._outgoing.get(r.id).add(n);let l=An(r.id,o.id);if(l)for(let i of[l,...Gt(l)])this._internal.get(i).add(n);for(let i of Gt(r.id)){if(i===l)break;this._outgoing.get(i).add(n)}for(let i of Gt(o.id)){if(i===l)break;this._incoming.get(i).add(n)}return n}};(function(e){e.EMPTY=Ro.create({_stage:"computed",projectId:"default",project:{id:"default"},specification:{elements:{},relationships:{},deployments:{},tags:{}},globals:{predicates:{},dynamicPredicates:{},styles:{}},deployments:{elements:{},relations:{}},elements:{},relations:{},views:{},imports:{}})})(Ro||={});let D4;(function(e){e.isInside=o=>l=>Ee(o,l.source.id)&&Ee(o,l.target.id);let t=e.isDirectedBetween=(o,l)=>i=>(i.source.id===o||Ee(o,i.source.id))&&(i.target.id===l||Ee(l,i.target.id));e.isAnyBetween=(o,l)=>{let i=t(o,l),a=t(l,o);return s=>i(s)||a(s)};let n=e.isIncoming=o=>l=>(l.target.id===o||Ee(o,l.target.id))&&!Ee(o,l.source.id),r=e.isOutgoing=o=>l=>(l.source.id===o||Ee(o,l.source.id))&&!Ee(o,l.target.id);e.isAnyInOut=o=>{let l=n(o),i=r(o);return a=>l(a)||i(a)}})(D4||={});const $s=Symbol.for("nodejs.util.inspect.custom");var A4=class gt{id;constructor(t,n,r){this.source=t,this.target=n,this.relations=r,this.id=cs(`deployment:${t.id}:${n.id}`)}get expression(){return`${this.source.id} -> ${this.target.id}`}_boundary;get boundary(){return this._boundary??=this.source.commonAncestor(this.target),this._boundary}nonEmpty(){return this.relations.nonEmpty}[$s](t,n,r){let o=this.toString();return Object.defineProperty(o,"constructor",{value:gt,enumerable:!1}),o}toString(){let t=[...this.relations.model].map(r=>"    "+r.expression);t.length?t.unshift("  model:"):t.unshift("  model: []");let n=[...this.relations.deployment].map(r=>"    "+r.expression);return n.length?n.unshift("  deployment:"):n.unshift("  deployment: []"),[this.expression,...t,...n].join(`
`)}hasDirectDeploymentRelation(){for(let t of this.relations.deployment)if(t.source.id===this.source.id||t.target.id===this.target.id)return!0;return!1}*values(){yield*this.relations.model,yield*this.relations.deployment}mergeWith(t){return Array.isArray(t)?t.reduce((n,r)=>n.mergeWith(r),this):(z(this.source.id===t.source.id,"Cannot merge connections with different sources"),z(this.target.id===t.target.id,"Cannot merge connections with different targets"),new gt(this.source,this.target,this.relations.union(t.relations)))}difference(t){return new gt(this.source,this.target,this.relations.difference(t.relations))}intersect(t){return new gt(this.source,this.target,this.relations.intersect(t.relations))}equals(t){return z(t instanceof gt,"Other should ne DeploymentConnectionModel"),this.id===t.id&&this.source.id===t.source.id&&this.target.id===t.target.id&&vo(this.relations.model,t.relations.model)&&vo(this.relations.deployment,t.relations.deployment)}update(t){return t&&={model:this.relations.model,deployment:this.relations.deployment,...t},new gt(this.source,this.target,t?new Oo(t.model??new Set,t.deployment??new Set):this.relations)}};function Cl(e,t){return t?e.source===t.source&&e.target===t.target:n=>e.source===n.source&&e.target===n.target}var Il=class Ve{id;constructor(t,n,r=new Set){this.source=t,this.target=n,this.relations=r,this.id=cs(`model:${t.id}:${n.id}`)}_boundary;get boundary(){return this._boundary??=this.source.commonAncestor(this.target)}get expression(){return`${this.source.id} -> ${this.target.id}`}get isDirect(){return this.nonEmpty()&&!this.isImplicit}get isImplicit(){return this.nonEmpty()&&_2(this.relations,ql(Cl(this)))}get directRelations(){return new Set(Tt(this.relations,Cl(this)))}nonEmpty(){return this.relations.size>0}mergeWith(t){return z(this.source.id===t.source.id,"Cannot merge connections with different sources"),z(this.target.id===t.target.id,"Cannot merge connections with different targets"),new Ve(this.source,this.target,bo(this.relations,t.relations))}difference(t){return new Ve(this.source,this.target,To(this.relations,t.relations))}intersect(t){return z(t instanceof Ve,"Cannot intersect connection with different type"),new Ve(this.source,this.target,Xt(this.relations,t.relations))}equals(t){z(t instanceof Ve,"Cannot merge connection with different type");let n=t;return this.id===n.id&&this.source.id===n.source.id&&this.target.id===n.target.id&&vo(this.relations,n.relations)}update(t){return new Ve(this.source,this.target,t)}[$s](t,n,r){let o=this.toString();return Object.defineProperty(o,"constructor",{value:Ve,enumerable:!1}),o}toString(){return[this.expression,this.relations.size?"  relations:":"  relations: [ ]",...[...this.relations].map(t=>"    "+t.expression)].join(`
`)}reversed(){return new Ve(this.target,this.source)}};wn({findConnection:()=>ri,findConnectionsBetween:()=>Vs,findConnectionsWithin:()=>F4});function ri(e,t,n="directed"){if(e===t||Uo(e,t))return[];let r=e.allOutgoing.intersect(t.allIncoming),o=r.nonEmpty?[new A4(e,t,r)]:[];return n==="directed"?o:[...o,...ri(t,e,"directed")]}function Vs(e,t,n="both"){if(e.allIncoming.isEmpty&&e.allOutgoing.isEmpty)return[];let r=[],o=[];for(let l of t)if(e!==l)for(let i of ri(e,l,n))i.source===e?r.push(i):o.push(i);return[...r,...o]}function F4(e){return[...e].reduce((t,n,r,o)=>(r===o.length-1||t.push(...Vs(n,o.slice(r+1),"both")),t),[])}var C5=wn({findConnection:()=>Qs,findConnectionsBetween:()=>Ys,findConnectionsWithin:()=>N4});function Qs(e,t,n="directed"){if(e===t||Uo(e,t))return[];let r=Xt(e.allOutgoing,t.allIncoming),o=r.size>0?new Il(e,t,r):null;if(n==="directed")return o?[o]:[];let l=Xt(e.allIncoming,t.allOutgoing),i=l.size>0?new Il(t,e,l):null;return o&&i?[o,i]:o?[o]:i?[i]:[]}function Ys(e,t,n="both"){if(e.allIncoming.size===0&&e.allOutgoing.size===0)return[];let r=[],o=[];for(let l of t)if(e!==l)for(let i of Qs(e,l,n))i.source===e?r.push(i):o.push(i);return[...r,...o]}function N4(e){return[...e].reduce((t,n,r,o)=>(r===o.length-1||t.push(...Ys(n,o.slice(r+1),"both")),t),[])}const O4=e=>{let t=fi(e,a=>Ro.create(a));function n(a){let s=e.get();if(ui(s,a))return;let c={...a,views:bc(a.views,d=>{let f=s.views[d.id];return ui(f,d)?f:d})};e.set(c)}let r=fi(e,a=>Object.values(a.views));function o(){return ro(t)}function l(){return ro(r)}function i(a){let[s,c]=bt.useState(e.value?.views[a]??null);return bt.useEffect(()=>e.subscribe(d=>{c(d.views[a]??null)}),[a]),s}return{updateModel:n,$likec4model:t,useLikeC4Model:o,useLikeC4Views:l,useLikeC4View:i}},L4=[{id:"industrial-edge-architecture",title:"Industrial Edge Monitoring Architecture"}],R4=Co([...L4]);function I5(){return ro(R4)}let eo={"industrial-edge-architecture":()=>Bt(()=>Promise.resolve().then(()=>q4),void 0)};async function S5(e){let t=eo[e];if(!t){const n=Object.keys(eo);if(console.error("Unknown projectId: "+e+" (available: "+n+")"),n.length===0)throw new Error("No projects found, invalid state");e=n[0],console.warn("Falling back to project: "+e),t=eo[e]}return await t()}var P5=de.default;So.default;Wl.default;Zl.default;var z5=Ul.default,M5=de.default;So.default;Wl.default;Zl.default;Ul.default;Id.default;kd();je(wd());function C4(e){let t=yn([...e]),n=new Set(t),r=new Map,o=new de.default(()=>null),l=t.reduce((i,a,s,c)=>(r.set(a.id,a),i.set(a.id,Me(c,Lc(s+1),Gl(as(a)),ld((d,f)=>(n.delete(f),d.some(Ee(f))||(d.push(f),o.set(f.id,a)),d),[]))),i),new de.default(()=>[]));return{sorted:t,byId:i=>Ie(r.get(i),`Element not found by id: ${i}`),root:n,parent:i=>o.get(typeof i=="string"?i:i.id),children:i=>l.get(typeof i=="string"?i:i.id),flatten:rd(()=>new Set([...n,...t.reduce((i,a)=>{let s=l.get(a.id);return s.length===0?(i.push(a),i):(s.length>1&&i.push(...s),i)},[])]))}}const to=(e,t)=>e.size>2&&t.size!==e.size?new Set(yn([...C4(e).flatten(),...t])):e.size>1?new Set(yn([...e])):e;function Js(e,t,n){let r=s=>t.has(s),o=new Set([e]),l={incomers:new Set,subjects:new Set([e]),outgoers:new Set},i=new Set(n.incoming.flatMap(s=>{if(l.subjects.add(s.target),l.incomers.add(s.source),o.add(s.target),s.target!==e){let f=s.target.parent;for(;f&&f!==e;)o.add(f),f=f.parent}let c=s.source,d=[];for(;d.push(c),!(r(c)||!c.parent);)c=c.parent;return d})),a=new Set(n.outgoing.flatMap(s=>{if(l.subjects.add(s.source),l.outgoers.add(s.target),o.add(s.source),s.source!==e){let f=s.source.parent;for(;f&&f!==e;)o.add(f),f=f.parent}let c=s.target,d=[];for(;d.push(c),!(r(c)||!c.parent);)c=c.parent;return d}));return{incomers:to(i,l.incomers),incoming:new Set(n.incoming),subjects:to(o,l.subjects),outgoing:new Set(n.outgoing),outgoers:to(a,l.outgoers)}}function G5(e,t,n,r="global"){let o=n?t.findView(n):null;if(r==="view")return z(o,'Scope view id is required when scope is "view"'),I4(e,o,t);let l=t.element(e);return Js(l,eg(l.ascendingSiblings()),{incoming:[...l.incoming()],outgoing:[...l.outgoing()]})}function I4(e,t,n){let r=n.element(e),o={incoming:ll(Tt(r.incoming(),i=>t.includesRelation(i.id))),outgoing:ll(Tt(r.outgoing(),i=>t.includesRelation(i.id)))},l=as(r);return Js(r,new Set([...r.ascendingSiblings(),...Me(t.elements(),J2(i=>i.element),Tt(i=>i!==r&&l(i)))]),o)}let no={"industrial-edge-architecture":bt.lazy(()=>Bt(()=>Promise.resolve().then(()=>$4),void 0).then(e=>({default:e.IconRenderer})))};function q5(e){let t=no[e];if(!t){const n=Object.keys(no);if(console.error("Unknown projectId: "+e+" (available: "+n+")"),n.length===0)throw new Error("No projects found, invalid state");e=n[0],console.warn("Falling back to project: "+e),t=no[e]}return n=>ct.jsx(bt.Suspense,{children:ct.jsx(t,n)})}const K5={updateView:()=>{throw new Error("likec4rpc.updateView is not available in production")},calcAdhocView:()=>{throw new Error("likec4rpc.calcAdhocView is not available in production")}},_s=Co({_stage:"layouted",projectId:"industrial-edge-architecture",project:{id:"industrial-edge-architecture",title:"Industrial Edge Monitoring Architecture"},specification:{tags:{},elements:{actor:{notation:"Участник",style:{shape:"person",color:"green"}},container:{notation:"Контейнер",style:{color:"amber"}},"developed-system":{notation:"Система в scope реализации",style:{color:"amber"}},system:{notation:"Внешняя система",style:{color:"secondary"}},"external-system":{notation:"Внешняя облачная система",style:{color:"secondary",icon:"bootstrap:cloud",iconColor:"blue"}},"field-gateway":{notation:"Полевой шлюз",style:{color:"secondary"}},"field-device":{notation:"Полевое устройство",style:{color:"secondary"}},"telemetry-point":{notation:"Точка телеметрии",style:{color:"secondary"}}},relationships:{"interact-with":{style:{color:"green",line:"solid",head:"normal"}}},deployments:{environment:{notation:"Среда развертывания",style:{color:"blue"}},"network-zone":{notation:"Сетевой контур",style:{color:"sky"}},host:{notation:"Хост",style:{color:"amber"}},"fieldbus-segment":{notation:"Полевой сегмент",style:{color:"blue"}},"network-endpoint":{notation:"Сетевой endpoint",style:{color:"indigo"}},"field-asset":{notation:"Физическое устройство",style:{color:"secondary"}}},customColors:{}},elements:{"demo-stand-current-monitored-scope":{notation:"Внешняя система",style:{color:"secondary"},technology:"KNX monitored signals / current read scope",description:{txt:"Текущий набор сигналов demo-стенда, которые читает Edge Telemetry Agent."},title:"Demo Stand Current Monitored Scope",kind:"system",id:"demo-stand-current-monitored-scope"},"demo-stand-current-monitored-scope.device-1-1-1":{notation:"Полевое устройство",style:{color:"secondary"},technology:"KNX TP device",description:{txt:"Кнопочная панель, участвующая в публикации feedback состояния света."},title:"1.1.1 Pushbutton sensor 4 Komfort, 4-gang",kind:"field-device",id:"demo-stand-current-monitored-scope.device-1-1-1"},"demo-stand-current-monitored-scope.device-1-1-2":{notation:"Полевое устройство",style:{color:"secondary"},technology:"KNX TP to DALI gateway",description:{txt:"DALI gateway, публикующий статус светового канала."},title:"1.1.2 DALI Gateway Tunable White Plus",kind:"field-device",id:"demo-stand-current-monitored-scope.device-1-1-2"},"demo-stand-current-monitored-scope.device-1-1-4":{notation:"Полевое устройство",style:{color:"secondary"},technology:"KNX TP room controller",description:{txt:"Комнатный контроллер, публикующий температуру помещения."},title:"1.1.4 Room controller display compact module",kind:"field-device",id:"demo-stand-current-monitored-scope.device-1-1-4"},"demo-stand-current-monitored-scope.light-switch-feedback":{notation:"Точка телеметрии",style:{color:"secondary"},technology:"KNX DPT 1.001 / feedback",description:{txt:"Фактически читаемая точка состояния света."},title:"0/0/7 StatusSwitch",kind:"telemetry-point",id:"demo-stand-current-monitored-scope.light-switch-feedback"},"demo-stand-current-monitored-scope.room-temperature":{notation:"Точка телеметрии",style:{color:"secondary"},technology:"KNX DPT 9.xxx / room temperature",description:{txt:"Фактически читаемая точка температуры помещения."},title:"2/0/0 Temp Value",kind:"telemetry-point",id:"demo-stand-current-monitored-scope.room-temperature"},"field-devices":{notation:"Внешняя система",style:{color:"secondary"},technology:"Field devices / PLC / RTU",description:{txt:"Датчики, актуаторы, PLC, RTU и локальные системы автоматизации на объекте."},title:"Полевые устройства и контроллеры",kind:"system",id:"field-devices"},"field-devices.knx-temperature-sensor":{notation:"Полевое устройство",style:{color:"secondary"},technology:"KNX",description:{txt:"Датчик температуры"},title:"knx-temperature-sensor",kind:"field-device",id:"field-devices.knx-temperature-sensor"},"notification-channels":{notation:"Внешняя облачная система",style:{color:"secondary",icon:"bootstrap:cloud",iconColor:"blue"},technology:"Email / SMS / Push / Webhook",description:{txt:"Email, SMS, push, webhook и другие внешние облачные каналы доставки тревог и служебных уведомлений."},title:"Каналы уведомлений",kind:"external-system",id:"notification-channels"},"field-protocol-gateways":{notation:"Внешняя система",style:{color:"secondary"},technology:"KNX / Modbus / OPC UA / SCADA",description:{txt:"Точки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы."},title:"Протокольные шлюзы и SCADA-контроллеры",kind:"system",id:"field-protocol-gateways"},"field-protocol-gateways.knx-router":{notation:"Полевой шлюз",style:{color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg"},technology:"KNX / KNXnet-IP",title:"KNX Segment",kind:"field-gateway",id:"field-protocol-gateways.knx-router"},"field-protocol-gateways.modbus-gateway":{notation:"Полевой шлюз",style:{color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/modbus.svg"},technology:"Modbus TCP / Modbus RTU",title:"Modbus Gateway",kind:"field-gateway",id:"field-protocol-gateways.modbus-gateway"},"field-protocol-gateways.opc-ua-gateway":{notation:"Полевой шлюз",style:{color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/opc-ua.svg"},technology:"OPC UA",title:"OPC UA Server",kind:"field-gateway",id:"field-protocol-gateways.opc-ua-gateway"},"local-mqtt-broker":{notation:"Внешняя система",style:{color:"secondary"},technology:"Eclipse Mosquitto / localhost:1883 / Docker Compose",description:{txt:"Временный dev/test MQTT broker из infra/local/compose.yaml. Используется текущей реализацией edge_agent как локальный publish target."},title:"Local MQTT Broker",kind:"system",id:"local-mqtt-broker"},"local-grafana":{notation:"Внешняя система",style:{color:"secondary"},technology:"Grafana OSS / grafana-mqtt-datasource / localhost:3000 / Docker Compose",description:{txt:"Временный dev/test UI из infra/local/compose.yaml. Использует grafana-mqtt-datasource для live-view MQTT payload и не считается частью target production architecture."},title:"Local Grafana",kind:"system",id:"local-grafana"},"service-engineer":{notation:"Участник",style:{shape:"person",color:"green"},description:{txt:"Настраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы."},title:"Сервисный инженер",kind:"actor",id:"service-engineer"},"operator-dispatcher":{notation:"Участник",style:{shape:"person",color:"green"},description:{txt:"Работает с событиями, текущим состоянием объекта и alarm через центральную платформу мониторинга."},title:"Оператор / диспетчер",kind:"actor",id:"operator-dispatcher"},"edge-telemetry-agent":{notation:"Система в scope реализации",style:{color:"amber"},technology:"Edge collector / normalization / buffering / delivery",description:{txt:"Универсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий."},title:"Edge Telemetry Agent",kind:"developed-system",id:"edge-telemetry-agent"},"monitoring-alarm-platform":{notation:"Система в scope реализации",style:{color:"amber"},technology:"Cloud monitoring platform / alarm engine / operator UI",description:{txt:"Центральная система в облаке/интернете для приема событий, хранения телеметрии, визуализации, alarm-логики и маршрутизации уведомлений."},title:"Monitoring & Alarm Platform",kind:"developed-system",id:"monitoring-alarm-platform"},"edge-telemetry-agent.collector-runtime":{notation:"Контейнер",style:{color:"amber"},technology:"Python service",description:{txt:"Основной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox."},title:"Collector Runtime",kind:"container",id:"edge-telemetry-agent.collector-runtime"},"edge-telemetry-agent.configuration-bundle":{notation:"Контейнер",style:{color:"amber"},technology:"YAML files",description:{txt:"Локальный набор конфигурации источников, модели сигналов, polling-политик и параметров доставки."},title:"Configuration Bundle",kind:"container",id:"edge-telemetry-agent.configuration-bundle"},"edge-telemetry-agent.delivery-worker":{notation:"Контейнер",style:{color:"amber"},technology:"Python worker / MQTT publisher",description:{txt:"Фоновый контейнер доставки: читает outbox, публикует telemetry events и service topics в MQTT topic tree и обновляет статус доставки."},title:"Delivery Worker",kind:"container",id:"edge-telemetry-agent.delivery-worker"},"edge-telemetry-agent.outbox-store":{notation:"Контейнер",style:{color:"amber",shape:"storage"},technology:"SQLite",description:{txt:"Локальное надежное хранилище исходящих событий, статусов доставки и метаданных повторных попыток."},title:"Outbox Store",kind:"container",id:"edge-telemetry-agent.outbox-store"},"monitoring-alarm-platform.alarm-rule-engine":{notation:"Контейнер",style:{color:"amber"},technology:"Rule engine / stream processor",description:{txt:"Обрабатывает входящие события по правилам, ведет жизненный цикл alarm и инициирует уведомления и эскалации."},title:"Alarm Rule Engine",kind:"container",id:"monitoring-alarm-platform.alarm-rule-engine"},"monitoring-alarm-platform.mqtt-ingestion-gateway":{notation:"Контейнер",style:{color:"amber"},technology:"MQTT broker / ingestion service",description:{txt:"Принимает MQTT telemetry events и service topics от edge-агентов, восстанавливает routing context из topic, валидирует payload и передает canonical events на хранение и в Alarm Rule Engine."},title:"MQTT Ingestion Gateway",kind:"container",id:"monitoring-alarm-platform.mqtt-ingestion-gateway"},"monitoring-alarm-platform.notification-service":{notation:"Контейнер",style:{color:"amber"},technology:"Worker / notification gateway",description:{txt:"Маршрутизирует уведомления во внешние каналы по alarm-политикам и правилам эскалации."},title:"Notification Service",kind:"container",id:"monitoring-alarm-platform.notification-service"},"monitoring-alarm-platform.operator-dashboard":{notation:"Контейнер",style:{color:"amber"},technology:"Web SPA",description:{txt:"Веб-интерфейс для операторов и инженеров: панели мониторинга, состояние alarm, история событий и настройка правил."},title:"Operator Dashboard",kind:"container",id:"monitoring-alarm-platform.operator-dashboard"},"monitoring-alarm-platform.platform-api":{notation:"Контейнер",style:{color:"amber"},technology:"HTTP API / backend service",description:{txt:"Backend API для операторского интерфейса, состояния alarm, истории событий, конфигурации правил и политик уведомлений."},title:"Platform API",kind:"container",id:"monitoring-alarm-platform.platform-api"},"monitoring-alarm-platform.telemetry-store":{notation:"Контейнер",style:{color:"amber",shape:"storage"},technology:"Time-series DB / relational storage",description:{txt:"Хранит телеметрию, служебные события, историю alarm и данные для мониторинговых и операторских запросов."},title:"Telemetry Store",kind:"container",id:"monitoring-alarm-platform.telemetry-store"}},relations:{586866:{title:"Экспонирует nodes, subscriptions и значения через OPC UA",source:{model:"field-protocol-gateways.opc-ua-gateway"},target:{model:"edge-telemetry-agent.collector-runtime"},id:"586866"},ewjy7p:{title:"Публикует feedback состояния света 0/0/7",source:{model:"demo-stand-current-monitored-scope.device-1-1-1"},target:{model:"demo-stand-current-monitored-scope.light-switch-feedback"},id:"ewjy7p"},"1bukbxz":{title:"Публикует статус светового канала 0/0/7",source:{model:"demo-stand-current-monitored-scope.device-1-1-2"},target:{model:"demo-stand-current-monitored-scope.light-switch-feedback"},id:"1bukbxz"},lkpzpl:{title:"Публикует температуру помещения 2/0/0",source:{model:"demo-stand-current-monitored-scope.device-1-1-4"},target:{model:"demo-stand-current-monitored-scope.room-temperature"},id:"lkpzpl"},"8dkmwk":{title:"Поставляет feedback состояния света в текущий read scope",source:{model:"demo-stand-current-monitored-scope.light-switch-feedback"},target:{model:"edge-telemetry-agent.collector-runtime"},id:"8dkmwk"},"5anl8o":{title:"Поставляет температуру помещения в текущий read scope",source:{model:"demo-stand-current-monitored-scope.room-temperature"},target:{model:"edge-telemetry-agent.collector-runtime"},id:"5anl8o"},c9z7g3:{title:"Передают телеграммы, состояния и команды в KNX-сегменте",source:{model:"field-devices.knx-temperature-sensor"},target:{model:"field-protocol-gateways.knx-router"},id:"c9z7g3"},zexquv:{title:"Экспонирует group address и телеграммы через KNX/IP",source:{model:"field-protocol-gateways.knx-router"},target:{model:"edge-telemetry-agent.collector-runtime"},id:"zexquv"},"1mspxne":{title:"Экспонирует registers, coils и дискретные значения через Modbus",source:{model:"field-protocol-gateways.modbus-gateway"},target:{model:"edge-telemetry-agent.collector-runtime"},id:"1mspxne"},t8h8pv:{color:"green",line:"solid",head:"normal",title:"Проверяет live MQTT поток, topic tree и dashboard",source:{model:"service-engineer"},target:{model:"local-grafana"},kind:"interact-with",id:"t8h8pv"},"1gos04w":{title:"Публикует telemetry events и service topics в локальный MQTT broker",source:{model:"edge-telemetry-agent"},target:{model:"local-mqtt-broker"},id:"1gos04w"},"4klq72":{title:"Подписывается через grafana-mqtt-datasource на live MQTT topics",source:{model:"local-grafana"},target:{model:"local-mqtt-broker"},id:"4klq72"},"15jllvw":{color:"green",line:"solid",head:"normal",title:"Настраивает адаптеры, модель сигналов, polling и доставку",source:{model:"service-engineer"},target:{model:"edge-telemetry-agent"},kind:"interact-with",id:"15jllvw"},"1hotm1k":{color:"green",line:"solid",head:"normal",title:"Настраивает правила alarm, получателей и панели мониторинга",source:{model:"service-engineer"},target:{model:"monitoring-alarm-platform"},kind:"interact-with",id:"1hotm1k"},unfyc8:{color:"green",line:"solid",head:"normal",title:"Работает с панелями мониторинга, событиями и alarm",source:{model:"operator-dispatcher"},target:{model:"monitoring-alarm-platform"},kind:"interact-with",id:"unfyc8"},"1qi0i11":{title:"Передают данные через southbound-адаптеры",source:{model:"field-protocol-gateways"},target:{model:"edge-telemetry-agent.collector-runtime"},id:"1qi0i11"},lblwx5:{title:"Публикует telemetry events и service topics через MQTT",source:{model:"edge-telemetry-agent"},target:{model:"monitoring-alarm-platform"},id:"lblwx5"},"1rsym7h":{title:"Маршрутизирует уведомления и эскалации",source:{model:"monitoring-alarm-platform"},target:{model:"notification-channels"},id:"1rsym7h"},"1e9xjmn":{title:"Доставляют уведомления по alarm и служебные уведомления",source:{model:"notification-channels"},target:{model:"operator-dispatcher"},id:"1e9xjmn"},p5w7v3:{title:"Загружает описания источников, модель сигналов и runtime-политики",source:{model:"edge-telemetry-agent.collector-runtime"},target:{model:"edge-telemetry-agent.configuration-bundle"},id:"p5w7v3"},"1337gtq":{title:"Сохраняет нормализованные события и задания на доставку",source:{model:"edge-telemetry-agent.collector-runtime"},target:{model:"edge-telemetry-agent.outbox-store"},id:"1337gtq"},"14gqniy":{title:"Загружает настройки MQTT, topic contract и retry-политики",source:{model:"edge-telemetry-agent.delivery-worker"},target:{model:"edge-telemetry-agent.configuration-bundle"},id:"14gqniy"},w1v2d7:{title:"Читает ожидающие события и обновляет статус доставки",source:{model:"edge-telemetry-agent.delivery-worker"},target:{model:"edge-telemetry-agent.outbox-store"},id:"w1v2d7"},"1noy8cq":{title:"Публикует telemetry events и service topics по MQTT 5.0",source:{model:"edge-telemetry-agent.delivery-worker"},target:{model:"monitoring-alarm-platform.mqtt-ingestion-gateway"},id:"1noy8cq"},va66e2:{title:"Читает контекст и записывает состояние и историю alarm",source:{model:"monitoring-alarm-platform.alarm-rule-engine"},target:{model:"monitoring-alarm-platform.telemetry-store"},id:"va66e2"},pterx7:{title:"Запускает доставку уведомлений",source:{model:"monitoring-alarm-platform.alarm-rule-engine"},target:{model:"monitoring-alarm-platform.notification-service"},id:"pterx7"},"5gl5mv":{title:"Сохраняет canonical events и служебные события",source:{model:"monitoring-alarm-platform.mqtt-ingestion-gateway"},target:{model:"monitoring-alarm-platform.telemetry-store"},id:"5gl5mv"},"5ivtmw":{title:"Передает нормализованные события в Alarm Rule Engine",source:{model:"monitoring-alarm-platform.mqtt-ingestion-gateway"},target:{model:"monitoring-alarm-platform.alarm-rule-engine"},id:"5ivtmw"},tsrxzq:{title:"Отправляет email, SMS, push и webhook-уведомления",source:{model:"monitoring-alarm-platform.notification-service"},target:{model:"notification-channels"},id:"tsrxzq"},"1mqkcl4":{color:"green",line:"solid",head:"normal",title:"Работает с панелями мониторинга, alarm и историей",source:{model:"operator-dispatcher"},target:{model:"monitoring-alarm-platform.operator-dashboard"},kind:"interact-with",id:"1mqkcl4"},"1hjw68o":{color:"green",line:"solid",head:"normal",title:"Настраивает правила, получателей и панели мониторинга",source:{model:"service-engineer"},target:{model:"monitoring-alarm-platform.operator-dashboard"},kind:"interact-with",id:"1hjw68o"},zb0qd3:{title:"Запрашивает панели мониторинга, состояние alarm и конфигурацию",source:{model:"monitoring-alarm-platform.operator-dashboard"},target:{model:"monitoring-alarm-platform.platform-api"},id:"zb0qd3"},o1bqrn:{title:"Читает телеметрию, историю и временные линии alarm",source:{model:"monitoring-alarm-platform.platform-api"},target:{model:"monitoring-alarm-platform.telemetry-store"},id:"o1bqrn"},qsx5jg:{title:"Читает активные alarm и управляет конфигурацией правил в Alarm Rule Engine",source:{model:"monitoring-alarm-platform.platform-api"},target:{model:"monitoring-alarm-platform.alarm-rule-engine"},id:"qsx5jg"}},globals:{predicates:{},dynamicPredicates:{},styles:{}},views:{index:{_stage:"layouted",_type:"element",id:"index",title:"Landscape view",description:null,autoLayout:{direction:"TB"},notation:{nodes:[{title:"Участник",shape:"person",color:"green",kinds:["actor"]},{title:"Внешняя облачная система",shape:"rectangle",color:"secondary",kinds:["external-system"]},{title:"Внешняя система",shape:"rectangle",color:"secondary",kinds:["system"]},{title:"Система в scope реализации",shape:"rectangle",color:"amber",kinds:["developed-system"]}]},hash:"tLyKOMHgDNHIRLLlUDM1rLgiES8jui-EkvnNPi-VUHE",bounds:{x:0,y:0,width:2285,height:1861},nodes:[{id:"demo-stand-current-monitored-scope",parent:null,level:0,children:[],inEdges:[],outEdges:["1272t5q"],title:"Demo Stand Current Monitored Scope",modelRef:"demo-stand-current-monitored-scope",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Текущий набор сигналов demo-стенда, которые читает Edge Telemetry Agent."},tags:[],notation:"Внешняя система",technology:"KNX monitored signals / current read scope",kind:"system",x:0,y:0,width:380,height:180,labelBBox:{x:18,y:46,width:344,height:85}},{id:"field-devices",parent:null,level:0,children:[],inEdges:[],outEdges:["c2wk8h"],title:"Полевые устройства и контроллеры",modelRef:"field-devices",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Датчики, актуаторы, PLC, RTU и локальные системы автоматизации на объекте."},tags:[],notation:"Внешняя система",technology:"Field devices / PLC / RTU",kind:"system",x:490,y:0,width:379,height:180,labelBBox:{x:19,y:46,width:343,height:85}},{id:"service-engineer",parent:null,level:0,children:[],inEdges:[],outEdges:["1qtuqvz","cw5zhy","16a5o8z"],title:"Сервисный инженер",modelRef:"service-engineer",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Настраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы."},tags:[],notation:"Участник",kind:"actor",x:1447,y:0,width:398,height:180,labelBBox:{x:18,y:47,width:362,height:83}},{id:"field-protocol-gateways",parent:null,level:0,children:[],inEdges:["c2wk8h"],outEdges:["1sivq2o"],title:"Протокольные шлюзы и SCADA-контроллеры",modelRef:"field-protocol-gateways",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Точки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы."},tags:[],notation:"Внешняя система",technology:"KNX / Modbus / OPC UA / SCADA",kind:"system",x:409,y:340,width:454,height:180,labelBBox:{x:18,y:37,width:419,height:102}},{id:"local-grafana",parent:null,level:0,children:[],inEdges:["1qtuqvz"],outEdges:["1ymjbms"],title:"Local Grafana",modelRef:"local-grafana",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Временный dev/test UI из infra/local/compose.yaml. Использует grafana-mqtt-datasource для live-view MQTT payload и не считается частью target production architecture."},tags:[],notation:"Внешняя система",technology:"Grafana OSS / grafana-mqtt-datasource / localhost:3000 / Docker Compose",kind:"system",x:1475,y:340,width:341,height:180,labelBBox:{x:18,y:19,width:306,height:138}},{id:"edge-telemetry-agent",parent:null,level:0,children:[],inEdges:["1272t5q","1sivq2o","cw5zhy"],outEdges:["gsfp7x","1cfgwdb"],title:"Edge Telemetry Agent",modelRef:"edge-telemetry-agent",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Универсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий."},tags:[],notation:"Система в scope реализации",technology:"Edge collector / normalization / buffering / delivery",kind:"developed-system",navigateTo:"c2-edge-telemetry-agent-containers",x:717,y:679,width:382,height:180,labelBBox:{x:18,y:28,width:347,height:121}},{id:"local-mqtt-broker",parent:null,level:0,children:[],inEdges:["1ymjbms","gsfp7x"],outEdges:[],title:"Local MQTT Broker",modelRef:"local-mqtt-broker",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Временный dev/test MQTT broker из infra/local/compose.yaml. Используется текущей реализацией edge_agent как локальный publish target."},tags:[],notation:"Внешняя система",technology:"Eclipse Mosquitto / localhost:1883 / Docker Compose",kind:"system",x:1008,y:1019,width:386,height:180,labelBBox:{x:18,y:28,width:350,height:121}},{id:"monitoring-alarm-platform",parent:null,level:0,children:[],inEdges:["16a5o8z","4cjy00","1cfgwdb"],outEdges:["134rwii"],title:"Monitoring & Alarm Platform",modelRef:"monitoring-alarm-platform",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Центральная система в облаке/интернете для приема событий, хранения телеметрии, визуализации, alarm-логики и маршрутизации уведомлений."},tags:[],notation:"Система в scope реализации",technology:"Cloud monitoring platform / alarm engine / operator UI",kind:"developed-system",navigateTo:"c2-monitoring-alarm-platform-containers",x:1651,y:1019,width:369,height:180,labelBBox:{x:19,y:28,width:333,height:121}},{id:"notification-channels",parent:null,level:0,children:[],inEdges:["134rwii"],outEdges:["1cg2z5c"],title:"Каналы уведомлений",modelRef:"notification-channels",shape:"rectangle",color:"secondary",icon:"bootstrap:cloud",style:{opacity:15,size:"md",iconColor:"blue"},description:{txt:"Email, SMS, push, webhook и другие внешние облачные каналы доставки тревог и служебных уведомлений."},tags:[],notation:"Внешняя облачная система",technology:"Email / SMS / Push / Webhook",kind:"external-system",x:1428,y:1342,width:378,height:180,labelBBox:{x:46,y:37,width:316,height:102}},{id:"operator-dispatcher",parent:null,level:0,children:[],inEdges:["1cg2z5c"],outEdges:["4cjy00"],title:"Оператор / диспетчер",modelRef:"operator-dispatcher",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Работает с событиями, текущим состоянием объекта и alarm через центральную платформу мониторинга."},tags:[],notation:"Участник",kind:"actor",x:1635,y:1681,width:373,height:180,labelBBox:{x:18,y:47,width:337,height:83}}],edges:[{id:"1272t5q",parent:null,source:"demo-stand-current-monitored-scope",target:"edge-telemetry-agent",label:"[...]",relations:["8dkmwk","5anl8o"],color:"gray",line:"dashed",head:"normal",points:[[197,180],[209,275],[241,425],[327,520],[426,629],[582,692],[707,727]],labelBBox:{x:328,y:417,width:25,height:18}},{id:"c2wk8h",parent:null,source:"field-devices",target:"field-protocol-gateways",label:`Передают телеграммы, состояния и команды 
в KNX-сегменте`,relations:["c9z7g3"],color:"gray",line:"dashed",head:"normal",points:[[669,180],[663,226],[655,282],[649,329]],labelBBox:{x:660,y:241,width:296,height:35}},{id:"1cg2z5c",parent:null,source:"notification-channels",target:"operator-dispatcher",label:`Доставляют уведомления по alarm и 
служебные уведомления`,relations:["1e9xjmn"],color:"gray",line:"dashed",head:"normal",points:[[1650,1521],[1664,1554],[1681,1590],[1700,1621],[1711,1639],[1723,1656],[1736,1673]],labelBBox:{x:1701,y:1583,width:241,height:34}},{id:"134rwii",parent:null,source:"monitoring-alarm-platform",target:"notification-channels",label:"Маршрутизирует уведомления и эскалации",relations:["1rsym7h","tsrxzq"],color:"gray",line:"dashed",head:"normal",points:[[1704,1199],[1685,1217],[1667,1237],[1653,1259],[1640,1281],[1631,1307],[1626,1332]],labelBBox:{x:1654,y:1260,width:288,height:18}},{id:"1sivq2o",parent:null,source:"field-protocol-gateways",target:"edge-telemetry-agent",label:"[...]",relations:["586866","zexquv","1mspxne","1qi0i11"],color:"gray",line:"dashed",head:"normal",points:[[708,519],[745,566],[791,623],[830,671]],labelBBox:{x:781,y:587,width:25,height:18}},{id:"1ymjbms",parent:null,source:"local-grafana",target:"local-mqtt-broker",label:`Подписывается через 
grafana-mqtt-datasource на live MQTT 
topics`,relations:["4klq72"],color:"gray",line:"dashed",head:"normal",points:[[1645,519],[1640,633],[1615,831],[1510,959],[1482,993],[1443,1021],[1403,1042]],labelBBox:{x:1627,y:742,width:245,height:52}},{id:"gsfp7x",parent:null,source:"edge-telemetry-agent",target:"local-mqtt-broker",label:`Публикует telemetry events и service 
topics в локальный MQTT broker`,relations:["1gos04w"],color:"gray",line:"dashed",head:"normal",points:[[875,859],[868,893],[868,930],[887,959],[913,1001],[955,1031],[999,1053]],labelBBox:{x:888,y:920,width:241,height:35}},{id:"1qtuqvz",parent:null,source:"service-engineer",target:"local-grafana",label:`Проверяет live MQTT поток, topic tree и 
dashboard`,relations:["t8h8pv"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[1638,180],[1636,211],[1635,247],[1636,280],[1636,296],[1637,313],[1638,329]],labelBBox:{x:1637,y:241,width:262,height:35}},{id:"cw5zhy",parent:null,source:"service-engineer",target:"edge-telemetry-agent",label:`Настраивает адаптеры, модель сигналов, 
polling и доставку`,relations:["15jllvw"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[1447,155],[1345,195],[1225,256],[1138,340],[1041,433],[976,575],[941,670]],labelBBox:{x:1139,y:411,width:280,height:35}},{id:"16a5o8z",parent:null,source:"service-engineer",target:"monitoring-alarm-platform",label:`Настраивает правила alarm, получателей и 
панели мониторинга`,relations:["1hotm1k","1hjw68o"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[1845,163],[1876,183],[1904,208],[1923,240],[2070,485],[1953,839],[1882,1010]],labelBBox:{x:1992,y:581,width:292,height:34}},{id:"4cjy00",parent:null,source:"operator-dispatcher",target:"monitoring-alarm-platform",label:`Работает с панелями мониторинга, 
событиями и alarm`,relations:["unfyc8","1mqkcl4"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[1928,1681],[1944,1663],[1957,1643],[1966,1621],[2027,1472],[2023,1410],[1966,1259],[1959,1241],[1949,1223],[1937,1207]],labelBBox:{x:2011,y:1413,width:237,height:35}},{id:"1cfgwdb",parent:null,source:"edge-telemetry-agent",target:"monitoring-alarm-platform",label:`Публикует telemetry events и service 
topics через MQTT`,relations:["lblwx5","1noy8cq"],color:"gray",line:"dashed",head:"normal",points:[[1099,840],[1258,897],[1483,979],[1642,1037]],labelBBox:{x:1401,y:920,width:241,height:35}}]},"deployment-demo-stand-topology":{_type:"deployment",tags:null,links:null,_stage:"layouted",sourcePath:"likec4/deployments/demo-stand/views.c4",description:{txt:'Полная deployment topology demo-стенда по ETS-проекту "Выстовка": локальная сеть, удаленный хост с whitelist, KNX/IP, TP-линия 1.1 и облачный MQTT ingest.'},title:"Deployments / Demo Stand / Deployment - Demo Stand Topology",id:"deployment-demo-stand-topology",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Полевой сегмент",shape:"rectangle",color:"blue",kinds:["fieldbus-segment"]},{title:"Сетевой endpoint",shape:"rectangle",color:"indigo",kinds:["network-endpoint"]},{title:"Сетевой контур",shape:"rectangle",color:"sky",kinds:["network-zone"]},{title:"Среда развертывания",shape:"rectangle",color:"blue",kinds:["environment"]},{title:"Физическое устройство",shape:"rectangle",color:"secondary",kinds:["field-asset"]},{title:"Хост",shape:"rectangle",color:"amber",kinds:["host"]}]},hash:"8_QeXvR4AE3BbHJB1ZbbykaKXuy_b3vQ5eXPmS2atg4",bounds:{x:0,y:0,width:5139,height:1611},nodes:[{id:"demo-stand",parent:null,level:0,children:["demo-stand.local-lan","demo-stand.remote-access"],inEdges:["14yh323"],outEdges:["1dncw9"],deploymentRef:"demo-stand",title:"Demo Stand",kind:"environment",notation:"Среда развертывания",color:"blue",shape:"rectangle",description:{txt:'Фактический demo-стенд по данным ETS-проекта "Выстовка" и connection memo от 2026-03-28.'},tags:[],style:{opacity:15,size:"md"},depth:3,x:8,y:8,width:2176,height:1595,labelBBox:{x:6,y:0,width:78,height:15}},{id:"demo-stand.local-lan",parent:"demo-stand",level:1,children:["demo-stand.local-lan.tp-line-1-1","demo-stand.local-lan.knxnet-ip-backbone"],inEdges:["14doyry"],outEdges:["1dncw9"],deploymentRef:"demo-stand.local-lan",title:"Local LAN 192.0.2.0/24",kind:"network-zone",notation:"Сетевой контур",color:"sky",shape:"rectangle",description:{txt:"Локальная сеть demo-стенда с KNX/IP роутером и TP-линией 1.1; используется как целевая сеть удаленного подключения Edge Telemetry Agent."},tags:[],style:{opacity:15,size:"md"},depth:2,x:58,y:79,width:2076,height:716,labelBBox:{x:6,y:0,width:132,height:15}},{id:"demo-stand.local-lan.tp-line-1-1",parent:"demo-stand.local-lan",level:2,children:["demo-stand.local-lan.tp-line-1-1.device-1-1-1","demo-stand.local-lan.tp-line-1-1.device-1-1-2","demo-stand.local-lan.tp-line-1-1.device-1-1-3","demo-stand.local-lan.tp-line-1-1.device-1-1-4"],inEdges:[],outEdges:["1q4xxx4"],deploymentRef:"demo-stand.local-lan.tp-line-1-1",title:"KNX TP Line 1.1",kind:"fieldbus-segment",technology:"Twisted Pair",notation:"Полевой сегмент",color:"blue",shape:"rectangle",description:{txt:'Активная KNX TP-линия ETS-проекта "Выстовка" в области 1, линия 1.'},tags:[],style:{opacity:15,size:"md"},depth:1,x:108,y:150,width:1976,height:302,labelBBox:{x:6,y:0,width:91,height:15}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-1",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-1",title:"1.1.1 Pushbutton sensor 4 Komfort, 4-gang",kind:"field-asset",technology:"KNX TP device",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Панель кнопок с group address для света, scene и вентиляции: 0/0/1, 0/0/6, 0/0/7, 1/0/0, 1/1/0, 1/2/0, 1/3/0, 1/4/0."},tags:[],style:{opacity:15,size:"md"},x:158,y:222,width:354,height:180,labelBBox:{x:18,y:25,width:319,height:126}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-2",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-2",title:"1.1.2 DALI Gateway Tunable White Plus",kind:"field-asset",technology:"KNX TP to DALI gateway",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Шлюз освещения с адресами Switch/StatusSwitch, RGBW и Scene: 0/0/1-0/0/7."},tags:[],style:{opacity:15,size:"md"},x:642,y:222,width:398,height:180,labelBBox:{x:18,y:37,width:362,height:102}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-3",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-3",title:"1.1.3 Analogaktor 4fach",kind:"field-asset",technology:"KNX TP actuator",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Актуатор вентиляции: VentSwitch, VentDim, VentStatus, VentValue по адресам 1/0/0-1/3/0."},tags:[],style:{opacity:15,size:"md"},x:1170,y:222,width:354,height:180,labelBBox:{x:18,y:46,width:318,height:84}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-4",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-4",title:"1.1.4 Room controller display compact module",kind:"field-asset",technology:"KNX TP room controller",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Комнатный контроллер с Temperature value 2/0/0 и сценой 1/4/0."},tags:[],style:{opacity:15,size:"md"},x:1654,y:222,width:380,height:180,labelBBox:{x:18,y:34,width:344,height:108}},{id:"demo-stand.remote-access",parent:"demo-stand",level:1,children:["demo-stand.remote-access.public-knx-endpoint"],inEdges:["14yh323"],outEdges:["14doyry"],deploymentRef:"demo-stand.remote-access",title:"Remote Access",kind:"network-zone",notation:"Сетевой контур",color:"sky",shape:"rectangle",description:{txt:"Внешний маршрут для удаленной диагностики стенда."},tags:[],style:{opacity:15,size:"md"},depth:1,x:1507,y:1288,width:412,height:265,labelBBox:{x:6,y:0,width:100,height:15}},{id:"demo-stand.remote-access.public-knx-endpoint",parent:"demo-stand.remote-access",level:2,children:[],inEdges:["14yh323"],outEdges:["14doyry"],deploymentRef:"demo-stand.remote-access.public-knx-endpoint",title:"Public KNX/IP endpoint",kind:"network-endpoint",technology:"203.0.113.234:7171 / UDP / NAT",notation:"Сетевой endpoint",color:"indigo",shape:"rectangle",description:{txt:"Публичная точка входа с пробросом на локальный KNX/IP роутер 192.0.2.177:3671."},tags:[],style:{opacity:15,size:"md"},x:1539,y:1341,width:347,height:180,labelBBox:{x:18,y:46,width:312,height:85}},{id:"demo-stand.local-lan.knxnet-ip-backbone",parent:"demo-stand.local-lan",level:2,children:["demo-stand.local-lan.knxnet-ip-backbone.knx-router"],inEdges:["1q4xxx4","14doyry"],outEdges:["1dncw9"],deploymentRef:"demo-stand.local-lan.knxnet-ip-backbone",title:"KNXnet/IP Backbone",kind:"fieldbus-segment",technology:"Areas 0.0 and 1.0 / KNXnet-IP",notation:"Полевой сегмент",color:"blue",shape:"rectangle",modelRef:"field-protocol-gateways.knx-router",description:{txt:"IP-магистраль ETS-проекта: магистральная область 0.0 и главная линия 1.0 без прикладных устройств."},tags:[],style:{opacity:15,size:"md"},depth:1,x:1621,y:479,width:446,height:266,labelBBox:{x:6,y:0,width:129,height:15}},{id:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",parent:"demo-stand.local-lan.knxnet-ip-backbone",level:3,children:[],inEdges:["1q4xxx4","14doyry"],outEdges:["1dncw9"],kind:"instance",title:"Weinzierl KNX IP Router 751",description:{txt:"Локальная точка входа в KNX/IP и маршрутизатор в TP-линию 1.1."},technology:"192.0.2.177:3671 / UDP / TUNNELING / individual address 1.1.0",tags:[],icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg",color:"secondary",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",modelRef:"field-protocol-gateways.knx-router",x:1653,y:533,width:382,height:180,labelBBox:{x:46,y:46,width:320,height:84}},{id:"whitelisted-remote-host",parent:null,level:0,children:["whitelisted-remote-host.developer-network.edge-host"],inEdges:["1dncw9"],outEdges:["14yh323","ovflhp"],deploymentRef:"whitelisted-remote-host",title:"Whitelisted Remote Host",kind:"environment",notation:"Среда развертывания",color:"blue",shape:"rectangle",description:{txt:"Удаленный хост вне demo-стенда: мой компьютер с IP, разрешенным во внешнем KNX/IP маршруте."},tags:[],style:{opacity:15,size:"md"},depth:2,x:2234,y:850,width:2521,height:753,labelBBox:{x:6,y:0,width:162,height:15}},{id:"whitelisted-remote-host.developer-network.edge-host",parent:"whitelisted-remote-host",level:1,children:["whitelisted-remote-host.developer-network.edge-host.delivery-worker","whitelisted-remote-host.developer-network.edge-host.local-grafana","whitelisted-remote-host.developer-network.edge-host.collector-runtime","whitelisted-remote-host.developer-network.edge-host.local-mqtt-broker","whitelisted-remote-host.developer-network.edge-host.configuration-bundle","whitelisted-remote-host.developer-network.edge-host.outbox-store"],inEdges:["1dncw9"],outEdges:["14yh323","ovflhp"],deploymentRef:"whitelisted-remote-host.developer-network.edge-host",title:"Developer Workstation",kind:"host",technology:"Remote workstation / whitelisted IP",notation:"Хост",color:"amber",shape:"rectangle",description:{txt:"Хост, на котором запускается Edge Telemetry Agent. Подключается к KNX демо-стенду удаленно, а не размещается на самом стенде. На этом же рабочем месте текущая реализация поднимает local MQTT broker и Grafana dev harness."},tags:[],style:{opacity:15,size:"md"},depth:1,x:2266,y:903,width:2457,height:668,labelBBox:{x:6,y:0,width:158,height:15}},{id:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:[],outEdges:["hk8qcy","zga1te","55nc3t","ovflhp"],kind:"instance",title:"Delivery Worker",description:{txt:"Фоновый контейнер доставки: читает outbox, публикует telemetry events и service topics в MQTT topic tree и обновляет статус доставки."},technology:"Python worker / MQTT publisher",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",modelRef:"edge-telemetry-agent.delivery-worker",x:3459,y:975,width:369,height:180,labelBBox:{x:18,y:37,width:333,height:102}},{id:"whitelisted-remote-host.developer-network.edge-host.local-grafana",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:[],outEdges:["1rv9j8y"],kind:"instance",title:"Local Grafana",description:{txt:"Временный dev/test UI из infra/local/compose.yaml. Использует grafana-mqtt-datasource для live-view MQTT payload и не считается частью target production architecture."},technology:"Grafana OSS / grafana-mqtt-datasource / localhost:3000 / Docker Compose",tags:[],color:"secondary",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.local-grafana",modelRef:"local-grafana",x:2316,y:975,width:341,height:180,labelBBox:{x:18,y:19,width:306,height:138}},{id:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["1dncw9"],outEdges:["ql7ddz","os7a2v","14yh323"],kind:"instance",title:"Collector Runtime",description:{txt:"Основной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox."},technology:"Python service",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",modelRef:"edge-telemetry-agent.collector-runtime",x:3006,y:975,width:323,height:180,labelBBox:{x:18,y:28,width:287,height:120}},{id:"monitoring-cloud.public-cloud.mqtt-ingest-host.mqtt-ingestion-gateway",parent:null,level:0,children:[],inEdges:["ovflhp"],outEdges:[],kind:"instance",title:"MQTT Ingestion Gateway",description:{txt:"Принимает MQTT telemetry events и service topics от edge-агентов, восстанавливает routing context из topic, валидирует payload и передает canonical events на хранение и в Alarm Rule Engine."},technology:"MQTT broker / ingestion service",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"monitoring-cloud.public-cloud.mqtt-ingest-host.mqtt-ingestion-gateway",modelRef:"monitoring-alarm-platform.mqtt-ingestion-gateway",x:4787,y:1341,width:351,height:180,labelBBox:{x:18,y:19,width:316,height:139}},{id:"whitelisted-remote-host.developer-network.edge-host.local-mqtt-broker",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["55nc3t","1rv9j8y"],outEdges:[],kind:"instance",title:"Local MQTT Broker",description:{txt:"Временный dev/test MQTT broker из infra/local/compose.yaml. Используется текущей реализацией edge_agent как локальный publish target."},technology:"Eclipse Mosquitto / localhost:1883 / Docker Compose",tags:[],color:"secondary",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.local-mqtt-broker",modelRef:"local-mqtt-broker",x:2635,y:1341,width:386,height:180,labelBBox:{x:18,y:28,width:350,height:121}},{id:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["ql7ddz","hk8qcy"],outEdges:[],kind:"instance",title:"Configuration Bundle",description:{txt:"Локальный набор конфигурации источников, модели сигналов, polling-политик и параметров доставки."},technology:"YAML files",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",modelRef:"edge-telemetry-agent.configuration-bundle",x:3315,y:1341,width:376,height:180,labelBBox:{x:18,y:37,width:340,height:103}},{id:"whitelisted-remote-host.developer-network.edge-host.outbox-store",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["os7a2v","zga1te"],outEdges:[],kind:"instance",title:"Outbox Store",description:{txt:"Локальное надежное хранилище исходящих событий, статусов доставки и метаданных повторных попыток."},technology:"SQLite",tags:[],color:"amber",shape:"storage",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.outbox-store",modelRef:"edge-telemetry-agent.outbox-store",x:3907,y:1341,width:344,height:180,labelBBox:{x:18,y:37,width:308,height:103}}],edges:[{id:"14doyry",parent:"demo-stand",source:"demo-stand.remote-access.public-knx-endpoint",target:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",label:`Проброс UDP 7171 -> 3671 для удаленного 
KNX/IP доступа`,relations:["1lb1jct"],color:"gray",line:"dashed",head:"normal",points:[[1727,1341],[1752,1189],[1802,881],[1828,723]],labelBBox:{x:1807,y:1046,width:288,height:35}},{id:"1dncw9",parent:null,source:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",target:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",label:`Экспонирует group address и телеграммы 
через KNX/IP`,relations:["zexquv"],color:"gray",line:"dashed",head:"normal",points:[[2035,645],[2320,679],[2843,752],[3002,850],[3048,878],[3086,924],[3114,966]],labelBBox:{x:2989,y:804,width:276,height:34}},{id:"ql7ddz",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",target:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",label:`Загружает описания источников, модель 
сигналов и runtime-политики`,relations:["p5w7v3"],color:"gray",line:"dashed",head:"normal",points:[[3250,1154],[3299,1209],[3363,1278],[3415,1334]],labelBBox:{x:3357,y:1229,width:276,height:35}},{id:"hk8qcy",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",target:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",label:`Загружает настройки MQTT, topic contract 
и retry-политики`,relations:["14gqniy"],color:"gray",line:"dashed",head:"normal",points:[[3610,1154],[3589,1208],[3563,1276],[3541,1331]],labelBBox:{x:3583,y:1229,width:283,height:35}},{id:"os7a2v",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",target:"whitelisted-remote-host.developer-network.edge-host.outbox-store",label:`Сохраняет нормализованные события и 
задания на доставку`,relations:["1337gtq"],color:"gray",line:"dashed",head:"normal",points:[[3330,1076],[3477,1090],[3698,1127],[3867,1220],[3918,1248],[3966,1292],[4002,1332]],labelBBox:{x:3941,y:1229,width:265,height:35}},{id:"zga1te",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",target:"whitelisted-remote-host.developer-network.edge-host.outbox-store",label:`Читает ожидающие события и обновляет 
статус доставки`,relations:["w1v2d7"],color:"gray",line:"dashed",head:"normal",points:[[3829,1086],[3993,1108],[4215,1151],[4269,1220],[4301,1260],[4275,1302],[4233,1338]],labelBBox:{x:4284,y:1229,width:269,height:35}},{id:"55nc3t",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",target:"whitelisted-remote-host.developer-network.edge-host.local-mqtt-broker",label:`Публикует в локальный broker 
mqtt://localhost:1883`,relations:["djqgze"],color:"gray",line:"dashed",head:"normal",points:[[3459,1153],[3458,1153],[3456,1154],[3455,1155],[3314,1219],[3154,1289],[3031,1343]],labelBBox:{x:3302,y:1229,width:203,height:35}},{id:"1rv9j8y",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.local-grafana",target:"whitelisted-remote-host.developer-network.edge-host.local-mqtt-broker",label:`Подписывается через 
grafana-mqtt-datasource на live MQTT 
topics`,relations:["4klq72","1a258g0"],color:"gray",line:"dashed",head:"normal",points:[[2570,1154],[2621,1209],[2686,1278],[2738,1334]],labelBBox:{x:2679,y:1221,width:245,height:51}},{id:"14yh323",parent:null,source:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",target:"demo-stand.remote-access.public-knx-endpoint",label:`Подключается к стенду через whitelisted 
public KNX/IP endpoint`,relations:["vzyll7"],color:"gray",line:"dashed",head:"normal",points:[[3007,1153],[3005,1154],[3004,1154],[3002,1155],[2674,1267],[2572,1213],[2234,1288],[2121,1313],[1996,1347],[1897,1375]],labelBBox:{x:2743,y:1229,width:272,height:35}},{id:"ovflhp",parent:null,source:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",target:"monitoring-cloud.public-cloud.mqtt-ingest-host.mqtt-ingestion-gateway",label:`Публикует telemetry events и service 
topics по MQTT 5.0`,relations:["1noy8cq"],color:"gray",line:"dashed",head:"normal",points:[[3829,1071],[4119,1082],[4667,1117],[4829,1220],[4871,1246],[4902,1291],[4923,1332]],labelBBox:{x:4888,y:1229,width:241,height:35}},{id:"1q4xxx4",parent:"demo-stand.local-lan",source:"demo-stand.local-lan.tp-line-1-1",target:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",label:`Передает KNX TP телеграммы в роутер 
1.1.0`,relations:["bgglu2"],color:"gray",line:"dashed",head:"normal",points:[[1844,452],[1844,475],[1844,500],[1844,522]],labelBBox:{x:1845,y:454,width:265,height:35}}]},"deployment-demo-stand-current-implementation":{_type:"deployment",tags:null,links:null,_stage:"layouted",sourcePath:"likec4/deployments/demo-stand/views.c4",description:{txt:"Текущая реализация demo-стенда: Edge Telemetry Agent работает на Developer Workstation, публикует в Local MQTT Broker, а Local Grafana читает live MQTT поток через grafana-mqtt-datasource."},title:"Deployments / Demo Stand / Deployment - Demo Stand Current Implementation",id:"deployment-demo-stand-current-implementation",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Полевой сегмент",shape:"rectangle",color:"blue",kinds:["fieldbus-segment"]},{title:"Сетевой endpoint",shape:"rectangle",color:"indigo",kinds:["network-endpoint"]},{title:"Сетевой контур",shape:"rectangle",color:"sky",kinds:["network-zone"]},{title:"Среда развертывания",shape:"rectangle",color:"blue",kinds:["environment"]},{title:"Физическое устройство",shape:"rectangle",color:"secondary",kinds:["field-asset"]},{title:"Хост",shape:"rectangle",color:"amber",kinds:["host"]}]},hash:"bqr7ocpfhaN-vD0vEqGO2wnoSF5X2jrMZ5_uPwMNufw",bounds:{x:0,y:0,width:4763,height:1611},nodes:[{id:"demo-stand",parent:null,level:0,children:["demo-stand.local-lan","demo-stand.remote-access"],inEdges:["14yh323"],outEdges:["1dncw9"],deploymentRef:"demo-stand",title:"Demo Stand",kind:"environment",notation:"Среда развертывания",color:"blue",shape:"rectangle",description:{txt:'Фактический demo-стенд по данным ETS-проекта "Выстовка" и connection memo от 2026-03-28.'},tags:[],style:{opacity:15,size:"md"},depth:3,x:8,y:8,width:2176,height:1595,labelBBox:{x:6,y:0,width:78,height:15}},{id:"demo-stand.local-lan",parent:"demo-stand",level:1,children:["demo-stand.local-lan.tp-line-1-1","demo-stand.local-lan.knxnet-ip-backbone"],inEdges:["14doyry"],outEdges:["1dncw9"],deploymentRef:"demo-stand.local-lan",title:"Local LAN 192.0.2.0/24",kind:"network-zone",notation:"Сетевой контур",color:"sky",shape:"rectangle",description:{txt:"Локальная сеть demo-стенда с KNX/IP роутером и TP-линией 1.1; используется как целевая сеть удаленного подключения Edge Telemetry Agent."},tags:[],style:{opacity:15,size:"md"},depth:2,x:58,y:79,width:2076,height:716,labelBBox:{x:6,y:0,width:132,height:15}},{id:"demo-stand.local-lan.tp-line-1-1",parent:"demo-stand.local-lan",level:2,children:["demo-stand.local-lan.tp-line-1-1.device-1-1-1","demo-stand.local-lan.tp-line-1-1.device-1-1-2","demo-stand.local-lan.tp-line-1-1.device-1-1-3","demo-stand.local-lan.tp-line-1-1.device-1-1-4"],inEdges:[],outEdges:["1q4xxx4"],deploymentRef:"demo-stand.local-lan.tp-line-1-1",title:"KNX TP Line 1.1",kind:"fieldbus-segment",technology:"Twisted Pair",notation:"Полевой сегмент",color:"blue",shape:"rectangle",description:{txt:'Активная KNX TP-линия ETS-проекта "Выстовка" в области 1, линия 1.'},tags:[],style:{opacity:15,size:"md"},depth:1,x:108,y:150,width:1976,height:302,labelBBox:{x:6,y:0,width:91,height:15}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-1",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-1",title:"1.1.1 Pushbutton sensor 4 Komfort, 4-gang",kind:"field-asset",technology:"KNX TP device",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Панель кнопок с group address для света, scene и вентиляции: 0/0/1, 0/0/6, 0/0/7, 1/0/0, 1/1/0, 1/2/0, 1/3/0, 1/4/0."},tags:[],style:{opacity:15,size:"md"},x:158,y:222,width:354,height:180,labelBBox:{x:18,y:25,width:319,height:126}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-2",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-2",title:"1.1.2 DALI Gateway Tunable White Plus",kind:"field-asset",technology:"KNX TP to DALI gateway",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Шлюз освещения с адресами Switch/StatusSwitch, RGBW и Scene: 0/0/1-0/0/7."},tags:[],style:{opacity:15,size:"md"},x:642,y:222,width:398,height:180,labelBBox:{x:18,y:37,width:362,height:102}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-3",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-3",title:"1.1.3 Analogaktor 4fach",kind:"field-asset",technology:"KNX TP actuator",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Актуатор вентиляции: VentSwitch, VentDim, VentStatus, VentValue по адресам 1/0/0-1/3/0."},tags:[],style:{opacity:15,size:"md"},x:1170,y:222,width:354,height:180,labelBBox:{x:18,y:46,width:318,height:84}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-4",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-4",title:"1.1.4 Room controller display compact module",kind:"field-asset",technology:"KNX TP room controller",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Комнатный контроллер с Temperature value 2/0/0 и сценой 1/4/0."},tags:[],style:{opacity:15,size:"md"},x:1654,y:222,width:380,height:180,labelBBox:{x:18,y:34,width:344,height:108}},{id:"demo-stand.remote-access",parent:"demo-stand",level:1,children:["demo-stand.remote-access.public-knx-endpoint"],inEdges:["14yh323"],outEdges:["14doyry"],deploymentRef:"demo-stand.remote-access",title:"Remote Access",kind:"network-zone",notation:"Сетевой контур",color:"sky",shape:"rectangle",description:{txt:"Внешний маршрут для удаленной диагностики стенда."},tags:[],style:{opacity:15,size:"md"},depth:1,x:1507,y:1288,width:412,height:265,labelBBox:{x:6,y:0,width:100,height:15}},{id:"demo-stand.remote-access.public-knx-endpoint",parent:"demo-stand.remote-access",level:2,children:[],inEdges:["14yh323"],outEdges:["14doyry"],deploymentRef:"demo-stand.remote-access.public-knx-endpoint",title:"Public KNX/IP endpoint",kind:"network-endpoint",technology:"203.0.113.234:7171 / UDP / NAT",notation:"Сетевой endpoint",color:"indigo",shape:"rectangle",description:{txt:"Публичная точка входа с пробросом на локальный KNX/IP роутер 192.0.2.177:3671."},tags:[],style:{opacity:15,size:"md"},x:1539,y:1341,width:347,height:180,labelBBox:{x:18,y:46,width:312,height:85}},{id:"demo-stand.local-lan.knxnet-ip-backbone",parent:"demo-stand.local-lan",level:2,children:["demo-stand.local-lan.knxnet-ip-backbone.knx-router"],inEdges:["1q4xxx4","14doyry"],outEdges:["1dncw9"],deploymentRef:"demo-stand.local-lan.knxnet-ip-backbone",title:"KNXnet/IP Backbone",kind:"fieldbus-segment",technology:"Areas 0.0 and 1.0 / KNXnet-IP",notation:"Полевой сегмент",color:"blue",shape:"rectangle",modelRef:"field-protocol-gateways.knx-router",description:{txt:"IP-магистраль ETS-проекта: магистральная область 0.0 и главная линия 1.0 без прикладных устройств."},tags:[],style:{opacity:15,size:"md"},depth:1,x:1621,y:479,width:446,height:266,labelBBox:{x:6,y:0,width:129,height:15}},{id:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",parent:"demo-stand.local-lan.knxnet-ip-backbone",level:3,children:[],inEdges:["1q4xxx4","14doyry"],outEdges:["1dncw9"],kind:"instance",title:"Weinzierl KNX IP Router 751",description:{txt:"Локальная точка входа в KNX/IP и маршрутизатор в TP-линию 1.1."},technology:"192.0.2.177:3671 / UDP / TUNNELING / individual address 1.1.0",tags:[],icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg",color:"secondary",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",modelRef:"field-protocol-gateways.knx-router",x:1653,y:533,width:382,height:180,labelBBox:{x:46,y:46,width:320,height:84}},{id:"whitelisted-remote-host",parent:null,level:0,children:["whitelisted-remote-host.developer-network.edge-host"],inEdges:["1dncw9"],outEdges:["14yh323"],deploymentRef:"whitelisted-remote-host",title:"Whitelisted Remote Host",kind:"environment",notation:"Среда развертывания",color:"blue",shape:"rectangle",description:{txt:"Удаленный хост вне demo-стенда: мой компьютер с IP, разрешенным во внешнем KNX/IP маршруте."},tags:[],style:{opacity:15,size:"md"},depth:2,x:2234,y:850,width:2521,height:753,labelBBox:{x:6,y:0,width:162,height:15}},{id:"whitelisted-remote-host.developer-network.edge-host",parent:"whitelisted-remote-host",level:1,children:["whitelisted-remote-host.developer-network.edge-host.delivery-worker","whitelisted-remote-host.developer-network.edge-host.local-grafana","whitelisted-remote-host.developer-network.edge-host.collector-runtime","whitelisted-remote-host.developer-network.edge-host.local-mqtt-broker","whitelisted-remote-host.developer-network.edge-host.configuration-bundle","whitelisted-remote-host.developer-network.edge-host.outbox-store"],inEdges:["1dncw9"],outEdges:["14yh323"],deploymentRef:"whitelisted-remote-host.developer-network.edge-host",title:"Developer Workstation",kind:"host",technology:"Remote workstation / whitelisted IP",notation:"Хост",color:"amber",shape:"rectangle",description:{txt:"Хост, на котором запускается Edge Telemetry Agent. Подключается к KNX демо-стенду удаленно, а не размещается на самом стенде. На этом же рабочем месте текущая реализация поднимает local MQTT broker и Grafana dev harness."},tags:[],style:{opacity:15,size:"md"},depth:1,x:2266,y:903,width:2457,height:668,labelBBox:{x:6,y:0,width:158,height:15}},{id:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:[],outEdges:["hk8qcy","zga1te","55nc3t"],kind:"instance",title:"Delivery Worker",description:{txt:"Фоновый контейнер доставки: читает outbox, публикует telemetry events и service topics в MQTT topic tree и обновляет статус доставки."},technology:"Python worker / MQTT publisher",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",modelRef:"edge-telemetry-agent.delivery-worker",x:3459,y:975,width:369,height:180,labelBBox:{x:18,y:37,width:333,height:102}},{id:"whitelisted-remote-host.developer-network.edge-host.local-grafana",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:[],outEdges:["1rv9j8y"],kind:"instance",title:"Local Grafana",description:{txt:"Временный dev/test UI из infra/local/compose.yaml. Использует grafana-mqtt-datasource для live-view MQTT payload и не считается частью target production architecture."},technology:"Grafana OSS / grafana-mqtt-datasource / localhost:3000 / Docker Compose",tags:[],color:"secondary",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.local-grafana",modelRef:"local-grafana",x:2316,y:975,width:341,height:180,labelBBox:{x:18,y:19,width:306,height:138}},{id:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["1dncw9"],outEdges:["ql7ddz","os7a2v","14yh323"],kind:"instance",title:"Collector Runtime",description:{txt:"Основной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox."},technology:"Python service",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",modelRef:"edge-telemetry-agent.collector-runtime",x:3006,y:975,width:323,height:180,labelBBox:{x:18,y:28,width:287,height:120}},{id:"whitelisted-remote-host.developer-network.edge-host.local-mqtt-broker",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["55nc3t","1rv9j8y"],outEdges:[],kind:"instance",title:"Local MQTT Broker",description:{txt:"Временный dev/test MQTT broker из infra/local/compose.yaml. Используется текущей реализацией edge_agent как локальный publish target."},technology:"Eclipse Mosquitto / localhost:1883 / Docker Compose",tags:[],color:"secondary",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.local-mqtt-broker",modelRef:"local-mqtt-broker",x:2390,y:1341,width:386,height:180,labelBBox:{x:18,y:28,width:350,height:121}},{id:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["ql7ddz","hk8qcy"],outEdges:[],kind:"instance",title:"Configuration Bundle",description:{txt:"Локальный набор конфигурации источников, модели сигналов, polling-политик и параметров доставки."},technology:"YAML files",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",modelRef:"edge-telemetry-agent.configuration-bundle",x:2980,y:1341,width:376,height:180,labelBBox:{x:18,y:37,width:340,height:103}},{id:"whitelisted-remote-host.developer-network.edge-host.outbox-store",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["os7a2v","zga1te"],outEdges:[],kind:"instance",title:"Outbox Store",description:{txt:"Локальное надежное хранилище исходящих событий, статусов доставки и метаданных повторных попыток."},technology:"SQLite",tags:[],color:"amber",shape:"storage",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.outbox-store",modelRef:"edge-telemetry-agent.outbox-store",x:3829,y:1341,width:344,height:180,labelBBox:{x:18,y:37,width:308,height:103}}],edges:[{id:"14doyry",parent:"demo-stand",source:"demo-stand.remote-access.public-knx-endpoint",target:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",label:`Проброс UDP 7171 -> 3671 для удаленного 
KNX/IP доступа`,relations:["1lb1jct"],color:"gray",line:"dashed",head:"normal",points:[[1727,1341],[1752,1189],[1802,881],[1828,723]],labelBBox:{x:1807,y:1046,width:288,height:35}},{id:"1dncw9",parent:null,source:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",target:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",label:`Экспонирует group address и телеграммы 
через KNX/IP`,relations:["zexquv"],color:"gray",line:"dashed",head:"normal",points:[[2035,645],[2320,679],[2843,752],[3002,850],[3048,878],[3086,924],[3114,966]],labelBBox:{x:2989,y:804,width:276,height:34}},{id:"ql7ddz",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",target:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",label:`Загружает описания источников, модель 
сигналов и runtime-политики`,relations:["p5w7v3"],color:"gray",line:"dashed",head:"normal",points:[[3168,1154],[3168,1208],[3168,1276],[3168,1331]],labelBBox:{x:3169,y:1229,width:276,height:35}},{id:"hk8qcy",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",target:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",label:`Загружает настройки MQTT, topic contract 
и retry-политики`,relations:["14gqniy"],color:"gray",line:"dashed",head:"normal",points:[[3572,1154],[3537,1194],[3493,1241],[3447,1276],[3419,1297],[3389,1318],[3358,1336]],labelBBox:{x:3507,y:1229,width:283,height:35}},{id:"os7a2v",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",target:"whitelisted-remote-host.developer-network.edge-host.outbox-store",label:`Сохраняет нормализованные события и 
задания на доставку`,relations:["1337gtq"],color:"gray",line:"dashed",head:"normal",points:[[3329,1087],[3508,1112],[3782,1160],[3867,1220],[3907,1247],[3937,1291],[3959,1331]],labelBBox:{x:3921,y:1229,width:265,height:35}},{id:"zga1te",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",target:"whitelisted-remote-host.developer-network.edge-host.outbox-store",label:`Читает ожидающие события и обновляет 
статус доставки`,relations:["w1v2d7"],color:"gray",line:"dashed",head:"normal",points:[[3829,1086],[3993,1108],[4215,1151],[4269,1220],[4313,1276],[4256,1326],[4184,1363]],labelBBox:{x:4285,y:1229,width:269,height:35}},{id:"55nc3t",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",target:"whitelisted-remote-host.developer-network.edge-host.local-mqtt-broker",label:`Публикует в локальный broker 
mqtt://localhost:1883`,relations:["djqgze"],color:"gray",line:"dashed",head:"normal",points:[[3459,1153],[3458,1154],[3456,1154],[3455,1155],[3222,1237],[3149,1209],[2915,1288],[2872,1302],[2828,1319],[2785,1337]],labelBBox:{x:3196,y:1229,width:203,height:35}},{id:"1rv9j8y",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.local-grafana",target:"whitelisted-remote-host.developer-network.edge-host.local-mqtt-broker",label:`Подписывается через 
grafana-mqtt-datasource на live MQTT 
topics`,relations:["4klq72","1a258g0"],color:"gray",line:"dashed",head:"normal",points:[[2510,1154],[2524,1208],[2542,1276],[2557,1331]],labelBBox:{x:2542,y:1221,width:245,height:51}},{id:"14yh323",parent:null,source:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",target:"demo-stand.remote-access.public-knx-endpoint",label:`Подключается к стенду через whitelisted 
public KNX/IP endpoint`,relations:["vzyll7"],color:"gray",line:"dashed",head:"normal",points:[[3007,1153],[3005,1154],[3004,1154],[3002,1155],[2961,1169],[2276,1278],[2234,1288],[2121,1313],[1996,1347],[1897,1375]],labelBBox:{x:2620,y:1229,width:272,height:35}},{id:"1q4xxx4",parent:"demo-stand.local-lan",source:"demo-stand.local-lan.tp-line-1-1",target:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",label:`Передает KNX TP телеграммы в роутер 
1.1.0`,relations:["bgglu2"],color:"gray",line:"dashed",head:"normal",points:[[1844,452],[1844,475],[1844,500],[1844,522]],labelBBox:{x:1845,y:454,width:265,height:35}}]},"demo-stand-current-monitored-points":{_type:"element",tags:null,links:null,_stage:"layouted",sourcePath:"likec4/deployments/demo-stand/views.c4",description:{txt:"Текущий мониторинговый срез demo-стенда: устройства и KNX group address, которые сейчас читает Edge Telemetry Agent."},title:"Deployments / Demo Stand / Demo Stand - Current Monitored Points",id:"demo-stand-current-monitored-points",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Внешняя система",shape:"rectangle",color:"secondary",kinds:["system"]},{title:"Контейнер",shape:"rectangle",color:"amber",kinds:["container"]},{title:"Полевое устройство",shape:"rectangle",color:"secondary",kinds:["field-device"]},{title:"Полевой шлюз",shape:"rectangle",color:"secondary",kinds:["field-gateway"]},{title:"Система в scope реализации",shape:"rectangle",color:"amber",kinds:["developed-system"]},{title:"Точка телеметрии",shape:"rectangle",color:"secondary",kinds:["telemetry-point"]}]},hash:"zLAYrW1mWgboB7yl3RcYkT-4p1L_Nj1dQFOvHp-l6_k",bounds:{x:0,y:0,width:1991,height:954},nodes:[{id:"demo-stand-current-monitored-scope",parent:null,level:0,children:["demo-stand-current-monitored-scope.device-1-1-1","demo-stand-current-monitored-scope.device-1-1-2","demo-stand-current-monitored-scope.device-1-1-4","demo-stand-current-monitored-scope.light-switch-feedback","demo-stand-current-monitored-scope.room-temperature"],inEdges:[],outEdges:["6c0ua1","1t1ianm"],title:"Demo Stand Current Monitored Scope",modelRef:"demo-stand-current-monitored-scope",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Текущий набор сигналов demo-стенда, которые читает Edge Telemetry Agent."},tags:[],notation:"Внешняя система",technology:"KNX monitored signals / current read scope",kind:"system",depth:1,x:8,y:8,width:1541,height:605,labelBBox:{x:6,y:0,width:247,height:15}},{id:"field-protocol-gateways",parent:null,level:0,children:["field-protocol-gateways.knx-router"],inEdges:[],outEdges:["g1oj49"],title:"Протокольные шлюзы и SCADA-контроллеры",modelRef:"field-protocol-gateways",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Точки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы."},tags:[],notation:"Внешняя система",technology:"KNX / Modbus / OPC UA / SCADA",kind:"system",depth:1,x:1599,y:340,width:384,height:265,labelBBox:{x:6,y:0,width:233,height:15}},{id:"demo-stand-current-monitored-scope.device-1-1-1",parent:"demo-stand-current-monitored-scope",level:1,children:[],inEdges:[],outEdges:["moi6x7"],title:"1.1.1 Pushbutton sensor 4 Komfort, 4-gang",modelRef:"demo-stand-current-monitored-scope.device-1-1-1",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Кнопочная панель, участвующая в публикации feedback состояния света."},tags:[],notation:"Полевое устройство",technology:"KNX TP device",kind:"field-device",x:48,y:69,width:369,height:180,labelBBox:{x:18,y:34,width:333,height:109}},{id:"demo-stand-current-monitored-scope.device-1-1-2",parent:"demo-stand-current-monitored-scope",level:1,children:[],inEdges:[],outEdges:["1sohalk"],title:"1.1.2 DALI Gateway Tunable White Plus",modelRef:"demo-stand-current-monitored-scope.device-1-1-2",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"DALI gateway, публикующий статус светового канала."},tags:[],notation:"Полевое устройство",technology:"KNX TP to DALI gateway",kind:"field-device",x:528,y:69,width:398,height:180,labelBBox:{x:18,y:46,width:362,height:85}},{id:"demo-stand-current-monitored-scope.device-1-1-4",parent:"demo-stand-current-monitored-scope",level:1,children:[],inEdges:[],outEdges:["r5yyd"],title:"1.1.4 Room controller display compact module",modelRef:"demo-stand-current-monitored-scope.device-1-1-4",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Комнатный контроллер, публикующий температуру помещения."},tags:[],notation:"Полевое устройство",technology:"KNX TP room controller",kind:"field-device",x:1036,y:69,width:398,height:180,labelBBox:{x:18,y:34,width:362,height:109}},{id:"field-protocol-gateways.knx-router",parent:"field-protocol-gateways",level:1,children:[],inEdges:[],outEdges:["g1oj49"],title:"KNX Segment",modelRef:"field-protocol-gateways.knx-router",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"KNX / KNXnet-IP",kind:"field-gateway",x:1631,y:393,width:320,height:180,labelBBox:{x:81,y:66,width:188,height:45}},{id:"demo-stand-current-monitored-scope.light-switch-feedback",parent:"demo-stand-current-monitored-scope",level:1,children:[],inEdges:["moi6x7","1sohalk"],outEdges:["6c0ua1"],title:"0/0/7 StatusSwitch",modelRef:"demo-stand-current-monitored-scope.light-switch-feedback",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Фактически читаемая точка состояния света."},tags:[],notation:"Точка телеметрии",technology:"KNX DPT 1.001 / feedback",kind:"telemetry-point",x:542,y:393,width:369,height:180,labelBBox:{x:18,y:55,width:333,height:67}},{id:"demo-stand-current-monitored-scope.room-temperature",parent:"demo-stand-current-monitored-scope",level:1,children:[],inEdges:["r5yyd"],outEdges:["1t1ianm"],title:"2/0/0 Temp Value",modelRef:"demo-stand-current-monitored-scope.room-temperature",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Фактически читаемая точка температуры помещения."},tags:[],notation:"Точка телеметрии",technology:"KNX DPT 9.xxx / room temperature",kind:"telemetry-point",x:1067,y:393,width:336,height:180,labelBBox:{x:18,y:46,width:300,height:85}},{id:"edge-telemetry-agent",parent:null,level:0,children:["edge-telemetry-agent.collector-runtime"],inEdges:["6c0ua1","1t1ianm","g1oj49"],outEdges:[],title:"Edge Telemetry Agent",modelRef:"edge-telemetry-agent",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Универсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий."},tags:[],notation:"Система в scope реализации",technology:"Edge collector / normalization / buffering / delivery",kind:"developed-system",depth:1,navigateTo:"c2-edge-telemetry-agent-containers",x:1041,y:681,width:388,height:265,labelBBox:{x:6,y:0,width:146,height:15}},{id:"edge-telemetry-agent.collector-runtime",parent:"edge-telemetry-agent",level:1,children:[],inEdges:["6c0ua1","1t1ianm","g1oj49"],outEdges:[],title:"Collector Runtime",modelRef:"edge-telemetry-agent.collector-runtime",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Основной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox."},tags:[],notation:"Контейнер",technology:"Python service",kind:"container",x:1073,y:734,width:323,height:180,labelBBox:{x:18,y:28,width:287,height:121}}],edges:[{id:"moi6x7",parent:"demo-stand-current-monitored-scope",source:"demo-stand-current-monitored-scope.device-1-1-1",target:"demo-stand-current-monitored-scope.light-switch-feedback",label:"Публикует feedback состояния света 0/0/7",relations:["ewjy7p"],color:"gray",line:"dashed",head:"normal",points:[[314,249],[343,278],[377,308],[412,332],[449,358],[492,382],[533,402]],labelBBox:{x:413,y:310,width:286,height:18}},{id:"1sohalk",parent:"demo-stand-current-monitored-scope",source:"demo-stand-current-monitored-scope.device-1-1-2",target:"demo-stand-current-monitored-scope.light-switch-feedback",label:"Публикует статус светового канала 0/0/7",relations:["1bukbxz"],color:"gray",line:"dashed",head:"normal",points:[[727,249],[727,291],[727,340],[727,383]],labelBBox:{x:728,y:310,width:284,height:18}},{id:"r5yyd",parent:"demo-stand-current-monitored-scope",source:"demo-stand-current-monitored-scope.device-1-1-4",target:"demo-stand-current-monitored-scope.room-temperature",label:"Публикует температуру помещения 2/0/0",relations:["lkpzpl"],color:"gray",line:"dashed",head:"normal",points:[[1235,249],[1235,291],[1235,340],[1235,383]],labelBBox:{x:1236,y:310,width:272,height:18}},{id:"6c0ua1",parent:null,source:"demo-stand-current-monitored-scope.light-switch-feedback",target:"edge-telemetry-agent.collector-runtime",label:`Поставляет feedback состояния света в 
текущий read scope`,relations:["8dkmwk"],color:"gray",line:"dashed",head:"normal",points:[[814,573],[850,607],[893,644],[935,673],[975,700],[1021,726],[1064,747]],labelBBox:{x:936,y:634,width:271,height:35}},{id:"1t1ianm",parent:null,source:"demo-stand-current-monitored-scope.room-temperature",target:"edge-telemetry-agent.collector-runtime",label:`Поставляет температуру помещения в 
текущий read scope`,relations:["5anl8o"],color:"gray",line:"dashed",head:"normal",points:[[1235,573],[1235,619],[1235,676],[1235,724]],labelBBox:{x:1236,y:634,width:257,height:35}},{id:"g1oj49",parent:null,source:"field-protocol-gateways.knx-router",target:"edge-telemetry-agent.collector-runtime",label:`Экспонирует group address и телеграммы 
через KNX/IP`,relations:["zexquv"],color:"gray",line:"dashed",head:"normal",points:[[1671,573],[1625,606],[1571,642],[1521,673],[1484,695],[1444,717],[1406,738]],labelBBox:{x:1583,y:634,width:276,height:35}}]},"c2-field-devices":{_type:"element",tags:null,links:null,_stage:"layouted",sourcePath:"likec4/devices/views.c4",description:{txt:"Внутренняя структура полевых устройств и контроллеров. Диаграмма показывает конкретные устройства и их подключение к ближайшему протокольному шлюзу."},title:"Field Systems / Devices / C2 Devices",id:"c2-field-devices",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Внешняя система",shape:"rectangle",color:"secondary",kinds:["system"]},{title:"Полевое устройство",shape:"rectangle",color:"secondary",kinds:["field-device"]},{title:"Полевой шлюз",shape:"rectangle",color:"secondary",kinds:["field-gateway"]}]},hash:"M5sD2_f_ttoMvZMb1z9YdTP03NRnQIAj9y7iXpl-RHc",bounds:{x:0,y:0,width:498,height:622},nodes:[{id:"field-devices",parent:null,level:0,children:["field-devices.knx-temperature-sensor"],inEdges:[],outEdges:["1c8khzh"],title:"Полевые устройства и контроллеры",modelRef:"field-devices",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Датчики, актуаторы, PLC, RTU и локальные системы автоматизации на объекте."},tags:[],notation:"Внешняя система",technology:"Field devices / PLC / RTU",kind:"system",depth:1,x:8,y:8,width:384,height:265,labelBBox:{x:6,y:0,width:190,height:15}},{id:"field-devices.knx-temperature-sensor",parent:"field-devices",level:1,children:[],inEdges:[],outEdges:["1c8khzh"],title:"knx-temperature-sensor",modelRef:"field-devices.knx-temperature-sensor",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Датчик температуры"},tags:[],notation:"Полевое устройство",technology:"KNX",kind:"field-device",x:40,y:61,width:320,height:180,labelBBox:{x:52,y:55,width:216,height:67}},{id:"field-protocol-gateways",parent:null,level:0,children:["field-protocol-gateways.knx-router"],inEdges:["1c8khzh"],outEdges:[],title:"Протокольные шлюзы и SCADA-контроллеры",modelRef:"field-protocol-gateways",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Точки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы."},tags:[],notation:"Внешняя система",technology:"KNX / Modbus / OPC UA / SCADA",kind:"system",depth:1,x:8,y:349,width:384,height:265,labelBBox:{x:6,y:0,width:233,height:15}},{id:"field-protocol-gateways.knx-router",parent:"field-protocol-gateways",level:1,children:[],inEdges:["1c8khzh"],outEdges:[],title:"KNX Segment",modelRef:"field-protocol-gateways.knx-router",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"KNX / KNXnet-IP",kind:"field-gateway",x:40,y:402,width:320,height:180,labelBBox:{x:81,y:66,width:188,height:45}}],edges:[{id:"1c8khzh",parent:null,source:"field-devices.knx-temperature-sensor",target:"field-protocol-gateways.knx-router",label:`Передают телеграммы, состояния и команды 
в KNX-сегменте`,relations:["c9z7g3"],color:"gray",line:"dashed",head:"normal",points:[[200,241],[200,287],[200,344],[200,392]],labelBBox:{x:201,y:302,width:296,height:35}}]},"c2-field-protocol-gateways":{_type:"element",tags:null,links:null,_stage:"layouted",sourcePath:"likec4/gateways/views.c4",description:{txt:"Внутренняя структура протокольных шлюзов и SCADA-контроллеров. Диаграмма показывает конкретные southbound-сегменты и их передачу данных в Edge Telemetry Agent."},title:"Field Systems / Gateways / C2 Gateways",id:"c2-field-protocol-gateways",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Внешняя система",shape:"rectangle",color:"secondary",kinds:["system"]},{title:"Контейнер",shape:"rectangle",color:"amber",kinds:["container"]},{title:"Полевое устройство",shape:"rectangle",color:"secondary",kinds:["field-device"]},{title:"Полевой шлюз",shape:"rectangle",color:"secondary",kinds:["field-gateway"]},{title:"Система в scope реализации",shape:"rectangle",color:"amber",kinds:["developed-system"]}]},hash:"ZtBfnV1CcUq_kvtD04egG82FHpW-sML5QZUBf5ay5eQ",bounds:{x:0,y:0,width:1276,height:971},nodes:[{id:"field-devices",parent:null,level:0,children:["field-devices.knx-temperature-sensor"],inEdges:[],outEdges:["1c8khzh"],title:"Полевые устройства и контроллеры",modelRef:"field-devices",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Датчики, актуаторы, PLC, RTU и локальные системы автоматизации на объекте."},tags:[],notation:"Внешняя система",technology:"Field devices / PLC / RTU",kind:"system",depth:1,x:16,y:8,width:384,height:265,labelBBox:{x:6,y:0,width:190,height:15}},{id:"field-devices.knx-temperature-sensor",parent:"field-devices",level:1,children:[],inEdges:[],outEdges:["1c8khzh"],title:"knx-temperature-sensor",modelRef:"field-devices.knx-temperature-sensor",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Датчик температуры"},tags:[],notation:"Полевое устройство",technology:"KNX",kind:"field-device",x:48,y:61,width:320,height:180,labelBBox:{x:52,y:55,width:216,height:67}},{id:"field-protocol-gateways",parent:null,level:0,children:["field-protocol-gateways.knx-router","field-protocol-gateways.modbus-gateway","field-protocol-gateways.opc-ua-gateway"],inEdges:["1c8khzh"],outEdges:["g1oj49","1wgfup1","6cczmq"],title:"Протокольные шлюзы и SCADA-контроллеры",modelRef:"field-protocol-gateways",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Точки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы."},tags:[],notation:"Внешняя система",technology:"KNX / Modbus / OPC UA / SCADA",kind:"system",depth:1,x:8,y:349,width:1260,height:281,labelBBox:{x:6,y:0,width:233,height:15}},{id:"field-protocol-gateways.knx-router",parent:"field-protocol-gateways",level:1,children:[],inEdges:["1c8khzh"],outEdges:["g1oj49"],title:"KNX Segment",modelRef:"field-protocol-gateways.knx-router",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"KNX / KNXnet-IP",kind:"field-gateway",x:48,y:410,width:320,height:180,labelBBox:{x:81,y:66,width:188,height:45}},{id:"field-protocol-gateways.modbus-gateway",parent:"field-protocol-gateways",level:1,children:[],inEdges:[],outEdges:["1wgfup1"],title:"Modbus Gateway",modelRef:"field-protocol-gateways.modbus-gateway",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/modbus.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"Modbus TCP / Modbus RTU",kind:"field-gateway",x:478,y:410,width:320,height:180,labelBBox:{x:62,y:66,width:226,height:45}},{id:"field-protocol-gateways.opc-ua-gateway",parent:"field-protocol-gateways",level:1,children:[],inEdges:[],outEdges:["6cczmq"],title:"OPC UA Server",modelRef:"field-protocol-gateways.opc-ua-gateway",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/opc-ua.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"OPC UA",kind:"field-gateway",x:908,y:410,width:320,height:180,labelBBox:{x:73,y:66,width:204,height:45}},{id:"edge-telemetry-agent",parent:null,level:0,children:["edge-telemetry-agent.collector-runtime"],inEdges:["g1oj49","1wgfup1","6cczmq"],outEdges:[],title:"Edge Telemetry Agent",modelRef:"edge-telemetry-agent",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Универсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий."},tags:[],notation:"Система в scope реализации",technology:"Edge collector / normalization / buffering / delivery",kind:"developed-system",depth:1,navigateTo:"c2-edge-telemetry-agent-containers",x:444,y:698,width:388,height:265,labelBBox:{x:6,y:0,width:146,height:15}},{id:"edge-telemetry-agent.collector-runtime",parent:"edge-telemetry-agent",level:1,children:[],inEdges:["g1oj49","1wgfup1","6cczmq"],outEdges:[],title:"Collector Runtime",modelRef:"edge-telemetry-agent.collector-runtime",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Основной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox."},tags:[],notation:"Контейнер",technology:"Python service",kind:"container",x:476,y:751,width:323,height:180,labelBBox:{x:18,y:28,width:287,height:121}}],edges:[{id:"1c8khzh",parent:null,source:"field-devices.knx-temperature-sensor",target:"field-protocol-gateways.knx-router",label:`Передают телеграммы, состояния и команды 
в KNX-сегменте`,relations:["c9z7g3"],color:"gray",line:"dashed",head:"normal",points:[[208,241],[208,289],[208,350],[208,400]],labelBBox:{x:209,y:302,width:296,height:35}},{id:"g1oj49",parent:null,source:"field-protocol-gateways.knx-router",target:"edge-telemetry-agent.collector-runtime",label:`Экспонирует group address и телеграммы 
через KNX/IP`,relations:["zexquv"],color:"gray",line:"dashed",head:"normal",points:[[253,590],[274,624],[301,662],[333,690],[372,724],[420,753],[467,775]],labelBBox:{x:334,y:651,width:276,height:35}},{id:"1wgfup1",parent:null,source:"field-protocol-gateways.modbus-gateway",target:"edge-telemetry-agent.collector-runtime",label:`Экспонирует registers, coils и 
дискретные значения через Modbus`,relations:["1mspxne"],color:"gray",line:"dashed",head:"normal",points:[[638,590],[638,636],[638,693],[638,741]],labelBBox:{x:639,y:651,width:244,height:35}},{id:"6cczmq",parent:null,source:"field-protocol-gateways.opc-ua-gateway",target:"edge-telemetry-agent.collector-runtime",label:`Экспонирует nodes, subscriptions и 
значения через OPC UA`,relations:["586866"],color:"gray",line:"dashed",head:"normal",points:[[1005,590],[979,624],[946,661],[911,690],[880,715],[844,739],[809,759]],labelBBox:{x:951,y:651,width:233,height:35}}]},"local-mqtt-grafana-dev-harness":{_type:"element",tags:null,links:null,_stage:"layouted",sourcePath:"likec4/local-dev/views.c4",description:{txt:"Текущая dev/test реализация: Edge Telemetry Agent публикует telemetry events в локальный MQTT broker, а Local Grafana читает live-поток через grafana-mqtt-datasource."},title:"Development / Local MQTT and Grafana / Development - Local MQTT + Grafana Harness",id:"local-mqtt-grafana-dev-harness",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Участник",shape:"person",color:"green",kinds:["actor"]},{title:"Внешняя система",shape:"rectangle",color:"secondary",kinds:["system"]},{title:"Система в scope реализации",shape:"rectangle",color:"amber",kinds:["developed-system"]}]},ranks:[{type:"source",nodes:["edge-telemetry-agent","service-engineer"]},{type:"same",nodes:["local-grafana","local-mqtt-broker"]}],hash:"qK_ljYa5imr_l5yedp6MYubCf3GFHT12KfXDnnoDcKM",bounds:{x:0,y:0,width:1162,height:520},nodes:[{id:"edge-telemetry-agent",parent:null,level:0,children:[],inEdges:[],outEdges:["gsfp7x"],title:"Edge Telemetry Agent",modelRef:"edge-telemetry-agent",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Универсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий."},tags:[],notation:"Система в scope реализации",technology:"Edge collector / normalization / buffering / delivery",kind:"developed-system",navigateTo:"c2-edge-telemetry-agent-containers",x:728,y:0,width:382,height:180,labelBBox:{x:18,y:28,width:347,height:121}},{id:"service-engineer",parent:null,level:0,children:[],inEdges:[],outEdges:["1qtuqvz"],title:"Сервисный инженер",modelRef:"service-engineer",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Настраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы."},tags:[],notation:"Участник",kind:"actor",x:0,y:0,width:398,height:180,labelBBox:{x:18,y:47,width:362,height:83}},{id:"local-grafana",parent:null,level:0,children:[],inEdges:["1qtuqvz"],outEdges:["1ymjbms"],title:"Local Grafana",modelRef:"local-grafana",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Временный dev/test UI из infra/local/compose.yaml. Использует grafana-mqtt-datasource для live-view MQTT payload и не считается частью target production architecture."},tags:[],notation:"Внешняя система",technology:"Grafana OSS / grafana-mqtt-datasource / localhost:3000 / Docker Compose",kind:"system",x:28,y:340,width:341,height:180,labelBBox:{x:18,y:19,width:306,height:138}},{id:"local-mqtt-broker",parent:null,level:0,children:[],inEdges:["gsfp7x","1ymjbms"],outEdges:[],title:"Local MQTT Broker",modelRef:"local-mqtt-broker",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Временный dev/test MQTT broker из infra/local/compose.yaml. Используется текущей реализацией edge_agent как локальный publish target."},tags:[],notation:"Внешняя система",technology:"Eclipse Mosquitto / localhost:1883 / Docker Compose",kind:"system",x:726,y:340,width:386,height:180,labelBBox:{x:18,y:28,width:350,height:120}}],edges:[{id:"gsfp7x",parent:null,source:"edge-telemetry-agent",target:"local-mqtt-broker",label:`Публикует telemetry events и service 
topics в локальный MQTT broker`,relations:["1gos04w"],color:"gray",line:"dashed",head:"normal",points:[[919,180],[919,226],[919,282],[919,329]],labelBBox:{x:920,y:241,width:241,height:35}},{id:"1qtuqvz",parent:null,source:"service-engineer",target:"local-grafana",label:`Проверяет live MQTT поток, topic tree и 
dashboard`,relations:["t8h8pv"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[199,180],[199,226],[199,282],[199,329]],labelBBox:{x:200,y:241,width:262,height:35}},{id:"1ymjbms",parent:null,source:"local-grafana",target:"local-mqtt-broker",label:`Подписывается через 
grafana-mqtt-datasource на live MQTT 
topics`,relations:["4klq72"],color:"gray",line:"dashed",head:"normal",points:[[370,430],[474,430],[607,430],[716,430]],labelBBox:{x:426,y:371,width:245,height:52}}]},"c2-edge-telemetry-agent-containers":{_type:"element",tags:null,links:null,viewOf:"edge-telemetry-agent",_stage:"layouted",sourcePath:"likec4/systems/edge-telemetry-agent/views.c4",description:{txt:"Контейнерная декомпозиция Edge Telemetry Agent. Каждый контейнер описан в отдельном файле внутри systems/edge-telemetry-agent/containers."},title:"Developed Systems / Edge Telemetry Agent / C2 Containers",id:"c2-edge-telemetry-agent-containers",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Участник",shape:"person",color:"green",kinds:["actor"]},{title:"Внешняя система",shape:"rectangle",color:"secondary",kinds:["system"]},{title:"Контейнер",shape:"rectangle",color:"amber",kinds:["container"]},{title:"Полевой шлюз",shape:"rectangle",color:"secondary",kinds:["field-gateway"]},{title:"Система в scope реализации",shape:"rectangle",color:"primary",kinds:["developed-system"]},{title:"Система в scope реализации",shape:"rectangle",color:"amber",kinds:["developed-system"]},{title:"Контейнер",shape:"storage",color:"amber",kinds:["container"]}]},ranks:[{type:"source",nodes:["field-protocol-gateways","service-engineer"]},{type:"sink",nodes:["monitoring-alarm-platform"]}],hash:"YzBqT8piMr-u-bzfzUPG-dmvNPQcRHldW4T5DnAezpE",bounds:{x:0,y:0,width:3043,height:986},nodes:[{id:"demo-stand-current-monitored-scope",parent:null,level:0,children:[],inEdges:[],outEdges:["2cx3pe"],title:"Demo Stand Current Monitored Scope",modelRef:"demo-stand-current-monitored-scope",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Текущий набор сигналов demo-стенда, которые читает Edge Telemetry Agent."},tags:[],notation:"Внешняя система",technology:"KNX monitored signals / current read scope",kind:"system",x:1846,y:69,width:380,height:180,labelBBox:{x:18,y:46,width:344,height:85}},{id:"field-protocol-gateways",parent:null,level:0,children:["field-protocol-gateways.knx-router","field-protocol-gateways.modbus-gateway","field-protocol-gateways.opc-ua-gateway"],inEdges:[],outEdges:["g1oj49","1wgfup1","6cczmq"],title:"Протокольные шлюзы и SCADA-контроллеры",modelRef:"field-protocol-gateways",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Точки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы."},tags:[],notation:"Внешняя система",technology:"KNX / Modbus / OPC UA / SCADA",kind:"system",depth:1,x:8,y:8,width:1260,height:281,labelBBox:{x:6,y:0,width:233,height:15}},{id:"service-engineer",parent:null,level:0,children:[],inEdges:[],outEdges:["cw5zhy"],title:"Сервисный инженер",modelRef:"service-engineer",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Настраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы."},tags:[],notation:"Участник",kind:"actor",x:1338,y:69,width:398,height:180,labelBBox:{x:18,y:47,width:362,height:83}},{id:"field-protocol-gateways.knx-router",parent:"field-protocol-gateways",level:1,children:[],inEdges:[],outEdges:["g1oj49"],title:"KNX Segment",modelRef:"field-protocol-gateways.knx-router",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"KNX / KNXnet-IP",kind:"field-gateway",x:48,y:69,width:320,height:180,labelBBox:{x:81,y:66,width:188,height:45}},{id:"field-protocol-gateways.modbus-gateway",parent:"field-protocol-gateways",level:1,children:[],inEdges:[],outEdges:["1wgfup1"],title:"Modbus Gateway",modelRef:"field-protocol-gateways.modbus-gateway",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/modbus.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"Modbus TCP / Modbus RTU",kind:"field-gateway",x:478,y:69,width:320,height:180,labelBBox:{x:62,y:66,width:226,height:45}},{id:"field-protocol-gateways.opc-ua-gateway",parent:"field-protocol-gateways",level:1,children:[],inEdges:[],outEdges:["6cczmq"],title:"OPC UA Server",modelRef:"field-protocol-gateways.opc-ua-gateway",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/opc-ua.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"OPC UA",kind:"field-gateway",x:908,y:69,width:320,height:180,labelBBox:{x:73,y:66,width:204,height:45}},{id:"edge-telemetry-agent",parent:null,level:0,children:["edge-telemetry-agent.collector-runtime","edge-telemetry-agent.delivery-worker","edge-telemetry-agent.configuration-bundle","edge-telemetry-agent.outbox-store"],inEdges:["2cx3pe","cw5zhy","g1oj49","1wgfup1","6cczmq"],outEdges:["mcfzkm"],title:"Edge Telemetry Agent",modelRef:"edge-telemetry-agent",shape:"rectangle",color:"primary",style:{opacity:15,size:"md"},description:{txt:"Универсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий."},tags:[],notation:"Система в scope реализации",technology:"Edge collector / normalization / buffering / delivery",kind:"developed-system",depth:1,navigateTo:"c1-system-context",x:920,y:357,width:1713,height:621,labelBBox:{x:6,y:0,width:146,height:15}},{id:"edge-telemetry-agent.collector-runtime",parent:"edge-telemetry-agent",level:1,children:[],inEdges:["2cx3pe","g1oj49","1wgfup1","6cczmq"],outEdges:["1tn9f5d","ekpvap"],title:"Collector Runtime",modelRef:"edge-telemetry-agent.collector-runtime",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Основной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox."},tags:[],notation:"Контейнер",technology:"Python service",kind:"container",x:1183,y:418,width:323,height:180,labelBBox:{x:18,y:28,width:287,height:121}},{id:"edge-telemetry-agent.delivery-worker",parent:"edge-telemetry-agent",level:1,children:[],inEdges:[],outEdges:["lamun8","138i2jo","mcfzkm"],title:"Delivery Worker",modelRef:"edge-telemetry-agent.delivery-worker",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Фоновый контейнер доставки: читает outbox, публикует telemetry events и service topics в MQTT topic tree и обновляет статус доставки."},tags:[],notation:"Контейнер",technology:"Python worker / MQTT publisher",kind:"container",x:2138,y:418,width:369,height:180,labelBBox:{x:18,y:37,width:333,height:103}},{id:"edge-telemetry-agent.configuration-bundle",parent:"edge-telemetry-agent",level:1,children:[],inEdges:["1tn9f5d","lamun8"],outEdges:[],title:"Configuration Bundle",modelRef:"edge-telemetry-agent.configuration-bundle",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Локальный набор конфигурации источников, модели сигналов, polling-политик и параметров доставки."},tags:[],notation:"Контейнер",technology:"YAML files",kind:"container",x:960,y:758,width:376,height:180,labelBBox:{x:18,y:37,width:340,height:102}},{id:"edge-telemetry-agent.outbox-store",parent:"edge-telemetry-agent",level:1,children:[],inEdges:["ekpvap","138i2jo"],outEdges:[],title:"Outbox Store",modelRef:"edge-telemetry-agent.outbox-store",shape:"storage",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Локальное надежное хранилище исходящих событий, статусов доставки и метаданных повторных попыток."},tags:[],notation:"Контейнер",technology:"SQLite",kind:"container",x:1446,y:758,width:344,height:180,labelBBox:{x:18,y:37,width:308,height:102}},{id:"monitoring-alarm-platform",parent:null,level:0,children:[],inEdges:["mcfzkm"],outEdges:[],title:"Monitoring & Alarm Platform",modelRef:"monitoring-alarm-platform",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Центральная система в облаке/интернете для приема событий, хранения телеметрии, визуализации, alarm-логики и маршрутизации уведомлений."},tags:[],notation:"Система в scope реализации",technology:"Cloud monitoring platform / alarm engine / operator UI",kind:"developed-system",navigateTo:"c2-monitoring-alarm-platform-containers",x:2673,y:758,width:369,height:180,labelBBox:{x:18,y:28,width:333,height:120}}],edges:[{id:"2cx3pe",parent:null,source:"demo-stand-current-monitored-scope",target:"edge-telemetry-agent.collector-runtime",label:"[...]",relations:["8dkmwk","5anl8o"],color:"gray",line:"dashed",head:"normal",points:[[1869,249],[1843,263],[1816,276],[1791,289],[1701,335],[1599,385],[1516,425]],labelBBox:{x:1744,y:316,width:25,height:18}},{id:"1tn9f5d",parent:"edge-telemetry-agent",source:"edge-telemetry-agent.collector-runtime",target:"edge-telemetry-agent.configuration-bundle",label:`Загружает описания источников, модель 
сигналов и runtime-политики`,relations:["p5w7v3"],color:"gray",line:"dashed",head:"normal",points:[[1184,591],[1160,609],[1140,632],[1126,658],[1111,685],[1110,717],[1115,748]],labelBBox:{x:1127,y:659,width:276,height:35}},{id:"ekpvap",parent:"edge-telemetry-agent",source:"edge-telemetry-agent.collector-runtime",target:"edge-telemetry-agent.outbox-store",label:`Сохраняет нормализованные события и 
задания на доставку`,relations:["1337gtq"],color:"gray",line:"dashed",head:"normal",points:[[1417,598],[1454,644],[1500,701],[1539,749]],labelBBox:{x:1491,y:659,width:265,height:35}},{id:"lamun8",parent:"edge-telemetry-agent",source:"edge-telemetry-agent.delivery-worker",target:"edge-telemetry-agent.configuration-bundle",label:`Загружает настройки MQTT, topic contract 
и retry-политики`,relations:["14gqniy"],color:"gray",line:"dashed",head:"normal",points:[[2139,574],[1984,628],[1788,696],[1783,698],[1612,740],[1562,714],[1391,758],[1376,761],[1361,766],[1346,770]],labelBBox:{x:1891,y:659,width:283,height:35}},{id:"138i2jo",parent:"edge-telemetry-agent",source:"edge-telemetry-agent.delivery-worker",target:"edge-telemetry-agent.outbox-store",label:`Читает ожидающие события и обновляет 
статус доставки`,relations:["w1v2d7"],color:"gray",line:"dashed",head:"normal",points:[[2288,598],[2269,634],[2243,672],[2209,698],[2091,785],[1926,822],[1801,837]],labelBBox:{x:2248,y:659,width:269,height:35}},{id:"mcfzkm",parent:null,source:"edge-telemetry-agent.delivery-worker",target:"monitoring-alarm-platform",label:`Публикует telemetry events и service 
topics по MQTT 5.0`,relations:["1noy8cq"],color:"gray",line:"dashed",head:"normal",points:[[2508,594],[2546,614],[2585,636],[2620,658],[2664,686],[2709,720],[2748,751]],labelBBox:{x:2676,y:659,width:241,height:35}},{id:"g1oj49",parent:null,source:"field-protocol-gateways.knx-router",target:"edge-telemetry-agent.collector-runtime",label:`Экспонирует group address и телеграммы 
через KNX/IP`,relations:["zexquv"],color:"gray",line:"dashed",head:"normal",points:[[325,249],[377,285],[442,324],[505,349],[726,436],[1e3,476],[1173,494]],labelBBox:{x:506,y:310,width:276,height:35}},{id:"1wgfup1",parent:null,source:"field-protocol-gateways.modbus-gateway",target:"edge-telemetry-agent.collector-runtime",label:`Экспонирует registers, coils и 
дискретные значения через Modbus`,relations:["1mspxne"],color:"gray",line:"dashed",head:"normal",points:[[733,249],[773,284],[823,322],[873,349],[967,400],[1081,439],[1173,465]],labelBBox:{x:874,y:310,width:244,height:35}},{id:"6cczmq",parent:null,source:"field-protocol-gateways.opc-ua-gateway",target:"edge-telemetry-agent.collector-runtime",label:`Экспонирует nodes, subscriptions и 
значения через OPC UA`,relations:["586866"],color:"gray",line:"dashed",head:"normal",points:[[1110,249],[1127,282],[1149,318],[1173,349],[1190,370],[1210,392],[1231,411]],labelBBox:{x:1174,y:310,width:233,height:35}},{id:"cw5zhy",parent:null,source:"service-engineer",target:"edge-telemetry-agent",label:`Настраивает адаптеры, модель сигналов, 
polling и доставку`,relations:["15jllvw"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[1488,249],[1471,279],[1452,314],[1433,348]],labelBBox:{x:1177,y:264,width:280,height:35}}]},"c2-monitoring-alarm-platform-containers":{_type:"element",tags:null,links:null,viewOf:"monitoring-alarm-platform",_stage:"layouted",sourcePath:"likec4/systems/monitoring-alarm-platform/views.c4",description:{txt:"Контейнерная декомпозиция Monitoring & Alarm Platform. Каждый контейнер описан в отдельном файле внутри systems/monitoring-alarm-platform/containers."},title:"Developed Systems / Monitoring & Alarm Platform / C2 Containers",id:"c2-monitoring-alarm-platform-containers",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Участник",shape:"person",color:"green",kinds:["actor"]},{title:"Внешняя облачная система",shape:"rectangle",color:"secondary",kinds:["external-system"]},{title:"Контейнер",shape:"rectangle",color:"amber",kinds:["container"]},{title:"Система в scope реализации",shape:"rectangle",color:"primary",kinds:["developed-system"]},{title:"Система в scope реализации",shape:"rectangle",color:"amber",kinds:["developed-system"]},{title:"Контейнер",shape:"storage",color:"amber",kinds:["container"]}]},ranks:[{type:"source",nodes:["service-engineer","operator-dispatcher","edge-telemetry-agent"]},{type:"sink",nodes:["notification-channels"]}],hash:"gNV2leHvm502-cQlSX_qtgyydIMwHELRwide_30Lrqo",bounds:{x:0,y:0,width:2043,height:1887},nodes:[{id:"service-engineer",parent:null,level:0,children:[],inEdges:[],outEdges:["u5iuw4"],title:"Сервисный инженер",modelRef:"service-engineer",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Настраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы."},tags:[],notation:"Участник",kind:"actor",x:566,y:0,width:398,height:180,labelBBox:{x:18,y:47,width:362,height:83}},{id:"operator-dispatcher",parent:null,level:0,children:[],inEdges:["1cg2z5c"],outEdges:["18w8duv"],title:"Оператор / диспетчер",modelRef:"operator-dispatcher",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Работает с событиями, текущим состоянием объекта и alarm через центральную платформу мониторинга."},tags:[],notation:"Участник",kind:"actor",x:2,y:0,width:373,height:180,labelBBox:{x:19,y:47,width:337,height:83}},{id:"monitoring-alarm-platform",parent:null,level:0,children:["monitoring-alarm-platform.operator-dashboard","monitoring-alarm-platform.mqtt-ingestion-gateway","monitoring-alarm-platform.platform-api","monitoring-alarm-platform.alarm-rule-engine","monitoring-alarm-platform.notification-service","monitoring-alarm-platform.telemetry-store"],inEdges:["u5iuw4","18w8duv"],outEdges:["dc94i1"],title:"Monitoring & Alarm Platform",modelRef:"monitoring-alarm-platform",shape:"rectangle",color:"primary",style:{opacity:15,size:"md"},description:{txt:"Центральная система в облаке/интернете для приема событий, хранения телеметрии, визуализации, alarm-логики и маршрутизации уведомлений."},tags:[],notation:"Система в scope реализации",technology:"Cloud monitoring platform / alarm engine / operator UI",kind:"developed-system",depth:1,x:472,y:288,width:1563,height:1300,labelBBox:{x:6,y:0,width:193,height:15}},{id:"monitoring-alarm-platform.operator-dashboard",parent:"monitoring-alarm-platform",level:1,children:[],inEdges:["u5iuw4","18w8duv"],outEdges:["1vh9cax"],title:"Operator Dashboard",modelRef:"monitoring-alarm-platform.operator-dashboard",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Веб-интерфейс для операторов и инженеров: панели мониторинга, состояние alarm, история событий и настройка правил."},tags:[],notation:"Контейнер",technology:"Web SPA",kind:"container",x:521,y:349,width:377,height:180,labelBBox:{x:18,y:37,width:342,height:103}},{id:"edge-telemetry-agent",parent:null,level:0,children:[],inEdges:[],outEdges:[],title:"Edge Telemetry Agent",modelRef:"edge-telemetry-agent",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Универсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий."},tags:[],notation:"Система в scope реализации",technology:"Edge collector / normalization / buffering / delivery",kind:"developed-system",navigateTo:"c2-edge-telemetry-agent-containers",x:1075,y:0,width:382,height:180,labelBBox:{x:18,y:28,width:347,height:121}},{id:"monitoring-alarm-platform.mqtt-ingestion-gateway",parent:"monitoring-alarm-platform",level:1,children:[],inEdges:[],outEdges:["rstcnr","1jz0qh"],title:"MQTT Ingestion Gateway",modelRef:"monitoring-alarm-platform.mqtt-ingestion-gateway",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Принимает MQTT telemetry events и service topics от edge-агентов, восстанавливает routing context из topic, валидирует payload и передает canonical events на хранение и в Alarm Rule Engine."},tags:[],notation:"Контейнер",technology:"MQTT broker / ingestion service",kind:"container",x:1265,y:349,width:351,height:180,labelBBox:{x:18,y:19,width:316,height:139}},{id:"monitoring-alarm-platform.platform-api",parent:"monitoring-alarm-platform",level:1,children:[],inEdges:["1vh9cax"],outEdges:["26i7o3","1els6f1"],title:"Platform API",modelRef:"monitoring-alarm-platform.platform-api",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Backend API для операторского интерфейса, состояния alarm, истории событий, конфигурации правил и политик уведомлений."},tags:[],notation:"Контейнер",technology:"HTTP API / backend service",kind:"container",x:525,y:688,width:369,height:180,labelBBox:{x:19,y:38,width:333,height:102}},{id:"monitoring-alarm-platform.alarm-rule-engine",parent:"monitoring-alarm-platform",level:1,children:[],inEdges:["rstcnr","26i7o3"],outEdges:["1lcbhhg","nw10x0"],title:"Alarm Rule Engine",modelRef:"monitoring-alarm-platform.alarm-rule-engine",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Обрабатывает входящие события по правилам, ведет жизненный цикл alarm и инициирует уведомления и эскалации."},tags:[],notation:"Контейнер",technology:"Rule engine / stream processor",kind:"container",x:1359,y:1028,width:369,height:180,labelBBox:{x:19,y:37,width:333,height:103}},{id:"monitoring-alarm-platform.notification-service",parent:"monitoring-alarm-platform",level:1,children:[],inEdges:["1lcbhhg"],outEdges:["dc94i1"],title:"Notification Service",modelRef:"monitoring-alarm-platform.notification-service",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Маршрутизирует уведомления во внешние каналы по alarm-политикам и правилам эскалации."},tags:[],notation:"Контейнер",technology:"Worker / notification gateway",kind:"container",x:1349,y:1368,width:390,height:180,labelBBox:{x:18,y:46,width:354,height:84}},{id:"monitoring-alarm-platform.telemetry-store",parent:"monitoring-alarm-platform",level:1,children:[],inEdges:["nw10x0","1jz0qh","1els6f1"],outEdges:[],title:"Telemetry Store",modelRef:"monitoring-alarm-platform.telemetry-store",shape:"storage",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Хранит телеметрию, служебные события, историю alarm и данные для мониторинговых и операторских запросов."},tags:[],notation:"Контейнер",technology:"Time-series DB / relational storage",kind:"container",x:820,y:1368,width:390,height:180,labelBBox:{x:18,y:37,width:354,height:102}},{id:"notification-channels",parent:null,level:0,children:[],inEdges:["dc94i1"],outEdges:["1cg2z5c"],title:"Каналы уведомлений",modelRef:"notification-channels",shape:"rectangle",color:"secondary",icon:"bootstrap:cloud",style:{opacity:15,size:"md",iconColor:"blue"},description:{txt:"Email, SMS, push, webhook и другие внешние облачные каналы доставки тревог и служебных уведомлений."},tags:[],notation:"Внешняя облачная система",technology:"Email / SMS / Push / Webhook",kind:"external-system",x:0,y:1707,width:378,height:180,labelBBox:{x:46,y:37,width:316,height:103}}],edges:[{id:"u5iuw4",parent:null,source:"service-engineer",target:"monitoring-alarm-platform.operator-dashboard",label:`Настраивает правила, получателей и 
панели мониторинга`,relations:["1hjw68o"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[751,180],[743,228],[734,289],[726,339]],labelBBox:{x:742,y:241,width:253,height:35}},{id:"18w8duv",parent:null,source:"operator-dispatcher",target:"monitoring-alarm-platform.operator-dashboard",label:`Работает с панелями мониторинга, alarm и 
историей`,relations:["1mqkcl4"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[289,180],[328,213],[375,250],[419,280],[452,302],[489,324],[525,344]],labelBBox:{x:420,y:241,width:288,height:35}},{id:"1lcbhhg",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.alarm-rule-engine",target:"monitoring-alarm-platform.notification-service",label:"Запускает доставку уведомлений",relations:["pterx7"],color:"gray",line:"dashed",head:"normal",points:[[1544,1208],[1544,1254],[1544,1310],[1544,1357]],labelBBox:{x:1545,y:1277,width:230,height:18}},{id:"nw10x0",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.alarm-rule-engine",target:"monitoring-alarm-platform.telemetry-store",label:`Читает контекст и записывает состояние и 
историю alarm`,relations:["va66e2"],color:"gray",line:"dashed",head:"normal",points:[[1360,1191],[1312,1213],[1263,1239],[1219,1268],[1180,1294],[1141,1328],[1108,1360]],labelBBox:{x:1220,y:1269,width:296,height:35}},{id:"rstcnr",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.mqtt-ingestion-gateway",target:"monitoring-alarm-platform.alarm-rule-engine",label:`Передает нормализованные события в Alarm 
Rule Engine`,relations:["5ivtmw"],color:"gray",line:"dashed",head:"normal",points:[[1498,529],[1555,623],[1639,780],[1672,928],[1679,961],[1668,992],[1650,1020]],labelBBox:{x:1656,y:760,width:297,height:34}},{id:"26i7o3",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.platform-api",target:"monitoring-alarm-platform.alarm-rule-engine",label:`Читает активные alarm и управляет 
конфигурацией правил в Alarm Rule Engine`,relations:["qsx5jg"],color:"gray",line:"dashed",head:"normal",points:[[895,809],[1011,832],[1162,870],[1286,928],[1338,953],[1390,988],[1433,1022]],labelBBox:{x:1356,y:929,width:288,height:35}},{id:"1jz0qh",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.mqtt-ingestion-gateway",target:"monitoring-alarm-platform.telemetry-store",label:`Сохраняет canonical events и служебные 
события`,relations:["5gl5mv"],color:"gray",line:"dashed",head:"normal",points:[[1318,529],[1208,616],[1055,761],[989,928],[973,971],[1002,983],[1010,1028],[1030,1139],[1028,1269],[1023,1356]],labelBBox:{x:990,y:929,width:268,height:35}},{id:"1vh9cax",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.operator-dashboard",target:"monitoring-alarm-platform.platform-api",label:`Запрашивает панели мониторинга, 
состояние alarm и конфигурацию`,relations:["zb0qd3"],color:"gray",line:"dashed",head:"normal",points:[[710,529],[710,574],[710,631],[710,678]],labelBBox:{x:711,y:590,width:233,height:35}},{id:"1els6f1",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.platform-api",target:"monitoring-alarm-platform.telemetry-store",label:`Читает телеметрию, историю и временные 
линии alarm`,relations:["o1bqrn"],color:"gray",line:"dashed",head:"normal",points:[[687,868],[669,958],[653,1100],[705,1208],[736,1272],[792,1325],[849,1365]],labelBBox:{x:706,y:1099,width:280,height:35}},{id:"dc94i1",parent:null,source:"monitoring-alarm-platform.notification-service",target:"notification-channels",label:`Отправляет email, SMS, push и 
webhook-уведомления`,relations:["tsrxzq"],color:"gray",line:"dashed",head:"normal",points:[[1369,1548],[1335,1562],[1299,1577],[1265,1588],[967,1684],[607,1743],[389,1772]],labelBBox:{x:1181,y:1609,width:207,height:34}},{id:"1cg2z5c",parent:null,source:"notification-channels",target:"operator-dispatcher",label:`Доставляют уведомления по alarm и 
служебные уведомления`,relations:["1e9xjmn"],color:"gray",line:"dashed",head:"normal",points:[[189,1707],[189,1639],[189,1543],[189,1459],[189,438],[189,438],[189,438],[189,354],[189,260],[189,190]],labelBBox:{x:190,y:929,width:241,height:35}}]},"c1-system-context":{_type:"element",tags:null,links:null,viewOf:"edge-telemetry-agent",_stage:"layouted",sourcePath:"likec4/views.c4",description:{txt:"C1-контекст двух разрабатываемых систем: Edge Telemetry Agent на объекте и Monitoring & Alarm Platform в облаке/интернете. Текущий первый адаптер в проекте — KNX, но модель изначально проектируется мультипротокольной."},title:"Edge Telemetry Agent + Monitoring & Alarm Platform - C1 System Context",id:"c1-system-context",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Участник",shape:"person",color:"green",kinds:["actor"]},{title:"Внешняя облачная система",shape:"rectangle",color:"secondary",kinds:["external-system"]},{title:"Внешняя система",shape:"rectangle",color:"secondary",kinds:["system"]},{title:"Система в scope реализации",shape:"rectangle",color:"amber",kinds:["developed-system"]}]},ranks:[{type:"source",nodes:["field-devices","service-engineer","operator-dispatcher"]},{type:"same",nodes:["edge-telemetry-agent","monitoring-alarm-platform"]},{type:"sink",nodes:["notification-channels"]}],hash:"lqFddOVpxB_Z1ls6gO20s7S7rNY_60z12W1pMRhqm7A",bounds:{x:0,y:0,width:2251,height:1182},nodes:[{id:"field-devices",parent:null,level:0,children:[],inEdges:[],outEdges:["c2wk8h"],title:"Полевые устройства и контроллеры",modelRef:"field-devices",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Датчики, актуаторы, PLC, RTU и локальные системы автоматизации на объекте."},tags:[],notation:"Внешняя система",technology:"Field devices / PLC / RTU",kind:"system",x:37,y:0,width:379,height:180,labelBBox:{x:19,y:46,width:343,height:85}},{id:"service-engineer",parent:null,level:0,children:[],inEdges:[],outEdges:["cw5zhy","16a5o8z"],title:"Сервисный инженер",modelRef:"service-engineer",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Настраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы."},tags:[],notation:"Участник",kind:"actor",x:752,y:0,width:398,height:180,labelBBox:{x:18,y:47,width:362,height:83}},{id:"field-protocol-gateways",parent:null,level:0,children:[],inEdges:["c2wk8h"],outEdges:["1sivq2o"],title:"Протокольные шлюзы и SCADA-контроллеры",modelRef:"field-protocol-gateways",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Точки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы."},tags:[],notation:"Внешняя система",technology:"KNX / Modbus / OPC UA / SCADA",kind:"system",x:0,y:340,width:454,height:180,labelBBox:{x:18,y:37,width:419,height:102}},{id:"edge-telemetry-agent",parent:null,level:0,children:[],inEdges:["1sivq2o","cw5zhy"],outEdges:["1cfgwdb"],title:"Edge Telemetry Agent",modelRef:"edge-telemetry-agent",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Универсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий."},tags:[],notation:"Система в scope реализации",technology:"Edge collector / normalization / buffering / delivery",kind:"developed-system",navigateTo:"c2-edge-telemetry-agent-containers",x:483,y:679,width:382,height:180,labelBBox:{x:18,y:28,width:347,height:121}},{id:"monitoring-alarm-platform",parent:null,level:0,children:[],inEdges:["1cfgwdb","16a5o8z","4cjy00"],outEdges:["134rwii"],title:"Monitoring & Alarm Platform",modelRef:"monitoring-alarm-platform",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Центральная система в облаке/интернете для приема событий, хранения телеметрии, визуализации, alarm-логики и маршрутизации уведомлений."},tags:[],notation:"Система в scope реализации",technology:"Cloud monitoring platform / alarm engine / operator UI",kind:"developed-system",navigateTo:"c2-monitoring-alarm-platform-containers",x:1303,y:679,width:369,height:180,labelBBox:{x:19,y:28,width:333,height:121}},{id:"notification-channels",parent:null,level:0,children:[],inEdges:["134rwii"],outEdges:["1cg2z5c"],title:"Каналы уведомлений",modelRef:"notification-channels",shape:"rectangle",color:"secondary",icon:"bootstrap:cloud",style:{opacity:15,size:"md",iconColor:"blue"},description:{txt:"Email, SMS, push, webhook и другие внешние облачные каналы доставки тревог и служебных уведомлений."},tags:[],notation:"Внешняя облачная система",technology:"Email / SMS / Push / Webhook",kind:"external-system",x:1560,y:1002,width:378,height:180,labelBBox:{x:46,y:37,width:317,height:103}},{id:"operator-dispatcher",parent:null,level:0,children:[],inEdges:["1cg2z5c"],outEdges:["4cjy00"],title:"Оператор / диспетчер",modelRef:"operator-dispatcher",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Работает с событиями, текущим состоянием объекта и alarm через центральную платформу мониторинга."},tags:[],notation:"Участник",kind:"actor",x:1706,y:0,width:373,height:180,labelBBox:{x:19,y:47,width:337,height:83}}],edges:[{id:"c2wk8h",parent:null,source:"field-devices",target:"field-protocol-gateways",label:`Передают телеграммы, состояния и команды 
в KNX-сегменте`,relations:["c9z7g3"],color:"gray",line:"dashed",head:"normal",points:[[227,180],[227,226],[227,282],[227,329]],labelBBox:{x:228,y:241,width:296,height:35}},{id:"1sivq2o",parent:null,source:"field-protocol-gateways",target:"edge-telemetry-agent",label:"[...]",relations:["586866","zexquv","1mspxne","1qi0i11"],color:"gray",line:"dashed",head:"normal",points:[[345,520],[408,567],[485,625],[549,673]],labelBBox:{x:465,y:587,width:25,height:18}},{id:"1cfgwdb",parent:null,source:"edge-telemetry-agent",target:"monitoring-alarm-platform",label:`Публикует telemetry events и service 
topics через MQTT`,relations:["lblwx5","1noy8cq"],color:"gray",line:"dashed",head:"normal",points:[[865,769],[994,769],[1164,769],[1293,769]],labelBBox:{x:964,y:728,width:241,height:34}},{id:"134rwii",parent:null,source:"monitoring-alarm-platform",target:"notification-channels",label:"Маршрутизирует уведомления и эскалации",relations:["1rsym7h","tsrxzq"],color:"gray",line:"dashed",head:"normal",points:[[1561,859],[1595,901],[1636,951],[1671,994]],labelBBox:{x:1628,y:920,width:288,height:18}},{id:"cw5zhy",parent:null,source:"service-engineer",target:"edge-telemetry-agent",label:`Настраивает адаптеры, модель сигналов, 
polling и доставку`,relations:["15jllvw"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[865,180],[826,225],[784,281],[757,340],[709,446],[689,580],[680,669]],labelBBox:{x:758,y:411,width:280,height:35}},{id:"16a5o8z",parent:null,source:"service-engineer",target:"monitoring-alarm-platform",label:`Настраивает правила alarm, получателей и 
панели мониторинга`,relations:["1hotm1k","1hjw68o"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[1022,180],[1123,307],[1307,540],[1411,671]],labelBBox:{x:1292,y:411,width:292,height:35}},{id:"1cg2z5c",parent:null,source:"notification-channels",target:"operator-dispatcher",label:`Доставляют уведомления по alarm и 
служебные уведомления`,relations:["1e9xjmn"],color:"gray",line:"dashed",head:"normal",points:[[1892,1002],[1912,984],[1930,964],[1943,942],[2040,779],[1995,709],[2010,520],[2017,440],[2028,418],[2010,340],[1999,288],[1975,234],[1952,189]],labelBBox:{x:2008,y:581,width:241,height:34}},{id:"4cjy00",parent:null,source:"operator-dispatcher",target:"monitoring-alarm-platform",label:`Работает с панелями мониторинга, 
событиями и alarm`,relations:["unfyc8","1mqkcl4"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[1840,180],[1764,307],[1626,539],[1547,670]],labelBBox:{x:1745,y:411,width:237,height:35}}]}},deployments:{elements:{"demo-stand":{notation:"Среда развертывания",style:{color:"blue"},kind:"environment",description:{txt:'Фактический demo-стенд по данным ETS-проекта "Выстовка" и connection memo от 2026-03-28.'},title:"Demo Stand",id:"demo-stand"},"whitelisted-remote-host":{notation:"Среда развертывания",style:{color:"blue"},kind:"environment",description:{txt:"Удаленный хост вне demo-стенда: мой компьютер с IP, разрешенным во внешнем KNX/IP маршруте."},title:"Whitelisted Remote Host",id:"whitelisted-remote-host"},"monitoring-cloud":{notation:"Среда развертывания",style:{color:"blue"},kind:"environment",description:{txt:"Облачный контур нашей Monitoring & Alarm Platform, принимающий телеметрию demo-стенда."},title:"Monitoring Cloud",id:"monitoring-cloud"},"demo-stand.local-lan":{notation:"Сетевой контур",style:{color:"sky"},kind:"network-zone",description:{txt:"Локальная сеть demo-стенда с KNX/IP роутером и TP-линией 1.1; используется как целевая сеть удаленного подключения Edge Telemetry Agent."},title:"Local LAN 192.0.2.0/24",id:"demo-stand.local-lan"},"demo-stand.remote-access":{notation:"Сетевой контур",style:{color:"sky"},kind:"network-zone",description:{txt:"Внешний маршрут для удаленной диагностики стенда."},title:"Remote Access",id:"demo-stand.remote-access"},"whitelisted-remote-host.developer-network":{notation:"Сетевой контур",style:{color:"sky"},kind:"network-zone",description:{txt:"Сеть рабочего места, из которой Edge Telemetry Agent подключается к стенду через whitelist, публикует данные в локальный MQTT broker и позволяет инженеру проверять поток через Grafana."},title:"Developer Network",id:"whitelisted-remote-host.developer-network"},"monitoring-cloud.public-cloud":{notation:"Сетевой контур",style:{color:"sky"},kind:"network-zone",description:{txt:"Облачная зона приема MQTT-сообщений и первичной обработки telemetry events."},title:"Public Cloud",id:"monitoring-cloud.public-cloud"},"demo-stand.local-lan.knxnet-ip-backbone":{notation:"Полевой сегмент",style:{color:"blue"},kind:"fieldbus-segment",description:{txt:"IP-магистраль ETS-проекта: магистральная область 0.0 и главная линия 1.0 без прикладных устройств."},technology:"Areas 0.0 and 1.0 / KNXnet-IP",title:"KNXnet/IP Backbone",id:"demo-stand.local-lan.knxnet-ip-backbone"},"demo-stand.local-lan.tp-line-1-1":{notation:"Полевой сегмент",style:{color:"blue"},kind:"fieldbus-segment",description:{txt:'Активная KNX TP-линия ETS-проекта "Выстовка" в области 1, линия 1.'},technology:"Twisted Pair",title:"KNX TP Line 1.1",id:"demo-stand.local-lan.tp-line-1-1"},"demo-stand.remote-access.public-knx-endpoint":{notation:"Сетевой endpoint",style:{color:"indigo"},kind:"network-endpoint",description:{txt:"Публичная точка входа с пробросом на локальный KNX/IP роутер 192.0.2.177:3671."},technology:"203.0.113.234:7171 / UDP / NAT",title:"Public KNX/IP endpoint",id:"demo-stand.remote-access.public-knx-endpoint"},"whitelisted-remote-host.developer-network.edge-host":{notation:"Хост",style:{color:"amber"},kind:"host",description:{txt:"Хост, на котором запускается Edge Telemetry Agent. Подключается к KNX демо-стенду удаленно, а не размещается на самом стенде. На этом же рабочем месте текущая реализация поднимает local MQTT broker и Grafana dev harness."},technology:"Remote workstation / whitelisted IP",title:"Developer Workstation",id:"whitelisted-remote-host.developer-network.edge-host"},"monitoring-cloud.public-cloud.mqtt-ingest-host":{notation:"Хост",style:{color:"amber"},kind:"host",description:{txt:"Хост облачного ingress-контура для приема telemetry events и service topics."},technology:"Cloud runtime",title:"MQTT Ingestion Host",id:"monitoring-cloud.public-cloud.mqtt-ingest-host"},"demo-stand.local-lan.knxnet-ip-backbone.knx-router":{id:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",element:"field-protocol-gateways.knx-router",title:"Weinzierl KNX IP Router 751",description:{txt:"Локальная точка входа в KNX/IP и маршрутизатор в TP-линию 1.1."},technology:"192.0.2.177:3671 / UDP / TUNNELING / individual address 1.1.0",style:{}},"demo-stand.local-lan.tp-line-1-1.device-1-1-1":{notation:"Физическое устройство",style:{color:"secondary"},kind:"field-asset",description:{txt:"Панель кнопок с group address для света, scene и вентиляции: 0/0/1, 0/0/6, 0/0/7, 1/0/0, 1/1/0, 1/2/0, 1/3/0, 1/4/0."},technology:"KNX TP device",title:"1.1.1 Pushbutton sensor 4 Komfort, 4-gang",id:"demo-stand.local-lan.tp-line-1-1.device-1-1-1"},"demo-stand.local-lan.tp-line-1-1.device-1-1-2":{notation:"Физическое устройство",style:{color:"secondary"},kind:"field-asset",description:{txt:"Шлюз освещения с адресами Switch/StatusSwitch, RGBW и Scene: 0/0/1-0/0/7."},technology:"KNX TP to DALI gateway",title:"1.1.2 DALI Gateway Tunable White Plus",id:"demo-stand.local-lan.tp-line-1-1.device-1-1-2"},"demo-stand.local-lan.tp-line-1-1.device-1-1-3":{notation:"Физическое устройство",style:{color:"secondary"},kind:"field-asset",description:{txt:"Актуатор вентиляции: VentSwitch, VentDim, VentStatus, VentValue по адресам 1/0/0-1/3/0."},technology:"KNX TP actuator",title:"1.1.3 Analogaktor 4fach",id:"demo-stand.local-lan.tp-line-1-1.device-1-1-3"},"demo-stand.local-lan.tp-line-1-1.device-1-1-4":{notation:"Физическое устройство",style:{color:"secondary"},kind:"field-asset",description:{txt:"Комнатный контроллер с Temperature value 2/0/0 и сценой 1/4/0."},technology:"KNX TP room controller",title:"1.1.4 Room controller display compact module",id:"demo-stand.local-lan.tp-line-1-1.device-1-1-4"},"whitelisted-remote-host.developer-network.edge-host.configuration-bundle":{id:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",element:"edge-telemetry-agent.configuration-bundle",style:{}},"whitelisted-remote-host.developer-network.edge-host.collector-runtime":{id:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",element:"edge-telemetry-agent.collector-runtime",style:{}},"whitelisted-remote-host.developer-network.edge-host.outbox-store":{id:"whitelisted-remote-host.developer-network.edge-host.outbox-store",element:"edge-telemetry-agent.outbox-store",style:{}},"whitelisted-remote-host.developer-network.edge-host.delivery-worker":{id:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",element:"edge-telemetry-agent.delivery-worker",style:{}},"whitelisted-remote-host.developer-network.edge-host.local-mqtt-broker":{id:"whitelisted-remote-host.developer-network.edge-host.local-mqtt-broker",element:"local-mqtt-broker",style:{}},"whitelisted-remote-host.developer-network.edge-host.local-grafana":{id:"whitelisted-remote-host.developer-network.edge-host.local-grafana",element:"local-grafana",style:{}},"monitoring-cloud.public-cloud.mqtt-ingest-host.mqtt-ingestion-gateway":{id:"monitoring-cloud.public-cloud.mqtt-ingest-host.mqtt-ingestion-gateway",element:"monitoring-alarm-platform.mqtt-ingestion-gateway",style:{}}},relations:{bgglu2:{title:"Передает KNX TP телеграммы в роутер 1.1.0",source:{deployment:"demo-stand.local-lan.tp-line-1-1"},target:{deployment:"demo-stand.local-lan.knxnet-ip-backbone.knx-router"},id:"bgglu2"},"1lb1jct":{title:"Проброс UDP 7171 -> 3671 для удаленного KNX/IP доступа",source:{deployment:"demo-stand.remote-access.public-knx-endpoint"},target:{deployment:"demo-stand.local-lan.knxnet-ip-backbone.knx-router"},id:"1lb1jct"},vzyll7:{title:"Подключается к стенду через whitelisted public KNX/IP endpoint",source:{deployment:"whitelisted-remote-host.developer-network.edge-host.collector-runtime"},target:{deployment:"demo-stand.remote-access.public-knx-endpoint"},id:"vzyll7"},djqgze:{title:"Публикует в локальный broker mqtt://localhost:1883",source:{deployment:"whitelisted-remote-host.developer-network.edge-host.delivery-worker"},target:{deployment:"whitelisted-remote-host.developer-network.edge-host.local-mqtt-broker"},id:"djqgze"},"1a258g0":{title:"Подписывается через grafana-mqtt-datasource на live MQTT topics",source:{deployment:"whitelisted-remote-host.developer-network.edge-host.local-grafana"},target:{deployment:"whitelisted-remote-host.developer-network.edge-host.local-mqtt-broker"},id:"1a258g0"}}},imports:{},manualLayouts:{}}),{updateModel:S4,$likec4model:P4,useLikeC4Model:z4,useLikeC4Views:M4,useLikeC4View:G4}=O4(_s),q4=Object.freeze(Object.defineProperty({__proto__:null,$likec4data:_s,$likec4model:P4,updateModel:S4,useLikeC4Model:z4,useLikeC4View:G4,useLikeC4Views:M4},Symbol.toStringTag,{value:"Module"})),K4=e=>ct.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"cloud_svg__bi cloud_svg__bi-cloud",viewBox:"0 0 16 16",...e,children:ct.jsx("path",{d:"M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"})});var X4=K4;const j4="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+CiAgPHJlY3QgeD0iOCIgeT0iMTAiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0NCIgcng9IjEwIiBmaWxsPSIjRjNGOEZGIiBzdHJva2U9IiMxRTYzRDUiIHN0cm9rZS13aWR0aD0iNCIvPgogIDxwYXRoIGQ9Ik0xNiAyNEg0OCIgc3Ryb2tlPSIjMThBOTU3IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0xNiA0MEg0OCIgc3Ryb2tlPSIjMThBOTU3IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxjaXJjbGUgY3g9IjIyIiBjeT0iMjQiIHI9IjMiIGZpbGw9IiMxRTYzRDUiLz4KICA8Y2lyY2xlIGN4PSI0MiIgY3k9IjQwIiByPSIzIiBmaWxsPSIjMUU2M0Q1Ii8+CiAgPHRleHQgeD0iMzIiIHk9IjM2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iIzBCMjc1QSI+S05YPC90ZXh0Pgo8L3N2Zz4K",W4="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+CiAgPHJlY3QgeD0iOCIgeT0iMTAiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0NCIgcng9IjEwIiBmaWxsPSIjRkZGOEYyIiBzdHJva2U9IiNDOTZBMTIiIHN0cm9rZS13aWR0aD0iNCIvPgogIDxwYXRoIGQ9Ik0xOCAyNEg0NiIgc3Ryb2tlPSIjQzk2QTEyIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0xOCA0MEg0NiIgc3Ryb2tlPSIjQzk2QTEyIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0yNCAyNFY0MCIgc3Ryb2tlPSIjMUU2M0Q1IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik00MCAyNFY0MCIgc3Ryb2tlPSIjMUU2M0Q1IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxjaXJjbGUgY3g9IjI0IiBjeT0iMjQiIHI9IjMiIGZpbGw9IiMxOEE5NTciLz4KICA8Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSIzIiBmaWxsPSIjMThBOTU3Ii8+CiAgPHRleHQgeD0iMzIiIHk9IjM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI5IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjNkIzNjAwIj5NT0RCVVM8L3RleHQ+Cjwvc3ZnPgo=",Z4="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+CiAgPHJlY3QgeD0iOCIgeT0iMTAiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0NCIgcng9IjEwIiBmaWxsPSIjRjJGQkZGIiBzdHJva2U9IiMwRTc0OTAiIHN0cm9rZS13aWR0aD0iNCIvPgogIDxjaXJjbGUgY3g9IjIyIiBjeT0iMjIiIHI9IjUiIGZpbGw9IiMxRTYzRDUiLz4KICA8Y2lyY2xlIGN4PSI0MiIgY3k9IjIyIiByPSI1IiBmaWxsPSIjMThBOTU3Ii8+CiAgPGNpcmNsZSBjeD0iMzIiIGN5PSI0MCIgcj0iNSIgZmlsbD0iIzBFNzQ5MCIvPgogIDxwYXRoIGQ9Ik0yNiAyNEwzMCAzNiIgc3Ryb2tlPSIjMEU3NDkwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0zOCAyNEwzNCAzNiIgc3Ryb2tlPSIjMEU3NDkwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0yNyAyMkgzNyIgc3Ryb2tlPSIjMEU3NDkwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDx0ZXh0IHg9IjMyIiB5PSI1MyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiMwQjI3NUEiPk9QQyBVQTwvdGV4dD4KPC9zdmc+Cg==",U4={"bootstrap:cloud":X4,"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg":()=>ct.jsx("img",{src:j4}),"file:///Users/srgi0/projects/web-monitoring/arch/images/modbus.svg":()=>ct.jsx("img",{src:W4}),"file:///Users/srgi0/projects/web-monitoring/arch/images/opc-ua.svg":()=>ct.jsx("img",{src:Z4})};function H4({node:e,...t}){const n=U4[e.icon??""];return n?ct.jsx(n,t):null}const $4=Object.freeze(Object.defineProperty({__proto__:null,IconRenderer:H4},Symbol.toStringTag,{value:"Module"}));let Zn={"industrial-edge-architecture":()=>Bt(()=>Promise.resolve().then(()=>t5),void 0)};async function V4(e){let t=Zn[e];if(!t){const n=Object.keys(Zn);if(console.error("Unknown projectId: "+e+" (available: "+n+")"),n.length===0)throw new Error("No projects found, invalid state");e=n[0],console.warn("Falling back to project: "+e),t=Zn[e]}return await t()}const X5=Object.freeze(Object.defineProperty({__proto__:null,loadDrawioSources:V4,loadDrawioSourcesFn:Zn},Symbol.toStringTag,{value:"Module"}));let Un={"industrial-edge-architecture":()=>Bt(()=>Promise.resolve().then(()=>r5),void 0)};async function Q4(e){let t=Un[e];if(!t){const n=Object.keys(Un);if(console.error("Unknown projectId: "+e+" (available: "+n+")"),n.length===0)throw new Error("No projects found, invalid state");e=n[0],console.warn("Falling back to project: "+e),t=Un[e]}return await t()}const j5=Object.freeze(Object.defineProperty({__proto__:null,loadPumlSources:Q4,loadPumlSourcesFn:Un},Symbol.toStringTag,{value:"Module"}));let Hn={"industrial-edge-architecture":()=>Bt(()=>Promise.resolve().then(()=>i5),void 0)};async function Y4(e){let t=Hn[e];if(!t){const n=Object.keys(Hn);if(console.error("Unknown projectId: "+e+" (available: "+n+")"),n.length===0)throw new Error("No projects found, invalid state");e=n[0],console.warn("Falling back to project: "+e),t=Hn[e]}return await t()}const W5=Object.freeze(Object.defineProperty({__proto__:null,loadMmdSources:Y4,loadMmdSourcesFn:Hn},Symbol.toStringTag,{value:"Module"}));let $n={"industrial-edge-architecture":()=>Bt(()=>Promise.resolve().then(()=>s5),void 0)};async function J4(e){let t=$n[e];if(!t){const n=Object.keys($n);if(console.error("Unknown projectId: "+e+" (available: "+n+")"),n.length===0)throw new Error("No projects found, invalid state");e=n[0],console.warn("Falling back to project: "+e),t=$n[e]}return await t()}const Z5=Object.freeze(Object.defineProperty({__proto__:null,loadDotSources:J4,loadDotSourcesFn:$n},Symbol.toStringTag,{value:"Module"}));let Vn={"industrial-edge-architecture":()=>Bt(()=>Promise.resolve().then(()=>d5),void 0)};async function _4(e){let t=Vn[e];if(!t){const n=Object.keys(Vn);if(console.error("Unknown projectId: "+e+" (available: "+n+")"),n.length===0)throw new Error("No projects found, invalid state");e=n[0],console.warn("Falling back to project: "+e),t=Vn[e]}return await t()}const U5=Object.freeze(Object.defineProperty({__proto__:null,loadD2Sources:_4,loadD2SourcesFn:Vn},Symbol.toStringTag,{value:"Module"}));function H5(){throw new Error("No projects overview available for this workspace: single project mode is enabled")}function e5(e){switch(e){case"index":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dVnH0qw8kn2au%2BwOvFnivXcFO7z3nqcf%2BG%2F3YiJmIr6vqpCEJFInT55M%2FsDMH5i%2F%2Bu4PBBz5stbj8Adm%2F0AQ%2BG%2Fg%2FXxb8yEds3oo%2FzZ7Lv8v4uuA%2BT8w9weg%2FsBMfxV1l79Dq3Hd%2Fg5T6zZnkL8T9O%2FtRZ1nf3sgAML%2BBcD%2FgggXIP%2FAFAq8HxD8bwQgo7%2Fj4zIf%2Fo9p%2Fp%2FdbfF%2Fdvb3erun%2FO91lh91mv%2Bz1X%2F2CQHfH8xkdVwucf9eDHH%2Fn7FqPGRrGk%2FfQxx1fv6dq%2F7Plrt3Fynyr3rI8uvvfLgPJim5IuuBgPMAOnWV2R2QO20fD%2FLa9RcxGLiuTfUsr0ld2RbIX6b6B%2BL%2FQDTFUDsbUxOAqytEIYsStZwVszZGxW9v0rhUaZPH8Q4mHbnYk3cHtIcpZ5yvb9trDJowUvZBV4w9%2Bo75ZcI5BP6Crq1%2F%2Byn6IweT51vjm2vBFbpbtP2eTYMcpjrYQSgAuyn2ul%2B3ROjmXRG2FEdrLJqzbEq78ua7xq0XIBu8E%2FA6KE5vA%2FHc2LXZ67Pnuve2Q3XaaAGsIE6WdKrX3PypDaJOL%2B%2FYhCh8yI%2B2Bwn6JCkQ7C4POiJQ09MO48fC7%2B0%2F%2FR0nh55Noqc72KT8VHaXFpkxmygccgWc4W32i0EXVDFSjgDT6%2FE5SfkCf%2BT6lvYal2oS3277kfkKH%2BcDioRwem3LP5lqF%2B%2B3upKDnq%2Foksv4AUoeDEEppTKc2DLpIMzpPhvHtpPc7uP5GEyNMj3atPldBqMmhl9ziOM5EpAKZAH0YS2QYfcije5T0mHNA4ewqkPO5qgCijNqIdJxOwd7UegK9pnvmRwvrAK0KCqpIHAYBL5Wkfb9fV%2BFSQKgitPRmFcV65LOJilY6zcpQ5CJ77CIt6oxS8pFOZHmtZUQ409dV%2FpvR6W8G4PrhtBaluqDRHSnyHb2cSKCTRvTTkgcrkeCgLNWqOLnV%2B%2FixOdzWKx6VMd6B74GMQtDPqKo1RfZIUydaKEXlDQetrBwq0C7AS8EeZsm1d1FLeDBOyUrixt9SLlz0uUs6%2BjDKMtf8IVI0vtTrLBHeY%2BTdt%2F%2FVEzLisJMIwEDFqry093uLH1PnNcq7PAo5LlL9AMxNWSQu30Qv4AtktHNAabaTZ0XW7wEmbytU8%2F7s7PwQ8EWVonzKQh8EUuwsSQW5nSUerzsXa6Gd9UndpLV%2FyXjMkOgkykZoompMHrZO8OIsGRVGvXYGR8sUjS8J5d85rIEkBX9kAztvyLGQ7mPvI1TefzpAozkkOp338jLR%2FS5KFUufT5gdXNMAgmROEQgS04ZtERTFqhwULbxtI4lPRo%2BlnOANL2q20Nn5tnj93atU%2FXhJO9UJIXC3vrB9OAmVdN5pRVarf4aepQXW8za%2FZYoG7T82If%2BbaZGrCIeyZ4%2FEBML13V2d1TIQo69yQW6cSUexPYpbZeQdNKtied%2B2yUhYj1Hkr3QdFjuHH3GQmWpOMuyb8%2B9yYq1O0Moc55IUDhrMnx3J%2F5rCb58l%2BwvibcQgBrTmf783H7bgWdzK0s361OnG62H9zj3gZGbIBC5PgN1jucrXdkKmWYG7pgmz6TIYEicJImM5FAHJe%2FIOeu7GvokOhu8LgfX733cybaZN3YC4axz9S50zhOftVE5S9nYL%2F3vxDo%2Ffa7KRpVz1315XJYrvhXu5Wj66tFsEtzPXxTB%2FtU1TnR11YToLCfassjBjMp8QJN%2BDimnFYeKOCltYPvTNiqte8Sd4IU41A%2FjTLK4pX8Ua%2B01iX2INgJ4v74TB0lXKfANQYn1AWP9g4u7W6aFKhbGKM2EtNjmNSbe7uvoDJP3sdrL9%2FJLZe0N%2BA%2BgC%2BiKgtZYWi4%2BpMmWzlfEOpRWTe07l94ETi5oGuJ9PhhK6gtvD40hUMHjKZ5ZU3NK6ZkYPcu5uIdCNpDODJpZ3X%2BHt0QyCyHEIbDUcu%2B6qCo9n2FsCNr4pLKcRw6pHrCoCi7D5aBBQFep9zH5AXskCaCG7WRZAzzfU8h11pEmoKVEP%2BekO2Vipodq5uqgZ%2BA1CoF%2BWASTmbpKVPYuwRefq%2BP1Zw4TfnhkTzgeE4z9bOXUoW4ggl9qVKSNDzmKmkjYwnroFN4bPTiRb5pkdamDLKnKcfYnPDLDoNdzDhMCraZLfOwyuVLWh6YqELJFg1go9axeDr6Qw2CSOHEjYhAbqz0WXquhfOFp3OieZyttksDZLW%2F%2FXkQriCNMKkDH0cILdU5OOkbZh%2BeB6B0VudqVLHsBEUsqV6jNpy5v0GZK1JNTNO%2FnXITKIZ4F7%2BIgZKIN9yXpB2Vf6PWHM11cKMT8IdR%2Fb0PNr4U6ToSpAAB0Oxmh%2BCWaieGllOzKx9TILFHPvIrjbBhwGO7mlHMxNjz60DdMXFKVrG9YSkuuJKqTvUe8%2F4jPjWT%2BkJObPTfmJFaBWQo0GvxVBabMDxkBaMSkNyxdL8MvRqh2aQzvEuip1vvMT3VGrq85RYDaDcc2%2B9vSstmLL7APotvQB8yoduZQkX2TqHQF%2BEZVMnuFhJCidEd6Bid4pRlES3H28kojHz58xvvNyAqs3mNCSh89xQ0bhrhZBGc2F1JCFy6DDOHLc3xFpp5VW2pNt5cPKLka415D8mL42Uv8GS9dhD9oRNpUUn8m6bQ8lq1eebhy8WLD41ftPETCQVRh0UB4rRqo04RguQLWE6ABfePIFPV6Vtq%2F4h4i8AbmCIOI8OGH2RbDk%2FmYK9GkCVxccBMEQhDiCWnU%2FfJLZhZWpozvUNwvu1AJr%2FR6cjYgUyTRwoFGNBDIrBwXMY1MKwDbYmUmbSmRVu9R62IY6JUzi5p9XPnAuxuC0ExWwVSxiSFqiSja6DboONp7BIz0x%2BxOuEOWH0Q%2F%2BfVgl32WKX1aq8ZXvyODO8NKHJ4As5ceU3H17cc4Mf7zb2XLF6vaJOI%2BnfeSngGqalvtdlRAYrdFfLp%2BAi9E652T1jZ14NcyOFUs%2BhgseymhtaDS%2FM5QAPleA6aHMvx2FcXwHhLNmn7B%2FPa9KCjwn%2Fxub8HlxAkCLy4DGMriGs2qfyQajN3jAm9jEPFZpIZwCGKmUJhM1xQMcEaCgk0Z21%2BAzsm5R5SKciFq5fMBwCuHtrnXsHOe3p4Oq4IVPwYmyG70G35Eg1u9ij1%2BQCMpsfKjhKxK%2B5cPcoXWPSQM29UiBTRmop7CVnsEgH29WOojB4eg25Izf0q4r%2FqPlRFlsIM7XF8P0OhB0m3Wy2V9TJF3NB%2F6OnT07mkmNMFLMKxfop6KSYavr8onB8GEQGJJBrLgRptmjrpzmkRWh052xKYPQuqktxQaZmfHfr5AC2gUnWkMF3jnw%2BD1WohW5ULNJ4c1fnZmnpE%2F7U6QtfjbgzlJIRjRF1npK1Y62uKb8IsqCKWOn%2F8gXCgiRfKKIHrCdg6fK%2BqJ%2FWiZSrZ2AvWRDshntw7iWKX5J3HgjztqrAq2vb7RSnA00NTi66uG6YxbBmnPEnpbroWHxZdO2XlaGlM5YNBfxi%2FYmNubTryulvUduahS%2Fpkn%2FchDOy2RONFag2JBfTiAfxq5t2fxbHj2WvztE7QkpRVX6DAWBfDlq1ZLMmovDC%2BYdL1Rw3v13NLugDutCE%2F%2F%2FMwseZbRaEEqmZS20lLRsI2Sfr8TURE8UzWf8mkgHcPZBObKLkGjZIEP5IbHVAqfGGnlzL8O0DPpwty7OH%2FclSft2EcwPhrnbZ%2FU82gHqFQ1jQmvbARzM49g%2BdeAT%2FZzAUMtK%2FxAmYr8POnLSUiR3FtLwdTn8SA2Q39qdQlf1C10P9y%2BxJB%2FlRlzOIJWICJtkHSFR5gGwFQL75r9xqv6pqGzJQWJlltKqd5IfRse3DJlU6HIsTn2wui7cQY%2BRbyJjTVp9VnB9QtLHR6SaRxCYr5g8vTedOM2ODdqO4rFOUo95ZXQEFLiUm6ARhW6yMT5iV5UW1n67q%2FRwIvkmIV7VlY4NmodRo5o12uTDBlqZ2vIMRbYqfpUIQ%2FSPrBByehqPgqhdO%2BdVE3cYhoO0Hv65rDHj0Z6DE2TMpJBObWlL8UifTKLc5K3QjeqVtyGniJKT6R8rNDu84nqQarq2ioYzM7sgrB%2Bwd%2BCdh%2BKzspFaP%2FVKYg8vk7K4dsJ7IarP2HwRp2WnyRooyUIpq1POW1D6WmqNEoMQd2m8a7HW8H5CciQM%2F29BKbO1Vb%2B1WdZYnglybTN9POLmuOmrc070I%2BYmZN%2FIYr2%2Buk6heBpAhUPxyGyGs3uQTwrnKR4RZwf990EsK2D2R7GFcmpi%2B%2FFG1htvWo39gxiGRIS%2Bm%2BK1ZMCL%2F7mlFZbxQokY%2FWxhbbn50T76I8GIIoZFrhids5Xci1wUrZplmDaK6tBGSoJkVwIl4D4rYAr2O0rAdOFtaVWUV54v0%2B2ma94pVr%2B4pBVq8J1MTdK2LThc6ndhqsBTMRfmmh16qRXZb4Sw3PTgJAywlXxDgT6rHCQ6dm%2FcJN73OHgcqb93Jv6mFAdBDxBvlPKzaIYTac2flAdNYhCw8UbCqv56xuxaIASfjmymuQxDR4PO394TCUi9qDr4LsfuadXqvdTkb%2FLlcQmrgVNkI7F798jxFSXD6Z%2BQOQRUr5YA7ZXVMERO%2BjLcjxfKfg1KSQGRAhYerFhsHSJFtbUSPpW6snR5MrpW3XxDQbW2GS0GvT9SNtZfEyLCVBU%2BAIDW4TQl9XX4jLVvojnw5Qqnh4UaXwTB1t1QnnhbH%2Bko1vJzdF30WjUB20ydWUXrUhLlE80eTGV06FuXs1zkBMjS2wwM4KuX1l7JZ9rbCzCP5hXffRsGJmIlzlKAqkew0p3f9TsV2qGmWaN3gvF97tzPG5zfUAQ1H0Ep9xw2N6Gy6fAJlbJDidPFnRKsEqae2hhfPl4swA03el751Ea5RCjwTeM9hxyMaflEQlJk2HkBmhzgpfLGxUk6yhA%2BzWQLOZdv%2FVQK7c%2BvOY7SzE11D2eWpMfe%2BmlF9g211Wk9MGKb2hv0P3nKCf9NGb5yxW794F%2F9nj%2BZiS1NbJPC1v8mTp%2B2d8dV%2BK6rxJXopXqYwNHgQuyrC8Z8IhYTpTAYa8NwpM3nzlfHzCnsnWzFWIvdeXKYUzWIdzdyS0nOzawGqFeKcqZ1I6NLHMflvUwxOQh1lVq7MOO7I6D9H3tmV42Eg2WKx0kd8hc3wmI6n3yeHNdSwYNZ8NmH8Rg%2Fc3X6EqpHh1smKiciKt2U19DtT2cQooxByNfG%2BWCUytrWpKJKPa06S61p%2FmG%2BQ0FloC3Z04YQe%2B3rd64%2FVKMX97GvbS%2BeltwQV%2FG8tAuk0Ab4rj9JqSbUib5uL186VKZjPwM7FEq8bXxp5nExOaN5hpRA2bFHHGnB09HNzu%2B7MeAdIjE3zyFj9En2wfGoawftnuUZdcwSXSiImXW2XA8%2FEZOemiGDk8tyxP7%2FA0ODYJXk4%2BeDwnWfu70DxAoCcp5j%2Fgmm7sw7mSbYxnnHMli%2Bq7ffUfnKDYisA0k5ROV4dQeyHPqvRF6Tzv%2BOmG8m4YQLibFKCoZPhMNoKh1bO2gN6RBbco1I8%2BqKYzudRH6zUBwa9d3nAAx%2F6sQvo%2FBpNaUwmGQlEpP7MLwGvGSwU%2BqMwgxWisOs%2BcOT%2BOb7yLSrRt6c%2B8%2BN27V5zE2KdVLXKn4dlAwjQ0hcJ8%2F72%2Bdc1S8hE3zLB6L2dQucybREXZVQFtOwHv9Yn4TX9Nr0IvxCtmE6euL1p927w%2BFFDK%2Fa362zSqWR2XoPVzU60EB4nJz%2BFxvUsl53CdewhhMzVGuEbj0zRM2s4FA7pw3Ck5%2Bt8iabCplFHiq4WFQW2ZVc0WiTIF8FSvw4NTVIkbXeZlJozKhBwoWVnl98na1An%2BJmNvvMOCqS03qCAHG72Fb%2FcApvwpWMFpNSoDGKlQBhGf0RyA03rEwIGLuApCcPRip2cjoOmfSJ7bIVcIAD1It2yj99UlJyzLek%2FAx5Uuk%2FYAezM8ZghzQxaqkuG5V4IvuGd89AYooKj8KfYKVrkrVjVz4OZroznqbrUpB2q4dOEkX6AGozfpSpoRBmZzIU2pHNScGS9S2Prcsc5ndpeEnPr2v9mYB4QkxCpnlJ9wv2w%2BFTXRZS3r%2B6gQ4d%2F4OA0nYAb%2FiqMRbm0E6wH0FCBx%2B8ajJdjhnQwHXM73bRT%2F0%2B6sL7OjDbGTpu7d5deoXuzaAsycjZXxM7VcJNLGvaoNxv0%2F4%2Fqblm0qSkXNdFtyDnOY7mTnS48j8CMMpClMS0QvLdjKRES%2FEhvGsTBS3CyJqsbJ%2FRl3jnj0ZFO6LAb%2FFEOpURneUrMT%2BxioBFw0GUnDNJZQ9QPMP8Q8BmAlLWkzaTR2dCVMCj2D38jWMxkheaLxo29XZfvmDClsavCQe5h%2BSdsallin%2F6OE28wgT%2FC2dQ7G5f%2BJwmOKMwZmcHeYIcJPOVycpThffR5OiS5BsDwbM08Fr473kz%2BznAVEXfIGo%2ByKjr%2FxTD%2BoyAe5cEUnTWSpMI1J648c7nk2F3Ii%2B6sVsI4n%2BrXwwywxxPYiTzcYMSoYh%2FerWcqH5KHuf5zitpbOMAUYSfpRaPLmWWZo84U67wpMS9mw58tRLNMpWi6FMSTtNKX5jk1e2q3N1dL5h2ZV4uM9hhZ3sHEVtB0U8K9FR2aaphwx2y2pmaivvUPsOkTTrEi6YHMe%2BWsyJb2Of6uxuR99Tufq%2BPQMWi7%2BmyWsx0BMDe9MO3m12i8KKnnjzGLNkZ02lEFvgVdb6rHLjiM1XZ8ky%2FLcEGsLEjHLQWOqfkxSnaOja2KEyPDqOy2PeK4kNxerSA%2F%2BZbXfGTq9o%2BMY44PGGPsoIZeSZmANMIrvzXpm4dhHo9767dPcCJw0NvhtivZlE4jEHkZjWh4U%2F%2FP7IdVgeiw4fGBf%2FwKtmqNMYjkc6%2BVElHp4UWGQ0wp0JJnEOBZX%2BmKJ0axHhPpCPeOubGhpAC3BzKITs2Zdv3b5CSIl0069F741bzxyqDNQZTqyaLwhgkp5QspQnAvqfAvaUXjOK8GLYYH5donEHHelZwKqeQIo5Qx8cm0a1LxeSmRnbeIw2a7zyJ9VAflXpDon1GfCZvyJEDKn2o6tM%2Fqg6mxd2Pg1GUr5kYU0i%2Bh2e24H8A83o0AE8OCDDQ%2FS8qQDTVtEtXdh914zYr6d7Pj4RXB%2FHn84wJJgzKBkyQPAtVG72%2BVVlx1rI7oZ8mkB41ptFLEzypjsNUnElvuJnC0fERzOqh75En7sl%2Fr%2FedwWx%2BGaWXygmvldwMPP2%2Fve93X%2FfOn5l878vHv9p%2BR8%3D%22%7D";case"c1-system-context":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dVnFsuy6kv2aM7wdpjIMzczsmZmZ%2FfVt3%2FM6etIdsbeqJEtyKmHlStUfmP4Dc1ff%2FYGAI1%2FWehz%2BwMwfCAL%2FC3jbdzQf0jGrh%2FLvsOtw%2F%2BDfA5j7A7N%2FAPIPTPdXUXf5O7Ua1%2B3vNKVucxr5u0H%2FLi%2FqPPv7BAIg9B8A%2FgfCHYD4A5M%2F4G0g%2BL8QEI7%2Bzo%2FLfPg%2Ftvl%2FpNvi%2F0j2t7%2FdU%2F63n%2BVHneb%2FivqvnBDw%2FcF0VsflEvdvZ4j7%2F8xls%2FKT38m7vM%2B35X6%2Fk%2F9K8S2i3lYdh3obl08N3xAa99Mf%2BHtAdvHy7WV08VaM%2F3795%2F2nwbex73XLvxF6HLb82v5KWP9HEd17thT5JwX%2FWf%2Bd90%2F6v7NgFvPAJCV2iD0QsG8w6UT28b7VyW6gTOs7HcGcSbxBS602GZSFEdLRwzhp8T6l8JbMTYfj2nbDPvWAlVtpuD6DkEbzZP%2F9gbglEQpi6ZY%2Bst%2Fe2Q05oeoAd2bNc9O4tjMpDQ7%2BlYgazhX09aqAKYbSViInEVQCXOhpXuRpa6Yy3OYdB4LGin0w8MD5zhIv9nL0%2FiU%2FMCEvwPOhmXtfwqVH3y9pzcvD%2BXbfLZ2v6RYXI%2FEhSc%2BeRbrfJ04SQImMUq5QLXrBGcW8fjK%2Bc4fMc8Gnr61YUOHHPeQY54SgxY%2F%2BNQRVdE%2FxxGCS42L0jNOGnWGP7lu7p78lx5BAwoLA%2BlEEDIUKD0%2FyLkFC8MRJC8R7rciZ52dBW3jbZsdSCxOO1xGnqIjr8e7tK2f0E4qgCrUZ6iGJAmxL5OA%2BKn7Sa19ufp2HC%2F3lbbXt%2FGGjg8s53AXJOA9zuOw%2Bm6pQGg0e%2F50PGNM79lKveHfeLxhd1HdU%2BNfPONjJUN5Bt60lcJBvuul4A5NzrxiZ5hqo4n1xDrrfxHHoAOBTylTYUtesesTV7Q%2Bir2OK9TY7ez6tB5MOpZ%2BntiymBZ0LEI2J8Z8e53CcTEIKls7qMK%2BZ%2B5y8Nc1zLEijxkUTr0j2IFQ4qAQo29qT8tHv9RbcKoq9q%2FmVhy4jAGwmaTwJOflhev9aVRn0BzfoaLDeCfVq0wKVxmXBVafn3zrLjv1ebYOFt%2FRPxcaTWgOq4QToDTVuv46eZvkHnnlffPviRQMm1Z6s8lcpAfEiAzfB0KCKqHsbPS15zEXWIF0%2Bdhenws2Dc8Yi6DakwLkRpSYPK7%2BvP9CrK7FvVU9Q2TCMKKvZTnr81EyaTQWNvrayb%2B9h3P2mspbLuSX2UOe1Dck6fnYPpHgylBsc3O%2FBDoc7PAzLAV%2BkeGpCEYquevkU72bA3NUDUlH0B20QVYr1pap8F1KrbitToSDzzrNh8p0UFUgp6WfsWDCkw9E4TC7Pcw8cm4yzrtaY7o3CnSqLFKErCQ%2Bby6sbkt%2BV8mPYqFB5boX0BEu8I35mssjCerr3c38pxBu0FfnxDRemxGvDGjtGnbDw%2FZlD0J8EWbwiICgQTuT08rgXn7hXE9R9Rgx3A6eYANayPF6k%2BPUWKZ9LvqErpxPGNYaaVf4kFW2XZ3mDP0jVmLSUKOvwujCHqWgtY%2BJ4m3OwUK9DjBjQAcWHM8EVzjh2DSOq4S7BdRyg2HT2vtWangK%2Fhde3qUrgYxezurg5YMlKaOw818pt%2BtfD8PqzlR1UEUNZ8IdCwiSMq1lWYcsV5hdLy0rgUGnmt%2FP2nHCrmPs%2B7dAYH848r3sKMZudoFabYuvSNr0yDBlpM%2B3KUhHWv%2BMv0WZswKthautt71nHBnKKUvGsjTf4fh5iO2oJ7oYCLComU0G5zYDO7SmOaoMGDFeLTkL2hM6pmOEnySc75%2BT9RodBat64bTEtlTJ58%2FX6YQXAHtDeF0GF6dDVTaXtBM%2FnxvvgJFrkI9W2VnKocUP%2BZ91denEbqviqmhL6gt35evysKvf6wV087NS1e%2ByrMcptxxeFId41FMJVhVTXGs21bWeh%2B%2BwpFWvzKf3FkXed%2FhdGNrKMVdyRV3D6GFq7sF2aB1auTyja89zPTogvtNQu7dxroJzNo9Fbbh3hd%2FvBWzhonsSH8y1ePuDNxzFLopU14zgDsz3eUr3Xd%2F4bf4EJPUu0XPWV6fgzVz5lhnzNRAIGlgdXqonkmtXoMHUexaQrdo92zygz3VMXFnTK%2B4xjVqbEhJA9CbdKPi3TWUNfzU%2FIhHMTWlpAWcuGhLaRew0I4C%2FAyBZUDiEPOaj8lHZUCeRukn2Eki6WhwXlT9Zao%2BbNGyGB5rTQYY9UBB8eSpmMTby0BnnStaD9PAvu1jCyzuXzhlFF0e8ccHWv0MGLJK5CyC9YzL4fslJZjMNZHvLl1QzVig01HpIJ0Hd6W21Mrm5Ypu79FQUnNFPof8GM0pqdCTWcv%2BjbY0B9N5KgTJul%2FDVb4QnwTFVzg53p592iF%2BrFU68G9%2BtmPIDLyWuCM2%2FYndbJaKZNfq9HaaQNVicTT95OLWdjUCfh%2FsYZcPVKiRYn0NG0iekYlmk50pCTNKRkxvAgd3qFERF%2BiHLeoryN%2BeTTbRhkmMGOAKak1AHctSojISASFpIxNa2K%2BjdDINxud6RuoGM%2FS7APZ6eaOCpyKeweKGQDLZanb%2Fdjeye%2BByh2GsAYowApvRoLtTWy%2BCeMarKyxCa32OSBf1V0%2B01MtsPn97SGqkEk7v3cw6FxNq92ae4sfiVvwwxtKtiVSzdrRE3X4kzrlLBVOUDq%2F4h3b7BCeeM80DDP4qmIm1qNN3huiAp6KLlwONEFS%2FWjH0xlhowwtDLbqAZqZ%2FRD2IPK8dvIsPELrlSJSHctcIl8LqsuZwmXH4tkuQ%2FEnhYE3jOHIAsl5l7Pq09q6ve0UVU95i9VpX6ufJIZ39JVfKXCfjlM0ePm7BTekzXViboIRAgRqxN1iwlT1NnSHQXUJUWaXfUsv93ocxhbms3JYOwp1O2rtuFnYZVODt9QHghd%2FCh%2B95qLK5gf4RDXgqfKEmRYZpBOKjK0CsAchQD6SVBr159dqDkZ4D4Cml79kG7na3kOwFZvjSGWD0YJJl%2FOTdq274iNx1OJ8YHJng0pPSsSa7KeokSJVgrIBa57IE9suZYBznyTRHXqrL5MR%2BmndfujGS6GLl2Xwn8zd%2FIjPnUDBKitSaKqppLz%2Bual%2B5F4TqAR1us9hbsrGC0%2F0RP0WFxeC3Rh4oOuIVNZWPIlD5VqW6CS0Qsh0TbyJ6ZaLmHJSeIBcEFWiXNrFPLNPjnb6Q%2BcSuEbElnopOt4sj0FYvpP26eoaV%2BErZQj4WYZGofp5DHT%2FFKr4DKnqpS8R7q%2FrHrse3oaQRIRgt1%2B%2B1QlapPGjCmtjCGKG5inRPvLKSzUxlC%2Fo4pSX8qH9w1QbANern%2FPfXgG8UbB52khe1iMaQS%2FQo%2B0y1PQaeZQFDWVILC58kPtxVy5kz%2BZPXSZFKtwwINXGxckJreyod%2BiVBnZSRNrg6Tcx8iSU2YkyH%2Be7NNsRL85CAFLhvY5Vo7ITRCwviv7UlHeSoK65tgrM7Fgry7m1mCrO5LBWGPMN7%2FteSnjS%2FalPjC0cQiWtKIYM9td44ZDTKWqu%2BNVSrb5Agcqjwk0IPVEZcMo2qOOAqLuQsxsghC%2F3ARKlpcc%2BsqvbvH0zRj%2BWzNwmbgz%2BL7eaY1EaAaWQ39JKnh4r1jYhz1vKmOzWaTjvgDyXnwyKVpTeCm83V8pies1fNtuK7q%2FMiEi4KnZuzRlmxM8A%2FsA%2FPOFSCrutxzvvd5ck%2FaxUEn2vS2uvW0vwzzYyAZXIRd7SQmrV6pEtd5PR%2B5tp91%2BiI2TvbciT1VJJ9yJT7GB5aeoXoIxb2y%2FwgT7fDkMFbXViOou2ICk3EoQWmHmi5OsqJ9t44tsVIZIE08DIcqPvavefEJO1t%2FOJ5yfiQrHv8yEWrlRmMMGpLpa9R0N4jVBRTTJPxEeV4rTJOx1bdO21FtDLyo%2Bz02MoxM1tOiKVFTrUESvWV6m1SUnksJXIkRiy8sUWjQCG1p5dluo2HXPcPaZvAkfRR%2Fdj5rFPe3AO9rH4L14Te3DiFrjyjojS4o3GMbv1zMt%2BDqLyMe0jpoKgRXKY3mM1Iahr3sPvCN%2Bfj8s47CWp0ErCZSv1onZRHLunyzwA2plv7GIUuZK1PTnN4rqIdDD6dx6vSLXvpBg7bui8RvSyGydEEwcFAUEExqssNuLKmfmAwps%2BUpCzyTyaOesu0ncczPeIWK3PW6n6BrMAZ7BdPS69EmDA6PhlF7ebTXbFc6ew%2FJuazDcPU6VGVEgq%2FaneeNXOb7U%2BIBWZFj1fqdqZ757KabPHhwERONq15Miw%2BcM0sS96HF%2FA1kIwjGuWzwCjTiPAWR%2BFQq54dUjqMyZFW05qHmzhQ%2Bz4TrXQ6YjChTE9vpN6zry1ppsoqcNpiQbVDAl5uQKswIDnlDSu0%2Ff9nhLkERIfcFrLNn5cBLCH2%2B1HkpnH7ZqimgyASvwWwakXqNw%2BqqrdderWZzWGrDnSeMsUBSpiybov2p7K5AvCtafeoXwLpDX67lpCTXPaOzW9oJ1frtu%2B81Rp%2Bmj2xPw4hiLY9QmENtXWn5%2Bos8oncLB%2Bw0%2Fg49nl14N70NUwxKkJxn9e5TBWZdpwk4hRIWCx8IHQ5K60yY1uPUg0aK2bPJq7l7zrWT3t8Bfvel5wPnXAElm4faEaRaBPvmwBckKT5jXE4W%2FgITQGJOr%2FLuEi5wyNZTcA5k50I2XSEzOgXFnfQiMsXMDywGpPDxTGbwG0rSttbJOt6ovExb%2BWWRNgaGfM03a503oMo8HxCPKwI%2F450pnipBgKqehL0FWnXHBfabAfQyuZk%2B5jo%2Ff2kf1w%2Ffj1k1HfQy%2BNdq19I5cFJYd5jVXWS8CAXs4US8MACIc%2BOHb9Do2xLYhq%2BWH4jDB8khjgasSoZpTAjNtfDBW4J%2FHNehVBewQTu5BYOU1LSv67B18nwCnfL1pViaTvaN2gj0htINmFWMWxZwrQt3wIQhj2cZJQFU4eDTxkVOMskFrZP9qQ8N%2F6fDn7B4YeK3EiVIlzUKHnzTxZnM5QDqaay4Fm8aXoHCV%2FdUDV0RL88dXFvo2MiPnBekD5cxhFHS5b3FQIUFS%2BbMCZIR8Vyk6vYc%2FEokge6Uo5C7K5WDKu9pCDxWdfq8jO98lcM0zsXmwyW5STuSeOth5rHNfawYV%2FCZ58ULRYXg5XoVPu6tXt2WYJaYXfvG9Y9J%2FHiZRIn5u49DfewaHKGF2%2FCx7hmnxpf2dEUDHAOMTbxqk3NBkqj3yk2gwvXuzPWlDeluQnyFln%2FyKWEMAFd9kCxISwxyzdFdTQBtoQi48M1xBZc%2B10Y66H7FO4X36VTg8i9pMQdIlpOCH4TP7G1o%2FO9FGxkijO9rrX84Af946oOwREr%2F1dBCDuS7gyqwQIaXz4PWTBgGDKFvu0IVF58%2B3cOop42dmEKa7edF0%2FZthaxCNnFjlSdlrqO8mAowxHSG%2FMgHF7XjdDNUki4JwQk3TciNvg2WrPpp%2BYM%2BHSq5t2uZp2Syq7KxUJuKG72ExzY68Ud1WNHQ3y29iNMvPscPWZ2yvDt9qzOgyILj750qtr4Lfk%2BlW36T5Rb5sLG%2BxTnRLkDSdgTpqrjzDYHkBlGAx1FvqlTBo%2BOU0FaJ4kbJ7Z6N5MUpbH76iFQkjGLdwMnTMrGwJFraQVpGS76Zh5BzcMwSJ3v09xUGTegTTbXb1p6jbhoMvht1e6QpIzZUPJyuva%2BedgCaUMpBwy4hHFEmScV%2B7orNH5tbWEbJjkX92YG92T7Hp45y%2F9DTgN%2F9RNn%2BEl%2BcPLMNUWB%2BcrUIMFCq1dxP8pOlHoD1U%2BUphFR6%2BfXchygfzxvjd9mW18GvrB5s%2Fnozf44cv5XjgyHKpTeO%2FIHyY%2ByyCT2GEFNP9ZXzRFaK%2FmdxVviDxDlLHmCWqNimS8qxgJJK%2F%2Bwk3E%2FoqqMofRIzCRTH1brpGSYrnEAYjAJszsXzvCvFcyrwoSVlPc%2FQRQXtjRSuUMzajOmvzx7wARZncacsyvqQE3s3LaRGrzznfFVPwcS8KC0J3RPzOsFagsA6a%2BADROjEL59zKeMGNrNNk7IAP%2FFV3%2BxZSjBdIuORTWWWhqTIYtEV9GSIQv9tV8pLsf9NI2F%2B3Dtcu0hBAkX5A8kmDlDHi6%2FCNiE2hqZZJgNIol%2BE50AlLYnL4ALxRQAzs4hXO%2BvwcZGVvTMMkrPTE7Pfn1AoCnTAnOqP73YXiSCo01toBvLPIpBPDVh45Sbm7ccoh5vHd4ZX5HnJp8WjcakOJURdT3C9zy9m48RUdIDHsH3WEwMkokMdAjD%2FwVzT9z%2F3%2F%2F%2Fx68aXlvz9g%2FDvy3w%3D%3D%22%7D";case"deployment-demo-stand-topology":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dXrXrq3KkuXXnMdTwptHvPeeN7z3TNzXF%2Bx9q1VSd0tLLEgDGRkRI0ZEzn9g5h%2BYv4b%2BHwg4inVrpvEfmP0HgsD%2FAt7r21qM2ZQ3Y%2FW32XP5f4mvA%2Bb%2Fgbl%2FAOofmBmusumLd2g9bfvfYWrTFQzy9wXDO71sivxvDwRA2L8A%2FC9EuAD5D0yhwHuB4P9CQDz%2BOz6pivH%2F8Zr%2Fz%2Br25D8r%2B%2Fu833Px9zkvjiYr%2Fiz1zzoh4PuDmbxJqjUZ3ocxGf4zli3mfrqH97vbn3H8e2WLYXr%2FOXsy5v%2Br8X8Gvg%2F%2F%2Ft%2Bj3Gme%2Bqm6%2Fy6m%2BY%2FM%2FStGhvyb%2F5%2FJ7%2B0w%2Fbt9k%2F7d%2F9cUmMN9MM3IDdkOBFxGyGHwZyaWetVXX5brHZdb3ZyhRu7WwbYpUL5K8VUHXWnWfqZRL9RxNjh8bw8xLXLi79jZieSnIjHBFs7nnwgjg3a3frb1xEXsKXndsI3UpJzxJt%2FR9%2BMUxE2LNPkIr8CA1Xhcml6lNmm3OjipqiAYEBvcBg1QEwgQXw9NYsarzW%2BtrMJRqi60fRrnHqI5cxDu9b6EU8Dz96wEDApEKVO98Wocot8OXDLiwLW731mPTGFKWpPuWlNdMa5%2FvZc9NDaKBlmclGDLK2AUEu%2Bu07wRALAxPgAyD2VFhgbJn14xEk4Zc8PvhAik5XNwLQiTq5%2FFTFO3bsNvITOgG2cN3yQ3EyERTKDTx7KzE%2FAdxYIwxOgw3uqq0f47loGS91Pht3yg0PORzvo2MXdl7BMb3YgE7%2BgFpimBcIpr5zDFRn8ETD0qDHl3tIZ5Hyg%2FyFYTnCa0bSpsstvaNEdH4Vb2Km778RNRmd9vCNx75wE%2BRyzwzJIAn%2BBW9DaFcYAHcpzzxGuq%2FDorcGO8w1fZTzveod5G2vNTOz3Qxd%2B5vsOPdD%2BG65Yh4G5gG7UeLahtc%2FzNpZ8af3e8XTPolPN6%2BAWTf1DmWLHbDbIypT1CVIc8OyyaXQ9uGKprmdyrfttDpqyY%2BE7Hf3sjtdlr1rSyqVh8RBiUOI2BwckPc6pfH2RoukB%2F3IQfAfm9bnhZknFNgmTamD7OiD7ODySanwi6sMDDZ6RWoU61oL8diMXSfA7Yhy%2FutTw68OK09GTJC5la%2BQy8Ea%2BQfI0FQYj77lzU2abn7m0u%2FrbQeM47rHGavTJnkcRTJXCtpbxsMGai9dEFyPGiWaOFOufMD2GNz%2FRPyYKjxaC%2FK7QvqMpwgS7GctaJ2gCgKyLdgF5t0nVrZq%2Fx0EvyxFtDzHw01vHWKQK0vq1uuG%2BO4ffilqQK7c3x1i98gD1vl4pNAjMiedwOVkO5DRbAofbtI44PqjsNB3CTP8AUmgJNmL4SmYkImg1sJp5Xsm1Xx6hMKpvaVowtk52tx9co6Ixr%2BrBNxYXikpIHlhtdXziJq8AY8qQRWLRtobIowBYKm%2BQZMf5MWoJ%2Fnrx%2F4YXvkXIaHkZ%2FhHp2yHUJOb3VBFH%2B1IvhjgzCr%2BtBczOpZr%2B3rlqI1SV9svDJkxz4eTA9NSLhp2BzdR6Ap3AKNaLLbHw00UgRdiGMT9dW8%2FmfncdmsciJB9zjZrgRxw2065TSp67jDrNy%2BIGeJrCyJ3%2FwJcp5uho7YLCX0%2B8%2BNHJXS%2Fx%2BMPy7y%2B6ikLpbNTbdnmvyHJEfisCUbcgJkeynwDx0DS7PmiZROPgi%2BW68yHkJRIF2vb5Fs3l5NWMYHSRimlfyYKWhsANDF5qmXwT5ClMLXeYt%2BKe09ymCoC3cWxGdY5BLVGSxcGZUJ%2Fg13rdXg99LKg6ryK5OYRRaOpE2vYR1Krqfl3EaQc%2BvUfLUcn%2BPUrURHnUBCTqDAwclv7DzO3B5BySvDGd1p24nLsPo%2BKHPm8Sh2mJl%2FJgz1UTOp8XggyF4bYbprA73vZ%2BNlS0%2BD0EjzBIgWRKFU1lRdx4V4mE%2FgChpPkiOkHF%2BGBUXgh9x2rjbgZZds4SP9F0IvBCAkF%2Bg1pJtIOOXimLK0gcyJ444O2T%2FuMx6GILDWE2%2BixJKJM4%2Fr4uhfw9KglpU0wf3BmXeNlK7ah4sRqgPsT5XPOT2rrk6k9LOWaLiQJK193tLcZ%2Fx%2BTDYO8kp9%2B52wJBrZuxt%2FgAD%2Fmb62GivHWudhL%2F21zrs2UqaweUh93myYz7T0GTUHnBEorvXHR3lzecQb0DgD0PbuGnvQLg7mcc55zU%2F8uD0s%2BTbMFdttvtF7UhGgXdvulY9OYCZcfkoFmzgZ9p6X2FMTLcxwiqa4Ot3yzUkPb8V7tSH3h4aNnCvjRQYS1DRzb39fplAJz6ZIyXXrH2iM%2BLplBj2vsfNBVh%2BtcBjJfoLMbZBcNbOBDmThUwUStaOgfXqvHCC1zl4TvmT%2Fj4HfgKFWo5QykubgAQ8QsbW9MgbOzQkP6Fx5znJ%2FNwDN7xzUtwix9R4IoZbSPHvuDYFpQiX1EMizrZ9Mm4cbWMsxuwU1OUuWPWNXg27WzKJPfzQGzjybUpwSdCVi3tOr0lDbmhILi3FRj%2BMJnN2nfOQAa%2FBu19mDBXgHjPEQkUK6IlGi2%2FCeEy5R1gOpJ5AaWcawF%2FOcZx0aPmg0vq2VIaXQ0kWItu9AN67CfMr0125qyygcLlr8B14Uhd5PT43Gyb8PabvtFx3BUIbuflztqbtZtVEW31qrpU27IvapTktrExxRPlnh6A7aFqmRT4W%2Fs5Etbrh9hiVga4rrqRuTz0eJZHBH8j5E9y4azKpbl0v9KjhTcv5OfzQz7G%2FgoW%2F3v6a9C70C%2FY3iqkRt5CrvfGCkGlSwOvEBmAB0%2FCvRfBOa3GQHFKgNHIrfyisTk1PhD5dZIWWmaDOI9zN8UekDDeT9aSxFWeT%2FNl7MT2OAdnJ%2BvN%2FXypK4sWCQLtpFx7wYcNMnrxYWZMv8geVyERwn9PQQuxdXfHdlKJG5q9hsqfCwrDmPu5YNrR24%2BZs9IDVpb%2FbL4nqWoMaTQbwciIw2h5XIPP8%2Fn3fRO36Bmq14Qceu2xQ31sY%2F%2ByWcRb%2BRswxfb5gu46zQMKbTt1tpjOdR7aPO3kqSPAVpJqJsCWBvYzD9CnMH5kNaO0SGo4INvNhrLjl3Z8VIT2scgNZuTfAbuXfrHzOyBs2BcPbYPYxQXZQrAO4xIc7%2FYSU0UVH2rpzABmqYnlyV3tQ7IYO3ihxvl0IxLrxc3Vn7AwQy%2Brj3O0BrCLU2CxEjJ%2FvUnTrGDEUhZO0knRIUAdYJj9Ef7GKro3XOFZJaRgEtFm3idAv7tyne%2BqpiEqPS6JyGqlnOr9B8u0B2h3ffQbrptUPtpitfld0EieGqKOrOFoHnl%2FQpMcVCinddfyj7ABx3LqQMcypWGNpHx62U66nodutrGPQjOOziYkj3kQ9FvPrNu4N0g4T%2BT0iNKYk%2FDAwS7A4CmR4U36xSN9%2Bno7POiC%2BDE%2FYUkr7wgZyCvxqeumEwa3bt2E4lRoCYSgD%2FVK6qgBNdENsfiDTgzkLqHerU6%2F0VRRtd4n%2FRahtQyPNgMuqhokULXuiUOYno0GgKDEO%2FUWpK4q50WgP6tG2lm%2FraoXRqloqCp4DSTv1FmxcqAsPXYEh7Gz%2BMCYn17fuNcb5FxVmpUSCMrxNcqTtDbu%2F2FAZ4yeT%2FisxJs742ITrUrzOvZGLj22b4tKFzu%2F%2BCPHHjMN7umPX5JjthpAkwZSJvBk2l38VGpLBEU39HUQDr2y9SwFDtlR6ewjsbTb9H%2F5J607dbL9uGuZ4nTjgza5mItoaLRGg9gVQIrq2sBdGTvsMeJ9WRVYE%2BahOiQis%2B7BpXp0V5rMozZfQ38vj6OdTfXb9mLg%2BSfoEbyAK7WtgTUXxPubAd49Xu7DbR8DsR4HHHGz%2F0T3y3RL6t8d1ALMz6DnPIJS8Rbrcx4Qo9RBtZSOZe%2B3bdCUndlI3Ss5C9jE4zlJPmNbq%2FH2fFen%2BoOAzfBO4PdTd1o9OXmr6oO1EP09Pf0Zhyy2C3zw47xQnmgHYuH1GFKcHQTAC0YJJ2d1nsHA8H%2FBd6cuxFfB8Ymm2fx2sGY%2BjGOtHBJ5cydQdko%2BhxBPiYOXUeZd6p2ZKsSY8QkcDEp4jo9TCoJE9jXcdKIrbzr9Z4P05Dg9Vc4UiUWDxsiAEyKrX%2FmT3YQKfFJ8pL9pONSh0FDyNUl9jfacxkFo9N%2BpQsODIjVHfkLPxz8b23qZZtLaFTmQtEMpLZgbgLqk8pWpV2qN63Lrs7TwuUKfEUhKAe9PUAm5qNKLccYRaU6lcl%2BqPI3X68y8C4L63bc1A6c0gGU0AQcVfLvOypxvsK8HTsNlHUlAyz2t5dnEYNoo1iDdpEpDs%2BRkp8SHGCuuM9ZkoCVoMqY00TiBs8XPGzSPGMSzj88B05yDYDnBiFVKVzK3X%2B03kSUdXsgkwPsJinTGMn9v62QBzQBzN2kEnRpTEnbT8fUVZKdnZVDT2TOGM0%2BwZk0DIbIr20Lw38vDW%2B1Nj17ok%2B1yMuVuUOJBwSel0IIEQa7NQhCySIu3LUXK4konVb48xRZdbL5oQBR%2B%2BDEsz1Hz0M1F9bBHsEM83cBIfhTRroWcpvZUd8YwlbQIgLfvqKY%2Bn%2BAjvWAW1yOR8Lj9YSM6dohyMma2pMQlqXAZ2hTef9AyY0h1XU%2FAmkMqPYa0zpKkNS8M5uFEG09jwhmjcT%2Fw99eki5rrRH6KOted8VKD2FQFQFckpbWyY8cy7tpd4QVG0H7v3s%2F1N2JYcOE9lZlsI08LL0y14UmpS1jJSsvBdd1tALXRLH9P2jErYU3oNH6M07PvvA2I3B6upqtVAsw29DXeTL8uo796baJK6M6ytU%2FuzDoNOtrSn7AnVU4gjLhjFQ5PfrgbER3XyuSfikP3d%2BFH7SM2l5zHHnKrsk2KyRbxqOnkNH1unKtvbF%2Bdxo25rA2r4ZB2iaG7%2F8KUBClSLpEq5WVYpJVkqv7o1Ygay6tYXCHzgSyj2Uwqig9nSjDmKvpo%2B1aGpUeRdwJfnU0VZ6CKvHnMtM1wUBfQ3reOtKD8CH0BVcb87UCo8FlGLMvl54Wd7GtxLyrc8b%2FWvPk4T8U6Ha8zo2MPqD%2F9%2BbNuunGFcpPiGbx582%2Bjyg7UDMqNDSgtScdGb2ydeXxXEjys0SnbR6ertcnJ%2FbFyD0LjOBgYvXVcMDKvNGrWIaKw3UjU2IzCesum9RkrB63F8vlsn6LOQwW%2FwGWoLnlbKqtJgEFxbV4tlTizcWgx7SC1rJi9kFaBo1kVeXK2s%2BXqbt6iy3Iu4Wem2nz3C%2FBuzU60QTbX6k92kDtU6gONjt9mkNSXK8PPjnJGb9HXeuaOAD8jrKJ1EktdhIJzSOXbgGeUaSi6QYtvsdNyWjIgNp%2FRAz%2FXXvT5Ty%2FQdSw1LNCVf%2FpjIagTZOy2GnYsWmtyhtowYMANWAN9UC3NOmPZkXWqCrtRQ1%2Fic0fFbyohJxtU7%2BivJdJZGEsuI1Zq4b5cGex4rVpdQY%2FGrqehZ5dnWARsN66IkTDb9yBDrF9dhY6d3uT86tM6PsKdPoVLALwE2ipih6zF%2FAXPcD47bfTun5KS5kCYzedG9LMtB8ifbJefNankxka2x6njNWH6ROz1yYmBxNZ7ifZqN90ZHynqCX3djzehg%2Fl0ZBwB7CS%2BmoKI8be5OKg3oH8Hd1MPmuLh2%2BsI%2FtKrm4zop%2BWXI6pSqRzbRv9xWXCIWuPqInbL9iBvIX8uOQMRU2t2v%2BuZhx6gsB785k2lCRpDX6RGmnW6f09bCu2xXgwAJmLWhkmeyEzeRQm4%2Fx%2FUaXPjY95dlDMtTp1%2FZ6iNBpglu9fjCr6I02qd%2BHRnc0%2FSSOS47ROy8mRJ%2FcIBDdYV%2BxLhRCrLE%2B%2Bcgg5Y5uvRCZwJx%2BswxbCeEZu64HeTYBT7PF7ardjp3PRvIRmtsJyBBqDkhJ5Iayic03gwGD0iI%2FVZiEs1GsxS9ChF0id493MNjQWvQ7qE5PzymqQzCvelIB7p5ENQpMuMjlX2wo47zlO5b%2BRGtTISd6rjthwvoLTOk5cbhhySH8UL%2BsqAh5zPEAo8cOWpztL7gHDPfVi%2FrWfaxprEzuSdh6pvveMKthsZhUx0YQo0hm%2BEuiSko2erLQJrP5T0EymKsQ%2Bbn1%2FOSsOOJ%2Bu0vdyP7hyFpiGex%2FlVNY5C7wE5f7GfsTt8%2F8R7r3n1zlkB8syYA9NatYO%2BnTejQdbJh4EUjuXQ2RgvmroIPdpRl%2FirsfBTM%2BpTikq5Rtea977aouQ%2Bh7sfQT%2BRkAsJjB%2F%2BJiovJm5sR4Ixbed9esg2lYyz2jJHdLOt1k6nrb4qhje4iXkBOqUs0eqcuZ08yuSD3uFZ1r2oM2%2FuL84f4FVeL2wMUSHEevRd2TQKoEJfKz2L7j6R2jQ0x2Fa7KhyifTP5yZps9OIuIa83wVfpEM5QjF84Cm%2Fb5I5%2BafZpThnVQENViLGUHKxWTCZJXzNxGszPgZltbHBfO8O7%2FRkR4kvIEE%2BLvES6%2BebjC2Ee4%2Ftp%2FqK%2FsTHKm2pRGc5i4%2FkW3yi%2B6PVpfjZ7dItJ%2FBZd%2BukarGNGfvzGz5dSJwUi%2BOnaQq0Lz9%2BJBccNr0JcDJirH5XWVHLsPb5P%2FggLXRFnT0SYJSwct864pCsMRKAE8OCbbTG6qnsxjprOOEMWs2B%2FtAY%2BVeQmRY7JEz3n1elXfPUXCPwqZmMRbgU6CAGuy3EsyCxuMbzqucmXJZuTF5ihcnxGzW1RGpmWJenZ1ZdTgHVbzglQxys8OjB4XFvXm8ilD%2BydyBK4CgXMnAbFIliwwUIUO%2FpGpOiI85dm485rtvyjyJHPrhyPWEVGCiCl8%2BliZ55AbZ5U1dL6WgUOrr4sNFdCUauLj58V85LOLN4CVYnWcSgQp5pLaY%2BfwWhHiZUPXgS%2FGVeuThE4Fy63njKPIcOc3PHJdA%2FA69ObODssMJV4iicQT52EVk21%2F8iFOMsvGou%2ByKhc08pGfMlVay6f60yjCuYy6%2BTE9ew%2FR6tMJSQA%2BTaz1edSPRoP0d19EhqeqwjJeGah6g70D9igJJu9fWCgDpsZvwi9PbFN8nwKa3Mtv9Q9wmE6QY8n9%2FJB34XawHtV5AhMNYXDn9MB%2BhdbHUoFVFL8vloD1FcSm%2Ft2FCG5H%2FsEJxJSxWgcBlXGzNuWkEFh6eFw8ETGOKmDL45w3WlKa2tbBHIiKTcqn0wgVMHNEa5ccWMiOLc9MuL95%2BQ%2Bym2BWc05PjLRPvsCDytLJhUpWEhzl6jd4XdUnvDDnq60ZpT52j6iliyA1Cs%2BS8b%2BADFgP1D65eojvmq%2FV8lxW0PLBnrqmwfScZbMfrDnxrT9qbfi3ZeyhxtGEJmPihn%2BIQw2GIEq%2B8GBL5Xky11sm5W80XVfimYe5KRxPL%2Bi%2BgqUn2utI20y%2BoSe8MeEmN5%2BXV9CSgYpN94qqxBDfB7ArOPtBHOfc7QkCJp7ss5Gpb5gV9pdrK%2FbULXZHSXtFyWBrwhIJ%2F5s3UoZwnThvMirWOBdocMhtp9jZQ58ncEW6jGDaXJ4UQWwxKvzoQyC6gBesWZmA2e7QYAj1Qmh7h5xnxv6Ldirzh1gTr2Ofi7krEU8XjHZ%2FqESO87%2FQmqGktUSno0sS%2FiXFz%2F9KzRFPkFMgJUjJ47Cd9g5H34IK0WgE3ChO3%2Fod49Us6stdvMuKaNtiG0qapLzcIFVqVZBBygqyp%2BaOVgYdu99pyWUM%2FAVnLF6qNJsjM6%2BE6nqurnJkfjS94x1yPQb3fduT2QA3OLX30RdECw%2BK4BDCzdmrWhLBe7f4vpHKmopKc5GW5AoIFXxlS1L3cTggXbH%2FMGkZ%2Bjcoy0AizcnOUWBkKDXfMKOHdCakvpvTC%2FdKHLL9anv9VfH3Q4vbVYxp2blvoc9B8KrFNag2ggNNAwsvkqlzebhTF9H3BKTKz%2FaxUJ%2BFVy6Jt4rbwQXB7PxAH4ljbwDIpz%2BSsEr20ZJyJ4BEdIHMrpMYUFvqgY3IemPFMseF23nzeIYegh7zeFSiPdVtqE45kwycasqw6yGZCFJkGeETOjpxSgTGqscF0pks3xCRWpVWygHpFVxk6eKcKAac7DGz%2Fh14VsuFl76GO%2FsjUtdw2VrfkRzAofad%2FBY8AX4%2B85jRxFM%2BbVJtiZJ%2FDEIX5ZasQ6%2FKhgI%2Bo8k4CybQcoQL6ksLi%2BpE7SHzwSqvFPECfwMK0hq%2FC2XVgBp4v05T4qIqHweZCXbWdr1%2B8LkpcE2VHmTpUjis2QVWER0D75xoOTmfs94q3LIuMVEKesXMnCYwvcIX8A2%2F%2FD4Lr7DX1vfvmhyFvVPSAyzzw%2Fdul96kxH2uUNkl0bBGrm4THDmmxPnSVSlvaTfDcN%2Fi4pRRD3WIN9vzqpnv9HdELK%2Bkw9oO8XEn6Tb3H3t2INGms4nCCt54Bu6m6U1r2uzVxoR%2Fs7KZPgDSCZz088tVLWukD%2FZlP0pHpWcG42FwxXxGUcJPjboO3lj1xsKzFjqX4wiyU8GhlfQDNJdRrN8TXBWWWm1EA8R3tAYsTYg1I%2BNQGA%2F5GElSWy8bm0H8fxIKz1Y0nECQ%2BWjBw9vGOsCMiMCO12pMgcki0abIUk3E%2FstVmfxGw0XAZ03S18u37SU%2FbOvLglLekwtSGzQu6BwjeICF5KH6foKZsTYucCXAtL9zupfxjwI9ZcdDTtuTtfKPY7jmjxwpjjg5KFL%2Bd8pXkw7iIGUCn4IGMxWSpaixeJx8RSMR2DPwZAL%2FCd7%2FOzKLAJ%2B5OQbUEZdFG8uIECHq8ZZ9WNHwIDOaJT5dYVrndK5MSyBrr%2B6uxfCXJW9kTfpP4cF800hjgttowV%2FYK4qAIB3G9SJxMtXKkYCLk%2BCnurpWIn4fNS3CnNWBCwYJCy%2FaVzPhUHWA%2B7NsujAITc5dX6O0szDjUTOqWsrYiuaNY7vVPZcbPeUNWcicTGzOOoEml4CEJYN5S01HuKYnqg2N9EY%2BQjhdMfNf3AOPCJqW6gZWrERoeYt61KHRFd7HBck%2BewI6XoeXWDtYq2GxxpL5LT9ScbraKBk54qmAlhkTLeHHcK6HcGu3akRn9nV121JCMSMyrnTQmB0to5AJYplkl%2Br9o%2B%2Bbj0JHrGkjDm3d1XxQVWvfjuGMSbehXYNlAuwZZQm%2Fr6qHbmbgmcntf%2BTGAP9apah4mdz4zCVIfneI8YaNkf4AecrKsz9KT4Oq4or9pChPtGrGJh03IBlkLOVQydF0tucf2Y4ukNQrBOlToNfqTXdYy%2FMvnLIPW33VHrW7%2FV8CG9RVf9iJmP6A6m%2BKKaa9GoOw5%2BzZ2Bnwz6j4b5ykCuUqo%2Bb%2FwGEo5G14TEXjOeMrkQLAUIK83av5ld%2BpwH%2FfDGa%2F59f%2B%2FzPb5Xepv%2F8XOlPy38D%22%7D";case"deployment-demo-stand-current-implementation":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dXrHruzKjuXX3OEtyJuhvHcpr5m8915fX9I5rxoNVDewoZ0ZQUVQQXJxkcp%2FYOYfmL%2F67h8IOPJlrcfhH5j9B4LA%2FwLe6zuaD%2BmY1UP5d9h1%2BH%2BJbwLm%2F4G5fwDqH5jpr6Lu8le0Gtftr5hatzmD%2FF2gf28v6jz7OwMBEPYvAP8LEQ5A%2FgNTKPBeIPi%2FEAiI%2FsrHZT78P5b5%2F2i3xf%2FR7O%2F37Z7yv9%2Bz%2FKjT%2FI%2Bqf%2FSEgO8PZrI6Lpe4f78Mcf8fWTafuvHu333XP3L8e2Xzfnz%2F2Vs8ZP%2FX4P8Ivl%2F%2B%2Fd9SzL4sfyelfuryTzDePq3%2FKFf%2F5wy697FS5N%2Fs%2Fyz2fuzHf9dvkX%2FTv0v8W%2F%2BvBWAO98Dk3YZWkPVAwMUEua6%2FmlMi03O%2F8h1fhx01omFosfvk2YNezxC4Bw3%2FozyNKZgdGKFv06YwQ7mk5uvuZf7gzoPLULEqfnItkS%2BT%2B0QyWkKFIyJA2Yssie8cwBM%2BYUjcY8qANEoEBzPFKz%2FBkkV7Wwtg9vbzr1uV0TbG11MUoIBJmrOcVeK58G3W9RXvMqyeczn2X3PQMEeoyPc0jl3wLXTz8CNW74oAbkORNkP%2BJiLrWnsT39lkZBL2D6dbkU5CExD253UWviZClO98T0T99he%2BA%2FTap2QSzD%2BwM86LyIYuhAh4JWCiFm5gDFRsHIj%2BfgbGWo8tld7NV9KMIzFd3o%2FS9V6%2BR9IqFBPMn6%2FuxUk4efFYTmKmx%2FxOP3IIuAOZoXoPX1SfTuQ7aKf5Aeti932kthxo6OhJjOCXSCtYfp4T0a4Rh2YIPHQUmU91jHXQkrLYhfc7q8%2BbzbIRutQy6StPz7irzUM9tAnj4%2BhJY%2FKQnOoLlmqNgh3DPP%2Fem%2BbpQvHxAIKsNEne6I%2BflOueBPMKINxaz7968ZnjORfQAniYsZcFjD54YA1tmu%2BWAAWvG3beZYWb2BAxcWiRJmO%2FbrUQVfLeC0bz2LRuHMnAG%2B88bCteqk70Z3JXdpu1%2FpTwcG0lfTvFi6NP0A13U6sYv0PVDQPX%2BEsZHTAtSdn1WpAoxuud42%2FGhGEMJzT2XYuunz1CGt6WDWYdwemd5%2B5t2S%2Fgrk2sQTO9%2FWsTGQ5JXMJGUfKS1w58NzruFUHasxGC9QBR0yOfeeqYw2upQ4cevlOYZ%2B32OLs7PNqK0CPDgetEFtXOtp0UwYmVbrL6XSuAWLV%2B2oY3S9aAPZ9a5VTWUGh7npAxIK68bdqzkenTNxmQ6CG1KLzwJ%2BLmBRAy3XnH%2B5GEfmfrCH6fiSUW3Sqdhnf26L7Sej7ObUblQcSgiswrPIYPcOGLC3ThZbT37ftK6sTFhW3gd3jl8mvKoTl0pu6WWjN2QTxtMwheVWN14NdPxjUhQLxvXrW0lka0CYIm0MisslO8Y2yDhpzGlFNeycmFVBsOIbGvoqX1cD3pfzVK9vuQwM5UmM6%2BWa8Y%2BUPgIF0nVTipfBVdE6%2Bj7AVJWhZLYUlNEoC47icsgzChkappkg2CvuEklxdCsOxUOjFms6PxTw7fHjJIMk%2F0zO2rylX%2FvvP5zjmbNM5JSHy8U8Hojt3Gda0yteiDgO7ddCBvqnPkH%2F0UDn%2BtDe0YlO34hIMMTBeGRtxgP0yjybk5OG3ux2F2WME5x5vVnvZ0fabnTovJP2%2FJnndRH%2FesM9Q662hefbF33Cedbn0dTImDzZJfwMsSzs84WK6bi%2BUhi4P5tTIRBxO1e83tZW8NCoPwNUiEyHA1glBBdV8rL%2BvHCfZ77hG14XRVUkIx%2FPPSIv8ADFnMKWkRsRXMKGd6i8jJa1hjd%2F4Lw%2BphAVAc6PrxOIEdoUaeNljkAe17RnTY8%2F4r1iMo9pwbaQpDvgE5UANLuTYqvDN%2BRrnaUesoy9Ml2ADzUyimyeI%2FaV%2BHvrX9hCtrSBf1ZusqDnKWZwZ8jv3RPyGbrJxb3VZDZXyUiZMX8KcgKVR8swtPpnp%2BgpWZRNbaT0MVbriwKdhCM7qKb6BbVN2hirYEckJAoO8NWoEbpKTTbkLNRSf36fAoD299AOHvmrp34cHxEXAqmqG4wue81hmEIyOPlV0IvODrEJ%2F2bB5OfDy67kQdna65merpHwRDW31NtUilV7npFPt6Mp8YjSnEPHBd9XvW9PYEe0jXLG0A429Pfh13NxrEaLdK1f4t8GMJNC4NCj%2BLaZSx%2Bzki36%2FNqJdMJSetvYbWgcYr73WW5DyQCn5AQA86lYf9YEiV3PtM0DRwQt2C3eNf6B%2Bk4SpzZUG2ZUfe3fkwDOQ6M9NdhfBG4hQKnorlbJtbMwGnLe0GrVXGu%2B7p%2Bb7qzuDd39FVTKUGG2A%2FI%2FnZJLxJDCevLsmbCGjRsge9gSNK8R9Jab%2BjlPg3VfIbq4OKHKZH4uTMVaG4I53SiH3hadv%2BYlyIjER8lL4aaWspwnuBxUTwxVXRVgdqEqBur0TEVx93qMGxO9toTCNC55Ff0Izj8Ttcy3AIGTKvu%2FdGSJDpN7Uy9GvaL1Vnt596qEZvFaltVbhLdCJmJY4Y8zmYts6JqHoBqGpMdJ9wL5zwZjoFcs%2B9t6bolE%2FbWM5uRtJrFbF%2BiVBCTRej%2FeFONx%2B7BLusXEhlgMC5b8y%2Bl91pw7Q%2FjeDV3rvY8fBimEaaZNWc2tu6%2BiWMabyvyIzacIcZ4i6fvyRaHIQ51dVcaxn2vBUA49Yrf4rxhCwMCo09zy0X3A72Uq55EUWPz670x0rZFBqzh3n74ZggBP2UEi16vzZ%2Fses7l%2FOl74OVSc2RY3DjJxW%2BdrP9nBzjJ1Zk3LLKAKSU0h7lC28GO6irzGdSSMkMdXG02Uik2SoOx%2FTibHtb7Deb0oSjPHn7Bw54UQ6KzYrEfmAtqXIArhfibVExEerdFiOa%2BIP9EVf4xcey%2BrXfEQIF%2FasGluErxx%2FiTKQ9BmKaZmIBAZITCgwbbgEb6aMAUht0RzNpSFUa%2BLX5ct%2F%2FHJ2FCzBeCAZTYTreyKODg3WJYhIyszEAu3sZPBuAJSHSptlzOFzoJbMtnIZIMrFqyNkUtXSoBxpmzMsxjjU34li1SIyKg4HRtGfINh%2BjYFWDWmCvXfYv8FnL58pIjo65MW2p3%2Bu%2BqgHXceSkfwxmfaPCr6noh2leWrV1JYzjDnPv%2FD2K7IYS5oxi3pG9x6TNsGpNnRkSAKYzZEGHOgMjNysNa0jnTCccGPgTcpPzuYmtRxAXULw9iXKzqJ7MRGXwmOiSfbCvpYgH5QCPp5sWB4HlH2ZOtYRjZqgk51IMtCpCAPClOjSUnpHmh%2BN2ArMorPugXB9LwtypjvyxmNCzhd%2BBoZieqpD3DaTdXyDUUkxkH4Wx12no%2BqbWHofklSRczmQicunSnA3PMR5Qf%2F6yhTdO6%2F1VTQNeGhm0I%2FcXS3wSrhn9IPwe2ttwDeWJbcCGMNEZbO2bkcgGVYyLUHbN1b3DqCZYdTGx2r64XSMmmTLoWCGY3Hot%2FxyuN6ER7z5cArBgBRIrJ57bjiQ4%2FpXsjam1GX7wSv7qSiXlziWDtOJwm%2FTHHHgSeOqvElOa3wsqcr%2FuTssJZrk7eji3vY2ad5f6MZ2Z7xJo%2FpQFuoGt%2B0ZUeaXEg8AD2XCJNqJRq4rhjAOIiIT9fehzdK4kt%2BJB7wMdixV6oBo33TcossugXenC8z4X0zcfe0I%2BHp7%2FCnjNzfiDx6efYZQ0SBQIob%2BuNr4ZdINP%2FC1I3v0%2FQPIxpZy4xbcLNUvjsddQipjIVUvBe6%2BlfJXYvmHQn6d1QNzcfjwZz51r3NIV17rM%2FgNNQAd%2BhKg2CtzDUVpwGP4u7KBuAsj4LPxF20cRuwAHBJfEZOcBLCT6yHSzUs%2F0UP6XaAP%2BZfGvmDeekDwZKQ75kvhmKwgV5OeUyZdp6oTvkbn4WQHLL9mjoozMGTYuUXqcUY86tq18V6L2ARI0ikvW4kUp2h15PCH7TTzE5e6iKnhgHMSzgip66AKv9YR7qcUzoTujx%2FD8hp%2B71mnXff8OrGvPLiex1fx2ZYUIhoLFo6ZM9MW90OnI6lATPQ8Gz1LNrK%2BBBU6A5dceYbRAcs2iEu9fQEsc6eiKYK1RdlDMl%2FkA7h7CjJo3bpBI7%2BNIXUen3OJQCpQcVDLxM4iIarBS2IzfoswaDV%2BqdDPl%2BOUBgy3Z7EzBBfHEC%2Bc7XNnf9H3ZvVwQe2%2Fl%2Fgvk6ledzEix96rlwNLxW%2BmFyPcIWsVSr%2FBUS7mcYaJ9ldLv2eDqLKkc%2Foksj6186D5J29ZaJpA%2BHnmK5UpftNYvLxauqPSqPqTRjiz8PzEBLQPMurQSYiCoL6qLcPfLTUbtrBJwUbktZx8HqVjjcY0iJZBOgrPVLK7PReHHBs%2F2eYQkOD8uMcXliqQZk%2FsrhAEbM7KABJ1vJcXUbQauNFdrCWXNf8ixrvThSwQb2yrpkyDEN4PmAZmCszZADY7fAw7Nj6cg%2BhPA%2BFQgnkTKqCpfm603HrGwfNEUvXHCJ8kqZ2jnXig1jbICM8VnXdUrysMsLjq%2Fzkl%2FyZ5lNvyHz1kp1rwAvdyEm3xGk5bx49R47a6XQUcAIn%2B%2BDgmVtVQ4N91O6MGyAW1nZg6lYiwxwlTjYBFZ5m8AKeM%2FLoLhSc015Uv70nF5jPHkupB8QCEylht7fuIKww8GWJpX4HafPAutbGz9wwdnztBOEhOxVCEYDV3hL5SGt6r0l59N0Te3jby%2BxKMXNVE0b6LdVuv1y5yhfviK5rgfADnhnmBgUK72oElEb9F1WdOMYLvKCm%2Fup5Q%2FPRuf6fYJgSIRKxfh9lF3w3TnByw2pk2ki9CBoy7vuSO2wI2yhOyeBw037nibB9zeEc8OBJ%2Bbv3hN%2BZ5%2FeqTf2w77cXoGtZhd3BpWpOiNK38p1QXXn7bDjATJuFgQrpsM6uX059JISG3uAIKccfuMi0Y5iI7lQMk4HqWhjQ%2BlLMY%2FS9S9z6f3PgGb3tAnEFMnPMIZNdAFD5oim7LRBgPdKcRuZbIjM%2F5NF7TbDBAzj%2B9VLxLgFIB6BMTdQqGFVw4tv5EGRMfauscw%2FG4kMinWvA9gwk7%2BCOTO6MbYPezqtHlBALdste%2Fp8QQm6WaGDkLeVMcdSRQioe4qY%2BsaOYUb0NQplOLWntnZ6FWPoXbZbihSAvPMjvRbIfC8ibjUvvwoWq1A%2FR4rZSUMIB07OqeJsPO04wg36%2FGbhpf8pGqkz1l1R2k0inV8xGl6l3gmVzlyJlvzxc0ab8RpCBBQ07RufovjLasU342aPkqO7ahOvauE4%2Bk46XfTjaDBEbjqbsiE7PVA0XglTfuDlyLW03SSq%2F4loA1R4Z5HZDXPo96c3Ae%2FvhlgtwAQcaEI96MY139TPbssZfPsg8kK%2FTPfxEAjxJ9imkfglHBm7Cvhfbl9PZsWMgCXUBJhmXpxUNvOojCt7AZWv2jrjF95SCMKUSIFr35PInJp4%2BJuz2EGg7H2FfjyPtz448joOaIEu563nK0uTG8%2BUwBquWR42EvOiO85ZYkBJ35crOTGz2IXdDomF3jgJENJ%2FTnSbTBlXvMjDSZa8hZXkRNl0Yhnyw9aOiCaSYGvcgYc7Bsrt12kTAIgL3j9iBCFozi%2BpRnKVFEyRQ%2Fhhjd%2FJkLGGEe1faS3SB7yTzOHNm%2BVIxALPDJgnUSxMvjfW%2BCz43ycYXoOgvxmcfra6C0S0S%2BZnw7dIrD%2FJdnTo%2BPnxj8kd1XOOdN3bzUMBEfdtOqmSzTkFFcL%2FTtQdzmSZpn8Qg9D%2FK8aKgY34HeatInPnYfyMGBpCXwl4mK0fYh5EmKyT258EmNN4L9WLa9NV4iGGvyDjKReQVyG%2BcJ%2Fjncm9ScdSRqO6kcLUvySmvIsjm6MgxRjo7WHo0h8%2FlqCxuJOLTFCvfdAW4btDKj8BLjnmzritfhggD%2Bsgjw81p3bFdGKQJD9%2FeV4i%2FodQ6epS3k0XxLZI%2FkdyZ1RjWsVIETLX7GZyyITYBFzrk8T08c4ARESHm4ewkpyQTdI74RMkzQqwLXi4x3VJM0%2FKaEL34qGRLRPfNb9SWiYGIB68wimXIt728cM1lOwvmwRZcMbJu2M7q2pI9c%2FXh9YfK%2BNEWgRtEhUqnDQE4ld%2Bn3R77VpVF7QbUyNFhKq6m6qw9cBOBezmOMzP8m%2FVSFv2wT2dGbqy3pK7r2Epx%2BwDHUJw18h3lCQRch%2FjMxzbcDgaZM3ZlhD59HGTt7EJNHhV6jO535tX0dtvgGR4RK7Z16azNFfK3APdgiWvkJt5ppQj4t2Ownho02QbPBKrM4pmuSRlO9jrGUml8hwemj2d%2BYhpIlDQB%2BNDKSWDI4X4O4ryplPGBSXx6eXFBDOkqCGyV1j8q15dknNfgxwIvrnjLGvnSz4%2BRVpdsK7J1wqzX4yaB0P3lsZFNjIjxQGSGouE9d2w23n544TM0NdL7eWao0ERaLn6z5G5BuKqg6yRNkfYqt9oIf3HYQ9qMGJ52Jnp%2Fh7U1ig%2F1ZJt79G10nJ33Mb%2BUuU%2BZFfYnq8rWTwuvXSpKeevLUMQ6jkMhoOuBMiYN71q8bvcI35c5hVhpwTSfcOJqojT7UMC%2Bxftv26s18jhKXEUCu%2FfruIEqtzAH6MvWEncZAQNm%2FRI0plRP4Mb8ZytmNg0%2Bwj9SnLr%2FkL84atoOLuTCW%2Fbk2aNNANRdEkHaqxA7RjJSrUfHI65%2B9%2By9i3fU3UaHmv2VzkU25XZ38d4QqLTOmtZmcavfjasutz4e0c66fP9ER8U1XGWOefI8tjHAcrBi6l07ToaXRC32p10u2q8gdCHT82BU1Qv3JwARqU5ll6etFPd1c3trSgJF3J16AGTMX5Gal08WZGN2YXj4DfBLVZzFz%2B7hHpqvuLlh4Jis4vIpQjMN1KY%2BtmRd2KZhfrHhv4Vd49w4rQmybCRUq1WBxk0eDoR%2BCecucbq7uppc%2B8UDUwuSZIW004WHEYQaQGvVlmhoUByOpK6HPQ%2FZp2dPQZwZ678Avs%2B16UBaDLsBuKuCRSFTPRIcFBLV19e96K9nW82JHuOqGckM2U3ui6ry13KF%2Bjhl9NGp9gz6C%2BGhG%2Fgx6meHSqFBdbv8bkoeJlyZjkfCT02i9zhLigd0mVwE%2FTGkuadBF8NTEqG%2B1fUkIUUBOEBTnQKut8M2mVZvDQO2i3bfBHPf3odLxcxHO8tIkgUMmnMGt3BJ%2Bw8F0RfHA9UFHUd5RiHyEjuDDfuEbqBxbn2WPFjRzTOU1l3Y1FcnXLZWwHezki6%2B4rt3BP%2Flyl%2B62dUH30McbQRdkxMkwyFFCVAE5MX1sMo9Urk0A8QA0mtsudzYzkKQ3E6Wtc8a4WoPUyCrzFWUw%2FeXvus0FfjY1LzTTtra7Ex0neCqM3bDF9879kphD4oiQbpkR8LRHpyzK6C2byEqnQ5yb3Hj12n%2BksazkQctHej%2F0sUCn4B%2ByUQpkBg%2BpbTJAjtAHxgZIOMpS5DvFCupiJNQkITBAB0J7hQHffS0waofAfQIa5u5MuVGiVxUMzPm8G7HhHVoPDVoPzE2G%2FxNednnTZkoLQmZ77I9gCakTgMJi0Cz59rLcvlyLAdgiBUSrJwtzKFV22YhtwUheDCsGpP%2B8ePxBfgqaEWINE0DChzbhqiKB%2FsejrvJ%2FU0h7rcWVnR2Qy4ZTqabt4OLbnAFFfEuPKdPQpLVHV8mADwhVLxSlGLiwjaKChCXIpXcPDvHrWrGCeSjyzilvP%2FlJdTrOu%2FmZnRRE3VRCOStHtjWhkVzK77DTeWp9wa57dxc55A46jsO%2F9njn3mEkUL3fT9PmeptHfwGxtTDY77XVIHAFVXRuEhHNNwGHaxnT8zVxol0GJcL92ALpVwQHSp4yM7aNshoCJvKCXOb1PwjbITDYRten39VK9GlsjZbvxUOKLeIbYU3QOro6h6Bb2R3xr24L55cupzPDfxh8s4ZuPLyBLyi%2BxfND1o0YFh%2FFINH41IggSYCZ%2BsdfdF1cfKvSbKmH7qeVwpkRSWuBU0ztQwIokBQ5aBk9f5AeWuFLV2Cg351taRsQq4wCBnuqdRph%2BwPyPy3OemX4wSGlyXFjYw3kKUWvb1xliTR3jP64G6qSfSTT1vWUNMZRUwmWwZ3b7T8%2FSDhZYujW2BeosM%2F0Rbhlloy8TQXtNfl14J1PqFpUA2Hwv6NcNPCiq4FqV2jZosdtV6532zRKYVTsyznCCQNsIZ7xVrWwyuI3DET1hXCVifgV3VBVnP456vpRaVhbtvPsL1YZmy%2BPkACQxAAI1o%2B6PhaJt%2BzNBmlYhe9paxmPiXKvX0azFrC6YEkqRkrVHieP4x%2BsI1BgtxoNp8aWtbfucmSZ8yY0bfOD0ilGg3P31pXvHrz0jEHr4Zp26XhtWAbKNIzuFh2P%2Fq4hu%2F%2FadY%2BxP4jW%2BASoObg%2FSNhpWUjjPrUZguLyyDVBlks6JTospPnddcfVxDa%2BpQdCWbhhATnuYwxwiJH2e%2BKHLxytCJyzPCFUeaVgMLoSqN82j9BTJ0XLXRBEb2QmVLNgHLzPZLDWaxx6U47I011G5g62SMf22ViXb%2B8bwhekl75Fbcy2%2BigWSKq2bMg43wzkIcTSlbdJg6wZ1PXfiPx%2BpXzANeh%2BGbqbrqw5oCmjhZIIz7Stb3RDAFkTruXRANai1ifTlOSKCcspwY1B%2FrCFyTc1PzNra3POh%2FHj42WReLPpgunwMf4xtHtmMsGmq7xWhKMqM00RSKgoQN54vrH2lSqmDEFJOrJ%2BE%2BVugmlsvrOXho40SecPtvXBNZeQf2qKaE8UKbEWS1Isb%2BPe2DY9%2BdMcLSIk0Jdx56uLJkHtJcCnXQ8adfdlMvv%2B9gh9mKFCyjNKmrXmKatFpqQanWXjj57dJgV3j1YXtvPk5X%2BXhHhX3RnF8bT8FEjd%2BqLFxitVPFYmnl6aIUdpDP4wgkYG9GnCuO4FVSRXuifyYXeen%2FNmWYP%2BBvzbZ%2F%2Fwm5X9%2BUfPF4t8f1fwZ%2BW8%3D%22%7D";case"demo-stand-current-monitored-points":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dVjHsqxKrv2aMzwduMIM8d57ZnjvKdzXN%2Bx97xu9jiioII1SypSWlvIPTP%2BBubPv%2FkDAni9rPQ5%2FYOYPBIH%2FAZ7305oP6ZjVQ%2Fnb7DrcX%2FztgLk%2FMPsHIP%2FAdH8WdZc%2FQ6tx3X6HKXWb08ivgP6ZXtR59tsDARD6F4D%2FQrgDEH9g8gM8Lwj%2BDwKB0e%2F4uMyH%2F0fM%2F9Bui%2F%2FR7Pd7u6b89zvL9zrNf1T90RMC3h9MZ3VcLnH%2FfAxx%2F89YJp%2B68eqfddefcdzzZvJ%2BfP7sLR6y%2F9X493no77K8CkOAOg71Ni7522OM9Y%2BwV6f6H9O7x5oU%2BZs9Mv6ur4S%2F6e%2Fcv%2F2%2FM%2F9O%2FzcPZjEPDDJiCbkdAf1dZ7tjrg1yPFJM7U97h27ezClLLmtzCthG0BfsD0QNGgRWDkP2X2%2BOjrBwrgsr4Dkr80x75HLwGiVNWtR1pStZrhNTCK%2FgCUfaPrJAivOWsKhjN3a02mCTsavh3kJBJHFcFp%2FLOALNEqGToIivrCaKYa7yvcjQl8hr%2FXnDRg2E2QYZkGha4XD%2F6CO8UNaXVZ%2FD5T444vsEcuGf0uH0q%2BWzXkRbKPRMXO6EfPFdgSux5dVycNa6mcHezuVsM5DTMbSIEMAR6%2B6OyLsSvv1P84VUKpoeo9fBqLRuTb8Nr2ewwj8Sri87zE%2BXgCTKIMwiOKGckk%2Frx%2ByWjwgMVjS5sbLnEd84kj4r43dfLT6Suh%2B7imfmLgkf3OYXG6jvZ6LncN8MjJL26cIW2qBGi1nvcrF1%2BmlhduNxDCo1H4%2Bjovt7VZJnrWJRN9dU33KPBhlXVpul37wyQ36U6N%2F2UvvyWc3qvuJAfWJdVlyRYmJtwVs7o8MPi7Ize2JXQ%2BiVX%2FknH6OpJ3oxmje4E5mGfy1k4WLifLEoxUgqS81T3giSorLRkgodSfdVEY0JIiImvgPaDkLf8X70q0VBvbGQBLPlzoLhWoIf76aM%2BnlzHNCoG2q7VMVF3mGJ0z5LplRi3R4cnyoTnidEklYXo3iAXGky5YiKRS3EO3bu98Jq6y%2BSUsygRlEgZcaH%2Bx7Wch4lVOd4sKXgLuStYLOBT55WbuGBwqCYAvS5hALJE%2BuUvOnmVaCaeJW8wUg9G4wbmtnDgyN%2BpCICF57LdcFgXozetK5ROqThAoquJAwz%2FRFucvyudI2RtBUTtjjHJy1sOUDz0766k%2BSJzxJhgvGNC7UTa95ay8eziToG%2FYlq37emLw%2FZVdyGd2w1PBephDfwuOKkDZwIhR8cSMie9pCH1GGn4R67uhQQ%2FYz7Y2sHglANHBcmoWmeB0iYrabEywk1NdEi%2Ba4cVkceHynKKOQBBModfIyC1kyWArl3uDx2YhmZdfDpkvDvKhp4IDsiMkXIJxiORnAIXud4WlMdG8I9w5r4MF2fzQvtwdXbzSLK05oMWkgaiOfr5N1LNtFYMZ9PmfU%2F4vhV89o%2Bn%2FZjTADqKOp7BGQhXSUI4R3pqpx2SAPyC74%2BTlonrYH7AK0fwVOvbO3LwbfQJmuX11Vgv%2FDX1UIrhfVy4rBaI1zbrL8SG444vtOQc%2BUjindnSTF22vKjdNoUn7Eywm9L%2FGqkBnDH8U4EhCAi5SAt%2FVVrxzLfPtPHCxmFHc7MwKBklylX3bK6ioNDY4%2FpvAEPLHsxUj77yU%2Bru6Gcu0xewEcLWz3H5XhpliRSYScOc9nhdjeZ4Yn%2BI3SzShAxWccDN0dFRYRDhvgFiVmefbvN5o6lnTB87etLI15L3O2RSh7zsdrtnvtk5%2FwEJLdTI92pFkVk8Fw4Qm3ITCZ69B3inCOWPgx0WkZEa9bOU0N2jgmVGtNGqrklc%2FiAMljQdX26yOk1WAYkxKMXNYxFUwQr%2BqwMigOZaO0o0XMvBckZh3owoonL%2BHxoXSJjta6Ktbxj1XR6VBRKsFqfk1J2GiU4mGXEwlRtfEey43eOK45LFOVnBRMsclPdGY1hU%2Fqs3PBpG7ptrCoyG2%2B6dqwTyq2KoNoJMTt5kJijQcxWesGu%2FEUHfROvBzIZroU64p2%2FVpVGVLN3w40T99mY5IrzQXvgLpFsCGV9pzfOgl%2B8cYMzfiaIKwGiaPbQBGQKPFMEEBCJS8p6hmzq43PcsdxWzmV%2B9SELrv7CGvuui7rXBOfAF%2BZmScrveB%2BrpKaHlUS4GFJUYC36WuBdEqxw%2FltuD%2FaIg6iOSVAlGQFHLYQOK7FjcYeJ3djEQOgzwsagj%2F9kmoB3152oeGk8LEccTIWSn3zNk4jbNiMXT1E3%2B2E9OI8eTr4pqXwkR0uz0lxi2M2thAxEES1RWumNKi9vRh2J5RjiaW7SgGiBb3JarvD45ORB0t1acw1YXYR5MvxwkFnZhMaHtchq1T6HzJ%2F0DGr8k4GoCqypufrc3%2FV7hDbj%2Bf6MkxSvC0Y08N%2BWBSKqdI5yvJ5NC6G7GyNybfzepx504zTaZYzohTlpUl9pAEVUazXC2fZx%2FZWn4Y5kLnpBV8vaJjk6%2FPcAxBbyW4FHl%2FNqBbaKHZGZuTRD67N9c6JKhcoldvVgh0lddFbUVnABZVCdoVAvw37N4d1zxpT2PHSls6gjTS4MqMXlL6qKFnVlto%2FhQZ0nkc9DB%2FWmecmOI0CPN6kbjgOZ5ADCvqxPWMGCeZMkvrseyRxFHtDuj1ogHLkOPYQhEN6gaUnmbhAYBVDqpCveTIOA%2BtinZ7aof%2FAHrL8uuoUxkbVICdMMejzirKOlOn096iwFH1ZitHBBrS%2FyvPDDcJTGdsLt2Dx2wCfwHrpjRZyx5V1wC%2BoGKFzrRqfvGqfPKQ2JDKnB8EyU8H6kvJ4uVG0iWS50W6x68qvKAGXYvkk173hacczaKfU2DqLo7nugeiZc2KIqVkzy4m18YI8IJHTsVzFnrT50PmOaiT4efuWw5edZTVuo2k%2B%2FdCfzppOQm0qLXETQ42dRUiMbXcwYmJdozinnA8uK1Rd4myo4GUkNtNBayt17w8M5RtnTkRAkAWdetnHLFz3XJVi%2BMn5UY2wDGNZcUsLZbg3VvY7KILOI2XQhJc6NcN5Jdduo1fyQLCrZ9uBuZ2CjDoPPJAK9S%2Ba7V6o2L0NjV%2B04Z96ufe1tvWuNozriXieWajF68FivEVRP%2B1zTJ5a1Zma6II6K3oI4AY8hjRPxVHE2E1mEJqkCAbCltPgGRDrZlL4sTauYq3VH9g%2Bbkb%2FjpDRIsvGQN6GxMtFIX9Pufj8a7vWbyyL34lrbMi3s6Iz8pQDgBwQtyTzY2rym1qZnT3ElsQTJATTD%2BxssFHri0QBEeISMc9Qu4Y3catyxjrmwFNUr%2BUMhUFKcUYzc6SGtFSnDy%2B0Bk3LN091Xpyf5Y%2BEaZcvnOWhOibFUJGVR1JyyazKYUTWLJEZYoXBR3jPZWGuaAJ5KjFsLdyCZQ9hJvmSoDUVEu22YrQKWWPfmQH4dFXo3n988xikxjhnAt36j4OqeZR5OslZ%2B4fkI%2BLDBWD%2BXab1ArAnb84ck4MX3oQ9q2RuqDGWthgNLUdNCD%2BYQ1YrCXQ3wRYZZs19Ralv5FxyesOEqGMXhLTwRvJp%2BWHXgIlj8mxc0z04jJnup234g7JXM2GeDMqGEbVOtBBdP5VtSTHvrMsJrZhVqVm%2Fsh%2FDRkeJ8O%2BW8zqyWbzVTL2ShqpHRKltEh5eG41cAjOql84LIl6NuRNUNx1WveGCOSLhu%2BheZZsgtp3gZkeVJb6rTCchMx3AtzQs7Co2MULwIgjum7QEDfORbjLO1GSMg4qEXLKGvS8e1dmiWd4VTI0AvLrGfc2MjoNUQ42KXsQKio3NJSQ04qxZEj00Tcr7GkxB4vaU%2Bj9oFf6nPn3qQMcj%2BbkuBxk5oDrBQDK9dX48uKA9cgB5HIWb4gLj%2BfejkgOrRBCWf7my0FJF94zFHnwdwEOTclFhNNvTuoMLmwq0bhR8mX5TXCSqGoZpxOAEaGaLUMobOqotTxD5Hw9Vx8B1KxApoE0%2Bh7Sl0OaMuCcFDSEM%2FLYRkU2tbgh2BPZ4paaDEVp0L7BGR2sSmy755zzH%2F3puFaJC90MxM3Shh%2FjhYr65GIcbMrc64vKXS4ncJt1cmhbyctaFSInsKYSoWEj0ZL%2B5r04x0DJ66wrBG3IX3dHKeMfGkGpB0Rk9%2BVOHpXKch10y6RxlphBkd%2FMJlE%2Bs2XjYxQVqB%2Ba0k3X0i9jXPeMmMuBQ%2BCoLgW1M2bv9y6f0EWpOQXK1myfMLFDJidQWU4%2BKpsL6UaiJ8s%2BciJKAlgifE%2B2MSVsAHUlEsADttAEg44cll69OsLXBQyWKG2TywfzxLpPWapZ4SieIhAmKJC3tQigDeRfWmaNsZ5bfVpvrxWw%2BzUby1t2BIuMmTUtqC5NREyLK%2FcdJMGDIMHwo690%2BEW8KbAAWBqRmiIBkpMknJJTpm4EHpNZK9spKZRJZB2xCw8Ngit1uwy7jULQWoa2VhkzViH7rg5tOQMSRGnk2BPRMzzCajJkRahv2OoBIZqM%2FdSAKL7EkpMV4mfIGERMEiwOf1f2J0mHvAM71Z4x5HoHdT4a8Hth3gsdReyDWl7E7Ra71y0JFsNwhJSJdsdWjKCKQfIH7gDDXkVJ7p6lpG9eS8nRpwW%2FeApuvXOG976b%2B9kGr0sHyuuvcHTkvOcZArS8FazdPoPpP7%2FUOlu1t1Q46TMcZGzEMe5B6uLMMFgLhm9E%2FVLSk7PHZIQLj66hNQjU%2FWVeXa9CTq236f751EyAk9ieafm0%2BDI1LLEclMtANUYBffcH8Y0qF716g%2BeeNgHiqM0SeBRhzn07rw1T2yIkTEKaOElAEaoHSz6hh63go%2BAq0rgDXtvWMhsumz0uXrEgTIfw1ZzKyMhNTYJWQZrgIaOJU4CQPmYbZcbIgG2Axpbxfi7Wn4ScbkU%2Fs8YYqi1JTumZsQlaOxNb5xH7GQ3CFUSaakSIa%2Ff1iODMwiajZYGPAX%2FB0SCMQ4Yo%2Bz7epXh3QY6OUvOVyFUG5jJwVincr7PDby9tjcskq%2FJb34Jkolk2mMmc3q0D6SsMGWx7%2BlTvNlcQeddox0BQMRToIo0SPc0mIAKr9gAsiKTQLSor0ubJ3fRZ7jJgzfZn5nUKt5qSFCizHeweGECMbhJI5G0os6kI2R9coesxIRr4t70%2BPEyIqUrhymEYAnb%2BEnWhJFtg%2BX6wb6zWuPMDSE0%2FOFVFJCQOPjFsuXrRHARaqBlZDzQfezkUzjpwBhAqPpX8LZ8Crv4e5T2XKOdt%2Faluouy3UxdDTdi8W0G0Za1XNY91aBTJySDQycTjOULcx6ESGkiJQrIo1VFy4watW5uxv1QU03xrWzA8isgDbuhyc1peynG6RODzY6AqRPG%2BhRIA4uQzGjyltonSkYBEd%2Fk14wA8DKqaOLDmYxznW4wqTj%2B%2BEbo538Xrk88Q7dqlCV42gSg7VyPQB3orXzVqryBPFsqtwd64i%2F2QQuHup1O8vMpjOhmS%2B9z2MgW08mBpPX719fiYs2i7novYNKue1d6L12%2BwO%2FPvDvvee%2Ft7ZP0z8Xtz8t%2FwU%3D%22%7D";case"c2-edge-telemetry-agent-containers":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dXnFEuy6ku3XnOHpMMPQzC4zzczM7K9%2F9t73Dl5Ed0RVhUElp6TMBfI%2FMPMPzF999w8EHPmy1uPwD8z%2BA0Hg%2FwDv73s1H9Ixq4fy72XX4f8lvhsw%2Fw%2FM%2FQNQ%2F8BMfxV1l79Nq3Hd%2FjZT6zZnkL8d9O%2FfizrP%2Ft6BAAj7F4D%2FhQgHIP%2BBKRR4fyD4fxAIif62j8t8%2BF%2B6%2BT%2Bi2%2BL%2FRPb3fLun%2FO95lh91mv8J9U%2BcEPB9YCar43KJ%2B%2FdkiPv%2FtGXzI%2B%2FG6Y0RAux73fJ%2B%2FdOef3%2B5rPzG5uRd3ufbcr%2FH1J8I%2F9uA%2BZ7LjMMW18Mb49846v8Mt3tHkCL%2FptC%2F%2BdvPv9t%2Fe%2Fn3zyj%2FTf%2B%2Fv8Ec7oHRuxS0AnEHAg7sY13n1ueOY6IaLifysN%2BFPJ46%2BxO0E5ym4l0Luq3vbpLdaMyADL5tANLaGHtj62ZQlpOjZq%2FCMPLEeq%2FRsqUjuFP9MmOoGnLNeTxI06roD7qWteeJ%2BLHf7aVSjxZHx6HeXOBusiKuAd%2BfXP8GKm2AAilyznFT0%2BXBuTdaPoniLp%2F3JabRhAlyR1E9p3hnh%2B4vUyuqLLOw4j1T27dtz8Z6t5HEnFq2laO1HhmA4%2BBU%2B96kk1SXocd8E4EH32%2BB0oPvCZHqobHxriBfdxoG9lyRO6uWiB7mv1PMa5fdZASiPs4V7mHtPImqpFeRke8S0QY0VJgt4WBiVb%2Fwm6zYHWLz%2FRsv7UG03pZOg32M5g6sdbv9jWZZpJV8W15cVPfHLckYXLRHMxl1F9qEgWgu9vD%2BIDHPM%2BC9l13SCubYF7O1P1PWjn7j4OkF9UQtHURVAAr63hNujUey%2FOe%2Bx1CiSG3vpwvuCdUXCtbW%2BfvU3k9klm7pZKtyZSruvfAZLJpmdrkTizKOACBBc1fe2LhyD3FNDNu9u9ptEufVPA1U5%2BT79%2FanTMq1zRLU4%2FIXlYBdWCiQXucFvOptT4CWsYZfisNgU9DF0%2BSmOthmiEGaIzGxWBOTpU3mHl4iSRYEcGSoAaLGFmskoA1FrGUHxlyo0EDvHuib3nK9g6Kbnrmw9aJUeDw5Ejn7tut2Rs3O22IHq7jWW7PTbqV4YdOkNI2mOxh8S7dVcl%2Flm%2Fcr0cIoR4DUS2pUYulXD81gYxoSzso2afXtzED3N2W6O3qU8rHz1sYBLKOcseKZ4Z0GT686Wex9beR%2FVQburdt8CYcsPcpZupWuaBLfR8TM0ZpgaQaidTt708aPQ0iGV0UMpsK840DawdS07DgLrVi2OsxsMrFF9e0pq9GqlHuIIuX2wQiwX0fLTAtHjxPry6yfkuuHzbMMMGH6jJaRXe%2BUqfMBMH%2FVyNWKY4%2FpvLbxLfK8qlegvfeiMOpjLkGgMVgtS6xsfBxbLz4ztzxtEOK2Bu4UStguaIYcIk7c7Yrfw0q%2Bc8BTOOI18%2BorePD3EWZBbNjNIMlyRTNJFseUfFVUfuVkVMsCZWri%2BpLS326Jkkk0DWX4LV00YotVkXTrPP3oaRzUKMoLhbyEDIgxIYRKdc7DdBcBcyyrcAJ7qZuQU1GG6KegzbMbx%2BiK1psj5NrbndPFrhHlF2CmDqPVqG9P7U4ELqblV4rQoeHcTUpGXDSM10ZldMsDwos8TWIOJi8oRQl4PjaoXSAD5OZuy9wl82RqHj3lIO4DNbC5djRIArRjy3ZYHq86U3a9D9b7oPmNqBl0bNVSw9hYU9uW5dRCGTMcTsS9aMm3yVm%2FgE7fF3zKmIirgzGURvxOKj8%2FDIgsNewgMYhGBtinL7Qm3u6xL0StDt9%2F00nvEqzKPxNclcON%2FZVtfoxeqTCo8pczUGTqHXC5cWvgxRyUQkjeN7EstJnk%2FaELevsw62IaJAZGqRn4ZWPOFyBoPB2dW6njgKzNHnN0PW0nvP8RkCO47dKC%2Btmi9tvO2%2B307Yp%2Be1mrSUGFpoPUqnZlE5LhnSgcXEzvun5vNwfWbDjbTbqEO%2BuI27JECWXCHLEMTutxWUeT6%2FXcVBVx%2F8g25ggVpJVgjjm8kGUEYARgzBalKRuTSTgN%2BZDq2N9fFn76Bn8JWYIr7SbHv9GIobzriN6vRZO%2BpyG3iCBhKpfZCqi1Cr6XjTRe3MLiYC6wsieHhUdH4UXS1NM6B3PoJmpf2IbFatLa0QbTeNWoh2OYU2vCI%2BfFelTc8OfcIN2sCW%2FGInUSmh4BSb8A6ggK9nxoYXa45rTLyC22bhfPzVcwSug8Y4rVnD3HGr95y8Iz%2FgYyvqzg2199yLoXxctJ8%2F6N2wqirewi%2BZM8NIKTiKsiVZ1w64qXcA0AyOh4Y0lWrpCrzhpgCdM33uaNVeMPxRJ7ugfeZVkY8ylforOicR4zyf2WZPM6SZfrB7UPa%2FIXQv61DcrOZSw%2FtTnbT8513StNaElZMJyUKKAwhJ7stVEpOpiri1eoMbya3nmDig3REsqu4g1rRUu8%2F%2FRF9%2FNEQiCttqFlsW9qMsAXqN7uKpXQiM5PU80HgXCTH60uUGUED9vxHRZ2tX1VLSrbtBNb5g8YECfmmjBJ8t%2BFly2dsmlxwag7H2a%2FjApJHy45RV2CQlTCQDW84KGPDOSPMn5GktLV9YPRcDkXhYMPMVJQyI4NYXTB40Opqv8yiVyLKIV%2FH8xw77y8CUT%2FVviMUQCyrRqa0qaubBRIPB3Z295zGi7vnHdAyghLjmQ%2B%2B3Fz%2Bvot3eN3jGqfvdr%2B6l8Tq5PNytGqQnJb3r5Jz1ERfJw732pkRLZa0x0TeTyPO7Li9Z3Tzgqr8EsPym1KRHK728AIesJ2clESqAoqmtPsKSSYMBKHKj1mlmYK5Dl6XIW%2BZk0mRdFDxtrtKnD2DWIbNl6pDq4eQaCN6rZKhfy8o44YJVyOXBVQN2DJcvSlcd6jIAuq6kR0qwm2WllBAyBRsBgga9vdvGP4FMycrSMpOc8smuhuQoy9N4V4ZDKQECQSS%2FG6fOyynnsajuiZLn3ZCYSHmUbAmyss8YbP%2F%2Fw2uQEK9WZC53yq2RG%2FxBEEMcrYnMjEgi3x2E8quIbNnLx2NwXV4z4JedRm2wdCayvgWbS1rRMBLE3dry90JhLvdt7BZWsRxJq4Y%2BJiYaFVpVhUqTaswsVvcNBJx3P4dQ5tw1FczYiCu3FXtNUdo67lhFDtDw4dK3BZNglcAeBA7tM3ltEOgVskK5np6b16V6SyCA9cNUYgvhi9ecqJDL4ygSaFDu32FpJfH4K7LxPzKXthUw%2FHCIg7BfvSTkoh8QvNW33hJ9LlUTD%2Bgr2eg3DffcA1lFQacOYB%2BRlvNr0yzOGB32Tw8oj4xNZ7%2FBVRk1uQaB5fptqKvpGutaQtKf8IzidcJpnhDwNFdnlqebKXa0K0qGyV4xgdgRoXho0heLHdxqX9uktyLnBzbjGHk6zTssQnla1mg5Gij0DVM9QwhKWzky8xZGZUjx1cmfSJJjVtjvTFkULFgCby8gk7ir4jCvY%2FeRwAdM5wRwKBdLmqQmms9Y7oVBxBVqbfDFmKrxChGRp9kvFh3kK71OIuxywGTDZJe6DwhY9FMSMnA7%2BmM%2BCiSUeAGyvWl4RGbRrLp%2BItYXpv5OBpnLRigPtx7eLRJUNQPyVhbuOGXzvIq8kI02xmTdonQRFmk7wbMmMgJ5u33XjyknKkKkk2DwVVl%2FNNKlslXQV9U%2B21gTskZxoFnm4%2BFN1B%2BKuzljBm1dtIzGMeht8TBIBKyGeikjUwfwy6djOfn1OZboEwe6sYQESAufvA65%2BjWtbIhdhv9RoBm7BEDEW%2FdMeYqIVTi0k33A8QkgG3ImcytaGMzOxfiJISnuoMOYWqf%2BvND2bvGnbTaXZTs9R3sc0v4mAbNp3efrEZnl5gp%2FTVPtcy754o2HAQC1IYItaPugGvWxdszMYg21MJFF6Dwtvpw761q1bs8AMWl9RGv2Ml98A%2BK7KlwF1lq8xz1%2F0F3mDPCya7dqZUB1hoUpXDt6L0sxBd%2FaJVwOAkwD9jQsnWMtHMvHtGaPVz2niJ%2FBkyTJkqNXCXX92JsvhqAqcb%2FcOnEisL2yfkus8ZfWSuVXIJGu4Gj7YvHBafJqqpQa39hzWtqV4%2F3RjXdNUfaiy50GKvzqeRY2xyDQpknoba%2FQdHwNjbMGSkqlPrptJG9OXXM9MwHIK%2BzQsGggvem46OrBN0vL6on9gan74sxLcW0PX4Og4yx6CKxWnltWjM70m3UoZjeqfdXdwEoD9lUtwgFUNFrvKAH7QOg9uy1EBf8air6mWzQAA23C%2FqAvqvAns%2FYjQqEhev2DQ7GqM6YuN%2BKSi%2FSq%2BbkMLT%2FecRqg1AC%2BryJMyi1ETy2WYX9zjVQms%2Fn0RaYx6KGEjQ%2FQNAoxLRs5ZdmmHz681AraHdHRjjkcP0WjKTNQBphkNhJFBpws63wdKbQYjE5MrzruD8ufXjJEO2U9TZf%2FowtZ16wz1LkLO53w7ydkq7bSNoQ5rTdmOjMB7nrDWClf8k1qAYfP8bAuq%2Bhtl5IZUOESHbgi7p8RzMvT15O0NzQHzI3ZHyzKyUHUm4yhVVB2B%2Bfl2kygsLZFM%2F9WYqgcsRVig%2FlKoN6oYcPVOFpPeqGPwuDmNv5R%2FrwEVatbzdDeIHuQbt8Ud5hvYmfe6Ev5ZvspWMWD%2BakxRXP7GNgDsbXBxFuyf73u0h1x%2FXCUdLyCU2B0ofcM794%2Br9KtRXfxOotXxeB9W0nHUWLcaxNjNvrQeWT0tVrYGEEGH%2F%2BAnOJaz%2FgfNvaoYYr%2FpGUHewHppMaeU03Q3CEZ5DfuRti%2BJxS78p80s1bUXzb0YI48jKLIoXOL4lgVAuXq4gmKqM%2BI92PHEhw3QBt2eVDxNiwfHSVIkxYX%2BedV8M9oUdGAOeXoeGx7H%2BYt5itftsddhTumCJl82h40oubkqIUXsTfNmdRBG%2FDpVXkRm%2BERTOfsWZ5HyoGMEHhfXFpSkVC%2Bq0QUDczjRH3E3CkrWhUqzzGKjAiugEkW9u01rKN9qxfricrhlN9h0%2FVEWyH2H%2FoBAb4h7AMYW5nVXypUrQaPSJG7pHTorw%2BVZYnWWgXyeaa3VLrDeE%2FCR%2BO8HCo%2Fa20YBSaw2DoI6SOpvnZIsTPCGcL58ZvfSez7%2FT13CeVGUN1%2F7uHyM6US2HJ6KAAzT88mSlB%2F55MUi%2BKpb2pwxPRvxNEr7UMQyxqD7S7hAbpWTDSJXVjjFftun311JUvpIiSfvzpsWeseZaj%2BDP7hgNQ6B4aVujrdwRJpUk6xJ%2FdMo94V4JZxd%2BqH758fHSbwXwHm97YkOE52%2BVomA8KT%2FFl5ePmFWFA7q%2FJNRvibKfzb9g8ybTbtrhSdEzgTi2TNDolYHpV85G%2BNyOdASCDUL9Emr8AI%2F72bNdTucNBoQtVBdrCmgrwQAEQkvEqE%2BsdcZB4kV9Plhy4SI%2FxSLlnVBa5bQHz8Yq9jY5FkZ6vgMroGopwfOTRD%2BJKsJNjDq7EX%2BKTMI%2BOQ45MR4CSQR7Edq4%2F67XdFMhc0c4xSpuwh2gyCQKbi47YlMrLGygctLuDEAWc%2FOiQPOiQnOinlCsDh1CiMt6bOw520ALFFeDWMV38Hs96Mu1rvNn%2Fw3rFiUEMq8fmGShEWaPyYu0dGY8JBaSVjaZERH2zyAvofOPOY2TQf%2FWDT%2Fs1%2FOCRYelOT0pIqVGXuFE03NvgxuXvyP7TKMpK6NBHta5VXqiDqTbGHi6cLQtEHSNcYbwwtqudmsXu5Ph7d2PACqMzQm4F%2FgZho2dkF8DQD8BtmwivGXPUryiLPw27249urdqiA%2FrZ7GTMpKwniSr6fQsH0uPns66I6bk%2Bmvp0hFb%2Fag8BN0ObFpK9fpTgXw24kfoByEooK5aKgCKyaNbROMVJtfR04z37MYmEhKBoGAMifVepcdXOCxJRj%2FYguRzGZaJZNEaB0jET3TyfsoZXWMiBVEWd1x2V8nHQ7LHmgm2kDbbx08zBKWk3DzQirTtzY86Ssrul8NTwgmj%2BOvLHU7Nl4NpyuIFU39gXkyDFO8AjNmrRNL1H1ierjxWEmF9LPCTGvP1sFeB8%2FQVAYQij2bSJ2ccOiAiYYxow%2FHH6GBSctgnoMXxo58mNuTmqSmCc4HpSGvWufLi%2BVF6GdTNIvIDJ4WVFjYxvBh2eePgGWOjFzFPBVoF86L5xBfzpxDOZtKV3TvilLBsTz%2FLAhle7KbZvQblKwQDnFUn%2FNt2C6UtFcKa680l7Cq6H55%2B8BqSqXuRRiGB9wMWxoC0tqDpQV7FM%2BqB%2FUgiFX%2BJaost9bnmSgUSCN2FVTTdNbnSaul%2Fnp4jj%2F3t3AjNiYOzahmIZ8YMSWpkexGkTJjZZ0g%2FoUrDILWZcXgVf3aqeejDKU%2FGOiWZvumcPmXEfVu918ROzB%2Fy4F9Ka0vBKOZi%2FPaVyOpYZsTHtNOmuQAaSeQTzPK3%2B7OXBgWnC2Nxw%2BL89KPnDsKH%2FbSyH9%2B4ut6wZ0Do8%2Bi00WFxoac1btOFbo9LxtIo58HOb%2BT1YGsJHuX26nnq28wQYyW0ztDN7YDAx6fGcpeiUhyufABFBazCmyLPeDX1YXmOriNIa7CUhm%2FXXiqNt2jS%2FFqCutU1Yds%2By3fhydYJEJtzguDP8Xjz4bOLot2%2FrA4trlkXtDPpWXfGqX%2BBZ0W54ChBTDlxxjeDSuQoO0rS4DMHr90cprTebiSL5Bsu8E4dRNPJPktgULWItZR1cG22wcNrH5FSkODpxy4%2FD3OquLuwIEOvAM0FE0PqsZr2DDOBkQdCVOeYQ%2FwtO5oZABi8GUwTCD2mhNJOyOcElqG%2Fi0Jr%2F7J7bbTanscihsuyyLlVQOqaZDaFrJ0D3QTaVQ75wmTYxBQIRksffPC7OZM%2FBN0p7BPYCzUY%2FOFuAZONA4TJ9RHfeQs0ZBoj3iY2OZttbeiOj%2FOBoJTepYtPJR1mLqXRE4XhCqwCiH%2B89fmZ29iZj3vWRqVZ4Y%2F4nctgOOfjYsIVGqqR2w58dqF3qMNFJQnKovpTVffc3icX%2BxVMGZ8b0OFsD53snj3ciHeIAfF9q%2FXcka6mC5Oo00MC7TECDJNDaHAx6otOgEHd3fegoLUEDi6Hly7GB0M1xMGd7ixwI9glLvI931wNzXMwFRPwuUSbyH8%2BiCokRsfkqe%2FjVzBWMZghCxv9aX1crUbRct7fNqyWhOXaVBXkgDautBq6mEubO%2BPRu4DBFXesbT2Qb4y0qKtQRR9hvLIy0gddeYXXa80%2Fau4Nr3ydtS5%2BoLp94oY6v1dq34f5sxn%2F9zXef19CfgX79z3knyv%2FDw%3D%3D%22%7D";case"c2-monitoring-alarm-platform-containers":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dXnHruVIsNzXzHIEHnou6b333NF77%2Fn1IrvnCRAgARfn0pTJqsyMiCz%2BA9H%2FQNzVd%2F%2BAwJEvaz0O%2F0DMPyD4%2B1%2FA%2B%2Fs%2BzYd0zOqh%2FPvYdbh%2F8e8FxP0Dsf8A5D8Q3V9F3eVv02pct7%2FNlLrNafjvAP3bvajz7O8bEADRfwHoXxB3AOIfiESA9weE%2FhcMotHf9nGZD%2F%2BPYf4%2F1m3xf5b9vd%2FuKf97n%2BVHneZ%2FTP1jJwh8fxCd1XG5xP17M8T9f22Z%2FMi7cXptBAH7Xre8X%2F%2B0595fdRzqbVy%2BHfgeoXE%2F%2FQNR7zXZxcs3jNHFWzH%2Bufzbg%2F4Mocdhi%2BvhNfqvYfV%2F6%2B%2FeJaXwvyn4b%2F9%2FBv43%2Fob6d%2FpvoH%2FT%2F6svxGIeFKW7Cq8HEF%2FOPZXjOrohEef3tHtQpoGPSuBApXTqOdmZZWbasC8YTta0S0l8NeM%2FhUNJOKAiJVQhTo9KZa0kYwNugluXP0Zzbf3%2BOI5dnF37D0hlqTZK5dY89%2FuSinH%2BbBdxW307QOSdfddK3UdX5%2FJVgXckLKZwP0%2FRaV3u%2FJ52%2F4GorPjARDe39Q4LXl6CWTYBDChhyTvXtvxz%2FB7wiqBD8ylS995GRwr4xDuu0h7Q%2B29V5sdJHeagfeG9Be3IgOU21ZLLqn7oUuCFM464goDQ5RrJBPToGADb23LiA%2BAc%2Bgt7x1T6b2UE6DxndWhy90YuVUvwgodJpqKF9t5K1%2Fm2gfqsyxfN4A5nF68ObYeoSJoCJ%2BolSegEkb7dEbHf60lKfDtQGgP6VgHs2sVCoOJBn%2Bsnv2uwLLrdOZ62P7uZwANlehasAbiAT0AOMgGhvr3TIICk7NdHHNHtiv%2B2BcDMG9vLSrLD%2B7WIvQwGYSYASqMTgXt3Eik1oPsV2KM%2BZ0XGet9Qvj4Z7x7NmNbxcTkceu2oE4xNbcYRj%2FP7YszJsTLmOx%2BC4j2W%2FoR3YaFxW%2BgCsFb%2BRDxGQq13wwpqa8vnqGKT5hsa5c2lPRcxusbw93IEiGsimEQK%2BnjK3RmC2mx6rTtp6Q1oqom3Wmxy72lhJAsCwCUfN8jbmquGuV9rumn7JKiCSWvCNlzPU7e3pfefVtjLNiNyOLc1CxfNYGQRtlyaxx7bu2AUL5qUwx4LIxwnoQcxcx3W4ZAAUHltek0VRmHmzEM0PBorIj5MhW8bu2OY5YZtBecZwC%2BOW1%2BdTwITb4dJon6fRScZa89qnKnPWsBqLoSRh28V5HDHq%2Fa5sXMFDF21tLXXOIPoRbalZP0p%2Fr3%2BaGxaE2F9YYLDeHEj1vYAqh1UPRypYyec7QXV8zFsMdNq8ivl5wTtmrTOxXeGnkMtAi%2BjkAEyJZiXX3IzCSsDmxzcOZcvZQ2MGiEBmGw3E1DYKSjHhGcdoK7ciQW2w5xFu8yinsQcJRhl9xzUUTLR0EwGcXu%2FiYjBtb41KmWaRxA%2FSwdaIgwBnMdmEXgB6pnFMyd1V03Er%2F02DxwVL3kBmFDu2b2AxvkxXzyNYz1WvGYIw9va3sL5VkQmJuQUq1rzF7q8OqVmnCUhEYbX%2BiXuT4srV5vkhZ9G8%2Fb5FgH9nYFhhDRmNkg9sV8EfNA0WvzpzUi45tz0xmhbKyBn4pvShjsJ2TQemODxaowupTQd%2BJjKo38BGxYIbe82Y6djviWqyXYOtWLJNv3NfD1fRt8OZzdQV8c7Ow3%2BsUMRu%2F0%2BF2HiVnYRqbvYL5LPwJoRmQWK0vHLfJehg73ULfhdQjCFrZIsL89QY7V7l2xRc81lBCvfWEj2vCicY0qWtOK8g86AvdtdVvzySeTTpKo4DjaPY8%2BluCRF8mGJPduMbTh87lQcEo%2FakAIpu62gLs6vg43GOhV1ox0I13j6raA2n1FGJXm8ci6M9iXIMYGQ7V0X17zoJg8IQ0XmeYNeAOAeIbW2y0ofpmpx2guLsJYZNgubWvmK7NIHAQpv3ndJE6dq8vtwmkn8qkHBqT1KAvzhKJ4GA4VTZP8niJ%2FxvL8txLTDedGXe36miTuwMnxLFRb5%2FYdqp2RBGbK6t6K0fVMq8RcIaj2oMDzPPAii8BzPhNVlNTW3iYVsstKYZfzCK6dpWVQ5o3oAt9gyYJisTor6iWohdNsOkLuQH05%2FCc2M6eU%2FP0AuuT6YfxsQDAnCcfpUg%2FPcqqz4kQQ7t57e7R9uP5Frc6FEOPRJJ5rwyDjZNhO8oXNvaHxTDQ%2FVNp9LkXQpvsUu4hcyAIX0mrOf4OfMu0LeFl8oWXpOZ1xtkbpzAObzzlP2k5S%2FaUFdx8PJ8%2F57aTZCB1AdHeZnQ%2FdHHt%2FOsXZfkxdipB37QW6w0VNUmzmxDjoUR4JqZaCluO3nCj3W52tGxp5vE5yKmWj1TMoWD7SNmwgfYkcFDZfUFEyOVPt4O4Qr0erZG77J3aHNSgebHVUoZUzgm7EkLrKrZIaR967IkonQHGoQGbpdY1zy64yg%2By%2BI3nfxR%2BGMeXKbn9TLfs%2BDZlH8zvGjSwZGRkV%2BFCpvjrv8ayou%2Bk5iVjBUROhpTkqWTdxzJuik%2Bp6arS5FYEBdI%2FF2sp5w9zd8rCRRoXhVgBt%2FskshDiJze75e1%2BYkR3XlT8ys0z9e6M1l0Lp26zmKhIoW2oEVCt69l6iro8MCpEookqKzswO6Qu%2BHgkf4RVpqS%2Fa6MvJ7qTwsgp1T9%2FAyK0aWsfXPc0qhHk6zRJ9zVclWVkpdZ6oEH9kgRBFG7a6hHttQZK3TFeuquStFxzMz8RMOY6qXCM1DGY%2FE9gX4ydSaDPXOSKms9wZw4a2oZkbrKfidM%2FhjW2UKEcU%2BrhelNiAkpkW5%2FvQ2rkqGOUx5dRyV7hQDgdyHId5lL%2Fo1pvSdAAzr28gXcSbYpIiF2CFIh4FDorvUOnAkCdU26aHUD6Dik7OBMP65v9x56VqNVMK4W3Xwm5YRI4bFtzNfqvaD4enf2pD3cJL3VL07vSZSaqoGubeNA0VcT8YCBvEhFX10Rc1MCWIBt6U%2FDxW2YzWoh9dfHC4kMCGgo6KSLgAF%2BWjwm6galWRoNXOtZT133TEBY1hD%2FxQLMju4NNdG%2BQTNXMsUdv%2B19ZcJ68PuyJdgZiai1M8sqeWcSebLEEkpP%2F5zVvbhtZoL7ftIBo6olXPvBKb13N1sbNjKMuZqUcJwaqZNm%2F5pkU6SOTj1ZWuj6miNp2MaqSO3wS32Ww1bDQ74JqyowaaD8IZthTqPbrP0g1ATfoDR6Nrp0x%2B5JIyy%2FlHLho%2BpuSogz%2FcumrIqymkxEbDwbRRl6%2BGOdWIqn0Qeql%2FuqgKWV%2FBTeRPzYRbD8tCqnzqFP7HAN1H8HMILSBTR4Z96pi9uxqFTX5kTGXwCVRXy%2BCKSHQP0a%2FXRUWxbE6wIHjJnJFoYSCNG%2FPu4JMciidL2nJBPvrY952nzJicZHmFlJjeNyvd597nQGrs%2BmLKl6bkkvmXeONMvAViXJoWSCVih1U36D%2BZ3gJR0nEDjVfRj6%2BUNoVIvRa%2BFaYL6wYL9mcycj07WtWbZeU%2B18kMT86Bm5LPSZio9GsOoY0ftoKmn5CmMLNGXihgejkketiWwhhiCIasVnmB2Jo%2BUco71vbxlrGeELfuGXwGdhnbz29Jekc8IhmkiZBQB4%2FpTnRkfo0IhFshjOebOoFK%2BiK7dX3HNefhCqffoiEa2qax6P5LffRhQWK9G5gPbLyeOE6Exn8f5lMYZu9nSbuixrGE27WKX22PCDQH6E%2FXmFHliPQbjqDJ9GOumKI%2FVtar8%2BsNa560dpS7rX6oOHXKt1Syv4yXiLvyGuKfMkLagAo7kxYcRnZ%2B27MIM1aPueAOkPpCGr1JHPQ1DjwV1GEEj%2BBzL%2FK7Llokqt5AsrfV0suDzcsVx32OxdV1pd2noR1WRNrtNsPMaZIlXGx8mHDWEafkiZiW0GYO5dX3KddX4GwyhSzqcjcWqsVn8nOxL%2BBRh8VJSDDyu6dD19pRWjEd43CziFt4hXXlLFYqzPXtuoH4xN8ZiKlZuqam2YNzy9bmIQA%2Bpzue6mhFUg6SlB3rtuYzfumjT9oq%2BbguI1u6yhj9l3r3EJYRtmC%2F%2F7MTUoi5BVO3qot%2FPC%2FGPWCUCvLNO7zZn4HgcdxW%2FrW3M%2BjESkIW2bn0C41JZ%2FcCBY038euNi1RsXqz%2B4WAbC61deinoQVvoAaUxHaLBZBcsuhttS1TANK%2FvWg1z0W0mPQOZbSebiKLmWxQY4bWxuICvePCRa8Iko7hIXhWjOP%2BDgvQSdRNKmty6g9qK73R%2B0CicG%2FTKvyYe8QAj8NOy3qpnHxNxImA%2FWohSiIK53MG8%2FyFI4X32rtvjWAfuoggQC7bLvVwJ0KcZ0X%2By3umOhBgiDtXtGUTJ1Ch6aqvlOBlLiRyYSEPhGgeBSII5UjDTvv8TraTLhZPe%2B5nsLtJsrQlk6jMqqEwiW3D%2BEGO10mHNO1F3rCBVEafO8apqKD1H9LydbStXVX03TArP5VzV0CqajYf1tM3CbnmgNY%2F5eY5maZ3x1DUxNBt7M5CnVEKu1PO%2B7ZGgRCGa3miXQ1pC9B7pNgs6Ld%2FJaCZ5z7Y1X8QWVJEnizH6wJPoJ%2FYntqBrRSXcQJBMwWPZUHf8xJ6qx1jakamictS01kAKNvp0fAhE1lS587gs5nhfu442jUjCwMkJV3oCRDRMyxB1DyDExKIM6W9Fwpe5zgAol8Ti3U9zumx5%2FrVEwtMukGmHSr%2BtW8cjanjI8HGCEtzoxCJihhVR2koV5iNyno9110j3BKH52dWyrPsxO8ddBPw6CIwgB8shHz3z55MWhLC8Tn1xn7hfSksjV%2FjxFfT1XDm9FxDba02vrVOSYYO1oGKztapUGJjTMaIaXq91bKLcfs6dXhliTOD2IfhJNgd6WxsvbRc0wFqN%2BYB1e86RIoDA4gzmtAS5TDQmDsNqfq0gPR6MqZUCeK3PdT14yFqCBoaFKNcbA0D8M1CFcX7EiXpch%2FUCeJelm2WgNOdHdskvn%2FjRuj55NZ3HZ1X2UU7Xa5byaGh1CVc2%2BsoFzebUsiv9UL619UjrNBMQiPt8PHGYTnyA%2FuH2o7uW%2BirWTM00AluCow0AVsipOpMmzOW2DdE%2BTASE0izlj9JAiO8g%2Bvh19KPNnyIZGbBMDRY2cTGsBgmSam16z6%2B%2FoJ%2Buea2uC%2BHnUekQq%2FK0fvf5k4OC%2B3EgSbDjfM7hf3Ssp4p38BaExDDmiDrZYpmAY6jq1GHIN2gF2l%2B52hhRVuyf36SibLMwfgK%2F%2B3OrHt5DmTOdYQ9XBxSJ2RP1UukRdXww2TUjRivp4h%2FWls5yJ7geb7fkm29t%2BnN1xkL9zJwT5toV9iNUVw%2F7wLRk%2FndJp0Z%2BghS1PO1gW2ZIbkXKu4LFMomsSTUEPdg1LFRN2yItcudMThIcEI2EL6xmekle%2BhyFXj8dgwzvD4tZxxrpmq1MXex5F1LNmgRNlQnfZf0ygXZbvpE3u6FwUMu2mPRWtw2VTQnVkgjxcBOKJkR1zvW09Q66YboGs31dBHpVDqy3uQ5mSul0yuyjAx4DP4vFaH471bvTXSiSoJyA%2FLaIAMUw98HjlG%2FsTGV1YIiKG47KiX4FD%2FliN7oRBGiiTqUpR4DZPSNzKpX9VThq0KHn6pQX6R%2BOtxqivSG4zWkmhzVpqkTx98kOoI0Jcvgi2ck9wxr%2BJpmvixTNfwnFRIcblfF%2B57s0JjgAsLef1lQgSITxsDjy%2FavSVqYD5vh0LO6OC4U8Nxh0FFKupFWFkyp4bdteXAVdFvUo0vgB7x2GoUhiXUUD9KV1r2vBy%2BSMw6GT0OCxVMhK7tii%2Fc04YR6H%2BPlFKFSml00Zn%2FGrYgDl7jR816BZCtuBR8egC9BLE1mSpbSPFuigqjR7rG8sJhH%2BFpUT1pD6FrloKDOWbFvPSNfxcO6msTtFjNCwm5gMr54BE2aY%2FtSWkLNWk109OmqTRRxPgG2mJvgz2uY5vwrLWZnA0yS5b5ZFNP0EvTg6vS6ZuqAS%2F69HDKCoGmW6oCAEoiYm8BhXMKF3NA5e7iLhD0Ifry9yHxcHlMmqKQd79u2QZkU8LQehxFJB1BsV0GJQnMoF5wb5UDk%2B7b%2FPTIOJasTi%2Fs5s%2F2HO%2FwQ1H5EJszF3vGmJZzwLeMH%2BEq01jeMd9kOv5EoMMKCBqulg5T0EfBar3pIufq%2BqAyFktjbtCsPbyI0bPKEMkStl8gCSA8ep9tK19Kw1jeZZefHGFTtfr6NHF5bcZn8q5ivyo%2F5bhB3EPcwMbWiateF7qDA8UG%2FogGI29GiC8jE4iFvIpljIp72XVjqDCP9RG2iArH8Pp9sJO5Zi6fSg16nCBOUSvzrxXdvNy9%2BBMNaqG07eDXKH8p%2ByN7E2Fa5mZ86ZcV9gPkxulmOYFq%2FkSSf6BmU%2BwEENCma6qZrEFWxB2uHJpYWqQuaVVy5OpcB4tAmcmgcGsXzEjoeH8O9S05JPYOh1aKYn4Nn6VaBR1HqnWwIFs0y2Z5zD479msr%2FSatuDRPr17bMwec71KINnB6I0HG8OIhhXgLCSJknJ5AqHDYyfu1Y2on0Dc4cd5MoB1QVQIM%2BONNLuCVW8lQ536TwU4ck2%2BY%2ByJ568WDrEuD5H9OVqBwQwBHY0jqBlfCQL3aoYLxKc0apvfuImaCvEvgfF9umlS4AJDoivsCJS%2F77R4uJhL5EqheOkvivyBhZezQ3DPm6mC98NMlb%2BVDKZN89wc1mjcm6qXNKraaqKpY%2BTZvOMQpuYflCACGjblWu9E5w1%2FQIn6IyqVuE7t7f03LNbQvWV3tnb1mMTyuMpE1oCi940%2B6L4DluE3wc2fDyBU%2BR1%2FNesNwtWQjn8fcudX892%2FXi6el2flV1Zx%2BB1nYfgdjOlmQovjZpJuyJZZCJI8rnXh2XaWHuPzd%2BhCFvfs4WQRGHCBJcY3A%2FX6Hm6kmPAtyuYkHvxEVdfnWJni4%2B08S8vgPm3ggaRdA5%2Blc8FPpZ2cFTqZ3zEZinup1UfYrN6fNXvQ5e0bhz6%2BB4A1S3VJ4TcVzBnRivmrJSn7UIbvNKhlyCM78Kh2jSE%2BuoRY7q%2BohJfdfIVWpvY%2FXmD23H9hOE9VB%2BvNLDpwvJMR7EPjH235dix8urIl1N0a1PlLn8J%2F5Y4LrJZh%2FjpxnVNd2ihSRawI3x2NQoJSDbD0d6QCamgGezK%2BzmNUp9jCS9IKm5AP9OTi3ddItGfL7TPKHCjJdw6JL4p372QXMRSsXx3bzHvm9QXOM0mzV1p3itbH7x3o9bbXKYeBrKnw29ip3k5p2jCuGj1ILcqKqisWwTdEbyaq%2Bb0k%2FIWGLUevzVRcsaIIj3XBpVbliA%2FLVAUNoMWtI6EXTbsEpPa%2BLLXeR6%2FU8YDb4LK%2FyEOZCCzasmxawCyqSWtBkOrPQ%2BFovCIU%2BRuG3vKDtKIsr9OLnw3QuTIrXp3AB%2BVVjR%2FIjc8BZcQXSCvLom6DUuMrMoVe79pr76K2OF9iyMpah06sdgPweBzuI7xMiK9f9WRMdxewCJ5W%2BmmqutRO5bcxKXRpOdQntk28IgMvgcC6bSDr5tdwZvgjZlblz9HF6PEPfyjHFgTG%2Bt5XBffE4G91gs1O0K1vAAiAb0FjK8e6fLeR3tKOG3enyiIpT9cw0NS1Lu4tyVf7mmfECdKYsIt6VziE4Y4alOF8F8PJ%2FThHwgn3ncME8o1Ay%2F%2B%2BOdqIsGKf3GxvxOnxA%2F8%2BkUKfMP2fj7T%2F84n5K5v%2BfmX%2B8%2BR%2FAw%3D%3D%22%7D";case"local-mqtt-grafana-dev-harness":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dXjHDuy6ktjXnOUdKIelcs5ZO%2BWcY%2BvrR3rn2sbANtAimmSxWDnwD8z8gfl76P9AwFmsWzONf2D2DwSB%2FwW847tajNmUN2P1d9lz%2BX%2BIbwPm%2F8DcH4D6AzPDXTZ98YLW07b%2FBVObrmCQvwiG93jZFPnfHQiAsH8A%2BB%2BIcAHyD0yhwDtA8H8hEB7%2FhU%2BqYvx%2FoPn%2FULcn%2F1L2d77%2F5uLvPC%2FOJiv%2BQ%2Bp%2F6ISA7wczeZNUazK8kzEZ%2FoVli7Pop3n4Lv7g%2BHdUpyz5pKJZrvtRNebvKKxJmYzJ%2Fwb6nwf%2F%2Bb%2BP%2FYHo%2F3FMTNax2La%2FxDb%2FyqR%2F2cyQf%2Frv6D%2FDsu%2F%2FVH8P%2FPMy8U%2F9f47AHG4%2FcXZoEDHsXhErav2r7RZzDDeYx254tlg2RjVqOFmwJq%2FTHfNIV%2F6ib51jrf6A0AmdZmG4qNZLWsDOqTZTeaRES91dDxiMULVL6J58qTavw5sYQTUngBAKlaIOdO3ErA0r4fxR1lGlYtQYAabVA%2BjzDoAOG7Mp3ZHtVqSBoQ%2FGT5r6k4ditbhnFHmNidC8zPLA%2BcsPcuC865MhVWr5uKNZ%2B16Z67gvyvSmCqmD83wBW7x10DP6ixr%2FKV%2FgelqwJV%2FpRG%2FXTIVZumBgVNGimC7OkbxD9%2BRC3vHujNM%2FwTsc7oHJqGnBebaECqQdmZQiyAnJQU7AbkblCXlSu6jOoNi%2B7%2BkhcC6oBDnzAa07WjNgY%2BVPk743c%2BIFW%2BD8IvVqtZQOFRtbKnY3Reriy2ZKzhmI5Wh%2BBGlGL7j%2BFESlLdn7Fwt%2BO%2BD1W7tGixaziV61uCNiXO71ab2wv8Y%2FtnnKAlDxR%2Ba0u9E3qL5XJNBXAmn86dHM%2BvGyBt2Lizb6%2BSm1TU5hoUV32C8uPBPmZPGWW9GIbPJwIxfaXnvpFJp1FBDWX1uadvFqH%2FEqJTpD5cywDECjIUzCJnpZZIGGtrbXx%2Bg9ivoFTSE3HQ5JRJcqTwbLQN8dTRODpo28jQP6tZs5exuWx1vV7b5N7xBUbVwBY%2BIB7TJEzY1DppVUG0tHPXZ3lYkAODLWXcBjoRWOFx2AvcNWiCQE4E8vqMMxe6%2Fv843irKDFpPVBpFDPCtvAD6h%2BdwC9bnbzepqQjtMFHxhlzf4QWZ82MN9iOp9tDCQMfdGqw8QBAaFziPFgMZCAysdILXpQ9bWxigFMPPOe3QHR3%2BvcmCwhWdFJ0PsM3hBKhn11Yg0DthqZCw2akv6MUXJHlPO9jKF7QZdXJB1mtgsaDQEgO9EyZ8Q1ApVdb6yTxpSXQwYmyfP4wA7bpWtM19JcuVdiB321wj8IqOavKulW6fXkGdrc9t%2FgmmoHwE9g0%2FtH5dbFCv%2F4ikv7MCpSUqD5N3jRRDwtBp%2FrvYn5J5beL7I4sXi49RbMTZ932lGgZZ8Ko%2FsLz9xGrD8W1oq9RI7Ox19ST9EbJxDHzy1%2FVeBedJ7z7j9rRT71W9eMPXXf4jcKljSRY%2FLM67LH8HKeW%2FUMfJrDLDDSMOGqNMDuM4ODtY5XlROz2BKESkfH2FixzqRjJo%2F8%2FAD5LJHVEiACxf0G8XdWPw0RlIpkndYC7WxTRtdYUhEp1f3gIr5%2Fzlkjopoe9j%2BRDRn2ZUUb9rnIkxYU9aqvrTiW1pAPSchngiqFVGuxxnah64tap%2FU3QnJegYuHUBCigY710nAsbbxm7KQAg1nn9CNFI33SlnBI0XPJxvHkDz%2FbY9X1Mw2DFQ%2BEEtPwoxI%2FufhSPD3dtszJIVUqwGa8cw3ySKl1YHH1ELGQU%2F1wxd8ZZHMqvgU4iFEtEugVVYrNy%2FhVnbhXjC3d08b7isTNmF7ZmkowzKK%2BkYVeImwSmE%2B4v8AbYoXpDQIjCFqTdBg2mUsCd4tk6yQnn9KoWrGcstkXHGNo1yawF5fLc7PuGhREVEW7Dkjgd%2Fcs8pk5fy9OvxwyaOAZU7o5n0bVcVWFpdDMDcJI30Lsdqknz5985hc7WaMmUTtrlhW55ZJBWrAJabOu0A%2FphFPjU3scKikl5O4CqSQPINATKaVbh%2F1gbhbZ1Geqipf%2BNUqXwIQZlfeG9P1WPhhw0tJhkPmxvN0NCq5o%2FPSGsOG%2B4tm3j8LUtEbLfKFwrIjzAZ%2FCB8T1hPiEr3pONHDXpZGY40qsfm9oiQrDuevncvekcfelQYkmbblLmGp1T5styrSDld7kS9s9bqslEp14dE%2FGaAb3XaSaduxgic%2FXRn0eKbLqRHo9XvZJuiprTez2m8r5BTuNhKeIM2FpXusnSsFTdR2cwtBCl4pNlR9XJDmF7ZdZd5dlQEkGGroA5SIxtcXosj3ewk1hI08kGTsI3O9UCnHn0XzChw62vRHDcXZLZxYxbSUg1cPAmt8tSD%2BsI8EkjgAcHmQG0fyBQUR6VJQ1CxsUywx%2FMV%2FW%2BvlCCL5brFfLvILIERE99sognsH0vxq%2F9tFw3sw8IqkvDFiNJLFhCyOqNoBdzNSKZeAJSgFixeOLDFWTsYaeiVnQL6iaXLUv%2BDLHbdPZMf9Jw2KROuVU%2FcjI%2BXhto0NSSn4eUX0N%2F3IpHNXwqTdItxmQFRWKLFUhpCmBSIyH0Y4yg%2BwwVBh0kl0bIdgiiDps3%2FMZ6IcXzJpGHw3Vboc%2FbGrF0%2FO3KexBf9d73lroIR5VcNCcO227LUBiljuC6Fb5QZv8j9yHBTS5mOuLJEfsLYNQjY7FypJvnTq00MS5Ah6MsZOpoUeZAilcxP2C3vsJcKvm8wAjJvpFwJT%2FAhT0o4xrhkmrcM0WVHdNianVw3L5i8K0HwPtANQrqmoWHKs56rjk6cjNUd2KELv9o2Dc0K8yLc57uClYf%2FBGVVgKRHK1aR9jmA%2B%2F20t2hTI9EiQPIEvTjmt2T5zbwv%2F10G5VrOIBrPbbvD4uPf9a0XVrmcA1N3EJ48%2Bp9dPi%2BZlqW6hekqPXQ7XE%2FeXbAsKb0tBicEeVZg0nhORencZFRZXJbu%2Fj4y%2BoZUDQ5H4PxXaVpueXvdmBN63fWhF9exTHZ1CYv13EIGWkhGaK2kKZED%2BrKG3GyIMznjlUmV3AAARJexr7qYltYoP64mwkDkwxxtmWZqzj5T%2Bz35eCEsbVPkvpCqDTkTdH%2BAzBnI9sNKGGY%2Bw%2Bo4F3mFoa2iEAdsVhsECV9tn14ZzsBGwyhehXkjT0JQlyvQUoH3hO4t3ggJv2rErmU5h3ZT%2F6bW7WoID7yRaDoyCHLMb7V2TW0kCHGXi%2FN3eTrJAXMNJhGEByIGXIQAbkkRXeZ%2BYI4bcE2Ug38QlTN8GJ8ruTlFcCAaQzfc4yXd8NEeDOzMstmFffWaNRI7bP4uy7R54daU3Uxw8Zse2T627G04VEj5ymw4Y9YWi74S%2F3rQITzHahbEhRSJ4Qz5yp%2B9DcUYyWOEWMKw2WM3CS%2BxDVRSwk0LQ6UIHwuxW8PN2e0l9ooWq90kK62L%2BRt0v6eqs0yN3Wn1WwDxIqYRpM8CAKJ6TnaJIfJs7jRN0%2FGW5CvqGrtsnqNmWdZ7o2dMl1A94zdPPykz2zkL3lQDzzMqEL9vVF0uaQ8FCKfEFcIRdWt%2BRZc0IV4GY%2BSG4DOaZ7a2TPu4LqhSZ%2FitE84r0uVmT2knZ56bl%2FVc%2FCptm4ZsXc7gMdTBzckeFyOPbbUdJDb8XaU49jbIde%2BiNn7o3cX5WTAxKm4fEcKopreh5krUqRRfpny2965rMR2BVbEUGP2Kqh5dHALzO3UzuSfUzlpLdt5fxLLKZZm2bCTCJjRlGqydqv5Ox3Zc31T4nA08PGwmMppDw%2BiOjZ8m47mPWlCBM%2FfaPUzpUNVBa7wH5GvnKV7KLwyxV5msMH%2F6CBwsJvX0nLXy8Tuhz4FQ%2Fvvv3dFDAidPUmWfg2Ciq5xmWVHYDf1cTlRpQmO5hKsLAHK%2Bz9dhSsar0dD01JLfcmvR6oiFIEsKh6fAz92Xn4FaySUpLQsRn6cwdfj6LCOFOHz6cA3MHg%2FOZQ%2F01cn3fPkVzuJ744n1sllseGdB3SZD8vkeviOojdylsHJHPanY0Q8Yab5MYL%2BYOSHSuZtxKZiFfmX5UZyPcVop9TqQZR3qC6NMib2WG4TUgEii2cE55JLb%2FC7ydrmCec5xzA8LPCdO0Ta9E5OI06%2FpY7SbJUZBkV2U5u2wWpp8F9%2BBGuzHdrCD%2FBt5axBFfnmeBF4fIFGcIzE%2B7Xh%2FGQ2y9AQ3xKChOgHH0WY5SzRPriDDcXv79%2BCXS%2BKG8AcrzpP9D4%2BWVqagCkfqz1Q2E5dFuvBsEV6DYzNb5%2FrY67wdiFuFpEBqg8sG%2BPYJxWXBxNYULo6E0NxrRH98nbTcDbkkN5ZU%2FdJrd221yASTEWwsnhWF2Y4To6ST4r4M8wj%2FuPFg7xjy%2BhJsBdn2%2BrsM1cDBq1cZLJnWMj3Z7aGMinE05WzAvcCYEyDj1xCl7agqvx50Mf8U7WIU7dzopi2PIgfs0xLQSMuafRqfJ7ZxEHE3wRjcOoXNPwjBkjZciKqnPISDQDPKJGdxQBPeRXGOpUUuqg9vNciM2ruSTmIdnP65gOsngz1yBed0GKdX2S6PCqp7RV8krItU7Or4O%2FvkeM78d8vvDv68r%2Feht6l%2F59HvrPyn8D%22%7D";case"c2-field-devices":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dVfHsuS6Df2auxyXclgq59BKLWmnVs45fr3ZM%2BN6XthVKooAQfAQAAHyB%2BV%2BUPHqux8EOvJlrcfhB%2BV%2FEAT%2BFwRawM2HdMzqofzD9j3xF%2FUdQMUfVPiBmB%2BU66%2Bi7nIgWo3r9kdMr9ucw%2F4o6MH0os6zPyMIhBC%2FIPQXQnkQ%2FYMyOAQaBP0XhlDxH%2FmkzIf%2Foeb%2FoNuSv8j%2B0Ns95X%2FoLD%2FqNP8N9TdOBPp%2BKJfVSbkkPSCGpP8rK9Z5lwGOe69b3q%2B%2FZUXQ8r91%2FENzyH8zv0T9d1sdQJpiv1LkV%2FHV9Sv7RwgVyGBZUnzFBJteehmrT8qOfhCWsyMqQAfQm8ae%2FPiFkVYR7zIFZjZ7iAK%2B25oMj3l1psp5dn8cfjKDJiCOgGyp5Q0wEbVt445KHluOu%2Bx5aCkpNbhLHc9rLdgQUrAkcqmq6%2BS0DCv2wITGqEnyLUjSHDQ1zDvnBGueKAblxwkSoctGzE4%2BkaF1%2BbrfqcSkqtFfMU%2BY1JPowS6alw3Zp2xs%2BP1YOIzq75CzSCswzbV9nbmKi%2FTH611nPZYipF%2FKltjmIZp4qHAcoS5LW0jXYYbNRaodWhfiUCMplyH5zsXzplH3y57JrqKKbWFEk1xbNYHkw35HW4%2FqZRMckSisviLOoUa%2FKu8QvWBvLIJxOLSUobULOYZAV%2B2dBhVf6oXCPWSLmy40SvDYD5e%2F6alAe4pohWGljc9zCY0z8WG6OWyQuTrTgmhjo1yn3n5V%2Ba9KxgvqmN2v%2F1MdZuUEUQN3XFQ4CLPVXyXXq3wQt%2BzRSkZ8gU7eTRmdhMtRvT4xm3jXAE0%2B5weoEHdw1ZgX9IF0LlBfpJ9IefwJ1xI1J5dbb4vSsJAsNE1RPe%2FTpR8Infx3tSnifinxNM3TfquIu6%2BDOKdTFrh63yKmB9YKs3Awrl32waZWbfoQRK1dCaYdr%2Bo5ACZcN2D%2F028xlxA1X3TaRMwjtemidz6R1kUviXMSbT3eXX%2B4K5E5bULP1ehaAuJiJti6f9UJry7WFhjIB9AcP5WiKHIoptUiVE0%2B6ZfpJDDcyGoQ%2FRrCBppa6%2B7h8nItK2kidxaxe2zV8mRxm6ASdUAojH3rtXrenMrn5ync2pu1Xu3Jml0t9NyZRTXjGKGmu8ol9Po5aQxWGoVeucpUnRgBwWyTqWJg9YZfi5JlXk5DbEy%2FvgxYmrRybDuIh%2BHXWWGffJKweBs0iJAu%2FNgtsUVfCGdK7QV8J1rCtdjGCxhKPQYBoSiklynJEfI%2BVlMEcc5egPycMs3aPUKLtxvOZqXgKsYw4Ny08WbkvIS6yl8HjEkVUANVTuZlN8TccRJRcgORuzjLNxgBq3k69O4UeFuxzE%2BQgojqnKaQ%2FRyKFMen1PPu3kips8yj1hn8ge6znuBTmDYNf%2BtcyX3BHLOIzOj312mUZRDyAUJTm6unwbYX1CTw1sOUOxLEuqjrRcHNTZFRxtMG8oQU4wvW3JYumULWHpbf26JzUMfYjB7K00NgiBZGbJ6oTHnlkPdW2nAW6ZB1NF60bWgUVKcZ8qdYUq2NkOYJSWXK2OqFmFShpT7TZts34AQlFWGZxWtc5xj4wYvWBVwkKDST8PIypJ%2F5XUtDpBAtsVmHS9IZC6WJ3WWfHRrOjphlUVDzWnOcG5fjqHu3y%2FTWJiF95KE4j9%2B5L1tyUmMJ9zR0Az0CfPC7iuPvx82n1W%2FjQnX99TaI75l0diBPQvhcJoiBVog3N4cY4kaiNqV7zLKVl0BgY5ci4pOmqjolydceokluqdNI97Kc5A1pjKvS4s1Un1pDwLDYTrRvktYwFi9KxutzjucUIXnL%2FbVjT4%2Fob7Ixeo%2B%2B8p167xyX2Ri7YM9J3XscJGrNce7EjiPMvO7TNa4zKYWmCX1kPK3focIevEmscrbTzrZh6HiQlw9gFmgNHAHb8TMeugNpSa%2B%2BBsd8N8VnK9rUrOeP91SgCOQvX1xRR9eEaA9rwTBXJfk4H9cIO9n5YLVW2NTEnAjrRDFkjKZoVCQwMQozOlhG2GS%2FipzWNJXA3RBSaRgjZqJ9dLP5wKwaiDBt8XU2JjVzYRsg9mtGKLyyvwwWGJwNlvh32WTXOzuMr8pEziEJdEYn%2BByDI21%2BPEuwoaDcKDzXfedvUKdZHXODJglDkXkQ69ZYjcKRiaXPeP%2FOpctY5TnVmjHlJFj6HYqf1RVp3hDbRcS4Lle%2BoIhE7HHTxFgz2N9lnfXtI1y2v%2FFW4Bqg%2BIqX6K38xwhQXjWzsaYGmANp6sPzWoSKtKxLXW1%2BeIu4Qj7DAh14ROyUbMGgZJoUGLbHJkPJjoxIyc1BNsWgmGy5bLPXJJLjoIQLdVpj8riIc8Y6ODGcvoO9JqoejO7eoz7Zdbr3I4LvJ4cfp9XY%2FdgsNs73LjA%2Be%2B71hA5vot9d9RACGPa%2Fx4rdtXy5DbVLjDm3FBtgygPZAb%2FAUNaRqjOTvHR45rGKXZSxf4oxYxIwse66GIuCeGAHPhWMIMT1wqRvpWyOWaHTfNTvvmjZ2nGbrfW78UGJ9lA4UHjBTaVU2uw1BTiPTmqexlSNNx2VmXr9rGMc3c%2Bg%2B8NGRfQ384lfQ7G6UlGwbC3w99iJ4ebuxdOR6WsQMsEcOF7GZ%2Bp2YPwdyc0FbgEoJp%2FeAuMspe6N0xPOA8JA1FzCYg1VJkx3ph0iElJWi%2F1RD4tiH%2BVDQCe%2BV%2FDV9OVi81DSA5XamMegi80hNfepQ8xi5%2BEsf%2FFvc%2B3mntOTXXlxTHuk%2FqqvwnOTRzdUodwFoQViRoQ%2BVZwQUodlOQEOtgjzR0pWSjPt7zSWfBpNxFUi%2BPOIXnxHtbu1YPotL8phsVdBsV2qZWg1t60diuTVCA4qE5yfnhTJYUPTlsCYF25dLKEQen%2BpRUJDNuSX8agRobL0pSEFTuKgMF8jy8QQMSoah5TeshK3a%2BYKANBRcuZ2TPIZrOaEwiBnsZ8ARdy%2BbWCQYjwgEo8DFxftQPgDgbWoP9nwPJvxY7Rg8Ekzsltr2mavMDFr5ct77dN5eGlTHl0fsUjOynM3J62WgNB%2FjcTrpgKvG1WQn9Uq8MpTIUd0D57ctsd9kKelsW%2BGTpCwmToKBCRLf6jvjRg8K0CG%2FnvV%2Fs9DAbD%2BvhV%2Bc%2F4N%22%7D";case"c2-field-protocol-gateways":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dVjHDvRIbn6a%2FzgL5XBUzjnrppxDK0tPb2lmF7YBG2hUt1gsNuNHlv7AzB%2BYv4b%2BDwQcxbI20%2FgHZv9AEPgv4F1fajFmU96M1T9kz%2BX%2FIr4NmP8Dc38A6g%2FMDFfZ9MXLWk%2Fr9g%2Bb2nQFg%2FwjYHiPl02R%2F7MDARD2FwD%2FBREuQP6BKRR4Fwj%2BFwKR8T%2F8SVWM%2F4eY%2F0e7Lfm3Zv88b%2Fdc%2FPOcF0eTFX%2Br%2BreeEPB9YCZvkmpJhvdhTIZ%2F8%2FJN0ecvxbnXrRjWv3n5dxWSrTiT%2B78JDPS%2FqN9T82%2FD%2BlfXDPkrg%2F4qP2l%2Fzcu0TdnU%2F1X9D3aYw%2F0rzv5AtILwBwIuY3%2Ff1TYUrmXFy2%2FoQWs003IE8orRWQ6K0PU9xxf7Qa7AzVHq7NKlH2bWK6Gb3gV6ZfE22U34Vssm%2BKpJk%2F7a96TSGpaBCKHpjjVIDcxUFHV4X4heuSozxB7KHbRanvQg0yNESBrIL8LcPA89oEDkTwHtVakbx55fDlMM7t7u4z%2B5H5h%2BpyC3VCBSJM4ETFY%2B46n7IKhMHRu5PEjOA2P5OZ8EGEhnUW%2FPFngQQULj1bNO3uUijd8ir8aso%2FMRurThIAvcvRvrqGSRmd4x2D0iKhP3tRjKBhAEik33ANlU%2FJQ5oV7IOUGImLgz24KcBZDdD0ryDHP4hzVlyC%2F8vfn8S%2B1e4p%2BwH3YmK3AGDojvv9PnzlzPEXWyPHAKVTM%2FldphaBdwZr%2Fd8GUYYmGBUU0wmdScx8rBlOGHNcMEnPMu9FUwM6PNswTCHK0%2FaLXFAy7r8SePrJP7HndUkinMeAhjXuny4zXLwfq1axplSTvmhn1CsrGs3Z9YHQPfG2JVa6w281wOONJY%2BHUbBE6ew%2Fhsc%2FJ0uGw17KzyK4YD8jEPPD4V9NYWLOReEiNzz9gPZp83f%2BizZvDi644KJIOCrhMYokgrlZRBkkA4DmXfIci948XFn%2BQP8%2FlBtwyb7QADTf34MRkIkb58OjBUIuPDlmOdKxMmAFPOKvlMi9oYA9m0Wr0KO3XBjSFM2EGtzbASgXiQ014V25m1JO3AO8oAf8w8rn1%2BUDafIcGgPBFdYRPtningM7VKQ4iFUF7%2F5WtGJl57LjpAKgfLW2HTW3xRMpcmDN5e%2B0jhcxLctAwn9bhFyXllKlxn9HDNPCvH%2BIGgDSdiE1qswbIVecDUhbvF6Y8w4FxW0KqWjrxU6zPlOeATBZwUYgt3TdWsU9VmrU7paG%2BN0a5rweMsSEWV%2FLqkrkLCOoEMUS0GSchcZxhdPh2yy%2BTTJb36zfVCOuyoEQqEOxmUuJ2i8S3eLgHa9XR9bL%2B65VoqoAoOsk4U4OBk0PLGtWMt5zUQrZCU33pFu2lxntBecLPyi7M6YCQEj%2FaLejS4%2BJA7c2IlR3cIdsMv4XYNnboYuWSQdLod7mDUmKfISFzkMU7U2FKi7nJ98wrvkjs2sNjYe4Uq9JoEQeeH54Hvljr9OhY4xidQ%2BokTB0pxG1yo%2FcZGDrX7%2FWC43I6buafOLD08gGh9qdgTdkiGk2WsUZfFYFnYIW6Vl6HBeKDAxQWBoSdJI3OL3XVcdaNVhyPuROT1BCRPxI6zIBXtdb7LinNwrf15Za65ZiZMI5IzIeJa2FfnCz772I9JNMTpv3ojuJwC9usJL1kOVu24PqoP6%2FPS0oEvOTl9rRC%2Fqp19asRkF%2BJUJCWkPimGMZ6Ed2fzp9%2FQOS%2FoZ0VNW2SWbdeJMbR0bS2rkoD%2B8jzQXJ8xSquvZC9QYtPs2lAj8vZD00EkGnde2urWPZPpJgknfFClaUmsU8h5OeBOge2m31nnh0iykizakamJDWsHT2EnYEgP%2FxrFiGq%2B6tOIpZfZshw4L4XBneiX%2F%2BcagbRDW18xaMvu%2B65JzM2lsqEHgSmQ7UqBeeFnTG8frpEw76%2F5wFJucxVr3VALWYcRFuHGc2wJzderUoxhqwKg02%2FhtY8v36gzAg7%2FsmeAwKUo8aEu8XeDfxpcAUlT1axmBLxV%2BblaMOUS5C5Vq%2B1IZf2enNkEu%2FULDrfRigncEAEUrWyjSzimLTNFO9vqyv4JIxWrJY5CkcCPUER3l1cPMsK6oWpFj%2Fzr3DoDok14u4limCzb%2BF3mSGnm55gsPl9HrO2CkbGLghHfdCcBWvh3KOG7vxsvLVM9Yb4ZPSq%2FCkLXX74lOW%2Bo2HrV2ZfhT%2BwNriHwGtvfjOCqRMRJo9hmeigx3k6BIeLEUeVsktuBYBaUMxT%2BJMO3F%2F2oQIx%2FG3Xb37HyZvqXMwXKvTLTvIXSsNDZrjAnoe4ebaDpS8rWadKCI3Ajsn9DwQPC%2BIK15QuvR%2BkbiUbuiyO%2BSYLO1p7k%2FspbJrgxdfaVEGVm%2Fb0d%2FlGaObX2gzgfymvWpX1gM56F12A6lmxBuTz4yp5Ak4ruS0LI5169eMOl8HOJb4MCcJ1L6hVoW7BPkieftwERbyj%2FaqHLIz%2FQhyjFBj%2ByY3GcqChB5dkG%2BGB9Auxl4UJ8wpTUlQtgLNbYA9LxpRaK6rR6pqiud6rJaiyKPwbxOynR%2FDH2TFJ2rDojh4Q8KpVB0HltvyZ87BlcFJOD7FawLadhNBOofdn2h52D347IT1TnmwNEhAzhHM3Pqx%2BAMrhYVe1cHFGK27szzfqklXiEDYFiv2MWFhvz66V63FMEgYBBef0mXRHfEuCFdtNPan5AXADnAo%2FL1dnoKgP37Yo2cyU0EtTjq8rLsBHNriZyN2psOzBFXCJmxA%2FGPE0DC83R%2FsjjZEEhh1ELrVwyFBcdAQGTL%2FK%2FPqzF9Ek%2FDN5s%2Bh1M%2BS%2B4ZSSxKjLJ%2FTd0kcTGjmf6EOu4IdFLIOSzuA7jvju2l%2Bq%2BaHJxuNgPx%2B1VeQh7CtTPl2YvJCe8WzI29UhVALRgHRgCRdZCslJOT%2B2sDzsDYa3aOHbcNRo9sRpUkit2Rvu4dhFXfyKdvCpDIU28eXY4BPbHUF6nHWMgp1Ywp3jBYWU0Px5%2B62XV8aiEHK4GvZ%2FqYRYUH%2BjVvzvEX%2FziZyTdwdpbjKTg4bXFMOaJdf8O4atWLuyweB8YzqWSpiWpHsNnvW%2BKg4dlp5a0ZYRVB0Y7jEDRHE8P%2FQbTQ8y7AsOF1kw7XA%2FoNAgtUXkPMZ7p6tjM1fAtpFg%2FB7WsO%2FDaOWzimwDacNcaWDue1wCnxM0z6csg%2BB2AUGOpOVXmm0EnfDlwy1TKeEpvTEPDLro2Pe8oloU3%2B%2FVxFEARr2Tsh3gcq%2FuRa97T3NtI5rsN3CN8ncejFDhgG5hqauU48Xuumo2ivqC6YnK804bqveHwb3Sbhw96Tn1UBx4HjEhTkXXIBK8PtDUBEfLwEqj2ws74SUa34B2eodFc3wa4moebiKjDE18BXMWMM0ekUttqvMXHU%2FgH4JYpGQDzzgkbsgUKIr%2Ftjr4EpFp%2FoU%2FPD9SBXf3a%2FAnIGurDx1mwOM8FqKAUpMO0RACGHQU3sKBTfolv%2BINJuoRjRPvLu98VB8s5ZA8%2FqVv2oU4myLOfKEZQPyRX8zTPbJNqNCeXB8gKMoaVqZ0Ke%2BZIE3Ct1a2oWjyEW0Y4av6q7pX5Y7i68Ay66nuqGXZi0Cm7VqZ6%2BZLIS6bVSfoQYdtFoy6D0W%2F2A0eJSDG7Aqxf19b8pilTR4HFZGiMaOVsfakf7qyp5Amok6Nb1hlCdrPs%2FUyVNsEFxQokZjcu8wUEfwZWsDX7KEAItk%2FWR%2Fwz58DPw5tGL5xKKWGFRpyQ8CFhJyfB0ZA6fdPDl5QelyS%2FTAn7DlJdmHtnX7PwsbkmuV%2BWq9w78tvJMSuEWFyir%2Fu%2BRl71Qdr9LUNNfK2tb481sFyQxqL5vTyvxHAqfrH3e2GRv8TBbhrEj8xQGZomx%2FjLtB12Uj841kEjQaA1T6%2FvNhCIY%2BzC7qwXZAQEBr34FMEkAm3TpgwWoYWD%2BWhihPTbUBQTcg66RGLsJ6ky4E2YtaIxe4n1KwhZ%2BE4Qw9F%2FQo5DHSbIv3moq%2BaNiomnAeQ0VNP7Xr6pQYBxO9GNeH4Rt3kisBqvDSxgAuB%2BoyuNTqocB7u%2BnZaWlBrY3u9xGWEP8RNmDocsQYl2fK%2FTCVokaJCKltc6JKIQScBnTnyOs0jD5%2B7oLczFxoVVt%2FXM55rT2CcxRS5PReKu%2FLq0rp9k89pGcWTnYRnGbwdtTpvniT%2F7zJkxX6UX92ZJuLZsVPVApoUUtovY7IQzsflUXG7aBQ6%2BdvvnS4kyTHzEKzroAqUk8SXPE6zPy51U7PMxxuFyrGph7TL1avqLluXLVFpGK%2BICyxAIV%2FxD5IAl%2B5BMzg7J39rhxRJrOkQAz%2FtLThmUEYf1haAEedmGFPk2iQei6coxWPfIHhVQ1qvrseO2dA2RQ%2FirY9KinmW0ccWmmuOHun3UGHI9THKgfH1krFqb2e0JGEereQb9uzzNQYzcI6wmfJdM5ddzKdIaH9t6qgOcCjGWtGUIPP8nHHkC4u2eO6Yt11WBv%2BO%2FcfPkNogDbqKtQiKtIXUw3EGIy3V4IT2f2UFcbttov9MEb8aI%2BiUwd%2FJ9zYICidpX2Xh9y4ZilNXO1wFtlNn6Yv6uhIzD%2FoKv5TSqS%2FqeGFQ7R6S4mSJCS7qHwrpfmvNzBZd9Esdf55YfBkAmp0SdqOAHcow2nVJ2eMzrHKXFfLfvQUBnAj1lXYaLCPHIR1Dm9IvOB%2B%2B5eJFDCx2lEeGHiXwTIPyByX9e3fznxdNL%2Bve7p78p%2FwU%3D%22%7D";default:throw new Error("Unknown viewId: "+e)}}const t5=Object.freeze(Object.defineProperty({__proto__:null,drawioEditUrl:e5},Symbol.toStringTag,{value:"Module"}));function n5(e){switch(e){case"index":return`@startuml
title "Landscape view"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<DemoStandCurrentMonitoredScope>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<FieldDevices>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam person<<ServiceEngineer>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<FieldProtocolGateways>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<LocalGrafana>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<EdgeTelemetryAgent>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<LocalMqttBroker>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<MonitoringAlarmPlatform>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<NotificationChannels>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam person<<OperatorDispatcher>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
rectangle "==Demo Stand Current Monitored Scope\\n<size:10>[KNX monitored signals / current read scope]</size>\\n\\nТекущий набор сигналов demo-стенда, которые читает Edge Telemetry Agent." <<DemoStandCurrentMonitoredScope>> as DemoStandCurrentMonitoredScope
rectangle "==Полевые устройства и контроллеры\\n<size:10>[Field devices / PLC / RTU]</size>\\n\\nДатчики, актуаторы, PLC, RTU и локальные системы автоматизации на объекте." <<FieldDevices>> as FieldDevices
person "==Сервисный инженер\\n\\nНастраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы." <<ServiceEngineer>> as ServiceEngineer
rectangle "==Протокольные шлюзы и SCADA-контроллеры\\n<size:10>[KNX / Modbus / OPC UA / SCADA]</size>\\n\\nТочки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы." <<FieldProtocolGateways>> as FieldProtocolGateways
rectangle "==Local Grafana\\n<size:10>[Grafana OSS / grafana-mqtt-datasource / localhost:3000 / Docker Compose]</size>\\n\\nВременный dev/test UI из infra/local/compose.yaml. Использует grafana-mqtt-datasource для live-view MQTT payload и не считается частью target production architecture." <<LocalGrafana>> as LocalGrafana
rectangle "==Edge Telemetry Agent\\n<size:10>[Edge collector / normalization / buffering / delivery]</size>\\n\\nУниверсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий." <<EdgeTelemetryAgent>> as EdgeTelemetryAgent
rectangle "==Local MQTT Broker\\n<size:10>[Eclipse Mosquitto / localhost:1883 / Docker Compose]</size>\\n\\nВременный dev/test MQTT broker из infra/local/compose.yaml. Используется текущей реализацией edge_agent как локальный publish target." <<LocalMqttBroker>> as LocalMqttBroker
rectangle "==Monitoring & Alarm Platform\\n<size:10>[Cloud monitoring platform / alarm engine / operator UI]</size>\\n\\nЦентральная система в облаке/интернете для приема событий, хранения телеметрии, визуализации, alarm-логики и маршрутизации уведомлений." <<MonitoringAlarmPlatform>> as MonitoringAlarmPlatform
rectangle "==Каналы уведомлений\\n<size:10>[Email / SMS / Push / Webhook]</size>\\n\\nEmail, SMS, push, webhook и другие внешние облачные каналы доставки тревог и служебных уведомлений." <<NotificationChannels>> as NotificationChannels
person "==Оператор / диспетчер\\n\\nРаботает с событиями, текущим состоянием объекта и alarm через центральную платформу мониторинга." <<OperatorDispatcher>> as OperatorDispatcher

DemoStandCurrentMonitoredScope .[#8D8D8D,thickness=2].> EdgeTelemetryAgent : <color:#8D8D8D>[...]
FieldDevices .[#8D8D8D,thickness=2].> FieldProtocolGateways : <color:#8D8D8D>Передают телеграммы, состояния и команды в KNX-сегменте
NotificationChannels .[#8D8D8D,thickness=2].> OperatorDispatcher : <color:#8D8D8D>Доставляют уведомления по alarm и служебные уведомления
MonitoringAlarmPlatform .[#8D8D8D,thickness=2].> NotificationChannels : <color:#8D8D8D>Маршрутизирует уведомления и эскалации
FieldProtocolGateways .[#8D8D8D,thickness=2].> EdgeTelemetryAgent : <color:#8D8D8D>[...]
LocalGrafana .[#8D8D8D,thickness=2].> LocalMqttBroker : <color:#8D8D8D>Подписывается через grafana-mqtt-datasource на live MQTT topics
EdgeTelemetryAgent .[#8D8D8D,thickness=2].> LocalMqttBroker : <color:#8D8D8D>Публикует telemetry events и service topics в локальный MQTT broker
ServiceEngineer .[#15803d,thickness=2].> LocalGrafana : <color:#15803d>Проверяет live MQTT поток, topic tree и dashboard
ServiceEngineer .[#15803d,thickness=2].> EdgeTelemetryAgent : <color:#15803d>Настраивает адаптеры, модель сигналов, polling и доставку
ServiceEngineer .[#15803d,thickness=2].> MonitoringAlarmPlatform : <color:#15803d>Настраивает правила alarm, получателей и панели мониторинга
OperatorDispatcher .[#15803d,thickness=2].> MonitoringAlarmPlatform : <color:#15803d>Работает с панелями мониторинга, событиями и alarm
EdgeTelemetryAgent .[#8D8D8D,thickness=2].> MonitoringAlarmPlatform : <color:#8D8D8D>Публикует telemetry events и service topics через MQTT
@enduml
`;case"c1-system-context":return`@startuml
title "Edge Telemetry Agent + Monitoring & Alarm Platform - C1 System Context"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<FieldDevices>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam person<<ServiceEngineer>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<FieldProtocolGateways>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<EdgeTelemetryAgent>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<MonitoringAlarmPlatform>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<NotificationChannels>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam person<<OperatorDispatcher>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
rectangle "==Полевые устройства и контроллеры\\n<size:10>[Field devices / PLC / RTU]</size>\\n\\nДатчики, актуаторы, PLC, RTU и локальные системы автоматизации на объекте." <<FieldDevices>> as FieldDevices
person "==Сервисный инженер\\n\\nНастраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы." <<ServiceEngineer>> as ServiceEngineer
rectangle "==Протокольные шлюзы и SCADA-контроллеры\\n<size:10>[KNX / Modbus / OPC UA / SCADA]</size>\\n\\nТочки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы." <<FieldProtocolGateways>> as FieldProtocolGateways
rectangle "==Edge Telemetry Agent\\n<size:10>[Edge collector / normalization / buffering / delivery]</size>\\n\\nУниверсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий." <<EdgeTelemetryAgent>> as EdgeTelemetryAgent
rectangle "==Monitoring & Alarm Platform\\n<size:10>[Cloud monitoring platform / alarm engine / operator UI]</size>\\n\\nЦентральная система в облаке/интернете для приема событий, хранения телеметрии, визуализации, alarm-логики и маршрутизации уведомлений." <<MonitoringAlarmPlatform>> as MonitoringAlarmPlatform
rectangle "==Каналы уведомлений\\n<size:10>[Email / SMS / Push / Webhook]</size>\\n\\nEmail, SMS, push, webhook и другие внешние облачные каналы доставки тревог и служебных уведомлений." <<NotificationChannels>> as NotificationChannels
person "==Оператор / диспетчер\\n\\nРаботает с событиями, текущим состоянием объекта и alarm через центральную платформу мониторинга." <<OperatorDispatcher>> as OperatorDispatcher

FieldDevices .[#8D8D8D,thickness=2].> FieldProtocolGateways : <color:#8D8D8D>Передают телеграммы, состояния и команды в KNX-сегменте
FieldProtocolGateways .[#8D8D8D,thickness=2].> EdgeTelemetryAgent : <color:#8D8D8D>[...]
EdgeTelemetryAgent .[#8D8D8D,thickness=2].> MonitoringAlarmPlatform : <color:#8D8D8D>Публикует telemetry events и service topics через MQTT
MonitoringAlarmPlatform .[#8D8D8D,thickness=2].> NotificationChannels : <color:#8D8D8D>Маршрутизирует уведомления и эскалации
ServiceEngineer .[#15803d,thickness=2].> EdgeTelemetryAgent : <color:#15803d>Настраивает адаптеры, модель сигналов, polling и доставку
ServiceEngineer .[#15803d,thickness=2].> MonitoringAlarmPlatform : <color:#15803d>Настраивает правила alarm, получателей и панели мониторинга
NotificationChannels .[#8D8D8D,thickness=2].> OperatorDispatcher : <color:#8D8D8D>Доставляют уведомления по alarm и служебные уведомления
OperatorDispatcher .[#15803d,thickness=2].> MonitoringAlarmPlatform : <color:#15803d>Работает с панелями мониторинга, событиями и alarm
@enduml
`;case"deployment-demo-stand-topology":return`@startuml
title "Deployment - Demo Stand Topology"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<DemoStandLocalLanTpLine11Device111>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<DemoStandLocalLanTpLine11Device112>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<DemoStandLocalLanTpLine11Device113>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<DemoStandLocalLanTpLine11Device114>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<DemoStandRemoteAccessPublicKnxEndpoint>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<DemoStandLocalLanKnxnetIpBackboneKnxRouter>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<WhitelistedRemoteHostDeveloperNetworkEdgeHostDeliveryWorker>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<WhitelistedRemoteHostDeveloperNetworkEdgeHostLocalGrafana>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<WhitelistedRemoteHostDeveloperNetworkEdgeHostCollectorRuntime>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<MonitoringCloudPublicCloudMqttIngestHostMqttIngestionGateway>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<WhitelistedRemoteHostDeveloperNetworkEdgeHostLocalMqttBroker>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<WhitelistedRemoteHostDeveloperNetworkEdgeHostConfigurationBundle>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam database<<WhitelistedRemoteHostDeveloperNetworkEdgeHostOutboxStore>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
rectangle "Demo Stand" <<DemoStand>> as DemoStand {
  skinparam RectangleBorderColor<<DemoStand>> #3b82f6
  skinparam RectangleFontColor<<DemoStand>> #3b82f6
  skinparam RectangleBorderStyle<<DemoStand>> dashed

  rectangle "Local LAN 192.0.2.0/24" <<DemoStandLocalLan>> as DemoStandLocalLan {
    skinparam RectangleBorderColor<<DemoStandLocalLan>> #0284c7
    skinparam RectangleFontColor<<DemoStandLocalLan>> #0284c7
    skinparam RectangleBorderStyle<<DemoStandLocalLan>> dashed

    rectangle "KNX TP Line 1.1" <<DemoStandLocalLanTpLine11>> as DemoStandLocalLanTpLine11 {
      skinparam RectangleBorderColor<<DemoStandLocalLanTpLine11>> #3b82f6
      skinparam RectangleFontColor<<DemoStandLocalLanTpLine11>> #3b82f6
      skinparam RectangleBorderStyle<<DemoStandLocalLanTpLine11>> dashed

      rectangle "==1.1.1 Pushbutton sensor 4 Komfort, 4-gang\\n<size:10>[KNX TP device]</size>\\n\\nПанель кнопок с group address для света, scene и вентиляции: 0/0/1, 0/0/6, 0/0/7, 1/0/0, 1/1/0, 1/2/0, 1/3/0, 1/4/0." <<DemoStandLocalLanTpLine11Device111>> as DemoStandLocalLanTpLine11Device111
      rectangle "==1.1.2 DALI Gateway Tunable White Plus\\n<size:10>[KNX TP to DALI gateway]</size>\\n\\nШлюз освещения с адресами Switch/StatusSwitch, RGBW и Scene: 0/0/1-0/0/7." <<DemoStandLocalLanTpLine11Device112>> as DemoStandLocalLanTpLine11Device112
      rectangle "==1.1.3 Analogaktor 4fach\\n<size:10>[KNX TP actuator]</size>\\n\\nАктуатор вентиляции: VentSwitch, VentDim, VentStatus, VentValue по адресам 1/0/0-1/3/0." <<DemoStandLocalLanTpLine11Device113>> as DemoStandLocalLanTpLine11Device113
      rectangle "==1.1.4 Room controller display compact module\\n<size:10>[KNX TP room controller]</size>\\n\\nКомнатный контроллер с Temperature value 2/0/0 и сценой 1/4/0." <<DemoStandLocalLanTpLine11Device114>> as DemoStandLocalLanTpLine11Device114
    }
    rectangle "KNXnet/IP Backbone" <<DemoStandLocalLanKnxnetIpBackbone>> as DemoStandLocalLanKnxnetIpBackbone {
      skinparam RectangleBorderColor<<DemoStandLocalLanKnxnetIpBackbone>> #3b82f6
      skinparam RectangleFontColor<<DemoStandLocalLanKnxnetIpBackbone>> #3b82f6
      skinparam RectangleBorderStyle<<DemoStandLocalLanKnxnetIpBackbone>> dashed

      rectangle "==Weinzierl KNX IP Router 751\\n<size:10>[192.0.2.177:3671 / UDP / TUNNELING / individual address 1.1.0]</size>\\n\\nЛокальная точка входа в KNX/IP и маршрутизатор в TP-линию 1.1." <<DemoStandLocalLanKnxnetIpBackboneKnxRouter>> as DemoStandLocalLanKnxnetIpBackboneKnxRouter
    }
  }
  rectangle "Remote Access" <<DemoStandRemoteAccess>> as DemoStandRemoteAccess {
    skinparam RectangleBorderColor<<DemoStandRemoteAccess>> #0284c7
    skinparam RectangleFontColor<<DemoStandRemoteAccess>> #0284c7
    skinparam RectangleBorderStyle<<DemoStandRemoteAccess>> dashed

    rectangle "==Public KNX/IP endpoint\\n<size:10>[203.0.113.234:7171 / UDP / NAT]</size>\\n\\nПубличная точка входа с пробросом на локальный KNX/IP роутер 192.0.2.177:3671." <<DemoStandRemoteAccessPublicKnxEndpoint>> as DemoStandRemoteAccessPublicKnxEndpoint
  }
}
rectangle "Whitelisted Remote Host" <<WhitelistedRemoteHost>> as WhitelistedRemoteHost {
  skinparam RectangleBorderColor<<WhitelistedRemoteHost>> #3b82f6
  skinparam RectangleFontColor<<WhitelistedRemoteHost>> #3b82f6
  skinparam RectangleBorderStyle<<WhitelistedRemoteHost>> dashed

  rectangle "Developer Workstation" <<WhitelistedRemoteHostDeveloperNetworkEdgeHost>> as WhitelistedRemoteHostDeveloperNetworkEdgeHost {
    skinparam RectangleBorderColor<<WhitelistedRemoteHostDeveloperNetworkEdgeHost>> #A35829
    skinparam RectangleFontColor<<WhitelistedRemoteHostDeveloperNetworkEdgeHost>> #A35829
    skinparam RectangleBorderStyle<<WhitelistedRemoteHostDeveloperNetworkEdgeHost>> dashed

    rectangle "==Delivery Worker\\n<size:10>[Python worker / MQTT publisher]</size>\\n\\nФоновый контейнер доставки: читает outbox, публикует telemetry events и service topics в MQTT topic tree и обновляет статус доставки." <<WhitelistedRemoteHostDeveloperNetworkEdgeHostDeliveryWorker>> as WhitelistedRemoteHostDeveloperNetworkEdgeHostDeliveryWorker
    rectangle "==Local Grafana\\n<size:10>[Grafana OSS / grafana-mqtt-datasource / localhost:3000 / Docker Compose]</size>\\n\\nВременный dev/test UI из infra/local/compose.yaml. Использует grafana-mqtt-datasource для live-view MQTT payload и не считается частью target production architecture." <<WhitelistedRemoteHostDeveloperNetworkEdgeHostLocalGrafana>> as WhitelistedRemoteHostDeveloperNetworkEdgeHostLocalGrafana
    rectangle "==Collector Runtime\\n<size:10>[Python service]</size>\\n\\nОсновной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox." <<WhitelistedRemoteHostDeveloperNetworkEdgeHostCollectorRuntime>> as WhitelistedRemoteHostDeveloperNetworkEdgeHostCollectorRuntime
    rectangle "==Local MQTT Broker\\n<size:10>[Eclipse Mosquitto / localhost:1883 / Docker Compose]</size>\\n\\nВременный dev/test MQTT broker из infra/local/compose.yaml. Используется текущей реализацией edge_agent как локальный publish target." <<WhitelistedRemoteHostDeveloperNetworkEdgeHostLocalMqttBroker>> as WhitelistedRemoteHostDeveloperNetworkEdgeHostLocalMqttBroker
    rectangle "==Configuration Bundle\\n<size:10>[YAML files]</size>\\n\\nЛокальный набор конфигурации источников, модели сигналов, polling-политик и параметров доставки." <<WhitelistedRemoteHostDeveloperNetworkEdgeHostConfigurationBundle>> as WhitelistedRemoteHostDeveloperNetworkEdgeHostConfigurationBundle
    database "==Outbox Store\\n<size:10>[SQLite]</size>\\n\\nЛокальное надежное хранилище исходящих событий, статусов доставки и метаданных повторных попыток." <<WhitelistedRemoteHostDeveloperNetworkEdgeHostOutboxStore>> as WhitelistedRemoteHostDeveloperNetworkEdgeHostOutboxStore
  }
}
rectangle "==MQTT Ingestion Gateway\\n<size:10>[MQTT broker / ingestion service]</size>\\n\\nПринимает MQTT telemetry events и service topics от edge-агентов, восстанавливает routing context из topic, валидирует payload и передает canonical events на хранение и в Alarm Rule Engine." <<MonitoringCloudPublicCloudMqttIngestHostMqttIngestionGateway>> as MonitoringCloudPublicCloudMqttIngestHostMqttIngestionGateway

DemoStandRemoteAccessPublicKnxEndpoint .[#8D8D8D,thickness=2].> DemoStandLocalLanKnxnetIpBackboneKnxRouter : <color:#8D8D8D>Проброс UDP 7171 -> 3671 для удаленного KNX/IP доступа
DemoStandLocalLanKnxnetIpBackboneKnxRouter .[#8D8D8D,thickness=2].> WhitelistedRemoteHostDeveloperNetworkEdgeHostCollectorRuntime : <color:#8D8D8D>Экспонирует group address и телеграммы через KNX/IP
WhitelistedRemoteHostDeveloperNetworkEdgeHostCollectorRuntime .[#8D8D8D,thickness=2].> WhitelistedRemoteHostDeveloperNetworkEdgeHostConfigurationBundle : <color:#8D8D8D>Загружает описания источников, модель сигналов и runtime-политики
WhitelistedRemoteHostDeveloperNetworkEdgeHostDeliveryWorker .[#8D8D8D,thickness=2].> WhitelistedRemoteHostDeveloperNetworkEdgeHostConfigurationBundle : <color:#8D8D8D>Загружает настройки MQTT, topic contract и retry-политики
WhitelistedRemoteHostDeveloperNetworkEdgeHostCollectorRuntime .[#8D8D8D,thickness=2].> WhitelistedRemoteHostDeveloperNetworkEdgeHostOutboxStore : <color:#8D8D8D>Сохраняет нормализованные события и задания на доставку
WhitelistedRemoteHostDeveloperNetworkEdgeHostDeliveryWorker .[#8D8D8D,thickness=2].> WhitelistedRemoteHostDeveloperNetworkEdgeHostOutboxStore : <color:#8D8D8D>Читает ожидающие события и обновляет статус доставки
WhitelistedRemoteHostDeveloperNetworkEdgeHostDeliveryWorker .[#8D8D8D,thickness=2].> WhitelistedRemoteHostDeveloperNetworkEdgeHostLocalMqttBroker : <color:#8D8D8D>Публикует в локальный broker mqtt://localhost:1883
WhitelistedRemoteHostDeveloperNetworkEdgeHostLocalGrafana .[#8D8D8D,thickness=2].> WhitelistedRemoteHostDeveloperNetworkEdgeHostLocalMqttBroker : <color:#8D8D8D>Подписывается через grafana-mqtt-datasource на live MQTT topics
WhitelistedRemoteHostDeveloperNetworkEdgeHostCollectorRuntime .[#8D8D8D,thickness=2].> DemoStandRemoteAccessPublicKnxEndpoint : <color:#8D8D8D>Подключается к стенду через whitelisted public KNX/IP endpoint
WhitelistedRemoteHostDeveloperNetworkEdgeHostDeliveryWorker .[#8D8D8D,thickness=2].> MonitoringCloudPublicCloudMqttIngestHostMqttIngestionGateway : <color:#8D8D8D>Публикует telemetry events и service topics по MQTT 5.0
DemoStandLocalLanTpLine11 .[#8D8D8D,thickness=2].> DemoStandLocalLanKnxnetIpBackboneKnxRouter : <color:#8D8D8D>Передает KNX TP телеграммы в роутер 1.1.0
@enduml
`;case"deployment-demo-stand-current-implementation":return`@startuml
title "Deployment - Demo Stand Current Implementation"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<DemoStandLocalLanTpLine11Device111>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<DemoStandLocalLanTpLine11Device112>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<DemoStandLocalLanTpLine11Device113>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<DemoStandLocalLanTpLine11Device114>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<DemoStandRemoteAccessPublicKnxEndpoint>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<DemoStandLocalLanKnxnetIpBackboneKnxRouter>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<WhitelistedRemoteHostDeveloperNetworkEdgeHostDeliveryWorker>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<WhitelistedRemoteHostDeveloperNetworkEdgeHostLocalGrafana>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<WhitelistedRemoteHostDeveloperNetworkEdgeHostCollectorRuntime>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<WhitelistedRemoteHostDeveloperNetworkEdgeHostLocalMqttBroker>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<WhitelistedRemoteHostDeveloperNetworkEdgeHostConfigurationBundle>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam database<<WhitelistedRemoteHostDeveloperNetworkEdgeHostOutboxStore>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
rectangle "Demo Stand" <<DemoStand>> as DemoStand {
  skinparam RectangleBorderColor<<DemoStand>> #3b82f6
  skinparam RectangleFontColor<<DemoStand>> #3b82f6
  skinparam RectangleBorderStyle<<DemoStand>> dashed

  rectangle "Local LAN 192.0.2.0/24" <<DemoStandLocalLan>> as DemoStandLocalLan {
    skinparam RectangleBorderColor<<DemoStandLocalLan>> #0284c7
    skinparam RectangleFontColor<<DemoStandLocalLan>> #0284c7
    skinparam RectangleBorderStyle<<DemoStandLocalLan>> dashed

    rectangle "KNX TP Line 1.1" <<DemoStandLocalLanTpLine11>> as DemoStandLocalLanTpLine11 {
      skinparam RectangleBorderColor<<DemoStandLocalLanTpLine11>> #3b82f6
      skinparam RectangleFontColor<<DemoStandLocalLanTpLine11>> #3b82f6
      skinparam RectangleBorderStyle<<DemoStandLocalLanTpLine11>> dashed

      rectangle "==1.1.1 Pushbutton sensor 4 Komfort, 4-gang\\n<size:10>[KNX TP device]</size>\\n\\nПанель кнопок с group address для света, scene и вентиляции: 0/0/1, 0/0/6, 0/0/7, 1/0/0, 1/1/0, 1/2/0, 1/3/0, 1/4/0." <<DemoStandLocalLanTpLine11Device111>> as DemoStandLocalLanTpLine11Device111
      rectangle "==1.1.2 DALI Gateway Tunable White Plus\\n<size:10>[KNX TP to DALI gateway]</size>\\n\\nШлюз освещения с адресами Switch/StatusSwitch, RGBW и Scene: 0/0/1-0/0/7." <<DemoStandLocalLanTpLine11Device112>> as DemoStandLocalLanTpLine11Device112
      rectangle "==1.1.3 Analogaktor 4fach\\n<size:10>[KNX TP actuator]</size>\\n\\nАктуатор вентиляции: VentSwitch, VentDim, VentStatus, VentValue по адресам 1/0/0-1/3/0." <<DemoStandLocalLanTpLine11Device113>> as DemoStandLocalLanTpLine11Device113
      rectangle "==1.1.4 Room controller display compact module\\n<size:10>[KNX TP room controller]</size>\\n\\nКомнатный контроллер с Temperature value 2/0/0 и сценой 1/4/0." <<DemoStandLocalLanTpLine11Device114>> as DemoStandLocalLanTpLine11Device114
    }
    rectangle "KNXnet/IP Backbone" <<DemoStandLocalLanKnxnetIpBackbone>> as DemoStandLocalLanKnxnetIpBackbone {
      skinparam RectangleBorderColor<<DemoStandLocalLanKnxnetIpBackbone>> #3b82f6
      skinparam RectangleFontColor<<DemoStandLocalLanKnxnetIpBackbone>> #3b82f6
      skinparam RectangleBorderStyle<<DemoStandLocalLanKnxnetIpBackbone>> dashed

      rectangle "==Weinzierl KNX IP Router 751\\n<size:10>[192.0.2.177:3671 / UDP / TUNNELING / individual address 1.1.0]</size>\\n\\nЛокальная точка входа в KNX/IP и маршрутизатор в TP-линию 1.1." <<DemoStandLocalLanKnxnetIpBackboneKnxRouter>> as DemoStandLocalLanKnxnetIpBackboneKnxRouter
    }
  }
  rectangle "Remote Access" <<DemoStandRemoteAccess>> as DemoStandRemoteAccess {
    skinparam RectangleBorderColor<<DemoStandRemoteAccess>> #0284c7
    skinparam RectangleFontColor<<DemoStandRemoteAccess>> #0284c7
    skinparam RectangleBorderStyle<<DemoStandRemoteAccess>> dashed

    rectangle "==Public KNX/IP endpoint\\n<size:10>[203.0.113.234:7171 / UDP / NAT]</size>\\n\\nПубличная точка входа с пробросом на локальный KNX/IP роутер 192.0.2.177:3671." <<DemoStandRemoteAccessPublicKnxEndpoint>> as DemoStandRemoteAccessPublicKnxEndpoint
  }
}
rectangle "Whitelisted Remote Host" <<WhitelistedRemoteHost>> as WhitelistedRemoteHost {
  skinparam RectangleBorderColor<<WhitelistedRemoteHost>> #3b82f6
  skinparam RectangleFontColor<<WhitelistedRemoteHost>> #3b82f6
  skinparam RectangleBorderStyle<<WhitelistedRemoteHost>> dashed

  rectangle "Developer Workstation" <<WhitelistedRemoteHostDeveloperNetworkEdgeHost>> as WhitelistedRemoteHostDeveloperNetworkEdgeHost {
    skinparam RectangleBorderColor<<WhitelistedRemoteHostDeveloperNetworkEdgeHost>> #A35829
    skinparam RectangleFontColor<<WhitelistedRemoteHostDeveloperNetworkEdgeHost>> #A35829
    skinparam RectangleBorderStyle<<WhitelistedRemoteHostDeveloperNetworkEdgeHost>> dashed

    rectangle "==Delivery Worker\\n<size:10>[Python worker / MQTT publisher]</size>\\n\\nФоновый контейнер доставки: читает outbox, публикует telemetry events и service topics в MQTT topic tree и обновляет статус доставки." <<WhitelistedRemoteHostDeveloperNetworkEdgeHostDeliveryWorker>> as WhitelistedRemoteHostDeveloperNetworkEdgeHostDeliveryWorker
    rectangle "==Local Grafana\\n<size:10>[Grafana OSS / grafana-mqtt-datasource / localhost:3000 / Docker Compose]</size>\\n\\nВременный dev/test UI из infra/local/compose.yaml. Использует grafana-mqtt-datasource для live-view MQTT payload и не считается частью target production architecture." <<WhitelistedRemoteHostDeveloperNetworkEdgeHostLocalGrafana>> as WhitelistedRemoteHostDeveloperNetworkEdgeHostLocalGrafana
    rectangle "==Collector Runtime\\n<size:10>[Python service]</size>\\n\\nОсновной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox." <<WhitelistedRemoteHostDeveloperNetworkEdgeHostCollectorRuntime>> as WhitelistedRemoteHostDeveloperNetworkEdgeHostCollectorRuntime
    rectangle "==Local MQTT Broker\\n<size:10>[Eclipse Mosquitto / localhost:1883 / Docker Compose]</size>\\n\\nВременный dev/test MQTT broker из infra/local/compose.yaml. Используется текущей реализацией edge_agent как локальный publish target." <<WhitelistedRemoteHostDeveloperNetworkEdgeHostLocalMqttBroker>> as WhitelistedRemoteHostDeveloperNetworkEdgeHostLocalMqttBroker
    rectangle "==Configuration Bundle\\n<size:10>[YAML files]</size>\\n\\nЛокальный набор конфигурации источников, модели сигналов, polling-политик и параметров доставки." <<WhitelistedRemoteHostDeveloperNetworkEdgeHostConfigurationBundle>> as WhitelistedRemoteHostDeveloperNetworkEdgeHostConfigurationBundle
    database "==Outbox Store\\n<size:10>[SQLite]</size>\\n\\nЛокальное надежное хранилище исходящих событий, статусов доставки и метаданных повторных попыток." <<WhitelistedRemoteHostDeveloperNetworkEdgeHostOutboxStore>> as WhitelistedRemoteHostDeveloperNetworkEdgeHostOutboxStore
  }
}

DemoStandRemoteAccessPublicKnxEndpoint .[#8D8D8D,thickness=2].> DemoStandLocalLanKnxnetIpBackboneKnxRouter : <color:#8D8D8D>Проброс UDP 7171 -> 3671 для удаленного KNX/IP доступа
DemoStandLocalLanKnxnetIpBackboneKnxRouter .[#8D8D8D,thickness=2].> WhitelistedRemoteHostDeveloperNetworkEdgeHostCollectorRuntime : <color:#8D8D8D>Экспонирует group address и телеграммы через KNX/IP
WhitelistedRemoteHostDeveloperNetworkEdgeHostCollectorRuntime .[#8D8D8D,thickness=2].> WhitelistedRemoteHostDeveloperNetworkEdgeHostConfigurationBundle : <color:#8D8D8D>Загружает описания источников, модель сигналов и runtime-политики
WhitelistedRemoteHostDeveloperNetworkEdgeHostDeliveryWorker .[#8D8D8D,thickness=2].> WhitelistedRemoteHostDeveloperNetworkEdgeHostConfigurationBundle : <color:#8D8D8D>Загружает настройки MQTT, topic contract и retry-политики
WhitelistedRemoteHostDeveloperNetworkEdgeHostCollectorRuntime .[#8D8D8D,thickness=2].> WhitelistedRemoteHostDeveloperNetworkEdgeHostOutboxStore : <color:#8D8D8D>Сохраняет нормализованные события и задания на доставку
WhitelistedRemoteHostDeveloperNetworkEdgeHostDeliveryWorker .[#8D8D8D,thickness=2].> WhitelistedRemoteHostDeveloperNetworkEdgeHostOutboxStore : <color:#8D8D8D>Читает ожидающие события и обновляет статус доставки
WhitelistedRemoteHostDeveloperNetworkEdgeHostDeliveryWorker .[#8D8D8D,thickness=2].> WhitelistedRemoteHostDeveloperNetworkEdgeHostLocalMqttBroker : <color:#8D8D8D>Публикует в локальный broker mqtt://localhost:1883
WhitelistedRemoteHostDeveloperNetworkEdgeHostLocalGrafana .[#8D8D8D,thickness=2].> WhitelistedRemoteHostDeveloperNetworkEdgeHostLocalMqttBroker : <color:#8D8D8D>Подписывается через grafana-mqtt-datasource на live MQTT topics
WhitelistedRemoteHostDeveloperNetworkEdgeHostCollectorRuntime .[#8D8D8D,thickness=2].> DemoStandRemoteAccessPublicKnxEndpoint : <color:#8D8D8D>Подключается к стенду через whitelisted public KNX/IP endpoint
DemoStandLocalLanTpLine11 .[#8D8D8D,thickness=2].> DemoStandLocalLanKnxnetIpBackboneKnxRouter : <color:#8D8D8D>Передает KNX TP телеграммы в роутер 1.1.0
@enduml
`;case"demo-stand-current-monitored-points":return`@startuml
title "Demo Stand - Current Monitored Points"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<DemoStandCurrentMonitoredScopeDevice111>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<DemoStandCurrentMonitoredScopeDevice112>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<DemoStandCurrentMonitoredScopeDevice114>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<FieldProtocolGatewaysKnxRouter>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<DemoStandCurrentMonitoredScopeLightSwitchFeedback>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<DemoStandCurrentMonitoredScopeRoomTemperature>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<EdgeTelemetryAgentCollectorRuntime>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
rectangle "Demo Stand Current Monitored Scope" <<DemoStandCurrentMonitoredScope>> as DemoStandCurrentMonitoredScope {
  skinparam RectangleBorderColor<<DemoStandCurrentMonitoredScope>> #0284c7
  skinparam RectangleFontColor<<DemoStandCurrentMonitoredScope>> #0284c7
  skinparam RectangleBorderStyle<<DemoStandCurrentMonitoredScope>> dashed

  rectangle "==1.1.1 Pushbutton sensor 4 Komfort, 4-gang\\n<size:10>[KNX TP device]</size>\\n\\nКнопочная панель, участвующая в публикации feedback состояния света." <<DemoStandCurrentMonitoredScopeDevice111>> as DemoStandCurrentMonitoredScopeDevice111
  rectangle "==1.1.2 DALI Gateway Tunable White Plus\\n<size:10>[KNX TP to DALI gateway]</size>\\n\\nDALI gateway, публикующий статус светового канала." <<DemoStandCurrentMonitoredScopeDevice112>> as DemoStandCurrentMonitoredScopeDevice112
  rectangle "==1.1.4 Room controller display compact module\\n<size:10>[KNX TP room controller]</size>\\n\\nКомнатный контроллер, публикующий температуру помещения." <<DemoStandCurrentMonitoredScopeDevice114>> as DemoStandCurrentMonitoredScopeDevice114
  rectangle "==0/0/7 StatusSwitch\\n<size:10>[KNX DPT 1.001 / feedback]</size>\\n\\nФактически читаемая точка состояния света." <<DemoStandCurrentMonitoredScopeLightSwitchFeedback>> as DemoStandCurrentMonitoredScopeLightSwitchFeedback
  rectangle "==2/0/0 Temp Value\\n<size:10>[KNX DPT 9.xxx / room temperature]</size>\\n\\nФактически читаемая точка температуры помещения." <<DemoStandCurrentMonitoredScopeRoomTemperature>> as DemoStandCurrentMonitoredScopeRoomTemperature
}
rectangle "Протокольные шлюзы и SCADA-контроллеры" <<FieldProtocolGateways>> as FieldProtocolGateways {
  skinparam RectangleBorderColor<<FieldProtocolGateways>> #0284c7
  skinparam RectangleFontColor<<FieldProtocolGateways>> #0284c7
  skinparam RectangleBorderStyle<<FieldProtocolGateways>> dashed

  rectangle "==KNX Segment\\n<size:10>[KNX / KNXnet-IP]</size>" <<FieldProtocolGatewaysKnxRouter>> as FieldProtocolGatewaysKnxRouter
}
rectangle "Edge Telemetry Agent" <<EdgeTelemetryAgent>> as EdgeTelemetryAgent {
  skinparam RectangleBorderColor<<EdgeTelemetryAgent>> #A35829
  skinparam RectangleFontColor<<EdgeTelemetryAgent>> #A35829
  skinparam RectangleBorderStyle<<EdgeTelemetryAgent>> dashed

  rectangle "==Collector Runtime\\n<size:10>[Python service]</size>\\n\\nОсновной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox." <<EdgeTelemetryAgentCollectorRuntime>> as EdgeTelemetryAgentCollectorRuntime
}

DemoStandCurrentMonitoredScopeDevice111 .[#8D8D8D,thickness=2].> DemoStandCurrentMonitoredScopeLightSwitchFeedback : <color:#8D8D8D>Публикует feedback состояния света 0/0/7
DemoStandCurrentMonitoredScopeDevice112 .[#8D8D8D,thickness=2].> DemoStandCurrentMonitoredScopeLightSwitchFeedback : <color:#8D8D8D>Публикует статус светового канала 0/0/7
DemoStandCurrentMonitoredScopeDevice114 .[#8D8D8D,thickness=2].> DemoStandCurrentMonitoredScopeRoomTemperature : <color:#8D8D8D>Публикует температуру помещения 2/0/0
DemoStandCurrentMonitoredScopeLightSwitchFeedback .[#8D8D8D,thickness=2].> EdgeTelemetryAgentCollectorRuntime : <color:#8D8D8D>Поставляет feedback состояния света в текущий read scope
DemoStandCurrentMonitoredScopeRoomTemperature .[#8D8D8D,thickness=2].> EdgeTelemetryAgentCollectorRuntime : <color:#8D8D8D>Поставляет температуру помещения в текущий read scope
FieldProtocolGatewaysKnxRouter .[#8D8D8D,thickness=2].> EdgeTelemetryAgentCollectorRuntime : <color:#8D8D8D>Экспонирует group address и телеграммы через KNX/IP
@enduml
`;case"c2-edge-telemetry-agent-containers":return`@startuml
title "C2 Containers"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<DemoStandCurrentMonitoredScope>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam person<<ServiceEngineer>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<FieldProtocolGatewaysKnxRouter>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<FieldProtocolGatewaysModbusGateway>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<FieldProtocolGatewaysOpcUaGateway>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<EdgeTelemetryAgentCollectorRuntime>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<EdgeTelemetryAgentDeliveryWorker>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<EdgeTelemetryAgentConfigurationBundle>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam database<<EdgeTelemetryAgentOutboxStore>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<MonitoringAlarmPlatform>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
rectangle "==Demo Stand Current Monitored Scope\\n<size:10>[KNX monitored signals / current read scope]</size>\\n\\nТекущий набор сигналов demo-стенда, которые читает Edge Telemetry Agent." <<DemoStandCurrentMonitoredScope>> as DemoStandCurrentMonitoredScope
rectangle "Протокольные шлюзы и SCADA-контроллеры" <<FieldProtocolGateways>> as FieldProtocolGateways {
  skinparam RectangleBorderColor<<FieldProtocolGateways>> #0284c7
  skinparam RectangleFontColor<<FieldProtocolGateways>> #0284c7
  skinparam RectangleBorderStyle<<FieldProtocolGateways>> dashed

  rectangle "==KNX Segment\\n<size:10>[KNX / KNXnet-IP]</size>" <<FieldProtocolGatewaysKnxRouter>> as FieldProtocolGatewaysKnxRouter
  rectangle "==Modbus Gateway\\n<size:10>[Modbus TCP / Modbus RTU]</size>" <<FieldProtocolGatewaysModbusGateway>> as FieldProtocolGatewaysModbusGateway
  rectangle "==OPC UA Server\\n<size:10>[OPC UA]</size>" <<FieldProtocolGatewaysOpcUaGateway>> as FieldProtocolGatewaysOpcUaGateway
}
person "==Сервисный инженер\\n\\nНастраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы." <<ServiceEngineer>> as ServiceEngineer
rectangle "Edge Telemetry Agent" <<EdgeTelemetryAgent>> as EdgeTelemetryAgent {
  skinparam RectangleBorderColor<<EdgeTelemetryAgent>> #3b82f6
  skinparam RectangleFontColor<<EdgeTelemetryAgent>> #3b82f6
  skinparam RectangleBorderStyle<<EdgeTelemetryAgent>> dashed

  rectangle "==Collector Runtime\\n<size:10>[Python service]</size>\\n\\nОсновной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox." <<EdgeTelemetryAgentCollectorRuntime>> as EdgeTelemetryAgentCollectorRuntime
  rectangle "==Delivery Worker\\n<size:10>[Python worker / MQTT publisher]</size>\\n\\nФоновый контейнер доставки: читает outbox, публикует telemetry events и service topics в MQTT topic tree и обновляет статус доставки." <<EdgeTelemetryAgentDeliveryWorker>> as EdgeTelemetryAgentDeliveryWorker
  rectangle "==Configuration Bundle\\n<size:10>[YAML files]</size>\\n\\nЛокальный набор конфигурации источников, модели сигналов, polling-политик и параметров доставки." <<EdgeTelemetryAgentConfigurationBundle>> as EdgeTelemetryAgentConfigurationBundle
  database "==Outbox Store\\n<size:10>[SQLite]</size>\\n\\nЛокальное надежное хранилище исходящих событий, статусов доставки и метаданных повторных попыток." <<EdgeTelemetryAgentOutboxStore>> as EdgeTelemetryAgentOutboxStore
}
rectangle "==Monitoring & Alarm Platform\\n<size:10>[Cloud monitoring platform / alarm engine / operator UI]</size>\\n\\nЦентральная система в облаке/интернете для приема событий, хранения телеметрии, визуализации, alarm-логики и маршрутизации уведомлений." <<MonitoringAlarmPlatform>> as MonitoringAlarmPlatform

DemoStandCurrentMonitoredScope .[#8D8D8D,thickness=2].> EdgeTelemetryAgentCollectorRuntime : <color:#8D8D8D>[...]
EdgeTelemetryAgentCollectorRuntime .[#8D8D8D,thickness=2].> EdgeTelemetryAgentConfigurationBundle : <color:#8D8D8D>Загружает описания источников, модель сигналов и runtime-политики
EdgeTelemetryAgentCollectorRuntime .[#8D8D8D,thickness=2].> EdgeTelemetryAgentOutboxStore : <color:#8D8D8D>Сохраняет нормализованные события и задания на доставку
EdgeTelemetryAgentDeliveryWorker .[#8D8D8D,thickness=2].> EdgeTelemetryAgentConfigurationBundle : <color:#8D8D8D>Загружает настройки MQTT, topic contract и retry-политики
EdgeTelemetryAgentDeliveryWorker .[#8D8D8D,thickness=2].> EdgeTelemetryAgentOutboxStore : <color:#8D8D8D>Читает ожидающие события и обновляет статус доставки
EdgeTelemetryAgentDeliveryWorker .[#8D8D8D,thickness=2].> MonitoringAlarmPlatform : <color:#8D8D8D>Публикует telemetry events и service topics по MQTT 5.0
FieldProtocolGatewaysKnxRouter .[#8D8D8D,thickness=2].> EdgeTelemetryAgentCollectorRuntime : <color:#8D8D8D>Экспонирует group address и телеграммы через KNX/IP
FieldProtocolGatewaysModbusGateway .[#8D8D8D,thickness=2].> EdgeTelemetryAgentCollectorRuntime : <color:#8D8D8D>Экспонирует registers, coils и дискретные значения через Modbus
FieldProtocolGatewaysOpcUaGateway .[#8D8D8D,thickness=2].> EdgeTelemetryAgentCollectorRuntime : <color:#8D8D8D>Экспонирует nodes, subscriptions и значения через OPC UA
ServiceEngineer .[#15803d,thickness=2].> EdgeTelemetryAgent : <color:#15803d>Настраивает адаптеры, модель сигналов, polling и доставку
@enduml
`;case"c2-monitoring-alarm-platform-containers":return`@startuml
title "C2 Containers"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<ServiceEngineer>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam person<<OperatorDispatcher>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<MonitoringAlarmPlatformOperatorDashboard>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<EdgeTelemetryAgent>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<MonitoringAlarmPlatformMqttIngestionGateway>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<MonitoringAlarmPlatformPlatformApi>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<MonitoringAlarmPlatformAlarmRuleEngine>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<MonitoringAlarmPlatformNotificationService>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam database<<MonitoringAlarmPlatformTelemetryStore>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<NotificationChannels>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
person "==Сервисный инженер\\n\\nНастраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы." <<ServiceEngineer>> as ServiceEngineer
person "==Оператор / диспетчер\\n\\nРаботает с событиями, текущим состоянием объекта и alarm через центральную платформу мониторинга." <<OperatorDispatcher>> as OperatorDispatcher
rectangle "Monitoring & Alarm Platform" <<MonitoringAlarmPlatform>> as MonitoringAlarmPlatform {
  skinparam RectangleBorderColor<<MonitoringAlarmPlatform>> #3b82f6
  skinparam RectangleFontColor<<MonitoringAlarmPlatform>> #3b82f6
  skinparam RectangleBorderStyle<<MonitoringAlarmPlatform>> dashed

  rectangle "==Operator Dashboard\\n<size:10>[Web SPA]</size>\\n\\nВеб-интерфейс для операторов и инженеров: панели мониторинга, состояние alarm, история событий и настройка правил." <<MonitoringAlarmPlatformOperatorDashboard>> as MonitoringAlarmPlatformOperatorDashboard
  rectangle "==MQTT Ingestion Gateway\\n<size:10>[MQTT broker / ingestion service]</size>\\n\\nПринимает MQTT telemetry events и service topics от edge-агентов, восстанавливает routing context из topic, валидирует payload и передает canonical events на хранение и в Alarm Rule Engine." <<MonitoringAlarmPlatformMqttIngestionGateway>> as MonitoringAlarmPlatformMqttIngestionGateway
  rectangle "==Platform API\\n<size:10>[HTTP API / backend service]</size>\\n\\nBackend API для операторского интерфейса, состояния alarm, истории событий, конфигурации правил и политик уведомлений." <<MonitoringAlarmPlatformPlatformApi>> as MonitoringAlarmPlatformPlatformApi
  rectangle "==Alarm Rule Engine\\n<size:10>[Rule engine / stream processor]</size>\\n\\nОбрабатывает входящие события по правилам, ведет жизненный цикл alarm и инициирует уведомления и эскалации." <<MonitoringAlarmPlatformAlarmRuleEngine>> as MonitoringAlarmPlatformAlarmRuleEngine
  rectangle "==Notification Service\\n<size:10>[Worker / notification gateway]</size>\\n\\nМаршрутизирует уведомления во внешние каналы по alarm-политикам и правилам эскалации." <<MonitoringAlarmPlatformNotificationService>> as MonitoringAlarmPlatformNotificationService
  database "==Telemetry Store\\n<size:10>[Time-series DB / relational storage]</size>\\n\\nХранит телеметрию, служебные события, историю alarm и данные для мониторинговых и операторских запросов." <<MonitoringAlarmPlatformTelemetryStore>> as MonitoringAlarmPlatformTelemetryStore
}
rectangle "==Edge Telemetry Agent\\n<size:10>[Edge collector / normalization / buffering / delivery]</size>\\n\\nУниверсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий." <<EdgeTelemetryAgent>> as EdgeTelemetryAgent
rectangle "==Каналы уведомлений\\n<size:10>[Email / SMS / Push / Webhook]</size>\\n\\nEmail, SMS, push, webhook и другие внешние облачные каналы доставки тревог и служебных уведомлений." <<NotificationChannels>> as NotificationChannels

ServiceEngineer .[#15803d,thickness=2].> MonitoringAlarmPlatformOperatorDashboard : <color:#15803d>Настраивает правила, получателей и панели мониторинга
OperatorDispatcher .[#15803d,thickness=2].> MonitoringAlarmPlatformOperatorDashboard : <color:#15803d>Работает с панелями мониторинга, alarm и историей
MonitoringAlarmPlatformAlarmRuleEngine .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformNotificationService : <color:#8D8D8D>Запускает доставку уведомлений
MonitoringAlarmPlatformAlarmRuleEngine .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformTelemetryStore : <color:#8D8D8D>Читает контекст и записывает состояние и историю alarm
MonitoringAlarmPlatformMqttIngestionGateway .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformAlarmRuleEngine : <color:#8D8D8D>Передает нормализованные события в Alarm Rule Engine
MonitoringAlarmPlatformPlatformApi .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformAlarmRuleEngine : <color:#8D8D8D>Читает активные alarm и управляет конфигурацией правил в Alarm Rule Engine
MonitoringAlarmPlatformMqttIngestionGateway .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformTelemetryStore : <color:#8D8D8D>Сохраняет canonical events и служебные события
MonitoringAlarmPlatformOperatorDashboard .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformPlatformApi : <color:#8D8D8D>Запрашивает панели мониторинга, состояние alarm и конфигурацию
MonitoringAlarmPlatformPlatformApi .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformTelemetryStore : <color:#8D8D8D>Читает телеметрию, историю и временные линии alarm
MonitoringAlarmPlatformNotificationService .[#8D8D8D,thickness=2].> NotificationChannels : <color:#8D8D8D>Отправляет email, SMS, push и webhook-уведомления
NotificationChannels .[#8D8D8D,thickness=2].> OperatorDispatcher : <color:#8D8D8D>Доставляют уведомления по alarm и служебные уведомления
@enduml
`;case"local-mqtt-grafana-dev-harness":return`@startuml
title "Development - Local MQTT + Grafana Harness"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<EdgeTelemetryAgent>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam person<<ServiceEngineer>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<LocalGrafana>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<LocalMqttBroker>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
rectangle "==Edge Telemetry Agent\\n<size:10>[Edge collector / normalization / buffering / delivery]</size>\\n\\nУниверсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий." <<EdgeTelemetryAgent>> as EdgeTelemetryAgent
person "==Сервисный инженер\\n\\nНастраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы." <<ServiceEngineer>> as ServiceEngineer
rectangle "==Local Grafana\\n<size:10>[Grafana OSS / grafana-mqtt-datasource / localhost:3000 / Docker Compose]</size>\\n\\nВременный dev/test UI из infra/local/compose.yaml. Использует grafana-mqtt-datasource для live-view MQTT payload и не считается частью target production architecture." <<LocalGrafana>> as LocalGrafana
rectangle "==Local MQTT Broker\\n<size:10>[Eclipse Mosquitto / localhost:1883 / Docker Compose]</size>\\n\\nВременный dev/test MQTT broker из infra/local/compose.yaml. Используется текущей реализацией edge_agent как локальный publish target." <<LocalMqttBroker>> as LocalMqttBroker

EdgeTelemetryAgent .[#8D8D8D,thickness=2].> LocalMqttBroker : <color:#8D8D8D>Публикует telemetry events и service topics в локальный MQTT broker
ServiceEngineer .[#15803d,thickness=2].> LocalGrafana : <color:#15803d>Проверяет live MQTT поток, topic tree и dashboard
LocalGrafana .[#8D8D8D,thickness=2].> LocalMqttBroker : <color:#8D8D8D>Подписывается через grafana-mqtt-datasource на live MQTT topics
@enduml
`;case"c2-field-devices":return`@startuml
title "C2 Devices"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<FieldDevicesKnxTemperatureSensor>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<FieldProtocolGatewaysKnxRouter>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
rectangle "Полевые устройства и контроллеры" <<FieldDevices>> as FieldDevices {
  skinparam RectangleBorderColor<<FieldDevices>> #0284c7
  skinparam RectangleFontColor<<FieldDevices>> #0284c7
  skinparam RectangleBorderStyle<<FieldDevices>> dashed

  rectangle "==knx-temperature-sensor\\n<size:10>[KNX]</size>\\n\\nДатчик температуры" <<FieldDevicesKnxTemperatureSensor>> as FieldDevicesKnxTemperatureSensor
}
rectangle "Протокольные шлюзы и SCADA-контроллеры" <<FieldProtocolGateways>> as FieldProtocolGateways {
  skinparam RectangleBorderColor<<FieldProtocolGateways>> #0284c7
  skinparam RectangleFontColor<<FieldProtocolGateways>> #0284c7
  skinparam RectangleBorderStyle<<FieldProtocolGateways>> dashed

  rectangle "==KNX Segment\\n<size:10>[KNX / KNXnet-IP]</size>" <<FieldProtocolGatewaysKnxRouter>> as FieldProtocolGatewaysKnxRouter
}

FieldDevicesKnxTemperatureSensor .[#8D8D8D,thickness=2].> FieldProtocolGatewaysKnxRouter : <color:#8D8D8D>Передают телеграммы, состояния и команды в KNX-сегменте
@enduml
`;case"c2-field-protocol-gateways":return`@startuml
title "C2 Gateways"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<FieldDevicesKnxTemperatureSensor>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<FieldProtocolGatewaysKnxRouter>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<FieldProtocolGatewaysModbusGateway>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<FieldProtocolGatewaysOpcUaGateway>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<EdgeTelemetryAgentCollectorRuntime>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
rectangle "Полевые устройства и контроллеры" <<FieldDevices>> as FieldDevices {
  skinparam RectangleBorderColor<<FieldDevices>> #0284c7
  skinparam RectangleFontColor<<FieldDevices>> #0284c7
  skinparam RectangleBorderStyle<<FieldDevices>> dashed

  rectangle "==knx-temperature-sensor\\n<size:10>[KNX]</size>\\n\\nДатчик температуры" <<FieldDevicesKnxTemperatureSensor>> as FieldDevicesKnxTemperatureSensor
}
rectangle "Протокольные шлюзы и SCADA-контроллеры" <<FieldProtocolGateways>> as FieldProtocolGateways {
  skinparam RectangleBorderColor<<FieldProtocolGateways>> #0284c7
  skinparam RectangleFontColor<<FieldProtocolGateways>> #0284c7
  skinparam RectangleBorderStyle<<FieldProtocolGateways>> dashed

  rectangle "==KNX Segment\\n<size:10>[KNX / KNXnet-IP]</size>" <<FieldProtocolGatewaysKnxRouter>> as FieldProtocolGatewaysKnxRouter
  rectangle "==Modbus Gateway\\n<size:10>[Modbus TCP / Modbus RTU]</size>" <<FieldProtocolGatewaysModbusGateway>> as FieldProtocolGatewaysModbusGateway
  rectangle "==OPC UA Server\\n<size:10>[OPC UA]</size>" <<FieldProtocolGatewaysOpcUaGateway>> as FieldProtocolGatewaysOpcUaGateway
}
rectangle "Edge Telemetry Agent" <<EdgeTelemetryAgent>> as EdgeTelemetryAgent {
  skinparam RectangleBorderColor<<EdgeTelemetryAgent>> #A35829
  skinparam RectangleFontColor<<EdgeTelemetryAgent>> #A35829
  skinparam RectangleBorderStyle<<EdgeTelemetryAgent>> dashed

  rectangle "==Collector Runtime\\n<size:10>[Python service]</size>\\n\\nОсновной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox." <<EdgeTelemetryAgentCollectorRuntime>> as EdgeTelemetryAgentCollectorRuntime
}

FieldDevicesKnxTemperatureSensor .[#8D8D8D,thickness=2].> FieldProtocolGatewaysKnxRouter : <color:#8D8D8D>Передают телеграммы, состояния и команды в KNX-сегменте
FieldProtocolGatewaysKnxRouter .[#8D8D8D,thickness=2].> EdgeTelemetryAgentCollectorRuntime : <color:#8D8D8D>Экспонирует group address и телеграммы через KNX/IP
FieldProtocolGatewaysModbusGateway .[#8D8D8D,thickness=2].> EdgeTelemetryAgentCollectorRuntime : <color:#8D8D8D>Экспонирует registers, coils и дискретные значения через Modbus
FieldProtocolGatewaysOpcUaGateway .[#8D8D8D,thickness=2].> EdgeTelemetryAgentCollectorRuntime : <color:#8D8D8D>Экспонирует nodes, subscriptions и значения через OPC UA
@enduml
`;default:throw new Error("Unknown viewId: "+e)}}const r5=Object.freeze(Object.defineProperty({__proto__:null,pumlSource:n5},Symbol.toStringTag,{value:"Module"}));function o5(e){switch(e){case"index":return`---
title: "Landscape view"
---
graph TB
  Demo-stand-current-monitored-scope@{ shape: rectangle, label: "Demo Stand Current Monitored Scope" }
  Field-devices@{ shape: rectangle, label: "Полевые устройства и контроллеры" }
  Service-engineer@{ icon: "fa:user", shape: rounded, label: "Сервисный инженер" }
  Field-protocol-gateways@{ shape: rectangle, label: "Протокольные шлюзы и SCADA-контроллеры" }
  Local-grafana@{ shape: rectangle, label: "Local Grafana" }
  Edge-telemetry-agent@{ shape: rectangle, label: "Edge Telemetry Agent" }
  Local-mqtt-broker@{ shape: rectangle, label: "Local MQTT Broker" }
  Monitoring-alarm-platform@{ shape: rectangle, label: "Monitoring & Alarm Platform" }
  Notification-channels@{ shape: rectangle, label: "Каналы уведомлений" }
  Operator-dispatcher@{ icon: "fa:user", shape: rounded, label: "Оператор / диспетчер" }
  Demo-stand-current-monitored-scope -. "\`[...]\`" .-> Edge-telemetry-agent
  Field-devices -. "\`Передают телеграммы, состояния и команды в KNX-сегменте\`" .-> Field-protocol-gateways
  Notification-channels -. "\`Доставляют уведомления по alarm и служебные уведомления\`" .-> Operator-dispatcher
  Monitoring-alarm-platform -. "\`Маршрутизирует уведомления и эскалации\`" .-> Notification-channels
  Field-protocol-gateways -. "\`[...]\`" .-> Edge-telemetry-agent
  Local-grafana -. "\`Подписывается через grafana-mqtt-datasource на live MQTT topics\`" .-> Local-mqtt-broker
  Edge-telemetry-agent -. "\`Публикует telemetry events и service topics в локальный MQTT broker\`" .-> Local-mqtt-broker
  Service-engineer -. "\`Проверяет live MQTT поток, topic tree и dashboard\`" .-> Local-grafana
  Service-engineer -. "\`Настраивает адаптеры, модель сигналов, polling и доставку\`" .-> Edge-telemetry-agent
  Service-engineer -. "\`Настраивает правила alarm, получателей и панели мониторинга\`" .-> Monitoring-alarm-platform
  Operator-dispatcher -. "\`Работает с панелями мониторинга, событиями и alarm\`" .-> Monitoring-alarm-platform
  Edge-telemetry-agent -. "\`Публикует telemetry events и service topics через MQTT\`" .-> Monitoring-alarm-platform
`;case"c1-system-context":return`---
title: "Edge Telemetry Agent + Monitoring & Alarm Platform - C1 System Context"
---
graph TB
  Field-devices@{ shape: rectangle, label: "Полевые устройства и контроллеры" }
  Service-engineer@{ icon: "fa:user", shape: rounded, label: "Сервисный инженер" }
  Field-protocol-gateways@{ shape: rectangle, label: "Протокольные шлюзы и SCADA-контроллеры" }
  Edge-telemetry-agent@{ shape: rectangle, label: "Edge Telemetry Agent" }
  Monitoring-alarm-platform@{ shape: rectangle, label: "Monitoring & Alarm Platform" }
  Notification-channels@{ shape: rectangle, label: "Каналы уведомлений" }
  Operator-dispatcher@{ icon: "fa:user", shape: rounded, label: "Оператор / диспетчер" }
  Field-devices -. "\`Передают телеграммы, состояния и команды в KNX-сегменте\`" .-> Field-protocol-gateways
  Field-protocol-gateways -. "\`[...]\`" .-> Edge-telemetry-agent
  Edge-telemetry-agent -. "\`Публикует telemetry events и service topics через MQTT\`" .-> Monitoring-alarm-platform
  Monitoring-alarm-platform -. "\`Маршрутизирует уведомления и эскалации\`" .-> Notification-channels
  Service-engineer -. "\`Настраивает адаптеры, модель сигналов, polling и доставку\`" .-> Edge-telemetry-agent
  Service-engineer -. "\`Настраивает правила alarm, получателей и панели мониторинга\`" .-> Monitoring-alarm-platform
  Notification-channels -. "\`Доставляют уведомления по alarm и служебные уведомления\`" .-> Operator-dispatcher
  Operator-dispatcher -. "\`Работает с панелями мониторинга, событиями и alarm\`" .-> Monitoring-alarm-platform
`;case"deployment-demo-stand-topology":return`---
title: "Deployment - Demo Stand Topology"
---
graph TB
  subgraph Demo-stand["\`Demo Stand\`"]
    subgraph Demo-stand.Local-lan["\`Local LAN 192.0.2.0/24\`"]
      subgraph Demo-stand.Local-lan.Tp-line-1-1["\`KNX TP Line 1.1\`"]
        Demo-stand.Local-lan.Tp-line-1-1.Device-1-1-1@{ shape: rectangle, label: "1.1.1 Pushbutton sensor 4 Komfort, 4-gang" }
        Demo-stand.Local-lan.Tp-line-1-1.Device-1-1-2@{ shape: rectangle, label: "1.1.2 DALI Gateway Tunable White Plus" }
        Demo-stand.Local-lan.Tp-line-1-1.Device-1-1-3@{ shape: rectangle, label: "1.1.3 Analogaktor 4fach" }
        Demo-stand.Local-lan.Tp-line-1-1.Device-1-1-4@{ shape: rectangle, label: "1.1.4 Room controller display compact module" }
      end
      subgraph Demo-stand.Local-lan.Knxnet-ip-backbone["\`KNXnet/IP Backbone\`"]
        Demo-stand.Local-lan.Knxnet-ip-backbone.Knx-router@{ shape: rectangle, label: "Weinzierl KNX IP Router 751" }
      end
    end
    subgraph Demo-stand.Remote-access["\`Remote Access\`"]
      Demo-stand.Remote-access.Public-knx-endpoint@{ shape: rectangle, label: "Public KNX/IP endpoint" }
    end
  end
  subgraph Whitelisted-remote-host["\`Whitelisted Remote Host\`"]
    subgraph Whitelisted-remote-host.Developer-networkEdge-host["\`Developer Workstation\`"]
      Whitelisted-remote-host.Developer-networkEdge-host.Delivery-worker@{ shape: rectangle, label: "Delivery Worker" }
      Whitelisted-remote-host.Developer-networkEdge-host.Local-grafana@{ shape: rectangle, label: "Local Grafana" }
      Whitelisted-remote-host.Developer-networkEdge-host.Collector-runtime@{ shape: rectangle, label: "Collector Runtime" }
      Whitelisted-remote-host.Developer-networkEdge-host.Local-mqtt-broker@{ shape: rectangle, label: "Local MQTT Broker" }
      Whitelisted-remote-host.Developer-networkEdge-host.Configuration-bundle@{ shape: rectangle, label: "Configuration Bundle" }
      Whitelisted-remote-host.Developer-networkEdge-host.Outbox-store@{ shape: disk, label: "Outbox Store" }
    end
  end
  Monitoring-cloudPublic-cloudMqtt-ingest-hostMqtt-ingestion-gateway@{ shape: rectangle, label: "MQTT Ingestion Gateway" }
  Demo-stand.Remote-access.Public-knx-endpoint -. "\`Проброс UDP 7171 -> 3671 для удаленного KNX/IP доступа\`" .-> Demo-stand.Local-lan.Knxnet-ip-backbone.Knx-router
  Demo-stand.Local-lan.Knxnet-ip-backbone.Knx-router -. "\`Экспонирует group address и телеграммы через KNX/IP\`" .-> Whitelisted-remote-host.Developer-networkEdge-host.Collector-runtime
  Whitelisted-remote-host.Developer-networkEdge-host.Collector-runtime -. "\`Загружает описания источников, модель сигналов и runtime-политики\`" .-> Whitelisted-remote-host.Developer-networkEdge-host.Configuration-bundle
  Whitelisted-remote-host.Developer-networkEdge-host.Delivery-worker -. "\`Загружает настройки MQTT, topic contract и retry-политики\`" .-> Whitelisted-remote-host.Developer-networkEdge-host.Configuration-bundle
  Whitelisted-remote-host.Developer-networkEdge-host.Collector-runtime -. "\`Сохраняет нормализованные события и задания на доставку\`" .-> Whitelisted-remote-host.Developer-networkEdge-host.Outbox-store
  Whitelisted-remote-host.Developer-networkEdge-host.Delivery-worker -. "\`Читает ожидающие события и обновляет статус доставки\`" .-> Whitelisted-remote-host.Developer-networkEdge-host.Outbox-store
  Whitelisted-remote-host.Developer-networkEdge-host.Delivery-worker -. "\`Публикует в локальный broker mqtt://localhost:1883\`" .-> Whitelisted-remote-host.Developer-networkEdge-host.Local-mqtt-broker
  Whitelisted-remote-host.Developer-networkEdge-host.Local-grafana -. "\`Подписывается через grafana-mqtt-datasource на live MQTT topics\`" .-> Whitelisted-remote-host.Developer-networkEdge-host.Local-mqtt-broker
  Whitelisted-remote-host.Developer-networkEdge-host.Collector-runtime -. "\`Подключается к стенду через whitelisted public KNX/IP endpoint\`" .-> Demo-stand.Remote-access.Public-knx-endpoint
  Whitelisted-remote-host.Developer-networkEdge-host.Delivery-worker -. "\`Публикует telemetry events и service topics по MQTT 5.0\`" .-> Monitoring-cloudPublic-cloudMqtt-ingest-hostMqtt-ingestion-gateway
  Demo-stand.Local-lan.Tp-line-1-1 -. "\`Передает KNX TP телеграммы в роутер 1.1.0\`" .-> Demo-stand.Local-lan.Knxnet-ip-backbone.Knx-router
`;case"deployment-demo-stand-current-implementation":return`---
title: "Deployment - Demo Stand Current Implementation"
---
graph TB
  subgraph Demo-stand["\`Demo Stand\`"]
    subgraph Demo-stand.Local-lan["\`Local LAN 192.0.2.0/24\`"]
      subgraph Demo-stand.Local-lan.Tp-line-1-1["\`KNX TP Line 1.1\`"]
        Demo-stand.Local-lan.Tp-line-1-1.Device-1-1-1@{ shape: rectangle, label: "1.1.1 Pushbutton sensor 4 Komfort, 4-gang" }
        Demo-stand.Local-lan.Tp-line-1-1.Device-1-1-2@{ shape: rectangle, label: "1.1.2 DALI Gateway Tunable White Plus" }
        Demo-stand.Local-lan.Tp-line-1-1.Device-1-1-3@{ shape: rectangle, label: "1.1.3 Analogaktor 4fach" }
        Demo-stand.Local-lan.Tp-line-1-1.Device-1-1-4@{ shape: rectangle, label: "1.1.4 Room controller display compact module" }
      end
      subgraph Demo-stand.Local-lan.Knxnet-ip-backbone["\`KNXnet/IP Backbone\`"]
        Demo-stand.Local-lan.Knxnet-ip-backbone.Knx-router@{ shape: rectangle, label: "Weinzierl KNX IP Router 751" }
      end
    end
    subgraph Demo-stand.Remote-access["\`Remote Access\`"]
      Demo-stand.Remote-access.Public-knx-endpoint@{ shape: rectangle, label: "Public KNX/IP endpoint" }
    end
  end
  subgraph Whitelisted-remote-host["\`Whitelisted Remote Host\`"]
    subgraph Whitelisted-remote-host.Developer-networkEdge-host["\`Developer Workstation\`"]
      Whitelisted-remote-host.Developer-networkEdge-host.Delivery-worker@{ shape: rectangle, label: "Delivery Worker" }
      Whitelisted-remote-host.Developer-networkEdge-host.Local-grafana@{ shape: rectangle, label: "Local Grafana" }
      Whitelisted-remote-host.Developer-networkEdge-host.Collector-runtime@{ shape: rectangle, label: "Collector Runtime" }
      Whitelisted-remote-host.Developer-networkEdge-host.Local-mqtt-broker@{ shape: rectangle, label: "Local MQTT Broker" }
      Whitelisted-remote-host.Developer-networkEdge-host.Configuration-bundle@{ shape: rectangle, label: "Configuration Bundle" }
      Whitelisted-remote-host.Developer-networkEdge-host.Outbox-store@{ shape: disk, label: "Outbox Store" }
    end
  end
  Demo-stand.Remote-access.Public-knx-endpoint -. "\`Проброс UDP 7171 -> 3671 для удаленного KNX/IP доступа\`" .-> Demo-stand.Local-lan.Knxnet-ip-backbone.Knx-router
  Demo-stand.Local-lan.Knxnet-ip-backbone.Knx-router -. "\`Экспонирует group address и телеграммы через KNX/IP\`" .-> Whitelisted-remote-host.Developer-networkEdge-host.Collector-runtime
  Whitelisted-remote-host.Developer-networkEdge-host.Collector-runtime -. "\`Загружает описания источников, модель сигналов и runtime-политики\`" .-> Whitelisted-remote-host.Developer-networkEdge-host.Configuration-bundle
  Whitelisted-remote-host.Developer-networkEdge-host.Delivery-worker -. "\`Загружает настройки MQTT, topic contract и retry-политики\`" .-> Whitelisted-remote-host.Developer-networkEdge-host.Configuration-bundle
  Whitelisted-remote-host.Developer-networkEdge-host.Collector-runtime -. "\`Сохраняет нормализованные события и задания на доставку\`" .-> Whitelisted-remote-host.Developer-networkEdge-host.Outbox-store
  Whitelisted-remote-host.Developer-networkEdge-host.Delivery-worker -. "\`Читает ожидающие события и обновляет статус доставки\`" .-> Whitelisted-remote-host.Developer-networkEdge-host.Outbox-store
  Whitelisted-remote-host.Developer-networkEdge-host.Delivery-worker -. "\`Публикует в локальный broker mqtt://localhost:1883\`" .-> Whitelisted-remote-host.Developer-networkEdge-host.Local-mqtt-broker
  Whitelisted-remote-host.Developer-networkEdge-host.Local-grafana -. "\`Подписывается через grafana-mqtt-datasource на live MQTT topics\`" .-> Whitelisted-remote-host.Developer-networkEdge-host.Local-mqtt-broker
  Whitelisted-remote-host.Developer-networkEdge-host.Collector-runtime -. "\`Подключается к стенду через whitelisted public KNX/IP endpoint\`" .-> Demo-stand.Remote-access.Public-knx-endpoint
  Demo-stand.Local-lan.Tp-line-1-1 -. "\`Передает KNX TP телеграммы в роутер 1.1.0\`" .-> Demo-stand.Local-lan.Knxnet-ip-backbone.Knx-router
`;case"demo-stand-current-monitored-points":return`---
title: "Demo Stand - Current Monitored Points"
---
graph TB
  subgraph Demo-stand-current-monitored-scope["\`Demo Stand Current Monitored Scope\`"]
    Demo-stand-current-monitored-scope.Device-1-1-1@{ shape: rectangle, label: "1.1.1 Pushbutton sensor 4 Komfort, 4-gang" }
    Demo-stand-current-monitored-scope.Device-1-1-2@{ shape: rectangle, label: "1.1.2 DALI Gateway Tunable White Plus" }
    Demo-stand-current-monitored-scope.Device-1-1-4@{ shape: rectangle, label: "1.1.4 Room controller display compact module" }
    Demo-stand-current-monitored-scope.Light-switch-feedback@{ shape: rectangle, label: "0/0/7 StatusSwitch" }
    Demo-stand-current-monitored-scope.Room-temperature@{ shape: rectangle, label: "2/0/0 Temp Value" }
  end
  subgraph Field-protocol-gateways["\`Протокольные шлюзы и SCADA-контроллеры\`"]
    Field-protocol-gateways.Knx-router@{ shape: rectangle, label: "KNX Segment" }
  end
  subgraph Edge-telemetry-agent["\`Edge Telemetry Agent\`"]
    Edge-telemetry-agent.Collector-runtime@{ shape: rectangle, label: "Collector Runtime" }
  end
  Demo-stand-current-monitored-scope.Device-1-1-1 -. "\`Публикует feedback состояния света 0/0/7\`" .-> Demo-stand-current-monitored-scope.Light-switch-feedback
  Demo-stand-current-monitored-scope.Device-1-1-2 -. "\`Публикует статус светового канала 0/0/7\`" .-> Demo-stand-current-monitored-scope.Light-switch-feedback
  Demo-stand-current-monitored-scope.Device-1-1-4 -. "\`Публикует температуру помещения 2/0/0\`" .-> Demo-stand-current-monitored-scope.Room-temperature
  Demo-stand-current-monitored-scope.Light-switch-feedback -. "\`Поставляет feedback состояния света в текущий read scope\`" .-> Edge-telemetry-agent.Collector-runtime
  Demo-stand-current-monitored-scope.Room-temperature -. "\`Поставляет температуру помещения в текущий read scope\`" .-> Edge-telemetry-agent.Collector-runtime
  Field-protocol-gateways.Knx-router -. "\`Экспонирует group address и телеграммы через KNX/IP\`" .-> Edge-telemetry-agent.Collector-runtime
`;case"c2-edge-telemetry-agent-containers":return`---
title: "C2 Containers"
---
graph TB
  Demo-stand-current-monitored-scope@{ shape: rectangle, label: "Demo Stand Current Monitored Scope" }
  subgraph Field-protocol-gateways["\`Протокольные шлюзы и SCADA-контроллеры\`"]
    Field-protocol-gateways.Knx-router@{ shape: rectangle, label: "KNX Segment" }
    Field-protocol-gateways.Modbus-gateway@{ shape: rectangle, label: "Modbus Gateway" }
    Field-protocol-gateways.Opc-ua-gateway@{ shape: rectangle, label: "OPC UA Server" }
  end
  Service-engineer@{ icon: "fa:user", shape: rounded, label: "Сервисный инженер" }
  subgraph Edge-telemetry-agent["\`Edge Telemetry Agent\`"]
    Edge-telemetry-agent.Collector-runtime@{ shape: rectangle, label: "Collector Runtime" }
    Edge-telemetry-agent.Delivery-worker@{ shape: rectangle, label: "Delivery Worker" }
    Edge-telemetry-agent.Configuration-bundle@{ shape: rectangle, label: "Configuration Bundle" }
    Edge-telemetry-agent.Outbox-store@{ shape: disk, label: "Outbox Store" }
  end
  Monitoring-alarm-platform@{ shape: rectangle, label: "Monitoring & Alarm Platform" }
  Demo-stand-current-monitored-scope -. "\`[...]\`" .-> Edge-telemetry-agent.Collector-runtime
  Edge-telemetry-agent.Collector-runtime -. "\`Загружает описания источников, модель сигналов и runtime-политики\`" .-> Edge-telemetry-agent.Configuration-bundle
  Edge-telemetry-agent.Collector-runtime -. "\`Сохраняет нормализованные события и задания на доставку\`" .-> Edge-telemetry-agent.Outbox-store
  Edge-telemetry-agent.Delivery-worker -. "\`Загружает настройки MQTT, topic contract и retry-политики\`" .-> Edge-telemetry-agent.Configuration-bundle
  Edge-telemetry-agent.Delivery-worker -. "\`Читает ожидающие события и обновляет статус доставки\`" .-> Edge-telemetry-agent.Outbox-store
  Edge-telemetry-agent.Delivery-worker -. "\`Публикует telemetry events и service topics по MQTT 5.0\`" .-> Monitoring-alarm-platform
  Field-protocol-gateways.Knx-router -. "\`Экспонирует group address и телеграммы через KNX/IP\`" .-> Edge-telemetry-agent.Collector-runtime
  Field-protocol-gateways.Modbus-gateway -. "\`Экспонирует registers, coils и дискретные значения через Modbus\`" .-> Edge-telemetry-agent.Collector-runtime
  Field-protocol-gateways.Opc-ua-gateway -. "\`Экспонирует nodes, subscriptions и значения через OPC UA\`" .-> Edge-telemetry-agent.Collector-runtime
  Service-engineer -. "\`Настраивает адаптеры, модель сигналов, polling и доставку\`" .-> Edge-telemetry-agent
`;case"c2-monitoring-alarm-platform-containers":return`---
title: "C2 Containers"
---
graph TB
  Service-engineer@{ icon: "fa:user", shape: rounded, label: "Сервисный инженер" }
  Operator-dispatcher@{ icon: "fa:user", shape: rounded, label: "Оператор / диспетчер" }
  subgraph Monitoring-alarm-platform["\`Monitoring & Alarm Platform\`"]
    Monitoring-alarm-platform.Operator-dashboard@{ shape: rectangle, label: "Operator Dashboard" }
    Monitoring-alarm-platform.Mqtt-ingestion-gateway@{ shape: rectangle, label: "MQTT Ingestion Gateway" }
    Monitoring-alarm-platform.Platform-api@{ shape: rectangle, label: "Platform API" }
    Monitoring-alarm-platform.Alarm-rule-engine@{ shape: rectangle, label: "Alarm Rule Engine" }
    Monitoring-alarm-platform.Notification-service@{ shape: rectangle, label: "Notification Service" }
    Monitoring-alarm-platform.Telemetry-store@{ shape: disk, label: "Telemetry Store" }
  end
  Edge-telemetry-agent@{ shape: rectangle, label: "Edge Telemetry Agent" }
  Notification-channels@{ shape: rectangle, label: "Каналы уведомлений" }
  Service-engineer -. "\`Настраивает правила, получателей и панели мониторинга\`" .-> Monitoring-alarm-platform.Operator-dashboard
  Operator-dispatcher -. "\`Работает с панелями мониторинга, alarm и историей\`" .-> Monitoring-alarm-platform.Operator-dashboard
  Monitoring-alarm-platform.Alarm-rule-engine -. "\`Запускает доставку уведомлений\`" .-> Monitoring-alarm-platform.Notification-service
  Monitoring-alarm-platform.Alarm-rule-engine -. "\`Читает контекст и записывает состояние и историю alarm\`" .-> Monitoring-alarm-platform.Telemetry-store
  Monitoring-alarm-platform.Mqtt-ingestion-gateway -. "\`Передает нормализованные события в Alarm Rule Engine\`" .-> Monitoring-alarm-platform.Alarm-rule-engine
  Monitoring-alarm-platform.Platform-api -. "\`Читает активные alarm и управляет конфигурацией правил в Alarm Rule Engine\`" .-> Monitoring-alarm-platform.Alarm-rule-engine
  Monitoring-alarm-platform.Mqtt-ingestion-gateway -. "\`Сохраняет canonical events и служебные события\`" .-> Monitoring-alarm-platform.Telemetry-store
  Monitoring-alarm-platform.Operator-dashboard -. "\`Запрашивает панели мониторинга, состояние alarm и конфигурацию\`" .-> Monitoring-alarm-platform.Platform-api
  Monitoring-alarm-platform.Platform-api -. "\`Читает телеметрию, историю и временные линии alarm\`" .-> Monitoring-alarm-platform.Telemetry-store
  Monitoring-alarm-platform.Notification-service -. "\`Отправляет email, SMS, push и webhook-уведомления\`" .-> Notification-channels
  Notification-channels -. "\`Доставляют уведомления по alarm и служебные уведомления\`" .-> Operator-dispatcher
`;case"local-mqtt-grafana-dev-harness":return`---
title: "Development - Local MQTT + Grafana Harness"
---
graph TB
  Edge-telemetry-agent@{ shape: rectangle, label: "Edge Telemetry Agent" }
  Service-engineer@{ icon: "fa:user", shape: rounded, label: "Сервисный инженер" }
  Local-grafana@{ shape: rectangle, label: "Local Grafana" }
  Local-mqtt-broker@{ shape: rectangle, label: "Local MQTT Broker" }
  Edge-telemetry-agent -. "\`Публикует telemetry events и service topics в локальный MQTT broker\`" .-> Local-mqtt-broker
  Service-engineer -. "\`Проверяет live MQTT поток, topic tree и dashboard\`" .-> Local-grafana
  Local-grafana -. "\`Подписывается через grafana-mqtt-datasource на live MQTT topics\`" .-> Local-mqtt-broker
`;case"c2-field-devices":return`---
title: "C2 Devices"
---
graph TB
  subgraph Field-devices["\`Полевые устройства и контроллеры\`"]
    Field-devices.Knx-temperature-sensor@{ shape: rectangle, label: "knx-temperature-sensor" }
  end
  subgraph Field-protocol-gateways["\`Протокольные шлюзы и SCADA-контроллеры\`"]
    Field-protocol-gateways.Knx-router@{ shape: rectangle, label: "KNX Segment" }
  end
  Field-devices.Knx-temperature-sensor -. "\`Передают телеграммы, состояния и команды в KNX-сегменте\`" .-> Field-protocol-gateways.Knx-router
`;case"c2-field-protocol-gateways":return`---
title: "C2 Gateways"
---
graph TB
  subgraph Field-devices["\`Полевые устройства и контроллеры\`"]
    Field-devices.Knx-temperature-sensor@{ shape: rectangle, label: "knx-temperature-sensor" }
  end
  subgraph Field-protocol-gateways["\`Протокольные шлюзы и SCADA-контроллеры\`"]
    Field-protocol-gateways.Knx-router@{ shape: rectangle, label: "KNX Segment" }
    Field-protocol-gateways.Modbus-gateway@{ shape: rectangle, label: "Modbus Gateway" }
    Field-protocol-gateways.Opc-ua-gateway@{ shape: rectangle, label: "OPC UA Server" }
  end
  subgraph Edge-telemetry-agent["\`Edge Telemetry Agent\`"]
    Edge-telemetry-agent.Collector-runtime@{ shape: rectangle, label: "Collector Runtime" }
  end
  Field-devices.Knx-temperature-sensor -. "\`Передают телеграммы, состояния и команды в KNX-сегменте\`" .-> Field-protocol-gateways.Knx-router
  Field-protocol-gateways.Knx-router -. "\`Экспонирует group address и телеграммы через KNX/IP\`" .-> Edge-telemetry-agent.Collector-runtime
  Field-protocol-gateways.Modbus-gateway -. "\`Экспонирует registers, coils и дискретные значения через Modbus\`" .-> Edge-telemetry-agent.Collector-runtime
  Field-protocol-gateways.Opc-ua-gateway -. "\`Экспонирует nodes, subscriptions и значения через OPC UA\`" .-> Edge-telemetry-agent.Collector-runtime
`;default:throw new Error("Unknown viewId: "+e)}}const i5=Object.freeze(Object.defineProperty({__proto__:null,mmdSource:o5},Symbol.toStringTag,{value:"Module"}));function l5(e){switch(e){case"index":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=index,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    "demo-stand-current-monitored-scope" [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Demo Stand Current Monitored Scope</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX monitored signals / current read scope</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Текущий набор сигналов demo-стенда, которые<BR/>читает Edge Telemetry Agent.</FONT></TD></TR></TABLE>>,
        likec4_id="demo-stand-current-monitored-scope",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    "edge-telemetry-agent" [color="#7E451D",
        fillcolor="#A35829",
        fontcolor="#FFE0C2",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Edge Telemetry Agent</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Edge collector / normalization / buffering /</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Универсальная edge-система, разворачиваемая<BR/>на объекте рядом с полевыми протоколами и<BR/>отвечающая за сбор данных, нормализацию,<BR/>фильтрацию, буферизацию и доставку событий.</FONT></TD></TR></TABLE>>,
        likec4_id="edge-telemetry-agent",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    "demo-stand-current-monitored-scope" -> "edge-telemetry-agent" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1272t5q",
        minlen=1,
        style=dashed];
    "field-devices" [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Полевые устройства и контроллеры</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Field devices / PLC / RTU</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Датчики, актуаторы, PLC, RTU и локальные<BR/>системы автоматизации на объекте.</FONT></TD></TR></TABLE>>,
        likec4_id="field-devices",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    "field-protocol-gateways" [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Протокольные шлюзы и SCADA-контроллеры</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX / Modbus / OPC UA / SCADA</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Точки подключения к технологическим данным<BR/>через KNX, Modbus, OPC UA и другие<BR/>southbound-протоколы.</FONT></TD></TR></TABLE>>,
        likec4_id="field-protocol-gateways",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    "field-devices" -> "field-protocol-gateways" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Передают телеграммы, состояния и команды<BR/>в KNX-сегменте</FONT></TD></TR></TABLE>>,
        likec4_id=c2wk8h,
        minlen=1,
        style=dashed];
    "service-engineer" [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Сервисный инженер</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Настраивает источники данных, схему сигналов,<BR/>правила доставки и эксплуатационные параметры<BR/>edge-агента и центральной платформы.</FONT></TD></TR></TABLE>>,
        likec4_id="service-engineer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    "local-grafana" [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Local Grafana</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Grafana OSS / grafana-mqtt-datasource /</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Временный dev/test UI из<BR/>infra/local/compose.yaml. Использует<BR/>grafana-mqtt-datasource для live-view MQTT<BR/>payload и не считается частью target<BR/>production architecture.</FONT></TD></TR></TABLE>>,
        likec4_id="local-grafana",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    "service-engineer" -> "local-grafana" [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Проверяет live MQTT поток, topic tree и<BR/>dashboard</FONT></TD></TR></TABLE>>,
        likec4_id="1qtuqvz",
        style=solid];
    "service-engineer" -> "edge-telemetry-agent" [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Настраивает адаптеры, модель сигналов,<BR/>polling и доставку</FONT></TD></TR></TABLE>>,
        likec4_id=cw5zhy,
        style=solid];
    "monitoring-alarm-platform" [color="#7E451D",
        fillcolor="#A35829",
        fontcolor="#FFE0C2",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Monitoring &amp; Alarm Platform</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Cloud monitoring platform / alarm engine /</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Центральная система в облаке/интернете для<BR/>приема событий, хранения телеметрии,<BR/>визуализации, alarm-логики и маршрутизации<BR/>уведомлений.</FONT></TD></TR></TABLE>>,
        likec4_id="monitoring-alarm-platform",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    "service-engineer" -> "monitoring-alarm-platform" [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Настраивает правила alarm, получателей и<BR/>панели мониторинга</FONT></TD></TR></TABLE>>,
        likec4_id="16a5o8z",
        style=solid];
    "field-protocol-gateways" -> "edge-telemetry-agent" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1sivq2o",
        style=dashed];
    "local-mqtt-broker" [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Local MQTT Broker</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Eclipse Mosquitto / localhost:1883 / Docker</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Временный dev/test MQTT broker из<BR/>infra/local/compose.yaml. Используется<BR/>текущей реализацией edge_agent как локальный<BR/>publish target.</FONT></TD></TR></TABLE>>,
        likec4_id="local-mqtt-broker",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    "local-grafana" -> "local-mqtt-broker" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Подписывается через<BR/>grafana-mqtt-datasource на live MQTT<BR/>topics</FONT></TD></TR></TABLE>>,
        likec4_id="1ymjbms",
        style=dashed];
    "edge-telemetry-agent" -> "local-mqtt-broker" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Публикует telemetry events и service<BR/>topics в локальный MQTT broker</FONT></TD></TR></TABLE>>,
        likec4_id=gsfp7x,
        style=dashed];
    "edge-telemetry-agent" -> "monitoring-alarm-platform" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Публикует telemetry events и service<BR/>topics через MQTT</FONT></TD></TR></TABLE>>,
        likec4_id="1cfgwdb",
        style=dashed];
    "notification-channels" [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Каналы уведомлений</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Email / SMS / Push / Webhook</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Email, SMS, push, webhook и другие<BR/>внешние облачные каналы доставки<BR/>тревог и служебных уведомлений.</FONT></TD></TR></TABLE>>,
        likec4_id="notification-channels",
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    "monitoring-alarm-platform" -> "notification-channels" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Маршрутизирует уведомления и эскалации</FONT></TD></TR></TABLE>>,
        likec4_id="134rwii",
        style=dashed];
    "operator-dispatcher" [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Оператор / диспетчер</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Работает с событиями, текущим состоянием<BR/>объекта и alarm через центральную платформу<BR/>мониторинга.</FONT></TD></TR></TABLE>>,
        likec4_id="operator-dispatcher",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    "notification-channels" -> "operator-dispatcher" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Доставляют уведомления по alarm и<BR/>служебные уведомления</FONT></TD></TR></TABLE>>,
        likec4_id="1cg2z5c",
        style=dashed];
    "operator-dispatcher" -> "monitoring-alarm-platform" [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Работает с панелями мониторинга,<BR/>событиями и alarm</FONT></TD></TR></TABLE>>,
        likec4_id="4cjy00",
        style=solid];
}
`;case"deployment-demo-stand-topology":return`digraph {
  likec4_viewId = "deployment-demo-stand-topology";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "TB";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.806;
  ranksep = 1.806;
  pad = 0.209;
  fontname = "Arial";
  newrank = true;
  clusterrank = "global";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "device-1-1-1" [
    likec4_id = "demo-stand.local-lan.tp-line-1-1.device-1-1-1";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">1.1.1 Pushbutton sensor 4 Komfort,<BR/>4-gang</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX TP device</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Панель кнопок с group address для света,<BR/>scene и вентиляции: 0/0/1, 0/0/6, 0/0/7,<BR/>1/0/0, 1/1/0, 1/2/0, 1/3/0, 1/4/0.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "device-1-1-2" [
    likec4_id = "demo-stand.local-lan.tp-line-1-1.device-1-1-2";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">1.1.2 DALI Gateway Tunable White Plus</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX TP to DALI gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Шлюз освещения с адресами<BR/>Switch/StatusSwitch, RGBW и Scene:<BR/>0/0/1-0/0/7.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "device-1-1-3" [
    likec4_id = "demo-stand.local-lan.tp-line-1-1.device-1-1-3";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">1.1.3 Analogaktor 4fach</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX TP actuator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Актуатор вентиляции: VentSwitch, VentDim,<BR/>VentStatus, VentValue по адресам 1/0/0-1/3/0.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "device-1-1-4" [
    likec4_id = "demo-stand.local-lan.tp-line-1-1.device-1-1-4";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">1.1.4 Room controller display compact<BR/>module</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX TP room controller</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Комнатный контроллер с Temperature value<BR/>2/0/0 и сценой 1/4/0.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "public-knx-endpoint" [
    likec4_id = "demo-stand.remote-access.public-knx-endpoint";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Public KNX/IP endpoint</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c7d2fe">203.0.113.234:7171 / UDP / NAT</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Публичная точка входа с пробросом на<BR/>локальный KNX/IP роутер 192.0.2.177:3671.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#6366f1";
    fontcolor = "#eef2ff";
    color = "#4f46e5";
  ];
  "knx-router" [
    likec4_id = "demo-stand.local-lan.knxnet-ip-backbone.knx-router";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Weinzierl KNX IP Router 751</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">192.0.2.177:3671 / UDP / TUNNELING</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Локальная точка входа в KNX/IP и<BR/>маршрутизатор в TP-линию 1.1.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "delivery-worker" [
    likec4_id = "whitelisted-remote-host.developer-network.edge-host.delivery-worker";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Delivery Worker</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Python worker / MQTT publisher</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Фоновый контейнер доставки: читает outbox,<BR/>публикует telemetry events и service topics в<BR/>MQTT topic tree и обновляет статус доставки.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#A35829";
    fontcolor = "#FFE0C2";
    color = "#7E451D";
  ];
  "local-grafana" [
    likec4_id = "whitelisted-remote-host.developer-network.edge-host.local-grafana";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Local Grafana</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Grafana OSS / grafana-mqtt-datasource /</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Временный dev/test UI из<BR/>infra/local/compose.yaml. Использует<BR/>grafana-mqtt-datasource для live-view MQTT<BR/>payload и не считается частью target<BR/>production architecture.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "collector-runtime" [
    likec4_id = "whitelisted-remote-host.developer-network.edge-host.collector-runtime";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Collector Runtime</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Python service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Основной runtime edge-агента:<BR/>southbound-адаптеры, сбор данных,<BR/>нормализация, фильтрация изменений и<BR/>постановка событий в outbox.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#A35829";
    fontcolor = "#FFE0C2";
    color = "#7E451D";
  ];
  "mqtt-ingestion-gateway" [
    likec4_id = "monitoring-cloud.public-cloud.mqtt-ingest-host.mqtt-ingestion-gateway";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">MQTT Ingestion Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">MQTT broker / ingestion service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Принимает MQTT telemetry events и service<BR/>topics от edge-агентов, восстанавливает<BR/>routing context из topic, валидирует payload<BR/>и передает canonical events на хранение и в<BR/>Alarm Rule Engine.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#A35829";
    fontcolor = "#FFE0C2";
    color = "#7E451D";
  ];
  "local-mqtt-broker" [
    likec4_id = "whitelisted-remote-host.developer-network.edge-host.local-mqtt-broker";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Local MQTT Broker</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Eclipse Mosquitto / localhost:1883 / Docker</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Временный dev/test MQTT broker из<BR/>infra/local/compose.yaml. Используется<BR/>текущей реализацией edge_agent как локальный<BR/>publish target.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "configuration-bundle" [
    likec4_id = "whitelisted-remote-host.developer-network.edge-host.configuration-bundle";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Configuration Bundle</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">YAML files</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Локальный набор конфигурации источников,<BR/>модели сигналов, polling-политик и параметров<BR/>доставки.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#A35829";
    fontcolor = "#FFE0C2";
    color = "#7E451D";
  ];
  "outbox-store" [
    likec4_id = "whitelisted-remote-host.developer-network.edge-host.outbox-store";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Outbox Store</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">SQLite</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Локальное надежное хранилище исходящих<BR/>событий, статусов доставки и метаданных<BR/>повторных попыток.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0";
    width = 4.445;
    height = 2.5;
    fillcolor = "#A35829";
    fontcolor = "#FFE0C2";
    color = "#7E451D";
    penwidth = 2;
    shape = "cylinder";
  ];
  subgraph "cluster_demo-stand" {
    likec4_id = "demo-stand";
    likec4_level = 0;
    likec4_depth = 3;
    fillcolor = "#1c417d";
    color = "#1c356c";
    style = "filled";
    margin = 50;
    label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>DEMO STAND</B></FONT>>;
    subgraph "cluster_local-lan" {
      likec4_id = "demo-stand.local-lan";
      likec4_level = 1;
      likec4_depth = 2;
      fillcolor = "#0f4460";
      color = "#0d374e";
      style = "filled";
      margin = 50;
      label = <<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>LOCAL LAN 192.0.2.0/24</B></FONT>>;
      subgraph "cluster_tp-line-1-1" {
        likec4_id = "demo-stand.local-lan.tp-line-1-1";
        likec4_level = 2;
        likec4_depth = 1;
        fillcolor = "#194b9e";
        color = "#1b3d88";
        style = "filled";
        margin = 50;
        label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>KNX TP LINE 1.1</B></FONT>>;
        "device-1-1-1";
        "device-1-1-2";
        "device-1-1-3";
        "device-1-1-4";
      }
      subgraph "cluster_knxnet-ip-backbone" {
        likec4_id = "demo-stand.local-lan.knxnet-ip-backbone";
        likec4_level = 2;
        likec4_depth = 1;
        fillcolor = "#194b9e";
        color = "#1b3d88";
        style = "filled";
        margin = 32;
        label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>KNXNET/IP BACKBONE</B></FONT>>;
        "knx-router";
      }
    }
    subgraph "cluster_remote-access" {
      likec4_id = "demo-stand.remote-access";
      likec4_level = 1;
      likec4_depth = 1;
      fillcolor = "#0d4b6c";
      color = "#0b3c57";
      style = "filled";
      margin = 32;
      label = <<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>REMOTE ACCESS</B></FONT>>;
      "public-knx-endpoint";
    }
  }
  subgraph "cluster_whitelisted-remote-host" {
    likec4_id = "whitelisted-remote-host";
    likec4_level = 0;
    likec4_depth = 2;
    fillcolor = "#1a468d";
    color = "#1c3979";
    style = "filled";
    margin = 32;
    label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>WHITELISTED REMOTE HOST</B></FONT>>;
    subgraph "cluster_edge-host" {
      likec4_id = "whitelisted-remote-host.developer-network.edge-host";
      likec4_level = 1;
      likec4_depth = 1;
      fillcolor = "#5a3620";
      color = "#462a17";
      style = "filled";
      margin = 50;
      label = <<FONT POINT-SIZE="11" COLOR="#f9b27cb3"><B>DEVELOPER WORKSTATION</B></FONT>>;
      "delivery-worker";
      "local-grafana";
      "collector-runtime";
      "local-mqtt-broker";
      "configuration-bundle";
      "outbox-store";
    }
  }
  "public-knx-endpoint" -> "knx-router" [
    likec4_id = "14doyry";
    style = "dashed";
    weight = 4;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Проброс UDP 7171 -&gt; 3671 для удаленного<BR/>KNX/IP доступа</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "knx-router" -> "collector-runtime" [
    likec4_id = "1dncw9";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Экспонирует group address и телеграммы<BR/>через KNX/IP</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "collector-runtime" -> "configuration-bundle" [
    likec4_id = "ql7ddz";
    style = "dashed";
    weight = 7;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Загружает описания источников, модель<BR/>сигналов и runtime-политики</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "delivery-worker" -> "configuration-bundle" [
    likec4_id = "hk8qcy";
    style = "dashed";
    weight = 7;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Загружает настройки MQTT, topic contract<BR/>и retry-политики</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "collector-runtime" -> "outbox-store" [
    likec4_id = "os7a2v";
    style = "dashed";
    weight = 7;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Сохраняет нормализованные события и<BR/>задания на доставку</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "delivery-worker" -> "outbox-store" [
    likec4_id = "zga1te";
    style = "dashed";
    weight = 7;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Читает ожидающие события и обновляет<BR/>статус доставки</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "delivery-worker" -> "local-mqtt-broker" [
    likec4_id = "55nc3t";
    style = "dashed";
    weight = 7;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Публикует в локальный broker<BR/>mqtt://localhost:1883</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "local-grafana" -> "local-mqtt-broker" [
    likec4_id = "1rv9j8y";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Подписывается через<BR/>grafana-mqtt-datasource на live MQTT<BR/>topics</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "collector-runtime" -> "public-knx-endpoint" [
    likec4_id = "14yh323";
    style = "dashed";
    weight = 2;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Подключается к стенду через whitelisted<BR/>public KNX/IP endpoint</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "delivery-worker" -> "mqtt-ingestion-gateway" [
    likec4_id = "ovflhp";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Публикует telemetry events и service<BR/>topics по MQTT 5.0</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "device-1-1-4" -> "knx-router" [
    likec4_id = "1q4xxx4";
    style = "dashed";
    ltail = "cluster_tp-line-1-1";
    weight = 6;
    xlabel = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Передает KNX TP телеграммы в роутер<BR/>1.1.0</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case"deployment-demo-stand-current-implementation":return`digraph {
  likec4_viewId = "deployment-demo-stand-current-implementation";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "TB";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.806;
  ranksep = 1.806;
  pad = 0.209;
  fontname = "Arial";
  newrank = true;
  clusterrank = "global";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "device-1-1-1" [
    likec4_id = "demo-stand.local-lan.tp-line-1-1.device-1-1-1";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">1.1.1 Pushbutton sensor 4 Komfort,<BR/>4-gang</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX TP device</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Панель кнопок с group address для света,<BR/>scene и вентиляции: 0/0/1, 0/0/6, 0/0/7,<BR/>1/0/0, 1/1/0, 1/2/0, 1/3/0, 1/4/0.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "device-1-1-2" [
    likec4_id = "demo-stand.local-lan.tp-line-1-1.device-1-1-2";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">1.1.2 DALI Gateway Tunable White Plus</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX TP to DALI gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Шлюз освещения с адресами<BR/>Switch/StatusSwitch, RGBW и Scene:<BR/>0/0/1-0/0/7.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "device-1-1-3" [
    likec4_id = "demo-stand.local-lan.tp-line-1-1.device-1-1-3";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">1.1.3 Analogaktor 4fach</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX TP actuator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Актуатор вентиляции: VentSwitch, VentDim,<BR/>VentStatus, VentValue по адресам 1/0/0-1/3/0.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "device-1-1-4" [
    likec4_id = "demo-stand.local-lan.tp-line-1-1.device-1-1-4";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">1.1.4 Room controller display compact<BR/>module</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX TP room controller</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Комнатный контроллер с Temperature value<BR/>2/0/0 и сценой 1/4/0.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "public-knx-endpoint" [
    likec4_id = "demo-stand.remote-access.public-knx-endpoint";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Public KNX/IP endpoint</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c7d2fe">203.0.113.234:7171 / UDP / NAT</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Публичная точка входа с пробросом на<BR/>локальный KNX/IP роутер 192.0.2.177:3671.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#6366f1";
    fontcolor = "#eef2ff";
    color = "#4f46e5";
  ];
  "knx-router" [
    likec4_id = "demo-stand.local-lan.knxnet-ip-backbone.knx-router";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Weinzierl KNX IP Router 751</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">192.0.2.177:3671 / UDP / TUNNELING</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Локальная точка входа в KNX/IP и<BR/>маршрутизатор в TP-линию 1.1.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "delivery-worker" [
    likec4_id = "whitelisted-remote-host.developer-network.edge-host.delivery-worker";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Delivery Worker</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Python worker / MQTT publisher</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Фоновый контейнер доставки: читает outbox,<BR/>публикует telemetry events и service topics в<BR/>MQTT topic tree и обновляет статус доставки.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#A35829";
    fontcolor = "#FFE0C2";
    color = "#7E451D";
  ];
  "local-grafana" [
    likec4_id = "whitelisted-remote-host.developer-network.edge-host.local-grafana";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Local Grafana</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Grafana OSS / grafana-mqtt-datasource /</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Временный dev/test UI из<BR/>infra/local/compose.yaml. Использует<BR/>grafana-mqtt-datasource для live-view MQTT<BR/>payload и не считается частью target<BR/>production architecture.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "collector-runtime" [
    likec4_id = "whitelisted-remote-host.developer-network.edge-host.collector-runtime";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Collector Runtime</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Python service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Основной runtime edge-агента:<BR/>southbound-адаптеры, сбор данных,<BR/>нормализация, фильтрация изменений и<BR/>постановка событий в outbox.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#A35829";
    fontcolor = "#FFE0C2";
    color = "#7E451D";
  ];
  "local-mqtt-broker" [
    likec4_id = "whitelisted-remote-host.developer-network.edge-host.local-mqtt-broker";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Local MQTT Broker</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Eclipse Mosquitto / localhost:1883 / Docker</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Временный dev/test MQTT broker из<BR/>infra/local/compose.yaml. Используется<BR/>текущей реализацией edge_agent как локальный<BR/>publish target.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "configuration-bundle" [
    likec4_id = "whitelisted-remote-host.developer-network.edge-host.configuration-bundle";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Configuration Bundle</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">YAML files</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Локальный набор конфигурации источников,<BR/>модели сигналов, polling-политик и параметров<BR/>доставки.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#A35829";
    fontcolor = "#FFE0C2";
    color = "#7E451D";
  ];
  "outbox-store" [
    likec4_id = "whitelisted-remote-host.developer-network.edge-host.outbox-store";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Outbox Store</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">SQLite</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Локальное надежное хранилище исходящих<BR/>событий, статусов доставки и метаданных<BR/>повторных попыток.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0";
    width = 4.445;
    height = 2.5;
    fillcolor = "#A35829";
    fontcolor = "#FFE0C2";
    color = "#7E451D";
    penwidth = 2;
    shape = "cylinder";
  ];
  subgraph "cluster_demo-stand" {
    likec4_id = "demo-stand";
    likec4_level = 0;
    likec4_depth = 3;
    fillcolor = "#1c417d";
    color = "#1c356c";
    style = "filled";
    margin = 50;
    label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>DEMO STAND</B></FONT>>;
    subgraph "cluster_local-lan" {
      likec4_id = "demo-stand.local-lan";
      likec4_level = 1;
      likec4_depth = 2;
      fillcolor = "#0f4460";
      color = "#0d374e";
      style = "filled";
      margin = 50;
      label = <<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>LOCAL LAN 192.0.2.0/24</B></FONT>>;
      subgraph "cluster_tp-line-1-1" {
        likec4_id = "demo-stand.local-lan.tp-line-1-1";
        likec4_level = 2;
        likec4_depth = 1;
        fillcolor = "#194b9e";
        color = "#1b3d88";
        style = "filled";
        margin = 50;
        label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>KNX TP LINE 1.1</B></FONT>>;
        "device-1-1-1";
        "device-1-1-2";
        "device-1-1-3";
        "device-1-1-4";
      }
      subgraph "cluster_knxnet-ip-backbone" {
        likec4_id = "demo-stand.local-lan.knxnet-ip-backbone";
        likec4_level = 2;
        likec4_depth = 1;
        fillcolor = "#194b9e";
        color = "#1b3d88";
        style = "filled";
        margin = 32;
        label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>KNXNET/IP BACKBONE</B></FONT>>;
        "knx-router";
      }
    }
    subgraph "cluster_remote-access" {
      likec4_id = "demo-stand.remote-access";
      likec4_level = 1;
      likec4_depth = 1;
      fillcolor = "#0d4b6c";
      color = "#0b3c57";
      style = "filled";
      margin = 32;
      label = <<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>REMOTE ACCESS</B></FONT>>;
      "public-knx-endpoint";
    }
  }
  subgraph "cluster_whitelisted-remote-host" {
    likec4_id = "whitelisted-remote-host";
    likec4_level = 0;
    likec4_depth = 2;
    fillcolor = "#1a468d";
    color = "#1c3979";
    style = "filled";
    margin = 32;
    label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>WHITELISTED REMOTE HOST</B></FONT>>;
    subgraph "cluster_edge-host" {
      likec4_id = "whitelisted-remote-host.developer-network.edge-host";
      likec4_level = 1;
      likec4_depth = 1;
      fillcolor = "#5a3620";
      color = "#462a17";
      style = "filled";
      margin = 50;
      label = <<FONT POINT-SIZE="11" COLOR="#f9b27cb3"><B>DEVELOPER WORKSTATION</B></FONT>>;
      "delivery-worker";
      "local-grafana";
      "collector-runtime";
      "local-mqtt-broker";
      "configuration-bundle";
      "outbox-store";
    }
  }
  "public-knx-endpoint" -> "knx-router" [
    likec4_id = "14doyry";
    style = "dashed";
    weight = 4;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Проброс UDP 7171 -&gt; 3671 для удаленного<BR/>KNX/IP доступа</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "knx-router" -> "collector-runtime" [
    likec4_id = "1dncw9";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Экспонирует group address и телеграммы<BR/>через KNX/IP</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "collector-runtime" -> "configuration-bundle" [
    likec4_id = "ql7ddz";
    style = "dashed";
    weight = 7;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Загружает описания источников, модель<BR/>сигналов и runtime-политики</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "delivery-worker" -> "configuration-bundle" [
    likec4_id = "hk8qcy";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Загружает настройки MQTT, topic contract<BR/>и retry-политики</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "collector-runtime" -> "outbox-store" [
    likec4_id = "os7a2v";
    style = "dashed";
    weight = 7;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Сохраняет нормализованные события и<BR/>задания на доставку</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "delivery-worker" -> "outbox-store" [
    likec4_id = "zga1te";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Читает ожидающие события и обновляет<BR/>статус доставки</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "delivery-worker" -> "local-mqtt-broker" [
    likec4_id = "55nc3t";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Публикует в локальный broker<BR/>mqtt://localhost:1883</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "local-grafana" -> "local-mqtt-broker" [
    likec4_id = "1rv9j8y";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Подписывается через<BR/>grafana-mqtt-datasource на live MQTT<BR/>topics</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "collector-runtime" -> "public-knx-endpoint" [
    likec4_id = "14yh323";
    style = "dashed";
    weight = 2;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Подключается к стенду через whitelisted<BR/>public KNX/IP endpoint</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "device-1-1-4" -> "knx-router" [
    likec4_id = "1q4xxx4";
    style = "dashed";
    ltail = "cluster_tp-line-1-1";
    weight = 6;
    xlabel = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Передает KNX TP телеграммы в роутер<BR/>1.1.0</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case"demo-stand-current-monitored-points":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="demo-stand-current-monitored-points",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph "cluster_demo-stand-current-monitored-scope" {
        graph [color="#0b3c57",
            fillcolor="#0d4b6c",
            label=<<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>DEMO STAND CURRENT MONITORED SCOPE</B></FONT>>,
            likec4_depth=1,
            likec4_id="demo-stand-current-monitored-scope",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        "device-1-1-1" [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group="demo-stand-current-monitored-scope",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">1.1.1 Pushbutton sensor 4 Komfort,<BR/>4-gang</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX TP device</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Кнопочная панель, участвующая в публикации<BR/>feedback состояния света.</FONT></TD></TR></TABLE>>,
            likec4_id="demo-stand-current-monitored-scope.device-1-1-1",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        "device-1-1-2" [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group="demo-stand-current-monitored-scope",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">1.1.2 DALI Gateway Tunable White Plus</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX TP to DALI gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">DALI gateway, публикующий статус светового<BR/>канала.</FONT></TD></TR></TABLE>>,
            likec4_id="demo-stand-current-monitored-scope.device-1-1-2",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        "device-1-1-4" [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group="demo-stand-current-monitored-scope",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">1.1.4 Room controller display compact<BR/>module</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX TP room controller</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Комнатный контроллер, публикующий температуру<BR/>помещения.</FONT></TD></TR></TABLE>>,
            likec4_id="demo-stand-current-monitored-scope.device-1-1-4",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        "light-switch-feedback" [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group="demo-stand-current-monitored-scope",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">0/0/7 StatusSwitch</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX DPT 1.001 / feedback</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Фактически читаемая точка состояния света.</FONT></TD></TR></TABLE>>,
            likec4_id="demo-stand-current-monitored-scope.light-switch-feedback",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        "room-temperature" [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group="demo-stand-current-monitored-scope",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">2/0/0 Temp Value</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX DPT 9.xxx / room temperature</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Фактически читаемая точка температуры<BR/>помещения.</FONT></TD></TR></TABLE>>,
            likec4_id="demo-stand-current-monitored-scope.room-temperature",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph "cluster_field-protocol-gateways" {
        graph [color="#0b3c57",
            fillcolor="#0d4b6c",
            label=<<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>ПРОТОКОЛЬНЫЕ ШЛЮЗЫ И SCADA-КОНТРОЛЛЕРЫ</B></FONT>>,
            likec4_depth=1,
            likec4_id="field-protocol-gateways",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        "knx-router" [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">KNX Segment</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX / KNXnet-IP</FONT></TD></TR></TABLE>>,
            likec4_id="field-protocol-gateways.knx-router",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
    }
    subgraph "cluster_edge-telemetry-agent" {
        graph [color="#462a17",
            fillcolor="#5a3620",
            label=<<FONT POINT-SIZE="11" COLOR="#f9b27cb3"><B>EDGE TELEMETRY AGENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="edge-telemetry-agent",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        "collector-runtime" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Collector Runtime</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Python service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Основной runtime edge-агента:<BR/>southbound-адаптеры, сбор данных,<BR/>нормализация, фильтрация изменений и<BR/>постановка событий в outbox.</FONT></TD></TR></TABLE>>,
            likec4_id="edge-telemetry-agent.collector-runtime",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    "device-1-1-1" -> "light-switch-feedback" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Публикует feedback состояния света 0/0/7</FONT></TD></TR></TABLE>>,
        likec4_id=moi6x7,
        minlen=1,
        style=dashed,
        weight=3];
    "device-1-1-2" -> "light-switch-feedback" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Публикует статус светового канала 0/0/7</FONT></TD></TR></TABLE>>,
        likec4_id="1sohalk",
        minlen=1,
        style=dashed,
        weight=3];
    "device-1-1-4" -> "room-temperature" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Публикует температуру помещения 2/0/0</FONT></TD></TR></TABLE>>,
        likec4_id=r5yyd,
        minlen=1,
        style=dashed,
        weight=3];
    "knx-router" -> "collector-runtime" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Экспонирует group address и телеграммы<BR/>через KNX/IP</FONT></TD></TR></TABLE>>,
        likec4_id=g1oj49,
        minlen=1,
        style=dashed];
    "light-switch-feedback" -> "collector-runtime" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Поставляет feedback состояния света в<BR/>текущий read scope</FONT></TD></TR></TABLE>>,
        likec4_id="6c0ua1",
        style=dashed];
    "room-temperature" -> "collector-runtime" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Поставляет температуру помещения в<BR/>текущий read scope</FONT></TD></TR></TABLE>>,
        likec4_id="1t1ianm",
        style=dashed];
}
`;case"c2-field-devices":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="c2-field-devices",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph "cluster_field-devices" {
        graph [color="#0b3c57",
            fillcolor="#0d4b6c",
            label=<<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>ПОЛЕВЫЕ УСТРОЙСТВА И КОНТРОЛЛЕРЫ</B></FONT>>,
            likec4_depth=1,
            likec4_id="field-devices",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        "knx-temperature-sensor" [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">knx-temperature-sensor</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Датчик температуры</FONT></TD></TR></TABLE>>,
            likec4_id="field-devices.knx-temperature-sensor",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph "cluster_field-protocol-gateways" {
        graph [color="#0b3c57",
            fillcolor="#0d4b6c",
            label=<<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>ПРОТОКОЛЬНЫЕ ШЛЮЗЫ И SCADA-КОНТРОЛЛЕРЫ</B></FONT>>,
            likec4_depth=1,
            likec4_id="field-protocol-gateways",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        "knx-router" [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">KNX Segment</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX / KNXnet-IP</FONT></TD></TR></TABLE>>,
            likec4_id="field-protocol-gateways.knx-router",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
    }
    "knx-temperature-sensor" -> "knx-router" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Передают телеграммы, состояния и команды<BR/>в KNX-сегменте</FONT></TD></TR></TABLE>>,
        likec4_id="1c8khzh",
        style=dashed,
        weight=3];
}
`;case"c2-field-protocol-gateways":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="c2-field-protocol-gateways",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph "cluster_field-devices" {
        graph [color="#0b3c57",
            fillcolor="#0d4b6c",
            label=<<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>ПОЛЕВЫЕ УСТРОЙСТВА И КОНТРОЛЛЕРЫ</B></FONT>>,
            likec4_depth=1,
            likec4_id="field-devices",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        "knx-temperature-sensor" [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">knx-temperature-sensor</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Датчик температуры</FONT></TD></TR></TABLE>>,
            likec4_id="field-devices.knx-temperature-sensor",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph "cluster_field-protocol-gateways" {
        graph [color="#0b3c57",
            fillcolor="#0d4b6c",
            label=<<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>ПРОТОКОЛЬНЫЕ ШЛЮЗЫ И SCADA-КОНТРОЛЛЕРЫ</B></FONT>>,
            likec4_depth=1,
            likec4_id="field-protocol-gateways",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        "knx-router" [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">KNX Segment</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX / KNXnet-IP</FONT></TD></TR></TABLE>>,
            likec4_id="field-protocol-gateways.knx-router",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        "modbus-gateway" [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Modbus Gateway</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Modbus TCP / Modbus RTU</FONT></TD></TR></TABLE>>,
            likec4_id="field-protocol-gateways.modbus-gateway",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        "opc-ua-gateway" [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">OPC UA Server</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">OPC UA</FONT></TD></TR></TABLE>>,
            likec4_id="field-protocol-gateways.opc-ua-gateway",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
    }
    subgraph "cluster_edge-telemetry-agent" {
        graph [color="#462a17",
            fillcolor="#5a3620",
            label=<<FONT POINT-SIZE="11" COLOR="#f9b27cb3"><B>EDGE TELEMETRY AGENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="edge-telemetry-agent",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        "collector-runtime" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Collector Runtime</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Python service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Основной runtime edge-агента:<BR/>southbound-адаптеры, сбор данных,<BR/>нормализация, фильтрация изменений и<BR/>постановка событий в outbox.</FONT></TD></TR></TABLE>>,
            likec4_id="edge-telemetry-agent.collector-runtime",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    "knx-temperature-sensor" -> "knx-router" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Передают телеграммы, состояния и команды<BR/>в KNX-сегменте</FONT></TD></TR></TABLE>>,
        likec4_id="1c8khzh",
        minlen=1,
        style=dashed];
    "knx-router" -> "collector-runtime" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Экспонирует group address и телеграммы<BR/>через KNX/IP</FONT></TD></TR></TABLE>>,
        likec4_id=g1oj49,
        style=dashed];
    "modbus-gateway" -> "collector-runtime" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Экспонирует registers, coils и<BR/>дискретные значения через Modbus</FONT></TD></TR></TABLE>>,
        likec4_id="1wgfup1",
        minlen=1,
        style=dashed];
    "opc-ua-gateway" -> "collector-runtime" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Экспонирует nodes, subscriptions и<BR/>значения через OPC UA</FONT></TD></TR></TABLE>>,
        likec4_id="6cczmq",
        minlen=1,
        style=dashed];
}
`;case"local-mqtt-grafana-dev-harness":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_rankBlocks=2,
        likec4_viewId="local-mqtt-grafana-dev-harness",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    {
        graph [rank=source];
        "edge-telemetry-agent" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Edge Telemetry Agent</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Edge collector / normalization / buffering /</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Универсальная edge-система, разворачиваемая<BR/>на объекте рядом с полевыми протоколами и<BR/>отвечающая за сбор данных, нормализацию,<BR/>фильтрацию, буферизацию и доставку событий.</FONT></TD></TR></TABLE>>,
            likec4_id="edge-telemetry-agent",
            likec4_level=0,
            margin="0.223,0.223",
            width=4.445];
        "service-engineer" [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Сервисный инженер</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Настраивает источники данных, схему сигналов,<BR/>правила доставки и эксплуатационные параметры<BR/>edge-агента и центральной платформы.</FONT></TD></TR></TABLE>>,
            likec4_id="service-engineer",
            likec4_level=0,
            margin="0.223,0.223",
            width=4.445];
    }
    {
        graph [rank=same];
        "local-grafana" [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Local Grafana</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Grafana OSS / grafana-mqtt-datasource /</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Временный dev/test UI из<BR/>infra/local/compose.yaml. Использует<BR/>grafana-mqtt-datasource для live-view MQTT<BR/>payload и не считается частью target<BR/>production architecture.</FONT></TD></TR></TABLE>>,
            likec4_id="local-grafana",
            likec4_level=0,
            margin="0.223,0.223",
            width=4.445];
        "local-mqtt-broker" [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Local MQTT Broker</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Eclipse Mosquitto / localhost:1883 / Docker</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Временный dev/test MQTT broker из<BR/>infra/local/compose.yaml. Используется<BR/>текущей реализацией edge_agent как локальный<BR/>publish target.</FONT></TD></TR></TABLE>>,
            likec4_id="local-mqtt-broker",
            likec4_level=0,
            margin="0.223,0.223",
            width=4.445];
    }
    "edge-telemetry-agent" -> "local-mqtt-broker" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Публикует telemetry events и service<BR/>topics в локальный MQTT broker</FONT></TD></TR></TABLE>>,
        likec4_id=gsfp7x,
        minlen=1,
        style=dashed];
    "service-engineer" -> "local-grafana" [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Проверяет live MQTT поток, topic tree и<BR/>dashboard</FONT></TD></TR></TABLE>>,
        likec4_id="1qtuqvz",
        minlen=1,
        style=solid];
    "local-grafana" -> "local-mqtt-broker" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Подписывается через<BR/>grafana-mqtt-datasource на live MQTT<BR/>topics</FONT></TD></TR></TABLE>>,
        likec4_id="1ymjbms",
        style=dashed];
}
`;case"c2-edge-telemetry-agent-containers":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_rankBlocks=2,
        likec4_viewId="c2-edge-telemetry-agent-containers",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph "cluster_field-protocol-gateways" {
        graph [color="#0b3c57",
            fillcolor="#0d4b6c",
            label=<<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>ПРОТОКОЛЬНЫЕ ШЛЮЗЫ И SCADA-КОНТРОЛЛЕРЫ</B></FONT>>,
            likec4_depth=1,
            likec4_id="field-protocol-gateways",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        "knx-router" [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">KNX Segment</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX / KNXnet-IP</FONT></TD></TR></TABLE>>,
            likec4_id="field-protocol-gateways.knx-router",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        "modbus-gateway" [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Modbus Gateway</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Modbus TCP / Modbus RTU</FONT></TD></TR></TABLE>>,
            likec4_id="field-protocol-gateways.modbus-gateway",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        "opc-ua-gateway" [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">OPC UA Server</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">OPC UA</FONT></TD></TR></TABLE>>,
            likec4_id="field-protocol-gateways.opc-ua-gateway",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
    }
    subgraph "cluster_edge-telemetry-agent" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>EDGE TELEMETRY AGENT</B></FONT>>,
            likec4_depth=1,
            likec4_id="edge-telemetry-agent",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        "collector-runtime" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            group="edge-telemetry-agent",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Collector Runtime</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Python service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Основной runtime edge-агента:<BR/>southbound-адаптеры, сбор данных,<BR/>нормализация, фильтрация изменений и<BR/>постановка событий в outbox.</FONT></TD></TR></TABLE>>,
            likec4_id="edge-telemetry-agent.collector-runtime",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        "delivery-worker" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            group="edge-telemetry-agent",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Delivery Worker</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Python worker / MQTT publisher</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Фоновый контейнер доставки: читает outbox,<BR/>публикует telemetry events и service topics в<BR/>MQTT topic tree и обновляет статус доставки.</FONT></TD></TR></TABLE>>,
            likec4_id="edge-telemetry-agent.delivery-worker",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        "configuration-bundle" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            group="edge-telemetry-agent",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Configuration Bundle</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">YAML files</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Локальный набор конфигурации источников,<BR/>модели сигналов, polling-политик и параметров<BR/>доставки.</FONT></TD></TR></TABLE>>,
            likec4_id="edge-telemetry-agent.configuration-bundle",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        "outbox-store" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            group="edge-telemetry-agent",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Outbox Store</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">SQLite</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Локальное надежное хранилище исходящих<BR/>событий, статусов доставки и метаданных<BR/>повторных попыток.</FONT></TD></TR></TABLE>>,
            likec4_id="edge-telemetry-agent.outbox-store",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    {
        graph [rank=source];
        "service-engineer" [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Сервисный инженер</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Настраивает источники данных, схему сигналов,<BR/>правила доставки и эксплуатационные параметры<BR/>edge-агента и центральной платформы.</FONT></TD></TR></TABLE>>,
            likec4_id="service-engineer",
            likec4_level=0,
            margin="0.223,0.223",
            width=4.445];
    }
    {
        graph [rank=sink];
        "monitoring-alarm-platform" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Monitoring &amp; Alarm Platform</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Cloud monitoring platform / alarm engine /</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Центральная система в облаке/интернете для<BR/>приема событий, хранения телеметрии,<BR/>визуализации, alarm-логики и маршрутизации<BR/>уведомлений.</FONT></TD></TR></TABLE>>,
            likec4_id="monitoring-alarm-platform",
            likec4_level=0,
            margin="0.223,0.223",
            width=4.445];
    }
    "demo-stand-current-monitored-scope" [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Demo Stand Current Monitored Scope</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX monitored signals / current read scope</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Текущий набор сигналов demo-стенда, которые<BR/>читает Edge Telemetry Agent.</FONT></TD></TR></TABLE>>,
        likec4_id="demo-stand-current-monitored-scope",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    "demo-stand-current-monitored-scope" -> "collector-runtime" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="2cx3pe",
        minlen=1,
        style=dashed,
        weight=2];
    "service-engineer" -> "collector-runtime" [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        lhead="cluster_edge-telemetry-agent",
        likec4_id=cw5zhy,
        minlen=1,
        style=solid,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Настраивает адаптеры, модель сигналов,<BR/>polling и доставку</FONT></TD></TR></TABLE>>];
    "knx-router" -> "collector-runtime" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Экспонирует group address и телеграммы<BR/>через KNX/IP</FONT></TD></TR></TABLE>>,
        likec4_id=g1oj49,
        minlen=1,
        style=dashed];
    "modbus-gateway" -> "collector-runtime" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Экспонирует registers, coils и<BR/>дискретные значения через Modbus</FONT></TD></TR></TABLE>>,
        likec4_id="1wgfup1",
        minlen=1,
        style=dashed];
    "opc-ua-gateway" -> "collector-runtime" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Экспонирует nodes, subscriptions и<BR/>значения через OPC UA</FONT></TD></TR></TABLE>>,
        likec4_id="6cczmq",
        minlen=1,
        style=dashed];
    "collector-runtime" -> "configuration-bundle" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Загружает описания источников, модель<BR/>сигналов и runtime-политики</FONT></TD></TR></TABLE>>,
        likec4_id="1tn9f5d",
        style=dashed,
        weight=3];
    "collector-runtime" -> "outbox-store" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Сохраняет нормализованные события и<BR/>задания на доставку</FONT></TD></TR></TABLE>>,
        likec4_id=ekpvap,
        style=dashed,
        weight=3];
    "delivery-worker" -> "configuration-bundle" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Загружает настройки MQTT, topic contract<BR/>и retry-политики</FONT></TD></TR></TABLE>>,
        likec4_id=lamun8,
        style=dashed,
        weight=2];
    "delivery-worker" -> "outbox-store" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Читает ожидающие события и обновляет<BR/>статус доставки</FONT></TD></TR></TABLE>>,
        likec4_id="138i2jo",
        style=dashed,
        weight=2];
    "delivery-worker" -> "monitoring-alarm-platform" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Публикует telemetry events и service<BR/>topics по MQTT 5.0</FONT></TD></TR></TABLE>>,
        likec4_id=mcfzkm,
        minlen=1,
        style=dashed];
}
`;case"c2-monitoring-alarm-platform-containers":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_rankBlocks=2,
        likec4_viewId="c2-monitoring-alarm-platform-containers",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph "cluster_monitoring-alarm-platform" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>MONITORING &amp; ALARM PLATFORM</B></FONT>>,
            likec4_depth=1,
            likec4_id="monitoring-alarm-platform",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        "operator-dashboard" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            group="monitoring-alarm-platform",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Operator Dashboard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Web SPA</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Веб-интерфейс для операторов и инженеров:<BR/>панели мониторинга, состояние alarm, история<BR/>событий и настройка правил.</FONT></TD></TR></TABLE>>,
            likec4_id="monitoring-alarm-platform.operator-dashboard",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        "mqtt-ingestion-gateway" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            group="monitoring-alarm-platform",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">MQTT Ingestion Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">MQTT broker / ingestion service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Принимает MQTT telemetry events и service<BR/>topics от edge-агентов, восстанавливает<BR/>routing context из topic, валидирует payload<BR/>и передает canonical events на хранение и в<BR/>Alarm Rule Engine.</FONT></TD></TR></TABLE>>,
            likec4_id="monitoring-alarm-platform.mqtt-ingestion-gateway",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        "platform-api" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            group="monitoring-alarm-platform",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Platform API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">HTTP API / backend service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Backend API для операторского интерфейса,<BR/>состояния alarm, истории событий,<BR/>конфигурации правил и политик уведомлений.</FONT></TD></TR></TABLE>>,
            likec4_id="monitoring-alarm-platform.platform-api",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        "alarm-rule-engine" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            group="monitoring-alarm-platform",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Alarm Rule Engine</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Rule engine / stream processor</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Обрабатывает входящие события по правилам,<BR/>ведет жизненный цикл alarm и инициирует<BR/>уведомления и эскалации.</FONT></TD></TR></TABLE>>,
            likec4_id="monitoring-alarm-platform.alarm-rule-engine",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        "notification-service" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            group="monitoring-alarm-platform",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Notification Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Worker / notification gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Маршрутизирует уведомления во внешние каналы<BR/>по alarm-политикам и правилам эскалации.</FONT></TD></TR></TABLE>>,
            likec4_id="monitoring-alarm-platform.notification-service",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        "telemetry-store" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            group="monitoring-alarm-platform",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Telemetry Store</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Time-series DB / relational storage</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Хранит телеметрию, служебные события, историю<BR/>alarm и данные для мониторинговых и<BR/>операторских запросов.</FONT></TD></TR></TABLE>>,
            likec4_id="monitoring-alarm-platform.telemetry-store",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    {
        graph [rank=source];
        "service-engineer" [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Сервисный инженер</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Настраивает источники данных, схему сигналов,<BR/>правила доставки и эксплуатационные параметры<BR/>edge-агента и центральной платформы.</FONT></TD></TR></TABLE>>,
            likec4_id="service-engineer",
            likec4_level=0,
            margin="0.223,0.223",
            width=4.445];
        "operator-dispatcher" [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Оператор / диспетчер</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Работает с событиями, текущим состоянием<BR/>объекта и alarm через центральную платформу<BR/>мониторинга.</FONT></TD></TR></TABLE>>,
            likec4_id="operator-dispatcher",
            likec4_level=0,
            margin="0.223,0.223",
            width=4.445];
        "edge-telemetry-agent" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Edge Telemetry Agent</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Edge collector / normalization / buffering /</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Универсальная edge-система, разворачиваемая<BR/>на объекте рядом с полевыми протоколами и<BR/>отвечающая за сбор данных, нормализацию,<BR/>фильтрацию, буферизацию и доставку событий.</FONT></TD></TR></TABLE>>,
            likec4_id="edge-telemetry-agent",
            likec4_level=0,
            margin="0.223,0.223",
            width=4.445];
    }
    {
        graph [rank=sink];
        "notification-channels" [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Каналы уведомлений</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Email / SMS / Push / Webhook</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Email, SMS, push, webhook и другие<BR/>внешние облачные каналы доставки<BR/>тревог и служебных уведомлений.</FONT></TD></TR></TABLE>>,
            likec4_id="notification-channels",
            likec4_level=0,
            margin="0.112,0.223",
            width=4.445];
    }
    "service-engineer" -> "operator-dashboard" [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Настраивает правила, получателей и<BR/>панели мониторинга</FONT></TD></TR></TABLE>>,
        likec4_id=u5iuw4,
        minlen=1,
        style=solid];
    "operator-dispatcher" -> "operator-dashboard" [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Работает с панелями мониторинга, alarm и<BR/>историей</FONT></TD></TR></TABLE>>,
        likec4_id="18w8duv",
        style=solid];
    "operator-dashboard" -> "platform-api" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Запрашивает панели мониторинга,<BR/>состояние alarm и конфигурацию</FONT></TD></TR></TABLE>>,
        likec4_id="1vh9cax",
        style=dashed,
        weight=2];
    "mqtt-ingestion-gateway" -> "alarm-rule-engine" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Передает нормализованные события в Alarm<BR/>Rule Engine</FONT></TD></TR></TABLE>>,
        likec4_id=rstcnr,
        style=dashed];
    "mqtt-ingestion-gateway" -> "telemetry-store" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Сохраняет canonical events и служебные<BR/>события</FONT></TD></TR></TABLE>>,
        likec4_id="1jz0qh",
        style=dashed];
    "platform-api" -> "alarm-rule-engine" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Читает активные alarm и управляет<BR/>конфигурацией правил в Alarm Rule Engine</FONT></TD></TR></TABLE>>,
        likec4_id="26i7o3",
        style=dashed];
    "platform-api" -> "telemetry-store" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Читает телеметрию, историю и временные<BR/>линии alarm</FONT></TD></TR></TABLE>>,
        likec4_id="1els6f1",
        style=dashed];
    "alarm-rule-engine" -> "notification-service" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Запускает доставку уведомлений</FONT></TD></TR></TABLE>>,
        likec4_id="1lcbhhg",
        style=dashed,
        weight=2];
    "alarm-rule-engine" -> "telemetry-store" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Читает контекст и записывает состояние и<BR/>историю alarm</FONT></TD></TR></TABLE>>,
        likec4_id=nw10x0,
        style=dashed];
    "notification-service" -> "notification-channels" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Отправляет email, SMS, push и<BR/>webhook-уведомления</FONT></TD></TR></TABLE>>,
        likec4_id=dc94i1,
        style=dashed];
    "notification-channels" -> "operator-dispatcher" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Доставляют уведомления по alarm и<BR/>служебные уведомления</FONT></TD></TR></TABLE>>,
        likec4_id="1cg2z5c",
        minlen=0,
        style=dashed,
        weight=2];
}
`;case"c1-system-context":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_rankBlocks=3,
        likec4_viewId="c1-system-context",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    {
        graph [rank=source];
        "field-devices" [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Полевые устройства и контроллеры</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Field devices / PLC / RTU</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Датчики, актуаторы, PLC, RTU и локальные<BR/>системы автоматизации на объекте.</FONT></TD></TR></TABLE>>,
            likec4_id="field-devices",
            likec4_level=0,
            margin="0.223,0.223",
            width=4.445];
        "service-engineer" [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Сервисный инженер</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Настраивает источники данных, схему сигналов,<BR/>правила доставки и эксплуатационные параметры<BR/>edge-агента и центральной платформы.</FONT></TD></TR></TABLE>>,
            likec4_id="service-engineer",
            likec4_level=0,
            margin="0.223,0.223",
            width=4.445];
        "operator-dispatcher" [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Оператор / диспетчер</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Работает с событиями, текущим состоянием<BR/>объекта и alarm через центральную платформу<BR/>мониторинга.</FONT></TD></TR></TABLE>>,
            likec4_id="operator-dispatcher",
            likec4_level=0,
            margin="0.223,0.223",
            width=4.445];
    }
    {
        graph [rank=same];
        "edge-telemetry-agent" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Edge Telemetry Agent</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Edge collector / normalization / buffering /</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Универсальная edge-система, разворачиваемая<BR/>на объекте рядом с полевыми протоколами и<BR/>отвечающая за сбор данных, нормализацию,<BR/>фильтрацию, буферизацию и доставку событий.</FONT></TD></TR></TABLE>>,
            likec4_id="edge-telemetry-agent",
            likec4_level=0,
            margin="0.223,0.223",
            width=4.445];
        "monitoring-alarm-platform" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Monitoring &amp; Alarm Platform</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Cloud monitoring platform / alarm engine /</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Центральная система в облаке/интернете для<BR/>приема событий, хранения телеметрии,<BR/>визуализации, alarm-логики и маршрутизации<BR/>уведомлений.</FONT></TD></TR></TABLE>>,
            likec4_id="monitoring-alarm-platform",
            likec4_level=0,
            margin="0.223,0.223",
            width=4.445];
    }
    {
        graph [rank=sink];
        "notification-channels" [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Каналы уведомлений</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Email / SMS / Push / Webhook</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Email, SMS, push, webhook и другие<BR/>внешние облачные каналы доставки<BR/>тревог и служебных уведомлений.</FONT></TD></TR></TABLE>>,
            likec4_id="notification-channels",
            likec4_level=0,
            margin="0.112,0.223",
            width=4.445];
    }
    "field-protocol-gateways" [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Протокольные шлюзы и SCADA-контроллеры</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX / Modbus / OPC UA / SCADA</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Точки подключения к технологическим данным<BR/>через KNX, Modbus, OPC UA и другие<BR/>southbound-протоколы.</FONT></TD></TR></TABLE>>,
        likec4_id="field-protocol-gateways",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    "field-devices" -> "field-protocol-gateways" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Передают телеграммы, состояния и команды<BR/>в KNX-сегменте</FONT></TD></TR></TABLE>>,
        likec4_id=c2wk8h,
        minlen=1,
        style=dashed];
    "service-engineer" -> "edge-telemetry-agent" [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Настраивает адаптеры, модель сигналов,<BR/>polling и доставку</FONT></TD></TR></TABLE>>,
        likec4_id=cw5zhy,
        style=solid];
    "service-engineer" -> "monitoring-alarm-platform" [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Настраивает правила alarm, получателей и<BR/>панели мониторинга</FONT></TD></TR></TABLE>>,
        likec4_id="16a5o8z",
        style=solid];
    "field-protocol-gateways" -> "edge-telemetry-agent" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1sivq2o",
        style=dashed];
    "edge-telemetry-agent" -> "monitoring-alarm-platform" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Публикует telemetry events и service<BR/>topics через MQTT</FONT></TD></TR></TABLE>>,
        likec4_id="1cfgwdb",
        style=dashed];
    "monitoring-alarm-platform" -> "notification-channels" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Маршрутизирует уведомления и эскалации</FONT></TD></TR></TABLE>>,
        likec4_id="134rwii",
        style=dashed];
    "notification-channels" -> "operator-dispatcher" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Доставляют уведомления по alarm и<BR/>служебные уведомления</FONT></TD></TR></TABLE>>,
        likec4_id="1cg2z5c",
        style=dashed];
    "operator-dispatcher" -> "monitoring-alarm-platform" [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Работает с панелями мониторинга,<BR/>событиями и alarm</FONT></TD></TR></TABLE>>,
        likec4_id="4cjy00",
        style=solid];
}
`;default:throw new Error("Unknown viewId: "+e)}}function a5(e){switch(e){case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.3 (0)
 -->
<!-- Pages: 1 -->
<svg width="2315pt" height="1891pt"
 viewBox="0.00 0.00 2315.00 1891.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1876.25)">
<!-- demo&#45;stand&#45;current&#45;monitored&#45;scope -->
<g id="node1" class="node">
<title>demo&#45;stand&#45;current&#45;monitored&#45;scope</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="380.29,-1861.2 0,-1861.2 0,-1681.2 380.29,-1681.2 380.29,-1861.2"/>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-1793" font-family="Arial" font-size="20.00" fill="#f0f9ff">Demo Stand Current Monitored Scope</text>
<text xml:space="preserve" text-anchor="start" x="64.42" y="-1772" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX monitored signals / current read scope</text>
<text xml:space="preserve" text-anchor="start" x="20.94" y="-1750.4" font-family="Arial" font-size="15.00" fill="#b6ecf7">Текущий набор сигналов demo&#45;стенда, которые</text>
<text xml:space="preserve" text-anchor="start" x="86.35" y="-1732.4" font-family="Arial" font-size="15.00" fill="#b6ecf7">читает Edge Telemetry Agent.</text>
</g>
<!-- edge&#45;telemetry&#45;agent -->
<g id="node2" class="node">
<title>edge&#45;telemetry&#45;agent</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1099.5,-1182 716.79,-1182 716.79,-1002 1099.5,-1002 1099.5,-1182"/>
<text xml:space="preserve" text-anchor="start" x="808.65" y="-1131.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">Edge Telemetry Agent</text>
<text xml:space="preserve" text-anchor="start" x="788.55" y="-1110.8" font-family="Arial" font-size="13.00" fill="#f9b27c">Edge collector / normalization / buffering /</text>
<text xml:space="preserve" text-anchor="start" x="736.85" y="-1089.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Универсальная edge&#45;система, разворачиваемая</text>
<text xml:space="preserve" text-anchor="start" x="749.78" y="-1071.2" font-family="Arial" font-size="15.00" fill="#f9b27c">на объекте рядом с полевыми протоколами и</text>
<text xml:space="preserve" text-anchor="start" x="753.95" y="-1053.2" font-family="Arial" font-size="15.00" fill="#f9b27c">отвечающая за сбор данных, нормализацию,</text>
<text xml:space="preserve" text-anchor="start" x="741.44" y="-1035.2" font-family="Arial" font-size="15.00" fill="#f9b27c">фильтрацию, буферизацию и доставку событий.</text>
</g>
<!-- field&#45;devices -->
<g id="node3" class="node">
<title>field&#45;devices</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="869.68,-1861.2 490.61,-1861.2 490.61,-1681.2 869.68,-1681.2 869.68,-1861.2"/>
<text xml:space="preserve" text-anchor="start" x="510.67" y="-1793" font-family="Arial" font-size="20.00" fill="#f0f9ff">Полевые устройства и контроллеры</text>
<text xml:space="preserve" text-anchor="start" x="605.37" y="-1772" font-family="Arial" font-size="13.00" fill="#b6ecf7">Field devices / PLC / RTU</text>
<text xml:space="preserve" text-anchor="start" x="525.12" y="-1750.4" font-family="Arial" font-size="15.00" fill="#b6ecf7">Датчики, актуаторы, PLC, RTU и локальные</text>
<text xml:space="preserve" text-anchor="start" x="550.95" y="-1732.4" font-family="Arial" font-size="15.00" fill="#b6ecf7">системы автоматизации на объекте.</text>
</g>
<!-- field&#45;protocol&#45;gateways -->
<g id="node4" class="node">
<title>field&#45;protocol&#45;gateways</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="863.46,-1521.6 408.83,-1521.6 408.83,-1341.6 863.46,-1341.6 863.46,-1521.6"/>
<text xml:space="preserve" text-anchor="start" x="428.88" y="-1462.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">Протокольные шлюзы и SCADA&#45;контроллеры</text>
<text xml:space="preserve" text-anchor="start" x="536.09" y="-1441.4" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX / Modbus / OPC UA / SCADA</text>
<text xml:space="preserve" text-anchor="start" x="469.44" y="-1419.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">Точки подключения к технологическим данным</text>
<text xml:space="preserve" text-anchor="start" x="500.69" y="-1401.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">через KNX, Modbus, OPC UA и другие</text>
<text xml:space="preserve" text-anchor="start" x="554.85" y="-1383.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">southbound&#45;протоколы.</text>
</g>
<!-- service&#45;engineer -->
<g id="node5" class="node">
<title>service&#45;engineer</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1845.4,-1861.2 1446.89,-1861.2 1446.89,-1681.2 1845.4,-1681.2 1845.4,-1861.2"/>
<text xml:space="preserve" text-anchor="start" x="1554.46" y="-1792.2" font-family="Arial" font-size="20.00" fill="#f8fafc">Сервисный инженер</text>
<text xml:space="preserve" text-anchor="start" x="1471.11" y="-1769.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">Настраивает источники данных, схему сигналов,</text>
<text xml:space="preserve" text-anchor="start" x="1466.94" y="-1751.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">правила доставки и эксплуатационные параметры</text>
<text xml:space="preserve" text-anchor="start" x="1506.1" y="-1733.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">edge&#45;агента и центральной платформы.</text>
</g>
<!-- local&#45;grafana -->
<g id="node6" class="node">
<title>local&#45;grafana</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1817.08,-1521.6 1475.21,-1521.6 1475.21,-1341.6 1817.08,-1341.6 1817.08,-1521.6"/>
<text xml:space="preserve" text-anchor="start" x="1583.33" y="-1480.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">Local Grafana</text>
<text xml:space="preserve" text-anchor="start" x="1526.92" y="-1459.4" font-family="Arial" font-size="13.00" fill="#b6ecf7">Grafana OSS / grafana&#45;mqtt&#45;datasource /</text>
<text xml:space="preserve" text-anchor="start" x="1560.29" y="-1437.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">Временный dev/test UI из</text>
<text xml:space="preserve" text-anchor="start" x="1517.77" y="-1419.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">infra/local/compose.yaml. Использует</text>
<text xml:space="preserve" text-anchor="start" x="1495.26" y="-1401.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">grafana&#45;mqtt&#45;datasource для live&#45;view MQTT</text>
<text xml:space="preserve" text-anchor="start" x="1515.26" y="-1383.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">payload и не считается частью target</text>
<text xml:space="preserve" text-anchor="start" x="1567.77" y="-1365.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">production architecture.</text>
</g>
<!-- monitoring&#45;alarm&#45;platform -->
<g id="node7" class="node">
<title>monitoring&#45;alarm&#45;platform</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="2020.82,-842.4 1651.47,-842.4 1651.47,-662.4 2020.82,-662.4 2020.82,-842.4"/>
<text xml:space="preserve" text-anchor="start" x="1711.1" y="-792.2" font-family="Arial" font-size="20.00" fill="#ffe0c2">Monitoring &amp; Alarm Platform</text>
<text xml:space="preserve" text-anchor="start" x="1715.11" y="-771.2" font-family="Arial" font-size="13.00" fill="#f9b27c">Cloud monitoring platform / alarm engine /</text>
<text xml:space="preserve" text-anchor="start" x="1671.53" y="-749.6" font-family="Arial" font-size="15.00" fill="#f9b27c">Центральная система в облаке/интернете для</text>
<text xml:space="preserve" text-anchor="start" x="1696.53" y="-731.6" font-family="Arial" font-size="15.00" fill="#f9b27c">приема событий, хранения телеметрии,</text>
<text xml:space="preserve" text-anchor="start" x="1673.2" y="-713.6" font-family="Arial" font-size="15.00" fill="#f9b27c">визуализации, alarm&#45;логики и маршрутизации</text>
<text xml:space="preserve" text-anchor="start" x="1788.22" y="-695.6" font-family="Arial" font-size="15.00" fill="#f9b27c">уведомлений.</text>
</g>
<!-- local&#45;mqtt&#45;broker -->
<g id="node8" class="node">
<title>local&#45;mqtt&#45;broker</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1394.18,-842.4 1008.1,-842.4 1008.1,-662.4 1394.18,-662.4 1394.18,-842.4"/>
<text xml:space="preserve" text-anchor="start" x="1113.9" y="-792.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">Local MQTT Broker</text>
<text xml:space="preserve" text-anchor="start" x="1076.86" y="-771.2" font-family="Arial" font-size="13.00" fill="#b6ecf7">Eclipse Mosquitto / localhost:1883 / Docker</text>
<text xml:space="preserve" text-anchor="start" x="1078.2" y="-749.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">Временный dev/test MQTT broker из</text>
<text xml:space="preserve" text-anchor="start" x="1064.43" y="-731.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">infra/local/compose.yaml. Используется</text>
<text xml:space="preserve" text-anchor="start" x="1028.16" y="-713.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">текущей реализацией edge_agent как локальный</text>
<text xml:space="preserve" text-anchor="start" x="1154.03" y="-695.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">publish target.</text>
</g>
<!-- notification&#45;channels -->
<g id="node9" class="node">
<title>notification&#45;channels</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1806.34,-519.6 1427.95,-519.6 1427.95,-339.6 1806.34,-339.6 1806.34,-519.6"/>
<text xml:space="preserve" text-anchor="start" x="1476.07" y="-424" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1520.01" y="-460.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">Каналы уведомлений</text>
<text xml:space="preserve" text-anchor="start" x="1784.33" y="-424" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1520.01" y="-439.4" font-family="Arial" font-size="13.00" fill="#b6ecf7">Email / SMS / Push / Webhook</text>
<text xml:space="preserve" text-anchor="start" x="1520.01" y="-417.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">Email, SMS, push, webhook и другие</text>
<text xml:space="preserve" text-anchor="start" x="1520.01" y="-399.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">внешние облачные каналы доставки</text>
<text xml:space="preserve" text-anchor="start" x="1520.01" y="-381.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">тревог и служебных уведомлений.</text>
</g>
<!-- operator&#45;dispatcher -->
<g id="node10" class="node">
<title>operator&#45;dispatcher</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="2008.9,-180 1635.39,-180 1635.39,0 2008.9,0 2008.9,-180"/>
<text xml:space="preserve" text-anchor="start" x="1719.35" y="-111" font-family="Arial" font-size="20.00" fill="#f8fafc">Оператор / диспетчер</text>
<text xml:space="preserve" text-anchor="start" x="1665.86" y="-88" font-family="Arial" font-size="15.00" fill="#c2f0c2">Работает с событиями, текущим состоянием</text>
<text xml:space="preserve" text-anchor="start" x="1655.44" y="-70" font-family="Arial" font-size="15.00" fill="#c2f0c2">объекта и alarm через центральную платформу</text>
<text xml:space="preserve" text-anchor="start" x="1774.22" y="-52" font-family="Arial" font-size="15.00" fill="#c2f0c2">мониторинга.</text>
</g>
<!-- demo&#45;stand&#45;current&#45;monitored&#45;scope&#45;&gt;edge&#45;telemetry&#45;agent -->
<g id="edge1" class="edge">
<title>demo&#45;stand&#45;current&#45;monitored&#45;scope&#45;&gt;edge&#45;telemetry&#45;agent</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M197.01,-1681.52C208.78,-1586.54 240.7,-1436.68 327.15,-1341.6 426.41,-1232.44 581.72,-1169.36 706.8,-1134.08"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="707.45,-1136.62 713.97,-1132.08 706.04,-1131.56 707.45,-1136.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="327.15,-1420.2 327.15,-1443 354.14,-1443 354.14,-1420.2 327.15,-1420.2"/>
<text xml:space="preserve" text-anchor="start" x="330.15" y="-1428.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- edge&#45;telemetry&#45;agent&#45;&gt;monitoring&#45;alarm&#45;platform -->
<g id="edge9" class="edge">
<title>edge&#45;telemetry&#45;agent&#45;&gt;monitoring&#45;alarm&#45;platform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1099.3,-1021.46C1257.97,-963.74 1482.65,-882 1642.11,-823.99"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1642.57,-826.61 1648.72,-821.58 1640.77,-821.68 1642.57,-826.61"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1399.97,-902.4 1399.97,-942 1642.49,-942 1642.49,-902.4 1399.97,-902.4"/>
<text xml:space="preserve" text-anchor="start" x="1402.97" y="-925" font-family="Arial" font-size="14.00" fill="#c9c9c9">Публикует telemetry events и service</text>
<text xml:space="preserve" text-anchor="start" x="1402.97" y="-908.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">topics через MQTT</text>
</g>
<!-- edge&#45;telemetry&#45;agent&#45;&gt;local&#45;mqtt&#45;broker -->
<g id="edge8" class="edge">
<title>edge&#45;telemetry&#45;agent&#45;&gt;local&#45;mqtt&#45;broker</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M875.2,-1002.08C868.42,-968.62 868.12,-931.64 886.63,-902.4 913.08,-860.6 954.77,-830.3 999.25,-808.42"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1000.11,-810.92 1005.75,-805.32 997.85,-806.18 1000.11,-810.92"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="886.63,-902.4 886.63,-942 1129.14,-942 1129.14,-902.4 886.63,-902.4"/>
<text xml:space="preserve" text-anchor="start" x="889.63" y="-925" font-family="Arial" font-size="14.00" fill="#c9c9c9">Публикует telemetry events и service</text>
<text xml:space="preserve" text-anchor="start" x="889.63" y="-908.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">topics в локальный MQTT broker</text>
</g>
<!-- field&#45;devices&#45;&gt;field&#45;protocol&#45;gateways -->
<g id="edge2" class="edge">
<title>field&#45;devices&#45;&gt;field&#45;protocol&#45;gateways</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M668.58,-1681.5C662.59,-1635.54 655.26,-1579.27 649.08,-1531.87"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="651.71,-1531.69 648.13,-1524.59 646.5,-1532.36 651.71,-1531.69"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="659.46,-1581.6 659.46,-1621.2 957.19,-1621.2 957.19,-1581.6 659.46,-1581.6"/>
<text xml:space="preserve" text-anchor="start" x="662.46" y="-1604.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Передают телеграммы, состояния и команды</text>
<text xml:space="preserve" text-anchor="start" x="662.46" y="-1587.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">в KNX&#45;сегменте</text>
</g>
<!-- field&#45;protocol&#45;gateways&#45;&gt;edge&#45;telemetry&#45;agent -->
<g id="edge6" class="edge">
<title>field&#45;protocol&#45;gateways&#45;&gt;edge&#45;telemetry&#45;agent</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M707.61,-1341.9C745.26,-1295.17 791.49,-1237.78 830.08,-1189.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="831.89,-1191.83 834.55,-1184.34 827.8,-1188.54 831.89,-1191.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="780.3,-1250.4 780.3,-1273.2 807.29,-1273.2 807.29,-1250.4 780.3,-1250.4"/>
<text xml:space="preserve" text-anchor="start" x="783.3" y="-1258.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- service&#45;engineer&#45;&gt;edge&#45;telemetry&#45;agent -->
<g id="edge4" class="edge">
<title>service&#45;engineer&#45;&gt;edge&#45;telemetry&#45;agent</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1447,-1706.24C1345.19,-1665.83 1224.8,-1605.25 1137.98,-1521.6 1041.42,-1428.58 976.22,-1286.04 940.63,-1191.22"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="943.19,-1190.58 938.12,-1184.46 938.27,-1192.4 943.19,-1190.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1137.98,-1411.8 1137.98,-1451.4 1420.14,-1451.4 1420.14,-1411.8 1137.98,-1411.8"/>
<text xml:space="preserve" text-anchor="start" x="1140.98" y="-1434.4" font-family="Arial" font-size="14.00" fill="#22c55e">Настраивает адаптеры, модель сигналов,</text>
<text xml:space="preserve" text-anchor="start" x="1140.98" y="-1417.6" font-family="Arial" font-size="14.00" fill="#22c55e">polling и доставку</text>
</g>
<!-- service&#45;engineer&#45;&gt;local&#45;grafana -->
<g id="edge3" class="edge">
<title>service&#45;engineer&#45;&gt;local&#45;grafana</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1638.06,-1681.49C1636.05,-1649.96 1634.75,-1614.21 1635.87,-1581.6 1636.42,-1565.5 1637.31,-1548.45 1638.34,-1531.85"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1640.95,-1532.25 1638.81,-1524.6 1635.71,-1531.92 1640.95,-1532.25"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1635.87,-1581.6 1635.87,-1621.2 1900.14,-1621.2 1900.14,-1581.6 1635.87,-1581.6"/>
<text xml:space="preserve" text-anchor="start" x="1638.87" y="-1604.2" font-family="Arial" font-size="14.00" fill="#22c55e">Проверяет live MQTT поток, topic tree и</text>
<text xml:space="preserve" text-anchor="start" x="1638.87" y="-1587.4" font-family="Arial" font-size="14.00" fill="#22c55e">dashboard</text>
</g>
<!-- service&#45;engineer&#45;&gt;monitoring&#45;alarm&#45;platform -->
<g id="edge5" class="edge">
<title>service&#45;engineer&#45;&gt;monitoring&#45;alarm&#45;platform</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1845.12,-1698.05C1876.25,-1677.97 1904.31,-1652.72 1923.14,-1621.2 2069.51,-1376.28 1953.26,-1021.73 1881.71,-851.65"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1884.23,-850.87 1878.88,-844.99 1879.39,-852.92 1884.23,-850.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1991.47,-1242 1991.47,-1281.6 2285.31,-1281.6 2285.31,-1242 1991.47,-1242"/>
<text xml:space="preserve" text-anchor="start" x="1994.47" y="-1264.6" font-family="Arial" font-size="14.00" fill="#22c55e">Настраивает правила alarm, получателей и</text>
<text xml:space="preserve" text-anchor="start" x="1994.47" y="-1247.8" font-family="Arial" font-size="14.00" fill="#22c55e">панели мониторинга</text>
</g>
<!-- local&#45;grafana&#45;&gt;local&#45;mqtt&#45;broker -->
<g id="edge7" class="edge">
<title>local&#45;grafana&#45;&gt;local&#45;mqtt&#45;broker</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1645.38,-1341.96C1639.9,-1228.04 1614.61,-1029.81 1510.14,-902.4 1481.71,-867.72 1443.26,-840.55 1403.16,-819.47"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1404.6,-817.26 1396.73,-816.17 1402.21,-821.93 1404.6,-817.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1625.94,-1063.8 1625.94,-1120.2 1873.13,-1120.2 1873.13,-1063.8 1625.94,-1063.8"/>
<text xml:space="preserve" text-anchor="start" x="1628.94" y="-1103.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Подписывается через</text>
<text xml:space="preserve" text-anchor="start" x="1628.94" y="-1086.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">grafana&#45;mqtt&#45;datasource на live MQTT</text>
<text xml:space="preserve" text-anchor="start" x="1628.94" y="-1069.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">topics</text>
</g>
<!-- monitoring&#45;alarm&#45;platform&#45;&gt;notification&#45;channels -->
<g id="edge10" class="edge">
<title>monitoring&#45;alarm&#45;platform&#45;&gt;notification&#45;channels</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1703.88,-662.61C1684.52,-644.66 1666.62,-624.44 1653.2,-602.4 1639.89,-580.55 1631.44,-554.56 1626.08,-529.5"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1628.66,-529.02 1624.63,-522.17 1623.51,-530.04 1628.66,-529.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1653.2,-579.6 1653.2,-602.4 1943.14,-602.4 1943.14,-579.6 1653.2,-579.6"/>
<text xml:space="preserve" text-anchor="start" x="1656.2" y="-585.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Маршрутизирует уведомления и эскалации</text>
</g>
<!-- notification&#45;channels&#45;&gt;operator&#45;dispatcher -->
<g id="edge11" class="edge">
<title>notification&#45;channels&#45;&gt;operator&#45;dispatcher</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1650.24,-339.71C1663.8,-307.34 1680.8,-271.09 1699.88,-240 1710.63,-222.47 1723.26,-204.78 1736.26,-188"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1738.22,-189.75 1740.79,-182.23 1734.09,-186.51 1738.22,-189.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1699.88,-240 1699.88,-279.6 1943.14,-279.6 1943.14,-240 1699.88,-240"/>
<text xml:space="preserve" text-anchor="start" x="1702.88" y="-262.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Доставляют уведомления по alarm и</text>
<text xml:space="preserve" text-anchor="start" x="1702.88" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">служебные уведомления</text>
</g>
<!-- operator&#45;dispatcher&#45;&gt;monitoring&#45;alarm&#45;platform -->
<g id="edge12" class="edge">
<title>operator&#45;dispatcher&#45;&gt;monitoring&#45;alarm&#45;platform</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1928.37,-179.86C1943.78,-198.05 1957.38,-218.32 1966.14,-240 2026.51,-389.33 2022.69,-451.58 1966.14,-602.4 1959.32,-620.6 1949.15,-638.04 1937.46,-654.17"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1935.44,-652.49 1933.03,-660.06 1939.63,-655.64 1935.44,-652.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2010,-409.8 2010,-449.4 2249.37,-449.4 2249.37,-409.8 2010,-409.8"/>
<text xml:space="preserve" text-anchor="start" x="2013" y="-432.4" font-family="Arial" font-size="14.00" fill="#22c55e">Работает с панелями мониторинга,</text>
<text xml:space="preserve" text-anchor="start" x="2013" y="-415.6" font-family="Arial" font-size="14.00" fill="#22c55e">событиями и alarm</text>
</g>
</g>
</svg>
`;case"deployment-demo-stand-topology":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.3 (0)
 -->
<!-- Pages: 1 -->
<svg width="5127pt" height="1641pt"
 viewBox="0.00 0.00 5127.00 1641.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1626.05)">
<g id="clust1" class="cluster">
<title>cluster_demo&#45;stand</title>
<polygon fill="#1c417d" stroke="#1c356c" points="8,-8 8,-1603 2184,-1603 2184,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1590.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">DEMO STAND</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_local&#45;lan</title>
<polygon fill="#0f4460" stroke="#0d374e" points="58,-816.4 58,-1531.8 2134,-1531.8 2134,-816.4 58,-816.4"/>
<text xml:space="preserve" text-anchor="start" x="66" y="-1518.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">LOCAL LAN 192.0.2.0/24</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_tp&#45;line&#45;1&#45;1</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="108,-1159.4 108,-1460.6 2084,-1460.6 2084,-1159.4 108,-1159.4"/>
<text xml:space="preserve" text-anchor="start" x="116" y="-1447.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">KNX TP LINE 1.1</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_knxnet&#45;ip&#45;backbone</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1621,-866.4 1621,-1131.6 2067,-1131.6 2067,-866.4 1621,-866.4"/>
<text xml:space="preserve" text-anchor="start" x="1629" y="-1118.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">KNXNET/IP BACKBONE</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_remote&#45;access</title>
<polygon fill="#0d4b6c" stroke="#0b3c57" points="1507,-58 1507,-323.2 1919,-323.2 1919,-58 1507,-58"/>
<text xml:space="preserve" text-anchor="start" x="1515" y="-310.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">REMOTE ACCESS</text>
</g>
<g id="clust6" class="cluster">
<title>cluster_whitelisted&#45;remote&#45;host</title>
<polygon fill="#1a468d" stroke="#1c3979" points="2192,-8 2192,-760.8 4713,-760.8 4713,-8 2192,-8"/>
<text xml:space="preserve" text-anchor="start" x="2200" y="-747.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">WHITELISTED REMOTE HOST</text>
</g>
<g id="clust7" class="cluster">
<title>cluster_edge&#45;host</title>
<polygon fill="#5a3620" stroke="#462a17" points="2224,-40 2224,-707.6 4681,-707.6 4681,-40 2224,-40"/>
<text xml:space="preserve" text-anchor="start" x="2232" y="-694.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f9b27c" fill-opacity="0.701961">DEVELOPER WORKSTATION</text>
</g>
<!-- device&#45;1&#45;1&#45;1 -->
<g id="node1" class="node">
<title>device&#45;1&#45;1&#45;1</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="512.37,-1389.4 157.63,-1389.4 157.63,-1209.4 512.37,-1209.4 512.37,-1389.4"/>
<text xml:space="preserve" text-anchor="start" x="177.69" y="-1342.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">1.1.1 Pushbutton sensor 4 Komfort,</text>
<text xml:space="preserve" text-anchor="start" x="303.86" y="-1318.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">4&#45;gang</text>
<text xml:space="preserve" text-anchor="start" x="290.93" y="-1297.2" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX TP device</text>
<text xml:space="preserve" text-anchor="start" x="187.03" y="-1275.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">Панель кнопок с group address для света,</text>
<text xml:space="preserve" text-anchor="start" x="200.35" y="-1257.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">scene и вентиляции: 0/0/1, 0/0/6, 0/0/7,</text>
<text xml:space="preserve" text-anchor="start" x="232.84" y="-1239.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">1/0/0, 1/1/0, 1/2/0, 1/3/0, 1/4/0.</text>
</g>
<!-- device&#45;1&#45;1&#45;2 -->
<g id="node2" class="node">
<title>device&#45;1&#45;1&#45;2</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1040.04,-1389.4 641.96,-1389.4 641.96,-1209.4 1040.04,-1209.4 1040.04,-1389.4"/>
<text xml:space="preserve" text-anchor="start" x="662.02" y="-1330.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">1.1.2 DALI Gateway Tunable White Plus</text>
<text xml:space="preserve" text-anchor="start" x="768.02" y="-1309.2" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX TP to DALI gateway</text>
<text xml:space="preserve" text-anchor="start" x="743.06" y="-1287.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">Шлюз освещения с адресами</text>
<text xml:space="preserve" text-anchor="start" x="714.29" y="-1269.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">Switch/StatusSwitch, RGBW и Scene:</text>
<text xml:space="preserve" text-anchor="start" x="803.06" y="-1251.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">0/0/1&#45;0/0/7.</text>
</g>
<!-- device&#45;1&#45;1&#45;3 -->
<g id="node3" class="node">
<title>device&#45;1&#45;1&#45;3</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1524.23,-1389.4 1169.77,-1389.4 1169.77,-1209.4 1524.23,-1209.4 1524.23,-1389.4"/>
<text xml:space="preserve" text-anchor="start" x="1241.37" y="-1321.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">1.1.3 Analogaktor 4fach</text>
<text xml:space="preserve" text-anchor="start" x="1298.23" y="-1300.2" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX TP actuator</text>
<text xml:space="preserve" text-anchor="start" x="1193.21" y="-1278.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">Актуатор вентиляции: VentSwitch, VentDim,</text>
<text xml:space="preserve" text-anchor="start" x="1189.83" y="-1260.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">VentStatus, VentValue по адресам 1/0/0&#45;1/3/0.</text>
</g>
<!-- device&#45;1&#45;1&#45;4 -->
<g id="node4" class="node">
<title>device&#45;1&#45;1&#45;4</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2034.13,-1389.4 1653.87,-1389.4 1653.87,-1209.4 2034.13,-1209.4 2034.13,-1389.4"/>
<text xml:space="preserve" text-anchor="start" x="1673.92" y="-1333.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">1.1.4 Room controller display compact</text>
<text xml:space="preserve" text-anchor="start" x="1811.2" y="-1309.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">module</text>
<text xml:space="preserve" text-anchor="start" x="1775.37" y="-1288.2" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX TP room controller</text>
<text xml:space="preserve" text-anchor="start" x="1691.45" y="-1266.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">Комнатный контроллер с Temperature value</text>
<text xml:space="preserve" text-anchor="start" x="1773.13" y="-1248.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">2/0/0 и сценой 1/4/0.</text>
</g>
<!-- public&#45;knx&#45;endpoint -->
<g id="node5" class="node">
<title>public&#45;knx&#45;endpoint</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="1886.88,-270 1539.12,-270 1539.12,-90 1886.88,-90 1886.88,-270"/>
<text xml:space="preserve" text-anchor="start" x="1609.05" y="-201.8" font-family="Arial" font-size="20.00" fill="#eef2ff">Public KNX/IP endpoint</text>
<text xml:space="preserve" text-anchor="start" x="1617.61" y="-180.8" font-family="Arial" font-size="13.00" fill="#c7d2fe">203.0.113.234:7171 / UDP / NAT</text>
<text xml:space="preserve" text-anchor="start" x="1573.39" y="-159.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">Публичная точка входа с пробросом на</text>
<text xml:space="preserve" text-anchor="start" x="1559.17" y="-141.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">локальный KNX/IP роутер 192.0.2.177:3671.</text>
</g>
<!-- knx&#45;router -->
<g id="node6" class="node">
<title>knx&#45;router</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2035,-1078.4 1653,-1078.4 1653,-898.4 2035,-898.4 2035,-1078.4"/>
<text xml:space="preserve" text-anchor="start" x="1701.11" y="-982.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1745.06" y="-1010.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">Weinzierl KNX IP Router 751</text>
<text xml:space="preserve" text-anchor="start" x="2013" y="-982.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1745.06" y="-989.2" font-family="Arial" font-size="13.00" fill="#b6ecf7">192.0.2.177:3671 / UDP / TUNNELING</text>
<text xml:space="preserve" text-anchor="start" x="1745.06" y="-967.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">Локальная точка входа в KNX/IP и</text>
<text xml:space="preserve" text-anchor="start" x="1745.06" y="-949.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">маршрутизатор в TP&#45;линию 1.1.</text>
</g>
<!-- delivery&#45;worker -->
<g id="node7" class="node">
<title>delivery&#45;worker</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="3786.67,-636.4 3417.33,-636.4 3417.33,-456.4 3786.67,-456.4 3786.67,-636.4"/>
<text xml:space="preserve" text-anchor="start" x="3530.88" y="-577.2" font-family="Arial" font-size="20.00" fill="#ffe0c2">Delivery Worker</text>
<text xml:space="preserve" text-anchor="start" x="3508.44" y="-556.2" font-family="Arial" font-size="13.00" fill="#f9b27c">Python worker / MQTT publisher</text>
<text xml:space="preserve" text-anchor="start" x="3441.95" y="-534.6" font-family="Arial" font-size="15.00" fill="#f9b27c">Фоновый контейнер доставки: читает outbox,</text>
<text xml:space="preserve" text-anchor="start" x="3447.37" y="-516.6" font-family="Arial" font-size="15.00" fill="#f9b27c">публикует telemetry events и service topics в</text>
<text xml:space="preserve" text-anchor="start" x="3437.38" y="-498.6" font-family="Arial" font-size="15.00" fill="#f9b27c">MQTT topic tree и обновляет статус доставки.</text>
</g>
<!-- local&#45;grafana -->
<g id="node8" class="node">
<title>local&#45;grafana</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2615.93,-636.4 2274.07,-636.4 2274.07,-456.4 2615.93,-456.4 2615.93,-636.4"/>
<text xml:space="preserve" text-anchor="start" x="2382.18" y="-595.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">Local Grafana</text>
<text xml:space="preserve" text-anchor="start" x="2325.78" y="-574.2" font-family="Arial" font-size="13.00" fill="#b6ecf7">Grafana OSS / grafana&#45;mqtt&#45;datasource /</text>
<text xml:space="preserve" text-anchor="start" x="2359.14" y="-552.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">Временный dev/test UI из</text>
<text xml:space="preserve" text-anchor="start" x="2316.62" y="-534.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">infra/local/compose.yaml. Использует</text>
<text xml:space="preserve" text-anchor="start" x="2294.12" y="-516.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">grafana&#45;mqtt&#45;datasource для live&#45;view MQTT</text>
<text xml:space="preserve" text-anchor="start" x="2314.12" y="-498.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">payload и не считается частью target</text>
<text xml:space="preserve" text-anchor="start" x="2366.62" y="-480.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">production architecture.</text>
</g>
<!-- collector&#45;runtime -->
<g id="node9" class="node">
<title>collector&#45;runtime</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="3287.75,-636.4 2964.25,-636.4 2964.25,-456.4 3287.75,-456.4 3287.75,-636.4"/>
<text xml:space="preserve" text-anchor="start" x="3046.53" y="-586.2" font-family="Arial" font-size="20.00" fill="#ffe0c2">Collector Runtime</text>
<text xml:space="preserve" text-anchor="start" x="3083.37" y="-565.2" font-family="Arial" font-size="13.00" fill="#f9b27c">Python service</text>
<text xml:space="preserve" text-anchor="start" x="3017.21" y="-543.6" font-family="Arial" font-size="15.00" fill="#f9b27c">Основной runtime edge&#45;агента:</text>
<text xml:space="preserve" text-anchor="start" x="3000.95" y="-525.6" font-family="Arial" font-size="15.00" fill="#f9b27c">southbound&#45;адаптеры, сбор данных,</text>
<text xml:space="preserve" text-anchor="start" x="2984.31" y="-507.6" font-family="Arial" font-size="15.00" fill="#f9b27c">нормализация, фильтрация изменений и</text>
<text xml:space="preserve" text-anchor="start" x="3020.13" y="-489.6" font-family="Arial" font-size="15.00" fill="#f9b27c">постановка событий в outbox.</text>
</g>
<!-- mqtt&#45;ingestion&#45;gateway -->
<g id="node10" class="node">
<title>mqtt&#45;ingestion&#45;gateway</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="5096.94,-270 4745.06,-270 4745.06,-90 5096.94,-90 5096.94,-270"/>
<text xml:space="preserve" text-anchor="start" x="4807.07" y="-228.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">MQTT Ingestion Gateway</text>
<text xml:space="preserve" text-anchor="start" x="4828.53" y="-207.8" font-family="Arial" font-size="13.00" fill="#f9b27c">MQTT broker / ingestion service</text>
<text xml:space="preserve" text-anchor="start" x="4770.97" y="-186.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Принимает MQTT telemetry events и service</text>
<text xml:space="preserve" text-anchor="start" x="4773.87" y="-168.2" font-family="Arial" font-size="15.00" fill="#f9b27c">topics от edge&#45;агентов, восстанавливает</text>
<text xml:space="preserve" text-anchor="start" x="4769.26" y="-150.2" font-family="Arial" font-size="15.00" fill="#f9b27c">routing context из topic, валидирует payload</text>
<text xml:space="preserve" text-anchor="start" x="4765.11" y="-132.2" font-family="Arial" font-size="15.00" fill="#f9b27c">и передает canonical events на хранение и в</text>
<text xml:space="preserve" text-anchor="start" x="4856.39" y="-114.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Alarm Rule Engine.</text>
</g>
<!-- local&#45;mqtt&#45;broker -->
<g id="node11" class="node">
<title>local&#45;mqtt&#45;broker</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2979.04,-270 2592.96,-270 2592.96,-90 2979.04,-90 2979.04,-270"/>
<text xml:space="preserve" text-anchor="start" x="2698.76" y="-219.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Local MQTT Broker</text>
<text xml:space="preserve" text-anchor="start" x="2661.72" y="-198.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Eclipse Mosquitto / localhost:1883 / Docker</text>
<text xml:space="preserve" text-anchor="start" x="2663.06" y="-177.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Временный dev/test MQTT broker из</text>
<text xml:space="preserve" text-anchor="start" x="2649.29" y="-159.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">infra/local/compose.yaml. Используется</text>
<text xml:space="preserve" text-anchor="start" x="2613.02" y="-141.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">текущей реализацией edge_agent как локальный</text>
<text xml:space="preserve" text-anchor="start" x="2738.89" y="-123.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">publish target.</text>
</g>
<!-- configuration&#45;bundle -->
<g id="node12" class="node">
<title>configuration&#45;bundle</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="3649.01,-270 3272.99,-270 3272.99,-90 3649.01,-90 3649.01,-270"/>
<text xml:space="preserve" text-anchor="start" x="3367.6" y="-210.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">Configuration Bundle</text>
<text xml:space="preserve" text-anchor="start" x="3429.93" y="-189.8" font-family="Arial" font-size="13.00" fill="#f9b27c">YAML files</text>
<text xml:space="preserve" text-anchor="start" x="3302.64" y="-168.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Локальный набор конфигурации источников,</text>
<text xml:space="preserve" text-anchor="start" x="3293.04" y="-150.2" font-family="Arial" font-size="15.00" fill="#f9b27c">модели сигналов, polling&#45;политик и параметров</text>
<text xml:space="preserve" text-anchor="start" x="3425.58" y="-132.2" font-family="Arial" font-size="15.00" fill="#f9b27c">доставки.</text>
</g>
<!-- outbox&#45;store -->
<g id="node13" class="node">
<title>outbox&#45;store</title>
<path fill="#a35829" stroke="#7e451d" stroke-width="2" d="M4209.17,-253.64C4209.17,-262.67 4132,-270 4037,-270 3942,-270 3864.83,-262.67 3864.83,-253.64 3864.83,-253.64 3864.83,-106.36 3864.83,-106.36 3864.83,-97.33 3942,-90 4037,-90 4132,-90 4209.17,-97.33 4209.17,-106.36 4209.17,-106.36 4209.17,-253.64 4209.17,-253.64"/>
<path fill="none" stroke="#7e451d" stroke-width="2" d="M4209.17,-253.64C4209.17,-244.61 4132,-237.27 4037,-237.27 3942,-237.27 3864.83,-244.61 3864.83,-253.64"/>
<text xml:space="preserve" text-anchor="start" x="3978.08" y="-210.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">Outbox Store</text>
<text xml:space="preserve" text-anchor="start" x="4017.13" y="-189.8" font-family="Arial" font-size="13.00" fill="#f9b27c">SQLite</text>
<text xml:space="preserve" text-anchor="start" x="3884.89" y="-168.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Локальное надежное хранилище исходящих</text>
<text xml:space="preserve" text-anchor="start" x="3884.89" y="-150.2" font-family="Arial" font-size="15.00" fill="#f9b27c">событий, статусов доставки и метаданных</text>
<text xml:space="preserve" text-anchor="start" x="3966.15" y="-132.2" font-family="Arial" font-size="15.00" fill="#f9b27c">повторных попыток.</text>
</g>
<!-- device&#45;1&#45;1&#45;4&#45;&gt;knx&#45;router -->
<g id="edge11" class="edge">
<title>device&#45;1&#45;1&#45;4&#45;&gt;knx&#45;router</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1844,-1159.4C1844,-1135.51 1844,-1111.12 1844,-1088.55"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1846.63,-1088.8 1844,-1081.3 1841.38,-1088.8 1846.63,-1088.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1844,-1118.47 1844,-1158.07 2110.61,-1158.07 2110.61,-1118.47 1844,-1118.47"/>
<text xml:space="preserve" text-anchor="start" x="1847" y="-1141.07" font-family="Arial" font-size="14.00" fill="#c9c9c9">Передает KNX TP телеграммы в роутер</text>
<text xml:space="preserve" text-anchor="start" x="1847" y="-1124.27" font-family="Arial" font-size="14.00" fill="#c9c9c9">1.1.0</text>
</g>
<!-- public&#45;knx&#45;endpoint&#45;&gt;knx&#45;router -->
<g id="edge1" class="edge">
<title>public&#45;knx&#45;endpoint&#45;&gt;knx&#45;router</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1727.45,-269.96C1752.11,-421.74 1802.13,-729.67 1827.88,-888.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1825.26,-888.44 1829.06,-895.42 1830.45,-887.6 1825.26,-888.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1806.09,-526.6 1806.09,-566.2 2095.7,-566.2 2095.7,-526.6 1806.09,-526.6"/>
<text xml:space="preserve" text-anchor="start" x="1809.09" y="-549.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Проброс UDP 7171 &#45;&gt; 3671 для удаленного</text>
<text xml:space="preserve" text-anchor="start" x="1809.09" y="-532.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">KNX/IP доступа</text>
</g>
<!-- knx&#45;router&#45;&gt;collector&#45;runtime -->
<g id="edge2" class="edge">
<title>knx&#45;router&#45;&gt;collector&#45;runtime</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2034.93,-964.87C2311.65,-929.52 2807.72,-855.21 2960,-760.8 3005.72,-732.45 3043.77,-686.72 3071.86,-644.85"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3073.92,-646.49 3075.86,-638.78 3069.54,-643.6 3073.92,-646.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2931,-768.8 2931,-808.4 3209.32,-808.4 3209.32,-768.8 2931,-768.8"/>
<text xml:space="preserve" text-anchor="start" x="2934" y="-791.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Экспонирует group address и телеграммы</text>
<text xml:space="preserve" text-anchor="start" x="2934" y="-774.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">через KNX/IP</text>
</g>
<!-- delivery&#45;worker&#45;&gt;mqtt&#45;ingestion&#45;gateway -->
<g id="edge10" class="edge">
<title>delivery&#45;worker&#45;&gt;mqtt&#45;ingestion&#45;gateway</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3786.64,-540.23C4077.23,-529.02 4624.91,-494.49 4787,-391.4 4828.62,-364.93 4859.73,-320.37 4881.44,-279.06"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4883.74,-280.32 4884.83,-272.44 4879.07,-277.92 4883.74,-280.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4845.35,-343.4 4845.35,-383 5087.87,-383 5087.87,-343.4 4845.35,-343.4"/>
<text xml:space="preserve" text-anchor="start" x="4848.35" y="-366" font-family="Arial" font-size="14.00" fill="#c9c9c9">Публикует telemetry events и service</text>
<text xml:space="preserve" text-anchor="start" x="4848.35" y="-349.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">topics по MQTT 5.0</text>
</g>
<!-- delivery&#45;worker&#45;&gt;local&#45;mqtt&#45;broker -->
<g id="edge7" class="edge">
<title>delivery&#45;worker&#45;&gt;local&#45;mqtt&#45;broker</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3417.47,-458.44C3415.98,-457.76 3414.49,-457.08 3413,-456.4 3271.8,-392.16 3111.66,-321.86 2988.56,-268.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2989.72,-266.01 2981.8,-265.43 2987.63,-270.83 2989.72,-266.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3258.78,-343.4 3258.78,-383 3463.94,-383 3463.94,-343.4 3258.78,-343.4"/>
<text xml:space="preserve" text-anchor="start" x="3261.78" y="-366" font-family="Arial" font-size="14.00" fill="#c9c9c9">Публикует в локальный broker</text>
<text xml:space="preserve" text-anchor="start" x="3261.78" y="-349.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">mqtt://localhost:1883</text>
</g>
<!-- delivery&#45;worker&#45;&gt;configuration&#45;bundle -->
<g id="edge4" class="edge">
<title>delivery&#45;worker&#45;&gt;configuration&#45;bundle</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3567.69,-456.72C3546.96,-403.16 3520.52,-334.81 3499.14,-279.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3501.59,-278.63 3496.44,-272.58 3496.69,-280.52 3501.59,-278.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3539.94,-343.4 3539.94,-383 3824.44,-383 3824.44,-343.4 3539.94,-343.4"/>
<text xml:space="preserve" text-anchor="start" x="3542.94" y="-366" font-family="Arial" font-size="14.00" fill="#c9c9c9">Загружает настройки MQTT, topic contract</text>
<text xml:space="preserve" text-anchor="start" x="3542.94" y="-349.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">и retry&#45;политики</text>
</g>
<!-- delivery&#45;worker&#45;&gt;outbox&#45;store -->
<g id="edge6" class="edge">
<title>delivery&#45;worker&#45;&gt;outbox&#45;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3786.63,-524.99C3950.79,-502.6 4172.98,-460.34 4227,-391.4 4258.65,-351.01 4233,-308.62 4191.48,-272.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4193.3,-270.66 4185.87,-267.85 4189.93,-274.68 4193.3,-270.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4241.11,-343.4 4241.11,-383 4511.61,-383 4511.61,-343.4 4241.11,-343.4"/>
<text xml:space="preserve" text-anchor="start" x="4244.11" y="-366" font-family="Arial" font-size="14.00" fill="#c9c9c9">Читает ожидающие события и обновляет</text>
<text xml:space="preserve" text-anchor="start" x="4244.11" y="-349.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">статус доставки</text>
</g>
<!-- local&#45;grafana&#45;&gt;local&#45;mqtt&#45;broker -->
<g id="edge8" class="edge">
<title>local&#45;grafana&#45;&gt;local&#45;mqtt&#45;broker</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2527.98,-456.72C2578.83,-402.39 2643.92,-332.83 2696.01,-277.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2697.67,-279.24 2700.87,-271.97 2693.83,-275.65 2697.67,-279.24"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2635.92,-335 2635.92,-391.4 2883.11,-391.4 2883.11,-335 2635.92,-335"/>
<text xml:space="preserve" text-anchor="start" x="2638.92" y="-374.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Подписывается через</text>
<text xml:space="preserve" text-anchor="start" x="2638.92" y="-357.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">grafana&#45;mqtt&#45;datasource на live MQTT</text>
<text xml:space="preserve" text-anchor="start" x="2638.92" y="-340.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">topics</text>
</g>
<!-- collector&#45;runtime&#45;&gt;public&#45;knx&#45;endpoint -->
<g id="edge9" class="edge">
<title>collector&#45;runtime&#45;&gt;public&#45;knx&#45;endpoint</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2964.65,-458.04C2963.09,-457.48 2961.55,-456.93 2960,-456.4 2632.48,-343.51 2529.29,-402.23 2192,-323.2 2093.5,-300.12 1985.33,-268.56 1896.75,-241.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1897.7,-238.58 1889.76,-238.85 1896.14,-243.59 1897.7,-238.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2699.47,-343.4 2699.47,-383 2973.1,-383 2973.1,-343.4 2699.47,-343.4"/>
<text xml:space="preserve" text-anchor="start" x="2702.47" y="-366" font-family="Arial" font-size="14.00" fill="#c9c9c9">Подключается к стенду через whitelisted</text>
<text xml:space="preserve" text-anchor="start" x="2702.47" y="-349.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">public KNX/IP endpoint</text>
</g>
<!-- collector&#45;runtime&#45;&gt;configuration&#45;bundle -->
<g id="edge3" class="edge">
<title>collector&#45;runtime&#45;&gt;configuration&#45;bundle</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3207.52,-456.72C3257.47,-402.39 3321.42,-332.83 3372.59,-277.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3374.21,-279.28 3377.35,-271.99 3370.35,-275.73 3374.21,-279.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3313.56,-343.4 3313.56,-383 3591.83,-383 3591.83,-343.4 3313.56,-343.4"/>
<text xml:space="preserve" text-anchor="start" x="3316.56" y="-366" font-family="Arial" font-size="14.00" fill="#c9c9c9">Загружает описания источников, модель</text>
<text xml:space="preserve" text-anchor="start" x="3316.56" y="-349.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">сигналов и runtime&#45;политики</text>
</g>
<!-- collector&#45;runtime&#45;&gt;outbox&#45;store -->
<g id="edge5" class="edge">
<title>collector&#45;runtime&#45;&gt;outbox&#45;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3287.59,-535.46C3435.32,-520.62 3655.9,-483.61 3825,-391.4 3876.32,-363.41 3923.56,-319.27 3960.35,-278.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3962.27,-280.42 3965.31,-273.08 3958.36,-276.92 3962.27,-280.42"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3898.07,-343.4 3898.07,-383 4164.67,-383 4164.67,-343.4 3898.07,-343.4"/>
<text xml:space="preserve" text-anchor="start" x="3901.07" y="-366" font-family="Arial" font-size="14.00" fill="#c9c9c9">Сохраняет нормализованные события и</text>
<text xml:space="preserve" text-anchor="start" x="3901.07" y="-349.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">задания на доставку</text>
</g>
</g>
</svg>
`;case"deployment-demo-stand-current-implementation":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.3 (0)
 -->
<!-- Pages: 1 -->
<svg width="4751pt" height="1641pt"
 viewBox="0.00 0.00 4751.00 1641.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1626.05)">
<g id="clust1" class="cluster">
<title>cluster_demo&#45;stand</title>
<polygon fill="#1c417d" stroke="#1c356c" points="8,-8 8,-1603 2184,-1603 2184,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1590.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">DEMO STAND</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_local&#45;lan</title>
<polygon fill="#0f4460" stroke="#0d374e" points="58,-816.4 58,-1531.8 2134,-1531.8 2134,-816.4 58,-816.4"/>
<text xml:space="preserve" text-anchor="start" x="66" y="-1518.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">LOCAL LAN 192.0.2.0/24</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_tp&#45;line&#45;1&#45;1</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="108,-1159.4 108,-1460.6 2084,-1460.6 2084,-1159.4 108,-1159.4"/>
<text xml:space="preserve" text-anchor="start" x="116" y="-1447.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">KNX TP LINE 1.1</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_knxnet&#45;ip&#45;backbone</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1621,-866.4 1621,-1131.6 2067,-1131.6 2067,-866.4 1621,-866.4"/>
<text xml:space="preserve" text-anchor="start" x="1629" y="-1118.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">KNXNET/IP BACKBONE</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_remote&#45;access</title>
<polygon fill="#0d4b6c" stroke="#0b3c57" points="1507,-58 1507,-323.2 1919,-323.2 1919,-58 1507,-58"/>
<text xml:space="preserve" text-anchor="start" x="1515" y="-310.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">REMOTE ACCESS</text>
</g>
<g id="clust6" class="cluster">
<title>cluster_whitelisted&#45;remote&#45;host</title>
<polygon fill="#1a468d" stroke="#1c3979" points="2192,-8 2192,-760.8 4713,-760.8 4713,-8 2192,-8"/>
<text xml:space="preserve" text-anchor="start" x="2200" y="-747.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">WHITELISTED REMOTE HOST</text>
</g>
<g id="clust7" class="cluster">
<title>cluster_edge&#45;host</title>
<polygon fill="#5a3620" stroke="#462a17" points="2224,-40 2224,-707.6 4681,-707.6 4681,-40 2224,-40"/>
<text xml:space="preserve" text-anchor="start" x="2232" y="-694.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f9b27c" fill-opacity="0.701961">DEVELOPER WORKSTATION</text>
</g>
<!-- device&#45;1&#45;1&#45;1 -->
<g id="node1" class="node">
<title>device&#45;1&#45;1&#45;1</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="512.37,-1389.4 157.63,-1389.4 157.63,-1209.4 512.37,-1209.4 512.37,-1389.4"/>
<text xml:space="preserve" text-anchor="start" x="177.69" y="-1342.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">1.1.1 Pushbutton sensor 4 Komfort,</text>
<text xml:space="preserve" text-anchor="start" x="303.86" y="-1318.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">4&#45;gang</text>
<text xml:space="preserve" text-anchor="start" x="290.93" y="-1297.2" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX TP device</text>
<text xml:space="preserve" text-anchor="start" x="187.03" y="-1275.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">Панель кнопок с group address для света,</text>
<text xml:space="preserve" text-anchor="start" x="200.35" y="-1257.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">scene и вентиляции: 0/0/1, 0/0/6, 0/0/7,</text>
<text xml:space="preserve" text-anchor="start" x="232.84" y="-1239.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">1/0/0, 1/1/0, 1/2/0, 1/3/0, 1/4/0.</text>
</g>
<!-- device&#45;1&#45;1&#45;2 -->
<g id="node2" class="node">
<title>device&#45;1&#45;1&#45;2</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1040.04,-1389.4 641.96,-1389.4 641.96,-1209.4 1040.04,-1209.4 1040.04,-1389.4"/>
<text xml:space="preserve" text-anchor="start" x="662.02" y="-1330.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">1.1.2 DALI Gateway Tunable White Plus</text>
<text xml:space="preserve" text-anchor="start" x="768.02" y="-1309.2" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX TP to DALI gateway</text>
<text xml:space="preserve" text-anchor="start" x="743.06" y="-1287.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">Шлюз освещения с адресами</text>
<text xml:space="preserve" text-anchor="start" x="714.29" y="-1269.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">Switch/StatusSwitch, RGBW и Scene:</text>
<text xml:space="preserve" text-anchor="start" x="803.06" y="-1251.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">0/0/1&#45;0/0/7.</text>
</g>
<!-- device&#45;1&#45;1&#45;3 -->
<g id="node3" class="node">
<title>device&#45;1&#45;1&#45;3</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1524.23,-1389.4 1169.77,-1389.4 1169.77,-1209.4 1524.23,-1209.4 1524.23,-1389.4"/>
<text xml:space="preserve" text-anchor="start" x="1241.37" y="-1321.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">1.1.3 Analogaktor 4fach</text>
<text xml:space="preserve" text-anchor="start" x="1298.23" y="-1300.2" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX TP actuator</text>
<text xml:space="preserve" text-anchor="start" x="1193.21" y="-1278.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">Актуатор вентиляции: VentSwitch, VentDim,</text>
<text xml:space="preserve" text-anchor="start" x="1189.83" y="-1260.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">VentStatus, VentValue по адресам 1/0/0&#45;1/3/0.</text>
</g>
<!-- device&#45;1&#45;1&#45;4 -->
<g id="node4" class="node">
<title>device&#45;1&#45;1&#45;4</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2034.13,-1389.4 1653.87,-1389.4 1653.87,-1209.4 2034.13,-1209.4 2034.13,-1389.4"/>
<text xml:space="preserve" text-anchor="start" x="1673.92" y="-1333.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">1.1.4 Room controller display compact</text>
<text xml:space="preserve" text-anchor="start" x="1811.2" y="-1309.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">module</text>
<text xml:space="preserve" text-anchor="start" x="1775.37" y="-1288.2" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX TP room controller</text>
<text xml:space="preserve" text-anchor="start" x="1691.45" y="-1266.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">Комнатный контроллер с Temperature value</text>
<text xml:space="preserve" text-anchor="start" x="1773.13" y="-1248.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">2/0/0 и сценой 1/4/0.</text>
</g>
<!-- public&#45;knx&#45;endpoint -->
<g id="node5" class="node">
<title>public&#45;knx&#45;endpoint</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="1886.88,-270 1539.12,-270 1539.12,-90 1886.88,-90 1886.88,-270"/>
<text xml:space="preserve" text-anchor="start" x="1609.05" y="-201.8" font-family="Arial" font-size="20.00" fill="#eef2ff">Public KNX/IP endpoint</text>
<text xml:space="preserve" text-anchor="start" x="1617.61" y="-180.8" font-family="Arial" font-size="13.00" fill="#c7d2fe">203.0.113.234:7171 / UDP / NAT</text>
<text xml:space="preserve" text-anchor="start" x="1573.39" y="-159.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">Публичная точка входа с пробросом на</text>
<text xml:space="preserve" text-anchor="start" x="1559.17" y="-141.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">локальный KNX/IP роутер 192.0.2.177:3671.</text>
</g>
<!-- knx&#45;router -->
<g id="node6" class="node">
<title>knx&#45;router</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2035,-1078.4 1653,-1078.4 1653,-898.4 2035,-898.4 2035,-1078.4"/>
<text xml:space="preserve" text-anchor="start" x="1701.11" y="-982.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1745.06" y="-1010.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">Weinzierl KNX IP Router 751</text>
<text xml:space="preserve" text-anchor="start" x="2013" y="-982.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1745.06" y="-989.2" font-family="Arial" font-size="13.00" fill="#b6ecf7">192.0.2.177:3671 / UDP / TUNNELING</text>
<text xml:space="preserve" text-anchor="start" x="1745.06" y="-967.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">Локальная точка входа в KNX/IP и</text>
<text xml:space="preserve" text-anchor="start" x="1745.06" y="-949.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">маршрутизатор в TP&#45;линию 1.1.</text>
</g>
<!-- delivery&#45;worker -->
<g id="node7" class="node">
<title>delivery&#45;worker</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="3786.67,-636.4 3417.33,-636.4 3417.33,-456.4 3786.67,-456.4 3786.67,-636.4"/>
<text xml:space="preserve" text-anchor="start" x="3530.88" y="-577.2" font-family="Arial" font-size="20.00" fill="#ffe0c2">Delivery Worker</text>
<text xml:space="preserve" text-anchor="start" x="3508.44" y="-556.2" font-family="Arial" font-size="13.00" fill="#f9b27c">Python worker / MQTT publisher</text>
<text xml:space="preserve" text-anchor="start" x="3441.95" y="-534.6" font-family="Arial" font-size="15.00" fill="#f9b27c">Фоновый контейнер доставки: читает outbox,</text>
<text xml:space="preserve" text-anchor="start" x="3447.37" y="-516.6" font-family="Arial" font-size="15.00" fill="#f9b27c">публикует telemetry events и service topics в</text>
<text xml:space="preserve" text-anchor="start" x="3437.38" y="-498.6" font-family="Arial" font-size="15.00" fill="#f9b27c">MQTT topic tree и обновляет статус доставки.</text>
</g>
<!-- local&#45;grafana -->
<g id="node8" class="node">
<title>local&#45;grafana</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2615.93,-636.4 2274.07,-636.4 2274.07,-456.4 2615.93,-456.4 2615.93,-636.4"/>
<text xml:space="preserve" text-anchor="start" x="2382.18" y="-595.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">Local Grafana</text>
<text xml:space="preserve" text-anchor="start" x="2325.78" y="-574.2" font-family="Arial" font-size="13.00" fill="#b6ecf7">Grafana OSS / grafana&#45;mqtt&#45;datasource /</text>
<text xml:space="preserve" text-anchor="start" x="2359.14" y="-552.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">Временный dev/test UI из</text>
<text xml:space="preserve" text-anchor="start" x="2316.62" y="-534.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">infra/local/compose.yaml. Использует</text>
<text xml:space="preserve" text-anchor="start" x="2294.12" y="-516.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">grafana&#45;mqtt&#45;datasource для live&#45;view MQTT</text>
<text xml:space="preserve" text-anchor="start" x="2314.12" y="-498.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">payload и не считается частью target</text>
<text xml:space="preserve" text-anchor="start" x="2366.62" y="-480.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">production architecture.</text>
</g>
<!-- collector&#45;runtime -->
<g id="node9" class="node">
<title>collector&#45;runtime</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="3287.75,-636.4 2964.25,-636.4 2964.25,-456.4 3287.75,-456.4 3287.75,-636.4"/>
<text xml:space="preserve" text-anchor="start" x="3046.53" y="-586.2" font-family="Arial" font-size="20.00" fill="#ffe0c2">Collector Runtime</text>
<text xml:space="preserve" text-anchor="start" x="3083.37" y="-565.2" font-family="Arial" font-size="13.00" fill="#f9b27c">Python service</text>
<text xml:space="preserve" text-anchor="start" x="3017.21" y="-543.6" font-family="Arial" font-size="15.00" fill="#f9b27c">Основной runtime edge&#45;агента:</text>
<text xml:space="preserve" text-anchor="start" x="3000.95" y="-525.6" font-family="Arial" font-size="15.00" fill="#f9b27c">southbound&#45;адаптеры, сбор данных,</text>
<text xml:space="preserve" text-anchor="start" x="2984.31" y="-507.6" font-family="Arial" font-size="15.00" fill="#f9b27c">нормализация, фильтрация изменений и</text>
<text xml:space="preserve" text-anchor="start" x="3020.13" y="-489.6" font-family="Arial" font-size="15.00" fill="#f9b27c">постановка событий в outbox.</text>
</g>
<!-- local&#45;mqtt&#45;broker -->
<g id="node10" class="node">
<title>local&#45;mqtt&#45;broker</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2734.04,-270 2347.96,-270 2347.96,-90 2734.04,-90 2734.04,-270"/>
<text xml:space="preserve" text-anchor="start" x="2453.76" y="-219.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Local MQTT Broker</text>
<text xml:space="preserve" text-anchor="start" x="2416.72" y="-198.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Eclipse Mosquitto / localhost:1883 / Docker</text>
<text xml:space="preserve" text-anchor="start" x="2418.06" y="-177.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Временный dev/test MQTT broker из</text>
<text xml:space="preserve" text-anchor="start" x="2404.29" y="-159.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">infra/local/compose.yaml. Используется</text>
<text xml:space="preserve" text-anchor="start" x="2368.02" y="-141.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">текущей реализацией edge_agent как локальный</text>
<text xml:space="preserve" text-anchor="start" x="2493.89" y="-123.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">publish target.</text>
</g>
<!-- configuration&#45;bundle -->
<g id="node11" class="node">
<title>configuration&#45;bundle</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="3314.01,-270 2937.99,-270 2937.99,-90 3314.01,-90 3314.01,-270"/>
<text xml:space="preserve" text-anchor="start" x="3032.6" y="-210.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">Configuration Bundle</text>
<text xml:space="preserve" text-anchor="start" x="3094.93" y="-189.8" font-family="Arial" font-size="13.00" fill="#f9b27c">YAML files</text>
<text xml:space="preserve" text-anchor="start" x="2967.64" y="-168.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Локальный набор конфигурации источников,</text>
<text xml:space="preserve" text-anchor="start" x="2958.04" y="-150.2" font-family="Arial" font-size="15.00" fill="#f9b27c">модели сигналов, polling&#45;политик и параметров</text>
<text xml:space="preserve" text-anchor="start" x="3090.58" y="-132.2" font-family="Arial" font-size="15.00" fill="#f9b27c">доставки.</text>
</g>
<!-- outbox&#45;store -->
<g id="node12" class="node">
<title>outbox&#45;store</title>
<path fill="#a35829" stroke="#7e451d" stroke-width="2" d="M4131.17,-253.64C4131.17,-262.67 4054,-270 3959,-270 3864,-270 3786.83,-262.67 3786.83,-253.64 3786.83,-253.64 3786.83,-106.36 3786.83,-106.36 3786.83,-97.33 3864,-90 3959,-90 4054,-90 4131.17,-97.33 4131.17,-106.36 4131.17,-106.36 4131.17,-253.64 4131.17,-253.64"/>
<path fill="none" stroke="#7e451d" stroke-width="2" d="M4131.17,-253.64C4131.17,-244.61 4054,-237.27 3959,-237.27 3864,-237.27 3786.83,-244.61 3786.83,-253.64"/>
<text xml:space="preserve" text-anchor="start" x="3900.08" y="-210.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">Outbox Store</text>
<text xml:space="preserve" text-anchor="start" x="3939.13" y="-189.8" font-family="Arial" font-size="13.00" fill="#f9b27c">SQLite</text>
<text xml:space="preserve" text-anchor="start" x="3806.89" y="-168.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Локальное надежное хранилище исходящих</text>
<text xml:space="preserve" text-anchor="start" x="3806.89" y="-150.2" font-family="Arial" font-size="15.00" fill="#f9b27c">событий, статусов доставки и метаданных</text>
<text xml:space="preserve" text-anchor="start" x="3888.15" y="-132.2" font-family="Arial" font-size="15.00" fill="#f9b27c">повторных попыток.</text>
</g>
<!-- device&#45;1&#45;1&#45;4&#45;&gt;knx&#45;router -->
<g id="edge10" class="edge">
<title>device&#45;1&#45;1&#45;4&#45;&gt;knx&#45;router</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1844,-1159.4C1844,-1135.51 1844,-1111.12 1844,-1088.55"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1846.63,-1088.8 1844,-1081.3 1841.38,-1088.8 1846.63,-1088.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1844,-1118.47 1844,-1158.07 2110.61,-1158.07 2110.61,-1118.47 1844,-1118.47"/>
<text xml:space="preserve" text-anchor="start" x="1847" y="-1141.07" font-family="Arial" font-size="14.00" fill="#c9c9c9">Передает KNX TP телеграммы в роутер</text>
<text xml:space="preserve" text-anchor="start" x="1847" y="-1124.27" font-family="Arial" font-size="14.00" fill="#c9c9c9">1.1.0</text>
</g>
<!-- public&#45;knx&#45;endpoint&#45;&gt;knx&#45;router -->
<g id="edge1" class="edge">
<title>public&#45;knx&#45;endpoint&#45;&gt;knx&#45;router</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1727.45,-269.96C1752.11,-421.74 1802.13,-729.67 1827.88,-888.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1825.26,-888.44 1829.06,-895.42 1830.45,-887.6 1825.26,-888.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1806.09,-526.6 1806.09,-566.2 2095.7,-566.2 2095.7,-526.6 1806.09,-526.6"/>
<text xml:space="preserve" text-anchor="start" x="1809.09" y="-549.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Проброс UDP 7171 &#45;&gt; 3671 для удаленного</text>
<text xml:space="preserve" text-anchor="start" x="1809.09" y="-532.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">KNX/IP доступа</text>
</g>
<!-- knx&#45;router&#45;&gt;collector&#45;runtime -->
<g id="edge2" class="edge">
<title>knx&#45;router&#45;&gt;collector&#45;runtime</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2034.93,-964.87C2311.65,-929.52 2807.72,-855.21 2960,-760.8 3005.72,-732.45 3043.77,-686.72 3071.86,-644.85"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3073.92,-646.49 3075.86,-638.78 3069.54,-643.6 3073.92,-646.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2931,-768.8 2931,-808.4 3209.32,-808.4 3209.32,-768.8 2931,-768.8"/>
<text xml:space="preserve" text-anchor="start" x="2934" y="-791.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Экспонирует group address и телеграммы</text>
<text xml:space="preserve" text-anchor="start" x="2934" y="-774.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">через KNX/IP</text>
</g>
<!-- delivery&#45;worker&#45;&gt;local&#45;mqtt&#45;broker -->
<g id="edge7" class="edge">
<title>delivery&#45;worker&#45;&gt;local&#45;mqtt&#45;broker</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3417.37,-457.97C3415.91,-457.44 3414.45,-456.92 3413,-456.4 3180.04,-373.74 3107.39,-401.72 2873,-323.2 2830.44,-308.94 2785.72,-291.54 2743.38,-273.86"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2744.54,-271.5 2736.6,-271.02 2742.5,-276.34 2744.54,-271.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3152.73,-343.4 3152.73,-383 3357.88,-383 3357.88,-343.4 3152.73,-343.4"/>
<text xml:space="preserve" text-anchor="start" x="3155.73" y="-366" font-family="Arial" font-size="14.00" fill="#c9c9c9">Публикует в локальный broker</text>
<text xml:space="preserve" text-anchor="start" x="3155.73" y="-349.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">mqtt://localhost:1883</text>
</g>
<!-- delivery&#45;worker&#45;&gt;configuration&#45;bundle -->
<g id="edge4" class="edge">
<title>delivery&#45;worker&#45;&gt;configuration&#45;bundle</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3530.11,-456.65C3494.97,-416.59 3450.51,-370.42 3405,-335 3377.46,-313.57 3346.56,-293.35 3315.62,-275.05"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3317.3,-272.99 3309.51,-271.47 3314.65,-277.52 3317.3,-272.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3464.31,-343.4 3464.31,-383 3748.81,-383 3748.81,-343.4 3464.31,-343.4"/>
<text xml:space="preserve" text-anchor="start" x="3467.31" y="-366" font-family="Arial" font-size="14.00" fill="#c9c9c9">Загружает настройки MQTT, topic contract</text>
<text xml:space="preserve" text-anchor="start" x="3467.31" y="-349.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">и retry&#45;политики</text>
</g>
<!-- delivery&#45;worker&#45;&gt;outbox&#45;store -->
<g id="edge6" class="edge">
<title>delivery&#45;worker&#45;&gt;outbox&#45;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3786.63,-524.99C3950.79,-502.6 4172.98,-460.34 4227,-391.4 4271,-335.25 4214.07,-285.31 4141.55,-248.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4142.75,-245.86 4134.87,-244.85 4140.4,-250.56 4142.75,-245.86"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4242.39,-343.4 4242.39,-383 4512.88,-383 4512.88,-343.4 4242.39,-343.4"/>
<text xml:space="preserve" text-anchor="start" x="4245.39" y="-366" font-family="Arial" font-size="14.00" fill="#c9c9c9">Читает ожидающие события и обновляет</text>
<text xml:space="preserve" text-anchor="start" x="4245.39" y="-349.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">статус доставки</text>
</g>
<!-- local&#45;grafana&#45;&gt;local&#45;mqtt&#45;broker -->
<g id="edge8" class="edge">
<title>local&#45;grafana&#45;&gt;local&#45;mqtt&#45;broker</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2468.36,-456.72C2482.44,-403.27 2500.4,-335.09 2514.94,-279.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2517.47,-280.61 2516.85,-272.68 2512.4,-279.27 2517.47,-280.61"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2498.75,-335 2498.75,-391.4 2745.94,-391.4 2745.94,-335 2498.75,-335"/>
<text xml:space="preserve" text-anchor="start" x="2501.75" y="-374.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Подписывается через</text>
<text xml:space="preserve" text-anchor="start" x="2501.75" y="-357.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">grafana&#45;mqtt&#45;datasource на live MQTT</text>
<text xml:space="preserve" text-anchor="start" x="2501.75" y="-340.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">topics</text>
</g>
<!-- collector&#45;runtime&#45;&gt;public&#45;knx&#45;endpoint -->
<g id="edge9" class="edge">
<title>collector&#45;runtime&#45;&gt;public&#45;knx&#45;endpoint</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2964.65,-458.04C2963.09,-457.48 2961.55,-456.93 2960,-456.4 2878.12,-428.18 2276.32,-342.96 2192,-323.2 2093.5,-300.12 1985.33,-268.56 1896.75,-241.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1897.7,-238.58 1889.76,-238.85 1896.14,-243.59 1897.7,-238.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2597.45,-343.4 2597.45,-383 2871.08,-383 2871.08,-343.4 2597.45,-343.4"/>
<text xml:space="preserve" text-anchor="start" x="2600.45" y="-366" font-family="Arial" font-size="14.00" fill="#c9c9c9">Подключается к стенду через whitelisted</text>
<text xml:space="preserve" text-anchor="start" x="2600.45" y="-349.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">public KNX/IP endpoint</text>
</g>
<!-- collector&#45;runtime&#45;&gt;configuration&#45;bundle -->
<g id="edge3" class="edge">
<title>collector&#45;runtime&#45;&gt;configuration&#45;bundle</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3126,-456.72C3126,-403.39 3126,-335.38 3126,-280.25"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3128.63,-280.28 3126,-272.78 3123.38,-280.28 3128.63,-280.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3126,-343.4 3126,-383 3404.28,-383 3404.28,-343.4 3126,-343.4"/>
<text xml:space="preserve" text-anchor="start" x="3129" y="-366" font-family="Arial" font-size="14.00" fill="#c9c9c9">Загружает описания источников, модель</text>
<text xml:space="preserve" text-anchor="start" x="3129" y="-349.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">сигналов и runtime&#45;политики</text>
</g>
<!-- collector&#45;runtime&#45;&gt;outbox&#45;store -->
<g id="edge5" class="edge">
<title>collector&#45;runtime&#45;&gt;outbox&#45;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3287.48,-524.41C3465.97,-498.71 3739.59,-451.13 3825,-391.4 3864.59,-363.71 3895.13,-320.2 3916.98,-279.91"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3919.18,-281.36 3920.37,-273.51 3914.54,-278.91 3919.18,-281.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3878.08,-343.4 3878.08,-383 4144.69,-383 4144.69,-343.4 3878.08,-343.4"/>
<text xml:space="preserve" text-anchor="start" x="3881.08" y="-366" font-family="Arial" font-size="14.00" fill="#c9c9c9">Сохраняет нормализованные события и</text>
<text xml:space="preserve" text-anchor="start" x="3881.08" y="-349.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">задания на доставку</text>
</g>
</g>
</svg>
`;case"demo-stand-current-monitored-points":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.3 (0)
 -->
<!-- Pages: 1 -->
<svg width="1979pt" height="984pt"
 viewBox="0.00 0.00 1979.00 984.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 969.05)">
<g id="clust1" class="cluster">
<title>cluster_demo&#45;stand&#45;current&#45;monitored&#45;scope</title>
<polygon fill="#0d4b6c" stroke="#0b3c57" points="8,-340.8 8,-946 1549,-946 1549,-340.8 8,-340.8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-933.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">DEMO STAND CURRENT MONITORED SCOPE</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_field&#45;protocol&#45;gateways</title>
<polygon fill="#0d4b6c" stroke="#0b3c57" points="1557,-348.8 1557,-614 1941,-614 1941,-348.8 1557,-348.8"/>
<text xml:space="preserve" text-anchor="start" x="1565" y="-601.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">ПРОТОКОЛЬНЫЕ ШЛЮЗЫ И SCADA&#45;КОНТРОЛЛЕРЫ</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_edge&#45;telemetry&#45;agent</title>
<polygon fill="#5a3620" stroke="#462a17" points="1041,-8 1041,-273.2 1429,-273.2 1429,-8 1041,-8"/>
<text xml:space="preserve" text-anchor="start" x="1049" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f9b27c" fill-opacity="0.701961">EDGE TELEMETRY AGENT</text>
</g>
<!-- device&#45;1&#45;1&#45;1 -->
<g id="node1" class="node">
<title>device&#45;1&#45;1&#45;1</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="417.67,-884.8 48.33,-884.8 48.33,-704.8 417.67,-704.8 417.67,-884.8"/>
<text xml:space="preserve" text-anchor="start" x="75.69" y="-828.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">1.1.1 Pushbutton sensor 4 Komfort,</text>
<text xml:space="preserve" text-anchor="start" x="201.86" y="-804.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">4&#45;gang</text>
<text xml:space="preserve" text-anchor="start" x="188.93" y="-783.6" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX TP device</text>
<text xml:space="preserve" text-anchor="start" x="68.38" y="-762" font-family="Arial" font-size="15.00" fill="#b6ecf7">Кнопочная панель, участвующая в публикации</text>
<text xml:space="preserve" text-anchor="start" x="137.96" y="-744" font-family="Arial" font-size="15.00" fill="#b6ecf7">feedback состояния света.</text>
</g>
<!-- device&#45;1&#45;1&#45;2 -->
<g id="node2" class="node">
<title>device&#45;1&#45;1&#45;2</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="926.04,-884.8 527.96,-884.8 527.96,-704.8 926.04,-704.8 926.04,-884.8"/>
<text xml:space="preserve" text-anchor="start" x="548.02" y="-816.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">1.1.2 DALI Gateway Tunable White Plus</text>
<text xml:space="preserve" text-anchor="start" x="654.02" y="-795.6" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX TP to DALI gateway</text>
<text xml:space="preserve" text-anchor="start" x="563.62" y="-774" font-family="Arial" font-size="15.00" fill="#b6ecf7">DALI gateway, публикующий статус светового</text>
<text xml:space="preserve" text-anchor="start" x="699.91" y="-756" font-family="Arial" font-size="15.00" fill="#b6ecf7">канала.</text>
</g>
<!-- device&#45;1&#45;1&#45;4 -->
<g id="node3" class="node">
<title>device&#45;1&#45;1&#45;4</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1434.26,-884.8 1035.74,-884.8 1035.74,-704.8 1434.26,-704.8 1434.26,-884.8"/>
<text xml:space="preserve" text-anchor="start" x="1064.92" y="-828.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">1.1.4 Room controller display compact</text>
<text xml:space="preserve" text-anchor="start" x="1202.2" y="-804.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">module</text>
<text xml:space="preserve" text-anchor="start" x="1166.37" y="-783.6" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX TP room controller</text>
<text xml:space="preserve" text-anchor="start" x="1055.8" y="-762" font-family="Arial" font-size="15.00" fill="#b6ecf7">Комнатный контроллер, публикующий температуру</text>
<text xml:space="preserve" text-anchor="start" x="1195.41" y="-744" font-family="Arial" font-size="15.00" fill="#b6ecf7">помещения.</text>
</g>
<!-- light&#45;switch&#45;feedback -->
<g id="node4" class="node">
<title>light&#45;switch&#45;feedback</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="911.67,-560.8 542.33,-560.8 542.33,-380.8 911.67,-380.8 911.67,-560.8"/>
<text xml:space="preserve" text-anchor="start" x="644.18" y="-483.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">0/0/7 StatusSwitch</text>
<text xml:space="preserve" text-anchor="start" x="648.96" y="-462.6" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX DPT 1.001 / feedback</text>
<text xml:space="preserve" text-anchor="start" x="562.38" y="-441" font-family="Arial" font-size="15.00" fill="#b6ecf7">Фактически читаемая точка состояния света.</text>
</g>
<!-- room&#45;temperature -->
<g id="node5" class="node">
<title>room&#45;temperature</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1403,-560.8 1067,-560.8 1067,-380.8 1403,-380.8 1403,-560.8"/>
<text xml:space="preserve" text-anchor="start" x="1156.06" y="-492.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">2/0/0 Temp Value</text>
<text xml:space="preserve" text-anchor="start" x="1132.77" y="-471.6" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX DPT 9.xxx / room temperature</text>
<text xml:space="preserve" text-anchor="start" x="1087.05" y="-450" font-family="Arial" font-size="15.00" fill="#b6ecf7">Фактически читаемая точка температуры</text>
<text xml:space="preserve" text-anchor="start" x="1195.41" y="-432" font-family="Arial" font-size="15.00" fill="#b6ecf7">помещения.</text>
</g>
<!-- knx&#45;router -->
<g id="node6" class="node">
<title>knx&#45;router</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1909.02,-560.8 1588.98,-560.8 1588.98,-380.8 1909.02,-380.8 1909.02,-560.8"/>
<text xml:space="preserve" text-anchor="start" x="1671.69" y="-465.2" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1715.64" y="-472.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">KNX Segment</text>
<text xml:space="preserve" text-anchor="start" x="1852.42" y="-465.2" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1715.64" y="-451.6" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX / KNXnet&#45;IP</text>
</g>
<!-- collector&#45;runtime -->
<g id="node7" class="node">
<title>collector&#45;runtime</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1396.75,-220 1073.25,-220 1073.25,-40 1396.75,-40 1396.75,-220"/>
<text xml:space="preserve" text-anchor="start" x="1155.53" y="-169.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">Collector Runtime</text>
<text xml:space="preserve" text-anchor="start" x="1192.37" y="-148.8" font-family="Arial" font-size="13.00" fill="#f9b27c">Python service</text>
<text xml:space="preserve" text-anchor="start" x="1126.21" y="-127.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Основной runtime edge&#45;агента:</text>
<text xml:space="preserve" text-anchor="start" x="1109.95" y="-109.2" font-family="Arial" font-size="15.00" fill="#f9b27c">southbound&#45;адаптеры, сбор данных,</text>
<text xml:space="preserve" text-anchor="start" x="1093.31" y="-91.2" font-family="Arial" font-size="15.00" fill="#f9b27c">нормализация, фильтрация изменений и</text>
<text xml:space="preserve" text-anchor="start" x="1129.13" y="-73.2" font-family="Arial" font-size="15.00" fill="#f9b27c">постановка событий в outbox.</text>
</g>
<!-- device&#45;1&#45;1&#45;1&#45;&gt;light&#45;switch&#45;feedback -->
<g id="edge1" class="edge">
<title>device&#45;1&#45;1&#45;1&#45;&gt;light&#45;switch&#45;feedback</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M313.92,-705.22C342.95,-676.47 377.07,-645.86 411.56,-622 449.01,-596.09 491.62,-572.46 533.14,-552"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="534.23,-554.39 539.82,-548.74 531.93,-549.67 534.23,-554.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="411.56,-622 411.56,-644.8 700,-644.8 700,-622 411.56,-622"/>
<text xml:space="preserve" text-anchor="start" x="414.56" y="-627.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Публикует feedback состояния света 0/0/7</text>
</g>
<!-- device&#45;1&#45;1&#45;2&#45;&gt;light&#45;switch&#45;feedback -->
<g id="edge2" class="edge">
<title>device&#45;1&#45;1&#45;2&#45;&gt;light&#45;switch&#45;feedback</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M727,-704.96C727,-663.43 727,-613.82 727,-571.06"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="729.63,-571.16 727,-563.66 724.38,-571.16 729.63,-571.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="727,-622 727,-644.8 1013.08,-644.8 1013.08,-622 727,-622"/>
<text xml:space="preserve" text-anchor="start" x="730" y="-627.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Публикует статус светового канала 0/0/7</text>
</g>
<!-- device&#45;1&#45;1&#45;4&#45;&gt;room&#45;temperature -->
<g id="edge3" class="edge">
<title>device&#45;1&#45;1&#45;4&#45;&gt;room&#45;temperature</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1235,-704.96C1235,-663.43 1235,-613.82 1235,-571.06"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1237.63,-571.16 1235,-563.66 1232.38,-571.16 1237.63,-571.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1235,-622 1235,-644.8 1509.41,-644.8 1509.41,-622 1235,-622"/>
<text xml:space="preserve" text-anchor="start" x="1238" y="-627.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Публикует температуру помещения 2/0/0</text>
</g>
<!-- light&#45;switch&#45;feedback&#45;&gt;collector&#45;runtime -->
<g id="edge5" class="edge">
<title>light&#45;switch&#45;feedback&#45;&gt;collector&#45;runtime</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M814.21,-381.02C849.88,-347.4 892.69,-310.26 935.14,-281.2 975.06,-253.87 1020.66,-228.46 1064.04,-206.6"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1065.02,-209.05 1070.55,-203.34 1062.67,-204.35 1065.02,-209.05"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="935.14,-281.2 935.14,-320.8 1208,-320.8 1208,-281.2 935.14,-281.2"/>
<text xml:space="preserve" text-anchor="start" x="938.14" y="-303.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Поставляет feedback состояния света в</text>
<text xml:space="preserve" text-anchor="start" x="938.14" y="-287" font-family="Arial" font-size="14.00" fill="#c9c9c9">текущий read scope</text>
</g>
<!-- room&#45;temperature&#45;&gt;collector&#45;runtime -->
<g id="edge6" class="edge">
<title>room&#45;temperature&#45;&gt;collector&#45;runtime</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1235,-381.23C1235,-334.92 1235,-278.1 1235,-230.3"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1237.63,-230.47 1235,-222.97 1232.38,-230.47 1237.63,-230.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1235,-281.2 1235,-320.8 1493.83,-320.8 1493.83,-281.2 1235,-281.2"/>
<text xml:space="preserve" text-anchor="start" x="1238" y="-303.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Поставляет температуру помещения в</text>
<text xml:space="preserve" text-anchor="start" x="1238" y="-287" font-family="Arial" font-size="14.00" fill="#c9c9c9">текущий read scope</text>
</g>
<!-- knx&#45;router&#45;&gt;collector&#45;runtime -->
<g id="edge4" class="edge">
<title>knx&#45;router&#45;&gt;collector&#45;runtime</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1650.63,-380.84C1611.66,-347.66 1565.58,-310.88 1521,-281.2 1484.91,-257.18 1444.54,-233.96 1405.76,-213.27"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1407,-210.95 1399.14,-209.76 1404.54,-215.59 1407,-210.95"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1573.72,-281.2 1573.72,-320.8 1852.04,-320.8 1852.04,-281.2 1573.72,-281.2"/>
<text xml:space="preserve" text-anchor="start" x="1576.72" y="-303.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Экспонирует group address и телеграммы</text>
<text xml:space="preserve" text-anchor="start" x="1576.72" y="-287" font-family="Arial" font-size="14.00" fill="#c9c9c9">через KNX/IP</text>
</g>
</g>
</svg>
`;case"c2-field-devices":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.3 (0)
 -->
<!-- Pages: 1 -->
<svg width="528pt" height="652pt"
 viewBox="0.00 0.00 528.00 652.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 637.05)">
<g id="clust1" class="cluster">
<title>cluster_field&#45;devices</title>
<polygon fill="#0d4b6c" stroke="#0b3c57" points="8,-348.8 8,-614 392,-614 392,-348.8 8,-348.8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-601.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">ПОЛЕВЫЕ УСТРОЙСТВА И КОНТРОЛЛЕРЫ</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_field&#45;protocol&#45;gateways</title>
<polygon fill="#0d4b6c" stroke="#0b3c57" points="8,-8 8,-273.2 392,-273.2 392,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">ПРОТОКОЛЬНЫЕ ШЛЮЗЫ И SCADA&#45;КОНТРОЛЛЕРЫ</text>
</g>
<!-- knx&#45;temperature&#45;sensor -->
<g id="node1" class="node">
<title>knx&#45;temperature&#45;sensor</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="360.02,-560.8 39.98,-560.8 39.98,-380.8 360.02,-380.8 360.02,-560.8"/>
<text xml:space="preserve" text-anchor="start" x="93.85" y="-483.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">knx&#45;temperature&#45;sensor</text>
<text xml:space="preserve" text-anchor="start" x="186.64" y="-462.6" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX</text>
<text xml:space="preserve" text-anchor="start" x="127.07" y="-441" font-family="Arial" font-size="15.00" fill="#b6ecf7">Датчик температуры</text>
</g>
<!-- knx&#45;router -->
<g id="node2" class="node">
<title>knx&#45;router</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="360.02,-220 39.98,-220 39.98,-40 360.02,-40 360.02,-220"/>
<text xml:space="preserve" text-anchor="start" x="122.69" y="-124.4" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="166.64" y="-131.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">KNX Segment</text>
<text xml:space="preserve" text-anchor="start" x="303.42" y="-124.4" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="166.64" y="-110.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX / KNXnet&#45;IP</text>
</g>
<!-- knx&#45;temperature&#45;sensor&#45;&gt;knx&#45;router -->
<g id="edge1" class="edge">
<title>knx&#45;temperature&#45;sensor&#45;&gt;knx&#45;router</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M200,-381.23C200,-334.92 200,-278.1 200,-230.3"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="202.63,-230.47 200,-222.97 197.38,-230.47 202.63,-230.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="200,-281.2 200,-320.8 497.72,-320.8 497.72,-281.2 200,-281.2"/>
<text xml:space="preserve" text-anchor="start" x="203" y="-303.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Передают телеграммы, состояния и команды</text>
<text xml:space="preserve" text-anchor="start" x="203" y="-287" font-family="Arial" font-size="14.00" fill="#c9c9c9">в KNX&#45;сегменте</text>
</g>
</g>
</svg>
`;case"c2-field-protocol-gateways":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.3 (0)
 -->
<!-- Pages: 1 -->
<svg width="1306pt" height="1001pt"
 viewBox="0.00 0.00 1306.00 1001.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 985.85)">
<g id="clust1" class="cluster">
<title>cluster_field&#45;devices</title>
<polygon fill="#0d4b6c" stroke="#0b3c57" points="16,-697.6 16,-962.8 400,-962.8 400,-697.6 16,-697.6"/>
<text xml:space="preserve" text-anchor="start" x="24" y="-949.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">ПОЛЕВЫЕ УСТРОЙСТВА И КОНТРОЛЛЕРЫ</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_field&#45;protocol&#45;gateways</title>
<polygon fill="#0d4b6c" stroke="#0b3c57" points="8,-340.8 8,-622 1268,-622 1268,-340.8 8,-340.8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-609.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">ПРОТОКОЛЬНЫЕ ШЛЮЗЫ И SCADA&#45;КОНТРОЛЛЕРЫ</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_edge&#45;telemetry&#45;agent</title>
<polygon fill="#5a3620" stroke="#462a17" points="444,-8 444,-273.2 832,-273.2 832,-8 444,-8"/>
<text xml:space="preserve" text-anchor="start" x="452" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f9b27c" fill-opacity="0.701961">EDGE TELEMETRY AGENT</text>
</g>
<!-- knx&#45;temperature&#45;sensor -->
<g id="node1" class="node">
<title>knx&#45;temperature&#45;sensor</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="368.02,-909.6 47.98,-909.6 47.98,-729.6 368.02,-729.6 368.02,-909.6"/>
<text xml:space="preserve" text-anchor="start" x="101.85" y="-832.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">knx&#45;temperature&#45;sensor</text>
<text xml:space="preserve" text-anchor="start" x="194.64" y="-811.4" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX</text>
<text xml:space="preserve" text-anchor="start" x="135.07" y="-789.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">Датчик температуры</text>
</g>
<!-- knx&#45;router -->
<g id="node2" class="node">
<title>knx&#45;router</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="368.02,-560.8 47.98,-560.8 47.98,-380.8 368.02,-380.8 368.02,-560.8"/>
<text xml:space="preserve" text-anchor="start" x="130.69" y="-465.2" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="174.64" y="-472.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">KNX Segment</text>
<text xml:space="preserve" text-anchor="start" x="311.42" y="-465.2" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="174.64" y="-451.6" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX / KNXnet&#45;IP</text>
</g>
<!-- modbus&#45;gateway -->
<g id="node3" class="node">
<title>modbus&#45;gateway</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="798.02,-560.8 477.98,-560.8 477.98,-380.8 798.02,-380.8 798.02,-560.8"/>
<text xml:space="preserve" text-anchor="start" x="542.42" y="-465.2" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="586.36" y="-472.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Modbus Gateway</text>
<text xml:space="preserve" text-anchor="start" x="759.69" y="-465.2" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="586.36" y="-451.6" font-family="Arial" font-size="13.00" fill="#b6ecf7">Modbus TCP / Modbus RTU</text>
</g>
<!-- opc&#45;ua&#45;gateway -->
<g id="node4" class="node">
<title>opc&#45;ua&#45;gateway</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1228.02,-560.8 907.98,-560.8 907.98,-380.8 1228.02,-380.8 1228.02,-560.8"/>
<text xml:space="preserve" text-anchor="start" x="983.48" y="-465.2" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1027.43" y="-472.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">OPC UA Server</text>
<text xml:space="preserve" text-anchor="start" x="1178.63" y="-465.2" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1027.43" y="-451.6" font-family="Arial" font-size="13.00" fill="#b6ecf7">OPC UA</text>
</g>
<!-- collector&#45;runtime -->
<g id="node5" class="node">
<title>collector&#45;runtime</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="799.75,-220 476.25,-220 476.25,-40 799.75,-40 799.75,-220"/>
<text xml:space="preserve" text-anchor="start" x="558.53" y="-169.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">Collector Runtime</text>
<text xml:space="preserve" text-anchor="start" x="595.37" y="-148.8" font-family="Arial" font-size="13.00" fill="#f9b27c">Python service</text>
<text xml:space="preserve" text-anchor="start" x="529.21" y="-127.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Основной runtime edge&#45;агента:</text>
<text xml:space="preserve" text-anchor="start" x="512.95" y="-109.2" font-family="Arial" font-size="15.00" fill="#f9b27c">southbound&#45;адаптеры, сбор данных,</text>
<text xml:space="preserve" text-anchor="start" x="496.31" y="-91.2" font-family="Arial" font-size="15.00" fill="#f9b27c">нормализация, фильтрация изменений и</text>
<text xml:space="preserve" text-anchor="start" x="532.13" y="-73.2" font-family="Arial" font-size="15.00" fill="#f9b27c">постановка событий в outbox.</text>
</g>
<!-- knx&#45;temperature&#45;sensor&#45;&gt;knx&#45;router -->
<g id="edge1" class="edge">
<title>knx&#45;temperature&#45;sensor&#45;&gt;knx&#45;router</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-729.74C208,-681.31 208,-621.23 208,-571.24"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-571.26 208,-563.76 205.38,-571.26 210.63,-571.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-630 208,-669.6 505.72,-669.6 505.72,-630 208,-630"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-652.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Передают телеграммы, состояния и команды</text>
<text xml:space="preserve" text-anchor="start" x="211" y="-635.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">в KNX&#45;сегменте</text>
</g>
<!-- knx&#45;router&#45;&gt;collector&#45;runtime -->
<g id="edge2" class="edge">
<title>knx&#45;router&#45;&gt;collector&#45;runtime</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M253.22,-381.19C273.96,-346.81 301.01,-309.08 332.68,-281.2 371.86,-246.71 420.36,-218.13 467.09,-195.5"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="468.04,-197.95 473.68,-192.35 465.78,-193.22 468.04,-197.95"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="332.68,-281.2 332.68,-320.8 611,-320.8 611,-281.2 332.68,-281.2"/>
<text xml:space="preserve" text-anchor="start" x="335.68" y="-303.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Экспонирует group address и телеграммы</text>
<text xml:space="preserve" text-anchor="start" x="335.68" y="-287" font-family="Arial" font-size="14.00" fill="#c9c9c9">через KNX/IP</text>
</g>
<!-- modbus&#45;gateway&#45;&gt;collector&#45;runtime -->
<g id="edge3" class="edge">
<title>modbus&#45;gateway&#45;&gt;collector&#45;runtime</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M638,-381.23C638,-334.92 638,-278.1 638,-230.3"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="640.63,-230.47 638,-222.97 635.38,-230.47 640.63,-230.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="638,-281.2 638,-320.8 884.4,-320.8 884.4,-281.2 638,-281.2"/>
<text xml:space="preserve" text-anchor="start" x="641" y="-303.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Экспонирует registers, coils и</text>
<text xml:space="preserve" text-anchor="start" x="641" y="-287" font-family="Arial" font-size="14.00" fill="#c9c9c9">дискретные значения через Modbus</text>
</g>
<!-- opc&#45;ua&#45;gateway&#45;&gt;collector&#45;runtime -->
<g id="edge4" class="edge">
<title>opc&#45;ua&#45;gateway&#45;&gt;collector&#45;runtime</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1005.34,-381.03C978.74,-347.21 945.84,-309.94 911,-281.2 880.03,-255.65 844.08,-232.3 808.63,-212.01"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="810.09,-209.81 802.27,-208.4 807.5,-214.38 810.09,-209.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="950.27,-281.2 950.27,-320.8 1185.02,-320.8 1185.02,-281.2 950.27,-281.2"/>
<text xml:space="preserve" text-anchor="start" x="953.27" y="-303.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Экспонирует nodes, subscriptions и</text>
<text xml:space="preserve" text-anchor="start" x="953.27" y="-287" font-family="Arial" font-size="14.00" fill="#c9c9c9">значения через OPC UA</text>
</g>
</g>
</svg>
`;case"local-mqtt-grafana-dev-harness":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.3 (0)
 -->
<!-- Pages: 1 -->
<svg width="1192pt" height="550pt"
 viewBox="0.00 0.00 1192.00 550.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 534.65)">
<!-- edge&#45;telemetry&#45;agent -->
<g id="node1" class="node">
<title>edge&#45;telemetry&#45;agent</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1110.61,-519.6 727.91,-519.6 727.91,-339.6 1110.61,-339.6 1110.61,-519.6"/>
<text xml:space="preserve" text-anchor="start" x="819.76" y="-469.4" font-family="Arial" font-size="20.00" fill="#ffe0c2">Edge Telemetry Agent</text>
<text xml:space="preserve" text-anchor="start" x="799.67" y="-448.4" font-family="Arial" font-size="13.00" fill="#f9b27c">Edge collector / normalization / buffering /</text>
<text xml:space="preserve" text-anchor="start" x="747.96" y="-426.8" font-family="Arial" font-size="15.00" fill="#f9b27c">Универсальная edge&#45;система, разворачиваемая</text>
<text xml:space="preserve" text-anchor="start" x="760.89" y="-408.8" font-family="Arial" font-size="15.00" fill="#f9b27c">на объекте рядом с полевыми протоколами и</text>
<text xml:space="preserve" text-anchor="start" x="765.06" y="-390.8" font-family="Arial" font-size="15.00" fill="#f9b27c">отвечающая за сбор данных, нормализацию,</text>
<text xml:space="preserve" text-anchor="start" x="752.56" y="-372.8" font-family="Arial" font-size="15.00" fill="#f9b27c">фильтрацию, буферизацию и доставку событий.</text>
</g>
<!-- service&#45;engineer -->
<g id="node2" class="node">
<title>service&#45;engineer</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="398.52,-519.6 0,-519.6 0,-339.6 398.52,-339.6 398.52,-519.6"/>
<text xml:space="preserve" text-anchor="start" x="107.57" y="-450.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Сервисный инженер</text>
<text xml:space="preserve" text-anchor="start" x="24.22" y="-427.6" font-family="Arial" font-size="15.00" fill="#c2f0c2">Настраивает источники данных, схему сигналов,</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-409.6" font-family="Arial" font-size="15.00" fill="#c2f0c2">правила доставки и эксплуатационные параметры</text>
<text xml:space="preserve" text-anchor="start" x="59.22" y="-391.6" font-family="Arial" font-size="15.00" fill="#c2f0c2">edge&#45;агента и центральной платформы.</text>
</g>
<!-- local&#45;grafana -->
<g id="node3" class="node">
<title>local&#45;grafana</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="370.19,-180 28.32,-180 28.32,0 370.19,0 370.19,-180"/>
<text xml:space="preserve" text-anchor="start" x="136.44" y="-138.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Local Grafana</text>
<text xml:space="preserve" text-anchor="start" x="80.03" y="-117.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Grafana OSS / grafana&#45;mqtt&#45;datasource /</text>
<text xml:space="preserve" text-anchor="start" x="113.4" y="-96.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Временный dev/test UI из</text>
<text xml:space="preserve" text-anchor="start" x="70.88" y="-78.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">infra/local/compose.yaml. Использует</text>
<text xml:space="preserve" text-anchor="start" x="48.38" y="-60.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">grafana&#45;mqtt&#45;datasource для live&#45;view MQTT</text>
<text xml:space="preserve" text-anchor="start" x="68.37" y="-42.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">payload и не считается частью target</text>
<text xml:space="preserve" text-anchor="start" x="120.88" y="-24.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">production architecture.</text>
</g>
<!-- local&#45;mqtt&#45;broker -->
<g id="node4" class="node">
<title>local&#45;mqtt&#45;broker</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1112.3,-180 726.22,-180 726.22,0 1112.3,0 1112.3,-180"/>
<text xml:space="preserve" text-anchor="start" x="832.02" y="-129.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Local MQTT Broker</text>
<text xml:space="preserve" text-anchor="start" x="794.97" y="-108.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Eclipse Mosquitto / localhost:1883 / Docker</text>
<text xml:space="preserve" text-anchor="start" x="796.31" y="-87.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Временный dev/test MQTT broker из</text>
<text xml:space="preserve" text-anchor="start" x="782.55" y="-69.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">infra/local/compose.yaml. Используется</text>
<text xml:space="preserve" text-anchor="start" x="746.27" y="-51.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">текущей реализацией edge_agent как локальный</text>
<text xml:space="preserve" text-anchor="start" x="872.14" y="-33.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">publish target.</text>
</g>
<!-- edge&#45;telemetry&#45;agent&#45;&gt;local&#45;mqtt&#45;broker -->
<g id="edge1" class="edge">
<title>edge&#45;telemetry&#45;agent&#45;&gt;local&#45;mqtt&#45;broker</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M919.26,-339.9C919.26,-293.94 919.26,-237.67 919.26,-190.27"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="921.88,-190.51 919.26,-183.01 916.63,-190.51 921.88,-190.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="919.26,-240 919.26,-279.6 1161.77,-279.6 1161.77,-240 919.26,-240"/>
<text xml:space="preserve" text-anchor="start" x="922.26" y="-262.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Публикует telemetry events и service</text>
<text xml:space="preserve" text-anchor="start" x="922.26" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">topics в локальный MQTT broker</text>
</g>
<!-- service&#45;engineer&#45;&gt;local&#45;grafana -->
<g id="edge2" class="edge">
<title>service&#45;engineer&#45;&gt;local&#45;grafana</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M199.26,-339.9C199.26,-293.94 199.26,-237.67 199.26,-190.27"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="201.88,-190.51 199.26,-183.01 196.63,-190.51 201.88,-190.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="199.26,-240 199.26,-279.6 463.53,-279.6 463.53,-240 199.26,-240"/>
<text xml:space="preserve" text-anchor="start" x="202.26" y="-262.6" font-family="Arial" font-size="14.00" fill="#22c55e">Проверяет live MQTT поток, topic tree и</text>
<text xml:space="preserve" text-anchor="start" x="202.26" y="-245.8" font-family="Arial" font-size="14.00" fill="#22c55e">dashboard</text>
</g>
<!-- local&#45;grafana&#45;&gt;local&#45;mqtt&#45;broker -->
<g id="edge3" class="edge">
<title>local&#45;grafana&#45;&gt;local&#45;mqtt&#45;broker</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M369.89,-90C473.62,-90 606.68,-90 715.87,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="715.83,-92.63 723.33,-90 715.83,-87.38 715.83,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="424.61,-93 424.61,-149.4 671.8,-149.4 671.8,-93 424.61,-93"/>
<text xml:space="preserve" text-anchor="start" x="427.61" y="-132.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Подписывается через</text>
<text xml:space="preserve" text-anchor="start" x="427.61" y="-115.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">grafana&#45;mqtt&#45;datasource на live MQTT</text>
<text xml:space="preserve" text-anchor="start" x="427.61" y="-98.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">topics</text>
</g>
</g>
</svg>
`;case"c2-edge-telemetry-agent-containers":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.3 (0)
 -->
<!-- Pages: 1 -->
<svg width="3073pt" height="1016pt"
 viewBox="0.00 0.00 3073.00 1016.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1000.65)">
<g id="clust1" class="cluster">
<title>cluster_field&#45;protocol&#45;gateways</title>
<polygon fill="#0d4b6c" stroke="#0b3c57" points="8,-696.4 8,-977.6 1268,-977.6 1268,-696.4 8,-696.4"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-964.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">ПРОТОКОЛЬНЫЕ ШЛЮЗЫ И SCADA&#45;КОНТРОЛЛЕРЫ</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_edge&#45;telemetry&#45;agent</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="920,-8 920,-628.8 2633,-628.8 2633,-8 920,-8"/>
<text xml:space="preserve" text-anchor="start" x="928" y="-615.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">EDGE TELEMETRY AGENT</text>
</g>
<!-- knx&#45;router -->
<g id="node1" class="node">
<title>knx&#45;router</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="368.02,-916.4 47.98,-916.4 47.98,-736.4 368.02,-736.4 368.02,-916.4"/>
<text xml:space="preserve" text-anchor="start" x="130.69" y="-820.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="174.64" y="-828.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">KNX Segment</text>
<text xml:space="preserve" text-anchor="start" x="311.42" y="-820.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="174.64" y="-807.2" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX / KNXnet&#45;IP</text>
</g>
<!-- modbus&#45;gateway -->
<g id="node2" class="node">
<title>modbus&#45;gateway</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="798.02,-916.4 477.98,-916.4 477.98,-736.4 798.02,-736.4 798.02,-916.4"/>
<text xml:space="preserve" text-anchor="start" x="542.42" y="-820.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="586.36" y="-828.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">Modbus Gateway</text>
<text xml:space="preserve" text-anchor="start" x="759.69" y="-820.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="586.36" y="-807.2" font-family="Arial" font-size="13.00" fill="#b6ecf7">Modbus TCP / Modbus RTU</text>
</g>
<!-- opc&#45;ua&#45;gateway -->
<g id="node3" class="node">
<title>opc&#45;ua&#45;gateway</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1228.02,-916.4 907.98,-916.4 907.98,-736.4 1228.02,-736.4 1228.02,-916.4"/>
<text xml:space="preserve" text-anchor="start" x="983.48" y="-820.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1027.43" y="-828.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">OPC UA Server</text>
<text xml:space="preserve" text-anchor="start" x="1178.63" y="-820.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1027.43" y="-807.2" font-family="Arial" font-size="13.00" fill="#b6ecf7">OPC UA</text>
</g>
<!-- collector&#45;runtime -->
<g id="node4" class="node">
<title>collector&#45;runtime</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1506.75,-567.6 1183.25,-567.6 1183.25,-387.6 1506.75,-387.6 1506.75,-567.6"/>
<text xml:space="preserve" text-anchor="start" x="1265.53" y="-517.4" font-family="Arial" font-size="20.00" fill="#ffe0c2">Collector Runtime</text>
<text xml:space="preserve" text-anchor="start" x="1302.37" y="-496.4" font-family="Arial" font-size="13.00" fill="#f9b27c">Python service</text>
<text xml:space="preserve" text-anchor="start" x="1236.21" y="-474.8" font-family="Arial" font-size="15.00" fill="#f9b27c">Основной runtime edge&#45;агента:</text>
<text xml:space="preserve" text-anchor="start" x="1219.95" y="-456.8" font-family="Arial" font-size="15.00" fill="#f9b27c">southbound&#45;адаптеры, сбор данных,</text>
<text xml:space="preserve" text-anchor="start" x="1203.31" y="-438.8" font-family="Arial" font-size="15.00" fill="#f9b27c">нормализация, фильтрация изменений и</text>
<text xml:space="preserve" text-anchor="start" x="1239.13" y="-420.8" font-family="Arial" font-size="15.00" fill="#f9b27c">постановка событий в outbox.</text>
</g>
<!-- delivery&#45;worker -->
<g id="node5" class="node">
<title>delivery&#45;worker</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="2507.67,-567.6 2138.33,-567.6 2138.33,-387.6 2507.67,-387.6 2507.67,-567.6"/>
<text xml:space="preserve" text-anchor="start" x="2251.88" y="-508.4" font-family="Arial" font-size="20.00" fill="#ffe0c2">Delivery Worker</text>
<text xml:space="preserve" text-anchor="start" x="2229.44" y="-487.4" font-family="Arial" font-size="13.00" fill="#f9b27c">Python worker / MQTT publisher</text>
<text xml:space="preserve" text-anchor="start" x="2162.95" y="-465.8" font-family="Arial" font-size="15.00" fill="#f9b27c">Фоновый контейнер доставки: читает outbox,</text>
<text xml:space="preserve" text-anchor="start" x="2168.37" y="-447.8" font-family="Arial" font-size="15.00" fill="#f9b27c">публикует telemetry events и service topics в</text>
<text xml:space="preserve" text-anchor="start" x="2158.38" y="-429.8" font-family="Arial" font-size="15.00" fill="#f9b27c">MQTT topic tree и обновляет статус доставки.</text>
</g>
<!-- configuration&#45;bundle -->
<g id="node6" class="node">
<title>configuration&#45;bundle</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1336.01,-228 959.99,-228 959.99,-48 1336.01,-48 1336.01,-228"/>
<text xml:space="preserve" text-anchor="start" x="1054.6" y="-168.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">Configuration Bundle</text>
<text xml:space="preserve" text-anchor="start" x="1116.93" y="-147.8" font-family="Arial" font-size="13.00" fill="#f9b27c">YAML files</text>
<text xml:space="preserve" text-anchor="start" x="989.64" y="-126.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Локальный набор конфигурации источников,</text>
<text xml:space="preserve" text-anchor="start" x="980.04" y="-108.2" font-family="Arial" font-size="15.00" fill="#f9b27c">модели сигналов, polling&#45;политик и параметров</text>
<text xml:space="preserve" text-anchor="start" x="1112.58" y="-90.2" font-family="Arial" font-size="15.00" fill="#f9b27c">доставки.</text>
</g>
<!-- outbox&#45;store -->
<g id="node7" class="node">
<title>outbox&#45;store</title>
<path fill="#a35829" stroke="#7e451d" stroke-width="2" d="M1790.17,-211.64C1790.17,-220.67 1713,-228 1618,-228 1523,-228 1445.83,-220.67 1445.83,-211.64 1445.83,-211.64 1445.83,-64.36 1445.83,-64.36 1445.83,-55.33 1523,-48 1618,-48 1713,-48 1790.17,-55.33 1790.17,-64.36 1790.17,-64.36 1790.17,-211.64 1790.17,-211.64"/>
<path fill="none" stroke="#7e451d" stroke-width="2" d="M1790.17,-211.64C1790.17,-202.61 1713,-195.27 1618,-195.27 1523,-195.27 1445.83,-202.61 1445.83,-211.64"/>
<text xml:space="preserve" text-anchor="start" x="1559.08" y="-168.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">Outbox Store</text>
<text xml:space="preserve" text-anchor="start" x="1598.13" y="-147.8" font-family="Arial" font-size="13.00" fill="#f9b27c">SQLite</text>
<text xml:space="preserve" text-anchor="start" x="1465.89" y="-126.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Локальное надежное хранилище исходящих</text>
<text xml:space="preserve" text-anchor="start" x="1465.89" y="-108.2" font-family="Arial" font-size="15.00" fill="#f9b27c">событий, статусов доставки и метаданных</text>
<text xml:space="preserve" text-anchor="start" x="1547.15" y="-90.2" font-family="Arial" font-size="15.00" fill="#f9b27c">повторных попыток.</text>
</g>
<!-- service&#45;engineer -->
<g id="node8" class="node">
<title>service&#45;engineer</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1736.26,-916.4 1337.74,-916.4 1337.74,-736.4 1736.26,-736.4 1736.26,-916.4"/>
<text xml:space="preserve" text-anchor="start" x="1445.32" y="-847.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Сервисный инженер</text>
<text xml:space="preserve" text-anchor="start" x="1361.97" y="-824.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">Настраивает источники данных, схему сигналов,</text>
<text xml:space="preserve" text-anchor="start" x="1357.8" y="-806.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">правила доставки и эксплуатационные параметры</text>
<text xml:space="preserve" text-anchor="start" x="1396.96" y="-788.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">edge&#45;агента и центральной платформы.</text>
</g>
<!-- monitoring&#45;alarm&#45;platform -->
<g id="node9" class="node">
<title>monitoring&#45;alarm&#45;platform</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="3042.67,-228 2673.33,-228 2673.33,-48 3042.67,-48 3042.67,-228"/>
<text xml:space="preserve" text-anchor="start" x="2732.96" y="-177.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">Monitoring &amp; Alarm Platform</text>
<text xml:space="preserve" text-anchor="start" x="2736.97" y="-156.8" font-family="Arial" font-size="13.00" fill="#f9b27c">Cloud monitoring platform / alarm engine /</text>
<text xml:space="preserve" text-anchor="start" x="2693.38" y="-135.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Центральная система в облаке/интернете для</text>
<text xml:space="preserve" text-anchor="start" x="2718.39" y="-117.2" font-family="Arial" font-size="15.00" fill="#f9b27c">приема событий, хранения телеметрии,</text>
<text xml:space="preserve" text-anchor="start" x="2695.05" y="-99.2" font-family="Arial" font-size="15.00" fill="#f9b27c">визуализации, alarm&#45;логики и маршрутизации</text>
<text xml:space="preserve" text-anchor="start" x="2810.07" y="-81.2" font-family="Arial" font-size="15.00" fill="#f9b27c">уведомлений.</text>
</g>
<!-- demo&#45;stand&#45;current&#45;monitored&#45;scope -->
<g id="node10" class="node">
<title>demo&#45;stand&#45;current&#45;monitored&#45;scope</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2226.14,-916.4 1845.86,-916.4 1845.86,-736.4 2226.14,-736.4 2226.14,-916.4"/>
<text xml:space="preserve" text-anchor="start" x="1865.91" y="-848.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">Demo Stand Current Monitored Scope</text>
<text xml:space="preserve" text-anchor="start" x="1910.27" y="-827.2" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX monitored signals / current read scope</text>
<text xml:space="preserve" text-anchor="start" x="1866.8" y="-805.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">Текущий набор сигналов demo&#45;стенда, которые</text>
<text xml:space="preserve" text-anchor="start" x="1932.2" y="-787.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">читает Edge Telemetry Agent.</text>
</g>
<!-- knx&#45;router&#45;&gt;collector&#45;runtime -->
<g id="edge3" class="edge">
<title>knx&#45;router&#45;&gt;collector&#45;runtime</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M324.72,-736.62C377.24,-700.63 441.53,-661.74 504.68,-636.8 726.02,-549.38 999.66,-509.41 1173.31,-491.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1173.36,-494.38 1180.56,-491.02 1172.83,-489.15 1173.36,-494.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="504.68,-636.8 504.68,-676.4 783,-676.4 783,-636.8 504.68,-636.8"/>
<text xml:space="preserve" text-anchor="start" x="507.68" y="-659.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Экспонирует group address и телеграммы</text>
<text xml:space="preserve" text-anchor="start" x="507.68" y="-642.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">через KNX/IP</text>
</g>
<!-- modbus&#45;gateway&#45;&gt;collector&#45;runtime -->
<g id="edge4" class="edge">
<title>modbus&#45;gateway&#45;&gt;collector&#45;runtime</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M732.63,-736.56C773.35,-701.84 822.96,-663.93 872.6,-636.8 966.88,-585.28 1080.9,-546.51 1173.3,-520.24"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1173.89,-522.8 1180.39,-518.24 1172.46,-517.75 1173.89,-522.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="872.6,-636.8 872.6,-676.4 1119,-676.4 1119,-636.8 872.6,-636.8"/>
<text xml:space="preserve" text-anchor="start" x="875.6" y="-659.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Экспонирует registers, coils и</text>
<text xml:space="preserve" text-anchor="start" x="875.6" y="-642.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">дискретные значения через Modbus</text>
</g>
<!-- opc&#45;ua&#45;gateway&#45;&gt;collector&#45;runtime -->
<g id="edge5" class="edge">
<title>opc&#45;ua&#45;gateway&#45;&gt;collector&#45;runtime</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1109.96,-736.8C1127.41,-703.93 1149.21,-667.27 1173.24,-636.8 1190.23,-615.25 1210.25,-594.04 1230.5,-574.49"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1232.16,-576.53 1235.77,-569.46 1228.53,-572.74 1232.16,-576.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1173.24,-636.8 1173.24,-676.4 1408,-676.4 1408,-636.8 1173.24,-636.8"/>
<text xml:space="preserve" text-anchor="start" x="1176.24" y="-659.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Экспонирует nodes, subscriptions и</text>
<text xml:space="preserve" text-anchor="start" x="1176.24" y="-642.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">значения через OPC UA</text>
</g>
<!-- collector&#45;runtime&#45;&gt;configuration&#45;bundle -->
<g id="edge6" class="edge">
<title>collector&#45;runtime&#45;&gt;configuration&#45;bundle</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1183.52,-395.03C1160.27,-376.14 1139.56,-353.73 1125.72,-327.6 1111.38,-300.51 1110.39,-268.21 1114.95,-238.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1117.5,-238.76 1116.19,-230.92 1112.33,-237.87 1117.5,-238.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1125.72,-288 1125.72,-327.6 1404,-327.6 1404,-288 1125.72,-288"/>
<text xml:space="preserve" text-anchor="start" x="1128.72" y="-310.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Загружает описания источников, модель</text>
<text xml:space="preserve" text-anchor="start" x="1128.72" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">сигналов и runtime&#45;политики</text>
</g>
<!-- collector&#45;runtime&#45;&gt;outbox&#45;store -->
<g id="edge7" class="edge">
<title>collector&#45;runtime&#45;&gt;outbox&#45;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1416.73,-387.9C1454.21,-341.55 1500.18,-284.7 1538.72,-237.04"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1540.75,-238.7 1543.42,-231.22 1536.67,-235.4 1540.75,-238.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1489.69,-288 1489.69,-327.6 1756.29,-327.6 1756.29,-288 1489.69,-288"/>
<text xml:space="preserve" text-anchor="start" x="1492.69" y="-310.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Сохраняет нормализованные события и</text>
<text xml:space="preserve" text-anchor="start" x="1492.69" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">задания на доставку</text>
</g>
<!-- delivery&#45;worker&#45;&gt;configuration&#45;bundle -->
<g id="edge8" class="edge">
<title>delivery&#45;worker&#45;&gt;configuration&#45;bundle</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2138.59,-411.97C1984.01,-357.83 1787.66,-289.16 1783,-288 1611.97,-245.43 1561.71,-271.86 1391,-228 1376.19,-224.19 1361.02,-219.83 1345.84,-215.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1346.71,-212.63 1338.76,-212.88 1345.13,-217.64 1346.71,-212.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1889.66,-288 1889.66,-327.6 2174.16,-327.6 2174.16,-288 1889.66,-288"/>
<text xml:space="preserve" text-anchor="start" x="1892.66" y="-310.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Загружает настройки MQTT, topic contract</text>
<text xml:space="preserve" text-anchor="start" x="1892.66" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">и retry&#45;политики</text>
</g>
<!-- delivery&#45;worker&#45;&gt;outbox&#45;store -->
<g id="edge9" class="edge">
<title>delivery&#45;worker&#45;&gt;outbox&#45;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2287.57,-387.94C2269.11,-352.07 2243.14,-313.26 2209,-288 2090.67,-200.44 1926.44,-164.05 1801.12,-149.06"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1801.79,-146.5 1794.03,-148.24 1801.18,-151.71 1801.79,-146.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2247.34,-288 2247.34,-327.6 2517.84,-327.6 2517.84,-288 2247.34,-288"/>
<text xml:space="preserve" text-anchor="start" x="2250.34" y="-310.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Читает ожидающие события и обновляет</text>
<text xml:space="preserve" text-anchor="start" x="2250.34" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">статус доставки</text>
</g>
<!-- delivery&#45;worker&#45;&gt;monitoring&#45;alarm&#45;platform -->
<g id="edge10" class="edge">
<title>delivery&#45;worker&#45;&gt;monitoring&#45;alarm&#45;platform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2507.67,-391.34C2545.62,-371.78 2584.73,-350.08 2620,-327.6 2663.55,-299.83 2708.63,-265.7 2747.68,-234.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2748.89,-236.53 2753.06,-229.77 2745.58,-232.46 2748.89,-236.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2674.87,-288 2674.87,-327.6 2917.39,-327.6 2917.39,-288 2674.87,-288"/>
<text xml:space="preserve" text-anchor="start" x="2677.87" y="-310.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Публикует telemetry events и service</text>
<text xml:space="preserve" text-anchor="start" x="2677.87" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">topics по MQTT 5.0</text>
</g>
<!-- service&#45;engineer&#45;&gt;collector&#45;runtime -->
<g id="edge2" class="edge">
<title>service&#45;engineer&#45;&gt;collector&#45;runtime</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1487.8,-736.54C1471.12,-706.41 1451.95,-671.78 1433.18,-637.87"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1435.55,-636.74 1429.62,-631.45 1430.96,-639.28 1435.55,-636.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1175.86,-682.75 1175.86,-722.35 1458.02,-722.35 1458.02,-682.75 1175.86,-682.75"/>
<text xml:space="preserve" text-anchor="start" x="1178.86" y="-705.35" font-family="Arial" font-size="14.00" fill="#22c55e">Настраивает адаптеры, модель сигналов,</text>
<text xml:space="preserve" text-anchor="start" x="1178.86" y="-688.55" font-family="Arial" font-size="14.00" fill="#22c55e">polling и доставку</text>
</g>
<!-- demo&#45;stand&#45;current&#45;monitored&#45;scope&#45;&gt;collector&#45;runtime -->
<g id="edge1" class="edge">
<title>demo&#45;stand&#45;current&#45;monitored&#45;scope&#45;&gt;collector&#45;runtime</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1868.65,-736.42C1842.72,-722.88 1816.19,-709.18 1791,-696.4 1700.63,-650.56 1599.18,-600.88 1515.89,-560.55"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1517.23,-558.28 1509.33,-557.38 1514.94,-563.01 1517.23,-558.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1742.93,-645.2 1742.93,-668 1769.92,-668 1769.92,-645.2 1742.93,-645.2"/>
<text xml:space="preserve" text-anchor="start" x="1745.93" y="-653.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
</g>
</svg>
`;case"c2-monitoring-alarm-platform-containers":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.3 (0)
 -->
<!-- Pages: 1 -->
<svg width="2073pt" height="1917pt"
 viewBox="0.00 0.00 2073.00 1917.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1902.25)">
<g id="clust1" class="cluster">
<title>cluster_monitoring&#45;alarm&#45;platform</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="472.2,-299.6 472.2,-1599.6 2035.2,-1599.6 2035.2,-299.6 472.2,-299.6"/>
<text xml:space="preserve" text-anchor="start" x="480.2" y="-1586.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">MONITORING &amp; ALARM PLATFORM</text>
</g>
<!-- operator&#45;dashboard -->
<g id="node1" class="node">
<title>operator&#45;dashboard</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="899.04,-1538.4 521.36,-1538.4 521.36,-1358.4 899.04,-1358.4 899.04,-1538.4"/>
<text xml:space="preserve" text-anchor="start" x="619.04" y="-1479.2" font-family="Arial" font-size="20.00" fill="#ffe0c2">Operator Dashboard</text>
<text xml:space="preserve" text-anchor="start" x="682.02" y="-1458.2" font-family="Arial" font-size="13.00" fill="#f9b27c">Web SPA</text>
<text xml:space="preserve" text-anchor="start" x="551.42" y="-1436.6" font-family="Arial" font-size="15.00" fill="#f9b27c">Веб&#45;интерфейс для операторов и инженеров:</text>
<text xml:space="preserve" text-anchor="start" x="541.41" y="-1418.6" font-family="Arial" font-size="15.00" fill="#f9b27c">панели мониторинга, состояние alarm, история</text>
<text xml:space="preserve" text-anchor="start" x="606.01" y="-1400.6" font-family="Arial" font-size="15.00" fill="#f9b27c">событий и настройка правил.</text>
</g>
<!-- mqtt&#45;ingestion&#45;gateway -->
<g id="node2" class="node">
<title>mqtt&#45;ingestion&#45;gateway</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1617.14,-1538.4 1265.25,-1538.4 1265.25,-1358.4 1617.14,-1358.4 1617.14,-1538.4"/>
<text xml:space="preserve" text-anchor="start" x="1327.27" y="-1497.2" font-family="Arial" font-size="20.00" fill="#ffe0c2">MQTT Ingestion Gateway</text>
<text xml:space="preserve" text-anchor="start" x="1348.73" y="-1476.2" font-family="Arial" font-size="13.00" fill="#f9b27c">MQTT broker / ingestion service</text>
<text xml:space="preserve" text-anchor="start" x="1291.16" y="-1454.6" font-family="Arial" font-size="15.00" fill="#f9b27c">Принимает MQTT telemetry events и service</text>
<text xml:space="preserve" text-anchor="start" x="1294.07" y="-1436.6" font-family="Arial" font-size="15.00" fill="#f9b27c">topics от edge&#45;агентов, восстанавливает</text>
<text xml:space="preserve" text-anchor="start" x="1289.46" y="-1418.6" font-family="Arial" font-size="15.00" fill="#f9b27c">routing context из topic, валидирует payload</text>
<text xml:space="preserve" text-anchor="start" x="1285.31" y="-1400.6" font-family="Arial" font-size="15.00" fill="#f9b27c">и передает canonical events на хранение и в</text>
<text xml:space="preserve" text-anchor="start" x="1376.58" y="-1382.6" font-family="Arial" font-size="15.00" fill="#f9b27c">Alarm Rule Engine.</text>
</g>
<!-- platform&#45;api -->
<g id="node3" class="node">
<title>platform&#45;api</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="894.87,-1198.8 525.53,-1198.8 525.53,-1018.8 894.87,-1018.8 894.87,-1198.8"/>
<text xml:space="preserve" text-anchor="start" x="654.07" y="-1139.6" font-family="Arial" font-size="20.00" fill="#ffe0c2">Platform API</text>
<text xml:space="preserve" text-anchor="start" x="628.56" y="-1118.6" font-family="Arial" font-size="13.00" fill="#f9b27c">HTTP API / backend service</text>
<text xml:space="preserve" text-anchor="start" x="550.15" y="-1097" font-family="Arial" font-size="15.00" fill="#f9b27c">Backend API для операторского интерфейса,</text>
<text xml:space="preserve" text-anchor="start" x="585.17" y="-1079" font-family="Arial" font-size="15.00" fill="#f9b27c">состояния alarm, истории событий,</text>
<text xml:space="preserve" text-anchor="start" x="545.58" y="-1061" font-family="Arial" font-size="15.00" fill="#f9b27c">конфигурации правил и политик уведомлений.</text>
</g>
<!-- alarm&#45;rule&#45;engine -->
<g id="node4" class="node">
<title>alarm&#45;rule&#45;engine</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1728.87,-859.2 1359.53,-859.2 1359.53,-679.2 1728.87,-679.2 1728.87,-859.2"/>
<text xml:space="preserve" text-anchor="start" x="1460.82" y="-800" font-family="Arial" font-size="20.00" fill="#ffe0c2">Alarm Rule Engine</text>
<text xml:space="preserve" text-anchor="start" x="1453.88" y="-779" font-family="Arial" font-size="13.00" fill="#f9b27c">Rule engine / stream processor</text>
<text xml:space="preserve" text-anchor="start" x="1379.58" y="-757.4" font-family="Arial" font-size="15.00" fill="#f9b27c">Обрабатывает входящие события по правилам,</text>
<text xml:space="preserve" text-anchor="start" x="1394.17" y="-739.4" font-family="Arial" font-size="15.00" fill="#f9b27c">ведет жизненный цикл alarm и инициирует</text>
<text xml:space="preserve" text-anchor="start" x="1450.43" y="-721.4" font-family="Arial" font-size="15.00" fill="#f9b27c">уведомления и эскалации.</text>
</g>
<!-- notification&#45;service -->
<g id="node5" class="node">
<title>notification&#45;service</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1739.29,-519.6 1349.11,-519.6 1349.11,-339.6 1739.29,-339.6 1739.29,-519.6"/>
<text xml:space="preserve" text-anchor="start" x="1458.61" y="-451.4" font-family="Arial" font-size="20.00" fill="#ffe0c2">Notification Service</text>
<text xml:space="preserve" text-anchor="start" x="1460.75" y="-430.4" font-family="Arial" font-size="13.00" fill="#f9b27c">Worker / notification gateway</text>
<text xml:space="preserve" text-anchor="start" x="1369.16" y="-408.8" font-family="Arial" font-size="15.00" fill="#f9b27c">Маршрутизирует уведомления во внешние каналы</text>
<text xml:space="preserve" text-anchor="start" x="1391.67" y="-390.8" font-family="Arial" font-size="15.00" fill="#f9b27c">по alarm&#45;политикам и правилам эскалации.</text>
</g>
<!-- telemetry&#45;store -->
<g id="node6" class="node">
<title>telemetry&#45;store</title>
<path fill="#a35829" stroke="#7e451d" stroke-width="2" d="M1210.29,-503.24C1210.29,-512.27 1122.85,-519.6 1015.2,-519.6 907.55,-519.6 820.11,-512.27 820.11,-503.24 820.11,-503.24 820.11,-355.96 820.11,-355.96 820.11,-346.93 907.55,-339.6 1015.2,-339.6 1122.85,-339.6 1210.29,-346.93 1210.29,-355.96 1210.29,-355.96 1210.29,-503.24 1210.29,-503.24"/>
<path fill="none" stroke="#7e451d" stroke-width="2" d="M1210.29,-503.24C1210.29,-494.21 1122.85,-486.87 1015.2,-486.87 907.55,-486.87 820.11,-494.21 820.11,-503.24"/>
<text xml:space="preserve" text-anchor="start" x="944.06" y="-460.4" font-family="Arial" font-size="20.00" fill="#ffe0c2">Telemetry Store</text>
<text xml:space="preserve" text-anchor="start" x="915.13" y="-439.4" font-family="Arial" font-size="13.00" fill="#f9b27c">Time&#45;series DB / relational storage</text>
<text xml:space="preserve" text-anchor="start" x="840.16" y="-417.8" font-family="Arial" font-size="15.00" fill="#f9b27c">Хранит телеметрию, служебные события, историю</text>
<text xml:space="preserve" text-anchor="start" x="881.84" y="-399.8" font-family="Arial" font-size="15.00" fill="#f9b27c">alarm и данные для мониторинговых и</text>
<text xml:space="preserve" text-anchor="start" x="927.68" y="-381.8" font-family="Arial" font-size="15.00" fill="#f9b27c">операторских запросов.</text>
</g>
<!-- service&#45;engineer -->
<g id="node7" class="node">
<title>service&#45;engineer</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="964.46,-1887.2 565.94,-1887.2 565.94,-1707.2 964.46,-1707.2 964.46,-1887.2"/>
<text xml:space="preserve" text-anchor="start" x="673.51" y="-1818.2" font-family="Arial" font-size="20.00" fill="#f8fafc">Сервисный инженер</text>
<text xml:space="preserve" text-anchor="start" x="590.16" y="-1795.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">Настраивает источники данных, схему сигналов,</text>
<text xml:space="preserve" text-anchor="start" x="586" y="-1777.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">правила доставки и эксплуатационные параметры</text>
<text xml:space="preserve" text-anchor="start" x="625.16" y="-1759.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">edge&#45;агента и центральной платформы.</text>
</g>
<!-- operator&#45;dispatcher -->
<g id="node8" class="node">
<title>operator&#45;dispatcher</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="375.95,-1887.2 2.44,-1887.2 2.44,-1707.2 375.95,-1707.2 375.95,-1887.2"/>
<text xml:space="preserve" text-anchor="start" x="86.4" y="-1818.2" font-family="Arial" font-size="20.00" fill="#f8fafc">Оператор / диспетчер</text>
<text xml:space="preserve" text-anchor="start" x="32.92" y="-1795.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">Работает с событиями, текущим состоянием</text>
<text xml:space="preserve" text-anchor="start" x="22.5" y="-1777.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">объекта и alarm через центральную платформу</text>
<text xml:space="preserve" text-anchor="start" x="141.27" y="-1759.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">мониторинга.</text>
</g>
<!-- edge&#45;telemetry&#45;agent -->
<g id="node9" class="node">
<title>edge&#45;telemetry&#45;agent</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1457.55,-1887.2 1074.85,-1887.2 1074.85,-1707.2 1457.55,-1707.2 1457.55,-1887.2"/>
<text xml:space="preserve" text-anchor="start" x="1166.7" y="-1837" font-family="Arial" font-size="20.00" fill="#ffe0c2">Edge Telemetry Agent</text>
<text xml:space="preserve" text-anchor="start" x="1146.61" y="-1816" font-family="Arial" font-size="13.00" fill="#f9b27c">Edge collector / normalization / buffering /</text>
<text xml:space="preserve" text-anchor="start" x="1094.9" y="-1794.4" font-family="Arial" font-size="15.00" fill="#f9b27c">Универсальная edge&#45;система, разворачиваемая</text>
<text xml:space="preserve" text-anchor="start" x="1107.83" y="-1776.4" font-family="Arial" font-size="15.00" fill="#f9b27c">на объекте рядом с полевыми протоколами и</text>
<text xml:space="preserve" text-anchor="start" x="1112" y="-1758.4" font-family="Arial" font-size="15.00" fill="#f9b27c">отвечающая за сбор данных, нормализацию,</text>
<text xml:space="preserve" text-anchor="start" x="1099.5" y="-1740.4" font-family="Arial" font-size="15.00" fill="#f9b27c">фильтрацию, буферизацию и доставку событий.</text>
</g>
<!-- notification&#45;channels -->
<g id="node10" class="node">
<title>notification&#45;channels</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="378.4,-180 0,-180 0,0 378.4,0 378.4,-180"/>
<text xml:space="preserve" text-anchor="start" x="48.12" y="-84.4" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-120.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Каналы уведомлений</text>
<text xml:space="preserve" text-anchor="start" x="356.39" y="-84.4" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-99.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Email / SMS / Push / Webhook</text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-78.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Email, SMS, push, webhook и другие</text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-60.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">внешние облачные каналы доставки</text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-42.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">тревог и служебных уведомлений.</text>
</g>
<!-- operator&#45;dashboard&#45;&gt;platform&#45;api -->
<g id="edge3" class="edge">
<title>operator&#45;dashboard&#45;&gt;platform&#45;api</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M710.2,-1358.7C710.2,-1312.74 710.2,-1256.47 710.2,-1209.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="712.82,-1209.31 710.2,-1201.81 707.57,-1209.31 712.82,-1209.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="710.2,-1258.8 710.2,-1298.4 945.69,-1298.4 945.69,-1258.8 710.2,-1258.8"/>
<text xml:space="preserve" text-anchor="start" x="713.2" y="-1281.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Запрашивает панели мониторинга,</text>
<text xml:space="preserve" text-anchor="start" x="713.2" y="-1264.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">состояние alarm и конфигурацию</text>
</g>
<!-- mqtt&#45;ingestion&#45;gateway&#45;&gt;alarm&#45;rule&#45;engine -->
<g id="edge4" class="edge">
<title>mqtt&#45;ingestion&#45;gateway&#45;&gt;alarm&#45;rule&#45;engine</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1498.03,-1358.58C1554.99,-1263.86 1638.85,-1107.34 1672.2,-958.8 1679.46,-926.43 1668.25,-895.04 1649.87,-867.46"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1652.15,-866.13 1645.69,-861.5 1647.85,-869.14 1652.15,-866.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1655.4,-1089 1655.4,-1128.6 1954.68,-1128.6 1954.68,-1089 1655.4,-1089"/>
<text xml:space="preserve" text-anchor="start" x="1658.4" y="-1111.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Передает нормализованные события в Alarm</text>
<text xml:space="preserve" text-anchor="start" x="1658.4" y="-1094.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Rule Engine</text>
</g>
<!-- mqtt&#45;ingestion&#45;gateway&#45;&gt;telemetry&#45;store -->
<g id="edge5" class="edge">
<title>mqtt&#45;ingestion&#45;gateway&#45;&gt;telemetry&#45;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1318.06,-1358.6C1208.27,-1271.12 1055.08,-1126.49 989.43,-958.8 972.95,-916.69 1002.44,-903.75 1010.2,-859.2 1029.55,-748.07 1027.74,-618.27 1023.04,-530.87"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1025.66,-530.79 1022.62,-523.45 1020.42,-531.09 1025.66,-530.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="989.43,-919.2 989.43,-958.8 1259.2,-958.8 1259.2,-919.2 989.43,-919.2"/>
<text xml:space="preserve" text-anchor="start" x="992.43" y="-941.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Сохраняет canonical events и служебные</text>
<text xml:space="preserve" text-anchor="start" x="992.43" y="-925" font-family="Arial" font-size="14.00" fill="#c9c9c9">события</text>
</g>
<!-- platform&#45;api&#45;&gt;alarm&#45;rule&#45;engine -->
<g id="edge6" class="edge">
<title>platform&#45;api&#45;&gt;alarm&#45;rule&#45;engine</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M894.69,-1078.5C1010.85,-1055.65 1161.8,-1017.7 1286.2,-958.8 1337.9,-934.32 1389.81,-898.97 1433.37,-865.47"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1434.97,-867.54 1439.29,-860.87 1431.76,-863.4 1434.97,-867.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1354.88,-919.2 1354.88,-958.8 1644.86,-958.8 1644.86,-919.2 1354.88,-919.2"/>
<text xml:space="preserve" text-anchor="start" x="1357.88" y="-941.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Читает активные alarm и управляет</text>
<text xml:space="preserve" text-anchor="start" x="1357.88" y="-925" font-family="Arial" font-size="14.00" fill="#c9c9c9">конфигурацией правил в Alarm Rule Engine</text>
</g>
<!-- platform&#45;api&#45;&gt;telemetry&#45;store -->
<g id="edge7" class="edge">
<title>platform&#45;api&#45;&gt;telemetry&#45;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M687.17,-1019.16C668.59,-928.88 653.18,-787.21 705.03,-679.2 735.85,-615.01 792.2,-562.18 848.51,-521.98"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="849.71,-524.34 854.34,-517.88 846.69,-520.05 849.71,-524.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="705.03,-749.4 705.03,-789 987.2,-789 987.2,-749.4 705.03,-749.4"/>
<text xml:space="preserve" text-anchor="start" x="708.03" y="-772" font-family="Arial" font-size="14.00" fill="#c9c9c9">Читает телеметрию, историю и временные</text>
<text xml:space="preserve" text-anchor="start" x="708.03" y="-755.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">линии alarm</text>
</g>
<!-- alarm&#45;rule&#45;engine&#45;&gt;notification&#45;service -->
<g id="edge8" class="edge">
<title>alarm&#45;rule&#45;engine&#45;&gt;notification&#45;service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1544.2,-679.5C1544.2,-633.54 1544.2,-577.27 1544.2,-529.87"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1546.82,-530.11 1544.2,-522.61 1541.57,-530.11 1546.82,-530.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1544.2,-588 1544.2,-610.8 1775.8,-610.8 1775.8,-588 1544.2,-588"/>
<text xml:space="preserve" text-anchor="start" x="1547.2" y="-593.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Запускает доставку уведомлений</text>
</g>
<!-- alarm&#45;rule&#45;engine&#45;&gt;telemetry&#45;store -->
<g id="edge9" class="edge">
<title>alarm&#45;rule&#45;engine&#45;&gt;telemetry&#45;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1359.71,-695.73C1312.4,-673.92 1262.7,-648.01 1219.47,-619.2 1180.08,-592.94 1140.88,-559.12 1107.52,-527.39"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1109.47,-525.62 1102.24,-522.32 1105.83,-529.41 1109.47,-525.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1219.47,-579.6 1219.47,-619.2 1517.2,-619.2 1517.2,-579.6 1219.47,-579.6"/>
<text xml:space="preserve" text-anchor="start" x="1222.47" y="-602.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Читает контекст и записывает состояние и</text>
<text xml:space="preserve" text-anchor="start" x="1222.47" y="-585.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">историю alarm</text>
</g>
<!-- notification&#45;service&#45;&gt;notification&#45;channels -->
<g id="edge10" class="edge">
<title>notification&#45;service&#45;&gt;notification&#45;channels</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1368.54,-339.61C1334.81,-324.76 1299.35,-310.63 1265.2,-299.6 967.07,-203.35 607.38,-144.62 388.61,-114.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="389.08,-112.38 381.3,-113.98 388.38,-117.58 389.08,-112.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1180.31,-240 1180.31,-279.6 1389.37,-279.6 1389.37,-240 1180.31,-240"/>
<text xml:space="preserve" text-anchor="start" x="1183.31" y="-262.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Отправляет email, SMS, push и</text>
<text xml:space="preserve" text-anchor="start" x="1183.31" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">webhook&#45;уведомления</text>
</g>
<!-- service&#45;engineer&#45;&gt;operator&#45;dashboard -->
<g id="edge1" class="edge">
<title>service&#45;engineer&#45;&gt;operator&#45;dashboard</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M751.11,-1707.34C743.41,-1658.81 733.86,-1598.57 725.92,-1548.52"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="728.54,-1548.32 724.78,-1541.32 723.36,-1549.14 728.54,-1548.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="740.99,-1607.6 740.99,-1647.2 995.93,-1647.2 995.93,-1607.6 740.99,-1607.6"/>
<text xml:space="preserve" text-anchor="start" x="743.99" y="-1630.2" font-family="Arial" font-size="14.00" fill="#22c55e">Настраивает правила, получателей и</text>
<text xml:space="preserve" text-anchor="start" x="743.99" y="-1613.4" font-family="Arial" font-size="14.00" fill="#22c55e">панели мониторинга</text>
</g>
<!-- operator&#45;dispatcher&#45;&gt;operator&#45;dashboard -->
<g id="edge2" class="edge">
<title>operator&#45;dispatcher&#45;&gt;operator&#45;dashboard</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M289.07,-1707.41C328.37,-1674.34 374.69,-1637.59 419.25,-1607.6 452.45,-1585.26 489.11,-1563.37 524.88,-1543.34"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="526.03,-1545.7 531.31,-1539.76 523.48,-1541.12 526.03,-1545.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="419.25,-1607.6 419.25,-1647.2 709.2,-1647.2 709.2,-1607.6 419.25,-1607.6"/>
<text xml:space="preserve" text-anchor="start" x="422.25" y="-1630.2" font-family="Arial" font-size="14.00" fill="#22c55e">Работает с панелями мониторинга, alarm и</text>
<text xml:space="preserve" text-anchor="start" x="422.25" y="-1613.4" font-family="Arial" font-size="14.00" fill="#22c55e">историей</text>
</g>
<!-- notification&#45;channels&#45;&gt;operator&#45;dispatcher -->
<g id="edge11" class="edge">
<title>notification&#45;channels&#45;&gt;operator&#45;dispatcher</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M189.2,-179.85C189.2,-247.93 189.2,-344.2 189.2,-428.6 189.2,-1449.4 189.2,-1449.4 189.2,-1449.4 189.2,-1532.87 189.2,-1627.64 189.2,-1696.99"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="186.57,-1696.94 189.2,-1704.44 191.82,-1696.94 186.57,-1696.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="189.2,-919.2 189.2,-958.8 432.47,-958.8 432.47,-919.2 189.2,-919.2"/>
<text xml:space="preserve" text-anchor="start" x="192.2" y="-941.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Доставляют уведомления по alarm и</text>
<text xml:space="preserve" text-anchor="start" x="192.2" y="-925" font-family="Arial" font-size="14.00" fill="#c9c9c9">служебные уведомления</text>
</g>
</g>
</svg>
`;case"c1-system-context":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.3 (0)
 -->
<!-- Pages: 1 -->
<svg width="2281pt" height="1212pt"
 viewBox="0.00 0.00 2281.00 1212.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1197.05)">
<!-- field&#45;devices -->
<g id="node1" class="node">
<title>field&#45;devices</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="416.85,-1182 37.78,-1182 37.78,-1002 416.85,-1002 416.85,-1182"/>
<text xml:space="preserve" text-anchor="start" x="57.84" y="-1113.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Полевые устройства и контроллеры</text>
<text xml:space="preserve" text-anchor="start" x="152.54" y="-1092.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Field devices / PLC / RTU</text>
<text xml:space="preserve" text-anchor="start" x="72.29" y="-1071.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Датчики, актуаторы, PLC, RTU и локальные</text>
<text xml:space="preserve" text-anchor="start" x="98.12" y="-1053.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">системы автоматизации на объекте.</text>
</g>
<!-- service&#45;engineer -->
<g id="node2" class="node">
<title>service&#45;engineer</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1150.57,-1182 752.06,-1182 752.06,-1002 1150.57,-1002 1150.57,-1182"/>
<text xml:space="preserve" text-anchor="start" x="859.63" y="-1113" font-family="Arial" font-size="20.00" fill="#f8fafc">Сервисный инженер</text>
<text xml:space="preserve" text-anchor="start" x="776.28" y="-1090" font-family="Arial" font-size="15.00" fill="#c2f0c2">Настраивает источники данных, схему сигналов,</text>
<text xml:space="preserve" text-anchor="start" x="772.12" y="-1072" font-family="Arial" font-size="15.00" fill="#c2f0c2">правила доставки и эксплуатационные параметры</text>
<text xml:space="preserve" text-anchor="start" x="811.28" y="-1054" font-family="Arial" font-size="15.00" fill="#c2f0c2">edge&#45;агента и центральной платформы.</text>
</g>
<!-- operator&#45;dispatcher -->
<g id="node3" class="node">
<title>operator&#45;dispatcher</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="2080.07,-1182 1706.56,-1182 1706.56,-1002 2080.07,-1002 2080.07,-1182"/>
<text xml:space="preserve" text-anchor="start" x="1790.52" y="-1113" font-family="Arial" font-size="20.00" fill="#f8fafc">Оператор / диспетчер</text>
<text xml:space="preserve" text-anchor="start" x="1737.04" y="-1090" font-family="Arial" font-size="15.00" fill="#c2f0c2">Работает с событиями, текущим состоянием</text>
<text xml:space="preserve" text-anchor="start" x="1726.62" y="-1072" font-family="Arial" font-size="15.00" fill="#c2f0c2">объекта и alarm через центральную платформу</text>
<text xml:space="preserve" text-anchor="start" x="1845.39" y="-1054" font-family="Arial" font-size="15.00" fill="#c2f0c2">мониторинга.</text>
</g>
<!-- edge&#45;telemetry&#45;agent -->
<g id="node4" class="node">
<title>edge&#45;telemetry&#45;agent</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="865.67,-502.8 482.97,-502.8 482.97,-322.8 865.67,-322.8 865.67,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="574.82" y="-452.6" font-family="Arial" font-size="20.00" fill="#ffe0c2">Edge Telemetry Agent</text>
<text xml:space="preserve" text-anchor="start" x="554.73" y="-431.6" font-family="Arial" font-size="13.00" fill="#f9b27c">Edge collector / normalization / buffering /</text>
<text xml:space="preserve" text-anchor="start" x="503.02" y="-410" font-family="Arial" font-size="15.00" fill="#f9b27c">Универсальная edge&#45;система, разворачиваемая</text>
<text xml:space="preserve" text-anchor="start" x="515.95" y="-392" font-family="Arial" font-size="15.00" fill="#f9b27c">на объекте рядом с полевыми протоколами и</text>
<text xml:space="preserve" text-anchor="start" x="520.12" y="-374" font-family="Arial" font-size="15.00" fill="#f9b27c">отвечающая за сбор данных, нормализацию,</text>
<text xml:space="preserve" text-anchor="start" x="507.62" y="-356" font-family="Arial" font-size="15.00" fill="#f9b27c">фильтрацию, буферизацию и доставку событий.</text>
</g>
<!-- monitoring&#45;alarm&#45;platform -->
<g id="node5" class="node">
<title>monitoring&#45;alarm&#45;platform</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1672.99,-502.8 1303.65,-502.8 1303.65,-322.8 1672.99,-322.8 1672.99,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1363.28" y="-452.6" font-family="Arial" font-size="20.00" fill="#ffe0c2">Monitoring &amp; Alarm Platform</text>
<text xml:space="preserve" text-anchor="start" x="1367.29" y="-431.6" font-family="Arial" font-size="13.00" fill="#f9b27c">Cloud monitoring platform / alarm engine /</text>
<text xml:space="preserve" text-anchor="start" x="1323.7" y="-410" font-family="Arial" font-size="15.00" fill="#f9b27c">Центральная система в облаке/интернете для</text>
<text xml:space="preserve" text-anchor="start" x="1348.71" y="-392" font-family="Arial" font-size="15.00" fill="#f9b27c">приема событий, хранения телеметрии,</text>
<text xml:space="preserve" text-anchor="start" x="1325.37" y="-374" font-family="Arial" font-size="15.00" fill="#f9b27c">визуализации, alarm&#45;логики и маршрутизации</text>
<text xml:space="preserve" text-anchor="start" x="1440.39" y="-356" font-family="Arial" font-size="15.00" fill="#f9b27c">уведомлений.</text>
</g>
<!-- notification&#45;channels -->
<g id="node6" class="node">
<title>notification&#45;channels</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1938.51,-180 1560.12,-180 1560.12,0 1938.51,0 1938.51,-180"/>
<text xml:space="preserve" text-anchor="start" x="1608.24" y="-84.4" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1652.18" y="-120.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Каналы уведомлений</text>
<text xml:space="preserve" text-anchor="start" x="1916.51" y="-84.4" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1652.18" y="-99.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Email / SMS / Push / Webhook</text>
<text xml:space="preserve" text-anchor="start" x="1652.18" y="-78.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Email, SMS, push, webhook и другие</text>
<text xml:space="preserve" text-anchor="start" x="1652.18" y="-60.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">внешние облачные каналы доставки</text>
<text xml:space="preserve" text-anchor="start" x="1652.18" y="-42.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">тревог и служебных уведомлений.</text>
</g>
<!-- field&#45;protocol&#45;gateways -->
<g id="node7" class="node">
<title>field&#45;protocol&#45;gateways</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="454.63,-842.4 0,-842.4 0,-662.4 454.63,-662.4 454.63,-842.4"/>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-783.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">Протокольные шлюзы и SCADA&#45;контроллеры</text>
<text xml:space="preserve" text-anchor="start" x="127.26" y="-762.2" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX / Modbus / OPC UA / SCADA</text>
<text xml:space="preserve" text-anchor="start" x="60.62" y="-740.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">Точки подключения к технологическим данным</text>
<text xml:space="preserve" text-anchor="start" x="91.86" y="-722.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">через KNX, Modbus, OPC UA и другие</text>
<text xml:space="preserve" text-anchor="start" x="146.03" y="-704.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">southbound&#45;протоколы.</text>
</g>
<!-- field&#45;devices&#45;&gt;field&#45;protocol&#45;gateways -->
<g id="edge1" class="edge">
<title>field&#45;devices&#45;&gt;field&#45;protocol&#45;gateways</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M227.32,-1002.3C227.32,-956.34 227.32,-900.07 227.32,-852.67"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="229.94,-852.91 227.32,-845.41 224.69,-852.91 229.94,-852.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="227.32,-902.4 227.32,-942 525.04,-942 525.04,-902.4 227.32,-902.4"/>
<text xml:space="preserve" text-anchor="start" x="230.32" y="-925" font-family="Arial" font-size="14.00" fill="#c9c9c9">Передают телеграммы, состояния и команды</text>
<text xml:space="preserve" text-anchor="start" x="230.32" y="-908.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">в KNX&#45;сегменте</text>
</g>
<!-- service&#45;engineer&#45;&gt;edge&#45;telemetry&#45;agent -->
<g id="edge2" class="edge">
<title>service&#45;engineer&#45;&gt;edge&#45;telemetry&#45;agent</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M864.97,-1002.01C826.34,-957.42 783.63,-900.6 757.15,-842.4 708.77,-736.07 688.62,-602.39 680.24,-512.85"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="682.86,-512.68 679.58,-505.45 677.64,-513.15 682.86,-512.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="757.15,-732.6 757.15,-772.2 1039.32,-772.2 1039.32,-732.6 757.15,-732.6"/>
<text xml:space="preserve" text-anchor="start" x="760.15" y="-755.2" font-family="Arial" font-size="14.00" fill="#22c55e">Настраивает адаптеры, модель сигналов,</text>
<text xml:space="preserve" text-anchor="start" x="760.15" y="-738.4" font-family="Arial" font-size="14.00" fill="#22c55e">polling и доставку</text>
</g>
<!-- service&#45;engineer&#45;&gt;monitoring&#45;alarm&#45;platform -->
<g id="edge3" class="edge">
<title>service&#45;engineer&#45;&gt;monitoring&#45;alarm&#45;platform</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1021.8,-1002.12C1122.55,-875.06 1307.07,-642.36 1411.31,-510.91"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1413.27,-512.67 1415.87,-505.16 1409.15,-509.41 1413.27,-512.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1290.66,-732.6 1290.66,-772.2 1584.5,-772.2 1584.5,-732.6 1290.66,-732.6"/>
<text xml:space="preserve" text-anchor="start" x="1293.66" y="-755.2" font-family="Arial" font-size="14.00" fill="#22c55e">Настраивает правила alarm, получателей и</text>
<text xml:space="preserve" text-anchor="start" x="1293.66" y="-738.4" font-family="Arial" font-size="14.00" fill="#22c55e">панели мониторинга</text>
</g>
<!-- operator&#45;dispatcher&#45;&gt;monitoring&#45;alarm&#45;platform -->
<g id="edge8" class="edge">
<title>operator&#45;dispatcher&#45;&gt;monitoring&#45;alarm&#45;platform</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1840.16,-1002.12C1764.32,-875.31 1625.56,-643.29 1546.87,-511.7"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1549.19,-510.48 1543.09,-505.39 1544.69,-513.17 1549.19,-510.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1744.25,-732.6 1744.25,-772.2 1983.63,-772.2 1983.63,-732.6 1744.25,-732.6"/>
<text xml:space="preserve" text-anchor="start" x="1747.25" y="-755.2" font-family="Arial" font-size="14.00" fill="#22c55e">Работает с панелями мониторинга,</text>
<text xml:space="preserve" text-anchor="start" x="1747.25" y="-738.4" font-family="Arial" font-size="14.00" fill="#22c55e">событиями и alarm</text>
</g>
<!-- edge&#45;telemetry&#45;agent&#45;&gt;monitoring&#45;alarm&#45;platform -->
<g id="edge5" class="edge">
<title>edge&#45;telemetry&#45;agent&#45;&gt;monitoring&#45;alarm&#45;platform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M865.42,-412.8C994.22,-412.8 1163.62,-412.8 1293.24,-412.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1293.16,-415.43 1300.66,-412.8 1293.16,-410.18 1293.16,-415.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="963.4,-415.8 963.4,-455.4 1205.91,-455.4 1205.91,-415.8 963.4,-415.8"/>
<text xml:space="preserve" text-anchor="start" x="966.4" y="-438.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Публикует telemetry events и service</text>
<text xml:space="preserve" text-anchor="start" x="966.4" y="-421.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">topics через MQTT</text>
</g>
<!-- monitoring&#45;alarm&#45;platform&#45;&gt;notification&#45;channels -->
<g id="edge6" class="edge">
<title>monitoring&#45;alarm&#45;platform&#45;&gt;notification&#45;channels</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1560.67,-322.87C1594.83,-280.88 1635.67,-230.69 1670.6,-187.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1672.44,-189.65 1675.14,-182.18 1668.37,-186.34 1672.44,-189.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1626.64,-240 1626.64,-262.8 1916.59,-262.8 1916.59,-240 1626.64,-240"/>
<text xml:space="preserve" text-anchor="start" x="1629.64" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Маршрутизирует уведомления и эскалации</text>
</g>
<!-- notification&#45;channels&#45;&gt;operator&#45;dispatcher -->
<g id="edge7" class="edge">
<title>notification&#45;channels&#45;&gt;operator&#45;dispatcher</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1892.47,-179.9C1912.13,-197.62 1930.07,-217.74 1943.32,-240 2040.49,-403.37 1995.38,-472.91 2010.32,-662.4 2016.6,-742.15 2027.77,-764.33 2010.32,-842.4 1998.68,-894.44 1974.9,-948.44 1951.79,-992.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1949.47,-991.54 1948.29,-999.4 1954.11,-993.99 1949.47,-991.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2007.23,-562.8 2007.23,-602.4 2250.5,-602.4 2250.5,-562.8 2007.23,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="2010.23" y="-585.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Доставляют уведомления по alarm и</text>
<text xml:space="preserve" text-anchor="start" x="2010.23" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">служебные уведомления</text>
</g>
<!-- field&#45;protocol&#45;gateways&#45;&gt;edge&#45;telemetry&#45;agent -->
<g id="edge4" class="edge">
<title>field&#45;protocol&#45;gateways&#45;&gt;edge&#45;telemetry&#45;agent</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M345.05,-662.48C407.69,-615.17 484.72,-556.99 548.53,-508.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="549.82,-511.11 554.23,-504.5 546.66,-506.92 549.82,-511.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="464.22,-571.2 464.22,-594 491.21,-594 491.21,-571.2 464.22,-571.2"/>
<text xml:space="preserve" text-anchor="start" x="467.22" y="-579.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+e)}}const s5=Object.freeze(Object.defineProperty({__proto__:null,dotSource:l5,svgSource:a5},Symbol.toStringTag,{value:"Module"}));function c5(e){switch(e){case"index":return`direction: down

Demo-stand-current-monitored-scope: {
  label: "Demo Stand Current Monitored Scope"
}
Field-devices: {
  label: "Полевые устройства и контроллеры"
}
Service-engineer: {
  label: "Сервисный инженер"
  shape: c4-person
}
Field-protocol-gateways: {
  label: "Протокольные шлюзы и SCADA-контроллеры"
}
Local-grafana: {
  label: "Local Grafana"
}
Edge-telemetry-agent: {
  label: "Edge Telemetry Agent"
}
Local-mqtt-broker: {
  label: "Local MQTT Broker"
}
Monitoring-alarm-platform: {
  label: "Monitoring & Alarm Platform"
}
Notification-channels: {
  label: "Каналы уведомлений"
}
Operator-dispatcher: {
  label: "Оператор / диспетчер"
  shape: c4-person
}

Demo-stand-current-monitored-scope -> Edge-telemetry-agent: "[...]"
Field-devices -> Field-protocol-gateways: "Передают телеграммы, состояния и команды в KNX-сегменте"
Notification-channels -> Operator-dispatcher: "Доставляют уведомления по alarm и служебные уведомления"
Monitoring-alarm-platform -> Notification-channels: "Маршрутизирует уведомления и эскалации"
Field-protocol-gateways -> Edge-telemetry-agent: "[...]"
Local-grafana -> Local-mqtt-broker: "Подписывается через grafana-mqtt-datasource на live MQTT topics"
Edge-telemetry-agent -> Local-mqtt-broker: "Публикует telemetry events и service topics в локальный MQTT broker"
Service-engineer -> Local-grafana: "Проверяет live MQTT поток, topic tree и dashboard"
Service-engineer -> Edge-telemetry-agent: "Настраивает адаптеры, модель сигналов, polling и доставку"
Service-engineer -> Monitoring-alarm-platform: "Настраивает правила alarm, получателей и панели мониторинга"
Operator-dispatcher -> Monitoring-alarm-platform: "Работает с панелями мониторинга, событиями и alarm"
Edge-telemetry-agent -> Monitoring-alarm-platform: "Публикует telemetry events и service topics через MQTT"
`;case"c1-system-context":return`direction: down

Field-devices: {
  label: "Полевые устройства и контроллеры"
}
Service-engineer: {
  label: "Сервисный инженер"
  shape: c4-person
}
Field-protocol-gateways: {
  label: "Протокольные шлюзы и SCADA-контроллеры"
}
Edge-telemetry-agent: {
  label: "Edge Telemetry Agent"
}
Monitoring-alarm-platform: {
  label: "Monitoring & Alarm Platform"
}
Notification-channels: {
  label: "Каналы уведомлений"
}
Operator-dispatcher: {
  label: "Оператор / диспетчер"
  shape: c4-person
}

Field-devices -> Field-protocol-gateways: "Передают телеграммы, состояния и команды в KNX-сегменте"
Field-protocol-gateways -> Edge-telemetry-agent: "[...]"
Edge-telemetry-agent -> Monitoring-alarm-platform: "Публикует telemetry events и service topics через MQTT"
Monitoring-alarm-platform -> Notification-channels: "Маршрутизирует уведомления и эскалации"
Service-engineer -> Edge-telemetry-agent: "Настраивает адаптеры, модель сигналов, polling и доставку"
Service-engineer -> Monitoring-alarm-platform: "Настраивает правила alarm, получателей и панели мониторинга"
Notification-channels -> Operator-dispatcher: "Доставляют уведомления по alarm и служебные уведомления"
Operator-dispatcher -> Monitoring-alarm-platform: "Работает с панелями мониторинга, событиями и alarm"
`;case"deployment-demo-stand-topology":return`direction: down

Demo-stand: {
  label: "Demo Stand"

  Local-lan: {
    label: "Local LAN 192.0.2.0/24"

    Tp-line-1-1: {
      label: "KNX TP Line 1.1"

      Device-1-1-1: {
        label: "1.1.1 Pushbutton sensor 4 Komfort, 4-gang"
      }
      Device-1-1-2: {
        label: "1.1.2 DALI Gateway Tunable White Plus"
      }
      Device-1-1-3: {
        label: "1.1.3 Analogaktor 4fach"
      }
      Device-1-1-4: {
        label: "1.1.4 Room controller display compact module"
      }
    }
    Knxnet-ip-backbone: {
      label: "KNXnet/IP Backbone"

      Knx-router: {
        label: "Weinzierl KNX IP Router 751"
      }
    }
  }
  Remote-access: {
    label: "Remote Access"

    Public-knx-endpoint: {
      label: "Public KNX/IP endpoint"
    }
  }
}
Whitelisted-remote-host: {
  label: "Whitelisted Remote Host"

  Developer-networkEdge-host: {
    label: "Developer Workstation"

    Delivery-worker: {
      label: "Delivery Worker"
    }
    Local-grafana: {
      label: "Local Grafana"
    }
    Collector-runtime: {
      label: "Collector Runtime"
    }
    Local-mqtt-broker: {
      label: "Local MQTT Broker"
    }
    Configuration-bundle: {
      label: "Configuration Bundle"
    }
    Outbox-store: {
      label: "Outbox Store"
      shape: stored_data
    }
  }
}
Monitoring-cloudPublic-cloudMqtt-ingest-hostMqtt-ingestion-gateway: {
  label: "MQTT Ingestion Gateway"
}

Demo-stand.Remote-access.Public-knx-endpoint -> Demo-stand.Local-lan.Knxnet-ip-backbone.Knx-router: "Проброс UDP 7171 -> 3671 для удаленного KNX/IP доступа"
Demo-stand.Local-lan.Knxnet-ip-backbone.Knx-router -> Whitelisted-remote-host.Developer-networkEdge-host.Collector-runtime: "Экспонирует group address и телеграммы через KNX/IP"
Whitelisted-remote-host.Developer-networkEdge-host.Collector-runtime -> Whitelisted-remote-host.Developer-networkEdge-host.Configuration-bundle: "Загружает описания источников, модель сигналов и runtime-политики"
Whitelisted-remote-host.Developer-networkEdge-host.Delivery-worker -> Whitelisted-remote-host.Developer-networkEdge-host.Configuration-bundle: "Загружает настройки MQTT, topic contract и retry-политики"
Whitelisted-remote-host.Developer-networkEdge-host.Collector-runtime -> Whitelisted-remote-host.Developer-networkEdge-host.Outbox-store: "Сохраняет нормализованные события и задания на доставку"
Whitelisted-remote-host.Developer-networkEdge-host.Delivery-worker -> Whitelisted-remote-host.Developer-networkEdge-host.Outbox-store: "Читает ожидающие события и обновляет статус доставки"
Whitelisted-remote-host.Developer-networkEdge-host.Delivery-worker -> Whitelisted-remote-host.Developer-networkEdge-host.Local-mqtt-broker: "Публикует в локальный broker mqtt://localhost:1883"
Whitelisted-remote-host.Developer-networkEdge-host.Local-grafana -> Whitelisted-remote-host.Developer-networkEdge-host.Local-mqtt-broker: "Подписывается через grafana-mqtt-datasource на live MQTT topics"
Whitelisted-remote-host.Developer-networkEdge-host.Collector-runtime -> Demo-stand.Remote-access.Public-knx-endpoint: "Подключается к стенду через whitelisted public KNX/IP endpoint"
Whitelisted-remote-host.Developer-networkEdge-host.Delivery-worker -> Monitoring-cloudPublic-cloudMqtt-ingest-hostMqtt-ingestion-gateway: "Публикует telemetry events и service topics по MQTT 5.0"
Demo-stand.Local-lan.Tp-line-1-1 -> Demo-stand.Local-lan.Knxnet-ip-backbone.Knx-router: "Передает KNX TP телеграммы в роутер 1.1.0"
`;case"deployment-demo-stand-current-implementation":return`direction: down

Demo-stand: {
  label: "Demo Stand"

  Local-lan: {
    label: "Local LAN 192.0.2.0/24"

    Tp-line-1-1: {
      label: "KNX TP Line 1.1"

      Device-1-1-1: {
        label: "1.1.1 Pushbutton sensor 4 Komfort, 4-gang"
      }
      Device-1-1-2: {
        label: "1.1.2 DALI Gateway Tunable White Plus"
      }
      Device-1-1-3: {
        label: "1.1.3 Analogaktor 4fach"
      }
      Device-1-1-4: {
        label: "1.1.4 Room controller display compact module"
      }
    }
    Knxnet-ip-backbone: {
      label: "KNXnet/IP Backbone"

      Knx-router: {
        label: "Weinzierl KNX IP Router 751"
      }
    }
  }
  Remote-access: {
    label: "Remote Access"

    Public-knx-endpoint: {
      label: "Public KNX/IP endpoint"
    }
  }
}
Whitelisted-remote-host: {
  label: "Whitelisted Remote Host"

  Developer-networkEdge-host: {
    label: "Developer Workstation"

    Delivery-worker: {
      label: "Delivery Worker"
    }
    Local-grafana: {
      label: "Local Grafana"
    }
    Collector-runtime: {
      label: "Collector Runtime"
    }
    Local-mqtt-broker: {
      label: "Local MQTT Broker"
    }
    Configuration-bundle: {
      label: "Configuration Bundle"
    }
    Outbox-store: {
      label: "Outbox Store"
      shape: stored_data
    }
  }
}

Demo-stand.Remote-access.Public-knx-endpoint -> Demo-stand.Local-lan.Knxnet-ip-backbone.Knx-router: "Проброс UDP 7171 -> 3671 для удаленного KNX/IP доступа"
Demo-stand.Local-lan.Knxnet-ip-backbone.Knx-router -> Whitelisted-remote-host.Developer-networkEdge-host.Collector-runtime: "Экспонирует group address и телеграммы через KNX/IP"
Whitelisted-remote-host.Developer-networkEdge-host.Collector-runtime -> Whitelisted-remote-host.Developer-networkEdge-host.Configuration-bundle: "Загружает описания источников, модель сигналов и runtime-политики"
Whitelisted-remote-host.Developer-networkEdge-host.Delivery-worker -> Whitelisted-remote-host.Developer-networkEdge-host.Configuration-bundle: "Загружает настройки MQTT, topic contract и retry-политики"
Whitelisted-remote-host.Developer-networkEdge-host.Collector-runtime -> Whitelisted-remote-host.Developer-networkEdge-host.Outbox-store: "Сохраняет нормализованные события и задания на доставку"
Whitelisted-remote-host.Developer-networkEdge-host.Delivery-worker -> Whitelisted-remote-host.Developer-networkEdge-host.Outbox-store: "Читает ожидающие события и обновляет статус доставки"
Whitelisted-remote-host.Developer-networkEdge-host.Delivery-worker -> Whitelisted-remote-host.Developer-networkEdge-host.Local-mqtt-broker: "Публикует в локальный broker mqtt://localhost:1883"
Whitelisted-remote-host.Developer-networkEdge-host.Local-grafana -> Whitelisted-remote-host.Developer-networkEdge-host.Local-mqtt-broker: "Подписывается через grafana-mqtt-datasource на live MQTT topics"
Whitelisted-remote-host.Developer-networkEdge-host.Collector-runtime -> Demo-stand.Remote-access.Public-knx-endpoint: "Подключается к стенду через whitelisted public KNX/IP endpoint"
Demo-stand.Local-lan.Tp-line-1-1 -> Demo-stand.Local-lan.Knxnet-ip-backbone.Knx-router: "Передает KNX TP телеграммы в роутер 1.1.0"
`;case"demo-stand-current-monitored-points":return`direction: down

Demo-stand-current-monitored-scope: {
  label: "Demo Stand Current Monitored Scope"

  Device-1-1-1: {
    label: "1.1.1 Pushbutton sensor 4 Komfort, 4-gang"
  }
  Device-1-1-2: {
    label: "1.1.2 DALI Gateway Tunable White Plus"
  }
  Device-1-1-4: {
    label: "1.1.4 Room controller display compact module"
  }
  Light-switch-feedback: {
    label: "0/0/7 StatusSwitch"
  }
  Room-temperature: {
    label: "2/0/0 Temp Value"
  }
}
Field-protocol-gateways: {
  label: "Протокольные шлюзы и SCADA-контроллеры"

  Knx-router: {
    label: "KNX Segment"
  }
}
Edge-telemetry-agent: {
  label: "Edge Telemetry Agent"

  Collector-runtime: {
    label: "Collector Runtime"
  }
}

Demo-stand-current-monitored-scope.Device-1-1-1 -> Demo-stand-current-monitored-scope.Light-switch-feedback: "Публикует feedback состояния света 0/0/7"
Demo-stand-current-monitored-scope.Device-1-1-2 -> Demo-stand-current-monitored-scope.Light-switch-feedback: "Публикует статус светового канала 0/0/7"
Demo-stand-current-monitored-scope.Device-1-1-4 -> Demo-stand-current-monitored-scope.Room-temperature: "Публикует температуру помещения 2/0/0"
Demo-stand-current-monitored-scope.Light-switch-feedback -> Edge-telemetry-agent.Collector-runtime: "Поставляет feedback состояния света в текущий read scope"
Demo-stand-current-monitored-scope.Room-temperature -> Edge-telemetry-agent.Collector-runtime: "Поставляет температуру помещения в текущий read scope"
Field-protocol-gateways.Knx-router -> Edge-telemetry-agent.Collector-runtime: "Экспонирует group address и телеграммы через KNX/IP"
`;case"c2-edge-telemetry-agent-containers":return`direction: down

Demo-stand-current-monitored-scope: {
  label: "Demo Stand Current Monitored Scope"
}
Field-protocol-gateways: {
  label: "Протокольные шлюзы и SCADA-контроллеры"

  Knx-router: {
    label: "KNX Segment"
  }
  Modbus-gateway: {
    label: "Modbus Gateway"
  }
  Opc-ua-gateway: {
    label: "OPC UA Server"
  }
}
Service-engineer: {
  label: "Сервисный инженер"
  shape: c4-person
}
Edge-telemetry-agent: {
  label: "Edge Telemetry Agent"

  Collector-runtime: {
    label: "Collector Runtime"
  }
  Delivery-worker: {
    label: "Delivery Worker"
  }
  Configuration-bundle: {
    label: "Configuration Bundle"
  }
  Outbox-store: {
    label: "Outbox Store"
    shape: stored_data
  }
}
Monitoring-alarm-platform: {
  label: "Monitoring & Alarm Platform"
}

Demo-stand-current-monitored-scope -> Edge-telemetry-agent.Collector-runtime: "[...]"
Edge-telemetry-agent.Collector-runtime -> Edge-telemetry-agent.Configuration-bundle: "Загружает описания источников, модель сигналов и runtime-политики"
Edge-telemetry-agent.Collector-runtime -> Edge-telemetry-agent.Outbox-store: "Сохраняет нормализованные события и задания на доставку"
Edge-telemetry-agent.Delivery-worker -> Edge-telemetry-agent.Configuration-bundle: "Загружает настройки MQTT, topic contract и retry-политики"
Edge-telemetry-agent.Delivery-worker -> Edge-telemetry-agent.Outbox-store: "Читает ожидающие события и обновляет статус доставки"
Edge-telemetry-agent.Delivery-worker -> Monitoring-alarm-platform: "Публикует telemetry events и service topics по MQTT 5.0"
Field-protocol-gateways.Knx-router -> Edge-telemetry-agent.Collector-runtime: "Экспонирует group address и телеграммы через KNX/IP"
Field-protocol-gateways.Modbus-gateway -> Edge-telemetry-agent.Collector-runtime: "Экспонирует registers, coils и дискретные значения через Modbus"
Field-protocol-gateways.Opc-ua-gateway -> Edge-telemetry-agent.Collector-runtime: "Экспонирует nodes, subscriptions и значения через OPC UA"
Service-engineer -> Edge-telemetry-agent: "Настраивает адаптеры, модель сигналов, polling и доставку"
`;case"c2-monitoring-alarm-platform-containers":return`direction: down

Service-engineer: {
  label: "Сервисный инженер"
  shape: c4-person
}
Operator-dispatcher: {
  label: "Оператор / диспетчер"
  shape: c4-person
}
Monitoring-alarm-platform: {
  label: "Monitoring & Alarm Platform"

  Operator-dashboard: {
    label: "Operator Dashboard"
  }
  Mqtt-ingestion-gateway: {
    label: "MQTT Ingestion Gateway"
  }
  Platform-api: {
    label: "Platform API"
  }
  Alarm-rule-engine: {
    label: "Alarm Rule Engine"
  }
  Notification-service: {
    label: "Notification Service"
  }
  Telemetry-store: {
    label: "Telemetry Store"
    shape: stored_data
  }
}
Edge-telemetry-agent: {
  label: "Edge Telemetry Agent"
}
Notification-channels: {
  label: "Каналы уведомлений"
}

Service-engineer -> Monitoring-alarm-platform.Operator-dashboard: "Настраивает правила, получателей и панели мониторинга"
Operator-dispatcher -> Monitoring-alarm-platform.Operator-dashboard: "Работает с панелями мониторинга, alarm и историей"
Monitoring-alarm-platform.Alarm-rule-engine -> Monitoring-alarm-platform.Notification-service: "Запускает доставку уведомлений"
Monitoring-alarm-platform.Alarm-rule-engine -> Monitoring-alarm-platform.Telemetry-store: "Читает контекст и записывает состояние и историю alarm"
Monitoring-alarm-platform.Mqtt-ingestion-gateway -> Monitoring-alarm-platform.Alarm-rule-engine: "Передает нормализованные события в Alarm Rule Engine"
Monitoring-alarm-platform.Platform-api -> Monitoring-alarm-platform.Alarm-rule-engine: "Читает активные alarm и управляет конфигурацией правил в Alarm Rule Engine"
Monitoring-alarm-platform.Mqtt-ingestion-gateway -> Monitoring-alarm-platform.Telemetry-store: "Сохраняет canonical events и служебные события"
Monitoring-alarm-platform.Operator-dashboard -> Monitoring-alarm-platform.Platform-api: "Запрашивает панели мониторинга, состояние alarm и конфигурацию"
Monitoring-alarm-platform.Platform-api -> Monitoring-alarm-platform.Telemetry-store: "Читает телеметрию, историю и временные линии alarm"
Monitoring-alarm-platform.Notification-service -> Notification-channels: "Отправляет email, SMS, push и webhook-уведомления"
Notification-channels -> Operator-dispatcher: "Доставляют уведомления по alarm и служебные уведомления"
`;case"local-mqtt-grafana-dev-harness":return`direction: down

Edge-telemetry-agent: {
  label: "Edge Telemetry Agent"
}
Service-engineer: {
  label: "Сервисный инженер"
  shape: c4-person
}
Local-grafana: {
  label: "Local Grafana"
}
Local-mqtt-broker: {
  label: "Local MQTT Broker"
}

Edge-telemetry-agent -> Local-mqtt-broker: "Публикует telemetry events и service topics в локальный MQTT broker"
Service-engineer -> Local-grafana: "Проверяет live MQTT поток, topic tree и dashboard"
Local-grafana -> Local-mqtt-broker: "Подписывается через grafana-mqtt-datasource на live MQTT topics"
`;case"c2-field-devices":return`direction: down

Field-devices: {
  label: "Полевые устройства и контроллеры"

  Knx-temperature-sensor: {
    label: "knx-temperature-sensor"
  }
}
Field-protocol-gateways: {
  label: "Протокольные шлюзы и SCADA-контроллеры"

  Knx-router: {
    label: "KNX Segment"
  }
}

Field-devices.Knx-temperature-sensor -> Field-protocol-gateways.Knx-router: "Передают телеграммы, состояния и команды в KNX-сегменте"
`;case"c2-field-protocol-gateways":return`direction: down

Field-devices: {
  label: "Полевые устройства и контроллеры"

  Knx-temperature-sensor: {
    label: "knx-temperature-sensor"
  }
}
Field-protocol-gateways: {
  label: "Протокольные шлюзы и SCADA-контроллеры"

  Knx-router: {
    label: "KNX Segment"
  }
  Modbus-gateway: {
    label: "Modbus Gateway"
  }
  Opc-ua-gateway: {
    label: "OPC UA Server"
  }
}
Edge-telemetry-agent: {
  label: "Edge Telemetry Agent"

  Collector-runtime: {
    label: "Collector Runtime"
  }
}

Field-devices.Knx-temperature-sensor -> Field-protocol-gateways.Knx-router: "Передают телеграммы, состояния и команды в KNX-сегменте"
Field-protocol-gateways.Knx-router -> Edge-telemetry-agent.Collector-runtime: "Экспонирует group address и телеграммы через KNX/IP"
Field-protocol-gateways.Modbus-gateway -> Edge-telemetry-agent.Collector-runtime: "Экспонирует registers, coils и дискретные значения через Modbus"
Field-protocol-gateways.Opc-ua-gateway -> Edge-telemetry-agent.Collector-runtime: "Экспонирует nodes, subscriptions и значения через OPC UA"
`;default:throw new Error("Unknown viewId: "+e)}}const d5=Object.freeze(Object.defineProperty({__proto__:null,d2Source:c5},Symbol.toStringTag,{value:"Module"}));export{A5 as $,R5 as A,P5 as B,eg as C,ve as D,Wt as E,w5 as F,S5 as G,Us as H,ls as I,Bt as J,q5 as K,ro as L,k4 as M,br as N,H2 as O,Xs as P,Vy as Q,Ee as R,rs as S,ei as T,D5 as U,I5 as V,Gt as W,C4 as X,K5 as Y,$y as Z,_2 as _,Ie as a,L4 as a0,H5 as a1,X5 as a2,j5 as a3,W5 as a4,Z5 as a5,U5 as a6,G5 as b,C5 as c,k5 as d,T5 as e,To as f,z5 as g,J2 as h,O5 as i,Ms as j,xo as k,Tt as l,cs as m,ng as n,yn as o,Pt as p,N5 as q,M5 as r,L5 as s,v5 as t,Y2 as u,ll as v,E5 as w,z as x,F5 as y,an as z};
