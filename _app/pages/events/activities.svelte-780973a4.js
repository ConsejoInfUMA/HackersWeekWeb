import{S as C,i as H,s as I,x as N,y as S,z as w,n as z,r as p,p as g,C as B,e as x,k as $,t as G,l as y,N as M,c as k,d as c,m as b,a as R,h as W,b as v,G as A,g as d,q as D,I as F,o as J}from"../../chunks/index-931a37f3.js";import{a as j}from"../../chunks/activities-b56c38b5.js";import{T as K}from"../../chunks/tarjeta-1f1d99e4.js";function q(i,l,n){const o=i.slice();return o[0]=l[n],o}function E(i){let l,n;return l=new K({props:{evento:i[0]}}),{c(){N(l.$$.fragment)},l(o){S(l.$$.fragment,o)},m(o,f){w(l,o,f),n=!0},p:z,i(o){n||(p(l.$$.fragment,o),n=!0)},o(o){g(l.$$.fragment,o),n=!1},d(o){B(l,o)}}}function L(i){let l,n,o,f,h,m,_,r=j,t=[];for(let e=0;e<r.length;e+=1)t[e]=E(q(i,r,e));const T=e=>g(t[e],1,1,()=>{t[e]=null});return{c(){l=x("meta"),n=$(),o=x("h3"),f=G("Actividades"),h=$();for(let e=0;e<t.length;e+=1)t[e].c();m=y(),this.h()},l(e){const s=M('[data-svelte="svelte-vebuah"]',document.head);l=k(s,"META",{name:!0,content:!0}),s.forEach(c),n=b(e),o=k(e,"H3",{class:!0});var a=R(o);f=W(a,"Actividades"),a.forEach(c),h=b(e);for(let u=0;u<t.length;u+=1)t[u].l(e);m=y(),this.h()},h(){document.title="Actividades",v(l,"name","description"),v(l,"content","Informaci\xF3n sobre los actividades como videojuegos y jornadas de Rol entre otras, de la Hackers Week 9."),v(o,"class","title")},m(e,s){A(document.head,l),d(e,n,s),d(e,o,s),A(o,f),d(e,h,s);for(let a=0;a<t.length;a+=1)t[a].m(e,s);d(e,m,s),_=!0},p(e,[s]){if(s&0){r=j;let a;for(a=0;a<r.length;a+=1){const u=q(e,r,a);t[a]?(t[a].p(u,s),p(t[a],1)):(t[a]=E(u),t[a].c(),p(t[a],1),t[a].m(m.parentNode,m))}for(J(),a=r.length;a<t.length;a+=1)T(a);D()}},i(e){if(!_){for(let s=0;s<r.length;s+=1)p(t[s]);_=!0}},o(e){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)g(t[s]);_=!1},d(e){c(l),e&&c(n),e&&c(o),e&&c(h),F(t,e),e&&c(m)}}}class U extends C{constructor(l){super();H(this,l,null,L,I,{})}}export{U as default};