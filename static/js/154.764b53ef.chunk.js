(this["webpackJsonpcopernicus-react-arcgis-map"]=this["webpackJsonpcopernicus-react-arcgis-map"]||[]).push([[154],{794:function(t,e,i){"use strict";i.r(e),i.d(e,"previewWebStyleSymbol",(function(){return r}));var n=i(33),a=i(50);function r(t,e,i){var r=t.thumbnail&&t.thumbnail.url;return r?Object(a.default)(r,{responseType:"image"}).then((function(t){var e=function(t,e){var i=!/\\.svg$/i.test(t.src)&&e&&e.disableUpsampling,a=Math.max(t.width,t.height),r=e&&null!=e.maxSize?Object(n.d)(e.maxSize):120;i&&(r=Math.min(a,r));var h=Math.min(r,e&&null!=e.size?Object(n.d)(e.size):a);if(h!==a){var c=0!==t.width&&0!==t.height?t.width/t.height:1;c>=1?(t.width=h,t.height=h/c):(t.width=h*c,t.height=h)}return t}(t.data,i);return i&&i.node?(i.node.appendChild(e),i.node):e})):t.fetchSymbol().then((function(t){return e(t,i)}))}}}]);
//# sourceMappingURL=154.764b53ef.chunk.js.map