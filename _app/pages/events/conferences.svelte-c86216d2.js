import{S as H,i as I,s as N,x as S,y as w,z,n as A,r as d,p as x,C as B,e as $,k as v,t as G,l as k,N as M,c as y,d as c,m as C,a as W,h as D,b as g,G as b,g as p,q as F,I as J,o as K}from"../../chunks/index-517658b1.js";import{c as q}from"../../chunks/conferences-ec0645a8.js";import{T as L}from"../../chunks/tarjeta-48b3c5a2.js";function E(i,s,l){const n=i.slice();return n[0]=s[l],n}function T(i){let s,l;return s=new L({props:{evento:i[0]}}),{c(){S(s.$$.fragment)},l(n){w(s.$$.fragment,n)},m(n,u){z(s,n,u),l=!0},p:A,i(n){l||(d(s.$$.fragment,n),l=!0)},o(n){x(s.$$.fragment,n),l=!1},d(n){B(s,n)}}}function O(i){let s,l,n,u,_,f,h,r=q,t=[];for(let e=0;e<r.length;e+=1)t[e]=T(E(i,r,e));const j=e=>x(t[e],1,1,()=>{t[e]=null});return{c(){s=$("meta"),l=v(),n=$("h3"),u=G("Conferencias"),_=v();for(let e=0;e<t.length;e+=1)t[e].c();f=k(),this.h()},l(e){const o=M('[data-svelte="svelte-1s2vpam"]',document.head);s=y(o,"META",{name:!0,content:!0}),o.forEach(c),l=C(e),n=y(e,"H3",{class:!0});var a=W(n);u=D(a,"Conferencias"),a.forEach(c),_=C(e);for(let m=0;m<t.length;m+=1)t[m].l(e);f=k(),this.h()},h(){document.title="Conferencias",g(s,"name","description"),g(s,"content","Informaci\xF3n sobre las conferencias de la Hackers Week 9."),g(n,"class","title")},m(e,o){b(document.head,s),p(e,l,o),p(e,n,o),b(n,u),p(e,_,o);for(let a=0;a<t.length;a+=1)t[a].m(e,o);p(e,f,o),h=!0},p(e,[o]){if(o&0){r=q;let a;for(a=0;a<r.length;a+=1){const m=E(e,r,a);t[a]?(t[a].p(m,o),d(t[a],1)):(t[a]=T(m),t[a].c(),d(t[a],1),t[a].m(f.parentNode,f))}for(K(),a=r.length;a<t.length;a+=1)j(a);F()}},i(e){if(!h){for(let o=0;o<r.length;o+=1)d(t[o]);h=!0}},o(e){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)x(t[o]);h=!1},d(e){c(s),e&&c(l),e&&c(n),e&&c(_),J(t,e),e&&c(f)}}}class U extends H{constructor(s){super();I(this,s,null,O,N,{})}}export{U as default};
