"use strict";var yn=Object.create;var B=Object.defineProperty;var xn=Object.getOwnPropertyDescriptor;var Sn=Object.getOwnPropertyNames;var wn=Object.getPrototypeOf,bn=Object.prototype.hasOwnProperty;var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),vn=(e,t)=>{for(var r in t)B(e,r,{get:t[r],enumerable:!0})},Ie=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Sn(t))!bn.call(e,o)&&o!==r&&B(e,o,{get:()=>t[o],enumerable:!(n=xn(t,o))||n.enumerable});return e};var Ee=(e,t,r)=>(r=e!=null?yn(wn(e)):{},Ie(t||!e||!e.__esModule?B(r,"default",{value:e,enumerable:!0}):r,e)),In=e=>Ie(B({},"__esModule",{value:!0}),e);var Ae=c((vo,Ge)=>{Ge.exports=Ce;Ce.sync=Tn;var Te=require("fs");function En(e,t){var r=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!r||(r=r.split(";"),r.indexOf("")!==-1))return!0;for(var n=0;n<r.length;n++){var o=r[n].toLowerCase();if(o&&e.substr(-o.length).toLowerCase()===o)return!0}return!1}function Pe(e,t,r){return!e.isSymbolicLink()&&!e.isFile()?!1:En(t,r)}function Ce(e,t,r){Te.stat(e,function(n,o){r(n,n?!1:Pe(o,e,t))})}function Tn(e,t){return Pe(Te.statSync(e),e,t)}});var Ne=c((Io,qe)=>{qe.exports=Re;Re.sync=Pn;var Oe=require("fs");function Re(e,t,r){Oe.stat(e,function(n,o){r(n,n?!1:ke(o,t))})}function Pn(e,t){return ke(Oe.statSync(e),t)}function ke(e,t){return e.isFile()&&Cn(e,t)}function Cn(e,t){var r=e.mode,n=e.uid,o=e.gid,s=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),u=parseInt("010",8),l=parseInt("001",8),f=a|u,h=r&l||r&u&&o===i||r&a&&n===s||r&f&&s===0;return h}});var $e=c((To,_e)=>{var Eo=require("fs"),j;process.platform==="win32"||global.TESTING_WINDOWS?j=Ae():j=Ne();_e.exports=J;J.sync=Gn;function J(e,t,r){if(typeof t=="function"&&(r=t,t={}),!r){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(n,o){J(e,t||{},function(s,i){s?o(s):n(i)})})}j(e,t||{},function(n,o){n&&(n.code==="EACCES"||t&&t.ignoreErrors)&&(n=null,o=!1),r(n,o)})}function Gn(e,t){try{return j.sync(e,t||{})}catch(r){if(t&&t.ignoreErrors||r.code==="EACCES")return!1;throw r}}});var Fe=c((Po,De)=>{var I=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",Ue=require("path"),An=I?";":":",Le=$e(),Be=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),je=(e,t)=>{let r=t.colon||An,n=e.match(/\//)||I&&e.match(/\\/)?[""]:[...I?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)],o=I?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",s=I?o.split(r):[""];return I&&e.indexOf(".")!==-1&&s[0]!==""&&s.unshift(""),{pathEnv:n,pathExt:s,pathExtExe:o}},Me=(e,t,r)=>{typeof t=="function"&&(r=t,t={}),t||(t={});let{pathEnv:n,pathExt:o,pathExtExe:s}=je(e,t),i=[],a=l=>new Promise((f,h)=>{if(l===n.length)return t.all&&i.length?f(i):h(Be(e));let m=n[l],g=/^".*"$/.test(m)?m.slice(1,-1):m,y=Ue.join(g,e),x=!g&&/^\.[\\\/]/.test(e)?e.slice(0,2)+y:y;f(u(x,l,0))}),u=(l,f,h)=>new Promise((m,g)=>{if(h===o.length)return m(a(f+1));let y=o[h];Le(l+y,{pathExt:s},(x,v)=>{if(!x&&v)if(t.all)i.push(l+y);else return m(l+y);return m(u(l,f,h+1))})});return r?a(0).then(l=>r(null,l),r):a(0)},On=(e,t)=>{t=t||{};let{pathEnv:r,pathExt:n,pathExtExe:o}=je(e,t),s=[];for(let i=0;i<r.length;i++){let a=r[i],u=/^".*"$/.test(a)?a.slice(1,-1):a,l=Ue.join(u,e),f=!u&&/^\.[\\\/]/.test(e)?e.slice(0,2)+l:l;for(let h=0;h<n.length;h++){let m=f+n[h];try{if(Le.sync(m,{pathExt:o}))if(t.all)s.push(m);else return m}catch{}}}if(t.all&&s.length)return s;if(t.nothrow)return null;throw Be(e)};De.exports=Me;Me.sync=On});var te=c((Co,ee)=>{"use strict";var Xe=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(n=>n.toUpperCase()==="PATH")||"Path"};ee.exports=Xe;ee.exports.default=Xe});var ze=c((Go,Ke)=>{"use strict";var He=require("path"),Rn=Fe(),kn=te();function We(e,t){let r=e.options.env||process.env,n=process.cwd(),o=e.options.cwd!=null,s=o&&process.chdir!==void 0&&!process.chdir.disabled;if(s)try{process.chdir(e.options.cwd)}catch{}let i;try{i=Rn.sync(e.command,{path:r[kn({env:r})],pathExt:t?He.delimiter:void 0})}catch{}finally{s&&process.chdir(n)}return i&&(i=He.resolve(o?e.options.cwd:"",i)),i}function qn(e){return We(e)||We(e,!0)}Ke.exports=qn});var Ve=c((Ao,re)=>{"use strict";var ne=/([()\][%!^"`<>&|;, *?])/g;function Nn(e){return e=e.replace(ne,"^$1"),e}function _n(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(ne,"^$1"),t&&(e=e.replace(ne,"^$1")),e}re.exports.command=Nn;re.exports.argument=_n});var Qe=c((Oo,Ye)=>{"use strict";Ye.exports=/^#!(.*)/});var Je=c((Ro,Ze)=>{"use strict";var $n=Qe();Ze.exports=(e="")=>{let t=e.match($n);if(!t)return null;let[r,n]=t[0].replace(/#! ?/,"").split(" "),o=r.split("/").pop();return o==="env"?n:n?`${o} ${n}`:o}});var tt=c((ko,et)=>{"use strict";var oe=require("fs"),Un=Je();function Ln(e){let r=Buffer.alloc(150),n;try{n=oe.openSync(e,"r"),oe.readSync(n,r,0,150,0),oe.closeSync(n)}catch{}return Un(r.toString())}et.exports=Ln});var st=c((qo,ot)=>{"use strict";var Bn=require("path"),nt=ze(),rt=Ve(),jn=tt(),Mn=process.platform==="win32",Dn=/\.(?:com|exe)$/i,Fn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Xn(e){e.file=nt(e);let t=e.file&&jn(e.file);return t?(e.args.unshift(e.file),e.command=t,nt(e)):e.file}function Hn(e){if(!Mn)return e;let t=Xn(e),r=!Dn.test(t);if(e.options.forceShell||r){let n=Fn.test(t);e.command=Bn.normalize(e.command),e.command=rt.command(e.command),e.args=e.args.map(s=>rt.argument(s,n));let o=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${o}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Wn(e,t,r){t&&!Array.isArray(t)&&(r=t,t=null),t=t?t.slice(0):[],r=Object.assign({},r);let n={command:e,args:t,options:r,file:void 0,original:{command:e,args:t}};return r.shell?n:Hn(n)}ot.exports=Wn});var ct=c((No,at)=>{"use strict";var se=process.platform==="win32";function ie(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Kn(e,t){if(!se)return;let r=e.emit;e.emit=function(n,o){if(n==="exit"){let s=it(o,t,"spawn");if(s)return r.call(e,"error",s)}return r.apply(e,arguments)}}function it(e,t){return se&&e===1&&!t.file?ie(t.original,"spawn"):null}function zn(e,t){return se&&e===1&&!t.file?ie(t.original,"spawnSync"):null}at.exports={hookChildProcess:Kn,verifyENOENT:it,verifyENOENTSync:zn,notFoundError:ie}});var dt=c((_o,E)=>{"use strict";var ut=require("child_process"),ae=st(),ce=ct();function lt(e,t,r){let n=ae(e,t,r),o=ut.spawn(n.command,n.args,n.options);return ce.hookChildProcess(o,n),o}function Vn(e,t,r){let n=ae(e,t,r),o=ut.spawnSync(n.command,n.args,n.options);return o.error=o.error||ce.verifyENOENTSync(o.status,n),o}E.exports=lt;E.exports.spawn=lt;E.exports.sync=Vn;E.exports._parse=ae;E.exports._enoent=ce});var pt=c(($o,ft)=>{"use strict";ft.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),r=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===r&&(e=e.slice(0,e.length-1)),e}});var gt=c((Uo,q)=>{"use strict";var k=require("path"),mt=te(),ht=e=>{e={cwd:process.cwd(),path:process.env[mt()],execPath:process.execPath,...e};let t,r=k.resolve(e.cwd),n=[];for(;t!==r;)n.push(k.join(r,"node_modules/.bin")),t=r,r=k.resolve(r,"..");let o=k.resolve(e.cwd,e.execPath,"..");return n.push(o),n.concat(e.path).join(k.delimiter)};q.exports=ht;q.exports.default=ht;q.exports.env=e=>{e={env:process.env,...e};let t={...e.env},r=mt({env:t});return e.path=t[r],t[r]=q.exports(e),t}});var xt=c((Lo,ue)=>{"use strict";var yt=(e,t)=>{for(let r of Reflect.ownKeys(t))Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));return e};ue.exports=yt;ue.exports.default=yt});var wt=c((Bo,D)=>{"use strict";var Yn=xt(),M=new WeakMap,St=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let r,n=0,o=e.displayName||e.name||"<anonymous>",s=function(...i){if(M.set(s,++n),n===1)r=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${o}\` can only be called once`);return r};return Yn(s,e),M.set(s,n),s};D.exports=St;D.exports.default=St;D.exports.callCount=e=>{if(!M.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return M.get(e)}});var bt=c(F=>{"use strict";Object.defineProperty(F,"__esModule",{value:!0});F.SIGNALS=void 0;var Qn=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];F.SIGNALS=Qn});var le=c(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});T.SIGRTMAX=T.getRealtimeSignals=void 0;var Zn=function(){let e=It-vt+1;return Array.from({length:e},Jn)};T.getRealtimeSignals=Zn;var Jn=function(e,t){return{name:`SIGRT${t+1}`,number:vt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},vt=34,It=64;T.SIGRTMAX=It});var Et=c(X=>{"use strict";Object.defineProperty(X,"__esModule",{value:!0});X.getSignals=void 0;var er=require("os"),tr=bt(),nr=le(),rr=function(){let e=(0,nr.getRealtimeSignals)();return[...tr.SIGNALS,...e].map(or)};X.getSignals=rr;var or=function({name:e,number:t,description:r,action:n,forced:o=!1,standard:s}){let{signals:{[e]:i}}=er.constants,a=i!==void 0;return{name:e,number:a?i:t,description:r,supported:a,action:n,forced:o,standard:s}}});var Pt=c(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});P.signalsByNumber=P.signalsByName=void 0;var sr=require("os"),Tt=Et(),ir=le(),ar=function(){return(0,Tt.getSignals)().reduce(cr,{})},cr=function(e,{name:t,number:r,description:n,supported:o,action:s,forced:i,standard:a}){return{...e,[t]:{name:t,number:r,description:n,supported:o,action:s,forced:i,standard:a}}},ur=ar();P.signalsByName=ur;var lr=function(){let e=(0,Tt.getSignals)(),t=ir.SIGRTMAX+1,r=Array.from({length:t},(n,o)=>dr(o,e));return Object.assign({},...r)},dr=function(e,t){let r=fr(e,t);if(r===void 0)return{};let{name:n,description:o,supported:s,action:i,forced:a,standard:u}=r;return{[e]:{name:n,number:e,description:o,supported:s,action:i,forced:a,standard:u}}},fr=function(e,t){let r=t.find(({name:n})=>sr.constants.signals[n]===e);return r!==void 0?r:t.find(n=>n.number===e)},pr=lr();P.signalsByNumber=pr});var Gt=c((Xo,Ct)=>{"use strict";var{signalsByName:mr}=Pt(),hr=({timedOut:e,timeout:t,errorCode:r,signal:n,signalDescription:o,exitCode:s,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":r!==void 0?`failed with ${r}`:n!==void 0?`was killed with ${n} (${o})`:s!==void 0?`failed with exit code ${s}`:"failed",gr=({stdout:e,stderr:t,all:r,error:n,signal:o,exitCode:s,command:i,escapedCommand:a,timedOut:u,isCanceled:l,killed:f,parsed:{options:{timeout:h}}})=>{s=s===null?void 0:s,o=o===null?void 0:o;let m=o===void 0?void 0:mr[o].description,g=n&&n.code,x=`Command ${hr({timedOut:u,timeout:h,errorCode:g,signal:o,signalDescription:m,exitCode:s,isCanceled:l})}: ${i}`,v=Object.prototype.toString.call(n)==="[object Error]",U=v?`${x}
${n.message}`:x,L=[U,t,e].filter(Boolean).join(`
`);return v?(n.originalMessage=n.message,n.message=L):n=new Error(L),n.shortMessage=U,n.command=i,n.escapedCommand=a,n.exitCode=s,n.signal=o,n.signalDescription=m,n.stdout=e,n.stderr=t,r!==void 0&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=!!u,n.isCanceled=l,n.killed=f&&!u,n};Ct.exports=gr});var Ot=c((Ho,de)=>{"use strict";var H=["stdin","stdout","stderr"],yr=e=>H.some(t=>e[t]!==void 0),At=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return H.map(n=>e[n]);if(yr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${H.map(n=>`\`${n}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let r=Math.max(t.length,H.length);return Array.from({length:r},(n,o)=>t[o])};de.exports=At;de.exports.node=e=>{let t=At(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var Rt=c((Wo,W)=>{W.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&W.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&W.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var $t=c((Ko,A)=>{var d=global.process,w=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};w(d)?(kt=require("assert"),C=Rt(),qt=/^win/i.test(d.platform),N=require("events"),typeof N!="function"&&(N=N.EventEmitter),d.__signal_exit_emitter__?p=d.__signal_exit_emitter__:(p=d.__signal_exit_emitter__=new N,p.count=0,p.emitted={}),p.infinite||(p.setMaxListeners(1/0),p.infinite=!0),A.exports=function(e,t){if(!w(global.process))return function(){};kt.equal(typeof e,"function","a callback must be provided for exit handler"),G===!1&&fe();var r="exit";t&&t.alwaysLast&&(r="afterexit");var n=function(){p.removeListener(r,e),p.listeners("exit").length===0&&p.listeners("afterexit").length===0&&K()};return p.on(r,e),n},K=function(){!G||!w(global.process)||(G=!1,C.forEach(function(t){try{d.removeListener(t,z[t])}catch{}}),d.emit=V,d.reallyExit=pe,p.count-=1)},A.exports.unload=K,b=function(t,r,n){p.emitted[t]||(p.emitted[t]=!0,p.emit(t,r,n))},z={},C.forEach(function(e){z[e]=function(){if(w(global.process)){var r=d.listeners(e);r.length===p.count&&(K(),b("exit",null,e),b("afterexit",null,e),qt&&e==="SIGHUP"&&(e="SIGINT"),d.kill(d.pid,e))}}}),A.exports.signals=function(){return C},G=!1,fe=function(){G||!w(global.process)||(G=!0,p.count+=1,C=C.filter(function(t){try{return d.on(t,z[t]),!0}catch{return!1}}),d.emit=_t,d.reallyExit=Nt)},A.exports.load=fe,pe=d.reallyExit,Nt=function(t){w(global.process)&&(d.exitCode=t||0,b("exit",d.exitCode,null),b("afterexit",d.exitCode,null),pe.call(d,d.exitCode))},V=d.emit,_t=function(t,r){if(t==="exit"&&w(global.process)){r!==void 0&&(d.exitCode=r);var n=V.apply(this,arguments);return b("exit",d.exitCode,null),b("afterexit",d.exitCode,null),n}else return V.apply(this,arguments)}):A.exports=function(){return function(){}};var kt,C,qt,N,p,K,b,z,G,fe,pe,Nt,V,_t});var Lt=c((zo,Ut)=>{"use strict";var xr=require("os"),Sr=$t(),wr=1e3*5,br=(e,t="SIGTERM",r={})=>{let n=e(t);return vr(e,t,r,n),n},vr=(e,t,r,n)=>{if(!Ir(t,r,n))return;let o=Tr(r),s=setTimeout(()=>{e("SIGKILL")},o);s.unref&&s.unref()},Ir=(e,{forceKillAfterTimeout:t},r)=>Er(e)&&t!==!1&&r,Er=e=>e===xr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Tr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return wr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Pr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Cr=(e,t,r)=>{e.kill(t),r(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Gr=(e,{timeout:t,killSignal:r="SIGTERM"},n)=>{if(t===0||t===void 0)return n;let o,s=new Promise((a,u)=>{o=setTimeout(()=>{Cr(e,r,u)},t)}),i=n.finally(()=>{clearTimeout(o)});return Promise.race([s,i])},Ar=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Or=async(e,{cleanup:t,detached:r},n)=>{if(!t||r)return n;let o=Sr(()=>{e.kill()});return n.finally(()=>{o()})};Ut.exports={spawnedKill:br,spawnedCancel:Pr,setupTimeout:Gr,validateTimeout:Ar,setExitHandler:Or}});var jt=c((Vo,Bt)=>{"use strict";var S=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";S.writable=e=>S(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";S.readable=e=>S(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";S.duplex=e=>S.writable(e)&&S.readable(e);S.transform=e=>S.duplex(e)&&typeof e._transform=="function";Bt.exports=S});var Dt=c((Yo,Mt)=>{"use strict";var{PassThrough:Rr}=require("stream");Mt.exports=e=>{e={...e};let{array:t}=e,{encoding:r}=e,n=r==="buffer",o=!1;t?o=!(r||n):r=r||"utf8",n&&(r=null);let s=new Rr({objectMode:o});r&&s.setEncoding(r);let i=0,a=[];return s.on("data",u=>{a.push(u),o?i=a.length:i+=u.length}),s.getBufferedValue=()=>t?a:n?Buffer.concat(a,i):a.join(""),s.getBufferedLength=()=>i,s}});var Ft=c((Qo,_)=>{"use strict";var{constants:kr}=require("buffer"),qr=require("stream"),{promisify:Nr}=require("util"),_r=Dt(),$r=Nr(qr.pipeline),Y=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function me(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:r}=t,n=_r(t);return await new Promise((o,s)=>{let i=a=>{a&&n.getBufferedLength()<=kr.MAX_LENGTH&&(a.bufferedData=n.getBufferedValue()),s(a)};(async()=>{try{await $r(e,n),o()}catch(a){i(a)}})(),n.on("data",()=>{n.getBufferedLength()>r&&i(new Y)})}),n.getBufferedValue()}_.exports=me;_.exports.buffer=(e,t)=>me(e,{...t,encoding:"buffer"});_.exports.array=(e,t)=>me(e,{...t,array:!0});_.exports.MaxBufferError=Y});var Ht=c((Zo,Xt)=>{"use strict";var{PassThrough:Ur}=require("stream");Xt.exports=function(){var e=[],t=new Ur({objectMode:!0});return t.setMaxListeners(0),t.add=r,t.isEmpty=n,t.on("unpipe",o),Array.prototype.slice.call(arguments).forEach(r),t;function r(s){return Array.isArray(s)?(s.forEach(r),this):(e.push(s),s.once("end",o.bind(null,s)),s.once("error",t.emit.bind(t,"error")),s.pipe(t,{end:!1}),this)}function n(){return e.length==0}function o(s){e=e.filter(function(i){return i!==s}),!e.length&&t.readable&&t.end()}}});var Vt=c((Jo,zt)=>{"use strict";var Kt=jt(),Wt=Ft(),Lr=Ht(),Br=(e,t)=>{t===void 0||e.stdin===void 0||(Kt(t)?t.pipe(e.stdin):e.stdin.end(t))},jr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let r=Lr();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r},he=async(e,t)=>{if(e){e.destroy();try{return await t}catch(r){return r.bufferedData}}},ge=(e,{encoding:t,buffer:r,maxBuffer:n})=>{if(!(!e||!r))return t?Wt(e,{encoding:t,maxBuffer:n}):Wt.buffer(e,{maxBuffer:n})},Mr=async({stdout:e,stderr:t,all:r},{encoding:n,buffer:o,maxBuffer:s},i)=>{let a=ge(e,{encoding:n,buffer:o,maxBuffer:s}),u=ge(t,{encoding:n,buffer:o,maxBuffer:s}),l=ge(r,{encoding:n,buffer:o,maxBuffer:s*2});try{return await Promise.all([i,a,u,l])}catch(f){return Promise.all([{error:f,signal:f.signal,timedOut:f.timedOut},he(e,a),he(t,u),he(r,l)])}},Dr=({input:e})=>{if(Kt(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};zt.exports={handleInput:Br,makeAllStream:jr,getSpawnedResult:Mr,validateInputSync:Dr}});var Qt=c((es,Yt)=>{"use strict";var Fr=(async()=>{})().constructor.prototype,Xr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Fr,e)]),Hr=(e,t)=>{for(let[r,n]of Xr){let o=typeof t=="function"?(...s)=>Reflect.apply(n.value,t(),s):n.value.bind(t);Reflect.defineProperty(e,r,{...n,value:o})}return e},Wr=e=>new Promise((t,r)=>{e.on("exit",(n,o)=>{t({exitCode:n,signal:o})}),e.on("error",n=>{r(n)}),e.stdin&&e.stdin.on("error",n=>{r(n)})});Yt.exports={mergePromise:Hr,getSpawnedPromise:Wr}});var en=c((ts,Jt)=>{"use strict";var Zt=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Kr=/^[\w.-]+$/,zr=/"/g,Vr=e=>typeof e!="string"||Kr.test(e)?e:`"${e.replace(zr,'\\"')}"`,Yr=(e,t)=>Zt(e,t).join(" "),Qr=(e,t)=>Zt(e,t).map(r=>Vr(r)).join(" "),Zr=/ +/g,Jr=e=>{let t=[];for(let r of e.trim().split(Zr)){let n=t[t.length-1];n&&n.endsWith("\\")?t[t.length-1]=`${n.slice(0,-1)} ${r}`:t.push(r)}return t};Jt.exports={joinCommand:Yr,getEscapedCommand:Qr,parseCommand:Jr}});var cn=c((ns,O)=>{"use strict";var eo=require("path"),ye=require("child_process"),to=dt(),no=pt(),ro=gt(),oo=wt(),Q=Gt(),nn=Ot(),{spawnedKill:so,spawnedCancel:io,setupTimeout:ao,validateTimeout:co,setExitHandler:uo}=Lt(),{handleInput:lo,getSpawnedResult:fo,makeAllStream:po,validateInputSync:mo}=Vt(),{mergePromise:tn,getSpawnedPromise:ho}=Qt(),{joinCommand:rn,parseCommand:on,getEscapedCommand:sn}=en(),go=1e3*1e3*100,yo=({env:e,extendEnv:t,preferLocal:r,localDir:n,execPath:o})=>{let s=t?{...process.env,...e}:e;return r?ro.env({env:s,cwd:n,execPath:o}):s},an=(e,t,r={})=>{let n=to._parse(e,t,r);return e=n.command,t=n.args,r=n.options,r={maxBuffer:go,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:r.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...r},r.env=yo(r),r.stdio=nn(r),process.platform==="win32"&&eo.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:r,parsed:n}},$=(e,t,r)=>typeof t!="string"&&!Buffer.isBuffer(t)?r===void 0?void 0:"":e.stripFinalNewline?no(t):t,Z=(e,t,r)=>{let n=an(e,t,r),o=rn(e,t),s=sn(e,t);co(n.options);let i;try{i=ye.spawn(n.file,n.args,n.options)}catch(g){let y=new ye.ChildProcess,x=Promise.reject(Q({error:g,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:n,timedOut:!1,isCanceled:!1,killed:!1}));return tn(y,x)}let a=ho(i),u=ao(i,n.options,a),l=uo(i,n.options,u),f={isCanceled:!1};i.kill=so.bind(null,i.kill.bind(i)),i.cancel=io.bind(null,i,f);let m=oo(async()=>{let[{error:g,exitCode:y,signal:x,timedOut:v},U,L,gn]=await fo(i,n.options,l),Se=$(n.options,U),we=$(n.options,L),be=$(n.options,gn);if(g||y!==0||x!==null){let ve=Q({error:g,exitCode:y,signal:x,stdout:Se,stderr:we,all:be,command:o,escapedCommand:s,parsed:n,timedOut:v,isCanceled:f.isCanceled,killed:i.killed});if(!n.options.reject)return ve;throw ve}return{command:o,escapedCommand:s,exitCode:0,stdout:Se,stderr:we,all:be,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return lo(i,n.options.input),i.all=po(i,n.options),tn(i,m)};O.exports=Z;O.exports.sync=(e,t,r)=>{let n=an(e,t,r),o=rn(e,t),s=sn(e,t);mo(n.options);let i;try{i=ye.spawnSync(n.file,n.args,n.options)}catch(l){throw Q({error:l,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:n,timedOut:!1,isCanceled:!1,killed:!1})}let a=$(n.options,i.stdout,i.error),u=$(n.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let l=Q({stdout:a,stderr:u,error:i.error,signal:i.signal,exitCode:i.status,command:o,escapedCommand:s,parsed:n,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!n.options.reject)return l;throw l}return{command:o,escapedCommand:s,exitCode:0,stdout:a,stderr:u,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};O.exports.command=(e,t)=>{let[r,...n]=on(e);return Z(r,n,t)};O.exports.commandSync=(e,t)=>{let[r,...n]=on(e);return Z.sync(r,n,t)};O.exports.node=(e,t,r={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(r=t,t=[]);let n=nn.node(r),o=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:s=process.execPath,nodeOptions:i=o}=r;return Z(s,[...i,e,...Array.isArray(t)?t:[]],{...r,stdin:void 0,stdout:void 0,stderr:void 0,stdio:n,shell:!1})}});var wo={};vn(wo,{default:()=>So});module.exports=In(wo);var R=require("@raycast/api");var un=Ee(require("node:process"),1),ln=Ee(cn(),1);async function xe(e,{humanReadableOutput:t=!0}={}){if(un.default.platform!=="darwin")throw new Error("macOS only");let r=t?[]:["-ss"],{stdout:n}=await(0,ln.default)("osascript",["-e",e,r]);return n}var dn=require("@raycast/api");function fn(e){return`
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
    end tell`}async function pn(e){await(0,dn.closeMainWindow)(),await xe(e)}async function mn(e){return await xo()?e():(0,R.showToast)({title:"Tim is not installed",style:R.Toast.Style.Failure})}async function hn(){let e=fn("opennavigator");await pn(e)}async function xo(){return(await(0,R.getApplications)()).find(r=>r.bundleId==="neat.software.Tim")!==void 0}var So=mn(hn);
