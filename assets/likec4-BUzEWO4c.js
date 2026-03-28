import{r as bt,p as yt,d as Vn,j as ct}from"./vendors-CwlMtw8m.js";const cc="modulepreload",dc=function(e){return"/wm/"+e},di={},Bt=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){let s=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=i?.nonce||i?.getAttribute("nonce");o=s(n.map(c=>{if(c=dc(c),c in di)return;di[c]=!0;const d=c.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":cc,d||(u.as="script"),u.crossOrigin="",u.href=c,a&&u.setAttribute("nonce",a),document.head.appendChild(u),d)return new Promise((h,p)=>{u.addEventListener("load",h),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function l(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return o.then(i=>{for(const a of i||[])a.status==="rejected"&&l(a.reason);return t().catch(l)})};let Ce=[],ot=0,qn=0;const Lo=e=>{let t=[],n={get(){return n.lc||n.listen(()=>{})(),n.value},lc:0,listen(r){return n.lc=t.push(r),()=>{for(let l=ot+4;l<Ce.length;)Ce[l]===r?Ce.splice(l,4):l+=4;let o=t.indexOf(r);~o&&(t.splice(o,1),--n.lc||n.off())}},notify(r,o){qn++;let l=!Ce.length;for(let i of t)Ce.push(i,n.value,r,o);if(l){for(ot=0;ot<Ce.length;ot+=4)Ce[ot](Ce[ot+1],Ce[ot+2],Ce[ot+3]);Ce.length=0}},off(){},set(r){let o=n.value;o!==r&&(n.value=r,n.notify(o))},subscribe(r){let o=n.listen(r);return r(n.value),o},value:e};return n};let fc=(e,t,n,r)=>(e.events=e.events||{},e.events[n+10]||(e.events[n+10]=r(o=>{e.events[n].reduceRight((l,i)=>(i(l),l),{shared:{},...o})})),e.events[n]=e.events[n]||[],e.events[n].push(t),()=>{let o=e.events[n],l=o.indexOf(t);o.splice(l,1),o.length||(delete e.events[n],e.events[n+10](),delete e.events[n+10])}),uc=(e,t)=>fc(e,r=>{let o=t(r);o&&e.events[6].push(o)},5,r=>{let o=e.listen;e.listen=(...i)=>(!e.lc&&!e.active&&(e.active=!0,r()),o(...i));let l=e.off;return e.events[6]=[],e.off=()=>{l(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let i of e.events[6])i();e.events[6]=[]}},1e3)},()=>{e.listen=o,e.off=l}}),hc=(e,t,n)=>{Array.isArray(e)||(e=[e]);let r,o,l=()=>{if(o===qn)return;o=qn;let c=e.map(d=>d.get());if(!r||c.some((d,f)=>d!==r[f])){r=c;let d=t(...c);d&&d.then&&d.t?d.then(f=>{r===c&&i.set(f)}):(i.set(d),o=qn)}},i=Lo(void 0),a=i.get;i.get=()=>(l(),a());let s=l;return uc(i,()=>{let c=e.map(d=>d.listen(s));return l(),()=>{for(let d of c)d()}}),i};const fi=(e,t)=>hc(e,t);function pc(e,t,n){let r=new Set(t).add(void 0);return e.listen((o,l,i)=>{r.has(i)&&n(o,l,i)})}let kr=(e,t)=>n=>{e.current!==n&&(e.current=n,t())};function ro(e,{keys:t,deps:n=[e,t]}={}){let r=bt.useRef();r.current=e.get();let o=bt.useCallback(i=>(kr(r,i)(e.value),t?.length>0?pc(e,t,kr(r,i)):e.listen(kr(r,i))),n),l=()=>r.current;return bt.useSyncExternalStore(o,l,l)}Math.random.bind(Math);function mc(e,t,n){let r=o=>e(o,...t);return n===void 0?r:Object.assign(r,{lazy:n,lazyArgs:t})}function Sl(e,t,n){let r=e.length-t.length;if(r===0)return e(...t);if(r===1)return mc(e,t,n);throw Error("Wrong number of arguments")}function ui(...e){return Sl(Tn,e)}function Tn(e,t){if(e===t||Object.is(e,t))return!0;if(typeof e!="object"||typeof t!="object"||e===null||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;if(Array.isArray(e))return gc(e,t);if(e instanceof Map)return yc(e,t);if(e instanceof Set)return xc(e,t);if(e instanceof Date)return e.getTime()===t.getTime();if(e instanceof RegExp)return e.toString()===t.toString();if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let[n,r]of Object.entries(e))if(!(n in t)||!Tn(r,t[n]))return!1;return!0}function gc(e,t){if(e.length!==t.length)return!1;for(let[n,r]of e.entries())if(!Tn(r,t[n]))return!1;return!0}function yc(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e.entries())if(!t.has(n)||!Tn(r,t.get(n)))return!1;return!0}function xc(e,t){if(e.size!==t.size)return!1;let n=[...t];for(let r of e){let o=!1;for(let[l,i]of n.entries())if(Tn(r,i)){o=!0,n.splice(l,1);break}if(!o)return!1}return!0}function bc(...e){return Sl(Tc,e)}function Tc(e,t){let n={};for(let[r,o]of Object.entries(e))n[r]=t(o,r,e);return n}[...`	.
.\v.\f.\r. .. . . . . . . . . . . . . .\u2028.\u2029. . .　.\uFEFF`.split(".")];function wr(e){if(typeof e!="object"||!e)return!1;let t=Object.getPrototypeOf(e);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in e?!1:Symbol.toStringTag in e?Object.prototype.toString.call(e)==="[object Module]":!0}function oo(e,t,n=".",r){if(!wr(t))return oo(e,{},n);let o=Object.assign({},t);for(let l in e){if(l==="__proto__"||l==="constructor")continue;let i=e[l];i!=null&&(Array.isArray(i)&&Array.isArray(o[l])?o[l]=[...i,...o[l]]:wr(i)&&wr(o[l])?o[l]=oo(i,o[l],(n?`${n}.`:"")+l.toString()):o[l]=i)}return o}function kc(e){return(...t)=>t.reduce((n,r)=>oo(n,r,""),{})}const Pl=kc();function wc(e,t,n){let r=o=>e(o,...t);return n===void 0?r:Object.assign(r,{lazy:n,lazyArgs:t})}function se(e,t,n){let r=e.length-t.length;if(r===0)return e(...t);if(r===1)return wc(e,t,n);throw Error("Wrong number of arguments")}function vc(...e){return se(Bc,e)}const Bc=(e,t)=>t.every(n=>n(e));function Ec(...e){return se(Ac,e)}const Ac=(e,t)=>t.some(n=>n(e)),ar={done:!1,hasNext:!1},Dc=e=>({hasNext:!0,next:e,done:!1});function Me(e,...t){let n=e,r=t.map(l=>"lazy"in l?Fc(l):void 0),o=0;for(;o<t.length;){if(r[o]===void 0||!Nc(n)){let s=t[o];n=s(n),o+=1;continue}let l=[];for(let s=o;s<t.length;s++){let c=r[s];if(c===void 0||(l.push(c),c.isSingle))break}let i=[];for(let s of n)if(zl(s,i,l))break;let{isSingle:a}=l.at(-1);n=a?i[0]:i,o+=l.length}return n}function zl(e,t,n){if(n.length===0)return t.push(e),!1;let r=e,o=ar,l=!1;for(let[i,a]of n.entries()){let{index:s,items:c}=a;if(c.push(r),o=a(r,s,c),a.index+=1,o.hasNext){if(o.hasMany??!1){for(let d of o.next)if(zl(d,t,n.slice(i+1)))return!0;return l}r=o.next}if(!o.hasNext)break;o.done&&(l=!0)}return o.hasNext&&t.push(r),l}function Fc(e){let{lazy:t,lazyArgs:n}=e,r=t(...n);return Object.assign(r,{isSingle:t.single??!1,index:0,items:[]})}function Nc(e){return typeof e=="string"||typeof e=="object"&&!!e&&Symbol.iterator in e}function Cc(e,t){let n=t.length-e.length;if(n===1){let[r,...o]=t;return Me(r,{lazy:e,lazyArgs:o})}if(n===0){let r={lazy:e,lazyArgs:t};return Object.assign(o=>Me(o,r),r)}throw Error("Wrong number of arguments")}function Rc(...e){return se(Oc,e,Lc)}const Oc=(e,t)=>t<0?[...e]:e.slice(t);function Lc(e){if(e<=0)return Dc;let t=e;return n=>t>0?(--t,ar):{done:!1,hasNext:!0,next:n}}function Xe(...e){return se(Ic,e)}const Ic=(e,t)=>e.length>=t,Ml={asc:(e,t)=>e>t,desc:(e,t)=>e<t};function Sc(e,t){let[n,...r]=t;if(!Pc(n))return e(n,io(...r));let o=io(n,...r);return l=>e(l,o)}function io(e,t,...n){let r=typeof e=="function"?e:e[0],o=typeof e=="function"?"asc":e[1],{[o]:l}=Ml,i=t===void 0?void 0:io(t,...n);return(a,s)=>{let c=r(a),d=r(s);return l(c,d)?1:l(d,c)?-1:i?.(a,s)??0}}function Pc(e){if(hi(e))return!0;if(typeof e!="object"||!Array.isArray(e))return!1;let[t,n,...r]=e;return hi(t)&&typeof n=="string"&&n in Ml&&r.length===0}const hi=e=>typeof e=="function"&&e.length===1;function cn(...e){return se(Object.entries,e)}function Gl(...e){return se(zc,e,Mc)}const zc=(e,t)=>e.filter(t),Mc=e=>(t,n,r)=>e(t,n,r)?{done:!1,hasNext:!0,next:t}:ar;function pi(...e){return se(Gc,e,qc)}const Gc=(e,t)=>e.flatMap(t),qc=e=>(t,n,r)=>{let o=e(t,n,r);return Array.isArray(o)?{done:!1,hasNext:!0,hasMany:!0,next:o}:{done:!1,hasNext:!0,next:o}};function vr(...e){return se(Kc,e)}const Kc=(e,t)=>{let n=Object.create(null);for(let r=0;r<e.length;r++){let o=e[r],l=t(o,r,e);if(l!==void 0){let i=n[l];i===void 0?n[l]=[o]:i.push(o)}}return Object.setPrototypeOf(n,Object.prototype),n};function Yn(...e){return se(kn,e)}function kn(e,t){if(e===t||Object.is(e,t))return!0;if(typeof e!="object"||typeof t!="object"||e===null||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;if(Array.isArray(e))return Xc(e,t);if(e instanceof Map)return jc(e,t);if(e instanceof Set)return Zc(e,t);if(e instanceof Date)return e.getTime()===t.getTime();if(e instanceof RegExp)return e.toString()===t.toString();if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let[n,r]of Object.entries(e))if(!(n in t)||!kn(r,t[n]))return!1;return!0}function Xc(e,t){if(e.length!==t.length)return!1;for(let[n,r]of e.entries())if(!kn(r,t[n]))return!1;return!0}function jc(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e.entries())if(!t.has(n)||!kn(r,t.get(n)))return!1;return!0}function Zc(e,t){if(e.size!==t.size)return!1;let n=[...t];for(let r of e){let o=!1;for(let[l,i]of n.entries())if(kn(r,i)){o=!0,n.splice(l,1);break}if(!o)return!1}return!0}function wn(e){return e===""||e===void 0?!0:Array.isArray(e)?e.length===0:Object.keys(e).length===0}function qt(e){if(e==null||e==="")return!0;if(typeof e!="object")return!1;if("length"in e&&typeof e.length=="number")return e.length===0;if("size"in e&&typeof e.size=="number")return e.size===0;for(let t in e)return!1;return Object.getOwnPropertySymbols(e).length===0}const sr=e=>typeof e=="function";function $c(e){return e!=null}function ql(e){return t=>!e(t)}function ne(e){return e==null}function Hc(e){return typeof e=="number"&&!Number.isNaN(e)}function Io(...e){return se(Uc,e)}function Uc(e,t){if(e===t||Object.is(e,t))return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;if(e instanceof Map&&t instanceof Map)return Wc(e,t);if(e instanceof Set&&t instanceof Set)return Qc(e,t);let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let r of n){if(!Object.hasOwn(t,r))return!1;let{[r]:o}=e,{[r]:l}=t;if(o!==l||!Object.is(o,l))return!1}return!0}function Wc(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e){let o=t.get(n);if(r!==o||!Object.is(r,o))return!1}return!0}function Qc(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function Le(e){return typeof e=="string"}function Se(e){return!!e}function Vc(...e){return se(Yc,e)}const Yc=e=>e.at(-1);function pn(...e){return se(Jc,e,_c)}const Jc=(e,t)=>e.map(t),_c=e=>(t,n,r)=>({done:!1,hasNext:!0,next:e(t,n,r)});function Br(...e){return se(ed,e)}function ed(e,t){let n={};for(let[r,o]of Object.entries(e))n[r]=t(o,r,e);return n}function td(...e){return se(nd,e)}function nd(e,t){let n={...e};for(let[r,o]of Object.entries(n))t(o,r,e)&&delete n[r];return n}function rd(e){let t=!1,n;return()=>(t||=(n=e(),!0),n)}function mi(...e){return se(od,e)}function od(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function Er(...e){return t=>Me(t,...e)}function mt(e,...t){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"?n=>gi(n,e,...t):gi(e,...t)}function gi(e,...t){let n=e;for(let r of t){if(n==null)return;n=n[r]}return n}function id(e,t){let n=Math.ceil(e),r=Math.floor(t);if(r<n)throw RangeError(`randomInteger: The range [${e.toString()},${t.toString()}] contains no integer`);return Math.floor(Math.random()*(r-n+1)+n)}function ld(...e){return se(ad,e)}const ad=(e,t,n)=>e.reduce(t,n);function Ar(...e){return se(sd,e)}function sd(e,t){let n=[...e];return n.sort(t),n}function Kl(...e){return Sc(cd,e)}const cd=(e,t)=>[...e].sort(t);function yi(e,t,n){return typeof t=="number"||t===void 0?r=>r.split(e,t):e.split(t,n)}[...`	.
.\v.\f.\r. .. . . . . . . . . . . . . .\u2028.\u2029. . .　.\uFEFF`.split(".")];function cr(...e){return Cc(dd,e)}function dd(){let e=new Set;return t=>e.has(t)?ar:(e.add(t),{done:!1,hasNext:!0,next:t})}function Jn(...e){return se(Object.values,e)}function fd(...e){return se(ud,e,hd)}const ud=(e,t)=>e.length<t.length?e.map((n,r)=>[n,t[r]]):t.map((n,r)=>[e[r],n]),hd=e=>(t,n)=>({hasNext:!0,next:[t,e[n]],done:n>=e.length-1});var pd=Object.create,_n=Object.defineProperty,md=Object.getOwnPropertyDescriptor,gd=Object.getOwnPropertyNames,yd=Object.getPrototypeOf,xd=Object.prototype.hasOwnProperty,re=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),vn=(e,t)=>{let n={};for(var r in e)_n(n,r,{get:e[r],enumerable:!0});return _n(n,Symbol.toStringTag,{value:"Module"}),n},bd=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(var o=gd(t),l=0,i=o.length,a;l<i;l++)a=o[l],!xd.call(e,a)&&a!==n&&_n(e,a,{get:(s=>t[s]).bind(null,a),enumerable:!(r=md(t,a))||r.enumerable});return e},je=(e,t,n)=>(n=e==null?{}:pd(yd(e)),bd(_n(n,"default",{value:e,enumerable:!0}),e)),Td=re((e=>{e.ARRAY_BUFFER_SUPPORT=typeof ArrayBuffer<"u",e.SYMBOL_SUPPORT=typeof Symbol<"u"})),_e=re(((e,t)=>{var n=Td(),r=n.ARRAY_BUFFER_SUPPORT,o=n.SYMBOL_SUPPORT;t.exports=function(i,a){var s,c,d,f,u;if(!i)throw Error("obliterator/forEach: invalid iterable.");if(typeof a!="function")throw Error("obliterator/forEach: expecting a callback.");if(Array.isArray(i)||r&&ArrayBuffer.isView(i)||typeof i=="string"||i.toString()==="[object Arguments]"){for(d=0,f=i.length;d<f;d++)a(i[d],d);return}if(typeof i.forEach=="function"){i.forEach(a);return}if(o&&Symbol.iterator in i&&typeof i.next!="function"&&(i=i[Symbol.iterator]()),typeof i.next=="function"){for(s=i,d=0;u=s.next(),u.done!==!0;)a(u.value,d),d++;return}for(c in i)i.hasOwnProperty(c)&&a(i[c],c)}})),Ht=re(((e,t)=>{function n(r){if(typeof r!="function")throw Error("obliterator/iterator: expecting a function!");this.next=r}typeof Symbol<"u"&&(n.prototype[Symbol.iterator]=function(){return this}),n.of=function(){var r=arguments,o=r.length,l=0;return new n(function(){return l>=o?{done:!0}:{done:!1,value:r[l++]}})},n.empty=function(){return new n(function(){return{done:!0}})},n.fromSequence=function(r){var o=0,l=r.length;return new n(function(){return o>=l?{done:!0}:{done:!1,value:r[o++]}})},n.is=function(r){return r instanceof n?!0:typeof r=="object"&&!!r&&typeof r.next=="function"},t.exports=n})),dr=re((e=>{var t=255,n=2**16-1,r=2**32-1,o=2**7-1,l=2**15-1,i=2**31-1;e.getPointerArray=function(s){var c=s-1;if(c<=t)return Uint8Array;if(c<=n)return Uint16Array;if(c<=r)return Uint32Array;throw Error("mnemonist: Pointer Array of size > 4294967295 is not supported.")},e.getSignedPointerArray=function(s){var c=s-1;return c<=o?Int8Array:c<=l?Int16Array:c<=i?Int32Array:Float64Array},e.getNumberType=function(s){return s===(s|0)?Math.sign(s)===-1?s<=127&&s>=-128?Int8Array:s<=32767&&s>=-32768?Int16Array:Int32Array:s<=255?Uint8Array:s<=65535?Uint16Array:Uint32Array:Float64Array};var a={Uint8Array:1,Int8Array:2,Uint16Array:3,Int16Array:4,Uint32Array:5,Int32Array:6,Float32Array:7,Float64Array:8};e.getMinimalRepresentation=function(s,c){var d=null,f=0,u,h,p,T,b;for(T=0,b=s.length;T<b;T++)p=c?c(s[T]):s[T],h=e.getNumberType(p),u=a[h.name],u>f&&(f=u,d=h);return d},e.isTypedArray=function(s){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView(s)},e.concat=function(){var s=0,c,d,f;for(c=0,f=arguments.length;c<f;c++)s+=arguments[c].length;var u=new arguments[0].constructor(s);for(c=0,d=0;c<f;c++)u.set(arguments[c],d),d+=arguments[c].length;return u},e.indices=function(s){for(var c=new(e.getPointerArray(s))(s),d=0;d<s;d++)c[d]=d;return c}})),fr=re((e=>{var t=_e(),n=dr();function r(a){return Array.isArray(a)||n.isTypedArray(a)}function o(a){if(typeof a.length=="number")return a.length;if(typeof a.size=="number")return a.size}function l(a){var s=o(a),c=typeof s=="number"?Array(s):[],d=0;return t(a,function(f){c[d++]=f}),c}function i(a){var s=o(a),c=typeof s=="number"?n.getPointerArray(s):Array,d=typeof s=="number"?Array(s):[],f=typeof s=="number"?new c(s):[],u=0;return t(a,function(h){d[u]=h,f[u]=u++}),[d,f]}e.isArrayLike=r,e.guessLength=o,e.toArray=l,e.toArrayWithIndices=i})),Xl=re(((e,t)=>{t.exports=function(r){return typeof r=="object"&&!!r&&typeof r.addUndirectedEdgeWithKey=="function"&&typeof r.dropNode=="function"&&typeof r.multi=="boolean"}})),kd=re(((e,t)=>{var n=fr(),r=Ht();function o(l,i){if(arguments.length<2)throw Error("mnemonist/fixed-deque: expecting an Array class and a capacity.");if(typeof i!="number"||i<=0)throw Error("mnemonist/fixed-deque: `capacity` should be a positive number.");this.ArrayClass=l,this.capacity=i,this.items=new l(this.capacity),this.clear()}o.prototype.clear=function(){this.start=0,this.size=0},o.prototype.push=function(l){if(this.size===this.capacity)throw Error("mnemonist/fixed-deque.push: deque capacity ("+this.capacity+") exceeded!");var i=this.start+this.size;return i>=this.capacity&&(i-=this.capacity),this.items[i]=l,++this.size},o.prototype.unshift=function(l){if(this.size===this.capacity)throw Error("mnemonist/fixed-deque.unshift: deque capacity ("+this.capacity+") exceeded!");var i=this.start-1;return this.start===0&&(i=this.capacity-1),this.items[i]=l,this.start=i,++this.size},o.prototype.pop=function(){if(this.size!==0){this.size--;var l=this.start+this.size;return l>=this.capacity&&(l-=this.capacity),this.items[l]}},o.prototype.shift=function(){if(this.size!==0){var l=this.start;return this.size--,this.start++,this.start===this.capacity&&(this.start=0),this.items[l]}},o.prototype.peekFirst=function(){if(this.size!==0)return this.items[this.start]},o.prototype.peekLast=function(){if(this.size!==0){var l=this.start+this.size-1;return l>=this.capacity&&(l-=this.capacity),this.items[l]}},o.prototype.get=function(l){if(!(this.size===0||l>=this.capacity))return l=this.start+l,l>=this.capacity&&(l-=this.capacity),this.items[l]},o.prototype.forEach=function(l,i){i=arguments.length>1?i:this;for(var a=this.capacity,s=this.size,c=this.start,d=0;d<s;)l.call(i,this.items[c],d,this),c++,d++,c===a&&(c=0)},o.prototype.toArray=function(){var l=this.start+this.size;if(l<this.capacity)return this.items.slice(this.start,l);for(var i=new this.ArrayClass(this.size),a=this.capacity,s=this.size,c=this.start,d=0;d<s;)i[d]=this.items[c],c++,d++,c===a&&(c=0);return i},o.prototype.values=function(){var l=this.items,i=this.capacity,a=this.size,s=this.start,c=0;return new r(function(){if(c>=a)return{done:!0};var d=l[s];return s++,c++,s===i&&(s=0),{value:d,done:!1}})},o.prototype.entries=function(){var l=this.items,i=this.capacity,a=this.size,s=this.start,c=0;return new r(function(){if(c>=a)return{done:!0};var d=l[s];return s++,s===i&&(s=0),{value:[c++,d],done:!1}})},typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.values),o.prototype.inspect=function(){var l=this.toArray();return l.type=this.ArrayClass.name,l.capacity=this.capacity,Object.defineProperty(l,"constructor",{value:o,enumerable:!1}),l},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),o.from=function(l,i,a){if(arguments.length<3&&(a=n.guessLength(l),typeof a!="number"))throw Error("mnemonist/fixed-deque.from: could not guess iterable length. Please provide desired capacity as last argument.");var s=new o(i,a);if(n.isArrayLike(l)){var c,d;for(c=0,d=l.length;c<d;c++)s.items[c]=l[c];return s.size=d,s}return n.forEach(l,function(f){s.push(f)}),s},t.exports=o})),wd=re((e=>{let t=Xl(),n=kd();function r(i,a){let s=0;return i.forEachInNeighbor(a,()=>{s++}),s}function o(i,a){if(!t(i))throw Error("graphology-dag/topological-sort: the given graph is not a valid graphology instance.");if(i.type==="undirected"||i.undirectedSize!==0)throw Error("graphology-dag/topological-sort: cannot work if graph is not directed.");if(i.order===0)return;let s=new n(Array,i.order),c={},d=0;i.forEachNode((h,p)=>{let T=i.multi?r(i,h):i.inDegree(h);T===0?s.push([h,p,0]):(c[h]=T,d+=T)});let f=0;function u(h,p){let T=--c[h];d--,T===0&&s.push([h,p,f+1]),c[h]=T}for(;s.size!==0;){let[h,p,T]=s.shift();f=T,a(h,p,T),i.forEachOutNeighbor(h,u)}if(d!==0)throw Error("graphology-dag/topological-sort: given graph is not acyclic.")}function l(i){if(!t(i))throw Error("graphology-dag/topological-sort: the given graph is not a valid graphology instance.");let a=Array(i.order),s=0;return o(i,c=>{a[s++]=c}),a}e.topologicalSort=l})),vd=re(((e,t)=>{let n=Xl();t.exports=function(o,l,i){if(!n(o))throw Error("graphology-dag/will-create-cycle: the given graph is not a valid graphology instance.");if(l=""+l,i=""+i,l===i)return!0;if(!o.hasNode(l)||!o.hasNode(i)||o.hasDirectedEdge(l,i))return!1;if(o.hasDirectedEdge(i,l))return!0;let a=o.outNeighbors(i);function s(c){a.push(c)}for(;a.length!==0;){let c=a.pop();if(c===l)return!0;o.forEachOutNeighbor(c,s)}return!1}})),Bd=re(((e,t)=>{var n=_e();function r(s){this.size=0,this.items=new Map,this.inverse=s}function o(){this.size=0,this.items=new Map,this.inverse=new r(this)}function l(){this.size=0,this.items.clear(),this.inverse.items.clear()}o.prototype.clear=l,r.prototype.clear=l;function i(s,c){if(this.items.has(s)){var d=this.items.get(s);if(d===c)return this;this.inverse.items.delete(d)}if(this.inverse.items.has(c)){var f=this.inverse.items.get(c);if(f===s)return this;this.items.delete(f)}return this.items.set(s,c),this.inverse.items.set(c,s),this.size=this.items.size,this.inverse.size=this.inverse.items.size,this}o.prototype.set=i,r.prototype.set=i;function a(s){if(this.items.has(s)){var c=this.items.get(s);return this.items.delete(s),this.inverse.items.delete(c),this.size=this.items.size,this.inverse.size=this.inverse.items.size,!0}return!1}o.prototype.delete=a,r.prototype.delete=a,["has","get","forEach","keys","values","entries"].forEach(function(s){o.prototype[s]=r.prototype[s]=function(){return Map.prototype[s].apply(this.items,arguments)}}),typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.entries,r.prototype[Symbol.iterator]=r.prototype.entries),o.prototype.inspect=function(){var s={left:this.items,right:this.inverse.items};return Object.defineProperty(s,"constructor",{value:o,enumerable:!1}),s},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),r.prototype.inspect=function(){var s={left:this.inverse.items,right:this.items};return Object.defineProperty(s,"constructor",{value:r,enumerable:!1}),s},typeof Symbol<"u"&&(r.prototype[Symbol.for("nodejs.util.inspect.custom")]=r.prototype.inspect),o.from=function(s){var c=new o;return n(s,function(d,f){c.set(f,d)}),c},t.exports=o})),Ed=re(((e,t)=>{function n(r){if(typeof r!="function")throw Error("mnemonist/DefaultMap.constructor: expecting a function.");this.items=new Map,this.factory=r,this.size=0}n.prototype.clear=function(){this.items.clear(),this.size=0},n.prototype.get=function(r){var o=this.items.get(r);return o===void 0&&(o=this.factory(r,this.size),this.items.set(r,o),this.size++),o},n.prototype.peek=function(r){return this.items.get(r)},n.prototype.set=function(r,o){return this.items.set(r,o),this.size=this.items.size,this},n.prototype.has=function(r){return this.items.has(r)},n.prototype.delete=function(r){var o=this.items.delete(r);return this.size=this.items.size,o},n.prototype.forEach=function(r,o){o=arguments.length>1?o:this,this.items.forEach(r,o)},n.prototype.entries=function(){return this.items.entries()},n.prototype.keys=function(){return this.items.keys()},n.prototype.values=function(){return this.items.values()},typeof Symbol<"u"&&(n.prototype[Symbol.iterator]=n.prototype.entries),n.prototype.inspect=function(){return this.items},typeof Symbol<"u"&&(n.prototype[Symbol.for("nodejs.util.inspect.custom")]=n.prototype.inspect),n.autoIncrement=function(){var r=0;return function(){return r++}},t.exports=n})),Ad=re(((e,t)=>{function n(r){if(typeof r!="function")throw Error("mnemonist/DefaultWeakMap.constructor: expecting a function.");this.items=new WeakMap,this.factory=r}n.prototype.clear=function(){this.items=new WeakMap},n.prototype.get=function(r){var o=this.items.get(r);return o===void 0&&(o=this.factory(r),this.items.set(r,o)),o},n.prototype.peek=function(r){return this.items.get(r)},n.prototype.set=function(r,o){return this.items.set(r,o),this},n.prototype.has=function(r){return this.items.has(r)},n.prototype.delete=function(r){return this.items.delete(r)},n.prototype.inspect=function(){return this.items},typeof Symbol<"u"&&(n.prototype[Symbol.for("nodejs.util.inspect.custom")]=n.prototype.inspect),t.exports=n})),Dd=re(((e,t)=>{var n=Ht(),r=_e();function o(){this.clear()}o.prototype.clear=function(){this.head=null,this.tail=null,this.size=0},o.prototype.first=function(){return this.head?this.head.item:void 0},o.prototype.peek=o.prototype.first,o.prototype.last=function(){return this.tail?this.tail.item:void 0},o.prototype.push=function(l){var i={item:l,next:null};return this.head?(this.tail.next=i,this.tail=i):(this.head=i,this.tail=i),this.size++,this.size},o.prototype.unshift=function(l){var i={item:l,next:null};return this.head?(this.head.next||(this.tail=this.head),i.next=this.head,this.head=i):(this.head=i,this.tail=i),this.size++,this.size},o.prototype.shift=function(){if(this.size){var l=this.head;return this.head=l.next,this.size--,l.item}},o.prototype.forEach=function(l,i){if(this.size){i=arguments.length>1?i:this;for(var a=this.head,s=0;a;)l.call(i,a.item,s,this),a=a.next,s++}},o.prototype.toArray=function(){if(!this.size)return[];for(var l=Array(this.size),i=0,a=this.size,s=this.head;i<a;i++)l[i]=s.item,s=s.next;return l},o.prototype.values=function(){var l=this.head;return new n(function(){if(!l)return{done:!0};var i=l.item;return l=l.next,{value:i,done:!1}})},o.prototype.entries=function(){var l=this.head,i=0;return new n(function(){if(!l)return{done:!0};var a=l.item;return l=l.next,i++,{value:[i-1,a],done:!1}})},typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.values),o.prototype.toString=function(){return this.toArray().join(",")},o.prototype.toJSON=function(){return this.toArray()},o.prototype.inspect=function(){var l=this.toArray();return Object.defineProperty(l,"constructor",{value:o,enumerable:!1}),l},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),o.from=function(l){var i=new o;return r(l,function(a){i.push(a)}),i},t.exports=o})),Fd=re(((e,t)=>{var n=Ht(),r=_e();function o(l){this.Container=l||Array,this.items=new Map,this.clear(),Object.defineProperty(this.items,"constructor",{value:o,enumerable:!1})}o.prototype.clear=function(){this.size=0,this.dimension=0,this.items.clear()},o.prototype.set=function(l,i){var a=this.items.get(l),s;return a||(this.dimension++,a=new this.Container,this.items.set(l,a)),this.Container===Set?(s=a.size,a.add(i),s<a.size&&this.size++):(a.push(i),this.size++),this},o.prototype.delete=function(l){var i=this.items.get(l);return i?(this.size-=this.Container===Set?i.size:i.length,this.dimension--,this.items.delete(l),!0):!1},o.prototype.remove=function(l,i){var a=this.items.get(l),s,c;return a?this.Container===Set?(s=a.delete(i),s&&this.size--,a.size===0&&(this.items.delete(l),this.dimension--),s):(c=a.indexOf(i),c===-1?!1:(this.size--,a.length===1?(this.items.delete(l),this.dimension--,!0):(a.splice(c,1),!0))):!1},o.prototype.has=function(l){return this.items.has(l)},o.prototype.get=function(l){return this.items.get(l)},o.prototype.multiplicity=function(l){var i=this.items.get(l);return i===void 0?0:this.Container===Set?i.size:i.length},o.prototype.count=o.prototype.multiplicity,o.prototype.forEach=function(l,i){i=arguments.length>1?i:this;var a;function s(c){l.call(i,c,a)}this.items.forEach(function(c,d){a=d,c.forEach(s)})},o.prototype.forEachAssociation=function(l,i){i=arguments.length>1?i:this,this.items.forEach(l,i)},o.prototype.keys=function(){return this.items.keys()},o.prototype.values=function(){var l=this.items.values(),i=!1,a,s,c,d;return this.Container===Set?new n(function f(){if(!i){if(s=l.next(),s.done)return{done:!0};i=!0,a=s.value.values()}return s=a.next(),s.done?(i=!1,f()):{done:!1,value:s.value}}):new n(function f(){if(!i){if(s=l.next(),s.done)return{done:!0};i=!0,a=s.value,c=0,d=a.length}return c>=d?(i=!1,f()):{done:!1,value:a[c++]}})},o.prototype.entries=function(){var l=this.items.entries(),i=!1,a,s,c,d,f;return this.Container===Set?new n(function u(){if(!i){if(s=l.next(),s.done)return{done:!0};i=!0,c=s.value[0],a=s.value[1].values()}return s=a.next(),s.done?(i=!1,u()):{done:!1,value:[c,s.value]}}):new n(function u(){if(!i){if(s=l.next(),s.done)return{done:!0};i=!0,c=s.value[0],a=s.value[1],d=0,f=a.length}return d>=f?(i=!1,u()):{done:!1,value:[c,a[d++]]}})},o.prototype.containers=function(){return this.items.values()},o.prototype.associations=function(){return this.items.entries()},typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.entries),o.prototype.inspect=function(){return this.items},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),o.prototype.toJSON=function(){return this.items},o.from=function(l,i){var a=new o(i);return r(l,function(s,c){a.set(c,s)}),a},t.exports=o})),Nd=re(((e,t)=>{var n=Ht(),r=_e();function o(){this.clear()}o.prototype.clear=function(){this.items=[],this.offset=0,this.size=0},o.prototype.enqueue=function(l){return this.items.push(l),++this.size},o.prototype.dequeue=function(){if(this.size){var l=this.items[this.offset];return++this.offset*2>=this.items.length&&(this.items=this.items.slice(this.offset),this.offset=0),this.size--,l}},o.prototype.peek=function(){if(this.size)return this.items[this.offset]},o.prototype.forEach=function(l,i){i=arguments.length>1?i:this;for(var a=this.offset,s=0,c=this.items.length;a<c;a++,s++)l.call(i,this.items[a],s,this)},o.prototype.toArray=function(){return this.items.slice(this.offset)},o.prototype.values=function(){var l=this.items,i=this.offset;return new n(function(){if(i>=l.length)return{done:!0};var a=l[i];return i++,{value:a,done:!1}})},o.prototype.entries=function(){var l=this.items,i=this.offset,a=0;return new n(function(){if(i>=l.length)return{done:!0};var s=l[i];return i++,{value:[a++,s],done:!1}})},typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.values),o.prototype.toString=function(){return this.toArray().join(",")},o.prototype.toJSON=function(){return this.toArray()},o.prototype.inspect=function(){var l=this.toArray();return Object.defineProperty(l,"constructor",{value:o,enumerable:!1}),l},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),o.from=function(l){var i=new o;return r(l,function(a){i.enqueue(a)}),i},o.of=function(){return o.from(arguments)},t.exports=o})),Cd=re(((e,t)=>{var n=Ht(),r=_e(),o=dr(),l=fr();function i(a,s,c){if(arguments.length<2&&(c=a,a=null,s=null),this.capacity=c,typeof this.capacity!="number"||this.capacity<=0)throw Error("mnemonist/lru-cache: capacity should be positive number.");if(!isFinite(this.capacity)||Math.floor(this.capacity)!==this.capacity)throw Error("mnemonist/lru-cache: capacity should be a finite positive integer.");var d=o.getPointerArray(c);this.forward=new d(c),this.backward=new d(c),this.K=typeof a=="function"?new a(c):Array(c),this.V=typeof s=="function"?new s(c):Array(c),this.size=0,this.head=0,this.tail=0,this.items={}}i.prototype.clear=function(){this.size=0,this.head=0,this.tail=0,this.items={}},i.prototype.splayOnTop=function(a){var s=this.head;if(this.head===a)return this;var c=this.backward[a],d=this.forward[a];return this.tail===a?this.tail=c:this.backward[d]=c,this.forward[c]=d,this.backward[s]=a,this.head=a,this.forward[a]=s,this},i.prototype.set=function(a,s){var c=this.items[a];if(c!==void 0){this.splayOnTop(c),this.V[c]=s;return}this.size<this.capacity?c=this.size++:(c=this.tail,this.tail=this.backward[c],delete this.items[this.K[c]]),this.items[a]=c,this.K[c]=a,this.V[c]=s,this.forward[c]=this.head,this.backward[this.head]=c,this.head=c},i.prototype.setpop=function(a,s){var c=null,d=null,f=this.items[a];return f===void 0?(this.size<this.capacity?f=this.size++:(f=this.tail,this.tail=this.backward[f],c=this.V[f],d=this.K[f],delete this.items[d]),this.items[a]=f,this.K[f]=a,this.V[f]=s,this.forward[f]=this.head,this.backward[this.head]=f,this.head=f,d?{evicted:!0,key:d,value:c}:null):(this.splayOnTop(f),c=this.V[f],this.V[f]=s,{evicted:!1,key:a,value:c})},i.prototype.has=function(a){return a in this.items},i.prototype.get=function(a){var s=this.items[a];if(s!==void 0)return this.splayOnTop(s),this.V[s]},i.prototype.peek=function(a){var s=this.items[a];if(s!==void 0)return this.V[s]},i.prototype.forEach=function(a,s){s=arguments.length>1?s:this;for(var c=0,d=this.size,f=this.head,u=this.K,h=this.V,p=this.forward;c<d;)a.call(s,h[f],u[f],this),f=p[f],c++},i.prototype.keys=function(){var a=0,s=this.size,c=this.head,d=this.K,f=this.forward;return new n(function(){if(a>=s)return{done:!0};var u=d[c];return a++,a<s&&(c=f[c]),{done:!1,value:u}})},i.prototype.values=function(){var a=0,s=this.size,c=this.head,d=this.V,f=this.forward;return new n(function(){if(a>=s)return{done:!0};var u=d[c];return a++,a<s&&(c=f[c]),{done:!1,value:u}})},i.prototype.entries=function(){var a=0,s=this.size,c=this.head,d=this.K,f=this.V,u=this.forward;return new n(function(){if(a>=s)return{done:!0};var h=d[c],p=f[c];return a++,a<s&&(c=u[c]),{done:!1,value:[h,p]}})},typeof Symbol<"u"&&(i.prototype[Symbol.iterator]=i.prototype.entries),i.prototype.inspect=function(){for(var a=new Map,s=this.entries(),c;c=s.next(),!c.done;)a.set(c.value[0],c.value[1]);return Object.defineProperty(a,"constructor",{value:i,enumerable:!1}),a},typeof Symbol<"u"&&(i.prototype[Symbol.for("nodejs.util.inspect.custom")]=i.prototype.inspect),i.from=function(a,s,c,d){if(arguments.length<2){if(d=l.guessLength(a),typeof d!="number")throw Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.")}else arguments.length===2&&(d=s,s=null,c=null);var f=new i(s,c,d);return r(a,function(u,h){f.set(h,u)}),f},t.exports=i})),jl=re(((e,t)=>{var n=Cd(),r=_e(),o=dr(),l=fr();function i(a,s,c){if(arguments.length<2&&(c=a,a=null,s=null),this.capacity=c,typeof this.capacity!="number"||this.capacity<=0)throw Error("mnemonist/lru-map: capacity should be positive number.");if(!isFinite(this.capacity)||Math.floor(this.capacity)!==this.capacity)throw Error("mnemonist/lru-map: capacity should be a finite positive integer.");var d=o.getPointerArray(c);this.forward=new d(c),this.backward=new d(c),this.K=typeof a=="function"?new a(c):Array(c),this.V=typeof s=="function"?new s(c):Array(c),this.size=0,this.head=0,this.tail=0,this.items=new Map}i.prototype.clear=function(){this.size=0,this.head=0,this.tail=0,this.items.clear()},i.prototype.set=function(a,s){var c=this.items.get(a);if(c!==void 0){this.splayOnTop(c),this.V[c]=s;return}this.size<this.capacity?c=this.size++:(c=this.tail,this.tail=this.backward[c],this.items.delete(this.K[c])),this.items.set(a,c),this.K[c]=a,this.V[c]=s,this.forward[c]=this.head,this.backward[this.head]=c,this.head=c},i.prototype.setpop=function(a,s){var c=null,d=null,f=this.items.get(a);return f===void 0?(this.size<this.capacity?f=this.size++:(f=this.tail,this.tail=this.backward[f],c=this.V[f],d=this.K[f],this.items.delete(d)),this.items.set(a,f),this.K[f]=a,this.V[f]=s,this.forward[f]=this.head,this.backward[this.head]=f,this.head=f,d?{evicted:!0,key:d,value:c}:null):(this.splayOnTop(f),c=this.V[f],this.V[f]=s,{evicted:!1,key:a,value:c})},i.prototype.has=function(a){return this.items.has(a)},i.prototype.get=function(a){var s=this.items.get(a);if(s!==void 0)return this.splayOnTop(s),this.V[s]},i.prototype.peek=function(a){var s=this.items.get(a);if(s!==void 0)return this.V[s]},i.prototype.splayOnTop=n.prototype.splayOnTop,i.prototype.forEach=n.prototype.forEach,i.prototype.keys=n.prototype.keys,i.prototype.values=n.prototype.values,i.prototype.entries=n.prototype.entries,typeof Symbol<"u"&&(i.prototype[Symbol.iterator]=i.prototype.entries),i.prototype.inspect=n.prototype.inspect,i.from=function(a,s,c,d){if(arguments.length<2){if(d=l.guessLength(a),typeof d!="number")throw Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.")}else arguments.length===2&&(d=s,s=null,c=null);var f=new i(s,c,d);return r(a,function(u,h){f.set(h,u)}),f},t.exports=i})),Rd=re(((e,t)=>{var n=jl(),r=_e(),o=dr(),l=fr();function i(s,c,d){arguments.length<2?n.call(this,s):n.call(this,s,c,d),this.deleted=new(o.getPointerArray(this.capacity))(this.capacity),this.deletedSize=0}for(var a in n.prototype)i.prototype[a]=n.prototype[a];typeof Symbol<"u"&&(i.prototype[Symbol.iterator]=n.prototype[Symbol.iterator]),i.prototype.clear=function(){n.prototype.clear.call(this),this.deletedSize=0},i.prototype.set=function(s,c){var d=this.items.get(s);if(d!==void 0){this.splayOnTop(d),this.V[d]=c;return}this.size<this.capacity?(d=this.deletedSize>0?this.deleted[--this.deletedSize]:this.size,this.size++):(d=this.tail,this.tail=this.backward[d],this.items.delete(this.K[d])),this.items.set(s,d),this.K[d]=s,this.V[d]=c,this.forward[d]=this.head,this.backward[this.head]=d,this.head=d},i.prototype.setpop=function(s,c){var d=null,f=null,u=this.items.get(s);return u===void 0?(this.size<this.capacity?(u=this.deletedSize>0?this.deleted[--this.deletedSize]:this.size,this.size++):(u=this.tail,this.tail=this.backward[u],d=this.V[u],f=this.K[u],this.items.delete(f)),this.items.set(s,u),this.K[u]=s,this.V[u]=c,this.forward[u]=this.head,this.backward[this.head]=u,this.head=u,f?{evicted:!0,key:f,value:d}:null):(this.splayOnTop(u),d=this.V[u],this.V[u]=c,{evicted:!1,key:s,value:d})},i.prototype.delete=function(s){var c=this.items.get(s);if(c===void 0)return!1;if(this.items.delete(s),this.size===1)return this.size=0,this.head=0,this.tail=0,this.deletedSize=0,!0;var d=this.backward[c],f=this.forward[c];return this.head===c&&(this.head=f),this.tail===c&&(this.tail=d),this.forward[d]=f,this.backward[f]=d,this.size--,this.deleted[this.deletedSize++]=c,!0},i.prototype.remove=function(s,c=void 0){var d=this.items.get(s);if(d===void 0)return c;var f=this.V[d];if(this.items.delete(s),this.size===1)return this.size=0,this.head=0,this.tail=0,this.deletedSize=0,f;var u=this.backward[d],h=this.forward[d];return this.head===d&&(this.head=h),this.tail===d&&(this.tail=u),this.forward[u]=h,this.backward[h]=u,this.size--,this.deleted[this.deletedSize++]=d,f},i.from=function(s,c,d,f){if(arguments.length<2){if(f=l.guessLength(s),typeof f!="number")throw Error("mnemonist/lru-map.from: could not guess iterable length. Please provide desired capacity as last argument.")}else arguments.length===2&&(f=c,c=null,d=null);var u=new i(c,d,f);return r(s,function(h,p){u.set(p,h)}),u},t.exports=i})),Od=re((e=>{e.intersection=function(){if(arguments.length<2)throw Error("mnemonist/Set.intersection: needs at least two arguments.");var t=new Set,n=1/0,r=null,o,l,i=arguments.length;for(l=0;l<i;l++){if(o=arguments[l],o.size===0)return t;o.size<n&&(n=o.size,r=o)}for(var a=r.values(),s,c,d,f;s=a.next(),!s.done;){for(c=s.value,d=!0,l=0;l<i;l++)if(f=arguments[l],f!==r&&!f.has(c)){d=!1;break}d&&t.add(c)}return t},e.union=function(){if(arguments.length<2)throw Error("mnemonist/Set.union: needs at least two arguments.");var t=new Set,n,r=arguments.length,o,l;for(n=0;n<r;n++)for(o=arguments[n].values();l=o.next(),!l.done;)t.add(l.value);return t},e.difference=function(t,n){if(!t.size)return new Set;if(!n.size)return new Set(t);for(var r=new Set,o=t.values(),l;l=o.next(),!l.done;)n.has(l.value)||r.add(l.value);return r},e.symmetricDifference=function(t,n){for(var r=new Set,o=t.values(),l;l=o.next(),!l.done;)n.has(l.value)||r.add(l.value);for(o=n.values();l=o.next(),!l.done;)t.has(l.value)||r.add(l.value);return r},e.isSubset=function(t,n){var r=t.values(),o;if(t===n)return!0;if(t.size>n.size)return!1;for(;o=r.next(),!o.done;)if(!n.has(o.value))return!1;return!0},e.isSuperset=function(t,n){return e.isSubset(n,t)},e.add=function(t,n){for(var r=n.values(),o;o=r.next(),!o.done;)t.add(o.value)},e.subtract=function(t,n){for(var r=n.values(),o;o=r.next(),!o.done;)t.delete(o.value)},e.intersect=function(t,n){for(var r=t.values(),o;o=r.next(),!o.done;)n.has(o.value)||t.delete(o.value)},e.disjunct=function(t,n){for(var r=t.values(),o,l=[];o=r.next(),!o.done;)n.has(o.value)&&l.push(o.value);for(r=n.values();o=r.next(),!o.done;)t.has(o.value)||t.add(o.value);for(var i=0,a=l.length;i<a;i++)t.delete(l[i])},e.intersectionSize=function(t,n){var r;if(t.size>n.size&&(r=t,t=n,n=r),t.size===0)return 0;if(t===n)return t.size;for(var o=t.values(),l,i=0;l=o.next(),!l.done;)n.has(l.value)&&i++;return i},e.unionSize=function(t,n){var r=e.intersectionSize(t,n);return t.size+n.size-r},e.jaccard=function(t,n){var r=e.intersectionSize(t,n);return r===0?0:r/(t.size+n.size-r)},e.overlap=function(t,n){var r=e.intersectionSize(t,n);return r===0?0:r/Math.min(t.size,n.size)}})),Ld=re(((e,t)=>{var n=Ht(),r=_e();function o(){this.clear()}o.prototype.clear=function(){this.items=[],this.size=0},o.prototype.push=function(l){return this.items.push(l),++this.size},o.prototype.pop=function(){if(this.size!==0)return this.size--,this.items.pop()},o.prototype.peek=function(){return this.items[this.size-1]},o.prototype.forEach=function(l,i){i=arguments.length>1?i:this;for(var a=0,s=this.items.length;a<s;a++)l.call(i,this.items[s-a-1],a,this)},o.prototype.toArray=function(){for(var l=Array(this.size),i=this.size-1,a=this.size;a--;)l[a]=this.items[i-a];return l},o.prototype.values=function(){var l=this.items,i=l.length,a=0;return new n(function(){if(a>=i)return{done:!0};var s=l[i-a-1];return a++,{value:s,done:!1}})},o.prototype.entries=function(){var l=this.items,i=l.length,a=0;return new n(function(){if(a>=i)return{done:!0};var s=l[i-a-1];return{value:[a++,s],done:!1}})},typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.values),o.prototype.toString=function(){return this.toArray().join(",")},o.prototype.toJSON=function(){return this.toArray()},o.prototype.inspect=function(){var l=this.toArray();return Object.defineProperty(l,"constructor",{value:o,enumerable:!1}),l},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),o.from=function(l){var i=new o;return r(l,function(a){i.push(a)}),i},o.of=function(){return o.from(arguments)},t.exports=o}));Bd();var de=je(Ed()),So=je(Ad()),Zl=je(Dd()),$l=je(Fd()),Hl=je(Nd()),xi=je(jl());Rd();var Ul=Od(),Id=je(Ld()),Sd=re(((e,t)=>{var n=function(r,o){var l,i,a=1,s=0,c=0,d=String.alphabet;function f(u,h,p){if(p){for(l=h;p=f(u,l),p<76&&p>65;)++l;return+u.slice(h-1,l)}return p=d&&d.indexOf(u.charAt(h)),p>-1?p+76:(p=u.charCodeAt(h)||0,p<45||p>127?p:p<46?65:p<48?p-1:p<58?p+18:p<65?p-11:p<91?p+11:p<97?p-37:p<123?p+5:p-63)}if((r+="")!=(o+="")){for(;a;)if(i=f(r,s++),a=f(o,c++),i<76&&a<76&&i>66&&a>66&&(i=f(r,s,s),a=f(o,c,s=l),c=l),i!=a)return i<a?-1:1}return 0};try{t.exports=n}catch{String.naturalCompare=n}}));function Pd(e){return typeof e=="string"?`'${e}'`:new zd().serialize(e)}const zd=(function(){class e{#e=new Map;compare(n,r){let o=typeof n,l=typeof r;return o==="string"&&l==="string"?n.localeCompare(r):o==="number"&&l==="number"?n-r:String.prototype.localeCompare.call(this.serialize(n,!0),this.serialize(r,!0))}serialize(n,r){if(n===null)return"null";switch(typeof n){case"string":return r?n:`'${n}'`;case"bigint":return`${n}n`;case"object":return this.$object(n);case"function":return this.$function(n)}return String(n)}serializeObject(n){let r=Object.prototype.toString.call(n);if(r!=="[object Object]")return this.serializeBuiltInType(r.length<10?`unknown:${r}`:r.slice(8,-1),n);let o=n.constructor,l=o===Object||o===void 0?"":o.name;if(l!==""&&globalThis[l]===o)return this.serializeBuiltInType(l,n);if(typeof n.toJSON=="function"){let i=n.toJSON();return l+(typeof i=="object"&&i?this.$object(i):`(${this.serialize(i)})`)}return this.serializeObjectEntries(l,Object.entries(n))}serializeBuiltInType(n,r){let o=this["$"+n];if(o)return o.call(this,r);if(typeof r?.entries=="function")return this.serializeObjectEntries(n,r.entries());throw Error(`Cannot serialize ${n}`)}serializeObjectEntries(n,r){let o=Array.from(r).sort((i,a)=>this.compare(i[0],a[0])),l=`${n}{`;for(let i=0;i<o.length;i++){let[a,s]=o[i];l+=`${this.serialize(a,!0)}:${this.serialize(s)}`,i<o.length-1&&(l+=",")}return l+"}"}$object(n){let r=this.#e.get(n);return r===void 0&&(this.#e.set(n,`#${this.#e.size}`),r=this.serializeObject(n),this.#e.set(n,r)),r}$function(n){let r=Function.prototype.toString.call(n);return r.slice(-15)==="[native code] }"?`${n.name||""}()[native]`:`${n.name}(${n.length})${r.replace(/\s*\n\s*/g,"")}`}$Array(n){let r="[";for(let o=0;o<n.length;o++)r+=this.serialize(n[o]),o<n.length-1&&(r+=",");return r+"]"}$Date(n){try{return`Date(${n.toISOString()})`}catch{return"Date(null)"}}$ArrayBuffer(n){return`ArrayBuffer[${new Uint8Array(n).join(",")}]`}$Set(n){return`Set${this.$Array(Array.from(n).sort((r,o)=>this.compare(r,o)))}`}$Map(n){return this.serializeObjectEntries("Map",n.entries())}}for(let t of["Error","RegExp","URL"])e.prototype["$"+t]=function(n){return`${t}(${n})`};for(let t of["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])e.prototype["$"+t]=function(n){return`${t}[${n.join(",")}]`};for(let t of["BigInt64Array","BigUint64Array"])e.prototype["$"+t]=function(n){return`${t}[${n.join("n,")}${n.length>0?"n":""}]`};return e})(),Md=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Gd=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],ut=[];var qd=class{_data=new Fn;_hash=new Fn([...Md]);_nDataBytes=0;_minBufferSize=0;finalize(t){t&&this._append(t);let n=this._nDataBytes*8,r=this._data.sigBytes*8;return this._data.words[r>>>5]|=128<<24-r%32,this._data.words[(r+64>>>9<<4)+14]=Math.floor(n/4294967296),this._data.words[(r+64>>>9<<4)+15]=n,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}_doProcessBlock(t,n){let r=this._hash.words,o=r[0],l=r[1],i=r[2],a=r[3],s=r[4],c=r[5],d=r[6],f=r[7];for(let u=0;u<64;u++){if(u<16)ut[u]=t[n+u]|0;else{let B=ut[u-15],O=(B<<25|B>>>7)^(B<<14|B>>>18)^B>>>3,S=ut[u-2],v=(S<<15|S>>>17)^(S<<13|S>>>19)^S>>>10;ut[u]=O+ut[u-7]+v+ut[u-16]}let h=s&c^~s&d,p=o&l^o&i^l&i,T=(o<<30|o>>>2)^(o<<19|o>>>13)^(o<<10|o>>>22),b=(s<<26|s>>>6)^(s<<21|s>>>11)^(s<<7|s>>>25),y=f+b+h+Gd[u]+ut[u],F=T+p;f=d,d=c,c=s,s=a+y|0,a=i,i=l,l=o,o=y+F|0}r[0]=r[0]+o|0,r[1]=r[1]+l|0,r[2]=r[2]+i|0,r[3]=r[3]+a|0,r[4]=r[4]+s|0,r[5]=r[5]+c|0,r[6]=r[6]+d|0,r[7]=r[7]+f|0}_append(t){typeof t=="string"&&(t=Fn.fromUtf8(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes}_process(t){let n,r=this._data.sigBytes/64;r=t?Math.ceil(r):Math.max((r|0)-this._minBufferSize,0);let o=r*16,l=Math.min(o*4,this._data.sigBytes);if(o){for(let i=0;i<o;i+=16)this._doProcessBlock(this._data.words,i);n=this._data.words.splice(0,o),this._data.sigBytes-=l}return new Fn(n,l)}},Fn=class Wl{words;sigBytes;constructor(t,n){t=this.words=t||[],this.sigBytes=n===void 0?t.length*4:n}static fromUtf8(t){let n=unescape(encodeURIComponent(t)),r=n.length,o=[];for(let l=0;l<r;l++)o[l>>>2]|=(n.charCodeAt(l)&255)<<24-l%4*8;return new Wl(o,r)}toBase64(){let t=[];for(let n=0;n<this.sigBytes;n+=3){let r=this.words[n>>>2]>>>24-n%4*8&255,o=this.words[n+1>>>2]>>>24-(n+1)%4*8&255,l=this.words[n+2>>>2]>>>24-(n+2)%4*8&255,i=r<<16|o<<8|l;for(let a=0;a<4&&n*8+a*6<this.sigBytes*8;a++)t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(i>>>6*(3-a)&63))}return t.join("")}concat(t){if(this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4),this.sigBytes%4)for(let n=0;n<t.sigBytes;n++){let r=t.words[n>>>2]>>>24-n%4*8&255;this.words[this.sigBytes+n>>>2]|=r<<24-(this.sigBytes+n)%4*8}else for(let n=0;n<t.sigBytes;n+=4)this.words[this.sigBytes+n>>>2]=t.words[n>>>2];this.sigBytes+=t.sigBytes}};function Kd(e){return new qd().finalize(e).toBase64()}function Xd(e){return Kd(Pd(e))}const bi=typeof self=="object"?self:globalThis,jd=(e,t)=>{let n=(o,l)=>(e.set(l,o),o),r=o=>{if(e.has(o))return e.get(o);let[l,i]=t[o];switch(l){case 0:case-1:return n(i,o);case 1:{let a=n([],o);for(let s of i)a.push(r(s));return a}case 2:{let a=n({},o);for(let[s,c]of i)a[r(s)]=r(c);return a}case 3:return n(new Date(i),o);case 4:{let{source:a,flags:s}=i;return n(new RegExp(a,s),o)}case 5:{let a=n(new Map,o);for(let[s,c]of i)a.set(r(s),r(c));return a}case 6:{let a=n(new Set,o);for(let s of i)a.add(r(s));return a}case 7:{let{name:a,message:s}=i;return n(new bi[a](s),o)}case 8:return n(BigInt(i),o);case"BigInt":return n(Object(BigInt(i)),o);case"ArrayBuffer":return n(new Uint8Array(i).buffer,i);case"DataView":{let{buffer:a}=new Uint8Array(i);return n(new DataView(a),i)}}return n(new bi[l](i),o)};return r},Ti=e=>jd(new Map,e)(0),{toString:Zd}={},{keys:$d}=Object,tn=e=>{let t=typeof e;if(t!=="object"||!e)return[0,t];let n=Zd.call(e).slice(8,-1);switch(n){case"Array":return[1,""];case"Object":return[2,""];case"Date":return[3,""];case"RegExp":return[4,""];case"Map":return[5,""];case"Set":return[6,""];case"DataView":return[1,n]}return n.includes("Array")?[1,n]:n.includes("Error")?[7,n]:[2,n]},Nn=([e,t])=>e===0&&(t==="function"||t==="symbol"),Hd=(e,t,n,r)=>{let o=(i,a)=>{let s=r.push(i)-1;return n.set(a,s),s},l=i=>{if(n.has(i))return n.get(i);let[a,s]=tn(i);switch(a){case 0:{let d=i;switch(s){case"bigint":a=8,d=i.toString();break;case"function":case"symbol":if(e)throw TypeError("unable to serialize "+s);d=null;break;case"undefined":return o([-1],i)}return o([a,d],i)}case 1:{if(s){let u=i;return s==="DataView"?u=new Uint8Array(i.buffer):s==="ArrayBuffer"&&(u=new Uint8Array(i)),o([s,[...u]],i)}let d=[],f=o([a,d],i);for(let u of i)d.push(l(u));return f}case 2:{if(s)switch(s){case"BigInt":return o([s,i.toString()],i);case"Boolean":case"Number":case"String":return o([s,i.valueOf()],i)}if(t&&"toJSON"in i)return l(i.toJSON());let d=[],f=o([a,d],i);for(let u of $d(i))(e||!Nn(tn(i[u])))&&d.push([l(u),l(i[u])]);return f}case 3:return o([a,i.toISOString()],i);case 4:{let{source:d,flags:f}=i;return o([a,{source:d,flags:f}],i)}case 5:{let d=[],f=o([a,d],i);for(let[u,h]of i)(e||!(Nn(tn(u))||Nn(tn(h))))&&d.push([l(u),l(h)]);return f}case 6:{let d=[],f=o([a,d],i);for(let u of i)(e||!Nn(tn(u)))&&d.push(l(u));return f}}let{message:c}=i;return o([a,{name:s,message:c}],i)};return l},ki=(e,{json:t,lossy:n}={})=>{let r=[];return Hd(!(t||n),!!t,new Map,r)(e),r};var mn=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Ti(ki(e,t)):structuredClone(e):(e,t)=>Ti(ki(e,t));const Ql=Yl("end"),Vl=Yl("start");function Yl(e){return t;function t(n){let r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Jl(e){let t=Vl(e),n=Ql(e);if(t&&n)return{start:t,end:n}}const ht=["ariaDescribedBy","ariaLabel","ariaLabelledBy"],lo={ancestors:{tbody:["table"],td:["table"],th:["table"],thead:["table"],tfoot:["table"],tr:["table"]},attributes:{a:[...ht,"dataFootnoteBackref","dataFootnoteRef",["className","data-footnote-backref"],"href"],blockquote:["cite"],code:[["className",/^language-./]],del:["cite"],div:["itemScope","itemType"],dl:[...ht],h2:[["className","sr-only"]],img:[...ht,"longDesc","src"],input:[["disabled",!0],["type","checkbox"]],ins:["cite"],li:[["className","task-list-item"]],ol:[...ht,["className","contains-task-list"]],q:["cite"],section:["dataFootnotes",["className","footnotes"]],source:["srcSet"],summary:[...ht],table:[...ht],ul:[...ht,["className","contains-task-list"]],"*":"abbr.accept.acceptCharset.accessKey.action.align.alt.axis.border.cellPadding.cellSpacing.char.charOff.charSet.checked.clear.colSpan.color.cols.compact.coords.dateTime.dir.encType.frame.hSpace.headers.height.hrefLang.htmlFor.id.isMap.itemProp.label.lang.maxLength.media.method.multiple.name.noHref.noShade.noWrap.open.prompt.readOnly.rev.rowSpan.rows.rules.scope.selected.shape.size.span.start.summary.tabIndex.title.useMap.vAlign.value.width".split(".")},clobber:["ariaDescribedBy","ariaLabelledBy","id","name"],clobberPrefix:"user-content-",protocols:{cite:["http","https"],href:["http","https","irc","ircs","mailto","xmpp"],longDesc:["http","https"],src:["http","https"]},required:{input:{disabled:!0,type:"checkbox"}},strip:["script"],tagNames:"a.b.blockquote.br.code.dd.del.details.div.dl.dt.em.h1.h2.h3.h4.h5.h6.hr.i.img.input.ins.kbd.li.ol.p.picture.pre.q.rp.rt.ruby.s.samp.section.source.span.strike.strong.sub.summary.sup.table.tbody.td.tfoot.th.thead.tr.tt.ul.var".split(".")},st={}.hasOwnProperty;function Ud(e,t){let n={type:"root",children:[]},r=_l({schema:t?{...lo,...t}:lo,stack:[]},e);return r&&(Array.isArray(r)?r.length===1?n=r[0]:n.children=r:n=r),n}function _l(e,t){if(t&&typeof t=="object"){let n=t;switch(typeof n.type=="string"?n.type:""){case"comment":return Wd(e,n);case"doctype":return Qd(e,n);case"element":return Vd(e,n);case"root":return Yd(e,n);case"text":return Jd(e,n)}}}function Wd(e,t){if(e.schema.allowComments){let n=typeof t.value=="string"?t.value:"",r=n.indexOf("-->"),o={type:"comment",value:r<0?n:n.slice(0,r)};return Bn(o,t),o}}function Qd(e,t){if(e.schema.allowDoctypes){let n={type:"doctype"};return Bn(n,t),n}}function Vd(e,t){let n=typeof t.tagName=="string"?t.tagName:"";e.stack.push(n);let r=ea(e,t.children),o=_d(e,t.properties);e.stack.pop();let l=!1;if(n&&n!=="*"&&(!e.schema.tagNames||e.schema.tagNames.includes(n))&&(l=!0,e.schema.ancestors&&st.call(e.schema.ancestors,n))){let a=e.schema.ancestors[n],s=-1;for(l=!1;++s<a.length;)e.stack.includes(a[s])&&(l=!0)}if(!l)return e.schema.strip&&!e.schema.strip.includes(n)?r:void 0;let i={type:"element",tagName:n,properties:o,children:r};return Bn(i,t),i}function Yd(e,t){let n={type:"root",children:ea(e,t.children)};return Bn(n,t),n}function Jd(e,t){let n={type:"text",value:typeof t.value=="string"?t.value:""};return Bn(n,t),n}function ea(e,t){let n=[];if(Array.isArray(t)){let r=t,o=-1;for(;++o<r.length;){let l=_l(e,r[o]);l&&(Array.isArray(l)?n.push(...l):n.push(l))}}return n}function _d(e,t){let n=e.stack[e.stack.length-1],r=e.schema.attributes,o=e.schema.required,l=r&&st.call(r,n)?r[n]:void 0,i=r&&st.call(r,"*")?r["*"]:void 0,a=t&&typeof t=="object"?t:{},s={},c;for(c in a)if(st.call(a,c)){let d=a[c],f=wi(e,vi(l,c),c,d);f??=wi(e,vi(i,c),c,d),f!=null&&(s[c]=f)}if(o&&st.call(o,n)){let d=o[n];for(c in d)st.call(d,c)&&!st.call(s,c)&&(s[c]=d[c])}return s}function wi(e,t,n,r){return t?Array.isArray(r)?ef(e,t,n,r):ta(e,t,n,r):void 0}function ef(e,t,n,r){let o=-1,l=[];for(;++o<r.length;){let i=ta(e,t,n,r[o]);(typeof i=="number"||typeof i=="string")&&l.push(i)}return l}function ta(e,t,n,r){if(!(typeof r!="boolean"&&typeof r!="number"&&typeof r!="string")&&tf(e,n,r)){if(typeof t=="object"&&t.length>1){let o=!1,l=0;for(;++l<t.length;){let i=t[l];if(i&&typeof i=="object"&&"flags"in i){if(i.test(String(r))){o=!0;break}}else if(i===r){o=!0;break}}if(!o)return}return e.schema.clobber&&e.schema.clobberPrefix&&e.schema.clobber.includes(n)?e.schema.clobberPrefix+r:r}}function tf(e,t,n){let r=e.schema.protocols&&st.call(e.schema.protocols,t)?e.schema.protocols[t]:void 0;if(!r||r.length===0)return!0;let o=String(n),l=o.indexOf(":"),i=o.indexOf("?"),a=o.indexOf("#"),s=o.indexOf("/");if(l<0||s>-1&&l>s||i>-1&&l>i||a>-1&&l>a)return!0;let c=-1;for(;++c<r.length;){let d=r[c];if(l===d.length&&o.slice(0,d.length)===d)return!0}return!1}function Bn(e,t){let n=Jl(t);t.data&&(e.data=mn(t.data)),n&&(e.position=n)}function vi(e,t){let n,r=-1;if(e)for(;++r<e.length;){let o=e[r],l=typeof o=="string"?o:o[0];if(l===t)return o;l==="data*"&&(n=o)}if(t.length>4&&t.slice(0,4).toLowerCase()==="data")return n}function nf(e){return function(t){return Ud(t,e)}}const rf="AElig.AMP.Aacute.Acirc.Agrave.Aring.Atilde.Auml.COPY.Ccedil.ETH.Eacute.Ecirc.Egrave.Euml.GT.Iacute.Icirc.Igrave.Iuml.LT.Ntilde.Oacute.Ocirc.Ograve.Oslash.Otilde.Ouml.QUOT.REG.THORN.Uacute.Ucirc.Ugrave.Uuml.Yacute.aacute.acirc.acute.aelig.agrave.amp.aring.atilde.auml.brvbar.ccedil.cedil.cent.copy.curren.deg.divide.eacute.ecirc.egrave.eth.euml.frac12.frac14.frac34.gt.iacute.icirc.iexcl.igrave.iquest.iuml.laquo.lt.macr.micro.middot.nbsp.not.ntilde.oacute.ocirc.ograve.ordf.ordm.oslash.otilde.ouml.para.plusmn.pound.quot.raquo.reg.sect.shy.sup1.sup2.sup3.szlig.thorn.times.uacute.ucirc.ugrave.uml.uuml.yacute.yen.yuml".split("."),Dr={nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",fnof:"ƒ",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",bull:"•",hellip:"…",prime:"′",Prime:"″",oline:"‾",frasl:"⁄",weierp:"℘",image:"ℑ",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",quot:'"',amp:"&",lt:"<",gt:">",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",permil:"‰",lsaquo:"‹",rsaquo:"›",euro:"€"};function er(e,t){let n=String(e);if(typeof t!="string")throw TypeError("Expected character");let r=0,o=n.indexOf(t);for(;o!==-1;)r++,o=n.indexOf(t,o+t.length);return r}function of(e,t){let n=t||{};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const lf=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"];var dn=class{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}};dn.prototype.normal={},dn.prototype.property={},dn.prototype.space=void 0;function na(e,t){let n={},r={};for(let o of e)Object.assign(n,o.property),Object.assign(r,o.normal);return new dn(n,r,t)}function ao(e){return e.toLowerCase()}var Te=class{constructor(t,n){this.attribute=n,this.property=t}};Te.prototype.attribute="",Te.prototype.booleanish=!1,Te.prototype.boolean=!1,Te.prototype.commaOrSpaceSeparated=!1,Te.prototype.commaSeparated=!1,Te.prototype.defined=!1,Te.prototype.mustUseProperty=!1,Te.prototype.number=!1,Te.prototype.overloadedBoolean=!1,Te.prototype.property="",Te.prototype.spaceSeparated=!1,Te.prototype.space=void 0;var so=vn({boolean:()=>G,booleanish:()=>le,commaOrSpaceSeparated:()=>Be,commaSeparated:()=>zt,number:()=>D,overloadedBoolean:()=>ra,spaceSeparated:()=>Y});let af=0;const G=Et(),le=Et(),ra=Et(),D=Et(),Y=Et(),zt=Et(),Be=Et();function Et(){return 2**++af}const Fr=Object.keys(so);var Po=class extends Te{constructor(t,n,r,o){let l=-1;if(super(t,n),Bi(this,"space",o),typeof r=="number")for(;++l<Fr.length;){let i=Fr[l];Bi(this,Fr[l],(r&so[i])===so[i])}}};Po.prototype.defined=!0;function Bi(e,t,n){n&&(e[t]=n)}function Ut(e){let t={},n={};for(let[r,o]of Object.entries(e.properties)){let l=new Po(r,e.transform(e.attributes||{},r),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(l.mustUseProperty=!0),t[r]=l,n[ao(r)]=r,n[ao(l.attribute)]=r}return new dn(t,n,e.space)}const oa=Ut({properties:{ariaActiveDescendant:null,ariaAtomic:le,ariaAutoComplete:null,ariaBusy:le,ariaChecked:le,ariaColCount:D,ariaColIndex:D,ariaColSpan:D,ariaControls:Y,ariaCurrent:null,ariaDescribedBy:Y,ariaDetails:null,ariaDisabled:le,ariaDropEffect:Y,ariaErrorMessage:null,ariaExpanded:le,ariaFlowTo:Y,ariaGrabbed:le,ariaHasPopup:null,ariaHidden:le,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Y,ariaLevel:D,ariaLive:null,ariaModal:le,ariaMultiLine:le,ariaMultiSelectable:le,ariaOrientation:null,ariaOwns:Y,ariaPlaceholder:null,ariaPosInSet:D,ariaPressed:le,ariaReadOnly:le,ariaRelevant:null,ariaRequired:le,ariaRoleDescription:Y,ariaRowCount:D,ariaRowIndex:D,ariaRowSpan:D,ariaSelected:le,ariaSetSize:D,ariaSort:null,ariaValueMax:D,ariaValueMin:D,ariaValueNow:D,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function ia(e,t){return t in e?e[t]:t}function la(e,t){return ia(e,t.toLowerCase())}const sf=Ut({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:zt,acceptCharset:Y,accessKey:Y,action:null,allow:null,allowFullScreen:G,allowPaymentRequest:G,allowUserMedia:G,alt:null,as:null,async:G,autoCapitalize:null,autoComplete:Y,autoFocus:G,autoPlay:G,blocking:Y,capture:null,charSet:null,checked:G,cite:null,className:Y,cols:D,colSpan:null,content:null,contentEditable:le,controls:G,controlsList:Y,coords:D|zt,crossOrigin:null,data:null,dateTime:null,decoding:null,default:G,defer:G,dir:null,dirName:null,disabled:G,download:ra,draggable:le,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:G,formTarget:null,headers:Y,height:D,hidden:G,high:D,href:null,hrefLang:null,htmlFor:Y,httpEquiv:Y,id:null,imageSizes:null,imageSrcSet:null,inert:G,inputMode:null,integrity:null,is:null,isMap:G,itemId:null,itemProp:Y,itemRef:Y,itemScope:G,itemType:Y,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:G,low:D,manifest:null,max:null,maxLength:D,media:null,method:null,min:null,minLength:D,multiple:G,muted:G,name:null,nonce:null,noModule:G,noValidate:G,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:G,optimum:D,pattern:null,ping:Y,placeholder:null,playsInline:G,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:G,referrerPolicy:null,rel:Y,required:G,reversed:G,rows:D,rowSpan:D,sandbox:Y,scope:null,scoped:G,seamless:G,selected:G,shadowRootClonable:G,shadowRootDelegatesFocus:G,shadowRootMode:null,shape:null,size:D,sizes:null,slot:null,span:D,spellCheck:le,src:null,srcDoc:null,srcLang:null,srcSet:null,start:D,step:null,style:null,tabIndex:D,target:null,title:null,translate:null,type:null,typeMustMatch:G,useMap:null,value:le,width:D,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Y,axis:null,background:null,bgColor:null,border:D,borderColor:null,bottomMargin:D,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:G,declare:G,event:null,face:null,frame:null,frameBorder:null,hSpace:D,leftMargin:D,link:null,longDesc:null,lowSrc:null,marginHeight:D,marginWidth:D,noResize:G,noHref:G,noShade:G,noWrap:G,object:null,profile:null,prompt:null,rev:null,rightMargin:D,rules:null,scheme:null,scrolling:le,standby:null,summary:null,text:null,topMargin:D,valueType:null,version:null,vAlign:null,vLink:null,vSpace:D,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:G,disableRemotePlayback:G,prefix:null,property:null,results:D,security:null,unselectable:null},space:"html",transform:la}),cf=Ut({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Be,accentHeight:D,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:D,amplitude:D,arabicForm:null,ascent:D,attributeName:null,attributeType:null,azimuth:D,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:D,by:null,calcMode:null,capHeight:D,className:Y,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:D,diffuseConstant:D,direction:null,display:null,dur:null,divisor:D,dominantBaseline:null,download:G,dx:null,dy:null,edgeMode:null,editable:null,elevation:D,enableBackground:null,end:null,event:null,exponent:D,externalResourcesRequired:null,fill:null,fillOpacity:D,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:zt,g2:zt,glyphName:zt,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:D,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:D,horizOriginX:D,horizOriginY:D,id:null,ideographic:D,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:D,k:D,k1:D,k2:D,k3:D,k4:D,kernelMatrix:Be,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:D,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:D,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:D,overlineThickness:D,paintOrder:null,panose1:null,path:null,pathLength:D,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Y,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:D,pointsAtY:D,pointsAtZ:D,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Be,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Be,rev:Be,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Be,requiredFeatures:Be,requiredFonts:Be,requiredFormats:Be,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:D,specularExponent:D,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:D,strikethroughThickness:D,string:null,stroke:null,strokeDashArray:Be,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:D,strokeOpacity:D,strokeWidth:null,style:null,surfaceScale:D,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Be,tabIndex:D,tableValues:null,target:null,targetX:D,targetY:D,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Be,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:D,underlineThickness:D,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:D,values:null,vAlphabetic:D,vMathematical:D,vectorEffect:null,vHanging:D,vIdeographic:D,version:null,vertAdvY:D,vertOriginX:D,vertOriginY:D,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:D,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:ia}),aa=Ut({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),sa=Ut({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:la}),ca=Ut({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),df=/[A-Z]/g,Ei=/-[a-z]/g,ff=/^data[-\w.:]+$/i;function uf(e,t){let n=ao(t),r=t,o=Te;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&ff.test(t)){if(t.charAt(4)==="-"){let l=t.slice(5).replace(Ei,pf);r="data"+l.charAt(0).toUpperCase()+l.slice(1)}else{let l=t.slice(4);if(!Ei.test(l)){let i=l.replace(df,hf);i.charAt(0)!=="-"&&(i="-"+i),t="data"+i}}o=Po}return new o(r,t)}function hf(e){return"-"+e.toLowerCase()}function pf(e){return e.charAt(1).toUpperCase()}const mf=na([oa,sf,aa,sa,ca],"html"),da=na([oa,cf,aa,sa,ca],"svg"),Ai={}.hasOwnProperty;function gf(e,t){let n=t||{};function r(o,...l){let i=r.invalid,a=r.handlers;if(o&&Ai.call(o,e)){let s=String(o[e]);i=Ai.call(a,s)?a[s]:r.unknown}if(i)return i.call(this,o,...l)}return r.handlers=n.handlers||{},r.invalid=n.invalid,r.unknown=n.unknown,r}const yf=/["&'<>`]/g,xf=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,bf=/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,Tf=/[|\\{}()[\]^$+*?.]/g,Di=new WeakMap;function kf(e,t){if(e=e.replace(t.subset?wf(t.subset):yf,r),t.subset||t.escapeOnly)return e;return e.replace(xf,n).replace(bf,r);function n(o,l,i){return t.format((o.charCodeAt(0)-55296)*1024+o.charCodeAt(1)-56320+65536,i.charCodeAt(l+2),t)}function r(o,l,i){return t.format(o.charCodeAt(0),i.charCodeAt(l+1),t)}}function wf(e){let t=Di.get(e);return t||(t=vf(e),Di.set(e,t)),t}function vf(e){let t=[],n=-1;for(;++n<e.length;)t.push(e[n].replace(Tf,"\\$&"));return RegExp("(?:"+t.join("|")+")","g")}const Bf=/[\dA-Fa-f]/;function Ef(e,t,n){let r="&#x"+e.toString(16).toUpperCase();return n&&t&&!Bf.test(String.fromCharCode(t))?r:r+";"}const Af=/\d/;function Df(e,t,n){let r="&#"+String(e);return n&&t&&!Af.test(String.fromCharCode(t))?r:r+";"}const Ff=["cent","copy","divide","gt","lt","not","para","times"],fa={}.hasOwnProperty,co={};let Cn;for(Cn in Dr)fa.call(Dr,Cn)&&(co[Dr[Cn]]=Cn);const Nf=/[^\dA-Za-z]/;function Cf(e,t,n,r){let o=String.fromCharCode(e);if(fa.call(co,o)){let l=co[o],i="&"+l;return n&&rf.includes(l)&&!Ff.includes(l)&&(!r||t&&t!==61&&Nf.test(String.fromCharCode(t)))?i:i+";"}return""}function Rf(e,t,n){let r=Ef(e,t,n.omitOptionalSemicolons),o;if((n.useNamedReferences||n.useShortestReferences)&&(o=Cf(e,t,n.omitOptionalSemicolons,n.attribute)),(n.useShortestReferences||!o)&&n.useShortestReferences){let l=Df(e,t,n.omitOptionalSemicolons);l.length<r.length&&(r=l)}return o&&(!n.useShortestReferences||o.length<r.length)?o:r}function Mt(e,t){return kf(e,Object.assign({format:Rf},t))}const Of=/^>|^->|<!--|-->|--!>|<!-$/g,Lf=[">"],If=["<",">"];function Sf(e,t,n,r){return r.settings.bogusComments?"<?"+Mt(e.value,Object.assign({},r.settings.characterReferences,{subset:Lf}))+">":"<!--"+e.value.replace(Of,o)+"-->";function o(l){return Mt(l,Object.assign({},r.settings.characterReferences,{subset:If}))}}function Pf(e,t,n,r){return"<!"+(r.settings.upperDoctype?"DOCTYPE":"doctype")+(r.settings.tightDoctype?"":" ")+"html>"}function zf(e){return e.join(" ").trim()}const Mf=/[ \t\n\f\r]/g;function zo(e){return typeof e=="object"?e.type==="text"?Fi(e.value):!1:Fi(e)}function Fi(e){return e.replace(Mf,"")===""}const ce=ha(1),ua=ha(-1),Gf=[];function ha(e){return t;function t(n,r,o){let l=n?n.children:Gf,i=(r||0)+e,a=l[i];if(!o)for(;a&&zo(a);)i+=e,a=l[i];return a}}const qf={}.hasOwnProperty;function pa(e){return t;function t(n,r,o){return qf.call(e,n.tagName)&&e[n.tagName](n,r,o)}}const Mo=pa({body:Xf,caption:Nr,colgroup:Nr,dd:Hf,dt:$f,head:Nr,html:Kf,li:Zf,optgroup:Uf,option:Wf,p:jf,rp:Ni,rt:Ni,tbody:Vf,td:Ci,tfoot:Yf,th:Ci,thead:Qf,tr:Jf});function Nr(e,t,n){let r=ce(n,t,!0);return!r||r.type!=="comment"&&!(r.type==="text"&&zo(r.value.charAt(0)))}function Kf(e,t,n){let r=ce(n,t);return!r||r.type!=="comment"}function Xf(e,t,n){let r=ce(n,t);return!r||r.type!=="comment"}function jf(e,t,n){let r=ce(n,t);return r?r.type==="element"&&(r.tagName==="address"||r.tagName==="article"||r.tagName==="aside"||r.tagName==="blockquote"||r.tagName==="details"||r.tagName==="div"||r.tagName==="dl"||r.tagName==="fieldset"||r.tagName==="figcaption"||r.tagName==="figure"||r.tagName==="footer"||r.tagName==="form"||r.tagName==="h1"||r.tagName==="h2"||r.tagName==="h3"||r.tagName==="h4"||r.tagName==="h5"||r.tagName==="h6"||r.tagName==="header"||r.tagName==="hgroup"||r.tagName==="hr"||r.tagName==="main"||r.tagName==="menu"||r.tagName==="nav"||r.tagName==="ol"||r.tagName==="p"||r.tagName==="pre"||r.tagName==="section"||r.tagName==="table"||r.tagName==="ul"):!n||!(n.type==="element"&&(n.tagName==="a"||n.tagName==="audio"||n.tagName==="del"||n.tagName==="ins"||n.tagName==="map"||n.tagName==="noscript"||n.tagName==="video"))}function Zf(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&r.tagName==="li"}function $f(e,t,n){let r=ce(n,t);return!!(r&&r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd"))}function Hf(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd")}function Ni(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&(r.tagName==="rp"||r.tagName==="rt")}function Uf(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&r.tagName==="optgroup"}function Wf(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&(r.tagName==="option"||r.tagName==="optgroup")}function Qf(e,t,n){let r=ce(n,t);return!!(r&&r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot"))}function Vf(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot")}function Yf(e,t,n){return!ce(n,t)}function Jf(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&r.tagName==="tr"}function Ci(e,t,n){let r=ce(n,t);return!r||r.type==="element"&&(r.tagName==="td"||r.tagName==="th")}const _f=pa({body:nu,colgroup:ru,head:tu,html:eu,tbody:ou});function eu(e){let t=ce(e,-1);return!t||t.type!=="comment"}function tu(e){let t=new Set;for(let r of e.children)if(r.type==="element"&&(r.tagName==="base"||r.tagName==="title")){if(t.has(r.tagName))return!1;t.add(r.tagName)}let n=e.children[0];return!n||n.type==="element"}function nu(e){let t=ce(e,-1,!0);return!t||t.type!=="comment"&&!(t.type==="text"&&zo(t.value.charAt(0)))&&!(t.type==="element"&&(t.tagName==="meta"||t.tagName==="link"||t.tagName==="script"||t.tagName==="style"||t.tagName==="template"))}function ru(e,t,n){let r=ua(n,t),o=ce(e,-1,!0);return n&&r&&r.type==="element"&&r.tagName==="colgroup"&&Mo(r,n.children.indexOf(r),n)?!1:!!(o&&o.type==="element"&&o.tagName==="col")}function ou(e,t,n){let r=ua(n,t),o=ce(e,-1);return n&&r&&r.type==="element"&&(r.tagName==="thead"||r.tagName==="tbody")&&Mo(r,n.children.indexOf(r),n)?!1:!!(o&&o.type==="element"&&o.tagName==="tr")}const Rn={name:[[`	
\f\r &/=>`.split(""),`	
\f\r "&'/=>\``.split("")],[`\0	
\f\r "&'/<=>`.split(""),`\0	
\f\r "&'/<=>\``.split("")]],unquoted:[[`	
\f\r &>`.split(""),`\0	
\f\r "&'<=>\``.split("")],[`\0	
\f\r "&'<=>\``.split(""),`\0	
\f\r "&'<=>\``.split("")]],single:[["&'".split(""),"\"&'`".split("")],["\0&'".split(""),"\0\"&'`".split("")]],double:[['"&'.split(""),"\"&'`".split("")],['\0"&'.split(""),"\0\"&'`".split("")]]};function iu(e,t,n,r){let o=r.schema,l=o.space==="svg"?!1:r.settings.omitOptionalTags,i=o.space==="svg"?r.settings.closeEmptyElements:r.settings.voids.includes(e.tagName.toLowerCase()),a=[],s;o.space==="html"&&e.tagName==="svg"&&(r.schema=da);let c=lu(r,e.properties),d=r.all(o.space==="html"&&e.tagName==="template"?e.content:e);return r.schema=o,d&&(i=!1),(c||!l||!_f(e,t,n))&&(a.push("<",e.tagName,c?" "+c:""),i&&(o.space==="svg"||r.settings.closeSelfClosing)&&(s=c.charAt(c.length-1),(!r.settings.tightSelfClosing||s==="/"||s&&s!=='"'&&s!=="'")&&a.push(" "),a.push("/")),a.push(">")),a.push(d),!i&&(!l||!Mo(e,t,n))&&a.push("</"+e.tagName+">"),a.join("")}function lu(e,t){let n=[],r=-1,o;if(t){for(o in t)if(t[o]!==null&&t[o]!==void 0){let l=au(e,o,t[o]);l&&n.push(l)}}for(;++r<n.length;){let l=e.settings.tightAttributes?n[r].charAt(n[r].length-1):void 0;r!==n.length-1&&l!=='"'&&l!=="'"&&(n[r]+=" ")}return n.join("")}function au(e,t,n){let r=uf(e.schema,t),o=e.settings.allowParseErrors&&e.schema.space==="html"?0:1,l=e.settings.allowDangerousCharacters?0:1,i=e.quote,a;if(r.overloadedBoolean&&(n===r.attribute||n==="")?n=!0:(r.boolean||r.overloadedBoolean)&&(typeof n!="string"||n===r.attribute||n==="")&&(n=!!n),n==null||n===!1||typeof n=="number"&&Number.isNaN(n))return"";let s=Mt(r.attribute,Object.assign({},e.settings.characterReferences,{subset:Rn.name[o][l]}));return n===!0||(n=Array.isArray(n)?(r.commaSeparated?of:zf)(n,{padLeft:!e.settings.tightCommaSeparatedLists}):String(n),e.settings.collapseEmptyAttributes&&!n)?s:(e.settings.preferUnquoted&&(a=Mt(n,Object.assign({},e.settings.characterReferences,{attribute:!0,subset:Rn.unquoted[o][l]}))),a!==n&&(e.settings.quoteSmart&&er(n,i)>er(n,e.alternative)&&(i=e.alternative),a=i+Mt(n,Object.assign({},e.settings.characterReferences,{subset:(i==="'"?Rn.single:Rn.double)[o][l],attribute:!0}))+i),s+(a&&"="+a))}const su=["<","&"];function ma(e,t,n,r){return n&&n.type==="element"&&(n.tagName==="script"||n.tagName==="style")?e.value:Mt(e.value,Object.assign({},r.settings.characterReferences,{subset:su}))}function cu(e,t,n,r){return r.settings.allowDangerousHtml?e.value:ma(e,t,n,r)}function du(e,t,n,r){return r.all(e)}const fu=gf("type",{invalid:uu,unknown:hu,handlers:{comment:Sf,doctype:Pf,element:iu,raw:cu,root:du,text:ma}});function uu(e){throw Error("Expected node, not `"+e+"`")}function hu(e){throw Error("Cannot compile unknown node `"+e.type+"`")}const pu={},mu={},gu=[];function yu(e,t){let n=t||pu,r=n.quote||'"',o=r==='"'?"'":'"';if(r!=='"'&&r!=="'")throw Error("Invalid quote `"+r+"`, expected `'` or `\"`");return{one:xu,all:bu,settings:{omitOptionalTags:n.omitOptionalTags||!1,allowParseErrors:n.allowParseErrors||!1,allowDangerousCharacters:n.allowDangerousCharacters||!1,quoteSmart:n.quoteSmart||!1,preferUnquoted:n.preferUnquoted||!1,tightAttributes:n.tightAttributes||!1,upperDoctype:n.upperDoctype||!1,tightDoctype:n.tightDoctype||!1,bogusComments:n.bogusComments||!1,tightCommaSeparatedLists:n.tightCommaSeparatedLists||!1,tightSelfClosing:n.tightSelfClosing||!1,collapseEmptyAttributes:n.collapseEmptyAttributes||!1,allowDangerousHtml:n.allowDangerousHtml||!1,voids:n.voids||lf,characterReferences:n.characterReferences||mu,closeSelfClosing:n.closeSelfClosing||!1,closeEmptyElements:n.closeEmptyElements||!1},schema:n.space==="svg"?da:mf,quote:r,alternative:o}.one(Array.isArray(e)?{type:"root",children:e}:e,void 0,void 0)}function xu(e,t,n){return fu(e,t,n,this)}function bu(e){let t=[],n=e&&e.children||gu,r=-1;for(;++r<n.length;)t[r]=this.one(n[r],r,e);return t.join("")}function Tu(e){let t=this,n={...t.data("settings"),...e};t.compiler=r;function r(o){return yu(o,n)}}const Ri={AElig:"Æ",AMP:"&",Aacute:"Á",Abreve:"Ă",Acirc:"Â",Acy:"А",Afr:"𝔄",Agrave:"À",Alpha:"Α",Amacr:"Ā",And:"⩓",Aogon:"Ą",Aopf:"𝔸",ApplyFunction:"⁡",Aring:"Å",Ascr:"𝒜",Assign:"≔",Atilde:"Ã",Auml:"Ä",Backslash:"∖",Barv:"⫧",Barwed:"⌆",Bcy:"Б",Because:"∵",Bernoullis:"ℬ",Beta:"Β",Bfr:"𝔅",Bopf:"𝔹",Breve:"˘",Bscr:"ℬ",Bumpeq:"≎",CHcy:"Ч",COPY:"©",Cacute:"Ć",Cap:"⋒",CapitalDifferentialD:"ⅅ",Cayleys:"ℭ",Ccaron:"Č",Ccedil:"Ç",Ccirc:"Ĉ",Cconint:"∰",Cdot:"Ċ",Cedilla:"¸",CenterDot:"·",Cfr:"ℭ",Chi:"Χ",CircleDot:"⊙",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",Colon:"∷",Colone:"⩴",Congruent:"≡",Conint:"∯",ContourIntegral:"∮",Copf:"ℂ",Coproduct:"∐",CounterClockwiseContourIntegral:"∳",Cross:"⨯",Cscr:"𝒞",Cup:"⋓",CupCap:"≍",DD:"ⅅ",DDotrahd:"⤑",DJcy:"Ђ",DScy:"Ѕ",DZcy:"Џ",Dagger:"‡",Darr:"↡",Dashv:"⫤",Dcaron:"Ď",Dcy:"Д",Del:"∇",Delta:"Δ",Dfr:"𝔇",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",Diamond:"⋄",DifferentialD:"ⅆ",Dopf:"𝔻",Dot:"¨",DotDot:"⃜",DotEqual:"≐",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",DownArrow:"↓",DownArrowBar:"⤓",DownArrowUpArrow:"⇵",DownBreve:"̑",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVector:"↽",DownLeftVectorBar:"⥖",DownRightTeeVector:"⥟",DownRightVector:"⇁",DownRightVectorBar:"⥗",DownTee:"⊤",DownTeeArrow:"↧",Downarrow:"⇓",Dscr:"𝒟",Dstrok:"Đ",ENG:"Ŋ",ETH:"Ð",Eacute:"É",Ecaron:"Ě",Ecirc:"Ê",Ecy:"Э",Edot:"Ė",Efr:"𝔈",Egrave:"È",Element:"∈",Emacr:"Ē",EmptySmallSquare:"◻",EmptyVerySmallSquare:"▫",Eogon:"Ę",Eopf:"𝔼",Epsilon:"Ε",Equal:"⩵",EqualTilde:"≂",Equilibrium:"⇌",Escr:"ℰ",Esim:"⩳",Eta:"Η",Euml:"Ë",Exists:"∃",ExponentialE:"ⅇ",Fcy:"Ф",Ffr:"𝔉",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",Fopf:"𝔽",ForAll:"∀",Fouriertrf:"ℱ",Fscr:"ℱ",GJcy:"Ѓ",GT:">",Gamma:"Γ",Gammad:"Ϝ",Gbreve:"Ğ",Gcedil:"Ģ",Gcirc:"Ĝ",Gcy:"Г",Gdot:"Ġ",Gfr:"𝔊",Gg:"⋙",Gopf:"𝔾",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",Gscr:"𝒢",Gt:"≫",HARDcy:"Ъ",Hacek:"ˇ",Hat:"^",Hcirc:"Ĥ",Hfr:"ℌ",HilbertSpace:"ℋ",Hopf:"ℍ",HorizontalLine:"─",Hscr:"ℋ",Hstrok:"Ħ",HumpDownHump:"≎",HumpEqual:"≏",IEcy:"Е",IJlig:"Ĳ",IOcy:"Ё",Iacute:"Í",Icirc:"Î",Icy:"И",Idot:"İ",Ifr:"ℑ",Igrave:"Ì",Im:"ℑ",Imacr:"Ī",ImaginaryI:"ⅈ",Implies:"⇒",Int:"∬",Integral:"∫",Intersection:"⋂",InvisibleComma:"⁣",InvisibleTimes:"⁢",Iogon:"Į",Iopf:"𝕀",Iota:"Ι",Iscr:"ℐ",Itilde:"Ĩ",Iukcy:"І",Iuml:"Ï",Jcirc:"Ĵ",Jcy:"Й",Jfr:"𝔍",Jopf:"𝕁",Jscr:"𝒥",Jsercy:"Ј",Jukcy:"Є",KHcy:"Х",KJcy:"Ќ",Kappa:"Κ",Kcedil:"Ķ",Kcy:"К",Kfr:"𝔎",Kopf:"𝕂",Kscr:"𝒦",LJcy:"Љ",LT:"<",Lacute:"Ĺ",Lambda:"Λ",Lang:"⟪",Laplacetrf:"ℒ",Larr:"↞",Lcaron:"Ľ",Lcedil:"Ļ",Lcy:"Л",LeftAngleBracket:"⟨",LeftArrow:"←",LeftArrowBar:"⇤",LeftArrowRightArrow:"⇆",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVector:"⇃",LeftDownVectorBar:"⥙",LeftFloor:"⌊",LeftRightArrow:"↔",LeftRightVector:"⥎",LeftTee:"⊣",LeftTeeArrow:"↤",LeftTeeVector:"⥚",LeftTriangle:"⊲",LeftTriangleBar:"⧏",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVector:"↿",LeftUpVectorBar:"⥘",LeftVector:"↼",LeftVectorBar:"⥒",Leftarrow:"⇐",Leftrightarrow:"⇔",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",LessLess:"⪡",LessSlantEqual:"⩽",LessTilde:"≲",Lfr:"𝔏",Ll:"⋘",Lleftarrow:"⇚",Lmidot:"Ŀ",LongLeftArrow:"⟵",LongLeftRightArrow:"⟷",LongRightArrow:"⟶",Longleftarrow:"⟸",Longleftrightarrow:"⟺",Longrightarrow:"⟹",Lopf:"𝕃",LowerLeftArrow:"↙",LowerRightArrow:"↘",Lscr:"ℒ",Lsh:"↰",Lstrok:"Ł",Lt:"≪",Map:"⤅",Mcy:"М",MediumSpace:" ",Mellintrf:"ℳ",Mfr:"𝔐",MinusPlus:"∓",Mopf:"𝕄",Mscr:"ℳ",Mu:"Μ",NJcy:"Њ",Nacute:"Ń",Ncaron:"Ň",Ncedil:"Ņ",Ncy:"Н",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:`
`,Nfr:"𝔑",NoBreak:"⁠",NonBreakingSpace:" ",Nopf:"ℕ",Not:"⫬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",NotLeftTriangle:"⋪",NotLeftTriangleBar:"⧏̸",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangle:"⋫",NotRightTriangleBar:"⧐̸",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",Nscr:"𝒩",Ntilde:"Ñ",Nu:"Ν",OElig:"Œ",Oacute:"Ó",Ocirc:"Ô",Ocy:"О",Odblac:"Ő",Ofr:"𝔒",Ograve:"Ò",Omacr:"Ō",Omega:"Ω",Omicron:"Ο",Oopf:"𝕆",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",Or:"⩔",Oscr:"𝒪",Oslash:"Ø",Otilde:"Õ",Otimes:"⨷",Ouml:"Ö",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",PartialD:"∂",Pcy:"П",Pfr:"𝔓",Phi:"Φ",Pi:"Π",PlusMinus:"±",Poincareplane:"ℌ",Popf:"ℙ",Pr:"⪻",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",Prime:"″",Product:"∏",Proportion:"∷",Proportional:"∝",Pscr:"𝒫",Psi:"Ψ",QUOT:'"',Qfr:"𝔔",Qopf:"ℚ",Qscr:"𝒬",RBarr:"⤐",REG:"®",Racute:"Ŕ",Rang:"⟫",Rarr:"↠",Rarrtl:"⤖",Rcaron:"Ř",Rcedil:"Ŗ",Rcy:"Р",Re:"ℜ",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",Rfr:"ℜ",Rho:"Ρ",RightAngleBracket:"⟩",RightArrow:"→",RightArrowBar:"⇥",RightArrowLeftArrow:"⇄",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVector:"⇂",RightDownVectorBar:"⥕",RightFloor:"⌋",RightTee:"⊢",RightTeeArrow:"↦",RightTeeVector:"⥛",RightTriangle:"⊳",RightTriangleBar:"⧐",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVector:"↾",RightUpVectorBar:"⥔",RightVector:"⇀",RightVectorBar:"⥓",Rightarrow:"⇒",Ropf:"ℝ",RoundImplies:"⥰",Rrightarrow:"⇛",Rscr:"ℛ",Rsh:"↱",RuleDelayed:"⧴",SHCHcy:"Щ",SHcy:"Ш",SOFTcy:"Ь",Sacute:"Ś",Sc:"⪼",Scaron:"Š",Scedil:"Ş",Scirc:"Ŝ",Scy:"С",Sfr:"𝔖",ShortDownArrow:"↓",ShortLeftArrow:"←",ShortRightArrow:"→",ShortUpArrow:"↑",Sigma:"Σ",SmallCircle:"∘",Sopf:"𝕊",Sqrt:"√",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",Sscr:"𝒮",Star:"⋆",Sub:"⋐",Subset:"⋐",SubsetEqual:"⊆",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",SuchThat:"∋",Sum:"∑",Sup:"⋑",Superset:"⊃",SupersetEqual:"⊇",Supset:"⋑",THORN:"Þ",TRADE:"™",TSHcy:"Ћ",TScy:"Ц",Tab:"	",Tau:"Τ",Tcaron:"Ť",Tcedil:"Ţ",Tcy:"Т",Tfr:"𝔗",Therefore:"∴",Theta:"Θ",ThickSpace:"  ",ThinSpace:" ",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",Topf:"𝕋",TripleDot:"⃛",Tscr:"𝒯",Tstrok:"Ŧ",Uacute:"Ú",Uarr:"↟",Uarrocir:"⥉",Ubrcy:"Ў",Ubreve:"Ŭ",Ucirc:"Û",Ucy:"У",Udblac:"Ű",Ufr:"𝔘",Ugrave:"Ù",Umacr:"Ū",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",Uogon:"Ų",Uopf:"𝕌",UpArrow:"↑",UpArrowBar:"⤒",UpArrowDownArrow:"⇅",UpDownArrow:"↕",UpEquilibrium:"⥮",UpTee:"⊥",UpTeeArrow:"↥",Uparrow:"⇑",Updownarrow:"⇕",UpperLeftArrow:"↖",UpperRightArrow:"↗",Upsi:"ϒ",Upsilon:"Υ",Uring:"Ů",Uscr:"𝒰",Utilde:"Ũ",Uuml:"Ü",VDash:"⊫",Vbar:"⫫",Vcy:"В",Vdash:"⊩",Vdashl:"⫦",Vee:"⋁",Verbar:"‖",Vert:"‖",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",Vfr:"𝔙",Vopf:"𝕍",Vscr:"𝒱",Vvdash:"⊪",Wcirc:"Ŵ",Wedge:"⋀",Wfr:"𝔚",Wopf:"𝕎",Wscr:"𝒲",Xfr:"𝔛",Xi:"Ξ",Xopf:"𝕏",Xscr:"𝒳",YAcy:"Я",YIcy:"Ї",YUcy:"Ю",Yacute:"Ý",Ycirc:"Ŷ",Ycy:"Ы",Yfr:"𝔜",Yopf:"𝕐",Yscr:"𝒴",Yuml:"Ÿ",ZHcy:"Ж",Zacute:"Ź",Zcaron:"Ž",Zcy:"З",Zdot:"Ż",ZeroWidthSpace:"​",Zeta:"Ζ",Zfr:"ℨ",Zopf:"ℤ",Zscr:"𝒵",aacute:"á",abreve:"ă",ac:"∾",acE:"∾̳",acd:"∿",acirc:"â",acute:"´",acy:"а",aelig:"æ",af:"⁡",afr:"𝔞",agrave:"à",alefsym:"ℵ",aleph:"ℵ",alpha:"α",amacr:"ā",amalg:"⨿",amp:"&",and:"∧",andand:"⩕",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsd:"∡",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",aogon:"ą",aopf:"𝕒",ap:"≈",apE:"⩰",apacir:"⩯",ape:"≊",apid:"≋",apos:"'",approx:"≈",approxeq:"≊",aring:"å",ascr:"𝒶",ast:"*",asymp:"≈",asympeq:"≍",atilde:"ã",auml:"ä",awconint:"∳",awint:"⨑",bNot:"⫭",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",barvee:"⊽",barwed:"⌅",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",bcy:"б",bdquo:"„",becaus:"∵",because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",beta:"β",beth:"ℶ",between:"≬",bfr:"𝔟",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bnot:"⌐",bopf:"𝕓",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxDL:"╗",boxDR:"╔",boxDl:"╖",boxDr:"╓",boxH:"═",boxHD:"╦",boxHU:"╩",boxHd:"╤",boxHu:"╧",boxUL:"╝",boxUR:"╚",boxUl:"╜",boxUr:"╙",boxV:"║",boxVH:"╬",boxVL:"╣",boxVR:"╠",boxVh:"╫",boxVl:"╢",boxVr:"╟",boxbox:"⧉",boxdL:"╕",boxdR:"╒",boxdl:"┐",boxdr:"┌",boxh:"─",boxhD:"╥",boxhU:"╨",boxhd:"┬",boxhu:"┴",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxuL:"╛",boxuR:"╘",boxul:"┘",boxur:"└",boxv:"│",boxvH:"╪",boxvL:"╡",boxvR:"╞",boxvh:"┼",boxvl:"┤",boxvr:"├",bprime:"‵",breve:"˘",brvbar:"¦",bscr:"𝒷",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsol:"\\",bsolb:"⧅",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpE:"⪮",bumpe:"≏",bumpeq:"≏",cacute:"ć",cap:"∩",capand:"⩄",capbrcup:"⩉",capcap:"⩋",capcup:"⩇",capdot:"⩀",caps:"∩︀",caret:"⁁",caron:"ˇ",ccaps:"⩍",ccaron:"č",ccedil:"ç",ccirc:"ĉ",ccups:"⩌",ccupssm:"⩐",cdot:"ċ",cedil:"¸",cemptyv:"⦲",cent:"¢",centerdot:"·",cfr:"𝔠",chcy:"ч",check:"✓",checkmark:"✓",chi:"χ",cir:"○",cirE:"⧃",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledR:"®",circledS:"Ⓢ",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",cire:"≗",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",clubs:"♣",clubsuit:"♣",colon:":",colone:"≔",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",conint:"∮",copf:"𝕔",coprod:"∐",copy:"©",copysr:"℗",crarr:"↵",cross:"✗",cscr:"𝒸",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",cup:"∪",cupbrcap:"⩈",cupcap:"⩆",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",dArr:"⇓",dHar:"⥥",dagger:"†",daleth:"ℸ",darr:"↓",dash:"‐",dashv:"⊣",dbkarow:"⤏",dblac:"˝",dcaron:"ď",dcy:"д",dd:"ⅆ",ddagger:"‡",ddarr:"⇊",ddotseq:"⩷",deg:"°",delta:"δ",demptyv:"⦱",dfisht:"⥿",dfr:"𝔡",dharl:"⇃",dharr:"⇂",diam:"⋄",diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",digamma:"ϝ",disin:"⋲",div:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",djcy:"ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",dopf:"𝕕",dot:"˙",doteq:"≐",doteqdot:"≑",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",downarrow:"↓",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",dscr:"𝒹",dscy:"ѕ",dsol:"⧶",dstrok:"đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",dzcy:"џ",dzigrarr:"⟿",eDDot:"⩷",eDot:"≑",eacute:"é",easter:"⩮",ecaron:"ě",ecir:"≖",ecirc:"ê",ecolon:"≕",ecy:"э",edot:"ė",ee:"ⅇ",efDot:"≒",efr:"𝔢",eg:"⪚",egrave:"è",egs:"⪖",egsdot:"⪘",el:"⪙",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",emacr:"ē",empty:"∅",emptyset:"∅",emptyv:"∅",emsp13:" ",emsp14:" ",emsp:" ",eng:"ŋ",ensp:" ",eogon:"ę",eopf:"𝕖",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",epsilon:"ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",equals:"=",equest:"≟",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erDot:"≓",erarr:"⥱",escr:"ℯ",esdot:"≐",esim:"≂",eta:"η",eth:"ð",euml:"ë",euro:"€",excl:"!",exist:"∃",expectation:"ℰ",exponentiale:"ⅇ",fallingdotseq:"≒",fcy:"ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",ffr:"𝔣",filig:"ﬁ",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",fopf:"𝕗",forall:"∀",fork:"⋔",forkv:"⫙",fpartint:"⨍",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",fscr:"𝒻",gE:"≧",gEl:"⪌",gacute:"ǵ",gamma:"γ",gammad:"ϝ",gap:"⪆",gbreve:"ğ",gcirc:"ĝ",gcy:"г",gdot:"ġ",ge:"≥",gel:"⋛",geq:"≥",geqq:"≧",geqslant:"⩾",ges:"⩾",gescc:"⪩",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",gfr:"𝔤",gg:"≫",ggg:"⋙",gimel:"ℷ",gjcy:"ѓ",gl:"≷",glE:"⪒",gla:"⪥",glj:"⪤",gnE:"≩",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gneq:"⪈",gneqq:"≩",gnsim:"⋧",gopf:"𝕘",grave:"`",gscr:"ℊ",gsim:"≳",gsime:"⪎",gsiml:"⪐",gt:">",gtcc:"⪧",gtcir:"⩺",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",hArr:"⇔",hairsp:" ",half:"½",hamilt:"ℋ",hardcy:"ъ",harr:"↔",harrcir:"⥈",harrw:"↭",hbar:"ℏ",hcirc:"ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",hfr:"𝔥",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",hopf:"𝕙",horbar:"―",hscr:"𝒽",hslash:"ℏ",hstrok:"ħ",hybull:"⁃",hyphen:"‐",iacute:"í",ic:"⁣",icirc:"î",icy:"и",iecy:"е",iexcl:"¡",iff:"⇔",ifr:"𝔦",igrave:"ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",ijlig:"ĳ",imacr:"ī",image:"ℑ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",imof:"⊷",imped:"Ƶ",in:"∈",incare:"℅",infin:"∞",infintie:"⧝",inodot:"ı",int:"∫",intcal:"⊺",integers:"ℤ",intercal:"⊺",intlarhk:"⨗",intprod:"⨼",iocy:"ё",iogon:"į",iopf:"𝕚",iota:"ι",iprod:"⨼",iquest:"¿",iscr:"𝒾",isin:"∈",isinE:"⋹",isindot:"⋵",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",itilde:"ĩ",iukcy:"і",iuml:"ï",jcirc:"ĵ",jcy:"й",jfr:"𝔧",jmath:"ȷ",jopf:"𝕛",jscr:"𝒿",jsercy:"ј",jukcy:"є",kappa:"κ",kappav:"ϰ",kcedil:"ķ",kcy:"к",kfr:"𝔨",kgreen:"ĸ",khcy:"х",kjcy:"ќ",kopf:"𝕜",kscr:"𝓀",lAarr:"⇚",lArr:"⇐",lAtail:"⤛",lBarr:"⤎",lE:"≦",lEg:"⪋",lHar:"⥢",lacute:"ĺ",laemptyv:"⦴",lagran:"ℒ",lambda:"λ",lang:"⟨",langd:"⦑",langle:"⟨",lap:"⪅",laquo:"«",larr:"←",larrb:"⇤",larrbfs:"⤟",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",lat:"⪫",latail:"⤙",late:"⪭",lates:"⪭︀",lbarr:"⤌",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",lcaron:"ľ",lcedil:"ļ",lceil:"⌈",lcub:"{",lcy:"л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",leftarrow:"←",leftarrowtail:"↢",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",leftrightarrow:"↔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",leftthreetimes:"⋋",leg:"⋚",leq:"≤",leqq:"≦",leqslant:"⩽",les:"⩽",lescc:"⪨",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",lessgtr:"≶",lesssim:"≲",lfisht:"⥼",lfloor:"⌊",lfr:"𝔩",lg:"≶",lgE:"⪑",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",ljcy:"љ",ll:"≪",llarr:"⇇",llcorner:"⌞",llhard:"⥫",lltri:"◺",lmidot:"ŀ",lmoust:"⎰",lmoustache:"⎰",lnE:"≨",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",longleftarrow:"⟵",longleftrightarrow:"⟷",longmapsto:"⟼",longrightarrow:"⟶",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",lopf:"𝕝",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"𝓁",lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",lstrok:"ł",lt:"<",ltcc:"⪦",ltcir:"⩹",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltrPar:"⦖",ltri:"◃",ltrie:"⊴",ltrif:"◂",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",mDDot:"∺",macr:"¯",male:"♂",malt:"✠",maltese:"✠",map:"↦",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",mcy:"м",mdash:"—",measuredangle:"∡",mfr:"𝔪",mho:"℧",micro:"µ",mid:"∣",midast:"*",midcir:"⫰",middot:"·",minus:"−",minusb:"⊟",minusd:"∸",minusdu:"⨪",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",mopf:"𝕞",mp:"∓",mscr:"𝓂",mstpos:"∾",mu:"μ",multimap:"⊸",mumap:"⊸",nGg:"⋙̸",nGt:"≫⃒",nGtv:"≫̸",nLeftarrow:"⇍",nLeftrightarrow:"⇎",nLl:"⋘̸",nLt:"≪⃒",nLtv:"≪̸",nRightarrow:"⇏",nVDash:"⊯",nVdash:"⊮",nabla:"∇",nacute:"ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natur:"♮",natural:"♮",naturals:"ℕ",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",ncaron:"ň",ncedil:"ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",ncy:"н",ndash:"–",ne:"≠",neArr:"⇗",nearhk:"⤤",nearr:"↗",nearrow:"↗",nedot:"≐̸",nequiv:"≢",nesear:"⤨",nesim:"≂̸",nexist:"∄",nexists:"∄",nfr:"𝔫",ngE:"≧̸",nge:"≱",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",ngsim:"≵",ngt:"≯",ngtr:"≯",nhArr:"⇎",nharr:"↮",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",njcy:"њ",nlArr:"⇍",nlE:"≦̸",nlarr:"↚",nldr:"‥",nle:"≰",nleftarrow:"↚",nleftrightarrow:"↮",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nlsim:"≴",nlt:"≮",nltri:"⋪",nltrie:"⋬",nmid:"∤",nopf:"𝕟",not:"¬",notin:"∉",notinE:"⋹̸",notindot:"⋵̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",npar:"∦",nparallel:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",npre:"⪯̸",nprec:"⊀",npreceq:"⪯̸",nrArr:"⇏",nrarr:"↛",nrarrc:"⤳̸",nrarrw:"↝̸",nrightarrow:"↛",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",nscr:"𝓃",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsubE:"⫅̸",nsube:"⊈",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupE:"⫆̸",nsupe:"⊉",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",ntilde:"ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",nu:"ν",num:"#",numero:"№",numsp:" ",nvDash:"⊭",nvHarr:"⤄",nvap:"≍⃒",nvdash:"⊬",nvge:"≥⃒",nvgt:">⃒",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwArr:"⇖",nwarhk:"⤣",nwarr:"↖",nwarrow:"↖",nwnear:"⤧",oS:"Ⓢ",oacute:"ó",oast:"⊛",ocir:"⊚",ocirc:"ô",ocy:"о",odash:"⊝",odblac:"ő",odiv:"⨸",odot:"⊙",odsold:"⦼",oelig:"œ",ofcir:"⦿",ofr:"𝔬",ogon:"˛",ograve:"ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",omacr:"ō",omega:"ω",omicron:"ο",omid:"⦶",ominus:"⊖",oopf:"𝕠",opar:"⦷",operp:"⦹",oplus:"⊕",or:"∨",orarr:"↻",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oscr:"ℴ",oslash:"ø",osol:"⊘",otilde:"õ",otimes:"⊗",otimesas:"⨶",ouml:"ö",ovbar:"⌽",par:"∥",para:"¶",parallel:"∥",parsim:"⫳",parsl:"⫽",part:"∂",pcy:"п",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",pfr:"𝔭",phi:"φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",pi:"π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plus:"+",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plusdo:"∔",plusdu:"⨥",pluse:"⩲",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",pointint:"⨕",popf:"𝕡",pound:"£",pr:"≺",prE:"⪳",prap:"⪷",prcue:"≼",pre:"⪯",prec:"≺",precapprox:"⪷",preccurlyeq:"≼",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",precsim:"≾",prime:"′",primes:"ℙ",prnE:"⪵",prnap:"⪹",prnsim:"⋨",prod:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",propto:"∝",prsim:"≾",prurel:"⊰",pscr:"𝓅",psi:"ψ",puncsp:" ",qfr:"𝔮",qint:"⨌",qopf:"𝕢",qprime:"⁗",qscr:"𝓆",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",quot:'"',rAarr:"⇛",rArr:"⇒",rAtail:"⤜",rBarr:"⤏",rHar:"⥤",race:"∽̱",racute:"ŕ",radic:"√",raemptyv:"⦳",rang:"⟩",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"»",rarr:"→",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",rarrtl:"↣",rarrw:"↝",ratail:"⤚",ratio:"∶",rationals:"ℚ",rbarr:"⤍",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",rcaron:"ř",rcedil:"ŗ",rceil:"⌉",rcub:"}",rcy:"р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",rect:"▭",reg:"®",rfisht:"⥽",rfloor:"⌋",rfr:"𝔯",rhard:"⇁",rharu:"⇀",rharul:"⥬",rho:"ρ",rhov:"ϱ",rightarrow:"→",rightarrowtail:"↣",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",rightthreetimes:"⋌",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoust:"⎱",rmoustache:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",ropf:"𝕣",roplus:"⨮",rotimes:"⨵",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",rsaquo:"›",rscr:"𝓇",rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",ruluhar:"⥨",rx:"℞",sacute:"ś",sbquo:"‚",sc:"≻",scE:"⪴",scap:"⪸",scaron:"š",sccue:"≽",sce:"⪰",scedil:"ş",scirc:"ŝ",scnE:"⪶",scnap:"⪺",scnsim:"⋩",scpolint:"⨓",scsim:"≿",scy:"с",sdot:"⋅",sdotb:"⊡",sdote:"⩦",seArr:"⇘",searhk:"⤥",searr:"↘",searrow:"↘",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",sfr:"𝔰",sfrown:"⌢",sharp:"♯",shchcy:"щ",shcy:"ш",shortmid:"∣",shortparallel:"∥",shy:"­",sigma:"σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",softcy:"ь",sol:"/",solb:"⧄",solbar:"⌿",sopf:"𝕤",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",squ:"□",square:"□",squarf:"▪",squf:"▪",srarr:"→",sscr:"𝓈",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",star:"☆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",sub:"⊂",subE:"⫅",subdot:"⪽",sube:"⊆",subedot:"⫃",submult:"⫁",subnE:"⫋",subne:"⊊",subplus:"⪿",subrarr:"⥹",subset:"⊂",subseteq:"⊆",subseteqq:"⫅",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succ:"≻",succapprox:"⪸",succcurlyeq:"≽",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",sum:"∑",sung:"♪",sup1:"¹",sup2:"²",sup3:"³",sup:"⊃",supE:"⫆",supdot:"⪾",supdsub:"⫘",supe:"⊇",supedot:"⫄",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supnE:"⫌",supne:"⊋",supplus:"⫀",supset:"⊃",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swArr:"⇙",swarhk:"⤦",swarr:"↙",swarrow:"↙",swnwar:"⤪",szlig:"ß",target:"⌖",tau:"τ",tbrk:"⎴",tcaron:"ť",tcedil:"ţ",tcy:"т",tdot:"⃛",telrec:"⌕",tfr:"𝔱",there4:"∴",therefore:"∴",theta:"θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",thinsp:" ",thkap:"≈",thksim:"∼",thorn:"þ",tilde:"˜",times:"×",timesb:"⊠",timesbar:"⨱",timesd:"⨰",tint:"∭",toea:"⤨",top:"⊤",topbot:"⌶",topcir:"⫱",topf:"𝕥",topfork:"⫚",tosa:"⤩",tprime:"‴",trade:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",tscr:"𝓉",tscy:"ц",tshcy:"ћ",tstrok:"ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",uArr:"⇑",uHar:"⥣",uacute:"ú",uarr:"↑",ubrcy:"ў",ubreve:"ŭ",ucirc:"û",ucy:"у",udarr:"⇅",udblac:"ű",udhar:"⥮",ufisht:"⥾",ufr:"𝔲",ugrave:"ù",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",umacr:"ū",uml:"¨",uogon:"ų",uopf:"𝕦",uparrow:"↑",updownarrow:"↕",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",upsi:"υ",upsih:"ϒ",upsilon:"υ",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",uring:"ů",urtri:"◹",uscr:"𝓊",utdot:"⋰",utilde:"ũ",utri:"▵",utrif:"▴",uuarr:"⇈",uuml:"ü",uwangle:"⦧",vArr:"⇕",vBar:"⫨",vBarv:"⫩",vDash:"⊨",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",varr:"↕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",vcy:"в",vdash:"⊢",vee:"∨",veebar:"⊻",veeeq:"≚",vellip:"⋮",verbar:"|",vert:"|",vfr:"𝔳",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",vopf:"𝕧",vprop:"∝",vrtri:"⊳",vscr:"𝓋",vsubnE:"⫋︀",vsubne:"⊊︀",vsupnE:"⫌︀",vsupne:"⊋︀",vzigzag:"⦚",wcirc:"ŵ",wedbar:"⩟",wedge:"∧",wedgeq:"≙",weierp:"℘",wfr:"𝔴",wopf:"𝕨",wp:"℘",wr:"≀",wreath:"≀",wscr:"𝓌",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",xfr:"𝔵",xhArr:"⟺",xharr:"⟷",xi:"ξ",xlArr:"⟸",xlarr:"⟵",xmap:"⟼",xnis:"⋻",xodot:"⨀",xopf:"𝕩",xoplus:"⨁",xotime:"⨂",xrArr:"⟹",xrarr:"⟶",xscr:"𝓍",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",yacute:"ý",yacy:"я",ycirc:"ŷ",ycy:"ы",yen:"¥",yfr:"𝔶",yicy:"ї",yopf:"𝕪",yscr:"𝓎",yucy:"ю",yuml:"ÿ",zacute:"ź",zcaron:"ž",zcy:"з",zdot:"ż",zeetrf:"ℨ",zeta:"ζ",zfr:"𝔷",zhcy:"ж",zigrarr:"⇝",zopf:"𝕫",zscr:"𝓏",zwj:"‍",zwnj:"‌"},ku={}.hasOwnProperty;function Go(e){return ku.call(Ri,e)?Ri[e]:!1}const ye=dt(/[A-Za-z]/),he=dt(/[\dA-Za-z]/),wu=dt(/[#-'*+\--9=?A-Z^-~]/);function tr(e){return e!==null&&(e<32||e===127)}const fo=dt(/\d/),vu=dt(/[\dA-Fa-f]/),Bu=dt(/[!-/:-@[-`{-~]/);function P(e){return e!==null&&e<-2}function V(e){return e!==null&&(e<0||e===32)}function $(e){return e===-2||e===-1||e===32}const ur=dt(new RegExp("\\p{P}|\\p{S}","u")),wt=dt(/\s/);function dt(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Pe(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}function Kt(e){if(e===null||V(e)||wt(e))return 1;if(ur(e))return 2}const Eu={};function hr(e,t){let n=t||Eu;return ga(e,typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,typeof n.includeHtml=="boolean"?n.includeHtml:!0)}function ga(e,t,n){if(Au(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Oi(e.children,t,n)}return Array.isArray(e)?Oi(e,t,n):""}function Oi(e,t,n){let r=[],o=-1;for(;++o<e.length;)r[o]=ga(e[o],t,n);return r.join("")}function Au(e){return!!(e&&typeof e=="object")}function ya(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)==65535||(n&65535)==65534||n>1114111?"�":String.fromCodePoint(n)}const Du=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Fu(e){return e.replace(Du,Nu)}function Nu(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let r=n.charCodeAt(1),o=r===120||r===88;return ya(n.slice(o?2:1),o?16:10)}return Go(n)||e}function Ae(e,t,n,r){let o=e.length,l=0,i;if(t=t<0?-t>o?0:o+t:t>o?o:t,n=n>0?n:0,r.length<1e4)i=Array.from(r),i.unshift(t,n),e.splice(...i);else for(n&&e.splice(t,n);l<r.length;)i=r.slice(l,l+1e4),i.unshift(t,0),e.splice(...i),l+=1e4,t+=1e4}function De(e,t){return e.length>0?(Ae(e,e.length,0,t),e):t}const Li={}.hasOwnProperty;function xa(e){let t={},n=-1;for(;++n<e.length;)Cu(t,e[n]);return t}function Cu(e,t){let n;for(n in t){let r=(Li.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n],l;if(o)for(l in o){Li.call(r,l)||(r[l]=[]);let i=o[l];Ru(r[l],Array.isArray(i)?i:i?[i]:[])}}}function Ru(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Ae(e,0,0,r)}function Wt(e){let t=[],n=-1,r=0,o=0;for(;++n<e.length;){let l=e.charCodeAt(n),i="";if(l===37&&he(e.charCodeAt(n+1))&&he(e.charCodeAt(n+2)))o=2;else if(l<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l))||(i=String.fromCharCode(l));else if(l>55295&&l<57344){let a=e.charCodeAt(n+1);l<56320&&a>56319&&a<57344?(i=String.fromCharCode(l,a),o=1):i="�"}else i=String.fromCharCode(l);i&&=(t.push(e.slice(r,n),encodeURIComponent(i)),r=n+o+1,""),o&&=(n+=o,0)}return t.join("")+e.slice(r)}function pr(e,t,n){let r=[],o=-1;for(;++o<e.length;){let l=e[o].resolveAll;l&&!r.includes(l)&&(t=l(t,n),r.push(l))}return t}const uo={name:"attention",resolveAll:Ou,tokenize:Lu};function Ou(e,t){let n=-1,r,o,l,i,a,s,c,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let f={...e[r][1].end},u={...e[n][1].start};Ii(f,-s),Ii(u,s),i={type:s>1?"strongSequence":"emphasisSequence",start:f,end:{...e[r][1].end}},a={type:s>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:u},l={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},o={type:s>1?"strong":"emphasis",start:{...i.start},end:{...a.end}},e[r][1].end={...i.start},e[n][1].start={...a.end},c=[],e[r][1].end.offset-e[r][1].start.offset&&(c=De(c,[["enter",e[r][1],t],["exit",e[r][1],t]])),c=De(c,[["enter",o,t],["enter",i,t],["exit",i,t],["enter",l,t]]),c=De(c,pr(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),c=De(c,[["exit",l,t],["enter",a,t],["exit",a,t],["exit",o,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,c=De(c,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Ae(e,r-1,n-r+3,c),n=r+c.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Lu(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,o=Kt(r),l;return i;function i(s){return l=s,e.enter("attentionSequence"),a(s)}function a(s){if(s===l)return e.consume(s),a;let c=e.exit("attentionSequence"),d=Kt(s),f=!d||d===2&&o||n.includes(s),u=!o||o===2&&d||n.includes(r);return c._open=!!(l===42?f:f&&(o||!u)),c._close=!!(l===42?u:u&&(d||!f)),t(s)}}function Ii(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Iu={name:"autolink",tokenize:Su};function Su(e,t,n){let r=0;return o;function o(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),l}function l(h){return ye(h)?(e.consume(h),i):h===64?n(h):c(h)}function i(h){return h===43||h===45||h===46||he(h)?(r=1,a(h)):c(h)}function a(h){return h===58?(e.consume(h),r=0,s):(h===43||h===45||h===46||he(h))&&r++<32?(e.consume(h),a):(r=0,c(h))}function s(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||tr(h)?n(h):(e.consume(h),s)}function c(h){return h===64?(e.consume(h),d):wu(h)?(e.consume(h),c):n(h)}function d(h){return he(h)?f(h):n(h)}function f(h){return h===46?(e.consume(h),r=0,d):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):u(h)}function u(h){if((h===45||he(h))&&r++<63){let p=h===45?u:f;return e.consume(h),p}return n(h)}}function U(e,t,n,r){let o=r?r-1:1/0,l=0;return i;function i(s){return $(s)?(e.enter(n),a(s)):t(s)}function a(s){return $(s)&&l++<o?(e.consume(s),a):(e.exit(n),t(s))}}const En={partial:!0,tokenize:Pu};function Pu(e,t,n){return r;function r(l){return $(l)?U(e,o,"linePrefix")(l):o(l)}function o(l){return l===null||P(l)?t(l):n(l)}}const ba={continuation:{tokenize:Mu},exit:Gu,name:"blockQuote",tokenize:zu};function zu(e,t,n){let r=this;return o;function o(i){if(i===62){let a=r.containerState;return a.open||=(e.enter("blockQuote",{_container:!0}),!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(i),e.exit("blockQuoteMarker"),l}return n(i)}function l(i){return $(i)?(e.enter("blockQuotePrefixWhitespace"),e.consume(i),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(i))}}function Mu(e,t,n){let r=this;return o;function o(i){return $(i)?U(e,l,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(i):l(i)}function l(i){return e.attempt(ba,t,n)(i)}}function Gu(e){e.exit("blockQuote")}const Ta={name:"characterEscape",tokenize:qu};function qu(e,t,n){return r;function r(l){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(l),e.exit("escapeMarker"),o}function o(l){return Bu(l)?(e.enter("characterEscapeValue"),e.consume(l),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(l)}}const ka={name:"characterReference",tokenize:Ku};function Ku(e,t,n){let r=this,o=0,l,i;return a;function a(f){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),s}function s(f){return f===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(f),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),l=31,i=he,d(f))}function c(f){return f===88||f===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(f),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),l=6,i=vu,d):(e.enter("characterReferenceValue"),l=7,i=fo,d(f))}function d(f){if(f===59&&o){let u=e.exit("characterReferenceValue");return i===he&&!Go(r.sliceSerialize(u))?n(f):(e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return i(f)&&o++<l?(e.consume(f),d):n(f)}}const Si={partial:!0,tokenize:ju},Pi={concrete:!0,name:"codeFenced",tokenize:Xu};function Xu(e,t,n){let r=this,o={partial:!0,tokenize:S},l=0,i=0,a;return s;function s(v){return c(v)}function c(v){let L=r.events[r.events.length-1];return l=L&&L[1].type==="linePrefix"?L[2].sliceSerialize(L[1],!0).length:0,a=v,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(v)}function d(v){return v===a?(i++,e.consume(v),d):i<3?n(v):(e.exit("codeFencedFenceSequence"),$(v)?U(e,f,"whitespace")(v):f(v))}function f(v){return v===null||P(v)?(e.exit("codeFencedFence"),r.interrupt?t(v):e.check(Si,T,O)(v)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),u(v))}function u(v){return v===null||P(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),f(v)):$(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),U(e,h,"whitespace")(v)):v===96&&v===a?n(v):(e.consume(v),u)}function h(v){return v===null||P(v)?f(v):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),p(v))}function p(v){return v===null||P(v)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),f(v)):v===96&&v===a?n(v):(e.consume(v),p)}function T(v){return e.attempt(o,O,b)(v)}function b(v){return e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),y}function y(v){return l>0&&$(v)?U(e,F,"linePrefix",l+1)(v):F(v)}function F(v){return v===null||P(v)?e.check(Si,T,O)(v):(e.enter("codeFlowValue"),B(v))}function B(v){return v===null||P(v)?(e.exit("codeFlowValue"),F(v)):(e.consume(v),B)}function O(v){return e.exit("codeFenced"),t(v)}function S(v,L,k){let R=0;return x;function x(X){return v.enter("lineEnding"),v.consume(X),v.exit("lineEnding"),E}function E(X){return v.enter("codeFencedFence"),$(X)?U(v,N,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(X):N(X)}function N(X){return X===a?(v.enter("codeFencedFenceSequence"),I(X)):k(X)}function I(X){return X===a?(R++,v.consume(X),I):R>=i?(v.exit("codeFencedFenceSequence"),$(X)?U(v,j,"whitespace")(X):j(X)):k(X)}function j(X){return X===null||P(X)?(v.exit("codeFencedFence"),L(X)):k(X)}}}function ju(e,t,n){let r=this;return o;function o(i){return i===null?n(i):(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),l)}function l(i){return r.parser.lazy[r.now().line]?n(i):t(i)}}const Cr={name:"codeIndented",tokenize:$u},Zu={partial:!0,tokenize:Hu};function $u(e,t,n){let r=this;return o;function o(c){return e.enter("codeIndented"),U(e,l,"linePrefix",5)(c)}function l(c){let d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?i(c):n(c)}function i(c){return c===null?s(c):P(c)?e.attempt(Zu,i,s)(c):(e.enter("codeFlowValue"),a(c))}function a(c){return c===null||P(c)?(e.exit("codeFlowValue"),i(c)):(e.consume(c),a)}function s(c){return e.exit("codeIndented"),t(c)}}function Hu(e,t,n){let r=this;return o;function o(i){return r.parser.lazy[r.now().line]?n(i):P(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),o):U(e,l,"linePrefix",5)(i)}function l(i){let a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):P(i)?o(i):n(i)}}const Uu={name:"codeText",previous:Qu,resolve:Wu,tokenize:Vu};function Wu(e){let t=e.length-4,n=3,r,o;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)o===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(o=r):(r===t||e[r][1].type==="lineEnding")&&(e[o][1].type="codeTextData",r!==o+2&&(e[o][1].end=e[r-1][1].end,e.splice(o+2,r-o-2),t-=r-o-2,r=o+2),o=void 0);return e}function Qu(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Vu(e,t,n){let r=0,o,l;return i;function i(f){return e.enter("codeText"),e.enter("codeTextSequence"),a(f)}function a(f){return f===96?(e.consume(f),r++,a):(e.exit("codeTextSequence"),s(f))}function s(f){return f===null?n(f):f===32?(e.enter("space"),e.consume(f),e.exit("space"),s):f===96?(l=e.enter("codeTextSequence"),o=0,d(f)):P(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),s):(e.enter("codeTextData"),c(f))}function c(f){return f===null||f===32||f===96||P(f)?(e.exit("codeTextData"),s(f)):(e.consume(f),c)}function d(f){return f===96?(e.consume(f),o++,d):o===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(f)):(l.type="codeTextData",c(f))}}var Yu=class{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){let r=n??1/0;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){let o=n||0;this.setCursor(Math.trunc(t));let l=this.right.splice(this.right.length-o,1/0);return r&&nn(this.left,r),l.reverse()}pop(){return this.setCursor(1/0),this.left.pop()}push(t){this.setCursor(1/0),this.left.push(t)}pushMany(t){this.setCursor(1/0),nn(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),nn(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){let n=this.left.splice(t,1/0);nn(this.right,n.reverse())}else{let n=this.right.splice(this.left.length+this.right.length-t,1/0);nn(this.left,n.reverse())}}};function nn(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function wa(e){let t={},n=-1,r,o,l,i,a,s,c,d=new Yu(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,l=0,l<s.length&&s[l][1].type==="lineEndingBlank"&&(l+=2),l<s.length&&s[l][1].type==="content"))for(;++l<s.length&&s[l][1].type!=="content";)s[l][1].type==="chunkText"&&(s[l][1]._isInFirstContentOfListItem=!0,l++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Ju(d,n)),n=t[n],c=!0);else if(r[1]._container){for(l=n,o=void 0;l--;)if(i=d.get(l),i[1].type==="lineEnding"||i[1].type==="lineEndingBlank")i[0]==="enter"&&(o&&(d.get(o)[1].type="lineEndingBlank"),i[1].type="lineEnding",o=l);else if(!(i[1].type==="linePrefix"||i[1].type==="listItemIndent"))break;o&&(r[1].end={...d.get(o)[1].start},a=d.slice(o,n),a.unshift(r),d.splice(o,n-o+1,a))}}return Ae(e,0,1/0,d.slice(0)),!c}function Ju(e,t){let n=e.get(t)[1],r=e.get(t)[2],o=t-1,l=[],i=n._tokenizer;i||(i=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(i._contentTypeTextTrailing=!0));let a=i.events,s=[],c={},d,f,u=-1,h=n,p=0,T=0,b=[T];for(;h;){for(;e.get(++o)[1]!==h;);l.push(o),h._tokenizer||(d=r.sliceStream(h),h.next||d.push(null),f&&i.defineSkip(h.start),h._isInFirstContentOfListItem&&(i._gfmTasklistFirstContentOfListItem=!0),i.write(d),h._isInFirstContentOfListItem&&(i._gfmTasklistFirstContentOfListItem=void 0)),f=h,h=h.next}for(h=n;++u<a.length;)a[u][0]==="exit"&&a[u-1][0]==="enter"&&a[u][1].type===a[u-1][1].type&&a[u][1].start.line!==a[u][1].end.line&&(T=u+1,b.push(T),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(i.events=[],h?(h._tokenizer=void 0,h.previous=void 0):b.pop(),u=b.length;u--;){let y=a.slice(b[u],b[u+1]),F=l.pop();s.push([F,F+y.length-1]),e.splice(F,2,y)}for(s.reverse(),u=-1;++u<s.length;)c[p+s[u][0]]=p+s[u][1],p+=s[u][1]-s[u][0]-1;return c}const _u={resolve:t1,tokenize:n1},e1={partial:!0,tokenize:r1};function t1(e){return wa(e),e}function n1(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),o(a)}function o(a){return a===null?l(a):P(a)?e.check(e1,i,l)(a):(e.consume(a),o)}function l(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function i(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,o}}function r1(e,t,n){let r=this;return o;function o(i){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),U(e,l,"linePrefix")}function l(i){if(i===null||P(i))return n(i);let a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}function va(e,t,n,r,o,l,i,a,s){let c=s||1/0,d=0;return f;function f(y){return y===60?(e.enter(r),e.enter(o),e.enter(l),e.consume(y),e.exit(l),u):y===null||y===32||y===41||tr(y)?n(y):(e.enter(r),e.enter(i),e.enter(a),e.enter("chunkString",{contentType:"string"}),T(y))}function u(y){return y===62?(e.enter(l),e.consume(y),e.exit(l),e.exit(o),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),h(y))}function h(y){return y===62?(e.exit("chunkString"),e.exit(a),u(y)):y===null||y===60||P(y)?n(y):(e.consume(y),y===92?p:h)}function p(y){return y===60||y===62||y===92?(e.consume(y),h):h(y)}function T(y){return!d&&(y===null||y===41||V(y))?(e.exit("chunkString"),e.exit(a),e.exit(i),e.exit(r),t(y)):d<c&&y===40?(e.consume(y),d++,T):y===41?(e.consume(y),d--,T):y===null||y===32||y===40||tr(y)?n(y):(e.consume(y),y===92?b:T)}function b(y){return y===40||y===41||y===92?(e.consume(y),T):T(y)}}function Ba(e,t,n,r,o,l){let i=this,a=0,s;return c;function c(h){return e.enter(r),e.enter(o),e.consume(h),e.exit(o),e.enter(l),d}function d(h){return a>999||h===null||h===91||h===93&&!s||h===94&&!a&&"_hiddenFootnoteSupport"in i.parser.constructs?n(h):h===93?(e.exit(l),e.enter(o),e.consume(h),e.exit(o),e.exit(r),t):P(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),f(h))}function f(h){return h===null||h===91||h===93||P(h)||a++>999?(e.exit("chunkString"),d(h)):(e.consume(h),s||=!$(h),h===92?u:f)}function u(h){return h===91||h===92||h===93?(e.consume(h),a++,f):f(h)}}function Ea(e,t,n,r,o,l){let i;return a;function a(u){return u===34||u===39||u===40?(e.enter(r),e.enter(o),e.consume(u),e.exit(o),i=u===40?41:u,s):n(u)}function s(u){return u===i?(e.enter(o),e.consume(u),e.exit(o),e.exit(r),t):(e.enter(l),c(u))}function c(u){return u===i?(e.exit(l),s(i)):u===null?n(u):P(u)?(e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),U(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(u))}function d(u){return u===i||u===null||P(u)?(e.exit("chunkString"),c(u)):(e.consume(u),u===92?f:d)}function f(u){return u===i||u===92?(e.consume(u),d):d(u)}}function fn(e,t){let n;return r;function r(o){return P(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),n=!0,r):$(o)?U(e,r,n?"linePrefix":"lineSuffix")(o):t(o)}}const o1={name:"definition",tokenize:l1},i1={partial:!0,tokenize:a1};function l1(e,t,n){let r=this,o;return l;function l(h){return e.enter("definition"),i(h)}function i(h){return Ba.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function a(h){return o=Pe(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),s):n(h)}function s(h){return V(h)?fn(e,c)(h):c(h)}function c(h){return va(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function d(h){return e.attempt(i1,f,f)(h)}function f(h){return $(h)?U(e,u,"whitespace")(h):u(h)}function u(h){return h===null||P(h)?(e.exit("definition"),r.parser.defined.push(o),t(h)):n(h)}}function a1(e,t,n){return r;function r(a){return V(a)?fn(e,o)(a):n(a)}function o(a){return Ea(e,l,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function l(a){return $(a)?U(e,i,"whitespace")(a):i(a)}function i(a){return a===null||P(a)?t(a):n(a)}}const s1={name:"hardBreakEscape",tokenize:c1};function c1(e,t,n){return r;function r(l){return e.enter("hardBreakEscape"),e.consume(l),o}function o(l){return P(l)?(e.exit("hardBreakEscape"),t(l)):n(l)}}const d1={name:"headingAtx",resolve:f1,tokenize:u1};function f1(e,t){let n=e.length-2,r=3,o,l;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(o={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},l={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Ae(e,r,n-r+1,[["enter",o,t],["enter",l,t],["exit",l,t],["exit",o,t]])),e}function u1(e,t,n){let r=0;return o;function o(d){return e.enter("atxHeading"),l(d)}function l(d){return e.enter("atxHeadingSequence"),i(d)}function i(d){return d===35&&r++<6?(e.consume(d),i):d===null||V(d)?(e.exit("atxHeadingSequence"),a(d)):n(d)}function a(d){return d===35?(e.enter("atxHeadingSequence"),s(d)):d===null||P(d)?(e.exit("atxHeading"),t(d)):$(d)?U(e,a,"whitespace")(d):(e.enter("atxHeadingText"),c(d))}function s(d){return d===35?(e.consume(d),s):(e.exit("atxHeadingSequence"),a(d))}function c(d){return d===null||d===35||V(d)?(e.exit("atxHeadingText"),a(d)):(e.consume(d),c)}}const h1="address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."),zi=["pre","script","style","textarea"],p1={concrete:!0,name:"htmlFlow",resolveTo:y1,tokenize:x1},m1={partial:!0,tokenize:T1},g1={partial:!0,tokenize:b1};function y1(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function x1(e,t,n){let r=this,o,l,i,a,s;return c;function c(g){return d(g)}function d(g){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(g),f}function f(g){return g===33?(e.consume(g),u):g===47?(e.consume(g),l=!0,T):g===63?(e.consume(g),o=3,r.interrupt?t:m):ye(g)?(e.consume(g),i=String.fromCharCode(g),b):n(g)}function u(g){return g===45?(e.consume(g),o=2,h):g===91?(e.consume(g),o=5,a=0,p):ye(g)?(e.consume(g),o=4,r.interrupt?t:m):n(g)}function h(g){return g===45?(e.consume(g),r.interrupt?t:m):n(g)}function p(g){return g==="CDATA[".charCodeAt(a++)?(e.consume(g),a===6?r.interrupt?t:N:p):n(g)}function T(g){return ye(g)?(e.consume(g),i=String.fromCharCode(g),b):n(g)}function b(g){if(g===null||g===47||g===62||V(g)){let tt=g===47,ft=i.toLowerCase();return!tt&&!l&&zi.includes(ft)?(o=1,r.interrupt?t(g):N(g)):h1.includes(i.toLowerCase())?(o=6,tt?(e.consume(g),y):r.interrupt?t(g):N(g)):(o=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(g):l?F(g):B(g))}return g===45||he(g)?(e.consume(g),i+=String.fromCharCode(g),b):n(g)}function y(g){return g===62?(e.consume(g),r.interrupt?t:N):n(g)}function F(g){return $(g)?(e.consume(g),F):x(g)}function B(g){return g===47?(e.consume(g),x):g===58||g===95||ye(g)?(e.consume(g),O):$(g)?(e.consume(g),B):x(g)}function O(g){return g===45||g===46||g===58||g===95||he(g)?(e.consume(g),O):S(g)}function S(g){return g===61?(e.consume(g),v):$(g)?(e.consume(g),S):B(g)}function v(g){return g===null||g===60||g===61||g===62||g===96?n(g):g===34||g===39?(e.consume(g),s=g,L):$(g)?(e.consume(g),v):k(g)}function L(g){return g===s?(e.consume(g),s=null,R):g===null||P(g)?n(g):(e.consume(g),L)}function k(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||V(g)?S(g):(e.consume(g),k)}function R(g){return g===47||g===62||$(g)?B(g):n(g)}function x(g){return g===62?(e.consume(g),E):n(g)}function E(g){return g===null||P(g)?N(g):$(g)?(e.consume(g),E):n(g)}function N(g){return g===45&&o===2?(e.consume(g),ee):g===60&&o===1?(e.consume(g),te):g===62&&o===4?(e.consume(g),et):g===63&&o===3?(e.consume(g),m):g===93&&o===5?(e.consume(g),we):P(g)&&(o===6||o===7)?(e.exit("htmlFlowData"),e.check(m1,Ze,I)(g)):g===null||P(g)?(e.exit("htmlFlowData"),I(g)):(e.consume(g),N)}function I(g){return e.check(g1,j,Ze)(g)}function j(g){return e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),X}function X(g){return g===null||P(g)?I(g):(e.enter("htmlFlowData"),N(g))}function ee(g){return g===45?(e.consume(g),m):N(g)}function te(g){return g===47?(e.consume(g),i="",me):N(g)}function me(g){if(g===62){let tt=i.toLowerCase();return zi.includes(tt)?(e.consume(g),et):N(g)}return ye(g)&&i.length<8?(e.consume(g),i+=String.fromCharCode(g),me):N(g)}function we(g){return g===93?(e.consume(g),m):N(g)}function m(g){return g===62?(e.consume(g),et):g===45&&o===2?(e.consume(g),m):N(g)}function et(g){return g===null||P(g)?(e.exit("htmlFlowData"),Ze(g)):(e.consume(g),et)}function Ze(g){return e.exit("htmlFlow"),t(g)}}function b1(e,t,n){let r=this;return o;function o(i){return P(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),l):n(i)}function l(i){return r.parser.lazy[r.now().line]?n(i):t(i)}}function T1(e,t,n){return r;function r(o){return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),e.attempt(En,t,n)}}const k1={name:"htmlText",tokenize:w1};function w1(e,t,n){let r=this,o,l,i;return a;function a(m){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(m),s}function s(m){return m===33?(e.consume(m),c):m===47?(e.consume(m),S):m===63?(e.consume(m),B):ye(m)?(e.consume(m),k):n(m)}function c(m){return m===45?(e.consume(m),d):m===91?(e.consume(m),l=0,p):ye(m)?(e.consume(m),F):n(m)}function d(m){return m===45?(e.consume(m),h):n(m)}function f(m){return m===null?n(m):m===45?(e.consume(m),u):P(m)?(i=f,te(m)):(e.consume(m),f)}function u(m){return m===45?(e.consume(m),h):f(m)}function h(m){return m===62?ee(m):m===45?u(m):f(m)}function p(m){return m==="CDATA[".charCodeAt(l++)?(e.consume(m),l===6?T:p):n(m)}function T(m){return m===null?n(m):m===93?(e.consume(m),b):P(m)?(i=T,te(m)):(e.consume(m),T)}function b(m){return m===93?(e.consume(m),y):T(m)}function y(m){return m===62?ee(m):m===93?(e.consume(m),y):T(m)}function F(m){return m===null||m===62?ee(m):P(m)?(i=F,te(m)):(e.consume(m),F)}function B(m){return m===null?n(m):m===63?(e.consume(m),O):P(m)?(i=B,te(m)):(e.consume(m),B)}function O(m){return m===62?ee(m):B(m)}function S(m){return ye(m)?(e.consume(m),v):n(m)}function v(m){return m===45||he(m)?(e.consume(m),v):L(m)}function L(m){return P(m)?(i=L,te(m)):$(m)?(e.consume(m),L):ee(m)}function k(m){return m===45||he(m)?(e.consume(m),k):m===47||m===62||V(m)?R(m):n(m)}function R(m){return m===47?(e.consume(m),ee):m===58||m===95||ye(m)?(e.consume(m),x):P(m)?(i=R,te(m)):$(m)?(e.consume(m),R):ee(m)}function x(m){return m===45||m===46||m===58||m===95||he(m)?(e.consume(m),x):E(m)}function E(m){return m===61?(e.consume(m),N):P(m)?(i=E,te(m)):$(m)?(e.consume(m),E):R(m)}function N(m){return m===null||m===60||m===61||m===62||m===96?n(m):m===34||m===39?(e.consume(m),o=m,I):P(m)?(i=N,te(m)):$(m)?(e.consume(m),N):(e.consume(m),j)}function I(m){return m===o?(e.consume(m),o=void 0,X):m===null?n(m):P(m)?(i=I,te(m)):(e.consume(m),I)}function j(m){return m===null||m===34||m===39||m===60||m===61||m===96?n(m):m===47||m===62||V(m)?R(m):(e.consume(m),j)}function X(m){return m===47||m===62||V(m)?R(m):n(m)}function ee(m){return m===62?(e.consume(m),e.exit("htmlTextData"),e.exit("htmlText"),t):n(m)}function te(m){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),me}function me(m){return $(m)?U(e,we,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(m):we(m)}function we(m){return e.enter("htmlTextData"),i(m)}}const qo={name:"labelEnd",resolveAll:A1,resolveTo:D1,tokenize:F1},v1={tokenize:N1},B1={tokenize:C1},E1={tokenize:R1};function A1(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){let o=r.type==="labelImage"?4:2;r.type="data",t+=o}}return e.length!==n.length&&Ae(e,0,e.length,n),e}function D1(e,t){let n=e.length,r=0,o,l,i,a;for(;n--;)if(o=e[n][1],l){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;e[n][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(i){if(e[n][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(l=n,o.type!=="labelLink")){r=2;break}}else o.type==="labelEnd"&&(i=n);let s={type:e[l][1].type==="labelLink"?"link":"image",start:{...e[l][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[l][1].start},end:{...e[i][1].end}},d={type:"labelText",start:{...e[l+r+2][1].end},end:{...e[i-2][1].start}};return a=[["enter",s,t],["enter",c,t]],a=De(a,e.slice(l+1,l+r+3)),a=De(a,[["enter",d,t]]),a=De(a,pr(t.parser.constructs.insideSpan.null,e.slice(l+r+4,i-3),t)),a=De(a,[["exit",d,t],e[i-2],e[i-1],["exit",c,t]]),a=De(a,e.slice(i+1)),a=De(a,[["exit",s,t]]),Ae(e,l,e.length,a),e}function F1(e,t,n){let r=this,o=r.events.length,l,i;for(;o--;)if((r.events[o][1].type==="labelImage"||r.events[o][1].type==="labelLink")&&!r.events[o][1]._balanced){l=r.events[o][1];break}return a;function a(u){return l?l._inactive?f(u):(i=r.parser.defined.includes(Pe(r.sliceSerialize({start:l.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(u),e.exit("labelMarker"),e.exit("labelEnd"),s):n(u)}function s(u){return u===40?e.attempt(v1,d,i?d:f)(u):u===91?e.attempt(B1,d,i?c:f)(u):i?d(u):f(u)}function c(u){return e.attempt(E1,d,f)(u)}function d(u){return t(u)}function f(u){return l._balanced=!0,n(u)}}function N1(e,t,n){return r;function r(f){return e.enter("resource"),e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),o}function o(f){return V(f)?fn(e,l)(f):l(f)}function l(f){return f===41?d(f):va(e,i,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function i(f){return V(f)?fn(e,s)(f):d(f)}function a(f){return n(f)}function s(f){return f===34||f===39||f===40?Ea(e,c,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):d(f)}function c(f){return V(f)?fn(e,d)(f):d(f)}function d(f){return f===41?(e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),e.exit("resource"),t):n(f)}}function C1(e,t,n){let r=this;return o;function o(a){return Ba.call(r,e,l,i,"reference","referenceMarker","referenceString")(a)}function l(a){return r.parser.defined.includes(Pe(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function i(a){return n(a)}}function R1(e,t,n){return r;function r(l){return e.enter("reference"),e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),o}function o(l){return l===93?(e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),e.exit("reference"),t):n(l)}}const O1={name:"labelStartImage",resolveAll:qo.resolveAll,tokenize:L1};function L1(e,t,n){let r=this;return o;function o(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),l}function l(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),i):n(a)}function i(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const I1={name:"labelStartLink",resolveAll:qo.resolveAll,tokenize:S1};function S1(e,t,n){let r=this;return o;function o(i){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(i),e.exit("labelMarker"),e.exit("labelLink"),l}function l(i){return i===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(i):t(i)}}const Rr={name:"lineEnding",tokenize:P1};function P1(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),U(e,t,"linePrefix")}}const Kn={name:"thematicBreak",tokenize:z1};function z1(e,t,n){let r=0,o;return l;function l(c){return e.enter("thematicBreak"),i(c)}function i(c){return o=c,a(c)}function a(c){return c===o?(e.enter("thematicBreakSequence"),s(c)):r>=3&&(c===null||P(c))?(e.exit("thematicBreak"),t(c)):n(c)}function s(c){return c===o?(e.consume(c),r++,s):(e.exit("thematicBreakSequence"),$(c)?U(e,a,"whitespace")(c):a(c))}}const xe={continuation:{tokenize:K1},exit:j1,name:"list",tokenize:q1},M1={partial:!0,tokenize:Z1},G1={partial:!0,tokenize:X1};function q1(e,t,n){let r=this,o=r.events[r.events.length-1],l=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,i=0;return a;function a(h){let p=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(p==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:fo(h)){if(r.containerState.type||(r.containerState.type=p,e.enter(p,{_container:!0})),p==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(Kn,n,c)(h):c(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(h)}return n(h)}function s(h){return fo(h)&&++i<10?(e.consume(h),s):(!r.interrupt||i<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),c(h)):n(h)}function c(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(En,r.interrupt?n:d,e.attempt(M1,u,f))}function d(h){return r.containerState.initialBlankLine=!0,l++,u(h)}function f(h){return $(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),u):n(h)}function u(h){return r.containerState.size=l+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function K1(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(En,o,l);function o(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,U(e,t,"listItemIndent",r.containerState.size+1)(a)}function l(a){return r.containerState.furtherBlankLines||!$(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,i(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(G1,t,i)(a))}function i(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,U(e,e.attempt(xe,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function X1(e,t,n){let r=this;return U(e,o,"listItemIndent",r.containerState.size+1);function o(l){let i=r.events[r.events.length-1];return i&&i[1].type==="listItemIndent"&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(l):n(l)}}function j1(e){e.exit(this.containerState.type)}function Z1(e,t,n){let r=this;return U(e,o,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function o(l){let i=r.events[r.events.length-1];return!$(l)&&i&&i[1].type==="listItemPrefixWhitespace"?t(l):n(l)}}const Mi={name:"setextUnderline",resolveTo:$1,tokenize:H1};function $1(e,t){let n=e.length,r,o,l;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(o=n)}else e[n][1].type==="content"&&e.splice(n,1),!l&&e[n][1].type==="definition"&&(l=n);let i={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[o][1].type="setextHeadingText",l?(e.splice(o,0,["enter",i,t]),e.splice(l+1,0,["exit",e[r][1],t]),e[r][1].end={...e[l][1].end}):e[r][1]=i,e.push(["exit",i,t]),e}function H1(e,t,n){let r=this,o;return l;function l(c){let d=r.events.length,f;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){f=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||f)?(e.enter("setextHeadingLine"),o=c,i(c)):n(c)}function i(c){return e.enter("setextHeadingLineSequence"),a(c)}function a(c){return c===o?(e.consume(c),a):(e.exit("setextHeadingLineSequence"),$(c)?U(e,s,"lineSuffix")(c):s(c))}function s(c){return c===null||P(c)?(e.exit("setextHeadingLine"),t(c)):n(c)}}const U1={tokenize:W1};function W1(e){let t=e.attempt(this.parser.constructs.contentInitial,r,o),n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),U(e,t,"linePrefix")}function o(a){return e.enter("paragraph"),l(a)}function l(a){let s=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,i(a)}function i(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return P(a)?(e.consume(a),e.exit("chunkText"),l):(e.consume(a),i)}}const Q1={tokenize:V1},Gi={tokenize:Y1};function V1(e){let t=this,n=[],r=0,o,l,i;return a;function a(B){if(r<n.length){let O=n[r];return t.containerState=O[1],e.attempt(O[0].continuation,s,c)(B)}return c(B)}function s(B){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,o&&F();let O=t.events.length,S=O,v;for(;S--;)if(t.events[S][0]==="exit"&&t.events[S][1].type==="chunkFlow"){v=t.events[S][1].end;break}y(r);let L=O;for(;L<t.events.length;)t.events[L][1].end={...v},L++;return Ae(t.events,S+1,0,t.events.slice(O)),t.events.length=L,c(B)}return a(B)}function c(B){if(r===n.length){if(!o)return u(B);if(o.currentConstruct&&o.currentConstruct.concrete)return p(B);t.interrupt=!!(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Gi,d,f)(B)}function d(B){return o&&F(),y(r),u(B)}function f(B){return t.parser.lazy[t.now().line]=r!==n.length,i=t.now().offset,p(B)}function u(B){return t.containerState={},e.attempt(Gi,h,p)(B)}function h(B){return r++,n.push([t.currentConstruct,t.containerState]),u(B)}function p(B){if(B===null){o&&F(),y(0),e.consume(B);return}return o||=t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:o,contentType:"flow",previous:l}),T(B)}function T(B){if(B===null){b(e.exit("chunkFlow"),!0),y(0),e.consume(B);return}return P(B)?(e.consume(B),b(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(B),T)}function b(B,O){let S=t.sliceStream(B);if(O&&S.push(null),B.previous=l,l&&(l.next=B),l=B,o.defineSkip(B.start),o.write(S),t.parser.lazy[B.start.line]){let v=o.events.length;for(;v--;)if(o.events[v][1].start.offset<i&&(!o.events[v][1].end||o.events[v][1].end.offset>i))return;let L=t.events.length,k=L,R,x;for(;k--;)if(t.events[k][0]==="exit"&&t.events[k][1].type==="chunkFlow"){if(R){x=t.events[k][1].end;break}R=!0}for(y(r),v=L;v<t.events.length;)t.events[v][1].end={...x},v++;Ae(t.events,k+1,0,t.events.slice(L)),t.events.length=v}}function y(B){let O=n.length;for(;O-- >B;){let S=n[O];t.containerState=S[1],S[0].exit.call(t,e)}n.length=B}function F(){o.write([null]),l=void 0,o=void 0,t.containerState._closeFlow=void 0}}function Y1(e,t,n){return U(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}const J1={tokenize:_1};function _1(e){let t=this,n=e.attempt(En,r,e.attempt(this.parser.constructs.flowInitial,o,U(e,e.attempt(this.parser.constructs.flow,o,e.attempt(_u,o)),"linePrefix")));return n;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEndingBlank"),e.consume(l),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function o(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const eh={resolveAll:Da()},th=Aa("string"),nh=Aa("text");function Aa(e){return{resolveAll:Da(e==="text"?rh:void 0),tokenize:t};function t(n){let r=this,o=this.parser.constructs[e],l=n.attempt(o,i,a);return i;function i(d){return c(d)?l(d):a(d)}function a(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),s}function s(d){return c(d)?(n.exit("data"),l(d)):(n.consume(d),s)}function c(d){if(d===null)return!0;let f=o[d],u=-1;if(f)for(;++u<f.length;){let h=f[u];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function Da(e){return t;function t(n,r){let o=-1,l;for(;++o<=n.length;)l===void 0?n[o]&&n[o][1].type==="data"&&(l=o,o++):(!n[o]||n[o][1].type!=="data")&&(o!==l+2&&(n[l][1].end=n[o-1][1].end,n.splice(l+2,o-l-2),o=l+2),l=void 0);return e?e(n,r):n}}function rh(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){let r=e[n-1][1],o=t.sliceStream(r),l=o.length,i=-1,a=0,s;for(;l--;){let c=o[l];if(typeof c=="string"){for(i=c.length;c.charCodeAt(i-1)===32;)a++,i--;if(i)break;i=-1}else if(c===-2)s=!0,a++;else if(c!==-1){l++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){let c={type:n===e.length||s||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:l?i:r.start._bufferIndex+i,_index:r.start._index+l,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...c.start},r.start.offset===r.end.offset?Object.assign(r,c):(e.splice(n,0,["enter",c,t],["exit",c,t]),n+=2)}n++}return e}var oh=vn({attentionMarkers:()=>uh,contentInitial:()=>lh,disable:()=>hh,document:()=>ih,flow:()=>sh,flowInitial:()=>ah,insideSpan:()=>fh,string:()=>ch,text:()=>dh});const ih={42:xe,43:xe,45:xe,48:xe,49:xe,50:xe,51:xe,52:xe,53:xe,54:xe,55:xe,56:xe,57:xe,62:ba},lh={91:o1},ah={[-2]:Cr,[-1]:Cr,32:Cr},sh={35:d1,42:Kn,45:[Mi,Kn],60:p1,61:Mi,95:Kn,96:Pi,126:Pi},ch={38:ka,92:Ta},dh={[-5]:Rr,[-4]:Rr,[-3]:Rr,33:O1,38:ka,42:uo,60:[Iu,k1],91:I1,92:[s1,Ta],93:qo,95:uo,96:Uu},fh={null:[uo,eh]},uh={null:[42,95]},hh={null:[]};function ph(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},o={},l=[],i=[],a=[],s={attempt:L(S),check:L(v),consume:F,enter:B,exit:O,interrupt:L(v,{interrupt:!0})},c={code:null,containerState:{},defineSkip:T,events:[],now:p,parser:e,previous:null,sliceSerialize:u,sliceStream:h,write:f},d=t.tokenize.call(c,s);return t.resolveAll&&l.push(t),c;function f(E){return i=De(i,E),b(),i[i.length-1]===null?(k(t,0),c.events=pr(l,c.events,c),c.events):[]}function u(E,N){return gh(h(E),N)}function h(E){return mh(i,E)}function p(){let{_bufferIndex:E,_index:N,line:I,column:j,offset:X}=r;return{_bufferIndex:E,_index:N,line:I,column:j,offset:X}}function T(E){o[E.line]=E.column,x()}function b(){let E;for(;r._index<i.length;){let N=i[r._index];if(typeof N=="string")for(E=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===E&&r._bufferIndex<N.length;)y(N.charCodeAt(r._bufferIndex));else y(N)}}function y(E){d=d(E)}function F(E){P(E)?(r.line++,r.column=1,r.offset+=E===-3?2:1,x()):E!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===i[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=E}function B(E,N){let I=N||{};return I.type=E,I.start=p(),c.events.push(["enter",I,c]),a.push(I),I}function O(E){let N=a.pop();return N.end=p(),c.events.push(["exit",N,c]),N}function S(E,N){k(E,N.from)}function v(E,N){N.restore()}function L(E,N){return I;function I(j,X,ee){let te,me,we,m;return Array.isArray(j)?Ze(j):"tokenize"in j?Ze([j]):et(j);function et(fe){return Jt;function Jt(nt){let At=nt!==null&&fe[nt],Dt=nt!==null&&fe.null;return Ze([...Array.isArray(At)?At:At?[At]:[],...Array.isArray(Dt)?Dt:Dt?[Dt]:[]])(nt)}}function Ze(fe){return te=fe,me=0,fe.length===0?ee:g(fe[me])}function g(fe){return Jt;function Jt(nt){return m=R(),we=fe,fe.partial||(c.currentConstruct=fe),fe.name&&c.parser.constructs.disable.null.includes(fe.name)?ft():fe.tokenize.call(N?Object.assign(Object.create(c),N):c,s,tt,ft)(nt)}}function tt(fe){return E(we,m),X}function ft(fe){return m.restore(),++me<te.length?g(te[me]):ee}}}function k(E,N){E.resolveAll&&!l.includes(E)&&l.push(E),E.resolve&&Ae(c.events,N,c.events.length-N,E.resolve(c.events.slice(N),c)),E.resolveTo&&(c.events=E.resolveTo(c.events,c))}function R(){let E=p(),N=c.previous,I=c.currentConstruct,j=c.events.length,X=Array.from(a);return{from:j,restore:ee};function ee(){r=E,c.previous=N,c.currentConstruct=I,c.events.length=j,a=X,x()}}function x(){r.line in o&&r.column<2&&(r.column=o[r.line],r.offset+=o[r.line]-1)}}function mh(e,t){let n=t.start._index,r=t.start._bufferIndex,o=t.end._index,l=t.end._bufferIndex,i;if(n===o)i=[e[n].slice(r,l)];else{if(i=e.slice(n,o),r>-1){let a=i[0];typeof a=="string"?i[0]=a.slice(r):i.shift()}l>0&&i.push(e[o].slice(0,l))}return i}function gh(e,t){let n=-1,r=[],o;for(;++n<e.length;){let l=e[n],i;if(typeof l=="string")i=l;else switch(l){case-5:i="\r";break;case-4:i=`
`;break;case-3:i=`\r
`;break;case-2:i=t?" ":"	";break;case-1:if(!t&&o)continue;i=" ";break;default:i=String.fromCharCode(l)}o=l===-2,r.push(i)}return r.join("")}function yh(e){let t={constructs:xa([oh,...(e||{}).extensions||[]]),content:n(U1),defined:[],document:n(Q1),flow:n(J1),lazy:{},string:n(th),text:n(nh)};return t;function n(r){return o;function o(l){return ph(t,r,l)}}}function xh(e){for(;!wa(e););return e}const qi=/[\0\t\n\r]/g;function bh(){let e=1,t="",n=!0,r;return o;function o(l,i,a){let s=[],c,d,f,u,h;for(l=t+(typeof l=="string"?l.toString():new TextDecoder(i||void 0).decode(l)),f=0,t="",n&&=(l.charCodeAt(0)===65279&&f++,void 0);f<l.length;){if(qi.lastIndex=f,c=qi.exec(l),u=c&&c.index!==void 0?c.index:l.length,h=l.charCodeAt(u),!c){t=l.slice(f);break}if(h===10&&f===u&&r)s.push(-3),r=void 0;else switch(r&&=(s.push(-5),void 0),f<u&&(s.push(l.slice(f,u)),e+=u-f),h){case 0:s.push(65533),e++;break;case 9:for(d=Math.ceil(e/4)*4,s.push(-2);e++<d;)s.push(-1);break;case 10:s.push(-4),e=1;break;default:r=!0,e=1}f=u+1}return a&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}function un(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Ki(e.position):"start"in e||"end"in e?Ki(e):"line"in e||"column"in e?ho(e):""}function ho(e){return Xi(e&&e.line)+":"+Xi(e&&e.column)}function Ki(e){return ho(e&&e.start)+"-"+ho(e&&e.end)}function Xi(e){return e&&typeof e=="number"?e:1}const Fa={}.hasOwnProperty;function Na(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),Th(n)(xh(yh(n).document().write(bh()(e,t,!0))))}function Th(e){let t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:l(si),autolinkProtocol:R,autolinkEmail:R,atxHeading:l(ii),blockQuote:l(Dt),characterEscape:R,characterReference:R,codeFenced:l(oi),codeFencedFenceInfo:i,codeFencedFenceMeta:i,codeIndented:l(oi,i),codeText:l(ec,i),codeTextData:R,data:R,codeFlowValue:R,definition:l(tc),definitionDestinationString:i,definitionLabelString:i,definitionTitleString:i,emphasis:l(nc),hardBreakEscape:l(li),hardBreakTrailing:l(li),htmlFlow:l(ai,i),htmlFlowData:R,htmlText:l(ai,i),htmlTextData:R,image:l(rc),label:i,link:l(si),listItem:l(oc),listItemValue:u,listOrdered:l(ci,f),listUnordered:l(ci),paragraph:l(ic),reference:g,referenceString:i,resourceDestinationString:i,resourceTitleString:i,setextHeading:l(ii),strong:l(lc),thematicBreak:l(sc)},exit:{atxHeading:s(),atxHeadingSequence:S,autolink:s(),autolinkEmail:At,autolinkProtocol:nt,blockQuote:s(),characterEscapeValue:x,characterReferenceMarkerHexadecimal:ft,characterReferenceMarkerNumeric:ft,characterReferenceValue:fe,characterReference:Jt,codeFenced:s(b),codeFencedFence:T,codeFencedFenceInfo:h,codeFencedFenceMeta:p,codeFlowValue:x,codeIndented:s(y),codeText:s(X),codeTextData:x,data:x,definition:s(),definitionDestinationString:O,definitionLabelString:F,definitionTitleString:B,emphasis:s(),hardBreakEscape:s(N),hardBreakTrailing:s(N),htmlFlow:s(I),htmlFlowData:x,htmlText:s(j),htmlTextData:x,image:s(te),label:we,labelText:me,lineEnding:E,link:s(ee),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:tt,resourceDestinationString:m,resourceTitleString:et,resource:Ze,setextHeading:s(k),setextHeadingLineSequence:L,setextHeadingText:v,strong:s(),thematicBreak:s()}};Ca(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(w){let C={type:"root",children:[]},M={stack:[C],tokenStack:[],config:t,enter:a,exit:c,buffer:i,resume:d,data:n},J=[],_=-1;for(;++_<w.length;)(w[_][1].type==="listOrdered"||w[_][1].type==="listUnordered")&&(w[_][0]==="enter"?J.push(_):_=o(w,J.pop(),_));for(_=-1;++_<w.length;){let rt=t[w[_][0]];Fa.call(rt,w[_][1].type)&&rt[w[_][1].type].call(Object.assign({sliceSerialize:w[_][2].sliceSerialize},M),w[_][1])}if(M.tokenStack.length>0){let rt=M.tokenStack[M.tokenStack.length-1];(rt[1]||ji).call(M,void 0,rt[0])}for(C.position={start:it(w.length>0?w[0][1].start:{line:1,column:1,offset:0}),end:it(w.length>0?w[w.length-2][1].end:{line:1,column:1,offset:0})},_=-1;++_<t.transforms.length;)C=t.transforms[_](C)||C;return C}function o(w,C,M){let J=C-1,_=-1,rt=!1,Ft,$e,_t,en;for(;++J<=M;){let ve=w[J];switch(ve[1].type){case"listUnordered":case"listOrdered":case"blockQuote":ve[0]==="enter"?_++:_--,en=void 0;break;case"lineEndingBlank":ve[0]==="enter"&&(Ft&&!en&&!_&&!_t&&(_t=J),en=void 0);break;case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:en=void 0}if(!_&&ve[0]==="enter"&&ve[1].type==="listItemPrefix"||_===-1&&ve[0]==="exit"&&(ve[1].type==="listUnordered"||ve[1].type==="listOrdered")){if(Ft){let Nt=J;for($e=void 0;Nt--;){let He=w[Nt];if(He[1].type==="lineEnding"||He[1].type==="lineEndingBlank"){if(He[0]==="exit")continue;$e&&(w[$e][1].type="lineEndingBlank",rt=!0),He[1].type="lineEnding",$e=Nt}else if(!(He[1].type==="linePrefix"||He[1].type==="blockQuotePrefix"||He[1].type==="blockQuotePrefixWhitespace"||He[1].type==="blockQuoteMarker"||He[1].type==="listItemIndent"))break}_t&&(!$e||_t<$e)&&(Ft._spread=!0),Ft.end=Object.assign({},$e?w[$e][1].start:ve[1].end),w.splice($e||J,0,["exit",Ft,ve[2]]),J++,M++}if(ve[1].type==="listItemPrefix"){let Nt={type:"listItem",_spread:!1,start:Object.assign({},ve[1].start),end:void 0};Ft=Nt,w.splice(J,0,["enter",Nt,ve[2]]),J++,M++,_t=void 0,en=!0}}}return w[C][1]._spread=rt,M}function l(w,C){return M;function M(J){a.call(this,w(J),J),C&&C.call(this,J)}}function i(){this.stack.push({type:"fragment",children:[]})}function a(w,C,M){this.stack[this.stack.length-1].children.push(w),this.stack.push(w),this.tokenStack.push([C,M||void 0]),w.position={start:it(C.start),end:void 0}}function s(w){return C;function C(M){w&&w.call(this,M),c.call(this,M)}}function c(w,C){let M=this.stack.pop(),J=this.tokenStack.pop();if(J)J[0].type!==w.type&&(C?C.call(this,w,J[0]):(J[1]||ji).call(this,w,J[0]));else throw Error("Cannot close `"+w.type+"` ("+un({start:w.start,end:w.end})+"): it’s not open");M.position.end=it(w.end)}function d(){return hr(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=!0}function u(w){if(this.data.expectingFirstListItemValue){let C=this.stack[this.stack.length-2];C.start=Number.parseInt(this.sliceSerialize(w),10),this.data.expectingFirstListItemValue=void 0}}function h(){let w=this.resume(),C=this.stack[this.stack.length-1];C.lang=w}function p(){let w=this.resume(),C=this.stack[this.stack.length-1];C.meta=w}function T(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function b(){let w=this.resume(),C=this.stack[this.stack.length-1];C.value=w.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function y(){let w=this.resume(),C=this.stack[this.stack.length-1];C.value=w.replace(/(\r?\n|\r)$/g,"")}function F(w){let C=this.resume(),M=this.stack[this.stack.length-1];M.label=C,M.identifier=Pe(this.sliceSerialize(w)).toLowerCase()}function B(){let w=this.resume(),C=this.stack[this.stack.length-1];C.title=w}function O(){let w=this.resume(),C=this.stack[this.stack.length-1];C.url=w}function S(w){let C=this.stack[this.stack.length-1];C.depth||=this.sliceSerialize(w).length}function v(){this.data.setextHeadingSlurpLineEnding=!0}function L(w){let C=this.stack[this.stack.length-1];C.depth=this.sliceSerialize(w).codePointAt(0)===61?1:2}function k(){this.data.setextHeadingSlurpLineEnding=void 0}function R(w){let C=this.stack[this.stack.length-1].children,M=C[C.length-1];(!M||M.type!=="text")&&(M=ac(),M.position={start:it(w.start),end:void 0},C.push(M)),this.stack.push(M)}function x(w){let C=this.stack.pop();C.value+=this.sliceSerialize(w),C.position.end=it(w.end)}function E(w){let C=this.stack[this.stack.length-1];if(this.data.atHardBreak){let M=C.children[C.children.length-1];M.position.end=it(w.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(C.type)&&(R.call(this,w),x.call(this,w))}function N(){this.data.atHardBreak=!0}function I(){let w=this.resume(),C=this.stack[this.stack.length-1];C.value=w}function j(){let w=this.resume(),C=this.stack[this.stack.length-1];C.value=w}function X(){let w=this.resume(),C=this.stack[this.stack.length-1];C.value=w}function ee(){let w=this.stack[this.stack.length-1];if(this.data.inReference){let C=this.data.referenceType||"shortcut";w.type+="Reference",w.referenceType=C,delete w.url,delete w.title}else delete w.identifier,delete w.label;this.data.referenceType=void 0}function te(){let w=this.stack[this.stack.length-1];if(this.data.inReference){let C=this.data.referenceType||"shortcut";w.type+="Reference",w.referenceType=C,delete w.url,delete w.title}else delete w.identifier,delete w.label;this.data.referenceType=void 0}function me(w){let C=this.sliceSerialize(w),M=this.stack[this.stack.length-2];M.label=Fu(C),M.identifier=Pe(C).toLowerCase()}function we(){let w=this.stack[this.stack.length-1],C=this.resume(),M=this.stack[this.stack.length-1];this.data.inReference=!0,M.type==="link"?M.children=w.children:M.alt=C}function m(){let w=this.resume(),C=this.stack[this.stack.length-1];C.url=w}function et(){let w=this.resume(),C=this.stack[this.stack.length-1];C.title=w}function Ze(){this.data.inReference=void 0}function g(){this.data.referenceType="collapsed"}function tt(w){let C=this.resume(),M=this.stack[this.stack.length-1];M.label=C,M.identifier=Pe(this.sliceSerialize(w)).toLowerCase(),this.data.referenceType="full"}function ft(w){this.data.characterReferenceType=w.type}function fe(w){let C=this.sliceSerialize(w),M=this.data.characterReferenceType,J;M?(J=ya(C,M==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):J=Go(C);let _=this.stack[this.stack.length-1];_.value+=J}function Jt(w){let C=this.stack.pop();C.position.end=it(w.end)}function nt(w){x.call(this,w);let C=this.stack[this.stack.length-1];C.url=this.sliceSerialize(w)}function At(w){x.call(this,w);let C=this.stack[this.stack.length-1];C.url="mailto:"+this.sliceSerialize(w)}function Dt(){return{type:"blockquote",children:[]}}function oi(){return{type:"code",lang:null,meta:null,value:""}}function ec(){return{type:"inlineCode",value:""}}function tc(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function nc(){return{type:"emphasis",children:[]}}function ii(){return{type:"heading",depth:0,children:[]}}function li(){return{type:"break"}}function ai(){return{type:"html",value:""}}function rc(){return{type:"image",title:null,url:"",alt:null}}function si(){return{type:"link",title:null,url:"",children:[]}}function ci(w){return{type:"list",ordered:w.type==="listOrdered",start:null,spread:w._spread,children:[]}}function oc(w){return{type:"listItem",spread:w._spread,checked:null,children:[]}}function ic(){return{type:"paragraph",children:[]}}function lc(){return{type:"strong",children:[]}}function ac(){return{type:"text",value:""}}function sc(){return{type:"thematicBreak"}}}function it(e){return{line:e.line,column:e.column,offset:e.offset}}function Ca(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?Ca(e,r):kh(e,r)}}function kh(e,t){let n;for(n in t)if(Fa.call(t,n))switch(n){case"canContainEols":{let r=t[n];r&&e[n].push(...r);break}case"transforms":{let r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{let r=t[n];r&&Object.assign(e[n],r);break}}}function ji(e,t){throw Error(e?"Cannot close `"+e.type+"` ("+un({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+un({start:t.start,end:t.end})+") is open":"Cannot close document, a token (`"+t.type+"`, "+un({start:t.start,end:t.end})+") is still open")}function wh(e){if(typeof e!="string")throw TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}const mr=(function(e){if(e==null)return Ah;if(typeof e=="function")return gr(e);if(typeof e=="object")return Array.isArray(e)?vh(e):Bh(e);if(typeof e=="string")return Eh(e);throw Error("Expected function, string, or object as test")});function vh(e){let t=[],n=-1;for(;++n<e.length;)t[n]=mr(e[n]);return gr(r);function r(...o){let l=-1;for(;++l<t.length;)if(t[l].apply(this,o))return!0;return!1}}function Bh(e){let t=e;return gr(n);function n(r){let o=r,l;for(l in e)if(o[l]!==t[l])return!1;return!0}}function Eh(e){return gr(t);function t(n){return n&&n.type===e}}function gr(e){return t;function t(n,r,o){return!!(Dh(n)&&e.call(this,n,typeof r=="number"?r:void 0,o||void 0))}}function Ah(){return!0}function Dh(e){return typeof e=="object"&&!!e&&"type"in e}const Ra=[],Fh=!1;function Oa(e,t,n,r){let o;typeof t=="function"&&typeof n!="function"?(r=n,n=t):o=t;let l=mr(o),i=r?-1:1;a(e,void 0,[])();function a(s,c,d){let f=s&&typeof s=="object"?s:{};if(typeof f.type=="string"){let h=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(u,"name",{value:"node ("+(s.type+(h?"<"+h+">":""))+")"})}return u;function u(){let h=Ra,p,T,b;if((!t||l(s,c,d[d.length-1]||void 0))&&(h=Nh(n(s,d)),h[0]===!1))return h;if("children"in s&&s.children){let y=s;if(y.children&&h[0]!=="skip")for(T=(r?y.children.length:-1)+i,b=d.concat(y);T>-1&&T<y.children.length;){let F=y.children[T];if(p=a(F,T,b)(),p[0]===!1)return p;T=typeof p[1]=="number"?p[1]:T+i}}return h}}}function Nh(e){return Array.isArray(e)?e:typeof e=="number"?[!0,e]:e==null?Ra:[e]}function Ch(e,t,n){let r=mr((n||{}).ignore||[]),o=Rh(t),l=-1;for(;++l<o.length;)Oa(e,"text",i);function i(s,c){let d=-1,f;for(;++d<c.length;){let u=c[d],h=f?f.children:void 0;if(r(u,h?h.indexOf(u):void 0,f))return;f=u}if(f)return a(s,c)}function a(s,c){let d=c[c.length-1],f=o[l][0],u=o[l][1],h=0,p=d.children.indexOf(s),T=!1,b=[];f.lastIndex=0;let y=f.exec(s.value);for(;y;){let F=y.index,B={index:y.index,input:y.input,stack:[...c,s]},O=u(...y,B);if(typeof O=="string"&&(O=O.length>0?{type:"text",value:O}:void 0),O===!1?f.lastIndex=F+1:(h!==F&&b.push({type:"text",value:s.value.slice(h,F)}),Array.isArray(O)?b.push(...O):O&&b.push(O),h=F+y[0].length,T=!0),!f.global)break;y=f.exec(s.value)}return T?(h<s.value.length&&b.push({type:"text",value:s.value.slice(h)}),d.children.splice(p,1,...b)):b=[s],p+b.length}}function Rh(e){let t=[];if(!Array.isArray(e))throw TypeError("Expected find and replace tuple or list of tuples");let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let o=n[r];t.push([Oh(o[0]),Lh(o[1])])}return t}function Oh(e){return typeof e=="string"?new RegExp(wh(e),"g"):e}function Lh(e){return typeof e=="function"?e:function(){return e}}function Ih(e){return e.length}function Sh(e,t){let n=t||{},r=(n.align||[]).concat(),o=n.stringLength||Ih,l=[],i=[],a=[],s=[],c=0,d=-1;for(;++d<e.length;){let T=[],b=[],y=-1;for(e[d].length>c&&(c=e[d].length);++y<e[d].length;){let F=Ph(e[d][y]);if(n.alignDelimiters!==!1){let B=o(F);b[y]=B,(s[y]===void 0||B>s[y])&&(s[y]=B)}T.push(F)}i[d]=T,a[d]=b}let f=-1;if(typeof r=="object"&&"length"in r)for(;++f<c;)l[f]=Zi(r[f]);else{let T=Zi(r);for(;++f<c;)l[f]=T}f=-1;let u=[],h=[];for(;++f<c;){let T=l[f],b="",y="";T===99?(b=":",y=":"):T===108?b=":":T===114&&(y=":");let F=n.alignDelimiters===!1?1:Math.max(1,s[f]-b.length-y.length),B=b+"-".repeat(F)+y;n.alignDelimiters!==!1&&(F=b.length+F+y.length,F>s[f]&&(s[f]=F),h[f]=F),u[f]=B}i.splice(1,0,u),a.splice(1,0,h),d=-1;let p=[];for(;++d<i.length;){let T=i[d],b=a[d];f=-1;let y=[];for(;++f<c;){let F=T[f]||"",B="",O="";if(n.alignDelimiters!==!1){let S=s[f]-(b[f]||0),v=l[f];v===114?B=" ".repeat(S):v===99?S%2?(B=" ".repeat(S/2+.5),O=" ".repeat(S/2-.5)):(B=" ".repeat(S/2),O=B):O=" ".repeat(S)}n.delimiterStart!==!1&&!f&&y.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&F==="")&&(n.delimiterStart!==!1||f)&&y.push(" "),n.alignDelimiters!==!1&&y.push(B),y.push(F),n.alignDelimiters!==!1&&y.push(O),n.padding!==!1&&y.push(" "),(n.delimiterEnd!==!1||f!==c-1)&&y.push("|")}p.push(n.delimiterEnd===!1?y.join("").replace(/ +$/,""):y.join(""))}return p.join(`
`)}function Ph(e){return e==null?"":String(e)}function Zi(e){let t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function zh(e,t){let n=String(e),r=n.indexOf(t),o=r,l=0,i=0;if(typeof t!="string")throw TypeError("Expected substring");for(;r!==-1;)r===o?++l>i&&(i=l):l=1,o=r+t.length,r=n.indexOf(t,o);return i}const Or="phrasing",Lr=["autolink","link","image","label"];function Mh(){return{transforms:[$h],enter:{literalAutolink:qh,literalAutolinkEmail:Ir,literalAutolinkHttp:Ir,literalAutolinkWww:Ir},exit:{literalAutolink:Zh,literalAutolinkEmail:jh,literalAutolinkHttp:Kh,literalAutolinkWww:Xh}}}function Gh(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Or,notInConstruct:Lr},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Or,notInConstruct:Lr},{character:":",before:"[ps]",after:"\\/",inConstruct:Or,notInConstruct:Lr}]}}function qh(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Ir(e){this.config.enter.autolinkProtocol.call(this,e)}function Kh(e){this.config.exit.autolinkProtocol.call(this,e)}function Xh(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function jh(e){this.config.exit.autolinkEmail.call(this,e)}function Zh(e){this.exit(e)}function $h(e){Ch(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Hh],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),Uh]],{ignore:["link","linkReference"]})}function Hh(e,t,n,r,o){let l="";if(!La(o)||(/^w/i.test(t)&&(n=t+n,t="",l="http://"),!Wh(n)))return!1;let i=Qh(n+r);if(!i[0])return!1;let a={type:"link",title:null,url:l+t+i[0],children:[{type:"text",value:t+i[0]}]};return i[1]?[a,{type:"text",value:i[1]}]:a}function Uh(e,t,n,r){return!La(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function Wh(e){let t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Qh(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")"),o=er(e,"("),l=er(e,")");for(;r!==-1&&o>l;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),l++;return[e,n]}function La(e,t){let n=e.input.charCodeAt(e.index-1);return(e.index===0||wt(n)||ur(n))&&(!t||n!==47)}Ia.peek=op;function Vh(){this.buffer()}function Yh(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function Jh(){this.buffer()}function _h(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function ep(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Pe(this.sliceSerialize(e)).toLowerCase(),n.label=t}function tp(e){this.exit(e)}function np(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Pe(this.sliceSerialize(e)).toLowerCase(),n.label=t}function rp(e){this.exit(e)}function op(){return"["}function Ia(e,t,n,r){let o=n.createTracker(r),l=o.move("[^"),i=n.enter("footnoteReference"),a=n.enter("reference");return l+=o.move(n.safe(n.associationId(e),{after:"]",before:l})),a(),i(),l+=o.move("]"),l}function ip(){return{enter:{gfmFootnoteCallString:Vh,gfmFootnoteCall:Yh,gfmFootnoteDefinitionLabelString:Jh,gfmFootnoteDefinition:_h},exit:{gfmFootnoteCallString:ep,gfmFootnoteCall:tp,gfmFootnoteDefinitionLabelString:np,gfmFootnoteDefinition:rp}}}function lp(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:Ia},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,o,l,i){let a=l.createTracker(i),s=a.move("[^"),c=l.enter("footnoteDefinition"),d=l.enter("label");return s+=a.move(l.safe(l.associationId(r),{before:s,after:"]"})),d(),s+=a.move("]:"),r.children&&r.children.length>0&&(a.shift(4),s+=a.move((t?`
`:" ")+l.indentLines(l.containerFlow(r,a.current()),t?Sa:ap))),c(),s}}function ap(e,t,n){return t===0?e:Sa(e,t,n)}function Sa(e,t,n){return(n?"":"    ")+e}const sp=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Pa.peek=hp;function cp(){return{canContainEols:["delete"],enter:{strikethrough:fp},exit:{strikethrough:up}}}function dp(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:sp}],handlers:{delete:Pa}}}function fp(e){this.enter({type:"delete",children:[]},e)}function up(e){this.exit(e)}function Pa(e,t,n,r){let o=n.createTracker(r),l=n.enter("strikethrough"),i=o.move("~~");return i+=n.containerPhrasing(e,{...o.current(),before:i,after:"~"}),i+=o.move("~~"),l(),i}function hp(){return"~"}function pp(e,t,n,r){let o=n.enter("blockquote"),l=n.createTracker(r);l.move("> "),l.shift(2);let i=n.indentLines(n.containerFlow(e,l.current()),mp);return o(),i}function mp(e,t,n){return">"+(n?"":" ")+e}function gp(e,t){return $i(e,t.inConstruct,!0)&&!$i(e,t.notInConstruct,!1)}function $i(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function Hi(e,t,n,r){let o=-1;for(;++o<n.unsafe.length;)if(n.unsafe[o].character===`
`&&gp(n.stack,n.unsafe[o]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function yp(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function xp(e){let t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function bp(e,t,n,r){let o=xp(n),l=e.value||"",i=o==="`"?"GraveAccent":"Tilde";if(yp(e,n)){let f=n.enter("codeIndented"),u=n.indentLines(l,Tp);return f(),u}let a=n.createTracker(r),s=o.repeat(Math.max(zh(l,o)+1,3)),c=n.enter("codeFenced"),d=a.move(s);if(e.lang){let f=n.enter(`codeFencedLang${i}`);d+=a.move(n.safe(e.lang,{before:d,after:" ",encode:["`"],...a.current()})),f()}if(e.lang&&e.meta){let f=n.enter(`codeFencedMeta${i}`);d+=a.move(" "),d+=a.move(n.safe(e.meta,{before:d,after:`
`,encode:["`"],...a.current()})),f()}return d+=a.move(`
`),l&&(d+=a.move(l+`
`)),d+=a.move(s),c(),d}function Tp(e,t,n){return(n?"":"    ")+e}function Ko(e){let t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function kp(e,t,n,r){let o=Ko(n),l=o==='"'?"Quote":"Apostrophe",i=n.enter("definition"),a=n.enter("label"),s=n.createTracker(r),c=s.move("[");return c+=s.move(n.safe(n.associationId(e),{before:c,after:"]",...s.current()})),c+=s.move("]: "),a(),!e.url||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),c+=s.move("<"),c+=s.move(n.safe(e.url,{before:c,after:">",...s.current()})),c+=s.move(">")):(a=n.enter("destinationRaw"),c+=s.move(n.safe(e.url,{before:c,after:e.title?" ":`
`,...s.current()}))),a(),e.title&&(a=n.enter(`title${l}`),c+=s.move(" "+o),c+=s.move(n.safe(e.title,{before:c,after:o,...s.current()})),c+=s.move(o),a()),i(),c}function wp(e){let t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function gn(e){return"&#x"+e.toString(16).toUpperCase()+";"}function nr(e,t,n){let r=Kt(e),o=Kt(t);return r===void 0?o===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:o===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?o===void 0?{inside:!1,outside:!1}:o===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:o===void 0?{inside:!1,outside:!1}:o===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}za.peek=vp;function za(e,t,n,r){let o=wp(n),l=n.enter("emphasis"),i=n.createTracker(r),a=i.move(o),s=i.move(n.containerPhrasing(e,{after:o,before:a,...i.current()})),c=s.charCodeAt(0),d=nr(r.before.charCodeAt(r.before.length-1),c,o);d.inside&&(s=gn(c)+s.slice(1));let f=s.charCodeAt(s.length-1),u=nr(r.after.charCodeAt(0),f,o);u.inside&&(s=s.slice(0,-1)+gn(f));let h=i.move(o);return l(),n.attentionEncodeSurroundingInfo={after:u.outside,before:d.outside},a+s+h}function vp(e,t,n){return n.options.emphasis||"*"}function Xo(e,t,n,r){let o,l,i;typeof t=="function"&&typeof n!="function"?(l=void 0,i=t,o=n):(l=t,i=n,o=r),Oa(e,l,a,o);function a(s,c){let d=c[c.length-1],f=d?d.children.indexOf(s):void 0;return i(s,f,d)}}function Bp(e,t){let n=!1;return Xo(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,Fh}),!!((!e.depth||e.depth<3)&&hr(e)&&(t.options.setext||n))}function Ep(e,t,n,r){let o=Math.max(Math.min(6,e.depth||1),1),l=n.createTracker(r);if(Bp(e,n)){let d=n.enter("headingSetext"),f=n.enter("phrasing"),u=n.containerPhrasing(e,{...l.current(),before:`
`,after:`
`});return f(),d(),u+`
`+(o===1?"=":"-").repeat(u.length-(Math.max(u.lastIndexOf("\r"),u.lastIndexOf(`
`))+1))}let i="#".repeat(o),a=n.enter("headingAtx"),s=n.enter("phrasing");l.move(i+" ");let c=n.containerPhrasing(e,{before:"# ",after:`
`,...l.current()});return/^[\t ]/.test(c)&&(c=gn(c.charCodeAt(0))+c.slice(1)),c=c?i+" "+c:i,n.options.closeAtx&&(c+=" "+i),s(),a(),c}Ma.peek=Ap;function Ma(e){return e.value||""}function Ap(){return"<"}Ga.peek=Dp;function Ga(e,t,n,r){let o=Ko(n),l=o==='"'?"Quote":"Apostrophe",i=n.enter("image"),a=n.enter("label"),s=n.createTracker(r),c=s.move("![");return c+=s.move(n.safe(e.alt,{before:c,after:"]",...s.current()})),c+=s.move("]("),a(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),c+=s.move("<"),c+=s.move(n.safe(e.url,{before:c,after:">",...s.current()})),c+=s.move(">")):(a=n.enter("destinationRaw"),c+=s.move(n.safe(e.url,{before:c,after:e.title?" ":")",...s.current()}))),a(),e.title&&(a=n.enter(`title${l}`),c+=s.move(" "+o),c+=s.move(n.safe(e.title,{before:c,after:o,...s.current()})),c+=s.move(o),a()),c+=s.move(")"),i(),c}function Dp(){return"!"}qa.peek=Fp;function qa(e,t,n,r){let o=e.referenceType,l=n.enter("imageReference"),i=n.enter("label"),a=n.createTracker(r),s=a.move("!["),c=n.safe(e.alt,{before:s,after:"]",...a.current()});s+=a.move(c+"]["),i();let d=n.stack;n.stack=[],i=n.enter("reference");let f=n.safe(n.associationId(e),{before:s,after:"]",...a.current()});return i(),n.stack=d,l(),o==="full"||!c||c!==f?s+=a.move(f+"]"):o==="shortcut"?s=s.slice(0,-1):s+=a.move("]"),s}function Fp(){return"!"}Ka.peek=Np;function Ka(e,t,n){let r=e.value||"",o="`",l=-1;for(;RegExp("(^|[^`])"+o+"([^`]|$)").test(r);)o+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++l<n.unsafe.length;){let i=n.unsafe[l],a=n.compilePattern(i),s;if(i.atBreak)for(;s=a.exec(r);){let c=s.index;r.charCodeAt(c)===10&&r.charCodeAt(c-1)===13&&c--,r=r.slice(0,c)+" "+r.slice(s.index+1)}}return o+r+o}function Np(){return"`"}function Xa(e,t){let n=hr(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}ja.peek=Cp;function ja(e,t,n,r){let o=Ko(n),l=o==='"'?"Quote":"Apostrophe",i=n.createTracker(r),a,s;if(Xa(e,n)){let d=n.stack;n.stack=[],a=n.enter("autolink");let f=i.move("<");return f+=i.move(n.containerPhrasing(e,{before:f,after:">",...i.current()})),f+=i.move(">"),a(),n.stack=d,f}a=n.enter("link"),s=n.enter("label");let c=i.move("[");return c+=i.move(n.containerPhrasing(e,{before:c,after:"](",...i.current()})),c+=i.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),c+=i.move("<"),c+=i.move(n.safe(e.url,{before:c,after:">",...i.current()})),c+=i.move(">")):(s=n.enter("destinationRaw"),c+=i.move(n.safe(e.url,{before:c,after:e.title?" ":")",...i.current()}))),s(),e.title&&(s=n.enter(`title${l}`),c+=i.move(" "+o),c+=i.move(n.safe(e.title,{before:c,after:o,...i.current()})),c+=i.move(o),s()),c+=i.move(")"),a(),c}function Cp(e,t,n){return Xa(e,n)?"<":"["}Za.peek=Rp;function Za(e,t,n,r){let o=e.referenceType,l=n.enter("linkReference"),i=n.enter("label"),a=n.createTracker(r),s=a.move("["),c=n.containerPhrasing(e,{before:s,after:"]",...a.current()});s+=a.move(c+"]["),i();let d=n.stack;n.stack=[],i=n.enter("reference");let f=n.safe(n.associationId(e),{before:s,after:"]",...a.current()});return i(),n.stack=d,l(),o==="full"||!c||c!==f?s+=a.move(f+"]"):o==="shortcut"?s=s.slice(0,-1):s+=a.move("]"),s}function Rp(){return"["}function jo(e){let t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function Op(e){let t=jo(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function Lp(e){let t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function $a(e){let t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function Ip(e,t,n,r){let o=n.enter("list"),l=n.bulletCurrent,i=e.ordered?Lp(n):jo(n),a=e.ordered?i==="."?")":".":Op(n),s=t&&n.bulletLastUsed?i===n.bulletLastUsed:!1;if(!e.ordered){let d=e.children?e.children[0]:void 0;if((i==="*"||i==="-")&&d&&(!d.children||!d.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(s=!0),$a(n)===i&&d){let f=-1;for(;++f<e.children.length;){let u=e.children[f];if(u&&u.type==="listItem"&&u.children&&u.children[0]&&u.children[0].type==="thematicBreak"){s=!0;break}}}}s&&(i=a),n.bulletCurrent=i;let c=n.containerFlow(e,r);return n.bulletLastUsed=i,n.bulletCurrent=l,o(),c}function Sp(e){let t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function Pp(e,t,n,r){let o=Sp(n),l=n.bulletCurrent||jo(n);t&&t.type==="list"&&t.ordered&&(l=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+l);let i=l.length+1;(o==="tab"||o==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(i=Math.ceil(i/4)*4);let a=n.createTracker(r);a.move(l+" ".repeat(i-l.length)),a.shift(i);let s=n.enter("listItem"),c=n.indentLines(n.containerFlow(e,a.current()),d);return s(),c;function d(f,u,h){return u?(h?"":" ".repeat(i))+f:(h?l:l+" ".repeat(i-l.length))+f}}function zp(e,t,n,r){let o=n.enter("paragraph"),l=n.enter("phrasing"),i=n.containerPhrasing(e,r);return l(),o(),i}const Mp=mr(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function Gp(e,t,n,r){return(e.children.some(function(o){return Mp(o)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function qp(e){let t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Ha.peek=Kp;function Ha(e,t,n,r){let o=qp(n),l=n.enter("strong"),i=n.createTracker(r),a=i.move(o+o),s=i.move(n.containerPhrasing(e,{after:o,before:a,...i.current()})),c=s.charCodeAt(0),d=nr(r.before.charCodeAt(r.before.length-1),c,o);d.inside&&(s=gn(c)+s.slice(1));let f=s.charCodeAt(s.length-1),u=nr(r.after.charCodeAt(0),f,o);u.inside&&(s=s.slice(0,-1)+gn(f));let h=i.move(o+o);return l(),n.attentionEncodeSurroundingInfo={after:u.outside,before:d.outside},a+s+h}function Kp(e,t,n){return n.options.strong||"*"}function Xp(e,t,n,r){return n.safe(e.value,r)}function jp(e){let t=e.options.ruleRepetition||3;if(t<3)throw Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function Zp(e,t,n){let r=($a(n)+(n.options.ruleSpaces?" ":"")).repeat(jp(n));return n.options.ruleSpaces?r.slice(0,-1):r}const Ua={blockquote:pp,break:Hi,code:bp,definition:kp,emphasis:za,hardBreak:Hi,heading:Ep,html:Ma,image:Ga,imageReference:qa,inlineCode:Ka,link:ja,linkReference:Za,list:Ip,listItem:Pp,paragraph:zp,root:Gp,strong:Ha,text:Xp,thematicBreak:Zp};function $p(){return{enter:{table:Hp,tableData:Ui,tableHeader:Ui,tableRow:Wp},exit:{codeText:Qp,table:Up,tableData:Sr,tableHeader:Sr,tableRow:Sr}}}function Hp(e){let t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function Up(e){this.exit(e),this.data.inTable=void 0}function Wp(e){this.enter({type:"tableRow",children:[]},e)}function Sr(e){this.exit(e)}function Ui(e){this.enter({type:"tableCell",children:[]},e)}function Qp(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,Vp));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function Vp(e,t){return t==="|"?t:e}function Yp(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,o=t.stringLength,l=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:u,table:i,tableCell:s,tableRow:a}};function i(h,p,T,b){return c(d(h,T,b),h.align)}function a(h,p,T,b){let y=c([f(h,T,b)]);return y.slice(0,y.indexOf(`
`))}function s(h,p,T,b){let y=T.enter("tableCell"),F=T.enter("phrasing"),B=T.containerPhrasing(h,{...b,before:l,after:l});return F(),y(),B}function c(h,p){return Sh(h,{align:p,alignDelimiters:r,padding:n,stringLength:o})}function d(h,p,T){let b=h.children,y=-1,F=[],B=p.enter("table");for(;++y<b.length;)F[y]=f(b[y],p,T);return B(),F}function f(h,p,T){let b=h.children,y=-1,F=[],B=p.enter("tableRow");for(;++y<b.length;)F[y]=s(b[y],h,p,T);return B(),F}function u(h,p,T){let b=Ua.inlineCode(h,p,T);return T.stack.includes("tableCell")&&(b=b.replace(/\|/g,"\\$&")),b}}function Jp(){return{exit:{taskListCheckValueChecked:Wi,taskListCheckValueUnchecked:Wi,paragraph:e2}}}function _p(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:t2}}}function Wi(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function e2(e){let t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){let n=this.stack[this.stack.length-1];n.type;let r=n.children[0];if(r&&r.type==="text"){let o=t.children,l=-1,i;for(;++l<o.length;){let a=o[l];if(a.type==="paragraph"){i=a;break}}i===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function t2(e,t,n,r){let o=e.children[0],l=typeof e.checked=="boolean"&&o&&o.type==="paragraph",i="["+(e.checked?"x":" ")+"] ",a=n.createTracker(r);l&&a.move(i);let s=Ua.listItem(e,t,n,{...r,...a.current()});return l&&(s=s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,c)),s;function c(d){return d+i}}function n2(){return[Mh(),ip(),cp(),$p(),Jp()]}function r2(e){return{extensions:[Gh(),lp(e),dp(),Yp(e),_p()]}}const o2={tokenize:d2,partial:!0},Wa={tokenize:f2,partial:!0},Qa={tokenize:u2,partial:!0},Va={tokenize:h2,partial:!0},i2={tokenize:p2,partial:!0},Qi={name:"wwwAutolink",tokenize:s2,previous:Ya},Vi={name:"protocolAutolink",tokenize:c2,previous:Ja},We={name:"emailAutolink",tokenize:a2,previous:_a},Ge={};function l2(){return{text:Ge}}let pt=48;for(;pt<123;)Ge[pt]=We,pt++,pt===58?pt=65:pt===91&&(pt=97);Ge[43]=We,Ge[45]=We,Ge[46]=We,Ge[95]=We,Ge[72]=[We,Vi],Ge[104]=[We,Vi],Ge[87]=[We,Qi],Ge[119]=[We,Qi];function a2(e,t,n){let r=this,o,l;return i;function i(f){return!po(f)||!_a.call(r,r.previous)||Zo(r.events)?n(f):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),a(f))}function a(f){return po(f)?(e.consume(f),a):f===64?(e.consume(f),s):n(f)}function s(f){return f===46?e.check(i2,d,c)(f):f===45||f===95||he(f)?(l=!0,e.consume(f),s):d(f)}function c(f){return e.consume(f),o=!0,s}function d(f){return l&&o&&ye(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(f)):n(f)}}function s2(e,t,n){let r=this;return o;function o(i){return i!==87&&i!==119||!Ya.call(r,r.previous)||Zo(r.events)?n(i):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(o2,e.attempt(Wa,e.attempt(Qa,l),n),n)(i))}function l(i){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(i)}}function c2(e,t,n){let r=this,o="",l=!1;return i;function i(f){return(f===72||f===104)&&Ja.call(r,r.previous)&&!Zo(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),o+=String.fromCodePoint(f),e.consume(f),a):n(f)}function a(f){if(ye(f)&&o.length<5)return o+=String.fromCodePoint(f),e.consume(f),a;if(f===58){let u=o.toLowerCase();if(u==="http"||u==="https")return e.consume(f),s}return n(f)}function s(f){return f===47?(e.consume(f),l?c:(l=!0,s)):n(f)}function c(f){return f===null||tr(f)||V(f)||wt(f)||ur(f)?n(f):e.attempt(Wa,e.attempt(Qa,d),n)(f)}function d(f){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(f)}}function d2(e,t,n){let r=0;return o;function o(i){return(i===87||i===119)&&r<3?(r++,e.consume(i),o):i===46&&r===3?(e.consume(i),l):n(i)}function l(i){return i===null?n(i):t(i)}}function f2(e,t,n){let r,o,l;return i;function i(c){return c===46||c===95?e.check(Va,s,a)(c):c===null||V(c)||wt(c)||c!==45&&ur(c)?s(c):(l=!0,e.consume(c),i)}function a(c){return c===95?r=!0:(o=r,r=void 0),e.consume(c),i}function s(c){return o||r||!l?n(c):t(c)}}function u2(e,t){let n=0,r=0;return o;function o(i){return i===40?(n++,e.consume(i),o):i===41&&r<n?l(i):i===33||i===34||i===38||i===39||i===41||i===42||i===44||i===46||i===58||i===59||i===60||i===63||i===93||i===95||i===126?e.check(Va,t,l)(i):i===null||V(i)||wt(i)?t(i):(e.consume(i),o)}function l(i){return i===41&&r++,e.consume(i),o}}function h2(e,t,n){return r;function r(a){return a===33||a===34||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===63||a===95||a===126?(e.consume(a),r):a===38?(e.consume(a),l):a===93?(e.consume(a),o):a===60||a===null||V(a)||wt(a)?t(a):n(a)}function o(a){return a===null||a===40||a===91||V(a)||wt(a)?t(a):r(a)}function l(a){return ye(a)?i(a):n(a)}function i(a){return a===59?(e.consume(a),r):ye(a)?(e.consume(a),i):n(a)}}function p2(e,t,n){return r;function r(l){return e.consume(l),o}function o(l){return he(l)?n(l):t(l)}}function Ya(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||V(e)}function Ja(e){return!ye(e)}function _a(e){return!(e===47||po(e))}function po(e){return e===43||e===45||e===46||e===95||he(e)}function Zo(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const m2={tokenize:v2,partial:!0};function g2(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:T2,continuation:{tokenize:k2},exit:w2}},text:{91:{name:"gfmFootnoteCall",tokenize:b2},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:y2,resolveTo:x2}}}}function y2(e,t,n){let r=this,o=r.events.length,l=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),i;for(;o--;){let s=r.events[o][1];if(s.type==="labelImage"){i=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return a;function a(s){if(!i||!i._balanced)return n(s);let c=Pe(r.sliceSerialize({start:i.end,end:r.now()}));return c.codePointAt(0)!==94||!l.includes(c.slice(1))?n(s):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),t(s))}}function x2(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";let r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},o={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};o.end.column++,o.end.offset++,o.end._bufferIndex++;let l={type:"gfmFootnoteCallString",start:Object.assign({},o.end),end:Object.assign({},e[e.length-1][1].start)},i={type:"chunkString",contentType:"string",start:Object.assign({},l.start),end:Object.assign({},l.end)},a=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",o,t],["exit",o,t],["enter",l,t],["enter",i,t],["exit",i,t],["exit",l,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...a),e}function b2(e,t,n){let r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),l=0,i;return a;function a(f){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),s}function s(f){return f===94?(e.enter("gfmFootnoteCallMarker"),e.consume(f),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",c):n(f)}function c(f){if(l>999||f===93&&!i||f===null||f===91||V(f))return n(f);if(f===93){e.exit("chunkString");let u=e.exit("gfmFootnoteCallString");return o.includes(Pe(r.sliceSerialize(u)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(f)}return V(f)||(i=!0),l++,e.consume(f),f===92?d:c}function d(f){return f===91||f===92||f===93?(e.consume(f),l++,c):c(f)}}function T2(e,t,n){let r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),l,i=0,a;return s;function s(p){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(p),e.exit("gfmFootnoteDefinitionLabelMarker"),c}function c(p){return p===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(p),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",d):n(p)}function d(p){if(i>999||p===93&&!a||p===null||p===91||V(p))return n(p);if(p===93){e.exit("chunkString");let T=e.exit("gfmFootnoteDefinitionLabelString");return l=Pe(r.sliceSerialize(T)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(p),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),u}return V(p)||(a=!0),i++,e.consume(p),p===92?f:d}function f(p){return p===91||p===92||p===93?(e.consume(p),i++,d):d(p)}function u(p){return p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),o.includes(l)||o.push(l),U(e,h,"gfmFootnoteDefinitionWhitespace")):n(p)}function h(p){return t(p)}}function k2(e,t,n){return e.check(En,t,e.attempt(m2,t,n))}function w2(e){e.exit("gfmFootnoteDefinition")}function v2(e,t,n){let r=this;return U(e,o,"gfmFootnoteDefinitionIndent",5);function o(l){let i=r.events[r.events.length-1];return i&&i[1].type==="gfmFootnoteDefinitionIndent"&&i[2].sliceSerialize(i[1],!0).length===4?t(l):n(l)}}function B2(e){let t=(e||{}).singleTilde,n={name:"strikethrough",tokenize:o,resolveAll:r};return t??=!0,{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}};function r(l,i){let a=-1;for(;++a<l.length;)if(l[a][0]==="enter"&&l[a][1].type==="strikethroughSequenceTemporary"&&l[a][1]._close){let s=a;for(;s--;)if(l[s][0]==="exit"&&l[s][1].type==="strikethroughSequenceTemporary"&&l[s][1]._open&&l[a][1].end.offset-l[a][1].start.offset===l[s][1].end.offset-l[s][1].start.offset){l[a][1].type="strikethroughSequence",l[s][1].type="strikethroughSequence";let c={type:"strikethrough",start:Object.assign({},l[s][1].start),end:Object.assign({},l[a][1].end)},d={type:"strikethroughText",start:Object.assign({},l[s][1].end),end:Object.assign({},l[a][1].start)},f=[["enter",c,i],["enter",l[s][1],i],["exit",l[s][1],i],["enter",d,i]],u=i.parser.constructs.insideSpan.null;u&&Ae(f,f.length,0,pr(u,l.slice(s+1,a),i)),Ae(f,f.length,0,[["exit",d,i],["enter",l[a][1],i],["exit",l[a][1],i],["exit",c,i]]),Ae(l,s-1,a-s+3,f),a=s+f.length-2;break}}for(a=-1;++a<l.length;)l[a][1].type==="strikethroughSequenceTemporary"&&(l[a][1].type="data");return l}function o(l,i,a){let s=this.previous,c=this.events,d=0;return f;function f(h){return s===126&&c[c.length-1][1].type!=="characterEscape"?a(h):(l.enter("strikethroughSequenceTemporary"),u(h))}function u(h){let p=Kt(s);if(h===126)return d>1?a(h):(l.consume(h),d++,u);if(d<2&&!t)return a(h);let T=l.exit("strikethroughSequenceTemporary"),b=Kt(h);return T._open=!b||b===2&&!!p,T._close=!p||p===2&&!!b,i(h)}}}var E2=class{constructor(){this.map=[]}add(t,n,r){A2(this,t,n,r)}consume(t){if(this.map.sort(function(l,i){return l[0]-i[0]}),this.map.length===0)return;let n=this.map.length,r=[];for(;n>0;)--n,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let o=r.pop();for(;o;){for(let l of o)t.push(l);o=r.pop()}this.map.length=0}};function A2(e,t,n,r){let o=0;if(!(n===0&&r.length===0)){for(;o<e.map.length;){if(e.map[o][0]===t){e.map[o][1]+=n,e.map[o][2].push(...r);return}o+=1}e.map.push([t,n,r])}}function D2(e,t){let n=!1,r=[];for(;t<e.length;){let o=e[t];if(n){if(o[0]==="enter")o[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(o[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){let l=r.length-1;r[l]=r[l]==="left"?"center":"right"}}else if(o[1].type==="tableDelimiterRow")break}else o[0]==="enter"&&o[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function F2(){return{flow:{null:{name:"table",tokenize:N2,resolveAll:C2}}}}function N2(e,t,n){let r=this,o=0,l=0,i;return a;function a(x){let E=r.events.length-1;for(;E>-1;){let j=r.events[E][1].type;if(j==="lineEnding"||j==="linePrefix")E--;else break}let N=E>-1?r.events[E][1].type:null,I=N==="tableHead"||N==="tableRow"?v:s;return I===v&&r.parser.lazy[r.now().line]?n(x):I(x)}function s(x){return e.enter("tableHead"),e.enter("tableRow"),c(x)}function c(x){return x===124||(i=!0,l+=1),d(x)}function d(x){return x===null?n(x):P(x)?l>1?(l=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),h):n(x):$(x)?U(e,d,"whitespace")(x):(l+=1,i&&(i=!1,o+=1),x===124?(e.enter("tableCellDivider"),e.consume(x),e.exit("tableCellDivider"),i=!0,d):(e.enter("data"),f(x)))}function f(x){return x===null||x===124||V(x)?(e.exit("data"),d(x)):(e.consume(x),x===92?u:f)}function u(x){return x===92||x===124?(e.consume(x),f):f(x)}function h(x){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(x):(e.enter("tableDelimiterRow"),i=!1,$(x)?U(e,p,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(x):p(x))}function p(x){return x===45||x===58?b(x):x===124?(i=!0,e.enter("tableCellDivider"),e.consume(x),e.exit("tableCellDivider"),T):S(x)}function T(x){return $(x)?U(e,b,"whitespace")(x):b(x)}function b(x){return x===58?(l+=1,i=!0,e.enter("tableDelimiterMarker"),e.consume(x),e.exit("tableDelimiterMarker"),y):x===45?(l+=1,y(x)):x===null||P(x)?O(x):S(x)}function y(x){return x===45?(e.enter("tableDelimiterFiller"),F(x)):S(x)}function F(x){return x===45?(e.consume(x),F):x===58?(i=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(x),e.exit("tableDelimiterMarker"),B):(e.exit("tableDelimiterFiller"),B(x))}function B(x){return $(x)?U(e,O,"whitespace")(x):O(x)}function O(x){return x===124?p(x):x===null||P(x)?!i||o!==l?S(x):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(x)):S(x)}function S(x){return n(x)}function v(x){return e.enter("tableRow"),L(x)}function L(x){return x===124?(e.enter("tableCellDivider"),e.consume(x),e.exit("tableCellDivider"),L):x===null||P(x)?(e.exit("tableRow"),t(x)):$(x)?U(e,L,"whitespace")(x):(e.enter("data"),k(x))}function k(x){return x===null||x===124||V(x)?(e.exit("data"),L(x)):(e.consume(x),x===92?R:k)}function R(x){return x===92||x===124?(e.consume(x),k):k(x)}}function C2(e,t){let n=-1,r=!0,o=0,l=[0,0,0,0],i=[0,0,0,0],a=!1,s=0,c,d,f,u=new E2;for(;++n<e.length;){let h=e[n],p=h[1];h[0]==="enter"?p.type==="tableHead"?(a=!1,s!==0&&(Yi(u,t,s,c,d),d=void 0,s=0),c={type:"table",start:Object.assign({},p.start),end:Object.assign({},p.end)},u.add(n,0,[["enter",c,t]])):p.type==="tableRow"||p.type==="tableDelimiterRow"?(r=!0,f=void 0,l=[0,0,0,0],i=[0,n+1,0,0],a&&(a=!1,d={type:"tableBody",start:Object.assign({},p.start),end:Object.assign({},p.end)},u.add(n,0,[["enter",d,t]])),o=p.type==="tableDelimiterRow"?2:d?3:1):o&&(p.type==="data"||p.type==="tableDelimiterMarker"||p.type==="tableDelimiterFiller")?(r=!1,i[2]===0&&(l[1]!==0&&(i[0]=i[1],f=On(u,t,l,o,void 0,f),l=[0,0,0,0]),i[2]=n)):p.type==="tableCellDivider"&&(r?r=!1:(l[1]!==0&&(i[0]=i[1],f=On(u,t,l,o,void 0,f)),l=i,i=[l[1],n,0,0])):p.type==="tableHead"?(a=!0,s=n):p.type==="tableRow"||p.type==="tableDelimiterRow"?(s=n,l[1]===0?i[1]!==0&&(f=On(u,t,i,o,n,f)):(i[0]=i[1],f=On(u,t,l,o,n,f)),o=0):o&&(p.type==="data"||p.type==="tableDelimiterMarker"||p.type==="tableDelimiterFiller")&&(i[3]=n)}for(s!==0&&Yi(u,t,s,c,d),u.consume(t.events),n=-1;++n<t.events.length;){let h=t.events[n];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=D2(t.events,n))}return e}function On(e,t,n,r,o,l){let i=r===1?"tableHeader":r===2?"tableDelimiter":"tableData";n[0]!==0&&(l.end=Object.assign({},Lt(t.events,n[0])),e.add(n[0],0,[["exit",l,t]]));let a=Lt(t.events,n[1]);if(l={type:i,start:Object.assign({},a),end:Object.assign({},a)},e.add(n[1],0,[["enter",l,t]]),n[2]!==0){let s=Lt(t.events,n[2]),c=Lt(t.events,n[3]),d={type:"tableContent",start:Object.assign({},s),end:Object.assign({},c)};if(e.add(n[2],0,[["enter",d,t]]),r!==2){let f=t.events[n[2]],u=t.events[n[3]];if(f[1].end=Object.assign({},u[1].end),f[1].type="chunkText",f[1].contentType="text",n[3]>n[2]+1){let h=n[2]+1,p=n[3]-n[2]-1;e.add(h,p,[])}}e.add(n[3]+1,0,[["exit",d,t]])}return o!==void 0&&(l.end=Object.assign({},Lt(t.events,o)),e.add(o,0,[["exit",l,t]]),l=void 0),l}function Yi(e,t,n,r,o){let l=[],i=Lt(t.events,n);o&&(o.end=Object.assign({},i),l.push(["exit",o,t])),r.end=Object.assign({},i),l.push(["exit",r,t]),e.add(n+1,0,l)}function Lt(e,t){let n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const R2={name:"tasklistCheck",tokenize:L2};function O2(){return{text:{91:R2}}}function L2(e,t,n){let r=this;return o;function o(s){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(s):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),l)}function l(s){return V(s)?(e.enter("taskListCheckValueUnchecked"),e.consume(s),e.exit("taskListCheckValueUnchecked"),i):s===88||s===120?(e.enter("taskListCheckValueChecked"),e.consume(s),e.exit("taskListCheckValueChecked"),i):n(s)}function i(s){return s===93?(e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),a):n(s)}function a(s){return P(s)?t(s):$(s)?e.check({tokenize:I2},t,n)(s):n(s)}}function I2(e,t,n){return U(e,r,"whitespace");function r(o){return o===null?n(o):t(o)}}function S2(e){return xa([l2(),g2(),B2(e),F2(),O2()])}const P2={};function z2(e){let t=this,n=e||P2,r=t.data(),o=r.micromarkExtensions||=[],l=r.fromMarkdownExtensions||=[],i=r.toMarkdownExtensions||=[];o.push(S2(n)),l.push(n2()),i.push(r2(n))}const M2=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/i,G2=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)(\/.*)?\]/i,q2=({legacyTitle:e=!1,tagName:t="div"}={})=>n=>{Xo(n,"blockquote",(r,o,l)=>{let i="",a="",s=!0,c=r.children.map(d=>{if(s&&d.type==="paragraph"){let f=d.children[0],u=f.type==="text"?f.value:"",h=e?G2:M2,p=u.match(h);if(p&&(s=!1,i=p[1].toLocaleLowerCase(),a=e&&p[2]||i.toLocaleUpperCase(),u.includes(`
`)&&(d.children[0]={type:"text",value:u.replace(h,"").replace(/^\n+/,"")}),!u.includes(`
`))){let T=[];d.children.forEach((b,y)=>{y!=0&&(y==1&&b.type==="break"||T.push(b))}),d.children=[...T]}}return d});i&&(r.data={hName:t,hProperties:{className:["markdown-alert",`markdown-alert-${i}`],dir:"auto"}},c.unshift({type:"paragraph",children:[K2(i),{type:"text",value:a.replace(/^\//,"")}],data:{hProperties:{className:"markdown-alert-title",dir:"auto"}}})),r.children=[...c]})};function K2(e){return{type:"emphasis",data:{hName:"svg",hProperties:{className:["octicon"],viewBox:"0 0 16 16",width:"16",height:"16",ariaHidden:"true"}},children:[{type:"emphasis",data:{hName:"path",hProperties:{d:X2[e]??""}},children:[]}]}}const X2={note:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",tip:"M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z",important:"M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",warning:"M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",caution:"M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"};function j2(e){let t=this;t.parser=n;function n(r){return Na(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function Z2(e,t){let n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function $2(e,t){let n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function H2(e,t){let n=t.value?t.value+`
`:"",r={},o=t.lang?t.lang.split(/\s+/):[];o.length>0&&(r.className=["language-"+o[0]]);let l={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(l.data={meta:t.meta}),e.patch(t,l),l=e.applyData(t,l),l={type:"element",tagName:"pre",properties:{},children:[l]},e.patch(t,l),l}function U2(e,t){let n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function W2(e,t){let n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Q2(e,t){let n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),o=Wt(r.toLowerCase()),l=e.footnoteOrder.indexOf(r),i,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),i=e.footnoteOrder.length):i=l+1,a+=1,e.footnoteCounts.set(r,a);let s={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+o,id:n+"fnref-"+o+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(i)}]};e.patch(t,s);let c={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,c),e.applyData(t,c)}function V2(e,t){let n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Y2(e,t){if(e.options.allowDangerousHtml){let n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function es(e,t){let n=t.referenceType,r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];let o=e.all(t),l=o[0];l&&l.type==="text"?l.value="["+l.value:o.unshift({type:"text",value:"["});let i=o[o.length-1];return i&&i.type==="text"?i.value+=r:o.push({type:"text",value:r}),o}function J2(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return es(e,t);let o={src:Wt(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(o.title=r.title);let l={type:"element",tagName:"img",properties:o,children:[]};return e.patch(t,l),e.applyData(t,l)}function _2(e,t){let n={src:Wt(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function em(e,t){let n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);let r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function tm(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return es(e,t);let o={href:Wt(r.url||"")};r.title!==null&&r.title!==void 0&&(o.title=r.title);let l={type:"element",tagName:"a",properties:o,children:e.all(t)};return e.patch(t,l),e.applyData(t,l)}function nm(e,t){let n={href:Wt(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function rm(e,t,n){let r=e.all(t),o=n?om(n):ts(t),l={},i=[];if(typeof t.checked=="boolean"){let d=r[0],f;d&&d.type==="element"&&d.tagName==="p"?f=d:(f={type:"element",tagName:"p",properties:{},children:[]},r.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),l.className=["task-list-item"]}let a=-1;for(;++a<r.length;){let d=r[a];(o||a!==0||d.type!=="element"||d.tagName!=="p")&&i.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!o?i.push(...d.children):i.push(d)}let s=r[r.length-1];s&&(o||s.type!=="element"||s.tagName!=="p")&&i.push({type:"text",value:`
`});let c={type:"element",tagName:"li",properties:l,children:i};return e.patch(t,c),e.applyData(t,c)}function om(e){let t=!1;if(e.type==="list"){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=ts(n[r])}return t}function ts(e){return e.spread??e.children.length>1}function im(e,t){let n={},r=e.all(t),o=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++o<r.length;){let i=r[o];if(i.type==="element"&&i.tagName==="li"&&i.properties&&Array.isArray(i.properties.className)&&i.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}let l={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,l),e.applyData(t,l)}function lm(e,t){let n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function am(e,t){let n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function sm(e,t){let n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function cm(e,t){let n=e.all(t),r=n.shift(),o=[];if(r){let i={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],i),o.push(i)}if(n.length>0){let i={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=Vl(t.children[1]),s=Ql(t.children[t.children.length-1]);a&&s&&(i.position={start:a,end:s}),o.push(i)}let l={type:"element",tagName:"table",properties:{},children:e.wrap(o,!0)};return e.patch(t,l),e.applyData(t,l)}function dm(e,t,n){let r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,i=l?l.length:t.children.length,a=-1,s=[];for(;++a<i;){let d=t.children[a],f={},u=l?l[a]:void 0;u&&(f.align=u);let h={type:"element",tagName:o,properties:f,children:[]};d&&(h.children=e.all(d),e.patch(d,h),h=e.applyData(d,h)),s.push(h)}let c={type:"element",tagName:"tr",properties:{},children:e.wrap(s,!0)};return e.patch(t,c),e.applyData(t,c)}function fm(e,t){let n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function um(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),o=0,l=[];for(;r;)l.push(Ji(t.slice(o,r.index),o>0,!0),r[0]),o=r.index+r[0].length,r=n.exec(t);return l.push(Ji(t.slice(o),o>0,!1)),l.join("")}function Ji(e,t,n){let r=0,o=e.length;if(t){let l=e.codePointAt(r);for(;l===9||l===32;)r++,l=e.codePointAt(r)}if(n){let l=e.codePointAt(o-1);for(;l===9||l===32;)o--,l=e.codePointAt(o-1)}return o>r?e.slice(r,o):""}function hm(e,t){let n={type:"text",value:um(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function pm(e,t){let n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const mm={blockquote:Z2,break:$2,code:H2,delete:U2,emphasis:W2,footnoteReference:Q2,heading:V2,html:Y2,imageReference:J2,image:_2,inlineCode:em,linkReference:tm,link:nm,listItem:rm,list:im,paragraph:lm,root:am,strong:sm,table:cm,tableCell:fm,tableRow:dm,text:hm,thematicBreak:pm,toml:Ln,yaml:Ln,definition:Ln,footnoteDefinition:Ln};function Ln(){}function gm(e,t){let n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function ym(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function xm(e){let t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||gm,r=e.options.footnoteBackLabel||ym,o=e.options.footnoteLabel||"Footnotes",l=e.options.footnoteLabelTagName||"h2",i=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[],s=-1;for(;++s<e.footnoteOrder.length;){let c=e.footnoteById.get(e.footnoteOrder[s]);if(!c)continue;let d=e.all(c),f=String(c.identifier).toUpperCase(),u=Wt(f.toLowerCase()),h=0,p=[],T=e.footnoteCounts.get(f);for(;T!==void 0&&++h<=T;){p.length>0&&p.push({type:"text",value:" "});let F=typeof n=="string"?n:n(s,h);typeof F=="string"&&(F={type:"text",value:F}),p.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+u+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,h),className:["data-footnote-backref"]},children:Array.isArray(F)?F:[F]})}let b=d[d.length-1];if(b&&b.type==="element"&&b.tagName==="p"){let F=b.children[b.children.length-1];F&&F.type==="text"?F.value+=" ":b.children.push({type:"text",value:" "}),b.children.push(...p)}else d.push(...p);let y={type:"element",tagName:"li",properties:{id:t+"fn-"+u},children:e.wrap(d,!0)};e.patch(c,y),a.push(y)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:l,properties:{...mn(i),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const mo={}.hasOwnProperty,bm={};function Tm(e,t){let n=t||bm,r=new Map,o=new Map,l={all:a,applyData:wm,definitionById:r,footnoteById:o,footnoteCounts:new Map,footnoteOrder:[],handlers:{...mm,...n.handlers},one:i,options:n,patch:km,wrap:Bm};return Xo(e,function(s){if(s.type==="definition"||s.type==="footnoteDefinition"){let c=s.type==="definition"?r:o,d=String(s.identifier).toUpperCase();c.has(d)||c.set(d,s)}}),l;function i(s,c){let d=s.type,f=l.handlers[d];if(mo.call(l.handlers,d)&&f)return f(l,s,c);if(l.options.passThrough&&l.options.passThrough.includes(d)){if("children"in s){let{children:u,...h}=s,p=mn(h);return p.children=l.all(s),p}return mn(s)}return(l.options.unknownHandler||vm)(l,s,c)}function a(s){let c=[];if("children"in s){let d=s.children,f=-1;for(;++f<d.length;){let u=l.one(d[f],s);if(u){if(f&&d[f-1].type==="break"&&(!Array.isArray(u)&&u.type==="text"&&(u.value=_i(u.value)),!Array.isArray(u)&&u.type==="element")){let h=u.children[0];h&&h.type==="text"&&(h.value=_i(h.value))}Array.isArray(u)?c.push(...u):c.push(u)}}}return c}}function km(e,t){e.position&&(t.position=Jl(e))}function wm(e,t){let n=t;if(e&&e.data){let r=e.data.hName,o=e.data.hChildren,l=e.data.hProperties;typeof r=="string"&&(n.type==="element"?n.tagName=r:n={type:"element",tagName:r,properties:{},children:"children"in n?n.children:[n]}),n.type==="element"&&l&&Object.assign(n.properties,mn(l)),"children"in n&&n.children&&o!=null&&(n.children=o)}return n}function vm(e,t){let n=t.data||{},r="value"in t&&!(mo.call(n,"hProperties")||mo.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Bm(e,t){let n=[],r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function _i(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function el(e,t){let n=Tm(e,t),r=n.one(e,void 0),o=xm(n),l=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return o&&l.children.push({type:"text",value:`
`},o),l}function Em(e,t){return e&&"run"in e?async function(n,r){let o=el(n,{file:r,...t});await e.run(o,r)}:function(n,r){return el(n,{file:r,...e||t})}}function tl(e){if(e)throw e}var Am=re(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,o=Object.defineProperty,l=Object.getOwnPropertyDescriptor,i=function(f){return typeof Array.isArray=="function"?Array.isArray(f):r.call(f)==="[object Array]"},a=function(f){if(!f||r.call(f)!=="[object Object]")return!1;var u=n.call(f,"constructor"),h=f.constructor&&f.constructor.prototype&&n.call(f.constructor.prototype,"isPrototypeOf");if(f.constructor&&!u&&!h)return!1;for(var p in f);return p===void 0||n.call(f,p)},s=function(f,u){o&&u.name==="__proto__"?o(f,u.name,{enumerable:!0,configurable:!0,value:u.newValue,writable:!0}):f[u.name]=u.newValue},c=function(f,u){if(u==="__proto__"){if(!n.call(f,u))return;if(l)return l(f,u).value}return f[u]};t.exports=function d(){var f,u,h,p,T,b,y=arguments[0],F=1,B=arguments.length,O=!1;for(typeof y=="boolean"&&(O=y,y=arguments[1]||{},F=2),(y==null||typeof y!="object"&&typeof y!="function")&&(y={});F<B;++F)if(f=arguments[F],f!=null)for(u in f)h=c(y,u),p=c(f,u),y!==p&&(O&&p&&(a(p)||(T=i(p)))?(T?(T=!1,b=h&&i(h)?h:[]):b=h&&a(h)?h:{},s(y,{name:u,newValue:d(O,b,p)})):p!==void 0&&s(y,{name:u,newValue:p}));return y}}));function go(e){if(typeof e!="object"||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Dm(){let e=[],t={run:n,use:r};return t;function n(...o){let l=-1,i=o.pop();if(typeof i!="function")throw TypeError("Expected function as last argument, not "+i);a(null,...o);function a(s,...c){let d=e[++l],f=-1;if(s){i(s);return}for(;++f<o.length;)(c[f]===null||c[f]===void 0)&&(c[f]=o[f]);o=c,d?Fm(d,a)(...c):i(null,...c)}}function r(o){if(typeof o!="function")throw TypeError("Expected `middelware` to be a function, not "+o);return e.push(o),t}}function Fm(e,t){let n;return r;function r(...i){let a=e.length>i.length,s;a&&i.push(o);try{s=e.apply(this,i)}catch(c){let d=c;if(a&&n)throw d;return o(d)}a||(s&&s.then&&typeof s.then=="function"?s.then(l,o):s instanceof Error?o(s):l(s))}function o(i,...a){n||(n=!0,t(i,...a))}function l(i){o(null,i)}}var be=class extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let o="",l={},i=!1;if(n&&(l="line"in n&&"column"in n||"start"in n&&"end"in n?{place:n}:"type"in n?{ancestors:[n],place:n.position}:{...n}),typeof t=="string"?o=t:!l.cause&&t&&(i=!0,o=t.message,l.cause=t),!l.ruleId&&!l.source&&typeof r=="string"){let s=r.indexOf(":");s===-1?l.ruleId=r:(l.source=r.slice(0,s),l.ruleId=r.slice(s+1))}if(!l.place&&l.ancestors&&l.ancestors){let s=l.ancestors[l.ancestors.length-1];s&&(l.place=s.position)}let a=l.place&&"start"in l.place?l.place.start:l.place;this.ancestors=l.ancestors||void 0,this.cause=l.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file,this.message=o,this.line=a?a.line:void 0,this.name=un(l.place)||"1:1",this.place=l.place||void 0,this.reason=this.message,this.ruleId=l.ruleId||void 0,this.source=l.source||void 0,this.stack=i&&l.cause&&typeof l.cause.stack=="string"?l.cause.stack:"",this.actual,this.expected,this.note,this.url}};be.prototype.file="",be.prototype.name="",be.prototype.reason="",be.prototype.message="",be.prototype.stack="",be.prototype.column=void 0,be.prototype.line=void 0,be.prototype.ancestors=void 0,be.prototype.cause=void 0,be.prototype.fatal=void 0,be.prototype.place=void 0,be.prototype.ruleId=void 0,be.prototype.source=void 0;const qe={basename:Nm,dirname:Cm,extname:Rm,join:Om,sep:"/"};function Nm(e,t){if(t!==void 0&&typeof t!="string")throw TypeError('"ext" argument must be a string');An(e);let n=0,r=-1,o=e.length,l;if(t===void 0||t.length===0||t.length>e.length){for(;o--;)if(e.codePointAt(o)===47){if(l){n=o+1;break}}else r<0&&(l=!0,r=o+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let i=-1,a=t.length-1;for(;o--;)if(e.codePointAt(o)===47){if(l){n=o+1;break}}else i<0&&(l=!0,i=o+1),a>-1&&(e.codePointAt(o)===t.codePointAt(a--)?a<0&&(r=o):(a=-1,r=i));return n===r?r=i:r<0&&(r=e.length),e.slice(n,r)}function Cm(e){if(An(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||=!0;return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function Rm(e){An(e);let t=e.length,n=-1,r=0,o=-1,l=0,i;for(;t--;){let a=e.codePointAt(t);if(a===47){if(i){r=t+1;break}continue}n<0&&(i=!0,n=t+1),a===46?o<0?o=t:l!==1&&(l=1):o>-1&&(l=-1)}return o<0||n<0||l===0||l===1&&o===n-1&&o===r+1?"":e.slice(o,n)}function Om(...e){let t=-1,n;for(;++t<e.length;)An(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":Lm(n)}function Lm(e){An(e);let t=e.codePointAt(0)===47,n=Im(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function Im(e,t){let n="",r=0,o=-1,l=0,i=-1,a,s;for(;++i<=e.length;){if(i<e.length)a=e.codePointAt(i);else{if(a===47)break;a=47}if(a===47){if(!(o===i-1||l===1))if(o!==i-1&&l===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(s=n.lastIndexOf("/"),s!==n.length-1){s<0?(n="",r=0):(n=n.slice(0,s),r=n.length-1-n.lastIndexOf("/")),o=i,l=0;continue}}else if(n.length>0){n="",r=0,o=i,l=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(o+1,i):n=e.slice(o+1,i),r=i-o-1;o=i,l=0}else a===46&&l>-1?l++:l=-1}return n}function An(e){if(typeof e!="string")throw TypeError("Path must be a string. Received "+JSON.stringify(e))}const Sm={cwd:Pm};function Pm(){return"/"}function yo(e){return!!(typeof e=="object"&&e&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function zm(e){if(typeof e=="string")e=new URL(e);else if(!yo(e)){let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){let t=TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return Mm(e)}function Mm(e){if(e.hostname!==""){let r=TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let r=t.codePointAt(n+2);if(r===70||r===102){let o=TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(t)}const Pr=["history","path","basename","stem","extname","dirname"];var Gm=class{constructor(t){let n;n=t?yo(t)?{path:t}:typeof t=="string"||qm(t)?{value:t}:t:{},this.cwd="cwd"in n?"":Sm.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Pr.length;){let l=Pr[r];l in n&&n[l]!==void 0&&n[l]!==null&&(this[l]=l==="history"?[...n[l]]:n[l])}let o;for(o in n)Pr.includes(o)||(this[o]=n[o])}get basename(){return typeof this.path=="string"?qe.basename(this.path):void 0}set basename(t){Mr(t,"basename"),zr(t,"basename"),this.path=qe.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?qe.dirname(this.path):void 0}set dirname(t){nl(this.basename,"dirname"),this.path=qe.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?qe.extname(this.path):void 0}set extname(t){if(zr(t,"extname"),nl(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw Error("`extname` must start with `.`");if(t.includes(".",1))throw Error("`extname` cannot contain multiple dots")}this.path=qe.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){yo(t)&&(t=zm(t)),Mr(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?qe.basename(this.path,this.extname):void 0}set stem(t){Mr(t,"stem"),zr(t,"stem"),this.path=qe.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){let o=this.message(t,n,r);throw o.fatal=!0,o}info(t,n,r){let o=this.message(t,n,r);return o.fatal=void 0,o}message(t,n,r){let o=new be(t,n,r);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}};function zr(e,t){if(e&&e.includes(qe.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+qe.sep+"`")}function Mr(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function nl(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}function qm(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Km=(function(e){let t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r});var Gr=je(Am());const Xm={}.hasOwnProperty,jm=new class ns extends Km{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Dm()}copy(){let t=new ns,n=-1;for(;++n<this.attachers.length;){let r=this.attachers[n];t.use(...r)}return t.data((0,Gr.default)(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Xr("data",this.frozen),this.namespace[t]=n,this):Xm.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Xr("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;let t=this;for(;++this.freezeIndex<this.attachers.length;){let[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);let o=n.call(t,...r);typeof o=="function"&&this.transformers.use(o)}return this.frozen=!0,this.freezeIndex=1/0,this}parse(t){this.freeze();let n=In(t),r=this.parser||this.Parser;return qr("parse",r),r(String(n),n)}process(t,n){let r=this;return this.freeze(),qr("process",this.parser||this.Parser),Kr("process",this.compiler||this.Compiler),n?o(void 0,n):new Promise(o);function o(l,i){let a=In(t),s=r.parse(a);r.run(s,a,function(d,f,u){if(d||!f||!u)return c(d);let h=f,p=r.stringify(h,u);$m(p)?u.value=p:u.result=p,c(d,u)});function c(d,f){d||!f?i(d):l?l(f):n(void 0,f)}}}processSync(t){let n=!1,r;return this.freeze(),qr("processSync",this.parser||this.Parser),Kr("processSync",this.compiler||this.Compiler),this.process(t,o),ol("processSync","process",n),r;function o(l,i){n=!0,tl(l),r=i}}run(t,n,r){rl(t),this.freeze();let o=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?l(void 0,r):new Promise(l);function l(i,a){let s=In(n);o.run(t,s,c);function c(d,f,u){let h=f||t;d?a(d):i?i(h):r(void 0,h,u)}}}runSync(t,n){let r=!1,o;return this.run(t,n,l),ol("runSync","run",r),o;function l(i,a){tl(i),o=a,r=!0}}stringify(t,n){this.freeze();let r=In(n),o=this.compiler||this.Compiler;return Kr("stringify",o),rl(t),o(t,r)}use(t,...n){let r=this.attachers,o=this.namespace;if(Xr("use",this.frozen),t!=null)if(typeof t=="function")s(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):i(t);else throw TypeError("Expected usable value, not `"+t+"`");return this;function l(c){if(typeof c=="function")s(c,[]);else if(typeof c=="object")if(Array.isArray(c)){let[d,...f]=c;s(d,f)}else i(c);else throw TypeError("Expected usable value, not `"+c+"`")}function i(c){if(!("plugins"in c)&&!("settings"in c))throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(c.plugins),c.settings&&(o.settings=(0,Gr.default)(!0,o.settings,c.settings))}function a(c){let d=-1;if(c!=null)if(Array.isArray(c))for(;++d<c.length;){let f=c[d];l(f)}else throw TypeError("Expected a list of plugins, not `"+c+"`")}function s(c,d){let f=-1,u=-1;for(;++f<r.length;)if(r[f][0]===c){u=f;break}if(u===-1)r.push([c,...d]);else if(d.length>0){let[h,...p]=d,T=r[u][1];go(T)&&go(h)&&(h=(0,Gr.default)(!0,T,h)),r[u]=[c,h,...p]}}}}().freeze();function qr(e,t){if(typeof t!="function")throw TypeError("Cannot `"+e+"` without `parser`")}function Kr(e,t){if(typeof t!="function")throw TypeError("Cannot `"+e+"` without `compiler`")}function Xr(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function rl(e){if(!go(e)||typeof e.type!="string")throw TypeError("Expected node, got `"+e+"`")}function ol(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function In(e){return Zm(e)?e:new Gm(e)}function Zm(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function $m(e){return typeof e=="string"||Hm(e)}function Hm(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}function Ie(e,t){if(e===void 0||e==null){let n=typeof t=="function"?t():t;throw Error(n??`Expected defined value, but received ${e}`)}return e}function z(e,t){if(!e)throw Error(t??"Invariant failed")}function rs(e){throw Error(`NonExhaustive value: ${e}`)}var os=je(Sd());function xo(e,t){return e===t?0:Le(e)?Le(t)?(0,os.default)(e,t):1:Le(t)?-1:0}function Um(e=".",t=!1){return(n,r)=>{if(n===r)return 0;if(!n)return-1;if(!r)return 1;let o=n.split(e),l=r.split(e),i=Math.min(o.length,l.length);for(let s=0;s<i;s++){let c=o[s],d=l[s],f=(0,os.default)(c,d);if(f!==0)return f}let a=o.length-l.length;return t?-1*a:a}}function $o(e){return e!=null&&typeof e=="string"}function T5(e){return!!e&&Array.isArray(e)&&e.length>0}function is(e,t){return z(typeof t=="string","Path must be string"),typeof e=="object"&&!!e&&e[t]!=null}function Wm(e){return t=>is(t,e)}function k5(...e){if(e.length===1&&typeof e[0]=="string")return Wm(e[0]);let[t,n]=e;return is(t,n)}function Xn(e){let t=e.lastIndexOf(".");return t>0?e.slice(0,t):null}function ls(e){let t=e.lastIndexOf(".");return t>0?e.slice(t+1):e}const hn=e=>$o(e)?e:e.id;function Ee(e,t){let n=hn(e);return t?hn(t).startsWith(n+"."):r=>{let o=hn(r);return n.startsWith(o+".")}}function Ho(e,t){if(!t)return o=>Ho(e,o);let n=hn(e),r=hn(t);return n===r||r.startsWith(n+".")||n.startsWith(r+".")}function as(e,t){return n=>Ee(e,n)}function rr(e){return($o(e)?e:e.id).split(".").length}function Dn(e,t){let n=e.split(".");if(n.length<2)return null;let r=t.split(".");if(r.length<2)return null;let o=[];for(let l=0;l<Math.min(n.length,r.length)-1&&n[l]===r[l];l++)o.push(n[l]);return o.length===0?null:o.join(".")}function Gt(e){let t=e.split(".");if(t.pop(),!Xe(t,2))return t;for(let n=1;n<t.length;n++)t[n]=t[n-1]+"."+t[n];return t.reverse()}function Qm(e,t){let n=t;for(let r of e)r!==n&&Ee(r,n)&&(n=r);return n===t?null:n}function yn(e){let t=[],n=[...e],r;for(;r=n.shift();){let o;for(;o=Qm(n,r);)t.push(...n.splice(n.indexOf(o),1));t.push(r)}return t}function ss(e,t){if(!e||$o(e)){let r=e??"asc";return o=>ss(o,r)}let n=t==="desc"?-1:1;return e.map(r=>({item:r,fqn:r.id.split(".")})).sort((r,o)=>{if(r.fqn.length!==o.fqn.length)return(r.fqn.length-o.fqn.length)*n;for(let l=0;l<r.fqn.length;l++){let i=xo(r.fqn[l],o.fqn[l]);if(i!==0)return i}return 0}).map(({item:r})=>r)}function Vm(e,t,n){let r=e.get(t);return r||(r=n(t),e.set(t,r)),r}function Tt(e,t){let n=t??e;z(sr(n));function*r(o){for(let l of o)n(l)&&(yield l)}return t?r(e):r}function Ym(e,t){let n=t??e;z(sr(n));function r(o){for(let l of o)if(n(l))return l}return t?r(e):r}function w5(e,t){let n=e;z(n>=0,"Count must be a non-negative number");function*r(o){let l=0;for(let i of o){if(l>=n)break;yield i,l++}}return t===void 0?o=>r(o):r(e)}function xn(e){return e?il(e):il}function il(e){let{value:t}=e[Symbol.iterator]().next();return t}function Jm(e,t){let n=e;z(sr(n));function*r(o){for(let l of o)yield n(l)}return t?r(e):r}function _m(e,t){let n=t??e;z(sr(n));function r(o){for(let l of o)if(n(l))return!0;return!1}return t?r(e):r}function ll(e){return e?Array.from(e):t=>Array.from(t)}function eg(e){return e?new Set(e):t=>new Set(t)}function W(e,t,n){let r=typeof t=="symbol"?t:Symbol.for(t);return e.hasOwnProperty(r)||Object.defineProperty(e,r,{enumerable:!1,writable:!1,value:n()}),e[r]}function v5(...e){let t=100;return e.length===2?t=id(e[0],e[1]):e.length===1&&(t=e[0]),new Promise(n=>{setTimeout(()=>{n("LIKEC4_DELAY")},t??100)})}function bo(...e){let t=new Set;for(let n of e)for(let r of n)t.add(r);return t}function Xt(e,...t){let n=new Set;if(e.size===0)return n;let r=Xe(t,2)?(0,Ul.intersection)(...t):t[0];if(r.size===0)return n;for(let o of e)r.has(o)&&n.add(o);return n}function To(e,t){if(e.size===0)return new Set;if(t.size===0)return new Set(e);let n=new Set;for(let r of e)t.has(r)||n.add(r);return n}function ko(e,t){return e.size===t.size&&[...e].every(n=>t.has(n))}function tg(e,t){return(0,Ul.symmetricDifference)(e,t)}function ng(e){return z(typeof e=="object"&&$c(e),"objectHash: value must be an object"),Xd(e)}function cs(e){let t=5381,n=e.length;z(n>0,"stringHash: empty string");for(let r=0;r<n;r++)t=t*33^e.charCodeAt(r);return(t>>>0).toString(36)}function rg(){return jm().use(j2).use(z2).use(q2).use(Em,{allowDangerousHtml:!0}).use(nf,Pl({attributes:{"*":["className"],svg:["width","height","viewBox","fill","ariaHidden"],path:["d","fill","stroke","strokeWidth","strokeLinecap","strokeLinejoin"]},tagNames:["svg","g","path","div"]},lo)).use(Tu,{allowDangerousHtml:!0})}function og(e){return(""+rg().processSync(e)).trim()}function ig(e){return hr(Na(e),{includeHtml:!1,includeImageAlt:!1})}const lg={tomato9:"#e54d2e"},ag={red9:"#e5484d"},sg={ruby9:"#e54666"},cg={crimson9:"#e93d82"},dg={pink9:"#d6409f"},fg={purple9:"#8e4ec6"},ug={violet9:"#6e56cf"},hg={indigo9:"#3e63dd"},pg={blue9:"#0090ff"},mg={teal9:"#12a594"},gg={grass9:"#46a758"},yg={lime9:"#bdee63"},xg={yellow9:"#ffe629"},bg={amber9:"#ffc53d"},Tg={orange9:"#f76b15"},{min:kg,max:wg}=Math;var kt=(e,t=0,n=1)=>kg(wg(t,e),n),Uo=e=>{e._clipped=!1,e._unclipped=e.slice(0);for(let t=0;t<=3;t++)t<3?((e[t]<0||e[t]>255)&&(e._clipped=!0),e[t]=kt(e[t],0,255)):t===3&&(e[t]=kt(e[t],0,1));return e};const ds={};for(let e of["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"])ds[`[object ${e}]`]=e.toLowerCase();function Z(e){return ds[Object.prototype.toString.call(e)]||"object"}var K=(e,t=null)=>e.length>=3?Array.prototype.slice.call(e):Z(e[0])=="object"&&t?t.split("").filter(n=>e[0][n]!==void 0).map(n=>e[0][n]):e[0].slice(0),Qt=e=>{if(e.length<2)return null;let t=e.length-1;return Z(e[t])=="string"?e[t].toLowerCase():null};const{PI:yr,min:fs,max:us}=Math,Ne=e=>Math.round(e*100)/100,wo=e=>Math.round(e*100)/100,Ve=yr*2,jr=yr/3,vg=yr/180,Bg=180/yr;function hs(e){return[...e.slice(0,3).reverse(),...e.slice(3)]}var q={format:{},autodetect:[]},A=class{constructor(...t){let n=this;if(Z(t[0])==="object"&&t[0].constructor&&t[0].constructor===this.constructor)return t[0];let r=Qt(t),o=!1;if(!r){o=!0,q.sorted||=(q.autodetect=q.autodetect.sort((l,i)=>i.p-l.p),!0);for(let l of q.autodetect)if(r=l.test(...t),r)break}if(q.format[r])n._rgb=Uo(q.format[r].apply(null,o?t:t.slice(0,-1)));else throw Error("unknown format: "+t);n._rgb.length===3&&n._rgb.push(1)}toString(){return Z(this.hex)=="function"?this.hex():`[${this._rgb.join(",")}]`}};const H=(...e)=>new A(...e);H.version="3.2.0";const It={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},Eg=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,Ag=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,ps=e=>{if(e.match(Eg)){(e.length===4||e.length===7)&&(e=e.substr(1)),e.length===3&&(e=e.split(""),e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);let t=parseInt(e,16);return[t>>16,t>>8&255,t&255,1]}if(e.match(Ag)){(e.length===5||e.length===9)&&(e=e.substr(1)),e.length===4&&(e=e.split(""),e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);let t=parseInt(e,16);return[t>>24&255,t>>16&255,t>>8&255,Math.round((t&255)/255*100)/100]}throw Error(`unknown hex color: ${e}`)},{round:Sn}=Math,ms=(...e)=>{let[t,n,r,o]=K(e,"rgba"),l=Qt(e)||"auto";o===void 0&&(o=1),l==="auto"&&(l=o<1?"rgba":"rgb"),t=Sn(t),n=Sn(n),r=Sn(r);let i="000000"+(t<<16|n<<8|r).toString(16);i=i.substr(i.length-6);let a="0"+Sn(o*255).toString(16);switch(a=a.substr(a.length-2),l.toLowerCase()){case"rgba":return`#${i}${a}`;case"argb":return`#${a}${i}`;default:return`#${i}`}};A.prototype.name=function(){let e=ms(this._rgb,"rgb");for(let t of Object.keys(It))if(It[t]===e)return t.toLowerCase();return e},q.format.named=e=>{if(e=e.toLowerCase(),It[e])return ps(It[e]);throw Error("unknown color name: "+e)},q.autodetect.push({p:5,test:(e,...t)=>{if(!t.length&&Z(e)==="string"&&It[e.toLowerCase()])return"named"}}),A.prototype.alpha=function(e,t=!1){return e!==void 0&&Z(e)==="number"?t?(this._rgb[3]=e,this):new A([this._rgb[0],this._rgb[1],this._rgb[2],e],"rgb"):this._rgb[3]},A.prototype.clipped=function(){return this._rgb._clipped||!1};const Ke={Kn:18,labWhitePoint:"d65",Xn:.95047,Yn:1,Zn:1.08883,kE:216/24389,kKE:8,kK:24389/27,RefWhiteRGB:{X:.95047,Y:1,Z:1.08883},MtxRGB2XYZ:{m00:.4124564390896922,m01:.21267285140562253,m02:.0193338955823293,m10:.357576077643909,m11:.715152155287818,m12:.11919202588130297,m20:.18043748326639894,m21:.07217499330655958,m22:.9503040785363679},MtxXYZ2RGB:{m00:3.2404541621141045,m01:-.9692660305051868,m02:.055643430959114726,m10:-1.5371385127977166,m11:1.8760108454466942,m12:-.2040259135167538,m20:-.498531409556016,m21:.041556017530349834,m22:1.0572251882231791},As:.9414285350000001,Bs:1.040417467,Cs:1.089532651,MtxAdaptMa:{m00:.8951,m01:-.7502,m02:.0389,m10:.2664,m11:1.7135,m12:-.0685,m20:-.1614,m21:.0367,m22:1.0296},MtxAdaptMaI:{m00:.9869929054667123,m01:.43230526972339456,m02:-.008528664575177328,m10:-.14705425642099013,m11:.5183602715367776,m12:.04004282165408487,m20:.15996265166373125,m21:.0492912282128556,m22:.9684866957875502}},Dg=new Map([["a",[1.0985,.35585]],["b",[1.0985,.35585]],["c",[.98074,1.18232]],["d50",[.96422,.82521]],["d55",[.95682,.92149]],["d65",[.95047,1.08883]],["e",[1,1,1]],["f2",[.99186,.67393]],["f7",[.95041,1.08747]],["f11",[1.00962,.6435]],["icc",[.96422,.82521]]]);function Ye(e){let t=Dg.get(String(e).toLowerCase());if(!t)throw Error("unknown Lab illuminant "+e);Ke.labWhitePoint=e,Ke.Xn=t[0],Ke.Zn=t[1]}function bn(){return Ke.labWhitePoint}const Wo=(...e)=>{e=K(e,"lab");let[t,n,r]=e,[o,l,i]=Fg(t,n,r),[a,s,c]=gs(o,l,i);return[a,s,c,e.length>3?e[3]:1]},Fg=(e,t,n)=>{let{kE:r,kK:o,kKE:l,Xn:i,Yn:a,Zn:s}=Ke,c=(e+16)/116,d=.002*t+c,f=c-.005*n,u=d*d*d,h=f*f*f,p=u>r?u:(116*d-16)/o,T=e>l?((e+16)/116)**3:e/o,b=h>r?h:(116*f-16)/o;return[p*i,T*a,b*s]},Zr=e=>{let t=Math.sign(e);return e=Math.abs(e),(e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055)*t},gs=(e,t,n)=>{let{MtxAdaptMa:r,MtxAdaptMaI:o,MtxXYZ2RGB:l,RefWhiteRGB:i,Xn:a,Yn:s,Zn:c}=Ke,d=a*r.m00+s*r.m10+c*r.m20,f=a*r.m01+s*r.m11+c*r.m21,u=a*r.m02+s*r.m12+c*r.m22,h=i.X*r.m00+i.Y*r.m10+i.Z*r.m20,p=i.X*r.m01+i.Y*r.m11+i.Z*r.m21,T=i.X*r.m02+i.Y*r.m12+i.Z*r.m22,b=(e*r.m00+t*r.m10+n*r.m20)*(h/d),y=(e*r.m01+t*r.m11+n*r.m21)*(p/f),F=(e*r.m02+t*r.m12+n*r.m22)*(T/u),B=b*o.m00+y*o.m10+F*o.m20,O=b*o.m01+y*o.m11+F*o.m21,S=b*o.m02+y*o.m12+F*o.m22,v=Zr(B*l.m00+O*l.m10+S*l.m20),L=Zr(B*l.m01+O*l.m11+S*l.m21),k=Zr(B*l.m02+O*l.m12+S*l.m22);return[v*255,L*255,k*255]},Qo=(...e)=>{let[t,n,r,...o]=K(e,"rgb"),[l,i,a]=ys(t,n,r),[s,c,d]=Ng(l,i,a);return[s,c,d,...o.length>0&&o[0]<1?[o[0]]:[]]};function Ng(e,t,n){let{Xn:r,Yn:o,Zn:l,kE:i,kK:a}=Ke,s=e/r,c=t/o,d=n/l,f=s>i?s**(1/3):(a*s+16)/116,u=c>i?c**(1/3):(a*c+16)/116,h=d>i?d**(1/3):(a*d+16)/116;return[116*u-16,500*(f-u),200*(u-h)]}function $r(e){let t=Math.sign(e);return e=Math.abs(e),(e<=.04045?e/12.92:((e+.055)/1.055)**2.4)*t}const ys=(e,t,n)=>{e=$r(e/255),t=$r(t/255),n=$r(n/255);let{MtxRGB2XYZ:r,MtxAdaptMa:o,MtxAdaptMaI:l,Xn:i,Yn:a,Zn:s,As:c,Bs:d,Cs:f}=Ke,u=e*r.m00+t*r.m10+n*r.m20,h=e*r.m01+t*r.m11+n*r.m21,p=e*r.m02+t*r.m12+n*r.m22,T=i*o.m00+a*o.m10+s*o.m20,b=i*o.m01+a*o.m11+s*o.m21,y=i*o.m02+a*o.m12+s*o.m22,F=u*o.m00+h*o.m10+p*o.m20,B=u*o.m01+h*o.m11+p*o.m21,O=u*o.m02+h*o.m12+p*o.m22;return F*=T/c,B*=b/d,O*=y/f,u=F*l.m00+B*l.m10+O*l.m20,h=F*l.m01+B*l.m11+O*l.m21,p=F*l.m02+B*l.m12+O*l.m22,[u,h,p]};A.prototype.lab=function(){return Qo(this._rgb)};const Cg=(...e)=>new A(...e,"lab");Object.assign(H,{lab:Cg,getLabWhitePoint:bn,setLabWhitePoint:Ye}),q.format.lab=Wo,q.autodetect.push({p:2,test:(...e)=>{if(e=K(e,"lab"),Z(e)==="array"&&e.length===3)return"lab"}}),A.prototype.darken=function(e=1){let t=this,n=t.lab();return n[0]-=Ke.Kn*e,new A(n,"lab").alpha(t.alpha(),!0)},A.prototype.brighten=function(e=1){return this.darken(-e)},A.prototype.darker=A.prototype.darken,A.prototype.brighter=A.prototype.brighten,A.prototype.get=function(e){let[t,n]=e.split("."),r=this[t]();if(n){let o=t.indexOf(n)-(t.substr(0,2)==="ok"?2:0);if(o>-1)return r[o];throw Error(`unknown channel ${n} in mode ${t}`)}else return r};const{pow:Rg}=Math;A.prototype.luminance=function(e,t="rgb"){if(e!==void 0&&Z(e)==="number"){if(e===0)return new A([0,0,0,this._rgb[3]],"rgb");if(e===1)return new A([255,255,255,this._rgb[3]],"rgb");let n=this.luminance(),r=20,o=(l,i)=>{let a=l.interpolate(i,.5,t),s=a.luminance();return Math.abs(e-s)<1e-7||!r--?a:s>e?o(l,a):o(a,i)};return new A([...(n>e?o(new A([0,0,0]),this):o(this,new A([255,255,255]))).rgb(),this._rgb[3]])}return Og(...this._rgb.slice(0,3))};const Og=(e,t,n)=>(e=Hr(e),t=Hr(t),n=Hr(n),.2126*e+.7152*t+.0722*n),Hr=e=>(e/=255,e<=.03928?e/12.92:Rg((e+.055)/1.055,2.4));var pe={},jt=(e,t,n=.5,...r)=>{let o=r[0]||"lrgb";if(!pe[o]&&!r.length&&(o=Object.keys(pe)[0]),!pe[o])throw Error(`interpolation mode ${o} is not defined`);return Z(e)!=="object"&&(e=new A(e)),Z(t)!=="object"&&(t=new A(t)),pe[o](e,t,n).alpha(e.alpha()+n*(t.alpha()-e.alpha()))};A.prototype.mix=A.prototype.interpolate=function(e,t=.5,...n){return jt(this,e,t,...n)},A.prototype.premultiply=function(e=!1){let t=this._rgb,n=t[3];return e?(this._rgb=[t[0]*n,t[1]*n,t[2]*n,n],this):new A([t[0]*n,t[1]*n,t[2]*n,n],"rgb")};const{sin:Lg,cos:Ig}=Math,xs=(...e)=>{let[t,n,r]=K(e,"lch");return isNaN(r)&&(r=0),r*=vg,[t,Ig(r)*n,Lg(r)*n]},Vo=(...e)=>{e=K(e,"lch");let[t,n,r]=e,[o,l,i]=xs(t,n,r),[a,s,c]=Wo(o,l,i);return[a,s,c,e.length>3?e[3]:1]},Sg=(...e)=>Vo(...hs(K(e,"hcl"))),{sqrt:Pg,atan2:zg,round:Mg}=Math,bs=(...e)=>{let[t,n,r]=K(e,"lab"),o=Pg(n*n+r*r),l=(zg(r,n)*Bg+360)%360;return Mg(o*1e4)===0&&(l=NaN),[t,o,l]},vo=(...e)=>{let[t,n,r,...o]=K(e,"rgb"),[l,i,a]=Qo(t,n,r),[s,c,d]=bs(l,i,a);return[s,c,d,...o.length>0&&o[0]<1?[o[0]]:[]]};A.prototype.lch=function(){return vo(this._rgb)},A.prototype.hcl=function(){return hs(vo(this._rgb))};const Gg=(...e)=>new A(...e,"lch"),qg=(...e)=>new A(...e,"hcl");Object.assign(H,{lch:Gg,hcl:qg}),q.format.lch=Vo,q.format.hcl=Sg,["lch","hcl"].forEach(e=>q.autodetect.push({p:2,test:(...t)=>{if(t=K(t,e),Z(t)==="array"&&t.length===3)return e}})),A.prototype.saturate=function(e=1){let t=this,n=t.lch();return n[1]+=Ke.Kn*e,n[1]<0&&(n[1]=0),new A(n,"lch").alpha(t.alpha(),!0)},A.prototype.desaturate=function(e=1){return this.saturate(-e)},A.prototype.set=function(e,t,n=!1){let[r,o]=e.split("."),l=this[r]();if(o){let i=r.indexOf(o)-(r.substr(0,2)==="ok"?2:0);if(i>-1){if(Z(t)=="string")switch(t.charAt(0)){case"+":l[i]+=+t;break;case"-":l[i]+=+t;break;case"*":l[i]*=+t.substr(1);break;case"/":l[i]/=+t.substr(1);break;default:l[i]=+t}else if(Z(t)==="number")l[i]=t;else throw Error("unsupported value for Color.set");let a=new A(l,r);return n?(this._rgb=a._rgb,this):a}throw Error(`unknown channel ${o} in mode ${r}`)}else return l},A.prototype.tint=function(e=.5,...t){return jt(this,"white",e,...t)},A.prototype.shade=function(e=.5,...t){return jt(this,"black",e,...t)};const Kg=(e,t,n)=>{let r=e._rgb,o=t._rgb;return new A(r[0]+n*(o[0]-r[0]),r[1]+n*(o[1]-r[1]),r[2]+n*(o[2]-r[2]),"rgb")};pe.rgb=Kg;const{sqrt:Ur,pow:Ct}=Math,Xg=(e,t,n)=>{let[r,o,l]=e._rgb,[i,a,s]=t._rgb;return new A(Ur(Ct(r,2)*(1-n)+Ct(i,2)*n),Ur(Ct(o,2)*(1-n)+Ct(a,2)*n),Ur(Ct(l,2)*(1-n)+Ct(s,2)*n),"rgb")};pe.lrgb=Xg;const jg=(e,t,n)=>{let r=e.lab(),o=t.lab();return new A(r[0]+n*(o[0]-r[0]),r[1]+n*(o[1]-r[1]),r[2]+n*(o[2]-r[2]),"lab")};pe.lab=jg;var Vt=(e,t,n,r)=>{let o,l;r==="hsl"?(o=e.hsl(),l=t.hsl()):r==="hsv"?(o=e.hsv(),l=t.hsv()):r==="hcg"?(o=e.hcg(),l=t.hcg()):r==="hsi"?(o=e.hsi(),l=t.hsi()):r==="lch"||r==="hcl"?(r="hcl",o=e.hcl(),l=t.hcl()):r==="oklch"&&(o=e.oklch().reverse(),l=t.oklch().reverse());let i,a,s,c,d,f;(r.substr(0,1)==="h"||r==="oklch")&&([i,s,d]=o,[a,c,f]=l);let u,h,p,T;return!isNaN(i)&&!isNaN(a)?(T=a>i&&a-i>180?a-(i+360):a<i&&i-a>180?a+360-i:a-i,h=i+n*T):isNaN(i)?isNaN(a)?h=NaN:(h=a,(d==1||d==0)&&r!="hsv"&&(u=c)):(h=i,(f==1||f==0)&&r!="hsv"&&(u=s)),u===void 0&&(u=s+n*(c-s)),p=d+n*(f-d),r==="oklch"?new A([p,u,h],r):new A([h,u,p],r)};const al=(e,t,n)=>Vt(e,t,n,"lch");pe.lch=al,pe.hcl=al;const Zg=e=>{if(Z(e)=="number"&&e>=0&&e<=16777215)return[e>>16,e>>8&255,e&255,1];throw Error("unknown num color: "+e)},$g=(...e)=>{let[t,n,r]=K(e,"rgb");return(t<<16)+(n<<8)+r};A.prototype.num=function(){return $g(this._rgb)};const Hg=(...e)=>new A(...e,"num");Object.assign(H,{num:Hg}),q.format.num=Zg,q.autodetect.push({p:5,test:(...e)=>{if(e.length===1&&Z(e[0])==="number"&&e[0]>=0&&e[0]<=16777215)return"num"}});const Ug=(e,t,n)=>{let r=e.num();return new A(r+n*(t.num()-r),"num")};pe.num=Ug;const{floor:Wg}=Math,Qg=(...e)=>{e=K(e,"hcg");let[t,n,r]=e,o,l,i;r*=255;let a=n*255;if(n===0)o=l=i=r;else{t===360&&(t=0),t>360&&(t-=360),t<0&&(t+=360),t/=60;let s=Wg(t),c=t-s,d=r*(1-n),f=d+a*(1-c),u=d+a*c,h=d+a;switch(s){case 0:[o,l,i]=[h,u,d];break;case 1:[o,l,i]=[f,h,d];break;case 2:[o,l,i]=[d,h,u];break;case 3:[o,l,i]=[d,f,h];break;case 4:[o,l,i]=[u,d,h];break;case 5:[o,l,i]=[h,d,f];break}}return[o,l,i,e.length>3?e[3]:1]},Vg=(...e)=>{let[t,n,r]=K(e,"rgb"),o=fs(t,n,r),l=us(t,n,r),i=l-o,a=i*100/255,s=o/(255-i)*100,c;return i===0?c=NaN:(t===l&&(c=(n-r)/i),n===l&&(c=2+(r-t)/i),r===l&&(c=4+(t-n)/i),c*=60,c<0&&(c+=360)),[c,a,s]};A.prototype.hcg=function(){return Vg(this._rgb)};const Yg=(...e)=>new A(...e,"hcg");H.hcg=Yg,q.format.hcg=Qg,q.autodetect.push({p:1,test:(...e)=>{if(e=K(e,"hcg"),Z(e)==="array"&&e.length===3)return"hcg"}});const Jg=(e,t,n)=>Vt(e,t,n,"hcg");pe.hcg=Jg;const{cos:Rt}=Math,_g=(...e)=>{e=K(e,"hsi");let[t,n,r]=e,o,l,i;return isNaN(t)&&(t=0),isNaN(n)&&(n=0),t>360&&(t-=360),t<0&&(t+=360),t/=360,t<1/3?(i=(1-n)/3,o=(1+n*Rt(Ve*t)/Rt(jr-Ve*t))/3,l=1-(i+o)):t<2/3?(t-=1/3,o=(1-n)/3,l=(1+n*Rt(Ve*t)/Rt(jr-Ve*t))/3,i=1-(o+l)):(t-=2/3,l=(1-n)/3,i=(1+n*Rt(Ve*t)/Rt(jr-Ve*t))/3,o=1-(l+i)),o=kt(r*o*3),l=kt(r*l*3),i=kt(r*i*3),[o*255,l*255,i*255,e.length>3?e[3]:1]},{min:e0,sqrt:t0,acos:n0}=Math,r0=(...e)=>{let[t,n,r]=K(e,"rgb");t/=255,n/=255,r/=255;let o,l=e0(t,n,r),i=(t+n+r)/3,a=i>0?1-l/i:0;return a===0?o=NaN:(o=(t-n+(t-r))/2,o/=t0((t-n)*(t-n)+(t-r)*(n-r)),o=n0(o),r>n&&(o=Ve-o),o/=Ve),[o*360,a,i]};A.prototype.hsi=function(){return r0(this._rgb)};const o0=(...e)=>new A(...e,"hsi");H.hsi=o0,q.format.hsi=_g,q.autodetect.push({p:2,test:(...e)=>{if(e=K(e,"hsi"),Z(e)==="array"&&e.length===3)return"hsi"}});const i0=(e,t,n)=>Vt(e,t,n,"hsi");pe.hsi=i0;const Bo=(...e)=>{e=K(e,"hsl");let[t,n,r]=e,o,l,i;if(n===0)o=l=i=r*255;else{let a=[0,0,0],s=[0,0,0],c=r<.5?r*(1+n):r+n-r*n,d=2*r-c,f=t/360;a[0]=f+1/3,a[1]=f,a[2]=f-1/3;for(let u=0;u<3;u++)a[u]<0&&(a[u]+=1),a[u]>1&&--a[u],6*a[u]<1?s[u]=d+(c-d)*6*a[u]:2*a[u]<1?s[u]=c:3*a[u]<2?s[u]=d+(c-d)*(2/3-a[u])*6:s[u]=d;[o,l,i]=[s[0]*255,s[1]*255,s[2]*255]}return e.length>3?[o,l,i,e[3]]:[o,l,i,1]},Ts=(...e)=>{e=K(e,"rgba");let[t,n,r]=e;t/=255,n/=255,r/=255;let o=fs(t,n,r),l=us(t,n,r),i=(l+o)/2,a,s;return l===o?(a=0,s=NaN):a=i<.5?(l-o)/(l+o):(l-o)/(2-l-o),t==l?s=(n-r)/(l-o):n==l?s=2+(r-t)/(l-o):r==l&&(s=4+(t-n)/(l-o)),s*=60,s<0&&(s+=360),e.length>3&&e[3]!==void 0?[s,a,i,e[3]]:[s,a,i]};A.prototype.hsl=function(){return Ts(this._rgb)};const l0=(...e)=>new A(...e,"hsl");H.hsl=l0,q.format.hsl=Bo,q.autodetect.push({p:2,test:(...e)=>{if(e=K(e,"hsl"),Z(e)==="array"&&e.length===3)return"hsl"}});const a0=(e,t,n)=>Vt(e,t,n,"hsl");pe.hsl=a0;const{floor:s0}=Math,c0=(...e)=>{e=K(e,"hsv");let[t,n,r]=e,o,l,i;if(r*=255,n===0)o=l=i=r;else{t===360&&(t=0),t>360&&(t-=360),t<0&&(t+=360),t/=60;let a=s0(t),s=t-a,c=r*(1-n),d=r*(1-n*s),f=r*(1-n*(1-s));switch(a){case 0:[o,l,i]=[r,f,c];break;case 1:[o,l,i]=[d,r,c];break;case 2:[o,l,i]=[c,r,f];break;case 3:[o,l,i]=[c,d,r];break;case 4:[o,l,i]=[f,c,r];break;case 5:[o,l,i]=[r,c,d];break}}return[o,l,i,e.length>3?e[3]:1]},{min:d0,max:f0}=Math,u0=(...e)=>{e=K(e,"rgb");let[t,n,r]=e,o=d0(t,n,r),l=f0(t,n,r),i=l-o,a,s,c;return c=l/255,l===0?(a=NaN,s=0):(s=i/l,t===l&&(a=(n-r)/i),n===l&&(a=2+(r-t)/i),r===l&&(a=4+(t-n)/i),a*=60,a<0&&(a+=360)),[a,s,c]};A.prototype.hsv=function(){return u0(this._rgb)};const h0=(...e)=>new A(...e,"hsv");H.hsv=h0,q.format.hsv=c0,q.autodetect.push({p:2,test:(...e)=>{if(e=K(e,"hsv"),Z(e)==="array"&&e.length===3)return"hsv"}});const p0=(e,t,n)=>Vt(e,t,n,"hsv");pe.hsv=p0;function or(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(i=>[i]));let r=t[0].length,o=t[0].map((i,a)=>t.map(s=>s[a])),l=e.map(i=>o.map(a=>Array.isArray(i)?i.reduce((s,c,d)=>s+c*(a[d]||0),0):a.reduce((s,c)=>s+c*i,0)));return n===1&&(l=l[0]),r===1?l.map(i=>i[0]):l}const Yo=(...e)=>{e=K(e,"lab");let[t,n,r,...o]=e,[l,i,a]=m0([t,n,r]),[s,c,d]=gs(l,i,a);return[s,c,d,...o.length>0&&o[0]<1?[o[0]]:[]]};function m0(e){return or([[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],or([[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],e).map(t=>t**3))}const Jo=(...e)=>{let[t,n,r,...o]=K(e,"rgb");return[...g0(ys(t,n,r)),...o.length>0&&o[0]<1?[o[0]]:[]]};function g0(e){return or([[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],or([[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],e).map(t=>Math.cbrt(t)))}A.prototype.oklab=function(){return Jo(this._rgb)};const y0=(...e)=>new A(...e,"oklab");Object.assign(H,{oklab:y0}),q.format.oklab=Yo,q.autodetect.push({p:2,test:(...e)=>{if(e=K(e,"oklab"),Z(e)==="array"&&e.length===3)return"oklab"}});const x0=(e,t,n)=>{let r=e.oklab(),o=t.oklab();return new A(r[0]+n*(o[0]-r[0]),r[1]+n*(o[1]-r[1]),r[2]+n*(o[2]-r[2]),"oklab")};pe.oklab=x0;const b0=(e,t,n)=>Vt(e,t,n,"oklch");pe.oklch=b0;const{pow:Wr,sqrt:Qr,PI:Vr,cos:sl,sin:cl,atan2:T0}=Math;var k0=(e,t="lrgb",n=null)=>{let r=e.length;n||=Array.from(Array(r)).map(()=>1);let o=r/n.reduce(function(f,u){return f+u});if(n.forEach((f,u)=>{n[u]*=o}),e=e.map(f=>new A(f)),t==="lrgb")return w0(e,n);let l=e.shift(),i=l.get(t),a=[],s=0,c=0;for(let f=0;f<i.length;f++)if(i[f]=(i[f]||0)*n[0],a.push(isNaN(i[f])?0:n[0]),t.charAt(f)==="h"&&!isNaN(i[f])){let u=i[f]/180*Vr;s+=sl(u)*n[0],c+=cl(u)*n[0]}let d=l.alpha()*n[0];e.forEach((f,u)=>{let h=f.get(t);d+=f.alpha()*n[u+1];for(let p=0;p<i.length;p++)if(!isNaN(h[p]))if(a[p]+=n[u+1],t.charAt(p)==="h"){let T=h[p]/180*Vr;s+=sl(T)*n[u+1],c+=cl(T)*n[u+1]}else i[p]+=h[p]*n[u+1]});for(let f=0;f<i.length;f++)if(t.charAt(f)==="h"){let u=T0(c/a[f],s/a[f])/Vr*180;for(;u<0;)u+=360;for(;u>=360;)u-=360;i[f]=u}else i[f]=i[f]/a[f];return d/=r,new A(i,t).alpha(d>.99999?1:d,!0)};const w0=(e,t)=>{let n=e.length,r=[0,0,0,0];for(let o=0;o<e.length;o++){let l=e[o],i=t[o]/n,a=l._rgb;r[0]+=Wr(a[0],2)*i,r[1]+=Wr(a[1],2)*i,r[2]+=Wr(a[2],2)*i,r[3]+=a[3]*i}return r[0]=Qr(r[0]),r[1]=Qr(r[1]),r[2]=Qr(r[2]),r[3]>.9999999&&(r[3]=1),new A(Uo(r))},{pow:v0}=Math;function ir(e){let t="rgb",n=H("#ccc"),r=0,o=[0,1],l=[0,1],i=[],a=[0,0],s=!1,c=[],d=!1,f=0,u=1,h=!1,p={},T=!0,b=1,y=function(k){if(k||=["#fff","#000"],k&&Z(k)==="string"&&H.brewer&&H.brewer[k.toLowerCase()]&&(k=H.brewer[k.toLowerCase()]),Z(k)==="array"){k.length===1&&(k=[k[0],k[0]]),k=k.slice(0);for(let R=0;R<k.length;R++)k[R]=H(k[R]);i.length=0;for(let R=0;R<k.length;R++)i.push(R/(k.length-1))}return v(),c=k},F=function(k){if(s!=null){let R=s.length-1,x=0;for(;x<R&&k>=s[x];)x++;return x-1}return 0},B=k=>k,O=k=>k,S=function(k,R){let x,E;if(R??=!1,isNaN(k)||k===null)return n;E=R?k:s&&s.length>2?F(k)/(s.length-2):u===f?1:(k-f)/(u-f),E=O(E),R||(E=B(E)),b!==1&&(E=v0(E,b)),E=a[0]+E*(1-a[0]-a[1]),E=kt(E,0,1);let N=Math.floor(E*1e4);if(T&&p[N])x=p[N];else{if(Z(c)==="array")for(let I=0;I<i.length;I++){let j=i[I];if(E<=j){x=c[I];break}if(E>=j&&I===i.length-1){x=c[I];break}if(E>j&&E<i[I+1]){E=(E-j)/(i[I+1]-j),x=H.interpolate(c[I],c[I+1],E,t);break}}else Z(c)==="function"&&(x=c(E));T&&(p[N]=x)}return x};var v=()=>p={};y(e);let L=function(k){let R=H(S(k));return d&&R[d]?R[d]():R};return L.classes=function(k){if(k!=null){if(Z(k)==="array")s=k,o=[k[0],k[k.length-1]];else{let R=H.analyze(o);s=k===0?[R.min,R.max]:H.limits(R,"e",k)}return L}return s},L.domain=function(k){if(!arguments.length)return l;l=k.slice(0),f=k[0],u=k[k.length-1],i=[];let R=c.length;if(k.length===R&&f!==u)for(let x of Array.from(k))i.push((x-f)/(u-f));else{for(let x=0;x<R;x++)i.push(x/(R-1));if(k.length>2){let x=k.map((N,I)=>I/(k.length-1)),E=k.map(N=>(N-f)/(u-f));E.every((N,I)=>x[I]===N)||(O=N=>{if(N<=0||N>=1)return N;let I=0;for(;N>=E[I+1];)I++;let j=(N-E[I])/(E[I+1]-E[I]);return x[I]+j*(x[I+1]-x[I])})}}return o=[f,u],L},L.mode=function(k){return arguments.length?(t=k,v(),L):t},L.range=function(k,R){return y(k),L},L.out=function(k){return d=k,L},L.spread=function(k){return arguments.length?(r=k,L):r},L.correctLightness=function(k){return k??=!0,h=k,v(),B=h?function(R){let x=S(0,!0).lab()[0],E=S(1,!0).lab()[0],N=x>E,I=S(R,!0).lab()[0],j=x+(E-x)*R,X=I-j,ee=0,te=1,me=20;for(;Math.abs(X)>.01&&me-- >0;)(function(){return N&&(X*=-1),X<0?(ee=R,R+=(te-R)*.5):(te=R,R+=(ee-R)*.5),I=S(R,!0).lab()[0],X=I-j})();return R}:R=>R,L},L.padding=function(k){return k==null?a:(Z(k)==="number"&&(k=[k,k]),a=k,L)},L.colors=function(k,R){arguments.length<2&&(R="hex");let x=[];if(arguments.length===0)x=c.slice(0);else if(k===1)x=[L(.5)];else if(k>1){let E=o[0],N=o[1]-E;x=B0(0,k).map(I=>L(E+I/(k-1)*N))}else{e=[];let E=[];if(s&&s.length>2)for(let N=1,I=s.length,j=1<=I;j?N<I:N>I;j?N++:N--)E.push((s[N-1]+s[N])*.5);else E=o;x=E.map(N=>L(N))}return H[R]&&(x=x.map(E=>E[R]())),x},L.cache=function(k){return k==null?T:(T=k,L)},L.gamma=function(k){return k==null?b:(b=k,L)},L.nodata=function(k){return k==null?n:(n=H(k),L)},L}function B0(e,t,n){let r=[],o=e<t,l=t;for(let i=e;o?i<l:i>l;o?i++:i--)r.push(i);return r}const E0=function(e){let t=[1,1];for(let n=1;n<e;n++){let r=[1];for(let o=1;o<=t.length;o++)r[o]=(t[o]||0)+t[o-1];t=r}return t},A0=function(e){let t,n,r,o;if(e=e.map(l=>new A(l)),e.length===2)[n,r]=e.map(l=>l.lab()),t=function(l){return new A([0,1,2].map(i=>n[i]+l*(r[i]-n[i])),"lab")};else if(e.length===3)[n,r,o]=e.map(l=>l.lab()),t=function(l){return new A([0,1,2].map(i=>(1-l)*(1-l)*n[i]+2*(1-l)*l*r[i]+l*l*o[i]),"lab")};else if(e.length===4){let l;[n,r,o,l]=e.map(i=>i.lab()),t=function(i){return new A([0,1,2].map(a=>(1-i)*(1-i)*(1-i)*n[a]+3*(1-i)*(1-i)*i*r[a]+3*(1-i)*i*i*o[a]+i*i*i*l[a]),"lab")}}else if(e.length>=5){let l,i,a;l=e.map(s=>s.lab()),a=e.length-1,i=E0(a),t=function(s){let c=1-s;return new A([0,1,2].map(d=>l.reduce((f,u,h)=>f+i[h]*c**(a-h)*s**h*u[d],0)),"lab")}}else throw RangeError("No point in running bezier with only one color.");return t};var D0=e=>{let t=A0(e);return t.scale=()=>ir(t),t};const{round:dl}=Math;A.prototype.rgb=function(e=!0){return e===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(dl)},A.prototype.rgba=function(e=!0){return this._rgb.slice(0,4).map((t,n)=>n<3?e===!1?t:dl(t):t)};const F0=(...e)=>new A(...e,"rgb");Object.assign(H,{rgb:F0}),q.format.rgb=(...e)=>{let t=K(e,"rgba");return t[3]===void 0&&(t[3]=1),t},q.autodetect.push({p:3,test:(...e)=>{if(e=K(e,"rgba"),Z(e)==="array"&&(e.length===3||e.length===4&&Z(e[3])=="number"&&e[3]>=0&&e[3]<=1))return"rgb"}});const Oe=(e,t,n)=>{if(!Oe[n])throw Error("unknown blend mode "+n);return Oe[n](e,t)},lt=e=>(t,n)=>{let r=H(n).rgb(),o=H(t).rgb();return H.rgb(e(r,o))},at=e=>(t,n)=>{let r=[];return r[0]=e(t[0],n[0]),r[1]=e(t[1],n[1]),r[2]=e(t[2],n[2]),r},N0=e=>e,C0=(e,t)=>e*t/255,R0=(e,t)=>e>t?t:e,O0=(e,t)=>e>t?e:t,L0=(e,t)=>255*(1-(1-e/255)*(1-t/255)),I0=(e,t)=>t<128?2*e*t/255:255*(1-2*(1-e/255)*(1-t/255)),S0=(e,t)=>255*(1-(1-t/255)/(e/255)),P0=(e,t)=>e===255?255:(e=t/255*255/(1-e/255),e>255?255:e);Oe.normal=lt(at(N0)),Oe.multiply=lt(at(C0)),Oe.screen=lt(at(L0)),Oe.overlay=lt(at(I0)),Oe.darken=lt(at(R0)),Oe.lighten=lt(at(O0)),Oe.dodge=lt(at(P0)),Oe.burn=lt(at(S0));const{pow:z0,sin:M0,cos:G0}=Math;function q0(e=300,t=-1.5,n=1,r=1,o=[0,1]){let l=0,i;Z(o)==="array"?i=o[1]-o[0]:(i=0,o=[o,o]);let a=function(s){let c=Ve*((e+120)/360+t*s),d=z0(o[0]+i*s,r),f=(l===0?n:n[0]+s*l)*d*(1-d)/2,u=G0(c),h=M0(c),p=d+f*(-.14861*u+1.78277*h),T=d+f*(-.29227*u-.90649*h),b=d+1.97294*u*f;return H(Uo([p*255,T*255,b*255,1]))};return a.start=function(s){return s==null?e:(e=s,a)},a.rotations=function(s){return s==null?t:(t=s,a)},a.gamma=function(s){return s==null?r:(r=s,a)},a.hue=function(s){return s==null?n:(n=s,Z(n)==="array"?(l=n[1]-n[0],l===0&&(n=n[1])):l=0,a)},a.lightness=function(s){return s==null?o:(Z(s)==="array"?(o=s,i=s[1]-s[0]):(o=[s,s],i=0),a)},a.scale=()=>H.scale(a),a.hue(n),a}const{floor:K0,random:X0}=Math;var j0=(e=X0)=>{let t="#";for(let n=0;n<6;n++)t+="0123456789abcdef".charAt(K0(e()*16));return new A(t,"hex")};const{log:fl,pow:Z0,floor:$0,abs:H0}=Math;function ks(e,t=null){let n={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return Z(e)==="object"&&(e=Object.values(e)),e.forEach(r=>{t&&Z(r)==="object"&&(r=r[t]),r!=null&&!isNaN(r)&&(n.values.push(r),n.sum+=r,r<n.min&&(n.min=r),r>n.max&&(n.max=r),n.count+=1)}),n.domain=[n.min,n.max],n.limits=(r,o)=>ws(n,r,o),n}function ws(e,t="equal",n=7){Z(e)=="array"&&(e=ks(e));let{min:r,max:o}=e,l=e.values.sort((a,s)=>a-s);if(n===1)return[r,o];let i=[];if(t.substr(0,1)==="c"&&(i.push(r),i.push(o)),t.substr(0,1)==="e"){i.push(r);for(let a=1;a<n;a++)i.push(r+a/n*(o-r));i.push(o)}else if(t.substr(0,1)==="l"){if(r<=0)throw Error("Logarithmic scales are only possible for values > 0");let a=Math.LOG10E*fl(r),s=Math.LOG10E*fl(o);i.push(r);for(let c=1;c<n;c++)i.push(Z0(10,a+c/n*(s-a)));i.push(o)}else if(t.substr(0,1)==="q"){i.push(r);for(let a=1;a<n;a++){let s=(l.length-1)*a/n,c=$0(s);if(c===s)i.push(l[c]);else{let d=s-c;i.push(l[c]*(1-d)+l[c+1]*d)}}i.push(o)}else if(t.substr(0,1)==="k"){let a,s=l.length,c=Array(s),d=Array(n),f=!0,u=0,h=null;h=[],h.push(r);for(let b=1;b<n;b++)h.push(r+b/n*(o-r));for(h.push(o);f;){for(let y=0;y<n;y++)d[y]=0;for(let y=0;y<s;y++){let F=l[y],B=Number.MAX_VALUE,O;for(let S=0;S<n;S++){let v=H0(h[S]-F);v<B&&(B=v,O=S),d[O]++,c[y]=O}}let b=Array(n);for(let y=0;y<n;y++)b[y]=null;for(let y=0;y<s;y++)a=c[y],b[a]===null?b[a]=l[y]:b[a]+=l[y];for(let y=0;y<n;y++)b[y]*=1/d[y];f=!1;for(let y=0;y<n;y++)if(b[y]!==h[y]){f=!0;break}h=b,u++,u>200&&(f=!1)}let p={};for(let b=0;b<n;b++)p[b]=[];for(let b=0;b<s;b++)a=c[b],p[a].push(l[b]);let T=[];for(let b=0;b<n;b++)T.push(p[b][0]),T.push(p[b][p[b].length-1]);T=T.sort((b,y)=>b-y),i.push(T[0]);for(let b=1;b<T.length;b+=2){let y=T[b];!isNaN(y)&&i.indexOf(y)===-1&&i.push(y)}}return i}var U0=(e,t)=>{e=new A(e),t=new A(t);let n=e.luminance(),r=t.luminance();return n>r?(n+.05)/(r+.05):(r+.05)/(n+.05)};const ul=.027,hl=1.14,Pn=.022;var W0=(e,t)=>{e=new A(e),t=new A(t),e.alpha()<1&&(e=jt(t,e,e.alpha(),"rgb"));let n=pl(...e.rgb()),r=pl(...t.rgb()),o=n>=Pn?n:n+(Pn-n)**1.414,l=r>=Pn?r:r+(Pn-r)**1.414,i=l**.56-o**.57,a=l**.65-o**.62,s=Math.abs(l-o)<5e-4?0:o<l?i*hl:a*hl;return(Math.abs(s)<.1?0:s>0?s-ul:s+ul)*100};function pl(e,t,n){return .2126729*(e/255)**2.4+.7151522*(t/255)**2.4+.072175*(n/255)**2.4}const{sqrt:Ue,pow:oe,min:Q0,max:V0,atan2:ml,abs:gl,cos:zn,sin:yl,exp:Y0,PI:xl}=Math;function J0(e,t,n=1,r=1,o=1){var l=function(we){return 360*we/(2*xl)},i=function(we){return 2*xl*we/360};e=new A(e),t=new A(t);let[a,s,c]=Array.from(e.lab()),[d,f,u]=Array.from(t.lab()),h=(a+d)/2,p=(Ue(oe(s,2)+oe(c,2))+Ue(oe(f,2)+oe(u,2)))/2,T=.5*(1-Ue(oe(p,7)/(oe(p,7)+oe(25,7)))),b=s*(1+T),y=f*(1+T),F=Ue(oe(b,2)+oe(c,2)),B=Ue(oe(y,2)+oe(u,2)),O=(F+B)/2,S=l(ml(c,b)),v=l(ml(u,y)),L=S>=0?S:S+360,k=v>=0?v:v+360,R=gl(L-k)>180?(L+k+360)/2:(L+k)/2,x=1-.17*zn(i(R-30))+.24*zn(i(2*R))+.32*zn(i(3*R+6))-.2*zn(i(4*R-63)),E=k-L;E=gl(E)<=180?E:k<=L?E+360:E-360,E=2*Ue(F*B)*yl(i(E)/2);let N=d-a,I=B-F,j=1+.015*oe(h-50,2)/Ue(20+oe(h-50,2)),X=1+.045*O,ee=1+.015*O*x,te=30*Y0(-oe((R-275)/25,2)),me=-(2*Ue(oe(O,7)/(oe(O,7)+oe(25,7))))*yl(2*i(te));return V0(0,Q0(100,Ue(oe(N/(n*j),2)+oe(I/(r*X),2)+oe(E/(o*ee),2)+me*(I/(r*X))*(E/(o*ee)))))}function _0(e,t,n="lab"){e=new A(e),t=new A(t);let r=e.get(n),o=t.get(n),l=0;for(let i in r){let a=(r[i]||0)-(o[i]||0);l+=a*a}return Math.sqrt(l)}var ey=(...e)=>{try{return new A(...e),!0}catch{return!1}},ty={cool(){return ir([H.hsl(180,1,.9),H.hsl(250,.7,.4)])},hot(){return ir(["#000","#f00","#ff0","#fff"]).mode("rgb")}};const Eo={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},vs=Object.keys(Eo),bl=new Map(vs.map(e=>[e.toLowerCase(),e])),ny=typeof Proxy=="function"?new Proxy(Eo,{get(e,t){let n=t.toLowerCase();if(bl.has(n))return e[bl.get(n)]},getOwnPropertyNames(){return Object.getOwnPropertyNames(vs)}}):Eo,ry=(...e)=>{e=K(e,"cmyk");let[t,n,r,o]=e,l=e.length>4?e[4]:1;return o===1?[0,0,0,l]:[t>=1?0:255*(1-t)*(1-o),n>=1?0:255*(1-n)*(1-o),r>=1?0:255*(1-r)*(1-o),l]},{max:Tl}=Math,oy=(...e)=>{let[t,n,r]=K(e,"rgb");t/=255,n/=255,r/=255;let o=1-Tl(t,Tl(n,r)),l=o<1?1/(1-o):0;return[(1-t-o)*l,(1-n-o)*l,(1-r-o)*l,o]};A.prototype.cmyk=function(){return oy(this._rgb)};const iy=(...e)=>new A(...e,"cmyk");Object.assign(H,{cmyk:iy}),q.format.cmyk=ry,q.autodetect.push({p:2,test:(...e)=>{if(e=K(e,"cmyk"),Z(e)==="array"&&e.length===4)return"cmyk"}});const ly=(...e)=>{let t=K(e,"hsla"),n=Qt(e)||"lsa";return t[0]=Ne(t[0]||0)+"deg",t[1]=Ne(t[1]*100)+"%",t[2]=Ne(t[2]*100)+"%",n==="hsla"||t.length>3&&t[3]<1?(t[3]="/ "+(t.length>3?t[3]:1),n="hsla"):t.length=3,`${n.substr(0,3)}(${t.join(" ")})`},ay=(...e)=>{let t=K(e,"lab"),n=Qt(e)||"lab";return t[0]=Ne(t[0])+"%",t[1]=Ne(t[1]),t[2]=Ne(t[2]),n==="laba"||t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`lab(${t.join(" ")})`},sy=(...e)=>{let t=K(e,"lch"),n=Qt(e)||"lab";return t[0]=Ne(t[0])+"%",t[1]=Ne(t[1]),t[2]=isNaN(t[2])?"none":Ne(t[2])+"deg",n==="lcha"||t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`lch(${t.join(" ")})`},cy=(...e)=>{let t=K(e,"lab");return t[0]=Ne(t[0]*100)+"%",t[1]=wo(t[1]),t[2]=wo(t[2]),t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`oklab(${t.join(" ")})`},Bs=(...e)=>{let[t,n,r,...o]=K(e,"rgb"),[l,i,a]=Jo(t,n,r),[s,c,d]=bs(l,i,a);return[s,c,d,...o.length>0&&o[0]<1?[o[0]]:[]]},dy=(...e)=>{let t=K(e,"lch");return t[0]=Ne(t[0]*100)+"%",t[1]=wo(t[1]),t[2]=isNaN(t[2])?"none":Ne(t[2])+"deg",t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`oklch(${t.join(" ")})`},{round:Yr}=Math,fy=(...e)=>{let t=K(e,"rgba"),n=Qt(e)||"rgb";if(n.substr(0,3)==="hsl")return ly(Ts(t),n);if(n.substr(0,3)==="lab"){let r=bn();Ye("d50");let o=ay(Qo(t),n);return Ye(r),o}if(n.substr(0,3)==="lch"){let r=bn();Ye("d50");let o=sy(vo(t),n);return Ye(r),o}return n.substr(0,5)==="oklab"?cy(Jo(t)):n.substr(0,5)==="oklch"?dy(Bs(t)):(t[0]=Yr(t[0]),t[1]=Yr(t[1]),t[2]=Yr(t[2]),(n==="rgba"||t.length>3&&t[3]<1)&&(t[3]="/ "+(t.length>3?t[3]:1),n="rgba"),`${n.substr(0,3)}(${t.slice(0,n==="rgb"?3:4).join(" ")})`)},Es=(...e)=>{e=K(e,"lch");let[t,n,r,...o]=e,[l,i,a]=xs(t,n,r),[s,c,d]=Yo(l,i,a);return[s,c,d,...o.length>0&&o[0]<1?[o[0]]:[]]},Je="((?:-?\\d+)|(?:-?\\d+(?:\\.\\d+)?)%|none)",ze="((?:-?(?:\\d+(?:\\.\\d*)?|\\.\\d+)%?)|none)",lr="((?:-?(?:\\d+(?:\\.\\d*)?|\\.\\d+)%)|none)",_o="\\s*,\\s*",xr="((?:-?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:deg)?)|none)",Yt="\\s*(?:\\/\\s*((?:[01]|[01]?\\.\\d+)|\\d+(?:\\.\\d+)?%))?",As=RegExp("^rgba?\\(\\s*"+[Je,Je,Je].join("\\s+")+Yt+"\\)$"),Ds=RegExp("^rgb\\(\\s*"+[Je,Je,Je].join(_o)+"\\s*\\)$"),Fs=RegExp("^rgba\\(\\s*"+[Je,Je,Je,ze].join(_o)+"\\s*\\)$"),Ns=RegExp("^hsla?\\(\\s*"+[xr,lr,lr].join("\\s+")+Yt+"\\)$"),Cs=RegExp("^hsl?\\(\\s*"+[xr,lr,lr].join(_o)+"\\s*\\)$"),Rs=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Os=RegExp("^lab\\(\\s*"+[ze,ze,ze].join("\\s+")+Yt+"\\)$"),Ls=RegExp("^lch\\(\\s*"+[ze,ze,xr].join("\\s+")+Yt+"\\)$"),Is=RegExp("^oklab\\(\\s*"+[ze,ze,ze].join("\\s+")+Yt+"\\)$"),Ss=RegExp("^oklch\\(\\s*"+[ze,ze,xr].join("\\s+")+Yt+"\\)$"),{round:Ps}=Math,Ot=e=>e.map((t,n)=>n<=2?kt(Ps(t),0,255):t),ie=(e,t=0,n=100,r=!1)=>(typeof e=="string"&&e.endsWith("%")&&(e=parseFloat(e.substring(0,e.length-1))/100,e=r?t+(e+1)*.5*(n-t):t+e*(n-t)),+e),ge=(e,t)=>e==="none"?t:e,Ao=e=>{if(e=e.toLowerCase().trim(),e==="transparent")return[0,0,0,0];let t;if(q.format.named)try{return q.format.named(e)}catch{}if((t=e.match(As))||(t=e.match(Ds))){let n=t.slice(1,4);for(let o=0;o<3;o++)n[o]=+ie(ge(n[o],0),0,255);n=Ot(n);let r=t[4]===void 0?1:+ie(t[4],0,1);return n[3]=r,n}if(t=e.match(Fs)){let n=t.slice(1,5);for(let r=0;r<4;r++)n[r]=+ie(n[r],0,255);return n}if((t=e.match(Ns))||(t=e.match(Cs))){let n=t.slice(1,4);n[0]=+ge(n[0].replace("deg",""),0),n[1]=ie(ge(n[1],0),0,100)*.01,n[2]=ie(ge(n[2],0),0,100)*.01;let r=Ot(Bo(n));return r[3]=t[4]===void 0?1:+ie(t[4],0,1),r}if(t=e.match(Rs)){let n=t.slice(1,4);n[1]*=.01,n[2]*=.01;let r=Bo(n);for(let o=0;o<3;o++)r[o]=Ps(r[o]);return r[3]=+t[4],r}if(t=e.match(Os)){let n=t.slice(1,4);n[0]=ie(ge(n[0],0),0,100),n[1]=ie(ge(n[1],0),-125,125,!0),n[2]=ie(ge(n[2],0),-125,125,!0);let r=bn();Ye("d50");let o=Ot(Wo(n));return Ye(r),o[3]=t[4]===void 0?1:+ie(t[4],0,1),o}if(t=e.match(Ls)){let n=t.slice(1,4);n[0]=ie(n[0],0,100),n[1]=ie(ge(n[1],0),0,150,!1),n[2]=+ge(n[2].replace("deg",""),0);let r=bn();Ye("d50");let o=Ot(Vo(n));return Ye(r),o[3]=t[4]===void 0?1:+ie(t[4],0,1),o}if(t=e.match(Is)){let n=t.slice(1,4);n[0]=ie(ge(n[0],0),0,1),n[1]=ie(ge(n[1],0),-.4,.4,!0),n[2]=ie(ge(n[2],0),-.4,.4,!0);let r=Ot(Yo(n));return r[3]=t[4]===void 0?1:+ie(t[4],0,1),r}if(t=e.match(Ss)){let n=t.slice(1,4);n[0]=ie(ge(n[0],0),0,1),n[1]=ie(ge(n[1],0),0,.4,!1),n[2]=+ge(n[2].replace("deg",""),0);let r=Ot(Es(n));return r[3]=t[4]===void 0?1:+ie(t[4],0,1),r}};Ao.test=e=>As.test(e)||Ns.test(e)||Os.test(e)||Ls.test(e)||Is.test(e)||Ss.test(e)||Ds.test(e)||Fs.test(e)||Cs.test(e)||Rs.test(e)||e==="transparent",A.prototype.css=function(e){return fy(this._rgb,e)};const uy=(...e)=>new A(...e,"css");H.css=uy,q.format.css=Ao,q.autodetect.push({p:5,test:(e,...t)=>{if(!t.length&&Z(e)==="string"&&Ao.test(e))return"css"}}),q.format.gl=(...e)=>{let t=K(e,"rgba");return t[0]*=255,t[1]*=255,t[2]*=255,t};const hy=(...e)=>new A(...e,"gl");H.gl=hy,A.prototype.gl=function(){let e=this._rgb;return[e[0]/255,e[1]/255,e[2]/255,e[3]]},A.prototype.hex=function(e){return ms(this._rgb,e)};const py=(...e)=>new A(...e,"hex");H.hex=py,q.format.hex=ps,q.autodetect.push({p:4,test:(e,...t)=>{if(!t.length&&Z(e)==="string"&&[3,4,5,6,7,8,9].indexOf(e.length)>=0)return"hex"}});const{log:Mn}=Math,zs=e=>{let t=e/100,n,r,o;return t<66?(n=255,r=t<6?0:-155.25485562709179-.44596950469579133*(r=t-2)+104.49216199393888*Mn(r),o=t<20?0:-254.76935184120902+.8274096064007395*(o=t-10)+115.67994401066147*Mn(o)):(n=351.97690566805693+.114206453784165*(n=t-55)-40.25366309332127*Mn(n),r=325.4494125711974+.07943456536662342*(r=t-50)-28.0852963507957*Mn(r),o=255),[n,r,o,1]},{round:my}=Math,gy=(...e)=>{let t=K(e,"rgb"),n=t[0],r=t[2],o=1e3,l=4e4,i;for(;l-o>.4;){i=(l+o)*.5;let a=zs(i);a[2]/a[0]>=r/n?l=i:o=i}return my(i)};A.prototype.temp=A.prototype.kelvin=A.prototype.temperature=function(){return gy(this._rgb)};const Jr=(...e)=>new A(...e,"temp");Object.assign(H,{temp:Jr,kelvin:Jr,temperature:Jr}),q.format.temp=q.format.kelvin=q.format.temperature=zs,A.prototype.oklch=function(){return Bs(this._rgb)};const yy=(...e)=>new A(...e,"oklch");Object.assign(H,{oklch:yy}),q.format.oklch=Es,q.autodetect.push({p:2,test:(...e)=>{if(e=K(e,"oklch"),Z(e)==="array"&&e.length===3)return"oklch"}}),Object.assign(H,{analyze:ks,average:k0,bezier:D0,blend:Oe,brewer:ny,Color:A,colors:It,contrast:U0,contrastAPCA:W0,cubehelix:q0,deltaE:J0,distance:_0,input:q,interpolate:jt,limits:ws,mix:jt,random:j0,scale:ir,scales:ty,valid:ey});var Fe=H;const Do=[.96,.907,.805,.697,.605,.547,.518,.445,.395,.34],kl=[.32,.16,.08,.04,0,0,.04,.08,.16,.32];function xy(e){let t=e.get("hsl.l");return Do.reduce((n,r)=>Math.abs(r-t)<Math.abs(n-t)?r:n)}function by(e){let t=Fe(e),n=xy(t),r=Do.findIndex(l=>l===n),o=Do.map(l=>t.set("hsl.l",l)).map(l=>Fe(l)).map((l,i)=>{let a=kl[i]-kl[r];return a>=0?l.saturate(a):l.desaturate(a*-1)});return o[r]=Fe(e),{baseColorIndex:r,colors:o}}function Ty(e){return by(e).colors.map(t=>t.hex())}function ei(e){return td(e,t=>t===void 0)}function Zt(e){return e.summary??e.description}function $t(e){return e.description??e.summary}function wl(e,t){return e[xt]===t}const xt="_stage",rn="_type",Fo="_layout";vn({DeploymentFqn:()=>Ay,EdgeId:()=>Cy,Fqn:()=>Ey,GlobalFqn:()=>ti,GroupElementKind:()=>Ms,MarkdownOrString:()=>wy,NodeId:()=>Ny,NoneIcon:()=>By,ProjectId:()=>ky,RelationId:()=>Fy,StepEdgeKind:()=>Oy,ViewId:()=>Dy,extractStep:()=>Xs,flattenMarkdownOrString:()=>vy,isGlobalFqn:()=>qs,isGroupElementKind:()=>Gs,isStepEdgeId:()=>br,splitGlobalFqn:()=>Ks,stepEdgeId:()=>Ry});function ky(e){return e}function wy(e){return typeof e=="string"?{txt:e}:e}function vy(e){if(qt(e))return null;let t=Le(e)?e:e.txt??e.md;return Se(t?.trim())?t:null}const By="none";function Ey(e,t){return t?t+"."+e:e}const Ms="@group";function Gs(e){return e.kind===Ms}function Ay(e,t){return t?t+"."+e:e}function Dy(e){return e}function Fy(e){return e}function ti(e,t){return z(typeof e=="string"&&e!=""),"@"+e+"."+t}function qs(e){return e.startsWith("@")}function Ks(e){if(!e.startsWith("@"))return[null,e];let t=e.indexOf(".");if(t<2)throw Error("Invalid global FQN");return[e.slice(1,t),e.slice(t+1)]}function Ny(e){return e}function Cy(e){return e}function Ry(e,t){let n=`step-${String(e).padStart(2,"0")}`;return t?`${n}.${t}`:n}const Oy="@step";function br(e){return e.startsWith("step-")}function Xs(e){if(!br(e))throw Error(`Invalid step edge id: ${e}`);return parseFloat(e.slice(5))}let vt;(function(e){function t(s){return"model"in s&&!("project"in s)}e.isElementRef=t;function n(s){return"project"in s&&"model"in s}e.isImportRef=n;function r(s){if(Le(s))throw Error(`Expected FqnRef, got: "${s}"`);if(n(s))return ti(s.project,s.model);if(t(s))return s.model;throw Error("Expected FqnRef.ModelRef or FqnRef.ImportRef")}e.flatten=r;function o(s){return t(s)||n(s)}e.isModelRef=o;function l(s){return"deployment"in s&&"element"in s}e.isInsideInstanceRef=l;function i(s){return"deployment"in s&&!("element"in s)}e.isDeploymentElementRef=i;function a(s){return i(s)||l(s)}e.isDeploymentRef=a})(vt||={});let on;(function(e){function t(d){return"wildcard"in d&&d.wildcard===!0}e.isWildcard=t;function n(d){return"ref"in d&&vt.isModelRef(d.ref)}e.isModelRef=n;function r(d){return"ref"in d&&vt.isDeploymentRef(d.ref)}e.isDeploymentRef=r;function o(d){return"elementKind"in d&&"isEqual"in d}e.isElementKindExpr=o;function l(d){return"elementTag"in d&&"isEqual"in d}e.isElementTagExpr=l;function i(d){return"where"in d&&s(d.where.expr)}e.isWhere=i;function a(d){return"custom"in d&&(s(d.custom.expr)||i(d.custom.expr))}e.isCustom=a;function s(d){return t(d)||n(d)||r(d)||o(d)||l(d)}e.is=s;function c(d){return a(d)&&(d=d.custom.expr),i(d)&&(d=d.where.expr),d}e.unwrap=c})(on||={});let ln;(function(e){function t(c){return"source"in c&&"target"in c}e.isDirect=t;function n(c){return"incoming"in c}e.isIncoming=n;function r(c){return"outgoing"in c}e.isOutgoing=r;function o(c){return"inout"in c}e.isInOut=o;function l(c){return"where"in c&&(t(c.where.expr)||n(c.where.expr)||r(c.where.expr)||o(c.where.expr))}e.isWhere=l;function i(c){return"customRelation"in c}e.isCustom=i;function a(c){return t(c)||n(c)||r(c)||o(c)}e.is=a;function s(c){return i(c)&&(c=c.customRelation.expr),l(c)&&(c=c.where.expr),c}e.unwrap=s})(ln||={});let Ly;(function(e){function t(i){return"where"in i}e.isWhere=t;function n(i){return ln.isWhere(i)}e.isRelationWhere=n;function r(i){return on.isWhere(i)}e.isFqnExprWhere=r;function o(i){return on.is(i)||on.isWhere(i)||on.isCustom(i)}e.isFqnExpr=o;function l(i){return ln.is(i)||ln.isWhere(i)||ln.isCustom(i)}e.isRelation=l})(Ly||={});let an;(function(e){function t(c){return"wildcard"in c&&c.wildcard===!0}e.isWildcard=t;function n(c){return"ref"in c&&vt.isModelRef(c.ref)}e.isModelRef=n;function r(c){return"elementKind"in c&&"isEqual"in c}e.isElementKindExpr=r;function o(c){return"elementTag"in c&&"isEqual"in c}e.isElementTagExpr=o;function l(c){return"where"in c&&a(c.where.expr)}e.isWhere=l;function i(c){return"custom"in c&&(a(c.custom.expr)||l(c.custom.expr))}e.isCustom=i;function a(c){return t(c)||n(c)||r(c)||o(c)}e.is=a;function s(c){return i(c)&&(c=c.custom.expr),l(c)&&(c=c.where.expr),c}e.unwrap=s})(an||={});let sn;(function(e){function t(c){return"source"in c&&"target"in c}e.isDirect=t;function n(c){return"incoming"in c}e.isIncoming=n;function r(c){return"outgoing"in c}e.isOutgoing=r;function o(c){return"inout"in c}e.isInOut=o;function l(c){return"where"in c&&(t(c.where.expr)||n(c.where.expr)||r(c.where.expr)||o(c.where.expr))}e.isWhere=l;function i(c){return"customRelation"in c}e.isCustom=i;function a(c){return t(c)||n(c)||r(c)||o(c)}e.is=a;function s(c){return i(c)&&(c=c.customRelation.expr),l(c)&&(c=c.where.expr),c}e.unwrap=s})(sn||={});let Iy;(function(e){function t(i){return"where"in i}e.isWhere=t;function n(i){return sn.isWhere(i)}e.isRelationWhere=n;function r(i){return an.isWhere(i)}e.isFqnExprWhere=r;function o(i){return an.is(i)||an.isWhere(i)||an.isCustom(i)}e.isFqnExpr=o;function l(i){return sn.is(i)||sn.isWhere(i)||sn.isCustom(i)}e.isRelationExpr=l})(Iy||={});function Sy(e){return Se(e.kind)&&!Se(e.element)}const vl={fill:"#3b82f6",stroke:"#2563eb",hiContrast:"#eff6ff",loContrast:"#bfdbfe"},Bl={fill:"#0284c7",stroke:"#0369a1",hiContrast:"#f0f9ff",loContrast:"#B6ECF7"},El={fill:"#64748b",stroke:"#475569",hiContrast:"#f8fafc",loContrast:"#cbd5e1"},Py={primary:vl,blue:vl,secondary:Bl,sky:Bl,muted:El,slate:El,gray:{fill:"#737373",stroke:"#525252",hiContrast:"#fafafa",loContrast:"#d4d4d4"},red:{fill:"#AC4D39",stroke:"#853A2D",hiContrast:"#FBD3CB",loContrast:"#f5b2a3"},green:{fill:"#428a4f",stroke:"#2d5d39",hiContrast:"#f8fafc",loContrast:"#c2f0c2"},amber:{fill:"#A35829",stroke:"#7E451D",hiContrast:"#FFE0C2",loContrast:"#f9b27c"},indigo:{fill:"#6366f1",stroke:"#4f46e5",hiContrast:"#eef2ff",loContrast:"#c7d2fe"}},zy={line:"#8D8D8D",labelBg:"#18191B",label:"#C9C9C9"},Al={line:"#64748b",labelBg:"#0f172a",label:"#cbd5e1"},Dl={line:"#3b82f6",labelBg:"#172554",label:"#60a5fa"},Fl={line:"#0ea5e9",labelBg:"#082f49",label:"#38bdf8"},My={amber:{line:"#b45309",labelBg:"#78350f",label:"#FFE0C2"},blue:Dl,gray:zy,green:{line:"#15803d",labelBg:"#052e16",label:"#22c55e"},indigo:{line:"#6366f1",labelBg:"#1e1b4b",label:"#818cf8"},muted:Al,primary:Dl,red:{line:"#AC4D39",labelBg:"#b91c1c",label:"#f5b2a3"},secondary:Fl,sky:Fl,slate:Al},Gy={sizes:{xs:{width:180,height:100},sm:{width:240,height:135},md:{width:320,height:180},lg:{width:420,height:234},xl:{width:520,height:290}},spacing:{xs:8,sm:10,md:16,lg:24,xl:32},textSizes:{xs:13.33,sm:16,md:19.2,lg:23.04,xl:27.65},iconSizes:{xs:24,sm:36,md:60,lg:82,xl:90}},E5=["rectangle","person","browser","mobile","cylinder","storage","queue","bucket","document","component"],qy=["amber","blue","gray","slate","green","indigo","muted","primary","red","secondary","sky"],A5=["tomato","grass","blue","ruby","orange","indigo","pink","teal","purple","amber","crimson","red","lime","yellow","violet"],js={tomato:lg.tomato9,grass:gg.grass9,blue:pg.blue9,ruby:sg.ruby9,orange:Tg.orange9,indigo:hg.indigo9,pink:dg.pink9,teal:mg.teal9,purple:fg.purple9,amber:bg.amber9,crimson:cg.crimson9,red:ag.red9,lime:yg.lime9,yellow:xg.yellow9,violet:ug.violet9};function Ky(e){return e in js}const Xy={colors:qy.reduce((e,t)=>(e[t]={elements:Py[t],relationships:My[t]},e),{}),...Gy};function jy(e){z(Fe.valid(e),`Invalid color: ${e}`);let t=Ty(e),n=t[6],r=Zy(n);return{elements:{fill:n,stroke:t[7],...r},relationships:{line:t[4],label:t[3],labelBg:t[9]}}}function Zy(e){let t=Fe(e),n=t.brighten(2),r=t.darken(2),o,l,i,a;do o=n,l=r,n=n.brighten(1),r=r.darken(1),i=Fe.contrastAPCA(t,n),a=Fe.contrastAPCA(t,r);while(Math.abs(i)<60&&Math.abs(a)<60&&(!Yn(n,o)||!Yn(r,l)));return Math.abs(i)>Math.abs(a)?{hiContrast:n.brighten(.4).hex(),loContrast:n.hex()}:{hiContrast:r.darken(.4).hex(),loContrast:r.hex()}}function $y(e,t){let n=t??6,r=Fe(e.fill),o=Fe(e.stroke),l=r.luminance()>.8,i=Me(fd(Fe.scale(l?[r.darken(.02).desaturate(.05),r.darken(.1).desaturate(.1)]:[r.shade(.12,"lch").desaturate(.05),r.shade(.35,"lch").desaturate(.4)]).mode("oklch").correctLightness().colors(n,null),Fe.scale(l?[o.darken(.04).desaturate(.05),o.darken(.12).desaturate(.1)]:[o.shade(.15,"lch").desaturate(.08),o.shade(.4,"lch").desaturate(.4)]).mode("oklch").correctLightness().colors(n,null)),pn(([a,s])=>({...e,fill:a.hex(),stroke:s.hex()})));return z(i.length===n,`Expected ${n} colors, got ${i.length}`),i}const Hy={color:"primary",size:"md",opacity:15,shape:"rectangle",group:{opacity:15,border:"dashed"},relationship:{color:"gray",line:"dashed",arrow:"normal"}},Uy=Xy,jn={theme:Uy,defaults:Hy};var Wy=class No{theme;defaults;static DEFAULT=new No(jn);static from(t,n){if(!t&&!n)return this.DEFAULT;let{customCss:r,theme:o,defaults:l}={...t},i=Pl({theme:o},{defaults:{...l}},{theme:{colors:{...n}}},jn);return qt(r?.content)&&Yn(i,jn)?this.DEFAULT:new No(i,r)}constructor(t,n){this.config=t,this.customCss=n,this.theme=t.theme,this.defaults=t.defaults}get fingerprint(){return W(this,"fingerprint",()=>ng({config:this.config,customCss:this.customCss}))}get elementColors(){return this.theme.colors[this.defaults.color].elements}get relationshipColors(){return this.theme.colors[this.defaults.relationship.color].relationships}get groupColors(){let t=this.defaults.group?.color;if(!t)return this.elementColors;if(!this.isThemeColor(t))throw Error(`Default group color not found in theme: ${t}`);return W(this,"defaultGroup",()=>({...this.elementColors,...this.theme.colors[t].elements}))}isDefaultColor(t){return t===this.defaults.color}colors(t){return this.computeFrom(t??this.defaults.color)}compoundColorsCache=new So.default(t=>new de.default(n=>$y(t,n)));colorsForCompounds(t,n){return this.compoundColorsCache.get(t).get(n??6)}fontSize(t){return t??=this.defaults.text??this.defaults.size,this.theme.textSizes[t]}padding(t){return t??=this.defaults.padding??this.defaults.size,this.theme.spacing[t]}iconSize(t){return t??=this.defaults.size,this.theme.iconSizes[t]}isThemeColor(t){return t in this.theme.colors}nodeSizes(t){let n=Qy(t,this.defaults.size);return{sizes:n,values:{sizes:this.theme.sizes[n.size],padding:this.padding(n.padding),textSize:this.fontSize(n.textSize),iconSize:this.iconSize(n.iconSize)}}}computeFrom(t){if(this.isThemeColor(t))return this.theme.colors[t];if(!Fe.valid(t))throw Error(`Invalid color value: "${t}" (not a theme color and not a valid CSS color)`);return jy(t)}equals(t){return t===this?!0:this.constructor===t.constructor?this.fingerprint===t.fingerprint:!1}tagColor(t){return this.isThemeColor(t)?this.theme.colors[t].elements:Ky(t)?this.computeFrom(js[t]).elements:this.computeFrom(t).elements}};function Qy({size:e,padding:t,textSize:n,iconSize:r,...o},l=jn.defaults.size){return e??=l,n??=e,t??=e,r??=e,{...o,size:e,padding:t,textSize:n,iconSize:r}}function D5(e){let t=typeof e=="string"?e:e.color;return t.startsWith("#")||t.startsWith("rgb")}function Vy(e){return"tag"in e}function Yy(e){return"kind"in e}function Jy(e){return"metadata"in e}function _y(e){return"participant"in e}function e4(e){return"not"in e}function t4(e){return"and"in e}function n4(e){return"or"in e}function Pt(e){switch(!0){case _y(e):{let t=e.participant;return r4(t,Pt(e.operator))}case Vy(e):{if(Le(e.tag)||"eq"in e.tag){let n=Le(e.tag)?e.tag:e.tag.eq;return r=>Array.isArray(r.tags)&&r.tags.includes(n)}let t=e.tag.neq;return n=>!Array.isArray(n.tags)||!n.tags.includes(t)}case Yy(e):{if(Le(e.kind)||"eq"in e.kind){let n=Le(e.kind)?e.kind:e.kind.eq;return r=>r.kind===n}let t=e.kind.neq;return n=>ne(n.kind)||n.kind!==t}case Jy(e):{let{key:t,value:n}=e.metadata;if(n===void 0)return o=>o.metadata!=null&&t in o.metadata&&o.metadata[t]!=null;if(Le(n)||"eq"in n){let o=Le(n)?n:n.eq;return l=>{if(!l.metadata)return!1;let i=l.metadata[t];return Array.isArray(i)?i.includes(o):i===o}}let r=n.neq;return o=>{if(!o.metadata)return!0;let l=o.metadata[t];return l==null?!0:Array.isArray(l)?!l.includes(r):l!==r}}case e4(e):return ql(Pt(e.not));case t4(e):return vc(e.and.map(Pt));case n4(e):return Ec(e.or.map(Pt));default:rs(e)}}function r4(e,t){return n=>{if(!n.source||!n.target)return!1;switch(e){case"source":return t(n.source);case"target":return t(n.target)}}}function o4(e){return e._type==="element"}function i4(e){return e._type==="dynamic"}function F5(e){return br(e)&&e.includes(".")?e.slice(0,e.indexOf(".")+1):null}const l4=Symbol.for("text"),a4=Symbol.for("html");var ke=class ue{static mdcache=new xi.default(500);static txtcache=new xi.default(500);static getOrCreateFromText(t){if(t=t.trimEnd(),t==="")return ue.EMPTY;let n=ue.txtcache.get(t);return n||(n=new ue({txt:t}),ue.txtcache.set(t,n),n)}static getOrCreateFromMarkdown(t){if(t=t.trimEnd(),t==="")return ue.EMPTY;let n=ue.mdcache.get(t);return n||(n=new ue({md:t}),ue.mdcache.set(t,n),n)}static memoize(t,n,r){return W(t,n,()=>ue.from(r))}static from(t){return t==null||t===ue.EMPTY?ue.EMPTY:t instanceof ue?t:typeof t=="string"?this.getOrCreateFromText(t):"isEmpty"in t&&t.isEmpty?ue.EMPTY:"md"in t?this.getOrCreateFromMarkdown(t.md):this.getOrCreateFromText(t.txt)}static EMPTY=new class extends ue{isEmpty=!0;nonEmpty=!1;isMarkdown=!1;$source=null;constructor(){super({txt:""})}get text(){return null}get md(){return null}get html(){return null}};$source;isEmpty;nonEmpty;isMarkdown;constructor(t){this.isMarkdown=!1,typeof t=="string"?(this.$source={txt:t},this.isEmpty=t.trim()===""):(this.$source=t,this.isEmpty=!0,"md"in t?(this.isEmpty=t.md==="",this.isMarkdown=!0):this.isEmpty=t.txt===""),this.nonEmpty=!this.isEmpty}get text(){if(this.isEmpty||this.$source===null)return"";let t=this.$source;return"txt"in t?t.txt:W(this,l4,()=>ig(t.md))}get md(){if(this.isEmpty||this.$source===null)return"";let t=this.$source;if("md"in t)return t.md;if("txt"in t)return t.txt;rs(t)}get html(){if(this.isEmpty||this.$source===null)return"";let t=this.$source;return"txt"in t?t.txt:W(this,a4,()=>og(t.md))}equals(t){return this===t?!0:t instanceof ue?this.isEmpty&&t.isEmpty?!0:this.isEmpty!==t.isEmpty||this.isMarkdown!==t.isMarkdown?!1:this.isMarkdown?this.$source?.md===t.$source?.md:this.$source?.txt===t.$source?.txt:!1}};function s4(e){return Array.isArray(e)&&e.length===2&&typeof e[0]=="number"&&typeof e[1]=="number"}function N5(e){return s4(e)?{x:e[0],y:e[1]}:[e.x,e.y]}const C5={center({x:e,y:t,width:n,height:r}){return{x:e+n/2,y:t+r/2}},toPoints({x:e,y:t,width:n,height:r}){return[{x:e,y:t},{x:e+n,y:t},{x:e+n,y:t+r},{x:e,y:t+r}]},fromPoints(e){let{x1:t,y1:n,x2:r,y2:o}=c4.fromPoints(e);return{x:t,y:n,width:r-t,height:o-n}},merge(...e){if(z(Xe(e,1),"No boxes provided"),e.length===1)return e[0];let t=e[0].x,n=e[0].y,r=e[0].x+e[0].width,o=e[0].y+e[0].height;for(let l=1;l<e.length;l++){let i=e[l];t=Math.min(t,i.x),n=Math.min(n,i.y),r=Math.max(r,i.x+i.width),o=Math.max(o,i.y+i.height)}return{x:Math.floor(t),y:Math.floor(n),width:Math.round(r-t),height:Math.round(o-n)}},fromRectBox(e){return{x:Math.min(e.x1,e.x2),y:Math.min(e.y1,e.y2),width:Math.abs(e.x2-e.x1),height:Math.abs(e.y2-e.y1)}},toRectBox(e){return{x1:e.x,y1:e.y,x2:e.x+e.width,y2:e.y+e.height}},expand(e,t){return t===0?e:{x:e.x-t,y:e.y-t,width:e.width+t*2,height:e.height+t*2}},shrink(e,t){return t===0?e:{x:e.x+t,y:e.y+t,width:e.width-t*2,height:e.height-t*2}},includes(e,t){return e===t?!0:e.x<=t.x&&e.y<=t.y&&e.x+e.width>=t.x+t.width&&e.y+e.height>=t.y+t.height}},c4={center({x1:e,y1:t,x2:n,y2:r}){return{x:(e+n)/2,y:(t+r)/2}},fromPoints(e){z(e.length>0,"At least one point is required");let t=1/0,n=1/0,r=-1/0,o=-1/0;for(let[l,i]of e)t=Math.min(t,l),n=Math.min(n,i),r=Math.max(r,l),o=Math.max(o,i);return{x1:t,y1:n,x2:r,y2:o}},merge(...e){z(e.length>0,"No boxes provided");let t=1/0,n=1/0,r=-1/0,o=-1/0;for(let l of e)t=Math.min(t,l.x1),n=Math.min(n,l.y1),r=Math.max(r,l.x2),o=Math.max(o,l.y2);return{x1:t,y1:n,x2:r,y2:o}},toBBox(e){return{x:e.x1,y:e.y1,width:e.x2-e.x1,height:e.y2-e.y1}},includes(e,t){return e===t?!0:e.x1<=t.x1&&e.y1<=t.y1&&e.x2>=t.x2&&e.y2>=t.y2}};var _r=class Re{constructor(t,n){this.x=t,this.y=n,z(typeof t=="number"&&!isNaN(t)&&isFinite(t)&&typeof n=="number"&&!isNaN(n)&&isFinite(n),`Invalid arguments for Vector: (${t}, ${n})`)}static create(...t){return t.length===2?new Re(t[0],t[1]):new Re(t[0].x,t[0].y)}static add(t,n){return{x:t.x+n.x,y:t.y+n.y}}static subtract(t,n){return{x:t.x-n.x,y:t.y-n.y}}static multiply(t,n){return{x:t.x*n,y:t.y*n}}static divide(t,n){return{x:t.x/n,y:t.y/n}}static dot(t,n){return t.x*n.x+t.y*n.y}add(t){return new Re(this.x+t.x,this.y+t.y)}subtract(t){return new Re(this.x-t.x,this.y-t.y)}multiply(t){return new Re(this.x*t,this.y*t)}divide(t){return new Re(this.x/t,this.y/t)}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}length(){return this.x===0&&this.y===0?0:Math.sqrt(this.x**2+this.y**2)}normalize(){let t=this.length();return t===0?new Re(0,0):new Re(this.x/t,this.y/t)}round(){return new Re(Math.round(this.x),Math.round(this.y))}trunc(){return new Re(Math.trunc(this.x),Math.trunc(this.y))}toObject(){return{x:this.x,y:this.y}}};function R5(...e){return e.length===1&&e[0]instanceof _r?e[0]:e.length===2?new _r(e[0],e[1]):new _r(e[0].x,e[0].y)}function d4(e){return Me(e,Gl(t=>!!t.notation),vr(mt("notation")),Br(Er(vr(mt("shape")),Br(Er(vr(mt("color")),Br(Er(pn(mt("kind")),cr())),cn(),pn(([t,n])=>({kinds:n,color:t})))),cn(),pi(([t,n])=>n.map(({color:r,kinds:o})=>({shape:t,color:r,kinds:o}))))),cn(),pi(([t,n])=>n.map(({shape:r,color:o,kinds:l})=>({title:t,shape:r,color:o,kinds:l}))),Kl(mt("shape"),mt("title"),[t=>t.kinds.length,"desc"]))}const ae=(e,t)=>e===t||ne(e)&&ne(t)?!1:!Yn(e,t);function f4(e,t){e.color=t.color,e.kind=t.kind,e.navigateTo=t.navigateTo??null,e.links=t.links?[...t.links]:null,e.tags=[...t.tags],ne(t.style.border)?delete e.style.border:e.style.border=t.style.border,Hc(t.style.opacity)?e.style.opacity=t.style.opacity:delete e.style.opacity,ne(t.style.multiple)?delete e.style.multiple:e.style.multiple=t.style.multiple}function u4(e,t,n){if(ae(t.icon??"none",e.icon??"none")){let r=Se(e.icon)&&e.icon!=="none";switch(!0){case(r&&Se(t.icon)&&t.icon!=="none"):return e.icon=t.icon,!0;case(r&&(ne(t.icon)||t.icon==="none")):return e.icon="none",!0;case(!r&&Se(t.icon)&&t.icon!=="none"):return n?(e.icon=t.icon,!0):!1}}return!0}function h4(e,t,n){let r=!0;return ae(e.style.iconColor,t.style.iconColor)&&(ne(t.style.iconColor)?delete e.style.iconColor:e.style.iconColor=t.style.iconColor),ae(e.style.iconSize,t.style.iconSize)&&(n?ne(t.style.iconSize)?delete e.style.iconSize:e.style.iconSize=t.style.iconSize:r=!1),ae(e.style.iconPosition,t.style.iconPosition)&&(n?ne(t.style.iconPosition)?delete e.style.iconPosition:e.style.iconPosition=t.style.iconPosition:r=!1),r}function Tr(e,t){return e?"md"in t?(e.md=t.md,delete e.txt,e):("txt"in t&&(e.txt=t.txt,delete e.md),e):t}function p4(e,t,n){let r=!0;return ae(e.title,t.title)&&(n?e.title=t.title:r=!1),ae(e.description,t.description)&&(ne(t.description)?delete e.description:n?e.description=Tr(e.description,t.description):r=!1),ae(e.technology,t.technology)&&(ne(t.technology)?delete e.technology:n?e.technology=t.technology:r=!1),r}function m4(e,t,n){return e.title=t.title,ne(t.description)?delete e.description:e.description=Tr(e.description,t.description),ne(t.technology)?delete e.technology:e.technology=t.technology,!0}function Zs(e,t){z(e.id===t.id,"applyManualLayout: view ids do not match"),z(e._stage==="layouted","applyManualLayout: expected layouted view"),z(t._stage==="layouted","applyManualLayout: expected layouted snapshot"),z(e._layout!=="manual","applyManualLayout: expected auto-layouted view");let n=new Set;e._type!==t._type&&n.add("type-changed");let r=g4(t.nodes,e.nodes,n),o=y4(t.edges,e.edges,n),l=d4(r);return yt(t,i=>{i.title=e.title??t.title,i.description=e.description??t.description,i.tags=e.tags?[...e.tags]:null,i.links=e.links?[...e.links]:null,i.sourcePath=e.sourcePath,i[Fo]="manual",l&&l.length>0?i.notation={nodes:l}:delete i.notation,i.nodes=Vn(r),i.edges=Vn(o),i4(e)&&i._type==="dynamic"&&(i.variant=e.variant),o4(e)&&i._type==="element"&&(e.viewOf?i.viewOf=e.viewOf:delete i.viewOf,e.extends?i.extends=e.extends:delete i.extends);let a=[...n];Xe(a,1)?i.drifts=a:(i.hash=e.hash,delete i.drifts)})}function g4(e,t,n){let r=new Map(t.map(l=>[l.id,l])),o=e.map(l=>{let i=r.get(l.id);return i?(r.delete(i.id),yt(l,a=>{f4(a,i);let s=new Set,c=l.children.length>0,d=i.children.length>0;(ae(a.modelRef,i.modelRef)||ae(a.deploymentRef,i.deploymentRef))&&s.add("modelRef-changed"),d&&!c&&s.add("became-compound"),!d&&c&&s.add("became-leaf"),ae(a.parent,i.parent)&&s.add("parent-changed");let f=a.width+5>=i.width&&a.height+5>=i.height;ae(a.shape,i.shape)&&(f?a.shape=i.shape:s.add("shape-changed")),h4(a,i,f)||s.add("label-changed"),u4(a,i,f&&d===c)||s.add("label-changed"),(c?m4:p4)(a,i,f)||s.add("label-changed"),ae(a.notes,i.notes)&&(ne(i.notes)?delete a.notes:a.notes=Tr(a.notes,i.notes)),ae(l.notation,i.notation)&&(a.notation=i.notation??null),c&&d&&tg(new Set(l.children),new Set(i.children)).size>0&&s.add("children-changed");let u=[...s];Xe(u,1)?(n.add("nodes-drift"),a.drifts=u):delete a.drifts})):(n.add("nodes-removed"),{...l,drifts:["removed"]})});return r.size>0&&n.add("nodes-added"),o}function y4(e,t,n){let r=new Map(t.map(l=>[l.id,l])),o=e.map(l=>{let i=r.get(l.id)??Me(r.values(),Tt(a=>a.source===l.source&&a.target===l.target),xn());return i&&r.delete(i.id),yt(l,a=>{if(!i){a.drifts=["removed"],n.add("edges-removed");return}let s=new Set,c=l.id===i.id;switch(!0){case(c&&l.source==i.source&&l.target==i.target):ae(a.dir??"forward",i.dir??"forward")&&s.add("direction-changed");break;case(c&&l.source==i.target&&l.target==i.source):l.source!==l.target&&s.add("direction-changed");break;case c:l.source!=i.source&&s.add("source-changed"),l.target!=i.target&&s.add("target-changed");break;default:z(l.id!=i.id,"Unexpected case in edge drift detection, ids should not match"),z(l.source==i.source,"Unexpected case in edge drift detection, sources should match"),z(l.target==i.target,"Unexpected case in edge drift detection, targets should match"),ae(a.dir??"forward",i.dir??"forward")&&s.add("direction-changed");break}if(a.color=i.color,a.line=i.line,a.navigateTo=i.navigateTo??null,a.tags=i.tags?[...i.tags]:null,ae(l.notes,i.notes)&&(ne(l.notes)!==ne(i.notes)&&s.add("notes-changed"),a.notes=i.notes??l.notes),i.astPath?a.astPath=i.astPath:delete a.astPath,ae(mi(l,["label","description","technology","labelBBox"]),mi(i,["label","description","technology","labelBBox"])))switch(!0){case(i.labelBBox&&!l.labelBBox):s.add("label-added");break;case(l.labelBBox&&!i.labelBBox):s.add("label-removed");break;case(!!l.labelBBox&&!!i.labelBBox):i.labelBBox.width*i.labelBBox.height>(l.labelBBox.width+5)*(l.labelBBox.height+5)&&(a.labelBBox.width=Math.round(i.labelBBox.width),a.labelBBox.height=Math.round(i.labelBBox.height)),ae(l.label,i.label)&&(ne(i.label)!==ne(l.label)&&s.add("label-changed"),a.label=i.label??l.label),ae(l.description,i.description)&&(ne(i.description)!==ne(l.description)&&s.add("label-changed"),i.description&&(a.description=Tr(l.description,i.description))),ae(l.technology,i.technology)&&(ne(i.technology)!==ne(l.technology)&&s.add("label-changed"),a.technology=i.technology??l.technology??null);break;default:z(!l.labelBBox,"Unexpected case in edge labelBBox drift detection"),z(!i.labelBBox,"Unexpected case in next labelBBox drift detection");break}let d=[...s];Xe(d,1)?(n.add("edges-drift"),a.drifts=d):delete a.drifts})});return r.size>0&&n.add("edges-added"),o}function x4(e,t){let{drifts:n,...r}=Zs(e,t);if(!n||n.length===0)return yt(e,d=>{delete d.drifts,d[Fo]="auto"});let o=new Set;n.includes("type-changed")&&o.add("type-changed");let l=new Map(r.nodes.map(d=>[d.id,d])),i=new Map(r.edges.map(d=>[d.id,d])),a=e.nodes.map(d=>{let f=l.get(d.id);return f&&l.delete(f.id),yt(d,u=>{if(!f){o.add("nodes-added"),u.drifts=["added"];return}f.drifts?(o.add("nodes-drift"),u.drifts=[...f.drifts]):delete u.drifts})});l.size>0&&o.add("nodes-removed");let s=e.edges.map(d=>{let f=i.get(d.id)??Me(i.values(),Tt(u=>u.source===d.source&&u.target===d.target),xn());return f&&i.delete(f.id),yt(d,u=>{if(!f){o.add("edges-added"),u.drifts=["added"];return}f.drifts?(o.add("edges-drift"),u.drifts=[...f.drifts]):delete u.drifts})});i.size>0&&o.add("edges-removed");let c=[...o];return yt(e,d=>{Xe(c,1)?d.drifts=c:delete d.drifts,d.nodes=Vn(a),d.edges=Vn(s),d[Fo]="auto"})}var Gn=class{Aux;id;_literalId;hierarchyLevel;imported;constructor(e,t){this.$model=e,this.$element=t,this.id=this.$element.id,this._literalId=this.$element.id;let[n,r]=Ks(this.id);n?(this.imported={from:n,fqn:r},this.hierarchyLevel=rr(r)):(this.imported=null,this.hierarchyLevel=rr(this.id))}get name(){return ls(this.id)}get parent(){return this.$model.parent(this)}get kind(){return this.$element.kind}get shape(){return this.style.shape}get color(){return this.style.color}get icon(){return this.style.icon??null}get tags(){return W(this,Symbol.for("tags"),()=>cr([...this.$element.tags??[],...this.$model.specification.elements[this.$element.kind]?.tags??[]]))}get metadata(){return this.$element.metadata??{}}get title(){return this.$element.title}get hasSummary(){return!!this.$element.summary&&!!this.$element.description&&!Io(this.$element.summary,this.$element.description)}get summary(){return ke.memoize(this,"summary",Zt(this.$element))}get description(){return ke.memoize(this,"description",$t(this.$element))}get technology(){return this.$element.technology??null}get links(){return this.$element.links??[]}get defaultView(){return W(this,Symbol.for("defaultView"),()=>xn(this.scopedViews())??null)}get isRoot(){return this.parent===null}get style(){return W(this,"style",()=>ei({shape:this.$model.$styles.defaults.shape,color:this.$model.$styles.defaults.color,border:this.$model.$styles.defaults.border,opacity:this.$model.$styles.defaults.opacity,size:this.$model.$styles.defaults.size,padding:this.$model.$styles.defaults.padding,textSize:this.$model.$styles.defaults.text,iconPosition:this.$model.$styles.defaults.iconPosition,...this.$element.style}))}get projectId(){return this.imported?.from??this.$model.projectId}isAncestorOf(e){return Ee(this,e)}isDescendantOf(e){return Ee(e,this)}ancestors(){return this.$model.ancestors(this)}commonAncestor(e){let t=Dn(this.id,e.id);return t?this.$model.element(t):null}children(){return this.$model.children(this)}descendants(e){return e?ss([...this.$model.descendants(this)],e)[Symbol.iterator]():this.$model.descendants(this)}siblings(){return this.$model.siblings(this)}*ascendingSiblings(){yield*this.siblings();for(let e of this.ancestors())yield*e.siblings()}*descendingSiblings(){for(let e of[...this.ancestors()].reverse())yield*e.siblings();yield*this.siblings()}incoming(e="all"){return this.$model.incoming(this,e)}*incomers(e="all"){let t=new Set;for(let n of this.incoming(e))t.has(n.source.id)||(t.add(n.source.id),yield n.source)}outgoing(e="all"){return this.$model.outgoing(this,e)}*outgoers(e="all"){let t=new Set;for(let n of this.outgoing(e))t.has(n.target.id)||(t.add(n.target.id),yield n.target)}get allOutgoing(){return W(this,Symbol.for("allOutgoing"),()=>new Set(this.outgoing()))}get allIncoming(){return W(this,Symbol.for("allIncoming"),()=>new Set(this.incoming()))}views(){return W(this,Symbol.for("views"),()=>{let e=new Set;for(let t of this.$model.views())t.includesElement(this.id)&&e.add(t);return e})}scopedViews(){return W(this,Symbol.for("scopedViews"),()=>{let e=new Set;for(let t of this.$model.views())t.isScopedElementView()&&t.viewOf.id===this.id&&e.add(t);return e})}isDeployed(){return Se(xn(this.deployments()))}deployments(){return this.$model.deployment.instancesOf(this)}hasMetadata(){return!!this.$element.metadata&&!wn(this.$element.metadata)}getMetadata(e){return e?this.$element.metadata?.[e]:this.$element.metadata??{}}isTagged(e){return this.tags.includes(e)}},$s=class{Aux;get style(){return W(this,"style",()=>ei({shape:this.$model.$styles.defaults.shape,color:this.$model.$styles.defaults.color,border:this.$model.$styles.defaults.border,opacity:this.$model.$styles.defaults.opacity,size:this.$model.$styles.defaults.size,padding:this.$model.$styles.defaults.padding,textSize:this.$model.$styles.defaults.text,iconPosition:this.$model.$styles.defaults.iconPosition,...this.$node.style}))}get name(){return ls(this.id)}get shape(){return this.style.shape}get color(){return this.style.color}get icon(){return this.style.icon??null}get summary(){return ke.memoize(this,"summary",Zt(this.$node))}get description(){return ke.memoize(this,"description",$t(this.$node))}get technology(){return this.$node.technology??null}get links(){return this.$node.links??[]}ancestors(){return this.$model.ancestors(this)}commonAncestor(e){let t=Dn(this.id,e.id);return t?this.$model.node(t):null}siblings(){return this.$model.siblings(this)}isSibling(e){return this.parent===e.parent}*ascendingSiblings(){yield*this.siblings();for(let e of this.ancestors())yield*e.siblings()}*descendingSiblings(){for(let e of[...this.ancestors()].reverse())yield*e.siblings();yield*this.siblings()}incoming(e="all"){return this.$model.incoming(this,e)}outgoing(e="all"){return this.$model.outgoing(this,e)}*incomers(e="all"){let t=new Set;for(let n of this.incoming(e))t.has(n.source.id)||(t.add(n.source.id),yield n.source)}*outgoers(e="all"){let t=new Set;for(let n of this.outgoing(e))t.has(n.target.id)||(t.add(n.target.id),yield n.target)}*views(){for(let e of this.$model.views())e._type==="deployment"&&e.includesDeployment(this.id)&&(yield e)}isDeploymentNode(){return!1}isInstance(){return!1}get allOutgoing(){return W(this,Symbol.for("allOutgoing"),()=>Co.from(new Set(this.outgoingModelRelationships()),new Set(this.outgoing())))}get allIncoming(){return W(this,Symbol.for("allIncoming"),()=>Co.from(new Set(this.incomingModelRelationships()),new Set(this.incoming())))}hasMetadata(){return!!this.$node.metadata&&!wn(this.$node.metadata)}getMetadata(e){return e?this.$node.metadata?.[e]:this.$node.metadata??{}}isTagged(e){return this.tags.includes(e)}},Nl=class extends $s{id;_literalId;title;hierarchyLevel;constructor(e,t){super(),this.$model=e,this.$node=t,this.id=t.id,this._literalId=t.id,this.title=t.title,this.hierarchyLevel=rr(t.id)}get parent(){return this.$model.parent(this)}get kind(){return this.$node.kind}get metadata(){return this.$node.metadata??{}}get tags(){return W(this,Symbol.for("tags"),()=>cr([...this.$node.tags??[],...this.$model.$model.specification.deployments[this.kind]?.tags??[]]))}children(){return this.$model.children(this)}descendants(e="desc"){return this.$model.descendants(this,e)}isDeploymentNode(){return!0}*instances(){for(let e of this.descendants("desc"))e.isInstance()&&(yield e)}onlyOneInstance(){let e=this.children();if(e.size!==1)return null;let t=xn(e);return t?t.isInstance()?t:t.onlyOneInstance():null}_relationshipsFromInstances=null;relationshipsFromInstances(){if(this._relationshipsFromInstances)return this._relationshipsFromInstances;let{outgoing:e,incoming:t}=this._relationshipsFromInstances={outgoing:new Set,incoming:new Set};for(let n of this.instances()){for(let r of n.element.outgoing())e.add(r);for(let r of n.element.incoming())t.add(r)}return this._relationshipsFromInstances}outgoingModelRelationships(){return this.relationshipsFromInstances().outgoing.values()}incomingModelRelationships(){return this.relationshipsFromInstances().incoming.values()}internalModelRelationships(){let{outgoing:e,incoming:t}=this.relationshipsFromInstances();return Xt(t,e)}},Cl=class extends $s{id;_literalId;title;hierarchyLevel;constructor(e,t,n){super(),this.$model=e,this.$instance=t,this.element=n,this.id=t.id,this._literalId=t.id,this.title=t.title??n.title,this.hierarchyLevel=rr(t.id)}get $node(){return this.$instance}get parent(){return Ie(this.$model.parent(this),`Parent of ${this.id} not found`)}get style(){return W(this,"style",()=>ei({shape:this.$model.$styles.defaults.shape,color:this.$model.$styles.defaults.color,border:this.$model.$styles.defaults.border,opacity:this.$model.$styles.defaults.opacity,size:this.$model.$styles.defaults.size,padding:this.$model.$styles.defaults.padding,textSize:this.$model.$styles.defaults.text,iconPosition:this.$model.$styles.defaults.iconPosition,...this.element.$element.style,...this.$instance.style}))}get tags(){return W(this,Symbol.for("tags"),()=>cr([...this.$instance.tags??[],...this.element.tags]))}get kind(){return this.element.kind}get metadata(){return this.$instance.metadata??this.element.metadata??{}}get summary(){return ke.memoize(this,"summary",Zt(this.$instance)??Zt(this.element.$element))}get description(){return ke.memoize(this,"description",$t(this.$instance)??$t(this.element.$element))}get technology(){return this.$instance.technology??this.element.technology??null}get links(){return this.$instance.links??this.element.links}isInstance(){return!0}outgoingModelRelationships(){return this.element.outgoing()}incomingModelRelationships(){return this.element.incoming()}*views(){for(let e of this.$model.views())if(e._type==="deployment"){if(e.includesDeployment(this.id)){yield e;continue}e.includesDeployment(this.parent.id)&&this.parent.onlyOneInstance()&&(yield e)}}},b4=class{constructor(e,t){this.instance=e,this.element=t}get id(){return this.instance.id}get _literalId(){return this.instance.id}get style(){return W(this,"style ",()=>({shape:this.element.shape,color:this.element.color,...this.element.$element.style}))}get shape(){return this.element.shape}get color(){return this.element.color}get title(){return this.element.title}get summary(){return this.element.summary}get description(){return this.element.description}get technology(){return this.element.technology}isDeploymentNode(){return!1}isInstance(){return!1}},T4=class{boundary;source;target;constructor(e,t){this.$model=e,this.$relationship=t,this.source=e.deploymentRef(t.source),this.target=e.deploymentRef(t.target);let n=Dn(this.source.id,this.target.id);this.boundary=n?this.$model.node(n):null}get id(){return this.$relationship.id}get expression(){return`${this.source.id} -> ${this.target.id}`}get title(){return Se(this.$relationship.title)?this.$relationship.title:null}get technology(){return qt(this.$relationship.technology)?(this.kind&&this.$model.specification.relationships[this.kind])?.technology??null:this.$relationship.technology}get hasSummary(){return!!this.$relationship.summary&&!!this.$relationship.description&&!Io(this.$relationship.summary,this.$relationship.description)}get summary(){return ke.memoize(this,"summary",Zt(this.$relationship))}get description(){return ke.memoize(this,"description",$t(this.$relationship))}get tags(){return this.$relationship.tags??[]}get kind(){return this.$relationship.kind??null}get metadata(){return this.$relationship.metadata??{}}get navigateTo(){return this.$relationship.navigateTo?this.$model.$model.view(this.$relationship.navigateTo):null}get links(){return this.$relationship.links??[]}get color(){return this.$relationship.color??this.$model.$styles.defaults.relationship.color}get line(){return this.$relationship.line??this.$model.$styles.defaults.relationship.line}get head(){return this.$relationship.head??this.$model.$styles.defaults.relationship.arrow}get tail(){return this.$relationship.tail}*views(){for(let e of this.$model.views())e.includesRelation(this.id)&&(yield e)}isDeploymentRelation(){return!0}isModelRelation(){return!1}hasMetadata(){return!!this.$relationship.metadata&&!wn(this.$relationship.metadata)}getMetadata(e){return e?this.$relationship.metadata?.[e]:this.$relationship.metadata??{}}isTagged(e){return this.tags.includes(e)}},Co=class St{static empty(){return new St}static from(t,n){return new St(new Set(t),new Set(n))}constructor(t=new Set,n=new Set){this.model=t,this.deployment=n}get isEmpty(){return this.model.size===0&&this.deployment.size===0}get nonEmpty(){return this.model.size>0||this.deployment.size>0}get size(){return this.model.size+this.deployment.size}intersect(t){return St.from(Xt(this.model,t.model),Xt(this.deployment,t.deployment))}difference(t){return St.from(To(this.model,t.model),To(this.deployment,t.deployment))}union(t){return St.from(bo(this.model,t.model),bo(this.deployment,t.deployment))}};const Q=e=>typeof e=="string"?e:e.id,O5="/",ni=e=>{if(z(!e.includes(`
`),"View title cannot contain newlines"),e.includes("/")){let t=e.split("/").map(n=>n.trim()).filter(n=>n.length>0);return Xe(t,1)?t:[""]}return[e.trim()]},Hs=e=>ni(e).join("/"),k4=e=>{let t=ni(e);return Xe(t,2)?t.slice(0,-1).join("/"):null},w4=e=>e.includes("/")?ni(e).pop()??e:e.trim();var v4=class{#e=new Map;#l=new Map;#t=new de.default(()=>new Set);#n=new de.default(()=>new Set);#a=new Set;#r=new Map;#s=new de.default(()=>new Set);#i=new de.default(()=>new Set);#o=new de.default(()=>new Set);#c=new de.default(()=>new Set);#d=new Map;$deployments;constructor(e){this.$model=e;let t=this.$deployments=e.$data.deployments,n=Jn(t.elements);for(let r of yn(n)){let o=this.addElement(r);for(let l of o.tags)this.#c.get(l).add(o);o.isInstance()&&this.#n.get(o.element.id).add(o)}for(let r of Jn(t.relations)){let o=this.addRelation(r);for(let l of o.tags)this.#c.get(l).add(o)}}get $styles(){return this.$model.$styles}get projectId(){return this.$model.projectId}get project(){return this.$model.project}get specification(){return this.$model.specification}element(e){if(e instanceof Nl||e instanceof Cl)return e;let t=Q(e);return Ie(this.#e.get(t),`Element ${t} not found`)}findElement(e){return this.#e.get(e)??null}node(e){let t=this.element(e);return z(t.isDeploymentNode(),`Element ${t.id} is not a deployment node`),t}findNode(e){let t=this.findElement(e);return t?(z(t.isDeploymentNode(),`Element ${t?.id} is not a deployment node`),t):null}instance(e){let t=this.element(e);return z(t.isInstance(),`Element ${t.id} is not a deployed instance`),t}findInstance(e){let t=this.findElement(e);return t?(z(t.isInstance(),`Element ${t?.id} is not a deployed instance`),t):null}roots(){return this.#a.values()}elements(){return this.#e.values()}*nodes(){for(let e of this.#e.values())e.isDeploymentNode()&&(yield e)}*nodesOfKind(e){for(let t of this.#e.values())t.isDeploymentNode()&&t.kind===e&&(yield t)}*instances(){for(let e of this.#e.values())e.isInstance()&&(yield e)}*instancesOf(e){let t=Q(e),n=this.#n.get(t);n&&(yield*n)}deploymentRef(e){if(vt.isInsideInstanceRef(e)){let{deployment:t,element:n}=e;return Vm(this.#d,`${t}@${n}`,()=>new b4(this.instance(t),this.$model.element(n)))}return this.element(e.deployment)}relationships(){return this.#r.values()}relationship(e){let t=Q(e);return Ie(this.#r.get(t),`DeploymentRelationModel ${t} not found`)}findRelationship(e){return this.#r.get(e)??null}*views(){for(let e of this.$model.views())e.isDeploymentView()&&(yield e)}parent(e){let t=Q(e);return this.#l.get(t)||null}children(e){let t=Q(e);return this.#t.get(t)}*siblings(e){let t=Q(e),n=this.parent(e)?.children()??this.roots();for(let r of n)r.id!==t&&(yield r)}*ancestors(e){let t=Q(e),n;for(;n=this.#l.get(t);)yield n,t=n.id}*descendants(e,t="desc"){for(let n of this.children(e))t==="asc"?(yield n,yield*this.descendants(n.id)):(yield*this.descendants(n.id),yield n)}*incoming(e,t="all"){let n=Q(e);for(let r of this.#s.get(n))switch(!0){case t==="all":case(t==="direct"&&r.target.id===n):case(t==="to-descendants"&&r.target.id!==n):yield r;break}}*outgoing(e,t="all"){let n=Q(e);for(let r of this.#i.get(n))switch(!0){case t==="all":case(t==="direct"&&r.source.id===n):case(t==="from-descendants"&&r.source.id!==n):yield r;break}}addElement(e){if(this.#e.has(e.id))throw Error(`Element ${e.id} already exists`);let t=Sy(e)?new Nl(this,Object.freeze(e)):new Cl(this,Object.freeze(e),this.$model.element(e.element));this.#e.set(t.id,t);let n=Xn(t.id);return n?(z(this.#e.has(n),`Parent ${n} of ${t.id} not found`),this.#l.set(t.id,this.node(n)),this.#t.get(n).add(t)):(z(t.isDeploymentNode(),`Root element ${t.id} is not a deployment node`),this.#a.add(t)),t}addRelation(e){if(this.#r.has(e.id))throw Error(`Relation ${e.id} already exists`);let t=new T4(this,Object.freeze(e));this.#r.set(t.id,t),this.#s.get(t.target.id).add(t),this.#i.get(t.source.id).add(t);let n=t.boundary?.id??null;if(n)for(let r of[n,...Gt(n)])this.#o.get(r).add(t);for(let r of Gt(t.source.id)){if(r===n)break;this.#i.get(r).add(t)}for(let r of Gt(t.target.id)){if(r===n)break;this.#s.get(r).add(t)}return t}},Rl=class{source;target;boundary;constructor(e,t){this.model=e,this.$relationship=t,this.source=e.element(vt.flatten(t.source)),this.target=e.element(vt.flatten(t.target));let n=Dn(this.source.id,this.target.id);this.boundary=n?this.model.element(n):null}get id(){return this.$relationship.id}get expression(){return`${this.source.id} -> ${this.target.id}`}get title(){return qt(this.$relationship.title)?null:this.$relationship.title}get technology(){return qt(this.$relationship.technology)?(this.kind&&this.model.specification.relationships[this.kind])?.technology??null:this.$relationship.technology}get hasSummary(){return!!this.$relationship.summary&&!!this.$relationship.description&&!Io(this.$relationship.summary,this.$relationship.description)}get summary(){return ke.memoize(this,"summary",Zt(this.$relationship))}get description(){return ke.memoize(this,"description",$t(this.$relationship))}get navigateTo(){return this.$relationship.navigateTo?this.model.view(this.$relationship.navigateTo):null}get tags(){return this.$relationship.tags??[]}get kind(){return this.$relationship.kind??null}get metadata(){return this.$relationship.metadata??{}}get links(){return this.$relationship.links??[]}get color(){return this.$relationship.color??this.model.$styles.defaults.relationship.color}get line(){return this.$relationship.line??this.model.$styles.defaults.relationship.line}get head(){return this.$relationship.head??this.model.$styles.defaults.relationship.arrow}get tail(){return this.$relationship.tail}*views(){for(let e of this.model.views())e.includesRelation(this.id)&&(yield e)}isDeploymentRelation(){return!1}isModelRelation(){return!0}hasMetadata(){return!!this.$relationship.metadata&&!wn(this.$relationship.metadata)}getMetadata(e){return e?this.$relationship.metadata?.[e]:this.$relationship.metadata??{}}isTagged(e){return this.tags.includes(e)}},B4=class{Aux;$viewModel;$view;$edge;constructor(e,t,n,r){this.source=n,this.target=r,this.$viewModel=e,this.$view=e.$view,this.$edge=t}get id(){return this.$edge.id}get parent(){return this.$edge.parent?this.$viewModel.node(this.$edge.parent):null}get label(){return this.$edge.label??null}get description(){return ke.memoize(this,"description",this.$edge.description)}get technology(){return this.$edge.technology??null}hasParent(){return this.$edge.parent!==null}get tags(){return this.$edge.tags??[]}get stepNumber(){return this.isStep()?Xs(this.id):null}get navigateTo(){return this.$edge.navigateTo?this.$viewModel.$model.view(this.$edge.navigateTo):null}get color(){return this.$edge.color}get line(){return this.$edge.line??this.$viewModel.$styles.defaults.relationship.line}get head(){return this.$edge.head??this.$viewModel.$styles.defaults.relationship.arrow}get tail(){return this.$edge.tail}isStep(){return br(this.id)}*relationships(e){for(let t of this.$edge.relations)if(e){let n=this.$viewModel.$model.findRelationship(t,e);n&&(yield n)}else yield this.$viewModel.$model.relationship(t)}includesRelation(e){let t=typeof e=="string"?e:e.id;return this.$edge.relations.includes(t)}isTagged(e){return this.tags.includes(e)}},E4=class{Aux;$viewModel;$view;$node;constructor(e,t){this.$viewModel=e,this.$view=e.$view,this.$node=t}get id(){return this.$node.id}get title(){return this.$node.title}get kind(){return this.$node.kind}get description(){return ke.memoize(this,"description",this.$node.description)}get technology(){return this.$node.technology??null}get notes(){return ke.memoize(this,"notes",this.$node.notes)}get parent(){return this.$node.parent?this.$viewModel.node(this.$node.parent):null}get element(){let e=this.$node.modelRef;return e?this.$viewModel.$model.element(e):null}get deployment(){let e=this.$node.deploymentRef;return e?this.$viewModel.$model.deployment.element(e):null}get shape(){return this.$node.shape}get color(){return this.$node.color}get icon(){return this.$node.icon??null}get tags(){return this.$node.tags}get links(){return this.$node.links??[]}get navigateTo(){return this.$node.navigateTo?this.$viewModel.$model.view(this.$node.navigateTo):null}get style(){return this.$node.style}get x(){return"x"in this.$node?this.$node.x:void 0}get y(){return"y"in this.$node?this.$node.y:void 0}get width(){return"width"in this.$node?this.$node.width:void 0}get height(){return"height"in this.$node?this.$node.height:void 0}children(){return W(this,"children",()=>new Set(this.$node.children.map(e=>this.$viewModel.node(e))))}*ancestors(){let e=this.parent;for(;e;)yield e,e=e.parent}*siblings(){let e=this.parent?.children()??this.$viewModel.roots();for(let t of e)t.id!==this.id&&(yield t)}*incoming(e="all"){for(let t of this.$node.inEdges){let n=this.$viewModel.edge(t);switch(!0){case e==="all":case(e==="direct"&&n.target.id===this.id):case(e==="to-descendants"&&n.target.id!==this.id):yield n;break}}}*incomers(e="all"){let t=new Set;for(let n of this.incoming(e))t.has(n.source.id)||(t.add(n.source.id),yield n.source)}*outgoing(e="all"){for(let t of this.$node.outEdges){let n=this.$viewModel.edge(t);switch(!0){case e==="all":case(e==="direct"&&n.source.id===this.id):case(e==="from-descendants"&&n.source.id!==this.id):yield n;break}}}*outgoers(e="all"){let t=new Set;for(let n of this.outgoing(e))t.has(n.target.id)||(t.add(n.target.id),yield n.target)}isLayouted(){return"width"in this.$node&&"height"in this.$node}hasChildren(){return this.$node.children.length>0}hasParent(){return this.$node.parent!==null}hasElement(){return Se(this.$node.modelRef)}hasDeployment(){return Se(this.$node.deploymentRef)}hasDeployedInstance(){return this.hasElement()&&this.hasDeployment()}isGroup(){return Gs(this.$node)}isTagged(e){return this.tags.includes(e)}},Ro=class{Aux;#e;#l=new Set;#t=new Map;#n=new Map;#a=new Set;#r=new Set;#s=new Set;#i=new de.default(e=>new Set);#o;id;$model;title;folder;viewPath;constructor(e,t,n,r){this.$model=e,this.#e=n,this.id=n.id,this.folder=t,this.#o=r;for(let o of this.#e.nodes){let l=new E4(this,Object.freeze(o));this.#t.set(o.id,l),o.parent||this.#l.add(l),o.deploymentRef&&this.#r.add(o.deploymentRef),o.modelRef&&this.#a.add(o.modelRef);for(let i of l.tags)this.#i.get(i).add(l)}for(let o of this.#e.edges){let l=new B4(this,Object.freeze(o),this.node(o.source),this.node(o.target));for(let i of l.tags)this.#i.get(i).add(l);for(let i of o.relations)this.#s.add(i);this.#n.set(o.id,l)}this.title=n.title?w4(n.title):null,this.viewPath=n.title?Hs(n.title):n.id}get $styles(){return this.$model.$styles}get _type(){return this.#e[rn]}get stage(){return this.#e[xt]}get bounds(){if("bounds"in this.#e)return this.#e.bounds;if(this.#o)return this.#o.bounds;throw Error("View is not layouted")}get titleOrId(){return this.title??this.viewOf?.title??this.id}get titleOrUntitled(){return this.title??"Untitled"}get breadcrumbs(){return W(this,"breadcrumbs",()=>this.folder.isRoot?[this]:[...this.folder.breadcrumbs,this])}get description(){return ke.memoize(this,"description",this.#e.description)}get tags(){return this.#e.tags??[]}get links(){return this.#e.links??[]}get viewOf(){if(this.isElementView()){let e=this.#e.viewOf;return e?this.$model.element(e):null}return null}get mode(){return this.isDynamicView()?this.#e.variant??"diagram":null}get includedTags(){return[...this.#i.keys()]}get $view(){if(!this.isLayouted()||"drifts"in this.#e)return this.#e;let e=this.#o;return e?W(this,"withDriftReasons",()=>x4(this.#e,e)):this.#e}get $layouted(){if(!this.isLayouted())throw Error("View is not layouted");return this.$manual??this.#e}get hasManualLayout(){return this.#o!==void 0}get hasLayoutDrifts(){if(!this.isLayouted())return!1;let e=this.$manual;return!!e?.drifts&&e.drifts.length>0}get $manual(){if(!this.isLayouted())return null;let e=this.#o;return e?W(this,"snapshotWithManualLayout",()=>Zs(this.#e,e)):null}get projectId(){return this.$model.projectId}roots(){return this.#l.values()}*compounds(){for(let e of this.#t.values())e.hasChildren()&&(yield e)}node(e){let t=Q(e);return Ie(this.#t.get(t),`Node ${t} not found in view ${this.#e.id}`)}findNode(e){return this.#t.get(Q(e))??null}findNodeWithElement(e){let t=Q(e);return this.#a.has(t)?Ym(this.#t.values(),n=>n.hasElement()&&n.element.id===t)??null:null}nodes(){return this.#t.values()}edge(e){let t=Q(e);return Ie(this.#n.get(t),`Edge ${t} not found in view ${this.#e.id}`)}findEdge(e){return this.#n.get(Q(e))??null}edges(){return this.#n.values()}*edgesWithRelation(e){for(let t of this.#n.values())t.includesRelation(e)&&(yield t)}*elements(){for(let e of this.#t.values())e.hasElement()&&(yield e)}isTagged(e){return this.tags.includes(e)}includesElement(e){return this.#a.has(Q(e))}includesDeployment(e){return this.#r.has(Q(e))}includesRelation(e){return this.#s.has(Q(e))}isComputed(){return this.#e[xt]==="computed"}isLayouted(){return this.#e[xt]==="layouted"}isDiagram(){return this.#e[xt]==="layouted"}isElementView(){return this.#e[rn]==="element"}isScopedElementView(){return this.#e[rn]==="element"&&Se(this.#e.viewOf)}isDeploymentView(){return this.#e[rn]==="deployment"}isDynamicView(){return this.#e[rn]==="dynamic"}},Ol=class Us{$model;path;title;isRoot;parentPath;defaultViewId;constructor(t,n,r){this.$model=t,this.path=n.join("/"),this.isRoot=this.path==="",this.title=Vc(n),this.isRoot?this.parentPath=void 0:this.parentPath=n.slice(0,-1).join("/"),this.defaultViewId=r}get defaultView(){return this.defaultViewId?this.$model.view(this.defaultViewId):null}get breadcrumbs(){return z(!this.isRoot,"Root view folder has no breadcrumbs"),W(this,"breadcrumbs",()=>{let t=this.parent;return t?t.isRoot?[t,this]:[...t.breadcrumbs,this]:[this]})}get parent(){return z(!this.isRoot,"Root view folder has no parent"),qt(this.parentPath)?null:this.$model.viewFolder(this.parentPath)}get children(){return this.$model.viewFolderItems(this.path)}get folders(){return W(this,"folders",()=>{let t=[];for(let n of this.children)n instanceof Us&&t.push(n);return t})}get views(){return W(this,"views",()=>{let t=[];for(let n of this.children)n instanceof Ro&&t.push(n);return t})}},Oo=class Zn{Aux;_elements=new Map;_parents=new Map;_children=new de.default(()=>new Set);_rootElements=new Set;_relations=new Map;_incoming=new de.default(()=>new Set);_outgoing=new de.default(()=>new Set);_internal=new de.default(()=>new Set);_views=new Map;_rootViewFolder;_viewFolders=new Map;_viewFolderItems=new de.default(()=>new Set);_allTags=new de.default(()=>new Set);static fromParsed(t){return new Zn(t)}static create(t){return new Zn(t)}static fromDump(t){let{_stage:n="layouted",projectId:r="unknown",project:o,globals:l,imports:i,deployments:a,views:s,relations:c,elements:d,specification:f}=t;return new Zn({[xt]:n,projectId:r,project:o,globals:{predicates:l?.predicates??{},dynamicPredicates:l?.dynamicPredicates??{},styles:l?.styles??{}},imports:i??{},deployments:{elements:a?.elements??{},relations:a?.relations??{}},views:s??{},relations:c??{},elements:d??{},specification:f})}deployment;$data;constructor(t){this.$data=t;for(let[,n]of cn(t.elements)){let r=this.addElement(n);for(let o of r.tags)this._allTags.get(o).add(r)}for(let[n,r]of cn(t.imports??{}))for(let o of yn(r)){let l=this.addImportedElement(n,o);for(let i of l.tags)this._allTags.get(i).add(l)}for(let n of Jn(t.relations)){let r=this.addRelation(n);for(let o of r.tags)this._allTags.get(o).add(r)}if(this.deployment=new v4(this),wl(t,"computed")||wl(t,"layouted")){let n=Um("/"),r=Me(Jn(t.views),pn(l=>({view:l,path:Hs(l.title??l.id),folderPath:l.title&&k4(l.title)||""})),Ar((l,i)=>n(l.folderPath,i.folderPath))),o=l=>{let i=this._viewFolders.get(l);if(!i){let a=yi(l,"/");z(Xe(a,1),`View group path "${l}" must have at least one element`);let s;s=l===""?r.find(c=>c.view.id==="index"):r.find(c=>c.path===l),i=new Ol(this,a,s?.view.id),this._viewFolders.set(l,i)}return i};this._rootViewFolder=o("");for(let{folderPath:l}of r)this._viewFolders.has(l)||yi(l,"/").reduce((i,a)=>{let s=i.join("/"),c=o(wn(s)?a:s+"/"+a);return this._viewFolderItems.get(s).add(c),i.push(a),i},[]);for(let{view:l,folderPath:i}of r){let a=new Ro(this,o(i),l,t.manualLayouts?.[l.id]);this._viewFolderItems.get(i).add(a),this._views.set(l.id,a);for(let s of a.tags)this._allTags.get(s).add(a)}}else this._rootViewFolder=new Ol(this,[""],void 0),this._viewFolders.set(this._rootViewFolder.path,this._rootViewFolder)}get asParsed(){return this}get asComputed(){return this}get asLayouted(){return this}get $styles(){return W(this,"styles",()=>Wy.from(this.project.styles,this.specification.customColors))}isParsed(){return this.stage==="parsed"}isLayouted(){return this.stage==="layouted"}isComputed(){return this.stage==="computed"}get $model(){return this.$data}get stage(){return this.$data[xt]}get projectId(){return this.$data.projectId??"default"}get project(){return this.$data.project??W(this,Symbol.for("project"),()=>({id:this.projectId,styles:{},manualLayouts:{}}))}get specification(){return this.$data.specification}get globals(){return W(this,Symbol.for("globals"),()=>({predicates:{...this.$data.globals?.predicates},dynamicPredicates:{...this.$data.globals?.dynamicPredicates},styles:{...this.$data.globals?.styles}}))}element(t){if(t instanceof Gn)return t;let n=Q(t);return Ie(this._elements.get(n),`Element ${n} not found`)}findElement(t){return this._elements.get(Q(t))??null}roots(){return this._rootElements.values()}elements(){return this._elements.values()}relationships(){return this._relations.values()}relationship(t,n){if(n==="deployment")return this.deployment.relationship(t);let r=Q(t),o=this._relations.get(r)??null;return o||n==="model"?Ie(o,`Model relation ${r} not found`):Ie(this.deployment.findRelationship(r),`No model/deployment relation ${r} not found`)}findRelationship(t,n){if(n==="deployment")return this.deployment.findRelationship(t);let r=this._relations.get(Q(t))??null;return r||n==="model"?r:this.deployment.findRelationship(t)}views(){return this._views.values()}view(t){let n=Q(t);return Ie(this._views.get(n),`View ${n} not found`)}findView(t){return this._views.get(t)??null}findManualLayout(t){return"manualLayouts"in this.$data?this.$data.manualLayouts?.[t]??null:null}viewFolder(t){return Ie(this._viewFolders.get(t),`View folder ${t} not found`)}get rootViewFolder(){return this._rootViewFolder}get hasViewFolders(){return this._viewFolders.size>1}viewFolderItems(t){return z(this._viewFolders.has(t),`View folder ${t} not found`),this._viewFolderItems.get(t)}parent(t){let n=Q(t);return this._parents.get(n)||null}children(t){let n=Q(t);return this._children.get(n)}*siblings(t){let n=Q(t),r=this._parents.get(n),o=r?this._children.get(r.id).values():this.roots();for(let l of o)l.id!==n&&(yield l)}*ancestors(t){let n=Q(t),r;for(;r=this._parents.get(n);)yield r,n=r.id}*descendants(t){for(let n of this.children(t))yield n,yield*this.descendants(n.id)}*incoming(t,n="all"){let r=Q(t);for(let o of this._incoming.get(r))switch(!0){case n==="all":case(n==="direct"&&o.target.id===r):case(n==="to-descendants"&&o.target.id!==r):yield o;break}}*outgoing(t,n="all"){let r=Q(t);for(let o of this._outgoing.get(r))switch(!0){case n==="all":case(n==="direct"&&o.source.id===r):case(n==="from-descendants"&&o.source.id!==r):yield o;break}}get tags(){return W(this,"tags",()=>Ar([...this._allTags.keys()],xo))}get tagsSortedByUsage(){return W(this,"tagsSortedByUsage",()=>Me([...this._allTags.entries()],pn(([t,n])=>({tag:t,count:n.size,tagged:n})),Ar((t,n)=>xo(t.tag,n.tag)),Kl([mt("count"),"desc"])))}findByTag(t,n){return Tt(this._allTags.get(t),r=>n==="elements"?r instanceof Gn:n==="views"?r instanceof Ro:n==="relationships"?r instanceof Rl:!0)}*elementsOfKind(t){for(let n of this._elements.values())n.kind===t&&(yield n)}*elementsWhere(t){let n=Pt(t);for(let r of this._elements.values())n(r)&&(yield r)}*relationshipsWhere(t){let n=Pt(t);for(let r of this._relations.values())n(r)&&(yield r)}addElement(t){if(this._elements.has(t.id))throw Error(`Element ${t.id} already exists`);let n=new Gn(this,Object.freeze(t));this._elements.set(n.id,n);let r=Xn(n.id);return r?(z(this._elements.has(r),`Parent ${r} of ${n.id} not found`),this._parents.set(n.id,this.element(r)),this._children.get(r).add(n)):this._rootElements.add(n),n}addImportedElement(t,n){z(!qs(n.id),"Imported element already has global FQN");let r=ti(t,n.id);if(this._elements.has(r))throw Error(`Element ${r} already exists`);let o=new Gn(this,Object.freeze({...n,id:r}));this._elements.set(o.id,o);let l=Xn(o.id);for(;l;){if(l.includes(".")&&this._elements.has(l))return this._parents.set(o.id,this.element(l)),this._children.get(l).add(o),o;l=Xn(l)}return this._rootElements.add(o),o}addRelation(t){if(this._relations.has(t.id))throw Error(`Relation ${t.id} already exists`);let n=new Rl(this,Object.freeze(t)),{source:r,target:o}=n;this._relations.set(n.id,n),this._incoming.get(o.id).add(n),this._outgoing.get(r.id).add(n);let l=Dn(r.id,o.id);if(l)for(let i of[l,...Gt(l)])this._internal.get(i).add(n);for(let i of Gt(r.id)){if(i===l)break;this._outgoing.get(i).add(n)}for(let i of Gt(o.id)){if(i===l)break;this._incoming.get(i).add(n)}return n}};(function(e){e.EMPTY=Oo.create({_stage:"computed",projectId:"default",project:{id:"default"},specification:{elements:{},relationships:{},deployments:{},tags:{}},globals:{predicates:{},dynamicPredicates:{},styles:{}},deployments:{elements:{},relations:{}},elements:{},relations:{},views:{},imports:{}})})(Oo||={});let A4;(function(e){e.isInside=o=>l=>Ee(o,l.source.id)&&Ee(o,l.target.id);let t=e.isDirectedBetween=(o,l)=>i=>(i.source.id===o||Ee(o,i.source.id))&&(i.target.id===l||Ee(l,i.target.id));e.isAnyBetween=(o,l)=>{let i=t(o,l),a=t(l,o);return s=>i(s)||a(s)};let n=e.isIncoming=o=>l=>(l.target.id===o||Ee(o,l.target.id))&&!Ee(o,l.source.id),r=e.isOutgoing=o=>l=>(l.source.id===o||Ee(o,l.source.id))&&!Ee(o,l.target.id);e.isAnyInOut=o=>{let l=n(o),i=r(o);return a=>l(a)||i(a)}})(A4||={});const Ws=Symbol.for("nodejs.util.inspect.custom");var D4=class gt{id;constructor(t,n,r){this.source=t,this.target=n,this.relations=r,this.id=cs(`deployment:${t.id}:${n.id}`)}get expression(){return`${this.source.id} -> ${this.target.id}`}_boundary;get boundary(){return this._boundary??=this.source.commonAncestor(this.target),this._boundary}nonEmpty(){return this.relations.nonEmpty}[Ws](t,n,r){let o=this.toString();return Object.defineProperty(o,"constructor",{value:gt,enumerable:!1}),o}toString(){let t=[...this.relations.model].map(r=>"    "+r.expression);t.length?t.unshift("  model:"):t.unshift("  model: []");let n=[...this.relations.deployment].map(r=>"    "+r.expression);return n.length?n.unshift("  deployment:"):n.unshift("  deployment: []"),[this.expression,...t,...n].join(`
`)}hasDirectDeploymentRelation(){for(let t of this.relations.deployment)if(t.source.id===this.source.id||t.target.id===this.target.id)return!0;return!1}*values(){yield*this.relations.model,yield*this.relations.deployment}mergeWith(t){return Array.isArray(t)?t.reduce((n,r)=>n.mergeWith(r),this):(z(this.source.id===t.source.id,"Cannot merge connections with different sources"),z(this.target.id===t.target.id,"Cannot merge connections with different targets"),new gt(this.source,this.target,this.relations.union(t.relations)))}difference(t){return new gt(this.source,this.target,this.relations.difference(t.relations))}intersect(t){return new gt(this.source,this.target,this.relations.intersect(t.relations))}equals(t){return z(t instanceof gt,"Other should ne DeploymentConnectionModel"),this.id===t.id&&this.source.id===t.source.id&&this.target.id===t.target.id&&ko(this.relations.model,t.relations.model)&&ko(this.relations.deployment,t.relations.deployment)}update(t){return t&&={model:this.relations.model,deployment:this.relations.deployment,...t},new gt(this.source,this.target,t?new Co(t.model??new Set,t.deployment??new Set):this.relations)}};function Ll(e,t){return t?e.source===t.source&&e.target===t.target:n=>e.source===n.source&&e.target===n.target}var Il=class Qe{id;constructor(t,n,r=new Set){this.source=t,this.target=n,this.relations=r,this.id=cs(`model:${t.id}:${n.id}`)}_boundary;get boundary(){return this._boundary??=this.source.commonAncestor(this.target)}get expression(){return`${this.source.id} -> ${this.target.id}`}get isDirect(){return this.nonEmpty()&&!this.isImplicit}get isImplicit(){return this.nonEmpty()&&_m(this.relations,ql(Ll(this)))}get directRelations(){return new Set(Tt(this.relations,Ll(this)))}nonEmpty(){return this.relations.size>0}mergeWith(t){return z(this.source.id===t.source.id,"Cannot merge connections with different sources"),z(this.target.id===t.target.id,"Cannot merge connections with different targets"),new Qe(this.source,this.target,bo(this.relations,t.relations))}difference(t){return new Qe(this.source,this.target,To(this.relations,t.relations))}intersect(t){return z(t instanceof Qe,"Cannot intersect connection with different type"),new Qe(this.source,this.target,Xt(this.relations,t.relations))}equals(t){z(t instanceof Qe,"Cannot merge connection with different type");let n=t;return this.id===n.id&&this.source.id===n.source.id&&this.target.id===n.target.id&&ko(this.relations,n.relations)}update(t){return new Qe(this.source,this.target,t)}[Ws](t,n,r){let o=this.toString();return Object.defineProperty(o,"constructor",{value:Qe,enumerable:!1}),o}toString(){return[this.expression,this.relations.size?"  relations:":"  relations: [ ]",...[...this.relations].map(t=>"    "+t.expression)].join(`
`)}reversed(){return new Qe(this.target,this.source)}};vn({findConnection:()=>ri,findConnectionsBetween:()=>Qs,findConnectionsWithin:()=>F4});function ri(e,t,n="directed"){if(e===t||Ho(e,t))return[];let r=e.allOutgoing.intersect(t.allIncoming),o=r.nonEmpty?[new D4(e,t,r)]:[];return n==="directed"?o:[...o,...ri(t,e,"directed")]}function Qs(e,t,n="both"){if(e.allIncoming.isEmpty&&e.allOutgoing.isEmpty)return[];let r=[],o=[];for(let l of t)if(e!==l)for(let i of ri(e,l,n))i.source===e?r.push(i):o.push(i);return[...r,...o]}function F4(e){return[...e].reduce((t,n,r,o)=>(r===o.length-1||t.push(...Qs(n,o.slice(r+1),"both")),t),[])}var L5=vn({findConnection:()=>Vs,findConnectionsBetween:()=>Ys,findConnectionsWithin:()=>N4});function Vs(e,t,n="directed"){if(e===t||Ho(e,t))return[];let r=Xt(e.allOutgoing,t.allIncoming),o=r.size>0?new Il(e,t,r):null;if(n==="directed")return o?[o]:[];let l=Xt(e.allIncoming,t.allOutgoing),i=l.size>0?new Il(t,e,l):null;return o&&i?[o,i]:o?[o]:i?[i]:[]}function Ys(e,t,n="both"){if(e.allIncoming.size===0&&e.allOutgoing.size===0)return[];let r=[],o=[];for(let l of t)if(e!==l)for(let i of Vs(e,l,n))i.source===e?r.push(i):o.push(i);return[...r,...o]}function N4(e){return[...e].reduce((t,n,r,o)=>(r===o.length-1||t.push(...Ys(n,o.slice(r+1),"both")),t),[])}const C4=e=>{let t=fi(e,a=>Oo.create(a));function n(a){let s=e.get();if(ui(s,a))return;let c={...a,views:bc(a.views,d=>{let f=s.views[d.id];return ui(f,d)?f:d})};e.set(c)}let r=fi(e,a=>Object.values(a.views));function o(){return ro(t)}function l(){return ro(r)}function i(a){let[s,c]=bt.useState(e.value?.views[a]??null);return bt.useEffect(()=>e.subscribe(d=>{c(d.views[a]??null)}),[a]),s}return{updateModel:n,$likec4model:t,useLikeC4Model:o,useLikeC4Views:l,useLikeC4View:i}},R4=[{id:"industrial-edge-architecture",title:"Industrial Edge Monitoring Architecture"}],O4=Lo([...R4]);function I5(){return ro(O4)}let eo={"industrial-edge-architecture":()=>Bt(()=>Promise.resolve().then(()=>q4),void 0)};async function S5(e){let t=eo[e];if(!t){const n=Object.keys(eo);if(console.error("Unknown projectId: "+e+" (available: "+n+")"),n.length===0)throw new Error("No projects found, invalid state");e=n[0],console.warn("Falling back to project: "+e),t=eo[e]}return await t()}var P5=de.default;So.default;Zl.default;$l.default;var z5=Hl.default,M5=de.default;So.default;Zl.default;$l.default;Hl.default;Id.default;wd();je(vd());function L4(e){let t=yn([...e]),n=new Set(t),r=new Map,o=new de.default(()=>null),l=t.reduce((i,a,s,c)=>(r.set(a.id,a),i.set(a.id,Me(c,Rc(s+1),Gl(as(a)),ld((d,f)=>(n.delete(f),d.some(Ee(f))||(d.push(f),o.set(f.id,a)),d),[]))),i),new de.default(()=>[]));return{sorted:t,byId:i=>Ie(r.get(i),`Element not found by id: ${i}`),root:n,parent:i=>o.get(typeof i=="string"?i:i.id),children:i=>l.get(typeof i=="string"?i:i.id),flatten:rd(()=>new Set([...n,...t.reduce((i,a)=>{let s=l.get(a.id);return s.length===0?(i.push(a),i):(s.length>1&&i.push(...s),i)},[])]))}}const to=(e,t)=>e.size>2&&t.size!==e.size?new Set(yn([...L4(e).flatten(),...t])):e.size>1?new Set(yn([...e])):e;function Js(e,t,n){let r=s=>t.has(s),o=new Set([e]),l={incomers:new Set,subjects:new Set([e]),outgoers:new Set},i=new Set(n.incoming.flatMap(s=>{if(l.subjects.add(s.target),l.incomers.add(s.source),o.add(s.target),s.target!==e){let f=s.target.parent;for(;f&&f!==e;)o.add(f),f=f.parent}let c=s.source,d=[];for(;d.push(c),!(r(c)||!c.parent);)c=c.parent;return d})),a=new Set(n.outgoing.flatMap(s=>{if(l.subjects.add(s.source),l.outgoers.add(s.target),o.add(s.source),s.source!==e){let f=s.source.parent;for(;f&&f!==e;)o.add(f),f=f.parent}let c=s.target,d=[];for(;d.push(c),!(r(c)||!c.parent);)c=c.parent;return d}));return{incomers:to(i,l.incomers),incoming:new Set(n.incoming),subjects:to(o,l.subjects),outgoing:new Set(n.outgoing),outgoers:to(a,l.outgoers)}}function G5(e,t,n,r="global"){let o=n?t.findView(n):null;if(r==="view")return z(o,'Scope view id is required when scope is "view"'),I4(e,o,t);let l=t.element(e);return Js(l,eg(l.ascendingSiblings()),{incoming:[...l.incoming()],outgoing:[...l.outgoing()]})}function I4(e,t,n){let r=n.element(e),o={incoming:ll(Tt(r.incoming(),i=>t.includesRelation(i.id))),outgoing:ll(Tt(r.outgoing(),i=>t.includesRelation(i.id)))},l=as(r);return Js(r,new Set([...r.ascendingSiblings(),...Me(t.elements(),Jm(i=>i.element),Tt(i=>i!==r&&l(i)))]),o)}let no={"industrial-edge-architecture":bt.lazy(()=>Bt(()=>Promise.resolve().then(()=>W4),void 0).then(e=>({default:e.IconRenderer})))};function q5(e){let t=no[e];if(!t){const n=Object.keys(no);if(console.error("Unknown projectId: "+e+" (available: "+n+")"),n.length===0)throw new Error("No projects found, invalid state");e=n[0],console.warn("Falling back to project: "+e),t=no[e]}return n=>ct.jsx(bt.Suspense,{children:ct.jsx(t,n)})}const K5={updateView:()=>{throw new Error("likec4rpc.updateView is not available in production")},calcAdhocView:()=>{throw new Error("likec4rpc.calcAdhocView is not available in production")}},_s=Lo({_stage:"layouted",projectId:"industrial-edge-architecture",project:{id:"industrial-edge-architecture",title:"Industrial Edge Monitoring Architecture"},specification:{tags:{},elements:{actor:{notation:"Участник",style:{shape:"person",color:"green"}},container:{notation:"Контейнер",style:{color:"amber"}},"developed-system":{notation:"Система в scope реализации",style:{color:"amber"}},system:{notation:"Внешняя система",style:{color:"secondary"}},"external-system":{notation:"Внешняя облачная система",style:{color:"secondary",icon:"bootstrap:cloud",iconColor:"blue"}},"field-gateway":{notation:"Полевой шлюз",style:{color:"secondary"}},"field-device":{notation:"Полевое устройство",style:{color:"secondary"}},"telemetry-point":{notation:"Точка телеметрии",style:{color:"secondary"}}},relationships:{"interact-with":{style:{color:"green",line:"solid",head:"normal"}}},deployments:{environment:{notation:"Среда развертывания",style:{color:"blue"}},"network-zone":{notation:"Сетевой контур",style:{color:"sky"}},host:{notation:"Хост",style:{color:"amber"}},"fieldbus-segment":{notation:"Полевой сегмент",style:{color:"blue"}},"network-endpoint":{notation:"Сетевой endpoint",style:{color:"indigo"}},"field-asset":{notation:"Физическое устройство",style:{color:"secondary"}}},customColors:{}},elements:{"demo-stand-current-monitored-scope":{notation:"Внешняя система",style:{color:"secondary"},technology:"KNX monitored signals / current read scope",description:{txt:"Текущий набор сигналов demo-стенда, которые читает Edge Telemetry Agent."},title:"Demo Stand Current Monitored Scope",kind:"system",id:"demo-stand-current-monitored-scope"},"demo-stand-current-monitored-scope.device-1-1-1":{notation:"Полевое устройство",style:{color:"secondary"},technology:"KNX TP device",description:{txt:"Кнопочная панель, участвующая в публикации feedback состояния света."},title:"1.1.1 Pushbutton sensor 4 Komfort, 4-gang",kind:"field-device",id:"demo-stand-current-monitored-scope.device-1-1-1"},"demo-stand-current-monitored-scope.device-1-1-2":{notation:"Полевое устройство",style:{color:"secondary"},technology:"KNX TP to DALI gateway",description:{txt:"DALI gateway, публикующий статус светового канала."},title:"1.1.2 DALI Gateway Tunable White Plus",kind:"field-device",id:"demo-stand-current-monitored-scope.device-1-1-2"},"demo-stand-current-monitored-scope.device-1-1-4":{notation:"Полевое устройство",style:{color:"secondary"},technology:"KNX TP room controller",description:{txt:"Комнатный контроллер, публикующий температуру помещения."},title:"1.1.4 Room controller display compact module",kind:"field-device",id:"demo-stand-current-monitored-scope.device-1-1-4"},"demo-stand-current-monitored-scope.light-switch-feedback":{notation:"Точка телеметрии",style:{color:"secondary"},technology:"KNX DPT 1.001 / feedback",description:{txt:"Фактически читаемая точка состояния света."},title:"0/0/7 StatusSwitch",kind:"telemetry-point",id:"demo-stand-current-monitored-scope.light-switch-feedback"},"demo-stand-current-monitored-scope.room-temperature":{notation:"Точка телеметрии",style:{color:"secondary"},technology:"KNX DPT 9.xxx / room temperature",description:{txt:"Фактически читаемая точка температуры помещения."},title:"2/0/0 Temp Value",kind:"telemetry-point",id:"demo-stand-current-monitored-scope.room-temperature"},"field-devices":{notation:"Внешняя система",style:{color:"secondary"},technology:"Field devices / PLC / RTU",description:{txt:"Датчики, актуаторы, PLC, RTU и локальные системы автоматизации на объекте."},title:"Полевые устройства и контроллеры",kind:"system",id:"field-devices"},"field-devices.knx-temperature-sensor":{notation:"Полевое устройство",style:{color:"secondary"},technology:"KNX",description:{txt:"Датчик температуры"},title:"knx-temperature-sensor",kind:"field-device",id:"field-devices.knx-temperature-sensor"},"field-devices.knx-switch":{notation:"Полевое устройство",style:{color:"secondary"},technology:"KNX",description:{txt:"Выключатель"},title:"knx-switch",kind:"field-device",id:"field-devices.knx-switch"},"notification-channels":{notation:"Внешняя облачная система",style:{color:"secondary",icon:"bootstrap:cloud",iconColor:"blue"},technology:"Email / SMS / Push / Webhook",description:{txt:"Email, SMS, push, webhook и другие внешние облачные каналы доставки тревог и служебных уведомлений."},title:"Каналы уведомлений",kind:"external-system",id:"notification-channels"},"field-protocol-gateways":{notation:"Внешняя система",style:{color:"secondary"},technology:"KNX / Modbus / OPC UA / SCADA",description:{txt:"Точки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы."},title:"Протокольные шлюзы и SCADA-контроллеры",kind:"system",id:"field-protocol-gateways"},"field-protocol-gateways.knx-router":{notation:"Полевой шлюз",style:{color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg"},technology:"KNX / KNXnet-IP",title:"KNX Segment",kind:"field-gateway",id:"field-protocol-gateways.knx-router"},"field-protocol-gateways.modbus-gateway":{notation:"Полевой шлюз",style:{color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/modbus.svg"},technology:"Modbus TCP / Modbus RTU",title:"Modbus Gateway",kind:"field-gateway",id:"field-protocol-gateways.modbus-gateway"},"field-protocol-gateways.opc-ua-gateway":{notation:"Полевой шлюз",style:{color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/opc-ua.svg"},technology:"OPC UA",title:"OPC UA Server",kind:"field-gateway",id:"field-protocol-gateways.opc-ua-gateway"},"service-engineer":{notation:"Участник",style:{shape:"person",color:"green"},description:{txt:"Настраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы."},title:"Сервисный инженер",kind:"actor",id:"service-engineer"},operator:{notation:"Участник",style:{shape:"person",color:"green"},description:{txt:"Работает с текущим состоянием объекта, live-панелями и событиями через центральную платформу мониторинга."},title:"Оператор",kind:"actor",id:"operator"},dispatcher:{notation:"Участник",style:{shape:"person",color:"green"},description:{txt:"Контролирует alarm, уведомления и диспетчерские панели через центральную платформу мониторинга."},title:"Диспетчер",kind:"actor",id:"dispatcher"},"edge-telemetry-agent":{notation:"Система в scope реализации",style:{color:"amber"},technology:"Edge collector / normalization / buffering / delivery",description:{txt:"Универсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий."},title:"Edge Telemetry Agent",kind:"developed-system",id:"edge-telemetry-agent"},"monitoring-alarm-platform":{notation:"Система в scope реализации",style:{color:"amber"},technology:"Cloud monitoring platform / alarm engine / operator UI",description:{txt:"Центральная система в облаке/интернете для приема событий, хранения телеметрии, визуализации, alarm-логики и маршрутизации уведомлений."},title:"Monitoring & Alarm Platform",kind:"developed-system",id:"monitoring-alarm-platform"},"edge-telemetry-agent.collector-runtime":{notation:"Контейнер",style:{color:"amber"},technology:"Python service",description:{txt:"Основной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox."},title:"Collector Runtime",kind:"container",id:"edge-telemetry-agent.collector-runtime"},"edge-telemetry-agent.configuration-bundle":{notation:"Контейнер",style:{color:"amber"},technology:"YAML files",description:{txt:"Локальный набор конфигурации источников, модели сигналов, polling-политик и параметров доставки."},title:"Configuration Bundle",kind:"container",id:"edge-telemetry-agent.configuration-bundle"},"edge-telemetry-agent.delivery-worker":{notation:"Контейнер",style:{color:"amber"},technology:"Python worker / MQTT publisher",description:{txt:"Фоновый контейнер доставки: читает outbox, публикует telemetry events и service topics в MQTT topic tree и обновляет статус доставки."},title:"Delivery Worker",kind:"container",id:"edge-telemetry-agent.delivery-worker"},"edge-telemetry-agent.outbox-store":{notation:"Контейнер",style:{color:"amber",shape:"storage"},technology:"SQLite",description:{txt:"Локальное надежное хранилище исходящих событий, статусов доставки и метаданных повторных попыток."},title:"Outbox Store",kind:"container",id:"edge-telemetry-agent.outbox-store"},"monitoring-alarm-platform.alarm-rule-engine":{notation:"Контейнер",style:{color:"amber"},technology:"Rule engine / stream processor",description:{txt:"Обрабатывает входящие события по правилам, ведет жизненный цикл alarm и инициирует уведомления и эскалации."},title:"Alarm Rule Engine",kind:"container",id:"monitoring-alarm-platform.alarm-rule-engine"},"monitoring-alarm-platform.grafana":{notation:"Контейнер",style:{color:"amber"},technology:"Grafana OSS / grafana-mqtt-datasource",description:{txt:"Слой визуализации Monitoring & Alarm Platform: live-панели, инженерные dashboards и операторские представления. В текущей реализации подключается к MQTT Ingestion Gateway через grafana-mqtt-datasource."},title:"Grafana",kind:"container",id:"monitoring-alarm-platform.grafana"},"monitoring-alarm-platform.keycloak":{notation:"Контейнер",style:{color:"amber"},technology:"Keycloak / OIDC / OAuth 2.0",description:{txt:"Сервис identity and access management: realms, пользователи, роли, клиенты и выпуск токенов для Platform Frontend и Platform API."},title:"Keycloak",kind:"container",id:"monitoring-alarm-platform.keycloak"},"monitoring-alarm-platform.mqtt-ingestion-gateway":{notation:"Контейнер",style:{color:"amber"},technology:"MQTT broker / ingestion service",description:{txt:"Принимает MQTT telemetry events и service topics от edge-агентов, восстанавливает routing context из topic, валидирует payload и передает canonical events на хранение и в Alarm Rule Engine."},title:"MQTT Ingestion Gateway",kind:"container",id:"monitoring-alarm-platform.mqtt-ingestion-gateway"},"monitoring-alarm-platform.notification-service":{notation:"Контейнер",style:{color:"amber"},technology:"Worker / notification gateway",description:{txt:"Маршрутизирует уведомления во внешние каналы по alarm-политикам и правилам эскалации."},title:"Notification Service",kind:"container",id:"monitoring-alarm-platform.notification-service"},"monitoring-alarm-platform.platform-api":{notation:"Контейнер",style:{color:"amber"},technology:"HTTP API / backend service",description:{txt:"Backend API для состояния alarm, истории событий, конфигурации правил и политик уведомлений."},title:"Platform API",kind:"container",id:"monitoring-alarm-platform.platform-api"},"monitoring-alarm-platform.platform-frontend":{notation:"Контейнер",style:{color:"amber",shape:"browser"},technology:"Browser / SPA",description:{txt:"Browser-based frontend платформы: пользовательский web-интерфейс для операторов и диспетчеров, маршруты UI, навигация по alarm и доступ к dashboards."},title:"Platform Frontend",kind:"container",id:"monitoring-alarm-platform.platform-frontend"},"monitoring-alarm-platform.telemetry-store":{notation:"Контейнер",style:{color:"amber",shape:"storage"},technology:"Time-series DB / relational storage",description:{txt:"Хранит телеметрию, служебные события, историю alarm и данные для мониторинговых и операторских запросов."},title:"Telemetry Store",kind:"container",id:"monitoring-alarm-platform.telemetry-store"}},relations:{ewjy7p:{title:"Публикует feedback состояния света 0/0/7",source:{model:"demo-stand-current-monitored-scope.device-1-1-1"},target:{model:"demo-stand-current-monitored-scope.light-switch-feedback"},id:"ewjy7p"},"1bukbxz":{title:"Публикует статус светового канала 0/0/7",source:{model:"demo-stand-current-monitored-scope.device-1-1-2"},target:{model:"demo-stand-current-monitored-scope.light-switch-feedback"},id:"1bukbxz"},lkpzpl:{title:"Публикует температуру помещения 2/0/0",source:{model:"demo-stand-current-monitored-scope.device-1-1-4"},target:{model:"demo-stand-current-monitored-scope.room-temperature"},id:"lkpzpl"},"8dkmwk":{title:"Поставляет feedback состояния света в текущий read scope",source:{model:"demo-stand-current-monitored-scope.light-switch-feedback"},target:{model:"edge-telemetry-agent.collector-runtime"},id:"8dkmwk"},"5anl8o":{title:"Поставляет температуру помещения в текущий read scope",source:{model:"demo-stand-current-monitored-scope.room-temperature"},target:{model:"edge-telemetry-agent.collector-runtime"},id:"5anl8o"},c9z7g3:{title:"Передают телеграммы, состояния и команды в KNX-сегменте",source:{model:"field-devices.knx-temperature-sensor"},target:{model:"field-protocol-gateways.knx-router"},id:"c9z7g3"},"70paaf":{title:"Передает телеграммы состояния и управления в KNX-сегменте",source:{model:"field-devices.knx-switch"},target:{model:"field-protocol-gateways.knx-router"},id:"70paaf"},cmnl2m:{title:"Доставляют уведомления по alarm и служебные уведомления",source:{model:"notification-channels"},target:{model:"dispatcher"},id:"cmnl2m"},"16vogj3":{title:"Передают данные через southbound-адаптеры",source:{model:"field-protocol-gateways"},target:{model:"edge-telemetry-agent.collector-runtime"},id:"16vogj3"},"1iben3q":{title:"Экспонирует group address и телеграммы через KNX/IP",source:{model:"field-protocol-gateways.knx-router"},target:{model:"edge-telemetry-agent.collector-runtime"},id:"1iben3q"},"1pfeck9":{title:"Экспонирует registers, coils и дискретные значения через Modbus",source:{model:"field-protocol-gateways.modbus-gateway"},target:{model:"edge-telemetry-agent.collector-runtime"},id:"1pfeck9"},"1qjo0gv":{title:"Экспонирует nodes, subscriptions и значения через OPC UA",source:{model:"field-protocol-gateways.opc-ua-gateway"},target:{model:"edge-telemetry-agent.collector-runtime"},id:"1qjo0gv"},"1vij76t":{color:"green",line:"solid",head:"normal",title:"Настраивает адаптеры, модель сигналов, polling и доставку",source:{model:"service-engineer"},target:{model:"edge-telemetry-agent"},kind:"interact-with",id:"1vij76t"},"1yfkq8h":{color:"green",line:"solid",head:"normal",title:"Настраивает правила alarm, получателей и панели мониторинга",source:{model:"service-engineer"},target:{model:"monitoring-alarm-platform"},kind:"interact-with",id:"1yfkq8h"},ex5tr4:{color:"green",line:"solid",head:"normal",title:"Настраивает dashboards и проверяет поток телеметрии",source:{model:"service-engineer"},target:{model:"monitoring-alarm-platform.grafana"},kind:"interact-with",id:"ex5tr4"},j3w7iw:{color:"green",line:"solid",head:"normal",title:"Работает с панелями мониторинга, событиями и alarm",source:{model:"operator"},target:{model:"monitoring-alarm-platform"},kind:"interact-with",id:"j3w7iw"},lycikr:{color:"green",line:"solid",head:"normal",title:"Работает с пользовательским web-интерфейсом платформы",source:{model:"operator"},target:{model:"monitoring-alarm-platform.platform-frontend"},kind:"interact-with",id:"lycikr"},iccx6k:{color:"green",line:"solid",head:"normal",title:"Работает с alarm, уведомлениями и диспетчерскими сценариями",source:{model:"dispatcher"},target:{model:"monitoring-alarm-platform"},kind:"interact-with",id:"iccx6k"},saomgf:{color:"green",line:"solid",head:"normal",title:"Работает с пользовательским web-интерфейсом платформы",source:{model:"dispatcher"},target:{model:"monitoring-alarm-platform.platform-frontend"},kind:"interact-with",id:"saomgf"},"1vmt72n":{title:"Публикует telemetry events и service topics через MQTT",source:{model:"edge-telemetry-agent"},target:{model:"monitoring-alarm-platform"},id:"1vmt72n"},"17cylot":{title:"Маршрутизирует уведомления и эскалации",source:{model:"monitoring-alarm-platform"},target:{model:"notification-channels"},id:"17cylot"},p5w7v3:{title:"Загружает описания источников, модель сигналов и runtime-политики",source:{model:"edge-telemetry-agent.collector-runtime"},target:{model:"edge-telemetry-agent.configuration-bundle"},id:"p5w7v3"},"1337gtq":{title:"Сохраняет нормализованные события и задания на доставку",source:{model:"edge-telemetry-agent.collector-runtime"},target:{model:"edge-telemetry-agent.outbox-store"},id:"1337gtq"},"14gqniy":{title:"Загружает настройки MQTT, topic contract и retry-политики",source:{model:"edge-telemetry-agent.delivery-worker"},target:{model:"edge-telemetry-agent.configuration-bundle"},id:"14gqniy"},w1v2d7:{title:"Читает ожидающие события и обновляет статус доставки",source:{model:"edge-telemetry-agent.delivery-worker"},target:{model:"edge-telemetry-agent.outbox-store"},id:"w1v2d7"},"1noy8cq":{title:"Публикует telemetry events и service topics по MQTT 5.0",source:{model:"edge-telemetry-agent.delivery-worker"},target:{model:"monitoring-alarm-platform.mqtt-ingestion-gateway"},id:"1noy8cq"},va66e2:{title:"Читает контекст и записывает состояние и историю alarm",source:{model:"monitoring-alarm-platform.alarm-rule-engine"},target:{model:"monitoring-alarm-platform.telemetry-store"},id:"va66e2"},pterx7:{title:"Запускает доставку уведомлений",source:{model:"monitoring-alarm-platform.alarm-rule-engine"},target:{model:"monitoring-alarm-platform.notification-service"},id:"pterx7"},"1si4dl2":{title:"Подписывается на live MQTT telemetry и service topics",source:{model:"monitoring-alarm-platform.grafana"},target:{model:"monitoring-alarm-platform.mqtt-ingestion-gateway"},id:"1si4dl2"},"5gl5mv":{title:"Сохраняет canonical events и служебные события",source:{model:"monitoring-alarm-platform.mqtt-ingestion-gateway"},target:{model:"monitoring-alarm-platform.telemetry-store"},id:"5gl5mv"},"5ivtmw":{title:"Передает нормализованные события в Alarm Rule Engine",source:{model:"monitoring-alarm-platform.mqtt-ingestion-gateway"},target:{model:"monitoring-alarm-platform.alarm-rule-engine"},id:"5ivtmw"},"1x9mjjr":{title:"Отправляет email, SMS, push и webhook-уведомления",source:{model:"monitoring-alarm-platform.notification-service"},target:{model:"notification-channels"},id:"1x9mjjr"},v1cg3n:{title:"Проверяет токены, роли и client configuration",source:{model:"monitoring-alarm-platform.platform-api"},target:{model:"monitoring-alarm-platform.keycloak"},id:"v1cg3n"},fbxm02:{title:"Читает телеметрию, историю и временные линии alarm",source:{model:"monitoring-alarm-platform.platform-api"},target:{model:"monitoring-alarm-platform.telemetry-store"},id:"fbxm02"},"1weswvj":{title:"Читает активные alarm и управляет конфигурацией правил в Alarm Rule Engine",source:{model:"monitoring-alarm-platform.platform-api"},target:{model:"monitoring-alarm-platform.alarm-rule-engine"},id:"1weswvj"},kbrdxx:{title:"Аутентифицирует пользователя и получает OIDC tokens",source:{model:"monitoring-alarm-platform.platform-frontend"},target:{model:"monitoring-alarm-platform.keycloak"},id:"kbrdxx"},"18qdh1f":{title:"Запрашивает состояние alarm, историю событий и прикладные данные платформы",source:{model:"monitoring-alarm-platform.platform-frontend"},target:{model:"monitoring-alarm-platform.platform-api"},id:"18qdh1f"},"3uhst2":{title:"Открывает и встраивает dashboards и live-панели",source:{model:"monitoring-alarm-platform.platform-frontend"},target:{model:"monitoring-alarm-platform.grafana"},id:"3uhst2"}},globals:{predicates:{},dynamicPredicates:{},styles:{}},views:{index:{_stage:"layouted",_type:"element",id:"index",title:"Landscape view",description:null,autoLayout:{direction:"TB"},notation:{nodes:[{title:"Участник",shape:"person",color:"green",kinds:["actor"]},{title:"Внешняя облачная система",shape:"rectangle",color:"secondary",kinds:["external-system"]},{title:"Внешняя система",shape:"rectangle",color:"secondary",kinds:["system"]},{title:"Система в scope реализации",shape:"rectangle",color:"amber",kinds:["developed-system"]}]},hash:"SkiSDOMSA-xPhl9--lUnaDJCVtDAohp2qd8a3bKbcwM",bounds:{x:0,y:0,width:1971,height:1844},nodes:[{id:"demo-stand-current-monitored-scope",parent:null,level:0,children:[],inEdges:[],outEdges:["1272t5q"],title:"Demo Stand Current Monitored Scope",modelRef:"demo-stand-current-monitored-scope",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Текущий набор сигналов demo-стенда, которые читает Edge Telemetry Agent."},tags:[],notation:"Внешняя система",technology:"KNX monitored signals / current read scope",kind:"system",x:624,y:0,width:380,height:180,labelBBox:{x:18,y:46,width:344,height:85}},{id:"field-devices",parent:null,level:0,children:[],inEdges:[],outEdges:["c2wk8h"],title:"Полевые устройства и контроллеры",modelRef:"field-devices",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Датчики, актуаторы, PLC, RTU и локальные системы автоматизации на объекте."},tags:[],notation:"Внешняя система",technology:"Field devices / PLC / RTU",kind:"system",navigateTo:"c2-field-devices",x:1114,y:0,width:379,height:180,labelBBox:{x:19,y:46,width:343,height:85}},{id:"service-engineer",parent:null,level:0,children:[],inEdges:[],outEdges:["cw5zhy","16a5o8z"],title:"Сервисный инженер",modelRef:"service-engineer",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Настраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы."},tags:[],notation:"Участник",kind:"actor",x:0,y:0,width:398,height:180,labelBBox:{x:18,y:47,width:362,height:83}},{id:"operator",parent:null,level:0,children:[],inEdges:[],outEdges:["5jh72i"],title:"Оператор",modelRef:"operator",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Работает с текущим состоянием объекта, live-панелями и событиями через центральную платформу мониторинга."},tags:[],notation:"Участник",kind:"actor",x:1603,y:0,width:367,height:180,labelBBox:{x:18,y:47,width:332,height:83}},{id:"field-protocol-gateways",parent:null,level:0,children:[],inEdges:["c2wk8h"],outEdges:["1sivq2o"],title:"Протокольные шлюзы и SCADA-контроллеры",modelRef:"field-protocol-gateways",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Точки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы."},tags:[],notation:"Внешняя система",technology:"KNX / Modbus / OPC UA / SCADA",kind:"system",navigateTo:"c2-field-protocol-gateways",x:1046,y:323,width:454,height:180,labelBBox:{x:18,y:37,width:419,height:103}},{id:"edge-telemetry-agent",parent:null,level:0,children:[],inEdges:["1272t5q","1sivq2o","cw5zhy"],outEdges:["1cfgwdb"],title:"Edge Telemetry Agent",modelRef:"edge-telemetry-agent",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Универсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий."},tags:[],notation:"Система в scope реализации",technology:"Edge collector / normalization / buffering / delivery",kind:"developed-system",navigateTo:"c2-edge-telemetry-agent-containers",x:655,y:662,width:382,height:180,labelBBox:{x:18,y:29,width:347,height:120}},{id:"monitoring-alarm-platform",parent:null,level:0,children:[],inEdges:["16a5o8z","5jh72i","1srhl8t","1cfgwdb"],outEdges:["134rwii"],title:"Monitoring & Alarm Platform",modelRef:"monitoring-alarm-platform",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Центральная система в облаке/интернете для приема событий, хранения телеметрии, визуализации, alarm-логики и маршрутизации уведомлений."},tags:[],notation:"Система в scope реализации",technology:"Cloud monitoring platform / alarm engine / operator UI",kind:"developed-system",navigateTo:"c2-monitoring-alarm-platform-containers",x:661,y:1002,width:369,height:180,labelBBox:{x:19,y:28,width:333,height:121}},{id:"notification-channels",parent:null,level:0,children:[],inEdges:["134rwii"],outEdges:["lkrv31"],title:"Каналы уведомлений",modelRef:"notification-channels",shape:"rectangle",color:"secondary",icon:"bootstrap:cloud",style:{opacity:15,size:"md",iconColor:"blue"},description:{txt:"Email, SMS, push, webhook и другие внешние облачные каналы доставки тревог и служебных уведомлений."},tags:[],notation:"Внешняя облачная система",technology:"Email / SMS / Push / Webhook",kind:"external-system",x:453,y:1325,width:378,height:180,labelBBox:{x:46,y:37,width:316,height:103}},{id:"dispatcher",parent:null,level:0,children:[],inEdges:["lkrv31"],outEdges:["1srhl8t"],title:"Диспетчер",modelRef:"dispatcher",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Контролирует alarm, уведомления и диспетчерские панели через центральную платформу мониторинга."},tags:[],notation:"Участник",kind:"actor",x:675,y:1664,width:344,height:180,labelBBox:{x:18,y:47,width:308,height:83}}],edges:[{id:"1272t5q",parent:null,source:"demo-stand-current-monitored-scope",target:"edge-telemetry-agent",label:"[...]",relations:["8dkmwk","5anl8o"],color:"gray",line:"dashed",head:"normal",points:[[819,180],[825,303],[835,524],[841,652]],labelBBox:{x:835,y:400,width:25,height:18}},{id:"c2wk8h",parent:null,source:"field-devices",target:"field-protocol-gateways",label:"[...]",relations:["c9z7g3","70paaf"],color:"gray",line:"dashed",head:"normal",points:[[1296,180],[1292,221],[1287,270],[1283,313]],labelBBox:{x:1291,y:239,width:25,height:18}},{id:"lkrv31",parent:null,source:"notification-channels",target:"dispatcher",label:`Доставляют уведомления по alarm и 
служебные уведомления`,relations:["cmnl2m"],color:"gray",line:"dashed",head:"normal",points:[[675,1505],[689,1537],[706,1573],[725,1604],[736,1622],[748,1640],[761,1656]],labelBBox:{x:726,y:1566,width:241,height:35}},{id:"134rwii",parent:null,source:"monitoring-alarm-platform",target:"notification-channels",label:"Маршрутизирует уведомления и эскалации",relations:["17cylot","1x9mjjr"],color:"gray",line:"dashed",head:"normal",points:[[726,1182],[708,1200],[691,1220],[678,1242],[666,1264],[657,1290],[652,1315]],labelBBox:{x:679,y:1243,width:288,height:18}},{id:"1sivq2o",parent:null,source:"field-protocol-gateways",target:"edge-telemetry-agent",label:"[...]",relations:["16vogj3","1iben3q","1pfeck9","1qjo0gv"],color:"gray",line:"dashed",head:"normal",points:[[1161,503],[1101,550],[1028,608],[967,656]],labelBBox:{x:1074,y:570,width:25,height:18}},{id:"cw5zhy",parent:null,source:"service-engineer",target:"edge-telemetry-agent",label:`Настраивает адаптеры, модель сигналов, 
polling и доставку`,relations:["1vij76t"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[257,180],[316,267],[414,402],[516,503],[573,559],[642,613],[703,656]],labelBBox:{x:517,y:394,width:280,height:35}},{id:"16a5o8z",parent:null,source:"service-engineer",target:"monitoring-alarm-platform",label:`Настраивает правила alarm, получателей и 
панели мониторинга`,relations:["1yfkq8h","ex5tr4"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[192,180],[187,287],[192,469],[265,602],[360,775],[541,912],[676,997]],labelBBox:{x:266,y:564,width:292,height:35}},{id:"5jh72i",parent:null,source:"operator",target:"monitoring-alarm-platform",label:`Работает с панелями мониторинга, 
событиями и alarm`,relations:["j3w7iw","lycikr"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[1746,180],[1704,266],[1634,399],[1555,503],[1388,723],[1337,776],[1116,942],[1090,961],[1062,980],[1033,997]],labelBBox:{x:1509,y:564,width:237,height:35}},{id:"1srhl8t",parent:null,source:"dispatcher",target:"monitoring-alarm-platform",label:`Работает с alarm, уведомлениями и 
диспетчерскими сценариями`,relations:["iccx6k","saomgf"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[953,1665],[969,1646],[982,1626],[991,1604],[1052,1455],[1052,1391],[991,1242],[984,1223],[972,1206],[960,1190]],labelBBox:{x:1038,y:1396,width:237,height:35}},{id:"1cfgwdb",parent:null,source:"edge-telemetry-agent",target:"monitoring-alarm-platform",label:`Публикует telemetry events и service 
topics через MQTT`,relations:["1vmt72n","1noy8cq"],color:"gray",line:"dashed",head:"normal",points:[[846,842],[846,888],[846,944],[846,992]],labelBBox:{x:847,y:903,width:241,height:35}}]},"deployment-demo-stand-topology":{_type:"deployment",tags:null,links:null,_stage:"layouted",sourcePath:"likec4/deployments/demo-stand/views.c4",description:{txt:'Полная deployment topology demo-стенда по ETS-проекту "Выстовка": локальная сеть, удаленный хост с whitelist, KNX/IP, TP-линия 1.1 и production-контур Monitoring & Alarm Platform с MQTT ingress и Grafana.'},title:"Deployments / Demo Stand / Deployment - Demo Stand Topology",id:"deployment-demo-stand-topology",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Полевой сегмент",shape:"rectangle",color:"blue",kinds:["fieldbus-segment"]},{title:"Сетевой endpoint",shape:"rectangle",color:"indigo",kinds:["network-endpoint"]},{title:"Сетевой контур",shape:"rectangle",color:"sky",kinds:["network-zone"]},{title:"Среда развертывания",shape:"rectangle",color:"blue",kinds:["environment"]},{title:"Физическое устройство",shape:"rectangle",color:"secondary",kinds:["field-asset"]},{title:"Хост",shape:"rectangle",color:"amber",kinds:["host"]}]},hash:"K1Hul4hThRhMbFvCd_NogrNaZmbQyO1FqS3vvzmyV4c",bounds:{x:0,y:0,width:4871,height:1594},nodes:[{id:"demo-stand",parent:null,level:0,children:["demo-stand.local-lan","demo-stand.remote-access"],inEdges:["14yh323"],outEdges:["1dncw9"],deploymentRef:"demo-stand",title:"Demo Stand",kind:"environment",notation:"Среда развертывания",color:"blue",shape:"rectangle",description:{txt:'Фактический demo-стенд по данным ETS-проекта "Выстовка" и connection memo от 2026-03-28.'},tags:[],style:{opacity:15,size:"md"},depth:3,x:8,y:8,width:2176,height:1578,labelBBox:{x:6,y:0,width:78,height:15}},{id:"demo-stand.local-lan",parent:"demo-stand",level:1,children:["demo-stand.local-lan.tp-line-1-1","demo-stand.local-lan.knxnet-ip-backbone"],inEdges:["14doyry"],outEdges:["1dncw9"],deploymentRef:"demo-stand.local-lan",title:"Local LAN 192.0.2.0/24",kind:"network-zone",notation:"Сетевой контур",color:"sky",shape:"rectangle",description:{txt:"Локальная сеть demo-стенда с KNX/IP роутером и TP-линией 1.1; используется как целевая сеть удаленного подключения Edge Telemetry Agent."},tags:[],style:{opacity:15,size:"md"},depth:2,x:58,y:79,width:2076,height:716,labelBBox:{x:6,y:0,width:132,height:15}},{id:"demo-stand.local-lan.tp-line-1-1",parent:"demo-stand.local-lan",level:2,children:["demo-stand.local-lan.tp-line-1-1.device-1-1-1","demo-stand.local-lan.tp-line-1-1.device-1-1-2","demo-stand.local-lan.tp-line-1-1.device-1-1-3","demo-stand.local-lan.tp-line-1-1.device-1-1-4"],inEdges:[],outEdges:["1q4xxx4"],deploymentRef:"demo-stand.local-lan.tp-line-1-1",title:"KNX TP Line 1.1",kind:"fieldbus-segment",technology:"Twisted Pair",notation:"Полевой сегмент",color:"blue",shape:"rectangle",description:{txt:'Активная KNX TP-линия ETS-проекта "Выстовка" в области 1, линия 1.'},tags:[],style:{opacity:15,size:"md"},depth:1,x:108,y:150,width:1976,height:302,labelBBox:{x:6,y:0,width:91,height:15}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-1",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-1",title:"1.1.1 Pushbutton sensor 4 Komfort, 4-gang",kind:"field-asset",technology:"KNX TP device",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Панель кнопок с group address для света, scene и вентиляции: 0/0/1, 0/0/6, 0/0/7, 1/0/0, 1/1/0, 1/2/0, 1/3/0, 1/4/0."},tags:[],style:{opacity:15,size:"md"},x:158,y:222,width:354,height:180,labelBBox:{x:18,y:25,width:319,height:126}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-2",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-2",title:"1.1.2 DALI Gateway Tunable White Plus",kind:"field-asset",technology:"KNX TP to DALI gateway",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Шлюз освещения с адресами Switch/StatusSwitch, RGBW и Scene: 0/0/1-0/0/7."},tags:[],style:{opacity:15,size:"md"},x:642,y:222,width:398,height:180,labelBBox:{x:18,y:37,width:362,height:102}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-3",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-3",title:"1.1.3 Analogaktor 4fach",kind:"field-asset",technology:"KNX TP actuator",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Актуатор вентиляции: VentSwitch, VentDim, VentStatus, VentValue по адресам 1/0/0-1/3/0."},tags:[],style:{opacity:15,size:"md"},x:1170,y:222,width:354,height:180,labelBBox:{x:18,y:46,width:318,height:84}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-4",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-4",title:"1.1.4 Room controller display compact module",kind:"field-asset",technology:"KNX TP room controller",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Комнатный контроллер с Temperature value 2/0/0 и сценой 1/4/0."},tags:[],style:{opacity:15,size:"md"},x:1654,y:222,width:380,height:180,labelBBox:{x:18,y:34,width:344,height:108}},{id:"demo-stand.remote-access",parent:"demo-stand",level:1,children:["demo-stand.remote-access.public-knx-endpoint"],inEdges:["14yh323"],outEdges:["14doyry"],deploymentRef:"demo-stand.remote-access",title:"Remote Access",kind:"network-zone",notation:"Сетевой контур",color:"sky",shape:"rectangle",description:{txt:"Внешний маршрут для удаленной диагностики стенда."},tags:[],style:{opacity:15,size:"md"},depth:1,x:1507,y:1271,width:412,height:265,labelBBox:{x:6,y:0,width:100,height:15}},{id:"monitoring-cloud.public-cloud.mqtt-ingest-host",parent:null,level:0,children:["monitoring-cloud.public-cloud.mqtt-ingest-host.grafana","monitoring-cloud.public-cloud.mqtt-ingest-host.mqtt-ingestion-gateway"],inEdges:[],outEdges:[],deploymentRef:"monitoring-cloud.public-cloud.mqtt-ingest-host",title:"Monitoring Platform Host",kind:"host",technology:"Cloud runtime",notation:"Хост",color:"amber",shape:"rectangle",description:{txt:"Хост облачного контура Monitoring & Alarm Platform для приема telemetry events и визуализации через Grafana."},tags:[],style:{opacity:15,size:"md"},depth:1,x:4407,y:903,width:456,height:651,labelBBox:{x:6,y:0,width:173,height:15}},{id:"demo-stand.remote-access.public-knx-endpoint",parent:"demo-stand.remote-access",level:2,children:[],inEdges:["14yh323"],outEdges:["14doyry"],deploymentRef:"demo-stand.remote-access.public-knx-endpoint",title:"Public KNX/IP endpoint",kind:"network-endpoint",technology:"203.0.113.234:7171 / UDP / NAT",notation:"Сетевой endpoint",color:"indigo",shape:"rectangle",description:{txt:"Публичная точка входа с пробросом на локальный KNX/IP роутер 192.0.2.177:3671."},tags:[],style:{opacity:15,size:"md"},x:1539,y:1324,width:347,height:180,labelBBox:{x:18,y:46,width:312,height:85}},{id:"monitoring-cloud.public-cloud.mqtt-ingest-host.grafana",parent:"monitoring-cloud.public-cloud.mqtt-ingest-host",level:1,children:[],inEdges:[],outEdges:["fktm4u"],kind:"instance",title:"Grafana",description:{txt:"Слой визуализации Monitoring & Alarm Platform: live-панели, инженерные dashboards и операторские представления. В текущей реализации подключается к MQTT Ingestion Gateway через grafana-mqtt-datasource."},technology:"Grafana OSS / grafana-mqtt-datasource",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"monitoring-cloud.public-cloud.mqtt-ingest-host.grafana",modelRef:"monitoring-alarm-platform.grafana",x:4457,y:975,width:356,height:180,labelBBox:{x:18,y:19,width:320,height:138}},{id:"demo-stand.local-lan.knxnet-ip-backbone",parent:"demo-stand.local-lan",level:2,children:["demo-stand.local-lan.knxnet-ip-backbone.knx-router"],inEdges:["1q4xxx4","14doyry"],outEdges:["1dncw9"],deploymentRef:"demo-stand.local-lan.knxnet-ip-backbone",title:"KNXnet/IP Backbone",kind:"fieldbus-segment",technology:"Areas 0.0 and 1.0 / KNXnet-IP",notation:"Полевой сегмент",color:"blue",shape:"rectangle",modelRef:"field-protocol-gateways.knx-router",description:{txt:"IP-магистраль ETS-проекта: магистральная область 0.0 и главная линия 1.0 без прикладных устройств."},tags:[],style:{opacity:15,size:"md"},depth:1,x:1621,y:479,width:446,height:266,labelBBox:{x:6,y:0,width:129,height:15}},{id:"monitoring-cloud.public-cloud.mqtt-ingest-host.mqtt-ingestion-gateway",parent:"monitoring-cloud.public-cloud.mqtt-ingest-host",level:1,children:[],inEdges:["fktm4u"],outEdges:[],kind:"instance",title:"MQTT Ingestion Gateway",description:{txt:"Принимает MQTT telemetry events и service topics от edge-агентов, восстанавливает routing context из topic, валидирует payload и передает canonical events на хранение и в Alarm Rule Engine."},technology:"MQTT broker / ingestion service",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"monitoring-cloud.public-cloud.mqtt-ingest-host.mqtt-ingestion-gateway",modelRef:"monitoring-alarm-platform.mqtt-ingestion-gateway",x:4459,y:1324,width:351,height:180,labelBBox:{x:18,y:19,width:316,height:139}},{id:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",parent:"demo-stand.local-lan.knxnet-ip-backbone",level:3,children:[],inEdges:["1q4xxx4","14doyry"],outEdges:["1dncw9"],kind:"instance",title:"Weinzierl KNX IP Router 751",description:{txt:"Локальная точка входа в KNX/IP и маршрутизатор в TP-линию 1.1."},technology:"192.0.2.177:3671 / UDP / TUNNELING / individual address 1.1.0",tags:[],icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg",color:"secondary",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",modelRef:"field-protocol-gateways.knx-router",x:1653,y:533,width:382,height:180,labelBBox:{x:46,y:46,width:320,height:84}},{id:"whitelisted-remote-host",parent:null,level:0,children:["whitelisted-remote-host.developer-network.edge-host"],inEdges:["1dncw9"],outEdges:["14yh323"],deploymentRef:"whitelisted-remote-host",title:"Whitelisted Remote Host",kind:"environment",notation:"Среда развертывания",color:"blue",shape:"rectangle",description:{txt:"Удаленный хост вне demo-стенда: мой компьютер с IP, разрешенным во внешнем KNX/IP маршруте."},tags:[],style:{opacity:15,size:"md"},depth:2,x:2234,y:850,width:2123,height:736,labelBBox:{x:6,y:0,width:162,height:15}},{id:"whitelisted-remote-host.developer-network.edge-host",parent:"whitelisted-remote-host",level:1,children:["whitelisted-remote-host.developer-network.edge-host.delivery-worker","whitelisted-remote-host.developer-network.edge-host.grafana","whitelisted-remote-host.developer-network.edge-host.collector-runtime","whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway","whitelisted-remote-host.developer-network.edge-host.configuration-bundle","whitelisted-remote-host.developer-network.edge-host.outbox-store"],inEdges:["1dncw9"],outEdges:["14yh323"],deploymentRef:"whitelisted-remote-host.developer-network.edge-host",title:"Developer Workstation",kind:"host",technology:"Remote workstation / whitelisted IP",notation:"Хост",color:"amber",shape:"rectangle",description:{txt:"Хост, на котором запускается Edge Telemetry Agent. Подключается к KNX демо-стенду удаленно, а не размещается на самом стенде. На этом же рабочем месте текущая реализация поднимает MQTT Ingestion Gateway и Grafana."},tags:[],style:{opacity:15,size:"md"},depth:1,x:2266,y:903,width:2059,height:651,labelBBox:{x:6,y:0,width:158,height:15}},{id:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:[],outEdges:["hk8qcy","zga1te","h687yt"],kind:"instance",title:"Delivery Worker",description:{txt:"Фоновый контейнер доставки: читает outbox, публикует telemetry events и service topics в MQTT topic tree и обновляет статус доставки."},technology:"Python worker / MQTT publisher",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",modelRef:"edge-telemetry-agent.delivery-worker",x:3255,y:975,width:369,height:180,labelBBox:{x:18,y:37,width:333,height:102}},{id:"whitelisted-remote-host.developer-network.edge-host.grafana",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:[],outEdges:["107kgtq"],kind:"instance",title:"Grafana",description:{txt:"Слой визуализации Monitoring & Alarm Platform: live-панели, инженерные dashboards и операторские представления. В текущей реализации подключается к MQTT Ingestion Gateway через grafana-mqtt-datasource."},technology:"Grafana OSS / grafana-mqtt-datasource",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.grafana",modelRef:"monitoring-alarm-platform.grafana",x:2316,y:975,width:356,height:180,labelBBox:{x:18,y:19,width:320,height:138}},{id:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["1dncw9"],outEdges:["ql7ddz","os7a2v","14yh323"],kind:"instance",title:"Collector Runtime",description:{txt:"Основной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox."},technology:"Python service",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",modelRef:"edge-telemetry-agent.collector-runtime",x:2802,y:975,width:323,height:180,labelBBox:{x:18,y:28,width:287,height:120}},{id:"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["h687yt","107kgtq"],outEdges:[],kind:"instance",title:"MQTT Ingestion Gateway",description:{txt:"Принимает MQTT telemetry events и service topics от edge-агентов, восстанавливает routing context из topic, валидирует payload и передает canonical events на хранение и в Alarm Rule Engine."},technology:"MQTT broker / ingestion service",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway",modelRef:"monitoring-alarm-platform.mqtt-ingestion-gateway",x:2316,y:1324,width:351,height:180,labelBBox:{x:18,y:19,width:316,height:139}},{id:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["ql7ddz","hk8qcy"],outEdges:[],kind:"instance",title:"Configuration Bundle",description:{txt:"Локальный набор конфигурации источников, модели сигналов, polling-политик и параметров доставки."},technology:"YAML files",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",modelRef:"edge-telemetry-agent.configuration-bundle",x:2798,y:1324,width:376,height:180,labelBBox:{x:18,y:37,width:340,height:103}},{id:"whitelisted-remote-host.developer-network.edge-host.outbox-store",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["os7a2v","zga1te"],outEdges:[],kind:"instance",title:"Outbox Store",description:{txt:"Локальное надежное хранилище исходящих событий, статусов доставки и метаданных повторных попыток."},technology:"SQLite",tags:[],color:"amber",shape:"storage",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.outbox-store",modelRef:"edge-telemetry-agent.outbox-store",x:3431,y:1324,width:344,height:180,labelBBox:{x:18,y:37,width:308,height:103}}],edges:[{id:"14doyry",parent:"demo-stand",source:"demo-stand.remote-access.public-knx-endpoint",target:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",label:`Проброс UDP 7171 -> 3671 для удаленного 
KNX/IP доступа`,relations:["nzow73"],color:"gray",line:"dashed",head:"normal",points:[[1728,1324],[1752,1176],[1802,877],[1828,722]],labelBBox:{x:1807,y:1046,width:288,height:35}},{id:"1dncw9",parent:null,source:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",target:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",label:`Экспонирует group address и телеграммы 
через KNX/IP`,relations:["1iben3q"],color:"gray",line:"dashed",head:"normal",points:[[2035,632],[2238,649],[2563,699],[2798,850],[2843,879],[2881,925],[2909,966]],labelBBox:{x:2777,y:804,width:276,height:34}},{id:"ql7ddz",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",target:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",label:`Загружает описания источников, модель 
сигналов и runtime-политики`,relations:["p5w7v3"],color:"gray",line:"dashed",head:"normal",points:[[2970,1154],[2973,1203],[2977,1264],[2980,1314]],labelBBox:{x:2977,y:1221,width:276,height:34}},{id:"hk8qcy",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",target:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",label:`Загружает настройки MQTT, topic contract 
и retry-политики`,relations:["14gqniy"],color:"gray",line:"dashed",head:"normal",points:[[3324,1154],[3259,1205],[3177,1267],[3110,1318]],labelBBox:{x:3228,y:1221,width:283,height:34}},{id:"os7a2v",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",target:"whitelisted-remote-host.developer-network.edge-host.outbox-store",label:`Сохраняет нормализованные события и 
задания на доставку`,relations:["1337gtq"],color:"gray",line:"dashed",head:"normal",points:[[3126,1087],[3231,1107],[3368,1146],[3469,1220],[3503,1244],[3531,1280],[3553,1315]],labelBBox:{x:3512,y:1221,width:265,height:34}},{id:"zga1te",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",target:"whitelisted-remote-host.developer-network.edge-host.outbox-store",label:`Читает ожидающие события и обновляет 
статус доставки`,relations:["w1v2d7"],color:"gray",line:"dashed",head:"normal",points:[[3624,1083],[3714,1102],[3815,1140],[3871,1220],[3910,1275],[3856,1321],[3785,1354]],labelBBox:{x:3885,y:1221,width:269,height:34}},{id:"h687yt",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",target:"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway",label:"[...]",relations:["1noy8cq","sho40z"],color:"gray",line:"dashed",head:"normal",points:[[3255,1153],[3254,1154],[3252,1154],[3251,1155],[3028,1231],[2952,1184],[2733,1271],[2700,1284],[2666,1301],[2635,1319]],labelBBox:{x:2910,y:1227,width:25,height:18}},{id:"107kgtq",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.grafana",target:"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway",label:"[...]",relations:["1si4dl2","u0iqyf"],color:"gray",line:"dashed",head:"normal",points:[[2493,1154],[2493,1203],[2493,1264],[2493,1314]],labelBBox:{x:2494,y:1227,width:25,height:18}},{id:"14yh323",parent:null,source:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",target:"demo-stand.remote-access.public-knx-endpoint",label:`Подключается к стенду через whitelisted 
public KNX/IP endpoint`,relations:["tj5wz0"],color:"gray",line:"dashed",head:"normal",points:[[2803,1153],[2801,1153],[2800,1154],[2798,1155],[2656,1205],[2613,1189],[2465,1220],[2362,1241],[2336,1246],[2234,1271],[2121,1299],[1996,1333],[1897,1361]],labelBBox:{x:2466,y:1221,width:272,height:34}},{id:"fktm4u",parent:"monitoring-cloud.public-cloud.mqtt-ingest-host",source:"monitoring-cloud.public-cloud.mqtt-ingest-host.grafana",target:"monitoring-cloud.public-cloud.mqtt-ingest-host.mqtt-ingestion-gateway",label:"[...]",relations:["1si4dl2","ou2uwu"],color:"gray",line:"dashed",head:"normal",points:[[4635,1154],[4635,1203],[4635,1264],[4635,1314]],labelBBox:{x:4636,y:1227,width:25,height:18}},{id:"1q4xxx4",parent:"demo-stand.local-lan",source:"demo-stand.local-lan.tp-line-1-1",target:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",label:`Передает KNX TP телеграммы в роутер 
1.1.0`,relations:["cz7g0d"],color:"gray",line:"dashed",head:"normal",points:[[1844,452],[1844,475],[1844,500],[1844,522]],labelBBox:{x:1845,y:454,width:265,height:35}}]},"deployment-demo-stand-current-implementation":{_type:"deployment",tags:null,links:null,_stage:"layouted",sourcePath:"likec4/deployments/demo-stand/views.c4",description:{txt:"Текущая реализация demo-стенда: Edge Telemetry Agent работает на Developer Workstation, публикует в локальный MQTT Ingestion Gateway, а Grafana читает live MQTT поток через grafana-mqtt-datasource."},title:"Deployments / Demo Stand / Deployment - Demo Stand Current Implementation",id:"deployment-demo-stand-current-implementation",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Полевой сегмент",shape:"rectangle",color:"blue",kinds:["fieldbus-segment"]},{title:"Сетевой endpoint",shape:"rectangle",color:"indigo",kinds:["network-endpoint"]},{title:"Сетевой контур",shape:"rectangle",color:"sky",kinds:["network-zone"]},{title:"Среда развертывания",shape:"rectangle",color:"blue",kinds:["environment"]},{title:"Физическое устройство",shape:"rectangle",color:"secondary",kinds:["field-asset"]},{title:"Хост",shape:"rectangle",color:"amber",kinds:["host"]}]},hash:"P_3E3DrtnokkE3-O7jpI7grmjykHjcSbn3-XWIeuWNI",bounds:{x:0,y:0,width:4365,height:1594},nodes:[{id:"demo-stand",parent:null,level:0,children:["demo-stand.local-lan","demo-stand.remote-access"],inEdges:["14yh323"],outEdges:["1dncw9"],deploymentRef:"demo-stand",title:"Demo Stand",kind:"environment",notation:"Среда развертывания",color:"blue",shape:"rectangle",description:{txt:'Фактический demo-стенд по данным ETS-проекта "Выстовка" и connection memo от 2026-03-28.'},tags:[],style:{opacity:15,size:"md"},depth:3,x:8,y:8,width:2176,height:1578,labelBBox:{x:6,y:0,width:78,height:15}},{id:"demo-stand.local-lan",parent:"demo-stand",level:1,children:["demo-stand.local-lan.tp-line-1-1","demo-stand.local-lan.knxnet-ip-backbone"],inEdges:["14doyry"],outEdges:["1dncw9"],deploymentRef:"demo-stand.local-lan",title:"Local LAN 192.0.2.0/24",kind:"network-zone",notation:"Сетевой контур",color:"sky",shape:"rectangle",description:{txt:"Локальная сеть demo-стенда с KNX/IP роутером и TP-линией 1.1; используется как целевая сеть удаленного подключения Edge Telemetry Agent."},tags:[],style:{opacity:15,size:"md"},depth:2,x:58,y:79,width:2076,height:716,labelBBox:{x:6,y:0,width:132,height:15}},{id:"demo-stand.local-lan.tp-line-1-1",parent:"demo-stand.local-lan",level:2,children:["demo-stand.local-lan.tp-line-1-1.device-1-1-1","demo-stand.local-lan.tp-line-1-1.device-1-1-2","demo-stand.local-lan.tp-line-1-1.device-1-1-3","demo-stand.local-lan.tp-line-1-1.device-1-1-4"],inEdges:[],outEdges:["1q4xxx4"],deploymentRef:"demo-stand.local-lan.tp-line-1-1",title:"KNX TP Line 1.1",kind:"fieldbus-segment",technology:"Twisted Pair",notation:"Полевой сегмент",color:"blue",shape:"rectangle",description:{txt:'Активная KNX TP-линия ETS-проекта "Выстовка" в области 1, линия 1.'},tags:[],style:{opacity:15,size:"md"},depth:1,x:108,y:150,width:1976,height:302,labelBBox:{x:6,y:0,width:91,height:15}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-1",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-1",title:"1.1.1 Pushbutton sensor 4 Komfort, 4-gang",kind:"field-asset",technology:"KNX TP device",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Панель кнопок с group address для света, scene и вентиляции: 0/0/1, 0/0/6, 0/0/7, 1/0/0, 1/1/0, 1/2/0, 1/3/0, 1/4/0."},tags:[],style:{opacity:15,size:"md"},x:158,y:222,width:354,height:180,labelBBox:{x:18,y:25,width:319,height:126}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-2",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-2",title:"1.1.2 DALI Gateway Tunable White Plus",kind:"field-asset",technology:"KNX TP to DALI gateway",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Шлюз освещения с адресами Switch/StatusSwitch, RGBW и Scene: 0/0/1-0/0/7."},tags:[],style:{opacity:15,size:"md"},x:642,y:222,width:398,height:180,labelBBox:{x:18,y:37,width:362,height:102}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-3",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-3",title:"1.1.3 Analogaktor 4fach",kind:"field-asset",technology:"KNX TP actuator",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Актуатор вентиляции: VentSwitch, VentDim, VentStatus, VentValue по адресам 1/0/0-1/3/0."},tags:[],style:{opacity:15,size:"md"},x:1170,y:222,width:354,height:180,labelBBox:{x:18,y:46,width:318,height:84}},{id:"demo-stand.local-lan.tp-line-1-1.device-1-1-4",parent:"demo-stand.local-lan.tp-line-1-1",level:3,children:[],inEdges:[],outEdges:[],deploymentRef:"demo-stand.local-lan.tp-line-1-1.device-1-1-4",title:"1.1.4 Room controller display compact module",kind:"field-asset",technology:"KNX TP room controller",notation:"Физическое устройство",color:"secondary",shape:"rectangle",description:{txt:"Комнатный контроллер с Temperature value 2/0/0 и сценой 1/4/0."},tags:[],style:{opacity:15,size:"md"},x:1654,y:222,width:380,height:180,labelBBox:{x:18,y:34,width:344,height:108}},{id:"demo-stand.remote-access",parent:"demo-stand",level:1,children:["demo-stand.remote-access.public-knx-endpoint"],inEdges:["14yh323"],outEdges:["14doyry"],deploymentRef:"demo-stand.remote-access",title:"Remote Access",kind:"network-zone",notation:"Сетевой контур",color:"sky",shape:"rectangle",description:{txt:"Внешний маршрут для удаленной диагностики стенда."},tags:[],style:{opacity:15,size:"md"},depth:1,x:1507,y:1271,width:412,height:265,labelBBox:{x:6,y:0,width:100,height:15}},{id:"demo-stand.remote-access.public-knx-endpoint",parent:"demo-stand.remote-access",level:2,children:[],inEdges:["14yh323"],outEdges:["14doyry"],deploymentRef:"demo-stand.remote-access.public-knx-endpoint",title:"Public KNX/IP endpoint",kind:"network-endpoint",technology:"203.0.113.234:7171 / UDP / NAT",notation:"Сетевой endpoint",color:"indigo",shape:"rectangle",description:{txt:"Публичная точка входа с пробросом на локальный KNX/IP роутер 192.0.2.177:3671."},tags:[],style:{opacity:15,size:"md"},x:1539,y:1324,width:347,height:180,labelBBox:{x:18,y:46,width:312,height:85}},{id:"demo-stand.local-lan.knxnet-ip-backbone",parent:"demo-stand.local-lan",level:2,children:["demo-stand.local-lan.knxnet-ip-backbone.knx-router"],inEdges:["1q4xxx4","14doyry"],outEdges:["1dncw9"],deploymentRef:"demo-stand.local-lan.knxnet-ip-backbone",title:"KNXnet/IP Backbone",kind:"fieldbus-segment",technology:"Areas 0.0 and 1.0 / KNXnet-IP",notation:"Полевой сегмент",color:"blue",shape:"rectangle",modelRef:"field-protocol-gateways.knx-router",description:{txt:"IP-магистраль ETS-проекта: магистральная область 0.0 и главная линия 1.0 без прикладных устройств."},tags:[],style:{opacity:15,size:"md"},depth:1,x:1621,y:479,width:446,height:266,labelBBox:{x:6,y:0,width:129,height:15}},{id:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",parent:"demo-stand.local-lan.knxnet-ip-backbone",level:3,children:[],inEdges:["1q4xxx4","14doyry"],outEdges:["1dncw9"],kind:"instance",title:"Weinzierl KNX IP Router 751",description:{txt:"Локальная точка входа в KNX/IP и маршрутизатор в TP-линию 1.1."},technology:"192.0.2.177:3671 / UDP / TUNNELING / individual address 1.1.0",tags:[],icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg",color:"secondary",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",modelRef:"field-protocol-gateways.knx-router",x:1653,y:533,width:382,height:180,labelBBox:{x:46,y:46,width:320,height:84}},{id:"whitelisted-remote-host",parent:null,level:0,children:["whitelisted-remote-host.developer-network.edge-host"],inEdges:["1dncw9"],outEdges:["14yh323"],deploymentRef:"whitelisted-remote-host",title:"Whitelisted Remote Host",kind:"environment",notation:"Среда развертывания",color:"blue",shape:"rectangle",description:{txt:"Удаленный хост вне demo-стенда: мой компьютер с IP, разрешенным во внешнем KNX/IP маршруте."},tags:[],style:{opacity:15,size:"md"},depth:2,x:2234,y:850,width:2123,height:736,labelBBox:{x:6,y:0,width:162,height:15}},{id:"whitelisted-remote-host.developer-network.edge-host",parent:"whitelisted-remote-host",level:1,children:["whitelisted-remote-host.developer-network.edge-host.delivery-worker","whitelisted-remote-host.developer-network.edge-host.grafana","whitelisted-remote-host.developer-network.edge-host.collector-runtime","whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway","whitelisted-remote-host.developer-network.edge-host.configuration-bundle","whitelisted-remote-host.developer-network.edge-host.outbox-store"],inEdges:["1dncw9"],outEdges:["14yh323"],deploymentRef:"whitelisted-remote-host.developer-network.edge-host",title:"Developer Workstation",kind:"host",technology:"Remote workstation / whitelisted IP",notation:"Хост",color:"amber",shape:"rectangle",description:{txt:"Хост, на котором запускается Edge Telemetry Agent. Подключается к KNX демо-стенду удаленно, а не размещается на самом стенде. На этом же рабочем месте текущая реализация поднимает MQTT Ingestion Gateway и Grafana."},tags:[],style:{opacity:15,size:"md"},depth:1,x:2266,y:903,width:2059,height:651,labelBBox:{x:6,y:0,width:158,height:15}},{id:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:[],outEdges:["hk8qcy","zga1te","h687yt"],kind:"instance",title:"Delivery Worker",description:{txt:"Фоновый контейнер доставки: читает outbox, публикует telemetry events и service topics в MQTT topic tree и обновляет статус доставки."},technology:"Python worker / MQTT publisher",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",modelRef:"edge-telemetry-agent.delivery-worker",x:3255,y:975,width:369,height:180,labelBBox:{x:18,y:37,width:333,height:102}},{id:"whitelisted-remote-host.developer-network.edge-host.grafana",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:[],outEdges:["107kgtq"],kind:"instance",title:"Grafana",description:{txt:"Слой визуализации Monitoring & Alarm Platform: live-панели, инженерные dashboards и операторские представления. В текущей реализации подключается к MQTT Ingestion Gateway через grafana-mqtt-datasource."},technology:"Grafana OSS / grafana-mqtt-datasource",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.grafana",modelRef:"monitoring-alarm-platform.grafana",x:2316,y:975,width:356,height:180,labelBBox:{x:18,y:19,width:320,height:138}},{id:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["1dncw9"],outEdges:["ql7ddz","os7a2v","14yh323"],kind:"instance",title:"Collector Runtime",description:{txt:"Основной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox."},technology:"Python service",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",modelRef:"edge-telemetry-agent.collector-runtime",x:2802,y:975,width:323,height:180,labelBBox:{x:18,y:28,width:287,height:120}},{id:"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["h687yt","107kgtq"],outEdges:[],kind:"instance",title:"MQTT Ingestion Gateway",description:{txt:"Принимает MQTT telemetry events и service topics от edge-агентов, восстанавливает routing context из topic, валидирует payload и передает canonical events на хранение и в Alarm Rule Engine."},technology:"MQTT broker / ingestion service",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway",modelRef:"monitoring-alarm-platform.mqtt-ingestion-gateway",x:2316,y:1324,width:351,height:180,labelBBox:{x:18,y:19,width:316,height:139}},{id:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["ql7ddz","hk8qcy"],outEdges:[],kind:"instance",title:"Configuration Bundle",description:{txt:"Локальный набор конфигурации источников, модели сигналов, polling-политик и параметров доставки."},technology:"YAML files",tags:[],color:"amber",shape:"rectangle",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",modelRef:"edge-telemetry-agent.configuration-bundle",x:2798,y:1324,width:376,height:180,labelBBox:{x:18,y:37,width:340,height:103}},{id:"whitelisted-remote-host.developer-network.edge-host.outbox-store",parent:"whitelisted-remote-host.developer-network.edge-host",level:2,children:[],inEdges:["os7a2v","zga1te"],outEdges:[],kind:"instance",title:"Outbox Store",description:{txt:"Локальное надежное хранилище исходящих событий, статусов доставки и метаданных повторных попыток."},technology:"SQLite",tags:[],color:"amber",shape:"storage",style:{opacity:15,size:"md"},deploymentRef:"whitelisted-remote-host.developer-network.edge-host.outbox-store",modelRef:"edge-telemetry-agent.outbox-store",x:3431,y:1324,width:344,height:180,labelBBox:{x:18,y:37,width:308,height:103}}],edges:[{id:"14doyry",parent:"demo-stand",source:"demo-stand.remote-access.public-knx-endpoint",target:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",label:`Проброс UDP 7171 -> 3671 для удаленного 
KNX/IP доступа`,relations:["nzow73"],color:"gray",line:"dashed",head:"normal",points:[[1728,1324],[1752,1176],[1802,877],[1828,722]],labelBBox:{x:1807,y:1046,width:288,height:35}},{id:"1dncw9",parent:null,source:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",target:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",label:`Экспонирует group address и телеграммы 
через KNX/IP`,relations:["1iben3q"],color:"gray",line:"dashed",head:"normal",points:[[2035,632],[2238,649],[2563,699],[2798,850],[2843,879],[2881,925],[2909,966]],labelBBox:{x:2777,y:804,width:276,height:34}},{id:"ql7ddz",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",target:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",label:`Загружает описания источников, модель 
сигналов и runtime-политики`,relations:["p5w7v3"],color:"gray",line:"dashed",head:"normal",points:[[2970,1154],[2973,1203],[2977,1264],[2980,1314]],labelBBox:{x:2977,y:1221,width:276,height:34}},{id:"hk8qcy",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",target:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",label:`Загружает настройки MQTT, topic contract 
и retry-политики`,relations:["14gqniy"],color:"gray",line:"dashed",head:"normal",points:[[3324,1154],[3259,1205],[3177,1267],[3110,1318]],labelBBox:{x:3228,y:1221,width:283,height:34}},{id:"os7a2v",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",target:"whitelisted-remote-host.developer-network.edge-host.outbox-store",label:`Сохраняет нормализованные события и 
задания на доставку`,relations:["1337gtq"],color:"gray",line:"dashed",head:"normal",points:[[3126,1087],[3231,1107],[3368,1146],[3469,1220],[3503,1244],[3531,1280],[3553,1315]],labelBBox:{x:3512,y:1221,width:265,height:34}},{id:"zga1te",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",target:"whitelisted-remote-host.developer-network.edge-host.outbox-store",label:`Читает ожидающие события и обновляет 
статус доставки`,relations:["w1v2d7"],color:"gray",line:"dashed",head:"normal",points:[[3624,1083],[3714,1102],[3815,1140],[3871,1220],[3910,1275],[3856,1321],[3785,1354]],labelBBox:{x:3885,y:1221,width:269,height:34}},{id:"h687yt",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",target:"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway",label:"[...]",relations:["1noy8cq","sho40z"],color:"gray",line:"dashed",head:"normal",points:[[3255,1153],[3254,1154],[3252,1154],[3251,1155],[3028,1231],[2952,1184],[2733,1271],[2700,1284],[2666,1301],[2635,1319]],labelBBox:{x:2910,y:1227,width:25,height:18}},{id:"107kgtq",parent:"whitelisted-remote-host.developer-network.edge-host",source:"whitelisted-remote-host.developer-network.edge-host.grafana",target:"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway",label:"[...]",relations:["1si4dl2","u0iqyf"],color:"gray",line:"dashed",head:"normal",points:[[2493,1154],[2493,1203],[2493,1264],[2493,1314]],labelBBox:{x:2494,y:1227,width:25,height:18}},{id:"14yh323",parent:null,source:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",target:"demo-stand.remote-access.public-knx-endpoint",label:`Подключается к стенду через whitelisted 
public KNX/IP endpoint`,relations:["tj5wz0"],color:"gray",line:"dashed",head:"normal",points:[[2803,1153],[2801,1153],[2800,1154],[2798,1155],[2656,1205],[2613,1189],[2465,1220],[2362,1241],[2336,1246],[2234,1271],[2121,1299],[1996,1333],[1897,1361]],labelBBox:{x:2466,y:1221,width:272,height:34}},{id:"1q4xxx4",parent:"demo-stand.local-lan",source:"demo-stand.local-lan.tp-line-1-1",target:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",label:`Передает KNX TP телеграммы в роутер 
1.1.0`,relations:["cz7g0d"],color:"gray",line:"dashed",head:"normal",points:[[1844,452],[1844,475],[1844,500],[1844,522]],labelBBox:{x:1845,y:454,width:265,height:35}}]},"demo-stand-current-monitored-points":{_type:"element",tags:null,links:null,_stage:"layouted",sourcePath:"likec4/deployments/demo-stand/views.c4",description:{txt:"Текущий мониторинговый срез demo-стенда: устройства и KNX group address, которые сейчас читает Edge Telemetry Agent."},title:"Deployments / Demo Stand / Demo Stand - Current Monitored Points",id:"demo-stand-current-monitored-points",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Внешняя система",shape:"rectangle",color:"secondary",kinds:["system"]},{title:"Контейнер",shape:"rectangle",color:"amber",kinds:["container"]},{title:"Полевое устройство",shape:"rectangle",color:"secondary",kinds:["field-device"]},{title:"Полевой шлюз",shape:"rectangle",color:"secondary",kinds:["field-gateway"]},{title:"Система в scope реализации",shape:"rectangle",color:"amber",kinds:["developed-system"]},{title:"Точка телеметрии",shape:"rectangle",color:"secondary",kinds:["telemetry-point"]}]},hash:"zLAYrW1mWgboB7yl3RcYkT-4p1L_Nj1dQFOvHp-l6_k",bounds:{x:0,y:0,width:1991,height:954},nodes:[{id:"demo-stand-current-monitored-scope",parent:null,level:0,children:["demo-stand-current-monitored-scope.device-1-1-1","demo-stand-current-monitored-scope.device-1-1-2","demo-stand-current-monitored-scope.device-1-1-4","demo-stand-current-monitored-scope.light-switch-feedback","demo-stand-current-monitored-scope.room-temperature"],inEdges:[],outEdges:["6c0ua1","1t1ianm"],title:"Demo Stand Current Monitored Scope",modelRef:"demo-stand-current-monitored-scope",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Текущий набор сигналов demo-стенда, которые читает Edge Telemetry Agent."},tags:[],notation:"Внешняя система",technology:"KNX monitored signals / current read scope",kind:"system",depth:1,x:8,y:8,width:1541,height:605,labelBBox:{x:6,y:0,width:247,height:15}},{id:"field-protocol-gateways",parent:null,level:0,children:["field-protocol-gateways.knx-router"],inEdges:[],outEdges:["g1oj49"],title:"Протокольные шлюзы и SCADA-контроллеры",modelRef:"field-protocol-gateways",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Точки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы."},tags:[],notation:"Внешняя система",technology:"KNX / Modbus / OPC UA / SCADA",kind:"system",depth:1,navigateTo:"c2-field-protocol-gateways",x:1599,y:340,width:384,height:265,labelBBox:{x:6,y:0,width:233,height:15}},{id:"demo-stand-current-monitored-scope.device-1-1-1",parent:"demo-stand-current-monitored-scope",level:1,children:[],inEdges:[],outEdges:["moi6x7"],title:"1.1.1 Pushbutton sensor 4 Komfort, 4-gang",modelRef:"demo-stand-current-monitored-scope.device-1-1-1",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Кнопочная панель, участвующая в публикации feedback состояния света."},tags:[],notation:"Полевое устройство",technology:"KNX TP device",kind:"field-device",x:48,y:69,width:369,height:180,labelBBox:{x:18,y:34,width:333,height:109}},{id:"demo-stand-current-monitored-scope.device-1-1-2",parent:"demo-stand-current-monitored-scope",level:1,children:[],inEdges:[],outEdges:["1sohalk"],title:"1.1.2 DALI Gateway Tunable White Plus",modelRef:"demo-stand-current-monitored-scope.device-1-1-2",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"DALI gateway, публикующий статус светового канала."},tags:[],notation:"Полевое устройство",technology:"KNX TP to DALI gateway",kind:"field-device",x:528,y:69,width:398,height:180,labelBBox:{x:18,y:46,width:362,height:85}},{id:"demo-stand-current-monitored-scope.device-1-1-4",parent:"demo-stand-current-monitored-scope",level:1,children:[],inEdges:[],outEdges:["r5yyd"],title:"1.1.4 Room controller display compact module",modelRef:"demo-stand-current-monitored-scope.device-1-1-4",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Комнатный контроллер, публикующий температуру помещения."},tags:[],notation:"Полевое устройство",technology:"KNX TP room controller",kind:"field-device",x:1036,y:69,width:398,height:180,labelBBox:{x:18,y:34,width:362,height:109}},{id:"field-protocol-gateways.knx-router",parent:"field-protocol-gateways",level:1,children:[],inEdges:[],outEdges:["g1oj49"],title:"KNX Segment",modelRef:"field-protocol-gateways.knx-router",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"KNX / KNXnet-IP",kind:"field-gateway",x:1631,y:393,width:320,height:180,labelBBox:{x:81,y:66,width:188,height:45}},{id:"demo-stand-current-monitored-scope.light-switch-feedback",parent:"demo-stand-current-monitored-scope",level:1,children:[],inEdges:["moi6x7","1sohalk"],outEdges:["6c0ua1"],title:"0/0/7 StatusSwitch",modelRef:"demo-stand-current-monitored-scope.light-switch-feedback",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Фактически читаемая точка состояния света."},tags:[],notation:"Точка телеметрии",technology:"KNX DPT 1.001 / feedback",kind:"telemetry-point",x:542,y:393,width:369,height:180,labelBBox:{x:18,y:55,width:333,height:67}},{id:"demo-stand-current-monitored-scope.room-temperature",parent:"demo-stand-current-monitored-scope",level:1,children:[],inEdges:["r5yyd"],outEdges:["1t1ianm"],title:"2/0/0 Temp Value",modelRef:"demo-stand-current-monitored-scope.room-temperature",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Фактически читаемая точка температуры помещения."},tags:[],notation:"Точка телеметрии",technology:"KNX DPT 9.xxx / room temperature",kind:"telemetry-point",x:1067,y:393,width:336,height:180,labelBBox:{x:18,y:46,width:300,height:85}},{id:"edge-telemetry-agent",parent:null,level:0,children:["edge-telemetry-agent.collector-runtime"],inEdges:["6c0ua1","1t1ianm","g1oj49"],outEdges:[],title:"Edge Telemetry Agent",modelRef:"edge-telemetry-agent",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Универсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий."},tags:[],notation:"Система в scope реализации",technology:"Edge collector / normalization / buffering / delivery",kind:"developed-system",depth:1,navigateTo:"c2-edge-telemetry-agent-containers",x:1041,y:681,width:388,height:265,labelBBox:{x:6,y:0,width:146,height:15}},{id:"edge-telemetry-agent.collector-runtime",parent:"edge-telemetry-agent",level:1,children:[],inEdges:["6c0ua1","1t1ianm","g1oj49"],outEdges:[],title:"Collector Runtime",modelRef:"edge-telemetry-agent.collector-runtime",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Основной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox."},tags:[],notation:"Контейнер",technology:"Python service",kind:"container",x:1073,y:734,width:323,height:180,labelBBox:{x:18,y:28,width:287,height:121}}],edges:[{id:"moi6x7",parent:"demo-stand-current-monitored-scope",source:"demo-stand-current-monitored-scope.device-1-1-1",target:"demo-stand-current-monitored-scope.light-switch-feedback",label:"Публикует feedback состояния света 0/0/7",relations:["ewjy7p"],color:"gray",line:"dashed",head:"normal",points:[[314,249],[343,278],[377,308],[412,332],[449,358],[492,382],[533,402]],labelBBox:{x:413,y:310,width:286,height:18}},{id:"1sohalk",parent:"demo-stand-current-monitored-scope",source:"demo-stand-current-monitored-scope.device-1-1-2",target:"demo-stand-current-monitored-scope.light-switch-feedback",label:"Публикует статус светового канала 0/0/7",relations:["1bukbxz"],color:"gray",line:"dashed",head:"normal",points:[[727,249],[727,291],[727,340],[727,383]],labelBBox:{x:728,y:310,width:284,height:18}},{id:"r5yyd",parent:"demo-stand-current-monitored-scope",source:"demo-stand-current-monitored-scope.device-1-1-4",target:"demo-stand-current-monitored-scope.room-temperature",label:"Публикует температуру помещения 2/0/0",relations:["lkpzpl"],color:"gray",line:"dashed",head:"normal",points:[[1235,249],[1235,291],[1235,340],[1235,383]],labelBBox:{x:1236,y:310,width:272,height:18}},{id:"6c0ua1",parent:null,source:"demo-stand-current-monitored-scope.light-switch-feedback",target:"edge-telemetry-agent.collector-runtime",label:`Поставляет feedback состояния света в 
текущий read scope`,relations:["8dkmwk"],color:"gray",line:"dashed",head:"normal",points:[[814,573],[850,607],[893,644],[935,673],[975,700],[1021,726],[1064,747]],labelBBox:{x:936,y:634,width:271,height:35}},{id:"1t1ianm",parent:null,source:"demo-stand-current-monitored-scope.room-temperature",target:"edge-telemetry-agent.collector-runtime",label:`Поставляет температуру помещения в 
текущий read scope`,relations:["5anl8o"],color:"gray",line:"dashed",head:"normal",points:[[1235,573],[1235,619],[1235,676],[1235,724]],labelBBox:{x:1236,y:634,width:257,height:35}},{id:"g1oj49",parent:null,source:"field-protocol-gateways.knx-router",target:"edge-telemetry-agent.collector-runtime",label:`Экспонирует group address и телеграммы 
через KNX/IP`,relations:["1iben3q"],color:"gray",line:"dashed",head:"normal",points:[[1671,573],[1625,606],[1571,642],[1521,673],[1484,695],[1444,717],[1406,738]],labelBBox:{x:1583,y:634,width:276,height:35}}]},"c2-field-devices":{_type:"element",tags:null,links:null,viewOf:"field-devices",_stage:"layouted",sourcePath:"likec4/devices/views.c4",description:{txt:"Внутренняя структура полевых устройств и контроллеров. Диаграмма показывает конкретные устройства и их подключение к ближайшему протокольному шлюзу."},title:"Field Systems / Devices / C2 Devices",id:"c2-field-devices",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Внешняя система",shape:"rectangle",color:"secondary",kinds:["system"]},{title:"Полевое устройство",shape:"rectangle",color:"secondary",kinds:["field-device"]},{title:"Полевой шлюз",shape:"rectangle",color:"secondary",kinds:["field-gateway"]}]},hash:"hCjA9hNqXoVOMXZrPNPugV2wf5r167Fp-6uHmpvaPao",bounds:{x:0,y:0,width:846,height:589},nodes:[{id:"field-devices",parent:null,level:0,children:["field-devices.knx-temperature-sensor","field-devices.knx-switch"],inEdges:[],outEdges:["1c8khzh","nh3syw"],title:"Полевые устройства и контроллеры",modelRef:"field-devices",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Датчики, актуаторы, PLC, RTU и локальные системы автоматизации на объекте."},tags:[],notation:"Внешняя система",technology:"Field devices / PLC / RTU",kind:"system",depth:1,x:8,y:8,width:830,height:281,labelBBox:{x:6,y:0,width:190,height:15}},{id:"field-devices.knx-temperature-sensor",parent:"field-devices",level:1,children:[],inEdges:[],outEdges:["1c8khzh"],title:"knx-temperature-sensor",modelRef:"field-devices.knx-temperature-sensor",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Датчик температуры"},tags:[],notation:"Полевое устройство",technology:"KNX",kind:"field-device",x:48,y:69,width:320,height:180,labelBBox:{x:52,y:55,width:216,height:67}},{id:"field-devices.knx-switch",parent:"field-devices",level:1,children:[],inEdges:[],outEdges:["nh3syw"],title:"knx-switch",modelRef:"field-devices.knx-switch",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Выключатель"},tags:[],notation:"Полевое устройство",technology:"KNX",kind:"field-device",x:478,y:69,width:320,height:180,labelBBox:{x:111,y:55,width:97,height:67}},{id:"field-protocol-gateways.knx-router",parent:null,level:0,children:[],inEdges:["1c8khzh","nh3syw"],outEdges:[],title:"KNX Segment",modelRef:"field-protocol-gateways.knx-router",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"KNX / KNXnet-IP",kind:"field-gateway",x:262,y:409,width:320,height:180,labelBBox:{x:81,y:66,width:188,height:45}}],edges:[{id:"1c8khzh",parent:null,source:"field-devices.knx-temperature-sensor",target:"field-protocol-gateways.knx-router",label:`Передают телеграммы, состояния и команды 
в KNX-сегменте`,relations:["c9z7g3"],color:"gray",line:"dashed",head:"normal",points:[[185,249],[181,282],[182,319],[198,349],[212,374],[232,396],[254,414]],labelBBox:{x:199,y:310,width:296,height:35}},{id:"nh3syw",parent:null,source:"field-devices.knx-switch",target:"field-protocol-gateways.knx-router",label:`Передает телеграммы состояния и 
управления в KNX-сегменте`,relations:["70paaf"],color:"gray",line:"dashed",head:"normal",points:[[582,249],[562,281],[540,316],[519,349],[508,366],[497,383],[486,401]],labelBBox:{x:543,y:310,width:233,height:35}}]},"c2-field-protocol-gateways":{_type:"element",tags:null,links:null,viewOf:"field-protocol-gateways",_stage:"layouted",sourcePath:"likec4/gateways/views.c4",description:{txt:"Внутренняя структура протокольных шлюзов и SCADA-контроллеров. Диаграмма показывает конкретные southbound-сегменты и их передачу данных в Edge Telemetry Agent."},title:"Field Systems / Gateways / C2 Gateways",id:"c2-field-protocol-gateways",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Внешняя система",shape:"rectangle",color:"secondary",kinds:["system"]},{title:"Контейнер",shape:"rectangle",color:"amber",kinds:["container"]},{title:"Полевое устройство",shape:"rectangle",color:"secondary",kinds:["field-device"]},{title:"Полевой шлюз",shape:"rectangle",color:"secondary",kinds:["field-gateway"]}]},hash:"c9hOdZ6FuSf2HVs-qd8IguDsGBIMx_uVCGtX4uHhp5I",bounds:{x:0,y:0,width:1443,height:868},nodes:[{id:"field-devices.knx-temperature-sensor",parent:null,level:0,children:[],inEdges:[],outEdges:["1c8khzh"],title:"knx-temperature-sensor",modelRef:"field-devices.knx-temperature-sensor",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Датчик температуры"},tags:[],notation:"Полевое устройство",technology:"KNX",kind:"field-device",x:0,y:0,width:320,height:180,labelBBox:{x:52,y:55,width:216,height:67}},{id:"field-devices.knx-switch",parent:null,level:0,children:[],inEdges:[],outEdges:["nh3syw"],title:"knx-switch",modelRef:"field-devices.knx-switch",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Выключатель"},tags:[],notation:"Полевое устройство",technology:"KNX",kind:"field-device",x:430,y:0,width:320,height:180,labelBBox:{x:111,y:55,width:97,height:67}},{id:"field-protocol-gateways",parent:null,level:0,children:["field-protocol-gateways.knx-router","field-protocol-gateways.modbus-gateway","field-protocol-gateways.opc-ua-gateway"],inEdges:["1c8khzh","nh3syw"],outEdges:["g1oj49","1wgfup1","6cczmq"],title:"Протокольные шлюзы и SCADA-контроллеры",modelRef:"field-protocol-gateways",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Точки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы."},tags:[],notation:"Внешняя система",technology:"KNX / Modbus / OPC UA / SCADA",kind:"system",depth:1,x:175,y:288,width:1260,height:281,labelBBox:{x:6,y:0,width:233,height:15}},{id:"field-protocol-gateways.knx-router",parent:"field-protocol-gateways",level:1,children:[],inEdges:["1c8khzh","nh3syw"],outEdges:["g1oj49"],title:"KNX Segment",modelRef:"field-protocol-gateways.knx-router",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"KNX / KNXnet-IP",kind:"field-gateway",x:215,y:349,width:320,height:180,labelBBox:{x:81,y:66,width:188,height:45}},{id:"field-protocol-gateways.modbus-gateway",parent:"field-protocol-gateways",level:1,children:[],inEdges:[],outEdges:["1wgfup1"],title:"Modbus Gateway",modelRef:"field-protocol-gateways.modbus-gateway",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/modbus.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"Modbus TCP / Modbus RTU",kind:"field-gateway",x:645,y:349,width:320,height:180,labelBBox:{x:62,y:66,width:226,height:45}},{id:"field-protocol-gateways.opc-ua-gateway",parent:"field-protocol-gateways",level:1,children:[],inEdges:[],outEdges:["6cczmq"],title:"OPC UA Server",modelRef:"field-protocol-gateways.opc-ua-gateway",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/opc-ua.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"OPC UA",kind:"field-gateway",x:1075,y:349,width:320,height:180,labelBBox:{x:74,y:66,width:203,height:45}},{id:"edge-telemetry-agent.collector-runtime",parent:null,level:0,children:[],inEdges:["g1oj49","1wgfup1","6cczmq"],outEdges:[],title:"Collector Runtime",modelRef:"edge-telemetry-agent.collector-runtime",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Основной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox."},tags:[],notation:"Контейнер",technology:"Python service",kind:"container",x:643,y:688,width:323,height:180,labelBBox:{x:18,y:29,width:287,height:120}}],edges:[{id:"1c8khzh",parent:null,source:"field-devices.knx-temperature-sensor",target:"field-protocol-gateways.knx-router",label:`Передают телеграммы, состояния и команды 
в KNX-сегменте`,relations:["c9z7g3"],color:"gray",line:"dashed",head:"normal",points:[[141,180],[138,213],[140,249],[155,280],[168,304],[186,326],[207,345]],labelBBox:{x:156,y:241,width:296,height:35}},{id:"nh3syw",parent:null,source:"field-devices.knx-switch",target:"field-protocol-gateways.knx-router",label:`Передает телеграммы состояния и 
управления в KNX-сегменте`,relations:["70paaf"],color:"gray",line:"dashed",head:"normal",points:[[537,180],[518,211],[496,247],[476,280],[464,299],[451,320],[438,340]],labelBBox:{x:499,y:241,width:233,height:35}},{id:"g1oj49",parent:null,source:"field-protocol-gateways.knx-router",target:"edge-telemetry-agent.collector-runtime",label:`Экспонирует group address и телеграммы 
через KNX/IP`,relations:["1iben3q"],color:"gray",line:"dashed",head:"normal",points:[[420,528],[441,563],[468,601],[500,628],[539,663],[587,691],[634,714]],labelBBox:{x:501,y:590,width:276,height:35}},{id:"1wgfup1",parent:null,source:"field-protocol-gateways.modbus-gateway",target:"edge-telemetry-agent.collector-runtime",label:`Экспонирует registers, coils и 
дискретные значения через Modbus`,relations:["1pfeck9"],color:"gray",line:"dashed",head:"normal",points:[[805,529],[805,574],[805,631],[805,678]],labelBBox:{x:806,y:590,width:244,height:35}},{id:"6cczmq",parent:null,source:"field-protocol-gateways.opc-ua-gateway",target:"edge-telemetry-agent.collector-runtime",label:`Экспонирует nodes, subscriptions и 
значения через OPC UA`,relations:["1qjo0gv"],color:"gray",line:"dashed",head:"normal",points:[[1172,529],[1146,562],[1113,600],[1078,628],[1047,654],[1011,677],[976,697]],labelBBox:{x:1118,y:590,width:233,height:35}}]},"c2-edge-telemetry-agent-containers":{_type:"element",tags:null,links:null,viewOf:"edge-telemetry-agent",_stage:"layouted",sourcePath:"likec4/systems/edge-telemetry-agent/views.c4",description:{txt:"Контейнерная декомпозиция Edge Telemetry Agent. Каждый контейнер описан в отдельном файле внутри systems/edge-telemetry-agent/containers."},title:"Developed Systems / Edge Telemetry Agent / C2 Containers",id:"c2-edge-telemetry-agent-containers",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Участник",shape:"person",color:"green",kinds:["actor"]},{title:"Внешняя система",shape:"rectangle",color:"secondary",kinds:["system"]},{title:"Контейнер",shape:"rectangle",color:"amber",kinds:["container"]},{title:"Полевой шлюз",shape:"rectangle",color:"secondary",kinds:["field-gateway"]},{title:"Система в scope реализации",shape:"rectangle",color:"primary",kinds:["developed-system"]},{title:"Система в scope реализации",shape:"rectangle",color:"amber",kinds:["developed-system"]},{title:"Контейнер",shape:"storage",color:"amber",kinds:["container"]}]},ranks:[{type:"source",nodes:["field-protocol-gateways","service-engineer"]},{type:"sink",nodes:["monitoring-alarm-platform"]}],hash:"YzBqT8piMr-u-bzfzUPG-dmvNPQcRHldW4T5DnAezpE",bounds:{x:0,y:0,width:3043,height:986},nodes:[{id:"demo-stand-current-monitored-scope",parent:null,level:0,children:[],inEdges:[],outEdges:["2cx3pe"],title:"Demo Stand Current Monitored Scope",modelRef:"demo-stand-current-monitored-scope",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Текущий набор сигналов demo-стенда, которые читает Edge Telemetry Agent."},tags:[],notation:"Внешняя система",technology:"KNX monitored signals / current read scope",kind:"system",x:1846,y:69,width:380,height:180,labelBBox:{x:18,y:46,width:344,height:85}},{id:"field-protocol-gateways",parent:null,level:0,children:["field-protocol-gateways.knx-router","field-protocol-gateways.modbus-gateway","field-protocol-gateways.opc-ua-gateway"],inEdges:[],outEdges:["g1oj49","1wgfup1","6cczmq"],title:"Протокольные шлюзы и SCADA-контроллеры",modelRef:"field-protocol-gateways",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Точки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы."},tags:[],notation:"Внешняя система",technology:"KNX / Modbus / OPC UA / SCADA",kind:"system",depth:1,navigateTo:"c2-field-protocol-gateways",x:8,y:8,width:1260,height:281,labelBBox:{x:6,y:0,width:233,height:15}},{id:"service-engineer",parent:null,level:0,children:[],inEdges:[],outEdges:["cw5zhy"],title:"Сервисный инженер",modelRef:"service-engineer",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Настраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы."},tags:[],notation:"Участник",kind:"actor",x:1338,y:69,width:398,height:180,labelBBox:{x:18,y:47,width:362,height:83}},{id:"field-protocol-gateways.knx-router",parent:"field-protocol-gateways",level:1,children:[],inEdges:[],outEdges:["g1oj49"],title:"KNX Segment",modelRef:"field-protocol-gateways.knx-router",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"KNX / KNXnet-IP",kind:"field-gateway",x:48,y:69,width:320,height:180,labelBBox:{x:81,y:66,width:188,height:45}},{id:"field-protocol-gateways.modbus-gateway",parent:"field-protocol-gateways",level:1,children:[],inEdges:[],outEdges:["1wgfup1"],title:"Modbus Gateway",modelRef:"field-protocol-gateways.modbus-gateway",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/modbus.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"Modbus TCP / Modbus RTU",kind:"field-gateway",x:478,y:69,width:320,height:180,labelBBox:{x:62,y:66,width:226,height:45}},{id:"field-protocol-gateways.opc-ua-gateway",parent:"field-protocol-gateways",level:1,children:[],inEdges:[],outEdges:["6cczmq"],title:"OPC UA Server",modelRef:"field-protocol-gateways.opc-ua-gateway",shape:"rectangle",color:"secondary",icon:"file:///Users/srgi0/projects/web-monitoring/arch/images/opc-ua.svg",style:{opacity:15,size:"md"},tags:[],notation:"Полевой шлюз",technology:"OPC UA",kind:"field-gateway",x:908,y:69,width:320,height:180,labelBBox:{x:73,y:66,width:204,height:45}},{id:"edge-telemetry-agent",parent:null,level:0,children:["edge-telemetry-agent.collector-runtime","edge-telemetry-agent.delivery-worker","edge-telemetry-agent.configuration-bundle","edge-telemetry-agent.outbox-store"],inEdges:["2cx3pe","cw5zhy","g1oj49","1wgfup1","6cczmq"],outEdges:["mcfzkm"],title:"Edge Telemetry Agent",modelRef:"edge-telemetry-agent",shape:"rectangle",color:"primary",style:{opacity:15,size:"md"},description:{txt:"Универсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий."},tags:[],notation:"Система в scope реализации",technology:"Edge collector / normalization / buffering / delivery",kind:"developed-system",depth:1,navigateTo:"c1-system-context",x:920,y:357,width:1713,height:621,labelBBox:{x:6,y:0,width:146,height:15}},{id:"edge-telemetry-agent.collector-runtime",parent:"edge-telemetry-agent",level:1,children:[],inEdges:["2cx3pe","g1oj49","1wgfup1","6cczmq"],outEdges:["1tn9f5d","ekpvap"],title:"Collector Runtime",modelRef:"edge-telemetry-agent.collector-runtime",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Основной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox."},tags:[],notation:"Контейнер",technology:"Python service",kind:"container",x:1183,y:418,width:323,height:180,labelBBox:{x:18,y:28,width:287,height:121}},{id:"edge-telemetry-agent.delivery-worker",parent:"edge-telemetry-agent",level:1,children:[],inEdges:[],outEdges:["lamun8","138i2jo","mcfzkm"],title:"Delivery Worker",modelRef:"edge-telemetry-agent.delivery-worker",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Фоновый контейнер доставки: читает outbox, публикует telemetry events и service topics в MQTT topic tree и обновляет статус доставки."},tags:[],notation:"Контейнер",technology:"Python worker / MQTT publisher",kind:"container",x:2138,y:418,width:369,height:180,labelBBox:{x:18,y:37,width:333,height:103}},{id:"edge-telemetry-agent.configuration-bundle",parent:"edge-telemetry-agent",level:1,children:[],inEdges:["1tn9f5d","lamun8"],outEdges:[],title:"Configuration Bundle",modelRef:"edge-telemetry-agent.configuration-bundle",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Локальный набор конфигурации источников, модели сигналов, polling-политик и параметров доставки."},tags:[],notation:"Контейнер",technology:"YAML files",kind:"container",x:960,y:758,width:376,height:180,labelBBox:{x:18,y:37,width:340,height:102}},{id:"edge-telemetry-agent.outbox-store",parent:"edge-telemetry-agent",level:1,children:[],inEdges:["ekpvap","138i2jo"],outEdges:[],title:"Outbox Store",modelRef:"edge-telemetry-agent.outbox-store",shape:"storage",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Локальное надежное хранилище исходящих событий, статусов доставки и метаданных повторных попыток."},tags:[],notation:"Контейнер",technology:"SQLite",kind:"container",x:1446,y:758,width:344,height:180,labelBBox:{x:18,y:37,width:308,height:102}},{id:"monitoring-alarm-platform",parent:null,level:0,children:[],inEdges:["mcfzkm"],outEdges:[],title:"Monitoring & Alarm Platform",modelRef:"monitoring-alarm-platform",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Центральная система в облаке/интернете для приема событий, хранения телеметрии, визуализации, alarm-логики и маршрутизации уведомлений."},tags:[],notation:"Система в scope реализации",technology:"Cloud monitoring platform / alarm engine / operator UI",kind:"developed-system",navigateTo:"c2-monitoring-alarm-platform-containers",x:2673,y:758,width:369,height:180,labelBBox:{x:18,y:28,width:333,height:120}}],edges:[{id:"2cx3pe",parent:null,source:"demo-stand-current-monitored-scope",target:"edge-telemetry-agent.collector-runtime",label:"[...]",relations:["8dkmwk","5anl8o"],color:"gray",line:"dashed",head:"normal",points:[[1869,249],[1843,263],[1816,276],[1791,289],[1701,335],[1599,385],[1516,425]],labelBBox:{x:1744,y:316,width:25,height:18}},{id:"1tn9f5d",parent:"edge-telemetry-agent",source:"edge-telemetry-agent.collector-runtime",target:"edge-telemetry-agent.configuration-bundle",label:`Загружает описания источников, модель 
сигналов и runtime-политики`,relations:["p5w7v3"],color:"gray",line:"dashed",head:"normal",points:[[1184,591],[1160,609],[1140,632],[1126,658],[1111,685],[1110,717],[1115,748]],labelBBox:{x:1127,y:659,width:276,height:35}},{id:"ekpvap",parent:"edge-telemetry-agent",source:"edge-telemetry-agent.collector-runtime",target:"edge-telemetry-agent.outbox-store",label:`Сохраняет нормализованные события и 
задания на доставку`,relations:["1337gtq"],color:"gray",line:"dashed",head:"normal",points:[[1417,598],[1454,644],[1500,701],[1539,749]],labelBBox:{x:1491,y:659,width:265,height:35}},{id:"lamun8",parent:"edge-telemetry-agent",source:"edge-telemetry-agent.delivery-worker",target:"edge-telemetry-agent.configuration-bundle",label:`Загружает настройки MQTT, topic contract 
и retry-политики`,relations:["14gqniy"],color:"gray",line:"dashed",head:"normal",points:[[2139,574],[1984,628],[1788,696],[1783,698],[1612,740],[1562,714],[1391,758],[1376,761],[1361,766],[1346,770]],labelBBox:{x:1891,y:659,width:283,height:35}},{id:"138i2jo",parent:"edge-telemetry-agent",source:"edge-telemetry-agent.delivery-worker",target:"edge-telemetry-agent.outbox-store",label:`Читает ожидающие события и обновляет 
статус доставки`,relations:["w1v2d7"],color:"gray",line:"dashed",head:"normal",points:[[2288,598],[2269,634],[2243,672],[2209,698],[2091,785],[1926,822],[1801,837]],labelBBox:{x:2248,y:659,width:269,height:35}},{id:"mcfzkm",parent:null,source:"edge-telemetry-agent.delivery-worker",target:"monitoring-alarm-platform",label:`Публикует telemetry events и service 
topics по MQTT 5.0`,relations:["1noy8cq"],color:"gray",line:"dashed",head:"normal",points:[[2508,594],[2546,614],[2585,636],[2620,658],[2664,686],[2709,720],[2748,751]],labelBBox:{x:2676,y:659,width:241,height:35}},{id:"g1oj49",parent:null,source:"field-protocol-gateways.knx-router",target:"edge-telemetry-agent.collector-runtime",label:`Экспонирует group address и телеграммы 
через KNX/IP`,relations:["1iben3q"],color:"gray",line:"dashed",head:"normal",points:[[325,249],[377,285],[442,324],[505,349],[726,436],[1e3,476],[1173,494]],labelBBox:{x:506,y:310,width:276,height:35}},{id:"1wgfup1",parent:null,source:"field-protocol-gateways.modbus-gateway",target:"edge-telemetry-agent.collector-runtime",label:`Экспонирует registers, coils и 
дискретные значения через Modbus`,relations:["1pfeck9"],color:"gray",line:"dashed",head:"normal",points:[[733,249],[773,284],[823,322],[873,349],[967,400],[1081,439],[1173,465]],labelBBox:{x:874,y:310,width:244,height:35}},{id:"6cczmq",parent:null,source:"field-protocol-gateways.opc-ua-gateway",target:"edge-telemetry-agent.collector-runtime",label:`Экспонирует nodes, subscriptions и 
значения через OPC UA`,relations:["1qjo0gv"],color:"gray",line:"dashed",head:"normal",points:[[1110,249],[1127,282],[1149,318],[1173,349],[1190,370],[1210,392],[1231,411]],labelBBox:{x:1174,y:310,width:233,height:35}},{id:"cw5zhy",parent:null,source:"service-engineer",target:"edge-telemetry-agent",label:`Настраивает адаптеры, модель сигналов, 
polling и доставку`,relations:["1vij76t"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[1488,249],[1471,279],[1452,314],[1433,348]],labelBBox:{x:1177,y:264,width:280,height:35}}]},"c2-monitoring-alarm-platform-containers":{_type:"element",tags:null,links:null,viewOf:"monitoring-alarm-platform",_stage:"layouted",sourcePath:"likec4/systems/monitoring-alarm-platform/views.c4",description:{txt:"Контейнерная декомпозиция Monitoring & Alarm Platform. Каждый контейнер описан в отдельном файле внутри systems/monitoring-alarm-platform/containers."},title:"Developed Systems / Monitoring & Alarm Platform / C2 Containers",id:"c2-monitoring-alarm-platform-containers",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Контейнер",shape:"browser",color:"amber",kinds:["container"]},{title:"Участник",shape:"person",color:"green",kinds:["actor"]},{title:"Внешняя облачная система",shape:"rectangle",color:"secondary",kinds:["external-system"]},{title:"Контейнер",shape:"rectangle",color:"amber",kinds:["container"]},{title:"Система в scope реализации",shape:"rectangle",color:"amber",kinds:["developed-system"]},{title:"Система в scope реализации",shape:"rectangle",color:"primary",kinds:["developed-system"]},{title:"Контейнер",shape:"storage",color:"amber",kinds:["container"]}]},ranks:[{type:"source",nodes:["service-engineer","operator","dispatcher","edge-telemetry-agent"]},{type:"sink",nodes:["notification-channels"]}],hash:"wx948adbH1YwlpLFk0zhEFfNFtCv8DYyLi_HED9CCI0",bounds:{x:0,y:0,width:2743,height:2227},nodes:[{id:"service-engineer",parent:null,level:0,children:[],inEdges:[],outEdges:["16gquoh","cw5zhy"],title:"Сервисный инженер",modelRef:"service-engineer",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Настраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы."},tags:[],notation:"Участник",kind:"actor",x:1570,y:0,width:398,height:180,labelBBox:{x:18,y:47,width:362,height:83}},{id:"operator",parent:null,level:0,children:[],inEdges:[],outEdges:["vzh35k"],title:"Оператор",modelRef:"operator",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Работает с текущим состоянием объекта, live-панелями и событиями через центральную платформу мониторинга."},tags:[],notation:"Участник",kind:"actor",x:1046,y:0,width:367,height:180,labelBBox:{x:18,y:47,width:332,height:83}},{id:"dispatcher",parent:null,level:0,children:[],inEdges:["lkrv31"],outEdges:["gmnun"],title:"Диспетчер",modelRef:"dispatcher",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Контролирует alarm, уведомления и диспетчерские панели через центральную платформу мониторинга."},tags:[],notation:"Участник",kind:"actor",x:17,y:0,width:344,height:180,labelBBox:{x:18,y:47,width:308,height:83}},{id:"edge-telemetry-agent",parent:null,level:0,children:[],inEdges:["cw5zhy"],outEdges:["1pslsyn"],title:"Edge Telemetry Agent",modelRef:"edge-telemetry-agent",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Универсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий."},tags:[],notation:"Система в scope реализации",technology:"Edge collector / normalization / buffering / delivery",kind:"developed-system",navigateTo:"c2-edge-telemetry-agent-containers",x:2360,y:0,width:382,height:180,labelBBox:{x:18,y:28,width:347,height:121}},{id:"monitoring-alarm-platform",parent:null,level:0,children:["monitoring-alarm-platform.platform-frontend","monitoring-alarm-platform.grafana","monitoring-alarm-platform.platform-api","monitoring-alarm-platform.mqtt-ingestion-gateway","monitoring-alarm-platform.keycloak","monitoring-alarm-platform.alarm-rule-engine","monitoring-alarm-platform.notification-service","monitoring-alarm-platform.telemetry-store"],inEdges:["16gquoh","vzh35k","gmnun","1pslsyn"],outEdges:["dc94i1"],title:"Monitoring & Alarm Platform",modelRef:"monitoring-alarm-platform",shape:"rectangle",color:"primary",style:{opacity:15,size:"md"},description:{txt:"Центральная система в облаке/интернете для приема событий, хранения телеметрии, визуализации, alarm-логики и маршрутизации уведомлений."},tags:[],notation:"Система в scope реализации",technology:"Cloud monitoring platform / alarm engine / operator UI",kind:"developed-system",depth:1,x:502,y:288,width:1532,height:1639,labelBBox:{x:6,y:0,width:193,height:15}},{id:"monitoring-alarm-platform.platform-frontend",parent:"monitoring-alarm-platform",level:1,children:[],inEdges:["vzh35k","gmnun"],outEdges:["ilgv8q","1bq67sb","si1f30"],title:"Platform Frontend",modelRef:"monitoring-alarm-platform.platform-frontend",shape:"browser",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Browser-based frontend платформы: пользовательский web-интерфейс для операторов и диспетчеров, маршруты UI, навигация по alarm и доступ к dashboards."},tags:[],notation:"Контейнер",technology:"Browser / SPA",kind:"container",x:1025,y:349,width:409,height:180,labelBBox:{x:22,y:28,width:366,height:121}},{id:"monitoring-alarm-platform.grafana",parent:"monitoring-alarm-platform",level:1,children:[],inEdges:["16gquoh","ilgv8q"],outEdges:["alolq0"],title:"Grafana",modelRef:"monitoring-alarm-platform.grafana",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Слой визуализации Monitoring & Alarm Platform: live-панели, инженерные dashboards и операторские представления. В текущей реализации подключается к MQTT Ingestion Gateway через grafana-mqtt-datasource."},tags:[],notation:"Контейнер",technology:"Grafana OSS / grafana-mqtt-datasource",kind:"container",x:1638,y:688,width:356,height:180,labelBBox:{x:18,y:20,width:320,height:138}},{id:"monitoring-alarm-platform.platform-api",parent:"monitoring-alarm-platform",level:1,children:[],inEdges:["si1f30"],outEdges:["26i7o3","1hjhlx9","1els6f1"],title:"Platform API",modelRef:"monitoring-alarm-platform.platform-api",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Backend API для состояния alarm, истории событий, конфигурации правил и политик уведомлений."},tags:[],notation:"Контейнер",technology:"HTTP API / backend service",kind:"container",x:666,y:688,width:343,height:180,labelBBox:{x:18,y:38,width:307,height:102}},{id:"monitoring-alarm-platform.mqtt-ingestion-gateway",parent:"monitoring-alarm-platform",level:1,children:[],inEdges:["1pslsyn","alolq0"],outEdges:["rstcnr","1jz0qh"],title:"MQTT Ingestion Gateway",modelRef:"monitoring-alarm-platform.mqtt-ingestion-gateway",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Принимает MQTT telemetry events и service topics от edge-агентов, восстанавливает routing context из topic, валидирует payload и передает canonical events на хранение и в Alarm Rule Engine."},tags:[],notation:"Контейнер",technology:"MQTT broker / ingestion service",kind:"container",x:1642,y:1028,width:351,height:180,labelBBox:{x:18,y:19,width:316,height:139}},{id:"monitoring-alarm-platform.keycloak",parent:"monitoring-alarm-platform",level:1,children:[],inEdges:["1hjhlx9","1bq67sb"],outEdges:[],title:"Keycloak",modelRef:"monitoring-alarm-platform.keycloak",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Сервис identity and access management: realms, пользователи, роли, клиенты и выпуск токенов для Platform Frontend и Platform API."},tags:[],notation:"Контейнер",technology:"Keycloak / OIDC / OAuth 2.0",kind:"container",x:1164,y:1028,width:368,height:180,labelBBox:{x:18,y:37,width:332,height:103}},{id:"monitoring-alarm-platform.alarm-rule-engine",parent:"monitoring-alarm-platform",level:1,children:[],inEdges:["rstcnr","26i7o3"],outEdges:["1lcbhhg","nw10x0"],title:"Alarm Rule Engine",modelRef:"monitoring-alarm-platform.alarm-rule-engine",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Обрабатывает входящие события по правилам, ведет жизненный цикл alarm и инициирует уведомления и эскалации."},tags:[],notation:"Контейнер",technology:"Rule engine / stream processor",kind:"container",x:726,y:1368,width:369,height:180,labelBBox:{x:19,y:37,width:333,height:102}},{id:"monitoring-alarm-platform.notification-service",parent:"monitoring-alarm-platform",level:1,children:[],inEdges:["1lcbhhg"],outEdges:["dc94i1"],title:"Notification Service",modelRef:"monitoring-alarm-platform.notification-service",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Маршрутизирует уведомления во внешние каналы по alarm-политикам и правилам эскалации."},tags:[],notation:"Контейнер",technology:"Worker / notification gateway",kind:"container",x:542,y:1707,width:390,height:180,labelBBox:{x:18,y:46,width:354,height:85}},{id:"monitoring-alarm-platform.telemetry-store",parent:"monitoring-alarm-platform",level:1,children:[],inEdges:["nw10x0","1jz0qh","1els6f1"],outEdges:[],title:"Telemetry Store",modelRef:"monitoring-alarm-platform.telemetry-store",shape:"storage",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Хранит телеметрию, служебные события, историю alarm и данные для мониторинговых и операторских запросов."},tags:[],notation:"Контейнер",technology:"Time-series DB / relational storage",kind:"container",x:1361,y:1707,width:390,height:180,labelBBox:{x:18,y:37,width:354,height:103}},{id:"notification-channels",parent:null,level:0,children:[],inEdges:["dc94i1"],outEdges:["lkrv31"],title:"Каналы уведомлений",modelRef:"notification-channels",shape:"rectangle",color:"secondary",icon:"bootstrap:cloud",style:{opacity:15,size:"md",iconColor:"blue"},description:{txt:"Email, SMS, push, webhook и другие внешние облачные каналы доставки тревог и служебных уведомлений."},tags:[],notation:"Внешняя облачная система",technology:"Email / SMS / Push / Webhook",kind:"external-system",x:0,y:2047,width:378,height:180,labelBBox:{x:46,y:37,width:316,height:103}}],edges:[{id:"16gquoh",parent:null,source:"service-engineer",target:"monitoring-alarm-platform.grafana",label:`Настраивает dashboards и проверяет поток 
телеметрии`,relations:["ex5tr4"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[1775,180],[1784,308],[1800,544],[1809,678]],labelBBox:{x:1800,y:420,width:295,height:35}},{id:"vzh35k",parent:null,source:"operator",target:"monitoring-alarm-platform.platform-frontend",label:`Работает с пользовательским 
web-интерфейсом платформы`,relations:["lycikr"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[1230,180],[1230,228],[1230,288],[1230,338]],labelBBox:{x:1231,y:241,width:206,height:35}},{id:"gmnun",parent:null,source:"dispatcher",target:"monitoring-alarm-platform.platform-frontend",label:`Работает с пользовательским 
web-интерфейсом платформы`,relations:["saomgf"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[361,148],[540,208],[822,302],[1016,366]],labelBBox:{x:742,y:241,width:206,height:35}},{id:"1pslsyn",parent:null,source:"edge-telemetry-agent",target:"monitoring-alarm-platform.mqtt-ingestion-gateway",label:`Публикует telemetry events и service 
topics по MQTT 5.0`,relations:["1noy8cq"],color:"gray",line:"dashed",head:"normal",points:[[2527,180],[2477,352],[2345,734],[2112,968],[2081,999],[2042,1025],[2003,1046]],labelBBox:{x:2367,y:590,width:241,height:35}},{id:"1lcbhhg",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.alarm-rule-engine",target:"monitoring-alarm-platform.notification-service",label:"Запускает доставку уведомлений",relations:["pterx7"],color:"gray",line:"dashed",head:"normal",points:[[762,1547],[743,1565],[727,1585],[716,1608],[702,1635],[701,1667],[705,1697]],labelBBox:{x:717,y:1617,width:230,height:18}},{id:"nw10x0",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.alarm-rule-engine",target:"monitoring-alarm-platform.telemetry-store",label:`Читает контекст и записывает состояние и 
историю alarm`,relations:["va66e2"],color:"gray",line:"dashed",head:"normal",points:[[965,1547],[991,1583],[1024,1621],[1062,1647],[1148,1705],[1256,1741],[1350,1763]],labelBBox:{x:1063,y:1609,width:296,height:34}},{id:"rstcnr",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.mqtt-ingestion-gateway",target:"monitoring-alarm-platform.alarm-rule-engine",label:`Передает нормализованные события в Alarm 
Rule Engine`,relations:["5ivtmw"],color:"gray",line:"dashed",head:"normal",points:[[1642,1187],[1624,1194],[1605,1201],[1587,1208],[1517,1235],[1498,1240],[1428,1268],[1387,1285],[1378,1291],[1336,1308],[1261,1337],[1178,1367],[1106,1392]],labelBBox:{x:1429,y:1269,width:297,height:35}},{id:"26i7o3",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.platform-api",target:"monitoring-alarm-platform.alarm-rule-engine",label:`Читает активные alarm и управляет 
конфигурацией правил в Alarm Rule Engine`,relations:["1weswvj"],color:"gray",line:"dashed",head:"normal",points:[[789,868],[747,956],[698,1092],[735,1208],[753,1263],[787,1316],[821,1359]],labelBBox:{x:736,y:1099,width:288,height:35}},{id:"alolq0",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.grafana",target:"monitoring-alarm-platform.mqtt-ingestion-gateway",label:`Подписывается на live MQTT telemetry и 
service topics`,relations:["1si4dl2"],color:"gray",line:"dashed",head:"normal",points:[[1817,868],[1817,914],[1817,970],[1818,1018]],labelBBox:{x:1818,y:929,width:266,height:35}},{id:"ilgv8q",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.platform-frontend",target:"monitoring-alarm-platform.grafana",label:`Открывает и встраивает dashboards и 
live-панели`,relations:["3uhst2"],color:"gray",line:"dashed",head:"normal",points:[[1321,529],[1359,563],[1405,600],[1451,628],[1506,662],[1570,691],[1629,714]],labelBBox:{x:1452,y:590,width:256,height:35}},{id:"1hjhlx9",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.platform-api",target:"monitoring-alarm-platform.keycloak",label:`Проверяет токены, роли и client 
configuration`,relations:["v1cg3n"],color:"gray",line:"dashed",head:"normal",points:[[895,868],[920,903],[952,941],[988,968],[1038,1005],[1098,1035],[1155,1058]],labelBBox:{x:989,y:929,width:212,height:35}},{id:"1bq67sb",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.platform-frontend",target:"monitoring-alarm-platform.keycloak",label:`Аутентифицирует пользователя и получает 
OIDC tokens`,relations:["kbrdxx"],color:"gray",line:"dashed",head:"normal",points:[[1239,529],[1247,616],[1263,752],[1285,868],[1295,918],[1308,973],[1320,1018]],labelBBox:{x:1286,y:760,width:296,height:34}},{id:"1jz0qh",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.mqtt-ingestion-gateway",target:"monitoring-alarm-platform.telemetry-store",label:`Сохраняет canonical events и служебные 
события`,relations:["5gl5mv"],color:"gray",line:"dashed",head:"normal",points:[[1787,1208],[1775,1240],[1762,1275],[1750,1308],[1699,1443],[1637,1598],[1597,1697]],labelBBox:{x:1726,y:1439,width:268,height:35}},{id:"1els6f1",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.platform-api",target:"monitoring-alarm-platform.telemetry-store",label:`Читает телеметрию, историю и временные 
линии alarm`,relations:["fbxm02"],color:"gray",line:"dashed",head:"normal",points:[[860,868],[872,903],[891,940],[917,968],[962,1014],[1014,974],[1048,1028],[1091,1095],[1062,1129],[1048,1208],[1041,1253],[1003,1269],[1027,1308],[1060,1360],[1102,1332],[1151,1368],[1271,1455],[1281,1500],[1383,1608],[1411,1637],[1441,1670],[1468,1699]],labelBBox:{x:1028,y:1269,width:280,height:35}},{id:"si1f30",parent:"monitoring-alarm-platform",source:"monitoring-alarm-platform.platform-frontend",target:"monitoring-alarm-platform.platform-api",label:`Запрашивает состояние alarm, историю 
событий и прикладные данные платформы`,relations:["18qdh1f"],color:"gray",line:"dashed",head:"normal",points:[[1025,515],[989,535],[953,559],[924,589],[899,614],[881,647],[868,679]],labelBBox:{x:925,y:590,width:276,height:35}},{id:"dc94i1",parent:null,source:"monitoring-alarm-platform.notification-service",target:"notification-channels",label:`Отправляет email, SMS, push и 
webhook-уведомления`,relations:["1x9mjjr"],color:"gray",line:"dashed",head:"normal",points:[[593,1887],[516,1935],[420,1993],[342,2042]],labelBBox:{x:481,y:1948,width:207,height:35}},{id:"cw5zhy",parent:null,source:"service-engineer",target:"edge-telemetry-agent",label:`Настраивает адаптеры, модель сигналов, 
polling и доставку`,relations:["1vij76t"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[1968,90],[2085,90],[2233,90],[2350,90]],labelBBox:{x:2024,y:48,width:280,height:35}},{id:"lkrv31",parent:null,source:"notification-channels",target:"dispatcher",label:`Доставляют уведомления по alarm и 
служебные уведомления`,relations:["cmnl2m"],color:"gray",line:"dashed",head:"normal",points:[[189,2047],[189,1979],[189,1883],[189,1798],[189,438],[189,438],[189,438],[189,354],[189,260],[189,190]],labelBBox:{x:190,y:1099,width:241,height:35}}]},"c1-system-context":{_type:"element",tags:null,links:null,viewOf:"edge-telemetry-agent",_stage:"layouted",sourcePath:"likec4/views.c4",description:{txt:"C1-контекст двух разрабатываемых систем: Edge Telemetry Agent на объекте и Monitoring & Alarm Platform в облаке/интернете. Текущий первый адаптер в проекте — KNX, но модель изначально проектируется мультипротокольной."},title:"Edge Telemetry Agent + Monitoring & Alarm Platform - C1 System Context",id:"c1-system-context",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Участник",shape:"person",color:"green",kinds:["actor"]},{title:"Внешняя облачная система",shape:"rectangle",color:"secondary",kinds:["external-system"]},{title:"Внешняя система",shape:"rectangle",color:"secondary",kinds:["system"]},{title:"Система в scope реализации",shape:"rectangle",color:"amber",kinds:["developed-system"]}]},ranks:[{type:"source",nodes:["field-devices","service-engineer","operator","dispatcher"]},{type:"same",nodes:["edge-telemetry-agent","monitoring-alarm-platform"]},{type:"sink",nodes:["notification-channels"]}],hash:"mlYZwDaDkb5IHf_DS0LKkazq6VuxbsCIGauCPSDvmfE",bounds:{x:0,y:0,width:2626,height:1165},nodes:[{id:"field-devices",parent:null,level:0,children:[],inEdges:[],outEdges:["c2wk8h"],title:"Полевые устройства и контроллеры",modelRef:"field-devices",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Датчики, актуаторы, PLC, RTU и локальные системы автоматизации на объекте."},tags:[],notation:"Внешняя система",technology:"Field devices / PLC / RTU",kind:"system",navigateTo:"c2-field-devices",x:37,y:0,width:379,height:180,labelBBox:{x:19,y:46,width:343,height:85}},{id:"service-engineer",parent:null,level:0,children:[],inEdges:[],outEdges:["cw5zhy","16a5o8z"],title:"Сервисный инженер",modelRef:"service-engineer",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Настраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы."},tags:[],notation:"Участник",kind:"actor",x:752,y:0,width:398,height:180,labelBBox:{x:18,y:47,width:362,height:83}},{id:"operator",parent:null,level:0,children:[],inEdges:[],outEdges:["5jh72i"],title:"Оператор",modelRef:"operator",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Работает с текущим состоянием объекта, live-панелями и событиями через центральную платформу мониторинга."},tags:[],notation:"Участник",kind:"actor",x:1506,y:0,width:367,height:180,labelBBox:{x:19,y:47,width:332,height:83}},{id:"field-protocol-gateways",parent:null,level:0,children:[],inEdges:["c2wk8h"],outEdges:["1sivq2o"],title:"Протокольные шлюзы и SCADA-контроллеры",modelRef:"field-protocol-gateways",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Точки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы."},tags:[],notation:"Внешняя система",technology:"KNX / Modbus / OPC UA / SCADA",kind:"system",navigateTo:"c2-field-protocol-gateways",x:0,y:323,width:454,height:180,labelBBox:{x:18,y:37,width:419,height:103}},{id:"edge-telemetry-agent",parent:null,level:0,children:[],inEdges:["1sivq2o","cw5zhy"],outEdges:["1cfgwdb"],title:"Edge Telemetry Agent",modelRef:"edge-telemetry-agent",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Универсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий."},tags:[],notation:"Система в scope реализации",technology:"Edge collector / normalization / buffering / delivery",kind:"developed-system",navigateTo:"c2-edge-telemetry-agent-containers",x:483,y:662,width:382,height:180,labelBBox:{x:18,y:29,width:347,height:120}},{id:"monitoring-alarm-platform",parent:null,level:0,children:[],inEdges:["1cfgwdb","16a5o8z","5jh72i","1srhl8t"],outEdges:["134rwii"],title:"Monitoring & Alarm Platform",modelRef:"monitoring-alarm-platform",shape:"rectangle",color:"amber",style:{opacity:15,size:"md"},description:{txt:"Центральная система в облаке/интернете для приема событий, хранения телеметрии, визуализации, alarm-логики и маршрутизации уведомлений."},tags:[],notation:"Система в scope реализации",technology:"Cloud monitoring platform / alarm engine / operator UI",kind:"developed-system",navigateTo:"c2-monitoring-alarm-platform-containers",x:1505,y:662,width:369,height:180,labelBBox:{x:19,y:29,width:333,height:120}},{id:"notification-channels",parent:null,level:0,children:[],inEdges:["134rwii"],outEdges:["lkrv31"],title:"Каналы уведомлений",modelRef:"notification-channels",shape:"rectangle",color:"secondary",icon:"bootstrap:cloud",style:{opacity:15,size:"md",iconColor:"blue"},description:{txt:"Email, SMS, push, webhook и другие внешние облачные каналы доставки тревог и служебных уведомлений."},tags:[],notation:"Внешняя облачная система",technology:"Email / SMS / Push / Webhook",kind:"external-system",x:1933,y:985,width:378,height:180,labelBBox:{x:46,y:37,width:317,height:103}},{id:"dispatcher",parent:null,level:0,children:[],inEdges:["lkrv31"],outEdges:["1srhl8t"],title:"Диспетчер",modelRef:"dispatcher",shape:"person",color:"green",style:{opacity:15,size:"md"},description:{txt:"Контролирует alarm, уведомления и диспетчерские панели через центральную платформу мониторинга."},tags:[],notation:"Участник",kind:"actor",x:2183,y:0,width:344,height:180,labelBBox:{x:18,y:47,width:308,height:83}}],edges:[{id:"c2wk8h",parent:null,source:"field-devices",target:"field-protocol-gateways",label:"[...]",relations:["c9z7g3","70paaf"],color:"gray",line:"dashed",head:"normal",points:[[227,180],[227,221],[227,270],[227,313]],labelBBox:{x:228,y:239,width:25,height:18}},{id:"1sivq2o",parent:null,source:"field-protocol-gateways",target:"edge-telemetry-agent",label:"[...]",relations:["16vogj3","1iben3q","1pfeck9","1qjo0gv"],color:"gray",line:"dashed",head:"normal",points:[[345,503],[408,550],[485,608],[549,656]],labelBBox:{x:465,y:570,width:25,height:18}},{id:"1cfgwdb",parent:null,source:"edge-telemetry-agent",target:"monitoring-alarm-platform",label:`Публикует telemetry events и service 
topics через MQTT`,relations:["1vmt72n","1noy8cq"],color:"gray",line:"dashed",head:"normal",points:[[865,752],[1046,752],[1314,752],[1496,752]],labelBBox:{x:1065,y:711,width:241,height:35}},{id:"134rwii",parent:null,source:"monitoring-alarm-platform",target:"notification-channels",label:"Маршрутизирует уведомления и эскалации",relations:["17cylot","1x9mjjr"],color:"gray",line:"dashed",head:"normal",points:[[1810,842],[1867,885],[1936,936],[1995,979]],labelBBox:{x:1920,y:903,width:288,height:18}},{id:"cw5zhy",parent:null,source:"service-engineer",target:"edge-telemetry-agent",label:`Настраивает адаптеры, модель сигналов, 
polling и доставку`,relations:["1vij76t"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[859,180],[822,220],[782,270],[757,323],[707,428],[687,562],[679,652]],labelBBox:{x:758,y:394,width:280,height:35}},{id:"16a5o8z",parent:null,source:"service-engineer",target:"monitoring-alarm-platform",label:`Настраивает правила alarm, получателей и 
панели мониторинга`,relations:["1yfkq8h","ex5tr4"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[1035,180],[1118,265],[1248,397],[1369,503],[1430,556],[1501,611],[1560,656]],labelBBox:{x:1370,y:394,width:292,height:35}},{id:"5jh72i",parent:null,source:"operator",target:"monitoring-alarm-platform",label:`Работает с панелями мониторинга, 
событиями и alarm`,relations:["j3w7iw","lycikr"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[1690,180],[1690,303],[1690,524],[1690,652]],labelBBox:{x:1691,y:394,width:237,height:35}},{id:"lkrv31",parent:null,source:"notification-channels",target:"dispatcher",label:`Доставляют уведомления по alarm и 
служебные уведомления`,relations:["cmnl2m"],color:"gray",line:"dashed",head:"normal",points:[[2197,985],[2211,966],[2225,946],[2236,925],[2334,750],[2359,700],[2395,503],[2415,397],[2398,274],[2380,190]],labelBBox:{x:2384,y:564,width:241,height:35}},{id:"1srhl8t",parent:null,source:"dispatcher",target:"monitoring-alarm-platform",label:`Работает с alarm, уведомлениями и 
диспетчерскими сценариями`,relations:["iccx6k","saomgf"],color:"green",line:"solid",head:"normal",kind:"interact-with",points:[[2272,180],[2192,264],[2067,394],[1956,503],[1904,554],[1845,610],[1795,656]],labelBBox:{x:2130,y:394,width:237,height:35}}]}},deployments:{elements:{"demo-stand":{notation:"Среда развертывания",style:{color:"blue"},kind:"environment",description:{txt:'Фактический demo-стенд по данным ETS-проекта "Выстовка" и connection memo от 2026-03-28.'},title:"Demo Stand",id:"demo-stand"},"whitelisted-remote-host":{notation:"Среда развертывания",style:{color:"blue"},kind:"environment",description:{txt:"Удаленный хост вне demo-стенда: мой компьютер с IP, разрешенным во внешнем KNX/IP маршруте."},title:"Whitelisted Remote Host",id:"whitelisted-remote-host"},"monitoring-cloud":{notation:"Среда развертывания",style:{color:"blue"},kind:"environment",description:{txt:"Облачный production-контур Monitoring & Alarm Platform."},title:"Monitoring Cloud",id:"monitoring-cloud"},"demo-stand.local-lan":{notation:"Сетевой контур",style:{color:"sky"},kind:"network-zone",description:{txt:"Локальная сеть demo-стенда с KNX/IP роутером и TP-линией 1.1; используется как целевая сеть удаленного подключения Edge Telemetry Agent."},title:"Local LAN 192.0.2.0/24",id:"demo-stand.local-lan"},"demo-stand.remote-access":{notation:"Сетевой контур",style:{color:"sky"},kind:"network-zone",description:{txt:"Внешний маршрут для удаленной диагностики стенда."},title:"Remote Access",id:"demo-stand.remote-access"},"whitelisted-remote-host.developer-network":{notation:"Сетевой контур",style:{color:"sky"},kind:"network-zone",description:{txt:"Сеть рабочего места, из которой Edge Telemetry Agent подключается к стенду через whitelist, а текущая реализация Monitoring & Alarm Platform принимает MQTT и визуализирует поток через Grafana."},title:"Developer Network",id:"whitelisted-remote-host.developer-network"},"monitoring-cloud.public-cloud":{notation:"Сетевой контур",style:{color:"sky"},kind:"network-zone",description:{txt:"Облачная зона приема MQTT-сообщений и визуализации Monitoring & Alarm Platform."},title:"Public Cloud",id:"monitoring-cloud.public-cloud"},"demo-stand.local-lan.knxnet-ip-backbone":{notation:"Полевой сегмент",style:{color:"blue"},kind:"fieldbus-segment",description:{txt:"IP-магистраль ETS-проекта: магистральная область 0.0 и главная линия 1.0 без прикладных устройств."},technology:"Areas 0.0 and 1.0 / KNXnet-IP",title:"KNXnet/IP Backbone",id:"demo-stand.local-lan.knxnet-ip-backbone"},"demo-stand.local-lan.tp-line-1-1":{notation:"Полевой сегмент",style:{color:"blue"},kind:"fieldbus-segment",description:{txt:'Активная KNX TP-линия ETS-проекта "Выстовка" в области 1, линия 1.'},technology:"Twisted Pair",title:"KNX TP Line 1.1",id:"demo-stand.local-lan.tp-line-1-1"},"demo-stand.remote-access.public-knx-endpoint":{notation:"Сетевой endpoint",style:{color:"indigo"},kind:"network-endpoint",description:{txt:"Публичная точка входа с пробросом на локальный KNX/IP роутер 192.0.2.177:3671."},technology:"203.0.113.234:7171 / UDP / NAT",title:"Public KNX/IP endpoint",id:"demo-stand.remote-access.public-knx-endpoint"},"whitelisted-remote-host.developer-network.edge-host":{notation:"Хост",style:{color:"amber"},kind:"host",description:{txt:"Хост, на котором запускается Edge Telemetry Agent. Подключается к KNX демо-стенду удаленно, а не размещается на самом стенде. На этом же рабочем месте текущая реализация поднимает MQTT Ingestion Gateway и Grafana."},technology:"Remote workstation / whitelisted IP",title:"Developer Workstation",id:"whitelisted-remote-host.developer-network.edge-host"},"monitoring-cloud.public-cloud.mqtt-ingest-host":{notation:"Хост",style:{color:"amber"},kind:"host",description:{txt:"Хост облачного контура Monitoring & Alarm Platform для приема telemetry events и визуализации через Grafana."},technology:"Cloud runtime",title:"Monitoring Platform Host",id:"monitoring-cloud.public-cloud.mqtt-ingest-host"},"demo-stand.local-lan.knxnet-ip-backbone.knx-router":{id:"demo-stand.local-lan.knxnet-ip-backbone.knx-router",element:"field-protocol-gateways.knx-router",title:"Weinzierl KNX IP Router 751",description:{txt:"Локальная точка входа в KNX/IP и маршрутизатор в TP-линию 1.1."},technology:"192.0.2.177:3671 / UDP / TUNNELING / individual address 1.1.0",style:{}},"demo-stand.local-lan.tp-line-1-1.device-1-1-1":{notation:"Физическое устройство",style:{color:"secondary"},kind:"field-asset",description:{txt:"Панель кнопок с group address для света, scene и вентиляции: 0/0/1, 0/0/6, 0/0/7, 1/0/0, 1/1/0, 1/2/0, 1/3/0, 1/4/0."},technology:"KNX TP device",title:"1.1.1 Pushbutton sensor 4 Komfort, 4-gang",id:"demo-stand.local-lan.tp-line-1-1.device-1-1-1"},"demo-stand.local-lan.tp-line-1-1.device-1-1-2":{notation:"Физическое устройство",style:{color:"secondary"},kind:"field-asset",description:{txt:"Шлюз освещения с адресами Switch/StatusSwitch, RGBW и Scene: 0/0/1-0/0/7."},technology:"KNX TP to DALI gateway",title:"1.1.2 DALI Gateway Tunable White Plus",id:"demo-stand.local-lan.tp-line-1-1.device-1-1-2"},"demo-stand.local-lan.tp-line-1-1.device-1-1-3":{notation:"Физическое устройство",style:{color:"secondary"},kind:"field-asset",description:{txt:"Актуатор вентиляции: VentSwitch, VentDim, VentStatus, VentValue по адресам 1/0/0-1/3/0."},technology:"KNX TP actuator",title:"1.1.3 Analogaktor 4fach",id:"demo-stand.local-lan.tp-line-1-1.device-1-1-3"},"demo-stand.local-lan.tp-line-1-1.device-1-1-4":{notation:"Физическое устройство",style:{color:"secondary"},kind:"field-asset",description:{txt:"Комнатный контроллер с Temperature value 2/0/0 и сценой 1/4/0."},technology:"KNX TP room controller",title:"1.1.4 Room controller display compact module",id:"demo-stand.local-lan.tp-line-1-1.device-1-1-4"},"whitelisted-remote-host.developer-network.edge-host.configuration-bundle":{id:"whitelisted-remote-host.developer-network.edge-host.configuration-bundle",element:"edge-telemetry-agent.configuration-bundle",style:{}},"whitelisted-remote-host.developer-network.edge-host.collector-runtime":{id:"whitelisted-remote-host.developer-network.edge-host.collector-runtime",element:"edge-telemetry-agent.collector-runtime",style:{}},"whitelisted-remote-host.developer-network.edge-host.outbox-store":{id:"whitelisted-remote-host.developer-network.edge-host.outbox-store",element:"edge-telemetry-agent.outbox-store",style:{}},"whitelisted-remote-host.developer-network.edge-host.delivery-worker":{id:"whitelisted-remote-host.developer-network.edge-host.delivery-worker",element:"edge-telemetry-agent.delivery-worker",style:{}},"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway":{id:"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway",element:"monitoring-alarm-platform.mqtt-ingestion-gateway",style:{}},"whitelisted-remote-host.developer-network.edge-host.grafana":{id:"whitelisted-remote-host.developer-network.edge-host.grafana",element:"monitoring-alarm-platform.grafana",style:{}},"monitoring-cloud.public-cloud.mqtt-ingest-host.mqtt-ingestion-gateway":{id:"monitoring-cloud.public-cloud.mqtt-ingest-host.mqtt-ingestion-gateway",element:"monitoring-alarm-platform.mqtt-ingestion-gateway",style:{}},"monitoring-cloud.public-cloud.mqtt-ingest-host.grafana":{id:"monitoring-cloud.public-cloud.mqtt-ingest-host.grafana",element:"monitoring-alarm-platform.grafana",style:{}}},relations:{cz7g0d:{title:"Передает KNX TP телеграммы в роутер 1.1.0",source:{deployment:"demo-stand.local-lan.tp-line-1-1"},target:{deployment:"demo-stand.local-lan.knxnet-ip-backbone.knx-router"},id:"cz7g0d"},nzow73:{title:"Проброс UDP 7171 -> 3671 для удаленного KNX/IP доступа",source:{deployment:"demo-stand.remote-access.public-knx-endpoint"},target:{deployment:"demo-stand.local-lan.knxnet-ip-backbone.knx-router"},id:"nzow73"},tj5wz0:{title:"Подключается к стенду через whitelisted public KNX/IP endpoint",source:{deployment:"whitelisted-remote-host.developer-network.edge-host.collector-runtime"},target:{deployment:"demo-stand.remote-access.public-knx-endpoint"},id:"tj5wz0"},sho40z:{title:"Публикует telemetry events и service topics в mqtt://localhost:1883",source:{deployment:"whitelisted-remote-host.developer-network.edge-host.delivery-worker"},target:{deployment:"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway"},id:"sho40z"},u0iqyf:{title:"Подписывается через grafana-mqtt-datasource на live MQTT topics",source:{deployment:"whitelisted-remote-host.developer-network.edge-host.grafana"},target:{deployment:"whitelisted-remote-host.developer-network.edge-host.mqtt-ingestion-gateway"},id:"u0iqyf"},ou2uwu:{title:"Подписывается через grafana-mqtt-datasource на live MQTT topics",source:{deployment:"monitoring-cloud.public-cloud.mqtt-ingest-host.grafana"},target:{deployment:"monitoring-cloud.public-cloud.mqtt-ingest-host.mqtt-ingestion-gateway"},id:"ou2uwu"}}},imports:{},manualLayouts:{}}),{updateModel:S4,$likec4model:P4,useLikeC4Model:z4,useLikeC4Views:M4,useLikeC4View:G4}=C4(_s),q4=Object.freeze(Object.defineProperty({__proto__:null,$likec4data:_s,$likec4model:P4,updateModel:S4,useLikeC4Model:z4,useLikeC4View:G4,useLikeC4Views:M4},Symbol.toStringTag,{value:"Module"})),K4=e=>ct.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"cloud_svg__bi cloud_svg__bi-cloud",viewBox:"0 0 16 16",...e,children:ct.jsx("path",{d:"M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"})});var X4=K4;const j4="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+CiAgPHJlY3QgeD0iOCIgeT0iMTAiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0NCIgcng9IjEwIiBmaWxsPSIjRjNGOEZGIiBzdHJva2U9IiMxRTYzRDUiIHN0cm9rZS13aWR0aD0iNCIvPgogIDxwYXRoIGQ9Ik0xNiAyNEg0OCIgc3Ryb2tlPSIjMThBOTU3IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0xNiA0MEg0OCIgc3Ryb2tlPSIjMThBOTU3IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxjaXJjbGUgY3g9IjIyIiBjeT0iMjQiIHI9IjMiIGZpbGw9IiMxRTYzRDUiLz4KICA8Y2lyY2xlIGN4PSI0MiIgY3k9IjQwIiByPSIzIiBmaWxsPSIjMUU2M0Q1Ii8+CiAgPHRleHQgeD0iMzIiIHk9IjM2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iIzBCMjc1QSI+S05YPC90ZXh0Pgo8L3N2Zz4K",Z4="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+CiAgPHJlY3QgeD0iOCIgeT0iMTAiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0NCIgcng9IjEwIiBmaWxsPSIjRkZGOEYyIiBzdHJva2U9IiNDOTZBMTIiIHN0cm9rZS13aWR0aD0iNCIvPgogIDxwYXRoIGQ9Ik0xOCAyNEg0NiIgc3Ryb2tlPSIjQzk2QTEyIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0xOCA0MEg0NiIgc3Ryb2tlPSIjQzk2QTEyIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0yNCAyNFY0MCIgc3Ryb2tlPSIjMUU2M0Q1IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik00MCAyNFY0MCIgc3Ryb2tlPSIjMUU2M0Q1IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxjaXJjbGUgY3g9IjI0IiBjeT0iMjQiIHI9IjMiIGZpbGw9IiMxOEE5NTciLz4KICA8Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSIzIiBmaWxsPSIjMThBOTU3Ii8+CiAgPHRleHQgeD0iMzIiIHk9IjM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI5IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjNkIzNjAwIj5NT0RCVVM8L3RleHQ+Cjwvc3ZnPgo=",$4="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+CiAgPHJlY3QgeD0iOCIgeT0iMTAiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0NCIgcng9IjEwIiBmaWxsPSIjRjJGQkZGIiBzdHJva2U9IiMwRTc0OTAiIHN0cm9rZS13aWR0aD0iNCIvPgogIDxjaXJjbGUgY3g9IjIyIiBjeT0iMjIiIHI9IjUiIGZpbGw9IiMxRTYzRDUiLz4KICA8Y2lyY2xlIGN4PSI0MiIgY3k9IjIyIiByPSI1IiBmaWxsPSIjMThBOTU3Ii8+CiAgPGNpcmNsZSBjeD0iMzIiIGN5PSI0MCIgcj0iNSIgZmlsbD0iIzBFNzQ5MCIvPgogIDxwYXRoIGQ9Ik0yNiAyNEwzMCAzNiIgc3Ryb2tlPSIjMEU3NDkwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0zOCAyNEwzNCAzNiIgc3Ryb2tlPSIjMEU3NDkwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0yNyAyMkgzNyIgc3Ryb2tlPSIjMEU3NDkwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDx0ZXh0IHg9IjMyIiB5PSI1MyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiMwQjI3NUEiPk9QQyBVQTwvdGV4dD4KPC9zdmc+Cg==",H4={"bootstrap:cloud":X4,"file:///Users/srgi0/projects/web-monitoring/arch/images/knx.svg":()=>ct.jsx("img",{src:j4}),"file:///Users/srgi0/projects/web-monitoring/arch/images/modbus.svg":()=>ct.jsx("img",{src:Z4}),"file:///Users/srgi0/projects/web-monitoring/arch/images/opc-ua.svg":()=>ct.jsx("img",{src:$4})};function U4({node:e,...t}){const n=H4[e.icon??""];return n?ct.jsx(n,t):null}const W4=Object.freeze(Object.defineProperty({__proto__:null,IconRenderer:U4},Symbol.toStringTag,{value:"Module"}));let $n={"industrial-edge-architecture":()=>Bt(()=>Promise.resolve().then(()=>t5),void 0)};async function Q4(e){let t=$n[e];if(!t){const n=Object.keys($n);if(console.error("Unknown projectId: "+e+" (available: "+n+")"),n.length===0)throw new Error("No projects found, invalid state");e=n[0],console.warn("Falling back to project: "+e),t=$n[e]}return await t()}const X5=Object.freeze(Object.defineProperty({__proto__:null,loadDrawioSources:Q4,loadDrawioSourcesFn:$n},Symbol.toStringTag,{value:"Module"}));let Hn={"industrial-edge-architecture":()=>Bt(()=>Promise.resolve().then(()=>r5),void 0)};async function V4(e){let t=Hn[e];if(!t){const n=Object.keys(Hn);if(console.error("Unknown projectId: "+e+" (available: "+n+")"),n.length===0)throw new Error("No projects found, invalid state");e=n[0],console.warn("Falling back to project: "+e),t=Hn[e]}return await t()}const j5=Object.freeze(Object.defineProperty({__proto__:null,loadPumlSources:V4,loadPumlSourcesFn:Hn},Symbol.toStringTag,{value:"Module"}));let Un={"industrial-edge-architecture":()=>Bt(()=>Promise.resolve().then(()=>i5),void 0)};async function Y4(e){let t=Un[e];if(!t){const n=Object.keys(Un);if(console.error("Unknown projectId: "+e+" (available: "+n+")"),n.length===0)throw new Error("No projects found, invalid state");e=n[0],console.warn("Falling back to project: "+e),t=Un[e]}return await t()}const Z5=Object.freeze(Object.defineProperty({__proto__:null,loadMmdSources:Y4,loadMmdSourcesFn:Un},Symbol.toStringTag,{value:"Module"}));let Wn={"industrial-edge-architecture":()=>Bt(()=>Promise.resolve().then(()=>s5),void 0)};async function J4(e){let t=Wn[e];if(!t){const n=Object.keys(Wn);if(console.error("Unknown projectId: "+e+" (available: "+n+")"),n.length===0)throw new Error("No projects found, invalid state");e=n[0],console.warn("Falling back to project: "+e),t=Wn[e]}return await t()}const $5=Object.freeze(Object.defineProperty({__proto__:null,loadDotSources:J4,loadDotSourcesFn:Wn},Symbol.toStringTag,{value:"Module"}));let Qn={"industrial-edge-architecture":()=>Bt(()=>Promise.resolve().then(()=>d5),void 0)};async function _4(e){let t=Qn[e];if(!t){const n=Object.keys(Qn);if(console.error("Unknown projectId: "+e+" (available: "+n+")"),n.length===0)throw new Error("No projects found, invalid state");e=n[0],console.warn("Falling back to project: "+e),t=Qn[e]}return await t()}const H5=Object.freeze(Object.defineProperty({__proto__:null,loadD2Sources:_4,loadD2SourcesFn:Qn},Symbol.toStringTag,{value:"Module"}));function U5(){throw new Error("No projects overview available for this workspace: single project mode is enabled")}function e5(e){switch(e){case"index":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dVnHEqy6kvyas7wTeLNsvPd%2Bh%2Ffe8%2FUD97y3m4noJkASolBVZWWKPzD9B%2BauvvsDAUe%2BrPU4%2FIGZPxAE%2Fg%2FwHt%2FWfEjHrB7Kv82uw%2F1DfB0w9wdm%2FwC%2FPzDdX0Xd5e%2FQaly3v8OUus1p5O8E%2FXt7UefZ3x4IgLB%2FAPgfiHBA8A%2F8Q%2BD3ABL%2Fg8BI9Hd8XObD%2FzHN%2F2PdFv%2FHsr%2FX2z3lf6%2Bz%2FKjT%2FF9T%2F7UTAr4fTGd1XC5x%2F14Mcf%2BfsUo8ZGsaT99LHHV%2B%2Fp2r%2Fo%2FJ3WtFivxTD1l%2B%2FZ0P98CoQ3eEPRDQOIxWoKLmxIxLHQpdYnQUQMFI6NtkR7sSQY5JSf5A3B%2BIsltJse0l3XRQz3e2vU6QjunO6%2BLx7e1cxxigZy9uzIELfwinoTdSMoKPgojTd4bHXNPqeJzqdKuwI%2FvbGSTvbANIyX1J3DZtax%2FYX%2BNZNsT5fQOql2pIxh0r97opdqOAHyJw9XYPX5SuH7xV4cR12EDlHXpHQaC970%2FxmmdM78OA%2FiIVf4IqUCAjSRcf5Rze7ve3tX52U5LwDvJTIiTzGX5PyTvrXM%2FWGsDvnwJoH7vfKAtEDQc83u7DgnMnO9r39OYz9IT3YTQ7ulZeT1DAPRVDNlRvZxH4mZcvnMIdziRYHdYOUZYEn4m5FLxhSsWOWKNKmiDrdlvOMeMK0lezlBchGJjPO%2BDRZPzGrloLQHVbD1Lc%2Bs6wiZKxJcNmknxf7BUYtiZQJ8B%2FXLMLuO612Z6HsyRfE9K4tzBgf9ZzGyVmIXiEab36PLpJSQ8vzlHjZtxhAepr1oEKpPB%2Bkiekz8DZo%2F76GUfi2xwuDzYKGEqydf%2FaUATb60COugFzrDKuEmOIJvrU7VXtoSLjgC5ZVHJZCTEC8gWW5BNt3vsw%2B3ultqw0r7%2Bk93xWxORJWrHF70SBt3dFKSHD%2BfYefVK26m8FSCgqongXjIkH6o1LDVtu3COI4ocCXZMAeRN8DUXjuwbDxbc7fF9QSeu%2Bx50SobUeSsXIu9Zc7WBOMUCDY%2BhpDeW4NHzTO2q77zTNtcuEwHs6YG%2FccDJyvBnGKQkb7ORJ4sDGfEPd%2BABNPfZIWg9kGA2ApJFRh154D5%2FeeOL45HAoiISayn0cx%2BUTn2IhKSAG7fYaU%2F3M9Pj7mevK6Yf5kunXSA7cXKtY6rvvKLtpWJvEtxYib0B%2F%2BBbClFQSBpw78t55g4tbgYxAwjeAuEaoBAvgP2tZd5Ugn2T5qMsdrTuKHLrha1Ae0ZaDpSmVjMQkKz7az51fiJbDt%2Fa7SBLlkbgLASM8ibMkz6px4wPo9CsgLf99z9NtxhKiIWI5%2B%2BFSKFLG3SXRR9FcjNWufr2TL85%2Foha0IJKzL15InNzz9m6uBuquzuO5Vh0bavB5444ipe%2Fav4knVembJy8uvPd75pzeqBoyvm1mkYNsQMv6cnJayQrANCaGSrnXJZYyXfG7Ak%2FY0Lh3Dbyif0B3uV7AVXPqTVK%2FDCxoeyIPu4beyoG6P5le9NRPMMeTEdOaYne%2FwCRgOhG2v0K2uiAnhjVBnmNJ3vqNVwRgtteZEyVqcBiQJZ0q17laXYxeMA5ecG0J%2B2Vyt87jMEE9FqBO1IyEEue0O3dm7Ra3TNT8FwqbuqiNylnKwnq2XVSHOIetbW24YvqyjxL92New0sZfQviWu0DMFcYY4t8yQnj%2Buo9eI%2BPnME92hY6Zx0xVBsQiCJ8t43gjWC9MYIGTUHiyulhBpxlVdgr9bgrukXD0v56u38O68QUBorlUFK9Ve4Jm7Vi4%2BE62dt7C5%2BG3vqfhXUzroLGsK4B4fURUWafiOKZknUlu9xDpaCrNpoXUwwARoD1ZVcqXbxWilsAgvM6WzvC2xtV1R9cfDcibXoCnoLmPt5hQVZZhLcUlANBJ3L4%2F4Tjk0ZGHPhyxde1NXiri%2BrdGCOcWYleP4%2BbgmDj42esuBZ2iNY2PN%2BhB%2Furaa9mX2iP94r5C8ohd0H0iTb%2BCT3KdzzD00XO9fQCXivhqOaX%2B5uh%2F%2BdFTXq%2B3CaN9qEa1ux3gvKkoThEV6FGAbH0lzQLjHzDr7XE0DTFunONXVjN4Soua588zoapT43luLt1itZKGYVJIfCh8IBAGirIwK1sqNK6NLwrIyWRNwnV9awOCXbahrR9oBr6j7q291qHaMUx%2FaTCAHm4LvFyBQwov8KPxrS4UcQBat%2F9NE27SkIjBev1QBy9SEjjtCWG9S6tb1AS%2FfysXmSmYmI4GC06ciyR4UnLIRTsQXb0t9tLMvyXMRZ%2FCy7afiQbuednW3gsyzYUFpvhR2aCcfy1iHzmXtmWT9cFUJULA9ZZzPawu8wTe2jFJQDxcvJ0gTauedZ%2FfQ1n6M4XNdC3p0V3mCNwb0XPPMgltcGV3vwd9Z%2BrM8jIxeFN2p8eezJO77gw8xwW%2Bx4D49h5NXMblp3maZV90PYguMHFVK0rFzJp0Vi%2BDTEdEvv3pd5Va3US8lCTBK9kbd3gcDmGZ8XRSRbUMLPoMIRejV4ovpaj3R%2B6oTVI3g%2FiUXuLFhfJ7OKno5F9wZuQhl%2BUMxy6THVNsdrri5M0PkJWz1BSmmAQlAKXNef0A6%2BXmRfG1nKUw8vu5FpowhnQda6eLAZfn3fjwG%2Frt9TLnPMxMWwPj9WX4Qds4llCkjS6KBXJGtlweQFkMUPdjAuo6gfyjZixVAtaSzg88HBdtr5sO0BGMIfJBVZbEdZ4FTY1w%2FnbnNBfGUK5uNcyGMlSzJTYKVaXQW41UCt2OlzCIWI944SCQVFe3kLmUoDt7Mvly1kXB5vYP%2FyePlrLSM2%2FX%2FfUq4Di9zP%2Be6iNB5pe5mW%2FFaMlLspnCbWKeWAmDh1xxnMJe73vLOGbh%2Bux3juLBDy2qZJpApuLp40PLmgg2i00Z16C5qteAEjhSMV3%2FHHrKB%2Fl8CQAngO548VgHbtL%2BnIQnfiBIsiJwdaymJU%2BTCfQ1VlkYvA0K27eE%2FIjKDSibBnxwaY12Pr8nVl9NCy0GKlsaIbylEPzAXf4bQea%2BjU1jI9iQFD1dMOk%2BPpi5CMvRSt6MMdtvK%2FUzRWyviTmvlEefF8vT0yJ4%2BmDalDK7N%2F5cY%2B6UoUvPoCSjCGk6HbeFDrpxiNHzhn0jxS2fcWBizIhBN8Gw34t%2FEiDcrAFKvu4cFCXx3fASbW4sj6G6wqXrxFSu4%2BruT1W79TbvU8h5OTrFBiq88jSz7Zi8iQTx0iQ4LgSb%2F9iiZa5JwICeV1X9%2BLNEK4y8j93ZnAXFErgHnj7DVMpE8WROHrVnaQwSCUPIZauxnJco1QfW9vgkPx7My0RQ%2Bd1a4EHDCY2cBnDYAoI8glr6EGfhxTRrmt%2BpczxJPzf27NIRFqxhoQuHP9MOsd47LtuPBD1GKODKl1t9oGEednNjbnUzScPN4m%2BXPS532MghMvL1F0cFRzqSW5UljeEKPOueP6pt15iOkqy%2B0reSh8o4pXXXxxO3UvOTAozSBDFkua%2F5dSBwpVJuuCHG%2BS%2Bx%2BFJ3CO%2FG9qQIYPIL2wL7jq8SSAnjVBgsn1c0%2B5r%2B5eULVpcJYH9eH23nwkFB4VpE4jPIszjXksgXYkAOvkPRNpjlOAGvKEPlpomX1j3g27AqvmktFAkPxraz%2FM0f8m%2F15QuPWMyJwdXaZ8hxb69FzpbqXpVEGbSVNxwD53AlcayPJ6xiTvVBNlZQ%2Bm8%2FMq%2BryXdBqmJADAoLaGrPZn4oJfgUcb04koz%2BljdOrmpNtoeMNsbj7dcZ1vAEiKnb5GYW0kKVUzJo3QHOmg7ZuDog9NL%2BQsjgiIiIDM6Oc3mBltILKblA9ncCMe%2BemeC1V7jXKZLDR6cTkYMVumVUnXLNRgYCtxor7sieUaXyAyt3%2BJvh4Zr6eqckRFzxG%2BC2h6nr2sP5TJuXnGOQc7wd0kP7OQV8HuHwGYZUGgMEBmWU6aecujf61su2JgSpL89Y2yJvxjT2qykkKzr4qUgaM7zX5NpcAr%2FOtkWoLrJBQ6aBo0iGTuGdipXe7PTIGfGxwnavtvOSue0nBri34FCJPdEMPho2wjpIzB4r7TEQ3lLp2m%2BcfZFhe3%2BcGXD02gMuWsb4D%2FLKF2SBS5HIFlJMwI1Ju%2FJ5IrysBb%2FYXVUpa9GolcU3i19zR4UpnMvHpxBa%2FlnVKlD4Jiw596tpeMP95vm6uhyHGlEnzk9kbBVQ4m9uuwBjIalnM9w0s%2B6tbb%2BZQyd0YB%2FFLnx9K0LKrUSTNMTXU23NgLQMM5s4AQ3wUnmgRXhfNcfDrNIkVnlcAOfC2y%2FhBqlqOsyfG6Qi7Zg3pDNdDQ91oxbnj4XyT7x4x7qD6cWW0cNEzM1I3qWzc%2FMyGJ42OpF%2B6I9xqFWuLUp0BwJhNY0o%2ByyM09Ncikm3%2BgHrEJfDVXkffkwJxFCNnE8u%2BMBg8B5%2F4tD2qZn9mG7U4aXfq8wQW4UANGeZSde6QtWHlk7oe%2Fj0fCx2kjEIA8BeUbcyhWYBivqVoLayELA4GAjeXfHUr7wymx%2FOYRytCgj%2BJTTGD2GRNhZi7BSACLCQOUMXigY%2Bp3146knW82dzgAoKf3RqdtJVQlownsvuJkepefbiR49WthkFK3H9K3LGV6ST%2BlscAizE1kDmVrHR33t%2Fq9R4HiNN88OglXkbyVzf5WTqSiwweJfAaoz%2Bxq0bbZ9Xq%2BavYI5kdprp7eQo0AZ6v3Jjc%2BgABkVusPKyatQfgQIgQOcpggKDURsrhADbDvpdGruxkpYCYoU7dUWIiE8EqLZchI%2ByJmHoz02chGa8%2F0TNgGY0mifJGSFUlSfUiE%2BvbTTLWl1YEvMwEk9%2B8AXDaJVFU7VctUEeOjT4i4TpFYt5Ge4JufmRxLSZmh%2BRSic%2BliY7D3XhzuONyGtijuyNUl%2FIrUb8GmN6RA%2B8bZHD752N%2FkSoGkdFzPPauupZFVJkUnBcIEZyv77Fo1%2BcbfT40fRLsGJhRVUhpplhXfN59BX8SOgvFmT%2Bnp589onptzOxpMSHHTJptr6uRATmL5vY2J%2F6qpe%2BZdMvv9vc2Vjy4SCsYrJngTdYO%2FQjh1PoL2He4AYxrGZxvw0AImMcX%2FUE1MOo1sAROIcQ576auD0lHWrs1%2BEJH6CcheZ25wD%2B7URCv9X3yxapIDODHT3ILADBDkQzjvCCRHa5uFoEuPlR8U8d6o2uK%2FVWnXbc9Z8Sbim2JI5mPptmwE7gFid904W%2Fsq6j%2B8dvDJqafNUhlZIgst0G0ExZ1%2BQzodzPcWv2je%2B%2FWivFmtzjhQ0yUAEGiDuUXX42smLzpX4pLZ2wfi0mQQrR61cXCUbjgF7eZsHgJ58PqTOiKbek9I1mmFl%2Fddi30TSrAmNyC2j1moiq%2By%2Bmv0L4Q29OfUDxM%2BlEhdshr6wrOmNRynUwPO%2Bti5QsibPwbemJImXK5PXtj7mT2KtEkQEFbwGRRezYMRcofRuC8ZU9aZ3xB%2B9uZoN9YPldaHr4xqsDTVP7FvbbslDWQmfCTRt2oRv5o5mQl9SGLappvljqvMulDsafd9nBLbkWW0ABMV3yZDZ1d%2F9kbsJn34YL1TfIrK36RwsrsChXH6Sa%2BF2rwbOXv%2FEgRg7VrEUe4a6j%2FvoltXwlfGN6g1cNj6hJqvDiDOMUEArE%2F0HJKprqT9baDOPHyxbycsaTT9CT8IaLX3pjbdPGXAxh56XrKu5pi5ZBxKkjJVEYh03Pjo9P2dHt9BMlAu1xyH44attHtmtvhAuBccpUGWlWt08%2B2MeLsFf7ltr3jJcIcqqlTqGBUPxH8MKvVkX5cKXs8u022tm3p5ct1muIP0e4THQBb3%2FecTv27bpaZ6azT216saNNu4NAzpWlACaVy7dgBaKnIEFKgv3cPcdHb4HofnteP6rKxxN4D3oF%2FSuSOjSanNqZvc%2FA3qCeIbMeGG0GfXta3bDwj1DDdJrAekp0P0OBEzGBMCQsczsDo8Hpb7Jdwpww2G8z4BcwXbn2wATgR8hnsoJIbnitbnxfm0U0NdEM%2BdyuQpXXqVnhulOUyKIcdTW%2BSH3VZq5xes1hLCC6UCu6n84qI3PBMPI4fU7%2FwScv%2FVUvXOQ8z6zraNBUHyuVo2%2BHqvaPdRVwG8qgxFidRtbbi7sqj%2B6E9Kcpza9LofElQFuHzRkR42J6IcNMfjlCEJYG3KRDJBuFGZXi%2FU7tLnTCsuh2AY87HpiRuUP%2FCj4dP%2BTfwjxJ7I5Vt%2BWL%2FPlmSCO8%2BGi8%2BMa5a4tY3oZWUhxd1kPkjbN6N9G%2B8LvPxByvpnHQlIjLU1UXT073X%2BDf35Ro98bg9K062GqA1X3hUR8DhfmcUlQiJg72CrNn%2FdEbqursYuVBm865BETk8kq7Kq36itLbF2wu4YRqcU%2B4FPHptwxx2cKdTFmUGgt8ipzGbuy6zSDJHdjP%2FeDl2uQjsyBg0FRc3PX9UQWWwxDUP18QHK1lpaevMLfbmLJ5XZ0VDkGQzR%2FVjEzZtpVK6rQubwTTgeaBAns6RtDR57FP3WBifhUd8AXex6DujvUs0Rk%2BEP7IU3DnOObifBuhypclJfF9yoC%2F%2BvPf7x%2F%2F%2FXrzxerfDzj%2Ftvwv%22%7D";case"c1-system-context":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dXnHEqxIrOXX9LJf4M0S771nh%2FfeFPD1D%2B7tidnMRBRZkIhEqVQeHYl%2FYOYfmL%2BG%2Fh8IOIt1a6bxH5j9B4LA%2FwHe9u0txmzKm7H62%2B25%2FL%2FEdwPm%2F4G5fwDqH5gZrrLpi1e0nrb9r5jadAWD%2FB1geB8vmyL%2FewcCIOxfAP4XIlwQ%2FAemEPhtQOJ%2FEASJ%2F8onVTH%2BP4b5%2F2i3J%2F9p9vd6v%2Bfi73VenE1W%2FFH1j54Q8P1gJm%2BSak2G92JMhv9kubz69HeLvhiKfb3fc%2BqPFt9D9Ntq09js0%2FqZ4evCkmH%2BB%2F5uUH2yfmOZfbKX05%2FTf9%2BDAd%2FGube9%2BHqYadyLa%2F%2BrYfOfIfp3bhnybwb%2Bu%2F2R%2Bzf7v1Iwh%2FtgnL3v1iDuRMClfeTLMz3Cq3PId5uYTSFUbDrZm4e6VkBehHvwJihkqCg3Xm6Z%2Fwfi2aEZEqoTKiCogKMlgJ%2F0mpKH3Ocdd%2BAKHCL2TUiy%2FAG7tyc%2Fr%2Fl67xtC2xmHboiyw7fjncpa1oeMX8rnQ%2Bv8vu6d8NqKBlsuCGYvuIFLC6EwStXftKvZ%2BuCcaO7b7Jx5nO8SttfKzvf6Mpd3qiJzAv%2FqYyLN90XcXc4BaDyQ%2FQ4XuK5j3QSabimm92TFOK8EP4qMewLh%2BZ6f7ttIm3JPZQPc6QUMmdcjqnnKmLHjBCHmqPZnreiWlBB4pPXcpHoD1cc8r8fvYQEXxXfqfCZ3PrFHW0AaHYuFi5P3%2B%2BadKNIn7ixzxzOaTxH3h5Okv5M4rjRlnOFOcwQot7b5lD06RPV1%2FnDYk2MefDAAuHI%2Fk3fve%2BgrOBAIpvGj7h8DOTYIdGJxuMNsE18RV36Ew0vzM%2BvbaPavkQSgMGy2lgw%2FJbdG3bURShNJ%2FB36KAxE%2BA7pymvX3KrDL8guwzPuKJnTnvEpH85BToenm3MVYsIrec%2FL2%2FqtLOdxcapGB%2FZEYZfSY9xj0cE5GyzlMS7JNLt5W4ZKG%2Ba%2BcaeYcNXzssi1nRiXdUJWnysd9ntH5OUYrqpicvzgkEB6DgDKUYQVla7WDvzaFPDaLcUY%2BNkZmqFQQW70mJtAUFRtduiUyhYb729tzSj0OqcxHHZTKI8%2BR%2BkNpiHDmYYkoGeIUwVJcaBRTTzsZf%2BUVgRG%2FJ0J%2BfkBlpPKzOnKCxD8wDC%2BDrINz7QPU8dZiFGgEgsIRrcZQJwk3SstJIaeSIaNzQ3dlDQDo2nab%2FpBE%2B%2BHO8EhP9hXuYc2CQJUtyqM6bTOoCHrwJHfGPletvnHIWzsiaJAxvizcPDikstJQ4zMiOfC91VdxlyUFfuoZqevWk65C6nRWoJNjF6Jvorz%2Befhhq5kpDyhG8JbMW1i%2FoOyCgr%2Bbvbz6Pc4FtW7z60rjq%2BjC7Fpfk9KarjR%2FIIbfwb5aLotMHf6mOLaVN6bc%2FKTUY1VUpVI1clk37kmeB5fWyH3bXVzSk8GD%2FbYfnMwctc6uG%2FH5lFQgc7aQE%2FuBKnEQ75IRDt8bMJWkAPM0IKOhv3CMk4eGvT8qZ2pk%2BhTLVn9BPBP%2Bc4vf%2B9ORzaLXjyQx9NOdC71ob5nzLKXW0zUbSy%2FpZKIxsGk6LYOdy1QBp%2FxbWzVg2%2B3Rnnvk8TjYDrSkzxCTmLH40SbDyfZmypKG9lvgh7NNUJb5En84N61p7nGkCd3ITnNGPw5pmwbI4saaS9PsawgoT5zhTEIpaGGSGz4bk9%2BdbeavmNfVlMkbeTKPl1nV77dsXW9R8RO%2Buw2I5%2BqiHe%2BkOiXCRxQnz6YJ0ogGmuP%2F07D3LFTChbWMgtf9w3guOVE7beTeE7sDjw8Kva5IP8iTuA78Hn9OefzsEHr%2Bvf6BNjyncwRdD89e24lq50mHudSFt2JsjnjphbvdLmPAAWcnxNKJBgFraoAnfSzu1pmfgzJonFaLqEHOUM%2B2YvvqHM2QgE2xH3P2Z2L9uv8g%2BUb0%2FW7018FCpzBMMx5HQDqPwAlt%2BZTUBZ312CBYp4UNPrZ%2Fh6cqNXftqt4zZRNr4Tko%2B1Nk1t3BE48R2a5CArJHZCL16LkGt1V6bFM%2ByFekW5ie%2FNINbBIUeo0YOeHuzLhhtuCxDliOyPsa%2BtZCgjlFMamqJLuEps0JIdXJKWXQWcFX7yD9pfojmS1tJx1vwfW8hZzSmJcE%2FHQilYu6FXClY36ocCE%2Bi5pkxsYoelRASlqtaykwZcx7VSeknXKMo%2FYPfi3CJgu7ZTS3fdANVfivl5HL3kvS36vSr7PHWHG0CAKchF9m%2BzABpsIBZtSaD2oyxpFmj9hel4GwCtrwtK6ZNrQasx1w7XvQFG2yrlEAsjSOo0wN0Xd5j9uJhydGttByjxN19TFsPJ4xNZSBLqREH4E3pw8%2BM1jPUwej1OJjBfjaTvf8xPdl9Ssi2F2raJ5V0neS0mBJDpMOdS1NZZBmfiPddBtmHCmiLTIgO7ZLW0vedEmEQuS2Zt%2BtRDR9F2cerNVmXnhjGX4YkThd6hueLjEyAh0rkjI%2FRqGWbAVe55fyX8eyxpratFQO%2FoDZ3Cc%2FqufNEK%2BjYUgVXQe7NFFTEvJ%2BFoA4oYSHe1QZlV5CwQyL4bRuIfjrJ%2FaSUmnvYAvWD5rSfZrBPm6UekJIdBql4rgbtCaCReZb2Z3aDMSKX%2FsKrmgUD%2FVdN%2F1WGMslCTH78tGpgxbnt7%2FsVNC90gk9DQMqkmsrOvd3d6V45bx6meuWcyE7hj4AWfqFPBufXTSRWq65Y2Zi0FZDr%2BLOALaJ6WI%2FNsBkGgDVD7RdQFz5ZMdxQZt161aMUJVHVZMeaq8odFLtQv4Mart0Pi6Onl4C2PMcOvt3EnC1z7KgVYX1HacTlphBkRE%2BlGEGdxeYd6rltVRppaOnlWXETartQp6h9mc4irKqOBvzgqXGi9itBrxvtQ0SyFcfZasZeSdOTNJl8MbhTTFb4yg1fCQ8fPhXHXR7OSMIJ2BRCWswikii2UFmEbkVeNaN0ZZIecLmFuvDMV8CtplM8SwvKyEnuv1lb%2BqNkoomhICZ0Ja8YVniwEUjraU%2Fs5WWtXyWGIdFZz76NlPklDicE%2FUJwoyb5Bwll5oxVUQQ5bjzZuo8JpDr7jIk92YYP6Ix3LNPvWyRyYSmxQ61Hg%2BXpQz5nzTdTvX9hz8yFHjBBkarnDwnpur%2BujxRN8Pa7nepDZjL469JbE%2BEXr82OsPL%2F4kY682WmGKQa9MwAwd0WOd3kXn1OQjNhR%2BEuYeXTNnHUn%2B8GGieZfQpQhkhzkTwWwhl6vtllr2WpjLZiooxoqhSW4bU8irvxjN36ShqvkbngS%2BrRA144szD%2BzE%2FsVgzKka3HOvJ0eRf3xA4pgmlaE0zP7eq%2F4yb5VuE6RYlk3TLoqJGYVVzoOQfTGehgCNPWzN5J%2B%2BtAxVw6MwgrpJNawFRK6v9VEkyGQaRWCjBffSRJpxZPD5g69fIIEuVP%2BNLvB6BTqzSIEISlYiyMoMV14ZBudPV81vyS3VfIk9%2FcDvdGrqI0kfb4NRIbkIRn3MXDVlwC6aEQQOMZI3DUIqZrxSYbbDDqaSfIGZj5BbSw415263KvswykRltyPEtEJuv%2BgdPluUjQW8w1Ye3W4g6xcdnvmuWQZKS2mpSR8zk2q4KGj%2B2AgF5DuESnVIvzD05gsfO074cH0HEsBTJljYWVfQ1OfgKGE7gPXHqdxnpmli3BowWtlqSuDCjzub64HEo70Pj%2Bzu4r4BVreevlSF%2BihURSGJAY0s3F66dVag3Xz0yzDSTAU7vfCoaPLTqwEartOX6ofnMWZvIcNE2RMdU2GC0hljASLGSHcn33bBxMlBkylHmX0JtIS3r89ZBz%2FSnZVMObhMgWJ6ei7S1a6acwJa7iinX94azZSOrkDSEHB29SN96DTS%2FYHYio2HHsAW3V2I3BWwMoFOYRc%2FjpgQCfD9E%2BL%2B7fcXRL5OZqzFAtqLuo9RHDvYAL%2FsY8jI8elcRKbJxI3z0d8oVyFslC9IiSIUybXrgxkDiHkcVfTHyRFCMbrWnJ5EoO2fZdejVyNGGUrcA8PMFaiDaGsUV8nw%2FKiWulABf3epJYZVvv62WvNS%2F7z4ZjK9KjfG2cNy2rlwioOk%2FAcTnKYKSBrSE6W%2BDLZmzqKbOD1Cyhqn4jBbuOlOUE4HCq8hAud1aCtElvos7cyP1C3%2FfNujj5KO7%2BFCv8wsPuZlivVC6RM07pwyBOyRVp6YYTDBOmret4FLtYkOeirAWj7yxQQyEV3UTCKNY2g0vWrGxuO7JWyFq8H0wxUd%2Fu544dnUOlQFN7J4TyPxliaW4fr1OQa1kkL83GOvgZc7sYASvwnm0nkWGiU1L7W%2BIkqwOEISY%2Bo6mCYFUPOOzrIazvYCw0kG2CzatFa12ISAtelUnS0JYXSif%2BR%2FEMPolFz4kG%2FjJ4Ny%2BCFuGi20iVIVBDSkabL%2B6dOX5PzSGOcdvmb4zHyzBksovUvowFVDEqsFGYrKvDMVgn6ggfwKCK66fm6umYddh9LGPuRLT%2FhGTrK7%2BY3utMM22Y2kevL%2BR0pHAw62MFFCsP%2BohDJwXke9NN5GsMTlAceYCEDfAMSwJLjP%2BS1vYRWAFROWXk%2Fi9%2B7A90qBnLbHFFHA8a%2BOsKk9r%2FmTNwHeFdROa7tiIaorbGd3Wxko2RW9HIt0gqtv%2BpbaDKKPBrv4m3UJBbEvtvzcLIHCJRC4yFZpzMTIu3lmshqIhjMlEP8Ynv7LlmiZQuUeuBhOqcb7LcvDVWDcUHXtc%2FruJxbPifxuVt%2F0d3zK8wrIm0ZWWcyqEUrnhQwUHYQBsClh1XDRpUZZ%2BJyQk2s9Lm%2BU2xozEpGlGUrBAeGr90wvLMl6pT12azNumDOGcWfJOQvsyR93QhRidnudOVQ1YUeO%2BUOc9LaBr6rCNih50u0t8DPyYbBrNQ3TRDdCJf6HSi87oEuSmS1tBM6gNSUt9r%2B8ZNf6%2BmcO746WaX3NhfBpXWuL1OLuHuF3ZnzMXzETa0Yb8KbfA7c2PahR8bzMnK2WxHkiBP7WCBm5f2R%2BP7EGvxui9cX0o3FFqQnVwx2rv8hJggE4xx%2FNhOSoPOTAbzfqk%2BTuCUdgbRaVQUfN3EMOKFG4ts3SRCWAuvr173bjl81%2BWFIh1KTFR7YBJwFf4TU90uIs9tdHEvyAUYSX%2FxLLiT5PqMghzAPZmU7Ohnycpkw5QjGFJzUoN%2BDz%2FbU%2F8MMh7xgGqJEZyAfysPfD4TnIs%2BzHzCQycO9HmPX7o1pGcTNtg9JhZhD4Jevk0Q6yjq9%2FDA5OA%2Bi6q2KUTxZ6XzyjbyYFNCKxvlwXoN8%2Fvq1LA88K%2BTlcFrb7BabLL3vh5RoGmXgX4LP9gRBFC4%2FUfBGm3%2BgveKH6F35%2BH0Rll9Cfm%2FQ%2BBJxL9S2evNmp1O4FGylXil8aEDpXP9szcuk%2FgDJZyVM6SgZmqtztyoA%2BHwCtMSrq3Vj0e2UlEhFtR%2BxEi9rCYmbv2ts%2Bjc3FbXBiIpOMFx4CDl5X77zKY6JQ5H%2B%2FDz2nOl0RIta21CU%2BAjCWC9TOVYohqXJoMAWUkPilDkxGBHAKwGEnfHWCfQvsEUSNuYwipqpS5HPdGPoT5JkzSdW6DNr4g9e1Cyy0dREMihgOizX7EjO57m3zZaWfXZJDnACdikDhCJXUAGMigNJNGU1nh2oDRpYXfGj6giPBT3BIyGL5SJG2J152miPPgAwR5Ttol1m%2F0G%2BTUzLgW3VsbCyvqMgA8Ct9aVRqgi9WUaNwvUzG4%2BZ34Xz%2FbEvYew6sKI0vcmHjgA7jF2lTdkFbgVw%2F%2BxhqM9W6tpbdDjc4awrl8%2FOgRE3fpbHPvvbaLN73aLwor%2BI0sj%2BrSymxhrwy%2Bi9j8eAHyKLhg2%2F6qyy448exfruDauZXqHHK0pRG9MLyLU4%2FgT5t7ChpRuSZTEhTyMgCYahN4tW8DX4mAtwQmkxGD5CsyebAawONFjvn89o2z4NBD42x1n4VTTrHIiawgOcy7rjBQGxD28xB05u%2B1JmCJUH%2B4C64HHhvHv9QjD5tqb5tgVwaw85tzX5tZpMX9R2MXVSUbmTX%2FIjfs5Ijo00qDCHgko9R1ZBhcR7koDEuH4gbfzWcM0UPu%2FzKjo2Il%2FwIAM15gfZnE9RikC%2BgxCVv6w4tJrlg8A8kewS7RXQtQQ1lt4dgbl4k7HWbmDUU%2FVr02UfA%2F54H9rIYnpX7aX3%2BOaYOMEc4Vyb1Jh3WhWXo%2FCdbz%2BQcHBKipemXauYUXuhn9xdTfs5HxpaV5GqMu4j2OjnLva4LRefgY1HGtQVQ%2BKdQ%2BJViv0msyZsgd735xio4Krj9y1l5i%2FyWy7%2FiItOiGjpdFbTXDAfrFPsKOgRzvHn8m2Xb5IpkhCpQJnQxZo2Pnppu4Vls5SHIw1SK6faRUGL%2Bwq9XX8qDNcUbv4aovqDGug9kEaZcanDrwTAvr3EQ0n%2FVx2KrJ%2FqbgNPOlG2%2BrSY5yGg%2Bp1SFqLleIfThUsn63Tbuz4%2FeLP%2FRNThPX4f7IouROiJytHvdKPdX4VAkphQAz6n8DY1%2Bnkf4vSATI9nyVLdllED7Xtgcb%2B%2F%2BqEsOzjUJBj1ACqmb8B30DvjCIH%2BjfB9I7Pgnm%2FhM%2BHIiSOtPh8Pk4TN%2B9n26gJmPUfz3FeX%2FfAP6pP9%2BBvrT878%3D%22%7D";case"deployment-demo-stand-topology":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dXrHDqxKk%2BbT3OVt4c0S771nh%2FfeFTx9wzl%2Fj1qaGakKyCSTDMJ%2BEck%2FMPMPzP%2BG%2Fh8IOIt1a6bxH5j9B4LA%2FwLe49tbjNmUN2P1t9tz%2BX%2BJ7wbM%2FwNz%2FwDUPzAz%2FMqmL96h9bTtf4epTVcwyN8HDO%2F0sinyv3cgAML%2BBeB%2FIcIFwX9gCoHfA0j8F4KC8d%2FxSVWM%2F4%2FH%2FH%2Bo25P%2FUPa3vd9z8bedF2eTFX9I%2FUMnBHw%2FmMmbpFqT4W2MyfCfsWwx99M9vOtuf8bx75Ethuk9OXsy5v%2Br838Gvo1%2F%2F%2B9R7jRP%2FVTdf4lp%2FvPO%2FfsaGfJv%2Fn8mv5fD9O%2F2Tfp3%2F19TYA73wbQnJ4Q7EXAUh6Z9%2B%2Bnovs0Qin%2B6tvfAA7kDYEECWUVXAlyYmZLvEDk7HGcJbgFqp7keSllzgjSHVmzZnT53rxo7yhNLa%2FTgXW06AjZ7J70M54MHmZB0zG1IfFulwsmoczmGETuiDF4DTOSg1d17DhHOkwgNOTipqiETFBscHGBQkwhBXw9NYqLD%2BcTCEBxVF3axfxkXFObHAhdyRPIKfBntSoagQBQy1R%2Fv4lBRqJKCZjvv4JGJOD%2BU5sa3%2FzBEQHhJeZL3YGwmcLuyU7%2FXag9G76kmBYfEw%2B2HKVndZujbpR%2FN4L5nBk3QqeDFGedGyJbXDVwN6XyfSbzS4DWxtdAfv6P7dc%2BvDtPbwo%2BJ9d6Jk74jxq1UUZeO5WbAwztfyV2uBiyUyavq1cM8gdQF7d9Fwpsfh7s0Qc3tzmAAPGukq%2B%2FTKJ%2Ftm1fatO5NQROivwAI1qEMvgX6uNy3V7Xo9ycdUEolqoxpW1fa%2BbwKw%2F0zwLFPq59oHm5h%2B4jxO%2BplUt6ZYVGZ76TLH3faJ%2B0%2B3qO%2BAwIlxo5uyVEYjIMxqw6J62chCAf8l4CxnRExTALQE%2BUo3uFsOnXH%2FHEgkNb3ePvl%2B8RlOEMAAPiega147AchrV4F5xGz1PfqlljtMS9xR7tMI%2BnN2JYAQZPmHWDe9ZGE70X1ugz%2BFQi9Oggc3ca9mgo4xsvLWV5Ac0DGFvIVDm17O3LDQ4Lv5%2FPHiPj7W78szaZ5rYrGPpZJ%2FZJP77%2Fnz5cDh%2BG0rzXxYuLKq5n3uiE%2Ba336rxbQIDT%2F5KKOsWfJOzHIZWEhwmRaQAL7JK11v5c4Og%2FCOG717uO3kGfCq1g8%2BeSonW3V4ybpMi5azwEsWdasY97VQvKJnZI2fZGoZSufqPRs7EJZ2WbHXlPDRUzarHu4BajF0UeIYmwmuBOhduxkEX96ekDPFm9eyw9DID5JgaJmTezIlY%2BRNi%2BPUv0QANKGjwUzrx26oLJ%2BfZd6r04IssBYMbnmvBe86TVxd33CYvgntbhJBCGJlhHm1kCQT0qW1%2FttvzYEPglkQg%2FLkgDssggLcbgKNsm%2FSobD6293rBX6UWdSjq55QnRfmfZkDp8MP7lMqpLQKJbq1ycEhuOd986kkwlgGHqLXony8dHQzk9ItgEpTiNOGC3qP%2BFJ5oSevMegkcynappZY78NVO58Wp5XuZ5Px%2B6WAsLOpY4i5hMEZVagB1asPsaS%2BmGMuIuR2NR4otH3%2B9pPI1Byrzui2T4nwte58mPNvNLjOVEndU%2BPMabLKq3b4depx4xQtPiM58wO%2FECzolRo%2BxTb5mxf10pEREiERap5NjzZ3e4wzx%2BxVAWW7hYBtzB%2F2UBYw9OYj3o97iZy%2Br0Li8EDFlDe0QbeNhpqfLQI1Mgrp9QhH9lOvXLHjXz9d7jeuUb0Dbq%2B7KRPhlyQfNZ23UiMU587F5H9zwqcnKxO8UpKoZOC7RI1LXQQflOh9mF0i0j%2FGCIPXyCcwao0PgHk%2FU6NiMsDeBLZz36F%2BtLBg9cDjjXuFPpBpBPUG41z1e3LipcPdLk5z%2BdOkYsnmTqG6QGmxrxzMVOOjUs7c1NFRtDWZikOzspwFYz%2FmYH0KXgEAx0L%2FQC%2BuOXDpNLPWO7gmI3g1VmK8ZdTEPAtq5fadBVFYZi9zknKWOCeubhRpmKS%2BAkfQzpaCbicXqFDdWQSduvZa9RuWnJ6l7gfc%2BMNFpkYITEaPR0dClwM5uC5nZy78XpHOjgxcYF3I48yiuJ8G7XYynAkZMZ%2FO43hfAAe7wJgLD03K6ZFRk59vwZQXa0Wt2gp6hMqiIArJDY6%2FrIrN6VwLcfRH5F9QT8PxWOGNF4131Jd7sXCkRS%2FJZBbVGc2YZlJxV6tEepnk7dDBFcWqjQiwMLNKohIa0fqX4Q59dgltWVCm2VZp0scxcMsqphzoMTcES%2BzFb8cGRDPwli89scvkF%2Bseqj2yvyRVO%2FWUoTKHG2rnj2ohHyCZzJBSGOUjA%2FgYLUCa%2FtSSEp5quf2pF75chinpcuuQYaGSNOvPnQwIDWjdrnsJAG1CTvgdZJ0QmoQo8H79rk%2FFLw8O5bSTtk8PwWyjffJyuvHKXBKg8FEaIkrNm%2FomHG1DSlJqJyJtkpkbQIsCeLxV3MghR4qJF5vkbJ04yoAoZegGsCjqApEa7C8j3Z%2FmLHp2WOe3ICGy9vN5yNWvQQzRnbpYVJW3e1Soz6LppobfFmQoKT6nRhvmkrTMvqF4VaxhFjLBB95RVs8n3HKMUKKi4zguCSR04N8v9zrVlPgBH6RrxhyCG8l9AEDV%2F8CWha80AFNSlD7raFoTWo1G7V0dihbpeowl5qDYYK%2Bq%2BznSbr79Cgt9W%2Bdt6vOzhB6Bd0eoVoQKaarCrl75XKq%2F3zB0bd28%2BPhFgmCO%2B5Nwdj5Wtru4Hk9nDqcqxJYfCVTn%2FZKc6%2B5Yrb75Kwgp2oJglse%2FpygO7Lh8kBzPx6%2Ftdv1lJ3HVAgyubTcOaSPMGpGdVhdX9Bagrd%2BqpunZenWCs94cRipas97uax2huPwUf6ifOfzoLox%2B%2FQ%2Fo%2FETL%2FslUrqWXBlFwqznZgh2N5kP1O9C03WwU5xv1fgAcRxkYxwClnU1XRJzXZhTCB5lOQZY%2FSCbMK%2FTMJQt%2FQO3wMueYIACqaQLbFaq6Lix%2BTab6tMNz1%2BThxrRhmQGvnCLNmwoSzSZdpp2kotS0FKdY8f5Iy5FJfD42ZD36ixo%2FZwtXAeF9I4bhpp4tiDOVq0WWKzMFJxw0zZmoO%2BfIPuYKpGkNsH02sqSZlpljtwt87SrOtQfEgb3nmBIHqU%2F6ZfJPkEk6Cp%2B6RbWxfmowU4j3SpQ4IdaO8WRBVsCUrq4mWWlHiMo%2Bzny7D6FKg8jAsD7xjSNw6oOa84zbzBCRQgCGB6z%2BQPDIy%2F9BrmmqyV8m%2FTvuWSc9KZzpa2ZvtCybLGt6FKoqCBWkd8RSmpXJZYzdXF2G19HxJRTgNaAZgGfpFQIcUnyeJKQbvYDdVMqJsoNzvZxF1qonH6PJ1uwc%2BfTwGEhqqcs7uQzcBFtWTBWrqJbTaiie1dMDF%2FoHiQJiOkNyXTs%2BSY0iVWWzLOXXenrjZc5KlKN5j%2FCRTJRE%2BVgipDQPwZUv5KV10gLCQ6ts2FyowYhP%2FpHMJV4wG1Zkgm%2FhKcuYDgnPCqQ2AkSt%2FqpZoTuYdikeG7MSQekcunNfuia27sLXlPtnYPSU4HQ2y5WRWg0GX0f8D5s3K9Gy8RpieslgB8ErSy%2FIG%2Fg2Akc1F%2FMko%2FZ78Npz8V%2B%2BL%2F8QEq33fW%2BtY7RduELHekbDd%2FwXK9fxgN6ZJzNBN7gQSpDMlt%2Bkw06Ssxv%2BnAayOpGOcGeGugQAQb3sfC6gFVNiOFl%2B9Phnwp%2Ffy0NUQ81Wix9TNLRPhQZn7yoG7P38B%2BaHCm6%2Fbp9dL0j1fjJBnl1q2zT5nAohm9qAuu%2Fot30hFwpJzLG1rjwfPVe3vDf%2B34ryfiGpL8Bgh%2BMJOGiTUv0zdAa%2BHDXF7qGcJnW5Zz3I3%2FnaeoW8nwrQpjfH1yENrQbFd%2Bgahd6VbXGNxmYB%2B99qFksHazIF6nAAs7kYbd%2F8g6nddaBN62CV%2FhmtYB507bu7CCTyNEvTaLP7iw%2BBPjGa98wjYXliRTFLztDf64Af6Igt4BdwCl1f8M17GtmG6lN7bVJmh8oA2K1237OuXyNMuw3qHCE1OrtrFiMSCp1C3QO5r2XxmzxBFkkI5T8B%2FvThcId9g7hz97wB3yIIbAGZ1EcyZ6SGPRJA9AFgfh1Rzpth5M9g7808bIx1PBgoEd8eMtf1vG5tPQ2%2B89WnNS%2FpLAMGa4FrcCTi%2BdLmdWrgGCRxTYezjNd%2BiXG8XrDThbGDkeDkZY71pYEIdia1WH1cg45pvXtSi8al8nvCr9T6aQY%2BKKUvgR019oBnLmAaa7K700QV9Ez5uyaHbbg8wYlo6K5sqCcE4zZTpqpVZw8ZYg%2FLEAHK634S2AMzOl%2FHPM63%2FKJsGkQNkT20t8jU07dBZ1QPe%2BMp4rl3CCPuhsB9GgKy8E9Af%2F8bfonK5ZKwndTqALKaqplkh%2BiccfcSlRZTK7nXoyTpJlunlSNw7uYs20DPTjOMhK7uiGospzpG6TVTTuKHJAyaAF%2FmHgKU%2Fhs9gmZ4m%2Bl7oPN8Dxptg4paHSB47UgZcpNapzWL20wbHFtuZmNtJ9QXWI1rM3v9vTGld2pon8ZITozUpRbFJOaCJ5o%2BltRKIBHFcmfMLzKUqIV8kkCl3GGlGnxYPgSXaHU8vpsEd5fnc5aEPEW64BZaSx%2BXwpyfmyatQH7o8o4SfMLRw5LvrvVotwBscDqoDdSzNOLk5Sx9fSXWapX8tvKodPCZLCyBe8SrCHUv9xs2yX3wAtVS6NGUEx3Z%2BzTmEZ6wmM8LyRmry%2FRjQkJ0y8CPfEuk3Xbndu4Bv6Qek7WfG8VqC6spgS%2FusRpu%2F41IvxiYb7pU8Qe%2BbH8fCFvflhQnhKLIhihowdwdoXst%2By8086Otsda69WZFUPb8AOWsd8LUOnMqkN7jmPeXJbLFKCqWbXHebPRF4t8HfygiNAFtrWuH%2FxonMFkrLdlB7eh9sabg5bLrIyo7lzYCDPKinPvq7n%2Bn%2BiE9SdrOrE6aqJdd1%2BEMzve1jMh3RM51XN4clXL%2F5GbVKG0EXWNWnGrtpYoZKkgYIrygTq3kG1AXGKsRW9fgvhzc5JfOCzQdqywpYo1idJxJPB5ARetXG79Jz4s67D76quKVdEM1bIjLija1Rvw1ei2l4u0nShaKj95KaPp8IG%2BlDTZ6WhSqu02Ri2UxRe1xozF63jOi%2BvSQtRQoUkP7M%2B7RHSqjuDKmTkETsKsgb25%2BVh5T2FewG3nYnZcuEQKPnwi99g6UmBxNm8XZyxPI%2BqFW0hL13CZT0fVVwvuHcb3tqN8EMNydo%2F2qD5Z9aalOCbkx4ped1BXObcfmlE5GosejSzinf2gkWQc1lhw7AxmDocmUlEhOZ7VE8wNiAYVneRDbjCGI2Q04cZsB%2Fp%2B7h8kOepMTggwwpnh8uaxjQkELW%2FJ6V%2FopJQdxQzZq0U8ZG6TOLM6I8RadfRfGNRgswBzqyftBWj8quQPyDe5zJraCJnbkEo5nSh2Djib4GcewHDcXoKsPnVxtUQUE26Go%2F%2FVWoi0ZT6cvqERnnoxmNeSS5jnwngtDuNAbQkJORKOhLK8sAQhbrCB41XsD4O%2BDLCtfGgl4JmWcnsO%2BUzHQNvD1UPMvXACG68%2BVHSNYqKoBHpRUrpdW52ZmKJQpnpUGyaREQ4t2ToIRUyFkQhjgbtMUOs0HLwVQc5VP4TgVFbRUFQ4HgeVf%2BK5fEq8BM9%2FqDVma%2FL4lJ3Jzdg%2Fyt7yKHRLlQrsJxAwbpapPM%2BtYEpZ6pVm3amtySh1GgKEMEUUj6JJInZj8C240Mu0jZbuMm1OhWK5eVQk6K4x2pp4%2FdLQrjbYczFFjayI8Km0VdtmrAZcEkG1KMnylZr6INSC%2BOAgKAndRUo9%2F1PpOcQZ3Fr8UrSC0sGLZSJj5IFBChG4Ufkl6y0ppbBTiZ9cQNhZoWs%2FfPUVF3d9BB35Aa1O7RDcmi80Wie2ebMdZ5mCBfiBNvMhlPWYkiGxQV5B%2FdFX3Fj0dGUtoopDIkXKKfwW7Hv%2F6gVEGiKk9lP2HbyPXmt1LMXT%2Bxc%2FH6OXIEix5qwbf1tmoNHdgufIwz93vLgRTvopxKD6elxw8%2BdX%2B5%2Fcj4mOnCxJk0nqyk%2Bge1dWgO7qHSRTLyfboEntm1YLHXfC%2BQ%2FCvdl34NFV5mGXoeRxwhRnYTKNWbzpDbL0mN6nsa3q%2FOQesoxjsw0woJxn4E5FPGgPsM1mcRUc0wzbNDMg0QUHMfB52%2Fsot0cDA6gdbs23%2FdQMOtrOKtpYXkxBf0xSY%2F2Kh%2F7eKyR8A9avT8p6OLgtKxPVsOoL9JjN45ieE4Y50yl2AaYCEP%2BAVB5tkfMZG7LRi89aenVVgXJRH0Dp%2FPTEQtzSuxAfF%2BGAeKcSbC%2FvHEvhuEddqwpzLGhmZetnfGScRE%2BHLRWsVzlIjqJRBuxbbjiIyhxFlBJLCZjlcDT4brILaFa31N2RsVUGVBgnUyT7Coj2MQ47qCUKwaPSi%2BylZz5zSQhPG6j6za5ejQpwkzLtkJhUgpvJGB2isKgnLhQEdMKYbACy3obiX4HdeFOEUpdjIVBfx1nICLYYx0KUD1hQn4toPt6BMCx46uLBdog4h2n4RFZmFt6yMinxVLmRp%2BdkHnwQvMjaGdvQgShJd%2F0VFxnGaQeGnNCbkAXbFBeB49g5awreCvO%2FOcCBFAt4kf4XkO0PxkP6xgj2Wt6TxleUyYCRznANQRrIwDTun4J0ZEZtu51e5phoYZtVjSu25dUiea6ogcPPt0Mgig%2F5Fab3kHGkm%2F2pel5Z5%2FfSvULQE7ZcUz6bmxiRemi%2FvT%2BTJJ6tbcz7ud04%2FykK5cYr0aMC74iYhs%2FbGiF9fzU1i3OUtQKKAJqq%2BgH9o9TJrWR%2BSn%2Fm7l60H2DoExPSlTDvVlDB0TBQYvHtwZ%2FJOH6nhDTntETu%2FWFb%2FP6JMVqwH%2FCf9kreq0s24BysAkK2rkesLF71KK9ZHwhlDRHHE3yVWInWdynwp54g5%2FSrz2yZcgtmjQrylsXtIvZBXkUjc%2Bu4AQA%2FjDoWScs3KaA8x1i%2BXZc3Ac%2BZDzchzLGW4gAWpp7hPZwYt0Btm6TcMuQ8FWFXUDzAM9f5did0SvyqqOYtMQXAGi1%2BiZxAiQysteQ2zLp2rzItHo6wNifSGuHPV%2BIh1YSg3h3mKeA%2BWOTUe%2Ba4k2cG8hy7B9I5YZSTdjUBP1%2FMRX16U8KjIlZLigpajV%2BgtI4zcGGGv1dEb0X1uINjYuBV2UZuih5fGfNMUHQx8nm0vw2ZzN350CK8tYbQBCgPaBbw%2FHCOrsR76YSTLt0hlEl9ya%2FAjWiTrtx4AO2iM1%2Fsv1YPINlMWg088y6Em0scTCQ2c2%2FGKdi%2B8bsLPITdRfXRAnzdV2ZkFlQYug76alytMLn%2BoDeYCs2D1kgsUXJZOWTXlJzdyAx%2B94Dc%2B%2FqeQfIZRPRXhad7%2FfjSTrnGE07wNIqdAV8kg8OmkiqZnXfSeQp6ll0ZoVWlqAy1lESCgfl4DvzIhk5KprMBQyld0QpP4VBY0VRm64xqd7lv8B6VDn8SsPIG8Ix7TBmZEumyMVPwwUS%2Blal08EdH7BF2q7XOlhyo0y1Wp%2BGEOZ0WjBftBWTpngtjJsQz77W3hDjmK6VryPVw5tskhcDOPNyr0j18tcUmSzzS5%2BlnadVlhEYDj6G4WGkrR%2BFed0dYLazZEKAGnSzajqHKQfAzJJRtSIsBKzmVxM%2FpD6Z2zcNrmtSrTIS8ygoDWe0Ngg%2B7BRsSXvpXNNith5287cL5ldN%2B6s%2B1ELDWUOT%2BDTIavkrKry8%2Ba8Q7nAoVjudAYVEqNmoejpz7EdKc36vBdVzo4WhAYncKyjJgtPQrcEPqeKzhihjPf7Mvk2Q7HWEkMaKYXhqS3mdB7abHsnuBKBKPnmCuqmBrbnyRwEkdkF6nQdDa91cX9UN8R3uSxcmCgRvCUDDwgzRJQWE0EmCvhVLZeiwP8PktLpKnfQ1VT29da%2B68G4n4z5t27KeejPgbB7RagsJJZ17lDcT1E6PS%2Bw78lfO2cHcueg5vz22%2BUYQEfruvdcZS9z7nySsWnJTMh65YAvw4DGifDprfPg38xjW8YWCedsdikKLwc8lfCWFAa0Ig%2BVHWn%2BEO5wP57BSbIapaCctTY9Vcumu%2BF5OtvKiA4pgzsQb3flmR%2FQAWf8OvyEJBRKiYaTuCP2LaWc%2FSh465jIYVH8mBTRVJ3AUWbGBK9s6D%2Fee4k5Wq%2BBVtLkpEnCBm8EfpDKYABXx8OOMcPj6gNcK2ha1CsDcwth5KOz0FV1LCCKmueHnrolcRfJouRdyvDcLMZbEF4EJzxmC5vkWifSjaASQwijtjJN5LIl5SpJTl4OlPpXP46%2Fp9a11qhlnU3fqzETrRXsnkTZWdrDsjThm5SKsvduKX1O6ff%2Fc9DZuIeZgl%2BRTjfr%2F9B2UcZsCp9FFsVQiLWpnCr1toFNKlJsVsJ1ubtwuDcPTRfnU8ug4VSfi2gyMrar86hCFhOHgQtH3JiW%2FVQH%2BLdIgB4xm6Ol1YJLF%2FW6AtEPKBkNyZDV6bp%2FUym6ybDgfIV6v97cMndXMaFOOLX91XoghSjqUkGMd71I6Cl8VfULzN4lT2gfpl7Clcb7wRrE1eIEP%2FFFRJr1lQHh7B5Sh7%2FbafxEUuHj5CsVHXIsmwoYkdsv7m8Cg38OC2CkktyiB2te%2B5nnPufgypjDthnBy%2BUWAA%2BipIU9skls9J2cR3KQ0sSFvyFMSmrM0TbqPwVABU2A0wp2fOVkE8PQxsMWLUs9%2BRzeunEl5XTBnlSMk659h1vXOeF%2Bg9N%2FlR7y8yjzY5VsW6PnD%2F9AArNhEbVT124LC12HfMfIOztntHKDAcuNIY6CbedJZ6ZQYJsJgj4EdFHjDsMcr75nYKoOGPKYHjhm8HlA3CU9sbZx2d0OCNkPYiXSFvsrZD55tnTsAoJA7CuCAhvljagLzmuWEvOggAOQh8CG12FR8UqPfg0Y79aXBQTZjnEOmmZZ0Wd31jY%2F%2F4jKuHZqcbTqpScHa%2FjprNKZYc13QeVdG7TAtbZMfL9GhmFVKcM2eI5Z8ykl91iqcpjZR6RzdYRY18DDE6FdNABMZEpvAOSNYDaxfVHZNbcKpnMKx8vZvVBw9aJ4fuhKUiWH8K%2FU2B2z04iu%2FDEjx93K5RTZPIMHzIMAJH4SXUi0K6JcEOJJSOlyjEfX1qQgXBdMUh9BkFuyRbyeuMnmjQLm4lBvCakRSEBKHbvL55rRYcccQYFvE6zh0KVt886DEozVVB52flYO0o1A31cXRzW1k1ljkdTR8igeB%2B%2Fd2GSbB3VHwym6U%2BCgHQklpoX6mvz%2B46UWSTfkVR0N9sHj7pz2Y7LMn0PMcQ%2BIO%2BH953M9O8lLjnTfkzGur6PvD5fp%2Bu%2Fs%2BXRf%2FzXdTnJ%2F9%2BGvWn578B%22%7D";case"deployment-demo-stand-current-implementation":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dXrXsqzKkuTXnMfThhaPaK0KzRtaa83XN%2Bzdd2zMesZsUQuSrMwkMsLdI4p%2FYOYfmL%2F67h8IOPJlrcfhH5j9B4LA%2FwLez7c1H9Ixq4fyb7Pr8P8S3w2Y%2Fwfm%2FgGof2Cmv4q6y9%2Bu1bhuf7updZszyN8B%2BvfrRZ1nf%2B9AAIT9C8D%2FQoQDgv%2FAFAK%2FHyDxXwiKRH%2F7x2U%2B%2FD%2BG%2Bf%2Bsbov%2FZ2V%2Fr7d7yv9eZ%2FlRp%2Fmfpf5ZJwR8fzCT1XG5xP17McT9%2F%2FRl86kb7%2F6dd%2F3Tj38%2F2bwf33%2F2Fg%2FZ%2F9X4n47vxb%2F%2FuxezL8vfm1I%2FdfnXMd6%2BVf9ZXP0%2FNujex0qRf7P%2FM9h72o%2F%2Frt8g%2F6Z%2Fh%2Fi3%2Fl8DwBzugUlGThJ3IOAgwszvKjg04he9zx2HTSBHCPPoR4cCwGicyBEHjOPjju3q5LWnQZfjpEWqGrgkhs3LjWfx0bBgSMJxUqH%2FQLTcaGMfsCkUvk8rHNiIBF12QcJ7ZRqcLNuPnTOxE8j6%2BbURDhoO8%2BYBRI0nfg32tqrqSHhnRvvedbG%2Bj3x%2Fqvs7NkmouSJo8faz9VxbrbNq3Wpsy5CugdujoDD5gAs3uRCX9XE8Qom1XLwb7sytfIeqVLHl7AJDkMJK3mt9eRf7XO9Hb0eKZ3bhsQSINt5uET%2B%2BkTuAnsAyAi93AhNmp%2B4kAu%2FNaocg1%2B%2BPvyL1Owj%2BJMSZ6%2BzA%2BXAPs8rwYPfsZxNLdnPvvGPnF3F0Gt%2F2SrIVMnS8nswkU9rDDOPuyLuf%2FG8zPVFk4fyK%2BjH%2B%2FbZuHRylmwYICQOCCsWFM4m4sjdueEMMCRY%2FF6q7jvYectFqWQHPfuchAwjyuZSwo0G4t2586iVxdB2XMj3BQ81ZsOGY44od5wd7Jw13LchEkAQz3RQjAHJtyN9O9NdxbYIp%2B37so1UlyUYCNK%2BRCTy16EP%2BAo%2FOYNpK9%2Fl8p3z%2F1HENn19tEkiN1wjqd98jK%2FsBUqwdOEqgDljcngBVQmyxj%2BjP2NOCj7%2BHJraWw4Ia73e72I5eI5q9gpO8dgB05kRXMXNZVDzdwvP%2BUPlMbHx8XO4Kdvdf1C5TnUt%2FYok%2Fit2Z8YC01XgeEQwnpDUv76LmcDX0VSKnsd2Cd%2BahxxuD%2FOL2GgG%2BDVwrQqsjsMP80a0NXBnPgcBPjXmcux4yyH3dzyq%2Bx5zAmfWkan7odC72Yo5%2FHjoqN3mq6rX1JqedyQENE9GS3zvHzhU0KSdATmnkMRPW2T2uGsS43sAA5KBGSsazS9UFNOwFhzhynqox0BjxylhmTkaVvIhYPjB%2BKtjpmieIS43p80IXnUX6pJtfvCBt5EtAwJBIZJksQfYSG9Xak8qIGHto0%2Fd3IMVJEpyHsIeSWH3%2B7ds4J9qWIEz4AcM5mSdryZClo0INDjiweeYjhWU8AU%2B4mVlIVw4vhsEsPmru74uSEgYXF0Fgc6CnOeoe%2Bu4JsrqbQt3AHQ02UGjTUZdR0c2fs1Bn9yIkdr6IN0Joq7l4Ylwu2IcdtQJ%2BiFyNYuNRTT%2BbE6ljQwducZrpooc1hsxgrs5my9Loa4TWFbN2qLuGbZ6fxTsW1CNPTuIjmAvGb95taNWmdvd2e0i1ICAToHRkj16OwGNpr%2BoGiuKXjEBAo6akLGqgCFFodHxeK0oPsYWrpzqcQyEPC1WXq6iUyqSSViTtfr9%2BCbmawMqu%2Fs5bAQz2BOmzbX3UBOBg4UOU8Au6b8n%2B3uYGvQJFLYgoJ%2Fd7Xqrs1Y54i%2BwsVMpopIGRHUrtPFy%2BmQOvyBBlIyrOwKBJexHz9bNIP%2Fk3inm0NOHX4HzOND4HFR10MrQ7GuAlf1%2B9hD5N688dvj4IHFCBjherHWjJVPDpJNzF1vVAvKN17qc5vrTzYUJtmuUxnCs2RqsMZEB5SgXIZn%2FAR3vdmrJh91ixLjVvw%2FrajOyBPE64cIV0SaKCKf2RFLI6WAcgEQSA7NI6Z8qRvYbS%2BKycM%2F%2BB2FmwErK8ePGeJ10V%2F1RvHVPbtY0Vmse4FqXTGh9izx9mXsSM2zjWJyLSfHeVV96DIzsvLifrAWBZ0cCXDWmfJmLwqhpi4pFxNuA7KqtcvXP%2FBSrV5Jrqs4FMhO7POxLvRvSu4Zy5vGyDJ8KJ6MNthwmD7Ho9tRC2V5EJ4cJkycBofH57r2hI0GTg8mND6xE%2FQsiYsIL1IRgOlq4bElJVkZZ%2Bt1wtLCVASHq62W%2Bk3IhNK75ueLO7T8%2F3y0s13WP%2Fi4fQudKoRWeu3fYRKueGmRPsiCq5eRNBZdRC9Gsh23pBOuLHjz4mnmM24wQ0pdl%2BC%2Fc28ezFAzse0q4JYFxNNVpibqSqOEk%2F3guayZaSDOnUhwbJde5R0Xw1%2F50cnjSm7j6w4B5XmuN1UyPzbNxvYy%2BGS13shx1%2BfnJNd9ICuygwLSGd8hx77fM%2FoGBJyeftpvZITCTrA8LNHeZ3yPz8wmRc8N0NQGHQebDKYE69S%2B9ON2C5fa%2BaxD4%2F%2F5S1BS%2BjKjZ%2Bi7KmdfXGn1IlxdS5DDyVrAJ8K3G9Gqm6lYYY8cz0Sdm5WIaB4lc9XmKX37NIO5Gl93viaDLyOPfzS0hu%2BsGAcHetHDMUpddxZnGfB6hekf%2F2BbHziDnIDo2wKtJhSdGEH%2F%2Bc6R4GjC5iuI%2BYbpLSdWpv9%2Bgj%2FlN7a5AEsU8cvxO%2FDEFI6Mu0VGr%2FmO39HlYp9%2BNGP5%2FmJFAOHQxiyXWKAcZXSGJX5slufPEHMyl%2F9pTfg%2B1V%2BI8JQq1AC0mUPpfyS%2BYjeJUgXw8Y7plJoh1%2B34Nd8gYwP7hJkthA2VyG5e5YanEShj6JO4Me3P3Ue4L2FkdEu2ashCtFyR7PsAXMdsthXgbD54ZhDIUaIn1GBAh9tuOp0y4xeKODF7B4wB5ctZPA%2FflBnA76pHXaa7BACmmtwFXRyrioyabfkmXp0ojEISFvtXcatnrZlYMW1cz70J6DFCJq7J3r672O2PNh1WBseJRSh1dY5AJCQJrk8TYoR7WOiKyqexbJFrGiLdPHXh7MMVcWY6NJ0wcMu1FgI5FeV66EVPqZgdMw6EHQbmma54t55M7zy86x8EpKZ52X2ZEj49SO6BNrvAmQ56vk6N%2BUpX5vBIrg%2BzC85d7r4XxsS79eruh6hg0nvAg%2Bf6UD39hqdxrijhJGHF3eUdDVF2RBxIUZbkinhpFMXVypzOBn2gRtEl62OOu5oVRKIQG2fousM4P8JDIEUfkts2G3oRslH1eKuwkVz3ekEoj2dF8UKivTyYAur9v8K7V5y9rHMhksM34wy%2FGGUbq7jp4F%2FXE%2FrYCL9uq%2BYu6eVE1tbybhAvFtB7PZl6bbQcizq0whOMiws%2FJlRxqEWBIGjRbNq3ZvuIy0ApI6aU2%2FR8Sk5Ozcxa3X32jmxsG2xHab3neAsSg5%2BRAA0q%2FHC81yXId7jKcMIDWw3NXRF0AQv%2Fto4GEMQpM%2FqoomESSFWQNzRALcvn1624igcYjPAyD7mRXgziTEmEIdx7d0zw3uGJfAyby7fWZ1Q9cuBD7mLAhkqFYg%2FsY00svvv5NMPDTQJnwM9sK%2BvY9FjYnego5Ryr6U4T3EXl%2BIOR1%2BG109BFIej%2FANcb2DewrmmYNNEUlgD0auVg44VejOgY5kzXdUaB%2BhKkB%2B8Ifujiq9I7HJ2K5vikuVoMEjCuSnSqQajbarUI8dB5LvqQ1W1WySK9Dlc3P9A%2FQ3q4X4%2B5GNZUUgvyccZ%2FVW2vlc0faSRxbcmZCpQaczTQY5cMW8K4Aq%2Fa5S096u%2FRw8VHlplvdwBXMy2t1JiCTKhy%2Br8YhUVP%2FcVkzbojSvG8Uw1se29osKDJH8j55liIoB%2FkM58UNOvtz7pAeQJL36OaDzm5bjUa%2FlPCKGfJ7yblc7%2FCc2m%2B8vMijxme7zr9xBqanHvBImthO2d0jhU0sJCZPM%2FNDAkmyHxWBY0CU39iDYfOIvl5A5%2FAqc74QqtC0ilTyIwhXjXw%2BeG7mfqHMHcX5FOyslfZb9Vkdu5p0mhp5ixhh0e02r1cvWS5QzwpdxoG%2FoHUnTjL3oamVbVFQZ5XbS2QTSWZlUhpF93ZtmgHtVWDHtCieISIQMzGUiKeDIBRXFusbw00kGcLR3S%2BudIQKg7gEB5U2ZD%2FN%2B3zVQNkqaK2JGhbGysjm3PGgMrafWKRA%2FGHlLV%2BAgfBULDTSe9SM7583K1Ns%2FMHQS3WsHiDZ78076ZiIqHXbYvn93gWeirMpTNrJ3RLjHHf0%2BP23mRAD9h%2BO4yBzXhyIL26L5MKLFX%2F%2FgEBdutbkNAmK3hhkCyk02dWTlBPKZ97DZbvZ9RKZIHLGQjTcbQM016wuvtCnGAm5yqksFFMLALrygiwUdIFpyUqacuMJp%2FVx7wxqWhpvYcL2E8hJLaFkvFdBrR35VEE2nhOhPSF6sYURqIniQybWgkA8HKpLdQYYYBycNObN3rUXMfTUSIDqvFwwL4fI5G83bxuS%2BxtQmzKPmOx%2FcKNLXzRJwFaSIn9j7A7wqpMop2agQLDf1jC6r5Sf5l0MPbY5%2F0NH%2FQmk0GSi4C6aQDWfwn6Ab2BDZxesB9yZEiO4YLKDIhAoio8DhwAV2AiTXaMQptL7PeiRPYfA0uH2aXPSFkoQvAoJzk9yKUZDteTU%2BTbJerVfG40Dx%2BtAlPf2zf3qEUU2MjAWLMq1uoaYtcelFi9XMGzG3VAXnjZKA788KSa3BiSwbeoVkzlxKejZ3RPUKI3HKq2b5Zr8apIpfqJ2xqKu20QyRwEno7F66nZ3XVfTSpkbZacPhe5y7vJmXXJuXWiSAg5HlFDHk9IcF0oRUhSuYZstHeiIkWywnRoZpakcpn6wnBM4oHVemakyeVwcfhLky4N96vuq20EKlMIaCUhgIZi%2BQx96sPZ3C%2FJom6qDSBy7TMcscpK51ZGa7GLsSb1jT%2BHlAt7m8wrbHT%2BbS0hTFtK3%2F0Dn2b54RFnfiUEnBciM43HHhKfdjD%2B2CboF7uFsoZtvAFDWbWYTpS%2FK655xpy9R7Qfv3eUpYyVPeZ3q%2FLI%2FTWl%2F0HO8RT9RU70meucwbDgceOdeG8q88VuIxZuFEZl%2B24yEN4KlYk1cWQyktk3RwHyjZB5ATiGdnpJRWYPlgdSmjsamapEASakulSg3ATbrrZYHrXsJi2E5qcjUiHPmcF0rnPE3ExYqM%2Fn1y4XCZQN4rYOiOj8v2nXWVHR5d8EgSPOnUMWH9Q%2FeNspYUAH8%2BCk3KI9K4G6mCrXAppk%2Fl8VZAsU9pjcpLQustn%2FsEaoOJYBNwaqQwWU1GKLJ96nEqq7rrIV3R8VKv1fM1Bw%2Fjfpx%2BieeWtZJ%2BecqvVZjfx6cXFO87RpIIbHzyP9gxRHTg8LMsZsFAXrjp%2FMmJCpCV3QRVHmmrm1eOdDHzANP4iRa%2F29Olq%2FSSeejhnA1oRsxSDUEQngMuvMrvy56lMbCXVmJRDAkuOZtexx8CpJo11RoyXJoVZ3yOiyrlQFNfkOIZY3YPEDzZgA90hHC0v9QQ5FzR1THnl5x7heRN3y4U6d6MZ8sPUqcjqlGRr2IKHGKYqJ9wpEwCEPF6glcBn%2FBv03fFoKd4c9uPOOTVLhGyfpj9OEgAK66P8PICnnmgWZiP9XEtM%2BE0TeKgVAMa4EjUvCy5ucmU21tYe%2F6uS5M4G7qdKLtUhXGihWhQgXdETMOnfYlocLDThaZcsu4YgcVz2dulpo0%2FXeqbEAbBVzZojrhXpE0A6FAe3NyCzdi5s26wODlPSmyq8PDYAuASIaHXd8BvYPVkYojuylOsr7p%2BV7EtCXT6UxFqpMtVZYlJvsXN%2B5Zn90SZX4%2BG1liNIZP9ZUz%2FcNKriVH%2FiAE4RpjaqNnBfFxbiIy04esEV1n89XSt8iuyRi5Fhz55z7tfUqahaMipRPnFUQ8k%2FBDrDUCHwMnS8dOPP91FTvMLgFiliBCqpiNo4LzQONQNPj8NrhF1PSG2Quog0rQ2AMicXzI8a8X1A6jWWmWbhbaMOXwwiyghkEnmU%2BQy1tdu1SylL%2FRp%2B5Yqa2DVYxVreEKtalifmzfc%2B%2B9FNXpdSqV2oQzsasR%2FLRi2nJp%2BsiIbWmThJu2hZXCs5aIhCdCE2q%2BIZhNoo%2BbnbmOXmKWfnEvJWeSQArM1mIUsQhbFYpOkXYCKENUd%2BKuK0%2FUXjthXEdwxWV3KVEVTTwvokKrs5nclFkXEyVrA9E6XjA8w25yI1QsoGBwimXEhC%2F2JvUVxP2aXNQ9SsbN%2FjHc%2FLhVMo75cfkbti1P6ok8Z3f2QK1qwKu3vWJdV4swwLRixLypj0KwFLW0m5qW6VGdTMEhAYKl1RsW6Wf2Rj2nk0%2F8ou%2B2f7pTs%2FBoX6%2FFbFqRuWHWSl4WX88c7TBoy%2FrTglDaxFu5vS1Tvzvjlp1PgSqlgJRA36ky5Ki%2FKvjSV2%2BM0LwdurIa1P6l8rEDfuV%2BdFIix3xdpJNNS%2FjGhjaewyuJ6U%2BV4L8lI0shE4g0s40n7SEO51xuZJ7eC78YQIKXms%2FDilk3FH7lzePRmfM2Wt0eLqp%2FE7zqEeROYYa8Sa8T7b8OsH5cgPMEvVgUxTmIsk5rAgkKTnHrmnPIqr8OSjd11Z6t2%2Ba4j5frLUcae7A4AQwdpiP6U%2BwY6J9FSqCaDQUDvUIGSl9BfPFlCnd%2BD%2BhVt4Hl%2B%2Bdp%2F4%2FOEF8DlQe8rKRlYa5Pp%2FqpbjbS3V5i9w3UmGuC3im8gPxN7jGhOI0ubsDwXPcsumTJyNG4pGnEleGZWBtkTw8ls2NqFVogSRZvaa4uAu%2BXR20dyT7G2xzo2H%2F%2FkXFiFxIknX%2FKGKGYFsxSLccaP9JbeEkZ%2Bd8udWLA3PgXkWMs3O9cFC3hdSS99EI4Vxvp2tb%2FsnieccjS3kX%2F3jY5%2B3W8cnBm6QWZRU3tSm3PxlySEO%2BhPWfI4R5e%2Bp1q5LfwH0zl9lOgxiiif8NTcmjJ3S1Ql2kA3sgD3WJrCjqg%2Fi0zsalLhcR%2FK5%2B7HDfaHxG8emQUL2WZsNPKFG%2FtjIVjTZ84Nvjc329iOJ7A0bQGZcbHXeEhWsep79NiUfwZ2Tq%2Fvyx3rRov%2FRVAZjCS85DYmpa5PZAf8JVXNp53JlwppXPoL3L5RLWNO8WRHJEApUp9mJDOASSRLAk97nyUmHG95vpY5LDyXrlxJ581UgVRXO38hyXqQVTaHEHJIbzpVjRe4pOmPzw6q2ymSMZoc2bAKrGw75xBrO8guRWBSM3IulP%2FmvX1ccR89uZRXL3rZ3WPOOZP8EviK8urHQLWiQYPJY1xMLixg6egn1niCDAp9di2Q44rfM3mFdoZeQdtJygnx9Qq9J8I7vJ7p8efmP8uA73y1E5OjWJZPp1OTxkrZwXgTGYZygABtT9jDRevoeHB74tiVvbMI1bNjkCfWhBlyPAa7XU6hC%2FXH8cRZash9JyF74pV8KLiMorhjjOhU1%2BBXkU1cKj8CXd3GEgYVcDiTL72AlaHtAHOkiR6DewJSAnR7M3MqMioeTmaI5US3ciitb%2FsvuBG5pKJVPJ2mVaKFYWKcTiljfEUYJ%2FmedXw%2FrNFGu1GCJI6MvI1buP10IOWpo5C1tRsfLWwdH2LWUMAHRM7FVPH5I8FkQQ7IrPi4fggAcwfH19Yb6vlfC%2BpYomUycAA2pajg%2FVqb5iUwsRrr98OGHKBEvFYJtNWO%2BJuKBs%2FcEqwro9svktWpdTcXr3R9xCgIcpyvDDFOVu%2BMQ0OOcfhZgTVrNiWlgjkzWyzrfjH3%2BVVTbM5%2BSMGTzlcj4MzgehIn0b%2FdZoy7XOkcfEwb0MjpjOmF9ATzSo6vxCfvKWSTHMwE7wVoWBpfMEyTyF47P0qLja3GXhOa8chX5MfY0vFg8DdaRc4K5zc69HC0dWFzdn2416iI7zJ%2FJuUwTzkNwaedRv0jib4SEWSnvBR2wXmCvog8oThgl0RJ30DfD7B2fOxy%2BAV0%2BpXW46wijeMGuEWI1zoPvBN1zehghJINlBq4CF7BmlDQ8QeQTK2N65RaOQreOCIOqP1wQkHVYJ4O4q1Qcm266Xpu0VwvJuxkf8jK2EobRBdEXj5WyeoIsONO4dvHN0Smm7SNzAWnt2MDzJ%2BvKJ8U5Y%2BU%2FWhJ7XykGNXCQVk1zQbaaHbA18xWoqkPF8TvaeKBf4Yb4eohdu1FAgis3CmqSJbs809GQCqUrrXhU9L8K2UdhGlGC9gruVtWjTHB5ZNKfTvThkNq01ce5zCpdljD2zkM6V%2FRCGzVGzC00KlASPwxol7Ap4PCH5PMdzTpjNhwH1eTNldu6leoxD5aJXXz2GO1TNfq6EGpRwVrpZcPmT%2Fjc4pzd5Bx8%2BH50wS%2Fkefyz1q%2BB1dSjjaYIoe6SffNHkaPipa5R9GfzK3dz1BoT0k%2FJA5%2B2vrUOBzxE8ZVDWZ%2F4dGWVWzBnBTO%2FA6xEyCLxFc2H%2FrxcxrpynjBd0v85pTDLTbrl54q3tsaUfx2j9PrCJNinlQ0KfrElWT1UfQE3iFXcyHJs%2FERsRmPJRvjQ1tm%2B5czWTK4abyTa6HtUdj3m2IHuxD5OWN9aOgcWte5sbEVIPPHZB3KmmsFzyOBYatk4BkDsS0IRRiTsCsHFZ%2BTi1sPOe0NEcoryHSgdIvcctxRWEV2dtccrL9QyW%2FjsyQTyg6omXjuvuL7xm%2BYCzeiRU2D4DvAQi9izyQRXB91SZGdtK9yxav%2BCiqn%2BVOq21fq%2B40qf7q%2BStpqYUrsLmM6E4RMFL1XejvWIbil6SgYb1urLMPf%2BszRU2uXlY3pI6sipEaJXiMu%2Fk0nGPGMWbAAXfz6IyctCO7UprbAVnXsDLa1A6uEIcvoFnG%2BlxjkFrCj6%2BKsa096JD7jSojBnEB3J78%2FxfugY7X1eVakj1%2FkJACCOLbqbrGKdCVn53lrODwOmsIoUmZ0aMyABPbovVrtn4cKCYf2XBetSkNafmFOGEZFd612n5K1YyJsTwv4T5KEnd3Hv9l%2B7OsrtdSBWZsk1Xm2M7H7C7f1K9moj5p8GjW%2FYMBKhfCbRjbuRa0%2BraBkusFXneTCxPEcwMA%2BBCtEv%2BT%2BtPOpfW%2Bn%2FKmc%2Fucdmf%2B84fOlKX9f8vnT8t8%3D%22%7D";case"demo-stand-current-monitored-points":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dXjHEq26ru3XrOa%2BRQ5Ncs5pQo%2Bcc%2BbrL6x9zmu9WzWnKWxZlrE0NOQ%2FMPMH5q%2B%2B%2BwMBR76s9Tj8gdk%2FEAT%2BD%2FC2b28%2BpGNWD%2BW%2F3Z7L%2F0N8AzD%2FB%2Bb%2BANQfmOmvou7yV7Qa1%2B1fMbVucwb5V0H%2FTi%2FqPPt3BAIg7B8A%2FgciXBD8A1MI%2FDYg8T8IikX%2FysdlPvx%2F1Pwf1m3xfyz79327p%2Fzf9yw%2F6jT%2Fa%2BpfOyHg%2B8FMVsflEvfvyxD3%2F5Fl86kb7%2F5dd%2F0rx78tm%2Ffj%2B3C2eMj%2Br85%2F3j%2BzL8tnMARo41Bv45J%2FI%2BZY%2F1X22VT%2FZ%2Bvdu5sU%2BSd7dfyzfhr%2BSf%2Bd%2B0%2F%2F35n%2FTP9vHszhPhilfyBaFfgDAefmqYBRDsUyCGGla7muWGVZF0vLGkfEW%2BpEyH7oa2auXwB9VU1TB6MDm86rYTA8fLrSNUFH8pXwawEi4EEaJ%2FfGg0Ym9iSIEXztYaB2jLwJK7D3LOCeOJsk2neCFh4t9Itkns%2FiaxlHoFkibBJV6bWUb6IY5qvAj0xjifw2mDd81EGYa5ABiaYVDk3UGOGFtndOe4%2BYxwkkCEjkJtDS5Y27FbJewloo9C1C6cR8CTyRL%2FHllYQHd62bGeydXPnt8VX3efxg5kLD6pC82yJU%2Bui3h83WUHjcrTALJlHCKRO1FD8CHW%2FTyPSIAoB%2BhurZuAsoAupGd6f%2Ban8yatgZW7cgblnsncj%2F2VER3trtJrhwv4sjhVM8SKs77eT3hBseg6rhyz3IJCxwBWvVYjTwQavRpJgnNpJar6%2FR0bPflezbq1LUzz3Vj9Jjv4wvq802HkGdoSBKjL29tb58l7C7XRpoNDYU1ZNoNtYXonUyJkQ5jJu5C78b0qiCKriEGEt9yY%2BxvCHcyDKDe6EKD5fmm8NoVtY4ep7yRpRVjYuWVOwopq%2BKaEwQCbGIA9APENrH57WvlkSNxBMKzJYn%2Bw334v%2F1a3r31LdNNiFSz250GeVeytpmE985XQpW8716BNxsGPwqHzm1btBcV8cpvZsBrOSaFNnXv%2B03EZ2eiCAaEvTsDFbcSVY2v6aiN45APtdEFkMbLFKys1HkeVl80lScV5QAzsJYi9%2FmTUzwexXZG%2B%2BVKBJpZUvyizcD68VisDFQ7SpuhvWJoNUnF%2FS3PT2ZPR8enfa5UcrtodE1hqiqJim8Cip11AjSfp8jpztFuLnObBPncOsCuklO2PWJJAHeBfS5f9%2FcutZuqm%2Bdc0kXdNZCatzRvJj66Azob4aMd8nxqE5ArjuDON2yRaoYHFPnwHUf2Wyp2w2VMWLjhMqyaqoD4y1gmwsxNhLMqgLioKGUYr2tB36thjJZtOI5DIxdPkeUj6L8nNwlBo%2FLg1kvzvCXtulNXfWNn%2BcMkWkAQvjheJ568ju9TRgi%2B74XbasV0kMdXoVZX2mJ0F6Ls31c8%2FIbueyYTjBtZ1B4v2tBxpBhvwhLI0GmuGJLWBXTXe5PzXrj2eWexLeMs80t93JQ8hCdDhc79dqkrvzNP5Qlm%2BlDE%2FBnCvtqv4HUZh5JgYsuhWsO7YH9m1iBj647dXymtxoVHzrGVpIcrbif60eEoL3bol9I4vma0%2FrpMU0sIy3JWlPzHQA6ZAuKk3hkyXPf99Qc7vgN6l86BdXF2KeeEhNdIHbH1cqHJadhC8ve%2Bpjg%2Fargd4cL52ukLwY5%2BfOUV%2BBOrUZJQ9LtcnNTvULPS57zedd%2F9gY4hzZ7HOV3vYjNh%2BShbZl%2BcnGmmbdhCBqx6WomCYp0ciOC4KZ0viaVt0dITuu2HWKvkssd0UW%2Fs9lfGyk6X%2FV3wmBbgVhTQi9a2WENUXVHsAPa4oHEFyK3D46tONQJ6j9zqCgXe5%2B7pOWDwTk74t2zmrc7vAFLrRvTdmPS3hr4saQaVpR3oYCjGF2rGTS4EJQwDRhCzMGUHjj77ellOHpHBxC%2FuwH7fcQFGzRlp7LyGOgo6rxuSoahEuJsj%2Bk8k7KDacijgML%2Bnsr6WAFjGfNOBjiy2ugpbuwoxKK159zcTl2Ez4F2rK3u%2BhzGMGCFhLfUc7M8qCHNbAis2eovVrKiWcQCxnOMhQG%2FMY8NM2gtsVSmP5d7gsggpoX4HoAzatnWeL%2BtUtC7r7Hrm6N5B6EI41d2a9OyqsRLvtV%2Fx9wTcjTNItX5JM2SYMwLg21TWz9EG3XeBM%2FsWHlHAclFJOuMtaIXP0SSHoJDRKquhNOSMlMsbVNjxn0RDdVmaeymAQpQCuvVD8BBITZvjqer3PhJHb%2B6Kk1lYIE1xpu56QXLad685tr5rdCCSQFSTgh1UNFBHiQOsPDZGkhskTSZ6wc8%2BL0L5cUTwMd8NDxg4vZK3xSBcrV3VzhzR0yug7cpi54CMo%2FqrRVlDEQPKxQqlwCneJojvnDKF0mwgI49dVLw6g7GC6d50pksrg7E7qaM8qUjDLgXvKiiXDxGoGSvd7TCtnFaUXwZpUUyUI%2Be0k1JBEuMsD8LoJNrC0hPHJ7RUOecON0pepeFC8WLX9prACokgVJolNXqRaOfcCzwNlbS29i731SJzk4ZoaYrm3I7QKXZ6u1mYMoxl2CJeMRI5Vb%2Be2qFP%2BTHYGB%2F4nqHKJEiSuWJvqSgvSls8rbZjvDAuMtQhaSOaZwwWej%2ByrpqcGGTtE9Q14Kd9JQyRYkktcU0GkvXwXQ%2F0w2zi9AhOI%2BKbJn4i%2FEfpE1MjxfxvQoLHwXvicHiecye%2F%2FIh2o9dp8Vb54qxTWpJoH3WYvgi%2BQz6IiCfQgJZwa5vxLUECv2hw6XiTM0Cq3NN3IESKbzSRsagjfyEkCJCFHymkzyWX8zEsQ1%2FHsIb8GkkuDQOw%2BQTb26nA8zHTkUbR3VYR7bb6oyt6RJPidV1jXZ5xOvWmxFz46kW4jpgeMzibObVtLj1Ja%2BjzV9CTesrsd3urJGRTnZ8iAoMQLfkSzZpfG7R4IEsnQnfSZKsnabpJbE2RLLj2lYGAGddREHDvTmiZlN%2BKgNG5W6vDzhlrTx0kWJQWZx56Zo7T40qS1YVHRrabdhJSH0kWSjhhUUage785PZUeFdJ9Qz2g%2BT9kPv6ItH81McqJUK7fdg9p1Vgh72UjWOT76uFQWKs1YppxxosO%2BEk4WpcDR2uXq8mFOskKxWfFwbTEdGQGImZSEGxZoxkBXbtBz%2FmiABq%2B8zy1OldSjbOyc%2B40IZ5dffGN9mUYbyiPvSmJS%2Br7IJrm8vS%2BfvEvNy4x2D1r42qfz%2F4ww%2FxxcpmR0bphtU2hLxjrJllV5mxF3G76%2BK9bzBrlsdzk4ht%2FeHS0Ag%2BVUVc%2B%2BNyQnKLNYkJDBu5MmZsKfEcmvbnbeRaKy7de9Q%2B2q2CFBh%2BMIpj2vuQ23GO2iWE0SbsFLmvHIlxpYCEZBGwfA8c0II3UC5gcJRWuwF2zPxz1jFyLi2GdgrAxeeDHgGEEYvyLSoe3kIA24M0rmnc2gURtfgY94qI55dRbTQzPFGHEk81pzJKYNXrskBZwFVxCtp08b5AIHDyL93j9XkWB%2FpWxN9U7u%2B7Wz2zIsBJ1iovHH757BfEItEGucIYb7qd8B0xw42MpwjNDS3%2BUnP7uthH0itb79EcskdJdOthJFahqS7AMKUGAWoiW8wS%2FYqn8UFIoDnJxMT3NNs%2B%2Bs5hm6FVE8HuEsYx7oJPE5zBI%2BBQWiUCQKY8tGrVW6eTfDNbhQUpgOMSWs7gusHM92h1jw1auJYF7F4FjLGOxqFxLov9gLpoWsbyuN%2FnthG%2BUTA%2Fz0fGvauyshpRpjGSg2G8GZMKq6DX72a1aT0BX2kQrH22qjLqoWIMRgcYr4HMj1rduC3AywR7q02y22mdFlA%2FhBCNAxv8%2B6hNityNhjkiIaKM376Gjc5CvUSlRkCmVXpDL%2B3QC8mi%2BQUUcaiNLxRCaMlxXeAmmemJxOLN0XzH84sro5w%2FQoSxeZbYMIHt7G%2BGwY9%2BNX2c9V%2BtkSZ4bDBdA9MOP0%2FkS7uGlrFZp3mmlArU9AC%2B6vEDC8YQEW3NnOtBGNblhWpkRUsnVSqjL14dO59wYxIgTEpBYr4RyB2OiEAc74N6j1KBJaNh9CP%2BnIfDpDOloJXPqnPEfJEtlapX7tzA3lG6M3izBmRmlz5X5s2FpOEwT27qC5BKUrV7ISbQ6o%2B4Kz%2BPBDmhEd%2Bnzjc46J0SHj0ZZ%2Bm3Y0UGh03bt020JWAwKUAalM6X2FPu%2BFMeTW86z22iQ5SdUcVZGUc%2BDgePUH3sVeN7l1kqPucOVlPJL3furoMw1ULNLRxa8K9ycIXDHEi3lMsFuymbG6Mjkwz3aT7WuGal2wRjb4WYu%2FbVFuzDXF7ssmqbBdn4cGkTDh2PEpojuwYAGyTAjePlUwAN3HS3SruRAwvMRy3GmmoAfjS2z0XWNxbQPnt5JN8usM7ipb3E3JrOajtizYAR1tactWjSpxNIespFwsx%2Bn24psLyW8e8LwygO2QUQEZdMirjFOtepS2qpS7025kh%2FfXXc2P9WS5fyU3TiJxIu%2BoclvdFSIJfV4sRyYiDD4S3HujKSrPKyxJtqvqSZDxOyiiEjqxbKLfqO2EZ05LnwnDYQWhCrCtdLOwscUTMhJECS%2FfBOQpuPF7%2FsKLmbpSChGzvat%2BOeS71B%2FJKPsAW4tktgXZTxCspdX84uH%2ByZIUyNsMxXd5IHlqqKU5%2FqSwg7e5RzLDfSxe7Az3tNJYpe7%2FjrQh%2B0FrnnPd65LDvPI4Cj52u3jZIEvbSClBMSKdMWgU4zCNk07vfJhTRHxfq%2B9iz90lcyLIEjRqu45e6tfyQvvjxJUh3LkWnwu894ixXsXvMwm%2FBhzc6iak%2FGnSBW%2BTmPc1YNaYlNeb3U5JWNBZXSTlVc%2FdspwUfuKpvdh1LzrZ1AuKCUD0rmHOAlRWXfBNVeBCl43S5EkvC7kSwqkW9DO5hPj7CLnJrpLtNrTrBhPFCZDFTBfhIW0FsL8Ywufeg0teudZmGRalolRZQK%2BfduYbE8FCYZhqQdmtx347PzF5uhVBkSFFW%2B9QLnKjoza62EAR06Hur1rb%2FFUIYLW%2FLisVCuDxGx7Zma7F0nhZzjb6F5Q7BOgR6npPb5xWnjwEAScUGk57RJP5JE9rjyVpJgRlSN%2FG9lR5ebeuZ%2F6YJ56luPW9xUmD%2B4hD74eLE2c7NYevGfr%2B2vxmMqOcjMJSmXERok%2FDJPQ9rliPjUhZ9nMWIYjVIQcoAQLSecvh5Ir0y8Rb4c0LbT54GDBgqkgvOcpdfdeGCgNfXY8CZHfpAFvEU2y5L4l14NLlYbOa8ELeweJk9dx2itB%2BgIv%2FiKsxNBBy%2FV8HJu9r7ogzcnE6OszNVa%2FQKN6IDzXlhZEZ3jK4MBhP41aw2LivjhsvbyIRUtP0b6o%2ByL8QlDnBJ5NEZQOzRGeCFMPTAuHIvgKPdAKLUVTc7COcVjWG5jytAf7QPwAv9mDFeIayX9n7U%2FlF9MgDeKGuJhg5VM823tcOl6gYSTzIwTrH%2BBD6GWZdg65GDvvHBCXZitAp3qAnmpMcEM59r%2BTev08bhwtl1usgvpfBkWCmUxkBzX47yt98HSXHQ8aUd5HgzYAifFyX2Xl%2FDHTP97c%2Frfe9%2B36z9Xv397%2Fhc%3D%22%7D";case"c2-edge-telemetry-agent-containers":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dXnHEqy6ku3XnOHpwJsh3lN4N8N77%2Fn6B3vfO3gR3RUVVCEkkUq3Vkr%2FwMw%2FMH%2F13T8QcOTLWo%2FDPzD7DwSB%2FwO817c1H9Ixq4fyb7Pr8P8S3wOY%2Fwfm%2FgGof2Cmv4q6y9%2Bu1bhuf7updZszyN8J%2Bnd4UefZ3ycQAGH%2FAvC%2FEOGA4D8whcDvBST%2BB0GJ6G%2F%2FuMyH%2F2Wa%2F0O6Lf6PZH%2Fvt3vK%2F95n%2BVGn%2BR9R%2F8gJAd8XZrI6Lpe4f2%2BGuP9PXzY%2F8m6cXhkhwL7XLe%2FXP%2F3598pl5bc2J%2B%2FyPt%2BW%2B%2F1P%2FZHwvx2Y773MOGxxPbwy%2FpWj%2Fs9yu3cFKfJvCv2bv%2FP8u%2F13ln%2F%2FrPLf9P8bBnO4B0YZuUPcgYC%2FAbLZK7PuW%2Bv8BECdaEmhfbhtrncfKbQzu52341jUk64Fk2b9YdsqLCXZ0jWhk3oIAiwpNSGAfJnQ54kN8VHQQYyJ6UFdYi225z7wp2lVAET0SvFzRzpa8PZSuSC4d2k6R2Tj3qdZgqdufZNSDeW1vEI32fQ531VJlxfxeOCJ5C6w5yS2toQ27kdOPAdE%2BzoJrdANoS5z4byzXdpwm4mzZmXWPfVoq2%2Fbz0rot1udF6HUHk%2FSVT8IU4236Xjex8qK3eNDh8cSoULqTpOaN9KrUrQlDJXoX93TDSll4tMcmcGtiswP%2BzvMJab3h8bV4L15nYeWKZfIgL7fxNR6VFD%2BQZWvuESOCi1mV%2BqKPkTQZwuxyaf%2FdneijawkR9YPIn6e%2FJLeaeA65WOoTYt3Pt5JOC0mStXYgyPnD36%2BUXwazg7fJ8ixY80gYS5e3pmkuoDid8DZ%2B4Q6XoEF4qiDh%2FvYmxkK7hsQCMSQB%2FLU1rduba2mRDyN8Yiw4YqMRupNO4ARtf6t5K%2Be%2BAlXIttNZT23dsuwUEdpStA2Mr9shzuSkj86J32PDWxni0I1j3WA3Xg%2B8yoPjjSPbZyoLOS0VOcq9%2BJFGsdkkRagwC4PsUVQAHFqEtYFtmoI%2FzQ5A7m%2F3D%2BgFulh7tZaaNo7mQoVGq51WdZzhuqJ6LVoALKa6w8akF89aLJqpJyAV20t%2Fup3lkZupRZVQ07VldBCxvuQ80zmQNGAZlKU%2BJzPhpLSFnfham2%2F0fwOOvgNOTq0Ie7GY0tbgiS63pmGA9W90BgmnQOcpUMk0Iwcfubs0RJQedA4EYYu1kAFRB2kdM3WPL3yC7tRhIZKA19LslCkBn6n7rvCdz7%2FOWAJZtKshpTqvVWnnh%2FubWlhgG27IbDLuJDf9m5Fe7FzLeYL%2BUhdtP5iInwEFSHL3w%2FIc3PxkHVi1P3tTznYeZptAMUPWjhDKl7R6cTAkAZhb7zrZgnoLbny01glStzEpx83vz5GmyiaRrz5RIyFto66WU%2FA3p8VWEVb9Scd5IsLFtkH15k2TSxDTbWT83I8t8ZJkkgbMbRh%2BDdyaZe3Lvs3Rno87OTnsSm2Rnfb97sO05fohLOptyp68qPBm1No5hLzjvqF7wViQQkGxu9vi3Ed7cFjstIuO62L3vG5pISzwqQLJORYpS%2BM58UjLUm2z41iJYXhzLuZGNth26Mh6Y5Ks%2FiCawA%2BVqomZ5QrGx%2FH1ruqFQX9t2YYauUl41vEdp8wqTTK3WmFMDGbuSsEUaNtNrxk7cA%2FmZaPhP2LA5um8mVJ5jcF08WBftmlKGHQqJYHysTEDUZ6vGRT1bfVey5NCX8gmXgVSQ9O1Y%2B%2Bpvu7t%2BKnVeP1J0IDrUysbbGpnWuhk0bDCewlbcxAaWjldt6XRoQBNBTdSCPMmY2ikcPOjnPh9S55%2BFWacACvWjoB1CydIqR%2Bkrp66h5%2F2kFF52yK4T79krvXmi%2Fu8Kzt7rhAfZkPxGkXe8OGYsBghDWe6iD%2BzRSeqMCPqaqsSXlu6tEjhcH5jneHDNdxeHDwoCdZBubXVMfq5urVrdJuqbxRpJtNKUlJ%2FUMwamQBTj5G165YZJixEHk6NWWgzKxSCAWMgE9IRLUUEf41%2BqDlxtRCtTeJdvYp1PriQeouIMrdReT6MJZBJQS%2FmHkfS61UNo18x2EGdLgNq3FEcR2DRva5Hy9sd5%2Ffps8jUUwikH%2BsRwsz4MlJ6QFZ1pobYcu88jOloSFnovtxUyNMi302v0t%2Fg4zGkgSzFW3uVOV3hQfblIH3TgMdqR%2BY95oDYtBgKZQQuWoVBRPqUDxZ6bmPckG3J%2BSII6vyIabuU8bO01qbfbgHRB8ydKWYkgVGP%2BZAKzCczJNidYE%2FT6xB6ZiVdFY%2Bh9eYUsOiHHSWM9ZreuBq5yneM2lgeC6lZyzcUuYeSAYX9qgf4u8z5k%2F342oFjlrewngjJzyven5nJzoNsQRkOirEGYXUpoQ3%2FbjY%2BJQ84TL1HptTu529hOUKb4eG1RpWo7X7ARVZvYSHpMMclBfabHCbIl5YpI1Acbv00BA1U9o4UmbW4ZEB9%2B5VaC%2BLmYISXFxBPO2ewL1Q56JL8SZvB7D7KjgvIB2ojbBhcGBfpqWfh8WxYyCPWdXdFo34WAVKvzRL9DEAuL9%2FW4N12YwBx6g7ZKR94Hzanxcbqj6IKr9lgmqnjzR8Vht0MeXD8iesAAmSuR6thKyLz5o1x0EfnS1dJshVLCA8loDpvKAw0rZwXmaQbaD9jhR7bQJuGBKdEIkGnmNPOkp0YBJmb9bm8bwR3p%2BAiY3Eh2%2BHdG3jqHTtGNIM6ePMtpUxdfbNDsw92JSuh6%2BgcrHmiZJNkVxGToFfO8SIQQAoMoCaXCON1M79D%2FbHtYNcPFwqVJYrnVrip4LxbWvtO7%2FPvlUV4cYkG%2FqS6%2BTPiX5bYXQOyG%2B%2FjZhRgd4GEAASCo9d1UD27qjoYNmblywGd4WzQb3opQlChUH%2BnNgFhllyowZOtDpU4VTQN7hjlGsQZ%2BR6rVN3kcS98AL%2FUMoANYVwxiGbOol%2F3higZ3Ft%2BlueI5%2BHFawZHw63o9iDi811r2lOFxh%2FePBNqXkqx65axbDlUd97naM0qgbLbjrVegPa4AsqLUPiXCTjUedebJlFlKkqnZmLBNByjtmmOmY%2Fgc2hf82Y1OyYn8pvaERAKzwu%2B7iSyh6UDtioa0dhonFt9%2BVkd5LSXpMAb64KnVWHzimUt%2F31Gjo6URVwBAtb4qN3kkrQ3E%2Bn72q0cn6nH1rkD%2BG6Yf7jYkdneK6HIOg3Xqvce6scJSEvxcztquusiNnzbGEKtByVaUM8i11fXqS%2Ffv32X3tcxpORrKMFun0qlCbWqL3zNO4L9eU8OsPv3aF5vgtLF4BgG396bkx8Kl%2FPN2jxv2QtuC8W8mj1DqPBMKWW%2Fopb4DiljcTccdJn8kR9G72ci4OxnztobGrHrQEPPwT52M89fvjU4Nh79T4Sk6aofSFHmDGEiEojBIPWb7tzgHwRKblMeR8s4rcbbtA6Zgc31hk%2BrAQWuSZwtAVpAvgGTCv%2FRnbTFZCQ9pGg3eoYeS6iafj2RdbNBfNFJ5VKdSw0aJLSG2zsKRFkB%2F92P15Kl%2Bp0pyNr6pp1YYVYcoAsMYUfsqD5gBTlbE3iQ%2Fu5KtR1qvgIV1UZdymgJilROJQqDs1ernj6ouBnUz7yMb5shL5zph1iiQWIyBg7VHAxxUCngvzSR8hrIDD9hTMN53FtDMfNd3LMjjy4t0advBTEIm4yMdWjIePfy9AxXsCWJ%2FwhBqdQW8etGUCj5fs2hBAkZUhV8mqe870vLwey2Cs%2BagH6dDxG0rCcWSRauulwbKd7h4Feq25ViEiuPsjCQ7QcGL9TqA4i5zrvxSLHV7C%2BiLaNiJcY5WsrGqyLeACQah04nIn08izGa5%2Fz8U0DGMB07IvlENvAc8OD0Hr95tbYovmEo2yZrUc8%2BjRnqSPuGXB9I3Q7iXEDZVm7m5qjt%2FNuvjz%2BulOcdCLsQS%2B58BB6Y3xRFacU8vD8JSuwTh4qd2x8lChfNSRpC5wEtC4vBVDpLa6pNWKiz6aAhqPwk3Xzb01FTwUe6NoUJIxlrWkzfgXQeg2r2mgiJWdM7iOhjB1t%2BjmkHPbgDZ77SdIpJpyMHWOmOS%2BdA3HRPEigf2dSXs%2BhDYPKM76vsHDlB6AxP%2BqlAAQ%2BZyYlsYgli9mxTHMmtg6l4waFLxANbb7UaTJ0Qm4HRwr0tEISi89GH1bvw14WD0c1SgLvp%2FrIZn4llnJMtfkTKGlwKA%2BI%2FdxmpmMo3%2Bw4PwB7dL5zZ22%2Fs34xbM1yT182RjKAeIEXXA89x6FLxWgl1TTmd2bkKsMvOtHczG8w8akBxF5fDrae2GmPCrJnnyKLUEyOv1doZZlPyZ7pacTLk075JS30bgxm6ske%2FTiT%2BGNUh2u4grT5FrRdxJihI0IbF8K0pQqxMvVPNZQFo9rFPUyJ0Pz4HZxIWi5A0w8U9HgFoqxBNqtl8abfhH0zeHRSX0TlMYwnVrNbSTLiAORmccXWAKVxpSWOT6WL8XyTrhlDZkT8udGy3TvM8SGboHvEn%2F62Tw03A47%2FYSQZvXSc0XCIsFBZkYUDRkfEEgoamPKY7cT5Hpw3PMKnk6svvTH0EIIohNZwEwxJr%2BZ6Hmz0W0nySXuLgyvZ045VkkdfAEk1wzgc0Lpbfg0MK6%2FMviwpmHUyD%2FWovdrdq%2F%2Fr4o2fxg1%2Fipe1tejn6DYfA6B0N%2BMOfazy%2Fd6UVET9KdgOMTaHx75NPo5WwGwSM7YnCard0wjlbsTb00AI33ZEsrftJbk6EVKf5yrdIqD%2BUYAtAX%2BOQKr8byvU9blG%2Ffc6%2FDZfJCPVjrlLu2QW60dn9N%2Fuz5gOfkJk4z4bTSzPDYYiV72IxSw1wWKr3FtA%2FD6e5eliCPnxa3W4G5lA9EDjK8Jrhbo%2F22YHCULb0ljecnhcyoNuepjb3LRC85IqGO3p4C3%2FVDys%2BTbSQEipf9YQrIuzUFVYBWD5RNGW5FYI9rti9QJbBiD11NkB9h%2FYGZsSQtbeOMKnGwhWJ9Wbn5kwlpKHhw6BVvtx9wZtwVtDJOrRRCfe6G3xbB55Kz0Gd3OXhvAyt0Px9yQHLgIjMyKyOBkRTHQF3jSSOgQfcYXl5CJxYPW3c5Ei4Vd2V4XfYPBQ9ImLhkd2jlBhoIrpUL9WHNeKtsh02Efr2WESmadvdPGaW0d6noZvOf5NbO7EnhhACCo3%2FioS2hdm4Rqr%2BrXmftW2GAk0u60XN4apF984Oxg6xLlXis4Dk76I7M1BDmG%2F20DYfN85U%2B7bn83PjIDnh30%2BKibOHxMKjgMnu%2BEnoGwXx8D8gmGi%2FqEgdZmRm0U4KgnZQkDIZ%2BvWLQM%2FRQSQy5nMKAlXi5m8SwCf%2FEUD3PRhLYpz5fDPrkq%2Feq1FC8hBN3gMANJje4hNa4pbce9FIu0Q5Lf0wZgmsA4VD6yGSqjtjAE1Mzy%2FK9XfrhUM7ZgiXZzV7dkuv%2F%2FcV2S%2BxX2kCpm05hLMKw597TR0E%2Bzh4xh4cRM3ppKoyG%2BhWL4cOK0ymscnI1VH%2BQcYH8VOc2cbBYRNvyh4akqEVAuK3PF66rrIoONB4UNRr6NgignidrCSmXk3aQpyjLC0zDf%2FEGPoREHMZzAT8j0CrhNESR3Un5IfzohJzagp1aiwMpoYf4BSEQ6mWRkRvErhjann0w%2FzZ5m431%2Brg0VQIotvU2WK79fYvQ5ADm7qFHjCu1HLo8ejVH6JJe788bYXPXFQgILaUYMUP1IxFywJ6hdic9jTkM2TTeYGcbZf7q135VYguok3LYMfg91iQVzlJV4P0tGO7lppXcJPQQrLMUklCNkhyJrslfQxF30YY9QXOAsRfykIDDkhEWOP6gAKG%2F6krVgL2qpgpMC3NhYz5RJRQelmFs9AI0qoQeOUtujiyY6F%2BSG1uKVPVm2zYvc%2BQuh52bd%2FYZN3S5oCCfPP8ibrzvpRbDKMwmaTwiBUxhe8oSu7v%2FEdsxwvrbmaHVwNPmXQ4m3iAxy79blZnS4wxAAXGxpewDVIdPJ6yvnNnrwZ3QcYfJw46vHfdL5lZYD4iBMTE0CV5GgeYrjUm5lmkh9gUVJmCgPTMQ%2BNktEDLbyWr4Qdy53XBfNF2qMFvbibx0Dl68EqX0pNQV1Iz6Wrw1fFT68HRHLq%2ByI0x%2Fl8TAMogmwfygG5%2FVi9I5r90IAbz7A2Yf0yr2r1nIxJ02RlaCrKV1hGB6OZSRQCePlQWu2KLj5hnjjYEwtH%2FBIqKYU5mF1RhaTC862fstt3hQIfv1xaFAExjdS5im%2Brx4krLtC%2F3YPnVuLzgBgroGu5mkoFkl83jghsAj8Wb4Zdc%2BZeVfHbQ5L3z5IQAE2lEgV%2B3Yi2bJnZ5MTeVMGZvaA%2FKbz49KrkOmKYXxwNTH%2FE0aIfS4BkGMhLx7d9Len0tw%2FZ5zeC5e1HnLUPGAG%2FSLDalwRHG%2F5uTLVVVhqdn031gX3eUWfPJaTEHOKmAUObgqpWaaADJu7HlKAfvWRVIaTpWlH9nCgC7q3j5rSdRkRIOnO3ZAi6g28LvEoKeecd3b35nkDRYQS7vs0nxEaP%2FdgGoZDpIrbHJ%2BJYgvYw5w4428taYSM%2BnZn%2ByIsIbjnsj2Xq%2B4vfIfPTl0e1NDvEhAI1hgS7RvrlwZffFTU0yc7vK%2BywVlhp7u%2FqPO4DTCLBG0hXEK9CS2A7gg%2BjkmQb%2BzM5S%2BAGWUs0cSY9P6blnVq5g0rNO6MUOEGUCQO9Zyll8ZtN6W%2BtZjW4VgvpveSinRF3B86DjMHclO6Gb6fzt9%2B3bhkyM8k0kAhH4V5py0j7TDuBVKThcqew6Vcmv0xS08DdsLHj95V8agmJAedxeva8sSqX%2BOsCzYmXg3dkR3DHy6bm2YlIhRebpPZYzwkaR5%2B%2FVubpAhQCVWZIb%2BheZzPVuR6A0NzbPrfNah%2BkdcvVDDudQy%2BX7%2FCibN9EyDOw4pE5gu4U9kHSQg0Gf7gbzGT%2BsQFOEwPtRz1Qsf8YaOUTmR7KMHRNVqPLEvJVhArNzh0NToBJAVzLLuuyNnJ1EzqAn29F1ZPK%2BHHJ%2BfekjmyIN2KazYZMuiALjqzOg6brvYmNt%2BltWENZJOhJ3akBmzhTBckk32HIHjrZPYM4G%2B8Q82l332o9d6Sr6cIkgvWQQHuIBN3kEBpcjPqiE2CQdfc9KGgtNILL4aWL8cHwN2bfiQZzj9dcfOUYNBQH7ytCfhzxzuoYjjRVbgxqTPCfVik9R4QizYsRvsZVxocnlMpi21cPib5I0ZKwXJuqgpzHxpWe58ARxPQICFANM2oD1YXfE%2Bs%2BrXmdr9rrt%2F2DG%2FDaPsLmzS94fMdI6CX2Z8osvwouoL8uy57f8dv3%2FZz%2Bv0d%2B%2Fz2wfJv%2Bc2b5p%2BX%2FAQ%3D%3D%22%7D";case"c2-monitoring-alarm-platform-containers":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dXrHrqxKk%2B7TnOFp4c0Q771nhvfeFTx9w95%2FX%2BlK3dISq0gSKggiPxPUPzDzD8z%2Fhv4fCDiLdWum8R%2BY%2FQeCwP8C3u07WozZlDdj9XfYc%2Fl%2Fie8AzP8Dc%2F8A1D8wM%2FzKpi%2FeqfW07X%2BnqU1XMMjfCwzv6WVT5H%2BPQACE%2FQvA%2F0KEC4L%2FwBQCvxuQ%2BC8EA%2BO%2F85OqGP%2BXy%2Fwf0e3JfyL7u7%2Ffc%2FF3Py%2FOJiv%2BhPonTgj4%2FmAmb5JqTYZ3Z0yG%2F8xli7Pop%2FmNEQKce9uLYfszn3%2B32jQ2%2B7R%2BGfiGsGSY%2F4Hp9zPVJ%2Bt3GbNP9nL68%2FHvGcwXCDONe9KMb9B%2FA2v%2Bc%2F%2F9e0sZ8m8G%2FTv8vwv%2Fm3yX%2Bnf%2Bz4X%2Bzf6%2Fc2EO98E4JzdkOxHQOI1OZLCm74rddEcXy5B8xvJRHAa5a4fapkBehsU%2FkdDVQck8NfFCvWxQIM7v6IbwXN1I2HqVkc9MhW7uD%2FlOvTOVvLAc4B0vf8CRxMzmaY9MF6OSRK3eVATB%2FSVbc%2Fue%2FKaJ50sv7iOzjKIVU1hyYIq56wr8PRJycbqmdrZnznU8qgkdJh4bHA57ZdrIreTgcdxES%2FhOFZZ3c9ep5MGe8ZYg376RqLoFBjf0I%2Fwcj2syZONu09mD%2B%2BZWt%2F1u4VEUxBDb%2F94kaW6Pq69psdZ49A7Nvci8w%2Fi6%2FHAla9fsLSB%2Bh%2B7hC5tBVX4r%2BPFLhTIujfMjYQVo3r31SQmnLN%2FM0RJx7IfowDhsvAdOQDWAGr7THg%2BDTNY1wHFNqEDLA%2BIM10KxPrwNb9DscoLCM4TFrwy8I2tQeQDSbHLKYpPeiPhrVI%2FR%2BqH7Wwe0krwj4CAt3%2BxZ3XBX1dEdld5aoQ96GqM08n303XG17yZH1Prmo7u1vv%2B7Hi7s9pyOuwIDLhDjOD61L305Uyai9iALpv9yN4jve%2F99efUTzbS7oGFO%2B5wfbEGR6xYP41SPaZnvLNHFmCP9hFlOfnPzKr2Se1IxW1%2B%2FdJc7vdzwpOwe43uo2bemfVQTQP5mkk3lcEjmwltAuMlXk6QuQmpJTy8W1S3sB0DQOCyBtRimjZQqpS1tLfaEqVvbtVShIWEow7YiUQ4gdbUvFo7flcWTBVI4ut0oVjhRqFF5Y88FNk5awvQ0cILaRSE7jq7soFCYqViaj7WTi%2FuVcYV66RPQJsWAEEY4F6jmKeR8Oe1WILCy0znAcLZbZTPfQUKrbrfQdNCmlT2wveFdXL%2FhcYU4VIpshKLtsEFpfFNPg0hpJgAA2cWDjtGjxwZ%2FXNeRKmqoFsPVfBUHEhHaDU76IgX%2FM4smmlBrg4TgewLGVD327%2Fd%2BMr84MQHG63MZdPhXrUgJlxoc0F1l%2Bsv5Hv3iBUvFSOhwnL%2B6Zy9JyLhwZ89V6H%2FPWwN0LgCt7gynn6Vk22zDls8UNgZpYxu9I%2BukhC6wEifz%2B%2BX0dBUcXywtN4qrWUcKobPOUhcQOI7txt50O6iLgrIcATNTnSQ5NS5hbqXOYbTOsm4%2F56Z6%2Bk8ZCefj2UsBBNO7S0y2NMDRdgbnPiViQSuOBIYaO0S7qQt7U1yGjosoyVqL7xbOYk6gibJsQBDqU0GeVrGI7QNaw3rfIkBxy4qjCQtGkNGLaO45myTp3kaNhvWFd3UdIds2o8D6%2BQXcNqmy7OJ3uVr8ZrSuJcxON%2F29Ds1OemcQQVbfnPsXId4%2FplVlNlzGRJAb2Kn3kFB38IFxXEcEXJI9FXVdakz5bOaTcqIeSuS5F8zovohan9x8EBNEGVrQLwlIKaG%2B1AA1sx90s0MCpdYMf8A%2FIq40T3%2Bn0NK76RUfLH6%2BqHK88Q0yDENIIQhzi0FZFau5AC580AQbKB%2BCTiS21FCL3uJrCqY873frqOszzu8H9ZLpkclZxg6YcWikFd0%2Bns7jfvfGQe5YvzXzfn%2BL8saIMOWGXJMgFIjyHj6bU5N2tp6%2FcpdXt4vIi9zYM7dQl09Q3qm%2B0I4IfAivzdJ2rt95GnzhIIuTwEsgKc3EXyxRHo40UVAOgTslcWFPk5LLiP9JMH929tbIZzl%2F%2BI28l%2BCnwxRDkhihZFWM49YpdGqQxQxdvDkkNfmt%2B%2BGHhn9Mk%2Bky0K1%2F5fQxgnpcLZF%2BCyRBG3Z0%2BLLuHsk8ENj329neVHFTnKDM7%2Fce0O8BaXVL5mZoYZQdF2sA%2F7J82%2Bq5V8KfT9cioZcsWdQis%2Ba52we%2F%2FpLIZoApqaa9C4uzjZWQRCmwumnpCYlNQVnOQQ9fMuflEshKOKY%2BShpqmMO%2BOsKn6z1UfFRU5EyuNy5lPCdwPdrSV8Msl8U3%2FfQUy8uhsgnax9xi3zV9NovG9yzcd6J7zpZrZbLUMXMBdrUPXXi2iT6sPXABxsIJ4kVf26NQzjwg55%2F4XqLiPml00oN3dkD3Cv0%2BLy89N9RBDxmj6LmMWelYiS0sbtYccmzHGdKFfPM3axdBiQDGO917bsExATJpWkNco5%2BAnEXMG1SGTKJcIjEPHubPOwrELRIdU5UZS7Gay7o8y9TMzM7JJG2RGQnwPdpbZ5OjVhpz51XH%2Bu6RAVwHp4Y5ANTZOaHcJwvOlpjflXl6nbL2E0zbXqng6geWFwuJ65%2FiSYCUck6iyipT8iNMUZluCpTVl3a7CuYv3TT3FmioQJy3CDgh7Kh4FyXAydnkupg10dvtPK2qHVyL7h1rozf%2B2NnHsRmJKQcfauFomnJ4P7DCUN3g6h9XumncQ7sJt3SS3sx2c86FQWypS8%2FvEMwg3Cojsf2UbjANp6RQvhdXh1qmbWlO1f0lWQFlF2E9nJVE3vKxOVg5U4zeBH7EJCm52bkqyZzfEo1kmhVzPMBl0bBcjTxujifyLvbaQKXGHqk7L46tYkVPAR%2BkcJdyNwWVpN2EH%2F3rsl0rLx1sW%2BlcXs1AUy2FemHybEw8dotD7OfNHh4xJ5W8lpcRNQw2DfSjhSFB8L4vn8sKtitU5L4MSX2LWyD2AQPnT95Am77HSo8XR2pCt1HMC4BBSptndH8YqKegMJuUDtELcE1DOSjYH8Sm59BOXmpUP7FBO12wP%2FUknuUdFDjY422QUBAVYVLlbNGRSr3cNuKee9yWprZEXJKxMxXNE1pYchH7iRlqsFXFlgK78ZSLOZ3LLk62gu7Zn8YPB8ufTirZSlFt3ND9nVSPMnx5TWths1%2BxqDNOBTlmRl1ebeHGxDD3l6hi9OpPdhUjv2yqVGue6%2Bdo9WJaAJhK2mul06iWDwPqUvI56Lhc0FRQEWC0g%2FkezRqeNFGcaDdXZIU66EvSw8gXb3OUDCrn9iPyJVL4iwKcN5%2B8teRxxhoLX%2FjZtrMLiNjUqNYThFEATSUz6D9%2BzYnjl9gqZWMSRbF1gsji%2BYaW03NMzWhSsEXKko6cg34fOiWSH5RSnya1Qlo%2FdXIlSiz9nRtZWh4dvYhJm5YkwbU5i9EP4KSqwmiyvhnmOc89ZrC0q6QUMfnaYsqip6mNkA%2FqrFFAEhFTzSN4jky3Eyg9zhKWjS3pLF%2BE4b%2B0e9%2FFYXnBN0ZUJhRlS7YIK7uQCawcuMsc%2FDMtLPKVNDRfhycnoC44srIYoNx%2BdwGMKhuMm%2BmvmJ%2BXu68gTgm61%2BEVc9FzwmjYih%2BSBo32JP%2BSSP9KXx6JFid%2BHu5b9WldqEZM0OS7APXyAaPYv83OkX0OnLUohWsApuU%2FtTdhn2o3at7S3cEzZAngD2zr6FASrJq92CO72Kwe64cSph%2F4eQbF4U7MQoRMt%2BvCLzWJgDdKaRIdeSYW4CNLphahZIxJabq8jhlaXF%2BKop8w7BTki%2B7RmVqrBybfugxhs6xisbgCPB3kNhbgzpshFJ%2FdB5r1YUE06B9Nd5TIrbdHyIozF2s1uNJ6YPQn8b1LZwZVtUoUCCFLeEds4SETLhZD01gMtJ727PGmjyieDavzriMKdNVcaLvaFyC%2B9fflTlzUQguSELhJOAlD3lYS%2F1pmAZZBkA9xWFoIZd0Nix3xfo3KCJD3O%2FfWztkx8Qedtlzty4XfrhmBZD00Qi9uycOedIFrMU%2FecYOIw6%2Bew57R94SK0oz7vfqFhuL%2B1dNwNN68so%2FyBVBmpmR0YrygXHgGGvkDuMI1Qw8OzRn1x%2FLr5Z58U88IQAugVA8d3HhhUPFOSb%2BPhgvCVHSi10eyvnQ0hDIzzWjrxhCLrNRrirXRdrJ9fggLFssX4G8BgaMvjF6ilEg3zrCt%2F15NtZoVf90TGoUvxSAQADhnIPQXaiETIZaRbHjI8QRj0UoEKMytuKxWbjod1aI2BUwSUchrahkbbuQ6yqPI%2FPD%2B%2BJYpkkeaMlA2QMvdUMepI263%2FNZrGXzVeM%2FbhzrLp%2FKJEjR2tTFpd16Q5rQlM68%2B0cJ%2FIcv6wOWlNyHP0JHFu3ad9CB4ox0Zq1FGCCWrP5rN3AA3Clo%2BUYB4%2FQXNLiiAj7yuoR4E9ESauFzq0w1LEnHCHAY7ZdPtdAwswSQ37RDTQPrxDkrAZiVexBv8cDRzILUX%2BrUleI4LtzuFdGX8lj1rMJ337NB4fN%2F81RVcI4ryra5PnGRmUi6%2B17jSmb1yNTYO5YdO%2Betl6i42b6no25EH6J%2BBrnkHkgf1mVmf1cEY3SRdtaiw3sI2CfL1ECHkqI8LTi4Q1ww7i2wFLB91g2F3LTY1yzwlTn9%2Ftbv55sNqeFfo1QHkzVKxGJ47z9luRBh0kM8MZUD0ZpzQ%2BJiZzZUqtym2yuoMVnrmVE6HdirCzWS8WjLND1ZZHXTOvdcapr5EdxFXCNghP88NrnF6Lz1%2FBsyHEqDUIE1PeqcbzMKbEp4SeMsoZvY%2B7AeVjNHMzjo8QjRjzgF1SSNzHNmVxesXM30T9wI0eSY39kQuJqRyr65vthbmDI4HxNDNyMSkHe1hB5pzrnX5AGyp7lvO%2BreuqU0B40f1FxmfK8a0V%2FlkyHwoshHtGqm5r%2FdhiVrL%2BA9BtMY0KQQg0AQ8CODLCCR%2FJK90vdckQBVVcK4%2F%2BcSox2qjA40fEyJXOSc6rx5hstcf3qLTBTiPTYw9C%2B08BI%2B%2B%2Fargk1EBfwDTxa7hz7Ajq6pQBc1y9f4BJSu9Co2ZbizmZ5I%2FW9aJyl7eour26k4fr4pQG4SEhmi1kB2BW7g1tC3%2BCW7msDnPsXuu%2B5NkKTWUzdTXECklF7Ipkytf9yRarBpIK0vZL7GUNQfYw84QRqr59VCFfGKTMx9QMRNifr85Aqim9G4%2FvpBb4hXzSqIgjLImdJpdHutTH0fbo31Rr937EAj%2FLSGNrKsXCKXPi1B3QdLYjATF2wh85DjUzToXgqxtpwxdZEI3KT6zMC2BHfgDGY7Bg71XAooMYu9BF%2FQV1cmAGAtlYiE5XPa%2BLzlof1QWwZtT9E8TQFZ4DKZCuJoexKZv9tX6CmP1tmqxFEuk61oEhZwYdACZDANH7ktHBuC9%2FBAUoGtCjWood9KCzOINSxBe6ODwMS9f60Mn%2B9H66zhH%2B%2BN%2FrS1Ry%2B6SlklfcJVhGQov42T4p1Sw%2BRLMNl6MX1GsIuba4wf2p8KA%2Ba9Xxl8HQW4fm8BOhPEc2j4NWYsjYI7YioEDVMC15YD5h2Aq8Z0AUx8Sdyw63FjdWw3gGm9x%2BW7FHGatM%2FzNTE3tCKao2BCSFTYa36lqNGbQNl1SDf6r3w%2F83h35bwCAZILa%2BkFfUJd1dYHI637TYV2TjjQf3KW3Xm3XIp0U1vJQY0UWPsIOEalz0v6k1GceGyswSMfoX0vb9UuDNV8HaHo60ZkHaWNSN3rdzu9rFrQxgj0%2FfmsVmSOH9I8WqWmXV8MGbA0onpWiXc%2BhOWAym4K%2FeNTU%2BOstkRuaDXjv3OTaWffPEd7kg0PfulBEdn7muTl4VLXAbMtXVR73Jldk7Nq%2Fq8py6sXPllu%2FNJHy8wwGqRhoxlCz9VCHyeD5sJhaNRwgdizhbRAWF3aPnk7P40GpOtOp%2B%2FPsagovv9bttVMC4tU02dmEXNpZaXdemdZaz1N82Is%2BtnPKnucWFdigbQvyvDTBXVF0CUPthMI7%2BEkOYI4kA8vyFZbaFST%2F3lBpjpnlGDjURNKvBdwnIH8MBJmtlHYYyUAwvg3b6KexuQddAOVY6UGegl1ZQ2jLq%2Bv5%2FGLmTZH6DlavIJUx%2BsQHeaFPUjpwtQfE%2BxN%2BZzpq8zHEkRK7nOfK6xZqKTyZlqcRpT8x1G2jW2w1vwMzww8QSYF3dC2Zm%2BBcvm7Dz%2BYOZbnKsvFmQ1gsQh%2BAWy0l7CBYsZzbTneQ26TW2G7gyxdwmKVr8g613tF9bv8KD3666ki132vI1fJV6GU%2BO5fwtTM6U1HSmqWzknr9Z9%2FZ3DS%2FzF9PIznLk9Iryk3f3dcYwu6l6ImM2R38R%2Fs9iqHwhvHbnUeWsTCk13iCxYwO8%2FNYMBpAN9QXBQjQV8FcQp97y65%2Fz0HFi5W7%2BWITeyrzVyFgMfoSs0tdKKvi8%2BVpqp%2BteqCiOMkeLJ5%2B0N5%2BdRnKNhlB9mK4Hb94rc%2FFM2ewFcLAivGnS8pf7Z1ftlkRvwPzreCvb8OYmDDKvL6GASSpzw%2BNnuh7aULf8%2B%2BZvPoV4UCmDhq73uH%2BEcoBqxQahD%2BbXZNWE7gybLcWcvv2RDxWlFOrrlx3DIZttg3ia51gDd3WiNxDKb%2FRQHh2fWKhrMZKEq330%2B%2FyC7%2BhYAirMYzaBrVED6Is47WtPJHjAveglfWyCIXzCI%2BTikSQDjGwFi8pTYzzPpvSB5DsNFJMgVbimijUwAUv3nuLk2UK48F4aWStPP1RazoW94wdQB2i2GCGyCRruYgJcH6cxmoBUpPyk59l6g0K%2Fci%2BRH%2F6y3OI5pCQAm%2FlSMewOPpev%2BLx%2FuEEvFYdXuLLk%2BWEiTOuXqoFZ3mlRV5CooFALnRLFbdb5H%2B9CJTSmDs8AhgplhHZlknPQGPwAmlfOLb2llKo4yGhdGGNWENo5Y6jlBxg%2Bm%2BFLyvL3zuV6tsLxpHA0oR9oK%2B5MjMDfOq5VUKt1QEKoGjzUBnAUEf%2BdspkcTqYyebtUwjzTJtUGzn7HNyWNWVScEt8aMRZNUOm4o2NwQCNe8Yl1iavvPj810NVdIJnjXfmadKhFszYYV5bqtzTGZkdzrDthWzNhr7kr28FF3EwIig7FHuBm9Hj%2Fry3cITZXAKIZmsuKYPcTJ2LgUa47aZuejhlbo5mM6vhq7inF9nYf%2BV%2Fz3eQVKcI6qOYG1yenS1LqG7aVq6zW%2BiEuUEUwylErDdLHhXYUudZOtWRXpFetZvAjajZrXyv8HjhiqLUrnZeC%2FXXLMjLrHg8XioZub7Wk5ugXWP%2BWM3qvB%2FKfL7me2P7%2FlmD11wfxm1vHtxWi2uMMeeFsvXN9s79dEc1%2F5lWVX6t%2Fc0a5Uz8fW58GIox33JziHHE30Y7TEvx4sIaQYUaEdQePlgQzrkOEVX7%2BsoCZqKw9R4eKuK24F89B30EJtTt8NP564fs1aa5lQIb28t3E6KIH%2FEyUoqj6nY00erV0ss7nSCid8xkHki752vRg60eS5MJaHIei6EoBc8T0apnb7QaX6N7kOD6mdggsr5ClubGHrVn%2FKlrgai8ia%2Bl78Fnt28SzqI4QqLXBg5xWPijPRACO5Vf0zjwwZLLMVunj8i2trSZIToyPJsGD0VZe0T8Wnc8R6O2IJzT8%2BmLlzYcMHxaZIEcEfrupEtaVmn3w2jbJ%2BpuxfiVJ9QHZ7G5RqL3Yvp1oqK%2FvMvy19FaZMA3O%2Bl8iZ9WPbsIBi0RbiDaKRQa61NZuixsa%2BF5gWypU4%2FiN43En5znRkVNNuRdwlpF8n7iheVMBxsHpBfLieElRtbLpJ89ewKbosWoMmKn8bdAYc%2FcFEYEtlOydGRFLRZB4w4gQKDH1Z4fCQzY1%2BCfh%2BNh1YWw83vIFUPrPiH%2Bi0pdF0zDJOCvTY9YvfpX6HgPLtbd8z5s%2FPe1hokZfqTBlzPdCon%2B66z%2F4rY2zVGQyPTXcZwnM%2BHLjMLCnVSCDNxb7kOc66X1gg7Rgiaw9dnYSN8TJatIivyPKo2lBk4hF9SvZ91LXzrLF30AJnB8X5JxvvId5%2FfgjXwvuRAIt73TkfIiXPEIHtc%2BnwVpEYjeinGgqYLA8rWDtg%2FYTT1Z4TUoo5babePWqusltpwaKkEzUuH1TSaoLgGpYCULzrKF3EviA33heHUpKTSrlmBhOnbnk%2BA0n0nikQOqOFNv4a0WE5oketUMVxFMh06wuo6eb8o6XQ7uNeMUa7eJIPqz1GyQESUpeQVLhQnuSOsQtecnCVJwO9z6PCp3zBqEItdHLcyX23AslsEnH5hd%2Bjh7stqNIAgeb%2FwGzmr%2BxmiwWsUzz2xWLoSEpNEFSsyG7ingucxL98vOj3T5e3lazf75wLzpKsgiaSz51O1EWAIGYjCT64mQ3hxLJaeMGAUfXR8IL3IfJteqGZT9C2mABsRpdDt41m6o3HfilbkJ1fueqsfHLphHMBtxGLOZPzOHxFWH5H2CBLs6Z0tDqNF6zR1Gqcqz1o7kqw5ZX4nHiPja6yzOCx%2BqjtJttESiu79jxqJEYSKQ172w27UgV7FtZBdYTkrOrj0QycRnjHC6LqbYsIZZ%2BXwSwcuTIcSXG3XSowrZShkkQ3EJHEdAZfL6%2BCti0igDrcphFEpeP0OlLh0XJZS5X4eGvYm%2B%2FpQiFw%2BbehfL11kYtzBHWqdkNM20JrhhdoLkblu%2Fs%2BhuPC%2BTb6S7YQdu28IMPgTgJzrg8puTZOG5w47wEqqQurSjgetyzd1FacPS1xHE59GQdz%2FzpsjVNqwi8jAZX6ZoYNp7ueXT%2B6F1KvC0I1xpagmwhL%2BQo6F5lNuvwcHZgmEaX1PLWNr5TpDsoY%2FP5CRIvf4KO2%2Bofo7FnU%2BecDd2VrrFJDmwTtU7D33yt0SFtPMYD%2FOXA46AlKm9XbkIDPSROAnSjf6ZObYdEZz3B8UfXC0oUhh21Ke2R1dw6iR9%2Bsv4w5zfu8uDxCwW9w8a2a9iDTZyc1Mi31cQFooRqLD1LgBdO4R4Bgm14ueheoGiq%2FewKPFp%2BXCmMGvKH7GzK2EWGrE9PIqdlMEtyFbBIXDxJxcLYobddasT4aDB1%2BrREss2DCyOM0saLLUmxXR5TUTkpAnmM%2FhgcMGoeGnkrbCtwFgue%2FMNzx8mCDbeFfAS9dvobR%2BXIsPq59yqWupvaeVJDtz%2BYnShT0hHphBe4%2FQnxMYA8o9CXT1MMd0t18UdBQ71oXO2%2B9klI4ZwI38XU0lE7naUpNe2KVUyxOXrb3%2BEmkPPIz7oJ8R%2F4I%2Bi%2F%2BdHPv%2FzE6V36D%2B%2FUvoz8t8%3D%22%7D";case"c2-field-devices":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dVbHsuO6Ef2auxwXc1gyk2LOpHbMOWd%2BvcmZcT0v7JIEFdAHjdNApx%2BY%2BYH5s2t%2FIGDP5qUa%2Bh%2BY%2FYEg8F%2FAMz6rWZ8MadUXf5Zdh%2F9FvAKY%2F4G5H4D6gZnuzKs2e6DlsKx%2FYErVZAzyR0H3bM%2BrLP0jgQAI%2BwXAvyDCAcEfmELgZwCJfyEY9P2Dj4qs%2Fx9q%2Fg%2B7NfrL7M98vcbszzzN9irJflP9zRMC3i%2FMpFVUzFH3TPqo%2B4vlq6xNnxX7WtasW35j%2BWdkf%2Bv4Z85A%2F734Tqq%2FZrUP0wT5lUC%2F8lfXr%2FQfEMzh3vhNyAXiDATs2ds6AMMl3FL2xnVsum%2F1AYBMtuSKMzTTTiab2DaluQvpmuV5VFu3OQ5NkdAUl%2FidSuoLJYJyvecsXlFfTor1BhqjnX8g%2BjCEh%2Bik65XCuJnWaO4x2lbA6XihEYy0a4s%2BTrSlz1%2BvjdNjOmVnqk4aqCZgk7F5T8c1yNwJhKCksPBSGfrb2N29U8J4LcZd2qpHPYWWqy6ksCGrq5Uc%2BIK6QHdXK1kqnx33E0D9tGT8OAk%2FY9sk%2BnfXhzMr6lYIgpdRS4%2BgVb6vvK3gW01QONZ5FTNiSfP4YLslflPI15r0uXKaAtdjRQAHVkZxbDLA8fZmFhuNgM8M9XwN6zxvaFALIGOPIhlJDw7qygqHNlYcoj%2B6fVRmFd9U8ujCdMfc5HJ0zi%2FQysxri8RhtIOiuC1zD4CgONA%2BIECZUGn58HWROLrRXh%2FGPAZp7NGAmCf79QVXAWkxgmTPlmbFmuoFmHz6MxaD9giDixU4BDaiZtvIz%2Bohg6oO62fAEHf6SHI8qFeEnJ15qVg7yo2Lu5GwfeNebWB1tJnm0gkBCfBYtqWPYyk2oGEj5qNDYAueq7AebXjy8rH9%2BmF86hw0FuDs5sI4yC28TzX2UFhgNfScfPVgbxc9%2B1zk2axgFoYwBHBjv4x8cCKDwHTs0Qu%2Bvqj130WVNfNKzeLwTmudUbdBH2%2F9joRjLpHayAieKOZ92cJn1juXgLznGGsDKEejqOChVU4uONELDTPmh5YLuaFjERTJgWFjN%2BrXj1N3duIJxSadHyJc6KTCMs8PSU1g2uOw9Mh9XhV3KLrvVVU1G0QFuUpkbCQZGrP4bhFwWG0k7Sr6EQfqJLqmsfye5efclZXtcx3HXR2mKyEgLxveGIIV0w2gNNWXsR5gwj0fagZPOFaSaxVNKP8QJ7rpTdMYQy8oBorztEpYLNK9rrdGNxkP8eGoNczqWgdAwcenhRyT28OK47sAsJBGqK%2F1Btyx7dyn0iuvL6tJY4jNGhCoRkezTRztgilLWJpMOR%2Bkembeky74JH8OwTffk6DFvYSJdHQe0zsS8gKE3R4ZOk5AJ6xy%2BEVLCrpMIbXzRb1FQDh3LDLHWFb1hq4E2pdZc%2BTLIvpQ06b3BH4iTXcqaAJ%2FXXfB3Y4%2FLhdY3Fh4Io5u05cvDo%2BnmTVNuT42hzhHT6zk%2BDogBX4dSYU%2FOZFRKSdVNX2EgLB3Ns%2BmZi3nxSEDX8WVAMUXXyWhr6qzk8oyHP0AlNekBk6NkkVilex34Wy4snnckZb7SxrZQi8wUaAbH9DG3n52nPw%2BTM8%2FlzcCKq1R4O%2ByHBb1vM8Nhko7ntHSAaWTjAJcHrZYIogyg3FAVHOHj9myxW8fm52iJD3ptFvzdA5x5iDOhWXgFAazLyiFhZBc9niCx1Yrm0Sh63bNIMnHwtSgRP250uFUhMXPkXIWGKrNmwTEHmtoQFjTQpt0IXLp8boUC260L4eg3YahUHC4h6ehNyRqiXLugHqOYAbwK2ke0n3PfOnu1dCJOEEeaG4A9ox1FEzQy6ISi%2BGBflqso6B9rstVeZZ%2F4%2FX5wbsp%2B9qYJA2vhbGhhbjTJRK8HvXNlJvl4kjycauP7k%2FyvmERj2G6xp1d5WsCtydkV1f2wAS%2B5Koot3BGGD1WhNYkuEl8rQTn0klxN0KC7Lrsmvtz73QSL10%2B5AsHltzwfY1egM1RpsatfY4mDDjttKe4hJ%2BHXV%2FDfrJISSHPlApJt7LYW8ZEqtX07GSWfRwBhb4XQisDTZ0RzDcr8pMEXUaQQEgMhH0YR7vmJ1jilESzHq%2FfiJTey%2BJzlNsl2Adh5j0l8khleUHsFX5tOOuT4fiCj4%2BHWteI1GKBRxs0Ym7V2mbuJ2u4ueRYTEtHOPlg4ANEeotSpLozweMp6DRk%2BG2PkMPXNecLi3XpA44%2BmOZAPgyZSfppK3iLDE47wxdcO1dlaRXcU8Iib3ijRcpitBbxI%2B%2F15fVuahWRW0tJFBtu3HDUKCUfHA%2FtU9atPPJGyUU3ozgHJdVYNUHb%2BtN48GkxnhHN3SVUwfAZtLyD6seRyQa9nLAkYXGfgKZ%2By%2FQEX7SELdF2pEIprofuH4K4bvssT9VdvKXlnmw%2BJEOkGm3g6JVQ6DGsbu22WRy07lFl9Qjvu3NvcjbCeOEB2cuXXZD7agSCPdivVcXY8rFFaKFuxAK2fi9O1bboCO%2BCJ8Skf7aGF6GsFUCeLaLMTaQXZF7ZIQ0mRz4G9LZ2LLglpkFyFAPmDhIQY1FaceUfeKcCuKM%2FKqSN8DLvPWjXRoPDnaBJjX3F8tKDUWMzlV45%2FORJLG%2BwSb2uOeuzK77UUNsSQ0bR73fNkeiu%2BtvCsbVvM6RRH2jWt2yXH5kPE%2BSwGpj7Poz%2F1GTasEPrmlr8TXA9lyQCP57XJ85qnIqbYqkCqE%2FZlJdErObYXMZNUkCtsRLJqoSmeeeGTDFi%2B5b6RXTZCNVsMYIZCvfTZC%2FaEDf3%2Bbk3%2FpqNZtQ2Y%2BaR9%2Bm%2F0BbeQfbmv3ZHwtpJDtLhI%2Fi7d%2Bqb4YziCAxuI3wHUC3zOwxOiVxLzb7GZrpoeAK1Gkn8FNKOGbsVWt2PK6BoIzfXIc6oc581yNCi%2FoT3tYXV4pRoaJ%2FQnL%2FZnK8Iq2IrCOMBbn%2FCnTd1cSCn8HQC17jzE4uOgPC7KcqfQH17qZvkv5vewvCNvwSIt3t%2F%2FfNvS%2Fyfhv5Z%2BtvT%2F175Nw%3D%3D%22%7D";case"c2-field-protocol-gateways":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dVfXruQ4Dv2a%2B9gDp3J4LOec85tzztlfv3b3DHYX2AUKKpGiZEoiz6F%2BYOoHZs%2Bu%2FYGAPZuXauh%2FYPoHgsC%2FgKd9tFmfDGnVF3%2FUjs3%2Bwt8BmP2BmR%2Fg%2BwNT3ZlXbfaYlsOy%2FjGTqyajkD8LdM%2F0vMrSPyMQAKG%2FAPgXhNsg%2BAN%2FEfhpQPwvBIXDP%2FZRkfX%2FY5n%2F490a%2Fe3ZH3m9xuyPnGZ7lWS%2FXf3tJwS8P5hKq6iYo%2B4R%2Bqj725atsjZ9NNa1rFm3%2FLZln5aL1uyIrn8rKOi%2FtK9U%2Fb2x9vE1QX4l0K%2F8Xe3XOA%2FrkAztr%2BI%2FzGEGc88w%2BYFIBWJ2BJzp2zwd3cGdIr2Zz6r0nKqnvSgALsVyQuaNQnTlPfh16ITkPFW2t6xKho3rri8d0SbsPn7Vy%2Bbs1abraXzHj9xOrSAnuHiD0SOt8rVLfT1QSadzEzML4WjCAosY2OMFaVUmm%2B40S5vSEUcTXsaby4lWa7mCNzgeCLugI6zr1F5raqb9wGSI9cyTcPtZGshtdVmxwIGZ%2FJW%2FYrl6CbxlatyyNDPb%2FG7FmgZoTdHkkPMZAt9Gp2f6YztJ28QnZ1cGc%2F3dzABsLm0lMbnCMMIjZnWGucdwPKG%2B9pC8s%2BwpemKU7L5iCss%2B8XQhRfBgDa5ILckA9VtDc7Am40QU%2FnO55KRLk7kRrRuJFI5G63RkBePryFeUTez8JljHytEwFAajN2T4uQmiAgauFLgar5p9%2BMQLU%2BarLVLvzaut2%2BxGqDuJmlNTZaZUGCPHp%2BedXqWMSxDG%2BqNn9t3ivPRsjhx8KI6sxtI01IUzYYoqa%2FkO6sc%2FaeW8tX4%2BubIS5jb0iioYAGg8n48sNg3YmfFE17tPsogoNDGNJsqgfJ1UwhKTco9Fcpi5Tgg5FKk8qvk8pkgKDHY4qa0SiJ2fjYPJj06x0ldtZsWlVFcDOqivl2jmMp%2FbNulmNAEsKN0maBHNMxK0hjA%2FUuFAVi%2BsmOSLOW0rIosnlsgeVG2b8V1H5XxH5JYoYbmW46jyYuRoX0ZHus%2Fhcb4K7MY0nwmtJRVH0GKNoFCr7tSZsdyOHMAXC5rkcU9seYCo1JqNwSeC8pWlZdY1axRwqcJ5y0aCisLbiJxvoTjL5FJw0C1PJ6s5lmGC0MgG4crI0UDKs4Uuug8GKlaSNCm%2FK2o06yIFwMRe4pYgVMy1UmaSOL%2FQW%2B5I5CRcx%2BmrZW6UlgGZKEtxuGKBuiWPynxnav5VvS4w0O80t0tU3UXUtV2GwbXt2PJomLOGJ9ndad98arQq%2FtxqLOulj5HCd0wVBIplx3R9gtwnrrtPSG7I8mbuUvCi5MykWX2ikg2bb0ffxpVL0ScVIIIyIDZyQu8%2BU3HR2DB3FhC3tU%2Fq8Deduxotnul1HRYSWtmTzCQeFTjjdfJtlPwNwQiR4%2Bqj1shjysE32bldJ15YYmGCZ6ee10RhdhJZuo2RttdjMBe%2FpuJOBS8RA7hLDlkzZKtPFOOi2oTR53Ir%2FxCAAjCUXvbNSPug5xqblfegH1l%2F1wUuwC9WUY9xXvuwC%2FmoEfEQrxWePfhBp7vmA3Qs434mquYel8hyBLWBdgj2kKXaT5tB0xWMZ8GYbSnObACd6uKCSP2v0fIh64XzUtsA06hnmTLcmJwQb4iJoqI7siwjJTSUVKusqPV6GHA1SEs20G%2FGZvmjDPSSQcMkhmujJ6UhoUQ0tyMPfZBcOXintivtBI6brWSqfmjee0q8s4hSyZXzl%2Bibe451g10UD%2FSfIT%2F8DVQkwBph0CGHFX5UIysNX1ES%2BsUEjX9GI4LJIeIeOYxxN%2B0FeXLPkXPmKO4hFFaoPhv9LsJ90kKdNI5zyOH6xDq88IvdefmEaxX%2BelhN0YOUI84mhee6KZr4INvrDImqyX0cUn5NtA4j78VuOEeTuQtkWPH6SSqzjics7EpRuZqKQjppfgCK6xUymH%2BdLV7d03CIesHLGtTSu0gcji53LJASi2R6NhWMiSEaX0wVjwv1SL2YCtfY6uUOrN29ufysPPM1HWNbZjKDWpslaX90Kc8RLmqR9ohDi1nikgyjmvfcqlQ02oiRDsJlW1lEvUqfawk5bT4Y2vRBddZUwnlATPE6p%2BoRIwbbnj8WMi%2FNLp%2BeOAzHCA8CFucGaKSeR2dNGw4YmxPoNC9%2BOJxc4Le4rmoyXUrohla6fntAnsBDibBMfmmlPg31rH%2FozpKPW3hjUsWbbJJU6s0jdBKREtu2SQXpUJLFmh6MRw2rLpCD5jfVnFNDFuSTInQux9PAOCHckb6yFzLn9mVhdgmXqHU5SxiJYfvmCgyPlHovj1Qy9GiRNMB8ThA6FetLY9k4X%2BR5HwSDS2qlbQyVVBhK2z0omW04jkSFvuhQiR%2B24k0Un76sLiX%2B1zndqFpQVR7ymp1zdTiAO%2FUfbuACoVfX2cGABCZZp1MO7Wy3q%2FWej4UjPdr7KnP0Jwa77zluhMayFuznz6BlROEbNNm9czEVf6HLxuKFipw3lsPAnj6CQKfli%2FzQw2fV%2FPEJHniXnSYZe7EGQvokKjYnHakVyd8bL9B4fqdDYo%2B%2F10vfVRkhBjzyxxdrEr61OBPJtxWHxmSVFQr7rowmsxB0LaEPzkdGul3tYEqmUbRaKEDB1iBBeZLPbAUaqpVT%2BvIJOKVkXqN1PR94GXvdUxwExtQVygvIruny0EposiJSqvTo9cbNrcdbVht%2FVwM8IymcCbUC2ooC2uD%2BIbtgNam8eGamsbolO6JXkZHyJ5Sk44NzlE92SAKMcidZbKos7Fn1U2thgm0YlMgnvab2MPbUBiTVA0w6a7bO2yHtSDD3HCWbb2L2npWNr6xo5j71VkuzTQx4wDU1LnVMPsU3JMHxTgqnjlMYEUs0u6IfOIORQ6Fl32VgZjOIfXvqQGMK%2FQtLFt2BynhVNrLarVZgGNsIicC1ZXb1NLBXKwW4x1WrpKaPvlFN0vqkAOdC5ipvn%2BxzsLbPhQSxKPz3iGgQ50qANXM9DRuXnM8uKod4Kq%2Fl%2BxytOXcgAtg1sfPpsC2dWnCT%2FGyCekicaLWkTGKmm%2Fck%2FlR00h63biQIcqGRCkHn4EpNtecgcLhZR2EI7E6BfDgenOD5Hsjh4Ts4xviV3Zy7xieFJAuKvSDszOp%2BaoLM7g8uiiyHPoxWsb6FZYIXL0iKnME4D4v5qsmqIovkTEAIoCR29UTzUZr6OSQ%2BZmtm0k%2FLgo4IhIerHaZitHDSFMaCFCdwmpiEAPCt5psGTgqDiSCI69NHvIJtjQIgKS2Fkxe%2FFGqRteRMBaxjgO9FXwJXjJAhsUPJ0tIvdmYw15FC9ybUpmM4GJVWQ1TrsVPjYbOIqUWh%2F%2BHr%2FGJ4LfvoNtxVnGMp6c7IPGvPWllg47p8YwHQwLeqPomc8TgQsLgu16SLpmcB164N4Io%2BKFTwC2B5J%2FMBvFpQz6T9Hru6%2FTvj4yCAqHqJkWlFNTReJqjDltx8agQsUPnYITexO1btknMOYO%2Bknea%2BzrAdc7oU5IFNUhXDx1b%2BLfg23CqRJRs3jcnalVRacQrz%2ByA5yIdpVJweeiPIy3pjYTKvRt6fzqdcjBXrdi2Qd0a%2FH44q5C%2FtvNieTPGnVRLl6XbtDj%2F7xpCuGQSnOOuPxte8qWyIf4Zl8tTOsTUIruW0%2BooiljeUiQWwZFuIQYTC0dJ5uJpslrpPs%2BtrJXffmtpkb5rBZLEHQR9s8ng%2FccJeTMFeNQhtbpP6rvq62K7bi7ASsQJ1HIRy2W8J5bfmvQCnHzTDSXvVkDbluYVj7T4PAd%2F0u1gAv0f%2FJT51sLLxpnI8BGY352YXp7TCPpMVzIkCvLqd3w03gmEqqT%2FuJLdZPYRGgjAVdpNhWAasCzy5eKp1uAfIk3NaW6Y2t1ZfjQVlaNb84Cd74iAoSRmVvaGQGyd6tHEArIgL26hgnSs%2BIcvtk%2FrnlDy3jZH98zUlaIeiBzBurlzZO%2FAXS4a8IrhpBtrSwOuqc1cIEr87AYXfsmyXaP3CtHwiiKd6YYmXFh9egF98%2Budh%2FM%2Bz%2Fr2yPy%2F735p%2FAQ%3D%3D%22%7D";default:throw new Error("Unknown viewId: "+e)}}const t5=Object.freeze(Object.defineProperty({__proto__:null,drawioEditUrl:e5},Symbol.toStringTag,{value:"Module"}));function n5(e){switch(e){case"index":return`@startuml
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
skinparam person<<Operator>>{
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
skinparam person<<Dispatcher>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
rectangle "==Demo Stand Current Monitored Scope\\n<size:10>[KNX monitored signals / current read scope]</size>\\n\\nТекущий набор сигналов demo-стенда, которые читает Edge Telemetry Agent." <<DemoStandCurrentMonitoredScope>> as DemoStandCurrentMonitoredScope
rectangle "==Полевые устройства и контроллеры\\n<size:10>[Field devices / PLC / RTU]</size>\\n\\nДатчики, актуаторы, PLC, RTU и локальные системы автоматизации на объекте." <<FieldDevices>> as FieldDevices
person "==Сервисный инженер\\n\\nНастраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы." <<ServiceEngineer>> as ServiceEngineer
person "==Оператор\\n\\nРаботает с текущим состоянием объекта, live-панелями и событиями через центральную платформу мониторинга." <<Operator>> as Operator
rectangle "==Протокольные шлюзы и SCADA-контроллеры\\n<size:10>[KNX / Modbus / OPC UA / SCADA]</size>\\n\\nТочки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы." <<FieldProtocolGateways>> as FieldProtocolGateways
rectangle "==Edge Telemetry Agent\\n<size:10>[Edge collector / normalization / buffering / delivery]</size>\\n\\nУниверсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий." <<EdgeTelemetryAgent>> as EdgeTelemetryAgent
rectangle "==Monitoring & Alarm Platform\\n<size:10>[Cloud monitoring platform / alarm engine / operator UI]</size>\\n\\nЦентральная система в облаке/интернете для приема событий, хранения телеметрии, визуализации, alarm-логики и маршрутизации уведомлений." <<MonitoringAlarmPlatform>> as MonitoringAlarmPlatform
rectangle "==Каналы уведомлений\\n<size:10>[Email / SMS / Push / Webhook]</size>\\n\\nEmail, SMS, push, webhook и другие внешние облачные каналы доставки тревог и служебных уведомлений." <<NotificationChannels>> as NotificationChannels
person "==Диспетчер\\n\\nКонтролирует alarm, уведомления и диспетчерские панели через центральную платформу мониторинга." <<Dispatcher>> as Dispatcher

DemoStandCurrentMonitoredScope .[#8D8D8D,thickness=2].> EdgeTelemetryAgent : <color:#8D8D8D>[...]
FieldDevices .[#8D8D8D,thickness=2].> FieldProtocolGateways : <color:#8D8D8D>[...]
NotificationChannels .[#8D8D8D,thickness=2].> Dispatcher : <color:#8D8D8D>Доставляют уведомления по alarm и служебные уведомления
MonitoringAlarmPlatform .[#8D8D8D,thickness=2].> NotificationChannels : <color:#8D8D8D>Маршрутизирует уведомления и эскалации
FieldProtocolGateways .[#8D8D8D,thickness=2].> EdgeTelemetryAgent : <color:#8D8D8D>[...]
ServiceEngineer .[#15803d,thickness=2].> EdgeTelemetryAgent : <color:#15803d>Настраивает адаптеры, модель сигналов, polling и доставку
ServiceEngineer .[#15803d,thickness=2].> MonitoringAlarmPlatform : <color:#15803d>Настраивает правила alarm, получателей и панели мониторинга
Operator .[#15803d,thickness=2].> MonitoringAlarmPlatform : <color:#15803d>Работает с панелями мониторинга, событиями и alarm
Dispatcher .[#15803d,thickness=2].> MonitoringAlarmPlatform : <color:#15803d>Работает с alarm, уведомлениями и диспетчерскими сценариями
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
skinparam person<<Operator>>{
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
skinparam person<<Dispatcher>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
rectangle "==Полевые устройства и контроллеры\\n<size:10>[Field devices / PLC / RTU]</size>\\n\\nДатчики, актуаторы, PLC, RTU и локальные системы автоматизации на объекте." <<FieldDevices>> as FieldDevices
person "==Сервисный инженер\\n\\nНастраивает источники данных, схему сигналов, правила доставки и эксплуатационные параметры edge-агента и центральной платформы." <<ServiceEngineer>> as ServiceEngineer
person "==Оператор\\n\\nРаботает с текущим состоянием объекта, live-панелями и событиями через центральную платформу мониторинга." <<Operator>> as Operator
rectangle "==Протокольные шлюзы и SCADA-контроллеры\\n<size:10>[KNX / Modbus / OPC UA / SCADA]</size>\\n\\nТочки подключения к технологическим данным через KNX, Modbus, OPC UA и другие southbound-протоколы." <<FieldProtocolGateways>> as FieldProtocolGateways
rectangle "==Edge Telemetry Agent\\n<size:10>[Edge collector / normalization / buffering / delivery]</size>\\n\\nУниверсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий." <<EdgeTelemetryAgent>> as EdgeTelemetryAgent
rectangle "==Monitoring & Alarm Platform\\n<size:10>[Cloud monitoring platform / alarm engine / operator UI]</size>\\n\\nЦентральная система в облаке/интернете для приема событий, хранения телеметрии, визуализации, alarm-логики и маршрутизации уведомлений." <<MonitoringAlarmPlatform>> as MonitoringAlarmPlatform
rectangle "==Каналы уведомлений\\n<size:10>[Email / SMS / Push / Webhook]</size>\\n\\nEmail, SMS, push, webhook и другие внешние облачные каналы доставки тревог и служебных уведомлений." <<NotificationChannels>> as NotificationChannels
person "==Диспетчер\\n\\nКонтролирует alarm, уведомления и диспетчерские панели через центральную платформу мониторинга." <<Dispatcher>> as Dispatcher

FieldDevices .[#8D8D8D,thickness=2].> FieldProtocolGateways : <color:#8D8D8D>[...]
FieldProtocolGateways .[#8D8D8D,thickness=2].> EdgeTelemetryAgent : <color:#8D8D8D>[...]
EdgeTelemetryAgent .[#8D8D8D,thickness=2].> MonitoringAlarmPlatform : <color:#8D8D8D>Публикует telemetry events и service topics через MQTT
MonitoringAlarmPlatform .[#8D8D8D,thickness=2].> NotificationChannels : <color:#8D8D8D>Маршрутизирует уведомления и эскалации
ServiceEngineer .[#15803d,thickness=2].> EdgeTelemetryAgent : <color:#15803d>Настраивает адаптеры, модель сигналов, polling и доставку
ServiceEngineer .[#15803d,thickness=2].> MonitoringAlarmPlatform : <color:#15803d>Настраивает правила alarm, получателей и панели мониторинга
Operator .[#15803d,thickness=2].> MonitoringAlarmPlatform : <color:#15803d>Работает с панелями мониторинга, событиями и alarm
NotificationChannels .[#8D8D8D,thickness=2].> Dispatcher : <color:#8D8D8D>Доставляют уведомления по alarm и служебные уведомления
Dispatcher .[#15803d,thickness=2].> MonitoringAlarmPlatform : <color:#15803d>Работает с alarm, уведомлениями и диспетчерскими сценариями
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
skinparam person<<Operator>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam person<<Dispatcher>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<EdgeTelemetryAgent>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<MonitoringAlarmPlatformPlatformFrontend>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<MonitoringAlarmPlatformGrafana>>{
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
skinparam rectangle<<MonitoringAlarmPlatformKeycloak>>{
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
person "==Оператор\\n\\nРаботает с текущим состоянием объекта, live-панелями и событиями через центральную платформу мониторинга." <<Operator>> as Operator
person "==Диспетчер\\n\\nКонтролирует alarm, уведомления и диспетчерские панели через центральную платформу мониторинга." <<Dispatcher>> as Dispatcher
rectangle "==Edge Telemetry Agent\\n<size:10>[Edge collector / normalization / buffering / delivery]</size>\\n\\nУниверсальная edge-система, разворачиваемая на объекте рядом с полевыми протоколами и отвечающая за сбор данных, нормализацию, фильтрацию, буферизацию и доставку событий." <<EdgeTelemetryAgent>> as EdgeTelemetryAgent
rectangle "Monitoring & Alarm Platform" <<MonitoringAlarmPlatform>> as MonitoringAlarmPlatform {
  skinparam RectangleBorderColor<<MonitoringAlarmPlatform>> #3b82f6
  skinparam RectangleFontColor<<MonitoringAlarmPlatform>> #3b82f6
  skinparam RectangleBorderStyle<<MonitoringAlarmPlatform>> dashed

  rectangle "==Platform Frontend\\n<size:10>[Browser / SPA]</size>\\n\\nBrowser-based frontend платформы: пользовательский web-интерфейс для операторов и диспетчеров, маршруты UI, навигация по alarm и доступ к dashboards." <<MonitoringAlarmPlatformPlatformFrontend>> as MonitoringAlarmPlatformPlatformFrontend
  rectangle "==Grafana\\n<size:10>[Grafana OSS / grafana-mqtt-datasource]</size>\\n\\nСлой визуализации Monitoring & Alarm Platform: live-панели, инженерные dashboards и операторские представления. В текущей реализации подключается к MQTT Ingestion Gateway через grafana-mqtt-datasource." <<MonitoringAlarmPlatformGrafana>> as MonitoringAlarmPlatformGrafana
  rectangle "==Platform API\\n<size:10>[HTTP API / backend service]</size>\\n\\nBackend API для состояния alarm, истории событий, конфигурации правил и политик уведомлений." <<MonitoringAlarmPlatformPlatformApi>> as MonitoringAlarmPlatformPlatformApi
  rectangle "==MQTT Ingestion Gateway\\n<size:10>[MQTT broker / ingestion service]</size>\\n\\nПринимает MQTT telemetry events и service topics от edge-агентов, восстанавливает routing context из topic, валидирует payload и передает canonical events на хранение и в Alarm Rule Engine." <<MonitoringAlarmPlatformMqttIngestionGateway>> as MonitoringAlarmPlatformMqttIngestionGateway
  rectangle "==Keycloak\\n<size:10>[Keycloak / OIDC / OAuth 2.0]</size>\\n\\nСервис identity and access management: realms, пользователи, роли, клиенты и выпуск токенов для Platform Frontend и Platform API." <<MonitoringAlarmPlatformKeycloak>> as MonitoringAlarmPlatformKeycloak
  rectangle "==Alarm Rule Engine\\n<size:10>[Rule engine / stream processor]</size>\\n\\nОбрабатывает входящие события по правилам, ведет жизненный цикл alarm и инициирует уведомления и эскалации." <<MonitoringAlarmPlatformAlarmRuleEngine>> as MonitoringAlarmPlatformAlarmRuleEngine
  rectangle "==Notification Service\\n<size:10>[Worker / notification gateway]</size>\\n\\nМаршрутизирует уведомления во внешние каналы по alarm-политикам и правилам эскалации." <<MonitoringAlarmPlatformNotificationService>> as MonitoringAlarmPlatformNotificationService
  database "==Telemetry Store\\n<size:10>[Time-series DB / relational storage]</size>\\n\\nХранит телеметрию, служебные события, историю alarm и данные для мониторинговых и операторских запросов." <<MonitoringAlarmPlatformTelemetryStore>> as MonitoringAlarmPlatformTelemetryStore
}
rectangle "==Каналы уведомлений\\n<size:10>[Email / SMS / Push / Webhook]</size>\\n\\nEmail, SMS, push, webhook и другие внешние облачные каналы доставки тревог и служебных уведомлений." <<NotificationChannels>> as NotificationChannels

ServiceEngineer .[#15803d,thickness=2].> MonitoringAlarmPlatformGrafana : <color:#15803d>Настраивает dashboards и проверяет поток телеметрии
Operator .[#15803d,thickness=2].> MonitoringAlarmPlatformPlatformFrontend : <color:#15803d>Работает с пользовательским web-интерфейсом платформы
Dispatcher .[#15803d,thickness=2].> MonitoringAlarmPlatformPlatformFrontend : <color:#15803d>Работает с пользовательским web-интерфейсом платформы
EdgeTelemetryAgent .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformMqttIngestionGateway : <color:#8D8D8D>Публикует telemetry events и service topics по MQTT 5.0
MonitoringAlarmPlatformAlarmRuleEngine .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformNotificationService : <color:#8D8D8D>Запускает доставку уведомлений
MonitoringAlarmPlatformAlarmRuleEngine .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformTelemetryStore : <color:#8D8D8D>Читает контекст и записывает состояние и историю alarm
MonitoringAlarmPlatformMqttIngestionGateway .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformAlarmRuleEngine : <color:#8D8D8D>Передает нормализованные события в Alarm Rule Engine
MonitoringAlarmPlatformPlatformApi .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformAlarmRuleEngine : <color:#8D8D8D>Читает активные alarm и управляет конфигурацией правил в Alarm Rule Engine
MonitoringAlarmPlatformGrafana .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformMqttIngestionGateway : <color:#8D8D8D>Подписывается на live MQTT telemetry и service topics
MonitoringAlarmPlatformPlatformFrontend .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformGrafana : <color:#8D8D8D>Открывает и встраивает dashboards и live-панели
MonitoringAlarmPlatformPlatformApi .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformKeycloak : <color:#8D8D8D>Проверяет токены, роли и client configuration
MonitoringAlarmPlatformPlatformFrontend .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformKeycloak : <color:#8D8D8D>Аутентифицирует пользователя и получает OIDC tokens
MonitoringAlarmPlatformMqttIngestionGateway .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformTelemetryStore : <color:#8D8D8D>Сохраняет canonical events и служебные события
MonitoringAlarmPlatformPlatformApi .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformTelemetryStore : <color:#8D8D8D>Читает телеметрию, историю и временные линии alarm
MonitoringAlarmPlatformPlatformFrontend .[#8D8D8D,thickness=2].> MonitoringAlarmPlatformPlatformApi : <color:#8D8D8D>Запрашивает состояние alarm, историю событий и прикладные данные платформы
MonitoringAlarmPlatformNotificationService .[#8D8D8D,thickness=2].> NotificationChannels : <color:#8D8D8D>Отправляет email, SMS, push и webhook-уведомления
ServiceEngineer .[#15803d,thickness=2].> EdgeTelemetryAgent : <color:#15803d>Настраивает адаптеры, модель сигналов, polling и доставку
NotificationChannels .[#8D8D8D,thickness=2].> Dispatcher : <color:#8D8D8D>Доставляют уведомления по alarm и служебные уведомления
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
skinparam rectangle<<FieldDevicesKnxSwitch>>{
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
  rectangle "==knx-switch\\n<size:10>[KNX]</size>\\n\\nВыключатель" <<FieldDevicesKnxSwitch>> as FieldDevicesKnxSwitch
}
rectangle "==KNX Segment\\n<size:10>[KNX / KNXnet-IP]</size>" <<FieldProtocolGatewaysKnxRouter>> as FieldProtocolGatewaysKnxRouter

FieldDevicesKnxTemperatureSensor .[#8D8D8D,thickness=2].> FieldProtocolGatewaysKnxRouter : <color:#8D8D8D>Передают телеграммы, состояния и команды в KNX-сегменте
FieldDevicesKnxSwitch .[#8D8D8D,thickness=2].> FieldProtocolGatewaysKnxRouter : <color:#8D8D8D>Передает телеграммы состояния и управления в KNX-сегменте
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
skinparam rectangle<<FieldDevicesKnxSwitch>>{
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
rectangle "==knx-temperature-sensor\\n<size:10>[KNX]</size>\\n\\nДатчик температуры" <<FieldDevicesKnxTemperatureSensor>> as FieldDevicesKnxTemperatureSensor
rectangle "==knx-switch\\n<size:10>[KNX]</size>\\n\\nВыключатель" <<FieldDevicesKnxSwitch>> as FieldDevicesKnxSwitch
rectangle "Протокольные шлюзы и SCADA-контроллеры" <<FieldProtocolGateways>> as FieldProtocolGateways {
  skinparam RectangleBorderColor<<FieldProtocolGateways>> #0284c7
  skinparam RectangleFontColor<<FieldProtocolGateways>> #0284c7
  skinparam RectangleBorderStyle<<FieldProtocolGateways>> dashed

  rectangle "==KNX Segment\\n<size:10>[KNX / KNXnet-IP]</size>" <<FieldProtocolGatewaysKnxRouter>> as FieldProtocolGatewaysKnxRouter
  rectangle "==Modbus Gateway\\n<size:10>[Modbus TCP / Modbus RTU]</size>" <<FieldProtocolGatewaysModbusGateway>> as FieldProtocolGatewaysModbusGateway
  rectangle "==OPC UA Server\\n<size:10>[OPC UA]</size>" <<FieldProtocolGatewaysOpcUaGateway>> as FieldProtocolGatewaysOpcUaGateway
}
rectangle "==Collector Runtime\\n<size:10>[Python service]</size>\\n\\nОсновной runtime edge-агента: southbound-адаптеры, сбор данных, нормализация, фильтрация изменений и постановка событий в outbox." <<EdgeTelemetryAgentCollectorRuntime>> as EdgeTelemetryAgentCollectorRuntime

FieldDevicesKnxTemperatureSensor .[#8D8D8D,thickness=2].> FieldProtocolGatewaysKnxRouter : <color:#8D8D8D>Передают телеграммы, состояния и команды в KNX-сегменте
FieldDevicesKnxSwitch .[#8D8D8D,thickness=2].> FieldProtocolGatewaysKnxRouter : <color:#8D8D8D>Передает телеграммы состояния и управления в KNX-сегменте
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
  Operator@{ icon: "fa:user", shape: rounded, label: "Оператор" }
  Field-protocol-gateways@{ shape: rectangle, label: "Протокольные шлюзы и SCADA-контроллеры" }
  Edge-telemetry-agent@{ shape: rectangle, label: "Edge Telemetry Agent" }
  Monitoring-alarm-platform@{ shape: rectangle, label: "Monitoring & Alarm Platform" }
  Notification-channels@{ shape: rectangle, label: "Каналы уведомлений" }
  Dispatcher@{ icon: "fa:user", shape: rounded, label: "Диспетчер" }
  Demo-stand-current-monitored-scope -. "\`[...]\`" .-> Edge-telemetry-agent
  Field-devices -. "\`[...]\`" .-> Field-protocol-gateways
  Notification-channels -. "\`Доставляют уведомления по alarm и служебные уведомления\`" .-> Dispatcher
  Monitoring-alarm-platform -. "\`Маршрутизирует уведомления и эскалации\`" .-> Notification-channels
  Field-protocol-gateways -. "\`[...]\`" .-> Edge-telemetry-agent
  Service-engineer -. "\`Настраивает адаптеры, модель сигналов, polling и доставку\`" .-> Edge-telemetry-agent
  Service-engineer -. "\`Настраивает правила alarm, получателей и панели мониторинга\`" .-> Monitoring-alarm-platform
  Operator -. "\`Работает с панелями мониторинга, событиями и alarm\`" .-> Monitoring-alarm-platform
  Dispatcher -. "\`Работает с alarm, уведомлениями и диспетчерскими сценариями\`" .-> Monitoring-alarm-platform
  Edge-telemetry-agent -. "\`Публикует telemetry events и service topics через MQTT\`" .-> Monitoring-alarm-platform
`;case"c1-system-context":return`---
title: "Edge Telemetry Agent + Monitoring & Alarm Platform - C1 System Context"
---
graph TB
  Field-devices@{ shape: rectangle, label: "Полевые устройства и контроллеры" }
  Service-engineer@{ icon: "fa:user", shape: rounded, label: "Сервисный инженер" }
  Operator@{ icon: "fa:user", shape: rounded, label: "Оператор" }
  Field-protocol-gateways@{ shape: rectangle, label: "Протокольные шлюзы и SCADA-контроллеры" }
  Edge-telemetry-agent@{ shape: rectangle, label: "Edge Telemetry Agent" }
  Monitoring-alarm-platform@{ shape: rectangle, label: "Monitoring & Alarm Platform" }
  Notification-channels@{ shape: rectangle, label: "Каналы уведомлений" }
  Dispatcher@{ icon: "fa:user", shape: rounded, label: "Диспетчер" }
  Field-devices -. "\`[...]\`" .-> Field-protocol-gateways
  Field-protocol-gateways -. "\`[...]\`" .-> Edge-telemetry-agent
  Edge-telemetry-agent -. "\`Публикует telemetry events и service topics через MQTT\`" .-> Monitoring-alarm-platform
  Monitoring-alarm-platform -. "\`Маршрутизирует уведомления и эскалации\`" .-> Notification-channels
  Service-engineer -. "\`Настраивает адаптеры, модель сигналов, polling и доставку\`" .-> Edge-telemetry-agent
  Service-engineer -. "\`Настраивает правила alarm, получателей и панели мониторинга\`" .-> Monitoring-alarm-platform
  Operator -. "\`Работает с панелями мониторинга, событиями и alarm\`" .-> Monitoring-alarm-platform
  Notification-channels -. "\`Доставляют уведомления по alarm и служебные уведомления\`" .-> Dispatcher
  Dispatcher -. "\`Работает с alarm, уведомлениями и диспетчерскими сценариями\`" .-> Monitoring-alarm-platform
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
`;case"c2-monitoring-alarm-platform-containers":return'---\ntitle: "C2 Containers"\n---\ngraph TB\n  Service-engineer@{ icon: "fa:user", shape: rounded, label: "Сервисный инженер" }\n  Operator@{ icon: "fa:user", shape: rounded, label: "Оператор" }\n  Dispatcher@{ icon: "fa:user", shape: rounded, label: "Диспетчер" }\n  Edge-telemetry-agent@{ shape: rectangle, label: "Edge Telemetry Agent" }\n  subgraph Monitoring-alarm-platform["`Monitoring & Alarm Platform`"]\n    Monitoring-alarm-platform.Platform-frontend@{ shape: rounded, label: "Platform Frontend" }\n    Monitoring-alarm-platform.Grafana@{ shape: rectangle, label: "Grafana" }\n    Monitoring-alarm-platform.Platform-api@{ shape: rectangle, label: "Platform API" }\n    Monitoring-alarm-platform.Mqtt-ingestion-gateway@{ shape: rectangle, label: "MQTT Ingestion Gateway" }\n    Monitoring-alarm-platform.Keycloak@{ shape: rectangle, label: "Keycloak" }\n    Monitoring-alarm-platform.Alarm-rule-engine@{ shape: rectangle, label: "Alarm Rule Engine" }\n    Monitoring-alarm-platform.Notification-service@{ shape: rectangle, label: "Notification Service" }\n    Monitoring-alarm-platform.Telemetry-store@{ shape: disk, label: "Telemetry Store" }\n  end\n  Notification-channels@{ shape: rectangle, label: "Каналы уведомлений" }\n  Service-engineer -. "`Настраивает dashboards и проверяет поток телеметрии`" .-> Monitoring-alarm-platform.Grafana\n  Operator -. "`Работает с пользовательским web-интерфейсом платформы`" .-> Monitoring-alarm-platform.Platform-frontend\n  Dispatcher -. "`Работает с пользовательским web-интерфейсом платформы`" .-> Monitoring-alarm-platform.Platform-frontend\n  Edge-telemetry-agent -. "`Публикует telemetry events и service topics по MQTT 5.0`" .-> Monitoring-alarm-platform.Mqtt-ingestion-gateway\n  Monitoring-alarm-platform.Alarm-rule-engine -. "`Запускает доставку уведомлений`" .-> Monitoring-alarm-platform.Notification-service\n  Monitoring-alarm-platform.Alarm-rule-engine -. "`Читает контекст и записывает состояние и историю alarm`" .-> Monitoring-alarm-platform.Telemetry-store\n  Monitoring-alarm-platform.Mqtt-ingestion-gateway -. "`Передает нормализованные события в Alarm Rule Engine`" .-> Monitoring-alarm-platform.Alarm-rule-engine\n  Monitoring-alarm-platform.Platform-api -. "`Читает активные alarm и управляет конфигурацией правил в Alarm Rule Engine`" .-> Monitoring-alarm-platform.Alarm-rule-engine\n  Monitoring-alarm-platform.Grafana -. "`Подписывается на live MQTT telemetry и service topics`" .-> Monitoring-alarm-platform.Mqtt-ingestion-gateway\n  Monitoring-alarm-platform.Platform-frontend -. "`Открывает и встраивает dashboards и live-панели`" .-> Monitoring-alarm-platform.Grafana\n  Monitoring-alarm-platform.Platform-api -. "`Проверяет токены, роли и client configuration`" .-> Monitoring-alarm-platform.Keycloak\n  Monitoring-alarm-platform.Platform-frontend -. "`Аутентифицирует пользователя и получает OIDC tokens`" .-> Monitoring-alarm-platform.Keycloak\n  Monitoring-alarm-platform.Mqtt-ingestion-gateway -. "`Сохраняет canonical events и служебные события`" .-> Monitoring-alarm-platform.Telemetry-store\n  Monitoring-alarm-platform.Platform-api -. "`Читает телеметрию, историю и временные линии alarm`" .-> Monitoring-alarm-platform.Telemetry-store\n  Monitoring-alarm-platform.Platform-frontend -. "`Запрашивает состояние alarm, историю событий и прикладные данные платформы`" .-> Monitoring-alarm-platform.Platform-api\n  Monitoring-alarm-platform.Notification-service -. "`Отправляет email, SMS, push и webhook-уведомления`" .-> Notification-channels\n  Service-engineer -. "`Настраивает адаптеры, модель сигналов, polling и доставку`" .-> Edge-telemetry-agent\n  Notification-channels -. "`Доставляют уведомления по alarm и служебные уведомления`" .-> Dispatcher\n';case"c2-field-devices":return`---
title: "C2 Devices"
---
graph TB
  subgraph Field-devices["\`Полевые устройства и контроллеры\`"]
    Field-devices.Knx-temperature-sensor@{ shape: rectangle, label: "knx-temperature-sensor" }
    Field-devices.Knx-switch@{ shape: rectangle, label: "knx-switch" }
  end
  Field-protocol-gatewaysKnx-router@{ shape: rectangle, label: "KNX Segment" }
  Field-devices.Knx-temperature-sensor -. "\`Передают телеграммы, состояния и команды в KNX-сегменте\`" .-> Field-protocol-gatewaysKnx-router
  Field-devices.Knx-switch -. "\`Передает телеграммы состояния и управления в KNX-сегменте\`" .-> Field-protocol-gatewaysKnx-router
`;case"c2-field-protocol-gateways":return`---
title: "C2 Gateways"
---
graph TB
  Field-devicesKnx-temperature-sensor@{ shape: rectangle, label: "knx-temperature-sensor" }
  Field-devicesKnx-switch@{ shape: rectangle, label: "knx-switch" }
  subgraph Field-protocol-gateways["\`Протокольные шлюзы и SCADA-контроллеры\`"]
    Field-protocol-gateways.Knx-router@{ shape: rectangle, label: "KNX Segment" }
    Field-protocol-gateways.Modbus-gateway@{ shape: rectangle, label: "Modbus Gateway" }
    Field-protocol-gateways.Opc-ua-gateway@{ shape: rectangle, label: "OPC UA Server" }
  end
  Edge-telemetry-agentCollector-runtime@{ shape: rectangle, label: "Collector Runtime" }
  Field-devicesKnx-temperature-sensor -. "\`Передают телеграммы, состояния и команды в KNX-сегменте\`" .-> Field-protocol-gateways.Knx-router
  Field-devicesKnx-switch -. "\`Передает телеграммы состояния и управления в KNX-сегменте\`" .-> Field-protocol-gateways.Knx-router
  Field-protocol-gateways.Knx-router -. "\`Экспонирует group address и телеграммы через KNX/IP\`" .-> Edge-telemetry-agentCollector-runtime
  Field-protocol-gateways.Modbus-gateway -. "\`Экспонирует registers, coils и дискретные значения через Modbus\`" .-> Edge-telemetry-agentCollector-runtime
  Field-protocol-gateways.Opc-ua-gateway -. "\`Экспонирует nodes, subscriptions и значения через OPC UA\`" .-> Edge-telemetry-agentCollector-runtime
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
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
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
    operator [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Оператор</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Работает с текущим состоянием объекта,<BR/>live-панелями и событиями через центральную<BR/>платформу мониторинга.</FONT></TD></TR></TABLE>>,
        likec4_id=operator,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    operator -> "monitoring-alarm-platform" [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Работает с панелями мониторинга,<BR/>событиями и alarm</FONT></TD></TR></TABLE>>,
        likec4_id="5jh72i",
        minlen=1,
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
    dispatcher [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Диспетчер</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Контролирует alarm, уведомления и<BR/>диспетчерские панели через центральную<BR/>платформу мониторинга.</FONT></TD></TR></TABLE>>,
        likec4_id=dispatcher,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    "notification-channels" -> dispatcher [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Доставляют уведомления по alarm и<BR/>служебные уведомления</FONT></TD></TR></TABLE>>,
        likec4_id=lkrv31,
        style=dashed];
    dispatcher -> "monitoring-alarm-platform" [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Работает с alarm, уведомлениями и<BR/>диспетчерскими сценариями</FONT></TD></TR></TABLE>>,
        likec4_id="1srhl8t",
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
            margin=40,
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
        "knx-switch" [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">knx-switch</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Выключатель</FONT></TD></TR></TABLE>>,
            likec4_id="field-devices.knx-switch",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    "knx-router" [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">KNX Segment</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX / KNXnet-IP</FONT></TD></TR></TABLE>>,
        likec4_id="field-protocol-gateways.knx-router",
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    "knx-temperature-sensor" -> "knx-router" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Передают телеграммы, состояния и команды<BR/>в KNX-сегменте</FONT></TD></TR></TABLE>>,
        likec4_id="1c8khzh",
        minlen=1,
        style=dashed];
    "knx-switch" -> "knx-router" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Передает телеграммы состояния и<BR/>управления в KNX-сегменте</FONT></TD></TR></TABLE>>,
        likec4_id=nh3syw,
        minlen=1,
        style=dashed];
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
    "knx-temperature-sensor" [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">knx-temperature-sensor</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Датчик температуры</FONT></TD></TR></TABLE>>,
        likec4_id="field-devices.knx-temperature-sensor",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    "knx-temperature-sensor" -> "knx-router" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Передают телеграммы, состояния и команды<BR/>в KNX-сегменте</FONT></TD></TR></TABLE>>,
        likec4_id="1c8khzh",
        minlen=1,
        style=dashed];
    "knx-switch" [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">knx-switch</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">KNX</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Выключатель</FONT></TD></TR></TABLE>>,
        likec4_id="field-devices.knx-switch",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    "knx-switch" -> "knx-router" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Передает телеграммы состояния и<BR/>управления в KNX-сегменте</FONT></TD></TR></TABLE>>,
        likec4_id=nh3syw,
        minlen=1,
        style=dashed];
    "collector-runtime" [color="#7E451D",
        fillcolor="#A35829",
        fontcolor="#FFE0C2",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Collector Runtime</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Python service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Основной runtime edge-агента:<BR/>southbound-адаптеры, сбор данных,<BR/>нормализация, фильтрация изменений и<BR/>постановка событий в outbox.</FONT></TD></TR></TABLE>>,
        likec4_id="edge-telemetry-agent.collector-runtime",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
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
        "platform-frontend" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Platform Frontend</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Browser / SPA</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Browser-based frontend платформы:<BR/>пользовательский web-интерфейс для операторов<BR/>и диспетчеров, маршруты UI, навигация по<BR/>alarm и доступ к dashboards.</FONT></TD></TR></TABLE>>,
            likec4_id="monitoring-alarm-platform.platform-frontend",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        grafana [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Grafana</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Grafana OSS / grafana-mqtt-datasource</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Слой визуализации Monitoring &amp; Alarm<BR/>Platform: live-панели, инженерные dashboards<BR/>и операторские представления. В текущей<BR/>реализации подключается к MQTT Ingestion<BR/>Gateway через grafana-mqtt-datasource.</FONT></TD></TR></TABLE>>,
            likec4_id="monitoring-alarm-platform.grafana",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        "platform-api" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Platform API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">HTTP API / backend service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Backend API для состояния alarm, истории<BR/>событий, конфигурации правил и политик<BR/>уведомлений.</FONT></TD></TR></TABLE>>,
            likec4_id="monitoring-alarm-platform.platform-api",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        "mqtt-ingestion-gateway" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">MQTT Ingestion Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">MQTT broker / ingestion service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Принимает MQTT telemetry events и service<BR/>topics от edge-агентов, восстанавливает<BR/>routing context из topic, валидирует payload<BR/>и передает canonical events на хранение и в<BR/>Alarm Rule Engine.</FONT></TD></TR></TABLE>>,
            likec4_id="monitoring-alarm-platform.mqtt-ingestion-gateway",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        keycloak [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Keycloak</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Keycloak / OIDC / OAuth 2.0</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Сервис identity and access management:<BR/>realms, пользователи, роли, клиенты и выпуск<BR/>токенов для Platform Frontend и Platform API.</FONT></TD></TR></TABLE>>,
            likec4_id="monitoring-alarm-platform.keycloak",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        "alarm-rule-engine" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Alarm Rule Engine</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Rule engine / stream processor</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Обрабатывает входящие события по правилам,<BR/>ведет жизненный цикл alarm и инициирует<BR/>уведомления и эскалации.</FONT></TD></TR></TABLE>>,
            likec4_id="monitoring-alarm-platform.alarm-rule-engine",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        "notification-service" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Notification Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Worker / notification gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Маршрутизирует уведомления во внешние каналы<BR/>по alarm-политикам и правилам эскалации.</FONT></TD></TR></TABLE>>,
            likec4_id="monitoring-alarm-platform.notification-service",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        "telemetry-store" [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
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
        operator [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Оператор</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Работает с текущим состоянием объекта,<BR/>live-панелями и событиями через центральную<BR/>платформу мониторинга.</FONT></TD></TR></TABLE>>,
            likec4_id=operator,
            likec4_level=0,
            margin="0.223,0.223",
            width=4.445];
        dispatcher [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Диспетчер</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Контролирует alarm, уведомления и<BR/>диспетчерские панели через центральную<BR/>платформу мониторинга.</FONT></TD></TR></TABLE>>,
            likec4_id=dispatcher,
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
    "service-engineer" -> "edge-telemetry-agent" [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Настраивает адаптеры, модель сигналов,<BR/>polling и доставку</FONT></TD></TR></TABLE>>,
        likec4_id=cw5zhy,
        style=solid,
        weight=2];
    "service-engineer" -> grafana [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Настраивает dashboards и проверяет поток<BR/>телеметрии</FONT></TD></TR></TABLE>>,
        likec4_id="16gquoh",
        style=solid];
    operator -> "platform-frontend" [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Работает с пользовательским<BR/>web-интерфейсом платформы</FONT></TD></TR></TABLE>>,
        likec4_id=vzh35k,
        minlen=1,
        style=solid];
    dispatcher -> "platform-frontend" [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Работает с пользовательским<BR/>web-интерфейсом платформы</FONT></TD></TR></TABLE>>,
        likec4_id=gmnun,
        style=solid];
    "edge-telemetry-agent" -> "mqtt-ingestion-gateway" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Публикует telemetry events и service<BR/>topics по MQTT 5.0</FONT></TD></TR></TABLE>>,
        likec4_id="1pslsyn",
        style=dashed];
    "platform-frontend" -> grafana [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Открывает и встраивает dashboards и<BR/>live-панели</FONT></TD></TR></TABLE>>,
        likec4_id=ilgv8q,
        style=dashed,
        weight=2];
    "platform-frontend" -> "platform-api" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Запрашивает состояние alarm, историю<BR/>событий и прикладные данные платформы</FONT></TD></TR></TABLE>>,
        likec4_id=si1f30,
        style=dashed,
        weight=2];
    "platform-frontend" -> keycloak [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Аутентифицирует пользователя и получает<BR/>OIDC tokens</FONT></TD></TR></TABLE>>,
        likec4_id="1bq67sb",
        style=dashed,
        weight=2];
    grafana -> "mqtt-ingestion-gateway" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Подписывается на live MQTT telemetry и<BR/>service topics</FONT></TD></TR></TABLE>>,
        likec4_id=alolq0,
        style=dashed,
        weight=2];
    "platform-api" -> keycloak [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Проверяет токены, роли и client<BR/>configuration</FONT></TD></TR></TABLE>>,
        likec4_id="1hjhlx9",
        style=dashed];
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
        style=dashed,
        weight=2];
    "mqtt-ingestion-gateway" -> "telemetry-store" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Сохраняет canonical events и служебные<BR/>события</FONT></TD></TR></TABLE>>,
        likec4_id="1jz0qh",
        style=dashed,
        weight=2];
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
    "notification-channels" -> dispatcher [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Доставляют уведомления по alarm и<BR/>служебные уведомления</FONT></TD></TR></TABLE>>,
        likec4_id=lkrv31,
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
        operator [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Оператор</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Работает с текущим состоянием объекта,<BR/>live-панелями и событиями через центральную<BR/>платформу мониторинга.</FONT></TD></TR></TABLE>>,
            likec4_id=operator,
            likec4_level=0,
            margin="0.223,0.223",
            width=4.445];
        dispatcher [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Диспетчер</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Контролирует alarm, уведомления и<BR/>диспетчерские панели через центральную<BR/>платформу мониторинга.</FONT></TD></TR></TABLE>>,
            likec4_id=dispatcher,
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
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
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
    operator -> "monitoring-alarm-platform" [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Работает с панелями мониторинга,<BR/>событиями и alarm</FONT></TD></TR></TABLE>>,
        likec4_id="5jh72i",
        minlen=1,
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
    "notification-channels" -> dispatcher [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Доставляют уведомления по alarm и<BR/>служебные уведомления</FONT></TD></TR></TABLE>>,
        likec4_id=lkrv31,
        style=dashed];
    dispatcher -> "monitoring-alarm-platform" [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Работает с alarm, уведомлениями и<BR/>диспетчерскими сценариями</FONT></TD></TR></TABLE>>,
        likec4_id="1srhl8t",
        style=solid];
}
`;default:throw new Error("Unknown viewId: "+e)}}function a5(e){switch(e){case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.3 (0)
 -->
<!-- Pages: 1 -->
<svg width="2001pt" height="1874pt"
 viewBox="0.00 0.00 2001.00 1874.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1859.45)">
<!-- demo&#45;stand&#45;current&#45;monitored&#45;scope -->
<g id="node1" class="node">
<title>demo&#45;stand&#45;current&#45;monitored&#45;scope</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1004.4,-1844.4 624.11,-1844.4 624.11,-1664.4 1004.4,-1664.4 1004.4,-1844.4"/>
<text xml:space="preserve" text-anchor="start" x="644.17" y="-1776.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">Demo Stand Current Monitored Scope</text>
<text xml:space="preserve" text-anchor="start" x="688.53" y="-1755.2" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX monitored signals / current read scope</text>
<text xml:space="preserve" text-anchor="start" x="645.05" y="-1733.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">Текущий набор сигналов demo&#45;стенда, которые</text>
<text xml:space="preserve" text-anchor="start" x="710.46" y="-1715.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">читает Edge Telemetry Agent.</text>
</g>
<!-- edge&#45;telemetry&#45;agent -->
<g id="node2" class="node">
<title>edge&#45;telemetry&#45;agent</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1037.61,-1182 654.91,-1182 654.91,-1002 1037.61,-1002 1037.61,-1182"/>
<text xml:space="preserve" text-anchor="start" x="746.76" y="-1131.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">Edge Telemetry Agent</text>
<text xml:space="preserve" text-anchor="start" x="726.67" y="-1110.8" font-family="Arial" font-size="13.00" fill="#f9b27c">Edge collector / normalization / buffering /</text>
<text xml:space="preserve" text-anchor="start" x="674.96" y="-1089.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Универсальная edge&#45;система, разворачиваемая</text>
<text xml:space="preserve" text-anchor="start" x="687.89" y="-1071.2" font-family="Arial" font-size="15.00" fill="#f9b27c">на объекте рядом с полевыми протоколами и</text>
<text xml:space="preserve" text-anchor="start" x="692.06" y="-1053.2" font-family="Arial" font-size="15.00" fill="#f9b27c">отвечающая за сбор данных, нормализацию,</text>
<text xml:space="preserve" text-anchor="start" x="679.56" y="-1035.2" font-family="Arial" font-size="15.00" fill="#f9b27c">фильтрацию, буферизацию и доставку событий.</text>
</g>
<!-- field&#45;devices -->
<g id="node3" class="node">
<title>field&#45;devices</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1493.79,-1844.4 1114.72,-1844.4 1114.72,-1664.4 1493.79,-1664.4 1493.79,-1844.4"/>
<text xml:space="preserve" text-anchor="start" x="1134.78" y="-1776.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">Полевые устройства и контроллеры</text>
<text xml:space="preserve" text-anchor="start" x="1229.49" y="-1755.2" font-family="Arial" font-size="13.00" fill="#b6ecf7">Field devices / PLC / RTU</text>
<text xml:space="preserve" text-anchor="start" x="1149.23" y="-1733.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">Датчики, актуаторы, PLC, RTU и локальные</text>
<text xml:space="preserve" text-anchor="start" x="1175.07" y="-1715.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">системы автоматизации на объекте.</text>
</g>
<!-- field&#45;protocol&#45;gateways -->
<g id="node4" class="node">
<title>field&#45;protocol&#45;gateways</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1500.57,-1521.6 1045.94,-1521.6 1045.94,-1341.6 1500.57,-1341.6 1500.57,-1521.6"/>
<text xml:space="preserve" text-anchor="start" x="1066" y="-1462.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">Протокольные шлюзы и SCADA&#45;контроллеры</text>
<text xml:space="preserve" text-anchor="start" x="1173.2" y="-1441.4" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX / Modbus / OPC UA / SCADA</text>
<text xml:space="preserve" text-anchor="start" x="1106.56" y="-1419.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">Точки подключения к технологическим данным</text>
<text xml:space="preserve" text-anchor="start" x="1137.8" y="-1401.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">через KNX, Modbus, OPC UA и другие</text>
<text xml:space="preserve" text-anchor="start" x="1191.97" y="-1383.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">southbound&#45;протоколы.</text>
</g>
<!-- service&#45;engineer -->
<g id="node5" class="node">
<title>service&#45;engineer</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="398.52,-1844.4 0,-1844.4 0,-1664.4 398.52,-1664.4 398.52,-1844.4"/>
<text xml:space="preserve" text-anchor="start" x="107.57" y="-1775.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Сервисный инженер</text>
<text xml:space="preserve" text-anchor="start" x="24.22" y="-1752.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">Настраивает источники данных, схему сигналов,</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-1734.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">правила доставки и эксплуатационные параметры</text>
<text xml:space="preserve" text-anchor="start" x="59.22" y="-1716.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">edge&#45;агента и центральной платформы.</text>
</g>
<!-- monitoring&#45;alarm&#45;platform -->
<g id="node6" class="node">
<title>monitoring&#45;alarm&#45;platform</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1030.93,-842.4 661.59,-842.4 661.59,-662.4 1030.93,-662.4 1030.93,-842.4"/>
<text xml:space="preserve" text-anchor="start" x="721.22" y="-792.2" font-family="Arial" font-size="20.00" fill="#ffe0c2">Monitoring &amp; Alarm Platform</text>
<text xml:space="preserve" text-anchor="start" x="725.23" y="-771.2" font-family="Arial" font-size="13.00" fill="#f9b27c">Cloud monitoring platform / alarm engine /</text>
<text xml:space="preserve" text-anchor="start" x="681.64" y="-749.6" font-family="Arial" font-size="15.00" fill="#f9b27c">Центральная система в облаке/интернете для</text>
<text xml:space="preserve" text-anchor="start" x="706.65" y="-731.6" font-family="Arial" font-size="15.00" fill="#f9b27c">приема событий, хранения телеметрии,</text>
<text xml:space="preserve" text-anchor="start" x="683.31" y="-713.6" font-family="Arial" font-size="15.00" fill="#f9b27c">визуализации, alarm&#45;логики и маршрутизации</text>
<text xml:space="preserve" text-anchor="start" x="798.33" y="-695.6" font-family="Arial" font-size="15.00" fill="#f9b27c">уведомлений.</text>
</g>
<!-- operator -->
<g id="node7" class="node">
<title>operator</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1971.09,-1844.4 1603.42,-1844.4 1603.42,-1664.4 1971.09,-1664.4 1971.09,-1844.4"/>
<text xml:space="preserve" text-anchor="start" x="1742.8" y="-1775.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Оператор</text>
<text xml:space="preserve" text-anchor="start" x="1639.31" y="-1752.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">Работает с текущим состоянием объекта,</text>
<text xml:space="preserve" text-anchor="start" x="1623.48" y="-1734.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">live&#45;панелями и событиями через центральную</text>
<text xml:space="preserve" text-anchor="start" x="1699.74" y="-1716.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">платформу мониторинга.</text>
</g>
<!-- notification&#45;channels -->
<g id="node8" class="node">
<title>notification&#45;channels</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="831.46,-519.6 453.06,-519.6 453.06,-339.6 831.46,-339.6 831.46,-519.6"/>
<text xml:space="preserve" text-anchor="start" x="501.18" y="-424" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="545.12" y="-460.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">Каналы уведомлений</text>
<text xml:space="preserve" text-anchor="start" x="809.45" y="-424" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="545.12" y="-439.4" font-family="Arial" font-size="13.00" fill="#b6ecf7">Email / SMS / Push / Webhook</text>
<text xml:space="preserve" text-anchor="start" x="545.12" y="-417.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">Email, SMS, push, webhook и другие</text>
<text xml:space="preserve" text-anchor="start" x="545.12" y="-399.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">внешние облачные каналы доставки</text>
<text xml:space="preserve" text-anchor="start" x="545.12" y="-381.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">тревог и служебных уведомлений.</text>
</g>
<!-- dispatcher -->
<g id="node9" class="node">
<title>dispatcher</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1019.43,-180 675.09,-180 675.09,0 1019.43,0 1019.43,-180"/>
<text xml:space="preserve" text-anchor="start" x="797.25" y="-111" font-family="Arial" font-size="20.00" fill="#f8fafc">Диспетчер</text>
<text xml:space="preserve" text-anchor="start" x="720.15" y="-88" font-family="Arial" font-size="15.00" fill="#c2f0c2">Контролирует alarm, уведомления и</text>
<text xml:space="preserve" text-anchor="start" x="695.14" y="-70" font-family="Arial" font-size="15.00" fill="#c2f0c2">диспетчерские панели через центральную</text>
<text xml:space="preserve" text-anchor="start" x="759.74" y="-52" font-family="Arial" font-size="15.00" fill="#c2f0c2">платформу мониторинга.</text>
</g>
<!-- demo&#45;stand&#45;current&#45;monitored&#45;scope&#45;&gt;edge&#45;telemetry&#45;agent -->
<g id="edge1" class="edge">
<title>demo&#45;stand&#45;current&#45;monitored&#45;scope&#45;&gt;edge&#45;telemetry&#45;agent</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M818.56,-1664.68C824.51,-1541.72 835.25,-1320.21 841.46,-1192.01"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="844.07,-1192.45 841.81,-1184.83 838.82,-1192.2 844.07,-1192.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="833.96,-1420.2 833.96,-1443 860.95,-1443 860.95,-1420.2 833.96,-1420.2"/>
<text xml:space="preserve" text-anchor="start" x="836.96" y="-1428.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- edge&#45;telemetry&#45;agent&#45;&gt;monitoring&#45;alarm&#45;platform -->
<g id="edge7" class="edge">
<title>edge&#45;telemetry&#45;agent&#45;&gt;monitoring&#45;alarm&#45;platform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M846.26,-1002.3C846.26,-956.34 846.26,-900.07 846.26,-852.67"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="848.88,-852.91 846.26,-845.41 843.63,-852.91 848.88,-852.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="846.26,-902.4 846.26,-942 1088.77,-942 1088.77,-902.4 846.26,-902.4"/>
<text xml:space="preserve" text-anchor="start" x="849.26" y="-925" font-family="Arial" font-size="14.00" fill="#c9c9c9">Публикует telemetry events и service</text>
<text xml:space="preserve" text-anchor="start" x="849.26" y="-908.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">topics через MQTT</text>
</g>
<!-- field&#45;devices&#45;&gt;field&#45;protocol&#45;gateways -->
<g id="edge2" class="edge">
<title>field&#45;devices&#45;&gt;field&#45;protocol&#45;gateways</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1295.66,-1664.47C1291.68,-1623.27 1286.94,-1574.16 1282.84,-1531.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1285.47,-1531.66 1282.13,-1524.44 1280.24,-1532.16 1285.47,-1531.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1289.69,-1581.6 1289.69,-1604.4 1316.68,-1604.4 1316.68,-1581.6 1289.69,-1581.6"/>
<text xml:space="preserve" text-anchor="start" x="1292.69" y="-1589.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- field&#45;protocol&#45;gateways&#45;&gt;edge&#45;telemetry&#45;agent -->
<g id="edge6" class="edge">
<title>field&#45;protocol&#45;gateways&#45;&gt;edge&#45;telemetry&#45;agent</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1160.79,-1341.68C1101.08,-1294.47 1027.67,-1236.43 966.79,-1188.3"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="968.55,-1186.34 961.04,-1183.75 965.3,-1190.46 968.55,-1186.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1072.56,-1250.4 1072.56,-1273.2 1099.55,-1273.2 1099.55,-1250.4 1072.56,-1250.4"/>
<text xml:space="preserve" text-anchor="start" x="1075.56" y="-1258.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- service&#45;engineer&#45;&gt;edge&#45;telemetry&#45;agent -->
<g id="edge3" class="edge">
<title>service&#45;engineer&#45;&gt;edge&#45;telemetry&#45;agent</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M257.06,-1664.7C316.31,-1577.33 413.99,-1442.65 516.09,-1341.6 572.72,-1285.56 642.33,-1231.37 703.01,-1187.96"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="704.46,-1190.16 709.05,-1183.67 701.41,-1185.88 704.46,-1190.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="516.09,-1411.8 516.09,-1451.4 798.26,-1451.4 798.26,-1411.8 516.09,-1411.8"/>
<text xml:space="preserve" text-anchor="start" x="519.09" y="-1434.4" font-family="Arial" font-size="14.00" fill="#22c55e">Настраивает адаптеры, модель сигналов,</text>
<text xml:space="preserve" text-anchor="start" x="519.09" y="-1417.6" font-family="Arial" font-size="14.00" fill="#22c55e">polling и доставку</text>
</g>
<!-- service&#45;engineer&#45;&gt;monitoring&#45;alarm&#45;platform -->
<g id="edge4" class="edge">
<title>service&#45;engineer&#45;&gt;monitoring&#45;alarm&#45;platform</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M191.96,-1664.72C187.2,-1557.79 192.35,-1375.75 265.42,-1242 359.55,-1069.72 540.83,-932.49 675.95,-847.85"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="677.23,-850.15 682.21,-843.95 674.46,-845.69 677.23,-850.15"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="265.42,-1242 265.42,-1281.6 559.26,-1281.6 559.26,-1242 265.42,-1242"/>
<text xml:space="preserve" text-anchor="start" x="268.42" y="-1264.6" font-family="Arial" font-size="14.00" fill="#22c55e">Настраивает правила alarm, получателей и</text>
<text xml:space="preserve" text-anchor="start" x="268.42" y="-1247.8" font-family="Arial" font-size="14.00" fill="#22c55e">панели мониторинга</text>
</g>
<!-- monitoring&#45;alarm&#45;platform&#45;&gt;notification&#45;channels -->
<g id="edge8" class="edge">
<title>monitoring&#45;alarm&#45;platform&#45;&gt;notification&#45;channels</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M726.11,-662.51C707.86,-644.39 690.94,-624.14 678.31,-602.4 665.54,-580.39 657.26,-554.47 651.91,-529.52"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="654.5,-529.08 650.45,-522.24 649.35,-530.11 654.5,-529.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="678.31,-579.6 678.31,-602.4 968.26,-602.4 968.26,-579.6 678.31,-579.6"/>
<text xml:space="preserve" text-anchor="start" x="681.31" y="-585.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Маршрутизирует уведомления и эскалации</text>
</g>
<!-- operator&#45;&gt;monitoring&#45;alarm&#45;platform -->
<g id="edge5" class="edge">
<title>operator&#45;&gt;monitoring&#45;alarm&#45;platform</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1746.15,-1664.79C1704.08,-1578.38 1633.88,-1445.21 1555.26,-1341.6 1388.43,-1121.74 1336.81,-1068.31 1116.26,-902.4 1090.47,-883 1061.87,-864.48 1033.19,-847.5"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1034.7,-845.34 1026.91,-843.81 1032.05,-849.87 1034.7,-845.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1508.38,-1242 1508.38,-1281.6 1747.76,-1281.6 1747.76,-1242 1508.38,-1242"/>
<text xml:space="preserve" text-anchor="start" x="1511.38" y="-1264.6" font-family="Arial" font-size="14.00" fill="#22c55e">Работает с панелями мониторинга,</text>
<text xml:space="preserve" text-anchor="start" x="1511.38" y="-1247.8" font-family="Arial" font-size="14.00" fill="#22c55e">событиями и alarm</text>
</g>
<!-- notification&#45;channels&#45;&gt;dispatcher -->
<g id="edge9" class="edge">
<title>notification&#45;channels&#45;&gt;dispatcher</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M675.35,-339.71C688.91,-307.34 705.92,-271.09 724.99,-240 735.74,-222.47 748.38,-204.78 761.37,-188"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="763.34,-189.75 765.9,-182.23 759.21,-186.51 763.34,-189.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="724.99,-240 724.99,-279.6 968.26,-279.6 968.26,-240 724.99,-240"/>
<text xml:space="preserve" text-anchor="start" x="727.99" y="-262.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Доставляют уведомления по alarm и</text>
<text xml:space="preserve" text-anchor="start" x="727.99" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">служебные уведомления</text>
</g>
<!-- dispatcher&#45;&gt;monitoring&#45;alarm&#45;platform -->
<g id="edge10" class="edge">
<title>dispatcher&#45;&gt;monitoring&#45;alarm&#45;platform</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M953.49,-179.86C968.9,-198.05 982.49,-218.32 991.26,-240 1051.62,-389.33 1051.88,-453.18 991.26,-602.4 983.67,-621.08 972.49,-638.7 959.64,-654.84"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="957.88,-652.85 955.14,-660.3 961.94,-656.19 957.88,-652.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1036.63,-409.8 1036.63,-449.4 1276.01,-449.4 1276.01,-409.8 1036.63,-409.8"/>
<text xml:space="preserve" text-anchor="start" x="1039.63" y="-432.4" font-family="Arial" font-size="14.00" fill="#22c55e">Работает с alarm, уведомлениями и</text>
<text xml:space="preserve" text-anchor="start" x="1039.63" y="-415.6" font-family="Arial" font-size="14.00" fill="#22c55e">диспетчерскими сценариями</text>
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
<svg width="876pt" height="619pt"
 viewBox="0.00 0.00 876.00 619.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 603.85)">
<g id="clust1" class="cluster">
<title>cluster_field&#45;devices</title>
<polygon fill="#0d4b6c" stroke="#0b3c57" points="8,-299.6 8,-580.8 838,-580.8 838,-299.6 8,-299.6"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-567.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">ПОЛЕВЫЕ УСТРОЙСТВА И КОНТРОЛЛЕРЫ</text>
</g>
<!-- knx&#45;temperature&#45;sensor -->
<g id="node1" class="node">
<title>knx&#45;temperature&#45;sensor</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="368.02,-519.6 47.98,-519.6 47.98,-339.6 368.02,-339.6 368.02,-519.6"/>
<text xml:space="preserve" text-anchor="start" x="101.85" y="-442.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">knx&#45;temperature&#45;sensor</text>
<text xml:space="preserve" text-anchor="start" x="194.64" y="-421.4" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX</text>
<text xml:space="preserve" text-anchor="start" x="135.07" y="-399.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">Датчик температуры</text>
</g>
<!-- knx&#45;switch -->
<g id="node2" class="node">
<title>knx&#45;switch</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="798.02,-519.6 477.98,-519.6 477.98,-339.6 798.02,-339.6 798.02,-519.6"/>
<text xml:space="preserve" text-anchor="start" x="591.33" y="-442.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">knx&#45;switch</text>
<text xml:space="preserve" text-anchor="start" x="624.64" y="-421.4" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX</text>
<text xml:space="preserve" text-anchor="start" x="592.16" y="-399.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">Выключатель</text>
</g>
<!-- knx&#45;router -->
<g id="node3" class="node">
<title>knx&#45;router</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="582.02,-180 261.98,-180 261.98,0 582.02,0 582.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="344.69" y="-84.4" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="388.64" y="-91.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">KNX Segment</text>
<text xml:space="preserve" text-anchor="start" x="525.42" y="-84.4" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="388.64" y="-70.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX / KNXnet&#45;IP</text>
</g>
<!-- knx&#45;temperature&#45;sensor&#45;&gt;knx&#45;router -->
<g id="edge1" class="edge">
<title>knx&#45;temperature&#45;sensor&#45;&gt;knx&#45;router</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M184.76,-339.88C180.77,-306.82 182.18,-270.06 198.28,-240 211.78,-214.79 231.63,-193.11 254.02,-174.72"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="255.43,-176.96 259.67,-170.24 252.17,-172.84 255.43,-176.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="198.28,-240 198.28,-279.6 496,-279.6 496,-240 198.28,-240"/>
<text xml:space="preserve" text-anchor="start" x="201.28" y="-262.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Передают телеграммы, состояния и команды</text>
<text xml:space="preserve" text-anchor="start" x="201.28" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">в KNX&#45;сегменте</text>
</g>
<!-- knx&#45;switch&#45;&gt;knx&#45;router -->
<g id="edge2" class="edge">
<title>knx&#45;switch&#45;&gt;knx&#45;router</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M582.26,-339.69C562.39,-308.14 539.79,-272.43 519,-240 508.26,-223.25 496.79,-205.49 485.62,-188.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="488.1,-187.3 481.82,-182.44 483.7,-190.16 488.1,-187.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="541.96,-240 541.96,-279.6 777.45,-279.6 777.45,-240 541.96,-240"/>
<text xml:space="preserve" text-anchor="start" x="544.96" y="-262.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Передает телеграммы состояния и</text>
<text xml:space="preserve" text-anchor="start" x="544.96" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">управления в KNX&#45;сегменте</text>
</g>
</g>
</svg>
`;case"c2-field-protocol-gateways":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.3 (0)
 -->
<!-- Pages: 1 -->
<svg width="1473pt" height="898pt"
 viewBox="0.00 0.00 1473.00 898.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 883.45)">
<g id="clust1" class="cluster">
<title>cluster_field&#45;protocol&#45;gateways</title>
<polygon fill="#0d4b6c" stroke="#0b3c57" points="175.02,-299.6 175.02,-580.8 1435.02,-580.8 1435.02,-299.6 175.02,-299.6"/>
<text xml:space="preserve" text-anchor="start" x="183.02" y="-567.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">ПРОТОКОЛЬНЫЕ ШЛЮЗЫ И SCADA&#45;КОНТРОЛЛЕРЫ</text>
</g>
<!-- knx&#45;router -->
<g id="node1" class="node">
<title>knx&#45;router</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="535.04,-519.6 215,-519.6 215,-339.6 535.04,-339.6 535.04,-519.6"/>
<text xml:space="preserve" text-anchor="start" x="297.71" y="-424" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="341.66" y="-431.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">KNX Segment</text>
<text xml:space="preserve" text-anchor="start" x="478.44" y="-424" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="341.66" y="-410.4" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX / KNXnet&#45;IP</text>
</g>
<!-- modbus&#45;gateway -->
<g id="node2" class="node">
<title>modbus&#45;gateway</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="965.04,-519.6 645,-519.6 645,-339.6 965.04,-339.6 965.04,-519.6"/>
<text xml:space="preserve" text-anchor="start" x="709.44" y="-424" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="753.38" y="-431.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">Modbus Gateway</text>
<text xml:space="preserve" text-anchor="start" x="926.71" y="-424" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="753.38" y="-410.4" font-family="Arial" font-size="13.00" fill="#b6ecf7">Modbus TCP / Modbus RTU</text>
</g>
<!-- opc&#45;ua&#45;gateway -->
<g id="node3" class="node">
<title>opc&#45;ua&#45;gateway</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1395.04,-519.6 1075,-519.6 1075,-339.6 1395.04,-339.6 1395.04,-519.6"/>
<text xml:space="preserve" text-anchor="start" x="1150.5" y="-424" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1194.45" y="-431.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">OPC UA Server</text>
<text xml:space="preserve" text-anchor="start" x="1345.65" y="-424" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1194.45" y="-410.4" font-family="Arial" font-size="13.00" fill="#b6ecf7">OPC UA</text>
</g>
<!-- knx&#45;temperature&#45;sensor -->
<g id="node4" class="node">
<title>knx&#45;temperature&#45;sensor</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="320.04,-868.4 0,-868.4 0,-688.4 320.04,-688.4 320.04,-868.4"/>
<text xml:space="preserve" text-anchor="start" x="53.87" y="-791.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">knx&#45;temperature&#45;sensor</text>
<text xml:space="preserve" text-anchor="start" x="146.66" y="-770.2" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX</text>
<text xml:space="preserve" text-anchor="start" x="87.09" y="-748.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">Датчик температуры</text>
</g>
<!-- knx&#45;switch -->
<g id="node5" class="node">
<title>knx&#45;switch</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="750.04,-868.4 430,-868.4 430,-688.4 750.04,-688.4 750.04,-868.4"/>
<text xml:space="preserve" text-anchor="start" x="543.35" y="-791.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">knx&#45;switch</text>
<text xml:space="preserve" text-anchor="start" x="576.66" y="-770.2" font-family="Arial" font-size="13.00" fill="#b6ecf7">KNX</text>
<text xml:space="preserve" text-anchor="start" x="544.18" y="-748.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">Выключатель</text>
</g>
<!-- collector&#45;runtime -->
<g id="node6" class="node">
<title>collector&#45;runtime</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="966.77,-180 643.27,-180 643.27,0 966.77,0 966.77,-180"/>
<text xml:space="preserve" text-anchor="start" x="725.55" y="-129.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">Collector Runtime</text>
<text xml:space="preserve" text-anchor="start" x="762.39" y="-108.8" font-family="Arial" font-size="13.00" fill="#f9b27c">Python service</text>
<text xml:space="preserve" text-anchor="start" x="696.23" y="-87.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Основной runtime edge&#45;агента:</text>
<text xml:space="preserve" text-anchor="start" x="679.97" y="-69.2" font-family="Arial" font-size="15.00" fill="#f9b27c">southbound&#45;адаптеры, сбор данных,</text>
<text xml:space="preserve" text-anchor="start" x="663.33" y="-51.2" font-family="Arial" font-size="15.00" fill="#f9b27c">нормализация, фильтрация изменений и</text>
<text xml:space="preserve" text-anchor="start" x="699.15" y="-33.2" font-family="Arial" font-size="15.00" fill="#f9b27c">постановка событий в outbox.</text>
</g>
<!-- knx&#45;router&#45;&gt;collector&#45;runtime -->
<g id="edge3" class="edge">
<title>knx&#45;router&#45;&gt;collector&#45;runtime</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M420.2,-339.94C440.93,-305.55 467.99,-267.83 499.7,-240 538.87,-205.62 587.38,-177.23 634.1,-154.78"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="635.03,-157.24 640.69,-151.66 632.78,-152.5 635.03,-157.24"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="499.7,-240 499.7,-279.6 778.02,-279.6 778.02,-240 499.7,-240"/>
<text xml:space="preserve" text-anchor="start" x="502.7" y="-262.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Экспонирует group address и телеграммы</text>
<text xml:space="preserve" text-anchor="start" x="502.7" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">через KNX/IP</text>
</g>
<!-- modbus&#45;gateway&#45;&gt;collector&#45;runtime -->
<g id="edge4" class="edge">
<title>modbus&#45;gateway&#45;&gt;collector&#45;runtime</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M805.02,-339.9C805.02,-293.94 805.02,-237.67 805.02,-190.27"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="807.65,-190.51 805.02,-183.01 802.4,-190.51 807.65,-190.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="805.02,-240 805.02,-279.6 1051.42,-279.6 1051.42,-240 805.02,-240"/>
<text xml:space="preserve" text-anchor="start" x="808.02" y="-262.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Экспонирует registers, coils и</text>
<text xml:space="preserve" text-anchor="start" x="808.02" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">дискретные значения через Modbus</text>
</g>
<!-- opc&#45;ua&#45;gateway&#45;&gt;collector&#45;runtime -->
<g id="edge5" class="edge">
<title>opc&#45;ua&#45;gateway&#45;&gt;collector&#45;runtime</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1172.41,-339.77C1145.82,-305.94 1112.9,-268.68 1078.02,-240 1047.07,-214.55 1011.12,-191.34 975.67,-171.2"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="977.14,-169.01 969.31,-167.63 974.57,-173.59 977.14,-169.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1117.33,-240 1117.33,-279.6 1352.08,-279.6 1352.08,-240 1117.33,-240"/>
<text xml:space="preserve" text-anchor="start" x="1120.33" y="-262.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Экспонирует nodes, subscriptions и</text>
<text xml:space="preserve" text-anchor="start" x="1120.33" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">значения через OPC UA</text>
</g>
<!-- knx&#45;temperature&#45;sensor&#45;&gt;knx&#45;router -->
<g id="edge1" class="edge">
<title>knx&#45;temperature&#45;sensor&#45;&gt;knx&#45;router</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M140.54,-688.48C137.66,-655.57 139.84,-618.97 155.3,-588.8 167.94,-564.12 186.43,-542.41 207.4,-523.61"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="208.99,-525.7 212.94,-518.8 205.55,-521.73 208.99,-525.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="155.3,-588.8 155.3,-628.4 453.02,-628.4 453.02,-588.8 155.3,-588.8"/>
<text xml:space="preserve" text-anchor="start" x="158.3" y="-611.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Передают телеграммы, состояния и команды</text>
<text xml:space="preserve" text-anchor="start" x="158.3" y="-594.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">в KNX&#45;сегменте</text>
</g>
<!-- knx&#45;switch&#45;&gt;knx&#45;router -->
<g id="edge2" class="edge">
<title>knx&#45;switch&#45;&gt;knx&#45;router</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M537.11,-688.85C518.02,-657.19 496.21,-621.3 476.02,-588.8 463.81,-569.15 450.61,-548.23 437.9,-528.26"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="440.16,-526.93 433.92,-522.02 435.73,-529.75 440.16,-526.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="498.15,-588.8 498.15,-628.4 733.64,-628.4 733.64,-588.8 498.15,-588.8"/>
<text xml:space="preserve" text-anchor="start" x="501.15" y="-611.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Передает телеграммы состояния и</text>
<text xml:space="preserve" text-anchor="start" x="501.15" y="-594.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">управления в KNX&#45;сегменте</text>
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
<svg width="2773pt" height="2257pt"
 viewBox="0.00 0.00 2773.00 2257.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 2241.85)">
<g id="clust1" class="cluster">
<title>cluster_monitoring&#45;alarm&#45;platform</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="502.2,-299.6 502.2,-1939.2 2034.2,-1939.2 2034.2,-299.6 502.2,-299.6"/>
<text xml:space="preserve" text-anchor="start" x="510.2" y="-1926.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">MONITORING &amp; ALARM PLATFORM</text>
</g>
<!-- platform&#45;frontend -->
<g id="node1" class="node">
<title>platform&#45;frontend</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1435.09,-1878 1025.31,-1878 1025.31,-1698 1435.09,-1698 1435.09,-1878"/>
<text xml:space="preserve" text-anchor="start" x="1150.16" y="-1827.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">Platform Frontend</text>
<text xml:space="preserve" text-anchor="start" x="1187.94" y="-1806.8" font-family="Arial" font-size="13.00" fill="#f9b27c">Browser / SPA</text>
<text xml:space="preserve" text-anchor="start" x="1108.48" y="-1785.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Browser&#45;based frontend платформы:</text>
<text xml:space="preserve" text-anchor="start" x="1049.33" y="-1767.2" font-family="Arial" font-size="15.00" fill="#f9b27c">пользовательский web&#45;интерфейс для операторов</text>
<text xml:space="preserve" text-anchor="start" x="1078.92" y="-1749.2" font-family="Arial" font-size="15.00" fill="#f9b27c">и диспетчеров, маршруты UI, навигация по</text>
<text xml:space="preserve" text-anchor="start" x="1128.49" y="-1731.2" font-family="Arial" font-size="15.00" fill="#f9b27c">alarm и доступ к dashboards.</text>
</g>
<!-- grafana -->
<g id="node2" class="node">
<title>grafana</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1994.22,-1538.4 1638.17,-1538.4 1638.17,-1358.4 1994.22,-1358.4 1994.22,-1538.4"/>
<text xml:space="preserve" text-anchor="start" x="1780.06" y="-1497.2" font-family="Arial" font-size="20.00" fill="#ffe0c2">Grafana</text>
<text xml:space="preserve" text-anchor="start" x="1700.58" y="-1476.2" font-family="Arial" font-size="13.00" fill="#f9b27c">Grafana OSS / grafana&#45;mqtt&#45;datasource</text>
<text xml:space="preserve" text-anchor="start" x="1681.58" y="-1454.6" font-family="Arial" font-size="15.00" fill="#f9b27c">Слой визуализации Monitoring &amp; Alarm</text>
<text xml:space="preserve" text-anchor="start" x="1658.23" y="-1436.6" font-family="Arial" font-size="15.00" fill="#f9b27c">Platform: live&#45;панели, инженерные dashboards</text>
<text xml:space="preserve" text-anchor="start" x="1664.08" y="-1418.6" font-family="Arial" font-size="15.00" fill="#f9b27c">и операторские представления. В текущей</text>
<text xml:space="preserve" text-anchor="start" x="1660.33" y="-1400.6" font-family="Arial" font-size="15.00" fill="#f9b27c">реализации подключается к MQTT Ingestion</text>
<text xml:space="preserve" text-anchor="start" x="1677.39" y="-1382.6" font-family="Arial" font-size="15.00" fill="#f9b27c">Gateway через grafana&#45;mqtt&#45;datasource.</text>
</g>
<!-- platform&#45;api -->
<g id="node3" class="node">
<title>platform&#45;api</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1009.97,-1538.4 666.43,-1538.4 666.43,-1358.4 1009.97,-1358.4 1009.97,-1538.4"/>
<text xml:space="preserve" text-anchor="start" x="782.07" y="-1479.2" font-family="Arial" font-size="20.00" fill="#ffe0c2">Platform API</text>
<text xml:space="preserve" text-anchor="start" x="756.56" y="-1458.2" font-family="Arial" font-size="13.00" fill="#f9b27c">HTTP API / backend service</text>
<text xml:space="preserve" text-anchor="start" x="686.48" y="-1436.6" font-family="Arial" font-size="15.00" fill="#f9b27c">Backend API для состояния alarm, истории</text>
<text xml:space="preserve" text-anchor="start" x="690.25" y="-1418.6" font-family="Arial" font-size="15.00" fill="#f9b27c">событий, конфигурации правил и политик</text>
<text xml:space="preserve" text-anchor="start" x="790.27" y="-1400.6" font-family="Arial" font-size="15.00" fill="#f9b27c">уведомлений.</text>
</g>
<!-- mqtt&#45;ingestion&#45;gateway -->
<g id="node4" class="node">
<title>mqtt&#45;ingestion&#45;gateway</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1994.14,-1198.8 1642.25,-1198.8 1642.25,-1018.8 1994.14,-1018.8 1994.14,-1198.8"/>
<text xml:space="preserve" text-anchor="start" x="1704.27" y="-1157.6" font-family="Arial" font-size="20.00" fill="#ffe0c2">MQTT Ingestion Gateway</text>
<text xml:space="preserve" text-anchor="start" x="1725.73" y="-1136.6" font-family="Arial" font-size="13.00" fill="#f9b27c">MQTT broker / ingestion service</text>
<text xml:space="preserve" text-anchor="start" x="1668.16" y="-1115" font-family="Arial" font-size="15.00" fill="#f9b27c">Принимает MQTT telemetry events и service</text>
<text xml:space="preserve" text-anchor="start" x="1671.07" y="-1097" font-family="Arial" font-size="15.00" fill="#f9b27c">topics от edge&#45;агентов, восстанавливает</text>
<text xml:space="preserve" text-anchor="start" x="1666.46" y="-1079" font-family="Arial" font-size="15.00" fill="#f9b27c">routing context из topic, валидирует payload</text>
<text xml:space="preserve" text-anchor="start" x="1662.31" y="-1061" font-family="Arial" font-size="15.00" fill="#f9b27c">и передает canonical events на хранение и в</text>
<text xml:space="preserve" text-anchor="start" x="1753.58" y="-1043" font-family="Arial" font-size="15.00" fill="#f9b27c">Alarm Rule Engine.</text>
</g>
<!-- keycloak -->
<g id="node5" class="node">
<title>keycloak</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1532.45,-1198.8 1163.94,-1198.8 1163.94,-1018.8 1532.45,-1018.8 1532.45,-1198.8"/>
<text xml:space="preserve" text-anchor="start" x="1307.62" y="-1139.6" font-family="Arial" font-size="20.00" fill="#ffe0c2">Keycloak</text>
<text xml:space="preserve" text-anchor="start" x="1265.47" y="-1118.6" font-family="Arial" font-size="13.00" fill="#f9b27c">Keycloak / OIDC / OAuth 2.0</text>
<text xml:space="preserve" text-anchor="start" x="1209.38" y="-1097" font-family="Arial" font-size="15.00" fill="#f9b27c">Сервис identity and access management:</text>
<text xml:space="preserve" text-anchor="start" x="1184" y="-1079" font-family="Arial" font-size="15.00" fill="#f9b27c">realms, пользователи, роли, клиенты и выпуск</text>
<text xml:space="preserve" text-anchor="start" x="1189.82" y="-1061" font-family="Arial" font-size="15.00" fill="#f9b27c">токенов для Platform Frontend и Platform API.</text>
</g>
<!-- alarm&#45;rule&#45;engine -->
<g id="node6" class="node">
<title>alarm&#45;rule&#45;engine</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1095.87,-859.2 726.53,-859.2 726.53,-679.2 1095.87,-679.2 1095.87,-859.2"/>
<text xml:space="preserve" text-anchor="start" x="827.82" y="-800" font-family="Arial" font-size="20.00" fill="#ffe0c2">Alarm Rule Engine</text>
<text xml:space="preserve" text-anchor="start" x="820.88" y="-779" font-family="Arial" font-size="13.00" fill="#f9b27c">Rule engine / stream processor</text>
<text xml:space="preserve" text-anchor="start" x="746.58" y="-757.4" font-family="Arial" font-size="15.00" fill="#f9b27c">Обрабатывает входящие события по правилам,</text>
<text xml:space="preserve" text-anchor="start" x="761.17" y="-739.4" font-family="Arial" font-size="15.00" fill="#f9b27c">ведет жизненный цикл alarm и инициирует</text>
<text xml:space="preserve" text-anchor="start" x="817.43" y="-721.4" font-family="Arial" font-size="15.00" fill="#f9b27c">уведомления и эскалации.</text>
</g>
<!-- notification&#45;service -->
<g id="node7" class="node">
<title>notification&#45;service</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="932.29,-519.6 542.11,-519.6 542.11,-339.6 932.29,-339.6 932.29,-519.6"/>
<text xml:space="preserve" text-anchor="start" x="651.61" y="-451.4" font-family="Arial" font-size="20.00" fill="#ffe0c2">Notification Service</text>
<text xml:space="preserve" text-anchor="start" x="653.75" y="-430.4" font-family="Arial" font-size="13.00" fill="#f9b27c">Worker / notification gateway</text>
<text xml:space="preserve" text-anchor="start" x="562.16" y="-408.8" font-family="Arial" font-size="15.00" fill="#f9b27c">Маршрутизирует уведомления во внешние каналы</text>
<text xml:space="preserve" text-anchor="start" x="584.67" y="-390.8" font-family="Arial" font-size="15.00" fill="#f9b27c">по alarm&#45;политикам и правилам эскалации.</text>
</g>
<!-- telemetry&#45;store -->
<g id="node8" class="node">
<title>telemetry&#45;store</title>
<path fill="#a35829" stroke="#7e451d" stroke-width="2" d="M1751.29,-503.24C1751.29,-512.27 1663.85,-519.6 1556.2,-519.6 1448.55,-519.6 1361.11,-512.27 1361.11,-503.24 1361.11,-503.24 1361.11,-355.96 1361.11,-355.96 1361.11,-346.93 1448.55,-339.6 1556.2,-339.6 1663.85,-339.6 1751.29,-346.93 1751.29,-355.96 1751.29,-355.96 1751.29,-503.24 1751.29,-503.24"/>
<path fill="none" stroke="#7e451d" stroke-width="2" d="M1751.29,-503.24C1751.29,-494.21 1663.85,-486.87 1556.2,-486.87 1448.55,-486.87 1361.11,-494.21 1361.11,-503.24"/>
<text xml:space="preserve" text-anchor="start" x="1485.06" y="-460.4" font-family="Arial" font-size="20.00" fill="#ffe0c2">Telemetry Store</text>
<text xml:space="preserve" text-anchor="start" x="1456.13" y="-439.4" font-family="Arial" font-size="13.00" fill="#f9b27c">Time&#45;series DB / relational storage</text>
<text xml:space="preserve" text-anchor="start" x="1381.16" y="-417.8" font-family="Arial" font-size="15.00" fill="#f9b27c">Хранит телеметрию, служебные события, историю</text>
<text xml:space="preserve" text-anchor="start" x="1422.84" y="-399.8" font-family="Arial" font-size="15.00" fill="#f9b27c">alarm и данные для мониторинговых и</text>
<text xml:space="preserve" text-anchor="start" x="1468.68" y="-381.8" font-family="Arial" font-size="15.00" fill="#f9b27c">операторских запросов.</text>
</g>
<!-- service&#45;engineer -->
<g id="node9" class="node">
<title>service&#45;engineer</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1968.46,-2226.8 1569.94,-2226.8 1569.94,-2046.8 1968.46,-2046.8 1968.46,-2226.8"/>
<text xml:space="preserve" text-anchor="start" x="1677.51" y="-2157.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Сервисный инженер</text>
<text xml:space="preserve" text-anchor="start" x="1594.16" y="-2134.8" font-family="Arial" font-size="15.00" fill="#c2f0c2">Настраивает источники данных, схему сигналов,</text>
<text xml:space="preserve" text-anchor="start" x="1590" y="-2116.8" font-family="Arial" font-size="15.00" fill="#c2f0c2">правила доставки и эксплуатационные параметры</text>
<text xml:space="preserve" text-anchor="start" x="1629.16" y="-2098.8" font-family="Arial" font-size="15.00" fill="#c2f0c2">edge&#45;агента и центральной платформы.</text>
</g>
<!-- operator -->
<g id="node10" class="node">
<title>operator</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1414.03,-2226.8 1046.36,-2226.8 1046.36,-2046.8 1414.03,-2046.8 1414.03,-2226.8"/>
<text xml:space="preserve" text-anchor="start" x="1185.74" y="-2157.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Оператор</text>
<text xml:space="preserve" text-anchor="start" x="1082.25" y="-2134.8" font-family="Arial" font-size="15.00" fill="#c2f0c2">Работает с текущим состоянием объекта,</text>
<text xml:space="preserve" text-anchor="start" x="1066.42" y="-2116.8" font-family="Arial" font-size="15.00" fill="#c2f0c2">live&#45;панелями и событиями через центральную</text>
<text xml:space="preserve" text-anchor="start" x="1142.68" y="-2098.8" font-family="Arial" font-size="15.00" fill="#c2f0c2">платформу мониторинга.</text>
</g>
<!-- dispatcher -->
<g id="node11" class="node">
<title>dispatcher</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="361.37,-2226.8 17.03,-2226.8 17.03,-2046.8 361.37,-2046.8 361.37,-2226.8"/>
<text xml:space="preserve" text-anchor="start" x="139.19" y="-2157.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Диспетчер</text>
<text xml:space="preserve" text-anchor="start" x="62.09" y="-2134.8" font-family="Arial" font-size="15.00" fill="#c2f0c2">Контролирует alarm, уведомления и</text>
<text xml:space="preserve" text-anchor="start" x="37.08" y="-2116.8" font-family="Arial" font-size="15.00" fill="#c2f0c2">диспетчерские панели через центральную</text>
<text xml:space="preserve" text-anchor="start" x="101.68" y="-2098.8" font-family="Arial" font-size="15.00" fill="#c2f0c2">платформу мониторинга.</text>
</g>
<!-- edge&#45;telemetry&#45;agent -->
<g id="node12" class="node">
<title>edge&#45;telemetry&#45;agent</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="2742.55,-2226.8 2359.85,-2226.8 2359.85,-2046.8 2742.55,-2046.8 2742.55,-2226.8"/>
<text xml:space="preserve" text-anchor="start" x="2451.7" y="-2176.6" font-family="Arial" font-size="20.00" fill="#ffe0c2">Edge Telemetry Agent</text>
<text xml:space="preserve" text-anchor="start" x="2431.61" y="-2155.6" font-family="Arial" font-size="13.00" fill="#f9b27c">Edge collector / normalization / buffering /</text>
<text xml:space="preserve" text-anchor="start" x="2379.9" y="-2134" font-family="Arial" font-size="15.00" fill="#f9b27c">Универсальная edge&#45;система, разворачиваемая</text>
<text xml:space="preserve" text-anchor="start" x="2392.83" y="-2116" font-family="Arial" font-size="15.00" fill="#f9b27c">на объекте рядом с полевыми протоколами и</text>
<text xml:space="preserve" text-anchor="start" x="2397" y="-2098" font-family="Arial" font-size="15.00" fill="#f9b27c">отвечающая за сбор данных, нормализацию,</text>
<text xml:space="preserve" text-anchor="start" x="2384.5" y="-2080" font-family="Arial" font-size="15.00" fill="#f9b27c">фильтрацию, буферизацию и доставку событий.</text>
</g>
<!-- notification&#45;channels -->
<g id="node13" class="node">
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
<!-- platform&#45;frontend&#45;&gt;grafana -->
<g id="edge6" class="edge">
<title>platform&#45;frontend&#45;&gt;grafana</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1320.76,-1698.23C1358.87,-1664.02 1405.03,-1626.47 1451.11,-1598.4 1506.08,-1564.92 1569.91,-1535.93 1628.69,-1512.66"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1629.61,-1515.11 1635.64,-1509.93 1627.7,-1510.23 1629.61,-1515.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1451.11,-1598.4 1451.11,-1638 1709.2,-1638 1709.2,-1598.4 1451.11,-1598.4"/>
<text xml:space="preserve" text-anchor="start" x="1454.11" y="-1621" font-family="Arial" font-size="14.00" fill="#c9c9c9">Открывает и встраивает dashboards и</text>
<text xml:space="preserve" text-anchor="start" x="1454.11" y="-1604.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">live&#45;панели</text>
</g>
<!-- platform&#45;frontend&#45;&gt;platform&#45;api -->
<g id="edge7" class="edge">
<title>platform&#45;frontend&#45;&gt;platform&#45;api</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1025.44,-1712.07C988.54,-1692.05 952.7,-1667.54 923.92,-1638 899.47,-1612.9 881.22,-1579.59 867.98,-1547.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="870.42,-1546.98 865.17,-1541.01 865.55,-1548.95 870.42,-1546.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="923.92,-1598.4 923.92,-1638 1202.2,-1638 1202.2,-1598.4 923.92,-1598.4"/>
<text xml:space="preserve" text-anchor="start" x="926.92" y="-1621" font-family="Arial" font-size="14.00" fill="#c9c9c9">Запрашивает состояние alarm, историю</text>
<text xml:space="preserve" text-anchor="start" x="926.92" y="-1604.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">событий и прикладные данные платформы</text>
</g>
<!-- platform&#45;frontend&#45;&gt;keycloak -->
<g id="edge8" class="edge">
<title>platform&#45;frontend&#45;&gt;keycloak</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1238.53,-1698.27C1247.43,-1611.26 1263.32,-1475.04 1285.47,-1358.4 1294.91,-1308.7 1308.34,-1254.13 1320.34,-1208.81"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1322.86,-1209.54 1322.26,-1201.62 1317.79,-1208.19 1322.86,-1209.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1285.47,-1428.6 1285.47,-1468.2 1583.2,-1468.2 1583.2,-1428.6 1285.47,-1428.6"/>
<text xml:space="preserve" text-anchor="start" x="1288.47" y="-1451.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Аутентифицирует пользователя и получает</text>
<text xml:space="preserve" text-anchor="start" x="1288.47" y="-1434.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">OIDC tokens</text>
</g>
<!-- grafana&#45;&gt;mqtt&#45;ingestion&#45;gateway -->
<g id="edge9" class="edge">
<title>grafana&#45;&gt;mqtt&#45;ingestion&#45;gateway</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1816.72,-1358.7C1817,-1312.74 1817.33,-1256.47 1817.61,-1209.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1820.23,-1209.33 1817.65,-1201.81 1814.98,-1209.3 1820.23,-1209.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1817.26,-1258.8 1817.26,-1298.4 2085.41,-1298.4 2085.41,-1258.8 1817.26,-1258.8"/>
<text xml:space="preserve" text-anchor="start" x="1820.26" y="-1281.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Подписывается на live MQTT telemetry и</text>
<text xml:space="preserve" text-anchor="start" x="1820.26" y="-1264.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">service topics</text>
</g>
<!-- platform&#45;api&#45;&gt;keycloak -->
<g id="edge10" class="edge">
<title>platform&#45;api&#45;&gt;keycloak</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M894.59,-1358.45C919.97,-1323.81 952.36,-1286 988.48,-1258.8 1037.85,-1221.63 1097.82,-1192.01 1154.54,-1169.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1155.15,-1171.87 1161.16,-1166.67 1153.22,-1166.98 1155.15,-1171.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="988.48,-1258.8 988.48,-1298.4 1202.2,-1298.4 1202.2,-1258.8 988.48,-1258.8"/>
<text xml:space="preserve" text-anchor="start" x="991.48" y="-1281.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Проверяет токены, роли и client</text>
<text xml:space="preserve" text-anchor="start" x="991.48" y="-1264.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">configuration</text>
</g>
<!-- platform&#45;api&#45;&gt;alarm&#45;rule&#45;engine -->
<g id="edge11" class="edge">
<title>platform&#45;api&#45;&gt;alarm&#45;rule&#45;engine</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M788.76,-1358.55C746.69,-1271.14 698.45,-1134.39 735.22,-1018.8 752.73,-963.77 787.32,-910.45 821.24,-867.39"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="823.27,-869.06 825.9,-861.56 819.17,-865.78 823.27,-869.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="735.22,-1089 735.22,-1128.6 1025.2,-1128.6 1025.2,-1089 735.22,-1089"/>
<text xml:space="preserve" text-anchor="start" x="738.22" y="-1111.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Читает активные alarm и управляет</text>
<text xml:space="preserve" text-anchor="start" x="738.22" y="-1094.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">конфигурацией правил в Alarm Rule Engine</text>
</g>
<!-- platform&#45;api&#45;&gt;telemetry&#45;store -->
<g id="edge12" class="edge">
<title>platform&#45;api&#45;&gt;telemetry&#45;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M860.15,-1358.8C872.31,-1324.22 890.54,-1286.35 917.2,-1258.8 961.73,-1212.78 1013.61,-1252.69 1048.2,-1198.8 1091.41,-1131.48 1061.7,-1097.65 1048.2,-1018.8 1040.56,-974.19 1002.98,-957.53 1027.03,-919.2 1059.61,-867.28 1101.54,-895.12 1151.2,-859.2 1271.4,-772.25 1281.49,-727.21 1383.2,-619.2 1411,-589.68 1440.96,-557.24 1468.02,-527.71"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1469.66,-529.8 1472.79,-522.5 1465.79,-526.26 1469.66,-529.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1027.03,-919.2 1027.03,-958.8 1309.2,-958.8 1309.2,-919.2 1027.03,-919.2"/>
<text xml:space="preserve" text-anchor="start" x="1030.03" y="-941.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Читает телеметрию, историю и временные</text>
<text xml:space="preserve" text-anchor="start" x="1030.03" y="-925" font-family="Arial" font-size="14.00" fill="#c9c9c9">линии alarm</text>
</g>
<!-- mqtt&#45;ingestion&#45;gateway&#45;&gt;alarm&#45;rule&#45;engine -->
<g id="edge13" class="edge">
<title>mqtt&#45;ingestion&#45;gateway&#45;&gt;alarm&#45;rule&#45;engine</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1642.31,-1039.88C1623.71,-1032.74 1605.07,-1025.61 1587.2,-1018.8 1516.51,-991.87 1498.06,-987.13 1427.92,-958.8 1386.75,-942.17 1377.56,-935.36 1336.2,-919.2 1261.44,-890 1178.31,-860.26 1105.54,-835.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1106.61,-832.71 1098.66,-832.74 1104.9,-837.67 1106.61,-832.71"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1427.92,-919.2 1427.92,-958.8 1727.2,-958.8 1727.2,-919.2 1427.92,-919.2"/>
<text xml:space="preserve" text-anchor="start" x="1430.92" y="-941.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Передает нормализованные события в Alarm</text>
<text xml:space="preserve" text-anchor="start" x="1430.92" y="-925" font-family="Arial" font-size="14.00" fill="#c9c9c9">Rule Engine</text>
</g>
<!-- mqtt&#45;ingestion&#45;gateway&#45;&gt;telemetry&#45;store -->
<g id="edge14" class="edge">
<title>mqtt&#45;ingestion&#45;gateway&#45;&gt;telemetry&#45;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1786.78,-1018.84C1775.47,-987.29 1762.46,-951.59 1750.2,-919.2 1698.9,-783.73 1636.64,-628.43 1596.73,-529.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1599.21,-529.09 1593.95,-523.12 1594.34,-531.06 1599.21,-529.09"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1724.66,-749.4 1724.66,-789 1994.42,-789 1994.42,-749.4 1724.66,-749.4"/>
<text xml:space="preserve" text-anchor="start" x="1727.66" y="-772" font-family="Arial" font-size="14.00" fill="#c9c9c9">Сохраняет canonical events и служебные</text>
<text xml:space="preserve" text-anchor="start" x="1727.66" y="-755.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">события</text>
</g>
<!-- alarm&#45;rule&#45;engine&#45;&gt;notification&#45;service -->
<g id="edge15" class="edge">
<title>alarm&#45;rule&#45;engine&#45;&gt;notification&#45;service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M761.84,-679.39C743.19,-661.85 726.78,-641.77 715.6,-619.2 702.06,-591.87 701.13,-559.66 705.47,-529.66"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="708.01,-530.39 706.64,-522.57 702.83,-529.54 708.01,-530.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="715.6,-588 715.6,-610.8 947.2,-610.8 947.2,-588 715.6,-588"/>
<text xml:space="preserve" text-anchor="start" x="718.6" y="-593.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Запускает доставку уведомлений</text>
</g>
<!-- alarm&#45;rule&#45;engine&#45;&gt;telemetry&#45;store -->
<g id="edge16" class="edge">
<title>alarm&#45;rule&#45;engine&#45;&gt;telemetry&#45;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M965.35,-679.35C990.9,-643.89 1024.21,-605.44 1062.47,-579.6 1147.94,-521.89 1256.44,-485.95 1349.95,-463.87"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1350.45,-466.45 1357.16,-462.19 1349.26,-461.33 1350.45,-466.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1062.47,-579.6 1062.47,-619.2 1360.2,-619.2 1360.2,-579.6 1062.47,-579.6"/>
<text xml:space="preserve" text-anchor="start" x="1065.47" y="-602.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Читает контекст и записывает состояние и</text>
<text xml:space="preserve" text-anchor="start" x="1065.47" y="-585.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">историю alarm</text>
</g>
<!-- notification&#45;service&#45;&gt;notification&#45;channels -->
<g id="edge17" class="edge">
<title>notification&#45;service&#45;&gt;notification&#45;channels</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M592.86,-339.68C515.6,-292.09 420.48,-233.48 341.97,-185.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="343.8,-183.16 336.04,-181.46 341.05,-187.63 343.8,-183.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="479.63,-240 479.63,-279.6 688.69,-279.6 688.69,-240 479.63,-240"/>
<text xml:space="preserve" text-anchor="start" x="482.63" y="-262.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Отправляет email, SMS, push и</text>
<text xml:space="preserve" text-anchor="start" x="482.63" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">webhook&#45;уведомления</text>
</g>
<!-- service&#45;engineer&#45;&gt;grafana -->
<g id="edge2" class="edge">
<title>service&#45;engineer&#45;&gt;grafana</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1775.27,-2047.12C1784.05,-1918.9 1800.24,-1682.49 1809.4,-1548.63"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1812,-1549.06 1809.9,-1541.4 1806.77,-1548.7 1812,-1549.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1798.9,-1768.2 1798.9,-1807.8 2095.88,-1807.8 2095.88,-1768.2 1798.9,-1768.2"/>
<text xml:space="preserve" text-anchor="start" x="1801.9" y="-1790.8" font-family="Arial" font-size="14.00" fill="#22c55e">Настраивает dashboards и проверяет поток</text>
<text xml:space="preserve" text-anchor="start" x="1801.9" y="-1774" font-family="Arial" font-size="14.00" fill="#22c55e">телеметрии</text>
</g>
<!-- service&#45;engineer&#45;&gt;edge&#45;telemetry&#45;agent -->
<g id="edge1" class="edge">
<title>service&#45;engineer&#45;&gt;edge&#45;telemetry&#45;agent</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1968.3,-2136.8C2085.26,-2136.8 2232.68,-2136.8 2350,-2136.8"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2349.65,-2139.43 2357.15,-2136.8 2349.65,-2134.18 2349.65,-2139.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2023.07,-2139.8 2023.07,-2179.4 2305.23,-2179.4 2305.23,-2139.8 2023.07,-2139.8"/>
<text xml:space="preserve" text-anchor="start" x="2026.07" y="-2162.4" font-family="Arial" font-size="14.00" fill="#22c55e">Настраивает адаптеры, модель сигналов,</text>
<text xml:space="preserve" text-anchor="start" x="2026.07" y="-2145.6" font-family="Arial" font-size="14.00" fill="#22c55e">polling и доставку</text>
</g>
<!-- operator&#45;&gt;platform&#45;frontend -->
<g id="edge3" class="edge">
<title>operator&#45;&gt;platform&#45;frontend</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1230.2,-2046.94C1230.2,-1998.51 1230.2,-1938.43 1230.2,-1888.44"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1232.82,-1888.46 1230.2,-1880.96 1227.57,-1888.46 1232.82,-1888.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1230.2,-1947.2 1230.2,-1986.8 1438.46,-1986.8 1438.46,-1947.2 1230.2,-1947.2"/>
<text xml:space="preserve" text-anchor="start" x="1233.2" y="-1969.8" font-family="Arial" font-size="14.00" fill="#22c55e">Работает с пользовательским</text>
<text xml:space="preserve" text-anchor="start" x="1233.2" y="-1953" font-family="Arial" font-size="14.00" fill="#22c55e">web&#45;интерфейсом платформы</text>
</g>
<!-- dispatcher&#45;&gt;platform&#45;frontend -->
<g id="edge4" class="edge">
<title>dispatcher&#45;&gt;platform&#45;frontend</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M361.1,-2078.53C540.41,-2018.8 821.88,-1925.03 1015.65,-1860.47"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1016.23,-1863.05 1022.52,-1858.19 1014.57,-1858.07 1016.23,-1863.05"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="740.91,-1947.2 740.91,-1986.8 949.17,-1986.8 949.17,-1947.2 740.91,-1947.2"/>
<text xml:space="preserve" text-anchor="start" x="743.91" y="-1969.8" font-family="Arial" font-size="14.00" fill="#22c55e">Работает с пользовательским</text>
<text xml:space="preserve" text-anchor="start" x="743.91" y="-1953" font-family="Arial" font-size="14.00" fill="#22c55e">web&#45;интерфейсом платформы</text>
</g>
<!-- edge&#45;telemetry&#45;agent&#45;&gt;mqtt&#45;ingestion&#45;gateway -->
<g id="edge5" class="edge">
<title>edge&#45;telemetry&#45;agent&#45;&gt;mqtt&#45;ingestion&#45;gateway</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2527.22,-2046.93C2476.82,-1874.87 2344.89,-1492.65 2112.2,-1258.8 2081.15,-1227.59 2042.21,-1201.69 2002.93,-1180.71"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2004.55,-1178.6 1996.69,-1177.45 2002.11,-1183.25 2004.55,-1178.6"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2365.65,-1598.4 2365.65,-1638 2608.16,-1638 2608.16,-1598.4 2365.65,-1598.4"/>
<text xml:space="preserve" text-anchor="start" x="2368.65" y="-1621" font-family="Arial" font-size="14.00" fill="#c9c9c9">Публикует telemetry events и service</text>
<text xml:space="preserve" text-anchor="start" x="2368.65" y="-1604.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">topics по MQTT 5.0</text>
</g>
<!-- notification&#45;channels&#45;&gt;dispatcher -->
<g id="edge18" class="edge">
<title>notification&#45;channels&#45;&gt;dispatcher</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M189.2,-179.85C189.2,-247.93 189.2,-344.2 189.2,-428.6 189.2,-1789 189.2,-1789 189.2,-1789 189.2,-1872.47 189.2,-1967.24 189.2,-2036.59"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="186.57,-2036.54 189.2,-2044.04 191.82,-2036.54 186.57,-2036.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="189.2,-1089 189.2,-1128.6 432.47,-1128.6 432.47,-1089 189.2,-1089"/>
<text xml:space="preserve" text-anchor="start" x="192.2" y="-1111.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Доставляют уведомления по alarm и</text>
<text xml:space="preserve" text-anchor="start" x="192.2" y="-1094.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">служебные уведомления</text>
</g>
</g>
</svg>
`;case"c1-system-context":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.3 (0)
 -->
<!-- Pages: 1 -->
<svg width="2657pt" height="1195pt"
 viewBox="0.00 0.00 2657.00 1195.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1180.25)">
<!-- field&#45;devices -->
<g id="node1" class="node">
<title>field&#45;devices</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="416.85,-1165.2 37.78,-1165.2 37.78,-985.2 416.85,-985.2 416.85,-1165.2"/>
<text xml:space="preserve" text-anchor="start" x="57.84" y="-1097" font-family="Arial" font-size="20.00" fill="#f0f9ff">Полевые устройства и контроллеры</text>
<text xml:space="preserve" text-anchor="start" x="152.54" y="-1076" font-family="Arial" font-size="13.00" fill="#b6ecf7">Field devices / PLC / RTU</text>
<text xml:space="preserve" text-anchor="start" x="72.29" y="-1054.4" font-family="Arial" font-size="15.00" fill="#b6ecf7">Датчики, актуаторы, PLC, RTU и локальные</text>
<text xml:space="preserve" text-anchor="start" x="98.12" y="-1036.4" font-family="Arial" font-size="15.00" fill="#b6ecf7">системы автоматизации на объекте.</text>
</g>
<!-- service&#45;engineer -->
<g id="node2" class="node">
<title>service&#45;engineer</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1150.57,-1165.2 752.06,-1165.2 752.06,-985.2 1150.57,-985.2 1150.57,-1165.2"/>
<text xml:space="preserve" text-anchor="start" x="859.63" y="-1096.2" font-family="Arial" font-size="20.00" fill="#f8fafc">Сервисный инженер</text>
<text xml:space="preserve" text-anchor="start" x="776.28" y="-1073.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">Настраивает источники данных, схему сигналов,</text>
<text xml:space="preserve" text-anchor="start" x="772.12" y="-1055.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">правила доставки и эксплуатационные параметры</text>
<text xml:space="preserve" text-anchor="start" x="811.28" y="-1037.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">edge&#45;агента и центральной платформы.</text>
</g>
<!-- operator -->
<g id="node3" class="node">
<title>operator</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1874.15,-1165.2 1506.48,-1165.2 1506.48,-985.2 1874.15,-985.2 1874.15,-1165.2"/>
<text xml:space="preserve" text-anchor="start" x="1645.86" y="-1096.2" font-family="Arial" font-size="20.00" fill="#f8fafc">Оператор</text>
<text xml:space="preserve" text-anchor="start" x="1542.37" y="-1073.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">Работает с текущим состоянием объекта,</text>
<text xml:space="preserve" text-anchor="start" x="1526.54" y="-1055.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">live&#45;панелями и событиями через центральную</text>
<text xml:space="preserve" text-anchor="start" x="1602.8" y="-1037.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">платформу мониторинга.</text>
</g>
<!-- dispatcher -->
<g id="node4" class="node">
<title>dispatcher</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="2527.49,-1165.2 2183.15,-1165.2 2183.15,-985.2 2527.49,-985.2 2527.49,-1165.2"/>
<text xml:space="preserve" text-anchor="start" x="2305.31" y="-1096.2" font-family="Arial" font-size="20.00" fill="#f8fafc">Диспетчер</text>
<text xml:space="preserve" text-anchor="start" x="2228.21" y="-1073.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">Контролирует alarm, уведомления и</text>
<text xml:space="preserve" text-anchor="start" x="2203.2" y="-1055.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">диспетчерские панели через центральную</text>
<text xml:space="preserve" text-anchor="start" x="2267.8" y="-1037.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">платформу мониторинга.</text>
</g>
<!-- edge&#45;telemetry&#45;agent -->
<g id="node5" class="node">
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
<g id="node6" class="node">
<title>monitoring&#45;alarm&#45;platform</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1874.99,-502.8 1505.65,-502.8 1505.65,-322.8 1874.99,-322.8 1874.99,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1565.28" y="-452.6" font-family="Arial" font-size="20.00" fill="#ffe0c2">Monitoring &amp; Alarm Platform</text>
<text xml:space="preserve" text-anchor="start" x="1569.29" y="-431.6" font-family="Arial" font-size="13.00" fill="#f9b27c">Cloud monitoring platform / alarm engine /</text>
<text xml:space="preserve" text-anchor="start" x="1525.7" y="-410" font-family="Arial" font-size="15.00" fill="#f9b27c">Центральная система в облаке/интернете для</text>
<text xml:space="preserve" text-anchor="start" x="1550.71" y="-392" font-family="Arial" font-size="15.00" fill="#f9b27c">приема событий, хранения телеметрии,</text>
<text xml:space="preserve" text-anchor="start" x="1527.37" y="-374" font-family="Arial" font-size="15.00" fill="#f9b27c">визуализации, alarm&#45;логики и маршрутизации</text>
<text xml:space="preserve" text-anchor="start" x="1642.39" y="-356" font-family="Arial" font-size="15.00" fill="#f9b27c">уведомлений.</text>
</g>
<!-- notification&#45;channels -->
<g id="node7" class="node">
<title>notification&#45;channels</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2311.51,-180 1933.12,-180 1933.12,0 2311.51,0 2311.51,-180"/>
<text xml:space="preserve" text-anchor="start" x="1981.24" y="-84.4" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="2025.18" y="-120.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Каналы уведомлений</text>
<text xml:space="preserve" text-anchor="start" x="2289.51" y="-84.4" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="2025.18" y="-99.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Email / SMS / Push / Webhook</text>
<text xml:space="preserve" text-anchor="start" x="2025.18" y="-78.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Email, SMS, push, webhook и другие</text>
<text xml:space="preserve" text-anchor="start" x="2025.18" y="-60.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">внешние облачные каналы доставки</text>
<text xml:space="preserve" text-anchor="start" x="2025.18" y="-42.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">тревог и служебных уведомлений.</text>
</g>
<!-- field&#45;protocol&#45;gateways -->
<g id="node8" class="node">
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
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M227.32,-985.27C227.32,-944.07 227.32,-894.96 227.32,-852.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="229.94,-852.76 227.32,-845.26 224.69,-852.76 229.94,-852.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="227.32,-902.4 227.32,-925.2 254.31,-925.2 254.31,-902.4 227.32,-902.4"/>
<text xml:space="preserve" text-anchor="start" x="230.32" y="-910.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- service&#45;engineer&#45;&gt;edge&#45;telemetry&#45;agent -->
<g id="edge2" class="edge">
<title>service&#45;engineer&#45;&gt;edge&#45;telemetry&#45;agent</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M858.6,-985.44C821.66,-945.13 782.07,-894.78 757.15,-842.4 706.96,-736.91 687.18,-603.06 679.38,-513.25"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="682,-513.07 678.77,-505.81 676.77,-513.51 682,-513.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="757.15,-732.6 757.15,-772.2 1039.32,-772.2 1039.32,-732.6 757.15,-732.6"/>
<text xml:space="preserve" text-anchor="start" x="760.15" y="-755.2" font-family="Arial" font-size="14.00" fill="#22c55e">Настраивает адаптеры, модель сигналов,</text>
<text xml:space="preserve" text-anchor="start" x="760.15" y="-738.4" font-family="Arial" font-size="14.00" fill="#22c55e">polling и доставку</text>
</g>
<!-- service&#45;engineer&#45;&gt;monitoring&#45;alarm&#45;platform -->
<g id="edge3" class="edge">
<title>service&#45;engineer&#45;&gt;monitoring&#45;alarm&#45;platform</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1035.35,-985.54C1117.82,-899.98 1248.48,-768.2 1369.48,-662.4 1430.28,-609.24 1500.94,-553.85 1560.46,-508.89"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1561.95,-511.05 1566.36,-504.44 1558.79,-506.85 1561.95,-511.05"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1369.48,-732.6 1369.48,-772.2 1663.32,-772.2 1663.32,-732.6 1369.48,-732.6"/>
<text xml:space="preserve" text-anchor="start" x="1372.48" y="-755.2" font-family="Arial" font-size="14.00" fill="#22c55e">Настраивает правила alarm, получателей и</text>
<text xml:space="preserve" text-anchor="start" x="1372.48" y="-738.4" font-family="Arial" font-size="14.00" fill="#22c55e">панели мониторинга</text>
</g>
<!-- operator&#45;&gt;monitoring&#45;alarm&#45;platform -->
<g id="edge4" class="edge">
<title>operator&#45;&gt;monitoring&#45;alarm&#45;platform</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1690.32,-985.48C1690.32,-862.52 1690.32,-641.01 1690.32,-512.81"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1692.94,-513.14 1690.32,-505.64 1687.69,-513.14 1692.94,-513.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1690.32,-732.6 1690.32,-772.2 1929.7,-772.2 1929.7,-732.6 1690.32,-732.6"/>
<text xml:space="preserve" text-anchor="start" x="1693.32" y="-755.2" font-family="Arial" font-size="14.00" fill="#22c55e">Работает с панелями мониторинга,</text>
<text xml:space="preserve" text-anchor="start" x="1693.32" y="-738.4" font-family="Arial" font-size="14.00" fill="#22c55e">событиями и alarm</text>
</g>
<!-- dispatcher&#45;&gt;monitoring&#45;alarm&#45;platform -->
<g id="edge9" class="edge">
<title>dispatcher&#45;&gt;monitoring&#45;alarm&#45;platform</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M2271.72,-985.4C2191.83,-901.16 2067.47,-771.56 1956.32,-662.4 1904.09,-611.11 1844.68,-555.35 1795.28,-509.66"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1797.27,-507.92 1789.98,-504.76 1793.7,-511.78 1797.27,-507.92"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2128.68,-732.6 2128.68,-772.2 2368.06,-772.2 2368.06,-732.6 2128.68,-732.6"/>
<text xml:space="preserve" text-anchor="start" x="2131.68" y="-755.2" font-family="Arial" font-size="14.00" fill="#22c55e">Работает с alarm, уведомлениями и</text>
<text xml:space="preserve" text-anchor="start" x="2131.68" y="-738.4" font-family="Arial" font-size="14.00" fill="#22c55e">диспетчерскими сценариями</text>
</g>
<!-- edge&#45;telemetry&#45;agent&#45;&gt;monitoring&#45;alarm&#45;platform -->
<g id="edge6" class="edge">
<title>edge&#45;telemetry&#45;agent&#45;&gt;monitoring&#45;alarm&#45;platform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M865.42,-412.8C1045.58,-412.8 1314.27,-412.8 1495.6,-412.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1495.54,-415.43 1503.04,-412.8 1495.54,-410.18 1495.54,-415.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1064.4,-415.8 1064.4,-455.4 1306.91,-455.4 1306.91,-415.8 1064.4,-415.8"/>
<text xml:space="preserve" text-anchor="start" x="1067.4" y="-438.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Публикует telemetry events и service</text>
<text xml:space="preserve" text-anchor="start" x="1067.4" y="-421.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">topics через MQTT</text>
</g>
<!-- monitoring&#45;alarm&#45;platform&#45;&gt;notification&#45;channels -->
<g id="edge7" class="edge">
<title>monitoring&#45;alarm&#45;platform&#45;&gt;notification&#45;channels</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1810.08,-322.87C1867.44,-280.27 1936.17,-229.23 1994.53,-185.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1995.81,-188.21 2000.27,-181.63 1992.68,-184 1995.81,-188.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1919.27,-240 1919.27,-262.8 2209.21,-262.8 2209.21,-240 1919.27,-240"/>
<text xml:space="preserve" text-anchor="start" x="1922.27" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Маршрутизирует уведомления и эскалации</text>
</g>
<!-- notification&#45;channels&#45;&gt;dispatcher -->
<g id="edge8" class="edge">
<title>notification&#45;channels&#45;&gt;dispatcher</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2197,-179.89C2211.14,-199.02 2225.02,-219.64 2236.32,-240 2333.64,-415.4 2359.4,-465.05 2395.32,-662.4 2414.58,-768.23 2397.61,-891.16 2380.22,-974.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2377.66,-974.41 2378.67,-982.29 2382.79,-975.49 2377.66,-974.41"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2383.16,-562.8 2383.16,-602.4 2626.43,-602.4 2626.43,-562.8 2383.16,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="2386.16" y="-585.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Доставляют уведомления по alarm и</text>
<text xml:space="preserve" text-anchor="start" x="2386.16" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">служебные уведомления</text>
</g>
<!-- field&#45;protocol&#45;gateways&#45;&gt;edge&#45;telemetry&#45;agent -->
<g id="edge5" class="edge">
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
Operator: {
  label: "Оператор"
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
Dispatcher: {
  label: "Диспетчер"
  shape: c4-person
}

Demo-stand-current-monitored-scope -> Edge-telemetry-agent: "[...]"
Field-devices -> Field-protocol-gateways: "[...]"
Notification-channels -> Dispatcher: "Доставляют уведомления по alarm и служебные уведомления"
Monitoring-alarm-platform -> Notification-channels: "Маршрутизирует уведомления и эскалации"
Field-protocol-gateways -> Edge-telemetry-agent: "[...]"
Service-engineer -> Edge-telemetry-agent: "Настраивает адаптеры, модель сигналов, polling и доставку"
Service-engineer -> Monitoring-alarm-platform: "Настраивает правила alarm, получателей и панели мониторинга"
Operator -> Monitoring-alarm-platform: "Работает с панелями мониторинга, событиями и alarm"
Dispatcher -> Monitoring-alarm-platform: "Работает с alarm, уведомлениями и диспетчерскими сценариями"
Edge-telemetry-agent -> Monitoring-alarm-platform: "Публикует telemetry events и service topics через MQTT"
`;case"c1-system-context":return`direction: down

Field-devices: {
  label: "Полевые устройства и контроллеры"
}
Service-engineer: {
  label: "Сервисный инженер"
  shape: c4-person
}
Operator: {
  label: "Оператор"
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
Dispatcher: {
  label: "Диспетчер"
  shape: c4-person
}

Field-devices -> Field-protocol-gateways: "[...]"
Field-protocol-gateways -> Edge-telemetry-agent: "[...]"
Edge-telemetry-agent -> Monitoring-alarm-platform: "Публикует telemetry events и service topics через MQTT"
Monitoring-alarm-platform -> Notification-channels: "Маршрутизирует уведомления и эскалации"
Service-engineer -> Edge-telemetry-agent: "Настраивает адаптеры, модель сигналов, polling и доставку"
Service-engineer -> Monitoring-alarm-platform: "Настраивает правила alarm, получателей и панели мониторинга"
Operator -> Monitoring-alarm-platform: "Работает с панелями мониторинга, событиями и alarm"
Notification-channels -> Dispatcher: "Доставляют уведомления по alarm и служебные уведомления"
Dispatcher -> Monitoring-alarm-platform: "Работает с alarm, уведомлениями и диспетчерскими сценариями"
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
Operator: {
  label: "Оператор"
  shape: c4-person
}
Dispatcher: {
  label: "Диспетчер"
  shape: c4-person
}
Edge-telemetry-agent: {
  label: "Edge Telemetry Agent"
}
Monitoring-alarm-platform: {
  label: "Monitoring & Alarm Platform"

  Platform-frontend: {
    label: "Platform Frontend"
  }
  Grafana: {
    label: "Grafana"
  }
  Platform-api: {
    label: "Platform API"
  }
  Mqtt-ingestion-gateway: {
    label: "MQTT Ingestion Gateway"
  }
  Keycloak: {
    label: "Keycloak"
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
Notification-channels: {
  label: "Каналы уведомлений"
}

Service-engineer -> Monitoring-alarm-platform.Grafana: "Настраивает dashboards и проверяет поток телеметрии"
Operator -> Monitoring-alarm-platform.Platform-frontend: "Работает с пользовательским web-интерфейсом платформы"
Dispatcher -> Monitoring-alarm-platform.Platform-frontend: "Работает с пользовательским web-интерфейсом платформы"
Edge-telemetry-agent -> Monitoring-alarm-platform.Mqtt-ingestion-gateway: "Публикует telemetry events и service topics по MQTT 5.0"
Monitoring-alarm-platform.Alarm-rule-engine -> Monitoring-alarm-platform.Notification-service: "Запускает доставку уведомлений"
Monitoring-alarm-platform.Alarm-rule-engine -> Monitoring-alarm-platform.Telemetry-store: "Читает контекст и записывает состояние и историю alarm"
Monitoring-alarm-platform.Mqtt-ingestion-gateway -> Monitoring-alarm-platform.Alarm-rule-engine: "Передает нормализованные события в Alarm Rule Engine"
Monitoring-alarm-platform.Platform-api -> Monitoring-alarm-platform.Alarm-rule-engine: "Читает активные alarm и управляет конфигурацией правил в Alarm Rule Engine"
Monitoring-alarm-platform.Grafana -> Monitoring-alarm-platform.Mqtt-ingestion-gateway: "Подписывается на live MQTT telemetry и service topics"
Monitoring-alarm-platform.Platform-frontend -> Monitoring-alarm-platform.Grafana: "Открывает и встраивает dashboards и live-панели"
Monitoring-alarm-platform.Platform-api -> Monitoring-alarm-platform.Keycloak: "Проверяет токены, роли и client configuration"
Monitoring-alarm-platform.Platform-frontend -> Monitoring-alarm-platform.Keycloak: "Аутентифицирует пользователя и получает OIDC tokens"
Monitoring-alarm-platform.Mqtt-ingestion-gateway -> Monitoring-alarm-platform.Telemetry-store: "Сохраняет canonical events и служебные события"
Monitoring-alarm-platform.Platform-api -> Monitoring-alarm-platform.Telemetry-store: "Читает телеметрию, историю и временные линии alarm"
Monitoring-alarm-platform.Platform-frontend -> Monitoring-alarm-platform.Platform-api: "Запрашивает состояние alarm, историю событий и прикладные данные платформы"
Monitoring-alarm-platform.Notification-service -> Notification-channels: "Отправляет email, SMS, push и webhook-уведомления"
Service-engineer -> Edge-telemetry-agent: "Настраивает адаптеры, модель сигналов, polling и доставку"
Notification-channels -> Dispatcher: "Доставляют уведомления по alarm и служебные уведомления"
`;case"c2-field-devices":return`direction: down

Field-devices: {
  label: "Полевые устройства и контроллеры"

  Knx-temperature-sensor: {
    label: "knx-temperature-sensor"
  }
  Knx-switch: {
    label: "knx-switch"
  }
}
Field-protocol-gatewaysKnx-router: {
  label: "KNX Segment"
}

Field-devices.Knx-temperature-sensor -> Field-protocol-gatewaysKnx-router: "Передают телеграммы, состояния и команды в KNX-сегменте"
Field-devices.Knx-switch -> Field-protocol-gatewaysKnx-router: "Передает телеграммы состояния и управления в KNX-сегменте"
`;case"c2-field-protocol-gateways":return`direction: down

Field-devicesKnx-temperature-sensor: {
  label: "knx-temperature-sensor"
}
Field-devicesKnx-switch: {
  label: "knx-switch"
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
Edge-telemetry-agentCollector-runtime: {
  label: "Collector Runtime"
}

Field-devicesKnx-temperature-sensor -> Field-protocol-gateways.Knx-router: "Передают телеграммы, состояния и команды в KNX-сегменте"
Field-devicesKnx-switch -> Field-protocol-gateways.Knx-router: "Передает телеграммы состояния и управления в KNX-сегменте"
Field-protocol-gateways.Knx-router -> Edge-telemetry-agentCollector-runtime: "Экспонирует group address и телеграммы через KNX/IP"
Field-protocol-gateways.Modbus-gateway -> Edge-telemetry-agentCollector-runtime: "Экспонирует registers, coils и дискретные значения через Modbus"
Field-protocol-gateways.Opc-ua-gateway -> Edge-telemetry-agentCollector-runtime: "Экспонирует nodes, subscriptions и значения через OPC UA"
`;default:throw new Error("Unknown viewId: "+e)}}const d5=Object.freeze(Object.defineProperty({__proto__:null,d2Source:c5},Symbol.toStringTag,{value:"Module"}));export{D5 as $,O5 as A,P5 as B,eg as C,ke as D,Zt as E,v5 as F,S5 as G,Hs as H,ls as I,Bt as J,q5 as K,ro as L,w4 as M,br as N,Um as O,Xs as P,Qy as Q,Ee as R,rs as S,ei as T,A5 as U,I5 as V,Gt as W,L4 as X,K5 as Y,Wy as Z,_m as _,Ie as a,R4 as a0,U5 as a1,X5 as a2,j5 as a3,Z5 as a4,$5 as a5,H5 as a6,G5 as b,L5 as c,w5 as d,T5 as e,To as f,z5 as g,Jm as h,C5 as i,Ms as j,xo as k,Tt as l,cs as m,ng as n,yn as o,Pt as p,N5 as q,M5 as r,R5 as s,k5 as t,Ym as u,ll as v,E5 as w,z as x,F5 as y,an as z};
