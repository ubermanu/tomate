import{r as e,u as t,c as o,a}from"./vendor.f6ccf064.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const a=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,s)=>{const r=new URL(e,a);if(self[t].moduleMap[r])return o(self[t].moduleMap[r]);const i=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){s(new Error(`Failed to import: ${e}`)),n(l)},onload(){o(self[t].moduleMap[r]),n(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/tomate/assets/");const n=()=>{const[a,n]=e.useState(0),[s,r]=e.useState(0),[i,l]=e.useState(!1),[c]=t("/tomate/assets/484344__inspectorj__bike-bell-ding-single-01-01.275840bb.ogg"),m=e=>{clearInterval(a),r(e-1),l(!1);const t=setInterval((()=>(e=>{let t=0;r((e=>t=e-1)),t<=0&&(console.log("Time's up!"),clearInterval(e),u("It's time to chill for a bit!"),l(!0),c())})(t)),1e3);n(t)},u=e=>{"Notification"in window&&new Notification("🍅",{body:e})};return e.createElement("div",{className:"container has-text-centered has-text-light p-6"},e.createElement("h1",{className:o("title","is-1",i&&"App-Tomato-TimesUp")},e.createElement("span",{role:"img","aria-label":"Tomate"},"🍅")),e.createElement("div",{className:"buttons",style:{justifyContent:"center"}},e.createElement("button",{className:"button is-dark",onClick:()=>m(1500)},"25:00"),e.createElement("button",{className:"button is-dark",onClick:()=>m(2700)},"45:00")),s>0&&e.createElement("p",{className:"is-size-1 mt-2"},(d=s,Math.floor(d/60).toString().padStart(2,"0"))," : ",(e=>(e%60).toString().padStart(2,"0"))(s)));var d};"Notification"in window&&Notification.requestPermission(),a.render(e.createElement(e.StrictMode,null,e.createElement(n,null)),document.getElementById("root"));
