(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[135],{6292:function(e,r,n){"use strict";n.r(r);var s=n(5893),a=n(809),t=n.n(a),u=n(2447),c=n(9227),i=n(7294),d=n(1163),l=n(1664),o=n(2174);r.default=function(){var e=(0,o.a)(),r=(0,c.Z)(e,2),n=r[0],a=r[1].mutate,p=(0,i.useState)(""),x=p[0],m=p[1],h=function(){var e=(0,u.Z)(t().mark((function e(r){var n,s,u;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),(n={username:r.currentTarget.username.value,password:r.currentTarget.password.value,name:r.currentTarget.name.value}).password===r.currentTarget.rpassword.value){e.next=5;break}return m("The passwords don't match"),e.abrupt("return");case 5:return e.next=7,fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 7:if(201!==(s=e.sent).status){e.next=15;break}return e.next=11,s.json();case 11:u=e.sent,a(u),e.next=20;break;case 15:return e.t0=m,e.next=18,s.text();case 18:e.t1=e.sent,(0,e.t0)(e.t1);case 20:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){n&&d.default.push("/admin")}),[n]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:"Sign up to Example"}),x&&(0,s.jsx)("p",{className:"error",children:x}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsxs)("form",{className:"flex flex-col",onSubmit:h,children:[(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{children:"Username"}),(0,s.jsx)("input",{className:"border-2 border-gray-500 ml-auto",type:"text",name:"username",required:!0})]}),(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{children:"Password"}),(0,s.jsx)("input",{className:"border-2 border-gray-500",type:"password",name:"password",required:!0})]}),(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{children:"Repeat password"}),(0,s.jsx)("input",{className:"border-2 border-gray-500",type:"password",name:"rpassword",required:!0})]}),(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{children:"Name"}),(0,s.jsx)("input",{className:"border-2 border-gray-500",type:"text",name:"name",required:!0})]}),(0,s.jsxs)("div",{className:"submit",children:[(0,s.jsx)("button",{type:"submit",children:"Sign up"}),(0,s.jsx)(l.default,{href:"/login",children:(0,s.jsx)("a",{children:"I already have an account"})})]})]})})]})}},1566:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/signup",function(){return n(6292)}])},1163:function(e,r,n){e.exports=n(4651)}},function(e){e.O(0,[774,888,179],(function(){return r=1566,e(e.s=r);var r}));var r=e.O();_N_E=r}]);