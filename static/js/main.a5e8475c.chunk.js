(this["webpackJsonptesla-clone"]=this["webpackJsonptesla-clone"]||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){},66:function(e,n,t){"use strict";t.r(n);var r,i,c,o,a,s,l,d=t(0),j=t.n(d),x=t(12),b=t.n(x),h=(t(40),t(41),t(4)),g=t(18),p=t(5),O=t(31),u=t.n(O),f=t(32),m=t.n(f),v=t(17),y=Object(v.b)({name:"car",initialState:{cars:["Model S","Model 3","Model X","Model Y"]},reducers:{}}),w=function(e){return e.car.cars},k=y.reducer,T=t(16),I=t(2);var B,C,S,E,M,z,D,F=function(){var e=Object(d.useState)(!1),n=Object(g.a)(e,2),t=n[0],r=n[1],i=Object(T.b)(w);return Object(I.jsxs)(A,{children:[Object(I.jsx)("a",{children:Object(I.jsx)("img",{src:"logo.svg",alt:""})}),Object(I.jsx)(P,{children:i&&i.map((function(e,n){return Object(I.jsx)("a",{href:"#",children:e},n)}))}),Object(I.jsxs)(R,{children:[Object(I.jsx)("a",{href:"#",children:"Shop"}),Object(I.jsx)("a",{href:"#",children:"Tesla Account"}),Object(I.jsx)(X,{onClick:function(){return r(!0)}})]}),Object(I.jsxs)(Y,{show:t,children:[Object(I.jsx)(N,{children:Object(I.jsx)(J,{onClick:function(){return r(!1)}})}),i&&i.map((function(e,n){return Object(I.jsx)("li",{children:Object(I.jsx)("a",{href:"#",children:e},n)})})),Object(I.jsx)("li",{children:Object(I.jsx)("a",{href:"#",children:"Existing Inventory"})}),Object(I.jsx)("li",{children:Object(I.jsx)("a",{href:"#",children:"Used Inventory"})}),Object(I.jsx)("li",{children:Object(I.jsx)("a",{href:"#",children:"Trade-in"})}),Object(I.jsx)("li",{children:Object(I.jsx)("a",{href:"#",children:"Cybertruck"})}),Object(I.jsx)("li",{children:Object(I.jsx)("a",{href:"#",children:"Roadster"})})]})]})},A=p.a.div(r||(r=Object(h.a)(["\n  min-height: 60px;\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n"]))),P=p.a.div(i||(i=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n\n  a {\n    font-weight: 600;\n    text-transform: uppercase;\n    padding: 0 10px;\n    flex-wrap: nowrap;\n  }\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]))),R=p.a.div(c||(c=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  a {\n    font-weight: 400;\n    text-transform: uppercase;\n    padding: 0 10px;\n    margin-right: 10px;\n    flex-wrap: nowrap;\n  }\n"]))),X=Object(p.a)(u.a)(o||(o=Object(h.a)(["\n  cursor: pointer;\n"]))),Y=p.a.div(a||(a=Object(h.a)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  background: white;\n  width: 300px;\n  z-index: 16;\n  list-style: none;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  text-align: start;\n  transform: ",";\n  opacity: ",";\n  transition: opacity 0.5s ease-in, transform 0.2s ease-in;\n\n  li {\n    padding: 15px 0;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n\n    a {\n      font-weight: 400;\n    }\n  }\n"])),(function(e){return e.show?"translateX(0)":"translateX(100%)"}),(function(e){return e.show?"1":"0.5"})),J=Object(p.a)(m.a)(s||(s=Object(h.a)(["\n  cursor: pointer;\n"]))),N=p.a.div(l||(l=Object(h.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]))),W=t(19);var L,U=function(e){var n=e.title,t=e.description,r=e.backgroundImg,i=e.leftBtnText,c=e.rightBtnText;return Object(I.jsxs)($,{bgImage:r,children:[Object(I.jsx)(W.Fade,{bottom:!0,children:Object(I.jsxs)(q,{children:[Object(I.jsx)("h1",{children:n}),Object(I.jsx)("p",{children:t})]})}),Object(I.jsx)(W.Fade,{bottom:!0,children:Object(I.jsxs)(V,{children:[Object(I.jsxs)(G,{children:[Object(I.jsx)(H,{children:i}),c&&Object(I.jsx)(K,{children:c})]}),Object(I.jsx)(Q,{src:"/down-arrow.svg"})]})}),Object(I.jsx)(W.Fade,{left:!0,children:Object(I.jsx)("div",{style:{fontSize:"100px"},children:" \uc774 \uac70 \uc0ac \uc870 !"})})]})},$=p.a.div(B||(B=Object(h.a)(["\n  z-index: 10;\n  width: 100vw;\n  height: 100vh;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; //vertical alignment\n  align-items: center; //horizontal\n"])),(function(e){var n=e.bgImage;return'url("/'.concat(n,'")')})),q=p.a.div(C||(C=Object(h.a)(["\n  padding-top: 15vh;\n  text-align: center;\n"]))),G=p.a.div(S||(S=Object(h.a)(["\n  display: flex;\n  margin-bottom: 30px;\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]))),H=p.a.div(E||(E=Object(h.a)(["\n  background-color: rgba(23, 26, 32, 0.8);\n  height: 40px;\n  width: 256px;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100px;\n  opacity: 0.85;\n  text-transform: uppercase;\n  font-size: 12px;\n  cursor: pointer;\n  margin: 8px;\n"]))),K=Object(p.a)(H)(M||(M=Object(h.a)(["\n  background: white;\n  opacity: 0.65;\n  color: black;\n"]))),Q=p.a.img(z||(z=Object(h.a)(["\n  margin-top: 20px;\n  height: 40px;\n  overflow-x: hidden;\n  animation: animateDown infinite 1.5s;\n"]))),V=p.a.div(D||(D=Object(h.a)([""])));var Z=function(){return Object(I.jsxs)(_,{children:[Object(I.jsx)(U,{title:"Model S",description:"Order Online for Touchless Delivery",backgroundImg:"model-s.jpg",leftBtnText:"Customer Order",rightBtnText:"Existing Inventory"}),Object(I.jsx)(U,{title:"Model Y",description:"Order Online for Touchless Delivery",backgroundImg:"model-y.jpg",leftBtnText:"Customer Order",rightBtnText:"Existing Inventory"}),Object(I.jsx)(U,{title:"Model 3",description:"Order Online for Touchless Delivery",backgroundImg:"model-3.jpg",leftBtnText:"Customer Order",rightBtnText:"Existing Inventory"}),Object(I.jsx)(U,{title:"Model X",description:"Order Online for Touchless Delivery",backgroundImg:"model-x.jpg",leftBtnText:"Customer Order",rightBtnText:"Existing Inventory"}),Object(I.jsx)(U,{title:"Solar Panels",description:"Lowest Cost Solar Panels in America",backgroundImg:"solar-panel.jpg",leftBtnText:"Customer Order",rightBtnText:"Existing Inventory"}),Object(I.jsx)(U,{title:"Solar Roof",description:"Produce Clean Energy From Your Roof",backgroundImg:"solar-roof.jpg",leftBtnText:"Customer Order",rightBtnText:"Existing Inventory"}),Object(I.jsx)(U,{title:"Accessories",description:"Produce Clean Energy From Your Roof",backgroundImg:"accessories.jpg",leftBtnText:"Shop Now"})]})},_=p.a.div(L||(L=Object(h.a)(["\n  height: 100vh;\n  z-index: 10;\n"])));var ee=function(){return Object(I.jsxs)("div",{className:"App",children:[Object(I.jsx)(F,{}),Object(I.jsx)(Z,{})]})},ne=Object(v.a)({reducer:{car:k}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));b.a.render(Object(I.jsx)(j.a.StrictMode,{children:Object(I.jsx)(T.a,{store:ne,children:Object(I.jsx)(ee,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[66,1,2]]]);
//# sourceMappingURL=main.a5e8475c.chunk.js.map