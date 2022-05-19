var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function l(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function i(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e){t.value=null==e?"":e}function g(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}t.selectedIndex=-1}let $;function v(t){$=t}function y(){if(!$)throw new Error("Function called outside component initialization");return $}const k=[],x=[],_=[],w=[],C=Promise.resolve();let N=!1;function E(t){_.push(t)}const O=new Set;let T=0;function M(){const t=$;do{for(;T<k.length;){const t=k[T];T++,v(t),P(t.$$)}for(v(null),k.length=0,T=0;x.length;)x.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];O.has(e)||(O.add(e),e())}_.length=0}while(k.length);for(;w.length;)w.pop()();N=!1,O.clear(),v(t)}function P(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const R=new Set;let S;function A(){S={r:0,c:[],p:S}}function L(){S.r||o(S.c),S=S.p}function j(t,e){t&&t.i&&(R.delete(t),t.i(e))}function q(t,e,n,o){if(t&&t.o){if(R.has(t))return;R.add(t),S.c.push((()=>{R.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function H(t,e){const n=e.token={};function o(t,o,l,r){if(e.token!==n)return;e.resolved=r;let c=e.ctx;void 0!==l&&(c=c.slice(),c[l]=r);const s=t&&(e.current=t)(c);let a=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(A(),q(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),L())})):e.block.d(1),s.c(),j(s,1),s.m(e.mount(),e.anchor),a=!0),e.block=s,e.blocks&&(e.blocks[o]=s),a&&M()}if((l=t)&&"object"==typeof l&&"function"==typeof l.then){const n=y();if(t.then((t=>{v(n),o(e.then,1,e.value,t),v(null)}),(t=>{if(v(n),o(e.catch,2,e.error,t),v(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var l}function z(t){t&&t.c()}function G(t,n,r,c){const{fragment:s,on_mount:a,on_destroy:i,after_update:u}=t.$$;s&&s.m(n,r),c||E((()=>{const n=a.map(e).filter(l);i?i.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(E)}function Q(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(k.push(t),N||(N=!0,C.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(e,l,r,c,s,i,u,d=[-1]){const f=$;v(e);const h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(f?f.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:l.target||f.$$.root};u&&u(h.root);let p=!1;if(h.ctx=r?r(e,l.props||{},((t,n,...o)=>{const l=o.length?o[0]:n;return h.ctx&&s(h.ctx[t],h.ctx[t]=l)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](l),p&&F(e,t)),n})):[],h.update(),p=!0,o(h.before_update),h.fragment=!!c&&c(h.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);h.fragment&&h.fragment.l(t),t.forEach(a)}else h.fragment&&h.fragment.c();l.intro&&j(e.$$.fragment),G(e,l.target,l.anchor,l.customElement),M()}v(f)}class X{$destroy(){Q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function B(e){let n,o,l,r,i=e[0].name+"";return{c(){n=u("button"),o=d(i),p(n,"class","btn btn-light border-dark m-1")},m(t,a){s(t,n,a),c(n,o),l||(r=h(n,"click",e[2]),l=!0)},p(t,[e]){1&e&&i!==(i=t[0].name+"")&&m(o,i)},i:t,o:t,d(t){t&&a(n),l=!1,r()}}}function D(t,e,n){let{table:o}=e,{handleRoll:l}=e;return t.$$set=t=>{"table"in t&&n(0,o=t.table),"handleRoll"in t&&n(1,l=t.handleRoll)},[o,l,()=>l(o)]}class I extends X{constructor(t){super(),U(this,t,D,B,r,{table:0,handleRoll:1})}}const Z=["0","1","2","3","4","5","6","7","8","9"];const K=new class{roll(t){let e=this.tokenize(t);return this.execute(e)}tokenize(t){let e=[],n=0;for(;n<t.length;){let l={value:t[n]};if(o=t[n],Z.indexOf(o)>=0){let o=e.length>0?e[e.length-1]:{};if("digit"==o.type){o.value+=t[n++];continue}l.type="digit"}"d"==t[n]&&(l.type="die"),"+"==t[n]&&(l.type="plus"),"-"==t[n]&&(l.type="minus"),e.push(l),n++}var o;return e}execute(t){let e=Number(t[0].value),n=Number(t[2].value),o=5==t.length&&"plus"==t[3].type?Number(t[4].value):0,l=5==t.length&&"minus"==t[3].type?Number(t[4].value):0,r=0;for(;e>0;)r+=Math.floor(Math.random()*n+1),e--;return r+o-l}};let V=({table:t,modifier:e,tables:n})=>{let o=K.roll(t.roll+e),l=Math.max(...t.entries.map((t=>t.max))),r=Math.min(...t.entries.map((t=>t.min)));o>l&&(o=l),o<r&&(o=r);let c=t.entries.find((t=>t.min<=o&&t.max>=o));if(!c)return void alert(`Error - rolled ${o} on table ${t.name}`);let s=c.name;if(c.amount){s=`${s} (${K.roll(c.amount)})`}let a=[{roll:o,table:t.name,description:s}];return c.table?(t=n.find((t=>t.name==c.table)))?a.concat(V({table:t,modifier:e,tables:n})):(a.push({roll:0,table:null,description:`Could not find table named ${a[a.length-1].table}`}),a):a};var W={rollOnTable:V};function J(t,e,n){const o=t.slice();return o[14]=e[n],o}function Y(t,e,n){const o=t.slice();return o[17]=e[n],o}function tt(t,e,n){const o=t.slice();return o[20]=e[n],o}function et(e){let n,o,l,r=e[20]+"";return{c(){n=u("option"),o=d(r),n.__value=l=e[20],n.value=n.__value},m(t,e){s(t,n,e),c(n,o)},p:t,d(t){t&&a(n)}}}function nt(t){let e,n;return e=new I({props:{table:t[17],handleRoll:t[7]}}),{c(){z(e.$$.fragment)},m(t,o){G(e,t,o),n=!0},p(t,n){const o={};16&n&&(o.table=t[17]),e.$set(o)},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){q(e.$$.fragment,t),n=!1},d(t){Q(e,t)}}}function ot(t){let e,n,o,l,r,i,f,h=t[14].roll+"",p=t[14].table+"",b=t[14].description+"";return{c(){var t,c,s,a;e=u("p"),n=d("Rolled "),o=d(h),l=d(" on "),r=d(p),i=d(": "),f=d(b),t=e,c="white-space",null===(s="pre-wrap")?t.style.removeProperty(c):t.style.setProperty(c,s,a?"important":"")},m(t,a){s(t,e,a),c(e,n),c(e,o),c(e,l),c(e,r),c(e,i),c(e,f)},p(t,e){8&e&&h!==(h=t[14].roll+"")&&m(o,h),8&e&&p!==(p=t[14].table+"")&&m(r,p),8&e&&b!==(b=t[14].description+"")&&m(f,b)},d(t){t&&a(e)}}}function lt(t){let e,n,l,r,$,v,y,k,x,_,w,C,N,O,T,M,P,R,S,H,z,G,Q,F,U,X,B,D,I,Z,K,V,W,lt=t[5],rt=[];for(let e=0;e<lt.length;e+=1)rt[e]=et(tt(t,lt,e));let ct=t[4],st=[];for(let e=0;e<ct.length;e+=1)st[e]=nt(Y(t,ct,e));const at=t=>q(st[t],1,1,(()=>{st[t]=null}));let it=t[3],ut=[];for(let e=0;e<it.length;e+=1)ut[e]=ot(J(t,it,e));return{c(){e=u("div"),n=u("div"),l=u("div"),r=u("div"),$=u("div"),v=u("div"),y=u("div"),k=u("div"),x=u("button"),x.textContent="↓",_=f(),w=u("button"),C=d(t[2]),N=f(),O=u("button"),O.textContent="↑",T=f(),M=u("button"),M.textContent="reset",P=f(),R=u("input"),S=f(),H=u("select"),z=u("option");for(let t=0;t<rt.length;t+=1)rt[t].c();G=f(),Q=u("div"),F=u("div"),U=u("div"),X=u("div");for(let t=0;t<st.length;t+=1)st[t].c();B=f(),D=u("div"),I=u("div"),Z=u("div");for(let t=0;t<ut.length;t+=1)ut[t].c();p(x,"class","btn btn-light border-dark"),p(w,"class","btn btn-dark border-dark"),p(O,"class","btn btn-light border-dark"),p(k,"class","btn-group m-1"),p(M,"class","btn btn-light border-dark m-1"),p(y,"class","d-flex"),p(R,"class","form-control"),p(R,"placeholder","filter"),z.__value="",z.value=z.__value,p(H,"class","form-control"),void 0===t[1]&&E((()=>t[13].call(H))),p(v,"class","card-body"),p($,"class","card"),p(r,"class","col"),p(l,"class","row"),p(X,"class","card-body"),p(U,"class","card"),p(F,"class","col"),p(Q,"class","row"),p(n,"class","col-md-6"),p(Z,"class","card-body"),p(I,"class","card"),p(D,"class","col"),p(e,"class","row")},m(o,a){s(o,e,a),c(e,n),c(n,l),c(l,r),c(r,$),c($,v),c(v,y),c(y,k),c(k,x),c(k,_),c(k,w),c(w,C),c(k,N),c(k,O),c(y,T),c(y,M),c(v,P),c(v,R),b(R,t[0]),c(v,S),c(v,H),c(H,z);for(let t=0;t<rt.length;t+=1)rt[t].m(H,null);g(H,t[1]),c(n,G),c(n,Q),c(Q,F),c(F,U),c(U,X);for(let t=0;t<st.length;t+=1)st[t].m(X,null);c(e,B),c(e,D),c(D,I),c(I,Z);for(let t=0;t<ut.length;t+=1)ut[t].m(Z,null);K=!0,V||(W=[h(x,"click",t[9]),h(O,"click",t[10]),h(M,"click",t[11]),h(R,"input",t[12]),h(H,"change",t[13])],V=!0)},p(t,[e]){if((!K||4&e)&&m(C,t[2]),1&e&&R.value!==t[0]&&b(R,t[0]),32&e){let n;for(lt=t[5],n=0;n<lt.length;n+=1){const o=tt(t,lt,n);rt[n]?rt[n].p(o,e):(rt[n]=et(o),rt[n].c(),rt[n].m(H,null))}for(;n<rt.length;n+=1)rt[n].d(1);rt.length=lt.length}if(34&e&&g(H,t[1]),144&e){let n;for(ct=t[4],n=0;n<ct.length;n+=1){const o=Y(t,ct,n);st[n]?(st[n].p(o,e),j(st[n],1)):(st[n]=nt(o),st[n].c(),j(st[n],1),st[n].m(X,null))}for(A(),n=ct.length;n<st.length;n+=1)at(n);L()}if(8&e){let n;for(it=t[3],n=0;n<it.length;n+=1){const o=J(t,it,n);ut[n]?ut[n].p(o,e):(ut[n]=ot(o),ut[n].c(),ut[n].m(Z,null))}for(;n<ut.length;n+=1)ut[n].d(1);ut.length=it.length}},i(t){if(!K){for(let t=0;t<ct.length;t+=1)j(st[t]);K=!0}},o(t){st=st.filter(Boolean);for(let t=0;t<st.length;t+=1)q(st[t]);K=!1},d(t){t&&a(e),i(rt,t),i(st,t),i(ut,t),V=!1,o(W)}}}function rt(t,e,n){let o,{tables:l=[]}=e,r="",c="+0",s="",a=[],i=[...new Set(l.map((t=>t.category)))];function u(t){t+=Number(c),n(2,c=t<0?`${t}`:`+${t}`)}i.sort(((t,e)=>t.localeCompare(e)));return t.$$set=t=>{"tables"in t&&n(8,l=t.tables)},t.$$.update=()=>{259&t.$$.dirty&&n(4,o=l.filter((t=>!s||t.category==s)).filter((t=>t.name.toLowerCase().includes(r.toLowerCase()))))},[r,s,c,a,o,i,u,function(t){n(3,a=W.rollOnTable({table:t,modifier:c,tables:l}))},l,()=>u(-1),()=>u(1),()=>n(2,c="+0"),function(){r=this.value,n(0,r)},function(){s=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(1,s),n(5,i)}]}class ct extends X{constructor(t){super(),U(this,t,rt,lt,r,{tables:8})}}class st{constructor(t){this.url=t.url}async get(t=""){return new Promise((e=>{let n=new XMLHttpRequest;n.open("get",`${this.url}/${t}`),n.onload=()=>{n.status>299?e():e(n.response)},n.send()}))}}class at{constructor(){this.tables=[],this.client=new st({url:"https://docs.google.com/spreadsheets/d/e/2PACX-1vTwssniGQQzgz2QugHShUka6ZOUy83f50f1x7TmkWNHnICP2jk4GbjJUKHX8ooEZR7mHZiAtqzGoeUL"})}async loadData(){let t=await this.client.get("pubhtml"),e=(new DOMParser).parseFromString(t,"text/html"),n=[...e.querySelectorAll("#sheets-viewport > div")],o=n.map((t=>t.querySelectorAll("td")));for(let t=0;t<n.length;t++){let l={name:e.querySelector(`#sheet-button-${n[t].id}`).textContent,category:o[t][0].textContent,roll:o[t][1].textContent,entries:[]},r=o[t].length/5;for(let e=15;e<5*r;e+=5)l.entries.push({name:o[t][e].innerText,min:Number(o[t][e+1].textContent),max:Number(o[t][e+2].textContent),table:o[t][e+3].textContent,amount:o[t][e+4].textContent});this.tables.push(l)}}}function it(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function ut(e){let n,o;return n=new ct({props:{tables:e[0].tables}}),{c(){z(n.$$.fragment)},m(t,e){G(n,t,e),o=!0},p:t,i(t){o||(j(n.$$.fragment,t),o=!0)},o(t){q(n.$$.fragment,t),o=!1},d(t){Q(n,t)}}}function dt(e){let n;return{c(){n=d("Loading table data...")},m(t,e){s(t,n,e)},p:t,i:t,o:t,d(t){t&&a(n)}}}function ft(t){let e,n,o,l,r,i,d,h,m,b={ctx:t,current:null,token:null,hasCatch:!1,pending:dt,then:ut,catch:it,blocks:[,,,]};return H(t[0].loadData(),b),{c(){e=u("link"),n=f(),o=u("main"),l=u("div"),r=u("div"),r.innerHTML='<div class="col"><h1>Table Roller</h1></div>',i=f(),d=u("hr"),h=f(),b.block.c(),p(e,"rel","stylesheet"),p(e,"href","https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"),p(e,"integrity","sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"),p(e,"crossorigin","anonymous"),p(r,"class","row"),p(l,"class","p-1"),p(l,"id","$"+this.id)},m(t,a){c(document.head,e),s(t,n,a),s(t,o,a),c(o,l),c(l,r),c(l,i),c(l,d),c(l,h),b.block.m(l,b.anchor=null),b.mount=()=>l,b.anchor=null,m=!0},p(e,[n]){!function(t,e,n){const o=e.slice(),{resolved:l}=t;t.current===t.then&&(o[t.value]=l),t.current===t.catch&&(o[t.error]=l),t.block.p(o,n)}(b,t=e,n)},i(t){m||(j(b.block),m=!0)},o(t){for(let t=0;t<3;t+=1){q(b.blocks[t])}m=!1},d(t){a(e),t&&a(n),t&&a(o),b.block.d(),b.token=null,b=null}}}function ht(t){return[new at]}return new class extends X{constructor(t){super(),U(this,t,ht,ft,r,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
