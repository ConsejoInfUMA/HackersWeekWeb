import{S as y,i as z,s as A,e as b,t as k,c as m,a as v,h as E,d,b as P,g as D,G as o,n as I,k as j,m as T,j as U,H as F}from"./index-f3d17db4.js";function H(i){let e,t,n,l,r,f;return{c(){e=b("p"),t=b("b"),n=k("Fecha"),l=k(": "),r=b("b"),f=k(i[3]),this.h()},l(s){e=m(s,"P",{class:!0});var a=v(e);t=m(a,"B",{});var c=v(t);n=E(c,"Fecha"),c.forEach(d),l=E(a,": "),r=m(a,"B",{});var u=v(r);f=E(u,i[3]),u.forEach(d),a.forEach(d),this.h()},h(){P(e,"class","has-text-light")},m(s,a){D(s,e,a),o(e,t),o(t,n),o(e,l),o(e,r),o(r,f)},p:I,d(s){s&&d(e)}}}function N(i){let e,t,n,l,r;return{c(){e=b("p"),t=b("b"),n=k("Ubicaci\xF3n:"),l=j(),r=k(i[5]),this.h()},l(f){e=m(f,"P",{class:!0});var s=v(e);t=m(s,"B",{});var a=v(t);n=E(a,"Ubicaci\xF3n:"),a.forEach(d),l=T(s),r=E(s,i[5]),s.forEach(d),this.h()},h(){P(e,"class","has-text-light has-text-left")},m(f,s){D(f,e,s),o(e,t),o(t,n),o(e,l),o(e,r)},p:I,d(f){f&&d(e)}}}function q(i){let e,t,n,l,r;return{c(){e=b("p"),t=b("b"),n=k("Ponente:"),l=j(),r=k(i[6]),this.h()},l(f){e=m(f,"P",{class:!0});var s=v(e);t=m(s,"B",{});var a=v(t);n=E(a,"Ponente:"),a.forEach(d),l=T(s),r=E(s,i[6]),s.forEach(d),this.h()},h(){P(e,"class","has-text-light has-text-left")},m(f,s){D(f,e,s),o(e,t),o(t,n),o(e,l),o(e,r)},p:I,d(f){f&&d(e)}}}function C(i){let e,t,n,l,r;return{c(){e=b("p"),t=b("b"),n=k("Organizado por:"),l=j(),r=k(i[7]),this.h()},l(f){e=m(f,"P",{class:!0});var s=v(e);t=m(s,"B",{});var a=v(t);n=E(a,"Organizado por:"),a.forEach(d),l=T(s),r=E(s,i[7]),s.forEach(d),this.h()},h(){P(e,"class","has-text-light has-text-left")},m(f,s){D(f,e,s),o(e,t),o(t,n),o(e,l),o(e,r)},p:I,d(f){f&&d(e)}}}function G(i){let e,t,n,l,r=(i[0]?i[2]:i[9])+"",f,s,a=i[2]!==i[9]&&J(i);return{c(){e=b("b"),t=k("Descripci\xF3n"),n=j(),l=b("p"),f=k(r),s=j(),a&&a.c(),this.h()},l(c){e=m(c,"B",{class:!0});var u=v(e);t=E(u,"Descripci\xF3n"),u.forEach(d),n=T(c),l=m(c,"P",{class:!0});var p=v(l);f=E(p,r),s=T(p),a&&a.l(p),p.forEach(d),this.h()},h(){P(e,"class","has-text-light"),P(l,"class","has-text-light is-info mb-3")},m(c,u){D(c,e,u),o(e,t),D(c,n,u),D(c,l,u),o(l,f),o(l,s),a&&a.m(l,null)},p(c,u){u&1&&r!==(r=(c[0]?c[2]:c[9])+"")&&U(f,r),c[2]!==c[9]&&a.p(c,u)},d(c){c&&d(e),c&&d(n),c&&d(l),a&&a.d()}}}function J(i){let e,t,n=i[0]?"Ver menos":"Ver m\xE1s",l,r,f;return{c(){e=b("span"),t=b("button"),l=k(n),this.h()},l(s){e=m(s,"SPAN",{class:!0});var a=v(e);t=m(a,"BUTTON",{class:!0});var c=v(t);l=E(c,n),c.forEach(d),a.forEach(d),this.h()},h(){P(t,"class","column is-narrow is-centered button is-primary is-rounded is-small is-fullwidth"),P(e,"class","is-text is-clickable is-small has-text-primary is-underlined is-clickable has-text-weight-bold is-flex is-justify-content-center pt-5")},m(s,a){D(s,e,a),o(e,t),o(t,l),r||(f=F(e,"click",i[11]),r=!0)},p(s,a){a&1&&n!==(n=s[0]?"Ver menos":"Ver m\xE1s")&&U(l,n)},d(s){s&&d(e),r=!1,f()}}}function K(i){let e,t;return{c(){e=b("a"),t=k("Inscr\xEDbete"),this.h()},l(n){e=m(n,"A",{href:!0,class:!0,target:!0});var l=v(e);t=E(l,"Inscr\xEDbete"),l.forEach(d),this.h()},h(){P(e,"href",i[4]),P(e,"class","mt-3 button is-primary"),P(e,"target","_blank")},m(n,l){D(n,e,l),o(e,t)},p:I,d(n){n&&d(e)}}}function L(i){let e,t,n,l,r,f,s,a,c,u=i[3]!==void 0&&H(i),p=i[5]!==void 0&&N(i),B=i[6]!==void 0&&q(i),w=i[7]!==void 0&&C(i),V=i[8]&&G(i),g=i[4]!==void 0&&K(i);return{c(){e=b("div"),t=b("h3"),n=k(i[1]),l=j(),u&&u.c(),r=j(),p&&p.c(),f=j(),B&&B.c(),s=j(),w&&w.c(),a=j(),V&&V.c(),c=j(),g&&g.c(),this.h()},l(_){e=m(_,"DIV",{class:!0});var h=v(e);t=m(h,"H3",{class:!0});var O=v(t);n=E(O,i[1]),O.forEach(d),l=T(h),u&&u.l(h),r=T(h),p&&p.l(h),f=T(h),B&&B.l(h),s=T(h),w&&w.l(h),a=T(h),V&&V.l(h),c=T(h),g&&g.l(h),h.forEach(d),this.h()},h(){P(t,"class","subtitle is-4 has-text-primary mb-1"),P(e,"class","box has-background-grey-dark")},m(_,h){D(_,e,h),o(e,t),o(t,n),o(e,l),u&&u.m(e,null),o(e,r),p&&p.m(e,null),o(e,f),B&&B.m(e,null),o(e,s),w&&w.m(e,null),o(e,a),V&&V.m(e,null),o(e,c),g&&g.m(e,null)},p(_,[h]){_[3]!==void 0&&u.p(_,h),_[5]!==void 0&&p.p(_,h),_[6]!==void 0&&B.p(_,h),_[7]!==void 0&&w.p(_,h),_[8]&&V.p(_,h),_[4]!==void 0&&g.p(_,h)},i:I,o:I,d(_){_&&d(e),u&&u.d(),p&&p.d(),B&&B.d(),w&&w.d(),V&&V.d(),g&&g.d()}}}const S=48;function M(i,e,t){let{evento:n}=e;const{title:l,description:r,date:f,url:s,ubicacion:a,ponente:c,tutor:u}=n,p=r!==void 0,B=p&&r.split(" "),w=p&&B.length>S,V=p&&B.slice(0,S).join(" ")+(w?"...":"");let g=!1;const _=()=>t(0,g=!g);return i.$$set=h=>{"evento"in h&&t(10,n=h.evento)},[g,l,r,f,s,a,c,u,p,V,n,_]}class R extends y{constructor(e){super();z(this,e,M,L,A,{evento:10})}}export{R as T};
