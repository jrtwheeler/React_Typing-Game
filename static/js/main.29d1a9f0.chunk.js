(this["webpackJsonpTyping-Game"]=this["webpackJsonpTyping-Game"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(7),a=n.n(r),i=(n(12),n(6)),l=n(2),o=["Dismiss","Spot","North","exempt","inflate","Pay","inn","Fly","world","Opinion","belong","Shop","solve","Rocket","policy","Exile","waiter","Broken","execute","Copper","dollar","Begin","ask","Stadium","release","Lock","money","Asset","recruit","Band","watch","fantasy","Passion","agency","full","Sweat","sick","liberty","Salmon","chief","fibre","Steel","rush","lover","Finish","fling","future","Unaware","shrink","ceiling","Unit","name","imported","Native","infect","knock","creed","Thick","marsh","tear","moment","Animal","wrestle","genetic","slide","Volume","hear","meal","doubt","Chord","exotic","fan","meat","Counter","god","means","deep","Lead","silk","safety","bounce","Arena","lend","rebel","sweep","Hiccup","slime","scale","fold","Die","embryo","trolley","east","Old","senior","dilemma","sip","rub","Heaven","economy","day","Outlook","price","limited","Diamond","flow","insure","sail","Punch","scene","peace","shame","stall","Tune","result","reactor","Love","eyebrow","piece","undress","Mouse","poison","way","clear","raw","Inspire","pen","Applied","issue","irony","history","Trouser","bathtub","thirsty","seller","Graphic","comfort","extreme","Alcohol","charge","brink","Extract","linger","work","title","hell","Create","dine","common","red","Strict","quiet","swipe","Immune","energy","fox","save","tent","Master","reveal","resort","Expand","neutral","basket","faint","boom","Impound","wording","Subway","wound","cut","Auction","bullet","station","moon","Tower","noble","stick","Lighter","see","Extinct","cell","stage","Mass","belt","similar","Clay","stake","Flush","mood","Terms"],u=n(0),d=function(e){var t=e.children;return Object(u.jsx)("div",{className:"container",children:t})},j=function(e){var t=e.handleStart,n=e.disabled;return Object(u.jsx)("button",{onClick:t,children:n?"Start":"Restart"})},b=function(e){var t=e.newWord,n=e.inputValue,c=e.setInputValue,s=e.disabled,r=e.time,a=e.animation,i=e.handleInput,l=e.handleStart;return Object(u.jsxs)("div",{className:"typeRacer",children:[Object(u.jsx)("div",{className:"wordOutput",children:Object(u.jsx)("p",{children:t})}),Object(u.jsx)("div",{style:{animation:null!==a?a:""},className:"time",children:Object(u.jsx)("p",{style:{animation:null!==a?a:""},children:r})}),Object(u.jsxs)("div",{className:"wordValues",children:[Object(u.jsx)("input",{type:"text",disabled:s&&s,onKeyPress:i,value:n,onChange:function(e){return c(e.target.value)},placeholder:s?"":"Start typing"}),Object(u.jsx)(j,{handleStart:l,disabled:s})]})]})},m=function(e){var t=e.correctResults,n=e.wrongResults;e.countCorrect;return Object(u.jsxs)("div",{className:"results",children:[Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("p",{children:" ANSWERS:"})}),Object(u.jsxs)("div",{className:"resultsContainer",children:[Object(u.jsxs)("div",{className:"correctResults",children:[Object(u.jsx)("p",{className:"resultsHeader",children:"Correct:"}),t.map((function(e,t){return Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("p",{children:e})},t)}))]}),Object(u.jsxs)("div",{className:"wrongResults",children:[Object(u.jsx)("p",{className:"resultsHeader",children:"Incorrect:"}),n.map((function(e,t){return Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("p",{children:e})},t)}))]})]}),Object(u.jsx)("div",{className:"title",children:Object(u.jsxs)("p",{children:[" FINAL SCORE: ",t.length]})})]})},h=(n(14),function(){var e=Object(c.useState)(o),t=Object(l.a)(e,2),n=t[0],s=(t[1],Object(c.useState)(n[0])),r=Object(l.a)(s,2),a=r[0],j=r[1],h=Object(c.useState)(!0),O=Object(l.a)(h,2),p=O[0],f=O[1],x=Object(c.useState)([]),v=Object(l.a)(x,2),g=v[0],y=v[1],w=Object(c.useState)([]),S=Object(l.a)(w,2),N=S[0],k=S[1],C=Object(c.useState)(0),I=Object(l.a)(C,2),R=I[0],T=I[1],A=Object(c.useState)(30),E=Object(l.a)(A,2),F=E[0],L=E[1],M=Object(c.useState)(""),P=Object(l.a)(M,2),V=P[0],B=P[1],D=Object(c.useState)(null),H=Object(l.a)(D,2),G=H[0],W=H[1],J=Math.floor(Math.random()*n.length);return Object(c.useEffect)((function(){F<=30&&0!==F&&!1===p?setTimeout((function(){return L((function(e){return e-1}))}),1e3):p?(L(30),W(null)):0===F&&f(!0),F<=10&&W("scaleNumber 2s infinite")}),[p,F]),Object(c.useEffect)((function(){j(n[J])}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d,{children:Object(u.jsx)(b,{newWord:a,inputValue:V,setInputValue:B,disabled:p,time:F,animation:G,handleInput:function(e){13===e.charCode&&""!==V.trim()&&(!function(){if(V.trim()===a)return y((function(e){return[].concat(Object(i.a)(e),[a])})),void T((function(e){return e+1}));k((function(e){return[].concat(Object(i.a)(e),[V])}))}(),j(n[J]),B(""))},handleStart:function(){f(!p),y([]),k([]),T(0),B("")}})}),Object(u.jsx)(m,{correctResults:g,wrongResults:N,countCorrect:R})]})}),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.29d1a9f0.chunk.js.map