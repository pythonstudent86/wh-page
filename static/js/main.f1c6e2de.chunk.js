(this["webpackJsonpwh-page"]=this["webpackJsonpwh-page"]||[]).push([[0],{26:function(t,n,e){},50:function(t,n,e){"use strict";e.r(n);var a=e(1),r=e.n(a),c=e(19),i=e.n(c),o=(e(26),e(5)),s=e(8),u=e(7),l=e.n(u),d=e(10),f=e(6),b=e.n(f),h=function(){var t=Object(d.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b()("https://wh-data-serv.herokuapp.com/positions");case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(d.a)(l.a.mark((function t(n,e,a){var r,c,i,o,u=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>3&&void 0!==u[3]?u[3]:null,c=u.length>4&&void 0!==u[4]?u[4]:null,i={},null!==r?(o={},Object(s.a)(o,r,c),Object(s.a)(o,e,a),i=o):i=Object(s.a)({},e,a),t.next=6,b.a.patch("https://wh-data-serv.herokuapp.com/positions/".concat(n),i).then((function(t){return console.log("request status: ",t.status)}));case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(n,e,a){return t.apply(this,arguments)}}();var g,x,j,O,m,k,v,y=function(t,n){var e="\u26a0\ufe0f \u0438\u0437\u043c\u0435\u043d\u0438 \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0441\u043a\u043b\u0430\u0434 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u043b\u044f ".concat(t," \u043d\u0430 ").concat(n);b()("https://api.telegram.org/bot".concat("1898954081:AAEu4Dl6bGruT1CHzOdTalx_lAaHb9fJ_60","/sendMessage?chat_id=").concat("391676","&text=").concat(e,"&parse_mode=HTML"))},w=e(2),C=e(3),S=C.a.nav(g||(g=Object(w.a)(["\n  display: flex;\n  align-items: center;\n  background-color: #faa93e;\n  width: 100%;\n  height: 60px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  margin-bottom: 20px;\n"]))),E=C.a.div(x||(x=Object(w.a)(["\n  &.counter {\n    margin-left: 20px;\n  }\n  &.buttons {\n    margin-left: auto;\n    margin-right: 20px;\n  }\n"]))),Q=C.a.button(j||(j=Object(w.a)(["\n  border-radius: 5px;\n  padding: 5px 10px;\n  border: 0;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  background-color: #0099ff;\n  color: #ffffff;\n\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n"]))),N=C.a.span(O||(O=Object(w.a)(["\n  color: #ffffff;\n  text-shadow: 2px 2px 4px green;\n"]))),H=e(0);function F(t){var n=t.data,e=t.onClickHeandlerBack,a=t.onAllPositionHandler;return Object(H.jsxs)(S,{children:[Object(H.jsx)(E,{className:"counter",children:Object(H.jsxs)(N,{children:[n&&n.length," \u043f\u043e\u0437\u0438\u0446\u0438\u0439"]})}),Object(H.jsxs)(E,{className:"buttons",children:[Object(H.jsx)(Q,{type:"button",onClick:e,children:"\u0421\u043a\u043b\u0430\u0434\u044b"}),Object(H.jsx)(Q,{type:"button",onClick:a,children:"\u0412\u0441\u0435 \u043f\u043e\u0437\u0438\u0446\u0438\u0438"})]})]})}var A,q,B,T,I=C.a.ul(m||(m=Object(w.a)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  width: 460px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),L=C.a.li(k||(k=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  width: 100%;\n  height: 60px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  background-color: ",";\n  border-radius: 5px 5px 30px 5px;\n  margin-bottom: 20px;\n"])),(function(t){return t.setDisable?"#afafaf":"#faa93e"})),U=C.a.p(v||(v=Object(w.a)(["\n  font-weight: 800;\n  color: #ffffff;\n  font-size: 20px;\n"])));function _(t){var n=t.data,e=t.onClickHeandler,r=t.setReloadState,c=t.setLoading,i=Object(a.useState)([]),s=Object(o.a)(i,2),u=s[0],l=s[1];return Object(a.useEffect)((function(){n&&l(function(t){var n=[],e=[];return t.forEach((function(t){n.includes(t.location)||n.push(t.location)})),n.forEach((function(n){var a;t.forEach((function(t){n===t.location&&!1===t.cargo&&(a=!1)})),void 0===a&&(a=!0),e.push({wh:n,set:a})})),e}(n))}),[n]),Object(a.useEffect)((function(){r(!0),c(!0)}),[c,r]),Object(H.jsx)(I,{className:"heders",children:u.map((function(t,n){return Object(H.jsx)(L,{onClick:e,setDisable:t.set,children:Object(H.jsx)(U,{name:"locationName",children:t.wh})},n)}))})}var D,J,M,z=function(t,n,e,a,r){return t.cargo&&!t.uhtishka?n:t.cargo&&t.uhtishka?e:t.cargo||t.uhtishka?!t.cargo&&t.uhtishka?r:void 0:a},P=C.a.ul(A||(A=Object(w.a)(["\n  padding: 0;\n  list-style: none;\n  width: 460px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),R=C.a.li(q||(q=Object(w.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  width: 100%;\n  min-height: 60px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  background-color: ",";\n  border-radius: 5px 5px 30px 5px;\n  color: #ffffff;\n  margin-bottom: 20px;\n"])),(function(t){return t.cargo?"#afafaf":"#0099FF"})),G=C.a.p(B||(B=Object(w.a)(["\n  margin-left: 10px;\n  &.text {\n    width: 250px;\n  }\n  &.uht-btn {\n    text-align: center;\n    background-color: ",";\n    color: ",";\n  }\n  &.block {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 50px;\n    height: 50px;\n    border-radius: 5px 5px 15px 5px;\n  }\n  &.quantity {\n    background-color: ",";\n  }\n"])),(function(t){return z(t,"transparent","#94d374","transparent","#94d374")}),(function(t){return z(t,"transparent","#ffffff","transparent","#ffffff")}),(function(t){return t.changeQ?"#ff1900":"#faa93e"})),K=C.a.button(T||(T=Object(w.a)(["\n  border-radius: 5px 5px 15px 5px;\n  padding: 5px 10px;\n  border: 0;\n  color: #ffffff;\n  width: 50px;\n  height: 50px;\n  border: 1px solid #afafaf;\n  background-color: ",";\n  margin-right: auto;\n  margin-left: auto;\n"])),(function(t){return t.cargo?"#afafaf":"#0099FF"}));function V(t){var n=t.data,e=t.locationFilter,r=t.onClickHeandlerBack,c=t.oClickUpdate,i=t.noChangeQuantity,s=t.onAlertHeandle,u=Object(a.useState)([]),l=Object(o.a)(u,2),d=l[0],f=l[1],b=Object(a.useState)(!1),h=Object(o.a)(b,2),p=h[0],g=h[1];return Object(a.useEffect)((function(){f(function(t,n){var e=[];return n.forEach((function(n){n.location===t&&e.push(n)})),e}(e,n))}),[n,e]),Object(a.useEffect)((function(){d&&g(!0)}),[d]),Object(H.jsxs)("div",{children:[Object(H.jsx)(P,{children:p&&d.map((function(t){return Object(H.jsxs)(R,{cargo:t.cargo,children:[Object(H.jsx)(G,{id:t.id,onClick:c,className:"text",children:t.name}),Object(H.jsx)(G,{id:t.id,changeQ:t.changeQ,className:"block quantity",onClick:i,children:(n=t.changeQ,e=t.changedQTo,a=t.quantity,n?e:a)}),Object(H.jsxs)(G,{className:"block uht-btn",uhtishka:t.uhtishka,cargo:t.cargo,children:["\u0423",Object(H.jsx)("br",{}),t.uhtQuant]}),Object(H.jsx)(K,{id:t.id,type:"button",cargo:t.cargo,onClick:s,children:"!"})]},t.id);var n,e,a}))}),Object(H.jsx)(P,{children:Object(H.jsx)(R,{onClick:r,children:Object(H.jsx)(G,{children:"\u2039\u2039\u2039 \u043a \u0441\u043f\u0438\u0441\u043a\u0443 \u0441\u043a\u043b\u0430\u0434\u043e\u0432"})})})]})}var W,X,Y=C.a.ul(D||(D=Object(w.a)(["\n  padding: 0;\n  list-style: none;\n  width: 460px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),Z=C.a.li(J||(J=Object(w.a)(["\n  display: flex;\n  align-items: center;\n  padding: 0;\n  width: 100%;\n  min-height: 60px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  background-color: ",";\n  border-radius: 5px 5px 30px 5px;\n  color: #ffffff;\n  margin-bottom: 20px;\n"])),(function(t){return t.uhtishka?"#94d374":"#0099FF"})),$=C.a.p(M||(M=Object(w.a)(["\n  display: block;\n  margin-left: 15px;\n  &.name {\n    width: 270px;\n  }\n  &.quantity {\n    width: 30px;\n  }\n"])));function tt(t){var n=t.data,e=t.onUtishkaSetQuantity;return Object(H.jsx)("div",{children:Object(H.jsx)(Y,{children:n.map((function(t){return Object(H.jsxs)(Z,{uhtishka:t.uhtishka,children:[Object(H.jsx)($,{className:"name",children:t.name}),Object(H.jsx)($,{className:"quantity",children:t.quantity}),Object(H.jsxs)($,{id:t.id,onClick:e,children:["\u0423\u0445\u0442\u044b\u0448\u043a\u0435: ",t.uhtQuant]})]},t.id)}))})})}var nt=C.a.h1(W||(W=Object(w.a)(["\n  width: 640px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n"]))),et=C.a.div(X||(X=Object(w.a)([""])));function at(){return Object(H.jsx)(et,{children:Object(H.jsx)(nt,{children:"Loading data..."})})}var rt=function(){var t=Object(a.useState)(),n=Object(o.a)(t,2),e=n[0],r=n[1],c=Object(a.useState)(!1),i=Object(o.a)(c,2),s=i[0],u=i[1],l=Object(a.useState)(!1),d=Object(o.a)(l,2),f=d[0],b=d[1],g=Object(a.useState)(!1),x=Object(o.a)(g,2),j=x[0],O=x[1],m=Object(a.useState)(""),k=Object(o.a)(m,2),v=k[0],w=k[1],C=Object(a.useState)(!0),S=Object(o.a)(C,2),E=S[0],Q=S[1],N=Object(a.useState)(!0),A=Object(o.a)(N,2),q=A[0],B=A[1],T=function(){b(!1),O(!1),u(!0)};return Object(a.useEffect)((function(){E&&(h().then((function(t){return r(t.data)})),Q(!1),B(!1),u(!0))}),[E]),Object(H.jsxs)("div",{className:"App",children:[Object(H.jsx)(F,{data:e,onClickHeandlerBack:T,onAllPositionHandler:function(){b(!1),u(!1),O(!0)}}),q&&Object(H.jsx)(at,{}),s&&Object(H.jsx)(_,{data:e,onClickHeandler:function(t){var n=t.target;w(n.firstChild.textContent),u(!1),b(!0)},setReloadState:Q,setLoading:B}),f&&Object(H.jsx)(V,{data:e,locationFilter:v,onClickHeandlerBack:T,oClickUpdate:function(t){"rgb(175, 175, 175)"!==t.target.parentElement.style.backgroundColor&&(p(t.target.id,"cargo",!0),t.target.parentElement.style.backgroundColor="#afafaf",t.target.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor="#afafaf")},noChangeQuantity:function(t){var n=parseInt(prompt());isNaN(n)||(p(t.target.id,"changeQ",!0,"changedQTo",n),t.target.textContent=n,t.target.style.backgroundColor="#ea3c3c")},onAlertHeandle:function(t){var n=t.target.previousSibling.previousSibling.previousSibling.textContent,e=prompt();e&&y(n,e)}}),j&&Object(H.jsx)(tt,{data:e,onUtishkaSetQuantity:function(t){var n=parseInt(t.target.previousElementSibling.textContent),e=parseInt(prompt());!isNaN(e)&&n>=e&&(0!==e?(p(t.target.id,"uhtishka",!0,"uhtQuant",e),t.target.textContent="\u0423\u0445\u0442\u044b\u0448\u043a\u0435: ".concat(e),t.target.parentElement.style.backgroundColor="#94d374"):(p(t.target.id,"uhtishka",!1,"uhtQuant",e),t.target.textContent="\u0423\u0445\u0442\u044b\u0448\u043a\u0435: ".concat(e),t.target.parentElement.style.backgroundColor="#0099FF"))}})]})};i.a.render(Object(H.jsx)(r.a.StrictMode,{children:Object(H.jsx)(rt,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.f1c6e2de.chunk.js.map