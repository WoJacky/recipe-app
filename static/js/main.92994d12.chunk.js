(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],[,,,function(e,t,a){e.exports={recipe:"recipe_recipe__1LbmJ",image:"recipe_image__26D2y"}},,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),i=a.n(r),o=(a(12),a(2)),s=a.n(o),l=a(6),u=a(1),m=a(3),p=a.n(m),f=function(e){return c.a.createElement("div",{className:p.a.recipe},c.a.createElement("h1",null,e.title),c.a.createElement("ol",null,e.ingredients.map((function(e){return c.a.createElement("li",null," ",e.text," ")}))),c.a.createElement("p",null," ",e.calories.toFixed()," kcal"),c.a.createElement("img",{className:p.a.image,src:e.image}))},h=(a(14),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),o=Object(u.a)(i,2),m=o[0],p=o[1],h=Object(n.useState)("chicken"),b=Object(u.a)(h,2),d=b[0],g=b[1];Object(n.useEffect)((function(){v()}),[d]);var v=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(d,"&app_id=").concat("ae9cacd7","&app_key=").concat("70aef20fca3f8e082a952405036ecafc"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits),console.log(a.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),g(m),p("")},className:"search-form"},c.a.createElement("input",{type:"text",className:"search-bar",value:m,onChange:function(e){p(e.target.value),console.log(m)}}),c.a.createElement("button",{type:"submit",className:"search-button"},"Search")),c.a.createElement("div",{className:"recipes"},a.map((function(e){return c.a.createElement(f,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[7,1,2]]]);
//# sourceMappingURL=main.92994d12.chunk.js.map