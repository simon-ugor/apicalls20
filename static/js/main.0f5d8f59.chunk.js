(this.webpackJsonpapicalls=this.webpackJsonpapicalls||[]).push([[0],{21:function(e,t,i){},22:function(e,t,i){},28:function(e,t,i){},29:function(e,t,i){},30:function(e,t,i){},31:function(e,t,i){"use strict";i.r(t);var c=i(1),a=i(0),n=i.n(a),s=i(14),r=i.n(s),l=(i(21),i(6)),j=(i(22),i(5));var o=function(e){function t(t){e.itemClick(t)}var i="borderto",a=e.items.map((function(e){return i+="p",Object(c.jsxs)("div",{id:i,className:"item_div",children:[Object(c.jsx)("img",{alt:e.item.name,src:e.item.images.icon,width:"70vw"}),Object(c.jsx)("nobr",{children:Object(c.jsxs)(j.b,{className:"item_link",id:e.itemId,onClick:t,to:"/FortniteApiCall/item",children:[e.item.name," - ",e.item.rarity]})})]},e.itemId)}));return Object(c.jsxs)("div",{className:"items_list_div",children:[Object(c.jsx)(j.b,{to:"/apicalls20/",children:Object(c.jsx)("h2",{className:"back",children:"\u21a9 Go Back"})}),Object(c.jsx)("h1",{className:"heading",children:"Items List"}),Object(c.jsx)("p",{className:"click_on",children:"Click on the name of item to learn more"}),a]})},m=i.p+"static/media/fortnite1.6bf3442c.png",b=i.p+"static/media/fortnite2.13ce957b.png";i(28);var d=function(e){function t(t){e.itemClick(t)}var i=e.filteredItems.map((function(e){return Object(c.jsx)(j.b,{onClick:t,to:"/FortniteApiCall/item",children:Object(c.jsx)("p",{id:e.itemId,className:"filtered",children:e.item.name})})}));return Object(c.jsxs)("div",{className:"body_div",children:[Object(c.jsx)("br",{}),Object(c.jsx)("h1",{className:"heading",children:"Fortnite Items API"}),Object(c.jsx)("input",{onChange:function(t){e.onChange(t)},className:"searchbox",placeholder:"Search new items",type:"search"}),Object(c.jsx)("div",{className:"filtered_div",children:i}),Object(c.jsx)("p",{className:"or",children:"or find all new items in"}),Object(c.jsx)(j.b,{className:"link",to:"/FortniteApiCall/itemsList",children:"Items List"}),Object(c.jsx)("img",{className:"ghostrider",alt:"ghostrider",src:m}),Object(c.jsx)("img",{className:"character",alt:"character",src:b})]})};i(29);var h=function(e){var t="";return"legendary"===e.rarity?t="yellow":"epic"===e.rarity?t="purple":"rare"===e.rarity?t="blue":"uncommon"===e.rarity?t="green":"common"===e.rarity&&(t="gray"),Object(c.jsxs)("div",{className:"item_details_div",children:[Object(c.jsx)(j.b,{to:"/FortniteApiCall/itemsList",children:Object(c.jsx)("h2",{className:"back",children:"\u21a9 Go Back"})}),Object(c.jsx)("h1",{className:"item_heading",children:e.name}),Object(c.jsx)("h2",{className:"item_desc",children:e.desc}),Object(c.jsxs)("nobr",{className:"item_rarity_type",children:["Rarity: ",Object(c.jsx)("nobr",{style:{color:t},children:e.rarity})]}),Object(c.jsxs)("nobr",{className:"item_rarity_type",children:["Type: ",e.type]}),Object(c.jsx)("br",{}),Object(c.jsx)("img",{className:"item_img",alt:"icon",src:e.imgSrc})]})};i(30);var O=function(){return Object(c.jsx)("div",{className:"loading_div",children:Object(c.jsx)("p",{className:"loading_p",children:"Loading..."})})},u=i(2);var p=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),i=t[0],n=t[1],s=Object(a.useState)([]),r=Object(l.a)(s,2),m=r[0],b=r[1],p=Object(a.useState)(""),x=Object(l.a)(p,2),f=x[0],g=x[1],v=Object(a.useState)(""),N=Object(l.a)(v,2),y=N[0],C=N[1],_=Object(a.useState)(""),k=Object(l.a)(_,2),S=k[0],I=k[1],F=Object(a.useState)(""),w=Object(l.a)(F,2),L=w[0],A=w[1],B=Object(a.useState)(""),P=Object(l.a)(B,2),T=P[0],E=P[1],G=Object(a.useState)(""),J=Object(l.a)(G,2),D=J[0],M=J[1];Object(a.useEffect)((function(){fetch("https://fortnite-api.theapinetwork.com/store/get").then((function(e){return e.json()})).then((function(e){n(!0),b(e.data)}))}),[]),console.log(m),console.log(f);var R=m.filter((function(e){return""!==f?e.item.name.toLowerCase().includes(f.toLowerCase()):""}));function q(e){var t=e.target.id;m.map((function(e){return t===e.itemId&&(C(e.item.name),I(e.item.description),A(e.item.rarity),E(e.item.type),M(e.item.images.icon)),e}))}return!0===i?Object(c.jsx)(j.a,{children:Object(c.jsxs)("div",{className:"app_div",children:[Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{exact:!0,path:"/apicalls20/",children:Object(c.jsx)(d,{itemClick:q,filteredItems:R,onChange:function(e){g(e.target.value)}})}),Object(c.jsx)(u.a,{exact:!0,path:"/FortniteApiCall/itemsList",children:Object(c.jsx)(o,{itemClick:q,items:m})}),Object(c.jsx)(u.a,{exact:!0,path:"/FortniteApiCall/item",children:Object(c.jsx)(h,{name:y,desc:S,rarity:L,type:T,imgSrc:D})})]}),Object(c.jsx)("a",{href:"https://simon-ugor.online/",children:Object(c.jsx)("button",{className:"btp-button",children:"Back to portfolio"})})]})}):Object(c.jsx)(O,{})},x=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,32)).then((function(t){var i=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,s=t.getTTFB;i(e),c(e),a(e),n(e),s(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),x()}},[[31,1,2]]]);
//# sourceMappingURL=main.0f5d8f59.chunk.js.map