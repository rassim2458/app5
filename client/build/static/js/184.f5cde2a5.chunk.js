"use strict";(self.webpackChunkchat=self.webpackChunkchat||[]).push([[184],{6522:function(e,t,n){var r=n(1413),o=(n(2791),n(1134)),a=n(184);t.Z=function(e){var t=e.children,n=e.onSubmit,i=e.methods;return(0,a.jsx)(o.RV,(0,r.Z)((0,r.Z)({},i),{},{children:(0,a.jsx)("form",{onSubmit:n,children:t})}))}},4499:function(e,t,n){n.d(t,{a:function(){return c}});n(6522);var r=n(1413),o=n(5987),a=n(1134),i=n(2287),s=n(184),l=["name","helperText"];function c(e){var t=e.name,n=e.helperText,c=(0,o.Z)(e,l),d=(0,a.Gc)().control;return(0,s.jsx)(a.Qr,{name:t,control:d,render:function(e){var t=e.field,o=e.fieldState.error;return(0,s.jsx)(i.Z,(0,r.Z)((0,r.Z)({},t),{},{fullWidth:!0,value:"number"===typeof t.value&&0===t.value?"":t.value,error:!!o,helperText:o?o.message:n},c))}})}},6184:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var r=n(4162),o=n(4565),a=n(6283),i=n(1087),s=n(2791),l=n(4165),c=(n(1413),n(5861)),d=n(885),u=n(4695),h=n(1134),m=n(6727),k=n(6522),p=n(8771),f=n(8254),j=n(3811),L=n(997),E=n(4499),v=n(3735),Z=n(697),g=n(184),x=function(){var e=(0,s.useState)(!1),t=(0,d.Z)(e,2),n=t[0],o=t[1],a=m.Ry().shape({firstName:m.Z_().required("First Name is required"),lastName:m.Z_().required("Last Name is required"),email:m.Z_().required("Email is required").email("Email must be a valid email address"),password:m.Z_().required("Password is required")}),i=(0,h.cI)({resolver:(0,u.X)(a),defaultValues:{firstName:"",lastName:"",email:"dulanjali@gmail.com",password:"dula@123"}}),x=(i.reset,i.setError,i.handleSubmit),M=i.formState,A=M.errors,W=(M.isSubmitting,M.isSubmitSuccessful,function(){var e=(0,c.Z)((0,l.Z)().mark((function e(t){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return(0,g.jsx)(k.Z,{methods:i,onSubmit:x(W),children:(0,g.jsxs)(r.Z,{spacing:3,children:[!!A.afterSubmit&&(0,g.jsx)(p.Z,{severity:"error",children:A.afterSubmit.message}),(0,g.jsxs)(r.Z,{direction:{xs:"column",sm:"row"},spacing:2,children:[(0,g.jsx)(E.a,{name:"firstName",label:"First Name"}),(0,g.jsx)(E.a,{name:"lastName",label:"Last Name"})]}),(0,g.jsx)(E.a,{name:"email",label:"Email address"}),(0,g.jsx)(E.a,{name:"password",label:"Password",type:n?"text":"password",InputProps:{endAdornment:(0,g.jsx)(f.Z,{children:(0,g.jsx)(j.Z,{onClick:function(){o(!n)},children:n?(0,g.jsx)(v.Z,{}):(0,g.jsx)(Z.Z,{})})})}}),(0,g.jsx)(L.Z,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",sx:{bgcolor:"text.primary",color:function(e){return"light"===e.palette.mode?"common.white":"grey.800"},"&:hover":{bgcolor:"text.primary",color:function(e){return"light"===e.palette.mode?"common.white":"grey.800"}}},children:"Create Account"})]})})},M=n(948),A=function(){return(0,g.jsxs)(r.Z,{spacing:2,sx:{mb:5,position:"relative"},children:[(0,g.jsx)(o.Z,{variant:"h4",children:"Get Started With WeChat"}),(0,g.jsxs)(r.Z,{direction:"row",spacing:.5,children:[(0,g.jsx)(o.Z,{variant:"body2",children:"Allready have an account?"}),(0,g.jsx)(a.Z,{component:i.rU,to:"/auth/login",variant:"subtitle2",children:"Sign in"})]}),(0,g.jsx)(x,{}),(0,g.jsxs)(o.Z,{component:"div",sx:{color:"text.secondary",mt:3,typography:"caption",textAlign:"center"},children:["By signining up, I agree to ",(0,g.jsx)(a.Z,{underline:"always",color:"text.primary",children:"Terms of service"})," and ",(0,g.jsx)(a.Z,{underline:"always",color:"text.primary",children:"Privacy policy"})]}),(0,g.jsx)(M.Z,{})]})}},948:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(1872),o=n(4162),a=n(3811),i=n(2791),s=n(2602),l=n(7120),c=new Map;c.set("bold",(function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,128h88a88.1,88.1,0,1,1-25.8-62.2",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))})),c.set("duotone",(function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,128h88a88.1,88.1,0,1,1-25.8-62.2",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))})),c.set("fill",(function(){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm0,184A80,80,0,1,1,184.6,71.4a8,8,0,0,1,0,11.3,7.9,7.9,0,0,1-11.3,0A64.1,64.1,0,1,0,191.5,136H128a8,8,0,0,1,0-16h72a8,8,0,0,1,8,8A80.1,80.1,0,0,1,128,208Z"}))})),c.set("light",(function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,128h88a88.1,88.1,0,1,1-25.8-62.2",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))})),c.set("thin",(function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,128h88a88.1,88.1,0,1,1-25.8-62.2",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))})),c.set("regular",(function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,128h88a88.1,88.1,0,1,1-25.8-62.2",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}));var d=function(e,t){return(0,s._)(e,t,c)},u=(0,i.forwardRef)((function(e,t){return i.createElement(l.Z,Object.assign({ref:t},e,{renderPath:d}))}));u.displayName="GoogleLogo";var h=u,m=new Map;m.set("bold",(function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M84,240a23.9,23.9,0,0,0,24-24V168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),i.createElement("path",{d:"M172,240a23.9,23.9,0,0,1-24-24V168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),i.createElement("path",{d:"M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),i.createElement("path",{d:"M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),i.createElement("path",{d:"M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))})),m.set("duotone",(function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z",opacity:"0.2"}),i.createElement("path",{d:"M84,240a23.9,23.9,0,0,0,24-24V168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("path",{d:"M172,240a23.9,23.9,0,0,1-24-24V168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("path",{d:"M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("path",{d:"M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("path",{d:"M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))})),m.set("fill",(function(){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,224a8,8,0,0,1-8,8,32.1,32.1,0,0,1-32-32v-8a16,16,0,0,0-16-16H156v40a16,16,0,0,0,16,16,8,8,0,0,1,0,16,32.1,32.1,0,0,1-32-32V176H116v40a32.1,32.1,0,0,1-32,32,8,8,0,0,1,0-16,16,16,0,0,0,16-16V176H88a16,16,0,0,0-16,16v8a32.1,32.1,0,0,1-32,32,8,8,0,0,1,0-16,16,16,0,0,0,16-16v-8a32.1,32.1,0,0,1,14.8-27A55.8,55.8,0,0,1,48,120v-8a58,58,0,0,1,7.7-28.3A59.9,59.9,0,0,1,61.1,36,7.8,7.8,0,0,1,68,32a59.7,59.7,0,0,1,48,24h24a59.7,59.7,0,0,1,48-24,7.8,7.8,0,0,1,6.9,4,59.9,59.9,0,0,1,5.4,47.7A58,58,0,0,1,208,112v8a55.8,55.8,0,0,1-22.8,45A32.1,32.1,0,0,1,200,192v8a16,16,0,0,0,16,16A8,8,0,0,1,224,224Z"}))})),m.set("light",(function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M84,240a23.9,23.9,0,0,0,24-24V168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),i.createElement("path",{d:"M172,240a23.9,23.9,0,0,1-24-24V168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),i.createElement("path",{d:"M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),i.createElement("path",{d:"M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),i.createElement("path",{d:"M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))})),m.set("thin",(function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M84,240a23.9,23.9,0,0,0,24-24V168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),i.createElement("path",{d:"M172,240a23.9,23.9,0,0,1-24-24V168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),i.createElement("path",{d:"M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),i.createElement("path",{d:"M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),i.createElement("path",{d:"M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))})),m.set("regular",(function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M84,240a23.9,23.9,0,0,0,24-24V168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("path",{d:"M172,240a23.9,23.9,0,0,1-24-24V168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("path",{d:"M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("path",{d:"M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("path",{d:"M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}));var k=function(e,t){return(0,s._)(e,t,m)},p=(0,i.forwardRef)((function(e,t){return i.createElement(l.Z,Object.assign({ref:t},e,{renderPath:k}))}));p.displayName="GithubLogo";var f=p,j=new Map;j.set("bold",(function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))})),j.set("duotone",(function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z",opacity:"0.2"}),i.createElement("path",{d:"M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))})),j.set("fill",(function(){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M245.7,77.7l-30.2,30.1C209.5,177.7,150.5,232,80,232c-14.5,0-26.5-2.3-35.6-6.8-7.3-3.7-10.3-7.6-11.1-8.8a8,8,0,0,1,3.9-11.9c.2-.1,23.8-9.1,39.1-26.4a108.6,108.6,0,0,1-24.7-24.4c-13.7-18.6-28.2-50.9-19.5-99.1a8.1,8.1,0,0,1,5.5-6.2,8,8,0,0,1,8.1,1.9c.3.4,33.6,33.2,74.3,43.8V88a48.3,48.3,0,0,1,48.6-48,48.2,48.2,0,0,1,41,24H240a8,8,0,0,1,7.4,4.9A8.4,8.4,0,0,1,245.7,77.7Z"}))})),j.set("light",(function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))})),j.set("thin",(function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))})),j.set("regular",(function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}));var L=function(e,t){return(0,s._)(e,t,j)},E=(0,i.forwardRef)((function(e,t){return i.createElement(l.Z,Object.assign({ref:t},e,{renderPath:L}))}));E.displayName="TwitterLogo";var v=E,Z=n(184),g=function(){return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(r.Z,{sx:{my:2.5,typography:"overline",color:"text.disabled","&::before, ::after":{borderTopStyle:"dashed"}},children:"OR"}),(0,Z.jsxs)(o.Z,{direction:"row",justifyContent:"center",spacing:2,children:[(0,Z.jsx)(a.Z,{children:(0,Z.jsx)(h,{color:"#DF3E30"})}),(0,Z.jsx)(a.Z,{color:"inherit",children:(0,Z.jsx)(f,{})}),(0,Z.jsx)(a.Z,{children:(0,Z.jsx)(v,{color:"#1C9CEA"})})]})]})}}}]);
//# sourceMappingURL=184.f5cde2a5.chunk.js.map