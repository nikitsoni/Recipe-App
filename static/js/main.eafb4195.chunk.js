(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={recipe:"Recipes_recipe__2eNRm",image:"Recipes_image__2dIl5",list:"Recipes_list__3apei",calories:"Recipes_calories__30D7M"}},,,,,,function(e,t,a){e.exports=a(16)},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),i=a.n(r),s=(a(13),a(3)),o=a.n(s),l=a(6),m=a(2),u=a(1),p=a.n(u),f=function(e){var t=e.image,a=e.title,n=e.calories,r=e.ingredients;return c.a.createElement("div",{className:p.a.recipe},c.a.createElement("h1",null,a),c.a.createElement("ol",null,c.a.createElement("h3",null,"Ingredients:"),r.map(function(e){return c.a.createElement("li",{className:p.a.list},e.text)})),c.a.createElement("p",{className:p.a.calories},"Calories: ",n),c.a.createElement("img",{className:p.a.image,src:t,alt:"Dish"}))},h=(a(15),function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),s=Object(m.a)(i,2),u=s[0],p=s[1],h=Object(n.useState)("chicken"),b=Object(m.a)(h,2),d=b[0],g=b[1];Object(n.useEffect)(function(){v()},[d]);var v=function(){var e=Object(l.a)(o.a.mark(function e(){var t,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(d,"&app_id=").concat("b709b8ec","&app_key=").concat("fc673c19a405d85c0f2b3e2a35b23c29"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Recipes!"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),g(u),p("")},className:"search-form"},c.a.createElement("input",{className:"search-bar",type:"text",value:u,onChange:function(e){p(e.target.value)}}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search")),c.a.createElement("div",{className:"recipes"},a.map(function(e){return c.a.createElement(f,{key:e.recipe.label,title:e.recipe.label,ingredients:e.recipe.ingredients,image:e.recipe.image,calories:e.recipe.calories})})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[7,1,2]]]);
//# sourceMappingURL=main.eafb4195.chunk.js.map