import{S as I,i as S,s as U,e as b,t as k,c as m,a as v,h as E,d as _,b as g,g as B,G as d,n as P,k as V,m as j,H as A,j as D}from"./index-f3d17db4.js";function F(l){let e,s,a,t,r,u;return{c(){e=b("p"),s=b("b"),a=k("Fecha"),t=k(": "),r=b("b"),u=k(l[3]),this.h()},l(f){e=m(f,"P",{class:!0});var o=v(e);s=m(o,"B",{});var c=v(s);a=E(c,"Fecha"),c.forEach(_),t=E(o,": "),r=m(o,"B",{});var p=v(r);u=E(p,l[3]),p.forEach(_),o.forEach(_),this.h()},h(){g(e,"class","has-text-light")},m(f,o){B(f,e,o),d(e,s),d(s,a),d(e,t),d(e,r),d(r,u)},p:P,d(f){f&&_(e)}}}function H(l){let e,s,a,t,r;return{c(){e=b("p"),s=b("b"),a=k("Ubicaci\xF3n"),t=k(`:
            `),r=k(l[5]),this.h()},l(u){e=m(u,"P",{class:!0});var f=v(e);s=m(f,"B",{});var o=v(s);a=E(o,"Ubicaci\xF3n"),o.forEach(_),t=E(f,`:
            `),r=E(f,l[5]),f.forEach(_),this.h()},h(){g(e,"class","has-text-light has-text-left")},m(u,f){B(u,e,f),d(e,s),d(s,a),d(e,t),d(e,r)},p:P,d(u){u&&_(e)}}}function N(l){let e,s,a,t,r=(l[0]?l[2]:l[7])+"",u,f,o,c,p,h=l[2]!==l[7]&&q(l);return{c(){e=b("b"),s=k("Descripci\xF3n"),a=V(),t=b("p"),u=k(r),f=V(),o=b("span"),h&&h.c(),this.h()},l(i){e=m(i,"B",{class:!0});var n=v(e);s=E(n,"Descripci\xF3n"),n.forEach(_),a=j(i),t=m(i,"P",{class:!0});var w=v(t);u=E(w,r),f=j(w),o=m(w,"SPAN",{class:!0});var y=v(o);h&&h.l(y),y.forEach(_),w.forEach(_),this.h()},h(){g(e,"class","has-text-light"),g(o,"class","is-text is-clickable is-small has-text-primary is-underlined is-clickable has-text-weight-bold is-flex is-justify-content-center pt-5"),g(t,"class","has-text-light is-info mb-3")},m(i,n){B(i,e,n),d(e,s),B(i,a,n),B(i,t,n),d(t,u),d(t,f),d(t,o),h&&h.m(o,null),c||(p=A(o,"click",l[9]),c=!0)},p(i,n){n&1&&r!==(r=(i[0]?i[2]:i[7])+"")&&D(u,r),i[2]!==i[7]&&h.p(i,n)},d(i){i&&_(e),i&&_(a),i&&_(t),h&&h.d(),c=!1,p()}}}function q(l){let e,s=l[0]?"Ver menos":"Ver m\xE1s",a;return{c(){e=b("button"),a=k(s),this.h()},l(t){e=m(t,"BUTTON",{class:!0});var r=v(e);a=E(r,s),r.forEach(_),this.h()},h(){g(e,"class","column is-narrow is-centered button is-primary is-rounded is-small is-fullwidth")},m(t,r){B(t,e,r),d(e,a)},p(t,r){r&1&&s!==(s=t[0]?"Ver menos":"Ver m\xE1s")&&D(a,s)},d(t){t&&_(e)}}}function C(l){let e,s;return{c(){e=b("a"),s=k("Inscr\xEDbete"),this.h()},l(a){e=m(a,"A",{href:!0,class:!0,target:!0});var t=v(e);s=E(t,"Inscr\xEDbete"),t.forEach(_),this.h()},h(){g(e,"href",l[4]),g(e,"class","mt-3 button is-primary"),g(e,"target","_blank")},m(a,t){B(a,e,t),d(e,s)},p:P,d(a){a&&_(e)}}}function G(l){let e,s,a,t,r,u,f,o=l[3]!==void 0&&F(l),c=l[5]!==void 0&&H(l),p=l[6]&&N(l),h=l[4]!==void 0&&C(l);return{c(){e=b("div"),s=b("h3"),a=k(l[1]),t=V(),o&&o.c(),r=V(),c&&c.c(),u=V(),p&&p.c(),f=V(),h&&h.c(),this.h()},l(i){e=m(i,"DIV",{class:!0});var n=v(e);s=m(n,"H3",{class:!0});var w=v(s);a=E(w,l[1]),w.forEach(_),t=j(n),o&&o.l(n),r=j(n),c&&c.l(n),u=j(n),p&&p.l(n),f=j(n),h&&h.l(n),n.forEach(_),this.h()},h(){g(s,"class","subtitle is-4 has-text-primary mb-1"),g(e,"class","box has-background-grey-dark")},m(i,n){B(i,e,n),d(e,s),d(s,a),d(e,t),o&&o.m(e,null),d(e,r),c&&c.m(e,null),d(e,u),p&&p.m(e,null),d(e,f),h&&h.m(e,null)},p(i,[n]){i[3]!==void 0&&o.p(i,n),i[5]!==void 0&&c.p(i,n),i[6]&&p.p(i,n),i[4]!==void 0&&h.p(i,n)},i:P,o:P,d(i){i&&_(e),o&&o.d(),c&&c.d(),p&&p.d(),h&&h.d()}}}const T=48;function O(l,e,s){let{evento:a}=e;const{title:t,description:r,date:u,url:f,ubicacion:o}=a,c=r!==void 0,p=c&&r.split(" "),h=c&&p.length>T,i=c&&p.slice(0,T).join(" ")+(h?"...":"");let n=!1;const w=()=>s(0,n=!n);return l.$$set=y=>{"evento"in y&&s(8,a=y.evento)},[n,t,r,u,f,o,c,i,a,w]}class J extends I{constructor(e){super();S(this,e,O,G,U,{evento:8})}}export{J as T};
