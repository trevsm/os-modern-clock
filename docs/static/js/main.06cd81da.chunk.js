(this["webpackJsonpnano-react-app"]=this["webpackJsonpnano-react-app"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),u=a.n(c),m=a(3);a(9);function s(e){var t=e.max,a=e.current;return r.a.createElement("div",{className:"column","data-id":a,style:{top:"".concat(-30*a,"px")}},Array(t+1).fill("").map((function(e,t){return r.a.createElement("div",{key:t,className:"number".concat(a===t.toString()?" active":"")},t)})))}function l(e){return("0"+e.toString()).slice(-2).split("")}function o(){var e=Object(n.useState)(new Date),t=Object(m.a)(e,2),a=t[0],c=t[1],u=l(a.getSeconds()),o=l(a.getMinutes()),i=l(a.getHours());return Object(n.useEffect)((function(){setInterval((function(){c(new Date)}),1e3)}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(s,{max:2,current:i[0]}),r.a.createElement(s,{max:9,current:i[1]}),r.a.createElement("p",{className:"spacer"}),r.a.createElement(s,{max:5,current:o[0]}),r.a.createElement(s,{max:9,current:o[1]}),r.a.createElement("p",{className:"spacer"}),r.a.createElement(s,{max:5,current:u[0]}),r.a.createElement(s,{max:9,current:u[1]}))}u.a.render(r.a.createElement(o,null),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.06cd81da.chunk.js.map