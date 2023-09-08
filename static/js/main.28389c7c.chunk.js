(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{45:function(e,t,a){e.exports=a(57)},50:function(e,t,a){},51:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=(a(50),a(51),a(31)),i=a.n(o),s=a(21),u=a(33),m=a(25),d=a(89);function h(e){var t=e.dayName,a=e.dayData,r=e.time,l=e.onClose,c="";return"night"===r&&(c="Evening"),n.createElement(n.Fragment,null,n.createElement("div",{className:"Detail-modal-background"},n.createElement("div",{className:"Detail-modal"},n.createElement("h1",null,"Detailed Forecast for ",t," ",c),n.createElement("p",null,a),n.createElement(d.a,{onClick:l},"Close"))))}var p=n.useState;var f=function(e){var t=e.dayData,a=e.nightData,r=p(!1),l=Object(m.a)(r,2),c=l[0],o=l[1],i=p({name:"",detail:"",time:""}),s=Object(m.a)(i,2),u=s[0],f=s[1],g="Weather Icon";function E(e){var t=new Date(e.startTime),a=t.getDate(),n=t.getMonth();return"".concat(["January","February","March","April","May","June","July","August","Spetember","October","November","December"][n]," ").concat(a)}function v(e,n,r){o(!0),"day"===r&&f({name:E(t[e]),detail:t[e].detailedForecast,time:"day"}),"night"===r&&f({name:E(a[e]),detail:a[e].detailedForecast,time:"night"})}function y(e,t){var a=window.location.href.includes("local")?"./weather-app":".";if(e.includes("Snow"))return g="Snowflake Icon","".concat(a,"/snowflake.svg");if(e.includes("Rain")||e.includes("Drizzle")||e.includes("Showers"))return g="Raindrop Icon","".concat(a,"/rain.svg");if(e.includes("Sunny"))return e.includes("Partly")?(g="Sun With Clouds Icon","".concat(a,"/partly_cloudy.svg")):(g="Sun Icon","".concat(a,"/sun.svg"));if(e.includes("Cloudy"))return e.includes("Partly")&&"day"===t?(g="Sun With Clouds Icon","".concat(a,"/partly_cloudy.svg")):e.includes("Partly")&&"night"===t?(g="Moon WIth Clouds Icon","".concat(a,"/moon_cloudy.svg")):(g="Cloud Icon","".concat(a,"/cloud.svg"));if(e.includes("Clear")){if("day"===t)return g="Sun Icon","".concat(a,"/sun.svg");if("night"===t)return g="Moon Icon","".concat(a,"/moon.svg")}return e.includes("Sleet")?(g="Sleet Icon","".concat(a,"/sleet.svg")):void 0}return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement("div",{key:t,className:"Week-item"},n.createElement("h2",{className:"Day-header"},e.name,n.createElement("br",null),E(e)),n.createElement("img",{className:"Icons",src:y(e.shortForecast,"day"),alt:g}),n.createElement("h3",null,e.shortForecast),n.createElement("h4",{className:"Day-item"},"Temp: ",e.temperature,"\xb0F"),n.createElement("h4",null,"Wind Speed: ",e.windSpeed),n.createElement(d.a,{variant:"contained",onClick:function(e){return v(t,0,"day")}},"Detailed Forecast"))})),a.map((function(e,t){return n.createElement("div",{key:t,className:"Week-item"},n.createElement("h2",{className:"Day-header"},e.name,n.createElement("br",null),E(e)),n.createElement("img",{className:"Icons",src:y(e.shortForecast,"night"),alt:g}),n.createElement("h4",{className:"Day-item"},e.shortForecast),n.createElement("h4",{className:"Day-item"},"Temp: ",e.temperature,"\xb0F"),n.createElement("h4",null,"Wind Speed: ",e.windSpeed),n.createElement(d.a,{variant:"contained",onClick:function(e){return v(t,0,"night")}},"Detailed Forecast"))})),c&&n.createElement(h,{dayName:u.name,dayData:u.detail,time:u.time,onClose:function(){o(!1)}}))},g=a(88),E=a(80),v=a(81),y=a(82),w=a(83);function b(e){var t=e.open,a=e.msg,r=e.handleClose;return n.createElement(n.Fragment,null,n.createElement(g.a,{open:t},n.createElement(E.a,null,"Unexpected Error"),n.createElement(v.a,null,n.createElement(y.a,null,a)),n.createElement(w.a,null,n.createElement(d.a,{onClick:r},"OK"))))}var W=a(84);function D(e){var t=e.msg,a=e.open;return n.createElement(n.Fragment,null,n.createElement(g.a,{open:a},n.createElement(v.a,null,n.createElement(y.a,null,t,n.createElement(W.a,{size:20})))))}var k=n.useEffect,S=n.useState;var N=function(){var e=S({fullWeather:[],dailyStartWeather:[],dailyEndWeather:[],error:!1,errorMsg:"We're sorry, the weather API's server is temporarily down. Please try again later",loading:!0}),t=Object(m.a)(e,2),a=t[0],r=t[1];function l(){return(l=Object(u.a)(i.a.mark((function e(){var t,n,l,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(Object(s.a)({},a,{loading:!0})),"https://api.weather.gov/points/40.71427,-74.00597",e.next=4,fetch("https://api.weather.gov/points/40.71427,-74.00597");case 4:if(!(t=e.sent)){e.next=22;break}return e.next=8,t.json();case 8:if(!(n=e.sent)){e.next=21;break}return l=n.properties.forecast,e.next=13,fetch(l);case 13:if(!(c=e.sent)){e.next=21;break}return e.next=17,c.json();case 17:if(!(o=e.sent)){e.next=21;break}return r(Object(s.a)({},a,{fullWeather:o.properties.periods,loading:!1})),e.abrupt("return");case 21:r(Object(s.a)({},a,{error:!0,loading:!1}));case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e){return e.sort((function(e,t){var a=new Date(e.startTime),n=new Date(t.startTime);return a>n?1:a<n?-1:0})),e}return console.log(a),k((function(){0!==a.fullWeather.length?0===a.dailyStartWeather.length&&function(){var e=[],t=[];a.fullWeather.forEach((function(a){a.startTime.includes("18:00:00")?t.push(a):e.push(a)})),r(Object(s.a)({},a,{dailyStartWeather:c(e),dailyEndWeather:c(t),loading:!1}))}():function(){l.apply(this,arguments)}()}),[a.fullWeather.length]),n.createElement(n.Fragment,null,n.createElement(D,{msg:"Loading Weather Data...",open:a.loading}),n.createElement("h1",{className:"Week-header"},"7 Day Forecast for NYC"),n.createElement("div",{className:"Week-container"},n.createElement(f,{dayData:a.dailyStartWeather,nightData:a.dailyEndWeather}),n.createElement(b,{open:a.error,msg:a.errorMsg,handleClose:function(){r(Object(s.a)({},a,{error:!1,errorMsg:""}))}})))},F=a(85),C=a(86),I=a(87),j=a(39),O=a(90),x=a(91),M=Object(F.a)((function(){return{appBar:{backgroundColor:"#282c34",justifyContent:"space-between"},searchBar:{posiiton:"relative",marginRight:0,marginLeft:"auto"},search:{color:"#fff"}}}));function B(){var e=M();return n.createElement(n.Fragment,null,n.createElement(C.a,{className:e.appBar},n.createElement(I.a,null,n.createElement(j.a,null,"Weather Forecast"),n.createElement("div",{className:e.searchBar},n.createElement(O.a,{className:e.search,placeholder:"Coming eventually...",startAdornment:n.createElement(x.a,null)})))))}var T=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(B,null),r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.28389c7c.chunk.js.map