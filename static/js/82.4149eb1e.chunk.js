(this["webpackJsonpcopernicus-react-arcgis-map"]=this["webpackJsonpcopernicus-react-arcgis-map"]||[]).push([[82],{549:function(e,t,a){"use strict";a.r(t);var l=a(10),r=a(13),n=a(2),i=a(3),o=a(4),s=a(5),c=a(0),u=(a(12),a(82)),p=(a(11),a(14),a(1)),b=a(24),y=a(6),j=a(25),v=a(17),O=a(9),f=(a(15),a(16),a(34)),m=a(45),d=a(47),h=(a(63),a(50)),w=a(135),g=a(158),T=a(189),S=a(232),R=a(188),x=a(283),k=a(231),P=a(178),I=a(84),E=a(560),M=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),i=0;i<l;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).copyright="",e.fullExtent=new d.a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,f.a.WebMercator),e.legendEnabled=!1,e.isReference=null,e.popupEnabled=!1,e.spatialReference=f.a.WebMercator,e.subDomains=null,e.tileInfo=new I.a({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new m.a({x:-20037508.342787,y:20037508.342787,spatialReference:f.a.WebMercator}),spatialReference:f.a.WebMercator,lods:[new P.a({level:0,scale:591657527.591555,resolution:156543.033928}),new P.a({level:1,scale:295828763.795777,resolution:78271.5169639999}),new P.a({level:2,scale:147914381.897889,resolution:39135.7584820001}),new P.a({level:3,scale:73957190.948944,resolution:19567.8792409999}),new P.a({level:4,scale:36978595.474472,resolution:9783.93962049996}),new P.a({level:5,scale:18489297.737236,resolution:4891.96981024998}),new P.a({level:6,scale:9244648.868618,resolution:2445.98490512499}),new P.a({level:7,scale:4622324.434309,resolution:1222.99245256249}),new P.a({level:8,scale:2311162.217155,resolution:611.49622628138}),new P.a({level:9,scale:1155581.108577,resolution:305.748113140558}),new P.a({level:10,scale:577790.554289,resolution:152.874056570411}),new P.a({level:11,scale:288895.277144,resolution:76.4370282850732}),new P.a({level:12,scale:144447.638572,resolution:38.2185141425366}),new P.a({level:13,scale:72223.819286,resolution:19.1092570712683}),new P.a({level:14,scale:36111.909643,resolution:9.55462853563415}),new P.a({level:15,scale:18055.954822,resolution:4.77731426794937}),new P.a({level:16,scale:9027.977411,resolution:2.38865713397468}),new P.a({level:17,scale:4513.988705,resolution:1.19432856685505}),new P.a({level:18,scale:2256.994353,resolution:.597164283559817}),new P.a({level:19,scale:1128.497176,resolution:.298582141647617})]}),e.type="web-tile",e.urlTemplate=null,e.wmtsInfo=null,e}return Object(i.a)(a,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(r.a)({urlTemplate:e},t):e}},{key:"load",value:function(e){var t=this,a=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((function(){var e="";if(t.urlTemplate)if(t.spatialReference.equals(t.tileInfo.spatialReference)){var a=new O.a(t.urlTemplate);t.subDomains&&t.subDomains.length>0||-1===a.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new v.a("web-tile-layer:load","WebTileLayer (title: '".concat(t.title,"', id: '").concat(t.id,"') ").concat(e))}));return this.addResolvingPromise(a),Promise.resolve(this)}},{key:"levelValues",get:function(){var e=[];if(!this.tileInfo)return null;var t,a=Object(l.a)(this.tileInfo.lods);try{for(a.s();!(t=a.n()).done;){var r=t.value;e[r.level]=r.levelValue||r.level}}catch(n){a.e(n)}finally{a.f()}return e}},{key:"readSpatialReference",value:function(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&f.a.fromJSON(t.fullExtent.spatialReference)}},{key:"tileServers",get:function(){if(!this.urlTemplate)return null;var e=[],t=this.urlTemplate,a=this.subDomains,r=new O.a(t),n=r.scheme?r.scheme+"://":"//",i=n+r.authority+"/";if(-1===r.authority.indexOf("{subDomain}"))e.push(i);else if(a&&a.length>0&&r.authority.split(".").length>1){var o,s=Object(l.a)(a);try{for(s.s();!(o=s.n()).done;){var c=o.value;e.push(n+r.authority.replace(/\{subDomain\}/gi,c)+"/")}}catch(u){s.e(u)}finally{s.f()}}return e.map((function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e}))}},{key:"urlPath",get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,t=new O.a(e),a=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(a.length)}},{key:"readUrlTemplate",value:function(e,t){return e||t.templateUrl}},{key:"writeUrlTemplate",value:function(e,t){e&&Object(O.v)(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=Object(O.C)(e)),t.templateUrl=e}},{key:"fetchTile",value:function(e,t,a){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=l.signal,n=l.timestamp,i=this.getTileUrl(e,t,a),o={responseType:"image",signal:r};return null!=n&&(o.query={_ts:l.timestamp}),Object(h.default)(i,o).then((function(e){return e.data}))}},{key:"getTileUrl",value:function(e,t,a){var l=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+Object(u.c)(this.urlPath,{level:l,z:l,col:a,x:a,row:t,y:t})}}]),a}(Object(S.a)(Object(x.a)(Object(k.a)(Object(T.a)(Object(R.a)(Object(g.a)(w.a)))))));Object(c.a)([Object(p.b)({type:String,value:"",json:{write:!0}})],M.prototype,"copyright",void 0),Object(c.a)([Object(p.b)({type:d.a,json:{write:!0}})],M.prototype,"fullExtent",void 0),Object(c.a)([Object(p.b)({readOnly:!0,json:{read:!1,write:!1}})],M.prototype,"legendEnabled",void 0),Object(c.a)([Object(p.b)({type:["show","hide"]})],M.prototype,"listMode",void 0),Object(c.a)([Object(p.b)()],M.prototype,"levelValues",null),Object(c.a)([Object(p.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],M.prototype,"isReference",void 0),Object(c.a)([Object(p.b)({type:["WebTiledLayer"],value:"WebTiledLayer"})],M.prototype,"operationalLayerType",void 0),Object(c.a)([Object(p.b)({readOnly:!0,json:{read:!1,write:!1}})],M.prototype,"popupEnabled",void 0),Object(c.a)([Object(p.b)({type:f.a})],M.prototype,"spatialReference",void 0),Object(c.a)([Object(b.a)("spatialReference",["spatialReference","fullExtent.spatialReference"])],M.prototype,"readSpatialReference",null),Object(c.a)([Object(p.b)({type:[String],json:{write:!0}})],M.prototype,"subDomains",void 0),Object(c.a)([Object(p.b)({type:I.a,json:{write:!0}})],M.prototype,"tileInfo",void 0),Object(c.a)([Object(p.b)({readOnly:!0})],M.prototype,"tileServers",null),Object(c.a)([Object(p.b)({json:{read:!1}})],M.prototype,"type",void 0),Object(c.a)([Object(p.b)()],M.prototype,"urlPath",null),Object(c.a)([Object(p.b)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],M.prototype,"urlTemplate",void 0),Object(c.a)([Object(b.a)("urlTemplate",["urlTemplate","templateUrl"])],M.prototype,"readUrlTemplate",null),Object(c.a)([Object(j.a)("urlTemplate",{templateUrl:{type:String}})],M.prototype,"writeUrlTemplate",null),Object(c.a)([Object(p.b)({type:E.a,json:{write:!0}})],M.prototype,"wmtsInfo",void 0);var U=M=Object(c.a)([Object(y.a)("esri.layers.WebTileLayer")],M);t.default=U},560:function(e,t,a){"use strict";var l,r=a(2),n=a(3),i=a(4),o=a(5),s=a(0),c=(a(12),a(19)),u=(a(11),a(14),a(1)),p=a(6),b=(a(9),a(15),a(16),a(21)),y=l=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(n.a)(a,[{key:"clone",value:function(){return new l({customLayerParameters:Object(c.a)(this.customLayerParameters),customParameters:Object(c.a)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}}]),a}(b.a);Object(s.a)([Object(u.b)({json:{type:Object,write:!0}})],y.prototype,"customLayerParameters",void 0),Object(s.a)([Object(u.b)({json:{type:Object,write:!0}})],y.prototype,"customParameters",void 0),Object(s.a)([Object(u.b)({type:String,json:{write:!0}})],y.prototype,"layerIdentifier",void 0),Object(s.a)([Object(u.b)({type:String,json:{write:!0}})],y.prototype,"tileMatrixSet",void 0),Object(s.a)([Object(u.b)({type:String,json:{write:!0}})],y.prototype,"url",void 0);var j=y=l=Object(s.a)([Object(p.a)("esri.layer.support.WMTSLayerInfo")],y);t.a=j}}]);
//# sourceMappingURL=82.4149eb1e.chunk.js.map