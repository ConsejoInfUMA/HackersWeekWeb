import{F as be,S as ae,i as te,s as se,e as f,t as D,k as A,c as d,a as h,h as S,m as C,d as r,b as m,g as P,G as a,n as R,H as ge,I as Ee,J as $e,x as fe,y as de,z as he,K as Ie,L as Ae,M as Ce,r as Z,p as ee,C as ve}from"../chunks/index-517658b1.js";import{b as pe}from"../chunks/paths-396f020f.js";const ke=()=>{const l=be("__svelte__");return{page:{subscribe:l.page.subscribe},navigating:{subscribe:l.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:l.navigating.subscribe}},session:l.session,updated:l.updated}},je={subscribe(l){return ke().page.subscribe(l)}};function _e(l,e,n){const s=l.slice();return s[4]=e[n].href,s[5]=e[n].name,s}function me(l){let e,n=l[5]+"",s,i,c;return{c(){e=f("a"),s=D(n),i=A(),this.h()},l(b){e=d(b,"A",{class:!0,href:!0});var o=h(e);s=S(o,n),i=C(o),o.forEach(r),this.h()},h(){m(e,"class","navbar-item"),m(e,"href",c=pe+"/"+l[4])},m(b,o){P(b,e,o),a(e,s),a(e,i)},p:R,d(b){b&&r(e)}}}function De(l){let e,n,s,i,c,b,o,v,t,g,w,H,N,L,k,j,$,T,x,V=l[2],p=[];for(let _=0;_<V.length;_+=1)p[_]=me(_e(l,V,_));return{c(){e=f("nav"),n=f("div"),s=f("a"),i=f("h1"),c=D("HW<>9"),b=A(),o=f("a"),v=f("span"),t=A(),g=f("span"),w=A(),H=f("span"),L=A(),k=f("div"),j=f("div");for(let _=0;_<p.length;_+=1)p[_].c();this.h()},l(_){e=d(_,"NAV",{class:!0,"aria-label":!0});var E=h(e);n=d(E,"DIV",{class:!0});var u=h(n);s=d(u,"A",{class:!0,href:!0});var y=h(s);i=d(y,"H1",{});var B=h(i);c=S(B,"HW<>9"),B.forEach(r),y.forEach(r),b=C(u),o=d(u,"A",{role:!0,class:!0,"aria-label":!0,"aria-expanded":!0});var I=h(o);v=d(I,"SPAN",{"aria-hidden":!0}),h(v).forEach(r),t=C(I),g=d(I,"SPAN",{"aria-hidden":!0}),h(g).forEach(r),w=C(I),H=d(I,"SPAN",{"aria-hidden":!0}),h(H).forEach(r),I.forEach(r),u.forEach(r),L=C(E),k=d(E,"DIV",{class:!0});var F=h(k);j=d(F,"DIV",{class:!0});var M=h(j);for(let U=0;U<p.length;U+=1)p[U].l(M);M.forEach(r),F.forEach(r),E.forEach(r),this.h()},h(){m(s,"class","navbar-item"),m(s,"href",pe+"/"),m(v,"aria-hidden","true"),m(g,"aria-hidden","true"),m(H,"aria-hidden","true"),m(o,"role","button"),m(o,"class",N="navbar-burger "+l[1]),m(o,"aria-label","menu"),m(o,"aria-expanded","false"),m(n,"class","navbar-brand"),m(j,"class","navbar-start"),m(k,"class",$="navbar-menu "+l[1]),m(e,"class","navbar is-black"),m(e,"aria-label","main navigation")},m(_,E){P(_,e,E),a(e,n),a(n,s),a(s,i),a(i,c),a(n,b),a(n,o),a(o,v),a(o,t),a(o,g),a(o,w),a(o,H),a(e,L),a(e,k),a(k,j);for(let u=0;u<p.length;u+=1)p[u].m(j,null);T||(x=ge(o,"click",l[3]),T=!0)},p(_,[E]){if(E&2&&N!==(N="navbar-burger "+_[1])&&m(o,"class",N),E&4){V=_[2];let u;for(u=0;u<V.length;u+=1){const y=_e(_,V,u);p[u]?p[u].p(y,E):(p[u]=me(y),p[u].c(),p[u].m(j,null))}for(;u<p.length;u+=1)p[u].d(1);p.length=V.length}E&2&&$!==($="navbar-menu "+_[1])&&m(k,"class",$)},i:R,o:R,d(_){_&&r(e),Ee(p,_),T=!1,x()}}}function Se(l){return l?"is-active":""}function we(l,e,n){let s;const i=[{href:"info/aboutus",name:"\xBFQu\xE9 es la Hackers Week?"},{href:"events/hackersdays",name:"Hackers Days"}];let c=!1;je.subscribe(()=>n(0,c=!1));const b=()=>n(0,c=!c);return l.$$.update=()=>{l.$$.dirty&1&&n(1,s=Se(c))},[c,s,i,b]}class Ve extends ae{constructor(e){super();te(this,e,we,De,se,{})}}function He(l){let e,n,s,i,c,b,o,v,t,g,w,H,N,L,k,j,$,T,x,V,p,_,E,u,y,B,I,F,M,U;return{c(){e=f("footer"),n=f("div"),s=f("div"),i=f("div"),c=f("b"),b=D("CEETSII"),o=A(),v=f("ul"),t=f("li"),g=D("Correo: "),w=f("a"),H=D("consejoinfuma@gmail.com"),N=A(),L=f("li"),k=D("Despacho: Complejo Tecnol\xF3gico - 3.2.B.1"),j=A(),$=f("div"),T=f("b"),x=D("Redes Sociales"),V=A(),p=f("ul"),_=f("li"),E=D("Twitter "),u=f("a"),y=D("@ConsejoInfUMA"),B=A(),I=f("li"),F=D("Instagram "),M=f("a"),U=D("@consejoinfuma"),this.h()},l(W){e=d(W,"FOOTER",{class:!0});var O=h(e);n=d(O,"DIV",{class:!0});var re=h(n);s=d(re,"DIV",{class:!0});var q=h(s);i=d(q,"DIV",{class:!0});var z=h(i);c=d(z,"B",{});var le=h(c);b=S(le,"CEETSII"),le.forEach(r),o=C(z),v=d(z,"UL",{});var G=h(v);t=d(G,"LI",{});var Q=h(t);g=S(Q,"Correo: "),w=d(Q,"A",{href:!0});var ne=h(w);H=S(ne,"consejoinfuma@gmail.com"),ne.forEach(r),Q.forEach(r),N=C(G),L=d(G,"LI",{});var oe=h(L);k=S(oe,"Despacho: Complejo Tecnol\xF3gico - 3.2.B.1"),oe.forEach(r),G.forEach(r),z.forEach(r),j=C(q),$=d(q,"DIV",{class:!0});var J=h($);T=d(J,"B",{});var ie=h(T);x=S(ie,"Redes Sociales"),ie.forEach(r),V=C(J),p=d(J,"UL",{});var K=h(p);_=d(K,"LI",{});var X=h(_);E=S(X,"Twitter "),u=d(X,"A",{href:!0});var ce=h(u);y=S(ce,"@ConsejoInfUMA"),ce.forEach(r),X.forEach(r),B=C(K),I=d(K,"LI",{});var Y=h(I);F=S(Y,"Instagram "),M=d(Y,"A",{href:!0});var ue=h(M);U=S(ue,"@consejoinfuma"),ue.forEach(r),Y.forEach(r),K.forEach(r),J.forEach(r),q.forEach(r),re.forEach(r),O.forEach(r),this.h()},h(){m(w,"href","mailto:consejoinfuma@gmail.com"),m(i,"class","column has-text-left"),m(u,"href","https://twitter.com/ConsejoInfUMA"),m(M,"href","https://www.instagram.com/consejoinfuma/"),m($,"class","column"),m(s,"class","columns mx-4"),m(n,"class","content has-text-light"),m(e,"class","footer has-background-black")},m(W,O){P(W,e,O),a(e,n),a(n,s),a(s,i),a(i,c),a(c,b),a(i,o),a(i,v),a(v,t),a(t,g),a(t,w),a(w,H),a(v,N),a(v,L),a(L,k),a(s,j),a(s,$),a($,T),a(T,x),a($,V),a($,p),a(p,_),a(_,E),a(_,u),a(u,y),a(p,B),a(p,I),a(I,F),a(I,M),a(M,U)},p:R,i:R,o:R,d(W){W&&r(e)}}}class Le extends ae{constructor(e){super();te(this,e,null,He,se,{})}}function Te(l){let e,n,s,i,c,b;e=new Ve({});const o=l[1].default,v=$e(o,l,l[0],null);return c=new Le({}),{c(){fe(e.$$.fragment),n=A(),s=f("main"),v&&v.c(),i=A(),fe(c.$$.fragment)},l(t){de(e.$$.fragment,t),n=C(t),s=d(t,"MAIN",{});var g=h(s);v&&v.l(g),g.forEach(r),i=C(t),de(c.$$.fragment,t)},m(t,g){he(e,t,g),P(t,n,g),P(t,s,g),v&&v.m(s,null),P(t,i,g),he(c,t,g),b=!0},p(t,[g]){v&&v.p&&(!b||g&1)&&Ie(v,o,t,t[0],b?Ce(o,t[0],g,null):Ae(t[0]),null)},i(t){b||(Z(e.$$.fragment,t),Z(v,t),Z(c.$$.fragment,t),b=!0)},o(t){ee(e.$$.fragment,t),ee(v,t),ee(c.$$.fragment,t),b=!1},d(t){ve(e,t),t&&r(n),t&&r(s),v&&v.d(t),t&&r(i),ve(c,t)}}}function ye(l,e,n){let{$$slots:s={},$$scope:i}=e;return l.$$set=c=>{"$$scope"in c&&n(0,i=c.$$scope)},[i,s]}class Ue extends ae{constructor(e){super();te(this,e,ye,Te,se,{})}}export{Ue as default};
