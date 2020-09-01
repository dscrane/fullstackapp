(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,t,a){e.exports=a(233)},233:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(47),c=a.n(o),l=a(11),s=a(6),u=a(103),i=a(7),m=a(13),d=Object(m.a)(),p=a(10),b=a.n(p),f=a(20),E=a(104),g=a.n(E).a.create({baseURL:"https://dsc-chat-app.herokuapp.com"}),h=function(){return function(){var e=Object(f.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=localStorage.getItem("jwt-token")){e.next=4;break}return console.log("[AUTH]: No Token"),e.abrupt("return",t({type:"CHECK_AUTH",payload:{isLoggedIn:!1,token:null}}));case 4:return console.log("[AUTH-TOKEN]: jwt-token=".concat(a)),e.next=7,g.get("/user-id",{headers:{Authorization:"Bearer ".concat(a)}});case 7:n=e.sent,t({type:"CHECK_AUTH",payload:{_id:n.data,token:a,isLoggedIn:!0}});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=a(8),v=a(107),y=a(67),_=a.n(y),k=a(235),j=a(234),N=Object(j.a)({form:"homeForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit((function(t){e.handleForm(t)})),className:"form-signin mt-2"},e.children)})),w=function(e){var t=function(e){var t=e.input,a=e.label;return r.a.createElement("div",null,r.a.createElement("label",{className:"text-white text-left my-2"},a),r.a.createElement("input",Object.assign({className:"form-control",placeholder:a},t)))};return r.a.createElement(N,{handleForm:function(t){e.handleForm(t)}},r.a.createElement("div",{className:"ui stacked element"},r.a.createElement(k.a,{name:"username",component:t,label:"Username"}),r.a.createElement(k.a,{name:"password",component:t,label:"Password"}),r.a.createElement("button",{className:"btn btn-md btn-secondary btn-block my-4 mx-auto w-25"},"Submit")))},x=function(e){var t=function(e){var t=e.input,a=e.label;return r.a.createElement("div",null,r.a.createElement("label",{className:"text-white text-left my-2"},a),r.a.createElement("input",Object.assign({className:"form-control",placeholder:a},t)))};return r.a.createElement(N,{handleForm:function(t){e.handleForm(t)}},r.a.createElement(k.a,{name:"name",component:t,label:"Name"}),r.a.createElement(k.a,{name:"username",component:t,label:"Username"}),r.a.createElement(k.a,{name:"email",component:t,label:"Email"}),r.a.createElement(k.a,{name:"password",component:t,label:"Password"}),r.a.createElement(k.a,{name:"passwordConf",component:t,label:"Confirm Password"}),r.a.createElement("button",{className:"btn btn-md btn-secondary btn-block mt-4 mx-auto w-50"},"Submit"))},U=Object(l.b)(null,{signup:function(e){return function(){var t=Object(f.a)(b.a.mark((function t(a){var n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.post("/create-user",Object(O.a)({},e));case 2:if(!(n=t.sent).data.error){t.next=7;break}return 11e3===(r=n.data.error).code&&alert('The username "'.concat(r.keyValue.username,'" has already been taken.')),t.abrupt("return");case 7:a({type:"CHECK_AUTH",payload:{_id:n.data.user._id,token:n.data.user.token,isLoggedIn:!0}}),d.push("/profile/".concat(n.data.user._id));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},login:function(e){return function(){var t=Object(f.a)(b.a.mark((function t(a){var n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.post("/login-user",Object(O.a)({},e));case 2:if(!(n=t.sent).data.error){t.next=7;break}return r=n.data.error,alert("".concat(r.message)),t.abrupt("return");case 7:localStorage.setItem("jwt-token",n.data.token),a({type:"LOG_IN",payload:{_id:n.data.user._id,token:n.data.token,isLoggedIn:!0}}),d.push("/profile/".concat(n.data.user._id));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=Object(n.useState)("signup"),a=Object(v.a)(t,2),o=a[0],c=a[1],l=function(t){e.signup(t)},s=function(t){e.login(t)},u=function(){"signup"===o&&c("login"),"login"===o&&c("signup")};return r.a.createElement("div",{className:"container align-self-center bg-dark w-25 my-auto p-3",style:{borderRadius:"5px"}},r.a.createElement("div",{className:"row h-100 mb-2"},r.a.createElement("div",{className:"col"},r.a.createElement("button",{onClick:function(){return u()},className:_()({"btn w-100 btn-large":!0,"btn-secondary":"signup"===o,"btn-outline-secondary":"login"===o}),disabled:"signup"===o},"Sign Up Here!")),r.a.createElement("div",{className:"col"},r.a.createElement("button",{onClick:function(){return u()},className:_()({"btn w-100 btn-large":!0,"btn-secondary disabled":"login"===o,"btn-outline-secondary":"signup"===o}),disabled:"login"===o},"Log In Here!"))),"signup"===o?r.a.createElement(x,{handleForm:l}):r.a.createElement(w,{handleForm:s}))})),L=Object(l.b)((function(e,t){return{user:e.user,auth:e.auth}}),{fetchUserData:function(){return function(){var e=Object(f.a)(b.a.mark((function e(t,a){var n,r,o,c,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth,r=n.token,o=n.isLoggedIn,c=n._id,e.next=3,g.get("/user",{headers:{Authorization:"Bearer ".concat(r)}});case 3:l=e.sent,console.group("[FETCH_USER]"),console.log("[TOKEN]:",r),console.log("[RESPONSE]",l),console.groupEnd(),t({type:"FETCH_USER",payload:Object(O.a)({},l.data.user)}),o||d.push("/"),d.push("/profile/".concat(c));case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},checkAuth:h})((function(e){var t=e.user,a=e.auth,o=e.fetchUserData;if(Object(n.useEffect)((function(){a.token&&o()}),[a.token]),!t[a._id])return r.a.createElement("div",null,"No user found");return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t[a._id].name),r.a.createElement("hr",null),Object.keys(t[a._id]).map((function(e){return r.a.createElement("p",{className:"text-left",key:e},r.a.createElement("span",{className:"font-weight-bold"},e,": "),r.a.createElement("span",null,t[a._id][e]))}))))})),T=a(108),S=function(e){var t=e.component,a=(e.path,Object(T.a)(e,["component","path"]));return r.a.createElement(i.b,Object.assign({exact:!0},a,{render:function(){return a.auth?r.a.createElement(t,null):r.a.createElement(i.a,{to:"/"})}}))},C=a(30),I=Object(l.b)((function(e){return{auth:e.auth}}),{logout:function(){return function(){var e=Object(f.a)(b.a.mark((function e(t,a){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth.token,console.log(n),e.next=4,g.post("/logout",{},{headers:{Authorization:"Bearer ".concat(n)}});case 4:r=e.sent,console.log(r.data),t({type:"LOG_OUT",payload:{_id:null,token:null,isLoggedIn:!1}}),localStorage.removeItem("jwt-token"),d.push("/");case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},logoutUser:function(){return function(e,t){var a=t().auth._id;console.log(a),console.log("userlogout ran"),e({type:"LOGOUT_USER",payload:a})}}})((function(e){var t=e.auth,a=e.logout,n=e.logoutUser;return r.a.createElement("nav",{className:"navbar d-flex justify-content-between fixed-top bg-dark"},r.a.createElement(C.a,{className:"navbar-brand text-white",to:"/"},"Chat App"),t.isLoggedIn?r.a.createElement("div",{className:""},r.a.createElement("ul",{className:"navbar-nav mr-auto d-flex flex-row justify-content-between"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(C.a,{className:"btn btn-md btn-secondary mx-2",to:"/chats"},"Chats")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(C.a,{className:"btn btn-md btn-secondary mx-2",to:"/profile/".concat(t._id)},"Profile")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:"btn btn-md btn-secondary mx-2",onClick:function(){a(),n()}},"Log Out")))):r.a.createElement("button",{className:"btn btn-md btn-secondary"},"Log In"))})),H=Object(l.b)((function(e){return{auth:e.auth}}),{checkAuth:h})((function(e){var t=e.auth,a=e.checkAuth;return Object(n.useEffect)((function(){a()}),[a,t.isLoggedIn]),r.a.createElement("div",{className:"container-fluid d-flex flex-column w-100 min-vh-100 justify-content-center align-items-center"},r.a.createElement(i.c,{history:d},r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0},t.isLoggedIn?r.a.createElement(i.a,{to:"/profile/".concat(t._id)}):r.a.createElement(U,null)),r.a.createElement(S,{path:"/profile/".concat(t._id),auth:t.isLoggedIn,component:L})))))})),A=a(236),R={isLoggedIn:!1,_id:null,token:null},F=a(48),D=a(106),G=a.n(D),P=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_AUTH":return console.log("[CHECK_AUTH]:",t),Object(O.a)(Object(O.a)({},e),t.payload);case"LOG_IN":return console.log("[LOG_IN]:",t),Object(O.a)(Object(O.a)({},e),t.payload);case"LOG_OUT":return console.log("[LOG_OUT]:",t),Object(O.a)(Object(O.a)({},e),t.payload);default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return console.log("[FETCH_USER]",t),Object(O.a)(Object(O.a)({},e),{},Object(F.a)({},t.payload._id,t.payload));case"UPDATE_USER":return console.log("[UPDATE_USER]",t),{};case"LOGOUT_USER":return G.a.omit(e,t.payload);case"DELETE_USER":return console.log("[DELETE_USER]",t),{};default:return e}},form:A.a}),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,z=Object(s.e)(P,K(Object(s.a)(u.a)));c.a.render(r.a.createElement(l.a,{store:z},r.a.createElement(H,null)),document.querySelector("#root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.d93a8ab7.chunk.js.map