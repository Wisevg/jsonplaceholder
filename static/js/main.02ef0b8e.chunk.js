(this.webpackJsonpsteam_inv=this.webpackJsonpsteam_inv||[]).push([[0],{28:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var n=s(4),c=s.n(n),r=s(16),i=s.n(r),a=s(6),o=s.n(a),u=s(15),l=s(9),j=s(10),h=s(5),b=s(12),m=s(11),f=s(2),p=s(3),d=s(0),O=function(e){Object(b.a)(s,e);var t=Object(m.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"navbar flex column",children:[Object(d.jsx)("div",{className:"goback-btn",onClick:this.props.backBtnClick,children:Object(d.jsx)(f.a,{icon:p.a})}),Object(d.jsx)("div",{className:"line"}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{onClick:this.props.onUsersClick,children:[Object(d.jsx)(f.a,{icon:p.i})," \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"]}),Object(d.jsxs)("li",{onClick:this.props.onPostsClick,children:[Object(d.jsx)(f.a,{icon:p.f})," \u0421\u0442\u0430\u0442\u044c\u0438"]})]})})]})}}]),s}(c.a.Component);s(28);function x(e){return Object(d.jsxs)("div",{className:"post flex column",children:[Object(d.jsx)("h3",{className:"post-title",children:e.post.title}),Object(d.jsx)("p",{className:"post-body",children:e.post.body}),Object(d.jsxs)("p",{className:"post-author",onClick:function(){return e.onAuthorClick&&e.onAuthorClick()},children:[Object(d.jsx)(f.a,{icon:p.h})," ",e.author]})]})}s(29);function v(e){return Object(d.jsx)("div",{className:"post-list flex column a-center",children:e.posts.map((function(t){return Object(d.jsx)(x,{post:t,author:e.getUserName(t.userId),onAuthorClick:function(){return e.onAuthorClick(t.userId)}},t.id)}))})}s(30),s(8);function k(e){return Object(d.jsxs)("div",{className:"user-name-info flex column",children:[Object(d.jsxs)("p",{className:"user-name",onClick:function(){return e.onNameClick&&e.onNameClick()},children:[Object(d.jsx)(f.a,{icon:p.e})," ",e.name]}),Object(d.jsx)("p",{className:"user-username",children:e.username})]})}function N(e){return Object(d.jsxs)("div",{className:"user-contacts flex column",children:[Object(d.jsxs)("p",{className:"user-email",children:[Object(d.jsx)(f.a,{icon:p.b})," ",e.email]}),Object(d.jsxs)("p",{className:"user-phone",children:[Object(d.jsx)(f.a,{icon:p.g})," ",e.phone]}),Object(d.jsxs)("p",{className:"user-website",children:[Object(d.jsx)(f.a,{icon:p.d})," ",Object(d.jsx)("a",{href:"https://"+e.website,children:e.website})]})]})}function y(e){var t=e.user;return Object(d.jsxs)("div",{className:"user",children:[Object(d.jsx)(k,{name:t.name,username:t.username,onNameClick:e.onNameClick}),Object(d.jsx)(N,{email:t.email,phone:t.phone,website:t.website})]})}function C(e){return Object(d.jsx)("div",{className:"user-list",children:e.users.map((function(t){return Object(d.jsx)(y,{user:t,onNameClick:function(){return e.onNameClick(t.id)}},t.id)}))})}s(31);function w(e){return Object(d.jsxs)("div",{className:"user-company flex column a-center",children:[Object(d.jsxs)("h3",{children:[Object(d.jsx)(f.a,{icon:p.c})," ",e.name]}),Object(d.jsx)("p",{children:e.catchPhrase})]})}function g(e){if(!e.user)return null;var t=e.user;return Object(d.jsxs)("section",{className:"screen-user flex column a-center",children:[Object(d.jsxs)("div",{className:"screen-user-main-info flex",children:[Object(d.jsx)(k,{name:t.name,username:t.username}),Object(d.jsx)(N,{email:t.email,phone:t.phone,website:t.website})]}),Object(d.jsx)(w,{name:t.company.name,catchPhrase:t.company.catchPhrase})]})}var U=function(e){Object(b.a)(s,e);var t=Object(m.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={current_view:null,history:[],users:[],posts:[]},n.openUserScreen=n.openUserScreen.bind(Object(h.a)(n)),n.goPreviousView=n.goPreviousView.bind(Object(h.a)(n)),n.getUserName=n.getUserName.bind(Object(h.a)(n)),n.goUsers=n.goUsers.bind(Object(h.a)(n)),n.goPosts=n.goPosts.bind(Object(h.a)(n)),n}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.fetchUsers(),this.fetchPosts()}},{key:"getUserName",value:function(e){return this.state.users.find((function(t,s,n){return t.id===e})).name}},{key:"fetchUsers",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return t.setState({users:e})})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchPosts",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){return t.setState({posts:e})})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"openUserScreen",value:function(e){var t=this.state.users.find((function(t,s,n){return t.id===e})),s=Object(d.jsx)(g,{user:t});this.setCurrentView(s)}},{key:"setCurrentView",value:function(e){this.setState((function(t){return{current_view:e,history:t.history.concat(e)}}))}},{key:"goPreviousView",value:function(){if(1!==this.state.history.length){var e=this.state.history.length-2,t=this.state.history[e],s=this.state.history.slice(0,e+1);this.setState({current_view:t,history:s})}}},{key:"goUsers",value:function(){var e=Object(d.jsx)(C,{users:this.state.users,onNameClick:this.openUserScreen});this.setCurrentView(e)}},{key:"goPosts",value:function(){var e=Object(d.jsx)(v,{posts:this.state.posts,onAuthorClick:this.openUserScreen,getUserName:this.getUserName});this.setCurrentView(e)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(O,{backBtnClick:this.goPreviousView,onUsersClick:this.goUsers,onPostsClick:this.goPosts}),this.state.current_view]})}}]),s}(c.a.Component);s(32),s(33);i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(U,{})}),document.getElementById("root"))},8:function(e,t,s){}},[[34,1,2]]]);
//# sourceMappingURL=main.02ef0b8e.chunk.js.map