(this["webpackJsonpmy-store"]=this["webpackJsonpmy-store"]||[]).push([[0],{105:function(t,e,n){},106:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(11),o=n.n(a),i=n(13),s=n(53),u=n(71),l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_CART":return e.payload;default:return t}},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_PRODUCT_LIST":return e.payload;default:return t}},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_CATEGORIES":return e.payload;default:return t}},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_PRODUCT":return e.payload;default:return t}},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_CATEGORY":return e.payload;default:return t}},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_PAGE_NUM":return e.payload;default:return t}},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isCheckOut:!1,emptyCart:[],invoiceTotal:0},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_OUT":return e.payload;default:return t}},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_PRODUCT_FOR_MODAL":return e.payload;default:return t}},x=Object(s.b)({productList:p,product:d,categories:h,cartItems:l,selectedCategory:j,currentPageNum:f,checkOut:b,productForModal:O}),m=n(32),g=n(16),v=n(7),y=n.n(v),k=n(9),w={query:C,getById:function(t,e){return C(t).then((function(t){return t.find((function(t){return t.id===e}))}))},post:function(t,e){return e.id=N(),C(t).then((function(n){return n.unshift(e),T(t,n),e}))},remove:function(t,e){return C(t).then((function(n){var r=n.findIndex((function(t){return t.id===e}));n.splice(r,1),T(t,n)}))},saveToStorage:function(t,e){localStorage.setItem(t,JSON.stringify(e)||null)},loadFromStorage:function(t){var e=localStorage.getItem(t);return e?JSON.parse(e):void 0}};function C(t){var e=JSON.parse(localStorage.getItem(t))||[];return Promise.resolve(e)}function T(t,e){localStorage.setItem(t,JSON.stringify(e))}function N(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<t;r++)e+=n.charAt(Math.floor(Math.random()*n.length));return e}var E={query:function(){return S.apply(this,arguments)},queryByCategory:P,getCategories:function(){return _.apply(this,arguments)}};function S(){return(S=Object(k.a)(y.a.mark((function t(){var e,n,r,c,a=arguments;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:"",""!==e){t.next=13;break}return t.next=5,w.query("productList");case 5:if((r=t.sent)&&r.length){t.next=9;break}return console.log("getting data from API"),t.abrupt("return",fetch("https://fakestoreapi.com/products").then((function(t){return t.json()})).then((function(t){return w.saveToStorage("productList",t),t})));case 9:return console.log("getting data from local storage"),t.abrupt("return",I(r,n));case 13:return t.next=15,P(e);case 15:return c=t.sent,t.abrupt("return",I(c,n));case 17:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function I(t,e){switch(e){case"title":return t.sort((function(t,e){return t.title>e.title?1:t.title<e.title?-1:0}));case"price":return t.sort((function(t,e){return t.price-e.price}));default:return t}}function P(t){return fetch("https://fakestoreapi.com/products/category/".concat(t)).then((function(t){return t.json()})).then((function(t){return t}))}function _(){return(_=Object(k.a)(y.a.mark((function t(){var e;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.query("categories");case 2:if((e=t.sent)&&e.length){t.next=5;break}return t.abrupt("return",fetch("https://fakestoreapi.com/products/categories").then((function(t){return t.json()})).then((function(t){return w.saveToStorage("categories",t),t})));case 5:return t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var A={getCart:q,addToCart:function(t){return M.apply(this,arguments)},deleteCart:U,checkOut:function(t){return L.apply(this,arguments)},getProductById:function(t){return z.apply(this,arguments)}};function q(){return F.apply(this,arguments)}function F(){return(F=Object(k.a)(y.a.mark((function t(){var e;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.query("cartItems");case 2:return e=t.sent,t.abrupt("return",e||[]);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function M(){return(M=Object(k.a)(y.a.mark((function t(e){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q();case 2:if((n=t.sent)&&n.length){t.next=10;break}return e.qty=1,n.push(e),t.next=8,R(e);case 8:return w.saveToStorage("cartItems",n),t.abrupt("return",e);case 10:if(r=n.find((function(t){return t.id===e.id}))){t.next=18;break}return e.qty=1,n.push(e),t.next=16,R(e);case 16:t.next=22;break;case 18:return e.qty=r.qty+1,r.qty++,t.next=22,B(e);case 22:return w.saveToStorage("cartItems",n),t.abrupt("return",e);case 24:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function B(t){return G.apply(this,arguments)}function G(){return(G=Object(k.a)(y.a.mark((function t(e){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("https://fakestoreapi.com/carts/7",{method:"PUT",body:JSON.stringify({userId:1,date:"2019 - 12 - 10",products:[{productId:e.id,quantity:3}]})}).then((function(t){return t.json()})).then((function(t){return console.log(t)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(t){return D.apply(this,arguments)}function D(){return(D=Object(k.a)(y.a.mark((function t(e){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("https://fakestoreapi.com/carts/",{method:"POST",body:JSON.stringify({userId:1,date:"2021 - 06 - 12",products:[{productId:e.id,quantity:1}]})}).then((function(t){return t.json()})).then((function(t){return t})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(){return(L=Object(k.a)(y.a.mark((function t(e){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",{isCheckOut:e,emptyCart:[]});case 2:return n=!1,t.next=5,U();case 5:return r=t.sent,console.log("checkout done!"),n=!0,t.abrupt("return",{isCheckOut:n,emptyCart:r});case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function U(){return J.apply(this,arguments)}function J(){return(J=Object(k.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w.saveToStorage("cartItems",[]),t.abrupt("return",fetch("https://fakestoreapi.com/carts/6",{method:"DELETE"}).then((function(t){return t.json()})).then((function(t){return console.log("deleteCart",t),[]})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function z(){return(z=Object(k.a)(y.a.mark((function t(e){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e){t.next=2;break}return t.abrupt("return",{});case 2:return t.abrupt("return",fetch("https://fakestoreapi.com/products/".concat(e)).then((function(t){return t.json()})).then((function(t){return console.log("getProductById",t),t})));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var W=function(t,e){return function(){var n=Object(k.a)(y.a.mark((function n(r){var c;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E.query(t,e);case 3:c=n.sent,r({type:"GET_PRODUCT_LIST",payload:c}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Error with getProductList");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}()},$=function(t){return function(){var e=Object(k.a)(y.a.mark((function e(n){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.addToCart(t);case 3:r=e.sent,console.log("productAdded",r),n({type:"ADD_TO_CART",payload:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error with addToCart");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},Y=function(){return function(){var t=Object(k.a)(y.a.mark((function t(e){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A.getCart();case 3:n=t.sent,e({type:"GET_CART",payload:n}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Error with addToCart");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},H=function(t){return function(){var e=Object(k.a)(y.a.mark((function e(n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n({type:"SET_PAGE_NUM",payload:t})}catch(r){console.log("Error with setPageNum")}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},K=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){var n=Object(k.a)(y.a.mark((function n(r){var c,a,o;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,A.checkOut(t);case 3:c=n.sent,a=c.isCheckOut,o=c.emptyCart,r({type:"CHECK_OUT",payload:{isCheckOut:a,emptyCart:o,invoiceTotal:e}}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log("Error with checkOut");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}()},Q=function(t){return function(){var e=Object(k.a)(y.a.mark((function e(n){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.getProductById(t);case 3:r=e.sent,n({type:"GET_PRODUCT_FOR_MODAL",payload:r}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error with checkOut");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},V=n(144),X=n(157),Z=n(161),tt=n(160),et=n(156),nt=n(158),rt=n(159),ct=n(72),at=n.n(ct),ot=n(77),it=n(155),st=n(168),ut=n(167),lt=n(2),pt=Object(V.a)((function(t){return Object(st.a)({root:{"& > *":{marginTop:t.spacing(2),marginBottom:t.spacing(2)}}})})),ht=function(t){var e=t.productsLength,n=Object(i.b)(),r=Object(i.c)((function(t){return t.currentPageNum})),c=pt();return Object(lt.jsx)("div",{className:c.root,children:Object(lt.jsx)(ut.a,{page:r+1,count:Math.ceil(e/5),color:"primary",onChange:function(t,e){n(H(e-1))}})})},dt=n(170),jt=n(169),ft=n(149),bt=n(148),Ot=n(166),xt=Object(V.a)((function(t){return Object(st.a)({formControl:{marginTop:t.spacing(9),marginBottom:t.spacing(3),minWidth:120,cursor:"context-menu"},selectEmpty:{marginTop:t.spacing(2)}})}));function mt(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.categories}));Object(r.useEffect)((function(){t(function(){var t=Object(k.a)(y.a.mark((function t(e){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.getCategories();case 3:n=t.sent,e({type:"GET_CATEGORIES",payload:n}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Error with getCategories");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}())}),[]);var n=Object(i.c)((function(t){return t.selectedCategory})),c=xt();return Object(lt.jsx)("div",{children:Object(lt.jsxs)(bt.a,{className:c.formControl,children:[Object(lt.jsx)(dt.a,{id:"demo-simple-select-helper-label",children:"Category"}),e.length>0&&Object(lt.jsxs)(Ot.a,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:n,onChange:function(e){var n;t((n=e.target.value,function(){var t=Object(k.a)(y.a.mark((function t(e){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e({type:"SET_CATEGORY",payload:n})}catch(r){console.log("Error with setCategory")}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},children:[Object(lt.jsx)(jt.a,{value:"",children:Object(lt.jsx)("em",{children:"None"})}),e.map((function(t){return Object(lt.jsxs)(jt.a,{value:t,children:[t.charAt(0).toUpperCase()+t.slice(1)," "]},t)}))]}),Object(lt.jsx)(ft.a,{children:"Choose a Category you're interested in"})]})})}var gt=n(150),vt=n(153),yt=n(151),kt=n(154),wt=n(152),Ct=Object(V.a)({media:{height:140}}),Tt=function(t){var e=t.product,n=Object(i.b)();console.log("hey");Ct();var r=function(){var t=Object(k.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(Q(null));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=Object(k.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n($(e));case 2:n(Y());case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(lt.jsxs)(gt.a,{className:"modal-card",children:[Object(lt.jsx)("img",{className:"modal-img",src:e.image,alt:""}),Object(lt.jsxs)(yt.a,{children:[Object(lt.jsx)(wt.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.title}),Object(lt.jsx)(wt.a,{variant:"body2",color:"textSecondary",component:"p",children:e.description})]}),Object(lt.jsxs)(vt.a,{className:"modal-btn-container",children:[Object(lt.jsx)(kt.a,{size:"small",color:"primary",onClick:function(){return c()},children:"Add to Cart"}),Object(lt.jsx)(kt.a,{className:"close-modal-btn",size:"small",color:"primary",onClick:function(){return r()},children:"Close"})]})]})},Nt=Object(V.a)({table:{minWidth:700,backgroundColor:"#F9F9F9"}}),Et=function(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.selectedCategory})),n=Object(i.c)((function(t){return t.currentPageNum}));Object(r.useEffect)((function(){function n(){return(n=Object(k.a)(y.a.mark((function n(){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t(W(e));case 2:return n.next=4,t(H(0));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]);var c=Object(i.c)((function(t){return t.productList})),a=c.slice(5*n,5*n+5),o=Object(i.c)((function(t){return t.productForModal})),s=Nt(),u=function(){var e=Object(k.a)(y.a.mark((function e(n,r){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.stopPropagation(),e.next=3,t($(n));case 3:t(Y());case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var n=Object(k.a)(y.a.mark((function n(r){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t(W(e,r));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var e=Object(k.a)(y.a.mark((function e(n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("product",n),t(Q(n.id)),console.log("productForModal",o);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(lt.jsxs)(it.a,{className:"main-content-container",fixed:!0,children:[Object(lt.jsx)(mt,{}),o&&o.id&&Object(lt.jsx)(Tt,{product:o}),a&&a.length>0&&Object(lt.jsx)(et.a,{component:ot.a,children:Object(lt.jsxs)(X.a,{className:s.table,"aria-label":"simple table",children:[Object(lt.jsx)(nt.a,{children:Object(lt.jsxs)(rt.a,{className:"table-header",children:[Object(lt.jsx)(tt.a,{onClick:function(){return l("title")},children:"Product title"}),Object(lt.jsx)(tt.a,{onClick:function(){return l("price")},align:"right",children:"Price ($)"}),Object(lt.jsx)(tt.a,{align:"center",children:"Image"}),Object(lt.jsx)(tt.a,{align:"right",children:"Add to cart"})]})}),Object(lt.jsx)(Z.a,{children:a.map((function(t){return Object(lt.jsxs)(rt.a,{onClick:function(){return p(t)},className:"table-content",children:[Object(lt.jsx)(tt.a,{component:"th",scope:"row",children:t.title}),Object(lt.jsx)(tt.a,{align:"center",children:t.price}),Object(lt.jsx)(tt.a,{align:"center",children:Object(lt.jsx)("img",{className:"product-img",src:t.image,alt:""})}),Object(lt.jsx)(tt.a,{align:"center",children:Object(lt.jsx)(at.a,{className:"add-to-cart-icon",onClick:function(e){return u(t,e)}})})]},t.id)}))})]})}),Object(lt.jsx)(ht,{productsLength:c.length})]})},St=Object(V.a)({root:{maxWidth:500,margin:"24px auto",textAlign:"center",padding:"20px",backgroundColor:"#F9F9F9"},title:{fontSize:20}}),It=function(t){var e=t.invoiceTotalForMsg,n=St();return Object(lt.jsx)(gt.a,{className:n.root,children:Object(lt.jsxs)(yt.a,{children:[Object(lt.jsx)(wt.a,{className:n.title,color:"textSecondary",gutterBottom:!0,children:"Checkout completed successfully!"}),Object(lt.jsxs)(wt.a,{variant:"h5",component:"h2",children:["Payment of $",e," recieved"]}),Object(lt.jsxs)(wt.a,{variant:"body2",component:"pre",style:{marginTop:"16px"},children:[Object(lt.jsx)("p",{children:"Your items are due to arrive within the next 7 business days"}),Object(lt.jsx)("p",{children:"Feel free to contact us for any questions or issues At:"}),Object(lt.jsx)("a",{className:"contact-link",href:"my-store@react.redux",children:"my-store@react.redux"})]})]})})},Pt=Object(V.a)((function(t){return Object(st.a)({table:{minWidth:700,marginTop:t.spacing(3),marginBottom:t.spacing(3),cursor:"context-menu"}})}));function _t(t){return"".concat(t.toFixed(2))}var At=function(){var t,e=Object(i.b)(),n=Object(i.c)((function(t){return t.cartItems}));Object(r.useEffect)((function(){e(Y())}),[]);var c=function(t){if(t&&t.length)return t.map((function(t){return t.price*t.qty})).reduce((function(t,e){return t+e}),0)}(n)||0,a=.17*c,o=a+c,s=Pt();t=Object(i.c)((function(t){return t.checkOut})).isCheckOut;var u=Object(i.c)((function(t){return t.checkOut})).invoiceTotal.toFixed(2),l=function(){var t=Object(k.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(K(!0,o));case 2:return t.next=4,e(Y());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(lt.jsxs)(it.a,{fixed:!0,children:[Object(lt.jsx)(m.b,{to:"/",children:Object(lt.jsx)(kt.a,{className:"back-to-prod-list-btn",variant:"contained",color:"primary",children:"Back to Products list"})}),n.length>0&&Object(lt.jsxs)(et.a,{className:s.table,component:ot.a,children:[Object(lt.jsxs)(X.a,{"aria-label":"spanning table",children:[Object(lt.jsx)(nt.a,{children:Object(lt.jsxs)(rt.a,{children:[Object(lt.jsx)(tt.a,{children:"Product title"}),Object(lt.jsx)(tt.a,{children:"Price ($)"}),Object(lt.jsx)(tt.a,{align:"center",children:"Image"}),Object(lt.jsx)(tt.a,{children:"Qty."})]})}),Object(lt.jsxs)(Z.a,{children:[n.map((function(t){return Object(lt.jsxs)(rt.a,{children:[Object(lt.jsx)(tt.a,{children:t.title}),Object(lt.jsx)(tt.a,{children:t.price}),Object(lt.jsx)(tt.a,{align:"center",children:Object(lt.jsx)("img",{className:"cart-item-img",src:t.image,alt:""})}),Object(lt.jsx)(tt.a,{children:t.qty})]},t.id)})),Object(lt.jsxs)(rt.a,{children:[Object(lt.jsx)(tt.a,{rowSpan:3}),Object(lt.jsx)(tt.a,{colSpan:2,children:"Subtotal"}),Object(lt.jsxs)(tt.a,{className:"cart-price",align:"right",children:["$",_t(c)]})]}),Object(lt.jsxs)(rt.a,{children:[Object(lt.jsx)(tt.a,{children:"Tax"}),Object(lt.jsx)(tt.a,{align:"right",children:"".concat(17..toFixed(0)," %")}),Object(lt.jsxs)(tt.a,{className:"cart-price",align:"right",children:["$",_t(a)]})]}),Object(lt.jsxs)(rt.a,{children:[Object(lt.jsx)(tt.a,{colSpan:2,children:"Total"}),Object(lt.jsxs)(tt.a,{className:"cart-price",align:"right",children:["$",_t(o)]})]})]})]}),Object(lt.jsx)(kt.a,{className:"btn btn-check-out",variant:"contained",color:"primary",onClick:function(){return l()},children:"Check Out"})]}),t&&Object(lt.jsx)(It,{invoiceTotalForMsg:u})]})},qt=n(68),Ft=n(61),Mt=n(164),Bt=n(165),Gt=n(162),Rt=n(163),Dt=n(66),Lt=n.n(Dt),Ut=n(75),Jt=n(73),zt=n.n(Jt),Wt=n(67),$t=n.n(Wt),Yt=n(74),Ht=n.n(Yt),Kt=Object(V.a)((function(t){return Object(st.a)({grow:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:Object(Ft.a)({display:"none"},t.breakpoints.up("sm"),{display:"block"}),inputRoot:{color:"inherit"},sectionDesktop:Object(Ft.a)({display:"none"},t.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(Ft.a)({display:"flex"},t.breakpoints.up("md"),{display:"none"})})}));function Qt(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.cartItems}));Object(r.useEffect)((function(){t(Y())}),[]);var n=Kt(),a=c.a.useState(null),o=Object(qt.a)(a,2),s=o[0],u=o[1],l=c.a.useState(null),p=Object(qt.a)(l,2),h=p[0],d=p[1],j=Boolean(s),f=Boolean(h),b=function(t){u(t.currentTarget)},O=function(){d(null)},x=function(){u(null),O()},g=function(){return e.reduce((function(t,e){return t+e.qty}),0)},v="primary-search-account-menu",y=Object(lt.jsxs)(Ut.a,{anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},id:v,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:j,onClose:x,children:[Object(lt.jsx)(jt.a,{onClick:x,children:"Profile"}),Object(lt.jsx)(jt.a,{onClick:x,children:"My account"})]}),k="primary-search-account-menu-mobile",w=Object(lt.jsxs)(Ut.a,{anchorEl:h,anchorOrigin:{vertical:"top",horizontal:"right"},id:k,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:f,onClose:O,children:[Object(lt.jsx)(m.b,{className:"link",to:"/cart",children:Object(lt.jsxs)(jt.a,{children:[Object(lt.jsx)(Gt.a,{"aria-label":"show new notifications",color:"inherit",children:Object(lt.jsx)(Rt.a,{badgeContent:g(),color:"secondary",children:Object(lt.jsx)(Lt.a,{})})}),Object(lt.jsx)("p",{children:"Cart"})]})}),Object(lt.jsxs)(jt.a,{onClick:b,children:[Object(lt.jsx)(Gt.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(lt.jsx)($t.a,{})}),Object(lt.jsx)("p",{children:"Profile"})]})]});return Object(lt.jsxs)("div",{className:n.grow,children:[Object(lt.jsx)(Mt.a,{className:"app-header",position:"static",children:Object(lt.jsxs)(Bt.a,{children:[Object(lt.jsx)(Gt.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"open drawer",children:Object(lt.jsx)(zt.a,{})}),Object(lt.jsx)(wt.a,{className:n.title,variant:"h6",noWrap:!0,children:Object(lt.jsx)(m.b,{to:"/",onClick:function(){return t(K(!1))},children:"Products"})}),Object(lt.jsx)("div",{className:n.grow}),Object(lt.jsxs)("div",{className:n.sectionDesktop,children:[Object(lt.jsx)(Gt.a,{"aria-label":"show 17 new notifications",color:"inherit",children:Object(lt.jsx)(m.b,{className:"link",to:"/cart",children:Object(lt.jsx)(Rt.a,{badgeContent:g(),color:"secondary",children:Object(lt.jsx)(Lt.a,{})})})}),Object(lt.jsx)(Gt.a,{edge:"end","aria-label":"account of current user","aria-controls":v,"aria-haspopup":"true",onClick:b,color:"inherit",children:Object(lt.jsx)($t.a,{})})]}),Object(lt.jsx)("div",{className:n.sectionMobile,children:Object(lt.jsx)(Gt.a,{"aria-label":"show more","aria-controls":k,"aria-haspopup":"true",onClick:function(t){d(t.currentTarget)},color:"inherit",children:Object(lt.jsx)(Ht.a,{})})})]})}),w,y]})}n(105);var Vt=function(){return Object(lt.jsx)("div",{className:"App",children:Object(lt.jsxs)(m.a,{children:[Object(lt.jsx)(Qt,{}),Object(lt.jsx)(g.a,{component:At,path:"/cart"}),Object(lt.jsx)(g.a,{component:Et,exact:!0,path:"/"})]})})},Xt=Object(s.c)(x,Object(s.a)(u.a));o.a.render(Object(lt.jsx)(i.a,{store:Xt,children:Object(lt.jsx)(Vt,{})}),document.getElementById("root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.8ebfd6ff.chunk.js.map