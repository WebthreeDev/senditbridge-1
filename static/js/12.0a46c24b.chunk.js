(this.webpackJsonppoc=this.webpackJsonppoc||[]).push([[12],{1378:function(e,t,n){"use strict";n.d(t,"f",(function(){return i})),n.d(t,"g",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return u})),n.d(t,"h",(function(){return l})),n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return j}));var r=n(0),c=n(24),a=n(442);function i(){var e=Object(c.b)(a.h),t=Object(c.a)();return[e,Object(r.useCallback)((function(e){return t(Object(a.o)(e))}),[e,t])]}function s(){var e=Object(c.b)(a.i),t=Object(c.a)();return[e,Object(r.useCallback)((function(e){return t(Object(a.p)(e))}),[e,t])]}function o(){var e=Object(c.b)(a.e),t=Object(c.a)();return[e,Object(r.useCallback)((function(e){return t(Object(a.m)(e))}),[e,t])]}function d(){var e=Object(c.b)(a.f),t=Object(c.a)();return[e,Object(r.useCallback)((function(e){return t(Object(a.n)(e))}),[e,t])]}function u(){var e=Object(c.b)(a.d),t=Object(c.a)();return[e,Object(r.useCallback)((function(e){return t(Object(a.l)(e))}),[e,t])]}function l(){var e=Object(c.b)(a.s),t=Object(c.a)();return[e,Object(r.useCallback)((function(e){return t(Object(a.q)(e))}),[e,t])]}function b(){var e=Object(c.b)(a.c),t=Object(c.a)();return[e,Object(r.useCallback)((function(e){return t(Object(a.k)(e))}),[e,t])]}function j(){var e=Object(c.b)(a.t),t=Object(c.a)();return[e,Object(r.useCallback)((function(e){return t(Object(a.r)(e))}),[e,t])]}},1389:function(e,t,n){"use strict";var r=n(124),c=n(62),a=n(2),i=n.n(a),s=n(16),o=n(28),d=n(0),u=n.n(d),l=n(1378),b=n(58),j=n(280),p=n(442),f=n(163),O=n(59),x=n(1380),h=n(79),m=n(133),v=n(444),g=n(1388),w=n(446),k=n(1387),y=n(1381),A=n(243),R=n(7);t.a=function(e){var t=Object(d.useState)(!1),n=Object(o.a)(t,1)[0],a=Object(l.f)(),E=Object(o.a)(a,2),_=E[0],I=E[1],T=Object(h.a)(),B=Object(o.a)(T,1)[0],C=Object(l.g)(),D=Object(o.a)(C,1)[0],z=Object(l.c)(),S=Object(o.a)(z,2),P=S[0],L=S[1],M=Object(l.b)(),W=Object(o.a)(M,1)[0],F=Object(d.useState)(!1),H=Object(o.a)(F,2),N=H[0],U=H[1],V=new m.ethers.providers.JsonRpcProvider(null===_||void 0===_?void 0:_.endpoint),q=b.b[_?null===_||void 0===_?void 0:_.networkId:j.a[0].networkId].filter((function(e){return"ROUTE"===e.symbol}))[0],J=Object(d.useRef)(null),Y=Object(A.s)(),G=Object(o.a)(Y,1)[0],$=Object(f.a)(),K=Object(o.a)($,1)[0],Q=Object(l.e)()[1],X=Object(h.c)(),Z=Object(o.a)(X,1)[0],ee=Object(g.a)(),te=Object(w.a)(),ne=function(e){return Object(x.s)({erc20Handler:null===_||void 0===_?void 0:_.opts.reserveHandler,tokenAddress:e.asset.address})},re=function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Object(x.w)({accountAddress:B,erc20Handler:null===_||void 0===_?void 0:_.opts.erc20Handler,tokenAddress:t.asset.address,tokenDecimals:t.asset.decimals,provider:V});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(e){if(Z)return Object(x.o)({accountAddress:B,tokenAddress:e.asset.stakingRewards})},ae=function(e){if(Z)return Object(x.l)({accountAddress:B,tokenAddress:e.asset.lpAddress})},ie=function(e){if(Z)return Object(x.b)({stakingRewardsAddress:e.asset.stakingRewards,accountAddress:B})},se=function(e,t){if(Z)return e.asset.native?t.getEthBalance(B):Object(x.m)({accountAddress:B,tokenAddress:e.asset.address})},oe=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n,a,s,d,u,l,b,j,p,f,O,x,h,m,v;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(c.a)(P),n=Object(r.a)({},D),a=t.findIndex((function(e){return e.asset.symbol===D.asset.symbol})),s=new y.Provider(V,Number(null===_||void 0===_?void 0:_.networkId)),e.next=6,Promise.all([s.all(""!==n.asset.stakingRewards?[ne(n),ce(n),ae(n),ie(n),se(n,s)]:[ne(n),ae(n),se(n,s)]),re(n)]);case 6:if(d=e.sent,u=Object(o.a)(d,2),l=u[0],b=u[1],l){e.next=12;break}return e.abrupt("return");case 12:""!==n.asset.stakingRewards?(n.tvl=null!==(j=Object(k.c)(l[0],n.asset.decimals))&&void 0!==j?j:"-",n.userDeposits=null!==b&&void 0!==b?b:"-",n.stakedRAsset=null!==(p=Object(k.c)(l[1],n.asset.decimals))&&void 0!==p?p:"-",n.unstakedRAsset=null!==(f=Object(k.c)(l[2],n.asset.decimals))&&void 0!==f?f:"-",n.rewardBalance=null!==(O=Object(k.c)(l[3],q.decimals))&&void 0!==O?O:"-",n.tokenBalance=null!==(x=Object(k.c)(l[4],n.asset.decimals))&&void 0!==x?x:"-"):(n.tvl=null!==(h=Object(k.c)(l[0],n.asset.decimals))&&void 0!==h?h:"-",n.userDeposits=null!==b&&void 0!==b?b:"-",n.stakedRAsset="-",n.unstakedRAsset=null!==(m=Object(k.c)(l[1],n.asset.decimals))&&void 0!==m?m:"-",n.rewardBalance="-",n.tokenBalance=null!==(v=Object(k.c)(l[2],n.asset.decimals))&&void 0!==v?v:"-"),t[a]=n,L(t),Q(t);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a,s,d,u,l,j,f,O;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_){e.next=2;break}return e.abrupt("return");case 2:if(n=[],a=b.b[null===_||void 0===_?void 0:_.networkId].filter((function(e){return Object(p.g)(e)})),G&&(a=[].concat(Object(c.a)(b.b[null===_||void 0===_?void 0:_.networkId]),Object(c.a)(G[b.a].tokens.filter((function(e){return e.chainId===(null===_||void 0===_?void 0:_.networkId)})))).filter((function(e){return Object(p.g)(e)}))),a.map((function(e){var t=e;n.push({asset:t,tvl:"-",userDeposits:"-",stakedRAsset:"-",unstakedRAsset:"-",rewardBalance:"-",rewardRate:v.e,tokenBalance:"-"})})),L(n),Q(n),s=t?[].concat(n):Object(c.a)(P),d=new y.Provider(V,Number(null===_||void 0===_?void 0:_.networkId)),!Z){e.next=25;break}return e.prev=9,e.next=12,Promise.all([d.all(s.flatMap((function(e){return""!==e.asset.stakingRewards?[ne(e),ce(e),ae(e),ie(e),se(e,d)]:[ne(e),ae(e),se(e,d)]}))),Promise.all(s.map((function(e){return re(e)})))]);case 12:u=e.sent,l=Object(o.a)(u,2),j=l[0],f=l[1],console.log("multicaller resultArray 2 -",j),s.map((function(e,t){var n,c,a,i,o,d,u,l,b,p,O=Object(r.a)({},e),x=""!==O.asset.stakingRewards?6:3;""!==O.asset.stakingRewards?(O.tvl=null!==(n=Object(k.c)(j[t*x+0],O.asset.decimals))&&void 0!==n?n:"-",O.userDeposits=null!==(c=f[t])&&void 0!==c?c:"-",O.stakedRAsset=null!==(a=Object(k.c)(j[t*x+1],O.asset.decimals))&&void 0!==a?a:"-",O.unstakedRAsset=null!==(i=Object(k.c)(j[t*x+2],O.asset.decimals))&&void 0!==i?i:"-",O.rewardBalance=null!==(o=Object(k.c)(j[t*x+3],q.decimals))&&void 0!==o?o:"-",O.tokenBalance=null!==(d=Object(k.c)(j[t*x+4],O.asset.decimals))&&void 0!==d?d:"-"):(O.tvl=null!==(u=Object(k.c)(j[t*x+0],O.asset.decimals))&&void 0!==u?u:"-",O.userDeposits=null!==(l=f[t])&&void 0!==l?l:"-",O.stakedRAsset="-",O.unstakedRAsset=null!==(b=Object(k.c)(j[t*x+1],O.asset.decimals))&&void 0!==b?b:"-",O.rewardBalance="-",O.tokenBalance=null!==(p=Object(k.c)(j[t*x+2],O.asset.decimals))&&void 0!==p?p:"-");s[t]=O})),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(9),console.log("Multicall Liquidity Page error: "+e.t0);case 23:e.next=36;break;case 25:return e.prev=25,e.next=28,d.all(s.map((function(e){return ne(e)})));case 28:O=e.sent,console.log("multicaller resultArray 1 - ",O),s.map((function(e,t){var n,c=Object(r.a)({},e);c.tvl=null!==(n=Object(k.c)(O[t],c.asset.decimals))&&void 0!==n?n:"-",c.userDeposits="-",c.stakedRAsset="-",c.unstakedRAsset="-",c.rewardBalance="-",c.tokenBalance="-",s[t]=c})),e.next=36;break;case 33:e.prev=33,e.t1=e.catch(25),console.log("Multicall Liquidity Page error: "+e.t1);case 36:L(s),Q(s);case 38:case"end":return e.stop()}}),e,null,[[9,20],[25,33]])})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z&&""!==t.asset.stakingRewards){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Object(x.a)({stakingRewardsAddress:t.asset.stakingRewards,accountAddress:B,rewardTokenDecimals:q.decimals,provider:V});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(c.a)(P),n=Object(r.a)({},D),a=t.findIndex((function(e){return e.asset.symbol===D.asset.symbol})),e.next=5,ue(D);case 5:s=e.sent,n.rewardBalance=null!==s&&void 0!==s?s:"-",t[a]=n,L(t),Q(t);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(d.useEffect)((function(){te||Z&&le()}),[N]);var be=Object(d.useState)(!0),je=Object(o.a)(be,2),pe=je[0],fe=je[1];Object(d.useEffect)((function(){var e=setTimeout((function(){return fe(!1)}),3e4);return function(){return clearTimeout(e)}}),[]),Object(d.useEffect)((function(){if(!pe&&ee&&""!==D.asset.stakingRewards&&Z){var e=setInterval((function(){U((function(e){return!e}))}),v.a);return function(){return clearInterval(e)}}}),[pe,ee,D,Z]),Object(d.useEffect)((function(){te||Z&&oe()}),[W]),Object(d.useEffect)((function(){te||de(!0)}),[_,G]),Object(d.useEffect)((function(){de(!1)}),[B,Z,G]),Object(d.useEffect)((function(){K&&"Loading..."===(null===K||void 0===K?void 0:K.name)||(""===K?I(j.a[0]):O.a[K.networkId]?I(O.a[K.networkId]):I(j.a[0]))}),[K]);var Oe=u.a.useRef(n);return Object(d.useEffect)((function(){!0===Oe.current&&!1===n&&J.current.focus(),Oe.current=n}),[n]),Object(R.jsx)(R.Fragment,{})}},1416:function(e,t,n){"use strict";t.a=n.p+"static/media/1st.588b19b1.png"},1417:function(e,t,n){"use strict";t.a=n.p+"static/media/2.00041743.png"},1418:function(e,t,n){"use strict";t.a=n.p+"static/media/3rd.8d0595cc.png"},1530:function(e,t,n){"use strict";n.r(t);var r,c,a,i,s,o,d,u,l,b,j,p,f,O,x,h,m,v,g,w,k,y,A,R,E,_,I,T,B,C,D,z,S,P,L,M,W,F,H,N,U,V=n(2),q=n.n(V),J=n(16),Y=n(28),G=n(14),$=n(0),K=n(17),Q=n(1534),X=n(1528),Z=n(1386),ee=n(1389),te=n(1416),ne=n(1417),re=n(1418),ce=n(459),ae=n(79),ie=n(313),se=n(7),oe=K.e.div(r||(r=Object(G.a)(['\n  display: grid;\n  justify-items: center;\n  font-family: "Inter", sans-serif;\n']))),de=K.e.div(c||(c=Object(G.a)(["\n  //margin-bottom: 30px;\n  display: flex;\n  ",";\n"])),(function(e){return e.theme.mediaWidth.upToMedium(a||(a=Object(G.a)(["\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tmargin-bottom: 18px;\n  \t"])))})),ue=K.e.div(i||(i=Object(G.a)(["\n  margin-bottom: 30px;\n"]))),le=K.e.div(s||(s=Object(G.a)(["\n  width: 100%;\n  filter: drop-shadow(-2px 4px 4px rgba(0, 0, 0, 0.15));\n  padding: 15px;\n  border-radius: 17px;\n  border: 1px solid ",';\n  position: relative;\n  justify-content: center;\n  ::before {\n    content: "";\n    background: ',";\n    opacity: 0.2;\n    backdrop-filter: blur(42px);\n    border-radius: 17px 17px 0px 0px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n  }\n"])),(function(e){return e.theme.gray1}),(function(e){return e.theme.bg7})),be=K.e.div(o||(o=Object(G.a)(["\n  min-height: 0;\n  min-width: 0;\n  border: 1px solid ",";\n  width: 310px !important;\n  height: 48px !important;\n  border-radius: 10px;\n  border: 1px solid rgba(0, 0, 255, 0.25);\n\n  display: grid;\n  place-items: center;\n  ",";\n  ",";\n"])),(function(e){return e.theme.gray1}),(function(e){return e.theme.mediaWidth.upToMedium(d||(d=Object(G.a)(["\n\t\twidth: 300px !important;\n\t\theight: 52px !important;\n\t\tborder-radius: 16px;\n  \t"])))}),(function(e){return e.theme.mediaWidth.upToExtraSmall(u||(u=Object(G.a)(["\n\t\twidth: 260px !important;\n\t\theight: 52px !important;\n\t\tborder-radius: 16px;\n  \t"])))})),je=Object(K.e)(Q.a)(l||(l=Object(G.a)(["\n  &&& {\n    min-height: 0;\n    min-width: 0;\n    padding: 0;\n    .PrivateTabIndicator-root-1 {\n      display: none !important;\n    }\n    .jss3 {\n      display: none !important;\n    }\n    .jss1 {\n      display: none !important;\n    }\n    .MuiTabs-indicator {\n      display: none !important;\n    }\n  }\n"]))),pe=Object(K.e)(X.a)(b||(b=Object(G.a)(["\n  &&& {\n    width: 145px;\n    height: 35px;\n    min-height: 0;\n    min-width: 0;\n    border: ",";\n    color: ",";\n    background: ",";\n    border-radius: ",'px;\n    font-family: "Inter", sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 27px;\n    border-radius: 6px;\n    text-transform: none;\n    padding: 0;\n    margin: 0;\n    ',";\n    ",";\n  }\n"])),(function(e){return e.active?"1px solid rgba(0, 0, 255, 0.25)":""}),(function(e){var t=e.active,n=e.theme;return t?n.blue2:n.text1}),(function(e){var t=e.theme;return e.active?t.bg6:""}),(function(e){return e.active?10:0}),(function(e){return e.theme.mediaWidth.upToMedium(j||(j=Object(G.a)(["\n\t\twidth: 140px;\n\t\theight: 36px;\n\t\tborder-radius: 10px;\n\t\tfont-size: 16px;\n\t\tline-height: 24px;\n  \t"])))}),(function(e){return e.theme.mediaWidth.upToExtraSmall(p||(p=Object(G.a)(["\n\t  \twidth: 120px;\n\t\theight: 36px;\n\t\tfont-size: 14px;\n  \t"])))})),fe=K.e.div(f||(f=Object(G.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px;\n"]))),Oe=K.e.div(O||(O=Object(G.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n"]))),xe=K.e.div(x||(x=Object(G.a)(['\n  font-family: "Inter", sans-serif;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  max-width: 1050px;\n  width: 100%;\n  padding: 20px;\n  overflow: auto;\n']))),he=K.e.div(h||(h=Object(G.a)(["\n  font-weight: 500;\n  font-size: 40px;\n  margin-bottom: 30px;\n  ",";\n"])),(function(e){return e.theme.mediaWidth.upToMedium(m||(m=Object(G.a)(["\n\t\t\tmargin-right: 0;\n\t\t\tfont-size: 24px;\n\t"])))})),me=K.e.div(v||(v=Object(G.a)(["\n  width: 100%;\n  margin-top: 20px;\n  overflow-x: auto;\n  max-height: 601px;\n  height: 100%;\n"]))),ve=K.e.div(g||(g=Object(G.a)(["\n  width: 100%;\n"]))),ge=K.e.table(w||(w=Object(G.a)(["\n  border: 1px solid ",";\n  width: 100%;\n  border-collapse: collapse;\n  position: relative;\n"])),(function(e){return e.theme.gray1})),we=K.e.thead(k||(k=Object(G.a)([""]))),ke=K.e.tr(y||(y=Object(G.a)(["\n  font-size: 14px;\n  color: ",";\n"])),(function(e){return e.theme.text1})),ye=K.e.tr(A||(A=Object(G.a)(["\n  font-size: 14px;\n  color: ",";\n  background: ",";\n"])),(function(e){return e.theme.text1}),(function(e){var t=e.theme;return e.index<e.winners?t.bg6:""})),Ae=K.e.th(R||(R=Object(G.a)(["\n  border: 1px solid ",";\n  text-align: center;\n  padding: 15px;\n"])),(function(e){return e.theme.gray1})),Re=K.e.tbody(E||(E=Object(G.a)(["\n  border: 1px solid ",";\n  font-size: 16px;\n  max-height: 475px;\n  height: 100%;\n  transition: all 0.4s ease-in-out;\n  overflow-y: scroll;\n  ::-webkit-scrollbar {\n    width: 4px;\n    border-radius: 10px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ",";\n  }\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n"])),(function(e){return e.theme.gray1}),(function(e){return e.theme.blue2})),Ee=K.e.td(_||(_=Object(G.a)(["\n  border: 1px solid ",";\n  padding: 12px 15px;\n  text-align: center;\n"])),(function(e){return e.theme.gray1})),_e=K.e.tr(I||(I=Object(G.a)(["\n  font-size: 14px;\n  color: ",";\n"])),(function(e){return e.theme.text1})),Ie=K.e.img(T||(T=Object(G.a)(["\n  width: 22px;\n  height: 22px;\n"]))),Te=K.e.div(B||(B=Object(G.a)(["\n  margin-left: 15px;\n"]))),Be=K.e.div(C||(C=Object(G.a)(["\n  width: 100%;\n  border: 1px solid ",";\n  margin-top: 20px;\n  padding: 20px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){return e.theme.gray1})),Ce=K.e.span(D||(D=Object(G.a)(["\n  font-size: 14px;\n  color: ",";\n  margin-bottom: 10px;\n  font-weight: 300;\n"])),(function(e){return e.theme.text1})),De=K.e.span(z||(z=Object(G.a)(["\n  text-decoration: underline;\n  font-size: 14px;\n  color: ",";\n  cursor: pointer;\n"])),(function(e){return e.theme.blue2})),ze=K.e.div(S||(S=Object(G.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),Se=K.e.div(P||(P=Object(G.a)(["\n  display: flex;\n"]))),Pe=Object(K.f)(L||(L=Object(G.a)(["\n    0%{\n        opacity: 0.2;\n    }\n    100%{\n        opacity: 1;\n    }\n"]))),Le=K.e.div(M||(M=Object(G.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  width: 100%;\n  height: 100%;\n  animation: "," 1.1s ease-in-out infinite;\n"])),Pe),Me=K.e.img(W||(W=Object(G.a)([""]))),We=Object(K.e)(ie.b)(F||(F=Object(G.a)(["\n  width: 100%;\n  max-width: 200px;\n  margin: auto 0;\n  text-decoration: none;\n"]))),Fe=K.e.button(H||(H=Object(G.a)(["\n  background: ",";\n  padding: 8px;\n  width: 100%;\n  font-weight: 500;\n  text-align: center;\n  border-radius: 10px;\n  // border: 1px solid ",";\n  border: 1px solid rgba(0, 0, 255, 0.25);\n\n  color: ",";\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  flex-wrap: nowrap;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  font-size: 16px;\n  :hover {\n    background: rgb(122 122 135 / 24%);\n  }\n"])),(function(e){return e.theme.bg6}),(function(e){return e.theme.gray1}),(function(e){return e.theme.blue2})),He=K.e.text(N||(N=Object(G.a)(["\n  width: 100%;\n  text-align: center;\n  color: ",";\n  margin-bottom: 10px;\n  font-weight: 500;\n"])),(function(e){return e.theme.blue2})),Ne=K.e.div(U||(U=Object(G.a)(["\n  width: 100%;\n  text-align: center;\n  color: ",";\n  margin-top: 20px;\n  font-weight: 500;\n"])),(function(e){return e.theme.blue2})),Ue="https://api.trading-competition.routerprotocol.com";t.default=function(){var e,t,n,r,c=Object(ae.a)(),a=Object(Y.a)(c,1)[0],i=Object($.useState)(0),s=Object(Y.a)(i,2),o=s[0],d=s[1],u=Object($.useState)({}),l=Object(Y.a)(u,2),b=l[0],j=l[1],p=Object($.useState)({}),f=Object(Y.a)(p,2),O=f[0],x=f[1],h=Object($.useState)({}),m=Object(Y.a)(h,2),v=m[0],g=m[1],w=function(){var e=Object(J.a)(q.a.mark((function e(){var t,n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(Ue,"/data/transaction/?limit=25&address=").concat(a));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,j(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(J.a)(q.a.mark((function e(){var t,n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(Ue,"/data/volume/?limit=25&address=").concat(a));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,x(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(J.a)(q.a.mark((function e(){var t,n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(Ue,"/info"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,console.log("time",n),g(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object($.useEffect)((function(){y(),k(),w()}),[]);var A=!Object(Z.isEmpty)(O.top_traders)&&(null===(e=O.top_traders)||void 0===e?void 0:e.filter((function(e){return e.trader_address.toLowerCase()===a.toLowerCase()}))),R=!Object(Z.isEmpty)(b.top_traders)&&(null===(t=b.top_traders)||void 0===t?void 0:t.filter((function(e){return e.trader_address.toLowerCase()===a.toLowerCase()})));return Object(se.jsx)(oe,{children:Object(se.jsxs)(xe,{children:[Object(se.jsxs)(Oe,{children:[Object(se.jsx)(he,{children:"Voyages"}),Object(se.jsx)(We,{to:"/voyage/archived",children:Object(se.jsx)(Fe,{children:"Archived Voyages"})})]}),Object(se.jsx)(ee.a,{}),Object(se.jsx)(ue,{children:Object(se.jsxs)(le,{children:[Object(se.jsx)(fe,{children:Object(se.jsx)(be,{children:Object(se.jsxs)(je,{value:o,onChange:function(e,t){d(t)},children:[Object(se.jsx)(pe,{label:"By Volume",active:0===o}),Object(se.jsx)(pe,{label:"By Transactions",active:1===o})]})})}),Object(se.jsxs)(se.Fragment,{children:[Object(se.jsxs)(Be,{children:["false"===(null===v||void 0===v?void 0:v.live)&&Object(se.jsx)(He,{children:"THIS VOYAGE HAS ENDED"}),Object(se.jsx)(ze,{children:Object(se.jsxs)(Ce,{children:[Object(se.jsx)("span",{style:{fontWeight:"bold"},children:"Date:"})," ",null===v||void 0===v?void 0:v.from," - ",null===v||void 0===v?void 0:v.to," "]})}),Object(se.jsxs)(Ce,{children:[Object(se.jsx)("span",{style:{fontWeight:"bold"},children:"Rewards:"})," ",null===v||void 0===v?void 0:v.prize]}),Object(se.jsx)(Se,{children:Object(se.jsx)(De,{onClick:function(){return window.open(null===v||void 0===v?void 0:v.link,"_blank","noopener,noreferrer")},children:"Learn more"})})]}),Object(se.jsxs)(me,{children:[Object(Z.isEmpty)(O)||Object(Z.isEmpty)(b)?Object(se.jsx)(Le,{children:Object(se.jsx)(Me,{src:ce.a})}):Object(se.jsxs)(ge,{children:[Object(se.jsx)(we,{children:Object(se.jsxs)(ke,{children:[Object(se.jsx)(Ae,{children:"Ranking"}),Object(se.jsx)(Ae,{children:"Address"}),Object(se.jsx)(Ae,{children:0===o?"Amount Traded (USD)":"Total Txns"})]})}),0===o?Object(se.jsx)(Re,{children:!Object(Z.isEmpty)(O.top_traders)&&(null===(n=O.top_traders)||void 0===n?void 0:n.map((function(e,t){return Object(se.jsx)(se.Fragment,{children:t+1<O.top_traders.length&&Object(se.jsxs)(ye,{index:t,winners:null===v||void 0===v?void 0:v.winners_by_volume,children:[Object(se.jsxs)(Ee,{style:{display:"flex",justifyContent:"center"},children:[e.rank,Object(se.jsx)(Te,{children:0===t?Object(se.jsx)(Ie,{src:te.a}):1===t?Object(se.jsx)(Ie,{src:ne.a}):2===t?Object(se.jsx)(Ie,{src:re.a}):""})]}),Object(se.jsx)(Ee,{children:e.trader_address}),Object(se.jsxs)(Ee,{children:["$",e.amountUSD.toFixed(6)]})]},e.trader_address)})})))}):Object(se.jsx)(Re,{children:!Object(Z.isEmpty)(b.top_traders)&&(null===(r=b.top_traders)||void 0===r?void 0:r.map((function(e,t){return Object(se.jsx)(se.Fragment,{children:t+1<b.top_traders.length&&Object(se.jsxs)(ye,{index:t,winners:null===v||void 0===v?void 0:v.winners_by_transaction,children:[Object(se.jsxs)(Ee,{style:{display:"flex",justifyContent:"center"},children:[e.rank,Object(se.jsx)(Te,{children:0===t?Object(se.jsx)(Ie,{src:te.a}):1===t?Object(se.jsx)(Ie,{src:ne.a}):2===t?Object(se.jsx)(Ie,{src:re.a}):""})]}),Object(se.jsx)(Ee,{children:e.trader_address}),Object(se.jsx)(Ee,{children:e.count})]},e.trader_address)})})))})]}),Object(Z.isEmpty)(b.top_traders)&&1===o||Object(Z.isEmpty)(O.top_traders)&&0===o?Object(se.jsx)(Ne,{children:"NO DATA FOUND"}):Object(se.jsx)(se.Fragment,{})]}),Object(se.jsx)(ve,{children:Object(se.jsx)(ge,{children:0===o?a&&A&&A[0]&&!Object(Z.isEmpty)(O)&&Object(se.jsxs)(_e,{children:[Object(se.jsxs)(Ee,{style:{textAlign:"start"},children:["Your Rank: ",A[0].rank]}),Object(se.jsx)(Ee,{children:A[0].trader_address}),Object(se.jsx)(Ee,{children:A[0].amountUSD})]}):a&&R&&R[0]&&!Object(Z.isEmpty)(b)&&Object(se.jsxs)(_e,{children:[Object(se.jsxs)(Ee,{style:{textAlign:"start"},children:["Your Rank: ",R[0].rank]}),Object(se.jsx)(Ee,{children:R[0].trader_address}),Object(se.jsx)(Ee,{children:R[0].count})]})})})]})]})}),Object(se.jsx)(de,{})]})})}}}]);