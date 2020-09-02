(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,t,a){e.exports=a(232)},232:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(46),o=a.n(c),l=a(10),s=a(6),i=a(102),u=a(233),m=a(19),d=Object(m.a)(),p=a(9),f=a.n(p),h=a(15),b=a(103),g=a.n(b).a.create({baseURL:"https://dsc-chat-app.herokuapp.com"}),E=function(){return function(){var e=Object(h.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(g),a=localStorage.getItem("jwt-token")){e.next=5;break}return console.log("[AUTH]: No Token"),e.abrupt("return",t({type:"CHECK_AUTH",payload:{isLoggedIn:!1,token:null}}));case 5:return console.log("[AUTH-TOKEN]: jwt-token=".concat(a)),e.next=8,g.get("/user-id",{headers:{Authorization:"Bearer ".concat(a)}});case 8:n=e.sent,t({type:"CHECK_AUTH",payload:{_id:n.data,token:a,isLoggedIn:!0}});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=a(7),w=a(49),O=a(32),y=a.n(O),x=a(235),j=a(234),k=Object(j.a)({form:"homeForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit((function(t){e.handleForm(t)})),className:"form-signin mt-2"},e.children)})),_=function(e){var t=function(e){var t=e.input,a=e.label;return r.a.createElement("div",null,r.a.createElement("label",{className:"text-white text-left my-2"},a),r.a.createElement("input",Object.assign({className:"form-control",placeholder:a},t)))};return r.a.createElement(k,{handleForm:function(t){e.handleForm(t)}},r.a.createElement("div",{className:"ui stacked element"},r.a.createElement(x.a,{name:"username",component:t,label:"Username"}),r.a.createElement(x.a,{name:"password",component:t,label:"Password"}),r.a.createElement("button",{className:"btn btn-md btn-secondary btn-block my-4 mx-auto w-25"},"Submit")))},N=function(e){var t=function(e){var t=e.input,a=e.label;return r.a.createElement("div",null,r.a.createElement("label",{className:"text-white text-left my-2"},a),r.a.createElement("input",Object.assign({className:"form-control",placeholder:a},t)))};return r.a.createElement(k,{handleForm:function(t){e.handleForm(t)}},r.a.createElement(x.a,{name:"name",component:t,label:"Name"}),r.a.createElement(x.a,{name:"username",component:t,label:"Username"}),r.a.createElement(x.a,{name:"email",component:t,label:"Email"}),r.a.createElement(x.a,{name:"password",component:t,label:"Password"}),r.a.createElement(x.a,{name:"passwordConf",component:t,label:"Confirm Password"}),r.a.createElement("button",{className:"btn btn-md btn-secondary btn-block mt-4 mx-auto w-50"},"Submit"))},U=function(e){return r.a.createElement("div",null,"profileCard")},T=a(106),L=function(e){var t=e.component,a=(e.path,Object(T.a)(e,["component","path"]));return r.a.createElement(u.b,Object.assign({exact:!0},a,{render:function(){return a.auth?r.a.createElement(t,null):r.a.createElement(u.a,{to:"/"})}}))},S=r.a.createElement("svg",{width:"1.2em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-person",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"})),C=r.a.createElement("svg",{width:"1.2em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-chat-right-text",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M2 1h12a1 1 0 0 1 1 1v11.586l-2-2A2 2 0 0 0 11.586 11H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"})),H=r.a.createElement("svg",{width:"1.2em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-gear-wide-connected",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 0 0-9.995 4.998 4.998 0 0 0 0 9.996z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M7.375 8L4.602 4.302l.8-.6L8.25 7.5h4.748v1H8.25L5.4 12.298l-.8-.6L7.376 8z"})),I=function(e){return r.a.createElement("button",{className:y()("btn btn-outline-dark p-0",{"text-white":e.icon===e.activeIcon,"text-secondary":e.icon!==e.activeIcon}),style:{fontSize:"30px",lineHeight:"30px"},disabled:e.icon===e.activeIcon},"profile"===e.icon?S:"messages"===e.icon?C:"settings"===e.icon?H:void 0)},R=Object(l.b)((function(e){return{auth:e.auth}}),{logout:function(){return function(){var e=Object(h.a)(f.a.mark((function e(t,a){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth.token,console.log(n),e.next=4,g.post("/logout",{},{headers:{Authorization:"Bearer ".concat(n)}});case 4:r=e.sent,console.log(r.data),t({type:"LOG_OUT",payload:{_id:null,token:null,isLoggedIn:!1}}),localStorage.removeItem("jwt-token"),d.push("/");case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},logoutUser:function(){return function(e,t){var a=t().auth._id;console.log(a),console.log("userlogout ran"),e({type:"LOGOUT_USER",payload:a})}}})((function(e){e.auth,e.logout,e.logoutUser;var t=Object(n.useState)("profile"),a=Object(w.a)(t,2),c=a[0],o=a[1],l=["profile","messages","settings"];return r.a.createElement("div",{className:"d-flex col-2 bg-dark"},r.a.createElement("nav",{className:"d-flex flex-column min-vh-100 w-100 align-items-around"},r.a.createElement("div",{className:"row justify-content-center py-4"},r.a.createElement("h2",{className:"text-white"},"WhatsChat")),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{style:{width:"80%",borderBottom:".5px solid white",borderRadius:"75%"}})),r.a.createElement("div",{className:"row justify-content-around"},r.a.createElement("ul",{className:"list-unstyled d-flex flex-row w-100 justify-content-around components py-3 mb-0"},l.map((function(e){return r.a.createElement("li",{id:"".concat(e,"-cta"),key:e,className:"nav-item",onClick:function(e){return function(e){"profile-cta"===e.currentTarget.id&&o("profile"),"chats-cta"===e.currentTarget.id&&o("messages"),"settings-cta"===e.currentTarget.id&&o("settings")}(e)}},r.a.createElement(I,{icon:e,activeIcon:c}))})))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{style:{width:"80%",borderBottom:".5px solid white",borderRadius:"75%"}}))))})),A=Object(l.b)(null,{signup:function(e){return function(){var t=Object(h.a)(f.a.mark((function t(a){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.post("/create-user",Object(v.a)({},e));case 2:if(!(n=t.sent).data.error){t.next=7;break}return 11e3===(r=n.data.error).code&&alert('The username "'.concat(r.keyValue.username,'" has already been taken.')),t.abrupt("return");case 7:a({type:"CHECK_AUTH",payload:{_id:n.data.user._id,token:n.data.user.token,isLoggedIn:!0}}),d.push("/profile/".concat(n.data.user._id));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},login:function(e){return function(){var t=Object(h.a)(f.a.mark((function t(a){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.post("/login-user",Object(v.a)({},e));case 2:if(!(n=t.sent).data.error){t.next=7;break}return r=n.data.error,alert("".concat(r.message)),t.abrupt("return");case 7:localStorage.setItem("jwt-token",n.data.token),a({type:"LOG_IN",payload:{_id:n.data.user._id,token:n.data.token,isLoggedIn:!0}}),d.push("/profile/".concat(n.data.user._id));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=Object(n.useState)("signup"),a=Object(w.a)(t,2),c=a[0],o=a[1],l=function(t){e.signup(t)},s=function(t){e.login(t)},i=function(){"signup"===c&&o("login"),"login"===c&&o("signup")};return r.a.createElement("div",{className:"col d-flex flex-column justify-content-center"},r.a.createElement("div",{className:"container align-self-center bg-dark w-50 my-auto pb-3 px-3",style:{borderRadius:"5px"}},r.a.createElement("div",{className:"row h-100 mb-2"},r.a.createElement("div",{className:"col p-0"},r.a.createElement("button",{onClick:function(){return i()},className:y()({"btn btn-large text-white w-100 p-3":!0,"btn-outline-dark":"signup"===c,"btn-secondary":"login"===c}),disabled:"signup"===c},"Sign Up Here!")),r.a.createElement("div",{className:"col h-100 p-0"},r.a.createElement("button",{onClick:function(){return i()},className:y()({"btn btn-large text-white w-100 p-3":!0,"btn-outline-dark disabled":"login"===c,"btn-secondary":"signup"===c}),disabled:"login"===c},"Log In Here!"))),"signup"===c?r.a.createElement(N,{handleForm:l}):r.a.createElement(_,{handleForm:s})))})),z=Object(l.b)((function(e,t){return{user:e.user,auth:e.auth}}),{fetchUserData:function(){return function(){var e=Object(h.a)(f.a.mark((function e(t,a){var n,r,c,o,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth,r=n.token,c=n.isLoggedIn,o=n._id,e.next=3,g.get("/user",{headers:{Authorization:"Bearer ".concat(r)}});case 3:l=e.sent,console.group("[FETCH_USER]"),console.log("[TOKEN]:",r),console.log("[RESPONSE]",l),console.groupEnd(),t({type:"FETCH_USER",payload:Object(v.a)({},l.data.user)}),c||d.push("/"),d.push("/profile/".concat(o));case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},checkAuth:E})((function(e){var t=e.user,a=e.auth,c=e.fetchUserData;if(Object(n.useEffect)((function(){a.token&&c()}),[a.token]),!t[a._id])return r.a.createElement("div",null,"No user found");return r.a.createElement("div",{className:""},r.a.createElement(U,{user:t}))})),F=Object(l.b)((function(e){return{auth:e.auth}}),{checkAuth:E})((function(e){var t=e.auth,a=e.checkAuth;return Object(n.useEffect)((function(){a()}),[a,t.isLoggedIn]),r.a.createElement("div",{className:"wrapper d-flex align-items-stretch"},r.a.createElement(u.c,{history:d},r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0},t.isLoggedIn?r.a.createElement(u.a,{to:"/profile/".concat(t._id)}):r.a.createElement(A,null)),r.a.createElement(L,{path:"/profile/".concat(t._id),auth:t.isLoggedIn,component:z})))))})),M=a(236),B={isLoggedIn:!1,_id:null,token:null},D=a(47),G=a(105),K=a.n(G),P=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_AUTH":return console.log("[CHECK_AUTH]:",t),Object(v.a)(Object(v.a)({},e),t.payload);case"LOG_IN":return console.log("[LOG_IN]:",t),Object(v.a)(Object(v.a)({},e),t.payload);case"LOG_OUT":return console.log("[LOG_OUT]:",t),Object(v.a)(Object(v.a)({},e),t.payload);default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return console.log("[FETCH_USER]",t),Object(v.a)(Object(v.a)({},e),{},Object(D.a)({},t.payload._id,t.payload));case"UPDATE_USER":return console.log("[UPDATE_USER]",t),{};case"LOGOUT_USER":return K.a.omit(e,t.payload);case"DELETE_USER":return console.log("[DELETE_USER]",t),{};default:return e}},form:M.a}),V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,J=Object(s.e)(P,V(Object(s.a)(i.a)));o.a.render(r.a.createElement(l.a,{store:J},r.a.createElement(F,null)),document.querySelector("#root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.f28567c7.chunk.js.map