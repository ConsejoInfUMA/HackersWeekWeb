import{F as Ae,S as oe,i as ie,s as ce,e as c,t as $,k as A,c as f,a as u,h as k,m as C,d as s,b as h,g as z,G as e,n as G,H as Ce,I as Se,J as De,x as be,y as ge,z as Ee,K as He,L as Te,M as je,r as le,p as ne,C as $e}from"../chunks/index-f3d17db4.js";import{b as we}from"../chunks/paths-396f020f.js";const Le=()=>{const l=Ae("__svelte__");return{page:{subscribe:l.page.subscribe},navigating:{subscribe:l.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:l.navigating.subscribe}},session:l.session,updated:l.updated}},Ve={subscribe(l){return Le().page.subscribe(l)}};function ke(l,a,n){const r=l.slice();return r[4]=a[n].href,r[5]=a[n].name,r}function Ie(l){let a,n=l[5]+"",r,o,d;return{c(){a=c("a"),r=$(n),o=A(),this.h()},l(_){a=f(_,"A",{class:!0,href:!0});var g=u(a);r=k(g,n),o=C(g),g.forEach(s),this.h()},h(){h(a,"class","navbar-item"),h(a,"href",d=we+"/"+l[4])},m(_,g){z(_,a,g),e(a,r),e(a,o)},p:G,d(_){_&&s(a)}}}function Ne(l){let a,n,r,o,d,_,g,m,t,i,S,R,N,W,x,U,D,I,H,F,w,y,j=l[2],b=[];for(let p=0;p<j.length;p+=1)b[p]=Ie(ke(l,j,p));return{c(){a=c("nav"),n=c("div"),r=c("a"),o=c("span"),d=$("HW"),_=c("span"),g=$("<>"),m=$("9"),t=A(),i=c("a"),S=c("span"),R=A(),N=c("span"),W=A(),x=c("span"),D=A(),I=c("div"),H=c("div");for(let p=0;p<b.length;p+=1)b[p].c();this.h()},l(p){a=f(p,"NAV",{class:!0,"aria-label":!0});var E=u(a);n=f(E,"DIV",{class:!0});var v=u(n);r=f(v,"A",{class:!0,href:!0});var P=u(r);o=f(P,"SPAN",{class:!0});var T=u(o);d=k(T,"HW"),_=f(T,"SPAN",{class:!0});var M=u(_);g=k(M,"<>"),M.forEach(s),m=k(T,"9"),T.forEach(s),P.forEach(s),t=C(v),i=f(v,"A",{role:!0,class:!0,"aria-label":!0,"aria-expanded":!0});var L=u(i);S=f(L,"SPAN",{"aria-hidden":!0}),u(S).forEach(s),R=C(L),N=f(L,"SPAN",{"aria-hidden":!0}),u(N).forEach(s),W=C(L),x=f(L,"SPAN",{"aria-hidden":!0}),u(x).forEach(s),L.forEach(s),v.forEach(s),D=C(E),I=f(E,"DIV",{class:!0});var B=u(I);H=f(B,"DIV",{class:!0});var O=u(H);for(let V=0;V<b.length;V+=1)b[V].l(O);O.forEach(s),B.forEach(s),E.forEach(s),this.h()},h(){h(_,"class","has-text-primary"),h(o,"class","title is-6"),h(r,"class","navbar-item"),h(r,"href",we+"/"),h(S,"aria-hidden","true"),h(N,"aria-hidden","true"),h(x,"aria-hidden","true"),h(i,"role","button"),h(i,"class",U="navbar-burger "+l[1]),h(i,"aria-label","menu"),h(i,"aria-expanded","false"),h(n,"class","navbar-brand"),h(H,"class","navbar-start"),h(I,"class",F="navbar-menu "+l[1]),h(a,"class","navbar is-black"),h(a,"aria-label","main navigation")},m(p,E){z(p,a,E),e(a,n),e(n,r),e(r,o),e(o,d),e(o,_),e(_,g),e(o,m),e(n,t),e(n,i),e(i,S),e(i,R),e(i,N),e(i,W),e(i,x),e(a,D),e(a,I),e(I,H);for(let v=0;v<b.length;v+=1)b[v].m(H,null);w||(y=Ce(i,"click",l[3]),w=!0)},p(p,[E]){if(E&2&&U!==(U="navbar-burger "+p[1])&&h(i,"class",U),E&4){j=p[2];let v;for(v=0;v<j.length;v+=1){const P=ke(p,j,v);b[v]?b[v].p(P,E):(b[v]=Ie(P),b[v].c(),b[v].m(H,null))}for(;v<b.length;v+=1)b[v].d(1);b.length=j.length}E&2&&F!==(F="navbar-menu "+p[1])&&h(I,"class",F)},i:G,o:G,d(p){p&&s(a),Se(b,p),w=!1,y()}}}function We(l){return l?"is-active":""}function xe(l,a,n){let r;const o=[{href:"info/aboutus",name:"\xBFQu\xE9 es la Hackers Week?"},{href:"info/horario",name:"Horario"},{href:"events/conferences",name:"Conferencias"}];let d=!1;Ve.subscribe(()=>n(0,d=!1));const _=()=>n(0,d=!d);return l.$$.update=()=>{l.$$.dirty&1&&n(1,r=We(d))},[d,r,o,_]}class ye extends oe{constructor(a){super();ie(this,a,xe,Ne,ce,{})}}function Pe(l){let a,n,r,o,d,_,g,m,t,i,S,R,N,W,x,U,D,I,H,F,w,y,j,b,p,E,v,P,T,M,L,B,O,V,ee;return{c(){a=c("footer"),n=c("div"),r=c("div"),o=c("div"),d=c("b"),_=$("CEETSII"),g=A(),m=c("ul"),t=c("li"),i=$("Correo: "),S=c("a"),R=$("consejoinfuma@gmail.com"),N=A(),W=c("li"),x=$("Despacho: Complejo Tecnol\xF3gico - 3.2.B.1"),U=A(),D=c("div"),I=c("b"),H=$("Redes Sociales"),F=A(),w=c("ul"),y=c("li"),j=$("Twitter "),b=c("a"),p=$("@HackersWeek"),E=A(),v=c("li"),P=$("Instagram "),T=c("a"),M=$("@hackersweek"),L=A(),B=c("li"),O=$("Twitch "),V=c("a"),ee=$("@ConsejoInfUma"),this.h()},l(J){a=f(J,"FOOTER",{class:!0});var K=u(a);n=f(K,"DIV",{class:!0});var fe=u(n);r=f(fe,"DIV",{class:!0});var Q=u(r);o=f(Q,"DIV",{class:!0});var X=u(o);d=f(X,"B",{});var ue=u(d);_=k(ue,"CEETSII"),ue.forEach(s),g=C(X),m=f(X,"UL",{});var Y=u(m);t=f(Y,"LI",{});var ae=u(t);i=k(ae,"Correo: "),S=f(ae,"A",{href:!0});var he=u(S);R=k(he,"consejoinfuma@gmail.com"),he.forEach(s),ae.forEach(s),N=C(Y),W=f(Y,"LI",{});var de=u(W);x=k(de,"Despacho: Complejo Tecnol\xF3gico - 3.2.B.1"),de.forEach(s),Y.forEach(s),X.forEach(s),U=C(Q),D=f(Q,"DIV",{class:!0});var Z=u(D);I=f(Z,"B",{});var ve=u(I);H=k(ve,"Redes Sociales"),ve.forEach(s),F=C(Z),w=f(Z,"UL",{});var q=u(w);y=f(q,"LI",{});var te=u(y);j=k(te,"Twitter "),b=f(te,"A",{href:!0});var _e=u(b);p=k(_e,"@HackersWeek"),_e.forEach(s),te.forEach(s),E=C(q),v=f(q,"LI",{});var se=u(v);P=k(se,"Instagram "),T=f(se,"A",{href:!0});var me=u(T);M=k(me,"@hackersweek"),me.forEach(s),se.forEach(s),L=C(q),B=f(q,"LI",{});var re=u(B);O=k(re,"Twitch "),V=f(re,"A",{href:!0});var pe=u(V);ee=k(pe,"@ConsejoInfUma"),pe.forEach(s),re.forEach(s),q.forEach(s),Z.forEach(s),Q.forEach(s),fe.forEach(s),K.forEach(s),this.h()},h(){h(S,"href","mailto:consejoinfuma@gmail.com"),h(o,"class","column has-text-left"),h(b,"href","https://twitter.com/HackersWeek"),h(T,"href","https://www.instagram.com/hackersweek/"),h(V,"href","https://www.twitch.tv/consejoinfuma"),h(D,"class","column"),h(r,"class","columns mx-4"),h(n,"class","content has-text-light"),h(a,"class","footer has-background-black")},m(J,K){z(J,a,K),e(a,n),e(n,r),e(r,o),e(o,d),e(d,_),e(o,g),e(o,m),e(m,t),e(t,i),e(t,S),e(S,R),e(m,N),e(m,W),e(W,x),e(r,U),e(r,D),e(D,I),e(I,H),e(D,F),e(D,w),e(w,y),e(y,j),e(y,b),e(b,p),e(w,E),e(w,v),e(v,P),e(v,T),e(T,M),e(w,L),e(w,B),e(B,O),e(B,V),e(V,ee)},p:G,i:G,o:G,d(J){J&&s(a)}}}class Be extends oe{constructor(a){super();ie(this,a,null,Pe,ce,{})}}function Ue(l){let a,n,r,o,d,_;a=new ye({});const g=l[1].default,m=De(g,l,l[0],null);return d=new Be({}),{c(){be(a.$$.fragment),n=A(),r=c("main"),m&&m.c(),o=A(),be(d.$$.fragment)},l(t){ge(a.$$.fragment,t),n=C(t),r=f(t,"MAIN",{});var i=u(r);m&&m.l(i),i.forEach(s),o=C(t),ge(d.$$.fragment,t)},m(t,i){Ee(a,t,i),z(t,n,i),z(t,r,i),m&&m.m(r,null),z(t,o,i),Ee(d,t,i),_=!0},p(t,[i]){m&&m.p&&(!_||i&1)&&He(m,g,t,t[0],_?je(g,t[0],i,null):Te(t[0]),null)},i(t){_||(le(a.$$.fragment,t),le(m,t),le(d.$$.fragment,t),_=!0)},o(t){ne(a.$$.fragment,t),ne(m,t),ne(d.$$.fragment,t),_=!1},d(t){$e(a,t),t&&s(n),t&&s(r),m&&m.d(t),t&&s(o),$e(d,t)}}}function Fe(l,a,n){let{$$slots:r={},$$scope:o}=a;return l.$$set=d=>{"$$scope"in d&&n(0,o=d.$$scope)},[o,r]}class Oe extends oe{constructor(a){super();ie(this,a,Fe,Ue,ce,{})}}export{Oe as default};