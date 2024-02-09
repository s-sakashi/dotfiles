"use strict";var Sn=Object.create;var M=Object.defineProperty;var xn=Object.getOwnPropertyDescriptor;var wn=Object.getOwnPropertyNames;var bn=Object.getPrototypeOf,Tn=Object.prototype.hasOwnProperty;var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),vn=(e,t)=>{for(var r in t)M(e,r,{get:t[r],enumerable:!0})},Pe=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of wn(t))!Tn.call(e,o)&&o!==r&&M(e,o,{get:()=>t[o],enumerable:!(n=xn(t,o))||n.enumerable});return e};var Ce=(e,t,r)=>(r=e!=null?Sn(bn(e)):{},Pe(t||!e||!e.__esModule?M(r,"default",{value:e,enumerable:!0}):r,e)),In=e=>Pe(M({},"__esModule",{value:!0}),e);var Re=c((To,Oe)=>{Oe.exports=ke;ke.sync=Pn;var Ae=require("fs");function En(e,t){var r=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!r||(r=r.split(";"),r.indexOf("")!==-1))return!0;for(var n=0;n<r.length;n++){var o=r[n].toLowerCase();if(o&&e.substr(-o.length).toLowerCase()===o)return!0}return!1}function Ge(e,t,r){return!e.isSymbolicLink()&&!e.isFile()?!1:En(t,r)}function ke(e,t,r){Ae.stat(e,function(n,o){r(n,n?!1:Ge(o,e,t))})}function Pn(e,t){return Ge(Ae.statSync(e),e,t)}});var Ue=c((vo,$e)=>{$e.exports=Ne;Ne.sync=Cn;var qe=require("fs");function Ne(e,t,r){qe.stat(e,function(n,o){r(n,n?!1:_e(o,t))})}function Cn(e,t){return _e(qe.statSync(e),t)}function _e(e,t){return e.isFile()&&An(e,t)}function An(e,t){var r=e.mode,n=e.uid,o=e.gid,s=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),u=parseInt("010",8),l=parseInt("001",8),f=a|u,y=r&l||r&u&&o===i||r&a&&n===s||r&f&&s===0;return y}});var Be=c((Eo,Le)=>{var Io=require("fs"),j;process.platform==="win32"||global.TESTING_WINDOWS?j=Re():j=Ue();Le.exports=te;te.sync=Gn;function te(e,t,r){if(typeof t=="function"&&(r=t,t={}),!r){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(n,o){te(e,t||{},function(s,i){s?o(s):n(i)})})}j(e,t||{},function(n,o){n&&(n.code==="EACCES"||t&&t.ignoreErrors)&&(n=null,o=!1),r(n,o)})}function Gn(e,t){try{return j.sync(e,t||{})}catch(r){if(t&&t.ignoreErrors||r.code==="EACCES")return!1;throw r}}});var We=c((Po,He)=>{var E=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",Me=require("path"),kn=E?";":":",je=Be(),De=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),Fe=(e,t)=>{let r=t.colon||kn,n=e.match(/\//)||E&&e.match(/\\/)?[""]:[...E?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)],o=E?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",s=E?o.split(r):[""];return E&&e.indexOf(".")!==-1&&s[0]!==""&&s.unshift(""),{pathEnv:n,pathExt:s,pathExtExe:o}},Xe=(e,t,r)=>{typeof t=="function"&&(r=t,t={}),t||(t={});let{pathEnv:n,pathExt:o,pathExtExe:s}=Fe(e,t),i=[],a=l=>new Promise((f,y)=>{if(l===n.length)return t.all&&i.length?f(i):y(De(e));let m=n[l],g=/^".*"$/.test(m)?m.slice(1,-1):m,S=Me.join(g,e),x=!g&&/^\.[\\\/]/.test(e)?e.slice(0,2)+S:S;f(u(x,l,0))}),u=(l,f,y)=>new Promise((m,g)=>{if(y===o.length)return m(a(f+1));let S=o[y];je(l+S,{pathExt:s},(x,I)=>{if(!x&&I)if(t.all)i.push(l+S);else return m(l+S);return m(u(l,f,y+1))})});return r?a(0).then(l=>r(null,l),r):a(0)},On=(e,t)=>{t=t||{};let{pathEnv:r,pathExt:n,pathExtExe:o}=Fe(e,t),s=[];for(let i=0;i<r.length;i++){let a=r[i],u=/^".*"$/.test(a)?a.slice(1,-1):a,l=Me.join(u,e),f=!u&&/^\.[\\\/]/.test(e)?e.slice(0,2)+l:l;for(let y=0;y<n.length;y++){let m=f+n[y];try{if(je.sync(m,{pathExt:o}))if(t.all)s.push(m);else return m}catch{}}}if(t.all&&s.length)return s;if(t.nothrow)return null;throw De(e)};He.exports=Xe;Xe.sync=On});var re=c((Co,ne)=>{"use strict";var Ke=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(n=>n.toUpperCase()==="PATH")||"Path"};ne.exports=Ke;ne.exports.default=Ke});var Qe=c((Ao,Ye)=>{"use strict";var ze=require("path"),Rn=We(),qn=re();function Ve(e,t){let r=e.options.env||process.env,n=process.cwd(),o=e.options.cwd!=null,s=o&&process.chdir!==void 0&&!process.chdir.disabled;if(s)try{process.chdir(e.options.cwd)}catch{}let i;try{i=Rn.sync(e.command,{path:r[qn({env:r})],pathExt:t?ze.delimiter:void 0})}catch{}finally{s&&process.chdir(n)}return i&&(i=ze.resolve(o?e.options.cwd:"",i)),i}function Nn(e){return Ve(e)||Ve(e,!0)}Ye.exports=Nn});var Ze=c((Go,se)=>{"use strict";var oe=/([()\][%!^"`<>&|;, *?])/g;function _n(e){return e=e.replace(oe,"^$1"),e}function $n(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(oe,"^$1"),t&&(e=e.replace(oe,"^$1")),e}se.exports.command=_n;se.exports.argument=$n});var et=c((ko,Je)=>{"use strict";Je.exports=/^#!(.*)/});var nt=c((Oo,tt)=>{"use strict";var Un=et();tt.exports=(e="")=>{let t=e.match(Un);if(!t)return null;let[r,n]=t[0].replace(/#! ?/,"").split(" "),o=r.split("/").pop();return o==="env"?n:n?`${o} ${n}`:o}});var ot=c((Ro,rt)=>{"use strict";var ie=require("fs"),Ln=nt();function Bn(e){let r=Buffer.alloc(150),n;try{n=ie.openSync(e,"r"),ie.readSync(n,r,0,150,0),ie.closeSync(n)}catch{}return Ln(r.toString())}rt.exports=Bn});var ct=c((qo,at)=>{"use strict";var Mn=require("path"),st=Qe(),it=Ze(),jn=ot(),Dn=process.platform==="win32",Fn=/\.(?:com|exe)$/i,Xn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Hn(e){e.file=st(e);let t=e.file&&jn(e.file);return t?(e.args.unshift(e.file),e.command=t,st(e)):e.file}function Wn(e){if(!Dn)return e;let t=Hn(e),r=!Fn.test(t);if(e.options.forceShell||r){let n=Xn.test(t);e.command=Mn.normalize(e.command),e.command=it.command(e.command),e.args=e.args.map(s=>it.argument(s,n));let o=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${o}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Kn(e,t,r){t&&!Array.isArray(t)&&(r=t,t=null),t=t?t.slice(0):[],r=Object.assign({},r);let n={command:e,args:t,options:r,file:void 0,original:{command:e,args:t}};return r.shell?n:Wn(n)}at.exports=Kn});var dt=c((No,lt)=>{"use strict";var ae=process.platform==="win32";function ce(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function zn(e,t){if(!ae)return;let r=e.emit;e.emit=function(n,o){if(n==="exit"){let s=ut(o,t,"spawn");if(s)return r.call(e,"error",s)}return r.apply(e,arguments)}}function ut(e,t){return ae&&e===1&&!t.file?ce(t.original,"spawn"):null}function Vn(e,t){return ae&&e===1&&!t.file?ce(t.original,"spawnSync"):null}lt.exports={hookChildProcess:zn,verifyENOENT:ut,verifyENOENTSync:Vn,notFoundError:ce}});var mt=c((_o,P)=>{"use strict";var ft=require("child_process"),ue=ct(),le=dt();function pt(e,t,r){let n=ue(e,t,r),o=ft.spawn(n.command,n.args,n.options);return le.hookChildProcess(o,n),o}function Yn(e,t,r){let n=ue(e,t,r),o=ft.spawnSync(n.command,n.args,n.options);return o.error=o.error||le.verifyENOENTSync(o.status,n),o}P.exports=pt;P.exports.spawn=pt;P.exports.sync=Yn;P.exports._parse=ue;P.exports._enoent=le});var yt=c(($o,ht)=>{"use strict";ht.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),r=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===r&&(e=e.slice(0,e.length-1)),e}});var xt=c((Uo,N)=>{"use strict";var q=require("path"),gt=re(),St=e=>{e={cwd:process.cwd(),path:process.env[gt()],execPath:process.execPath,...e};let t,r=q.resolve(e.cwd),n=[];for(;t!==r;)n.push(q.join(r,"node_modules/.bin")),t=r,r=q.resolve(r,"..");let o=q.resolve(e.cwd,e.execPath,"..");return n.push(o),n.concat(e.path).join(q.delimiter)};N.exports=St;N.exports.default=St;N.exports.env=e=>{e={env:process.env,...e};let t={...e.env},r=gt({env:t});return e.path=t[r],t[r]=N.exports(e),t}});var bt=c((Lo,de)=>{"use strict";var wt=(e,t)=>{for(let r of Reflect.ownKeys(t))Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));return e};de.exports=wt;de.exports.default=wt});var vt=c((Bo,F)=>{"use strict";var Qn=bt(),D=new WeakMap,Tt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let r,n=0,o=e.displayName||e.name||"<anonymous>",s=function(...i){if(D.set(s,++n),n===1)r=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${o}\` can only be called once`);return r};return Qn(s,e),D.set(s,n),s};F.exports=Tt;F.exports.default=Tt;F.exports.callCount=e=>{if(!D.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return D.get(e)}});var It=c(X=>{"use strict";Object.defineProperty(X,"__esModule",{value:!0});X.SIGNALS=void 0;var Zn=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];X.SIGNALS=Zn});var fe=c(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.SIGRTMAX=C.getRealtimeSignals=void 0;var Jn=function(){let e=Pt-Et+1;return Array.from({length:e},er)};C.getRealtimeSignals=Jn;var er=function(e,t){return{name:`SIGRT${t+1}`,number:Et+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},Et=34,Pt=64;C.SIGRTMAX=Pt});var Ct=c(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.getSignals=void 0;var tr=require("os"),nr=It(),rr=fe(),or=function(){let e=(0,rr.getRealtimeSignals)();return[...nr.SIGNALS,...e].map(sr)};H.getSignals=or;var sr=function({name:e,number:t,description:r,action:n,forced:o=!1,standard:s}){let{signals:{[e]:i}}=tr.constants,a=i!==void 0;return{name:e,number:a?i:t,description:r,supported:a,action:n,forced:o,standard:s}}});var Gt=c(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.signalsByNumber=A.signalsByName=void 0;var ir=require("os"),At=Ct(),ar=fe(),cr=function(){return(0,At.getSignals)().reduce(ur,{})},ur=function(e,{name:t,number:r,description:n,supported:o,action:s,forced:i,standard:a}){return{...e,[t]:{name:t,number:r,description:n,supported:o,action:s,forced:i,standard:a}}},lr=cr();A.signalsByName=lr;var dr=function(){let e=(0,At.getSignals)(),t=ar.SIGRTMAX+1,r=Array.from({length:t},(n,o)=>fr(o,e));return Object.assign({},...r)},fr=function(e,t){let r=pr(e,t);if(r===void 0)return{};let{name:n,description:o,supported:s,action:i,forced:a,standard:u}=r;return{[e]:{name:n,number:e,description:o,supported:s,action:i,forced:a,standard:u}}},pr=function(e,t){let r=t.find(({name:n})=>ir.constants.signals[n]===e);return r!==void 0?r:t.find(n=>n.number===e)},mr=dr();A.signalsByNumber=mr});var Ot=c((Xo,kt)=>{"use strict";var{signalsByName:hr}=Gt(),yr=({timedOut:e,timeout:t,errorCode:r,signal:n,signalDescription:o,exitCode:s,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":r!==void 0?`failed with ${r}`:n!==void 0?`was killed with ${n} (${o})`:s!==void 0?`failed with exit code ${s}`:"failed",gr=({stdout:e,stderr:t,all:r,error:n,signal:o,exitCode:s,command:i,escapedCommand:a,timedOut:u,isCanceled:l,killed:f,parsed:{options:{timeout:y}}})=>{s=s===null?void 0:s,o=o===null?void 0:o;let m=o===void 0?void 0:hr[o].description,g=n&&n.code,x=`Command ${yr({timedOut:u,timeout:y,errorCode:g,signal:o,signalDescription:m,exitCode:s,isCanceled:l})}: ${i}`,I=Object.prototype.toString.call(n)==="[object Error]",L=I?`${x}
${n.message}`:x,B=[L,t,e].filter(Boolean).join(`
`);return I?(n.originalMessage=n.message,n.message=B):n=new Error(B),n.shortMessage=L,n.command=i,n.escapedCommand=a,n.exitCode=s,n.signal=o,n.signalDescription=m,n.stdout=e,n.stderr=t,r!==void 0&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=!!u,n.isCanceled=l,n.killed=f&&!u,n};kt.exports=gr});var qt=c((Ho,pe)=>{"use strict";var W=["stdin","stdout","stderr"],Sr=e=>W.some(t=>e[t]!==void 0),Rt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return W.map(n=>e[n]);if(Sr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${W.map(n=>`\`${n}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let r=Math.max(t.length,W.length);return Array.from({length:r},(n,o)=>t[o])};pe.exports=Rt;pe.exports.node=e=>{let t=Rt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var Nt=c((Wo,K)=>{K.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&K.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&K.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Bt=c((Ko,O)=>{var d=global.process,b=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};b(d)?(_t=require("assert"),G=Nt(),$t=/^win/i.test(d.platform),_=require("events"),typeof _!="function"&&(_=_.EventEmitter),d.__signal_exit_emitter__?p=d.__signal_exit_emitter__:(p=d.__signal_exit_emitter__=new _,p.count=0,p.emitted={}),p.infinite||(p.setMaxListeners(1/0),p.infinite=!0),O.exports=function(e,t){if(!b(global.process))return function(){};_t.equal(typeof e,"function","a callback must be provided for exit handler"),k===!1&&me();var r="exit";t&&t.alwaysLast&&(r="afterexit");var n=function(){p.removeListener(r,e),p.listeners("exit").length===0&&p.listeners("afterexit").length===0&&z()};return p.on(r,e),n},z=function(){!k||!b(global.process)||(k=!1,G.forEach(function(t){try{d.removeListener(t,V[t])}catch{}}),d.emit=Y,d.reallyExit=he,p.count-=1)},O.exports.unload=z,T=function(t,r,n){p.emitted[t]||(p.emitted[t]=!0,p.emit(t,r,n))},V={},G.forEach(function(e){V[e]=function(){if(b(global.process)){var r=d.listeners(e);r.length===p.count&&(z(),T("exit",null,e),T("afterexit",null,e),$t&&e==="SIGHUP"&&(e="SIGINT"),d.kill(d.pid,e))}}}),O.exports.signals=function(){return G},k=!1,me=function(){k||!b(global.process)||(k=!0,p.count+=1,G=G.filter(function(t){try{return d.on(t,V[t]),!0}catch{return!1}}),d.emit=Lt,d.reallyExit=Ut)},O.exports.load=me,he=d.reallyExit,Ut=function(t){b(global.process)&&(d.exitCode=t||0,T("exit",d.exitCode,null),T("afterexit",d.exitCode,null),he.call(d,d.exitCode))},Y=d.emit,Lt=function(t,r){if(t==="exit"&&b(global.process)){r!==void 0&&(d.exitCode=r);var n=Y.apply(this,arguments);return T("exit",d.exitCode,null),T("afterexit",d.exitCode,null),n}else return Y.apply(this,arguments)}):O.exports=function(){return function(){}};var _t,G,$t,_,p,z,T,V,k,me,he,Ut,Y,Lt});var jt=c((zo,Mt)=>{"use strict";var xr=require("os"),wr=Bt(),br=1e3*5,Tr=(e,t="SIGTERM",r={})=>{let n=e(t);return vr(e,t,r,n),n},vr=(e,t,r,n)=>{if(!Ir(t,r,n))return;let o=Pr(r),s=setTimeout(()=>{e("SIGKILL")},o);s.unref&&s.unref()},Ir=(e,{forceKillAfterTimeout:t},r)=>Er(e)&&t!==!1&&r,Er=e=>e===xr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Pr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return br;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Cr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Ar=(e,t,r)=>{e.kill(t),r(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Gr=(e,{timeout:t,killSignal:r="SIGTERM"},n)=>{if(t===0||t===void 0)return n;let o,s=new Promise((a,u)=>{o=setTimeout(()=>{Ar(e,r,u)},t)}),i=n.finally(()=>{clearTimeout(o)});return Promise.race([s,i])},kr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Or=async(e,{cleanup:t,detached:r},n)=>{if(!t||r)return n;let o=wr(()=>{e.kill()});return n.finally(()=>{o()})};Mt.exports={spawnedKill:Tr,spawnedCancel:Cr,setupTimeout:Gr,validateTimeout:kr,setExitHandler:Or}});var Ft=c((Vo,Dt)=>{"use strict";var w=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";w.writable=e=>w(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";w.readable=e=>w(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";w.duplex=e=>w.writable(e)&&w.readable(e);w.transform=e=>w.duplex(e)&&typeof e._transform=="function";Dt.exports=w});var Ht=c((Yo,Xt)=>{"use strict";var{PassThrough:Rr}=require("stream");Xt.exports=e=>{e={...e};let{array:t}=e,{encoding:r}=e,n=r==="buffer",o=!1;t?o=!(r||n):r=r||"utf8",n&&(r=null);let s=new Rr({objectMode:o});r&&s.setEncoding(r);let i=0,a=[];return s.on("data",u=>{a.push(u),o?i=a.length:i+=u.length}),s.getBufferedValue=()=>t?a:n?Buffer.concat(a,i):a.join(""),s.getBufferedLength=()=>i,s}});var Wt=c((Qo,$)=>{"use strict";var{constants:qr}=require("buffer"),Nr=require("stream"),{promisify:_r}=require("util"),$r=Ht(),Ur=_r(Nr.pipeline),Q=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function ye(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:r}=t,n=$r(t);return await new Promise((o,s)=>{let i=a=>{a&&n.getBufferedLength()<=qr.MAX_LENGTH&&(a.bufferedData=n.getBufferedValue()),s(a)};(async()=>{try{await Ur(e,n),o()}catch(a){i(a)}})(),n.on("data",()=>{n.getBufferedLength()>r&&i(new Q)})}),n.getBufferedValue()}$.exports=ye;$.exports.buffer=(e,t)=>ye(e,{...t,encoding:"buffer"});$.exports.array=(e,t)=>ye(e,{...t,array:!0});$.exports.MaxBufferError=Q});var zt=c((Zo,Kt)=>{"use strict";var{PassThrough:Lr}=require("stream");Kt.exports=function(){var e=[],t=new Lr({objectMode:!0});return t.setMaxListeners(0),t.add=r,t.isEmpty=n,t.on("unpipe",o),Array.prototype.slice.call(arguments).forEach(r),t;function r(s){return Array.isArray(s)?(s.forEach(r),this):(e.push(s),s.once("end",o.bind(null,s)),s.once("error",t.emit.bind(t,"error")),s.pipe(t,{end:!1}),this)}function n(){return e.length==0}function o(s){e=e.filter(function(i){return i!==s}),!e.length&&t.readable&&t.end()}}});var Zt=c((Jo,Qt)=>{"use strict";var Yt=Ft(),Vt=Wt(),Br=zt(),Mr=(e,t)=>{t===void 0||e.stdin===void 0||(Yt(t)?t.pipe(e.stdin):e.stdin.end(t))},jr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let r=Br();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r},ge=async(e,t)=>{if(e){e.destroy();try{return await t}catch(r){return r.bufferedData}}},Se=(e,{encoding:t,buffer:r,maxBuffer:n})=>{if(!(!e||!r))return t?Vt(e,{encoding:t,maxBuffer:n}):Vt.buffer(e,{maxBuffer:n})},Dr=async({stdout:e,stderr:t,all:r},{encoding:n,buffer:o,maxBuffer:s},i)=>{let a=Se(e,{encoding:n,buffer:o,maxBuffer:s}),u=Se(t,{encoding:n,buffer:o,maxBuffer:s}),l=Se(r,{encoding:n,buffer:o,maxBuffer:s*2});try{return await Promise.all([i,a,u,l])}catch(f){return Promise.all([{error:f,signal:f.signal,timedOut:f.timedOut},ge(e,a),ge(t,u),ge(r,l)])}},Fr=({input:e})=>{if(Yt(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};Qt.exports={handleInput:Mr,makeAllStream:jr,getSpawnedResult:Dr,validateInputSync:Fr}});var en=c((es,Jt)=>{"use strict";var Xr=(async()=>{})().constructor.prototype,Hr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Xr,e)]),Wr=(e,t)=>{for(let[r,n]of Hr){let o=typeof t=="function"?(...s)=>Reflect.apply(n.value,t(),s):n.value.bind(t);Reflect.defineProperty(e,r,{...n,value:o})}return e},Kr=e=>new Promise((t,r)=>{e.on("exit",(n,o)=>{t({exitCode:n,signal:o})}),e.on("error",n=>{r(n)}),e.stdin&&e.stdin.on("error",n=>{r(n)})});Jt.exports={mergePromise:Wr,getSpawnedPromise:Kr}});var rn=c((ts,nn)=>{"use strict";var tn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],zr=/^[\w.-]+$/,Vr=/"/g,Yr=e=>typeof e!="string"||zr.test(e)?e:`"${e.replace(Vr,'\\"')}"`,Qr=(e,t)=>tn(e,t).join(" "),Zr=(e,t)=>tn(e,t).map(r=>Yr(r)).join(" "),Jr=/ +/g,eo=e=>{let t=[];for(let r of e.trim().split(Jr)){let n=t[t.length-1];n&&n.endsWith("\\")?t[t.length-1]=`${n.slice(0,-1)} ${r}`:t.push(r)}return t};nn.exports={joinCommand:Qr,getEscapedCommand:Zr,parseCommand:eo}});var dn=c((ns,R)=>{"use strict";var to=require("path"),xe=require("child_process"),no=mt(),ro=yt(),oo=xt(),so=vt(),Z=Ot(),sn=qt(),{spawnedKill:io,spawnedCancel:ao,setupTimeout:co,validateTimeout:uo,setExitHandler:lo}=jt(),{handleInput:fo,getSpawnedResult:po,makeAllStream:mo,validateInputSync:ho}=Zt(),{mergePromise:on,getSpawnedPromise:yo}=en(),{joinCommand:an,parseCommand:cn,getEscapedCommand:un}=rn(),go=1e3*1e3*100,So=({env:e,extendEnv:t,preferLocal:r,localDir:n,execPath:o})=>{let s=t?{...process.env,...e}:e;return r?oo.env({env:s,cwd:n,execPath:o}):s},ln=(e,t,r={})=>{let n=no._parse(e,t,r);return e=n.command,t=n.args,r=n.options,r={maxBuffer:go,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:r.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...r},r.env=So(r),r.stdio=sn(r),process.platform==="win32"&&to.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:r,parsed:n}},U=(e,t,r)=>typeof t!="string"&&!Buffer.isBuffer(t)?r===void 0?void 0:"":e.stripFinalNewline?ro(t):t,J=(e,t,r)=>{let n=ln(e,t,r),o=an(e,t),s=un(e,t);uo(n.options);let i;try{i=xe.spawn(n.file,n.args,n.options)}catch(g){let S=new xe.ChildProcess,x=Promise.reject(Z({error:g,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:n,timedOut:!1,isCanceled:!1,killed:!1}));return on(S,x)}let a=yo(i),u=co(i,n.options,a),l=lo(i,n.options,u),f={isCanceled:!1};i.kill=io.bind(null,i.kill.bind(i)),i.cancel=ao.bind(null,i,f);let m=so(async()=>{let[{error:g,exitCode:S,signal:x,timedOut:I},L,B,gn]=await po(i,n.options,l),Te=U(n.options,L),ve=U(n.options,B),Ie=U(n.options,gn);if(g||S!==0||x!==null){let Ee=Z({error:g,exitCode:S,signal:x,stdout:Te,stderr:ve,all:Ie,command:o,escapedCommand:s,parsed:n,timedOut:I,isCanceled:f.isCanceled,killed:i.killed});if(!n.options.reject)return Ee;throw Ee}return{command:o,escapedCommand:s,exitCode:0,stdout:Te,stderr:ve,all:Ie,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return fo(i,n.options.input),i.all=mo(i,n.options),on(i,m)};R.exports=J;R.exports.sync=(e,t,r)=>{let n=ln(e,t,r),o=an(e,t),s=un(e,t);ho(n.options);let i;try{i=xe.spawnSync(n.file,n.args,n.options)}catch(l){throw Z({error:l,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:n,timedOut:!1,isCanceled:!1,killed:!1})}let a=U(n.options,i.stdout,i.error),u=U(n.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let l=Z({stdout:a,stderr:u,error:i.error,signal:i.signal,exitCode:i.status,command:o,escapedCommand:s,parsed:n,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!n.options.reject)return l;throw l}return{command:o,escapedCommand:s,exitCode:0,stdout:a,stderr:u,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};R.exports.command=(e,t)=>{let[r,...n]=cn(e);return J(r,n,t)};R.exports.commandSync=(e,t)=>{let[r,...n]=cn(e);return J.sync(r,n,t)};R.exports.node=(e,t,r={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(r=t,t=[]);let n=sn.node(r),o=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:s=process.execPath,nodeOptions:i=o}=r;return J(s,[...i,e,...Array.isArray(t)?t:[]],{...r,stdin:void 0,stdout:void 0,stderr:void 0,stdio:n,shell:!1})}});var wo={};vn(wo,{default:()=>yn});module.exports=In(wo);var h=require("@raycast/api");var be=require("@raycast/api");var fn=Ce(require("node:process"),1),pn=Ce(dn(),1);async function ee(e,{humanReadableOutput:t=!0}={}){if(fn.default.platform!=="darwin")throw new Error("macOS only");let r=t?[]:["-ss"],{stdout:n}=await(0,pn.default)("osascript",["-e",e,r]);return n}var xo=require("@raycast/api");function we(e){return`
    tell application "Tim"
      if not application "Tim" is running then
        activate

        set _maxOpenWaitTimeInSeconds to 5
        set _openCounter to 1
        repeat until application "Tim" is running
          delay 1
          set _openCounter to _openCounter + 1
          if _openCounter > _maxOpenWaitTimeInSeconds then exit repeat
        end repeat
      end if
      ${e}
    end tell`}async function mn(e){let t=we(`createTask title "${e}"`);return ee(t)}async function hn(e){let t=we(`startTask "${e}"`);ee(t)}var v=require("react/jsx-runtime");function yn(){let e=async t=>{let r=await(0,h.showToast)({title:"Creating task",message:t.title,style:h.Toast.Style.Animated});try{let n=await mn(t.title);t.startTask&&await hn(n),r.title="Task created",r.style=h.Toast.Style.Success,(0,h.popToRoot)()}catch{r.title="Error",r.message=`Could not create ${t.title}`,r.style=h.Toast.Style.Failure}};return(0,v.jsxs)(h.Form,{actions:(0,v.jsx)(h.ActionPanel,{children:(0,v.jsx)(h.Action.SubmitForm,{onSubmit:e})}),children:[(0,v.jsx)(h.Form.TextField,{id:"title",title:"Title",placeholder:"Enter a title"}),(0,v.jsx)(h.Form.Checkbox,{id:"startTask",label:"Start Task"})]})}
