(this["webpackJsonpsocial-network-ts-2.0"]=this["webpackJsonpsocial-network-ts-2.0"]||[]).push([[0],{126:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(43),a=n(5),s={dialogsData:[{id:1,name:"\u0421\u0430\u0448\u0430"},{id:2,name:"\u0421\u0432\u0435\u0442\u0430"},{id:3,name:"\u041f\u043e\u043b\u0438\u043d\u0430"},{id:4,name:"Brad"}],messagesData:[{id:1,message:"\u042f \u0440\u0430\u0437\u0431\u043e\u0433\u0430\u0442\u0435\u043b!"},{id:2,message:"\u042f \u043d\u0430\u0431\u0443\u0445\u0430\u043b\u0430\u0441\u044c"},{id:3,message:"\u0414\u0438\u0434\u0438, \u0442\u0438\u043f \u0442\u0438!"},{id:4,message:'Frogs say: "ribit, ribit" '}],isAuth:!1};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n={id:5,message:t.newMessageBody};return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[n])});default:return e}};var c=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}}},133:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__3eBwG"}},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var r=n(131),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"bcdd4faf-f5b8-4f33-8a06-1a47aa179469"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollowUser:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},c={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})}},o={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("/auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("/auth/login")}}},167:function(e,t,n){},22:function(e,t,n){e.exports={nav:"Navbar_nav__3nVfw",item:"Navbar_item__2Kfqh",active:"Navbar_active__9Mx7E"}},287:function(e,t,n){},288:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(63),c=n.n(s),o=n(14),i=n(13),u=n(36),l=n(37),d=n(39),f=n(38),j=n(11),b=n(9),p=(n(167),n(65)),h=n(5),g=n(68),O=n.n(g),v=n(1);var m=function(e){return Object(v.jsxs)("header",{className:O.a.header,children:[Object(v.jsx)("img",{className:O.a.logo,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1164px-Logo_TV_2015.svg.png",alt:"logj"}),Object(v.jsx)("div",{className:O.a.loginBlock,children:e.isAuth?Object(v.jsxs)("div",{children:[e.login," - ",Object(v.jsx)("button",{onClick:e.logout,children:"log out"})]}):Object(v.jsx)(i.b,{to:"/login",children:"Login"})})]})},x=n(10),w=n.n(x),P=n(19),A=n(16),S=n(44),C="SET_USER_DATA",y={userId:null,email:null,login:null,isAuth:!1},T=function(e,t,n,r){return{type:C,payload:{userId:e,email:t,login:n,isAuth:r}}},N=function(){return function(){var e=Object(P.a)(w.a.mark((function e(t,n){var r,a,s,c,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.me();case 2:0===(r=e.sent).data.resultCode&&(a=r.data.data,s=a.id,c=a.email,o=a.login,t(T(s,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(h.a)(Object(h.a)({},e),t.payload);default:return e}},U=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsx)(m,Object(h.a)({},this.props))}}]),n}(a.a.Component),G=Object(o.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(P.a)(w.a.mark((function e(t,n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.logout();case 2:0===e.sent.data.resultCode&&console.log(t(T(null,null,null,!1)));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}})(U),D=n(127),I=n(74),M=n(33),k=n(51),B=n.n(k),z=Object(D.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(v.jsxs)("form",{onSubmit:t,children:[Object(M.c)("Email","email",[I.b],M.a),Object(M.c)("Password","password",[I.b],M.a,{type:"password"}),Object(M.c)(null,"rememberMe",[],M.a,{type:"checkbox"},"remember me"),n&&Object(v.jsx)("div",{className:B.a.formSummaryError,children:n}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{children:"Login"})})]})})),Q=Object(o.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(P.a)(w.a.mark((function r(a,s){var c,o,i;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,A.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(N()):(o=c.data.messages.length>0?c.data.messages[0]:"Some error",i=Object(S.a)("login",{_error:o}),a(i));case 4:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(v.jsx)(j.a,{to:"/profile"}):Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Login"}),Object(v.jsx)(z,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),X=n(22),_=n.n(X);var L=function(){return Object(v.jsxs)("div",{className:_.a.nav,children:[Object(v.jsx)("div",{className:_.a.item,children:Object(v.jsx)(i.b,{to:"/profile",activeClassName:"".concat(_.a.item," ").concat(_.a.active),children:"Profile"})}),Object(v.jsx)("div",{className:_.a.item,children:Object(v.jsx)(i.b,{to:"/dialogs",activeClassName:"".concat(_.a.item," ").concat(_.a.active),children:"Messages"})}),Object(v.jsx)("div",{className:_.a.item,children:Object(v.jsx)(i.b,{to:"/news",children:"News"})}),Object(v.jsx)("div",{className:_.a.item,children:Object(v.jsx)(i.b,{to:"/users",children:"Users"})}),Object(v.jsx)("div",{className:_.a.item,children:Object(v.jsx)(i.b,{to:"/music",children:"Music"})}),Object(v.jsx)("div",{className:_.a.item,children:Object(v.jsx)(i.b,{to:"/settings",children:"Settings"})})]})},R=n(43),q=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(h.a)(Object(h.a)({},e),{},{newObjProps:r}):e}))},J="FOLLOW",K="UNFOLLOW",Y="SET_USERS",F="SET_CURRENT_PAGE",V="SET_TOTAL_USERS_COUNT",H="TOGGLE_IS_FETCHING",Z="TOGGLE_IS_FOLLOWING_PROGRESS",W={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},$=function(e){return{type:J,userID:e}},ee=function(e){return{type:K,userID:e}},te=function(e){return{type:F,currentPage:e}},ne=function(e){return{type:H,isFetching:e}},re=function(e,t){return{type:Z,isFetching:e,userId:t}},ae=function(){var e=Object(P.a)(w.a.mark((function e(t,n,r,a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(re(!0,n)),e.next=3,r(n);case 3:0==e.sent.resultCode&&t(a(n)),t(re(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),se=n(128),ce=n(70),oe=n.n(ce),ie=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,s=e.onPageChanged,c=e.portionSize,o=void 0===c?10:c,i=Math.ceil(t/n),u=[],l=1;l<=i;l++)u.push(l);var d=Math.ceil(i/o),f=Object(r.useState)(1),j=Object(se.a)(f,2),b=j[0],p=j[1],h=(b-1)*o+1,g=b*o;return Object(v.jsxs)("div",{className:oe.a.paginator,children:[b>1&&Object(v.jsx)("button",{onClick:function(){p(b-1)},children:"PREV"}),u.filter((function(e){return e>=h&&e<=g})).map((function(e){return Object(v.jsxs)("span",{className:a===e?oe.a.selectedPage:oe.a.pageNumber,onClick:function(){s(e)},children:[" ",e," "]})})),d>b&&Object(v.jsx)("button",{onClick:function(){p(b+1)},children:"NEXT"})]})},ue=n(133),le=n.n(ue),de=function(e){var t=e.user,n=e.follow,r=e.unfollow,a=e.followingInProgress;return Object(v.jsxs)("div",{children:[Object(v.jsxs)("span",{children:[Object(v.jsx)("div",{children:Object(v.jsx)(i.b,{to:"/profile/"+t.id,children:Object(v.jsx)("img",{src:null!=t.photos.small?t.photos.small:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXYJjncOgjVgYKgD-VHvVHHcA14VgyUf2Xw&usqp=CAU",className:le.a.userPhoto})})}),Object(v.jsx)("div",{children:t.followed?Object(v.jsx)("button",{disabled:a.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(v.jsx)("button",{disabled:a.some((function(e){return e===t.id})),onClick:function(){n(t.id)},children:"Follow"})})]}),Object(v.jsxs)("span",{children:[Object(v.jsx)("div",{children:t.name}),Object(v.jsx)("div",{children:t.status})]}),Object(v.jsxs)("span",{children:[Object(v.jsx)("div",{children:"u.location.country"}),Object(v.jsx)("div",{children:"u.location.city"})]})]})},fe=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,a=e.pageSize,s=e.users,c=e.followingInProgress,o=e.follow,i=e.unfollow;return Object(v.jsxs)("div",{children:[Object(v.jsx)(ie,{totalItemsCount:r,pageSize:a,currentPage:t,onPageChanged:n,portionSize:10}),Object(v.jsx)("div",{children:s.map((function(e){return Object(v.jsx)(de,{user:e,follow:o,unfollow:i,followingInProgress:c},e.id)}))})]})},je=function(e){return e.usersPage.users},be=function(e){return e.usersPage.pageSize},pe=function(e){return e.usersPage.totalUsersCount},he=function(e){return e.usersPage.currentPage},ge=function(e){return e.usersPage.isFetching},Oe=function(e){return e.usersPage.followingInProgress},ve=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:this.props.isFetching?Object(v.jsx)(p.a,{}):Object(v.jsx)(fe,{onPageChanged:this.onPageChanged,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})})}}]),n}(a.a.Component),me=Object(b.d)(Object(o.b)((function(e){return{users:je(e),pageSize:be(e),totalUsersCount:pe(e),currentPage:he(e),isFetching:ge(e),followingInProgress:Oe(e)}}),{setCurrentPage:te,requestUsers:function(e,t){return function(){var n=Object(P.a)(w.a.mark((function n(r,a){var s;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(ne(!0)),r(te(e)),n.next=4,A.c.getUsers(e,t);case 4:s=n.sent,r(ne(!1)),r((c=s.items,{type:Y,users:c})),r((a=s.totalCount,{type:V,count:a}));case 8:case"end":return n.stop()}var a,c}),n)})));return function(e,t){return n.apply(this,arguments)}}()},follow:function(e){return function(){var t=Object(P.a)(w.a.mark((function t(n,r){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ae(n,e,A.c.followUser.bind(A.c),$);case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(P.a)(w.a.mark((function t(n,r){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ae(n,e,A.c.unfollowUser.bind(A.c),ee);case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}))(ve);function xe(e){return function(t){return Object(v.jsx)(a.a.Suspense,{fallback:Object(v.jsx)("div",{children:"Loading..."}),children:Object(v.jsx)(e,Object(h.a)({},t))})}}var we="INITIALIZED_SUCCSESS",Pe={initialized:!1},Ae=a.a.lazy((function(){return n.e(4).then(n.bind(null,294))})),Se=a.a.lazy((function(){return n.e(3).then(n.bind(null,293))})),Ce=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(v.jsxs)("div",{className:"app-wrapper",children:[Object(v.jsx)(G,{}),Object(v.jsx)(L,{}),Object(v.jsxs)("div",{className:"app-wrapper-content",children:[Object(v.jsx)(j.b,{path:"/profile/:userId?",render:xe(Se)}),Object(v.jsx)(j.b,{path:"/dialogs",render:xe(Ae)}),Object(v.jsx)(j.b,{path:"/users",render:xe(me)}),Object(v.jsx)(j.b,{path:"/login",render:function(){return Object(v.jsx)(Q,{})}})]})]}):Object(v.jsx)(p.a,{})}}]),n}(a.a.Component),ye=Object(b.d)(j.f,Object(o.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e,t){var n=e(N());Promise.all([n]).then((function(){e({type:we})}))}}}))(Ce),Te=(n(287),n(134)),Ne=n(96),Ee=n(126),Ue={},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue;return e},De=n(129),Ie=Object(b.c)({profilePage:Ne.b,dialogsPage:Ee.a,sidebar:Ge,usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(h.a)(Object(h.a)({},e),{},{users:q(e.users,t.userID,"id",{followed:!0})});case K:return Object(h.a)(Object(h.a)({},e),{},{users:q(e.users,t.userID,"id",{followed:!1})});case Y:return Object(h.a)(Object(h.a)({},e),{},{users:t.users});case F:return Object(h.a)(Object(h.a)({},e),{},{currentPage:t.currentPage});case V:return Object(h.a)(Object(h.a)({},e),{},{totalUsersCount:t.count});case H:return Object(h.a)(Object(h.a)({},e),{},{isFetching:t.isFetching});case Z:return Object(h.a)(Object(h.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(R.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},auth:E,form:De.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case we:return Object(h.a)(Object(h.a)({},e),{},{initialized:!0});default:return e}}}),Me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,ke=Object(b.e)(Ie,Me(Object(b.a)(Te.a)));c.a.render(Object(v.jsx)(i.a,{basename:"/social-network",children:Object(v.jsx)(o.a,{store:ke,children:Object(v.jsx)(ye,{})})}),document.getElementById("root"))},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(5),a=n(89),s=(n(0),n(90)),c=n(51),o=n.n(c),i=n(1),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,s=n&&r;return Object(i.jsxs)("div",{className:o.a.formControl+" "+(s?o.a.error:""),children:[Object(i.jsx)("div",{children:a}),s&&Object(i.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(i.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(i.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5?arguments[5]:void 0;return Object(i.jsxs)("div",{children:[Object(i.jsx)(s.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},c)),Object(i.jsx)("span",{children:o})]})}},51:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3dg2r",error:"FormsControls_error__1S_b0",formSummaryError:"FormsControls_formSummaryError__1TeGy"}},65:function(e,t,n){"use strict";n(0);var r=n(1);t.a=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAUVBMVEX///+YmJiSkpKVlZW2traTk5P7+/vp6emPj4/y8vLx8fHu7u6hoaHl5eW7u7vT09Pf39+urq7FxcXNzc2/v7+np6fPz8+srKzZ2dmjo6OIiIiZUr1XAAAJVUlEQVR4nO2da5uyKhSGA9SoV9NMa9r//4du7DCpiT4cBOSa5+OMKbfgWrA4rN3Og5rbrWnqstpnPp7uQAnrlFLKOTs3ZREdZ8LIrzpQTpJL4btQNtUHfGNSfq8r3wWzpW/AJyXlt/Lgu3A2JAHsGFOe13vf5TOWHPAByfPLxutxHvDB2P74LqSJFgG775E2R9/l1BYA+KzGrZpVDLCrxrz0XVYtoYBClGwRUQFwm4hKgB3i1r5FRUBCeLst568MKCxqsqUhhzpg14nb0KeoAyg+xfyf74Kj0gMU7bT2XXJQmoCEpBupRG1AYU8vvguPyACQ0HYD5tQEUHRQww/fGAGKZhq8rTEEJPTmm2BBpoCEkbBjGsaAol8T9IdoDig+xJB7bjYAg/aIVgAJTXxzSGUJ8OSbQyorgLTxjSGXDcCQ+WwABs1nATBsPnNAa/bltE4w68xpypg+5YBvb1CZDeWrjKCzoro2p5ZyqkU54PvH9QcXJRf9hTVjBFlVJ4SnipAjPv1eW8Eft1s7CpL9JIwqMA75aPcnrtXzPvDXDR3EefaXOwcZJ/gEoc7o6XNLJ5GsYw3V4yQfYbn6A8+fp7kh3O2qZBFxmk8QnlUfVtP+bV1FI7Nm3uLI+MR/FE1pwYc3dhdvrWkq5+sPkAZ84jNUctnZ+D1ShwsCSllDHfAd6fjfKs9ovx7hknDXTJrUBT6mEGq7fP3aMeGx5d8FmOcTF8AxjH/fd3dNuKvIqBIX+RS84dSPnRPuToPXDPARAnrDWmbGHBNWPZcB8YGNdLqBPpQ6XlzVvkmGfHI/AjXSXPpzQeg4Yn7l33wHOR9hLXBPWf17IXx0OGA+ceniyCmb5XNPeCBMgU8QLt1wMVzimnDXqvARthDu3sstjDfCnhb5hJ2ZN4TffbSQCAG+BTtTLXyBr3t4IjxAg/7Z+AVyA2+EGN9sf6aEKtATIcpHqHzxJXgHL4Qw30wVwhUoDI1yDMRUZ8DAvCT19vAdtKJYpsoVYqfTd1CoQOZhOdUBLx6d3lUy18seSi+SbKpiuRPy1mQDw3zgg8/TCo6pSIqkhFMhthvaxpe6e+sJnlecigMf8Qbgnuwt2JJO9EhP6Nvx8wE+VaG1wL4D3XAnxuvsOFwNbPzLH7j2fXB9hJbyy1PcwVejNgVgX6ivGMe5URPjz4K+dUZrYthbrtGfeV8RfgCrIh3GSLEfjX/lRWhdDHozM8HeoXxR9QWaw4ErBN+KpBPrWOCgYOAKsXcSRgXCpe21UfDDXQ4bu1GJNdKeHb2A361HqIEwwN6GQ2wgEYIJfQqrkM+QIsNaaOqTaSjMzPD35WC4N6AdQ1if+3cXF+YkVl13qCjMb7P3N4UFYzwE0uSCivw7TQG9jrA2QWNm5vURYp+g/252X5hdfH2E0NtQX863rqBR0+sjhK4Noxv6EdSbeY1eseYcVAuFfXd3KdYRvfsmGguyo49qgWxMSF7+qQb6sDorc0VaMw3uuJMCqZeHb4O6PV9hRv+CGl4XxEUWVoTmJDohxv9RbuhNBDNS+gjqQTPQ3s7M63sTFIvnX4vXJdcFuC8fLThkjQK0MdgYQfgJpM+DLMN0rxYATH92V8QYBefmOyGuXjhC5LIQjSg2ChKOEJn3DtGIYmZUtD3EX4Z5Bg/SiRaeHgEM0UvM7C4YAiLDjtAGg09B47x2RwH955tlWv8BRee7PSLfKNPacNH/9Kc//elPoShD5LuQ08KKzgGF2pNByh5/XzT60UT048HoR/TRx2Sgy7YcVdtuXPS+XPAuLrrdyDZScGEeo5+biHx2KYt/fjDuGd7OOkY/Rw+t5NryKouNrpOBPsFHJxoadYTn6vGVTtGvVdvmakPIC75WG2LrRb3vqxtKZb1o9Ct+o1+zHf+q++j3TWxv5wu0GvYTK4t+71L0u8/i3z8I7lHe7g7Q6Pfwxr8Le1P76MGiDv02+KMQDKn0hN6Rhj2v+M6yGAUC0Tbqf9SkeRrJZs6TAQ5AfdbEOMYS/YlA8JlOqdc+t/6ZTmAHnfg9lQs+HG9i6AO7wq2eqxbXyXhTqRnCP9tw/ozzQQknbb3C6ZRefIXp6ZTBny+KH6AqGxTAN9joCbHxn/EbyynNcj8WyTnbM0YevMdmT0qP46z72SUvsWcriCHfxMIUilrGkMSBt7CbMUQt50tCWb5yfR5yxZwvi30shaw9ibiUrbuCxn7Wnnlv/8VH1h1blIp5l6BZWjRzVvKb1uq8Utc7OytnzoJSe2G5z5JPU2ZklShG1Uu0iOU+Q+NFinzdm1thkJ+slr0OyT+YjB5hvRJXzT84TOGK8HV3P1t0GMfbqhkkF3OATvCJSuTWTsGv184BupDFdZKvewSx4jFKWYrzeUK1MMoo78EgD6+Mr7uOGM+v1WTm9nN5eBWNQCPNpHya7+rQ2sArZvV8smh7mZQHcWAFPtJ9i4mmRS2SxZTm9nJh90b3anzd0yiplU3qQbRNp9nMp/PRI3yPJ/L2orC27Z+PfPQvQ6PF1yEyzk4/wPeY/SQMpZMQ6k54dX15rsn3hEx5nlwKKWVWXJKcz2doXyLkJuOZhhrxPSEZ5aw91dfqA5oV1bU+tYxTmctTIeQGU7JJfzSrxfemZCnlv5buzGnKtNgmCPe2OlAGfC/KXzcNz/NBhJbUmPLZBCTUevYncz6rgNYJLfDZBbRMaIPPMqBVQmP78pBlQJuWZmaApCDrgBYDQQ0+/y+XZUAT//6tqwVCu4D8apNPIbWhI0D7G9+P4zieT0BG1pjzaQ1NjT1AutKGW0NTYw3QXnxyrEp16LYGIFvzfKLsji/HWQmQtusuI6v1m6kVQLveb0p7lTVjtgHT3MU6x5NmJRoDsvWr76l9ruUwTAGpk+p76qIS57MDyNyuMz6c1dupESBPXK/BVW+nBoAuW+dHPzMTXVYBKfF1pFSphKgJSO1Mq+oiMoXZCh1Av3idSmjWSw+Q+cfrVLWY01AFZPwWynFu+xNFlqoqAab0FNDhGcKk5ovVqADIeB7Ehu+B9jWZZ0QBGdeYAXejjlE+JkYAWSrogjvDra/jtaUSs7oIyChvr9CCSL/Kqvo+NXc7B9jNA9/rUIwmouqSsMc87hLgY+6XJZctwb11KMrmxrjg7CasWR+wUyrIOLs1ZRGoSQGVHYqqbOrkfPudDTrdzkndlFXh4BT9/wGZuYGA5kjE+AAAAABJRU5ErkJggg=="})})}},68:function(e,t,n){e.exports={header:"Header_header__3dq1q",logo:"Header_logo__3787I",loginBlock:"Header_loginBlock__1ZkTu"}},70:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__3JWG2",paginator:"Paginator_paginator__29l8-",pageNumber:"Paginator_pageNumber__2lZqn"}},74:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return O}));var r=n(10),a=n.n(r),s=n(19),c=n(43),o=n(5),i=n(16),u="ADD-POST",l="DELETE-POST",d="SET-USER-PROFILE",f="SET_USER_STATUS",j={profile:null,postsData:[{id:"1",postMessage:"Hi! It's my first post",likesCount:3},{id:"2",postMessage:"Yo!",likesCount:12}],isAuth:!1,status:""},b=function(e){return{type:u,newPostText:e}},p=function(e){return{type:f,status:e}},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n,r){var s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getProfile(e);case 2:s=t.sent,n((r=s.data,{type:d,profile:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e,n){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n,r){var s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:s=t.sent,n(p(s.data));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:"3",postMessage:t.newPostText,likesCount:0};return Object(o.a)(Object(o.a)({},e),{},{postsData:[].concat(Object(c.a)(e.postsData),[n])});case l:return Object(o.a)(Object(o.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.postId}))});case d:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case f:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});default:return e}}}},[[288,1,2]]]);
//# sourceMappingURL=main.b9ed699e.chunk.js.map