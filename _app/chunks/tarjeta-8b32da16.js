import{S as y,i as z,s as A,e as k,t as P,c as E,a as g,h as B,d,b as w,g as D,G as o,n as I,k as j,m as T,H as F,j as U}from"./index-f3d17db4.js";function H(i){let e,t,l,s,a,r;return{c(){e=k("p"),t=k("b"),l=P("Fecha"),s=P(": "),a=k("b"),r=P(i[3]),this.h()},l(n){e=E(n,"P",{class:!0});var c=g(e);t=E(c,"B",{});var V=g(t);l=B(V,"Fecha"),V.forEach(d),s=B(c,": "),a=E(c,"B",{});var b=g(a);r=B(b,i[3]),b.forEach(d),c.forEach(d),this.h()},h(){w(e,"class","has-text-light")},m(n,c){D(n,e,c),o(e,t),o(t,l),o(e,s),o(e,a),o(a,r)},p:I,d(n){n&&d(e)}}}function N(i){let e,t,l,s,a;return{c(){e=k("p"),t=k("b"),l=P("Ubicaci\xF3n:"),s=j(),a=P(i[5]),this.h()},l(r){e=E(r,"P",{class:!0});var n=g(e);t=E(n,"B",{});var c=g(t);l=B(c,"Ubicaci\xF3n:"),c.forEach(d),s=T(n),a=B(n,i[5]),n.forEach(d),this.h()},h(){w(e,"class","has-text-light has-text-left")},m(r,n){D(r,e,n),o(e,t),o(t,l),o(e,s),o(e,a)},p:I,d(r){r&&d(e)}}}function q(i){let e,t,l,s,a;return{c(){e=k("p"),t=k("b"),l=P("Ponente:"),s=j(),a=P(i[6]),this.h()},l(r){e=E(r,"P",{class:!0});var n=g(e);t=E(n,"B",{});var c=g(t);l=B(c,"Ponente:"),c.forEach(d),s=T(n),a=B(n,i[6]),n.forEach(d),this.h()},h(){w(e,"class","has-text-light has-text-left")},m(r,n){D(r,e,n),o(e,t),o(t,l),o(e,s),o(e,a)},p:I,d(r){r&&d(e)}}}function C(i){let e,t,l,s,a;return{c(){e=k("p"),t=k("b"),l=P("Organizada por:"),s=j(),a=P(i[7]),this.h()},l(r){e=E(r,"P",{class:!0});var n=g(e);t=E(n,"B",{});var c=g(t);l=B(c,"Organizada por:"),c.forEach(d),s=T(n),a=B(n,i[7]),n.forEach(d),this.h()},h(){w(e,"class","has-text-light has-text-left")},m(r,n){D(r,e,n),o(e,t),o(t,l),o(e,s),o(e,a)},p:I,d(r){r&&d(e)}}}function G(i){let e,t,l,s,a=(i[0]?i[2]:i[9])+"",r,n,c,V,b,u=i[2]!==i[9]&&J(i);return{c(){e=k("b"),t=P("Descripci\xF3n"),l=j(),s=k("p"),r=P(a),n=j(),c=k("span"),u&&u.c(),this.h()},l(f){e=E(f,"B",{class:!0});var _=g(e);t=B(_,"Descripci\xF3n"),_.forEach(d),l=T(f),s=E(f,"P",{class:!0});var m=g(s);r=B(m,a),n=T(m),c=E(m,"SPAN",{class:!0});var v=g(c);u&&u.l(v),v.forEach(d),m.forEach(d),this.h()},h(){w(e,"class","has-text-light"),w(c,"class","is-text is-clickable is-small has-text-primary is-underlined is-clickable has-text-weight-bold is-flex is-justify-content-center pt-5"),w(s,"class","has-text-light is-info mb-3")},m(f,_){D(f,e,_),o(e,t),D(f,l,_),D(f,s,_),o(s,r),o(s,n),o(s,c),u&&u.m(c,null),V||(b=F(c,"click",i[11]),V=!0)},p(f,_){_&1&&a!==(a=(f[0]?f[2]:f[9])+"")&&U(r,a),f[2]!==f[9]&&u.p(f,_)},d(f){f&&d(e),f&&d(l),f&&d(s),u&&u.d(),V=!1,b()}}}function J(i){let e,t=i[0]?"Ver menos":"Ver m\xE1s",l;return{c(){e=k("button"),l=P(t),this.h()},l(s){e=E(s,"BUTTON",{class:!0});var a=g(e);l=B(a,t),a.forEach(d),this.h()},h(){w(e,"class","column is-narrow is-centered button is-primary is-rounded is-small is-fullwidth")},m(s,a){D(s,e,a),o(e,l)},p(s,a){a&1&&t!==(t=s[0]?"Ver menos":"Ver m\xE1s")&&U(l,t)},d(s){s&&d(e)}}}function K(i){let e,t;return{c(){e=k("a"),t=P("Inscr\xEDbete"),this.h()},l(l){e=E(l,"A",{href:!0,class:!0,target:!0});var s=g(e);t=B(s,"Inscr\xEDbete"),s.forEach(d),this.h()},h(){w(e,"href",i[4]),w(e,"class","mt-3 button is-primary"),w(e,"target","_blank")},m(l,s){D(l,e,s),o(e,t)},p:I,d(l){l&&d(e)}}}function L(i){let e,t,l,s,a,r,n,c,V,b=i[3]!==void 0&&H(i),u=i[5]!==void 0&&N(i),f=i[6]!==void 0&&q(i),_=i[7]!==void 0&&C(i),m=i[8]&&G(i),v=i[4]!==void 0&&K(i);return{c(){e=k("div"),t=k("h3"),l=P(i[1]),s=j(),b&&b.c(),a=j(),u&&u.c(),r=j(),f&&f.c(),n=j(),_&&_.c(),c=j(),m&&m.c(),V=j(),v&&v.c(),this.h()},l(p){e=E(p,"DIV",{class:!0});var h=g(e);t=E(h,"H3",{class:!0});var O=g(t);l=B(O,i[1]),O.forEach(d),s=T(h),b&&b.l(h),a=T(h),u&&u.l(h),r=T(h),f&&f.l(h),n=T(h),_&&_.l(h),c=T(h),m&&m.l(h),V=T(h),v&&v.l(h),h.forEach(d),this.h()},h(){w(t,"class","subtitle is-4 has-text-primary mb-1"),w(e,"class","box has-background-grey-dark")},m(p,h){D(p,e,h),o(e,t),o(t,l),o(e,s),b&&b.m(e,null),o(e,a),u&&u.m(e,null),o(e,r),f&&f.m(e,null),o(e,n),_&&_.m(e,null),o(e,c),m&&m.m(e,null),o(e,V),v&&v.m(e,null)},p(p,[h]){p[3]!==void 0&&b.p(p,h),p[5]!==void 0&&u.p(p,h),p[6]!==void 0&&f.p(p,h),p[7]!==void 0&&_.p(p,h),p[8]&&m.p(p,h),p[4]!==void 0&&v.p(p,h)},i:I,o:I,d(p){p&&d(e),b&&b.d(),u&&u.d(),f&&f.d(),_&&_.d(),m&&m.d(),v&&v.d()}}}const S=48;function M(i,e,t){let{evento:l}=e;const{title:s,description:a,date:r,url:n,ubicacion:c,ponente:V,tutor:b}=l,u=a!==void 0,f=u&&a.split(" "),_=u&&f.length>S,m=u&&f.slice(0,S).join(" ")+(_?"...":"");let v=!1;const p=()=>t(0,v=!v);return i.$$set=h=>{"evento"in h&&t(10,l=h.evento)},[v,s,a,r,n,c,V,b,u,m,l,p]}class R extends y{constructor(e){super();z(this,e,M,L,A,{evento:10})}}export{R as T};