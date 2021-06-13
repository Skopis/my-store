(this["webpackJsonpmy-store"]=this["webpackJsonpmy-store"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(9),i=n.n(a),o=n(17),s=n(53),u=n(70),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CART":return t.payload;default:return e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCT_LIST":return t.payload;default:return e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CATEGORIES":return t.payload;default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCT":return t.payload;default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CATEGORY":return t.payload;default:return e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE_NUM":return t.payload;default:return e}},f=Object(s.b)({productList:j,product:d,categories:h,cartItems:l,selectedCategory:p,currentPageNum:b}),O=n(31),g=n(14),x=n(11),m=n.n(x),v=n(20),y={query:w,getById:function(e,t){return w(e).then((function(e){return e.find((function(e){return e.id===t}))}))},post:function(e,t){return t.id=k(),w(e).then((function(n){return n.unshift(t),C(e,n),t}))},remove:function(e,t){return w(e).then((function(n){var r=n.findIndex((function(e){return e.id===t}));n.splice(r,1),C(e,n)}))},saveToStorage:function(e,t){localStorage.setItem(e,JSON.stringify(t)||null)},loadFromStorage:function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):void 0}};function w(e){var t=JSON.parse(localStorage.getItem(e))||[];return Promise.resolve(t)}function C(e,t){localStorage.setItem(e,JSON.stringify(t))}function k(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}var T={query:function(){return E.apply(this,arguments)},queryByCategory:N,getCategories:function(){return S.apply(this,arguments)}};function E(){return(E=Object(v.a)(m.a.mark((function e(){var t,n,r=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==(t=r.length>0&&void 0!==r[0]?r[0]:"")){e.next=12;break}return e.next=4,y.query("productList");case 4:if((n=e.sent)&&n.length){e.next=8;break}return console.log("getting data from API"),e.abrupt("return",fetch("https://fakestoreapi.com/products").then((function(e){return e.json()})).then((function(e){return y.saveToStorage("productList",e),e})));case 8:return console.log("getting data from local storage"),e.abrupt("return",n);case 12:return e.abrupt("return",N(t));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return fetch("https://fakestoreapi.com/products/category/".concat(e)).then((function(e){return e.json()})).then((function(e){return e}))}function S(){return(S=Object(v.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.query("categories");case 2:return(t=e.sent)&&t.length||fetch("https://fakestoreapi.com/products/categories").then((function(e){return e.json()})).then((function(e){return y.saveToStorage("categories",e),e})),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I={getCart:P,addToCart:function(e){return A.apply(this,arguments)},deleteCart:function(){return G.apply(this,arguments)}};function P(){return _.apply(this,arguments)}function _(){return(_=Object(v.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.query("cartItems");case 2:return t=e.sent,e.abrupt("return",t||[]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=Object(v.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:return n=e.sent,t.qty=1,n.push(t),y.saveToStorage("cartItems",n),e.abrupt("return",fetch("https://fakestoreapi.com/carts/",{method:"POST",body:JSON.stringify({userId:1,date:"2021 - 06 - 12",products:[{productId:t.id,quantity:1}]})}).then((function(e){return e.json()})).then((function(e){return e})));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=Object(v.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://fakestoreapi.com/carts/6",{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){return console.log("deleteCart",e),e}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.getCart();case 3:n=e.sent,t({type:"GET_CART",payload:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error with addToCart");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},B=n(141),L=n(149),M=n(153),q=n(152),D=n(148),J=n(150),U=n(151),z=n(71),W=n.n(z),F=n(102),Y=n(147),Q=n(162),H=n(161),K=n(2),V=Object(B.a)((function(e){return Object(Q.a)({root:{"& > *":{marginTop:e.spacing(2)}}})})),X=function(e){var t=e.productsLength,n=Object(o.b)(),r=V();return Object(K.jsx)("div",{className:r.root,children:Object(K.jsx)(H.a,{count:Math.ceil(t/5),color:"primary",onChange:function(e,t){var r;n((r=t-1,function(){var e=Object(v.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t({type:"SET_PAGE_NUM",payload:r})}catch(n){console.log("Error with setPageNum")}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}})})},Z=n(164),$=n(163),ee=n(146),te=n(145),ne=n(160),re=Object(B.a)((function(e){return Object(Q.a)({formControl:{marginTop:e.spacing(3),marginBottom:e.spacing(3),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}})}));function ce(){var e=Object(o.b)();Object(r.useEffect)((function(){e(function(){var e=Object(v.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.getCategories();case 3:n=e.sent,t({type:"GET_CATEGORIES",payload:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error with getCategories");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var t=Object(o.c)((function(e){return e.categories})),n=Object(o.c)((function(e){return e.selectedCategory})),c=re();return Object(K.jsx)("div",{children:t&&t.length&&Object(K.jsxs)(te.a,{className:c.formControl,children:[Object(K.jsx)(Z.a,{id:"demo-simple-select-helper-label",children:"Category"}),Object(K.jsxs)(ne.a,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:n,onChange:function(t){var n;e((n=t.target.value,function(){var e=Object(v.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t({type:"SET_CATEGORY",payload:n})}catch(r){console.log("Error with setCategory")}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(K.jsx)($.a,{value:"",children:Object(K.jsx)("em",{children:"None"})}),t.map((function(e){return Object(K.jsxs)($.a,{value:e,children:[e," "]},e)}))]}),Object(K.jsx)(ee.a,{children:"Choose a Category you're interested in"})]})})}var ae=Object(B.a)({table:{minWidth:700}}),ie=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.selectedCategory})),n=Object(o.c)((function(e){return e.currentPageNum}));Object(r.useEffect)((function(){e(function(e){return function(){var t=Object(v.a)(m.a.mark((function t(n){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.query(e);case 3:r=t.sent,n({type:"GET_PRODUCT_LIST",payload:r}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Error with getProductList");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[t]);var c=Object(o.c)((function(e){return e.productList})),a=c.slice(5*n,5*n+5),i=ae();return Object(K.jsxs)(Y.a,{fixed:!0,children:[Object(K.jsx)(ce,{}),a&&a.length&&Object(K.jsx)(D.a,{component:F.a,children:Object(K.jsxs)(L.a,{className:i.table,"aria-label":"simple table",children:[Object(K.jsx)(J.a,{children:Object(K.jsxs)(U.a,{children:[Object(K.jsx)(q.a,{children:"Product title"}),Object(K.jsx)(q.a,{align:"right",children:"Price ($)"}),Object(K.jsx)(q.a,{align:"center",children:"Image"}),Object(K.jsx)(q.a,{align:"right",children:"Add to cart"})]})}),Object(K.jsx)(M.a,{children:a.map((function(t){return Object(K.jsxs)(U.a,{children:[Object(K.jsx)(q.a,{component:"th",scope:"row",children:t.title}),Object(K.jsx)(q.a,{align:"center",children:t.price}),Object(K.jsx)(q.a,{align:"center",children:Object(K.jsx)("img",{className:"product-img",src:t.image,alt:""})}),Object(K.jsx)(q.a,{align:"center",children:Object(K.jsx)(W.a,{onClick:function(){return e(function(e){return function(){var t=Object(v.a)(m.a.mark((function t(n){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I.addToCart(e);case 3:r=t.sent,n({type:"ADD_TO_CART",payload:r}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Error with addToCart");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(t))}})})]},t.id)}))})]})}),Object(K.jsx)(X,{productsLength:c.length})]})},oe=n(154),se=Object(B.a)((function(e){return Object(Q.a)({table:{minWidth:700,marginTop:e.spacing(3),marginBottom:e.spacing(3)}})}));function ue(e){return"".concat(e.toFixed(2))}var le=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.cartItems}));Object(r.useEffect)((function(){e(R())}),[]);var n=t.map((function(e){return e.price})).reduce((function(e,t){return e+t}),0),c=.17*n,a=c+n,i=se();return Object(K.jsxs)(Y.a,{fixed:!0,children:[Object(K.jsx)(O.b,{to:"/",children:Object(K.jsx)(oe.a,{className:"btn",variant:"contained",color:"primary",children:"Back to Products list"})}),t&&t.length&&Object(K.jsxs)(D.a,{className:i.table,component:F.a,children:[Object(K.jsxs)(L.a,{"aria-label":"spanning table",children:[Object(K.jsx)(J.a,{children:Object(K.jsxs)(U.a,{children:[Object(K.jsx)(q.a,{children:"Product title"}),Object(K.jsx)(q.a,{children:"Price"}),Object(K.jsx)(q.a,{align:"center",children:"Image"}),Object(K.jsx)(q.a,{children:"Qty."})]})}),Object(K.jsxs)(M.a,{children:[t.map((function(e){return Object(K.jsxs)(U.a,{children:[Object(K.jsx)(q.a,{children:e.title}),Object(K.jsx)(q.a,{children:e.price}),Object(K.jsx)(q.a,{align:"center",children:Object(K.jsx)("img",{className:"cart-item-img",src:e.image,alt:""})}),Object(K.jsx)(q.a,{children:"1"})]},e.id)})),Object(K.jsxs)(U.a,{children:[Object(K.jsx)(q.a,{rowSpan:3}),Object(K.jsx)(q.a,{colSpan:2,children:"Subtotal"}),Object(K.jsx)(q.a,{className:"cart-price",align:"right",children:ue(n)})]}),Object(K.jsxs)(U.a,{children:[Object(K.jsx)(q.a,{children:"Tax"}),Object(K.jsx)(q.a,{align:"right",children:"".concat(17..toFixed(0)," %")}),Object(K.jsx)(q.a,{className:"cart-price",align:"right",children:ue(c)})]}),Object(K.jsxs)(U.a,{children:[Object(K.jsx)(q.a,{colSpan:2,children:"Total"}),Object(K.jsx)(q.a,{className:"cart-price",align:"right",children:ue(a)})]})]})]}),Object(K.jsx)(oe.a,{className:"btn btn-check-out",variant:"contained",color:"primary",children:"Check Out"})]})]})},je=n(68),he=n(60),de=n(157),pe=n(158),be=n(155),fe=n(159),Oe=n(156),ge=n(66),xe=n.n(ge),me=n(74),ve=n(72),ye=n.n(ve),we=n(67),Ce=n.n(we),ke=n(73),Te=n.n(ke),Ee=Object(B.a)((function(e){return Object(Q.a)({grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(he.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),inputRoot:{color:"inherit"},sectionDesktop:Object(he.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(he.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})})}));function Ne(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.cartItems}));Object(r.useEffect)((function(){e(R())}),[]);var n=Ee(),a=c.a.useState(null),i=Object(je.a)(a,2),s=i[0],u=i[1],l=c.a.useState(null),j=Object(je.a)(l,2),h=j[0],d=j[1],p=Boolean(s),b=Boolean(h),f=function(e){u(e.currentTarget)},g=function(){d(null)},x=function(){u(null),g()},m="primary-search-account-menu",v=Object(K.jsxs)(me.a,{anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},id:m,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:p,onClose:x,children:[Object(K.jsx)($.a,{onClick:x,children:"Profile"}),Object(K.jsx)($.a,{onClick:x,children:"My account"})]}),y="primary-search-account-menu-mobile",w=Object(K.jsxs)(me.a,{anchorEl:h,anchorOrigin:{vertical:"top",horizontal:"right"},id:y,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:b,onClose:g,children:[Object(K.jsx)(O.b,{className:"link",to:"/cart",children:Object(K.jsxs)($.a,{children:[Object(K.jsx)(be.a,{"aria-label":"show new notifications",color:"inherit",children:Object(K.jsx)(Oe.a,{badgeContent:t.length,color:"secondary",children:Object(K.jsx)(xe.a,{})})}),Object(K.jsx)("p",{children:"Cart"})]})}),Object(K.jsxs)($.a,{onClick:f,children:[Object(K.jsx)(be.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(K.jsx)(Ce.a,{})}),Object(K.jsx)("p",{children:"Profile"})]})]});return Object(K.jsxs)("div",{className:n.grow,children:[Object(K.jsx)(de.a,{position:"static",children:Object(K.jsxs)(pe.a,{children:[Object(K.jsx)(be.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"open drawer",children:Object(K.jsx)(ye.a,{})}),Object(K.jsx)(fe.a,{className:n.title,variant:"h6",noWrap:!0,children:Object(K.jsx)(O.b,{to:"/",children:"Products"})}),Object(K.jsx)("div",{className:n.grow}),Object(K.jsxs)("div",{className:n.sectionDesktop,children:[Object(K.jsx)(be.a,{"aria-label":"show 17 new notifications",color:"inherit",children:Object(K.jsx)(O.b,{className:"link",to:"/cart",children:Object(K.jsx)(Oe.a,{badgeContent:t.length,color:"secondary",children:Object(K.jsx)(xe.a,{})})})}),Object(K.jsx)(be.a,{edge:"end","aria-label":"account of current user","aria-controls":m,"aria-haspopup":"true",onClick:f,color:"inherit",children:Object(K.jsx)(Ce.a,{})})]}),Object(K.jsx)("div",{className:n.sectionMobile,children:Object(K.jsx)(be.a,{"aria-label":"show more","aria-controls":y,"aria-haspopup":"true",onClick:function(e){d(e.currentTarget)},color:"inherit",children:Object(K.jsx)(Te.a,{})})})]})}),w,v]})}n(100);var Se=function(){return Object(K.jsx)("div",{className:"App",children:Object(K.jsxs)(O.a,{children:[Object(K.jsx)(Ne,{}),Object(K.jsx)(g.a,{component:le,path:"/cart"}),Object(K.jsx)(g.a,{component:ie,exact:!0,path:"/"})]})})},Ie=Object(s.c)(f,Object(s.a)(u.a));i.a.render(Object(K.jsx)(o.a,{store:Ie,children:Object(K.jsx)(Se,{})}),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.9d868acc.chunk.js.map