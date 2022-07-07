var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function l(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function a(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e){t.value=null==e?"":e}function g(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}t.selectedIndex=-1}let $;function v(t){$=t}function k(){if(!$)throw new Error("Function called outside component initialization");return $}const y=[],x=[],w=[],_=[],C=Promise.resolve();let E=!1;function S(t){w.push(t)}const L=new Set;let N=0;function P(){const t=$;do{for(;N<y.length;){const t=y[N];N++,v(t),R(t.$$)}for(v(null),y.length=0,N=0;x.length;)x.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];L.has(e)||(L.add(e),e())}w.length=0}while(y.length);for(;_.length;)_.pop()();E=!1,L.clear(),v(t)}function R(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const T=new Set;let j;function q(){j={r:0,c:[],p:j}}function A(){j.r||o(j.c),j=j.p}function M(t,e){t&&t.i&&(T.delete(t),t.i(e))}function z(t,e,n,o){if(t&&t.o){if(T.has(t))return;T.add(t),j.c.push((()=>{T.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function O(t,e){const n=e.token={};function o(t,o,l,r){if(e.token!==n)return;e.resolved=r;let c=e.ctx;void 0!==l&&(c=c.slice(),c[l]=r);const s=t&&(e.current=t)(c);let i=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(q(),z(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),A())})):e.block.d(1),s.c(),M(s,1),s.m(e.mount(),e.anchor),i=!0),e.block=s,e.blocks&&(e.blocks[o]=s),i&&P()}if((l=t)&&"object"==typeof l&&"function"==typeof l.then){const n=k();if(t.then((t=>{v(n),o(e.then,1,e.value,t),v(null)}),(t=>{if(v(n),o(e.catch,2,e.error,t),v(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var l}function U(t){t&&t.c()}function D(t,n,r,c){const{fragment:s,on_mount:i,on_destroy:a,after_update:u}=t.$$;s&&s.m(n,r),c||S((()=>{const n=i.map(e).filter(l);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(S)}function H(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e){-1===t.$$.dirty[0]&&(y.push(t),E||(E=!0,C.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(e,l,r,c,s,a,u,d=[-1]){const f=$;v(e);const h=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(f?f.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:l.target||f.$$.root};u&&u(h.root);let m=!1;if(h.ctx=r?r(e,l.props||{},((t,n,...o)=>{const l=o.length?o[0]:n;return h.ctx&&s(h.ctx[t],h.ctx[t]=l)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](l),m&&G(e,t)),n})):[],h.update(),m=!0,o(h.before_update),h.fragment=!!c&&c(h.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);h.fragment&&h.fragment.l(t),t.forEach(i)}else h.fragment&&h.fragment.c();l.intro&&M(e.$$.fragment),D(e,l.target,l.anchor,l.customElement),P()}v(f)}class Q{$destroy(){H(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Z(e){let n,o,l,r,a=e[0].name+"";return{c(){n=u("button"),o=d(a),m(n,"class","btn btn-light border-dark m-1")},m(t,i){s(t,n,i),c(n,o),l||(r=h(n,"click",e[2]),l=!0)},p(t,[e]){1&e&&a!==(a=t[0].name+"")&&p(o,a)},i:t,o:t,d(t){t&&i(n),l=!1,r()}}}function F(t,e,n){let{table:o}=e,{handleRoll:l}=e;return t.$$set=t=>{"table"in t&&n(0,o=t.table),"handleRoll"in t&&n(1,l=t.handleRoll)},[o,l,()=>l(o)]}class J extends Q{constructor(t){super(),K(this,t,F,Z,r,{table:0,handleRoll:1})}}const X=["0","1","2","3","4","5","6","7","8","9"];const B=new class{roll(t){let e=this.tokenize(t);return this.execute(e)}tokenize(t){let e=[],n=0;for(;n<t.length;){let l={value:t[n]};if(o=t[n],X.indexOf(o)>=0){let o=e.length>0?e[e.length-1]:{};if("digit"==o.type){o.value+=t[n++];continue}l.type="digit"}"d"==t[n]&&(l.type="die"),"+"==t[n]&&(l.type="plus"),"-"==t[n]&&(l.type="minus"),e.push(l),n++}var o;return e}execute(t){let e=Number(t[0].value),n=Number(t[2].value),o=5==t.length&&"plus"==t[3].type?Number(t[4].value):0,l=5==t.length&&"minus"==t[3].type?Number(t[4].value):0,r=0;for(;e>0;)r+=Math.floor(Math.random()*n+1),e--;return r+o-l}};let I=({table:t,modifier:e,tables:n})=>{let o=B.roll(t.roll+e),l=Math.max(...t.entries.map((t=>t.max))),r=Math.min(...t.entries.map((t=>t.min)));o>l&&(o=l),o<r&&(o=r);let c=t.entries.find((t=>t.min<=o&&t.max>=o));if(!c)return void alert(`Error - rolled ${o} on table ${t.name}`);let s=c.name;if(c.amount){s=`${s} (${B.roll(c.amount)})`}let i=[{roll:o,table:t.name,description:s}];return c.table?(t=n.find((t=>t.name==c.table)))?i.concat(I({table:t,modifier:e,tables:n})):(i.push({roll:0,table:null,description:`Could not find table named ${i[i.length-1].table}`}),i):i};var W={rollOnTable:I};function V(t,e,n){const o=t.slice();return o[14]=e[n],o}function Y(t,e,n){const o=t.slice();return o[17]=e[n],o}function tt(t,e,n){const o=t.slice();return o[20]=e[n],o}function et(e){let n,o,l,r=e[20]+"";return{c(){n=u("option"),o=d(r),n.__value=l=e[20],n.value=n.__value},m(t,e){s(t,n,e),c(n,o)},p:t,d(t){t&&i(n)}}}function nt(t){let e,n;return e=new J({props:{table:t[17],handleRoll:t[7]}}),{c(){U(e.$$.fragment)},m(t,o){D(e,t,o),n=!0},p(t,n){const o={};16&n&&(o.table=t[17]),e.$set(o)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function ot(t){let e,n,o,l,r,a,f,h=t[14].roll+"",m=t[14].table+"",b=t[14].description+"";return{c(){var t,c,s,i;e=u("p"),n=d("Rolled "),o=d(h),l=d(" on "),r=d(m),a=d(": "),f=d(b),t=e,c="white-space",null===(s="pre-wrap")?t.style.removeProperty(c):t.style.setProperty(c,s,i?"important":"")},m(t,i){s(t,e,i),c(e,n),c(e,o),c(e,l),c(e,r),c(e,a),c(e,f)},p(t,e){8&e&&h!==(h=t[14].roll+"")&&p(o,h),8&e&&m!==(m=t[14].table+"")&&p(r,m),8&e&&b!==(b=t[14].description+"")&&p(f,b)},d(t){t&&i(e)}}}function lt(t){let e,n,l,r,$,v,k,y,x,w,_,C,E,L,N,P,R,T,j,O,U,D,H,G,K,Q,Z,F,J,X,B,I,W,lt=t[5],rt=[];for(let e=0;e<lt.length;e+=1)rt[e]=et(tt(t,lt,e));let ct=t[4],st=[];for(let e=0;e<ct.length;e+=1)st[e]=nt(Y(t,ct,e));const it=t=>z(st[t],1,1,(()=>{st[t]=null}));let at=t[3],ut=[];for(let e=0;e<at.length;e+=1)ut[e]=ot(V(t,at,e));return{c(){e=u("div"),n=u("div"),l=u("div"),r=u("div"),$=u("div"),v=u("div"),k=u("div"),y=u("div"),x=u("button"),x.textContent="↓",w=f(),_=u("button"),C=d(t[2]),E=f(),L=u("button"),L.textContent="↑",N=f(),P=u("button"),P.textContent="reset",R=f(),T=u("input"),j=f(),O=u("select"),U=u("option");for(let t=0;t<rt.length;t+=1)rt[t].c();D=f(),H=u("div"),G=u("div"),K=u("div"),Q=u("div");for(let t=0;t<st.length;t+=1)st[t].c();Z=f(),F=u("div"),J=u("div"),X=u("div");for(let t=0;t<ut.length;t+=1)ut[t].c();m(x,"class","btn btn-light border-dark"),m(_,"class","btn btn-dark border-dark"),m(L,"class","btn btn-light border-dark"),m(y,"class","btn-group m-1"),m(P,"class","btn btn-light border-dark m-1"),m(k,"class","d-flex"),m(T,"class","form-control"),m(T,"placeholder","filter"),U.__value="",U.value=U.__value,m(O,"class","form-control"),void 0===t[1]&&S((()=>t[13].call(O))),m(v,"class","card-body"),m($,"class","card"),m(r,"class","col"),m(l,"class","row"),m(Q,"class","card-body"),m(K,"class","card"),m(G,"class","col"),m(H,"class","row"),m(n,"class","col-md-6"),m(X,"class","card-body"),m(J,"class","card"),m(F,"class","col"),m(e,"class","row")},m(o,i){s(o,e,i),c(e,n),c(n,l),c(l,r),c(r,$),c($,v),c(v,k),c(k,y),c(y,x),c(y,w),c(y,_),c(_,C),c(y,E),c(y,L),c(k,N),c(k,P),c(v,R),c(v,T),b(T,t[0]),c(v,j),c(v,O),c(O,U);for(let t=0;t<rt.length;t+=1)rt[t].m(O,null);g(O,t[1]),c(n,D),c(n,H),c(H,G),c(G,K),c(K,Q);for(let t=0;t<st.length;t+=1)st[t].m(Q,null);c(e,Z),c(e,F),c(F,J),c(J,X);for(let t=0;t<ut.length;t+=1)ut[t].m(X,null);B=!0,I||(W=[h(x,"click",t[9]),h(L,"click",t[10]),h(P,"click",t[11]),h(T,"input",t[12]),h(O,"change",t[13])],I=!0)},p(t,[e]){if((!B||4&e)&&p(C,t[2]),1&e&&T.value!==t[0]&&b(T,t[0]),32&e){let n;for(lt=t[5],n=0;n<lt.length;n+=1){const o=tt(t,lt,n);rt[n]?rt[n].p(o,e):(rt[n]=et(o),rt[n].c(),rt[n].m(O,null))}for(;n<rt.length;n+=1)rt[n].d(1);rt.length=lt.length}if(34&e&&g(O,t[1]),144&e){let n;for(ct=t[4],n=0;n<ct.length;n+=1){const o=Y(t,ct,n);st[n]?(st[n].p(o,e),M(st[n],1)):(st[n]=nt(o),st[n].c(),M(st[n],1),st[n].m(Q,null))}for(q(),n=ct.length;n<st.length;n+=1)it(n);A()}if(8&e){let n;for(at=t[3],n=0;n<at.length;n+=1){const o=V(t,at,n);ut[n]?ut[n].p(o,e):(ut[n]=ot(o),ut[n].c(),ut[n].m(X,null))}for(;n<ut.length;n+=1)ut[n].d(1);ut.length=at.length}},i(t){if(!B){for(let t=0;t<ct.length;t+=1)M(st[t]);B=!0}},o(t){st=st.filter(Boolean);for(let t=0;t<st.length;t+=1)z(st[t]);B=!1},d(t){t&&i(e),a(rt,t),a(st,t),a(ut,t),I=!1,o(W)}}}function rt(t,e,n){let o,{tables:l=[]}=e,r="",c="+0",s="",i=[],a=[...new Set(l.map((t=>t.category)))];function u(t){t+=Number(c),n(2,c=t<0?`${t}`:`+${t}`)}a.sort(((t,e)=>t.localeCompare(e)));return t.$$set=t=>{"tables"in t&&n(8,l=t.tables)},t.$$.update=()=>{259&t.$$.dirty&&n(4,o=l.filter((t=>!s||t.category==s)).filter((t=>t.name.toLowerCase().includes(r.toLowerCase()))))},[r,s,c,i,o,a,u,function(t){n(3,i=W.rollOnTable({table:t,modifier:c,tables:l}))},l,()=>u(-1),()=>u(1),()=>n(2,c="+0"),function(){r=this.value,n(0,r)},function(){s=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(1,s),n(5,a)}]}class ct extends Q{constructor(t){super(),K(this,t,rt,lt,r,{tables:8})}}class st{constructor(t){this.url=t.url}async get(t=""){return new Promise((e=>{let n=new XMLHttpRequest;n.open("get",`${this.url}/${t}`),n.onload=()=>{n.status>299?e():e(n.response)},n.send()}))}}class it{constructor(){this.tables=[],this.client=new st({url:"https://docs.google.com/spreadsheets/d/e/2PACX-1vTwssniGQQzgz2QugHShUka6ZOUy83f50f1x7TmkWNHnICP2jk4GbjJUKHX8ooEZR7mHZiAtqzGoeUL"})}async loadData(){let t=await this.client.get("pubhtml"),e=(new DOMParser).parseFromString(t,"text/html"),n=[...e.querySelectorAll("#sheets-viewport > div")],o=n.map((t=>t.querySelectorAll("td")));for(let t=0;t<n.length;t++){let l={name:e.querySelector(`#sheet-button-${n[t].id}`).textContent,category:o[t][0].textContent,roll:o[t][1].textContent,entries:[]},r=o[t].length/5;for(let e=15;e<5*r;e+=5)l.entries.push({name:o[t][e].innerText,min:Number(o[t][e+1].textContent),max:Number(o[t][e+2].textContent),table:o[t][e+3].textContent,amount:o[t][e+4].textContent});this.tables.push(l)}}}const at=new URLSearchParams(window.location.search).get("theme")??(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");function ut(t){window.location.search=`theme=${t}`}function dt(t){let e;return{c(){e=u("link"),m(e,"rel","stylesheet"),m(e,"href","https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"),m(e,"integrity","sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"),m(e,"crossorigin","anonymous")},m(t,n){s(t,e,n)},d(t){t&&i(e)}}}function ft(t){let e;return{c(){e=u("link"),m(e,"rel","stylesheet"),m(e,"href","https://cdn.jsdelivr.net/gh/vinorodrigues/bootstrap-dark@0.6.1/dist/bootstrap-dark.min.css")},m(t,n){s(t,e,n)},d(t){t&&i(e)}}}function ht(e){let n,o,l;return{c(){n=u("a"),n.textContent="Dark mode",m(n,"href","#")},m(t,r){s(t,n,r),o||(l=h(n,"click",e[2]),o=!0)},p:t,d(t){t&&i(n),o=!1,l()}}}function mt(e){let n,o,l;return{c(){n=u("a"),n.textContent="Light mode",m(n,"href","#")},m(t,r){s(t,n,r),o||(l=h(n,"click",e[1]),o=!0)},p:t,d(t){t&&i(n),o=!1,l()}}}function pt(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function bt(e){let n,o;return n=new ct({props:{tables:e[0].tables}}),{c(){U(n.$$.fragment)},m(t,e){D(n,t,e),o=!0},p:t,i(t){o||(M(n.$$.fragment,t),o=!0)},o(t){z(n.$$.fragment,t),o=!1},d(t){H(n,t)}}}function gt(e){let n;return{c(){n=d("Loading table data...")},m(t,e){s(t,n,e)},p:t,i:t,o:t,d(t){t&&i(n)}}}function $t(t){let e,n,o,l,r,a,h,p,b,g,$;let v=("dark"==at?ft:dt)(t);let k=("dark"==at?mt:ht)(t),y={ctx:t,current:null,token:null,hasCatch:!1,pending:gt,then:bt,catch:pt,blocks:[,,,]};return O(t[0].loadData(),y),{c(){v.c(),e=d(""),n=f(),o=u("main"),l=u("div"),r=u("div"),r.innerHTML='<div class="col"><h1>Table Roller</h1></div>',a=f(),h=u("div"),k.c(),p=f(),b=u("hr"),g=f(),y.block.c(),m(r,"class","row"),m(h,"class","position-topright m-3"),m(l,"class","p-2"),m(o,"id","app")},m(t,i){v.m(document.head,null),c(document.head,e),s(t,n,i),s(t,o,i),c(o,l),c(l,r),c(l,a),c(l,h),k.m(h,null),c(l,p),c(l,b),c(l,g),y.block.m(l,y.anchor=null),y.mount=()=>l,y.anchor=null,$=!0},p(e,[n]){t=e,k.p(t,n),function(t,e,n){const o=e.slice(),{resolved:l}=t;t.current===t.then&&(o[t.value]=l),t.current===t.catch&&(o[t.error]=l),t.block.p(o,n)}(y,t,n)},i(t){$||(M(y.block),$=!0)},o(t){for(let t=0;t<3;t+=1){z(y.blocks[t])}$=!1},d(t){v.d(t),i(e),t&&i(n),t&&i(o),k.d(),y.block.d(),y.token=null,y=null}}}function vt(t){return[new it,()=>ut("light"),()=>ut("dark")]}return new class extends Q{constructor(t){super(),K(this,t,vt,$t,r,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map