import{S as j,i as H,s as M,x as S,y as w,z,n as A,r as d,p as g,C as B,e as k,k as v,t as G,l as x,L as I,c as y,d as i,m as C,a as L,h as N,b as $,G as b,g as p,q as W,M as D,o as F}from"../../chunks/index-e771b252.js";import{T as J,d as K}from"../../chunks/tarjeta-98dbc5fd.js";function q(l,a,r){const o=l.slice();return o[1]=a[r],o}function E(l){let a,r;return a=new J({props:{evento:l[1]}}),{c(){S(a.$$.fragment)},l(o){w(a.$$.fragment,o)},m(o,u){z(a,o,u),r=!0},p:A,i(o){r||(d(a.$$.fragment,o),r=!0)},o(o){g(a.$$.fragment,o),r=!1},d(o){B(a,o)}}}function O(l){let a,r,o,u,_,f,h,c=l[0],t=[];for(let e=0;e<c.length;e+=1)t[e]=E(q(l,c,e));const T=e=>g(t[e],1,1,()=>{t[e]=null});return{c(){a=k("meta"),r=v(),o=k("h3"),u=G("Conferencias"),_=v();for(let e=0;e<t.length;e+=1)t[e].c();f=x(),this.h()},l(e){const s=I('[data-svelte="svelte-7nr1np"]',document.head);a=y(s,"META",{name:!0,content:!0}),s.forEach(i),r=C(e),o=y(e,"H3",{class:!0});var n=L(o);u=N(n,"Conferencias"),n.forEach(i),_=C(e);for(let m=0;m<t.length;m+=1)t[m].l(e);f=x(),this.h()},h(){document.title="Conferencias",$(a,"name","description"),$(a,"content","Informaci\xF3n sobre las conferencias de la Hackers Week 8."),$(o,"class","title")},m(e,s){b(document.head,a),p(e,r,s),p(e,o,s),b(o,u),p(e,_,s);for(let n=0;n<t.length;n+=1)t[n].m(e,s);p(e,f,s),h=!0},p(e,[s]){if(s&1){c=e[0];let n;for(n=0;n<c.length;n+=1){const m=q(e,c,n);t[n]?(t[n].p(m,s),d(t[n],1)):(t[n]=E(m),t[n].c(),d(t[n],1),t[n].m(f.parentNode,f))}for(F(),n=c.length;n<t.length;n+=1)T(n);W()}},i(e){if(!h){for(let s=0;s<c.length;s+=1)d(t[s]);h=!0}},o(e){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)g(t[s]);h=!1},d(e){i(a),e&&i(r),e&&i(o),e&&i(_),D(t,e),e&&i(f)}}}function P(l){const{conferences:a}=K;return[a]}class U extends j{constructor(a){super();H(this,a,P,O,M,{})}}export{U as default};
