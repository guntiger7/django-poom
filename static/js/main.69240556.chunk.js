(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),s=n(4),a=n.n(s),o=(n(14),n(3)),i=n.n(o),u=n(5),p=n(6),h=n(7),d=n(9),f=n(8),j=n(0),l=function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(p.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={posts:[]},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=Object(u.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://http://3.36.114.241/api/");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,this.setState({posts:n}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,this,[[0,10]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(j.jsx)("div",{children:this.state.posts.map((function(t){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:t.title}),Object(j.jsx)("span",{children:t.content})]},t.id)}))})}}]),n}(r.Component),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),r(t),c(t),s(t),a(t)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root")),b()}},[[17,1,2]]]);
//# sourceMappingURL=main.69240556.chunk.js.map