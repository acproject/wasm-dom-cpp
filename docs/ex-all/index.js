var b;b||(b=typeof Module !== 'undefined' ? Module : {});var g={},k;for(k in b)b.hasOwnProperty(k)&&(g[k]=b[k]);var m=[],n="./this.program";function q(a,c){throw c;}var r="";document.currentScript&&(r=document.currentScript.src);r=0!==r.indexOf("blob:")?r.substr(0,r.lastIndexOf("/")+1):"";var aa=b.print||console.log.bind(console),t=b.printErr||console.warn.bind(console);for(k in g)g.hasOwnProperty(k)&&(b[k]=g[k]);g=null;b.arguments&&(m=b.arguments);b.thisProgram&&(n=b.thisProgram);
b.quit&&(q=b.quit);var ba={"f64-rem":function(a,c){return a%c},"debugger":function(){}},u=0,v;b.wasmBinary&&(v=b.wasmBinary);"object"!==typeof WebAssembly&&t("no native wasm support detected");var w,x=!1,y="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function z(a){if(a){for(var c=A,d=a+void 0,e=a;c[e]&&!(e>=d);)++e;if(16<e-a&&c.subarray&&y)a=y.decode(c.subarray(a,e));else{for(d="";a<e;){var f=c[a++];if(f&128){var h=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var l=c[a++]&63;f=224==(f&240)?(f&15)<<12|h<<6|l:(f&7)<<18|h<<12|l<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function B(a,c,d,e){if(0<e){e=d+e-1;for(var f=0;f<a.length;++f){var h=a.charCodeAt(f);if(55296<=h&&57343>=h){var l=a.charCodeAt(++f);h=65536+((h&1023)<<10)|l&1023}if(127>=h){if(d>=e)break;c[d++]=h}else{if(2047>=h){if(d+1>=e)break;c[d++]=192|h>>6}else{if(65535>=h){if(d+2>=e)break;c[d++]=224|h>>12}else{if(d+3>=e)break;c[d++]=240|h>>18;c[d++]=128|h>>12&63}c[d++]=128|h>>6&63}c[d++]=128|h&63}}c[d]=0}}
function C(a){for(var c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++d)&1023);127>=e?++c:c=2047>=e?c+2:65535>=e?c+3:c+4}return c}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function D(a){var c=C(a)+1,d=E(c);B(a,F,d,c);return d}function G(a){0<a%65536&&(a+=65536-a%65536);return a}var H,F,A,I;
function J(){b.HEAP8=F=new Int8Array(H);b.HEAP16=new Int16Array(H);b.HEAP32=I=new Int32Array(H);b.HEAPU8=A=new Uint8Array(H);b.HEAPU16=new Uint16Array(H);b.HEAPU32=new Uint32Array(H);b.HEAPF32=new Float32Array(H);b.HEAPF64=new Float64Array(H)}var K=b.TOTAL_MEMORY||16777216;b.wasmMemory?w=b.wasmMemory:w=new WebAssembly.Memory({initial:K/65536});w&&(H=w.buffer);K=H.byteLength;J();I[1652]=5249520;
function L(a){for(;0<a.length;){var c=a.shift();if("function"==typeof c)c();else{var d=c.C;"number"===typeof d?void 0===c.B?b.dynCall_v(d):b.dynCall_vi(d,c.B):d(void 0===c.B?null:c.B)}}}var M=[],N=[],ca=[],O=[];function da(){var a=b.preRun.shift();M.unshift(a)}var P=0,Q=null,R=null;b.preloadedImages={};b.preloadedAudios={};function S(){var a=T;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var T="index.wasm";
if(!S()){var U=T;T=b.locateFile?b.locateFile(U,r):r+U}function V(){try{if(v)return new Uint8Array(v);throw"both async and sync fetching of the wasm failed";}catch(a){W(a)}}function ea(){return v||"function"!==typeof fetch?new Promise(function(a){a(V())}):fetch(T,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+T+"'";return a.arrayBuffer()}).catch(function(){return V()})}
function fa(a){function c(a){b.asm=a.exports;P--;b.monitorRunDependencies&&b.monitorRunDependencies(P);0==P&&(null!==Q&&(clearInterval(Q),Q=null),R&&(a=R,R=null,a()))}function d(a){c(a.instance)}function e(a){return ea().then(function(a){return WebAssembly.instantiate(a,f)}).then(a,function(a){t("failed to asynchronously prepare wasm: "+a);W(a)})}var f={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:ba};P++;b.monitorRunDependencies&&b.monitorRunDependencies(P);if(b.instantiateWasm)try{return b.instantiateWasm(f,
c)}catch(h){return t("Module.instantiateWasm callback failed with error: "+h),!1}(function(){if(v||"function"!==typeof WebAssembly.instantiateStreaming||S()||"function"!==typeof fetch)return e(d);fetch(T,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,f).then(d,function(a){t("wasm streaming compile failed: "+a);t("falling back to ArrayBuffer instantiation");e(d)})})})();return{}}
b.asm=function(a,c){c.memory=w;c.table=new WebAssembly.Table({initial:48,maximum:48,element:"anyfunc"});c.__memory_base=1024;c.__table_base=0;return fa(c)};
var X=[function(a,c,d,e){b.A[z(a)].fillText(z(c),d,e)},function(a,c,d,e,f){b.A[z(a)].clearRect(c,d,e,f)},function(a,c){b.A[z(a)].fillStyle=z(c)},function(a,c,d,e,f){b.A[z(a)].fillRect(c,d,e,f)},function(a,c,d,e,f){b.A[z(a)].strokeRect(c,d,e,f)},function(a,c,d,e,f){b.A[z(a)].fillText(z(c),d,e,f)},function(a,c,d,e){b.A[z(a)].strokeText(z(c),d,e)},function(a,c,d,e,f){b.A[z(a)].strokeText(z(c),d,e,f)},function(a,c){b.A[z(a)].lineWidth=c},function(a){return b.A[z(a)].lineWidth},function(a){b.A[z(a)].beginPath()},
function(a,c,d){b.A[z(a)].moveTo(c,d)},function(a,c,d){b.A[z(a)].lineTo(c,d)},function(a){b.A[z(a)].stroke()},function(a,c){b.A[z(a)].lineCap=z(c)},function(a){a=b.A[z(a)].lineCap;var c=C(a)+1,d=ha(c);B(a,A,d,c);return d},function(a,c){b.A[z(a)].height=c},function(a,c){b.A[z(a)].width=c},function(a){return b.A[z(a)].width},function(a){return b.A[z(a)].height},function(a,c){b.A[z(a)].strokeStyle=z(c)},function(a,c){b.A[z(a)].font=z(c)},function(a,c,d){b.A[z(a)].translate(c,d)},function(a){"undefined"==
typeof b.A&&(b.A={});a=z(a);b.A[a]=document.querySelector(a)},function(a){"undefined"==typeof b.A&&(b.A={});a=z(a);b.A[a+"_CanvasRenderingContext2D"]=document.querySelector(a).getContext("2d")}];N.push({C:function(){ia()}});function Y(){return F.length}function ja(a){a=G(a);var c=H.byteLength;try{return-1!==w.grow((a-c)/65536)?(H=w.buffer,!0):!1}catch(d){return!1}}
var ka=b.asm({},{l:W,h:function(a){u=a},d:function(){return u},n:function(a){b.___errno_location&&(I[b.___errno_location()>>2]=a);return a},k:function(){b.abort()},m:function(a,c){return X[a](c)},c:function(a,c){return X[a](c)},i:function(a,c,d){return X[a](c,d)},e:function(a,c,d,e){return X[a](c,d,e)},j:function(a,c,d,e,f,h){return X[a](c,d,e,f,h)},g:function(a,c,d){return X[a](c,d)},f:function(a,c,d,e,f){return X[a](c,d,e,f)},o:function(a,c,d,e,f,h){return X[a](c,d,e,f,h)},s:Y,r:function(a,c,d){A.set(A.subarray(c,
c+d),a)},q:function(a){if(2147418112<a)return!1;for(var c=Math.max(Y(),16777216);c<a;)536870912>=c?c=G(2*c):c=Math.min(G((3*c+2147483648)/4),2147418112);if(!ja(c))return!1;J();return!0},p:function(){W("OOM")},a:6624,b:6608},H);b.asm=ka;var ia=b.__GLOBAL__sub_I_wasm_canvas_cpp_test_cpp=function(){return b.asm.t.apply(null,arguments)};b._main=function(){return b.asm.u.apply(null,arguments)};
var ha=b._malloc=function(){return b.asm.v.apply(null,arguments)},E=b.stackAlloc=function(){return b.asm.y.apply(null,arguments)};b.dynCall_v=function(){return b.asm.w.apply(null,arguments)};b.dynCall_vi=function(){return b.asm.x.apply(null,arguments)};b.asm=ka;function la(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}R=function ma(){b.calledRun||Z();b.calledRun||(R=ma)};
function Z(a){function c(){if(!b.calledRun&&(b.calledRun=!0,!x)){L(N);L(ca);if(b.onRuntimeInitialized)b.onRuntimeInitialized();if(na){var c=a;c=c||[];var e=c.length+1,f=E(4*(e+1));I[f>>2]=D(n);for(var h=1;h<e;h++)I[(f>>2)+h]=D(c[h-1]);I[(f>>2)+e]=0;try{var l=b._main(e,f);if(!b.noExitRuntime||0!==l){if(!b.noExitRuntime&&(x=!0,b.onExit))b.onExit(l);q(l,new la(l))}}catch(p){p instanceof la||("SimulateInfiniteLoop"==p?b.noExitRuntime=!0:((c=p)&&"object"===typeof p&&p.stack&&(c=[p,p.stack]),t("exception thrown: "+
c),q(1,p)))}finally{}}if(b.postRun)for("function"==typeof b.postRun&&(b.postRun=[b.postRun]);b.postRun.length;)c=b.postRun.shift(),O.unshift(c);L(O)}}a=a||m;if(!(0<P)){if(b.preRun)for("function"==typeof b.preRun&&(b.preRun=[b.preRun]);b.preRun.length;)da();L(M);0<P||b.calledRun||(b.setStatus?(b.setStatus("Running..."),setTimeout(function(){setTimeout(function(){b.setStatus("")},1);c()},1)):c())}}b.run=Z;
function W(a){if(b.onAbort)b.onAbort(a);aa(a);t(a);x=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}b.abort=W;if(b.preInit)for("function"==typeof b.preInit&&(b.preInit=[b.preInit]);0<b.preInit.length;)b.preInit.pop()();var na=!0;b.noInitialRun&&(na=!1);b.noExitRuntime=!0;Z();