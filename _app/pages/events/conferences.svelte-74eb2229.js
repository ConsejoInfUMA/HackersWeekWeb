import{S as H,i as I,s as S,x as w,y as z,z as A,n as B,r as d,p as x,C as G,e as $,k as v,t as M,l as k,O as N,c as y,d as c,m as C,a as O,h as W,b as g,G as b,g as p,q as D,I as F,o as J}from"../../chunks/index-f3d17db4.js";import{c as q}from"../../chunks/conferences-6a7bfa4f.js";import{T as K}from"../../chunks/tarjeta-882f7611.js";function E(i,s,l){const n=i.slice();return n[0]=s[l],n}function T(i){let s,l;return s=new K({props:{evento:i[0]}}),{c(){w(s.$$.fragment)},l(n){z(s.$$.fragment,n)},m(n,u){A(s,n,u),l=!0},p:B,i(n){l||(d(s.$$.fragment,n),l=!0)},o(n){x(s.$$.fragment,n),l=!1},d(n){G(s,n)}}}function L(i){let s,l,n,u,_,f,h,r=q,t=[];for(let e=0;e<r.length;e+=1)t[e]=T(E(i,r,e));const j=e=>x(t[e],1,1,()=>{t[e]=null});return{c(){s=$("meta"),l=v(),n=$("h3"),u=M("Conferencias"),_=v();for(let e=0;e<t.length;e+=1)t[e].c();f=k(),this.h()},l(e){const o=N('[data-svelte="svelte-1s2vpam"]',document.head);s=y(o,"META",{name:!0,content:!0}),o.forEach(c),l=C(e),n=y(e,"H3",{class:!0});var a=O(n);u=W(a,"Conferencias"),a.forEach(c),_=C(e);for(let m=0;m<t.length;m+=1)t[m].l(e);f=k(),this.h()},h(){document.title="Conferencias",g(s,"name","description"),g(s,"content","Informaci\xF3n sobre las conferencias de la Hackers Week 9."),g(n,"class","title")},m(e,o){b(document.head,s),p(e,l,o),p(e,n,o),b(n,u),p(e,_,o);for(let a=0;a<t.length;a+=1)t[a].m(e,o);p(e,f,o),h=!0},p(e,[o]){if(o&0){r=q;let a;for(a=0;a<r.length;a+=1){const m=E(e,r,a);t[a]?(t[a].p(m,o),d(t[a],1)):(t[a]=T(m),t[a].c(),d(t[a],1),t[a].m(f.parentNode,f))}for(J(),a=r.length;a<t.length;a+=1)j(a);D()}},i(e){if(!h){for(let o=0;o<r.length;o+=1)d(t[o]);h=!0}},o(e){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)x(t[o]);h=!1},d(e){c(s),e&&c(l),e&&c(n),e&&c(_),F(t,e),e&&c(f)}}}class U extends H{constructor(s){super();I(this,s,null,L,S,{})}}export{U as default};
