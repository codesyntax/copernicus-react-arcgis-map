(this["webpackJsonpcopernicus-react-arcgis-map"]=this["webpackJsonpcopernicus-react-arcgis-map"]||[]).push([[67],{629:function(e,t,r){"use strict";r.r(t);var n=r(8),a=r.n(n),i=r(18),s=r(23),l=r(13),o=r(10),u=r(2),c=r(3),p=r(29),b=r(4),f=r(5),y=r(0),d=(r(12),r(19)),m=r(65),h=r(7),v=(r(11),r(14)),O=r(1),g=r(35),j=r(24),x=r(6),w=r(25),E=r(9),S=(r(15),r(16),r(198)),N=r(37),I=r(34),R=r(47),U=r(30),k=r(160),F=r(50),L=r(89),_=r(147),A=r(135),P=r(158),M=r(117),q=r(81),T=r(189),C=r(232),V=r(188),W=r(283),B=r(231),D=r(371),G=r(121),H=r(679),J=r(27),X=r(17),$=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],Q={84:4326,83:4269,27:4267};function Y(e){if(!e)return null;var t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));var r=e.documentElement;if("ServiceExceptionReport"===r.nodeName){var n=Array.prototype.slice.call(r.childNodes).map((function(e){return e.textContent})).join("\r\n");throw new X.a("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",n)}var a=ee("Capability",r),i=ee("Service",r),s=ee("Request",a);if(!a||!i||!s)return null;var l=ee("Layer",a);if(!l)return null;var o,u,c,p,b="WMS_Capabilities"===r.nodeName||"WMT_MS_Capabilities"===r.nodeName?r.getAttribute("version"):"1.3.0",f=re("Title",i,"")||re("Name",i,""),y=re("AccessConstraints",i,""),d=re("Abstract",i,""),m=parseInt(re("MaxWidth",i,"5000"),10),h=parseInt(re("MaxHeight",i,"5000"),10),v=ie(s,"GetMap"),O=ae(s,"GetMap"),g=le(l,b,t),j=0;if(Array.prototype.slice.call(a.childNodes).forEach((function(e){"Layer"===e.nodeName&&(0===j?o=e:1===j?(g.name&&(g.name="",g.sublayers.push(le(o,b,t))),g.sublayers.push(le(e,b,t))):g.sublayers.push(le(e,b,t)),j++)})),!g)return null;var x=g.fullExtents;if((u=g.sublayers)||(u=[]),0===u.length&&u.push(g),!(c=g.extent)){var w=new R.a(u[0].extent);g.extent=w.toJSON(),c=g.extent}if(!(p=g.spatialReferences).length&&u.length>0){var E=function e(t){var r=[];return t.sublayers.forEach((function(t){!r.length&&t.spatialReferences.length&&(r=t.spatialReferences||e(t))})),r};u.forEach((function(e){p.length||(p=e.spatialReferences||E(e))}))}var S,N=ae(s,"GetFeatureInfo");if(N){var I=ie(s,"GetFeatureInfo");I.indexOf("text/html")>-1?S="text/html":I.indexOf("text/plain")>-1&&(S="text/plain")}if(!S){!function e(t){t&&(t.queryable=!1,t.sublayers&&t.sublayers.forEach((function(t){e(t)})))}(g)}var U=K(u),k=g.minScale||0,F=g.maxScale||0,L=g.dimensions,_=U.reduce((function(e,t){return e.concat(t.dimensions)}),[]),A=L.concat(_).filter(ue),P=null;if(A.length>0){var M=Number.POSITIVE_INFINITY,q=Number.NEGATIVE_INFINITY;A.forEach((function(e){var t=e.extent;!function(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}(t)?t.forEach((function(e){M=Math.min(M,e.min.getTime()),q=Math.max(q,e.max.getTime())})):t.forEach((function(e){M=Math.min(M,e.getTime()),q=Math.max(q,e.getTime())}))})),P={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[M,q]}}return{copyright:y,description:d,dimensions:L,extent:c,fullExtents:x,featureInfoFormat:S,featureInfoUrl:N,mapUrl:O,maxWidth:m,maxHeight:h,maxScale:F,minScale:k,layers:U,spatialReferences:p,supportedImageFormatTypes:v,timeInfo:P,title:f,version:b}}function z(e){return $.some((function(t){var r=Object(J.a)(t,2),n=r[0],a=r[1];return e>=n&&e<=a}))}function K(e){var t=[];return e.forEach((function(e){t.push(e),e.sublayers&&e.sublayers.length&&(t=t.concat(K(e.sublayers)),delete e.sublayers)})),t}function Z(e,t,r){var n;return null!=(n=t.getAttribute(e))?n:r}function ee(e,t){for(var r=0;r<t.childNodes.length;r++){var n=t.childNodes[r];if(oe(n)&&n.nodeName===e)return n}return null}function te(e,t){for(var r=[],n=0;n<t.childNodes.length;n++){var a=t.childNodes[n];oe(a)&&a.nodeName===e&&r.push(a)}return r}function re(e,t,r){var n=ee(e,t);return n?n.textContent:r}function ne(e,t,r){if(!e)return null;var n,a,i,s,l=parseFloat(e.getAttribute("minx")),o=parseFloat(e.getAttribute("miny")),u=parseFloat(e.getAttribute("maxx")),c=parseFloat(e.getAttribute("maxy"));r?(n=isNaN(o)?-Number.MAX_VALUE:o,a=isNaN(l)?-Number.MAX_VALUE:l,i=isNaN(c)?Number.MAX_VALUE:c,s=isNaN(u)?Number.MAX_VALUE:u):(n=isNaN(l)?-Number.MAX_VALUE:l,a=isNaN(o)?-Number.MAX_VALUE:o,i=isNaN(u)?Number.MAX_VALUE:u,s=isNaN(c)?Number.MAX_VALUE:c);var p=new I.a({wkid:t});return new R.a({xmin:n,ymin:a,xmax:i,ymax:s,spatialReference:p})}function ae(e,t){var r=ee(t,e);if(r){var n=ee("DCPType",r);if(n){var a=ee("HTTP",n);if(a){var i=ee("Get",a);if(i){var s=function(e,t,r,n){var a=ee(e,r);return a?Z(t,a,n):n}("OnlineResource","xlink:href",i,null);if(s)return s.indexOf("&")===s.length-1&&(s=s.substring(0,s.length-1)),function(e,t){var r=[],n=Object(E.J)(e);for(var a in n.query)n.query.hasOwnProperty(a)&&-1===t.indexOf(a.toLowerCase())&&r.push(a+"="+n.query[a]);return n.path+(r.length?"?"+r.join("&"):"")}(s,["service","request"])}}}}return null}function ie(e,t){var r=te("Operation",e);if(0===r.length)return te("Format",ee(t,e)).map((function(e){return e.textContent}));var n=[];return r.forEach((function(e){e.getAttribute("name")===t&&te("Format",e).forEach((function(e){n.push(e.textContent)}))})),n}function se(e,t,r){var n=ee(t,e);if(!n)return r;var a=n.textContent;if(null==a||""===a)return r;var i=Number(a);return isNaN(i)?r:i}function le(e,t,r){var n;if(!e)return null;var a={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},i=ee("LatLonBoundingBox",e),s=ee("EX_GeographicBoundingBox",e),l=null;i&&(l=ne(i,4326)),s&&((l=new R.a(0,0,0,0,new I.a({wkid:4326}))).xmin=parseFloat(re("westBoundLongitude",s,"0")),l.ymin=parseFloat(re("southBoundLatitude",s,"0")),l.xmax=parseFloat(re("eastBoundLongitude",s,"0")),l.ymax=parseFloat(re("northBoundLatitude",s,"0"))),i||s||(l=new R.a(-180,-90,180,90,new I.a({wkid:4326}))),a.minScale=se(e,"MaxScaleDenominator",0),a.maxScale=se(e,"MinScaleDenominator",0);var o=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((function(e){if("Name"===e.nodeName)a.name=e.textContent||"";else if("Title"===e.nodeName)a.title=e.textContent||"";else if("Abstract"===e.nodeName)a.description=e.textContent||"";else if("BoundingBox"===e.nodeName){var n=e.getAttribute(o);if(n&&0===n.indexOf("EPSG:")){var i=parseInt(n.substring(5),10);0===i||isNaN(i)||l||(l="1.3.0"===t?ne(e,i,z(i)):ne(e,i))}var s=n&&n.indexOf(":");if(s&&s>-1){var u=parseInt(n.substring(s+1,n.length),10);0===u||isNaN(u)||(u=Q[u]?Q[u]:u);var c="1.3.0"===t?ne(e,u,z(u)):ne(e,u);a.fullExtents.push(c)}}else if(e.nodeName===o)e.textContent.split(" ").forEach((function(e){0===(e=e.indexOf(":")>-1?parseInt(e.split(":")[1],10):parseInt(e,10))||isNaN(e)||(Q[e]&&(e=Q[e]),-1===a.spatialReferences.indexOf(e)&&a.spatialReferences.push(e))}));else if("Style"!==e.nodeName||a.legendURL){if("Layer"===e.nodeName){var p=le(e,t,r);p&&(p.parentLayerId=a.id,a.sublayers||(a.sublayers=[]),a.sublayers.push(p))}}else{var b=ee("LegendURL",e);if(b){var f=ee("OnlineResource",b);f&&(a.legendURL=f.getAttribute("xlink:href"))}}})),a.extent=null==(n=l)?void 0:n.toJSON(),a.dimensions=te("Dimension",e).filter((function(e){return e.getAttribute("name")&&e.getAttribute("units")&&e.textContent})).map((function(e){var t=e.getAttribute("name"),r=e.getAttribute("units"),n=e.textContent,a=e.getAttribute("unitSymbol"),i=e.getAttribute("default"),s="0"!==Z("default",e,"0"),l="0"!==Z("nearestValue",e,"0"),o="0"!==Z("current",e,"0");return/^time$/i.test(t)&&/^ISO8601$/i.test(r)?{name:"time",units:"ISO8601",extent:be(n),default:be(i),multipleValues:s,nearestValue:l,current:o}:/^elevation$/i.test(t)?{name:"elevation",units:r,extent:ce(n),unitSymbol:a,default:ce(i),multipleValues:s,nearestValue:l}:{name:t,units:r,extent:pe(n),unitSymbol:a,default:pe(i),multipleValues:s,nearestValue:l}})),a}function oe(e){return e.nodeType===Node.ELEMENT_NODE}function ue(e){return"time"===e.name}function ce(e){if(!e)return null;var t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((function(e){var t=e.split("/");return t.length<2?null:{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter((function(e){return e})):r.map((function(e){return parseFloat(e)}))}function pe(e){if(!e)return null;var t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((function(e){var t=e.split("/");return t.length<2?null:{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter((function(e){return e})):r}function be(e){if(!e)return null;var t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((function(e){var t=e.split("/");return t.length<2?null:{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?fe(t[2]):void 0}})).filter((function(e){return e})):r.map((function(e){return new Date(e)}))}function fe(e){var t=e.match(/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i);return t?{years:ye(t[1]),months:ye(t[2]),days:ye(t[3]),hours:ye(t[4]),minutes:ye(t[5]),seconds:ye(t[6])}:null}function ye(e){if(!e)return 0;var t=e.match(/(?:\d+(?:.|,)\d+|\d+)/);if(!t)return 0;var r=t[0].replace(",",".");return Number(r)}function de(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}var me=new Set([102100,3857,102113,900913]),he=new Set([3395,54004]);var ve,Oe=r(674),ge=r(41),je=r(55),xe=0,we=ve=function(e){Object(b.a)(r,e);var t=Object(f.a)(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e))._sublayersHandles=new je.a,n.dimensions=null,n.fullExtents=null,n.featureInfoFormat=null,n.featureInfoUrl=null,n.legendUrl=null,n.legendEnabled=!0,n.maxScale=0,n.minScale=0,n.popupEnabled=!1,n.queryable=!1,n.spatialReferences=null,n}return Object(c.a)(r,[{key:"description",get:function(){return this._get("description")},set:function(e){this._set("description",e)}},{key:"fullExtent",get:function(){return this._get("fullExtent")},set:function(e){this._set("fullExtent",e)}},{key:"readExtent",value:function(e,t){return(e=t.extent)?R.a.fromJSON(e):null}},{key:"id",get:function(){var e=this._get("id");return null==e?xe++:e},set:function(e){this._set("id",e)}},{key:"readLegendUrl",value:function(e,t){return t?t.legendUrl||t.legendURL:null}},{key:"layer",set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((function(t){return t.layer=e}))}},{key:"name",get:function(){return this._get("name")},set:function(e){this._set("name",e)}},{key:"sublayers",set:function(e){var t=this,r=this._get("sublayers");r&&(r.forEach((function(e){e.layer=null})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((function(e){e.parent=t,e.layer=t.layer})),this._sublayersHandles.add([e.on("after-add",(function(e){var r=e.item;r.parent=t,r.layer=t.layer})),e.on("after-remove",(function(e){var t=e.item;t.parent=null,t.layer=null}))])),this._set("sublayers",e)}},{key:"castSublayers",value:function(e){return Object(v.m)(U.a.ofType(ve),e)}},{key:"title",get:function(){return this._get("title")},set:function(e){this._set("title",e)}},{key:"visible",get:function(){return this._get("visible")},set:function(e){this._setAndNotifyLayer("visible",e)}},{key:"clone",value:function(){var e=new ve;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents.map((function(e){return e.clone()}))),this.hasOwnProperty("featureInfoFormat")&&(e.featureInfoFormat=this.featureInfoFormat),this.hasOwnProperty("featureInfoUrl")&&(e.featureInfoUrl=this.featureInfoUrl),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map((function(e){return e.clone()}))),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences.map((function(e){return e}))),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}},{key:"_setAndNotifyLayer",value:function(e,t){var r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}}]),r}(P.b);Object(y.a)([Object(O.b)()],we.prototype,"description",null),Object(y.a)([Object(O.b)({readOnly:!0})],we.prototype,"dimensions",void 0),Object(y.a)([Object(O.b)({value:null})],we.prototype,"fullExtent",null),Object(y.a)([Object(j.a)("fullExtent",["extent"])],we.prototype,"readExtent",null),Object(y.a)([Object(O.b)()],we.prototype,"fullExtents",void 0),Object(y.a)([Object(O.b)()],we.prototype,"featureInfoFormat",void 0),Object(y.a)([Object(O.b)()],we.prototype,"featureInfoUrl",void 0),Object(y.a)([Object(O.b)({type:Number,json:{write:{enabled:!1,overridePolicy:function(){return{ignoreOrigin:!0,enabled:!0}}}}})],we.prototype,"id",null),Object(y.a)([Object(O.b)({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],we.prototype,"legendUrl",void 0),Object(y.a)([Object(j.a)(["web-document"],"legendUrl")],we.prototype,"readLegendUrl",null),Object(y.a)([Object(O.b)({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],we.prototype,"legendEnabled",void 0),Object(y.a)([Object(O.b)({value:null})],we.prototype,"layer",null),Object(y.a)([Object(O.b)()],we.prototype,"maxScale",void 0),Object(y.a)([Object(O.b)()],we.prototype,"minScale",void 0),Object(y.a)([Object(O.b)({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],we.prototype,"name",null),Object(y.a)([Object(O.b)()],we.prototype,"parent",void 0),Object(y.a)([Object(O.b)({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],we.prototype,"popupEnabled",void 0),Object(y.a)([Object(O.b)({type:Boolean,json:{write:{ignoreOrigin:!0}}})],we.prototype,"queryable",void 0),Object(y.a)([Object(O.b)()],we.prototype,"sublayers",null),Object(y.a)([Object(ge.a)("sublayers")],we.prototype,"castSublayers",null),Object(y.a)([Object(O.b)({type:[Number],json:{read:{source:"spatialReferences"}}})],we.prototype,"spatialReferences",void 0),Object(y.a)([Object(O.b)({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],we.prototype,"title",null),Object(y.a)([Object(O.b)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],we.prototype,"visible",null);var Ee=we=ve=Object(y.a)([Object(x.a)("esri.layers.support.WMSSublayer")],we),Se=new g.a({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1}),Ne=function(e){Object(b.a)(r,e);var t=Object(f.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).allSublayers=new _.a({root:Object(p.a)(e),rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return e.sublayers}}),e.customParameters=null,e.customLayerParameters=null,e.copyright=null,e.description=null,e.dimensions=null,e.fullExtent=null,e.fullExtents=null,e.featureInfoFormat=null,e.featureInfoUrl=null,e.imageFormat=null,e.imageMaxHeight=2048,e.imageMaxWidth=2048,e.imageTransparency=!0,e.legendEnabled=!0,e.mapUrl=null,e.isReference=null,e.operationalLayerType="WMS",e.spatialReference=null,e.spatialReferences=null,e.sublayers=null,e.type="wms",e.url=null,e.version=null,e.watch("sublayers",(function(t,r){if(r){var n,a=Object(o.a)(r);try{for(a.s();!(n=a.n()).done;){n.value.layer=null}}catch(u){a.e(u)}finally{a.f()}e.handles.remove("wms-sublayer")}if(t){var i,s=Object(o.a)(t);try{for(s.s();!(i=s.n()).done;){var l=i.value;l.parent=Object(p.a)(e),l.layer=Object(p.a)(e)}}catch(u){s.e(u)}finally{s.f()}e.handles.add([t.on("after-add",(function(t){var r=t.item;r.parent=Object(p.a)(e),r.layer=Object(p.a)(e)})),t.on("after-remove",(function(e){var t=e.item;t.parent=null,t.layer=null}))],"wms-sublayer")}}),!0),e}return Object(c.a)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(l.a)({url:e},t):e}},{key:"load",value:function(e){var t=this,r=Object(h.i)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).then((function(){return t._fetchService(r)}),(function(){return t._fetchService(r)}))),Promise.resolve(this)}},{key:"readFullExtentFromItemOrMap",value:function(e,t){var r=t.extent;return new R.a({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]})}},{key:"writeFullExtent",value:function(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}},{key:"readImageFormat",value:function(e,t){var r=t.supportedImageFormatTypes;return r&&r.indexOf("image/png")>-1?"image/png":r&&r[0]}},{key:"readSpatialReferenceFromItemOrDocument",value:function(e,t){return new I.a(t.spatialReferences[0])}},{key:"writeSpatialReferences",value:function(e,t){var r=this.spatialReference&&this.spatialReference.wkid;e&&r?(t.spatialReferences=e.filter((function(e){return e!==r})),t.spatialReferences.unshift(r)):t.spatialReferences=e}},{key:"readSublayersFromItemOrMap",value:function(e,t,r){return Ie(t.layers,r,t.visibleLayers)}},{key:"readSublayers",value:function(e,t,r){return Ie(t.layers,r)}},{key:"writeSublayers",value:function(e,t,r,n){t.layers=[];var a=new Map,i=e.flatten((function(e){var t=e.sublayers;return t&&t.toArray()})).toArray();i.forEach((function(e){"number"==typeof e.parent.id&&(a.has(e.parent.id)?a.get(e.parent.id).push(e.id):a.set(e.parent.id,[e.id]))})),i.forEach((function(e){var r=Object(l.a)({sublayer:e},n),i=e.write({parentLayerId:"number"==typeof e.parent.id?e.parent.id:-1},r);if(a.has(e.id)&&(i.sublayerIds=a.get(e.id)),!e.sublayers&&e.name){var s=e.write({},r);delete s.id,t.layers.push(s)}})),t.visibleLayers=i.filter((function(e){return e.visible&&!e.sublayers})).map((function(e){return e.name}))}},{key:"createExportImageParameters",value:function(e,t,r,n){var a=n&&n.pixelRatio||1,i=Object(H.a)({extent:e,width:t})*a,o=new Oe.a({layer:this,scale:i}),u=e.xmin,c=e.ymin,p=e.xmax,b=e.ymax,f=function(e,t){var r=e.wkid;return Object(h.h)(t)?r:(!t.includes(r)&&e.latestWkid&&(r=e.latestWkid),me.has(r)?t.find((function(e){return me.has(e)}))||t.find((function(e){return he.has(e)}))||102100:r)}(e.spatialReference,this.spatialReferences),y="1.3.0"===this.version&&z(f)?"".concat(c,",").concat(u,",").concat(b,",").concat(p):"".concat(u,",").concat(c,",").concat(p,",").concat(b),d=o.toJSON();return Object(l.a)(Object(s.a)({bbox:y},"1.3.0"===this.version?"crs":"srs",isNaN(f)?void 0:"EPSG:"+f),d)}},{key:"fetchImage",value:function(){var e=Object(i.a)(a.a.mark((function e(t,r,n,i){var s,o,u,c,p,b,f,y,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=this.mapUrl,(c=this.createExportImageParameters(t,r,n,i)).layers){e.next=4;break}return p=document.createElement("canvas"),e.abrupt("return",(p.width=r,p.height=n,p));case 4:return b=null==i||null==(s=i.timeExtent)?void 0:s.start,f=null==i||null==(o=i.timeExtent)?void 0:o.end,y=b&&f?b.getTime()===f.getTime()?de(b):"".concat(de(b),"/").concat(de(f)):void 0,d={responseType:"image",query:this._mixCustomParameters(Object(l.a)(Object(l.a)({width:r,height:n},c),{},{time:y})),signal:null==i?void 0:i.signal},e.abrupt("return",(null!=i&&i.timestamp&&(d.query=Object(l.a)({_ts:i.timestamp},d.query)),Object(F.default)(u,d).then((function(e){return e.data}))));case 6:case"end":return e.stop()}}),e,this)})));return function(t,r,n,a){return e.apply(this,arguments)}}()},{key:"fetchFeatureInfo",value:function(e,t,r,n,a){var i=Object(H.a)({extent:e,width:t}),s=function(e){return e.length?e.filter((function(e){return e.popupEnabled&&e.name&&e.queryable})).map((function(e){return e.name})).join(","):""}(new Oe.a({layer:this,scale:i}).visibleSublayers);if(!this.featureInfoUrl||!s)return null;var o="1.3.0"===this.version?{I:n,J:a}:{x:n,y:a},u=Object(l.a)({query_layers:s,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r},o),c=Object(l.a)(Object(l.a)({},this.createExportImageParameters(e,t,r)),u),p=this._mixCustomParameters(c),b=Object(E.e)(this.featureInfoUrl,p),f=document.createElement("iframe");f.src=b,f.frameBorder="0",f.marginHeight="0",f.marginWidth="0",f.style.width="100%",f.setAttribute("sandbox","");var y=new k.a({title:this.title,content:f});return new L.a({sourceLayer:this,popupTemplate:y})}},{key:"findSublayerById",value:function(e){return this.allSublayers.find((function(t){return t.id===e}))}},{key:"findSublayerByName",value:function(e){return this.allSublayers.find((function(t){return t.name===e}))}},{key:"supportsSpatialReference",value:function(e){return Object(M.d)(this.url)||this.spatialReferences.some((function(t){var r=900913===t?I.a.WebMercator:new I.a({wkid:t});return Object(N.c)(r,e)}))}},{key:"_fetchService",value:function(){var e=Object(i.a)(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.resourceInfo){e.next=6;break}return this.parsedUrl.query&&this.parsedUrl.query.service&&(this.parsedUrl.query.SERVICE=this.parsedUrl.query.service,delete this.parsedUrl.query.service),this.parsedUrl.query&&this.parsedUrl.query.request&&(this.parsedUrl.query.REQUEST=this.parsedUrl.query.request,delete this.parsedUrl.query.request),e.next=4,Object(F.default)(this.parsedUrl.path,{query:Object(l.a)(Object(l.a)({SERVICE:"WMS",REQUEST:"GetCapabilities"},this.parsedUrl.query),this.customParameters),responseType:"xml",signal:t});case 4:r=e.sent,this.resourceInfo=Y(r.data);case 6:this.parsedUrl&&("https"!==(n=new E.a(this.parsedUrl.path)).scheme||n.port&&"443"!==n.port||-1!==m.a.request.httpsDomains.indexOf(n.host)||m.a.request.httpsDomains.push(n.host)),this.read(this.resourceInfo,{origin:"service"});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_mixCustomParameters",value:function(e){if(!this.customLayerParameters&&!this.customParameters)return e;var t=Object(l.a)(Object(l.a)({},this.customParameters),this.customLayerParameters);for(var r in t)e[r.toLowerCase()]=t[r];return e}}]),r}(Object(G.b)(Object(C.a)(Object(D.a)(Object(W.a)(Object(B.a)(Object(T.a)(Object(V.a)(Object(P.a)(A.a)))))))));function Ie(e,t,r){var n=new Map;e.every((function(e){return null==e.id}))&&(e=Object(d.a)(e)).forEach((function(e,t){return e.id=t}));var a,i=Object(o.a)(e);try{for(i.s();!(a=i.n()).done;){var s=a.value,l=new Ee;l.read(s,t),-1===(null==r?void 0:r.indexOf(l.name))&&(l.visible=!1),n.set(l.id,l)}}catch(m){i.e(m)}finally{i.f()}var u,c=[],p=Object(o.a)(e);try{for(p.s();!(u=p.n()).done;){var b=u.value,f=n.get(b.id);if(null!=b.parentLayerId&&b.parentLayerId>=0){var y=n.get(b.parentLayerId);y.sublayers||(y.sublayers=new U.a),y.sublayers.unshift(f)}else c.unshift(f)}}catch(m){p.e(m)}finally{p.f()}return c}Object(y.a)([Object(O.b)({readOnly:!0})],Ne.prototype,"allSublayers",void 0),Object(y.a)([Object(O.b)({json:{type:Object,write:!0}})],Ne.prototype,"customParameters",void 0),Object(y.a)([Object(O.b)({json:{type:Object,write:!0}})],Ne.prototype,"customLayerParameters",void 0),Object(y.a)([Object(O.b)({type:String,json:{write:!0}})],Ne.prototype,"copyright",void 0),Object(y.a)([Object(O.b)()],Ne.prototype,"description",void 0),Object(y.a)([Object(O.b)({readOnly:!0})],Ne.prototype,"dimensions",void 0),Object(y.a)([Object(O.b)({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{service:{read:{source:"extent"}}}}})],Ne.prototype,"fullExtent",void 0),Object(y.a)([Object(j.a)(["web-document","portal-item"],"fullExtent",["extent"])],Ne.prototype,"readFullExtentFromItemOrMap",null),Object(y.a)([Object(w.a)(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],Ne.prototype,"writeFullExtent",null),Object(y.a)([Object(O.b)()],Ne.prototype,"fullExtents",void 0),Object(y.a)([Object(O.b)({type:String,json:{write:{ignoreOrigin:!0}}})],Ne.prototype,"featureInfoFormat",void 0),Object(y.a)([Object(O.b)({type:String,json:{write:{ignoreOrigin:!0}}})],Ne.prototype,"featureInfoUrl",void 0),Object(y.a)([Object(O.b)({type:String,json:{origins:{"web-document":{default:"image/png",type:Se.jsonValues,read:{reader:Se.read,source:"format"},write:{writer:Se.write,target:"format"}}}}})],Ne.prototype,"imageFormat",void 0),Object(y.a)([Object(j.a)("imageFormat",["supportedImageFormatTypes"])],Ne.prototype,"readImageFormat",null),Object(y.a)([Object(O.b)({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],Ne.prototype,"imageMaxHeight",void 0),Object(y.a)([Object(O.b)({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],Ne.prototype,"imageMaxWidth",void 0),Object(y.a)([Object(O.b)()],Ne.prototype,"imageTransparency",void 0),Object(y.a)([Object(O.b)(q.e)],Ne.prototype,"legendEnabled",void 0),Object(y.a)([Object(O.b)({type:["show","hide","hide-children"]})],Ne.prototype,"listMode",void 0),Object(y.a)([Object(O.b)({type:String,json:{write:{ignoreOrigin:!0}}})],Ne.prototype,"mapUrl",void 0),Object(y.a)([Object(O.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],Ne.prototype,"isReference",void 0),Object(y.a)([Object(O.b)({type:["WMS"]})],Ne.prototype,"operationalLayerType",void 0),Object(y.a)([Object(O.b)({type:I.a,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],Ne.prototype,"spatialReference",void 0),Object(y.a)([Object(j.a)(["web-document","portal-item"],"spatialReference",["spatialReferences"])],Ne.prototype,"readSpatialReferenceFromItemOrDocument",null),Object(y.a)([Object(O.b)({type:[v.a],json:{read:{source:"spatialReferences"},write:{ignoreOrigin:!0}}})],Ne.prototype,"spatialReferences",void 0),Object(y.a)([Object(w.a)(["web-document","portal-item"],"spatialReferences")],Ne.prototype,"writeSpatialReferences",null),Object(y.a)([Object(O.b)({type:U.a.ofType(Ee),json:{write:{target:"layers",overridePolicy:function(e,t,r){if(function(e,t){return e.some((function(e){for(var r in e)if(Object(S.a)(e,r,null,t))return!0;return!1}))}(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],Ne.prototype,"sublayers",void 0),Object(y.a)([Object(j.a)(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],Ne.prototype,"readSublayersFromItemOrMap",null),Object(y.a)([Object(j.a)("service","sublayers",["layers"])],Ne.prototype,"readSublayers",null),Object(y.a)([Object(w.a)("sublayers",{layers:{type:[Ee]},visibleLayers:{type:[String]}})],Ne.prototype,"writeSublayers",null),Object(y.a)([Object(O.b)({json:{read:!1},readOnly:!0,value:"wms"})],Ne.prototype,"type",void 0),Object(y.a)([Object(O.b)(q.n)],Ne.prototype,"url",void 0),Object(y.a)([Object(O.b)({type:String,json:{write:{ignoreOrigin:!0}}})],Ne.prototype,"version",void 0);var Re=Ne=Object(y.a)([Object(x.a)("esri.layers.WMSLayer")],Ne);t.default=Re},674:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(2),a=r(3),i=r(4),s=r(5),l=r(0),o=(r(12),r(11),r(14),r(1)),u=r(6),c=(r(9),r(15),r(16),r(28)),p=r(121),b={visible:"visibleSublayers"},f=function(e){Object(i.a)(r,e);var t=Object(s.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).scale=0,a}return Object(a.a)(r,[{key:"layer",set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(function(){return t.notifyChange("visibleSublayers")})),e.on("wms-sublayer-update",(function(e){return t.notifyChange(b[e.propertyName])}))],"layer"))}},{key:"layers",get:function(){return this.visibleSublayers.filter((function(e){return e.name})).map((function(e){return e.name})).join(",")}},{key:"version",get:function(){this.commitProperty("layers");var e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}},{key:"visibleSublayers",get:function(){var e=this.layer,t=this.scale,r=null==e?void 0:e.sublayers,n=[];return null==r||r.forEach((function e(r){var a=r.minScale,i=r.maxScale,s=r.sublayers;r.visible&&(0===t||(0===a||t<=a)&&(0===i||t>=i))&&(s?s.forEach(e):n.unshift(r))})),n}},{key:"toJSON",value:function(){var e=this.layer,t=this.layers;return{format:e.imageFormat,request:"GetMap",service:"WMS",styles:"",transparent:e.imageTransparency,version:e.version,layers:t}}}]),r}(Object(p.b)(c.a));Object(l.a)([Object(o.b)()],f.prototype,"layer",null),Object(l.a)([Object(o.b)({readOnly:!0})],f.prototype,"layers",null),Object(l.a)([Object(o.b)({type:Number})],f.prototype,"scale",void 0),Object(l.a)([Object(o.b)({readOnly:!0})],f.prototype,"version",null),Object(l.a)([Object(o.b)({readOnly:!0})],f.prototype,"visibleSublayers",null),f=Object(l.a)([Object(u.a)("esri.layers.support.ExportWMSImageParameters")],f)},679:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(52);function a(e,t){var r=t||e.extent,a=e.width,i=Object(n.d)(r&&r.spatialReference);return r&&a?r.width/a*i*n.h*96:0}}}]);
//# sourceMappingURL=67.1cfbce96.chunk.js.map