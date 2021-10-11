(()=>{"use strict";var t={192:(t,e,o)=>{o.d(e,{Z:()=>c});var n=o(81),r=o.n(n),a=o(645),i=o.n(a)()(r());i.push([t.id,'*{box-sizing:border-box;margin:0}body{background:#dfe7fd;background:radial-gradient(circle, #dfe7fd 0%, #cddafd 100%);height:100vh;width:100vw;font-family:"Noto Sans Display",sans-serif;font-weight:200;background-size:cover}body #error{color:red;text-align:center;font-weight:400}.weather{position:absolute;top:20%;bottom:30%;right:5%;left:5%;background-color:rgba(100,100,100,.8);color:#fff;border-radius:10px;padding:20px}.weather .icon img{display:block;margin:auto}.weather .data{text-align:center}.weather .data p{margin-bottom:5px;font-size:1.2em}.weather .degrees{text-align:center;font-size:3em;font-weight:400}.input-container{height:50px;width:100%;padding:5%}input[type=text]{padding:2px;display:block;height:40px;font-size:20px;margin:auto;background-color:#fff;border:none;border-bottom:2px solid #008b8b;color:gray}input[type=text]:focus-visible{outline:none}footer{position:absolute;bottom:0;right:0;left:0;padding:3%;display:grid;justify-content:center;align-items:center}footer a{text-decoration:none;color:#000}.switch{width:50px;height:20px;background-color:#fff;float:left;border-radius:100px;margin:20px 10px;position:relative;cursor:pointer;padding:0 3px}.switch .fahr{float:right}.switch .switcher{transition:all 250ms ease-in-out;width:18px;height:18px;background-color:#000;border-radius:50%;position:absolute;top:1px;left:1px}.switch .switcher.animate{transform:translateX(30px)}@media only screen and (min-width: 976px){.weather{right:25%;left:25%;display:flex;align-items:center}.weather .icon,.weather .data,.weather .degrees{width:33.3333333333%;float:left}.switch{position:fixed;top:25%;left:30%;z-index:99}input[type=text]{width:80%}}',""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",n=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),n&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),n&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,n,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<t.length;d++){var u=[].concat(t[d]);n&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),o&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=o):u[2]=o),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function o(t){for(var o=-1,n=0;n<e.length;n++)if(e[n].identifier===t){o=n;break}return o}function n(t,n){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],d=n.base?s[0]+n.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=o(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,n);n.byIndex=c,e.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function r(t,e){var o=e.domAPI(e);return o.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;o.update(t=e)}else o.remove()}}t.exports=function(t,r){var a=n(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=o(a[i]);e[c].references--}for(var s=n(t,r),d=0;d<a.length;d++){var u=o(a[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},569:t=>{var e={};t.exports=function(t,o){var n=function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,o)=>{t.exports=function(t){var e=o.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(o){!function(t,e,o){var n="";o.supports&&(n+="@supports (".concat(o.supports,") {")),o.media&&(n+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(n+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),n+=o.css,r&&(n+="}"),o.media&&(n+="}"),o.supports&&(n+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,o)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var a=e[n]={id:n,exports:{}};return t[n](a,a.exports,o),a.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=o(379),e=o.n(t),n=o(795),r=o.n(n),a=o(569),i=o.n(a),c=o(565),s=o.n(c),d=o(216),u=o.n(d),l=o(589),p=o.n(l),f=o(192),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=u(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;let h=!1;function x(t){document.querySelector("#error").textContent=t,document.querySelector(".weather"),document.querySelector(".icon-img").textContent="no Data",document.querySelector(".country").textContent="no Data",document.querySelector(".condition").textContent="no Data",document.querySelector(".clouds").textContent="no Data",document.querySelector(".max-low").textContent="no Data",document.querySelector(".degrees").textContent="no Data"}function g(t,e){(async function(t){const e=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&units=metric&appid=b027513fdfc1efe52bc162e6113654d5`),o=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&units=imperial&appid=b027513fdfc1efe52bc162e6113654d5`);if(e.status>=200&&e.status<=299){document.querySelector("#error").textContent="";const t=await e.json(),n=await o.json();return await Promise.all([t,n])}x(new Error("Sorry, we can not find the location you are searchign for!"))})(e).then((o=>{y(new t(o[0].weather[0].id,o[0].main.temp,o[1].main.temp,o[0].main.temp_min,o[1].main.temp_min,o[0].main.temp_max,o[1].main.temp_max,o[0].main.feels_like,o[1].main.feels_like,o[0].weather[0].main,o[0].weather[0].description,o[0].weather[0].icon,o[0].clouds.all,o[0].sys.country,e.toUpperCase()))})).catch((t=>x(t)))}function y(t){const e=document.querySelector(".icon-img"),o=document.querySelector(".country"),n=document.querySelector(".condition"),r=document.querySelector(".clouds"),a=document.querySelector(".max-low"),i=document.querySelector(".degrees");o.textContent=t.city+", "+t.country,n.textContent=t.condDescription,r.textContent=t.clouds+" % Clouds",i.textContent=parseInt(t.tempC)+" °C",a.textContent="min Temp: "+parseInt(t.minTempC)+" °C, max Temp: "+t.maxTempC+" °C";let c=`http://openweathermap.org/img/wn/${t.wIcon}@2x.png`;e.src=c,function(t){const e="https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80",o="https://images.unsplash.com/photo-1622278647429-71bc97e904e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80",n="https://images.unsplash.com/photo-1498496294664-d9372eb521f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fD,B8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",r="https://images.unsplash.com/photo-1599070221195-bf2801877d7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",a="https://images.unsplash.com/photo-1437624155766-b64bf17eb2ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",i="https://images.unsplash.com/photo-1511131341194-24e2eeeebb09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",c="https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80";t>=801&&t<=802?document.body.style.backgroundImage="url("+e+")":t>=701&&t<=781?document.body.style.backgroundImage="url("+c+")":800===t?document.body.style.backgroundImage="url("+o+")":t>=803&&t<=804?document.body.style.backgroundImage="url("+n+")":t>=500&&t<=531||t>=300&&t<=321?document.body.style.backgroundImage="url("+a+")":t>=200&&t<=232?document.body.style.backgroundImage="url("+r+")":t>=600&&t<=622&&(document.body.style.backgroundImage="url("+i+")")}(t.id)}document.querySelector(".switcher").classList.remove("animate"),document.querySelector(".switch").addEventListener("click",(function(){const t=document.querySelector(".switcher");let e=document.querySelector(".degrees"),o=document.querySelector(".max-low"),n=function(t){return t.textContent.match(/[+-]?\d+(\.\d+)?/g)}(o);if(t.classList.toggle("animate"),h=!h,h){let t=1.8*parseFloat(e.textContent)+32;e.textContent=t;let r=1.8*n[0]+32,a=1.8*n[1]+32;o.textContent=`min Temp: ${r.toFixed(1)}\n         °F, max Temp: ${a.toFixed(1)} °F`}else{let t=5*(parseFloat(e.textContent)-32)/9;e.textContent=t.toFixed(1);let r=(n[0]-32)*(5/9),a=(n[1]-32)*(5/9);o.textContent=`min Temp: ${r.toFixed(1)}\n         °C, max Temp: ${a.toFixed(1)} °C`}})),function(){class t{constructor(t,e,o,n,r,a,i,c,s,d,u,l,p,f,m){this.id=t,this.tempC=e,this.tempF=o,this.minTempC=n,this.minTempF=r,this.maxTempC=a,this.maxTempF=i,this.tempFeelsC=c,this.tempFeelsF=s,this.wCondition=d,this.condDescription=u,this.wIcon=l,this.clouds=p,this.country=f,this.city=m}}const e=document.querySelector("#country");e.addEventListener("keypress",(o=>{"Enter"===o.key&&(g(t,e.value),document.querySelector(".switcher").classList.remove("animate"),h=!1,y(t))})),function(){let t;navigator.geolocation.getCurrentPosition((async e=>{let o=e.coords.longitude,n=e.coords.latitude;t=await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${n}&longitude=${o}&localityLanguage=en`),t=await t.json(),console.log(t.city,t.countryCode)}),(async t=>{console.log(t)}))}(),g(t,"graz")}()})()})();