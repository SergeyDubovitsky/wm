import{r as bt,p as yt,d as Qn,j as ct}from"./vendors-CwlMtw8m.js";const cc="modulepreload",dc=function(e){return"/"+e},di={},Bt=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){let s=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=i?.nonce||i?.getAttribute("nonce");o=s(n.map(c=>{if(c=dc(c),c in di)return;di[c]=!0;const d=c.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":cc,d||(u.as="script"),u.crossOrigin="",u.href=c,a&&u.setAttribute("nonce",a),document.head.appendChild(u),d)return new Promise((h,p)=>{u.addEventListener("load",h),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function l(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return o.then(i=>{for(const a of i||[])a.status==="rejected"&&l(a.reason);return t().catch(l)})};let Oe=[],ot=0,qn=0;const Lo=e=>{let t=[],n={get(){return n.lc||n.listen(()=>{})(),n.value},lc:0,listen(r){return n.lc=t.push(r),()=>{for(let l=ot+4;l<Oe.length;)Oe[l]===r?Oe.splice(l,4):l+=4;let o=t.indexOf(r);~o&&(t.splice(o,1),--n.lc||n.off())}},notify(r,o){qn++;let l=!Oe.length;for(let i of t)Oe.push(i,n.value,r,o);if(l){for(ot=0;ot<Oe.length;ot+=4)Oe[ot](Oe[ot+1],Oe[ot+2],Oe[ot+3]);Oe.length=0}},off(){},set(r){let o=n.value;o!==r&&(n.value=r,n.notify(o))},subscribe(r){let o=n.listen(r);return r(n.value),o},value:e};return n};let fc=(e,t,n,r)=>(e.events=e.events||{},e.events[n+10]||(e.events[n+10]=r(o=>{e.events[n].reduceRight((l,i)=>(i(l),l),{shared:{},...o})})),e.events[n]=e.events[n]||[],e.events[n].push(t),()=>{let o=e.events[n],l=o.indexOf(t);o.splice(l,1),o.length||(delete e.events[n],e.events[n+10](),delete e.events[n+10])}),uc=(e,t)=>fc(e,r=>{let o=t(r);o&&e.events[6].push(o)},5,r=>{let o=e.listen;e.listen=(...i)=>(!e.lc&&!e.active&&(e.active=!0,r()),o(...i));let l=e.off;return e.events[6]=[],e.off=()=>{l(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let i of e.events[6])i();e.events[6]=[]}},1e3)},()=>{e.listen=o,e.off=l}}),hc=(e,t,n)=>{Array.isArray(e)||(e=[e]);let r,o,l=()=>{if(o===qn)return;o=qn;let c=e.map(d=>d.get());if(!r||c.some((d,f)=>d!==r[f])){r=c;let d=t(...c);d&&d.then&&d.t?d.then(f=>{r===c&&i.set(f)}):(i.set(d),o=qn)}},i=Lo(void 0),a=i.get;i.get=()=>(l(),a());let s=l;return uc(i,()=>{let c=e.map(d=>d.listen(s));return l(),()=>{for(let d of c)d()}}),i};const fi=(e,t)=>hc(e,t);function pc(e,t,n){let r=new Set(t).add(void 0);return e.listen((o,l,i)=>{r.has(i)&&n(o,l,i)})}let wr=(e,t)=>n=>{e.current!==n&&(e.current=n,t())};function ro(e,{keys:t,deps:n=[e,t]}={}){let r=bt.useRef();r.current=e.get();let o=bt.useCallback(i=>(wr(r,i)(e.value),t?.length>0?pc(e,t,wr(r,i)):e.listen(wr(r,i))),n),l=()=>r.current;return bt.useSyncExternalStore(o,l,l)}Math.random.bind(Math);function gc(e,t,n){let r=o=>e(o,...t);return n===void 0?r:Object.assign(r,{lazy:n,lazyArgs:t})}function Sl(e,t,n){let r=e.length-t.length;if(r===0)return e(...t);if(r===1)return gc(e,t,n);throw Error("Wrong number of arguments")}function ui(...e){return Sl(Tn,e)}function Tn(e,t){if(e===t||Object.is(e,t))return!0;if(typeof e!="object"||typeof t!="object"||e===null||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;if(Array.isArray(e))return mc(e,t);if(e instanceof Map)return yc(e,t);if(e instanceof Set)return xc(e,t);if(e instanceof Date)return e.getTime()===t.getTime();if(e instanceof RegExp)return e.toString()===t.toString();if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let[n,r]of Object.entries(e))if(!(n in t)||!Tn(r,t[n]))return!1;return!0}function mc(e,t){if(e.length!==t.length)return!1;for(let[n,r]of e.entries())if(!Tn(r,t[n]))return!1;return!0}function yc(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e.entries())if(!t.has(n)||!Tn(r,t.get(n)))return!1;return!0}function xc(e,t){if(e.size!==t.size)return!1;let n=[...t];for(let r of e){let o=!1;for(let[l,i]of n.entries())if(Tn(r,i)){o=!0,n.splice(l,1);break}if(!o)return!1}return!0}function bc(...e){return Sl(Tc,e)}function Tc(e,t){let n={};for(let[r,o]of Object.entries(e))n[r]=t(o,r,e);return n}[...`	.
.\v.\f.\r. .. . . . . . . . . . . . . .\u2028.\u2029. . .　.\uFEFF`.split(".")];function vr(e){if(typeof e!="object"||!e)return!1;let t=Object.getPrototypeOf(e);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in e?!1:Symbol.toStringTag in e?Object.prototype.toString.call(e)==="[object Module]":!0}function oo(e,t,n=".",r){if(!vr(t))return oo(e,{},n);let o=Object.assign({},t);for(let l in e){if(l==="__proto__"||l==="constructor")continue;let i=e[l];i!=null&&(Array.isArray(i)&&Array.isArray(o[l])?o[l]=[...i,...o[l]]:vr(i)&&vr(o[l])?o[l]=oo(i,o[l],(n?`${n}.`:"")+l.toString()):o[l]=i)}return o}function wc(e){return(...t)=>t.reduce((n,r)=>oo(n,r,""),{})}const Pl=wc();function vc(e,t,n){let r=o=>e(o,...t);return n===void 0?r:Object.assign(r,{lazy:n,lazyArgs:t})}function se(e,t,n){let r=e.length-t.length;if(r===0)return e(...t);if(r===1)return vc(e,t,n);throw Error("Wrong number of arguments")}function kc(...e){return se(Bc,e)}const Bc=(e,t)=>t.every(n=>n(e));function Ec(...e){return se(Ac,e)}const Ac=(e,t)=>t.some(n=>n(e)),ar={done:!1,hasNext:!1},Dc=e=>({hasNext:!0,next:e,done:!1});function Me(e,...t){let n=e,r=t.map(l=>"lazy"in l?Fc(l):void 0),o=0;for(;o<t.length;){if(r[o]===void 0||!Nc(n)){let s=t[o];n=s(n),o+=1;continue}let l=[];for(let s=o;s<t.length;s++){let c=r[s];if(c===void 0||(l.push(c),c.isSingle))break}let i=[];for(let s of n)if(zl(s,i,l))break;let{isSingle:a}=l.at(-1);n=a?i[0]:i,o+=l.length}return n}function zl(e,t,n){if(n.length===0)return t.push(e),!1;let r=e,o=ar,l=!1;for(let[i,a]of n.entries()){let{index:s,items:c}=a;if(c.push(r),o=a(r,s,c),a.index+=1,o.hasNext){if(o.hasMany??!1){for(let d of o.next)if(zl(d,t,n.slice(i+1)))return!0;return l}r=o.next}if(!o.hasNext)break;o.done&&(l=!0)}return o.hasNext&&t.push(r),l}function Fc(e){let{lazy:t,lazyArgs:n}=e,r=t(...n);return Object.assign(r,{isSingle:t.single??!1,index:0,items:[]})}function Nc(e){return typeof e=="string"||typeof e=="object"&&!!e&&Symbol.iterator in e}function Oc(e,t){let n=t.length-e.length;if(n===1){let[r,...o]=t;return Me(r,{lazy:e,lazyArgs:o})}if(n===0){let r={lazy:e,lazyArgs:t};return Object.assign(o=>Me(o,r),r)}throw Error("Wrong number of arguments")}function Rc(...e){return se(Cc,e,Lc)}const Cc=(e,t)=>t<0?[...e]:e.slice(t);function Lc(e){if(e<=0)return Dc;let t=e;return n=>t>0?(--t,ar):{done:!1,hasNext:!0,next:n}}function Xe(...e){return se(Ic,e)}const Ic=(e,t)=>e.length>=t,Ml={asc:(e,t)=>e>t,desc:(e,t)=>e<t};function Sc(e,t){let[n,...r]=t;if(!Pc(n))return e(n,io(...r));let o=io(n,...r);return l=>e(l,o)}function io(e,t,...n){let r=typeof e=="function"?e:e[0],o=typeof e=="function"?"asc":e[1],{[o]:l}=Ml,i=t===void 0?void 0:io(t,...n);return(a,s)=>{let c=r(a),d=r(s);return l(c,d)?1:l(d,c)?-1:i?.(a,s)??0}}function Pc(e){if(hi(e))return!0;if(typeof e!="object"||!Array.isArray(e))return!1;let[t,n,...r]=e;return hi(t)&&typeof n=="string"&&n in Ml&&r.length===0}const hi=e=>typeof e=="function"&&e.length===1;function cn(...e){return se(Object.entries,e)}function Gl(...e){return se(zc,e,Mc)}const zc=(e,t)=>e.filter(t),Mc=e=>(t,n,r)=>e(t,n,r)?{done:!1,hasNext:!0,next:t}:ar;function pi(...e){return se(Gc,e,qc)}const Gc=(e,t)=>e.flatMap(t),qc=e=>(t,n,r)=>{let o=e(t,n,r);return Array.isArray(o)?{done:!1,hasNext:!0,hasMany:!0,next:o}:{done:!1,hasNext:!0,next:o}};function kr(...e){return se(Kc,e)}const Kc=(e,t)=>{let n=Object.create(null);for(let r=0;r<e.length;r++){let o=e[r],l=t(o,r,e);if(l!==void 0){let i=n[l];i===void 0?n[l]=[o]:i.push(o)}}return Object.setPrototypeOf(n,Object.prototype),n};function Yn(...e){return se(wn,e)}function wn(e,t){if(e===t||Object.is(e,t))return!0;if(typeof e!="object"||typeof t!="object"||e===null||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;if(Array.isArray(e))return Xc(e,t);if(e instanceof Map)return jc(e,t);if(e instanceof Set)return $c(e,t);if(e instanceof Date)return e.getTime()===t.getTime();if(e instanceof RegExp)return e.toString()===t.toString();if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let[n,r]of Object.entries(e))if(!(n in t)||!wn(r,t[n]))return!1;return!0}function Xc(e,t){if(e.length!==t.length)return!1;for(let[n,r]of e.entries())if(!wn(r,t[n]))return!1;return!0}function jc(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e.entries())if(!t.has(n)||!wn(r,t.get(n)))return!1;return!0}function $c(e,t){if(e.size!==t.size)return!1;let n=[...t];for(let r of e){let o=!1;for(let[l,i]of n.entries())if(wn(r,i)){o=!0,n.splice(l,1);break}if(!o)return!1}return!0}function vn(e){return e===""||e===void 0?!0:Array.isArray(e)?e.length===0:Object.keys(e).length===0}function qt(e){if(e==null||e==="")return!0;if(typeof e!="object")return!1;if("length"in e&&typeof e.length=="number")return e.length===0;if("size"in e&&typeof e.size=="number")return e.size===0;for(let t in e)return!1;return Object.getOwnPropertySymbols(e).length===0}const sr=e=>typeof e=="function";function Hc(e){return e!=null}function ql(e){return t=>!e(t)}function ne(e){return e==null}function Wc(e){return typeof e=="number"&&!Number.isNaN(e)}function Io(...e){return se(Zc,e)}function Zc(e,t){if(e===t||Object.is(e,t))return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;if(e instanceof Map&&t instanceof Map)return Uc(e,t);if(e instanceof Set&&t instanceof Set)return Vc(e,t);let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let r of n){if(!Object.hasOwn(t,r))return!1;let{[r]:o}=e,{[r]:l}=t;if(o!==l||!Object.is(o,l))return!1}return!0}function Uc(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e){let o=t.get(n);if(r!==o||!Object.is(r,o))return!1}return!0}function Vc(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function Le(e){return typeof e=="string"}function Se(e){return!!e}function Qc(...e){return se(Yc,e)}const Yc=e=>e.at(-1);function pn(...e){return se(Jc,e,_c)}const Jc=(e,t)=>e.map(t),_c=e=>(t,n,r)=>({done:!1,hasNext:!0,next:e(t,n,r)});function Br(...e){return se(ed,e)}function ed(e,t){let n={};for(let[r,o]of Object.entries(e))n[r]=t(o,r,e);return n}function td(...e){return se(nd,e)}function nd(e,t){let n={...e};for(let[r,o]of Object.entries(n))t(o,r,e)&&delete n[r];return n}function rd(e){let t=!1,n;return()=>(t||=(n=e(),!0),n)}function gi(...e){return se(od,e)}function od(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function Er(...e){return t=>Me(t,...e)}function gt(e,...t){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"?n=>mi(n,e,...t):mi(e,...t)}function mi(e,...t){let n=e;for(let r of t){if(n==null)return;n=n[r]}return n}function id(e,t){let n=Math.ceil(e),r=Math.floor(t);if(r<n)throw RangeError(`randomInteger: The range [${e.toString()},${t.toString()}] contains no integer`);return Math.floor(Math.random()*(r-n+1)+n)}function ld(...e){return se(ad,e)}const ad=(e,t,n)=>e.reduce(t,n);function Ar(...e){return se(sd,e)}function sd(e,t){let n=[...e];return n.sort(t),n}function Kl(...e){return Sc(cd,e)}const cd=(e,t)=>[...e].sort(t);function yi(e,t,n){return typeof t=="number"||t===void 0?r=>r.split(e,t):e.split(t,n)}[...`	.
.\v.\f.\r. .. . . . . . . . . . . . . .\u2028.\u2029. . .　.\uFEFF`.split(".")];function cr(...e){return Oc(dd,e)}function dd(){let e=new Set;return t=>e.has(t)?ar:(e.add(t),{done:!1,hasNext:!0,next:t})}function Jn(...e){return se(Object.values,e)}function fd(...e){return se(ud,e,hd)}const ud=(e,t)=>e.length<t.length?e.map((n,r)=>[n,t[r]]):t.map((n,r)=>[e[r],n]),hd=e=>(t,n)=>({hasNext:!0,next:[t,e[n]],done:n>=e.length-1});var pd=Object.create,_n=Object.defineProperty,gd=Object.getOwnPropertyDescriptor,md=Object.getOwnPropertyNames,yd=Object.getPrototypeOf,xd=Object.prototype.hasOwnProperty,re=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),kn=(e,t)=>{let n={};for(var r in e)_n(n,r,{get:e[r],enumerable:!0});return _n(n,Symbol.toStringTag,{value:"Module"}),n},bd=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(var o=md(t),l=0,i=o.length,a;l<i;l++)a=o[l],!xd.call(e,a)&&a!==n&&_n(e,a,{get:(s=>t[s]).bind(null,a),enumerable:!(r=gd(t,a))||r.enumerable});return e},je=(e,t,n)=>(n=e==null?{}:pd(yd(e)),bd(_n(n,"default",{value:e,enumerable:!0}),e)),Td=re((e=>{e.ARRAY_BUFFER_SUPPORT=typeof ArrayBuffer<"u",e.SYMBOL_SUPPORT=typeof Symbol<"u"})),_e=re(((e,t)=>{var n=Td(),r=n.ARRAY_BUFFER_SUPPORT,o=n.SYMBOL_SUPPORT;t.exports=function(i,a){var s,c,d,f,u;if(!i)throw Error("obliterator/forEach: invalid iterable.");if(typeof a!="function")throw Error("obliterator/forEach: expecting a callback.");if(Array.isArray(i)||r&&ArrayBuffer.isView(i)||typeof i=="string"||i.toString()==="[object Arguments]"){for(d=0,f=i.length;d<f;d++)a(i[d],d);return}if(typeof i.forEach=="function"){i.forEach(a);return}if(o&&Symbol.iterator in i&&typeof i.next!="function"&&(i=i[Symbol.iterator]()),typeof i.next=="function"){for(s=i,d=0;u=s.next(),u.done!==!0;)a(u.value,d),d++;return}for(c in i)i.hasOwnProperty(c)&&a(i[c],c)}})),Wt=re(((e,t)=>{function n(r){if(typeof r!="function")throw Error("obliterator/iterator: expecting a function!");this.next=r}typeof Symbol<"u"&&(n.prototype[Symbol.iterator]=function(){return this}),n.of=function(){var r=arguments,o=r.length,l=0;return new n(function(){return l>=o?{done:!0}:{done:!1,value:r[l++]}})},n.empty=function(){return new n(function(){return{done:!0}})},n.fromSequence=function(r){var o=0,l=r.length;return new n(function(){return o>=l?{done:!0}:{done:!1,value:r[o++]}})},n.is=function(r){return r instanceof n?!0:typeof r=="object"&&!!r&&typeof r.next=="function"},t.exports=n})),dr=re((e=>{var t=255,n=2**16-1,r=2**32-1,o=2**7-1,l=2**15-1,i=2**31-1;e.getPointerArray=function(s){var c=s-1;if(c<=t)return Uint8Array;if(c<=n)return Uint16Array;if(c<=r)return Uint32Array;throw Error("mnemonist: Pointer Array of size > 4294967295 is not supported.")},e.getSignedPointerArray=function(s){var c=s-1;return c<=o?Int8Array:c<=l?Int16Array:c<=i?Int32Array:Float64Array},e.getNumberType=function(s){return s===(s|0)?Math.sign(s)===-1?s<=127&&s>=-128?Int8Array:s<=32767&&s>=-32768?Int16Array:Int32Array:s<=255?Uint8Array:s<=65535?Uint16Array:Uint32Array:Float64Array};var a={Uint8Array:1,Int8Array:2,Uint16Array:3,Int16Array:4,Uint32Array:5,Int32Array:6,Float32Array:7,Float64Array:8};e.getMinimalRepresentation=function(s,c){var d=null,f=0,u,h,p,T,b;for(T=0,b=s.length;T<b;T++)p=c?c(s[T]):s[T],h=e.getNumberType(p),u=a[h.name],u>f&&(f=u,d=h);return d},e.isTypedArray=function(s){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView(s)},e.concat=function(){var s=0,c,d,f;for(c=0,f=arguments.length;c<f;c++)s+=arguments[c].length;var u=new arguments[0].constructor(s);for(c=0,d=0;c<f;c++)u.set(arguments[c],d),d+=arguments[c].length;return u},e.indices=function(s){for(var c=new(e.getPointerArray(s))(s),d=0;d<s;d++)c[d]=d;return c}})),fr=re((e=>{var t=_e(),n=dr();function r(a){return Array.isArray(a)||n.isTypedArray(a)}function o(a){if(typeof a.length=="number")return a.length;if(typeof a.size=="number")return a.size}function l(a){var s=o(a),c=typeof s=="number"?Array(s):[],d=0;return t(a,function(f){c[d++]=f}),c}function i(a){var s=o(a),c=typeof s=="number"?n.getPointerArray(s):Array,d=typeof s=="number"?Array(s):[],f=typeof s=="number"?new c(s):[],u=0;return t(a,function(h){d[u]=h,f[u]=u++}),[d,f]}e.isArrayLike=r,e.guessLength=o,e.toArray=l,e.toArrayWithIndices=i})),Xl=re(((e,t)=>{t.exports=function(r){return typeof r=="object"&&!!r&&typeof r.addUndirectedEdgeWithKey=="function"&&typeof r.dropNode=="function"&&typeof r.multi=="boolean"}})),wd=re(((e,t)=>{var n=fr(),r=Wt();function o(l,i){if(arguments.length<2)throw Error("mnemonist/fixed-deque: expecting an Array class and a capacity.");if(typeof i!="number"||i<=0)throw Error("mnemonist/fixed-deque: `capacity` should be a positive number.");this.ArrayClass=l,this.capacity=i,this.items=new l(this.capacity),this.clear()}o.prototype.clear=function(){this.start=0,this.size=0},o.prototype.push=function(l){if(this.size===this.capacity)throw Error("mnemonist/fixed-deque.push: deque capacity ("+this.capacity+") exceeded!");var i=this.start+this.size;return i>=this.capacity&&(i-=this.capacity),this.items[i]=l,++this.size},o.prototype.unshift=function(l){if(this.size===this.capacity)throw Error("mnemonist/fixed-deque.unshift: deque capacity ("+this.capacity+") exceeded!");var i=this.start-1;return this.start===0&&(i=this.capacity-1),this.items[i]=l,this.start=i,++this.size},o.prototype.pop=function(){if(this.size!==0){this.size--;var l=this.start+this.size;return l>=this.capacity&&(l-=this.capacity),this.items[l]}},o.prototype.shift=function(){if(this.size!==0){var l=this.start;return this.size--,this.start++,this.start===this.capacity&&(this.start=0),this.items[l]}},o.prototype.peekFirst=function(){if(this.size!==0)return this.items[this.start]},o.prototype.peekLast=function(){if(this.size!==0){var l=this.start+this.size-1;return l>=this.capacity&&(l-=this.capacity),this.items[l]}},o.prototype.get=function(l){if(!(this.size===0||l>=this.capacity))return l=this.start+l,l>=this.capacity&&(l-=this.capacity),this.items[l]},o.prototype.forEach=function(l,i){i=arguments.length>1?i:this;for(var a=this.capacity,s=this.size,c=this.start,d=0;d<s;)l.call(i,this.items[c],d,this),c++,d++,c===a&&(c=0)},o.prototype.toArray=function(){var l=this.start+this.size;if(l<this.capacity)return this.items.slice(this.start,l);for(var i=new this.ArrayClass(this.size),a=this.capacity,s=this.size,c=this.start,d=0;d<s;)i[d]=this.items[c],c++,d++,c===a&&(c=0);return i},o.prototype.values=function(){var l=this.items,i=this.capacity,a=this.size,s=this.start,c=0;return new r(function(){if(c>=a)return{done:!0};var d=l[s];return s++,c++,s===i&&(s=0),{value:d,done:!1}})},o.prototype.entries=function(){var l=this.items,i=this.capacity,a=this.size,s=this.start,c=0;return new r(function(){if(c>=a)return{done:!0};var d=l[s];return s++,s===i&&(s=0),{value:[c++,d],done:!1}})},typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.values),o.prototype.inspect=function(){var l=this.toArray();return l.type=this.ArrayClass.name,l.capacity=this.capacity,Object.defineProperty(l,"constructor",{value:o,enumerable:!1}),l},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),o.from=function(l,i,a){if(arguments.length<3&&(a=n.guessLength(l),typeof a!="number"))throw Error("mnemonist/fixed-deque.from: could not guess iterable length. Please provide desired capacity as last argument.");var s=new o(i,a);if(n.isArrayLike(l)){var c,d;for(c=0,d=l.length;c<d;c++)s.items[c]=l[c];return s.size=d,s}return n.forEach(l,function(f){s.push(f)}),s},t.exports=o})),vd=re((e=>{let t=Xl(),n=wd();function r(i,a){let s=0;return i.forEachInNeighbor(a,()=>{s++}),s}function o(i,a){if(!t(i))throw Error("graphology-dag/topological-sort: the given graph is not a valid graphology instance.");if(i.type==="undirected"||i.undirectedSize!==0)throw Error("graphology-dag/topological-sort: cannot work if graph is not directed.");if(i.order===0)return;let s=new n(Array,i.order),c={},d=0;i.forEachNode((h,p)=>{let T=i.multi?r(i,h):i.inDegree(h);T===0?s.push([h,p,0]):(c[h]=T,d+=T)});let f=0;function u(h,p){let T=--c[h];d--,T===0&&s.push([h,p,f+1]),c[h]=T}for(;s.size!==0;){let[h,p,T]=s.shift();f=T,a(h,p,T),i.forEachOutNeighbor(h,u)}if(d!==0)throw Error("graphology-dag/topological-sort: given graph is not acyclic.")}function l(i){if(!t(i))throw Error("graphology-dag/topological-sort: the given graph is not a valid graphology instance.");let a=Array(i.order),s=0;return o(i,c=>{a[s++]=c}),a}e.topologicalSort=l})),kd=re(((e,t)=>{let n=Xl();t.exports=function(o,l,i){if(!n(o))throw Error("graphology-dag/will-create-cycle: the given graph is not a valid graphology instance.");if(l=""+l,i=""+i,l===i)return!0;if(!o.hasNode(l)||!o.hasNode(i)||o.hasDirectedEdge(l,i))return!1;if(o.hasDirectedEdge(i,l))return!0;let a=o.outNeighbors(i);function s(c){a.push(c)}for(;a.length!==0;){let c=a.pop();if(c===l)return!0;o.forEachOutNeighbor(c,s)}return!1}})),Bd=re(((e,t)=>{var n=_e();function r(s){this.size=0,this.items=new Map,this.inverse=s}function o(){this.size=0,this.items=new Map,this.inverse=new r(this)}function l(){this.size=0,this.items.clear(),this.inverse.items.clear()}o.prototype.clear=l,r.prototype.clear=l;function i(s,c){if(this.items.has(s)){var d=this.items.get(s);if(d===c)return this;this.inverse.items.delete(d)}if(this.inverse.items.has(c)){var f=this.inverse.items.get(c);if(f===s)return this;this.items.delete(f)}return this.items.set(s,c),this.inverse.items.set(c,s),this.size=this.items.size,this.inverse.size=this.inverse.items.size,this}o.prototype.set=i,r.prototype.set=i;function a(s){if(this.items.has(s)){var c=this.items.get(s);return this.items.delete(s),this.inverse.items.delete(c),this.size=this.items.size,this.inverse.size=this.inverse.items.size,!0}return!1}o.prototype.delete=a,r.prototype.delete=a,["has","get","forEach","keys","values","entries"].forEach(function(s){o.prototype[s]=r.prototype[s]=function(){return Map.prototype[s].apply(this.items,arguments)}}),typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.entries,r.prototype[Symbol.iterator]=r.prototype.entries),o.prototype.inspect=function(){var s={left:this.items,right:this.inverse.items};return Object.defineProperty(s,"constructor",{value:o,enumerable:!1}),s},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),r.prototype.inspect=function(){var s={left:this.inverse.items,right:this.items};return Object.defineProperty(s,"constructor",{value:r,enumerable:!1}),s},typeof Symbol<"u"&&(r.prototype[Symbol.for("nodejs.util.inspect.custom")]=r.prototype.inspect),o.from=function(s){var c=new o;return n(s,function(d,f){c.set(f,d)}),c},t.exports=o})),Ed=re(((e,t)=>{function n(r){if(typeof r!="function")throw Error("mnemonist/DefaultMap.constructor: expecting a function.");this.items=new Map,this.factory=r,this.size=0}n.prototype.clear=function(){this.items.clear(),this.size=0},n.prototype.get=function(r){var o=this.items.get(r);return o===void 0&&(o=this.factory(r,this.size),this.items.set(r,o),this.size++),o},n.prototype.peek=function(r){return this.items.get(r)},n.prototype.set=function(r,o){return this.items.set(r,o),this.size=this.items.size,this},n.prototype.has=function(r){return this.items.has(r)},n.prototype.delete=function(r){var o=this.items.delete(r);return this.size=this.items.size,o},n.prototype.forEach=function(r,o){o=arguments.length>1?o:this,this.items.forEach(r,o)},n.prototype.entries=function(){return this.items.entries()},n.prototype.keys=function(){return this.items.keys()},n.prototype.values=function(){return this.items.values()},typeof Symbol<"u"&&(n.prototype[Symbol.iterator]=n.prototype.entries),n.prototype.inspect=function(){return this.items},typeof Symbol<"u"&&(n.prototype[Symbol.for("nodejs.util.inspect.custom")]=n.prototype.inspect),n.autoIncrement=function(){var r=0;return function(){return r++}},t.exports=n})),Ad=re(((e,t)=>{function n(r){if(typeof r!="function")throw Error("mnemonist/DefaultWeakMap.constructor: expecting a function.");this.items=new WeakMap,this.factory=r}n.prototype.clear=function(){this.items=new WeakMap},n.prototype.get=function(r){var o=this.items.get(r);return o===void 0&&(o=this.factory(r),this.items.set(r,o)),o},n.prototype.peek=function(r){return this.items.get(r)},n.prototype.set=function(r,o){return this.items.set(r,o),this},n.prototype.has=function(r){return this.items.has(r)},n.prototype.delete=function(r){return this.items.delete(r)},n.prototype.inspect=function(){return this.items},typeof Symbol<"u"&&(n.prototype[Symbol.for("nodejs.util.inspect.custom")]=n.prototype.inspect),t.exports=n})),Dd=re(((e,t)=>{var n=Wt(),r=_e();function o(){this.clear()}o.prototype.clear=function(){this.head=null,this.tail=null,this.size=0},o.prototype.first=function(){return this.head?this.head.item:void 0},o.prototype.peek=o.prototype.first,o.prototype.last=function(){return this.tail?this.tail.item:void 0},o.prototype.push=function(l){var i={item:l,next:null};return this.head?(this.tail.next=i,this.tail=i):(this.head=i,this.tail=i),this.size++,this.size},o.prototype.unshift=function(l){var i={item:l,next:null};return this.head?(this.head.next||(this.tail=this.head),i.next=this.head,this.head=i):(this.head=i,this.tail=i),this.size++,this.size},o.prototype.shift=function(){if(this.size){var l=this.head;return this.head=l.next,this.size--,l.item}},o.prototype.forEach=function(l,i){if(this.size){i=arguments.length>1?i:this;for(var a=this.head,s=0;a;)l.call(i,a.item,s,this),a=a.next,s++}},o.prototype.toArray=function(){if(!this.size)return[];for(var l=Array(this.size),i=0,a=this.size,s=this.head;i<a;i++)l[i]=s.item,s=s.next;return l},o.prototype.values=function(){var l=this.head;return new n(function(){if(!l)return{done:!0};var i=l.item;return l=l.next,{value:i,done:!1}})},o.prototype.entries=function(){var l=this.head,i=0;return new n(function(){if(!l)return{done:!0};var a=l.item;return l=l.next,i++,{value:[i-1,a],done:!1}})},typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.values),o.prototype.toString=function(){return this.toArray().join(",")},o.prototype.toJSON=function(){return this.toArray()},o.prototype.inspect=function(){var l=this.toArray();return Object.defineProperty(l,"constructor",{value:o,enumerable:!1}),l},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),o.from=function(l){var i=new o;return r(l,function(a){i.push(a)}),i},t.exports=o})),Fd=re(((e,t)=>{var n=Wt(),r=_e();function o(l){this.Container=l||Array,this.items=new Map,this.clear(),Object.defineProperty(this.items,"constructor",{value:o,enumerable:!1})}o.prototype.clear=function(){this.size=0,this.dimension=0,this.items.clear()},o.prototype.set=function(l,i){var a=this.items.get(l),s;return a||(this.dimension++,a=new this.Container,this.items.set(l,a)),this.Container===Set?(s=a.size,a.add(i),s<a.size&&this.size++):(a.push(i),this.size++),this},o.prototype.delete=function(l){var i=this.items.get(l);return i?(this.size-=this.Container===Set?i.size:i.length,this.dimension--,this.items.delete(l),!0):!1},o.prototype.remove=function(l,i){var a=this.items.get(l),s,c;return a?this.Container===Set?(s=a.delete(i),s&&this.size--,a.size===0&&(this.items.delete(l),this.dimension--),s):(c=a.indexOf(i),c===-1?!1:(this.size--,a.length===1?(this.items.delete(l),this.dimension--,!0):(a.splice(c,1),!0))):!1},o.prototype.has=function(l){return this.items.has(l)},o.prototype.get=function(l){return this.items.get(l)},o.prototype.multiplicity=function(l){var i=this.items.get(l);return i===void 0?0:this.Container===Set?i.size:i.length},o.prototype.count=o.prototype.multiplicity,o.prototype.forEach=function(l,i){i=arguments.length>1?i:this;var a;function s(c){l.call(i,c,a)}this.items.forEach(function(c,d){a=d,c.forEach(s)})},o.prototype.forEachAssociation=function(l,i){i=arguments.length>1?i:this,this.items.forEach(l,i)},o.prototype.keys=function(){return this.items.keys()},o.prototype.values=function(){var l=this.items.values(),i=!1,a,s,c,d;return this.Container===Set?new n(function f(){if(!i){if(s=l.next(),s.done)return{done:!0};i=!0,a=s.value.values()}return s=a.next(),s.done?(i=!1,f()):{done:!1,value:s.value}}):new n(function f(){if(!i){if(s=l.next(),s.done)return{done:!0};i=!0,a=s.value,c=0,d=a.length}return c>=d?(i=!1,f()):{done:!1,value:a[c++]}})},o.prototype.entries=function(){var l=this.items.entries(),i=!1,a,s,c,d,f;return this.Container===Set?new n(function u(){if(!i){if(s=l.next(),s.done)return{done:!0};i=!0,c=s.value[0],a=s.value[1].values()}return s=a.next(),s.done?(i=!1,u()):{done:!1,value:[c,s.value]}}):new n(function u(){if(!i){if(s=l.next(),s.done)return{done:!0};i=!0,c=s.value[0],a=s.value[1],d=0,f=a.length}return d>=f?(i=!1,u()):{done:!1,value:[c,a[d++]]}})},o.prototype.containers=function(){return this.items.values()},o.prototype.associations=function(){return this.items.entries()},typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.entries),o.prototype.inspect=function(){return this.items},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),o.prototype.toJSON=function(){return this.items},o.from=function(l,i){var a=new o(i);return r(l,function(s,c){a.set(c,s)}),a},t.exports=o})),Nd=re(((e,t)=>{var n=Wt(),r=_e();function o(){this.clear()}o.prototype.clear=function(){this.items=[],this.offset=0,this.size=0},o.prototype.enqueue=function(l){return this.items.push(l),++this.size},o.prototype.dequeue=function(){if(this.size){var l=this.items[this.offset];return++this.offset*2>=this.items.length&&(this.items=this.items.slice(this.offset),this.offset=0),this.size--,l}},o.prototype.peek=function(){if(this.size)return this.items[this.offset]},o.prototype.forEach=function(l,i){i=arguments.length>1?i:this;for(var a=this.offset,s=0,c=this.items.length;a<c;a++,s++)l.call(i,this.items[a],s,this)},o.prototype.toArray=function(){return this.items.slice(this.offset)},o.prototype.values=function(){var l=this.items,i=this.offset;return new n(function(){if(i>=l.length)return{done:!0};var a=l[i];return i++,{value:a,done:!1}})},o.prototype.entries=function(){var l=this.items,i=this.offset,a=0;return new n(function(){if(i>=l.length)return{done:!0};var s=l[i];return i++,{value:[a++,s],done:!1}})},typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.values),o.prototype.toString=function(){return this.toArray().join(",")},o.prototype.toJSON=function(){return this.toArray()},o.prototype.inspect=function(){var l=this.toArray();return Object.defineProperty(l,"constructor",{value:o,enumerable:!1}),l},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),o.from=function(l){var i=new o;return r(l,function(a){i.enqueue(a)}),i},o.of=function(){return o.from(arguments)},t.exports=o})),Od=re(((e,t)=>{var n=Wt(),r=_e(),o=dr(),l=fr();function i(a,s,c){if(arguments.length<2&&(c=a,a=null,s=null),this.capacity=c,typeof this.capacity!="number"||this.capacity<=0)throw Error("mnemonist/lru-cache: capacity should be positive number.");if(!isFinite(this.capacity)||Math.floor(this.capacity)!==this.capacity)throw Error("mnemonist/lru-cache: capacity should be a finite positive integer.");var d=o.getPointerArray(c);this.forward=new d(c),this.backward=new d(c),this.K=typeof a=="function"?new a(c):Array(c),this.V=typeof s=="function"?new s(c):Array(c),this.size=0,this.head=0,this.tail=0,this.items={}}i.prototype.clear=function(){this.size=0,this.head=0,this.tail=0,this.items={}},i.prototype.splayOnTop=function(a){var s=this.head;if(this.head===a)return this;var c=this.backward[a],d=this.forward[a];return this.tail===a?this.tail=c:this.backward[d]=c,this.forward[c]=d,this.backward[s]=a,this.head=a,this.forward[a]=s,this},i.prototype.set=function(a,s){var c=this.items[a];if(c!==void 0){this.splayOnTop(c),this.V[c]=s;return}this.size<this.capacity?c=this.size++:(c=this.tail,this.tail=this.backward[c],delete this.items[this.K[c]]),this.items[a]=c,this.K[c]=a,this.V[c]=s,this.forward[c]=this.head,this.backward[this.head]=c,this.head=c},i.prototype.setpop=function(a,s){var c=null,d=null,f=this.items[a];return f===void 0?(this.size<this.capacity?f=this.size++:(f=this.tail,this.tail=this.backward[f],c=this.V[f],d=this.K[f],delete this.items[d]),this.items[a]=f,this.K[f]=a,this.V[f]=s,this.forward[f]=this.head,this.backward[this.head]=f,this.head=f,d?{evicted:!0,key:d,value:c}:null):(this.splayOnTop(f),c=this.V[f],this.V[f]=s,{evicted:!1,key:a,value:c})},i.prototype.has=function(a){return a in this.items},i.prototype.get=function(a){var s=this.items[a];if(s!==void 0)return this.splayOnTop(s),this.V[s]},i.prototype.peek=function(a){var s=this.items[a];if(s!==void 0)return this.V[s]},i.prototype.forEach=function(a,s){s=arguments.length>1?s:this;for(var c=0,d=this.size,f=this.head,u=this.K,h=this.V,p=this.forward;c<d;)a.call(s,h[f],u[f],this),f=p[f],c++},i.prototype.keys=function(){var a=0,s=this.size,c=this.head,d=this.K,f=this.forward;return new n(function(){if(a>=s)return{done:!0};var u=d[c];return a++,a<s&&(c=f[c]),{done:!1,value:u}})},i.prototype.values=function(){var a=0,s=this.size,c=this.head,d=this.V,f=this.forward;return new n(function(){if(a>=s)return{done:!0};var u=d[c];return a++,a<s&&(c=f[c]),{done:!1,value:u}})},i.prototype.entries=function(){var a=0,s=this.size,c=this.head,d=this.K,f=this.V,u=this.forward;return new n(function(){if(a>=s)return{done:!0};var h=d[c],p=f[c];return a++,a<s&&(c=u[c]),{done:!1,value:[h,p]}})},typeof Symbol<"u"&&(i.prototype[Symbol.iterator]=i.prototype.entries),i.prototype.inspect=function(){for(var a=new Map,s=this.entries(),c;c=s.next(),!c.done;)a.set(c.value[0],c.value[1]);return Object.defineProperty(a,"constructor",{value:i,enumerable:!1}),a},typeof Symbol<"u"&&(i.prototype[Symbol.for("nodejs.util.inspect.custom")]=i.prototype.inspect),i.from=function(a,s,c,d){if(arguments.length<2){if(d=l.guessLength(a),typeof d!="number")throw Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.")}else arguments.length===2&&(d=s,s=null,c=null);var f=new i(s,c,d);return r(a,function(u,h){f.set(h,u)}),f},t.exports=i})),jl=re(((e,t)=>{var n=Od(),r=_e(),o=dr(),l=fr();function i(a,s,c){if(arguments.length<2&&(c=a,a=null,s=null),this.capacity=c,typeof this.capacity!="number"||this.capacity<=0)throw Error("mnemonist/lru-map: capacity should be positive number.");if(!isFinite(this.capacity)||Math.floor(this.capacity)!==this.capacity)throw Error("mnemonist/lru-map: capacity should be a finite positive integer.");var d=o.getPointerArray(c);this.forward=new d(c),this.backward=new d(c),this.K=typeof a=="function"?new a(c):Array(c),this.V=typeof s=="function"?new s(c):Array(c),this.size=0,this.head=0,this.tail=0,this.items=new Map}i.prototype.clear=function(){this.size=0,this.head=0,this.tail=0,this.items.clear()},i.prototype.set=function(a,s){var c=this.items.get(a);if(c!==void 0){this.splayOnTop(c),this.V[c]=s;return}this.size<this.capacity?c=this.size++:(c=this.tail,this.tail=this.backward[c],this.items.delete(this.K[c])),this.items.set(a,c),this.K[c]=a,this.V[c]=s,this.forward[c]=this.head,this.backward[this.head]=c,this.head=c},i.prototype.setpop=function(a,s){var c=null,d=null,f=this.items.get(a);return f===void 0?(this.size<this.capacity?f=this.size++:(f=this.tail,this.tail=this.backward[f],c=this.V[f],d=this.K[f],this.items.delete(d)),this.items.set(a,f),this.K[f]=a,this.V[f]=s,this.forward[f]=this.head,this.backward[this.head]=f,this.head=f,d?{evicted:!0,key:d,value:c}:null):(this.splayOnTop(f),c=this.V[f],this.V[f]=s,{evicted:!1,key:a,value:c})},i.prototype.has=function(a){return this.items.has(a)},i.prototype.get=function(a){var s=this.items.get(a);if(s!==void 0)return this.splayOnTop(s),this.V[s]},i.prototype.peek=function(a){var s=this.items.get(a);if(s!==void 0)return this.V[s]},i.prototype.splayOnTop=n.prototype.splayOnTop,i.prototype.forEach=n.prototype.forEach,i.prototype.keys=n.prototype.keys,i.prototype.values=n.prototype.values,i.prototype.entries=n.prototype.entries,typeof Symbol<"u"&&(i.prototype[Symbol.iterator]=i.prototype.entries),i.prototype.inspect=n.prototype.inspect,i.from=function(a,s,c,d){if(arguments.length<2){if(d=l.guessLength(a),typeof d!="number")throw Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.")}else arguments.length===2&&(d=s,s=null,c=null);var f=new i(s,c,d);return r(a,function(u,h){f.set(h,u)}),f},t.exports=i})),Rd=re(((e,t)=>{var n=jl(),r=_e(),o=dr(),l=fr();function i(s,c,d){arguments.length<2?n.call(this,s):n.call(this,s,c,d),this.deleted=new(o.getPointerArray(this.capacity))(this.capacity),this.deletedSize=0}for(var a in n.prototype)i.prototype[a]=n.prototype[a];typeof Symbol<"u"&&(i.prototype[Symbol.iterator]=n.prototype[Symbol.iterator]),i.prototype.clear=function(){n.prototype.clear.call(this),this.deletedSize=0},i.prototype.set=function(s,c){var d=this.items.get(s);if(d!==void 0){this.splayOnTop(d),this.V[d]=c;return}this.size<this.capacity?(d=this.deletedSize>0?this.deleted[--this.deletedSize]:this.size,this.size++):(d=this.tail,this.tail=this.backward[d],this.items.delete(this.K[d])),this.items.set(s,d),this.K[d]=s,this.V[d]=c,this.forward[d]=this.head,this.backward[this.head]=d,this.head=d},i.prototype.setpop=function(s,c){var d=null,f=null,u=this.items.get(s);return u===void 0?(this.size<this.capacity?(u=this.deletedSize>0?this.deleted[--this.deletedSize]:this.size,this.size++):(u=this.tail,this.tail=this.backward[u],d=this.V[u],f=this.K[u],this.items.delete(f)),this.items.set(s,u),this.K[u]=s,this.V[u]=c,this.forward[u]=this.head,this.backward[this.head]=u,this.head=u,f?{evicted:!0,key:f,value:d}:null):(this.splayOnTop(u),d=this.V[u],this.V[u]=c,{evicted:!1,key:s,value:d})},i.prototype.delete=function(s){var c=this.items.get(s);if(c===void 0)return!1;if(this.items.delete(s),this.size===1)return this.size=0,this.head=0,this.tail=0,this.deletedSize=0,!0;var d=this.backward[c],f=this.forward[c];return this.head===c&&(this.head=f),this.tail===c&&(this.tail=d),this.forward[d]=f,this.backward[f]=d,this.size--,this.deleted[this.deletedSize++]=c,!0},i.prototype.remove=function(s,c=void 0){var d=this.items.get(s);if(d===void 0)return c;var f=this.V[d];if(this.items.delete(s),this.size===1)return this.size=0,this.head=0,this.tail=0,this.deletedSize=0,f;var u=this.backward[d],h=this.forward[d];return this.head===d&&(this.head=h),this.tail===d&&(this.tail=u),this.forward[u]=h,this.backward[h]=u,this.size--,this.deleted[this.deletedSize++]=d,f},i.from=function(s,c,d,f){if(arguments.length<2){if(f=l.guessLength(s),typeof f!="number")throw Error("mnemonist/lru-map.from: could not guess iterable length. Please provide desired capacity as last argument.")}else arguments.length===2&&(f=c,c=null,d=null);var u=new i(c,d,f);return r(s,function(h,p){u.set(p,h)}),u},t.exports=i})),Cd=re((e=>{e.intersection=function(){if(arguments.length<2)throw Error("mnemonist/Set.intersection: needs at least two arguments.");var t=new Set,n=1/0,r=null,o,l,i=arguments.length;for(l=0;l<i;l++){if(o=arguments[l],o.size===0)return t;o.size<n&&(n=o.size,r=o)}for(var a=r.values(),s,c,d,f;s=a.next(),!s.done;){for(c=s.value,d=!0,l=0;l<i;l++)if(f=arguments[l],f!==r&&!f.has(c)){d=!1;break}d&&t.add(c)}return t},e.union=function(){if(arguments.length<2)throw Error("mnemonist/Set.union: needs at least two arguments.");var t=new Set,n,r=arguments.length,o,l;for(n=0;n<r;n++)for(o=arguments[n].values();l=o.next(),!l.done;)t.add(l.value);return t},e.difference=function(t,n){if(!t.size)return new Set;if(!n.size)return new Set(t);for(var r=new Set,o=t.values(),l;l=o.next(),!l.done;)n.has(l.value)||r.add(l.value);return r},e.symmetricDifference=function(t,n){for(var r=new Set,o=t.values(),l;l=o.next(),!l.done;)n.has(l.value)||r.add(l.value);for(o=n.values();l=o.next(),!l.done;)t.has(l.value)||r.add(l.value);return r},e.isSubset=function(t,n){var r=t.values(),o;if(t===n)return!0;if(t.size>n.size)return!1;for(;o=r.next(),!o.done;)if(!n.has(o.value))return!1;return!0},e.isSuperset=function(t,n){return e.isSubset(n,t)},e.add=function(t,n){for(var r=n.values(),o;o=r.next(),!o.done;)t.add(o.value)},e.subtract=function(t,n){for(var r=n.values(),o;o=r.next(),!o.done;)t.delete(o.value)},e.intersect=function(t,n){for(var r=t.values(),o;o=r.next(),!o.done;)n.has(o.value)||t.delete(o.value)},e.disjunct=function(t,n){for(var r=t.values(),o,l=[];o=r.next(),!o.done;)n.has(o.value)&&l.push(o.value);for(r=n.values();o=r.next(),!o.done;)t.has(o.value)||t.add(o.value);for(var i=0,a=l.length;i<a;i++)t.delete(l[i])},e.intersectionSize=function(t,n){var r;if(t.size>n.size&&(r=t,t=n,n=r),t.size===0)return 0;if(t===n)return t.size;for(var o=t.values(),l,i=0;l=o.next(),!l.done;)n.has(l.value)&&i++;return i},e.unionSize=function(t,n){var r=e.intersectionSize(t,n);return t.size+n.size-r},e.jaccard=function(t,n){var r=e.intersectionSize(t,n);return r===0?0:r/(t.size+n.size-r)},e.overlap=function(t,n){var r=e.intersectionSize(t,n);return r===0?0:r/Math.min(t.size,n.size)}})),Ld=re(((e,t)=>{var n=Wt(),r=_e();function o(){this.clear()}o.prototype.clear=function(){this.items=[],this.size=0},o.prototype.push=function(l){return this.items.push(l),++this.size},o.prototype.pop=function(){if(this.size!==0)return this.size--,this.items.pop()},o.prototype.peek=function(){return this.items[this.size-1]},o.prototype.forEach=function(l,i){i=arguments.length>1?i:this;for(var a=0,s=this.items.length;a<s;a++)l.call(i,this.items[s-a-1],a,this)},o.prototype.toArray=function(){for(var l=Array(this.size),i=this.size-1,a=this.size;a--;)l[a]=this.items[i-a];return l},o.prototype.values=function(){var l=this.items,i=l.length,a=0;return new n(function(){if(a>=i)return{done:!0};var s=l[i-a-1];return a++,{value:s,done:!1}})},o.prototype.entries=function(){var l=this.items,i=l.length,a=0;return new n(function(){if(a>=i)return{done:!0};var s=l[i-a-1];return{value:[a++,s],done:!1}})},typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.values),o.prototype.toString=function(){return this.toArray().join(",")},o.prototype.toJSON=function(){return this.toArray()},o.prototype.inspect=function(){var l=this.toArray();return Object.defineProperty(l,"constructor",{value:o,enumerable:!1}),l},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),o.from=function(l){var i=new o;return r(l,function(a){i.push(a)}),i},o.of=function(){return o.from(arguments)},t.exports=o}));Bd();var de=je(Ed()),So=je(Ad()),$l=je(Dd()),Hl=je(Fd()),Wl=je(Nd()),xi=je(jl());Rd();var Zl=Cd(),Id=je(Ld()),Sd=re(((e,t)=>{var n=function(r,o){var l,i,a=1,s=0,c=0,d=String.alphabet;function f(u,h,p){if(p){for(l=h;p=f(u,l),p<76&&p>65;)++l;return+u.slice(h-1,l)}return p=d&&d.indexOf(u.charAt(h)),p>-1?p+76:(p=u.charCodeAt(h)||0,p<45||p>127?p:p<46?65:p<48?p-1:p<58?p+18:p<65?p-11:p<91?p+11:p<97?p-37:p<123?p+5:p-63)}if((r+="")!=(o+="")){for(;a;)if(i=f(r,s++),a=f(o,c++),i<76&&a<76&&i>66&&a>66&&(i=f(r,s,s),a=f(o,c,s=l),c=l),i!=a)return i<a?-1:1}return 0};try{t.exports=n}catch{String.naturalCompare=n}}));function Pd(e){return typeof e=="string"?`'${e}'`:new zd().serialize(e)}const zd=(function(){class e{#e=new Map;compare(n,r){let o=typeof n,l=typeof r;return o==="string"&&l==="string"?n.localeCompare(r):o==="number"&&l==="number"?n-r:String.prototype.localeCompare.call(this.serialize(n,!0),this.serialize(r,!0))}serialize(n,r){if(n===null)return"null";switch(typeof n){case"string":return r?n:`'${n}'`;case"bigint":return`${n}n`;case"object":return this.$object(n);case"function":return this.$function(n)}return String(n)}serializeObject(n){let r=Object.prototype.toString.call(n);if(r!=="[object Object]")return this.serializeBuiltInType(r.length<10?`unknown:${r}`:r.slice(8,-1),n);let o=n.constructor,l=o===Object||o===void 0?"":o.name;if(l!==""&&globalThis[l]===o)return this.serializeBuiltInType(l,n);if(typeof n.toJSON=="function"){let i=n.toJSON();return l+(typeof i=="object"&&i?this.$object(i):`(${this.serialize(i)})`)}return this.serializeObjectEntries(l,Object.entries(n))}serializeBuiltInType(n,r){let o=this["$"+n];if(o)return o.call(this,r);if(typeof r?.entries=="function")return this.serializeObjectEntries(n,r.entries());throw Error(`Cannot serialize ${n}`)}serializeObjectEntries(n,r){let o=Array.from(r).sort((i,a)=>this.compare(i[0],a[0])),l=`${n}{`;for(let i=0;i<o.length;i++){let[a,s]=o[i];l+=`${this.serialize(a,!0)}:${this.serialize(s)}`,i<o.length-1&&(l+=",")}return l+"}"}$object(n){let r=this.#e.get(n);return r===void 0&&(this.#e.set(n,`#${this.#e.size}`),r=this.serializeObject(n),this.#e.set(n,r)),r}$function(n){let r=Function.prototype.toString.call(n);return r.slice(-15)==="[native code] }"?`${n.name||""}()[native]`:`${n.name}(${n.length})${r.replace(/\s*\n\s*/g,"")}`}$Array(n){let r="[";for(let o=0;o<n.length;o++)r+=this.serialize(n[o]),o<n.length-1&&(r+=",");return r+"]"}$Date(n){try{return`Date(${n.toISOString()})`}catch{return"Date(null)"}}$ArrayBuffer(n){return`ArrayBuffer[${new Uint8Array(n).join(",")}]`}$Set(n){return`Set${this.$Array(Array.from(n).sort((r,o)=>this.compare(r,o)))}`}$Map(n){return this.serializeObjectEntries("Map",n.entries())}}for(let t of["Error","RegExp","URL"])e.prototype["$"+t]=function(n){return`${t}(${n})`};for(let t of["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])e.prototype["$"+t]=function(n){return`${t}[${n.join(",")}]`};for(let t of["BigInt64Array","BigUint64Array"])e.prototype["$"+t]=function(n){return`${t}[${n.join("n,")}${n.length>0?"n":""}]`};return e})(),Md=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Gd=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],ut=[];var qd=class{_data=new Fn;_hash=new Fn([...Md]);_nDataBytes=0;_minBufferSize=0;finalize(t){t&&this._append(t);let n=this._nDataBytes*8,r=this._data.sigBytes*8;return this._data.words[r>>>5]|=128<<24-r%32,this._data.words[(r+64>>>9<<4)+14]=Math.floor(n/4294967296),this._data.words[(r+64>>>9<<4)+15]=n,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}_doProcessBlock(t,n){let r=this._hash.words,o=r[0],l=r[1],i=r[2],a=r[3],s=r[4],c=r[5],d=r[6],f=r[7];for(let u=0;u<64;u++){if(u<16)ut[u]=t[n+u]|0;else{let B=ut[u-15],C=(B<<25|B>>>7)^(B<<14|B>>>18)^B>>>3,S=ut[u-2],k=(S<<15|S>>>17)^(S<<13|S>>>19)^S>>>10;ut[u]=C+ut[u-7]+k+ut[u-16]}let h=s&c^~s&d,p=o&l^o&i^l&i,T=(o<<30|o>>>2)^(o<<19|o>>>13)^(o<<10|o>>>22),b=(s<<26|s>>>6)^(s<<21|s>>>11)^(s<<7|s>>>25),y=f+b+h+Gd[u]+ut[u],F=T+p;f=d,d=c,c=s,s=a+y|0,a=i,i=l,l=o,o=y+F|0}r[0]=r[0]+o|0,r[1]=r[1]+l|0,r[2]=r[2]+i|0,r[3]=r[3]+a|0,r[4]=r[4]+s|0,r[5]=r[5]+c|0,r[6]=r[6]+d|0,r[7]=r[7]+f|0}_append(t){typeof t=="string"&&(t=Fn.fromUtf8(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes}_process(t){let n,r=this._data.sigBytes/64;r=t?Math.ceil(r):Math.max((r|0)-this._minBufferSize,0);let o=r*16,l=Math.min(o*4,this._data.sigBytes);if(o){for(let i=0;i<o;i+=16)this._doProcessBlock(this._data.words,i);n=this._data.words.splice(0,o),this._data.sigBytes-=l}return new Fn(n,l)}},Fn=class Ul{words;sigBytes;constructor(t,n){t=this.words=t||[],this.sigBytes=n===void 0?t.length*4:n}static fromUtf8(t){let n=unescape(encodeURIComponent(t)),r=n.length,o=[];for(let l=0;l<r;l++)o[l>>>2]|=(n.charCodeAt(l)&255)<<24-l%4*8;return new Ul(o,r)}toBase64(){let t=[];for(let n=0;n<this.sigBytes;n+=3){let r=this.words[n>>>2]>>>24-n%4*8&255,o=this.words[n+1>>>2]>>>24-(n+1)%4*8&255,l=this.words[n+2>>>2]>>>24-(n+2)%4*8&255,i=r<<16|o<<8|l;for(let a=0;a<4&&n*8+a*6<this.sigBytes*8;a++)t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(i>>>6*(3-a)&63))}return t.join("")}concat(t){if(this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4),this.sigBytes%4)for(let n=0;n<t.sigBytes;n++){let r=t.words[n>>>2]>>>24-n%4*8&255;this.words[this.sigBytes+n>>>2]|=r<<24-(this.sigBytes+n)%4*8}else for(let n=0;n<t.sigBytes;n+=4)this.words[this.sigBytes+n>>>2]=t.words[n>>>2];this.sigBytes+=t.sigBytes}};function Kd(e){return new qd().finalize(e).toBase64()}function Xd(e){return Kd(Pd(e))}const bi=typeof self=="object"?self:globalThis,jd=(e,t)=>{let n=(o,l)=>(e.set(l,o),o),r=o=>{if(e.has(o))return e.get(o);let[l,i]=t[o];switch(l){case 0:case-1:return n(i,o);case 1:{let a=n([],o);for(let s of i)a.push(r(s));return a}case 2:{let a=n({},o);for(let[s,c]of i)a[r(s)]=r(c);return a}case 3:return n(new Date(i),o);case 4:{let{source:a,flags:s}=i;return n(new RegExp(a,s),o)}case 5:{let a=n(new Map,o);for(let[s,c]of i)a.set(r(s),r(c));return a}case 6:{let a=n(new Set,o);for(let s of i)a.add(r(s));return a}case 7:{let{name:a,message:s}=i;return n(new bi[a](s),o)}case 8:return n(BigInt(i),o);case"BigInt":return n(Object(BigInt(i)),o);case"ArrayBuffer":return n(new Uint8Array(i).buffer,i);case"DataView":{let{buffer:a}=new Uint8Array(i);return n(new DataView(a),i)}}return n(new bi[l](i),o)};return r},Ti=e=>jd(new Map,e)(0),{toString:$d}={},{keys:Hd}=Object,tn=e=>{let t=typeof e;if(t!=="object"||!e)return[0,t];let n=$d.call(e).slice(8,-1);switch(n){case"Array":return[1,""];case"Object":return[2,""];case"Date":return[3,""];case"RegExp":return[4,""];case"Map":return[5,""];case"Set":return[6,""];case"DataView":return[1,n]}return n.includes("Array")?[1,n]:n.includes("Error")?[7,n]:[2,n]},Nn=([e,t])=>e===0&&(t==="function"||t==="symbol"),Wd=(e,t,n,r)=>{let o=(i,a)=>{let s=r.push(i)-1;return n.set(a,s),s},l=i=>{if(n.has(i))return n.get(i);let[a,s]=tn(i);switch(a){case 0:{let d=i;switch(s){case"bigint":a=8,d=i.toString();break;case"function":case"symbol":if(e)throw TypeError("unable to serialize "+s);d=null;break;case"undefined":return o([-1],i)}return o([a,d],i)}case 1:{if(s){let u=i;return s==="DataView"?u=new Uint8Array(i.buffer):s==="ArrayBuffer"&&(u=new Uint8Array(i)),o([s,[...u]],i)}let d=[],f=o([a,d],i);for(let u of i)d.push(l(u));return f}case 2:{if(s)switch(s){case"BigInt":return o([s,i.toString()],i);case"Boolean":case"Number":case"String":return o([s,i.valueOf()],i)}if(t&&"toJSON"in i)return l(i.toJSON());let d=[],f=o([a,d],i);for(let u of Hd(i))(e||!Nn(tn(i[u])))&&d.push([l(u),l(i[u])]);return f}case 3:return o([a,i.toISOString()],i);case 4:{let{source:d,flags:f}=i;return o([a,{source:d,flags:f}],i)}case 5:{let d=[],f=o([a,d],i);for(let[u,h]of i)(e||!(Nn(tn(u))||Nn(tn(h))))&&d.push([l(u),l(h)]);return f}case 6:{let d=[],f=o([a,d],i);for(let u of i)(e||!Nn(tn(u)))&&d.push(l(u));return f}}let{message:c}=i;return o([a,{name:s,message:c}],i)};return l},wi=(e,{json:t,lossy:n}={})=>{let r=[];return Wd(!(t||n),!!t,new Map,r)(e),r};var gn=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Ti(wi(e,t)):structuredClone(e):(e,t)=>Ti(wi(e,t));const Vl=Yl("end"),Ql=Yl("start");function Yl(e){return t;function t(n){let r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Jl(e){let t=Ql(e),n=Vl(e);if(t&&n)return{start:t,end:n}}const ht=["ariaDescribedBy","ariaLabel","ariaLabelledBy"],lo={ancestors:{tbody:["table"],td:["table"],th:["table"],thead:["table"],tfoot:["table"],tr:["table"]},attributes:{a:[...ht,"dataFootnoteBackref","dataFootnoteRef",["className","data-footnote-backref"],"href"],blockquote:["cite"],code:[["className",/^language-./]],del:["cite"],div:["itemScope","itemType"],dl:[...ht],h2:[["className","sr-only"]],img:[...ht,"longDesc","src"],input:[["disabled",!0],["type","checkbox"]],ins:["cite"],li:[["className","task-list-item"]],ol:[...ht,["className","contains-task-list"]],q:["cite"],section:["dataFootnotes",["className","footnotes"]],source:["srcSet"],summary:[...ht],table:[...ht],ul:[...ht,["className","contains-task-list"]],"*":"abbr.accept.acceptCharset.accessKey.action.align.alt.axis.border.cellPadding.cellSpacing.char.charOff.charSet.checked.clear.colSpan.color.cols.compact.coords.dateTime.dir.encType.frame.hSpace.headers.height.hrefLang.htmlFor.id.isMap.itemProp.label.lang.maxLength.media.method.multiple.name.noHref.noShade.noWrap.open.prompt.readOnly.rev.rowSpan.rows.rules.scope.selected.shape.size.span.start.summary.tabIndex.title.useMap.vAlign.value.width".split(".")},clobber:["ariaDescribedBy","ariaLabelledBy","id","name"],clobberPrefix:"user-content-",protocols:{cite:["http","https"],href:["http","https","irc","ircs","mailto","xmpp"],longDesc:["http","https"],src:["http","https"]},required:{input:{disabled:!0,type:"checkbox"}},strip:["script"],tagNames:"a.b.blockquote.br.code.dd.del.details.div.dl.dt.em.h1.h2.h3.h4.h5.h6.hr.i.img.input.ins.kbd.li.ol.p.picture.pre.q.rp.rt.ruby.s.samp.section.source.span.strike.strong.sub.summary.sup.table.tbody.td.tfoot.th.thead.tr.tt.ul.var".split(".")},st={}.hasOwnProperty;function Zd(e,t){let n={type:"root",children:[]},r=_l({schema:t?{...lo,...t}:lo,stack:[]},e);return r&&(Array.isArray(r)?r.length===1?n=r[0]:n.children=r:n=r),n}function _l(e,t){if(t&&typeof t=="object"){let n=t;switch(typeof n.type=="string"?n.type:""){case"comment":return Ud(e,n);case"doctype":return Vd(e,n);case"element":return Qd(e,n);case"root":return Yd(e,n);case"text":return Jd(e,n)}}}function Ud(e,t){if(e.schema.allowComments){let n=typeof t.value=="string"?t.value:"",r=n.indexOf("-->"),o={type:"comment",value:r<0?n:n.slice(0,r)};return Bn(o,t),o}}function Vd(e,t){if(e.schema.allowDoctypes){let n={type:"doctype"};return Bn(n,t),n}}function Qd(e,t){let n=typeof t.tagName=="string"?t.tagName:"";e.stack.push(n);let r=ea(e,t.children),o=_d(e,t.properties);e.stack.pop();let l=!1;if(n&&n!=="*"&&(!e.schema.tagNames||e.schema.tagNames.includes(n))&&(l=!0,e.schema.ancestors&&st.call(e.schema.ancestors,n))){let a=e.schema.ancestors[n],s=-1;for(l=!1;++s<a.length;)e.stack.includes(a[s])&&(l=!0)}if(!l)return e.schema.strip&&!e.schema.strip.includes(n)?r:void 0;let i={type:"element",tagName:n,properties:o,children:r};return Bn(i,t),i}function Yd(e,t){let n={type:"root",children:ea(e,t.children)};return Bn(n,t),n}function Jd(e,t){let n={type:"text",value:typeof t.value=="string"?t.value:""};return Bn(n,t),n}function ea(e,t){let n=[];if(Array.isArray(t)){let r=t,o=-1;for(;++o<r.length;){let l=_l(e,r[o]);l&&(Array.isArray(l)?n.push(...l):n.push(l))}}return n}function _d(e,t){let n=e.stack[e.stack.length-1],r=e.schema.attributes,o=e.schema.required,l=r&&st.call(r,n)?r[n]:void 0,i=r&&st.call(r,"*")?r["*"]:void 0,a=t&&typeof t=="object"?t:{},s={},c;for(c in a)if(st.call(a,c)){let d=a[c],f=vi(e,ki(l,c),c,d);f??=vi(e,ki(i,c),c,d),f!=null&&(s[c]=f)}if(o&&st.call(o,n)){let d=o[n];for(c in d)st.call(d,c)&&!st.call(s,c)&&(s[c]=d[c])}return s}function vi(e,t,n,r){return t?Array.isArray(r)?ef(e,t,n,r):ta(e,t,n,r):void 0}function ef(e,t,n,r){let o=-1,l=[];for(;++o<r.length;){let i=ta(e,t,n,r[o]);(typeof i=="number"||typeof i=="string")&&l.push(i)}return l}function ta(e,t,n,r){if(!(typeof r!="boolean"&&typeof r!="number"&&typeof r!="string")&&tf(e,n,r)){if(typeof t=="object"&&t.length>1){let o=!1,l=0;for(;++l<t.length;){let i=t[l];if(i&&typeof i=="object"&&"flags"in i){if(i.test(String(r))){o=!0;break}}else if(i===r){o=!0;break}}if(!o)return}return e.schema.clobber&&e.schema.clobberPrefix&&e.schema.clobber.includes(n)?e.schema.clobberPrefix+r:r}}function tf(e,t,n){let r=e.schema.protocols&&st.call(e.schema.protocols,t)?e.schema.protocols[t]:void 0;if(!r||r.length===0)return!0;let o=String(n),l=o.indexOf(":"),i=o.indexOf("?"),a=o.indexOf("#"),s=o.indexOf("/");if(l<0||s>-1&&l>s||i>-1&&l>i||a>-1&&l>a)return!0;let c=-1;for(;++c<r.length;){let d=r[c];if(l===d.length&&o.slice(0,d.length)===d)return!0}return!1}function Bn(e,t){let n=Jl(t);t.data&&(e.data=gn(t.data)),n&&(e.position=n)}function ki(e,t){let n,r=-1;if(e)for(;++r<e.length;){let o=e[r],l=typeof o=="string"?o:o[0];if(l===t)return o;l==="data*"&&(n=o)}if(t.length>4&&t.slice(0,4).toLowerCase()==="data")return n}function nf(e){return function(t){return Zd(t,e)}}const rf="AElig.AMP.Aacute.Acirc.Agrave.Aring.Atilde.Auml.COPY.Ccedil.ETH.Eacute.Ecirc.Egrave.Euml.GT.Iacute.Icirc.Igrave.Iuml.LT.Ntilde.Oacute.Ocirc.Ograve.Oslash.Otilde.Ouml.QUOT.REG.THORN.Uacute.Ucirc.Ugrave.Uuml.Yacute.aacute.acirc.acute.aelig.agrave.amp.aring.atilde.auml.brvbar.ccedil.cedil.cent.copy.curren.deg.divide.eacute.ecirc.egrave.eth.euml.frac12.frac14.frac34.gt.iacute.icirc.iexcl.igrave.iquest.iuml.laquo.lt.macr.micro.middot.nbsp.not.ntilde.oacute.ocirc.ograve.ordf.ordm.oslash.otilde.ouml.para.plusmn.pound.quot.raquo.reg.sect.shy.sup1.sup2.sup3.szlig.thorn.times.uacute.ucirc.ugrave.uml.uuml.yacute.yen.yuml".split("."),Dr={nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",fnof:"ƒ",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",bull:"•",hellip:"…",prime:"′",Prime:"″",oline:"‾",frasl:"⁄",weierp:"℘",image:"ℑ",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",quot:'"',amp:"&",lt:"<",gt:">",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",permil:"‰",lsaquo:"‹",rsaquo:"›",euro:"€"};function er(e,t){let n=String(e);if(typeof t!="string")throw TypeError("Expected character");let r=0,o=n.indexOf(t);for(;o!==-1;)r++,o=n.indexOf(t,o+t.length);return r}function of(e,t){let n=t||{};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const lf=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"];var dn=class{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}};dn.prototype.normal={},dn.prototype.property={},dn.prototype.space=void 0;function na(e,t){let n={},r={};for(let o of e)Object.assign(n,o.property),Object.assign(r,o.normal);return new dn(n,r,t)}function ao(e){return e.toLowerCase()}var Te=class{constructor(t,n){this.attribute=n,this.property=t}};Te.prototype.attribute="",Te.prototype.booleanish=!1,Te.prototype.boolean=!1,Te.prototype.commaOrSpaceSeparated=!1,Te.prototype.commaSeparated=!1,Te.prototype.defined=!1,Te.prototype.mustUseProperty=!1,Te.prototype.number=!1,Te.prototype.overloadedBoolean=!1,Te.prototype.property="",Te.prototype.spaceSeparated=!1,Te.prototype.space=void 0;var so=kn({boolean:()=>G,booleanish:()=>le,commaOrSpaceSeparated:()=>Be,commaSeparated:()=>zt,number:()=>D,overloadedBoolean:()=>ra,spaceSeparated:()=>Y});let af=0;const G=Et(),le=Et(),ra=Et(),D=Et(),Y=Et(),zt=Et(),Be=Et();function Et(){return 2**++af}const Fr=Object.keys(so);var Po=class extends Te{constructor(t,n,r,o){let l=-1;if(super(t,n),Bi(this,"space",o),typeof r=="number")for(;++l<Fr.length;){let i=Fr[l];Bi(this,Fr[l],(r&so[i])===so[i])}}};Po.prototype.defined=!0;function Bi(e,t,n){n&&(e[t]=n)}function Zt(e){let t={},n={};for(let[r,o]of Object.entries(e.properties)){let l=new Po(r,e.transform(e.attributes||{},r),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(l.mustUseProperty=!0),t[r]=l,n[ao(r)]=r,n[ao(l.attribute)]=r}return new dn(t,n,e.space)}const oa=Zt({properties:{ariaActiveDescendant:null,ariaAtomic:le,ariaAutoComplete:null,ariaBusy:le,ariaChecked:le,ariaColCount:D,ariaColIndex:D,ariaColSpan:D,ariaControls:Y,ariaCurrent:null,ariaDescribedBy:Y,ariaDetails:null,ariaDisabled:le,ariaDropEffect:Y,ariaErrorMessage:null,ariaExpanded:le,ariaFlowTo:Y,ariaGrabbed:le,ariaHasPopup:null,ariaHidden:le,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Y,ariaLevel:D,ariaLive:null,ariaModal:le,ariaMultiLine:le,ariaMultiSelectable:le,ariaOrientation:null,ariaOwns:Y,ariaPlaceholder:null,ariaPosInSet:D,ariaPressed:le,ariaReadOnly:le,ariaRelevant:null,ariaRequired:le,ariaRoleDescription:Y,ariaRowCount:D,ariaRowIndex:D,ariaRowSpan:D,ariaSelected:le,ariaSetSize:D,ariaSort:null,ariaValueMax:D,ariaValueMin:D,ariaValueNow:D,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function ia(e,t){return t in e?e[t]:t}function la(e,t){return ia(e,t.toLowerCase())}const sf=Zt({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:zt,acceptCharset:Y,accessKey:Y,action:null,allow:null,allowFullScreen:G,allowPaymentRequest:G,allowUserMedia:G,alt:null,as:null,async:G,autoCapitalize:null,autoComplete:Y,autoFocus:G,autoPlay:G,blocking:Y,capture:null,charSet:null,checked:G,cite:null,className:Y,cols:D,colSpan:null,content:null,contentEditable:le,controls:G,controlsList:Y,coords:D|zt,crossOrigin:null,data:null,dateTime:null,decoding:null,default:G,defer:G,dir:null,dirName:null,disabled:G,download:ra,draggable:le,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:G,formTarget:null,headers:Y,height:D,hidden:G,high:D,href:null,hrefLang:null,htmlFor:Y,httpEquiv:Y,id:null,imageSizes:null,imageSrcSet:null,inert:G,inputMode:null,integrity:null,is:null,isMap:G,itemId:null,itemProp:Y,itemRef:Y,itemScope:G,itemType:Y,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:G,low:D,manifest:null,max:null,maxLength:D,media:null,method:null,min:null,minLength:D,multiple:G,muted:G,name:null,nonce:null,noModule:G,noValidate:G,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:G,optimum:D,pattern:null,ping:Y,placeholder:null,playsInline:G,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:G,referrerPolicy:null,rel:Y,required:G,reversed:G,rows:D,rowSpan:D,sandbox:Y,scope:null,scoped:G,seamless:G,selected:G,shadowRootClonable:G,shadowRootDelegatesFocus:G,shadowRootMode:null,shape:null,size:D,sizes:null,slot:null,span:D,spellCheck:le,src:null,srcDoc:null,srcLang:null,srcSet:null,start:D,step:null,style:null,tabIndex:D,target:null,title:null,translate:null,type:null,typeMustMatch:G,useMap:null,value:le,width:D,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Y,axis:null,background:null,bgColor:null,border:D,borderColor:null,bottomMargin:D,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:G,declare:G,event:null,face:null,frame:null,frameBorder:null,hSpace:D,leftMargin:D,link:null,longDesc:null,lowSrc:null,marginHeight:D,marginWidth:D,noResize:G,noHref:G,noShade:G,noWrap:G,object:null,profile:null,prompt:null,rev:null,rightMargin:D,rules:null,scheme:null,scrolling:le,standby:null,summary:null,text:null,topMargin:D,valueType:null,version:null,vAlign:null,vLink:null,vSpace:D,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:G,disableRemotePlayback:G,prefix:null,property:null,results:D,security:null,unselectable:null},space:"html",transform:la}),cf=Zt({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Be,accentHeight:D,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:D,amplitude:D,arabicForm:null,ascent:D,attributeName:null,attributeType:null,azimuth:D,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:D,by:null,calcMode:null,capHeight:D,className:Y,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:D,diffuseConstant:D,direction:null,display:null,dur:null,divisor:D,dominantBaseline:null,download:G,dx:null,dy:null,edgeMode:null,editable:null,elevation:D,enableBackground:null,end:null,event:null,exponent:D,externalResourcesRequired:null,fill:null,fillOpacity:D,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:zt,g2:zt,glyphName:zt,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:D,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:D,horizOriginX:D,horizOriginY:D,id:null,ideographic:D,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:D,k:D,k1:D,k2:D,k3:D,k4:D,kernelMatrix:Be,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:D,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:D,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:D,overlineThickness:D,paintOrder:null,panose1:null,path:null,pathLength:D,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Y,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:D,pointsAtY:D,pointsAtZ:D,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Be,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Be,rev:Be,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Be,requiredFeatures:Be,requiredFonts:Be,requiredFormats:Be,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:D,specularExponent:D,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:D,strikethroughThickness:D,string:null,stroke:null,strokeDashArray:Be,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:D,strokeOpacity:D,strokeWidth:null,style:null,surfaceScale:D,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Be,tabIndex:D,tableValues:null,target:null,targetX:D,targetY:D,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Be,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:D,underlineThickness:D,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:D,values:null,vAlphabetic:D,vMathematical:D,vectorEffect:null,vHanging:D,vIdeographic:D,version:null,vertAdvY:D,vertOriginX:D,vertOriginY:D,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:D,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:ia}),aa=Zt({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),sa=Zt({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:la}),ca=Zt({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),df=/[A-Z]/g,Ei=/-[a-z]/g,ff=/^data[-\w.:]+$/i;function uf(e,t){let n=ao(t),r=t,o=Te;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&ff.test(t)){if(t.charAt(4)==="-"){let l=t.slice(5).replace(Ei,pf);r="data"+l.charAt(0).toUpperCase()+l.slice(1)}else{let l=t.slice(4);if(!Ei.test(l)){let i=l.replace(df,hf);i.charAt(0)!=="-"&&(i="-"+i),t="data"+i}}o=Po}return new o(r,t)}function hf(e){return"-"+e.toLowerCase()}function pf(e){return e.charAt(1).toUpperCase()}const gf=na([oa,sf,aa,sa,ca],"html"),da=na([oa,cf,aa,sa,ca],"svg"),Ai={}.hasOwnProperty;function mf(e,t){let n=t||{};function r(o,...l){let i=r.invalid,a=r.handlers;if(o&&Ai.call(o,e)){let s=String(o[e]);i=Ai.call(a,s)?a[s]:r.unknown}if(i)return i.call(this,o,...l)}return r.handlers=n.handlers||{},r.invalid=n.invalid,r.unknown=n.unknown,r}const yf=/["&'<>`]/g,xf=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,bf=/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,Tf=/[|\\{}()[\]^$+*?.]/g,Di=new WeakMap;function wf(e,t){if(e=e.replace(t.subset?vf(t.subset):yf,r),t.subset||t.escapeOnly)return e;return e.replace(xf,n).replace(bf,r);function n(o,l,i){return t.format((o.charCodeAt(0)-55296)*1024+o.charCodeAt(1)-56320+65536,i.charCodeAt(l+2),t)}function r(o,l,i){return t.format(o.charCodeAt(0),i.charCodeAt(l+1),t)}}function vf(e){let t=Di.get(e);return t||(t=kf(e),Di.set(e,t)),t}function kf(e){let t=[],n=-1;for(;++n<e.length;)t.push(e[n].replace(Tf,"\\$&"));return RegExp("(?:"+t.join("|")+")","g")}const Bf=/[\dA-Fa-f]/;function Ef(e,t,n){let r="&#x"+e.toString(16).toUpperCase();return n&&t&&!Bf.test(String.fromCharCode(t))?r:r+";"}const Af=/\d/;function Df(e,t,n){let r="&#"+String(e);return n&&t&&!Af.test(String.fromCharCode(t))?r:r+";"}const Ff=["cent","copy","divide","gt","lt","not","para","times"],fa={}.hasOwnProperty,co={};let On;for(On in Dr)fa.call(Dr,On)&&(co[Dr[On]]=On);const Nf=/[^\dA-Za-z]/;function Of(e,t,n,r){let o=String.fromCharCode(e);if(fa.call(co,o)){let l=co[o],i="&"+l;return n&&rf.includes(l)&&!Ff.includes(l)&&(!r||t&&t!==61&&Nf.test(String.fromCharCode(t)))?i:i+";"}return""}function Rf(e,t,n){let r=Ef(e,t,n.omitOptionalSemicolons),o;if((n.useNamedReferences||n.useShortestReferences)&&(o=Of(e,t,n.omitOptionalSemicolons,n.attribute)),(n.useShortestReferences||!o)&&n.useShortestReferences){let l=Df(e,t,n.omitOptionalSemicolons);l.length<r.length&&(r=l)}return o&&(!n.useShortestReferences||o.length<r.length)?o:r}function Mt(e,t){return wf(e,Object.assign({format:Rf},t))}const Cf=/^>|^->|<!--|-->|--!>|<!-$/g,Lf=[">"],If=["<",">"];function Sf(e,t,n,r){return r.settings.bogusComments?"<?"+Mt(e.value,Object.assign({},r.settings.characterReferences,{subset:Lf}))+">":"<!--"+e.value.replace(Cf,o)+"-->";function o(l){return Mt(l,Object.assign({},r.settings.characterReferences,{subset:If}))}}function Pf(e,t,n,r){return"<!"+(r.settings.upperDoctype?"DOCTYPE":"doctype")+(r.settings.tightDoctype?"":" ")+"html>"}function zf(e){return e.join(" ").trim()}const Mf=/[ \t\n\f\r]/g;function zo(e){return typeof e=="object"?e.type==="text"?Fi(e.value):!1:Fi(e)}function Fi(e){return e.replace(Mf,"")===""}const ce=ha(1),ua=ha(-1),Gf=[];function ha(e){return t;function t(n,r,o){let l=n?n.children:Gf,i=(r||0)+e,a=l[i];if(!o)for(;a&&zo(a);)i+=e,a=l[i];return a}}const qf={}.hasOwnProperty;function pa(e){return t;function t(n,r,o){return qf.call(e,n.tagName)&&e[n.tagName](n,r,o)}}const Mo=pa({body:Xf,caption:Nr,colgroup:Nr,dd:Wf,dt:Hf,head:Nr,html:Kf,li:$f,optgroup:Zf,option:Uf,p:jf,rp:Ni,rt:Ni,tbody:Qf,td:Oi,tfoot:Yf,th:Oi,thead:Vf,tr:Jf});function Nr(e,t,n){let r=ce(n,t,!0);return!r||r.type!=="comment"&&!(r.type==="text"&&zo(r.value.charAt(0)))}function Kf(e,t,n){let r=ce(n,t);return!r||r.type!=="comment"}function Xf(e,t,n){let r=ce(n,t);return!r||r.type!=="comment"}function jf(e,t,n){let r=ce(n,t);return r?r.type==="element"&&(r.tagName==="address"||r.tagName==="article"||r.tagName==="aside"||r.tagName==="blockquote"||r.tagName==="details"||r.tagName==="div"||r.tagName==="dl"||r.tagName==="fieldset"||r.tagName==="figcaption"||r.tagName==="figure"||r.tagName==="footer"||r.tagName==="form"||r.tagName==="h1"||r.tagName==="h2"||r.tagName==="h3"||r.tagName==="h4"||r.tagName==="h5"||r.tagName==="h6"||r.tagName==="header"||r.tagName==="hgroup"||r.tagName==="hr"||r.tagName==="main"||r.tagName==="menu"||r.tagName==="nav"||r.tagName==="ol"||r.tagName==="p"||r.tagName==="pre"||r.tagName==="section"||r.tagName==="table"||r.tagName==="ul"):!n||!(n.type==="element"&&(n.tagName==="a"||n.tagName==="audio"||n.tagName==="del"||n.tagName==="ins"||n.tagName==="map"||n.tagName==="noscript"||n.tagName==="video"))}function $f(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&r.tagName==="li"}function Hf(e,t,n){let r=ce(n,t);return!!(r&&r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd"))}function Wf(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd")}function Ni(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&(r.tagName==="rp"||r.tagName==="rt")}function Zf(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&r.tagName==="optgroup"}function Uf(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&(r.tagName==="option"||r.tagName==="optgroup")}function Vf(e,t,n){let r=ce(n,t);return!!(r&&r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot"))}function Qf(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot")}function Yf(e,t,n){return!ce(n,t)}function Jf(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&r.tagName==="tr"}function Oi(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&(r.tagName==="td"||r.tagName==="th")}const _f=pa({body:nu,colgroup:ru,head:tu,html:eu,tbody:ou});function eu(e){let t=ce(e,-1);return!t||t.type!=="comment"}function tu(e){let t=new Set;for(let r of e.children)if(r.type==="element"&&(r.tagName==="base"||r.tagName==="title")){if(t.has(r.tagName))return!1;t.add(r.tagName)}let n=e.children[0];return!n||n.type==="element"}function nu(e){let t=ce(e,-1,!0);return!t||t.type!=="comment"&&!(t.type==="text"&&zo(t.value.charAt(0)))&&!(t.type==="element"&&(t.tagName==="meta"||t.tagName==="link"||t.tagName==="script"||t.tagName==="style"||t.tagName==="template"))}function ru(e,t,n){let r=ua(n,t),o=ce(e,-1,!0);return n&&r&&r.type==="element"&&r.tagName==="colgroup"&&Mo(r,n.children.indexOf(r),n)?!1:!!(o&&o.type==="element"&&o.tagName==="col")}function ou(e,t,n){let r=ua(n,t),o=ce(e,-1);return n&&r&&r.type==="element"&&(r.tagName==="thead"||r.tagName==="tbody")&&Mo(r,n.children.indexOf(r),n)?!1:!!(o&&o.type==="element"&&o.tagName==="tr")}const Rn={name:[[`	
\f\r &/=>`.split(""),`	
\f\r "&'/=>\``.split("")],[`\0	
\f\r "&'/<=>`.split(""),`\0	
\f\r "&'/<=>\``.split("")]],unquoted:[[`	
\f\r &>`.split(""),`\0	
\f\r "&'<=>\``.split("")],[`\0	
\f\r "&'<=>\``.split(""),`\0	
\f\r "&'<=>\``.split("")]],single:[["&'".split(""),"\"&'`".split("")],["\0&'".split(""),"\0\"&'`".split("")]],double:[['"&'.split(""),"\"&'`".split("")],['\0"&'.split(""),"\0\"&'`".split("")]]};function iu(e,t,n,r){let o=r.schema,l=o.space==="svg"?!1:r.settings.omitOptionalTags,i=o.space==="svg"?r.settings.closeEmptyElements:r.settings.voids.includes(e.tagName.toLowerCase()),a=[],s;o.space==="html"&&e.tagName==="svg"&&(r.schema=da);let c=lu(r,e.properties),d=r.all(o.space==="html"&&e.tagName==="template"?e.content:e);return r.schema=o,d&&(i=!1),(c||!l||!_f(e,t,n))&&(a.push("<",e.tagName,c?" "+c:""),i&&(o.space==="svg"||r.settings.closeSelfClosing)&&(s=c.charAt(c.length-1),(!r.settings.tightSelfClosing||s==="/"||s&&s!=='"'&&s!=="'")&&a.push(" "),a.push("/")),a.push(">")),a.push(d),!i&&(!l||!Mo(e,t,n))&&a.push("</"+e.tagName+">"),a.join("")}function lu(e,t){let n=[],r=-1,o;if(t){for(o in t)if(t[o]!==null&&t[o]!==void 0){let l=au(e,o,t[o]);l&&n.push(l)}}for(;++r<n.length;){let l=e.settings.tightAttributes?n[r].charAt(n[r].length-1):void 0;r!==n.length-1&&l!=='"'&&l!=="'"&&(n[r]+=" ")}return n.join("")}function au(e,t,n){let r=uf(e.schema,t),o=e.settings.allowParseErrors&&e.schema.space==="html"?0:1,l=e.settings.allowDangerousCharacters?0:1,i=e.quote,a;if(r.overloadedBoolean&&(n===r.attribute||n==="")?n=!0:(r.boolean||r.overloadedBoolean)&&(typeof n!="string"||n===r.attribute||n==="")&&(n=!!n),n==null||n===!1||typeof n=="number"&&Number.isNaN(n))return"";let s=Mt(r.attribute,Object.assign({},e.settings.characterReferences,{subset:Rn.name[o][l]}));return n===!0||(n=Array.isArray(n)?(r.commaSeparated?of:zf)(n,{padLeft:!e.settings.tightCommaSeparatedLists}):String(n),e.settings.collapseEmptyAttributes&&!n)?s:(e.settings.preferUnquoted&&(a=Mt(n,Object.assign({},e.settings.characterReferences,{attribute:!0,subset:Rn.unquoted[o][l]}))),a!==n&&(e.settings.quoteSmart&&er(n,i)>er(n,e.alternative)&&(i=e.alternative),a=i+Mt(n,Object.assign({},e.settings.characterReferences,{subset:(i==="'"?Rn.single:Rn.double)[o][l],attribute:!0}))+i),s+(a&&"="+a))}const su=["<","&"];function ga(e,t,n,r){return n&&n.type==="element"&&(n.tagName==="script"||n.tagName==="style")?e.value:Mt(e.value,Object.assign({},r.settings.characterReferences,{subset:su}))}function cu(e,t,n,r){return r.settings.allowDangerousHtml?e.value:ga(e,t,n,r)}function du(e,t,n,r){return r.all(e)}const fu=mf("type",{invalid:uu,unknown:hu,handlers:{comment:Sf,doctype:Pf,element:iu,raw:cu,root:du,text:ga}});function uu(e){throw Error("Expected node, not `"+e+"`")}function hu(e){throw Error("Cannot compile unknown node `"+e.type+"`")}const pu={},gu={},mu=[];function yu(e,t){let n=t||pu,r=n.quote||'"',o=r==='"'?"'":'"';if(r!=='"'&&r!=="'")throw Error("Invalid quote `"+r+"`, expected `'` or `\"`");return{one:xu,all:bu,settings:{omitOptionalTags:n.omitOptionalTags||!1,allowParseErrors:n.allowParseErrors||!1,allowDangerousCharacters:n.allowDangerousCharacters||!1,quoteSmart:n.quoteSmart||!1,preferUnquoted:n.preferUnquoted||!1,tightAttributes:n.tightAttributes||!1,upperDoctype:n.upperDoctype||!1,tightDoctype:n.tightDoctype||!1,bogusComments:n.bogusComments||!1,tightCommaSeparatedLists:n.tightCommaSeparatedLists||!1,tightSelfClosing:n.tightSelfClosing||!1,collapseEmptyAttributes:n.collapseEmptyAttributes||!1,allowDangerousHtml:n.allowDangerousHtml||!1,voids:n.voids||lf,characterReferences:n.characterReferences||gu,closeSelfClosing:n.closeSelfClosing||!1,closeEmptyElements:n.closeEmptyElements||!1},schema:n.space==="svg"?da:gf,quote:r,alternative:o}.one(Array.isArray(e)?{type:"root",children:e}:e,void 0,void 0)}function xu(e,t,n){return fu(e,t,n,this)}function bu(e){let t=[],n=e&&e.children||mu,r=-1;for(;++r<n.length;)t[r]=this.one(n[r],r,e);return t.join("")}function Tu(e){let t=this,n={...t.data("settings"),...e};t.compiler=r;function r(o){return yu(o,n)}}const Ri={AElig:"Æ",AMP:"&",Aacute:"Á",Abreve:"Ă",Acirc:"Â",Acy:"А",Afr:"𝔄",Agrave:"À",Alpha:"Α",Amacr:"Ā",And:"⩓",Aogon:"Ą",Aopf:"𝔸",ApplyFunction:"⁡",Aring:"Å",Ascr:"𝒜",Assign:"≔",Atilde:"Ã",Auml:"Ä",Backslash:"∖",Barv:"⫧",Barwed:"⌆",Bcy:"Б",Because:"∵",Bernoullis:"ℬ",Beta:"Β",Bfr:"𝔅",Bopf:"𝔹",Breve:"˘",Bscr:"ℬ",Bumpeq:"≎",CHcy:"Ч",COPY:"©",Cacute:"Ć",Cap:"⋒",CapitalDifferentialD:"ⅅ",Cayleys:"ℭ",Ccaron:"Č",Ccedil:"Ç",Ccirc:"Ĉ",Cconint:"∰",Cdot:"Ċ",Cedilla:"¸",CenterDot:"·",Cfr:"ℭ",Chi:"Χ",CircleDot:"⊙",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",Colon:"∷",Colone:"⩴",Congruent:"≡",Conint:"∯",ContourIntegral:"∮",Copf:"ℂ",Coproduct:"∐",CounterClockwiseContourIntegral:"∳",Cross:"⨯",Cscr:"𝒞",Cup:"⋓",CupCap:"≍",DD:"ⅅ",DDotrahd:"⤑",DJcy:"Ђ",DScy:"Ѕ",DZcy:"Џ",Dagger:"‡",Darr:"↡",Dashv:"⫤",Dcaron:"Ď",Dcy:"Д",Del:"∇",Delta:"Δ",Dfr:"𝔇",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",Diamond:"⋄",DifferentialD:"ⅆ",Dopf:"𝔻",Dot:"¨",DotDot:"⃜",DotEqual:"≐",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",DownArrow:"↓",DownArrowBar:"⤓",DownArrowUpArrow:"⇵",DownBreve:"̑",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVector:"↽",DownLeftVectorBar:"⥖",DownRightTeeVector:"⥟",DownRightVector:"⇁",DownRightVectorBar:"⥗",DownTee:"⊤",DownTeeArrow:"↧",Downarrow:"⇓",Dscr:"𝒟",Dstrok:"Đ",ENG:"Ŋ",ETH:"Ð",Eacute:"É",Ecaron:"Ě",Ecirc:"Ê",Ecy:"Э",Edot:"Ė",Efr:"𝔈",Egrave:"È",Element:"∈",Emacr:"Ē",EmptySmallSquare:"◻",EmptyVerySmallSquare:"▫",Eogon:"Ę",Eopf:"𝔼",Epsilon:"Ε",Equal:"⩵",EqualTilde:"≂",Equilibrium:"⇌",Escr:"ℰ",Esim:"⩳",Eta:"Η",Euml:"Ë",Exists:"∃",ExponentialE:"ⅇ",Fcy:"Ф",Ffr:"𝔉",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",Fopf:"𝔽",ForAll:"∀",Fouriertrf:"ℱ",Fscr:"ℱ",GJcy:"Ѓ",GT:">",Gamma:"Γ",Gammad:"Ϝ",Gbreve:"Ğ",Gcedil:"Ģ",Gcirc:"Ĝ",Gcy:"Г",Gdot:"Ġ",Gfr:"𝔊",Gg:"⋙",Gopf:"𝔾",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",Gscr:"𝒢",Gt:"≫",HARDcy:"Ъ",Hacek:"ˇ",Hat:"^",Hcirc:"Ĥ",Hfr:"ℌ",HilbertSpace:"ℋ",Hopf:"ℍ",HorizontalLine:"─",Hscr:"ℋ",Hstrok:"Ħ",HumpDownHump:"≎",HumpEqual:"≏",IEcy:"Е",IJlig:"Ĳ",IOcy:"Ё",Iacute:"Í",Icirc:"Î",Icy:"И",Idot:"İ",Ifr:"ℑ",Igrave:"Ì",Im:"ℑ",Imacr:"Ī",ImaginaryI:"ⅈ",Implies:"⇒",Int:"∬",Integral:"∫",Intersection:"⋂",InvisibleComma:"⁣",InvisibleTimes:"⁢",Iogon:"Į",Iopf:"𝕀",Iota:"Ι",Iscr:"ℐ",Itilde:"Ĩ",Iukcy:"І",Iuml:"Ï",Jcirc:"Ĵ",Jcy:"Й",Jfr:"𝔍",Jopf:"𝕁",Jscr:"𝒥",Jsercy:"Ј",Jukcy:"Є",KHcy:"Х",KJcy:"Ќ",Kappa:"Κ",Kcedil:"Ķ",Kcy:"К",Kfr:"𝔎",Kopf:"𝕂",Kscr:"𝒦",LJcy:"Љ",LT:"<",Lacute:"Ĺ",Lambda:"Λ",Lang:"⟪",Laplacetrf:"ℒ",Larr:"↞",Lcaron:"Ľ",Lcedil:"Ļ",Lcy:"Л",LeftAngleBracket:"⟨",LeftArrow:"←",LeftArrowBar:"⇤",LeftArrowRightArrow:"⇆",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVector:"⇃",LeftDownVectorBar:"⥙",LeftFloor:"⌊",LeftRightArrow:"↔",LeftRightVector:"⥎",LeftTee:"⊣",LeftTeeArrow:"↤",LeftTeeVector:"⥚",LeftTriangle:"⊲",LeftTriangleBar:"⧏",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVector:"↿",LeftUpVectorBar:"⥘",LeftVector:"↼",LeftVectorBar:"⥒",Leftarrow:"⇐",Leftrightarrow:"⇔",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",LessLess:"⪡",LessSlantEqual:"⩽",LessTilde:"≲",Lfr:"𝔏",Ll:"⋘",Lleftarrow:"⇚",Lmidot:"Ŀ",LongLeftArrow:"⟵",LongLeftRightArrow:"⟷",LongRightArrow:"⟶",Longleftarrow:"⟸",Longleftrightarrow:"⟺",Longrightarrow:"⟹",Lopf:"𝕃",LowerLeftArrow:"↙",LowerRightArrow:"↘",Lscr:"ℒ",Lsh:"↰",Lstrok:"Ł",Lt:"≪",Map:"⤅",Mcy:"М",MediumSpace:" ",Mellintrf:"ℳ",Mfr:"𝔐",MinusPlus:"∓",Mopf:"𝕄",Mscr:"ℳ",Mu:"Μ",NJcy:"Њ",Nacute:"Ń",Ncaron:"Ň",Ncedil:"Ņ",Ncy:"Н",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:`
`,Nfr:"𝔑",NoBreak:"⁠",NonBreakingSpace:" ",Nopf:"ℕ",Not:"⫬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",NotLeftTriangle:"⋪",NotLeftTriangleBar:"⧏̸",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangle:"⋫",NotRightTriangleBar:"⧐̸",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",Nscr:"𝒩",Ntilde:"Ñ",Nu:"Ν",OElig:"Œ",Oacute:"Ó",Ocirc:"Ô",Ocy:"О",Odblac:"Ő",Ofr:"𝔒",Ograve:"Ò",Omacr:"Ō",Omega:"Ω",Omicron:"Ο",Oopf:"𝕆",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",Or:"⩔",Oscr:"𝒪",Oslash:"Ø",Otilde:"Õ",Otimes:"⨷",Ouml:"Ö",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",PartialD:"∂",Pcy:"П",Pfr:"𝔓",Phi:"Φ",Pi:"Π",PlusMinus:"±",Poincareplane:"ℌ",Popf:"ℙ",Pr:"⪻",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",Prime:"″",Product:"∏",Proportion:"∷",Proportional:"∝",Pscr:"𝒫",Psi:"Ψ",QUOT:'"',Qfr:"𝔔",Qopf:"ℚ",Qscr:"𝒬",RBarr:"⤐",REG:"®",Racute:"Ŕ",Rang:"⟫",Rarr:"↠",Rarrtl:"⤖",Rcaron:"Ř",Rcedil:"Ŗ",Rcy:"Р",Re:"ℜ",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",Rfr:"ℜ",Rho:"Ρ",RightAngleBracket:"⟩",RightArrow:"→",RightArrowBar:"⇥",RightArrowLeftArrow:"⇄",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVector:"⇂",RightDownVectorBar:"⥕",RightFloor:"⌋",RightTee:"⊢",RightTeeArrow:"↦",RightTeeVector:"⥛",RightTriangle:"⊳",RightTriangleBar:"⧐",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVector:"↾",RightUpVectorBar:"⥔",RightVector:"⇀",RightVectorBar:"⥓",Rightarrow:"⇒",Ropf:"ℝ",RoundImplies:"⥰",Rrightarrow:"⇛",Rscr:"ℛ",Rsh:"↱",RuleDelayed:"⧴",SHCHcy:"Щ",SHcy:"Ш",SOFTcy:"Ь",Sacute:"Ś",Sc:"⪼",Scaron:"Š",Scedil:"Ş",Scirc:"Ŝ",Scy:"С",Sfr:"𝔖",ShortDownArrow:"↓",ShortLeftArrow:"←",ShortRightArrow:"→",ShortUpArrow:"↑",Sigma:"Σ",SmallCircle:"∘",Sopf:"𝕊",Sqrt:"√",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",Sscr:"𝒮",Star:"⋆",Sub:"⋐",Subset:"⋐",SubsetEqual:"⊆",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",SuchThat:"∋",Sum:"∑",Sup:"⋑",Superset:"⊃",SupersetEqual:"⊇",Supset:"⋑",THORN:"Þ",TRADE:"™",TSHcy:"Ћ",TScy:"Ц",Tab:"	",Tau:"Τ",Tcaron:"Ť",Tcedil:"Ţ",Tcy:"Т",Tfr:"𝔗",Therefore:"∴",Theta:"Θ",ThickSpace:"  ",ThinSpace:" ",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",Topf:"𝕋",TripleDot:"⃛",Tscr:"𝒯",Tstrok:"Ŧ",Uacute:"Ú",Uarr:"↟",Uarrocir:"⥉",Ubrcy:"Ў",Ubreve:"Ŭ",Ucirc:"Û",Ucy:"У",Udblac:"Ű",Ufr:"𝔘",Ugrave:"Ù",Umacr:"Ū",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",Uogon:"Ų",Uopf:"𝕌",UpArrow:"↑",UpArrowBar:"⤒",UpArrowDownArrow:"⇅",UpDownArrow:"↕",UpEquilibrium:"⥮",UpTee:"⊥",UpTeeArrow:"↥",Uparrow:"⇑",Updownarrow:"⇕",UpperLeftArrow:"↖",UpperRightArrow:"↗",Upsi:"ϒ",Upsilon:"Υ",Uring:"Ů",Uscr:"𝒰",Utilde:"Ũ",Uuml:"Ü",VDash:"⊫",Vbar:"⫫",Vcy:"В",Vdash:"⊩",Vdashl:"⫦",Vee:"⋁",Verbar:"‖",Vert:"‖",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",Vfr:"𝔙",Vopf:"𝕍",Vscr:"𝒱",Vvdash:"⊪",Wcirc:"Ŵ",Wedge:"⋀",Wfr:"𝔚",Wopf:"𝕎",Wscr:"𝒲",Xfr:"𝔛",Xi:"Ξ",Xopf:"𝕏",Xscr:"𝒳",YAcy:"Я",YIcy:"Ї",YUcy:"Ю",Yacute:"Ý",Ycirc:"Ŷ",Ycy:"Ы",Yfr:"𝔜",Yopf:"𝕐",Yscr:"𝒴",Yuml:"Ÿ",ZHcy:"Ж",Zacute:"Ź",Zcaron:"Ž",Zcy:"З",Zdot:"Ż",ZeroWidthSpace:"​",Zeta:"Ζ",Zfr:"ℨ",Zopf:"ℤ",Zscr:"𝒵",aacute:"á",abreve:"ă",ac:"∾",acE:"∾̳",acd:"∿",acirc:"â",acute:"´",acy:"а",aelig:"æ",af:"⁡",afr:"𝔞",agrave:"à",alefsym:"ℵ",aleph:"ℵ",alpha:"α",amacr:"ā",amalg:"⨿",amp:"&",and:"∧",andand:"⩕",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsd:"∡",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",aogon:"ą",aopf:"𝕒",ap:"≈",apE:"⩰",apacir:"⩯",ape:"≊",apid:"≋",apos:"'",approx:"≈",approxeq:"≊",aring:"å",ascr:"𝒶",ast:"*",asymp:"≈",asympeq:"≍",atilde:"ã",auml:"ä",awconint:"∳",awint:"⨑",bNot:"⫭",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",barvee:"⊽",barwed:"⌅",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",bcy:"б",bdquo:"„",becaus:"∵",because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",beta:"β",beth:"ℶ",between:"≬",bfr:"𝔟",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bnot:"⌐",bopf:"𝕓",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxDL:"╗",boxDR:"╔",boxDl:"╖",boxDr:"╓",boxH:"═",boxHD:"╦",boxHU:"╩",boxHd:"╤",boxHu:"╧",boxUL:"╝",boxUR:"╚",boxUl:"╜",boxUr:"╙",boxV:"║",boxVH:"╬",boxVL:"╣",boxVR:"╠",boxVh:"╫",boxVl:"╢",boxVr:"╟",boxbox:"⧉",boxdL:"╕",boxdR:"╒",boxdl:"┐",boxdr:"┌",boxh:"─",boxhD:"╥",boxhU:"╨",boxhd:"┬",boxhu:"┴",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxuL:"╛",boxuR:"╘",boxul:"┘",boxur:"└",boxv:"│",boxvH:"╪",boxvL:"╡",boxvR:"╞",boxvh:"┼",boxvl:"┤",boxvr:"├",bprime:"‵",breve:"˘",brvbar:"¦",bscr:"𝒷",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsol:"\\",bsolb:"⧅",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpE:"⪮",bumpe:"≏",bumpeq:"≏",cacute:"ć",cap:"∩",capand:"⩄",capbrcup:"⩉",capcap:"⩋",capcup:"⩇",capdot:"⩀",caps:"∩︀",caret:"⁁",caron:"ˇ",ccaps:"⩍",ccaron:"č",ccedil:"ç",ccirc:"ĉ",ccups:"⩌",ccupssm:"⩐",cdot:"ċ",cedil:"¸",cemptyv:"⦲",cent:"¢",centerdot:"·",cfr:"𝔠",chcy:"ч",check:"✓",checkmark:"✓",chi:"χ",cir:"○",cirE:"⧃",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledR:"®",circledS:"Ⓢ",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",cire:"≗",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",clubs:"♣",clubsuit:"♣",colon:":",colone:"≔",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",conint:"∮",copf:"𝕔",coprod:"∐",copy:"©",copysr:"℗",crarr:"↵",cross:"✗",cscr:"𝒸",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",cup:"∪",cupbrcap:"⩈",cupcap:"⩆",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",dArr:"⇓",dHar:"⥥",dagger:"†",daleth:"ℸ",darr:"↓",dash:"‐",dashv:"⊣",dbkarow:"⤏",dblac:"˝",dcaron:"ď",dcy:"д",dd:"ⅆ",ddagger:"‡",ddarr:"⇊",ddotseq:"⩷",deg:"°",delta:"δ",demptyv:"⦱",dfisht:"⥿",dfr:"𝔡",dharl:"⇃",dharr:"⇂",diam:"⋄",diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",digamma:"ϝ",disin:"⋲",div:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",djcy:"ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",dopf:"𝕕",dot:"˙",doteq:"≐",doteqdot:"≑",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",downarrow:"↓",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",dscr:"𝒹",dscy:"ѕ",dsol:"⧶",dstrok:"đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",dzcy:"џ",dzigrarr:"⟿",eDDot:"⩷",eDot:"≑",eacute:"é",easter:"⩮",ecaron:"ě",ecir:"≖",ecirc:"ê",ecolon:"≕",ecy:"э",edot:"ė",ee:"ⅇ",efDot:"≒",efr:"𝔢",eg:"⪚",egrave:"è",egs:"⪖",egsdot:"⪘",el:"⪙",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",emacr:"ē",empty:"∅",emptyset:"∅",emptyv:"∅",emsp13:" ",emsp14:" ",emsp:" ",eng:"ŋ",ensp:" ",eogon:"ę",eopf:"𝕖",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",epsilon:"ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",equals:"=",equest:"≟",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erDot:"≓",erarr:"⥱",escr:"ℯ",esdot:"≐",esim:"≂",eta:"η",eth:"ð",euml:"ë",euro:"€",excl:"!",exist:"∃",expectation:"ℰ",exponentiale:"ⅇ",fallingdotseq:"≒",fcy:"ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",ffr:"𝔣",filig:"ﬁ",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",fopf:"𝕗",forall:"∀",fork:"⋔",forkv:"⫙",fpartint:"⨍",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",fscr:"𝒻",gE:"≧",gEl:"⪌",gacute:"ǵ",gamma:"γ",gammad:"ϝ",gap:"⪆",gbreve:"ğ",gcirc:"ĝ",gcy:"г",gdot:"ġ",ge:"≥",gel:"⋛",geq:"≥",geqq:"≧",geqslant:"⩾",ges:"⩾",gescc:"⪩",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",gfr:"𝔤",gg:"≫",ggg:"⋙",gimel:"ℷ",gjcy:"ѓ",gl:"≷",glE:"⪒",gla:"⪥",glj:"⪤",gnE:"≩",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gneq:"⪈",gneqq:"≩",gnsim:"⋧",gopf:"𝕘",grave:"`",gscr:"ℊ",gsim:"≳",gsime:"⪎",gsiml:"⪐",gt:">",gtcc:"⪧",gtcir:"⩺",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",hArr:"⇔",hairsp:" ",half:"½",hamilt:"ℋ",hardcy:"ъ",harr:"↔",harrcir:"⥈",harrw:"↭",hbar:"ℏ",hcirc:"ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",hfr:"𝔥",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",hopf:"𝕙",horbar:"―",hscr:"𝒽",hslash:"ℏ",hstrok:"ħ",hybull:"⁃",hyphen:"‐",iacute:"í",ic:"⁣",icirc:"î",icy:"и",iecy:"е",iexcl:"¡",iff:"⇔",ifr:"𝔦",igrave:"ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",ijlig:"ĳ",imacr:"ī",image:"ℑ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",imof:"⊷",imped:"Ƶ",in:"∈",incare:"℅",infin:"∞",infintie:"⧝",inodot:"ı",int:"∫",intcal:"⊺",integers:"ℤ",intercal:"⊺",intlarhk:"⨗",intprod:"⨼",iocy:"ё",iogon:"į",iopf:"𝕚",iota:"ι",iprod:"⨼",iquest:"¿",iscr:"𝒾",isin:"∈",isinE:"⋹",isindot:"⋵",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",itilde:"ĩ",iukcy:"і",iuml:"ï",jcirc:"ĵ",jcy:"й",jfr:"𝔧",jmath:"ȷ",jopf:"𝕛",jscr:"𝒿",jsercy:"ј",jukcy:"є",kappa:"κ",kappav:"ϰ",kcedil:"ķ",kcy:"к",kfr:"𝔨",kgreen:"ĸ",khcy:"х",kjcy:"ќ",kopf:"𝕜",kscr:"𝓀",lAarr:"⇚",lArr:"⇐",lAtail:"⤛",lBarr:"⤎",lE:"≦",lEg:"⪋",lHar:"⥢",lacute:"ĺ",laemptyv:"⦴",lagran:"ℒ",lambda:"λ",lang:"⟨",langd:"⦑",langle:"⟨",lap:"⪅",laquo:"«",larr:"←",larrb:"⇤",larrbfs:"⤟",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",lat:"⪫",latail:"⤙",late:"⪭",lates:"⪭︀",lbarr:"⤌",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",lcaron:"ľ",lcedil:"ļ",lceil:"⌈",lcub:"{",lcy:"л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",leftarrow:"←",leftarrowtail:"↢",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",leftrightarrow:"↔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",leftthreetimes:"⋋",leg:"⋚",leq:"≤",leqq:"≦",leqslant:"⩽",les:"⩽",lescc:"⪨",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",lessgtr:"≶",lesssim:"≲",lfisht:"⥼",lfloor:"⌊",lfr:"𝔩",lg:"≶",lgE:"⪑",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",ljcy:"љ",ll:"≪",llarr:"⇇",llcorner:"⌞",llhard:"⥫",lltri:"◺",lmidot:"ŀ",lmoust:"⎰",lmoustache:"⎰",lnE:"≨",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",longleftarrow:"⟵",longleftrightarrow:"⟷",longmapsto:"⟼",longrightarrow:"⟶",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",lopf:"𝕝",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"𝓁",lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",lstrok:"ł",lt:"<",ltcc:"⪦",ltcir:"⩹",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltrPar:"⦖",ltri:"◃",ltrie:"⊴",ltrif:"◂",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",mDDot:"∺",macr:"¯",male:"♂",malt:"✠",maltese:"✠",map:"↦",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",mcy:"м",mdash:"—",measuredangle:"∡",mfr:"𝔪",mho:"℧",micro:"µ",mid:"∣",midast:"*",midcir:"⫰",middot:"·",minus:"−",minusb:"⊟",minusd:"∸",minusdu:"⨪",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",mopf:"𝕞",mp:"∓",mscr:"𝓂",mstpos:"∾",mu:"μ",multimap:"⊸",mumap:"⊸",nGg:"⋙̸",nGt:"≫⃒",nGtv:"≫̸",nLeftarrow:"⇍",nLeftrightarrow:"⇎",nLl:"⋘̸",nLt:"≪⃒",nLtv:"≪̸",nRightarrow:"⇏",nVDash:"⊯",nVdash:"⊮",nabla:"∇",nacute:"ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natur:"♮",natural:"♮",naturals:"ℕ",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",ncaron:"ň",ncedil:"ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",ncy:"н",ndash:"–",ne:"≠",neArr:"⇗",nearhk:"⤤",nearr:"↗",nearrow:"↗",nedot:"≐̸",nequiv:"≢",nesear:"⤨",nesim:"≂̸",nexist:"∄",nexists:"∄",nfr:"𝔫",ngE:"≧̸",nge:"≱",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",ngsim:"≵",ngt:"≯",ngtr:"≯",nhArr:"⇎",nharr:"↮",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",njcy:"њ",nlArr:"⇍",nlE:"≦̸",nlarr:"↚",nldr:"‥",nle:"≰",nleftarrow:"↚",nleftrightarrow:"↮",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nlsim:"≴",nlt:"≮",nltri:"⋪",nltrie:"⋬",nmid:"∤",nopf:"𝕟",not:"¬",notin:"∉",notinE:"⋹̸",notindot:"⋵̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",npar:"∦",nparallel:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",npre:"⪯̸",nprec:"⊀",npreceq:"⪯̸",nrArr:"⇏",nrarr:"↛",nrarrc:"⤳̸",nrarrw:"↝̸",nrightarrow:"↛",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",nscr:"𝓃",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsubE:"⫅̸",nsube:"⊈",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupE:"⫆̸",nsupe:"⊉",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",ntilde:"ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",nu:"ν",num:"#",numero:"№",numsp:" ",nvDash:"⊭",nvHarr:"⤄",nvap:"≍⃒",nvdash:"⊬",nvge:"≥⃒",nvgt:">⃒",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwArr:"⇖",nwarhk:"⤣",nwarr:"↖",nwarrow:"↖",nwnear:"⤧",oS:"Ⓢ",oacute:"ó",oast:"⊛",ocir:"⊚",ocirc:"ô",ocy:"о",odash:"⊝",odblac:"ő",odiv:"⨸",odot:"⊙",odsold:"⦼",oelig:"œ",ofcir:"⦿",ofr:"𝔬",ogon:"˛",ograve:"ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",omacr:"ō",omega:"ω",omicron:"ο",omid:"⦶",ominus:"⊖",oopf:"𝕠",opar:"⦷",operp:"⦹",oplus:"⊕",or:"∨",orarr:"↻",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oscr:"ℴ",oslash:"ø",osol:"⊘",otilde:"õ",otimes:"⊗",otimesas:"⨶",ouml:"ö",ovbar:"⌽",par:"∥",para:"¶",parallel:"∥",parsim:"⫳",parsl:"⫽",part:"∂",pcy:"п",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",pfr:"𝔭",phi:"φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",pi:"π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plus:"+",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plusdo:"∔",plusdu:"⨥",pluse:"⩲",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",pointint:"⨕",popf:"𝕡",pound:"£",pr:"≺",prE:"⪳",prap:"⪷",prcue:"≼",pre:"⪯",prec:"≺",precapprox:"⪷",preccurlyeq:"≼",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",precsim:"≾",prime:"′",primes:"ℙ",prnE:"⪵",prnap:"⪹",prnsim:"⋨",prod:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",propto:"∝",prsim:"≾",prurel:"⊰",pscr:"𝓅",psi:"ψ",puncsp:" ",qfr:"𝔮",qint:"⨌",qopf:"𝕢",qprime:"⁗",qscr:"𝓆",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",quot:'"',rAarr:"⇛",rArr:"⇒",rAtail:"⤜",rBarr:"⤏",rHar:"⥤",race:"∽̱",racute:"ŕ",radic:"√",raemptyv:"⦳",rang:"⟩",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"»",rarr:"→",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",rarrtl:"↣",rarrw:"↝",ratail:"⤚",ratio:"∶",rationals:"ℚ",rbarr:"⤍",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",rcaron:"ř",rcedil:"ŗ",rceil:"⌉",rcub:"}",rcy:"р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",rect:"▭",reg:"®",rfisht:"⥽",rfloor:"⌋",rfr:"𝔯",rhard:"⇁",rharu:"⇀",rharul:"⥬",rho:"ρ",rhov:"ϱ",rightarrow:"→",rightarrowtail:"↣",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",rightthreetimes:"⋌",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoust:"⎱",rmoustache:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",ropf:"𝕣",roplus:"⨮",rotimes:"⨵",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",rsaquo:"›",rscr:"𝓇",rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",ruluhar:"⥨",rx:"℞",sacute:"ś",sbquo:"‚",sc:"≻",scE:"⪴",scap:"⪸",scaron:"š",sccue:"≽",sce:"⪰",scedil:"ş",scirc:"ŝ",scnE:"⪶",scnap:"⪺",scnsim:"⋩",scpolint:"⨓",scsim:"≿",scy:"с",sdot:"⋅",sdotb:"⊡",sdote:"⩦",seArr:"⇘",searhk:"⤥",searr:"↘",searrow:"↘",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",sfr:"𝔰",sfrown:"⌢",sharp:"♯",shchcy:"щ",shcy:"ш",shortmid:"∣",shortparallel:"∥",shy:"­",sigma:"σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",softcy:"ь",sol:"/",solb:"⧄",solbar:"⌿",sopf:"𝕤",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",squ:"□",square:"□",squarf:"▪",squf:"▪",srarr:"→",sscr:"𝓈",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",star:"☆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",sub:"⊂",subE:"⫅",subdot:"⪽",sube:"⊆",subedot:"⫃",submult:"⫁",subnE:"⫋",subne:"⊊",subplus:"⪿",subrarr:"⥹",subset:"⊂",subseteq:"⊆",subseteqq:"⫅",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succ:"≻",succapprox:"⪸",succcurlyeq:"≽",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",sum:"∑",sung:"♪",sup1:"¹",sup2:"²",sup3:"³",sup:"⊃",supE:"⫆",supdot:"⪾",supdsub:"⫘",supe:"⊇",supedot:"⫄",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supnE:"⫌",supne:"⊋",supplus:"⫀",supset:"⊃",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swArr:"⇙",swarhk:"⤦",swarr:"↙",swarrow:"↙",swnwar:"⤪",szlig:"ß",target:"⌖",tau:"τ",tbrk:"⎴",tcaron:"ť",tcedil:"ţ",tcy:"т",tdot:"⃛",telrec:"⌕",tfr:"𝔱",there4:"∴",therefore:"∴",theta:"θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",thinsp:" ",thkap:"≈",thksim:"∼",thorn:"þ",tilde:"˜",times:"×",timesb:"⊠",timesbar:"⨱",timesd:"⨰",tint:"∭",toea:"⤨",top:"⊤",topbot:"⌶",topcir:"⫱",topf:"𝕥",topfork:"⫚",tosa:"⤩",tprime:"‴",trade:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",tscr:"𝓉",tscy:"ц",tshcy:"ћ",tstrok:"ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",uArr:"⇑",uHar:"⥣",uacute:"ú",uarr:"↑",ubrcy:"ў",ubreve:"ŭ",ucirc:"û",ucy:"у",udarr:"⇅",udblac:"ű",udhar:"⥮",ufisht:"⥾",ufr:"𝔲",ugrave:"ù",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",umacr:"ū",uml:"¨",uogon:"ų",uopf:"𝕦",uparrow:"↑",updownarrow:"↕",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",upsi:"υ",upsih:"ϒ",upsilon:"υ",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",uring:"ů",urtri:"◹",uscr:"𝓊",utdot:"⋰",utilde:"ũ",utri:"▵",utrif:"▴",uuarr:"⇈",uuml:"ü",uwangle:"⦧",vArr:"⇕",vBar:"⫨",vBarv:"⫩",vDash:"⊨",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",varr:"↕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",vcy:"в",vdash:"⊢",vee:"∨",veebar:"⊻",veeeq:"≚",vellip:"⋮",verbar:"|",vert:"|",vfr:"𝔳",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",vopf:"𝕧",vprop:"∝",vrtri:"⊳",vscr:"𝓋",vsubnE:"⫋︀",vsubne:"⊊︀",vsupnE:"⫌︀",vsupne:"⊋︀",vzigzag:"⦚",wcirc:"ŵ",wedbar:"⩟",wedge:"∧",wedgeq:"≙",weierp:"℘",wfr:"𝔴",wopf:"𝕨",wp:"℘",wr:"≀",wreath:"≀",wscr:"𝓌",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",xfr:"𝔵",xhArr:"⟺",xharr:"⟷",xi:"ξ",xlArr:"⟸",xlarr:"⟵",xmap:"⟼",xnis:"⋻",xodot:"⨀",xopf:"𝕩",xoplus:"⨁",xotime:"⨂",xrArr:"⟹",xrarr:"⟶",xscr:"𝓍",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",yacute:"ý",yacy:"я",ycirc:"ŷ",ycy:"ы",yen:"¥",yfr:"𝔶",yicy:"ї",yopf:"𝕪",yscr:"𝓎",yucy:"ю",yuml:"ÿ",zacute:"ź",zcaron:"ž",zcy:"з",zdot:"ż",zeetrf:"ℨ",zeta:"ζ",zfr:"𝔷",zhcy:"ж",zigrarr:"⇝",zopf:"𝕫",zscr:"𝓏",zwj:"‍",zwnj:"‌"},wu={}.hasOwnProperty;function Go(e){return wu.call(Ri,e)?Ri[e]:!1}const ye=dt(/[A-Za-z]/),he=dt(/[\dA-Za-z]/),vu=dt(/[#-'*+\--9=?A-Z^-~]/);function tr(e){return e!==null&&(e<32||e===127)}const fo=dt(/\d/),ku=dt(/[\dA-Fa-f]/),Bu=dt(/[!-/:-@[-`{-~]/);function P(e){return e!==null&&e<-2}function Q(e){return e!==null&&(e<0||e===32)}function H(e){return e===-2||e===-1||e===32}const ur=dt(new RegExp("\\p{P}|\\p{S}","u")),vt=dt(/\s/);function dt(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Pe(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}function Kt(e){if(e===null||Q(e)||vt(e))return 1;if(ur(e))return 2}const Eu={};function hr(e,t){let n=t||Eu;return ma(e,typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,typeof n.includeHtml=="boolean"?n.includeHtml:!0)}function ma(e,t,n){if(Au(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Ci(e.children,t,n)}return Array.isArray(e)?Ci(e,t,n):""}function Ci(e,t,n){let r=[],o=-1;for(;++o<e.length;)r[o]=ma(e[o],t,n);return r.join("")}function Au(e){return!!(e&&typeof e=="object")}function ya(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)==65535||(n&65535)==65534||n>1114111?"�":String.fromCodePoint(n)}const Du=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Fu(e){return e.replace(Du,Nu)}function Nu(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let r=n.charCodeAt(1),o=r===120||r===88;return ya(n.slice(o?2:1),o?16:10)}return Go(n)||e}function Ae(e,t,n,r){let o=e.length,l=0,i;if(t=t<0?-t>o?0:o+t:t>o?o:t,n=n>0?n:0,r.length<1e4)i=Array.from(r),i.unshift(t,n),e.splice(...i);else for(n&&e.splice(t,n);l<r.length;)i=r.slice(l,l+1e4),i.unshift(t,0),e.splice(...i),l+=1e4,t+=1e4}function De(e,t){return e.length>0?(Ae(e,e.length,0,t),e):t}const Li={}.hasOwnProperty;function xa(e){let t={},n=-1;for(;++n<e.length;)Ou(t,e[n]);return t}function Ou(e,t){let n;for(n in t){let r=(Li.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n],l;if(o)for(l in o){Li.call(r,l)||(r[l]=[]);let i=o[l];Ru(r[l],Array.isArray(i)?i:i?[i]:[])}}}function Ru(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Ae(e,0,0,r)}function Ut(e){let t=[],n=-1,r=0,o=0;for(;++n<e.length;){let l=e.charCodeAt(n),i="";if(l===37&&he(e.charCodeAt(n+1))&&he(e.charCodeAt(n+2)))o=2;else if(l<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l))||(i=String.fromCharCode(l));else if(l>55295&&l<57344){let a=e.charCodeAt(n+1);l<56320&&a>56319&&a<57344?(i=String.fromCharCode(l,a),o=1):i="�"}else i=String.fromCharCode(l);i&&=(t.push(e.slice(r,n),encodeURIComponent(i)),r=n+o+1,""),o&&=(n+=o,0)}return t.join("")+e.slice(r)}function pr(e,t,n){let r=[],o=-1;for(;++o<e.length;){let l=e[o].resolveAll;l&&!r.includes(l)&&(t=l(t,n),r.push(l))}return t}const uo={name:"attention",resolveAll:Cu,tokenize:Lu};function Cu(e,t){let n=-1,r,o,l,i,a,s,c,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let f={...e[r][1].end},u={...e[n][1].start};Ii(f,-s),Ii(u,s),i={type:s>1?"strongSequence":"emphasisSequence",start:f,end:{...e[r][1].end}},a={type:s>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:u},l={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},o={type:s>1?"strong":"emphasis",start:{...i.start},end:{...a.end}},e[r][1].end={...i.start},e[n][1].start={...a.end},c=[],e[r][1].end.offset-e[r][1].start.offset&&(c=De(c,[["enter",e[r][1],t],["exit",e[r][1],t]])),c=De(c,[["enter",o,t],["enter",i,t],["exit",i,t],["enter",l,t]]),c=De(c,pr(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),c=De(c,[["exit",l,t],["enter",a,t],["exit",a,t],["exit",o,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,c=De(c,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Ae(e,r-1,n-r+3,c),n=r+c.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Lu(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,o=Kt(r),l;return i;function i(s){return l=s,e.enter("attentionSequence"),a(s)}function a(s){if(s===l)return e.consume(s),a;let c=e.exit("attentionSequence"),d=Kt(s),f=!d||d===2&&o||n.includes(s),u=!o||o===2&&d||n.includes(r);return c._open=!!(l===42?f:f&&(o||!u)),c._close=!!(l===42?u:u&&(d||!f)),t(s)}}function Ii(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Iu={name:"autolink",tokenize:Su};function Su(e,t,n){let r=0;return o;function o(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),l}function l(h){return ye(h)?(e.consume(h),i):h===64?n(h):c(h)}function i(h){return h===43||h===45||h===46||he(h)?(r=1,a(h)):c(h)}function a(h){return h===58?(e.consume(h),r=0,s):(h===43||h===45||h===46||he(h))&&r++<32?(e.consume(h),a):(r=0,c(h))}function s(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||tr(h)?n(h):(e.consume(h),s)}function c(h){return h===64?(e.consume(h),d):vu(h)?(e.consume(h),c):n(h)}function d(h){return he(h)?f(h):n(h)}function f(h){return h===46?(e.consume(h),r=0,d):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):u(h)}function u(h){if((h===45||he(h))&&r++<63){let p=h===45?u:f;return e.consume(h),p}return n(h)}}function Z(e,t,n,r){let o=r?r-1:1/0,l=0;return i;function i(s){return H(s)?(e.enter(n),a(s)):t(s)}function a(s){return H(s)&&l++<o?(e.consume(s),a):(e.exit(n),t(s))}}const En={partial:!0,tokenize:Pu};function Pu(e,t,n){return r;function r(l){return H(l)?Z(e,o,"linePrefix")(l):o(l)}function o(l){return l===null||P(l)?t(l):n(l)}}const ba={continuation:{tokenize:Mu},exit:Gu,name:"blockQuote",tokenize:zu};function zu(e,t,n){let r=this;return o;function o(i){if(i===62){let a=r.containerState;return a.open||=(e.enter("blockQuote",{_container:!0}),!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(i),e.exit("blockQuoteMarker"),l}return n(i)}function l(i){return H(i)?(e.enter("blockQuotePrefixWhitespace"),e.consume(i),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(i))}}function Mu(e,t,n){let r=this;return o;function o(i){return H(i)?Z(e,l,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(i):l(i)}function l(i){return e.attempt(ba,t,n)(i)}}function Gu(e){e.exit("blockQuote")}const Ta={name:"characterEscape",tokenize:qu};function qu(e,t,n){return r;function r(l){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(l),e.exit("escapeMarker"),o}function o(l){return Bu(l)?(e.enter("characterEscapeValue"),e.consume(l),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(l)}}const wa={name:"characterReference",tokenize:Ku};function Ku(e,t,n){let r=this,o=0,l,i;return a;function a(f){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),s}function s(f){return f===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(f),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),l=31,i=he,d(f))}function c(f){return f===88||f===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(f),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),l=6,i=ku,d):(e.enter("characterReferenceValue"),l=7,i=fo,d(f))}function d(f){if(f===59&&o){let u=e.exit("characterReferenceValue");return i===he&&!Go(r.sliceSerialize(u))?n(f):(e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return i(f)&&o++<l?(e.consume(f),d):n(f)}}const Si={partial:!0,tokenize:ju},Pi={concrete:!0,name:"codeFenced",tokenize:Xu};function Xu(e,t,n){let r=this,o={partial:!0,tokenize:S},l=0,i=0,a;return s;function s(k){return c(k)}function c(k){let L=r.events[r.events.length-1];return l=L&&L[1].type==="linePrefix"?L[2].sliceSerialize(L[1],!0).length:0,a=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(k)}function d(k){return k===a?(i++,e.consume(k),d):i<3?n(k):(e.exit("codeFencedFenceSequence"),H(k)?Z(e,f,"whitespace")(k):f(k))}function f(k){return k===null||P(k)?(e.exit("codeFencedFence"),r.interrupt?t(k):e.check(Si,T,C)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),u(k))}function u(k){return k===null||P(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),f(k)):H(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Z(e,h,"whitespace")(k)):k===96&&k===a?n(k):(e.consume(k),u)}function h(k){return k===null||P(k)?f(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),p(k))}function p(k){return k===null||P(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),f(k)):k===96&&k===a?n(k):(e.consume(k),p)}function T(k){return e.attempt(o,C,b)(k)}function b(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),y}function y(k){return l>0&&H(k)?Z(e,F,"linePrefix",l+1)(k):F(k)}function F(k){return k===null||P(k)?e.check(Si,T,C)(k):(e.enter("codeFlowValue"),B(k))}function B(k){return k===null||P(k)?(e.exit("codeFlowValue"),F(k)):(e.consume(k),B)}function C(k){return e.exit("codeFenced"),t(k)}function S(k,L,w){let R=0;return x;function x(X){return k.enter("lineEnding"),k.consume(X),k.exit("lineEnding"),E}function E(X){return k.enter("codeFencedFence"),H(X)?Z(k,N,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(X):N(X)}function N(X){return X===a?(k.enter("codeFencedFenceSequence"),I(X)):w(X)}function I(X){return X===a?(R++,k.consume(X),I):R>=i?(k.exit("codeFencedFenceSequence"),H(X)?Z(k,j,"whitespace")(X):j(X)):w(X)}function j(X){return X===null||P(X)?(k.exit("codeFencedFence"),L(X)):w(X)}}}function ju(e,t,n){let r=this;return o;function o(i){return i===null?n(i):(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),l)}function l(i){return r.parser.lazy[r.now().line]?n(i):t(i)}}const Or={name:"codeIndented",tokenize:Hu},$u={partial:!0,tokenize:Wu};function Hu(e,t,n){let r=this;return o;function o(c){return e.enter("codeIndented"),Z(e,l,"linePrefix",5)(c)}function l(c){let d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?i(c):n(c)}function i(c){return c===null?s(c):P(c)?e.attempt($u,i,s)(c):(e.enter("codeFlowValue"),a(c))}function a(c){return c===null||P(c)?(e.exit("codeFlowValue"),i(c)):(e.consume(c),a)}function s(c){return e.exit("codeIndented"),t(c)}}function Wu(e,t,n){let r=this;return o;function o(i){return r.parser.lazy[r.now().line]?n(i):P(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),o):Z(e,l,"linePrefix",5)(i)}function l(i){let a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):P(i)?o(i):n(i)}}const Zu={name:"codeText",previous:Vu,resolve:Uu,tokenize:Qu};function Uu(e){let t=e.length-4,n=3,r,o;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)o===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(o=r):(r===t||e[r][1].type==="lineEnding")&&(e[o][1].type="codeTextData",r!==o+2&&(e[o][1].end=e[r-1][1].end,e.splice(o+2,r-o-2),t-=r-o-2,r=o+2),o=void 0);return e}function Vu(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Qu(e,t,n){let r=0,o,l;return i;function i(f){return e.enter("codeText"),e.enter("codeTextSequence"),a(f)}function a(f){return f===96?(e.consume(f),r++,a):(e.exit("codeTextSequence"),s(f))}function s(f){return f===null?n(f):f===32?(e.enter("space"),e.consume(f),e.exit("space"),s):f===96?(l=e.enter("codeTextSequence"),o=0,d(f)):P(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),s):(e.enter("codeTextData"),c(f))}function c(f){return f===null||f===32||f===96||P(f)?(e.exit("codeTextData"),s(f)):(e.consume(f),c)}function d(f){return f===96?(e.consume(f),o++,d):o===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(f)):(l.type="codeTextData",c(f))}}var Yu=class{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){let r=n??1/0;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){let o=n||0;this.setCursor(Math.trunc(t));let l=this.right.splice(this.right.length-o,1/0);return r&&nn(this.left,r),l.reverse()}pop(){return this.setCursor(1/0),this.left.pop()}push(t){this.setCursor(1/0),this.left.push(t)}pushMany(t){this.setCursor(1/0),nn(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),nn(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){let n=this.left.splice(t,1/0);nn(this.right,n.reverse())}else{let n=this.right.splice(this.left.length+this.right.length-t,1/0);nn(this.left,n.reverse())}}};function nn(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function va(e){let t={},n=-1,r,o,l,i,a,s,c,d=new Yu(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,l=0,l<s.length&&s[l][1].type==="lineEndingBlank"&&(l+=2),l<s.length&&s[l][1].type==="content"))for(;++l<s.length&&s[l][1].type!=="content";)s[l][1].type==="chunkText"&&(s[l][1]._isInFirstContentOfListItem=!0,l++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Ju(d,n)),n=t[n],c=!0);else if(r[1]._container){for(l=n,o=void 0;l--;)if(i=d.get(l),i[1].type==="lineEnding"||i[1].type==="lineEndingBlank")i[0]==="enter"&&(o&&(d.get(o)[1].type="lineEndingBlank"),i[1].type="lineEnding",o=l);else if(!(i[1].type==="linePrefix"||i[1].type==="listItemIndent"))break;o&&(r[1].end={...d.get(o)[1].start},a=d.slice(o,n),a.unshift(r),d.splice(o,n-o+1,a))}}return Ae(e,0,1/0,d.slice(0)),!c}function Ju(e,t){let n=e.get(t)[1],r=e.get(t)[2],o=t-1,l=[],i=n._tokenizer;i||(i=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(i._contentTypeTextTrailing=!0));let a=i.events,s=[],c={},d,f,u=-1,h=n,p=0,T=0,b=[T];for(;h;){for(;e.get(++o)[1]!==h;);l.push(o),h._tokenizer||(d=r.sliceStream(h),h.next||d.push(null),f&&i.defineSkip(h.start),h._isInFirstContentOfListItem&&(i._gfmTasklistFirstContentOfListItem=!0),i.write(d),h._isInFirstContentOfListItem&&(i._gfmTasklistFirstContentOfListItem=void 0)),f=h,h=h.next}for(h=n;++u<a.length;)a[u][0]==="exit"&&a[u-1][0]==="enter"&&a[u][1].type===a[u-1][1].type&&a[u][1].start.line!==a[u][1].end.line&&(T=u+1,b.push(T),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(i.events=[],h?(h._tokenizer=void 0,h.previous=void 0):b.pop(),u=b.length;u--;){let y=a.slice(b[u],b[u+1]),F=l.pop();s.push([F,F+y.length-1]),e.splice(F,2,y)}for(s.reverse(),u=-1;++u<s.length;)c[p+s[u][0]]=p+s[u][1],p+=s[u][1]-s[u][0]-1;return c}const _u={resolve:t1,tokenize:n1},e1={partial:!0,tokenize:r1};function t1(e){return va(e),e}function n1(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),o(a)}function o(a){return a===null?l(a):P(a)?e.check(e1,i,l)(a):(e.consume(a),o)}function l(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function i(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,o}}function r1(e,t,n){let r=this;return o;function o(i){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),Z(e,l,"linePrefix")}function l(i){if(i===null||P(i))return n(i);let a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}function ka(e,t,n,r,o,l,i,a,s){let c=s||1/0,d=0;return f;function f(y){return y===60?(e.enter(r),e.enter(o),e.enter(l),e.consume(y),e.exit(l),u):y===null||y===32||y===41||tr(y)?n(y):(e.enter(r),e.enter(i),e.enter(a),e.enter("chunkString",{contentType:"string"}),T(y))}function u(y){return y===62?(e.enter(l),e.consume(y),e.exit(l),e.exit(o),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),h(y))}function h(y){return y===62?(e.exit("chunkString"),e.exit(a),u(y)):y===null||y===60||P(y)?n(y):(e.consume(y),y===92?p:h)}function p(y){return y===60||y===62||y===92?(e.consume(y),h):h(y)}function T(y){return!d&&(y===null||y===41||Q(y))?(e.exit("chunkString"),e.exit(a),e.exit(i),e.exit(r),t(y)):d<c&&y===40?(e.consume(y),d++,T):y===41?(e.consume(y),d--,T):y===null||y===32||y===40||tr(y)?n(y):(e.consume(y),y===92?b:T)}function b(y){return y===40||y===41||y===92?(e.consume(y),T):T(y)}}function Ba(e,t,n,r,o,l){let i=this,a=0,s;return c;function c(h){return e.enter(r),e.enter(o),e.consume(h),e.exit(o),e.enter(l),d}function d(h){return a>999||h===null||h===91||h===93&&!s||h===94&&!a&&"_hiddenFootnoteSupport"in i.parser.constructs?n(h):h===93?(e.exit(l),e.enter(o),e.consume(h),e.exit(o),e.exit(r),t):P(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),f(h))}function f(h){return h===null||h===91||h===93||P(h)||a++>999?(e.exit("chunkString"),d(h)):(e.consume(h),s||=!H(h),h===92?u:f)}function u(h){return h===91||h===92||h===93?(e.consume(h),a++,f):f(h)}}function Ea(e,t,n,r,o,l){let i;return a;function a(u){return u===34||u===39||u===40?(e.enter(r),e.enter(o),e.consume(u),e.exit(o),i=u===40?41:u,s):n(u)}function s(u){return u===i?(e.enter(o),e.consume(u),e.exit(o),e.exit(r),t):(e.enter(l),c(u))}function c(u){return u===i?(e.exit(l),s(i)):u===null?n(u):P(u)?(e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),Z(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(u))}function d(u){return u===i||u===null||P(u)?(e.exit("chunkString"),c(u)):(e.consume(u),u===92?f:d)}function f(u){return u===i||u===92?(e.consume(u),d):d(u)}}function fn(e,t){let n;return r;function r(o){return P(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),n=!0,r):H(o)?Z(e,r,n?"linePrefix":"lineSuffix")(o):t(o)}}const o1={name:"definition",tokenize:l1},i1={partial:!0,tokenize:a1};function l1(e,t,n){let r=this,o;return l;function l(h){return e.enter("definition"),i(h)}function i(h){return Ba.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function a(h){return o=Pe(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),s):n(h)}function s(h){return Q(h)?fn(e,c)(h):c(h)}function c(h){return ka(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function d(h){return e.attempt(i1,f,f)(h)}function f(h){return H(h)?Z(e,u,"whitespace")(h):u(h)}function u(h){return h===null||P(h)?(e.exit("definition"),r.parser.defined.push(o),t(h)):n(h)}}function a1(e,t,n){return r;function r(a){return Q(a)?fn(e,o)(a):n(a)}function o(a){return Ea(e,l,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function l(a){return H(a)?Z(e,i,"whitespace")(a):i(a)}function i(a){return a===null||P(a)?t(a):n(a)}}const s1={name:"hardBreakEscape",tokenize:c1};function c1(e,t,n){return r;function r(l){return e.enter("hardBreakEscape"),e.consume(l),o}function o(l){return P(l)?(e.exit("hardBreakEscape"),t(l)):n(l)}}const d1={name:"headingAtx",resolve:f1,tokenize:u1};function f1(e,t){let n=e.length-2,r=3,o,l;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(o={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},l={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Ae(e,r,n-r+1,[["enter",o,t],["enter",l,t],["exit",l,t],["exit",o,t]])),e}function u1(e,t,n){let r=0;return o;function o(d){return e.enter("atxHeading"),l(d)}function l(d){return e.enter("atxHeadingSequence"),i(d)}function i(d){return d===35&&r++<6?(e.consume(d),i):d===null||Q(d)?(e.exit("atxHeadingSequence"),a(d)):n(d)}function a(d){return d===35?(e.enter("atxHeadingSequence"),s(d)):d===null||P(d)?(e.exit("atxHeading"),t(d)):H(d)?Z(e,a,"whitespace")(d):(e.enter("atxHeadingText"),c(d))}function s(d){return d===35?(e.consume(d),s):(e.exit("atxHeadingSequence"),a(d))}function c(d){return d===null||d===35||Q(d)?(e.exit("atxHeadingText"),a(d)):(e.consume(d),c)}}const h1="address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."),zi=["pre","script","style","textarea"],p1={concrete:!0,name:"htmlFlow",resolveTo:y1,tokenize:x1},g1={partial:!0,tokenize:T1},m1={partial:!0,tokenize:b1};function y1(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function x1(e,t,n){let r=this,o,l,i,a,s;return c;function c(m){return d(m)}function d(m){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(m),f}function f(m){return m===33?(e.consume(m),u):m===47?(e.consume(m),l=!0,T):m===63?(e.consume(m),o=3,r.interrupt?t:g):ye(m)?(e.consume(m),i=String.fromCharCode(m),b):n(m)}function u(m){return m===45?(e.consume(m),o=2,h):m===91?(e.consume(m),o=5,a=0,p):ye(m)?(e.consume(m),o=4,r.interrupt?t:g):n(m)}function h(m){return m===45?(e.consume(m),r.interrupt?t:g):n(m)}function p(m){return m==="CDATA[".charCodeAt(a++)?(e.consume(m),a===6?r.interrupt?t:N:p):n(m)}function T(m){return ye(m)?(e.consume(m),i=String.fromCharCode(m),b):n(m)}function b(m){if(m===null||m===47||m===62||Q(m)){let tt=m===47,ft=i.toLowerCase();return!tt&&!l&&zi.includes(ft)?(o=1,r.interrupt?t(m):N(m)):h1.includes(i.toLowerCase())?(o=6,tt?(e.consume(m),y):r.interrupt?t(m):N(m)):(o=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(m):l?F(m):B(m))}return m===45||he(m)?(e.consume(m),i+=String.fromCharCode(m),b):n(m)}function y(m){return m===62?(e.consume(m),r.interrupt?t:N):n(m)}function F(m){return H(m)?(e.consume(m),F):x(m)}function B(m){return m===47?(e.consume(m),x):m===58||m===95||ye(m)?(e.consume(m),C):H(m)?(e.consume(m),B):x(m)}function C(m){return m===45||m===46||m===58||m===95||he(m)?(e.consume(m),C):S(m)}function S(m){return m===61?(e.consume(m),k):H(m)?(e.consume(m),S):B(m)}function k(m){return m===null||m===60||m===61||m===62||m===96?n(m):m===34||m===39?(e.consume(m),s=m,L):H(m)?(e.consume(m),k):w(m)}function L(m){return m===s?(e.consume(m),s=null,R):m===null||P(m)?n(m):(e.consume(m),L)}function w(m){return m===null||m===34||m===39||m===47||m===60||m===61||m===62||m===96||Q(m)?S(m):(e.consume(m),w)}function R(m){return m===47||m===62||H(m)?B(m):n(m)}function x(m){return m===62?(e.consume(m),E):n(m)}function E(m){return m===null||P(m)?N(m):H(m)?(e.consume(m),E):n(m)}function N(m){return m===45&&o===2?(e.consume(m),ee):m===60&&o===1?(e.consume(m),te):m===62&&o===4?(e.consume(m),et):m===63&&o===3?(e.consume(m),g):m===93&&o===5?(e.consume(m),ve):P(m)&&(o===6||o===7)?(e.exit("htmlFlowData"),e.check(g1,$e,I)(m)):m===null||P(m)?(e.exit("htmlFlowData"),I(m)):(e.consume(m),N)}function I(m){return e.check(m1,j,$e)(m)}function j(m){return e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),X}function X(m){return m===null||P(m)?I(m):(e.enter("htmlFlowData"),N(m))}function ee(m){return m===45?(e.consume(m),g):N(m)}function te(m){return m===47?(e.consume(m),i="",ge):N(m)}function ge(m){if(m===62){let tt=i.toLowerCase();return zi.includes(tt)?(e.consume(m),et):N(m)}return ye(m)&&i.length<8?(e.consume(m),i+=String.fromCharCode(m),ge):N(m)}function ve(m){return m===93?(e.consume(m),g):N(m)}function g(m){return m===62?(e.consume(m),et):m===45&&o===2?(e.consume(m),g):N(m)}function et(m){return m===null||P(m)?(e.exit("htmlFlowData"),$e(m)):(e.consume(m),et)}function $e(m){return e.exit("htmlFlow"),t(m)}}function b1(e,t,n){let r=this;return o;function o(i){return P(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),l):n(i)}function l(i){return r.parser.lazy[r.now().line]?n(i):t(i)}}function T1(e,t,n){return r;function r(o){return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),e.attempt(En,t,n)}}const w1={name:"htmlText",tokenize:v1};function v1(e,t,n){let r=this,o,l,i;return a;function a(g){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(g),s}function s(g){return g===33?(e.consume(g),c):g===47?(e.consume(g),S):g===63?(e.consume(g),B):ye(g)?(e.consume(g),w):n(g)}function c(g){return g===45?(e.consume(g),d):g===91?(e.consume(g),l=0,p):ye(g)?(e.consume(g),F):n(g)}function d(g){return g===45?(e.consume(g),h):n(g)}function f(g){return g===null?n(g):g===45?(e.consume(g),u):P(g)?(i=f,te(g)):(e.consume(g),f)}function u(g){return g===45?(e.consume(g),h):f(g)}function h(g){return g===62?ee(g):g===45?u(g):f(g)}function p(g){return g==="CDATA[".charCodeAt(l++)?(e.consume(g),l===6?T:p):n(g)}function T(g){return g===null?n(g):g===93?(e.consume(g),b):P(g)?(i=T,te(g)):(e.consume(g),T)}function b(g){return g===93?(e.consume(g),y):T(g)}function y(g){return g===62?ee(g):g===93?(e.consume(g),y):T(g)}function F(g){return g===null||g===62?ee(g):P(g)?(i=F,te(g)):(e.consume(g),F)}function B(g){return g===null?n(g):g===63?(e.consume(g),C):P(g)?(i=B,te(g)):(e.consume(g),B)}function C(g){return g===62?ee(g):B(g)}function S(g){return ye(g)?(e.consume(g),k):n(g)}function k(g){return g===45||he(g)?(e.consume(g),k):L(g)}function L(g){return P(g)?(i=L,te(g)):H(g)?(e.consume(g),L):ee(g)}function w(g){return g===45||he(g)?(e.consume(g),w):g===47||g===62||Q(g)?R(g):n(g)}function R(g){return g===47?(e.consume(g),ee):g===58||g===95||ye(g)?(e.consume(g),x):P(g)?(i=R,te(g)):H(g)?(e.consume(g),R):ee(g)}function x(g){return g===45||g===46||g===58||g===95||he(g)?(e.consume(g),x):E(g)}function E(g){return g===61?(e.consume(g),N):P(g)?(i=E,te(g)):H(g)?(e.consume(g),E):R(g)}function N(g){return g===null||g===60||g===61||g===62||g===96?n(g):g===34||g===39?(e.consume(g),o=g,I):P(g)?(i=N,te(g)):H(g)?(e.consume(g),N):(e.consume(g),j)}function I(g){return g===o?(e.consume(g),o=void 0,X):g===null?n(g):P(g)?(i=I,te(g)):(e.consume(g),I)}function j(g){return g===null||g===34||g===39||g===60||g===61||g===96?n(g):g===47||g===62||Q(g)?R(g):(e.consume(g),j)}function X(g){return g===47||g===62||Q(g)?R(g):n(g)}function ee(g){return g===62?(e.consume(g),e.exit("htmlTextData"),e.exit("htmlText"),t):n(g)}function te(g){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),ge}function ge(g){return H(g)?Z(e,ve,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(g):ve(g)}function ve(g){return e.enter("htmlTextData"),i(g)}}const qo={name:"labelEnd",resolveAll:A1,resolveTo:D1,tokenize:F1},k1={tokenize:N1},B1={tokenize:O1},E1={tokenize:R1};function A1(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){let o=r.type==="labelImage"?4:2;r.type="data",t+=o}}return e.length!==n.length&&Ae(e,0,e.length,n),e}function D1(e,t){let n=e.length,r=0,o,l,i,a;for(;n--;)if(o=e[n][1],l){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;e[n][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(i){if(e[n][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(l=n,o.type!=="labelLink")){r=2;break}}else o.type==="labelEnd"&&(i=n);let s={type:e[l][1].type==="labelLink"?"link":"image",start:{...e[l][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[l][1].start},end:{...e[i][1].end}},d={type:"labelText",start:{...e[l+r+2][1].end},end:{...e[i-2][1].start}};return a=[["enter",s,t],["enter",c,t]],a=De(a,e.slice(l+1,l+r+3)),a=De(a,[["enter",d,t]]),a=De(a,pr(t.parser.constructs.insideSpan.null,e.slice(l+r+4,i-3),t)),a=De(a,[["exit",d,t],e[i-2],e[i-1],["exit",c,t]]),a=De(a,e.slice(i+1)),a=De(a,[["exit",s,t]]),Ae(e,l,e.length,a),e}function F1(e,t,n){let r=this,o=r.events.length,l,i;for(;o--;)if((r.events[o][1].type==="labelImage"||r.events[o][1].type==="labelLink")&&!r.events[o][1]._balanced){l=r.events[o][1];break}return a;function a(u){return l?l._inactive?f(u):(i=r.parser.defined.includes(Pe(r.sliceSerialize({start:l.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(u),e.exit("labelMarker"),e.exit("labelEnd"),s):n(u)}function s(u){return u===40?e.attempt(k1,d,i?d:f)(u):u===91?e.attempt(B1,d,i?c:f)(u):i?d(u):f(u)}function c(u){return e.attempt(E1,d,f)(u)}function d(u){return t(u)}function f(u){return l._balanced=!0,n(u)}}function N1(e,t,n){return r;function r(f){return e.enter("resource"),e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),o}function o(f){return Q(f)?fn(e,l)(f):l(f)}function l(f){return f===41?d(f):ka(e,i,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function i(f){return Q(f)?fn(e,s)(f):d(f)}function a(f){return n(f)}function s(f){return f===34||f===39||f===40?Ea(e,c,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):d(f)}function c(f){return Q(f)?fn(e,d)(f):d(f)}function d(f){return f===41?(e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),e.exit("resource"),t):n(f)}}function O1(e,t,n){let r=this;return o;function o(a){return Ba.call(r,e,l,i,"reference","referenceMarker","referenceString")(a)}function l(a){return r.parser.defined.includes(Pe(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function i(a){return n(a)}}function R1(e,t,n){return r;function r(l){return e.enter("reference"),e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),o}function o(l){return l===93?(e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),e.exit("reference"),t):n(l)}}const C1={name:"labelStartImage",resolveAll:qo.resolveAll,tokenize:L1};function L1(e,t,n){let r=this;return o;function o(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),l}function l(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),i):n(a)}function i(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const I1={name:"labelStartLink",resolveAll:qo.resolveAll,tokenize:S1};function S1(e,t,n){let r=this;return o;function o(i){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(i),e.exit("labelMarker"),e.exit("labelLink"),l}function l(i){return i===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(i):t(i)}}const Rr={name:"lineEnding",tokenize:P1};function P1(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Z(e,t,"linePrefix")}}const Kn={name:"thematicBreak",tokenize:z1};function z1(e,t,n){let r=0,o;return l;function l(c){return e.enter("thematicBreak"),i(c)}function i(c){return o=c,a(c)}function a(c){return c===o?(e.enter("thematicBreakSequence"),s(c)):r>=3&&(c===null||P(c))?(e.exit("thematicBreak"),t(c)):n(c)}function s(c){return c===o?(e.consume(c),r++,s):(e.exit("thematicBreakSequence"),H(c)?Z(e,a,"whitespace")(c):a(c))}}const xe={continuation:{tokenize:K1},exit:j1,name:"list",tokenize:q1},M1={partial:!0,tokenize:$1},G1={partial:!0,tokenize:X1};function q1(e,t,n){let r=this,o=r.events[r.events.length-1],l=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,i=0;return a;function a(h){let p=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(p==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:fo(h)){if(r.containerState.type||(r.containerState.type=p,e.enter(p,{_container:!0})),p==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(Kn,n,c)(h):c(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(h)}return n(h)}function s(h){return fo(h)&&++i<10?(e.consume(h),s):(!r.interrupt||i<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),c(h)):n(h)}function c(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(En,r.interrupt?n:d,e.attempt(M1,u,f))}function d(h){return r.containerState.initialBlankLine=!0,l++,u(h)}function f(h){return H(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),u):n(h)}function u(h){return r.containerState.size=l+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function K1(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(En,o,l);function o(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Z(e,t,"listItemIndent",r.containerState.size+1)(a)}function l(a){return r.containerState.furtherBlankLines||!H(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,i(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(G1,t,i)(a))}function i(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,Z(e,e.attempt(xe,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function X1(e,t,n){let r=this;return Z(e,o,"listItemIndent",r.containerState.size+1);function o(l){let i=r.events[r.events.length-1];return i&&i[1].type==="listItemIndent"&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(l):n(l)}}function j1(e){e.exit(this.containerState.type)}function $1(e,t,n){let r=this;return Z(e,o,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function o(l){let i=r.events[r.events.length-1];return!H(l)&&i&&i[1].type==="listItemPrefixWhitespace"?t(l):n(l)}}const Mi={name:"setextUnderline",resolveTo:H1,tokenize:W1};function H1(e,t){let n=e.length,r,o,l;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(o=n)}else e[n][1].type==="content"&&e.splice(n,1),!l&&e[n][1].type==="definition"&&(l=n);let i={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[o][1].type="setextHeadingText",l?(e.splice(o,0,["enter",i,t]),e.splice(l+1,0,["exit",e[r][1],t]),e[r][1].end={...e[l][1].end}):e[r][1]=i,e.push(["exit",i,t]),e}function W1(e,t,n){let r=this,o;return l;function l(c){let d=r.events.length,f;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){f=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||f)?(e.enter("setextHeadingLine"),o=c,i(c)):n(c)}function i(c){return e.enter("setextHeadingLineSequence"),a(c)}function a(c){return c===o?(e.consume(c),a):(e.exit("setextHeadingLineSequence"),H(c)?Z(e,s,"lineSuffix")(c):s(c))}function s(c){return c===null||P(c)?(e.exit("setextHeadingLine"),t(c)):n(c)}}const Z1={tokenize:U1};function U1(e){let t=e.attempt(this.parser.constructs.contentInitial,r,o),n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Z(e,t,"linePrefix")}function o(a){return e.enter("paragraph"),l(a)}function l(a){let s=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,i(a)}function i(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return P(a)?(e.consume(a),e.exit("chunkText"),l):(e.consume(a),i)}}const V1={tokenize:Q1},Gi={tokenize:Y1};function Q1(e){let t=this,n=[],r=0,o,l,i;return a;function a(B){if(r<n.length){let C=n[r];return t.containerState=C[1],e.attempt(C[0].continuation,s,c)(B)}return c(B)}function s(B){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,o&&F();let C=t.events.length,S=C,k;for(;S--;)if(t.events[S][0]==="exit"&&t.events[S][1].type==="chunkFlow"){k=t.events[S][1].end;break}y(r);let L=C;for(;L<t.events.length;)t.events[L][1].end={...k},L++;return Ae(t.events,S+1,0,t.events.slice(C)),t.events.length=L,c(B)}return a(B)}function c(B){if(r===n.length){if(!o)return u(B);if(o.currentConstruct&&o.currentConstruct.concrete)return p(B);t.interrupt=!!(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Gi,d,f)(B)}function d(B){return o&&F(),y(r),u(B)}function f(B){return t.parser.lazy[t.now().line]=r!==n.length,i=t.now().offset,p(B)}function u(B){return t.containerState={},e.attempt(Gi,h,p)(B)}function h(B){return r++,n.push([t.currentConstruct,t.containerState]),u(B)}function p(B){if(B===null){o&&F(),y(0),e.consume(B);return}return o||=t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:o,contentType:"flow",previous:l}),T(B)}function T(B){if(B===null){b(e.exit("chunkFlow"),!0),y(0),e.consume(B);return}return P(B)?(e.consume(B),b(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(B),T)}function b(B,C){let S=t.sliceStream(B);if(C&&S.push(null),B.previous=l,l&&(l.next=B),l=B,o.defineSkip(B.start),o.write(S),t.parser.lazy[B.start.line]){let k=o.events.length;for(;k--;)if(o.events[k][1].start.offset<i&&(!o.events[k][1].end||o.events[k][1].end.offset>i))return;let L=t.events.length,w=L,R,x;for(;w--;)if(t.events[w][0]==="exit"&&t.events[w][1].type==="chunkFlow"){if(R){x=t.events[w][1].end;break}R=!0}for(y(r),k=L;k<t.events.length;)t.events[k][1].end={...x},k++;Ae(t.events,w+1,0,t.events.slice(L)),t.events.length=k}}function y(B){let C=n.length;for(;C-- >B;){let S=n[C];t.containerState=S[1],S[0].exit.call(t,e)}n.length=B}function F(){o.write([null]),l=void 0,o=void 0,t.containerState._closeFlow=void 0}}function Y1(e,t,n){return Z(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}const J1={tokenize:_1};function _1(e){let t=this,n=e.attempt(En,r,e.attempt(this.parser.constructs.flowInitial,o,Z(e,e.attempt(this.parser.constructs.flow,o,e.attempt(_u,o)),"linePrefix")));return n;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEndingBlank"),e.consume(l),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function o(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const eh={resolveAll:Da()},th=Aa("string"),nh=Aa("text");function Aa(e){return{resolveAll:Da(e==="text"?rh:void 0),tokenize:t};function t(n){let r=this,o=this.parser.constructs[e],l=n.attempt(o,i,a);return i;function i(d){return c(d)?l(d):a(d)}function a(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),s}function s(d){return c(d)?(n.exit("data"),l(d)):(n.consume(d),s)}function c(d){if(d===null)return!0;let f=o[d],u=-1;if(f)for(;++u<f.length;){let h=f[u];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function Da(e){return t;function t(n,r){let o=-1,l;for(;++o<=n.length;)l===void 0?n[o]&&n[o][1].type==="data"&&(l=o,o++):(!n[o]||n[o][1].type!=="data")&&(o!==l+2&&(n[l][1].end=n[o-1][1].end,n.splice(l+2,o-l-2),o=l+2),l=void 0);return e?e(n,r):n}}function rh(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){let r=e[n-1][1],o=t.sliceStream(r),l=o.length,i=-1,a=0,s;for(;l--;){let c=o[l];if(typeof c=="string"){for(i=c.length;c.charCodeAt(i-1)===32;)a++,i--;if(i)break;i=-1}else if(c===-2)s=!0,a++;else if(c!==-1){l++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){let c={type:n===e.length||s||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:l?i:r.start._bufferIndex+i,_index:r.start._index+l,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...c.start},r.start.offset===r.end.offset?Object.assign(r,c):(e.splice(n,0,["enter",c,t],["exit",c,t]),n+=2)}n++}return e}var oh=kn({attentionMarkers:()=>uh,contentInitial:()=>lh,disable:()=>hh,document:()=>ih,flow:()=>sh,flowInitial:()=>ah,insideSpan:()=>fh,string:()=>ch,text:()=>dh});const ih={42:xe,43:xe,45:xe,48:xe,49:xe,50:xe,51:xe,52:xe,53:xe,54:xe,55:xe,56:xe,57:xe,62:ba},lh={91:o1},ah={[-2]:Or,[-1]:Or,32:Or},sh={35:d1,42:Kn,45:[Mi,Kn],60:p1,61:Mi,95:Kn,96:Pi,126:Pi},ch={38:wa,92:Ta},dh={[-5]:Rr,[-4]:Rr,[-3]:Rr,33:C1,38:wa,42:uo,60:[Iu,w1],91:I1,92:[s1,Ta],93:qo,95:uo,96:Zu},fh={null:[uo,eh]},uh={null:[42,95]},hh={null:[]};function ph(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},o={},l=[],i=[],a=[],s={attempt:L(S),check:L(k),consume:F,enter:B,exit:C,interrupt:L(k,{interrupt:!0})},c={code:null,containerState:{},defineSkip:T,events:[],now:p,parser:e,previous:null,sliceSerialize:u,sliceStream:h,write:f},d=t.tokenize.call(c,s);return t.resolveAll&&l.push(t),c;function f(E){return i=De(i,E),b(),i[i.length-1]===null?(w(t,0),c.events=pr(l,c.events,c),c.events):[]}function u(E,N){return mh(h(E),N)}function h(E){return gh(i,E)}function p(){let{_bufferIndex:E,_index:N,line:I,column:j,offset:X}=r;return{_bufferIndex:E,_index:N,line:I,column:j,offset:X}}function T(E){o[E.line]=E.column,x()}function b(){let E;for(;r._index<i.length;){let N=i[r._index];if(typeof N=="string")for(E=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===E&&r._bufferIndex<N.length;)y(N.charCodeAt(r._bufferIndex));else y(N)}}function y(E){d=d(E)}function F(E){P(E)?(r.line++,r.column=1,r.offset+=E===-3?2:1,x()):E!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===i[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=E}function B(E,N){let I=N||{};return I.type=E,I.start=p(),c.events.push(["enter",I,c]),a.push(I),I}function C(E){let N=a.pop();return N.end=p(),c.events.push(["exit",N,c]),N}function S(E,N){w(E,N.from)}function k(E,N){N.restore()}function L(E,N){return I;function I(j,X,ee){let te,ge,ve,g;return Array.isArray(j)?$e(j):"tokenize"in j?$e([j]):et(j);function et(fe){return Jt;function Jt(nt){let At=nt!==null&&fe[nt],Dt=nt!==null&&fe.null;return $e([...Array.isArray(At)?At:At?[At]:[],...Array.isArray(Dt)?Dt:Dt?[Dt]:[]])(nt)}}function $e(fe){return te=fe,ge=0,fe.length===0?ee:m(fe[ge])}function m(fe){return Jt;function Jt(nt){return g=R(),ve=fe,fe.partial||(c.currentConstruct=fe),fe.name&&c.parser.constructs.disable.null.includes(fe.name)?ft():fe.tokenize.call(N?Object.assign(Object.create(c),N):c,s,tt,ft)(nt)}}function tt(fe){return E(ve,g),X}function ft(fe){return g.restore(),++ge<te.length?m(te[ge]):ee}}}function w(E,N){E.resolveAll&&!l.includes(E)&&l.push(E),E.resolve&&Ae(c.events,N,c.events.length-N,E.resolve(c.events.slice(N),c)),E.resolveTo&&(c.events=E.resolveTo(c.events,c))}function R(){let E=p(),N=c.previous,I=c.currentConstruct,j=c.events.length,X=Array.from(a);return{from:j,restore:ee};function ee(){r=E,c.previous=N,c.currentConstruct=I,c.events.length=j,a=X,x()}}function x(){r.line in o&&r.column<2&&(r.column=o[r.line],r.offset+=o[r.line]-1)}}function gh(e,t){let n=t.start._index,r=t.start._bufferIndex,o=t.end._index,l=t.end._bufferIndex,i;if(n===o)i=[e[n].slice(r,l)];else{if(i=e.slice(n,o),r>-1){let a=i[0];typeof a=="string"?i[0]=a.slice(r):i.shift()}l>0&&i.push(e[o].slice(0,l))}return i}function mh(e,t){let n=-1,r=[],o;for(;++n<e.length;){let l=e[n],i;if(typeof l=="string")i=l;else switch(l){case-5:i="\r";break;case-4:i=`
`;break;case-3:i=`\r
`;break;case-2:i=t?" ":"	";break;case-1:if(!t&&o)continue;i=" ";break;default:i=String.fromCharCode(l)}o=l===-2,r.push(i)}return r.join("")}function yh(e){let t={constructs:xa([oh,...(e||{}).extensions||[]]),content:n(Z1),defined:[],document:n(V1),flow:n(J1),lazy:{},string:n(th),text:n(nh)};return t;function n(r){return o;function o(l){return ph(t,r,l)}}}function xh(e){for(;!va(e););return e}const qi=/[\0\t\n\r]/g;function bh(){let e=1,t="",n=!0,r;return o;function o(l,i,a){let s=[],c,d,f,u,h;for(l=t+(typeof l=="string"?l.toString():new TextDecoder(i||void 0).decode(l)),f=0,t="",n&&=(l.charCodeAt(0)===65279&&f++,void 0);f<l.length;){if(qi.lastIndex=f,c=qi.exec(l),u=c&&c.index!==void 0?c.index:l.length,h=l.charCodeAt(u),!c){t=l.slice(f);break}if(h===10&&f===u&&r)s.push(-3),r=void 0;else switch(r&&=(s.push(-5),void 0),f<u&&(s.push(l.slice(f,u)),e+=u-f),h){case 0:s.push(65533),e++;break;case 9:for(d=Math.ceil(e/4)*4,s.push(-2);e++<d;)s.push(-1);break;case 10:s.push(-4),e=1;break;default:r=!0,e=1}f=u+1}return a&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}function un(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Ki(e.position):"start"in e||"end"in e?Ki(e):"line"in e||"column"in e?ho(e):""}function ho(e){return Xi(e&&e.line)+":"+Xi(e&&e.column)}function Ki(e){return ho(e&&e.start)+"-"+ho(e&&e.end)}function Xi(e){return e&&typeof e=="number"?e:1}const Fa={}.hasOwnProperty;function Na(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),Th(n)(xh(yh(n).document().write(bh()(e,t,!0))))}function Th(e){let t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:l(si),autolinkProtocol:R,autolinkEmail:R,atxHeading:l(ii),blockQuote:l(Dt),characterEscape:R,characterReference:R,codeFenced:l(oi),codeFencedFenceInfo:i,codeFencedFenceMeta:i,codeIndented:l(oi,i),codeText:l(ec,i),codeTextData:R,data:R,codeFlowValue:R,definition:l(tc),definitionDestinationString:i,definitionLabelString:i,definitionTitleString:i,emphasis:l(nc),hardBreakEscape:l(li),hardBreakTrailing:l(li),htmlFlow:l(ai,i),htmlFlowData:R,htmlText:l(ai,i),htmlTextData:R,image:l(rc),label:i,link:l(si),listItem:l(oc),listItemValue:u,listOrdered:l(ci,f),listUnordered:l(ci),paragraph:l(ic),reference:m,referenceString:i,resourceDestinationString:i,resourceTitleString:i,setextHeading:l(ii),strong:l(lc),thematicBreak:l(sc)},exit:{atxHeading:s(),atxHeadingSequence:S,autolink:s(),autolinkEmail:At,autolinkProtocol:nt,blockQuote:s(),characterEscapeValue:x,characterReferenceMarkerHexadecimal:ft,characterReferenceMarkerNumeric:ft,characterReferenceValue:fe,characterReference:Jt,codeFenced:s(b),codeFencedFence:T,codeFencedFenceInfo:h,codeFencedFenceMeta:p,codeFlowValue:x,codeIndented:s(y),codeText:s(X),codeTextData:x,data:x,definition:s(),definitionDestinationString:C,definitionLabelString:F,definitionTitleString:B,emphasis:s(),hardBreakEscape:s(N),hardBreakTrailing:s(N),htmlFlow:s(I),htmlFlowData:x,htmlText:s(j),htmlTextData:x,image:s(te),label:ve,labelText:ge,lineEnding:E,link:s(ee),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:tt,resourceDestinationString:g,resourceTitleString:et,resource:$e,setextHeading:s(w),setextHeadingLineSequence:L,setextHeadingText:k,strong:s(),thematicBreak:s()}};Oa(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(v){let O={type:"root",children:[]},M={stack:[O],tokenStack:[],config:t,enter:a,exit:c,buffer:i,resume:d,data:n},J=[],_=-1;for(;++_<v.length;)(v[_][1].type==="listOrdered"||v[_][1].type==="listUnordered")&&(v[_][0]==="enter"?J.push(_):_=o(v,J.pop(),_));for(_=-1;++_<v.length;){let rt=t[v[_][0]];Fa.call(rt,v[_][1].type)&&rt[v[_][1].type].call(Object.assign({sliceSerialize:v[_][2].sliceSerialize},M),v[_][1])}if(M.tokenStack.length>0){let rt=M.tokenStack[M.tokenStack.length-1];(rt[1]||ji).call(M,void 0,rt[0])}for(O.position={start:it(v.length>0?v[0][1].start:{line:1,column:1,offset:0}),end:it(v.length>0?v[v.length-2][1].end:{line:1,column:1,offset:0})},_=-1;++_<t.transforms.length;)O=t.transforms[_](O)||O;return O}function o(v,O,M){let J=O-1,_=-1,rt=!1,Ft,He,_t,en;for(;++J<=M;){let ke=v[J];switch(ke[1].type){case"listUnordered":case"listOrdered":case"blockQuote":ke[0]==="enter"?_++:_--,en=void 0;break;case"lineEndingBlank":ke[0]==="enter"&&(Ft&&!en&&!_&&!_t&&(_t=J),en=void 0);break;case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:en=void 0}if(!_&&ke[0]==="enter"&&ke[1].type==="listItemPrefix"||_===-1&&ke[0]==="exit"&&(ke[1].type==="listUnordered"||ke[1].type==="listOrdered")){if(Ft){let Nt=J;for(He=void 0;Nt--;){let We=v[Nt];if(We[1].type==="lineEnding"||We[1].type==="lineEndingBlank"){if(We[0]==="exit")continue;He&&(v[He][1].type="lineEndingBlank",rt=!0),We[1].type="lineEnding",He=Nt}else if(!(We[1].type==="linePrefix"||We[1].type==="blockQuotePrefix"||We[1].type==="blockQuotePrefixWhitespace"||We[1].type==="blockQuoteMarker"||We[1].type==="listItemIndent"))break}_t&&(!He||_t<He)&&(Ft._spread=!0),Ft.end=Object.assign({},He?v[He][1].start:ke[1].end),v.splice(He||J,0,["exit",Ft,ke[2]]),J++,M++}if(ke[1].type==="listItemPrefix"){let Nt={type:"listItem",_spread:!1,start:Object.assign({},ke[1].start),end:void 0};Ft=Nt,v.splice(J,0,["enter",Nt,ke[2]]),J++,M++,_t=void 0,en=!0}}}return v[O][1]._spread=rt,M}function l(v,O){return M;function M(J){a.call(this,v(J),J),O&&O.call(this,J)}}function i(){this.stack.push({type:"fragment",children:[]})}function a(v,O,M){this.stack[this.stack.length-1].children.push(v),this.stack.push(v),this.tokenStack.push([O,M||void 0]),v.position={start:it(O.start),end:void 0}}function s(v){return O;function O(M){v&&v.call(this,M),c.call(this,M)}}function c(v,O){let M=this.stack.pop(),J=this.tokenStack.pop();if(J)J[0].type!==v.type&&(O?O.call(this,v,J[0]):(J[1]||ji).call(this,v,J[0]));else throw Error("Cannot close `"+v.type+"` ("+un({start:v.start,end:v.end})+"): it’s not open");M.position.end=it(v.end)}function d(){return hr(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=!0}function u(v){if(this.data.expectingFirstListItemValue){let O=this.stack[this.stack.length-2];O.start=Number.parseInt(this.sliceSerialize(v),10),this.data.expectingFirstListItemValue=void 0}}function h(){let v=this.resume(),O=this.stack[this.stack.length-1];O.lang=v}function p(){let v=this.resume(),O=this.stack[this.stack.length-1];O.meta=v}function T(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function b(){let v=this.resume(),O=this.stack[this.stack.length-1];O.value=v.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function y(){let v=this.resume(),O=this.stack[this.stack.length-1];O.value=v.replace(/(\r?\n|\r)$/g,"")}function F(v){let O=this.resume(),M=this.stack[this.stack.length-1];M.label=O,M.identifier=Pe(this.sliceSerialize(v)).toLowerCase()}function B(){let v=this.resume(),O=this.stack[this.stack.length-1];O.title=v}function C(){let v=this.resume(),O=this.stack[this.stack.length-1];O.url=v}function S(v){let O=this.stack[this.stack.length-1];O.depth||=this.sliceSerialize(v).length}function k(){this.data.setextHeadingSlurpLineEnding=!0}function L(v){let O=this.stack[this.stack.length-1];O.depth=this.sliceSerialize(v).codePointAt(0)===61?1:2}function w(){this.data.setextHeadingSlurpLineEnding=void 0}function R(v){let O=this.stack[this.stack.length-1].children,M=O[O.length-1];(!M||M.type!=="text")&&(M=ac(),M.position={start:it(v.start),end:void 0},O.push(M)),this.stack.push(M)}function x(v){let O=this.stack.pop();O.value+=this.sliceSerialize(v),O.position.end=it(v.end)}function E(v){let O=this.stack[this.stack.length-1];if(this.data.atHardBreak){let M=O.children[O.children.length-1];M.position.end=it(v.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(O.type)&&(R.call(this,v),x.call(this,v))}function N(){this.data.atHardBreak=!0}function I(){let v=this.resume(),O=this.stack[this.stack.length-1];O.value=v}function j(){let v=this.resume(),O=this.stack[this.stack.length-1];O.value=v}function X(){let v=this.resume(),O=this.stack[this.stack.length-1];O.value=v}function ee(){let v=this.stack[this.stack.length-1];if(this.data.inReference){let O=this.data.referenceType||"shortcut";v.type+="Reference",v.referenceType=O,delete v.url,delete v.title}else delete v.identifier,delete v.label;this.data.referenceType=void 0}function te(){let v=this.stack[this.stack.length-1];if(this.data.inReference){let O=this.data.referenceType||"shortcut";v.type+="Reference",v.referenceType=O,delete v.url,delete v.title}else delete v.identifier,delete v.label;this.data.referenceType=void 0}function ge(v){let O=this.sliceSerialize(v),M=this.stack[this.stack.length-2];M.label=Fu(O),M.identifier=Pe(O).toLowerCase()}function ve(){let v=this.stack[this.stack.length-1],O=this.resume(),M=this.stack[this.stack.length-1];this.data.inReference=!0,M.type==="link"?M.children=v.children:M.alt=O}function g(){let v=this.resume(),O=this.stack[this.stack.length-1];O.url=v}function et(){let v=this.resume(),O=this.stack[this.stack.length-1];O.title=v}function $e(){this.data.inReference=void 0}function m(){this.data.referenceType="collapsed"}function tt(v){let O=this.resume(),M=this.stack[this.stack.length-1];M.label=O,M.identifier=Pe(this.sliceSerialize(v)).toLowerCase(),this.data.referenceType="full"}function ft(v){this.data.characterReferenceType=v.type}function fe(v){let O=this.sliceSerialize(v),M=this.data.characterReferenceType,J;M?(J=ya(O,M==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):J=Go(O);let _=this.stack[this.stack.length-1];_.value+=J}function Jt(v){let O=this.stack.pop();O.position.end=it(v.end)}function nt(v){x.call(this,v);let O=this.stack[this.stack.length-1];O.url=this.sliceSerialize(v)}function At(v){x.call(this,v);let O=this.stack[this.stack.length-1];O.url="mailto:"+this.sliceSerialize(v)}function Dt(){return{type:"blockquote",children:[]}}function oi(){return{type:"code",lang:null,meta:null,value:""}}function ec(){return{type:"inlineCode",value:""}}function tc(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function nc(){return{type:"emphasis",children:[]}}function ii(){return{type:"heading",depth:0,children:[]}}function li(){return{type:"break"}}function ai(){return{type:"html",value:""}}function rc(){return{type:"image",title:null,url:"",alt:null}}function si(){return{type:"link",title:null,url:"",children:[]}}function ci(v){return{type:"list",ordered:v.type==="listOrdered",start:null,spread:v._spread,children:[]}}function oc(v){return{type:"listItem",spread:v._spread,checked:null,children:[]}}function ic(){return{type:"paragraph",children:[]}}function lc(){return{type:"strong",children:[]}}function ac(){return{type:"text",value:""}}function sc(){return{type:"thematicBreak"}}}function it(e){return{line:e.line,column:e.column,offset:e.offset}}function Oa(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?Oa(e,r):wh(e,r)}}function wh(e,t){let n;for(n in t)if(Fa.call(t,n))switch(n){case"canContainEols":{let r=t[n];r&&e[n].push(...r);break}case"transforms":{let r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{let r=t[n];r&&Object.assign(e[n],r);break}}}function ji(e,t){throw Error(e?"Cannot close `"+e.type+"` ("+un({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+un({start:t.start,end:t.end})+") is open":"Cannot close document, a token (`"+t.type+"`, "+un({start:t.start,end:t.end})+") is still open")}function vh(e){if(typeof e!="string")throw TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}const gr=(function(e){if(e==null)return Ah;if(typeof e=="function")return mr(e);if(typeof e=="object")return Array.isArray(e)?kh(e):Bh(e);if(typeof e=="string")return Eh(e);throw Error("Expected function, string, or object as test")});function kh(e){let t=[],n=-1;for(;++n<e.length;)t[n]=gr(e[n]);return mr(r);function r(...o){let l=-1;for(;++l<t.length;)if(t[l].apply(this,o))return!0;return!1}}function Bh(e){let t=e;return mr(n);function n(r){let o=r,l;for(l in e)if(o[l]!==t[l])return!1;return!0}}function Eh(e){return mr(t);function t(n){return n&&n.type===e}}function mr(e){return t;function t(n,r,o){return!!(Dh(n)&&e.call(this,n,typeof r=="number"?r:void 0,o||void 0))}}function Ah(){return!0}function Dh(e){return typeof e=="object"&&!!e&&"type"in e}const Ra=[],Fh=!1;function Ca(e,t,n,r){let o;typeof t=="function"&&typeof n!="function"?(r=n,n=t):o=t;let l=gr(o),i=r?-1:1;a(e,void 0,[])();function a(s,c,d){let f=s&&typeof s=="object"?s:{};if(typeof f.type=="string"){let h=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(u,"name",{value:"node ("+(s.type+(h?"<"+h+">":""))+")"})}return u;function u(){let h=Ra,p,T,b;if((!t||l(s,c,d[d.length-1]||void 0))&&(h=Nh(n(s,d)),h[0]===!1))return h;if("children"in s&&s.children){let y=s;if(y.children&&h[0]!=="skip")for(T=(r?y.children.length:-1)+i,b=d.concat(y);T>-1&&T<y.children.length;){let F=y.children[T];if(p=a(F,T,b)(),p[0]===!1)return p;T=typeof p[1]=="number"?p[1]:T+i}}return h}}}function Nh(e){return Array.isArray(e)?e:typeof e=="number"?[!0,e]:e==null?Ra:[e]}function Oh(e,t,n){let r=gr((n||{}).ignore||[]),o=Rh(t),l=-1;for(;++l<o.length;)Ca(e,"text",i);function i(s,c){let d=-1,f;for(;++d<c.length;){let u=c[d],h=f?f.children:void 0;if(r(u,h?h.indexOf(u):void 0,f))return;f=u}if(f)return a(s,c)}function a(s,c){let d=c[c.length-1],f=o[l][0],u=o[l][1],h=0,p=d.children.indexOf(s),T=!1,b=[];f.lastIndex=0;let y=f.exec(s.value);for(;y;){let F=y.index,B={index:y.index,input:y.input,stack:[...c,s]},C=u(...y,B);if(typeof C=="string"&&(C=C.length>0?{type:"text",value:C}:void 0),C===!1?f.lastIndex=F+1:(h!==F&&b.push({type:"text",value:s.value.slice(h,F)}),Array.isArray(C)?b.push(...C):C&&b.push(C),h=F+y[0].length,T=!0),!f.global)break;y=f.exec(s.value)}return T?(h<s.value.length&&b.push({type:"text",value:s.value.slice(h)}),d.children.splice(p,1,...b)):b=[s],p+b.length}}function Rh(e){let t=[];if(!Array.isArray(e))throw TypeError("Expected find and replace tuple or list of tuples");let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let o=n[r];t.push([Ch(o[0]),Lh(o[1])])}return t}function Ch(e){return typeof e=="string"?new RegExp(vh(e),"g"):e}function Lh(e){return typeof e=="function"?e:function(){return e}}function Ih(e){return e.length}function Sh(e,t){let n=t||{},r=(n.align||[]).concat(),o=n.stringLength||Ih,l=[],i=[],a=[],s=[],c=0,d=-1;for(;++d<e.length;){let T=[],b=[],y=-1;for(e[d].length>c&&(c=e[d].length);++y<e[d].length;){let F=Ph(e[d][y]);if(n.alignDelimiters!==!1){let B=o(F);b[y]=B,(s[y]===void 0||B>s[y])&&(s[y]=B)}T.push(F)}i[d]=T,a[d]=b}let f=-1;if(typeof r=="object"&&"length"in r)for(;++f<c;)l[f]=$i(r[f]);else{let T=$i(r);for(;++f<c;)l[f]=T}f=-1;let u=[],h=[];for(;++f<c;){let T=l[f],b="",y="";T===99?(b=":",y=":"):T===108?b=":":T===114&&(y=":");let F=n.alignDelimiters===!1?1:Math.max(1,s[f]-b.length-y.length),B=b+"-".repeat(F)+y;n.alignDelimiters!==!1&&(F=b.length+F+y.length,F>s[f]&&(s[f]=F),h[f]=F),u[f]=B}i.splice(1,0,u),a.splice(1,0,h),d=-1;let p=[];for(;++d<i.length;){let T=i[d],b=a[d];f=-1;let y=[];for(;++f<c;){let F=T[f]||"",B="",C="";if(n.alignDelimiters!==!1){let S=s[f]-(b[f]||0),k=l[f];k===114?B=" ".repeat(S):k===99?S%2?(B=" ".repeat(S/2+.5),C=" ".repeat(S/2-.5)):(B=" ".repeat(S/2),C=B):C=" ".repeat(S)}n.delimiterStart!==!1&&!f&&y.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&F==="")&&(n.delimiterStart!==!1||f)&&y.push(" "),n.alignDelimiters!==!1&&y.push(B),y.push(F),n.alignDelimiters!==!1&&y.push(C),n.padding!==!1&&y.push(" "),(n.delimiterEnd!==!1||f!==c-1)&&y.push("|")}p.push(n.delimiterEnd===!1?y.join("").replace(/ +$/,""):y.join(""))}return p.join(`
`)}function Ph(e){return e==null?"":String(e)}function $i(e){let t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function zh(e,t){let n=String(e),r=n.indexOf(t),o=r,l=0,i=0;if(typeof t!="string")throw TypeError("Expected substring");for(;r!==-1;)r===o?++l>i&&(i=l):l=1,o=r+t.length,r=n.indexOf(t,o);return i}const Cr="phrasing",Lr=["autolink","link","image","label"];function Mh(){return{transforms:[Hh],enter:{literalAutolink:qh,literalAutolinkEmail:Ir,literalAutolinkHttp:Ir,literalAutolinkWww:Ir},exit:{literalAutolink:$h,literalAutolinkEmail:jh,literalAutolinkHttp:Kh,literalAutolinkWww:Xh}}}function Gh(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Cr,notInConstruct:Lr},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Cr,notInConstruct:Lr},{character:":",before:"[ps]",after:"\\/",inConstruct:Cr,notInConstruct:Lr}]}}function qh(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Ir(e){this.config.enter.autolinkProtocol.call(this,e)}function Kh(e){this.config.exit.autolinkProtocol.call(this,e)}function Xh(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function jh(e){this.config.exit.autolinkEmail.call(this,e)}function $h(e){this.exit(e)}function Hh(e){Oh(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Wh],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),Zh]],{ignore:["link","linkReference"]})}function Wh(e,t,n,r,o){let l="";if(!La(o)||(/^w/i.test(t)&&(n=t+n,t="",l="http://"),!Uh(n)))return!1;let i=Vh(n+r);if(!i[0])return!1;let a={type:"link",title:null,url:l+t+i[0],children:[{type:"text",value:t+i[0]}]};return i[1]?[a,{type:"text",value:i[1]}]:a}function Zh(e,t,n,r){return!La(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function Uh(e){let t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Vh(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")"),o=er(e,"("),l=er(e,")");for(;r!==-1&&o>l;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),l++;return[e,n]}function La(e,t){let n=e.input.charCodeAt(e.index-1);return(e.index===0||vt(n)||ur(n))&&(!t||n!==47)}Ia.peek=op;function Qh(){this.buffer()}function Yh(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function Jh(){this.buffer()}function _h(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function ep(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Pe(this.sliceSerialize(e)).toLowerCase(),n.label=t}function tp(e){this.exit(e)}function np(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Pe(this.sliceSerialize(e)).toLowerCase(),n.label=t}function rp(e){this.exit(e)}function op(){return"["}function Ia(e,t,n,r){let o=n.createTracker(r),l=o.move("[^"),i=n.enter("footnoteReference"),a=n.enter("reference");return l+=o.move(n.safe(n.associationId(e),{after:"]",before:l})),a(),i(),l+=o.move("]"),l}function ip(){return{enter:{gfmFootnoteCallString:Qh,gfmFootnoteCall:Yh,gfmFootnoteDefinitionLabelString:Jh,gfmFootnoteDefinition:_h},exit:{gfmFootnoteCallString:ep,gfmFootnoteCall:tp,gfmFootnoteDefinitionLabelString:np,gfmFootnoteDefinition:rp}}}function lp(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:Ia},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,o,l,i){let a=l.createTracker(i),s=a.move("[^"),c=l.enter("footnoteDefinition"),d=l.enter("label");return s+=a.move(l.safe(l.associationId(r),{before:s,after:"]"})),d(),s+=a.move("]:"),r.children&&r.children.length>0&&(a.shift(4),s+=a.move((t?`
`:" ")+l.indentLines(l.containerFlow(r,a.current()),t?Sa:ap))),c(),s}}function ap(e,t,n){return t===0?e:Sa(e,t,n)}function Sa(e,t,n){return(n?"":"    ")+e}const sp=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Pa.peek=hp;function cp(){return{canContainEols:["delete"],enter:{strikethrough:fp},exit:{strikethrough:up}}}function dp(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:sp}],handlers:{delete:Pa}}}function fp(e){this.enter({type:"delete",children:[]},e)}function up(e){this.exit(e)}function Pa(e,t,n,r){let o=n.createTracker(r),l=n.enter("strikethrough"),i=o.move("~~");return i+=n.containerPhrasing(e,{...o.current(),before:i,after:"~"}),i+=o.move("~~"),l(),i}function hp(){return"~"}function pp(e,t,n,r){let o=n.enter("blockquote"),l=n.createTracker(r);l.move("> "),l.shift(2);let i=n.indentLines(n.containerFlow(e,l.current()),gp);return o(),i}function gp(e,t,n){return">"+(n?"":" ")+e}function mp(e,t){return Hi(e,t.inConstruct,!0)&&!Hi(e,t.notInConstruct,!1)}function Hi(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function Wi(e,t,n,r){let o=-1;for(;++o<n.unsafe.length;)if(n.unsafe[o].character===`
`&&mp(n.stack,n.unsafe[o]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function yp(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function xp(e){let t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function bp(e,t,n,r){let o=xp(n),l=e.value||"",i=o==="`"?"GraveAccent":"Tilde";if(yp(e,n)){let f=n.enter("codeIndented"),u=n.indentLines(l,Tp);return f(),u}let a=n.createTracker(r),s=o.repeat(Math.max(zh(l,o)+1,3)),c=n.enter("codeFenced"),d=a.move(s);if(e.lang){let f=n.enter(`codeFencedLang${i}`);d+=a.move(n.safe(e.lang,{before:d,after:" ",encode:["`"],...a.current()})),f()}if(e.lang&&e.meta){let f=n.enter(`codeFencedMeta${i}`);d+=a.move(" "),d+=a.move(n.safe(e.meta,{before:d,after:`
`,encode:["`"],...a.current()})),f()}return d+=a.move(`
`),l&&(d+=a.move(l+`
`)),d+=a.move(s),c(),d}function Tp(e,t,n){return(n?"":"    ")+e}function Ko(e){let t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function wp(e,t,n,r){let o=Ko(n),l=o==='"'?"Quote":"Apostrophe",i=n.enter("definition"),a=n.enter("label"),s=n.createTracker(r),c=s.move("[");return c+=s.move(n.safe(n.associationId(e),{before:c,after:"]",...s.current()})),c+=s.move("]: "),a(),!e.url||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),c+=s.move("<"),c+=s.move(n.safe(e.url,{before:c,after:">",...s.current()})),c+=s.move(">")):(a=n.enter("destinationRaw"),c+=s.move(n.safe(e.url,{before:c,after:e.title?" ":`
`,...s.current()}))),a(),e.title&&(a=n.enter(`title${l}`),c+=s.move(" "+o),c+=s.move(n.safe(e.title,{before:c,after:o,...s.current()})),c+=s.move(o),a()),i(),c}function vp(e){let t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function mn(e){return"&#x"+e.toString(16).toUpperCase()+";"}function nr(e,t,n){let r=Kt(e),o=Kt(t);return r===void 0?o===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:o===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?o===void 0?{inside:!1,outside:!1}:o===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:o===void 0?{inside:!1,outside:!1}:o===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}za.peek=kp;function za(e,t,n,r){let o=vp(n),l=n.enter("emphasis"),i=n.createTracker(r),a=i.move(o),s=i.move(n.containerPhrasing(e,{after:o,before:a,...i.current()})),c=s.charCodeAt(0),d=nr(r.before.charCodeAt(r.before.length-1),c,o);d.inside&&(s=mn(c)+s.slice(1));let f=s.charCodeAt(s.length-1),u=nr(r.after.charCodeAt(0),f,o);u.inside&&(s=s.slice(0,-1)+mn(f));let h=i.move(o);return l(),n.attentionEncodeSurroundingInfo={after:u.outside,before:d.outside},a+s+h}function kp(e,t,n){return n.options.emphasis||"*"}function Xo(e,t,n,r){let o,l,i;typeof t=="function"&&typeof n!="function"?(l=void 0,i=t,o=n):(l=t,i=n,o=r),Ca(e,l,a,o);function a(s,c){let d=c[c.length-1],f=d?d.children.indexOf(s):void 0;return i(s,f,d)}}function Bp(e,t){let n=!1;return Xo(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,Fh}),!!((!e.depth||e.depth<3)&&hr(e)&&(t.options.setext||n))}function Ep(e,t,n,r){let o=Math.max(Math.min(6,e.depth||1),1),l=n.createTracker(r);if(Bp(e,n)){let d=n.enter("headingSetext"),f=n.enter("phrasing"),u=n.containerPhrasing(e,{...l.current(),before:`
`,after:`
`});return f(),d(),u+`
`+(o===1?"=":"-").repeat(u.length-(Math.max(u.lastIndexOf("\r"),u.lastIndexOf(`
`))+1))}let i="#".repeat(o),a=n.enter("headingAtx"),s=n.enter("phrasing");l.move(i+" ");let c=n.containerPhrasing(e,{before:"# ",after:`
`,...l.current()});return/^[\t ]/.test(c)&&(c=mn(c.charCodeAt(0))+c.slice(1)),c=c?i+" "+c:i,n.options.closeAtx&&(c+=" "+i),s(),a(),c}Ma.peek=Ap;function Ma(e){return e.value||""}function Ap(){return"<"}Ga.peek=Dp;function Ga(e,t,n,r){let o=Ko(n),l=o==='"'?"Quote":"Apostrophe",i=n.enter("image"),a=n.enter("label"),s=n.createTracker(r),c=s.move("![");return c+=s.move(n.safe(e.alt,{before:c,after:"]",...s.current()})),c+=s.move("]("),a(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),c+=s.move("<"),c+=s.move(n.safe(e.url,{before:c,after:">",...s.current()})),c+=s.move(">")):(a=n.enter("destinationRaw"),c+=s.move(n.safe(e.url,{before:c,after:e.title?" ":")",...s.current()}))),a(),e.title&&(a=n.enter(`title${l}`),c+=s.move(" "+o),c+=s.move(n.safe(e.title,{before:c,after:o,...s.current()})),c+=s.move(o),a()),c+=s.move(")"),i(),c}function Dp(){return"!"}qa.peek=Fp;function qa(e,t,n,r){let o=e.referenceType,l=n.enter("imageReference"),i=n.enter("label"),a=n.createTracker(r),s=a.move("!["),c=n.safe(e.alt,{before:s,after:"]",...a.current()});s+=a.move(c+"]["),i();let d=n.stack;n.stack=[],i=n.enter("reference");let f=n.safe(n.associationId(e),{before:s,after:"]",...a.current()});return i(),n.stack=d,l(),o==="full"||!c||c!==f?s+=a.move(f+"]"):o==="shortcut"?s=s.slice(0,-1):s+=a.move("]"),s}function Fp(){return"!"}Ka.peek=Np;function Ka(e,t,n){let r=e.value||"",o="`",l=-1;for(;RegExp("(^|[^`])"+o+"([^`]|$)").test(r);)o+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++l<n.unsafe.length;){let i=n.unsafe[l],a=n.compilePattern(i),s;if(i.atBreak)for(;s=a.exec(r);){let c=s.index;r.charCodeAt(c)===10&&r.charCodeAt(c-1)===13&&c--,r=r.slice(0,c)+" "+r.slice(s.index+1)}}return o+r+o}function Np(){return"`"}function Xa(e,t){let n=hr(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}ja.peek=Op;function ja(e,t,n,r){let o=Ko(n),l=o==='"'?"Quote":"Apostrophe",i=n.createTracker(r),a,s;if(Xa(e,n)){let d=n.stack;n.stack=[],a=n.enter("autolink");let f=i.move("<");return f+=i.move(n.containerPhrasing(e,{before:f,after:">",...i.current()})),f+=i.move(">"),a(),n.stack=d,f}a=n.enter("link"),s=n.enter("label");let c=i.move("[");return c+=i.move(n.containerPhrasing(e,{before:c,after:"](",...i.current()})),c+=i.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),c+=i.move("<"),c+=i.move(n.safe(e.url,{before:c,after:">",...i.current()})),c+=i.move(">")):(s=n.enter("destinationRaw"),c+=i.move(n.safe(e.url,{before:c,after:e.title?" ":")",...i.current()}))),s(),e.title&&(s=n.enter(`title${l}`),c+=i.move(" "+o),c+=i.move(n.safe(e.title,{before:c,after:o,...i.current()})),c+=i.move(o),s()),c+=i.move(")"),a(),c}function Op(e,t,n){return Xa(e,n)?"<":"["}$a.peek=Rp;function $a(e,t,n,r){let o=e.referenceType,l=n.enter("linkReference"),i=n.enter("label"),a=n.createTracker(r),s=a.move("["),c=n.containerPhrasing(e,{before:s,after:"]",...a.current()});s+=a.move(c+"]["),i();let d=n.stack;n.stack=[],i=n.enter("reference");let f=n.safe(n.associationId(e),{before:s,after:"]",...a.current()});return i(),n.stack=d,l(),o==="full"||!c||c!==f?s+=a.move(f+"]"):o==="shortcut"?s=s.slice(0,-1):s+=a.move("]"),s}function Rp(){return"["}function jo(e){let t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function Cp(e){let t=jo(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function Lp(e){let t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function Ha(e){let t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function Ip(e,t,n,r){let o=n.enter("list"),l=n.bulletCurrent,i=e.ordered?Lp(n):jo(n),a=e.ordered?i==="."?")":".":Cp(n),s=t&&n.bulletLastUsed?i===n.bulletLastUsed:!1;if(!e.ordered){let d=e.children?e.children[0]:void 0;if((i==="*"||i==="-")&&d&&(!d.children||!d.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(s=!0),Ha(n)===i&&d){let f=-1;for(;++f<e.children.length;){let u=e.children[f];if(u&&u.type==="listItem"&&u.children&&u.children[0]&&u.children[0].type==="thematicBreak"){s=!0;break}}}}s&&(i=a),n.bulletCurrent=i;let c=n.containerFlow(e,r);return n.bulletLastUsed=i,n.bulletCurrent=l,o(),c}function Sp(e){let t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function Pp(e,t,n,r){let o=Sp(n),l=n.bulletCurrent||jo(n);t&&t.type==="list"&&t.ordered&&(l=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+l);let i=l.length+1;(o==="tab"||o==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(i=Math.ceil(i/4)*4);let a=n.createTracker(r);a.move(l+" ".repeat(i-l.length)),a.shift(i);let s=n.enter("listItem"),c=n.indentLines(n.containerFlow(e,a.current()),d);return s(),c;function d(f,u,h){return u?(h?"":" ".repeat(i))+f:(h?l:l+" ".repeat(i-l.length))+f}}function zp(e,t,n,r){let o=n.enter("paragraph"),l=n.enter("phrasing"),i=n.containerPhrasing(e,r);return l(),o(),i}const Mp=gr(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function Gp(e,t,n,r){return(e.children.some(function(o){return Mp(o)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function qp(e){let t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Wa.peek=Kp;function Wa(e,t,n,r){let o=qp(n),l=n.enter("strong"),i=n.createTracker(r),a=i.move(o+o),s=i.move(n.containerPhrasing(e,{after:o,before:a,...i.current()})),c=s.charCodeAt(0),d=nr(r.before.charCodeAt(r.before.length-1),c,o);d.inside&&(s=mn(c)+s.slice(1));let f=s.charCodeAt(s.length-1),u=nr(r.after.charCodeAt(0),f,o);u.inside&&(s=s.slice(0,-1)+mn(f));let h=i.move(o+o);return l(),n.attentionEncodeSurroundingInfo={after:u.outside,before:d.outside},a+s+h}function Kp(e,t,n){return n.options.strong||"*"}function Xp(e,t,n,r){return n.safe(e.value,r)}function jp(e){let t=e.options.ruleRepetition||3;if(t<3)throw Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function $p(e,t,n){let r=(Ha(n)+(n.options.ruleSpaces?" ":"")).repeat(jp(n));return n.options.ruleSpaces?r.slice(0,-1):r}const Za={blockquote:pp,break:Wi,code:bp,definition:wp,emphasis:za,hardBreak:Wi,heading:Ep,html:Ma,image:Ga,imageReference:qa,inlineCode:Ka,link:ja,linkReference:$a,list:Ip,listItem:Pp,paragraph:zp,root:Gp,strong:Wa,text:Xp,thematicBreak:$p};function Hp(){return{enter:{table:Wp,tableData:Zi,tableHeader:Zi,tableRow:Up},exit:{codeText:Vp,table:Zp,tableData:Sr,tableHeader:Sr,tableRow:Sr}}}function Wp(e){let t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function Zp(e){this.exit(e),this.data.inTable=void 0}function Up(e){this.enter({type:"tableRow",children:[]},e)}function Sr(e){this.exit(e)}function Zi(e){this.enter({type:"tableCell",children:[]},e)}function Vp(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,Qp));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function Qp(e,t){return t==="|"?t:e}function Yp(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,o=t.stringLength,l=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:u,table:i,tableCell:s,tableRow:a}};function i(h,p,T,b){return c(d(h,T,b),h.align)}function a(h,p,T,b){let y=c([f(h,T,b)]);return y.slice(0,y.indexOf(`
`))}function s(h,p,T,b){let y=T.enter("tableCell"),F=T.enter("phrasing"),B=T.containerPhrasing(h,{...b,before:l,after:l});return F(),y(),B}function c(h,p){return Sh(h,{align:p,alignDelimiters:r,padding:n,stringLength:o})}function d(h,p,T){let b=h.children,y=-1,F=[],B=p.enter("table");for(;++y<b.length;)F[y]=f(b[y],p,T);return B(),F}function f(h,p,T){let b=h.children,y=-1,F=[],B=p.enter("tableRow");for(;++y<b.length;)F[y]=s(b[y],h,p,T);return B(),F}function u(h,p,T){let b=Za.inlineCode(h,p,T);return T.stack.includes("tableCell")&&(b=b.replace(/\|/g,"\\$&")),b}}function Jp(){return{exit:{taskListCheckValueChecked:Ui,taskListCheckValueUnchecked:Ui,paragraph:eg}}}function _p(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:tg}}}function Ui(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function eg(e){let t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){let n=this.stack[this.stack.length-1];n.type;let r=n.children[0];if(r&&r.type==="text"){let o=t.children,l=-1,i;for(;++l<o.length;){let a=o[l];if(a.type==="paragraph"){i=a;break}}i===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function tg(e,t,n,r){let o=e.children[0],l=typeof e.checked=="boolean"&&o&&o.type==="paragraph",i="["+(e.checked?"x":" ")+"] ",a=n.createTracker(r);l&&a.move(i);let s=Za.listItem(e,t,n,{...r,...a.current()});return l&&(s=s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,c)),s;function c(d){return d+i}}function ng(){return[Mh(),ip(),cp(),Hp(),Jp()]}function rg(e){return{extensions:[Gh(),lp(e),dp(),Yp(e),_p()]}}const og={tokenize:dg,partial:!0},Ua={tokenize:fg,partial:!0},Va={tokenize:ug,partial:!0},Qa={tokenize:hg,partial:!0},ig={tokenize:pg,partial:!0},Vi={name:"wwwAutolink",tokenize:sg,previous:Ya},Qi={name:"protocolAutolink",tokenize:cg,previous:Ja},Ue={name:"emailAutolink",tokenize:ag,previous:_a},Ge={};function lg(){return{text:Ge}}let pt=48;for(;pt<123;)Ge[pt]=Ue,pt++,pt===58?pt=65:pt===91&&(pt=97);Ge[43]=Ue,Ge[45]=Ue,Ge[46]=Ue,Ge[95]=Ue,Ge[72]=[Ue,Qi],Ge[104]=[Ue,Qi],Ge[87]=[Ue,Vi],Ge[119]=[Ue,Vi];function ag(e,t,n){let r=this,o,l;return i;function i(f){return!po(f)||!_a.call(r,r.previous)||$o(r.events)?n(f):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),a(f))}function a(f){return po(f)?(e.consume(f),a):f===64?(e.consume(f),s):n(f)}function s(f){return f===46?e.check(ig,d,c)(f):f===45||f===95||he(f)?(l=!0,e.consume(f),s):d(f)}function c(f){return e.consume(f),o=!0,s}function d(f){return l&&o&&ye(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(f)):n(f)}}function sg(e,t,n){let r=this;return o;function o(i){return i!==87&&i!==119||!Ya.call(r,r.previous)||$o(r.events)?n(i):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(og,e.attempt(Ua,e.attempt(Va,l),n),n)(i))}function l(i){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(i)}}function cg(e,t,n){let r=this,o="",l=!1;return i;function i(f){return(f===72||f===104)&&Ja.call(r,r.previous)&&!$o(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),o+=String.fromCodePoint(f),e.consume(f),a):n(f)}function a(f){if(ye(f)&&o.length<5)return o+=String.fromCodePoint(f),e.consume(f),a;if(f===58){let u=o.toLowerCase();if(u==="http"||u==="https")return e.consume(f),s}return n(f)}function s(f){return f===47?(e.consume(f),l?c:(l=!0,s)):n(f)}function c(f){return f===null||tr(f)||Q(f)||vt(f)||ur(f)?n(f):e.attempt(Ua,e.attempt(Va,d),n)(f)}function d(f){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(f)}}function dg(e,t,n){let r=0;return o;function o(i){return(i===87||i===119)&&r<3?(r++,e.consume(i),o):i===46&&r===3?(e.consume(i),l):n(i)}function l(i){return i===null?n(i):t(i)}}function fg(e,t,n){let r,o,l;return i;function i(c){return c===46||c===95?e.check(Qa,s,a)(c):c===null||Q(c)||vt(c)||c!==45&&ur(c)?s(c):(l=!0,e.consume(c),i)}function a(c){return c===95?r=!0:(o=r,r=void 0),e.consume(c),i}function s(c){return o||r||!l?n(c):t(c)}}function ug(e,t){let n=0,r=0;return o;function o(i){return i===40?(n++,e.consume(i),o):i===41&&r<n?l(i):i===33||i===34||i===38||i===39||i===41||i===42||i===44||i===46||i===58||i===59||i===60||i===63||i===93||i===95||i===126?e.check(Qa,t,l)(i):i===null||Q(i)||vt(i)?t(i):(e.consume(i),o)}function l(i){return i===41&&r++,e.consume(i),o}}function hg(e,t,n){return r;function r(a){return a===33||a===34||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===63||a===95||a===126?(e.consume(a),r):a===38?(e.consume(a),l):a===93?(e.consume(a),o):a===60||a===null||Q(a)||vt(a)?t(a):n(a)}function o(a){return a===null||a===40||a===91||Q(a)||vt(a)?t(a):r(a)}function l(a){return ye(a)?i(a):n(a)}function i(a){return a===59?(e.consume(a),r):ye(a)?(e.consume(a),i):n(a)}}function pg(e,t,n){return r;function r(l){return e.consume(l),o}function o(l){return he(l)?n(l):t(l)}}function Ya(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||Q(e)}function Ja(e){return!ye(e)}function _a(e){return!(e===47||po(e))}function po(e){return e===43||e===45||e===46||e===95||he(e)}function $o(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const gg={tokenize:kg,partial:!0};function mg(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:Tg,continuation:{tokenize:wg},exit:vg}},text:{91:{name:"gfmFootnoteCall",tokenize:bg},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:yg,resolveTo:xg}}}}function yg(e,t,n){let r=this,o=r.events.length,l=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),i;for(;o--;){let s=r.events[o][1];if(s.type==="labelImage"){i=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return a;function a(s){if(!i||!i._balanced)return n(s);let c=Pe(r.sliceSerialize({start:i.end,end:r.now()}));return c.codePointAt(0)!==94||!l.includes(c.slice(1))?n(s):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),t(s))}}function xg(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";let r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},o={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};o.end.column++,o.end.offset++,o.end._bufferIndex++;let l={type:"gfmFootnoteCallString",start:Object.assign({},o.end),end:Object.assign({},e[e.length-1][1].start)},i={type:"chunkString",contentType:"string",start:Object.assign({},l.start),end:Object.assign({},l.end)},a=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",o,t],["exit",o,t],["enter",l,t],["enter",i,t],["exit",i,t],["exit",l,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...a),e}function bg(e,t,n){let r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),l=0,i;return a;function a(f){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),s}function s(f){return f===94?(e.enter("gfmFootnoteCallMarker"),e.consume(f),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",c):n(f)}function c(f){if(l>999||f===93&&!i||f===null||f===91||Q(f))return n(f);if(f===93){e.exit("chunkString");let u=e.exit("gfmFootnoteCallString");return o.includes(Pe(r.sliceSerialize(u)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(f)}return Q(f)||(i=!0),l++,e.consume(f),f===92?d:c}function d(f){return f===91||f===92||f===93?(e.consume(f),l++,c):c(f)}}function Tg(e,t,n){let r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),l,i=0,a;return s;function s(p){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(p),e.exit("gfmFootnoteDefinitionLabelMarker"),c}function c(p){return p===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(p),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",d):n(p)}function d(p){if(i>999||p===93&&!a||p===null||p===91||Q(p))return n(p);if(p===93){e.exit("chunkString");let T=e.exit("gfmFootnoteDefinitionLabelString");return l=Pe(r.sliceSerialize(T)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(p),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),u}return Q(p)||(a=!0),i++,e.consume(p),p===92?f:d}function f(p){return p===91||p===92||p===93?(e.consume(p),i++,d):d(p)}function u(p){return p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),o.includes(l)||o.push(l),Z(e,h,"gfmFootnoteDefinitionWhitespace")):n(p)}function h(p){return t(p)}}function wg(e,t,n){return e.check(En,t,e.attempt(gg,t,n))}function vg(e){e.exit("gfmFootnoteDefinition")}function kg(e,t,n){let r=this;return Z(e,o,"gfmFootnoteDefinitionIndent",5);function o(l){let i=r.events[r.events.length-1];return i&&i[1].type==="gfmFootnoteDefinitionIndent"&&i[2].sliceSerialize(i[1],!0).length===4?t(l):n(l)}}function Bg(e){let t=(e||{}).singleTilde,n={name:"strikethrough",tokenize:o,resolveAll:r};return t??=!0,{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}};function r(l,i){let a=-1;for(;++a<l.length;)if(l[a][0]==="enter"&&l[a][1].type==="strikethroughSequenceTemporary"&&l[a][1]._close){let s=a;for(;s--;)if(l[s][0]==="exit"&&l[s][1].type==="strikethroughSequenceTemporary"&&l[s][1]._open&&l[a][1].end.offset-l[a][1].start.offset===l[s][1].end.offset-l[s][1].start.offset){l[a][1].type="strikethroughSequence",l[s][1].type="strikethroughSequence";let c={type:"strikethrough",start:Object.assign({},l[s][1].start),end:Object.assign({},l[a][1].end)},d={type:"strikethroughText",start:Object.assign({},l[s][1].end),end:Object.assign({},l[a][1].start)},f=[["enter",c,i],["enter",l[s][1],i],["exit",l[s][1],i],["enter",d,i]],u=i.parser.constructs.insideSpan.null;u&&Ae(f,f.length,0,pr(u,l.slice(s+1,a),i)),Ae(f,f.length,0,[["exit",d,i],["enter",l[a][1],i],["exit",l[a][1],i],["exit",c,i]]),Ae(l,s-1,a-s+3,f),a=s+f.length-2;break}}for(a=-1;++a<l.length;)l[a][1].type==="strikethroughSequenceTemporary"&&(l[a][1].type="data");return l}function o(l,i,a){let s=this.previous,c=this.events,d=0;return f;function f(h){return s===126&&c[c.length-1][1].type!=="characterEscape"?a(h):(l.enter("strikethroughSequenceTemporary"),u(h))}function u(h){let p=Kt(s);if(h===126)return d>1?a(h):(l.consume(h),d++,u);if(d<2&&!t)return a(h);let T=l.exit("strikethroughSequenceTemporary"),b=Kt(h);return T._open=!b||b===2&&!!p,T._close=!p||p===2&&!!b,i(h)}}}var Eg=class{constructor(){this.map=[]}add(t,n,r){Ag(this,t,n,r)}consume(t){if(this.map.sort(function(l,i){return l[0]-i[0]}),this.map.length===0)return;let n=this.map.length,r=[];for(;n>0;)--n,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let o=r.pop();for(;o;){for(let l of o)t.push(l);o=r.pop()}this.map.length=0}};function Ag(e,t,n,r){let o=0;if(!(n===0&&r.length===0)){for(;o<e.map.length;){if(e.map[o][0]===t){e.map[o][1]+=n,e.map[o][2].push(...r);return}o+=1}e.map.push([t,n,r])}}function Dg(e,t){let n=!1,r=[];for(;t<e.length;){let o=e[t];if(n){if(o[0]==="enter")o[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(o[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){let l=r.length-1;r[l]=r[l]==="left"?"center":"right"}}else if(o[1].type==="tableDelimiterRow")break}else o[0]==="enter"&&o[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function Fg(){return{flow:{null:{name:"table",tokenize:Ng,resolveAll:Og}}}}function Ng(e,t,n){let r=this,o=0,l=0,i;return a;function a(x){let E=r.events.length-1;for(;E>-1;){let j=r.events[E][1].type;if(j==="lineEnding"||j==="linePrefix")E--;else break}let N=E>-1?r.events[E][1].type:null,I=N==="tableHead"||N==="tableRow"?k:s;return I===k&&r.parser.lazy[r.now().line]?n(x):I(x)}function s(x){return e.enter("tableHead"),e.enter("tableRow"),c(x)}function c(x){return x===124||(i=!0,l+=1),d(x)}function d(x){return x===null?n(x):P(x)?l>1?(l=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),h):n(x):H(x)?Z(e,d,"whitespace")(x):(l+=1,i&&(i=!1,o+=1),x===124?(e.enter("tableCellDivider"),e.consume(x),e.exit("tableCellDivider"),i=!0,d):(e.enter("data"),f(x)))}function f(x){return x===null||x===124||Q(x)?(e.exit("data"),d(x)):(e.consume(x),x===92?u:f)}function u(x){return x===92||x===124?(e.consume(x),f):f(x)}function h(x){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(x):(e.enter("tableDelimiterRow"),i=!1,H(x)?Z(e,p,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(x):p(x))}function p(x){return x===45||x===58?b(x):x===124?(i=!0,e.enter("tableCellDivider"),e.consume(x),e.exit("tableCellDivider"),T):S(x)}function T(x){return H(x)?Z(e,b,"whitespace")(x):b(x)}function b(x){return x===58?(l+=1,i=!0,e.enter("tableDelimiterMarker"),e.consume(x),e.exit("tableDelimiterMarker"),y):x===45?(l+=1,y(x)):x===null||P(x)?C(x):S(x)}function y(x){return x===45?(e.enter("tableDelimiterFiller"),F(x)):S(x)}function F(x){return x===45?(e.consume(x),F):x===58?(i=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(x),e.exit("tableDelimiterMarker"),B):(e.exit("tableDelimiterFiller"),B(x))}function B(x){return H(x)?Z(e,C,"whitespace")(x):C(x)}function C(x){return x===124?p(x):x===null||P(x)?!i||o!==l?S(x):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(x)):S(x)}function S(x){return n(x)}function k(x){return e.enter("tableRow"),L(x)}function L(x){return x===124?(e.enter("tableCellDivider"),e.consume(x),e.exit("tableCellDivider"),L):x===null||P(x)?(e.exit("tableRow"),t(x)):H(x)?Z(e,L,"whitespace")(x):(e.enter("data"),w(x))}function w(x){return x===null||x===124||Q(x)?(e.exit("data"),L(x)):(e.consume(x),x===92?R:w)}function R(x){return x===92||x===124?(e.consume(x),w):w(x)}}function Og(e,t){let n=-1,r=!0,o=0,l=[0,0,0,0],i=[0,0,0,0],a=!1,s=0,c,d,f,u=new Eg;for(;++n<e.length;){let h=e[n],p=h[1];h[0]==="enter"?p.type==="tableHead"?(a=!1,s!==0&&(Yi(u,t,s,c,d),d=void 0,s=0),c={type:"table",start:Object.assign({},p.start),end:Object.assign({},p.end)},u.add(n,0,[["enter",c,t]])):p.type==="tableRow"||p.type==="tableDelimiterRow"?(r=!0,f=void 0,l=[0,0,0,0],i=[0,n+1,0,0],a&&(a=!1,d={type:"tableBody",start:Object.assign({},p.start),end:Object.assign({},p.end)},u.add(n,0,[["enter",d,t]])),o=p.type==="tableDelimiterRow"?2:d?3:1):o&&(p.type==="data"||p.type==="tableDelimiterMarker"||p.type==="tableDelimiterFiller")?(r=!1,i[2]===0&&(l[1]!==0&&(i[0]=i[1],f=Cn(u,t,l,o,void 0,f),l=[0,0,0,0]),i[2]=n)):p.type==="tableCellDivider"&&(r?r=!1:(l[1]!==0&&(i[0]=i[1],f=Cn(u,t,l,o,void 0,f)),l=i,i=[l[1],n,0,0])):p.type==="tableHead"?(a=!0,s=n):p.type==="tableRow"||p.type==="tableDelimiterRow"?(s=n,l[1]===0?i[1]!==0&&(f=Cn(u,t,i,o,n,f)):(i[0]=i[1],f=Cn(u,t,l,o,n,f)),o=0):o&&(p.type==="data"||p.type==="tableDelimiterMarker"||p.type==="tableDelimiterFiller")&&(i[3]=n)}for(s!==0&&Yi(u,t,s,c,d),u.consume(t.events),n=-1;++n<t.events.length;){let h=t.events[n];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=Dg(t.events,n))}return e}function Cn(e,t,n,r,o,l){let i=r===1?"tableHeader":r===2?"tableDelimiter":"tableData";n[0]!==0&&(l.end=Object.assign({},Lt(t.events,n[0])),e.add(n[0],0,[["exit",l,t]]));let a=Lt(t.events,n[1]);if(l={type:i,start:Object.assign({},a),end:Object.assign({},a)},e.add(n[1],0,[["enter",l,t]]),n[2]!==0){let s=Lt(t.events,n[2]),c=Lt(t.events,n[3]),d={type:"tableContent",start:Object.assign({},s),end:Object.assign({},c)};if(e.add(n[2],0,[["enter",d,t]]),r!==2){let f=t.events[n[2]],u=t.events[n[3]];if(f[1].end=Object.assign({},u[1].end),f[1].type="chunkText",f[1].contentType="text",n[3]>n[2]+1){let h=n[2]+1,p=n[3]-n[2]-1;e.add(h,p,[])}}e.add(n[3]+1,0,[["exit",d,t]])}return o!==void 0&&(l.end=Object.assign({},Lt(t.events,o)),e.add(o,0,[["exit",l,t]]),l=void 0),l}function Yi(e,t,n,r,o){let l=[],i=Lt(t.events,n);o&&(o.end=Object.assign({},i),l.push(["exit",o,t])),r.end=Object.assign({},i),l.push(["exit",r,t]),e.add(n+1,0,l)}function Lt(e,t){let n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const Rg={name:"tasklistCheck",tokenize:Lg};function Cg(){return{text:{91:Rg}}}function Lg(e,t,n){let r=this;return o;function o(s){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(s):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),l)}function l(s){return Q(s)?(e.enter("taskListCheckValueUnchecked"),e.consume(s),e.exit("taskListCheckValueUnchecked"),i):s===88||s===120?(e.enter("taskListCheckValueChecked"),e.consume(s),e.exit("taskListCheckValueChecked"),i):n(s)}function i(s){return s===93?(e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),a):n(s)}function a(s){return P(s)?t(s):H(s)?e.check({tokenize:Ig},t,n)(s):n(s)}}function Ig(e,t,n){return Z(e,r,"whitespace");function r(o){return o===null?n(o):t(o)}}function Sg(e){return xa([lg(),mg(),Bg(e),Fg(),Cg()])}const Pg={};function zg(e){let t=this,n=e||Pg,r=t.data(),o=r.micromarkExtensions||=[],l=r.fromMarkdownExtensions||=[],i=r.toMarkdownExtensions||=[];o.push(Sg(n)),l.push(ng()),i.push(rg(n))}const Mg=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/i,Gg=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)(\/.*)?\]/i,qg=({legacyTitle:e=!1,tagName:t="div"}={})=>n=>{Xo(n,"blockquote",(r,o,l)=>{let i="",a="",s=!0,c=r.children.map(d=>{if(s&&d.type==="paragraph"){let f=d.children[0],u=f.type==="text"?f.value:"",h=e?Gg:Mg,p=u.match(h);if(p&&(s=!1,i=p[1].toLocaleLowerCase(),a=e&&p[2]||i.toLocaleUpperCase(),u.includes(`
`)&&(d.children[0]={type:"text",value:u.replace(h,"").replace(/^\n+/,"")}),!u.includes(`
`))){let T=[];d.children.forEach((b,y)=>{y!=0&&(y==1&&b.type==="break"||T.push(b))}),d.children=[...T]}}return d});i&&(r.data={hName:t,hProperties:{className:["markdown-alert",`markdown-alert-${i}`],dir:"auto"}},c.unshift({type:"paragraph",children:[Kg(i),{type:"text",value:a.replace(/^\//,"")}],data:{hProperties:{className:"markdown-alert-title",dir:"auto"}}})),r.children=[...c]})};function Kg(e){return{type:"emphasis",data:{hName:"svg",hProperties:{className:["octicon"],viewBox:"0 0 16 16",width:"16",height:"16",ariaHidden:"true"}},children:[{type:"emphasis",data:{hName:"path",hProperties:{d:Xg[e]??""}},children:[]}]}}const Xg={note:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",tip:"M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z",important:"M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",warning:"M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",caution:"M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"};function jg(e){let t=this;t.parser=n;function n(r){return Na(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function $g(e,t){let n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Hg(e,t){let n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function Wg(e,t){let n=t.value?t.value+`
`:"",r={},o=t.lang?t.lang.split(/\s+/):[];o.length>0&&(r.className=["language-"+o[0]]);let l={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(l.data={meta:t.meta}),e.patch(t,l),l=e.applyData(t,l),l={type:"element",tagName:"pre",properties:{},children:[l]},e.patch(t,l),l}function Zg(e,t){let n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ug(e,t){let n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Vg(e,t){let n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),o=Ut(r.toLowerCase()),l=e.footnoteOrder.indexOf(r),i,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),i=e.footnoteOrder.length):i=l+1,a+=1,e.footnoteCounts.set(r,a);let s={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+o,id:n+"fnref-"+o+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(i)}]};e.patch(t,s);let c={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,c),e.applyData(t,c)}function Qg(e,t){let n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Yg(e,t){if(e.options.allowDangerousHtml){let n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function es(e,t){let n=t.referenceType,r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];let o=e.all(t),l=o[0];l&&l.type==="text"?l.value="["+l.value:o.unshift({type:"text",value:"["});let i=o[o.length-1];return i&&i.type==="text"?i.value+=r:o.push({type:"text",value:r}),o}function Jg(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return es(e,t);let o={src:Ut(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(o.title=r.title);let l={type:"element",tagName:"img",properties:o,children:[]};return e.patch(t,l),e.applyData(t,l)}function _g(e,t){let n={src:Ut(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function em(e,t){let n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);let r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function tm(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return es(e,t);let o={href:Ut(r.url||"")};r.title!==null&&r.title!==void 0&&(o.title=r.title);let l={type:"element",tagName:"a",properties:o,children:e.all(t)};return e.patch(t,l),e.applyData(t,l)}function nm(e,t){let n={href:Ut(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function rm(e,t,n){let r=e.all(t),o=n?om(n):ts(t),l={},i=[];if(typeof t.checked=="boolean"){let d=r[0],f;d&&d.type==="element"&&d.tagName==="p"?f=d:(f={type:"element",tagName:"p",properties:{},children:[]},r.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),l.className=["task-list-item"]}let a=-1;for(;++a<r.length;){let d=r[a];(o||a!==0||d.type!=="element"||d.tagName!=="p")&&i.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!o?i.push(...d.children):i.push(d)}let s=r[r.length-1];s&&(o||s.type!=="element"||s.tagName!=="p")&&i.push({type:"text",value:`
`});let c={type:"element",tagName:"li",properties:l,children:i};return e.patch(t,c),e.applyData(t,c)}function om(e){let t=!1;if(e.type==="list"){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=ts(n[r])}return t}function ts(e){return e.spread??e.children.length>1}function im(e,t){let n={},r=e.all(t),o=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++o<r.length;){let i=r[o];if(i.type==="element"&&i.tagName==="li"&&i.properties&&Array.isArray(i.properties.className)&&i.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}let l={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,l),e.applyData(t,l)}function lm(e,t){let n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function am(e,t){let n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function sm(e,t){let n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function cm(e,t){let n=e.all(t),r=n.shift(),o=[];if(r){let i={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],i),o.push(i)}if(n.length>0){let i={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=Ql(t.children[1]),s=Vl(t.children[t.children.length-1]);a&&s&&(i.position={start:a,end:s}),o.push(i)}let l={type:"element",tagName:"table",properties:{},children:e.wrap(o,!0)};return e.patch(t,l),e.applyData(t,l)}function dm(e,t,n){let r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,i=l?l.length:t.children.length,a=-1,s=[];for(;++a<i;){let d=t.children[a],f={},u=l?l[a]:void 0;u&&(f.align=u);let h={type:"element",tagName:o,properties:f,children:[]};d&&(h.children=e.all(d),e.patch(d,h),h=e.applyData(d,h)),s.push(h)}let c={type:"element",tagName:"tr",properties:{},children:e.wrap(s,!0)};return e.patch(t,c),e.applyData(t,c)}function fm(e,t){let n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function um(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),o=0,l=[];for(;r;)l.push(Ji(t.slice(o,r.index),o>0,!0),r[0]),o=r.index+r[0].length,r=n.exec(t);return l.push(Ji(t.slice(o),o>0,!1)),l.join("")}function Ji(e,t,n){let r=0,o=e.length;if(t){let l=e.codePointAt(r);for(;l===9||l===32;)r++,l=e.codePointAt(r)}if(n){let l=e.codePointAt(o-1);for(;l===9||l===32;)o--,l=e.codePointAt(o-1)}return o>r?e.slice(r,o):""}function hm(e,t){let n={type:"text",value:um(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function pm(e,t){let n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const gm={blockquote:$g,break:Hg,code:Wg,delete:Zg,emphasis:Ug,footnoteReference:Vg,heading:Qg,html:Yg,imageReference:Jg,image:_g,inlineCode:em,linkReference:tm,link:nm,listItem:rm,list:im,paragraph:lm,root:am,strong:sm,table:cm,tableCell:fm,tableRow:dm,text:hm,thematicBreak:pm,toml:Ln,yaml:Ln,definition:Ln,footnoteDefinition:Ln};function Ln(){}function mm(e,t){let n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function ym(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function xm(e){let t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||mm,r=e.options.footnoteBackLabel||ym,o=e.options.footnoteLabel||"Footnotes",l=e.options.footnoteLabelTagName||"h2",i=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[],s=-1;for(;++s<e.footnoteOrder.length;){let c=e.footnoteById.get(e.footnoteOrder[s]);if(!c)continue;let d=e.all(c),f=String(c.identifier).toUpperCase(),u=Ut(f.toLowerCase()),h=0,p=[],T=e.footnoteCounts.get(f);for(;T!==void 0&&++h<=T;){p.length>0&&p.push({type:"text",value:" "});let F=typeof n=="string"?n:n(s,h);typeof F=="string"&&(F={type:"text",value:F}),p.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+u+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,h),className:["data-footnote-backref"]},children:Array.isArray(F)?F:[F]})}let b=d[d.length-1];if(b&&b.type==="element"&&b.tagName==="p"){let F=b.children[b.children.length-1];F&&F.type==="text"?F.value+=" ":b.children.push({type:"text",value:" "}),b.children.push(...p)}else d.push(...p);let y={type:"element",tagName:"li",properties:{id:t+"fn-"+u},children:e.wrap(d,!0)};e.patch(c,y),a.push(y)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:l,properties:{...gn(i),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const go={}.hasOwnProperty,bm={};function Tm(e,t){let n=t||bm,r=new Map,o=new Map,l={all:a,applyData:vm,definitionById:r,footnoteById:o,footnoteCounts:new Map,footnoteOrder:[],handlers:{...gm,...n.handlers},one:i,options:n,patch:wm,wrap:Bm};return Xo(e,function(s){if(s.type==="definition"||s.type==="footnoteDefinition"){let c=s.type==="definition"?r:o,d=String(s.identifier).toUpperCase();c.has(d)||c.set(d,s)}}),l;function i(s,c){let d=s.type,f=l.handlers[d];if(go.call(l.handlers,d)&&f)return f(l,s,c);if(l.options.passThrough&&l.options.passThrough.includes(d)){if("children"in s){let{children:u,...h}=s,p=gn(h);return p.children=l.all(s),p}return gn(s)}return(l.options.unknownHandler||km)(l,s,c)}function a(s){let c=[];if("children"in s){let d=s.children,f=-1;for(;++f<d.length;){let u=l.one(d[f],s);if(u){if(f&&d[f-1].type==="break"&&(!Array.isArray(u)&&u.type==="text"&&(u.value=_i(u.value)),!Array.isArray(u)&&u.type==="element")){let h=u.children[0];h&&h.type==="text"&&(h.value=_i(h.value))}Array.isArray(u)?c.push(...u):c.push(u)}}}return c}}function wm(e,t){e.position&&(t.position=Jl(e))}function vm(e,t){let n=t;if(e&&e.data){let r=e.data.hName,o=e.data.hChildren,l=e.data.hProperties;typeof r=="string"&&(n.type==="element"?n.tagName=r:n={type:"element",tagName:r,properties:{},children:"children"in n?n.children:[n]}),n.type==="element"&&l&&Object.assign(n.properties,gn(l)),"children"in n&&n.children&&o!=null&&(n.children=o)}return n}function km(e,t){let n=t.data||{},r="value"in t&&!(go.call(n,"hProperties")||go.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Bm(e,t){let n=[],r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function _i(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function el(e,t){let n=Tm(e,t),r=n.one(e,void 0),o=xm(n),l=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return o&&l.children.push({type:"text",value:`
`},o),l}function Em(e,t){return e&&"run"in e?async function(n,r){let o=el(n,{file:r,...t});await e.run(o,r)}:function(n,r){return el(n,{file:r,...e||t})}}function tl(e){if(e)throw e}var Am=re(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,o=Object.defineProperty,l=Object.getOwnPropertyDescriptor,i=function(f){return typeof Array.isArray=="function"?Array.isArray(f):r.call(f)==="[object Array]"},a=function(f){if(!f||r.call(f)!=="[object Object]")return!1;var u=n.call(f,"constructor"),h=f.constructor&&f.constructor.prototype&&n.call(f.constructor.prototype,"isPrototypeOf");if(f.constructor&&!u&&!h)return!1;for(var p in f);return p===void 0||n.call(f,p)},s=function(f,u){o&&u.name==="__proto__"?o(f,u.name,{enumerable:!0,configurable:!0,value:u.newValue,writable:!0}):f[u.name]=u.newValue},c=function(f,u){if(u==="__proto__"){if(!n.call(f,u))return;if(l)return l(f,u).value}return f[u]};t.exports=function d(){var f,u,h,p,T,b,y=arguments[0],F=1,B=arguments.length,C=!1;for(typeof y=="boolean"&&(C=y,y=arguments[1]||{},F=2),(y==null||typeof y!="object"&&typeof y!="function")&&(y={});F<B;++F)if(f=arguments[F],f!=null)for(u in f)h=c(y,u),p=c(f,u),y!==p&&(C&&p&&(a(p)||(T=i(p)))?(T?(T=!1,b=h&&i(h)?h:[]):b=h&&a(h)?h:{},s(y,{name:u,newValue:d(C,b,p)})):p!==void 0&&s(y,{name:u,newValue:p}));return y}}));function mo(e){if(typeof e!="object"||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Dm(){let e=[],t={run:n,use:r};return t;function n(...o){let l=-1,i=o.pop();if(typeof i!="function")throw TypeError("Expected function as last argument, not "+i);a(null,...o);function a(s,...c){let d=e[++l],f=-1;if(s){i(s);return}for(;++f<o.length;)(c[f]===null||c[f]===void 0)&&(c[f]=o[f]);o=c,d?Fm(d,a)(...c):i(null,...c)}}function r(o){if(typeof o!="function")throw TypeError("Expected `middelware` to be a function, not "+o);return e.push(o),t}}function Fm(e,t){let n;return r;function r(...i){let a=e.length>i.length,s;a&&i.push(o);try{s=e.apply(this,i)}catch(c){let d=c;if(a&&n)throw d;return o(d)}a||(s&&s.then&&typeof s.then=="function"?s.then(l,o):s instanceof Error?o(s):l(s))}function o(i,...a){n||(n=!0,t(i,...a))}function l(i){o(null,i)}}var be=class extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let o="",l={},i=!1;if(n&&(l="line"in n&&"column"in n||"start"in n&&"end"in n?{place:n}:"type"in n?{ancestors:[n],place:n.position}:{...n}),typeof t=="string"?o=t:!l.cause&&t&&(i=!0,o=t.message,l.cause=t),!l.ruleId&&!l.source&&typeof r=="string"){let s=r.indexOf(":");s===-1?l.ruleId=r:(l.source=r.slice(0,s),l.ruleId=r.slice(s+1))}if(!l.place&&l.ancestors&&l.ancestors){let s=l.ancestors[l.ancestors.length-1];s&&(l.place=s.position)}let a=l.place&&"start"in l.place?l.place.start:l.place;this.ancestors=l.ancestors||void 0,this.cause=l.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file,this.message=o,this.line=a?a.line:void 0,this.name=un(l.place)||"1:1",this.place=l.place||void 0,this.reason=this.message,this.ruleId=l.ruleId||void 0,this.source=l.source||void 0,this.stack=i&&l.cause&&typeof l.cause.stack=="string"?l.cause.stack:"",this.actual,this.expected,this.note,this.url}};be.prototype.file="",be.prototype.name="",be.prototype.reason="",be.prototype.message="",be.prototype.stack="",be.prototype.column=void 0,be.prototype.line=void 0,be.prototype.ancestors=void 0,be.prototype.cause=void 0,be.prototype.fatal=void 0,be.prototype.place=void 0,be.prototype.ruleId=void 0,be.prototype.source=void 0;const qe={basename:Nm,dirname:Om,extname:Rm,join:Cm,sep:"/"};function Nm(e,t){if(t!==void 0&&typeof t!="string")throw TypeError('"ext" argument must be a string');An(e);let n=0,r=-1,o=e.length,l;if(t===void 0||t.length===0||t.length>e.length){for(;o--;)if(e.codePointAt(o)===47){if(l){n=o+1;break}}else r<0&&(l=!0,r=o+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let i=-1,a=t.length-1;for(;o--;)if(e.codePointAt(o)===47){if(l){n=o+1;break}}else i<0&&(l=!0,i=o+1),a>-1&&(e.codePointAt(o)===t.codePointAt(a--)?a<0&&(r=o):(a=-1,r=i));return n===r?r=i:r<0&&(r=e.length),e.slice(n,r)}function Om(e){if(An(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||=!0;return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function Rm(e){An(e);let t=e.length,n=-1,r=0,o=-1,l=0,i;for(;t--;){let a=e.codePointAt(t);if(a===47){if(i){r=t+1;break}continue}n<0&&(i=!0,n=t+1),a===46?o<0?o=t:l!==1&&(l=1):o>-1&&(l=-1)}return o<0||n<0||l===0||l===1&&o===n-1&&o===r+1?"":e.slice(o,n)}function Cm(...e){let t=-1,n;for(;++t<e.length;)An(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":Lm(n)}function Lm(e){An(e);let t=e.codePointAt(0)===47,n=Im(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function Im(e,t){let n="",r=0,o=-1,l=0,i=-1,a,s;for(;++i<=e.length;){if(i<e.length)a=e.codePointAt(i);else{if(a===47)break;a=47}if(a===47){if(!(o===i-1||l===1))if(o!==i-1&&l===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(s=n.lastIndexOf("/"),s!==n.length-1){s<0?(n="",r=0):(n=n.slice(0,s),r=n.length-1-n.lastIndexOf("/")),o=i,l=0;continue}}else if(n.length>0){n="",r=0,o=i,l=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(o+1,i):n=e.slice(o+1,i),r=i-o-1;o=i,l=0}else a===46&&l>-1?l++:l=-1}return n}function An(e){if(typeof e!="string")throw TypeError("Path must be a string. Received "+JSON.stringify(e))}const Sm={cwd:Pm};function Pm(){return"/"}function yo(e){return!!(typeof e=="object"&&e&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function zm(e){if(typeof e=="string")e=new URL(e);else if(!yo(e)){let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){let t=TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return Mm(e)}function Mm(e){if(e.hostname!==""){let r=TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let r=t.codePointAt(n+2);if(r===70||r===102){let o=TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(t)}const Pr=["history","path","basename","stem","extname","dirname"];var Gm=class{constructor(t){let n;n=t?yo(t)?{path:t}:typeof t=="string"||qm(t)?{value:t}:t:{},this.cwd="cwd"in n?"":Sm.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Pr.length;){let l=Pr[r];l in n&&n[l]!==void 0&&n[l]!==null&&(this[l]=l==="history"?[...n[l]]:n[l])}let o;for(o in n)Pr.includes(o)||(this[o]=n[o])}get basename(){return typeof this.path=="string"?qe.basename(this.path):void 0}set basename(t){Mr(t,"basename"),zr(t,"basename"),this.path=qe.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?qe.dirname(this.path):void 0}set dirname(t){nl(this.basename,"dirname"),this.path=qe.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?qe.extname(this.path):void 0}set extname(t){if(zr(t,"extname"),nl(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw Error("`extname` must start with `.`");if(t.includes(".",1))throw Error("`extname` cannot contain multiple dots")}this.path=qe.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){yo(t)&&(t=zm(t)),Mr(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?qe.basename(this.path,this.extname):void 0}set stem(t){Mr(t,"stem"),zr(t,"stem"),this.path=qe.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){let o=this.message(t,n,r);throw o.fatal=!0,o}info(t,n,r){let o=this.message(t,n,r);return o.fatal=void 0,o}message(t,n,r){let o=new be(t,n,r);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}};function zr(e,t){if(e&&e.includes(qe.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+qe.sep+"`")}function Mr(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function nl(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}function qm(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Km=(function(e){let t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r});var Gr=je(Am());const Xm={}.hasOwnProperty,jm=new class ns extends Km{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Dm()}copy(){let t=new ns,n=-1;for(;++n<this.attachers.length;){let r=this.attachers[n];t.use(...r)}return t.data((0,Gr.default)(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Xr("data",this.frozen),this.namespace[t]=n,this):Xm.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Xr("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;let t=this;for(;++this.freezeIndex<this.attachers.length;){let[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);let o=n.call(t,...r);typeof o=="function"&&this.transformers.use(o)}return this.frozen=!0,this.freezeIndex=1/0,this}parse(t){this.freeze();let n=In(t),r=this.parser||this.Parser;return qr("parse",r),r(String(n),n)}process(t,n){let r=this;return this.freeze(),qr("process",this.parser||this.Parser),Kr("process",this.compiler||this.Compiler),n?o(void 0,n):new Promise(o);function o(l,i){let a=In(t),s=r.parse(a);r.run(s,a,function(d,f,u){if(d||!f||!u)return c(d);let h=f,p=r.stringify(h,u);Hm(p)?u.value=p:u.result=p,c(d,u)});function c(d,f){d||!f?i(d):l?l(f):n(void 0,f)}}}processSync(t){let n=!1,r;return this.freeze(),qr("processSync",this.parser||this.Parser),Kr("processSync",this.compiler||this.Compiler),this.process(t,o),ol("processSync","process",n),r;function o(l,i){n=!0,tl(l),r=i}}run(t,n,r){rl(t),this.freeze();let o=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?l(void 0,r):new Promise(l);function l(i,a){let s=In(n);o.run(t,s,c);function c(d,f,u){let h=f||t;d?a(d):i?i(h):r(void 0,h,u)}}}runSync(t,n){let r=!1,o;return this.run(t,n,l),ol("runSync","run",r),o;function l(i,a){tl(i),o=a,r=!0}}stringify(t,n){this.freeze();let r=In(n),o=this.compiler||this.Compiler;return Kr("stringify",o),rl(t),o(t,r)}use(t,...n){let r=this.attachers,o=this.namespace;if(Xr("use",this.frozen),t!=null)if(typeof t=="function")s(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):i(t);else throw TypeError("Expected usable value, not `"+t+"`");return this;function l(c){if(typeof c=="function")s(c,[]);else if(typeof c=="object")if(Array.isArray(c)){let[d,...f]=c;s(d,f)}else i(c);else throw TypeError("Expected usable value, not `"+c+"`")}function i(c){if(!("plugins"in c)&&!("settings"in c))throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(c.plugins),c.settings&&(o.settings=(0,Gr.default)(!0,o.settings,c.settings))}function a(c){let d=-1;if(c!=null)if(Array.isArray(c))for(;++d<c.length;){let f=c[d];l(f)}else throw TypeError("Expected a list of plugins, not `"+c+"`")}function s(c,d){let f=-1,u=-1;for(;++f<r.length;)if(r[f][0]===c){u=f;break}if(u===-1)r.push([c,...d]);else if(d.length>0){let[h,...p]=d,T=r[u][1];mo(T)&&mo(h)&&(h=(0,Gr.default)(!0,T,h)),r[u]=[c,h,...p]}}}}().freeze();function qr(e,t){if(typeof t!="function")throw TypeError("Cannot `"+e+"` without `parser`")}function Kr(e,t){if(typeof t!="function")throw TypeError("Cannot `"+e+"` without `compiler`")}function Xr(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function rl(e){if(!mo(e)||typeof e.type!="string")throw TypeError("Expected node, got `"+e+"`")}function ol(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function In(e){return $m(e)?e:new Gm(e)}function $m(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Hm(e){return typeof e=="string"||Wm(e)}function Wm(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}function Ie(e,t){if(e===void 0||e==null){let n=typeof t=="function"?t():t;throw Error(n??`Expected defined value, but received ${e}`)}return e}function z(e,t){if(!e)throw Error(t??"Invariant failed")}function rs(e){throw Error(`NonExhaustive value: ${e}`)}var os=je(Sd());function xo(e,t){return e===t?0:Le(e)?Le(t)?(0,os.default)(e,t):1:Le(t)?-1:0}function Zm(e=".",t=!1){return(n,r)=>{if(n===r)return 0;if(!n)return-1;if(!r)return 1;let o=n.split(e),l=r.split(e),i=Math.min(o.length,l.length);for(let s=0;s<i;s++){let c=o[s],d=l[s],f=(0,os.default)(c,d);if(f!==0)return f}let a=o.length-l.length;return t?-1*a:a}}function Ho(e){return e!=null&&typeof e=="string"}function T5(e){return!!e&&Array.isArray(e)&&e.length>0}function is(e,t){return z(typeof t=="string","Path must be string"),typeof e=="object"&&!!e&&e[t]!=null}function Um(e){return t=>is(t,e)}function w5(...e){if(e.length===1&&typeof e[0]=="string")return Um(e[0]);let[t,n]=e;return is(t,n)}function Xn(e){let t=e.lastIndexOf(".");return t>0?e.slice(0,t):null}function ls(e){let t=e.lastIndexOf(".");return t>0?e.slice(t+1):e}const hn=e=>Ho(e)?e:e.id;function Ee(e,t){let n=hn(e);return t?hn(t).startsWith(n+"."):r=>{let o=hn(r);return n.startsWith(o+".")}}function Wo(e,t){if(!t)return o=>Wo(e,o);let n=hn(e),r=hn(t);return n===r||r.startsWith(n+".")||n.startsWith(r+".")}function as(e,t){return n=>Ee(e,n)}function rr(e){return(Ho(e)?e:e.id).split(".").length}function Dn(e,t){let n=e.split(".");if(n.length<2)return null;let r=t.split(".");if(r.length<2)return null;let o=[];for(let l=0;l<Math.min(n.length,r.length)-1&&n[l]===r[l];l++)o.push(n[l]);return o.length===0?null:o.join(".")}function Gt(e){let t=e.split(".");if(t.pop(),!Xe(t,2))return t;for(let n=1;n<t.length;n++)t[n]=t[n-1]+"."+t[n];return t.reverse()}function Vm(e,t){let n=t;for(let r of e)r!==n&&Ee(r,n)&&(n=r);return n===t?null:n}function yn(e){let t=[],n=[...e],r;for(;r=n.shift();){let o;for(;o=Vm(n,r);)t.push(...n.splice(n.indexOf(o),1));t.push(r)}return t}function ss(e,t){if(!e||Ho(e)){let r=e??"asc";return o=>ss(o,r)}let n=t==="desc"?-1:1;return e.map(r=>({item:r,fqn:r.id.split(".")})).sort((r,o)=>{if(r.fqn.length!==o.fqn.length)return(r.fqn.length-o.fqn.length)*n;for(let l=0;l<r.fqn.length;l++){let i=xo(r.fqn[l],o.fqn[l]);if(i!==0)return i}return 0}).map(({item:r})=>r)}function Qm(e,t,n){let r=e.get(t);return r||(r=n(t),e.set(t,r)),r}function Tt(e,t){let n=t??e;z(sr(n));function*r(o){for(let l of o)n(l)&&(yield l)}return t?r(e):r}function Ym(e,t){let n=t??e;z(sr(n));function r(o){for(let l of o)if(n(l))return l}return t?r(e):r}function v5(e,t){let n=e;z(n>=0,"Count must be a non-negative number");function*r(o){let l=0;for(let i of o){if(l>=n)break;yield i,l++}}return t===void 0?o=>r(o):r(e)}function xn(e){return e?il(e):il}function il(e){let{value:t}=e[Symbol.iterator]().next();return t}function Jm(e,t){let n=e;z(sr(n));function*r(o){for(let l of o)yield n(l)}return t?r(e):r}function _m(e,t){let n=t??e;z(sr(n));function r(o){for(let l of o)if(n(l))return!0;return!1}return t?r(e):r}function ll(e){return e?Array.from(e):t=>Array.from(t)}function e2(e){return e?new Set(e):t=>new Set(t)}function U(e,t,n){let r=typeof t=="symbol"?t:Symbol.for(t);return e.hasOwnProperty(r)||Object.defineProperty(e,r,{enumerable:!1,writable:!1,value:n()}),e[r]}function k5(...e){let t=100;return e.length===2?t=id(e[0],e[1]):e.length===1&&(t=e[0]),new Promise(n=>{setTimeout(()=>{n("LIKEC4_DELAY")},t??100)})}function bo(...e){let t=new Set;for(let n of e)for(let r of n)t.add(r);return t}function Xt(e,...t){let n=new Set;if(e.size===0)return n;let r=Xe(t,2)?(0,Zl.intersection)(...t):t[0];if(r.size===0)return n;for(let o of e)r.has(o)&&n.add(o);return n}function To(e,t){if(e.size===0)return new Set;if(t.size===0)return new Set(e);let n=new Set;for(let r of e)t.has(r)||n.add(r);return n}function wo(e,t){return e.size===t.size&&[...e].every(n=>t.has(n))}function t2(e,t){return(0,Zl.symmetricDifference)(e,t)}function n2(e){return z(typeof e=="object"&&Hc(e),"objectHash: value must be an object"),Xd(e)}function cs(e){let t=5381,n=e.length;z(n>0,"stringHash: empty string");for(let r=0;r<n;r++)t=t*33^e.charCodeAt(r);return(t>>>0).toString(36)}function r2(){return jm().use(jg).use(zg).use(qg).use(Em,{allowDangerousHtml:!0}).use(nf,Pl({attributes:{"*":["className"],svg:["width","height","viewBox","fill","ariaHidden"],path:["d","fill","stroke","strokeWidth","strokeLinecap","strokeLinejoin"]},tagNames:["svg","g","path","div"]},lo)).use(Tu,{allowDangerousHtml:!0})}function o2(e){return(""+r2().processSync(e)).trim()}function i2(e){return hr(Na(e),{includeHtml:!1,includeImageAlt:!1})}const l2={tomato9:"#e54d2e"},a2={red9:"#e5484d"},s2={ruby9:"#e54666"},c2={crimson9:"#e93d82"},d2={pink9:"#d6409f"},f2={purple9:"#8e4ec6"},u2={violet9:"#6e56cf"},h2={indigo9:"#3e63dd"},p2={blue9:"#0090ff"},g2={teal9:"#12a594"},m2={grass9:"#46a758"},y2={lime9:"#bdee63"},x2={yellow9:"#ffe629"},b2={amber9:"#ffc53d"},T2={orange9:"#f76b15"},{min:w2,max:v2}=Math;var wt=(e,t=0,n=1)=>w2(v2(t,e),n),Zo=e=>{e._clipped=!1,e._unclipped=e.slice(0);for(let t=0;t<=3;t++)t<3?((e[t]<0||e[t]>255)&&(e._clipped=!0),e[t]=wt(e[t],0,255)):t===3&&(e[t]=wt(e[t],0,1));return e};const ds={};for(let e of["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"])ds[`[object ${e}]`]=e.toLowerCase();function $(e){return ds[Object.prototype.toString.call(e)]||"object"}var K=(e,t=null)=>e.length>=3?Array.prototype.slice.call(e):$(e[0])=="object"&&t?t.split("").filter(n=>e[0][n]!==void 0).map(n=>e[0][n]):e[0].slice(0),Vt=e=>{if(e.length<2)return null;let t=e.length-1;return $(e[t])=="string"?e[t].toLowerCase():null};const{PI:yr,min:fs,max:us}=Math,Ne=e=>Math.round(e*100)/100,vo=e=>Math.round(e*100)/100,Qe=yr*2,jr=yr/3,k2=yr/180,B2=180/yr;function hs(e){return[...e.slice(0,3).reverse(),...e.slice(3)]}var q={format:{},autodetect:[]},A=class{constructor(...t){let n=this;if($(t[0])==="object"&&t[0].constructor&&t[0].constructor===this.constructor)return t[0];let r=Vt(t),o=!1;if(!r){o=!0,q.sorted||=(q.autodetect=q.autodetect.sort((l,i)=>i.p-l.p),!0);for(let l of q.autodetect)if(r=l.test(...t),r)break}if(q.format[r])n._rgb=Zo(q.format[r].apply(null,o?t:t.slice(0,-1)));else throw Error("unknown format: "+t);n._rgb.length===3&&n._rgb.push(1)}toString(){return $(this.hex)=="function"?this.hex():`[${this._rgb.join(",")}]`}};const W=(...e)=>new A(...e);W.version="3.2.0";const It={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},E2=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,A2=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,ps=e=>{if(e.match(E2)){(e.length===4||e.length===7)&&(e=e.substr(1)),e.length===3&&(e=e.split(""),e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);let t=parseInt(e,16);return[t>>16,t>>8&255,t&255,1]}if(e.match(A2)){(e.length===5||e.length===9)&&(e=e.substr(1)),e.length===4&&(e=e.split(""),e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);let t=parseInt(e,16);return[t>>24&255,t>>16&255,t>>8&255,Math.round((t&255)/255*100)/100]}throw Error(`unknown hex color: ${e}`)},{round:Sn}=Math,gs=(...e)=>{let[t,n,r,o]=K(e,"rgba"),l=Vt(e)||"auto";o===void 0&&(o=1),l==="auto"&&(l=o<1?"rgba":"rgb"),t=Sn(t),n=Sn(n),r=Sn(r);let i="000000"+(t<<16|n<<8|r).toString(16);i=i.substr(i.length-6);let a="0"+Sn(o*255).toString(16);switch(a=a.substr(a.length-2),l.toLowerCase()){case"rgba":return`#${i}${a}`;case"argb":return`#${a}${i}`;default:return`#${i}`}};A.prototype.name=function(){let e=gs(this._rgb,"rgb");for(let t of Object.keys(It))if(It[t]===e)return t.toLowerCase();return e},q.format.named=e=>{if(e=e.toLowerCase(),It[e])return ps(It[e]);throw Error("unknown color name: "+e)},q.autodetect.push({p:5,test:(e,...t)=>{if(!t.length&&$(e)==="string"&&It[e.toLowerCase()])return"named"}}),A.prototype.alpha=function(e,t=!1){return e!==void 0&&$(e)==="number"?t?(this._rgb[3]=e,this):new A([this._rgb[0],this._rgb[1],this._rgb[2],e],"rgb"):this._rgb[3]},A.prototype.clipped=function(){return this._rgb._clipped||!1};const Ke={Kn:18,labWhitePoint:"d65",Xn:.95047,Yn:1,Zn:1.08883,kE:216/24389,kKE:8,kK:24389/27,RefWhiteRGB:{X:.95047,Y:1,Z:1.08883},MtxRGB2XYZ:{m00:.4124564390896922,m01:.21267285140562253,m02:.0193338955823293,m10:.357576077643909,m11:.715152155287818,m12:.11919202588130297,m20:.18043748326639894,m21:.07217499330655958,m22:.9503040785363679},MtxXYZ2RGB:{m00:3.2404541621141045,m01:-.9692660305051868,m02:.055643430959114726,m10:-1.5371385127977166,m11:1.8760108454466942,m12:-.2040259135167538,m20:-.498531409556016,m21:.041556017530349834,m22:1.0572251882231791},As:.9414285350000001,Bs:1.040417467,Cs:1.089532651,MtxAdaptMa:{m00:.8951,m01:-.7502,m02:.0389,m10:.2664,m11:1.7135,m12:-.0685,m20:-.1614,m21:.0367,m22:1.0296},MtxAdaptMaI:{m00:.9869929054667123,m01:.43230526972339456,m02:-.008528664575177328,m10:-.14705425642099013,m11:.5183602715367776,m12:.04004282165408487,m20:.15996265166373125,m21:.0492912282128556,m22:.9684866957875502}},D2=new Map([["a",[1.0985,.35585]],["b",[1.0985,.35585]],["c",[.98074,1.18232]],["d50",[.96422,.82521]],["d55",[.95682,.92149]],["d65",[.95047,1.08883]],["e",[1,1,1]],["f2",[.99186,.67393]],["f7",[.95041,1.08747]],["f11",[1.00962,.6435]],["icc",[.96422,.82521]]]);function Ye(e){let t=D2.get(String(e).toLowerCase());if(!t)throw Error("unknown Lab illuminant "+e);Ke.labWhitePoint=e,Ke.Xn=t[0],Ke.Zn=t[1]}function bn(){return Ke.labWhitePoint}const Uo=(...e)=>{e=K(e,"lab");let[t,n,r]=e,[o,l,i]=F2(t,n,r),[a,s,c]=ms(o,l,i);return[a,s,c,e.length>3?e[3]:1]},F2=(e,t,n)=>{let{kE:r,kK:o,kKE:l,Xn:i,Yn:a,Zn:s}=Ke,c=(e+16)/116,d=.002*t+c,f=c-.005*n,u=d*d*d,h=f*f*f,p=u>r?u:(116*d-16)/o,T=e>l?((e+16)/116)**3:e/o,b=h>r?h:(116*f-16)/o;return[p*i,T*a,b*s]},$r=e=>{let t=Math.sign(e);return e=Math.abs(e),(e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055)*t},ms=(e,t,n)=>{let{MtxAdaptMa:r,MtxAdaptMaI:o,MtxXYZ2RGB:l,RefWhiteRGB:i,Xn:a,Yn:s,Zn:c}=Ke,d=a*r.m00+s*r.m10+c*r.m20,f=a*r.m01+s*r.m11+c*r.m21,u=a*r.m02+s*r.m12+c*r.m22,h=i.X*r.m00+i.Y*r.m10+i.Z*r.m20,p=i.X*r.m01+i.Y*r.m11+i.Z*r.m21,T=i.X*r.m02+i.Y*r.m12+i.Z*r.m22,b=(e*r.m00+t*r.m10+n*r.m20)*(h/d),y=(e*r.m01+t*r.m11+n*r.m21)*(p/f),F=(e*r.m02+t*r.m12+n*r.m22)*(T/u),B=b*o.m00+y*o.m10+F*o.m20,C=b*o.m01+y*o.m11+F*o.m21,S=b*o.m02+y*o.m12+F*o.m22,k=$r(B*l.m00+C*l.m10+S*l.m20),L=$r(B*l.m01+C*l.m11+S*l.m21),w=$r(B*l.m02+C*l.m12+S*l.m22);return[k*255,L*255,w*255]},Vo=(...e)=>{let[t,n,r,...o]=K(e,"rgb"),[l,i,a]=ys(t,n,r),[s,c,d]=N2(l,i,a);return[s,c,d,...o.length>0&&o[0]<1?[o[0]]:[]]};function N2(e,t,n){let{Xn:r,Yn:o,Zn:l,kE:i,kK:a}=Ke,s=e/r,c=t/o,d=n/l,f=s>i?s**(1/3):(a*s+16)/116,u=c>i?c**(1/3):(a*c+16)/116,h=d>i?d**(1/3):(a*d+16)/116;return[116*u-16,500*(f-u),200*(u-h)]}function Hr(e){let t=Math.sign(e);return e=Math.abs(e),(e<=.04045?e/12.92:((e+.055)/1.055)**2.4)*t}const ys=(e,t,n)=>{e=Hr(e/255),t=Hr(t/255),n=Hr(n/255);let{MtxRGB2XYZ:r,MtxAdaptMa:o,MtxAdaptMaI:l,Xn:i,Yn:a,Zn:s,As:c,Bs:d,Cs:f}=Ke,u=e*r.m00+t*r.m10+n*r.m20,h=e*r.m01+t*r.m11+n*r.m21,p=e*r.m02+t*r.m12+n*r.m22,T=i*o.m00+a*o.m10+s*o.m20,b=i*o.m01+a*o.m11+s*o.m21,y=i*o.m02+a*o.m12+s*o.m22,F=u*o.m00+h*o.m10+p*o.m20,B=u*o.m01+h*o.m11+p*o.m21,C=u*o.m02+h*o.m12+p*o.m22;return F*=T/c,B*=b/d,C*=y/f,u=F*l.m00+B*l.m10+C*l.m20,h=F*l.m01+B*l.m11+C*l.m21,p=F*l.m02+B*l.m12+C*l.m22,[u,h,p]};A.prototype.lab=function(){return Vo(this._rgb)};const O2=(...e)=>new A(...e,"lab");Object.assign(W,{lab:O2,getLabWhitePoint:bn,setLabWhitePoint:Ye}),q.format.lab=Uo,q.autodetect.push({p:2,test:(...e)=>{if(e=K(e,"lab"),$(e)==="array"&&e.length===3)return"lab"}}),A.prototype.darken=function(e=1){let t=this,n=t.lab();return n[0]-=Ke.Kn*e,new A(n,"lab").alpha(t.alpha(),!0)},A.prototype.brighten=function(e=1){return this.darken(-e)},A.prototype.darker=A.prototype.darken,A.prototype.brighter=A.prototype.brighten,A.prototype.get=function(e){let[t,n]=e.split("."),r=this[t]();if(n){let o=t.indexOf(n)-(t.substr(0,2)==="ok"?2:0);if(o>-1)return r[o];throw Error(`unknown channel ${n} in mode ${t}`)}else return r};const{pow:R2}=Math;A.prototype.luminance=function(e,t="rgb"){if(e!==void 0&&$(e)==="number"){if(e===0)return new A([0,0,0,this._rgb[3]],"rgb");if(e===1)return new A([255,255,255,this._rgb[3]],"rgb");let n=this.luminance(),r=20,o=(l,i)=>{let a=l.interpolate(i,.5,t),s=a.luminance();return Math.abs(e-s)<1e-7||!r--?a:s>e?o(l,a):o(a,i)};return new A([...(n>e?o(new A([0,0,0]),this):o(this,new A([255,255,255]))).rgb(),this._rgb[3]])}return C2(...this._rgb.slice(0,3))};const C2=(e,t,n)=>(e=Wr(e),t=Wr(t),n=Wr(n),.2126*e+.7152*t+.0722*n),Wr=e=>(e/=255,e<=.03928?e/12.92:R2((e+.055)/1.055,2.4));var pe={},jt=(e,t,n=.5,...r)=>{let o=r[0]||"lrgb";if(!pe[o]&&!r.length&&(o=Object.keys(pe)[0]),!pe[o])throw Error(`interpolation mode ${o} is not defined`);return $(e)!=="object"&&(e=new A(e)),$(t)!=="object"&&(t=new A(t)),pe[o](e,t,n).alpha(e.alpha()+n*(t.alpha()-e.alpha()))};A.prototype.mix=A.prototype.interpolate=function(e,t=.5,...n){return jt(this,e,t,...n)},A.prototype.premultiply=function(e=!1){let t=this._rgb,n=t[3];return e?(this._rgb=[t[0]*n,t[1]*n,t[2]*n,n],this):new A([t[0]*n,t[1]*n,t[2]*n,n],"rgb")};const{sin:L2,cos:I2}=Math,xs=(...e)=>{let[t,n,r]=K(e,"lch");return isNaN(r)&&(r=0),r*=k2,[t,I2(r)*n,L2(r)*n]},Qo=(...e)=>{e=K(e,"lch");let[t,n,r]=e,[o,l,i]=xs(t,n,r),[a,s,c]=Uo(o,l,i);return[a,s,c,e.length>3?e[3]:1]},S2=(...e)=>Qo(...hs(K(e,"hcl"))),{sqrt:P2,atan2:z2,round:M2}=Math,bs=(...e)=>{let[t,n,r]=K(e,"lab"),o=P2(n*n+r*r),l=(z2(r,n)*B2+360)%360;return M2(o*1e4)===0&&(l=NaN),[t,o,l]},ko=(...e)=>{let[t,n,r,...o]=K(e,"rgb"),[l,i,a]=Vo(t,n,r),[s,c,d]=bs(l,i,a);return[s,c,d,...o.length>0&&o[0]<1?[o[0]]:[]]};A.prototype.lch=function(){return ko(this._rgb)},A.prototype.hcl=function(){return hs(ko(this._rgb))};const G2=(...e)=>new A(...e,"lch"),q2=(...e)=>new A(...e,"hcl");Object.assign(W,{lch:G2,hcl:q2}),q.format.lch=Qo,q.format.hcl=S2,["lch","hcl"].forEach(e=>q.autodetect.push({p:2,test:(...t)=>{if(t=K(t,e),$(t)==="array"&&t.length===3)return e}})),A.prototype.saturate=function(e=1){let t=this,n=t.lch();return n[1]+=Ke.Kn*e,n[1]<0&&(n[1]=0),new A(n,"lch").alpha(t.alpha(),!0)},A.prototype.desaturate=function(e=1){return this.saturate(-e)},A.prototype.set=function(e,t,n=!1){let[r,o]=e.split("."),l=this[r]();if(o){let i=r.indexOf(o)-(r.substr(0,2)==="ok"?2:0);if(i>-1){if($(t)=="string")switch(t.charAt(0)){case"+":l[i]+=+t;break;case"-":l[i]+=+t;break;case"*":l[i]*=+t.substr(1);break;case"/":l[i]/=+t.substr(1);break;default:l[i]=+t}else if($(t)==="number")l[i]=t;else throw Error("unsupported value for Color.set");let a=new A(l,r);return n?(this._rgb=a._rgb,this):a}throw Error(`unknown channel ${o} in mode ${r}`)}else return l},A.prototype.tint=function(e=.5,...t){return jt(this,"white",e,...t)},A.prototype.shade=function(e=.5,...t){return jt(this,"black",e,...t)};const K2=(e,t,n)=>{let r=e._rgb,o=t._rgb;return new A(r[0]+n*(o[0]-r[0]),r[1]+n*(o[1]-r[1]),r[2]+n*(o[2]-r[2]),"rgb")};pe.rgb=K2;const{sqrt:Zr,pow:Ot}=Math,X2=(e,t,n)=>{let[r,o,l]=e._rgb,[i,a,s]=t._rgb;return new A(Zr(Ot(r,2)*(1-n)+Ot(i,2)*n),Zr(Ot(o,2)*(1-n)+Ot(a,2)*n),Zr(Ot(l,2)*(1-n)+Ot(s,2)*n),"rgb")};pe.lrgb=X2;const j2=(e,t,n)=>{let r=e.lab(),o=t.lab();return new A(r[0]+n*(o[0]-r[0]),r[1]+n*(o[1]-r[1]),r[2]+n*(o[2]-r[2]),"lab")};pe.lab=j2;var Qt=(e,t,n,r)=>{let o,l;r==="hsl"?(o=e.hsl(),l=t.hsl()):r==="hsv"?(o=e.hsv(),l=t.hsv()):r==="hcg"?(o=e.hcg(),l=t.hcg()):r==="hsi"?(o=e.hsi(),l=t.hsi()):r==="lch"||r==="hcl"?(r="hcl",o=e.hcl(),l=t.hcl()):r==="oklch"&&(o=e.oklch().reverse(),l=t.oklch().reverse());let i,a,s,c,d,f;(r.substr(0,1)==="h"||r==="oklch")&&([i,s,d]=o,[a,c,f]=l);let u,h,p,T;return!isNaN(i)&&!isNaN(a)?(T=a>i&&a-i>180?a-(i+360):a<i&&i-a>180?a+360-i:a-i,h=i+n*T):isNaN(i)?isNaN(a)?h=NaN:(h=a,(d==1||d==0)&&r!="hsv"&&(u=c)):(h=i,(f==1||f==0)&&r!="hsv"&&(u=s)),u===void 0&&(u=s+n*(c-s)),p=d+n*(f-d),r==="oklch"?new A([p,u,h],r):new A([h,u,p],r)};const al=(e,t,n)=>Qt(e,t,n,"lch");pe.lch=al,pe.hcl=al;const $2=e=>{if($(e)=="number"&&e>=0&&e<=16777215)return[e>>16,e>>8&255,e&255,1];throw Error("unknown num color: "+e)},H2=(...e)=>{let[t,n,r]=K(e,"rgb");return(t<<16)+(n<<8)+r};A.prototype.num=function(){return H2(this._rgb)};const W2=(...e)=>new A(...e,"num");Object.assign(W,{num:W2}),q.format.num=$2,q.autodetect.push({p:5,test:(...e)=>{if(e.length===1&&$(e[0])==="number"&&e[0]>=0&&e[0]<=16777215)return"num"}});const Z2=(e,t,n)=>{let r=e.num();return new A(r+n*(t.num()-r),"num")};pe.num=Z2;const{floor:U2}=Math,V2=(...e)=>{e=K(e,"hcg");let[t,n,r]=e,o,l,i;r*=255;let a=n*255;if(n===0)o=l=i=r;else{t===360&&(t=0),t>360&&(t-=360),t<0&&(t+=360),t/=60;let s=U2(t),c=t-s,d=r*(1-n),f=d+a*(1-c),u=d+a*c,h=d+a;switch(s){case 0:[o,l,i]=[h,u,d];break;case 1:[o,l,i]=[f,h,d];break;case 2:[o,l,i]=[d,h,u];break;case 3:[o,l,i]=[d,f,h];break;case 4:[o,l,i]=[u,d,h];break;case 5:[o,l,i]=[h,d,f];break}}return[o,l,i,e.length>3?e[3]:1]},Q2=(...e)=>{let[t,n,r]=K(e,"rgb"),o=fs(t,n,r),l=us(t,n,r),i=l-o,a=i*100/255,s=o/(255-i)*100,c;return i===0?c=NaN:(t===l&&(c=(n-r)/i),n===l&&(c=2+(r-t)/i),r===l&&(c=4+(t-n)/i),c*=60,c<0&&(c+=360)),[c,a,s]};A.prototype.hcg=function(){return Q2(this._rgb)};const Y2=(...e)=>new A(...e,"hcg");W.hcg=Y2,q.format.hcg=V2,q.autodetect.push({p:1,test:(...e)=>{if(e=K(e,"hcg"),$(e)==="array"&&e.length===3)return"hcg"}});const J2=(e,t,n)=>Qt(e,t,n,"hcg");pe.hcg=J2;const{cos:Rt}=Math,_2=(...e)=>{e=K(e,"hsi");let[t,n,r]=e,o,l,i;return isNaN(t)&&(t=0),isNaN(n)&&(n=0),t>360&&(t-=360),t<0&&(t+=360),t/=360,t<1/3?(i=(1-n)/3,o=(1+n*Rt(Qe*t)/Rt(jr-Qe*t))/3,l=1-(i+o)):t<2/3?(t-=1/3,o=(1-n)/3,l=(1+n*Rt(Qe*t)/Rt(jr-Qe*t))/3,i=1-(o+l)):(t-=2/3,l=(1-n)/3,i=(1+n*Rt(Qe*t)/Rt(jr-Qe*t))/3,o=1-(l+i)),o=wt(r*o*3),l=wt(r*l*3),i=wt(r*i*3),[o*255,l*255,i*255,e.length>3?e[3]:1]},{min:e0,sqrt:t0,acos:n0}=Math,r0=(...e)=>{let[t,n,r]=K(e,"rgb");t/=255,n/=255,r/=255;let o,l=e0(t,n,r),i=(t+n+r)/3,a=i>0?1-l/i:0;return a===0?o=NaN:(o=(t-n+(t-r))/2,o/=t0((t-n)*(t-n)+(t-r)*(n-r)),o=n0(o),r>n&&(o=Qe-o),o/=Qe),[o*360,a,i]};A.prototype.hsi=function(){return r0(this._rgb)};const o0=(...e)=>new A(...e,"hsi");W.hsi=o0,q.format.hsi=_2,q.autodetect.push({p:2,test:(...e)=>{if(e=K(e,"hsi"),$(e)==="array"&&e.length===3)return"hsi"}});const i0=(e,t,n)=>Qt(e,t,n,"hsi");pe.hsi=i0;const Bo=(...e)=>{e=K(e,"hsl");let[t,n,r]=e,o,l,i;if(n===0)o=l=i=r*255;else{let a=[0,0,0],s=[0,0,0],c=r<.5?r*(1+n):r+n-r*n,d=2*r-c,f=t/360;a[0]=f+1/3,a[1]=f,a[2]=f-1/3;for(let u=0;u<3;u++)a[u]<0&&(a[u]+=1),a[u]>1&&--a[u],6*a[u]<1?s[u]=d+(c-d)*6*a[u]:2*a[u]<1?s[u]=c:3*a[u]<2?s[u]=d+(c-d)*(2/3-a[u])*6:s[u]=d;[o,l,i]=[s[0]*255,s[1]*255,s[2]*255]}return e.length>3?[o,l,i,e[3]]:[o,l,i,1]},Ts=(...e)=>{e=K(e,"rgba");let[t,n,r]=e;t/=255,n/=255,r/=255;let o=fs(t,n,r),l=us(t,n,r),i=(l+o)/2,a,s;return l===o?(a=0,s=NaN):a=i<.5?(l-o)/(l+o):(l-o)/(2-l-o),t==l?s=(n-r)/(l-o):n==l?s=2+(r-t)/(l-o):r==l&&(s=4+(t-n)/(l-o)),s*=60,s<0&&(s+=360),e.length>3&&e[3]!==void 0?[s,a,i,e[3]]:[s,a,i]};A.prototype.hsl=function(){return Ts(this._rgb)};const l0=(...e)=>new A(...e,"hsl");W.hsl=l0,q.format.hsl=Bo,q.autodetect.push({p:2,test:(...e)=>{if(e=K(e,"hsl"),$(e)==="array"&&e.length===3)return"hsl"}});const a0=(e,t,n)=>Qt(e,t,n,"hsl");pe.hsl=a0;const{floor:s0}=Math,c0=(...e)=>{e=K(e,"hsv");let[t,n,r]=e,o,l,i;if(r*=255,n===0)o=l=i=r;else{t===360&&(t=0),t>360&&(t-=360),t<0&&(t+=360),t/=60;let a=s0(t),s=t-a,c=r*(1-n),d=r*(1-n*s),f=r*(1-n*(1-s));switch(a){case 0:[o,l,i]=[r,f,c];break;case 1:[o,l,i]=[d,r,c];break;case 2:[o,l,i]=[c,r,f];break;case 3:[o,l,i]=[c,d,r];break;case 4:[o,l,i]=[f,c,r];break;case 5:[o,l,i]=[r,c,d];break}}return[o,l,i,e.length>3?e[3]:1]},{min:d0,max:f0}=Math,u0=(...e)=>{e=K(e,"rgb");let[t,n,r]=e,o=d0(t,n,r),l=f0(t,n,r),i=l-o,a,s,c;return c=l/255,l===0?(a=NaN,s=0):(s=i/l,t===l&&(a=(n-r)/i),n===l&&(a=2+(r-t)/i),r===l&&(a=4+(t-n)/i),a*=60,a<0&&(a+=360)),[a,s,c]};A.prototype.hsv=function(){return u0(this._rgb)};const h0=(...e)=>new A(...e,"hsv");W.hsv=h0,q.format.hsv=c0,q.autodetect.push({p:2,test:(...e)=>{if(e=K(e,"hsv"),$(e)==="array"&&e.length===3)return"hsv"}});const p0=(e,t,n)=>Qt(e,t,n,"hsv");pe.hsv=p0;function or(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(i=>[i]));let r=t[0].length,o=t[0].map((i,a)=>t.map(s=>s[a])),l=e.map(i=>o.map(a=>Array.isArray(i)?i.reduce((s,c,d)=>s+c*(a[d]||0),0):a.reduce((s,c)=>s+c*i,0)));return n===1&&(l=l[0]),r===1?l.map(i=>i[0]):l}const Yo=(...e)=>{e=K(e,"lab");let[t,n,r,...o]=e,[l,i,a]=g0([t,n,r]),[s,c,d]=ms(l,i,a);return[s,c,d,...o.length>0&&o[0]<1?[o[0]]:[]]};function g0(e){return or([[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],or([[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],e).map(t=>t**3))}const Jo=(...e)=>{let[t,n,r,...o]=K(e,"rgb");return[...m0(ys(t,n,r)),...o.length>0&&o[0]<1?[o[0]]:[]]};function m0(e){return or([[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],or([[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],e).map(t=>Math.cbrt(t)))}A.prototype.oklab=function(){return Jo(this._rgb)};const y0=(...e)=>new A(...e,"oklab");Object.assign(W,{oklab:y0}),q.format.oklab=Yo,q.autodetect.push({p:2,test:(...e)=>{if(e=K(e,"oklab"),$(e)==="array"&&e.length===3)return"oklab"}});const x0=(e,t,n)=>{let r=e.oklab(),o=t.oklab();return new A(r[0]+n*(o[0]-r[0]),r[1]+n*(o[1]-r[1]),r[2]+n*(o[2]-r[2]),"oklab")};pe.oklab=x0;const b0=(e,t,n)=>Qt(e,t,n,"oklch");pe.oklch=b0;const{pow:Ur,sqrt:Vr,PI:Qr,cos:sl,sin:cl,atan2:T0}=Math;var w0=(e,t="lrgb",n=null)=>{let r=e.length;n||=Array.from(Array(r)).map(()=>1);let o=r/n.reduce(function(f,u){return f+u});if(n.forEach((f,u)=>{n[u]*=o}),e=e.map(f=>new A(f)),t==="lrgb")return v0(e,n);let l=e.shift(),i=l.get(t),a=[],s=0,c=0;for(let f=0;f<i.length;f++)if(i[f]=(i[f]||0)*n[0],a.push(isNaN(i[f])?0:n[0]),t.charAt(f)==="h"&&!isNaN(i[f])){let u=i[f]/180*Qr;s+=sl(u)*n[0],c+=cl(u)*n[0]}let d=l.alpha()*n[0];e.forEach((f,u)=>{let h=f.get(t);d+=f.alpha()*n[u+1];for(let p=0;p<i.length;p++)if(!isNaN(h[p]))if(a[p]+=n[u+1],t.charAt(p)==="h"){let T=h[p]/180*Qr;s+=sl(T)*n[u+1],c+=cl(T)*n[u+1]}else i[p]+=h[p]*n[u+1]});for(let f=0;f<i.length;f++)if(t.charAt(f)==="h"){let u=T0(c/a[f],s/a[f])/Qr*180;for(;u<0;)u+=360;for(;u>=360;)u-=360;i[f]=u}else i[f]=i[f]/a[f];return d/=r,new A(i,t).alpha(d>.99999?1:d,!0)};const v0=(e,t)=>{let n=e.length,r=[0,0,0,0];for(let o=0;o<e.length;o++){let l=e[o],i=t[o]/n,a=l._rgb;r[0]+=Ur(a[0],2)*i,r[1]+=Ur(a[1],2)*i,r[2]+=Ur(a[2],2)*i,r[3]+=a[3]*i}return r[0]=Vr(r[0]),r[1]=Vr(r[1]),r[2]=Vr(r[2]),r[3]>.9999999&&(r[3]=1),new A(Zo(r))},{pow:k0}=Math;function ir(e){let t="rgb",n=W("#ccc"),r=0,o=[0,1],l=[0,1],i=[],a=[0,0],s=!1,c=[],d=!1,f=0,u=1,h=!1,p={},T=!0,b=1,y=function(w){if(w||=["#fff","#000"],w&&$(w)==="string"&&W.brewer&&W.brewer[w.toLowerCase()]&&(w=W.brewer[w.toLowerCase()]),$(w)==="array"){w.length===1&&(w=[w[0],w[0]]),w=w.slice(0);for(let R=0;R<w.length;R++)w[R]=W(w[R]);i.length=0;for(let R=0;R<w.length;R++)i.push(R/(w.length-1))}return k(),c=w},F=function(w){if(s!=null){let R=s.length-1,x=0;for(;x<R&&w>=s[x];)x++;return x-1}return 0},B=w=>w,C=w=>w,S=function(w,R){let x,E;if(R??=!1,isNaN(w)||w===null)return n;E=R?w:s&&s.length>2?F(w)/(s.length-2):u===f?1:(w-f)/(u-f),E=C(E),R||(E=B(E)),b!==1&&(E=k0(E,b)),E=a[0]+E*(1-a[0]-a[1]),E=wt(E,0,1);let N=Math.floor(E*1e4);if(T&&p[N])x=p[N];else{if($(c)==="array")for(let I=0;I<i.length;I++){let j=i[I];if(E<=j){x=c[I];break}if(E>=j&&I===i.length-1){x=c[I];break}if(E>j&&E<i[I+1]){E=(E-j)/(i[I+1]-j),x=W.interpolate(c[I],c[I+1],E,t);break}}else $(c)==="function"&&(x=c(E));T&&(p[N]=x)}return x};var k=()=>p={};y(e);let L=function(w){let R=W(S(w));return d&&R[d]?R[d]():R};return L.classes=function(w){if(w!=null){if($(w)==="array")s=w,o=[w[0],w[w.length-1]];else{let R=W.analyze(o);s=w===0?[R.min,R.max]:W.limits(R,"e",w)}return L}return s},L.domain=function(w){if(!arguments.length)return l;l=w.slice(0),f=w[0],u=w[w.length-1],i=[];let R=c.length;if(w.length===R&&f!==u)for(let x of Array.from(w))i.push((x-f)/(u-f));else{for(let x=0;x<R;x++)i.push(x/(R-1));if(w.length>2){let x=w.map((N,I)=>I/(w.length-1)),E=w.map(N=>(N-f)/(u-f));E.every((N,I)=>x[I]===N)||(C=N=>{if(N<=0||N>=1)return N;let I=0;for(;N>=E[I+1];)I++;let j=(N-E[I])/(E[I+1]-E[I]);return x[I]+j*(x[I+1]-x[I])})}}return o=[f,u],L},L.mode=function(w){return arguments.length?(t=w,k(),L):t},L.range=function(w,R){return y(w),L},L.out=function(w){return d=w,L},L.spread=function(w){return arguments.length?(r=w,L):r},L.correctLightness=function(w){return w??=!0,h=w,k(),B=h?function(R){let x=S(0,!0).lab()[0],E=S(1,!0).lab()[0],N=x>E,I=S(R,!0).lab()[0],j=x+(E-x)*R,X=I-j,ee=0,te=1,ge=20;for(;Math.abs(X)>.01&&ge-- >0;)(function(){return N&&(X*=-1),X<0?(ee=R,R+=(te-R)*.5):(te=R,R+=(ee-R)*.5),I=S(R,!0).lab()[0],X=I-j})();return R}:R=>R,L},L.padding=function(w){return w==null?a:($(w)==="number"&&(w=[w,w]),a=w,L)},L.colors=function(w,R){arguments.length<2&&(R="hex");let x=[];if(arguments.length===0)x=c.slice(0);else if(w===1)x=[L(.5)];else if(w>1){let E=o[0],N=o[1]-E;x=B0(0,w).map(I=>L(E+I/(w-1)*N))}else{e=[];let E=[];if(s&&s.length>2)for(let N=1,I=s.length,j=1<=I;j?N<I:N>I;j?N++:N--)E.push((s[N-1]+s[N])*.5);else E=o;x=E.map(N=>L(N))}return W[R]&&(x=x.map(E=>E[R]())),x},L.cache=function(w){return w==null?T:(T=w,L)},L.gamma=function(w){return w==null?b:(b=w,L)},L.nodata=function(w){return w==null?n:(n=W(w),L)},L}function B0(e,t,n){let r=[],o=e<t,l=t;for(let i=e;o?i<l:i>l;o?i++:i--)r.push(i);return r}const E0=function(e){let t=[1,1];for(let n=1;n<e;n++){let r=[1];for(let o=1;o<=t.length;o++)r[o]=(t[o]||0)+t[o-1];t=r}return t},A0=function(e){let t,n,r,o;if(e=e.map(l=>new A(l)),e.length===2)[n,r]=e.map(l=>l.lab()),t=function(l){return new A([0,1,2].map(i=>n[i]+l*(r[i]-n[i])),"lab")};else if(e.length===3)[n,r,o]=e.map(l=>l.lab()),t=function(l){return new A([0,1,2].map(i=>(1-l)*(1-l)*n[i]+2*(1-l)*l*r[i]+l*l*o[i]),"lab")};else if(e.length===4){let l;[n,r,o,l]=e.map(i=>i.lab()),t=function(i){return new A([0,1,2].map(a=>(1-i)*(1-i)*(1-i)*n[a]+3*(1-i)*(1-i)*i*r[a]+3*(1-i)*i*i*o[a]+i*i*i*l[a]),"lab")}}else if(e.length>=5){let l,i,a;l=e.map(s=>s.lab()),a=e.length-1,i=E0(a),t=function(s){let c=1-s;return new A([0,1,2].map(d=>l.reduce((f,u,h)=>f+i[h]*c**(a-h)*s**h*u[d],0)),"lab")}}else throw RangeError("No point in running bezier with only one color.");return t};var D0=e=>{let t=A0(e);return t.scale=()=>ir(t),t};const{round:dl}=Math;A.prototype.rgb=function(e=!0){return e===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(dl)},A.prototype.rgba=function(e=!0){return this._rgb.slice(0,4).map((t,n)=>n<3?e===!1?t:dl(t):t)};const F0=(...e)=>new A(...e,"rgb");Object.assign(W,{rgb:F0}),q.format.rgb=(...e)=>{let t=K(e,"rgba");return t[3]===void 0&&(t[3]=1),t},q.autodetect.push({p:3,test:(...e)=>{if(e=K(e,"rgba"),$(e)==="array"&&(e.length===3||e.length===4&&$(e[3])=="number"&&e[3]>=0&&e[3]<=1))return"rgb"}});const Ce=(e,t,n)=>{if(!Ce[n])throw Error("unknown blend mode "+n);return Ce[n](e,t)},lt=e=>(t,n)=>{let r=W(n).rgb(),o=W(t).rgb();return W.rgb(e(r,o))},at=e=>(t,n)=>{let r=[];return r[0]=e(t[0],n[0]),r[1]=e(t[1],n[1]),r[2]=e(t[2],n[2]),r},N0=e=>e,O0=(e,t)=>e*t/255,R0=(e,t)=>e>t?t:e,C0=(e,t)=>e>t?e:t,L0=(e,t)=>255*(1-(1-e/255)*(1-t/255)),I0=(e,t)=>t<128?2*e*t/255:255*(1-2*(1-e/255)*(1-t/255)),S0=(e,t)=>255*(1-(1-t/255)/(e/255)),P0=(e,t)=>e===255?255:(e=t/255*255/(1-e/255),e>255?255:e);Ce.normal=lt(at(N0)),Ce.multiply=lt(at(O0)),Ce.screen=lt(at(L0)),Ce.overlay=lt(at(I0)),Ce.darken=lt(at(R0)),Ce.lighten=lt(at(C0)),Ce.dodge=lt(at(P0)),Ce.burn=lt(at(S0));const{pow:z0,sin:M0,cos:G0}=Math;function q0(e=300,t=-1.5,n=1,r=1,o=[0,1]){let l=0,i;$(o)==="array"?i=o[1]-o[0]:(i=0,o=[o,o]);let a=function(s){let c=Qe*((e+120)/360+t*s),d=z0(o[0]+i*s,r),f=(l===0?n:n[0]+s*l)*d*(1-d)/2,u=G0(c),h=M0(c),p=d+f*(-.14861*u+1.78277*h),T=d+f*(-.29227*u-.90649*h),b=d+1.97294*u*f;return W(Zo([p*255,T*255,b*255,1]))};return a.start=function(s){return s==null?e:(e=s,a)},a.rotations=function(s){return s==null?t:(t=s,a)},a.gamma=function(s){return s==null?r:(r=s,a)},a.hue=function(s){return s==null?n:(n=s,$(n)==="array"?(l=n[1]-n[0],l===0&&(n=n[1])):l=0,a)},a.lightness=function(s){return s==null?o:($(s)==="array"?(o=s,i=s[1]-s[0]):(o=[s,s],i=0),a)},a.scale=()=>W.scale(a),a.hue(n),a}const{floor:K0,random:X0}=Math;var j0=(e=X0)=>{let t="#";for(let n=0;n<6;n++)t+="0123456789abcdef".charAt(K0(e()*16));return new A(t,"hex")};const{log:fl,pow:$0,floor:H0,abs:W0}=Math;function ws(e,t=null){let n={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return $(e)==="object"&&(e=Object.values(e)),e.forEach(r=>{t&&$(r)==="object"&&(r=r[t]),r!=null&&!isNaN(r)&&(n.values.push(r),n.sum+=r,r<n.min&&(n.min=r),r>n.max&&(n.max=r),n.count+=1)}),n.domain=[n.min,n.max],n.limits=(r,o)=>vs(n,r,o),n}function vs(e,t="equal",n=7){$(e)=="array"&&(e=ws(e));let{min:r,max:o}=e,l=e.values.sort((a,s)=>a-s);if(n===1)return[r,o];let i=[];if(t.substr(0,1)==="c"&&(i.push(r),i.push(o)),t.substr(0,1)==="e"){i.push(r);for(let a=1;a<n;a++)i.push(r+a/n*(o-r));i.push(o)}else if(t.substr(0,1)==="l"){if(r<=0)throw Error("Logarithmic scales are only possible for values > 0");let a=Math.LOG10E*fl(r),s=Math.LOG10E*fl(o);i.push(r);for(let c=1;c<n;c++)i.push($0(10,a+c/n*(s-a)));i.push(o)}else if(t.substr(0,1)==="q"){i.push(r);for(let a=1;a<n;a++){let s=(l.length-1)*a/n,c=H0(s);if(c===s)i.push(l[c]);else{let d=s-c;i.push(l[c]*(1-d)+l[c+1]*d)}}i.push(o)}else if(t.substr(0,1)==="k"){let a,s=l.length,c=Array(s),d=Array(n),f=!0,u=0,h=null;h=[],h.push(r);for(let b=1;b<n;b++)h.push(r+b/n*(o-r));for(h.push(o);f;){for(let y=0;y<n;y++)d[y]=0;for(let y=0;y<s;y++){let F=l[y],B=Number.MAX_VALUE,C;for(let S=0;S<n;S++){let k=W0(h[S]-F);k<B&&(B=k,C=S),d[C]++,c[y]=C}}let b=Array(n);for(let y=0;y<n;y++)b[y]=null;for(let y=0;y<s;y++)a=c[y],b[a]===null?b[a]=l[y]:b[a]+=l[y];for(let y=0;y<n;y++)b[y]*=1/d[y];f=!1;for(let y=0;y<n;y++)if(b[y]!==h[y]){f=!0;break}h=b,u++,u>200&&(f=!1)}let p={};for(let b=0;b<n;b++)p[b]=[];for(let b=0;b<s;b++)a=c[b],p[a].push(l[b]);let T=[];for(let b=0;b<n;b++)T.push(p[b][0]),T.push(p[b][p[b].length-1]);T=T.sort((b,y)=>b-y),i.push(T[0]);for(let b=1;b<T.length;b+=2){let y=T[b];!isNaN(y)&&i.indexOf(y)===-1&&i.push(y)}}return i}var Z0=(e,t)=>{e=new A(e),t=new A(t);let n=e.luminance(),r=t.luminance();return n>r?(n+.05)/(r+.05):(r+.05)/(n+.05)};const ul=.027,hl=1.14,Pn=.022;var U0=(e,t)=>{e=new A(e),t=new A(t),e.alpha()<1&&(e=jt(t,e,e.alpha(),"rgb"));let n=pl(...e.rgb()),r=pl(...t.rgb()),o=n>=Pn?n:n+(Pn-n)**1.414,l=r>=Pn?r:r+(Pn-r)**1.414,i=l**.56-o**.57,a=l**.65-o**.62,s=Math.abs(l-o)<5e-4?0:o<l?i*hl:a*hl;return(Math.abs(s)<.1?0:s>0?s-ul:s+ul)*100};function pl(e,t,n){return .2126729*(e/255)**2.4+.7151522*(t/255)**2.4+.072175*(n/255)**2.4}const{sqrt:Ze,pow:oe,min:V0,max:Q0,atan2:gl,abs:ml,cos:zn,sin:yl,exp:Y0,PI:xl}=Math;function J0(e,t,n=1,r=1,o=1){var l=function(ve){return 360*ve/(2*xl)},i=function(ve){return 2*xl*ve/360};e=new A(e),t=new A(t);let[a,s,c]=Array.from(e.lab()),[d,f,u]=Array.from(t.lab()),h=(a+d)/2,p=(Ze(oe(s,2)+oe(c,2))+Ze(oe(f,2)+oe(u,2)))/2,T=.5*(1-Ze(oe(p,7)/(oe(p,7)+oe(25,7)))),b=s*(1+T),y=f*(1+T),F=Ze(oe(b,2)+oe(c,2)),B=Ze(oe(y,2)+oe(u,2)),C=(F+B)/2,S=l(gl(c,b)),k=l(gl(u,y)),L=S>=0?S:S+360,w=k>=0?k:k+360,R=ml(L-w)>180?(L+w+360)/2:(L+w)/2,x=1-.17*zn(i(R-30))+.24*zn(i(2*R))+.32*zn(i(3*R+6))-.2*zn(i(4*R-63)),E=w-L;E=ml(E)<=180?E:w<=L?E+360:E-360,E=2*Ze(F*B)*yl(i(E)/2);let N=d-a,I=B-F,j=1+.015*oe(h-50,2)/Ze(20+oe(h-50,2)),X=1+.045*C,ee=1+.015*C*x,te=30*Y0(-oe((R-275)/25,2)),ge=-(2*Ze(oe(C,7)/(oe(C,7)+oe(25,7))))*yl(2*i(te));return Q0(0,V0(100,Ze(oe(N/(n*j),2)+oe(I/(r*X),2)+oe(E/(o*ee),2)+ge*(I/(r*X))*(E/(o*ee)))))}function _0(e,t,n="lab"){e=new A(e),t=new A(t);let r=e.get(n),o=t.get(n),l=0;for(let i in r){let a=(r[i]||0)-(o[i]||0);l+=a*a}return Math.sqrt(l)}var ey=(...e)=>{try{return new A(...e),!0}catch{return!1}},ty={cool(){return ir([W.hsl(180,1,.9),W.hsl(250,.7,.4)])},hot(){return ir(["#000","#f00","#ff0","#fff"]).mode("rgb")}};const Eo={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},ks=Object.keys(Eo),bl=new Map(ks.map(e=>[e.toLowerCase(),e])),ny=typeof Proxy=="function"?new Proxy(Eo,{get(e,t){let n=t.toLowerCase();if(bl.has(n))return e[bl.get(n)]},getOwnPropertyNames(){return Object.getOwnPropertyNames(ks)}}):Eo,ry=(...e)=>{e=K(e,"cmyk");let[t,n,r,o]=e,l=e.length>4?e[4]:1;return o===1?[0,0,0,l]:[t>=1?0:255*(1-t)*(1-o),n>=1?0:255*(1-n)*(1-o),r>=1?0:255*(1-r)*(1-o),l]},{max:Tl}=Math,oy=(...e)=>{let[t,n,r]=K(e,"rgb");t/=255,n/=255,r/=255;let o=1-Tl(t,Tl(n,r)),l=o<1?1/(1-o):0;return[(1-t-o)*l,(1-n-o)*l,(1-r-o)*l,o]};A.prototype.cmyk=function(){return oy(this._rgb)};const iy=(...e)=>new A(...e,"cmyk");Object.assign(W,{cmyk:iy}),q.format.cmyk=ry,q.autodetect.push({p:2,test:(...e)=>{if(e=K(e,"cmyk"),$(e)==="array"&&e.length===4)return"cmyk"}});const ly=(...e)=>{let t=K(e,"hsla"),n=Vt(e)||"lsa";return t[0]=Ne(t[0]||0)+"deg",t[1]=Ne(t[1]*100)+"%",t[2]=Ne(t[2]*100)+"%",n==="hsla"||t.length>3&&t[3]<1?(t[3]="/ "+(t.length>3?t[3]:1),n="hsla"):t.length=3,`${n.substr(0,3)}(${t.join(" ")})`},ay=(...e)=>{let t=K(e,"lab"),n=Vt(e)||"lab";return t[0]=Ne(t[0])+"%",t[1]=Ne(t[1]),t[2]=Ne(t[2]),n==="laba"||t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`lab(${t.join(" ")})`},sy=(...e)=>{let t=K(e,"lch"),n=Vt(e)||"lab";return t[0]=Ne(t[0])+"%",t[1]=Ne(t[1]),t[2]=isNaN(t[2])?"none":Ne(t[2])+"deg",n==="lcha"||t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`lch(${t.join(" ")})`},cy=(...e)=>{let t=K(e,"lab");return t[0]=Ne(t[0]*100)+"%",t[1]=vo(t[1]),t[2]=vo(t[2]),t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`oklab(${t.join(" ")})`},Bs=(...e)=>{let[t,n,r,...o]=K(e,"rgb"),[l,i,a]=Jo(t,n,r),[s,c,d]=bs(l,i,a);return[s,c,d,...o.length>0&&o[0]<1?[o[0]]:[]]},dy=(...e)=>{let t=K(e,"lch");return t[0]=Ne(t[0]*100)+"%",t[1]=vo(t[1]),t[2]=isNaN(t[2])?"none":Ne(t[2])+"deg",t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`oklch(${t.join(" ")})`},{round:Yr}=Math,fy=(...e)=>{let t=K(e,"rgba"),n=Vt(e)||"rgb";if(n.substr(0,3)==="hsl")return ly(Ts(t),n);if(n.substr(0,3)==="lab"){let r=bn();Ye("d50");let o=ay(Vo(t),n);return Ye(r),o}if(n.substr(0,3)==="lch"){let r=bn();Ye("d50");let o=sy(ko(t),n);return Ye(r),o}return n.substr(0,5)==="oklab"?cy(Jo(t)):n.substr(0,5)==="oklch"?dy(Bs(t)):(t[0]=Yr(t[0]),t[1]=Yr(t[1]),t[2]=Yr(t[2]),(n==="rgba"||t.length>3&&t[3]<1)&&(t[3]="/ "+(t.length>3?t[3]:1),n="rgba"),`${n.substr(0,3)}(${t.slice(0,n==="rgb"?3:4).join(" ")})`)},Es=(...e)=>{e=K(e,"lch");let[t,n,r,...o]=e,[l,i,a]=xs(t,n,r),[s,c,d]=Yo(l,i,a);return[s,c,d,...o.length>0&&o[0]<1?[o[0]]:[]]},Je="((?:-?\\d+)|(?:-?\\d+(?:\\.\\d+)?)%|none)",ze="((?:-?(?:\\d+(?:\\.\\d*)?|\\.\\d+)%?)|none)",lr="((?:-?(?:\\d+(?:\\.\\d*)?|\\.\\d+)%)|none)",_o="\\s*,\\s*",xr="((?:-?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:deg)?)|none)",Yt="\\s*(?:\\/\\s*((?:[01]|[01]?\\.\\d+)|\\d+(?:\\.\\d+)?%))?",As=RegExp("^rgba?\\(\\s*"+[Je,Je,Je].join("\\s+")+Yt+"\\)$"),Ds=RegExp("^rgb\\(\\s*"+[Je,Je,Je].join(_o)+"\\s*\\)$"),Fs=RegExp("^rgba\\(\\s*"+[Je,Je,Je,ze].join(_o)+"\\s*\\)$"),Ns=RegExp("^hsla?\\(\\s*"+[xr,lr,lr].join("\\s+")+Yt+"\\)$"),Os=RegExp("^hsl?\\(\\s*"+[xr,lr,lr].join(_o)+"\\s*\\)$"),Rs=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Cs=RegExp("^lab\\(\\s*"+[ze,ze,ze].join("\\s+")+Yt+"\\)$"),Ls=RegExp("^lch\\(\\s*"+[ze,ze,xr].join("\\s+")+Yt+"\\)$"),Is=RegExp("^oklab\\(\\s*"+[ze,ze,ze].join("\\s+")+Yt+"\\)$"),Ss=RegExp("^oklch\\(\\s*"+[ze,ze,xr].join("\\s+")+Yt+"\\)$"),{round:Ps}=Math,Ct=e=>e.map((t,n)=>n<=2?wt(Ps(t),0,255):t),ie=(e,t=0,n=100,r=!1)=>(typeof e=="string"&&e.endsWith("%")&&(e=parseFloat(e.substring(0,e.length-1))/100,e=r?t+(e+1)*.5*(n-t):t+e*(n-t)),+e),me=(e,t)=>e==="none"?t:e,Ao=e=>{if(e=e.toLowerCase().trim(),e==="transparent")return[0,0,0,0];let t;if(q.format.named)try{return q.format.named(e)}catch{}if((t=e.match(As))||(t=e.match(Ds))){let n=t.slice(1,4);for(let o=0;o<3;o++)n[o]=+ie(me(n[o],0),0,255);n=Ct(n);let r=t[4]===void 0?1:+ie(t[4],0,1);return n[3]=r,n}if(t=e.match(Fs)){let n=t.slice(1,5);for(let r=0;r<4;r++)n[r]=+ie(n[r],0,255);return n}if((t=e.match(Ns))||(t=e.match(Os))){let n=t.slice(1,4);n[0]=+me(n[0].replace("deg",""),0),n[1]=ie(me(n[1],0),0,100)*.01,n[2]=ie(me(n[2],0),0,100)*.01;let r=Ct(Bo(n));return r[3]=t[4]===void 0?1:+ie(t[4],0,1),r}if(t=e.match(Rs)){let n=t.slice(1,4);n[1]*=.01,n[2]*=.01;let r=Bo(n);for(let o=0;o<3;o++)r[o]=Ps(r[o]);return r[3]=+t[4],r}if(t=e.match(Cs)){let n=t.slice(1,4);n[0]=ie(me(n[0],0),0,100),n[1]=ie(me(n[1],0),-125,125,!0),n[2]=ie(me(n[2],0),-125,125,!0);let r=bn();Ye("d50");let o=Ct(Uo(n));return Ye(r),o[3]=t[4]===void 0?1:+ie(t[4],0,1),o}if(t=e.match(Ls)){let n=t.slice(1,4);n[0]=ie(n[0],0,100),n[1]=ie(me(n[1],0),0,150,!1),n[2]=+me(n[2].replace("deg",""),0);let r=bn();Ye("d50");let o=Ct(Qo(n));return Ye(r),o[3]=t[4]===void 0?1:+ie(t[4],0,1),o}if(t=e.match(Is)){let n=t.slice(1,4);n[0]=ie(me(n[0],0),0,1),n[1]=ie(me(n[1],0),-.4,.4,!0),n[2]=ie(me(n[2],0),-.4,.4,!0);let r=Ct(Yo(n));return r[3]=t[4]===void 0?1:+ie(t[4],0,1),r}if(t=e.match(Ss)){let n=t.slice(1,4);n[0]=ie(me(n[0],0),0,1),n[1]=ie(me(n[1],0),0,.4,!1),n[2]=+me(n[2].replace("deg",""),0);let r=Ct(Es(n));return r[3]=t[4]===void 0?1:+ie(t[4],0,1),r}};Ao.test=e=>As.test(e)||Ns.test(e)||Cs.test(e)||Ls.test(e)||Is.test(e)||Ss.test(e)||Ds.test(e)||Fs.test(e)||Os.test(e)||Rs.test(e)||e==="transparent",A.prototype.css=function(e){return fy(this._rgb,e)};const uy=(...e)=>new A(...e,"css");W.css=uy,q.format.css=Ao,q.autodetect.push({p:5,test:(e,...t)=>{if(!t.length&&$(e)==="string"&&Ao.test(e))return"css"}}),q.format.gl=(...e)=>{let t=K(e,"rgba");return t[0]*=255,t[1]*=255,t[2]*=255,t};const hy=(...e)=>new A(...e,"gl");W.gl=hy,A.prototype.gl=function(){let e=this._rgb;return[e[0]/255,e[1]/255,e[2]/255,e[3]]},A.prototype.hex=function(e){return gs(this._rgb,e)};const py=(...e)=>new A(...e,"hex");W.hex=py,q.format.hex=ps,q.autodetect.push({p:4,test:(e,...t)=>{if(!t.length&&$(e)==="string"&&[3,4,5,6,7,8,9].indexOf(e.length)>=0)return"hex"}});const{log:Mn}=Math,zs=e=>{let t=e/100,n,r,o;return t<66?(n=255,r=t<6?0:-155.25485562709179-.44596950469579133*(r=t-2)+104.49216199393888*Mn(r),o=t<20?0:-254.76935184120902+.8274096064007395*(o=t-10)+115.67994401066147*Mn(o)):(n=351.97690566805693+.114206453784165*(n=t-55)-40.25366309332127*Mn(n),r=325.4494125711974+.07943456536662342*(r=t-50)-28.0852963507957*Mn(r),o=255),[n,r,o,1]},{round:gy}=Math,my=(...e)=>{let t=K(e,"rgb"),n=t[0],r=t[2],o=1e3,l=4e4,i;for(;l-o>.4;){i=(l+o)*.5;let a=zs(i);a[2]/a[0]>=r/n?l=i:o=i}return gy(i)};A.prototype.temp=A.prototype.kelvin=A.prototype.temperature=function(){return my(this._rgb)};const Jr=(...e)=>new A(...e,"temp");Object.assign(W,{temp:Jr,kelvin:Jr,temperature:Jr}),q.format.temp=q.format.kelvin=q.format.temperature=zs,A.prototype.oklch=function(){return Bs(this._rgb)};const yy=(...e)=>new A(...e,"oklch");Object.assign(W,{oklch:yy}),q.format.oklch=Es,q.autodetect.push({p:2,test:(...e)=>{if(e=K(e,"oklch"),$(e)==="array"&&e.length===3)return"oklch"}}),Object.assign(W,{analyze:ws,average:w0,bezier:D0,blend:Ce,brewer:ny,Color:A,colors:It,contrast:Z0,contrastAPCA:U0,cubehelix:q0,deltaE:J0,distance:_0,input:q,interpolate:jt,limits:vs,mix:jt,random:j0,scale:ir,scales:ty,valid:ey});var Fe=W;const Do=[.96,.907,.805,.697,.605,.547,.518,.445,.395,.34],wl=[.32,.16,.08,.04,0,0,.04,.08,.16,.32];function xy(e){let t=e.get("hsl.l");return Do.reduce((n,r)=>Math.abs(r-t)<Math.abs(n-t)?r:n)}function by(e){let t=Fe(e),n=xy(t),r=Do.findIndex(l=>l===n),o=Do.map(l=>t.set("hsl.l",l)).map(l=>Fe(l)).map((l,i)=>{let a=wl[i]-wl[r];return a>=0?l.saturate(a):l.desaturate(a*-1)});return o[r]=Fe(e),{baseColorIndex:r,colors:o}}function Ty(e){return by(e).colors.map(t=>t.hex())}function ei(e){return td(e,t=>t===void 0)}function $t(e){return e.summary??e.description}function Ht(e){return e.description??e.summary}function vl(e,t){return e[xt]===t}const xt="_stage",rn="_type",Fo="_layout";kn({DeploymentFqn:()=>Ay,EdgeId:()=>Oy,Fqn:()=>Ey,GlobalFqn:()=>ti,GroupElementKind:()=>Ms,MarkdownOrString:()=>vy,NodeId:()=>Ny,NoneIcon:()=>By,ProjectId:()=>wy,RelationId:()=>Fy,StepEdgeKind:()=>Cy,ViewId:()=>Dy,extractStep:()=>Xs,flattenMarkdownOrString:()=>ky,isGlobalFqn:()=>qs,isGroupElementKind:()=>Gs,isStepEdgeId:()=>br,splitGlobalFqn:()=>Ks,stepEdgeId:()=>Ry});function wy(e){return e}function vy(e){return typeof e=="string"?{txt:e}:e}function ky(e){if(qt(e))return null;let t=Le(e)?e:e.txt??e.md;return Se(t?.trim())?t:null}const By="none";function Ey(e,t){return t?t+"."+e:e}const Ms="@group";function Gs(e){return e.kind===Ms}function Ay(e,t){return t?t+"."+e:e}function Dy(e){return e}function Fy(e){return e}function ti(e,t){return z(typeof e=="string"&&e!=""),"@"+e+"."+t}function qs(e){return e.startsWith("@")}function Ks(e){if(!e.startsWith("@"))return[null,e];let t=e.indexOf(".");if(t<2)throw Error("Invalid global FQN");return[e.slice(1,t),e.slice(t+1)]}function Ny(e){return e}function Oy(e){return e}function Ry(e,t){let n=`step-${String(e).padStart(2,"0")}`;return t?`${n}.${t}`:n}const Cy="@step";function br(e){return e.startsWith("step-")}function Xs(e){if(!br(e))throw Error(`Invalid step edge id: ${e}`);return parseFloat(e.slice(5))}let kt;(function(e){function t(s){return"model"in s&&!("project"in s)}e.isElementRef=t;function n(s){return"project"in s&&"model"in s}e.isImportRef=n;function r(s){if(Le(s))throw Error(`Expected FqnRef, got: "${s}"`);if(n(s))return ti(s.project,s.model);if(t(s))return s.model;throw Error("Expected FqnRef.ModelRef or FqnRef.ImportRef")}e.flatten=r;function o(s){return t(s)||n(s)}e.isModelRef=o;function l(s){return"deployment"in s&&"element"in s}e.isInsideInstanceRef=l;function i(s){return"deployment"in s&&!("element"in s)}e.isDeploymentElementRef=i;function a(s){return i(s)||l(s)}e.isDeploymentRef=a})(kt||={});let on;(function(e){function t(d){return"wildcard"in d&&d.wildcard===!0}e.isWildcard=t;function n(d){return"ref"in d&&kt.isModelRef(d.ref)}e.isModelRef=n;function r(d){return"ref"in d&&kt.isDeploymentRef(d.ref)}e.isDeploymentRef=r;function o(d){return"elementKind"in d&&"isEqual"in d}e.isElementKindExpr=o;function l(d){return"elementTag"in d&&"isEqual"in d}e.isElementTagExpr=l;function i(d){return"where"in d&&s(d.where.expr)}e.isWhere=i;function a(d){return"custom"in d&&(s(d.custom.expr)||i(d.custom.expr))}e.isCustom=a;function s(d){return t(d)||n(d)||r(d)||o(d)||l(d)}e.is=s;function c(d){return a(d)&&(d=d.custom.expr),i(d)&&(d=d.where.expr),d}e.unwrap=c})(on||={});let ln;(function(e){function t(c){return"source"in c&&"target"in c}e.isDirect=t;function n(c){return"incoming"in c}e.isIncoming=n;function r(c){return"outgoing"in c}e.isOutgoing=r;function o(c){return"inout"in c}e.isInOut=o;function l(c){return"where"in c&&(t(c.where.expr)||n(c.where.expr)||r(c.where.expr)||o(c.where.expr))}e.isWhere=l;function i(c){return"customRelation"in c}e.isCustom=i;function a(c){return t(c)||n(c)||r(c)||o(c)}e.is=a;function s(c){return i(c)&&(c=c.customRelation.expr),l(c)&&(c=c.where.expr),c}e.unwrap=s})(ln||={});let Ly;(function(e){function t(i){return"where"in i}e.isWhere=t;function n(i){return ln.isWhere(i)}e.isRelationWhere=n;function r(i){return on.isWhere(i)}e.isFqnExprWhere=r;function o(i){return on.is(i)||on.isWhere(i)||on.isCustom(i)}e.isFqnExpr=o;function l(i){return ln.is(i)||ln.isWhere(i)||ln.isCustom(i)}e.isRelation=l})(Ly||={});let an;(function(e){function t(c){return"wildcard"in c&&c.wildcard===!0}e.isWildcard=t;function n(c){return"ref"in c&&kt.isModelRef(c.ref)}e.isModelRef=n;function r(c){return"elementKind"in c&&"isEqual"in c}e.isElementKindExpr=r;function o(c){return"elementTag"in c&&"isEqual"in c}e.isElementTagExpr=o;function l(c){return"where"in c&&a(c.where.expr)}e.isWhere=l;function i(c){return"custom"in c&&(a(c.custom.expr)||l(c.custom.expr))}e.isCustom=i;function a(c){return t(c)||n(c)||r(c)||o(c)}e.is=a;function s(c){return i(c)&&(c=c.custom.expr),l(c)&&(c=c.where.expr),c}e.unwrap=s})(an||={});let sn;(function(e){function t(c){return"source"in c&&"target"in c}e.isDirect=t;function n(c){return"incoming"in c}e.isIncoming=n;function r(c){return"outgoing"in c}e.isOutgoing=r;function o(c){return"inout"in c}e.isInOut=o;function l(c){return"where"in c&&(t(c.where.expr)||n(c.where.expr)||r(c.where.expr)||o(c.where.expr))}e.isWhere=l;function i(c){return"customRelation"in c}e.isCustom=i;function a(c){return t(c)||n(c)||r(c)||o(c)}e.is=a;function s(c){return i(c)&&(c=c.customRelation.expr),l(c)&&(c=c.where.expr),c}e.unwrap=s})(sn||={});let Iy;(function(e){function t(i){return"where"in i}e.isWhere=t;function n(i){return sn.isWhere(i)}e.isRelationWhere=n;function r(i){return an.isWhere(i)}e.isFqnExprWhere=r;function o(i){return an.is(i)||an.isWhere(i)||an.isCustom(i)}e.isFqnExpr=o;function l(i){return sn.is(i)||sn.isWhere(i)||sn.isCustom(i)}e.isRelationExpr=l})(Iy||={});function Sy(e){return Se(e.kind)&&!Se(e.element)}const kl={fill:"#3b82f6",stroke:"#2563eb",hiContrast:"#eff6ff",loContrast:"#bfdbfe"},Bl={fill:"#0284c7",stroke:"#0369a1",hiContrast:"#f0f9ff",loContrast:"#B6ECF7"},El={fill:"#64748b",stroke:"#475569",hiContrast:"#f8fafc",loContrast:"#cbd5e1"},Py={primary:kl,blue:kl,secondary:Bl,sky:Bl,muted:El,slate:El,gray:{fill:"#737373",stroke:"#525252",hiContrast:"#fafafa",loContrast:"#d4d4d4"},red:{fill:"#AC4D39",stroke:"#853A2D",hiContrast:"#FBD3CB",loContrast:"#f5b2a3"},green:{fill:"#428a4f",stroke:"#2d5d39",hiContrast:"#f8fafc",loContrast:"#c2f0c2"},amber:{fill:"#A35829",stroke:"#7E451D",hiContrast:"#FFE0C2",loContrast:"#f9b27c"},indigo:{fill:"#6366f1",stroke:"#4f46e5",hiContrast:"#eef2ff",loContrast:"#c7d2fe"}},zy={line:"#8D8D8D",labelBg:"#18191B",label:"#C9C9C9"},Al={line:"#64748b",labelBg:"#0f172a",label:"#cbd5e1"},Dl={line:"#3b82f6",labelBg:"#172554",label:"#60a5fa"},Fl={line:"#0ea5e9",labelBg:"#082f49",label:"#38bdf8"},My={amber:{line:"#b45309",labelBg:"#78350f",label:"#FFE0C2"},blue:Dl,gray:zy,green:{line:"#15803d",labelBg:"#052e16",label:"#22c55e"},indigo:{line:"#6366f1",labelBg:"#1e1b4b",label:"#818cf8"},muted:Al,primary:Dl,red:{line:"#AC4D39",labelBg:"#b91c1c",label:"#f5b2a3"},secondary:Fl,sky:Fl,slate:Al},Gy={sizes:{xs:{width:180,height:100},sm:{width:240,height:135},md:{width:320,height:180},lg:{width:420,height:234},xl:{width:520,height:290}},spacing:{xs:8,sm:10,md:16,lg:24,xl:32},textSizes:{xs:13.33,sm:16,md:19.2,lg:23.04,xl:27.65},iconSizes:{xs:24,sm:36,md:60,lg:82,xl:90}},E5=["rectangle","person","browser","mobile","cylinder","storage","queue","bucket","document","component"],qy=["amber","blue","gray","slate","green","indigo","muted","primary","red","secondary","sky"],A5=["tomato","grass","blue","ruby","orange","indigo","pink","teal","purple","amber","crimson","red","lime","yellow","violet"],js={tomato:l2.tomato9,grass:m2.grass9,blue:p2.blue9,ruby:s2.ruby9,orange:T2.orange9,indigo:h2.indigo9,pink:d2.pink9,teal:g2.teal9,purple:f2.purple9,amber:b2.amber9,crimson:c2.crimson9,red:a2.red9,lime:y2.lime9,yellow:x2.yellow9,violet:u2.violet9};function Ky(e){return e in js}const Xy={colors:qy.reduce((e,t)=>(e[t]={elements:Py[t],relationships:My[t]},e),{}),...Gy};function jy(e){z(Fe.valid(e),`Invalid color: ${e}`);let t=Ty(e),n=t[6],r=$y(n);return{elements:{fill:n,stroke:t[7],...r},relationships:{line:t[4],label:t[3],labelBg:t[9]}}}function $y(e){let t=Fe(e),n=t.brighten(2),r=t.darken(2),o,l,i,a;do o=n,l=r,n=n.brighten(1),r=r.darken(1),i=Fe.contrastAPCA(t,n),a=Fe.contrastAPCA(t,r);while(Math.abs(i)<60&&Math.abs(a)<60&&(!Yn(n,o)||!Yn(r,l)));return Math.abs(i)>Math.abs(a)?{hiContrast:n.brighten(.4).hex(),loContrast:n.hex()}:{hiContrast:r.darken(.4).hex(),loContrast:r.hex()}}function Hy(e,t){let n=t??6,r=Fe(e.fill),o=Fe(e.stroke),l=r.luminance()>.8,i=Me(fd(Fe.scale(l?[r.darken(.02).desaturate(.05),r.darken(.1).desaturate(.1)]:[r.shade(.12,"lch").desaturate(.05),r.shade(.35,"lch").desaturate(.4)]).mode("oklch").correctLightness().colors(n,null),Fe.scale(l?[o.darken(.04).desaturate(.05),o.darken(.12).desaturate(.1)]:[o.shade(.15,"lch").desaturate(.08),o.shade(.4,"lch").desaturate(.4)]).mode("oklch").correctLightness().colors(n,null)),pn(([a,s])=>({...e,fill:a.hex(),stroke:s.hex()})));return z(i.length===n,`Expected ${n} colors, got ${i.length}`),i}const Wy={color:"primary",size:"md",opacity:15,shape:"rectangle",group:{opacity:15,border:"dashed"},relationship:{color:"gray",line:"dashed",arrow:"normal"}},Zy=Xy,jn={theme:Zy,defaults:Wy};var Uy=class No{theme;defaults;static DEFAULT=new No(jn);static from(t,n){if(!t&&!n)return this.DEFAULT;let{customCss:r,theme:o,defaults:l}={...t},i=Pl({theme:o},{defaults:{...l}},{theme:{colors:{...n}}},jn);return qt(r?.content)&&Yn(i,jn)?this.DEFAULT:new No(i,r)}constructor(t,n){this.config=t,this.customCss=n,this.theme=t.theme,this.defaults=t.defaults}get fingerprint(){return U(this,"fingerprint",()=>n2({config:this.config,customCss:this.customCss}))}get elementColors(){return this.theme.colors[this.defaults.color].elements}get relationshipColors(){return this.theme.colors[this.defaults.relationship.color].relationships}get groupColors(){let t=this.defaults.group?.color;if(!t)return this.elementColors;if(!this.isThemeColor(t))throw Error(`Default group color not found in theme: ${t}`);return U(this,"defaultGroup",()=>({...this.elementColors,...this.theme.colors[t].elements}))}isDefaultColor(t){return t===this.defaults.color}colors(t){return this.computeFrom(t??this.defaults.color)}compoundColorsCache=new So.default(t=>new de.default(n=>Hy(t,n)));colorsForCompounds(t,n){return this.compoundColorsCache.get(t).get(n??6)}fontSize(t){return t??=this.defaults.text??this.defaults.size,this.theme.textSizes[t]}padding(t){return t??=this.defaults.padding??this.defaults.size,this.theme.spacing[t]}iconSize(t){return t??=this.defaults.size,this.theme.iconSizes[t]}isThemeColor(t){return t in this.theme.colors}nodeSizes(t){let n=Vy(t,this.defaults.size);return{sizes:n,values:{sizes:this.theme.sizes[n.size],padding:this.padding(n.padding),textSize:this.fontSize(n.textSize),iconSize:this.iconSize(n.iconSize)}}}computeFrom(t){if(this.isThemeColor(t))return this.theme.colors[t];if(!Fe.valid(t))throw Error(`Invalid color value: "${t}" (not a theme color and not a valid CSS color)`);return jy(t)}equals(t){return t===this?!0:this.constructor===t.constructor?this.fingerprint===t.fingerprint:!1}tagColor(t){return this.isThemeColor(t)?this.theme.colors[t].elements:Ky(t)?this.computeFrom(js[t]).elements:this.computeFrom(t).elements}};function Vy({size:e,padding:t,textSize:n,iconSize:r,...o},l=jn.defaults.size){return e??=l,n??=e,t??=e,r??=e,{...o,size:e,padding:t,textSize:n,iconSize:r}}function D5(e){let t=typeof e=="string"?e:e.color;return t.startsWith("#")||t.startsWith("rgb")}function Qy(e){return"tag"in e}function Yy(e){return"kind"in e}function Jy(e){return"metadata"in e}function _y(e){return"participant"in e}function e4(e){return"not"in e}function t4(e){return"and"in e}function n4(e){return"or"in e}function Pt(e){switch(!0){case _y(e):{let t=e.participant;return r4(t,Pt(e.operator))}case Qy(e):{if(Le(e.tag)||"eq"in e.tag){let n=Le(e.tag)?e.tag:e.tag.eq;return r=>Array.isArray(r.tags)&&r.tags.includes(n)}let t=e.tag.neq;return n=>!Array.isArray(n.tags)||!n.tags.includes(t)}case Yy(e):{if(Le(e.kind)||"eq"in e.kind){let n=Le(e.kind)?e.kind:e.kind.eq;return r=>r.kind===n}let t=e.kind.neq;return n=>ne(n.kind)||n.kind!==t}case Jy(e):{let{key:t,value:n}=e.metadata;if(n===void 0)return o=>o.metadata!=null&&t in o.metadata&&o.metadata[t]!=null;if(Le(n)||"eq"in n){let o=Le(n)?n:n.eq;return l=>{if(!l.metadata)return!1;let i=l.metadata[t];return Array.isArray(i)?i.includes(o):i===o}}let r=n.neq;return o=>{if(!o.metadata)return!0;let l=o.metadata[t];return l==null?!0:Array.isArray(l)?!l.includes(r):l!==r}}case e4(e):return ql(Pt(e.not));case t4(e):return kc(e.and.map(Pt));case n4(e):return Ec(e.or.map(Pt));default:rs(e)}}function r4(e,t){return n=>{if(!n.source||!n.target)return!1;switch(e){case"source":return t(n.source);case"target":return t(n.target)}}}function o4(e){return e._type==="element"}function i4(e){return e._type==="dynamic"}function F5(e){return br(e)&&e.includes(".")?e.slice(0,e.indexOf(".")+1):null}const l4=Symbol.for("text"),a4=Symbol.for("html");var we=class ue{static mdcache=new xi.default(500);static txtcache=new xi.default(500);static getOrCreateFromText(t){if(t=t.trimEnd(),t==="")return ue.EMPTY;let n=ue.txtcache.get(t);return n||(n=new ue({txt:t}),ue.txtcache.set(t,n),n)}static getOrCreateFromMarkdown(t){if(t=t.trimEnd(),t==="")return ue.EMPTY;let n=ue.mdcache.get(t);return n||(n=new ue({md:t}),ue.mdcache.set(t,n),n)}static memoize(t,n,r){return U(t,n,()=>ue.from(r))}static from(t){return t==null||t===ue.EMPTY?ue.EMPTY:t instanceof ue?t:typeof t=="string"?this.getOrCreateFromText(t):"isEmpty"in t&&t.isEmpty?ue.EMPTY:"md"in t?this.getOrCreateFromMarkdown(t.md):this.getOrCreateFromText(t.txt)}static EMPTY=new class extends ue{isEmpty=!0;nonEmpty=!1;isMarkdown=!1;$source=null;constructor(){super({txt:""})}get text(){return null}get md(){return null}get html(){return null}};$source;isEmpty;nonEmpty;isMarkdown;constructor(t){this.isMarkdown=!1,typeof t=="string"?(this.$source={txt:t},this.isEmpty=t.trim()===""):(this.$source=t,this.isEmpty=!0,"md"in t?(this.isEmpty=t.md==="",this.isMarkdown=!0):this.isEmpty=t.txt===""),this.nonEmpty=!this.isEmpty}get text(){if(this.isEmpty||this.$source===null)return"";let t=this.$source;return"txt"in t?t.txt:U(this,l4,()=>i2(t.md))}get md(){if(this.isEmpty||this.$source===null)return"";let t=this.$source;if("md"in t)return t.md;if("txt"in t)return t.txt;rs(t)}get html(){if(this.isEmpty||this.$source===null)return"";let t=this.$source;return"txt"in t?t.txt:U(this,a4,()=>o2(t.md))}equals(t){return this===t?!0:t instanceof ue?this.isEmpty&&t.isEmpty?!0:this.isEmpty!==t.isEmpty||this.isMarkdown!==t.isMarkdown?!1:this.isMarkdown?this.$source?.md===t.$source?.md:this.$source?.txt===t.$source?.txt:!1}};function s4(e){return Array.isArray(e)&&e.length===2&&typeof e[0]=="number"&&typeof e[1]=="number"}function N5(e){return s4(e)?{x:e[0],y:e[1]}:[e.x,e.y]}const O5={center({x:e,y:t,width:n,height:r}){return{x:e+n/2,y:t+r/2}},toPoints({x:e,y:t,width:n,height:r}){return[{x:e,y:t},{x:e+n,y:t},{x:e+n,y:t+r},{x:e,y:t+r}]},fromPoints(e){let{x1:t,y1:n,x2:r,y2:o}=c4.fromPoints(e);return{x:t,y:n,width:r-t,height:o-n}},merge(...e){if(z(Xe(e,1),"No boxes provided"),e.length===1)return e[0];let t=e[0].x,n=e[0].y,r=e[0].x+e[0].width,o=e[0].y+e[0].height;for(let l=1;l<e.length;l++){let i=e[l];t=Math.min(t,i.x),n=Math.min(n,i.y),r=Math.max(r,i.x+i.width),o=Math.max(o,i.y+i.height)}return{x:Math.floor(t),y:Math.floor(n),width:Math.round(r-t),height:Math.round(o-n)}},fromRectBox(e){return{x:Math.min(e.x1,e.x2),y:Math.min(e.y1,e.y2),width:Math.abs(e.x2-e.x1),height:Math.abs(e.y2-e.y1)}},toRectBox(e){return{x1:e.x,y1:e.y,x2:e.x+e.width,y2:e.y+e.height}},expand(e,t){return t===0?e:{x:e.x-t,y:e.y-t,width:e.width+t*2,height:e.height+t*2}},shrink(e,t){return t===0?e:{x:e.x+t,y:e.y+t,width:e.width-t*2,height:e.height-t*2}},includes(e,t){return e===t?!0:e.x<=t.x&&e.y<=t.y&&e.x+e.width>=t.x+t.width&&e.y+e.height>=t.y+t.height}},c4={center({x1:e,y1:t,x2:n,y2:r}){return{x:(e+n)/2,y:(t+r)/2}},fromPoints(e){z(e.length>0,"At least one point is required");let t=1/0,n=1/0,r=-1/0,o=-1/0;for(let[l,i]of e)t=Math.min(t,l),n=Math.min(n,i),r=Math.max(r,l),o=Math.max(o,i);return{x1:t,y1:n,x2:r,y2:o}},merge(...e){z(e.length>0,"No boxes provided");let t=1/0,n=1/0,r=-1/0,o=-1/0;for(let l of e)t=Math.min(t,l.x1),n=Math.min(n,l.y1),r=Math.max(r,l.x2),o=Math.max(o,l.y2);return{x1:t,y1:n,x2:r,y2:o}},toBBox(e){return{x:e.x1,y:e.y1,width:e.x2-e.x1,height:e.y2-e.y1}},includes(e,t){return e===t?!0:e.x1<=t.x1&&e.y1<=t.y1&&e.x2>=t.x2&&e.y2>=t.y2}};var _r=class Re{constructor(t,n){this.x=t,this.y=n,z(typeof t=="number"&&!isNaN(t)&&isFinite(t)&&typeof n=="number"&&!isNaN(n)&&isFinite(n),`Invalid arguments for Vector: (${t}, ${n})`)}static create(...t){return t.length===2?new Re(t[0],t[1]):new Re(t[0].x,t[0].y)}static add(t,n){return{x:t.x+n.x,y:t.y+n.y}}static subtract(t,n){return{x:t.x-n.x,y:t.y-n.y}}static multiply(t,n){return{x:t.x*n,y:t.y*n}}static divide(t,n){return{x:t.x/n,y:t.y/n}}static dot(t,n){return t.x*n.x+t.y*n.y}add(t){return new Re(this.x+t.x,this.y+t.y)}subtract(t){return new Re(this.x-t.x,this.y-t.y)}multiply(t){return new Re(this.x*t,this.y*t)}divide(t){return new Re(this.x/t,this.y/t)}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}length(){return this.x===0&&this.y===0?0:Math.sqrt(this.x**2+this.y**2)}normalize(){let t=this.length();return t===0?new Re(0,0):new Re(this.x/t,this.y/t)}round(){return new Re(Math.round(this.x),Math.round(this.y))}trunc(){return new Re(Math.trunc(this.x),Math.trunc(this.y))}toObject(){return{x:this.x,y:this.y}}};function R5(...e){return e.length===1&&e[0]instanceof _r?e[0]:e.length===2?new _r(e[0],e[1]):new _r(e[0].x,e[0].y)}function d4(e){return Me(e,Gl(t=>!!t.notation),kr(gt("notation")),Br(Er(kr(gt("shape")),Br(Er(kr(gt("color")),Br(Er(pn(gt("kind")),cr())),cn(),pn(([t,n])=>({kinds:n,color:t})))),cn(),pi(([t,n])=>n.map(({color:r,kinds:o})=>({shape:t,color:r,kinds:o}))))),cn(),pi(([t,n])=>n.map(({shape:r,color:o,kinds:l})=>({title:t,shape:r,color:o,kinds:l}))),Kl(gt("shape"),gt("title"),[t=>t.kinds.length,"desc"]))}const ae=(e,t)=>e===t||ne(e)&&ne(t)?!1:!Yn(e,t);function f4(e,t){e.color=t.color,e.kind=t.kind,e.navigateTo=t.navigateTo??null,e.links=t.links?[...t.links]:null,e.tags=[...t.tags],ne(t.style.border)?delete e.style.border:e.style.border=t.style.border,Wc(t.style.opacity)?e.style.opacity=t.style.opacity:delete e.style.opacity,ne(t.style.multiple)?delete e.style.multiple:e.style.multiple=t.style.multiple}function u4(e,t,n){if(ae(t.icon??"none",e.icon??"none")){let r=Se(e.icon)&&e.icon!=="none";switch(!0){case(r&&Se(t.icon)&&t.icon!=="none"):return e.icon=t.icon,!0;case(r&&(ne(t.icon)||t.icon==="none")):return e.icon="none",!0;case(!r&&Se(t.icon)&&t.icon!=="none"):return n?(e.icon=t.icon,!0):!1}}return!0}function h4(e,t,n){let r=!0;return ae(e.style.iconColor,t.style.iconColor)&&(ne(t.style.iconColor)?delete e.style.iconColor:e.style.iconColor=t.style.iconColor),ae(e.style.iconSize,t.style.iconSize)&&(n?ne(t.style.iconSize)?delete e.style.iconSize:e.style.iconSize=t.style.iconSize:r=!1),ae(e.style.iconPosition,t.style.iconPosition)&&(n?ne(t.style.iconPosition)?delete e.style.iconPosition:e.style.iconPosition=t.style.iconPosition:r=!1),r}function Tr(e,t){return e?"md"in t?(e.md=t.md,delete e.txt,e):("txt"in t&&(e.txt=t.txt,delete e.md),e):t}function p4(e,t,n){let r=!0;return ae(e.title,t.title)&&(n?e.title=t.title:r=!1),ae(e.description,t.description)&&(ne(t.description)?delete e.description:n?e.description=Tr(e.description,t.description):r=!1),ae(e.technology,t.technology)&&(ne(t.technology)?delete e.technology:n?e.technology=t.technology:r=!1),r}function g4(e,t,n){return e.title=t.title,ne(t.description)?delete e.description:e.description=Tr(e.description,t.description),ne(t.technology)?delete e.technology:e.technology=t.technology,!0}function $s(e,t){z(e.id===t.id,"applyManualLayout: view ids do not match"),z(e._stage==="layouted","applyManualLayout: expected layouted view"),z(t._stage==="layouted","applyManualLayout: expected layouted snapshot"),z(e._layout!=="manual","applyManualLayout: expected auto-layouted view");let n=new Set;e._type!==t._type&&n.add("type-changed");let r=m4(t.nodes,e.nodes,n),o=y4(t.edges,e.edges,n),l=d4(r);return yt(t,i=>{i.title=e.title??t.title,i.description=e.description??t.description,i.tags=e.tags?[...e.tags]:null,i.links=e.links?[...e.links]:null,i.sourcePath=e.sourcePath,i[Fo]="manual",l&&l.length>0?i.notation={nodes:l}:delete i.notation,i.nodes=Qn(r),i.edges=Qn(o),i4(e)&&i._type==="dynamic"&&(i.variant=e.variant),o4(e)&&i._type==="element"&&(e.viewOf?i.viewOf=e.viewOf:delete i.viewOf,e.extends?i.extends=e.extends:delete i.extends);let a=[...n];Xe(a,1)?i.drifts=a:(i.hash=e.hash,delete i.drifts)})}function m4(e,t,n){let r=new Map(t.map(l=>[l.id,l])),o=e.map(l=>{let i=r.get(l.id);return i?(r.delete(i.id),yt(l,a=>{f4(a,i);let s=new Set,c=l.children.length>0,d=i.children.length>0;(ae(a.modelRef,i.modelRef)||ae(a.deploymentRef,i.deploymentRef))&&s.add("modelRef-changed"),d&&!c&&s.add("became-compound"),!d&&c&&s.add("became-leaf"),ae(a.parent,i.parent)&&s.add("parent-changed");let f=a.width+5>=i.width&&a.height+5>=i.height;ae(a.shape,i.shape)&&(f?a.shape=i.shape:s.add("shape-changed")),h4(a,i,f)||s.add("label-changed"),u4(a,i,f&&d===c)||s.add("label-changed"),(c?g4:p4)(a,i,f)||s.add("label-changed"),ae(a.notes,i.notes)&&(ne(i.notes)?delete a.notes:a.notes=Tr(a.notes,i.notes)),ae(l.notation,i.notation)&&(a.notation=i.notation??null),c&&d&&t2(new Set(l.children),new Set(i.children)).size>0&&s.add("children-changed");let u=[...s];Xe(u,1)?(n.add("nodes-drift"),a.drifts=u):delete a.drifts})):(n.add("nodes-removed"),{...l,drifts:["removed"]})});return r.size>0&&n.add("nodes-added"),o}function y4(e,t,n){let r=new Map(t.map(l=>[l.id,l])),o=e.map(l=>{let i=r.get(l.id)??Me(r.values(),Tt(a=>a.source===l.source&&a.target===l.target),xn());return i&&r.delete(i.id),yt(l,a=>{if(!i){a.drifts=["removed"],n.add("edges-removed");return}let s=new Set,c=l.id===i.id;switch(!0){case(c&&l.source==i.source&&l.target==i.target):ae(a.dir??"forward",i.dir??"forward")&&s.add("direction-changed");break;case(c&&l.source==i.target&&l.target==i.source):l.source!==l.target&&s.add("direction-changed");break;case c:l.source!=i.source&&s.add("source-changed"),l.target!=i.target&&s.add("target-changed");break;default:z(l.id!=i.id,"Unexpected case in edge drift detection, ids should not match"),z(l.source==i.source,"Unexpected case in edge drift detection, sources should match"),z(l.target==i.target,"Unexpected case in edge drift detection, targets should match"),ae(a.dir??"forward",i.dir??"forward")&&s.add("direction-changed");break}if(a.color=i.color,a.line=i.line,a.navigateTo=i.navigateTo??null,a.tags=i.tags?[...i.tags]:null,ae(l.notes,i.notes)&&(ne(l.notes)!==ne(i.notes)&&s.add("notes-changed"),a.notes=i.notes??l.notes),i.astPath?a.astPath=i.astPath:delete a.astPath,ae(gi(l,["label","description","technology","labelBBox"]),gi(i,["label","description","technology","labelBBox"])))switch(!0){case(i.labelBBox&&!l.labelBBox):s.add("label-added");break;case(l.labelBBox&&!i.labelBBox):s.add("label-removed");break;case(!!l.labelBBox&&!!i.labelBBox):i.labelBBox.width*i.labelBBox.height>(l.labelBBox.width+5)*(l.labelBBox.height+5)&&(a.labelBBox.width=Math.round(i.labelBBox.width),a.labelBBox.height=Math.round(i.labelBBox.height)),ae(l.label,i.label)&&(ne(i.label)!==ne(l.label)&&s.add("label-changed"),a.label=i.label??l.label),ae(l.description,i.description)&&(ne(i.description)!==ne(l.description)&&s.add("label-changed"),i.description&&(a.description=Tr(l.description,i.description))),ae(l.technology,i.technology)&&(ne(i.technology)!==ne(l.technology)&&s.add("label-changed"),a.technology=i.technology??l.technology??null);break;default:z(!l.labelBBox,"Unexpected case in edge labelBBox drift detection"),z(!i.labelBBox,"Unexpected case in next labelBBox drift detection");break}let d=[...s];Xe(d,1)?(n.add("edges-drift"),a.drifts=d):delete a.drifts})});return r.size>0&&n.add("edges-added"),o}function x4(e,t){let{drifts:n,...r}=$s(e,t);if(!n||n.length===0)return yt(e,d=>{delete d.drifts,d[Fo]="auto"});let o=new Set;n.includes("type-changed")&&o.add("type-changed");let l=new Map(r.nodes.map(d=>[d.id,d])),i=new Map(r.edges.map(d=>[d.id,d])),a=e.nodes.map(d=>{let f=l.get(d.id);return f&&l.delete(f.id),yt(d,u=>{if(!f){o.add("nodes-added"),u.drifts=["added"];return}f.drifts?(o.add("nodes-drift"),u.drifts=[...f.drifts]):delete u.drifts})});l.size>0&&o.add("nodes-removed");let s=e.edges.map(d=>{let f=i.get(d.id)??Me(i.values(),Tt(u=>u.source===d.source&&u.target===d.target),xn());return f&&i.delete(f.id),yt(d,u=>{if(!f){o.add("edges-added"),u.drifts=["added"];return}f.drifts?(o.add("edges-drift"),u.drifts=[...f.drifts]):delete u.drifts})});i.size>0&&o.add("edges-removed");let c=[...o];return yt(e,d=>{Xe(c,1)?d.drifts=c:delete d.drifts,d.nodes=Qn(a),d.edges=Qn(s),d[Fo]="auto"})}var Gn=class{Aux;id;_literalId;hierarchyLevel;imported;constructor(e,t){this.$model=e,this.$element=t,this.id=this.$element.id,this._literalId=this.$element.id;let[n,r]=Ks(this.id);n?(this.imported={from:n,fqn:r},this.hierarchyLevel=rr(r)):(this.imported=null,this.hierarchyLevel=rr(this.id))}get name(){return ls(this.id)}get parent(){return this.$model.parent(this)}get kind(){return this.$element.kind}get shape(){return this.style.shape}get color(){return this.style.color}get icon(){return this.style.icon??null}get tags(){return U(this,Symbol.for("tags"),()=>cr([...this.$element.tags??[],...this.$model.specification.elements[this.$element.kind]?.tags??[]]))}get metadata(){return this.$element.metadata??{}}get title(){return this.$element.title}get hasSummary(){return!!this.$element.summary&&!!this.$element.description&&!Io(this.$element.summary,this.$element.description)}get summary(){return we.memoize(this,"summary",$t(this.$element))}get description(){return we.memoize(this,"description",Ht(this.$element))}get technology(){return this.$element.technology??null}get links(){return this.$element.links??[]}get defaultView(){return U(this,Symbol.for("defaultView"),()=>xn(this.scopedViews())??null)}get isRoot(){return this.parent===null}get style(){return U(this,"style",()=>ei({shape:this.$model.$styles.defaults.shape,color:this.$model.$styles.defaults.color,border:this.$model.$styles.defaults.border,opacity:this.$model.$styles.defaults.opacity,size:this.$model.$styles.defaults.size,padding:this.$model.$styles.defaults.padding,textSize:this.$model.$styles.defaults.text,iconPosition:this.$model.$styles.defaults.iconPosition,...this.$element.style}))}get projectId(){return this.imported?.from??this.$model.projectId}isAncestorOf(e){return Ee(this,e)}isDescendantOf(e){return Ee(e,this)}ancestors(){return this.$model.ancestors(this)}commonAncestor(e){let t=Dn(this.id,e.id);return t?this.$model.element(t):null}children(){return this.$model.children(this)}descendants(e){return e?ss([...this.$model.descendants(this)],e)[Symbol.iterator]():this.$model.descendants(this)}siblings(){return this.$model.siblings(this)}*ascendingSiblings(){yield*this.siblings();for(let e of this.ancestors())yield*e.siblings()}*descendingSiblings(){for(let e of[...this.ancestors()].reverse())yield*e.siblings();yield*this.siblings()}incoming(e="all"){return this.$model.incoming(this,e)}*incomers(e="all"){let t=new Set;for(let n of this.incoming(e))t.has(n.source.id)||(t.add(n.source.id),yield n.source)}outgoing(e="all"){return this.$model.outgoing(this,e)}*outgoers(e="all"){let t=new Set;for(let n of this.outgoing(e))t.has(n.target.id)||(t.add(n.target.id),yield n.target)}get allOutgoing(){return U(this,Symbol.for("allOutgoing"),()=>new Set(this.outgoing()))}get allIncoming(){return U(this,Symbol.for("allIncoming"),()=>new Set(this.incoming()))}views(){return U(this,Symbol.for("views"),()=>{let e=new Set;for(let t of this.$model.views())t.includesElement(this.id)&&e.add(t);return e})}scopedViews(){return U(this,Symbol.for("scopedViews"),()=>{let e=new Set;for(let t of this.$model.views())t.isScopedElementView()&&t.viewOf.id===this.id&&e.add(t);return e})}isDeployed(){return Se(xn(this.deployments()))}deployments(){return this.$model.deployment.instancesOf(this)}hasMetadata(){return!!this.$element.metadata&&!vn(this.$element.metadata)}getMetadata(e){return e?this.$element.metadata?.[e]:this.$element.metadata??{}}isTagged(e){return this.tags.includes(e)}},Hs=class{Aux;get style(){return U(this,"style",()=>ei({shape:this.$model.$styles.defaults.shape,color:this.$model.$styles.defaults.color,border:this.$model.$styles.defaults.border,opacity:this.$model.$styles.defaults.opacity,size:this.$model.$styles.defaults.size,padding:this.$model.$styles.defaults.padding,textSize:this.$model.$styles.defaults.text,iconPosition:this.$model.$styles.defaults.iconPosition,...this.$node.style}))}get name(){return ls(this.id)}get shape(){return this.style.shape}get color(){return this.style.color}get icon(){return this.style.icon??null}get summary(){return we.memoize(this,"summary",$t(this.$node))}get description(){return we.memoize(this,"description",Ht(this.$node))}get technology(){return this.$node.technology??null}get links(){return this.$node.links??[]}ancestors(){return this.$model.ancestors(this)}commonAncestor(e){let t=Dn(this.id,e.id);return t?this.$model.node(t):null}siblings(){return this.$model.siblings(this)}isSibling(e){return this.parent===e.parent}*ascendingSiblings(){yield*this.siblings();for(let e of this.ancestors())yield*e.siblings()}*descendingSiblings(){for(let e of[...this.ancestors()].reverse())yield*e.siblings();yield*this.siblings()}incoming(e="all"){return this.$model.incoming(this,e)}outgoing(e="all"){return this.$model.outgoing(this,e)}*incomers(e="all"){let t=new Set;for(let n of this.incoming(e))t.has(n.source.id)||(t.add(n.source.id),yield n.source)}*outgoers(e="all"){let t=new Set;for(let n of this.outgoing(e))t.has(n.target.id)||(t.add(n.target.id),yield n.target)}*views(){for(let e of this.$model.views())e._type==="deployment"&&e.includesDeployment(this.id)&&(yield e)}isDeploymentNode(){return!1}isInstance(){return!1}get allOutgoing(){return U(this,Symbol.for("allOutgoing"),()=>Oo.from(new Set(this.outgoingModelRelationships()),new Set(this.outgoing())))}get allIncoming(){return U(this,Symbol.for("allIncoming"),()=>Oo.from(new Set(this.incomingModelRelationships()),new Set(this.incoming())))}hasMetadata(){return!!this.$node.metadata&&!vn(this.$node.metadata)}getMetadata(e){return e?this.$node.metadata?.[e]:this.$node.metadata??{}}isTagged(e){return this.tags.includes(e)}},Nl=class extends Hs{id;_literalId;title;hierarchyLevel;constructor(e,t){super(),this.$model=e,this.$node=t,this.id=t.id,this._literalId=t.id,this.title=t.title,this.hierarchyLevel=rr(t.id)}get parent(){return this.$model.parent(this)}get kind(){return this.$node.kind}get metadata(){return this.$node.metadata??{}}get tags(){return U(this,Symbol.for("tags"),()=>cr([...this.$node.tags??[],...this.$model.$model.specification.deployments[this.kind]?.tags??[]]))}children(){return this.$model.children(this)}descendants(e="desc"){return this.$model.descendants(this,e)}isDeploymentNode(){return!0}*instances(){for(let e of this.descendants("desc"))e.isInstance()&&(yield e)}onlyOneInstance(){let e=this.children();if(e.size!==1)return null;let t=xn(e);return t?t.isInstance()?t:t.onlyOneInstance():null}_relationshipsFromInstances=null;relationshipsFromInstances(){if(this._relationshipsFromInstances)return this._relationshipsFromInstances;let{outgoing:e,incoming:t}=this._relationshipsFromInstances={outgoing:new Set,incoming:new Set};for(let n of this.instances()){for(let r of n.element.outgoing())e.add(r);for(let r of n.element.incoming())t.add(r)}return this._relationshipsFromInstances}outgoingModelRelationships(){return this.relationshipsFromInstances().outgoing.values()}incomingModelRelationships(){return this.relationshipsFromInstances().incoming.values()}internalModelRelationships(){let{outgoing:e,incoming:t}=this.relationshipsFromInstances();return Xt(t,e)}},Ol=class extends Hs{id;_literalId;title;hierarchyLevel;constructor(e,t,n){super(),this.$model=e,this.$instance=t,this.element=n,this.id=t.id,this._literalId=t.id,this.title=t.title??n.title,this.hierarchyLevel=rr(t.id)}get $node(){return this.$instance}get parent(){return Ie(this.$model.parent(this),`Parent of ${this.id} not found`)}get style(){return U(this,"style",()=>ei({shape:this.$model.$styles.defaults.shape,color:this.$model.$styles.defaults.color,border:this.$model.$styles.defaults.border,opacity:this.$model.$styles.defaults.opacity,size:this.$model.$styles.defaults.size,padding:this.$model.$styles.defaults.padding,textSize:this.$model.$styles.defaults.text,iconPosition:this.$model.$styles.defaults.iconPosition,...this.element.$element.style,...this.$instance.style}))}get tags(){return U(this,Symbol.for("tags"),()=>cr([...this.$instance.tags??[],...this.element.tags]))}get kind(){return this.element.kind}get metadata(){return this.$instance.metadata??this.element.metadata??{}}get summary(){return we.memoize(this,"summary",$t(this.$instance)??$t(this.element.$element))}get description(){return we.memoize(this,"description",Ht(this.$instance)??Ht(this.element.$element))}get technology(){return this.$instance.technology??this.element.technology??null}get links(){return this.$instance.links??this.element.links}isInstance(){return!0}outgoingModelRelationships(){return this.element.outgoing()}incomingModelRelationships(){return this.element.incoming()}*views(){for(let e of this.$model.views())if(e._type==="deployment"){if(e.includesDeployment(this.id)){yield e;continue}e.includesDeployment(this.parent.id)&&this.parent.onlyOneInstance()&&(yield e)}}},b4=class{constructor(e,t){this.instance=e,this.element=t}get id(){return this.instance.id}get _literalId(){return this.instance.id}get style(){return U(this,"style ",()=>({shape:this.element.shape,color:this.element.color,...this.element.$element.style}))}get shape(){return this.element.shape}get color(){return this.element.color}get title(){return this.element.title}get summary(){return this.element.summary}get description(){return this.element.description}get technology(){return this.element.technology}isDeploymentNode(){return!1}isInstance(){return!1}},T4=class{boundary;source;target;constructor(e,t){this.$model=e,this.$relationship=t,this.source=e.deploymentRef(t.source),this.target=e.deploymentRef(t.target);let n=Dn(this.source.id,this.target.id);this.boundary=n?this.$model.node(n):null}get id(){return this.$relationship.id}get expression(){return`${this.source.id} -> ${this.target.id}`}get title(){return Se(this.$relationship.title)?this.$relationship.title:null}get technology(){return qt(this.$relationship.technology)?(this.kind&&this.$model.specification.relationships[this.kind])?.technology??null:this.$relationship.technology}get hasSummary(){return!!this.$relationship.summary&&!!this.$relationship.description&&!Io(this.$relationship.summary,this.$relationship.description)}get summary(){return we.memoize(this,"summary",$t(this.$relationship))}get description(){return we.memoize(this,"description",Ht(this.$relationship))}get tags(){return this.$relationship.tags??[]}get kind(){return this.$relationship.kind??null}get metadata(){return this.$relationship.metadata??{}}get navigateTo(){return this.$relationship.navigateTo?this.$model.$model.view(this.$relationship.navigateTo):null}get links(){return this.$relationship.links??[]}get color(){return this.$relationship.color??this.$model.$styles.defaults.relationship.color}get line(){return this.$relationship.line??this.$model.$styles.defaults.relationship.line}get head(){return this.$relationship.head??this.$model.$styles.defaults.relationship.arrow}get tail(){return this.$relationship.tail}*views(){for(let e of this.$model.views())e.includesRelation(this.id)&&(yield e)}isDeploymentRelation(){return!0}isModelRelation(){return!1}hasMetadata(){return!!this.$relationship.metadata&&!vn(this.$relationship.metadata)}getMetadata(e){return e?this.$relationship.metadata?.[e]:this.$relationship.metadata??{}}isTagged(e){return this.tags.includes(e)}},Oo=class St{static empty(){return new St}static from(t,n){return new St(new Set(t),new Set(n))}constructor(t=new Set,n=new Set){this.model=t,this.deployment=n}get isEmpty(){return this.model.size===0&&this.deployment.size===0}get nonEmpty(){return this.model.size>0||this.deployment.size>0}get size(){return this.model.size+this.deployment.size}intersect(t){return St.from(Xt(this.model,t.model),Xt(this.deployment,t.deployment))}difference(t){return St.from(To(this.model,t.model),To(this.deployment,t.deployment))}union(t){return St.from(bo(this.model,t.model),bo(this.deployment,t.deployment))}};const V=e=>typeof e=="string"?e:e.id,C5="/",ni=e=>{if(z(!e.includes(`
`),"View title cannot contain newlines"),e.includes("/")){let t=e.split("/").map(n=>n.trim()).filter(n=>n.length>0);return Xe(t,1)?t:[""]}return[e.trim()]},Ws=e=>ni(e).join("/"),w4=e=>{let t=ni(e);return Xe(t,2)?t.slice(0,-1).join("/"):null},v4=e=>e.includes("/")?ni(e).pop()??e:e.trim();var k4=class{#e=new Map;#l=new Map;#t=new de.default(()=>new Set);#n=new de.default(()=>new Set);#a=new Set;#r=new Map;#s=new de.default(()=>new Set);#i=new de.default(()=>new Set);#o=new de.default(()=>new Set);#c=new de.default(()=>new Set);#d=new Map;$deployments;constructor(e){this.$model=e;let t=this.$deployments=e.$data.deployments,n=Jn(t.elements);for(let r of yn(n)){let o=this.addElement(r);for(let l of o.tags)this.#c.get(l).add(o);o.isInstance()&&this.#n.get(o.element.id).add(o)}for(let r of Jn(t.relations)){let o=this.addRelation(r);for(let l of o.tags)this.#c.get(l).add(o)}}get $styles(){return this.$model.$styles}get projectId(){return this.$model.projectId}get project(){return this.$model.project}get specification(){return this.$model.specification}element(e){if(e instanceof Nl||e instanceof Ol)return e;let t=V(e);return Ie(this.#e.get(t),`Element ${t} not found`)}findElement(e){return this.#e.get(e)??null}node(e){let t=this.element(e);return z(t.isDeploymentNode(),`Element ${t.id} is not a deployment node`),t}findNode(e){let t=this.findElement(e);return t?(z(t.isDeploymentNode(),`Element ${t?.id} is not a deployment node`),t):null}instance(e){let t=this.element(e);return z(t.isInstance(),`Element ${t.id} is not a deployed instance`),t}findInstance(e){let t=this.findElement(e);return t?(z(t.isInstance(),`Element ${t?.id} is not a deployed instance`),t):null}roots(){return this.#a.values()}elements(){return this.#e.values()}*nodes(){for(let e of this.#e.values())e.isDeploymentNode()&&(yield e)}*nodesOfKind(e){for(let t of this.#e.values())t.isDeploymentNode()&&t.kind===e&&(yield t)}*instances(){for(let e of this.#e.values())e.isInstance()&&(yield e)}*instancesOf(e){let t=V(e),n=this.#n.get(t);n&&(yield*n)}deploymentRef(e){if(kt.isInsideInstanceRef(e)){let{deployment:t,element:n}=e;return Qm(this.#d,`${t}@${n}`,()=>new b4(this.instance(t),this.$model.element(n)))}return this.element(e.deployment)}relationships(){return this.#r.values()}relationship(e){let t=V(e);return Ie(this.#r.get(t),`DeploymentRelationModel ${t} not found`)}findRelationship(e){return this.#r.get(e)??null}*views(){for(let e of this.$model.views())e.isDeploymentView()&&(yield e)}parent(e){let t=V(e);return this.#l.get(t)||null}children(e){let t=V(e);return this.#t.get(t)}*siblings(e){let t=V(e),n=this.parent(e)?.children()??this.roots();for(let r of n)r.id!==t&&(yield r)}*ancestors(e){let t=V(e),n;for(;n=this.#l.get(t);)yield n,t=n.id}*descendants(e,t="desc"){for(let n of this.children(e))t==="asc"?(yield n,yield*this.descendants(n.id)):(yield*this.descendants(n.id),yield n)}*incoming(e,t="all"){let n=V(e);for(let r of this.#s.get(n))switch(!0){case t==="all":case(t==="direct"&&r.target.id===n):case(t==="to-descendants"&&r.target.id!==n):yield r;break}}*outgoing(e,t="all"){let n=V(e);for(let r of this.#i.get(n))switch(!0){case t==="all":case(t==="direct"&&r.source.id===n):case(t==="from-descendants"&&r.source.id!==n):yield r;break}}addElement(e){if(this.#e.has(e.id))throw Error(`Element ${e.id} already exists`);let t=Sy(e)?new Nl(this,Object.freeze(e)):new Ol(this,Object.freeze(e),this.$model.element(e.element));this.#e.set(t.id,t);let n=Xn(t.id);return n?(z(this.#e.has(n),`Parent ${n} of ${t.id} not found`),this.#l.set(t.id,this.node(n)),this.#t.get(n).add(t)):(z(t.isDeploymentNode(),`Root element ${t.id} is not a deployment node`),this.#a.add(t)),t}addRelation(e){if(this.#r.has(e.id))throw Error(`Relation ${e.id} already exists`);let t=new T4(this,Object.freeze(e));this.#r.set(t.id,t),this.#s.get(t.target.id).add(t),this.#i.get(t.source.id).add(t);let n=t.boundary?.id??null;if(n)for(let r of[n,...Gt(n)])this.#o.get(r).add(t);for(let r of Gt(t.source.id)){if(r===n)break;this.#i.get(r).add(t)}for(let r of Gt(t.target.id)){if(r===n)break;this.#s.get(r).add(t)}return t}},Rl=class{source;target;boundary;constructor(e,t){this.model=e,this.$relationship=t,this.source=e.element(kt.flatten(t.source)),this.target=e.element(kt.flatten(t.target));let n=Dn(this.source.id,this.target.id);this.boundary=n?this.model.element(n):null}get id(){return this.$relationship.id}get expression(){return`${this.source.id} -> ${this.target.id}`}get title(){return qt(this.$relationship.title)?null:this.$relationship.title}get technology(){return qt(this.$relationship.technology)?(this.kind&&this.model.specification.relationships[this.kind])?.technology??null:this.$relationship.technology}get hasSummary(){return!!this.$relationship.summary&&!!this.$relationship.description&&!Io(this.$relationship.summary,this.$relationship.description)}get summary(){return we.memoize(this,"summary",$t(this.$relationship))}get description(){return we.memoize(this,"description",Ht(this.$relationship))}get navigateTo(){return this.$relationship.navigateTo?this.model.view(this.$relationship.navigateTo):null}get tags(){return this.$relationship.tags??[]}get kind(){return this.$relationship.kind??null}get metadata(){return this.$relationship.metadata??{}}get links(){return this.$relationship.links??[]}get color(){return this.$relationship.color??this.model.$styles.defaults.relationship.color}get line(){return this.$relationship.line??this.model.$styles.defaults.relationship.line}get head(){return this.$relationship.head??this.model.$styles.defaults.relationship.arrow}get tail(){return this.$relationship.tail}*views(){for(let e of this.model.views())e.includesRelation(this.id)&&(yield e)}isDeploymentRelation(){return!1}isModelRelation(){return!0}hasMetadata(){return!!this.$relationship.metadata&&!vn(this.$relationship.metadata)}getMetadata(e){return e?this.$relationship.metadata?.[e]:this.$relationship.metadata??{}}isTagged(e){return this.tags.includes(e)}},B4=class{Aux;$viewModel;$view;$edge;constructor(e,t,n,r){this.source=n,this.target=r,this.$viewModel=e,this.$view=e.$view,this.$edge=t}get id(){return this.$edge.id}get parent(){return this.$edge.parent?this.$viewModel.node(this.$edge.parent):null}get label(){return this.$edge.label??null}get description(){return we.memoize(this,"description",this.$edge.description)}get technology(){return this.$edge.technology??null}hasParent(){return this.$edge.parent!==null}get tags(){return this.$edge.tags??[]}get stepNumber(){return this.isStep()?Xs(this.id):null}get navigateTo(){return this.$edge.navigateTo?this.$viewModel.$model.view(this.$edge.navigateTo):null}get color(){return this.$edge.color}get line(){return this.$edge.line??this.$viewModel.$styles.defaults.relationship.line}get head(){return this.$edge.head??this.$viewModel.$styles.defaults.relationship.arrow}get tail(){return this.$edge.tail}isStep(){return br(this.id)}*relationships(e){for(let t of this.$edge.relations)if(e){let n=this.$viewModel.$model.findRelationship(t,e);n&&(yield n)}else yield this.$viewModel.$model.relationship(t)}includesRelation(e){let t=typeof e=="string"?e:e.id;return this.$edge.relations.includes(t)}isTagged(e){return this.tags.includes(e)}},E4=class{Aux;$viewModel;$view;$node;constructor(e,t){this.$viewModel=e,this.$view=e.$view,this.$node=t}get id(){return this.$node.id}get title(){return this.$node.title}get kind(){return this.$node.kind}get description(){return we.memoize(this,"description",this.$node.description)}get technology(){return this.$node.technology??null}get notes(){return we.memoize(this,"notes",this.$node.notes)}get parent(){return this.$node.parent?this.$viewModel.node(this.$node.parent):null}get element(){let e=this.$node.modelRef;return e?this.$viewModel.$model.element(e):null}get deployment(){let e=this.$node.deploymentRef;return e?this.$viewModel.$model.deployment.element(e):null}get shape(){return this.$node.shape}get color(){return this.$node.color}get icon(){return this.$node.icon??null}get tags(){return this.$node.tags}get links(){return this.$node.links??[]}get navigateTo(){return this.$node.navigateTo?this.$viewModel.$model.view(this.$node.navigateTo):null}get style(){return this.$node.style}get x(){return"x"in this.$node?this.$node.x:void 0}get y(){return"y"in this.$node?this.$node.y:void 0}get width(){return"width"in this.$node?this.$node.width:void 0}get height(){return"height"in this.$node?this.$node.height:void 0}children(){return U(this,"children",()=>new Set(this.$node.children.map(e=>this.$viewModel.node(e))))}*ancestors(){let e=this.parent;for(;e;)yield e,e=e.parent}*siblings(){let e=this.parent?.children()??this.$viewModel.roots();for(let t of e)t.id!==this.id&&(yield t)}*incoming(e="all"){for(let t of this.$node.inEdges){let n=this.$viewModel.edge(t);switch(!0){case e==="all":case(e==="direct"&&n.target.id===this.id):case(e==="to-descendants"&&n.target.id!==this.id):yield n;break}}}*incomers(e="all"){let t=new Set;for(let n of this.incoming(e))t.has(n.source.id)||(t.add(n.source.id),yield n.source)}*outgoing(e="all"){for(let t of this.$node.outEdges){let n=this.$viewModel.edge(t);switch(!0){case e==="all":case(e==="direct"&&n.source.id===this.id):case(e==="from-descendants"&&n.source.id!==this.id):yield n;break}}}*outgoers(e="all"){let t=new Set;for(let n of this.outgoing(e))t.has(n.target.id)||(t.add(n.target.id),yield n.target)}isLayouted(){return"width"in this.$node&&"height"in this.$node}hasChildren(){return this.$node.children.length>0}hasParent(){return this.$node.parent!==null}hasElement(){return Se(this.$node.modelRef)}hasDeployment(){return Se(this.$node.deploymentRef)}hasDeployedInstance(){return this.hasElement()&&this.hasDeployment()}isGroup(){return Gs(this.$node)}isTagged(e){return this.tags.includes(e)}},Ro=class{Aux;#e;#l=new Set;#t=new Map;#n=new Map;#a=new Set;#r=new Set;#s=new Set;#i=new de.default(e=>new Set);#o;id;$model;title;folder;viewPath;constructor(e,t,n,r){this.$model=e,this.#e=n,this.id=n.id,this.folder=t,this.#o=r;for(let o of this.#e.nodes){let l=new E4(this,Object.freeze(o));this.#t.set(o.id,l),o.parent||this.#l.add(l),o.deploymentRef&&this.#r.add(o.deploymentRef),o.modelRef&&this.#a.add(o.modelRef);for(let i of l.tags)this.#i.get(i).add(l)}for(let o of this.#e.edges){let l=new B4(this,Object.freeze(o),this.node(o.source),this.node(o.target));for(let i of l.tags)this.#i.get(i).add(l);for(let i of o.relations)this.#s.add(i);this.#n.set(o.id,l)}this.title=n.title?v4(n.title):null,this.viewPath=n.title?Ws(n.title):n.id}get $styles(){return this.$model.$styles}get _type(){return this.#e[rn]}get stage(){return this.#e[xt]}get bounds(){if("bounds"in this.#e)return this.#e.bounds;if(this.#o)return this.#o.bounds;throw Error("View is not layouted")}get titleOrId(){return this.title??this.viewOf?.title??this.id}get titleOrUntitled(){return this.title??"Untitled"}get breadcrumbs(){return U(this,"breadcrumbs",()=>this.folder.isRoot?[this]:[...this.folder.breadcrumbs,this])}get description(){return we.memoize(this,"description",this.#e.description)}get tags(){return this.#e.tags??[]}get links(){return this.#e.links??[]}get viewOf(){if(this.isElementView()){let e=this.#e.viewOf;return e?this.$model.element(e):null}return null}get mode(){return this.isDynamicView()?this.#e.variant??"diagram":null}get includedTags(){return[...this.#i.keys()]}get $view(){if(!this.isLayouted()||"drifts"in this.#e)return this.#e;let e=this.#o;return e?U(this,"withDriftReasons",()=>x4(this.#e,e)):this.#e}get $layouted(){if(!this.isLayouted())throw Error("View is not layouted");return this.$manual??this.#e}get hasManualLayout(){return this.#o!==void 0}get hasLayoutDrifts(){if(!this.isLayouted())return!1;let e=this.$manual;return!!e?.drifts&&e.drifts.length>0}get $manual(){if(!this.isLayouted())return null;let e=this.#o;return e?U(this,"snapshotWithManualLayout",()=>$s(this.#e,e)):null}get projectId(){return this.$model.projectId}roots(){return this.#l.values()}*compounds(){for(let e of this.#t.values())e.hasChildren()&&(yield e)}node(e){let t=V(e);return Ie(this.#t.get(t),`Node ${t} not found in view ${this.#e.id}`)}findNode(e){return this.#t.get(V(e))??null}findNodeWithElement(e){let t=V(e);return this.#a.has(t)?Ym(this.#t.values(),n=>n.hasElement()&&n.element.id===t)??null:null}nodes(){return this.#t.values()}edge(e){let t=V(e);return Ie(this.#n.get(t),`Edge ${t} not found in view ${this.#e.id}`)}findEdge(e){return this.#n.get(V(e))??null}edges(){return this.#n.values()}*edgesWithRelation(e){for(let t of this.#n.values())t.includesRelation(e)&&(yield t)}*elements(){for(let e of this.#t.values())e.hasElement()&&(yield e)}isTagged(e){return this.tags.includes(e)}includesElement(e){return this.#a.has(V(e))}includesDeployment(e){return this.#r.has(V(e))}includesRelation(e){return this.#s.has(V(e))}isComputed(){return this.#e[xt]==="computed"}isLayouted(){return this.#e[xt]==="layouted"}isDiagram(){return this.#e[xt]==="layouted"}isElementView(){return this.#e[rn]==="element"}isScopedElementView(){return this.#e[rn]==="element"&&Se(this.#e.viewOf)}isDeploymentView(){return this.#e[rn]==="deployment"}isDynamicView(){return this.#e[rn]==="dynamic"}},Cl=class Zs{$model;path;title;isRoot;parentPath;defaultViewId;constructor(t,n,r){this.$model=t,this.path=n.join("/"),this.isRoot=this.path==="",this.title=Qc(n),this.isRoot?this.parentPath=void 0:this.parentPath=n.slice(0,-1).join("/"),this.defaultViewId=r}get defaultView(){return this.defaultViewId?this.$model.view(this.defaultViewId):null}get breadcrumbs(){return z(!this.isRoot,"Root view folder has no breadcrumbs"),U(this,"breadcrumbs",()=>{let t=this.parent;return t?t.isRoot?[t,this]:[...t.breadcrumbs,this]:[this]})}get parent(){return z(!this.isRoot,"Root view folder has no parent"),qt(this.parentPath)?null:this.$model.viewFolder(this.parentPath)}get children(){return this.$model.viewFolderItems(this.path)}get folders(){return U(this,"folders",()=>{let t=[];for(let n of this.children)n instanceof Zs&&t.push(n);return t})}get views(){return U(this,"views",()=>{let t=[];for(let n of this.children)n instanceof Ro&&t.push(n);return t})}},Co=class $n{Aux;_elements=new Map;_parents=new Map;_children=new de.default(()=>new Set);_rootElements=new Set;_relations=new Map;_incoming=new de.default(()=>new Set);_outgoing=new de.default(()=>new Set);_internal=new de.default(()=>new Set);_views=new Map;_rootViewFolder;_viewFolders=new Map;_viewFolderItems=new de.default(()=>new Set);_allTags=new de.default(()=>new Set);static fromParsed(t){return new $n(t)}static create(t){return new $n(t)}static fromDump(t){let{_stage:n="layouted",projectId:r="unknown",project:o,globals:l,imports:i,deployments:a,views:s,relations:c,elements:d,specification:f}=t;return new $n({[xt]:n,projectId:r,project:o,globals:{predicates:l?.predicates??{},dynamicPredicates:l?.dynamicPredicates??{},styles:l?.styles??{}},imports:i??{},deployments:{elements:a?.elements??{},relations:a?.relations??{}},views:s??{},relations:c??{},elements:d??{},specification:f})}deployment;$data;constructor(t){this.$data=t;for(let[,n]of cn(t.elements)){let r=this.addElement(n);for(let o of r.tags)this._allTags.get(o).add(r)}for(let[n,r]of cn(t.imports??{}))for(let o of yn(r)){let l=this.addImportedElement(n,o);for(let i of l.tags)this._allTags.get(i).add(l)}for(let n of Jn(t.relations)){let r=this.addRelation(n);for(let o of r.tags)this._allTags.get(o).add(r)}if(this.deployment=new k4(this),vl(t,"computed")||vl(t,"layouted")){let n=Zm("/"),r=Me(Jn(t.views),pn(l=>({view:l,path:Ws(l.title??l.id),folderPath:l.title&&w4(l.title)||""})),Ar((l,i)=>n(l.folderPath,i.folderPath))),o=l=>{let i=this._viewFolders.get(l);if(!i){let a=yi(l,"/");z(Xe(a,1),`View group path "${l}" must have at least one element`);let s;s=l===""?r.find(c=>c.view.id==="index"):r.find(c=>c.path===l),i=new Cl(this,a,s?.view.id),this._viewFolders.set(l,i)}return i};this._rootViewFolder=o("");for(let{folderPath:l}of r)this._viewFolders.has(l)||yi(l,"/").reduce((i,a)=>{let s=i.join("/"),c=o(vn(s)?a:s+"/"+a);return this._viewFolderItems.get(s).add(c),i.push(a),i},[]);for(let{view:l,folderPath:i}of r){let a=new Ro(this,o(i),l,t.manualLayouts?.[l.id]);this._viewFolderItems.get(i).add(a),this._views.set(l.id,a);for(let s of a.tags)this._allTags.get(s).add(a)}}else this._rootViewFolder=new Cl(this,[""],void 0),this._viewFolders.set(this._rootViewFolder.path,this._rootViewFolder)}get asParsed(){return this}get asComputed(){return this}get asLayouted(){return this}get $styles(){return U(this,"styles",()=>Uy.from(this.project.styles,this.specification.customColors))}isParsed(){return this.stage==="parsed"}isLayouted(){return this.stage==="layouted"}isComputed(){return this.stage==="computed"}get $model(){return this.$data}get stage(){return this.$data[xt]}get projectId(){return this.$data.projectId??"default"}get project(){return this.$data.project??U(this,Symbol.for("project"),()=>({id:this.projectId,styles:{},manualLayouts:{}}))}get specification(){return this.$data.specification}get globals(){return U(this,Symbol.for("globals"),()=>({predicates:{...this.$data.globals?.predicates},dynamicPredicates:{...this.$data.globals?.dynamicPredicates},styles:{...this.$data.globals?.styles}}))}element(t){if(t instanceof Gn)return t;let n=V(t);return Ie(this._elements.get(n),`Element ${n} not found`)}findElement(t){return this._elements.get(V(t))??null}roots(){return this._rootElements.values()}elements(){return this._elements.values()}relationships(){return this._relations.values()}relationship(t,n){if(n==="deployment")return this.deployment.relationship(t);let r=V(t),o=this._relations.get(r)??null;return o||n==="model"?Ie(o,`Model relation ${r} not found`):Ie(this.deployment.findRelationship(r),`No model/deployment relation ${r} not found`)}findRelationship(t,n){if(n==="deployment")return this.deployment.findRelationship(t);let r=this._relations.get(V(t))??null;return r||n==="model"?r:this.deployment.findRelationship(t)}views(){return this._views.values()}view(t){let n=V(t);return Ie(this._views.get(n),`View ${n} not found`)}findView(t){return this._views.get(t)??null}findManualLayout(t){return"manualLayouts"in this.$data?this.$data.manualLayouts?.[t]??null:null}viewFolder(t){return Ie(this._viewFolders.get(t),`View folder ${t} not found`)}get rootViewFolder(){return this._rootViewFolder}get hasViewFolders(){return this._viewFolders.size>1}viewFolderItems(t){return z(this._viewFolders.has(t),`View folder ${t} not found`),this._viewFolderItems.get(t)}parent(t){let n=V(t);return this._parents.get(n)||null}children(t){let n=V(t);return this._children.get(n)}*siblings(t){let n=V(t),r=this._parents.get(n),o=r?this._children.get(r.id).values():this.roots();for(let l of o)l.id!==n&&(yield l)}*ancestors(t){let n=V(t),r;for(;r=this._parents.get(n);)yield r,n=r.id}*descendants(t){for(let n of this.children(t))yield n,yield*this.descendants(n.id)}*incoming(t,n="all"){let r=V(t);for(let o of this._incoming.get(r))switch(!0){case n==="all":case(n==="direct"&&o.target.id===r):case(n==="to-descendants"&&o.target.id!==r):yield o;break}}*outgoing(t,n="all"){let r=V(t);for(let o of this._outgoing.get(r))switch(!0){case n==="all":case(n==="direct"&&o.source.id===r):case(n==="from-descendants"&&o.source.id!==r):yield o;break}}get tags(){return U(this,"tags",()=>Ar([...this._allTags.keys()],xo))}get tagsSortedByUsage(){return U(this,"tagsSortedByUsage",()=>Me([...this._allTags.entries()],pn(([t,n])=>({tag:t,count:n.size,tagged:n})),Ar((t,n)=>xo(t.tag,n.tag)),Kl([gt("count"),"desc"])))}findByTag(t,n){return Tt(this._allTags.get(t),r=>n==="elements"?r instanceof Gn:n==="views"?r instanceof Ro:n==="relationships"?r instanceof Rl:!0)}*elementsOfKind(t){for(let n of this._elements.values())n.kind===t&&(yield n)}*elementsWhere(t){let n=Pt(t);for(let r of this._elements.values())n(r)&&(yield r)}*relationshipsWhere(t){let n=Pt(t);for(let r of this._relations.values())n(r)&&(yield r)}addElement(t){if(this._elements.has(t.id))throw Error(`Element ${t.id} already exists`);let n=new Gn(this,Object.freeze(t));this._elements.set(n.id,n);let r=Xn(n.id);return r?(z(this._elements.has(r),`Parent ${r} of ${n.id} not found`),this._parents.set(n.id,this.element(r)),this._children.get(r).add(n)):this._rootElements.add(n),n}addImportedElement(t,n){z(!qs(n.id),"Imported element already has global FQN");let r=ti(t,n.id);if(this._elements.has(r))throw Error(`Element ${r} already exists`);let o=new Gn(this,Object.freeze({...n,id:r}));this._elements.set(o.id,o);let l=Xn(o.id);for(;l;){if(l.includes(".")&&this._elements.has(l))return this._parents.set(o.id,this.element(l)),this._children.get(l).add(o),o;l=Xn(l)}return this._rootElements.add(o),o}addRelation(t){if(this._relations.has(t.id))throw Error(`Relation ${t.id} already exists`);let n=new Rl(this,Object.freeze(t)),{source:r,target:o}=n;this._relations.set(n.id,n),this._incoming.get(o.id).add(n),this._outgoing.get(r.id).add(n);let l=Dn(r.id,o.id);if(l)for(let i of[l,...Gt(l)])this._internal.get(i).add(n);for(let i of Gt(r.id)){if(i===l)break;this._outgoing.get(i).add(n)}for(let i of Gt(o.id)){if(i===l)break;this._incoming.get(i).add(n)}return n}};(function(e){e.EMPTY=Co.create({_stage:"computed",projectId:"default",project:{id:"default"},specification:{elements:{},relationships:{},deployments:{},tags:{}},globals:{predicates:{},dynamicPredicates:{},styles:{}},deployments:{elements:{},relations:{}},elements:{},relations:{},views:{},imports:{}})})(Co||={});let A4;(function(e){e.isInside=o=>l=>Ee(o,l.source.id)&&Ee(o,l.target.id);let t=e.isDirectedBetween=(o,l)=>i=>(i.source.id===o||Ee(o,i.source.id))&&(i.target.id===l||Ee(l,i.target.id));e.isAnyBetween=(o,l)=>{let i=t(o,l),a=t(l,o);return s=>i(s)||a(s)};let n=e.isIncoming=o=>l=>(l.target.id===o||Ee(o,l.target.id))&&!Ee(o,l.source.id),r=e.isOutgoing=o=>l=>(l.source.id===o||Ee(o,l.source.id))&&!Ee(o,l.target.id);e.isAnyInOut=o=>{let l=n(o),i=r(o);return a=>l(a)||i(a)}})(A4||={});const Us=Symbol.for("nodejs.util.inspect.custom");var D4=class mt{id;constructor(t,n,r){this.source=t,this.target=n,this.relations=r,this.id=cs(`deployment:${t.id}:${n.id}`)}get expression(){return`${this.source.id} -> ${this.target.id}`}_boundary;get boundary(){return this._boundary??=this.source.commonAncestor(this.target),this._boundary}nonEmpty(){return this.relations.nonEmpty}[Us](t,n,r){let o=this.toString();return Object.defineProperty(o,"constructor",{value:mt,enumerable:!1}),o}toString(){let t=[...this.relations.model].map(r=>"    "+r.expression);t.length?t.unshift("  model:"):t.unshift("  model: []");let n=[...this.relations.deployment].map(r=>"    "+r.expression);return n.length?n.unshift("  deployment:"):n.unshift("  deployment: []"),[this.expression,...t,...n].join(`
`)}hasDirectDeploymentRelation(){for(let t of this.relations.deployment)if(t.source.id===this.source.id||t.target.id===this.target.id)return!0;return!1}*values(){yield*this.relations.model,yield*this.relations.deployment}mergeWith(t){return Array.isArray(t)?t.reduce((n,r)=>n.mergeWith(r),this):(z(this.source.id===t.source.id,"Cannot merge connections with different sources"),z(this.target.id===t.target.id,"Cannot merge connections with different targets"),new mt(this.source,this.target,this.relations.union(t.relations)))}difference(t){return new mt(this.source,this.target,this.relations.difference(t.relations))}intersect(t){return new mt(this.source,this.target,this.relations.intersect(t.relations))}equals(t){return z(t instanceof mt,"Other should ne DeploymentConnectionModel"),this.id===t.id&&this.source.id===t.source.id&&this.target.id===t.target.id&&wo(this.relations.model,t.relations.model)&&wo(this.relations.deployment,t.relations.deployment)}update(t){return t&&={model:this.relations.model,deployment:this.relations.deployment,...t},new mt(this.source,this.target,t?new Oo(t.model??new Set,t.deployment??new Set):this.relations)}};function Ll(e,t){return t?e.source===t.source&&e.target===t.target:n=>e.source===n.source&&e.target===n.target}var Il=class Ve{id;constructor(t,n,r=new Set){this.source=t,this.target=n,this.relations=r,this.id=cs(`model:${t.id}:${n.id}`)}_boundary;get boundary(){return this._boundary??=this.source.commonAncestor(this.target)}get expression(){return`${this.source.id} -> ${this.target.id}`}get isDirect(){return this.nonEmpty()&&!this.isImplicit}get isImplicit(){return this.nonEmpty()&&_m(this.relations,ql(Ll(this)))}get directRelations(){return new Set(Tt(this.relations,Ll(this)))}nonEmpty(){return this.relations.size>0}mergeWith(t){return z(this.source.id===t.source.id,"Cannot merge connections with different sources"),z(this.target.id===t.target.id,"Cannot merge connections with different targets"),new Ve(this.source,this.target,bo(this.relations,t.relations))}difference(t){return new Ve(this.source,this.target,To(this.relations,t.relations))}intersect(t){return z(t instanceof Ve,"Cannot intersect connection with different type"),new Ve(this.source,this.target,Xt(this.relations,t.relations))}equals(t){z(t instanceof Ve,"Cannot merge connection with different type");let n=t;return this.id===n.id&&this.source.id===n.source.id&&this.target.id===n.target.id&&wo(this.relations,n.relations)}update(t){return new Ve(this.source,this.target,t)}[Us](t,n,r){let o=this.toString();return Object.defineProperty(o,"constructor",{value:Ve,enumerable:!1}),o}toString(){return[this.expression,this.relations.size?"  relations:":"  relations: [ ]",...[...this.relations].map(t=>"    "+t.expression)].join(`
`)}reversed(){return new Ve(this.target,this.source)}};kn({findConnection:()=>ri,findConnectionsBetween:()=>Vs,findConnectionsWithin:()=>F4});function ri(e,t,n="directed"){if(e===t||Wo(e,t))return[];let r=e.allOutgoing.intersect(t.allIncoming),o=r.nonEmpty?[new D4(e,t,r)]:[];return n==="directed"?o:[...o,...ri(t,e,"directed")]}function Vs(e,t,n="both"){if(e.allIncoming.isEmpty&&e.allOutgoing.isEmpty)return[];let r=[],o=[];for(let l of t)if(e!==l)for(let i of ri(e,l,n))i.source===e?r.push(i):o.push(i);return[...r,...o]}function F4(e){return[...e].reduce((t,n,r,o)=>(r===o.length-1||t.push(...Vs(n,o.slice(r+1),"both")),t),[])}var L5=kn({findConnection:()=>Qs,findConnectionsBetween:()=>Ys,findConnectionsWithin:()=>N4});function Qs(e,t,n="directed"){if(e===t||Wo(e,t))return[];let r=Xt(e.allOutgoing,t.allIncoming),o=r.size>0?new Il(e,t,r):null;if(n==="directed")return o?[o]:[];let l=Xt(e.allIncoming,t.allOutgoing),i=l.size>0?new Il(t,e,l):null;return o&&i?[o,i]:o?[o]:i?[i]:[]}function Ys(e,t,n="both"){if(e.allIncoming.size===0&&e.allOutgoing.size===0)return[];let r=[],o=[];for(let l of t)if(e!==l)for(let i of Qs(e,l,n))i.source===e?r.push(i):o.push(i);return[...r,...o]}function N4(e){return[...e].reduce((t,n,r,o)=>(r===o.length-1||t.push(...Ys(n,o.slice(r+1),"both")),t),[])}const O4=e=>{let t=fi(e,a=>Co.create(a));function n(a){let s=e.get();if(ui(s,a))return;let c={...a,views:bc(a.views,d=>{let f=s.views[d.id];return ui(f,d)?f:d})};e.set(c)}let r=fi(e,a=>Object.values(a.views));function o(){return ro(t)}function l(){return ro(r)}function i(a){let[s,c]=bt.useState(e.value?.views[a]??null);return bt.useEffect(()=>e.subscribe(d=>{c(d.views[a]??null)}),[a]),s}return{updateModel:n,$likec4model:t,useLikeC4Model:o,useLikeC4Views:l,useLikeC4View:i}},R4=[{id:"industrial-edge-architecture",title:"Industrial Edge Monitoring Architecture"}],C4=Lo([...R4]);function I5(){return ro(C4)}let eo={"industrial-edge-architecture":()=>Bt(()=>Promise.resolve().then(()=>q4),void 0)};async function S5(e){let t=eo[e];if(!t){const n=Object.keys(eo);if(console.error("Unknown projectId: "+e+" (available: "+n+")"),n.length===0)throw new Error("No projects found, invalid state");e=n[0],console.warn("Falling back to project: "+e),t=eo[e]}return await t()}var P5=de.default;So.default;$l.default;Hl.default;var z5=Wl.default,M5=de.default;So.default;$l.default;Hl.default;Wl.default;Id.default;vd();je(kd());function L4(e){let t=yn([...e]),n=new Set(t),r=new Map,o=new de.default(()=>null),l=t.reduce((i,a,s,c)=>(r.set(a.id,a),i.set(a.id,Me(c,Rc(s+1),Gl(as(a)),ld((d,f)=>(n.delete(f),d.some(Ee(f))||(d.push(f),o.set(f.id,a)),d),[]))),i),new de.default(()=>[]));return{sorted:t,byId:i=>Ie(r.get(i),`Element not found by id: ${i}`),root:n,parent:i=>o.get(typeof i=="string"?i:i.id),children:i=>l.get(typeof i=="string"?i:i.id),flatten:rd(()=>new Set([...n,...t.reduce((i,a)=>{let s=l.get(a.id);return s.length===0?(i.push(a),i):(s.length>1&&i.push(...s),i)},[])]))}}const to=(e,t)=>e.size>2&&t.size!==e.size?new Set(yn([...L4(e).flatten(),...t])):e.size>1?new Set(yn([...e])):e;function Js(e,t,n){let r=s=>t.has(s),o=new Set([e]),l={incomers:new Set,subjects:new Set([e]),outgoers:new Set},i=new Set(n.incoming.flatMap(s=>{if(l.subjects.add(s.target),l.incomers.add(s.source),o.add(s.target),s.target!==e){let f=s.target.parent;for(;f&&f!==e;)o.add(f),f=f.parent}let c=s.source,d=[];for(;d.push(c),!(r(c)||!c.parent);)c=c.parent;return d})),a=new Set(n.outgoing.flatMap(s=>{if(l.subjects.add(s.source),l.outgoers.add(s.target),o.add(s.source),s.source!==e){let f=s.source.parent;for(;f&&f!==e;)o.add(f),f=f.parent}let c=s.target,d=[];for(;d.push(c),!(r(c)||!c.parent);)c=c.parent;return d}));return{incomers:to(i,l.incomers),incoming:new Set(n.incoming),subjects:to(o,l.subjects),outgoing:new Set(n.outgoing),outgoers:to(a,l.outgoers)}}function G5(e,t,n,r="global"){let o=n?t.findView(n):null;if(r==="view")return z(o,'Scope view id is required when scope is "view"'),I4(e,o,t);let l=t.element(e);return Js(l,e2(l.ascendingSiblings()),{incoming:[...l.incoming()],outgoing:[...l.outgoing()]})}function I4(e,t,n){let r=n.element(e),o={incoming:ll(Tt(r.incoming(),i=>t.includesRelation(i.id))),outgoing:ll(Tt(r.outgoing(),i=>t.includesRelation(i.id)))},l=as(r);return Js(r,new Set([...r.ascendingSiblings(),...Me(t.elements(),Jm(i=>i.element),Tt(i=>i!==r&&l(i)))]),o)}let no={"industrial-edge-architecture":bt.lazy(()=>Bt(()=>Promise.resolve().then(()=>U4),void 0).then(e=>({default:e.IconRenderer})))};function q5(e){let t=no[e];if(!t){const n=Object.keys(no);if(console.error("Unknown projectId: "+e+" (available: "+n+")"),n.length===0)throw new Error("No projects found, invalid state");e=n[0],console.warn("Falling back to project: "+e),t=no[e]}return n=>ct.jsx(bt.Suspense,{children:ct.jsx(t,n)})}const K5={updateView:()=>{throw new Error("likec4rpc.updateView is not available in production")},calcAdhocView:()=>{throw new Error("likec4rpc.calcAdhocView is not available in production")}},_s=Lo({_stage:"layouted",projectId:"industrial-edge-architecture",project:{id:"industrial-edge-architecture",title:"Industrial Edge Monitoring Architecture"},specification:{tags:{},elements:{actor:{notation:"Участник",style:{shape:"person",color:"green"}},container:{notation:"Контейнер",style:{color:"amber"}},"developed-system":{notation:"Система в scope реализации",style:{color:"amber"}},system:{notation:"Внешняя система",style:{color:"secondary"}},"external-system":{notation:"Внешняя облачная система",style:{color:"secondary",icon:"bootstrap:cloud",iconColor:"blue"}},"field-gateway":{notation:"Полевой шлюз",style:{color:"secondary"}},"field-device":{notation:"Полевое устройство",style:{color:"secondary"}},"telemetry-point":{notation:"Точка телеметрии",style:{color:"secondary"}}},relationships:{"interact-with":{style:{color:"green",line:"solid",head:"normal"}}},deployments:{environment:{notation:"Среда развертывания",style:{color:"blue"}},"network-zone":{notation:"Сетевой контур",style:{color:"sky"}},host:{notation:"Хост",style:{color:"amber"}},"fieldbus-segment":{notation:"Полевой сегмент",style:{color:"blue"}},"network-endpoint":{notation:"Сетевой endpoint",style:{color:"indigo"}},"field-asset":{notation:"Физическое устройство",style:{color:"secondary"}}},customColors:{}},elements:{"demo-stand-current-monitored-scope":{notation:"Внешняя система",style:{color:"secondary"},technology:"KNX monitored signals / current read scope",description:{txt:"Текущий набор сигналов demo-стенда, которые читает Edge Telemetry Agent."},title:"Demo Stand Current Monitored Scope",kind:"system",id:"demo-stand-current-monitored-scope"},"demo-stand-current-monitored-scope.device-1-1-1":{notation:"Полевое устройство",style:{color:"secondary"},technology:"KNX TP device",description:{txt:"Кнопочная панель, участвующая в публикации feedback состояния света."},title:"1.1.1 Pushbutton sensor 4 Komfort, 4-gang",kind:"field-device",id:"demo-stand-current-monitored-scope.device-1-1-1"},"demo-stand-current-monitored-scope.device-1-1-2":{notation:"Полевое устройство",style:{color:"secondary"},technology:"KNX TP to DALI gateway",description:{txt:"DALI gateway, публикующий статус светового канала."},title:"1.1.2 DALI Gateway Tunable White Plus",kind:"field-device",id:"demo-stand-current-monitored-scope.device-1-1-2"},"demo-stand-current-monitored-scope.device-1-1-4":{notation:"Полевое устройство",style:{color:"secondary"},technology:"KNX TP room controller",description:{txt:"Комнатный контроллер, публикующий температуру помещения."},title:"1.1.4 Room controller display compact module",kind:"field-device",id:"demo-stand-current-monitored-scope.device-1-1-4"},"demo-stand-current-monitored-scope.light-switch-feedback":{notation:"Точка телеметрии",style:{color:"secondary"},technology:"KNX DPT 1.001 / feedback",description:{txt:"Фактически читаемая точка состояния света."},title:"0/0/7 StatusSwitch",kind:"telemetry-point",id:"demo-stand-current-monitored-scope.light-switch-feedback"},"demo-stand-current-monitored-scope.room-temperature":{notation:"Точка телеметрии",style:{color:"secondary"},technology:"KNX DPT 9.xxx / room temperature",description:{txt:"Фактически читаемая точка температуры помещения."},title:"2/0/0 Temp Value",kind:"telemetry-point",id:"demo-stand-current-monitored-scope.room-temperature"},"field-devices":{notation:"Внешняя система",style:{color:"secondary"},technology:"Field devices / PLC / RTU",description:{txt:"Датчики, актуаторы, PLC, RTU и локальные системы автоматизации на объекте."},title:"Полевые устройства и контроллеры",kind:"system",id:"field-devices"},"field-devices.knx-temperature-sensor":{notation:"Полевое устройство",style:{color:"secondary"},technology:"KNX",description:{txt:"Датчик температуры"},title:"knx-temperature-sensor",kind:"field-device",id:"field-devices.knx-temperature-sensor"},"notification-channels":{notation:"Внешняя облачная система",style:{color:"secondary",icon:"bootstrap:cloud",iconColor:"blue"},technology:"Email / SMS / Push / Webhook",description:{txt:"Email, SMS, push, webhook и другие внешние облачные каналы доставки тревог и служебных уведомлений."},title:"Каналы уведомлений",kind:"external-system",id:"notification-channels"},"field-protocol-gateways":{notation:"Внешняя система",style:{color:"secondary"},technology:"KNX / Modbus / OPC UA / SCADA",description:{txt:"Точки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы."},title:"Протокольные шлюзы и SCADA-контроллеры",kind:"system",id:"field-protocol-gateways"},"field-protocol-gateways.knx-router":{notation:"Полевой шлюз",style:{color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg"},technology:"KNX / KNXnet-IP",title:"KNX Segment",kind:"field-gateway",id:"field-protocol-gateways.knx-router"},"field-protocol-gateways.modbus-gateway":{notation:"Полевой шлюз",style:{color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/modbus.svg"},technology:"Modbus TCP / Modbus RTU",title:"Modbus Gateway",kind:"field-gateway",id:"field-protocol-gateways.modbus-gateway"},"field-protocol-gateways.opc-ua-gateway":{notation:"Полевой шлюз",style:{color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/opc-ua.svg"},technology:"OPC UA",title:"OPC UA Server",kind:"field-gateway",id:"field-protocol-gateways.opc-ua-gateway"},"service-engineer":{notation:"Участник",style:{shape:"person",color:"green"},description:{txt:"Настраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы."},title:"Сервисный инженер",kind:"actor",id:"service-engineer"},"operator-dispatcher":{notation:"Участник",style:{shape:"person",color:"green"},description:{txt:"Работает с событиями, текущим состоянием объекта и alarm через центральную платформу мониторинга."},title:"Оператор / диспетчер",kind:"actor",id:"operator-dispatcher"},"edge-telemetry-agent":{notation:"Система в scope реализации",style:{color:"amber"},technology:"Edge collector / normalization / buffering / delivery",description:{txt:"Универсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий."},title:"Edge Telemetry Agent",kind:"developed-system",id:"edge-telemetry-agent"},"monitoring-alarm-platform":{notation:"Система в scope реализации",style:{color:"amber"},technology:"Cloud monitoring platform / alarm engine / operator UI",description:{txt:"Центральная система в облаке/интернете для приема событий, хранения телеметрии, визуализации, alarm-логики и маршрутизации уведомлений."},title:"Monitoring & Alarm Platform",kind:"developed-system",id:"monitoring-alarm-platform"},"edge-telemetry-agent.collector-runtime":{notation:"Контейнер",style:{color:"amber"},technology:"Python service",description:{txt:"Основной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox."},title:"Collector Runtime",kind:"container",id:"edge-telemetry-agent.collector-runtime"},"edge-telemetry-agent.configuration-bundle":{notation:"Контейнер",style:{color:"amber"},technology:"YAML files",description:{txt:"Локальный набор конфигурации источников, модели сигналов, polling-политик и параметров доставки."},title:"Configuration Bundle",kind:"container",id:"edge-telemetry-agent.configuration-bundle"},"edge-telemetry-agent.delivery-worker":{notation:"Контейнер",style:{color:"amber"},technology:"Python worker / MQTT publisher",description:{txt:"Фоновый контейнер доставки: читает outbox, публикует telemetry events и service topics в MQTT topic tree и обновляет статус доставки."},title:"Delivery Worker",kind:"container",id:"edge-telemetry-agent.delivery-worker"},"edge-telemetry-agent.outbox-store":{notation:"Контейнер",style:{color:"amber",shape:"storage"},technology:"SQLite",description:{txt:"Локальное надежное хранилище исходящих событий, статусов доставки и метаданных повторных попыток."},title:"Outbox Store",kind:"container",id:"edge-telemetry-agent.outbox-store"},"monitoring-alarm-platform.alarm-rule-engine":{notation:"Контейнер",style:{color:"amber"},technology:"Rule engine / stream processor",description:{txt:"Обрабатывает входящие события по правилам, ведет жизненный цикл alarm и инициирует уведомления и эскалации."},title:"Alarm Rule Engine",kind:"container",id:"monitoring-alarm-platform.alarm-rule-engine"},"monitoring-alarm-platform.grafana":{notation:"Контейнер",style:{color:"amber"},technology:"Grafana OSS / grafana-mqtt-datasource",description:{txt:"Слой визуализации Monitoring & Alarm Platform: live-панели, инженерные dashboards и операторские представления. В текущей реализации подключается к MQTT Ingestion Gateway через grafana-mqtt-datasource."},title:"Grafana",kind:"container",id:"monitoring-alarm-platform.grafana"},"monitoring-alarm-platform.mqtt-ingestion-gateway":{notation:"Контейнер",style:{color:"amber"},technology:"MQTT broker / ingestion service",description:{txt:"Принимает MQTT telemetry events и service topics от edge-агентов, восстанавливает routing context из topic, валидирует payload и передает canonical events на хранение и в Alarm Rule Engine."},title:"MQTT Ingestion Gateway",kind:"container",id:"monitoring-alarm-platform.mqtt-ingestion-gateway"},"monitoring-alarm-platform.notification-service":{notation:"Контейнер",style:{color:"amber"},technology:"Worker / notification gateway",description:{txt:"Маршрутизирует уведомления во внешние каналы по alarm-политикам и правилам эскалации."},title:"Notification Service",kind:"container",id:"monitoring-alarm-platform.notification-service"},"monitoring-alarm-platform.platform-api":{notation:"Контейнер",style:{color:"amber"},technology:"HTTP API / backend service",description:{txt:"Backend API для состояния alarm, истории событий, конфигурации правил и политик уведомлений."},title:"Platform API",kind:"container",id:"monitoring-alarm-platform.platform-api"},"monitoring-alarm-platform.telemetry-store":{notation:"Контейнер",style:{color:"amber",shape:"storage"},technology:"Time-series DB / relational storage",description:{txt:"Хранит телеметрию, служебные события, историю alarm и данные для мониторинговых и операторских запросов."},title:"Telemetry Store",kind:"container",id:"monitoring-alarm-platform.telemetry-store"}},relations:{586866:{title:"Экспонирует nodes, subscriptions и значения через OPC UA",source:{model:"field-protocol-gateways.opc-ua-gateway"},target:{model:"edge-telemetry-agent.collector-runtime"},id:"586866"},ewjy7p:{title:"Публикует feedback состояния света 0/0/7",source:{model:"demo-stand-current-monitored-scope.device-1-1-1"},target:{model:"demo-stand-current-monitored-scope.light-switch-feedback"},id:"ewjy7p"},"1bukbxz":{title:"Публикует статус светового канала 0/0/7",source:{model:"demo-stand-current-monitored-scope.device-1-1-2"},target:{model:"demo-stand-current-monitored-scope.light-switch-feedback"},id:"1bukbxz"},lkpzpl:{title:"Публикует температуру помещения 2/0/0",source:{model:"demo-stand-current-monitored-scope.device-1-1-4"},target:{model:"demo-stand-current-monitored-scope.room-temperature"},id:"lkpzpl"},"8dkmwk":{title:"Поставляет feedback состояния света в текущий read scope",source:{model:"demo-stand-current-monitored-scope.light-switch-feedback"},target:{model:"edge-telemetry-agent.collector-runtime"},id:"8dkmwk"},"5anl8o":{title:"Поставляет температуру помещения в текущий read scope",source:{model:"demo-stand-current-monitored-scope.room-temperature"},target:{model:"edge-telemetry-agent.collector-runtime"},id:"5anl8o"},c9z7g3:{title:"Передают телеграммы, состояния и команды в KNX-сегменте",source:{model:"field-devices.knx-temperature-sensor"},target:{model:"field-protocol-gateways.knx-router"},id:"c9z7g3"},zexquv:{title:"Экспонирует group address и телеграммы через KNX/IP",source:{model:"field-protocol-gateways.knx-router"},target:{model:"edge-telemetry-agent.collector-runtime"},id:"zexquv"},"1mspxne":{title:"Экспонирует registers, coils и дискретные значения через Modbus",source:{model:"field-protocol-gateways.modbus-gateway"},target:{model:"edge-telemetry-agent.collector-runtime"},id:"1mspxne"},"15jllvw":{color:"green",line:"solid",head:"normal",title:"Настраивает адаптеры, модель сигналов, polling и доставку",source:{model:"service-engineer"},target:{model:"edge-telemetry-agent"},kind:"interact-with",id:"15jllvw"},"1hotm1k":{color:"green",line:"solid",head:"normal",title:"Настраивает правила alarm, получателей и панели мониторинга",source:{model:"service-engineer"},target:{model:"monitoring-alarm-platform"},kind:"interact-with",id:"1hotm1k"},unfyc8:{color:"green",line:"solid",head:"normal",title:"Работает с панелями мониторинга, событиями и alarm",source:{model:"operator-dispatcher"},target:{model:"monitoring-alarm-platform"},kind:"interact-with",id:"unfyc8"},"1qi0i11":{title:"Передают данные через southbound-адаптеры",source:{model:"field-protocol-gateways"},target:{model:"edge-telemetry-agent.collector-runtime"},id:"1qi0i11"},lblwx5:{title:"Публикует telemetry events и service topics через MQTT",source:{model:"edge-telemetry-agent"},target:{model:"monitoring-alarm-platform"},id:"lblwx5"},"1rsym7h":{title:"Маршрутизирует уведомления и эскалации",source:{model:"monitoring-alarm-platform"},target:{model:"notification-channels"},id:"1rsym7h"},"1e9xjmn":{title:"Доставляют уведомления по alarm и служебные уведомления",source:{model:"notification-channels"},target:{model:"operator-dispatcher"},id:"1e9xjmn"},p5w7v3:{title:"Загружает описания источников, модель сигналов и runtime-политики",source:{model:"edge-telemetry-agent.collector-runtime"},target:{model:"edge-telemetry-agent.configuration-bundle"},id:"p5w7v3"},"1337gtq":{title:"Сохраняет нормализованные события и задания на доставку",source:{model:"edge-telemetry-agent.collector-runtime"},target:{model:"edge-telemetry-agent.outbox-store"},id:"1337gtq"},"14gqniy":{title:"Загружает настройки MQTT, topic contract и retry-политики",source:{model:"edge-telemetry-agent.delivery-worker"},target:{model:"edge-telemetry-agent.configuration-bundle"},id:"14gqniy"},w1v2d7:{title:"Читает ожидающие события и обновляет статус доставки",source:{model:"edge-telemetry-agent.delivery-worker"},target:{model:"edge-telemetry-agent.outbox-store"},id:"w1v2d7"},"1noy8cq":{title:"Публикует telemetry events и service topics по MQTT 5.0",source:{model:"edge-telemetry-agent.delivery-worker"},target:{model:"monitoring-alarm-platform.mqtt-ingestion-gateway"},id:"1noy8cq"},va66e2:{title:"Читает контекст и записывает состояние и историю alarm",source:{model:"monitoring-alarm-platform.alarm-rule-engine"},target:{model:"monitoring-alarm-platform.telemetry-store"},id:"va66e2"},pterx7:{title:"Запускает доставку уведомлений",source:{model:"monitoring-alarm-platform.alarm-rule-engine"},target:{model:"monitoring-alarm-platform.notification-service"},id:"pterx7"},vaea6l:{color:"green",line:"solid",head:"normal",title:"Работает с live-панелями, состоянием объекта и операторскими dashboards",source:{model:"operator-dispatcher"},target:{model:"monitoring-alarm-platform.grafana"},kind:"interact-with",id:"vaea6l"},"1r3ilnx":{color:"green",line:"solid",head:"normal",title:"Настраивает dashboards и проверяет поток телеметрии",source:{model:"service-engineer"},target:{model:"monitoring-alarm-platform.grafana"},kind:"interact-with",id:"1r3ilnx"},"1si4dl2":{title:"Подписывается на live MQTT telemetry и service topics",source:{model:"monitoring-alarm-platform.grafana"},target:{model:"monitoring-alarm-platform.mqtt-ingestion-gateway"},id:"1si4dl2"},"5gl5mv":{title:"Сохраняет canonical events и служебные события",source:{model:"monitoring-alarm-platform.mqtt-ingestion-gateway"},target:{model:"monitoring-alarm-platform.telemetry-store"},id:"5gl5mv"},"5ivtmw":{title:"Передает нормализованные события в Alarm Rule Engine",source:{model:"monitoring-alarm-platform.mqtt-ingestion-gateway"},target:{model:"monitoring-alarm-platform.alarm-rule-engine"},id:"5ivtmw"},tsrxzq:{title:"Отправляет email, SMS, push и webhook-уведомления",source:{model:"monitoring-alarm-platform.notification-service"},target:{model:"notification-channels"},id:"tsrxzq"},o1bqrn:{title:"Читает телеметрию, историю и временные линии alarm",source:{model:"monitoring-alarm-platform.platform-api"},target:{model:"monitoring-alarm-platform.telemetry-store"},id:"o1bqrn"},qsx5jg:{title:"Читает активные alarm и управляет конфигурацией правил в Alarm Rule Engine",source:{model:"monitoring-alarm-platform.platform-api"},target:{model:"monitoring-alarm-platform.alarm-rule-engine"},id:"qsx5jg"}},globals:{predicates:{},dynamicPredicates:{},styles:{}},views:{index:{_stage:"layouted",_type:"element",id:"index",title:"Landscape view",description:null,autoLayout:{direction:"TB"},notation:{nodes:[{title:"Участник",shape:"person",color:"green",kinds:["actor"]},{title:"Внешняя облачная система",shape:"rectangle",color:"secondary",kinds:["external-system"]},{title:"Внешняя система",shape:"rectangle",color:"secondary",kinds:["system"]},{title:"Система в scope реализации",shape:"rectangle",color:"amber",kinds:["developed-system"]}]},hash:"SPcM5fTOOIVWxW9JevkN69FOrwIT8yPeCD0cCH815Ig",bounds:{x:0,y:0,width:1753,height:1861},nodes:[{id:"demo-stand-current-monitored-scope",parent:null,level:0,children:[],inEdges:[],outEdges:["1272t5q"],title:"Demo Stand Current Monitored Scope",modelRef:"demo-stand-current-monitored-scope",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Текущий набор сигналов demo-стенда, которые читает Edge Telemetry Agent."},tags:[],notation:"Внешняя система",technology:"KNX monitored signals / current read scope",kind:"system",x:0,y:0,width:380,height:180,labelBBox:{x:18,y:46,width:344,height:85}},{id:"field-devices",parent:null,level:0,children:[],inEdges:[],outEdges:["c2wk8h"],title:"Полевые устройства и контроллеры",modelRef:"field-devices",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Датчики, актуаторы, PLC, RTU и локальные системы автоматизации на объекте."},tags:[],notation:"Внешняя система",technology:"Field devices / PLC / RTU",kind:"system",x:490,y:0,width:379,height:180,labelBBox:{x:19,y:46,width:343,height:85}},{id:"service-engineer",parent:null,level:0,children:[],inEdges:[],outEdges:["cw5zhy","16a5o8z"],title:"Сервисный инженер",modelRef:"service-engineer",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Настраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы."},tags:[],notation:"Участник",kind:"actor",x:1156,y:0,width:398,height:180,labelBBox:{x:18,y:47,width:362,height:83}},{id:"field-protocol-gateways",parent:null,level:0,children:[],inEdges:["c2wk8h"],outEdges:["1sivq2o"],title:"Протокольные шлюзы и SCADA-контроллеры",modelRef:"field-protocol-gateways",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Точки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы."},tags:[],notation:"Внешняя система",technology:"KNX / Modbus / OPC UA / SCADA",kind:"system",x:409,y:340,width:454,height:180,labelBBox:{x:18,y:37,width:419,height:102}},{id:"edge-telemetry-agent",parent:null,level:0,children:[],inEdges:["1272t5q","1sivq2o","cw5zhy"],outEdges:["1cfgwdb"],title:"Edge Telemetry Agent",modelRef:"edge-telemetry-agent",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Универсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий."},tags:[],notation:"Система в scope реализации",technology:"Edge collector / normalization / buffering / delivery",kind:"developed-system",navigateTo:"c2-edge-telemetry-agent-containers",x:669,y:679,width:382,height:180,labelBBox:{x:18,y:28,width:347,height:121}},{id:"monitoring-alarm-platform",parent:null,level:0,children:[],inEdges:["16a5o8z","4cjy00","1cfgwdb"],outEdges:["134rwii"],title:"Monitoring & Alarm Platform",modelRef:"monitoring-alarm-platform",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Центральная система в облаке/интернете для приема событий, хранения телеметрии, визуализации, alarm-логики и маршрутизации уведомлений."},tags:[],notation:"Система в scope реализации",technology:"Cloud monitoring platform / alarm engine / operator UI",kind:"developed-system",navigateTo:"c2-monitoring-alarm-platform-containers",x:1011,y:1019,width:369,height:180,labelBBox:{x:19,y:28,width:333,height:121}},{id:"notification-channels",parent:null,level:0,children:[],inEdges:["134rwii"],outEdges:["1cg2z5c"],title:"Каналы уведомлений",modelRef:"notification-channels",shape:"rectangle",color:"secondary",icon:"bootstrap:cloud",style:{opacity:15,size:"md",iconColor:"blue"},description:{txt:"Email, SMS, push, webhook и другие внешние облачные каналы доставки тревог и служебных уведомлений."},tags:[],notation:"Внешняя облачная система",technology:"Email / SMS / Push / Webhook",kind:"external-system",x:803,y:1342,width:378,height:180,labelBBox:{x:46,y:37,width:316,height:102}},{id:"operator-dispatcher",parent:null,level:0,children:[],inEdges:["1cg2z5c"],outEdges:["4cjy00"],title:"Оператор / диспетчер",modelRef:"operator-dispatcher",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Работает с событиями, текущим состоянием объекта и alarm через центральную платформу мониторинга."},tags:[],notation:"Участник",kind:"actor",x:1010,y:1681,width:373,height:180,labelBBox:{x:18,y:47,width:337,height:83}}],edges:[{id:"1272t5q",parent:null,source:"demo-stand-current-monitored-scope",target:"edge-telemetry-agent",label:"[...]",relations:["8dkmwk","5anl8o"],color:"gray",line:"dashed",head:"normal",points:[[198,180],[210,274],[242,423],[327,520],[414,618],[547,680],[659,718]],labelBBox:{x:328,y:417,width:25,height:18}},{id:"c2wk8h",parent:null,source:"field-devices",target:"field-protocol-gateways",label:`Передают телеграммы, состояния и команды 
в KNX-сегменте`,relations:["c9z7g3"],color:"gray",line:"dashed",head:"normal",points:[[669,180],[663,226],[655,282],[649,329]],labelBBox:{x:660,y:241,width:296,height:35}},{id:"1cg2z5c",parent:null,source:"notification-channels",target:"operator-dispatcher",label:`Доставляют уведомления по alarm и 
служебные уведомления`,relations:["1e9xjmn"],color:"gray",line:"dashed",head:"normal",points:[[1025,1521],[1039,1554],[1056,1590],[1075,1621],[1086,1639],[1098,1656],[1111,1673]],labelBBox:{x:1076,y:1583,width:241,height:34}},{id:"134rwii",parent:null,source:"monitoring-alarm-platform",target:"notification-channels",label:"Маршрутизирует уведомления и эскалации",relations:["1rsym7h","tsrxzq"],color:"gray",line:"dashed",head:"normal",points:[[1076,1199],[1058,1217],[1041,1237],[1028,1259],[1015,1281],[1007,1307],[1002,1332]],labelBBox:{x:1029,y:1260,width:288,height:18}},{id:"1sivq2o",parent:null,source:"field-protocol-gateways",target:"edge-telemetry-agent",label:"[...]",relations:["586866","zexquv","1mspxne","1qi0i11"],color:"gray",line:"dashed",head:"normal",points:[[695,519],[726,566],[764,623],[795,671]],labelBBox:{x:756,y:587,width:25,height:18}},{id:"cw5zhy",parent:null,source:"service-engineer",target:"edge-telemetry-agent",label:`Настраивает адаптеры, модель сигналов, 
polling и доставку`,relations:["15jllvw"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[1286,180],[1250,227],[1205,286],[1166,340],[1083,452],[990,584],[928,671]],labelBBox:{x:1167,y:411,width:280,height:35}},{id:"16a5o8z",parent:null,source:"service-engineer",target:"monitoring-alarm-platform",label:`Настраивает правила alarm, получателей и 
панели мониторинга`,relations:["1hotm1k","1r3ilnx"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[1408,180],[1433,226],[1459,284],[1471,340],[1488,418],[1485,441],[1471,520],[1434,725],[1408,776],[1308,959],[1299,976],[1287,994],[1275,1011]],labelBBox:{x:1461,y:581,width:292,height:34}},{id:"4cjy00",parent:null,source:"operator-dispatcher",target:"monitoring-alarm-platform",label:`Работает с панелями мониторинга, 
событиями и alarm`,relations:["unfyc8","vaea6l"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[1303,1681],[1319,1663],[1332,1643],[1341,1621],[1402,1472],[1402,1408],[1341,1259],[1334,1240],[1322,1223],[1310,1206]],labelBBox:{x:1388,y:1413,width:237,height:35}},{id:"1cfgwdb",parent:null,source:"edge-telemetry-agent",target:"monitoring-alarm-platform",label:`Публикует telemetry events и service 
topics через MQTT`,relations:["lblwx5","1noy8cq"],color:"gray",line:"dashed",head:"normal",points:[[948,859],[995,906],[1053,963],[1100,1012]],labelBBox:{x:1039,y:920,width:241,height:35}}]},"deployment-demo-stand-topology":{_type:"deployment",tags:null,links:null,_stage:"layouted",sourcePath:"likec4/deployments/demo-stand/views.c4",description:{txt:'Полная deployment topology demo-стенда по ETS-проекту "Выстовка": локальная сеть, удаленный хост с whitelist, KNX/IP, TP-линия 1.1 и production-контур Monitoring & Alarm Platform с MQTT ingress и Grafana.'},title:"Deployments / Demo Stand / Deployment - Demo Stand Topology",id:"deployment-demo-stand-topology",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Полевой сегмент",shape:"rectangle",color:"blue",kinds:["fieldbus-segment"]},{title:"Сетевой endpoint",shape:"rectangle",color:"indigo",kinds:["network-endpoint"]},{title:"Сетевой контур",shape:"rectangle",color:"sky",kinds:["network-zone"]},{title:"Среда развертывания",shape:"rectangle",color:"blue",kinds:["environment"]},{title:"Физическое устройство",shape:"rectangle",color:"secondary",kinds:["field-asset"]},{title:"Хост",shape:"rectangle",color:"amber",kinds:["host"]}]},hash:"K1Hul4hThRhMbFvCd_NogrNaZmbQyO1FqS3vvzmyV4c",bounds:{x:0,y:0,width:4871,height:1594},nodes:[{id:"demo-stand",parent:null,level:0,children:["demo-stand.local-lan","demo-stand.remote-access"],inEdges:["14yh323"],outEdges:["1dncw9"],deploymentRef:"demo-stand",title:"Demo Stand",kind:"environment",notation:"Среда развертывания",color:"blue",shape:"rectangle",description:{txt:'Фактический demo-стенд по данным ETS-проекта "Выстовка" и connection memo от 2026-03-28.'},tags:[],style:{opacity:15,size:"md"},depth:3,x:8,y:8,width:2176,height:1578,labelBBox:{x:6,y:0,width:78,height:15}},{id:"demo-stand.local-lan",parent:"demo-stand",level:1,children:["demo-stand.local-lan.tp-line-1-1","demo-stand.local-lan.knxnet-ip-backbone"],inEdges:["14doyry"],outEdges:["1dncw9"],deploymentRef:"demo-stand.local-lan",title:"Local LAN 192.0.2.0/24",kind:"network-zone",notation:"Сетевой контур",color:"sky",shape:"rectangle",description:{txt:"Локальная сеть demo-стенда с KNX/IP роутером и TP-линией 1.1; используется как целевая сеть удаленного подключения Edge Telemetry Agent."},tags:[],style:{opacity:15,size:"md"},depth:2,x:58,y:79,width:2076,height:716,labelBBox:{x:6,y:0,width:132,height:15}},{id:"demo-stand.local-lan.tp-line-1-1",parent:"demo-stand.local-lan",level:2,children:["demo-stand.local-lan.tp-line-1-1.device-1-1-1","demo-stand.local-lan.tp-line-1-1.device-1-1-2","demo-stand.local-lan.tp-line-1-1.device-1-1-3","demo-stand.local-lan.tp-line-1-1.device-1-1-4"],inEdges:[],outEdges:["1q4xxx4"],deploymentRef:"demo-stand.local-lan.tp-line-1-1",title:"KNX TP Line 1.1",kind:"fieldbus-segment",technology:"Twisted Pair",notation:"Полевой сегмент",color:"blue",shape:"rectangle",description:{txt:'Активная KNX TP-линия ETS-проекта "Выстовка" в области 1, линия 1.'},tags:[],style:{opacity:15,size:"md"},depth:1,x:108,y:150,width:1976,height:302,labelBBox:{x:6,y:0,width:91,height:15}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-1",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-1",title:"1.1.1 Pushbutton sensor 4 Komfort, 4-gang",kind:"field-asset",technology:"KNX TP device",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Панель кнопок с group address для света, scene и вентиляции: 0/0/1, 0/0/6, 0/0/7, 1/0/0, 1/1/0, 1/2/0, 1/3/0, 1/4/0."},tags:[],style:{opacity:15,size:"md"},x:158,y:222,width:354,height:180,labelBBox:{x:18,y:25,width:319,height:126}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-2",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-2",title:"1.1.2 DALI Gateway Tunable White Plus",kind:"field-asset",technology:"KNX TP to DALI gateway",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Шлюз освещения с адресами Switch/StatusSwitch, RGBW и Scene: 0/0/1-0/0/7."},tags:[],style:{opacity:15,size:"md"},x:642,y:222,width:398,height:180,labelBBox:{x:18,y:37,width:362,height:102}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-3",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-3",title:"1.1.3 Analogaktor 4fach",kind:"field-asset",technology:"KNX TP actuator",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Актуатор вентиляции: VentSwitch, VentDim, VentStatus, VentValue по адресам 1/0/0-1/3/0."},tags:[],style:{opacity:15,size:"md"},x:1170,y:222,width:354,height:180,labelBBox:{x:18,y:46,width:318,height:84}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-4",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-4",title:"1.1.4 Room controller display compact module",kind:"field-asset",technology:"KNX TP room controller",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Комнатный контроллер с Temperature value 2/0/0 и сценой 1/4/0."},tags:[],style:{opacity:15,size:"md"},x:1654,y:222,width:380,height:180,labelBBox:{x:18,y:34,width:344,height:108}},{id:"demo-stand.remote-access",parent:"demo-stand",level:1,children:["demo-stand.remote-access.public-knx-endpoint"],inEdges:["14yh323"],outEdges:["14doyry"],deploymentRef:"demo-stand.remote-access",title:"Remote Access",kind:"network-zone",notation:"Сетевой контур",color:"sky",shape:"rectangle",description:{txt:"Внешний маршрут для удаленной диагностики стенда."},tags:[],style:{opacity:15,size:"md"},depth:1,x:1507,y:1271,width:412,height:265,labelBBox:{x:6,y:0,width:100,height:15}},{id:"monitoring-cloud.public-cloud.mqtt-ingest-host",parent:null,level:0,children:["monitoring-cloud.public-cloud.mqtt-ingest-host.grafana","monitoring-cloud.public-cloud.mqtt-ingest-host.mqtt-ingestion-gateway"],inEdges:[],outEdges:[],deploymentRef:"monitoring-cloud.public-cloud.mqtt-ingest-host",title:"Monitoring Platform Host",kind:"host",technology:"Cloud runtime",notation:"Хост",color:"amber",shape:"rectangle",description:{txt:"Хост облачного контура Monitoring & Alarm Platform для приема telemetry events и визуализации через Grafana."},tags:[],style:{opacity:15,size:"md"},depth:1,x:4407,y:903,width:456,height:651,labelBBox:{x:6,y:0,width:173,height:15}},{id:"demo-stand.remote-access.public-knx-endpoint",parent:"demo-stand.remote-access",level:2,children:[],inEdges:["14yh323"],outEdges:["14doyry"],deploymentRef:"demo-stand.remote-access.public-knx-endpoint",title:"Public KNX/IP endpoint",kind:"network-endpoint",technology:"203.0.113.234:7171 / UDP / NAT",notation:"Сетевой endpoint",color:"indigo",shape:"rectangle",description:{txt:"Публичная точка входа с пробросом на локальный KNX/IP роутер 192.0.2.177:3671."},tags:[],style:{opacity:15,size:"md"},x:1539,y:1324,width:347,height:180,labelBBox:{x:18,y:46,width:312,height:85}},{id:"monitoring-cloud.public-cloud.mqtt-ingest-host.grafana",parent:"monitoring-cloud.public-cloud.mqtt-ingest-host",level:1,children:[],inEdges:[],outEdges:["fktm4u"],kind:"instance",title:"Grafana",description:{txt:"Слой визуализации Monitoring & Alarm Platform: live-панели, инженерные dashboards и операторские представления. В текущей реализации подключается к MQTT Ingestion Gateway через grafana-mqtt-datasource."},technology:"Grafana OSS / grafana-mqtt-datasource",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"monitoring-cloud.public-cloud.mqtt-ingest-host.grafana",modelRef:"monitoring-alarm-platform.grafana",x:4457,y:975,width:356,height:180,labelBBox:{x:18,y:19,width:320,height:138}},{id:"demo-stand.local-lan.knxnet-ip-backbone",parent:"demo-stand.local-lan",level:2,children:["demo-stand.local-lan.knxnet-ip-backbone.knx-router"],inEdges:["1q4xxx4","14doyry"],outEdges:["1dncw9"],deploymentRef:"demo-stand.local-lan.knxnet-ip-backbone",title:"KNXnet/IP Backbone",kind:"fieldbus-segment",technology:"Areas 0.0 and 1.0 / KNXnet-IP",notation:"Полевой сегмент",color:"blue",shape:"rectangle",modelRef:"field-protocol-gateways.knx-router",description:{txt:"IP-магистраль ETS-проекта: магистральная область 0.0 и главная линия 1.0 без прикладных устройств."},tags:[],style:{opacity:15,size:"md"},depth:1,x:1621,y:479,width:446,height:266,labelBBox:{x:6,y:0,width:129,height:15}},{id:"monitoring-cloud.public-cloud.mqtt-ingest-host.mqtt-ingestion-gateway",parent:"monitoring-cloud.public-cloud.mqtt-ingest-host",level:1,children:[],inEdges:["fktm4u"],outEdges:[],kind:"instance",title:"MQTT Ingestion Gateway",description:{txt:"Принимает MQTT telemetry events и service topics от edge-агентов, восстанавливает routing context из topic, валидирует payload и передает canonical events на хранение и в Alarm Rule Engine."},technology:"MQTT broker / ingestion service",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"monitoring-cloud.public-cloud.mqtt-ingest-host.mqtt-ingestion-gateway",modelRef:"monitoring-alarm-platform.mqtt-ingestion-gateway",x:4459,y:1324,width:351,height:180,labelBBox:{x:18,y:19,width:316,height:139}},{id:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",parent:"demo-stand.local-lan.knxnet-ip-backbone",level:3,children:[],inEdges:["1q4xxx4","14doyry"],outEdges:["1dncw9"],kind:"instance",title:"Weinzierl KNX IP Router 751",description:{txt:"Локальная точка входа в KNX/IP и маршрутизатор в TP-линию 1.1."},technology:"192.0.2.177:3671 / UDP / TUNNELING / individual address 1.1.0",tags:[],icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg",color:"secondary",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",modelRef:"field-protocol-gateways.knx-router",x:1653,y:533,width:382,height:180,labelBBox:{x:46,y:46,width:320,height:84}},{id:"whitelisted-remote-host",parent:null,level:0,children:["whitelisted-remote-host.developer-network.edge-host"],inEdges:["1dncw9"],outEdges:["14yh323"],deploymentRef:"whitelisted-remote-host",title:"Whitelisted Remote Host",kind:"environment",notation:"Среда развертывания",color:"blue",shape:"rectangle",description:{txt:"Удаленный хост вне demo-стенда: мой компьютер с IP, разрешенным во внешнем KNX/IP маршруте."},tags:[],style:{opacity:15,size:"md"},depth:2,x:2234,y:850,width:2123,height:736,labelBBox:{x:6,y:0,width:162,height:15}},{id:"whitelisted-remote-host.developer-network.edge-host",parent:"whitelisted-remote-host",level:1,children:["whitelisted-remote-host.developer-network.edge-host.delivery-worker","whitelisted-remote-host.developer-network.edge-host.grafana","whitelisted-remote-host.developer-network.edge-host.collector-runtime","whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway","whitelisted-remote-host.developer-network.edge-host.configuration-bundle","whitelisted-remote-host.developer-network.edge-host.outbox-store"],inEdges:["1dncw9"],outEdges:["14yh323"],deploymentRef:"whitelisted-remote-host.developer-network.edge-host",title:"Developer Workstation",kind:"host",technology:"Remote workstation / whitelisted IP",notation:"Хост",color:"amber",shape:"rectangle",description:{txt:"Хост, на котором запускается Edge Telemetry Agent. Подключается к KNX демо-стенду удаленно, а не размещается на самом стенде. На этом же рабочем месте текущая реализация поднимает MQTT Ingestion Gateway и Grafana."},tags:[],style:{opacity:15,size:"md"},depth:1,x:2266,y:903,width:2059,height:651,labelBBox:{x:6,y:0,width:158,height:15}},{id:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:[],outEdges:["hk8qcy","zga1te","h687yt"],kind:"instance",title:"Delivery Worker",description:{txt:"Фоновый контейнер доставки: читает outbox, публикует telemetry events и service topics в MQTT topic tree и обновляет статус доставки."},technology:"Python worker / MQTT publisher",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",modelRef:"edge-telemetry-agent.delivery-worker",x:3255,y:975,width:369,height:180,labelBBox:{x:18,y:37,width:333,height:102}},{id:"whitelisted-remote-host.developer-network.edge-host.grafana",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:[],outEdges:["107kgtq"],kind:"instance",title:"Grafana",description:{txt:"Слой визуализации Monitoring & Alarm Platform: live-панели, инженерные dashboards и операторские представления. В текущей реализации подключается к MQTT Ingestion Gateway через grafana-mqtt-datasource."},technology:"Grafana OSS / grafana-mqtt-datasource",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.grafana",modelRef:"monitoring-alarm-platform.grafana",x:2316,y:975,width:356,height:180,labelBBox:{x:18,y:19,width:320,height:138}},{id:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["1dncw9"],outEdges:["ql7ddz","os7a2v","14yh323"],kind:"instance",title:"Collector Runtime",description:{txt:"Основной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox."},technology:"Python service",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",modelRef:"edge-telemetry-agent.collector-runtime",x:2802,y:975,width:323,height:180,labelBBox:{x:18,y:28,width:287,height:120}},{id:"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["h687yt","107kgtq"],outEdges:[],kind:"instance",title:"MQTT Ingestion Gateway",description:{txt:"Принимает MQTT telemetry events и service topics от edge-агентов, восстанавливает routing context из topic, валидирует payload и передает canonical events на хранение и в Alarm Rule Engine."},technology:"MQTT broker / ingestion service",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway",modelRef:"monitoring-alarm-platform.mqtt-ingestion-gateway",x:2316,y:1324,width:351,height:180,labelBBox:{x:18,y:19,width:316,height:139}},{id:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["ql7ddz","hk8qcy"],outEdges:[],kind:"instance",title:"Configuration Bundle",description:{txt:"Локальный набор конфигурации источников, модели сигналов, polling-политик и параметров доставки."},technology:"YAML files",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",modelRef:"edge-telemetry-agent.configuration-bundle",x:2798,y:1324,width:376,height:180,labelBBox:{x:18,y:37,width:340,height:103}},{id:"whitelisted-remote-host.developer-network.edge-host.outbox-store",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["os7a2v","zga1te"],outEdges:[],kind:"instance",title:"Outbox Store",description:{txt:"Локальное надежное хранилище исходящих событий, статусов доставки и метаданных повторных попыток."},technology:"SQLite",tags:[],color:"amber",shape:"storage",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.outbox-store",modelRef:"edge-telemetry-agent.outbox-store",x:3431,y:1324,width:344,height:180,labelBBox:{x:18,y:37,width:308,height:103}}],edges:[{id:"14doyry",parent:"demo-stand",source:"demo-stand.remote-access.public-knx-endpoint",target:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",label:`Проброс UDP 7171 -> 3671 для удаленного 
KNX/IP доступа`,relations:["1lb1jct"],color:"gray",line:"dashed",head:"normal",points:[[1728,1324],[1752,1176],[1802,877],[1828,722]],labelBBox:{x:1807,y:1046,width:288,height:35}},{id:"1dncw9",parent:null,source:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",target:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",label:`Экспонирует group address и телеграммы 
через KNX/IP`,relations:["zexquv"],color:"gray",line:"dashed",head:"normal",points:[[2035,632],[2238,649],[2563,699],[2798,850],[2843,879],[2881,925],[2909,966]],labelBBox:{x:2777,y:804,width:276,height:34}},{id:"ql7ddz",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",target:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",label:`Загружает описания источников, модель 
сигналов и runtime-политики`,relations:["p5w7v3"],color:"gray",line:"dashed",head:"normal",points:[[2970,1154],[2973,1203],[2977,1264],[2980,1314]],labelBBox:{x:2977,y:1221,width:276,height:34}},{id:"hk8qcy",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",target:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",label:`Загружает настройки MQTT, topic contract 
и retry-политики`,relations:["14gqniy"],color:"gray",line:"dashed",head:"normal",points:[[3324,1154],[3259,1205],[3177,1267],[3110,1318]],labelBBox:{x:3228,y:1221,width:283,height:34}},{id:"os7a2v",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",target:"whitelisted-remote-host.developer-network.edge-host.outbox-store",label:`Сохраняет нормализованные события и 
задания на доставку`,relations:["1337gtq"],color:"gray",line:"dashed",head:"normal",points:[[3126,1087],[3231,1107],[3368,1146],[3469,1220],[3503,1244],[3531,1280],[3553,1315]],labelBBox:{x:3512,y:1221,width:265,height:34}},{id:"zga1te",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",target:"whitelisted-remote-host.developer-network.edge-host.outbox-store",label:`Читает ожидающие события и обновляет 
статус доставки`,relations:["w1v2d7"],color:"gray",line:"dashed",head:"normal",points:[[3624,1083],[3714,1102],[3815,1140],[3871,1220],[3910,1275],[3856,1321],[3785,1354]],labelBBox:{x:3885,y:1221,width:269,height:34}},{id:"h687yt",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",target:"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway",label:"[...]",relations:["1noy8cq","1a128jq"],color:"gray",line:"dashed",head:"normal",points:[[3255,1153],[3254,1154],[3252,1154],[3251,1155],[3028,1231],[2952,1184],[2733,1271],[2700,1284],[2666,1301],[2635,1319]],labelBBox:{x:2910,y:1227,width:25,height:18}},{id:"107kgtq",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.grafana",target:"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway",label:"[...]",relations:["1si4dl2","zts6fw"],color:"gray",line:"dashed",head:"normal",points:[[2493,1154],[2493,1203],[2493,1264],[2493,1314]],labelBBox:{x:2494,y:1227,width:25,height:18}},{id:"14yh323",parent:null,source:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",target:"demo-stand.remote-access.public-knx-endpoint",label:`Подключается к стенду через whitelisted 
public KNX/IP endpoint`,relations:["vzyll7"],color:"gray",line:"dashed",head:"normal",points:[[2803,1153],[2801,1153],[2800,1154],[2798,1155],[2656,1205],[2613,1189],[2465,1220],[2362,1241],[2336,1246],[2234,1271],[2121,1299],[1996,1333],[1897,1361]],labelBBox:{x:2466,y:1221,width:272,height:34}},{id:"fktm4u",parent:"monitoring-cloud.public-cloud.mqtt-ingest-host",source:"monitoring-cloud.public-cloud.mqtt-ingest-host.grafana",target:"monitoring-cloud.public-cloud.mqtt-ingest-host.mqtt-ingestion-gateway",label:"[...]",relations:["1si4dl2","17apjbx"],color:"gray",line:"dashed",head:"normal",points:[[4635,1154],[4635,1203],[4635,1264],[4635,1314]],labelBBox:{x:4636,y:1227,width:25,height:18}},{id:"1q4xxx4",parent:"demo-stand.local-lan",source:"demo-stand.local-lan.tp-line-1-1",target:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",label:`Передает KNX TP телеграммы в роутер 
1.1.0`,relations:["bgglu2"],color:"gray",line:"dashed",head:"normal",points:[[1844,452],[1844,475],[1844,500],[1844,522]],labelBBox:{x:1845,y:454,width:265,height:35}}]},"deployment-demo-stand-current-implementation":{_type:"deployment",tags:null,links:null,_stage:"layouted",sourcePath:"likec4/deployments/demo-stand/views.c4",description:{txt:"Текущая реализация demo-стенда: Edge Telemetry Agent работает на Developer Workstation, публикует в локальный MQTT Ingestion Gateway, а Grafana читает live MQTT поток через grafana-mqtt-datasource."},title:"Deployments / Demo Stand / Deployment - Demo Stand Current Implementation",id:"deployment-demo-stand-current-implementation",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Полевой сегмент",shape:"rectangle",color:"blue",kinds:["fieldbus-segment"]},{title:"Сетевой endpoint",shape:"rectangle",color:"indigo",kinds:["network-endpoint"]},{title:"Сетевой контур",shape:"rectangle",color:"sky",kinds:["network-zone"]},{title:"Среда развертывания",shape:"rectangle",color:"blue",kinds:["environment"]},{title:"Физическое устройство",shape:"rectangle",color:"secondary",kinds:["field-asset"]},{title:"Хост",shape:"rectangle",color:"amber",kinds:["host"]}]},hash:"P_3E3DrtnokkE3-O7jpI7grmjykHjcSbn3-XWIeuWNI",bounds:{x:0,y:0,width:4365,height:1594},nodes:[{id:"demo-stand",parent:null,level:0,children:["demo-stand.local-lan","demo-stand.remote-access"],inEdges:["14yh323"],outEdges:["1dncw9"],deploymentRef:"demo-stand",title:"Demo Stand",kind:"environment",notation:"Среда развертывания",color:"blue",shape:"rectangle",description:{txt:'Фактический demo-стенд по данным ETS-проекта "Выстовка" и connection memo от 2026-03-28.'},tags:[],style:{opacity:15,size:"md"},depth:3,x:8,y:8,width:2176,height:1578,labelBBox:{x:6,y:0,width:78,height:15}},{id:"demo-stand.local-lan",parent:"demo-stand",level:1,children:["demo-stand.local-lan.tp-line-1-1","demo-stand.local-lan.knxnet-ip-backbone"],inEdges:["14doyry"],outEdges:["1dncw9"],deploymentRef:"demo-stand.local-lan",title:"Local LAN 192.0.2.0/24",kind:"network-zone",notation:"Сетевой контур",color:"sky",shape:"rectangle",description:{txt:"Локальная сеть demo-стенда с KNX/IP роутером и TP-линией 1.1; используется как целевая сеть удаленного подключения Edge Telemetry Agent."},tags:[],style:{opacity:15,size:"md"},depth:2,x:58,y:79,width:2076,height:716,labelBBox:{x:6,y:0,width:132,height:15}},{id:"demo-stand.local-lan.tp-line-1-1",parent:"demo-stand.local-lan",level:2,children:["demo-stand.local-lan.tp-line-1-1.device-1-1-1","demo-stand.local-lan.tp-line-1-1.device-1-1-2","demo-stand.local-lan.tp-line-1-1.device-1-1-3","demo-stand.local-lan.tp-line-1-1.device-1-1-4"],inEdges:[],outEdges:["1q4xxx4"],deploymentRef:"demo-stand.local-lan.tp-line-1-1",title:"KNX TP Line 1.1",kind:"fieldbus-segment",technology:"Twisted Pair",notation:"Полевой сегмент",color:"blue",shape:"rectangle",description:{txt:'Активная KNX TP-линия ETS-проекта "Выстовка" в области 1, линия 1.'},tags:[],style:{opacity:15,size:"md"},depth:1,x:108,y:150,width:1976,height:302,labelBBox:{x:6,y:0,width:91,height:15}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-1",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-1",title:"1.1.1 Pushbutton sensor 4 Komfort, 4-gang",kind:"field-asset",technology:"KNX TP device",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Панель кнопок с group address для света, scene и вентиляции: 0/0/1, 0/0/6, 0/0/7, 1/0/0, 1/1/0, 1/2/0, 1/3/0, 1/4/0."},tags:[],style:{opacity:15,size:"md"},x:158,y:222,width:354,height:180,labelBBox:{x:18,y:25,width:319,height:126}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-2",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-2",title:"1.1.2 DALI Gateway Tunable White Plus",kind:"field-asset",technology:"KNX TP to DALI gateway",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Шлюз освещения с адресами Switch/StatusSwitch, RGBW и Scene: 0/0/1-0/0/7."},tags:[],style:{opacity:15,size:"md"},x:642,y:222,width:398,height:180,labelBBox:{x:18,y:37,width:362,height:102}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-3",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-3",title:"1.1.3 Analogaktor 4fach",kind:"field-asset",technology:"KNX TP actuator",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Актуатор вентиляции: VentSwitch, VentDim, VentStatus, VentValue по адресам 1/0/0-1/3/0."},tags:[],style:{opacity:15,size:"md"},x:1170,y:222,width:354,height:180,labelBBox:{x:18,y:46,width:318,height:84}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-4",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-4",title:"1.1.4 Room controller display compact module",kind:"field-asset",technology:"KNX TP room controller",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Комнатный контроллер с Temperature value 2/0/0 и сценой 1/4/0."},tags:[],style:{opacity:15,size:"md"},x:1654,y:222,width:380,height:180,labelBBox:{x:18,y:34,width:344,height:108}},{id:"demo-stand.remote-access",parent:"demo-stand",level:1,children:["demo-stand.remote-access.public-knx-endpoint"],inEdges:["14yh323"],outEdges:["14doyry"],deploymentRef:"demo-stand.remote-access",title:"Remote Access",kind:"network-zone",notation:"Сетевой контур",color:"sky",shape:"rectangle",description:{txt:"Внешний маршрут для удаленной диагностики стенда."},tags:[],style:{opacity:15,size:"md"},depth:1,x:1507,y:1271,width:412,height:265,labelBBox:{x:6,y:0,width:100,height:15}},{id:"demo-stand.remote-access.public-knx-endpoint",parent:"demo-stand.remote-access",level:2,children:[],inEdges:["14yh323"],outEdges:["14doyry"],deploymentRef:"demo-stand.remote-access.public-knx-endpoint",title:"Public KNX/IP endpoint",kind:"network-endpoint",technology:"203.0.113.234:7171 / UDP / NAT",notation:"Сетевой endpoint",color:"indigo",shape:"rectangle",description:{txt:"Публичная точка входа с пробросом на локальный KNX/IP роутер 192.0.2.177:3671."},tags:[],style:{opacity:15,size:"md"},x:1539,y:1324,width:347,height:180,labelBBox:{x:18,y:46,width:312,height:85}},{id:"demo-stand.local-lan.knxnet-ip-backbone",parent:"demo-stand.local-lan",level:2,children:["demo-stand.local-lan.knxnet-ip-backbone.knx-router"],inEdges:["1q4xxx4","14doyry"],outEdges:["1dncw9"],deploymentRef:"demo-stand.local-lan.knxnet-ip-backbone",title:"KNXnet/IP Backbone",kind:"fieldbus-segment",technology:"Areas 0.0 and 1.0 / KNXnet-IP",notation:"Полевой сегмент",color:"blue",shape:"rectangle",modelRef:"field-protocol-gateways.knx-router",description:{txt:"IP-магистраль ETS-проекта: магистральная область 0.0 и главная линия 1.0 без прикладных устройств."},tags:[],style:{opacity:15,size:"md"},depth:1,x:1621,y:479,width:446,height:266,labelBBox:{x:6,y:0,width:129,height:15}},{id:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",parent:"demo-stand.local-lan.knxnet-ip-backbone",level:3,children:[],inEdges:["1q4xxx4","14doyry"],outEdges:["1dncw9"],kind:"instance",title:"Weinzierl KNX IP Router 751",description:{txt:"Локальная точка входа в KNX/IP и маршрутизатор в TP-линию 1.1."},technology:"192.0.2.177:3671 / UDP / TUNNELING / individual address 1.1.0",tags:[],icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg",color:"secondary",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",modelRef:"field-protocol-gateways.knx-router",x:1653,y:533,width:382,height:180,labelBBox:{x:46,y:46,width:320,height:84}},{id:"whitelisted-remote-host",parent:null,level:0,children:["whitelisted-remote-host.developer-network.edge-host"],inEdges:["1dncw9"],outEdges:["14yh323"],deploymentRef:"whitelisted-remote-host",title:"Whitelisted Remote Host",kind:"environment",notation:"Среда развертывания",color:"blue",shape:"rectangle",description:{txt:"Удаленный хост вне demo-стенда: мой компьютер с IP, разрешенным во внешнем KNX/IP маршруте."},tags:[],style:{opacity:15,size:"md"},depth:2,x:2234,y:850,width:2123,height:736,labelBBox:{x:6,y:0,width:162,height:15}},{id:"whitelisted-remote-host.developer-network.edge-host",parent:"whitelisted-remote-host",level:1,children:["whitelisted-remote-host.developer-network.edge-host.delivery-worker","whitelisted-remote-host.developer-network.edge-host.grafana","whitelisted-remote-host.developer-network.edge-host.collector-runtime","whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway","whitelisted-remote-host.developer-network.edge-host.configuration-bundle","whitelisted-remote-host.developer-network.edge-host.outbox-store"],inEdges:["1dncw9"],outEdges:["14yh323"],deploymentRef:"whitelisted-remote-host.developer-network.edge-host",title:"Developer Workstation",kind:"host",technology:"Remote workstation / whitelisted IP",notation:"Хост",color:"amber",shape:"rectangle",description:{txt:"Хост, на котором запускается Edge Telemetry Agent. Подключается к KNX демо-стенду удаленно, а не размещается на самом стенде. На этом же рабочем месте текущая реализация поднимает MQTT Ingestion Gateway и Grafana."},tags:[],style:{opacity:15,size:"md"},depth:1,x:2266,y:903,width:2059,height:651,labelBBox:{x:6,y:0,width:158,height:15}},{id:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:[],outEdges:["hk8qcy","zga1te","h687yt"],kind:"instance",title:"Delivery Worker",description:{txt:"Фоновый контейнер доставки: читает outbox, публикует telemetry events и service topics в MQTT topic tree и обновляет статус доставки."},technology:"Python worker / MQTT publisher",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",modelRef:"edge-telemetry-agent.delivery-worker",x:3255,y:975,width:369,height:180,labelBBox:{x:18,y:37,width:333,height:102}},{id:"whitelisted-remote-host.developer-network.edge-host.grafana",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:[],outEdges:["107kgtq"],kind:"instance",title:"Grafana",description:{txt:"Слой визуализации Monitoring & Alarm Platform: live-панели, инженерные dashboards и операторские представления. В текущей реализации подключается к MQTT Ingestion Gateway через grafana-mqtt-datasource."},technology:"Grafana OSS / grafana-mqtt-datasource",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.grafana",modelRef:"monitoring-alarm-platform.grafana",x:2316,y:975,width:356,height:180,labelBBox:{x:18,y:19,width:320,height:138}},{id:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["1dncw9"],outEdges:["ql7ddz","os7a2v","14yh323"],kind:"instance",title:"Collector Runtime",description:{txt:"Основной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox."},technology:"Python service",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",modelRef:"edge-telemetry-agent.collector-runtime",x:2802,y:975,width:323,height:180,labelBBox:{x:18,y:28,width:287,height:120}},{id:"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["h687yt","107kgtq"],outEdges:[],kind:"instance",title:"MQTT Ingestion Gateway",description:{txt:"Принимает MQTT telemetry events и service topics от edge-агентов, восстанавливает routing context из topic, валидирует payload и передает canonical events на хранение и в Alarm Rule Engine."},technology:"MQTT broker / ingestion service",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway",modelRef:"monitoring-alarm-platform.mqtt-ingestion-gateway",x:2316,y:1324,width:351,height:180,labelBBox:{x:18,y:19,width:316,height:139}},{id:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["ql7ddz","hk8qcy"],outEdges:[],kind:"instance",title:"Configuration Bundle",description:{txt:"Локальный набор конфигурации источников, модели сигналов, polling-политик и параметров доставки."},technology:"YAML files",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",modelRef:"edge-telemetry-agent.configuration-bundle",x:2798,y:1324,width:376,height:180,labelBBox:{x:18,y:37,width:340,height:103}},{id:"whitelisted-remote-host.developer-network.edge-host.outbox-store",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["os7a2v","zga1te"],outEdges:[],kind:"instance",title:"Outbox Store",description:{txt:"Локальное надежное хранилище исходящих событий, статусов доставки и метаданных повторных попыток."},technology:"SQLite",tags:[],color:"amber",shape:"storage",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.outbox-store",modelRef:"edge-telemetry-agent.outbox-store",x:3431,y:1324,width:344,height:180,labelBBox:{x:18,y:37,width:308,height:103}}],edges:[{id:"14doyry",parent:"demo-stand",source:"demo-stand.remote-access.public-knx-endpoint",target:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",label:`Проброс UDP 7171 -> 3671 для удаленного 
KNX/IP доступа`,relations:["1lb1jct"],color:"gray",line:"dashed",head:"normal",points:[[1728,1324],[1752,1176],[1802,877],[1828,722]],labelBBox:{x:1807,y:1046,width:288,height:35}},{id:"1dncw9",parent:null,source:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",target:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",label:`Экспонирует group address и телеграммы 
через KNX/IP`,relations:["zexquv"],color:"gray",line:"dashed",head:"normal",points:[[2035,632],[2238,649],[2563,699],[2798,850],[2843,879],[2881,925],[2909,966]],labelBBox:{x:2777,y:804,width:276,height:34}},{id:"ql7ddz",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",target:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",label:`Загружает описания источников, модель 
сигналов и runtime-политики`,relations:["p5w7v3"],color:"gray",line:"dashed",head:"normal",points:[[2970,1154],[2973,1203],[2977,1264],[2980,1314]],labelBBox:{x:2977,y:1221,width:276,height:34}},{id:"hk8qcy",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",target:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",label:`Загружает настройки MQTT, topic contract 
и retry-политики`,relations:["14gqniy"],color:"gray",line:"dashed",head:"normal",points:[[3324,1154],[3259,1205],[3177,1267],[3110,1318]],labelBBox:{x:3228,y:1221,width:283,height:34}},{id:"os7a2v",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",target:"whitelisted-remote-host.developer-network.edge-host.outbox-store",label:`Сохраняет нормализованные события и 
задания на доставку`,relations:["1337gtq"],color:"gray",line:"dashed",head:"normal",points:[[3126,1087],[3231,1107],[3368,1146],[3469,1220],[3503,1244],[3531,1280],[3553,1315]],labelBBox:{x:3512,y:1221,width:265,height:34}},{id:"zga1te",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",target:"whitelisted-remote-host.developer-network.edge-host.outbox-store",label:`Читает ожидающие события и обновляет 
статус доставки`,relations:["w1v2d7"],color:"gray",line:"dashed",head:"normal",points:[[3624,1083],[3714,1102],[3815,1140],[3871,1220],[3910,1275],[3856,1321],[3785,1354]],labelBBox:{x:3885,y:1221,width:269,height:34}},{id:"h687yt",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",target:"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway",label:"[...]",relations:["1noy8cq","1a128jq"],color:"gray",line:"dashed",head:"normal",points:[[3255,1153],[3254,1154],[3252,1154],[3251,1155],[3028,1231],[2952,1184],[2733,1271],[2700,1284],[2666,1301],[2635,1319]],labelBBox:{x:2910,y:1227,width:25,height:18}},{id:"107kgtq",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.grafana",target:"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway",label:"[...]",relations:["1si4dl2","zts6fw"],color:"gray",line:"dashed",head:"normal",points:[[2493,1154],[2493,1203],[2493,1264],[2493,1314]],labelBBox:{x:2494,y:1227,width:25,height:18}},{id:"14yh323",parent:null,source:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",target:"demo-stand.remote-access.public-knx-endpoint",label:`Подключается к стенду через whitelisted 
public KNX/IP endpoint`,relations:["vzyll7"],color:"gray",line:"dashed",head:"normal",points:[[2803,1153],[2801,1153],[2800,1154],[2798,1155],[2656,1205],[2613,1189],[2465,1220],[2362,1241],[2336,1246],[2234,1271],[2121,1299],[1996,1333],[1897,1361]],labelBBox:{x:2466,y:1221,width:272,height:34}},{id:"1q4xxx4",parent:"demo-stand.local-lan",source:"demo-stand.local-lan.tp-line-1-1",target:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",label:`Передает KNX TP телеграммы в роутер 
1.1.0`,relations:["bgglu2"],color:"gray",line:"dashed",head:"normal",points:[[1844,452],[1844,475],[1844,500],[1844,522]],labelBBox:{x:1845,y:454,width:265,height:35}}]},"demo-stand-current-monitored-points":{_type:"element",tags:null,links:null,_stage:"layouted",sourcePath:"likec4/deployments/demo-stand/views.c4",description:{txt:"Текущий мониторинговый срез demo-стенда: устройства и KNX group address, которые сейчас читает Edge Telemetry Agent."},title:"Deployments / Demo Stand / Demo Stand - Current Monitored Points",id:"demo-stand-current-monitored-points",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Внешняя система",shape:"rectangle",color:"secondary",kinds:["system"]},{title:"Контейнер",shape:"rectangle",color:"amber",kinds:["container"]},{title:"Полевое устройство",shape:"rectangle",color:"secondary",kinds:["field-device"]},{title:"Полевой шлюз",shape:"rectangle",color:"secondary",kinds:["field-gateway"]},{title:"Система в scope реализации",shape:"rectangle",color:"amber",kinds:["developed-system"]},{title:"Точка телеметрии",shape:"rectangle",color:"secondary",kinds:["telemetry-point"]}]},hash:"zLAYrW1mWgboB7yl3RcYkT-4p1L_Nj1dQFOvHp-l6_k",bounds:{x:0,y:0,width:1991,height:954},nodes:[{id:"demo-stand-current-monitored-scope",parent:null,level:0,children:["demo-stand-current-monitored-scope.device-1-1-1","demo-stand-current-monitored-scope.device-1-1-2","demo-stand-current-monitored-scope.device-1-1-4","demo-stand-current-monitored-scope.light-switch-feedback","demo-stand-current-monitored-scope.room-temperature"],inEdges:[],outEdges:["6c0ua1","1t1ianm"],title:"Demo Stand Current Monitored Scope",modelRef:"demo-stand-current-monitored-scope",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Текущий набор сигналов demo-стенда, которые читает Edge Telemetry Agent."},tags:[],notation:"Внешняя система",technology:"KNX monitored signals / current read scope",kind:"system",depth:1,x:8,y:8,width:1541,height:605,labelBBox:{x:6,y:0,width:247,height:15}},{id:"field-protocol-gateways",parent:null,level:0,children:["field-protocol-gateways.knx-router"],inEdges:[],outEdges:["g1oj49"],title:"Протокольные шлюзы и SCADA-контроллеры",modelRef:"field-protocol-gateways",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Точки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы."},tags:[],notation:"Внешняя система",technology:"KNX / Modbus / OPC UA / SCADA",kind:"system",depth:1,x:1599,y:340,width:384,height:265,labelBBox:{x:6,y:0,width:233,height:15}},{id:"demo-stand-current-monitored-scope.device-1-1-1",parent:"demo-stand-current-monitored-scope",level:1,children:[],inEdges:[],outEdges:["moi6x7"],title:"1.1.1 Pushbutton sensor 4 Komfort, 4-gang",modelRef:"demo-stand-current-monitored-scope.device-1-1-1",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Кнопочная панель, участвующая в публикации feedback состояния света."},tags:[],notation:"Полевое устройство",technology:"KNX TP device",kind:"field-device",x:48,y:69,width:369,height:180,labelBBox:{x:18,y:34,width:333,height:109}},{id:"demo-stand-current-monitored-scope.device-1-1-2",parent:"demo-stand-current-monitored-scope",level:1,children:[],inEdges:[],outEdges:["1sohalk"],title:"1.1.2 DALI Gateway Tunable White Plus",modelRef:"demo-stand-current-monitored-scope.device-1-1-2",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"DALI gateway, публикующий статус светового канала."},tags:[],notation:"Полевое устройство",technology:"KNX TP to DALI gateway",kind:"field-device",x:528,y:69,width:398,height:180,labelBBox:{x:18,y:46,width:362,height:85}},{id:"demo-stand-current-monitored-scope.device-1-1-4",parent:"demo-stand-current-monitored-scope",level:1,children:[],inEdges:[],outEdges:["r5yyd"],title:"1.1.4 Room controller display compact module",modelRef:"demo-stand-current-monitored-scope.device-1-1-4",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Комнатный контроллер, публикующий температуру помещения."},tags:[],notation:"Полевое устройство",technology:"KNX TP room controller",kind:"field-device",x:1036,y:69,width:398,height:180,labelBBox:{x:18,y:34,width:362,height:109}},{id:"field-protocol-gateways.knx-router",parent:"field-protocol-gateways",level:1,children:[],inEdges:[],outEdges:["g1oj49"],title:"KNX Segment",modelRef:"field-protocol-gateways.knx-router",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"KNX / KNXnet-IP",kind:"field-gateway",x:1631,y:393,width:320,height:180,labelBBox:{x:81,y:66,width:188,height:45}},{id:"demo-stand-current-monitored-scope.light-switch-feedback",parent:"demo-stand-current-monitored-scope",level:1,children:[],inEdges:["moi6x7","1sohalk"],outEdges:["6c0ua1"],title:"0/0/7 StatusSwitch",modelRef:"demo-stand-current-monitored-scope.light-switch-feedback",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Фактически читаемая точка состояния света."},tags:[],notation:"Точка телеметрии",technology:"KNX DPT 1.001 / feedback",kind:"telemetry-point",x:542,y:393,width:369,height:180,labelBBox:{x:18,y:55,width:333,height:67}},{id:"demo-stand-current-monitored-scope.room-temperature",parent:"demo-stand-current-monitored-scope",level:1,children:[],inEdges:["r5yyd"],outEdges:["1t1ianm"],title:"2/0/0 Temp Value",modelRef:"demo-stand-current-monitored-scope.room-temperature",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Фактически читаемая точка температуры помещения."},tags:[],notation:"Точка телеметрии",technology:"KNX DPT 9.xxx / room temperature",kind:"telemetry-point",x:1067,y:393,width:336,height:180,labelBBox:{x:18,y:46,width:300,height:85}},{id:"edge-telemetry-agent",parent:null,level:0,children:["edge-telemetry-agent.collector-runtime"],inEdges:["6c0ua1","1t1ianm","g1oj49"],outEdges:[],title:"Edge Telemetry Agent",modelRef:"edge-telemetry-agent",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Универсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий."},tags:[],notation:"Система в scope реализации",technology:"Edge collector / normalization / buffering / delivery",kind:"developed-system",depth:1,navigateTo:"c2-edge-telemetry-agent-containers",x:1041,y:681,width:388,height:265,labelBBox:{x:6,y:0,width:146,height:15}},{id:"edge-telemetry-agent.collector-runtime",parent:"edge-telemetry-agent",level:1,children:[],inEdges:["6c0ua1","1t1ianm","g1oj49"],outEdges:[],title:"Collector Runtime",modelRef:"edge-telemetry-agent.collector-runtime",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Основной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox."},tags:[],notation:"Контейнер",technology:"Python service",kind:"container",x:1073,y:734,width:323,height:180,labelBBox:{x:18,y:28,width:287,height:121}}],edges:[{id:"moi6x7",parent:"demo-stand-current-monitored-scope",source:"demo-stand-current-monitored-scope.device-1-1-1",target:"demo-stand-current-monitored-scope.light-switch-feedback",label:"Публикует feedback состояния света 0/0/7",relations:["ewjy7p"],color:"gray",line:"dashed",head:"normal",points:[[314,249],[343,278],[377,308],[412,332],[449,358],[492,382],[533,402]],labelBBox:{x:413,y:310,width:286,height:18}},{id:"1sohalk",parent:"demo-stand-current-monitored-scope",source:"demo-stand-current-monitored-scope.device-1-1-2",target:"demo-stand-current-monitored-scope.light-switch-feedback",label:"Публикует статус светового канала 0/0/7",relations:["1bukbxz"],color:"gray",line:"dashed",head:"normal",points:[[727,249],[727,291],[727,340],[727,383]],labelBBox:{x:728,y:310,width:284,height:18}},{id:"r5yyd",parent:"demo-stand-current-monitored-scope",source:"demo-stand-current-monitored-scope.device-1-1-4",target:"demo-stand-current-monitored-scope.room-temperature",label:"Публикует температуру помещения 2/0/0",relations:["lkpzpl"],color:"gray",line:"dashed",head:"normal",points:[[1235,249],[1235,291],[1235,340],[1235,383]],labelBBox:{x:1236,y:310,width:272,height:18}},{id:"6c0ua1",parent:null,source:"demo-stand-current-monitored-scope.light-switch-feedback",target:"edge-telemetry-agent.collector-runtime",label:`Поставляет feedback состояния света в 
текущий read scope`,relations:["8dkmwk"],color:"gray",line:"dashed",head:"normal",points:[[814,573],[850,607],[893,644],[935,673],[975,700],[1021,726],[1064,747]],labelBBox:{x:936,y:634,width:271,height:35}},{id:"1t1ianm",parent:null,source:"demo-stand-current-monitored-scope.room-temperature",target:"edge-telemetry-agent.collector-runtime",label:`Поставляет температуру помещения в 
текущий read scope`,relations:["5anl8o"],color:"gray",line:"dashed",head:"normal",points:[[1235,573],[1235,619],[1235,676],[1235,724]],labelBBox:{x:1236,y:634,width:257,height:35}},{id:"g1oj49",parent:null,source:"field-protocol-gateways.knx-router",target:"edge-telemetry-agent.collector-runtime",label:`Экспонирует group address и телеграммы 
через KNX/IP`,relations:["zexquv"],color:"gray",line:"dashed",head:"normal",points:[[1671,573],[1625,606],[1571,642],[1521,673],[1484,695],[1444,717],[1406,738]],labelBBox:{x:1583,y:634,width:276,height:35}}]},"c2-field-devices":{_type:"element",tags:null,links:null,_stage:"layouted",sourcePath:"likec4/devices/views.c4",description:{txt:"Внутренняя структура полевых устройств и контроллеров. Диаграмма показывает конкретные устройства и их подключение к ближайшему протокольному шлюзу."},title:"Field Systems / Devices / C2 Devices",id:"c2-field-devices",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Внешняя система",shape:"rectangle",color:"secondary",kinds:["system"]},{title:"Полевое устройство",shape:"rectangle",color:"secondary",kinds:["field-device"]},{title:"Полевой шлюз",shape:"rectangle",color:"secondary",kinds:["field-gateway"]}]},hash:"M5sD2_f_ttoMvZMb1z9YdTP03NRnQIAj9y7iXpl-RHc",bounds:{x:0,y:0,width:498,height:622},nodes:[{id:"field-devices",parent:null,level:0,children:["field-devices.knx-temperature-sensor"],inEdges:[],outEdges:["1c8khzh"],title:"Полевые устройства и контроллеры",modelRef:"field-devices",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Датчики, актуаторы, PLC, RTU и локальные системы автоматизации на объекте."},tags:[],notation:"Внешняя система",technology:"Field devices / PLC / RTU",kind:"system",depth:1,x:8,y:8,width:384,height:265,labelBBox:{x:6,y:0,width:190,height:15}},{id:"field-devices.knx-temperature-sensor",parent:"field-devices",level:1,children:[],inEdges:[],outEdges:["1c8khzh"],title:"knx-temperature-sensor",modelRef:"field-devices.knx-temperature-sensor",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Датчик температуры"},tags:[],notation:"Полевое устройство",technology:"KNX",kind:"field-device",x:40,y:61,width:320,height:180,labelBBox:{x:52,y:55,width:216,height:67}},{id:"field-protocol-gateways",parent:null,level:0,children:["field-protocol-gateways.knx-router"],inEdges:["1c8khzh"],outEdges:[],title:"Протокольные шлюзы и SCADA-контроллеры",modelRef:"field-protocol-gateways",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Точки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы."},tags:[],notation:"Внешняя система",technology:"KNX / Modbus / OPC UA / SCADA",kind:"system",depth:1,x:8,y:349,width:384,height:265,labelBBox:{x:6,y:0,width:233,height:15}},{id:"field-protocol-gateways.knx-router",parent:"field-protocol-gateways",level:1,children:[],inEdges:["1c8khzh"],outEdges:[],title:"KNX Segment",modelRef:"field-protocol-gateways.knx-router",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"KNX / KNXnet-IP",kind:"field-gateway",x:40,y:402,width:320,height:180,labelBBox:{x:81,y:66,width:188,height:45}}],edges:[{id:"1c8khzh",parent:null,source:"field-devices.knx-temperature-sensor",target:"field-protocol-gateways.knx-router",label:`Передают телеграммы, состояния и команды 
в KNX-сегменте`,relations:["c9z7g3"],color:"gray",line:"dashed",head:"normal",points:[[200,241],[200,287],[200,344],[200,392]],labelBBox:{x:201,y:302,width:296,height:35}}]},"c2-field-protocol-gateways":{_type:"element",tags:null,links:null,_stage:"layouted",sourcePath:"likec4/gateways/views.c4",description:{txt:"Внутренняя структура протокольных шлюзов и SCADA-контроллеров. Диаграмма показывает конкретные southbound-сегменты и их передачу данных в Edge Telemetry Agent."},title:"Field Systems / Gateways / C2 Gateways",id:"c2-field-protocol-gateways",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Внешняя система",shape:"rectangle",color:"secondary",kinds:["system"]},{title:"Контейнер",shape:"rectangle",color:"amber",kinds:["container"]},{title:"Полевое устройство",shape:"rectangle",color:"secondary",kinds:["field-device"]},{title:"Полевой шлюз",shape:"rectangle",color:"secondary",kinds:["field-gateway"]},{title:"Система в scope реализации",shape:"rectangle",color:"amber",kinds:["developed-system"]}]},hash:"ZtBfnV1CcUq_kvtD04egG82FHpW-sML5QZUBf5ay5eQ",bounds:{x:0,y:0,width:1276,height:971},nodes:[{id:"field-devices",parent:null,level:0,children:["field-devices.knx-temperature-sensor"],inEdges:[],outEdges:["1c8khzh"],title:"Полевые устройства и контроллеры",modelRef:"field-devices",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Датчики, актуаторы, PLC, RTU и локальные системы автоматизации на объекте."},tags:[],notation:"Внешняя система",technology:"Field devices / PLC / RTU",kind:"system",depth:1,x:16,y:8,width:384,height:265,labelBBox:{x:6,y:0,width:190,height:15}},{id:"field-devices.knx-temperature-sensor",parent:"field-devices",level:1,children:[],inEdges:[],outEdges:["1c8khzh"],title:"knx-temperature-sensor",modelRef:"field-devices.knx-temperature-sensor",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Датчик температуры"},tags:[],notation:"Полевое устройство",technology:"KNX",kind:"field-device",x:48,y:61,width:320,height:180,labelBBox:{x:52,y:55,width:216,height:67}},{id:"field-protocol-gateways",parent:null,level:0,children:["field-protocol-gateways.knx-router","field-protocol-gateways.modbus-gateway","field-protocol-gateways.opc-ua-gateway"],inEdges:["1c8khzh"],outEdges:["g1oj49","1wgfup1","6cczmq"],title:"Протокольные шлюзы и SCADA-контроллеры",modelRef:"field-protocol-gateways",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Точки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы."},tags:[],notation:"Внешняя система",technology:"KNX / Modbus / OPC UA / SCADA",kind:"system",depth:1,x:8,y:349,width:1260,height:281,labelBBox:{x:6,y:0,width:233,height:15}},{id:"field-protocol-gateways.knx-router",parent:"field-protocol-gateways",level:1,children:[],inEdges:["1c8khzh"],outEdges:["g1oj49"],title:"KNX Segment",modelRef:"field-protocol-gateways.knx-router",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"KNX / KNXnet-IP",kind:"field-gateway",x:48,y:410,width:320,height:180,labelBBox:{x:81,y:66,width:188,height:45}},{id:"field-protocol-gateways.modbus-gateway",parent:"field-protocol-gateways",level:1,children:[],inEdges:[],outEdges:["1wgfup1"],title:"Modbus Gateway",modelRef:"field-protocol-gateways.modbus-gateway",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/modbus.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"Modbus TCP / Modbus RTU",kind:"field-gateway",x:478,y:410,width:320,height:180,labelBBox:{x:62,y:66,width:226,height:45}},{id:"field-protocol-gateways.opc-ua-gateway",parent:"field-protocol-gateways",level:1,children:[],inEdges:[],outEdges:["6cczmq"],title:"OPC UA Server",modelRef:"field-protocol-gateways.opc-ua-gateway",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/opc-ua.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"OPC UA",kind:"field-gateway",x:908,y:410,width:320,height:180,labelBBox:{x:73,y:66,width:204,height:45}},{id:"edge-telemetry-agent",parent:null,level:0,children:["edge-telemetry-agent.collector-runtime"],inEdges:["g1oj49","1wgfup1","6cczmq"],outEdges:[],title:"Edge Telemetry Agent",modelRef:"edge-telemetry-agent",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Универсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий."},tags:[],notation:"Система в scope реализации",technology:"Edge collector / normalization / buffering / delivery",kind:"developed-system",depth:1,navigateTo:"c2-edge-telemetry-agent-containers",x:444,y:698,width:388,height:265,labelBBox:{x:6,y:0,width:146,height:15}},{id:"edge-telemetry-agent.collector-runtime",parent:"edge-telemetry-agent",level:1,children:[],inEdges:["g1oj49","1wgfup1","6cczmq"],outEdges:[],title:"Collector Runtime",modelRef:"edge-telemetry-agent.collector-runtime",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Основной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox."},tags:[],notation:"Контейнер",technology:"Python service",kind:"container",x:476,y:751,width:323,height:180,labelBBox:{x:18,y:28,width:287,height:121}}],edges:[{id:"1c8khzh",parent:null,source:"field-devices.knx-temperature-sensor",target:"field-protocol-gateways.knx-router",label:`Передают телеграммы, состояния и команды 
в KNX-сегменте`,relations:["c9z7g3"],color:"gray",line:"dashed",head:"normal",points:[[208,241],[208,289],[208,350],[208,400]],labelBBox:{x:209,y:302,width:296,height:35}},{id:"g1oj49",parent:null,source:"field-protocol-gateways.knx-router",target:"edge-telemetry-agent.collector-runtime",label:`Экспонирует group address и телеграммы 
через KNX/IP`,relations:["zexquv"],color:"gray",line:"dashed",head:"normal",points:[[253,590],[274,624],[301,662],[333,690],[372,724],[420,753],[467,775]],labelBBox:{x:334,y:651,width:276,height:35}},{id:"1wgfup1",parent:null,source:"field-protocol-gateways.modbus-gateway",target:"edge-telemetry-agent.collector-runtime",label:`Экспонирует registers, coils и 
дискретные значения через Modbus`,relations:["1mspxne"],color:"gray",line:"dashed",head:"normal",points:[[638,590],[638,636],[638,693],[638,741]],labelBBox:{x:639,y:651,width:244,height:35}},{id:"6cczmq",parent:null,source:"field-protocol-gateways.opc-ua-gateway",target:"edge-telemetry-agent.collector-runtime",label:`Экспонирует nodes, subscriptions и 
значения через OPC UA`,relations:["586866"],color:"gray",line:"dashed",head:"normal",points:[[1005,590],[979,624],[946,661],[911,690],[880,715],[844,739],[809,759]],labelBBox:{x:951,y:651,width:233,height:35}}]},"c2-edge-telemetry-agent-containers":{_type:"element",tags:null,links:null,viewOf:"edge-telemetry-agent",_stage:"layouted",sourcePath:"likec4/systems/edge-telemetry-agent/views.c4",description:{txt:"Контейнерная декомпозиция Edge Telemetry Agent. Каждый контейнер описан в отдельном файле внутри systems/edge-telemetry-agent/containers."},title:"Developed Systems / Edge Telemetry Agent / C2 Containers",id:"c2-edge-telemetry-agent-containers",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Участник",shape:"person",color:"green",kinds:["actor"]},{title:"Внешняя система",shape:"rectangle",color:"secondary",kinds:["system"]},{title:"Контейнер",shape:"rectangle",color:"amber",kinds:["container"]},{title:"Полевой шлюз",shape:"rectangle",color:"secondary",kinds:["field-gateway"]},{title:"Система в scope реализации",shape:"rectangle",color:"primary",kinds:["developed-system"]},{title:"Система в scope реализации",shape:"rectangle",color:"amber",kinds:["developed-system"]},{title:"Контейнер",shape:"storage",color:"amber",kinds:["container"]}]},ranks:[{type:"source",nodes:["field-protocol-gateways","service-engineer"]},{type:"sink",nodes:["monitoring-alarm-platform"]}],hash:"YzBqT8piMr-u-bzfzUPG-dmvNPQcRHldW4T5DnAezpE",bounds:{x:0,y:0,width:3043,height:986},nodes:[{id:"demo-stand-current-monitored-scope",parent:null,level:0,children:[],inEdges:[],outEdges:["2cx3pe"],title:"Demo Stand Current Monitored Scope",modelRef:"demo-stand-current-monitored-scope",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Текущий набор сигналов demo-стенда, которые читает Edge Telemetry Agent."},tags:[],notation:"Внешняя система",technology:"KNX monitored signals / current read scope",kind:"system",x:1846,y:69,width:380,height:180,labelBBox:{x:18,y:46,width:344,height:85}},{id:"field-protocol-gateways",parent:null,level:0,children:["field-protocol-gateways.knx-router","field-protocol-gateways.modbus-gateway","field-protocol-gateways.opc-ua-gateway"],inEdges:[],outEdges:["g1oj49","1wgfup1","6cczmq"],title:"Протокольные шлюзы и SCADA-контроллеры",modelRef:"field-protocol-gateways",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Точки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы."},tags:[],notation:"Внешняя система",technology:"KNX / Modbus / OPC UA / SCADA",kind:"system",depth:1,x:8,y:8,width:1260,height:281,labelBBox:{x:6,y:0,width:233,height:15}},{id:"service-engineer",parent:null,level:0,children:[],inEdges:[],outEdges:["cw5zhy"],title:"Сервисный инженер",modelRef:"service-engineer",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Настраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы."},tags:[],notation:"Участник",kind:"actor",x:1338,y:69,width:398,height:180,labelBBox:{x:18,y:47,width:362,height:83}},{id:"field-protocol-gateways.knx-router",parent:"field-protocol-gateways",level:1,children:[],inEdges:[],outEdges:["g1oj49"],title:"KNX Segment",modelRef:"field-protocol-gateways.knx-router",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"KNX / KNXnet-IP",kind:"field-gateway",x:48,y:69,width:320,height:180,labelBBox:{x:81,y:66,width:188,height:45}},{id:"field-protocol-gateways.modbus-gateway",parent:"field-protocol-gateways",level:1,children:[],inEdges:[],outEdges:["1wgfup1"],title:"Modbus Gateway",modelRef:"field-protocol-gateways.modbus-gateway",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/modbus.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"Modbus TCP / Modbus RTU",kind:"field-gateway",x:478,y:69,width:320,height:180,labelBBox:{x:62,y:66,width:226,height:45}},{id:"field-protocol-gateways.opc-ua-gateway",parent:"field-protocol-gateways",level:1,children:[],inEdges:[],outEdges:["6cczmq"],title:"OPC UA Server",modelRef:"field-protocol-gateways.opc-ua-gateway",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/opc-ua.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"OPC UA",kind:"field-gateway",x:908,y:69,width:320,height:180,labelBBox:{x:73,y:66,width:204,height:45}},{id:"edge-telemetry-agent",parent:null,level:0,children:["edge-telemetry-agent.collector-runtime","edge-telemetry-agent.delivery-worker","edge-telemetry-agent.configuration-bundle","edge-telemetry-agent.outbox-store"],inEdges:["2cx3pe","cw5zhy","g1oj49","1wgfup1","6cczmq"],outEdges:["mcfzkm"],title:"Edge Telemetry Agent",modelRef:"edge-telemetry-agent",shape:"rectangle",color:"primary",style:{opacity:15,size:"md"},description:{txt:"Универсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий."},tags:[],notation:"Система в scope реализации",technology:"Edge collector / normalization / buffering / delivery",kind:"developed-system",depth:1,navigateTo:"c1-system-context",x:920,y:357,width:1713,height:621,labelBBox:{x:6,y:0,width:146,height:15}},{id:"edge-telemetry-agent.collector-runtime",parent:"edge-telemetry-agent",level:1,children:[],inEdges:["2cx3pe","g1oj49","1wgfup1","6cczmq"],outEdges:["1tn9f5d","ekpvap"],title:"Collector Runtime",modelRef:"edge-telemetry-agent.collector-runtime",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Основной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox."},tags:[],notation:"Контейнер",technology:"Python service",kind:"container",x:1183,y:418,width:323,height:180,labelBBox:{x:18,y:28,width:287,height:121}},{id:"edge-telemetry-agent.delivery-worker",parent:"edge-telemetry-agent",level:1,children:[],inEdges:[],outEdges:["lamun8","138i2jo","mcfzkm"],title:"Delivery Worker",modelRef:"edge-telemetry-agent.delivery-worker",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Фоновый контейнер доставки: читает outbox, публикует telemetry events и service topics в MQTT topic tree и обновляет статус доставки."},tags:[],notation:"Контейнер",technology:"Python worker / MQTT publisher",kind:"container",x:2138,y:418,width:369,height:180,labelBBox:{x:18,y:37,width:333,height:103}},{id:"edge-telemetry-agent.configuration-bundle",parent:"edge-telemetry-agent",level:1,children:[],inEdges:["1tn9f5d","lamun8"],outEdges:[],title:"Configuration Bundle",modelRef:"edge-telemetry-agent.configuration-bundle",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Локальный набор конфигурации источников, модели сигналов, polling-политик и параметров доставки."},tags:[],notation:"Контейнер",technology:"YAML files",kind:"container",x:960,y:758,width:376,height:180,labelBBox:{x:18,y:37,width:340,height:102}},{id:"edge-telemetry-agent.outbox-store",parent:"edge-telemetry-agent",level:1,children:[],inEdges:["ekpvap","138i2jo"],outEdges:[],title:"Outbox Store",modelRef:"edge-telemetry-agent.outbox-store",shape:"storage",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Локальное надежное хранилище исходящих событий, статусов доставки и метаданных повторных попыток."},tags:[],notation:"Контейнер",technology:"SQLite",kind:"container",x:1446,y:758,width:344,height:180,labelBBox:{x:18,y:37,width:308,height:102}},{id:"monitoring-alarm-platform",parent:null,level:0,children:[],inEdges:["mcfzkm"],outEdges:[],title:"Monitoring & Alarm Platform",modelRef:"monitoring-alarm-platform",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Центральная система в облаке/интернете для приема событий, хранения телеметрии, визуализации, alarm-логики и маршрутизации уведомлений."},tags:[],notation:"Система в scope реализации",technology:"Cloud monitoring platform / alarm engine / operator UI",kind:"developed-system",navigateTo:"c2-monitoring-alarm-platform-containers",x:2673,y:758,width:369,height:180,labelBBox:{x:18,y:28,width:333,height:120}}],edges:[{id:"2cx3pe",parent:null,source:"demo-stand-current-monitored-scope",target:"edge-telemetry-agent.collector-runtime",label:"[...]",relations:["8dkmwk","5anl8o"],color:"gray",line:"dashed",head:"normal",points:[[1869,249],[1843,263],[1816,276],[1791,289],[1701,335],[1599,385],[1516,425]],labelBBox:{x:1744,y:316,width:25,height:18}},{id:"1tn9f5d",parent:"edge-telemetry-agent",source:"edge-telemetry-agent.collector-runtime",target:"edge-telemetry-agent.configuration-bundle",label:`Загружает описания источников, модель 
сигналов и runtime-политики`,relations:["p5w7v3"],color:"gray",line:"dashed",head:"normal",points:[[1184,591],[1160,609],[1140,632],[1126,658],[1111,685],[1110,717],[1115,748]],labelBBox:{x:1127,y:659,width:276,height:35}},{id:"ekpvap",parent:"edge-telemetry-agent",source:"edge-telemetry-agent.collector-runtime",target:"edge-telemetry-agent.outbox-store",label:`Сохраняет нормализованные события и 
задания на доставку`,relations:["1337gtq"],color:"gray",line:"dashed",head:"normal",points:[[1417,598],[1454,644],[1500,701],[1539,749]],labelBBox:{x:1491,y:659,width:265,height:35}},{id:"lamun8",parent:"edge-telemetry-agent",source:"edge-telemetry-agent.delivery-worker",target:"edge-telemetry-agent.configuration-bundle",label:`Загружает настройки MQTT, topic contract 
и retry-политики`,relations:["14gqniy"],color:"gray",line:"dashed",head:"normal",points:[[2139,574],[1984,628],[1788,696],[1783,698],[1612,740],[1562,714],[1391,758],[1376,761],[1361,766],[1346,770]],labelBBox:{x:1891,y:659,width:283,height:35}},{id:"138i2jo",parent:"edge-telemetry-agent",source:"edge-telemetry-agent.delivery-worker",target:"edge-telemetry-agent.outbox-store",label:`Читает ожидающие события и обновляет 
статус доставки`,relations:["w1v2d7"],color:"gray",line:"dashed",head:"normal",points:[[2288,598],[2269,634],[2243,672],[2209,698],[2091,785],[1926,822],[1801,837]],labelBBox:{x:2248,y:659,width:269,height:35}},{id:"mcfzkm",parent:null,source:"edge-telemetry-agent.delivery-worker",target:"monitoring-alarm-platform",label:`Публикует telemetry events и service 
topics по MQTT 5.0`,relations:["1noy8cq"],color:"gray",line:"dashed",head:"normal",points:[[2508,594],[2546,614],[2585,636],[2620,658],[2664,686],[2709,720],[2748,751]],labelBBox:{x:2676,y:659,width:241,height:35}},{id:"g1oj49",parent:null,source:"field-protocol-gateways.knx-router",target:"edge-telemetry-agent.collector-runtime",label:`Экспонирует group address и телеграммы 
через KNX/IP`,relations:["zexquv"],color:"gray",line:"dashed",head:"normal",points:[[325,249],[377,285],[442,324],[505,349],[726,436],[1e3,476],[1173,494]],labelBBox:{x:506,y:310,width:276,height:35}},{id:"1wgfup1",parent:null,source:"field-protocol-gateways.modbus-gateway",target:"edge-telemetry-agent.collector-runtime",label:`Экспонирует registers, coils и 
дискретные значения через Modbus`,relations:["1mspxne"],color:"gray",line:"dashed",head:"normal",points:[[733,249],[773,284],[823,322],[873,349],[967,400],[1081,439],[1173,465]],labelBBox:{x:874,y:310,width:244,height:35}},{id:"6cczmq",parent:null,source:"field-protocol-gateways.opc-ua-gateway",target:"edge-telemetry-agent.collector-runtime",label:`Экспонирует nodes, subscriptions и 
значения через OPC UA`,relations:["586866"],color:"gray",line:"dashed",head:"normal",points:[[1110,249],[1127,282],[1149,318],[1173,349],[1190,370],[1210,392],[1231,411]],labelBBox:{x:1174,y:310,width:233,height:35}},{id:"cw5zhy",parent:null,source:"service-engineer",target:"edge-telemetry-agent",label:`Настраивает адаптеры, модель сигналов, 
polling и доставку`,relations:["15jllvw"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[1488,249],[1471,279],[1452,314],[1433,348]],labelBBox:{x:1177,y:264,width:280,height:35}}]},"c2-monitoring-alarm-platform-containers":{_type:"element",tags:null,links:null,viewOf:"monitoring-alarm-platform",_stage:"layouted",sourcePath:"likec4/systems/monitoring-alarm-platform/views.c4",description:{txt:"Контейнерная декомпозиция Monitoring & Alarm Platform. Каждый контейнер описан в отдельном файле внутри systems/monitoring-alarm-platform/containers."},title:"Developed Systems / Monitoring & Alarm Platform / C2 Containers",id:"c2-monitoring-alarm-platform-containers",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Участник",shape:"person",color:"green",kinds:["actor"]},{title:"Внешняя облачная система",shape:"rectangle",color:"secondary",kinds:["external-system"]},{title:"Контейнер",shape:"rectangle",color:"amber",kinds:["container"]},{title:"Система в scope реализации",shape:"rectangle",color:"primary",kinds:["developed-system"]},{title:"Система в scope реализации",shape:"rectangle",color:"amber",kinds:["developed-system"]},{title:"Контейнер",shape:"storage",color:"amber",kinds:["container"]}]},ranks:[{type:"source",nodes:["service-engineer","operator-dispatcher","edge-telemetry-agent"]},{type:"sink",nodes:["notification-channels"]}],hash:"wGnCa_KVEBheXT8fAxboGq3GKlK68TDm6UnMSW8mAC0",bounds:{x:0,y:0,width:2043,height:1887},nodes:[{id:"service-engineer",parent:null,level:0,children:[],inEdges:[],outEdges:["16gquoh"],title:"Сервисный инженер",modelRef:"service-engineer",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Настраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы."},tags:[],notation:"Участник",kind:"actor",x:533,y:0,width:398,height:180,labelBBox:{x:18,y:47,width:362,height:83}},{id:"operator-dispatcher",parent:null,level:0,children:[],inEdges:["1cg2z5c"],outEdges:["16xbicy"],title:"Оператор / диспетчер",modelRef:"operator-dispatcher",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Работает с событиями, текущим состоянием объекта и alarm через центральную платформу мониторинга."},tags:[],notation:"Участник",kind:"actor",x:2,y:0,width:373,height:180,labelBBox:{x:19,y:47,width:337,height:83}},{id:"monitoring-alarm-platform",parent:null,level:0,children:["monitoring-alarm-platform.grafana","monitoring-alarm-platform.platform-api","monitoring-alarm-platform.mqtt-ingestion-gateway","monitoring-alarm-platform.alarm-rule-engine","monitoring-alarm-platform.notification-service","monitoring-alarm-platform.telemetry-store"],inEdges:["16gquoh","16xbicy"],outEdges:["dc94i1"],title:"Monitoring & Alarm Platform",modelRef:"monitoring-alarm-platform",shape:"rectangle",color:"primary",style:{opacity:15,size:"md"},description:{txt:"Центральная система в облаке/интернете для приема событий, хранения телеметрии, визуализации, alarm-логики и маршрутизации уведомлений."},tags:[],notation:"Система в scope реализации",technology:"Cloud monitoring platform / alarm engine / operator UI",kind:"developed-system",depth:1,x:472,y:288,width:1563,height:1300,labelBBox:{x:6,y:0,width:193,height:15}},{id:"monitoring-alarm-platform.grafana",parent:"monitoring-alarm-platform",level:1,children:[],inEdges:["16gquoh","16xbicy"],outEdges:["alolq0"],title:"Grafana",modelRef:"monitoring-alarm-platform.grafana",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Слой визуализации Monitoring & Alarm Platform: live-панели, инженерные dashboards и операторские представления. В текущей реализации подключается к MQTT Ingestion Gateway через grafana-mqtt-datasource."},tags:[],notation:"Контейнер",technology:"Grafana OSS / grafana-mqtt-datasource",kind:"container",x:525,y:349,width:356,height:180,labelBBox:{x:18,y:19,width:320,height:139}},{id:"edge-telemetry-agent",parent:null,level:0,children:[],inEdges:[],outEdges:[],title:"Edge Telemetry Agent",modelRef:"edge-telemetry-agent",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Универсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий."},tags:[],notation:"Система в scope реализации",technology:"Edge collector / normalization / buffering / delivery",kind:"developed-system",navigateTo:"c2-edge-telemetry-agent-containers",x:1042,y:0,width:382,height:180,labelBBox:{x:18,y:28,width:347,height:121}},{id:"monitoring-alarm-platform.platform-api",parent:"monitoring-alarm-platform",level:1,children:[],inEdges:[],outEdges:["26i7o3","1els6f1"],title:"Platform API",modelRef:"monitoring-alarm-platform.platform-api",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Backend API для состояния alarm, истории событий, конфигурации правил и политик уведомлений."},tags:[],notation:"Контейнер",technology:"HTTP API / backend service",kind:"container",x:1262,y:349,width:343,height:180,labelBBox:{x:18,y:37,width:307,height:103}},{id:"monitoring-alarm-platform.mqtt-ingestion-gateway",parent:"monitoring-alarm-platform",level:1,children:[],inEdges:["alolq0"],outEdges:["rstcnr","1jz0qh"],title:"MQTT Ingestion Gateway",modelRef:"monitoring-alarm-platform.mqtt-ingestion-gateway",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Принимает MQTT telemetry events и service topics от edge-агентов, восстанавливает routing context из topic, валидирует payload и передает canonical events на хранение и в Alarm Rule Engine."},tags:[],notation:"Контейнер",technology:"MQTT broker / ingestion service",kind:"container",x:527,y:688,width:351,height:180,labelBBox:{x:18,y:20,width:316,height:138}},{id:"monitoring-alarm-platform.alarm-rule-engine",parent:"monitoring-alarm-platform",level:1,children:[],inEdges:["rstcnr","26i7o3"],outEdges:["1lcbhhg","nw10x0"],title:"Alarm Rule Engine",modelRef:"monitoring-alarm-platform.alarm-rule-engine",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Обрабатывает входящие события по правилам, ведет жизненный цикл alarm и инициирует уведомления и эскалации."},tags:[],notation:"Контейнер",technology:"Rule engine / stream processor",kind:"container",x:1347,y:1028,width:369,height:180,labelBBox:{x:19,y:37,width:333,height:103}},{id:"monitoring-alarm-platform.notification-service",parent:"monitoring-alarm-platform",level:1,children:[],inEdges:["1lcbhhg"],outEdges:["dc94i1"],title:"Notification Service",modelRef:"monitoring-alarm-platform.notification-service",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Маршрутизирует уведомления во внешние каналы по alarm-политикам и правилам эскалации."},tags:[],notation:"Контейнер",technology:"Worker / notification gateway",kind:"container",x:1337,y:1368,width:390,height:180,labelBBox:{x:18,y:46,width:354,height:84}},{id:"monitoring-alarm-platform.telemetry-store",parent:"monitoring-alarm-platform",level:1,children:[],inEdges:["nw10x0","1jz0qh","1els6f1"],outEdges:[],title:"Telemetry Store",modelRef:"monitoring-alarm-platform.telemetry-store",shape:"storage",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Хранит телеметрию, служебные события, историю alarm и данные для мониторинговых и операторских запросов."},tags:[],notation:"Контейнер",technology:"Time-series DB / relational storage",kind:"container",x:808,y:1368,width:390,height:180,labelBBox:{x:18,y:37,width:354,height:102}},{id:"notification-channels",parent:null,level:0,children:[],inEdges:["dc94i1"],outEdges:["1cg2z5c"],title:"Каналы уведомлений",modelRef:"notification-channels",shape:"rectangle",color:"secondary",icon:"bootstrap:cloud",style:{opacity:15,size:"md",iconColor:"blue"},description:{txt:"Email, SMS, push, webhook и другие внешние облачные каналы доставки тревог и служебных уведомлений."},tags:[],notation:"Внешняя облачная система",technology:"Email / SMS / Push / Webhook",kind:"external-system",x:0,y:1707,width:378,height:180,labelBBox:{x:46,y:37,width:316,height:103}}],edges:[{id:"16gquoh",parent:null,source:"service-engineer",target:"monitoring-alarm-platform.grafana",label:`Настраивает dashboards и проверяет поток 
телеметрии`,relations:["1r3ilnx"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[725,180],[721,228],[716,289],[711,339]],labelBBox:{x:720,y:241,width:295,height:35}},{id:"16xbicy",parent:null,source:"operator-dispatcher",target:"monitoring-alarm-platform.grafana",label:`Работает с live-панелями, состоянием 
объекта и операторскими dashboards`,relations:["vaea6l"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[298,180],[339,213],[387,249],[433,280],[465,301],[501,323],[535,344]],labelBBox:{x:434,y:241,width:255,height:35}},{id:"1lcbhhg",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.alarm-rule-engine",target:"monitoring-alarm-platform.notification-service",label:"Запускает доставку уведомлений",relations:["pterx7"],color:"gray",line:"dashed",head:"normal",points:[[1532,1208],[1532,1254],[1532,1310],[1532,1357]],labelBBox:{x:1533,y:1277,width:230,height:18}},{id:"nw10x0",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.alarm-rule-engine",target:"monitoring-alarm-platform.telemetry-store",label:`Читает контекст и записывает состояние и 
историю alarm`,relations:["va66e2"],color:"gray",line:"dashed",head:"normal",points:[[1348,1191],[1300,1213],[1251,1239],[1207,1268],[1168,1294],[1129,1328],[1096,1360]],labelBBox:{x:1208,y:1269,width:296,height:35}},{id:"rstcnr",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.mqtt-ingestion-gateway",target:"monitoring-alarm-platform.alarm-rule-engine",label:`Передает нормализованные события в Alarm 
Rule Engine`,relations:["5ivtmw"],color:"gray",line:"dashed",head:"normal",points:[[879,805],[998,827],[1157,866],[1286,928],[1336,953],[1386,988],[1427,1022]],labelBBox:{x:1353,y:929,width:297,height:35}},{id:"26i7o3",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.platform-api",target:"monitoring-alarm-platform.alarm-rule-engine",label:`Читает активные alarm и управляет 
конфигурацией правил в Alarm Rule Engine`,relations:["qsx5jg"],color:"gray",line:"dashed",head:"normal",points:[[1494,529],[1555,623],[1643,779],[1678,928],[1686,962],[1674,993],[1653,1020]],labelBBox:{x:1661,y:760,width:288,height:34}},{id:"alolq0",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.grafana",target:"monitoring-alarm-platform.mqtt-ingestion-gateway",label:`Подписывается на live MQTT telemetry и 
service topics`,relations:["1si4dl2"],color:"gray",line:"dashed",head:"normal",points:[[703,529],[703,574],[703,631],[703,678]],labelBBox:{x:704,y:590,width:266,height:35}},{id:"1jz0qh",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.mqtt-ingestion-gateway",target:"monitoring-alarm-platform.telemetry-store",label:`Сохраняет canonical events и служебные 
события`,relations:["5gl5mv"],color:"gray",line:"dashed",head:"normal",points:[[683,868],[667,958],[654,1100],[705,1208],[735,1271],[790,1324],[844,1364]],labelBBox:{x:706,y:1099,width:268,height:35}},{id:"1els6f1",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.platform-api",target:"monitoring-alarm-platform.telemetry-store",label:`Читает телеметрию, историю и временные 
линии alarm`,relations:["o1bqrn"],color:"gray",line:"dashed",head:"normal",points:[[1309,529],[1198,616],[1043,760],[977,928],[960,970],[990,983],[998,1028],[1018,1139],[1016,1269],[1011,1356]],labelBBox:{x:978,y:929,width:280,height:35}},{id:"dc94i1",parent:null,source:"monitoring-alarm-platform.notification-service",target:"notification-channels",label:`Отправляет email, SMS, push и 
webhook-уведомления`,relations:["tsrxzq"],color:"gray",line:"dashed",head:"normal",points:[[1357,1548],[1323,1562],[1287,1577],[1253,1588],[959,1683],[605,1742],[388,1772]],labelBBox:{x:1170,y:1609,width:207,height:34}},{id:"1cg2z5c",parent:null,source:"notification-channels",target:"operator-dispatcher",label:`Доставляют уведомления по alarm и 
служебные уведомления`,relations:["1e9xjmn"],color:"gray",line:"dashed",head:"normal",points:[[189,1707],[189,1639],[189,1543],[189,1459],[189,438],[189,438],[189,438],[189,354],[189,260],[189,190]],labelBBox:{x:190,y:929,width:241,height:35}}]},"c1-system-context":{_type:"element",tags:null,links:null,viewOf:"edge-telemetry-agent",_stage:"layouted",sourcePath:"likec4/views.c4",description:{txt:"C1-контекст двух разрабатываемых систем: Edge Telemetry Agent на объекте и Monitoring & Alarm Platform в облаке/интернете. Текущий первый адаптер в проекте — KNX, но модель изначально проектируется мультипротокольной."},title:"Edge Telemetry Agent + Monitoring & Alarm Platform - C1 System Context",id:"c1-system-context",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Участник",shape:"person",color:"green",kinds:["actor"]},{title:"Внешняя облачная система",shape:"rectangle",color:"secondary",kinds:["external-system"]},{title:"Внешняя система",shape:"rectangle",color:"secondary",kinds:["system"]},{title:"Система в scope реализации",shape:"rectangle",color:"amber",kinds:["developed-system"]}]},ranks:[{type:"source",nodes:["field-devices","service-engineer","operator-dispatcher"]},{type:"same",nodes:["edge-telemetry-agent","monitoring-alarm-platform"]},{type:"sink",nodes:["notification-channels"]}],hash:"lqFddOVpxB_Z1ls6gO20s7S7rNY_60z12W1pMRhqm7A",bounds:{x:0,y:0,width:2251,height:1182},nodes:[{id:"field-devices",parent:null,level:0,children:[],inEdges:[],outEdges:["c2wk8h"],title:"Полевые устройства и контроллеры",modelRef:"field-devices",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Датчики, актуаторы, PLC, RTU и локальные системы автоматизации на объекте."},tags:[],notation:"Внешняя система",technology:"Field devices / PLC / RTU",kind:"system",x:37,y:0,width:379,height:180,labelBBox:{x:19,y:46,width:343,height:85}},{id:"service-engineer",parent:null,level:0,children:[],inEdges:[],outEdges:["cw5zhy","16a5o8z"],title:"Сервисный инженер",modelRef:"service-engineer",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Настраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы."},tags:[],notation:"Участник",kind:"actor",x:752,y:0,width:398,height:180,labelBBox:{x:18,y:47,width:362,height:83}},{id:"field-protocol-gateways",parent:null,level:0,children:[],inEdges:["c2wk8h"],outEdges:["1sivq2o"],title:"Протокольные шлюзы и SCADA-контроллеры",modelRef:"field-protocol-gateways",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Точки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы."},tags:[],notation:"Внешняя система",technology:"KNX / Modbus / OPC UA / SCADA",kind:"system",x:0,y:340,width:454,height:180,labelBBox:{x:18,y:37,width:419,height:102}},{id:"edge-telemetry-agent",parent:null,level:0,children:[],inEdges:["1sivq2o","cw5zhy"],outEdges:["1cfgwdb"],title:"Edge Telemetry Agent",modelRef:"edge-telemetry-agent",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Универсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий."},tags:[],notation:"Система в scope реализации",technology:"Edge collector / normalization / buffering / delivery",kind:"developed-system",navigateTo:"c2-edge-telemetry-agent-containers",x:483,y:679,width:382,height:180,labelBBox:{x:18,y:28,width:347,height:121}},{id:"monitoring-alarm-platform",parent:null,level:0,children:[],inEdges:["1cfgwdb","16a5o8z","4cjy00"],outEdges:["134rwii"],title:"Monitoring & Alarm Platform",modelRef:"monitoring-alarm-platform",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Центральная система в облаке/интернете для приема событий, хранения телеметрии, визуализации, alarm-логики и маршрутизации уведомлений."},tags:[],notation:"Система в scope реализации",technology:"Cloud monitoring platform / alarm engine / operator UI",kind:"developed-system",navigateTo:"c2-monitoring-alarm-platform-containers",x:1303,y:679,width:369,height:180,labelBBox:{x:19,y:28,width:333,height:121}},{id:"notification-channels",parent:null,level:0,children:[],inEdges:["134rwii"],outEdges:["1cg2z5c"],title:"Каналы уведомлений",modelRef:"notification-channels",shape:"rectangle",color:"secondary",icon:"bootstrap:cloud",style:{opacity:15,size:"md",iconColor:"blue"},description:{txt:"Email, SMS, push, webhook и другие внешние облачные каналы доставки тревог и служебных уведомлений."},tags:[],notation:"Внешняя облачная система",technology:"Email / SMS / Push / Webhook",kind:"external-system",x:1560,y:1002,width:378,height:180,labelBBox:{x:46,y:37,width:317,height:103}},{id:"operator-dispatcher",parent:null,level:0,children:[],inEdges:["1cg2z5c"],outEdges:["4cjy00"],title:"Оператор / диспетчер",modelRef:"operator-dispatcher",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Работает с событиями, текущим состоянием объекта и alarm через центральную платформу мониторинга."},tags:[],notation:"Участник",kind:"actor",x:1706,y:0,width:373,height:180,labelBBox:{x:19,y:47,width:337,height:83}}],edges:[{id:"c2wk8h",parent:null,source:"field-devices",target:"field-protocol-gateways",label:`Передают телеграммы, состояния и команды 
в KNX-сегменте`,relations:["c9z7g3"],color:"gray",line:"dashed",head:"normal",points:[[227,180],[227,226],[227,282],[227,329]],labelBBox:{x:228,y:241,width:296,height:35}},{id:"1sivq2o",parent:null,source:"field-protocol-gateways",target:"edge-telemetry-agent",label:"[...]",relations:["586866","zexquv","1mspxne","1qi0i11"],color:"gray",line:"dashed",head:"normal",points:[[345,520],[408,567],[485,625],[549,673]],labelBBox:{x:465,y:587,width:25,height:18}},{id:"1cfgwdb",parent:null,source:"edge-telemetry-agent",target:"monitoring-alarm-platform",label:`Публикует telemetry events и service 
topics через MQTT`,relations:["lblwx5","1noy8cq"],color:"gray",line:"dashed",head:"normal",points:[[865,769],[994,769],[1164,769],[1293,769]],labelBBox:{x:964,y:728,width:241,height:34}},{id:"134rwii",parent:null,source:"monitoring-alarm-platform",target:"notification-channels",label:"Маршрутизирует уведомления и эскалации",relations:["1rsym7h","tsrxzq"],color:"gray",line:"dashed",head:"normal",points:[[1561,859],[1595,901],[1636,951],[1671,994]],labelBBox:{x:1628,y:920,width:288,height:18}},{id:"cw5zhy",parent:null,source:"service-engineer",target:"edge-telemetry-agent",label:`Настраивает адаптеры, модель сигналов, 
polling и доставку`,relations:["15jllvw"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[865,180],[826,225],[784,281],[757,340],[709,446],[689,580],[680,669]],labelBBox:{x:758,y:411,width:280,height:35}},{id:"16a5o8z",parent:null,source:"service-engineer",target:"monitoring-alarm-platform",label:`Настраивает правила alarm, получателей и 
панели мониторинга`,relations:["1hotm1k","1r3ilnx"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[1022,180],[1123,307],[1307,540],[1411,671]],labelBBox:{x:1292,y:411,width:292,height:35}},{id:"1cg2z5c",parent:null,source:"notification-channels",target:"operator-dispatcher",label:`Доставляют уведомления по alarm и 
служебные уведомления`,relations:["1e9xjmn"],color:"gray",line:"dashed",head:"normal",points:[[1892,1002],[1912,984],[1930,964],[1943,942],[2040,779],[1995,709],[2010,520],[2017,440],[2028,418],[2010,340],[1999,288],[1975,234],[1952,189]],labelBBox:{x:2008,y:581,width:241,height:34}},{id:"4cjy00",parent:null,source:"operator-dispatcher",target:"monitoring-alarm-platform",label:`Работает с панелями мониторинга, 
событиями и alarm`,relations:["unfyc8","vaea6l"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[1840,180],[1764,307],[1626,539],[1547,670]],labelBBox:{x:1745,y:411,width:237,height:35}}]}},deployments:{elements:{"demo-stand":{notation:"Среда развертывания",style:{color:"blue"},kind:"environment",description:{txt:'Фактический demo-стенд по данным ETS-проекта "Выстовка" и connection memo от 2026-03-28.'},title:"Demo Stand",id:"demo-stand"},"whitelisted-remote-host":{notation:"Среда развертывания",style:{color:"blue"},kind:"environment",description:{txt:"Удаленный хост вне demo-стенда: мой компьютер с IP, разрешенным во внешнем KNX/IP маршруте."},title:"Whitelisted Remote Host",id:"whitelisted-remote-host"},"monitoring-cloud":{notation:"Среда развертывания",style:{color:"blue"},kind:"environment",description:{txt:"Облачный production-контур Monitoring & Alarm Platform."},title:"Monitoring Cloud",id:"monitoring-cloud"},"demo-stand.local-lan":{notation:"Сетевой контур",style:{color:"sky"},kind:"network-zone",description:{txt:"Локальная сеть demo-стенда с KNX/IP роутером и TP-линией 1.1; используется как целевая сеть удаленного подключения Edge Telemetry Agent."},title:"Local LAN 192.0.2.0/24",id:"demo-stand.local-lan"},"demo-stand.remote-access":{notation:"Сетевой контур",style:{color:"sky"},kind:"network-zone",description:{txt:"Внешний маршрут для удаленной диагностики стенда."},title:"Remote Access",id:"demo-stand.remote-access"},"whitelisted-remote-host.developer-network":{notation:"Сетевой контур",style:{color:"sky"},kind:"network-zone",description:{txt:"Сеть рабочего места, из которой Edge Telemetry Agent подключается к стенду через whitelist, а текущая реализация Monitoring & Alarm Platform принимает MQTT и визуализирует поток через Grafana."},title:"Developer Network",id:"whitelisted-remote-host.developer-network"},"monitoring-cloud.public-cloud":{notation:"Сетевой контур",style:{color:"sky"},kind:"network-zone",description:{txt:"Облачная зона приема MQTT-сообщений и визуализации Monitoring & Alarm Platform."},title:"Public Cloud",id:"monitoring-cloud.public-cloud"},"demo-stand.local-lan.knxnet-ip-backbone":{notation:"Полевой сегмент",style:{color:"blue"},kind:"fieldbus-segment",description:{txt:"IP-магистраль ETS-проекта: магистральная область 0.0 и главная линия 1.0 без прикладных устройств."},technology:"Areas 0.0 and 1.0 / KNXnet-IP",title:"KNXnet/IP Backbone",id:"demo-stand.local-lan.knxnet-ip-backbone"},"demo-stand.local-lan.tp-line-1-1":{notation:"Полевой сегмент",style:{color:"blue"},kind:"fieldbus-segment",description:{txt:'Активная KNX TP-линия ETS-проекта "Выстовка" в области 1, линия 1.'},technology:"Twisted Pair",title:"KNX TP Line 1.1",id:"demo-stand.local-lan.tp-line-1-1"},"demo-stand.remote-access.public-knx-endpoint":{notation:"Сетевой endpoint",style:{color:"indigo"},kind:"network-endpoint",description:{txt:"Публичная точка входа с пробросом на локальный KNX/IP роутер 192.0.2.177:3671."},technology:"203.0.113.234:7171 / UDP / NAT",title:"Public KNX/IP endpoint",id:"demo-stand.remote-access.public-knx-endpoint"},"whitelisted-remote-host.developer-network.edge-host":{notation:"Хост",style:{color:"amber"},kind:"host",description:{txt:"Хост, на котором запускается Edge Telemetry Agent. Подключается к KNX демо-стенду удаленно, а не размещается на самом стенде. На этом же рабочем месте текущая реализация поднимает MQTT Ingestion Gateway и Grafana."},technology:"Remote workstation / whitelisted IP",title:"Developer Workstation",id:"whitelisted-remote-host.developer-network.edge-host"},"monitoring-cloud.public-cloud.mqtt-ingest-host":{notation:"Хост",style:{color:"amber"},kind:"host",description:{txt:"Хост облачного контура Monitoring & Alarm Platform для приема telemetry events и визуализации через Grafana."},technology:"Cloud runtime",title:"Monitoring Platform Host",id:"monitoring-cloud.public-cloud.mqtt-ingest-host"},"demo-stand.local-lan.knxnet-ip-backbone.knx-router":{id:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",element:"field-protocol-gateways.knx-router",title:"Weinzierl KNX IP Router 751",description:{txt:"Локальная точка входа в KNX/IP и маршрутизатор в TP-линию 1.1."},technology:"192.0.2.177:3671 / UDP / TUNNELING / individual address 1.1.0",style:{}},"demo-stand.local-lan.tp-line-1-1.device-1-1-1":{notation:"Физическое устройство",style:{color:"secondary"},kind:"field-asset",description:{txt:"Панель кнопок с group address для света, scene и вентиляции: 0/0/1, 0/0/6, 0/0/7, 1/0/0, 1/1/0, 1/2/0, 1/3/0, 1/4/0."},technology:"KNX TP device",title:"1.1.1 Pushbutton sensor 4 Komfort, 4-gang",id:"demo-stand.local-lan.tp-line-1-1.device-1-1-1"},"demo-stand.local-lan.tp-line-1-1.device-1-1-2":{notation:"Физическое устройство",style:{color:"secondary"},kind:"field-asset",description:{txt:"Шлюз освещения с адресами Switch/StatusSwitch, RGBW и Scene: 0/0/1-0/0/7."},technology:"KNX TP to DALI gateway",title:"1.1.2 DALI Gateway Tunable White Plus",id:"demo-stand.local-lan.tp-line-1-1.device-1-1-2"},"demo-stand.local-lan.tp-line-1-1.device-1-1-3":{notation:"Физическое устройство",style:{color:"secondary"},kind:"field-asset",description:{txt:"Актуатор вентиляции: VentSwitch, VentDim, VentStatus, VentValue по адресам 1/0/0-1/3/0."},technology:"KNX TP actuator",title:"1.1.3 Analogaktor 4fach",id:"demo-stand.local-lan.tp-line-1-1.device-1-1-3"},"demo-stand.local-lan.tp-line-1-1.device-1-1-4":{notation:"Физическое устройство",style:{color:"secondary"},kind:"field-asset",description:{txt:"Комнатный контроллер с Temperature value 2/0/0 и сценой 1/4/0."},technology:"KNX TP room controller",title:"1.1.4 Room controller display compact module",id:"demo-stand.local-lan.tp-line-1-1.device-1-1-4"},"whitelisted-remote-host.developer-network.edge-host.configuration-bundle":{id:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",element:"edge-telemetry-agent.configuration-bundle",style:{}},"whitelisted-remote-host.developer-network.edge-host.collector-runtime":{id:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",element:"edge-telemetry-agent.collector-runtime",style:{}},"whitelisted-remote-host.developer-network.edge-host.outbox-store":{id:"whitelisted-remote-host.developer-network.edge-host.outbox-store",element:"edge-telemetry-agent.outbox-store",style:{}},"whitelisted-remote-host.developer-network.edge-host.delivery-worker":{id:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",element:"edge-telemetry-agent.delivery-worker",style:{}},"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway":{id:"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway",element:"monitoring-alarm-platform.mqtt-ingestion-gateway",style:{}},"whitelisted-remote-host.developer-network.edge-host.grafana":{id:"whitelisted-remote-host.developer-network.edge-host.grafana",element:"monitoring-alarm-platform.grafana",style:{}},"monitoring-cloud.public-cloud.mqtt-ingest-host.mqtt-ingestion-gateway":{id:"monitoring-cloud.public-cloud.mqtt-ingest-host.mqtt-ingestion-gateway",element:"monitoring-alarm-platform.mqtt-ingestion-gateway",style:{}},"monitoring-cloud.public-cloud.mqtt-ingest-host.grafana":{id:"monitoring-cloud.public-cloud.mqtt-ingest-host.grafana",element:"monitoring-alarm-platform.grafana",style:{}}},relations:{bgglu2:{title:"Передает KNX TP телеграммы в роутер 1.1.0",source:{deployment:"demo-stand.local-lan.tp-line-1-1"},target:{deployment:"demo-stand.local-lan.knxnet-ip-backbone.knx-router"},id:"bgglu2"},"1lb1jct":{title:"Проброс UDP 7171 -> 3671 для удаленного KNX/IP доступа",source:{deployment:"demo-stand.remote-access.public-knx-endpoint"},target:{deployment:"demo-stand.local-lan.knxnet-ip-backbone.knx-router"},id:"1lb1jct"},vzyll7:{title:"Подключается к стенду через whitelisted public KNX/IP endpoint",source:{deployment:"whitelisted-remote-host.developer-network.edge-host.collector-runtime"},target:{deployment:"demo-stand.remote-access.public-knx-endpoint"},id:"vzyll7"},"1a128jq":{title:"Публикует telemetry events и service topics в mqtt://localhost:1883",source:{deployment:"whitelisted-remote-host.developer-network.edge-host.delivery-worker"},target:{deployment:"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway"},id:"1a128jq"},zts6fw:{title:"Подписывается через grafana-mqtt-datasource на live MQTT topics",source:{deployment:"whitelisted-remote-host.developer-network.edge-host.grafana"},target:{deployment:"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway"},id:"zts6fw"},"17apjbx":{title:"Подписывается через grafana-mqtt-datasource на live MQTT topics",source:{deployment:"monitoring-cloud.public-cloud.mqtt-ingest-host.grafana"},target:{deployment:"monitoring-cloud.public-cloud.mqtt-ingest-host.mqtt-ingestion-gateway"},id:"17apjbx"}}},imports:{},manualLayouts:{}}),{updateModel:S4,$likec4model:P4,useLikeC4Model:z4,useLikeC4Views:M4,useLikeC4View:G4}=O4(_s),q4=Object.freeze(Object.defineProperty({__proto__:null,$likec4data:_s,$likec4model:P4,updateModel:S4,useLikeC4Model:z4,useLikeC4View:G4,useLikeC4Views:M4},Symbol.toStringTag,{value:"Module"})),K4=e=>ct.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"cloud_svg__bi cloud_svg__bi-cloud",viewBox:"0 0 16 16",...e,children:ct.jsx("path",{d:"M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"})});var X4=K4;const j4="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+CiAgPHJlY3QgeD0iOCIgeT0iMTAiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0NCIgcng9IjEwIiBmaWxsPSIjRjNGOEZGIiBzdHJva2U9IiMxRTYzRDUiIHN0cm9rZS13aWR0aD0iNCIvPgogIDxwYXRoIGQ9Ik0xNiAyNEg0OCIgc3Ryb2tlPSIjMThBOTU3IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0xNiA0MEg0OCIgc3Ryb2tlPSIjMThBOTU3IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxjaXJjbGUgY3g9IjIyIiBjeT0iMjQiIHI9IjMiIGZpbGw9IiMxRTYzRDUiLz4KICA8Y2lyY2xlIGN4PSI0MiIgY3k9IjQwIiByPSIzIiBmaWxsPSIjMUU2M0Q1Ii8+CiAgPHRleHQgeD0iMzIiIHk9IjM2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iIzBCMjc1QSI+S05YPC90ZXh0Pgo8L3N2Zz4K",$4="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+CiAgPHJlY3QgeD0iOCIgeT0iMTAiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0NCIgcng9IjEwIiBmaWxsPSIjRkZGOEYyIiBzdHJva2U9IiNDOTZBMTIiIHN0cm9rZS13aWR0aD0iNCIvPgogIDxwYXRoIGQ9Ik0xOCAyNEg0NiIgc3Ryb2tlPSIjQzk2QTEyIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0xOCA0MEg0NiIgc3Ryb2tlPSIjQzk2QTEyIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0yNCAyNFY0MCIgc3Ryb2tlPSIjMUU2M0Q1IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik00MCAyNFY0MCIgc3Ryb2tlPSIjMUU2M0Q1IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxjaXJjbGUgY3g9IjI0IiBjeT0iMjQiIHI9IjMiIGZpbGw9IiMxOEE5NTciLz4KICA8Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSIzIiBmaWxsPSIjMThBOTU3Ii8+CiAgPHRleHQgeD0iMzIiIHk9IjM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI5IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjNkIzNjAwIj5NT0RCVVM8L3RleHQ+Cjwvc3ZnPgo=",H4="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+CiAgPHJlY3QgeD0iOCIgeT0iMTAiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0NCIgcng9IjEwIiBmaWxsPSIjRjJGQkZGIiBzdHJva2U9IiMwRTc0OTAiIHN0cm9rZS13aWR0aD0iNCIvPgogIDxjaXJjbGUgY3g9IjIyIiBjeT0iMjIiIHI9IjUiIGZpbGw9IiMxRTYzRDUiLz4KICA8Y2lyY2xlIGN4PSI0MiIgY3k9IjIyIiByPSI1IiBmaWxsPSIjMThBOTU3Ii8+CiAgPGNpcmNsZSBjeD0iMzIiIGN5PSI0MCIgcj0iNSIgZmlsbD0iIzBFNzQ5MCIvPgogIDxwYXRoIGQ9Ik0yNiAyNEwzMCAzNiIgc3Ryb2tlPSIjMEU3NDkwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0zOCAyNEwzNCAzNiIgc3Ryb2tlPSIjMEU3NDkwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0yNyAyMkgzNyIgc3Ryb2tlPSIjMEU3NDkwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDx0ZXh0IHg9IjMyIiB5PSI1MyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiMwQjI3NUEiPk9QQyBVQTwvdGV4dD4KPC9zdmc+Cg==",W4={"bootstrap:cloud":X4,"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg":()=>ct.jsx("img",{src:j4}),"file:///Users/srgi0/projects/web-monitoring/arch/images/modbus.svg":()=>ct.jsx("img",{src:$4}),"file:///Users/srgi0/projects/web-monitoring/arch/images/opc-ua.svg":()=>ct.jsx("img",{src:H4})};function Z4({node:e,...t}){const n=W4[e.icon??""];return n?ct.jsx(n,t):null}const U4=Object.freeze(Object.defineProperty({__proto__:null,IconRenderer:Z4},Symbol.toStringTag,{value:"Module"}));let Hn={"industrial-edge-architecture":()=>Bt(()=>Promise.resolve().then(()=>t5),void 0)};async function V4(e){let t=Hn[e];if(!t){const n=Object.keys(Hn);if(console.error("Unknown projectId: "+e+" (available: "+n+")"),n.length===0)throw new Error("No projects found, invalid state");e=n[0],console.warn("Falling back to project: "+e),t=Hn[e]}return await t()}const X5=Object.freeze(Object.defineProperty({__proto__:null,loadDrawioSources:V4,loadDrawioSourcesFn:Hn},Symbol.toStringTag,{value:"Module"}));let Wn={"industrial-edge-architecture":()=>Bt(()=>Promise.resolve().then(()=>r5),void 0)};async function Q4(e){let t=Wn[e];if(!t){const n=Object.keys(Wn);if(console.error("Unknown projectId: "+e+" (available: "+n+")"),n.length===0)throw new Error("No projects found, invalid state");e=n[0],console.warn("Falling back to project: "+e),t=Wn[e]}return await t()}const j5=Object.freeze(Object.defineProperty({__proto__:null,loadPumlSources:Q4,loadPumlSourcesFn:Wn},Symbol.toStringTag,{value:"Module"}));let Zn={"industrial-edge-architecture":()=>Bt(()=>Promise.resolve().then(()=>i5),void 0)};async function Y4(e){let t=Zn[e];if(!t){const n=Object.keys(Zn);if(console.error("Unknown projectId: "+e+" (available: "+n+")"),n.length===0)throw new Error("No projects found, invalid state");e=n[0],console.warn("Falling back to project: "+e),t=Zn[e]}return await t()}const $5=Object.freeze(Object.defineProperty({__proto__:null,loadMmdSources:Y4,loadMmdSourcesFn:Zn},Symbol.toStringTag,{value:"Module"}));let Un={"industrial-edge-architecture":()=>Bt(()=>Promise.resolve().then(()=>s5),void 0)};async function J4(e){let t=Un[e];if(!t){const n=Object.keys(Un);if(console.error("Unknown projectId: "+e+" (available: "+n+")"),n.length===0)throw new Error("No projects found, invalid state");e=n[0],console.warn("Falling back to project: "+e),t=Un[e]}return await t()}const H5=Object.freeze(Object.defineProperty({__proto__:null,loadDotSources:J4,loadDotSourcesFn:Un},Symbol.toStringTag,{value:"Module"}));let Vn={"industrial-edge-architecture":()=>Bt(()=>Promise.resolve().then(()=>d5),void 0)};async function _4(e){let t=Vn[e];if(!t){const n=Object.keys(Vn);if(console.error("Unknown projectId: "+e+" (available: "+n+")"),n.length===0)throw new Error("No projects found, invalid state");e=n[0],console.warn("Falling back to project: "+e),t=Vn[e]}return await t()}const W5=Object.freeze(Object.defineProperty({__proto__:null,loadD2Sources:_4,loadD2SourcesFn:Vn},Symbol.toStringTag,{value:"Module"}));function Z5(){throw new Error("No projects overview available for this workspace: single project mode is enabled")}function e5(e){switch(e){case"index":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dVnFEuzIjv2au%2BwJMyzNZWbcmZnZXz923%2Fd2MxFVjkqSlUrl0ZHqD8z8gfmr7%2F5AwJEvaz0Of2D2DwSB%2FwO8z7c3H9Ixq4fyb7fr8P8Q3wDM%2F4G5PwD1B2b6q6i7%2FJ1ajev2d5pStzmD%2FBXQv8uLOs%2F%2BjkAAhP0DwP9AhAOQf2AKxd8HAP4PDCPR3%2FlxmQ%2F%2Fh5j%2FR7st%2Fo9mf9vbPeV%2F21l%2B1Gn%2Br6r%2F6gkB3wdmsjoul7h%2FG0Pc%2F2euEg%2FZmsbTt4mjzs%2B%2Fsur%2FqNy9WqTIP%2FWQ5ddfebgHRim5ItyBgPPQ2fWYjwj6c1VnBW07xLM9QibOk5HRtDfLzF5pvLHwJ31pItM76n4jiO511M3o9KhpBg1qJ%2FtN0geI3NMb7l8b07zbx%2BRzDnsOoyuKD40F%2Fd45mizqt1YHfiT9cn%2BuxWOFUetX987bJeabaHlubnnbljYd4e3djSyKjez3K1ESHDyc0wX2i%2BTSl7BWouhJ1oDs7SSoloIW5OM1Nx8nSV5LS4bE1rtqRUA%2B3DD7vCO9rlYTTUnc2eomLP7d1w0pYz8RiiVtCZZNztBu7yK1WbCgV6r3Z9E9xZmjZE4g0TNiLXqO9b1nQCcD%2BEoa%2BBJFvIet4Ts1IHVAw4LR3rAe0oO3h7wPifB3i7cjFL5CpK1L1PODS2nS8jMSGu40TLZYCnbeIsTGGuOowqgkNBjMWdEoBUrX3Cn3PZNaMXfOL%2FMo0Ihm7lYSb%2FayV4SDer3hDEX0eQk%2F%2BY1GaZiWV7X4oDm%2FKOngv45Bg6qN7qenWjFshE5yopfL20GUIfDyOgxPZgDGmYHlw2%2FDNaAEjxLy%2Ffmcc107m347ujZaWu5X9t2qtmp%2BPsa7PGaP0G3iuMHEGtulKOrz3DvwfmxnYSymvVycW4iV2NeNca1rmEG4yGQSOnVNOi7NDslvMngWc3%2BB4J3bXiPkM5i3Hja%2Bat9n1HSwF7QkfnoEOq%2FdYvnt8F4Avl7y6Giz%2FNFV8vQnqRhfGKBbJ37HQt9GmzYgcvQzynFaHdgRllVW7tv0CSwIfANlg28LWhzVx10oJc5xCg5erTZfKbDkVMbEMBoQSSOjDtsoItvDJPNanFdo6DUNXVfpYycuLy1qeUrfaQ%2Fg7SalhD9zVnWeJ%2FSaEdV%2Bxl4%2BmP2uVfcsV5Is5LTyrPntUGInrR3g43QLn59tco5rA4%2BPQEaMoUJWDdKMkPAeHs9d4RMthKNP9BSqL9LQGM4qxZ6uqqXOwkDTyuu1vMyN7YpKmfZZwOqKSDC%2BxVKMDSc7bHvCVBLjytDQuvQ7IIIII0Fpe0uC9PM4vn77hDR3pT5PP990DM19qKTqDyehSVrSigNU6p%2FlMBK%2FsFxH1N9Rt4CePx0V%2Bc7FvM1eTiSz0xSeJBr5c4NPg%2B26hblyz%2Fc2I%2B7aHuEdXNEkIWvojFbSoGvXW%2BXOPOLvOcMZ6XVsXPRggqRPjUuNa3GW53qGDBkpIxm9t7axmOThNY4U%2FYCehgPmKrY0w%2BoUTRNzZYPkBuCM2Mac2PJEpfXohy7SJWxCNihRgSmvd%2F6U6WEQgFbvf2uasGjYfK4DVcnn95VExxtl8Pc6j8EEdpgvJdFwpIoY0MIEmrXrXNx1c0blWJw3x5QtpaKTO8lqXprAG%2B14n4A7CDurgp0b4upVodkkOB8%2ByYIV1KWSx4%2FptzHYdq0YY%2B6cx6xnxm6g1RvX71T1QjrfemES65OYYJPVyVrnQh%2B0wlQeo1Rmk61rBFiiPCH%2BxgcenXWkI%2F5ePyKwE80jnAnRLQlv3h6GGcdJhRkb5vHv4JjIWp5JeG4e8p%2B0cFF4U6rcbSRoGriKaq7uvYB8ksRS3fBcXP74eHo7qtRTuEtgcpl%2FdI6HDFIJtySWf72bebXBXbSF21w8IxIYjadAWCW%2BlUKMYyICB%2BArIOPFEy7I8UVLVI%2FgW4dAsUllxg6VkgPqklMJli8Qva8nJCxUY%2BHKJqXyn6qrikM71IUBG1cOjMtk%2FGk20imPsxOJOBMkuhmezhIV01GAXH2Vb8DjPx%2F6YLLeKJwsisVHmJzvZlXT3VV0U20YnbGLXdvEeNOi7gbKnmaOzA8bMrISxB8iIXYSUTf9wn00qwClDINC6cOQnCRrIfomVIJXE6pzdafiXtQeqr6Qu%2BhTeFnlzIQzh5u4%2FqRDOJHl9wEH9ws5mbvbxp1yVnHiNqfRcRitx5UQtP7xLBswUNMO%2BVxwkbTXsvkIcrJQOcOPLQW6P852oYkiroMibkkhrvHfXQ5wIvVxKXWwFtbVpz9YoXlB37MuVZOXgTApz%2ByFZCCNHuIU3HjKdK4WXJhowwhC96KIxJhs9quIm8ThS%2BdE2An9hlAmYYusmmH2CUv9HCidM1TtXGctMkD3vr3kFs4SUczVUDRnHiA77OyKDB3XF7dNpDGEBVgn9KXGinU6bNmU5bTU89xjTOZV0KY7D8HbFnnCx%2Fhy6%2Fspm%2Fo2daZ5BR5UxN697Sw%2F0Y3W1%2BLkWLN2mPbIkrPEZRhGtAeqWCvN%2BKh7bnnjjaaC7fXGf3TjpI9fefkfwC5AaxunVB4LjwyiS1qbEJy3KdPXPvI2X2hT6HVr%2FTsDkg%2FuTPTc%2BB7TuRhZU900ltmEh%2BMMwB7Wy%2BY1kxWNL3B2PHEB4uBvpZa5E323MX%2FGJQxscvXjFfVaRkbGMQvPZ6tzFCe9GtXPK27bKLGB1rMefM3w4TEpw2geanUH9Y3iTaBk0UA5UUhO0LxuhRberP4q8UPB%2FOsXAvOy8txJbi1JJ75131xj72zt%2BEnHICKfVGAfx3h1d0e6o4unoQzqFSwo8Cuk68%2BTGEsw6dc07FrF4JCmTAGho8DyFMM0vpyRplJVYAtAIsGZvG42CqR6HmM%2Fec9GiZ1S%2BfhEUi3kFHHZJPeyEJhCYVKMbT6SGI2mlGBwq6DZc43qaFO0t0ULv7KHrazed5qe2HKtE5QHSP46tVeB6qL0qF1%2FeRIOi5zZ6%2BCRMaf%2FhbL4ewyIpnyxRKF%2B9rKAhmaRebXLCOSRjgsnOfCq2Wyd1gQjEROETHxHzl90rFqgjWJaM8ai1rrrKssXnDAyA46jl0bY0Bgr1SZy2Qtww2hnW8w%2Fm%2Bv2B0olc2GGeJoE0wXcnQUSGdN89o0R9IOFuwlcEjJ1mg1w5PuOi34PPS8f%2FvzsZ7v0UII%2FTxWhI90g5wT1cuOu%2BMVhGtkwoPRroSTqxMRPHronvDv75zQSmuCp8p3ygfyEadAXiUQRNDDvUb5gGhQg69wgwnY7A5eeG9xP%2F3TmOsVEPDcvgxhQS6ZrjIopg%2FoYM0RiNQpNAtVdh%2FxJvbs0%2FeAwWdXSKCX3eZ3vGsP6JI8a07ZDosz3PZG%2FaqJ4epPLQJCeNoE9vxeZATL%2FmmWr2cTkV80NQ0hAKK0fw6rAWUUhzTtSoeV2xsIBDc8L8IlKCplmnad4xP%2F2ju46LpI1LW%2B0WrIT6jBAYU%2BalFY6CfCTS%2BdYd0kJDUvxrkwrfZ1pGQmg5193vctOhG8HWcjmxXsqKiFZYKi%2B78px8DoVn36uEgTRJcW12U8%2F0phqFbbTJFJuQMu6hbLZhGNd8rYjBhqGHAfvwT4A5k0UxvcKzAYq%2FuiXJiGdB310HtIqkTjFCxwlbKNcQ%2FDfN8DYTwjVM3jMq5WrkGshdOG8V0THLV9wr3pzzsHnbB%2FIbr0ZpsHBFZcNFA7gjbTu6C7TG6rpUzLR%2Bcgonr0yGz6uATsdIM4R05y009%2BHefZ%2FufGlCCDnfTsbqzScGzdftf4GQgDRuyBnDtbD%2FJqgwFRLK2ZqfPaJGf9o4585hrm0sgbiQzfV9cBt%2FRi2EzxDSBMygchR5QrRYhoqucN%2BS%2Birb%2BBQ%2B8G5HOIaX9GmwS4IKHBBq9tQ%2FUWXcIIevfIfcAbtAt%2BeSMP0D5iXLl3WPrS%2F4O%2BQIiF%2BnZg6ZkSzkAOGV7Jy7rJKjkewsSL3Mnf6EN6jL0WeV5ZCS1bwtzwgxiITG1Pw4mbM8118lHNztYqjDNVO%2FPeML%2B93OEwGouHK61X43PsKuwr6N7zzekoVISDiAAzEMFASw%2FQGdpsiHmDIP2rexBf6oYfoV1Wb2VvvQ0MxB%2FjyOWUgoJENSTPo0eVNjrJzbc%2FTp9a2H4Ug66qWtiGGBBiqwxRtcA5D%2Bm5ZG2VKdw6Heq2DNwp2o88d33h08tM%2BUOE2qryAHqTDhzzfuzQfFTdtUC7hSYkZwWcs%2FLR61%2BQa6t9oa6RVi9foLZhXrbMN3vKNgIBEVkKH4DyJKLVsi9HsL6K9X%2BqSC7OBymfox8fJ7k6FE65HAinhauB%2BUGomTzDii%2FDSYKhP1UvPabzZoJ6KWdEW0lDoXARW4V0ZenA4lSQIoRBIJFWO5hRKBFvOwtDiEzXAwF3uu%2BHOJS168KgJR3BPFMT68mLQ%2FZDwah%2FNyZGj5qIv2b6b%2BM3ryFtzvGdYO1pijkaOo%2BK9zbAuSPjvTVpCEvD5q61TtcQKlPxA%2FXSZ1UcPQlWhrFmGoR9vFMDf1L8maIiSQ8fCYa5Fl2ybEWs7XDHJkvYc7JyHX4Yg%2BvwuHMdjxelFAAQc9nCxCy5U2HjmJM4Cb6C26UcA7mQRTY1svSGOL%2BRg%2FO6r2cjOX4aoX767b%2B67F3KxqwPnzfoQYGPnC443U%2Fl3r6cCuS87eVc1ikwMI7IZPOyVBQyHoCwkpDA5vEacwbmncfXgIP2UrHdOVxUOkSABXqDQhyPvmdnJPYLevwHz6udjKfTNRL1EgNVadQyJH9SWwcglV1ANwyWUZM%2FUwPN4odGDRrfqZQLVh7e4%2F%2Fz94dvLIaWnDqq62RQTTX%2BvQem5KmANEpYQmUcNVxP%2B2jcz4n8DLPWC4ACnDNoUL9NJvtG7pl7QXEEz8VDLki7Wzgx3lFUj%2Bit%2FVfUhIcb9VP7BbzOzi8KoFXcgI%2FXo0Zd5yzYjR7ZcoYXaruYXpK5Gf4meGiHfwtEwjvHLPhLMNgMwtORREckUR2C3a%2BF8EJR7mm9xSKGfpApnBcgIlfUZylwvRlZrF9q%2Fszq4IBfAlpGBJaW2GLh9K63IXIB3HVaJQSMljTLrYFeKKXxQ55UX7Oh1l3mZyctGh5kKWVTBFD2uvZJftVy8%2B4krJ4ENHgXK4OExF7zJMxiZc8xwYE3OqD5L5NWD8RApZyzlGppAnPqzAE3gSubDp61B%2BAAFV8po4HR6N07TjUk9rEWuor1NX6Ava7xUOB7usoOPeM0e0ci1VRh6wS%2BFZ1GbGaI9mz2GDat2n1vSVqyRkfMp9a%2Bwg321LPPNmOgY2%2FoT7pc1QGEj6rCTihk8WCgtMFINw19go7fkWGgdiYhkQXRm5XDuByCp%2Fgsa5uHfkNMhDmBil2sTt4I6KQQTUSfZCtoB7JsfsKvJO5ft%2F0ttauJLgyv2nHAS1VflR5QYMY5fNYgAH79jsRz4sqO7KepQBiGsPeqz9cMhJOLC2cuv%2BHDDYMUnZnyA%2FQ2rroJ%2FKvrpm8FhH3CfjxRmZ0uSg0RIiqy06dg5hOsZmuRhqD2YbzpFqTrg%2FNTa%2FSobYLwiD9Jd%2BKXCLYlea0m1b7fHOoEY1E5P6nCpp26oRuKBxKQR28LR4ZOEML9op6N%2F6xSoIwh9Bkg7DaVBtPKOff6osVPNL83dO%2F3dnkAoI0SIr8vzbFWRP7pKdM3glrXgVI6Acq9J5Kz0Y6qWa8coPSKP9d5JD%2Bc4HUg4OcSFEXNsetAajBNx3ZdL0S%2BZ5InEylQujCH4AvlK4IdTt5C%2BIu6UnCBJce6MSVpZsBTXaH53xt5SPus93DchhCCcN6lE85lf0Z4iTOW8S0q%2BM%2FBzNMVEg7jpoOheFXgig1Nf379KQMq43OdCiqG%2FSOm4Hca9DvH5Ui8oCw29QcyjTu0udCKymHYBjztejggHzrXewKr98P2rggSxO15tZ3jox32iXX35F8dZECHTXGbMgrgdcCl0WYWIRTz9Lp5SB9pILw0dIUkaPk2WhaIk9V4bQVvToT4H7HbgIp329x1Vhe25BVvcvGMFjiGkUu%2FQZCCH6zCQc4UaxIDlV730c8vcc5FX5oxnsYvn0Lyjzfp6wJ7YNsGYaCZnqZH%2BSL%2Bn8EmZLgqgQz%2BaMtHz7GBszbs4mKd6uAHDHDAjcVmU%2FOpkyo3m2HtPMNjUPyg%2BmB9bQFhi1MVk98rYSjbxN9F7v28iQhNYJ2IqaH11FoL9A39Fr%2F9W5f%2F7n8JXB%2Fv7t8K%2FPf8L%22%7D";case"c1-system-context":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dVnFsuy6kv2aM7wdpjIMzczsmZmZ%2FfVt3%2FM6etIdsbeqJEtyKmHlStUfmP4Dc1ff%2FYGAI1%2FWehz%2BwMwfCAL%2FC3jbdzQf0jGrh%2FLvsOtw%2F%2BDfA5j7A7N%2FAPIPTPdXUXf5O7Ua1%2B3vNKVucxr5u0H%2FLi%2FqPPv7BAIg9B8A%2FgfCHYD4A5M%2F7G0A8L9gmIj%2Bzo%2FLfPg%2Ftvl%2FpNvi%2F0j2t7%2FdU%2F63n%2BVHneb%2FivqvnBDw%2FcF0VsflEvdvZ4j7%2F8xls%2FKT38m7vM%2B35X6%2Fk%2F9K8S2i3lYdh3obl08N3xAa99Mf%2BHtAdvHy7WV08VaM%2F3795%2F2nwbex73XLvxF6HLb82v5KWP9HEd17thT5JwX%2FWf%2Bd90%2F6v7NgFvPAJCV2iD0QsG8w6UT28b7VyW6gTOs7HcGcSbxBS602GZSFEdLRwzhp8T6l8JbMTYfj2nbDPvWAlVtpuD6DkEbzZP%2F9gbglEQpi6ZY%2Bst%2Fe2Q05oeoAd2bNc9O4tjMpDQ7%2BlYgazhX09aqAKYbSViInEVQCXOhpXuRpa6Yy3OYdB4LGin0w8MD5zhIv9nL0%2FiU%2FMCEvwPOhmXtfwqVH3y9pzcvD%2BXbfLZ2v6RYXI%2FEhSc%2BeRbrfJ04SQImMUq5QLXrBGcW8fjK%2Bc4fMc8Gnr61YUOHHPeQY54SgxY%2F%2BNQRVdE%2FxxGCS42L0jNOGnWGP7lu7p78lx5BAwoLA%2BlEEDIUKD0%2FyLkFC8MRJC8R7rciZ52dBW3jbZsdSCxOO1xGnqIjr8e7tK2f0E4qgCrUZ6iGJAmxL5OA%2BKn7Sa19ufp2HC%2F3lbbXt%2FGGjg8s53AXJOA9zuOw%2Bm6pQGg0e%2F50PGNM79lKveHfeLxhd1HdU%2BNfPONjJUN5Bt60lcJBvuul4A5NzrxiZ5hqo4n1xDrrfxHHoAOBTylTYUtesesTV7Q%2Bir2OK9TY7ez6tB5MOpZ%2BntiymBZ0LEI2J8Z8e53CcTEIKls7qMK%2BZ%2B5y8Nc1zLEijxkUTr0j2IFQ4qAQo29qT8tHv9RbcKoq9q%2FmVhy4jAGwmaTwJOflhev9aVRn0BzfoaLDeCfVq0wKVxmXBVafn3zrLjv1ebYOFt%2FRPxcaTWgOq4QToDTVuv46eZvkHnnlffPviRQMm1Z6s8lcpwYcM3ARDgyqi7m30tOQxF1mDdPnYXZwKNw%2FOGYug25AC50aUmjys%2FL7%2BQK%2BuxL5VPUFlwzCirGY76fFTM2k2FTT62sq%2BvYdx95vKWi7nlthDndc2JOv42T2Q4slQbnBwvwc7HO7wMCwHfJHiqQlFKLrq5VO8mwFzVw9IRdEftEFUKdaXqvJdSK26rUyFgsw7z4bJd1JUIKWkn7FjwZAOR%2BMwuTzPPXBsMs66WmO6Nwp3qixShK4kPGwur25IflfKj2GjQuW5FdITLPGO%2BJnJIgvr6d7P%2FaUQb9BW5Mc3XJgSrw1r7Bh1wsL3Zw5BfxJk8YqAoEA4kdPL41584l5NUPcZMdwNnGICWMvyeJHi11ukfC75hq6cThjXGGpW%2BZNUtF2e5Q3%2BIFVj0lKirMPrwhymorWMieNtzsFCvQ4xYkAHFB%2FOBFc449g1jKiGuwTXcYBi09n7Vmt6CvwWXt%2BmKoGPXczq4uaAJSuhsfNcK7fpXw%2FD689WdlBFDGXBHwoJkzCuZlmFLVeYXywtK4FDpZnfzttzwq1i7vu0Q2N8OPO87inEbHaCWm2KrUvb9MowZKTNtCtLRVj%2Fjr9Em7EBr4aprbe9Zx0byClKxbM23uD7eYjtqCW4GwqwqJhMBeU2Azq3pziqDRowXC06CdkTOqdihp8kn%2Byck%2FcbHQapeeO2xbRUyuTN1%2BuHFQB7QHtfBBWmQ1c3lbYTPJ8b74OTaJGPVNtayaHGDfmfdXfpxW2o4qtqSugLdufr8bOq3OsHd%2FGwU9fusa%2FGKLcdXxSGeNdQCFcVUl1rNNe2nYXus6dUrM2n9BdH3nX6XxjZyDJWcUdeweljaO3CdmkeWLk%2BoWjPcz87Ib7QUru0c6%2BBcjaPRm%2B5dYTf7Qdv4aB5Eh%2FOt3j5gDcfxyyJVtaM4wzM9nhL9V7f%2BW%2F8BSb0LNFy1Vem489c%2BZQZ8jUTCRhYHlypJpJrVqPD1HkUk67YPdo9o8x0T11Y0CnvM45ZmRITQvYk3Cr5tExnDX01PyETzk1oaQFlLRsS2kbuNSCAvwAjW1A5hDzkoPJT2lElkLtJ9hFKulgeFpQ%2FWWuNmjdvhASa00KHPVIRfHgoZTI28dIa5EnXgvbzLLhbw8g6l88bRhVFv3PA1b1CBy%2BSuAohv2Ax%2B37ISmUxDmd5yJdXM1QrNtR4SCZA3%2BlttTG5umGZuvdXFJzQTKH%2FBTNKa3Ym1HD%2Bom%2BPAfXdSIIybZby12yFJ8AzVc0Ndqafd4teqBdPvRrcr5vxAC4nrwnOvGF3WiejmTb5vR6lkTZYnUw8eTu1nI1BnYT7G2fA1SslWpxAR9MmpmNYpuVIQ07SkJIZw4Pc6RVGRPghynmL8jbmk0%2B3YZBhBjsCmJJSB3DXqoyEgEhYSMbUtCrq3wyBcLvdkbqBjv0swT6cnWriqMilsHugkA20WJ6%2B3Y%2FtnfgeoNhpAGOMAqT0aizU1sjinzCqycoSm9xikwf%2BVdHtNzHZDp%2Ff0xqqBpG493MPh8bZvNqlubP4lbwNM7SpYFcu3awRNV2LM61TwlblAKn%2FI969wQrljfNAwzyLpyJuajXe4LkhKuih5MLhRBcs1Y9%2BMJUZMsLQymyjGqid0Q9hDyrHbyPDxi%2B4UiUi3bXAJfK5rLqcJVx%2BLJLlPhB7WhB4zxyCLJSYez2vPqmp39NGVfWYv1SV%2BrnySWZ8S1fxlQr75TBFj5uzU3hP1lQn6iIQIUSsTtQtJkxRZ0t3FFCXFGl21bP8dqPPYWxpNieDsadQt6%2Fahp%2BFVTo5fEN5IHTxo%2Fjday6uYH6EQ1wLnipLkGGZQTqpyNAqAHMUAugnQa1df3ah5mSA%2BwhoevVDup2v5TkAW701hlg%2BGKWXf8cladu%2BIzYeTyXGByZ7NqT0rEisyXqKEiVaKSAXuO6BPLHlWgY4800S1amz%2BjIdpZ%2FW7Y9muBi6dF0K%2F83cyY%2F41A0QoLYmiaqaSs7rm5fuR%2BI5gUZYr%2FcU7q5gtPxET9BjcXkt0IWJD7qGTGVhyZc8VKptgUpGL4RE28ifmGq5hCUniQfABVklzq1RyDf75GynP3AqhW9IZKGTruPJ9hSI6T9tn6KmfRG2Uo6Em2VoHKaTx0zzS62Cy5yqUvIe6f6y6rHv6WkESUQIdvvtU5WoTRozprQyhihuYJ4S7S%2BnsFAbQ%2F2OKkp9KR%2FeN0CxDXi5%2Fj334RnEGwWfp4XsYTGmEfwKPdIuT0GnmUNR1FSCwObKD7UXc%2BVO%2FmT20GVSrMIBD15tXJCY3MqGfotSZWQnTawNknIfI0tOmZEg%2F3myT7MR%2FeYgBCwZ2udYOSI3QcD6ruxLRXkrCeqaY6%2FMxIK9uphbg63uSAZjjTHf%2FLbnpYwv2Zf6wNDGIVjSimLMbHeNGw4xlarujlcp2eYLHKg8JtCA1BOVDaNojzoKiLoLMbMJQvxyEyhZXnLoK7%2B6xdM3Y%2FhvzcBl4s7g%2B3qnNRKhGVgO%2FSWp4OG9YmEf9rypjM1mkY77Ash78cmkaE3hpfB2f6Ukrtfwbbut6P7KhIiAp2bv0pRtTvAM7APwzxciqbjfcrz3enNN2sdCJdn3trj2tr0M82AjG1yFXOwlJaxeqRLVej8dubeddvshNk723oo8VSWdcCc%2BxQaWn6J6Cca8sf0KE%2Bzz5TBU1FYjqrtgA5JyK0FohZkvTrKifraNL7JRGSJNPA2EKD%2F2rnrzCTlZfzufcH4mKhz%2FMhNq5UZhDhuQ6mrVdzSI1wQV0ST%2FRHhcKU6TsNe1TdtSbw29qPg8NzGOTtTQoitSUa1DEb1meZlWl5xICl%2BJEIktL1No0QhsaOXZbaFi1z3D2WfyJnwUfXQ%2Fahb3tAPvaB%2BD9%2BI1tQ8jao0r64wsKd5gGL9fz7Tg6ywiH9M6aioEViiP5TFSG4a%2B7j3wjvj5%2FbCMw1qeBq0kUL5aJ2YTybl%2FssAPqJX9xiJKmStR05%2FfKKqHQA%2Bnc%2Bv1ilz7QoK174rGb0gjs3VCMHFQFBBMaLDCbi%2BqnJkPKLDlKwk9k8ijnbPuJnHPzXiHiN32uJ2iazAHeAbT0evSJw0OjIZTenm31WxXOHsOy7utwXD3OFVmRIGs2p%2FmjV%2Fl%2BFLjA1qRYdX7naqd%2Be6lmD57cBAQjatdT4oMnzNIE%2Feix%2F0NZCEIx7hu8Qg04jwGkPlVKOSGV4%2BgMmdWtOWg5s0WPsyG61wPmY4oUBDb6zet68hba7KJnjaYkmxQwZSYkyvMCgx4QknvPn3b4y1BEiH1Ba%2BxZOfDSQh%2FvNV6KJ192KoposkErMBvGZB6jcLpq67WXa9mcVprwJ4njbNAUaQumqD%2Fqu2tQL4oWH%2FqFcK7QF6v56Yl1DyjsVvbC9b57brtN0edpo9uT8CLYyyOUZtAbF9p%2BfmJPqN0CgfvN%2FwMPp5dejW8D1ENS5CeZPTvUQZnXaYJO4UQFQoeCx8MSepOm9Tg1oNEi9qyyau5e823kt3fAn%2F1pucB518DJJmF2xOmWQT65MMWJCs8YV5PFP4CEkJjTK7y7xIucsrUUHIPZOZAN14iMTkHxp31ITDGzg0sB6Ty8Exl8BpI07bWyjrdqr5MWPhnkTUFhn7ONGmfN6HLPB4QjygDP%2BKfK50pQoKpnIa%2BBFl1xgX3mQL3MbiaPeU6Pn5rH9UP349bNx31MfjWaNfSO3JRWHaY11xlvQgE7OFEvTAAiHDgh2%2FT69gQ24aslh%2BKwwTLI40FrkqEak4JzLTxwViBfx7XoFcVsEM4uQeBlde0rOizd%2FB9Apzy9aZZmUz2jtoJ9oTQDppVjFkUc64IdcOHIIxlGycBVeHg0cRHTjHKBq2R%2FasNDf%2Blw5%2Bze2DgtRInSpU0Cx1%2B0sSbzeUA6WiuuRRsGl%2BCwlX2Vw9cES3NH19Z6NvIjJwXpA%2BUM4dR0OW%2BxUGFBEnlzwqQEfJdpej0Hv5IJILslaKQuyiXgynvags9VHT6vY7sfJfANc%2FE5sEmu0k5kXvqYOexzn2tGVTwm%2BTFC0WH4eV4FT7trl7dlmGWmF74xfeOSf95mESJ%2BLmNQ3%2FvGRyihNnxs%2BwZpsWX9ndGAB0DjE%2B8aZByQ5Op9shPosH07s32pA3pbUF%2BhpR98itiDQFUfJMtSEgMc8zSXU0BbaAJufDMcAWVPddGO%2Bp%2BxDqF9%2BlX4fAsajMFSZeQgh%2BGz%2BxvaP3sRBsZI43uaK9%2FOQP8eeuAskdI%2FNbTQQzmuoArs0KElM6D108aBAyibLlDFxadP9%2FCqaeMn5lBmO7mRdP1b4atQTRyYpUnZa%2BhvpsIMMZ0hPzKBBS343UzVJMsCsIJNU3LjbwNlq36aPqBPR8qubZpm6dls6iys1KZiBu%2Bh8U0O%2FJGdVvR0N0sv4nRLD%2FHDlufsb06fKsxo8uA4O6fK7W%2BCn5Pplt9k%2BYX%2BbKxvMU60S1B0nQG6qi58gyD5QVQgsVQb6lXwqDhl9NUiOJFyu6djebFKG19%2BIpWJIxg3MLJ0DGzsiVY2EJaRUq%2Bm4aRc3DPECR69%2FcUB03qEUy32dWfom4bDr4YdnulKyA1Vz6crLyunXcCmlDKQMItIx5RJEnGfe2Kzh6ZW1tHyI5F%2FtmBvdk9xaaPc%2F7S04Df%2FEfZ%2FBFenj%2BwDFNhfXC2CjFQqNTeTfCTph%2BB9lDlK4VVePj23YUoH8wb43fbl9XCr60fbP54Mn6PH76U44Ejy6U2jf%2BC8GHuswg%2BhRFSTPeX8UVXiP5mclf5gsQ7SB1jlqjapEjKs4KRSP7uJ9xM6KugKn8QMQoXxdS76RolKZ5DGIwAbM7E8r0rxHMp86IkZT3N0UcE7Y0VrVDO2IzqrM0f8wIUZXKnLcv4khJ4Ny%2BnRaw%2B53xXTMHHvSgsCN0R8TvDWoHCOmjiA0TrxCyccyvjBTeyTpOxAz7wV93tW0gxXiDhkk9llYWmymDQFvVliED8blfJS7L%2FTSNhf906XLtIQwBF%2BgHJJw1SxoivwzciNoWmWiYBSqNchudAJyyJyeED8EYBMbCLVzjr83OQlb0xDZOw0hOz359TKwh0wpzojO53F4ojqdBYawfwziKTTgxbeeQk5e7GKYeYx3eHV%2BZ7yKXFo3GrDSVGXUxxv8wtZ%2BPGV3SAxLB%2F1BECJ6NAHgMx%2FsBf0fQ%2F9%2F%2F%2F8%2BvFl5b%2F%2FoDx78h%2FAw%3D%3D%22%7D";case"deployment-demo-stand-topology":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dXrHDqxKk%2BbT3OVt4c0S771nh%2FfeFTx9wzl%2Fj1qaGakKyCSTDMJ%2BEck%2FMPMPzP%2BG%2Fh8IOIt1a6bxH5j9B4LA%2FwLe49tbjNmUN2P1t9tz%2BX%2BJ7wbM%2FwNz%2FwDUPzAz%2FMqmL96h9bTtf4epTVcwyN8HDO%2F0sinyv3cgAML%2BBeB%2FIcIFyH9gCsXfAwD%2BF4yg8d%2FxSVWM%2F4%2FH%2FH%2Bo25P%2FUPa3vd9z8bedF2eTFX9I%2FUMnBHw%2FmMmbpFqT4W2MyfCfsWwx99M9vOtuf8bx75Ethuk9OXsy5v%2Br838Gvo1%2F%2F%2B9R7jRP%2FVTdf4lp%2FvPO%2FfsaGfJv%2Fn8mv5fD9O%2F2Tfp3%2F19TYA73wbQnJ4Q7EXAUh6Z9%2B%2Bnovs0Qin%2B6tvfAA7kDYEECWUVXAlyYmZLvEDk7HGcJbgFqp7keSllzgjSHVmzZnT53rxo7yhNLa%2FTgXW06AjZ7J70M54MHmZB0zG1IfFulwsmoczmGETuiDF4DTOSg1d17DhHOkwgNOTipqiETFBscHGBQkwhBXw9NYqLD%2BcTCEBxVF3axfxkXFObHAhdyRPIKfBntSoagQBQy1R%2Fv4lBRqJKCZjvv4JGJOD%2BU5sa3%2FzBEQHhJeZL3YGwmcLuyU7%2FXag9G76kmBYfEw%2B2HKVndZujbpR%2FN4L5nBk3QqeDFGedGyJbXDVwN6XyfSbzS4DWxtdAfv6P7dc%2BvDtPbwo%2BJ9d6Jk74jxq1UUZeO5WbAwztfyV2uBiyUyavq1cM8gdQF7d9Fwpsfh7s0Qc3tzmAAPGukq%2B%2FTKJ%2Ftm1fatO5NQROivwAI1qEMvgX6uNy3V7Xo9ycdUEolqoxpW1fa%2BbwKw%2F0zwLFPq59oHm5h%2B4jxO%2BplUt6ZYVGZ76TLH3faJ%2B0%2B3qO%2BAwIlxo5uyVEYjIMxqw6J62chCAf8l4CxnRExTALQE%2BUo3uFsOnXH%2FHEgkNb3ePvl%2B8RlOEMAAPiega147AchrV4F5xGz1PfqlljtMS9xR7tMI%2BnN2JYAQZPmHWDe9ZGE70X1ugz%2BFQi9Oggc3ca9mgo4xsvLWV5Ac0DGFvIVDm17O3LDQ4Lv5%2FPHiPj7W78szaZ5rYrGPpZJ%2FZJP77%2Fnz5cDh%2BG0rzXxYuLKq5n3uiE%2Ba336rxbQIDT%2F5KKOsWfJOzHIZWEhwmRaQAL7JK11v5c4Og%2FCOG717uO3kGfCq1g8%2BeSonW3V4ybpMi5azwEsWdasY97VQvKJnZI2fZGoZSufqPRs7EJZ2WbHXlPDRUzarHu4BajF0UeIYmwmuBOhduxkEX96ekDPFm9eyw9DID5JgaJmTezIlY%2BRNi%2BPUv0QANKGjwUzrx26oLJ%2BfZd6r04IssBYMbnmvBe86TVxd33CYvgntbhJBCGJlhHm1kCQT0qW1%2FttvzYEPglkQg%2FLkgDssggLcbgKNsm%2FSobD6293rBX6UWdSjq55QnRfmfZkDp8MP7lMqpLQKJbq1ycEhuOd986kkwlgGHqLXony8dHQzk9ItgEpTiNOGC3qP%2BFJ5oSevMegkcynappZY78NVO58Wp5XuZ5Px%2B6WAsLOpY4i5hMEZVagB1asPsaS%2BmGMuIuR2NR4otH3%2B9pPI1Byrzui2T4nwte58mPNvNLjOVEndU%2BPMabLKq3b4depx4xQtPiM58wO%2FECzolRo%2BxTb5mxf10pEREiERap5NjzZ3e4wzx%2BxVAWW7hYBtzB%2F2UBYw9OYj3o97iZy%2Br0Li8EDFlDe0QbeNhpqfLQI1Mgrp9QhH9lOvXLHjXz9d7jeuUb0Dbq%2B7KRPhlyQfNZ23UiMU587F5H9zwqcnKxO8UpKoZOC7RI1LXQQflOh9mF0i0j%2FGCIPXyCcwao0PgHk%2FU6NiMsDeBLZz36F%2BtLBg9cDjjXuFPpBpBPUG41z1e3LipcPdLk5z%2BdOkYsnmTqG6QGmxrxzMVOOjUs7c1NFRtDWZikOzspwFYz%2FmYH0KXgEAx0L%2FQC%2BuOXDpNLPWO7gmI3g1VmK8ZdTEPAtq5fadBVFYZi9zknKWOCeubhRpmKS%2BAkfQzpaCbicXqFDdWQSduvZa9RuWnJ6l7gfc%2BMNFpkYITEaPR0dClwM5uC5nZy78XpHOjgxcYF3I48yiuJ8G7XYynAkZMZ%2FO43hfAAe7wJgLD03K6ZFRk59vwZQXa0Wt2gp6hMqiIArJDY6%2FrIrN6VwLcfRH5F9QT8PxWOGNF4131Jd7sXCkRS%2FJZBbVGc2YZlJxV6tEepnk7dDBFcWqjQiwMLNKohIa0fqX4Q59dgltWVCm2VZp0scxcMsqphzoMTcES%2BzFb8cGRDPwli89scvkF%2Bseqj2yvyRVO%2FWUoTKHG2rnj2ohHyCZzJBSGOUjA%2FgYLUCa%2FtSSEp5quf2pF75chinpcuuQYaGSNOvPnQwIDWjdrnsJAG1CTvgdZJ0QmoQo8H79rk%2FFLw8O5bSTtk8PwWyjffJyuvHKXBKg8FEaIkrNm%2FomHG1DSlJqJyJtkpkbQIsCeLxV3MghR4qJF5vkbJ04yoAoZegGsCjqApEa7C8j3Z%2FmLHp2WOe3ICGy9vN5yNWvQQzRnbpYVJW3e1Soz6LppobfFmQoKT6nRhvmkrTMvqF4VaxhFjLBB95RVs8n3HKMUKKi4zguCSR04N8v9zrVlPgBH6RrxhyCG8l9AEDV%2F8CWha80AFNSlD7raFoTWo1G7V0dihbpeowl5qDYYK%2Bq%2BznSbr79Cgt9W%2Bdt6vOzhB6Bd0eoVoQKaarCrl75XKq%2F3zB0bd28%2BPhFgmCO%2B5Nwdj5Wtru4Hk9nDqcqxJYfCVTn%2FZKc6%2B5Yrb75Kwgp2oJglse%2FpygO7Lh8kBzPx6%2Ftdv1lJ3HVAgyubTcOaSPMGpGdVhdX9Bagrd%2BqpunZenWCs94cRipas97uax2huPwUf6ifOfzoLox%2B%2FQ%2Fo%2FETL%2FslUrqWXBlFwqznZgh2N5kP1O9C03WwU5xv1fgAcRxkYxwClnU1XRJzXZhTCB5lOQZY%2FSCbMK%2FTMJQt%2FQO3wMueYIACqaQLbFaq6Lix%2BTab6tMNz1%2BThxrRhmQGvnCLNmwoSzSZdpp2kotS0FKdY8f5Iy5FJfD42ZD36ixo%2FZwtXAeF9I4bhpp4tiDOVq0WWKzMFJxw0zZmoO%2BfIPuYKpGkNsH02sqSZlpljtwt87SrOtQfEgb3nmBIHqU%2F6ZfJPkEk6Cp%2B6RbWxfmowU4j3SpQ4IdaO8WRBVsCUrq4mWWlHiMo%2Bzny7D6FKg8jAsD7xjSNw6oOa84zbzBCRQgCGB6z%2BQPDIy%2F9BrmmqyV8m%2FTvuWSc9KZzpa2ZvtCybLGt6FKoqCBWkd8RSmpXJZYzdXF2G19HxJRTgNaAZgGfpFQIcUnyeJKQbvYDdVMqJsoNzvZxF1qonH6PJ1uwc%2BfTwGEhqqcs7uQzcBFtWTBWrqJbTaiie1dMDF%2FoHiQJiOkNyXTs%2BSY0iVWWzLOXXenrjZc5KlKN5j%2FCRTJRE%2BVgipDQPwZUv5KV10gLCQ6ts2FyowYhP%2FpHMJV4wG1Zkgm%2FhKcuYDgnPCqQ2AkSt%2FqpZoTuYdikeG7MSQekcunNfuia27sLXlPtnYPSU4HQ2y5WRWg0GX0f8D5s3K9Gy8RpieslgB8ErSy%2FIG%2Fg2Akc1F%2FMko%2FZ78Npz8V%2B%2BL%2F8QEq33fW%2BtY7RduELHekbDd%2FwXK9fxgN6ZJzNBN7gQSpDMlt%2Bkw06Ssxv%2BnAayOpGOcGeGugQAQb3sfC6gFVNiOFl%2B9Phnwp%2Ffy0NUQ81Wix9TNLRPhQZn7yoG7P38B%2BaHCm6%2Fbp9dL0j1fjJBnl1q2zT5nAohm9qAuu%2Fot30hFwpJzLG1rjwfPVe3vDf%2B34ryfiGpL8Bgh%2BMJOGiTUv0zdAa%2BHDXF7qGcJnW5Zz3I3%2FnaeoW8nwrQpjfH1yENrQbFd%2Bgahd6VbXGNxmYB%2B99qFksHazIF6nAAs7kYbd%2F8g6nddaBN62CV%2FhmtYB507bu7CCTyNEvTaLP7iw%2BBPjGa98wjYXliRTFLztDf64Af6Igt4BdwCl1f8M17GtmG6lN7bVJmh8oA2K1237OuXyNMuw3qHCE1OrtrFiMSCp1C3QO5r2XxmzxBFkkI5T8B%2FvThcId9g7hz97wB3yIIbAGZ1EcyZ6SGPRJA9AFgfh1Rzpth5M9g7808bIx1PBgoEd8eMtf1vG5tPQ2%2B89WnNS%2FpLAMGa4FrcCTi%2BdLmdWrgGCRxTYezjNd%2BiXG8XrDThbGDkeDkZY71pYEIdia1WH1cg45pvXtSi8al8nvCr9T6aQY%2BKKUvgR019oBnLmAaa7K700QV9Ez5uyaHbbg8wYlo6K5sqCcE4zZTpqpVZw8ZYg%2FLEAHK634S2AMzOl%2FHPM63%2FKJsGkQNkT20t8jU07dBZ1QPe%2BMp4rl3CCPuhsB9GgKy8E9Af%2F8bfonK5ZKwndTqALKaqplkh%2BiccfcSlRZTK7nXoyTpJlunlSNw7uYs20DPTjOMhK7uiGospzpG6TVTTuKHJAyaAF%2FmHgKU%2Fhs9gmZ4m%2Bl7oPN8Dxptg4paHSB47UgZcpNapzWL20wbHFtuZmNtJ9QXWI1rM3v9vTGld2pon8ZITozUpRbFJOaCJ5o%2BltRKIBHFcmfMLzKUqIV8kkCl3GGlGnxYPgSXaHU8vpsEd5fnc5aEPEW64BZaSx%2BXwpyfmyatQH7o8o4SfMLRw5LvrvVotwBscDqoDdSzNOLk5Sx9fSXWapX8tvKodPCZLCyBe8SrCHUv9xs2yX3wAtVS6NGUEx3Z%2BzTmEZ6wmM8LyRmry%2FRjQkJ0y8CPfEuk3Xbndu4Bv6Qek7WfG8VqC6spgS%2FusRpu%2F41IvxiYb7pU8Qe%2BbH8fCFvflhQnhKLIhihowdwdoXst%2By8086Otsda69WZFUPb8AOWsd8LUOnMqkN7jmPeXJbLFKCqWbXHebPRF4t8HfygiNAFtrWuH%2FxonMFkrLdlB7eh9sabg5bLrIyo7lzYCDPKinPvq7n%2Bn%2BiE9SdrOrE6aqJdd1%2BEMzve1jMh3RM51XN4clXL%2F5GbVKG0EXWNWnGrtpYoZKkgYIrygTq3kG1AXGKsRW9fgvhzc5JfOCzQdqywpYo1idJxJPB5ARetXG79Jz4s67D76quKVdEM1bIjLija1Rvw1ei2l4u0nShaKj95KaPp8IG%2BlDTZ6WhSqu02Ri2UxRe1xozF63jOi%2BvSQtRQoUkP7M%2B7RHSqjuDKmTkETsKsgb25%2BVh5T2FewG3nYnZcuEQKPnwi99g6UmBxNm8XZyxPI%2BqFW0hL13CZT0fVVwvuHcb3tqN8EMNydo%2F2qD5Z9aalOCbkx4ped1BXObcfmlE5GosejSzinf2gkWQc1lhw7AxmDocmUlEhOZ7VE8wNiAYVneRDbjCGI2Q04cZsB%2Fp%2B7h8kOepMTggwwpnh8uaxjQkELW%2FJ6V%2FopJQdxQzZq0U8ZG6TOLM6I8RadfRfGNRgswBzqyftBWj8quQPyDe5zJraCJnbkEo5nSh2Djib4GcewHDcXoKsPnVxtUQUE26Go%2F%2FVWoi0ZT6cvqERnnoxmNeSS5jnwngtDuNAbQkJORKOhLK8sAQhbrCB41XsD4O%2BDLCtfGgl4JmWcnsO%2BUzHQNvD1UPMvXACG68%2BVHSNYqKoBHpRUrpdW52ZmKJQpnpUGyaREQ4t2ToIRUyFkQhjgbtMUOs0HLwVQc5VP4TgVFbRUFQ4HgeVf%2BK5fEq8BM9%2FqDVma%2FL4lJ3Jzdg%2Fyt7yKHRLlQrsJxAwbpapPM%2BtYEpZ6pVm3amtySh1GgKEMEUUj6JJInZj8C240Mu0jZbuMm1OhWK5eVQk6K4x2pp4%2FdLQrjbYczFFjayI8Km0VdtmrAZcEkG1KMnylZr6INSC%2BOAgKAndRUo9%2F1PpOcQZ3Fr8UrSC0sGLZSJj5IFBChG4Ufkl6y0ppbBTiZ9cQNhZoWs%2FfPUVF3d9BB35Aa1O7RDcmi80Wie2ebMdZ5mCBfiBNvMhlPWYkiGxQV5B%2FdFX3Fj0dGUtoopDIkXKKfwW7Hv%2F6gVEGiKk9lP2HbyPXmt1LMXT%2Bxc%2FH6OXIEix5qwbf1tmoNHdgufIwz93vLgRTvopxKD6elxw8%2BdX%2B5%2Fcj4mOnCxJk0nqyk%2Bge1dWgO7qHSRTLyfboEntm1YLHXfC%2BQ%2FCvdl34NFV5mGXoeRxwhRnYTKNWbzpDbL0mN6nsa3q%2FOQesoxjsw0woJxn4E5FPGgPsM1mcRUc0wzbNDMg0QUHMfB52%2Fsot0cDA6gdbs23%2FdQMOtrOKtpYXkxBf0xSY%2F2Kh%2F7eKyR8A9avT8p6OLgtKxPVsOoL9JjN45ieE4Y50yl2AaYCEP%2BAVB5tkfMZG7LRi89aenVVgXJRH0Dp%2FPTEQtzSuxAfF%2BGAeKcSbC%2FvHEvhuEddqwpzLGhmZetnfGScRE%2BHLRWsVzlIjqJRBuxbbjiIyhxFlBJLCZjlcDT4brILaFa31N2RsVUGVBgnUyT7Coj2MQ47qCUKwaPSi%2BylZz5zSQhPG6j6za5ejQpwkzLtkJhUgpvJGB2isKgnLhQEdMKYbACy3obiX4HdeFOEUpdjIVBfx1nICLYYx0KUD1hQn4toPt6BMCx46uLBdog4h2n4RFZmFt6yMinxVLmRp%2BdkHnwQvMjaGdvQgShJd%2F0VFxnGaQeGnNCbkAXbFBeB49g5awreCvO%2FOcCBFAt4kf4XkO0PxkP6xgj2Wt6TxleUyYCRznANQRrIwDTun4J0ZEZtu51e5phoYZtVjSu25dUiea6ogcPPt0Mgig%2F5Fab3kHGkm%2F2pel5Z5%2FfSvULQE7ZcUz6bmxiRemi%2FvT%2BTJJ6tbcz7ud04%2FykK5cYr0aMC74iYhs%2FbGiF9fzU1i3OUtQKKAJqq%2BgH9o9TJrWR%2BSn%2Fm7l60H2DoExPSlTDvVlDB0TBQYvHtwZ%2FJOH6nhDTntETu%2FWFb%2FP6JMVqwH%2FCf9kreq0s24BysAkK2rkesLF71KK9ZHwhlDRHHE3yVWInWdynwp54g5%2FSrz2yZcgtmjQrylsXtIvZBXkUjc%2Bu4AQA%2FjDoWScs3KaA8x1i%2BXZc3Ac%2BZDzchzLGW4gAWpp7hPZwYt0Btm6TcMuQ8FWFXUDzAM9f5did0SvyqqOYtMQXAGi1%2BiZxAiQysteQ2zLp2rzItHo6wNifSGuHPV%2BIh1YSg3h3mKeA%2BWOTUe%2Ba4k2cG8hy7B9I5YZSTdjUBP1%2FMRX16U8KjIlZLigpajV%2BgtI4zcGGGv1dEb0X1uINjYuBV2UZuih5fGfNMUHQx8nm0vw2ZzN350CK8tYbQBCgPaBbw%2FHCOrsR76YSTLt0hlEl9ya%2FAjWiTrtx4AO2iM1%2Fsv1YPINlMWg088y6Em0scTCQ2c2%2FGKdi%2B8bsLPITdRfXRAnzdV2ZkFlQYug76alytMLn%2BoDeYCs2D1kgsUXJZOWTXlJzdyAx%2B94Dc%2B%2FqeQfIZRPRXhad7%2FfjSTrnGE07wNIqdAV8kg8OmkiqZnXfSeQp6ll0ZoVWlqAy1lESCgfl4DvzIhk5KprMBQyld0QpP4VBY0VRm64xqd7lv8B6VDn8SsPIG8Ix7TBmZEumyMVPwwUS%2Blal08EdH7BF2q7XOlhyo0y1Wp%2BGEOZ0WjBftBWTpngtjJsQz77W3hDjmK6VryPVw5tskhcDOPNyr0j18tcUmSzzS5%2BlnadVlhEYDj6G4WGkrR%2BFed0dYLazZEKAGnSzajqHKQfAzJJRtSIsBKzmVxM%2FpD6Z2zcNrmtSrTIS8ygoDWe0Ngg%2B7BRsSXvpXNNith5287cL5ldN%2B6s%2B1ELDWUOT%2BDTIavkrKry8%2Ba8Q7nAoVjudAYVEqNmoejpz7EdKc36vBdVzo4WhAYncKyjJgtPQrcEPqeKzhihjPf7Mvk2Q7HWEkMaKYXhqS3mdB7abHsnuBKBKPnmCuqmBrbnyRwEkdkF6nQdDa91cX9UN8R3uSxcmCgRvCUDDwgzRJQWE0EmCvhVLZeiwP8PktLpKnfQ1VT29da%2B68G4n4z5t27KeejPgbB7RagsJJZ17lDcT1E6PS%2Bw78lfO2cHcueg5vz22%2BUYQEfruvdcZS9z7nySsWnJTMh65YAvw4DGifDprfPg38xjW8YWCedsdikKLwc8lfCWFAa0Ig%2BVHWn%2BEO5wP57BSbIapaCctTY9Vcumu%2BF5OtvKiA4pgzsQb3flmR%2FQAWf8OvyEJBRKiYaTuCP2LaWc%2FSh465jIYVH8mBTRVJ3AUWbGBK9s6D%2Fee4k5Wq%2BBVtLkpEnCBm8EfpDKYABXx8OOMcPj6gNcK2ha1CsDcwth5KOz0FV1LCCKmueHnrolcRfJouRdyvDcLMZbEF4EJzxmC5vkWifSjaASQwijtjJN5LIl5SpJTl4OlPpXP46%2Fp9a11qhlnU3fqzETrRXsnkTZWdrDsjThm5SKsvduKX1O6ff%2Fc9DZuIeZgl%2BRTjfr%2F9B2UcZsCp9FFsVQiLWpnCr1toFNKlJsVsJ1ubtwuDcPTRfnU8ug4VSfi2gyMrar86hCFhOHgQtH3JiW%2FVQH%2BLdIgB4xm6Ol1YJLF%2FW6AtEPKBkNyZDV6bp%2FUym6ybDgfIV6v97cMndXMaFOOLX91XoghSjqUkGMd71I6Cl8VfULzN4lT2gfpl7Clcb7wRrE1eIEP%2FFFRJr1lQHh7B5Sh7%2FbafxEUuHj5CsVHXIsmwoYkdsv7m8Cg38OC2CkktyiB2te%2B5nnPufgypjDthnBy%2BUWAA%2BipIU9skls9J2cR3KQ0sSFvyFMSmrM0TbqPwVABU2A0wp2fOVkE8PQxsMWLUs9%2BRzeunEl5XTBnlSMk659h1vXOeF%2Bg9N%2FlR7y8yjzY5VsW6PnD%2F9AArNhEbVT124LC12HfMfIOztntHKDAcuNIY6CbedJZ6ZQYJsJgj4EdFHjDsMcr75nYKoOGPKYHjhm8HlA3CU9sbZx2d0OCNkPYiXSFvsrZD55tnTsAoJA7CuCAhvljagLzmuWEvOggAOQh8CG12FR8UqPfg0Y79aXBQTZjnEOmmZZ0Wd31jY%2F%2F4jKuHZqcbTqpScHa%2FjprNKZYc13QeVdG7TAtbZMfL9GhmFVKcM2eI5Z8ykl91iqcpjZR6RzdYRY18DDE6FdNABMZEpvAOSNYDaxfVHZNbcKpnMKx8vZvVBw9aJ4fuhKUiWH8K%2FU2B2z04iu%2FDEjx93K5RTZPIMHzIMAJH4SXUi0K6JcEOJJSOlyjEfX1qQgXBdMUh9BkFuyRbyeuMnmjQLm4lBvCakRSEBKHbvL55rRYcccQYFvE6zh0KVt886DEozVVB52flYO0o1A31cXRzW1k1ljkdTR8igeB%2B%2Fd2GSbB3VHwym6U%2BCgHQklpoX6mvz%2B46UWSTfkVR0N9sHj7pz2Y7LMn0PMcQ%2BIO%2BH953M9O8lLjnTfkzGur6PvD5fp%2Bu%2Fs%2BXRf%2FzXdTnJ%2F9%2BGvWn578B%22%7D";case"deployment-demo-stand-current-implementation":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dXrXsqzKkuTXnMfThhaPaK0KzRtaa83XN%2Bzdd2zMesZsUQuSrMwkMsLdI4p%2FYOYfmL%2F67h8IOPJlrcfhH5j9B4LA%2FwLez7c1H9Ixq4fyb7Pr8P8S3w2Y%2Fwfm%2FgGof2Cmv4q6y9%2Bu1bhuf7updZszyN8B%2BvfrRZ1nf%2B9AAIT9C8D%2FQoQDkP%2FAFIq%2FHwD4XzBCRH%2F7x2U%2B%2FD%2BG%2Bf%2Bsbov%2FZ2V%2Fr7d7yv9eZ%2FlRp%2Fmfpf5ZJwR8fzCT1XG5xP17McT9%2F%2FRl86kb7%2F6dd%2F3Tj38%2F2bwf33%2F2Fg%2FZ%2F9X4n47vxb%2F%2FuxezL8vfm1I%2FdfnXMd6%2BVf9ZXP0%2FNujex0qRf7P%2FM9h72o%2F%2Frt8g%2F6Z%2Fh%2Fi3%2Fl8DwBzugUlGThJ3IOAgwszvKjg04he9zx2HTSBHCPPoR4cCwGicyBEHjOPjju3q5LWnQZfjpEWqGrgkhs3LjWfx0bBgSMJxUqH%2FQLTcaGMfsCkUvk8rHNiIBF12QcJ7ZRqcLNuPnTOxE8j6%2BbURDhoO8%2BYBRI0nfg32tqrqSHhnRvvedbG%2Bj3x%2Fqvs7NkmouSJo8faz9VxbrbNq3Wpsy5CugdujoDD5gAs3uRCX9XE8Qom1XLwb7sytfIeqVLHl7AJDkMJK3mt9eRf7XO9Hb0eKZ3bhsQSINt5uET%2B%2BkTuAnsAyAi93AhNmp%2B4kAu%2FNaocg1%2B%2BPvyL1Owj%2BJMSZ6%2BzA%2BXAPs8rwYPfsZxNLdnPvvGPnF3F0Gt%2F2SrIVMnS8nswkU9rDDOPuyLuf%2FG8zPVFk4fyK%2BjH%2B%2FbZuHRylmwYICQOCCsWFM4m4sjdueEMMCRY%2FF6q7jvYectFqWQHPfuchAwjyuZSwo0G4t2586iVxdB2XMj3BQ81ZsOGY44od5wd7Jw13LchEkAQz3RQjAHJtyN9O9NdxbYIp%2B37so1UlyUYCNK%2BRCTy16EP%2BAo%2FOYNpK9%2Fl8p3z%2F1HENn19tEkiN1wjqd98jK%2FsBUqwdOEqgDljcngBVQmyxj%2BjP2NOCj7%2BHJraWw4Ia73e72I5eI5q9gpO8dgB05kRXMXNZVDzdwvP%2BUPlMbHx8XO4Kdvdf1C5TnUt%2FYok%2Fit2Z8YC01XgeEQwnpDUv76LmcDX0VSKnsd2Cd%2BahxxuD%2FOL2GgG%2BDVwrQqsjsMP80a0NXBnPgcBPjXmcux4yyH3dzyq%2Bx5zAmfWkan7odC72Yo5%2FHjoqN3mq6rX1JqedyQENE9GS3zvHzhU0KSdATmnkMRPW2T2uGsS43sAA5KBGSsazS9UFNOwFhzhynqox0BjxylhmTkaVvIhYPjB%2BKtjpmieIS43p80IXnUX6pJtfvCBt5EtAwJBIZJksQfYSG9Xak8qIGHto0%2Fd3IMVJEpyHsIeSWH3%2B7ds4J9qWIEz4AcM5mSdryZClo0INDjiweeYjhWU8AU%2B4mVlIVw4vhsEsPmru74uSEgYXF0Fgc6CnOeoe%2Bu4JsrqbQt3AHQ02UGjTUZdR0c2fs1Bn9yIkdr6IN0Joq7l4Ylwu2IcdtQJ%2BiFyNYuNRTT%2BbE6ljQwducZrpooc1hsxgrs5my9Loa4TWFbN2qLuGbZ6fxTsW1CNPTuIjmAvGb95taNWmdvd2e0i1ICAToHRkj16OwGNpr%2BoGiuKXjEBAo6akLGqgCFFodHxeK0oPsYWrpzqcQyEPC1WXq6iUyqSSViTtfr9%2BCbmawMqu%2Fs5bAQz2BOmzbX3UBOBg4UOU8Au6b8n%2B3uYGvQJFLYgoJ%2Fd7Xqrs1Y54i%2BwsVMpopIGRHUrtPFy%2BmQOvyBBlIyrOwKBJexHz9bNIP%2Fk3inm0NOHX4HzOND4HFR10MrQ7GuAlf1%2B9hD5N688dvj4IHFCBjherHWjJVPDpJNzF1vVAvKN17qc5vrTzYUJtmuUxnCs2RqsMZEB5SgXIZn%2FAR3vdmrJh91ixLjVvw%2FrajOyBPE64cIV0SaKCKf2RFLI6WAcgEQSA7NI6Z8qRvYbS%2BKycM%2F%2BB2FmwErK8ePGeJ10V%2F1RvHVPbtY0Vmse4FqXTGh9izx9mXsSM2zjWJyLSfHeVV96DIzsvLifrAWBZ0cCXDWmfJmLwqhpi4pFxNuA7KqtcvXP%2FBSrV5Jrqs4FMhO7POxLvRvSu4Zy5vGyDJ8KJ6MNthwmD7Ho9tRC2V5EJ4cJkycBofH57r2hI0GTg8mND6xE%2FQsiYsIL1IRgOlq4bElJVkZZ%2Bt1wtLCVASHq62W%2Bk3IhNK75ueLO7T8%2F3y0s13WP%2Fi4fQudKoRWeu3fYRKueGmRPsiCq5eRNBZdRC9Gsh23pBOuLHjz4mnmM24wQ0pdl%2BC%2Fc28ezFAzse0q4JYFxNNVpibqSqOEk%2F3guayZaSDOnUhwbJde5R0Xw1%2F50cnjSm7j6w4B5XmuN1UyPzbNxvYy%2BGS13shx1%2BfnJNd9ICuygwLSGd8hx77fM%2FoGBJyeftpvZITCTrA8LNHeZ3yPz8wmRc8N0NQGHQebDKYE69S%2B9ON2C5fa%2BaxD4%2F%2F5S1BS%2BjKjZ%2Bi7KmdfXGn1IlxdS5DDyVrAJ8K3G9Gqm6lYYY8cz0Sdm5WIaB4lc9XmKX37NIO5Gl93viaDLyOPfzS0hu%2BsGAcHetHDMUpddxZnGfB6hekf%2F2BbHziDnIDo2wKtJhSdGEH%2F%2Bc6R4GjC5iuI%2BYbpLSdWpv9%2Bgj%2FlN7a5AEsU8cvxO%2FDEFI6Mu0VGr%2FmO39HlYp9%2BNGP5%2FmJFAOHQxiyXWKAcZXSGJX5slufPEHMyl%2F9pTfg%2B1V%2BI8JQq1AC0mUPpfyS%2BYjeJUgXw8Y7plJoh1%2B34Nd8gYwP7hJkthA2VyG5e5YanEShj6JO4Me3P3Ue4L2FkdEu2ashCtFyR7PsAXMdsthXgbD54ZhDIUaIn1GBAh9tuOp0y4xeKODF7B4wB5ctZPA%2FflBnA76pHXaa7BACmmtwFXRyrioyabfkmXp0ojEISFvtXcatnrZlYMW1cz70J6DFCJq7J3r672O2PNh1WBseJRSh1dY5AJCQJrk8TYoR7WOiKyqexbJFrGiLdPHXh7MMVcWY6NJ0wcMu1FgI5FeV66EVPqZgdMw6EHQbmma54t55M7zy86x8EpKZ52X2ZEj49SO6BNrvAmQ56vk6N%2BUpX5vBIrg%2BzC85d7r4XxsS79eruh6hg0nvAg%2Bf6UD39hqdxrijhJGHF3eUdDVF2RBxIUZbkinhpFMXVypzOBn2gRtEl62OOu5oVRKIQG2fousM4P8JDIEUfkts2G3oRslH1eKuwkVz3ekEoj2dF8UKivTyYAur9v8K7V5y9rHMhksM34wy%2FGGUbq7jp4F%2FXE%2FrYCL9uq%2BYu6eVE1tbybhAvFtB7PZl6bbQcizq0whOMiws%2FJlRxqEWBIGjRbNq3ZvuIy0ApI6aU2%2FR8Sk5Ozcxa3X32jmxsG2xHab3neAsSg5%2BRAA0q%2FHC81yXId7jKcMIDWw3NXRF0AQv%2Fto4GEMQpM%2FqoomESSFWQNzRALcvn1624igcYjPAyD7mRXgziTEmEIdx7d0zw3uGJfAyby7fWZ1Q9cuBD7mLAhkqFYg%2FsY00svvv5NMPDTQJnwM9sK%2BvY9FjYnego5Ryr6U4T3EXl%2BIOR1%2BG109BFIej%2FANcb2DewrmmYNNEUlgD0auVg44VejOgY5kzXdUaB%2BhKkB%2B8Ifujiq9I7HJ2K5vikuVoMEjCuSnSqQajbarUI8dB5LvqQ1W1WySK9Dlc3P9A%2FQ3q4X4%2B5GNZUUgvyccZ%2FVW2vlc0faSRxbcmZCpQaczTQY5cMW8K4Aq%2Fa5S096u%2FRw8VHlplvdwBXMy2t1JiCTKhy%2Br8YhUVP%2FcVkzbojSvG8Uw1se29osKDJH8j55liIoB%2FkM58UNOvtz7pAeQJL36OaDzm5bjUa%2FlPCKGfJ7yblc7%2FCc2m%2B8vMijxme7zr9xBqanHvBImthO2d0jhU0sJCZPM%2FNDAkmyHxWBY0CU39iDYfOIvl5A5%2FAqc74QqtC0ilTyIwhXjXw%2BeG7mfqHMHcX5FOyslfZb9Vkdu5p0mhp5ixhh0e02r1cvWS5QzwpdxoG%2FoHUnTjL3oamVbVFQZ5XbS2QTSWZlUhpF93ZtmgHtVWDHtCieISIQMzGUiKeDIBRXFusbw00kGcLR3S%2BudIQKg7gEB5U2ZD%2FN%2B3zVQNkqaK2JGhbGysjm3PGgMrafWKRA%2FGHlLV%2BAgfBULDTSe9SM7583K1Ns%2FMHQS3WsHiDZ78076ZiIqHXbYvn93gWeirMpTNrJ3RLjHHf0%2BP23mRAD9h%2BO4yBzXhyIL26L5MKLFX%2F%2FgEBdutbkNAmK3hhkCyk02dWTlBPKZ97DZbvZ9RKZIHLGQjTcbQM016wuvtCnGAm5yqksFFMLALrygiwUdIFpyUqacuMJp%2FVx7wxqWhpvYcL2E8hJLaFkvFdBrR35VEE2nhOhPSF6sYURqIniQybWgkA8HKpLdQYYYBycNObN3rUXMfTUSIDqvFwwL4fI5G83bxuS%2BxtQmzKPmOx%2FcKNLXzRJwFaSIn9j7A7wqpMop2agQLDf1jC6r5Sf5l0MPbY5%2F0NH%2FQmk0GSi4C6aQDWfwn6Ab2BDZxesB9yZEiO4YLKDIhAoio8DhwAV2AiTXaMQptL7PeiRPYfA0uH2aXPSFkoQvAoJzk9yKUZDteTU%2BTbJerVfG40Dx%2BtAlPf2zf3qEUU2MjAWLMq1uoaYtcelFi9XMGzG3VAXnjZKA788KSa3BiSwbeoVkzlxKejZ3RPUKI3HKq2b5Zr8apIpfqJ2xqKu20QyRwEno7F66nZ3XVfTSpkbZacPhe5y7vJmXXJuXWiSAg5HlFDHk9IcF0oRUhSuYZstHeiIkWywnRoZpakcpn6wnBM4oHVemakyeVwcfhLky4N96vuq20EKlMIaCUhgIZi%2BQx96sPZ3C%2FJom6qDSBy7TMcscpK51ZGa7GLsSb1jT%2BHlAt7m8wrbHT%2BbS0hTFtK3%2F0Dn2b54RFnfiUEnBciM43HHhKfdjD%2B2CboF7uFsoZtvAFDWbWYTpS%2FK655xpy9R7Qfv3eUpYyVPeZ3q%2FLI%2FTWl%2F0HO8RT9RU70meucwbDgceOdeG8q88VuIxZuFEZl%2B24yEN4KlYk1cWQyktk3RwHyjZB5ATiGdnpJRWYPlgdSmjsamapEASakulSg3ATbrrZYHrXsJi2E5qcjUiHPmcF0rnPE3ExYqM%2Fn1y4XCZQN4rYOiOj8v2nXWVHR5d8EgSPOnUMWH9Q%2FeNspYUAH8%2BCk3KI9K4G6mCrXAppk%2Fl8VZAsU9pjcpLQustn%2FsEaoOJYBNwaqQwWU1GKLJ96nEqq7rrIV3R8VKv1fM1Bw%2Fjfpx%2BieeWtZJ%2BecqvVZjfx6cXFO87RpIIbHzyP9gxRHTg8LMsZsFAXrjp%2FMmJCpCV3QRVHmmrm1eOdDHzANP4iRa%2F29Olq%2FSSeejhnA1oRsxSDUEQngMuvMrvy56lMbCXVmJRDAkuOZtexx8CpJo11RoyXJoVZ3yOiyrlQFNfkOIZY3YPEDzZgA90hHC0v9QQ5FzR1THnl5x7heRN3y4U6d6MZ8sPUqcjqlGRr2IKHGKYqJ9wpEwCEPF6glcBn%2FBv03fFoKd4c9uPOOTVLhGyfpj9OEgAK66P8PICnnmgWZiP9XEtM%2BE0TeKgVAMa4EjUvCy5ucmU21tYe%2F6uS5M4G7qdKLtUhXGihWhQgXdETMOnfYlocLDThaZcsu4YgcVz2dulpo0%2FXeqbEAbBVzZojrhXpE0A6FAe3NyCzdi5s26wODlPSmyq8PDYAuASIaHXd8BvYPVkYojuylOsr7p%2BV7EtCXT6UxFqpMtVZYlJvsXN%2B5Zn90SZX4%2BG1liNIZP9ZUz%2FcNKriVH%2FiAE4RpjaqNnBfFxbiIy04esEV1n89XSt8iuyRi5Fhz55z7tfUqahaMipRPnFUQ8k%2FBDrDUCHwMnS8dOPP91FTvMLgFiliBCqpiNo4LzQONQNPj8NrhF1PSG2Quog0rQ2AMicXzI8a8X1A6jWWmWbhbaMOXwwiyghkEnmU%2BQy1tdu1SylL%2FRp%2B5Yqa2DVYxVreEKtalifmzfc%2B%2B9FNXpdSqV2oQzsasR%2FLRi2nJp%2BsiIbWmThJu2hZXCs5aIhCdCE2q%2BIZhNoo%2BbnbmOXmKWfnEvJWeSQArM1mIUsQhbFYpOkXYCKENUd%2BKuK0%2FUXjthXEdwxWV3KVEVTTwvokKrs5nclFkXEyVrA9E6XjA8w25yI1QsoGBwimXEhC%2F2JvUVxP2aXNQ9SsbN%2FjHc%2FLhVMo75cfkbti1P6ok8Z3f2QK1qwKu3vWJdV4swwLRixLypj0KwFLW0m5qW6VGdTMEhAYKl1RsW6Wf2Rj2nk0%2F8ou%2B2f7pTs%2FBoX6%2FFbFqRuWHWSl4WX88c7TBoy%2FrTglDaxFu5vS1Tvzvjlp1PgSqlgJRA36ky5Ki%2FKvjSV2%2BM0LwdurIa1P6l8rEDfuV%2BdFIix3xdpJNNS%2FjGhjaewyuJ6U%2BV4L8lI0shE4g0s40n7SEO51xuZJ7eC78YQIKXms%2FDilk3FH7lzePRmfM2Wt0eLqp%2FE7zqEeROYYa8Sa8T7b8OsH5cgPMEvVgUxTmIsk5rAgkKTnHrmnPIqr8OSjd11Z6t2%2Ba4j5frLUcae7A4AQwdpiP6U%2BwY6J9FSqCaDQUDvUIGSl9BfPFlCnd%2BD%2BhVt4Hl%2B%2Bdp%2F4%2FOEF8DlQe8rKRlYa5Pp%2FqpbjbS3V5i9w3UmGuC3im8gPxN7jGhOI0ubsDwXPcsumTJyNG4pGnEleGZWBtkTw8ls2NqFVogSRZvaa4uAu%2BXR20dyT7G2xzo2H%2F%2FkXFiFxIknX%2FKGKGYFsxSLccaP9JbeEkZ%2Bd8udWLA3PgXkWMs3O9cFC3hdSS99EI4Vxvp2tb%2FsnieccjS3kX%2F3jY5%2B3W8cnBm6QWZRU3tSm3PxlySEO%2BhPWfI4R5e%2Bp1q5LfwH0zl9lOgxiiif8NTcmjJ3S1Ql2kA3sgD3WJrCjqg%2Fi0zsalLhcR%2FK5%2B7HDfaHxG8emQUL2WZsNPKFG%2FtjIVjTZ84Nvjc329iOJ7A0bQGZcbHXeEhWsep79NiUfwZ2Tq%2Fvyx3rRov%2FRVAZjCS85DYmpa5PZAf8JVXNp53JlwppXPoL3L5RLWNO8WRHJEApUp9mJDOASSRLAk97nyUmHG95vpY5LDyXrlxJ581UgVRXO38hyXqQVTaHEHJIbzpVjRe4pOmPzw6q2ymSMZoc2bAKrGw75xBrO8guRWBSM3IulP%2FmvX1ccR89uZRXL3rZ3WPOOZP8EviK8urHQLWiQYPJY1xMLixg6egn1niCDAp9di2Q44rfM3mFdoZeQdtJygnx9Qq9J8I7vJ7p8efmP8uA73y1E5OjWJZPp1OTxkrZwXgTGYZygABtT9jDRevoeHB74tiVvbMI1bNjkCfWhBlyPAa7XU6hC%2FXH8cRZash9JyF74pV8KLiMorhjjOhU1%2BBXkU1cKj8CXd3GEgYVcDiTL72AlaHtAHOkiR6DewJSAnR7M3MqMioeTmaI5US3ciitb%2FsvuBG5pKJVPJ2mVaKFYWKcTiljfEUYJ%2FmedXw%2FrNFGu1GCJI6MvI1buP10IOWpo5C1tRsfLWwdH2LWUMAHRM7FVPH5I8FkQQ7IrPi4fggAcwfH19Yb6vlfC%2BpYomUycAA2pajg%2FVqb5iUwsRrr98OGHKBEvFYJtNWO%2BJuKBs%2FcEqwro9svktWpdTcXr3R9xCgIcpyvDDFOVu%2BMQ0OOcfhZgTVrNiWlgjkzWyzrfjH3%2BVVTbM5%2BSMGTzlcj4MzgehIn0b%2FdZoy7XOkcfEwb0MjpjOmF9ATzSo6vxCfvKWSTHMwE7wVoWBpfMEyTyF47P0qLja3GXhOa8chX5MfY0vFg8DdaRc4K5zc69HC0dWFzdn2416iI7zJ%2FJuUwTzkNwaedRv0jib4SEWSnvBR2wXmCvog8oThgl0RJ30DfD7B2fOxy%2BAV0%2BpXW46wijeMGuEWI1zoPvBN1zehghJINlBq4CF7BmlDQ8QeQTK2N65RaOQreOCIOqP1wQkHVYJ4O4q1Qcm266Xpu0VwvJuxkf8jK2EobRBdEXj5WyeoIsONO4dvHN0Smm7SNzAWnt2MDzJ%2BvKJ8U5Y%2BU%2FWhJ7XykGNXCQVk1zQbaaHbA18xWoqkPF8TvaeKBf4Yb4eohdu1FAgis3CmqSJbs809GQCqUrrXhU9L8K2UdhGlGC9gruVtWjTHB5ZNKfTvThkNq01ce5zCpdljD2zkM6V%2FRCGzVGzC00KlASPwxol7Ap4PCH5PMdzTpjNhwH1eTNldu6leoxD5aJXXz2GO1TNfq6EGpRwVrpZcPmT%2Fjc4pzd5Bx8%2BH50wS%2Fkefyz1q%2BB1dSjjaYIoe6SffNHkaPipa5R9GfzK3dz1BoT0k%2FJA5%2B2vrUOBzxE8ZVDWZ%2F4dGWVWzBnBTO%2FA6xEyCLxFc2H%2FrxcxrpynjBd0v85pTDLTbrl54q3tsaUfx2j9PrCJNinlQ0KfrElWT1UfQE3iFXcyHJs%2FERsRmPJRvjQ1tm%2B5czWTK4abyTa6HtUdj3m2IHuxD5OWN9aOgcWte5sbEVIPPHZB3KmmsFzyOBYatk4BkDsS0IRRiTsCsHFZ%2BTi1sPOe0NEcoryHSgdIvcctxRWEV2dtccrL9QyW%2FjsyQTyg6omXjuvuL7xm%2BYCzeiRU2D4DvAQi9izyQRXB91SZGdtK9yxav%2BCiqn%2BVOq21fq%2B40qf7q%2BStpqYUrsLmM6E4RMFL1XejvWIbil6SgYb1urLMPf%2BszRU2uXlY3pI6sipEaJXiMu%2Fk0nGPGMWbAAXfz6IyctCO7UprbAVnXsDLa1A6uEIcvoFnG%2BlxjkFrCj6%2BKsa096JD7jSojBnEB3J78%2FxfugY7X1eVakj1%2FkJACCOLbqbrGKdCVn53lrODwOmsIoUmZ0aMyABPbovVrtn4cKCYf2XBetSkNafmFOGEZFd612n5K1YyJsTwv4T5KEnd3Hv9l%2B7OsrtdSBWZsk1Xm2M7H7C7f1K9moj5p8GjW%2FYMBKhfCbRjbuRa0%2BraBkusFXneTCxPEcwMA%2BBCtEv%2BT%2BtPOpfW%2Bn%2FKmc%2Fucdmf%2B84fOlKX9f8vnT8t8%3D%22%7D";case"demo-stand-current-monitored-points":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dVjHsqxKrv2aMzwduMIM8d57ZnjvKdzXN%2Bx97xu9jiioII1SypSWlvIPTP%2BBubPv%2FkDAni9rPQ5%2FYOYPBIH%2FAZ7305oP6ZjVQ%2Fnb7DrcX%2FztgLk%2FMPsHIP%2FAdH8WdZc%2FQ6tx3X6HKXWb08ivgP6ZXtR59tsDARD6F4D%2FQrgDEH9g8oM9LwD8D%2FwBot%2FxcZkP%2F4%2BY%2F6HdFv%2Bj2e%2F3dk3573eW73Wa%2F6j6oycEvD%2BYzuq4XOL%2B%2BRji%2Fp%2BxTD5149U%2F664%2F47jnzeT9%2BPzZWzxk%2F6vx7%2FPQ32V5FYYAdRzqbVzyt8cY6x9hr071P6Z3jzUp8jd7ZPxdXwl%2F09%2B5f%2Ft%2FZ%2F6d%2Fm8ezGIeGGTEEnI7Avq7znbHXBvkeKSY2p%2F2Dt28mVOWXNbmFLCNoC%2FYH4gaNAisHIbsv94cHWHhXBdWwHNW5pn2yOXgNUqatKjrSleyXCemEF7BE460fWSBFOctYVHHbuxotcEmY1fDvYWCSOK4LD6XcQSaJUInQRFfWU0Uw1zle5GhL5HX%2BvOGjRoIsw0yING0wuH%2B0Ud4oawvqz6Hy31wxPcJ5MI%2FpcPpV8tnvYi2UOiZuNwJ%2BeK7Aldiy6vl4Kx1M4O9ncvZZiCnY2gRIYAj1t0dkXclfPuf5gupVDQ9Rq%2BDUWndmn4bXs9ghX8kXF92mJ8uAUmUQZhFcEI5JZ%2FWj9ktHxEYrGhyY2XPI75xJH1Wxu%2B%2BWnwkdT92Fc%2FMXRI%2BuM0vNlDfz0TP4b4ZGCXt04UttEGNFrPe5WLr9NPC7MbjGFRqPh5HRff3qiTPWsWibq6pvuUeDTKurDZLv3llhvwo0b%2Ftpfbls5rVfcWB%2BsS6rLgixcTagrd2RocfFmVn9sSuhtArv%2FJPPkZTT%2FRiNG9wJzIN%2F1rIwsXE%2BWJRipFUlpqnvBEkRWWjJRU6ku6rIhoTRERMfAe0HYS%2B4%2F3oV4uCemMhCWbLnQXDtQQ%2F3k0Z9fPmOKBRN9R2qYqLvMMSp32WTKnEuj04PlUmPE%2BIJK0uRvEAudJkyhEVi1qId%2Bzc74XV1l8kpZhBjaJAyowP9z2s5TxKqM7xYEvBXchbwWYDnzyt3MIDhUExBehzCQWSJ9YpedPNq0A18Sp5g5F6Nhg3NLOHB0f8SEUELjyX64LBvBi9aV2jdEjDBRRdSRhm%2BiPc5Phd6RojaSsmbHGOT1rYcoDmp311J8kTnyXCBOMbF2on1ry1lo9nE3UM%2BhPVvm9NXx6yq7gN79hqeC5SCW%2FgccVJGzgRCj84kJA97SEPqcNOwz12dSkg%2Bhn3x9YOBKEaOC5MQtM8D5AwW02JlxNqaqJF8l05rI48PlKUUcgDCJQ7%2BBgFrZksBXLvcHnsxDIy6%2BDTJeHfVTTwQHZEZIqQTzAcjeAQvM7xtKY6NoR7hjXxYbo%2Bmxfag6u3m0WUpzUZtJA0EM%2FXybuXbKKxYj6fMut%2FxPGr5rV9Pu3HmADUUdT3CMhCukoQwjvSVTntkAbkF3x9nLROWgP3AVo%2Fgqde2dqXg2%2BhTdYur6vAfuGvq4VWCuvlxGG1Rri2WX8lNhxxfKch58pHFO%2FOkmLstOVH6bQpPmNlhN%2BW%2BNVIDeCO450ICEFEykFa%2BqvWjmW%2BfaaPFzIKO5yZgUHJLlOuumV1FQeHxh7TeQMeWPZipHz2k59Wd0M5d5m8gI8WtnqOy%2FHSLEmkwk4c5rLD7W4ywxP9R%2BhmlSBiso4Hbo6KigiHDPELErM8%2B3abzR1LO2H42teXRryWuNsjlTzmY7XbPffJzvkJSG6nRrpTLYrI4LlwhNqQmUz06DvEOUcsfRjotIyI1qydp4bsHBMqNaaNVHNL5vABZbCg6%2Fp0kdNrsAxIiEcvahiLpghW9FkZFAcy0dpRoudeCpIzDvVgRBOX8fnQukTGal0Va3nHqun0qCiUYLU%2BJ6XsNEpwMMuIhana%2BI5kx%2B8cVxyXKMrPCiZY5Ka6MxrDpvRZueHTNnTbWFVkNt507VgnlFsVQbUTYnbyIDFHg5it9IJd%2BYsO%2BiZeD2QyXAt1xDt%2FrSqNqGbvhhsn7rMxyRXng%2FbAXSLZEMr6Tm%2BcBb944wZn%2FEwQVwJE0eyhCcgUeKYIICASl5T1DNnUx%2Be4Y7mtnMv86kMWXP2FNfZdF3WvCc6BL8zNkpTf8T5WSU0PK4lwMaSowFr0tcC7JFjh%2FLfcHuwRB1Edk6BKMgKOWggdVmLH4g4Tu7GJgdBnhI1BH%2F%2FJNAHvrjtR8dJ4WI44mAolP%2FmaJxG3bUYunqJu9sN6cB49nHxTUvlIjpZmpbnEsJtbCRmIIlqitNIbVV7ejDoSyzHE09ykAdEC3%2BS0XOHxycmDpLu15hqwugjzZPjhILOyCY0Pa5HVqn0OmT%2FpGdT4JwNRFVhTc%2FW5v%2Bv3CG3G8%2F0ZJyleF4xo4L8tC0RU6RzleD2bFkJ3N0bk2vi9Tz3oxmm0yxjRC3PSpL7SAIqo1mqEs%2B3j%2BitPwx3JXPSCrpa1TXJ0%2BO8BiC3ktwKPLufVCmwVOyIzc2mG1mf75kSVCpVL7OrBDpO66KyoreACyqA6Q6Fehv2aw7vnjCnteehKZ1FHmlwYUIvLX1QVLerKbB%2FDgzpPIp%2BHDupN85IdR4Aeb1I3HAcyyQGEfVmfsIIF8yZJfHc9kjmKPKDdH7VAOHIdeghDILxB05LM3SAwCqDUSVe8mQYB9bFPz2xR%2F%2BAPWH9ddAtjImuREqYZ9HjEWUdLdfp61FkKPqzEaOGCWl%2FkeeGH4SiN7YTbsXnsgE%2FgPXTHijhjy7vgFtQNULjWjU7fNU6fUxoSGVKD4Zko4f1IeT1dqNpEslzotlj15FeVAcqwfZNq3vG04pi1U%2BptHETR3fdA9Uy4sEVVrJjkxdv4wB4RSOjYr2LOWn3ofMY0E308%2FMphy8%2BzmrZQtZ9%2B6U7mTSchN5UWuYigx8%2BipEY2upgxMC%2FRnFPOB5YVqy%2FwNlVwMpIaaKG1lLv3hodzjLKnIyFIAs68bOOWL3quS7B8ZfyoxtgGMKy5pISz3Rqqex2VQWYRs%2BlCSpwb4byT6rZRq%2FkhWVSy7cHdzsBGHQafSQR6l8x3r1RtXobGrtpxzrxd%2B9rbetcaR3XEvU4s1WL04LFeI6ie9rmmTyxrzcx0QRwVvQVxAh5DGifiqeJsJrIITVIFAmBLafENiHSyKX1ZmlYxV%2BuO7B82I3%2FHSWmQZOMhb0JjZaKRvqbd%2FX403Os3l0XuxbW2ZVrY0Rn5SwHADwhaknmwtXlNrU3PnuJKYgmSA2iG9zdYKPTEowGI8AgZ56hdwhu51bhjHXNhKapX8odCoKQ4oxi500NaK1KGl9sDJuWap7uvTk%2Fyx8I1ypbPc9CcEmOpSMqiqDll12Qwo2oWSYywQuGivGeysdY0ATyVGLcW7kAyh7CTfMlQG4qIdtswWwUsse7Ngfw6KvRuPr95jFNiHDOAb%2F1GwdU9yzycZK38wvMR8GGDsX4u03qBWBO25w9JwIvvQx%2FUsjdUGcpaDQeWoqaFHswhqhWFuxrgiwyzZr%2Bi1LbyLzg8YcNVMIrDW3gieDX9sOrARbD4Ny9onp1GTPZSt%2F1A2CuZsc8GZUIJ26ZaCS6eyrekmPbWZYTXzCrUrN7YD%2BGjI8X5dsp5nVkt32qmXshCVSOjVbaIDi8Nx68AGNVL5wWRL0fdiKobjqte8cAckXDd9C8yzZBbTvEyIsuT3lSnE5CZjuFamhd2FBoZoXgRBHdM2wMG%2BMi3GGdrM0ZAxEMvWEJfl45r7dAs7wqnRoBeXGI%2F58ZGQKshxsUuYwVER%2BeSkhpwVi2IHpsm5HyNJyHwekt9HrUL%2FlKfP%2FUgY5D93ZYCjZ3QHGChGF67vh5dUB64AD2OQszwAXH9%2B9DJAdWjCUo%2B3dloKSL7xmOOPg%2FgIMi5KbGabOjdQYXNhVs3Cj9MviivE1QMQzXjcAI0MkSpZQydVReniH2Ohqvj4DuUiBXQJp5C21PockZdEoKHkIZ%2BWgjJpta2BDsCezxT0kCJrToX2CMitYlNl33znmP%2BvTcL0SB7oZmZulHC%2FHGwXl2NQoyZW51xeUulxe8Sbq9MCnk5a0OlRPYUwlQsJHoyXtzXphnpGDx1hWGNuAvv6eQ8Y%2BJJNSDpjJ78qMLTuU5Drpl0jzLSCDM6%2BIXLJtZtvGxigrQC81tJuvtE7Gue8ZIZcSl8FATBt6Zs3P7l0vsJtCYhuVrNkucXKGTE6goox8VTYX0p1UT4Zs9FSEBLBE%2BI98ckrIAPpKJYAHbaAJBwwpPL1qdZW%2BCgksUMs3lg%2F3iWSOs1Sz0lEsVDBMQSF%2FagFAG8i%2BpN0bYzym%2BrTfXjtx5mo3hrb8GQcJMnpbQFyamJkGV%2F46SZMGQYPhR07p8It4Q3AQoCUzNEQTJSZJKSS3TMwIPSayR7ZSUziSyDtiFg4bFFbrdgl3GpWwpQ18rCJmvEPnTBzachY0iMPJsCeyZmmE1GTYi0DPsdQSUyUJ%2B7kQQW2ZNSYrxM%2BAIJiYJFgM%2Fr%2F8ToMPeAZ3qzxj2OQO%2Bmwl8PbDvAY6m9kGtK2Z2i13rloCPZbhCSkC7Z6tCUEUg%2FQPzAGWrIqTzT1bWM6sl5OzXgtu4BTdevcd720n97IdXoYflcde8PnJac4yBXloK1mqfRfSb3%2B4dKd7fqhhwnY4yNmIc8yD1cWYYLAHHN6J%2BqW1J2eOyQgHD11SegGp%2Bsq8q16UnUt%2F0%2B3zuJkBN6Es0%2FN58GR6SWI5KZaAeowC6%2B4f4wpEP3rlF98sbBPFQYo08CjTjOp3Xhq3tkRYiIU0YJKQM0QOlm1TH0vBV8BFpXAGvae8dCZNNnpcvXJQiQ%2FxqymFkZCamxS8gyXAU0cCpxEgbMw2y52BANsBnS3i7E29Pwk4zJp%2FZ5whRFqSndMzchKkdja3zjPmIhuUOokkxJkQx%2F%2F7AcGZhF1GywMOAv%2BDskEIhxxB5n29WvDukw0MtfcrgKodzGTgrEOpX3eWzk7bG5ZZV%2BS3rxTZRKJtMYM5vVoX0kYYMtj39LnebL4g467RjpCgYinARRoke4pcUAVH7BBJAVmwSkRXtd2Dq%2FizzHTRi%2BzfzOoFbzUkOEFmO8g8MJEYzDSRyNpBd1IBsj65U9ZiUiXhf3pseJkRUpXTlMIwBP3sJPtCSKbB8u1w30m9ceYWgIp%2BcLqaSEgMbHLZYvWyOAi1QDKyHng%2B5nI5nGTwHCBEbTv4Sz4VXew92nsuUc7b61LdVdluti6Gi6F4tpN4y0quew7q0CmTglGxg4nWYoW5j1IkJIESlXRBqrLlxg1Kpzdzfqg5pujGtnB5BZAW3cD09qStlPN0idHmx0BEifNtCjQBxchmJGlbfQOlMwCI7%2BJr1gBoCVU0cXHcxinOtwhUnH98M3Rjv5vXJ54h26VaEqx9EkBmvlegDuRGvnrVTlCeLZVLk71hF%2FswlcPNTrdpaZTWdCM196n8dAtp5MDCav37%2B%2BEhdtFnPReweVctu70Hvt9gd%2BfeDfe89%2Fb22fpn8ubn9a%2Fgs%3D%22%7D";case"c2-edge-telemetry-agent-containers":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dXnFEuy6ku3XnOHpMMPQzC4zzczM7K9%2F9t73Dl5Ed0RVhUElp6TMBfI%2FMPMPzF999w8EHPmy1uPwD8z%2BA0Hg%2FwDv73s1H9Ixq4fy72XX4f8lvhsw%2Fw%2FM%2FQNQ%2F8BMfxV1l79Nq3Hd%2FjZT6zZnkL8d9O%2FfizrP%2Ft6BAAj7F4D%2FhQgHIP%2BBKRR%2FfwDwf2AUiv62j8t8%2BF%2B6%2BT%2Bi2%2BL%2FRPb3fLun%2FO95lh91mv8J9U%2BcEPB9YCar43KJ%2B%2FdkiPv%2FtGXzI%2B%2FG6Y0RAux73fJ%2B%2FdOef3%2B5rPzG5uRd3ufbcr%2FH1J8I%2F9uA%2BZ7LjMMW18Mb49846v8Mt3tHkCL%2FptC%2F%2BdvPv9t%2Fe%2Fn3zyj%2FTf%2B%2Fv8Ec7oHRuxS0AnEHAg7sY13n1ueOY6IaLifysN%2BFPJ46%2BxO0E5ym4l0Luq3vbpLdaMyADL5tANLaGHtj62ZQlpOjZq%2FCMPLEeq%2FRsqUjuFP9MmOoGnLNeTxI06roD7qWteeJ%2BLHf7aVSjxZHx6HeXOBusiKuAd%2BfXP8GKm2AAilyznFT0%2BXBuTdaPoniLp%2F3JabRhAlyR1E9p3hnh%2B4vUyuqLLOw4j1T27dtz8Z6t5HEnFq2laO1HhmA4%2BBU%2B96kk1SXocd8E4EH32%2BB0oPvCZHqobHxriBfdxoG9lyRO6uWiB7mv1PMa5fdZASiPs4V7mHtPImqpFeRke8S0QY0VJgt4WBiVb%2Fwm6zYHWLz%2FRsv7UG03pZOg32M5g6sdbv9jWZZpJV8W15cVPfHLckYXLRHMxl1F9qEgWgu9vD%2BIDHPM%2BC9l13SCubYF7O1P1PWjn7j4OkF9UQtHURVAAr63hNujUey%2FOe%2Bx1CiSG3vpwvuCdUXCtbW%2BfvU3k9klm7pZKtyZSruvfAZLJpmdrkTizKOACBBc1fe2LhyD3FNDNu9u9ptEufVPA1U5%2BT79%2FanTMq1zRLU4%2FIXlYBdWCiQXucFvOptT4CWsYZfisNgU9DF0%2BSmOthmiEGaIzGxWBOTpU3mHl4iSRYEcGSoAaLGFmskoA1FrGUHxlyo0EDvHuib3nK9g6Kbnrmw9aJUeDw5Ejn7tut2Rs3O22IHq7jWW7PTbqV4YdOkNI2mOxh8S7dVcl%2Flm%2Fcr0cIoR4DUS2pUYulXD81gYxoSzso2afXtzED3N2W6O3qU8rHz1sYBLKOcseKZ4Z0GT686Wex9beR%2FVQburdt8CYcsPcpZupWuaBLfR8TM0ZpgaQaidTt708aPQ0iGV0UMpsK840DawdS07DgLrVi2OsxsMrFF9e0pq9GqlHuIIuX2wQiwX0fLTAtHjxPry6yfkuuHzbMMMGH6jJaRXe%2BUqfMBMH%2FVyNWKY4%2FpvLbxLfK8qlegvfeiMOpjLkGgMVgtS6xsfBxbLz4ztzxtEOK2Bu4UStguaIYcIk7c7Yrfw0q%2Bc8BTOOI18%2BorePD3EWZBbNjNIMlyRTNJFseUfFVUfuVkVMsCZWri%2BpLS326Jkkk0DWX4LV00YotVkXTrPP3oaRzUKMoLhbyEDIgxIYRKdc7DdBcBcyyrcAJ7qZuQU1GG6KegzbMbx%2BiK1psj5NrbndPFrhHlF2CmDqPVqG9P7U4ELqblV4rQoeHcTUpGXDSM10ZldMsDwos8TWIOJi8oRQl4PjaoXSAD5OZuy9wl82RqHj3lIO4DNbC5djRIArRjy3ZYHq86U3a9D9b7oPmNqBl0bNVSw9hYU9uW5dRCGTMcTsS9aMm3yVm%2FgE7fF3zKmIirgzGURvxOKj8%2FDIgsNewgMYhGBtinL7Qm3u6xL0StDt9%2F00nvEqzKPxNclcON%2FZVtfoxeqTCo8pczUGTqHXC5cWvgxRyUQkjeN7EstJnk%2FaELevsw62IaJAZGqRn4ZWPOFyBoPB2dW6njgKzNHnN0PW0nvP8RkCO47dKC%2Btmi9tvO2%2B307Yp%2Be1mrSUGFpoPUqnZlE5LhnSgcXEzvun5vNwfWbDjbTbqEO%2BuI27JECWXCHLEMTutxWUeT6%2FXcVBVx%2F8g25ggVpJVgjjm8kGUEYARgzBalKRuTSTgN%2BZDq2N9fFn76Bn8JWYIr7SbHv9GIobzriN6vRZO%2BpyG3iCBhKpfZCqi1Cr6XjTRe3MLiYC6wsieHhUdH4UXS1NM6B3PoJmpf2IbFatLa0QbTeNWoh2OYU2vCI%2BfFelTc8OfcIN2sCW%2FGInUSmh4BSb8A6ggK9nxoYXa45rTLyC22bhfPzVcwSug8Y4rVnD3HGr95y8Iz%2FgYyvqzg2199yLoXxctJ8%2F6N2wqirewi%2BZM8NIKTiKsiVZ1w64qXcA0AyOh4Y0lWrpCrzhpgCdM33uaNVeMPxRJ7ugfeZVkY8ylforOicR4zyf2WZPM6SZfrB7UPa%2FIXQv61DcrOZSw%2FtTnbT8513StNaElZMJyUKKAwhJ7stVEpOpiri1eoMbya3nmDig3REsqu4g1rRUu8%2F%2FRF9%2FNEQiCttqFlsW9qMsAXqN7uKpXQiM5PU80HgXCTH60uUGUED9vxHRZ2tX1VLSrbtBNb5g8YECfmmjBJ8t%2BFly2dsmlxwag7H2a%2FjApJHy45RV2CQlTCQDW84KGPDOSPMn5GktLV9YPRcDkXhYMPMVJQyI4NYXTB40Opqv8yiVyLKIV%2FH8xw77y8CUT%2FVviMUQCyrRqa0qaubBRIPB3Z295zGi7vnHdAyghLjmQ%2B%2B3Fz%2Bvot3eN3jGqfvdr%2B6l8Tq5PNytGqQnJb3r5Jz1ERfJw732pkRLZa0x0TeTyPO7Li9Z3Tzgqr8EsPym1KRHK728AIesJ2clESqAoqmtPsKSSYMBKHKj1mlmYK5Dl6XIW%2BZk0mRdFDxtrtKnD2DWIbNl6pDq4eQaCN6rZKhfy8o44YJVyOXBVQN2DJcvSlcd6jIAuq6kR0qwm2WllBAyBRsBgga9vdvGP4FMycrSMpOc8smuhuQoy9N4V4ZDKQECQSS%2FG6fOyynnsajuiZLn3ZCYSHmUbAmyss8YbP%2F%2Fw2uQEK9WZC53yq2RG%2FxBEEMcrYnMjEgi3x2E8quIbNnLx2NwXV4z4JedRm2wdCayvgWbS1rRMBLE3dry90JhLvdt7BZWsRxJq4Y%2BJiYaFVpVhUqTaswsVvcNBJx3P4dQ5tw1FczYiCu3FXtNUdo67lhFDtDw4dK3BZNglcAeBA7tM3ltEOgVskK5np6b16V6SyCA9cNUYgvhi9ecqJDL4ygSaFDu32FpJfH4K7LxPzKXthUw%2FHCIg7BfvSTkoh8QvNW33hJ9LlUTD%2Bgr2eg3DffcA1lFQacOYB%2BRlvNr0yzOGB32Tw8oj4xNZ7%2FBVRk1uQaB5fptqKvpGutaQtKf8IzidcJpnhDwNFdnlqebKXa0K0qGyV4xgdgRoXho0heLHdxqX9uktyLnBzbjGHk6zTssQnla1mg5Gij0DVM9QwhKWzky8xZGZUjx1cmfSJJjVtjvTFkULFgCby8gk7ir4jCvY%2FeRwAdM5wRwKBdLmqQmms9Y7oVBxBVqbfDFmKrxChGRp9kvFh3kK71OIuxywGTDZJe6DwhY9FMSMnA7%2BmM%2BCiSUeAGyvWl4RGbRrLp%2BItYXpv5OBpnLRigPtx7eLRJUNQPyVhbuOGXzvIq8kI02xmTdonQRFmk7wbMmMgJ5u33XjyknKkKkk2DwVVl%2FNNKlslXQV9U%2B21gTskZxoFnm4%2BFN1B%2BKuzljBm1dtIzGMeht8TBIBKyGeikjUwfwy6djOfn1OZboEwe6sYQESAufvA65%2BjWtbIhdhv9RoBm7BEDEW%2FdMeYqIVTi0k33A8QkgG3ImcytaGMzOxfiJISnuoMOYWqf%2BvND2bvGnbTaXZTs9R3sc0v4mAbNp3efrEZnl5gp%2FTVPtcy754o2HAQC1IYItaPugGvWxdszMYg21MJFF6Dwtvpw761q1bs8AMWl9RGv2Ml98A%2BK7KlwF1lq8xz1%2F0F3mDPCya7dqZUB1hoUpXDt6L0sxBd%2FaJVwOAkwD9jQsnWMtHMvHtGaPVz2niJ%2FBkyTJkqNXCXX92JsvhqAqcb%2FcOnEisL2yfkus8ZfWSuVXIJGu4Gj7YvHBafJqqpQa39hzWtqV4%2F3RjXdNUfaiy50GKvzqeRY2xyDQpknoba%2FQdHwNjbMGSkqlPrptJG9OXXM9MwHIK%2BzQsGggvem46OrBN0vL6on9gan74sxLcW0PX4Og4yx6CKxWnltWjM70m3UoZjeqfdXdwEoD9lUtwgFUNFrvKAH7QOg9uy1EBf8air6mWzQAA23C%2FqAvqvAns%2FYjQqEhev2DQ7GqM6YuN%2BKSi%2FSq%2BbkMLT%2FecRqg1AC%2BryJMyi1ETy2WYX9zjVQms%2Fn0RaYx6KGEjQ%2FQNAoxLRs5ZdmmHz681AraHdHRjjkcP0WjKTNQBphkNhJFBpws63wdKbQYjE5MrzruD8ufXjJEO2U9TZf%2FowtZ16wz1LkLO53w7ydkq7bSNoQ5rTdmOjMB7nrDWClf8k1qAYfP8bAuq%2Bhtl5IZUOESHbgi7p8RzMvT15O0NzQHzI3ZHyzKyUHUm4yhVVB2B%2Bfl2kygsLZFM%2F9WYqgcsRVig%2FlKoN6oYcPVOFpPeqGPwuDmNv5R%2FrwEVatbzdDeIHuQbt8Ud5hvYmfe6Ev5ZvspWMWD%2BakxRXP7GNgDsbXBxFuyf73u0h1x%2FXCUdLyCU2B0ofcM794%2Br9KtRXfxOotXxeB9W0nHUWLcaxNjNvrQeWT0tVrYGEEGH%2F%2BAnOJaz%2FgfNvaoYYr%2FpGUHewHppMaeU03Q3CEZ5DfuRti%2BJxS78p80s1bUXzb0YI48jKLIoXOL4lgVAuXq4gmKqM%2BI92PHEhw3QBt2eVDxNiwfHSVIkxYX%2BedV8M9oUdGAOeXoeGx7H%2BYt5itftsddhTumCJl82h40oubkqIUXsTfNmdRBG%2FDpVXkRm%2BERTOfsWZ5HyoGMEHhfXFpSkVC%2Bq0QUDczjRH3E3CkrWhUqzzGKjAiugEkW9u01rKN9qxfricrhlN9h0%2FVEWyH2H%2FoBAb4h7AMYW5nVXypUrQaPSJG7pHTorw%2BVZYnWWgXyeaa3VLrDeE%2FCR%2BO8HCo%2Fa20YBSaw2DoI6SOpvnZIsTPCGcL58ZvfSez7%2FT13CeVGUN1%2F7uHyM6US2HJ6KAAzT88mSlB%2F55MUi%2BKpb2pwxPRvxNEr7UMQyxqD7S7hAbpWTDSJXVjjFftun311JUvpIiSfvzpsWeseZaj%2BDP7hgNQ6B4aVujrdwRJpUk6xJ%2FdMo94V4JZxd%2BqH758fHSbwXwHm97YkOE52%2BVomA8KT%2FFl5ePmFWFA7q%2FJNRvibKfzb9g8ybTbtrhSdEzgTi2TNDolYHpV85G%2BNyOdASCDUL9Emr8AI%2F72bNdTucNBoQtVBdrCmgrwQAEQkvEqE%2BsdcZB4kV9Plhy4SI%2FxSLlnVBa5bQHz8Yq9jY5FkZ6vgMroGopwfOTRD%2BJKsJNjDq7EX%2BKTMI%2BOQ45MR4CSQR7Edq4%2F67XdFMhc0c4xSpuwh2gyCQKbi47YlMrLGygctLuDEAWc%2FOiQPOiQnOinlCsDh1CiMt6bOw520ALFFeDWMV38Hs96Mu1rvNn%2Fw3rFiUEMq8fmGShEWaPyYu0dGY8JBaSVjaZERH2zyAvofOPOY2TQf%2FWDT%2Fs1%2FOCRYelOT0pIqVGXuFE03NvgxuXvyP7TKMpK6NBHta5VXqiDqTbGHi6cLQtEHSNcYbwwtqudmsXu5Ph7d2PACqMzQm4F%2FgZho2dkF8DQD8BtmwivGXPUryiLPw27249urdqiA%2FrZ7GTMpKwniSr6fQsH0uPns66I6bk%2Bmvp0hFb%2Fag8BN0ObFpK9fpTgXw24kfoByEooK5aKgCKyaNbROMVJtfR04z37MYmEhKBoGAMifVepcdXOCxJRj%2FYguRzGZaJZNEaB0jET3TyfsoZXWMiBVEWd1x2V8nHQ7LHmgm2kDbbx08zBKWk3DzQirTtzY86Ssrul8NTwgmj%2BOvLHU7Nl4NpyuIFU39gXkyDFO8AjNmrRNL1H1ierjxWEmF9LPCTGvP1sFeB8%2FQVAYQij2bSJ2ccOiAiYYxow%2FHH6GBSctgnoMXxo58mNuTmqSmCc4HpSGvWufLi%2BVF6GdTNIvIDJ4WVFjYxvBh2eePgGWOjFzFPBVoF86L5xBfzpxDOZtKV3TvilLBsTz%2FLAhle7KbZvQblKwQDnFUn%2FNt2C6UtFcKa680l7Cq6H55%2B8BqSqXuRRiGB9wMWxoC0tqDpQV7FM%2BqB%2FUgiFX%2BJaost9bnmSgUSCN2FVTTdNbnSaul%2Fnp4jj%2F3t3AjNiYOzahmIZ8YMSWpkexGkTJjZZ0g%2FoUrDILWZcXgVf3aqeejDKU%2FGOiWZvumcPmXEfVu918ROzB%2Fy4F9Ka0vBKOZi%2FPaVyOpYZsTHtNOmuQAaSeQTzPK3%2B7OXBgWnC2Nxw%2BL89KPnDsKH%2FbSyH9%2B4ut6wZ0Do8%2Bi00WFxoac1btOFbo9LxtIo58HOb%2BT1YGsJHuX26nnq28wQYyW0ztDN7YDAx6fGcpeiUhyufABFBazCmyLPeDX1YXmOriNIa7CUhm%2FXXiqNt2jS%2FFqCutU1Yds%2By3fhydYJEJtzguDP8Xjz4bOLot2%2FrA4trlkXtDPpWXfGqX%2BBZ0W54ChBTDlxxjeDSuQoO0rS4DMHr90cprTebiSL5Bsu8E4dRNPJPktgULWItZR1cG22wcNrH5FSkODpxy4%2FD3OquLuwIEOvAM0FE0PqsZr2DDOBkQdCVOeYQ%2FwtO5oZABi8GUwTCD2mhNJOyOcElqG%2Fi0Jr%2F7J7bbTanscihsuyyLlVQOqaZDaFrJ0D3QTaVQ75wmTYxBQIRksffPC7OZM%2FBN0p7BPYCzUY%2FOFuAZONA4TJ9RHfeQs0ZBoj3iY2OZttbeiOj%2FOBoJTepYtPJR1mLqXRE4XhCqwCiH%2B89fmZ29iZj3vWRqVZ4Y%2F4nctgOOfjYsIVGqqR2w58dqF3qMNFJQnKovpTVffc3icX%2BxVMGZ8b0OFsD53snj3ciHeIAfF9q%2FXcka6mC5Oo00MC7TECDJNDaHAx6otOgEHd3fegoLUEDi6Hly7GB0M1xMGd7ixwI9glLvI931wNzXMwFRPwuUSbyH8%2BiCokRsfkqe%2FjVzBWMZghCxv9aX1crUbRct7fNqyWhOXaVBXkgDautBq6mEubO%2BPRu4DBFXesbT2Qb4y0qKtQRR9hvLIy0gddeYXXa80%2Fau4Nr3ydtS5%2BoLp94oY6v1dq34f5sxn%2F9zXef19CfgX79z3knyv%2FDw%3D%3D%22%7D";case"c2-monitoring-alarm-platform-containers":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dXnXrq06sOXX7MdzRZ7wSM4580bOOfP1DWefbqmlbmmtCRi7bJerRo0q%2FsD0H5i7%2Bu4PBBz5stbj8Adm%2FkAQ%2BD%2FA%2B%2Fu25kM6ZvVQ%2Fm12He4f%2FHsBc39g9g9A%2FoHp%2FirqLn%2B7VuO6%2Fe2m1G1OI38F9O%2Fwos6zv28gAML%2BAeB%2FINwBiD8wif7eHwD8HxhFor%2F94zIf%2Fh9i%2Fj%2Br2%2BL%2FVvb3ebun%2FO9zlh91mv%2B71H%2FXCQHfH0xndVwucf8%2BDHH%2FX18mP%2FJunN41QoB9r1ver%2F%2F2595fdRzqbVw%2BDXxNWNxPf2DqvSe7ePnEGF28FeO%2Ft39H0N9C6HHY4np4F%2F13YfV%2F%2B%2B%2FeLaXIPyn0T%2F9%2FBP8Tf6L%2Bmf4T9E%2F6f42F2Z8HR%2BmuIusBxJdzT%2BW4j6jHLQ4ebNj8S4j2MQxNtKVAl9nGdYMk%2BWFnWq62bdPREh%2Bcee2rxpW2bfqMdDm1SGXHMxF7HyjaUxRAF7iZcg2a51woARr8u5FR18%2FDgSuejtY1mDxpaTGkLv5AlGzJEv6judwyi%2BZ0Lq19nrxHBiVTcqVbeovro%2Fcsqf7VGLW1iLMSFrGL7Uw7haLK%2FaspruoPfNisT1VU%2BekNz69o%2B%2FmJkgioB28zh%2Fua06avoqkdaHMTVfHfszTMgsP%2Fapnze39aBnAbrvHt89ga%2Bw5fK5DTLfBIi%2Fs3Tktxvq8syuNOcXDeMUq3NnZFADPyapb6CcHbdufvHNwApO8qqMCQfw32LH42EUf7aj7wU0lTAdsxoBwtdojVHRPFOviW3V51irEPjgEWgJw6BsvtH0zY3UnY%2FJbKkGeFHzF8hULVp7T4nQVsXQ98r3YQ3YOfPMlMHQTSz2ml9dBuzHFltBj3rRToQf14r3SRoT6P1z%2BZEVN11ev7yaW3XcBibEwfplmQH4%2F34%2B2BBRdk0XxmlBOHPMZPg4ElB8ef6AWCHMyBSou3sXFLiB3L886tTlYmYzyPCmZpi%2FUrDqmlQqCLMUqZ8%2BGe2tAx%2FTlHoPcQh8UR3AXL5l9lmI966sb9ehQlWUcQWgwA%2FzyH04LDAiC9ss4SUBvNo2y2SjMDnWZrFElMYUg0hq4o0cwYE%2FNPG78KHUFenji9dICbqgxZXBsUM6H0rgMfu%2FLUb9k4SGT1nSuHcnw4kZHgf3he5r3H4iWhKhvRW6Wc%2Fgjr7RONPeCn2kExvoNFbsMLR%2BSroXTwPISUrd%2BolrQ8sxqtwFWLqPNrCYcbbr3uVmPJBQXcNK0NPtuIIPXxnSpZVaWH6ucGp3XcpuxQOLW9nVT4TvRnNvSgKlrVjRsKsry%2F6wb67muDTf%2B9pAs6NRkeym9fgYAvDSwjkQHj5X13LFswMc8o4wTnITuXPmT9%2BVwGxqCuZwR6JvK6SX6WPYenea3XbOLgIk8WS6ucScdkaD7yiKA6wBRTWcE%2BXtJ0LwhEN4wJxCO8TRGK%2FEi8DNFXMFX35mVoZy%2F6fWNKcQe7%2FLbU4s2BxOqupXgWnt8thMfGw8bNOtzREwv8ui0Gt40xF1K8L2NGy3ThJGwE1%2BT1quEz6GBU7IjS0ReFrtp6%2BKhDkWKhVTIj%2ByvzTZs1nOdpQUvq62qLsllN8SqSR2fCLStEPi26GsTf8JHh55ksNdXfyWQinbXdUQxthqiCjiln09aTnrBdQ%2F24sm9%2FDtAIKOH1scUdcRcijUys2vwBi7ftr9j3LosOEo4oucnlOGd%2F5tKNNUiQekzi41AAzcNGx1Frh31GgvuCCkW4Vbr0bt1YrHyjvPwkIdnzIgasKVnSyk3MgEPZXZaBeSjS6VLhLIeYx7JromrSbBnVOZxDAgTDFlcpDonH7CqirBTfKL5pYVDrwMXzAi%2FbuwLjipyds0INQLeimJyJAeJEes4fHzAVRmtjRSth10OfYfRrF%2BxtVvGzBnS%2BffeG%2Br7aC7uwldlvFmTxCCx3lIplNdKiU2DoRMJh0XAdNjFjqqKkQpLlU3ZCwBWV5oKFM0mxir%2Bo8l5p2m%2F%2BqzICF35jHcKyZ8CugXMX%2FvuMtdwfL7LA3psEjfbLkciMXUbKbOF3DHMDOd%2BRUn1q7NGRJzg4Ipp%2BH0bt8h6R2488wjNqhV%2F4070YS1OOeWPQEpQo9HUiUF13rnf6ZVDIgLFQY%2FQFNMvU1AKwRUzl%2BXzeboZ3CvFcAR2krI7S2wtl7GZe8oxV32JJjUisFPPk8I53PjppicSuBz7MHoCbwCi7BWwFyWzyCoIokMCPyMjoRK0bVnkM5L7xGii7Ti52wCuQjLOHDva6M3hgbUXTUri7Y01Aoh87qa1aSdcmZpcXaSjkurrUD5xgbVgIuhHOEYu6hkSXeW7cRhK88SEIlwbDGMBbShYl2AeRfF0jD00ZgOlu4OGRbsYhUkOf9eqj4MOeO0Je%2FFpUkqB74FY46gtjozvcZhgNqMVOnsda7Y0hQZdOmCh9SGwzeTt46UyDBMtZl4z7yb1UEiiG6wvy3O80jaCwGXXg525sPCDIbGVlI2fEDxbOJbCaLL%2FHSmU4As00D%2Fa0gtn9QmLdrofshEKZglrhUQcJLfqrx1X2PClpxAFh7o6fqrmcFKW938NxES4ytfMyOq3DNnrOycPglpxKu4DQGIWj47ymKA2039AadXdbqOuZ67qQJ%2F6DTA88YkiW1fiEovruGqrLUxPbxy%2BwUp0%2FUfD2Tg7X3OzddB8w0hkknJEpT9Vzhv7sZQ6Z3mJcFhfm4x0HOuTw9UCpoubt0dLGhzAIwSTn4roN1R5EabxXKmDhi4hZ6UujHvr4sP2sfUpX0AWm%2FaiEJCxrUx1Z1MdsbJkM9t5k3Rg1%2FemDe73vkWwVMzj0uMyEnLREWnd%2FrYJTNZBp4iO2fqTTZjLXrz%2ByR1G5z70GEiHUubmZmbUvzKOzqLQox2iXkz2mK8de4sI%2Fw8fb32gBmShgNTQ3BF2f0mma7woP1RLWfeS1sgUC69fWcKlYRLbkJLETpiedMbHY4G6PhAAm0e7gcb9bOMToaP65wRCg1OvblA1%2FyLc2afyYwsmQJ2t7NYcgoUCGmACGplbaH0V7hxTyib%2FPy162TeJ7nmOPDPr6JhX%2FagelAaUkPZ6UctRkQwON0soAMjIPr8Wy2HUBuSoHOERwWySpbKVlgYotArGY9OMBkBLlR2xFjcj%2BZisELhb9jglXZ96mljp2H9jkuNMKM1bGF7EogJFLLr%2Fsi%2FWpqtADLgtqAY%2F9WIL1vb8rMgl4bdZ07mUbjRxS2JbBW0S6EjmL5Xxvqh3l%2FKVzLVEFC0havojGL2XpGGYJKPzzti9qx9mMSAOMf%2FAULyhPRDFY4CB07ThtbElNmBFShKT%2F8ddpT1nh5URcSfSu8BdOP0N6%2Fw3J8NNwSVDZY7CwEYYxYt%2B3JDsXyxOpop5C9stGJjVM4Oo5aPf3k8qXnAwtJ1x%2BvAX9LITc1IV4ujTsdxTUSlJ6SaYkZKEnJb5E9JAHSlEWmxxkj62mSij1laTlkMy%2FFeDMRH%2BnGBYDSbnvGdQgOXOhFXha5KN1yKZ7q5KqYM%2BOGNfBXQoQYtLAbV0mt1kySVDyXKZVA7IaJJAbXaOdSf%2FKnt00E9MAx32F822PjdOOUSjhnoskBv6JzQAMmTxkSQow0%2FzyVHKXgb8Y4ktF%2FugOqCJOpRzHFDjnvagmlsCXH9LJxR%2B%2BEShzkv8IZeaqPbFFwWOSEcP0kYYedsVqUpzrlkRae3Tidn9ho%2BoBk8cCsTx9fOTxecQT%2FXwsxq9zrSrh8kj9yBfmqIsYJaonoacEfqP0bKZDPElo9Nb9Nq%2B6mTRFgGknrIUDhUiulZ2WBwOfQcNXqq2jy6kAo4aF5XIWuaGA6qy4%2BD4mt90vwwDM8pllFnpRibclmhM89qUjnOl6TryJIOaZSfjGkLqbXyL0qUCc%2B0zsHHFLPJGQ1Lmxlo378hv7h2DijtXDY14ieAqdxTIMsj%2FgF7FtvjNRBxtPvkCM0cbhaPG2FJDkWasGMBj1frJZDy9bSaYLoU58gFn0x0N86yXelJgKYHdF5nYqU%2BeeSuZLbQ90iiAJln8HnPxvlvdNs72p8Q5v4XJrDQn20THOdq%2FCi14%2F6AfE1O8ghwdjkk6XDRQlXULSBWhpycGCKxEUnB97mi934R5raWIgeFM1zqs3DlPB8bDyhtdxX3INIw3STH0vmvZld%2BqOxd4gp5SVnBCEFcT6%2BgvFxP6XTclLMhZFqbQn3AJLVyq6xKkTnyDTBs09t63ezqtaMB5fXJ5wHo%2Bk2Cf2Y7vdT627cMIgSlhNBsfFpOGzPkt9n5Bh4bE%2FDh72Ep6DiO%2Bi2Gyg1RGvxprm8WdJu5R8jNd2U3CD57lcK%2FJLTulrj8u1OV7Sn3Sdi9MI%2FzPhabpupaFFqKQjgUAfDG4YeJDI3EfexBuXaxOS76py4C6ufpv4ynXj%2BsUdjuPno7g7z8C74VRunG9hZQmsz4Z%2BJKub6piK%2FsK1oE621J6xsSVRzoVP4afZy%2FO6XL2SHJtIsSZhw3gT%2BF5g3BBrw3lmv%2FWHQYC4tlETQaF8fJnVC5arAVF3F0hpS8z85BR0sAdozh3T02EhCgBWbxtVfCtKWH%2BcAK1KxMphFCQYFJkyzScIZpSlwDJeTiQGd33P9I974AU1AibvXuVueMaLDpUVM0HjScXACBQfTPOx2q9UcKcSuJNHQcPMQAukCjhKbJHLF%2FRNinzCWGdIbscyNfnxKYJLKPiSSwJmsFcpgf5CgXf5b9rGWT%2BVQCrTQcSMgmOv2prp21DtD1iMSE2uCCZNI41VWmWHbMNNXjqc5YUlos1m61WxaFQpjF7tUKkHSFAv6rUahiqVIwYIeJNWmzG8FDlL%2FEX310%2B45Mv1EgMlgF6f7EVNkSO0EKJaCRteXlIYbfb4W5K%2FAyK0O9NQ0GQhoXpw0WMherzhig33kihTV2PsI9ysxqwthpeWlbQAE7tEZ5Xbm1SZHO0LV9k43BI%2FFX5W7ThIEl36G96%2BOS9WxeBhBFhtZGwxApCluo%2F92PesYdEcajS3Mmsn1tFgIXI2C%2Blx96yhmUCXxSgMXFqbPvuPiyRyyniLrl1rv7KXzQidNttOG1BptHIig2KGQ0hZhNazndJ1fn8u%2B0W703OctsokccbtAKY5F%2FEMI27mSBN9goTtN4%2Fgo%2Fyd4bbWE43flNOhpzqzow8eQBw%2BqiTSzn85SbzElpmKXv3mXdCHWB8rCA%2B%2BhthViK0A3Tq1ogAoyFuhT5XuQ5VuOIiS90Qvx1iboFQr6GtPDyHPYzgk9Ny02Pj2UKwNIxu71BjE1oFzpflyioy4Gj4yZHJQvGVbZVoxR%2FKWBa3YWQ0CbqshrXOeXJJBCemE5XHiNNZ%2BPTKUsWgYz%2F4ArDeCOYPw6Q3VCeRQ0WcVMPEZ8C%2BmLcXXjjOphvloiaQXtjSh%2FKp%2Bk%2FkybFB4RrLNqaHxvzIRtafLjjPIlXyjXZeLWSmlYnUmzPajJv2I1sx7ox%2BLoWvc8wOW5FQeZUMwH9PAItIY6GPo8HLLqSMua0Axt66Nysfbfy0VUm1xpxXf8cpm7MmwqxHtzWFlE4XAsChQHpvP%2FVLjxSsw4DYqJdIAtiU%2BQOxflrpUjJlmOHgP%2B6agKzNl2M3VxxhjbdA6GIKwS9%2BoRzN3Rxikyg4QCUU1XgHSLNkcbtFouCNRt3IqDcc32kx%2F6BfFb9SPm%2FWvJf10A8zvj6VeFr3Jv4sKOiQO66GuDwJmhaueHZ6kG5smLEYwG7BLtNlyZdaMFpgafU8aHGv%2F6h7wzKm%2F6MeipsDEV1eCEppxQddJN%2BzKHc%2FczOSCniQeHur1O0jyEGZrdwPuuY41SwFcYaIctWtM72IaNsjUIdnRH8bBgAkFt4i221fIqpCfyLH%2Bv4unZJ0lBe2l0fF3WEX9UgaQpvY83T0YyEzzM%2BUOJ07wK%2FNpLlkMWlOCXLLXfNDfmTEDZGE2nGtD5XV9zNMgRfqnz4KG0kuQJuhpaIxoSQInw%2FWsFE5TaPhPIVEkSCuXKX2UFVi9lRQOnLGUlrJReDxOmO7HMd1BJqnoMtb4wdbR2mmRGVkreGGnrkxO%2BHQ%2FfsXKnJ6B88iiYceLKz19e3shl26ixEelG%2FN0CrscYErl0KVNrUuACBxFQ539c0V9HpxRWZPT%2BaK1wLflsioXsDKrxZEipuOSAmJVZfUY4COyNy4mque%2B6dDtoEpHCFXLLxBgyDK1XHTRvdjcRntIyYr5wUB9qdJWp54gWdEH92q2UCPMtqutZR%2FnJkQopB5iOlEBbWt%2Bsyh1KLmEPwKhPYsmSfXtZVI%2Fq%2F%2FYvfgcDmXRQMcBe4lPF6wKIlob9leS%2FuBaIL6ii%2FLDYODLcnatVAnj5xBYiaiRxf8YA653bTcTrDtqlHSskKnFz2xw9HAvPCIm7%2FCvH%2FKgfZjXNUZTXIkUOPHyRMRhCkvVdwTFMUdCIP64cLbgzi8rMI9oxZ8M8V5ylZRNzEuLzY1URPuGsuz5BOakE7t20Qw6LSbXbw7KqU%2B%2FSnYwUKTQBiHoajj6u7VALS0JxPBYEoxe6%2BNQIp43x4YV5olREFB25tTR1xSlR6AgtNvbvd7%2BLVUTsNuE%2Bbys02kMx0tcaNiP6921GmrG%2BQfPNPOK1NIo6KxtZakpkLte55oZIagJFFP8wGlWtJsVPx9svkI2pW7CS8JGbdAmYTArXQ0LzLD4Ecd%2BsGCfT0nOcC6A5iMfW4hF7egkJjgRi3MCzwOIfbJrm8fV6ay89goECaUI4jhbXxW6lsrX0E%2FmIPgv03Tm1Du2v0giz0BplIXK9yzrABkkE6VuViWGzkovUyGrVc9zcriQ8N1LVHGl%2FBIzdUUShWgQa4riW0xP%2B%2BcljUIf%2FWcOa%2FsSqCVa1vOGglrZ3UeKnnYLdYVBl1FOv%2Fh9xR%2BVo3IlOHDvSdSq%2FQyI9P9%2BuOjexqgzhyBiDSvAVqwIpwsB7cHH0YhiabZF2a4Hy4rgcmoeD5p8uMt9ow7pyENQnGWTLrXxl4Fwwkmei7LHdQUcfMZLeYHxtsE%2B%2FjyRtf0SQRToaTPRdph16tnkfB%2Bzt8kVfkkVPXwaLG04wdiQ6%2FwFAaj2scgUfvgOWbPdGOBaxN%2FtKuapjKG2ZzK2n3T0WvxH2b4yZM8pPdJhy7Nl7hfHiWwONPLB3lR6BxNuecxIKL7UM7%2BGoVUIoy9IJPwKehY2qiCcg%2BPoANGzfNVvGPx82uk0xbdYbbMVdWrqxLIZnZSLB9ZOMwH6RMmwlXXAhnmCgg00xW3gltdPo1eQiW4teqdV%2BXahlPVy%2Byw2AE2SPBjieAhOtlnGIwJ0ti%2B0Z52I3awgMAfol3n9xW43s9DK3dbf4DYnhKC3IgnmvcJ96Xy%2BebAFBtRC3IkiIBvDi73ihyPiShu92vjNGJVzQ5hiOHBy6FzJQAVtLlOnauVZAZSOIb65cHkBHmW4oJZZwBU9x4zFzGetQV%2BJQ783EzOhSEGeM6jiJgwlzW9K9dwvOUt0POReYrwgmMYgXi59G3D%2FIPmJEDbwZUgmHuEsp79IyOW2AfxQWNL4XH0QHle8GG%2B1kTaDHh4R904vnQyMoQLUDLHGc7AW70E57Ux8LmC6RuQzkMCZj42VmOhtQS5INDHGo7XG%2B5MOXz7CH4fgRsunghmkSZiWFDQDH1g3Aji14w58vpLzHqfYPgMB%2FnsSmg0e6zMTj4%2BRdDG2uJEwW0kAjczV2Ion6GMoL59QrvrpMv1%2BOu2YkdIDVo%2FwrIIAPUVQv4%2BTaGFIemcw91fcGC3ka0pXWPu8wvZS6%2FO3L0%2F%2BA9OfxP8%2B%2Bf7vD9Zv03%2FfrP9t%2BV8%3D%22%7D";case"c2-field-devices":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dVfHsuS6Df2auxyXclgq59BKLWmnVs45fr3ZM%2BN6XthVKooAQfAQAAHyB%2BV%2BUPHqux8EOvJlrcfhB%2BV%2FEAT%2BFwRawM2HdMzqofzD9j3xF%2FUdQMUfVPiBmB%2BU66%2Bi7nIgWo3r9kdMr9ucw%2F4o6MH0os6zPyMIhBC%2FIPQXQnkQ%2FYMyOAkaCP4XiuPxH%2FmkzIf%2Foeb%2FoNuSv8j%2B0Ns95X%2FoLD%2FqNP8N9TdOBPp%2BKJfVSbkkPSCGpP8rK9Z5lwGOe69b3q%2B%2FZUXQ8r91%2FENzyH8zv0T9d1sdQJpiv1LkV%2FHV9Sv7RwgVyGBZUnzFBJteehmrT8qOfhCWsyMqQAfQm8ae%2FPiFkVYR7zIFZjZ7iAK%2B25oMj3l1psp5dn8cfjKDJiCOgGyp5Q0wEbVt445KHluOu%2Bx5aCkpNbhLHc9rLdgQUrAkcqmq6%2BS0DCv2wITGqEnyLUjSHDQ1zDvnBGueKAblxwkSoctGzE4%2BkaF1%2BbrfqcSkqtFfMU%2BY1JPowS6alw3Zp2xs%2BP1YOIzq75CzSCswzbV9nbmKi%2FTH611nPZYipF%2FKltjmIZp4qHAcoS5LW0jXYYbNRaodWhfiUCMplyH5zsXzplH3y57JrqKKbWFEk1xbNYHkw35HW4%2FqZRMckSisviLOoUa%2FKu8QvWBvLIJxOLSUobULOYZAV%2B2dBhVf6oXCPWSLmy40SvDYD5e%2F6alAe4pohWGljc9zCY0z8WG6OWyQuTrTgmhjo1yn3n5V%2Ba9KxgvqmN2v%2F1MdZuUEUQN3XFQ4CLPVXyXXq3wQt%2BzRSkZ8gU7eTRmdhMtRvT4xm3jXAE0%2B5weoEHdw1ZgX9IF0LlBfpJ9IefwJ1xI1J5dbb4vSsJAsNE1RPe%2FTpR8Infx3tSnifinxNM3TfquIu6%2BDOKdTFrh63yKmB9YKs3Awrl32waZWbfoQRK1dCaYdr%2Bo5ACZcN2D%2F028xlxA1X3TaRMwjtemidz6R1kUviXMSbT3eXX%2B4K5E5bULP1ehaAuJiJti6f9UJry7WFhjIB9AcP5WiKHIoptUiVE0%2B6ZfpJDDcyGoQ%2FRrCBppa6%2B7h8nItK2kidxaxe2zV8mRxm6ASdUAojH3rtXrenMrn5ync2pu1Xu3Jml0t9NyZRTXjGKGmu8ol9Po5aQxWGoVeucpUnRgBwWyTqWJg9YZfi5JlXk5DbEy%2FvgxYmrRybDuIh%2BHXWWGffJKweBs0iJAu%2FNgtsUVfCGdK7QV8J1rCtdjGCxhKPQYBoSiklynJEfI%2BVlMEcc5egPycMs3aPUKLtxvOZqXgKsYw4Ny08WbkvIS6yl8HjEkVUANVTuZlN8TccRJRcgORuzjLNxgBq3k69O4UeFuxzE%2BQgojqnKaQ%2FRyKFMen1PPu3kips8yj1hn8ge6znuBTmDYNf%2BtcyX3BHLOIzOj312mUZRDyAUJTm6unwbYX1CTw1sOUOxLEuqjrRcHNTZFRxtMG8oQU4wvW3JYumULWHpbf26JzUMfYjB7K00NgiBZGbJ6oTHnlkPdW2nAW6ZB1NF60bWgUVKcZ8qdYUq2NkOYJSWXK2OqFmFShpT7TZts34AQlFWGZxWtc5xj4wYvWBVwkKDST8PIypJ%2F5XUtDpBAtsVmHS9IZC6WJ3WWfHRrOjphlUVDzWnOcG5fjqHu3y%2FTWJiF95KE4j9%2B5L1tyUmMJ9zR0Az0CfPC7iuPvx82n1W%2FjQnX99TaI75l0diBPQvhcJoiBVog3N4cY4kaiNqV7zLKVl0BgY5ci4pOmqjolydceokluqdNI97Kc5A1pjKvS4s1Un1pDwLDYTrRvktYwFi9KxutzjucUIXnL%2FbVjT4%2Fob7Ixeo%2B%2B8p167xyX2Ri7YM9J3XscJGrNce7EjiPMvO7TNa4zKYWmCX1kPK3focIevEmscrbTzrZh6HiQlw9gFmgNHAHb8TMeugNpSa%2B%2BBsd8N8VnK9rUrOeP91SgCOQvX1xRR9eEaA9rwTBXJfk4H9cIO9n5YLVW2NTEnAjrRDFkjKZoVCQwMQozOlhG2GS%2FipzWNJXA3RBSaRgjZqJ9dLP5wKwaiDBt8XU2JjVzYRsg9mtGKLyyvwwWGJwNlvh32WTXOzuMr8pEziEJdEYn%2BByDI21%2BPEuwoaDcKDzXfedvUKdZHXODJglDkXkQ69ZYjcKRiaXPeP%2FOpctY5TnVmjHlJFj6HYqf1RVp3hDbRcS4Lle%2BoIhE7HHTxFgz2N9lnfXtI1y2v%2FFW4Bqg%2BIqX6K38xwhQXjWzsaYGmANp6sPzWoSKtKxLXW1%2BeIu4Qj7DAh14ROyUbMGgZJoUGLbHJkPJjoxIyc1BNsWgmGy5bLPXJJLjoIQLdVpj8riIc8Y6ODGcvoO9JqoejO7eoz7Zdbr3I4LvJ4cfp9XY%2FdgsNs73LjA%2Be%2B71hA5vot9d9RACGPa%2Fx4rdtXy5DbVLjDm3FBtgygPZAb%2FAUNaRqjOTvHR45rGKXZSxf4oxYxIwse66GIuCeGAHPhWMIMT1wqRvpWyOWaHTfNTvvmjZ2nGbrfW78UGJ9lA4UHjBTaVU2uw1BTiPTmqexlSNNx2VmXr9rGMc3c%2Bg%2B8NGRfQ384lfQ7G6UlGwbC3w99iJ4ebuxdOR6WsQMsEcOF7GZ%2Bp2YPwdyc0FbgEoJp%2FeAuMspe6N0xPOA8JA1FzCYg1VJkx3ph0iElJWi%2F1RD4tiH%2BVDQCe%2BV%2FDV9OVi81DSA5XamMegi80hNfepQ8xi5%2BEsf%2FFvc%2B3mntOTXXlxTHuk%2FqqvwnOTRzdUodwFoQViRoQ%2BVZwQUodlOQEOtgjzR0pWSjPt7zSWfBpNxFUi%2BPOIXnxHtbu1YPotL8phsVdBsV2qZWg1t60diuTVCA4qE5yfnhTJYUPTlsCYF25dLKEQen%2BpRUJDNuSX8agRobL0pSEFTuKgMF8jy8QQMSoah5TeshK3a%2BYKANBRcuZ2TPIZrOaEwiBnsZ8ARdy%2BbWCQYjwgEo8DFxftQPgDgbWoP9nwPJvxY7Rg8Ekzsltr2mavMDFr5ct77dN5eGlTHl0fsUjOynM3J62WgNB%2FjcTrpgKvG1WQn9Uq8MpTIUd0D57ctsd9kKelsW%2BGTpCwmToKBCRLf6jvjRg8K0CG%2FnvV%2Fs9DAbD%2BvhV%2Bc%2F4N%22%7D";case"c2-field-protocol-gateways":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dVjHDvRIbn6a%2FzgL5XBUzjnrppxDK0tPb2lmF7YBG2hUt1gsNuNHlv7AzB%2BYv4b%2BDwQcxbI20%2FgHZv9AEPgv4F1fajFmU96M1T9kz%2BX%2FIr4NmP8Dc38A6g%2FMDFfZ9MXLWk%2Fr9g%2Bb2nQFg%2FwjYHiPl02R%2F7MDARD2FwD%2FBREuQP6BKRR%2FFwD8F4xi8T%2F8SVWM%2F4eY%2F0e7Lfm3Zv88b%2Fdc%2FPOcF0eTFX%2Br%2BreeEPB9YCZvkmpJhvdhTIZ%2F8%2FJN0ecvxbnXrRjWv3n5dxWSrTiT%2B78JDPS%2FqN9T82%2FD%2BlfXDPkrg%2F4qP2l%2Fzcu0TdnU%2F1X9D3aYw%2F0rzv5AtILwBwIuY3%2Ff1TYUrmXFy2%2FoQWs003IE8orRWQ6K0PU9xxf7Qa7AzVHq7NKlH2bWK6Gb3gV6ZfE22U34Vssm%2BKpJk%2F7a96TSGpaBCKHpjjVIDcxUFHV4X4heuSozxB7KHbRanvQg0yNESBrIL8LcPA89oEDkTwHtVakbx55fDlMM7t7u4z%2B5H5h%2BpyC3VCBSJM4ETFY%2B46n7IKhMHRu5PEjOA2P5OZ8EGEhnUW%2FPFngQQULj1bNO3uUijd8ir8aso%2FMRurThIAvcvRvrqGSRmd4x2D0iKhP3tRjKBhAEik33ANlU%2FJQ5oV7IOUGImLgz24KcBZDdD0ryDHP4hzVlyC%2F8vfn8S%2B1e4p%2BwH3YmK3AGDojvv9PnzlzPEXWyPHAKVTM%2FldphaBdwZr%2Fd8GUYYmGBUU0wmdScx8rBlOGHNcMEnPMu9FUwM6PNswTCHK0%2FaLXFAy7r8SePrJP7HndUkinMeAhjXuny4zXLwfq1axplSTvmhn1CsrGs3Z9YHQPfG2JVa6w281wOONJY%2BHUbBE6ew%2Fhsc%2FJ0uGw17KzyK4YD8jEPPD4V9NYWLOReEiNzz9gPZp83f%2BizZvDi644KJIOCrhMYokgrlZRBkkA4DmXfIci948XFn%2BQP8%2FlBtwyb7QADTf34MRkIkb58OjBUIuPDlmOdKxMmAFPOKvlMi9oYA9m0Wr0KO3XBjSFM2EGtzbASgXiQ014V25m1JO3AO8oAf8w8rn1%2BUDafIcGgPBFdYRPtningM7VKQ4iFUF7%2F5WtGJl57LjpAKgfLW2HTW3xRMpcmDN5e%2B0jhcxLctAwn9bhFyXllKlxn9HDNPCvH%2BIGgDSdiE1qswbIVecDUhbvF6Y8w4FxW0KqWjrxU6zPlOeATBZwUYgt3TdWsU9VmrU7paG%2BN0a5rweMsSEWV%2FLqkrkLCOoEMUS0GSchcZxhdPh2yy%2BTTJb36zfVCOuyoEQqEOxmUuJ2i8S3eLgHa9XR9bL%2B65VoqoAoOsk4U4OBk0PLGtWMt5zUQrZCU33pFu2lxntBecLPyi7M6YCQEj%2FaLejS4%2BJA7c2IlR3cIdsMv4XYNnboYuWSQdLod7mDUmKfISFzkMU7U2FKi7nJ98wrvkjs2sNjYe4Uq9JoEQeeH54Hvljr9OhY4xidQ%2BokTB0pxG1yo%2FcZGDrX7%2FWC43I6buafOLD08gGh9qdgTdkiGk2WsUZfFYFnYIW6Vl6HBeKDAxQWBoSdJI3OL3XVcdaNVhyPuROT1BCRPxI6zIBXtdb7LinNwrf15Za65ZiZMI5IzIeJa2FfnCz772I9JNMTpv3ojuJwC9usJL1kOVu24PqoP6%2FPS0oEvOTl9rRC%2Fqp19asRkF%2BJUJCWkPimGMZ6Ed2fzp9%2FQOS%2FoZ0VNW2SWbdeJMbR0bS2rkoD%2B8jzQXJ8xSquvZC9QYtPs2lAj8vZD00EkGnde2urWPZPpJgknfFClaUmsU8h5OeBOge2m31nnh0iykizakamJDWsHT2EnYEgP%2FxrFiGq%2B6tOIpZfZshw4L4XBneiX%2F%2BcagbRDW18xaMvu%2B65JzM2lsqEHgSmQ7UqBeeFnTG8frpEw76%2F5wFJucxVr3VALWYcRFuHGc2wJzderUoxhqwKg02%2FhtY8v36gzAg7%2FsmeAwKUo8aEu8XeDfxpcAUlT1axmBLxV%2BblaMOUS5C5Vq%2B1IZf2enNkEu%2FULDrfRigncEAEUrWyjSzimLTNFO9vqyv4JIxWrJY5CkcCPUER3l1cPMsK6oWpFj%2Fzr3DoDok14u4limCzb%2BF3mSGnm55gsPl9HrO2CkbGLghHfdCcBWvh3KOG7vxsvLVM9Yb4ZPSq%2FCkLXX74lOW%2Bo2HrV2ZfhT%2BwNriHwGtvfjOCqRMRJo9hmeigx3k6BIeLEUeVsktuBYBaUMxT%2BJMO3F%2F2oQIx%2FG3Xb37HyZvqXMwXKvTLTvIXSsNDZrjAnoe4ebaDpS8rWadKCI3Ajsn9DwQPC%2BIK15QuvR%2BkbiUbuiyO%2BSYLO1p7k%2FspbJrgxdfaVEGVm%2Fb0d%2FlGaObX2gzgfymvWpX1gM56F12A6lmxBuTz4yp5Ak4ruS0LI5169eMOl8HOJb4MCcJ1L6hVoW7BPkieftwERbyj%2FaqHLIz%2FQhyjFBj%2ByY3GcqChB5dkG%2BGB9Auxl4UJ8wpTUlQtgLNbYA9LxpRaK6rR6pqiud6rJaiyKPwbxOynR%2FDH2TFJ2rDojh4Q8KpVB0HltvyZ87BlcFJOD7FawLadhNBOofdn2h52D347IT1TnmwNEhAzhHM3Pqx%2BAMrhYVe1cHFGK27szzfqklXiEDYFiv2MWFhvz66V63FMEgYBBef0mXRHfEuCFdtNPan5AXADnAo%2FL1dnoKgP37Yo2cyU0EtTjq8rLsBHNriZyN2psOzBFXCJmxA%2FGPE0DC83R%2FsjjZEEhh1ELrVwyFBcdAQGTL%2FK%2FPqzF9Ek%2FDN5s%2Bh1M%2BS%2B4ZSSxKjLJ%2FTd0kcTGjmf6EOu4IdFLIOSzuA7jvju2l%2Bq%2BaHJxuNgPx%2B1VeQh7CtTPl2YvJCe8WzI29UhVALRgHRgCRdZCslJOT%2B2sDzsDYa3aOHbcNRo9sRpUkit2Rvu4dhFXfyKdvCpDIU28eXY4BPbHUF6nHWMgp1Ywp3jBYWU0Px5%2B62XV8aiEHK4GvZ%2FqYRYUH%2BjVvzvEX%2FziZyTdwdpbjKTg4bXFMOaJdf8O4atWLuyweB8YzqWSpiWpHsNnvW%2BKg4dlp5a0ZYRVB0Y7jEDRHE8P%2FQbTQ8y7AsOF1kw7XA%2FoNAgtUXkPMZ7p6tjM1fAtpFg%2FB7WsO%2FDaOWzimwDacNcaWDue1wCnxM0z6csg%2BB2AUGOpOVXmm0EnfDlwy1TKeEpvTEPDLro2Pe8oloU3%2B%2FVxFEARr2Tsh3gcq%2FuRa97T3NtI5rsN3CN8ncejFDhgG5hqauU48Xuumo2ivqC6YnK804bqveHwb3Sbhw96Tn1UBx4HjEhTkXXIBK8PtDUBEfLwEqj2ws74SUa34B2eodFc3wa4moebiKjDE18BXMWMM0ekUttqvMXHU%2FgH4JYpGQDzzgkbsgUKIr%2Ftjr4EpFp%2FoU%2FPD9SBXf3a%2FAnIGurDx1mwOM8FqKAUpMO0RACGHQU3sKBTfolv%2BINJuoRjRPvLu98VB8s5ZA8%2FqVv2oU4myLOfKEZQPyRX8zTPbJNqNCeXB8gKMoaVqZ0Ke%2BZIE3Ct1a2oWjyEW0Y4av6q7pX5Y7i68Ay66nuqGXZi0Cm7VqZ6%2BZLIS6bVSfoQYdtFoy6D0W%2F2A0eJSDG7Aqxf19b8pilTR4HFZGiMaOVsfakf7qyp5Amok6Nb1hlCdrPs%2FUyVNsEFxQokZjcu8wUEfwZWsDX7KEAItk%2FWR%2Fwz58DPw5tGL5xKKWGFRpyQ8CFhJyfB0ZA6fdPDl5QelyS%2FTAn7DlJdmHtnX7PwsbkmuV%2BWq9w78tvJMSuEWFyir%2Fu%2BRl71Qdr9LUNNfK2tb481sFyQxqL5vTyvxHAqfrH3e2GRv8TBbhrEj8xQGZomx%2FjLtB12Uj841kEjQaA1T6%2FvNhCIY%2BzC7qwXZAQEBr34FMEkAm3TpgwWoYWD%2BWhihPTbUBQTcg66RGLsJ6ky4E2YtaIxe4n1KwhZ%2BE4Qw9F%2FQo5DHSbIv3moq%2BaNiomnAeQ0VNP7Xr6pQYBxO9GNeH4Rt3kisBqvDSxgAuB%2BoyuNTqocB7u%2BnZaWlBrY3u9xGWEP8RNmDocsQYl2fK%2FTCVokaJCKltc6JKIQScBnTnyOs0jD5%2B7oLczFxoVVt%2FXM55rT2CcxRS5PReKu%2FLq0rp9k89pGcWTnYRnGbwdtTpvniT%2F7zJkxX6UX92ZJuLZsVPVApoUUtovY7IQzsflUXG7aBQ6%2BdvvnS4kyTHzEKzroAqUk8SXPE6zPy51U7PMxxuFyrGph7TL1avqLluXLVFpGK%2BICyxAIV%2FxD5IAl%2B5BMzg7J39rhxRJrOkQAz%2FtLThmUEYf1haAEedmGFPk2iQei6coxWPfIHhVQ1qvrseO2dA2RQ%2FirY9KinmW0ccWmmuOHun3UGHI9THKgfH1krFqb2e0JGEereQb9uzzNQYzcI6wmfJdM5ddzKdIaH9t6qgOcCjGWtGUIPP8nHHkC4u2eO6Yt11WBv%2BO%2FcfPkNogDbqKtQiKtIXUw3EGIy3V4IT2f2UFcbttov9MEb8aI%2BiUwd%2FJ9zYICidpX2Xh9y4ZilNXO1wFtlNn6Yv6uhIzD%2FoKv5TSqS%2FqeGFQ7R6S4mSJCS7qHwrpfmvNzBZd9Esdf55YfBkAmp0SdqOAHcow2nVJ2eMzrHKXFfLfvQUBnAj1lXYaLCPHIR1Dm9IvOB%2B%2B5eJFDCx2lEeGHiXwTIPyByX9e3fznxdNL%2Bve7p78p%2FwU%3D%22%7D";default:throw new Error("Unknown viewId: "+e)}}const t5=Object.freeze(Object.defineProperty({__proto__:null,drawioEditUrl:e5},Symbol.toStringTag,{value:"Module"}));function n5(e){switch(e){case"index":return`@startuml
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
rectangle "==Demo Stand Current Monitored Scope\\n<size:10>[KNX monitored signals / current read scope]</size>\\n\\nТекущий набор сигналов demo-стенда, которые читает Edge Telemetry Agent." <<DemoStandCurrentMonitoredScope>> as DemoStandCurrentMonitoredScope
rectangle "==Полевые устройства и контроллеры\\n<size:10>[Field devices / PLC / RTU]</size>\\n\\nДатчики, актуаторы, PLC, RTU и локальные системы автоматизации на объекте." <<FieldDevices>> as FieldDevices
person "==Сервисный инженер\\n\\nНастраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы." <<ServiceEngineer>> as ServiceEngineer
rectangle "==Протокольные шлюзы и SCADA-контроллеры\\n<size:10>[KNX / Modbus / OPC UA / SCADA]</size>\\n\\nТочки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы." <<FieldProtocolGateways>> as FieldProtocolGateways
rectangle "==Edge Telemetry Agent\\n<size:10>[Edge collector / normalization / buffering / delivery]</size>\\n\\nУниверсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий." <<EdgeTelemetryAgent>> as EdgeTelemetryAgent
rectangle "==Monitoring & Alarm Platform\\n<size:10>[Cloud monitoring platform / alarm engine / operator UI]</size>\\n\\nЦентральная система в облаке/интернете для приема событий, хранения телеметрии, визуализации, alarm-логики и маршрутизации уведомлений." <<MonitoringAlarmPlatform>> as MonitoringAlarmPlatform
rectangle "==Каналы уведомлений\\n<size:10>[Email / SMS / Push / Webhook]</size>\\n\\nEmail, SMS, push, webhook и другие внешние облачные каналы доставки тревог и служебных уведомлений." <<NotificationChannels>> as NotificationChannels
person "==Оператор / диспетчер\\n\\nРаботает с событиями, текущим состоянием объекта и alarm через центральную платформу мониторинга." <<OperatorDispatcher>> as OperatorDispatcher

DemoStandCurrentMonitoredScope .[#8D8D8D,thickness=2].> EdgeTelemetryAgent : <color:#8D8D8D>[...]
FieldDevices .[#8D8D8D,thickness=2].> FieldProtocolGateways : <color:#8D8D8D>Передают телеграммы, состояния и команды в KNX-сегменте
NotificationChannels .[#8D8D8D,thickness=2].> OperatorDispatcher : <color:#8D8D8D>Доставляют уведомления по alarm и служебные уведомления
MonitoringAlarmPlatform .[#8D8D8D,thickness=2].> NotificationChannels : <color:#8D8D8D>Маршрутизирует уведомления и эскалации
FieldProtocolGateways .[#8D8D8D,thickness=2].> EdgeTelemetryAgent : <color:#8D8D8D>[...]
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
skinparam rectangle<<MonitoringCloudPublicCloudMqttIngestHostGrafana>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<MonitoringCloudPublicCloudMqttIngestHostMqttIngestionGateway>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
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
skinparam rectangle<<WhitelistedRemoteHostDeveloperNetworkEdgeHostGrafana>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<WhitelistedRemoteHostDeveloperNetworkEdgeHostCollectorRuntime>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<WhitelistedRemoteHostDeveloperNetworkEdgeHostMqttIngestionGateway>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
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
rectangle "Monitoring Platform Host" <<MonitoringCloudPublicCloudMqttIngestHost>> as MonitoringCloudPublicCloudMqttIngestHost {
  skinparam RectangleBorderColor<<MonitoringCloudPublicCloudMqttIngestHost>> #A35829
  skinparam RectangleFontColor<<MonitoringCloudPublicCloudMqttIngestHost>> #A35829
  skinparam RectangleBorderStyle<<MonitoringCloudPublicCloudMqttIngestHost>> dashed

  rectangle "==Grafana\\n<size:10>[Grafana OSS / grafana-mqtt-datasource]</size>\\n\\nСлой визуализации Monitoring & Alarm Platform: live-панели, инженерные dashboards и операторские представления. В текущей реализации подключается к MQTT Ingestion Gateway через grafana-mqtt-datasource." <<MonitoringCloudPublicCloudMqttIngestHostGrafana>> as MonitoringCloudPublicCloudMqttIngestHostGrafana
  rectangle "==MQTT Ingestion Gateway\\n<size:10>[MQTT broker / ingestion service]</size>\\n\\nПринимает MQTT telemetry events и service topics от edge-агентов, восстанавливает routing context из topic, валидирует payload и передает canonical events на хранение и в Alarm Rule Engine." <<MonitoringCloudPublicCloudMqttIngestHostMqttIngestionGateway>> as MonitoringCloudPublicCloudMqttIngestHostMqttIngestionGateway
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
    rectangle "==Grafana\\n<size:10>[Grafana OSS / grafana-mqtt-datasource]</size>\\n\\nСлой визуализации Monitoring & Alarm Platform: live-панели, инженерные dashboards и операторские представления. В текущей реализации подключается к MQTT Ingestion Gateway через grafana-mqtt-datasource." <<WhitelistedRemoteHostDeveloperNetworkEdgeHostGrafana>> as WhitelistedRemoteHostDeveloperNetworkEdgeHostGrafana
    rectangle "==Collector Runtime\\n<size:10>[Python service]</size>\\n\\nОсновной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox." <<WhitelistedRemoteHostDeveloperNetworkEdgeHostCollectorRuntime>> as WhitelistedRemoteHostDeveloperNetworkEdgeHostCollectorRuntime
    rectangle "==MQTT Ingestion Gateway\\n<size:10>[MQTT broker / ingestion service]</size>\\n\\nПринимает MQTT telemetry events и service topics от edge-агентов, восстанавливает routing context из topic, валидирует payload и передает canonical events на хранение и в Alarm Rule Engine." <<WhitelistedRemoteHostDeveloperNetworkEdgeHostMqttIngestionGateway>> as WhitelistedRemoteHostDeveloperNetworkEdgeHostMqttIngestionGateway
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
WhitelistedRemoteHostDeveloperNetworkEdgeHostDeliveryWorker .[#8D8D8D,thickness=2].> WhitelistedRemoteHostDeveloperNetworkEdgeHostMqttIngestionGateway : <color:#8D8D8D>[...]
WhitelistedRemoteHostDeveloperNetworkEdgeHostGrafana .[#8D8D8D,thickness=2].> WhitelistedRemoteHostDeveloperNetworkEdgeHostMqttIngestionGateway : <color:#8D8D8D>[...]
WhitelistedRemoteHostDeveloperNetworkEdgeHostCollectorRuntime .[#8D8D8D,thickness=2].> DemoStandRemoteAccessPublicKnxEndpoint : <color:#8D8D8D>Подключается к стенду через whitelisted public KNX/IP endpoint
MonitoringCloudPublicCloudMqttIngestHostGrafana .[#8D8D8D,thickness=2].> MonitoringCloudPublicCloudMqttIngestHostMqttIngestionGateway : <color:#8D8D8D>[...]
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
skinparam rectangle<<WhitelistedRemoteHostDeveloperNetworkEdgeHostGrafana>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<WhitelistedRemoteHostDeveloperNetworkEdgeHostCollectorRuntime>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<WhitelistedRemoteHostDeveloperNetworkEdgeHostMqttIngestionGateway>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
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
    rectangle "==Grafana\\n<size:10>[Grafana OSS / grafana-mqtt-datasource]</size>\\n\\nСлой визуализации Monitoring & Alarm Platform: live-панели, инженерные dashboards и операторские представления. В текущей реализации подключается к MQTT Ingestion Gateway через grafana-mqtt-datasource." <<WhitelistedRemoteHostDeveloperNetworkEdgeHostGrafana>> as WhitelistedRemoteHostDeveloperNetworkEdgeHostGrafana
    rectangle "==Collector Runtime\\n<size:10>[Python service]</size>\\n\\nОсновной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox." <<WhitelistedRemoteHostDeveloperNetworkEdgeHostCollectorRuntime>> as WhitelistedRemoteHostDeveloperNetworkEdgeHostCollectorRuntime
    rectangle "==MQTT Ingestion Gateway\\n<size:10>[MQTT broker / ingestion service]</size>\\n\\nПринимает MQTT telemetry events и service topics от edge-агентов, восстанавливает routing context из topic, валидирует payload и передает canonical events на хранение и в Alarm Rule Engine." <<WhitelistedRemoteHostDeveloperNetworkEdgeHostMqttIngestionGateway>> as WhitelistedRemoteHostDeveloperNetworkEdgeHostMqttIngestionGateway
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
WhitelistedRemoteHostDeveloperNetworkEdgeHostDeliveryWorker .[#8D8D8D,thickness=2].> WhitelistedRemoteHostDeveloperNetworkEdgeHostMqttIngestionGateway : <color:#8D8D8D>[...]
WhitelistedRemoteHostDeveloperNetworkEdgeHostGrafana .[#8D8D8D,thickness=2].> WhitelistedRemoteHostDeveloperNetworkEdgeHostMqttIngestionGateway : <color:#8D8D8D>[...]
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
skinparam rectangle<<MonitoringAlarmPlatformGrafana>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<EdgeTelemetryAgent>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<MonitoringAlarmPlatformPlatformApi>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<MonitoringAlarmPlatformMqttIngestionGateway>>{
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

  rectangle "==Grafana\\n<size:10>[Grafana OSS / grafana-mqtt-datasource]</size>\\n\\nСлой визуализации Monitoring & Alarm Platform: live-панели, инженерные dashboards и операторские представления. В текущей реализации подключается к MQTT Ingestion Gateway через grafana-mqtt-datasource." <<MonitoringAlarmPlatformGrafana>> as MonitoringAlarmPlatformGrafana
  rectangle "==Platform API\\n<size:10>[HTTP API / backend service]</size>\\n\\nBackend API для состояния alarm, истории событий, конфигурации правил и политик уведомлений." <<MonitoringAlarmPlatformPlatformApi>> as MonitoringAlarmPlatformPlatformApi
  rectangle "==MQTT Ingestion Gateway\\n<size:10>[MQTT broker / ingestion service]</size>\\n\\nПринимает MQTT telemetry events и service topics от edge-агентов, восстанавливает routing context из topic, валидирует payload и передает canonical events на хранение и в Alarm Rule Engine." <<MonitoringAlarmPlatformMqttIngestionGateway>> as MonitoringAlarmPlatformMqttIngestionGateway
  rectangle "==Alarm Rule Engine\\n<size:10>[Rule engine / stream processor]</size>\\n\\nОбрабатывает входящие события по правилам, ведет жизненный цикл alarm и инициирует уведомления и эскалации." <<MonitoringAlarmPlatformAlarmRuleEngine>> as MonitoringAlarmPlatformAlarmRuleEngine
  rectangle "==Notification Service\\n<size:10>[Worker / notification gateway]</size>\\n\\nМаршрутизирует уведомления во внешние каналы по alarm-политикам и правилам эскалации." <<MonitoringAlarmPlatformNotificationService>> as MonitoringAlarmPlatformNotificationService
  database "==Telemetry Store\\n<size:10>[Time-series DB / relational storage]</size>\\n\\nХранит телеметрию, служебные события, историю alarm и данные для мониторинговых и операторских запросов." <<MonitoringAlarmPlatformTelemetryStore>> as MonitoringAlarmPlatformTelemetryStore
}
rectangle "==Edge Telemetry Agent\\n<size:10>[Edge collector / normalization / buffering / delivery]</size>\\n\\nУниверсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий." <<EdgeTelemetryAgent>> as EdgeTelemetryAgent
rectangle "==Каналы уведомлений\\n<size:10>[Email / SMS / Push / Webhook]</size>\\n\\nEmail, SMS, push, webhook и другие внешние облачные каналы доставки тревог и служебных уведомлений." <<NotificationChannels>> as NotificationChannels

ServiceEngineer .[#15803d,thickness=2].> MonitoringAlarmPlatformGrafana : <color:#15803d>Настраивает dashboards и проверяет поток телеметрии
OperatorDispatcher .[#15803d,thickness=2].> MonitoringAlarmPlatformGrafana : <color:#15803d>Работает с live-панелями, состоянием объекта и операторскими dashboards
MonitoringAlarmPlatformAlarmRuleEngine .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformNotificationService : <color:#8D8D8D>Запускает доставку уведомлений
MonitoringAlarmPlatformAlarmRuleEngine .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformTelemetryStore : <color:#8D8D8D>Читает контекст и записывает состояние и историю alarm
MonitoringAlarmPlatformMqttIngestionGateway .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformAlarmRuleEngine : <color:#8D8D8D>Передает нормализованные события в Alarm Rule Engine
MonitoringAlarmPlatformPlatformApi .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformAlarmRuleEngine : <color:#8D8D8D>Читает активные alarm и управляет конфигурацией правил в Alarm Rule Engine
MonitoringAlarmPlatformGrafana .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformMqttIngestionGateway : <color:#8D8D8D>Подписывается на live MQTT telemetry и service topics
MonitoringAlarmPlatformMqttIngestionGateway .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformTelemetryStore : <color:#8D8D8D>Сохраняет canonical events и служебные события
MonitoringAlarmPlatformPlatformApi .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformTelemetryStore : <color:#8D8D8D>Читает телеметрию, историю и временные линии alarm
MonitoringAlarmPlatformNotificationService .[#8D8D8D,thickness=2].> NotificationChannels : <color:#8D8D8D>Отправляет email, SMS, push и webhook-уведомления
NotificationChannels .[#8D8D8D,thickness=2].> OperatorDispatcher : <color:#8D8D8D>Доставляют уведомления по alarm и служебные уведомления
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
  Edge-telemetry-agent@{ shape: rectangle, label: "Edge Telemetry Agent" }
  Monitoring-alarm-platform@{ shape: rectangle, label: "Monitoring & Alarm Platform" }
  Notification-channels@{ shape: rectangle, label: "Каналы уведомлений" }
  Operator-dispatcher@{ icon: "fa:user", shape: rounded, label: "Оператор / диспетчер" }
  Demo-stand-current-monitored-scope -. "\`[...]\`" .-> Edge-telemetry-agent
  Field-devices -. "\`Передают телеграммы, состояния и команды в KNX-сегменте\`" .-> Field-protocol-gateways
  Notification-channels -. "\`Доставляют уведомления по alarm и служебные уведомления\`" .-> Operator-dispatcher
  Monitoring-alarm-platform -. "\`Маршрутизирует уведомления и эскалации\`" .-> Notification-channels
  Field-protocol-gateways -. "\`[...]\`" .-> Edge-telemetry-agent
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
  subgraph Monitoring-cloudPublic-cloudMqtt-ingest-host["\`Monitoring Platform Host\`"]
    Monitoring-cloudPublic-cloudMqtt-ingest-host.Grafana@{ shape: rectangle, label: "Grafana" }
    Monitoring-cloudPublic-cloudMqtt-ingest-host.Mqtt-ingestion-gateway@{ shape: rectangle, label: "MQTT Ingestion Gateway" }
  end
  subgraph Whitelisted-remote-host["\`Whitelisted Remote Host\`"]
    subgraph Whitelisted-remote-host.Developer-networkEdge-host["\`Developer Workstation\`"]
      Whitelisted-remote-host.Developer-networkEdge-host.Delivery-worker@{ shape: rectangle, label: "Delivery Worker" }
      Whitelisted-remote-host.Developer-networkEdge-host.Grafana@{ shape: rectangle, label: "Grafana" }
      Whitelisted-remote-host.Developer-networkEdge-host.Collector-runtime@{ shape: rectangle, label: "Collector Runtime" }
      Whitelisted-remote-host.Developer-networkEdge-host.Mqtt-ingestion-gateway@{ shape: rectangle, label: "MQTT Ingestion Gateway" }
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
  Whitelisted-remote-host.Developer-networkEdge-host.Delivery-worker -. "\`[...]\`" .-> Whitelisted-remote-host.Developer-networkEdge-host.Mqtt-ingestion-gateway
  Whitelisted-remote-host.Developer-networkEdge-host.Grafana -. "\`[...]\`" .-> Whitelisted-remote-host.Developer-networkEdge-host.Mqtt-ingestion-gateway
  Whitelisted-remote-host.Developer-networkEdge-host.Collector-runtime -. "\`Подключается к стенду через whitelisted public KNX/IP endpoint\`" .-> Demo-stand.Remote-access.Public-knx-endpoint
  Monitoring-cloudPublic-cloudMqtt-ingest-host.Grafana -. "\`[...]\`" .-> Monitoring-cloudPublic-cloudMqtt-ingest-host.Mqtt-ingestion-gateway
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
      Whitelisted-remote-host.Developer-networkEdge-host.Grafana@{ shape: rectangle, label: "Grafana" }
      Whitelisted-remote-host.Developer-networkEdge-host.Collector-runtime@{ shape: rectangle, label: "Collector Runtime" }
      Whitelisted-remote-host.Developer-networkEdge-host.Mqtt-ingestion-gateway@{ shape: rectangle, label: "MQTT Ingestion Gateway" }
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
  Whitelisted-remote-host.Developer-networkEdge-host.Delivery-worker -. "\`[...]\`" .-> Whitelisted-remote-host.Developer-networkEdge-host.Mqtt-ingestion-gateway
  Whitelisted-remote-host.Developer-networkEdge-host.Grafana -. "\`[...]\`" .-> Whitelisted-remote-host.Developer-networkEdge-host.Mqtt-ingestion-gateway
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
    Monitoring-alarm-platform.Grafana@{ shape: rectangle, label: "Grafana" }
    Monitoring-alarm-platform.Platform-api@{ shape: rectangle, label: "Platform API" }
    Monitoring-alarm-platform.Mqtt-ingestion-gateway@{ shape: rectangle, label: "MQTT Ingestion Gateway" }
    Monitoring-alarm-platform.Alarm-rule-engine@{ shape: rectangle, label: "Alarm Rule Engine" }
    Monitoring-alarm-platform.Notification-service@{ shape: rectangle, label: "Notification Service" }
    Monitoring-alarm-platform.Telemetry-store@{ shape: disk, label: "Telemetry Store" }
  end
  Edge-telemetry-agent@{ shape: rectangle, label: "Edge Telemetry Agent" }
  Notification-channels@{ shape: rectangle, label: "Каналы уведомлений" }
  Service-engineer -. "\`Настраивает dashboards и проверяет поток телеметрии\`" .-> Monitoring-alarm-platform.Grafana
  Operator-dispatcher -. "\`Работает с live-панелями, состоянием объекта и операторскими dashboards\`" .-> Monitoring-alarm-platform.Grafana
  Monitoring-alarm-platform.Alarm-rule-engine -. "\`Запускает доставку уведомлений\`" .-> Monitoring-alarm-platform.Notification-service
  Monitoring-alarm-platform.Alarm-rule-engine -. "\`Читает контекст и записывает состояние и историю alarm\`" .-> Monitoring-alarm-platform.Telemetry-store
  Monitoring-alarm-platform.Mqtt-ingestion-gateway -. "\`Передает нормализованные события в Alarm Rule Engine\`" .-> Monitoring-alarm-platform.Alarm-rule-engine
  Monitoring-alarm-platform.Platform-api -. "\`Читает активные alarm и управляет конфигурацией правил в Alarm Rule Engine\`" .-> Monitoring-alarm-platform.Alarm-rule-engine
  Monitoring-alarm-platform.Grafana -. "\`Подписывается на live MQTT telemetry и service topics\`" .-> Monitoring-alarm-platform.Mqtt-ingestion-gateway
  Monitoring-alarm-platform.Mqtt-ingestion-gateway -. "\`Сохраняет canonical events и служебные события\`" .-> Monitoring-alarm-platform.Telemetry-store
  Monitoring-alarm-platform.Platform-api -. "\`Читает телеметрию, историю и временные линии alarm\`" .-> Monitoring-alarm-platform.Telemetry-store
  Monitoring-alarm-platform.Notification-service -. "\`Отправляет email, SMS, push и webhook-уведомления\`" .-> Notification-channels
  Notification-channels -. "\`Доставляют уведомления по alarm и служебные уведомления\`" .-> Operator-dispatcher
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
  "grafana" [
    likec4_id = "monitoring-cloud.public-cloud.mqtt-ingest-host.grafana";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Grafana</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Grafana OSS / grafana-mqtt-datasource</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Слой визуализации Monitoring &amp; Alarm<BR/>Platform: live-панели, инженерные dashboards<BR/>и операторские представления. В текущей<BR/>реализации подключается к MQTT Ingestion<BR/>Gateway через grafana-mqtt-datasource.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#A35829";
    fontcolor = "#FFE0C2";
    color = "#7E451D";
  ];
  "mqtt-ingestion-gateway" [
    likec4_id = "monitoring-cloud.public-cloud.mqtt-ingest-host.mqtt-ingestion-gateway";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">MQTT Ingestion Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">MQTT broker / ingestion service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Принимает MQTT telemetry events и service<BR/>topics от edge-агентов, восстанавливает<BR/>routing context из topic, валидирует payload<BR/>и передает canonical events на хранение и в<BR/>Alarm Rule Engine.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#A35829";
    fontcolor = "#FFE0C2";
    color = "#7E451D";
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
  "grafana_1" [
    likec4_id = "whitelisted-remote-host.developer-network.edge-host.grafana";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Grafana</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Grafana OSS / grafana-mqtt-datasource</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Слой визуализации Monitoring &amp; Alarm<BR/>Platform: live-панели, инженерные dashboards<BR/>и операторские представления. В текущей<BR/>реализации подключается к MQTT Ingestion<BR/>Gateway через grafana-mqtt-datasource.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#A35829";
    fontcolor = "#FFE0C2";
    color = "#7E451D";
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
  "mqtt-ingestion-gateway_1" [
    likec4_id = "whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">MQTT Ingestion Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">MQTT broker / ingestion service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Принимает MQTT telemetry events и service<BR/>topics от edge-агентов, восстанавливает<BR/>routing context из topic, валидирует payload<BR/>и передает canonical events на хранение и в<BR/>Alarm Rule Engine.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#A35829";
    fontcolor = "#FFE0C2";
    color = "#7E451D";
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
  subgraph "cluster_mqtt-ingest-host" {
    likec4_id = "monitoring-cloud.public-cloud.mqtt-ingest-host";
    likec4_level = 0;
    likec4_depth = 1;
    fillcolor = "#5a3620";
    color = "#462a17";
    style = "filled";
    margin = 50;
    label = <<FONT POINT-SIZE="11" COLOR="#f9b27cb3"><B>MONITORING PLATFORM HOST</B></FONT>>;
    "grafana";
    "mqtt-ingestion-gateway";
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
      "grafana_1";
      "collector-runtime";
      "mqtt-ingestion-gateway_1";
      "configuration-bundle";
      "outbox-store";
    }
  }
  subgraph {
    rank = "same";
    "grafana";
    "grafana_1";
  }
  subgraph {
    rank = "same";
    "mqtt-ingestion-gateway";
    "mqtt-ingestion-gateway_1";
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
  "delivery-worker" -> "mqtt-ingestion-gateway_1" [
    likec4_id = "h687yt";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "grafana_1" -> "mqtt-ingestion-gateway_1" [
    likec4_id = "107kgtq";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "collector-runtime" -> "public-knx-endpoint" [
    likec4_id = "14yh323";
    style = "dashed";
    weight = 2;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Подключается к стенду через whitelisted<BR/>public KNX/IP endpoint</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "grafana" -> "mqtt-ingestion-gateway" [
    likec4_id = "fktm4u";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>;
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
  "grafana" [
    likec4_id = "whitelisted-remote-host.developer-network.edge-host.grafana";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Grafana</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Grafana OSS / grafana-mqtt-datasource</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Слой визуализации Monitoring &amp; Alarm<BR/>Platform: live-панели, инженерные dashboards<BR/>и операторские представления. В текущей<BR/>реализации подключается к MQTT Ingestion<BR/>Gateway через grafana-mqtt-datasource.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#A35829";
    fontcolor = "#FFE0C2";
    color = "#7E451D";
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
    likec4_id = "whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">MQTT Ingestion Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">MQTT broker / ingestion service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Принимает MQTT telemetry events и service<BR/>topics от edge-агентов, восстанавливает<BR/>routing context из topic, валидирует payload<BR/>и передает canonical events на хранение и в<BR/>Alarm Rule Engine.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#A35829";
    fontcolor = "#FFE0C2";
    color = "#7E451D";
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
      "grafana";
      "collector-runtime";
      "mqtt-ingestion-gateway";
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
  "delivery-worker" -> "mqtt-ingestion-gateway" [
    likec4_id = "h687yt";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "grafana" -> "mqtt-ingestion-gateway" [
    likec4_id = "107kgtq";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>;
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
        grafana [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            group="monitoring-alarm-platform",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Grafana</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Grafana OSS / grafana-mqtt-datasource</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Слой визуализации Monitoring &amp; Alarm<BR/>Platform: live-панели, инженерные dashboards<BR/>и операторские представления. В текущей<BR/>реализации подключается к MQTT Ingestion<BR/>Gateway через grafana-mqtt-datasource.</FONT></TD></TR></TABLE>>,
            likec4_id="monitoring-alarm-platform.grafana",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        "platform-api" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            group="monitoring-alarm-platform",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Platform API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">HTTP API / backend service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Backend API для состояния alarm, истории<BR/>событий, конфигурации правил и политик<BR/>уведомлений.</FONT></TD></TR></TABLE>>,
            likec4_id="monitoring-alarm-platform.platform-api",
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
    "service-engineer" -> grafana [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Настраивает dashboards и проверяет поток<BR/>телеметрии</FONT></TD></TR></TABLE>>,
        likec4_id="16gquoh",
        minlen=1,
        style=solid];
    "operator-dispatcher" -> grafana [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Работает с live-панелями, состоянием<BR/>объекта и операторскими dashboards</FONT></TD></TR></TABLE>>,
        likec4_id="16xbicy",
        style=solid];
    grafana -> "mqtt-ingestion-gateway" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Подписывается на live MQTT telemetry и<BR/>service topics</FONT></TD></TR></TABLE>>,
        likec4_id=alolq0,
        style=dashed,
        weight=2];
    "platform-api" -> "alarm-rule-engine" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Читает активные alarm и управляет<BR/>конфигурацией правил в Alarm Rule Engine</FONT></TD></TR></TABLE>>,
        likec4_id="26i7o3",
        style=dashed];
    "platform-api" -> "telemetry-store" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Читает телеметрию, историю и временные<BR/>линии alarm</FONT></TD></TR></TABLE>>,
        likec4_id="1els6f1",
        style=dashed];
    "mqtt-ingestion-gateway" -> "alarm-rule-engine" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Передает нормализованные события в Alarm<BR/>Rule Engine</FONT></TD></TR></TABLE>>,
        likec4_id=rstcnr,
        style=dashed];
    "mqtt-ingestion-gateway" -> "telemetry-store" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Сохраняет canonical events и служебные<BR/>события</FONT></TD></TR></TABLE>>,
        likec4_id="1jz0qh",
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
<svg width="1783pt" height="1891pt"
 viewBox="0.00 0.00 1783.00 1891.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1051.5,-1182 668.79,-1182 668.79,-1002 1051.5,-1002 1051.5,-1182"/>
<text xml:space="preserve" text-anchor="start" x="760.65" y="-1131.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">Edge Telemetry Agent</text>
<text xml:space="preserve" text-anchor="start" x="740.55" y="-1110.8" font-family="Arial" font-size="13.00" fill="#f9b27c">Edge collector / normalization / buffering /</text>
<text xml:space="preserve" text-anchor="start" x="688.85" y="-1089.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Универсальная edge&#45;система, разворачиваемая</text>
<text xml:space="preserve" text-anchor="start" x="701.78" y="-1071.2" font-family="Arial" font-size="15.00" fill="#f9b27c">на объекте рядом с полевыми протоколами и</text>
<text xml:space="preserve" text-anchor="start" x="705.95" y="-1053.2" font-family="Arial" font-size="15.00" fill="#f9b27c">отвечающая за сбор данных, нормализацию,</text>
<text xml:space="preserve" text-anchor="start" x="693.44" y="-1035.2" font-family="Arial" font-size="15.00" fill="#f9b27c">фильтрацию, буферизацию и доставку событий.</text>
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
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1554.4,-1861.2 1155.89,-1861.2 1155.89,-1681.2 1554.4,-1681.2 1554.4,-1861.2"/>
<text xml:space="preserve" text-anchor="start" x="1263.46" y="-1792.2" font-family="Arial" font-size="20.00" fill="#f8fafc">Сервисный инженер</text>
<text xml:space="preserve" text-anchor="start" x="1180.11" y="-1769.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">Настраивает источники данных, схему сигналов,</text>
<text xml:space="preserve" text-anchor="start" x="1175.94" y="-1751.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">правила доставки и эксплуатационные параметры</text>
<text xml:space="preserve" text-anchor="start" x="1215.1" y="-1733.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">edge&#45;агента и центральной платформы.</text>
</g>
<!-- monitoring&#45;alarm&#45;platform -->
<g id="node6" class="node">
<title>monitoring&#45;alarm&#45;platform</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1380.82,-842.4 1011.47,-842.4 1011.47,-662.4 1380.82,-662.4 1380.82,-842.4"/>
<text xml:space="preserve" text-anchor="start" x="1071.1" y="-792.2" font-family="Arial" font-size="20.00" fill="#ffe0c2">Monitoring &amp; Alarm Platform</text>
<text xml:space="preserve" text-anchor="start" x="1075.11" y="-771.2" font-family="Arial" font-size="13.00" fill="#f9b27c">Cloud monitoring platform / alarm engine /</text>
<text xml:space="preserve" text-anchor="start" x="1031.53" y="-749.6" font-family="Arial" font-size="15.00" fill="#f9b27c">Центральная система в облаке/интернете для</text>
<text xml:space="preserve" text-anchor="start" x="1056.53" y="-731.6" font-family="Arial" font-size="15.00" fill="#f9b27c">приема событий, хранения телеметрии,</text>
<text xml:space="preserve" text-anchor="start" x="1033.2" y="-713.6" font-family="Arial" font-size="15.00" fill="#f9b27c">визуализации, alarm&#45;логики и маршрутизации</text>
<text xml:space="preserve" text-anchor="start" x="1148.22" y="-695.6" font-family="Arial" font-size="15.00" fill="#f9b27c">уведомлений.</text>
</g>
<!-- notification&#45;channels -->
<g id="node7" class="node">
<title>notification&#45;channels</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1181.34,-519.6 802.95,-519.6 802.95,-339.6 1181.34,-339.6 1181.34,-519.6"/>
<text xml:space="preserve" text-anchor="start" x="851.07" y="-424" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="895.01" y="-460.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">Каналы уведомлений</text>
<text xml:space="preserve" text-anchor="start" x="1159.33" y="-424" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="895.01" y="-439.4" font-family="Arial" font-size="13.00" fill="#b6ecf7">Email / SMS / Push / Webhook</text>
<text xml:space="preserve" text-anchor="start" x="895.01" y="-417.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">Email, SMS, push, webhook и другие</text>
<text xml:space="preserve" text-anchor="start" x="895.01" y="-399.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">внешние облачные каналы доставки</text>
<text xml:space="preserve" text-anchor="start" x="895.01" y="-381.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">тревог и служебных уведомлений.</text>
</g>
<!-- operator&#45;dispatcher -->
<g id="node8" class="node">
<title>operator&#45;dispatcher</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1383.9,-180 1010.39,-180 1010.39,0 1383.9,0 1383.9,-180"/>
<text xml:space="preserve" text-anchor="start" x="1094.35" y="-111" font-family="Arial" font-size="20.00" fill="#f8fafc">Оператор / диспетчер</text>
<text xml:space="preserve" text-anchor="start" x="1040.86" y="-88" font-family="Arial" font-size="15.00" fill="#c2f0c2">Работает с событиями, текущим состоянием</text>
<text xml:space="preserve" text-anchor="start" x="1030.44" y="-70" font-family="Arial" font-size="15.00" fill="#c2f0c2">объекта и alarm через центральную платформу</text>
<text xml:space="preserve" text-anchor="start" x="1149.22" y="-52" font-family="Arial" font-size="15.00" fill="#c2f0c2">мониторинга.</text>
</g>
<!-- demo&#45;stand&#45;current&#45;monitored&#45;scope&#45;&gt;edge&#45;telemetry&#45;agent -->
<g id="edge1" class="edge">
<title>demo&#45;stand&#45;current&#45;monitored&#45;scope&#45;&gt;edge&#45;telemetry&#45;agent</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M197.65,-1681.61C209.98,-1587.07 242.36,-1437.91 327.15,-1341.6 413.69,-1243.31 547.31,-1181.1 659.1,-1143.5"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="659.66,-1146.08 665.95,-1141.23 658,-1141.1 659.66,-1146.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="327.15,-1420.2 327.15,-1443 354.14,-1443 354.14,-1420.2 327.15,-1420.2"/>
<text xml:space="preserve" text-anchor="start" x="330.15" y="-1428.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- edge&#45;telemetry&#45;agent&#45;&gt;monitoring&#45;alarm&#45;platform -->
<g id="edge6" class="edge">
<title>edge&#45;telemetry&#45;agent&#45;&gt;monitoring&#45;alarm&#45;platform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M948.42,-1002.3C995.12,-955.38 1052.52,-897.71 1100.3,-849.7"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1102.01,-851.7 1105.44,-844.53 1098.29,-848 1102.01,-851.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1038.22,-902.4 1038.22,-942 1280.74,-942 1280.74,-902.4 1038.22,-902.4"/>
<text xml:space="preserve" text-anchor="start" x="1041.22" y="-925" font-family="Arial" font-size="14.00" fill="#c9c9c9">Публикует telemetry events и service</text>
<text xml:space="preserve" text-anchor="start" x="1041.22" y="-908.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">topics через MQTT</text>
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
<g id="edge5" class="edge">
<title>field&#45;protocol&#45;gateways&#45;&gt;edge&#45;telemetry&#45;agent</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M695,-1341.9C725.87,-1295.36 763.76,-1238.26 795.46,-1190.49"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="797.47,-1192.21 799.43,-1184.51 793.09,-1189.31 797.47,-1192.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="754.86,-1250.4 754.86,-1273.2 781.85,-1273.2 781.85,-1250.4 754.86,-1250.4"/>
<text xml:space="preserve" text-anchor="start" x="757.86" y="-1258.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- service&#45;engineer&#45;&gt;edge&#45;telemetry&#45;agent -->
<g id="edge3" class="edge">
<title>service&#45;engineer&#45;&gt;edge&#45;telemetry&#45;agent</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1286.4,-1681.24C1250.22,-1634.06 1205.31,-1574.97 1165.98,-1521.6 1082.92,-1408.9 989.79,-1277.65 928.35,-1190.38"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="930.53,-1188.91 924.07,-1184.29 926.24,-1191.93 930.53,-1188.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1165.98,-1411.8 1165.98,-1451.4 1448.14,-1451.4 1448.14,-1411.8 1165.98,-1411.8"/>
<text xml:space="preserve" text-anchor="start" x="1168.98" y="-1434.4" font-family="Arial" font-size="14.00" fill="#22c55e">Настраивает адаптеры, модель сигналов,</text>
<text xml:space="preserve" text-anchor="start" x="1168.98" y="-1417.6" font-family="Arial" font-size="14.00" fill="#22c55e">polling и доставку</text>
</g>
<!-- service&#45;engineer&#45;&gt;monitoring&#45;alarm&#45;platform -->
<g id="edge4" class="edge">
<title>service&#45;engineer&#45;&gt;monitoring&#45;alarm&#45;platform</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1408.25,-1681.22C1432.61,-1635.27 1458.79,-1577.28 1471.14,-1521.6 1488.47,-1443.5 1485.28,-1420.34 1471.14,-1341.6 1434.34,-1136.67 1407.96,-1085.12 1308.14,-902.4 1298.61,-884.95 1287.2,-867.29 1275.37,-850.53"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1277.79,-849.41 1271.29,-844.84 1273.53,-852.47 1277.79,-849.41"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1459.51,-1242 1459.51,-1281.6 1753.35,-1281.6 1753.35,-1242 1459.51,-1242"/>
<text xml:space="preserve" text-anchor="start" x="1462.51" y="-1264.6" font-family="Arial" font-size="14.00" fill="#22c55e">Настраивает правила alarm, получателей и</text>
<text xml:space="preserve" text-anchor="start" x="1462.51" y="-1247.8" font-family="Arial" font-size="14.00" fill="#22c55e">панели мониторинга</text>
</g>
<!-- monitoring&#45;alarm&#45;platform&#45;&gt;notification&#45;channels -->
<g id="edge7" class="edge">
<title>monitoring&#45;alarm&#45;platform&#45;&gt;notification&#45;channels</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1076,-662.51C1057.74,-644.39 1040.82,-624.14 1028.2,-602.4 1015.42,-580.39 1007.15,-554.47 1001.79,-529.52"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1004.38,-529.08 1000.34,-522.24 999.23,-530.11 1004.38,-529.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1028.2,-579.6 1028.2,-602.4 1318.14,-602.4 1318.14,-579.6 1028.2,-579.6"/>
<text xml:space="preserve" text-anchor="start" x="1031.2" y="-585.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Маршрутизирует уведомления и эскалации</text>
</g>
<!-- notification&#45;channels&#45;&gt;operator&#45;dispatcher -->
<g id="edge8" class="edge">
<title>notification&#45;channels&#45;&gt;operator&#45;dispatcher</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1025.24,-339.71C1038.8,-307.34 1055.8,-271.09 1074.88,-240 1085.63,-222.47 1098.26,-204.78 1111.26,-188"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1113.22,-189.75 1115.79,-182.23 1109.09,-186.51 1113.22,-189.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1074.88,-240 1074.88,-279.6 1318.14,-279.6 1318.14,-240 1074.88,-240"/>
<text xml:space="preserve" text-anchor="start" x="1077.88" y="-262.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Доставляют уведомления по alarm и</text>
<text xml:space="preserve" text-anchor="start" x="1077.88" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">служебные уведомления</text>
</g>
<!-- operator&#45;dispatcher&#45;&gt;monitoring&#45;alarm&#45;platform -->
<g id="edge9" class="edge">
<title>operator&#45;dispatcher&#45;&gt;monitoring&#45;alarm&#45;platform</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1303.37,-179.86C1318.78,-198.05 1332.38,-218.32 1341.14,-240 1401.51,-389.33 1401.77,-453.18 1341.14,-602.4 1333.55,-621.08 1322.37,-638.7 1309.53,-654.84"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1307.77,-652.85 1305.03,-660.3 1311.82,-656.19 1307.77,-652.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1386.52,-409.8 1386.52,-449.4 1625.89,-449.4 1625.89,-409.8 1386.52,-409.8"/>
<text xml:space="preserve" text-anchor="start" x="1389.52" y="-432.4" font-family="Arial" font-size="14.00" fill="#22c55e">Работает с панелями мониторинга,</text>
<text xml:space="preserve" text-anchor="start" x="1389.52" y="-415.6" font-family="Arial" font-size="14.00" fill="#22c55e">событиями и alarm</text>
</g>
</g>
</svg>
`;case"deployment-demo-stand-topology":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.3 (0)
 -->
<!-- Pages: 1 -->
<svg width="4817pt" height="1624pt"
 viewBox="0.00 0.00 4817.00 1624.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1609.25)">
<g id="clust1" class="cluster">
<title>cluster_demo&#45;stand</title>
<polygon fill="#1c417d" stroke="#1c356c" points="8,-8 8,-1586.2 2184,-1586.2 2184,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1573.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">DEMO STAND</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_local&#45;lan</title>
<polygon fill="#0f4460" stroke="#0d374e" points="58,-799.6 58,-1515 2134,-1515 2134,-799.6 58,-799.6"/>
<text xml:space="preserve" text-anchor="start" x="66" y="-1502.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">LOCAL LAN 192.0.2.0/24</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_tp&#45;line&#45;1&#45;1</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="108,-1142.6 108,-1443.8 2084,-1443.8 2084,-1142.6 108,-1142.6"/>
<text xml:space="preserve" text-anchor="start" x="116" y="-1430.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">KNX TP LINE 1.1</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_knxnet&#45;ip&#45;backbone</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1621,-849.6 1621,-1114.8 2067,-1114.8 2067,-849.6 1621,-849.6"/>
<text xml:space="preserve" text-anchor="start" x="1629" y="-1101.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">KNXNET/IP BACKBONE</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_remote&#45;access</title>
<polygon fill="#0d4b6c" stroke="#0b3c57" points="1507,-58 1507,-323.2 1919,-323.2 1919,-58 1507,-58"/>
<text xml:space="preserve" text-anchor="start" x="1515" y="-310.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">REMOTE ACCESS</text>
</g>
<g id="clust6" class="cluster">
<title>cluster_mqtt&#45;ingest&#45;host</title>
<polygon fill="#5a3620" stroke="#462a17" points="4323,-40 4323,-690.8 4779,-690.8 4779,-40 4323,-40"/>
<text xml:space="preserve" text-anchor="start" x="4331" y="-677.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f9b27c" fill-opacity="0.701961">MONITORING PLATFORM HOST</text>
</g>
<g id="clust7" class="cluster">
<title>cluster_whitelisted&#45;remote&#45;host</title>
<polygon fill="#1a468d" stroke="#1c3979" points="2192,-8 2192,-744 4315,-744 4315,-8 2192,-8"/>
<text xml:space="preserve" text-anchor="start" x="2200" y="-731.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">WHITELISTED REMOTE HOST</text>
</g>
<g id="clust8" class="cluster">
<title>cluster_edge&#45;host</title>
<polygon fill="#5a3620" stroke="#462a17" points="2224,-40 2224,-690.8 4283,-690.8 4283,-40 2224,-40"/>
<text xml:space="preserve" text-anchor="start" x="2232" y="-677.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f9b27c" fill-opacity="0.701961">DEVELOPER WORKSTATION</text>
</g>
<!-- device&#45;1&#45;1&#45;1 -->
<g id="node1" class="node">
<title>device&#45;1&#45;1&#45;1</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="512.37,-1372.6 157.63,-1372.6 157.63,-1192.6 512.37,-1192.6 512.37,-1372.6"/>
<text xml:space="preserve" text-anchor="start" x="177.69" y="-1325.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">1.1.1 Pushbutton sensor 4 Komfort,</text>
<text xml:space="preserve" text-anchor="start" x="303.86" y="-1301.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">4&#45;gang</text>
<text xml:space="preserve" text-anchor="start" x="290.93" y="-1280.4" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX TP device</text>
<text xml:space="preserve" text-anchor="start" x="187.03" y="-1258.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">Панель кнопок с group address для света,</text>
<text xml:space="preserve" text-anchor="start" x="200.35" y="-1240.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">scene и вентиляции: 0/0/1, 0/0/6, 0/0/7,</text>
<text xml:space="preserve" text-anchor="start" x="232.84" y="-1222.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">1/0/0, 1/1/0, 1/2/0, 1/3/0, 1/4/0.</text>
</g>
<!-- device&#45;1&#45;1&#45;2 -->
<g id="node2" class="node">
<title>device&#45;1&#45;1&#45;2</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1040.04,-1372.6 641.96,-1372.6 641.96,-1192.6 1040.04,-1192.6 1040.04,-1372.6"/>
<text xml:space="preserve" text-anchor="start" x="662.02" y="-1313.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">1.1.2 DALI Gateway Tunable White Plus</text>
<text xml:space="preserve" text-anchor="start" x="768.02" y="-1292.4" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX TP to DALI gateway</text>
<text xml:space="preserve" text-anchor="start" x="743.06" y="-1270.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">Шлюз освещения с адресами</text>
<text xml:space="preserve" text-anchor="start" x="714.29" y="-1252.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">Switch/StatusSwitch, RGBW и Scene:</text>
<text xml:space="preserve" text-anchor="start" x="803.06" y="-1234.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">0/0/1&#45;0/0/7.</text>
</g>
<!-- device&#45;1&#45;1&#45;3 -->
<g id="node3" class="node">
<title>device&#45;1&#45;1&#45;3</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1524.23,-1372.6 1169.77,-1372.6 1169.77,-1192.6 1524.23,-1192.6 1524.23,-1372.6"/>
<text xml:space="preserve" text-anchor="start" x="1241.37" y="-1304.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">1.1.3 Analogaktor 4fach</text>
<text xml:space="preserve" text-anchor="start" x="1298.23" y="-1283.4" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX TP actuator</text>
<text xml:space="preserve" text-anchor="start" x="1193.21" y="-1261.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">Актуатор вентиляции: VentSwitch, VentDim,</text>
<text xml:space="preserve" text-anchor="start" x="1189.83" y="-1243.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">VentStatus, VentValue по адресам 1/0/0&#45;1/3/0.</text>
</g>
<!-- device&#45;1&#45;1&#45;4 -->
<g id="node4" class="node">
<title>device&#45;1&#45;1&#45;4</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2034.13,-1372.6 1653.87,-1372.6 1653.87,-1192.6 2034.13,-1192.6 2034.13,-1372.6"/>
<text xml:space="preserve" text-anchor="start" x="1673.92" y="-1316.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">1.1.4 Room controller display compact</text>
<text xml:space="preserve" text-anchor="start" x="1811.2" y="-1292.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">module</text>
<text xml:space="preserve" text-anchor="start" x="1775.37" y="-1271.4" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX TP room controller</text>
<text xml:space="preserve" text-anchor="start" x="1691.45" y="-1249.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">Комнатный контроллер с Temperature value</text>
<text xml:space="preserve" text-anchor="start" x="1773.13" y="-1231.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">2/0/0 и сценой 1/4/0.</text>
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
<!-- grafana -->
<g id="node6" class="node">
<title>grafana</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="4729.02,-619.6 4372.98,-619.6 4372.98,-439.6 4729.02,-439.6 4729.02,-619.6"/>
<text xml:space="preserve" text-anchor="start" x="4514.87" y="-578.4" font-family="Arial" font-size="20.00" fill="#ffe0c2">Grafana</text>
<text xml:space="preserve" text-anchor="start" x="4435.39" y="-557.4" font-family="Arial" font-size="13.00" fill="#f9b27c">Grafana OSS / grafana&#45;mqtt&#45;datasource</text>
<text xml:space="preserve" text-anchor="start" x="4416.38" y="-535.8" font-family="Arial" font-size="15.00" fill="#f9b27c">Слой визуализации Monitoring &amp; Alarm</text>
<text xml:space="preserve" text-anchor="start" x="4393.03" y="-517.8" font-family="Arial" font-size="15.00" fill="#f9b27c">Platform: live&#45;панели, инженерные dashboards</text>
<text xml:space="preserve" text-anchor="start" x="4398.89" y="-499.8" font-family="Arial" font-size="15.00" fill="#f9b27c">и операторские представления. В текущей</text>
<text xml:space="preserve" text-anchor="start" x="4395.13" y="-481.8" font-family="Arial" font-size="15.00" fill="#f9b27c">реализации подключается к MQTT Ingestion</text>
<text xml:space="preserve" text-anchor="start" x="4412.19" y="-463.8" font-family="Arial" font-size="15.00" fill="#f9b27c">Gateway через grafana&#45;mqtt&#45;datasource.</text>
</g>
<!-- mqtt&#45;ingestion&#45;gateway -->
<g id="node7" class="node">
<title>mqtt&#45;ingestion&#45;gateway</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="4726.94,-270 4375.06,-270 4375.06,-90 4726.94,-90 4726.94,-270"/>
<text xml:space="preserve" text-anchor="start" x="4437.07" y="-228.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">MQTT Ingestion Gateway</text>
<text xml:space="preserve" text-anchor="start" x="4458.53" y="-207.8" font-family="Arial" font-size="13.00" fill="#f9b27c">MQTT broker / ingestion service</text>
<text xml:space="preserve" text-anchor="start" x="4400.97" y="-186.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Принимает MQTT telemetry events и service</text>
<text xml:space="preserve" text-anchor="start" x="4403.87" y="-168.2" font-family="Arial" font-size="15.00" fill="#f9b27c">topics от edge&#45;агентов, восстанавливает</text>
<text xml:space="preserve" text-anchor="start" x="4399.26" y="-150.2" font-family="Arial" font-size="15.00" fill="#f9b27c">routing context из topic, валидирует payload</text>
<text xml:space="preserve" text-anchor="start" x="4395.11" y="-132.2" font-family="Arial" font-size="15.00" fill="#f9b27c">и передает canonical events на хранение и в</text>
<text xml:space="preserve" text-anchor="start" x="4486.39" y="-114.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Alarm Rule Engine.</text>
</g>
<!-- knx&#45;router -->
<g id="node8" class="node">
<title>knx&#45;router</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2035,-1061.6 1653,-1061.6 1653,-881.6 2035,-881.6 2035,-1061.6"/>
<text xml:space="preserve" text-anchor="start" x="1701.11" y="-966" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1745.06" y="-993.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">Weinzierl KNX IP Router 751</text>
<text xml:space="preserve" text-anchor="start" x="2013" y="-966" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1745.06" y="-972.4" font-family="Arial" font-size="13.00" fill="#b6ecf7">192.0.2.177:3671 / UDP / TUNNELING</text>
<text xml:space="preserve" text-anchor="start" x="1745.06" y="-950.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">Локальная точка входа в KNX/IP и</text>
<text xml:space="preserve" text-anchor="start" x="1745.06" y="-932.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">маршрутизатор в TP&#45;линию 1.1.</text>
</g>
<!-- delivery&#45;worker -->
<g id="node9" class="node">
<title>delivery&#45;worker</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="3582.67,-619.6 3213.33,-619.6 3213.33,-439.6 3582.67,-439.6 3582.67,-619.6"/>
<text xml:space="preserve" text-anchor="start" x="3326.88" y="-560.4" font-family="Arial" font-size="20.00" fill="#ffe0c2">Delivery Worker</text>
<text xml:space="preserve" text-anchor="start" x="3304.44" y="-539.4" font-family="Arial" font-size="13.00" fill="#f9b27c">Python worker / MQTT publisher</text>
<text xml:space="preserve" text-anchor="start" x="3237.95" y="-517.8" font-family="Arial" font-size="15.00" fill="#f9b27c">Фоновый контейнер доставки: читает outbox,</text>
<text xml:space="preserve" text-anchor="start" x="3243.37" y="-499.8" font-family="Arial" font-size="15.00" fill="#f9b27c">публикует telemetry events и service topics в</text>
<text xml:space="preserve" text-anchor="start" x="3233.38" y="-481.8" font-family="Arial" font-size="15.00" fill="#f9b27c">MQTT topic tree и обновляет статус доставки.</text>
</g>
<!-- grafana_1 -->
<g id="node10" class="node">
<title>grafana_1</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="2630.02,-619.6 2273.98,-619.6 2273.98,-439.6 2630.02,-439.6 2630.02,-619.6"/>
<text xml:space="preserve" text-anchor="start" x="2415.87" y="-578.4" font-family="Arial" font-size="20.00" fill="#ffe0c2">Grafana</text>
<text xml:space="preserve" text-anchor="start" x="2336.39" y="-557.4" font-family="Arial" font-size="13.00" fill="#f9b27c">Grafana OSS / grafana&#45;mqtt&#45;datasource</text>
<text xml:space="preserve" text-anchor="start" x="2317.38" y="-535.8" font-family="Arial" font-size="15.00" fill="#f9b27c">Слой визуализации Monitoring &amp; Alarm</text>
<text xml:space="preserve" text-anchor="start" x="2294.03" y="-517.8" font-family="Arial" font-size="15.00" fill="#f9b27c">Platform: live&#45;панели, инженерные dashboards</text>
<text xml:space="preserve" text-anchor="start" x="2299.89" y="-499.8" font-family="Arial" font-size="15.00" fill="#f9b27c">и операторские представления. В текущей</text>
<text xml:space="preserve" text-anchor="start" x="2296.13" y="-481.8" font-family="Arial" font-size="15.00" fill="#f9b27c">реализации подключается к MQTT Ingestion</text>
<text xml:space="preserve" text-anchor="start" x="2313.19" y="-463.8" font-family="Arial" font-size="15.00" fill="#f9b27c">Gateway через grafana&#45;mqtt&#45;datasource.</text>
</g>
<!-- collector&#45;runtime -->
<g id="node11" class="node">
<title>collector&#45;runtime</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="3083.75,-619.6 2760.25,-619.6 2760.25,-439.6 3083.75,-439.6 3083.75,-619.6"/>
<text xml:space="preserve" text-anchor="start" x="2842.53" y="-569.4" font-family="Arial" font-size="20.00" fill="#ffe0c2">Collector Runtime</text>
<text xml:space="preserve" text-anchor="start" x="2879.37" y="-548.4" font-family="Arial" font-size="13.00" fill="#f9b27c">Python service</text>
<text xml:space="preserve" text-anchor="start" x="2813.21" y="-526.8" font-family="Arial" font-size="15.00" fill="#f9b27c">Основной runtime edge&#45;агента:</text>
<text xml:space="preserve" text-anchor="start" x="2796.95" y="-508.8" font-family="Arial" font-size="15.00" fill="#f9b27c">southbound&#45;адаптеры, сбор данных,</text>
<text xml:space="preserve" text-anchor="start" x="2780.31" y="-490.8" font-family="Arial" font-size="15.00" fill="#f9b27c">нормализация, фильтрация изменений и</text>
<text xml:space="preserve" text-anchor="start" x="2816.13" y="-472.8" font-family="Arial" font-size="15.00" fill="#f9b27c">постановка событий в outbox.</text>
</g>
<!-- mqtt&#45;ingestion&#45;gateway_1 -->
<g id="node12" class="node">
<title>mqtt&#45;ingestion&#45;gateway_1</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="2625.94,-270 2274.06,-270 2274.06,-90 2625.94,-90 2625.94,-270"/>
<text xml:space="preserve" text-anchor="start" x="2336.07" y="-228.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">MQTT Ingestion Gateway</text>
<text xml:space="preserve" text-anchor="start" x="2357.53" y="-207.8" font-family="Arial" font-size="13.00" fill="#f9b27c">MQTT broker / ingestion service</text>
<text xml:space="preserve" text-anchor="start" x="2299.97" y="-186.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Принимает MQTT telemetry events и service</text>
<text xml:space="preserve" text-anchor="start" x="2302.87" y="-168.2" font-family="Arial" font-size="15.00" fill="#f9b27c">topics от edge&#45;агентов, восстанавливает</text>
<text xml:space="preserve" text-anchor="start" x="2298.26" y="-150.2" font-family="Arial" font-size="15.00" fill="#f9b27c">routing context из topic, валидирует payload</text>
<text xml:space="preserve" text-anchor="start" x="2294.11" y="-132.2" font-family="Arial" font-size="15.00" fill="#f9b27c">и передает canonical events на хранение и в</text>
<text xml:space="preserve" text-anchor="start" x="2385.39" y="-114.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Alarm Rule Engine.</text>
</g>
<!-- configuration&#45;bundle -->
<g id="node13" class="node">
<title>configuration&#45;bundle</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="3132.01,-270 2755.99,-270 2755.99,-90 3132.01,-90 3132.01,-270"/>
<text xml:space="preserve" text-anchor="start" x="2850.6" y="-210.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">Configuration Bundle</text>
<text xml:space="preserve" text-anchor="start" x="2912.93" y="-189.8" font-family="Arial" font-size="13.00" fill="#f9b27c">YAML files</text>
<text xml:space="preserve" text-anchor="start" x="2785.64" y="-168.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Локальный набор конфигурации источников,</text>
<text xml:space="preserve" text-anchor="start" x="2776.04" y="-150.2" font-family="Arial" font-size="15.00" fill="#f9b27c">модели сигналов, polling&#45;политик и параметров</text>
<text xml:space="preserve" text-anchor="start" x="2908.58" y="-132.2" font-family="Arial" font-size="15.00" fill="#f9b27c">доставки.</text>
</g>
<!-- outbox&#45;store -->
<g id="node14" class="node">
<title>outbox&#45;store</title>
<path fill="#a35829" stroke="#7e451d" stroke-width="2" d="M3733.17,-253.64C3733.17,-262.67 3656,-270 3561,-270 3466,-270 3388.83,-262.67 3388.83,-253.64 3388.83,-253.64 3388.83,-106.36 3388.83,-106.36 3388.83,-97.33 3466,-90 3561,-90 3656,-90 3733.17,-97.33 3733.17,-106.36 3733.17,-106.36 3733.17,-253.64 3733.17,-253.64"/>
<path fill="none" stroke="#7e451d" stroke-width="2" d="M3733.17,-253.64C3733.17,-244.61 3656,-237.27 3561,-237.27 3466,-237.27 3388.83,-244.61 3388.83,-253.64"/>
<text xml:space="preserve" text-anchor="start" x="3502.08" y="-210.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">Outbox Store</text>
<text xml:space="preserve" text-anchor="start" x="3541.13" y="-189.8" font-family="Arial" font-size="13.00" fill="#f9b27c">SQLite</text>
<text xml:space="preserve" text-anchor="start" x="3408.89" y="-168.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Локальное надежное хранилище исходящих</text>
<text xml:space="preserve" text-anchor="start" x="3408.89" y="-150.2" font-family="Arial" font-size="15.00" fill="#f9b27c">событий, статусов доставки и метаданных</text>
<text xml:space="preserve" text-anchor="start" x="3490.15" y="-132.2" font-family="Arial" font-size="15.00" fill="#f9b27c">повторных попыток.</text>
</g>
<!-- device&#45;1&#45;1&#45;4&#45;&gt;knx&#45;router -->
<g id="edge11" class="edge">
<title>device&#45;1&#45;1&#45;4&#45;&gt;knx&#45;router</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1844,-1142.6C1844,-1118.71 1844,-1094.32 1844,-1071.75"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1846.63,-1072 1844,-1064.5 1841.38,-1072 1846.63,-1072"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1844,-1101.67 1844,-1141.27 2110.61,-1141.27 2110.61,-1101.67 1844,-1101.67"/>
<text xml:space="preserve" text-anchor="start" x="1847" y="-1124.27" font-family="Arial" font-size="14.00" fill="#c9c9c9">Передает KNX TP телеграммы в роутер</text>
<text xml:space="preserve" text-anchor="start" x="1847" y="-1107.47" font-family="Arial" font-size="14.00" fill="#c9c9c9">1.1.0</text>
</g>
<!-- public&#45;knx&#45;endpoint&#45;&gt;knx&#45;router -->
<g id="edge1" class="edge">
<title>public&#45;knx&#45;endpoint&#45;&gt;knx&#45;router</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1727.74,-269.82C1752.41,-418.54 1801.91,-716.88 1827.63,-871.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1824.98,-871.98 1828.8,-878.95 1830.16,-871.13 1824.98,-871.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1806.09,-509.8 1806.09,-549.4 2095.7,-549.4 2095.7,-509.8 1806.09,-509.8"/>
<text xml:space="preserve" text-anchor="start" x="1809.09" y="-532.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Проброс UDP 7171 &#45;&gt; 3671 для удаленного</text>
<text xml:space="preserve" text-anchor="start" x="1809.09" y="-515.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">KNX/IP доступа</text>
</g>
<!-- grafana&#45;&gt;mqtt&#45;ingestion&#45;gateway -->
<g id="edge10" class="edge">
<title>grafana&#45;&gt;mqtt&#45;ingestion&#45;gateway</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4551,-439.99C4551,-391.15 4551,-330.4 4551,-280.01"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4553.63,-280.28 4551,-272.78 4548.38,-280.28 4553.63,-280.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4551,-343.4 4551,-366.2 4577.99,-366.2 4577.99,-343.4 4551,-343.4"/>
<text xml:space="preserve" text-anchor="start" x="4554" y="-351.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- knx&#45;router&#45;&gt;collector&#45;runtime -->
<g id="edge2" class="edge">
<title>knx&#45;router&#45;&gt;collector&#45;runtime</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2034.78,-959.49C2229.97,-940.24 2535.12,-887.65 2756,-744 2800.82,-714.85 2838.62,-669.4 2866.77,-627.91"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2868.79,-629.62 2870.77,-621.92 2864.42,-626.7 2868.79,-629.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2734.74,-752 2734.74,-791.6 3013.06,-791.6 3013.06,-752 2734.74,-752"/>
<text xml:space="preserve" text-anchor="start" x="2737.74" y="-774.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Экспонирует group address и телеграммы</text>
<text xml:space="preserve" text-anchor="start" x="2737.74" y="-757.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">через KNX/IP</text>
</g>
<!-- delivery&#45;worker&#45;&gt;mqtt&#45;ingestion&#45;gateway_1 -->
<g id="edge7" class="edge">
<title>delivery&#45;worker&#45;&gt;mqtt&#45;ingestion&#45;gateway_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3213.38,-441.12C3211.92,-440.61 3210.46,-440.1 3209,-439.6 2985.81,-363.01 2910.39,-410.08 2691,-323.2 2657.97,-310.12 2624.15,-292.91 2592.68,-275"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2594.3,-272.9 2586.49,-271.44 2591.68,-277.45 2594.3,-272.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2866.95,-343.4 2866.95,-366.2 2893.94,-366.2 2893.94,-343.4 2866.95,-343.4"/>
<text xml:space="preserve" text-anchor="start" x="2869.95" y="-351.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- delivery&#45;worker&#45;&gt;configuration&#45;bundle -->
<g id="edge4" class="edge">
<title>delivery&#45;worker&#45;&gt;configuration&#45;bundle</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3281.97,-439.76C3216.58,-389.7 3134.9,-327.16 3068.22,-276.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3070.12,-274.26 3062.57,-271.78 3066.93,-278.43 3070.12,-274.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3184.61,-335 3184.61,-374.6 3469.12,-374.6 3469.12,-335 3184.61,-335"/>
<text xml:space="preserve" text-anchor="start" x="3187.61" y="-357.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Загружает настройки MQTT, topic contract</text>
<text xml:space="preserve" text-anchor="start" x="3187.61" y="-340.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">и retry&#45;политики</text>
</g>
<!-- delivery&#45;worker&#45;&gt;outbox&#45;store -->
<g id="edge6" class="edge">
<title>delivery&#45;worker&#45;&gt;outbox&#45;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3582.47,-511.38C3672.45,-492.61 3773.11,-453.93 3829,-374.6 3868.23,-318.92 3813.5,-273.26 3743.49,-240.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3744.64,-237.93 3736.73,-237.19 3742.45,-242.7 3744.64,-237.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3842.06,-335 3842.06,-374.6 4112.56,-374.6 4112.56,-335 3842.06,-335"/>
<text xml:space="preserve" text-anchor="start" x="3845.06" y="-357.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Читает ожидающие события и обновляет</text>
<text xml:space="preserve" text-anchor="start" x="3845.06" y="-340.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">статус доставки</text>
</g>
<!-- grafana_1&#45;&gt;mqtt&#45;ingestion&#45;gateway_1 -->
<g id="edge8" class="edge">
<title>grafana_1&#45;&gt;mqtt&#45;ingestion&#45;gateway_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2451.49,-439.99C2451.21,-391.15 2450.86,-330.4 2450.57,-280.01"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2453.2,-280.27 2450.53,-272.78 2447.95,-280.3 2453.2,-280.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2451.06,-343.4 2451.06,-366.2 2478.05,-366.2 2478.05,-343.4 2451.06,-343.4"/>
<text xml:space="preserve" text-anchor="start" x="2454.06" y="-351.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- collector&#45;runtime&#45;&gt;public&#45;knx&#45;endpoint -->
<g id="edge9" class="edge">
<title>collector&#45;runtime&#45;&gt;public&#45;knx&#45;endpoint</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2760.63,-441.28C2759.08,-440.71 2757.54,-440.15 2756,-439.6 2614.12,-389 2570.83,-405.38 2423.37,-374.6 2320.26,-353.07 2293.97,-349.63 2192,-323.2 2093.86,-297.77 1985.5,-265.92 1896.7,-238.81"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1897.63,-236.35 1889.69,-236.67 1896.1,-241.37 1897.63,-236.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2423.37,-335 2423.37,-374.6 2697,-374.6 2697,-335 2423.37,-335"/>
<text xml:space="preserve" text-anchor="start" x="2426.37" y="-357.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Подключается к стенду через whitelisted</text>
<text xml:space="preserve" text-anchor="start" x="2426.37" y="-340.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">public KNX/IP endpoint</text>
</g>
<!-- collector&#45;runtime&#45;&gt;configuration&#45;bundle -->
<g id="edge3" class="edge">
<title>collector&#45;runtime&#45;&gt;configuration&#45;bundle</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2927.61,-439.99C2930.7,-391.15 2934.54,-330.4 2937.73,-280.01"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2940.34,-280.43 2938.19,-272.77 2935.1,-280.09 2940.34,-280.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2933.66,-335 2933.66,-374.6 3211.94,-374.6 3211.94,-335 2933.66,-335"/>
<text xml:space="preserve" text-anchor="start" x="2936.66" y="-357.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Загружает описания источников, модель</text>
<text xml:space="preserve" text-anchor="start" x="2936.66" y="-340.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">сигналов и runtime&#45;политики</text>
</g>
<!-- collector&#45;runtime&#45;&gt;outbox&#45;store -->
<g id="edge5" class="edge">
<title>collector&#45;runtime&#45;&gt;outbox&#45;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3083.62,-507.43C3189.34,-487.19 3326.05,-448.31 3427,-374.6 3460.93,-349.82 3489.22,-313.73 3510.92,-279.41"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3512.99,-281.06 3514.71,-273.3 3508.53,-278.29 3512.99,-281.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3469.15,-335 3469.15,-374.6 3735.76,-374.6 3735.76,-335 3469.15,-335"/>
<text xml:space="preserve" text-anchor="start" x="3472.15" y="-357.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Сохраняет нормализованные события и</text>
<text xml:space="preserve" text-anchor="start" x="3472.15" y="-340.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">задания на доставку</text>
</g>
</g>
</svg>
`;case"deployment-demo-stand-current-implementation":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.3 (0)
 -->
<!-- Pages: 1 -->
<svg width="4353pt" height="1624pt"
 viewBox="0.00 0.00 4353.00 1624.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1609.25)">
<g id="clust1" class="cluster">
<title>cluster_demo&#45;stand</title>
<polygon fill="#1c417d" stroke="#1c356c" points="8,-8 8,-1586.2 2184,-1586.2 2184,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1573.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">DEMO STAND</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_local&#45;lan</title>
<polygon fill="#0f4460" stroke="#0d374e" points="58,-799.6 58,-1515 2134,-1515 2134,-799.6 58,-799.6"/>
<text xml:space="preserve" text-anchor="start" x="66" y="-1502.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">LOCAL LAN 192.0.2.0/24</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_tp&#45;line&#45;1&#45;1</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="108,-1142.6 108,-1443.8 2084,-1443.8 2084,-1142.6 108,-1142.6"/>
<text xml:space="preserve" text-anchor="start" x="116" y="-1430.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">KNX TP LINE 1.1</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_knxnet&#45;ip&#45;backbone</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1621,-849.6 1621,-1114.8 2067,-1114.8 2067,-849.6 1621,-849.6"/>
<text xml:space="preserve" text-anchor="start" x="1629" y="-1101.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">KNXNET/IP BACKBONE</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_remote&#45;access</title>
<polygon fill="#0d4b6c" stroke="#0b3c57" points="1507,-58 1507,-323.2 1919,-323.2 1919,-58 1507,-58"/>
<text xml:space="preserve" text-anchor="start" x="1515" y="-310.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">REMOTE ACCESS</text>
</g>
<g id="clust6" class="cluster">
<title>cluster_whitelisted&#45;remote&#45;host</title>
<polygon fill="#1a468d" stroke="#1c3979" points="2192,-8 2192,-744 4315,-744 4315,-8 2192,-8"/>
<text xml:space="preserve" text-anchor="start" x="2200" y="-731.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">WHITELISTED REMOTE HOST</text>
</g>
<g id="clust7" class="cluster">
<title>cluster_edge&#45;host</title>
<polygon fill="#5a3620" stroke="#462a17" points="2224,-40 2224,-690.8 4283,-690.8 4283,-40 2224,-40"/>
<text xml:space="preserve" text-anchor="start" x="2232" y="-677.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f9b27c" fill-opacity="0.701961">DEVELOPER WORKSTATION</text>
</g>
<!-- device&#45;1&#45;1&#45;1 -->
<g id="node1" class="node">
<title>device&#45;1&#45;1&#45;1</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="512.37,-1372.6 157.63,-1372.6 157.63,-1192.6 512.37,-1192.6 512.37,-1372.6"/>
<text xml:space="preserve" text-anchor="start" x="177.69" y="-1325.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">1.1.1 Pushbutton sensor 4 Komfort,</text>
<text xml:space="preserve" text-anchor="start" x="303.86" y="-1301.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">4&#45;gang</text>
<text xml:space="preserve" text-anchor="start" x="290.93" y="-1280.4" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX TP device</text>
<text xml:space="preserve" text-anchor="start" x="187.03" y="-1258.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">Панель кнопок с group address для света,</text>
<text xml:space="preserve" text-anchor="start" x="200.35" y="-1240.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">scene и вентиляции: 0/0/1, 0/0/6, 0/0/7,</text>
<text xml:space="preserve" text-anchor="start" x="232.84" y="-1222.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">1/0/0, 1/1/0, 1/2/0, 1/3/0, 1/4/0.</text>
</g>
<!-- device&#45;1&#45;1&#45;2 -->
<g id="node2" class="node">
<title>device&#45;1&#45;1&#45;2</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1040.04,-1372.6 641.96,-1372.6 641.96,-1192.6 1040.04,-1192.6 1040.04,-1372.6"/>
<text xml:space="preserve" text-anchor="start" x="662.02" y="-1313.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">1.1.2 DALI Gateway Tunable White Plus</text>
<text xml:space="preserve" text-anchor="start" x="768.02" y="-1292.4" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX TP to DALI gateway</text>
<text xml:space="preserve" text-anchor="start" x="743.06" y="-1270.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">Шлюз освещения с адресами</text>
<text xml:space="preserve" text-anchor="start" x="714.29" y="-1252.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">Switch/StatusSwitch, RGBW и Scene:</text>
<text xml:space="preserve" text-anchor="start" x="803.06" y="-1234.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">0/0/1&#45;0/0/7.</text>
</g>
<!-- device&#45;1&#45;1&#45;3 -->
<g id="node3" class="node">
<title>device&#45;1&#45;1&#45;3</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1524.23,-1372.6 1169.77,-1372.6 1169.77,-1192.6 1524.23,-1192.6 1524.23,-1372.6"/>
<text xml:space="preserve" text-anchor="start" x="1241.37" y="-1304.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">1.1.3 Analogaktor 4fach</text>
<text xml:space="preserve" text-anchor="start" x="1298.23" y="-1283.4" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX TP actuator</text>
<text xml:space="preserve" text-anchor="start" x="1193.21" y="-1261.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">Актуатор вентиляции: VentSwitch, VentDim,</text>
<text xml:space="preserve" text-anchor="start" x="1189.83" y="-1243.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">VentStatus, VentValue по адресам 1/0/0&#45;1/3/0.</text>
</g>
<!-- device&#45;1&#45;1&#45;4 -->
<g id="node4" class="node">
<title>device&#45;1&#45;1&#45;4</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2034.13,-1372.6 1653.87,-1372.6 1653.87,-1192.6 2034.13,-1192.6 2034.13,-1372.6"/>
<text xml:space="preserve" text-anchor="start" x="1673.92" y="-1316.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">1.1.4 Room controller display compact</text>
<text xml:space="preserve" text-anchor="start" x="1811.2" y="-1292.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">module</text>
<text xml:space="preserve" text-anchor="start" x="1775.37" y="-1271.4" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX TP room controller</text>
<text xml:space="preserve" text-anchor="start" x="1691.45" y="-1249.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">Комнатный контроллер с Temperature value</text>
<text xml:space="preserve" text-anchor="start" x="1773.13" y="-1231.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">2/0/0 и сценой 1/4/0.</text>
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
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2035,-1061.6 1653,-1061.6 1653,-881.6 2035,-881.6 2035,-1061.6"/>
<text xml:space="preserve" text-anchor="start" x="1701.11" y="-966" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1745.06" y="-993.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">Weinzierl KNX IP Router 751</text>
<text xml:space="preserve" text-anchor="start" x="2013" y="-966" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1745.06" y="-972.4" font-family="Arial" font-size="13.00" fill="#b6ecf7">192.0.2.177:3671 / UDP / TUNNELING</text>
<text xml:space="preserve" text-anchor="start" x="1745.06" y="-950.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">Локальная точка входа в KNX/IP и</text>
<text xml:space="preserve" text-anchor="start" x="1745.06" y="-932.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">маршрутизатор в TP&#45;линию 1.1.</text>
</g>
<!-- delivery&#45;worker -->
<g id="node7" class="node">
<title>delivery&#45;worker</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="3582.67,-619.6 3213.33,-619.6 3213.33,-439.6 3582.67,-439.6 3582.67,-619.6"/>
<text xml:space="preserve" text-anchor="start" x="3326.88" y="-560.4" font-family="Arial" font-size="20.00" fill="#ffe0c2">Delivery Worker</text>
<text xml:space="preserve" text-anchor="start" x="3304.44" y="-539.4" font-family="Arial" font-size="13.00" fill="#f9b27c">Python worker / MQTT publisher</text>
<text xml:space="preserve" text-anchor="start" x="3237.95" y="-517.8" font-family="Arial" font-size="15.00" fill="#f9b27c">Фоновый контейнер доставки: читает outbox,</text>
<text xml:space="preserve" text-anchor="start" x="3243.37" y="-499.8" font-family="Arial" font-size="15.00" fill="#f9b27c">публикует telemetry events и service topics в</text>
<text xml:space="preserve" text-anchor="start" x="3233.38" y="-481.8" font-family="Arial" font-size="15.00" fill="#f9b27c">MQTT topic tree и обновляет статус доставки.</text>
</g>
<!-- grafana -->
<g id="node8" class="node">
<title>grafana</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="2630.02,-619.6 2273.98,-619.6 2273.98,-439.6 2630.02,-439.6 2630.02,-619.6"/>
<text xml:space="preserve" text-anchor="start" x="2415.87" y="-578.4" font-family="Arial" font-size="20.00" fill="#ffe0c2">Grafana</text>
<text xml:space="preserve" text-anchor="start" x="2336.39" y="-557.4" font-family="Arial" font-size="13.00" fill="#f9b27c">Grafana OSS / grafana&#45;mqtt&#45;datasource</text>
<text xml:space="preserve" text-anchor="start" x="2317.38" y="-535.8" font-family="Arial" font-size="15.00" fill="#f9b27c">Слой визуализации Monitoring &amp; Alarm</text>
<text xml:space="preserve" text-anchor="start" x="2294.03" y="-517.8" font-family="Arial" font-size="15.00" fill="#f9b27c">Platform: live&#45;панели, инженерные dashboards</text>
<text xml:space="preserve" text-anchor="start" x="2299.89" y="-499.8" font-family="Arial" font-size="15.00" fill="#f9b27c">и операторские представления. В текущей</text>
<text xml:space="preserve" text-anchor="start" x="2296.13" y="-481.8" font-family="Arial" font-size="15.00" fill="#f9b27c">реализации подключается к MQTT Ingestion</text>
<text xml:space="preserve" text-anchor="start" x="2313.19" y="-463.8" font-family="Arial" font-size="15.00" fill="#f9b27c">Gateway через grafana&#45;mqtt&#45;datasource.</text>
</g>
<!-- collector&#45;runtime -->
<g id="node9" class="node">
<title>collector&#45;runtime</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="3083.75,-619.6 2760.25,-619.6 2760.25,-439.6 3083.75,-439.6 3083.75,-619.6"/>
<text xml:space="preserve" text-anchor="start" x="2842.53" y="-569.4" font-family="Arial" font-size="20.00" fill="#ffe0c2">Collector Runtime</text>
<text xml:space="preserve" text-anchor="start" x="2879.37" y="-548.4" font-family="Arial" font-size="13.00" fill="#f9b27c">Python service</text>
<text xml:space="preserve" text-anchor="start" x="2813.21" y="-526.8" font-family="Arial" font-size="15.00" fill="#f9b27c">Основной runtime edge&#45;агента:</text>
<text xml:space="preserve" text-anchor="start" x="2796.95" y="-508.8" font-family="Arial" font-size="15.00" fill="#f9b27c">southbound&#45;адаптеры, сбор данных,</text>
<text xml:space="preserve" text-anchor="start" x="2780.31" y="-490.8" font-family="Arial" font-size="15.00" fill="#f9b27c">нормализация, фильтрация изменений и</text>
<text xml:space="preserve" text-anchor="start" x="2816.13" y="-472.8" font-family="Arial" font-size="15.00" fill="#f9b27c">постановка событий в outbox.</text>
</g>
<!-- mqtt&#45;ingestion&#45;gateway -->
<g id="node10" class="node">
<title>mqtt&#45;ingestion&#45;gateway</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="2625.94,-270 2274.06,-270 2274.06,-90 2625.94,-90 2625.94,-270"/>
<text xml:space="preserve" text-anchor="start" x="2336.07" y="-228.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">MQTT Ingestion Gateway</text>
<text xml:space="preserve" text-anchor="start" x="2357.53" y="-207.8" font-family="Arial" font-size="13.00" fill="#f9b27c">MQTT broker / ingestion service</text>
<text xml:space="preserve" text-anchor="start" x="2299.97" y="-186.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Принимает MQTT telemetry events и service</text>
<text xml:space="preserve" text-anchor="start" x="2302.87" y="-168.2" font-family="Arial" font-size="15.00" fill="#f9b27c">topics от edge&#45;агентов, восстанавливает</text>
<text xml:space="preserve" text-anchor="start" x="2298.26" y="-150.2" font-family="Arial" font-size="15.00" fill="#f9b27c">routing context из topic, валидирует payload</text>
<text xml:space="preserve" text-anchor="start" x="2294.11" y="-132.2" font-family="Arial" font-size="15.00" fill="#f9b27c">и передает canonical events на хранение и в</text>
<text xml:space="preserve" text-anchor="start" x="2385.39" y="-114.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Alarm Rule Engine.</text>
</g>
<!-- configuration&#45;bundle -->
<g id="node11" class="node">
<title>configuration&#45;bundle</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="3132.01,-270 2755.99,-270 2755.99,-90 3132.01,-90 3132.01,-270"/>
<text xml:space="preserve" text-anchor="start" x="2850.6" y="-210.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">Configuration Bundle</text>
<text xml:space="preserve" text-anchor="start" x="2912.93" y="-189.8" font-family="Arial" font-size="13.00" fill="#f9b27c">YAML files</text>
<text xml:space="preserve" text-anchor="start" x="2785.64" y="-168.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Локальный набор конфигурации источников,</text>
<text xml:space="preserve" text-anchor="start" x="2776.04" y="-150.2" font-family="Arial" font-size="15.00" fill="#f9b27c">модели сигналов, polling&#45;политик и параметров</text>
<text xml:space="preserve" text-anchor="start" x="2908.58" y="-132.2" font-family="Arial" font-size="15.00" fill="#f9b27c">доставки.</text>
</g>
<!-- outbox&#45;store -->
<g id="node12" class="node">
<title>outbox&#45;store</title>
<path fill="#a35829" stroke="#7e451d" stroke-width="2" d="M3733.17,-253.64C3733.17,-262.67 3656,-270 3561,-270 3466,-270 3388.83,-262.67 3388.83,-253.64 3388.83,-253.64 3388.83,-106.36 3388.83,-106.36 3388.83,-97.33 3466,-90 3561,-90 3656,-90 3733.17,-97.33 3733.17,-106.36 3733.17,-106.36 3733.17,-253.64 3733.17,-253.64"/>
<path fill="none" stroke="#7e451d" stroke-width="2" d="M3733.17,-253.64C3733.17,-244.61 3656,-237.27 3561,-237.27 3466,-237.27 3388.83,-244.61 3388.83,-253.64"/>
<text xml:space="preserve" text-anchor="start" x="3502.08" y="-210.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">Outbox Store</text>
<text xml:space="preserve" text-anchor="start" x="3541.13" y="-189.8" font-family="Arial" font-size="13.00" fill="#f9b27c">SQLite</text>
<text xml:space="preserve" text-anchor="start" x="3408.89" y="-168.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Локальное надежное хранилище исходящих</text>
<text xml:space="preserve" text-anchor="start" x="3408.89" y="-150.2" font-family="Arial" font-size="15.00" fill="#f9b27c">событий, статусов доставки и метаданных</text>
<text xml:space="preserve" text-anchor="start" x="3490.15" y="-132.2" font-family="Arial" font-size="15.00" fill="#f9b27c">повторных попыток.</text>
</g>
<!-- device&#45;1&#45;1&#45;4&#45;&gt;knx&#45;router -->
<g id="edge10" class="edge">
<title>device&#45;1&#45;1&#45;4&#45;&gt;knx&#45;router</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1844,-1142.6C1844,-1118.71 1844,-1094.32 1844,-1071.75"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1846.63,-1072 1844,-1064.5 1841.38,-1072 1846.63,-1072"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1844,-1101.67 1844,-1141.27 2110.61,-1141.27 2110.61,-1101.67 1844,-1101.67"/>
<text xml:space="preserve" text-anchor="start" x="1847" y="-1124.27" font-family="Arial" font-size="14.00" fill="#c9c9c9">Передает KNX TP телеграммы в роутер</text>
<text xml:space="preserve" text-anchor="start" x="1847" y="-1107.47" font-family="Arial" font-size="14.00" fill="#c9c9c9">1.1.0</text>
</g>
<!-- public&#45;knx&#45;endpoint&#45;&gt;knx&#45;router -->
<g id="edge1" class="edge">
<title>public&#45;knx&#45;endpoint&#45;&gt;knx&#45;router</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1727.74,-269.82C1752.41,-418.54 1801.91,-716.88 1827.63,-871.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1824.98,-871.98 1828.8,-878.95 1830.16,-871.13 1824.98,-871.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1806.09,-509.8 1806.09,-549.4 2095.7,-549.4 2095.7,-509.8 1806.09,-509.8"/>
<text xml:space="preserve" text-anchor="start" x="1809.09" y="-532.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Проброс UDP 7171 &#45;&gt; 3671 для удаленного</text>
<text xml:space="preserve" text-anchor="start" x="1809.09" y="-515.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">KNX/IP доступа</text>
</g>
<!-- knx&#45;router&#45;&gt;collector&#45;runtime -->
<g id="edge2" class="edge">
<title>knx&#45;router&#45;&gt;collector&#45;runtime</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2034.78,-959.49C2229.97,-940.24 2535.12,-887.65 2756,-744 2800.82,-714.85 2838.62,-669.4 2866.77,-627.91"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2868.79,-629.62 2870.77,-621.92 2864.42,-626.7 2868.79,-629.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2734.74,-752 2734.74,-791.6 3013.06,-791.6 3013.06,-752 2734.74,-752"/>
<text xml:space="preserve" text-anchor="start" x="2737.74" y="-774.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Экспонирует group address и телеграммы</text>
<text xml:space="preserve" text-anchor="start" x="2737.74" y="-757.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">через KNX/IP</text>
</g>
<!-- delivery&#45;worker&#45;&gt;mqtt&#45;ingestion&#45;gateway -->
<g id="edge7" class="edge">
<title>delivery&#45;worker&#45;&gt;mqtt&#45;ingestion&#45;gateway</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3213.38,-441.12C3211.92,-440.61 3210.46,-440.1 3209,-439.6 2985.81,-363.01 2910.39,-410.08 2691,-323.2 2657.97,-310.12 2624.15,-292.91 2592.68,-275"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2594.3,-272.9 2586.49,-271.44 2591.68,-277.45 2594.3,-272.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2866.95,-343.4 2866.95,-366.2 2893.94,-366.2 2893.94,-343.4 2866.95,-343.4"/>
<text xml:space="preserve" text-anchor="start" x="2869.95" y="-351.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- delivery&#45;worker&#45;&gt;configuration&#45;bundle -->
<g id="edge4" class="edge">
<title>delivery&#45;worker&#45;&gt;configuration&#45;bundle</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3281.97,-439.76C3216.58,-389.7 3134.9,-327.16 3068.22,-276.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3070.12,-274.26 3062.57,-271.78 3066.93,-278.43 3070.12,-274.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3184.61,-335 3184.61,-374.6 3469.12,-374.6 3469.12,-335 3184.61,-335"/>
<text xml:space="preserve" text-anchor="start" x="3187.61" y="-357.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Загружает настройки MQTT, topic contract</text>
<text xml:space="preserve" text-anchor="start" x="3187.61" y="-340.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">и retry&#45;политики</text>
</g>
<!-- delivery&#45;worker&#45;&gt;outbox&#45;store -->
<g id="edge6" class="edge">
<title>delivery&#45;worker&#45;&gt;outbox&#45;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3582.47,-511.38C3672.45,-492.61 3773.11,-453.93 3829,-374.6 3868.23,-318.92 3813.5,-273.26 3743.49,-240.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3744.64,-237.93 3736.73,-237.19 3742.45,-242.7 3744.64,-237.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3842.06,-335 3842.06,-374.6 4112.56,-374.6 4112.56,-335 3842.06,-335"/>
<text xml:space="preserve" text-anchor="start" x="3845.06" y="-357.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Читает ожидающие события и обновляет</text>
<text xml:space="preserve" text-anchor="start" x="3845.06" y="-340.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">статус доставки</text>
</g>
<!-- grafana&#45;&gt;mqtt&#45;ingestion&#45;gateway -->
<g id="edge8" class="edge">
<title>grafana&#45;&gt;mqtt&#45;ingestion&#45;gateway</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2451.49,-439.99C2451.21,-391.15 2450.86,-330.4 2450.57,-280.01"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2453.2,-280.27 2450.53,-272.78 2447.95,-280.3 2453.2,-280.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2451.06,-343.4 2451.06,-366.2 2478.05,-366.2 2478.05,-343.4 2451.06,-343.4"/>
<text xml:space="preserve" text-anchor="start" x="2454.06" y="-351.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- collector&#45;runtime&#45;&gt;public&#45;knx&#45;endpoint -->
<g id="edge9" class="edge">
<title>collector&#45;runtime&#45;&gt;public&#45;knx&#45;endpoint</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2760.63,-441.28C2759.08,-440.71 2757.54,-440.15 2756,-439.6 2614.12,-389 2570.83,-405.38 2423.37,-374.6 2320.26,-353.07 2293.97,-349.63 2192,-323.2 2093.86,-297.77 1985.5,-265.92 1896.7,-238.81"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1897.63,-236.35 1889.69,-236.67 1896.1,-241.37 1897.63,-236.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2423.37,-335 2423.37,-374.6 2697,-374.6 2697,-335 2423.37,-335"/>
<text xml:space="preserve" text-anchor="start" x="2426.37" y="-357.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Подключается к стенду через whitelisted</text>
<text xml:space="preserve" text-anchor="start" x="2426.37" y="-340.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">public KNX/IP endpoint</text>
</g>
<!-- collector&#45;runtime&#45;&gt;configuration&#45;bundle -->
<g id="edge3" class="edge">
<title>collector&#45;runtime&#45;&gt;configuration&#45;bundle</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2927.61,-439.99C2930.7,-391.15 2934.54,-330.4 2937.73,-280.01"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2940.34,-280.43 2938.19,-272.77 2935.1,-280.09 2940.34,-280.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2933.66,-335 2933.66,-374.6 3211.94,-374.6 3211.94,-335 2933.66,-335"/>
<text xml:space="preserve" text-anchor="start" x="2936.66" y="-357.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Загружает описания источников, модель</text>
<text xml:space="preserve" text-anchor="start" x="2936.66" y="-340.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">сигналов и runtime&#45;политики</text>
</g>
<!-- collector&#45;runtime&#45;&gt;outbox&#45;store -->
<g id="edge5" class="edge">
<title>collector&#45;runtime&#45;&gt;outbox&#45;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3083.62,-507.43C3189.34,-487.19 3326.05,-448.31 3427,-374.6 3460.93,-349.82 3489.22,-313.73 3510.92,-279.41"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3512.99,-281.06 3514.71,-273.3 3508.53,-278.29 3512.99,-281.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3469.15,-335 3469.15,-374.6 3735.76,-374.6 3735.76,-335 3469.15,-335"/>
<text xml:space="preserve" text-anchor="start" x="3472.15" y="-357.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Сохраняет нормализованные события и</text>
<text xml:space="preserve" text-anchor="start" x="3472.15" y="-340.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">задания на доставку</text>
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
<!-- grafana -->
<g id="node1" class="node">
<title>grafana</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="881.22,-1538.4 525.17,-1538.4 525.17,-1358.4 881.22,-1358.4 881.22,-1538.4"/>
<text xml:space="preserve" text-anchor="start" x="667.06" y="-1497.2" font-family="Arial" font-size="20.00" fill="#ffe0c2">Grafana</text>
<text xml:space="preserve" text-anchor="start" x="587.58" y="-1476.2" font-family="Arial" font-size="13.00" fill="#f9b27c">Grafana OSS / grafana&#45;mqtt&#45;datasource</text>
<text xml:space="preserve" text-anchor="start" x="568.58" y="-1454.6" font-family="Arial" font-size="15.00" fill="#f9b27c">Слой визуализации Monitoring &amp; Alarm</text>
<text xml:space="preserve" text-anchor="start" x="545.23" y="-1436.6" font-family="Arial" font-size="15.00" fill="#f9b27c">Platform: live&#45;панели, инженерные dashboards</text>
<text xml:space="preserve" text-anchor="start" x="551.08" y="-1418.6" font-family="Arial" font-size="15.00" fill="#f9b27c">и операторские представления. В текущей</text>
<text xml:space="preserve" text-anchor="start" x="547.33" y="-1400.6" font-family="Arial" font-size="15.00" fill="#f9b27c">реализации подключается к MQTT Ingestion</text>
<text xml:space="preserve" text-anchor="start" x="564.39" y="-1382.6" font-family="Arial" font-size="15.00" fill="#f9b27c">Gateway через grafana&#45;mqtt&#45;datasource.</text>
</g>
<!-- platform&#45;api -->
<g id="node2" class="node">
<title>platform&#45;api</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1605.97,-1538.4 1262.43,-1538.4 1262.43,-1358.4 1605.97,-1358.4 1605.97,-1538.4"/>
<text xml:space="preserve" text-anchor="start" x="1378.07" y="-1479.2" font-family="Arial" font-size="20.00" fill="#ffe0c2">Platform API</text>
<text xml:space="preserve" text-anchor="start" x="1352.56" y="-1458.2" font-family="Arial" font-size="13.00" fill="#f9b27c">HTTP API / backend service</text>
<text xml:space="preserve" text-anchor="start" x="1282.48" y="-1436.6" font-family="Arial" font-size="15.00" fill="#f9b27c">Backend API для состояния alarm, истории</text>
<text xml:space="preserve" text-anchor="start" x="1286.25" y="-1418.6" font-family="Arial" font-size="15.00" fill="#f9b27c">событий, конфигурации правил и политик</text>
<text xml:space="preserve" text-anchor="start" x="1386.27" y="-1400.6" font-family="Arial" font-size="15.00" fill="#f9b27c">уведомлений.</text>
</g>
<!-- mqtt&#45;ingestion&#45;gateway -->
<g id="node3" class="node">
<title>mqtt&#45;ingestion&#45;gateway</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="879.14,-1198.8 527.25,-1198.8 527.25,-1018.8 879.14,-1018.8 879.14,-1198.8"/>
<text xml:space="preserve" text-anchor="start" x="589.27" y="-1157.6" font-family="Arial" font-size="20.00" fill="#ffe0c2">MQTT Ingestion Gateway</text>
<text xml:space="preserve" text-anchor="start" x="610.73" y="-1136.6" font-family="Arial" font-size="13.00" fill="#f9b27c">MQTT broker / ingestion service</text>
<text xml:space="preserve" text-anchor="start" x="553.16" y="-1115" font-family="Arial" font-size="15.00" fill="#f9b27c">Принимает MQTT telemetry events и service</text>
<text xml:space="preserve" text-anchor="start" x="556.07" y="-1097" font-family="Arial" font-size="15.00" fill="#f9b27c">topics от edge&#45;агентов, восстанавливает</text>
<text xml:space="preserve" text-anchor="start" x="551.46" y="-1079" font-family="Arial" font-size="15.00" fill="#f9b27c">routing context из topic, валидирует payload</text>
<text xml:space="preserve" text-anchor="start" x="547.31" y="-1061" font-family="Arial" font-size="15.00" fill="#f9b27c">и передает canonical events на хранение и в</text>
<text xml:space="preserve" text-anchor="start" x="638.58" y="-1043" font-family="Arial" font-size="15.00" fill="#f9b27c">Alarm Rule Engine.</text>
</g>
<!-- alarm&#45;rule&#45;engine -->
<g id="node4" class="node">
<title>alarm&#45;rule&#45;engine</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1716.87,-859.2 1347.53,-859.2 1347.53,-679.2 1716.87,-679.2 1716.87,-859.2"/>
<text xml:space="preserve" text-anchor="start" x="1448.82" y="-800" font-family="Arial" font-size="20.00" fill="#ffe0c2">Alarm Rule Engine</text>
<text xml:space="preserve" text-anchor="start" x="1441.88" y="-779" font-family="Arial" font-size="13.00" fill="#f9b27c">Rule engine / stream processor</text>
<text xml:space="preserve" text-anchor="start" x="1367.58" y="-757.4" font-family="Arial" font-size="15.00" fill="#f9b27c">Обрабатывает входящие события по правилам,</text>
<text xml:space="preserve" text-anchor="start" x="1382.17" y="-739.4" font-family="Arial" font-size="15.00" fill="#f9b27c">ведет жизненный цикл alarm и инициирует</text>
<text xml:space="preserve" text-anchor="start" x="1438.43" y="-721.4" font-family="Arial" font-size="15.00" fill="#f9b27c">уведомления и эскалации.</text>
</g>
<!-- notification&#45;service -->
<g id="node5" class="node">
<title>notification&#45;service</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1727.29,-519.6 1337.11,-519.6 1337.11,-339.6 1727.29,-339.6 1727.29,-519.6"/>
<text xml:space="preserve" text-anchor="start" x="1446.61" y="-451.4" font-family="Arial" font-size="20.00" fill="#ffe0c2">Notification Service</text>
<text xml:space="preserve" text-anchor="start" x="1448.75" y="-430.4" font-family="Arial" font-size="13.00" fill="#f9b27c">Worker / notification gateway</text>
<text xml:space="preserve" text-anchor="start" x="1357.16" y="-408.8" font-family="Arial" font-size="15.00" fill="#f9b27c">Маршрутизирует уведомления во внешние каналы</text>
<text xml:space="preserve" text-anchor="start" x="1379.67" y="-390.8" font-family="Arial" font-size="15.00" fill="#f9b27c">по alarm&#45;политикам и правилам эскалации.</text>
</g>
<!-- telemetry&#45;store -->
<g id="node6" class="node">
<title>telemetry&#45;store</title>
<path fill="#a35829" stroke="#7e451d" stroke-width="2" d="M1198.29,-503.24C1198.29,-512.27 1110.85,-519.6 1003.2,-519.6 895.55,-519.6 808.11,-512.27 808.11,-503.24 808.11,-503.24 808.11,-355.96 808.11,-355.96 808.11,-346.93 895.55,-339.6 1003.2,-339.6 1110.85,-339.6 1198.29,-346.93 1198.29,-355.96 1198.29,-355.96 1198.29,-503.24 1198.29,-503.24"/>
<path fill="none" stroke="#7e451d" stroke-width="2" d="M1198.29,-503.24C1198.29,-494.21 1110.85,-486.87 1003.2,-486.87 895.55,-486.87 808.11,-494.21 808.11,-503.24"/>
<text xml:space="preserve" text-anchor="start" x="932.06" y="-460.4" font-family="Arial" font-size="20.00" fill="#ffe0c2">Telemetry Store</text>
<text xml:space="preserve" text-anchor="start" x="903.13" y="-439.4" font-family="Arial" font-size="13.00" fill="#f9b27c">Time&#45;series DB / relational storage</text>
<text xml:space="preserve" text-anchor="start" x="828.16" y="-417.8" font-family="Arial" font-size="15.00" fill="#f9b27c">Хранит телеметрию, служебные события, историю</text>
<text xml:space="preserve" text-anchor="start" x="869.84" y="-399.8" font-family="Arial" font-size="15.00" fill="#f9b27c">alarm и данные для мониторинговых и</text>
<text xml:space="preserve" text-anchor="start" x="915.68" y="-381.8" font-family="Arial" font-size="15.00" fill="#f9b27c">операторских запросов.</text>
</g>
<!-- service&#45;engineer -->
<g id="node7" class="node">
<title>service&#45;engineer</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="931.46,-1887.2 532.94,-1887.2 532.94,-1707.2 931.46,-1707.2 931.46,-1887.2"/>
<text xml:space="preserve" text-anchor="start" x="640.51" y="-1818.2" font-family="Arial" font-size="20.00" fill="#f8fafc">Сервисный инженер</text>
<text xml:space="preserve" text-anchor="start" x="557.16" y="-1795.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">Настраивает источники данных, схему сигналов,</text>
<text xml:space="preserve" text-anchor="start" x="553" y="-1777.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">правила доставки и эксплуатационные параметры</text>
<text xml:space="preserve" text-anchor="start" x="592.16" y="-1759.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">edge&#45;агента и центральной платформы.</text>
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
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1424.55,-1887.2 1041.85,-1887.2 1041.85,-1707.2 1424.55,-1707.2 1424.55,-1887.2"/>
<text xml:space="preserve" text-anchor="start" x="1133.7" y="-1837" font-family="Arial" font-size="20.00" fill="#ffe0c2">Edge Telemetry Agent</text>
<text xml:space="preserve" text-anchor="start" x="1113.61" y="-1816" font-family="Arial" font-size="13.00" fill="#f9b27c">Edge collector / normalization / buffering /</text>
<text xml:space="preserve" text-anchor="start" x="1061.9" y="-1794.4" font-family="Arial" font-size="15.00" fill="#f9b27c">Универсальная edge&#45;система, разворачиваемая</text>
<text xml:space="preserve" text-anchor="start" x="1074.83" y="-1776.4" font-family="Arial" font-size="15.00" fill="#f9b27c">на объекте рядом с полевыми протоколами и</text>
<text xml:space="preserve" text-anchor="start" x="1079" y="-1758.4" font-family="Arial" font-size="15.00" fill="#f9b27c">отвечающая за сбор данных, нормализацию,</text>
<text xml:space="preserve" text-anchor="start" x="1066.5" y="-1740.4" font-family="Arial" font-size="15.00" fill="#f9b27c">фильтрацию, буферизацию и доставку событий.</text>
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
<!-- grafana&#45;&gt;mqtt&#45;ingestion&#45;gateway -->
<g id="edge3" class="edge">
<title>grafana&#45;&gt;mqtt&#45;ingestion&#45;gateway</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M703.2,-1358.7C703.2,-1312.74 703.2,-1256.47 703.2,-1209.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="705.82,-1209.31 703.2,-1201.81 700.57,-1209.31 705.82,-1209.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="703.2,-1258.8 703.2,-1298.4 971.35,-1298.4 971.35,-1258.8 703.2,-1258.8"/>
<text xml:space="preserve" text-anchor="start" x="706.2" y="-1281.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Подписывается на live MQTT telemetry и</text>
<text xml:space="preserve" text-anchor="start" x="706.2" y="-1264.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">service topics</text>
</g>
<!-- platform&#45;api&#45;&gt;alarm&#45;rule&#45;engine -->
<g id="edge4" class="edge">
<title>platform&#45;api&#45;&gt;alarm&#45;rule&#45;engine</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1494.47,-1358.62C1554.6,-1264.25 1642.94,-1108.3 1678.2,-958.8 1686.03,-925.6 1673.7,-894.24 1653.38,-866.98"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1655.71,-865.69 1649.01,-861.41 1651.58,-868.93 1655.71,-865.69"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1660.42,-1089 1660.42,-1128.6 1950.4,-1128.6 1950.4,-1089 1660.42,-1089"/>
<text xml:space="preserve" text-anchor="start" x="1663.42" y="-1111.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Читает активные alarm и управляет</text>
<text xml:space="preserve" text-anchor="start" x="1663.42" y="-1094.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">конфигурацией правил в Alarm Rule Engine</text>
</g>
<!-- platform&#45;api&#45;&gt;telemetry&#45;store -->
<g id="edge5" class="edge">
<title>platform&#45;api&#45;&gt;telemetry&#45;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1309.09,-1358.51C1198.05,-1271.22 1043.43,-1126.95 977.03,-958.8 960.41,-916.71 990.3,-903.76 998.2,-859.2 1017.88,-748.13 1016.01,-618.32 1011.2,-530.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1013.83,-530.82 1010.78,-523.48 1008.59,-531.12 1013.83,-530.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="977.03,-919.2 977.03,-958.8 1259.2,-958.8 1259.2,-919.2 977.03,-919.2"/>
<text xml:space="preserve" text-anchor="start" x="980.03" y="-941.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Читает телеметрию, историю и временные</text>
<text xml:space="preserve" text-anchor="start" x="980.03" y="-925" font-family="Arial" font-size="14.00" fill="#c9c9c9">линии alarm</text>
</g>
<!-- mqtt&#45;ingestion&#45;gateway&#45;&gt;alarm&#45;rule&#45;engine -->
<g id="edge6" class="edge">
<title>mqtt&#45;ingestion&#45;gateway&#45;&gt;alarm&#45;rule&#45;engine</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M878.92,-1081.98C998.1,-1059.95 1156.87,-1021.62 1286.2,-958.8 1336.22,-934.5 1385.95,-899.09 1427.46,-865.49"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1428.89,-867.72 1433.04,-860.94 1425.57,-863.65 1428.89,-867.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1352.24,-919.2 1352.24,-958.8 1651.51,-958.8 1651.51,-919.2 1352.24,-919.2"/>
<text xml:space="preserve" text-anchor="start" x="1355.24" y="-941.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Передает нормализованные события в Alarm</text>
<text xml:space="preserve" text-anchor="start" x="1355.24" y="-925" font-family="Arial" font-size="14.00" fill="#c9c9c9">Rule Engine</text>
</g>
<!-- mqtt&#45;ingestion&#45;gateway&#45;&gt;telemetry&#45;store -->
<g id="edge7" class="edge">
<title>mqtt&#45;ingestion&#45;gateway&#45;&gt;telemetry&#45;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M682.73,-1018.89C666.62,-928.72 654.46,-787.41 705.43,-679.2 735.18,-616.04 789.68,-563.26 843.99,-522.81"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="845.41,-525.03 849.91,-518.47 842.31,-520.79 845.41,-525.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="705.43,-749.4 705.43,-789 975.2,-789 975.2,-749.4 705.43,-749.4"/>
<text xml:space="preserve" text-anchor="start" x="708.43" y="-772" font-family="Arial" font-size="14.00" fill="#c9c9c9">Сохраняет canonical events и служебные</text>
<text xml:space="preserve" text-anchor="start" x="708.43" y="-755.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">события</text>
</g>
<!-- alarm&#45;rule&#45;engine&#45;&gt;notification&#45;service -->
<g id="edge8" class="edge">
<title>alarm&#45;rule&#45;engine&#45;&gt;notification&#45;service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1532.2,-679.5C1532.2,-633.54 1532.2,-577.27 1532.2,-529.87"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1534.82,-530.11 1532.2,-522.61 1529.57,-530.11 1534.82,-530.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1532.2,-588 1532.2,-610.8 1763.8,-610.8 1763.8,-588 1532.2,-588"/>
<text xml:space="preserve" text-anchor="start" x="1535.2" y="-593.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Запускает доставку уведомлений</text>
</g>
<!-- alarm&#45;rule&#45;engine&#45;&gt;telemetry&#45;store -->
<g id="edge9" class="edge">
<title>alarm&#45;rule&#45;engine&#45;&gt;telemetry&#45;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1347.71,-695.73C1300.4,-673.92 1250.7,-648.01 1207.47,-619.2 1168.08,-592.94 1128.88,-559.12 1095.52,-527.39"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1097.47,-525.62 1090.24,-522.32 1093.83,-529.41 1097.47,-525.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1207.47,-579.6 1207.47,-619.2 1505.2,-619.2 1505.2,-579.6 1207.47,-579.6"/>
<text xml:space="preserve" text-anchor="start" x="1210.47" y="-602.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Читает контекст и записывает состояние и</text>
<text xml:space="preserve" text-anchor="start" x="1210.47" y="-585.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">историю alarm</text>
</g>
<!-- notification&#45;service&#45;&gt;notification&#45;channels -->
<g id="edge10" class="edge">
<title>notification&#45;service&#45;&gt;notification&#45;channels</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1356.52,-339.67C1322.79,-324.81 1287.34,-310.66 1253.2,-299.6 959.26,-204.36 604.83,-145.49 388.32,-115.51"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="388.9,-112.94 381.11,-114.52 388.18,-118.14 388.9,-112.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1169.25,-240 1169.25,-279.6 1378.32,-279.6 1378.32,-240 1169.25,-240"/>
<text xml:space="preserve" text-anchor="start" x="1172.25" y="-262.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Отправляет email, SMS, push и</text>
<text xml:space="preserve" text-anchor="start" x="1172.25" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">webhook&#45;уведомления</text>
</g>
<!-- service&#45;engineer&#45;&gt;grafana -->
<g id="edge1" class="edge">
<title>service&#45;engineer&#45;&gt;grafana</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M724.77,-1707.34C720.71,-1658.81 715.67,-1598.57 711.49,-1548.52"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="714.13,-1548.6 710.89,-1541.35 708.9,-1549.04 714.13,-1548.6"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="719.43,-1607.6 719.43,-1647.2 1016.42,-1647.2 1016.42,-1607.6 719.43,-1607.6"/>
<text xml:space="preserve" text-anchor="start" x="722.43" y="-1630.2" font-family="Arial" font-size="14.00" fill="#22c55e">Настраивает dashboards и проверяет поток</text>
<text xml:space="preserve" text-anchor="start" x="722.43" y="-1613.4" font-family="Arial" font-size="14.00" fill="#22c55e">телеметрии</text>
</g>
<!-- operator&#45;dispatcher&#45;&gt;grafana -->
<g id="edge2" class="edge">
<title>operator&#45;dispatcher&#45;&gt;grafana</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M297.98,-1707.2C339.36,-1674.65 387.48,-1638.3 432.93,-1607.6 465.22,-1585.79 500.62,-1563.79 534.85,-1543.42"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="535.81,-1545.9 540.92,-1539.82 533.13,-1541.38 535.81,-1545.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="432.93,-1607.6 432.93,-1647.2 690.2,-1647.2 690.2,-1607.6 432.93,-1607.6"/>
<text xml:space="preserve" text-anchor="start" x="435.93" y="-1630.2" font-family="Arial" font-size="14.00" fill="#22c55e">Работает с live&#45;панелями, состоянием</text>
<text xml:space="preserve" text-anchor="start" x="435.93" y="-1613.4" font-family="Arial" font-size="14.00" fill="#22c55e">объекта и операторскими dashboards</text>
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

Demo-stand-current-monitored-scope -> Edge-telemetry-agent: "[...]"
Field-devices -> Field-protocol-gateways: "Передают телеграммы, состояния и команды в KNX-сегменте"
Notification-channels -> Operator-dispatcher: "Доставляют уведомления по alarm и служебные уведомления"
Monitoring-alarm-platform -> Notification-channels: "Маршрутизирует уведомления и эскалации"
Field-protocol-gateways -> Edge-telemetry-agent: "[...]"
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
Monitoring-cloudPublic-cloudMqtt-ingest-host: {
  label: "Monitoring Platform Host"

  Grafana: {
    label: "Grafana"
  }
  Mqtt-ingestion-gateway: {
    label: "MQTT Ingestion Gateway"
  }
}
Whitelisted-remote-host: {
  label: "Whitelisted Remote Host"

  Developer-networkEdge-host: {
    label: "Developer Workstation"

    Delivery-worker: {
      label: "Delivery Worker"
    }
    Grafana: {
      label: "Grafana"
    }
    Collector-runtime: {
      label: "Collector Runtime"
    }
    Mqtt-ingestion-gateway: {
      label: "MQTT Ingestion Gateway"
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
Whitelisted-remote-host.Developer-networkEdge-host.Delivery-worker -> Whitelisted-remote-host.Developer-networkEdge-host.Mqtt-ingestion-gateway: "[...]"
Whitelisted-remote-host.Developer-networkEdge-host.Grafana -> Whitelisted-remote-host.Developer-networkEdge-host.Mqtt-ingestion-gateway: "[...]"
Whitelisted-remote-host.Developer-networkEdge-host.Collector-runtime -> Demo-stand.Remote-access.Public-knx-endpoint: "Подключается к стенду через whitelisted public KNX/IP endpoint"
Monitoring-cloudPublic-cloudMqtt-ingest-host.Grafana -> Monitoring-cloudPublic-cloudMqtt-ingest-host.Mqtt-ingestion-gateway: "[...]"
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
    Grafana: {
      label: "Grafana"
    }
    Collector-runtime: {
      label: "Collector Runtime"
    }
    Mqtt-ingestion-gateway: {
      label: "MQTT Ingestion Gateway"
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
Whitelisted-remote-host.Developer-networkEdge-host.Delivery-worker -> Whitelisted-remote-host.Developer-networkEdge-host.Mqtt-ingestion-gateway: "[...]"
Whitelisted-remote-host.Developer-networkEdge-host.Grafana -> Whitelisted-remote-host.Developer-networkEdge-host.Mqtt-ingestion-gateway: "[...]"
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

  Grafana: {
    label: "Grafana"
  }
  Platform-api: {
    label: "Platform API"
  }
  Mqtt-ingestion-gateway: {
    label: "MQTT Ingestion Gateway"
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

Service-engineer -> Monitoring-alarm-platform.Grafana: "Настраивает dashboards и проверяет поток телеметрии"
Operator-dispatcher -> Monitoring-alarm-platform.Grafana: "Работает с live-панелями, состоянием объекта и операторскими dashboards"
Monitoring-alarm-platform.Alarm-rule-engine -> Monitoring-alarm-platform.Notification-service: "Запускает доставку уведомлений"
Monitoring-alarm-platform.Alarm-rule-engine -> Monitoring-alarm-platform.Telemetry-store: "Читает контекст и записывает состояние и историю alarm"
Monitoring-alarm-platform.Mqtt-ingestion-gateway -> Monitoring-alarm-platform.Alarm-rule-engine: "Передает нормализованные события в Alarm Rule Engine"
Monitoring-alarm-platform.Platform-api -> Monitoring-alarm-platform.Alarm-rule-engine: "Читает активные alarm и управляет конфигурацией правил в Alarm Rule Engine"
Monitoring-alarm-platform.Grafana -> Monitoring-alarm-platform.Mqtt-ingestion-gateway: "Подписывается на live MQTT telemetry и service topics"
Monitoring-alarm-platform.Mqtt-ingestion-gateway -> Monitoring-alarm-platform.Telemetry-store: "Сохраняет canonical events и служебные события"
Monitoring-alarm-platform.Platform-api -> Monitoring-alarm-platform.Telemetry-store: "Читает телеметрию, историю и временные линии alarm"
Monitoring-alarm-platform.Notification-service -> Notification-channels: "Отправляет email, SMS, push и webhook-уведомления"
Notification-channels -> Operator-dispatcher: "Доставляют уведомления по alarm и служебные уведомления"
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
`;default:throw new Error("Unknown viewId: "+e)}}const d5=Object.freeze(Object.defineProperty({__proto__:null,d2Source:c5},Symbol.toStringTag,{value:"Module"}));export{D5 as $,C5 as A,P5 as B,e2 as C,we as D,$t as E,k5 as F,S5 as G,Ws as H,ls as I,Bt as J,q5 as K,ro as L,v4 as M,br as N,Zm as O,Xs as P,Vy as Q,Ee as R,rs as S,ei as T,A5 as U,I5 as V,Gt as W,L4 as X,K5 as Y,Uy as Z,_m as _,Ie as a,R4 as a0,Z5 as a1,X5 as a2,j5 as a3,$5 as a4,H5 as a5,W5 as a6,G5 as b,L5 as c,v5 as d,T5 as e,To as f,z5 as g,Jm as h,O5 as i,Ms as j,xo as k,Tt as l,cs as m,n2 as n,yn as o,Pt as p,N5 as q,M5 as r,R5 as s,w5 as t,Ym as u,ll as v,E5 as w,z as x,F5 as y,an as z};
