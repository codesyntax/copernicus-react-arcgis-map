(this["webpackJsonpcopernicus-react-arcgis-map"]=this["webpackJsonpcopernicus-react-arcgis-map"]||[]).push([[37],{349:function(e,t,a){},429:function(e,t,a){},430:function(e,t,a){},437:function(e,t,a){"use strict";a.r(t);var i=a(131),n=a.n(i),s=a(270),r=a.n(s),c=(a(429),a(430),a(328)),l=a(417),o=a(418),d=a(327),u=a(419),m=a(415),b=a(416),p=(a(348),a(349),a(27)),v=a(326),j=a.n(v),g=a(66);var f=function(){var e=Object(i.useState)(!1),t=Object(p.a)(e,2),a=t[0],n=t[1],s=j()("esri-widget--button esri-widget esri-interactive",{"esri-icon-left-arrow":a,"esri-icon-drag-horizontal":!a});return Object(g.jsxs)("div",{className:"map-left-menu-container esri-component",children:[Object(g.jsx)("div",{className:s,onClick:function(){return n(!a)}}),a?Object(g.jsxs)("div",{className:"map-menu tab-container",style:{display:"block"},children:[Object(g.jsxs)("div",{className:"tabs",role:"tablist",children:[Object(g.jsx)("span",{className:"tab tab-selected",id:"products_label",role:"tab","aria-controls":"products_panel","aria-selected":"true",children:"Products and datasets"}),Object(g.jsx)("span",{className:"tab",id:"active_label",role:"tab","aria-controls":"active_panel","aria-selected":"false",children:"Active on map"})]}),Object(g.jsxs)("div",{className:"panels",children:[Object(g.jsx)("div",{className:"panel panel-selected",id:"products_panel",role:"tabpanel","aria-hidden":"false"}),Object(g.jsx)("div",{className:"panel",id:"active_panel",role:"tabpanel","aria-hidden":"true",children:Object(g.jsx)("div",{className:"no-active-datasets",children:"No datasets selected"})})]})]}):""]})};var h,O=function(){var e=Object(i.useState)(!1),t=Object(p.a)(e,2),a=t[0],n=t[1],s=j()("esri-icon-basemap esri-widget--button esri-widget esri-interactive",{"esri-icon-right-arrow":a,"esri-icon-basemap":!a});return Object(g.jsx)("div",{className:s,id:"map_basemap_button",role:"button",title:"Basemap gallery",onClick:function(){a?(n(!1),document.getElementsByClassName("esri-basemap-gallery")[0].style.display="none"):(document.getElementsByClassName("esri-basemap-gallery")[0].classList.add("basemap-gallery-container"),document.getElementsByClassName("esri-basemap-gallery")[0].style.display="block",n(!0))}})};var w=function(){var e=Object(i.useRef)(null);return Object(i.useEffect)((function(){if(e.current){var t=new c.a({basemap:"topo-vector",slider:!1});if(h=new l.a({container:e.current,map:t,center:[15,50],zoom:3,ui:{components:["attribution"]}}),console.log(h),h){h.constraints={minZoom:3};var a=new d.a({view:h});h.ui.add(a,{position:"top-right"});var i=document.createElement("div");i.className="map-left-menu-container",r.a.render(Object(g.jsx)(O,{}),i),h.ui.add(i,"top-right");var n=new o.a({view:h});h.ui.add(n,"top-right");var s=document.createElement("div");s.className="esri-icon-printer esri-widget--button esri-widget esri-interactive",s.setAttribute("role","button"),s.setAttribute("title","Print"),s.addEventListener("click",(function(e){})),h.ui.add(s,"top-right");var m=document.createElement("div");m.className="esri-icon-cursor-marquee esri-widget--button esri-widget esri-interactive",m.setAttribute("role","button"),m.setAttribute("title","Select area"),m.addEventListener("click",(function(e){})),h.ui.add(m,"top-right");var b=document.createElement("div");b.className="esri-icon-legend esri-widget--button esri-widget esri-interactive",b.setAttribute("role","button"),b.setAttribute("title","Legend"),b.addEventListener("click",(function(e){})),h.ui.add(b,"top-right");var p=document.createElement("div");p.className="map-left-menu-container",r.a.render(Object(g.jsx)(f,{}),p),h.ui.add(p,"top-left");var v=new u.a({view:h,unit:"dual"});h.ui.add(v,"bottom-left"),h.watch("updating",(function(e){document.querySelector(".loading").style.display=!0===e?"flex":"none"}))}}}),[]),Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"map-container",children:[Object(g.jsx)("div",{ref:e,className:"map"}),Object(g.jsxs)("div",{className:"loading",children:[" ",Object(g.jsx)(m.a,{icon:b.a,pulse:!0})]})]})})};var N=function(){return Object(g.jsx)(w,{})},x=function(e){e&&e instanceof Function&&a.e(237).then(a.bind(null,807)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),i(e),n(e),s(e),r(e)}))};r.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(N,{})}),document.getElementById("root")),x()}},[[437,38,39]]]);
//# sourceMappingURL=main.d9849590.chunk.js.map